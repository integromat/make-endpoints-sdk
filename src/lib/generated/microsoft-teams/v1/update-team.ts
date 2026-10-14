// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateTeamInput = {
	/**
	 * The unique identifier of the group to update.
	 */
	groupId: string;
	/**
	 * The display name for the group.
	 */
	displayName?: string;
	/**
	 * An optional description for the group.
	 */
	description?: string;
	/**
	 * The mail alias for the group, unique for Microsoft 365 groups in the organization. Maximum length is 64 characters.
	 */
	mailNickname?: string;
	/**
	 * Specifies whether the group is a security group.
	 */
	securityEnabled?: boolean;
	/**
	 * Specifies the visibility of a Microsoft 365 group.
	 */
	visibility?: '' | 'Private' | 'Public';
	/**
	 * Whether people external to the organization can send messages to the group. Default is `false`.
	 */
	allowExternalSenders?: boolean;
	/**
	 * Whether new members added to the group are auto-subscribed to receive email notifications. Default is `false`.
	 */
	autoSubscribeNewMembers?: boolean;
	/**
	 * The preferred data location for the Microsoft 365 group. Requires Exchange or SharePoint admin role.
	 */
	preferredDataLocation?: string;
	/**
	 * A unique identifier that can be assigned to a group and used as an alternate key. Can only be set if currently `null` and is immutable once set.
	 */
	uniqueName?: string;
};

export type UpdateTeamOutput = Record<string, never>;

/**
 * Update a team
 * Updates the properties of a group.
 */
export async function updateTeam(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateTeamInput;
		connectionId: number;
	},
): Promise<UpdateTeamOutput> {
	const response = await this.endpointCaller<UpdateTeamOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'updateTeam',
		},
		payload,
	);
	return response.output;
}
