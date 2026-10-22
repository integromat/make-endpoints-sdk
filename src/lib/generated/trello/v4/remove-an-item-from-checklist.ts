// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemoveAnItemFromChecklistInput = {
	/**
	 * The ID of the checklist the item belongs to.
	 */
	id: string;
	/**
	 * The ID of the checklist item to delete. Find it with `getACardChecklists`.
	 */
	idCheckItem: string;
};

export type RemoveAnItemFromChecklistOutput = Record<string, never>;

/**
 * Remove an item from a checklist
 * Deletes an item from a checklist permanently.
 */
export async function removeAnItemFromChecklist(
	this: EndpointFunctionThis,
	payload: {
		input: RemoveAnItemFromChecklistInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<RemoveAnItemFromChecklistOutput> {
	const response = await this.endpointCaller<RemoveAnItemFromChecklistOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'removeAnItemFromChecklist',
		},
		payload,
	);
	return response.output;
}
