# make-endpoints-sdk: Agent Context

## What

`@makehq/endpoints-sdk` is a public npm package (MIT, beta) for calling Make **Endpoints**: one typed method per app, app version and endpoint. Each call is sent as `POST /endpoints/execute` through a `Make` client from `@makehq/sdk` (a peer dependency, used for auth) wrapped in `SdkTransport`.

Stack: TypeScript, Node.js 24/26 (`engines`), npm. Tests use **Vitest**, not Jest. `npm run type-check` covers specs as well, while `build` only covers `src` without tests.

The package ships **both ESM and CommonJS**, built by two `tsc` runs with no bundler (`scripts/build.mjs`):
- `tsconfig.build.json` emits ESM to `dist/esm`.
- `tsconfig.build.cjs.json` emits CommonJS to `dist/cjs`.
- Both builds use `.js` files, so the script writes `dist/cjs/package.json` with `"type": "commonjs"`.
- `npm run check:package` runs arethetypeswrong (`attw`) to check that types resolve for every resolution mode. PR CI runs it too.

## Two kinds of code

- **Hand-written runtime, owned here:**
  - `src/index.ts`: the root entry. It exports `EndpointsSdk`, `SdkTransport` and the transport types.
  - `src/lib/base-endpoints-sdk.ts` (`BaseEndpointsSdk`): the runtime shared by the full client and every scoped client. Only the injected catalog differs.
  - `src/lib/endpoints-sdk.ts`: `EndpointsSdk` with the root catalog.
  - `src/lib/shared.ts`: types the generated code builds on.
  - `src/lib/transport/`: the `Transport` contract and `SdkTransport`.
- **Generated code, not owned here:** `src/lib/generated/**`, marked `linguist-generated` in `.gitattributes`.
  - It is produced by Make's code generator, which lives outside this repository, and synced here by automation as commits on `main`.
  - Each sync replaces the whole directory and bumps `package.json` `version`: major when generated files are deleted, otherwise minor. The sync edits `package.json` programmatically, so keep `version` a plain `X.Y.Z` and keep 2-space indentation.
  - Never edit generated files here: hand edits are lost on the next sync. Changes to generated output belong in the generator.

## Contract between generated code and runtime

- Generated files import the runtime by relative path with `.ts` extensions: `src/lib/shared.ts` and `src/lib/base-endpoints-sdk.ts`. Keep both files in `src/lib/`, next to `generated/`.
- These names are imported by generated code. Renaming or reshaping them breaks the next sync, so change them only together with the generator:
  - from `shared.ts`: `EndpointCaller`, `EndpointFunctionThis`, `JSONValue`
  - from `base-endpoints-sdk.ts`: `BaseEndpointsSdk`, `EndpointsSdkOptions`
- The generated layout:
  - `generated/catalog.ts` is the root catalog, `endpoints(endpointCaller)`.
  - `generated/<app>/_catalog.ts` and `generated/<app>/v<N>/_catalog.ts` each export `endpoints` and a client class (`<App>Sdk`, `<App>V<N>Sdk`). Version catalogs also re-export the `<Endpoint>Input`/`<Endpoint>Output` types.
- `.ts` import specifiers compile because of `rewriteRelativeImportExtensions` in `tsconfig.json`. Emitted JS uses `.js`; declarations keep `.ts`, which TypeScript resolves to the emitted `.d.ts`.

## Public API surface (`package.json` `exports`)

- `.` is the root entry.
- `./apps/*` maps to `dist/{esm,cjs}/lib/generated/*/_catalog.js`, which gives `@makehq/endpoints-sdk/apps/<app>` and `/apps/<app>/v<N>`. App clients live under `apps/` so app names can never collide with other subpaths. Add new non-app entry points as top-level subpaths outside `apps/`.
- Every entry point has an `import` and a `require` condition, each with its own `types`. TypeScript's `node10` resolution ignores `exports`, so `main`/`types` (root) and `typesVersions` (`apps/*`) mirror the CommonJS entries. Keep all three in sync when adding entry points.
- `@makehq/sdk` is only imported with `import type`, so the emitted JS has no runtime import of it. Keep it type-only.
- Calls always run under the authenticated user of the `Make` client, so the transport context carries only `teamId`.

## Tests

- `src/test/transport/sdk-transport.spec.ts` covers the runtime through `execute()` and doesn't depend on generated content.
- Specs that call real generated endpoints are coupled to the generated tree. They can break when the generator output changes; the generator runs equivalent checks before each sync.

## When in Plan Mode

- Make the plan extremely concise. Sacrifice grammar for the sake of concision.
- Interview user in detail (for Claude: use the AskUserQuestionTool) about literally anything: technical implementation, UI & UX, concerns, tradeoffs, etc. but make sure the questions are not obvious. Be very in-depth and continue interviewing the user continually until it's complete. Use the answers to create a detailed spec.
- Make assumptions explicit: When you must proceed under uncertainty, list assumptions up front and continue.
