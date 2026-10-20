// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetCommentInput = {
	/**
	 * The ID of the comment to return.
	 */
	comment_id: string;
};

export type GetCommentOutput = {
	/**
	 * The ID of the comment.
	 */
	id?: string;
	/**
	 * The ID of the user who posted the comment.
	 */
	posted_uid?: string;
	/**
	 * The ID of the task the comment belongs to. Only returned for task comments.
	 */
	item_id?: string;
	/**
	 * The ID of the project the comment belongs to. Only returned for project comments.
	 */
	project_id?: string;
	/**
	 * The content of the comment. May contain markdown-formatted text and hyperlinks.
	 */
	content?: string;
	/**
	 * The file attached to the comment. `null` if there is none.
	 */
	file_attachment?: {
		/**
		 * The name of the file.
		 */
		file_name?: string;
		/**
		 * The size of the file in bytes.
		 */
		file_size?: number;
		/**
		 * The MIME type of the file, for example `image/png`.
		 */
		file_type?: string;
		/**
		 * The URL where the file is located.
		 */
		file_url?: string;
		/**
		 * The upload state of the file, for example `pending` or `completed`.
		 */
		upload_state?: string;
		/**
		 * The type of the attached resource, for example `file`.
		 */
		resource_type?: string;
		/**
		 * The URL of the image preview, if the file is an image.
		 */
		image?: string;
		/**
		 * The width of the image in pixels.
		 */
		image_width?: number;
		/**
		 * The height of the image in pixels.
		 */
		image_height?: number;
		/**
		 * The large thumbnail as a list of the URL, width and height.
		 */
		tn_l?: Record<string, JSONValue>;
		/**
		 * The medium thumbnail as a list of the URL, width and height.
		 */
		tn_m?: Record<string, JSONValue>;
		/**
		 * The small thumbnail as a list of the URL, width and height.
		 */
		tn_s?: Record<string, JSONValue>;
		/**
		 * The duration of the audio file in seconds.
		 */
		file_duration?: number;
	};
	/**
	 * The IDs of the users to notify about the comment.
	 *
	 * Items: The ID of a user to notify.
	 */
	uids_to_notify?: string[];
	/**
	 * Whether the comment is deleted.
	 */
	is_deleted?: boolean;
	/**
	 * The date and time when the comment was posted.
	 */
	posted_at?: string;
	/**
	 * The emoji reactions to the comment. Each key is an emoji and its value is the list of IDs of users who reacted with it.
	 */
	reactions?: Record<string, JSONValue>;
};

/**
 * Get a comment
 * Returns a single comment by its ID.
 */
export async function getComment(
	this: EndpointFunctionThis,
	payload: {
		input: GetCommentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetCommentOutput> {
	const response = await this.endpointCaller<GetCommentOutput>(
		{
			appName: 'todoist',
			appVersion: 3,
			endpointName: 'getComment',
		},
		payload,
	);
	return response.output;
}
