// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type EditAChecklistItemInput = {
	/**
	 * The ID or short link of the card the checklist item is on.
	 */
	id: string;
	/**
	 * The ID of the checklist item to update. Find it with `getACardChecklists`.
	 */
	idCheckItem: string;
	/**
	 * The new name of the checklist item.
	 */
	name?: string;
	/**
	 * Whether the checklist item is completed.
	 */
	state?: '' | 'complete' | 'incomplete';
	/**
	 * The ID of the checklist to move the item to.
	 */
	idChecklist?: string;
	/**
	 * The position of the item in the checklist: `top`, `bottom`, or a positive number.
	 */
	pos?: string;
	/**
	 * The due date of the checklist item.
	 */
	due?: string;
	/**
	 * The number of minutes before the due date when a reminder is sent.
	 */
	dueReminder?: number;
	/**
	 * The ID of the member to assign to the checklist item.
	 */
	idMember?: string;
};

export type EditAChecklistItemOutput = {
	/**
	 * The ID of the checklist item.
	 */
	id?: string;
	/**
	 * The ID of the checklist the item belongs to.
	 */
	idChecklist?: string;
	/**
	 * The name of the checklist item.
	 */
	name?: string;
	/**
	 * Data needed to display custom emoji used in the name, if any.
	 */
	nameData?: {
		/**
		 * Custom emoji used in the text, keyed by emoji name.
		 */
		emoji?: Record<string, JSONValue>;
	};
	/**
	 * The state of the item: `complete` or `incomplete`.
	 */
	state?: string;
	/**
	 * The position of the item in the checklist.
	 */
	pos?: number;
	/**
	 * The due date of the item.
	 */
	due?: string;
	/**
	 * The number of minutes before the due date when a reminder is sent.
	 */
	dueReminder?: number;
	/**
	 * The ID of the member assigned to the item.
	 */
	idMember?: string;
};

/**
 * Edit a checklist item
 * Updates a checklist item on a card.
 */
export async function editAchecklistItem(
	this: EndpointFunctionThis,
	payload: {
		input: EditAChecklistItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EditAChecklistItemOutput> {
	const response = await this.endpointCaller<EditAChecklistItemOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'editAChecklistItem',
		},
		payload,
	);
	return response.output;
}
