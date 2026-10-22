// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemoveAMemberFromACardInput = {
	/**
	 * The ID or short link of the card.
	 */
	id: string;
	/**
	 * The ID of the member to remove from the card.
	 */
	idMember: string;
};

export type RemoveAMemberFromACardOutput = Record<string, never>;

/**
 * Remove a member from a card
 * Removes a member from a card.
 */
export async function removeAmemberFromAcard(
	this: EndpointFunctionThis,
	payload: {
		input: RemoveAMemberFromACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<RemoveAMemberFromACardOutput> {
	const response = await this.endpointCaller<RemoveAMemberFromACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'removeAMemberFromACard',
		},
		payload,
	);
	return response.output;
}
