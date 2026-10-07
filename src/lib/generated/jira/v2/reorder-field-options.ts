// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ReorderFieldOptionsInput = {
	/**
	 * The ID of the custom field, e.g. `customfield_10001`.
	 */
	fieldId: string;
	/**
	 * The ID of the custom field context.
	 */
	contextId: number;
	/**
	 * The IDs of the custom field options to move, in the order they should end up in after the move. Must contain either custom field options or cascading options, not both.
	 *
	 * Items: The ID of a custom field option.
	 */
	customFieldOptionIds: string[];
	/**
	 * The position to move the options to. Required when `After option ID` isn't provided.
	 */
	position?: '' | 'First' | 'Last';
	/**
	 * The ID of the custom field option (or cascading option) to place the moved options after. Required when `Position` isn't provided.
	 */
	after?: string;
};

export type ReorderFieldOptionsOutput = Record<string, never>;

/**
 * Reorder field options
 * Reorders custom field options.
 */
export async function reorderFieldOptions(
	this: EndpointFunctionThis,
	payload: {
		input: ReorderFieldOptionsInput;
		connectionId: number;
	},
): Promise<ReorderFieldOptionsOutput> {
	const response = await this.endpointCaller<ReorderFieldOptionsOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'reorderFieldOptions',
		},
		payload,
	);
	return response.output;
}
