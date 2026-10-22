// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateChecklistItemInput = {
	/**
	 * The ID of the checklist to add the item to.
	 */
	id: string;
	/**
	 * The name of the checklist item, 1 to 16384 characters long.
	 */
	name: string;
	/**
	 * The position of the item in the checklist: `top`, `bottom`, or a positive number. Default: `bottom`.
	 */
	pos?: string;
	/**
	 * Whether the item is already checked when it is created. Default: `false`.
	 */
	checked?: boolean;
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

export type CreateChecklistItemOutput = {
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
 * Create a checklist item
 * Adds an item to a checklist.
 */
export async function createChecklistItem(
	this: EndpointFunctionThis,
	payload: {
		input: CreateChecklistItemInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateChecklistItemOutput> {
	const response = await this.endpointCaller<CreateChecklistItemOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'createChecklistItem',
		},
		payload,
	);
	return response.output;
}
