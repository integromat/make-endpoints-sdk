// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteACardInput = {
	/**
	 * The ID or short link of the card to delete.
	 */
	id: string;
};

export type DeleteACardOutput = Record<string, never>;

/**
 * Delete a card
 * Deletes a card permanently.
 */
export async function deleteAcard(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteACardOutput> {
	const response = await this.endpointCaller<DeleteACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'deleteACard',
		},
		payload,
	);
	return response.output;
}
