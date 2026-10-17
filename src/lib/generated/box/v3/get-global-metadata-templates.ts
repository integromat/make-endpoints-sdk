// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetGlobalMetadataTemplatesInput = {
	/**
	 * The position marker at which to begin returning results, as returned in `next_marker` of the previous page. Leave empty for the first page.
	 */
	marker?: string;
	/**
	 * The maximum number of items to return per page.
	 */
	limit?: number;
};

export type GetGlobalMetadataTemplatesOutput = {
	/**
	 * The limit that was used for these entries. This will be the same as the `limit` query parameter unless that value exceeded the maximum value allowed. The maximum value varies by API.
	 */
	limit?: number;
	/**
	 * The marker for the start of the next page of results.
	 */
	next_marker?: string;
	/**
	 * The marker for the start of the previous page of results.
	 */
	prev_marker?: string;
	/**
	 * A list of metadata templates.
	 */
	entries?: {
		/**
		 * The ID of the metadata template.
		 */
		id?: string;
		/**
		 * The value will always be `metadata_template`. One of `metadata_template`.
		 */
		type?: string;
		/**
		 * The scope of the metadata template can either be `global` or `enterprise_*`. The `global` scope is used for templates that are available to any Box enterprise. The `enterprise_*` scope represents templates that have been created within a specific enterprise, where `*` will be the ID of that enterprise.
		 */
		scope?: string;
		/**
		 * A unique identifier for the template. This identifier is unique across the `scope` of the enterprise to which the metadata template is being applied, yet is not necessarily unique across different enterprises.
		 */
		templateKey?: string;
		/**
		 * The display name of the template. This can be seen in the Box web app and mobile apps.
		 */
		displayName?: string;
		/**
		 * Defines if this template is visible in the Box web app UI, or if it is purely intended for usage through the API.
		 */
		hidden?: boolean;
		/**
		 * An ordered list of template fields which are part of the template. Each field can be a regular text field, date field, number field, as well as a single or multi-select list.
		 */
		fields?: {
			/**
			 * The type of field. The basic fields are a `string` field for text, a `float` field for numbers, and a `date` fields to present the user with a date-time picker. Additionally, metadata templates support an `enum` field for a basic list of items, and `multiSelect` field for a similar list of items where the user can select more than one value. Metadata taxonomies are also supported as a `taxonomy` field type with a specific set of additional properties, which describe its structure. **Note**: The `integer` value is deprecated. It is still present in the response, but cannot be used in the POST request. One of `string`, `float`, `date`, `enum`, `multiSelect`, `taxonomy`, `integer`.
			 */
			type?: string;
			/**
			 * A unique identifier for the field. The identifier must be unique within the template to which it belongs.
			 */
			key?: string;
			/**
			 * The display name of the field as it is shown to the user in the web and mobile apps.
			 */
			displayName?: string;
			/**
			 * A description of the field. This is not shown to the user.
			 */
			description?: string;
			/**
			 * Whether this field is hidden in the UI for the user and can only be set through the API instead.
			 */
			hidden?: boolean;
			/**
			 * A list of options for this field. This is used in combination with the `enum` and `multiSelect` field types.
			 */
			options?: {
				/**
				 * The text value of the option. This represents both the display name of the option and the internal key used when updating templates.
				 */
				key?: string;
			}[];
			/**
			 * The unique key of the metadata taxonomy to use for this taxonomy field. This property is required when the field `type` is set to `taxonomy`.
			 */
			taxonomyKey?: string;
			/**
			 * The unique ID of the metadata taxonomy to use for this taxonomy field. This property is required when the field `type` is set to `taxonomy`.
			 */
			taxonomyId?: string;
			/**
			 * The namespace of the metadata taxonomy to use for this taxonomy field. This property is required when the field `type` is set to `taxonomy`.
			 */
			namespace?: string;
			/**
			 * An object defining additional rules for the options of the taxonomy field. This property is required when the field `type` is set to `taxonomy`.
			 */
			optionsRules?: {
				/**
				 * Whether to allow users to select multiple values.
				 */
				multiSelect?: boolean;
				/**
				 * An array of integers defining which levels of the taxonomy are selectable by users.
				 *
				 * Items: The selectable level.
				 */
				selectableLevels?: number[];
			};
			/**
			 * The unique ID of the metadata template field.
			 */
			id?: string;
		}[];
		/**
		 * Whether or not to include the metadata when a file or folder is copied.
		 */
		copyInstanceOnItemCopy?: boolean;
	}[];
};

/**
 * List global metadata templates
 * Retrieves a page of the generic metadata templates Box provides to all enterprises.
 */
export async function getGlobalMetadataTemplates(
	this: EndpointFunctionThis,
	payload: {
		input: GetGlobalMetadataTemplatesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetGlobalMetadataTemplatesOutput> {
	const response = await this.endpointCaller<GetGlobalMetadataTemplatesOutput>(
		{
			appName: 'box',
			appVersion: 3,
			endpointName: 'getGlobalMetadataTemplates',
		},
		payload,
	);
	return response.output;
}
