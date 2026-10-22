// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAListInput = {
	/**
	 * The ID of the list.
	 */
	id: string;
	/**
	 * The list fields to return. Default: `all`.
	 */
	fields?:
		| ''
		| 'all'
		| 'id'
		| 'name'
		| 'closed'
		| 'idBoard'
		| 'pos'
		| 'subscribed'
		| 'softLimit'
		| 'limits';
};

export type GetAListOutput = {
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
 * Get a list
 * Returns a list.
 */
export async function getAlist(
	this: EndpointFunctionThis,
	payload: {
		input: GetAListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetAListOutput> {
	const response = await this.endpointCaller<GetAListOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'getAList',
		},
		payload,
	);
	return response.output;
}
