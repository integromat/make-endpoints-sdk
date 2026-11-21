// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type LikeObjectInput = {
	/**
	 * The ID of the page to like the object as. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the object: a page post (`{page_id}_{post_id}`), a comment, a photo, or an album.
	 */
	object_id: string;
};

export type LikeObjectOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Like an object
 * Likes a page post, comment, photo, or album as the page.
 */
export async function likeObject(
	this: EndpointFunctionThis,
	payload: {
		input: LikeObjectInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<LikeObjectOutput> {
	const response = await this.endpointCaller<LikeObjectOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'LikeObject',
		},
		payload,
	);
	return response.output;
}
