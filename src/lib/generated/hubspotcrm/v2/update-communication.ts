// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateCommunicationInput = {
	/**
	 * The communication's internal record ID, or the value of the unique property selected in ID property.
	 */
	id: string;
	/**
	 * The internal name of a unique communication property used to identify the record. Leave empty when ID is the internal record ID.
	 */
	idProperty?: string;
	/**
	 * A JSON object whose keys are communication property internal names and whose values are strings. Only included properties are updated; use an empty string to clear a value. Omitted properties remain unchanged. Read-only or nonexistent properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateCommunicationOutput = {
	/**
	 * The unique communication record ID.
	 */
	id?: string;
	/**
	 * The communication's current property values returned by HubSpot.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * The date and time when the communication was created.
	 */
	createdAt?: string;
	/**
	 * The date and time when the communication was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the communication is archived.
	 */
	archived?: boolean;
	/**
	 * The date and time when the communication was archived.
	 */
	archivedAt?: string;
	/**
	 * The trace identifier associated with the object write.
	 */
	objectWriteTraceId?: string;
	/**
	 * Historical values for returned communication properties.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * The URL associated with the communication record.
	 */
	url?: string;
	/**
	 * Warnings generated while updating the communication.
	 *
	 * Items: A warning returned for the communication update.
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
 * Update a communication
 * Updates a HubSpot communication's properties.
 */
export async function updateCommunication(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateCommunicationInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateCommunicationOutput> {
	const response = await this.endpointCaller<UpdateCommunicationOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateCommunication',
		},
		payload,
	);
	return response.output;
}
