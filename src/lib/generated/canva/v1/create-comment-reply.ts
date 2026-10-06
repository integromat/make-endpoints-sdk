// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateCommentReplyInput = {
	/**
	 * The ID of the design the comment thread is on.
	 */
	design_id: string;
	/**
	 * The ID of the thread to reply to (returned as `id` from createComment).
	 */
	thread_id: string;
	/**
	 * The reply message in plaintext. Supports mentioning users with the format `[user_id:team_id]`.
	 */
	message_plaintext: string;
};

export type CreateCommentReplyOutput = {
	/**
	 * The created reply object.
	 */
	reply?: {
		/**
		 * The ID of the reply.
		 */
		id?: string;
		/**
		 * The ID of the design.
		 */
		design_id?: string;
		/**
		 * The ID of the thread this reply belongs to.
		 */
		thread_id?: string;
		/**
		 * The content of the reply.
		 */
		content?: {
			/**
			 * The content in plaintext. Mentions shown as `[user_id:team_id]`.
			 */
			plaintext?: string;
			/**
			 * The content in markdown.
			 */
			markdown?: string;
		};
		/**
		 * The Canva users mentioned in the reply. Keys are `user_id:team_id` strings.
		 */
		mentions?: Record<string, JSONValue>;
		/**
		 * When the reply was created, as a Unix timestamp (in seconds).
		 */
		created_at?: number;
		/**
		 * When the reply was last updated, as a Unix timestamp (in seconds).
		 */
		updated_at?: number;
		/**
		 * The author of the reply.
		 */
		author?: {
			/**
			 * The user ID.
			 */
			id?: string;
			/**
			 * The display name.
			 */
			display_name?: string;
		};
	};
};

/**
 * Create a comment reply
 * Replies to a top-level comment on a design.
 */
export async function createCommentReply(
	this: EndpointFunctionThis,
	payload: {
		input: CreateCommentReplyInput;
		connectionId: number;
	},
): Promise<CreateCommentReplyOutput> {
	const response = await this.endpointCaller<CreateCommentReplyOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'createCommentReply',
		},
		payload,
	);
	return response.output;
}
