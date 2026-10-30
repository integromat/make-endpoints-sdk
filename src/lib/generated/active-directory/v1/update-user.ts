// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateUserInput = {
	/**
	 * The ID or the user principal name (UPN) of the user to update.
	 */
	userId: string;
	/**
	 * Whether the account is enabled.
	 */
	accountEnabled?: boolean;
	/**
	 * A freeform text entry field for the user to describe themselves.
	 */
	aboutMe?: string;
	/**
	 * The age group of the user.
	 */
	ageGroup?: '' | 'Minor' | 'NotAdult' | 'Adult';
	/**
	 * The birthday of the user.
	 */
	birthday?: string;
	/**
	 * The telephone numbers of the user. Although it is a list, only one number can be set.
	 *
	 * Items: A business phone number.
	 */
	businessPhones?: string[];
	/**
	 * The city where the user is located. The maximum length is 128 characters.
	 */
	city?: string;
	/**
	 * The name of the company the user is associated with. The maximum length is 64 characters.
	 */
	companyName?: string;
	/**
	 * Whether consent was obtained for minors.
	 */
	consentProvidedForMinor?: '' | 'Granted' | 'Denied' | 'NotRequired';
	/**
	 * The country or region where the user is located, for example `US`. The maximum length is 128 characters.
	 */
	country?: string;
	/**
	 * The name of the department in which the user works. The maximum length is 64 characters.
	 */
	department?: string;
	/**
	 * The name to display in the address book for the user. It can't be cleared.
	 */
	displayName?: string;
	/**
	 * The date and time the user was hired or will start work.
	 */
	employeeHireDate?: string;
	/**
	 * The employee identifier assigned to the user by the organization. The maximum length is 16 characters.
	 */
	employeeId?: string;
	/**
	 * The organization data associated with the user. Omitted values in this object are set to null.
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
	 * The enterprise worker type, for example `Employee`, `Contractor`, `Consultant` or `Vendor`.
	 */
	employeeType?: string;
	/**
	 * The fax number of the user.
	 */
	faxNumber?: string;
	/**
	 * The given name (first name) of the user. The maximum length is 64 characters.
	 */
	givenName?: string;
	/**
	 * The interests of the user.
	 *
	 * Items: An interest of the user.
	 */
	interests?: string[];
	/**
	 * The job title of the user. The maximum length is 128 characters.
	 */
	jobTitle?: string;
	/**
	 * The SMTP address of the user. It can't contain accent characters.
	 */
	mail?: string;
	/**
	 * The mail alias of the user. The maximum length is 64 characters.
	 */
	mailNickname?: string;
	/**
	 * The primary cellular telephone number of the user. The maximum length is 64 characters.
	 */
	mobilePhone?: string;
	/**
	 * The URL of the user's personal site.
	 */
	mySite?: string;
	/**
	 * The office location in the user's place of business.
	 */
	officeLocation?: string;
	/**
	 * The extension attributes 1-15 of the user. Each attribute can store up to 1024 characters. Read-only for users synced from an on-premises directory.
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
	 * The ID that links an on-premises Active Directory account to the user.
	 */
	onPremisesImmutableId?: string;
	/**
	 * The other email addresses of the user. You can set up to 250 values.
	 *
	 * Items: An email address of the user.
	 */
	otherMails?: string[];
	/**
	 * The password policies of the user. You can select both values to set them together.
	 */
	passwordPolicies?: '' | 'DisableStrongPassword' | 'DisablePasswordExpiration';
	/**
	 * The password profile of the user.
	 */
	passwordProfile?: {
		/**
		 * The new password of the user. It must satisfy the tenant's password policies. The user must change it at the next sign-in.
		 */
		password?: string;
		/**
		 * Whether the user must change the password at the next sign-in.
		 */
		forceChangePasswordNextSignIn?: boolean;
		/**
		 * Whether the user must perform multifactor authentication before changing the password at the next sign-in.
		 */
		forceChangePasswordNextSignInWithMfa?: boolean;
	};
	/**
	 * The past projects of the user.
	 *
	 * Items: A past project.
	 */
	pastProjects?: string[];
	/**
	 * The postal code of the user. The maximum length is 40 characters.
	 */
	postalCode?: string;
	/**
	 * The preferred data location of the user.
	 */
	preferredDataLocation?: string;
	/**
	 * The preferred language of the user, for example `en-US`.
	 */
	preferredLanguage?: string;
	/**
	 * The responsibilities of the user.
	 *
	 * Items: A responsibility of the user.
	 */
	responsibilities?: string[];
	/**
	 * The schools the user attended.
	 *
	 * Items: A school the user attended.
	 */
	schools?: string[];
	/**
	 * The skills of the user.
	 *
	 * Items: A skill of the user.
	 */
	skills?: string[];
	/**
	 * The state or province in the user's address. The maximum length is 128 characters.
	 */
	state?: string;
	/**
	 * The street address of the user's place of business. The maximum length is 1,024 characters.
	 */
	streetAddress?: string;
	/**
	 * The surname (family name) of the user. The maximum length is 64 characters.
	 */
	surname?: string;
	/**
	 * The two-letter country code (ISO 3166) of the user, for example `US`. Required for users who will be assigned licenses.
	 */
	usageLocation?: string;
	/**
	 * The user principal name (UPN) in the format `alias@domain`. The domain must be one of the tenant's verified domains.
	 */
	userPrincipalName?: string;
	/**
	 * The user type.
	 */
	userType?: '' | 'Member' | 'Guest';
};

export type UpdateUserOutput = Record<string, never>;

/**
 * Update a user
 * Updates the properties of a user.
 */
export async function updateUser(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateUserInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateUserOutput> {
	const response = await this.endpointCaller<UpdateUserOutput>(
		{
			appName: 'active-directory',
			appVersion: 1,
			endpointName: 'updateUser',
		},
		payload,
	);
	return response.output;
}
