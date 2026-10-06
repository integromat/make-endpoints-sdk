// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateProjectVersionInput = {
	/**
	 * The ID of the project to attach this version to.
	 */
	projectId: number;
	/**
	 * The unique name of the version. Maximum length 255 characters.
	 */
	name: string;
	/**
	 * The description of the version. Maximum size 16,384 bytes.
	 */
	description?: string;
	/**
	 * The start date of the version.
	 */
	startDate?: string;
	/**
	 * The release date of the version.
	 */
	releaseDate?: string;
	/**
	 * Whether the version is archived.
	 */
	archived?: boolean;
	/**
	 * The Atlassian account ID of the version driver.
	 */
	driver?: string;
	/**
	 * Comma-separated list of extra details to include in the response, e.g. `operations,issuesstatus,driver`.
	 */
	expand?: string;
};

export type CreateProjectVersionOutput = {
	/**
	 * The ID of the version.
	 */
	id?: string;
	/**
	 * The URL of the version.
	 */
	self?: string;
	/**
	 * The unique name of the version.
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
	/**
	 * The start date of the version, formatted per the instance's date format.
	 */
	userStartDate?: string;
	/**
	 * The release date of the version, formatted per the instance's date format.
	 */
	userReleaseDate?: string;
	/**
	 * The Atlassian account ID of the version driver.
	 */
	driver?: string;
	/**
	 * The URL of the version that unfixed issues are moved to when this version is released.
	 */
	moveUnfixedIssuesTo?: string;
	/**
	 * The approvers for this version, when `approvers` was requested via `Expand`.
	 *
	 * Items: An approver of this version.
	 */
	approvers?: Record<string, JSONValue>[];
	/**
	 * The operations available for this version, when `operations` was requested via `Expand`.
	 *
	 * Items: An operation available for this version.
	 */
	operations?: Record<string, JSONValue>[];
	/**
	 * Counts of issues in this version per status category, when `issuesstatus` was requested via `Expand`.
	 */
	issuesStatusForFixVersion?: Record<string, JSONValue>;
};

/**
 * Create project version
 * Creates a project version.
 */
export async function createProjectVersion(
	this: EndpointFunctionThis,
	payload: {
		input: CreateProjectVersionInput;
		connectionId: number;
	},
): Promise<CreateProjectVersionOutput> {
	const response = await this.endpointCaller<CreateProjectVersionOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'createProjectVersion',
		},
		payload,
	);
	return response.output;
}
