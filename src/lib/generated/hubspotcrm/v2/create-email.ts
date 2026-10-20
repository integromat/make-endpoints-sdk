// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateEmailInput = {
	/**
	 * JSON object of email property internal names and API-formatted string values. Include required `hs_timestamp` and `hs_email_direction`.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new email in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the email.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the email and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the email-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateEmailOutput = {
	/**
	 * The unique ID of the created email.
	 */
	id?: string;
	/**
	 * Property values returned for the created email.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the email was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the email was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the email is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the email was archived, when applicable.
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
	 * URL associated with the created email, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the email.
	 *
	 * Items: A warning returned while creating the email.
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
 * Create an email
 * Creates an email engagement with the given properties and returns the created object.
 */
export async function createEmail(
	this: EndpointFunctionThis,
	payload: {
		input: CreateEmailInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateEmailOutput> {
	const response = await this.endpointCaller<CreateEmailOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createEmail',
		},
		payload,
	);
	return response.output;
}
