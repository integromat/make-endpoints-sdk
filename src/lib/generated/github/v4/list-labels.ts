// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListLabelsInput = {
	/**
	 * The login field of a user or organization.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * The number of items per page. This field is used for pagination.
	 */
	pageLimit?: number;
	/**
	 * Returns the elements in the list that come after the specified cursor.
	 */
	after?: string;
};

export type ListLabelsOutput = {
	data?: {
		repository?: {
			labels?: {
				/**
				 * Identifies the total count of labels in the repository.
				 */
				totalCount?: number;
				pageInfo?: {
					/**
					 * Whether there are more results after the current page.
					 */
					hasNextPage?: boolean;
					/**
					 * The cursor to use in the After field to fetch the next page.
					 */
					endCursor?: string;
				};
				nodes?: {
					/**
					 * The node ID of the label object.
					 */
					id?: string;
					/**
					 * Identifies the label name.
					 */
					name?: string;
					/**
					 * A brief description of this label.
					 */
					description?: string;
					/**
					 * Identifies the label color as a 6 character hex code, without the leading #.
					 */
					color?: string;
					/**
					 * Indicates whether or not this is a default label.
					 */
					isDefault?: boolean;
					/**
					 * Identifies the date and time when the label was created.
					 */
					createdAt?: string;
					/**
					 * Identifies the date and time when the label was last updated.
					 */
					updatedAt?: string;
					/**
					 * The HTTP URL for this label.
					 */
					url?: string;
					/**
					 * The HTTP path for this label.
					 */
					resourcePath?: string;
					issues?: {
						/**
						 * Identifies the total count of issues with this label.
						 */
						totalCount?: number;
					};
					pullRequests?: {
						/**
						 * Identifies the total count of pull requests with this label.
						 */
						totalCount?: number;
					};
				}[];
			};
		};
	};
};

/**
 * List labels
 * Lists the labels of a repository.
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
			appName: 'github',
			appVersion: 4,
			endpointName: 'listLabels',
		},
		payload,
	);
	return response.output;
}
