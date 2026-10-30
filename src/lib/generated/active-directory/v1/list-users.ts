// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListUsersInput = {
	/**
	 * An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression. Sent as `$filter`. For example, `startsWith(displayName,'J')`.
	 */
	filter?: string;
	/**
	 * An [OData `$search`](https://learn.microsoft.com/en-us/graph/search-query-parameter) expression. Sent as `$search`. For example, `"displayName:Adele"`.
	 */
	search?: string;
	/**
	 * A comma-separated list of properties to return. Sent as `$select`. For example, `id,displayName,postalCode`. Properties such as `aboutMe`, `birthday`, `interests`, `mySite`, `pastProjects`, `responsibilities`, `schools`, `skills` and `mailboxSettings` can't be selected in a user list.
	 */
	select?: string;
	/**
	 * The relationship to expand in the results. Sent as `$expand`. For example, `manager`.
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
	 * The number of results per page. Sent as `$top`. The default is 100 and the maximum is 999 (500 when selecting or filtering on `signInActivity`).
	 */
	top?: number;
	/**
	 * The `@odata.nextLink` URL from a previous response. Use it to get the next page and leave the other inputs empty, because the link already contains them.
	 */
	nextLink?: string;
};

export type ListUsersOutput = {
	/**
	 * The OData context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The total number of matching users. Returned only when the count input is `true`.
	 */
	'@odata.count'?: number;
	/**
	 * The URL of the next page of results. Absent on the last page.
	 */
	'@odata.nextLink'?: string;
	/**
	 * The list of users.
	 *
	 * Items: A user.
	 */
	value?: {
		/**
		 * The unique identifier of the user.
		 */
		id?: string;
		/**
		 * Whether the account is enabled. Returned only with the select parameter.
		 */
		accountEnabled?: boolean;
		/**
		 * The age group of the user. One of `Minor`, `NotAdult`, `Adult`. Returned only with the select parameter.
		 */
		ageGroup?: string;
		/**
		 * The licenses assigned to the user. Returned only with the select parameter.
		 *
		 * Items: A license assigned to the user.
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
		 * The plans assigned to the user. Returned only with the select parameter.
		 *
		 * Items: A plan assigned to the user.
		 */
		assignedPlans?: {
			/**
			 * The date and time the plan was assigned.
			 */
			assignedDateTime?: string;
			/**
			 * The condition of the capability assignment. One of `Enabled`, `Warning`, `Suspended`, `Deleted`, `LockedOut`.
			 */
			capabilityStatus?: string;
			/**
			 * The name of the service.
			 */
			service?: string;
			/**
			 * The GUID of the service plan.
			 */
			servicePlanId?: string;
		}[];
		/**
		 * The telephone numbers of the user.
		 *
		 * Items: A business phone number.
		 */
		businessPhones?: string[];
		/**
		 * The city where the user is located. Returned only with the select parameter.
		 */
		city?: string;
		/**
		 * The name of the company the user is associated with. Returned only with the select parameter.
		 */
		companyName?: string;
		/**
		 * Whether consent was obtained for minors. One of `Granted`, `Denied`, `NotRequired`. Returned only with the select parameter.
		 */
		consentProvidedForMinor?: string;
		/**
		 * The country or region where the user is located. Returned only with the select parameter.
		 */
		country?: string;
		/**
		 * The date and time the user was created. Returned only with the select parameter.
		 */
		createdDateTime?: string;
		/**
		 * How the account was created: a regular account (null), `Invitation`, `LocalAccount` or `EmailVerified`. Returned only with the select parameter.
		 */
		creationType?: string;
		/**
		 * The custom security attribute values assigned to the user. Returned only with the select parameter and requires the `CustomSecAttributeAssignment.Read.All` permission.
		 */
		customSecurityAttributes?: Record<string, JSONValue>;
		/**
		 * The date and time the user was deleted. Returned only with the select parameter.
		 */
		deletedDateTime?: string;
		/**
		 * The name of the department in which the user works. Returned only with the select parameter.
		 */
		department?: string;
		/**
		 * The name displayed in the address book for the user.
		 */
		displayName?: string;
		/**
		 * The date and time the user was hired or will start work. Returned only with the select parameter.
		 */
		employeeHireDate?: string;
		/**
		 * The employee identifier assigned to the user by the organization. Returned only with the select parameter.
		 */
		employeeId?: string;
		/**
		 * The date and time the user left or will leave the organization. Returned only with the select parameter and requires the `User-LifeCycleInfo.Read.All` permission.
		 */
		employeeLeaveDateTime?: string;
		/**
		 * The organization data associated with the user. Returned only with the select parameter.
		 */
		employeeOrgData?: {
			/**
			 * The cost center associated with the user.
			 */
			costCenter?: string;
			/**
			 * The division in which the user works.
			 */
			division?: string;
		};
		/**
		 * The enterprise worker type, for example `Employee`, `Contractor`, `Consultant` or `Vendor`. Returned only with the select parameter.
		 */
		employeeType?: string;
		/**
		 * The invitation status of an invited guest: `PendingAcceptance` or `Accepted`. Returned only with the select parameter.
		 */
		externalUserState?: string;
		/**
		 * The date and time of the latest change to the external user state. Returned only with the select parameter.
		 */
		externalUserStateChangeDateTime?: string;
		/**
		 * The fax number of the user. Returned only with the select parameter.
		 */
		faxNumber?: string;
		/**
		 * The given name (first name) of the user.
		 */
		givenName?: string;
		/**
		 * The identities that can be used to sign in to the user account. Returned only with the select parameter.
		 *
		 * Items: A sign-in identity.
		 */
		identities?: {
			/**
			 * The sign-in type, for example `emailAddress`, `userName`, `federated` or `userPrincipalName`.
			 */
			signInType?: string;
			/**
			 * The issuer of the identity, for example `facebook.com`.
			 */
			issuer?: string;
			/**
			 * The unique identifier assigned to the user by the issuer.
			 */
			issuerAssignedId?: string;
		}[];
		/**
		 * The instant message VoIP SIP addresses of the user. Returned only with the select parameter.
		 *
		 * Items: A SIP address of the user.
		 */
		imAddresses?: string[];
		/**
		 * Whether the user is a member of a restricted management administrative unit.
		 */
		isManagementRestricted?: boolean;
		/**
		 * The job title of the user.
		 */
		jobTitle?: string;
		/**
		 * The date and time the user last changed their password. Returned only with the select parameter.
		 */
		lastPasswordChangeDateTime?: string;
		/**
		 * The legal age group of the user, calculated from the age group and consent for minors. Returned only with the select parameter.
		 */
		legalAgeGroupClassification?: string;
		/**
		 * The state of the license assignments for the user. Returned only with the select parameter.
		 *
		 * Items: The state of a license assignment.
		 */
		licenseAssignmentStates?: {
			/**
			 * The ID of the group that the license is inherited from. Null if the license is assigned directly.
			 */
			assignedByGroup?: string;
			/**
			 * The service plans disabled in this assignment.
			 *
			 * Items: The ID of a disabled service plan.
			 */
			disabledPlans?: string[];
			/**
			 * The license assignment error. Null if the license was assigned successfully.
			 */
			error?: string;
			/**
			 * The date and time the assignment state was last updated.
			 */
			lastUpdatedDateTime?: string;
			/**
			 * The unique identifier of the license SKU.
			 */
			skuId?: string;
			/**
			 * The state of the assignment. One of `Active`, `ActiveWithError`, `Disabled`, `Error`.
			 */
			state?: string;
		}[];
		/**
		 * The SMTP address of the user.
		 */
		mail?: string;
		/**
		 * The mail alias of the user. Returned only with the select parameter.
		 */
		mailNickname?: string;
		/**
		 * The primary cellular telephone number of the user.
		 */
		mobilePhone?: string;
		/**
		 * The office location in the user's place of business.
		 */
		officeLocation?: string;
		/**
		 * The on-premises Active Directory distinguished name (DN). Returned only with the select parameter.
		 */
		onPremisesDistinguishedName?: string;
		/**
		 * The on-premises domain FQDN. Returned only with the select parameter.
		 */
		onPremisesDomainName?: string;
		/**
		 * The extension attributes 1-15 of the user. Returned only with the select parameter.
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
		 * The ID that links an on-premises Active Directory account to the user. Returned only with the select parameter.
		 */
		onPremisesImmutableId?: string;
		/**
		 * The last time the user was synced with the on-premises directory. Returned only with the select parameter.
		 */
		onPremisesLastSyncDateTime?: string;
		/**
		 * The errors that occurred while provisioning with the Microsoft synchronization product. Returned only with the select parameter.
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
		 * The on-premises SAM account name. Returned only with the select parameter.
		 */
		onPremisesSamAccountName?: string;
		/**
		 * The on-premises security identifier (SID) of the user. Returned only with the select parameter.
		 */
		onPremisesSecurityIdentifier?: string;
		/**
		 * Whether the user is currently synced from an on-premises Active Directory. Returned only with the select parameter.
		 */
		onPremisesSyncEnabled?: boolean;
		/**
		 * The on-premises user principal name. Returned only with the select parameter.
		 */
		onPremisesUserPrincipalName?: string;
		/**
		 * The other email addresses of the user. Returned only with the select parameter.
		 *
		 * Items: An email address of the user.
		 */
		otherMails?: string[];
		/**
		 * The password policies of the user. Returned only with the select parameter.
		 */
		passwordPolicies?: string;
		/**
		 * The postal code of the user. Returned only with the select parameter.
		 */
		postalCode?: string;
		/**
		 * The preferred data location of the user. Returned only with the select parameter.
		 */
		preferredDataLocation?: string;
		/**
		 * The preferred language of the user, for example `en-US`.
		 */
		preferredLanguage?: string;
		/**
		 * The plans provisioned for the user. Returned only with the select parameter.
		 *
		 * Items: A plan provisioned for the user.
		 */
		provisionedPlans?: {
			/**
			 * The condition of the capability assignment. One of `Enabled`, `Warning`, `Suspended`, `Deleted`, `LockedOut`.
			 */
			capabilityStatus?: string;
			/**
			 * The provisioning state of the service. One of `Success`, `Disabled`, `Error`, `PendingInput`, `PendingActivation`, `PendingProvisioning`.
			 */
			provisioningStatus?: string;
			/**
			 * The name of the service.
			 */
			service?: string;
		}[];
		/**
		 * The email addresses of the user. Returned only with the select parameter.
		 *
		 * Items: A proxy address of the user.
		 */
		proxyAddresses?: string[];
		/**
		 * Refresh and session tokens issued before this time are invalid. Returned only with the select parameter.
		 */
		refreshTokensValidFromDateTime?: string;
		/**
		 * The security identifier (SID) of the user. Returned only with the select parameter.
		 */
		securityIdentifier?: string;
		/**
		 * The errors published by a federated service about the user. Returned only with the select parameter.
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
		 * The last sign-in activity of the user. Returned only with the select parameter.
		 */
		signInActivity?: {
			/**
			 * The last interactive sign-in attempt, successful or not.
			 */
			lastSignInDateTime?: string;
			/**
			 * The request ID of the last interactive sign-in.
			 */
			lastSignInRequestId?: string;
			/**
			 * The last non-interactive sign-in attempt, successful or not.
			 */
			lastNonInteractiveSignInDateTime?: string;
			/**
			 * The request ID of the last non-interactive sign-in.
			 */
			lastNonInteractiveSignInRequestId?: string;
			/**
			 * The most recent successful interactive or non-interactive sign-in.
			 */
			lastSuccessfulSignInDateTime?: string;
			/**
			 * The request ID of the last successful sign-in.
			 */
			lastSuccessfulSignInRequestId?: string;
		};
		/**
		 * Refresh and session tokens issued before this time are invalid. Returned only with the select parameter.
		 */
		signInSessionsValidFromDateTime?: string;
		/**
		 * The state or province in the user's address. Returned only with the select parameter.
		 */
		state?: string;
		/**
		 * The street address of the user's place of business. Returned only with the select parameter.
		 */
		streetAddress?: string;
		/**
		 * The surname (family name) of the user.
		 */
		surname?: string;
		/**
		 * The two-letter country code (ISO 3166) of the user. Returned only with the select parameter.
		 */
		usageLocation?: string;
		/**
		 * The user principal name (UPN) of the user.
		 */
		userPrincipalName?: string;
		/**
		 * The user type, `Member` or `Guest`. Returned only with the select parameter.
		 */
		userType?: string;
	}[];
};

/**
 * List users
 * Lists the users in the organization.
 */
export async function listUsers(
	this: EndpointFunctionThis,
	payload: {
		input: ListUsersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListUsersOutput> {
	const response = await this.endpointCaller<ListUsersOutput>(
		{
			appName: 'active-directory',
			appVersion: 1,
			endpointName: 'listUsers',
		},
		payload,
	);
	return response.output;
}
