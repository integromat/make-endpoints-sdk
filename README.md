# @makehq/endpoints-sdk

<p>
	<img alt="Status: closed beta" src="https://img.shields.io/badge/status-closed%20beta-ff6b00?style=for-the-badge">
	<a href="https://www.npmjs.com/package/@makehq/endpoints-sdk"><img alt="npm version" src="https://img.shields.io/npm/v/%40makehq%2Fendpoints-sdk?style=for-the-badge&logo=npm&color=6d00cc"></a>
	<a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-2ea44f?style=for-the-badge"></a>
</p>

TypeScript SDK for calling Make **Endpoints**, the single-call wrapper around native app actions. Every app, version and endpoint is generated into a typed method. A call sends a normalized request and resolves directly to the endpoint's output, so you don't build the request envelope or unwrap the response yourself.

> ### 🧪 Closed beta: fresh out of the lab
>
> 🔒 **Access is limited.** Anyone can install the package, but API calls fail until Make enables Endpoints for your organization.
>
> This SDK is new and still settling. While it's on `0.x`:
>
> - 🔄 **Endpoints are regenerated from Make's app catalog** and released automatically. Apps, endpoints and their types can appear, change or disappear between versions.
> - 🧩 **The runtime API can still change** between minor versions.
> - 📌 **Pin an exact version** if you depend on it in production.
>
> Found a rough edge? [Open an issue](https://github.com/integromat/make-endpoints-sdk/issues). Beta feedback shapes 1.0.

## Install

```sh
npm install @makehq/endpoints-sdk @makehq/sdk
```

The package ships both ES module and CommonJS builds, with types for each, so `import` and `require()` both work.

## Usage

Requests go through a `Make` client from `@makehq/sdk` (a peer dependency), which handles authentication. Wrap the client in `SdkTransport`:

```ts
import { Make } from '@makehq/sdk';
import { EndpointsSdk, SdkTransport } from '@makehq/endpoints-sdk';

const make = new Make('<api-key>', 'eu1.make.com');

const sdk = new EndpointsSdk({
	transport: new SdkTransport(make),
	teamId: 77,
});
```

### Calling an endpoint

Endpoints are nested as `sdk.endpoints.<appKey>.<version>.<endpointName>()`. `input` and (usually) `connectionId` are typed from the app's manifest, and the call resolves straight to the typed output:

```ts
const doc = await sdk.endpoints.googleDocs.v1.getDocument({
	input: { documentId: 'doc-1', filter: 'image' },
	connectionId: 42,
});
// doc: GetDocumentOutput
```

Endpoints that don't need a connection omit `connectionId`. Endpoints with no input parameters type `input` as `Record<string, never>`. Several apps also expose a generic `arbitraryCall` endpoint (e.g. `sdk.endpoints.asana.v2.arbitraryCall(...)`). It makes an authorized HTTP call with any method, URL, headers and body, for when no dedicated endpoint covers the use case.

Generated methods are pre-bound, so they can be destructured:

```ts
const { getDocument } = sdk.endpoints.googleDocs.v1;
await getDocument({ input: { documentId: 'doc-1', filter: 'image' }, connectionId: 42 });
```

### Importing a single app or version

`EndpointsSdk` loads every generated app. If you need only one app, or one version of it, import its client from `@makehq/endpoints-sdk/apps/<app>` or `@makehq/endpoints-sdk/apps/<app>/v<N>`. Scoped clients take the same options as `EndpointsSdk` and expose the same `execute` escape hatch. Only `endpoints` is narrowed.

```ts
import { SdkTransport } from '@makehq/endpoints-sdk';
import { GoogleDocsSdk } from '@makehq/endpoints-sdk/apps/google-docs';
import {
	GoogleDocsV1Sdk,
	type GetDocumentInput,
	type GetDocumentOutput,
} from '@makehq/endpoints-sdk/apps/google-docs/v1';

const transport = new SdkTransport(make);

// One app version: `endpoints` holds that version's endpoints, and the entry point re-exports their types.
const googleDocsV1 = new GoogleDocsV1Sdk({ transport, teamId: 77 });
const input: GetDocumentInput = { documentId: 'doc-1', filter: 'image' };
const doc: GetDocumentOutput = await googleDocsV1.endpoints.getDocument({ input, connectionId: 42 });

// One app, all its versions: `endpoints` is keyed by version.
const googleDocs = new GoogleDocsSdk({ transport, teamId: 77 });
await googleDocs.endpoints.v1.getDocument({ input, connectionId: 42 });
```

These three calls are equivalent:

| Import                                         | Call                                        |
| ---------------------------------------------- | ------------------------------------------- |
| `EndpointsSdk` from `@makehq/endpoints-sdk`    | `sdk.endpoints.googleDocs.v1.getDocument()` |
| `GoogleDocsSdk` from `…/apps/google-docs`      | `googleDocs.endpoints.v1.getDocument()`     |
| `GoogleDocsV1Sdk` from `…/apps/google-docs/v1` | `googleDocsV1.endpoints.getDocument()`      |

The `<app>` in the path is the app's package name (`google-docs`, not `googleDocs`). App client classes are that name in PascalCase plus `Sdk` (`GoogleDocsSdk`). Version client classes add `V<N>Sdk` instead (`GoogleDocsV1Sdk`). Only version entry points re-export the `<Endpoint>Input` / `<Endpoint>Output` types, because two versions of the same app may reuse a type name.

### Low-level escape hatch

`sdk.execute(pointer, options)` calls an endpoint by name without going through the generated tree. Use it for an app, version or endpoint chosen at runtime, or one the generated code doesn't cover yet. Unlike the generated methods, it resolves to the **wrapped** envelope:

```ts
const { output } = await sdk.execute<GetDocumentOutput>(
	{ appName: 'google-docs', appVersion: 1, endpointName: 'getDocument' },
	{ input: { documentId: 'doc-1', filter: 'image' }, connectionId: 42 },
);
```

### Errors

There's no SDK-specific error type. A failing call rejects with whatever the transport throws; for `SdkTransport`, that's the `Make.fetch` rejection.

## CLI

The package includes `make-endpoints-cli`, which follows the conventions of [Make CLI](https://www.npmjs.com/package/@makehq/cli) (`make-cli`). Every endpoint is a command, which makes it easy to use from scripts and AI agents.

### Installation

Installed globally, the command is on your `PATH` (npm installs the `@makehq/sdk` peer dependency alongside):

```sh
npm install -g @makehq/endpoints-sdk
make-endpoints-cli --help
```

In a project that already depends on the package, run the binary from `node_modules` instead:

```sh
npm install @makehq/endpoints-sdk @makehq/sdk
npx make-endpoints-cli --help      # or: npm exec make-endpoints-cli -- --help
```

To try it without installing anything:

```sh
npx -p @makehq/endpoints-sdk make-endpoints-cli --help
```

The examples below assume the global install.

### Authentication

Credentials are resolved like in `make-cli`:

1. `--api-key` and `--zone` flags,
2. `MAKE_API_KEY` and `MAKE_ZONE` environment variables,
3. the config file saved by `make-cli login`, used only when neither of the above is set.

`make-endpoints-cli` has no login command of its own. Run `make-cli login` once and both CLIs share the saved credentials.

### For AI agents

Agents learn the CLI from `--help`: the root help ends with the five steps to a call (find the team, list what it can use, describe the endpoint, pick a connection, call). `make-endpoints-cli agent` prints the fuller guide, an [Agent Skill](https://agentskills.io) that the package also ships as `skills/make-endpoints-cli/SKILL.md`. Install it into a project either from this repository or from the installed package:

```sh
npx skills add integromat/make-endpoints-sdk
mkdir -p .agents/skills/make-endpoints-cli && make-endpoints-cli agent > .agents/skills/make-endpoints-cli/SKILL.md
```

Claude Code reads `.claude/skills/` instead, so link the directory there: `ln -s ../../.agents/skills/make-endpoints-cli .claude/skills/make-endpoints-cli`.

For agents that don't load skills, `make-endpoints-cli agent --snippet` prints this block for the project's `AGENTS.md`:

```markdown
## Make Endpoints (make-endpoints-cli)

`make-endpoints-cli` calls third-party apps (Google Docs, Slack, Notion, ...) through Make Endpoints. Run `make-endpoints-cli --help` once, then:

1. `make-endpoints-cli whoami --environment` lists your organizations and teams, private spaces included; take the team id from there.
2. `make-endpoints-cli list --team-id <id>` lists the apps the team can use, and `list <app> --team-id <id>` their endpoints with usable connections.
3. `make-endpoints-cli describe <app> <endpoint>` shows the input fields and the connection types the endpoint accepts.
4. `make-endpoints-cli connections list --team-id <id> --app <app> --endpoint <endpoint>` gives the connection id; prefer a row with `"scoped": true`, but `false` only means Make couldn't confirm the scopes.
5. `make-endpoints-cli <app> <endpoint> --team-id <id> --connection-id <id> --<field> <value>` calls it; `--input '{...}'` passes the whole input as JSON.

Output is JSON. Exit code 2 is a Make API error, 1 a usage error. Never guess ids. Full guide: `make-endpoints-cli agent`.
```

### Discovering endpoints

```sh
make-endpoints-cli list                       # apps and their versions
make-endpoints-cli list google-docs           # endpoints of every version of an app
make-endpoints-cli list google-docs v1        # endpoints of one version
make-endpoints-cli describe google-docs get-document     # definition with input JSON Schema
make-endpoints-cli describe google-docs v1 getDocument   # explicit version, wire name
```

`describe` prints the endpoint as a tool definition (see [Tool definitions](#tool-definitions)) plus the rest of its manifest metadata: `inputSchema` (the schema of its `input` property lists the fields the endpoint requires), `accounts` (the connection types it accepts, each with the OAuth scopes it needs) and `context` (longer guidance for agents). Add `--output-schema` to include `outputSchema` as well; output schemas can run to hundreds of kilobytes, so they're left out by default. It is the same information the Make MCP Server exposes for an endpoint.

### Finding a team and a connection

Endpoints run in a team, and most take a connection. These commands find the team to use, what you can call there and which `--connection-id` to pass. All but `describe` ask the API:

```sh
make-endpoints-cli whoami                                 # current user and zone
make-endpoints-cli whoami --environment                   # plus organizations and teams, private spaces included
make-endpoints-cli list --team-id 7                       # apps the team can use
make-endpoints-cli list google-docs --team-id 7           # their endpoints, each with its usable connections
make-endpoints-cli describe google-docs get-document      # input schema and connection types
make-endpoints-cli connections list --team-id 7 --app google-docs --endpoint get-document
make-endpoints-cli google-docs get-document --document-id doc-1 --connection-id 42 --team-id 7
```

- `list --team-id` lists only the endpoints the team can use, given its connections and their scopes, and each endpoint lists those `connections`. `name` is set when this package includes the endpoint, so `<app> v<N> <name>` calls it; for the others, use `endpoints execute --endpoint-name <endpointName>`. `endpoints list-usable --team-id 7` prints the raw API response.
- `connections list --app` lists the team's connections of the types the app's endpoints accept, each with `usableFor`, the endpoints that accept its type. With `--endpoint` too, each row also has `requiredScopes`, the scopes the endpoint needs on that connection type, and `scoped`, whether the connection has them. Without `--app`, `--type '["google"]'` and `--scopes '{"google":["…"]}'` filter the way the API does; every type in `--scopes` must also be in `--type`.
- `users me`, `organizations list` and `teams list --organization-id 1 --include-private-spaces` come from `@makehq/sdk`.
- `list --team-id` and `endpoints list-usable` fail with `Error [400]: Endpoints execution is not enabled on this environment.` when Endpoints aren't enabled for your user.

Requesting a new connection from the CLI (`connections request`) is coming.

### Calling an endpoint

Commands are `<app> <endpoint>` for the app's latest version and `<app> v<N> <endpoint>` for any version. Each input field is a flag, and `--input` takes the whole input as JSON. Separate flags override keys of `--input`, and fields without a flag of their own (for example, a field named `output`, which would clash with the global flag) can only be passed through `--input`.

```sh
make-endpoints-cli google-docs get-document --document-id doc-1 --connection-id 42 --team-id 77
make-endpoints-cli google-docs v1 get-document --input '{"documentId":"doc-1"}' --connection-id 42 --team-id 77
```

`endpoints execute` calls any endpoint by name, including ones this package doesn't include, such as other versions or your custom apps:

```sh
make-endpoints-cli endpoints execute --app-name app#my-app --app-version 1 --endpoint-name doThing \
	--team-id 77 --connection-id 42 --input '{"key":"value"}'
```

`--output json|compact|table` sets the output format (default `json`). The table is colored only when stdout is a terminal and `NO_COLOR` is unset, so piped output stays plain. Failed API calls exit with code `2` and other errors with code `1`, as in `make-cli`.

## Tool definitions

`@makehq/endpoints-sdk/tools` exports every endpoint as a harness-agnostic tool definition, in the same shape as `MakeTools` from `@makehq/sdk/tools`. Use it to expose endpoints to LLM function calling, an MCP server or your own CLI.

```ts
import { Make } from '@makehq/sdk';
import { EndpointTools } from '@makehq/endpoints-sdk/tools';

const make = new Make('<api-key>', 'eu1.make.com');
const tool = EndpointTools.find((candidate) => candidate.name === 'google-docs_get-document');

const doc = await tool?.execute(make, { teamId: 77, connectionId: 42, documentId: 'doc-1' });
```

- Tools of an app's latest version are named `<app>_<endpoint>`, and tools of every older version `<app>-v<N>_<endpoint>`. Each tool keeps its endpoint's `definition`.
- `inputSchema` has `teamId`, `connectionId` (only when the endpoint takes a connection), every input field, and `input`, the whole input as an object. `execute` merges separate fields over `input` and rejects when a required field is missing.
- After the endpoint tools come:
  - `connections_list`: the team's connections, filtered by `type` and `scopes`, or by what an `app`, `appVersion` and `endpoint` accept. Rows are `UsableConnection`s. It supersedes the tool of the same name in `@makehq/sdk/tools`: same input plus `app`, `appVersion` and `endpoint`, rows trimmed to `id`, `name`, `accountName`, `accountLabel`, `accountType` and `expire`. Don't register both.
  - `endpoints_list-usable`: the apps, versions and endpoints a team can use, as `UsableEndpointPackage[]`, each endpoint with the connections that work for it. `listUsableEndpoints(make, teamId)` returns the same without a tool.
  - Last, the generic `endpoints_execute`, which calls any endpoint by `appName`, `appVersion` and `endpointName`.

## Generated code

`src/lib/generated/**` is generated from Make's app manifests and synced into this repository automatically. Don't edit it by hand: the next sync overwrites it.

## Releases

Releases are cut automatically with [Release Please](https://github.com/googleapis/release-please).
- **What a release does:** it bumps the version based on the conventional commits since the last release, updates [`CHANGELOG.md`](CHANGELOG.md), creates a GitHub release, and publishes to npm.
- **Versioning while on `0.x`:** breaking changes, such as removed endpoints, bump the minor version.

## Development

```sh
npm ci
npm run type-check
npm test
npm run build
```

## License

[MIT](LICENSE)
