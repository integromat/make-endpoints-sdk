// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetProductInput = {
	/**
	 * Product ID or unique property value when ID property is set.
	 */
	id: string;
	/**
	 * True retrieves an archived product.
	 */
	archived?: boolean;
	/**
	 * Associated object types to request. Products cannot be directly associated with CRM records, so this normally returns no useful direct associations.
	 *
	 * Items: CRM object type to request; direct product associations are generally unavailable.
	 */
	associations?: string[];
	/**
	 * Unique property whose value is supplied as the path ID.
	 */
	idProperty?: string;
	/**
	 * Product properties to return.
	 *
	 * Items: Product property internal name.
	 */
	properties?: string[];
	/**
	 * Product properties to return with history.
	 *
	 * Items: Product property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetProductOutput = {
	/**
	 * Product record ID.
	 */
	id?: string;
	/**
	 * Requested product properties.
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
	 * Requested associations, normally empty or not useful for products.
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
 * Get a product
 * Returns information about a specific product.
 */
export async function getProduct(
	this: EndpointFunctionThis,
	payload: {
		input: GetProductInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetProductOutput> {
	const response = await this.endpointCaller<GetProductOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getProduct',
		},
		payload,
	);
	return response.output;
}
