// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddWatcherInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * The account ID of the user to add as a watcher.
	 */
	accountId: string;
};

export type AddWatcherOutput = Record<string, never>;

/**
 * Add watcher
 * Adds a watcher to an issue.
 */
export async function addWatcher(
	this: EndpointFunctionThis,
	payload: {
		input: AddWatcherInput;
		connectionId: number;
	},
): Promise<AddWatcherOutput> {
	const response = await this.endpointCaller<AddWatcherOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'addWatcher',
		},
		payload,
	);
	return response.output;
}
