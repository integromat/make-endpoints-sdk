// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateProductInput = {
	/**
	 * JSON object of product property internal names and API-formatted string values, such as `name`, `price`, and `hs_sku`.
	 */
	properties: Record<string, JSONValue>;
};

export type CreateProductOutput = {
	/**
	 * The unique ID of the created product.
	 */
	id?: string;
	/**
	 * Property values returned for the created product.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the product was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the product was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the product is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the product was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Identifier used to trace the object write request.
	 */
	objectWriteTraceId?: string;
	/**
	 * Property values together with their history, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * URL associated with the created product, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the product.
	 *
	 * Items: A warning returned while creating the product.
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
 * Create a product
 * Creates a product with the given properties and returns the created object.
 */
export async function createProduct(
	this: EndpointFunctionThis,
	payload: {
		input: CreateProductInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateProductOutput> {
	const response = await this.endpointCaller<CreateProductOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createProduct',
		},
		payload,
	);
	return response.output;
}
