import { readFile } from 'node:fs/promises';
import { basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Command } from 'commander';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { AGENTS_SNIPPET } from '../../cli/agent-command.ts';
import { createProgram } from '../../cli/program.ts';
import { sdkDiscoveryTools } from '../../cli/sdk-tools.ts';
import { buildEndpointTools } from '../../lib/tools.ts';
import { DEFINITIONS } from '../fixtures/endpoint-definitions.ts';

// Independent of how `agent` finds the file, so the spec checks that resolution too.
const SKILL_FILE = new URL('../../../skills/make-endpoints-cli/SKILL.md', import.meta.url);
const README_FILE = new URL('../../../README.md', import.meta.url);

// Keys the Agent Skills spec (agentskills.io) allows in the frontmatter.
const FRONTMATTER_KEYS = [
	'name',
	'description',
	'license',
	'compatibility',
	'metadata',
	'allowed-tools',
];

/**
 * Apps the skill uses as examples. They come from the generated catalog, which a sync can change
 * at any time, so this is a string allow-list, not a catalog lookup: a stale example can't fail CI.
 */
const EXAMPLE_APPS = ['google-docs'];

type Skill = { fields: Record<string, string>; body: string; lines: string[] };

/** Line-based parse: the frontmatter holds plain `key: value` scalars only, so no YAML parser is needed. */
const parseSkill = (text: string): Skill => {
	const lines = text.split('\n');
	expect(lines[0]).toBe('---');
	const end = lines.indexOf('---', 1);
	expect(end).toBeGreaterThan(1);
	const fields = Object.fromEntries(
		lines.slice(1, end).map((line) => {
			const match = /^([a-z][a-z0-9-]*): (\S.*)$/.exec(line);
			if (!match) throw new Error(`Not a "key: value" line: ${line}`);
			return [match[1], match[2]];
		}),
	) as Record<string, string>;
	return { fields, body: lines.slice(end + 1).join('\n'), lines };
};

/** Fenced blocks and inline code spans of the body; prose is never scanned for commands. */
const codeOf = (body: string): string[] => {
	const blocks: string[] = [];
	const prose = body.replace(/^```[^\n]*\n([\s\S]*?)^```$/gm, (_match, code: string) => {
		blocks.push(code);
		return '';
	});
	const spans = [...prose.matchAll(/`([^`\n]+)`/g)].map((match) => match[1] ?? '');
	return [...blocks, ...spans];
};

/** Tokens after each `make-endpoints-cli` up to the first flag, placeholder or shell operator. */
const mentionsOf = (code: string[]): string[][] => {
	return code.flatMap((text) =>
		[...text.matchAll(/(?<![\w/@-])make-endpoints-cli[ \t]+([^\n]*)/g)].map((match) => {
			const tokens: string[] = [];
			for (const word of (match[1] ?? '').split(/[ \t]+/)) {
				if (!/^[a-z][a-z0-9-]*$/.test(word)) break;
				tokens.push(word);
			}
			return tokens;
		}),
	);
};

/** Walks the command tree; the rest of a leaf command's tokens are its arguments. */
const resolveMention = (program: Command, tokens: string[]): string[] => {
	const mention = `make-endpoints-cli ${tokens.join(' ')}`;
	let command = program;
	const path: string[] = [];
	for (const token of tokens) {
		if (command !== program && command.commands.length === 0) break;
		const next = command.commands.find((candidate) => candidate.name() === token);
		if (!next) throw new Error(`"${mention}" names no command.`);
		command = next;
		path.push(token);
	}
	if (command !== program && command.commands.length > 0) {
		throw new Error(`"${mention}" names a group of commands, not a command.`);
	}
	return path;
};

let stdout: string;

beforeEach(() => {
	stdout = '';
	vi.spyOn(process.stdout, 'write').mockImplementation((chunk) => {
		stdout += String(chunk);
		return true;
	});
});

afterEach(() => {
	vi.restoreAllMocks();
});

const createFullProgram = (): Command => {
	return createProgram({
		version: '0.0.0',
		tools: [...buildEndpointTools(DEFINITIONS), ...sdkDiscoveryTools()],
	});
};

const run = (args: string[]): Promise<Command> => {
	return createFullProgram().parseAsync(args, { from: 'user' });
};

describe('agent', () => {
	it('prints the skill file byte for byte', async () => {
		await run(['agent']);

		expect(stdout).toBe(await readFile(SKILL_FILE, 'utf8'));
	});

	it('prints the AGENTS.md snippet with --snippet', async () => {
		await run(['agent', '--snippet']);

		expect(stdout).toBe(`${AGENTS_SNIPPET}\n`);
		for (const command of [
			'make-endpoints-cli whoami --environment',
			'make-endpoints-cli list --team-id <id>',
			'make-endpoints-cli describe <app> <endpoint>',
			'make-endpoints-cli connections list --team-id <id> --app <app> --endpoint <endpoint>',
			'make-endpoints-cli <app> <endpoint> --team-id <id> --connection-id <id>',
			'make-endpoints-cli agent',
		]) {
			expect(stdout).toContain(command);
		}
	});

	it('is repeated verbatim in the README', async () => {
		const readme = await readFile(README_FILE, 'utf8');

		expect(readme).toContain(`\`\`\`markdown\n${AGENTS_SNIPPET}\n\`\`\``);
	});
});

describe('SKILL.md', () => {
	it('has valid frontmatter', async () => {
		const { fields, body, lines } = parseSkill(await readFile(SKILL_FILE, 'utf8'));

		expect(Object.keys(fields)).toEqual(expect.arrayContaining(['name', 'description']));
		expect(FRONTMATTER_KEYS).toEqual(expect.arrayContaining(Object.keys(fields)));
		for (const value of Object.values(fields)) {
			// `: ` and ` #` would turn a plain YAML scalar into a mapping or a comment.
			expect(value).not.toMatch(/: | #/);
			expect(value).not.toMatch(/^["'[{&*!|>%@`]/);
			expect(value).not.toMatch(/\s$/);
		}
		expect(fields.name).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
		expect(fields.name?.length).toBeLessThanOrEqual(64);
		expect(fields.name).toBe(basename(dirname(fileURLToPath(SKILL_FILE))));
		expect(fields.description?.length).toBeGreaterThan(0);
		expect(fields.description?.length).toBeLessThanOrEqual(1024);
		expect(fields.compatibility?.length ?? 0).toBeLessThanOrEqual(500);
		expect(body.length).toBeLessThanOrEqual(20_000);
		expect(lines.length).toBeLessThanOrEqual(500);
	});

	it('only mentions commands that exist', async () => {
		const program = createFullProgram();
		const { body } = parseSkill(await readFile(SKILL_FILE, 'utf8'));
		const mentions = mentionsOf(codeOf(body)).filter((tokens) => tokens.length > 0);
		const resolved = mentions
			.filter((tokens) => !EXAMPLE_APPS.includes(tokens[0] ?? ''))
			.map((tokens) => resolveMention(program, tokens));

		expect(mentions.length).toBeGreaterThanOrEqual(8);
		expect(new Set(resolved.map((path) => path[0]))).toEqual(
			expect.objectContaining(new Set(['whoami', 'list', 'describe', 'connections', 'endpoints'])),
		);
	});
});
