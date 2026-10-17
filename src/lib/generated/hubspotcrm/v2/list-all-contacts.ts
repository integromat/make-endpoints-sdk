// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListAllContactsInput = {
	/**
	 * The `paging.next.after` value from the previous response.
	 */
	after?: string;
	/**
	 * Whether to return only archived contacts. When true, only archived contacts are returned.
	 */
	archived?: boolean;
	/**
	 * Object types whose associations should be returned with each contact.
	 *
	 * Items: An object type whose associated records should be included.
	 */
	associations?: string[];
	/**
	 * The maximum number of contacts to return in this page, up to 100.
	 */
	limit?: number;
	/**
	 * Contact property internal names to include in the response.
	 *
	 * Items: A contact property internal name to return.
	 */
	properties?: string[];
	/**
	 * Contact property internal names whose historical values should be included.
	 *
	 * Items: A contact property internal name whose value history should be returned.
	 */
	propertiesWithHistory?: string[];
};

export type ListAllContactsOutput = {
	/**
	 * The contacts returned in this page.
	 *
	 * Items: A HubSpot contact record with requested properties and associations.
	 */
	results?: {
		/**
		 * The unique contact record ID.
		 */
		id?: string;
		/**
		 * The requested current contact property values.
		 */
		properties?: Record<string, JSONValue>;
		/**
		 * The date and time when the contact was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the contact was last updated.
		 */
		updatedAt?: string;
		/**
		 * Whether the contact is archived.
		 */
		archived?: boolean;
		/**
		 * The date and time when the contact was archived.
		 */
		archivedAt?: string;
		/**
		 * Associated records grouped by requested object type.
		 */
		associations?: Record<string, JSONValue>;
		/**
		 * The trace identifier associated with the object write.
		 */
		objectWriteTraceId?: string;
		/**
		 * Historical values for the requested properties.
		 */
		propertiesWithHistory?: Record<string, JSONValue>;
		/**
		 * The URL associated with the contact record.
		 */
		url?: string;
		/**
		 * Warnings generated while reading the contact.
		 *
		 * Items: A PublicObjectWarning returned for the contact.
		 */
		warnings?: {
			/**
			 * The warning category.
			 */
			category?: string;
			/**
			 * Additional warning context.
			 */
			context?: Record<string, JSONValue>;
			/**
			 * The warning message.
			 */
			message?: string;
		}[];
	}[];
	/**
	 * Cursor information for the next page.
	 */
	paging?: {
		/**
		 * Information for requesting the next page.
		 */
		next?: {
			/**
			 * The cursor for the next page.
			 */
			after?: string;
			/**
			 * The URL for the next page.
			 */
			link?: string;
		};
	};
};

/**
 * List all contacts
 * Returns one page of contacts, including requested properties, history, and associations.
 */
export async function listAllContacts(
	this: EndpointFunctionThis,
	payload: {
		input: ListAllContactsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListAllContactsOutput> {
	const response = await this.endpointCaller<ListAllContactsOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'listAllContacts',
		},
		payload,
	);
	return response.output;
}
