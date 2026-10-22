// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type EditACommentInACardInput = {
	/**
	 * The ID of the comment action to update.
	 */
	id: string;
	/**
	 * The new text of the comment.
	 */
	value: string;
};

export type EditACommentInACardOutput = {
	/**
	 * The ID of the action.
	 */
	id?: string;
	/**
	 * The ID of the member who caused the action.
	 */
	idMemberCreator?: string;
	/**
	 * Relevant information about the action. The available keys depend on the action type.
	 */
	data?: {
		/**
		 * The text of the comment, for comment actions.
		 */
		text?: string;
		/**
		 * The card the action relates to.
		 */
		card?: {
			/**
			 * The ID of the card.
			 */
			id?: string;
			/**
			 * The name of the card.
			 */
			name?: string;
			/**
			 * The numeric ID of the card, unique within the board.
			 */
			idShort?: number;
			/**
			 * The 8-character short ID of the card.
			 */
			shortLink?: string;
			/**
			 * The ID of the list the card is in.
			 */
			idList?: string;
			/**
			 * Whether the card is archived.
			 */
			closed?: boolean;
			/**
			 * The description of the card.
			 */
			desc?: string;
			/**
			 * The due date of the card.
			 */
			due?: string;
			/**
			 * The position of the card in the list.
			 */
			pos?: number;
		};
		/**
		 * The board the action relates to.
		 */
		board?: {
			/**
			 * The ID of the board.
			 */
			id?: string;
			/**
			 * The name of the board.
			 */
			name?: string;
			/**
			 * The 8-character short ID of the board.
			 */
			shortLink?: string;
		};
		/**
		 * The list the action relates to.
		 */
		list?: {
			/**
			 * The ID of the list.
			 */
			id?: string;
			/**
			 * The name of the list.
			 */
			name?: string;
		};
		/**
		 * The list the card was in before it was moved, for `updateCard:idList` actions.
		 */
		listBefore?: {
			/**
			 * The ID of the list.
			 */
			id?: string;
			/**
			 * The name of the list.
			 */
			name?: string;
		};
		/**
		 * The list the card was moved to, for `updateCard:idList` actions.
		 */
		listAfter?: {
			/**
			 * The ID of the list.
			 */
			id?: string;
			/**
			 * The name of the list.
			 */
			name?: string;
		};
		/**
		 * The previous values of the fields changed by an update action.
		 */
		old?: Record<string, JSONValue>;
	};
	/**
	 * The type of the action. See [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
	 */
	type?: string;
	/**
	 * When the action occurred.
	 */
	date?: string;
	/**
	 * The limits that apply to the action.
	 */
	limits?: {
		/**
		 * The reaction limits of the action.
		 */
		reactions?: {
			/**
			 * The limit of reactions per action.
			 */
			perAction?: {
				/**
				 * The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.
				 */
				status?: string;
				/**
				 * The count at which the limit is reached and the action is disabled.
				 */
				disableAt?: number;
				/**
				 * The count at which a warning is shown.
				 */
				warnAt?: number;
			};
			/**
			 * The limit of unique reactions per action.
			 */
			uniquePerAction?: {
				/**
				 * The limit status: `ok`, `warning`, `disabled`, or `maxExceeded`.
				 */
				status?: string;
				/**
				 * The count at which the limit is reached and the action is disabled.
				 */
				disableAt?: number;
				/**
				 * The count at which a warning is shown.
				 */
				warnAt?: number;
			};
		};
	};
	/**
	 * Information to render the action in a UI. Returned when display is requested.
	 */
	display?: {
		/**
		 * The translation key of the action description.
		 */
		translationKey?: string;
		/**
		 * The entities referenced in the action description, keyed by entity role (for example `card`, `list`, `memberCreator`).
		 */
		entities?: Record<string, JSONValue>;
	};
	/**
	 * The member who caused the action.
	 */
	memberCreator?: {
		/**
		 * The ID of the member who caused the action.
		 */
		id?: string;
		/**
		 * Whether the activity of the member who caused the action is blocked.
		 */
		activityBlocked?: boolean;
		/**
		 * The hash of the avatar of the member who caused the action.
		 */
		avatarHash?: string;
		/**
		 * The URL of the avatar of the member who caused the action.
		 */
		avatarUrl?: string;
		/**
		 * The full name of the member who caused the action.
		 */
		fullName?: string;
		/**
		 * The ID of the member who referred the member who caused the action to Trello.
		 */
		idMemberReferrer?: string;
		/**
		 * The initials of the member who caused the action.
		 */
		initials?: string;
		/**
		 * Profile data with restricted visibility, visible only to members of the same Workspace.
		 */
		nonPublic?: {
			/**
			 * The non-public full name of the member.
			 */
			fullName?: string;
			/**
			 * The non-public initials of the member.
			 */
			initials?: string;
			/**
			 * The URL of the non-public avatar of the member.
			 */
			avatarUrl?: string;
			/**
			 * The hash of the non-public avatar of the member.
			 */
			avatarHash?: string;
		};
		/**
		 * Whether the response contains non-public profile data for the member.
		 */
		nonPublicAvailable?: boolean;
		/**
		 * The username of the member who caused the action.
		 */
		username?: string;
	};
	/**
	 * The member the action relates to, for member-related actions.
	 */
	member?: {
		/**
		 * The ID of the member.
		 */
		id?: string;
		/**
		 * Whether the activity of the member is blocked.
		 */
		activityBlocked?: boolean;
		/**
		 * The hash of the avatar of the member.
		 */
		avatarHash?: string;
		/**
		 * The URL of the avatar of the member.
		 */
		avatarUrl?: string;
		/**
		 * The full name of the member.
		 */
		fullName?: string;
		/**
		 * The ID of the member who referred the member to Trello.
		 */
		idMemberReferrer?: string;
		/**
		 * The initials of the member.
		 */
		initials?: string;
		/**
		 * Profile data with restricted visibility, visible only to members of the same Workspace.
		 */
		nonPublic?: {
			/**
			 * The non-public full name of the member.
			 */
			fullName?: string;
			/**
			 * The non-public initials of the member.
			 */
			initials?: string;
			/**
			 * The URL of the non-public avatar of the member.
			 */
			avatarUrl?: string;
			/**
			 * The hash of the non-public avatar of the member.
			 */
			avatarHash?: string;
		};
		/**
		 * Whether the response contains non-public profile data for the member.
		 */
		nonPublicAvailable?: boolean;
		/**
		 * The username of the member.
		 */
		username?: string;
	};
};

/**
 * Edit a comment in a card
 * Updates the text of a comment on a card.
 */
export async function editAcommentInAcard(
	this: EndpointFunctionThis,
	payload: {
		input: EditACommentInACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EditACommentInACardOutput> {
	const response = await this.endpointCaller<EditACommentInACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'editACommentInACard',
		},
		payload,
	);
	return response.output;
}
