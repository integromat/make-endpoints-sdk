// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetPresenceByUserIdsInput = {
	/**
	 * The list of user IDs to get presence for. Maximum 650 IDs per request.
	 *
	 * @maxItems 650
	 *
	 * Items: The unique identifier of a user.
	 */
	ids: string[];
};

export type GetPresenceByUserIdsOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The list of presence information for the requested users.
	 *
	 * Items: A presence resource.
	 */
	value?: {
		/**
		 * The unique identifier of the user.
		 */
		id?: string;
		/**
		 * The base presence information. Possible values: `Available`, `Away`, `BeRightBack`, `Busy`, `DoNotDisturb`, `Focusing`, `InACall`, `InAMeeting`, `Offline`, `Presenting`, `PresenceUnknown`.
		 */
		availability?: string;
		/**
		 * The supplemental information to a user's availability. Possible values: `Available`, `Away`, `BeRightBack`, `Busy`, `DoNotDisturb`, `Offline`, `OutOfOffice`, `PresenceUnknown`.
		 */
		activity?: string;
		/**
		 * The out of office settings for the user.
		 */
		outOfOfficeSettings?: {
			/**
			 * Whether the user is currently out of office.
			 */
			isOutOfOffice?: boolean;
			/**
			 * The out-of-office message configured by the user.
			 */
			message?: string;
		};
		/**
		 * The presence status message of the user.
		 */
		statusMessage?: {
			/**
			 * Time in which the status message expires.
			 */
			expiryDateTime?: {
				/**
				 * The date and time value.
				 */
				dateTime?: string;
				/**
				 * The time zone.
				 */
				timeZone?: string;
			};
			/**
			 * The status message item.
			 */
			message?: {
				/**
				 * The content of the item body.
				 */
				content?: string;
				/**
				 * The type of the content.
				 */
				contentType?: string;
			};
			/**
			 * Time in which the status message was published.
			 */
			publishedDateTime?: string;
		};
		/**
		 * A lexicographically sortable string representing the version of the presence.
		 */
		sequenceNumber?: string;
		/**
		 * The user's aggregated work location state.
		 */
		workLocation?: {
			/**
			 * Identifier of the place, if applicable.
			 */
			placeId?: string;
			/**
			 * Which layer wins the aggregation. Possible values: `none`, `manual`, `scheduled`, `automatic`.
			 */
			source?: string;
			/**
			 * Semantic type of the location. Possible values: `unspecified`, `office`, `remote`, `timeOff`.
			 */
			workLocationType?: string;
		};
	}[];
};

/**
 * Get presence by user IDs
 * Retrieves the presence information for multiple users.
 */
export async function getPresenceByUserIds(
	this: EndpointFunctionThis,
	payload: {
		input: GetPresenceByUserIdsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetPresenceByUserIdsOutput> {
	const response = await this.endpointCaller<GetPresenceByUserIdsOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'getPresenceByUserIds',
		},
		payload,
	);
	return response.output;
}
