// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchContactsInFolderInput = {
	/**
	 * The ID of the contact folder. Use the **List contact folders** endpoint to find it.
	 */
	contactFolder: string;
	/**
	 * An OData `$filter` expression, sent as `$filter`, for example `startswith(displayName,'a')` or `companyName eq 'Contoso'`. To filter by email address, use `emailAddresses/any(a:a/address eq 'garth@contoso.com')`; inside the `emailAddresses` collection only `any` with `eq` on `address` is supported (no `ne`, `startswith()` or other sub-properties). When you also set Order by, the property you sort by must appear first in the filter, for example `displayName ge '' and companyName eq 'Contoso'` with `displayName asc`. `endswith()` is not supported.
	 */
	filter?: string;
	/**
	 * The properties to return, sent as `$select`. If empty, Microsoft Graph returns its default set of properties.
	 */
	select?:
		| ''
		| 'assistantName'
		| 'birthday'
		| 'businessAddress'
		| 'businessHomePage'
		| 'businessPhones'
		| 'categories'
		| 'changeKey'
		| 'children'
		| 'companyName'
		| 'createdDateTime'
		| 'department'
		| 'displayName'
		| 'emailAddresses'
		| 'fileAs'
		| 'generation'
		| 'givenName'
		| 'homeAddress'
		| 'homePhones'
		| 'id'
		| 'imAddresses'
		| 'initials'
		| 'jobTitle'
		| 'lastModifiedDateTime'
		| 'manager'
		| 'middleName'
		| 'mobilePhone'
		| 'nickName'
		| 'officeLocation'
		| 'otherAddress'
		| 'parentFolderId'
		| 'personalNotes'
		| 'primaryEmailAddress'
		| 'profession'
		| 'secondaryEmailAddress'
		| 'spouseName'
		| 'surname'
		| 'tertiaryEmailAddress'
		| 'title'
		| 'yomiCompanyName'
		| 'yomiGivenName'
		| 'yomiSurname';
	/**
	 * The sort expressions, sent as `$orderby`.
	 */
	orderby?:
		| ''
		| 'displayName asc'
		| 'displayName desc'
		| 'createdDateTime asc'
		| 'createdDateTime desc'
		| 'lastModifiedDateTime asc'
		| 'lastModifiedDateTime desc';
	/**
	 * Set to `true` to include the total number of items in the collection as `@odata.count`. Sent as `$count`.
	 */
	count?: boolean;
	/**
	 * The number of items to return in one page, sent as `$top`. The minimum value is 1. If omitted, Microsoft Graph applies its default page size.
	 */
	top?: number;
	/**
	 * The number of items to skip at the start of the collection, sent as `$skip`. Use it to get the next page.
	 */
	skip?: number;
};

