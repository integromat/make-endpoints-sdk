// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateOnlineMeetingInput = {
	/**
	 * The unique identifier of the online meeting to update.
	 */
	meetingId: string;
	/**
	 * The subject of the online meeting.
	 */
	subject?: string;
	/**
	 * The meeting start time in UTC. When adjusting start or end time, both must be provided.
	 */
	startDateTime?: string;
	/**
	 * The meeting end time in UTC. When adjusting start or end time, both must be provided.
	 */
	endDateTime?: string;
	/**
	 * The list of meeting attendees. The organizer cannot be updated. When updating attendees, provide the full list.
	 *
	 * Items: A meeting participant.
	 */
	attendees?: {
		/**
		 * The user principal name (email) of the attendee.
		 */
		upn?: string;
		/**
		 * The role of the attendee.
		 */
		role?: '' | 'attendee' | 'presenter' | 'producer';
	}[];
	/**
	 * Specifies who can be a presenter.
	 */
	allowedPresenters?: '' | 'everyone' | 'organization' | 'roleIsPresenter' | 'organizer';
	/**
	 * Whether to announce when callers join or leave.
	 */
	isEntryExitAnnounced?: boolean;
	/**
	 * Whether to record the meeting automatically.
	 */
	recordAutomatically?: boolean;
	/**
	 * Settings for which participants can bypass the lobby.
	 */
	lobbyBypassSettings?: {
		/**
		 * Specifies the type of participants that are automatically admitted.
		 */
		scope?:
			| ''
			| 'organizer'
			| 'organization'
			| 'organizationAndFederated'
			| 'everyone'
			| 'invited'
			| 'organizationExcludingGuests';
		/**
		 * Whether or not to allow dial-in users to bypass the lobby.
		 */
		isDialInBypassEnabled?: boolean;
	};
	/**
	 * Whether attendees can turn on their cameras.
	 */
	allowAttendeeToEnableCamera?: boolean;
	/**
	 * Whether attendees can turn on their microphones.
	 */
	allowAttendeeToEnableMic?: boolean;
	/**
	 * Specifies the mode of meeting chat.
	 */
	allowMeetingChat?: '' | 'enabled' | 'disabled' | 'limited';
	/**
	 * Whether Teams reactions are enabled.
	 */
	allowTeamworkReactions?: boolean;
	/**
	 * Whether recording is enabled.
	 */
	allowRecording?: boolean;
	/**
	 * Whether transcription is enabled.
	 */
	allowTranscription?: boolean;
	/**
	 * Whether whiteboard is enabled.
	 */
	allowWhiteboard?: boolean;
	/**
	 * Whether breakout rooms are enabled.
	 */
	allowBreakoutRooms?: boolean;
	/**
	 * Whether PowerPoint live is enabled.
	 */
	allowPowerPointSharing?: boolean;
	/**
	 * Whether live share is enabled.
	 */
	allowLiveShare?: '' | 'enabled' | 'disabled';
	/**
	 * Whether the ability to copy and share meeting content is enabled.
	 */
	allowCopyingAndSharingMeetingContent?: boolean;
	/**
	 * Specifies the users who can admit from the lobby.
	 */
	allowedLobbyAdmitters?:
		| ''
		| 'organizerAndCoOrganizersAndPresenters'
		| 'organizerAndCoOrganizers';
	/**
	 * Whether end-to-end encryption is enabled.
	 */
	isEndToEndEncryptionEnabled?: boolean;
	/**
	 * Specifies whether the client application should apply a watermark to content or video.
	 */
	watermarkProtection?: {
		/**
		 * Whether watermark is applied to any shared content.
		 */
		isEnabledForContentSharing?: boolean;
		/**
		 * Whether watermark is applied to the attendee's video feed.
		 */
		isEnabledForVideo?: boolean;
	};
	/**
	 * The spoken language tag for meeting recording and transcription (e.g. `en-US`).
	 */
	meetingSpokenLanguageTag?: string;
};

export type UpdateOnlineMeetingOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The unique identifier of the online meeting.
	 */
	id?: string;
	/**
	 * The subject of the online meeting.
	 */
	subject?: string;
	/**
	 * The join URL of the online meeting.
	 */
	joinWebUrl?: string;
	/**
	 * The join information in the language and locale variant.
	 */
	joinInformation?: {
		/**
		 * The content type of the join information.
		 */
		contentType?: string;
		/**
		 * The HTML content with join meeting information.
		 */
		content?: string;
	};
	/**
	 * The meeting start time in UTC.
	 */
	startDateTime?: string;
	/**
	 * The meeting end time in UTC.
	 */
	endDateTime?: string;
	/**
	 * The meeting creation time in UTC.
	 */
	creationDateTime?: string;
	/**
	 * The date and time when the meeting resource expires.
	 */
	expiryDateTime?: string;
	/**
	 * The phone access (dial-in) information for the meeting.
	 */
	audioConferencing?: {
		/**
		 * The conference ID of the online meeting.
		 */
		conferenceId?: string;
		/**
		 * A URL to the externally-accessible web page with dial-in info.
		 */
		dialinUrl?: string;
		/**
		 * The toll-free numbers that can be used to join the meeting.
		 *
		 * Items: A toll-free phone number.
		 */
		tollFreeNumbers?: string[];
		/**
		 * The toll numbers that can be used to join the meeting.
		 *
		 * Items: A toll phone number.
		 */
		tollNumbers?: string[];
	};
	/**
	 * Specifies who can be a presenter.
	 */
	allowedPresenters?: string;
	/**
	 * Whether to announce when callers join or leave.
	 */
	isEntryExitAnnounced?: boolean;
	/**
	 * Settings for which participants can bypass the lobby.
	 */
	lobbyBypassSettings?: {
		/**
		 * The type of participants automatically admitted.
		 */
		scope?: string;
		/**
		 * Whether dial-in users bypass the lobby.
		 */
		isDialInBypassEnabled?: boolean;
	};
	/**
	 * The participants associated with the meeting.
	 */
	participants?: {
		/**
		 * The meeting organizer.
		 */
		organizer?: {
			/**
			 * The user principal name of the organizer.
			 */
			upn?: string;
			/**
			 * The role of the organizer.
			 */
			role?: string;
			/**
			 * The identity set of the organizer.
			 */
			identity?: {
				/**
				 * The user identity.
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
			};
		};
		/**
		 * The attendees of the meeting.
		 *
		 * Items: A meeting attendee.
		 */
		attendees?: {
			/**
			 * The user principal name of the attendee.
			 */
			upn?: string;
			/**
			 * The role of the attendee.
			 */
			role?: string;
			/**
			 * The identity set of the attendee.
			 */
			identity?: {
				/**
				 * The user identity.
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
			};
		}[];
	};
	/**
	 * The chat information associated with this meeting.
	 */
	chatInfo?: {
		/**
		 * The unique identifier of the chat thread.
		 */
		threadId?: string;
		/**
		 * The unique identifier of the message.
		 */
		messageId?: string;
		/**
		 * The ID of the reply chain message.
		 */
		replyChainMessageId?: string;
	};
	/**
	 * The video teleconferencing ID.
	 */
	videoTeleconferenceId?: string;
	/**
	 * The external ID (custom identifier).
	 */
	externalId?: string;
	/**
	 * Whether to record the meeting automatically.
	 */
	recordAutomatically?: boolean;
	/**
	 * Whether attendees can turn on their cameras.
	 */
	allowAttendeeToEnableCamera?: boolean;
	/**
	 * Whether attendees can turn on their microphones.
	 */
	allowAttendeeToEnableMic?: boolean;
	/**
	 * Specifies the mode of meeting chat.
	 */
	allowMeetingChat?: string;
	/**
	 * Whether Teams reactions are enabled.
	 */
	allowTeamworkReactions?: boolean;
	/**
	 * Whether recording is enabled.
	 */
	allowRecording?: boolean;
	/**
	 * Whether transcription is enabled.
	 */
	allowTranscription?: boolean;
	/**
	 * Whether whiteboard is enabled.
	 */
	allowWhiteboard?: boolean;
	/**
	 * Whether breakout rooms are enabled.
	 */
	allowBreakoutRooms?: boolean;
	/**
	 * Whether PowerPoint live is enabled.
	 */
	allowPowerPointSharing?: boolean;
	/**
	 * Whether live share is enabled.
	 */
	allowLiveShare?: string;
	/**
	 * Whether the ability to copy and share meeting content is enabled.
	 */
	allowCopyingAndSharingMeetingContent?: boolean;
	/**
	 * Whether participants are allowed to rename themselves.
	 */
	allowParticipantsToChangeName?: boolean;
	/**
	 * Specifies the users who can admit from the lobby.
	 */
	allowedLobbyAdmitters?: string;
	/**
	 * Whether end-to-end encryption is enabled.
	 */
	isEndToEndEncryptionEnabled?: boolean;
	/**
	 * The meeting ID and passcode settings.
	 */
	joinMeetingIdSettings?: {
		/**
		 * The meeting ID used to join the meeting.
		 */
		joinMeetingId?: string;
		/**
		 * Whether a passcode is required to join.
		 */
		isPasscodeRequired?: boolean;
		/**
		 * The passcode to join the meeting.
		 */
		passcode?: string;
	};
	/**
	 * The URL to the Teams meeting options page.
	 */
	meetingOptionsWebUrl?: string;
	/**
	 * The type of the online meeting.
	 */
	meetingType?: string;
	/**
	 * Whether meeting chat history is shared with participants.
	 */
	shareMeetingChatHistoryDefault?: string;
	/**
	 * Whether this meeting is a Teams live event (deprecated).
	 */
	isBroadcast?: boolean;
	/**
	 * Specifies whether the client application should apply a watermark.
	 */
	watermarkProtection?: {
		/**
		 * Whether watermark is applied to any shared content.
		 */
		isEnabledForContentSharing?: boolean;
		/**
		 * Whether watermark is applied to the attendee's video feed.
		 */
		isEnabledForVideo?: boolean;
	};
};

/**
 * Update an online meeting
 * Updates the properties of an online meeting.
 */
export async function updateOnlineMeeting(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateOnlineMeetingInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateOnlineMeetingOutput> {
	const response = await this.endpointCaller<UpdateOnlineMeetingOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'updateOnlineMeeting',
		},
		payload,
	);
	return response.output;
}
