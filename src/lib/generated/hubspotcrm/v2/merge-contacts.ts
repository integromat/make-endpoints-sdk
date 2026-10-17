// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type MergeContactsInput = {
	/**
	 * ID of the contact whose property values generally take precedence during the irreversible merge. The returned contact ID may differ.
	 */
	primaryContactId: string;
	/**
	 * ID of the contact to merge into the primary contact. This record stops existing independently after the irreversible merge.
	 */
	secondaryContactId: string;
};

export type MergeContactsOutput = {
	/**
	 * Authoritative ID of the contact returned by the merge.
	 */
	id: string;
	/**
	 * Current property values of the merged contact.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Date and time when the returned contact was created.
	 */
	createdAt: string;
	/**
	 * Date and time when the returned contact was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the returned contact is archived.
	 */
	archived: boolean;
	/**
	 * Date and time when the contact was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Trace identifier associated with the object write, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Contact property values with their history, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * URL associated with the returned contact, when available.
	 */
	url?: string;
	/**
	 * Warnings returned while processing the merge.
	 *
	 * Items: A warning returned while processing the merge.
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
		 * Human-readable warning message.
		 */
		message?: string;
	}[];
};

/**
 * Merge contacts
 * Irreversibly merges one contact into another and returns the authoritative merged contact record.
 */
export async function mergeContacts(
	this: EndpointFunctionThis,
	payload: {
		input: MergeContactsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<MergeContactsOutput> {
	const response = await this.endpointCaller<MergeContactsOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'mergeContacts',
		},
		payload,
	);
	return response.output;
}
