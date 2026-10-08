// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'tally',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			"---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Tally API.\n\nThe base URL is `https://api.tally.so`. Provide the remaining path in the URL parameter\n(e.g. `/forms`). Authentication is handled automatically via the app's Personal API Key connection.\n\nRefer to the [Tally API reference](https://developers.tally.so/) for available\nendpoints, required parameters, and response schemas.\n",
		accounts: { tally2: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://api.tally.so`. For example, `/forms`.',
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
		appName: 'tally',
		appVersion: 1,
		endpointName: 'createWebhook',
		label: 'Create a webhook',
		description: 'Creates a webhook that sends form events to a URL.',
		context:
			'---\nname: createWebhook\ndescription: Creates a webhook that sends form events to a URL.\n---\n\nCalls `POST /webhooks` and returns the created webhook resource.\n\nSee the [Create a webhook](https://developers.tally.so/api-reference/endpoint/webhooks/post) documentation.\n',
		accounts: { tally2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				formId: {
					type: 'string',
					description:
						'The ID of the form to create the webhook for. For example, `mexJoq`.',
				},
				url: {
					type: 'string',
					description: 'The URL Tally should send webhook events to.',
				},
				eventTypes: {
					type: 'string',
					description:
						'Types of events to receive. Currently the only value is `FORM_RESPONSE`.',
					enum: ['FORM_RESPONSE'],
				},
				signingSecret: {
					type: 'string',
					description: 'Optional secret used to sign webhook payloads.',
				},
				httpHeaders: {
					type: 'array',
					description: 'Optional custom HTTP headers to include in webhook requests.',
					items: {
						type: 'object',
						description: 'A custom HTTP header sent with each webhook request.',
						properties: {
							name: { type: 'string', description: 'The header name.' },
							value: { type: 'string', description: 'The header value.' },
						},
						required: ['name', 'value'],
					},
				},
				externalSubscriber: {
					type: 'string',
					description: 'Optional identifier for the external subscriber.',
				},
			},
			required: ['formId', 'url', 'eventTypes'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier of the webhook.' },
				formId: {
					type: 'string',
					description: 'ID of the form the webhook is attached to.',
				},
				url: { type: 'string', description: 'The URL that receives webhook events.' },
				signingSecret: {
					type: 'string',
					description: 'Secret used to sign webhook payloads. May be `null`.',
				},
				httpHeaders: {
					type: 'array',
					description: 'Custom HTTP headers included in webhook requests. May be `null`.',
					items: {
						type: 'object',
						description: 'A custom HTTP header sent with each webhook request.',
						properties: {
							name: { type: 'string', description: 'The header name.' },
							value: { type: 'string', description: 'The header value.' },
						},
						required: [],
					},
				},
				eventTypes: {
					type: 'array',
					description: 'Types of events this webhook subscribes to.',
					items: {
						type: 'string',
						description: 'An event type. Currently `FORM_RESPONSE`.',
					},
				},
				externalSubscriber: {
					type: 'string',
					description: 'External subscriber identifier. May be `null`.',
				},
				isEnabled: { type: 'boolean', description: 'Whether the webhook is enabled.' },
				lastSyncedAt: {
					type: 'string',
					description: 'Date and time when the webhook was last synced. May be `null`.',
				},
				createdAt: {
					type: 'string',
					description: 'Date and time when the webhook was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the webhook was last updated.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'tally',
		appVersion: 1,
		endpointName: 'deleteWebhook',
		label: 'Delete a webhook',
		description: 'Deletes a webhook by its ID.',
		context:
			'---\nname: deleteWebhook\ndescription: Deletes a webhook by its ID.\n---\n\nCalls `DELETE /webhooks/{webhookId}`. A successful delete returns no body (HTTP 204). If this is the last webhook for a form, Tally also marks the webhooks integration as deleted.\n\nSee the [Delete a webhook](https://developers.tally.so/api-reference/endpoint/webhooks/delete) documentation.\n',
		accounts: { tally2: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				webhookId: { type: 'string', description: 'The ID of the webhook to delete.' },
			},
			required: ['webhookId'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'tally',
		appVersion: 1,
		endpointName: 'getForm',
		label: 'Get a form',
		description: 'Returns a form by its ID, including blocks and settings.',
		context:
			'---\nname: getForm\ndescription: Returns a form by its ID, including blocks and settings.\n---\n\nCalls `GET /forms/{id}` and returns the raw Tally form resource (form metadata, `settings`, and `blocks`).\n\nSee the [Get a form](https://developers.tally.so/api-reference/endpoint/forms/get) documentation.\n',
		accounts: { tally2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The ID of the form to retrieve. For example, `mexJoq`.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier of the form.' },
				name: { type: 'string', description: 'Form name.' },
				workspaceId: {
					type: 'string',
					description: 'ID of the workspace that contains the form.',
				},
				status: {
					type: 'string',
					description: 'Form status. One of `BLANK`, `DRAFT`, or `PUBLISHED`.',
				},
				numberOfSubmissions: {
					type: 'number',
					description: 'Number of submissions received for the form.',
				},
				isClosed: {
					type: 'boolean',
					description: 'Whether the form is closed for new submissions.',
				},
				payments: {
					type: 'array',
					description: 'Payment amounts associated with the form.',
					items: {
						type: 'object',
						description: 'A payment amount and currency for the form.',
						properties: {
							amount: { type: 'number', description: 'Payment amount.' },
							currency: { type: 'string', description: 'Payment currency code.' },
						},
						required: [],
					},
				},
				createdAt: {
					type: 'string',
					description: 'Date and time when the form was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'Date and time when the form was last updated.',
				},
				settings: {
					type: 'object',
					description:
						'Form settings, including close rules, notifications, and appearance.',
					properties: {
						language: { type: 'string', description: 'Form language code.' },
						isClosed: {
							type: 'boolean',
							description: 'Whether the form is closed for new submissions.',
						},
						closeMessageTitle: {
							type: 'string',
							description: 'Title shown when the form is closed.',
						},
						closeMessageDescription: {
							type: 'string',
							description: 'Description shown when the form is closed.',
						},
						closeTimezone: {
							type: 'string',
							description: 'Timezone used for the scheduled close date and time.',
						},
						closeDate: {
							type: 'string',
							description: 'Date when the form is scheduled to close.',
						},
						closeTime: {
							type: 'string',
							description: 'Time when the form is scheduled to close.',
						},
						submissionsLimit: {
							type: 'number',
							description: 'Maximum number of submissions allowed for the form.',
						},
						uniqueSubmissionKey: {
							type: 'object',
							description: 'Rich text used as the unique submission key.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						redirectOnCompletion: {
							type: 'object',
							description: 'Rich text redirect target after the form is submitted.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						hasSelfEmailNotifications: {
							type: 'boolean',
							description:
								'Whether the form author receives email notifications for new submissions.',
						},
						selfEmailTo: {
							type: 'object',
							description:
								'Rich text recipient list for form-author notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						selfEmailReplyTo: {
							type: 'object',
							description:
								'Rich text reply-to address for form-author notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						selfEmailSubject: {
							type: 'object',
							description: 'Rich text subject for form-author notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						selfEmailFromName: {
							type: 'object',
							description: 'Rich text from name for form-author notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						selfEmailBody: {
							type: 'object',
							description: 'Rich text body for form-author notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						hasRespondentEmailNotifications: {
							type: 'boolean',
							description:
								'Whether respondents receive email notifications after submitting the form.',
						},
						respondentEmailTo: {
							type: 'object',
							description:
								'Rich text recipient list for respondent notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						respondentEmailReplyTo: {
							type: 'object',
							description:
								'Rich text reply-to address for respondent notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						respondentEmailSubject: {
							type: 'object',
							description: 'Rich text subject for respondent notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						respondentEmailFromName: {
							type: 'object',
							description: 'Rich text from name for respondent notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						respondentEmailBody: {
							type: 'object',
							description: 'Rich text body for respondent notification emails.',
							properties: {
								html: {
									type: 'string',
									description:
										'Rich text HTML. Supports basic formatting and mentions.',
								},
								mentions: {
									type: 'array',
									description:
										'Dynamic placeholders that reference other field values.',
									items: {
										type: 'object',
										description:
											"A mention that references another field's value.",
										properties: {
											uuid: {
												type: 'string',
												description: 'Unique identifier for this mention.',
											},
											field: {
												type: 'object',
												description:
													'The field being referenced. Its value replaces the mention placeholder at runtime.',
												properties: {
													uuid: {
														type: 'string',
														description:
															'Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.',
													},
													type: {
														type: 'string',
														description:
															'Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.',
													},
													questionType: {
														type: 'string',
														description:
															'Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.',
													},
													blockGroupUuid: {
														type: 'string',
														description:
															'Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.',
													},
													calculatedFieldType: {
														type: 'string',
														description:
															'For calculated fields, whether the result is `NUMBER` or `TEXT`.',
													},
													payload: {
														type: 'object',
														description:
															'Additional configuration for utility fields. Only present when type is `UTILITY`.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultValue: {
												type: 'string',
												description:
													'Fallback value displayed when the referenced field has no data.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						hasProgressBar: {
							type: 'boolean',
							description: 'Whether the form shows a progress bar.',
						},
						hasPartialSubmissions: {
							type: 'boolean',
							description: 'Whether partial submissions are enabled.',
						},
						pageAutoJump: {
							type: 'boolean',
							description: 'Whether the form automatically jumps to the next page.',
						},
						saveForLater: {
							type: 'boolean',
							description:
								'Whether respondents can save the form and continue later.',
						},
						styles: {
							type: 'string',
							description: 'Custom CSS styles applied to the form.',
						},
						password: {
							type: 'string',
							description: 'Password required to access the form, if one is set.',
						},
						submissionsDataRetentionDuration: {
							type: 'number',
							description: 'How long submission data is retained.',
						},
						submissionsDataRetentionUnit: {
							type: 'string',
							description: 'Unit for the submissions data retention duration.',
						},
					},
					required: [],
				},
				blocks: {
					type: 'array',
					description:
						'Form content blocks, including titles, questions, and layout elements.',
					items: {
						type: 'object',
						description:
							'A block in the form. The `payload` structure varies by `type`.',
						properties: {
							uuid: {
								type: 'string',
								description: 'Unique identifier of the block.',
							},
							type: {
								type: 'string',
								description:
									'Block type. For example, `FORM_TITLE`, `INPUT_TEXT`, or `PAGE_BREAK`.',
							},
							groupUuid: {
								type: 'string',
								description:
									'UUID that groups related blocks. Standalone blocks use their own UUID.',
							},
							groupType: { type: 'string', description: 'Block group type.' },
							payload: {
								type: 'object',
								description:
									'Type-specific block payload. The structure varies by block type. See the Tally blocks reference.',
								properties: {},
								required: [],
								additionalProperties: true,
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
		appName: 'tally',
		appVersion: 1,
		endpointName: 'listFormQuestions',
		label: 'List form questions',
		description: 'Returns a list of all questions in a form.',
		context:
			'---\nname: listFormQuestions\ndescription: Returns a list of all questions in a form.\n---\n\nCalls `GET /forms/{id}/questions` and returns the raw Tally response (`questions` and `hasResponses`).\n\nSee the [List form questions](https://developers.tally.so/api-reference/endpoint/forms/questions/list) documentation.\n',
		accounts: { tally2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The ID of the form whose questions should be returned. For example, `mexJoq`.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				questions: {
					type: 'array',
					description: 'List of questions in the form.',
					items: {
						type: 'object',
						description: 'A question in the form.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier of the question.',
							},
							type: {
								type: 'string',
								description:
									'Question block type. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CHECKBOX`.',
							},
							isTitleModifiedByUser: {
								type: 'boolean',
								description:
									'Whether the question title was customized by the form author.',
							},
							formId: {
								type: 'string',
								description: 'ID of the form this question belongs to.',
							},
							isDeleted: {
								type: 'boolean',
								description: 'Whether the question has been deleted.',
							},
							numberOfResponses: {
								type: 'number',
								description: 'Number of responses recorded for this question.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the question was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the question was last updated.',
							},
							fields: {
								type: 'array',
								description: 'Input fields that belong to this question.',
								items: {
									type: 'object',
									description: 'A field that belongs to the question.',
									properties: {
										uuid: {
											type: 'string',
											description: 'Unique identifier of the field.',
										},
										type: { type: 'string', description: 'Field block type.' },
										blockGroupUuid: {
											type: 'string',
											description:
												'UUID of the block group this field belongs to.',
										},
										questionType: {
											type: 'string',
											description:
												'Question type of the field. For example, `INPUT_TEXT`.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				hasResponses: {
					type: 'boolean',
					description: 'Whether the form has at least one response.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'tally',
		appVersion: 1,
		endpointName: 'listFormResponses',
		label: 'List form responses',
		description: 'Returns a paginated list of form submissions with their responses.',
		context:
			'---\nname: listFormResponses\ndescription: Returns a paginated list of form submissions with their responses.\n---\n\nCalls `GET /forms/{id}/submissions` and returns the raw Tally wrapper: pagination (`page`, `limit`, `hasMore`, `totalNumberOfSubmissionsPerFilter`), `questions`, and `submissions` (including `responses`, `previewUrl`, and `pdfUrl`).\n\nThis endpoint returns a **single page**. Increment **Page** while `hasMore` is true to fetch more results. **Limit** defaults to `50` (maximum `500`). Optional filters: **Filter** (`all`, `completed`, `partial`), **Start date**, **End date**, and **After ID**.\n\nSee the [List form submissions](https://developers.tally.so/api-reference/endpoint/forms/submissions/list) documentation.\n',
		accounts: { tally2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The ID of the form whose submissions should be returned. For example, `mexJoq`.',
				},
				filter: {
					type: 'string',
					description:
						'Filter submissions by status. One of `all`, `completed`, or `partial`.',
					default: '',
					enum: ['', 'all', 'completed', 'partial'],
				},
				startDate: {
					type: 'string',
					description: 'Return submissions submitted on or after this date (ISO 8601).',
				},
				endDate: {
					type: 'string',
					description: 'Return submissions submitted on or before this date (ISO 8601).',
				},
				afterId: {
					type: 'string',
					description: 'Return submissions that came after this submission ID.',
				},
				page: {
					type: 'number',
					description:
						'Page number to return. Default is `1`. This endpoint returns a single page; increment `page` while `hasMore` is true to fetch more results.',
					default: 1,
					minimum: 1,
				},
				limit: {
					type: 'number',
					description:
						'Number of submissions to return per page. Default is `50`. Maximum is `500`.',
					default: 50,
					minimum: 1,
					maximum: 500,
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				page: { type: 'number', description: 'Current page number.' },
				limit: {
					type: 'number',
					description: 'Number of submissions returned on this page.',
				},
				hasMore: {
					type: 'boolean',
					description: 'Whether there are more pages of submissions.',
				},
				totalNumberOfSubmissionsPerFilter: {
					type: 'object',
					description: 'Total submission counts grouped by status filter.',
					properties: {
						all: { type: 'number', description: 'Total number of all submissions.' },
						completed: {
							type: 'number',
							description: 'Total number of completed submissions.',
						},
						partial: {
							type: 'number',
							description: 'Total number of partial submissions.',
						},
					},
					required: [],
				},
				questions: {
					type: 'array',
					description: 'List of form questions included with the submissions.',
					items: {
						type: 'object',
						description: 'A question in the form.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier of the question.',
							},
							type: {
								type: 'string',
								description:
									'Question block type. For example, `INPUT_TEXT` or `CHECKBOX`.',
							},
							isTitleModifiedByUser: {
								type: 'boolean',
								description:
									'Whether the question title was customized by the form author.',
							},
							formId: {
								type: 'string',
								description: 'ID of the form this question belongs to.',
							},
							isDeleted: {
								type: 'boolean',
								description: 'Whether the question has been deleted.',
							},
							numberOfResponses: {
								type: 'number',
								description: 'Number of responses recorded for this question.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the question was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the question was last updated.',
							},
							fields: {
								type: 'array',
								description: 'Input fields that belong to this question.',
								items: {
									type: 'object',
									description: 'A field that belongs to the question.',
									properties: {
										uuid: {
											type: 'string',
											description: 'Unique identifier of the field.',
										},
										type: { type: 'string', description: 'Field block type.' },
										blockGroupUuid: {
											type: 'string',
											description:
												'UUID of the block group this field belongs to.',
										},
										questionType: {
											type: 'string',
											description:
												'Question type of the field. For example, `INPUT_TEXT`.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				submissions: {
					type: 'array',
					description: 'List of form submissions on this page.',
					items: {
						type: 'object',
						description: 'A form submission and its answers.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier of the submission.',
							},
							formId: {
								type: 'string',
								description: 'ID of the form this submission belongs to.',
							},
							respondentId: {
								type: 'string',
								description: 'ID of the respondent who submitted the form.',
							},
							isCompleted: {
								type: 'boolean',
								description: 'Whether the submission is completed.',
							},
							submittedAt: {
								type: 'string',
								description: 'Date and time when the submission was submitted.',
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the submission was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the submission was last updated.',
							},
							previewUrl: {
								type: 'string',
								description:
									'Signed URL to view the submission in a browser. Includes an access token and has no expiry.',
							},
							pdfUrl: {
								type: 'string',
								description:
									'Signed URL to download the submission as a PDF. Includes an access token and has no expiry.',
							},
							responses: {
								type: 'array',
								description:
									'Answers to form questions. Only questions that have been answered appear in this array.',
								items: {
									type: 'object',
									description: 'An answer to a form question.',
									properties: {
										id: {
											type: 'string',
											description: 'Unique identifier of this response.',
										},
										formId: {
											type: 'string',
											description: 'ID of the form this response belongs to.',
										},
										questionId: {
											type: 'string',
											description:
												'ID of the question this answer belongs to.',
										},
										respondentId: {
											type: 'string',
											description:
												'ID of the respondent who submitted the answer.',
										},
										submissionId: {
											type: 'string',
											description:
												'ID of the parent submission. May be `null`.',
										},
										sessionUuid: {
											type: 'string',
											description: 'UUID of the respondent session.',
										},
										answer: {
											type: 'string',
											description:
												'The answer value for this question. Type varies by question type (text, number, boolean, array, or object) and may be `null`.',
										},
										formattedAnswer: {
											type: 'string',
											description:
												'Formatted answer, for example for number inputs with custom formatting.',
										},
										createdAt: {
											type: 'string',
											description:
												'Date and time when the response was created.',
										},
										updatedAt: {
											type: 'string',
											description:
												'Date and time when the response was last updated.',
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
		appName: 'tally',
		appVersion: 1,
		endpointName: 'listForms',
		label: 'List forms',
		description: 'Returns a list of all forms.',
		context:
			'---\nname: listForms\ndescription: Returns a list of all forms.\n---\n\nCalls `GET /forms` and returns the raw Tally wrapper: `items`, `page`, `limit`, `total`, and `hasMore`.\n\nThis endpoint returns a **single page**. Increment **Page** while `hasMore` is true to fetch more results. **Limit** defaults to `50` (maximum `500`). Optional **Workspace IDs** filters the list to specific workspaces.\n\nSee the [List forms](https://developers.tally.so/api-reference/endpoint/forms/list) documentation.\n',
		accounts: { tally2: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				workspaceIds: {
					type: 'array',
					description:
						'Filter forms by workspace IDs. Leave empty to return forms from all accessible workspaces.',
					items: {
						type: 'string',
						description: 'A workspace ID to include in the filter.',
					},
				},
				page: {
					type: 'number',
					description:
						'Page number to return. Default is `1`. This endpoint returns a single page; increment `page` while `hasMore` is true to fetch more results.',
					default: 1,
					minimum: 1,
				},
				limit: {
					type: 'number',
					description:
						'Number of forms to return per page. Default is `50`. Maximum is `500`.',
					default: 50,
					minimum: 1,
					maximum: 500,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'Forms returned on this page.',
					items: {
						type: 'object',
						description: 'A form the account can access.',
						properties: {
							id: { type: 'string', description: 'Unique identifier of the form.' },
							name: { type: 'string', description: 'Form name.' },
							isNameModifiedByUser: {
								type: 'boolean',
								description:
									'Whether the form name was customized by the form author.',
							},
							workspaceId: {
								type: 'string',
								description: 'ID of the workspace that contains the form.',
							},
							folderId: {
								type: 'string',
								description: 'ID of the folder that contains the form, if any.',
							},
							organizationId: {
								type: 'string',
								description: 'ID of the organization that owns the form.',
							},
							status: {
								type: 'string',
								description:
									'Form status. One of `BLANK`, `DRAFT`, or `PUBLISHED`.',
							},
							hasDraftBlocks: {
								type: 'boolean',
								description: 'Whether the form has unpublished draft blocks.',
							},
							numberOfSubmissions: {
								type: 'number',
								description: 'Number of submissions received for the form.',
							},
							isClosed: {
								type: 'boolean',
								description: 'Whether the form is closed for new submissions.',
							},
							index: {
								type: 'number',
								description: 'Position of the form in the list.',
							},
							payments: {
								type: 'array',
								description: 'Payment amounts associated with the form.',
								items: {
									type: 'object',
									description: 'A payment amount and currency for the form.',
									properties: {
										amount: { type: 'number', description: 'Payment amount.' },
										currency: {
											type: 'string',
											description: 'Payment currency code.',
										},
									},
									required: [],
								},
							},
							createdAt: {
								type: 'string',
								description: 'Date and time when the form was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'Date and time when the form was last updated.',
							},
						},
						required: [],
					},
				},
				page: { type: 'number', description: 'Current page number.' },
				limit: { type: 'number', description: 'Number of forms returned on this page.' },
				total: {
					type: 'number',
					description: 'Total number of forms matching the request.',
				},
				hasMore: { type: 'boolean', description: 'Whether there are more pages of forms.' },
			},
			required: [],
		},
	},
];
