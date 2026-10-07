// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetCommentInput = {
	/**
	 * The node ID of the comment to retrieve.
	 */
	id: string;
};

export type GetCommentOutput = {
	data?: {
		node?: {
			/**
			 * The node ID of the comment.
			 */
			id?: string;
			/**
			 * Identifies the primary key from the database.
			 */
			databaseId?: number;
			/**
			 * The body as Markdown.
			 */
			body?: string;
			/**
			 * The body rendered to text.
			 */
			bodyText?: string;
			/**
			 * The HTTP URL for this comment.
			 */
			url?: string;
			/**
			 * The HTTP path for this comment.
			 */
			resourcePath?: string;
			/**
			 * Identifies the date and time when the comment was created.
			 */
			createdAt?: string;
			/**
			 * Identifies the date and time when the comment was last updated.
			 */
			updatedAt?: string;
			/**
			 * Identifies when the comment was published at.
			 */
			publishedAt?: string;
			/**
			 * The moment the editor made the last edit.
			 */
			lastEditedAt?: string;
			/**
			 * Author's association with the subject of the comment.
			 */
			authorAssociation?: string;
			/**
			 * Whether the comment was created via an email reply.
			 */
			createdViaEmail?: boolean;
			/**
			 * Whether the comment was edited and includes an edit with the creation data.
			 */
			includesCreatedEdit?: boolean;
			/**
			 * Returns whether or not a comment has been minimized.
			 */
			isMinimized?: boolean;
			/**
			 * Returns why the comment was minimized.
			 */
			minimizedReason?: string;
			/**
			 * Whether the current viewer authored this comment.
			 */
			viewerDidAuthor?: boolean;
			author?: {
				/**
				 * The username of the actor.
				 */
				login?: string;
				/**
				 * A URL pointing to the actor's public avatar.
				 */
				avatarUrl?: string;
				/**
				 * The HTTP path for this actor.
				 */
				resourcePath?: string;
				/**
				 * The HTTP URL for this actor.
				 */
				url?: string;
			};
			editor?: {
				/**
				 * The username of the actor.
				 */
				login?: string;
				/**
				 * A URL pointing to the actor's public avatar.
				 */
				avatarUrl?: string;
				/**
				 * The HTTP path for this actor.
				 */
				resourcePath?: string;
				/**
				 * The HTTP URL for this actor.
				 */
				url?: string;
			};
			repository?: {
				/**
				 * The name of the repository.
				 */
				name?: string;
				/**
				 * The HTTP URL of the repository.
				 */
				url?: string;
				/**
				 * The description of the repository.
				 */
				description?: string;
			};
		};
	};
};

/**
 * Get a comment
 * Retrieves an issue or pull request comment.
 */
export async function getComment(
	this: EndpointFunctionThis,
	payload: {
		input: GetCommentInput;
		connectionId: number;
	},
): Promise<GetCommentOutput> {
	const response = await this.endpointCaller<GetCommentOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'getComment',
		},
		payload,
	);
	return response.output;
}
