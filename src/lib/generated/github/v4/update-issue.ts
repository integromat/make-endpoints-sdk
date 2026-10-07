// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateIssueInput = {
	/**
	 * The node ID of the issue to modify.
	 */
	id: string;
	/**
	 * The new body (description) for the issue, as markdown.
	 */
	body?: string;
	/**
	 * The desired issue state.
	 */
	state?: '' | 'OPEN' | 'CLOSED';
	/**
	 * An array of node IDs of actors (users) to set as assignees. Replaces the current assignees.
	 */
	assigneeIds?: string[];
	/**
	 * An array of node IDs of labels to set on this issue. Replaces the current labels.
	 */
	labelIds?: string[];
	/**
	 * The node ID of the milestone to associate with this issue.
	 */
	milestoneId?: string;
};

export type UpdateIssueOutput = {
	data?: {
		updateIssue?: {
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
 * Update an issue
 * Updates an existing issue.
 */
export async function updateIssue(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateIssueInput;
		connectionId: number;
	},
): Promise<UpdateIssueOutput> {
	const response = await this.endpointCaller<UpdateIssueOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'updateIssue',
		},
		payload,
	);
	return response.output;
}
