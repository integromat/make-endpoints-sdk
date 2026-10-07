// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetIssueTransitionsInput = {
	/**
	 * The ID or key of the issue, e.g. `10000` or `PROJ-1`.
	 */
	issueIdOrKey: string;
	/**
	 * Use `transitions.fields` to include information about the fields available on each transition's screen.
	 */
	expand?: string;
	/**
	 * Filter the results to only this transition ID.
	 */
	transitionId?: string;
	/**
	 * Whether transitions with the *Hide From User Condition* are included in the response. Available only to Connect/Forge apps with the *Administer Jira* global permission.
	 */
	skipRemoteOnlyCondition?: boolean;
	/**
	 * Whether details of transitions that fail a condition are included in the response.
	 */
	includeUnavailableTransitions?: boolean;
	/**
	 * Whether transitions are sorted by ops-bar sequence value first, then category order (To Do, In Progress, Done), rather than only by ops-bar sequence.
	 */
	sortByOpsBarAndStatus?: boolean;
};

export type GetIssueTransitionsOutput = {
	/**
	 * Expand options that were included in the response.
	 */
	expand?: string;
	/**
	 * The list of transitions available for the issue.
	 *
	 * Items: A transition available for the issue.
	 */
	transitions?: {
		/**
		 * The ID of the transition.
		 */
		id?: string;
		/**
		 * The name of the transition.
		 */
		name?: string;
		/**
		 * The status the transition goes to.
		 */
		to?: {
			/**
			 * The ID of the status.
			 */
			id?: string;
			/**
			 * The name of the status.
			 */
			name?: string;
			/**
			 * The description of the status.
			 */
			description?: string;
			/**
			 * The URL of the icon representing the status.
			 */
			iconUrl?: string;
			/**
			 * The URL of the status.
			 */
			self?: string;
			/**
			 * The category assigned to the status.
			 */
			statusCategory?: Record<string, JSONValue>;
		};
		/**
		 * Whether there is a screen associated with the transition.
		 */
		hasScreen?: boolean;
		/**
		 * Whether the transition applies to issues regardless of their current status.
		 */
		isGlobal?: boolean;
		/**
		 * Whether this is the initial transition for the workflow.
		 */
		isInitial?: boolean;
		/**
		 * Whether the transition is available to be performed.
		 */
		isAvailable?: boolean;
		/**
		 * Whether the issue must meet criteria before the transition can be applied.
		 */
		isConditional?: boolean;
		/**
		 * Whether the transition loops back to the same status.
		 */
		looped?: boolean;
		/**
		 * Details of the fields on the transition screen, when `transitions.fields` is requested via `Expand`. Use this to populate `Fields` on Transition issue.
		 */
		fields?: Record<string, JSONValue>;
	}[];
};

/**
 * Get issue transitions
 * Returns the transitions an issue can currently make.
 */
export async function getIssueTransitions(
	this: EndpointFunctionThis,
	payload: {
		input: GetIssueTransitionsInput;
		connectionId: number;
	},
): Promise<GetIssueTransitionsOutput> {
	const response = await this.endpointCaller<GetIssueTransitionsOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'getIssueTransitions',
		},
		payload,
	);
	return response.output;
}
