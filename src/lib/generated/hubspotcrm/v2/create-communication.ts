// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateCommunicationInput = {
	/**
	 * JSON object of communication property internal names and string values. Channel type accepts `WHATS_APP`, `LINKEDIN_MESSAGE`, or `SMS`; `hs_communication_logged_from`, when supplied, must be `CRM`.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new communication in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the communication.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the communication and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the communication-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateCommunicationOutput = {
	/**
	 * The unique ID of the created communication.
	 */
	id?: string;
	/**
	 * Property values returned for the created communication.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the communication was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the communication was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the communication is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the communication was archived, when applicable.
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
	 * URL associated with the created communication, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the communication.
	 *
	 * Items: A warning returned while creating the communication.
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
 * Create a communication
 * Creates a communication (e.g. a WhatsApp, SMS, or LinkedIn message log) with the given properties and returns the created object.
 */
export async function createCommunication(
	this: EndpointFunctionThis,
	payload: {
		input: CreateCommunicationInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateCommunicationOutput> {
	const response = await this.endpointCaller<CreateCommunicationOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createCommunication',
		},
		payload,
	);
	return response.output;
}
