// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateCustomObjectInput = {
	/**
	 * Custom object type ID or fully qualified name. Standard CRM objects such as contacts, companies, deals, and tickets are not supported.
	 */
	objectType: string;
	/**
	 * The record's internal ID, or a unique property value when ID property is provided.
	 */
	id: string;
	/**
	 * Internal name of the unique property used to identify the record. Omit it when Record ID or unique value contains the internal record ID.
	 */
	idProperty?: string;
	/**
	 * JSON object whose keys are property internal names. Send values as strings; an empty string clears a property, and omitted properties remain unchanged. Invalid or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateCustomObjectOutput = {
	/**
	 * Unique ID of the updated record.
	 */
	id: string;
	/**
	 * Current property values returned for the updated record.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Date and time when the record was created.
	 */
	createdAt: string;
	/**
	 * Date and time when the record was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the record is archived.
	 */
	archived: boolean;
	/**
	 * Date and time when the record was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Trace identifier associated with the object write, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Property values and their historical versions, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * HubSpot URL for the updated record, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the record.
	 *
	 * Items: A warning returned while updating the record.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Additional structured context for the warning.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Human-readable warning message.
		 */
		message?: string;
	}[];
};

/**
 * Update a custom object record
 * Updates the properties of an existing custom object record and returns the updated object.
 */
export async function updateCustomObject(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateCustomObjectInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateCustomObjectOutput> {
	const response = await this.endpointCaller<UpdateCustomObjectOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateCustomObject',
		},
		payload,
	);
	return response.output;
}
