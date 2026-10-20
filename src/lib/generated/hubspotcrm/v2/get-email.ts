// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetEmailInput = {
	/**
	 * Email record ID, or a unique property value when ID property is set.
	 */
	id: string;
	/**
	 * Set true to retrieve the email from archived records.
	 */
	archived?: boolean;
	/**
	 * Associated CRM object types to return.
	 *
	 * Items: CRM object type, such as contacts.
	 */
	associations?: string[];
	/**
	 * Unique email property name that makes the path ID its value.
	 */
	idProperty?: string;
	/**
	 * Email property names to return.
	 *
	 * Items: Email property internal name.
	 */
	properties?: string[];
	/**
	 * Email properties to return with history.
	 *
	 * Items: Email property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetEmailOutput = {
	/**
	 * Email record ID.
	 */
	id?: string;
	/**
	 * Requested email properties.
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
 * Get an email
 * Returns information about a specific email engagement.
 */
export async function getEmail(
	this: EndpointFunctionThis,
	payload: {
		input: GetEmailInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetEmailOutput> {
	const response = await this.endpointCaller<GetEmailOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getEmail',
		},
		payload,
	);
	return response.output;
}
