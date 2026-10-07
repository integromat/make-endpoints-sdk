// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UnarchiveChannelInput = {
	/**
	 * ID of the conversation to unarchive.
	 */
	channel: string;
};

export type UnarchiveChannelOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
};

/**
 * Unarchive a channel
 * Reverses channel archival.
 */
export async function unarchiveChannel(
	this: EndpointFunctionThis,
	payload: {
		input: UnarchiveChannelInput;
		connectionId: number;
	},
): Promise<UnarchiveChannelOutput> {
	const response = await this.endpointCaller<UnarchiveChannelOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'unarchiveChannel',
		},
		payload,
	);
	return response.output;
}
