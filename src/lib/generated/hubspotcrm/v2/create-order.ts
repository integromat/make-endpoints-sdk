// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateOrderInput = {
	/**
	 * JSON object of order property internal names and API-formatted string values, such as `hs_order_name` and `hs_currency_code`.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new order in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the order.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the order and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the order-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateOrderOutput = {
	/**
	 * The unique ID of the created order.
	 */
	id?: string;
	/**
	 * Property values returned for the created order.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the order was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the order was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the order is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the order was archived, when applicable.
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
	 * URL associated with the created order, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the order.
	 *
	 * Items: A warning returned while creating the order.
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
 * Create an order
 * Creates an order with the given properties and returns the created object.
 */
export async function createOrder(
	this: EndpointFunctionThis,
	payload: {
		input: CreateOrderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateOrderOutput> {
	const response = await this.endpointCaller<CreateOrderOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createOrder',
		},
		payload,
	);
	return response.output;
}
