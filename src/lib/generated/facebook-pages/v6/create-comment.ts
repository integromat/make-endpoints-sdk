// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type CreateCommentInput = {
	/**
	 * The ID of the page to comment as. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the object to comment on: a page post (`{page_id}_{post_id}`), a photo, a video, or a comment (to reply to it).
	 */
	object_id: string;
	/**
	 * The comment text. Supports emoji. To mention a person or page, use `@[id]`.
	 */
	message?: string;
	/**
	 * ID of an unpublished photo to attach to the comment.
	 */
	attachment_id?: string;
	/**
	 * URL of an image to attach to the comment.
	 */
	attachment_url?: string;
	/**
	 * URL of an animated GIF to attach to the comment. The URL is not included in the message.
	 */
	attachment_share_url?: string;
};

export type CreateCommentOutput = {
	/**
	 * The ID of the new comment.
	 */
	id?: string;
};

/**
 * Create a comment
 * Creates a comment on a page post, photo, video, or comment as the page.
 */
export async function createComment(
	this: EndpointFunctionThis,
	payload: {
		input: CreateCommentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<CreateCommentOutput>> {
	const response = await this.endpointCaller<CreateCommentOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'CreateComment',
		},
		payload,
	);
	return response;
}
