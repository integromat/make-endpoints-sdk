// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetCurrentUserInput = {
	/**
	 * A comma-separated list of properties to return. Sent as `$select`. Use it to get properties that are not returned by default, for example `displayName,givenName,postalCode`.
	 */
	select?: string;
};

export type GetCurrentUserOutput = {
	/**
	 * The OData context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The unique identifier of the user.
	 */
	id?: string;
	/**
	 * A freeform text entry field for the user to describe themselves. Returned only with the select parameter.
	 */
	aboutMe?: string;
	/**
	 * Whether the account is enabled. Returned only with the select parameter.
	 */
	accountEnabled?: boolean;
	/**
	 * The age group of the user. One of `Minor`, `NotAdult`, `Adult`. Returned only with the select parameter.
	 */
	ageGroup?: string;
	/**
	 * The licenses assigned to the user, including inherited group-based licenses. Returned only with the select parameter.
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
		 * The name of the service, for example `exchange`.
		 */
		service?: string;
		/**
		 * The GUID of the service plan.
		 */
		servicePlanId?: string;
	}[];
	/**
	 * The birthday of the user. Returned only with the select parameter.
	 */
	birthday?: string;
	/**
	 * The telephone numbers of the user. Only one number can be set.
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
	 * The interests of the user. Returned only with the select parameter.
	 *
	 * Items: An interest of the user.
	 */
	interests?: string[];
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
		 * The license assignment error, for example `CountViolation` or `DependencyViolation`. Null if the license was assigned successfully.
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
	 * The settings of the primary mailbox of the user. Returned only with the select parameter.
	 */
	mailboxSettings?: {
		/**
		 * The ID of the archive folder.
		 */
		archiveFolder?: string;
		/**
		 * The configuration of automatic replies to incoming email.
		 */
		automaticRepliesSetting?: {
			/**
			 * The audience outside the organization that receives the external reply. One of `none`, `contactsOnly`, `all`.
			 */
			externalAudience?: string;
			/**
			 * The automatic reply sent to the external audience.
			 */
			externalReplyMessage?: string;
			/**
			 * The automatic reply sent to the internal audience.
			 */
			internalReplyMessage?: string;
			/**
			 * When automatic replies end, if the status is `scheduled`.
			 */
			scheduledEndDateTime?: {
				/**
				 * A date and time without an offset, for example `2026-10-19T08:00:00.0000000`.
				 */
				dateTime?: string;
				/**
				 * The time zone of the date and time.
				 */
				timeZone?: string;
			};
			/**
			 * When automatic replies begin, if the status is `scheduled`.
			 */
			scheduledStartDateTime?: {
				/**
				 * A date and time without an offset, for example `2026-10-19T08:00:00.0000000`.
				 */
				dateTime?: string;
				/**
				 * The time zone of the date and time.
				 */
				timeZone?: string;
			};
			/**
			 * The status of automatic replies. One of `disabled`, `alwaysEnabled`, `scheduled`.
			 */
			status?: string;
		};
		/**
		 * The date format of the mailbox.
		 */
		dateFormat?: string;
		/**
		 * Who receives meeting messages when a calendar delegate exists. One of `sendToDelegateAndInformationToPrincipal`, `sendToDelegateAndPrincipal`, `sendToDelegateOnly`.
		 */
		delegateMeetingMessageDeliveryOptions?: string;
		/**
		 * The preferred language and region of the mailbox.
		 */
		language?: {
			/**
			 * The name of the locale, for example `English (United States)`.
			 */
			displayName?: string;
			/**
			 * The locale code, for example `en-us`.
			 */
			locale?: string;
		};
		/**
		 * The time format of the mailbox.
		 */
		timeFormat?: string;
		/**
		 * The default time zone of the mailbox.
		 */
		timeZone?: string;
		/**
		 * The purpose of the mailbox. One of `user`, `linked`, `shared`, `room`, `equipment`, `others`.
		 */
		userPurpose?: string;
		/**
		 * The days and hours the user works.
		 */
		workingHours?: {
			/**
			 * The days of the week the user works.
			 *
			 * Items: A day of the week, for example `monday`.
			 */
			daysOfWeek?: string[];
			/**
			 * The time of day the user starts working.
			 */
			startTime?: string;
			/**
			 * The time of day the user stops working.
			 */
			endTime?: string;
			/**
			 * The time zone the working hours apply to.
			 */
			timeZone?: {
				/**
				 * The name of the time zone, for example `Pacific Standard Time`.
				 */
				name?: string;
			};
		};
	};
	/**
	 * The mail alias of the user. Returned only with the select parameter.
	 */
	mailNickname?: string;
	/**
	 * The primary cellular telephone number of the user.
	 */
	mobilePhone?: string;
	/**
	 * The URL of the user's personal site. Returned only with the select parameter.
	 */
	mySite?: string;
	/**
	 * The office location in the user's place of business.
	 */
	officeLocation?: string;
	/**
	 * The on-premises Active Directory distinguished name (DN). Returned only with the select parameter.
	 */
	onPremisesDistinguishedName?: string;
	/**
	 * The on-premises domain FQDN synchronized from the on-premises directory. Returned only with the select parameter.
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
	 * The password policies of the user, for example `DisableStrongPassword` or `DisablePasswordExpiration`. Returned only with the select parameter.
	 */
	passwordPolicies?: string;
	/**
	 * The past projects of the user. Returned only with the select parameter.
	 *
	 * Items: A past project.
	 */
	pastProjects?: string[];
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
	 * The email addresses of the user, for example `SMTP: bob@contoso.com`. Returned only with the select parameter.
	 *
	 * Items: A proxy address of the user.
	 */
	proxyAddresses?: string[];
	/**
	 * Refresh and session tokens issued before this time are invalid. Returned only with the select parameter.
	 */
	refreshTokensValidFromDateTime?: string;
	/**
	 * The responsibilities of the user. Returned only with the select parameter.
	 *
	 * Items: A responsibility of the user.
	 */
	responsibilities?: string[];
	/**
	 * The schools the user attended. Returned only with the select parameter.
	 *
	 * Items: A school the user attended.
	 */
	schools?: string[];
	/**
	 * The security identifier (SID) of the user, used in Windows scenarios. Returned only with the select parameter.
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
	 * The skills of the user. Returned only with the select parameter.
	 *
	 * Items: A skill of the user.
	 */
	skills?: string[];
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
};

/**
 * Get the current user
 * Retrieves the properties of the signed-in user.
 */
export async function getCurrentUser(
	this: EndpointFunctionThis,
	payload: {
		input: GetCurrentUserInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetCurrentUserOutput> {
	const response = await this.endpointCaller<GetCurrentUserOutput>(
		{
			appName: 'active-directory',
			appVersion: 1,
			endpointName: 'getCurrentUser',
		},
		payload,
	);
	return response.output;
}
