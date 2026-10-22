// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetCustomFieldOptionsInput = {
	/**
	 * The ID of the dropdown (`list`) custom field.
	 */
	id: string;
};

export type GetCustomFieldOptionsOutput = {
	/**
	 * The ID of the option.
	 */
	_id?: string;
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
};

/**
 * Get custom field options
 * Lists the options of a dropdown custom field.
 */
export async function getCustomFieldOptions(
	this: EndpointFunctionThis,
	payload: {
		input: GetCustomFieldOptionsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetCustomFieldOptionsOutput> {
	const response = await this.endpointCaller<GetCustomFieldOptionsOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'getCustomFieldOptions',
		},
		payload,
	);
	return response.output;
}
