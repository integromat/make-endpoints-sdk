---
name: make-endpoints-cli
description: Use when calling a third-party app (Google Docs, Slack, Notion, GitHub, ...) through Make Endpoints from a shell with make-endpoints-cli, i.e. finding the team id, which endpoints the team can run, which connection id to pass, and calling an endpoint with flags or --input JSON. Not for building or running Make scenarios (use the Make MCP server) and not for authoring apps.
compatibility: Requires Node.js 24+, make-endpoints-cli (npm install -g @makehq/endpoints-sdk, or npx -p @makehq/endpoints-sdk make-endpoints-cli) and a Make API key, from make-cli login or MAKE_API_KEY plus MAKE_ZONE. Endpoints are in closed beta, so a 400 "not enabled" error means Make hasn't enabled them for the organization yet.
---

# Make Endpoints from the shell

`make-endpoints-cli` calls Make Endpoints, the single-call wrappers around app actions (`google-docs get-document`,
`slack send-message`, ...). Every call runs in a team and, for most endpoints, through one of that team's
connections. The flow is always the same: find the team, see what it can run, inspect the endpoint, pick a
connection, call.

**Ground rules.** Never guess a team id, connection id or field name; each one comes from a command below.
`--help` works on any command. Output is JSON by default, so pipe it to `jq`; `--output table` is for a quick
look. Exit code 2 is a Make API error, with the message on stderr; exit code 1 is a usage or validation error.
Every call runs as the user of the API key, in exactly one team per call.

## Auth

Credentials resolve in this order: `--api-key` and `--zone` flags, then `MAKE_API_KEY` and `MAKE_ZONE`, then the
config saved by `make-cli login`. The key needs `organizations:read` and `teams:read` for step 1, `apps:read` for
step 2, `connections:read` for step 4 and `endpoints:run` for step 5. A 403, or an empty list where rows are
expected, usually means a missing scope, which only a new key can fix.

## 1. Who am I, which team: `whoami`

```sh
make-endpoints-cli whoami                  # name, email, zone
make-endpoints-cli whoami --environment    # plus organizations and their teams; private spaces count as teams
```

Take the team id from `organizations[].teams[].id`. When several teams fit, ask the user instead of choosing.

## 2. What can this team run: `list --team-id`

```sh
make-endpoints-cli list --team-id <id>            # apps the team can use now
make-endpoints-cli list <app> --team-id <id>      # its endpoints, each with the team's usable connections
make-endpoints-cli list                           # static fallback: every app this build bundles
make-endpoints-cli list <app>                     # static fallback: its endpoints and their connection types
```

Each row of `list <app> --team-id` carries `connections`, the connections that already cover the endpoint's
scopes, and `name` only when this build bundles the endpoint: then `<app> <name>` calls it, otherwise use
`endpoints execute`. `endpoints list-usable --team-id <id>` prints the raw API payload.
`Error [400]: Endpoints execution is not enabled` means the organization isn't in the beta: stop and tell the user.

## 3. Inspect an endpoint: `describe`

```sh
make-endpoints-cli describe <app> <endpoint>                   # latest version
make-endpoints-cli describe <app> v<N> <endpoint>              # one version
make-endpoints-cli describe <app> <endpoint> --output-schema   # only when the output shape matters; it's large
```

`inputSchema.properties.input` lists the fields and which are required. `accounts` lists the connection types the
endpoint accepts, each with the scopes it needs. `context` is guidance for you, so follow it.

## 4. Pick a connection: `connections list`

```sh
make-endpoints-cli connections list --team-id <id> --app <app> --endpoint <endpoint>
```

Use a row with `"scoped": true`. `usableFor` lists the endpoints that accept the connection's type, and
`requiredScopes` what this endpoint needs on that type. No row with `scoped` true means the user has to create or
re-authorize a connection in Make; the CLI can't do that yet.

## 5. Call: `<app> <endpoint>`

```sh
make-endpoints-cli <app> <endpoint> --team-id <id> --connection-id <id> --<field> <value>
make-endpoints-cli <app> <endpoint> --team-id <id> --connection-id <id> --input '{"field":"value"}'
make-endpoints-cli <app> v<N> <endpoint> --team-id <id> --connection-id <id> --<field> <value>
make-endpoints-cli endpoints execute --app-name app#my-app --app-version 1 --endpoint-name doThing --team-id <id> --input '{}'
```

Each input field is a flag (`documentId` becomes `--document-id`). `--input` takes the whole input as JSON, and
separate flags override its keys. A field whose flag would clash with a global one (`output`, `zone`, ...) can
only be passed through `--input`. `endpoints execute` reaches custom apps (`app#name`) and endpoints this build
doesn't bundle. The output is the endpoint's result, unwrapped. For example, the title of a Google Doc:

```sh
make-endpoints-cli connections list --team-id 7 --app google-docs --endpoint get-document | jq '.[] | select(.scoped)'
make-endpoints-cli google-docs get-document --team-id 7 --connection-id 42 --document-id doc-1 | jq .title
```

## Errors

| Symptom                                                         | Next step                                                                        |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `Error [403]`, or no rows in step 1, 2 or 4                     | The key lacks a scope from Auth. Ask the user for a key that has it.             |
| `Error [400]: Endpoints execution is not enabled`               | Endpoints aren't enabled for this organization. Stop and tell the user.          |
| `Error [422]` or `Error [424]` on a call                        | Wrong connection type or input. Re-run `describe`, then `connections list`.      |
| `Error: Missing required input fields: ...` (exit 1)            | Pass the fields as flags or inside `--input`.                                    |
| `required option '--team-id <value>' not specified` (exit 1)    | Every call needs `--team-id`; most need `--connection-id` too.                   |
| `Unknown app` or `Unknown endpoint`                             | Names are the CLI's kebab-case ones. Run `list <app>` to find the right one.     |

## Not covered here

- Building, running or debugging Make scenarios. Use the Make MCP server.
- Calling endpoints from TypeScript. See the `@makehq/endpoints-sdk` README.
- Creating or authorizing connections, and authoring apps. Both happen in Make.
