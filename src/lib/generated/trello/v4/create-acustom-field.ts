// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateACustomFieldInput = {
	/**
	 * The ID of the board to create the custom field on.
	 */
	idModel: string;
	/**
	 * The name of the custom field, as shown to the user.
	 */
	name: string;
	/**
	 * The type of the custom field. Only `list` fields use options.
	 */
	type: 'checkbox' | 'date' | 'list' | 'number' | 'text';
	/**
	 * The position of the custom field among the custom fields of the board: `top`, `bottom`, or a positive number.
	 */
	pos?: string;
	/**
	 * The options of the dropdown. Only used when the type is `list`.
	 *
	 * Items: An option of the dropdown.
	 */
	options?: {
		/**
		 * The value of the option.
		 */
		value?: {
			/**
			 * The text of the option, as shown to the user.
			 */
			text?: string;
		};
		/**
		 * The color of the option.
		 */
		color?:
			| ''
			| 'none'
			| 'green'
			| 'yellow'
			| 'orange'
			| 'red'
			| 'purple'
			| 'blue'
			| 'sky'
			| 'lime'
			| 'pink'
			| 'black';
		/**
		 * The position of the option in the dropdown.
		 */
		pos?: number;
	}[];
	/**
	 * Whether the custom field is shown on the front of cards. Default: `true`.
	 */
	display_cardFront?: boolean;
};

export type CreateACustomFieldOutput = {
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
 * Create a custom field
 * Creates a new custom field on a board.
 */
export async function createAcustomField(
	this: EndpointFunctionThis,
	payload: {
		input: CreateACustomFieldInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateACustomFieldOutput> {
	const response = await this.endpointCaller<CreateACustomFieldOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'createACustomField',
		},
		payload,
	);
	return response.output;
}
