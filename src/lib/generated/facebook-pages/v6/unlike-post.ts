// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type UnlikePostInput = {
	/**
	 * The ID of the page to remove the like as. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the object: a page post (`{page_id}_{post_id}`), a comment, a photo, or an album.
	 */
	object_id: string;
};

export type UnlikePostOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Unlike an object
 * Removes the page's like from a post, comment, photo, or album.
 */
export async function unlikePost(
	this: EndpointFunctionThis,
	payload: {
		input: UnlikePostInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UnlikePostOutput>> {
	const response = await this.endpointCaller<UnlikePostOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'UnlikePost',
		},
		payload,
	);
	return response;
}
