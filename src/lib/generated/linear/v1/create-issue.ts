// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateIssueInput = {
	/**
	 * Unique identifier of the team to create the issue in.
	 */
	teamId: string;
	/**
	 * Unique identifier of the user to assign the issue to.
	 */
	assigneeId?: string;
	/**
	 * Unique identifier of the cycle to associate with the issue.
	 */
	cycleId?: string;
	/**
	 * Position of the issue in its column on the board.
	 */
	boardOrder?: number;
	/**
	 * Issue description in markdown.
	 */
	description?: string;
	/**
	 * Date the issue is due, as a date-only string in `YYYY-MM-DD` format. For example, `2026-10-21`.
	 */
	dueDate?: string;
	/**
	 * Estimated complexity of the issue.
	 */
	estimate?: number;
	/**
	 * UUID to assign to the new issue. Omit it and Linear generates one.
	 */
	id?: string;
	/**
	 * Unique identifiers of the labels to attach to the new issue.
	 *
	 * Items: Unique identifier of one label.
	 */
	labelIds?: string[];
	/**
	 * Unique identifier of the parent issue, when creating a sub-issue.
	 */
	parentId?: string;
	/**
	 * Priority of the issue. 0 is no priority, 1 is urgent, 2 is high, 3 is medium, and 4 is low.
	 */
	priority?: '' | 0 | 1 | 2 | 3 | 4;
	/**
	 * Unique identifier of the project to associate with the issue.
	 */
	projectId?: string;
	/**
	 * Unique identifier of the comment this issue references.
	 */
	referenceCommentId?: string;
	/**
	 * Position of the issue relative to other issues.
	 */
	sortOrder?: number;
	/**
	 * Position of the issue in its parent's sub-issue list.
	 */
	subIssueSortOrder?: number;
	/**
	 * Unique identifiers of the users to subscribe to the new issue.
	 *
	 * Items: Unique identifier of one subscriber.
	 */
	subscriberIds?: string[];
};

export type CreateIssueOutput = {
	/**
	 * Unique identifier of the created issue.
	 */
	id?: string;
	/**
	 * Estimated complexity of the created issue. Empty when no estimate was set.
	 */
	estimate?: number;
	/**
	 * Issue description in markdown. Empty when no description was set.
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
	 * Labels attached to the created issue.
	 */
	labels?: {
		/**
		 * Labels returned for this issue.
		 *
		 * Items: One label attached to the issue.
		 */
		nodes?: {
			/**
			 * Unique identifier of the label.
			 */
			id?: string;
		}[];
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
 * Create an issue
 * Creates a new issue.
 */
export async function createIssue(
	this: EndpointFunctionThis,
	payload: {
		input: CreateIssueInput;
		connectionId: number;
	},
): Promise<CreateIssueOutput> {
	const response = await this.endpointCaller<CreateIssueOutput>(
		{
			appName: 'linear',
			appVersion: 1,
			endpointName: 'createIssue',
		},
		payload,
	);
	return response.output;
}
