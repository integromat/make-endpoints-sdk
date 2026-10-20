// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetCustomObjectInput = {
	/**
	 * The custom object type ID, for example `2-3465404`.
	 */
	objectType: string;
	/**
	 * The custom object record ID, or a unique property value when ID property is provided.
	 */
	id: string;
	/**
	 * Set to true to retrieve the custom object record from archived records.
	 */
	archived?: boolean;
	/**
	 * CRM object types whose associated record IDs should be returned.
	 *
	 * Items: An associated CRM object type, for example contacts or companies.
	 */
	associations?: string[];
	/**
	 * A unique custom object property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.
	 */
	idProperty?: string;
	/**
	 * Custom object property internal names to return.
	 *
	 * Items: The internal name of a custom object property to return.
	 */
	properties?: string[];
	/**
	 * Custom object property internal names to return with historical values.
	 *
	 * Items: The internal name of a custom object property whose value history should be returned.
	 */
	propertiesWithHistory?: string[];
};

export type GetCustomObjectOutput = {
	/**
	 * The custom object record ID.
	 */
	id?: string;
	/**
	 * The custom object's requested property values.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * When the custom object record was created.
	 */
	createdAt?: string;
	/**
	 * When the custom object record was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the custom object record is archived.
	 */
	archived?: boolean;
	/**
	 * When the custom object record was archived, if applicable.
	 */
	archivedAt?: string;
	/**
	 * Associated record IDs grouped by requested CRM object type.
	 */
	associations?: Record<string, JSONValue>;
	/**
	 * HubSpot's write trace identifier for the record, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Requested custom object properties with their historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * A HubSpot URL associated with the record, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while reading the custom object record.
	 *
	 * Items: A warning returned by HubSpot.
	 */
	warnings?: {
		/**
		 * The warning category.
		 */
		category?: string;
		/**
		 * Additional structured context for the warning.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * The warning message.
		 */
		message?: string;
	}[];
};

/**
 * Get a custom object record
 * Returns information about a specific custom object record.
 */
export async function getCustomObject(
	this: EndpointFunctionThis,
	payload: {
		input: GetCustomObjectInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetCustomObjectOutput> {
	const response = await this.endpointCaller<GetCustomObjectOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getCustomObject',
		},
		payload,
	);
	return response.output;
}
