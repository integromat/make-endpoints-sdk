// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetFieldOptionsInput = {
	/**
	 * The ID of the custom field, e.g. `customfield_10001`.
	 */
	fieldId: string;
	/**
	 * The ID of the custom field context.
	 */
	contextId: number;
	/**
	 * Filter results to only this option ID.
	 */
	optionId?: number;
	/**
	 * Whether only options (excluding cascading option details) are returned.
	 */
	onlyOptions?: boolean;
	/**
	 * The index of the first item to return (page offset).
	 */
	startAt?: number;
	/**
	 * The maximum number of options to return per page.
	 */
	maxResults?: number;
};

export type GetFieldOptionsOutput = {
	/**
	 * The URL of the page.
	 */
	self?: string;
	/**
	 * The URL of the next page, if there is one.
	 */
	nextPage?: string;
	/**
	 * The index of the first item returned.
	 */
	startAt?: number;
	/**
	 * The maximum number of items that could be returned.
	 */
	maxResults?: number;
	/**
	 * The number of items returned.
	 */
	total?: number;
	/**
	 * Whether this is the last page of results.
	 */
	isLast?: boolean;
	/**
	 * The list of custom field options.
	 *
	 * Items: A custom field option.
	 */
	values?: {
		/**
		 * The ID of the custom field option.
		 */
		id?: string;
		/**
		 * The value of the custom field option.
		 */
		value?: string;
		/**
		 * Whether the option is disabled.
		 */
		disabled?: boolean;
		/**
		 * For cascading options, the ID of the custom field option containing this cascading option.
		 */
		optionId?: string;
	}[];
};

/**
 * Get field options
 * Returns options for a custom field context.
 */
export async function getFieldOptions(
	this: EndpointFunctionThis,
	payload: {
		input: GetFieldOptionsInput;
		connectionId: number;
	},
): Promise<GetFieldOptionsOutput> {
	const response = await this.endpointCaller<GetFieldOptionsOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'getFieldOptions',
		},
		payload,
	);
	return response.output;
}
