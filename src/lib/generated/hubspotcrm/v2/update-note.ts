// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateNoteInput = {
	/**
	 * The note record ID, or the value of the unique property specified in ID property.
	 */
	id: string;
	/**
	 * The internal name of a custom property that requires unique values. Leave empty when ID is the note record ID.
	 */
	idProperty?: string;
	/**
	 * A JSON object of property internal names and string values. Omitted properties remain unchanged, an empty string clears a property, and invalid or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateNoteOutput = {
	/**
	 * The note record ID.
	 */
	id: string;
	/**
	 * The note's current property values.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * The date and time when the note was created.
	 */
	createdAt: string;
	/**
	 * The date and time when the note was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the note is archived.
	 */
	archived: boolean;
	/**
	 * The date and time when the note was archived.
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
	 * The URL of the note in HubSpot.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the note.
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
 * Update a note
 * Updates the properties of an existing note engagement and returns the updated object.
 */
export async function updateNote(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateNoteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateNoteOutput> {
	const response = await this.endpointCaller<UpdateNoteOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateNote',
		},
		payload,
	);
	return response.output;
}
