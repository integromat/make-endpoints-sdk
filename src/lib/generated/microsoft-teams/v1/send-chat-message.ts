// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendChatMessageInput = {
	/**
	 * The unique identifier of the chat.
	 */
	chatId: string;
	/**
	 * The content of the message. Can be plain text or HTML depending on the content type.
	 */
	content: string;
	/**
	 * The type of the message content.
	 */
	contentType: 'text' | 'html';
	/**
	 * The subject of the message (optional).
	 */
	subject?: string;
	/**
	 * The importance of the message.
	 */
	importance?: '' | 'normal' | 'high' | 'urgent';
	/**
	 * A list of entities mentioned in the message. Each mention must include the `id` (index), `mentionText`, and `mentioned` (identity object).
	 *
	 * Items: A mention in the message.
	 */
	mentions?: {
		/**
		 * The index (0-based) of the mention in the message body.
		 */
		id: number;
		/**
		 * The text to display for the mention.
		 */
		mentionText: string;
		/**
		 * The identity of the mentioned entity (user, team, or channel).
		 */
		mentioned: {
			/**
			 * The mentioned user identity.
			 */
			user?: {
				/**
				 * The unique identifier (Azure AD object ID) of the mentioned user.
				 */
				id: string;
				/**
				 * The display name of the mentioned user.
				 */
				displayName: string;
				/**
				 * The type of user identity.
				 */
				userIdentityType?:
					| ''
					| 'aadUser'
					| 'onPremiseAadUser'
					| 'anonymousGuest'
					| 'federatedUser'
					| 'personalMicrosoftAccountUser'
					| 'skypeUser'
					| 'phoneUser'
					| 'emailUser';
			};
			/**
			 * The mentioned conversation identity (for channel/team mentions).
			 */
			conversation?: {
				/**
				 * The unique identifier of the conversation.
				 */
				id?: string;
				/**
				 * The display name of the conversation.
				 */
				displayName?: string;
				/**
				 * The type of the conversation identity.
				 */
				conversationIdentityType?: '' | 'team' | 'channel' | 'chat';
			};
		};
	}[];
	/**
	 * A list of attachments to include with the message.
	 *
	 * Items: A message attachment.
	 */
	attachments?: {
		/**
		 * The media type of the content attachment. Must be `reference` for file attachments.
		 */
		contentType?: string;
		/**
		 * The URL to the attachment content.
		 */
		contentUrl: string;
		/**
		 * The display name of the attachment.
		 */
		name?: string;
		/**
		 * The ID of the attachment.
		 */
		id?: string;
		/**
		 * The ID of the Teams app associated with the attachment.
		 */
		teamsAppId?: string;
		/**
		 * The URL to a thumbnail image for the attachment.
		 */
		thumbnailUrl?: string;
	}[];
};

