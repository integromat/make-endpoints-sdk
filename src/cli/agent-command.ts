import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

import type { Command } from 'commander';

/** A block for a project's AGENTS.md, printed by `agent --snippet`. The README repeats it verbatim. */
export const AGENTS_SNIPPET = `## Make Endpoints (make-endpoints-cli)

\`make-endpoints-cli\` calls third-party apps (Google Docs, Slack, Notion, ...) through Make Endpoints. Run \`make-endpoints-cli --help\` once, then:

1. \`make-endpoints-cli whoami --environment\` lists your organizations and teams, private spaces included; take the team id from there.
2. \`make-endpoints-cli list --team-id <id>\` lists the apps the team can use, and \`list <app> --team-id <id>\` their endpoints with usable connections.
3. \`make-endpoints-cli describe <app> <endpoint>\` shows the input fields and the connection types the endpoint accepts.
4. \`make-endpoints-cli connections list --team-id <id> --app <app> --endpoint <endpoint>\` gives the connection id; prefer a row with \`"scoped": true\`, but \`false\` only means Make couldn't confirm the scopes.
5. \`make-endpoints-cli <app> <endpoint> --team-id <id> --connection-id <id> --<field> <value>\` calls it; \`--input '{...}'\` passes the whole input as JSON.

Output is JSON. Exit code 2 is a Make API error, 1 a usage error. Never guess ids. Full guide: \`make-endpoints-cli agent\`.`;

/**
 * `skills/make-endpoints-cli/SKILL.md`, next to this package's `package.json`. The package is found
 * through its own name (Node's self-reference), which works from `src/cli` under Vitest, from
 * `dist/esm/cli` and from any installed location alike. A `package.json` under `dist/esm` would
 * become the nearest package scope and break it.
 */
const _resolveSkillFile = (): URL =>
	new URL(
		'skills/make-endpoints-cli/SKILL.md',
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
			if (options.snippet) {
				process.stdout.write(`${AGENTS_SNIPPET}\n`);
				return;
			}
			// Byte-identical to the file, so `> .agents/skills/make-endpoints-cli/SKILL.md` installs it.
			process.stdout.write(await readFile(_resolveSkillFile(), 'utf8'));
		});
};
