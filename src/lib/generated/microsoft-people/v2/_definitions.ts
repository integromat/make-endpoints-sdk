// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Microsoft Graph API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://graph.microsoft.com/`. Provide the remaining path in the URL parameter\n(e.g. `v1.0/me`). Authentication is handled automatically via the app\'s connection.\n\nAdd the header `Content-Type: application/json` to requests that have a body.\n\nRefer to the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/overview) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { azure: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter the part of the URL that comes after `https://graph.microsoft.com/`. For example, `v1.0/me`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers; we already did that for you. Add the header `Content-Type: application/json` to requests that have a body.",
					items: {
						type: 'object',
						description: 'The HTTP request header.',
						properties: {
							key: { type: 'string', description: 'The HTTP request header key.' },
							value: {
								type: 'string',
								description: 'The HTTP request header value.',
							},
						},
						required: [],
					},
				},
				qs: {
					type: 'array',
					description: 'The HTTP request query parameters.',
					items: {
						type: 'object',
						description: 'The HTTP request query parameter.',
						properties: {
							key: {
								type: 'string',
								description: "The HTTP request query parameter's key.",
							},
							value: {
								type: 'string',
								description: "The HTTP request query parameter's value.",
							},
						},
						required: [],
					},
				},
				body: {
					description:
						'The HTTP request body. This input will be ignored if the HTTP request method is `GET`.',
				},
			},
			required: ['url', 'method'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { description: 'The HTTP response body.' },
				headers: {
					type: 'object',
					description: 'The HTTP response headers.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				statusCode: { type: 'number', description: 'The HTTP response status code.' },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'createAContact',
		label: 'Create a contact',
		description: 'Creates a contact in the default contacts folder of the signed-in user.',
		context:
			'---\nname: createAContact\ndescription: Creates a contact in the default contacts folder of the signed-in user.\n---\n\nCreates a contact in the default contacts folder (`POST /me/contacts`). To create a contact in another folder, use **Create a contact in a folder**.\nEmpty values are omitted from the request. Provide at least one contact property (for example, **Given name** or **Email addresses**). The created contact, including its `id`, is returned.\n\nSee the [Create contact API reference](https://learn.microsoft.com/en-us/graph/api/user-post-contacts?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Contacts.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				givenName: { type: 'string', description: "The contact's given name." },
				middleName: { type: 'string', description: "The contact's middle name." },
				surname: { type: 'string', description: "The contact's surname." },
				displayName: {
					type: 'string',
					description:
						"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
				},
				nickName: { type: 'string', description: "The contact's nickname." },
				initials: { type: 'string', description: "The contact's initials." },
				generation: { type: 'string', description: "The contact's suffix." },
				fileAs: { type: 'string', description: 'The name the contact is filed under.' },
				yomiGivenName: {
					type: 'string',
					description: 'The phonetic Japanese given name (first name) of the contact.',
				},
				yomiSurname: {
					type: 'string',
					description: 'The phonetic Japanese surname (last name) of the contact.',
				},
				yomiCompanyName: {
					type: 'string',
					description: 'The phonetic Japanese company name of the contact.',
				},
				emailAddresses: {
					type: 'array',
					description: "The contact's email addresses.",
					items: {
						type: 'object',
						description: 'An email address of the contact.',
						properties: {
							name: {
								type: 'string',
								description: 'The display name of the person or entity.',
							},
							address: {
								type: 'string',
								description: 'The email address of the person or entity.',
							},
						},
						required: [],
					},
				},
				primaryEmailAddress: {
					type: 'object',
					description: "The contact's primary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				secondaryEmailAddress: {
					type: 'object',
					description: "The contact's secondary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				tertiaryEmailAddress: {
					type: 'object',
					description: "The contact's tertiary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				mobilePhone: { type: 'string', description: "The contact's mobile phone number." },
				homePhones: {
					type: 'array',
					description: "The contact's home phone numbers.",
					items: { type: 'string', description: 'A home phone number of the contact.' },
				},
				businessPhones: {
					type: 'array',
					description: "The contact's business phone numbers.",
					items: {
						type: 'string',
						description: 'A business phone number of the contact.',
					},
				},
				imAddresses: {
					type: 'array',
					description: "The contact's instant messaging (IM) addresses.",
					items: {
						type: 'string',
						description: 'An instant messaging (IM) address of the contact.',
					},
				},
				businessHomePage: {
					type: 'string',
					description: 'The business home page of the contact.',
				},
				jobTitle: { type: 'string', description: "The contact's job title." },
				companyName: { type: 'string', description: "The name of the contact's company." },
				department: { type: 'string', description: "The contact's department." },
				officeLocation: {
					type: 'string',
					description: "The location of the contact's office.",
				},
				profession: { type: 'string', description: "The contact's profession." },
				assistantName: {
					type: 'string',
					description: "The name of the contact's assistant.",
				},
				manager: { type: 'string', description: "The name of the contact's manager." },
				homeAddress: {
					type: 'object',
					description: "The contact's home address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				businessAddress: {
					type: 'object',
					description: "The contact's business address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				otherAddress: {
					type: 'object',
					description: 'Other addresses for the contact.',
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the contact.',
					items: {
						type: 'string',
						description: 'A category associated with the contact.',
					},
				},
				children: {
					type: 'array',
					description: "The names of the contact's children.",
					items: { type: 'string', description: 'The name of a child of the contact.' },
				},
				spouseName: {
					type: 'string',
					description: "The name of the contact's spouse or partner.",
				},
				personalNotes: {
					type: 'string',
					description: "The user's notes about the contact.",
				},
				birthday: { type: 'string', description: "The contact's birthday." },
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				'@odata.etag': { type: 'string', description: 'The entity tag of the contact.' },
				id: { type: 'string', description: "The contact's unique identifier." },
				createdDateTime: {
					type: 'string',
					description: 'The time the contact was created.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The time the contact was modified.',
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the contact. Every time the contact is changed, the change key changes as well.',
				},
				parentFolderId: {
					type: 'string',
					description: "The ID of the contact's parent folder.",
				},
				givenName: { type: 'string', description: "The contact's given name." },
				middleName: { type: 'string', description: "The contact's middle name." },
				surname: { type: 'string', description: "The contact's surname." },
				displayName: {
					type: 'string',
					description:
						"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
				},
				nickName: { type: 'string', description: "The contact's nickname." },
				initials: { type: 'string', description: "The contact's initials." },
				generation: { type: 'string', description: "The contact's suffix." },
				fileAs: { type: 'string', description: 'The name the contact is filed under.' },
				yomiGivenName: {
					type: 'string',
					description: 'The phonetic Japanese given name (first name) of the contact.',
				},
				yomiSurname: {
					type: 'string',
					description: 'The phonetic Japanese surname (last name) of the contact.',
				},
				yomiCompanyName: {
					type: 'string',
					description: 'The phonetic Japanese company name of the contact.',
				},
				emailAddresses: {
					type: 'array',
					description: "The contact's email addresses.",
					items: {
						type: 'object',
						description: 'An email address of the contact.',
						properties: {
							name: {
								type: 'string',
								description: 'The display name of the person or entity.',
							},
							address: {
								type: 'string',
								description: 'The email address of the person or entity.',
							},
						},
						required: [],
					},
				},
				primaryEmailAddress: {
					type: 'object',
					description: "The contact's primary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				secondaryEmailAddress: {
					type: 'object',
					description: "The contact's secondary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				tertiaryEmailAddress: {
					type: 'object',
					description: "The contact's tertiary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				mobilePhone: { type: 'string', description: "The contact's mobile phone number." },
				homePhones: {
					type: 'array',
					description: "The contact's home phone numbers.",
					items: { type: 'string', description: 'A home phone number of the contact.' },
				},
				businessPhones: {
					type: 'array',
					description: "The contact's business phone numbers.",
					items: {
						type: 'string',
						description: 'A business phone number of the contact.',
					},
				},
				imAddresses: {
					type: 'array',
					description: "The contact's instant messaging (IM) addresses.",
					items: {
						type: 'string',
						description: 'An instant messaging (IM) address of the contact.',
					},
				},
				businessHomePage: {
					type: 'string',
					description: 'The business home page of the contact.',
				},
				jobTitle: { type: 'string', description: "The contact's job title." },
				companyName: { type: 'string', description: "The name of the contact's company." },
				department: { type: 'string', description: "The contact's department." },
				officeLocation: {
					type: 'string',
					description: "The location of the contact's office.",
				},
				profession: { type: 'string', description: "The contact's profession." },
				assistantName: {
					type: 'string',
					description: "The name of the contact's assistant.",
				},
				manager: { type: 'string', description: "The name of the contact's manager." },
				homeAddress: {
					type: 'object',
					description: "The contact's home address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				businessAddress: {
					type: 'object',
					description: "The contact's business address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				otherAddress: {
					type: 'object',
					description: 'Other addresses for the contact.',
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the contact.',
					items: {
						type: 'string',
						description: 'A category associated with the contact.',
					},
				},
				children: {
					type: 'array',
					description: "The names of the contact's children.",
					items: { type: 'string', description: 'The name of a child of the contact.' },
				},
				spouseName: {
					type: 'string',
					description: "The name of the contact's spouse or partner.",
				},
				personalNotes: {
					type: 'string',
					description: "The user's notes about the contact.",
				},
				birthday: { type: 'string', description: "The contact's birthday." },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'createAContactFolder',
		label: 'Create a contact folder',
		description: 'Creates a contact folder.',
		context:
			'---\nname: createAContactFolder\ndescription: Creates a contact folder.\n---\n\nCreates a contact folder (`POST /me/contactFolders`). The created folder, including its `id`, is returned.\n\nSee the [Create contactFolder API reference](https://learn.microsoft.com/en-us/graph/api/user-post-contactfolders?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Contacts.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				displayName: { type: 'string', description: "The folder's display name." },
			},
			required: ['displayName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the contact folder.' },
				parentFolderId: {
					type: 'string',
					description: "The ID of the folder's parent folder.",
				},
				displayName: { type: 'string', description: "The folder's display name." },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'createAContactInFolder',
		label: 'Create a contact in a folder',
		description: 'Creates a contact in the specified contact folder.',
		context:
			'---\nname: createAContactInFolder\ndescription: Creates a contact in the specified contact folder.\n---\n\nCreates a contact in the specified contact folder (`POST /me/contactFolders/{id}/contacts`). The folder is set by **Contact folder ID**; find it with **List contact folders**. To create a contact in the default contacts folder, use **Create a contact**.\nEmpty values are omitted from the request. Provide at least one contact property (for example, **Given name** or **Email addresses**). The created contact, including its `id`, is returned.\n\nSee the [Create contact in a folder API reference](https://learn.microsoft.com/en-us/graph/api/contactfolder-post-contacts?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Contacts.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				contactFolder: {
					type: 'string',
					description:
						'The ID of the contact folder. Use the **List contact folders** endpoint to find it.',
				},
				givenName: { type: 'string', description: "The contact's given name." },
				middleName: { type: 'string', description: "The contact's middle name." },
				surname: { type: 'string', description: "The contact's surname." },
				displayName: {
					type: 'string',
					description:
						"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
				},
				nickName: { type: 'string', description: "The contact's nickname." },
				initials: { type: 'string', description: "The contact's initials." },
				generation: { type: 'string', description: "The contact's suffix." },
				fileAs: { type: 'string', description: 'The name the contact is filed under.' },
				yomiGivenName: {
					type: 'string',
					description: 'The phonetic Japanese given name (first name) of the contact.',
				},
				yomiSurname: {
					type: 'string',
					description: 'The phonetic Japanese surname (last name) of the contact.',
				},
				yomiCompanyName: {
					type: 'string',
					description: 'The phonetic Japanese company name of the contact.',
				},
				emailAddresses: {
					type: 'array',
					description: "The contact's email addresses.",
					items: {
						type: 'object',
						description: 'An email address of the contact.',
						properties: {
							name: {
								type: 'string',
								description: 'The display name of the person or entity.',
							},
							address: {
								type: 'string',
								description: 'The email address of the person or entity.',
							},
						},
						required: [],
					},
				},
				primaryEmailAddress: {
					type: 'object',
					description: "The contact's primary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				secondaryEmailAddress: {
					type: 'object',
					description: "The contact's secondary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				tertiaryEmailAddress: {
					type: 'object',
					description: "The contact's tertiary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				mobilePhone: { type: 'string', description: "The contact's mobile phone number." },
				homePhones: {
					type: 'array',
					description: "The contact's home phone numbers.",
					items: { type: 'string', description: 'A home phone number of the contact.' },
				},
				businessPhones: {
					type: 'array',
					description: "The contact's business phone numbers.",
					items: {
						type: 'string',
						description: 'A business phone number of the contact.',
					},
				},
				imAddresses: {
					type: 'array',
					description: "The contact's instant messaging (IM) addresses.",
					items: {
						type: 'string',
						description: 'An instant messaging (IM) address of the contact.',
					},
				},
				businessHomePage: {
					type: 'string',
					description: 'The business home page of the contact.',
				},
				jobTitle: { type: 'string', description: "The contact's job title." },
				companyName: { type: 'string', description: "The name of the contact's company." },
				department: { type: 'string', description: "The contact's department." },
				officeLocation: {
					type: 'string',
					description: "The location of the contact's office.",
				},
				profession: { type: 'string', description: "The contact's profession." },
				assistantName: {
					type: 'string',
					description: "The name of the contact's assistant.",
				},
				manager: { type: 'string', description: "The name of the contact's manager." },
				homeAddress: {
					type: 'object',
					description: "The contact's home address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				businessAddress: {
					type: 'object',
					description: "The contact's business address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				otherAddress: {
					type: 'object',
					description: 'Other addresses for the contact.',
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the contact.',
					items: {
						type: 'string',
						description: 'A category associated with the contact.',
					},
				},
				children: {
					type: 'array',
					description: "The names of the contact's children.",
					items: { type: 'string', description: 'The name of a child of the contact.' },
				},
				spouseName: {
					type: 'string',
					description: "The name of the contact's spouse or partner.",
				},
				personalNotes: {
					type: 'string',
					description: "The user's notes about the contact.",
				},
				birthday: { type: 'string', description: "The contact's birthday." },
			},
			required: ['contactFolder'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				'@odata.etag': { type: 'string', description: 'The entity tag of the contact.' },
				id: { type: 'string', description: "The contact's unique identifier." },
				createdDateTime: {
					type: 'string',
					description: 'The time the contact was created.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The time the contact was modified.',
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the contact. Every time the contact is changed, the change key changes as well.',
				},
				parentFolderId: {
					type: 'string',
					description: "The ID of the contact's parent folder.",
				},
				givenName: { type: 'string', description: "The contact's given name." },
				middleName: { type: 'string', description: "The contact's middle name." },
				surname: { type: 'string', description: "The contact's surname." },
				displayName: {
					type: 'string',
					description:
						"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
				},
				nickName: { type: 'string', description: "The contact's nickname." },
				initials: { type: 'string', description: "The contact's initials." },
				generation: { type: 'string', description: "The contact's suffix." },
				fileAs: { type: 'string', description: 'The name the contact is filed under.' },
				yomiGivenName: {
					type: 'string',
					description: 'The phonetic Japanese given name (first name) of the contact.',
				},
				yomiSurname: {
					type: 'string',
					description: 'The phonetic Japanese surname (last name) of the contact.',
				},
				yomiCompanyName: {
					type: 'string',
					description: 'The phonetic Japanese company name of the contact.',
				},
				emailAddresses: {
					type: 'array',
					description: "The contact's email addresses.",
					items: {
						type: 'object',
						description: 'An email address of the contact.',
						properties: {
							name: {
								type: 'string',
								description: 'The display name of the person or entity.',
							},
							address: {
								type: 'string',
								description: 'The email address of the person or entity.',
							},
						},
						required: [],
					},
				},
				primaryEmailAddress: {
					type: 'object',
					description: "The contact's primary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				secondaryEmailAddress: {
					type: 'object',
					description: "The contact's secondary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				tertiaryEmailAddress: {
					type: 'object',
					description: "The contact's tertiary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				mobilePhone: { type: 'string', description: "The contact's mobile phone number." },
				homePhones: {
					type: 'array',
					description: "The contact's home phone numbers.",
					items: { type: 'string', description: 'A home phone number of the contact.' },
				},
				businessPhones: {
					type: 'array',
					description: "The contact's business phone numbers.",
					items: {
						type: 'string',
						description: 'A business phone number of the contact.',
					},
				},
				imAddresses: {
					type: 'array',
					description: "The contact's instant messaging (IM) addresses.",
					items: {
						type: 'string',
						description: 'An instant messaging (IM) address of the contact.',
					},
				},
				businessHomePage: {
					type: 'string',
					description: 'The business home page of the contact.',
				},
				jobTitle: { type: 'string', description: "The contact's job title." },
				companyName: { type: 'string', description: "The name of the contact's company." },
				department: { type: 'string', description: "The contact's department." },
				officeLocation: {
					type: 'string',
					description: "The location of the contact's office.",
				},
				profession: { type: 'string', description: "The contact's profession." },
				assistantName: {
					type: 'string',
					description: "The name of the contact's assistant.",
				},
				manager: { type: 'string', description: "The name of the contact's manager." },
				homeAddress: {
					type: 'object',
					description: "The contact's home address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				businessAddress: {
					type: 'object',
					description: "The contact's business address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				otherAddress: {
					type: 'object',
					description: 'Other addresses for the contact.',
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the contact.',
					items: {
						type: 'string',
						description: 'A category associated with the contact.',
					},
				},
				children: {
					type: 'array',
					description: "The names of the contact's children.",
					items: { type: 'string', description: 'The name of a child of the contact.' },
				},
				spouseName: {
					type: 'string',
					description: "The name of the contact's spouse or partner.",
				},
				personalNotes: {
					type: 'string',
					description: "The user's notes about the contact.",
				},
				birthday: { type: 'string', description: "The contact's birthday." },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'deleteAContact',
		label: 'Delete a contact',
		description: 'Deletes a contact.',
		context:
			'---\nname: deleteAContact\ndescription: Deletes a contact.\n---\n\nDeletes a contact by its ID (`DELETE /me/contacts/{id}`). Find the ID with **Search contacts** or **Search contacts in a folder**.\nMicrosoft Graph returns `204 No Content`, so the result is empty.\n\nSee the [Delete contact API reference](https://learn.microsoft.com/en-us/graph/api/contact-delete?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Contacts.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				contact: {
					type: 'string',
					description:
						'The ID of the contact. Use the **Search contacts** endpoint to find it.',
				},
			},
			required: ['contact'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'deleteAContactFolder',
		label: 'Delete a contact folder',
		description: 'Deletes a contact folder.',
		context:
			'---\nname: deleteAContactFolder\ndescription: Deletes a contact folder.\n---\n\nDeletes a contact folder by its ID (`DELETE /me/contactFolders/{id}`). Find the ID with **List contact folders**.\nMicrosoft Graph returns `204 No Content`, so the result is empty.\n\nSee the [Delete contactFolder API reference](https://learn.microsoft.com/en-us/graph/api/contactfolder-delete?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Contacts.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				contactFolder: {
					type: 'string',
					description:
						'The ID of the contact folder. Use the **List contact folders** endpoint to find it.',
				},
			},
			required: ['contactFolder'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'getAContact',
		label: 'Get a contact',
		description: 'Returns the properties of a contact.',
		context:
			"---\nname: getAContact\ndescription: Returns the properties of a contact.\n---\n\nGets a contact by its ID (`GET /me/contacts/{id}`). The contact can be in any of the user's contact folders. Find the ID with **Search contacts** or **Search contacts in a folder**.\n**Expand:** each relationship must be expanded with a nested filter on its `id`, for example `extensions($filter=id eq '{extensionId}')` or `singleValueExtendedProperties($filter=id eq '{id_value}')`. Without the filter, `extensions` fails with a 400 error, while `singleValueExtendedProperties` and `multiValueExtendedProperties` return no data. An expanded relationship is added to the response under its own name (`extensions`, `singleValueExtendedProperties`, `multiValueExtendedProperties`); it is absent otherwise.\n\nSee the [Get contact API reference](https://learn.microsoft.com/en-us/graph/api/contact-get?view=graph-rest-1.0).",
		accounts: { azure: { scope: ['Contacts.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				contact: {
					type: 'string',
					description:
						'The ID of the contact. Use the **Search contacts** endpoint to find it.',
				},
				select: {
					type: 'string',
					description:
						'The properties to return, sent as `$select`. If empty, Microsoft Graph returns its default set of properties.',
					default: '',
					enum: [
						'',
						'assistantName',
						'birthday',
						'businessAddress',
						'businessHomePage',
						'businessPhones',
						'categories',
						'changeKey',
						'children',
						'companyName',
						'createdDateTime',
						'department',
						'displayName',
						'emailAddresses',
						'fileAs',
						'generation',
						'givenName',
						'homeAddress',
						'homePhones',
						'id',
						'imAddresses',
						'initials',
						'jobTitle',
						'lastModifiedDateTime',
						'manager',
						'middleName',
						'mobilePhone',
						'nickName',
						'officeLocation',
						'otherAddress',
						'parentFolderId',
						'personalNotes',
						'primaryEmailAddress',
						'profession',
						'secondaryEmailAddress',
						'spouseName',
						'surname',
						'tertiaryEmailAddress',
						'title',
						'yomiCompanyName',
						'yomiGivenName',
						'yomiSurname',
					],
				},
				expand: {
					type: 'string',
					description:
						"An OData `$expand` expression, sent as `$expand`. Expandable relationships are `extensions`, `singleValueExtendedProperties` and `multiValueExtendedProperties`. Each of them must be expanded with a nested filter on its `id`, for example `extensions($filter=id eq '{extensionId}')` or `singleValueExtendedProperties($filter=id eq '{id_value}')`. Without the filter, `extensions` fails with a 400 error, while `singleValueExtendedProperties` and `multiValueExtendedProperties` return no data. The `photo` relationship cannot be expanded. See [Get open extension](https://learn.microsoft.com/en-us/graph/api/opentypeextension-get?view=graph-rest-1.0) and [Get single-value extended property](https://learn.microsoft.com/en-us/graph/api/singlevaluelegacyextendedproperty-get?view=graph-rest-1.0).",
				},
			},
			required: ['contact'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				'@odata.etag': { type: 'string', description: 'The entity tag of the contact.' },
				id: { type: 'string', description: "The contact's unique identifier." },
				createdDateTime: {
					type: 'string',
					description: 'The time the contact was created.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The time the contact was modified.',
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the contact. Every time the contact is changed, the change key changes as well.',
				},
				parentFolderId: {
					type: 'string',
					description: "The ID of the contact's parent folder.",
				},
				givenName: { type: 'string', description: "The contact's given name." },
				middleName: { type: 'string', description: "The contact's middle name." },
				surname: { type: 'string', description: "The contact's surname." },
				displayName: {
					type: 'string',
					description:
						"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
				},
				nickName: { type: 'string', description: "The contact's nickname." },
				initials: { type: 'string', description: "The contact's initials." },
				generation: { type: 'string', description: "The contact's suffix." },
				fileAs: { type: 'string', description: 'The name the contact is filed under.' },
				yomiGivenName: {
					type: 'string',
					description: 'The phonetic Japanese given name (first name) of the contact.',
				},
				yomiSurname: {
					type: 'string',
					description: 'The phonetic Japanese surname (last name) of the contact.',
				},
				yomiCompanyName: {
					type: 'string',
					description: 'The phonetic Japanese company name of the contact.',
				},
				emailAddresses: {
					type: 'array',
					description: "The contact's email addresses.",
					items: {
						type: 'object',
						description: 'An email address of the contact.',
						properties: {
							name: {
								type: 'string',
								description: 'The display name of the person or entity.',
							},
							address: {
								type: 'string',
								description: 'The email address of the person or entity.',
							},
						},
						required: [],
					},
				},
				primaryEmailAddress: {
					type: 'object',
					description: "The contact's primary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				secondaryEmailAddress: {
					type: 'object',
					description: "The contact's secondary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				tertiaryEmailAddress: {
					type: 'object',
					description: "The contact's tertiary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				mobilePhone: { type: 'string', description: "The contact's mobile phone number." },
				homePhones: {
					type: 'array',
					description: "The contact's home phone numbers.",
					items: { type: 'string', description: 'A home phone number of the contact.' },
				},
				businessPhones: {
					type: 'array',
					description: "The contact's business phone numbers.",
					items: {
						type: 'string',
						description: 'A business phone number of the contact.',
					},
				},
				imAddresses: {
					type: 'array',
					description: "The contact's instant messaging (IM) addresses.",
					items: {
						type: 'string',
						description: 'An instant messaging (IM) address of the contact.',
					},
				},
				businessHomePage: {
					type: 'string',
					description: 'The business home page of the contact.',
				},
				jobTitle: { type: 'string', description: "The contact's job title." },
				companyName: { type: 'string', description: "The name of the contact's company." },
				department: { type: 'string', description: "The contact's department." },
				officeLocation: {
					type: 'string',
					description: "The location of the contact's office.",
				},
				profession: { type: 'string', description: "The contact's profession." },
				assistantName: {
					type: 'string',
					description: "The name of the contact's assistant.",
				},
				manager: { type: 'string', description: "The name of the contact's manager." },
				homeAddress: {
					type: 'object',
					description: "The contact's home address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				businessAddress: {
					type: 'object',
					description: "The contact's business address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				otherAddress: {
					type: 'object',
					description: 'Other addresses for the contact.',
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the contact.',
					items: {
						type: 'string',
						description: 'A category associated with the contact.',
					},
				},
				children: {
					type: 'array',
					description: "The names of the contact's children.",
					items: { type: 'string', description: 'The name of a child of the contact.' },
				},
				spouseName: {
					type: 'string',
					description: "The name of the contact's spouse or partner.",
				},
				personalNotes: {
					type: 'string',
					description: "The user's notes about the contact.",
				},
				birthday: { type: 'string', description: "The contact's birthday." },
				extensions: {
					type: 'array',
					description:
						'The open extensions defined for the item. Returned only when `extensions` is expanded. Custom properties of an open extension are returned as additional keys of each item.',
					items: {
						type: 'object',
						description: 'An open extension.',
						properties: {
							id: {
								type: 'string',
								description:
									'A fully qualified identifier that concatenates the extension type with the extension name.',
							},
							extensionName: {
								type: 'string',
								description:
									'A unique text identifier for an open type data extension.',
							},
						},
						required: [],
					},
				},
				singleValueExtendedProperties: {
					type: 'array',
					description:
						'The single-value extended properties defined for the item. Returned only when `singleValueExtendedProperties` is expanded.',
					items: {
						type: 'object',
						description: 'A single-value extended property.',
						properties: {
							id: {
								type: 'string',
								description: 'The property ID used to identify the property.',
							},
							value: { type: 'string', description: 'The property value.' },
						},
						required: [],
					},
				},
				multiValueExtendedProperties: {
					type: 'array',
					description:
						'The multi-value extended properties defined for the item. Returned only when `multiValueExtendedProperties` is expanded.',
					items: {
						type: 'object',
						description: 'A multi-value extended property.',
						properties: {
							id: { type: 'string', description: 'The property identifier.' },
							value: {
								type: 'array',
								description: 'A collection of property values.',
								items: { type: 'string', description: 'A property value.' },
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'getAContactFolder',
		label: 'Get a contact folder',
		description: 'Returns the properties of a contact folder.',
		context:
			"---\nname: getAContactFolder\ndescription: Returns the properties of a contact folder.\n---\n\nGets a contact folder by its ID (`GET /me/contactFolders/{id}`). Find the ID with **List contact folders**.\n**Expand:** list the relationships to expand in **Expand**, separated by commas (`childFolders`, `contacts`, `singleValueExtendedProperties`, `multiValueExtendedProperties`). The `singleValueExtendedProperties` and `multiValueExtendedProperties` relationships must be expanded with a nested filter on their `id`, for example `singleValueExtendedProperties($filter=id eq '{id_value}')`; without the filter they return no data. An expanded relationship is added to the response under its own name; it is absent otherwise.\n\nSee the [Get contactFolder API reference](https://learn.microsoft.com/en-us/graph/api/contactfolder-get?view=graph-rest-1.0).",
		accounts: { azure: { scope: ['Contacts.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				contactFolder: {
					type: 'string',
					description:
						'The ID of the contact folder. Use the **List contact folders** endpoint to find it.',
				},
				select: {
					type: 'string',
					description:
						'The properties to return, sent as `$select`. If empty, Microsoft Graph returns its default set of properties.',
					default: '',
					enum: ['', 'displayName', 'id', 'parentFolderId'],
				},
				expand: {
					type: 'string',
					description:
						"An OData `$expand` expression, sent as `$expand`. Expandable relationships are `childFolders`, `contacts`, `singleValueExtendedProperties` and `multiValueExtendedProperties`. To expand several relationships, separate them with commas, for example `childFolders,contacts`. The `singleValueExtendedProperties` and `multiValueExtendedProperties` relationships must be expanded with a nested filter on their `id`, for example `singleValueExtendedProperties($filter=id eq '{id_value}')`. Without the filter they return no data. See [Get single-value extended property](https://learn.microsoft.com/en-us/graph/api/singlevaluelegacyextendedproperty-get?view=graph-rest-1.0) and [Get multi-value extended property](https://learn.microsoft.com/en-us/graph/api/multivaluelegacyextendedproperty-get?view=graph-rest-1.0).",
				},
			},
			required: ['contactFolder'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the contact folder.' },
				parentFolderId: {
					type: 'string',
					description: "The ID of the folder's parent folder.",
				},
				displayName: { type: 'string', description: "The folder's display name." },
				childFolders: {
					type: 'array',
					description:
						'The child folders of the contact folder. Returned only when `childFolders` is expanded.',
					items: {
						type: 'object',
						description: 'A child contact folder.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier of the contact folder.',
							},
							parentFolderId: {
								type: 'string',
								description: "The ID of the folder's parent folder.",
							},
							displayName: {
								type: 'string',
								description: "The folder's display name.",
							},
						},
						required: [],
					},
				},
				contacts: {
					type: 'array',
					description:
						'The contacts in the contact folder. Returned only when `contacts` is expanded.',
					items: {
						type: 'object',
						description: 'A contact.',
						properties: {
							'@odata.etag': {
								type: 'string',
								description: 'The entity tag of the contact.',
							},
							id: { type: 'string', description: "The contact's unique identifier." },
							createdDateTime: {
								type: 'string',
								description: 'The time the contact was created.',
							},
							lastModifiedDateTime: {
								type: 'string',
								description: 'The time the contact was modified.',
							},
							changeKey: {
								type: 'string',
								description:
									'Identifies the version of the contact. Every time the contact is changed, the change key changes as well.',
							},
							parentFolderId: {
								type: 'string',
								description: "The ID of the contact's parent folder.",
							},
							givenName: { type: 'string', description: "The contact's given name." },
							middleName: {
								type: 'string',
								description: "The contact's middle name.",
							},
							surname: { type: 'string', description: "The contact's surname." },
							displayName: {
								type: 'string',
								description:
									"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
							},
							nickName: { type: 'string', description: "The contact's nickname." },
							initials: { type: 'string', description: "The contact's initials." },
							generation: { type: 'string', description: "The contact's suffix." },
							fileAs: {
								type: 'string',
								description: 'The name the contact is filed under.',
							},
							yomiGivenName: {
								type: 'string',
								description:
									'The phonetic Japanese given name (first name) of the contact.',
							},
							yomiSurname: {
								type: 'string',
								description:
									'The phonetic Japanese surname (last name) of the contact.',
							},
							yomiCompanyName: {
								type: 'string',
								description: 'The phonetic Japanese company name of the contact.',
							},
							emailAddresses: {
								type: 'array',
								description: "The contact's email addresses.",
								items: {
									type: 'object',
									description: 'An email address of the contact.',
									properties: {
										name: {
											type: 'string',
											description:
												'The display name of the person or entity.',
										},
										address: {
											type: 'string',
											description:
												'The email address of the person or entity.',
										},
									},
									required: [],
								},
							},
							primaryEmailAddress: {
								type: 'object',
								description: "The contact's primary email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the person or entity.',
									},
									address: {
										type: 'string',
										description: 'The email address of the person or entity.',
									},
								},
								required: [],
							},
							secondaryEmailAddress: {
								type: 'object',
								description: "The contact's secondary email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the person or entity.',
									},
									address: {
										type: 'string',
										description: 'The email address of the person or entity.',
									},
								},
								required: [],
							},
							tertiaryEmailAddress: {
								type: 'object',
								description: "The contact's tertiary email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the person or entity.',
									},
									address: {
										type: 'string',
										description: 'The email address of the person or entity.',
									},
								},
								required: [],
							},
							mobilePhone: {
								type: 'string',
								description: "The contact's mobile phone number.",
							},
							homePhones: {
								type: 'array',
								description: "The contact's home phone numbers.",
								items: {
									type: 'string',
									description: 'A home phone number of the contact.',
								},
							},
							businessPhones: {
								type: 'array',
								description: "The contact's business phone numbers.",
								items: {
									type: 'string',
									description: 'A business phone number of the contact.',
								},
							},
							imAddresses: {
								type: 'array',
								description: "The contact's instant messaging (IM) addresses.",
								items: {
									type: 'string',
									description:
										'An instant messaging (IM) address of the contact.',
								},
							},
							businessHomePage: {
								type: 'string',
								description: 'The business home page of the contact.',
							},
							jobTitle: { type: 'string', description: "The contact's job title." },
							companyName: {
								type: 'string',
								description: "The name of the contact's company.",
							},
							department: {
								type: 'string',
								description: "The contact's department.",
							},
							officeLocation: {
								type: 'string',
								description: "The location of the contact's office.",
							},
							profession: {
								type: 'string',
								description: "The contact's profession.",
							},
							assistantName: {
								type: 'string',
								description: "The name of the contact's assistant.",
							},
							manager: {
								type: 'string',
								description: "The name of the contact's manager.",
							},
							homeAddress: {
								type: 'object',
								description: "The contact's home address.",
								properties: {
									street: { type: 'string', description: 'The street.' },
									city: { type: 'string', description: 'The city.' },
									state: { type: 'string', description: 'The state.' },
									countryOrRegion: {
										type: 'string',
										description:
											"The country or region. It's a free-format string value, for example, `United States`.",
									},
									postalCode: { type: 'string', description: 'The postal code.' },
								},
								required: [],
							},
							businessAddress: {
								type: 'object',
								description: "The contact's business address.",
								properties: {
									street: { type: 'string', description: 'The street.' },
									city: { type: 'string', description: 'The city.' },
									state: { type: 'string', description: 'The state.' },
									countryOrRegion: {
										type: 'string',
										description:
											"The country or region. It's a free-format string value, for example, `United States`.",
									},
									postalCode: { type: 'string', description: 'The postal code.' },
								},
								required: [],
							},
							otherAddress: {
								type: 'object',
								description: 'Other addresses for the contact.',
								properties: {
									street: { type: 'string', description: 'The street.' },
									city: { type: 'string', description: 'The city.' },
									state: { type: 'string', description: 'The state.' },
									countryOrRegion: {
										type: 'string',
										description:
											"The country or region. It's a free-format string value, for example, `United States`.",
									},
									postalCode: { type: 'string', description: 'The postal code.' },
								},
								required: [],
							},
							categories: {
								type: 'array',
								description: 'The categories associated with the contact.',
								items: {
									type: 'string',
									description: 'A category associated with the contact.',
								},
							},
							children: {
								type: 'array',
								description: "The names of the contact's children.",
								items: {
									type: 'string',
									description: 'The name of a child of the contact.',
								},
							},
							spouseName: {
								type: 'string',
								description: "The name of the contact's spouse or partner.",
							},
							personalNotes: {
								type: 'string',
								description: "The user's notes about the contact.",
							},
							birthday: { type: 'string', description: "The contact's birthday." },
						},
						required: [],
					},
				},
				singleValueExtendedProperties: {
					type: 'array',
					description:
						'The single-value extended properties defined for the item. Returned only when `singleValueExtendedProperties` is expanded.',
					items: {
						type: 'object',
						description: 'A single-value extended property.',
						properties: {
							id: {
								type: 'string',
								description: 'The property ID used to identify the property.',
							},
							value: { type: 'string', description: 'The property value.' },
						},
						required: [],
					},
				},
				multiValueExtendedProperties: {
					type: 'array',
					description:
						'The multi-value extended properties defined for the item. Returned only when `multiValueExtendedProperties` is expanded.',
					items: {
						type: 'object',
						description: 'A multi-value extended property.',
						properties: {
							id: { type: 'string', description: 'The property identifier.' },
							value: {
								type: 'array',
								description: 'A collection of property values.',
								items: { type: 'string', description: 'A property value.' },
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'searchContactFolders',
		label: 'List contact folders',
		description:
			'Returns a page of contact folders from the default contacts folder of the signed-in user.',
		context:
			'---\nname: searchContactFolders\ndescription: Returns a page of contact folders from the default contacts folder of the signed-in user.\n---\n\nLists the contact folders under the default contacts folder (`GET /me/contactFolders`). Use the returned `id` as the contact folder ID of the other endpoints.\nPaging: use **Top** to set the page size and **Skip** to move to the next page. The response contains `@odata.nextLink` when more results exist.\n\nSee the [List contactFolders API reference](https://learn.microsoft.com/en-us/graph/api/user-list-contactfolders?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Contacts.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				filter: {
					type: 'string',
					description:
						'An OData `$filter` expression sent as `$filter`. See [OData query parameters](https://learn.microsoft.com/en-us/graph/query-parameters).',
				},
				select: {
					type: 'string',
					description:
						'The properties to return, sent as `$select`. If empty, Microsoft Graph returns its default set of properties.',
					default: '',
					enum: ['', 'displayName', 'id', 'parentFolderId'],
				},
				orderby: {
					type: 'string',
					description: 'The sort expressions, sent as `$orderby`.',
					default: '',
					enum: ['', 'displayName asc', 'displayName desc'],
				},
				count: {
					type: 'boolean',
					description:
						'Set to `true` to include the total number of items in the collection as `@odata.count`. Sent as `$count`.',
				},
				top: {
					type: 'number',
					description:
						'The number of items to return in one page, sent as `$top`. The minimum value is 1. If omitted, Microsoft Graph applies its default page size.',
					minimum: 1,
				},
				skip: {
					type: 'number',
					description:
						'The number of items to skip at the start of the collection, sent as `$skip`. Use it to get the next page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				'@odata.nextLink': {
					type: 'string',
					description:
						'The URL of the next page of results. Present only when more results exist. Use its `$skip` value as the **Skip** input of the next call.',
				},
				'@odata.count': {
					type: 'number',
					description:
						'The total number of items in the collection. Present only when **Count** is set to `true`.',
				},
				value: {
					type: 'array',
					description: 'The page of contact folders returned.',
					items: {
						type: 'object',
						description: 'A contact folder.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier of the contact folder.',
							},
							parentFolderId: {
								type: 'string',
								description: "The ID of the folder's parent folder.",
							},
							displayName: {
								type: 'string',
								description: "The folder's display name.",
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'searchContacts',
		label: 'Search contacts',
		description:
			'Returns a page of contacts from the default contacts folder of the signed-in user.',
		context:
			"---\nname: searchContacts\ndescription: Returns a page of contacts from the default Contacts folder of the signed-in user.\n---\n\nLists contacts in the default Contacts folder of the signed-in user (`GET /me/contacts`). To list contacts of another folder, use **Search contacts in a folder**.\nPaging: use **Top** to set the page size and **Skip** to move to the next page. The response contains `@odata.nextLink` when more results exist.\nFiltering: **Filter** accepts an OData `$filter` expression on contact properties, for example `startswith(displayName,'a')`. Email addresses are a special case: inside the `emailAddresses` collection only `any` with `eq` on `address` is supported, for example `emailAddresses/any(a:a/address eq 'garth@contoso.com')`; filtering on other sub-properties or with other operators (`ne`, `startswith()`) is not supported there. When you also set Order by, the property you sort by must appear first in the filter, for example `displayName ge '' and companyName eq 'Contoso'` with `displayName asc`. `endswith()` is not supported.\n\nSee the [List contacts API reference](https://learn.microsoft.com/en-us/graph/api/user-list-contacts?view=graph-rest-1.0) and the [contact resource](https://learn.microsoft.com/en-us/graph/api/resources/contact?view=graph-rest-1.0).",
		accounts: { azure: { scope: ['Contacts.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				filter: {
					type: 'string',
					description:
						"An OData `$filter` expression, sent as `$filter`, for example `startswith(displayName,'a')` or `companyName eq 'Contoso'`. To filter by email address, use `emailAddresses/any(a:a/address eq 'garth@contoso.com')`; inside the `emailAddresses` collection only `any` with `eq` on `address` is supported (no `ne`, `startswith()` or other sub-properties). When you also set Order by, the property you sort by must appear first in the filter, for example `displayName ge '' and companyName eq 'Contoso'` with `displayName asc`. `endswith()` is not supported.",
				},
				select: {
					type: 'string',
					description:
						'The properties to return, sent as `$select`. If empty, Microsoft Graph returns its default set of properties.',
					default: '',
					enum: [
						'',
						'assistantName',
						'birthday',
						'businessAddress',
						'businessHomePage',
						'businessPhones',
						'categories',
						'changeKey',
						'children',
						'companyName',
						'createdDateTime',
						'department',
						'displayName',
						'emailAddresses',
						'fileAs',
						'generation',
						'givenName',
						'homeAddress',
						'homePhones',
						'id',
						'imAddresses',
						'initials',
						'jobTitle',
						'lastModifiedDateTime',
						'manager',
						'middleName',
						'mobilePhone',
						'nickName',
						'officeLocation',
						'otherAddress',
						'parentFolderId',
						'personalNotes',
						'primaryEmailAddress',
						'profession',
						'secondaryEmailAddress',
						'spouseName',
						'surname',
						'tertiaryEmailAddress',
						'title',
						'yomiCompanyName',
						'yomiGivenName',
						'yomiSurname',
					],
				},
				orderby: {
					type: 'string',
					description: 'The sort expressions, sent as `$orderby`.',
					default: '',
					enum: [
						'',
						'displayName asc',
						'displayName desc',
						'createdDateTime asc',
						'createdDateTime desc',
						'lastModifiedDateTime asc',
						'lastModifiedDateTime desc',
					],
				},
				count: {
					type: 'boolean',
					description:
						'Set to `true` to include the total number of items in the collection as `@odata.count`. Sent as `$count`.',
				},
				top: {
					type: 'number',
					description:
						'The number of items to return in one page, sent as `$top`. The minimum value is 1. If omitted, Microsoft Graph applies its default page size.',
					minimum: 1,
				},
				skip: {
					type: 'number',
					description:
						'The number of items to skip at the start of the collection, sent as `$skip`. Use it to get the next page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				'@odata.nextLink': {
					type: 'string',
					description:
						'The URL of the next page of results. Present only when more results exist. Use its `$skip` value as the **Skip** input of the next call.',
				},
				'@odata.count': {
					type: 'number',
					description:
						'The total number of items in the collection. Present only when **Count** is set to `true`.',
				},
				value: {
					type: 'array',
					description: 'The page of contacts returned.',
					items: {
						type: 'object',
						description: 'A contact.',
						properties: {
							'@odata.etag': {
								type: 'string',
								description: 'The entity tag of the contact.',
							},
							id: { type: 'string', description: "The contact's unique identifier." },
							createdDateTime: {
								type: 'string',
								description: 'The time the contact was created.',
							},
							lastModifiedDateTime: {
								type: 'string',
								description: 'The time the contact was modified.',
							},
							changeKey: {
								type: 'string',
								description:
									'Identifies the version of the contact. Every time the contact is changed, the change key changes as well.',
							},
							parentFolderId: {
								type: 'string',
								description: "The ID of the contact's parent folder.",
							},
							givenName: { type: 'string', description: "The contact's given name." },
							middleName: {
								type: 'string',
								description: "The contact's middle name.",
							},
							surname: { type: 'string', description: "The contact's surname." },
							displayName: {
								type: 'string',
								description:
									"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
							},
							nickName: { type: 'string', description: "The contact's nickname." },
							initials: { type: 'string', description: "The contact's initials." },
							generation: { type: 'string', description: "The contact's suffix." },
							fileAs: {
								type: 'string',
								description: 'The name the contact is filed under.',
							},
							yomiGivenName: {
								type: 'string',
								description:
									'The phonetic Japanese given name (first name) of the contact.',
							},
							yomiSurname: {
								type: 'string',
								description:
									'The phonetic Japanese surname (last name) of the contact.',
							},
							yomiCompanyName: {
								type: 'string',
								description: 'The phonetic Japanese company name of the contact.',
							},
							emailAddresses: {
								type: 'array',
								description: "The contact's email addresses.",
								items: {
									type: 'object',
									description: 'An email address of the contact.',
									properties: {
										name: {
											type: 'string',
											description:
												'The display name of the person or entity.',
										},
										address: {
											type: 'string',
											description:
												'The email address of the person or entity.',
										},
									},
									required: [],
								},
							},
							primaryEmailAddress: {
								type: 'object',
								description: "The contact's primary email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the person or entity.',
									},
									address: {
										type: 'string',
										description: 'The email address of the person or entity.',
									},
								},
								required: [],
							},
							secondaryEmailAddress: {
								type: 'object',
								description: "The contact's secondary email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the person or entity.',
									},
									address: {
										type: 'string',
										description: 'The email address of the person or entity.',
									},
								},
								required: [],
							},
							tertiaryEmailAddress: {
								type: 'object',
								description: "The contact's tertiary email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the person or entity.',
									},
									address: {
										type: 'string',
										description: 'The email address of the person or entity.',
									},
								},
								required: [],
							},
							mobilePhone: {
								type: 'string',
								description: "The contact's mobile phone number.",
							},
							homePhones: {
								type: 'array',
								description: "The contact's home phone numbers.",
								items: {
									type: 'string',
									description: 'A home phone number of the contact.',
								},
							},
							businessPhones: {
								type: 'array',
								description: "The contact's business phone numbers.",
								items: {
									type: 'string',
									description: 'A business phone number of the contact.',
								},
							},
							imAddresses: {
								type: 'array',
								description: "The contact's instant messaging (IM) addresses.",
								items: {
									type: 'string',
									description:
										'An instant messaging (IM) address of the contact.',
								},
							},
							businessHomePage: {
								type: 'string',
								description: 'The business home page of the contact.',
							},
							jobTitle: { type: 'string', description: "The contact's job title." },
							companyName: {
								type: 'string',
								description: "The name of the contact's company.",
							},
							department: {
								type: 'string',
								description: "The contact's department.",
							},
							officeLocation: {
								type: 'string',
								description: "The location of the contact's office.",
							},
							profession: {
								type: 'string',
								description: "The contact's profession.",
							},
							assistantName: {
								type: 'string',
								description: "The name of the contact's assistant.",
							},
							manager: {
								type: 'string',
								description: "The name of the contact's manager.",
							},
							homeAddress: {
								type: 'object',
								description: "The contact's home address.",
								properties: {
									street: { type: 'string', description: 'The street.' },
									city: { type: 'string', description: 'The city.' },
									state: { type: 'string', description: 'The state.' },
									countryOrRegion: {
										type: 'string',
										description:
											"The country or region. It's a free-format string value, for example, `United States`.",
									},
									postalCode: { type: 'string', description: 'The postal code.' },
								},
								required: [],
							},
							businessAddress: {
								type: 'object',
								description: "The contact's business address.",
								properties: {
									street: { type: 'string', description: 'The street.' },
									city: { type: 'string', description: 'The city.' },
									state: { type: 'string', description: 'The state.' },
									countryOrRegion: {
										type: 'string',
										description:
											"The country or region. It's a free-format string value, for example, `United States`.",
									},
									postalCode: { type: 'string', description: 'The postal code.' },
								},
								required: [],
							},
							otherAddress: {
								type: 'object',
								description: 'Other addresses for the contact.',
								properties: {
									street: { type: 'string', description: 'The street.' },
									city: { type: 'string', description: 'The city.' },
									state: { type: 'string', description: 'The state.' },
									countryOrRegion: {
										type: 'string',
										description:
											"The country or region. It's a free-format string value, for example, `United States`.",
									},
									postalCode: { type: 'string', description: 'The postal code.' },
								},
								required: [],
							},
							categories: {
								type: 'array',
								description: 'The categories associated with the contact.',
								items: {
									type: 'string',
									description: 'A category associated with the contact.',
								},
							},
							children: {
								type: 'array',
								description: "The names of the contact's children.",
								items: {
									type: 'string',
									description: 'The name of a child of the contact.',
								},
							},
							spouseName: {
								type: 'string',
								description: "The name of the contact's spouse or partner.",
							},
							personalNotes: {
								type: 'string',
								description: "The user's notes about the contact.",
							},
							birthday: { type: 'string', description: "The contact's birthday." },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'searchContactsInFolder',
		label: 'Search contacts in a folder',
		description: 'Returns a page of contacts from the specified contact folder.',
		context:
			"---\nname: searchContactsInFolder\ndescription: Returns a page of contacts from the specified contact folder.\n---\n\nLists contacts in the specified contact folder (`GET /me/contactFolders/{id}/contacts`). To list contacts of the default Contacts folder, use **Search contacts**. Find the folder ID with **List contact folders**.\nPaging: use **Top** to set the page size and **Skip** to move to the next page. The response contains `@odata.nextLink` when more results exist.\nFiltering: **Filter** accepts an OData `$filter` expression on contact properties, for example `startswith(displayName,'a')`. Email addresses are a special case: inside the `emailAddresses` collection only `any` with `eq` on `address` is supported, for example `emailAddresses/any(a:a/address eq 'garth@contoso.com')`; filtering on other sub-properties or with other operators (`ne`, `startswith()`) is not supported there. When you also set Order by, the property you sort by must appear first in the filter, for example `displayName ge '' and companyName eq 'Contoso'` with `displayName asc`. `endswith()` is not supported.\n\nSee the [List contacts in a folder API reference](https://learn.microsoft.com/en-us/graph/api/contactfolder-list-contacts?view=graph-rest-1.0).",
		accounts: { azure: { scope: ['Contacts.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				contactFolder: {
					type: 'string',
					description:
						'The ID of the contact folder. Use the **List contact folders** endpoint to find it.',
				},
				filter: {
					type: 'string',
					description:
						"An OData `$filter` expression, sent as `$filter`, for example `startswith(displayName,'a')` or `companyName eq 'Contoso'`. To filter by email address, use `emailAddresses/any(a:a/address eq 'garth@contoso.com')`; inside the `emailAddresses` collection only `any` with `eq` on `address` is supported (no `ne`, `startswith()` or other sub-properties). When you also set Order by, the property you sort by must appear first in the filter, for example `displayName ge '' and companyName eq 'Contoso'` with `displayName asc`. `endswith()` is not supported.",
				},
				select: {
					type: 'string',
					description:
						'The properties to return, sent as `$select`. If empty, Microsoft Graph returns its default set of properties.',
					default: '',
					enum: [
						'',
						'assistantName',
						'birthday',
						'businessAddress',
						'businessHomePage',
						'businessPhones',
						'categories',
						'changeKey',
						'children',
						'companyName',
						'createdDateTime',
						'department',
						'displayName',
						'emailAddresses',
						'fileAs',
						'generation',
						'givenName',
						'homeAddress',
						'homePhones',
						'id',
						'imAddresses',
						'initials',
						'jobTitle',
						'lastModifiedDateTime',
						'manager',
						'middleName',
						'mobilePhone',
						'nickName',
						'officeLocation',
						'otherAddress',
						'parentFolderId',
						'personalNotes',
						'primaryEmailAddress',
						'profession',
						'secondaryEmailAddress',
						'spouseName',
						'surname',
						'tertiaryEmailAddress',
						'title',
						'yomiCompanyName',
						'yomiGivenName',
						'yomiSurname',
					],
				},
				orderby: {
					type: 'string',
					description: 'The sort expressions, sent as `$orderby`.',
					default: '',
					enum: [
						'',
						'displayName asc',
						'displayName desc',
						'createdDateTime asc',
						'createdDateTime desc',
						'lastModifiedDateTime asc',
						'lastModifiedDateTime desc',
					],
				},
				count: {
					type: 'boolean',
					description:
						'Set to `true` to include the total number of items in the collection as `@odata.count`. Sent as `$count`.',
				},
				top: {
					type: 'number',
					description:
						'The number of items to return in one page, sent as `$top`. The minimum value is 1. If omitted, Microsoft Graph applies its default page size.',
					minimum: 1,
				},
				skip: {
					type: 'number',
					description:
						'The number of items to skip at the start of the collection, sent as `$skip`. Use it to get the next page.',
				},
			},
			required: ['contactFolder'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				'@odata.nextLink': {
					type: 'string',
					description:
						'The URL of the next page of results. Present only when more results exist. Use its `$skip` value as the **Skip** input of the next call.',
				},
				'@odata.count': {
					type: 'number',
					description:
						'The total number of items in the collection. Present only when **Count** is set to `true`.',
				},
				value: {
					type: 'array',
					description: 'The page of contacts returned.',
					items: {
						type: 'object',
						description: 'A contact.',
						properties: {
							'@odata.etag': {
								type: 'string',
								description: 'The entity tag of the contact.',
							},
							id: { type: 'string', description: "The contact's unique identifier." },
							createdDateTime: {
								type: 'string',
								description: 'The time the contact was created.',
							},
							lastModifiedDateTime: {
								type: 'string',
								description: 'The time the contact was modified.',
							},
							changeKey: {
								type: 'string',
								description:
									'Identifies the version of the contact. Every time the contact is changed, the change key changes as well.',
							},
							parentFolderId: {
								type: 'string',
								description: "The ID of the contact's parent folder.",
							},
							givenName: { type: 'string', description: "The contact's given name." },
							middleName: {
								type: 'string',
								description: "The contact's middle name.",
							},
							surname: { type: 'string', description: "The contact's surname." },
							displayName: {
								type: 'string',
								description:
									"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
							},
							nickName: { type: 'string', description: "The contact's nickname." },
							initials: { type: 'string', description: "The contact's initials." },
							generation: { type: 'string', description: "The contact's suffix." },
							fileAs: {
								type: 'string',
								description: 'The name the contact is filed under.',
							},
							yomiGivenName: {
								type: 'string',
								description:
									'The phonetic Japanese given name (first name) of the contact.',
							},
							yomiSurname: {
								type: 'string',
								description:
									'The phonetic Japanese surname (last name) of the contact.',
							},
							yomiCompanyName: {
								type: 'string',
								description: 'The phonetic Japanese company name of the contact.',
							},
							emailAddresses: {
								type: 'array',
								description: "The contact's email addresses.",
								items: {
									type: 'object',
									description: 'An email address of the contact.',
									properties: {
										name: {
											type: 'string',
											description:
												'The display name of the person or entity.',
										},
										address: {
											type: 'string',
											description:
												'The email address of the person or entity.',
										},
									},
									required: [],
								},
							},
							primaryEmailAddress: {
								type: 'object',
								description: "The contact's primary email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the person or entity.',
									},
									address: {
										type: 'string',
										description: 'The email address of the person or entity.',
									},
								},
								required: [],
							},
							secondaryEmailAddress: {
								type: 'object',
								description: "The contact's secondary email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the person or entity.',
									},
									address: {
										type: 'string',
										description: 'The email address of the person or entity.',
									},
								},
								required: [],
							},
							tertiaryEmailAddress: {
								type: 'object',
								description: "The contact's tertiary email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the person or entity.',
									},
									address: {
										type: 'string',
										description: 'The email address of the person or entity.',
									},
								},
								required: [],
							},
							mobilePhone: {
								type: 'string',
								description: "The contact's mobile phone number.",
							},
							homePhones: {
								type: 'array',
								description: "The contact's home phone numbers.",
								items: {
									type: 'string',
									description: 'A home phone number of the contact.',
								},
							},
							businessPhones: {
								type: 'array',
								description: "The contact's business phone numbers.",
								items: {
									type: 'string',
									description: 'A business phone number of the contact.',
								},
							},
							imAddresses: {
								type: 'array',
								description: "The contact's instant messaging (IM) addresses.",
								items: {
									type: 'string',
									description:
										'An instant messaging (IM) address of the contact.',
								},
							},
							businessHomePage: {
								type: 'string',
								description: 'The business home page of the contact.',
							},
							jobTitle: { type: 'string', description: "The contact's job title." },
							companyName: {
								type: 'string',
								description: "The name of the contact's company.",
							},
							department: {
								type: 'string',
								description: "The contact's department.",
							},
							officeLocation: {
								type: 'string',
								description: "The location of the contact's office.",
							},
							profession: {
								type: 'string',
								description: "The contact's profession.",
							},
							assistantName: {
								type: 'string',
								description: "The name of the contact's assistant.",
							},
							manager: {
								type: 'string',
								description: "The name of the contact's manager.",
							},
							homeAddress: {
								type: 'object',
								description: "The contact's home address.",
								properties: {
									street: { type: 'string', description: 'The street.' },
									city: { type: 'string', description: 'The city.' },
									state: { type: 'string', description: 'The state.' },
									countryOrRegion: {
										type: 'string',
										description:
											"The country or region. It's a free-format string value, for example, `United States`.",
									},
									postalCode: { type: 'string', description: 'The postal code.' },
								},
								required: [],
							},
							businessAddress: {
								type: 'object',
								description: "The contact's business address.",
								properties: {
									street: { type: 'string', description: 'The street.' },
									city: { type: 'string', description: 'The city.' },
									state: { type: 'string', description: 'The state.' },
									countryOrRegion: {
										type: 'string',
										description:
											"The country or region. It's a free-format string value, for example, `United States`.",
									},
									postalCode: { type: 'string', description: 'The postal code.' },
								},
								required: [],
							},
							otherAddress: {
								type: 'object',
								description: 'Other addresses for the contact.',
								properties: {
									street: { type: 'string', description: 'The street.' },
									city: { type: 'string', description: 'The city.' },
									state: { type: 'string', description: 'The state.' },
									countryOrRegion: {
										type: 'string',
										description:
											"The country or region. It's a free-format string value, for example, `United States`.",
									},
									postalCode: { type: 'string', description: 'The postal code.' },
								},
								required: [],
							},
							categories: {
								type: 'array',
								description: 'The categories associated with the contact.',
								items: {
									type: 'string',
									description: 'A category associated with the contact.',
								},
							},
							children: {
								type: 'array',
								description: "The names of the contact's children.",
								items: {
									type: 'string',
									description: 'The name of a child of the contact.',
								},
							},
							spouseName: {
								type: 'string',
								description: "The name of the contact's spouse or partner.",
							},
							personalNotes: {
								type: 'string',
								description: "The user's notes about the contact.",
							},
							birthday: { type: 'string', description: "The contact's birthday." },
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'updateAContact',
		label: 'Update a contact',
		description: 'Updates the properties of a contact.',
		context:
			'---\nname: updateAContact\ndescription: Updates the properties of a contact.\n---\n\nUpdates a contact (`PATCH /me/contacts/{id}`). Find the ID with **Search contacts** or **Search contacts in a folder**.\nThis endpoint sends a `PATCH` request: only the fields you provide are changed. Empty values are omitted from the request, so a field cannot be cleared by sending an empty value. Structured properties such as addresses must be passed with the full set of sub-fields. Call **Get a contact** first to read the current values.\n\nThe updated contact is returned. See the [Update contact API reference](https://learn.microsoft.com/en-us/graph/api/contact-update?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Contacts.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				contact: {
					type: 'string',
					description:
						'The ID of the contact. Use the **Search contacts** endpoint to find it.',
				},
				givenName: { type: 'string', description: "The contact's given name." },
				middleName: { type: 'string', description: "The contact's middle name." },
				surname: { type: 'string', description: "The contact's surname." },
				displayName: {
					type: 'string',
					description:
						"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
				},
				nickName: { type: 'string', description: "The contact's nickname." },
				initials: { type: 'string', description: "The contact's initials." },
				generation: { type: 'string', description: "The contact's suffix." },
				fileAs: { type: 'string', description: 'The name the contact is filed under.' },
				yomiGivenName: {
					type: 'string',
					description: 'The phonetic Japanese given name (first name) of the contact.',
				},
				yomiSurname: {
					type: 'string',
					description: 'The phonetic Japanese surname (last name) of the contact.',
				},
				yomiCompanyName: {
					type: 'string',
					description: 'The phonetic Japanese company name of the contact.',
				},
				emailAddresses: {
					type: 'array',
					description: "The contact's email addresses.",
					items: {
						type: 'object',
						description: 'An email address of the contact.',
						properties: {
							name: {
								type: 'string',
								description: 'The display name of the person or entity.',
							},
							address: {
								type: 'string',
								description: 'The email address of the person or entity.',
							},
						},
						required: [],
					},
				},
				primaryEmailAddress: {
					type: 'object',
					description: "The contact's primary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				secondaryEmailAddress: {
					type: 'object',
					description: "The contact's secondary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				tertiaryEmailAddress: {
					type: 'object',
					description: "The contact's tertiary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				mobilePhone: { type: 'string', description: "The contact's mobile phone number." },
				homePhones: {
					type: 'array',
					description: "The contact's home phone numbers.",
					items: { type: 'string', description: 'A home phone number of the contact.' },
				},
				businessPhones: {
					type: 'array',
					description: "The contact's business phone numbers.",
					items: {
						type: 'string',
						description: 'A business phone number of the contact.',
					},
				},
				imAddresses: {
					type: 'array',
					description: "The contact's instant messaging (IM) addresses.",
					items: {
						type: 'string',
						description: 'An instant messaging (IM) address of the contact.',
					},
				},
				businessHomePage: {
					type: 'string',
					description: 'The business home page of the contact.',
				},
				jobTitle: { type: 'string', description: "The contact's job title." },
				companyName: { type: 'string', description: "The name of the contact's company." },
				department: { type: 'string', description: "The contact's department." },
				officeLocation: {
					type: 'string',
					description: "The location of the contact's office.",
				},
				profession: { type: 'string', description: "The contact's profession." },
				assistantName: {
					type: 'string',
					description: "The name of the contact's assistant.",
				},
				manager: { type: 'string', description: "The name of the contact's manager." },
				homeAddress: {
					type: 'object',
					description:
						"The contact's home address. When updating, pass the full set of address fields.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				businessAddress: {
					type: 'object',
					description:
						"The contact's business address. When updating, pass the full set of address fields.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				otherAddress: {
					type: 'object',
					description:
						'Other addresses for the contact. When updating, pass the full set of address fields.',
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the contact.',
					items: {
						type: 'string',
						description: 'A category associated with the contact.',
					},
				},
				children: {
					type: 'array',
					description: "The names of the contact's children.",
					items: { type: 'string', description: 'The name of a child of the contact.' },
				},
				spouseName: {
					type: 'string',
					description: "The name of the contact's spouse or partner.",
				},
				personalNotes: {
					type: 'string',
					description: "The user's notes about the contact.",
				},
				birthday: { type: 'string', description: "The contact's birthday." },
			},
			required: ['contact'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				'@odata.etag': { type: 'string', description: 'The entity tag of the contact.' },
				id: { type: 'string', description: "The contact's unique identifier." },
				createdDateTime: {
					type: 'string',
					description: 'The time the contact was created.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The time the contact was modified.',
				},
				changeKey: {
					type: 'string',
					description:
						'Identifies the version of the contact. Every time the contact is changed, the change key changes as well.',
				},
				parentFolderId: {
					type: 'string',
					description: "The ID of the contact's parent folder.",
				},
				givenName: { type: 'string', description: "The contact's given name." },
				middleName: { type: 'string', description: "The contact's middle name." },
				surname: { type: 'string', description: "The contact's surname." },
				displayName: {
					type: 'string',
					description:
						"The contact's display name. Later updates to other properties may cause an automatically generated value to overwrite the display name you have specified. To preserve an existing value on update, always include it.",
				},
				nickName: { type: 'string', description: "The contact's nickname." },
				initials: { type: 'string', description: "The contact's initials." },
				generation: { type: 'string', description: "The contact's suffix." },
				fileAs: { type: 'string', description: 'The name the contact is filed under.' },
				yomiGivenName: {
					type: 'string',
					description: 'The phonetic Japanese given name (first name) of the contact.',
				},
				yomiSurname: {
					type: 'string',
					description: 'The phonetic Japanese surname (last name) of the contact.',
				},
				yomiCompanyName: {
					type: 'string',
					description: 'The phonetic Japanese company name of the contact.',
				},
				emailAddresses: {
					type: 'array',
					description: "The contact's email addresses.",
					items: {
						type: 'object',
						description: 'An email address of the contact.',
						properties: {
							name: {
								type: 'string',
								description: 'The display name of the person or entity.',
							},
							address: {
								type: 'string',
								description: 'The email address of the person or entity.',
							},
						},
						required: [],
					},
				},
				primaryEmailAddress: {
					type: 'object',
					description: "The contact's primary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				secondaryEmailAddress: {
					type: 'object',
					description: "The contact's secondary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				tertiaryEmailAddress: {
					type: 'object',
					description: "The contact's tertiary email address.",
					properties: {
						name: {
							type: 'string',
							description: 'The display name of the person or entity.',
						},
						address: {
							type: 'string',
							description: 'The email address of the person or entity.',
						},
					},
					required: [],
				},
				mobilePhone: { type: 'string', description: "The contact's mobile phone number." },
				homePhones: {
					type: 'array',
					description: "The contact's home phone numbers.",
					items: { type: 'string', description: 'A home phone number of the contact.' },
				},
				businessPhones: {
					type: 'array',
					description: "The contact's business phone numbers.",
					items: {
						type: 'string',
						description: 'A business phone number of the contact.',
					},
				},
				imAddresses: {
					type: 'array',
					description: "The contact's instant messaging (IM) addresses.",
					items: {
						type: 'string',
						description: 'An instant messaging (IM) address of the contact.',
					},
				},
				businessHomePage: {
					type: 'string',
					description: 'The business home page of the contact.',
				},
				jobTitle: { type: 'string', description: "The contact's job title." },
				companyName: { type: 'string', description: "The name of the contact's company." },
				department: { type: 'string', description: "The contact's department." },
				officeLocation: {
					type: 'string',
					description: "The location of the contact's office.",
				},
				profession: { type: 'string', description: "The contact's profession." },
				assistantName: {
					type: 'string',
					description: "The name of the contact's assistant.",
				},
				manager: { type: 'string', description: "The name of the contact's manager." },
				homeAddress: {
					type: 'object',
					description: "The contact's home address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				businessAddress: {
					type: 'object',
					description: "The contact's business address.",
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				otherAddress: {
					type: 'object',
					description: 'Other addresses for the contact.',
					properties: {
						street: { type: 'string', description: 'The street.' },
						city: { type: 'string', description: 'The city.' },
						state: { type: 'string', description: 'The state.' },
						countryOrRegion: {
							type: 'string',
							description:
								"The country or region. It's a free-format string value, for example, `United States`.",
						},
						postalCode: { type: 'string', description: 'The postal code.' },
					},
					required: [],
				},
				categories: {
					type: 'array',
					description: 'The categories associated with the contact.',
					items: {
						type: 'string',
						description: 'A category associated with the contact.',
					},
				},
				children: {
					type: 'array',
					description: "The names of the contact's children.",
					items: { type: 'string', description: 'The name of a child of the contact.' },
				},
				spouseName: {
					type: 'string',
					description: "The name of the contact's spouse or partner.",
				},
				personalNotes: {
					type: 'string',
					description: "The user's notes about the contact.",
				},
				birthday: { type: 'string', description: "The contact's birthday." },
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-people',
		appVersion: 2,
		endpointName: 'updateAContactFolder',
		label: 'Update a contact folder',
		description: 'Updates the properties of a contact folder.',
		context:
			'---\nname: updateAContactFolder\ndescription: Updates the properties of a contact folder.\n---\n\nUpdates a contact folder (`PATCH /me/contactFolders/{id}`). Find the ID with **List contact folders**.\nThis endpoint sends a `PATCH` request: only the fields you provide are changed. An empty value is omitted from the request. Call **Get a contact folder** first to read the current values.\n\nThe updated folder is returned. See the [Update contactFolder API reference](https://learn.microsoft.com/en-us/graph/api/contactfolder-update?view=graph-rest-1.0).\n',
		accounts: { azure: { scope: ['Contacts.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				contactFolder: {
					type: 'string',
					description:
						'The ID of the contact folder. Use the **List contact folders** endpoint to find it.',
				},
				displayName: { type: 'string', description: "The folder's display name." },
			},
			required: ['contactFolder'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the contact folder.' },
				parentFolderId: {
					type: 'string',
					description: "The ID of the folder's parent folder.",
				},
				displayName: { type: 'string', description: "The folder's display name." },
			},
			required: [],
		},
	},
];