export type SendChatMessageOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The unique identifier of the message.
	 */
	id?: string;
	/**
	 * The subject of the chat message, in plaintext.
	 */
	subject?: string;
	/**
	 * The body of the message.
	 */
	body?: {
		/**
		 * The type of the content. Possible values: `text`, `html`.
		 */
		contentType?: string;
		/**
		 * The content of the body.
		 */
		content?: string;
	};
	/**
	 * The sender of the message.
	 */
	from?: {
		/**
		 * The user identity of the sender.
		 */
		user?: {
			/**
			 * The unique identifier of the user.
			 */
			id?: string;
			/**
			 * The display name of the user.
			 */
			displayName?: string;
			/**
			 * The type of user identity.
			 */
			userIdentityType?: string;
		};
		/**
		 * The application identity of the sender.
		 */
		application?: {
			/**
			 * The unique identifier of the application.
			 */
			id?: string;
			/**
			 * The display name of the application.
			 */
			displayName?: string;
			/**
			 * The type of application identity.
			 */
			applicationIdentityType?: string;
		};
	};
	/**
	 * Timestamp when the message was created.
	 */
	createdDateTime?: string;
	/**
	 * Timestamp when the message was last modified.
	 */
	lastModifiedDateTime?: string;
	/**
	 * Timestamp when edits to the chat message were made.
	 */
	lastEditedDateTime?: string;
	/**
	 * Timestamp at which the chat message was deleted, or null if not deleted.
	 */
	deletedDateTime?: string;
	/**
	 * The importance of the message.
	 */
	importance?: string;
	/**
	 * The type of chat message.
	 */
	messageType?: string;
	/**
	 * Link to the message in Microsoft Teams.
	 */
	webUrl?: string;
	/**
	 * Locale of the chat message set by the client.
	 */
	locale?: string;
	/**
	 * Version number of the chat message.
	 */
	etag?: string;
	/**
	 * References to attached objects like files, tabs, meetings.
	 *
	 * Items: A message attachment.
	 */
	attachments?: {
		/**
		 * The unique ID of the attachment.
		 */
		id?: string;
		/**
		 * The media type of the content attachment.
		 */
		contentType?: string;
		/**
		 * The URL for the content of the attachment.
		 */
		contentUrl?: string;
		/**
		 * The content of the attachment (for rich cards).
		 */
		content?: string;
		/**
		 * The name of the attachment.
		 */
		name?: string;
		/**
		 * The ID of the Teams app associated with the attachment.
		 */
		teamsAppId?: string;
		/**
		 * The URL to a thumbnail image for the attachment.
		 */
		thumbnailUrl?: string;
	}[];
	/**
	 * List of entities mentioned in the chat message.
	 *
	 * Items: A mention in the message.
	 */
	mentions?: {
		/**
		 * The index of the mention.
		 */
		id?: number;
		/**
		 * The string used to represent the mention.
		 */
		mentionText?: string;
		/**
		 * The entity mentioned.
		 */
		mentioned?: {
			/**
			 * The mentioned user identity.
			 */
			user?: {
				/**
				 * The unique identifier of the user.
				 */
				id?: string;
				/**
				 * The display name of the user.
				 */
				displayName?: string;
			};
			/**
			 * The mentioned conversation identity.
			 */
			conversation?: {
				/**
				 * The unique identifier of the conversation.
				 */
				id?: string;
				/**
				 * The display name of the conversation.
				 */
				displayName?: string;
				/**
				 * The type of conversation identity.
				 */
				conversationIdentityType?: string;
			};
		};
	}[];
	/**
	 * Reactions for this chat message.
	 *
	 * Items: A reaction to the message.
	 */
	reactions?: {
		/**
		 * The reaction type. Possible values: `like`, `angry`, `sad`, `laugh`, `heart`, `surprised`.
		 */
		reactionType?: string;
		/**
		 * Timestamp of when the reaction was created.
		 */
		createdDateTime?: string;
		/**
		 * The user who reacted.
		 */
		user?: {
			/**
			 * The unique identifier of the user.
			 */
			id?: string;
			/**
			 * The display name of the user.
			 */
			displayName?: string;
		};
	}[];
	/**
	 * Summary text of the chat message.
	 */
	summary?: string;
	/**
	 * The ID of the chat.
	 */
	chatId?: string;
	/**
	 * The identity of the channel.
	 */
	channelIdentity?: {
		/**
		 * The unique identifier of the team.
		 */
		teamId?: string;
		/**
		 * The unique identifier of the channel.
		 */
		channelId?: string;
	};
	/**
	 * ID of the parent chat message or root chat message of the thread.
	 */
	replyToId?: string;
	/**
	 * Defines the properties of a policy violation set by a DLP application.
	 */
	policyViolation?: {
		/**
		 * The action taken by the DLP provider. Possible values: `none`, `notifySender`, `blockAccess`, `blockAccessExternal`.
		 */
		dlpAction?: string;
		/**
		 * The justification text provided by the sender for an override.
		 */
		justificationText?: string;
		/**
		 * Information to display to the message sender about why the message was flagged.
		 */
		policyTip?: {
			/**
			 * General explanatory text for the policy tip.
			 */
			generalText?: string;
			/**
			 * The URL for more information on the compliance policy.
			 */
			complianceUrl?: string;
			/**
			 * The list of matched condition descriptions.
			 *
			 * Items: A matched condition description.
			 */
			matchedConditionDescriptions?: string[];
		};
		/**
		 * The action taken by the user. Possible values: `none`, `override`, `reportFalsePositive`.
		 */
		userAction?: string;
		/**
		 * What the sender may do to overcome the violation. Possible values: `none`, `allowFalsePositiveOverride`, `allowOverrideWithoutJustification`, `allowOverrideWithJustification`.
		 */
		verdictDetails?: string;
	};
	/**
	 * Details of an event that happened in a chat, channel, or team. The shape varies by event type — use the `@odata.type` discriminator to determine the specific event.
	 */
	eventDetail?: {
		/**
		 * The OData type discriminator indicating the specific event type (e.g. `#microsoft.graph.channelAddedEventMessageDetail`).
		 */
		'@odata.type'?: string;
	};
	/**
	 * Activity history of the message.
	 *
	 * Items: A history item.
	 */
	messageHistory?: {
		/**
		 * The date and time when the message was modified.
		 */
		modifiedDateTime?: string;
		/**
		 * The action that occurred on the message. Possible values: `reactionAdded`, `reactionRemoved`, `actionUndefined`.
		 */
		actions?: string;
		/**
		 * The reaction in the modified message.
		 */
		reaction?: {
			/**
			 * The reaction type.
			 */
			reactionType?: string;
			/**
			 * Timestamp of when the reaction was created.
			 */
			createdDateTime?: string;
			/**
			 * The user who reacted.
			 */
			user?: {
				/**
				 * The unique identifier of the user.
				 */
				id?: string;
				/**
				 * The display name of the user.
				 */
				displayName?: string;
			};
		};
	}[];
};

/**
 * Send a chat message
 * Sends a message in a chat.
 */
export async function sendChatMessage(
	this: EndpointFunctionThis,
	payload: {
		input: SendChatMessageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SendChatMessageOutput> {
	const response = await this.endpointCaller<SendChatMessageOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'sendChatMessage',
		},
		payload,
	);
	return response.output;
}
