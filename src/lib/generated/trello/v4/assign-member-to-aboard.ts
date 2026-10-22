// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AssignMemberToABoardInput = {
	/**
	 * The ID or short link of the board.
	 */
	id: string;
	/**
	 * The email address of the user to add as a member of the board.
	 */
	email: string;
	/**
	 * The role of the new member on the board. Default: `normal`.
	 */
	type?: '' | 'admin' | 'normal' | 'observer';
	/**
	 * The full name of the user. Must be at least 1 character long and cannot begin or end with a space.
	 */
	fullName?: string;
};

export type AssignMemberToABoardOutput = {
	/**
	 * The ID of the board.
	 */
	id?: string;
	/**
	 * The members of the board.
	 *
	 * Items: A member of the board.
	 */
	members?: {
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
		 * The bio of the member.
		 */
		bio?: string;
		/**
		 * Whether the member has confirmed their email address.
		 */
		confirmed?: boolean;
		/**
		 * The full name of the member.
		 */
		fullName?: string;
		/**
		 * The IDs of Enterprises the member is deactivated in.
		 *
		 * Items: The ID of an Enterprise the member is deactivated in.
		 */
		idEnterprisesDeactivated?: string[];
		/**
		 * The ID of the member who referred the member to Trello.
		 */
		idMemberReferrer?: string;
		/**
		 * The IDs of premium Workspaces the member administers.
		 *
		 * Items: The ID of a premium Workspace the member administers.
		 */
		idPremOrgsAdmin?: string[];
		/**
		 * The initials of the member.
		 */
		initials?: string;
		/**
		 * The type of the member account: `normal` or `ghost`.
		 */
		memberType?: string;
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
		 * The Trello products of the member.
		 *
		 * Items: The code of a Trello product of the member.
		 */
		products?: number[];
		/**
		 * The URL of the member profile.
		 */
		url?: string;
		/**
		 * The username of the member.
		 */
		username?: string;
		/**
		 * The online status of the member.
		 */
		status?: string;
	}[];
	/**
	 * The relationships of members to the board.
	 *
	 * Items: The relationship of a member to the board.
	 */
	memberships?: {
		/**
		 * The ID of the membership.
		 */
		id?: string;
		/**
		 * The ID of the member.
		 */
		idMember?: string;
		/**
		 * The role of the member on the board: `admin`, `normal`, or `observer`.
		 */
		memberType?: string;
		/**
		 * Whether the member has not yet confirmed their account.
		 */
		unconfirmed?: boolean;
		/**
		 * Whether the member is deactivated.
		 */
		deactivated?: boolean;
	}[];
};

/**
 * Assign a member to a board
 * Invites a user to a board by email address.
 */
export async function assignMemberToAboard(
	this: EndpointFunctionThis,
	payload: {
		input: AssignMemberToABoardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AssignMemberToABoardOutput> {
	const response = await this.endpointCaller<AssignMemberToABoardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'assignMemberToABoard',
		},
		payload,
	);
	return response.output;
}
