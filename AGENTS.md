# make-endpoints-sdk: Agent Context

## What

`@makehq/endpoints-sdk` is a public npm package (MIT, closed beta: API calls only work for organizations Make has enabled) for calling Make **Endpoints**: one typed method per app, app version and endpoint. Each call is sent as `POST /endpoints/execute` through a `Make` client from `@makehq/sdk` (a peer dependency, used for auth) wrapped in `SdkTransport`.

Stack: TypeScript, Node.js 24/26 (`engines`), npm. Tests use **Vitest**, not Jest. `npm run type-check` covers specs as well, while `build` only covers `src` without tests.

The package ships **both ESM and CommonJS**, built by two `tsc` runs with no bundler (`scripts/build.mjs`):
- `tsconfig.build.json` emits ESM to `dist/esm`.
- `tsconfig.build.cjs.json` emits CommonJS to `dist/cjs`.
- Both builds use `.js` files, so the script writes `dist/cjs/package.json` with `"type": "commonjs"`.
- `npm run check:package` runs arethetypeswrong (`attw`) to check that types resolve for every resolution mode. PR CI runs it too.
- The `make-endpoints-cli` bin (`src/cli/**`) is **ESM-only**: `tsconfig.build.cjs.json` excludes `src/cli`, and `bin` points at `dist/esm/cli/index.js`.

## Two kinds of code

- **Hand-written runtime, owned here:**
  - `src/index.ts`: the root entry. It exports `EndpointsSdk`, `SdkTransport`, the transport types and the endpoint definition types.
  - `src/lib/base-endpoints-sdk.ts` (`BaseEndpointsSdk`): the runtime shared by the full client and every scoped client. Only the injected catalog differs.
  - `src/lib/endpoints-sdk.ts`: `EndpointsSdk` with the root catalog.
  - `src/lib/shared.ts`: types the generated code builds on.
  - `src/lib/transport/`: the `Transport` contract and `SdkTransport`.
  - `src/lib/tools.ts`: the `./tools` entry. Definitions become `MakeTool`-shaped `EndpointTool`s, followed by `connections_list`, `endpoints_list-usable` and, always last, the generic `endpoints_execute`. Endpoint tools execute through `EndpointsSdk.execute`, the SDK's own call path; `endpoints_list-usable` uses `SdkTransport.send` and `connections_list` uses `make.connections.list`.
    - `endpoints_list-usable` calls `GET /imt/endpoints-usable`, the route behind the Make MCP Server's tool of the same name. In web-api's OpenAPI it's `x-internal` (no stability promise) and gated by the per-user `is_endpoints_execution_enabled` flag, which answers HTTP 400 when off.
    - `connections_list` derives `type` and per-type `scopes` from the definitions. The API sets `scoped: true` for types sent without scopes, and reads a type's scopes only when the type is also in `type[]`, so the tool rejects `scopes` keys missing from `type`. `outputSchema` stays on `tool.definition` only, never on the tool itself: an MCP `tools/list` would otherwise ship every output schema to the model, and `describe` prints it only with `--output-schema`.
  - `src/cli/`: the `make-endpoints-cli` bin, a port of `@makehq/cli` (`make-cli`) over `EndpointTools`. Files mirror make-cli's; `catalog-commands.ts` adds `list` and `describe` (`list --team-id` asks the API through `listUsableEndpoints` instead of reading the bundled definitions), `whoami-command.ts` adds `whoami` and `agent-command.ts` adds `agent`. `program.ts` ends the root help with a `Start here` block (`START_HERE`), and `commands.ts` appends `(required)` to the description of every mandatory flag and required input field, because commander's help doesn't mark them.
    - `sdk-tools.ts` adds `users_me`, `organizations_list` and `teams_list` from `@makehq/sdk/tools`. It's the only runtime import of that subpath; never import it in `src/lib/**`, where the CommonJS/`node10` build can't resolve it. The subpath loads every SDK tool definition (about 220 KB), which every CLI run parses.
    - `agent` prints `skills/make-endpoints-cli/SKILL.md` byte for byte, and `agent --snippet` prints `AGENTS_SNIPPET`, which the README repeats verbatim (a spec checks both). The file is found through the package's own name (`createRequire(import.meta.url).resolve('@makehq/endpoints-sdk/package.json')`), which works from `src/cli` under Vitest, from `dist/esm/cli` and from any install alike; never add a `package.json` under `dist/esm`, it would become the nearest package scope.
