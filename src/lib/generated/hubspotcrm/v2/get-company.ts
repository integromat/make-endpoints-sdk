// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetCompanyInput = {
	/**
	 * The company record ID, or a unique property value when ID property is provided.
	 */
	id: string;
	/**
	 * Set to true to retrieve the company from archived records.
	 */
	archived?: boolean;
	/**
	 * CRM object types whose associated record IDs should be returned.
	 *
	 * Items: An associated CRM object type, for example contacts or deals.
	 */
	associations?: string[];
	/**
	 * A unique company property name. When provided, the path ID is treated as this property's value instead of a HubSpot record ID.
	 */
	idProperty?: string;
	/**
	 * Company property internal names to return.
	 *
	 * Items: The internal name of a company property to return.
	 */
	properties?: string[];
	/**
	 * Company property internal names to return with historical values.
	 *
	 * Items: The internal name of a company property whose value history should be returned.
	 */
	propertiesWithHistory?: string[];
};

export type GetCompanyOutput = {
	/**
	 * The company record ID.
	 */
	id?: string;
	/**
	 * The company's requested property values.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * When the company record was created.
	 */
	createdAt?: string;
	/**
	 * When the company record was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the company record is archived.
	 */
	archived?: boolean;
	/**
	 * When the company record was archived, if applicable.
	 */
	archivedAt?: string;
	/**
	 * Associated record IDs grouped by requested CRM object type.
	 */
	associations?: Record<string, JSONValue>;
	/**
	 * HubSpot's write trace identifier for the record, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Requested company properties with their historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * A HubSpot URL associated with the record, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while reading the company.
	 *
	 * Items: A warning returned by HubSpot.
	 */
	warnings?: {
		/**
		 * The warning category.
		 */
		category?: string;
		/**
		 * Additional structured context for the warning.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * The warning message.
		 */
		message?: string;
	}[];
};

/**
 * Get a company
 * Returns information about a specific company.
 */
export async function getCompany(
	this: EndpointFunctionThis,
	payload: {
		input: GetCompanyInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetCompanyOutput> {
	const response = await this.endpointCaller<GetCompanyOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getCompany',
		},
		payload,
	);
	return response.output;
}
