// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateDealInput = {
	/**
	 * The deal's internal ID, or a unique property value when ID property is provided.
	 */
	id: string;
	/**
	 * Internal name of the unique property used to identify the deal. Omit it when Deal ID or unique value contains the internal record ID.
	 */
	idProperty?: string;
	/**
	 * JSON object whose keys are deal property internal names. Send values as strings; an empty string clears a property, and omitted properties remain unchanged. Invalid or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateDealOutput = {
	/**
	 * Unique ID of the updated deal.
	 */
	id: string;
	/**
	 * Current property values returned for the updated deal.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Date and time when the deal was created.
	 */
	createdAt: string;
	/**
	 * Date and time when the deal was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the deal is archived.
	 */
	archived: boolean;
	/**
	 * Date and time when the deal was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Trace identifier associated with the deal write, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Deal property values and their historical versions, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * HubSpot URL for the updated deal, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the deal.
	 *
	 * Items: A warning returned while updating the deal.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Additional structured context for the warning.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Human-readable warning message.
		 */
		message?: string;
	}[];
};

/**
 * Update a deal
 * Updates the properties of an existing deal and returns the updated object.
 */
export async function updateDeal(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateDealInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateDealOutput> {
	const response = await this.endpointCaller<UpdateDealOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateDeal',
		},
		payload,
	);
	return response.output;
}
