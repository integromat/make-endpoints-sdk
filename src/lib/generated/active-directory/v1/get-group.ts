// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetGroupInput = {
	/**
	 * The ID of the group to retrieve.
	 */
	groupId: string;
	/**
	 * A comma-separated list of properties to return. Use it to get properties that are not returned by default, for example `id,displayName,accessType,allowExternalSenders`.
	 */
	select?: string;
};

export type GetGroupOutput = {
	/**
	 * The OData context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The unique identifier of the group.
	 */
	id?: string;
	/**
	 * The type of access to the group. One of `none`, `private`, `secret`, `public`. Returned only with the select parameter.
	 */
	accessType?: string;
	/**
	 * Whether people outside the organization can send messages to the group. Returned only with the select parameter.
	 */
	allowExternalSenders?: boolean;
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
	 * Whether new members are automatically subscribed to email notifications. Returned only with the select parameter.
	 */
	autoSubscribeNewMembers?: boolean;
	/**
	 * The classification of the group, for example low, medium or high business impact.
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
	 * The group type and membership. If it contains `Unified`, the group is a Microsoft 365 group. If it contains `DynamicMembership`, the membership is dynamic.
	 *
	 * Items: A group type.
	 */
	groupTypes?: string[];
	/**
	 * Whether any group members have license errors from the group-based license assignment. Never returned on a GET request.
	 */
	hasMembersWithLicenseErrors?: boolean;
	/**
	 * Whether the group is hidden from the Outlook address book and address lists. Returned only with the select parameter.
	 */
	hideFromAddressLists?: boolean;
	/**
	 * Whether the group is hidden from Outlook clients. Returned only with the select parameter.
	 */
	hideFromOutlookClients?: boolean;
	/**
	 * Whether the team associated with the group is in read-only mode.
	 */
	isArchived?: boolean;
	/**
	 * Whether the group can be assigned to a Microsoft Entra role.
	 */
	isAssignableToRole?: boolean;
	/**
	 * Whether the signed-in user marked the group as a favorite. Returned only with the select parameter.
	 */
	isFavorite?: boolean;
	/**
	 * Whether the group is a member of a restricted management administrative unit. Returned only with the select parameter.
	 */
	isManagementRestricted?: boolean;
	/**
	 * Whether the signed-in user is subscribed to email conversations. Returned only with the select parameter.
	 */
	isSubscribedByMail?: boolean;
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
		 * The qualified service instance that published the error, for example `SharePoint/Dublin`.
		 */
		serviceInstance?: string;
	}[];
	/**
	 * The color theme of the Microsoft 365 group, for example `Teal`, `Purple` or `Red`.
	 */
	theme?: string;
	/**
	 * The unique identifier that can be used as an alternate key of the group.
	 */
	uniqueName?: string;
	/**
	 * The number of conversations with new posts since the signed-in user's last visit. Returned only with the select parameter.
	 */
	unseenConversationsCount?: number;
	/**
	 * The number of conversations that received new posts since the signed-in user's last visit. Returned only with the select parameter.
	 */
	unseenCount?: number;
	/**
	 * The number of new posts delivered to the group's conversations since the signed-in user's last visit. Returned only with the select parameter.
	 */
	unseenMessagesCount?: number;
	/**
	 * The join policy and content visibility of the group. One of `Private`, `Public`, `HiddenMembership`.
	 */
	visibility?: string;
};

/**
 * Get a group
 * Retrieves the properties of a group.
 */
export async function getGroup(
	this: EndpointFunctionThis,
	payload: {
		input: GetGroupInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetGroupOutput> {
	const response = await this.endpointCaller<GetGroupOutput>(
		{
			appName: 'active-directory',
			appVersion: 1,
			endpointName: 'getGroup',
		},
		payload,
	);
	return response.output;
}
