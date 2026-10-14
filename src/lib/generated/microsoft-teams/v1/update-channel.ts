// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateChannelInput = {
	/**
	 * The unique identifier of the team.
	 */
	teamId: string;
	/**
	 * The unique identifier of the channel to update.
	 */
	channelId: string;
	/**
	 * Channel name as it appears in Microsoft Teams.
	 */
	displayName?: string;
	/**
	 * Optional textual description for the channel.
	 */
	description?: string;
	/**
	 * Whether the channel should automatically show in every team member's favorite list. Only works for standard channels.
	 */
	isFavoriteByDefault?: boolean;
	/**
	 * The layout type of the channel: traditional post-and-reply, or chat-like threading.
	 */
	layoutType?: '' | 'post' | 'chat';
};

export type UpdateChannelOutput = Record<string, never>;

/**
 * Update a channel
 * Updates the properties of a channel.
 */
export async function updateChannel(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateChannelInput;
		connectionId: number;
	},
): Promise<UpdateChannelOutput> {
	const response = await this.endpointCaller<UpdateChannelOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'updateChannel',
		},
		payload,
	);
	return response.output;
}
