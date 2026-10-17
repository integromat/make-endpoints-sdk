// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetOrderInput = {
	/**
	 * Order ID or unique property value when ID property is set.
	 */
	id: string;
	/**
	 * True retrieves an archived order.
	 */
	archived?: boolean;
	/**
	 * Associated object types to return.
	 *
	 * Items: CRM object type such as contacts.
	 */
	associations?: string[];
	/**
	 * Unique property whose value is supplied as the path ID.
	 */
	idProperty?: string;
	/**
	 * Order properties to return.
	 *
	 * Items: Order property internal name.
	 */
	properties?: string[];
	/**
	 * Order properties to return with history.
	 *
	 * Items: Order property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetOrderOutput = {
	/**
	 * Order record ID.
	 */
	id?: string;
	/**
	 * Requested order properties.
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
 * Get an order
 * Returns information about a specific order.
 */
export async function getOrder(
	this: EndpointFunctionThis,
	payload: {
		input: GetOrderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetOrderOutput> {
	const response = await this.endpointCaller<GetOrderOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getOrder',
		},
		payload,
	);
	return response.output;
}
