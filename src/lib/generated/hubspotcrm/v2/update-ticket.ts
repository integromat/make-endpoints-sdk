// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateTicketInput = {
	/**
	 * The ticket record ID, or the value of the unique property selected in ID property.
	 */
	id: string;
	/**
	 * The internal name of a unique ticket property used to identify the ticket. Leave empty when ID contains the record ID.
	 */
	idProperty?: string;
	/**
	 * JSON object of ticket property internal names and string values. Only supplied properties are updated. Pass an empty string to clear a property. Invalid values, unknown properties, or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateTicketOutput = {
	/**
	 * The unique ID of the updated ticket.
	 */
	id: string;
	/**
	 * Property values returned for the updated ticket.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Date and time when the ticket was created.
	 */
	createdAt: string;
	/**
	 * Date and time when the ticket was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the ticket is archived.
	 */
	archived: boolean;
	/**
	 * Date and time when the ticket was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Identifier used to trace the ticket update request, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Ticket property values together with their history, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * URL associated with the updated ticket, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the ticket.
	 *
	 * Items: A warning returned by HubSpot.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Additional warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Warning message.
		 */
		message?: string;
	}[];
};

/**
 * Update a ticket
 * Updates the properties of an existing support ticket and returns the updated object.
 */
export async function updateTicket(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateTicketInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateTicketOutput> {
	const response = await this.endpointCaller<UpdateTicketOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateTicket',
		},
		payload,
	);
	return response.output;
}
