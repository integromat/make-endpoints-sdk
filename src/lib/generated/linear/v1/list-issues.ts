// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListIssuesInput = {
	/**
	 * Number of issues to return in this call. Must be from 1 to 50. Defaults to 50.
	 */
	first?: number;
	/**
	 * Pagination cursor returned as `endCursor` by a previous call to this endpoint. Omit it to fetch the first page.
	 */
	after?: string;
};

export type ListIssuesOutput = {
	/**
	 * Issues returned in this page.
	 *
	 * Items: One issue.
	 */
	nodes?: {
		/**
		 * Unique identifier of the issue.
		 */
		id?: string;
		/**
		 * Date the issue is due, in `YYYY-MM-DD` format. Empty when no due date is set.
		 */
		dueDate?: string;
		/**
		 * Estimated complexity of the issue. Empty when no estimate is set.
		 */
		estimate?: number;
		/**
		 * Issue description in markdown. Empty when no description is set.
		 */
		description?: string;
		/**
		 * Parent issue, when this issue is a sub-issue.
		 */
		parent?: {
			/**
			 * Unique identifier of the parent issue.
			 */
			id?: string;
		};
		/**
		 * Team the issue belongs to.
		 */
		team?: {
			/**
			 * Unique identifier of the team.
			 */
			id?: string;
			/**
			 * Name of the team.
			 */
			name?: string;
		};
		/**
		 * Users subscribed to the issue.
		 */
		subscribers?: {
			/**
			 * Subscribers returned for this issue.
			 *
			 * Items: A user subscribed to the issue.
			 */
			nodes?: {
				/**
				 * Unique identifier of the subscriber.
				 */
				id?: string;
				/**
				 * Email address of the subscriber.
				 */
				email?: string;
				/**
				 * Name of the subscriber.
				 */
				name?: string;
				/**
				 * Date and time the subscriber was last updated.
				 */
				updatedAt?: string;
			}[];
		};
	}[];
	/**
	 * Whether another page of issues exists. When true, pass `endCursor` back as `after`.
	 */
	hasNextPage?: boolean;
	/**
	 * Cursor for the next page. Pass it as `after` on the next call when `hasNextPage` is true.
	 */
	endCursor?: string;
};

/**
 * List issues
 * Retrieves one page of issues.
 */
export async function listIssues(
	this: EndpointFunctionThis,
	payload: {
		input: ListIssuesInput;
		connectionId: number;
	},
): Promise<ListIssuesOutput> {
	const response = await this.endpointCaller<ListIssuesOutput>(
		{
			appName: 'linear',
			appVersion: 1,
			endpointName: 'listIssues',
		},
		payload,
	);
	return response.output;
}
