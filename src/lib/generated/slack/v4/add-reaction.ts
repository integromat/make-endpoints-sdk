// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddReactionInput = {
	/**
	 * Channel where the message to react to was posted.
	 */
	channel: string;
	/**
	 * Timestamp of the message to add the reaction to.
	 */
	timestamp: string;
	/**
	 * Name of the emoji reaction to add, without colons, for example `thumbsup` or `thumbsup::skin-tone-6`.
	 */
	name: string;
};

export type AddReactionOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
};

/**
 * Add a reaction
 * Adds an emoji reaction to a message.
 */
export async function addReaction(
	this: EndpointFunctionThis,
	payload: {
		input: AddReactionInput;
		connectionId: number;
	},
): Promise<AddReactionOutput> {
	const response = await this.endpointCaller<AddReactionOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'addReaction',
		},
		payload,
	);
	return response.output;
}
