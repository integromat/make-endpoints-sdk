// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateCommentInput = {
	/**
	 * The node ID of the subject (issue or pull request) to add a comment to.
	 */
	subjectId: string;
	/**
	 * The contents of the comment (markdown).
	 */
	body: string;
};

export type CreateCommentOutput = {
	data?: {
		addComment?: {
			/**
			 * A unique identifier for the client performing the mutation.
			 */
			clientMutationId?: string;
			commentEdge?: {
				/**
				 * The newly created comment.
				 */
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
	};
};

/**
 * Create a comment
 * Adds a comment to an issue or pull request.
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
			appName: 'github',
			appVersion: 4,
			endpointName: 'createComment',
		},
		payload,
	);
	return response.output;
}
