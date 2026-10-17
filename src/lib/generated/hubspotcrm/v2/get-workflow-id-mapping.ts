// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetWorkflowIdMappingInput = {
	/**
	 * The workflow editor flow ID, available in the HubSpot workflow editor URL.
	 */
	flowId: string;
};

export type GetWorkflowIdMappingOutput = {
	/**
	 * When the batch mapping request completed.
	 */
	completedAt?: string;
	/**
	 * Per-item StandardError values returned by HubSpot.
	 *
	 * Items: A complete HubSpot StandardError object for one failed mapping.
	 */
	errors?: Record<string, JSONValue>[];
	/**
	 * The complete set of links related to the batch request.
	 */
	links?: Record<string, JSONValue>;
	/**
	 * The number of mapping errors.
	 */
	numErrors?: number;
	/**
	 * When HubSpot received the batch mapping request.
	 */
	requestedAt?: string;
	/**
	 * Workflow ID mappings returned by HubSpot.
	 *
	 * Items: A mapping from a flow ID to its legacy workflow ID.
	 */
	results?: {
		/**
		 * The workflow editor flow ID supplied to the lookup.
		 */
		flowId?: number;
		/**
		 * The corresponding legacy numeric workflow ID.
		 */
		workflowId?: number;
	}[];
	/**
	 * When HubSpot started processing the request.
	 */
	startedAt?: string;
	/**
	 * The batch mapping request status.
	 */
	status?: string;
};

/**
 * Get a workflow ID mapping
 * Retrieves the legacy workflow ID associated with a HubSpot flow ID.
 */
export async function getWorkflowIdMapping(
	this: EndpointFunctionThis,
	payload: {
		input: GetWorkflowIdMappingInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetWorkflowIdMappingOutput> {
	const response = await this.endpointCaller<GetWorkflowIdMappingOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getWorkflowIdMapping',
		},
		payload,
	);
	return response.output;
}
