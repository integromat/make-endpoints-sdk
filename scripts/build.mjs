// Emits the ESM build to dist/esm and the CommonJS build to dist/cjs. Both builds use `.js` files, so
// dist/cjs gets its own package.json to tell Node.js and TypeScript that the files there are CommonJS.
import { execFileSync } from 'node:child_process';
import { rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const tsc = createRequire(import.meta.url).resolve('typescript/bin/tsc');

rmSync('dist', { recursive: true, force: true });
for (const project of ['tsconfig.build.json', 'tsconfig.build.cjs.json']) {
	execFileSync(process.execPath, [tsc, '-p', project], { stdio: 'inherit' });
}
writeFileSync('dist/cjs/package.json', `${JSON.stringify({ type: 'commonjs' })}\n`);
