// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetACardInput = {
	/**
	 * The ID or short link of the card.
	 */
	id: string;
	/**
	 * The card fields to return. Default: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `start`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idShort`, `idAttachmentCover`, `manualCoverAttachment`, `labels`, `name`, `pos`, `shortUrl`, `url`.
	 */
	fields?:
		| ''
		| 'all'
		| 'id'
		| 'address'
		| 'badges'
		| 'checkItemStates'
		| 'closed'
		| 'coordinates'
		| 'creationMethod'
		| 'dueComplete'
		| 'dateLastActivity'
		| 'desc'
		| 'descData'
		| 'due'
		| 'dueReminder'
		| 'idBoard'
		| 'idChecklists'
		| 'idLabels'
		| 'idList'
		| 'idMembers'
		| 'idMembersVoted'
		| 'idShort'
		| 'idAttachmentCover'
		| 'labels'
		| 'limits'
		| 'locationName'
		| 'manualCoverAttachment'
		| 'name'
		| 'pos'
		| 'shortLink'
		| 'shortUrl'
		| 'start'
		| 'subscribed'
		| 'url'
		| 'cover'
		| 'isTemplate';
	/**
	 * The nested actions to return. Select `all` to return actions of every type, or select one or more [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
	 */
	actions?:
		| ''
		| 'all'
		| 'addAttachmentToCard'
		| 'addChecklistToCard'
		| 'addMemberToBoard'
		| 'addMemberToCard'
		| 'addMemberToOrganization'
		| 'addToOrganizationBoard'
		| 'commentCard'
		| 'convertToCardFromCheckItem'
		| 'copyBoard'
		| 'copyCard'
		| 'copyCommentCard'
		| 'createBoard'
		| 'createCard'
		| 'createList'
		| 'createOrganization'
		| 'deleteAttachmentFromCard'
		| 'deleteBoardInvitation'
		| 'deleteCard'
		| 'deleteOrganizationInvitation'
		| 'disablePowerUp'
		| 'emailCard'
		| 'enablePowerUp'
		| 'makeAdminOfBoard'
		| 'makeNormalMemberOfBoard'
		| 'makeNormalMemberOfOrganization'
		| 'makeObserverOfBoard'
		| 'memberJoinedTrello'
		| 'moveCardFromBoard'
		| 'moveCardToBoard'
		| 'moveListFromBoard'
		| 'moveListToBoard'
		| 'removeChecklistFromCard'
		| 'removeFromOrganizationBoard'
		| 'removeMemberFromCard'
		| 'sortList'
		| 'unconfirmedBoardInvitation'
		| 'unconfirmedOrganizationInvitation'
		| 'updateBoard'
		| 'updateCard'
		| 'updateCard:closed'
		| 'updateCard:desc'
		| 'updateCard:idList'
		| 'updateCard:name'
		| 'updateCheckItemStateOnCard'
		| 'updateChecklist'
		| 'updateList'
		| 'updateList:closed'
		| 'updateList:name'
		| 'updateMember'
		| 'updateOrganization';
	/**
	 * Whether to return the attachments of the card. Use `cover` to return only the cover attachment. Default: `false`.
	 */
	attachments?: '' | 'true' | 'false' | 'cover';
	/**
	 * The attachment fields to return. Default: `all`.
	 */
	attachment_fields?:
		| ''
		| 'all'
		| 'bytes'
		| 'date'
		| 'edgeColor'
		| 'idMember'
		| 'isUpload'
		| 'mimeType'
		| 'name'
		| 'previews'
		| 'url';
	/**
	 * Whether to return the members assigned to the card. Default: `false`.
	 */
	members?: boolean;
	/**
	 * The member fields to return. Default: `avatarHash`, `fullName`, `initials`, `username`.
	 */
	member_fields?:
		| ''
		| 'all'
		| 'id'
		| 'avatarHash'
		| 'avatarUrl'
		| 'bio'
		| 'bioData'
		| 'confirmed'
		| 'fullName'
		| 'idEnterprisesDeactivated'
		| 'idPremOrgsAdmin'
		| 'initials'
		| 'memberType'
		| 'products'
		| 'status'
		| 'url'
		| 'username';
	/**
	 * Whether to return the members who voted on the card. Default: `false`.
	 */
	membersVoted?: boolean;
	/**
	 * The fields of members who voted to return. Default: `avatarHash`, `fullName`, `initials`, `username`.
	 */
	memberVoted_fields?:
		| ''
		| 'all'
		| 'id'
		| 'avatarHash'
		| 'avatarUrl'
		| 'bio'
		| 'bioData'
		| 'confirmed'
		| 'fullName'
		| 'idEnterprisesDeactivated'
		| 'idPremOrgsAdmin'
		| 'initials'
		| 'memberType'
		| 'products'
		| 'status'
		| 'url'
		| 'username';
	/**
	 * Whether to return the states of the checklist items on the card. Default: `false`.
	 */
	checkItemStates?: boolean;
	/**
	 * Whether to return the checklists on the card. Default: `none`.
	 */
	checklists?: '' | 'all' | 'none';
	/**
	 * The checklist fields to return. Default: `all`.
	 */
	checklist_fields?: '' | 'all' | 'idBoard' | 'idCard' | 'name' | 'pos';
	/**
	 * Whether to return the board the card is on. Default: `false`.
	 */
	board?: boolean;
	/**
	 * The board fields to return. Default: `name`, `desc`, `descData`, `closed`, `idOrganization`, `pinned`, `url`, `prefs`.
	 */
	board_fields?:
		| ''
		| 'all'
		| 'id'
		| 'closed'
		| 'dateLastActivity'
		| 'dateLastView'
		| 'desc'
		| 'descData'
		| 'enterpriseOwned'
		| 'idMemberCreator'
		| 'idOrganization'
		| 'invitations'
		| 'invited'
		| 'labelNames'
		| 'limits'
		| 'memberships'
		| 'name'
		| 'pinned'
		| 'powerUps'
		| 'prefs'
		| 'shortLink'
		| 'shortUrl'
		| 'starred'
		| 'subscribed'
		| 'url';
	/**
	 * Whether to return the list the card is in. Default: `false`.
	 */
	list?: boolean;
	/**
	 * Whether to return the power-up data of the card. Default: `false`.
	 */
	pluginData?: boolean;
	/**
	 * Whether to return the stickers on the card. Default: `false`.
	 */
	stickers?: boolean;
	/**
	 * The sticker fields to return. Default: `all`.
	 */
	sticker_fields?:
		| ''
		| 'all'
		| 'id'
		| 'top'
		| 'left'
		| 'zIndex'
		| 'rotate'
		| 'image'
		| 'imageUrl'
		| 'imageScaled';
	/**
	 * Whether to return the custom field values set on the card. Default: `false`.
	 */
	customFieldItems?: boolean;
};

