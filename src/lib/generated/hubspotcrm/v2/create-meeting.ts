// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateMeetingInput = {
	/**
	 * JSON object of meeting property internal names and API-formatted string values. Include required `hs_timestamp`; keep `hs_meeting_start_time` equal to it when provided.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new meeting in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the meeting.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the meeting and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the meeting-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateMeetingOutput = {
	/**
	 * The unique ID of the created meeting.
	 */
	id?: string;
	/**
	 * Property values returned for the created meeting.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the meeting was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the meeting was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the meeting is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the meeting was archived, when applicable.
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
	 * URL associated with the created meeting, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the meeting.
	 *
	 * Items: A warning returned while creating the meeting.
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
 * Create a meeting
 * Creates a meeting engagement with the given properties and returns the created object.
 */
export async function createMeeting(
	this: EndpointFunctionThis,
	payload: {
		input: CreateMeetingInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateMeetingOutput> {
	const response = await this.endpointCaller<CreateMeetingOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createMeeting',
		},
		payload,
	);
	return response.output;
}
