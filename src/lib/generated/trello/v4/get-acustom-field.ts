// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetACustomFieldInput = {
	/**
	 * The ID of the custom field. Find it with `getBoard` (`customFields` = `true`).
	 */
	id: string;
};

export type GetACustomFieldOutput = {
	/**
	 * The ID of the custom field.
	 */
	id?: string;
	/**
	 * The ID of the board the custom field belongs to.
	 */
	idModel?: string;
	/**
	 * The type of the model the custom field belongs to: `board`.
	 */
	modelType?: string;
	/**
	 * A hash identifying custom fields with the same definition across boards.
	 */
	fieldGroup?: string;
	/**
	 * The display settings of the custom field.
	 */
	display?: {
		/**
		 * Whether the custom field is shown on the front of cards.
		 */
		cardFront?: boolean;
	};
	/**
	 * The name of the custom field.
	 */
	name?: string;
	/**
	 * The position of the custom field.
	 */
	pos?: number;
	/**
	 * The type of the custom field: `checkbox`, `date`, `list`, `number`, or `text`.
	 */
	type?: string;
	/**
	 * Whether the custom field is a suggested field.
	 */
	isSuggestedField?: boolean;
	/**
	 * The options of a dropdown (`list`) custom field.
	 *
	 * Items: An option of the dropdown custom field.
	 */
	options?: {
		/**
		 * The ID of the option.
		 */
		id?: string;
		/**
		 * The ID of the custom field the option belongs to.
		 */
		idCustomField?: string;
		/**
		 * The value of the option.
		 */
		value?: {
			/**
			 * The text of the option.
			 */
			text?: string;
		};
		/**
		 * The color of the option.
		 */
		color?: string;
		/**
		 * The position of the option.
		 */
		pos?: number;
	}[];
};

/**
 * Get a custom field
 * Returns a custom field definition.
 */
export async function getAcustomField(
	this: EndpointFunctionThis,
	payload: {
		input: GetACustomFieldInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetACustomFieldOutput> {
	const response = await this.endpointCaller<GetACustomFieldOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'getACustomField',
		},
		payload,
	);
	return response.output;
}
