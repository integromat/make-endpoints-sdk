// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateFieldOptionsInput = {
	/**
	 * The ID of the custom field, e.g. `customfield_10001`.
	 */
	fieldId: string;
	/**
	 * The ID of the custom field context.
	 */
	contextId: number;
	/**
	 * The options to update. Perform a Get field options call first to see current values.
	 *
	 * Items: A custom field option to update.
	 */
	options: {
		/**
		 * The ID of the custom field option to update.
		 */
		id: string;
		/**
		 * The value of the custom field option.
		 */
		value?: string;
		/**
		 * Whether the option is disabled.
		 */
		disabled?: boolean;
	}[];
};

export type UpdateFieldOptionsOutput = {
	/**
	 * The updated custom field options.
	 *
	 * Items: An updated custom field option.
	 */
	options?: {
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
		 * For cascading options, the ID of the parent option.
		 */
		optionId?: string;
	}[];
};

/**
 * Update field options
 * Updates options for a custom field context.
 */
export async function updateFieldOptions(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateFieldOptionsInput;
		connectionId: number;
	},
): Promise<UpdateFieldOptionsOutput> {
	const response = await this.endpointCaller<UpdateFieldOptionsOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'updateFieldOptions',
		},
		payload,
	);
	return response.output;
}
