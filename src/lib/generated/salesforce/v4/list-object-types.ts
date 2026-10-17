// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListObjectTypesInput = Record<string, never>;

export type ListObjectTypesOutput = {
	/**
	 * Character encoding used by the organization.
	 */
	encoding?: string;
	/**
	 * Maximum supported batch size.
	 */
	maxBatchSize?: number;
	/**
	 * Complete Salesforce object type definitions returned by global describe.
	 *
	 * Items: One complete Salesforce object type definition.
	 */
	sobjects?: Record<string, JSONValue>[];
};

/**
 * List object types
 * Returns Salesforce object types in the org.
 */
export async function listObjectTypes(
	this: EndpointFunctionThis,
	payload: {
		input: ListObjectTypesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListObjectTypesOutput> {
	const response = await this.endpointCaller<ListObjectTypesOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'listObjectTypes',
		},
		payload,
	);
	return response.output;
}
