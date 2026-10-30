// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListAssetsInput = {
	/**
	 * Unique identifier for a site. Use the `listSites` endpoint to find it.
	 */
	site_id: string;
	/**
	 * Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).
	 */
	localeId?: string;
	/**
	 * Filter assets to those in the specified folder and all descendant folders. Must be a 24-character hex ObjectId.
	 */
	folderId?: string;
	/**
	 * Number of records to skip, for pagination.
	 */
	offset?: number;
	/**
	 * Maximum number of records to return (max 100).
	 */
	limit?: number;
};

export type ListAssetsOutput = {
	/**
	 * Assets of the site.
	 *
	 * Items: Asset details.
	 */
	assets?: {
		/**
		 * Unique identifier for this asset.
		 */
		id?: string;
		/**
		 * File format type.
		 */
		contentType?: string;
		/**
		 * Size in bytes.
		 */
		size?: number;
		/**
		 * Unique identifier for the site that hosts this asset.
		 */
		siteId?: string;
		/**
		 * Link to the asset.
		 */
		hostedUrl?: string;
		/**
		 * Original file name at the time of upload.
		 */
		originalFileName?: string;
		/**
		 * Display name of the asset.
		 */
		displayName?: string;
		/**
		 * Date the asset metadata was last updated.
		 */
		lastUpdated?: string;
		/**
		 * Date the asset metadata was created.
		 */
		createdOn?: string;
		/**
		 * A list of [asset variants](https://help.webflow.com/hc/en-us/articles/33961378697107-Responsive-images) created by Webflow to serve your site responsively.
		 *
		 * Items: Asset variant details.
		 */
		variants?: {
			/**
			 * URL of where the asset variant is hosted.
			 */
			hostedUrl?: string;
			/**
			 * Original file name of the variant.
			 */
			originalFileName?: string;
			/**
			 * Display name of the variant.
			 */
			displayName?: string;
			/**
			 * Format of the variant.
			 */
			format?: string;
			/**
			 * Width in pixels.
			 */
			width?: number;
			/**
			 * Height in pixels.
			 */
			height?: number;
			/**
			 * Value between 0 and 100 representing the image quality.
			 */
			quality?: number;
			/**
			 * Any associated validation errors.
			 */
			error?: string;
		}[];
		/**
		 * The visual description of the asset.
		 */
		altText?: string;
		/**
		 * The ID of the folder the asset belongs to, or `null` if the asset is at the site root. This field is present only in list responses (`GET /sites/{site_id}/assets`).
		 */
		folderId?: string;
	}[];
	/**
	 * Pagination object.
	 */
	pagination?: {
		/**
		 * The limit used for pagination.
		 */
		limit?: number;
		/**
		 * The offset used for pagination.
		 */
		offset?: number;
		/**
		 * The total number of records.
		 */
		total?: number;
	};
};

/**
 * List assets
 * Lists the assets uploaded to a site.
 */
export async function listAssets(
	this: EndpointFunctionThis,
	payload: {
		input: ListAssetsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListAssetsOutput> {
	const response = await this.endpointCaller<ListAssetsOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listAssets',
		},
		payload,
	);
	return response.output;
}
