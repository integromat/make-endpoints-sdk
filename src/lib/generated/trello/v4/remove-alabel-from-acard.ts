// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemoveALabelFromACardInput = {
	/**
	 * The ID or short link of the card.
	 */
	id: string;
	/**
	 * The ID of the label to remove from the card.
	 */
	idLabel: string;
};

export type RemoveALabelFromACardOutput = Record<string, never>;

/**
 * Remove a label from a card
 * Removes a label from a card.
 */
export async function removeAlabelFromAcard(
	this: EndpointFunctionThis,
	payload: {
		input: RemoveALabelFromACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<RemoveALabelFromACardOutput> {
	const response = await this.endpointCaller<RemoveALabelFromACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'removeALabelFromACard',
		},
		payload,
	);
	return response.output;
}
