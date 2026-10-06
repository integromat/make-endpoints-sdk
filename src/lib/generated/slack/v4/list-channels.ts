// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListChannelsInput = {
	/**
	 * Conversation types to include.
	 */
	types?: '' | 'public_channel' | 'private_channel' | 'mpim' | 'im';
	/**
	 * Whether to omit archived channels from the results.
	 */
	exclude_archived?: boolean;
	/**
	 * Encoded team ID to list channels for. Required when using an org-wide token.
	 */
	team_id?: string;
	/**
	 * Maximum number of items to return, under 1000.
	 */
	limit?: number;
	/**
	 * Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.
	 */
	cursor?: string;
};

export type ListChannelsOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The workspace's conversations matching the requested types.
	 *
	 * Items: A single conversation.
	 */
	channels?: {
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
		 * Number of members in the channel.
		 */
		num_members?: number;
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
	}[];
	/**
	 * Pagination metadata for this response.
	 */
	response_metadata?: {
		/**
		 * Cursor value to pass as `cursor` to fetch the next page. Empty when there are no more pages.
		 */
		next_cursor?: string;
	};
};

/**
 * List channels
 * Returns a list of conversations in the workspace.
 */
export async function listChannels(
	this: EndpointFunctionThis,
	payload: {
		input: ListChannelsInput;
		connectionId: number;
	},
): Promise<ListChannelsOutput> {
	const response = await this.endpointCaller<ListChannelsOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'listChannels',
		},
		payload,
	);
	return response.output;
}
