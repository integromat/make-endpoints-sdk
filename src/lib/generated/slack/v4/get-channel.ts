// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetChannelInput = {
	/**
	 * ID of the conversation to retrieve information about.
	 */
	channel: string;
	/**
	 * Whether to include the locale for this conversation.
	 */
	include_locale?: boolean;
	/**
	 * Whether to include the member count for this conversation.
	 */
	include_num_members?: boolean;
};

export type GetChannelOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The requested channel object.
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
		 * Name of the channel, normalized to remove characters not allowed in channel names.
		 */
		name_normalized?: string;
		/**
		 * Whether this is a public channel.
		 */
		is_channel?: boolean;
		/**
		 * Whether this is a private channel (group).
		 */
		is_group?: boolean;
		/**
		 * Whether this is a direct message conversation.
		 */
		is_im?: boolean;
		/**
		 * Whether this is a multi-person direct message.
		 */
		is_mpim?: boolean;
		/**
		 * Whether the conversation is private.
		 */
		is_private?: boolean;
		/**
		 * Whether the conversation is archived.
		 */
		is_archived?: boolean;
		/**
		 * Whether this is the workspace's default "general" channel.
		 */
		is_general?: boolean;
		/**
		 * Whether the conversation is shared between workspaces.
		 */
		is_shared?: boolean;
		/**
		 * Whether the conversation is shared across an Enterprise Grid organization.
		 */
		is_org_shared?: boolean;
		/**
		 * Whether the calling user or bot is a member.
		 */
		is_member?: boolean;
		/**
		 * Unix timestamp of when the conversation was created.
		 */
		created?: number;
		/**
		 * Unix timestamp of when the conversation was last updated.
		 */
		updated?: number;
		/**
		 * ID of the user who created the conversation.
		 */
		creator?: string;
		/**
		 * The other member's user ID, present only for direct message conversations.
		 */
		user?: string;
		/**
		 * The conversation's current topic.
		 */
		topic?: {
			/**
			 * Topic text.
			 */
			value?: string;
			/**
			 * ID of the user who set the topic.
			 */
			creator?: string;
			/**
			 * Unix timestamp of when the topic was last set.
			 */
			last_set?: number;
		};
		/**
		 * The conversation's current purpose.
		 */
		purpose?: {
			/**
			 * Purpose text.
			 */
			value?: string;
			/**
			 * ID of the user who set the purpose.
			 */
			creator?: string;
			/**
			 * Unix timestamp of when the purpose was last set.
			 */
			last_set?: number;
		};
		/**
		 * Former names of the channel.
		 *
		 * Items: A former name of the channel.
		 */
		previous_names?: string[];
		/**
		 * Number of members in the conversation. Present only when `include_num_members` was set.
		 */
		num_members?: number;
		/**
		 * Locale of the conversation. Present only when `include_locale` was set.
		 */
		locale?: string;
	};
};

/**
 * Get a channel
 * Returns information about a channel or conversation.
 */
export async function getChannel(
	this: EndpointFunctionThis,
	payload: {
		input: GetChannelInput;
		connectionId: number;
	},
): Promise<GetChannelOutput> {
	const response = await this.endpointCaller<GetChannelOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'getChannel',
		},
		payload,
	);
	return response.output;
}
