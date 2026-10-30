// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type PublishAPageInput = {
	/**
	 * Composite site id (`hostname,siteCollectionId,siteId`), `root` for the tenant root site, or `hostname:/sites/name:` (with the trailing colon). From [Get a site](https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0).
	 */
	site: string;
	/**
	 * Identifier of the site page to publish.
	 */
	page: string;
};

export type PublishAPageOutput = Record<string, never>;

/**
 * Publish a page
 * Publishes the latest version of a page.
 */
export async function publishApage(
	this: EndpointFunctionThis,
	payload: {
		input: PublishAPageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<PublishAPageOutput> {
	const response = await this.endpointCaller<PublishAPageOutput>(
		{
			appName: 'microsoft-sharepoint',
			appVersion: 1,
			endpointName: 'publishAPage',
		},
		payload,
	);
	return response.output;
}
