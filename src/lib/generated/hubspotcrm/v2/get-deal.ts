// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetDealInput = {
	/**
	 * The deal record ID, or a unique property value when ID property is provided.
	 */
	id: string;
	/**
	 * Set to true to retrieve the deal from archived records.
	 */
	archived?: boolean;
	/**
	 * CRM object types whose associated record IDs should be returned.
	 *
	 * Items: An associated CRM object type, for example contacts or companies.
	 */
	associations?: string[];
	/**
	 * A unique deal property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.
	 */
	idProperty?: string;
	/**
	 * Deal property internal names to return.
	 *
	 * Items: The internal name of a deal property to return.
	 */
	properties?: string[];
	/**
	 * Deal property internal names to return with historical values.
	 *
	 * Items: The internal name of a deal property whose value history should be returned.
	 */
	propertiesWithHistory?: string[];
};

export type GetDealOutput = {
	/**
	 * The deal record ID.
	 */
	id?: string;
	/**
	 * The deal's requested property values.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * When the deal record was created.
	 */
	createdAt?: string;
	/**
	 * When the deal record was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the deal record is archived.
	 */
	archived?: boolean;
	/**
	 * When the deal record was archived, if applicable.
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
	 * Requested deal properties with their historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * A HubSpot URL associated with the record, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while reading the deal.
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
 * Get a deal
 * Returns information about a specific deal.
 */
export async function getDeal(
	this: EndpointFunctionThis,
	payload: {
		input: GetDealInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetDealOutput> {
	const response = await this.endpointCaller<GetDealOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getDeal',
		},
		payload,
	);
	return response.output;
}
