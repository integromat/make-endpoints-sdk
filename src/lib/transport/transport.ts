import type { URLSearchParams } from 'node:url';

import type { EndpointOptions, EndpointPointer, JSONValue } from '../shared.ts';

export type { JSONValue } from '../shared.ts';

export type TransportContext = { teamId: number };

export type TransportRequestBody = Record<string, JSONValue> | JSONValue[];

export type TransportRequestMethod =
	| 'GET'
	| 'POST'
	| 'PUT'
	| 'PATCH'
	| 'DELETE'
	| 'HEAD'
	| 'OPTIONS';

export type TransportRequest = {
	path: string;
	method?: TransportRequestMethod;
	query?: URLSearchParams;
	headers?: Record<string, string>;
	body?: TransportRequestBody;
};

export type TransportResponse<BODY> = {
	body: BODY;
};

export type Transport = {
	send: <BODY>(request: TransportRequest) => Promise<TransportResponse<BODY>>;
	callEndpoint: <OUTPUT>(
		context: TransportContext,
		pointer: EndpointPointer,
		options: EndpointOptions,
	) => Promise<{ output: OUTPUT }>;
};
