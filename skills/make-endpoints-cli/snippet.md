## Make Endpoints (make-endpoints-cli)

`make-endpoints-cli` calls third-party apps (Google Docs, Slack, Notion, ...) through Make Endpoints. Run `make-endpoints-cli --help` once, then:

1. `make-endpoints-cli whoami --environment` lists your organizations and teams, private spaces included; take the team id from there.
2. `make-endpoints-cli list --team-id <id>` lists the apps the team can use, and `list <app> --team-id <id>` their endpoints with usable connections. Skip it when you already know the app and endpoint.
3. `make-endpoints-cli describe <app> <endpoint>` shows the input fields and the connection types the endpoint accepts.
4. `make-endpoints-cli connections list --team-id <id> --app <app> --endpoint <endpoint>` gives the connection id; prefer a row with `"scoped": true`, but `false` only means Make couldn't confirm the scopes.
5. `make-endpoints-cli <app> <endpoint> --team-id <id> --connection-id <id> --<field> <value>` calls it; `--input '{...}'` passes the whole input as JSON, `--confidential` keeps the data out of Make's execution log.

Output is JSON. Exit code 2 is a Make API error, 1 a usage error. Never guess ids. Full guide: `make-endpoints-cli agent`.
