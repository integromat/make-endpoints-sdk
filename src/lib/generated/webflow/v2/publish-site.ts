// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type PublishSiteInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Array of Custom Domain IDs to publish.
	 *
	 * Items: ID of a custom domain to publish to.
	 */
	customDomains?: string[];
	/**
	 * Choice of whether to publish to the default Webflow Subdomain.
	 */
	publishToWebflowSubdomain?: boolean;
	/**
	 * The ID of the page to publish.
	 */
	pageId?: string;
};

export type PublishSiteOutput = {
	/**
	 * Custom domains the site was published to.
	 *
	 * Items: A custom domain connected to the site.
	 */
	customDomains?: {
		/**
		 * Unique identifier for the Domain.
		 */
		id?: string;
		/**
		 * The registered Domain name.
		 */
		url?: string;
		/**
		 * The date the custom domain was last published to.
		 */
		lastPublished?: string;
	}[];
	/**
	 * Flag for publishing to webflow.io subdomain. Defaults to `false`.
	 */
	publishToWebflowSubdomain?: boolean;
	/**
	 * Whether the site or an individual page was published. One of: `site`, `page`.
	 */
	publishScope?: string;
};

/**
 * Publish a site
 * Publishes a site, or a single page, to one or more domains.
 */
export async function publishSite(
	this: EndpointFunctionThis,
	payload: {
		input: PublishSiteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<PublishSiteOutput> {
	const response = await this.endpointCaller<PublishSiteOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'publishSite',
		},
		payload,
	);
	return response.output;
}
