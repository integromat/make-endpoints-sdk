// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateUserInput = {
	/**
	 * The name displayed in the address book for the user. Required.
	 */
	displayName: string;
	/**
	 * The user principal name (e.g. `user@contoso.com`). Must use a verified domain. Required.
	 */
	userPrincipalName: string;
	/**
	 * The password for the user. Required.
	 */
	password: string;
	/**
	 * Whether the account is enabled. Required.
	 */
	accountEnabled: boolean;
	/**
	 * Whether the user must change their password on the next sign in.
	 */
	forceChangePasswordNextSignIn: boolean;
	/**
	 * The mail alias for the user. Required by the Graph API.
	 */
	mailNickname: string;
	/**
	 * The given name (first name) of the user.
	 */
	givenName?: string;
	/**
	 * The user's surname (family name or last name).
	 */
	surname?: string;
	/**
	 * The user's job title.
	 */
	jobTitle?: string;
	/**
	 * The user's mobile phone number.
	 */
	mobilePhone?: string;
	/**
	 * The office location in the user's place of business.
	 */
	officeLocation?: string;
	/**
	 * The preferred language for the user (e.g. `en-US`).
	 */
	preferredLanguage?: string;
	/**
	 * A list of business phone numbers.
	 *
	 * Items: A business phone number.
	 */
	businessPhones?: string[];
	/**
	 * The city in which the user is located.
	 */
	city?: string;
	/**
	 * The company name associated with the user.
	 */
	companyName?: string;
	/**
	 * The country/region in which the user is located (e.g. `US`, `JP`, `GB`).
	 */
	country?: string;
	/**
	 * The name of the department in which the user works.
	 */
	department?: string;
	/**
	 * The employee identifier assigned by the organization.
	 */
	employeeId?: string;
	/**
	 * The user's postal code.
	 */
	postalCode?: string;
	/**
	 * The state or province in the user's address.
	 */
	state?: string;
	/**
	 * The street address of the user's place of business.
	 */
	streetAddress?: string;
	/**
	 * A two-letter country code (ISO 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples: `US`, `JP`, `GB`.
	 */
	usageLocation?: string;
	/**
	 * Specifies the user type.
	 */
	userType?: '' | 'Member' | 'Guest';
	/**
	 * Required only when creating a user account if you are using a federated domain for the user's UPN property.
	 */
	onPremisesImmutableId?: string;
};

export type CreateUserOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The unique identifier for the user.
	 */
	id?: string;
	/**
	 * The name displayed in the address book for the user.
	 */
	displayName?: string;
	/**
	 * The user principal name (UPN) of the user.
	 */
	userPrincipalName?: string;
	/**
	 * The given name (first name) of the user.
	 */
	givenName?: string;
	/**
	 * The user's surname (family name or last name).
	 */
	surname?: string;
	/**
	 * The SMTP address for the user.
	 */
	mail?: string;
	/**
	 * The mail alias of the user.
	 */
	mailNickname?: string;
	/**
	 * The user's job title.
	 */
	jobTitle?: string;
	/**
	 * The user's mobile phone number.
	 */
	mobilePhone?: string;
	/**
	 * The office location in the user's place of business.
	 */
	officeLocation?: string;
	/**
	 * The preferred language for the user.
	 */
	preferredLanguage?: string;
	/**
	 * Whether the account is enabled.
	 */
	accountEnabled?: boolean;
	/**
	 * A list of business phone numbers.
	 *
	 * Items: A business phone number.
	 */
	businessPhones?: string[];
};

/**
 * Create a user
 * Creates a new user.
 */
export async function createUser(
	this: EndpointFunctionThis,
	payload: {
		input: CreateUserInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateUserOutput> {
	const response = await this.endpointCaller<CreateUserOutput>(
		{
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'createUser',
		},
		payload,
	);
	return response.output;
}
