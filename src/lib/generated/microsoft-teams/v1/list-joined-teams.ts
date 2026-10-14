// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListJoinedTeamsInput = {
	/**
	 * The `@odata.nextLink` URL from a previous response. When provided, retrieves the next page of results.
	 */
	nextLink?: string;
};

export type ListJoinedTeamsOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The list of teams the user has joined.
	 *
	 * Items: A team resource.
	 */
	value?: {
		/**
		 * The unique identifier of the team.
		 */
		id?: string;
		/**
		 * The display name of the team.
		 */
		displayName?: string;
		/**
		 * The description of the team.
		 */
		description?: string;
		/**
		 * Whether the team is archived.
		 */
		isArchived?: boolean;
		/**
		 * Timestamp at which the team was created.
		 */
		createdDateTime?: string;
		/**
		 * The ID of the Microsoft Entra tenant.
		 */
		tenantId?: string;
		/**
		 * An optional label describing the sensitivity of the team.
		 */
		classification?: string;
		/**
		 * The unique identifier for the team's internal use.
		 */
		internalId?: string;
		/**
		 * The type of the team.
		 */
		specialization?: string;
		/**
		 * The visibility of the group and team.
		 */
		visibility?: string;
		/**
		 * The URL to the team in Microsoft Teams client.
		 */
		webUrl?: string;
		/**
		 * Settings to configure whether members can perform certain actions.
		 */
		memberSettings?: {
			/**
			 * Whether members can create and update channels.
			 */
			allowCreateUpdateChannels?: boolean;
			/**
			 * Whether members can delete channels.
			 */
			allowDeleteChannels?: boolean;
			/**
			 * Whether members can add and remove apps.
			 */
			allowAddRemoveApps?: boolean;
			/**
			 * Whether members can create, update, and remove tabs.
			 */
			allowCreateUpdateRemoveTabs?: boolean;
			/**
			 * Whether members can create, update, and remove connectors.
			 */
			allowCreateUpdateRemoveConnectors?: boolean;
		};
		/**
		 * Settings to configure messaging and mentions.
		 */
		messagingSettings?: {
			/**
			 * Whether users can edit their sent messages.
			 */
			allowUserEditMessages?: boolean;
			/**
			 * Whether users can delete their sent messages.
			 */
			allowUserDeleteMessages?: boolean;
			/**
			 * Whether owners can delete any message.
			 */
			allowOwnerDeleteMessages?: boolean;
			/**
			 * Whether @team mentions are allowed.
			 */
			allowTeamMentions?: boolean;
			/**
			 * Whether @channel mentions are allowed.
			 */
			allowChannelMentions?: boolean;
		};
		/**
		 * Settings to configure fun content.
		 */
		funSettings?: {
			/**
			 * Whether Giphy is enabled.
			 */
			allowGiphy?: boolean;
			/**
			 * The content rating for Giphy.
			 */
			giphyContentRating?: string;
			/**
			 * Whether stickers and memes are enabled.
			 */
			allowStickersAndMemes?: boolean;
			/**
			 * Whether custom memes are enabled.
			 */
			allowCustomMemes?: boolean;
		};
		/**
		 * Settings to configure whether guests can create, update, or delete channels.
		 */
		guestSettings?: {
			/**
			 * Whether guests can create channels.
			 */
			allowCreateUpdateChannels?: boolean;
			/**
			 * Whether guests can delete channels.
			 */
			allowDeleteChannels?: boolean;
		};
		/**
		 * Settings for a class-type team.
		 */
		classSettings?: {
			/**
			 * Whether to send weekly assignments digest emails to parents/guardians.
			 */
			notifyGuardiansAboutAssignments?: boolean;
		};
		/**
		 * Summary information about the team.
		 */
		summary?: {
			/**
			 * Count of owners in the team.
			 */
			ownersCount?: number;
			/**
			 * Count of members in the team.
			 */
			membersCount?: number;
			/**
			 * Count of guests in the team.
			 */
			guestsCount?: number;
		};
	}[];
	/**
	 * The URL for the next page of results.
	 */
	'@odata.nextLink'?: string;
};

/**
 * List joined teams
 * Lists the teams the authenticated user has joined.
 */
export async function listJoinedTeams(
	this: EndpointFunctionThis,
	payload: {
		input: ListJoinedTeamsInput;
		connectionId: number;
	},
): Promise<ListJoinedTeamsOutput> {
	const response = await this.endpointCaller<ListJoinedTeamsOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'listJoinedTeams',
		},
		payload,
	);
	return response.output;
}
