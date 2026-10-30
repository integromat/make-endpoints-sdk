// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUserGroupsInput = {
	/**
	 * The ID or the user principal name (UPN) of the user.
	 */
	userId: string;
	/**
	 * Set to `true` to return only the security groups the user is a member of. Set to `false` to return all groups and directory roles.
	 */
	securityEnabledOnly: boolean;
};

export type GetUserGroupsOutput = {
	/**
	 * The OData context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The IDs of the groups the user is a member of. The function is transitive and returns up to 11,000 IDs.
	 *
	 * Items: The ID of a group.
	 */
	value?: string[];
};

/**
 * Get a user's group memberships
 * Returns the IDs of all groups a user is a member of, including nested memberships.
 */
export async function getUserGroups(
	this: EndpointFunctionThis,
	payload: {
		input: GetUserGroupsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetUserGroupsOutput> {
	const response = await this.endpointCaller<GetUserGroupsOutput>(
		{
			appName: 'active-directory',
			appVersion: 1,
			endpointName: 'getUserGroups',
		},
		payload,
	);
	return response.output;
}
