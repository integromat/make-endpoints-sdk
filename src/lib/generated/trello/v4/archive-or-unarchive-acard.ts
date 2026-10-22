// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ArchiveOrUnarchiveACardInput = {
	/**
	 * The ID or short link of the card.
	 */
	id: string;
	/**
	 * Whether the card is closed (archived). Set to `true` to archive the card or `false` to unarchive it.
	 */
	closed?: boolean;
	/**
	 * The new name of the card.
	 */
	name?: string;
	/**
	 * The new description of the card.
	 */
	desc?: string;
	/**
	 * The ID of the list to move the card to.
	 */
	idList?: string;
	/**
	 * The ID of the board to move the card to. Set `idList` as well to choose the list on the new board.
	 */
	idBoard?: string;
	/**
	 * The position of the card in its list: `top`, `bottom`, or a positive number.
	 */
	pos?: string;
	/**
	 * The new due date of the card.
	 */
	due?: string;
	/**
	 * The new start date of the card.
	 */
	start?: string;
	/**
	 * Whether the due date of the card is marked complete.
	 */
	dueComplete?: boolean;
	/**
	 * The IDs of the members assigned to the card. Replaces the current members.
	 *
	 * Items: The ID of a member to assign to the card.
	 */
	idMembers?: string[];
	/**
	 * The IDs of the labels on the card. Replaces the current labels.
	 *
	 * Items: The ID of a label to add to the card.
	 */
	idLabels?: string[];
	/**
	 * The ID of an image attachment on the card to use as the card cover.
	 */
	idAttachmentCover?: string;
	/**
	 * Whether the authenticated member is subscribed to the card.
	 */
	subscribed?: boolean;
	/**
	 * The address of the card location, for the map view.
	 */
	address?: string;
	/**
	 * The name of the card location, for the map view.
	 */
	locationName?: string;
	/**
	 * The coordinates of the card location, for the map view, in the `latitude,longitude` format.
	 */
	coordinates?: string;
	/**
	 * The cover of the card. `brightness` can be combined with any other key, but `color`, `url`, and `idAttachment` are mutually exclusive.
	 */
	cover?: {
		/**
		 * Makes the cover a solid color.
		 */
		color?:
			| ''
			| 'pink'
			| 'yellow'
			| 'lime'
			| 'blue'
			| 'black'
			| 'orange'
			| 'red'
			| 'purple'
			| 'sky'
			| 'green';
		/**
		 * Whether the text on the cover is dark or light. `light` makes the text dark, and `dark` makes the text light.
		 */
		brightness?: '' | 'dark' | 'light';
		/**
		 * An unsplash image URL (`https://images.unsplash.com/...`) to use as the cover. Only unsplash URLs work.
		 */
		url?: string;
		/**
		 * The ID of an image attachment on the card to use as the cover.
		 */
		idAttachment?: string;
		/**
		 * Whether the card name is shown on the cover (`full`) or below it (`normal`).
		 */
		size?: '' | 'normal' | 'full';
	};
};

export type ArchiveOrUnarchiveACardOutput = {
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
};

/**
 * Update a card
 * Archives, unarchives, or otherwise updates a card.
 */
export async function archiveOrUnarchiveAcard(
	this: EndpointFunctionThis,
	payload: {
		input: ArchiveOrUnarchiveACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ArchiveOrUnarchiveACardOutput> {
	const response = await this.endpointCaller<ArchiveOrUnarchiveACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'archiveOrUnarchiveACard',
		},
		payload,
	);
	return response.output;
}
