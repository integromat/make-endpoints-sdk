// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateQuoteInput = {
	/**
	 * JSON object of quote property internal names and API-formatted values. Include `hs_title`, `hs_expiration_date`, and `hs_template_type` set to `CPQ_QUOTE`.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new quote in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the quote.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the quote and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the quote-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateQuoteOutput = {
	/**
	 * The unique ID of the created quote.
	 */
	id?: string;
	/**
	 * Property values returned for the created quote.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the quote was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the quote was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the quote is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the quote was archived, when applicable.
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
	 * URL associated with the created quote, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the quote.
	 *
	 * Items: A warning returned while creating the quote.
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
 * Create a quote
 * Creates a quote with the given properties and returns the created object.
 */
export async function createQuote(
	this: EndpointFunctionThis,
	payload: {
		input: CreateQuoteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateQuoteOutput> {
	const response = await this.endpointCaller<CreateQuoteOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createQuote',
		},
		payload,
	);
	return response.output;
}
