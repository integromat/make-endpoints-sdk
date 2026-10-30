// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListSitesInput = Record<string, never>;

export type ListSitesOutput = {
	/**
	 * Sites the connection has access to.
	 *
	 * Items: One site.
	 */
	sites?: {
		/**
		 * Unique identifier for the Site.
		 */
		id?: string;
		/**
		 * Unique identifier for the Workspace.
		 */
		workspaceId?: string;
		/**
		 * Date the Site was created.
		 */
		createdOn?: string;
		/**
		 * Name given to Site.
		 */
		displayName?: string;
		/**
		 * Slugified version of name.
		 */
		shortName?: string;
		/**
		 * Date the Site was last published.
		 */
		lastPublished?: string;
		/**
		 * Timestamp of the last full compile of the site; equals `lastPublished` on published sites and is `null` for a site that has never been published. Returned by the API but not described in the vendor reference.
		 */
		fullSiteCompiledAt?: string;
		/**
		 * Date the Site was last updated.
		 */
		lastUpdated?: string;
		/**
		 * URL of a generated image for the given Site.
		 */
		previewUrl?: string;
		/**
		 * Site timezone set under Site Settings.
		 */
		timeZone?: string;
		/**
		 * The ID of the parent folder the Site exists in.
		 */
		parentFolderId?: string;
		/**
		 * Custom domains connected to the site.
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
		 * Locales configured for the site.
		 */
		locales?: {
			/**
			 * The primary locale for the site or application.
			 */
			primary?: {
				/**
				 * The unique identifier for the locale.
				 */
				id?: string;
				/**
				 * A CMS-specific identifier for the locale.
				 */
				cmsLocaleId?: string;
				/**
				 * Indicates if the locale is enabled.
				 */
				enabled?: boolean;
				/**
				 * The display name of the locale, typically in English.
				 */
				displayName?: string;
				/**
				 * An optional ID for an image associated with the locale, nullable.
				 */
				displayImageId?: string;
				/**
				 * Determines if requests should redirect to the locale's subdirectory.
				 */
				redirect?: boolean;
				/**
				 * The subdirectory path for the locale, used in URLs.
				 */
				subdirectory?: string;
				/**
				 * A tag or code representing the locale, often following a standard format like 'en-US'.
				 */
				tag?: string;
			};
			/**
			 * A list of secondary locales available for the site or application.
			 *
			 * Items: One secondary locale.
			 */
			secondary?: {
				/**
				 * The unique identifier for the locale.
				 */
				id?: string;
				/**
				 * A CMS-specific identifier for the locale.
				 */
				cmsLocaleId?: string;
				/**
				 * Indicates if the locale is enabled.
				 */
				enabled?: boolean;
				/**
				 * The display name of the locale, typically in English.
				 */
				displayName?: string;
				/**
				 * An optional ID for an image associated with the locale, nullable.
				 */
				displayImageId?: string;
				/**
				 * Determines if requests should redirect to the locale's subdirectory.
				 */
				redirect?: boolean;
				/**
				 * The subdirectory path for the locale, used in URLs.
				 */
				subdirectory?: string;
				/**
				 * A tag or code representing the locale, often following a standard format like 'en-US'.
				 */
				tag?: string;
			}[];
		};
		/**
		 * Indicates if data collection is enabled for the site.
		 */
		dataCollectionEnabled?: boolean;
		/**
		 * The type of data collection enabled for the site. One of: `always`, `optOut`, `disabled`.
		 */
		dataCollectionType?: string;
	}[];
};

/**
 * List sites
 * Lists all sites the connection can access.
 */
export async function listSites(
	this: EndpointFunctionThis,
	payload: {
		input: ListSitesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListSitesOutput> {
	const response = await this.endpointCaller<ListSitesOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listSites',
		},
		payload,
	);
	return response.output;
}
