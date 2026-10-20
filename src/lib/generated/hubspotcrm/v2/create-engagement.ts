// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateEngagementInput = {
	/**
	 * The engagement object type to create. Required properties vary by type.
	 */
	objectType: 'calls' | 'emails' | 'meetings' | 'notes' | 'tasks';
	/**
	 * JSON object of engagement property internal names and API-formatted string values. Include `hs_timestamp` for every type and `hs_email_direction` for emails.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new engagement in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the engagement.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the engagement and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the engagement-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateEngagementOutput = {
	/**
	 * The unique ID of the created engagement.
	 */
	id?: string;
	/**
	 * Property values returned for the created engagement.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the engagement was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the engagement was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the engagement is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the engagement was archived, when applicable.
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
	 * URL associated with the created engagement, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the engagement.
	 *
	 * Items: A warning returned while creating the engagement.
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
 * Create an engagement
 * Creates an engagement (a call, email, meeting, note, or task) on an object in HubSpot.
 */
export async function createEngagement(
	this: EndpointFunctionThis,
	payload: {
		input: CreateEngagementInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateEngagementOutput> {
	const response = await this.endpointCaller<CreateEngagementOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createEngagement',
		},
		payload,
	);
	return response.output;
}
