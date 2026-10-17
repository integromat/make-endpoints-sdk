// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateLineItemInput = {
	/**
	 * JSON object of line-item property internal names and API-formatted string values. HubSpot recommends `name`, `quantity`, and a non-negative `price` for standard line items.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * A single parent CRM record to associate with the new line item in the same request.
	 */
	associations?: {
		/**
		 * The existing parent record to associate with the line item.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the line item and its parent record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the line-item-to-parent direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateLineItemOutput = {
	/**
	 * The unique ID of the created line item.
	 */
	id?: string;
	/**
	 * Property values returned for the created line item.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the line item was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the line item was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the line item is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the line item was archived, when applicable.
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
	 * URL associated with the created line item, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the line item.
	 *
	 * Items: A warning returned while creating the line item.
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
 * Create a line item
 * Creates a line item with the given properties and returns the created object.
 */
export async function createLineItem(
	this: EndpointFunctionThis,
	payload: {
		input: CreateLineItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateLineItemOutput> {
	const response = await this.endpointCaller<CreateLineItemOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createLineItem',
		},
		payload,
	);
	return response.output;
}
