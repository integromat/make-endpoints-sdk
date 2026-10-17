// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateOrderInput = {
	/**
	 * The order record ID, or the value of the unique property specified in ID property.
	 */
	id: string;
	/**
	 * The internal name of a custom property that requires unique values. Leave empty when ID is the order record ID.
	 */
	idProperty?: string;
	/**
	 * A JSON object of property internal names and string values. Omitted properties remain unchanged, an empty string clears a property, and invalid or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateOrderOutput = {
	/**
	 * The order record ID.
	 */
	id: string;
	/**
	 * The order's current property values.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * The date and time when the order was created.
	 */
	createdAt: string;
	/**
	 * The date and time when the order was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the order is archived.
	 */
	archived: boolean;
	/**
	 * The date and time when the order was archived.
	 */
	archivedAt?: string;
	/**
	 * The trace identifier for the write operation.
	 */
	objectWriteTraceId?: string;
	/**
	 * Property values together with their historical versions.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * The URL of the order in HubSpot.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the order.
	 *
	 * Items: A warning returned by HubSpot.
	 */
	warnings?: {
		/**
		 * The warning category.
		 */
		category?: string;
		/**
		 * Additional context for the warning.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * The warning message.
		 */
		message?: string;
	}[];
};

/**
 * Update an order
 * Updates the properties of an existing order and returns the updated object.
 */
export async function updateOrder(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateOrderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateOrderOutput> {
	const response = await this.endpointCaller<UpdateOrderOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateOrder',
		},
		payload,
	);
	return response.output;
}
