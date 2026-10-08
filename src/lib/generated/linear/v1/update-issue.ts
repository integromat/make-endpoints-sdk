// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateIssueInput = {
	/**
	 * Identifier of the issue to update. Accepts a UUID or an issue key such as `ENG-123`.
	 */
	issueId: string;
	/**
	 * Unique identifier of the user to assign the issue to.
	 */
	assigneeId?: string;
	/**
	 * Unique identifier of the cycle to associate with the issue.
	 */
	cycleId?: string;
	/**
	 * Issue description in markdown. Omit it to leave the description unchanged.
	 */
	description?: string;
	/**
	 * Date the issue is due, as a date-only string in `YYYY-MM-DD` format. For example, `2026-10-21`.
	 */
	dueDate?: string;
	/**
	 * Estimated complexity of the issue.
	 */
	estimate?: number;
	/**
	 * Unique identifiers of the labels to set on the issue. Sending this list replaces the issue's labels. Omit it to leave labels unchanged.
	 *
	 * Items: Unique identifier of one label.
	 */
	labelIds?: string[];
	/**
	 * Unique identifier of the parent issue.
	 */
	parentId?: string;
	/**
	 * Priority of the issue. 0 is no priority, 1 is urgent, 2 is high, 3 is medium, and 4 is low.
	 */
	priority?: '' | 0 | 1 | 2 | 3 | 4;
	/**
	 * Unique identifier of the project to associate with the issue.
	 */
	projectId?: string;
	/**
	 * Unique identifier of the user who snoozed the issue.
	 */
	snoozedById?: string;
	/**
	 * Date and time until which the issue stays snoozed in Triage.
	 */
	snoozedUntilAt?: string;
	/**
	 * Position of the issue relative to other issues.
	 */
	sortOrder?: number;
	/**
	 * Position of the issue in its parent's sub-issue list.
	 */
	subIssueSortOrder?: number;
	/**
	 * Unique identifier of the workflow state to move the issue to.
	 */
	stateId?: string;
	/**
	 * Unique identifiers of the users subscribed to the issue. Sending this list replaces the subscribers. Omit it to leave subscribers unchanged.
	 *
	 * Items: Unique identifier of one subscriber.
	 */
	subscriberIds?: string[];
	/**
	 * Unique identifier of the team to move the issue to.
	 */
	teamId?: string;
	/**
	 * Leave empty to keep the current trash status. Move to trash sends the issue to trash. Restore from trash takes the issue out of trash.
	 */
	trashed?: '' | 'trash' | 'restore';
};

