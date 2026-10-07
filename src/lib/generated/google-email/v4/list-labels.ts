// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListLabelsInput = Record<string, never>;

export type ListLabelsOutput = {
	/**
	 * List of labels.
	 */
	labels?: {
		/**
		 * The immutable ID of the label.
		 */
		id?: string;
		/**
		 * The display name of the label.
		 */
		name?: string;
		/**
		 * The visibility of messages with this label in the message list in the Gmail web interface.
		 */
		messageListVisibility?: string;
		/**
		 * The visibility of the label in the label list in the Gmail web interface.
		 */
		labelListVisibility?: string;
		/**
		 * The owner type for the label.
		 */
		type?: string;
		/**
		 * The total number of messages with the label.
		 */
		messagesTotal?: number;
		/**
		 * The number of unread messages with the label.
		 */
		messagesUnread?: number;
		/**
		 * The total number of threads with the label.
		 */
		threadsTotal?: number;
		/**
		 * The number of unread threads with the label.
		 */
		threadsUnread?: number;
		/**
		 * The color to assign to the label.
		 */
		color?: {
			/**
			 * The text color of the label, represented as hex string.
			 */
			textColor?: string;
			/**
			 * The background color represented as hex string.
			 */
			backgroundColor?: string;
		};
	}[];
};

/**
 * List labels
 * Returns a list of labels.
 */
export async function listLabels(
	this: EndpointFunctionThis,
	payload: {
		input: ListLabelsInput;
		connectionId: number;
	},
): Promise<ListLabelsOutput> {
	const response = await this.endpointCaller<ListLabelsOutput>(
		{
			appName: 'google-email',
			appVersion: 4,
			endpointName: 'listLabels',
		},
		payload,
	);
	return response.output;
}
