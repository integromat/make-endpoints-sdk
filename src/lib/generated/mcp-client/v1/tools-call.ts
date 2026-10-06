// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ToolsCallInput = {
	/**
	 * Name of the tool to call, as returned by the `toolsList` endpoint.
	 */
	name: string;
	/**
	 * Arguments for the tool, as a JSON object. They must match the `inputSchema` the `toolsList` endpoint returns for the tool.
	 */
	arguments?: Record<string, JSONValue>;
};

export type ToolsCallOutput = {
	/**
	 * True when the tool reported a failure. Read `content` for the message. Absent or false means the tool succeeded.
	 */
	isError?: boolean;
	/**
	 * Content blocks the tool returned, as the server sent them. Each block has a `type` of `text`, `image`, `audio`, `resource_link` or `resource`, and carries the fields of that MCP content block type. No `spec` is declared, because a block type newer than this app has to reach the caller unchanged.
	 */
	content?: JSONValue[];
	/**
	 * Structured result, present when the tool declares an output schema.
	 */
	structuredContent?: Record<string, JSONValue>;
	/**
	 * Metadata the server attached to the response.
	 */
	_meta?: Record<string, JSONValue>;
};

/**
 * Call a tool
 * Calls one tool on the connected MCP server.
 */
export async function toolsCall(
	this: EndpointFunctionThis,
	payload: {
		input: ToolsCallInput;
		connectionId: number;
	},
): Promise<ToolsCallOutput> {
	const response = await this.endpointCaller<ToolsCallOutput>(
		{
			appName: 'mcp-client',
			appVersion: 1,
			endpointName: 'toolsCall',
		},
		payload,
	);
	return response.output;
}
