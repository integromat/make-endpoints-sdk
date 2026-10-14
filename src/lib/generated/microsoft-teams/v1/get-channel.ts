// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetChannelInput = {
	/**
	 * The unique identifier of the team.
	 */
	teamId: string;
	/**
	 * The unique identifier of the channel.
	 */
	channelId: string;
};

export type GetChannelOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The channel's unique identifier.
	 */
	id?: string;
	/**
	 * Channel name as it appears in Microsoft Teams.
	 */
	displayName?: string;
	/**
	 * Optional textual description for the channel.
	 */
	description?: string;
	/**
	 * The type of the channel. Possible values: `standard`, `private`, `shared`.
	 */
	membershipType?: string;
	/**
	 * A hyperlink to the channel in Microsoft Teams.
	 */
	webUrl?: string;
	/**
	 * The email address for sending messages to the channel.
	 */
	email?: string;
	/**
	 * Timestamp at which the channel was created.
	 */
	createdDateTime?: string;
	/**
	 * The ID of the Microsoft Entra tenant.
	 */
	tenantId?: string;
	/**
	 * Whether the channel is archived.
	 */
	isArchived?: boolean;
	/**
	 * Whether the channel should be marked as recommended for all members.
	 */
	isFavoriteByDefault?: boolean;
	/**
	 * The layout type of the channel. Possible values: `post`, `chat`.
	 */
	layoutType?: string;
	/**
	 * Summary information about the channel.
	 */
	summary?: {
		/**
		 * Count of owners in the channel.
		 */
		ownersCount?: number;
		/**
		 * Count of members in the channel.
		 */
		membersCount?: number;
		/**
		 * Count of guests in the channel.
		 */
		guestsCount?: number;
		/**
		 * Indicates whether external members are included on the channel.
		 */
		hasMembersFromOtherTenants?: boolean;
	};
	/**
	 * Whether the channel is in migration mode. Null if never migrated.
	 */
	migrationMode?: string;
	/**
	 * Timestamp of the original creation time. Null if never migrated.
	 */
	originalCreatedDateTime?: string;
};

/**
 * Get a channel
 * Retrieves the properties of a channel.
 */
export async function getChannel(
	this: EndpointFunctionThis,
	payload: {
		input: GetChannelInput;
		connectionId: number;
	},
): Promise<GetChannelOutput> {
	const response = await this.endpointCaller<GetChannelOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'getChannel',
		},
		payload,
	);
	return response.output;
}
