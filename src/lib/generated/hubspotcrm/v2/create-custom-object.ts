// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateCustomObjectInput = {
	/**
	 * The custom object type ID (for example, `2-3465404`) or fully qualified name in the form `p{HubID}_{object_name}` or `p_{object_name}`.
	 */
	objectType: string;
	/**
	 * JSON object of custom property internal names and API-formatted string values. Include every property required by the custom object schema.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new custom object record in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the custom object record.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the custom object record and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the custom-object-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateCustomObjectOutput = {
	/**
	 * The unique ID of the created custom object record.
	 */
	id?: string;
	/**
	 * Property values returned for the created custom object record.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the custom object record was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the custom object record was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the custom object record is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the custom object record was archived, when applicable.
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
	 * URL associated with the created custom object record, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the custom object record.
	 *
	 * Items: A warning returned while creating the custom object record.
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
 * Create a custom object record
 * Creates a custom object record with the given properties and returns the created object.
 */
export async function createCustomObject(
	this: EndpointFunctionThis,
	payload: {
		input: CreateCustomObjectInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateCustomObjectOutput> {
	const response = await this.endpointCaller<CreateCustomObjectOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createCustomObject',
		},
		payload,
	);
	return response.output;
}
