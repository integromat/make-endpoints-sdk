// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type WatchMailboxInput = {
	/**
	 * A fully qualified Google Cloud Pub/Sub API topic name to publish the events to.
	 */
	topicName: string;
	/**
	 * List of label IDs to restrict notifications about.
	 */
	labelIds?: string[];
	/**
	 * Filtering behavior of label IDs list specified.
	 */
	labelFilterBehavior?: '' | 'include' | 'exclude';
};

export type WatchMailboxOutput = {
	/**
	 * The ID of the mailbox's current history record.
	 */
	historyId?: string;
	/**
	 * When Gmail will stop sending notifications for mailbox updates.
	 */
	expiration?: string;
};

/**
 * Watch mailbox
 * Set up or update a push notification watch on the given user's mailbox.
 */
export async function watchMailbox(
	this: EndpointFunctionThis,
	payload: {
		input: WatchMailboxInput;
		connectionId: number;
	},
): Promise<WatchMailboxOutput> {
	const response = await this.endpointCaller<WatchMailboxOutput>(
		{
			appName: 'google-email',
			appVersion: 4,
			endpointName: 'watchMailbox',
		},
		payload,
	);
	return response.output;
}
