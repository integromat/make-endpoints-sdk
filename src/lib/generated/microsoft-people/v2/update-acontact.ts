// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateAContactInput = {
	/**
	 * The ID of the contact. Use the **Search contacts** endpoint to find it.
	 */
	contact: string;
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
	 * The contact's home address. When updating, pass the full set of address fields.
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
	 * The contact's business address. When updating, pass the full set of address fields.
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
	 * Other addresses for the contact. When updating, pass the full set of address fields.
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
};

export type UpdateAContactOutput = {
	/**
	 * The OData context URL of the response.
	 */
	'@odata.context'?: string;
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
};

/**
 * Update a contact
 * Updates the properties of a contact.
 */
export async function updateAcontact(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateAContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateAContactOutput> {
	const response = await this.endpointCaller<UpdateAContactOutput>(
		{
			appName: 'microsoft-people',
			appVersion: 2,
			endpointName: 'updateAContact',
		},
		payload,
	);
	return response.output;
}
