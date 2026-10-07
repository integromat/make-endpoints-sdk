// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListCommentsInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * Use `renderedBody` to also return each comment body rendered as HTML in the response.
	 */
	expand?: string;
	/**
	 * Order comments by their created date.
	 */
	orderBy?: '' | 'created' | '-created';
	/**
	 * The index of the first item to return (page offset).
	 */
	startAt?: number;
	/**
	 * The maximum number of comments to return per page.
	 */
	maxResults?: number;
};

export type ListCommentsOutput = {
	/**
	 * The list of comments.
	 *
	 * Items: A comment on the issue.
	 */
	comments?: {
		/**
		 * The ID of the comment.
		 */
		id?: string;
		/**
		 * The URL of the comment.
		 */
		self?: string;
		/**
		 * The comment text, in Atlassian Document Format.
		 */
		body?: Record<string, JSONValue>;
		/**
		 * The rendered (HTML) version of the comment, when `renderedBody` was requested via `Expand`.
		 */
		renderedBody?: string;
		/**
		 * The user who created the comment.
		 */
		author?: {
			/**
			 * The account ID of the user.
			 */
			accountId?: string;
			/**
			 * The display name of the user.
			 */
			displayName?: string;
			/**
			 * The email address of the user.
			 */
			emailAddress?: string;
			/**
			 * Whether the user is active.
			 */
			active?: boolean;
		};
		/**
		 * The date and time the comment was created.
		 */
		created?: string;
		/**
		 * The date and time the comment was last updated.
		 */
		updated?: string;
		/**
		 * The group or role the comment is restricted to, if any.
		 */
		visibility?: {
			/**
			 * Whether visibility is restricted to a group or a role.
			 */
			type?: string;
			/**
			 * The name of the group or role.
			 */
			value?: string;
			/**
			 * The ID of the group or the name of the role.
			 */
			identifier?: string;
		};
		/**
		 * Whether the comment is visible in Jira Service Desk.
		 */
		jsdPublic?: boolean;
	}[];
	/**
	 * The maximum number of items that could be returned.
	 */
	maxResults?: number;
	/**
	 * The index of the first item returned.
	 */
	startAt?: number;
	/**
	 * The number of items returned.
	 */
	total?: number;
};

/**
 * List comments
 * Returns comments on an issue.
 */
export async function listComments(
	this: EndpointFunctionThis,
	payload: {
		input: ListCommentsInput;
		connectionId: number;
	},
): Promise<ListCommentsOutput> {
	const response = await this.endpointCaller<ListCommentsOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'listComments',
		},
		payload,
	);
	return response.output;
}
