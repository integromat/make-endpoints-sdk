// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteProjectVersionInput = {
	/**
	 * The ID of the version to delete.
	 */
	versionId: string;
	/**
	 * The ID of the version to set as `fixVersion` on issues that had the deleted version set. Must be in the same project.
	 */
	moveFixIssuesTo?: string;
	/**
	 * The ID of the version to set as `affectedVersion` on issues that had the deleted version set. Must be in the same project.
	 */
	moveAffectedIssuesTo?: string;
};

export type DeleteProjectVersionOutput = Record<string, never>;

/**
 * Delete project version
 * Deletes a project version.
 */
export async function deleteProjectVersion(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteProjectVersionInput;
		connectionId: number;
	},
): Promise<DeleteProjectVersionOutput> {
	const response = await this.endpointCaller<DeleteProjectVersionOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'deleteProjectVersion',
		},
		payload,
	);
	return response.output;
}
