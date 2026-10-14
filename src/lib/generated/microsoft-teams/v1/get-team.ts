// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetTeamInput = {
	/**
	 * The unique identifier of the group.
	 */
	groupId: string;
	/**
	 * A comma-separated list of properties to include in the response. By default, only a subset of properties is returned. Use this to request additional properties. See [select parameter](https://learn.microsoft.com/en-us/graph/query-parameters#select-parameter).
	 */
	select?: string;
};

export type GetTeamOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
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
	 * Whether the group is archived.
	 */
	isArchived?: boolean;
	/**
	 * Indicates whether this group can be assigned to a Microsoft Entra role.
	 */
	isAssignableToRole?: boolean;
	/**
	 * Whether the group is restricted from management operations.
	 */
	isManagementRestricted?: boolean;
	/**
	 * The rule that determines members for a dynamic group.
	 */
	membershipRule?: string;
	/**
	 * Whether dynamic membership processing is on or paused.
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
	 * Specifies the group behaviors set during creation.
	 *
	 * Items: A resource behavior option.
	 */
	resourceBehaviorOptions?: string[];
	/**
	 * Specifies group resources associated with the group.
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
	 * A unique identifier for the group used as an alternate key.
	 */
	uniqueName?: string;
	/**
	 * Contains the on-premises domain FQDN.
	 */
	onPremisesDomainName?: string;
	/**
	 * Extension attributes 1-15 synced from on-premises Active Directory.
	 */
	onPremisesExtensionAttributes?: {
		/**
		 * First extension attribute.
		 */
		extensionAttribute1?: string;
		/**
		 * Second extension attribute.
		 */
		extensionAttribute2?: string;
		/**
		 * Third extension attribute.
		 */
		extensionAttribute3?: string;
		/**
		 * Fourth extension attribute.
		 */
		extensionAttribute4?: string;
		/**
		 * Fifth extension attribute.
		 */
		extensionAttribute5?: string;
		/**
		 * Sixth extension attribute.
		 */
		extensionAttribute6?: string;
		/**
		 * Seventh extension attribute.
		 */
		extensionAttribute7?: string;
		/**
		 * Eighth extension attribute.
		 */
		extensionAttribute8?: string;
		/**
		 * Ninth extension attribute.
		 */
		extensionAttribute9?: string;
		/**
		 * Tenth extension attribute.
		 */
		extensionAttribute10?: string;
		/**
		 * Eleventh extension attribute.
		 */
		extensionAttribute11?: string;
		/**
		 * Twelfth extension attribute.
		 */
		extensionAttribute12?: string;
		/**
		 * Thirteenth extension attribute.
		 */
		extensionAttribute13?: string;
		/**
		 * Fourteenth extension attribute.
		 */
		extensionAttribute14?: string;
		/**
		 * Fifteenth extension attribute.
		 */
		extensionAttribute15?: string;
	};
	/**
	 * Last time the group was synced with on-premises directory.
	 */
	onPremisesLastSyncDateTime?: string;
	/**
	 * Contains the on-premises NetBIOS name.
	 */
	onPremisesNetBiosName?: string;
	/**
	 * Errors during on-premises provisioning.
	 *
	 * Items: A provisioning error.
	 */
	onPremisesProvisioningErrors?: {
		/**
		 * Category of the error. Possible value: `PropertyConflict`.
		 */
		category?: string;
		/**
		 * The date and time at which the error occurred.
		 */
		occurredDateTime?: string;
		/**
		 * Name of the directory property causing the error.
		 */
		propertyCausingError?: string;
		/**
		 * Value of the property causing the error.
		 */
		value?: string;
	}[];
	/**
	 * Contains the on-premises SAM account name.
	 */
	onPremisesSamAccountName?: string;
	/**
	 * Contains the on-premises security identifier (SID).
	 */
	onPremisesSecurityIdentifier?: string;
	/**
	 * `true` if synced from an on-premises directory.
	 */
	onPremisesSyncEnabled?: boolean;
	/**
	 * Sensitivity label pairs associated with the group.
	 *
	 * Items: An assigned label.
	 */
	assignedLabels?: {
		/**
		 * The display name of the label.
		 */
		displayName?: string;
		/**
		 * The unique identifier of the label.
		 */
		labelId?: string;
	}[];
	/**
	 * The licenses assigned to the group.
	 *
	 * Items: An assigned license.
	 */
	assignedLicenses?: {
		/**
		 * Collection of IDs for plans that have been disabled.
		 *
		 * Items: A disabled plan ID.
		 */
		disabledPlans?: string[];
		/**
		 * The unique identifier for the SKU.
		 */
		skuId?: string;
	}[];
	/**
	 * Whether there are members with license errors.
	 */
	hasMembersWithLicenseErrors?: boolean;
	/**
	 * The status of the group license assignment. Possible values: `QueuedForProcessing`, `ProcessingInProgress`, `ProcessingComplete`.
	 */
	licenseProcessingState?: string;
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
};

/**
 * Get a team
 * Retrieves the properties of a group.
 */
export async function getTeam(
	this: EndpointFunctionThis,
	payload: {
		input: GetTeamInput;
		connectionId: number;
	},
): Promise<GetTeamOutput> {
	const response = await this.endpointCaller<GetTeamOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'getTeam',
		},
		payload,
	);
	return response.output;
}
