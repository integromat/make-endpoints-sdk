// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListHistoryInput = {
	/**
	 * Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous list response.
	 */
	startHistoryId: string;
	/**
	 * Only return messages with a label matching the ID.
	 */
	labelId?: string;
	/**
	 * History types to be returned.
	 */
	historyTypes?: '' | 'messageAdded' | 'messageDeleted' | 'labelAdded' | 'labelRemoved';
	/**
	 * Page token to retrieve a specific page of results in the list.
	 */
	pageToken?: string;
	/**
	 * Maximum number of history records to return.
	 */
	maxResults?: number;
};

export type ListHistoryOutput = {
	/**
	 * List of history records.
	 */
	history?: {
		/**
		 * The mailbox sequence ID.
		 */
		id?: string;
		/**
		 * List of messages changed in this history record.
		 */
		messages?: {
			/**
			 * The immutable ID of the message.
			 */
			id?: string;
			/**
			 * The ID of the thread the message belongs to.
			 */
			threadId?: string;
		}[];
		/**
		 * Messages added to the mailbox in this history record.
		 */
		messagesAdded?: {
			message?: {
				/**
				 * The immutable ID of the message.
				 */
				id?: string;
				/**
				 * The ID of the thread the message belongs to.
				 */
				threadId?: string;
			};
		}[];
		/**
		 * Messages deleted from the mailbox in this history record.
		 */
		messagesDeleted?: {
			message?: {
				/**
				 * The immutable ID of the message.
				 */
				id?: string;
				/**
				 * The ID of the thread the message belongs to.
				 */
				threadId?: string;
			};
		}[];
		/**
		 * Labels added to messages in this history record.
		 */
		labelsAdded?: {
			message?: {
				/**
				 * The immutable ID of the message.
				 */
				id?: string;
				/**
				 * The ID of the thread the message belongs to.
				 */
				threadId?: string;
			};
			labelIds?: string[];
		}[];
		/**
		 * Labels removed from messages in this history record.
		 */
		labelsRemoved?: {
			message?: {
				/**
				 * The immutable ID of the message.
				 */
				id?: string;
				/**
				 * The ID of the thread the message belongs to.
				 */
				threadId?: string;
			};
			labelIds?: string[];
		}[];
	}[];
	/**
	 * Page token to retrieve the next page of results in the list.
	 */
	nextPageToken?: string;
	/**
	 * The ID of the mailbox's current history record.
	 */
	historyId?: string;
};

/**
 * List history
 * Returns a list of the history of all changes to the given mailbox.
 */
export async function listHistory(
	this: EndpointFunctionThis,
	payload: {
		input: ListHistoryInput;
		connectionId: number;
	},
): Promise<ListHistoryOutput> {
	const response = await this.endpointCaller<ListHistoryOutput>(
		{
			appName: 'google-email',
			appVersion: 4,
			endpointName: 'listHistory',
		},
		payload,
	);
	return response.output;
}
