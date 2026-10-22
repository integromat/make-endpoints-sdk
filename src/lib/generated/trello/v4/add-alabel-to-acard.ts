// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddALabelToACardInput = {
	/**
	 * The ID or short link of the card to add the label to.
	 */
	id: string;
	/**
	 * The ID of the label to add to the card. Find it with `retrieveLabels`.
	 */
	value: string;
};

export type AddALabelToACardOutput = Record<string, never>;

/**
 * Add a label to a card
 * Adds a label to a card.
 */
export async function addAlabelToAcard(
	this: EndpointFunctionThis,
	payload: {
		input: AddALabelToACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AddALabelToACardOutput> {
	const response = await this.endpointCaller<AddALabelToACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'addALabelToACard',
		},
		payload,
	);
	return response.output;
}
