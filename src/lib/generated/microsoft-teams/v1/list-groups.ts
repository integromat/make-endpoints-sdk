// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListGroupsInput = {
	/**
	 * An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression to filter results. Example: `displayName eq 'HR Team'` or `startsWith(displayName, 'HR')`.
	 */
	filter?: string;
	/**
	 * An [OData `$orderby`](https://learn.microsoft.com/en-us/graph/query-parameters#orderby-parameter) expression to sort results. Example: `displayName asc` or `displayName desc`.
	 */
	orderby?: string;
	/**
	 * A comma-separated list of properties to include in the response. See [select parameter](https://learn.microsoft.com/en-us/graph/query-parameters#select-parameter).
	 */
	select?: string;
	/**
	 * The maximum number of results per page. Maximum value is `999`.
	 */
	top?: number;
	/**
	 * An [OData `$search`](https://learn.microsoft.com/en-us/graph/search-query-parameter) expression. Supports tokenization on `displayName` and `description` fields. Requires the `ConsistencyLevel: eventual` header (set via `arbitraryCall` if needed). Example: `"displayName:Video"`.
	 */
	search?: string;
	/**
	 * Set to `true` to include a count of the total number of matching items. Requires the `ConsistencyLevel: eventual` header.
	 */
	count?: boolean;
	/**
	 * The `@odata.nextLink` URL from a previous response. When provided, all other parameters are ignored — the URL already contains them.
	 */
	nextLink?: string;
};

export type ListGroupsOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The total count of matching items. Only present when `$count=true`.
	 */
	'@odata.count'?: number;
	/**
	 * The list of groups.
	 *
	 * Items: A group resource.
	 */
	value?: {
		/**
		 * The unique identifier for the group.
		 */
		id?: string;
		/**
		 * The display name for the group.
		 */
		displayName?: string;
		/**
		 * An optional description for the group.
		 */
		description?: string;
		/**
		 * Specifies the group type and its membership.
		 *
		 * Items: A group type value.
		 */
		groupTypes?: string[];
		/**
		 * The SMTP address for the group.
		 */
		mail?: string;
		/**
		 * Specifies whether the group is mail-enabled.
		 */
		mailEnabled?: boolean;
		/**
		 * The mail alias for the group.
		 */
		mailNickname?: string;
		/**
		 * Specifies whether the group is a security group.
		 */
		securityEnabled?: boolean;
		/**
		 * Specifies the group join policy and content visibility.
		 */
		visibility?: string;
		/**
		 * Describes a classification for the group.
		 */
		classification?: string;
		/**
		 * Timestamp of when the group was created.
		 */
		createdDateTime?: string;
		/**
		 * Timestamp of when the group was last renewed.
		 */
		renewedDateTime?: string;
		/**
		 * Timestamp of when the group is set to expire.
		 */
		expirationDateTime?: string;
		/**
		 * Timestamp when the group was deleted.
		 */
		deletedDateTime?: string;
		/**
		 * Indicates whether this group can be assigned to a Microsoft Entra role.
		 */
		isAssignableToRole?: boolean;
		/**
		 * The rule that determines members for this group.
		 */
		membershipRule?: string;
		/**
		 * Whether the dynamic membership processing is on or paused.
		 */
		membershipRuleProcessingState?: string;
		/**
		 * The preferred data location for the Microsoft 365 group.
		 */
		preferredDataLocation?: string;
		/**
		 * The preferred language for a Microsoft 365 group.
		 */
		preferredLanguage?: string;
		/**
		 * Email addresses for the group.
		 *
		 * Items: A proxy address.
		 */
		proxyAddresses?: string[];
		/**
		 * Specifies the group resources associated with the group.
		 *
		 * Items: A resource provisioning option.
		 */
		resourceProvisioningOptions?: string[];
		/**
		 * Security identifier of the group.
		 */
		securityIdentifier?: string;
		/**
		 * Specifies a Microsoft 365 group's color theme.
		 */
		theme?: string;
		/**
		 * `true` if this group is synced from an on-premises directory.
		 */
		onPremisesSyncEnabled?: boolean;
		/**
		 * Errors published by a federated service.
		 *
		 * Items: A provisioning error.
		 */
		serviceProvisioningErrors?: {
			/**
			 * The date and time at which the error occurred.
			 */
			createdDateTime?: string;
			/**
			 * Whether the error has been resolved.
			 */
			isResolved?: boolean;
			/**
			 * Qualified service instance that published the error.
			 */
			serviceInstance?: string;
		}[];
	}[];
	/**
	 * The URL for the next page of results.
	 */
	'@odata.nextLink'?: string;
};

/**
 * List groups
 * Lists all groups in the organization.
 */
export async function listGroups(
	this: EndpointFunctionThis,
	payload: {
		input: ListGroupsInput;
		connectionId: number;
	},
): Promise<ListGroupsOutput> {
	const response = await this.endpointCaller<ListGroupsOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'listGroups',
		},
		payload,
	);
	return response.output;
}
