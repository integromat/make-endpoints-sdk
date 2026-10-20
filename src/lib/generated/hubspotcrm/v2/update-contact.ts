// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateContactInput = {
	/**
	 * The contact's internal record ID, or the value of the unique property selected in ID property.
	 */
	id: string;
	/**
	 * The internal name of a unique contact property used to identify the record. Leave empty when ID is the internal record ID.
	 */
	idProperty?: string;
	/**
	 * A JSON object whose keys are contact property internal names and whose values are strings. Only included properties are updated; use an empty string to clear a value. Omitted properties remain unchanged. Read-only or nonexistent properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateContactOutput = {
	/**
	 * The unique contact record ID.
	 */
	id?: string;
	/**
	 * The contact's current property values returned by HubSpot.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * The date and time when the contact was created.
	 */
	createdAt?: string;
	/**
	 * The date and time when the contact was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the contact is archived.
	 */
	archived?: boolean;
	/**
	 * The date and time when the contact was archived.
	 */
	archivedAt?: string;
	/**
	 * The trace identifier associated with the object write.
	 */
	objectWriteTraceId?: string;
	/**
	 * Historical values for returned contact properties.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * The URL associated with the contact record.
	 */
	url?: string;
	/**
	 * Warnings generated while updating the contact.
	 *
	 * Items: A warning returned for the contact update.
	 */
	warnings?: {
		/**
		 * The warning category.
		 */
		category?: string;
		/**
		 * Additional warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * The warning message.
		 */
		message?: string;
	}[];
};

/**
 * Update a contact
 * Updates a HubSpot contact's properties.
 */
export async function updateContact(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateContactOutput> {
	const response = await this.endpointCaller<UpdateContactOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateContact',
		},
		payload,
	);
	return response.output;
}
