// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListChannelMembersInput = {
	/**
	 * ID of the conversation to retrieve members for.
	 */
	channel: string;
	/**
	 * Maximum number of items to return. Recommended maximum of 200 per request.
	 */
	limit?: number;
	/**
	 * Pagination cursor. Set to the `response_metadata.next_cursor` value from a previous call to fetch the next page.
	 */
	cursor?: string;
};

export type ListChannelMembersOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * IDs of the users in the conversation.
	 *
	 * Items: ID of a member of the conversation.
	 */
	members?: string[];
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
 * List members in a channel
 * Returns the IDs of members in a channel or conversation.
 */
export async function listChannelMembers(
	this: EndpointFunctionThis,
	payload: {
		input: ListChannelMembersInput;
		connectionId: number;
	},
): Promise<ListChannelMembersOutput> {
	const response = await this.endpointCaller<ListChannelMembersOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'listChannelMembers',
		},
		payload,
	);
	return response.output;
}
