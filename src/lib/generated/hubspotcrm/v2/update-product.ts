// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateProductInput = {
	/**
	 * The product record ID, or the value of the unique property selected in ID property.
	 */
	id: string;
	/**
	 * The internal name of a unique product property used to identify the product. Leave empty when ID contains the record ID.
	 */
	idProperty?: string;
	/**
	 * JSON object of product property internal names and string values. Only supplied properties are updated. Pass an empty string to clear a property. Invalid values, unknown properties, or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateProductOutput = {
	/**
	 * The unique ID of the updated product.
	 */
	id: string;
	/**
	 * Property values returned for the updated product.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Date and time when the product was created.
	 */
	createdAt: string;
	/**
	 * Date and time when the product was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the product is archived.
	 */
	archived: boolean;
	/**
	 * Date and time when the product was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Identifier used to trace the product update request, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Product property values together with their history, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * URL associated with the updated product, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the product.
	 *
	 * Items: A warning returned by HubSpot.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Additional warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Warning message.
		 */
		message?: string;
	}[];
};

/**
 * Update a product
 * Updates the properties of an existing product and returns the updated object.
 */
export async function updateProduct(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateProductInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateProductOutput> {
	const response = await this.endpointCaller<UpdateProductOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateProduct',
		},
		payload,
	);
	return response.output;
}
