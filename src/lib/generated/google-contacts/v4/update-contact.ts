// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateContactInput = {
	/**
	 * The resource name of the contact to update, in the form `people/{personId}` — the `resourceName` value returned by the **List contacts** or **Get a contact** endpoint. Only contacts can be updated; profiles and directory people cannot.
	 */
	resourceName: string;
	/**
	 * The `etag` of the contact as returned by the **Get a contact** endpoint. The API returns HTTP 400 with reason `failedPrecondition` when it does not match the current value, which means the contact changed since it was read — read it again, merge the changes and retry. For several updates in a row, use the `etag` from this endpoint's own response.
	 */
	etag: string;
	/**
	 * The person fields to replace. Every listed field is replaced as a whole by the value in this request, including `names`. A listed field with no value in the body is cleared. `fileAses` is not a valid value.
	 */
	updatePersonFields:
		| 'addresses'
		| 'biographies'
		| 'birthdays'
		| 'calendarUrls'
		| 'clientData'
		| 'emailAddresses'
		| 'events'
		| 'externalIds'
		| 'genders'
		| 'imClients'
		| 'interests'
		| 'locales'
		| 'locations'
		| 'memberships'
		| 'miscKeywords'
		| 'names'
		| 'nicknames'
		| 'occupations'
		| 'organizations'
		| 'phoneNumbers'
		| 'relations'
		| 'sipAddresses'
		| 'urls'
		| 'userDefined';
	/**
	 * The person's names. A contact source allows only one name. When `names` is listed in Update person fields, this value replaces the stored name as a whole, including parts left empty here. Send the full name to store.
	 *
	 * Items: One name on the person. A contact source allows only one name.
	 */
	names?: {
		/**
		 * The given name.
		 */
		givenName?: string;
		/**
		 * The given name spelled as it sounds.
		 */
		phoneticGivenName?: string;
		/**
		 * The middle name.
		 */
		middleName?: string;
		/**
		 * The middle name spelled as it sounds.
		 */
		phoneticMiddleName?: string;
		/**
		 * The family name.
		 */
		familyName?: string;
		/**
		 * The family name spelled as it sounds.
		 */
		phoneticFamilyName?: string;
		/**
		 * The honorific prefixes, for example `Mrs.` or `Dr.`.
		 */
		honorificPrefix?: string;
		/**
		 * The honorific suffixes, for example `Jr.`.
		 */
		honorificSuffix?: string;
		/**
		 * The free-form name value.
		 */
		unstructuredName?: string;
		/**
		 * The full name spelled as it sounds.
		 */
		phoneticFullName?: string;
		/**
		 * The honorific prefixes spelled as they sound.
		 */
		phoneticHonorificPrefix?: string;
		/**
		 * The honorific suffixes spelled as they sound.
		 */
		phoneticHonorificSuffix?: string;
	}[];
	/**
	 * The person's nicknames.
	 *
	 * Items: One nickname.
	 */
	nicknames?: {
		/**
		 * The nickname.
		 */
		value: string;
		/**
		 * The type of the nickname.
		 */
		type?: '' | 'DEFAULT' | 'ALTERNATE_NAME';
	}[];
	/**
	 * The names used to sort the person in a list. `fileAses` is not a valid Update person fields value, so this request cannot change it.
	 *
	 * Items: One file-as value, the name used to sort the person in a list.
	 */
	fileAses?: {
		/**
		 * The file-as value.
		 */
		value: string;
	}[];
	/**
	 * Short biographies. A contact source allows only one.
	 *
	 * Items: One biography.
	 */
	biographies?: {
		/**
		 * The short biography.
		 */
		value: string;
		/**
		 * The content type of the biography.
		 */
		contentType?: '' | 'TEXT_PLAIN' | 'TEXT_HTML';
	}[];
	/**
	 * The contact groups this person belongs to. Send each group as `contactGroupResourceName`. This call does not add `contactGroups/myContacts`. When `memberships` is listed in Update person fields, this list replaces every stored membership. The list must contain at least one contact group.
	 *
	 * Items: A contact group membership. Only contact group memberships can be modified.
	 */
	memberships?: {
		/**
		 * The contact group this person belongs to.
		 */
		contactGroupMembership?: {
			/**
			 * The resource name of the contact group, in the form `contactGroups/{contactGroupId}`. Use the **List contact groups** endpoint to look it up.
			 */
			contactGroupResourceName: string;
		};
	}[];
	/**
	 * The person's current and past organizations.
	 *
	 * Items: One organization. Overlapping date ranges are allowed.
	 */
	organizations?: {
		/**
		 * The name of the organization.
		 */
		name?: string;
		/**
		 * The phonetic name of the organization.
		 */
		phoneticName?: string;
		/**
		 * The person's department at the organization.
		 */
		department?: string;
		/**
		 * The person's job description at the organization.
		 */
		jobDescription?: string;
		/**
		 * The symbol associated with the organization, for example a stock ticker or abbreviation.
		 */
		symbol?: string;
		/**
		 * The type of the organization. A custom value is accepted as well.
		 */
		type?: '' | 'work' | 'school';
		/**
		 * Whether this is the person's current organization.
		 */
		current?: boolean;
		/**
		 * The date the person joined the organization.
		 */
		startDate?: {
			/**
			 * Year of the date. From 1 to 9999, or 0 when the year does not apply.
			 */
			year?: number;
			/**
			 * Month of the year. From 1 to 12, or 0 when the month does not apply.
			 */
			month?: number;
			/**
			 * Day of the month. From 1 to 31, or 0 when the day does not apply.
			 */
			day?: number;
		};
		/**
		 * The date the person left the organization.
		 */
		endDate?: {
			/**
			 * Year of the date. From 1 to 9999, or 0 when the year does not apply.
			 */
			year?: number;
			/**
			 * Month of the year. From 1 to 12, or 0 when the month does not apply.
			 */
			month?: number;
			/**
			 * Day of the month. From 1 to 31, or 0 when the day does not apply.
			 */
			day?: number;
		};
		/**
		 * The domain name associated with the organization, for example `google.com`.
		 */
		domain?: string;
		/**
		 * The location of the organization office the person works at.
		 */
		location?: string;
		/**
		 * The person's cost center at the organization.
		 */
		costCenter?: string;
		/**
		 * The person's full-time equivalent within the organization, in millipercent. 100000 means 100%.
		 */
		fullTimeEquivalentMillipercent?: number;
	}[];
	/**
	 * The email addresses on the person. When `emailAddresses` is listed in Update person fields, this list replaces every stored email address.
	 *
	 * Items: One of the contact's email addresses.
	 */
	emailAddresses?: {
		/**
		 * The email address.
		 */
		value: string;
		/**
		 * The display name of the email address.
		 */
		displayName?: string;
		/**
		 * The type of the email address. Any custom value is accepted by the API as well.
		 */
		type?: '' | 'home' | 'work' | 'other';
	}[];
	/**
	 * The phone numbers on the person. When `phoneNumbers` is listed in Update person fields, this list replaces every stored phone number.
	 *
	 * Items: One of the contact's phone numbers.
	 */
	phoneNumbers?: {
		/**
		 * The phone number in any format the user typed it; the API also derives an E.164 canonical form from it.
		 */
		value: string;
		/**
		 * The type of the phone number. Any custom value is accepted by the API as well.
		 */
		type?:
			| ''
			| 'home'
			| 'work'
			| 'mobile'
			| 'homeFax'
			| 'workFax'
			| 'otherFax'
			| 'pager'
			| 'workMobile'
			| 'workPager'
			| 'main'
			| 'googleVoice'
			| 'other';
	}[];
	/**
	 * The postal addresses on the person. When `addresses` is listed in Update person fields, this list replaces every stored address.
	 *
	 * Items: One of the contact's postal addresses.
	 */
	addresses?: {
		/**
		 * The street address.
		 */
		streetAddress?: string;
		/**
		 * The PO box of the address.
		 */
		poBox?: string;
		/**
		 * The extended address of the address — for example an apartment or suite number.
		 */
		extendedAddress?: string;
		/**
		 * The city of the address.
		 */
		city?: string;
		/**
		 * The region of the address — for example the state or province.
		 */
		region?: string;
		/**
		 * The postal code of the address.
		 */
		postalCode?: string;
		/**
		 * The country of the address.
		 */
		country?: string;
	}[];
	/**
	 * The person's birthdays. A contact source allows only one. Set `date` when writing a birthday.
	 *
	 * Items: One birthday.
	 */
	birthdays?: {
		/**
		 * The birthday as year, month, and day. Use 0 for a part that does not apply, for example a birthday without a year.
		 */
		date?: {
			/**
			 * Year of the date. From 1 to 9999, or 0 when the year does not apply.
			 */
			year?: number;
			/**
			 * Month of the year. From 1 to 12, or 0 when the month does not apply.
			 */
			month?: number;
			/**
			 * Day of the month. From 1 to 31, or 0 when the day does not apply.
			 */
			day?: number;
		};
	}[];
	/**
	 * The events related to the person, such as an anniversary.
	 *
	 * Items: One of the contact's events.
	 */
	events?: {
		/**
		 * The date of the event as year, month, and day. Use 0 for a part that does not apply.
		 */
		date?: {
			/**
			 * Year of the date. From 1 to 9999, or 0 when the year does not apply.
			 */
			year?: number;
			/**
			 * Month of the year. From 1 to 12, or 0 when the month does not apply.
			 */
			month?: number;
			/**
			 * Day of the month. From 1 to 31, or 0 when the day does not apply.
			 */
			day?: number;
		};
		/**
		 * The type of the event. Any custom value is accepted by the API as well.
		 */
		type?: '' | 'anniversary' | 'other';
	}[];
	/**
	 * The websites on the person. When `urls` is listed in Update person fields, this list replaces every stored URL.
	 *
	 * Items: One of the contact's websites.
	 */
	urls?: {
		/**
		 * The URL of the website.
		 */
		value: string;
		/**
		 * The type of the website. Any custom value is accepted by the API as well.
		 */
		type?:
			| ''
			| 'home'
			| 'work'
			| 'blog'
			| 'profile'
			| 'homePage'
			| 'ftp'
			| 'reservations'
			| 'appInstallPage'
			| 'other';
	}[];
	/**
	 * The instant messaging accounts on the person. When `imClients` is listed in Update person fields, this list replaces every stored account.
	 *
	 * Items: One of the contact's instant messaging accounts.
	 */
	imClients?: {
		/**
		 * The username used in the IM client.
		 */
		username: string;
		/**
		 * The type of the IM client. Any custom value is accepted by the API as well.
		 */
		type?: '' | 'home' | 'work' | 'other';
		/**
		 * The protocol of the IM client. Any custom value is accepted by the API as well.
		 */
		protocol?:
			| ''
			| 'aim'
			| 'msn'
			| 'yahoo'
			| 'skype'
			| 'qq'
			| 'googleTalk'
			| 'icq'
			| 'jabber'
			| 'netMeeting';
	}[];
	/**
	 * The people the person is related to. When `relations` is listed in Update person fields, this list replaces every stored relation.
	 *
	 * Items: A person the contact is related to.
	 */
	relations?: {
		/**
		 * The name of the related person.
		 */
		person: string;
		/**
		 * The type of the relation. Any custom value is accepted by the API as well.
		 */
		type?:
			| ''
			| 'spouse'
			| 'child'
			| 'mother'
			| 'father'
			| 'parent'
			| 'brother'
			| 'sister'
			| 'friend'
			| 'relative'
			| 'domesticPartner'
			| 'manager'
			| 'assistant'
			| 'referredBy'
			| 'partner';
	}[];
	/**
	 * Arbitrary key-value pairs stored on the person.
	 *
	 * Items: A single user defined key-value pair.
	 */
	userDefined?: {
		/**
		 * The name of the user defined field.
		 */
		key: string;
		/**
		 * The value of the user defined field.
		 */
		value?: string;
	}[];
	/**
	 * A mask of what source types to return in the response. Defaults to `Profile` and `Contact` if not set.
	 */
	sources?:
		| ''
		| 'READ_SOURCE_TYPE_PROFILE'
		| 'READ_SOURCE_TYPE_CONTACT'
		| 'READ_SOURCE_TYPE_DOMAIN_CONTACT';
};

