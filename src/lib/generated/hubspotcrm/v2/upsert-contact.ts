// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpsertContactInput = {
	/**
	 * Unique email address used as the contact ID for this one-item upsert. Email-based partial upserts are unsupported.
	 */
	email: string;
	/**
	 * JSON object containing the complete intended contact property set for the email-based upsert, for example {"email":"jane@example.com","firstname":"Jane"}.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Optional trace identifier to associate with this contact write.
	 */
	objectWriteTraceId?: string;
};

export type UpsertContactOutput = {
	/**
	 * Date and time when batch processing completed.
	 */
	completedAt: string;
	/**
	 * Date and time when batch processing started.
	 */
	startedAt: string;
	/**
	 * Current processing status of the one-item batch.
	 */
	status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING';
	/**
	 * Contact records returned by the one-item batch upsert.
	 *
	 * Items: A contact returned by the upsert.
	 */
	results: {
		/**
		 * ID of the created or updated contact.
		 */
		id: string;
		/**
		 * Whether the contact was created by this upsert.
		 */
		new: boolean;
		/**
		 * Current property values of the contact.
		 */
		properties: Record<string, JSONValue>;
		/**
		 * Date and time when the contact was created.
		 */
		createdAt: string;
		/**
		 * Date and time when the contact was last updated.
		 */
		updatedAt: string;
		/**
		 * Whether the contact is archived.
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
		 * URL associated with the contact, when available.
		 */
		url?: string;
		/**
		 * Warnings returned while processing this contact.
		 *
		 * Items: A warning returned while processing this contact.
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
	}[];
	/**
	 * Date and time when batch processing was requested.
	 */
	requestedAt?: string;
	/**
	 * Links related to the batch operation, when returned.
	 */
	links?: Record<string, JSONValue>;
	/**
	 * Number of errors produced by the batch operation.
	 */
	numErrors?: number;
	/**
	 * Errors returned by the batch operation.
	 *
	 * Items: A standard HubSpot error returned by the batch operation.
	 */
	errors?: {
		/**
		 * Error identifier, when available.
		 */
		id?: string;
		/**
		 * Error status.
		 */
		status?: string;
		/**
		 * Error category.
		 */
		category?: string;
		/**
		 * Human-readable error message.
		 */
		message?: string;
		/**
		 * Additional error context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Nested error details, when available.
		 */
		errors?: Record<string, JSONValue>;
		/**
		 * Links related to the error, when available.
		 */
		links?: Record<string, JSONValue>;
		/**
		 * Error subcategory, when available.
		 */
		subCategory?: Record<string, JSONValue>;
	}[];
};

/**
 * Create or update a contact
 * Creates or fully updates one contact identified by email using a one-item batch upsert.
 */
export async function upsertContact(
	this: EndpointFunctionThis,
	payload: {
		input: UpsertContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpsertContactOutput> {
	const response = await this.endpointCaller<UpsertContactOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'upsertContact',
		},
		payload,
	);
	return response.output;
}
