// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { toolsCall } from './tools-call.ts';
import { toolsList } from './tools-list.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ToolsCallInput, ToolsCallOutput } from './tools-call.ts';
export type { ToolsListInput, ToolsListOutput } from './tools-list.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		toolsCall: toolsCall.bind({ endpointCaller }),
		toolsList: toolsList.bind({ endpointCaller }),
	};
};

export class McpClientV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
