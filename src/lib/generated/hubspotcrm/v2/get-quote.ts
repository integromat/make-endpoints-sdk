// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetQuoteInput = {
	/**
	 * Quote ID or unique property value when ID property is set.
	 */
	id: string;
	/**
	 * True retrieves an archived quote.
	 */
	archived?: boolean;
	/**
	 * Associated object types to return.
	 *
	 * Items: CRM object type such as deals.
	 */
	associations?: string[];
	/**
	 * Unique property whose value is supplied as the path ID.
	 */
	idProperty?: string;
	/**
	 * Quote properties to return.
	 *
	 * Items: Quote property internal name.
	 */
	properties?: string[];
	/**
	 * Quote properties to return with history.
	 *
	 * Items: Quote property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetQuoteOutput = {
	/**
	 * Quote record ID.
	 */
	id?: string;
	/**
	 * Requested quote properties.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Creation time.
	 */
	createdAt?: string;
	/**
	 * Last update time.
	 */
	updatedAt?: string;
	/**
	 * Whether archived.
	 */
	archived?: boolean;
	/**
	 * Archive time.
	 */
	archivedAt?: string;
	/**
	 * Requested associated IDs.
	 */
	associations?: Record<string, JSONValue>;
	/**
	 * HubSpot write trace ID.
	 */
	objectWriteTraceId?: string;
	/**
	 * Properties with historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * HubSpot record URL.
	 */
	url?: string;
	/**
	 * HubSpot warnings.
	 *
	 * Items: One warning.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Warning message.
		 */
		message?: string;
	}[];
};

/**
 * Get a quote
 * Returns information about a specific quote.
 */
export async function getQuote(
	this: EndpointFunctionThis,
	payload: {
		input: GetQuoteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetQuoteOutput> {
	const response = await this.endpointCaller<GetQuoteOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getQuote',
		},
		payload,
	);
	return response.output;
}
