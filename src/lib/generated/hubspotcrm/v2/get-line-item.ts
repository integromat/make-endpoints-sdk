// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetLineItemInput = {
	/**
	 * Line item record ID, or a unique property value when ID property is set.
	 */
	id: string;
	/**
	 * Set true to retrieve the line item from archived records.
	 */
	archived?: boolean;
	/**
	 * Associated CRM object types to return.
	 *
	 * Items: CRM object type, such as deals or quotes.
	 */
	associations?: string[];
	/**
	 * Unique line item property name that makes the path ID its value.
	 */
	idProperty?: string;
	/**
	 * Line item property names to return.
	 *
	 * Items: Line item property internal name.
	 */
	properties?: string[];
	/**
	 * Line item properties to return with history.
	 *
	 * Items: Line item property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetLineItemOutput = {
	/**
	 * Line item record ID.
	 */
	id?: string;
	/**
	 * Requested line item properties.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Record creation time.
	 */
	createdAt?: string;
	/**
	 * Last update time.
	 */
	updatedAt?: string;
	/**
	 * Whether the record is archived.
	 */
	archived?: boolean;
	/**
	 * Archive time, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Requested associated record IDs.
	 */
	associations?: Record<string, JSONValue>;
	/**
	 * HubSpot write trace ID, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Requested properties and historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * HubSpot record URL, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned by HubSpot.
	 *
	 * Items: One HubSpot warning.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Structured warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Warning message.
		 */
		message?: string;
	}[];
};

/**
 * Get a line item
 * Returns information about a specific line item.
 */
export async function getLineItem(
	this: EndpointFunctionThis,
	payload: {
		input: GetLineItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetLineItemOutput> {
	const response = await this.endpointCaller<GetLineItemOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getLineItem',
		},
		payload,
	);
	return response.output;
}
