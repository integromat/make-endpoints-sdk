// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetIssueInput = {
	/**
	 * The login field of a user or organization.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * The number of the issue.
	 */
	issueNumber: string;
};

export type GetIssueOutput = {
	data?: {
		repository?: {
			issue?: {
				/**
				 * The node ID of the issue object.
				 */
				id?: string;
				/**
				 * The actor who authored the comment.
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
			appName: 'github',
			appVersion: 4,
			endpointName: 'getIssue',
		},
		payload,
	);
	return response.output;
}
