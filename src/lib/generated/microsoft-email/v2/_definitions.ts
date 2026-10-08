// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'addAttachment',
		label: 'Add an attachment',
		description: 'Adds a file attachment to a message.',
		context:
			'---\nname: addAttachment\ndescription: Adds a file attachment to a message.\n---\n\nAdds a file attachment to an existing message (typically a draft). The attachment content\nmust be provided as a base64-encoded string in `contentBytes`.\n\n**Size limit**: This API supports attachments up to 3 MB. For larger files (up to 150 MB),\nuse the upload session API via the [arbitraryCall](../arbitraryCall) endpoint:\n`POST v1.0/me/messages/{id}/attachments/createUploadSession`.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/message-post-attachments) for full details.\n',
		accounts: { azure: { scope: ['Mail.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				messageId: {
					type: 'string',
					description: 'The unique identifier of the message to add the attachment to.',
				},
				name: {
					type: 'string',
					description: 'The name of the attachment file (e.g., `report.pdf`).',
				},
				contentBytes: {
					type: 'string',
					description: 'The base64-encoded content of the file.',
				},
				contentType: {
					type: 'string',
					description:
						'The MIME type of the attachment (e.g., `application/pdf`, `image/png`).',
				},
				isInline: {
					type: 'boolean',
					description:
						'Whether the attachment is an inline attachment (referenced in the message body via a `cid:` URL).',
				},
			},
			required: ['messageId', 'name', 'contentBytes'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique identifier of the attachment.' },
				'@odata.type': {
					type: 'string',
					description: 'The OData type of the attachment resource.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the attachment was last modified.',
				},
				name: { type: 'string', description: 'The name of the attachment.' },
				contentType: {
					type: 'string',
					description: 'The MIME content type of the attachment.',
				},
				size: { type: 'number', description: 'The size of the attachment in bytes.' },
				isInline: {
					type: 'boolean',
					description: 'Whether the attachment is an inline attachment.',
				},
				contentId: {
					type: 'string',
					description: 'The ID of the attachment in the MIME message.',
				},
				contentLocation: {
					type: 'string',
					description:
						'The Uniform Resource Identifier (URI) that corresponds to the location of the content of the attachment.',
				},
				contentBytes: {
					type: 'string',
					description: 'The base64-encoded content of the file attachment.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Microsoft Graph API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://graph.microsoft.com`. Provide the remaining path in the URL parameter\n(e.g. `/v1.0/me/messages`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview) for available\nendpoints, required parameters, and response schemas.\n',
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
						'Enter the part of the URL that comes after `https://graph.microsoft.com`. For example, `/v1.0/me/messages`.',
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
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'createDraft',
		label: 'Create a draft message',
		description: "Creates a draft message in the signed-in user's mailbox.",
		context:
			"---\nname: createDraft\ndescription: Creates a draft message in the signed-in user's mailbox.\n---\n\nCreates a new draft message. The message is saved in the Drafts folder. To send the draft,\nuse the [sendDraft](../sendDraft) endpoint or POST `/me/messages/{id}/send`.\n\nTo add attachments to the draft, use the [addAttachment](../addAttachment) endpoint after creating it.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/user-post-messages) for full details.\n",
		accounts: { azure: { scope: ['Mail.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				subject: { type: 'string', description: 'The subject of the message.' },
				body: {
					type: 'object',
					description: 'The body of the message.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The type of the content.',
							default: '',
							enum: ['', 'html', 'text'],
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				importance: {
					type: 'string',
					description: 'The importance of the message.',
					default: '',
					enum: ['', 'low', 'normal', 'high'],
				},
				toRecipients: {
					type: 'array',
					description: 'The To: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				ccRecipients: {
					type: 'array',
					description: 'The Cc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				bccRecipients: {
					type: 'array',
					description: 'The Bcc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				replyTo: {
					type: 'array',
					description: 'The email addresses to use when replying.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				isDeliveryReceiptRequested: {
					type: 'boolean',
					description: 'Whether a delivery receipt is requested for the message.',
				},
				isReadReceiptRequested: {
					type: 'boolean',
					description: 'Whether a read receipt is requested for the message.',
				},
				internetMessageHeaders: {
					type: 'array',
					description:
						'Custom internet message headers. Header names must start with `x-`.',
					items: {
						type: 'object',
						description: 'A custom internet message header.',
						properties: {
							name: {
								type: 'string',
								description: 'The header name (must start with `x-`).',
							},
							value: { type: 'string', description: 'The header value.' },
						},
						required: [],
					},
				},
				inferenceClassification: {
					type: 'string',
					description: 'The classification of the message for the user.',
					default: '',
					enum: ['', 'focused', 'other'],
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique identifier for the message.' },
				createdDateTime: {
					type: 'string',
					description: 'The date and time the message was created (ISO 8601, UTC).',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the message was last changed (ISO 8601, UTC).',
				},
				changeKey: { type: 'string', description: 'The version of the message.' },
				categories: {
					type: 'array',
					description: 'The categories associated with the message.',
					items: { type: 'string', description: 'A category name.' },
				},
				receivedDateTime: {
					type: 'string',
					description: 'The date and time the message was received (ISO 8601, UTC).',
				},
				sentDateTime: {
					type: 'string',
					description: 'The date and time the message was sent (ISO 8601, UTC).',
				},
				hasAttachments: {
					type: 'boolean',
					description:
						'Whether the message has attachments (excludes inline attachments).',
				},
				internetMessageId: {
					type: 'string',
					description:
						'The message ID in the format specified by [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt).',
				},
				internetMessageHeaders: {
					type: 'array',
					description:
						'A collection of message headers defined by [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt). Requires `$select` to retrieve.',
					items: {
						type: 'object',
						description: 'An internet message header.',
						properties: {
							name: { type: 'string', description: 'The header name.' },
							value: { type: 'string', description: 'The header value.' },
						},
						required: [],
					},
				},
				subject: { type: 'string', description: 'The subject of the message.' },
				body: {
					type: 'object',
					description: 'The body of the message. Can be in HTML or text format.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values are `text` and `html`.',
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				bodyPreview: {
					type: 'string',
					description: 'The first 255 characters of the message body in text format.',
				},
				importance: {
					type: 'string',
					description:
						'The importance of the message. Possible values: `low`, `normal`, `high`.',
				},
				parentFolderId: {
					type: 'string',
					description: "The unique identifier for the message's parent mail folder.",
				},
				conversationId: {
					type: 'string',
					description: 'The ID of the conversation the email belongs to.',
				},
				conversationIndex: {
					type: 'string',
					description: 'The position of the message within the conversation (binary).',
				},
				isDeliveryReceiptRequested: {
					type: 'boolean',
					description: 'Whether a delivery receipt is requested for the message.',
				},
				isReadReceiptRequested: {
					type: 'boolean',
					description: 'Whether a read receipt is requested for the message.',
				},
				isRead: { type: 'boolean', description: 'Whether the message has been read.' },
				isDraft: { type: 'boolean', description: 'Whether the message is a draft.' },
				webLink: {
					type: 'string',
					description: 'The URL to open the message in Outlook on the web.',
				},
				inferenceClassification: {
					type: 'string',
					description:
						'The classification of the message for the user. Possible values: `focused`, `other`.',
				},
				flag: {
					type: 'object',
					description:
						'The flag value that indicates the status, start date, due date, or completion date for the message.',
					properties: {
						flagStatus: {
							type: 'string',
							description:
								'The flag status. Possible values: `notFlagged`, `complete`, `flagged`.',
						},
						startDateTime: {
							type: 'object',
							description: 'The start date and time of the flag.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
						dueDateTime: {
							type: 'object',
							description: 'The due date and time of the flag.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
						completedDateTime: {
							type: 'object',
							description: 'The date and time the flag was completed.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
					},
					required: [],
				},
				sender: {
					type: 'object',
					description: 'The account that is used to generate the message.',
					properties: {
						emailAddress: {
							type: 'object',
							description: "The sender's email address information.",
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the sender.',
								},
								address: {
									type: 'string',
									description: 'The email address of the sender.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The mailbox owner and sender of the message.',
					properties: {
						emailAddress: {
							type: 'object',
							description: 'The from email address information.',
							properties: {
								name: { type: 'string', description: 'The display name.' },
								address: { type: 'string', description: 'The email address.' },
							},
							required: [],
						},
					},
					required: [],
				},
				toRecipients: {
					type: 'array',
					description: 'The To: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				ccRecipients: {
					type: 'array',
					description: 'The Cc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				bccRecipients: {
					type: 'array',
					description: 'The Bcc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				replyTo: {
					type: 'array',
					description: 'The email addresses to use when replying.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				uniqueBody: {
					type: 'object',
					description:
						'The part of the body of the message that is unique to the current message. Requires `$select=uniqueBody`.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values are `text` and `html`.',
						},
						content: { type: 'string', description: 'The content of the unique body.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'deleteMessage',
		label: 'Delete a message',
		description: "Deletes a message from the signed-in user's mailbox.",
		context:
			"---\nname: deleteMessage\ndescription: Deletes a message from the signed-in user's mailbox.\n---\n\nDeletes a message by its ID. The message is moved to the Deleted Items folder (soft delete).\nReturns 204 No Content on success.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/message-delete) for full details.\n",
		accounts: { azure: { scope: ['Mail.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The unique identifier of the message to delete.',
				},
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'downloadAttachment',
		label: 'Get an attachment',
		description: 'Retrieves an attachment from a message, including its content.',
		context:
			'---\nname: downloadAttachment\ndescription: Retrieves an attachment from a message, including its content.\n---\n\nRetrieves a single attachment by ID, including its base64-encoded content in `contentBytes`.\n\n**Note**: This endpoint returns the attachment as a JSON object with metadata and base64-encoded\ncontent — it does not return raw binary data. For file attachments, decode `contentBytes`\nfrom base64 to get the original file.\n\nFor item attachments (events, messages), the response includes the nested item data instead of\n`contentBytes`. Use `$expand` in the [arbitraryCall](../arbitraryCall) endpoint to expand\nitem attachment properties.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/attachment-get) for full details.\n',
		accounts: { azure: { scope: ['Mail.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				messageId: {
					type: 'string',
					description: 'The unique identifier of the message containing the attachment.',
				},
				attachmentId: {
					type: 'string',
					description: 'The unique identifier of the attachment to retrieve.',
				},
				select: {
					type: 'string',
					description: 'Comma-separated list of properties to include.',
				},
			},
			required: ['messageId', 'attachmentId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique identifier of the attachment.' },
				'@odata.type': {
					type: 'string',
					description: 'The OData type of the attachment resource.',
				},
				'@odata.mediaContentType': {
					type: 'string',
					description: 'The MIME content type of the attachment content.',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the attachment was last modified.',
				},
				name: { type: 'string', description: 'The file name of the attachment.' },
				contentType: {
					type: 'string',
					description: 'The MIME content type of the attachment.',
				},
				size: { type: 'number', description: 'The size of the attachment in bytes.' },
				isInline: {
					type: 'boolean',
					description: 'Whether the attachment is an inline attachment.',
				},
				contentId: {
					type: 'string',
					description: 'The ID of the attachment in the MIME message.',
				},
				contentLocation: {
					type: 'string',
					description: 'The URI for the content location of the attachment.',
				},
				contentBytes: {
					type: 'string',
					description: 'The base64-encoded content of the file attachment.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'forwardMessage',
		label: 'Forward a message',
		description: 'Forwards a message to specified recipients.',
		context:
			'---\nname: forwardMessage\ndescription: Forwards a message to specified recipients.\n---\n\nForwards a message to the specified recipients, optionally including a comment.\nThe message is then saved in the Sent Items folder. Returns 202 Accepted with no response body.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/message-forward) for full details.\n',
		accounts: { azure: { scope: ['Mail.Send'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The unique identifier of the message to forward.',
				},
				toRecipients: {
					type: 'array',
					description: 'The recipients to forward the message to.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				comment: {
					type: 'string',
					description: 'An optional comment to include in the forwarded message body.',
				},
			},
			required: ['id', 'toRecipients'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'getMessage',
		label: 'Get a message',
		description: "Retrieves a message from the signed-in user's mailbox.",
		context:
			'---\nname: getMessage\ndescription: Retrieves a message from the signed-in user\'s mailbox.\n---\n\nRetrieves a message by its ID. Use `$select` to limit the returned properties for better\nperformance (e.g., `subject,body,from`). Use `$expand=attachments` to include attachments\ninline.\n\nTo retrieve internet message headers, use `$select=internetMessageHeaders`.\nTo retrieve the unique body, use `$select=uniqueBody`.\n\nThe message body is returned in HTML format by default. To get text format, include the\n`Prefer: outlook.body-content-type="text"` header via the [arbitraryCall](../arbitraryCall) endpoint.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/message-get) for full details.\n',
		accounts: { azure: { scope: ['Mail.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The unique identifier of the message to retrieve.',
				},
				select: {
					type: 'string',
					description:
						'Comma-separated list of properties to include in the response. For example, `subject,body,from`. Use `$select` to limit returned properties for better performance.',
				},
				expand: {
					type: 'string',
					description:
						"Comma-separated list of relationships to expand. For example, `attachments` or `singleValueExtendedProperties($filter=id eq 'String 0x007D')`.",
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique identifier for the message.' },
				createdDateTime: {
					type: 'string',
					description: 'The date and time the message was created (ISO 8601, UTC).',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the message was last changed (ISO 8601, UTC).',
				},
				changeKey: { type: 'string', description: 'The version of the message.' },
				categories: {
					type: 'array',
					description: 'The categories associated with the message.',
					items: { type: 'string', description: 'A category name.' },
				},
				receivedDateTime: {
					type: 'string',
					description: 'The date and time the message was received (ISO 8601, UTC).',
				},
				sentDateTime: {
					type: 'string',
					description: 'The date and time the message was sent (ISO 8601, UTC).',
				},
				hasAttachments: {
					type: 'boolean',
					description:
						'Whether the message has attachments (excludes inline attachments).',
				},
				internetMessageId: {
					type: 'string',
					description:
						'The message ID in the format specified by [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt).',
				},
				internetMessageHeaders: {
					type: 'array',
					description:
						'A collection of message headers defined by [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt). Requires `$select` to retrieve.',
					items: {
						type: 'object',
						description: 'An internet message header.',
						properties: {
							name: { type: 'string', description: 'The header name.' },
							value: { type: 'string', description: 'The header value.' },
						},
						required: [],
					},
				},
				subject: { type: 'string', description: 'The subject of the message.' },
				body: {
					type: 'object',
					description: 'The body of the message. Can be in HTML or text format.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values are `text` and `html`.',
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				bodyPreview: {
					type: 'string',
					description: 'The first 255 characters of the message body in text format.',
				},
				importance: {
					type: 'string',
					description:
						'The importance of the message. Possible values: `low`, `normal`, `high`.',
				},
				parentFolderId: {
					type: 'string',
					description: "The unique identifier for the message's parent mail folder.",
				},
				conversationId: {
					type: 'string',
					description: 'The ID of the conversation the email belongs to.',
				},
				conversationIndex: {
					type: 'string',
					description: 'The position of the message within the conversation (binary).',
				},
				isDeliveryReceiptRequested: {
					type: 'boolean',
					description: 'Whether a delivery receipt is requested for the message.',
				},
				isReadReceiptRequested: {
					type: 'boolean',
					description: 'Whether a read receipt is requested for the message.',
				},
				isRead: { type: 'boolean', description: 'Whether the message has been read.' },
				isDraft: { type: 'boolean', description: 'Whether the message is a draft.' },
				webLink: {
					type: 'string',
					description: 'The URL to open the message in Outlook on the web.',
				},
				inferenceClassification: {
					type: 'string',
					description:
						'The classification of the message for the user. Possible values: `focused`, `other`.',
				},
				flag: {
					type: 'object',
					description:
						'The flag value that indicates the status, start date, due date, or completion date for the message.',
					properties: {
						flagStatus: {
							type: 'string',
							description:
								'The flag status. Possible values: `notFlagged`, `complete`, `flagged`.',
						},
						startDateTime: {
							type: 'object',
							description: 'The start date and time of the flag.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
						dueDateTime: {
							type: 'object',
							description: 'The due date and time of the flag.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
						completedDateTime: {
							type: 'object',
							description: 'The date and time the flag was completed.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
					},
					required: [],
				},
				sender: {
					type: 'object',
					description: 'The account that is used to generate the message.',
					properties: {
						emailAddress: {
							type: 'object',
							description: "The sender's email address information.",
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the sender.',
								},
								address: {
									type: 'string',
									description: 'The email address of the sender.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The mailbox owner and sender of the message.',
					properties: {
						emailAddress: {
							type: 'object',
							description: 'The from email address information.',
							properties: {
								name: { type: 'string', description: 'The display name.' },
								address: { type: 'string', description: 'The email address.' },
							},
							required: [],
						},
					},
					required: [],
				},
				toRecipients: {
					type: 'array',
					description: 'The To: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				ccRecipients: {
					type: 'array',
					description: 'The Cc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				bccRecipients: {
					type: 'array',
					description: 'The Bcc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				replyTo: {
					type: 'array',
					description: 'The email addresses to use when replying.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				uniqueBody: {
					type: 'object',
					description:
						'The part of the body of the message that is unique to the current message. Requires `$select=uniqueBody`.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values are `text` and `html`.',
						},
						content: { type: 'string', description: 'The content of the unique body.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'listAttachments',
		label: 'List attachments',
		description: 'Lists attachments for a message.',
		context:
			'---\nname: listAttachments\ndescription: Lists attachments for a message.\n---\n\nLists all attachments on a message. Returns attachment metadata (name, size, content type).\nTo get the full content of an individual attachment (including base64-encoded file bytes),\nuse the [downloadAttachment](../downloadAttachment) endpoint.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/message-list-attachments) for full details.\n',
		accounts: { azure: { scope: ['Mail.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				messageId: {
					type: 'string',
					description: 'The unique identifier of the message whose attachments to list.',
				},
				select: {
					type: 'string',
					description: 'Comma-separated list of properties to include.',
				},
				filter: { type: 'string', description: 'An OData `$filter` expression.' },
				expand: {
					type: 'string',
					description: 'Comma-separated list of relationships to expand.',
				},
			},
			required: ['messageId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				value: {
					type: 'array',
					description: 'The list of attachments.',
					items: {
						type: 'object',
						description: 'An attachment object.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier of the attachment.',
							},
							'@odata.type': {
								type: 'string',
								description:
									'The OData type (`#microsoft.graph.fileAttachment`, `#microsoft.graph.itemAttachment`, `#microsoft.graph.referenceAttachment`).',
							},
							lastModifiedDateTime: {
								type: 'string',
								description: 'The date and time the attachment was last modified.',
							},
							name: { type: 'string', description: 'The name of the attachment.' },
							contentType: {
								type: 'string',
								description: 'The MIME content type of the attachment.',
							},
							size: {
								type: 'number',
								description: 'The size of the attachment in bytes.',
							},
							isInline: {
								type: 'boolean',
								description: 'Whether the attachment is an inline attachment.',
							},
							contentId: {
								type: 'string',
								description: 'The ID of the attachment in the MIME message.',
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
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'listFolderMessages',
		label: 'List folder messages',
		description: 'Lists messages in a specific mail folder.',
		context:
			'---\nname: listFolderMessages\ndescription: Lists messages in a specific mail folder.\n---\n\nLists messages within a specific mail folder. Use well-known folder names (`inbox`,\n`drafts`, `sentitems`, `deleteditems`, `junkemail`) or a folder ID.\n\nTo list messages across the entire mailbox, use the [listMessages](../listMessages) endpoint instead.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/mailfolder-list-messages) for full details.\n',
		accounts: { azure: { scope: ['Mail.Read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				folderId: {
					type: 'string',
					description:
						'The ID of the mail folder (e.g., `inbox`, `drafts`, `sentitems`, `deleteditems`, or a folder ID).',
				},
				select: {
					type: 'string',
					description:
						'Comma-separated list of properties to include. For example, `subject,from,receivedDateTime`.',
				},
				filter: {
					type: 'string',
					description: 'An OData `$filter` expression. For example, `isRead eq false`.',
				},
				search: {
					type: 'string',
					description: 'A search expression. Not supported with `$orderby`.',
				},
				orderby: {
					type: 'string',
					description:
						'An OData `$orderby` expression. For example, `receivedDateTime desc`. Not supported with `$search`.',
				},
				top: {
					type: 'number',
					description: 'The number of results per page. Range: 1-1000. Default: 10.',
					minimum: 1,
					maximum: 1000,
				},
				skip: { type: 'number', description: 'The number of results to skip.' },
				expand: {
					type: 'string',
					description:
						'Comma-separated list of relationships to expand. For example, `attachments`.',
				},
			},
			required: ['folderId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				value: {
					type: 'array',
					description: 'The list of messages in the folder.',
					items: {
						type: 'object',
						description: 'A message object.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the message.',
							},
							createdDateTime: {
								type: 'string',
								description:
									'The date and time the message was created (ISO 8601, UTC).',
							},
							lastModifiedDateTime: {
								type: 'string',
								description:
									'The date and time the message was last changed (ISO 8601, UTC).',
							},
							changeKey: {
								type: 'string',
								description: 'The version of the message.',
							},
							categories: {
								type: 'array',
								description: 'The categories associated with the message.',
								items: { type: 'string', description: 'A category name.' },
							},
							receivedDateTime: {
								type: 'string',
								description:
									'The date and time the message was received (ISO 8601, UTC).',
							},
							sentDateTime: {
								type: 'string',
								description:
									'The date and time the message was sent (ISO 8601, UTC).',
							},
							hasAttachments: {
								type: 'boolean',
								description:
									'Whether the message has attachments (excludes inline attachments).',
							},
							internetMessageId: {
								type: 'string',
								description:
									'The message ID in the format specified by [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt).',
							},
							internetMessageHeaders: {
								type: 'array',
								description:
									'A collection of message headers defined by [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt). Requires `$select` to retrieve.',
								items: {
									type: 'object',
									description: 'An internet message header.',
									properties: {
										name: { type: 'string', description: 'The header name.' },
										value: { type: 'string', description: 'The header value.' },
									},
									required: [],
								},
							},
							subject: { type: 'string', description: 'The subject of the message.' },
							body: {
								type: 'object',
								description:
									'The body of the message. Can be in HTML or text format.',
								properties: {
									contentType: {
										type: 'string',
										description:
											'The type of the content. Possible values are `text` and `html`.',
									},
									content: {
										type: 'string',
										description: 'The content of the body.',
									},
								},
								required: [],
							},
							bodyPreview: {
								type: 'string',
								description:
									'The first 255 characters of the message body in text format.',
							},
							importance: {
								type: 'string',
								description:
									'The importance of the message. Possible values: `low`, `normal`, `high`.',
							},
							parentFolderId: {
								type: 'string',
								description:
									"The unique identifier for the message's parent mail folder.",
							},
							conversationId: {
								type: 'string',
								description: 'The ID of the conversation the email belongs to.',
							},
							conversationIndex: {
								type: 'string',
								description:
									'The position of the message within the conversation (binary).',
							},
							isDeliveryReceiptRequested: {
								type: 'boolean',
								description:
									'Whether a delivery receipt is requested for the message.',
							},
							isReadReceiptRequested: {
								type: 'boolean',
								description: 'Whether a read receipt is requested for the message.',
							},
							isRead: {
								type: 'boolean',
								description: 'Whether the message has been read.',
							},
							isDraft: {
								type: 'boolean',
								description: 'Whether the message is a draft.',
							},
							webLink: {
								type: 'string',
								description: 'The URL to open the message in Outlook on the web.',
							},
							inferenceClassification: {
								type: 'string',
								description:
									'The classification of the message for the user. Possible values: `focused`, `other`.',
							},
							flag: {
								type: 'object',
								description:
									'The flag value that indicates the status, start date, due date, or completion date for the message.',
								properties: {
									flagStatus: {
										type: 'string',
										description:
											'The flag status. Possible values: `notFlagged`, `complete`, `flagged`.',
									},
									startDateTime: {
										type: 'object',
										description: 'The start date and time of the flag.',
										properties: {
											dateTime: {
												type: 'string',
												description:
													'A single point of time in a combined date and time representation.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone.',
											},
										},
										required: [],
									},
									dueDateTime: {
										type: 'object',
										description: 'The due date and time of the flag.',
										properties: {
											dateTime: {
												type: 'string',
												description:
													'A single point of time in a combined date and time representation.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone.',
											},
										},
										required: [],
									},
									completedDateTime: {
										type: 'object',
										description: 'The date and time the flag was completed.',
										properties: {
											dateTime: {
												type: 'string',
												description:
													'A single point of time in a combined date and time representation.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							sender: {
								type: 'object',
								description: 'The account that is used to generate the message.',
								properties: {
									emailAddress: {
										type: 'object',
										description: "The sender's email address information.",
										properties: {
											name: {
												type: 'string',
												description: 'The display name of the sender.',
											},
											address: {
												type: 'string',
												description: 'The email address of the sender.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							from: {
								type: 'object',
								description: 'The mailbox owner and sender of the message.',
								properties: {
									emailAddress: {
										type: 'object',
										description: 'The from email address information.',
										properties: {
											name: {
												type: 'string',
												description: 'The display name.',
											},
											address: {
												type: 'string',
												description: 'The email address.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							toRecipients: {
								type: 'array',
								description: 'The To: recipients for the message.',
								items: {
									type: 'object',
									description: 'A recipient of the message.',
									properties: {
										emailAddress: {
											type: 'object',
											description: "The recipient's email address.",
											properties: {
												name: {
													type: 'string',
													description:
														'The display name of the recipient.',
												},
												address: {
													type: 'string',
													description:
														'The email address of the recipient.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							ccRecipients: {
								type: 'array',
								description: 'The Cc: recipients for the message.',
								items: {
									type: 'object',
									description: 'A recipient of the message.',
									properties: {
										emailAddress: {
											type: 'object',
											description: "The recipient's email address.",
											properties: {
												name: {
													type: 'string',
													description:
														'The display name of the recipient.',
												},
												address: {
													type: 'string',
													description:
														'The email address of the recipient.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							bccRecipients: {
								type: 'array',
								description: 'The Bcc: recipients for the message.',
								items: {
									type: 'object',
									description: 'A recipient of the message.',
									properties: {
										emailAddress: {
											type: 'object',
											description: "The recipient's email address.",
											properties: {
												name: {
													type: 'string',
													description:
														'The display name of the recipient.',
												},
												address: {
													type: 'string',
													description:
														'The email address of the recipient.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							replyTo: {
								type: 'array',
								description: 'The email addresses to use when replying.',
								items: {
									type: 'object',
									description: 'A recipient of the message.',
									properties: {
										emailAddress: {
											type: 'object',
											description: "The recipient's email address.",
											properties: {
												name: {
													type: 'string',
													description:
														'The display name of the recipient.',
												},
												address: {
													type: 'string',
													description:
														'The email address of the recipient.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							uniqueBody: {
								type: 'object',
								description:
									'The part of the body of the message that is unique to the current message. Requires `$select=uniqueBody`.',
								properties: {
									contentType: {
										type: 'string',
										description:
											'The type of the content. Possible values are `text` and `html`.',
									},
									content: {
										type: 'string',
										description: 'The content of the unique body.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description: 'The URL for the next page of results.',
				},
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'listMessages',
		label: 'List messages',
		description: "Lists messages in the signed-in user's mailbox.",
		context:
			"---\nname: listMessages\ndescription: Lists messages in the signed-in user's mailbox.\n---\n\nLists messages across the entire mailbox of the signed-in user, including the Deleted Items\nand Clutter folders. Use `$filter`, `$search`, and `$orderby` to narrow results.\n\nDefault page size is 10 messages. Use `$top` (1-1000) to customize.\n\n**Important**: When using `$filter` and `$orderby` together, properties in `$orderby`\nmust also appear in `$filter` and in the same order, before any filter-only properties.\n\nTo list messages in a specific folder, use the [listFolderMessages](../listFolderMessages) endpoint instead.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/user-list-messages) for full details.\n",
		accounts: { azure: { scope: ['Mail.Read'] } },
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
						'Comma-separated list of properties to include. For example, `subject,from,receivedDateTime`. Limits returned properties for better performance.',
				},
				filter: {
					type: 'string',
					description:
						"An OData `$filter` expression. For example, `isRead eq false` or `importance eq 'high'`. See [OData query parameters](https://learn.microsoft.com/en-us/graph/query-parameters#filter-parameter).",
				},
				search: {
					type: 'string',
					description:
						'A search expression to find messages matching the query. Searches subject, body, and other text fields. Note: `$orderby` is not supported with `$search`.',
				},
				orderby: {
					type: 'string',
					description:
						'An OData `$orderby` expression. For example, `receivedDateTime desc`. Not supported with `$search`.',
				},
				top: {
					type: 'number',
					description: 'The number of results per page. Range: 1-1000. Default: 10.',
					minimum: 1,
					maximum: 1000,
				},
				skip: {
					type: 'number',
					description: 'The number of results to skip. Use for manual pagination.',
				},
				expand: {
					type: 'string',
					description:
						'Comma-separated list of relationships to expand inline. For example, `attachments`.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				value: {
					type: 'array',
					description: 'The list of messages.',
					items: {
						type: 'object',
						description: 'A message object.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the message.',
							},
							createdDateTime: {
								type: 'string',
								description:
									'The date and time the message was created (ISO 8601, UTC).',
							},
							lastModifiedDateTime: {
								type: 'string',
								description:
									'The date and time the message was last changed (ISO 8601, UTC).',
							},
							changeKey: {
								type: 'string',
								description: 'The version of the message.',
							},
							categories: {
								type: 'array',
								description: 'The categories associated with the message.',
								items: { type: 'string', description: 'A category name.' },
							},
							receivedDateTime: {
								type: 'string',
								description:
									'The date and time the message was received (ISO 8601, UTC).',
							},
							sentDateTime: {
								type: 'string',
								description:
									'The date and time the message was sent (ISO 8601, UTC).',
							},
							hasAttachments: {
								type: 'boolean',
								description:
									'Whether the message has attachments (excludes inline attachments).',
							},
							internetMessageId: {
								type: 'string',
								description:
									'The message ID in the format specified by [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt).',
							},
							internetMessageHeaders: {
								type: 'array',
								description:
									'A collection of message headers defined by [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt). Requires `$select` to retrieve.',
								items: {
									type: 'object',
									description: 'An internet message header.',
									properties: {
										name: { type: 'string', description: 'The header name.' },
										value: { type: 'string', description: 'The header value.' },
									},
									required: [],
								},
							},
							subject: { type: 'string', description: 'The subject of the message.' },
							body: {
								type: 'object',
								description:
									'The body of the message. Can be in HTML or text format.',
								properties: {
									contentType: {
										type: 'string',
										description:
											'The type of the content. Possible values are `text` and `html`.',
									},
									content: {
										type: 'string',
										description: 'The content of the body.',
									},
								},
								required: [],
							},
							bodyPreview: {
								type: 'string',
								description:
									'The first 255 characters of the message body in text format.',
							},
							importance: {
								type: 'string',
								description:
									'The importance of the message. Possible values: `low`, `normal`, `high`.',
							},
							parentFolderId: {
								type: 'string',
								description:
									"The unique identifier for the message's parent mail folder.",
							},
							conversationId: {
								type: 'string',
								description: 'The ID of the conversation the email belongs to.',
							},
							conversationIndex: {
								type: 'string',
								description:
									'The position of the message within the conversation (binary).',
							},
							isDeliveryReceiptRequested: {
								type: 'boolean',
								description:
									'Whether a delivery receipt is requested for the message.',
							},
							isReadReceiptRequested: {
								type: 'boolean',
								description: 'Whether a read receipt is requested for the message.',
							},
							isRead: {
								type: 'boolean',
								description: 'Whether the message has been read.',
							},
							isDraft: {
								type: 'boolean',
								description: 'Whether the message is a draft.',
							},
							webLink: {
								type: 'string',
								description: 'The URL to open the message in Outlook on the web.',
							},
							inferenceClassification: {
								type: 'string',
								description:
									'The classification of the message for the user. Possible values: `focused`, `other`.',
							},
							flag: {
								type: 'object',
								description:
									'The flag value that indicates the status, start date, due date, or completion date for the message.',
								properties: {
									flagStatus: {
										type: 'string',
										description:
											'The flag status. Possible values: `notFlagged`, `complete`, `flagged`.',
									},
									startDateTime: {
										type: 'object',
										description: 'The start date and time of the flag.',
										properties: {
											dateTime: {
												type: 'string',
												description:
													'A single point of time in a combined date and time representation.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone.',
											},
										},
										required: [],
									},
									dueDateTime: {
										type: 'object',
										description: 'The due date and time of the flag.',
										properties: {
											dateTime: {
												type: 'string',
												description:
													'A single point of time in a combined date and time representation.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone.',
											},
										},
										required: [],
									},
									completedDateTime: {
										type: 'object',
										description: 'The date and time the flag was completed.',
										properties: {
											dateTime: {
												type: 'string',
												description:
													'A single point of time in a combined date and time representation.',
											},
											timeZone: {
												type: 'string',
												description: 'The time zone.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							sender: {
								type: 'object',
								description: 'The account that is used to generate the message.',
								properties: {
									emailAddress: {
										type: 'object',
										description: "The sender's email address information.",
										properties: {
											name: {
												type: 'string',
												description: 'The display name of the sender.',
											},
											address: {
												type: 'string',
												description: 'The email address of the sender.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							from: {
								type: 'object',
								description: 'The mailbox owner and sender of the message.',
								properties: {
									emailAddress: {
										type: 'object',
										description: 'The from email address information.',
										properties: {
											name: {
												type: 'string',
												description: 'The display name.',
											},
											address: {
												type: 'string',
												description: 'The email address.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							toRecipients: {
								type: 'array',
								description: 'The To: recipients for the message.',
								items: {
									type: 'object',
									description: 'A recipient of the message.',
									properties: {
										emailAddress: {
											type: 'object',
											description: "The recipient's email address.",
											properties: {
												name: {
													type: 'string',
													description:
														'The display name of the recipient.',
												},
												address: {
													type: 'string',
													description:
														'The email address of the recipient.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							ccRecipients: {
								type: 'array',
								description: 'The Cc: recipients for the message.',
								items: {
									type: 'object',
									description: 'A recipient of the message.',
									properties: {
										emailAddress: {
											type: 'object',
											description: "The recipient's email address.",
											properties: {
												name: {
													type: 'string',
													description:
														'The display name of the recipient.',
												},
												address: {
													type: 'string',
													description:
														'The email address of the recipient.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							bccRecipients: {
								type: 'array',
								description: 'The Bcc: recipients for the message.',
								items: {
									type: 'object',
									description: 'A recipient of the message.',
									properties: {
										emailAddress: {
											type: 'object',
											description: "The recipient's email address.",
											properties: {
												name: {
													type: 'string',
													description:
														'The display name of the recipient.',
												},
												address: {
													type: 'string',
													description:
														'The email address of the recipient.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							replyTo: {
								type: 'array',
								description: 'The email addresses to use when replying.',
								items: {
									type: 'object',
									description: 'A recipient of the message.',
									properties: {
										emailAddress: {
											type: 'object',
											description: "The recipient's email address.",
											properties: {
												name: {
													type: 'string',
													description:
														'The display name of the recipient.',
												},
												address: {
													type: 'string',
													description:
														'The email address of the recipient.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							uniqueBody: {
								type: 'object',
								description:
									'The part of the body of the message that is unique to the current message. Requires `$select=uniqueBody`.',
								properties: {
									contentType: {
										type: 'string',
										description:
											'The type of the content. Possible values are `text` and `html`.',
									},
									content: {
										type: 'string',
										description: 'The content of the unique body.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				'@odata.nextLink': {
					type: 'string',
					description:
						'The URL for the next page of results. Absent when there are no more pages.',
				},
				'@odata.context': {
					type: 'string',
					description: 'The OData context URL for the response.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'moveMessage',
		label: 'Move a message',
		description: 'Moves a message to a different mail folder.',
		context:
			'---\nname: moveMessage\ndescription: Moves a message to a different mail folder.\n---\n\nMoves a message to a different mail folder. This creates a new copy of the message in the\ndestination folder with a new ID.\n\nUse well-known folder names (`inbox`, `drafts`, `sentitems`, `deleteditems`, `junkemail`)\nor a folder ID as the destination.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/message-move) for full details.\n',
		accounts: { azure: { scope: ['Mail.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The unique identifier of the message to move.',
				},
				destinationId: {
					type: 'string',
					description:
						'The ID of the destination folder (e.g., `inbox`, `drafts`, `deleteditems`, or a folder ID).',
				},
			},
			required: ['id', 'destinationId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique identifier for the message.' },
				createdDateTime: {
					type: 'string',
					description: 'The date and time the message was created (ISO 8601, UTC).',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the message was last changed (ISO 8601, UTC).',
				},
				changeKey: { type: 'string', description: 'The version of the message.' },
				categories: {
					type: 'array',
					description: 'The categories associated with the message.',
					items: { type: 'string', description: 'A category name.' },
				},
				receivedDateTime: {
					type: 'string',
					description: 'The date and time the message was received (ISO 8601, UTC).',
				},
				sentDateTime: {
					type: 'string',
					description: 'The date and time the message was sent (ISO 8601, UTC).',
				},
				hasAttachments: {
					type: 'boolean',
					description:
						'Whether the message has attachments (excludes inline attachments).',
				},
				internetMessageId: {
					type: 'string',
					description:
						'The message ID in the format specified by [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt).',
				},
				internetMessageHeaders: {
					type: 'array',
					description:
						'A collection of message headers defined by [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt). Requires `$select` to retrieve.',
					items: {
						type: 'object',
						description: 'An internet message header.',
						properties: {
							name: { type: 'string', description: 'The header name.' },
							value: { type: 'string', description: 'The header value.' },
						},
						required: [],
					},
				},
				subject: { type: 'string', description: 'The subject of the message.' },
				body: {
					type: 'object',
					description: 'The body of the message. Can be in HTML or text format.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values are `text` and `html`.',
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				bodyPreview: {
					type: 'string',
					description: 'The first 255 characters of the message body in text format.',
				},
				importance: {
					type: 'string',
					description:
						'The importance of the message. Possible values: `low`, `normal`, `high`.',
				},
				parentFolderId: {
					type: 'string',
					description: "The unique identifier for the message's parent mail folder.",
				},
				conversationId: {
					type: 'string',
					description: 'The ID of the conversation the email belongs to.',
				},
				conversationIndex: {
					type: 'string',
					description: 'The position of the message within the conversation (binary).',
				},
				isDeliveryReceiptRequested: {
					type: 'boolean',
					description: 'Whether a delivery receipt is requested for the message.',
				},
				isReadReceiptRequested: {
					type: 'boolean',
					description: 'Whether a read receipt is requested for the message.',
				},
				isRead: { type: 'boolean', description: 'Whether the message has been read.' },
				isDraft: { type: 'boolean', description: 'Whether the message is a draft.' },
				webLink: {
					type: 'string',
					description: 'The URL to open the message in Outlook on the web.',
				},
				inferenceClassification: {
					type: 'string',
					description:
						'The classification of the message for the user. Possible values: `focused`, `other`.',
				},
				flag: {
					type: 'object',
					description:
						'The flag value that indicates the status, start date, due date, or completion date for the message.',
					properties: {
						flagStatus: {
							type: 'string',
							description:
								'The flag status. Possible values: `notFlagged`, `complete`, `flagged`.',
						},
						startDateTime: {
							type: 'object',
							description: 'The start date and time of the flag.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
						dueDateTime: {
							type: 'object',
							description: 'The due date and time of the flag.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
						completedDateTime: {
							type: 'object',
							description: 'The date and time the flag was completed.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
					},
					required: [],
				},
				sender: {
					type: 'object',
					description: 'The account that is used to generate the message.',
					properties: {
						emailAddress: {
							type: 'object',
							description: "The sender's email address information.",
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the sender.',
								},
								address: {
									type: 'string',
									description: 'The email address of the sender.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The mailbox owner and sender of the message.',
					properties: {
						emailAddress: {
							type: 'object',
							description: 'The from email address information.',
							properties: {
								name: { type: 'string', description: 'The display name.' },
								address: { type: 'string', description: 'The email address.' },
							},
							required: [],
						},
					},
					required: [],
				},
				toRecipients: {
					type: 'array',
					description: 'The To: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				ccRecipients: {
					type: 'array',
					description: 'The Cc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				bccRecipients: {
					type: 'array',
					description: 'The Bcc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				replyTo: {
					type: 'array',
					description: 'The email addresses to use when replying.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				uniqueBody: {
					type: 'object',
					description:
						'The part of the body of the message that is unique to the current message. Requires `$select=uniqueBody`.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values are `text` and `html`.',
						},
						content: { type: 'string', description: 'The content of the unique body.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'replyToMessage',
		label: 'Reply to a message',
		description: 'Replies to the sender of a message.',
		context:
			'---\nname: replyToMessage\ndescription: Replies to the sender of a message.\n---\n\nReplies to the sender of a message. The reply is saved in the Sent Items folder.\nReturns 202 Accepted with no response body.\n\nThe `comment` field adds text to the reply body. To override the default recipients (original\nsender), specify `toRecipients`.\n\nFor reply-all functionality, use the [arbitraryCall](../arbitraryCall) endpoint with\n`POST v1.0/me/messages/{id}/replyAll`.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/message-reply) for full details.\n',
		accounts: { azure: { scope: ['Mail.Send'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The unique identifier of the message to reply to.',
				},
				comment: { type: 'string', description: 'A comment to include in the reply body.' },
				toRecipients: {
					type: 'array',
					description:
						'Override the To: recipients of the reply. If omitted, replies to the original sender.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				ccRecipients: {
					type: 'array',
					description: 'The Cc: recipients of the reply.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				bccRecipients: {
					type: 'array',
					description: 'The Bcc: recipients of the reply.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'sendDraft',
		label: 'Send a draft message',
		description: 'Sends a previously created draft message.',
		context:
			'---\nname: sendDraft\ndescription: Sends a previously created draft message.\n---\n\nSends a draft message that was previously created using [createDraft](../createDraft).\nThe draft must have at least one recipient in `toRecipients`, `ccRecipients`, or `bccRecipients`.\n\nThe message is then saved in the Sent Items folder. Returns 202 Accepted on success with no response body.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/message-send) for full details.\n',
		accounts: { azure: { scope: ['Mail.Send'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The unique identifier of the draft message to send.',
				},
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'sendMail',
		label: 'Send mail',
		description: 'Sends a new message in a single request.',
		context:
			'---\nname: sendMail\ndescription: Sends a new message in a single request.\n---\n\nCreates and sends a message in a single request. The message is saved in the Sent Items\nfolder by default (controlled by `saveToSentItems`). Returns 202 Accepted with no response body.\n\nAt least one recipient must be specified in `toRecipients`, `ccRecipients`, or `bccRecipients`.\n\nFor sending pre-built MIME messages (S/MIME signed or encrypted), use the\n[arbitraryCall](../arbitraryCall) endpoint with `Content-Type: text/plain` and the base64-encoded\nMIME content as the body, posting to `v1.0/me/sendMail`.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/user-sendmail) for full details.\n',
		accounts: { azure: { scope: ['Mail.Send'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				subject: { type: 'string', description: 'The subject of the message.' },
				body: {
					type: 'object',
					description: 'The body of the message.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The type of the content.',
							default: '',
							enum: ['', 'html', 'text'],
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				importance: {
					type: 'string',
					description: 'The importance of the message.',
					default: '',
					enum: ['', 'low', 'normal', 'high'],
				},
				toRecipients: {
					type: 'array',
					description: 'The To: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				ccRecipients: {
					type: 'array',
					description: 'The Cc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				bccRecipients: {
					type: 'array',
					description: 'The Bcc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				replyTo: {
					type: 'array',
					description: 'The email addresses to use when replying.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				from: {
					type: 'object',
					description:
						'The mailbox owner and sender of the message. Must correspond to the actual mailbox used.',
					properties: {
						emailAddress: {
							type: 'object',
							description: "The sender's email address.",
							properties: {
								address: { type: 'string', description: 'The email address.' },
								name: { type: 'string', description: 'The display name.' },
							},
							required: ['address'],
						},
					},
					required: [],
				},
				internetMessageHeaders: {
					type: 'array',
					description:
						'Custom internet message headers. Header names must start with `x-`.',
					items: {
						type: 'object',
						description: 'A custom internet message header.',
						properties: {
							name: { type: 'string', description: 'The header name.' },
							value: { type: 'string', description: 'The header value.' },
						},
						required: [],
					},
				},
				saveToSentItems: {
					type: 'boolean',
					description: 'Whether to save the message in Sent Items. Default: `true`.',
				},
			},
			required: [],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'microsoft-email',
		appVersion: 2,
		endpointName: 'updateDraft',
		label: 'Update a draft message',
		description: 'Updates the properties of a draft message.',
		context:
			'---\nname: updateDraft\ndescription: Updates the properties of a draft message.\n---\n\nUpdates the properties of a message. Only draft messages can have their content-related\nproperties (subject, body, recipients) updated. Non-draft messages can only update\n`isRead`, `categories`, `flag`, and `inferenceClassification`.\n\nPerform a GET first to retrieve current values — omitted fields may retain their previous\nvalues or be recalculated.\n\nSee the [Microsoft Graph API reference](https://learn.microsoft.com/en-us/graph/api/message-update) for full details.\n',
		accounts: { azure: { scope: ['Mail.ReadWrite'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The unique identifier of the draft message to update.',
				},
				subject: {
					type: 'string',
					description:
						'The subject of the message. Updatable only if the message is a draft.',
				},
				body: {
					type: 'object',
					description:
						'The body of the message. Updatable only if the message is a draft.',
					properties: {
						contentType: {
							type: 'string',
							description: 'The type of the content.',
							default: '',
							enum: ['', 'html', 'text'],
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				importance: {
					type: 'string',
					description: 'The importance of the message.',
					default: '',
					enum: ['', 'low', 'normal', 'high'],
				},
				toRecipients: {
					type: 'array',
					description: 'The To: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				ccRecipients: {
					type: 'array',
					description: 'The Cc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				bccRecipients: {
					type: 'array',
					description: 'The Bcc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				replyTo: {
					type: 'array',
					description: 'The email addresses to use when replying.',
					items: {
						type: 'object',
						description: 'A recipient.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									address: { type: 'string', description: 'The email address.' },
									name: { type: 'string', description: 'The display name.' },
								},
								required: ['address'],
							},
						},
						required: [],
					},
				},
				isRead: { type: 'boolean', description: 'Whether the message has been read.' },
				categories: {
					type: 'array',
					description: 'The categories associated with the message.',
					items: { type: 'string', description: 'A category name.' },
				},
				isDeliveryReceiptRequested: {
					type: 'boolean',
					description: 'Whether a delivery receipt is requested for the message.',
				},
				isReadReceiptRequested: {
					type: 'boolean',
					description: 'Whether a read receipt is requested for the message.',
				},
				inferenceClassification: {
					type: 'string',
					description: 'The classification of the message for the user.',
					default: '',
					enum: ['', 'focused', 'other'],
				},
				flag: {
					type: 'object',
					description:
						'The flag value that indicates the status, start date, due date, or completion date for the message.',
					properties: {
						flagStatus: {
							type: 'string',
							description: 'The flag status.',
							default: '',
							enum: ['', 'notFlagged', 'complete', 'flagged'],
						},
					},
					required: [],
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique identifier for the message.' },
				createdDateTime: {
					type: 'string',
					description: 'The date and time the message was created (ISO 8601, UTC).',
				},
				lastModifiedDateTime: {
					type: 'string',
					description: 'The date and time the message was last changed (ISO 8601, UTC).',
				},
				changeKey: { type: 'string', description: 'The version of the message.' },
				categories: {
					type: 'array',
					description: 'The categories associated with the message.',
					items: { type: 'string', description: 'A category name.' },
				},
				receivedDateTime: {
					type: 'string',
					description: 'The date and time the message was received (ISO 8601, UTC).',
				},
				sentDateTime: {
					type: 'string',
					description: 'The date and time the message was sent (ISO 8601, UTC).',
				},
				hasAttachments: {
					type: 'boolean',
					description:
						'Whether the message has attachments (excludes inline attachments).',
				},
				internetMessageId: {
					type: 'string',
					description:
						'The message ID in the format specified by [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt).',
				},
				internetMessageHeaders: {
					type: 'array',
					description:
						'A collection of message headers defined by [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt). Requires `$select` to retrieve.',
					items: {
						type: 'object',
						description: 'An internet message header.',
						properties: {
							name: { type: 'string', description: 'The header name.' },
							value: { type: 'string', description: 'The header value.' },
						},
						required: [],
					},
				},
				subject: { type: 'string', description: 'The subject of the message.' },
				body: {
					type: 'object',
					description: 'The body of the message. Can be in HTML or text format.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values are `text` and `html`.',
						},
						content: { type: 'string', description: 'The content of the body.' },
					},
					required: [],
				},
				bodyPreview: {
					type: 'string',
					description: 'The first 255 characters of the message body in text format.',
				},
				importance: {
					type: 'string',
					description:
						'The importance of the message. Possible values: `low`, `normal`, `high`.',
				},
				parentFolderId: {
					type: 'string',
					description: "The unique identifier for the message's parent mail folder.",
				},
				conversationId: {
					type: 'string',
					description: 'The ID of the conversation the email belongs to.',
				},
				conversationIndex: {
					type: 'string',
					description: 'The position of the message within the conversation (binary).',
				},
				isDeliveryReceiptRequested: {
					type: 'boolean',
					description: 'Whether a delivery receipt is requested for the message.',
				},
				isReadReceiptRequested: {
					type: 'boolean',
					description: 'Whether a read receipt is requested for the message.',
				},
				isRead: { type: 'boolean', description: 'Whether the message has been read.' },
				isDraft: { type: 'boolean', description: 'Whether the message is a draft.' },
				webLink: {
					type: 'string',
					description: 'The URL to open the message in Outlook on the web.',
				},
				inferenceClassification: {
					type: 'string',
					description:
						'The classification of the message for the user. Possible values: `focused`, `other`.',
				},
				flag: {
					type: 'object',
					description:
						'The flag value that indicates the status, start date, due date, or completion date for the message.',
					properties: {
						flagStatus: {
							type: 'string',
							description:
								'The flag status. Possible values: `notFlagged`, `complete`, `flagged`.',
						},
						startDateTime: {
							type: 'object',
							description: 'The start date and time of the flag.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
						dueDateTime: {
							type: 'object',
							description: 'The due date and time of the flag.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
						completedDateTime: {
							type: 'object',
							description: 'The date and time the flag was completed.',
							properties: {
								dateTime: {
									type: 'string',
									description:
										'A single point of time in a combined date and time representation.',
								},
								timeZone: { type: 'string', description: 'The time zone.' },
							},
							required: [],
						},
					},
					required: [],
				},
				sender: {
					type: 'object',
					description: 'The account that is used to generate the message.',
					properties: {
						emailAddress: {
							type: 'object',
							description: "The sender's email address information.",
							properties: {
								name: {
									type: 'string',
									description: 'The display name of the sender.',
								},
								address: {
									type: 'string',
									description: 'The email address of the sender.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				from: {
					type: 'object',
					description: 'The mailbox owner and sender of the message.',
					properties: {
						emailAddress: {
							type: 'object',
							description: 'The from email address information.',
							properties: {
								name: { type: 'string', description: 'The display name.' },
								address: { type: 'string', description: 'The email address.' },
							},
							required: [],
						},
					},
					required: [],
				},
				toRecipients: {
					type: 'array',
					description: 'The To: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				ccRecipients: {
					type: 'array',
					description: 'The Cc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				bccRecipients: {
					type: 'array',
					description: 'The Bcc: recipients for the message.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				replyTo: {
					type: 'array',
					description: 'The email addresses to use when replying.',
					items: {
						type: 'object',
						description: 'A recipient of the message.',
						properties: {
							emailAddress: {
								type: 'object',
								description: "The recipient's email address.",
								properties: {
									name: {
										type: 'string',
										description: 'The display name of the recipient.',
									},
									address: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				uniqueBody: {
					type: 'object',
					description:
						'The part of the body of the message that is unique to the current message. Requires `$select=uniqueBody`.',
					properties: {
						contentType: {
							type: 'string',
							description:
								'The type of the content. Possible values are `text` and `html`.',
						},
						content: { type: 'string', description: 'The content of the unique body.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
];
