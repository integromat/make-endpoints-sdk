// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateCommentInput = {
	/**
	 * A list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response. Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested. Metadata can be requested as well, for example `metadata.enterprise_12345.contractTemplate`. Sent as a comma-separated `fields` query parameter.
	 *
	 * Items: The name of an attribute to include in the response, for example `name`, `shared_link` or `metadata.enterprise_12345.contractTemplate`.
	 */
	fields?: string[];
	/**
	 * The text of the comment. To mention a user, use the `tagged_message` parameter instead.
	 */
	message: string;
	/**
	 * The text of the comment, including `@[user_id:name]` somewhere in the message to mention another user, which will send them an email notification, letting them know they have been mentioned. The `user_id` is the target user's ID, where the `name` can be any custom phrase. In the Box UI this name will link to the user's profile. If you are not mentioning another user, use `message` instead.
	 */
	tagged_message?: string;
	/**
	 * The item to attach the comment to.
	 */
	item: {
		/**
		 * The ID of the item.
		 */
		id: string;
		/**
		 * The type of the item that this comment will be placed on.
		 */
		type: 'file' | 'comment';
	};
};

export type CreateCommentOutput = {
	/**
	 * The unique identifier for this comment.
	 */
	id?: string;
	/**
	 * The value will always be `comment`. One of `comment`.
	 */
	type?: string;
	/**
	 * Whether or not this comment is a reply to another comment.
	 */
	is_reply_comment?: boolean;
	/**
	 * The text of the comment, as provided by the user.
	 */
	message?: string;
	/**
	 * A mini representation of a user, as can be returned when nested within other resources.
	 */
	created_by?: {
		/**
		 * The unique identifier for this user.
		 */
		id?: string;
		/**
		 * The value will always be `user`. One of `user`.
		 */
		type?: string;
		/**
		 * The display name of this user.
		 */
		name?: string;
		/**
		 * The primary email address of this user.
		 */
		login?: string;
	};
	/**
	 * The time this comment was created.
	 */
	created_at?: string;
	/**
	 * The time this comment was last modified.
	 */
	modified_at?: string;
	/**
	 * The bare basic reference for an object.
	 */
	item?: {
		/**
		 * The unique identifier for this object.
		 */
		id?: string;
		/**
		 * The type for this object.
		 */
		type?: string;
	};
	/**
	 * The string representing the comment text with @mentions included. @mention format is @[id:username] where `id` is user's Box ID and `username` is their display name.
	 */
	tagged_message?: string;
};

/**
 * Create a comment
 * Adds a comment to a file or replies to an existing comment.
 */
export async function createComment(
	this: EndpointFunctionThis,
	payload: {
		input: CreateCommentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateCommentOutput> {
	const response = await this.endpointCaller<CreateCommentOutput>(
		{
			appName: 'box',
			appVersion: 3,
			endpointName: 'createComment',
		},
		payload,
	);
	return response.output;
}