export type SearchContactsInFolderOutput = {
	/**
	 * The OData context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The URL of the next page of results. Present only when more results exist. Use its `$skip` value as the **Skip** input of the next call.
	 */
	'@odata.nextLink'?: string;
	/**
	 * The total number of items in the collection. Present only when **Count** is set to `true`.
	 */
	'@odata.count'?: number;
	/**
	 * The page of contacts returned.
	 *
	 * Items: A contact.
	 */
	value?: {
		/**
		 * The entity tag of the contact.
		 */
		'@odata.etag'?: string;
		/**
		 * The contact's unique identifier.
		 */
		id?: string;
		/**
		 * The time the contact was created.
		 */
		createdDateTime?: string;
		/**
		 * The time the contact was modified.
		 */
		lastModifiedDateTime?: string;
		/**
		 * Identifies the version of the contact. Every time the contact is changed, the change key changes as well.
		 */
		changeKey?: string;
		/**
		 * The ID of the contact's parent folder.
		 */
		parentFolderId?: string;
		/**
		 * The contact's given name.
		 */
		givenName?: string;
		/**
		 * The contact's middle name.
		 */
		middleName?: string;
		/**
		 * The contact's surname.
		 */
		surname?: string;
		/**
		 * The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.
		 */
		displayName?: string;
		/**
		 * The contact's nickname.
		 */
		nickName?: string;
		/**
		 * The contact's initials.
		 */
		initials?: string;
		/**
		 * The contact's suffix.
		 */
		generation?: string;
		/**
		 * The name the contact is filed under.
		 */
		fileAs?: string;
		/**
		 * The phonetic Japanese given name (first name) of the contact.
		 */
		yomiGivenName?: string;
		/**
		 * The phonetic Japanese surname (last name) of the contact.
		 */
		yomiSurname?: string;
		/**
		 * The phonetic Japanese company name of the contact.
		 */
		yomiCompanyName?: string;
		/**
		 * The contact's email addresses.
		 *
		 * Items: An email address of the contact.
		 */
		emailAddresses?: {
			/**
			 * The display name of the person or entity.
			 */
			name?: string;
			/**
			 * The email address of the person or entity.
			 */
			address?: string;
		}[];
		/**
		 * The contact's primary email address.
		 */
		primaryEmailAddress?: {
			/**
			 * The display name of the person or entity.
			 */
			name?: string;
			/**
			 * The email address of the person or entity.
			 */
			address?: string;
		};
		/**
		 * The contact's secondary email address.
		 */
		secondaryEmailAddress?: {
			/**
			 * The display name of the person or entity.
			 */
			name?: string;
			/**
			 * The email address of the person or entity.
			 */
			address?: string;
		};
		/**
		 * The contact's tertiary email address.
		 */
		tertiaryEmailAddress?: {
			/**
			 * The display name of the person or entity.
			 */
			name?: string;
			/**
			 * The email address of the person or entity.
			 */
			address?: string;
		};
		/**
		 * The contact's mobile phone number.
		 */
		mobilePhone?: string;
		/**
		 * The contact's home phone numbers.
		 *
		 * Items: A home phone number of the contact.
		 */
		homePhones?: string[];
		/**
		 * The contact's business phone numbers.
		 *
		 * Items: A business phone number of the contact.
		 */
		businessPhones?: string[];
		/**
		 * The contact's instant messaging (IM) addresses.
		 *
		 * Items: An instant messaging (IM) address of the contact.
		 */
		imAddresses?: string[];
		/**
		 * The business home page of the contact.
		 */
		businessHomePage?: string;
		/**
		 * The contact's job title.
		 */
		jobTitle?: string;
		/**
		 * The name of the contact's company.
		 */
		companyName?: string;
		/**
		 * The contact's department.
		 */
		department?: string;
		/**
		 * The location of the contact's office.
		 */
		officeLocation?: string;
		/**
		 * The contact's profession.
		 */
		profession?: string;
		/**
		 * The name of the contact's assistant.
		 */
		assistantName?: string;
		/**
		 * The name of the contact's manager.
		 */
		manager?: string;
		/**
		 * The contact's home address.
		 */
		homeAddress?: {
			/**
			 * The street.
			 */
			street?: string;
			/**
			 * The city.
			 */
			city?: string;
			/**
			 * The state.
			 */
			state?: string;
			/**
			 * The country or region. It's a free-format string value, for example, `United States`.
			 */
			countryOrRegion?: string;
			/**
			 * The postal code.
			 */
			postalCode?: string;
		};
		/**
		 * The contact's business address.
		 */
		businessAddress?: {
			/**
			 * The street.
			 */
			street?: string;
			/**
			 * The city.
			 */
			city?: string;
			/**
			 * The state.
			 */
			state?: string;
			/**
			 * The country or region. It's a free-format string value, for example, `United States`.
			 */
			countryOrRegion?: string;
			/**
			 * The postal code.
			 */
			postalCode?: string;
		};
		/**
		 * Other addresses for the contact.
		 */
		otherAddress?: {
			/**
			 * The street.
			 */
			street?: string;
			/**
			 * The city.
			 */
			city?: string;
			/**
			 * The state.
			 */
			state?: string;
			/**
			 * The country or region. It's a free-format string value, for example, `United States`.
			 */
			countryOrRegion?: string;
			/**
			 * The postal code.
			 */
			postalCode?: string;
		};
		/**
		 * The categories associated with the contact.
		 *
		 * Items: A category associated with the contact.
		 */
		categories?: string[];
		/**
		 * The names of the contact's children.
		 *
		 * Items: The name of a child of the contact.
		 */
		children?: string[];
		/**
		 * The name of the contact's spouse or partner.
		 */
		spouseName?: string;
		/**
		 * The user's notes about the contact.
		 */
		personalNotes?: string;
		/**
		 * The contact's birthday.
		 */
		birthday?: string;
	}[];
};

/**
 * Search contacts in a folder
 * Returns a page of contacts from the specified contact folder.
 */
export async function searchContactsInFolder(
	this: EndpointFunctionThis,
	payload: {
		input: SearchContactsInFolderInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SearchContactsInFolderOutput> {
	const response = await this.endpointCaller<SearchContactsInFolderOutput>(
		{
			appName: 'microsoft-people',
			appVersion: 2,
			endpointName: 'searchContactsInFolder',
		},
		payload,
	);
	return response.output;
}
