// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateABoardInput = {
	/**
	 * The name of the board, 1 to 16384 characters long.
	 */
	name: string;
	/**
	 * The ID or name of the workspace the board should belong to.
	 */
	idOrganization?: string;
	/**
	 * The description of the board, up to 16384 characters long.
	 */
	desc?: string;
	/**
	 * The ID of a board to copy into the new board.
	 */
	idBoardSource?: string;
	/**
	 * What to keep from the source board when `idBoardSource` is set. Use `cards` to keep the cards. Default: `none`.
	 */
	keepFromSource?: '' | 'cards' | 'none';
	/**
	 * The power-ups to enable on the new board.
	 */
	powerUps?: '' | 'all' | 'calendar' | 'cardAging' | 'recap' | 'voting';
	/**
	 * Whether to use the default set of labels. Default: `true`.
	 */
	defaultLabels?: boolean;
	/**
	 * Whether to add the default set of lists (To Do, Doing, Done). Ignored if `idBoardSource` is set. Default: `true`.
	 */
	defaultLists?: boolean;
	/**
	 * The visibility of the board. Default: `private`.
	 */
	prefs_permissionLevel?: '' | 'org' | 'private' | 'public';
	/**
	 * Who can vote on cards on the board. Default: `disabled`.
	 */
	prefs_voting?: '' | 'disabled' | 'members' | 'observers' | 'org' | 'public';
	/**
	 * Who can comment on cards on the board. Default: `members`.
	 */
	prefs_comments?: '' | 'disabled' | 'members' | 'observers' | 'org' | 'public';
	/**
	 * Who can invite people to the board. Default: `members`.
	 */
	prefs_invitations?: '' | 'admins' | 'members';
	/**
	 * Whether users can join the board themselves instead of being invited. Default: `true`.
	 */
	prefs_selfJoin?: boolean;
	/**
	 * Whether card covers are enabled. Default: `true`.
	 */
	prefs_cardCovers?: boolean;
	/**
	 * The ID of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`. Default: `blue`.
	 */
	prefs_background?: string;
	/**
	 * The type of card aging when the Card Aging Power-Up is enabled. Default: `regular`.
	 */
	prefs_cardAging?: '' | 'pirate' | 'regular';
};

