// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateCallInput = {
	/**
	 * The call's internal record ID, or the value of the unique property selected in ID property.
	 */
	id: string;
	/**
	 * The internal name of a unique call property used to identify the record. Leave empty when ID is the internal record ID.
	 */
	idProperty?: string;
	/**
	 * A JSON object whose keys are call property internal names and whose values are strings. Only included properties are updated; use an empty string to clear a value. Omitted properties remain unchanged. Read-only or nonexistent properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateCallOutput = {
	/**
	 * The unique call record ID.
	 */
	id?: string;
	/**
	 * The call's current property values returned by HubSpot.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * The date and time when the call was created.
	 */
	createdAt?: string;
	/**
	 * The date and time when the call was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the call is archived.
	 */
	archived?: boolean;
	/**
	 * The date and time when the call was archived.
	 */
	archivedAt?: string;
	/**
	 * The trace identifier associated with the object write.
	 */
	objectWriteTraceId?: string;
	/**
	 * Historical values for returned call properties.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * The URL associated with the call record.
	 */
	url?: string;
	/**
	 * Warnings generated while updating the call.
	 *
	 * Items: A warning returned for the call update.
	 */
	warnings?: {
		/**
		 * The warning category.
		 */
		category?: string;
		/**
		 * Additional warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * The warning message.
		 */
		message?: string;
	}[];
};

/**
 * Update a call
 * Updates a HubSpot call's properties.
 */
export async function updateCall(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateCallInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateCallOutput> {
	const response = await this.endpointCaller<UpdateCallOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateCall',
		},
		payload,
	);
	return response.output;
}
