// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetIssueWatchersInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
};

export type GetIssueWatchersOutput = {
	/**
	 * Whether the calling user is watching this issue.
	 */
	isWatching?: boolean;
	/**
	 * The URL of these issue watcher details.
	 */
	self?: string;
	/**
	 * The number of users watching this issue.
	 */
	watchCount?: number;
	/**
	 * Details of the users watching this issue.
	 *
	 * Items: A user watching this issue.
	 */
	watchers?: {
		/**
		 * The account ID of the user.
		 */
		accountId?: string;
		/**
		 * The type of account: `atlassian`, `app`, or `customer`.
		 */
		accountType?: string;
		/**
		 * Whether the user is active.
		 */
		active?: boolean;
		/**
		 * The display name of the user.
		 */
		displayName?: string;
		/**
		 * The email address of the user.
		 */
		emailAddress?: string;
		/**
		 * The URL of the user.
		 */
		self?: string;
		/**
		 * The time zone of the user.
		 */
		timeZone?: string;
	}[];
};

/**
 * Get issue watchers
 * Returns the watchers of an issue.
 */
export async function getIssueWatchers(
	this: EndpointFunctionThis,
	payload: {
		input: GetIssueWatchersInput;
		connectionId: number;
	},
): Promise<GetIssueWatchersOutput> {
	const response = await this.endpointCaller<GetIssueWatchersOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'getIssueWatchers',
		},
		payload,
	);
	return response.output;
}
