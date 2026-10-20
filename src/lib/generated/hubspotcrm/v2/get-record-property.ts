// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetRecordPropertyInput = {
	/**
	 * Supported object family: `contacts`, `companies`, `deals`, `tickets`, or a custom object type ID such as `2-3465404`.
	 */
	objectType: string;
	/**
	 * The property's internal API name.
	 */
	propertyName: string;
	/**
	 * Set true to retrieve an archived property definition.
	 */
	archived?: boolean;
	/**
	 * The sensitivity class of the property definition to retrieve.
	 */
	dataSensitivity?: '' | 'non_sensitive' | 'sensitive' | 'highly_sensitive';
	/**
	 * Locale for localized property metadata, for example `en-US`.
	 */
	locale?: string;
};

export type GetRecordPropertyOutput = {
	/**
	 * The internal property name, used to reference the property in the API.
	 */
	name?: string;
	/**
	 * The human-readable property label shown in HubSpot.
	 */
	label?: string;
	/**
	 * The property data type, such as `string`, `number`, `enumeration`, `date`, or `datetime`.
	 */
	type?: string;
	/**
	 * Controls how the property appears in HubSpot, such as `text`, `select`, or `checkbox`.
	 */
	fieldType?: string;
	/**
	 * The property description shown as help text in HubSpot.
	 */
	description?: string;
	/**
	 * The name of the property group the property belongs to.
	 */
	groupName?: string;
	/**
	 * The valid options of an enumerated property. Empty for other property types.
	 *
	 * Items: A valid option of the property.
	 */
	options?: {
		/**
		 * The human-readable option label shown in HubSpot.
		 */
		label?: string;
		/**
		 * The internal option value to use when setting the property value through the API.
		 */
		value?: string;
		/**
		 * The description of the option.
		 */
		description?: string;
		/**
		 * The order in which the option is displayed, starting with the lowest positive value. A value of -1 displays the option after all positive values.
		 */
		displayOrder?: number;
		/**
		 * Whether the option is hidden in HubSpot.
		 */
		hidden?: boolean;
	}[];
	/**
	 * The order in which the property is displayed, starting with the lowest positive value.
	 */
	displayOrder?: number;
	/**
	 * Whether the property is hidden in the HubSpot UI.
	 */
	hidden?: boolean;
	/**
	 * Whether the property is a default property built into HubSpot.
	 */
	hubspotDefined?: boolean;
	/**
	 * Whether the property value must be unique. Once set, this cannot be changed.
	 */
	hasUniqueValue?: boolean;
	/**
	 * Whether the property can be used in a HubSpot form.
	 */
	formField?: boolean;
	/**
	 * Whether a HubSpot process calculates the value of this default property.
	 */
	calculated?: boolean;
	/**
	 * The formula used to compute a calculated property.
	 */
	calculationFormula?: string;
	/**
	 * Whether the options of this default property are stored outside the property settings.
	 */
	externalOptions?: boolean;
	/**
	 * The object type this property relates to, if any.
	 */
	referencedObjectType?: string;
	/**
	 * The name of the currency property associated with this property, if applicable.
	 */
	currencyPropertyName?: string;
	/**
	 * Whether the property displays the currency symbol set in the account settings.
	 */
	showCurrencySymbol?: boolean;
	/**
	 * How a number property is displayed: `currency`, `duration`, `formatted`, `percentage`, `probability`, or `unformatted`.
	 */
	numberDisplayHint?: string;
	/**
	 * How a text property is displayed, such as `multi_line`, `email`, `phone_number`, or `unformatted_single_line`.
	 */
	textDisplayHint?: string;
	/**
	 * How a date property is displayed: `absolute`, `absolute_with_relative`, `time_since`, or `time_until`.
	 */
	dateDisplayHint?: string;
	/**
	 * The data sensitivity level: `non_sensitive`, `sensitive`, or `highly_sensitive`.
	 */
	dataSensitivity?: string;
	/**
	 * The categories describing the sensitivity of the data in the property.
	 *
	 * Items: A sensitive data category.
	 */
	sensitiveDataCategories?: string[];
	/**
	 * Information about which parts of the property can be modified.
	 */
	modificationMetadata?: {
		/**
		 * Whether the property can be archived.
		 */
		archivable?: boolean;
		/**
		 * Whether the property definition is read-only and cannot be modified.
		 */
		readOnlyDefinition?: boolean;
		/**
		 * Whether the property options are read-only and cannot be modified.
		 */
		readOnlyOptions?: boolean;
		/**
		 * Whether the property value is read-only and cannot be modified.
		 */
		readOnlyValue?: boolean;
	};
	/**
	 * Whether the property is archived.
	 */
	archived?: boolean;
	/**
	 * The date and time when the property was archived.
	 */
	archivedAt?: string;
	/**
	 * The date and time when the property was created.
	 */
	createdAt?: string;
	/**
	 * The internal ID of the user who created the property in HubSpot. Missing if the property was created outside of HubSpot.
	 */
	createdUserId?: string;
	/**
	 * The date and time when the property was last updated.
	 */
	updatedAt?: string;
	/**
	 * The internal ID of the user who last updated the property in HubSpot. Missing if the property was updated outside of HubSpot.
	 */
	updatedUserId?: string;
};

/**
 * Get a property definition
 * Returns the definition (type, options, group, etc.) of a specific CRM object property.
 */
export async function getRecordProperty(
	this: EndpointFunctionThis,
	payload: {
		input: GetRecordPropertyInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetRecordPropertyOutput> {
	const response = await this.endpointCaller<GetRecordPropertyOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getRecordProperty',
		},
		payload,
	);
	return response.output;
}
