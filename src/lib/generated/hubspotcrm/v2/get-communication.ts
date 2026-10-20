// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetCommunicationInput = {
	/**
	 * The communication record ID, or a unique property value when ID property is provided.
	 */
	id: string;
	/**
	 * Set to true to retrieve the communication from archived records.
	 */
	archived?: boolean;
	/**
	 * CRM object types whose associated record IDs should be returned.
	 *
	 * Items: An associated CRM object type, for example contacts.
	 */
	associations?: string[];
	/**
	 * A unique communication property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.
	 */
	idProperty?: string;
	/**
	 * Communication property internal names to return.
	 *
	 * Items: The internal name of a communication property to return.
	 */
	properties?: string[];
	/**
	 * Communication property internal names to return with historical values.
	 *
	 * Items: The internal name of a communication property whose value history should be returned.
	 */
	propertiesWithHistory?: string[];
};

export type GetCommunicationOutput = {
	/**
	 * The communication record ID.
	 */
	id?: string;
	/**
	 * The communication's requested property values.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * When the communication record was created.
	 */
	createdAt?: string;
	/**
	 * When the communication record was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the communication record is archived.
	 */
	archived?: boolean;
	/**
	 * When the communication record was archived, if applicable.
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
	 * Requested communication properties with their historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * A HubSpot URL associated with the record, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while reading the communication.
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
 * Get a communication
 * Returns information about a specific communication.
 */
export async function getCommunication(
	this: EndpointFunctionThis,
	payload: {
		input: GetCommunicationInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetCommunicationOutput> {
	const response = await this.endpointCaller<GetCommunicationOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getCommunication',
		},
		payload,
	);
	return response.output;
}
