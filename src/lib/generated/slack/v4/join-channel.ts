// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type JoinChannelInput = {
	/**
	 * ID of the conversation to join.
	 */
	channel: string;
};

export type JoinChannelOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The joined channel object.
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
		 * Whether the channel is private.
		 */
		is_private?: boolean;
		/**
		 * Whether the channel is archived.
		 */
		is_archived?: boolean;
		/**
		 * Whether the calling user or bot is a member (should be `true` after joining).
		 */
		is_member?: boolean;
		/**
		 * Unix timestamp of when the channel was created.
		 */
		created?: number;
		/**
		 * ID of the user who created the channel.
		 */
		creator?: string;
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
	/**
	 * Set to `already_in_channel` when the caller was already a member; the call still succeeds.
	 */
	warning?: string;
	/**
	 * Non-fatal warnings for this call.
	 */
	response_metadata?: {
		/**
		 * Warning codes returned alongside a successful response.
		 *
		 * Items: A single warning code.
		 */
		warnings?: string[];
	};
};

/**
 * Join a channel
 * Joins an existing conversation.
 */
export async function joinChannel(
	this: EndpointFunctionThis,
	payload: {
		input: JoinChannelInput;
		connectionId: number;
	},
): Promise<JoinChannelOutput> {
	const response = await this.endpointCaller<JoinChannelOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'joinChannel',
		},
		payload,
	);
	return response.output;
}