- **The agent skill, hand-written:** `skills/make-endpoints-cli/SKILL.md`, an [Agent Skill](https://agentskills.io) for the CLI. `skills` is in `files`, so it ships in the tarball. It has no `metadata.version`: the public release commit is rendered by mono's `regenerate-endpoints-sdk.yml`, which lets Release Please touch only the manifest, `CHANGELOG.md` and `package.json`, so a marker here would never be bumped. `src/test/cli/agent-command.spec.ts` lints it: frontmatter constraints from the spec (plain scalars, so no `: ` or ` #` inside a value) and every `make-endpoints-cli <command>` in its code blocks must exist in the command tree, except the example app in the spec's `EXAMPLE_APPS`. Update the skill when commands change. During the closed beta nothing here integrates with `make-skills`; that's GA work.
- **Generated code, not owned here:** `src/lib/generated/**`, marked `linguist-generated` in `.gitattributes`.
  - It is produced by Make's code generator, which lives outside this repository, and synced here by automation as commits on `main`.
  - Each sync replaces the whole directory and commits it as `feat:`, or `feat!:` when generated files were deleted (removed endpoints break consumers). A sync doesn't touch `package.json`.
  - Never edit generated files here: hand edits are lost on the next sync. Changes to generated output belong in the generator.

## Contract between generated code and runtime

- Generated files import the runtime by relative path with `.ts` extensions: `src/lib/shared.ts` and `src/lib/base-endpoints-sdk.ts`. Keep both files in `src/lib/`, next to `generated/`.
- These names are imported by generated code. Renaming or reshaping them breaks the next sync, so change them only together with the generator:
  - from `shared.ts`: `EndpointCaller`, `EndpointDefinition`, `EndpointFunctionThis`, `JSONValue`
  - from `base-endpoints-sdk.ts`: `BaseEndpointsSdk`, `EndpointsSdkOptions`
- The generated layout:
  - `generated/catalog.ts` is the root catalog, `endpoints(endpointCaller)`.
  - `generated/<app>/_catalog.ts` and `generated/<app>/v<N>/_catalog.ts` each export `endpoints` and a client class (`<App>Sdk`, `<App>V<N>Sdk`). Version catalogs also re-export the `<Endpoint>Input`/`<Endpoint>Output` types.
  - `generated/definitions.ts` exports `definitions: EndpointDefinition[]`, concatenating `generated/<app>/v<N>/_definitions.ts`. These modules carry the manifest metadata and the input and output JSON Schemas and are off the SDK's import graph: no endpoint module or `_catalog.ts` imports them, so only `./tools` and the CLI load them.
- `src/lib/tools.ts` imports `generated/definitions.ts` statically, so this repository only builds against a generated tree that carries definitions. Order of changes: the contract type lands here first (so the generator's output type-checks against this runtime), then the generator, then the sync, then anything that imports the definitions.
- `.ts` import specifiers compile because of `rewriteRelativeImportExtensions` in `tsconfig.json`. Emitted JS uses `.js`; declarations keep `.ts`, which TypeScript resolves to the emitted `.d.ts`.

## Public API surface (`package.json` `exports`)

- `.` is the root entry.
- `./tools` maps to `dist/{esm,cjs}/lib/tools.js` and mirrors `@makehq/sdk/tools`: `EndpointTools`, `buildEndpointTools`, `EndpointTool` and `JSONSchema`, plus `listUsableEndpoints` and the `UsableEndpoint`, `UsableEndpointPackage` and `UsableConnection` types.
  - `EndpointTool` and `JSONSchema` are declared locally: `@makehq/sdk/tools` doesn't resolve under `node10` (no `typesVersions`). `src/test/tools.spec.ts` assigns `EndpointTool[]` to `MakeTool[]`, so type-check catches drift.
- `./apps/*` maps to `dist/{esm,cjs}/lib/generated/*/_catalog.js`, which gives `@makehq/endpoints-sdk/apps/<app>` and `/apps/<app>/v<N>`. App clients live under `apps/` so app names can never collide with other subpaths. Add new non-app entry points as top-level subpaths outside `apps/`.
- Every entry point has an `import` and a `require` condition, each with its own `types`. TypeScript's `node10` resolution ignores `exports`, so `main`/`types` (root) and `typesVersions` (`apps/*`, `tools`) mirror the CommonJS entries. Keep all three in sync when adding entry points.
- In `src/lib/**`, `@makehq/sdk` is only imported with `import type`, so the library's JS has no runtime import of it. Keep it that way. Only the CLI imports it at runtime.
- `commander` is the only runtime dependency, used only by the CLI.
- Calls always run under the authenticated user of the `Make` client, so the transport context carries only `teamId`.

## Tests

- `src/test/transport/sdk-transport.spec.ts` covers the runtime through `execute()` and doesn't depend on generated content.
- `src/test/generated-endpoints.spec.ts` drives every generated endpoint through this repository's runtime without naming specific ones, so catalog changes from syncs can't break it.
  - It fails on an empty catalog, so a sync that removed every endpoint can't be published. It also fails on the placeholder catalog that existed before the first sync.
  - Don't add specs that name specific generated endpoints. Syncs land on `main` without review, and `publish.yml` runs the tests, so such a spec could block every release.
- `src/test/tools.spec.ts` and `src/test/cli/*.spec.ts` use hand-written definitions from `src/test/fixtures/`, never the generated catalog, for the same reason. CLI specs run a fresh `createProgram()` with `Make` mocked and `process.exit`/stdout/stderr stubbed.
  - `discovery-commands.spec.ts` also mocks `Make`'s namespaces (`users`, `organizations`, `teams`, `connections`): the real `Make` binds `fetch` into them at construction, and the SDK tools call namespace methods. It runs the real `@makehq/sdk/tools`.

## Release

- **Release Please, without a release PR:**
  - Automation outside this repository runs [Release Please](https://github.com/googleapis/release-please) against `main` every night.
  - When there are releasable conventional commits (`feat`, `fix`, ...), it pushes a `chore: release X.Y.Z` commit that updates `package.json`, `package-lock.json`, `.release-please-manifest.json` and `CHANGELOG.md`. It then creates the `vX.Y.Z` tag and GitHub release.
  - Config is in `release-please-config.json`. With `bump-minor-pre-major`, breaking changes bump the minor version while on `0.x`.
- **Don't edit release files by hand:** not `version`, `CHANGELOG.md` or the manifest. Use conventional commit messages (PR titles, when squash-merging) so Release Please classifies changes correctly.
- **Publishing:** `.github/workflows/publish.yml` runs on every push to `main`. It publishes only when the `package.json` `version` isn't on npm yet, so only release commits publish.
- Authentication uses npm trusted publishing (OIDC), and this repo holds no npm token. The trusted publisher on npmjs.com is bound to this repository, to the filename `publish.yml` and to the `npm` environment, so don't rename either without updating npm. Trusted publishing also requires GitHub-hosted runners.
- Keep the security model described at the top of `publish.yml`:
  - The `npm` environment accepts deployments only from `main`.
  - Only the `publish` job may request `id-token: write`. That job must not check out code or install dependencies; it publishes the tarball that `build` packed.
  - Dependencies install with `--ignore-scripts`, and release builds use no dependency cache.
- `.github/workflows/test.yml` runs type-check, tests and build on pull requests (Node.js 24 and 26). It uses `pull_request`, never `pull_request_target`, so pull request code runs with a read-only token and no secrets. Synced and release commits don't go through pull requests, so `publish.yml` repeats test and build before publishing.

## When in Plan Mode

- Make the plan extremely concise. Sacrifice grammar for the sake of concision.
- Interview user in detail (for Claude: use the AskUserQuestionTool) about literally anything: technical implementation, UI & UX, concerns, tradeoffs, etc. but make sure the questions are not obvious. Be very in-depth and continue interviewing the user continually until it's complete. Use the answers to create a detailed spec.
- Make assumptions explicit: When you must proceed under uncertainty, list assumptions up front and continue.
