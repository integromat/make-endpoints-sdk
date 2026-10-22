// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateAListInput = {
	/**
	 * The long ID of the board to create the list on.
	 */
	idBoard: string;
	/**
	 * The name of the list.
	 */
	name: string;
	/**
	 * The ID of a list to copy into the new list, including its cards.
	 */
	idListSource?: string;
	/**
	 * The position of the list on the board: `top`, `bottom`, or a positive number.
	 */
	pos?: string;
};

export type CreateAListOutput = {
	/**
	 * The ID of the list.
	 */
	id?: string;
	/**
	 * The name of the list.
	 */
	name?: string;
	/**
	 * Whether the list is closed (archived).
	 */
	closed?: boolean;
	/**
	 * The ID of the board the list is on.
	 */
	idBoard?: string;
	/**
	 * The position of the list on the board.
	 */
	pos?: number;
	/**
	 * Whether the current member is subscribed to the list.
	 */
	subscribed?: boolean;
	/**
	 * The soft limit of cards in the list, if set.
	 */
	softLimit?: number;
	/**
	 * How the list was created.
	 */
	creationMethod?: string;
	/**
	 * The limits that apply to the list.
	 */
	limits?: {
		/**
		 * Card limits of the list.
		 */
		cards?: {
			/**
			 * The limit of open cards per list.
			 */
			openPerList?: {
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
			/**
			 * The limit of all cards per list.
			 */
			totalPerList?: {
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
};

/**
 * Create a list
 * Creates a new list on a board.
 */
export async function createAlist(
	this: EndpointFunctionThis,
	payload: {
		input: CreateAListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateAListOutput> {
	const response = await this.endpointCaller<CreateAListOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'createAList',
		},
		payload,
	);
	return response.output;
}
