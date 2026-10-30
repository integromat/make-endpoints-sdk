// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchContactFoldersInput = {
	/**
	 * An OData `$filter` expression sent as `$filter`. See [OData query parameters](https://learn.microsoft.com/en-us/graph/query-parameters).
	 */
	filter?: string;
	/**
	 * The properties to return, sent as `$select`. If empty, Microsoft Graph returns its default set of properties.
	 */
	select?: '' | 'displayName' | 'id' | 'parentFolderId';
	/**
	 * The sort expressions, sent as `$orderby`.
	 */
	orderby?: '' | 'displayName asc' | 'displayName desc';
	/**
	 * Set to `true` to include the total number of items in the collection as `@odata.count`. Sent as `$count`.
	 */
	count?: boolean;
	/**
	 * The number of items to return in one page, sent as `$top`. The minimum value is 1. If omitted, Microsoft Graph applies its default page size.
	 */
	top?: number;
	/**
	 * The number of items to skip at the start of the collection, sent as `$skip`. Use it to get the next page.
	 */
	skip?: number;
};

export type SearchContactFoldersOutput = {
	/**
	 * The OData context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The URL of the next page of results. Present only when more results exist. Use its `$skip` value as the **Skip** input of the next call.
	 */
	'@odata.nextLink'?: string;
	/**
	 * The total number of items in the collection. Present only when **Count** is set to `true`.
	 */
	'@odata.count'?: number;
	/**
	 * The page of contact folders returned.
	 *
	 * Items: A contact folder.
	 */
	value?: {
		/**
		 * The unique identifier of the contact folder.
		 */
		id?: string;
		/**
		 * The ID of the folder's parent folder.
		 */
		parentFolderId?: string;
		/**
		 * The folder's display name.
		 */
		displayName?: string;
	}[];
};

/**
 * List contact folders
 * Returns a page of contact folders from the default contacts folder of the signed-in user.
 */
export async function searchContactFolders(
	this: EndpointFunctionThis,
	payload: {
		input: SearchContactFoldersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchContactFoldersOutput> {
	const response = await this.endpointCaller<SearchContactFoldersOutput>(
		{
			appName: 'microsoft-people',
			appVersion: 2,
			endpointName: 'searchContactFolders',
		},
		payload,
	);
	return response.output;
}
