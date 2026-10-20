// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateCallInput = {
	/**
	 * JSON object of call property internal names and string values. `hs_timestamp` is required. `hs_is_voice_agent_call` cannot be set by third-party integrations and is removed.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new call in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the call.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the call and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the call-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateCallOutput = {
	/**
	 * The unique ID of the created call.
	 */
	id?: string;
	/**
	 * Property values returned for the created call.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the call was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the call was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the call is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the call was archived, when applicable.
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
	 * URL associated with the created call, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the call.
	 *
	 * Items: A warning returned while creating the call.
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
 * Create a call
 * Creates a call engagement with the given properties and returns the created object.
 */
export async function createCall(
	this: EndpointFunctionThis,
	payload: {
		input: CreateCallInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateCallOutput> {
	const response = await this.endpointCaller<CreateCallOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createCall',
		},
		payload,
	);
	return response.output;
}
