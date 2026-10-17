// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateEmailInput = {
	/**
	 * The email engagement's internal ID, or a unique property value when ID property is provided.
	 */
	id: string;
	/**
	 * Internal name of the unique property used to identify the email engagement. Omit it when Email ID or unique value contains the internal record ID.
	 */
	idProperty?: string;
	/**
	 * JSON object whose keys are email property internal names. Send values as strings; an empty string clears a property, and omitted properties remain unchanged. Invalid or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateEmailOutput = {
	/**
	 * Unique ID of the updated email engagement.
	 */
	id: string;
	/**
	 * Current property values returned for the updated email engagement.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Date and time when the email engagement was created.
	 */
	createdAt: string;
	/**
	 * Date and time when the email engagement was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the email engagement is archived.
	 */
	archived: boolean;
	/**
	 * Date and time when the email engagement was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Trace identifier associated with the email engagement write, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Email property values and their historical versions, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * HubSpot URL for the updated email engagement, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the email engagement.
	 *
	 * Items: A warning returned while updating the email engagement.
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
 * Update an email
 * Updates the properties of an existing email engagement and returns the updated object.
 */
export async function updateEmail(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateEmailInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateEmailOutput> {
	const response = await this.endpointCaller<UpdateEmailOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateEmail',
		},
		payload,
	);
	return response.output;
}
