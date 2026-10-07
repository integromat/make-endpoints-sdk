// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ToolsListInput = {
	/**
	 * Pagination cursor returned as `nextCursor` by a previous call. Leave empty to get the first page.
	 */
	cursor?: string;
};

export type ToolsListOutput = {
	/**
	 * Tools the server exposes. Every tool is returned as the server sent it, so a tool can carry fields this list does not name.
	 */
	tools?: {
		/**
		 * Unique name of the tool. Use it to call the tool.
		 */
		name?: string;
		/**
		 * What the tool does.
		 */
		description?: string;
		/**
		 * JSON Schema of the arguments the tool accepts.
		 */
		inputSchema?: Record<string, JSONValue>;
		/**
		 * Hints about the behaviour of the tool. Hints are not guarantees.
		 */
		annotations?: {
			readOnlyHint?: boolean;
			destructiveHint?: boolean;
			idempotentHint?: boolean;
			openWorldHint?: boolean;
		};
		/**
		 * JSON Schema of the structured result the tool returns. Present only when the tool declares one.
		 */
		outputSchema?: Record<string, JSONValue>;
		/**
		 * Icons the tool publishes.
		 */
		icons?: JSONValue[];
		/**
		 * Metadata the server attached to the tool.
		 */
		_meta?: Record<string, JSONValue>;
	}[];
	/**
	 * Present when more tools are available. Pass it as `cursor` to get the next page.
	 */
	nextCursor?: string;
	/**
	 * Metadata the server attached to the response.
	 */
	_meta?: Record<string, JSONValue>;
};

/**
 * List tools
 * Returns the tools the connected MCP server offers.
 */
export async function toolsList(
	this: EndpointFunctionThis,
	payload: {
		input: ToolsListInput;
		connectionId: number;
	},
): Promise<ToolsListOutput> {
	const response = await this.endpointCaller<ToolsListOutput>(
		{
			appName: 'mcp-client',
			appVersion: 1,
			endpointName: 'toolsList',
		},
		payload,
	);
	return response.output;
}
