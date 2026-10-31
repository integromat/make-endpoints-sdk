// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetARichMenuInput = {
	/**
	 * ID of the rich menu.
	 */
	richMenuId: string;
};

export type GetARichMenuOutput = {
	/**
	 * ID of a rich menu.
	 */
	richMenuId?: string;
	/**
	 * Size of the rich menu in pixels.
	 */
	size?: {
		/**
		 * Width of the rich menu in pixels. The rich menu image width must be between 800 and 2500.
		 */
		width?: number;
		/**
		 * Height of the rich menu in pixels. The rich menu image height must be at least 250.
		 */
		height?: number;
	};
	/**
	 * `true` to display the rich menu by default. Otherwise, `false`.
	 */
	selected?: boolean;
	/**
	 * Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.
	 */
	name?: string;
	/**
	 * Text displayed in the chat bar.
	 */
	chatBarText?: string;
	/**
	 * Array of area objects which define the coordinates and size of tappable areas.
	 *
	 * Items: Rich menu area.
	 */
	areas?: {
		/**
		 * Position and size of the tappable area.
		 */
		bounds?: {
			/**
			 * Horizontal position of the top-left corner of the tappable area, relative to the top-left corner of the image.
			 */
			x?: number;
			/**
			 * Vertical position of the top-left corner of the tappable area, relative to the top-left corner of the image.
			 */
			y?: number;
			/**
			 * Width of the tappable area in pixels.
			 */
			width?: number;
			/**
			 * Height of the tappable area in pixels.
			 */
			height?: number;
		};
		/**
		 * Action performed when the user taps the area.
		 */
		action?: {
			/**
			 * Type of the action.
			 */
			type?:
				| ''
				| 'clipboard'
				| 'datetimepicker'
				| 'message'
				| 'postback'
				| 'richmenuswitch'
				| 'uri';
			/**
			 * Label of the action.
			 */
			label?: string;
		};
	}[];
};

/**
 * Get a rich menu
 * Returns a rich menu by its ID.
 */
export async function getArichMenu(
	this: EndpointFunctionThis,
	payload: {
		input: GetARichMenuInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetARichMenuOutput> {
	const response = await this.endpointCaller<GetARichMenuOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'getARichMenu',
		},
		payload,
	);
	return response.output;
}
