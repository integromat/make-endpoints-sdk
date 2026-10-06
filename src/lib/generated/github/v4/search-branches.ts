// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchBranchesInput = {
	/**
	 * The login field of a user or organization that owns the repository.
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

export type SearchBranchesOutput = {
	data?: {
		repository?: {
			refs?: {
				/**
				 * Identifies the total count of branches in the repository.
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
					 * The node ID of the ref.
					 */
					id?: string;
					/**
					 * The ref name (e.g. main).
					 */
					name?: string;
					/**
					 * The ref prefix (e.g. refs/heads/).
					 */
					prefix?: string;
					/**
					 * The commit the branch points to.
					 */
					target?: {
						/**
						 * The Git object ID.
						 */
						oid?: string;
						/**
						 * An abbreviated version of the Git object ID.
						 */
						abbreviatedOid?: string;
						/**
						 * The Git commit message.
						 */
						message?: string;
						/**
						 * The Git commit message headline.
						 */
						messageHeadline?: string;
						/**
						 * The datetime when this commit was committed.
						 */
						committedDate?: string;
						/**
						 * The HTTP URL for this commit.
						 */
						url?: string;
					};
				}[];
			};
		};
	};
};

/**
 * Search branches
 * Lists the branches of a repository.
 */
export async function searchBranches(
	this: EndpointFunctionThis,
	payload: {
		input: SearchBranchesInput;
		connectionId: number;
	},
): Promise<SearchBranchesOutput> {
	const response = await this.endpointCaller<SearchBranchesOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'searchBranches',
		},
		payload,
	);
	return response.output;
}
