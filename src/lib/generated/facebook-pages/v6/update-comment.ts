// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateCommentInput = {
	/**
	 * The ID of the page where the comment was posted. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the comment to update.
	 */
	comment_id: string;
	/**
	 * The new text of the comment. Supports emoji.
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
	/**
	 * Whether the comment is hidden. Only applicable to comments on page content.
	 */
	is_hidden?: boolean;
};

export type UpdateCommentOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Edit a comment
 * Updates the text, attachment, or visibility of a comment.
 */
export async function updateComment(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateCommentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateCommentOutput> {
	const response = await this.endpointCaller<UpdateCommentOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'UpdateComment',
		},
		payload,
	);
	return response.output;
}
