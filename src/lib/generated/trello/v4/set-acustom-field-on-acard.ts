// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SetACustomFieldOnACardInput = {
	/**
	 * The ID of the card to set the custom field value on.
	 */
	idCard: string;
	/**
	 * The ID of the custom field. Find it with `getBoard` (`customFields` = `true`).
	 */
	idCustomField: string;
	/**
	 * The value for a text, number, date, or checkbox custom field. Fill in only the key that matches the custom field type. Leave empty for dropdown (`list`) custom fields and use `idValue` instead.
	 */
	value?: {
		/**
		 * The value of a text custom field.
		 */
		text?: string;
		/**
		 * The value of a number custom field, as a string. For example, `42`.
		 */
		number?: string;
		/**
		 * The value of a date custom field.
		 */
		date?: string;
		/**
		 * The value of a checkbox custom field, as a string.
		 */
		checked?: '' | 'true' | 'false';
	};
	/**
	 * The ID of the selected option, for dropdown (`list`) custom fields. Find option IDs with `getBoard` (`customFields` = `true`).
	 */
	idValue?: string;
};

export type SetACustomFieldOnACardOutput = {
	/**
	 * The ID of the custom field item.
	 */
	id?: string;
	/**
	 * The ID of the custom field definition.
	 */
	idCustomField?: string;
	/**
	 * The ID of the card the value is set on.
	 */
	idModel?: string;
	/**
	 * The type of the model the value is set on: `card`.
	 */
	modelType?: string;
	/**
	 * The ID of the selected option, for dropdown custom fields.
	 */
	idValue?: string;
	/**
	 * The value of the custom field, keyed by type.
	 */
	value?: {
		/**
		 * The value of a text custom field.
		 */
		text?: string;
		/**
		 * The value of a number custom field, as a string.
		 */
		number?: string;
		/**
		 * The value of a date custom field.
		 */
		date?: string;
		/**
		 * The value of a checkbox custom field: `true` or `false`, as a string.
		 */
		checked?: string;
	};
};

/**
 * Set a custom field on a card
 * Sets or updates the value of a custom field on a card.
 */
export async function setAcustomFieldOnAcard(
	this: EndpointFunctionThis,
	payload: {
		input: SetACustomFieldOnACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SetACustomFieldOnACardOutput> {
	const response = await this.endpointCaller<SetACustomFieldOnACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'setACustomFieldOnACard',
		},
		payload,
	);
	return response.output;
}
