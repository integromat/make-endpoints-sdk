// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateChannelInput = {
	/**
	 * Name of the channel to create. Must be lowercase, without spaces or periods, and shorter than 80 characters.
	 */
	name: string;
	/**
	 * Whether to create a private channel instead of a public one.
	 */
	is_private?: boolean;
	/**
	 * Encoded team ID to create the channel in. Required when using an org-wide token.
	 */
	team_id?: string;
};

export type CreateChannelOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The newly created channel object.
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
		 * Whether this is a channel.
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
		 * Whether the calling user or bot is a member of the channel.
		 */
		is_member?: boolean;
		/**
		 * Whether the channel is shared between workspaces.
		 */
		is_shared?: boolean;
		/**
		 * The channel's current topic.
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
		 * The channel's current purpose.
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
	};
};

/**
 * Create a channel
 * Creates a new public or private channel.
 */
export async function createChannel(
	this: EndpointFunctionThis,
	payload: {
		input: CreateChannelInput;
		connectionId: number;
	},
): Promise<CreateChannelOutput> {
	const response = await this.endpointCaller<CreateChannelOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'createChannel',
		},
		payload,
	);
	return response.output;
}
