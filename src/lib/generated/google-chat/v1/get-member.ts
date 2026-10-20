// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetMemberInput = {
	/**
	 * The resource name of the membership to retrieve, in the form `spaces/{space}/members/{member}`. You can get the membership name from the response of the List members endpoint.
	 */
	name: string;
};

export type GetMemberOutput = {
	/**
	 * The Google Group the membership corresponds to. Reading or mutating memberships for Google Groups requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
	 */
	groupMember?: {
		/**
		 * Resource name for a Google Group. Represents a [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in Cloud Identity Groups API. Format: groups/{group}
		 */
		name?: string;
	};
	/**
	 * The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.
	 */
	deleteTime?: string;
	/**
	 * Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}`
	 */
	name?: string;
	/**
	 * User's role within a Chat space, which determines their permitted actions in the space. This field can only be used as input in `UpdateMembership`.
	 */
	role?:
		| ''
		| 'MEMBERSHIP_ROLE_UNSPECIFIED'
		| 'ROLE_MEMBER'
		| 'ROLE_MANAGER'
		| 'ROLE_ASSISTANT_MANAGER';
	/**
	 * A user's relationship to the Workspace organization that owns the space. In spaces owned by consumer accounts, the affiliation of all members is `EXTERNAL`.
	 */
	affiliation?: '' | 'AFFILIATION_UNSPECIFIED' | 'INTERNAL' | 'EXTERNAL' | 'MANAGED_EXTERNAL';
	/**
	 * The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.
	 */
	createTime?: string;
	/**
	 * The Google Chat user or app the membership corresponds to. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output only populates the [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) `name` and `type` fields for both internal and external users, unless they are members of the space or have a prior affinity, like a direct message (DM) conversation, with the calling user.
	 */
	member?: {
		/**
		 * Unique identifier of the user's Google Workspace domain.
		 */
		domainId?: string;
		/**
		 * The user's email address. When calling the Messages and Memberships APIs with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), this field is populated for both internal and external users for the `sender` of a message, users within `annotations` (such as user mentions), and within `Membership` resources, provided the user is a member of the space or has prior affinity with the calling user.
		 */
		email?: string;
		/**
		 * The user's display name. Populated for both app authentication and user authentication. This field is always populated for requests made with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). When calling the Messages and Memberships APIs with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), this field is populated for both internal and external users for the `sender` of a message, users within `annotations` (such as user mentions), and within `Membership` resources, provided the user is a member of the space or has prior affinity with the calling user.
		 */
		displayName?: string;
		/**
		 * User type.
		 */
		type?: '' | 'TYPE_UNSPECIFIED' | 'HUMAN' | 'BOT';
		/**
		 * Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `id` for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, `users/123456789` in Chat API represents the same person as the `123456789` Person profile ID in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user's email address can be used as an alias for `{user}` in API requests. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can use `users/user@example.com` as an alias to reference `users/123456789`. Only the canonical resource name (for example `users/123456789`) will be returned from the API.
		 */
		name?: string;
		/**
		 * The user's avatar image URL. When calling the Messages and Memberships APIs with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), this field is populated for both internal and external users for the `sender` of a message, users within `annotations` (such as user mentions), and within `Membership` resources, provided the user is a member of the space or has prior affinity with the calling user.
		 */
		avatarUrl?: string;
		/**
		 * When `true`, the user is deleted or their profile is not visible, such as when a user is mentioned in a space without being a member and without prior affinity with the calling user.
		 */
		isAnonymous?: boolean;
	};
	/**
	 * State of the membership.
	 */
	state?: '' | 'MEMBERSHIP_STATE_UNSPECIFIED' | 'JOINED' | 'INVITED' | 'NOT_A_MEMBER';
};

/**
 * Get a member
 * Returns details about a membership in a space.
 */
export async function getMember(
	this: EndpointFunctionThis,
	payload: {
		input: GetMemberInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetMemberOutput> {
	const response = await this.endpointCaller<GetMemberOutput>(
		{
			appName: 'google-chat',
			appVersion: 1,
			endpointName: 'getMember',
		},
		payload,
	);
	return response.output;
}
