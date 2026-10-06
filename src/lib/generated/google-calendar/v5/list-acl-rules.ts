// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListAclRulesInput = {
	/**
	 * The identifier of the calendar.
	 */
	calendarId: string;
	/**
	 * Whether to include deleted ACL rules in the result.
	 */
	showDeleted?: boolean;
	/**
	 * Maximum number of entries returned on one result page.
	 */
	maxResults?: number;
	/**
	 * Token specifying which result page to return.
	 */
	pageToken?: string;
	/**
	 * Token for retrieving only entries that have changed since the last list request.
	 */
	syncToken?: string;
};

export type ListAclRulesOutput = {
	/**
	 * Type of the resource. Value is always calendar#acl.
	 */
	kind?: string;
	/**
	 * ETag of the collection.
	 */
	etag?: string;
	/**
	 * Token used to access the next page of results.
	 */
	nextPageToken?: string;
	/**
	 * Token used for incremental synchronization at a later point.
	 */
	nextSyncToken?: string;
	/**
	 * List of ACL rules.
	 */
	items?: {
		/**
		 * Type of the resource. Value is always calendar#aclRule.
		 */
		kind?: string;
		/**
		 * ETag of the resource.
		 */
		etag?: string;
		/**
		 * Identifier of the ACL rule.
		 */
		id?: string;
		/**
		 * The extent to which calendar access is granted by this ACL rule.
		 */
		scope?: {
			/**
			 * The type of the scope. Possible values are default, user, group, or domain.
			 */
			type?: string;
			/**
			 * The email address of a user or group, or the name of a domain.
			 */
			value?: string;
		};
		/**
		 * The access role granted by this ACL rule. Possible values are none, freeBusyReader, reader, writerWithoutPrivateAccess, writer, or owner.
		 */
		role?: string;
	}[];
};

/**
 * List access control rules
 * Returns the rules in the access control list for a calendar.
 */
export async function listAclRules(
	this: EndpointFunctionThis,
	payload: {
		input: ListAclRulesInput;
		connectionId: number;
	},
): Promise<ListAclRulesOutput> {
	const response = await this.endpointCaller<ListAclRulesOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'listAclRules',
		},
		payload,
	);
	return response.output;
}
