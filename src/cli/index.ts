#!/usr/bin/env node
import { createRequire } from 'node:module';

import { EndpointTools } from '../lib/tools.ts';

import { createProgram } from './program.ts';

// Relative to dist/esm/cli/index.js; the CLI is ESM-only.
const { version } = createRequire(import.meta.url)('../../../package.json') as { version: string };

createProgram({ version, tools: EndpointTools })
	.parseAsync(process.argv)
	.catch((error: unknown) => {
		process.stderr.write(`Error: ${error instanceof Error ? error.message : String(error)}\n`);
		process.exit(1);
	});
