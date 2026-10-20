// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetMessageInput = {
	/**
	 * The resource name of the message, in the form `spaces/{space}/messages/{message}`.
	 */
	name: string;
};

export type GetMessageOutput = {
	/**
	 * The user who created the message.
	 */
	sender?: {
		/**
		 * Unique identifier of the user's Google Workspace domain.
		 */
		domainId?: string;
		/**
		 * The user's email address.
		 */
		email?: string;
		/**
		 * The user's display name.
		 */
		displayName?: string;
		/**
		 * User type.
		 */
		type?: '' | 'TYPE_UNSPECIFIED' | 'HUMAN' | 'BOT';
		/**
		 * Resource name for a Google Chat user.
		 */
		name?: string;
		/**
		 * The user's avatar image URL.
		 */
		avatarUrl?: string;
		/**
		 * When `true`, the user is deleted or their profile is not visible, such as when a user is mentioned in a space without…
		 */
		isAnonymous?: boolean;
	};
	/**
	 * Information about a message that another message quotes.
	 */
	quotedMessageMetadata?: {
		/**
		 * The timestamp when the quoted message was created or when the quoted message was last updated.
		 */
		lastUpdateTime?: string;
		/**
		 * Metadata about the source space of the quoted message. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		forwardedMetadata?: Record<string, JSONValue>;
		/**
		 * Specifies the quote type.
		 */
		quoteType?: '' | 'QUOTE_TYPE_UNSPECIFIED' | 'REPLY' | 'FORWARD';
		/**
		 * A snapshot of the quoted message's content. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		quotedMessageSnapshot?: Record<string, JSONValue>;
		/**
		 * Resource name of the message that is quoted.
		 */
		name?: string;
	};
	/**
	 * The list of emoji reaction summaries on the message.
	 *
	 * Items: The number of people who reacted to a message with a specific emoji.
	 */
	emojiReactionSummaries?: {
		/**
		 * Emoji associated with the reactions. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		emoji?: Record<string, JSONValue>;
		/**
		 * The total number of reactions using the associated emoji.
		 */
		reactionCount?: number;
	}[];
	/**
	 * The time at which the message was last edited by a user.
	 */
	lastUpdateTime?: string;
	/**
	 * A URL in the Chat message `text` field that matches a link preview pattern.
	 */
	matchedUrl?: {
		/**
		 * The URL that was matched.
		 */
		url?: string;
	};
	/**
	 * Plain-text body of the message.
	 */
	text?: string;
	/**
	 * The thread the message belongs to.
	 */
	thread?: {
		/**
		 * Input for creating or updating a thread.
		 */
		threadKey?: string;
		/**
		 * Resource name of the thread.
		 */
		name?: string;
	};
	/**
	 * For spaces created in Chat, the time at which the message was created.
	 */
	createTime?: string;
	/**
	 * If your Chat app authenticates as a user, the output only populates the space `name`.
	 */
	space?: {
		/**
		 * For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator.
		 */
		adminInstalled?: boolean;
		/**
		 * Space permission settings for existing spaces. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		permissionSettings?: Record<string, JSONValue>;
		/**
		 * For spaces created in Chat, the time the space was created.
		 */
		createTime?: string;
		/**
		 * The customer id of the domain of the space.
		 */
		customer?: string;
		/**
		 * The type of space.
		 */
		spaceType?: '' | 'SPACE_TYPE_UNSPECIFIED' | 'SPACE' | 'GROUP_CHAT' | 'DIRECT_MESSAGE';
		/**
		 * Timestamp of the last message in the space.
		 */
		lastActiveTime?: string;
		/**
		 * The space's display name.
		 */
		displayName?: string;
		/**
		 * Resource name of the space.
		 */
		name?: string;
		/**
		 * The threading state in the Chat space.
		 */
		spaceThreadingState?:
			| ''
			| 'SPACE_THREADING_STATE_UNSPECIFIED'
			| 'THREADED_MESSAGES'
			| 'GROUPED_MESSAGES'
			| 'UNTHREADED_MESSAGES';
		/**
		 * Whether this space permits any Google Chat user as a member.
		 */
		externalUserAllowed?: boolean;
		/**
		 * Specifies the access setting of the space. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		accessSettings?: Record<string, JSONValue>;
		/**
		 * The count of joined memberships grouped by member type. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		membershipCount?: Record<string, JSONValue>;
		/**
		 * Whether this space is created in `Import Mode` as part of a data migration into Google Workspace.
		 */
		importMode?: boolean;
		/**
		 * Whether the space is a DM between a Chat app and a single human.
		 */
		singleUserBotDm?: boolean;
		/**
		 * The time when the space will be automatically deleted by the system if it remains in import mode.
		 */
		importModeExpireTime?: string;
		/**
		 * Details about the space including description and rules. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		spaceDetails?: Record<string, JSONValue>;
		/**
		 * The message history state for messages and threads in this space.
		 */
		spaceHistoryState?: '' | 'HISTORY_STATE_UNSPECIFIED' | 'HISTORY_OFF' | 'HISTORY_ON';
		/**
		 * The URI for a user to access the space.
		 */
		spaceUri?: string;
	};
	/**
	 * Resource name of the message.
	 */
	name?: string;
	/**
	 * Input for creating a message, otherwise output only.
	 */
	privateMessageViewer?: {
		/**
		 * Unique identifier of the user's Google Workspace domain.
		 */
		domainId?: string;
		/**
		 * The user's email address.
		 */
		email?: string;
		/**
		 * The user's display name.
		 */
		displayName?: string;
		/**
		 * User type.
		 */
		type?: '' | 'TYPE_UNSPECIFIED' | 'HUMAN' | 'BOT';
		/**
		 * Resource name for a Google Chat user.
		 */
		name?: string;
		/**
		 * The user's avatar image URL.
		 */
		avatarUrl?: string;
		/**
		 * When `true`, the user is deleted or their profile is not visible, such as when a user is mentioned in a space without…
		 */
		isAnonymous?: boolean;
	};
	/**
	 * When `true`, the message is a response in a reply thread.
	 */
	threadReply?: boolean;
	/**
	 * GIF images that are attached to the message.
	 *
	 * Items: A GIF image that's specified by a URL.
	 */
	attachedGifs?: {
		/**
		 * The URL that hosts the GIF image.
		 */
		uri?: string;
	}[];
	/**
	 * A custom ID for the message.
	 */
	clientAssignedMessageId?: string;
	/**
	 * Plain-text body of the message with all Chat app mentions stripped out.
	 */
	argumentText?: string;
	/**
	 * Whether this is a silent message.
	 */
	silent?: boolean;
	/**
	 * Contains the message `text` with markups added to communicate formatting.
	 */
	formattedText?: string;
	/**
	 * User-uploaded attachment.
	 *
	 * Items: An attachment in Google Chat.
	 */
	attachment?: {
		/**
		 * The content type (MIME type) of the file.
		 */
		contentType?: string;
		/**
		 * The thumbnail URL which should be used to preview the attachment to a human user.
		 */
		thumbnailUri?: string;
		/**
		 * A reference to the Google Drive attachment. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		driveDataRef?: Record<string, JSONValue>;
		/**
		 * The download URL which should be used to allow a human user to download the attachment.
		 */
		downloadUri?: string;
		/**
		 * The source of the attachment.
		 */
		source?: '' | 'SOURCE_UNSPECIFIED' | 'DRIVE_FILE' | 'UPLOADED_CONTENT';
		/**
		 * Resource name of the attachment.
		 */
		name?: string;
		/**
		 * A reference to the attachment data. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		attachmentDataRef?: Record<string, JSONValue>;
		/**
		 * The original file name for the content, not the full path.
		 */
		contentName?: string;
	}[];
	/**
	 * A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile…
	 */
	fallbackText?: string;
	/**
	 * Specifies how the server interprets the message `text` field content.
	 */
	markupSyntax?:
		| ''
		| 'MARKUP_SYNTAX_UNSPECIFIED'
		| 'MARKUP_SYNTAX_CHAT'
		| 'MARKUP_SYNTAX_MARKDOWN';
	/**
	 * One or more interactive widgets that appear at the bottom of a message.
	 *
	 * Items: One or more interactive widgets that appear at the bottom of a message.
	 */
	accessoryWidgets?: {
		/**
		 * A list of buttons. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		buttonList?: Record<string, JSONValue>;
	}[];
	/**
	 * Slash command information, if applicable.
	 */
	slashCommand?: {
		/**
		 * The ID of the slash command.
		 */
		commandId?: string;
	};
	/**
	 * The time at which the message was deleted in Google Chat.
	 */
	deleteTime?: string;
	/**
	 * Information about a deleted message.
	 */
	deletionMetadata?: {
		/**
		 * Indicates who deleted the message.
		 */
		deletionType?:
			| ''
			| 'DELETION_TYPE_UNSPECIFIED'
			| 'CREATOR'
			| 'SPACE_OWNER'
			| 'ADMIN'
			| 'APP_MESSAGE_EXPIRY'
			| 'CREATOR_VIA_APP'
			| 'SPACE_OWNER_VIA_APP'
			| 'SPACE_MEMBER';
	};
	/**
	 * An array of cards.
	 *
	 * Items: A card in a Google Chat message.
	 */
	cardsV2?: {
		/**
		 * A card.
		 */
		card?: {
			/**
			 * When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward… The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
			 */
			peekCardHeader?: Record<string, JSONValue>;
			/**
			 * Contains a collection of widgets.
			 *
			 * Items: A section contains a collection of widgets that are rendered vertically in the order that they're specified.
			 */
			sections?: {
				/**
				 * All the widgets in the section.
				 *
				 * Items: Each card is made up of widgets.
				 */
				widgets?: {
					/**
					 * Displays a grid with a collection of items. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
					 */
					grid?: Record<string, JSONValue>;
					/**
					 * Displays a horizontal line divider between widgets.
					 */
					divider?: Record<string, JSONValue>;
					/**
					 * A list of buttons. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
					 */
					buttonList?: Record<string, JSONValue>;
					/**
					 * A list of chips. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
					 */
					chipList?: Record<string, JSONValue>;
					/**
					 * Specifies the event actions that can be performed on the widget.
					 *
					 * Items: Represents an actionthat can be performed on an ui element. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
					 */
					eventActions?: Record<string, JSONValue>[];
					/**
					 * Displays a text box that users can type into. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
					 */
					textInput?: Record<string, JSONValue>;
					/**
					 * Displays a selection control that lets users select items. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
					 */
					selectionInput?: Record<string, JSONValue>;
					/**
					 * A carousel contains a collection of nested widgets. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
					 */
					carousel?: Record<string, JSONValue>;
					/**
					 * Specifies whether widgets align to the left, right, or center of a column.
					 */
					horizontalAlignment?:
						| ''
						| 'HORIZONTAL_ALIGNMENT_UNSPECIFIED'
						| 'START'
						| 'CENTER'
						| 'END';
					/**
					 * Displays an image.
					 */
					image?: {
						/**
						 * When a user clicks the image, the click triggers this action. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						onClick?: Record<string, JSONValue>;
						/**
						 * The alternative text of this image that's used for accessibility.
						 */
						altText?: string;
						/**
						 * The HTTPS URL that hosts the image.
						 */
						imageUrl?: string;
					};
					/**
					 * Displays up to 2 columns. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
					 */
					columns?: Record<string, JSONValue>;
					/**
					 * Displays a widget that lets users input a date, time, or date and time. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
					 */
					dateTimePicker?: Record<string, JSONValue>;
					/**
					 * Specifies whether the widget is visible or hidden.
					 */
					visibility?: '' | 'VISIBILITY_UNSPECIFIED' | 'VISIBLE' | 'HIDDEN';
					/**
					 * Displays a decorated text item.
					 */
					decoratedText?: {
						/**
						 * The primary text.
						 */
						text?: string;
						/**
						 * An icon displayed after the text. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						endIcon?: Record<string, JSONValue>;
						/**
						 * The text that appears above `text`.
						 */
						topLabel?: string;
						/**
						 * A button that a user can click to trigger an action. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						button?: Record<string, JSONValue>;
						/**
						 * Vertical alignment of the start icon.
						 */
						startIconVerticalAlignment?:
							| ''
							| 'VERTICAL_ALIGNMENT_UNSPECIFIED'
							| 'TOP'
							| 'MIDDLE'
							| 'BOTTOM';
						/**
						 * This action is triggered when users click `topLabel` or `bottomLabel`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						onClick?: Record<string, JSONValue>;
						/**
						 * The text that appears below `text`.
						 */
						bottomLabel?: string;
						/**
						 * `TextParagraph` equivalent of `text`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						contentText?: Record<string, JSONValue>;
						/**
						 * The wrap text setting.
						 */
						wrapText?: boolean;
						/**
						 * `TextParagraph` equivalent of `bottom_label`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						bottomLabelText?: Record<string, JSONValue>;
						/**
						 * `TextParagraph` equivalent of `top_label`. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						topLabelText?: Record<string, JSONValue>;
						/**
						 * A switch widget that a user can click to change its state and trigger an action. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						switchControl?: Record<string, JSONValue>;
						/**
						 * The icon displayed in front of the text. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						startIcon?: Record<string, JSONValue>;
					};
					/**
					 * Displays a text paragraph.
					 */
					textParagraph?: {
						/**
						 * The syntax of the text.
						 */
						textSyntax?: '' | 'TEXT_SYNTAX_UNSPECIFIED' | 'HTML' | 'MARKDOWN';
						/**
						 * The maximum number of lines of text that are displayed in the widget.
						 */
						maxLines?: number;
						/**
						 * The text that's shown in the widget.
						 */
						text?: string;
					};
					/**
					 * A unique ID assigned to the widget that's used to identify the widget to be mutated.
					 */
					id?: string;
				}[];
				/**
				 * Indicates whether this section is collapsible.
				 */
				collapsible?: boolean;
				/**
				 * The number of uncollapsible widgets which remain visible even when a section is collapsed.
				 */
				uncollapsibleWidgetsCount?: number;
				/**
				 * Text that appears at the top of a section.
				 */
				header?: string;
				/**
				 * A unique ID assigned to the section that's used to identify the section to be mutated.
				 */
				id?: string;
				/**
				 * Define the expand and collapse button of the section.
				 */
				collapseControl?: {
					/**
					 * Define a customizable button to collapse the section.
					 */
					collapseButton?: {
						/**
						 * The type of a button.
						 */
						type?:
							| ''
							| 'TYPE_UNSPECIFIED'
							| 'OUTLINED'
							| 'FILLED'
							| 'FILLED_TONAL'
							| 'BORDERLESS';
						/**
						 * An icon displayed inside the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						icon?: Record<string, JSONValue>;
						/**
						 * The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						onClick?: Record<string, JSONValue>;
						/**
						 * The color of the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						color?: Record<string, JSONValue>;
						/**
						 * The text displayed inside the button.
						 */
						text?: string;
						/**
						 * The alternative text that's used for accessibility.
						 */
						altText?: string;
						/**
						 * If `true`, the button is displayed in an inactive state and doesn't respond to user actions.
						 */
						disabled?: boolean;
					};
					/**
					 * Define a customizable button to expand the section.
					 */
					expandButton?: {
						/**
						 * The type of a button.
						 */
						type?:
							| ''
							| 'TYPE_UNSPECIFIED'
							| 'OUTLINED'
							| 'FILLED'
							| 'FILLED_TONAL'
							| 'BORDERLESS';
						/**
						 * An icon displayed inside the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						icon?: Record<string, JSONValue>;
						/**
						 * The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						onClick?: Record<string, JSONValue>;
						/**
						 * The color of the button. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
						 */
						color?: Record<string, JSONValue>;
						/**
						 * The text displayed inside the button.
						 */
						text?: string;
						/**
						 * The alternative text that's used for accessibility.
						 */
						altText?: string;
						/**
						 * If `true`, the button is displayed in an inactive state and doesn't respond to user actions.
						 */
						disabled?: boolean;
					};
					/**
					 * The horizontal alignment of the expand and collapse button.
					 */
					horizontalAlignment?:
						| ''
						| 'HORIZONTAL_ALIGNMENT_UNSPECIFIED'
						| 'START'
						| 'CENTER'
						| 'END';
				};
			}[];
			/**
			 * The card's actions.
			 *
			 * Items: A card action is the action associated with the card. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
			 */
			cardActions?: Record<string, JSONValue>[];
			/**
			 * The expression data for the card.
			 *
			 * Items: Represents the data that is used to evaluate an expression. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
			 */
			expressionData?: Record<string, JSONValue>[];
			/**
			 * The header of the card.
			 */
			header?: {
				/**
				 * The subtitle of the card header.
				 */
				subtitle?: string;
				/**
				 * The HTTPS URL of the image in the card header.
				 */
				imageUrl?: string;
				/**
				 * The alternative text of this image that's used for accessibility.
				 */
				imageAltText?: string;
				/**
				 * The shape used to crop the image.
				 */
				imageType?: '' | 'SQUARE' | 'CIRCLE';
			};
			/**
			 * In Google Workspace add-ons, sets the display properties of the `peekCardHeader`.
			 */
			displayStyle?: '' | 'DISPLAY_STYLE_UNSPECIFIED' | 'PEEK' | 'REPLACE';
			/**
			 * The divider style between the header, sections and footer.
			 */
			sectionDividerStyle?: '' | 'DIVIDER_STYLE_UNSPECIFIED' | 'SOLID_DIVIDER' | 'NO_DIVIDER';
			/**
			 * The fixed footer shown at the bottom of this card. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
			 */
			fixedFooter?: Record<string, JSONValue>;
			/**
			 * Name of the card.
			 */
			name?: string;
		};
		/**
		 * Required if the message contains multiple cards.
		 */
		cardId?: string;
	}[];
	/**
	 * Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace…
	 *
	 * Items: Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace…
	 */
	annotations?: {
		/**
		 * Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.
		 */
		startIndex?: number;
		/**
		 * The metadata for a custom emoji. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		customEmojiMetadata?: Record<string, JSONValue>;
		/**
		 * Length of the substring in the plain-text message body this annotation corresponds to.
		 */
		length?: number;
		/**
		 * The metadata for a rich link. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		richLinkMetadata?: Record<string, JSONValue>;
		/**
		 * The metadata for a slash command. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		slashCommand?: Record<string, JSONValue>;
		/**
		 * The metadata of user mention. The nested structure is not expanded further. See the [Google Chat API reference](https://developers.google.com/workspace/chat/api/reference/rest) for the full schema.
		 */
		userMention?: Record<string, JSONValue>;
		/**
		 * The type of this annotation.
		 */
		type?:
			| ''
			| 'ANNOTATION_TYPE_UNSPECIFIED'
			| 'USER_MENTION'
			| 'SLASH_COMMAND'
			| 'RICH_LINK'
			| 'CUSTOM_EMOJI';
	}[];
};

/**
 * Get a message
 * Returns details about a message, including its attachments.
 */
export async function getMessage(
	this: EndpointFunctionThis,
	payload: {
		input: GetMessageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetMessageOutput> {
	const response = await this.endpointCaller<GetMessageOutput>(
		{
			appName: 'google-chat',
			appVersion: 1,
			endpointName: 'getMessage',
		},
		payload,
	);
	return response.output;
}
