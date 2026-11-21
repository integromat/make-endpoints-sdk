// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeletePostInput = {
	/**
	 * The ID of the page that owns the post. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the page post in the `{page_id}_{post_id}` format.
	 */
	page_post_id: string;
};

export type DeletePostOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Delete a post
 * Deletes a post.
 */
export async function deletePost(
	this: EndpointFunctionThis,
	payload: {
		input: DeletePostInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeletePostOutput> {
	const response = await this.endpointCaller<DeletePostOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'DeletePost',
		},
		payload,
	);
	return response.output;
}
