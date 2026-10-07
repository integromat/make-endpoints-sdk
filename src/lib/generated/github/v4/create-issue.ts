// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateIssueInput = {
	/**
	 * The node ID of the repository where the issue will be created.
	 */
	repositoryId: string;
	/**
	 * The body (description) for the issue, as markdown.
	 */
	body?: string;
	/**
	 * An array of node IDs of actors (users) to assign to this issue.
	 */
	assigneeIds?: string[];
	/**
	 * An array of node IDs of labels to add to this issue.
	 */
	labelIds?: string[];
	/**
	 * The node ID of the milestone to associate with this issue.
	 */
	milestoneId?: string;
	/**
	 * The name of an issue template in the repository; assigns labels and assignees from the template. Cannot be combined with **Label IDs** or **Assignee IDs**.
	 */
	issueTemplate?: string;
};

export type CreateIssueOutput = {
	data?: {
		createIssue?: {
			issue?: {
				/**
				 * The node ID of the issue object.
				 */
				id?: string;
				/**
				 * Identifies the issue number.
				 */
				number?: number;
				/**
				 * The actor who authored the issue.
				 */
				author?: {
					/**
					 * The username of the actor.
					 */
					login?: string;
					/**
					 * A URL pointing to the actor's public avatar.
					 */
					avatarUrl?: string;
					/**
					 * The HTTP path for this actor.
					 */
					resourcePath?: string;
					/**
					 * The HTTP URL for this actor.
					 */
					url?: string;
				};
				/**
				 * The body as markdown.
				 */
				body?: string;
				/**
				 * The HTTP URL for this issue.
				 */
				url?: string;
				/**
				 * Identifies the date and time when the object was created.
				 */
				createdAt?: string;
				/**
				 * Identifies when the issue was published at.
				 */
				publishedAt?: string;
				/**
				 * Identifies the date and time when the object was last updated.
				 */
				updatedAt?: string;
				/**
				 * The moment the editor made the last edit.
				 */
				lastEditedAt?: string;
				/**
				 * Indicates if the object is closed (definition of closed may depend on type).
				 */
				closed?: boolean;
				/**
				 * Identifies the date and time when the object was closed.
				 */
				closedAt?: string;
			};
		};
	};
};

/**
 * Create an issue
 * Creates a new issue in a repository.
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
			appName: 'github',
			appVersion: 4,
			endpointName: 'createIssue',
		},
		payload,
	);
	return response.output;
}
