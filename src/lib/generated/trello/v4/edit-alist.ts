// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type EditAListInput = {
	/**
	 * The ID of the list to update.
	 */
	id: string;
	/**
	 * The new name of the list.
	 */
	name?: string;
	/**
	 * Whether the list is closed (archived).
	 */
	closed?: boolean;
	/**
	 * The ID of the board to move the list to.
	 */
	idBoard?: string;
	/**
	 * The new position of the list on the board: `top`, `bottom`, or a positive number.
	 */
	pos?: string;
	/**
	 * Whether the authenticated member is subscribed to the list.
	 */
	subscribed?: boolean;
};

export type EditAListOutput = {
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
 * Edit a list
 * Updates the name, position, board, or state of a list.
 */
export async function editAlist(
	this: EndpointFunctionThis,
	payload: {
		input: EditAListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EditAListOutput> {
	const response = await this.endpointCaller<EditAListOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'editAList',
		},
		payload,
	);
	return response.output;
}
