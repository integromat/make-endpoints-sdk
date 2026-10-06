# @makehq/endpoints-sdk

<p>
	<img alt="Status: public beta" src="https://img.shields.io/badge/status-public%20beta-ff6b00?style=for-the-badge">
	<a href="https://www.npmjs.com/package/@makehq/endpoints-sdk"><img alt="npm version" src="https://img.shields.io/npm/v/%40makehq%2Fendpoints-sdk?style=for-the-badge&logo=npm&color=6d00cc"></a>
	<a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-2ea44f?style=for-the-badge"></a>
</p>

TypeScript SDK for calling Make **Endpoints**, the single-call wrapper around native app actions. Every app, version and endpoint is generated into a typed method. A call sends a normalized request and resolves directly to the endpoint's output, so you don't build the request envelope or unwrap the response yourself.

> ### 🧪 Public beta: fresh out of the lab
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

## Generated code

`src/lib/generated/**` is generated from Make's app manifests and synced into this repository automatically. Don't edit it by hand: the next sync overwrites it. Each sync lands on `main` together with a version bump, minor for new or changed endpoints and major when endpoints are removed.

## Development

```sh
npm ci
npm run type-check
npm test
npm run build
```

## License

[MIT](LICENSE)
