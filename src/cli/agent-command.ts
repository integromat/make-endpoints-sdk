import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

import type { Command } from 'commander';

/** The Agent Skill for this CLI, printed by `agent`. */
const SKILL_FILE = 'skills/make-endpoints-cli/SKILL.md';

/** A block for a project's AGENTS.md, printed by `agent --snippet`. The README repeats it verbatim. */
const SNIPPET_FILE = 'skills/make-endpoints-cli/snippet.md';

/**
 * A file next to this package's `package.json`. The package is found through its own name (Node's
 * self-reference), which works from `src/cli` under Vitest, from `dist/esm/cli` and from any
 * installed location alike. A `package.json` under `dist/esm` would become the nearest package
 * scope and break it.
 */
const _packageFile = (relativePath: string): URL =>
	new URL(
		relativePath,
		pathToFileURL(createRequire(import.meta.url).resolve('@makehq/endpoints-sdk/package.json')),
	);

/** Registers `agent`: prints the skill for this CLI, or with `--snippet` a short block for AGENTS.md. */
export const registerAgentCommand = (program: Command): void => {
	program
		.command('agent')
		.description(
			'Print the agent skill for this CLI (SKILL.md); --snippet prints a short block for AGENTS.md',
		)
		.option('--snippet', 'Print a short block for AGENTS.md instead of the whole skill')
		.helpGroup('Others:')
		.action(async (options: { snippet?: boolean }) => {
			// Byte-identical to the file, so `> .agents/skills/make-endpoints-cli/SKILL.md` installs it.
			const file = _packageFile(options.snippet ? SNIPPET_FILE : SKILL_FILE);
			process.stdout.write(await readFile(file, 'utf8'));
		});
};
