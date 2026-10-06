// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteWatcherInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * The account ID of the user to remove as a watcher.
	 */
	accountId: string;
};

export type DeleteWatcherOutput = Record<string, never>;

/**
 * Delete watcher
 * Removes a watcher from an issue.
 */
export async function deleteWatcher(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteWatcherInput;
		connectionId: number;
	},
): Promise<DeleteWatcherOutput> {
	const response = await this.endpointCaller<DeleteWatcherOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'deleteWatcher',
		},
		payload,
	);
	return response.output;
}
