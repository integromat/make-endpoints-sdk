// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type TransitionIssueInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * The transition to perform.
	 */
	transition: {
		/**
		 * The ID of the transition. Get available transition IDs from Get issue transitions.
		 */
		id: string;
	};
	/**
	 * Fields to set on the transition screen, as a JSON object mapping field ID (or key) to its value, e.g. `{"resolution": {"id": "10000"}}`. A field that isn't on the transition screen cannot be set here.
	 */
	fields?: Record<string, JSONValue>;
	/**
	 * A JSON object mapping field name to a list of field modification operations (`add`, `set`, `remove`). A field cannot be present in both `Fields` and `Update`.
	 */
	update?: Record<string, JSONValue>;
	/**
	 * Additional issue history details to record with this transition, as a JSON object (`type`, `description`, `activityDescription`, `actor`, `generator`, `cause`, `extraData`, etc.).
	 */
	historyMetadata?: Record<string, JSONValue>;
};

export type TransitionIssueOutput = Record<string, never>;

/**
 * Transition issue
 * Performs a workflow transition on an issue.
 */
export async function transitionIssue(
	this: EndpointFunctionThis,
	payload: {
		input: TransitionIssueInput;
		connectionId: number;
	},
): Promise<TransitionIssueOutput> {
	const response = await this.endpointCaller<TransitionIssueOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'transitionIssue',
		},
		payload,
	);
	return response.output;
}
