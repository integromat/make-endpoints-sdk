// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListRevisionsInput = {
	/**
	 * The ID of the file.
	 */
	fileId: string;
	/**
	 * The fields to include in the response. If not specified, all fields are returned.
	 */
	fields?: string;
	/**
	 * The maximum number of revisions to return per page. Acceptable values are 1 to 1000. Default is 200.
	 */
	pageSize?: number;
	/**
	 * The token for continuing a previous list request on the next page.
	 */
	pageToken?: string;
};

export type ListRevisionsOutput = {
	/**
	 * Always 'drive#revisionList'.
	 */
	kind?: string;
	/**
	 * The page token for the next page of revisions.
	 */
	nextPageToken?: string;
	/**
	 * The list of revisions.
	 *
	 * Items: A revision of a file.
	 */
	revisions?: {
		/**
		 * Always 'drive#revision'.
		 */
		kind?: string;
		/**
		 * The ID of the revision.
		 */
		id?: string;
		/**
		 * The MIME type of the revision.
		 */
		mimeType?: string;
		/**
		 * The last time the revision was modified, in RFC 3339 format.
		 */
		modifiedTime?: string;
		/**
		 * Whether to keep this revision forever, even if it is no longer the head revision.
		 */
		keepForever?: boolean;
		/**
		 * Whether this revision is published.
		 */
		published?: boolean;
		/**
		 * Whether subsequent revisions will be automatically republished.
		 */
		publishAuto?: boolean;
		/**
		 * Whether this revision is published outside the domain.
		 */
		publishedOutsideDomain?: boolean;
		/**
		 * The last user to modify this revision.
		 */
		lastModifyingUser?: {
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
			/**
			 * The user's ID as visible in Permission resources.
			 */
			permissionId?: string;
			/**
			 * The email address of the user.
			 */
			emailAddress?: string;
		};
		/**
		 * The original filename used to create this revision.
		 */
		originalFilename?: string;
		/**
		 * The MD5 checksum of the revision's content.
		 */
		md5Checksum?: string;
		/**
		 * The size of the revision's content in bytes.
		 */
		size?: string;
		/**
		 * Links for exporting Google Docs to specific formats.
		 */
		exportLinks?: Record<string, JSONValue>;
	}[];
};

/**
 * List file revisions
 * Returns a list of revisions for a file.
 */
export async function listRevisions(
	this: EndpointFunctionThis,
	payload: {
		input: ListRevisionsInput;
		connectionId: number;
	},
): Promise<ListRevisionsOutput> {
	const response = await this.endpointCaller<ListRevisionsOutput>(
		{
			appName: 'google-drive',
			appVersion: 4,
			endpointName: 'listRevisions',
		},
		payload,
	);
	return response.output;
}
