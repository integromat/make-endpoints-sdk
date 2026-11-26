// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type DeletePostInput = {
	/**
	 * The URN of the post to delete, for example `urn:li:ugcPost:6856810298419044352` or `urn:li:share:6844785523593134080`.
	 */
	postUrn: string;
};

export type DeletePostOutput = Record<string, never>;

/**
 * Delete a post
 * Deletes a LinkedIn post of a member or a company page.
 */
export async function deletePost(
	this: EndpointFunctionThis,
	payload: {
		input: DeletePostInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<DeletePostOutput>> {
	const response = await this.endpointCaller<DeletePostOutput>(
		{
			appName: 'linkedin',
			appVersion: 2,
			endpointName: 'deletePost',
		},
		payload,
	);
	return response;
}
