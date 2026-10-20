// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateQuoteInput = {
	/**
	 * The quote record ID, or the value of the unique property selected in ID property.
	 */
	id: string;
	/**
	 * The internal name of a unique quote property used to identify the quote. Leave empty when ID contains the record ID.
	 */
	idProperty?: string;
	/**
	 * JSON object of quote property internal names and string values. Only supplied properties are updated. Pass an empty string to clear a property. Invalid values, unknown properties, or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateQuoteOutput = {
	/**
	 * The unique ID of the updated quote.
	 */
	id: string;
	/**
	 * Property values returned for the updated quote.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Date and time when the quote was created.
	 */
	createdAt: string;
	/**
	 * Date and time when the quote was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the quote is archived.
	 */
	archived: boolean;
	/**
	 * Date and time when the quote was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Identifier used to trace the quote update request, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Quote property values together with their history, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * URL associated with the updated quote, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the quote.
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
 * Update a quote
 * Updates the properties of an existing quote and returns the updated object.
 */
export async function updateQuote(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateQuoteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateQuoteOutput> {
	const response = await this.endpointCaller<UpdateQuoteOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateQuote',
		},
		payload,
	);
	return response.output;
}
