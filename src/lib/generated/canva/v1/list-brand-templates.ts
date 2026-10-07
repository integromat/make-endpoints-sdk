// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListBrandTemplatesInput = {
	/**
	 * A search query to filter brand templates by name.
	 */
	query?: string;
	/**
	 * A continuation token for paginating through results. Pass the value from the previous response to get the next page.
	 */
	continuation?: string;
};

export type ListBrandTemplatesOutput = {
	/**
	 * The list of brand templates.
	 *
	 * Items: A brand template.
	 */
	items?: {
		/**
		 * The brand template ID.
		 */
		id?: string;
		/**
		 * When the template was created, as a Unix timestamp (in seconds).
		 */
		created_at?: number;
		/**
		 * When the template was last updated, as a Unix timestamp (in seconds).
		 */
		updated_at?: number;
		/**
		 * A thumbnail image representing the template.
		 */
		thumbnail?: {
			/**
			 * Width in pixels.
			 */
			width?: number;
			/**
			 * Height in pixels.
			 */
			height?: number;
			/**
			 * Thumbnail URL. Expires after 15 minutes.
			 */
			url?: string;
		};
	}[];
	/**
	 * A continuation token for the next page. Empty when there are no more results.
	 */
	continuation?: string;
};

/**
 * List brand templates
 * Lists the user's brand templates.
 */
export async function listBrandTemplates(
	this: EndpointFunctionThis,
	payload: {
		input: ListBrandTemplatesInput;
		connectionId: number;
	},
): Promise<ListBrandTemplatesOutput> {
	const response = await this.endpointCaller<ListBrandTemplatesOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'listBrandTemplates',
		},
		payload,
	);
	return response.output;
}
