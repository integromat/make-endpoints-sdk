// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SetChannelTopicInput = {
	/**
	 * ID of the conversation to set the topic of.
	 */
	channel: string;
	/**
	 * The new topic string. Does not support formatting or linkification.
	 */
	topic: string;
};

export type SetChannelTopicOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The channel object, reflecting the updated topic.
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
		};
	};
};

/**
 * Set a channel's topic
 * Sets the topic of a channel.
 */
export async function setChannelTopic(
	this: EndpointFunctionThis,
	payload: {
		input: SetChannelTopicInput;
		connectionId: number;
	},
): Promise<SetChannelTopicOutput> {
	const response = await this.endpointCaller<SetChannelTopicOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'setChannelTopic',
		},
		payload,
	);
	return response.output;
}
