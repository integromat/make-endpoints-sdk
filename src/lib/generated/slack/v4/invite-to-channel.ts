// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type InviteToChannelInput = {
	/**
	 * ID of the public or private channel to invite users to.
	 */
	channel: string;
	/**
	 * IDs of the users to invite, up to 1000 per call.
	 *
	 * Items: ID of a user to invite.
	 */
	users: string[];
	/**
	 * When true, continues inviting valid users even if some of the given user IDs are invalid, instead of failing the whole call.
	 */
	force?: boolean;
};

export type InviteToChannelOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The channel object, reflecting the updated membership.
	 */
	channel?: {
		/**
		 * ID of the channel.
		 */
		id?: string;
		/**
		 * Name of the channel.
		 */
		name?: string;
		/**
		 * Whether this is a public channel.
		 */
		is_channel?: boolean;
		/**
		 * Whether this is a private channel (group).
		 */
		is_group?: boolean;
		/**
		 * Whether the channel is private.
		 */
		is_private?: boolean;
		/**
		 * Whether the channel is archived.
		 */
		is_archived?: boolean;
		/**
		 * Whether this is the workspace's default "general" channel.
		 */
		is_general?: boolean;
		/**
		 * Whether the calling user or bot is a member.
		 */
		is_member?: boolean;
		/**
		 * Whether the channel is read-only.
		 */
		is_read_only?: boolean;
		/**
		 * Unix timestamp of when the channel was created.
		 */
		created?: number;
		/**
		 * ID of the user who created the channel.
		 */
		creator?: string;
		/**
		 * Name of the channel, normalized to remove characters not allowed in channel names.
		 */
		name_normalized?: string;
		/**
		 * The channel's current topic.
		 */
		topic?: {
			/**
			 * Topic text.
			 */
			value?: string;
		};
		/**
		 * The channel's current purpose.
		 */
		purpose?: {
			/**
			 * Purpose text.
			 */
			value?: string;
		};
	};
};

/**
 * Invite users to a channel
 * Invites one or more users to a channel.
 */
export async function inviteToChannel(
	this: EndpointFunctionThis,
	payload: {
		input: InviteToChannelInput;
		connectionId: number;
	},
): Promise<InviteToChannelOutput> {
	const response = await this.endpointCaller<InviteToChannelOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'inviteToChannel',
		},
		payload,
	);
	return response.output;
}
