// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateChatInput = {
	/**
	 * Specifies the type of chat.
	 */
	chatType: 'oneOnOne' | 'group';
	/**
	 * The list of conversation members that should be added. Every member must provide the `@odata.type`, `roles`, and `user@odata.bind` properties.
	 *
	 * Items: A conversation member to add to the chat.
	 */
	members: {
		/**
		 * The OData type of the member. Use `#microsoft.graph.aadUserConversationMember`.
		 */
		'@odata.type': string;
		/**
		 * The roles of the user in the chat.
		 *
		 * Items: A role value.
		 */
		roles?: ('' | 'owner' | 'guest')[];
		/**
		 * The URI of the user to add, e.g. `https://graph.microsoft.com/v1.0/users/{userId}`.
		 */
		'user@odata.bind': string;
	}[];
	/**
	 * The title of the chat. This is only available for group chats.
	 */
	topic?: string;
};

export type CreateChatOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The unique identifier of the chat.
	 */
	id?: string;
	/**
	 * The type of the chat (oneOnOne, group, meeting).
	 */
	chatType?: string;
	/**
	 * Subject or topic for the chat (only for group chats).
	 */
	topic?: string;
	/**
	 * Timestamp when the chat was created.
	 */
	createdDateTime?: string;
	/**
	 * Timestamp when the chat or a message in it was last updated.
	 */
	lastUpdatedDateTime?: string;
	/**
	 * A link to the chat in Microsoft Teams.
	 */
	webUrl?: string;
	/**
	 * The ID of the Microsoft Entra tenant.
	 */
	tenantId?: string;
	/**
	 * Whether the chat is hidden for all its members.
	 */
	isHiddenForAllMembers?: boolean;
	/**
	 * Represents details about an online meeting associated with the chat.
	 */
	onlineMeetingInfo?: {
		/**
		 * The identifier of the calendar event associated with the meeting.
		 */
		calendarEventId?: string;
		/**
		 * The URL that users click to join the meeting.
		 */
		joinWebUrl?: string;
		/**
		 * The organizer of the meeting.
		 */
		organizer?: {
			/**
			 * The unique identifier of the organizer.
			 */
			id?: string;
			/**
			 * The display name of the organizer.
			 */
			displayName?: string;
			/**
			 * The type of user identity.
			 */
			userIdentityType?: string;
		};
	};
	/**
	 * Caller-specific information about the chat.
	 */
	viewpoint?: {
		/**
		 * Whether the chat is hidden for the current user.
		 */
		isHidden?: boolean;
		/**
		 * The date and time up to which the user has read messages.
		 */
		lastMessageReadDateTime?: string;
	};
	/**
	 * Indicates whether a chat is in migration mode. Null if never migrated.
	 */
	migrationMode?: string;
	/**
	 * Timestamp of the original creation time. Null if never migrated.
	 */
	originalCreatedDateTime?: string;
};

/**
 * Create a chat
 * Creates a new chat.
 */
export async function createChat(
	this: EndpointFunctionThis,
	payload: {
		input: CreateChatInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateChatOutput> {
	const response = await this.endpointCaller<CreateChatOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'createChat',
		},
		payload,
	);
	return response.output;
}
