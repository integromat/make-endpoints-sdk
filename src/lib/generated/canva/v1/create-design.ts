// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateDesignInput = {
	/**
	 * The desired design type. Provide either a preset design type or custom dimensions. At least one of design type or asset ID must be provided.
	 */
	design_type?: {
		/**
		 * Use `preset` for common design types or `custom` for custom dimensions.
		 */
		type?: '' | 'preset' | 'custom';
	};
	/**
	 * The ID of an image asset to insert into the created design. Currently only supports image assets.
	 */
	asset_id?: string;
};

export type CreateDesignOutput = {
	/**
	 * The design object containing metadata about the created design.
	 */
	design?: {
		/**
		 * The design ID.
		 */
		id?: string;
		/**
		 * Metadata for the user, consisting of the User ID and Team ID.
		 */
		owner?: {
			/**
			 * The ID of the user.
			 */
			user_id?: string;
			/**
			 * The ID of the user's Canva Team.
			 */
			team_id?: string;
		};
		/**
		 * A thumbnail image representing the design.
		 */
		thumbnail?: {
			/**
			 * The width of the thumbnail image in pixels.
			 */
			width?: number;
			/**
			 * The height of the thumbnail image in pixels.
			 */
			height?: number;
			/**
			 * A URL for retrieving the thumbnail image. Expires after 15 minutes.
			 */
			url?: string;
		};
		/**
		 * A temporary set of URLs for viewing or editing the design. Valid for 30 days.
		 */
		urls?: {
			/**
			 * A temporary editing URL for the design. Valid for 30 days.
			 */
			edit_url?: string;
			/**
			 * A temporary viewing URL for the design. Valid for 30 days.
			 */
			view_url?: string;
		};
		/**
		 * When the design was created, as a Unix timestamp (in seconds).
		 */
		created_at?: number;
		/**
		 * When the design was last updated, as a Unix timestamp (in seconds).
		 */
		updated_at?: number;
		/**
		 * The total number of pages in the design.
		 */
		page_count?: number;
		/**
		 * The type of content the design contains.
		 *
		 * Items: The design content type.
		 */
		design_types?: string[];
	};
};

/**
 * Create a design
 * Creates a new Canva design.
 */
export async function createDesign(
	this: EndpointFunctionThis,
	payload: {
		input: CreateDesignInput;
		connectionId: number;
	},
): Promise<CreateDesignOutput> {
	const response = await this.endpointCaller<CreateDesignOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'createDesign',
		},
		payload,
	);
	return response.output;
}
