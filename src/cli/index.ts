#!/usr/bin/env node
import { createRequire } from 'node:module';

import { EndpointTools } from '../lib/tools.ts';

import { createProgram } from './program.ts';

// Resolved from dist/esm/cli/index.js. The CLI is ESM-only, so there's no dist/cjs copy to account for.
const { version } = createRequire(import.meta.url)('../../../package.json') as { version: string };

createProgram({ version, tools: EndpointTools })
	.parseAsync(process.argv)
	.catch((error: unknown) => {
		process.stderr.write(`Error: ${error instanceof Error ? error.message : String(error)}\n`);
		process.exit(1);
	});
