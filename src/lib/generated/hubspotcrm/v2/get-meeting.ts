// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetMeetingInput = {
	/**
	 * Meeting ID or unique property value when ID property is set.
	 */
	id: string;
	/**
	 * True retrieves an archived meeting.
	 */
	archived?: boolean;
	/**
	 * Associated object types to return.
	 *
	 * Items: CRM object type such as contacts.
	 */
	associations?: string[];
	/**
	 * Unique property whose value is supplied as the path ID.
	 */
	idProperty?: string;
	/**
	 * Meeting properties to return.
	 *
	 * Items: Meeting property internal name.
	 */
	properties?: string[];
	/**
	 * Meeting properties to return with history.
	 *
	 * Items: Meeting property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetMeetingOutput = {
	/**
	 * Meeting record ID.
	 */
	id?: string;
	/**
	 * Requested meeting properties.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Creation time.
	 */
	createdAt?: string;
	/**
	 * Last update time.
	 */
	updatedAt?: string;
	/**
	 * Whether archived.
	 */
	archived?: boolean;
	/**
	 * Archive time.
	 */
	archivedAt?: string;
	/**
	 * Requested associated IDs.
	 */
	associations?: Record<string, JSONValue>;
	/**
	 * HubSpot write trace ID.
	 */
	objectWriteTraceId?: string;
	/**
	 * Properties with historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * HubSpot record URL.
	 */
	url?: string;
	/**
	 * HubSpot warnings.
	 *
	 * Items: One warning.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Warning message.
		 */
		message?: string;
	}[];
};

/**
 * Get a meeting
 * Returns information about a specific meeting engagement.
 */
export async function getMeeting(
	this: EndpointFunctionThis,
	payload: {
		input: GetMeetingInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetMeetingOutput> {
	const response = await this.endpointCaller<GetMeetingOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getMeeting',
		},
		payload,
	);
	return response.output;
}
