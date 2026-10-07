// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetProjectVersionsInput = {
	/**
	 * The project ID or project key (case sensitive).
	 */
	projectIdOrKey: string;
	/**
	 * Filter results by a literal string matched against version `name` or `description` (case insensitive).
	 */
	query?: string;
	/**
	 * Filter results by version status.
	 *
	 * Items: A version status.
	 */
	status?: ('' | 'released' | 'unreleased' | 'archived')[];
	/**
	 * Order the results by a field.
	 */
	orderBy?:
		| ''
		| 'description'
		| '-description'
		| 'name'
		| '-name'
		| 'releaseDate'
		| '-releaseDate'
		| 'sequence'
		| '-sequence'
		| 'startDate'
		| '-startDate';
	/**
	 * Comma-separated list of extra details to include in the response, e.g. `operations,issuesstatus,driver`.
	 */
	expand?: string;
	/**
	 * The index of the first item to return (page offset).
	 */
	startAt?: number;
	/**
	 * The maximum number of versions to return per page.
	 */
	maxResults?: number;
};

export type GetProjectVersionsOutput = {
	/**
	 * The URL of the page.
	 */
	self?: string;
	/**
	 * The URL of the next page, if there is one.
	 */
	nextPage?: string;
	/**
	 * The index of the first item returned.
	 */
	startAt?: number;
	/**
	 * The maximum number of items that could be returned.
	 */
	maxResults?: number;
	/**
	 * The number of items returned.
	 */
	total?: number;
	/**
	 * Whether this is the last page of results.
	 */
	isLast?: boolean;
	/**
	 * The list of versions.
	 *
	 * Items: A project version.
	 */
	values?: {
		/**
		 * The ID of the version.
		 */
		id?: string;
		/**
		 * The URL of the version.
		 */
		self?: string;
		/**
		 * The name of the version.
		 */
		name?: string;
		/**
		 * The description of the version.
		 */
		description?: string;
		/**
		 * The ID of the project this version belongs to.
		 */
		projectId?: number;
		/**
		 * Whether the version is archived.
		 */
		archived?: boolean;
		/**
		 * Whether the version is released.
		 */
		released?: boolean;
		/**
		 * Whether the version is overdue.
		 */
		overdue?: boolean;
		/**
		 * The start date of the version.
		 */
		startDate?: string;
		/**
		 * The release date of the version.
		 */
		releaseDate?: string;
	}[];
};

/**
 * Get project versions
 * Returns a paginated list of versions in a project.
 */
export async function getProjectVersions(
	this: EndpointFunctionThis,
	payload: {
		input: GetProjectVersionsInput;
		connectionId: number;
	},
): Promise<GetProjectVersionsOutput> {
	const response = await this.endpointCaller<GetProjectVersionsOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'getProjectVersions',
		},
		payload,
	);
	return response.output;
}
