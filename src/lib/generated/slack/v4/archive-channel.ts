// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ArchiveChannelInput = {
	/**
	 * ID of the conversation to archive.
	 */
	channel: string;
};

export type ArchiveChannelOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
};

/**
 * Archive a channel
 * Archives a channel.
 */
export async function archiveChannel(
	this: EndpointFunctionThis,
	payload: {
		input: ArchiveChannelInput;
		connectionId: number;
	},
): Promise<ArchiveChannelOutput> {
	const response = await this.endpointCaller<ArchiveChannelOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'archiveChannel',
		},
		payload,
	);
	return response.output;
}
