// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetContactInput = {
	/**
	 * The contact record ID, or a unique property value such as an email address when ID property is provided.
	 */
	id: string;
	/**
	 * Set to true to retrieve the contact from archived records.
	 */
	archived?: boolean;
	/**
	 * CRM object types whose associated record IDs should be returned.
	 *
	 * Items: An associated CRM object type, for example companies or deals.
	 */
	associations?: string[];
	/**
	 * A unique contact property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID; use `email` to retrieve by email address.
	 */
	idProperty?: string;
	/**
	 * Contact property internal names to return.
	 *
	 * Items: The internal name of a contact property to return.
	 */
	properties?: string[];
	/**
	 * Contact property internal names to return with historical values.
	 *
	 * Items: The internal name of a contact property whose value history should be returned.
	 */
	propertiesWithHistory?: string[];
};

export type GetContactOutput = {
	/**
	 * The contact record ID.
	 */
	id?: string;
	/**
	 * The contact's requested property values.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * When the contact record was created.
	 */
	createdAt?: string;
	/**
	 * When the contact record was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the contact record is archived.
	 */
	archived?: boolean;
	/**
	 * When the contact record was archived, if applicable.
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
	 * Requested contact properties with their historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * A HubSpot URL associated with the record, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while reading the contact.
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
 * Get a contact
 * Returns information about a specific contact.
 */
export async function getContact(
	this: EndpointFunctionThis,
	payload: {
		input: GetContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetContactOutput> {
	const response = await this.endpointCaller<GetContactOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getContact',
		},
		payload,
	);
	return response.output;
}
