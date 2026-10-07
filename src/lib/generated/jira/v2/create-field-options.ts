// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateFieldOptionsInput = {
	/**
	 * The ID of the custom field, e.g. `customfield_10001`.
	 */
	fieldId: string;
	/**
	 * The ID of the custom field context.
	 */
	contextId: number;
	/**
	 * The options to create.
	 *
	 * Items: A custom field option to create.
	 */
	options: {
		/**
		 * The value of the custom field option.
		 */
		value: string;
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

export type CreateFieldOptionsOutput = {
	/**
	 * The created custom field options.
	 *
	 * Items: A created custom field option.
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
 * Create field options
 * Creates options for a custom field context.
 */
export async function createFieldOptions(
	this: EndpointFunctionThis,
	payload: {
		input: CreateFieldOptionsInput;
		connectionId: number;
	},
): Promise<CreateFieldOptionsOutput> {
	const response = await this.endpointCaller<CreateFieldOptionsOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'createFieldOptions',
		},
		payload,
	);
	return response.output;
}
