// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetIssueInput = {
	/**
	 * Identifier of the issue to return. Accepts a UUID or an issue key such as `ENG-123`.
	 */
	issueId: string;
};

export type GetIssueOutput = {
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
};

/**
 * Get an issue
 * Retrieves an existing issue.
 */
export async function getIssue(
	this: EndpointFunctionThis,
	payload: {
		input: GetIssueInput;
		connectionId: number;
	},
): Promise<GetIssueOutput> {
	const response = await this.endpointCaller<GetIssueOutput>(
		{
			appName: 'linear',
			appVersion: 1,
			endpointName: 'getIssue',
		},
		payload,
	);
	return response.output;
}
