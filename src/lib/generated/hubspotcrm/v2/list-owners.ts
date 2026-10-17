// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListOwnersInput = {
	/**
	 * The email address of the owner to return.
	 */
	email?: string;
	/**
	 * Whether to return only archived owners. When false, only active owners are returned.
	 */
	archived?: boolean;
	/**
	 * The `paging.next.after` value from the previous response.
	 */
	after?: string;
	/**
	 * The maximum number of owners to return in this page, up to 500.
	 */
	limit?: number;
};

export type ListOwnersOutput = {
	/**
	 * The owners returned in this page.
	 *
	 * Items: A HubSpot owner record.
	 */
	results?: {
		/**
		 * The unique owner ID.
		 */
		id?: string;
		/**
		 * The owner's email address.
		 */
		email?: string;
		/**
		 * The owner's first name.
		 */
		firstName?: string;
		/**
		 * The owner's last name.
		 */
		lastName?: string;
		/**
		 * The owner type: `PERSON` or `QUEUE`.
		 */
		type?: string;
		/**
		 * The associated active HubSpot user ID returned as an int32 number.
		 */
		userId?: number;
		/**
		 * The associated HubSpot user ID, including inactive users, returned as an int32 number.
		 */
		userIdIncludingInactive?: number;
		/**
		 * The date and time when the owner was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the owner was last updated.
		 */
		updatedAt?: string;
		/**
		 * Whether the owner is archived.
		 */
		archived?: boolean;
		/**
		 * The teams to which the owner belongs.
		 *
		 * Items: A HubSpot team associated with the owner.
		 */
		teams?: {
			/**
			 * The unique team ID.
			 */
			id?: string;
			/**
			 * The team name.
			 */
			name?: string;
			/**
			 * Whether this is the owner's primary team.
			 */
			primary?: boolean;
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
 * List owners
 * Returns one page of active or archived HubSpot owners.
 */
export async function listOwners(
	this: EndpointFunctionThis,
	payload: {
		input: ListOwnersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListOwnersOutput> {
	const response = await this.endpointCaller<ListOwnersOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'listOwners',
		},
		payload,
	);
	return response.output;
}