export type CreateABoardOutput = {
	/**
	 * The ID of the board.
	 */
	id?: string;
	/**
	 * The name of the board.
	 */
	name?: string;
	/**
	 * The description of the board.
	 */
	desc?: string;
	/**
	 * Data needed to display custom emoji used in the description, if any.
	 */
	descData?: {
		/**
		 * Custom emoji used in the text, keyed by emoji name.
		 */
		emoji?: Record<string, JSONValue>;
	};
	/**
	 * Whether the board is closed (archived).
	 */
	closed?: boolean;
	/**
	 * The ID of the member who created the board.
	 */
	idMemberCreator?: string;
	/**
	 * The ID of the Workspace the board belongs to.
	 */
	idOrganization?: string;
	/**
	 * Whether the board is pinned.
	 */
	pinned?: boolean;
	/**
	 * The persistent URL of the board.
	 */
	url?: string;
	/**
	 * The URL of the board using only its short ID.
	 */
	shortUrl?: string;
	/**
	 * The 8-character short ID of the board.
	 */
	shortLink?: string;
	/**
	 * The settings of the board.
	 */
	prefs?: {
		/**
		 * The visibility of the board: `org`, `private`, `public`, or `enterprise`.
		 */
		permissionLevel?: string;
		/**
		 * Whether the Voting Power-Up hides who voted on cards.
		 */
		hideVotes?: boolean;
		/**
		 * Who can vote on cards: `disabled`, `members`, `observers`, `org`, or `public`.
		 */
		voting?: string;
		/**
		 * Who can comment on cards: `disabled`, `members`, `observers`, `org`, or `public`.
		 */
		comments?: string;
		/**
		 * Who can invite people to the board: `admins` or `members`.
		 */
		invitations?: string;
		/**
		 * Whether Workspace members can join the board themselves.
		 */
		selfJoin?: boolean;
		/**
		 * Whether card covers are displayed.
		 */
		cardCovers?: boolean;
		/**
		 * Whether the board is a template.
		 */
		isTemplate?: boolean;
		/**
		 * The card aging mode: `pirate` or `regular`.
		 */
		cardAging?: string;
		/**
		 * Whether the calendar feed is enabled.
		 */
		calendarFeedEnabled?: boolean;
		/**
		 * The ID of a custom background or the name of a background color.
		 */
		background?: string;
		/**
		 * The hex color of the background, if a color is used.
		 */
		backgroundColor?: string;
		/**
		 * The URL of the background image, if an image is used.
		 */
		backgroundImage?: string;
		/**
		 * Scaled versions of the background image.
		 *
		 * Items: A scaled version of the background image.
		 */
		backgroundImageScaled?: {
			/**
			 * The width of the image in pixels.
			 */
			width?: number;
			/**
			 * The height of the image in pixels.
			 */
			height?: number;
			/**
			 * The URL of the scaled image.
			 */
			url?: string;
		}[];
		/**
		 * Whether the background image is tiled.
		 */
		backgroundTile?: boolean;
		/**
		 * The brightness of the background: `dark` or `light`.
		 */
		backgroundBrightness?: string;
		/**
		 * The hex color at the bottom of the background.
		 */
		backgroundBottomColor?: string;
		/**
		 * The hex color at the top of the background.
		 */
		backgroundTopColor?: string;
		/**
		 * Whether the board can be made public.
		 */
		canBePublic?: boolean;
		/**
		 * Whether the board can be made visible to the Enterprise.
		 */
		canBeEnterprise?: boolean;
		/**
		 * Whether the board can be made visible to the Workspace.
		 */
		canBeOrg?: boolean;
		/**
		 * Whether the board can be made private.
		 */
		canBePrivate?: boolean;
		/**
		 * Whether the current member can invite people to the board.
		 */
		canInvite?: boolean;
	};
	/**
	 * The label names of the board, keyed by label color.
	 */
	labelNames?: {
		/**
		 * The name of the green label.
		 */
		green?: string;
		/**
		 * The name of the yellow label.
		 */
		yellow?: string;
		/**
		 * The name of the orange label.
		 */
		orange?: string;
		/**
		 * The name of the red label.
		 */
		red?: string;
		/**
		 * The name of the purple label.
		 */
		purple?: string;
		/**
		 * The name of the blue label.
		 */
		blue?: string;
		/**
		 * The name of the sky label.
		 */
		sky?: string;
		/**
		 * The name of the lime label.
		 */
		lime?: string;
		/**
		 * The name of the pink label.
		 */
		pink?: string;
		/**
		 * The name of the black label.
		 */
		black?: string;
	};
	/**
	 * The limits that apply to the board.
	 */
	limits?: {
		/**
		 * Attachment limits.
		 */
		attachments?: {
			/**
			 * The limit of attachments per board.
			 */
			perBoard?: {
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
		/**
		 * Board limits.
		 */
		boards?: {
			/**
			 * The limit of members per board.
			 */
			totalMembersPerBoard?: {
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
		/**
		 * Card limits.
		 */
		cards?: {
			/**
			 * The limit of open cards per board.
			 */
			openPerBoard?: {
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
			 * The limit of all cards per board.
			 */
			totalPerBoard?: {
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
		/**
		 * Checklist limits.
		 */
		checklists?: {
			/**
			 * The limit of checklists per board.
			 */
			perBoard?: {
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
		/**
		 * Custom field limits.
		 */
		customFields?: {
			/**
			 * The limit of custom fields per board.
			 */
			perBoard?: {
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
		/**
		 * Label limits.
		 */
		labels?: {
			/**
			 * The limit of labels per board.
			 */
			perBoard?: {
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
		/**
		 * List limits.
		 */
		lists?: {
			/**
			 * The limit of open lists per board.
			 */
			openPerBoard?: {
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
			 * The limit of all lists per board.
			 */
			totalPerBoard?: {
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
	 * Whether the board is starred by the current member.
	 */
	starred?: boolean;
	/**
	 * The relationships of members to the board.
	 *
	 * Items: The relationship of a member to the board.
	 */
	memberships?: {
		/**
		 * The ID of the membership.
		 */
		id?: string;
		/**
		 * The ID of the member.
		 */
		idMember?: string;
		/**
		 * The role of the member on the board: `admin`, `normal`, or `observer`.
		 */
		memberType?: string;
		/**
		 * Whether the member has not yet confirmed their account.
		 */
		unconfirmed?: boolean;
		/**
		 * Whether the member is deactivated.
		 */
		deactivated?: boolean;
	}[];
	/**
	 * Whether the current member is subscribed to the board.
	 */
	subscribed?: boolean;
	/**
	 * Whether the current member is invited to the board.
	 */
	invited?: boolean;
	/**
	 * Pending invitations to the board.
	 *
	 * Items: A pending invitation to the board.
	 */
	invitations?: Record<string, JSONValue>[];
	/**
	 * The Power-Ups enabled on the board.
	 *
	 * Items: The name of a Power-Up enabled on the board.
	 */
	powerUps?: string[];
	/**
	 * When the last activity on the board occurred.
	 */
	dateLastActivity?: string;
	/**
	 * When the current member last viewed the board.
	 */
	dateLastView?: string;
	/**
	 * The IDs of the collections (tags) the board belongs to.
	 *
	 * Items: The ID of a collection the board belongs to.
	 */
	idTags?: string[];
	/**
	 * When Power-Ups were disabled on the board, if ever.
	 */
	datePluginDisable?: string;
	/**
	 * How the board was created.
	 */
	creationMethod?: string;
	/**
	 * An internal update counter of the board.
	 */
	ixUpdate?: string;
	/**
	 * The template gallery the board is published in, if any.
	 */
	templateGallery?: string;
	/**
	 * Whether the board is owned by an Enterprise.
	 */
	enterpriseOwned?: boolean;
};

/**
 * Create a board
 * Creates a new board.
 */
export async function createAboard(
	this: EndpointFunctionThis,
	payload: {
		input: CreateABoardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateABoardOutput> {
	const response = await this.endpointCaller<CreateABoardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'createABoard',
		},
		payload,
	);
	return response.output;
}
