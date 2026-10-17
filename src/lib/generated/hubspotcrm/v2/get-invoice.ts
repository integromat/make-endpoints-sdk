// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetInvoiceInput = {
	/**
	 * Invoice record ID, or a unique property value when ID property is set.
	 */
	id: string;
	/**
	 * Set true to retrieve the invoice from archived records.
	 */
	archived?: boolean;
	/**
	 * Associated CRM object types to return.
	 *
	 * Items: CRM object type, such as contacts or deals.
	 */
	associations?: string[];
	/**
	 * Unique invoice property name that makes the path ID its value.
	 */
	idProperty?: string;
	/**
	 * Invoice property names to return.
	 *
	 * Items: Invoice property internal name.
	 */
	properties?: string[];
	/**
	 * Invoice properties to return with history.
	 *
	 * Items: Invoice property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetInvoiceOutput = {
	/**
	 * Invoice record ID.
	 */
	id?: string;
	/**
	 * Requested invoice properties.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Record creation time.
	 */
	createdAt?: string;
	/**
	 * Last update time.
	 */
	updatedAt?: string;
	/**
	 * Whether the record is archived.
	 */
	archived?: boolean;
	/**
	 * Archive time, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Requested associated record IDs.
	 */
	associations?: Record<string, JSONValue>;
	/**
	 * HubSpot write trace ID, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Requested properties and historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * HubSpot record URL, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned by HubSpot.
	 *
	 * Items: One HubSpot warning.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Structured warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Warning message.
		 */
		message?: string;
	}[];
};

/**
 * Get an invoice
 * Returns information about a specific invoice.
 */
export async function getInvoice(
	this: EndpointFunctionThis,
	payload: {
		input: GetInvoiceInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetInvoiceOutput> {
	const response = await this.endpointCaller<GetInvoiceOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getInvoice',
		},
		payload,
	);
	return response.output;
}
