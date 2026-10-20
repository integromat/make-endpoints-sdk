// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetOwnerInput = {
	/**
	 * The owner ID, or the HubSpot user ID when ID property is User ID.
	 */
	ownerId: string;
	/**
	 * Set true to retrieve an archived owner.
	 */
	archived?: boolean;
	/**
	 * How to interpret Owner ID. Select Owner ID for a HubSpot owner ID, or User ID for a HubSpot user ID.
	 */
	idProperty?: '' | 'id' | 'userId';
};

export type GetOwnerOutput = {
	/**
	 * Whether the owner is archived.
	 */
	archived?: boolean;
	/**
	 * When the owner was created.
	 */
	createdAt?: string;
	/**
	 * The owner's email address.
	 */
	email?: string;
	/**
	 * The owner's first name.
	 */
	firstName?: string;
	/**
	 * The HubSpot owner ID.
	 */
	id?: string;
	/**
	 * The owner's last name.
	 */
	lastName?: string;
	/**
	 * Teams assigned to the owner.
	 *
	 * Items: A team assigned to the owner.
	 */
	teams?: {
		/**
		 * The team ID.
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
	/**
	 * Owner type: `PERSON` for a user owner or `QUEUE` for a queue owner.
	 */
	type?: string;
	/**
	 * When the owner was last updated.
	 */
	updatedAt?: string;
	/**
	 * The active HubSpot user ID, when available.
	 */
	userId?: number;
	/**
	 * The HubSpot user ID including inactive users, when available.
	 */
	userIdIncludingInactive?: number;
};

/**
 * Get an owner
 * Returns information about a specific HubSpot owner.
 */
export async function getOwner(
	this: EndpointFunctionThis,
	payload: {
		input: GetOwnerInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetOwnerOutput> {
	const response = await this.endpointCaller<GetOwnerOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getOwner',
		},
		payload,
	);
	return response.output;
}
