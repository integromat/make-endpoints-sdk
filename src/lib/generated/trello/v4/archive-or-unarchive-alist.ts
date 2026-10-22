// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ArchiveOrUnarchiveAListInput = {
	/**
	 * The ID of the list to archive or restore.
	 */
	id: string;
	/**
	 * Whether to archive the list. Set to `true` to archive it, `false` to restore it.
	 */
	value: boolean;
};

export type ArchiveOrUnarchiveAListOutput = {
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
 * Archive or unarchive a list
 * Archives or restores a list.
 */
export async function archiveOrUnarchiveAlist(
	this: EndpointFunctionThis,
	payload: {
		input: ArchiveOrUnarchiveAListInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ArchiveOrUnarchiveAListOutput> {
	const response = await this.endpointCaller<ArchiveOrUnarchiveAListOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'archiveOrUnarchiveAList',
		},
		payload,
	);
	return response.output;
}
