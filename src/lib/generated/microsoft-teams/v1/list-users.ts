// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListUsersInput = {
	/**
	 * An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression to filter results. Example: `startsWith(displayName, 'John')` or `mail eq 'user@contoso.com'`.
	 */
	filter?: string;
	/**
	 * An [OData `$orderby`](https://learn.microsoft.com/en-us/graph/query-parameters#orderby-parameter) expression to sort results. Example: `displayName asc`.
	 */
	orderby?: string;
	/**
	 * A comma-separated list of properties to include in the response. By default only a limited set is returned. Example: `displayName,givenName,postalCode`. See [select parameter](https://learn.microsoft.com/en-us/graph/query-parameters#select-parameter).
	 */
	select?: string;
	/**
	 * The maximum number of results per page. Maximum value is `999`.
	 */
	top?: number;
	/**
	 * An [OData `$search`](https://learn.microsoft.com/en-us/graph/search-query-parameter) expression. Requires the `ConsistencyLevel: eventual` header (set via `arbitraryCall` if needed). Example: `"displayName:wa"`.
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

export type ListUsersOutput = {
	/**
	 * The OData context URL for the response.
	 */
	'@odata.context'?: string;
	/**
	 * The total count of matching items. Only present when `$count=true`.
	 */
	'@odata.count'?: number;
	/**
	 * The list of users.
	 *
	 * Items: A user resource.
	 */
	value?: {
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
		 * The user's surname (family name).
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
		 * A list of business phone numbers.
		 *
		 * Items: A business phone number.
		 */
		businessPhones?: string[];
		/**
		 * Whether the account is enabled.
		 */
		accountEnabled?: boolean;
	}[];
	/**
	 * The URL for the next page of results.
	 */
	'@odata.nextLink'?: string;
};

/**
 * List users
 * Lists users in the organization.
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
			appName: 'microsoft-teams',
			appVersion: 1,
			endpointName: 'listUsers',
		},
		payload,
	);
	return response.output;
}