export type UpdateIssueOutput = {
	/**
	 * Unique identifier of the issue.
	 */
	id?: string;
	/**
	 * Human-readable issue key, such as `ENG-123`.
	 */
	identifier?: string;
	/**
	 * Issue number within the team.
	 */
	number?: number;
	/**
	 * Issue description in markdown.
	 */
	description?: string;
	/**
	 * URL of the issue in Linear.
	 */
	url?: string;
	/**
	 * Suggested Git branch name for the issue.
	 */
	branchName?: string;
	/**
	 * Priority number. 0 is no priority, 1 is urgent, 2 is high, 3 is medium, and 4 is low.
	 */
	priority?: number;
	/**
	 * Priority as a label, such as `High`.
	 */
	priorityLabel?: string;
	/**
	 * Sort position of the issue among issues with the same priority.
	 */
	prioritySortOrder?: number;
	/**
	 * Position of the issue relative to other issues.
	 */
	sortOrder?: number;
	/**
	 * Position of the issue in its parent's sub-issue list.
	 */
	subIssueSortOrder?: number;
	/**
	 * Estimated complexity of the issue.
	 */
	estimate?: number;
	/**
	 * Date the issue is due, in `YYYY-MM-DD` format. Empty when no due date is set.
	 */
	dueDate?: string;
	/**
	 * Whether the issue is in trash.
	 */
	trashed?: boolean;
	/**
	 * Number of customer tickets linked to the issue.
	 */
	customerTicketCount?: number;
	/**
	 * Whether the issue inherits shared access from its parent.
	 */
	inheritsSharedAccess?: boolean;
	/**
	 * Source type of the integration that created the issue, when it was created outside Linear.
	 */
	integrationSourceType?: string;
	/**
	 * Unique identifiers of the labels on the issue.
	 *
	 * Items: Unique identifier of one label.
	 */
	labelIds?: string[];
	/**
	 * Previous issue keys, after the issue moved between teams.
	 *
	 * Items: A previous issue key, such as `ENG-123`.
	 */
	previousIdentifiers?: string[];
	/**
	 * Raw reaction summary returned by Linear.
	 */
	reactionData?: Record<string, JSONValue>;
	/**
	 * Date and time the issue was created.
	 */
	createdAt?: string;
	/**
	 * Date and time the issue was last updated.
	 */
	updatedAt?: string;
	/**
	 * Date and time the issue was archived. Empty when the issue is not archived.
	 */
	archivedAt?: string;
	/**
	 * Date and time work on the issue started.
	 */
	startedAt?: string;
	/**
	 * Date and time the issue was completed.
	 */
	completedAt?: string;
	/**
	 * Date and time the issue was canceled.
	 */
	canceledAt?: string;
	/**
	 * Date and time the issue was auto-archived.
	 */
	autoArchivedAt?: string;
	/**
	 * Date and time the issue was auto-closed.
	 */
	autoClosedAt?: string;
	/**
	 * Date and time the issue was triaged.
	 */
	triagedAt?: string;
	/**
	 * Date and time triage of the issue started.
	 */
	startedTriageAt?: string;
	/**
	 * Date and time until which the issue stays snoozed.
	 */
	snoozedUntilAt?: string;
	/**
	 * Date and time the issue was added to its current cycle.
	 */
	addedToCycleAt?: string;
	/**
	 * Date and time the issue was added to its current project.
	 */
	addedToProjectAt?: string;
	/**
	 * Date and time the issue was added to its current team.
	 */
	addedToTeamAt?: string;
	/**
	 * SLA type applied to the issue.
	 */
	slaType?: string;
	/**
	 * Date and time the SLA clock started.
	 */
	slaStartedAt?: string;
	/**
	 * Date and time the SLA breaches.
	 */
	slaBreachesAt?: string;
	/**
	 * Date and time the issue enters the high SLA risk window.
	 */
	slaHighRiskAt?: string;
	/**
	 * Date and time the issue enters the medium SLA risk window.
	 */
	slaMediumRiskAt?: string;
	/**
	 * Workflow state of the issue.
	 */
	state?: {
		/**
		 * Unique identifier of the workflow state.
		 */
		id?: string;
		/**
		 * Name of the workflow state.
		 */
		name?: string;
		/**
		 * Workflow category of the state, such as `started` or `completed`.
		 */
		type?: string;
		/**
		 * Color of the workflow state.
		 */
		color?: string;
		/**
		 * Position of the state in the workflow.
		 */
		position?: number;
		/**
		 * Description of the workflow state.
		 */
		description?: string;
	};
	/**
	 * Team the issue belongs to.
	 */
	team?: {
		/**
		 * Unique identifier of the team.
		 */
		id?: string;
		/**
		 * Short key used in issue identifiers, such as `ENG`.
		 */
		key?: string;
		/**
		 * Name of the team.
		 */
		name?: string;
		/**
		 * Display name of the team.
		 */
		displayName?: string;
		/**
		 * Description of the team.
		 */
		description?: string;
		/**
		 * Icon of the team.
		 */
		icon?: string;
		/**
		 * Color of the team.
		 */
		color?: string;
	};
	/**
	 * User assigned to the issue.
	 */
	assignee?: {
		/**
		 * Unique identifier of the assignee.
		 */
		id?: string;
		/**
		 * Name of the assignee.
		 */
		name?: string;
		/**
		 * Display name of the assignee.
		 */
		displayName?: string;
		/**
		 * Email address of the assignee.
		 */
		email?: string;
		/**
		 * URL of the assignee's avatar.
		 */
		avatarUrl?: string;
		/**
		 * Whether the assignee is active.
		 */
		active?: boolean;
	};
	/**
	 * User who created the issue.
	 */
	creator?: {
		/**
		 * Unique identifier of the creator.
		 */
		id?: string;
		/**
		 * Name of the creator.
		 */
		name?: string;
		/**
		 * Display name of the creator.
		 */
		displayName?: string;
		/**
		 * Email address of the creator.
		 */
		email?: string;
		/**
		 * URL of the creator's avatar.
		 */
		avatarUrl?: string;
		/**
		 * Whether the creator is active.
		 */
		active?: boolean;
	};
	/**
	 * User or agent the issue is delegated to.
	 */
	delegate?: {
		/**
		 * Unique identifier of the delegate.
		 */
		id?: string;
		/**
		 * Name of the delegate.
		 */
		name?: string;
		/**
		 * Display name of the delegate.
		 */
		displayName?: string;
		/**
		 * Email address of the delegate.
		 */
		email?: string;
		/**
		 * URL of the delegate's avatar.
		 */
		avatarUrl?: string;
		/**
		 * Whether the delegate is active.
		 */
		active?: boolean;
	};
	/**
	 * User who snoozed the issue.
	 */
	snoozedBy?: {
		/**
		 * Unique identifier of the user who snoozed the issue.
		 */
		id?: string;
		/**
		 * Name of the user who snoozed the issue.
		 */
		name?: string;
		/**
		 * Display name of the user who snoozed the issue.
		 */
		displayName?: string;
		/**
		 * Email address of the user who snoozed the issue.
		 */
		email?: string;
		/**
		 * URL of the avatar of the user who snoozed the issue.
		 */
		avatarUrl?: string;
		/**
		 * Whether the user who snoozed the issue is active.
		 */
		active?: boolean;
	};
	/**
	 * External user who created the issue, when it was created from outside Linear.
	 */
	externalUserCreator?: {
		/**
		 * Unique identifier of the external user.
		 */
		id?: string;
		/**
		 * Name of the external user.
		 */
		name?: string;
		/**
		 * Display name of the external user.
		 */
		displayName?: string;
		/**
		 * Email address of the external user.
		 */
		email?: string;
		/**
		 * URL of the external user's avatar.
		 */
		avatarUrl?: string;
	};
	/**
	 * Bot that acted on the issue.
	 */
	botActor?: {
		/**
		 * Unique identifier of the bot.
		 */
		id?: string;
		/**
		 * Name of the bot.
		 */
		name?: string;
		/**
		 * Type of the bot actor.
		 */
		type?: string;
		/**
		 * Sub-type of the bot actor.
		 */
		subType?: string;
		/**
		 * URL of the bot's avatar.
		 */
		avatarUrl?: string;
		/**
		 * Display name shown for the bot's user.
		 */
		userDisplayName?: string;
	};
	/**
	 * Parent issue, when this issue is a sub-issue.
	 */
	parent?: {
		/**
		 * Unique identifier of the parent issue.
		 */
		id?: string;
		/**
		 * Issue key of the parent, such as `ENG-123`.
		 */
		identifier?: string;
		/**
		 * URL of the parent issue in Linear.
		 */
		url?: string;
	};
	/**
	 * Project the issue belongs to.
	 */
	project?: {
		/**
		 * Unique identifier of the project.
		 */
		id?: string;
		/**
		 * Name of the project.
		 */
		name?: string;
		/**
		 * Description of the project.
		 */
		description?: string;
		/**
		 * Slug identifier of the project.
		 */
		slugId?: string;
		/**
		 * URL of the project in Linear.
		 */
		url?: string;
	};
	/**
	 * Project milestone the issue belongs to.
	 */
	projectMilestone?: {
		/**
		 * Unique identifier of the project milestone.
		 */
		id?: string;
		/**
		 * Name of the project milestone.
		 */
		name?: string;
		/**
		 * Target date of the project milestone.
		 */
		targetDate?: string;
	};
	/**
	 * Cycle the issue belongs to.
	 */
	cycle?: {
		/**
		 * Unique identifier of the cycle.
		 */
		id?: string;
		/**
		 * Cycle number.
		 */
		number?: number;
		/**
		 * Name of the cycle.
		 */
		name?: string;
		/**
		 * Date and time the cycle starts.
		 */
		startsAt?: string;
		/**
		 * Date and time the cycle ends.
		 */
		endsAt?: string;
	};
	/**
	 * Template last applied to the issue.
	 */
	lastAppliedTemplate?: {
		/**
		 * Unique identifier of the template.
		 */
		id?: string;
		/**
		 * Name of the template.
		 */
		name?: string;
		/**
		 * Type of the template.
		 */
		type?: string;
	};
	/**
	 * Recurring template that created the issue, when the issue is recurring.
	 */
	recurringIssueTemplate?: {
		/**
		 * Unique identifier of the recurring template.
		 */
		id?: string;
		/**
		 * Name of the recurring template.
		 */
		name?: string;
		/**
		 * Type of the recurring template.
		 */
		type?: string;
	};
	/**
	 * Comment that the issue was created from.
	 */
	sourceComment?: {
		/**
		 * Unique identifier of the source comment.
		 */
		id?: string;
		/**
		 * Body of the source comment.
		 */
		body?: string;
		/**
		 * URL of the source comment in Linear.
		 */
		url?: string;
	};
	/**
	 * Shared-access settings for the issue.
	 */
	sharedAccess?: {
		/**
		 * Whether the issue is shared outside the workspace.
		 */
		isShared?: boolean;
		/**
		 * Number of external parties the issue is shared with.
		 */
		sharedWithCount?: number;
		/**
		 * Whether the current viewer has only shared access to the issue.
		 */
		viewerHasOnlySharedAccess?: boolean;
		/**
		 * Issue fields hidden from viewers who have only shared access.
		 *
		 * Items: Name of one field hidden from shared-access viewers.
		 */
		disallowedIssueFields?: string[];
	};
	/**
	 * External entities this issue is synced with.
	 */
	syncedWith?: {
		/**
		 * Identifier of the external entity.
		 */
		id?: string;
		/**
		 * External service the issue is synced with.
		 */
		service?: string;
	}[];
	/**
	 * Labels on the issue.
	 */
	labels?: {
		/**
		 * Labels returned for this issue.
		 */
		nodes?: {
			/**
			 * Unique identifier of the label.
			 */
			id?: string;
			/**
			 * Name of the label.
			 */
			name?: string;
			/**
			 * Color of the label.
			 */
			color?: string;
			/**
			 * Description of the label.
			 */
			description?: string;
			/**
			 * Whether the label is a group that contains other labels.
			 */
			isGroup?: boolean;
			/**
			 * Parent label group, when this label is nested.
			 */
			parent?: {
				/**
				 * Unique identifier of the parent label.
				 */
				id?: string;
				/**
				 * Name of the parent label.
				 */
				name?: string;
			};
		}[];
	};
	/**
	 * Users subscribed to the issue.
	 */
	subscribers?: {
		/**
		 * Subscribers returned for this issue.
		 */
		nodes?: {
			/**
			 * Unique identifier of the subscriber.
			 */
			id?: string;
			/**
			 * Name of the subscriber.
			 */
			name?: string;
			/**
			 * Display name of the subscriber.
			 */
			displayName?: string;
			/**
			 * Email address of the subscriber.
			 */
			email?: string;
			/**
			 * URL of the subscriber's avatar.
			 */
			avatarUrl?: string;
			/**
			 * Whether the subscriber is active.
			 */
			active?: boolean;
		}[];
	};
	/**
	 * Emoji reactions on the issue.
	 */
	reactions?: {
		/**
		 * Unique identifier of the reaction.
		 */
		id?: string;
		/**
		 * Emoji used for the reaction.
		 */
		emoji?: string;
		/**
		 * Date and time the reaction was added.
		 */
		createdAt?: string;
		/**
		 * User who added the reaction.
		 */
		user?: {
			/**
			 * Unique identifier of the user who added the reaction.
			 */
			id?: string;
			/**
			 * Name of the user who added the reaction.
			 */
			name?: string;
			/**
			 * Display name of the user who added the reaction.
			 */
			displayName?: string;
		};
	}[];
};

/**
 * Update an issue
 * Updates an existing issue.
 */
export async function updateIssue(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateIssueInput;
		connectionId: number;
	},
): Promise<UpdateIssueOutput> {
	const response = await this.endpointCaller<UpdateIssueOutput>(
		{
			appName: 'linear',
			appVersion: 1,
			endpointName: 'updateIssue',
		},
		payload,
	);
	return response.output;
}
