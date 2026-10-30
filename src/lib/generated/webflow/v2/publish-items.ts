// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type PublishItemsInput = {
	/**
	 * Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.
	 */
	collection_id: string;
	/**
	 * IDs of the items to publish in the primary locale.
	 *
	 * Items: ID of an item to publish.
	 */
	itemIds?: string[];
	/**
	 * Items to publish with an explicit set of locales each.
	 *
	 * Items: One item with its locales.
	 */
	items?: {
		/**
		 * The ID of the CMS item. Required for every `items` entry.
		 */
		id?: string;
		/**
		 * Array of identifiers for the locales where the item will be published.
		 *
		 * Items: A CMS locale ID.
		 */
		cmsLocaleIds?: string[];
	}[];
};

export type PublishItemsOutput = {
	/**
	 * IDs of the items that were published.
	 *
	 * Items: ID of a published item.
	 */
	publishedItemIds?: string[];
	/**
	 * Error messages for items that could not be published.
	 *
	 * Items: An error message.
	 */
	errors?: string[];
};

/**
 * Publish items
 * Publishes one or more staged items of a CMS collection to the live site.
 */
export async function publishItems(
	this: EndpointFunctionThis,
	payload: {
		input: PublishItemsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<PublishItemsOutput> {
	const response = await this.endpointCaller<PublishItemsOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'publishItems',
		},
		payload,
	);
	return response.output;
}
