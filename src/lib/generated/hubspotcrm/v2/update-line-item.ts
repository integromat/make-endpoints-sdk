// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateLineItemInput = {
	/**
	 * The line item record ID, or the value of the unique property specified in ID property.
	 */
	id: string;
	/**
	 * The internal name of a custom property that requires unique values. Leave empty when ID is the line item record ID.
	 */
	idProperty?: string;
	/**
	 * A JSON object of property internal names and string values. Omitted properties remain unchanged, an empty string clears a property, and invalid or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateLineItemOutput = {
	/**
	 * The line item record ID.
	 */
	id: string;
	/**
	 * The line item's current property values.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * The date and time when the line item was created.
	 */
	createdAt: string;
	/**
	 * The date and time when the line item was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the line item is archived.
	 */
	archived: boolean;
	/**
	 * The date and time when the line item was archived.
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
	 * The URL of the line item in HubSpot.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the line item.
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
 * Update a line item
 * Updates the properties of an existing line item and returns the updated object.
 */
export async function updateLineItem(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateLineItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateLineItemOutput> {
	const response = await this.endpointCaller<UpdateLineItemOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateLineItem',
		},
		payload,
	);
	return response.output;
}
