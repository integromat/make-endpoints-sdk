// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteChannelInput = {
	/**
	 * The unique identifier of the team.
	 */
	teamId: string;
	/**
	 * The unique identifier of the channel to delete.
	 */
	channelId: string;
};

export type DeleteChannelOutput = Record<string, never>;

/**
 * Delete a channel
 * Deletes a channel from a team.
 */
export async function deleteChannel(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteChannelInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteChannelOutput> {
	const response = await this.endpointCaller<DeleteChannelOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'deleteChannel',
		},
		payload,
	);
	return response.output;
}
