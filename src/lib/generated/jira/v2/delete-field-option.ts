// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteFieldOptionInput = {
	/**
	 * The ID of the custom field, e.g. `customfield_10001`.
	 */
	fieldId: string;
	/**
	 * The ID of the custom field context to delete the option from.
	 */
	contextId: number;
	/**
	 * The ID of the option to delete.
	 */
	optionId: number;
};

export type DeleteFieldOptionOutput = Record<string, never>;

/**
 * Delete field option
 * Deletes a custom field option.
 */
export async function deleteFieldOption(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteFieldOptionInput;
		connectionId: number;
	},
): Promise<DeleteFieldOptionOutput> {
	const response = await this.endpointCaller<DeleteFieldOptionOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'deleteFieldOption',
		},
		payload,
	);
	return response.output;
}
