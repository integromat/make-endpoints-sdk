// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetACardChecklistsInput = {
	/**
	 * The ID or short link of the card.
	 */
	id: string;
	/**
	 * Which checklists to return. Default: `all`.
	 */
	filter?: '' | 'all' | 'none';
	/**
	 * The checklist fields to return. Default: `all`.
	 */
	fields?: '' | 'all' | 'idBoard' | 'idCard' | 'name' | 'pos';
	/**
	 * Whether to return the items of each checklist. Default: `all`.
	 */
	checkItems?: '' | 'all' | 'none';
	/**
	 * The fields of the checklist items to return when checklist items are requested. Default: `name`, `nameData`, `pos`, `state`, `due`, `dueReminder`, `idMember`.
	 */
	checkItem_fields?:
		| ''
		| 'all'
		| 'name'
		| 'nameData'
		| 'pos'
		| 'state'
		| 'type'
		| 'due'
		| 'dueReminder'
		| 'idMember';
};

export type GetACardChecklistsOutput = {
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
 * Get card checklists
 * Lists the checklists on a card.
 */
export async function getAcardChecklists(
	this: EndpointFunctionThis,
	payload: {
		input: GetACardChecklistsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetACardChecklistsOutput> {
	const response = await this.endpointCaller<GetACardChecklistsOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'getACardChecklists',
		},
		payload,
	);
	return response.output;
}