export type GetACardOutput = {
	/**
	 * The ID of the card.
	 */
	id?: string;
	/**
	 * Information displayed on the front of the card.
	 */
	badges?: {
		/**
		 * The number of votes on the card.
		 */
		votes?: number;
		/**
		 * Whether the current member voted on the card.
		 */
		viewingMemberVoted?: boolean;
		/**
		 * Whether the current member is subscribed to the card.
		 */
		subscribed?: boolean;
		/**
		 * The FogBugz case linked to the card, if any.
		 */
		fogbugz?: string;
		/**
		 * The number of checklist items on the card.
		 */
		checkItems?: number;
		/**
		 * The number of completed checklist items on the card.
		 */
		checkItemsChecked?: number;
		/**
		 * The number of comments on the card.
		 */
		comments?: number;
		/**
		 * The number of attachments on the card.
		 */
		attachments?: number;
		/**
		 * Whether the card has a description.
		 */
		description?: boolean;
		/**
		 * The due date of the card.
		 */
		due?: string;
		/**
		 * Whether the due date of the card is marked complete.
		 */
		dueComplete?: boolean;
		/**
		 * The start date of the card.
		 */
		start?: string;
		/**
		 * Whether the card has a location.
		 */
		location?: boolean;
		/**
		 * The number of attachments on the card by type.
		 */
		attachmentsByType?: {
			/**
			 * The number of attachments linking to Trello objects.
			 */
			trello?: {
				/**
				 * The number of attachments linking to Trello boards.
				 */
				board?: number;
				/**
				 * The number of attachments linking to Trello cards.
				 */
				card?: number;
			};
		};
	};
	/**
	 * The states of the checklist items on the card.
	 *
	 * Items: The state of a checklist item.
	 */
	checkItemStates?: Record<string, JSONValue>[];
	/**
	 * Whether the card is closed (archived).
	 */
	closed?: boolean;
	/**
	 * Whether the due date of the card is marked complete.
	 */
	dueComplete?: boolean;
	/**
	 * When the last activity on the card occurred.
	 */
	dateLastActivity?: string;
	/**
	 * The description of the card.
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
	 * The due date of the card.
	 */
	due?: string;
	/**
	 * The number of minutes before the due date when a reminder is sent.
	 */
	dueReminder?: number;
	/**
	 * The email address of the card, if any.
	 */
	email?: string;
	/**
	 * The ID of the board the card is on.
	 */
	idBoard?: string;
	/**
	 * The IDs of the checklists on the card.
	 *
	 * Items: The ID of a checklist on the card.
	 */
	idChecklists?: string[];
	/**
	 * The ID of the list the card is in.
	 */
	idList?: string;
	/**
	 * The IDs of the members assigned to the card.
	 *
	 * Items: The ID of a member assigned to the card.
	 */
	idMembers?: string[];
	/**
	 * The IDs of the members who voted on the card.
	 *
	 * Items: The ID of a member who voted on the card.
	 */
	idMembersVoted?: string[];
	/**
	 * The numeric ID of the card, unique within the board.
	 */
	idShort?: number;
	/**
	 * The ID of the attachment used as the card cover, if any.
	 */
	idAttachmentCover?: string;
	/**
	 * Whether the card cover was selected manually by the user.
	 */
	manualCoverAttachment?: boolean;
	/**
	 * The labels on the card.
	 *
	 * Items: A label on the card.
	 */
	labels?: {
		/**
		 * The ID of the label.
		 */
		id?: string;
		/**
		 * The ID of the board the label is on.
		 */
		idBoard?: string;
		/**
		 * The name displayed for the label.
		 */
		name?: string;
		/**
		 * The color of the label. Empty means no color and the label is not shown on the front of cards.
		 */
		color?: string;
		/**
		 * The number of cards the label is used on.
		 */
		uses?: number;
	}[];
	/**
	 * The IDs of the labels on the card.
	 *
	 * Items: The ID of a label on the card.
	 */
	idLabels?: string[];
	/**
	 * The name of the card.
	 */
	name?: string;
	/**
	 * The position of the card in the list.
	 */
	pos?: number;
	/**
	 * The 8-character short ID of the card.
	 */
	shortLink?: string;
	/**
	 * The URL of the card without the name slug.
	 */
	shortUrl?: string;
	/**
	 * The start date of the card.
	 */
	start?: string;
	/**
	 * Whether the current member is subscribed to the card.
	 */
	subscribed?: boolean;
	/**
	 * The full URL of the card.
	 */
	url?: string;
	/**
	 * The address of the card location.
	 */
	address?: string;
	/**
	 * The name of the card location.
	 */
	locationName?: string;
	/**
	 * The coordinates of the card location.
	 */
	coordinates?: {
		/**
		 * The latitude of the card location.
		 */
		latitude?: number;
		/**
		 * The longitude of the card location.
		 */
		longitude?: number;
	};
	/**
	 * The cover settings of the card.
	 */
	cover?: {
		/**
		 * The ID of the attachment used as the cover.
		 */
		idAttachment?: string;
		/**
		 * The color of the cover.
		 */
		color?: string;
		/**
		 * The ID of the uploaded background used as the cover.
		 */
		idUploadedBackground?: string;
		/**
		 * The size of the cover: `normal` or `full`.
		 */
		size?: string;
		/**
		 * The brightness of the cover: `dark` or `light`.
		 */
		brightness?: string;
		/**
		 * Whether the cover is from a template.
		 */
		isTemplate?: boolean;
	};
	/**
	 * The special role of the card, if any: `separator`, `board`, `mirror`, or `link`.
	 */
	cardRole?: string;
	/**
	 * How the card was created.
	 */
	creationMethod?: string;
	/**
	 * The ID of the source card, for mirror cards.
	 */
	mirrorSourceId?: string;
	/**
	 * Whether the card is a template.
	 */
	isTemplate?: boolean;
	/**
	 * The limits that apply to the card.
	 */
	limits?: {
		/**
		 * Attachment limits.
		 */
		attachments?: {
			/**
			 * The limit of attachments per card.
			 */
			perCard?: {
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
	 * The members assigned to the card. Returned when card members are requested.
	 *
	 * Items: A member assigned to the card.
	 */
	members?: {
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
		 * The bio of the member.
		 */
		bio?: string;
		/**
		 * Whether the member has confirmed their email address.
		 */
		confirmed?: boolean;
		/**
		 * The full name of the member.
		 */
		fullName?: string;
		/**
		 * The IDs of Enterprises the member is deactivated in.
		 *
		 * Items: The ID of an Enterprise the member is deactivated in.
		 */
		idEnterprisesDeactivated?: string[];
		/**
		 * The ID of the member who referred the member to Trello.
		 */
		idMemberReferrer?: string;
		/**
		 * The IDs of premium Workspaces the member administers.
		 *
		 * Items: The ID of a premium Workspace the member administers.
		 */
		idPremOrgsAdmin?: string[];
		/**
		 * The initials of the member.
		 */
		initials?: string;
		/**
		 * The type of the member account: `normal` or `ghost`.
		 */
		memberType?: string;
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
		 * The Trello products of the member.
		 *
		 * Items: The code of a Trello product of the member.
		 */
		products?: number[];
		/**
		 * The URL of the member profile.
		 */
		url?: string;
		/**
		 * The username of the member.
		 */
		username?: string;
		/**
		 * The online status of the member.
		 */
		status?: string;
	}[];
	/**
	 * The attachments on the card. Returned when card attachments are requested.
	 *
	 * Items: An attachment on the card.
	 */
	attachments?: {
		/**
		 * The ID of the attachment.
		 */
		id?: string;
		/**
		 * The size of the attachment in bytes.
		 */
		bytes?: number;
		/**
		 * When the attachment was added.
		 */
		date?: string;
		/**
		 * The extracted edge color, for image attachments.
		 */
		edgeColor?: string;
		/**
		 * The ID of the member who added the attachment.
		 */
		idMember?: string;
		/**
		 * Whether the attachment was uploaded.
		 */
		isUpload?: boolean;
		/**
		 * The MIME type of the attachment.
		 */
		mimeType?: string;
		/**
		 * The name of the attachment.
		 */
		name?: string;
		/**
		 * The position of the attachment in the attachments list.
		 */
		pos?: number;
		/**
		 * Generated previews of an image attachment in various sizes.
		 *
		 * Items: A generated preview of the image.
		 */
		previews?: {
			/**
			 * The ID of the preview.
			 */
			id?: string;
			/**
			 * Whether the preview is scaled.
			 */
			scaled?: boolean;
			/**
			 * The URL of the preview.
			 */
			url?: string;
			/**
			 * The size of the preview in bytes.
			 */
			bytes?: number;
			/**
			 * The height of the preview in pixels.
			 */
			height?: number;
			/**
			 * The width of the preview in pixels.
			 */
			width?: number;
		}[];
		/**
		 * The URL of the attachment.
		 */
		url?: string;
		/**
		 * The file name of the attachment.
		 */
		fileName?: string;
	}[];
	/**
	 * The stickers on the card. Returned when card stickers are requested.
	 *
	 * Items: A sticker on the card.
	 */
	stickers?: {
		/**
		 * The ID of the sticker.
		 */
		id?: string;
		/**
		 * The top position of the sticker on the card.
		 */
		top?: number;
		/**
		 * The left position of the sticker on the card.
		 */
		left?: number;
		/**
		 * The z-index of the sticker on the card.
		 */
		zIndex?: number;
		/**
		 * The rotation of the sticker in degrees.
		 */
		rotate?: number;
		/**
		 * The ID of the sticker image.
		 */
		image?: string;
		/**
		 * The URL of the sticker image.
		 */
		imageUrl?: string;
		/**
		 * Scaled versions of the sticker image.
		 *
		 * Items: A scaled version of the sticker image.
		 */
		imageScaled?: Record<string, JSONValue>[];
	}[];
	/**
	 * The custom field values on the card. Returned when card custom field items are requested.
	 *
	 * Items: A custom field value set on the card.
	 */
	customFieldItems?: {
		/**
		 * The ID of the custom field item.
		 */
		id?: string;
		/**
		 * The ID of the custom field definition.
		 */
		idCustomField?: string;
		/**
		 * The ID of the card the value is set on.
		 */
		idModel?: string;
		/**
		 * The type of the model the value is set on: `card`.
		 */
		modelType?: string;
		/**
		 * The ID of the selected option, for dropdown custom fields.
		 */
		idValue?: string;
		/**
		 * The value of the custom field, keyed by type.
		 */
		value?: {
			/**
			 * The value of a text custom field.
			 */
			text?: string;
			/**
			 * The value of a number custom field, as a string.
			 */
			number?: string;
			/**
			 * The value of a date custom field.
			 */
			date?: string;
			/**
			 * The value of a checkbox custom field: `true` or `false`, as a string.
			 */
			checked?: string;
		};
	}[];
	/**
	 * The Power-Up data on the card. Returned when card plugin data is requested.
	 *
	 * Items: Data stored by a Power-Up.
	 */
	pluginData?: {
		/**
		 * The ID of the plugin data.
		 */
		id?: string;
		/**
		 * The ID of the Power-Up.
		 */
		idPlugin?: string;
		/**
		 * The scope of the data: `board`, `card`, `member`, or `organization`.
		 */
		scope?: string;
		/**
		 * The ID of the model the data is stored on.
		 */
		idModel?: string;
		/**
		 * The stored data, as a JSON string.
		 */
		value?: string;
		/**
		 * The access level of the data: `private` or `shared`.
		 */
		access?: string;
	}[];
	/**
	 * The members who voted on the card. Returned when members voted are requested.
	 *
	 * Items: A member who voted on the card.
	 */
	membersVoted?: {
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
		 * The bio of the member.
		 */
		bio?: string;
		/**
		 * Whether the member has confirmed their email address.
		 */
		confirmed?: boolean;
		/**
		 * The full name of the member.
		 */
		fullName?: string;
		/**
		 * The IDs of Enterprises the member is deactivated in.
		 *
		 * Items: The ID of an Enterprise the member is deactivated in.
		 */
		idEnterprisesDeactivated?: string[];
		/**
		 * The ID of the member who referred the member to Trello.
		 */
		idMemberReferrer?: string;
		/**
		 * The IDs of premium Workspaces the member administers.
		 *
		 * Items: The ID of a premium Workspace the member administers.
		 */
		idPremOrgsAdmin?: string[];
		/**
		 * The initials of the member.
		 */
		initials?: string;
		/**
		 * The type of the member account: `normal` or `ghost`.
		 */
		memberType?: string;
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
		 * The Trello products of the member.
		 *
		 * Items: The code of a Trello product of the member.
		 */
		products?: number[];
		/**
		 * The URL of the member profile.
		 */
		url?: string;
		/**
		 * The username of the member.
		 */
		username?: string;
		/**
		 * The online status of the member.
		 */
		status?: string;
	}[];
	/**
	 * The checklists on the card. Returned when checklists are requested.
	 *
	 * Items: A checklist on the card.
	 */
	checklists?: {
		/**
		 * The ID of the checklist.
		 */
		id?: string;
		/**
		 * The name of the checklist.
		 */
		name?: string;
		/**
		 * The ID of the board the checklist is on.
		 */
		idBoard?: string;
		/**
		 * The ID of the card the checklist is on.
		 */
		idCard?: string;
		/**
		 * The position of the checklist on the card.
		 */
		pos?: number;
		/**
		 * The limits that apply to the checklist.
		 */
		limits?: {
			/**
			 * Checklist item limits.
			 */
			checkItems?: {
				/**
				 * The limit of items per checklist.
				 */
				perChecklist?: {
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
		 * How the checklist was created.
		 */
		creationMethod?: string;
		/**
		 * The items of the checklist.
		 *
		 * Items: An item of the checklist.
		 */
		checkItems?: {
			/**
			 * The ID of the checklist item.
			 */
			id?: string;
			/**
			 * The ID of the checklist the item belongs to.
			 */
			idChecklist?: string;
			/**
			 * The name of the checklist item.
			 */
			name?: string;
			/**
			 * Data needed to display custom emoji used in the name, if any.
			 */
			nameData?: {
				/**
				 * Custom emoji used in the text, keyed by emoji name.
				 */
				emoji?: Record<string, JSONValue>;
			};
			/**
			 * The state of the item: `complete` or `incomplete`.
			 */
			state?: string;
			/**
			 * The position of the item in the checklist.
			 */
			pos?: number;
			/**
			 * The due date of the item.
			 */
			due?: string;
			/**
			 * The number of minutes before the due date when a reminder is sent.
			 */
			dueReminder?: number;
			/**
			 * The ID of the member assigned to the item.
			 */
			idMember?: string;
		}[];
	}[];
	/**
	 * The board the card is on. Returned when the board is requested.
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
	 * The list the card is in. Returned when the list is requested.
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
		/**
		 * Whether the list is closed (archived).
		 */
		closed?: boolean;
		/**
		 * The ID of the board the list is on.
		 */
		idBoard?: string;
		/**
		 * The position of the list on the board.
		 */
		pos?: number;
		/**
		 * Whether the current member is subscribed to the list.
		 */
		subscribed?: boolean;
		/**
		 * The soft limit of cards in the list, if set.
		 */
		softLimit?: number;
		/**
		 * How the list was created.
		 */
		creationMethod?: string;
		/**
		 * The limits that apply to the list.
		 */
		limits?: {
			/**
			 * Card limits of the list.
			 */
			cards?: {
				/**
				 * The limit of open cards per list.
				 */
				openPerList?: {
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
				 * The limit of all cards per list.
				 */
				totalPerList?: {
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
	};
	/**
	 * The actions on the card. Returned when actions are requested.
	 *
	 * Items: An action on the card.
	 */
	actions?: {
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
	}[];
};

/**
 * Get a card
 * Returns a card, optionally with its nested resources.
 */
export async function getAcard(
	this: EndpointFunctionThis,
	payload: {
		input: GetACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetACardOutput> {
	const response = await this.endpointCaller<GetACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'getACard',
		},
		payload,
	);
	return response.output;
}
