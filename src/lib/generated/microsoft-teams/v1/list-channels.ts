// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListChannelsInput = {
	/**
	 * The unique identifier of the team.
	 */
	teamId: string;
	/**
	 * An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression to filter results. Example: `membershipType eq 'standard'`.
	 */
	filter?: string;
	/**
	 * A comma-separated list of properties to include in the response. Excluding the `email` property improves performance. See [select parameter](https://learn.microsoft.com/en-us/graph/query-parameters#select-parameter).
	 */
	select?: string;
	/**
	 * The `@odata.nextLink` URL from a previous response. When provided, all other parameters are ignored — the URL already contains them.
	 */
	nextLink?: string;
};

export type ListChannelsOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The list of channels.
	 *
	 * Items: A channel resource.
	 */
	value?: {
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
		 * The type of the channel.
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
		 * Whether the channel is marked as recommended.
		 */
		isFavoriteByDefault?: boolean;
		/**
		 * The layout type of the channel.
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
			 * Indicates whether external members are included.
			 */
			hasMembersFromOtherTenants?: boolean;
		};
		/**
		 * Whether the channel is in migration mode.
		 */
		migrationMode?: string;
		/**
		 * Timestamp of the original creation time.
		 */
		originalCreatedDateTime?: string;
	}[];
	/**
	 * The URL for the next page of results.
	 */
	'@odata.nextLink'?: string;
};

/**
 * List channels
 * Lists all channels in a team.
 */
export async function listChannels(
	this: EndpointFunctionThis,
	payload: {
		input: ListChannelsInput;
		connectionId: number;
	},
): Promise<ListChannelsOutput> {
	const response = await this.endpointCaller<ListChannelsOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'listChannels',
		},
		payload,
	);
	return response.output;
}
