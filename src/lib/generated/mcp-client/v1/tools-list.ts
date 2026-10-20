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
	 * Server metadata, including server information and the Make connection label in separate namespaces.
	 */
	_meta?: {
		/**
		 * Metadata supplied by Make. Server-supplied values in this namespace are replaced.
		 */
		'com.make/mcp-client'?: {
			/**
			 * The user's Make connection label. Separate from the server-reported name. Omitted when unavailable.
			 */
			connectionLabel?: string;
		};
		/**
		 * Server-supplied response metadata, with MCP initialisation metadata as a fallback for older servers. This is not a verified identity. Omitted when unavailable.
		 */
		'io.modelcontextprotocol/serverInfo'?: {
			/**
			 * Server name intended for programmatic use. Use it for display when title is absent.
			 */
			name: string;
			/**
			 * Version of the server implementation.
			 */
			version: string;
			/**
			 * Optional description of the server and its capabilities.
			 */
			description?: string;
			/**
			 * Optional URL of the server's website.
			 */
			websiteUrl?: string;
			/**
			 * Optional icons the server publishes for display.
			 */
			icons?: {
				/**
				 * URL or data URI of the icon.
				 */
				src: string;
				/**
				 * Optional MIME type of the icon.
				 */
				mimeType?: string;
				/**
				 * Optional supported sizes, such as 48x48 or any for scalable icons.
				 */
				sizes?: string[];
				/**
				 * Optional background theme: light or dark. When absent, the icon supports either theme.
				 */
				theme?: string;
			}[];
		};
	};
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
};

/**
 * List tools
 * Returns the tools and server information the connected MCP server reports.
 */
export async function toolsList(
	this: EndpointFunctionThis,
	payload: {
		input: ToolsListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
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
