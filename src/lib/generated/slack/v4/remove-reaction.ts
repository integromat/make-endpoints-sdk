// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemoveReactionInput = {
	/**
	 * Name of the emoji reaction to remove, without colons, for example `thumbsup`.
	 */
	name: string;
	/**
	 * Channel where the message with the reaction was posted. Required together with `timestamp` when removing a reaction from a message.
	 */
	channel?: string;
	/**
	 * Timestamp of the message to remove the reaction from. Required together with `channel`.
	 */
	timestamp?: string;
	/**
	 * ID of the file to remove the reaction from, instead of a message.
	 */
	file?: string;
	/**
	 * ID of the file comment to remove the reaction from, instead of a message.
	 */
	file_comment?: string;
};

export type RemoveReactionOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
};

/**
 * Remove a reaction
 * Removes an emoji reaction from a message, file, or file comment.
 */
export async function removeReaction(
	this: EndpointFunctionThis,
	payload: {
		input: RemoveReactionInput;
		connectionId: number;
	},
): Promise<RemoveReactionOutput> {
	const response = await this.endpointCaller<RemoveReactionOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'removeReaction',
		},
		payload,
	);
	return response.output;
}
