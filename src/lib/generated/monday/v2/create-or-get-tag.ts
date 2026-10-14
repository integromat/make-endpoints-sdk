// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateOrGetTagInput = Record<string, never>;

export type CreateOrGetTagOutput = Record<string, never>;

/**
 * Create or get a tag
 * Returns the tag with the given name, creating it if it does not exist yet.
 */
export async function createOrGetTag(
	this: EndpointFunctionThis,
	payload: {
		input: CreateOrGetTagInput;
		connectionId: number;
	},
): Promise<CreateOrGetTagOutput> {
	const response = await this.endpointCaller<CreateOrGetTagOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'createOrGetTag',
		},
		payload,
	);
	return response.output;
}
