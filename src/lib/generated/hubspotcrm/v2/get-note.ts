// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetNoteInput = {
	/**
	 * Note ID or unique property value when ID property is set.
	 */
	id: string;
	/**
	 * True retrieves an archived note.
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
	 * Note properties to return.
	 *
	 * Items: Note property internal name.
	 */
	properties?: string[];
	/**
	 * Note properties to return with history.
	 *
	 * Items: Note property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetNoteOutput = {
	/**
	 * Note record ID.
	 */
	id?: string;
	/**
	 * Requested note properties.
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
 * Get a note
 * Returns information about a specific note engagement.
 */
export async function getNote(
	this: EndpointFunctionThis,
	payload: {
		input: GetNoteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetNoteOutput> {
	const response = await this.endpointCaller<GetNoteOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getNote',
		},
		payload,
	);
	return response.output;
}
