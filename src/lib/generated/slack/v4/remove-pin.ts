// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemovePinInput = {
	/**
	 * Channel where the message is pinned.
	 */
	channel: string;
	/**
	 * Timestamp of the pinned message to remove. Identifies which pinned item to unpin when a channel has more than one.
	 */
	timestamp: string;
};

export type RemovePinOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
};

/**
 * Unpin a message
 * Removes a pinned message from a channel.
 */
export async function removePin(
	this: EndpointFunctionThis,
	payload: {
		input: RemovePinInput;
		connectionId: number;
	},
): Promise<RemovePinOutput> {
	const response = await this.endpointCaller<RemovePinOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'removePin',
		},
		payload,
	);
	return response.output;
}
