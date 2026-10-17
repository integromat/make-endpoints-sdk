// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetCallInput = {
	/**
	 * The call record ID, or a unique property value when ID property is provided.
	 */
	id: string;
	/**
	 * Set to true to retrieve the call from archived records.
	 */
	archived?: boolean;
	/**
	 * CRM object types whose associated record IDs should be returned.
	 *
	 * Items: An associated CRM object type, for example contacts or deals.
	 */
	associations?: string[];
	/**
	 * A unique call property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.
	 */
	idProperty?: string;
	/**
	 * Call property internal names to return.
	 *
	 * Items: The internal name of a call property to return.
	 */
	properties?: string[];
	/**
	 * Call property internal names to return with historical values.
	 *
	 * Items: The internal name of a call property whose value history should be returned.
	 */
	propertiesWithHistory?: string[];
};

export type GetCallOutput = {
	/**
	 * The call record ID.
	 */
	id?: string;
	/**
	 * The call's requested property values.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * When the call record was created.
	 */
	createdAt?: string;
	/**
	 * When the call record was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the call record is archived.
	 */
	archived?: boolean;
	/**
	 * When the call record was archived, if applicable.
	 */
	archivedAt?: string;
	/**
	 * Associated record IDs grouped by requested CRM object type.
	 */
	associations?: Record<string, JSONValue>;
	/**
	 * HubSpot's write trace identifier for the record, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Requested call properties with their historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * A HubSpot URL associated with the record, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while reading the call.
	 *
	 * Items: A warning returned by HubSpot.
	 */
	warnings?: {
		/**
		 * The warning category.
		 */
		category?: string;
		/**
		 * Additional structured context for the warning.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * The warning message.
		 */
		message?: string;
	}[];
};

/**
 * Get a call
 * Returns information about a specific call engagement.
 */
export async function getCall(
	this: EndpointFunctionThis,
	payload: {
		input: GetCallInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetCallOutput> {
	const response = await this.endpointCaller<GetCallOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getCall',
		},
		payload,
	);
	return response.output;
}
