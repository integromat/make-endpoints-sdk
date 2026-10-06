// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListCommentsInput = {
	/**
	 * The ID of the file.
	 */
	fileId: string;
	/**
	 * The minimum value of modifiedTime for the result comments, in RFC 3339 format.
	 */
	startModifiedTime?: string;
	/**
	 * Whether to include deleted comments. Deleted comments will not include their original content.
	 */
	includeDeleted?: boolean;
	/**
	 * The fields to include in the response. If not specified, all fields are returned.
	 */
	fields?: string;
	/**
	 * The maximum number of comments to return per page. Acceptable values are 1 to 100. Default is 20.
	 */
	pageSize?: number;
	/**
	 * The token for continuing a previous list request on the next page.
	 */
	pageToken?: string;
};

export type ListCommentsOutput = {
	/**
	 * Always 'drive#commentList'.
	 */
	kind?: string;
	/**
	 * The page token for the next page of comments.
	 */
	nextPageToken?: string;
	/**
	 * The list of comments.
	 *
	 * Items: A comment on a file.
	 */
	comments?: {
		/**
		 * Always 'drive#comment'.
		 */
		kind?: string;
		/**
		 * The ID of the comment.
		 */
		id?: string;
		/**
		 * The time at which the comment was created, in RFC 3339 format.
		 */
		createdTime?: string;
		/**
		 * The last time the comment or any of its replies was modified, in RFC 3339 format.
		 */
		modifiedTime?: string;
		/**
		 * Whether the comment has been resolved.
		 */
		resolved?: boolean;
		/**
		 * Whether the comment has been deleted.
		 */
		deleted?: boolean;
		/**
		 * The content of the comment with HTML formatting.
		 */
		htmlContent?: string;
		/**
		 * The plain text content of the comment.
		 */
		content?: string;
		/**
		 * The author of the comment.
		 */
		author?: {
			/**
			 * Always 'drive#user'.
			 */
			kind?: string;
			/**
			 * The user's display name.
			 */
			displayName?: string;
			/**
			 * A link to the user's profile photo.
			 */
			photoLink?: string;
			/**
			 * Whether this user is the requesting user.
			 */
			me?: boolean;
		};
		/**
		 * The file content to which the comment refers.
		 */
		quotedFileContent?: {
			/**
			 * The MIME type of the quoted content.
			 */
			mimeType?: string;
			/**
			 * The quoted content itself.
			 */
			value?: string;
		};
		/**
		 * A region of the document represented as a JSON string.
		 */
		anchor?: string;
		/**
		 * The email address of the user assigned to this comment. Unset if no user is assigned.
		 */
		assigneeEmailAddress?: string;
		/**
		 * A list of email addresses for users mentioned in this comment.
		 *
		 * Items: An email address of a mentioned user.
		 */
		mentionedEmailAddresses?: string[];
		/**
		 * The full list of replies to the comment.
		 *
		 * Items: A reply to a comment.
		 */
		replies?: {
			/**
			 * Always 'drive#reply'.
			 */
			kind?: string;
			/**
			 * The ID of the reply.
			 */
			id?: string;
			/**
			 * The time at which the reply was created, in RFC 3339 format.
			 */
			createdTime?: string;
			/**
			 * The last time the reply was modified, in RFC 3339 format.
			 */
			modifiedTime?: string;
			/**
			 * Whether the reply has been deleted.
			 */
			deleted?: boolean;
			/**
			 * The content of the reply with HTML formatting.
			 */
			htmlContent?: string;
			/**
			 * The plain text content of the reply.
			 */
			content?: string;
			/**
			 * The author of the reply.
			 */
			author?: {
				/**
				 * Always 'drive#user'.
				 */
				kind?: string;
				/**
				 * The user's display name.
				 */
				displayName?: string;
				/**
				 * A link to the user's profile photo.
				 */
				photoLink?: string;
				/**
				 * Whether this user is the requesting user.
				 */
				me?: boolean;
			};
			/**
			 * The action the reply performed to the parent comment: resolve or reopen.
			 */
			action?: string;
		}[];
	}[];
};

/**
 * List comments
 * Returns a list of comments on a file.
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
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'listComments',
		},
		payload,
	);
	return response.output;
}
