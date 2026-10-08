// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Gmail API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://gmail.googleapis.com/gmail`. Provide the remaining path in the URL parameter\n(e.g. `/v1/users/me/messages`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Gmail API reference](https://developers.google.com/gmail/api/reference/rest) for available\nendpoints, required parameters, and response schemas.',
		accounts: { 'google-email': { scope: [] } },
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
						'Enter the part of the URL that comes after `https://gmail.googleapis.com/gmail`. For example, `/v1/users/me/messages`.',
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
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'batchModifyMessages',
		label: 'Batch modify messages',
		description:
			'Modifies the labels and the classification label values on the specified messages.',
		context:
			'---\nname: batchModifyMessages\ndescription: This endpoint can be used to update multiple messages\n---\n\nModifies the labels and the classification label values on the specified messages\nAt least one of Add label IDs, Remove label IDs, Add classification labels, or Remove classification label IDs must be provided for the endpoint to execute successfully',
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.modify'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				ids: {
					type: 'array',
					description: 'The ID of the message to modify.',
					items: { type: 'string' },
				},
				addLabelIds: {
					type: 'array',
					description:
						'A list of label IDs to add to this message. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.',
					items: { type: 'string' },
				},
				removeLabelIds: {
					type: 'array',
					description:
						'A list of label IDs to remove from this message. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.',
					items: { type: 'string' },
				},
				addClassificationLabels: {
					type: 'array',
					description:
						'A list of classification label values to add. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.',
					items: {
						type: 'object',
						properties: {
							labelId: {
								type: 'string',
								description:
									'The canonical or raw alphanumeric classification label ID.',
							},
							fields: {
								type: 'array',
								description: 'Field values for the given classification label ID.',
								items: {
									type: 'object',
									properties: {
										fieldId: {
											type: 'string',
											description:
												'The field ID for the classification label value.',
										},
										selection: {
											type: 'string',
											description:
												'Selection choice ID for the selection option.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				removeClassificationLabelIds: {
					type: 'array',
					description:
						'A list of classification label values to remove from this message. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.',
					items: { type: 'string' },
				},
			},
			required: ['ids'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'createDraft',
		label: 'Create a draft',
		description: 'Creates a new draft.',
		context:
			'---\nname: createDraft\ndescription: This endpoint can be used to create a draft message\n---\n\nCreates a draft with the DRAFT label',
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.modify'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				to: {
					type: 'array',
					description: 'Enter a recipient email address.',
					items: { type: 'string' },
				},
				subject: { type: 'string' },
				bodyType: {
					type: 'string',
					description: 'Select how you want to provide the body contents.',
					enum: ['rawHtml', 'collection'],
				},
				attachments: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							filename: {
								type: 'string',
								description:
									'File name, including the extension, e.g.`invoice.xml`.',
							},
							data: {
								type: 'string',
								description:
									'Binary or text data to be uploaded to a selected folder. [More information about working with files](kb://mapping/working-with-files.html).',
							},
						},
						required: ['filename', 'data'],
					},
				},
				from: {
					type: 'string',
					description:
						'If not provided, the email will be sent from the default account set in your Gmail settings. For example: `"John Doe" <johndoe@mail.com>`.',
				},
				cc: { type: 'array', items: { type: 'string' } },
				bcc: { type: 'array', items: { type: 'string' } },
				threadId: {
					type: 'string',
					description:
						'The ID of the thread the message belongs to. To add a message to a thread, the message must have the same subject as the original message.',
				},
				messageId: {
					type: 'string',
					description:
						'The `Message-Id` header that can be retrieved from the **Get a thread** endpoint.',
				},
			},
			required: ['to', 'bodyType'],
			allOf: [
				{
					if: { properties: { bodyType: { const: 'rawHtml' } } },
					then: {
						type: 'object',
						properties: {
							content: {
								type: 'string',
								description: 'You can use complete HTML code.',
							},
						},
						required: [],
					},
				},
				{
					if: { properties: { bodyType: { const: 'collection' } } },
					then: {
						type: 'object',
						properties: {
							contents: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description: 'You can use HTML tags.',
										},
										image: {
											type: 'object',
											properties: {
												filename: {
													type: 'string',
													description:
														'Image file name, including the extension, e.g.`image.jpeg`.',
												},
												data: {
													type: 'string',
													description:
														'Binary or text data to be uploaded to a selected folder. [More information about working with files](kb://mapping/working-with-files.html).',
												},
												width: { type: 'number' },
												height: { type: 'number' },
											},
											required: [],
										},
									},
									required: [],
								},
							},
							signature: { type: 'string', description: 'You can use HTML tags.' },
						},
						required: [],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The immutable ID of the draft.' },
				message: {
					type: 'object',
					description: 'The message content of the draft.',
					properties: {
						id: { type: 'string', description: 'The immutable ID of the message.' },
						threadId: {
							type: 'string',
							description: 'The ID of the thread the message belongs to.',
						},
						labelIds: {
							type: 'array',
							description: 'List of IDs of labels applied to this message.',
							items: { type: 'string' },
						},
						snippet: {
							type: 'string',
							description: 'A short part of the message text.',
						},
						historyId: {
							type: 'string',
							description:
								'The ID of the last history record that modified this message.',
						},
						internalDate: {
							type: 'string',
							description:
								'The internal message creation timestamp, which determines ordering in the inbox.',
						},
						payload: {
							type: 'object',
							description: 'The parsed email structure in the message parts.',
							properties: {
								partId: {
									type: 'string',
									description: 'The immutable ID of the message part.',
								},
								mimeType: {
									type: 'string',
									description: 'The MIME type of the message part.',
								},
								filename: {
									type: 'string',
									description: 'The filename of the attachment.',
								},
								headers: {
									type: 'array',
									description: 'List of headers on this message part.',
									items: {
										type: 'object',
										properties: {
											name: {
												type: 'string',
												description:
													'The name of the header before the `:` separator. For example, `To`.',
											},
											value: {
												type: 'string',
												description:
													'The value of the header after the `:` separator. For example, `someuser@example.com`.',
											},
										},
										required: [],
									},
								},
								body: {
									type: 'object',
									description:
										'The message part body for this part, which may be empty for container MIME message parts.',
									properties: {
										attachmentId: {
											type: 'string',
											description:
												'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
										},
										size: {
											type: 'number',
											description:
												'Number of bytes for the message part data.',
										},
										data: {
											type: 'string',
											description:
												'The body data of a MIME message part as a base64url encoded string.',
										},
									},
									required: [],
								},
								parts: {
									type: 'array',
									description: 'The child MIME message parts of this part.',
									items: {
										type: 'object',
										properties: {
											partId: {
												type: 'string',
												description:
													'The immutable ID of the message part.',
											},
											mimeType: {
												type: 'string',
												description: 'The MIME type of the message part.',
											},
											filename: {
												type: 'string',
												description: 'The filename of the attachment.',
											},
											headers: {
												type: 'array',
												description:
													'List of headers on this message part.',
												items: {
													type: 'object',
													properties: {
														name: {
															type: 'string',
															description:
																'The name of the header before the `:` separator. For example, `To`.',
														},
														value: {
															type: 'string',
															description:
																'The value of the header after the `:` separator. For example, `someuser@example.com`.',
														},
													},
													required: [],
												},
											},
											body: {
												type: 'object',
												description:
													'The message part body for this part, which may be empty for container MIME message parts.',
												properties: {
													attachmentId: {
														type: 'string',
														description:
															'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
													},
													size: {
														type: 'number',
														description:
															'Number of bytes for the message part data.',
													},
													data: {
														type: 'string',
														description:
															'The body data of a MIME message part as a base64url encoded string.',
													},
												},
												required: [],
											},
											parts: {
												type: 'array',
												description:
													'The child MIME message parts of this part.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						sizeEstimate: {
							type: 'number',
							description: 'Estimated size in bytes of the message.',
						},
						raw: {
							type: 'string',
							description:
								'The entire email message in an RFC 2822 formatted and base64url encoded string.',
						},
						classificationLabelValues: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									labelId: {
										type: 'string',
										description:
											'The canonical or raw alphanumeric classification label ID.',
									},
									fields: {
										type: 'array',
										description:
											'Field values for the given classification label ID.',
										items: {
											type: 'object',
											properties: {
												fieldId: {
													type: 'string',
													description:
														'The field ID for the classification label value.',
												},
												selection: {
													type: 'string',
													description:
														'Selection choice ID for the selection option.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'getAttachment',
		label: 'Get an attachment',
		description: 'Returns information about a specific attachment.',
		context:
			"---\nname: getAttachment\ndescription: This endpoint can be used to fetch an attachment by ID\n---\n\nRetrieves an attachment from the user's message by ID",
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.readonly'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The ID of the message containing the attachment.',
				},
				attachmentId: { type: 'string', description: 'The ID of the attachment.' },
			},
			required: ['id', 'attachmentId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				size: { type: 'number', description: 'Number of bytes for the message part data.' },
				data: {
					type: 'string',
					description:
						'The body data of a MIME message part as a base64url encoded string.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'getMessage',
		label: 'Get a message',
		description: 'Returns information about a specific message.',
		context:
			"---\nname: getMessage\ndescription: This endpoint can be used to fetch a message by ID\n---\n\nRetrieves a message from the user's mailbox by ID",
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.readonly'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the message to retrieve.' },
				format: {
					type: 'string',
					description: 'The format to return the message in.',
					default: '',
					enum: ['', 'minimal', 'full', 'raw', 'metadata'],
				},
				metadataHeaders: {
					type: 'array',
					description:
						'When given and format is metadata, only include headers specified.',
					items: { type: 'string' },
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The immutable ID of the message.' },
				threadId: {
					type: 'string',
					description: 'The ID of the thread the message belongs to.',
				},
				labelIds: {
					type: 'array',
					description: 'List of IDs of labels applied to this message.',
					items: { type: 'string' },
				},
				snippet: { type: 'string', description: 'A short part of the message text.' },
				historyId: {
					type: 'string',
					description: 'The ID of the last history record that modified this message.',
				},
				internalDate: {
					type: 'string',
					description:
						'The internal message creation timestamp, which determines ordering in the inbox.',
				},
				payload: {
					type: 'object',
					description: 'The parsed email structure in the message parts.',
					properties: {
						partId: {
							type: 'string',
							description: 'The immutable ID of the message part.',
						},
						mimeType: {
							type: 'string',
							description: 'The MIME type of the message part.',
						},
						filename: {
							type: 'string',
							description: 'The filename of the attachment.',
						},
						headers: {
							type: 'array',
							description: 'List of headers on this message part.',
							items: {
								type: 'object',
								properties: {
									name: {
										type: 'string',
										description:
											'The name of the header before the `:` separator. For example, `To`.',
									},
									value: {
										type: 'string',
										description:
											'The value of the header after the `:` separator. For example, `someuser@example.com`.',
									},
								},
								required: [],
							},
						},
						body: {
							type: 'object',
							description:
								'The message part body for this part, which may be empty for container MIME message parts.',
							properties: {
								attachmentId: {
									type: 'string',
									description:
										'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
								},
								size: {
									type: 'number',
									description: 'Number of bytes for the message part data.',
								},
								data: {
									type: 'string',
									description:
										'The body data of a MIME message part as a base64url encoded string.',
								},
							},
							required: [],
						},
						parts: {
							type: 'array',
							description: 'The child MIME message parts of this part.',
							items: {
								type: 'object',
								properties: {
									partId: {
										type: 'string',
										description: 'The immutable ID of the message part.',
									},
									mimeType: {
										type: 'string',
										description: 'The MIME type of the message part.',
									},
									filename: {
										type: 'string',
										description: 'The filename of the attachment.',
									},
									headers: {
										type: 'array',
										description: 'List of headers on this message part.',
										items: {
											type: 'object',
											properties: {
												name: {
													type: 'string',
													description:
														'The name of the header before the `:` separator. For example, `To`.',
												},
												value: {
													type: 'string',
													description:
														'The value of the header after the `:` separator. For example, `someuser@example.com`.',
												},
											},
											required: [],
										},
									},
									body: {
										type: 'object',
										description:
											'The message part body for this part, which may be empty for container MIME message parts.',
										properties: {
											attachmentId: {
												type: 'string',
												description:
													'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
											},
											size: {
												type: 'number',
												description:
													'Number of bytes for the message part data.',
											},
											data: {
												type: 'string',
												description:
													'The body data of a MIME message part as a base64url encoded string.',
											},
										},
										required: [],
									},
									parts: {
										type: 'array',
										description: 'The child MIME message parts of this part.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				sizeEstimate: {
					type: 'number',
					description: 'Estimated size in bytes of the message.',
				},
				raw: {
					type: 'string',
					description:
						'The entire email message in an RFC 2822 formatted and base64url encoded string.',
				},
				classificationLabelValues: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							labelId: {
								type: 'string',
								description:
									'The canonical or raw alphanumeric classification label ID.',
							},
							fields: {
								type: 'array',
								description: 'Field values for the given classification label ID.',
								items: {
									type: 'object',
									properties: {
										fieldId: {
											type: 'string',
											description:
												'The field ID for the classification label value.',
										},
										selection: {
											type: 'string',
											description:
												'Selection choice ID for the selection option.',
										},
									},
									required: [],
								},
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
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'getThread',
		label: 'Get a thread',
		description: 'Returns information about a specific thread.',
		context:
			'---\nname: getThread\ndescription: This endpoint can be used to fetch a thread by ID\n---\n\nRetrieves a thread by ID',
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.readonly'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the thread to retrieve.' },
				format: {
					type: 'string',
					description: 'The format to return the messages in.',
					default: '',
					enum: ['', 'minimal', 'full', 'metadata'],
				},
				metadataHeaders: {
					type: 'array',
					description:
						'When given and format is metadata, only include headers specified.',
					items: { type: 'string' },
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the thread.' },
				snippet: { type: 'string', description: 'A short part of the message text.' },
				historyId: {
					type: 'string',
					description: 'The ID of the last history record that modified this thread.',
				},
				messages: {
					type: 'array',
					description: 'The list of messages in the thread.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: 'The immutable ID of the message.' },
							threadId: {
								type: 'string',
								description: 'The ID of the thread the message belongs to.',
							},
							labelIds: {
								type: 'array',
								description: 'List of IDs of labels applied to this message.',
								items: { type: 'string' },
							},
							snippet: {
								type: 'string',
								description: 'A short part of the message text.',
							},
							historyId: {
								type: 'string',
								description:
									'The ID of the last history record that modified this message.',
							},
							internalDate: {
								type: 'string',
								description:
									'The internal message creation timestamp, which determines ordering in the inbox.',
							},
							payload: {
								type: 'object',
								description: 'The parsed email structure in the message parts.',
								properties: {
									partId: {
										type: 'string',
										description: 'The immutable ID of the message part.',
									},
									mimeType: {
										type: 'string',
										description: 'The MIME type of the message part.',
									},
									filename: {
										type: 'string',
										description: 'The filename of the attachment.',
									},
									headers: {
										type: 'array',
										description: 'List of headers on this message part.',
										items: {
											type: 'object',
											properties: {
												name: {
													type: 'string',
													description:
														'The name of the header before the `:` separator. For example, `To`.',
												},
												value: {
													type: 'string',
													description:
														'The value of the header after the `:` separator. For example, `someuser@example.com`.',
												},
											},
											required: [],
										},
									},
									body: {
										type: 'object',
										description:
											'The message part body for this part, which may be empty for container MIME message parts.',
										properties: {
											attachmentId: {
												type: 'string',
												description:
													'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
											},
											size: {
												type: 'number',
												description:
													'Number of bytes for the message part data.',
											},
											data: {
												type: 'string',
												description:
													'The body data of a MIME message part as a base64url encoded string.',
											},
										},
										required: [],
									},
									parts: {
										type: 'array',
										description: 'The child MIME message parts of this part.',
										items: {
											type: 'object',
											properties: {
												partId: {
													type: 'string',
													description:
														'The immutable ID of the message part.',
												},
												mimeType: {
													type: 'string',
													description:
														'The MIME type of the message part.',
												},
												filename: {
													type: 'string',
													description: 'The filename of the attachment.',
												},
												headers: {
													type: 'array',
													description:
														'List of headers on this message part.',
													items: {
														type: 'object',
														properties: {
															name: {
																type: 'string',
																description:
																	'The name of the header before the `:` separator. For example, `To`.',
															},
															value: {
																type: 'string',
																description:
																	'The value of the header after the `:` separator. For example, `someuser@example.com`.',
															},
														},
														required: [],
													},
												},
												body: {
													type: 'object',
													description:
														'The message part body for this part, which may be empty for container MIME message parts.',
													properties: {
														attachmentId: {
															type: 'string',
															description:
																'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
														},
														size: {
															type: 'number',
															description:
																'Number of bytes for the message part data.',
														},
														data: {
															type: 'string',
															description:
																'The body data of a MIME message part as a base64url encoded string.',
														},
													},
													required: [],
												},
												parts: {
													type: 'array',
													description:
														'The child MIME message parts of this part.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							sizeEstimate: {
								type: 'number',
								description: 'Estimated size in bytes of the message.',
							},
							raw: {
								type: 'string',
								description:
									'The entire email message in an RFC 2822 formatted and base64url encoded string.',
							},
							classificationLabelValues: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										labelId: {
											type: 'string',
											description:
												'The canonical or raw alphanumeric classification label ID.',
										},
										fields: {
											type: 'array',
											description:
												'Field values for the given classification label ID.',
											items: {
												type: 'object',
												properties: {
													fieldId: {
														type: 'string',
														description:
															'The field ID for the classification label value.',
													},
													selection: {
														type: 'string',
														description:
															'Selection choice ID for the selection option.',
													},
												},
												required: [],
											},
										},
									},
									required: [],
								},
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
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'listHistory',
		label: 'List history',
		description: 'Returns a list of the history of all changes to the given mailbox.',
		context:
			'---\nname: listHistory\ndescription: This endpoint can be used to fetch all changes in the given mailbox\n---\n\nReturns a list of the history of all changes to the given mailbox.',
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.readonly'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				startHistoryId: {
					type: 'string',
					description:
						'Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous list response.',
				},
				labelId: {
					type: 'string',
					description: 'Only return messages with a label matching the ID.',
				},
				historyTypes: {
					type: 'string',
					description: 'History types to be returned.',
					default: '',
					enum: ['', 'messageAdded', 'messageDeleted', 'labelAdded', 'labelRemoved'],
				},
				pageToken: {
					type: 'string',
					description: 'Page token to retrieve a specific page of results in the list.',
				},
				maxResults: {
					type: 'number',
					description: 'Maximum number of history records to return.',
					default: 100,
				},
			},
			required: ['startHistoryId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				history: {
					type: 'array',
					description: 'List of history records.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: 'The mailbox sequence ID.' },
							messages: {
								type: 'array',
								description: 'List of messages changed in this history record.',
								items: {
									type: 'object',
									properties: {
										id: {
											type: 'string',
											description: 'The immutable ID of the message.',
										},
										threadId: {
											type: 'string',
											description:
												'The ID of the thread the message belongs to.',
										},
									},
									required: [],
								},
							},
							messagesAdded: {
								type: 'array',
								description:
									'Messages added to the mailbox in this history record.',
								items: {
									type: 'object',
									properties: {
										message: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
													description: 'The immutable ID of the message.',
												},
												threadId: {
													type: 'string',
													description:
														'The ID of the thread the message belongs to.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							messagesDeleted: {
								type: 'array',
								description:
									'Messages deleted from the mailbox in this history record.',
								items: {
									type: 'object',
									properties: {
										message: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
													description: 'The immutable ID of the message.',
												},
												threadId: {
													type: 'string',
													description:
														'The ID of the thread the message belongs to.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							labelsAdded: {
								type: 'array',
								description: 'Labels added to messages in this history record.',
								items: {
									type: 'object',
									properties: {
										message: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
													description: 'The immutable ID of the message.',
												},
												threadId: {
													type: 'string',
													description:
														'The ID of the thread the message belongs to.',
												},
											},
											required: [],
										},
										labelIds: { type: 'array', items: { type: 'string' } },
									},
									required: [],
								},
							},
							labelsRemoved: {
								type: 'array',
								description: 'Labels removed from messages in this history record.',
								items: {
									type: 'object',
									properties: {
										message: {
											type: 'object',
											properties: {
												id: {
													type: 'string',
													description: 'The immutable ID of the message.',
												},
												threadId: {
													type: 'string',
													description:
														'The ID of the thread the message belongs to.',
												},
											},
											required: [],
										},
										labelIds: { type: 'array', items: { type: 'string' } },
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				nextPageToken: {
					type: 'string',
					description: 'Page token to retrieve the next page of results in the list.',
				},
				historyId: {
					type: 'string',
					description: "The ID of the mailbox's current history record.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'listLabels',
		label: 'List labels',
		description: 'Returns a list of labels.',
		context:
			"---\nname: listLabels\ndescription: This endpoint can be used to fetch all labels in the user's mailbox\n---\n\nLists all labels in the user's mailbox",
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.readonly'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				labels: {
					type: 'array',
					description: 'List of labels.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: 'The immutable ID of the label.' },
							name: { type: 'string', description: 'The display name of the label.' },
							messageListVisibility: {
								type: 'string',
								description:
									'The visibility of messages with this label in the message list in the Gmail web interface.',
							},
							labelListVisibility: {
								type: 'string',
								description:
									'The visibility of the label in the label list in the Gmail web interface.',
							},
							type: { type: 'string', description: 'The owner type for the label.' },
							messagesTotal: {
								type: 'number',
								description: 'The total number of messages with the label.',
							},
							messagesUnread: {
								type: 'number',
								description: 'The number of unread messages with the label.',
							},
							threadsTotal: {
								type: 'number',
								description: 'The total number of threads with the label.',
							},
							threadsUnread: {
								type: 'number',
								description: 'The number of unread threads with the label.',
							},
							color: {
								type: 'object',
								description: 'The color to assign to the label.',
								properties: {
									textColor: {
										type: 'string',
										description:
											'The text color of the label, represented as hex string.',
									},
									backgroundColor: {
										type: 'string',
										description:
											'The background color represented as hex string.',
									},
								},
								required: [],
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
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'listMessages',
		label: 'List messages',
		description: 'Returns a list of messages filtered by query.',
		context:
			"---\nname: listMessages\ndescription: This endpoint can be used to fetch all messages in the user's mailbox\n---\n\nLists all messages in the user's mailbox filtered by query",
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.readonly'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				q: {
					type: 'string',
					description: 'The query is used to filter the returned messages.',
				},
				labelIds: { type: 'array', items: { type: 'string' } },
				includeSpamTrash: {
					type: 'boolean',
					description: 'Include messages from spam and trash in the results.',
				},
				pageToken: {
					type: 'string',
					description: 'Page token to retrieve a specific page of results in the list.',
				},
				maxResults: {
					type: 'number',
					description: 'Maximum number of messages to return.',
					default: 100,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				messages: {
					type: 'array',
					description: 'List of messages.',
					items: {
						type: 'object',
						properties: {
							id: { type: 'string', description: 'The immutable ID of the message.' },
							threadId: {
								type: 'string',
								description: 'The ID of the thread the message belongs to.',
							},
						},
						required: [],
					},
				},
				nextPageToken: {
					type: 'string',
					description: 'Token to retrieve the next page of results in the list.',
				},
				resultSizeEstimate: {
					type: 'number',
					description: 'Estimated total number of results.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'modifyMessageLabels',
		label: 'Update message labels',
		description: 'Updates labels of an existing message.',
		context:
			'---\nname: modifyMessageLabels\ndescription: This endpoint can be used to update labels of an existing message\n---\n\nUpdates labels of an existing message\nAt least one of Add label IDs, Remove label IDs, Add classification labels, or Remove classification label IDs must be provided for the endpoint to execute successfully',
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.modify'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the message to modify.' },
				addLabelIds: {
					type: 'array',
					description:
						'A list of label IDs to add to this message. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.',
					items: { type: 'string' },
				},
				removeLabelIds: {
					type: 'array',
					description:
						'A list of label IDs to remove from this message. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.',
					items: { type: 'string' },
				},
				addClassificationLabels: {
					type: 'array',
					description:
						'A list of classification label values to add. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.',
					items: {
						type: 'object',
						properties: {
							labelId: {
								type: 'string',
								description:
									'The canonical or raw alphanumeric classification label ID.',
							},
							fields: {
								type: 'array',
								description: 'Field values for the given classification label ID.',
								items: {
									type: 'object',
									properties: {
										fieldId: {
											type: 'string',
											description:
												'The field ID for the classification label value.',
										},
										selection: {
											type: 'string',
											description:
												'Selection choice ID for the selection option.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				removeClassificationLabelIds: {
					type: 'array',
					description:
						'A list of classification label values to remove from this message. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.',
					items: { type: 'string' },
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The immutable ID of the message.' },
				threadId: {
					type: 'string',
					description: 'The ID of the thread the message belongs to.',
				},
				labelIds: {
					type: 'array',
					description: 'List of IDs of labels applied to this message.',
					items: { type: 'string' },
				},
				snippet: { type: 'string', description: 'A short part of the message text.' },
				historyId: {
					type: 'string',
					description: 'The ID of the last history record that modified this message.',
				},
				internalDate: {
					type: 'string',
					description:
						'The internal message creation timestamp, which determines ordering in the inbox.',
				},
				payload: {
					type: 'object',
					description: 'The parsed email structure in the message parts.',
					properties: {
						partId: {
							type: 'string',
							description: 'The immutable ID of the message part.',
						},
						mimeType: {
							type: 'string',
							description: 'The MIME type of the message part.',
						},
						filename: {
							type: 'string',
							description: 'The filename of the attachment.',
						},
						headers: {
							type: 'array',
							description: 'List of headers on this message part.',
							items: {
								type: 'object',
								properties: {
									name: {
										type: 'string',
										description:
											'The name of the header before the `:` separator. For example, `To`.',
									},
									value: {
										type: 'string',
										description:
											'The value of the header after the `:` separator. For example, `someuser@example.com`.',
									},
								},
								required: [],
							},
						},
						body: {
							type: 'object',
							description:
								'The message part body for this part, which may be empty for container MIME message parts.',
							properties: {
								attachmentId: {
									type: 'string',
									description:
										'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
								},
								size: {
									type: 'number',
									description: 'Number of bytes for the message part data.',
								},
								data: {
									type: 'string',
									description:
										'The body data of a MIME message part as a base64url encoded string.',
								},
							},
							required: [],
						},
						parts: {
							type: 'array',
							description: 'The child MIME message parts of this part.',
							items: {
								type: 'object',
								properties: {
									partId: {
										type: 'string',
										description: 'The immutable ID of the message part.',
									},
									mimeType: {
										type: 'string',
										description: 'The MIME type of the message part.',
									},
									filename: {
										type: 'string',
										description: 'The filename of the attachment.',
									},
									headers: {
										type: 'array',
										description: 'List of headers on this message part.',
										items: {
											type: 'object',
											properties: {
												name: {
													type: 'string',
													description:
														'The name of the header before the `:` separator. For example, `To`.',
												},
												value: {
													type: 'string',
													description:
														'The value of the header after the `:` separator. For example, `someuser@example.com`.',
												},
											},
											required: [],
										},
									},
									body: {
										type: 'object',
										description:
											'The message part body for this part, which may be empty for container MIME message parts.',
										properties: {
											attachmentId: {
												type: 'string',
												description:
													'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
											},
											size: {
												type: 'number',
												description:
													'Number of bytes for the message part data.',
											},
											data: {
												type: 'string',
												description:
													'The body data of a MIME message part as a base64url encoded string.',
											},
										},
										required: [],
									},
									parts: {
										type: 'array',
										description: 'The child MIME message parts of this part.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				sizeEstimate: {
					type: 'number',
					description: 'Estimated size in bytes of the message.',
				},
				raw: {
					type: 'string',
					description:
						'The entire email message in an RFC 2822 formatted and base64url encoded string.',
				},
				classificationLabelValues: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							labelId: {
								type: 'string',
								description:
									'The canonical or raw alphanumeric classification label ID.',
							},
							fields: {
								type: 'array',
								description: 'Field values for the given classification label ID.',
								items: {
									type: 'object',
									properties: {
										fieldId: {
											type: 'string',
											description:
												'The field ID for the classification label value.',
										},
										selection: {
											type: 'string',
											description:
												'Selection choice ID for the selection option.',
										},
									},
									required: [],
								},
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
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'sendDraft',
		label: 'Send a draft',
		description: 'Sends a draft message.',
		context:
			'---\nname: sendDraft\ndescription: This endpoint can be used to send a draft message\n---\n\nSends the specified, existing draft to the recipients in the TO, CC, and BCC headers.',
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.modify'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				draftId: { type: 'string', description: 'The ID of the draft to send.' },
			},
			required: ['draftId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The immutable ID of the message.' },
				threadId: {
					type: 'string',
					description: 'The ID of the thread the message belongs to.',
				},
				labelIds: {
					type: 'array',
					description: 'List of IDs of labels applied to this message.',
					items: { type: 'string' },
				},
				snippet: { type: 'string', description: 'A short part of the message text.' },
				historyId: {
					type: 'string',
					description: 'The ID of the last history record that modified this message.',
				},
				internalDate: {
					type: 'string',
					description:
						'The internal message creation timestamp, which determines ordering in the inbox.',
				},
				payload: {
					type: 'object',
					description: 'The parsed email structure in the message parts.',
					properties: {
						partId: {
							type: 'string',
							description: 'The immutable ID of the message part.',
						},
						mimeType: {
							type: 'string',
							description: 'The MIME type of the message part.',
						},
						filename: {
							type: 'string',
							description: 'The filename of the attachment.',
						},
						headers: {
							type: 'array',
							description: 'List of headers on this message part.',
							items: {
								type: 'object',
								properties: {
									name: {
										type: 'string',
										description:
											'The name of the header before the `:` separator. For example, `To`.',
									},
									value: {
										type: 'string',
										description:
											'The value of the header after the `:` separator. For example, `someuser@example.com`.',
									},
								},
								required: [],
							},
						},
						body: {
							type: 'object',
							description:
								'The message part body for this part, which may be empty for container MIME message parts.',
							properties: {
								attachmentId: {
									type: 'string',
									description:
										'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
								},
								size: {
									type: 'number',
									description: 'Number of bytes for the message part data.',
								},
								data: {
									type: 'string',
									description:
										'The body data of a MIME message part as a base64url encoded string.',
								},
							},
							required: [],
						},
						parts: {
							type: 'array',
							description: 'The child MIME message parts of this part.',
							items: {
								type: 'object',
								properties: {
									partId: {
										type: 'string',
										description: 'The immutable ID of the message part.',
									},
									mimeType: {
										type: 'string',
										description: 'The MIME type of the message part.',
									},
									filename: {
										type: 'string',
										description: 'The filename of the attachment.',
									},
									headers: {
										type: 'array',
										description: 'List of headers on this message part.',
										items: {
											type: 'object',
											properties: {
												name: {
													type: 'string',
													description:
														'The name of the header before the `:` separator. For example, `To`.',
												},
												value: {
													type: 'string',
													description:
														'The value of the header after the `:` separator. For example, `someuser@example.com`.',
												},
											},
											required: [],
										},
									},
									body: {
										type: 'object',
										description:
											'The message part body for this part, which may be empty for container MIME message parts.',
										properties: {
											attachmentId: {
												type: 'string',
												description:
													'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
											},
											size: {
												type: 'number',
												description:
													'Number of bytes for the message part data.',
											},
											data: {
												type: 'string',
												description:
													'The body data of a MIME message part as a base64url encoded string.',
											},
										},
										required: [],
									},
									parts: {
										type: 'array',
										description: 'The child MIME message parts of this part.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				sizeEstimate: {
					type: 'number',
					description: 'Estimated size in bytes of the message.',
				},
				raw: {
					type: 'string',
					description:
						'The entire email message in an RFC 2822 formatted and base64url encoded string.',
				},
				classificationLabelValues: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							labelId: {
								type: 'string',
								description:
									'The canonical or raw alphanumeric classification label ID.',
							},
							fields: {
								type: 'array',
								description: 'Field values for the given classification label ID.',
								items: {
									type: 'object',
									properties: {
										fieldId: {
											type: 'string',
											description:
												'The field ID for the classification label value.',
										},
										selection: {
											type: 'string',
											description:
												'Selection choice ID for the selection option.',
										},
									},
									required: [],
								},
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
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'sendMessage',
		label: 'Send a message',
		description: 'Sends a new message.',
		context:
			'---\nname: sendMessage\ndescription: This endpoint can be used to send a message\n---\n\nSends a new message\nIf you want to send a message as a reply to an existing message, use the Message ID field',
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.send'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				to: {
					type: 'array',
					description: 'Enter a recipient email address.',
					items: { type: 'string' },
				},
				subject: { type: 'string' },
				bodyType: {
					type: 'string',
					description: 'Select how you want to provide the body contents.',
					enum: ['rawHtml', 'collection'],
				},
				attachments: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							filename: {
								type: 'string',
								description:
									'File name, including the extension, e.g.`invoice.xml`.',
							},
							data: {
								type: 'string',
								description:
									'Binary or text data to be uploaded to a selected folder. [More information about working with files](kb://mapping/working-with-files.html).',
							},
						},
						required: ['filename', 'data'],
					},
				},
				from: {
					type: 'string',
					description: 'For example: `"John Doe" <johndoe@mail.com>`.',
				},
				cc: { type: 'array', items: { type: 'string' } },
				bcc: { type: 'array', items: { type: 'string' } },
				emailHeaders: {
					type: 'array',
					items: {
						type: 'object',
						properties: { key: { type: 'string' }, value: { type: 'string' } },
						required: ['key'],
					},
				},
				messageId: {
					type: 'string',
					description:
						'The `Message-Id` header that can be retrieved from the **Get a thread** endpoint. Used to send a message as a reply to an existing message.',
				},
			},
			required: ['to', 'bodyType'],
			allOf: [
				{
					if: { properties: { bodyType: { const: 'rawHtml' } } },
					then: {
						type: 'object',
						properties: {
							content: {
								type: 'string',
								description: 'You can use complete HTML code.',
							},
						},
						required: [],
					},
				},
				{
					if: { properties: { bodyType: { const: 'collection' } } },
					then: {
						type: 'object',
						properties: {
							contents: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description: 'You can use HTML tags.',
										},
										image: {
											type: 'object',
											properties: {
												filename: {
													type: 'string',
													description:
														'Image file name, including the extension, e.g.`image.jpeg`.',
												},
												data: {
													type: 'string',
													description:
														'Binary or text data to be uploaded to a selected folder. [More information about working with files](kb://mapping/working-with-files.html).',
												},
												width: { type: 'number' },
												height: { type: 'number' },
											},
											required: [],
										},
									},
									required: [],
								},
							},
							signature: { type: 'string', description: 'You can use HTML tags.' },
						},
						required: [],
					},
				},
			],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The immutable ID of the message.' },
				threadId: {
					type: 'string',
					description: 'The ID of the thread the message belongs to.',
				},
				labelIds: {
					type: 'array',
					description: 'List of IDs of labels applied to this message.',
					items: { type: 'string' },
				},
				snippet: { type: 'string', description: 'A short part of the message text.' },
				historyId: {
					type: 'string',
					description: 'The ID of the last history record that modified this message.',
				},
				internalDate: {
					type: 'string',
					description:
						'The internal message creation timestamp, which determines ordering in the inbox.',
				},
				payload: {
					type: 'object',
					description: 'The parsed email structure in the message parts.',
					properties: {
						partId: {
							type: 'string',
							description: 'The immutable ID of the message part.',
						},
						mimeType: {
							type: 'string',
							description: 'The MIME type of the message part.',
						},
						filename: {
							type: 'string',
							description: 'The filename of the attachment.',
						},
						headers: {
							type: 'array',
							description: 'List of headers on this message part.',
							items: {
								type: 'object',
								properties: {
									name: {
										type: 'string',
										description:
											'The name of the header before the `:` separator. For example, `To`.',
									},
									value: {
										type: 'string',
										description:
											'The value of the header after the `:` separator. For example, `someuser@example.com`.',
									},
								},
								required: [],
							},
						},
						body: {
							type: 'object',
							description:
								'The message part body for this part, which may be empty for container MIME message parts.',
							properties: {
								attachmentId: {
									type: 'string',
									description:
										'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
								},
								size: {
									type: 'number',
									description: 'Number of bytes for the message part data.',
								},
								data: {
									type: 'string',
									description:
										'The body data of a MIME message part as a base64url encoded string.',
								},
							},
							required: [],
						},
						parts: {
							type: 'array',
							description: 'The child MIME message parts of this part.',
							items: {
								type: 'object',
								properties: {
									partId: {
										type: 'string',
										description: 'The immutable ID of the message part.',
									},
									mimeType: {
										type: 'string',
										description: 'The MIME type of the message part.',
									},
									filename: {
										type: 'string',
										description: 'The filename of the attachment.',
									},
									headers: {
										type: 'array',
										description: 'List of headers on this message part.',
										items: {
											type: 'object',
											properties: {
												name: {
													type: 'string',
													description:
														'The name of the header before the `:` separator. For example, `To`.',
												},
												value: {
													type: 'string',
													description:
														'The value of the header after the `:` separator. For example, `someuser@example.com`.',
												},
											},
											required: [],
										},
									},
									body: {
										type: 'object',
										description:
											'The message part body for this part, which may be empty for container MIME message parts.',
										properties: {
											attachmentId: {
												type: 'string',
												description:
													'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
											},
											size: {
												type: 'number',
												description:
													'Number of bytes for the message part data.',
											},
											data: {
												type: 'string',
												description:
													'The body data of a MIME message part as a base64url encoded string.',
											},
										},
										required: [],
									},
									parts: {
										type: 'array',
										description: 'The child MIME message parts of this part.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				sizeEstimate: {
					type: 'number',
					description: 'Estimated size in bytes of the message.',
				},
				raw: {
					type: 'string',
					description:
						'The entire email message in an RFC 2822 formatted and base64url encoded string.',
				},
				classificationLabelValues: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							labelId: {
								type: 'string',
								description:
									'The canonical or raw alphanumeric classification label ID.',
							},
							fields: {
								type: 'array',
								description: 'Field values for the given classification label ID.',
								items: {
									type: 'object',
									properties: {
										fieldId: {
											type: 'string',
											description:
												'The field ID for the classification label value.',
										},
										selection: {
											type: 'string',
											description:
												'Selection choice ID for the selection option.',
										},
									},
									required: [],
								},
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
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'trashMessage',
		label: 'Delete a message',
		description: 'Deletes an existing message.',
		context:
			"---\nname: trashMessage\ndescription: This endpoint can be used to delete a message by ID\n---\n\nDeletes a message from the user's mailbox by ID",
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.modify'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: { id: { type: 'string', description: 'The ID of the message to remove.' } },
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The immutable ID of the message.' },
				threadId: {
					type: 'string',
					description: 'The ID of the thread the message belongs to.',
				},
				labelIds: {
					type: 'array',
					description: 'List of IDs of labels applied to this message.',
					items: { type: 'string' },
				},
				snippet: { type: 'string', description: 'A short part of the message text.' },
				historyId: {
					type: 'string',
					description: 'The ID of the last history record that modified this message.',
				},
				internalDate: {
					type: 'string',
					description:
						'The internal message creation timestamp, which determines ordering in the inbox.',
				},
				payload: {
					type: 'object',
					description: 'The parsed email structure in the message parts.',
					properties: {
						partId: {
							type: 'string',
							description: 'The immutable ID of the message part.',
						},
						mimeType: {
							type: 'string',
							description: 'The MIME type of the message part.',
						},
						filename: {
							type: 'string',
							description: 'The filename of the attachment.',
						},
						headers: {
							type: 'array',
							description: 'List of headers on this message part.',
							items: {
								type: 'object',
								properties: {
									name: {
										type: 'string',
										description:
											'The name of the header before the `:` separator. For example, `To`.',
									},
									value: {
										type: 'string',
										description:
											'The value of the header after the `:` separator. For example, `someuser@example.com`.',
									},
								},
								required: [],
							},
						},
						body: {
							type: 'object',
							description:
								'The message part body for this part, which may be empty for container MIME message parts.',
							properties: {
								attachmentId: {
									type: 'string',
									description:
										'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
								},
								size: {
									type: 'number',
									description: 'Number of bytes for the message part data.',
								},
								data: {
									type: 'string',
									description:
										'The body data of a MIME message part as a base64url encoded string.',
								},
							},
							required: [],
						},
						parts: {
							type: 'array',
							description: 'The child MIME message parts of this part.',
							items: {
								type: 'object',
								properties: {
									partId: {
										type: 'string',
										description: 'The immutable ID of the message part.',
									},
									mimeType: {
										type: 'string',
										description: 'The MIME type of the message part.',
									},
									filename: {
										type: 'string',
										description: 'The filename of the attachment.',
									},
									headers: {
										type: 'array',
										description: 'List of headers on this message part.',
										items: {
											type: 'object',
											properties: {
												name: {
													type: 'string',
													description:
														'The name of the header before the `:` separator. For example, `To`.',
												},
												value: {
													type: 'string',
													description:
														'The value of the header after the `:` separator. For example, `someuser@example.com`.',
												},
											},
											required: [],
										},
									},
									body: {
										type: 'object',
										description:
											'The message part body for this part, which may be empty for container MIME message parts.',
										properties: {
											attachmentId: {
												type: 'string',
												description:
													'When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.',
											},
											size: {
												type: 'number',
												description:
													'Number of bytes for the message part data.',
											},
											data: {
												type: 'string',
												description:
													'The body data of a MIME message part as a base64url encoded string.',
											},
										},
										required: [],
									},
									parts: {
										type: 'array',
										description: 'The child MIME message parts of this part.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				sizeEstimate: {
					type: 'number',
					description: 'Estimated size in bytes of the message.',
				},
				raw: {
					type: 'string',
					description:
						'The entire email message in an RFC 2822 formatted and base64url encoded string.',
				},
				classificationLabelValues: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							labelId: {
								type: 'string',
								description:
									'The canonical or raw alphanumeric classification label ID.',
							},
							fields: {
								type: 'array',
								description: 'Field values for the given classification label ID.',
								items: {
									type: 'object',
									properties: {
										fieldId: {
											type: 'string',
											description:
												'The field ID for the classification label value.',
										},
										selection: {
											type: 'string',
											description:
												'Selection choice ID for the selection option.',
										},
									},
									required: [],
								},
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
		appName: 'google-email',
		appVersion: 4,
		endpointName: 'watchMailbox',
		label: 'Watch mailbox',
		description: "Set up or update a push notification watch on the given user's mailbox.",
		context:
			"---\nname: watchMailbox\ndescription: This endpoint can be used to set up or update a push notification\n---\n\nSet up or update a push notification watch on the given user's mailbox",
		accounts: { 'google-email': { scope: ['https://www.googleapis.com/auth/gmail.modify'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				topicName: {
					type: 'string',
					description:
						'A fully qualified Google Cloud Pub/Sub API topic name to publish the events to.',
				},
				labelIds: {
					type: 'array',
					description: 'List of label IDs to restrict notifications about.',
					items: { type: 'string' },
				},
				labelFilterBehavior: {
					type: 'string',
					description: 'Filtering behavior of label IDs list specified.',
					default: '',
					enum: ['', 'include', 'exclude'],
				},
			},
			required: ['topicName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				historyId: {
					type: 'string',
					description: "The ID of the mailbox's current history record.",
				},
				expiration: {
					type: 'string',
					description: 'When Gmail will stop sending notifications for mailbox updates.',
				},
			},
			required: [],
		},
	},
];
