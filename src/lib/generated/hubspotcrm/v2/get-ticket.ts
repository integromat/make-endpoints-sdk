// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetTicketInput = {
	/**
	 * Ticket ID or unique property value when ID property is set.
	 */
	id: string;
	/**
	 * True retrieves an archived ticket.
	 */
	archived?: boolean;
	/**
	 * Associated object types to return.
	 *
	 * Items: CRM object type such as contacts.
	 */
	associations?: string[];
	/**
	 * Unique property whose value is supplied as the path ID.
	 */
	idProperty?: string;
	/**
	 * Ticket properties to return.
	 *
	 * Items: Ticket property internal name.
	 */
	properties?: string[];
	/**
	 * Ticket properties to return with history.
	 *
	 * Items: Ticket property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetTicketOutput = {
	/**
	 * Ticket record ID.
	 */
	id?: string;
	/**
	 * Requested ticket properties.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Creation time.
	 */
	createdAt?: string;
	/**
	 * Last update time.
	 */
	updatedAt?: string;
	/**
	 * Whether archived.
	 */
	archived?: boolean;
	/**
	 * Archive time.
	 */
	archivedAt?: string;
	/**
	 * Requested associated IDs.
	 */
	associations?: Record<string, JSONValue>;
	/**
	 * HubSpot write trace ID.
	 */
	objectWriteTraceId?: string;
	/**
	 * Properties with historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * HubSpot record URL.
	 */
	url?: string;
	/**
	 * HubSpot warnings.
	 *
	 * Items: One warning.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Warning message.
		 */
		message?: string;
	}[];
};

/**
 * Get a ticket
 * Returns information about a specific support ticket.
 */
export async function getTicket(
	this: EndpointFunctionThis,
	payload: {
		input: GetTicketInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetTicketOutput> {
	const response = await this.endpointCaller<GetTicketOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getTicket',
		},
		payload,
	);
	return response.output;
}
