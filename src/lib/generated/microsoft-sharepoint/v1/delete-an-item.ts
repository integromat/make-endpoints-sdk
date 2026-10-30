// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAnItemInput = {
	/**
	 * Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).
	 */
	site: string;
	/**
	 * GUID (`id`) or display name of the list. Use the list GUID when the display name contains `?`, `/`, `#`, or `%` (Graph rejects `?`, `/`, and `#` in the URL path and double-decodes `%`, which can resolve to a different list), or is `.` or `..`.
	 */
	list: string;
	/**
	 * Integer identifier (`id`) of the list item within the list. Do not pass `.`, `..`, or path separators (`/`).
	 */
	item: string;
};

export type DeleteAnItemOutput = Record<string, never>;

/**
 * Delete an item
 * Deletes an item from a SharePoint list.
 */
export async function deleteAnItem(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAnItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteAnItemOutput> {
	const response = await this.endpointCaller<DeleteAnItemOutput>(
		{
			appName: 'microsoft-sharepoint',
			appVersion: 1,
			endpointName: 'deleteAnItem',
		},
		payload,
	);
	return response.output;
}
