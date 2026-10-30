// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListCollectionsInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
};

export type ListCollectionsOutput = {
	/**
	 * An array of Collections.
	 *
	 * Items: A collection object.
	 */
	collections?: {
		/**
		 * Unique identifier for a Collection.
		 */
		id?: string;
		/**
		 * Name given to the Collection.
		 */
		displayName?: string;
		/**
		 * The name of one Item in Collection (e.g. “Blog Post” if the Collection is called “Blog Posts”).
		 */
		singularName?: string;
		/**
		 * Slug of Collection in Site URL structure.
		 */
		slug?: string;
		/**
		 * The date the collection was created.
		 */
		createdOn?: string;
		/**
		 * The date the collection was last updated.
		 */
		lastUpdated?: string;
	}[];
};

/**
 * List collections
 * Lists the CMS collections of a site.
 */
export async function listCollections(
	this: EndpointFunctionThis,
	payload: {
		input: ListCollectionsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListCollectionsOutput> {
	const response = await this.endpointCaller<ListCollectionsOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listCollections',
		},
		payload,
	);
	return response.output;
}
