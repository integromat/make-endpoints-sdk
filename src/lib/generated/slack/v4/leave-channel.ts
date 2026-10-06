// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type LeaveChannelInput = {
	/**
	 * ID of the conversation to leave.
	 */
	channel: string;
};

export type LeaveChannelOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * Present and `true` when the caller was not a member of the channel to begin with.
	 */
	not_in_channel?: boolean;
};

/**
 * Leave a channel
 * Leaves a conversation.
 */
export async function leaveChannel(
	this: EndpointFunctionThis,
	payload: {
		input: LeaveChannelInput;
		connectionId: number;
	},
): Promise<LeaveChannelOutput> {
	const response = await this.endpointCaller<LeaveChannelOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'leaveChannel',
		},
		payload,
	);
	return response.output;
}
