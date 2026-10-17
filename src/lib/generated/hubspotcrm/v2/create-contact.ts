// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateContactInput = {
	/**
	 * JSON object of standard contact property internal names and API-formatted string values. Include at least `email`, `firstname`, or `lastname`; prefer `email` when available.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new contact in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the contact.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the contact and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the contact-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateContactOutput = {
	/**
	 * The unique ID of the created contact.
	 */
	id?: string;
	/**
	 * Property values returned for the created contact.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the contact was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the contact was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the contact is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the contact was archived, when applicable.
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
	 * URL associated with the created contact, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the contact.
	 *
	 * Items: A warning returned while creating the contact.
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
 * Create a contact
 * Creates a contact with the given properties and returns the created object.
 */
export async function createContact(
	this: EndpointFunctionThis,
	payload: {
		input: CreateContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateContactOutput> {
	const response = await this.endpointCaller<CreateContactOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createContact',
		},
		payload,
	);
	return response.output;
}
