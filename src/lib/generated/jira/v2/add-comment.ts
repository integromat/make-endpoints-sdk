// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type AddCommentInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * The comment text, as an [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/) JSON object, e.g. `{"type": "doc", "version": 1, "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Comment text"}]}]}`.
	 */
	body: Record<string, JSONValue>;
	/**
	 * Restricts who can see the comment, to a group or a project role. Leave empty for a public comment.
	 */
	visibility?: {
		/**
		 * Whether visibility is restricted to a group or a role.
		 */
		type?: '' | 'group' | 'role';
		/**
		 * The name of the group or role that visibility is restricted to.
		 */
		value?: string;
		/**
		 * The ID of the group or the name of the role that visibility is restricted to. Preferred over `Value` since group names are mutable.
		 */
		identifier?: string;
	};
	/**
	 * Comment properties to set.
	 *
	 * Items: A comment property.
	 */
	properties?: {
		/**
		 * The key of the comment property.
		 */
		key: string;
		/**
		 * The value of the comment property.
		 */
		value: Record<string, JSONValue>;
	}[];
	/**
	 * Whether the comment is visible in Jira Service Desk. Defaults to `true` on sites using Jira Service Desk.
	 */
	jsdPublic?: boolean;
	/**
	 * Whether the comment was added from an email sent by a person who is not part of the issue, and that person should be able to see the request.
	 */
	jsdAuthorCanSeeRequest?: boolean;
	/**
	 * Use `renderedBody` to also return the comment body rendered as HTML in the response.
	 */
	expand?: string;
};

export type AddCommentOutput = {
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
		 * The type of account: `atlassian`, `app`, or `customer`.
		 */
		accountType?: string;
		/**
		 * Whether the user is active.
		 */
		active?: boolean;
		/**
		 * The display name of the user.
		 */
		displayName?: string;
		/**
		 * The email address of the user.
		 */
		emailAddress?: string;
		/**
		 * The URL of the user.
		 */
		self?: string;
		/**
		 * The time zone of the user.
		 */
		timeZone?: string;
	};
	/**
	 * The user who last updated the comment.
	 */
	updateAuthor?: {
		/**
		 * The account ID of the user.
		 */
		accountId?: string;
		/**
		 * The type of account: `atlassian`, `app`, or `customer`.
		 */
		accountType?: string;
		/**
		 * Whether the user is active.
		 */
		active?: boolean;
		/**
		 * The display name of the user.
		 */
		displayName?: string;
		/**
		 * The email address of the user.
		 */
		emailAddress?: string;
		/**
		 * The URL of the user.
		 */
		self?: string;
		/**
		 * The time zone of the user.
		 */
		timeZone?: string;
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
	/**
	 * Whether the comment was added from an email sent by a person not part of the issue.
	 */
	jsdAuthorCanSeeRequest?: boolean;
	/**
	 * The comment properties identified in the request.
	 *
	 * Items: A comment property.
	 */
	properties?: {
		/**
		 * The key of the comment property.
		 */
		key?: string;
		/**
		 * The value of the comment property.
		 */
		value?: Record<string, JSONValue>;
	}[];
};

/**
 * Add comment
 * Adds a comment to an issue.
 */
export async function addComment(
	this: EndpointFunctionThis,
	payload: {
		input: AddCommentInput;
		connectionId: number;
	},
): Promise<AddCommentOutput> {
	const response = await this.endpointCaller<AddCommentOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'addComment',
		},
		payload,
	);
	return response.output;
}
