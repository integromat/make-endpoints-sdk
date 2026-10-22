// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateAChecklistInput = {
	/**
	 * The ID of the card to add the checklist to.
	 */
	idCard: string;
	/**
	 * The name of the checklist, 1 to 16384 characters long.
	 */
	name?: string;
	/**
	 * The position of the checklist on the card: `top`, `bottom`, or a positive number.
	 */
	pos?: string;
	/**
	 * The ID of a checklist to copy into the new checklist, including its items.
	 */
	idChecklistSource?: string;
};

export type CreateAChecklistOutput = {
	/**
	 * The ID of the checklist.
	 */
	id?: string;
	/**
	 * The name of the checklist.
	 */
	name?: string;
	/**
	 * The ID of the board the checklist is on.
	 */
	idBoard?: string;
	/**
	 * The ID of the card the checklist is on.
	 */
	idCard?: string;
	/**
	 * The position of the checklist on the card.
	 */
	pos?: number;
	/**
	 * The limits that apply to the checklist.
	 */
	limits?: {
		/**
		 * Checklist item limits.
		 */
		checkItems?: {
			/**
			 * The limit of items per checklist.
			 */
			perChecklist?: {
				/**
				 * The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.
				 */
				status?: string;
				/**
				 * The count at which the limit is reached and the action is disabled.
				 */
				disableAt?: number;
				/**
				 * The count at which a warning is shown.
				 */
				warnAt?: number;
			};
		};
	};
	/**
	 * How the checklist was created.
	 */
	creationMethod?: string;
	/**
	 * The items of the checklist.
	 *
	 * Items: An item of the checklist.
	 */
	checkItems?: {
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
	}[];
};

/**
 * Create a checklist
 * Creates a new checklist on a card.
 */
export async function createAchecklist(
	this: EndpointFunctionThis,
	payload: {
		input: CreateAChecklistInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateAChecklistOutput> {
	const response = await this.endpointCaller<CreateAChecklistOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'createAChecklist',
		},
		payload,
	);
	return response.output;
}
