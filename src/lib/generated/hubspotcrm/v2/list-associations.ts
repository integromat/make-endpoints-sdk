// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListAssociationsInput = {
	/**
	 * The source object type: contacts, companies, deals, or a custom object type ID or fully qualified name.
	 */
	objectType: string;
	/**
	 * The ID of the source CRM record.
	 */
	objectId: string;
	/**
	 * One target object type to list associations for. Standard types may use a singular name or object type ID.
	 */
	toObjectType: string;
	/**
	 * The `paging.next.after` value from the previous response.
	 */
	after?: string;
	/**
	 * The maximum number of associations to return in this page, up to 500.
	 */
	limit?: number;
};

export type ListAssociationsOutput = {
	/**
	 * The associations returned in this page.
	 *
	 * Items: An associated target record and its association types.
	 */
	results?: {
		/**
		 * The ID of the associated target record.
		 */
		toObjectId?: string;
		/**
		 * The association definitions connecting the records.
		 *
		 * Items: A definition of the association between the source and target records.
		 */
		associationTypes?: {
			/**
			 * The association category: `HUBSPOT_DEFINED`, `INTEGRATOR_DEFINED`, `USER_DEFINED`, or `WORK`.
			 */
			category?: string;
			/**
			 * The numeric association type ID.
			 */
			typeId?: number;
			/**
			 * The association label.
			 */
			label?: string;
			/**
			 * The source object type ID.
			 */
			fromObjectTypeId?: string;
			/**
			 * The target object type ID.
			 */
			toObjectTypeId?: string;
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
 * List associations
 * Returns one page of associations from a source CRM record to one target object type.
 */
export async function listAssociations(
	this: EndpointFunctionThis,
	payload: {
		input: ListAssociationsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListAssociationsOutput> {
	const response = await this.endpointCaller<ListAssociationsOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'listAssociations',
		},
		payload,
	);
	return response.output;
}
