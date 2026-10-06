// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateCommentInput = {
	/**
	 * The ID of the design to comment on.
	 */
	design_id: string;
	/**
	 * The comment message in plaintext. Supports mentioning users with the format `[user_id:team_id]`. If `assignee_id` is set, the assignee must be mentioned.
	 */
	message_plaintext: string;
	/**
	 * The Canva user ID to assign the comment to. The assignee must be mentioned in the message using `[user_id:team_id]` format.
	 */
	assignee_id?: string;
};

export type CreateCommentOutput = {
	/**
	 * The created comment thread object.
	 */
	thread?: {
		/**
		 * The ID of the thread. Use this to create replies.
		 */
		id?: string;
		/**
		 * The ID of the design the thread is on.
		 */
		design_id?: string;
		/**
		 * The type of thread and its content.
		 */
		thread_type?: {
			/**
			 * The thread type. Value: `comment`.
			 */
			type?: string;
			/**
			 * The content of the comment.
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
			 * The Canva users mentioned in the comment. Keys are `user_id:team_id` strings.
			 */
			mentions?: Record<string, JSONValue>;
			/**
			 * The user the comment is assigned to.
			 */
			assignee?: {
				/**
				 * The user ID.
				 */
				id?: string;
				/**
				 * The display name.
				 */
				display_name?: string;
			};
			/**
			 * The user who resolved the thread.
			 */
			resolver?: {
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
		/**
		 * When the thread was created, as a Unix timestamp (in seconds).
		 */
		created_at?: number;
		/**
		 * When the thread was last updated, as a Unix timestamp (in seconds).
		 */
		updated_at?: number;
		/**
		 * The author of the comment.
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
 * Create a comment
 * Creates a new top-level comment on a design.
 */
export async function createComment(
	this: EndpointFunctionThis,
	payload: {
		input: CreateCommentInput;
		connectionId: number;
	},
): Promise<CreateCommentOutput> {
	const response = await this.endpointCaller<CreateCommentOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'createComment',
		},
		payload,
	);
	return response.output;
}
