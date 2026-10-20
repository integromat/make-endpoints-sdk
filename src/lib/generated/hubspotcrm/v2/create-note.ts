// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateNoteInput = {
	/**
	 * JSON object of note property internal names and API-formatted string values. Include required `hs_timestamp`; separate multiple `hs_attachment_ids` with semicolons.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new note in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the note.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the note and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the note-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateNoteOutput = {
	/**
	 * The unique ID of the created note.
	 */
	id?: string;
	/**
	 * Property values returned for the created note.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the note was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the note was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the note is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the note was archived, when applicable.
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
	 * URL associated with the created note, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the note.
	 *
	 * Items: A warning returned while creating the note.
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
 * Create a note
 * Creates a note engagement with the given properties and returns the created object.
 */
export async function createNote(
	this: EndpointFunctionThis,
	payload: {
		input: CreateNoteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateNoteOutput> {
	const response = await this.endpointCaller<CreateNoteOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createNote',
		},
		payload,
	);
	return response.output;
}
