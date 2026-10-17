// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateTicketInput = {
	/**
	 * JSON object of ticket property internal names and API-formatted values. Include `subject`, `hs_pipeline_stage`, and `hs_pipeline` when the account has multiple ticket pipelines.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records or activities to associate with the new ticket in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record or activity to associate with the ticket.
		 */
		to: {
			/**
			 * The ID of the target CRM record or activity.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the ticket and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the ticket-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateTicketOutput = {
	/**
	 * The unique ID of the created ticket.
	 */
	id?: string;
	/**
	 * Property values returned for the created ticket.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the ticket was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the ticket was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the ticket is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the ticket was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Identifier used to trace the object write request.
	 */
	objectWriteTraceId?: string;
	/**
	 * Property values together with their history, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * URL associated with the created ticket, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the ticket.
	 *
	 * Items: A warning returned while creating the ticket.
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
 * Create a ticket
 * Creates a support ticket with the given properties and returns the created object.
 */
export async function createTicket(
	this: EndpointFunctionThis,
	payload: {
		input: CreateTicketInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateTicketOutput> {
	const response = await this.endpointCaller<CreateTicketOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createTicket',
		},
		payload,
	);
	return response.output;
}
