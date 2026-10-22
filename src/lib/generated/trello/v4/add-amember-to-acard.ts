// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddAMemberToACardInput = {
	/**
	 * The ID or short link of the card to assign the member to.
	 */
	id: string;
	/**
	 * The ID of the member to assign to the card. Find it with `getBoard` (`members` = `all`).
	 */
	value: string;
};

export type AddAMemberToACardOutput = {
	/**
	 * The ID of the member.
	 */
	id?: string;
	/**
	 * Whether the activity of the member is blocked.
	 */
	activityBlocked?: boolean;
	/**
	 * The hash of the avatar of the member.
	 */
	avatarHash?: string;
	/**
	 * The URL of the avatar of the member.
	 */
	avatarUrl?: string;
	/**
	 * The full name of the member.
	 */
	fullName?: string;
	/**
	 * The ID of the member who referred the member to Trello.
	 */
	idMemberReferrer?: string;
	/**
	 * The initials of the member.
	 */
	initials?: string;
	/**
	 * Profile data with restricted visibility, visible only to members of the same Workspace.
	 */
	nonPublic?: {
		/**
		 * The non-public full name of the member.
		 */
		fullName?: string;
		/**
		 * The non-public initials of the member.
		 */
		initials?: string;
		/**
		 * The URL of the non-public avatar of the member.
		 */
		avatarUrl?: string;
		/**
		 * The hash of the non-public avatar of the member.
		 */
		avatarHash?: string;
	};
	/**
	 * Whether the response contains non-public profile data for the member.
	 */
	nonPublicAvailable?: boolean;
	/**
	 * The username of the member.
	 */
	username?: string;
};

/**
 * Add a member to a card
 * Assigns a member to a card.
 */
export async function addAmemberToAcard(
	this: EndpointFunctionThis,
	payload: {
		input: AddAMemberToACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AddAMemberToACardOutput> {
	const response = await this.endpointCaller<AddAMemberToACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'addAMemberToACard',
		},
		payload,
	);
	return response.output;
}