export type UpdateContactOutput = {
	/**
	 * The person's locale preferences.
	 *
	 * Items: A person's locale preference.
	 */
	locales?: {
		/**
		 * The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag representing the locale.
		 */
		value?: string;
		/**
		 * Metadata about the locale.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The person's client data.
	 *
	 * Items: Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
	 */
	clientData?: {
		/**
		 * The client specified value of the client data.
		 */
		value?: string;
		/**
		 * The client specified key of the client data.
		 */
		key?: string;
		/**
		 * Metadata about the client data.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The person's SIP addresses.
	 *
	 * Items: A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
	 */
	sipAddresses?: {
		/**
		 * Metadata about the SIP address.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The SIP address in the [RFC 3261 19.1](https://tools.ietf.org/html/rfc3261#section-19.1) SIP URI format.
		 */
		value?: string;
		/**
		 * The type of the SIP address. The type can be custom or or one of these predefined values: * `home` * `work` * `mobile` * `other`.
		 */
		type?: string;
		/**
		 * The type of the SIP address translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
	}[];
	/**
	 * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
	 */
	etag?: string;
	/**
	 * The person's names. This field is a singleton for contact sources.
	 *
	 * Items: A person's name. If the name is a mononym, the family name is empty.
	 */
	names?: {
		/**
		 * The display name formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header.
		 */
		displayName?: string;
		/**
		 * The given name.
		 */
		givenName?: string;
		/**
		 * The display name with the last name first formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header.
		 */
		displayNameLastFirst?: string;
		/**
		 * The middle name(s) spelled as they sound.
		 */
		phoneticMiddleName?: string;
		/**
		 * The full name spelled as it sounds.
		 */
		phoneticFullName?: string;
		/**
		 * The given name spelled as it sounds.
		 */
		phoneticGivenName?: string;
		/**
		 * The family name spelled as it sounds.
		 */
		phoneticFamilyName?: string;
		/**
		 * The honorific prefixes spelled as they sound.
		 */
		phoneticHonorificPrefix?: string;
		/**
		 * The honorific prefixes, such as `Mrs.` or `Dr.`.
		 */
		honorificPrefix?: string;
		/**
		 * The middle name(s).
		 */
		middleName?: string;
		/**
		 * The honorific suffixes, such as `Jr.`.
		 */
		honorificSuffix?: string;
		/**
		 * The honorific suffixes spelled as they sound.
		 */
		phoneticHonorificSuffix?: string;
		/**
		 * Metadata about the name.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The family name.
		 */
		familyName?: string;
		/**
		 * The free form name value.
		 */
		unstructuredName?: string;
	}[];
	/**
	 * The person's genders. This field is a singleton for contact sources.
	 *
	 * Items: A person's gender.
	 */
	genders?: {
		/**
		 * Free form text field for pronouns that should be used to address the person. Common values are: * `he`/`him` * `she`/`her` * `they`/`them`.
		 */
		addressMeAs?: string;
		/**
		 * Metadata about the gender.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The gender for the person. The gender can be custom or one of these predefined values: * `male` * `female` * `unspecified`.
		 */
		value?: string;
		/**
		 * The value of the gender translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale. Unspecified or custom value are not localized.
		 */
		formattedValue?: string;
	}[];
	/**
	 * The person's email addresses. For `people.connections.list` and `otherContacts.list` the number of email addresses is limited to 100. If a Person has more email addresses the entire set can be obtained by calling GetPeople.
	 *
	 * Items: A person's email address.
	 */
	emailAddresses?: {
		/**
		 * The type of the email address. The type can be custom or one of these predefined values: * `home` * `work` * `other`.
		 */
		type?: string;
		/**
		 * The email address.
		 */
		value?: string;
		/**
		 * The type of the email address translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
		/**
		 * The display name of the email.
		 */
		displayName?: string;
		/**
		 * Metadata about the email address.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The person's external IDs.
	 *
	 * Items: An identifier from an external entity related to the person.
	 */
	externalIds?: {
		/**
		 * The value of the external ID.
		 */
		value?: string;
		/**
		 * The type of the event translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
		/**
		 * The type of the external ID. The type can be custom or one of these predefined values: * `account` * `customer` * `loginId` * `network` * `organization`.
		 */
		type?: string;
		/**
		 * Metadata about the external ID.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The person's photos.
	 *
	 * Items: A person's photo. A picture shown next to the person's name to help others recognize the person.
	 */
	photos?: {
		/**
		 * The URL of the photo. You can change the desired size by appending a query parameter `sz={size}` at the end of the url, where {size} is the size in pixels. Example: https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50.
		 */
		url?: string;
		/**
		 * Metadata about the photo.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * True if the photo is a default photo; false if the photo is a user-provided photo.
		 */
		default?: boolean;
	}[];
	/**
	 * The person's cover photos.
	 *
	 * Items: A person's cover photo. A large image shown on the person's profile page that represents who they are or what they care about.
	 */
	coverPhotos?: {
		/**
		 * True if the cover photo is the default cover photo; false if the cover photo is a user-provided cover photo.
		 */
		default?: boolean;
		/**
		 * Metadata about the cover photo.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The URL of the cover photo.
		 */
		url?: string;
	}[];
	/**
	 * The person's interests.
	 *
	 * Items: One of the person's interests.
	 */
	interests?: {
		/**
		 * The interest; for example, `stargazing`.
		 */
		value?: string;
		/**
		 * Metadata about the interest.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The resource name for the person, assigned by the server. An ASCII string in the form of `people/{person_id}`.
	 */
	resourceName?: string;
	/**
	 * The person's age ranges.
	 *
	 * Items: A person's age range.
	 */
	ageRanges?: {
		/**
		 * Metadata about the age range.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The age range. Possible values: `LESS_THAN_EIGHTEEN`, `EIGHTEEN_TO_TWENTY`, `TWENTY_ONE_OR_OLDER`.
		 */
		ageRange?: string;
	}[];
	/**
	 * The person's miscellaneous keywords.
	 *
	 * Items: A person's miscellaneous keyword.
	 */
	miscKeywords?: {
		/**
		 * Metadata about the miscellaneous keyword.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The type of the miscellaneous keyword translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
		/**
		 * The value of the miscellaneous keyword.
		 */
		value?: string;
		/**
		 * The miscellaneous keyword type. Possible values: `OUTLOOK_BILLING_INFORMATION`, `OUTLOOK_DIRECTORY_SERVER`, `OUTLOOK_KEYWORD`, `OUTLOOK_MILEAGE`, `OUTLOOK_PRIORITY`, `OUTLOOK_SENSITIVITY`, `OUTLOOK_SUBJECT`, `OUTLOOK_USER`, `HOME`, `WORK`, `OTHER`.
		 */
		type?: string;
	}[];
	/**
	 * The person's biographies. This field is a singleton for contact sources.
	 *
	 * Items: A person's short biography.
	 */
	biographies?: {
		/**
		 * The content type of the biography. Possible values: `TEXT_PLAIN`, `TEXT_HTML`.
		 */
		contentType?: string;
		/**
		 * The short biography.
		 */
		value?: string;
		/**
		 * Metadata about the biography.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The person's file-ases.
	 *
	 * Items: The name that should be used to sort the person in a list.
	 */
	fileAses?: {
		/**
		 * Metadata about the file-as.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The file-as value.
		 */
		value?: string;
	}[];
	/**
	 * The person's occupations.
	 *
	 * Items: A person's occupation.
	 */
	occupations?: {
		/**
		 * The occupation; for example, `carpenter`.
		 */
		value?: string;
		/**
		 * Metadata about the occupation.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The person's relations.
	 *
	 * Items: A person's relation to another person.
	 */
	relations?: {
		/**
		 * The name of the other person this relation refers to.
		 */
		person?: string;
		/**
		 * The type of the relation translated and formatted in the viewer's account locale or the locale specified in the Accept-Language HTTP header.
		 */
		formattedType?: string;
		/**
		 * Metadata about the relation.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The person's relation to the other person. The type can be custom or one of these predefined values: * `spouse` * `child` * `mother` * `father` * `parent` * `brother` * `sister` * `friend` * `relative` * `domesticPartner` * `manager` * `assistant` * `referredBy` * `partner`.
		 */
		type?: string;
	}[];
	/**
	 * Metadata about the person.
	 */
	metadata?: {
		/**
		 * Any former resource names this person has had. Populated only for `people.connections.list` requests that include a sync token. The resource name may change when adding or removing fields that link a contact and profile such as a verified email, verified phone number, or profile URL.
		 *
		 * Items: A single previous resource names value.
		 */
		previousResourceNames?: string[];
		/**
		 * The sources of data for the person.
		 *
		 * Items: The source of a field.
		 */
		sources?: {
			/**
			 * The unique identifier within the source type generated by the server.
			 */
			id?: string;
			/**
			 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
			 */
			type?: string;
			/**
			 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
			 */
			updateTime?: string;
			/**
			 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
			 */
			etag?: string;
			/**
			 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
			 */
			profileMetadata?: {
				/**
				 * The user types.
				 *
				 * Items: A single user types value.
				 */
				userTypes?: string[];
				/**
				 * The profile object type. Possible values: `PERSON`, `PAGE`.
				 */
				objectType?: string;
			};
		}[];
		/**
		 * True if the person resource has been deleted. Populated only for `people.connections.list` and `otherContacts.list` sync requests.
		 */
		deleted?: boolean;
		/**
		 * Resource names of people linked to this resource.
		 *
		 * Items: A single linked people resource names value.
		 */
		linkedPeopleResourceNames?: string[];
	};
	/**
	 * The person's locations.
	 *
	 * Items: A person's location.
	 */
	locations?: {
		/**
		 * The building identifier.
		 */
		buildingId?: string;
		/**
		 * The floor name or number.
		 */
		floor?: string;
		/**
		 * Metadata about the location.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * Whether the location is the current location.
		 */
		current?: boolean;
		/**
		 * The floor section in `floor_name`.
		 */
		floorSection?: string;
		/**
		 * The free-form value of the location.
		 */
		value?: string;
		/**
		 * The individual desk location.
		 */
		deskCode?: string;
		/**
		 * The type of the location. The type can be custom or one of these predefined values: * `desk` * `grewUp`.
		 */
		type?: string;
	}[];
	/**
	 * The person's user defined data.
	 *
	 * Items: Arbitrary user data that is populated by the end users.
	 */
	userDefined?: {
		/**
		 * The end user specified key of the user defined data.
		 */
		key?: string;
		/**
		 * Metadata about the user defined data.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The end user specified value of the user defined data.
		 */
		value?: string;
	}[];
	/**
	 * The person's events.
	 *
	 * Items: An event related to the person.
	 */
	events?: {
		/**
		 * The type of the event. The type can be custom or one of these predefined values: * `anniversary` * `other`.
		 */
		type?: string;
		/**
		 * Metadata about the event.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The date of the event.
		 */
		date?: {
			/**
			 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
			 */
			year?: number;
			/**
			 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
			 */
			day?: number;
			/**
			 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
			 */
			month?: number;
		};
		/**
		 * The type of the event translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
	}[];
	/**
	 * The person's instant messaging clients.
	 *
	 * Items: A person's instant messaging client.
	 */
	imClients?: {
		/**
		 * The type of the IM client. The type can be custom or one of these predefined values: * `home` * `work` * `other`.
		 */
		type?: string;
		/**
		 * Metadata about the IM client.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The protocol of the IM client formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedProtocol?: string;
		/**
		 * The user name used in the IM client.
		 */
		username?: string;
		/**
		 * The type of the IM client translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
		/**
		 * The protocol of the IM client. The protocol can be custom or one of these predefined values: * `aim` * `msn` * `yahoo` * `skype` * `qq` * `googleTalk` * `icq` * `jabber` * `netMeeting`.
		 */
		protocol?: string;
	}[];
	/**
	 * The person's group memberships.
	 *
	 * Items: A person's membership in a group. Only contact group memberships can be modified.
	 */
	memberships?: {
		/**
		 * The contact group membership.
		 */
		contactGroupMembership?: {
			/**
			 * The contact group ID for the contact group membership.
			 */
			contactGroupId?: string;
			/**
			 * The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/{contact_group_id}`. Only contact_group_resource_name can be used for modifying memberships. Any contact group membership can be removed, but only user group or "myContacts" or "starred" system groups memberships can be added. A contact must always have at least one contact group membership.
			 */
			contactGroupResourceName?: string;
		};
		/**
		 * The domain membership.
		 */
		domainMembership?: {
			/**
			 * True if the person is in the viewer's Google Workspace domain.
			 */
			inViewerDomain?: boolean;
		};
		/**
		 * Metadata about the membership.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The person's birthdays. This field is a singleton for contact sources.
	 *
	 * Items: A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
	 */
	birthdays?: {
		/**
		 * Metadata about the birthday.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The structured date of the birthday.
		 */
		date?: {
			/**
			 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
			 */
			year?: number;
			/**
			 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
			 */
			day?: number;
			/**
			 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
			 */
			month?: number;
		};
		/**
		 * Prefer to use the `date` field if set. A free-form string representing the user's birthday. This value is not validated.
		 */
		text?: string;
	}[];
	/**
	 * The person's associated URLs.
	 *
	 * Items: A person's associated URLs.
	 */
	urls?: {
		/**
		 * The type of the URL. The type can be custom or one of these predefined values: * `home` * `work` * `blog` * `profile` * `homePage` * `ftp` * `reservations` * `appInstallPage`: website for a Currents application. * `other`.
		 */
		type?: string;
		/**
		 * The URL.
		 */
		value?: string;
		/**
		 * The type of the URL translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
		/**
		 * Metadata about the URL.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The person's street addresses.
	 *
	 * Items: A person's physical address. May be a P.O. box or street address. All fields are optional.
	 */
	addresses?: {
		/**
		 * The region of the address; for example, the state or province.
		 */
		region?: string;
		/**
		 * The street address.
		 */
		streetAddress?: string;
		/**
		 * The country of the address.
		 */
		country?: string;
		/**
		 * The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country code of the address.
		 */
		countryCode?: string;
		/**
		 * The P.O. box of the address.
		 */
		poBox?: string;
		/**
		 * The postal code of the address.
		 */
		postalCode?: string;
		/**
		 * The type of the address. The type can be custom or one of these predefined values: * `home` * `work` * `other`.
		 */
		type?: string;
		/**
		 * The city of the address.
		 */
		city?: string;
		/**
		 * The unstructured value of the address. If this is not set by the user it will be automatically constructed from structured values.
		 */
		formattedValue?: string;
		/**
		 * Metadata about the address.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The type of the address translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
		/**
		 * The extended address of the address; for example, the apartment number.
		 */
		extendedAddress?: string;
	}[];
	/**
	 * The person's calendar URLs.
	 *
	 * Items: A person's calendar URL.
	 */
	calendarUrls?: {
		/**
		 * Metadata about the calendar URL.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The type of the calendar URL. The type can be custom or one of these predefined values: * `home` * `freeBusy` * `work`.
		 */
		type?: string;
		/**
		 * The type of the calendar URL translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
		/**
		 * The calendar URL.
		 */
		url?: string;
	}[];
	/**
	 * The person's skills.
	 *
	 * Items: A skill that the person has.
	 */
	skills?: {
		/**
		 * The skill; for example, `underwater basket weaving`.
		 */
		value?: string;
		/**
		 * Metadata about the skill.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
	}[];
	/**
	 * The person's nicknames.
	 *
	 * Items: A person's nickname.
	 */
	nicknames?: {
		/**
		 * The nickname.
		 */
		value?: string;
		/**
		 * Metadata about the nickname.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The type of the nickname. Possible values: `DEFAULT`, `MAIDEN_NAME`, `INITIALS`, `GPLUS`, `OTHER_NAME`, `ALTERNATE_NAME`, `SHORT_NAME`.
		 */
		type?: string;
	}[];
	/**
	 * The person's phone numbers. For `people.connections.list` and `otherContacts.list` the number of phone numbers is limited to 100. If a Person has more phone numbers the entire set can be obtained by calling GetPeople.
	 *
	 * Items: A person's phone number.
	 */
	phoneNumbers?: {
		/**
		 * The type of the phone number. The type can be custom or one of these predefined values: * `home` * `work` * `mobile` * `homeFax` * `workFax` * `otherFax` * `pager` * `workMobile` * `workPager` * `main` * `googleVoice` * `other`.
		 */
		type?: string;
		/**
		 * Metadata about the phone number.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The canonicalized [ITU-T E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf) form of the phone number.
		 */
		canonicalForm?: string;
		/**
		 * The type of the phone number translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
		/**
		 * The phone number.
		 */
		value?: string;
	}[];
	/**
	 * The person's past or current organizations.
	 *
	 * Items: A person's past or current organization. Overlapping date ranges are permitted.
	 */
	organizations?: {
		/**
		 * The person's full-time equivalent millipercent within the organization (100000 = 100%).
		 */
		fullTimeEquivalentMillipercent?: number;
		/**
		 * The person's department at the organization.
		 */
		department?: string;
		/**
		 * True if the organization is the person's current organization; false if the organization is a past organization.
		 */
		current?: boolean;
		/**
		 * The type of the organization. The type can be custom or one of these predefined values: * `work` * `school`.
		 */
		type?: string;
		/**
		 * The domain name associated with the organization; for example, `google.com`.
		 */
		domain?: string;
		/**
		 * The start date when the person joined the organization.
		 */
		startDate?: {
			/**
			 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
			 */
			year?: number;
			/**
			 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
			 */
			day?: number;
			/**
			 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
			 */
			month?: number;
		};
		/**
		 * The person's job description at the organization.
		 */
		jobDescription?: string;
		/**
		 * The type of the organization translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string;
		/**
		 * Metadata about the organization.
		 */
		metadata?: {
			/**
			 * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
			 */
			sourcePrimary?: boolean;
			/**
			 * True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
			 */
			verified?: boolean;
			/**
			 * True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
			 */
			primary?: boolean;
			/**
			 * The source of the field.
			 */
			source?: {
				/**
				 * The unique identifier within the source type generated by the server.
				 */
				id?: string;
				/**
				 * The source type. Possible values: `ACCOUNT`, `PROFILE`, `DOMAIN_PROFILE`, `CONTACT`, `OTHER_CONTACT`, `DOMAIN_CONTACT`.
				 */
				type?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
				 */
				updateTime?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
				 */
				etag?: string;
				/**
				 * **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
				 */
				profileMetadata?: {
					/**
					 * The user types.
					 *
					 * Items: A single user types value.
					 */
					userTypes?: string[];
					/**
					 * The profile object type. Possible values: `PERSON`, `PAGE`.
					 */
					objectType?: string;
				};
			};
		};
		/**
		 * The symbol associated with the organization; for example, a stock ticker symbol, abbreviation, or acronym.
		 */
		symbol?: string;
		/**
		 * The location of the organization office the person works at.
		 */
		location?: string;
		/**
		 * The name of the organization.
		 */
		name?: string;
		/**
		 * The end date when the person left the organization.
		 */
		endDate?: {
			/**
			 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
			 */
			year?: number;
			/**
			 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
			 */
			day?: number;
			/**
			 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
			 */
			month?: number;
		};
		/**
		 * The phonetic name of the organization.
		 */
		phoneticName?: string;
		/**
		 * The person's cost center at the organization.
		 */
		costCenter?: string;
	}[];
};

/**
 * Update a contact
 * Updates the fields listed in the update mask on an existing contact.
 */
export async function updateContact(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateContactInput;
		connectionId: number;
	},
): Promise<UpdateContactOutput> {
	const response = await this.endpointCaller<UpdateContactOutput>(
		{
			appName: 'google-contacts',
			appVersion: 4,
			endpointName: 'updateContact',
		},
		payload,
	);
	return response.output;
}
