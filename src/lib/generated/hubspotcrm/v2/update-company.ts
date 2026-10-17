// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateCompanyInput = {
	/**
	 * The company's internal record ID, or the value of the unique property selected in ID property.
	 */
	id: string;
	/**
	 * The internal name of a unique company property used to identify the record. Leave empty when ID is the internal record ID.
	 */
	idProperty?: string;
	/**
	 * A JSON object whose keys are company property internal names and whose values are strings. Only included properties are updated; use an empty string to clear a value. Omitted properties remain unchanged. Read-only or nonexistent properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateCompanyOutput = {
	/**
	 * The unique company record ID.
	 */
	id?: string;
	/**
	 * The company's current property values returned by HubSpot.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * The date and time when the company was created.
	 */
	createdAt?: string;
	/**
	 * The date and time when the company was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the company is archived.
	 */
	archived?: boolean;
	/**
	 * The date and time when the company was archived.
	 */
	archivedAt?: string;
	/**
	 * The trace identifier associated with the object write.
	 */
	objectWriteTraceId?: string;
	/**
	 * Historical values for returned company properties.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * The URL associated with the company record.
	 */
	url?: string;
	/**
	 * Warnings generated while updating the company.
	 *
	 * Items: A warning returned for the company update.
	 */
	warnings?: {
		/**
		 * The warning category.
		 */
		category?: string;
		/**
		 * Additional warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * The warning message.
		 */
		message?: string;
	}[];
};

/**
 * Update a company
 * Updates a HubSpot company's properties.
 */
export async function updateCompany(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateCompanyInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateCompanyOutput> {
	const response = await this.endpointCaller<UpdateCompanyOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateCompany',
		},
		payload,
	);
	return response.output;
}
