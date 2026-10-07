// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type KickFromChannelInput = {
	/**
	 * ID of the conversation to remove the user from.
	 */
	channel: string;
	/**
	 * ID of the user to remove from the channel.
	 */
	user: string;
};

export type KickFromChannelOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * Per-item error details, if any occurred.
	 */
	errors?: Record<string, JSONValue>;
};

/**
 * Remove a user from a channel
 * Removes a user from a channel.
 */
export async function kickFromChannel(
	this: EndpointFunctionThis,
	payload: {
		input: KickFromChannelInput;
		connectionId: number;
	},
): Promise<KickFromChannelOutput> {
	const response = await this.endpointCaller<KickFromChannelOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'kickFromChannel',
		},
		payload,
	);
	return response.output;
}
