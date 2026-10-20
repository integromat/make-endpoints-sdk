// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateDealInput = {
	/**
	 * JSON object of deal property internal names and API-formatted string values. Include `dealname` and the internal `dealstage` ID; provide the internal `pipeline` ID to select a non-default pipeline.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new deal in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the deal.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the deal and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the deal-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateDealOutput = {
	/**
	 * The unique ID of the created deal.
	 */
	id?: string;
	/**
	 * Property values returned for the created deal.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the deal was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the deal was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the deal is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the deal was archived, when applicable.
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
	 * URL associated with the created deal, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the deal.
	 *
	 * Items: A warning returned while creating the deal.
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
 * Create a deal
 * Creates a deal with the given properties and returns the created object.
 */
export async function createDeal(
	this: EndpointFunctionThis,
	payload: {
		input: CreateDealInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateDealOutput> {
	const response = await this.endpointCaller<CreateDealOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createDeal',
		},
		payload,
	);
	return response.output;
}
