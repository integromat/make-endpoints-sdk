// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'addGroupMembers',
		label: 'Add members to a group',
		description: 'Adds up to 20 members to a security or Microsoft 365 group in one request.',
		context:
			'---\nname: addGroupMembers\ndescription: Adds up to 20 members to a security or Microsoft 365 group in one request.\n---\n\nAdds members to a group by sending `members@odata.bind` to `PATCH /groups/{id}`. Each item in `members` is a full directory object reference, for example `https://graph.microsoft.com/v1.0/directoryObjects/{id}`.\n\nYou can add up to 20 members per request. If any reference in the request is invalid, no member is added. Microsoft 365 groups accept users only. Security groups also accept security groups, devices, service principals and organizational contacts.\n\nAdding an object that is already a member returns `400 Bad Request`. A group that was just created may return `400` until it has replicated, so retry after a short delay. Returns HTTP 204 No Content on success, so the output is empty.\n\nTo remove a member, use `removeGroupMember`. Refer to the [Microsoft Graph API reference: Add members](https://learn.microsoft.com/en-us/graph/api/group-post-members) for full details.',
		accounts: { azure: { scope: ['GroupMember.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupId: {
					type: 'string',
					description: 'The ID of the group to add the members to.',
				},
				members: {
					type: 'array',
					description:
						'The references to the directory objects to add. You can add up to 20 members per request. Sent as `members@odata.bind`.',
					items: {
						type: 'string',
						description:
							'The full reference to a directory object, for example `https://graph.microsoft.com/v1.0/directoryObjects/{id}`. For Microsoft 365 groups, the object must be a user.',
					},
				},
			},
			required: ['groupId', 'members'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description:
			'Performs an arbitrary authorized API call similar to the Make an API Call module.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call similar to the Make an API Call module.\n---\n\nThis Endpoint is not scoped to a single route. It forwards an arbitrary call (method, path, query string, headers and body) to the Microsoft Graph API, similar to the "Make an API Call" module.\n\nThe base URL is `https://graph.microsoft.com`. Provide the remaining path in the URL parameter, including the API version (for example `/v1.0/me`). Authentication is handled automatically through the app\'s connection.\n\nFor `POST`, `PUT` and `PATCH` requests, always pass the header `Content-Type: application/json` in `headers`. The default value of `headers` is not applied when you call the Endpoint without it, and Microsoft Graph rejects write requests without this header with `400`.\n\nThe connection only grants the permissions it was authorized with, so a call can fail with `403` if the needed Microsoft Graph permission is missing.\n\nRefer to the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/overview) for available endpoints, required parameters and response schemas.',
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
						'Enter the part of the URL that comes after `https://graph.microsoft.com`, including the API version. For example, `/v1.0/me`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers; we already did that for you.",
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
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'createUser',
		label: 'Create a user',
		description: 'Creates a new user in the organization.',
		context:
			"---\nname: createUser\ndescription: Creates a new user in the organization.\n---\n\nCreates a user. The required properties are `accountEnabled`, `displayName`, `mailNickname`, `userPrincipalName` and `passwordProfile` (with `password`). The `userPrincipalName` must use a verified domain of the tenant, for example `user@contoso.com`. `onPremisesImmutableId` is required only with a federated domain.\n\nValues are sent to Microsoft Graph exactly as you provide them. Empty values are not removed, so leave out any optional property you don't want to set instead of sending `null` or an empty string.\n\nReturns HTTP 201 with the default properties of the new user. Use `getUser` with `select` to read other properties. To invite an external B2B user, use the Graph invitation API through `arbitraryCall`.\n\nRefer to the [Microsoft Graph API reference: Create user](https://learn.microsoft.com/en-us/graph/api/user-post-users) for full details.",
		accounts: { azure: { scope: ['User.Create'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				accountEnabled: { type: 'boolean', description: 'Whether the account is enabled.' },
				displayName: {
					type: 'string',
					description: 'The name to display in the address book for the user.',
				},
				mailNickname: {
					type: 'string',
					description:
						'The mail alias for the user. The maximum length is 64 characters.',
					maximum: 64,
				},
				userPrincipalName: {
					type: 'string',
					description:
						"The user principal name (UPN) in the format `alias@domain`. The domain must be one of the tenant's verified domains. Only the characters `A-Z`, `a-z`, `0-9` and ``' . - _ ! # ^ ~`` are allowed.",
				},
				passwordProfile: {
					type: 'object',
					description: 'The password profile of the user.',
					properties: {
						password: {
							type: 'string',
							description:
								"The password of the user. It must satisfy the tenant's password policies. By default, a strong password is required.",
						},
						forceChangePasswordNextSignIn: {
							type: 'boolean',
							description:
								'Whether the user must change the password at the next sign-in.',
						},
						forceChangePasswordNextSignInWithMfa: {
							type: 'boolean',
							description:
								'Whether the user must perform multifactor authentication before changing the password at the next sign-in.',
						},
					},
					required: ['password'],
				},
				onPremisesImmutableId: {
					type: 'string',
					description:
						'Required only when you create a user account with a federated domain in the user principal name.',
				},
				aboutMe: {
					type: 'string',
					description: 'A freeform text entry field for the user to describe themselves.',
				},
				ageGroup: {
					type: 'string',
					description: 'The age group of the user.',
					default: '',
					enum: ['', 'Minor', 'NotAdult', 'Adult'],
				},
				birthday: { type: 'string', description: 'The birthday of the user.' },
				businessPhones: {
					type: 'array',
					description:
						'The telephone numbers of the user. Although it is a list, only one number can be set.',
					items: { type: 'string', description: 'A business phone number.' },
				},
				city: {
					type: 'string',
					description:
						'The city where the user is located. The maximum length is 128 characters.',
					maximum: 128,
				},
				companyName: {
					type: 'string',
					description:
						'The name of the company the user is associated with. The maximum length is 64 characters.',
					maximum: 64,
				},
				consentProvidedForMinor: {
					type: 'string',
					description: 'Whether consent was obtained for minors.',
					default: '',
					enum: ['', 'Granted', 'Denied', 'NotRequired'],
				},
				country: {
					type: 'string',
					description:
						'The country or region where the user is located, for example `US`. The maximum length is 128 characters.',
					maximum: 128,
				},
				department: {
					type: 'string',
					description:
						'The name of the department in which the user works. The maximum length is 64 characters.',
					maximum: 64,
				},
				employeeHireDate: {
					type: 'string',
					description: 'The date and time the user was hired or will start work.',
				},
				employeeId: {
					type: 'string',
					description:
						'The employee identifier assigned to the user by the organization. The maximum length is 16 characters.',
					maximum: 16,
				},
				employeeOrgData: {
					type: 'object',
					description: 'The organization data associated with the user.',
					properties: {
						costCenter: {
							type: 'string',
							description: 'The cost center associated with the user.',
						},
						division: {
							type: 'string',
							description: 'The division in which the user works.',
						},
					},
					required: [],
				},
				employeeType: {
					type: 'string',
					description:
						'The enterprise worker type, for example `Employee`, `Contractor`, `Consultant` or `Vendor`.',
				},
				faxNumber: { type: 'string', description: 'The fax number of the user.' },
				givenName: {
					type: 'string',
					description:
						'The given name (first name) of the user. The maximum length is 64 characters.',
					maximum: 64,
				},
				interests: {
					type: 'array',
					description: 'The interests of the user.',
					items: { type: 'string', description: 'An interest of the user.' },
				},
				jobTitle: {
					type: 'string',
					description: 'The job title of the user. The maximum length is 128 characters.',
					maximum: 128,
				},
				mail: {
					type: 'string',
					description:
						"The SMTP address of the user. It can't contain accent characters.",
				},
				mobilePhone: {
					type: 'string',
					description:
						'The primary cellular telephone number of the user. The maximum length is 64 characters.',
					maximum: 64,
				},
				mySite: { type: 'string', description: "The URL of the user's personal site." },
				officeLocation: {
					type: 'string',
					description: "The office location in the user's place of business.",
				},
				onPremisesExtensionAttributes: {
					type: 'object',
					description:
						'The extension attributes 1-15 of the user. Each attribute can store up to 1024 characters.',
					properties: {
						extensionAttribute1: {
							type: 'string',
							description: 'Custom extension attribute 1.',
						},
						extensionAttribute2: {
							type: 'string',
							description: 'Custom extension attribute 2.',
						},
						extensionAttribute3: {
							type: 'string',
							description: 'Custom extension attribute 3.',
						},
						extensionAttribute4: {
							type: 'string',
							description: 'Custom extension attribute 4.',
						},
						extensionAttribute5: {
							type: 'string',
							description: 'Custom extension attribute 5.',
						},
						extensionAttribute6: {
							type: 'string',
							description: 'Custom extension attribute 6.',
						},
						extensionAttribute7: {
							type: 'string',
							description: 'Custom extension attribute 7.',
						},
						extensionAttribute8: {
							type: 'string',
							description: 'Custom extension attribute 8.',
						},
						extensionAttribute9: {
							type: 'string',
							description: 'Custom extension attribute 9.',
						},
						extensionAttribute10: {
							type: 'string',
							description: 'Custom extension attribute 10.',
						},
						extensionAttribute11: {
							type: 'string',
							description: 'Custom extension attribute 11.',
						},
						extensionAttribute12: {
							type: 'string',
							description: 'Custom extension attribute 12.',
						},
						extensionAttribute13: {
							type: 'string',
							description: 'Custom extension attribute 13.',
						},
						extensionAttribute14: {
							type: 'string',
							description: 'Custom extension attribute 14.',
						},
						extensionAttribute15: {
							type: 'string',
							description: 'Custom extension attribute 15.',
						},
					},
					required: [],
				},
				otherMails: {
					type: 'array',
					description:
						'The other email addresses of the user. You can set up to 250 values.',
					items: { type: 'string', description: 'An email address of the user.' },
				},
				passwordPolicies: {
					type: 'string',
					description:
						'The password policies of the user. You can select both values to set them together.',
					default: '',
					enum: ['', 'DisableStrongPassword', 'DisablePasswordExpiration'],
				},
				pastProjects: {
					type: 'array',
					description: 'The past projects of the user.',
					items: { type: 'string', description: 'A past project.' },
				},
				postalCode: {
					type: 'string',
					description:
						'The postal code of the user. The maximum length is 40 characters.',
					maximum: 40,
				},
				preferredDataLocation: {
					type: 'string',
					description: 'The preferred data location of the user.',
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language of the user, for example `en-US`.',
				},
				responsibilities: {
					type: 'array',
					description: 'The responsibilities of the user.',
					items: { type: 'string', description: 'A responsibility of the user.' },
				},
				schools: {
					type: 'array',
					description: 'The schools the user attended.',
					items: { type: 'string', description: 'A school the user attended.' },
				},
				skills: {
					type: 'array',
					description: 'The skills of the user.',
					items: { type: 'string', description: 'A skill of the user.' },
				},
				state: {
					type: 'string',
					description:
						"The state or province in the user's address. The maximum length is 128 characters.",
					maximum: 128,
				},
				streetAddress: {
					type: 'string',
					description:
						"The street address of the user's place of business. The maximum length is 1,024 characters.",
					maximum: 1024,
				},
				surname: {
					type: 'string',
					description:
						'The surname (family name) of the user. The maximum length is 64 characters.',
					maximum: 64,
				},
				usageLocation: {
					type: 'string',
					description:
						'The two-letter country code (ISO 3166) of the user, for example `US`. Required for users who will be assigned licenses.',
					pattern: '^[A-Z]{2}$',
				},
				userType: {
					type: 'string',
					description: 'The user type.',
					default: '',
					enum: ['', 'Member', 'Guest'],
				},
			},
			required: [
				'accountEnabled',
				'displayName',
				'mailNickname',
				'userPrincipalName',
				'passwordProfile',
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the created user.' },
				businessPhones: {
					type: 'array',
					description: 'The telephone numbers of the user.',
					items: { type: 'string', description: 'A business phone number.' },
				},
				displayName: {
					type: 'string',
					description: 'The name displayed in the address book for the user.',
				},
				givenName: {
					type: 'string',
					description: 'The given name (first name) of the user.',
				},
				jobTitle: { type: 'string', description: 'The job title of the user.' },
				mail: { type: 'string', description: 'The SMTP address of the user.' },
				mobilePhone: {
					type: 'string',
					description: 'The primary cellular telephone number of the user.',
				},
				officeLocation: {
					type: 'string',
					description: "The office location in the user's place of business.",
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language of the user.',
				},
				surname: { type: 'string', description: 'The surname (family name) of the user.' },
				userPrincipalName: {
					type: 'string',
					description: 'The user principal name (UPN) of the user.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'deleteUser',
		label: 'Delete a user',
		description: 'Deletes a user.',
		context:
			'---\nname: deleteUser\ndescription: Deletes a user.\n---\n\nDeletes a user by ID or user principal name. The user, their mailbox and license assignments move to a temporary container and can be restored within 30 days. After 30 days the user is permanently deleted.\n\nThe caller needs the User Administrator or Privileged Authentication Administrator role. Deleting a user with a privileged administrator role needs a higher privileged role.\n\nReturns HTTP 204 No Content on success, so the output is empty.\n\nRefer to the [Microsoft Graph API reference: Delete a user](https://learn.microsoft.com/en-us/graph/api/user-delete) for full details.',
		accounts: { azure: { scope: ['User.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				userId: {
					type: 'string',
					description: 'The ID or the user principal name (UPN) of the user to delete.',
				},
			},
			required: ['userId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'getCurrentUser',
		label: 'Get the current user',
		description: 'Retrieves the properties of the signed-in user.',
		context:
			'---\nname: getCurrentUser\ndescription: Retrieves the properties of the signed-in user.\n---\n\nReturns the user the connection is signed in as (`GET /me`). It needs a signed-in user, so it works with the delegated connection of this app.\n\nBy default only a subset of properties is returned. Use `select` to get others, for example `displayName,givenName,postalCode`.\n\nTo get any other user, use `getUser`. Refer to the [Microsoft Graph API reference: Get user](https://learn.microsoft.com/en-us/graph/api/user-get) for full details.',
		accounts: { azure: { scope: ['User.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				select: {
					type: 'string',
					description:
						'A comma-separated list of properties to return. Sent as `$select`. Use it to get properties that are not returned by default, for example `displayName,givenName,postalCode`.',
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
				id: { type: 'string', description: 'The unique identifier of the user.' },
				aboutMe: {
					type: 'string',
					description:
						'A freeform text entry field for the user to describe themselves. Returned only with the select parameter.',
				},
				accountEnabled: {
					type: 'boolean',
					description:
						'Whether the account is enabled. Returned only with the select parameter.',
				},
				ageGroup: {
					type: 'string',
					description:
						'The age group of the user. One of `Minor`, `NotAdult`, `Adult`. Returned only with the select parameter.',
				},
				assignedLicenses: {
					type: 'array',
					description:
						'The licenses assigned to the user, including inherited group-based licenses. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A license assigned to the user.',
						properties: {
							skuId: {
								type: 'string',
								description: 'The unique identifier of the license SKU.',
							},
							disabledPlans: {
								type: 'array',
								description:
									'The IDs of the service plans disabled for this license.',
								items: {
									type: 'string',
									description: 'The ID of a disabled service plan.',
								},
							},
						},
						required: [],
					},
				},
				assignedPlans: {
					type: 'array',
					description:
						'The plans assigned to the user. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A plan assigned to the user.',
						properties: {
							assignedDateTime: {
								type: 'string',
								description: 'The date and time the plan was assigned.',
							},
							capabilityStatus: {
								type: 'string',
								description:
									'The condition of the capability assignment. One of `Enabled`, `Warning`, `Suspended`, `Deleted`, `LockedOut`.',
							},
							service: {
								type: 'string',
								description: 'The name of the service, for example `exchange`.',
							},
							servicePlanId: {
								type: 'string',
								description: 'The GUID of the service plan.',
							},
						},
						required: [],
					},
				},
				birthday: {
					type: 'string',
					description:
						'The birthday of the user. Returned only with the select parameter.',
				},
				businessPhones: {
					type: 'array',
					description: 'The telephone numbers of the user. Only one number can be set.',
					items: { type: 'string', description: 'A business phone number.' },
				},
				city: {
					type: 'string',
					description:
						'The city where the user is located. Returned only with the select parameter.',
				},
				companyName: {
					type: 'string',
					description:
						'The name of the company the user is associated with. Returned only with the select parameter.',
				},
				consentProvidedForMinor: {
					type: 'string',
					description:
						'Whether consent was obtained for minors. One of `Granted`, `Denied`, `NotRequired`. Returned only with the select parameter.',
				},
				country: {
					type: 'string',
					description:
						'The country or region where the user is located. Returned only with the select parameter.',
				},
				createdDateTime: {
					type: 'string',
					description:
						'The date and time the user was created. Returned only with the select parameter.',
				},
				creationType: {
					type: 'string',
					description:
						'How the account was created: a regular account (null), `Invitation`, `LocalAccount` or `EmailVerified`. Returned only with the select parameter.',
				},
				customSecurityAttributes: {
					description:
						'The custom security attribute values assigned to the user. Returned only with the select parameter and requires the `CustomSecAttributeAssignment.Read.All` permission.',
				},
				deletedDateTime: {
					type: 'string',
					description:
						'The date and time the user was deleted. Returned only with the select parameter.',
				},
				department: {
					type: 'string',
					description:
						'The name of the department in which the user works. Returned only with the select parameter.',
				},
				displayName: {
					type: 'string',
					description: 'The name displayed in the address book for the user.',
				},
				employeeHireDate: {
					type: 'string',
					description:
						'The date and time the user was hired or will start work. Returned only with the select parameter.',
				},
				employeeId: {
					type: 'string',
					description:
						'The employee identifier assigned to the user by the organization. Returned only with the select parameter.',
				},
				employeeLeaveDateTime: {
					type: 'string',
					description:
						'The date and time the user left or will leave the organization. Returned only with the select parameter and requires the `User-LifeCycleInfo.Read.All` permission.',
				},
				employeeOrgData: {
					type: 'object',
					description:
						'The organization data associated with the user. Returned only with the select parameter.',
					properties: {
						costCenter: {
							type: 'string',
							description: 'The cost center associated with the user.',
						},
						division: {
							type: 'string',
							description: 'The division in which the user works.',
						},
					},
					required: [],
				},
				employeeType: {
					type: 'string',
					description:
						'The enterprise worker type, for example `Employee`, `Contractor`, `Consultant` or `Vendor`. Returned only with the select parameter.',
				},
				externalUserState: {
					type: 'string',
					description:
						'The invitation status of an invited guest: `PendingAcceptance` or `Accepted`. Returned only with the select parameter.',
				},
				externalUserStateChangeDateTime: {
					type: 'string',
					description:
						'The date and time of the latest change to the external user state. Returned only with the select parameter.',
				},
				faxNumber: {
					type: 'string',
					description:
						'The fax number of the user. Returned only with the select parameter.',
				},
				givenName: {
					type: 'string',
					description: 'The given name (first name) of the user.',
				},
				identities: {
					type: 'array',
					description:
						'The identities that can be used to sign in to the user account. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A sign-in identity.',
						properties: {
							signInType: {
								type: 'string',
								description:
									'The sign-in type, for example `emailAddress`, `userName`, `federated` or `userPrincipalName`.',
							},
							issuer: {
								type: 'string',
								description:
									'The issuer of the identity, for example `facebook.com`.',
							},
							issuerAssignedId: {
								type: 'string',
								description:
									'The unique identifier assigned to the user by the issuer.',
							},
						},
						required: [],
					},
				},
				imAddresses: {
					type: 'array',
					description:
						'The instant message VoIP SIP addresses of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'A SIP address of the user.' },
				},
				interests: {
					type: 'array',
					description:
						'The interests of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'An interest of the user.' },
				},
				isManagementRestricted: {
					type: 'boolean',
					description:
						'Whether the user is a member of a restricted management administrative unit.',
				},
				jobTitle: { type: 'string', description: 'The job title of the user.' },
				lastPasswordChangeDateTime: {
					type: 'string',
					description:
						'The date and time the user last changed their password. Returned only with the select parameter.',
				},
				legalAgeGroupClassification: {
					type: 'string',
					description:
						'The legal age group of the user, calculated from the age group and consent for minors. Returned only with the select parameter.',
				},
				licenseAssignmentStates: {
					type: 'array',
					description:
						'The state of the license assignments for the user. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'The state of a license assignment.',
						properties: {
							assignedByGroup: {
								type: 'string',
								description:
									'The ID of the group that the license is inherited from. Null if the license is assigned directly.',
							},
							disabledPlans: {
								type: 'array',
								description: 'The service plans disabled in this assignment.',
								items: {
									type: 'string',
									description: 'The ID of a disabled service plan.',
								},
							},
							error: {
								type: 'string',
								description:
									'The license assignment error, for example `CountViolation` or `DependencyViolation`. Null if the license was assigned successfully.',
							},
							lastUpdatedDateTime: {
								type: 'string',
								description:
									'The date and time the assignment state was last updated.',
							},
							skuId: {
								type: 'string',
								description: 'The unique identifier of the license SKU.',
							},
							state: {
								type: 'string',
								description:
									'The state of the assignment. One of `Active`, `ActiveWithError`, `Disabled`, `Error`.',
							},
						},
						required: [],
					},
				},
				mail: { type: 'string', description: 'The SMTP address of the user.' },
				mailboxSettings: {
					type: 'object',
					description:
						'The settings of the primary mailbox of the user. Returned only with the select parameter.',
					properties: {
						archiveFolder: {
							type: 'string',
							description: 'The ID of the archive folder.',
						},
						automaticRepliesSetting: {
							type: 'object',
							description:
								'The configuration of automatic replies to incoming email.',
							properties: {
								externalAudience: {
									type: 'string',
									description:
										'The audience outside the organization that receives the external reply. One of `none`, `contactsOnly`, `all`.',
								},
								externalReplyMessage: {
									type: 'string',
									description:
										'The automatic reply sent to the external audience.',
								},
								internalReplyMessage: {
									type: 'string',
									description:
										'The automatic reply sent to the internal audience.',
								},
								scheduledEndDateTime: {
									type: 'object',
									description:
										'When automatic replies end, if the status is `scheduled`.',
									properties: {
										dateTime: {
											type: 'string',
											description:
												'A date and time without an offset, for example `2026-10-19T08:00:00.0000000`.',
										},
										timeZone: {
											type: 'string',
											description: 'The time zone of the date and time.',
										},
									},
									required: [],
								},
								scheduledStartDateTime: {
									type: 'object',
									description:
										'When automatic replies begin, if the status is `scheduled`.',
									properties: {
										dateTime: {
											type: 'string',
											description:
												'A date and time without an offset, for example `2026-10-19T08:00:00.0000000`.',
										},
										timeZone: {
											type: 'string',
											description: 'The time zone of the date and time.',
										},
									},
									required: [],
								},
								status: {
									type: 'string',
									description:
										'The status of automatic replies. One of `disabled`, `alwaysEnabled`, `scheduled`.',
								},
							},
							required: [],
						},
						dateFormat: {
							type: 'string',
							description: 'The date format of the mailbox.',
						},
						delegateMeetingMessageDeliveryOptions: {
							type: 'string',
							description:
								'Who receives meeting messages when a calendar delegate exists. One of `sendToDelegateAndInformationToPrincipal`, `sendToDelegateAndPrincipal`, `sendToDelegateOnly`.',
						},
						language: {
							type: 'object',
							description: 'The preferred language and region of the mailbox.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The name of the locale, for example `English (United States)`.',
								},
								locale: {
									type: 'string',
									description: 'The locale code, for example `en-us`.',
								},
							},
							required: [],
						},
						timeFormat: {
							type: 'string',
							description: 'The time format of the mailbox.',
						},
						timeZone: {
							type: 'string',
							description: 'The default time zone of the mailbox.',
						},
						userPurpose: {
							type: 'string',
							description:
								'The purpose of the mailbox. One of `user`, `linked`, `shared`, `room`, `equipment`, `others`.',
						},
						workingHours: {
							type: 'object',
							description: 'The days and hours the user works.',
							properties: {
								daysOfWeek: {
									type: 'array',
									description: 'The days of the week the user works.',
									items: {
										type: 'string',
										description: 'A day of the week, for example `monday`.',
									},
								},
								startTime: {
									type: 'string',
									description: 'The time of day the user starts working.',
								},
								endTime: {
									type: 'string',
									description: 'The time of day the user stops working.',
								},
								timeZone: {
									type: 'object',
									description: 'The time zone the working hours apply to.',
									properties: {
										name: {
											type: 'string',
											description:
												'The name of the time zone, for example `Pacific Standard Time`.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				mailNickname: {
					type: 'string',
					description:
						'The mail alias of the user. Returned only with the select parameter.',
				},
				mobilePhone: {
					type: 'string',
					description: 'The primary cellular telephone number of the user.',
				},
				mySite: {
					type: 'string',
					description:
						"The URL of the user's personal site. Returned only with the select parameter.",
				},
				officeLocation: {
					type: 'string',
					description: "The office location in the user's place of business.",
				},
				onPremisesDistinguishedName: {
					type: 'string',
					description:
						'The on-premises Active Directory distinguished name (DN). Returned only with the select parameter.',
				},
				onPremisesDomainName: {
					type: 'string',
					description:
						'The on-premises domain FQDN synchronized from the on-premises directory. Returned only with the select parameter.',
				},
				onPremisesExtensionAttributes: {
					type: 'object',
					description:
						'The extension attributes 1-15 of the user. Returned only with the select parameter.',
					properties: {
						extensionAttribute1: {
							type: 'string',
							description: 'Custom extension attribute 1.',
						},
						extensionAttribute2: {
							type: 'string',
							description: 'Custom extension attribute 2.',
						},
						extensionAttribute3: {
							type: 'string',
							description: 'Custom extension attribute 3.',
						},
						extensionAttribute4: {
							type: 'string',
							description: 'Custom extension attribute 4.',
						},
						extensionAttribute5: {
							type: 'string',
							description: 'Custom extension attribute 5.',
						},
						extensionAttribute6: {
							type: 'string',
							description: 'Custom extension attribute 6.',
						},
						extensionAttribute7: {
							type: 'string',
							description: 'Custom extension attribute 7.',
						},
						extensionAttribute8: {
							type: 'string',
							description: 'Custom extension attribute 8.',
						},
						extensionAttribute9: {
							type: 'string',
							description: 'Custom extension attribute 9.',
						},
						extensionAttribute10: {
							type: 'string',
							description: 'Custom extension attribute 10.',
						},
						extensionAttribute11: {
							type: 'string',
							description: 'Custom extension attribute 11.',
						},
						extensionAttribute12: {
							type: 'string',
							description: 'Custom extension attribute 12.',
						},
						extensionAttribute13: {
							type: 'string',
							description: 'Custom extension attribute 13.',
						},
						extensionAttribute14: {
							type: 'string',
							description: 'Custom extension attribute 14.',
						},
						extensionAttribute15: {
							type: 'string',
							description: 'Custom extension attribute 15.',
						},
					},
					required: [],
				},
				onPremisesImmutableId: {
					type: 'string',
					description:
						'The ID that links an on-premises Active Directory account to the user. Returned only with the select parameter.',
				},
				onPremisesLastSyncDateTime: {
					type: 'string',
					description:
						'The last time the user was synced with the on-premises directory. Returned only with the select parameter.',
				},
				onPremisesProvisioningErrors: {
					type: 'array',
					description:
						'The errors that occurred while provisioning with the Microsoft synchronization product. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A provisioning error.',
						properties: {
							category: {
								type: 'string',
								description:
									'The category of the provisioning error, for example `PropertyConflict`.',
							},
							occurredDateTime: {
								type: 'string',
								description: 'The date and time the error occurred.',
							},
							propertyCausingError: {
								type: 'string',
								description:
									'The directory property that caused the error. One of `UserPrincipalName`, `ProxyAddress`.',
							},
							value: {
								type: 'string',
								description: 'The value of the property that caused the error.',
							},
						},
						required: [],
					},
				},
				onPremisesSamAccountName: {
					type: 'string',
					description:
						'The on-premises SAM account name. Returned only with the select parameter.',
				},
				onPremisesSecurityIdentifier: {
					type: 'string',
					description:
						'The on-premises security identifier (SID) of the user. Returned only with the select parameter.',
				},
				onPremisesSyncEnabled: {
					type: 'boolean',
					description:
						'Whether the user is currently synced from an on-premises Active Directory. Returned only with the select parameter.',
				},
				onPremisesUserPrincipalName: {
					type: 'string',
					description:
						'The on-premises user principal name. Returned only with the select parameter.',
				},
				otherMails: {
					type: 'array',
					description:
						'The other email addresses of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'An email address of the user.' },
				},
				passwordPolicies: {
					type: 'string',
					description:
						'The password policies of the user, for example `DisableStrongPassword` or `DisablePasswordExpiration`. Returned only with the select parameter.',
				},
				pastProjects: {
					type: 'array',
					description:
						'The past projects of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'A past project.' },
				},
				postalCode: {
					type: 'string',
					description:
						'The postal code of the user. Returned only with the select parameter.',
				},
				preferredDataLocation: {
					type: 'string',
					description:
						'The preferred data location of the user. Returned only with the select parameter.',
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language of the user, for example `en-US`.',
				},
				provisionedPlans: {
					type: 'array',
					description:
						'The plans provisioned for the user. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A plan provisioned for the user.',
						properties: {
							capabilityStatus: {
								type: 'string',
								description:
									'The condition of the capability assignment. One of `Enabled`, `Warning`, `Suspended`, `Deleted`, `LockedOut`.',
							},
							provisioningStatus: {
								type: 'string',
								description:
									'The provisioning state of the service. One of `Success`, `Disabled`, `Error`, `PendingInput`, `PendingActivation`, `PendingProvisioning`.',
							},
							service: { type: 'string', description: 'The name of the service.' },
						},
						required: [],
					},
				},
				proxyAddresses: {
					type: 'array',
					description:
						'The email addresses of the user, for example `SMTP: bob@contoso.com`. Returned only with the select parameter.',
					items: { type: 'string', description: 'A proxy address of the user.' },
				},
				refreshTokensValidFromDateTime: {
					type: 'string',
					description:
						'Refresh and session tokens issued before this time are invalid. Returned only with the select parameter.',
				},
				responsibilities: {
					type: 'array',
					description:
						'The responsibilities of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'A responsibility of the user.' },
				},
				schools: {
					type: 'array',
					description:
						'The schools the user attended. Returned only with the select parameter.',
					items: { type: 'string', description: 'A school the user attended.' },
				},
				securityIdentifier: {
					type: 'string',
					description:
						'The security identifier (SID) of the user, used in Windows scenarios. Returned only with the select parameter.',
				},
				serviceProvisioningErrors: {
					type: 'array',
					description:
						'The errors published by a federated service about the user. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A service provisioning error.',
						properties: {
							createdDateTime: {
								type: 'string',
								description: 'The date and time the error occurred.',
							},
							isResolved: {
								type: 'boolean',
								description: 'Whether the error was attended to.',
							},
							serviceInstance: {
								type: 'string',
								description:
									'The qualified service instance that published the error.',
							},
						},
						required: [],
					},
				},
				signInActivity: {
					type: 'object',
					description:
						'The last sign-in activity of the user. Returned only with the select parameter.',
					properties: {
						lastSignInDateTime: {
							type: 'string',
							description: 'The last interactive sign-in attempt, successful or not.',
						},
						lastSignInRequestId: {
							type: 'string',
							description: 'The request ID of the last interactive sign-in.',
						},
						lastNonInteractiveSignInDateTime: {
							type: 'string',
							description:
								'The last non-interactive sign-in attempt, successful or not.',
						},
						lastNonInteractiveSignInRequestId: {
							type: 'string',
							description: 'The request ID of the last non-interactive sign-in.',
						},
						lastSuccessfulSignInDateTime: {
							type: 'string',
							description:
								'The most recent successful interactive or non-interactive sign-in.',
						},
						lastSuccessfulSignInRequestId: {
							type: 'string',
							description: 'The request ID of the last successful sign-in.',
						},
					},
					required: [],
				},
				signInSessionsValidFromDateTime: {
					type: 'string',
					description:
						'Refresh and session tokens issued before this time are invalid. Returned only with the select parameter.',
				},
				skills: {
					type: 'array',
					description: 'The skills of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'A skill of the user.' },
				},
				state: {
					type: 'string',
					description:
						"The state or province in the user's address. Returned only with the select parameter.",
				},
				streetAddress: {
					type: 'string',
					description:
						"The street address of the user's place of business. Returned only with the select parameter.",
				},
				surname: { type: 'string', description: 'The surname (family name) of the user.' },
				usageLocation: {
					type: 'string',
					description:
						'The two-letter country code (ISO 3166) of the user. Returned only with the select parameter.',
				},
				userPrincipalName: {
					type: 'string',
					description: 'The user principal name (UPN) of the user.',
				},
				userType: {
					type: 'string',
					description:
						'The user type, `Member` or `Guest`. Returned only with the select parameter.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'getGroup',
		label: 'Get a group',
		description: 'Retrieves the properties of a group.',
		context:
			"---\nname: getGroup\ndescription: Retrieves the properties of a group.\n---\n\nReturns the properties of one group. By default only a subset of properties is returned. Use `select` to get the others, for example `accessType`, `allowExternalSenders` or `isSubscribedByMail`.\n\n`hasMembersWithLicenseErrors` and `isArchived` can't be requested with `select`. Recently created, updated or deleted groups can show replication delays.\n\nRefer to the [Microsoft Graph API reference: Get group](https://learn.microsoft.com/en-us/graph/api/group-get) for full details.",
		accounts: { azure: { scope: ['Group.Read.All'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupId: { type: 'string', description: 'The ID of the group to retrieve.' },
				select: {
					type: 'string',
					description:
						'A comma-separated list of properties to return. Use it to get properties that are not returned by default, for example `id,displayName,accessType,allowExternalSenders`.',
				},
			},
			required: ['groupId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the group.' },
				accessType: {
					type: 'string',
					description:
						'The type of access to the group. One of `none`, `private`, `secret`, `public`. Returned only with the select parameter.',
				},
				allowExternalSenders: {
					type: 'boolean',
					description:
						'Whether people outside the organization can send messages to the group. Returned only with the select parameter.',
				},
				assignedLabels: {
					type: 'array',
					description:
						'The sensitivity labels assigned to the group. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A sensitivity label.',
						properties: {
							labelId: {
								type: 'string',
								description: 'The unique identifier of the label.',
							},
							displayName: {
								type: 'string',
								description: 'The display name of the label.',
							},
						},
						required: [],
					},
				},
				assignedLicenses: {
					type: 'array',
					description:
						'The licenses assigned to the group. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A license assigned to the group.',
						properties: {
							skuId: {
								type: 'string',
								description: 'The unique identifier of the license SKU.',
							},
							disabledPlans: {
								type: 'array',
								description:
									'The IDs of the service plans disabled for this license.',
								items: {
									type: 'string',
									description: 'The ID of a disabled service plan.',
								},
							},
						},
						required: [],
					},
				},
				autoSubscribeNewMembers: {
					type: 'boolean',
					description:
						'Whether new members are automatically subscribed to email notifications. Returned only with the select parameter.',
				},
				classification: {
					type: 'string',
					description:
						'The classification of the group, for example low, medium or high business impact.',
				},
				createdDateTime: {
					type: 'string',
					description: 'The date and time the group was created.',
				},
				deletedDateTime: {
					type: 'string',
					description:
						'The date and time the group was deleted. Null if the group is not deleted.',
				},
				description: { type: 'string', description: 'The description of the group.' },
				displayName: { type: 'string', description: 'The display name of the group.' },
				expirationDateTime: {
					type: 'string',
					description:
						'The date and time the group is set to expire. Null for security groups.',
				},
				groupTypes: {
					type: 'array',
					description:
						'The group type and membership. If it contains `Unified`, the group is a Microsoft 365 group. If it contains `DynamicMembership`, the membership is dynamic.',
					items: { type: 'string', description: 'A group type.' },
				},
				hasMembersWithLicenseErrors: {
					type: 'boolean',
					description:
						'Whether any group members have license errors from the group-based license assignment. Never returned on a GET request.',
				},
				hideFromAddressLists: {
					type: 'boolean',
					description:
						'Whether the group is hidden from the Outlook address book and address lists. Returned only with the select parameter.',
				},
				hideFromOutlookClients: {
					type: 'boolean',
					description:
						'Whether the group is hidden from Outlook clients. Returned only with the select parameter.',
				},
				isArchived: {
					type: 'boolean',
					description: 'Whether the team associated with the group is in read-only mode.',
				},
				isAssignableToRole: {
					type: 'boolean',
					description: 'Whether the group can be assigned to a Microsoft Entra role.',
				},
				isFavorite: {
					type: 'boolean',
					description:
						'Whether the signed-in user marked the group as a favorite. Returned only with the select parameter.',
				},
				isManagementRestricted: {
					type: 'boolean',
					description:
						'Whether the group is a member of a restricted management administrative unit. Returned only with the select parameter.',
				},
				isSubscribedByMail: {
					type: 'boolean',
					description:
						'Whether the signed-in user is subscribed to email conversations. Returned only with the select parameter.',
				},
				licenseProcessingState: {
					type: 'string',
					description:
						'The status of the group license assignment to all members. One of `QueuedForProcessing`, `ProcessingInProgress`, `ProcessingComplete`. Returned only with the select parameter.',
				},
				mail: { type: 'string', description: 'The SMTP address of the group.' },
				mailEnabled: { type: 'boolean', description: 'Whether the group is mail-enabled.' },
				mailNickname: { type: 'string', description: 'The mail alias of the group.' },
				membershipRule: {
					type: 'string',
					description: 'The rule that determines the members of a dynamic group.',
				},
				membershipRuleProcessingState: {
					type: 'string',
					description: 'Whether dynamic membership processing is `On` or `Paused`.',
				},
				onPremisesDomainName: {
					type: 'string',
					description:
						'The on-premises domain FQDN synchronized from the on-premises directory.',
				},
				onPremisesExtensionAttributes: {
					type: 'object',
					description:
						'The extension attributes 1-15 synchronized from the on-premises directory. Returned only with the select parameter.',
					properties: {
						extensionAttribute1: {
							type: 'string',
							description: 'Custom extension attribute 1.',
						},
						extensionAttribute2: {
							type: 'string',
							description: 'Custom extension attribute 2.',
						},
						extensionAttribute3: {
							type: 'string',
							description: 'Custom extension attribute 3.',
						},
						extensionAttribute4: {
							type: 'string',
							description: 'Custom extension attribute 4.',
						},
						extensionAttribute5: {
							type: 'string',
							description: 'Custom extension attribute 5.',
						},
						extensionAttribute6: {
							type: 'string',
							description: 'Custom extension attribute 6.',
						},
						extensionAttribute7: {
							type: 'string',
							description: 'Custom extension attribute 7.',
						},
						extensionAttribute8: {
							type: 'string',
							description: 'Custom extension attribute 8.',
						},
						extensionAttribute9: {
							type: 'string',
							description: 'Custom extension attribute 9.',
						},
						extensionAttribute10: {
							type: 'string',
							description: 'Custom extension attribute 10.',
						},
						extensionAttribute11: {
							type: 'string',
							description: 'Custom extension attribute 11.',
						},
						extensionAttribute12: {
							type: 'string',
							description: 'Custom extension attribute 12.',
						},
						extensionAttribute13: {
							type: 'string',
							description: 'Custom extension attribute 13.',
						},
						extensionAttribute14: {
							type: 'string',
							description: 'Custom extension attribute 14.',
						},
						extensionAttribute15: {
							type: 'string',
							description: 'Custom extension attribute 15.',
						},
					},
					required: [],
				},
				onPremisesLastSyncDateTime: {
					type: 'string',
					description:
						'The last time the group was synced with the on-premises directory.',
				},
				onPremisesNetBiosName: {
					type: 'string',
					description:
						'The on-premises NetBIOS name synchronized from the on-premises directory.',
				},
				onPremisesProvisioningErrors: {
					type: 'array',
					description:
						'The errors that occurred while provisioning with the Microsoft synchronization product.',
					items: {
						type: 'object',
						description: 'A provisioning error.',
						properties: {
							category: {
								type: 'string',
								description:
									'The category of the provisioning error, for example `PropertyConflict`.',
							},
							occurredDateTime: {
								type: 'string',
								description: 'The date and time the error occurred.',
							},
							propertyCausingError: {
								type: 'string',
								description:
									'The directory property that caused the error. One of `UserPrincipalName`, `ProxyAddress`.',
							},
							value: {
								type: 'string',
								description: 'The value of the property that caused the error.',
							},
						},
						required: [],
					},
				},
				onPremisesSamAccountName: {
					type: 'string',
					description:
						'The on-premises SAM account name synchronized from the on-premises directory.',
				},
				onPremisesSecurityIdentifier: {
					type: 'string',
					description: 'The on-premises security identifier (SID) of the group.',
				},
				onPremisesSyncEnabled: {
					type: 'boolean',
					description:
						'True if the group is synced from an on-premises directory, false if it was synced before but is not anymore, null if it never was.',
				},
				preferredDataLocation: {
					type: 'string',
					description: 'The preferred data location of the Microsoft 365 group.',
				},
				preferredLanguage: {
					type: 'string',
					description:
						'The preferred language of the Microsoft 365 group, for example `en-US`.',
				},
				proxyAddresses: {
					type: 'array',
					description: 'The email addresses that direct to the same group mailbox.',
					items: { type: 'string', description: 'An email address of the group.' },
				},
				renewedDateTime: {
					type: 'string',
					description: 'The date and time the group was last renewed.',
				},
				resourceBehaviorOptions: {
					type: 'array',
					description: 'The behaviors set for the Microsoft 365 group at creation.',
					items: { type: 'string', description: 'A group behavior option.' },
				},
				resourceProvisioningOptions: {
					type: 'array',
					description:
						'The resources associated with the Microsoft 365 group. The possible value is `Team`.',
					items: { type: 'string', description: 'A resource provisioning option.' },
				},
				securityEnabled: {
					type: 'boolean',
					description: 'Whether the group is a security group.',
				},
				securityIdentifier: {
					type: 'string',
					description:
						'The security identifier (SID) of the group, used in Windows scenarios.',
				},
				serviceProvisioningErrors: {
					type: 'array',
					description: 'The errors published by a federated service about the group.',
					items: {
						type: 'object',
						description: 'A service provisioning error.',
						properties: {
							createdDateTime: {
								type: 'string',
								description: 'The date and time the error occurred.',
							},
							isResolved: {
								type: 'boolean',
								description: 'Whether the error was attended to.',
							},
							serviceInstance: {
								type: 'string',
								description:
									'The qualified service instance that published the error, for example `SharePoint/Dublin`.',
							},
						},
						required: [],
					},
				},
				theme: {
					type: 'string',
					description:
						'The color theme of the Microsoft 365 group, for example `Teal`, `Purple` or `Red`.',
				},
				uniqueName: {
					type: 'string',
					description:
						'The unique identifier that can be used as an alternate key of the group.',
				},
				unseenConversationsCount: {
					type: 'number',
					description:
						"The number of conversations with new posts since the signed-in user's last visit. Returned only with the select parameter.",
				},
				unseenCount: {
					type: 'number',
					description:
						"The number of conversations that received new posts since the signed-in user's last visit. Returned only with the select parameter.",
				},
				unseenMessagesCount: {
					type: 'number',
					description:
						"The number of new posts delivered to the group's conversations since the signed-in user's last visit. Returned only with the select parameter.",
				},
				visibility: {
					type: 'string',
					description:
						'The join policy and content visibility of the group. One of `Private`, `Public`, `HiddenMembership`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'getUser',
		label: 'Get a user',
		description: 'Retrieves the properties of a user.',
		context:
			'---\nname: getUser\ndescription: Retrieves the properties of a user.\n---\n\nReturns one user by ID or user principal name. By default only these properties are returned: `businessPhones`, `displayName`, `givenName`, `id`, `jobTitle`, `mail`, `mobilePhone`, `officeLocation`, `preferredLanguage`, `surname`, `userPrincipalName`. Use `select` to get any other property.\n\nSome properties need extra permissions: `employeeLeaveDateTime` needs `User-LifeCycleInfo.Read.All`, `customSecurityAttributes` needs `CustomSecAttributeAssignment.Read.All`.\n\nReturns `404` if the user does not exist. To get the signed-in user, use `getCurrentUser`.\n\nRefer to the [Microsoft Graph API reference: Get user](https://learn.microsoft.com/en-us/graph/api/user-get) for full details.',
		accounts: { azure: { scope: ['User.Read.All'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				userId: {
					type: 'string',
					description: 'The ID or the user principal name (UPN) of the user to retrieve.',
				},
				select: {
					type: 'string',
					description:
						'A comma-separated list of properties to return. Sent as `$select`. Use it to get properties that are not returned by default, for example `displayName,givenName,postalCode`.',
				},
			},
			required: ['userId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				id: { type: 'string', description: 'The unique identifier of the user.' },
				aboutMe: {
					type: 'string',
					description:
						'A freeform text entry field for the user to describe themselves. Returned only with the select parameter.',
				},
				accountEnabled: {
					type: 'boolean',
					description:
						'Whether the account is enabled. Returned only with the select parameter.',
				},
				ageGroup: {
					type: 'string',
					description:
						'The age group of the user. One of `Minor`, `NotAdult`, `Adult`. Returned only with the select parameter.',
				},
				assignedLicenses: {
					type: 'array',
					description:
						'The licenses assigned to the user, including inherited group-based licenses. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A license assigned to the user.',
						properties: {
							skuId: {
								type: 'string',
								description: 'The unique identifier of the license SKU.',
							},
							disabledPlans: {
								type: 'array',
								description:
									'The IDs of the service plans disabled for this license.',
								items: {
									type: 'string',
									description: 'The ID of a disabled service plan.',
								},
							},
						},
						required: [],
					},
				},
				assignedPlans: {
					type: 'array',
					description:
						'The plans assigned to the user. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A plan assigned to the user.',
						properties: {
							assignedDateTime: {
								type: 'string',
								description: 'The date and time the plan was assigned.',
							},
							capabilityStatus: {
								type: 'string',
								description:
									'The condition of the capability assignment. One of `Enabled`, `Warning`, `Suspended`, `Deleted`, `LockedOut`.',
							},
							service: {
								type: 'string',
								description: 'The name of the service, for example `exchange`.',
							},
							servicePlanId: {
								type: 'string',
								description: 'The GUID of the service plan.',
							},
						},
						required: [],
					},
				},
				birthday: {
					type: 'string',
					description:
						'The birthday of the user. Returned only with the select parameter.',
				},
				businessPhones: {
					type: 'array',
					description: 'The telephone numbers of the user. Only one number can be set.',
					items: { type: 'string', description: 'A business phone number.' },
				},
				city: {
					type: 'string',
					description:
						'The city where the user is located. Returned only with the select parameter.',
				},
				companyName: {
					type: 'string',
					description:
						'The name of the company the user is associated with. Returned only with the select parameter.',
				},
				consentProvidedForMinor: {
					type: 'string',
					description:
						'Whether consent was obtained for minors. One of `Granted`, `Denied`, `NotRequired`. Returned only with the select parameter.',
				},
				country: {
					type: 'string',
					description:
						'The country or region where the user is located. Returned only with the select parameter.',
				},
				createdDateTime: {
					type: 'string',
					description:
						'The date and time the user was created. Returned only with the select parameter.',
				},
				creationType: {
					type: 'string',
					description:
						'How the account was created: a regular account (null), `Invitation`, `LocalAccount` or `EmailVerified`. Returned only with the select parameter.',
				},
				customSecurityAttributes: {
					description:
						'The custom security attribute values assigned to the user. Returned only with the select parameter and requires the `CustomSecAttributeAssignment.Read.All` permission.',
				},
				deletedDateTime: {
					type: 'string',
					description:
						'The date and time the user was deleted. Returned only with the select parameter.',
				},
				department: {
					type: 'string',
					description:
						'The name of the department in which the user works. Returned only with the select parameter.',
				},
				displayName: {
					type: 'string',
					description: 'The name displayed in the address book for the user.',
				},
				employeeHireDate: {
					type: 'string',
					description:
						'The date and time the user was hired or will start work. Returned only with the select parameter.',
				},
				employeeId: {
					type: 'string',
					description:
						'The employee identifier assigned to the user by the organization. Returned only with the select parameter.',
				},
				employeeLeaveDateTime: {
					type: 'string',
					description:
						'The date and time the user left or will leave the organization. Returned only with the select parameter and requires the `User-LifeCycleInfo.Read.All` permission.',
				},
				employeeOrgData: {
					type: 'object',
					description:
						'The organization data associated with the user. Returned only with the select parameter.',
					properties: {
						costCenter: {
							type: 'string',
							description: 'The cost center associated with the user.',
						},
						division: {
							type: 'string',
							description: 'The division in which the user works.',
						},
					},
					required: [],
				},
				employeeType: {
					type: 'string',
					description:
						'The enterprise worker type, for example `Employee`, `Contractor`, `Consultant` or `Vendor`. Returned only with the select parameter.',
				},
				externalUserState: {
					type: 'string',
					description:
						'The invitation status of an invited guest: `PendingAcceptance` or `Accepted`. Returned only with the select parameter.',
				},
				externalUserStateChangeDateTime: {
					type: 'string',
					description:
						'The date and time of the latest change to the external user state. Returned only with the select parameter.',
				},
				faxNumber: {
					type: 'string',
					description:
						'The fax number of the user. Returned only with the select parameter.',
				},
				givenName: {
					type: 'string',
					description: 'The given name (first name) of the user.',
				},
				identities: {
					type: 'array',
					description:
						'The identities that can be used to sign in to the user account. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A sign-in identity.',
						properties: {
							signInType: {
								type: 'string',
								description:
									'The sign-in type, for example `emailAddress`, `userName`, `federated` or `userPrincipalName`.',
							},
							issuer: {
								type: 'string',
								description:
									'The issuer of the identity, for example `facebook.com`.',
							},
							issuerAssignedId: {
								type: 'string',
								description:
									'The unique identifier assigned to the user by the issuer.',
							},
						},
						required: [],
					},
				},
				imAddresses: {
					type: 'array',
					description:
						'The instant message VoIP SIP addresses of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'A SIP address of the user.' },
				},
				interests: {
					type: 'array',
					description:
						'The interests of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'An interest of the user.' },
				},
				isManagementRestricted: {
					type: 'boolean',
					description:
						'Whether the user is a member of a restricted management administrative unit.',
				},
				jobTitle: { type: 'string', description: 'The job title of the user.' },
				lastPasswordChangeDateTime: {
					type: 'string',
					description:
						'The date and time the user last changed their password. Returned only with the select parameter.',
				},
				legalAgeGroupClassification: {
					type: 'string',
					description:
						'The legal age group of the user, calculated from the age group and consent for minors. Returned only with the select parameter.',
				},
				licenseAssignmentStates: {
					type: 'array',
					description:
						'The state of the license assignments for the user. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'The state of a license assignment.',
						properties: {
							assignedByGroup: {
								type: 'string',
								description:
									'The ID of the group that the license is inherited from. Null if the license is assigned directly.',
							},
							disabledPlans: {
								type: 'array',
								description: 'The service plans disabled in this assignment.',
								items: {
									type: 'string',
									description: 'The ID of a disabled service plan.',
								},
							},
							error: {
								type: 'string',
								description:
									'The license assignment error, for example `CountViolation` or `DependencyViolation`. Null if the license was assigned successfully.',
							},
							lastUpdatedDateTime: {
								type: 'string',
								description:
									'The date and time the assignment state was last updated.',
							},
							skuId: {
								type: 'string',
								description: 'The unique identifier of the license SKU.',
							},
							state: {
								type: 'string',
								description:
									'The state of the assignment. One of `Active`, `ActiveWithError`, `Disabled`, `Error`.',
							},
						},
						required: [],
					},
				},
				mail: { type: 'string', description: 'The SMTP address of the user.' },
				mailboxSettings: {
					type: 'object',
					description:
						'The settings of the primary mailbox of the user. Returned only with the select parameter.',
					properties: {
						archiveFolder: {
							type: 'string',
							description: 'The ID of the archive folder.',
						},
						automaticRepliesSetting: {
							type: 'object',
							description:
								'The configuration of automatic replies to incoming email.',
							properties: {
								externalAudience: {
									type: 'string',
									description:
										'The audience outside the organization that receives the external reply. One of `none`, `contactsOnly`, `all`.',
								},
								externalReplyMessage: {
									type: 'string',
									description:
										'The automatic reply sent to the external audience.',
								},
								internalReplyMessage: {
									type: 'string',
									description:
										'The automatic reply sent to the internal audience.',
								},
								scheduledEndDateTime: {
									type: 'object',
									description:
										'When automatic replies end, if the status is `scheduled`.',
									properties: {
										dateTime: {
											type: 'string',
											description:
												'A date and time without an offset, for example `2026-10-19T08:00:00.0000000`.',
										},
										timeZone: {
											type: 'string',
											description: 'The time zone of the date and time.',
										},
									},
									required: [],
								},
								scheduledStartDateTime: {
									type: 'object',
									description:
										'When automatic replies begin, if the status is `scheduled`.',
									properties: {
										dateTime: {
											type: 'string',
											description:
												'A date and time without an offset, for example `2026-10-19T08:00:00.0000000`.',
										},
										timeZone: {
											type: 'string',
											description: 'The time zone of the date and time.',
										},
									},
									required: [],
								},
								status: {
									type: 'string',
									description:
										'The status of automatic replies. One of `disabled`, `alwaysEnabled`, `scheduled`.',
								},
							},
							required: [],
						},
						dateFormat: {
							type: 'string',
							description: 'The date format of the mailbox.',
						},
						delegateMeetingMessageDeliveryOptions: {
							type: 'string',
							description:
								'Who receives meeting messages when a calendar delegate exists. One of `sendToDelegateAndInformationToPrincipal`, `sendToDelegateAndPrincipal`, `sendToDelegateOnly`.',
						},
						language: {
							type: 'object',
							description: 'The preferred language and region of the mailbox.',
							properties: {
								displayName: {
									type: 'string',
									description:
										'The name of the locale, for example `English (United States)`.',
								},
								locale: {
									type: 'string',
									description: 'The locale code, for example `en-us`.',
								},
							},
							required: [],
						},
						timeFormat: {
							type: 'string',
							description: 'The time format of the mailbox.',
						},
						timeZone: {
							type: 'string',
							description: 'The default time zone of the mailbox.',
						},
						userPurpose: {
							type: 'string',
							description:
								'The purpose of the mailbox. One of `user`, `linked`, `shared`, `room`, `equipment`, `others`.',
						},
						workingHours: {
							type: 'object',
							description: 'The days and hours the user works.',
							properties: {
								daysOfWeek: {
									type: 'array',
									description: 'The days of the week the user works.',
									items: {
										type: 'string',
										description: 'A day of the week, for example `monday`.',
									},
								},
								startTime: {
									type: 'string',
									description: 'The time of day the user starts working.',
								},
								endTime: {
									type: 'string',
									description: 'The time of day the user stops working.',
								},
								timeZone: {
									type: 'object',
									description: 'The time zone the working hours apply to.',
									properties: {
										name: {
											type: 'string',
											description:
												'The name of the time zone, for example `Pacific Standard Time`.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				mailNickname: {
					type: 'string',
					description:
						'The mail alias of the user. Returned only with the select parameter.',
				},
				mobilePhone: {
					type: 'string',
					description: 'The primary cellular telephone number of the user.',
				},
				mySite: {
					type: 'string',
					description:
						"The URL of the user's personal site. Returned only with the select parameter.",
				},
				officeLocation: {
					type: 'string',
					description: "The office location in the user's place of business.",
				},
				onPremisesDistinguishedName: {
					type: 'string',
					description:
						'The on-premises Active Directory distinguished name (DN). Returned only with the select parameter.',
				},
				onPremisesDomainName: {
					type: 'string',
					description:
						'The on-premises domain FQDN synchronized from the on-premises directory. Returned only with the select parameter.',
				},
				onPremisesExtensionAttributes: {
					type: 'object',
					description:
						'The extension attributes 1-15 of the user. Returned only with the select parameter.',
					properties: {
						extensionAttribute1: {
							type: 'string',
							description: 'Custom extension attribute 1.',
						},
						extensionAttribute2: {
							type: 'string',
							description: 'Custom extension attribute 2.',
						},
						extensionAttribute3: {
							type: 'string',
							description: 'Custom extension attribute 3.',
						},
						extensionAttribute4: {
							type: 'string',
							description: 'Custom extension attribute 4.',
						},
						extensionAttribute5: {
							type: 'string',
							description: 'Custom extension attribute 5.',
						},
						extensionAttribute6: {
							type: 'string',
							description: 'Custom extension attribute 6.',
						},
						extensionAttribute7: {
							type: 'string',
							description: 'Custom extension attribute 7.',
						},
						extensionAttribute8: {
							type: 'string',
							description: 'Custom extension attribute 8.',
						},
						extensionAttribute9: {
							type: 'string',
							description: 'Custom extension attribute 9.',
						},
						extensionAttribute10: {
							type: 'string',
							description: 'Custom extension attribute 10.',
						},
						extensionAttribute11: {
							type: 'string',
							description: 'Custom extension attribute 11.',
						},
						extensionAttribute12: {
							type: 'string',
							description: 'Custom extension attribute 12.',
						},
						extensionAttribute13: {
							type: 'string',
							description: 'Custom extension attribute 13.',
						},
						extensionAttribute14: {
							type: 'string',
							description: 'Custom extension attribute 14.',
						},
						extensionAttribute15: {
							type: 'string',
							description: 'Custom extension attribute 15.',
						},
					},
					required: [],
				},
				onPremisesImmutableId: {
					type: 'string',
					description:
						'The ID that links an on-premises Active Directory account to the user. Returned only with the select parameter.',
				},
				onPremisesLastSyncDateTime: {
					type: 'string',
					description:
						'The last time the user was synced with the on-premises directory. Returned only with the select parameter.',
				},
				onPremisesProvisioningErrors: {
					type: 'array',
					description:
						'The errors that occurred while provisioning with the Microsoft synchronization product. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A provisioning error.',
						properties: {
							category: {
								type: 'string',
								description:
									'The category of the provisioning error, for example `PropertyConflict`.',
							},
							occurredDateTime: {
								type: 'string',
								description: 'The date and time the error occurred.',
							},
							propertyCausingError: {
								type: 'string',
								description:
									'The directory property that caused the error. One of `UserPrincipalName`, `ProxyAddress`.',
							},
							value: {
								type: 'string',
								description: 'The value of the property that caused the error.',
							},
						},
						required: [],
					},
				},
				onPremisesSamAccountName: {
					type: 'string',
					description:
						'The on-premises SAM account name. Returned only with the select parameter.',
				},
				onPremisesSecurityIdentifier: {
					type: 'string',
					description:
						'The on-premises security identifier (SID) of the user. Returned only with the select parameter.',
				},
				onPremisesSyncEnabled: {
					type: 'boolean',
					description:
						'Whether the user is currently synced from an on-premises Active Directory. Returned only with the select parameter.',
				},
				onPremisesUserPrincipalName: {
					type: 'string',
					description:
						'The on-premises user principal name. Returned only with the select parameter.',
				},
				otherMails: {
					type: 'array',
					description:
						'The other email addresses of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'An email address of the user.' },
				},
				passwordPolicies: {
					type: 'string',
					description:
						'The password policies of the user, for example `DisableStrongPassword` or `DisablePasswordExpiration`. Returned only with the select parameter.',
				},
				pastProjects: {
					type: 'array',
					description:
						'The past projects of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'A past project.' },
				},
				postalCode: {
					type: 'string',
					description:
						'The postal code of the user. Returned only with the select parameter.',
				},
				preferredDataLocation: {
					type: 'string',
					description:
						'The preferred data location of the user. Returned only with the select parameter.',
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language of the user, for example `en-US`.',
				},
				provisionedPlans: {
					type: 'array',
					description:
						'The plans provisioned for the user. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A plan provisioned for the user.',
						properties: {
							capabilityStatus: {
								type: 'string',
								description:
									'The condition of the capability assignment. One of `Enabled`, `Warning`, `Suspended`, `Deleted`, `LockedOut`.',
							},
							provisioningStatus: {
								type: 'string',
								description:
									'The provisioning state of the service. One of `Success`, `Disabled`, `Error`, `PendingInput`, `PendingActivation`, `PendingProvisioning`.',
							},
							service: { type: 'string', description: 'The name of the service.' },
						},
						required: [],
					},
				},
				proxyAddresses: {
					type: 'array',
					description:
						'The email addresses of the user, for example `SMTP: bob@contoso.com`. Returned only with the select parameter.',
					items: { type: 'string', description: 'A proxy address of the user.' },
				},
				refreshTokensValidFromDateTime: {
					type: 'string',
					description:
						'Refresh and session tokens issued before this time are invalid. Returned only with the select parameter.',
				},
				responsibilities: {
					type: 'array',
					description:
						'The responsibilities of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'A responsibility of the user.' },
				},
				schools: {
					type: 'array',
					description:
						'The schools the user attended. Returned only with the select parameter.',
					items: { type: 'string', description: 'A school the user attended.' },
				},
				securityIdentifier: {
					type: 'string',
					description:
						'The security identifier (SID) of the user, used in Windows scenarios. Returned only with the select parameter.',
				},
				serviceProvisioningErrors: {
					type: 'array',
					description:
						'The errors published by a federated service about the user. Returned only with the select parameter.',
					items: {
						type: 'object',
						description: 'A service provisioning error.',
						properties: {
							createdDateTime: {
								type: 'string',
								description: 'The date and time the error occurred.',
							},
							isResolved: {
								type: 'boolean',
								description: 'Whether the error was attended to.',
							},
							serviceInstance: {
								type: 'string',
								description:
									'The qualified service instance that published the error.',
							},
						},
						required: [],
					},
				},
				signInActivity: {
					type: 'object',
					description:
						'The last sign-in activity of the user. Returned only with the select parameter.',
					properties: {
						lastSignInDateTime: {
							type: 'string',
							description: 'The last interactive sign-in attempt, successful or not.',
						},
						lastSignInRequestId: {
							type: 'string',
							description: 'The request ID of the last interactive sign-in.',
						},
						lastNonInteractiveSignInDateTime: {
							type: 'string',
							description:
								'The last non-interactive sign-in attempt, successful or not.',
						},
						lastNonInteractiveSignInRequestId: {
							type: 'string',
							description: 'The request ID of the last non-interactive sign-in.',
						},
						lastSuccessfulSignInDateTime: {
							type: 'string',
							description:
								'The most recent successful interactive or non-interactive sign-in.',
						},
						lastSuccessfulSignInRequestId: {
							type: 'string',
							description: 'The request ID of the last successful sign-in.',
						},
					},
					required: [],
				},
				signInSessionsValidFromDateTime: {
					type: 'string',
					description:
						'Refresh and session tokens issued before this time are invalid. Returned only with the select parameter.',
				},
				skills: {
					type: 'array',
					description: 'The skills of the user. Returned only with the select parameter.',
					items: { type: 'string', description: 'A skill of the user.' },
				},
				state: {
					type: 'string',
					description:
						"The state or province in the user's address. Returned only with the select parameter.",
				},
				streetAddress: {
					type: 'string',
					description:
						"The street address of the user's place of business. Returned only with the select parameter.",
				},
				surname: { type: 'string', description: 'The surname (family name) of the user.' },
				usageLocation: {
					type: 'string',
					description:
						'The two-letter country code (ISO 3166) of the user. Returned only with the select parameter.',
				},
				userPrincipalName: {
					type: 'string',
					description: 'The user principal name (UPN) of the user.',
				},
				userType: {
					type: 'string',
					description:
						'The user type, `Member` or `Guest`. Returned only with the select parameter.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'getUserGroups',
		label: "Get a user's group memberships",
		description:
			'Returns the IDs of all groups a user is a member of, including nested memberships.',
		context:
			'---\nname: getUserGroups\ndescription: Returns the IDs of all groups a user is a member of, including nested memberships.\n---\n\nCalls `POST /users/{id}/getMemberGroups`. Despite using POST, it only reads data. It returns group IDs only and is transitive, so it includes groups the user belongs to through nested groups. To get the details of a group, call `getGroup` with an ID from the result.\n\nSet `securityEnabledOnly` to `true` to return only security groups, or `false` to return all groups and directory roles. The call returns up to 11,000 IDs. Above that it fails with `400 Directory_ResultSizeLimitExceeded`.\n\nRefer to the [Microsoft Graph API reference: getMemberGroups](https://learn.microsoft.com/en-us/graph/api/directoryobject-getmembergroups) for full details.',
		accounts: { azure: { scope: ['User.ReadBasic.All', 'GroupMember.Read.All'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				userId: {
					type: 'string',
					description: 'The ID or the user principal name (UPN) of the user.',
				},
				securityEnabledOnly: {
					type: 'boolean',
					description:
						'Set to `true` to return only the security groups the user is a member of. Set to `false` to return all groups and directory roles.',
				},
			},
			required: ['userId', 'securityEnabledOnly'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL of the response.',
				},
				value: {
					type: 'array',
					description:
						'The IDs of the groups the user is a member of. The function is transitive and returns up to 11,000 IDs.',
					items: { type: 'string', description: 'The ID of a group.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'listGroups',
		label: 'List groups',
		description: 'Lists the groups in the organization.',
		context:
			"---\nname: listGroups\ndescription: Lists the groups in the organization.\n---\n\nReturns one page of groups, including Microsoft 365, security and distribution groups. By default only a subset of properties is returned. Use `select` for others.\n\nThe `ConsistencyLevel: eventual` header is always sent, so advanced queries work. Advanced queries such as `search` or some `filter` expressions also need `count` set to `true`.\n\n**Pagination:** `top` sets the page size (default 100, maximum 999). If the response contains `@odata.nextLink`, pass its value as `nextLink` in the next call and leave the other inputs empty. Repeat until `@odata.nextLink` is absent.\n\nExamples: Microsoft 365 groups only, filter `groupTypes/any(c:c eq 'Unified')`. Security groups, filter `mailEnabled eq false and securityEnabled eq true`.\n\nRefer to the [Microsoft Graph API reference: List groups](https://learn.microsoft.com/en-us/graph/api/group-list) for full details.",
		accounts: { azure: { scope: ['Group.Read.All'] } },
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
						"An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression. Sent as `$filter`. For example, `startsWith(displayName,'J')` or `groupTypes/any(c:c eq 'Unified')`.",
				},
				search: {
					type: 'string',
					description:
						'An [OData `$search`](https://learn.microsoft.com/en-us/graph/search-query-parameter) expression. Sent as `$search`. Supported on `displayName` and `description`. For example, `"displayName:Video"`.',
				},
				select: {
					type: 'string',
					description:
						'A comma-separated list of properties to return. Sent as `$select`. For example, `id,displayName`.',
				},
				expand: {
					type: 'string',
					description:
						'The relationship to expand in the results. Sent as `$expand`. For example, `members`.',
				},
				orderby: {
					type: 'string',
					description:
						'The sort order of the results. Sent as `$orderby`. For example, `displayName desc`.',
				},
				count: {
					type: 'boolean',
					description:
						'Set to `true` to include the total number of matching items in `@odata.count`. Sent as `$count`.',
				},
				top: {
					type: 'number',
					description:
						'The number of results per page. Sent as `$top`. The default is 100 and the maximum is 999.',
					minimum: 1,
					maximum: 999,
				},
				nextLink: {
					type: 'string',
					description:
						'The `@odata.nextLink` URL from a previous response. Use it to get the next page and leave the other inputs empty, because the link already contains them.',
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
				'@odata.count': {
					type: 'number',
					description:
						'The total number of matching groups. Returned only when the count input is `true`.',
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'The URL of the next page of results. Absent on the last page.',
				},
				value: {
					type: 'array',
					description: 'The list of groups.',
					items: {
						type: 'object',
						description: 'A group.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier of the group.',
							},
							assignedLabels: {
								type: 'array',
								description:
									'The sensitivity labels assigned to the group. Returned only with the select parameter.',
								items: {
									type: 'object',
									description: 'A sensitivity label.',
									properties: {
										labelId: {
											type: 'string',
											description: 'The unique identifier of the label.',
										},
										displayName: {
											type: 'string',
											description: 'The display name of the label.',
										},
									},
									required: [],
								},
							},
							assignedLicenses: {
								type: 'array',
								description:
									'The licenses assigned to the group. Returned only with the select parameter.',
								items: {
									type: 'object',
									description: 'A license assigned to the group.',
									properties: {
										skuId: {
											type: 'string',
											description:
												'The unique identifier of the license SKU.',
										},
										disabledPlans: {
											type: 'array',
											description:
												'The IDs of the service plans disabled for this license.',
											items: {
												type: 'string',
												description: 'The ID of a disabled service plan.',
											},
										},
									},
									required: [],
								},
							},
							classification: {
								type: 'string',
								description: 'The classification of the group.',
							},
							createdDateTime: {
								type: 'string',
								description: 'The date and time the group was created.',
							},
							deletedDateTime: {
								type: 'string',
								description:
									'The date and time the group was deleted. Null if the group is not deleted.',
							},
							description: {
								type: 'string',
								description: 'The description of the group.',
							},
							displayName: {
								type: 'string',
								description: 'The display name of the group.',
							},
							expirationDateTime: {
								type: 'string',
								description:
									'The date and time the group is set to expire. Null for security groups.',
							},
							groupTypes: {
								type: 'array',
								description:
									'The group type and membership. If it contains `Unified`, the group is a Microsoft 365 group.',
								items: { type: 'string', description: 'A group type.' },
							},
							isAssignableToRole: {
								type: 'boolean',
								description:
									'Whether the group can be assigned to a Microsoft Entra role.',
							},
							isManagementRestricted: {
								type: 'boolean',
								description:
									'Whether the group is a member of a restricted management administrative unit. Returned only with the select parameter.',
							},
							licenseProcessingState: {
								type: 'string',
								description:
									'The status of the group license assignment to all members. One of `QueuedForProcessing`, `ProcessingInProgress`, `ProcessingComplete`. Returned only with the select parameter.',
							},
							mail: { type: 'string', description: 'The SMTP address of the group.' },
							mailEnabled: {
								type: 'boolean',
								description: 'Whether the group is mail-enabled.',
							},
							mailNickname: {
								type: 'string',
								description: 'The mail alias of the group.',
							},
							membershipRule: {
								type: 'string',
								description:
									'The rule that determines the members of a dynamic group.',
							},
							membershipRuleProcessingState: {
								type: 'string',
								description:
									'Whether dynamic membership processing is `On` or `Paused`.',
							},
							onPremisesDomainName: {
								type: 'string',
								description:
									'The on-premises domain FQDN synchronized from the on-premises directory.',
							},
							onPremisesExtensionAttributes: {
								type: 'object',
								description:
									'The extension attributes 1-15 synchronized from the on-premises directory. Returned only with the select parameter.',
								properties: {
									extensionAttribute1: {
										type: 'string',
										description: 'Custom extension attribute 1.',
									},
									extensionAttribute2: {
										type: 'string',
										description: 'Custom extension attribute 2.',
									},
									extensionAttribute3: {
										type: 'string',
										description: 'Custom extension attribute 3.',
									},
									extensionAttribute4: {
										type: 'string',
										description: 'Custom extension attribute 4.',
									},
									extensionAttribute5: {
										type: 'string',
										description: 'Custom extension attribute 5.',
									},
									extensionAttribute6: {
										type: 'string',
										description: 'Custom extension attribute 6.',
									},
									extensionAttribute7: {
										type: 'string',
										description: 'Custom extension attribute 7.',
									},
									extensionAttribute8: {
										type: 'string',
										description: 'Custom extension attribute 8.',
									},
									extensionAttribute9: {
										type: 'string',
										description: 'Custom extension attribute 9.',
									},
									extensionAttribute10: {
										type: 'string',
										description: 'Custom extension attribute 10.',
									},
									extensionAttribute11: {
										type: 'string',
										description: 'Custom extension attribute 11.',
									},
									extensionAttribute12: {
										type: 'string',
										description: 'Custom extension attribute 12.',
									},
									extensionAttribute13: {
										type: 'string',
										description: 'Custom extension attribute 13.',
									},
									extensionAttribute14: {
										type: 'string',
										description: 'Custom extension attribute 14.',
									},
									extensionAttribute15: {
										type: 'string',
										description: 'Custom extension attribute 15.',
									},
								},
								required: [],
							},
							onPremisesLastSyncDateTime: {
								type: 'string',
								description:
									'The last time the group was synced with the on-premises directory.',
							},
							onPremisesNetBiosName: {
								type: 'string',
								description:
									'The on-premises NetBIOS name synchronized from the on-premises directory.',
							},
							onPremisesProvisioningErrors: {
								type: 'array',
								description:
									'The errors that occurred while provisioning with the Microsoft synchronization product.',
								items: {
									type: 'object',
									description: 'A provisioning error.',
									properties: {
										category: {
											type: 'string',
											description:
												'The category of the provisioning error, for example `PropertyConflict`.',
										},
										occurredDateTime: {
											type: 'string',
											description: 'The date and time the error occurred.',
										},
										propertyCausingError: {
											type: 'string',
											description:
												'The directory property that caused the error. One of `UserPrincipalName`, `ProxyAddress`.',
										},
										value: {
											type: 'string',
											description:
												'The value of the property that caused the error.',
										},
									},
									required: [],
								},
							},
							onPremisesSamAccountName: {
								type: 'string',
								description:
									'The on-premises SAM account name synchronized from the on-premises directory.',
							},
							onPremisesSecurityIdentifier: {
								type: 'string',
								description:
									'The on-premises security identifier (SID) of the group.',
							},
							onPremisesSyncEnabled: {
								type: 'boolean',
								description:
									'True if the group is synced from an on-premises directory, false if it was synced before but is not anymore, null if it never was.',
							},
							preferredDataLocation: {
								type: 'string',
								description:
									'The preferred data location of the Microsoft 365 group.',
							},
							preferredLanguage: {
								type: 'string',
								description:
									'The preferred language of the Microsoft 365 group, for example `en-US`.',
							},
							proxyAddresses: {
								type: 'array',
								description:
									'The email addresses that direct to the same group mailbox.',
								items: {
									type: 'string',
									description: 'An email address of the group.',
								},
							},
							renewedDateTime: {
								type: 'string',
								description: 'The date and time the group was last renewed.',
							},
							resourceBehaviorOptions: {
								type: 'array',
								description:
									'The behaviors set for the Microsoft 365 group at creation.',
								items: { type: 'string', description: 'A group behavior option.' },
							},
							resourceProvisioningOptions: {
								type: 'array',
								description:
									'The resources associated with the Microsoft 365 group. The possible value is `Team`.',
								items: {
									type: 'string',
									description: 'A resource provisioning option.',
								},
							},
							securityEnabled: {
								type: 'boolean',
								description: 'Whether the group is a security group.',
							},
							securityIdentifier: {
								type: 'string',
								description:
									'The security identifier (SID) of the group, used in Windows scenarios.',
							},
							serviceProvisioningErrors: {
								type: 'array',
								description:
									'The errors published by a federated service about the group.',
								items: {
									type: 'object',
									description: 'A service provisioning error.',
									properties: {
										createdDateTime: {
											type: 'string',
											description: 'The date and time the error occurred.',
										},
										isResolved: {
											type: 'boolean',
											description: 'Whether the error was attended to.',
										},
										serviceInstance: {
											type: 'string',
											description:
												'The qualified service instance that published the error.',
										},
									},
									required: [],
								},
							},
							theme: {
								type: 'string',
								description: 'The color theme of the Microsoft 365 group.',
							},
							uniqueName: {
								type: 'string',
								description:
									'The unique identifier that can be used as an alternate key of the group. Returned only with the select parameter.',
							},
							visibility: {
								type: 'string',
								description:
									'The join policy and content visibility of the group. One of `Private`, `Public`, `HiddenMembership`.',
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
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'listUsers',
		label: 'List users',
		description: 'Lists the users in the organization.',
		context:
			"---\nname: listUsers\ndescription: Lists the users in the organization.\n---\n\nReturns one page of users. By default only these properties are returned: `businessPhones`, `displayName`, `givenName`, `id`, `jobTitle`, `mail`, `mobilePhone`, `officeLocation`, `preferredLanguage`, `surname`, `userPrincipalName`. Use `select` for others. `aboutMe`, `birthday`, `interests`, `mySite`, `pastProjects`, `responsibilities`, `schools`, `skills` and `mailboxSettings` can't be selected in a list. Use `getUser` for them.\n\nThe `ConsistencyLevel: eventual` header is always sent, so advanced queries work. Advanced queries such as `search` or some `filter` expressions also need `count` set to `true`.\n\n**Pagination:** `top` sets the page size (default 100, maximum 999, or 500 with `signInActivity`). If the response contains `@odata.nextLink`, pass its value as `nextLink` in the next call and leave the other inputs empty. Repeat until `@odata.nextLink` is absent.\n\nGuests can't call this API. Refer to the [Microsoft Graph API reference: List users](https://learn.microsoft.com/en-us/graph/api/user-list) for full details.",
		accounts: { azure: { scope: ['User.Read.All'] } },
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
						"An [OData `$filter`](https://learn.microsoft.com/en-us/graph/filter-query-parameter) expression. Sent as `$filter`. For example, `startsWith(displayName,'J')`.",
				},
				search: {
					type: 'string',
					description:
						'An [OData `$search`](https://learn.microsoft.com/en-us/graph/search-query-parameter) expression. Sent as `$search`. For example, `"displayName:Adele"`.',
				},
				select: {
					type: 'string',
					description:
						"A comma-separated list of properties to return. Sent as `$select`. For example, `id,displayName,postalCode`. Properties such as `aboutMe`, `birthday`, `interests`, `mySite`, `pastProjects`, `responsibilities`, `schools`, `skills` and `mailboxSettings` can't be selected in a user list.",
				},
				expand: {
					type: 'string',
					description:
						'The relationship to expand in the results. Sent as `$expand`. For example, `manager`.',
				},
				orderby: {
					type: 'string',
					description:
						'The sort order of the results. Sent as `$orderby`. For example, `displayName desc`.',
				},
				count: {
					type: 'boolean',
					description:
						'Set to `true` to include the total number of matching items in `@odata.count`. Sent as `$count`.',
				},
				top: {
					type: 'number',
					description:
						'The number of results per page. Sent as `$top`. The default is 100 and the maximum is 999 (500 when selecting or filtering on `signInActivity`).',
					minimum: 1,
					maximum: 999,
				},
				nextLink: {
					type: 'string',
					description:
						'The `@odata.nextLink` URL from a previous response. Use it to get the next page and leave the other inputs empty, because the link already contains them.',
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
				'@odata.count': {
					type: 'number',
					description:
						'The total number of matching users. Returned only when the count input is `true`.',
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'The URL of the next page of results. Absent on the last page.',
				},
				value: {
					type: 'array',
					description: 'The list of users.',
					items: {
						type: 'object',
						description: 'A user.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier of the user.',
							},
							accountEnabled: {
								type: 'boolean',
								description:
									'Whether the account is enabled. Returned only with the select parameter.',
							},
							ageGroup: {
								type: 'string',
								description:
									'The age group of the user. One of `Minor`, `NotAdult`, `Adult`. Returned only with the select parameter.',
							},
							assignedLicenses: {
								type: 'array',
								description:
									'The licenses assigned to the user. Returned only with the select parameter.',
								items: {
									type: 'object',
									description: 'A license assigned to the user.',
									properties: {
										skuId: {
											type: 'string',
											description:
												'The unique identifier of the license SKU.',
										},
										disabledPlans: {
											type: 'array',
											description:
												'The IDs of the service plans disabled for this license.',
											items: {
												type: 'string',
												description: 'The ID of a disabled service plan.',
											},
										},
									},
									required: [],
								},
							},
							assignedPlans: {
								type: 'array',
								description:
									'The plans assigned to the user. Returned only with the select parameter.',
								items: {
									type: 'object',
									description: 'A plan assigned to the user.',
									properties: {
										assignedDateTime: {
											type: 'string',
											description: 'The date and time the plan was assigned.',
										},
										capabilityStatus: {
											type: 'string',
											description:
												'The condition of the capability assignment. One of `Enabled`, `Warning`, `Suspended`, `Deleted`, `LockedOut`.',
										},
										service: {
											type: 'string',
											description: 'The name of the service.',
										},
										servicePlanId: {
											type: 'string',
											description: 'The GUID of the service plan.',
										},
									},
									required: [],
								},
							},
							businessPhones: {
								type: 'array',
								description: 'The telephone numbers of the user.',
								items: { type: 'string', description: 'A business phone number.' },
							},
							city: {
								type: 'string',
								description:
									'The city where the user is located. Returned only with the select parameter.',
							},
							companyName: {
								type: 'string',
								description:
									'The name of the company the user is associated with. Returned only with the select parameter.',
							},
							consentProvidedForMinor: {
								type: 'string',
								description:
									'Whether consent was obtained for minors. One of `Granted`, `Denied`, `NotRequired`. Returned only with the select parameter.',
							},
							country: {
								type: 'string',
								description:
									'The country or region where the user is located. Returned only with the select parameter.',
							},
							createdDateTime: {
								type: 'string',
								description:
									'The date and time the user was created. Returned only with the select parameter.',
							},
							creationType: {
								type: 'string',
								description:
									'How the account was created: a regular account (null), `Invitation`, `LocalAccount` or `EmailVerified`. Returned only with the select parameter.',
							},
							customSecurityAttributes: {
								description:
									'The custom security attribute values assigned to the user. Returned only with the select parameter and requires the `CustomSecAttributeAssignment.Read.All` permission.',
							},
							deletedDateTime: {
								type: 'string',
								description:
									'The date and time the user was deleted. Returned only with the select parameter.',
							},
							department: {
								type: 'string',
								description:
									'The name of the department in which the user works. Returned only with the select parameter.',
							},
							displayName: {
								type: 'string',
								description: 'The name displayed in the address book for the user.',
							},
							employeeHireDate: {
								type: 'string',
								description:
									'The date and time the user was hired or will start work. Returned only with the select parameter.',
							},
							employeeId: {
								type: 'string',
								description:
									'The employee identifier assigned to the user by the organization. Returned only with the select parameter.',
							},
							employeeLeaveDateTime: {
								type: 'string',
								description:
									'The date and time the user left or will leave the organization. Returned only with the select parameter and requires the `User-LifeCycleInfo.Read.All` permission.',
							},
							employeeOrgData: {
								type: 'object',
								description:
									'The organization data associated with the user. Returned only with the select parameter.',
								properties: {
									costCenter: {
										type: 'string',
										description: 'The cost center associated with the user.',
									},
									division: {
										type: 'string',
										description: 'The division in which the user works.',
									},
								},
								required: [],
							},
							employeeType: {
								type: 'string',
								description:
									'The enterprise worker type, for example `Employee`, `Contractor`, `Consultant` or `Vendor`. Returned only with the select parameter.',
							},
							externalUserState: {
								type: 'string',
								description:
									'The invitation status of an invited guest: `PendingAcceptance` or `Accepted`. Returned only with the select parameter.',
							},
							externalUserStateChangeDateTime: {
								type: 'string',
								description:
									'The date and time of the latest change to the external user state. Returned only with the select parameter.',
							},
							faxNumber: {
								type: 'string',
								description:
									'The fax number of the user. Returned only with the select parameter.',
							},
							givenName: {
								type: 'string',
								description: 'The given name (first name) of the user.',
							},
							identities: {
								type: 'array',
								description:
									'The identities that can be used to sign in to the user account. Returned only with the select parameter.',
								items: {
									type: 'object',
									description: 'A sign-in identity.',
									properties: {
										signInType: {
											type: 'string',
											description:
												'The sign-in type, for example `emailAddress`, `userName`, `federated` or `userPrincipalName`.',
										},
										issuer: {
											type: 'string',
											description:
												'The issuer of the identity, for example `facebook.com`.',
										},
										issuerAssignedId: {
											type: 'string',
											description:
												'The unique identifier assigned to the user by the issuer.',
										},
									},
									required: [],
								},
							},
							imAddresses: {
								type: 'array',
								description:
									'The instant message VoIP SIP addresses of the user. Returned only with the select parameter.',
								items: {
									type: 'string',
									description: 'A SIP address of the user.',
								},
							},
							isManagementRestricted: {
								type: 'boolean',
								description:
									'Whether the user is a member of a restricted management administrative unit.',
							},
							jobTitle: { type: 'string', description: 'The job title of the user.' },
							lastPasswordChangeDateTime: {
								type: 'string',
								description:
									'The date and time the user last changed their password. Returned only with the select parameter.',
							},
							legalAgeGroupClassification: {
								type: 'string',
								description:
									'The legal age group of the user, calculated from the age group and consent for minors. Returned only with the select parameter.',
							},
							licenseAssignmentStates: {
								type: 'array',
								description:
									'The state of the license assignments for the user. Returned only with the select parameter.',
								items: {
									type: 'object',
									description: 'The state of a license assignment.',
									properties: {
										assignedByGroup: {
											type: 'string',
											description:
												'The ID of the group that the license is inherited from. Null if the license is assigned directly.',
										},
										disabledPlans: {
											type: 'array',
											description:
												'The service plans disabled in this assignment.',
											items: {
												type: 'string',
												description: 'The ID of a disabled service plan.',
											},
										},
										error: {
											type: 'string',
											description:
												'The license assignment error. Null if the license was assigned successfully.',
										},
										lastUpdatedDateTime: {
											type: 'string',
											description:
												'The date and time the assignment state was last updated.',
										},
										skuId: {
											type: 'string',
											description:
												'The unique identifier of the license SKU.',
										},
										state: {
											type: 'string',
											description:
												'The state of the assignment. One of `Active`, `ActiveWithError`, `Disabled`, `Error`.',
										},
									},
									required: [],
								},
							},
							mail: { type: 'string', description: 'The SMTP address of the user.' },
							mailNickname: {
								type: 'string',
								description:
									'The mail alias of the user. Returned only with the select parameter.',
							},
							mobilePhone: {
								type: 'string',
								description: 'The primary cellular telephone number of the user.',
							},
							officeLocation: {
								type: 'string',
								description: "The office location in the user's place of business.",
							},
							onPremisesDistinguishedName: {
								type: 'string',
								description:
									'The on-premises Active Directory distinguished name (DN). Returned only with the select parameter.',
							},
							onPremisesDomainName: {
								type: 'string',
								description:
									'The on-premises domain FQDN. Returned only with the select parameter.',
							},
							onPremisesExtensionAttributes: {
								type: 'object',
								description:
									'The extension attributes 1-15 of the user. Returned only with the select parameter.',
								properties: {
									extensionAttribute1: {
										type: 'string',
										description: 'Custom extension attribute 1.',
									},
									extensionAttribute2: {
										type: 'string',
										description: 'Custom extension attribute 2.',
									},
									extensionAttribute3: {
										type: 'string',
										description: 'Custom extension attribute 3.',
									},
									extensionAttribute4: {
										type: 'string',
										description: 'Custom extension attribute 4.',
									},
									extensionAttribute5: {
										type: 'string',
										description: 'Custom extension attribute 5.',
									},
									extensionAttribute6: {
										type: 'string',
										description: 'Custom extension attribute 6.',
									},
									extensionAttribute7: {
										type: 'string',
										description: 'Custom extension attribute 7.',
									},
									extensionAttribute8: {
										type: 'string',
										description: 'Custom extension attribute 8.',
									},
									extensionAttribute9: {
										type: 'string',
										description: 'Custom extension attribute 9.',
									},
									extensionAttribute10: {
										type: 'string',
										description: 'Custom extension attribute 10.',
									},
									extensionAttribute11: {
										type: 'string',
										description: 'Custom extension attribute 11.',
									},
									extensionAttribute12: {
										type: 'string',
										description: 'Custom extension attribute 12.',
									},
									extensionAttribute13: {
										type: 'string',
										description: 'Custom extension attribute 13.',
									},
									extensionAttribute14: {
										type: 'string',
										description: 'Custom extension attribute 14.',
									},
									extensionAttribute15: {
										type: 'string',
										description: 'Custom extension attribute 15.',
									},
								},
								required: [],
							},
							onPremisesImmutableId: {
								type: 'string',
								description:
									'The ID that links an on-premises Active Directory account to the user. Returned only with the select parameter.',
							},
							onPremisesLastSyncDateTime: {
								type: 'string',
								description:
									'The last time the user was synced with the on-premises directory. Returned only with the select parameter.',
							},
							onPremisesProvisioningErrors: {
								type: 'array',
								description:
									'The errors that occurred while provisioning with the Microsoft synchronization product. Returned only with the select parameter.',
								items: {
									type: 'object',
									description: 'A provisioning error.',
									properties: {
										category: {
											type: 'string',
											description:
												'The category of the provisioning error, for example `PropertyConflict`.',
										},
										occurredDateTime: {
											type: 'string',
											description: 'The date and time the error occurred.',
										},
										propertyCausingError: {
											type: 'string',
											description:
												'The directory property that caused the error. One of `UserPrincipalName`, `ProxyAddress`.',
										},
										value: {
											type: 'string',
											description:
												'The value of the property that caused the error.',
										},
									},
									required: [],
								},
							},
							onPremisesSamAccountName: {
								type: 'string',
								description:
									'The on-premises SAM account name. Returned only with the select parameter.',
							},
							onPremisesSecurityIdentifier: {
								type: 'string',
								description:
									'The on-premises security identifier (SID) of the user. Returned only with the select parameter.',
							},
							onPremisesSyncEnabled: {
								type: 'boolean',
								description:
									'Whether the user is currently synced from an on-premises Active Directory. Returned only with the select parameter.',
							},
							onPremisesUserPrincipalName: {
								type: 'string',
								description:
									'The on-premises user principal name. Returned only with the select parameter.',
							},
							otherMails: {
								type: 'array',
								description:
									'The other email addresses of the user. Returned only with the select parameter.',
								items: {
									type: 'string',
									description: 'An email address of the user.',
								},
							},
							passwordPolicies: {
								type: 'string',
								description:
									'The password policies of the user. Returned only with the select parameter.',
							},
							postalCode: {
								type: 'string',
								description:
									'The postal code of the user. Returned only with the select parameter.',
							},
							preferredDataLocation: {
								type: 'string',
								description:
									'The preferred data location of the user. Returned only with the select parameter.',
							},
							preferredLanguage: {
								type: 'string',
								description:
									'The preferred language of the user, for example `en-US`.',
							},
							provisionedPlans: {
								type: 'array',
								description:
									'The plans provisioned for the user. Returned only with the select parameter.',
								items: {
									type: 'object',
									description: 'A plan provisioned for the user.',
									properties: {
										capabilityStatus: {
											type: 'string',
											description:
												'The condition of the capability assignment. One of `Enabled`, `Warning`, `Suspended`, `Deleted`, `LockedOut`.',
										},
										provisioningStatus: {
											type: 'string',
											description:
												'The provisioning state of the service. One of `Success`, `Disabled`, `Error`, `PendingInput`, `PendingActivation`, `PendingProvisioning`.',
										},
										service: {
											type: 'string',
											description: 'The name of the service.',
										},
									},
									required: [],
								},
							},
							proxyAddresses: {
								type: 'array',
								description:
									'The email addresses of the user. Returned only with the select parameter.',
								items: {
									type: 'string',
									description: 'A proxy address of the user.',
								},
							},
							refreshTokensValidFromDateTime: {
								type: 'string',
								description:
									'Refresh and session tokens issued before this time are invalid. Returned only with the select parameter.',
							},
							securityIdentifier: {
								type: 'string',
								description:
									'The security identifier (SID) of the user. Returned only with the select parameter.',
							},
							serviceProvisioningErrors: {
								type: 'array',
								description:
									'The errors published by a federated service about the user. Returned only with the select parameter.',
								items: {
									type: 'object',
									description: 'A service provisioning error.',
									properties: {
										createdDateTime: {
											type: 'string',
											description: 'The date and time the error occurred.',
										},
										isResolved: {
											type: 'boolean',
											description: 'Whether the error was attended to.',
										},
										serviceInstance: {
											type: 'string',
											description:
												'The qualified service instance that published the error.',
										},
									},
									required: [],
								},
							},
							signInActivity: {
								type: 'object',
								description:
									'The last sign-in activity of the user. Returned only with the select parameter.',
								properties: {
									lastSignInDateTime: {
										type: 'string',
										description:
											'The last interactive sign-in attempt, successful or not.',
									},
									lastSignInRequestId: {
										type: 'string',
										description:
											'The request ID of the last interactive sign-in.',
									},
									lastNonInteractiveSignInDateTime: {
										type: 'string',
										description:
											'The last non-interactive sign-in attempt, successful or not.',
									},
									lastNonInteractiveSignInRequestId: {
										type: 'string',
										description:
											'The request ID of the last non-interactive sign-in.',
									},
									lastSuccessfulSignInDateTime: {
										type: 'string',
										description:
											'The most recent successful interactive or non-interactive sign-in.',
									},
									lastSuccessfulSignInRequestId: {
										type: 'string',
										description:
											'The request ID of the last successful sign-in.',
									},
								},
								required: [],
							},
							signInSessionsValidFromDateTime: {
								type: 'string',
								description:
									'Refresh and session tokens issued before this time are invalid. Returned only with the select parameter.',
							},
							state: {
								type: 'string',
								description:
									"The state or province in the user's address. Returned only with the select parameter.",
							},
							streetAddress: {
								type: 'string',
								description:
									"The street address of the user's place of business. Returned only with the select parameter.",
							},
							surname: {
								type: 'string',
								description: 'The surname (family name) of the user.',
							},
							usageLocation: {
								type: 'string',
								description:
									'The two-letter country code (ISO 3166) of the user. Returned only with the select parameter.',
							},
							userPrincipalName: {
								type: 'string',
								description: 'The user principal name (UPN) of the user.',
							},
							userType: {
								type: 'string',
								description:
									'The user type, `Member` or `Guest`. Returned only with the select parameter.',
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
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'removeGroupMember',
		label: 'Remove a member from a group',
		description: 'Removes a member from a security or Microsoft 365 group.',
		context:
			"---\nname: removeGroupMember\ndescription: Removes a member from a security or Microsoft 365 group.\n---\n\nRemoves one member from a group through the `members` navigation property (`DELETE /groups/{id}/members/{id}/$ref`). The call removes the membership only, it does not delete the user or other directory object.\n\nYou can't remove a member from a group with dynamic membership. Returns HTTP 204 No Content on success, so the output is empty. Removing a member that is not in the group returns an error.\n\nTo add members, use `addGroupMembers`. Refer to the [Microsoft Graph API reference: Remove member](https://learn.microsoft.com/en-us/graph/api/group-delete-members) for full details.",
		accounts: { azure: { scope: ['GroupMember.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				groupId: {
					type: 'string',
					description: 'The ID of the group to remove the member from.',
				},
				memberId: {
					type: 'string',
					description:
						'The ID of the directory object (user, group, device, service principal or organizational contact) to remove from the group.',
				},
			},
			required: ['groupId', 'memberId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'active-directory',
		appVersion: 1,
		endpointName: 'updateUser',
		label: 'Update a user',
		description: 'Updates the properties of a user.',
		context:
			"---\nname: updateUser\ndescription: Updates the properties of a user.\n---\n\nUpdates the properties of a user (`PATCH /users/{id}`). Send only the properties to change. Omitted properties keep their current values. Call `getUser` first to read the current values.\n\nValues are sent to Microsoft Graph exactly as you provide them. Empty values are not removed: to clear a property, send `null` (for a list property, send an empty array `[]`). To leave a property unchanged, leave it out. `passwordPolicies` can't be cleared with this Endpoint. Use `arbitraryCall` for that.\n\nSome properties need extra permissions or roles: `accountEnabled` needs `User.EnableDisableAccount.All` and, for administrators, a privileged role. `businessPhones` and `mobilePhone` need `User-Phone.ReadWrite.All`. `otherMails` needs `User-Mail.ReadWrite.All`. `passwordProfile` needs `User-PasswordProfile.ReadWrite.All`. Properties synced from an on-premises directory are read-only. This Endpoint does not set `identities`, `customSecurityAttributes` or `employeeLeaveDateTime`. Use `arbitraryCall` for them.\n\nReturns HTTP 204 No Content on success, so the output is empty. Refer to the [Microsoft Graph API reference: Update user](https://learn.microsoft.com/en-us/graph/api/user-update) for full details.",
		accounts: { azure: { scope: ['User.ReadWrite.All'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				userId: {
					type: 'string',
					description: 'The ID or the user principal name (UPN) of the user to update.',
				},
				accountEnabled: { type: 'boolean', description: 'Whether the account is enabled.' },
				aboutMe: {
					type: 'string',
					description: 'A freeform text entry field for the user to describe themselves.',
				},
				ageGroup: {
					type: 'string',
					description: 'The age group of the user.',
					default: '',
					enum: ['', 'Minor', 'NotAdult', 'Adult'],
				},
				birthday: { type: 'string', description: 'The birthday of the user.' },
				businessPhones: {
					type: 'array',
					description:
						'The telephone numbers of the user. Although it is a list, only one number can be set.',
					items: { type: 'string', description: 'A business phone number.' },
				},
				city: {
					type: 'string',
					description:
						'The city where the user is located. The maximum length is 128 characters.',
					maximum: 128,
				},
				companyName: {
					type: 'string',
					description:
						'The name of the company the user is associated with. The maximum length is 64 characters.',
					maximum: 64,
				},
				consentProvidedForMinor: {
					type: 'string',
					description: 'Whether consent was obtained for minors.',
					default: '',
					enum: ['', 'Granted', 'Denied', 'NotRequired'],
				},
				country: {
					type: 'string',
					description:
						'The country or region where the user is located, for example `US`. The maximum length is 128 characters.',
					maximum: 128,
				},
				department: {
					type: 'string',
					description:
						'The name of the department in which the user works. The maximum length is 64 characters.',
					maximum: 64,
				},
				displayName: {
					type: 'string',
					description:
						"The name to display in the address book for the user. It can't be cleared.",
				},
				employeeHireDate: {
					type: 'string',
					description: 'The date and time the user was hired or will start work.',
				},
				employeeId: {
					type: 'string',
					description:
						'The employee identifier assigned to the user by the organization. The maximum length is 16 characters.',
					maximum: 16,
				},
				employeeOrgData: {
					type: 'object',
					description:
						'The organization data associated with the user. Omitted values in this object are set to null.',
					properties: {
						costCenter: {
							type: 'string',
							description: 'The cost center associated with the user.',
						},
						division: {
							type: 'string',
							description: 'The division in which the user works.',
						},
					},
					required: [],
				},
				employeeType: {
					type: 'string',
					description:
						'The enterprise worker type, for example `Employee`, `Contractor`, `Consultant` or `Vendor`.',
				},
				faxNumber: { type: 'string', description: 'The fax number of the user.' },
				givenName: {
					type: 'string',
					description:
						'The given name (first name) of the user. The maximum length is 64 characters.',
					maximum: 64,
				},
				interests: {
					type: 'array',
					description: 'The interests of the user.',
					items: { type: 'string', description: 'An interest of the user.' },
				},
				jobTitle: {
					type: 'string',
					description: 'The job title of the user. The maximum length is 128 characters.',
					maximum: 128,
				},
				mail: {
					type: 'string',
					description:
						"The SMTP address of the user. It can't contain accent characters.",
				},
				mailNickname: {
					type: 'string',
					description: 'The mail alias of the user. The maximum length is 64 characters.',
					maximum: 64,
				},
				mobilePhone: {
					type: 'string',
					description:
						'The primary cellular telephone number of the user. The maximum length is 64 characters.',
					maximum: 64,
				},
				mySite: { type: 'string', description: "The URL of the user's personal site." },
				officeLocation: {
					type: 'string',
					description: "The office location in the user's place of business.",
				},
				onPremisesExtensionAttributes: {
					type: 'object',
					description:
						'The extension attributes 1-15 of the user. Each attribute can store up to 1024 characters. Read-only for users synced from an on-premises directory.',
					properties: {
						extensionAttribute1: {
							type: 'string',
							description: 'Custom extension attribute 1.',
						},
						extensionAttribute2: {
							type: 'string',
							description: 'Custom extension attribute 2.',
						},
						extensionAttribute3: {
							type: 'string',
							description: 'Custom extension attribute 3.',
						},
						extensionAttribute4: {
							type: 'string',
							description: 'Custom extension attribute 4.',
						},
						extensionAttribute5: {
							type: 'string',
							description: 'Custom extension attribute 5.',
						},
						extensionAttribute6: {
							type: 'string',
							description: 'Custom extension attribute 6.',
						},
						extensionAttribute7: {
							type: 'string',
							description: 'Custom extension attribute 7.',
						},
						extensionAttribute8: {
							type: 'string',
							description: 'Custom extension attribute 8.',
						},
						extensionAttribute9: {
							type: 'string',
							description: 'Custom extension attribute 9.',
						},
						extensionAttribute10: {
							type: 'string',
							description: 'Custom extension attribute 10.',
						},
						extensionAttribute11: {
							type: 'string',
							description: 'Custom extension attribute 11.',
						},
						extensionAttribute12: {
							type: 'string',
							description: 'Custom extension attribute 12.',
						},
						extensionAttribute13: {
							type: 'string',
							description: 'Custom extension attribute 13.',
						},
						extensionAttribute14: {
							type: 'string',
							description: 'Custom extension attribute 14.',
						},
						extensionAttribute15: {
							type: 'string',
							description: 'Custom extension attribute 15.',
						},
					},
					required: [],
				},
				onPremisesImmutableId: {
					type: 'string',
					description:
						'The ID that links an on-premises Active Directory account to the user.',
				},
				otherMails: {
					type: 'array',
					description:
						'The other email addresses of the user. You can set up to 250 values.',
					items: { type: 'string', description: 'An email address of the user.' },
				},
				passwordPolicies: {
					type: 'string',
					description:
						'The password policies of the user. You can select both values to set them together.',
					default: '',
					enum: ['', 'DisableStrongPassword', 'DisablePasswordExpiration'],
				},
				passwordProfile: {
					type: 'object',
					description: 'The password profile of the user.',
					properties: {
						password: {
							type: 'string',
							description:
								"The new password of the user. It must satisfy the tenant's password policies. The user must change it at the next sign-in.",
						},
						forceChangePasswordNextSignIn: {
							type: 'boolean',
							description:
								'Whether the user must change the password at the next sign-in.',
						},
						forceChangePasswordNextSignInWithMfa: {
							type: 'boolean',
							description:
								'Whether the user must perform multifactor authentication before changing the password at the next sign-in.',
						},
					},
					required: [],
				},
				pastProjects: {
					type: 'array',
					description: 'The past projects of the user.',
					items: { type: 'string', description: 'A past project.' },
				},
				postalCode: {
					type: 'string',
					description:
						'The postal code of the user. The maximum length is 40 characters.',
					maximum: 40,
				},
				preferredDataLocation: {
					type: 'string',
					description: 'The preferred data location of the user.',
				},
				preferredLanguage: {
					type: 'string',
					description: 'The preferred language of the user, for example `en-US`.',
				},
				responsibilities: {
					type: 'array',
					description: 'The responsibilities of the user.',
					items: { type: 'string', description: 'A responsibility of the user.' },
				},
				schools: {
					type: 'array',
					description: 'The schools the user attended.',
					items: { type: 'string', description: 'A school the user attended.' },
				},
				skills: {
					type: 'array',
					description: 'The skills of the user.',
					items: { type: 'string', description: 'A skill of the user.' },
				},
				state: {
					type: 'string',
					description:
						"The state or province in the user's address. The maximum length is 128 characters.",
					maximum: 128,
				},
				streetAddress: {
					type: 'string',
					description:
						"The street address of the user's place of business. The maximum length is 1,024 characters.",
					maximum: 1024,
				},
				surname: {
					type: 'string',
					description:
						'The surname (family name) of the user. The maximum length is 64 characters.',
					maximum: 64,
				},
				usageLocation: {
					type: 'string',
					description:
						'The two-letter country code (ISO 3166) of the user, for example `US`. Required for users who will be assigned licenses.',
					pattern: '^[A-Z]{2}$',
				},
				userPrincipalName: {
					type: 'string',
					description:
						"The user principal name (UPN) in the format `alias@domain`. The domain must be one of the tenant's verified domains.",
				},
				userType: {
					type: 'string',
					description: 'The user type.',
					default: '',
					enum: ['', 'Member', 'Guest'],
				},
			},
			required: ['userId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
];
