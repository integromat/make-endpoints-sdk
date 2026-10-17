// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateMeetingInput = {
	/**
	 * The meeting record ID, or the value of the unique property specified in ID property.
	 */
	id: string;
	/**
	 * The internal name of a custom property that requires unique values. Leave empty when ID is the meeting record ID.
	 */
	idProperty?: string;
	/**
	 * A JSON object of property internal names and string values. Omitted properties remain unchanged, an empty string clears a property, and invalid or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateMeetingOutput = {
	/**
	 * The meeting record ID.
	 */
	id: string;
	/**
	 * The meeting's current property values.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * The date and time when the meeting was created.
	 */
	createdAt: string;
	/**
	 * The date and time when the meeting was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the meeting is archived.
	 */
	archived: boolean;
	/**
	 * The date and time when the meeting was archived.
	 */
	archivedAt?: string;
	/**
	 * The trace identifier for the write operation.
	 */
	objectWriteTraceId?: string;
	/**
	 * Property values together with their historical versions.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * The URL of the meeting in HubSpot.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the meeting.
	 *
	 * Items: A warning returned by HubSpot.
	 */
	warnings?: {
		/**
		 * The warning category.
		 */
		category?: string;
		/**
		 * Additional context for the warning.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * The warning message.
		 */
		message?: string;
	}[];
};

/**
 * Update a meeting
 * Updates the properties of an existing meeting engagement and returns the updated object.
 */
export async function updateMeeting(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateMeetingInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateMeetingOutput> {
	const response = await this.endpointCaller<UpdateMeetingOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateMeeting',
		},
		payload,
	);
	return response.output;
}
