// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListGroupsInput = {
	/**
	 * An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression. Sent as `$filter`. For example, `startsWith(displayName,'J')` or `groupTypes/any(c:c eq 'Unified')`.
	 */
	filter?: string;
	/**
	 * An [OData `$search`](https://learn.microsoft.com/en-us/graph/search-query-parameter) expression. Sent as `$search`. Supported on `displayName` and `description`. For example, `"displayName:Video"`.
	 */
	search?: string;
	/**
	 * A comma-separated list of properties to return. Sent as `$select`. For example, `id,displayName`.
	 */
	select?: string;
	/**
	 * The relationship to expand in the results. Sent as `$expand`. For example, `members`.
	 */
	expand?: string;
	/**
	 * The sort order of the results. Sent as `$orderby`. For example, `displayName desc`.
	 */
	orderby?: string;
	/**
	 * Set to `true` to include the total number of matching items in `@odata.count`. Sent as `$count`.
	 */
	count?: boolean;
	/**
	 * The number of results per page. Sent as `$top`. The default is 100 and the maximum is 999.
	 */
	top?: number;
	/**
	 * The `@odata.nextLink` URL from a previous response. Use it to get the next page and leave the other inputs empty, because the link already contains them.
	 */
	nextLink?: string;
};

export type ListGroupsOutput = {
	/**
	 * The OData context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The total number of matching groups. Returned only when the count input is `true`.
	 */
	'@odata.count'?: number;
	/**
	 * The URL of the next page of results. Absent on the last page.
	 */
	'@odata.nextLink'?: string;
	/**
	 * The list of groups.
	 *
	 * Items: A group.
	 */
	value?: {
		/**
		 * The unique identifier of the group.
		 */
		id?: string;
		/**
		 * The sensitivity labels assigned to the group. Returned only with the select parameter.
		 *
		 * Items: A sensitivity label.
		 */
		assignedLabels?: {
			/**
			 * The unique identifier of the label.
			 */
			labelId?: string;
			/**
			 * The display name of the label.
			 */
			displayName?: string;
		}[];
		/**
		 * The licenses assigned to the group. Returned only with the select parameter.
		 *
		 * Items: A license assigned to the group.
		 */
		assignedLicenses?: {
			/**
			 * The unique identifier of the license SKU.
			 */
			skuId?: string;
			/**
			 * The IDs of the service plans disabled for this license.
			 *
			 * Items: The ID of a disabled service plan.
			 */
			disabledPlans?: string[];
		}[];
		/**
		 * The classification of the group.
		 */
		classification?: string;
		/**
		 * The date and time the group was created.
		 */
		createdDateTime?: string;
		/**
		 * The date and time the group was deleted. Null if the group is not deleted.
		 */
		deletedDateTime?: string;
		/**
		 * The description of the group.
		 */
		description?: string;
		/**
		 * The display name of the group.
		 */
		displayName?: string;
		/**
		 * The date and time the group is set to expire. Null for security groups.
		 */
		expirationDateTime?: string;
		/**
		 * The group type and membership. If it contains `Unified`, the group is a Microsoft 365 group.
		 *
		 * Items: A group type.
		 */
		groupTypes?: string[];
		/**
		 * Whether the group can be assigned to a Microsoft Entra role.
		 */
		isAssignableToRole?: boolean;
		/**
		 * Whether the group is a member of a restricted management administrative unit. Returned only with the select parameter.
		 */
		isManagementRestricted?: boolean;
		/**
		 * The status of the group license assignment to all members. One of `QueuedForProcessing`, `ProcessingInProgress`, `ProcessingComplete`. Returned only with the select parameter.
		 */
		licenseProcessingState?: string;
		/**
		 * The SMTP address of the group.
		 */
		mail?: string;
		/**
		 * Whether the group is mail-enabled.
		 */
		mailEnabled?: boolean;
		/**
		 * The mail alias of the group.
		 */
		mailNickname?: string;
		/**
		 * The rule that determines the members of a dynamic group.
		 */
		membershipRule?: string;
		/**
		 * Whether dynamic membership processing is `On` or `Paused`.
		 */
		membershipRuleProcessingState?: string;
		/**
		 * The on-premises domain FQDN synchronized from the on-premises directory.
		 */
		onPremisesDomainName?: string;
		/**
		 * The extension attributes 1-15 synchronized from the on-premises directory. Returned only with the select parameter.
		 */
		onPremisesExtensionAttributes?: {
			/**
			 * Custom extension attribute 1.
			 */
			extensionAttribute1?: string;
			/**
			 * Custom extension attribute 2.
			 */
			extensionAttribute2?: string;
			/**
			 * Custom extension attribute 3.
			 */
			extensionAttribute3?: string;
			/**
			 * Custom extension attribute 4.
			 */
			extensionAttribute4?: string;
			/**
			 * Custom extension attribute 5.
			 */
			extensionAttribute5?: string;
			/**
			 * Custom extension attribute 6.
			 */
			extensionAttribute6?: string;
			/**
			 * Custom extension attribute 7.
			 */
			extensionAttribute7?: string;
			/**
			 * Custom extension attribute 8.
			 */
			extensionAttribute8?: string;
			/**
			 * Custom extension attribute 9.
			 */
			extensionAttribute9?: string;
			/**
			 * Custom extension attribute 10.
			 */
			extensionAttribute10?: string;
			/**
			 * Custom extension attribute 11.
			 */
			extensionAttribute11?: string;
			/**
			 * Custom extension attribute 12.
			 */
			extensionAttribute12?: string;
			/**
			 * Custom extension attribute 13.
			 */
			extensionAttribute13?: string;
			/**
			 * Custom extension attribute 14.
			 */
			extensionAttribute14?: string;
			/**
			 * Custom extension attribute 15.
			 */
			extensionAttribute15?: string;
		};
		/**
		 * The last time the group was synced with the on-premises directory.
		 */
		onPremisesLastSyncDateTime?: string;
		/**
		 * The on-premises NetBIOS name synchronized from the on-premises directory.
		 */
		onPremisesNetBiosName?: string;
		/**
		 * The errors that occurred while provisioning with the Microsoft synchronization product.
		 *
		 * Items: A provisioning error.
		 */
		onPremisesProvisioningErrors?: {
			/**
			 * The category of the provisioning error, for example `PropertyConflict`.
			 */
			category?: string;
			/**
			 * The date and time the error occurred.
			 */
			occurredDateTime?: string;
			/**
			 * The directory property that caused the error. One of `UserPrincipalName`, `ProxyAddress`.
			 */
			propertyCausingError?: string;
			/**
			 * The value of the property that caused the error.
			 */
			value?: string;
		}[];
		/**
		 * The on-premises SAM account name synchronized from the on-premises directory.
		 */
		onPremisesSamAccountName?: string;
		/**
		 * The on-premises security identifier (SID) of the group.
		 */
		onPremisesSecurityIdentifier?: string;
		/**
		 * True if the group is synced from an on-premises directory, false if it was synced before but is not anymore, null if it never was.
		 */
		onPremisesSyncEnabled?: boolean;
		/**
		 * The preferred data location of the Microsoft 365 group.
		 */
		preferredDataLocation?: string;
		/**
		 * The preferred language of the Microsoft 365 group, for example `en-US`.
		 */
		preferredLanguage?: string;
		/**
		 * The email addresses that direct to the same group mailbox.
		 *
		 * Items: An email address of the group.
		 */
		proxyAddresses?: string[];
		/**
		 * The date and time the group was last renewed.
		 */
		renewedDateTime?: string;
		/**
		 * The behaviors set for the Microsoft 365 group at creation.
		 *
		 * Items: A group behavior option.
		 */
		resourceBehaviorOptions?: string[];
		/**
		 * The resources associated with the Microsoft 365 group. The possible value is `Team`.
		 *
		 * Items: A resource provisioning option.
		 */
		resourceProvisioningOptions?: string[];
		/**
		 * Whether the group is a security group.
		 */
		securityEnabled?: boolean;
		/**
		 * The security identifier (SID) of the group, used in Windows scenarios.
		 */
		securityIdentifier?: string;
		/**
		 * The errors published by a federated service about the group.
		 *
		 * Items: A service provisioning error.
		 */
		serviceProvisioningErrors?: {
			/**
			 * The date and time the error occurred.
			 */
			createdDateTime?: string;
			/**
			 * Whether the error was attended to.
			 */
			isResolved?: boolean;
			/**
			 * The qualified service instance that published the error.
			 */
			serviceInstance?: string;
		}[];
		/**
		 * The color theme of the Microsoft 365 group.
		 */
		theme?: string;
		/**
		 * The unique identifier that can be used as an alternate key of the group. Returned only with the select parameter.
		 */
		uniqueName?: string;
		/**
		 * The join policy and content visibility of the group. One of `Private`, `Public`, `HiddenMembership`.
		 */
		visibility?: string;
	}[];
};

/**
 * List groups
 * Lists the groups in the organization.
 */
export async function listGroups(
	this: EndpointFunctionThis,
	payload: {
		input: ListGroupsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListGroupsOutput> {
	const response = await this.endpointCaller<ListGroupsOutput>(
		{
			appName: 'active-directory',
			appVersion: 1,
			endpointName: 'listGroups',
		},
		payload,
	);
	return response.output;
}
