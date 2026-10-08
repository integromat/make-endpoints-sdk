// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Typeform API, mirroring the "Make an API Call" module.\n\nThe base URL depends on the region selected in the connection: `https://api.typeform.com` (US / default),\n`https://api.eu.typeform.com` (EU), or `https://api.typeform.eu` (EU New). Provide the remaining path in\nthe URL parameter (e.g. `/forms`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Typeform API reference](https://developers.typeform.com) for available\nendpoints, required parameters, and response schemas.',
		accounts: { typeform2: { scope: [] } },
		annotations: { arbitraryCallHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter a path relative to the Typeform API base URL. The base URL depends on your connection region: `https://api.typeform.com` (US / default), `https://api.eu.typeform.com` (EU), or `https://api.typeform.eu` (EU New). For example, `/forms`.',
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
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'createForm',
		label: 'Create a form',
		description: 'Creates a new form.',
		context:
			'---\nname: createForm\ndescription: Creates a new form.\n---\n\nCalls `POST /forms` with the form definition and returns the created form resource.\n\nImages referenced in the form must already exist in the Typeform account. Otherwise the API returns `IMAGE_NOT_FOUND`. Create images first with **Create an image**.\n\nEmpty optional objects and arrays are stripped before the request is sent.\n\nSee the [Create form](https://www.typeform.com/developers/create/reference/create-form/) documentation.\n',
		accounts: { typeform2: { scope: ['forms:write'] } },
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
				settings: {
					type: 'object',
					description:
						'Form settings, including language, public availability, progress bar, tracking, and notifications.',
					properties: {
						language: {
							type: 'string',
							description: 'Language to use for the form.',
							default: '',
							enum: [
								'',
								'en',
								'es',
								'ca',
								'fr',
								'de',
								'ru',
								'it',
								'da',
								'pt',
								'ch',
								'zh',
								'nl',
								'no',
								'uk',
								'ja',
								'ko',
								'hr',
								'fi',
								'sv',
								'pl',
								'el',
								'hu',
								'tr',
								'cs',
								'et',
								'di',
							],
						},
						is_public: {
							type: 'boolean',
							description: 'True if the form is publicly available.',
						},
						progress_bar: {
							type: 'string',
							description: 'Progress bar display style.',
							default: '',
							enum: ['', 'proportion', 'percentage'],
						},
						show_progress_bar: {
							type: 'boolean',
							description: 'True to display the progress bar.',
						},
						show_typeform_branding: {
							type: 'boolean',
							description: 'True to display Typeform branding on the form.',
						},
						meta: {
							type: 'object',
							description: 'Search-engine metadata for the form.',
							properties: {
								allow_indexing: {
									type: 'boolean',
									description: 'True if search engines can index the form.',
								},
								description: {
									type: 'string',
									description: 'Description for search-engine indexing.',
								},
								image: {
									type: 'object',
									description: 'Image used in search-engine metadata.',
									properties: {
										href: {
											type: 'string',
											description:
												'URL of the metadata image. Images must already exist in your account.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						redirect_after_submit_url: {
							type: 'string',
							description:
								'URL to redirect respondents to after they submit the form.',
						},
						google_analytics: {
							type: 'string',
							description: 'Google Analytics tracking ID to associate with the form.',
						},
						facebook_pixel: {
							type: 'string',
							description: 'Facebook Pixel tracking ID to associate with the form.',
						},
						google_tag_manager: {
							type: 'string',
							description: 'Google Tag Manager ID to associate with the form.',
						},
						notifications: {
							type: 'object',
							description:
								'Email notifications sent to you or to the respondent after a submission.',
							properties: {
								self: {
									type: 'object',
									description:
										'Notification sent to you when someone submits the form.',
									properties: {
										enabled: {
											type: 'boolean',
											description:
												'True to send a notification email to the addresses in Recipients.',
										},
										recipients: {
											type: 'array',
											description:
												'Email addresses that receive the notification. Required when Self is enabled.',
											items: {
												type: 'string',
												description: 'Recipient email address.',
											},
										},
										reply_to: {
											type: 'string',
											description:
												'Reply-to address for the notification email.',
										},
										subject: {
											type: 'string',
											description:
												'Subject line of the notification email. Required when Self is enabled.',
										},
										message: {
											type: 'string',
											description:
												'Body of the notification email. Required when Self is enabled.',
										},
									},
									required: [],
								},
								respondent: {
									type: 'object',
									description:
										'Notification sent to the respondent after they submit the form.',
									properties: {
										enabled: {
											type: 'boolean',
											description:
												'True to email the respondent after they submit the form.',
										},
										recipient: {
											type: 'string',
											description:
												'Email field that receives the message. Use `{{field:internal_name}}`. Required when Respondent is enabled.',
										},
										reply_to: {
											type: 'array',
											description:
												'Reply-to addresses for the respondent email.',
											items: {
												type: 'string',
												description: 'Reply-to email address.',
											},
										},
										subject: {
											type: 'string',
											description:
												'Subject line of the respondent email. Required when Respondent is enabled.',
										},
										message: {
											type: 'string',
											description:
												'Body of the respondent email. Required when Respondent is enabled.',
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
				cui_settings: {
					type: 'object',
					description: 'Conversation user-interface settings for chat-style forms.',
					properties: {
						avatar: {
							type: 'string',
							description:
								'URL for the image to use as conversation avatar. Images must already exist in your account — use the image Typeform URL, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
						},
						is_typing_emulation_disabled: {
							type: 'boolean',
							description:
								'True to disable the delay between messages. Typing emulation is enabled by default.',
						},
						typing_emulation_speed: {
							type: 'string',
							description:
								'Pace at which messages appear in a conversation when typing emulation is enabled.',
							default: '',
							enum: ['', 'slow', 'medium', 'fast'],
						},
					},
					required: [],
				},
				theme: {
					type: 'object',
					description: 'Theme to use for the form.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of the theme, for example `https://api.typeform.com/themes/Fs24as`.',
						},
					},
					required: [],
				},
				workspace: {
					type: 'object',
					description:
						'Workspace that contains the form. If omitted, Typeform saves the form in the default workspace.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of your workspace, for example `https://api.typeform.com/workspaces/123456789`.',
						},
					},
					required: [],
				},
				hidden: {
					type: 'array',
					description: 'Hidden field names whose values you can pass in the form URL.',
					items: { type: 'string', description: 'Hidden field name.' },
				},
				variables: {
					type: 'object',
					description: 'Recall variables used in the form, such as score and price.',
					properties: {
						score: {
							type: 'number',
							description: 'Starting value for the score Recall variable.',
						},
						price: {
							type: 'number',
							description:
								'Starting value for the price Recall variable. Used by payment fields.',
						},
					},
					required: [],
				},
				welcome_screens: {
					type: 'array',
					description: 'Welcome screens shown before the first question.',
					items: {
						type: 'object',
						description: 'A welcome screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the welcome screen.',
							},
							properties: {
								type: 'object',
								description: 'Display options for the welcome screen.',
								properties: {
									description: {
										type: 'string',
										description: 'Description shown on the welcome screen.',
									},
									show_button: {
										type: 'boolean',
										description:
											'True to show a start button on the welcome screen.',
									},
									button_text: {
										type: 'string',
										description: 'Text displayed on the start button.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the welcome screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											'URL for the image or video. Images must already exist in your account. Use the image Typeform URL, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				thankyou_screens: {
					type: 'array',
					description: 'Thank you screens shown after the form is submitted.',
					items: {
						type: 'object',
						description: 'A thank you screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the thank you screen.',
							},
							properties: {
								type: 'object',
								description: 'Display options for the thank you screen.',
								properties: {
									description: {
										type: 'string',
										description: 'Description shown on the thank you screen.',
									},
									show_button: {
										type: 'boolean',
										description:
											'True to show a button on the thank you screen.',
									},
									button_text: {
										type: 'string',
										description:
											'Text displayed on the thank you screen button.',
									},
									redirect_url: {
										type: 'string',
										description:
											'URL to open when the respondent clicks the thank you screen button.',
									},
									share_icons: {
										type: 'boolean',
										description:
											'True to show social share icons on the thank you screen.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the thank you screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											'URL for the image or video. Images must already exist in your account. Use the image Typeform URL, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				fields: {
					type: 'array',
					description:
						'Questions to include in the form, with their type, validations, and properties.',
					items: {
						type: 'object',
						description: 'A form field.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of field. Required when a field is provided.',
								default: '',
								enum: [
									'',
									'date',
									'contact_info',
									'nps',
									'dropdown',
									'email',
									'file_upload',
									'legal',
									'long_text',
									'multiple_choice',
									'number',
									'opinion_scale',
									'payment',
									'picture_choice',
									'rating',
									'short_text',
									'statement',
									'website',
									'yes_no',
									'phone_number',
									'matrix',
									'ranking',
									'group',
								],
							},
							ref: {
								type: 'string',
								description: 'Readable name you can use to reference the field.',
							},
							validations: {
								type: 'object',
								description:
									'Validation rules for the field. Leave empty for statement, matrix, or group types.',
								properties: {
									required: {
										type: 'boolean',
										description:
											'True if respondents must provide an answer. Leave empty if the field type is statement, matrix, or group.',
									},
								},
								required: [],
							},
							properties: {
								type: 'object',
								description: 'Type-specific properties for the field.',
								properties: {
									description: {
										type: 'string',
										description:
											'Question description or additional text shown with the field.',
									},
									choices: {
										type: 'array',
										description:
											'Answer choices. Used for dropdown, multiple choice, picture choice, and ranking fields.',
										items: {
											type: 'object',
											description: 'An answer choice.',
											properties: {
												label: {
													type: 'string',
													description:
														'Text displayed for this choice. Required when a choice is provided.',
												},
												ref: {
													type: 'string',
													description:
														'Readable name you can use to reference the choice.',
												},
												attachment: {
													type: 'object',
													description:
														'Image for a picture-choice answer. Images must already exist in your account.',
													properties: {
														href: {
															type: 'string',
															description:
																'Typeform image URL to use for the answer choice, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
														},
														type: {
															type: 'string',
															description:
																'Attachment type. Use `image` for picture-choice answers.',
															default: '',
															enum: ['', 'image'],
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									fields: {
										type: 'array',
										description:
											'Nested fields. Use contact-info subfields (`subfield_key`), matrix rows as multiple-choice fields, or questions inside a group.',
										items: {
											type: 'object',
											description:
												'A nested field for a group, contact info, or matrix question.',
											properties: {
												type: {
													type: 'string',
													description: 'The type of nested field.',
													default: '',
													enum: [
														'',
														'date',
														'contact_info',
														'nps',
														'dropdown',
														'email',
														'file_upload',
														'legal',
														'long_text',
														'multiple_choice',
														'number',
														'opinion_scale',
														'payment',
														'picture_choice',
														'rating',
														'short_text',
														'statement',
														'website',
														'yes_no',
														'phone_number',
														'matrix',
														'ranking',
														'group',
													],
												},
												ref: {
													type: 'string',
													description:
														'Readable name you can use to reference the nested field.',
												},
												subfield_key: {
													type: 'string',
													description:
														'Contact-info subfield key. Use `first_name`, `last_name`, `phone_number`, `email`, or `company`.',
												},
												validations: {
													type: 'object',
													description:
														'Validation rules for the nested field. Leave empty for statement, matrix, or group types.',
													properties: {
														required: {
															type: 'boolean',
															description:
																'True if respondents must provide an answer. Leave empty if the field type is statement, matrix, or group.',
														},
													},
													required: [],
												},
												properties: {
													type: 'object',
													description:
														'Type-specific properties for the nested field.',
													properties: {
														description: {
															type: 'string',
															description:
																'Question description or additional text shown with the field.',
														},
														choices: {
															type: 'array',
															description:
																'Answer choices. Used for dropdown, multiple choice, picture choice, and ranking fields.',
															items: {
																type: 'object',
																description: 'An answer choice.',
																properties: {
																	label: {
																		type: 'string',
																		description:
																			'Text displayed for this choice. Required when a choice is provided.',
																	},
																	ref: {
																		type: 'string',
																		description:
																			'Readable name you can use to reference the choice.',
																	},
																	attachment: {
																		type: 'object',
																		description:
																			'Image for a picture-choice answer. Images must already exist in your account.',
																		properties: {
																			href: {
																				type: 'string',
																				description:
																					'Typeform image URL to use for the answer choice, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
																			},
																			type: {
																				type: 'string',
																				description:
																					'Attachment type. Use `image` for picture-choice answers.',
																				default: '',
																				enum: ['', 'image'],
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
											required: [],
										},
									},
									alphabetical_order: {
										type: 'boolean',
										description:
											'True to sort dropdown choices alphabetically. Used for dropdown fields.',
									},
									allow_multiple_selection: {
										type: 'boolean',
										description:
											'True to let respondents select more than one choice. Used for multiple choice, picture choice, and ranking fields.',
									},
									randomize: {
										type: 'boolean',
										description:
											'True to show choices in random order. Used for multiple choice, picture choice, and ranking fields.',
									},
									allow_other_choice: {
										type: 'boolean',
										description:
											'True to include an Other option. Used for multiple choice and picture choice fields.',
									},
									vertical_alignment: {
										type: 'boolean',
										description:
											'True to stack choices vertically. Used for multiple choice fields.',
									},
									supersized: {
										type: 'boolean',
										description:
											'True to display picture-choice images larger. Used for picture choice fields.',
									},
									show_labels: {
										type: 'boolean',
										description:
											'True to show labels with picture-choice images. Used for picture choice fields.',
									},
									hide_marks: {
										type: 'boolean',
										description:
											'True to hide quotation marks on a statement field.',
									},
									button_text: {
										type: 'string',
										description:
											'Text displayed on the continue or pay button. Used for payment and statement fields.',
									},
									steps: {
										type: 'string',
										description:
											'Number of steps on the scale. Used for rating and opinion scale fields.',
										default: '',
										enum: ['', 5, 6, 7, 8, 9, 10, 11],
									},
									shape: {
										type: 'string',
										description:
											'Shape used for rating steps. Used for rating fields.',
										default: '',
										enum: [
											'',
											'cat',
											'circle',
											'cloud',
											'crown',
											'dog',
											'droplet',
											'flag',
											'heart',
											'lightbulb',
											'pencil',
											'skull',
											'star',
											'thunderbolt',
											'tick',
											'trophy',
											'up',
											'user',
										],
									},
									labels: {
										type: 'object',
										description:
											'Labels for the left, center, and right of an opinion scale.',
										properties: {
											left: {
												type: 'string',
												description:
													'Text of the left-aligned label for the scale.',
											},
											center: {
												type: 'string',
												description:
													'Text of the center-aligned label for the scale.',
											},
											right: {
												type: 'string',
												description:
													'Text of the right-aligned label for the scale.',
											},
										},
										required: [],
									},
									start_at_one: {
										type: 'boolean',
										description:
											'True to start the opinion scale at 1 instead of 0. Used for opinion scale fields.',
									},
									structure: {
										type: 'string',
										description: 'Date format. Used for date fields.',
										default: '',
										enum: ['', 'MMDDYYYY', 'DDMMYYYY', 'YYYYMMDD'],
									},
									separator: {
										type: 'string',
										description:
											'Character that separates month, day, and year in a date field, for example `/` or `-`.',
									},
									currency: {
										type: 'string',
										description: 'Currency for a payment field.',
										default: '',
										enum: [
											'',
											'AUD',
											'BRL',
											'CAD',
											'CHF',
											'DKK',
											'EUR',
											'GBP',
											'MXN',
											'NOK',
											'SEK',
											'USD',
										],
									},
									price: {
										type: 'object',
										description:
											'Price source for a payment field. Typeform uses the form `price` variable.',
										properties: {
											type: {
												type: 'string',
												description: 'Price source type. Use `variable`.',
												default: '',
												enum: ['', 'variable'],
											},
											value: {
												type: 'string',
												description:
													'Variable that holds the price. Use `price`.',
												default: '',
												enum: ['', 'price'],
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
				},
				logic: {
					type: 'array',
					description:
						'Logic jumps. Referenced fields must already exist on the form. To jump to a newly created field, create the form first, then add logic with Update a form.',
					items: {
						type: 'object',
						description: 'A Logic Jump definition.',
						properties: {
							type: {
								type: 'string',
								description:
									'Whether the Logic Jump is based on a question field or a hidden field. Required when a logic item is provided.',
								default: '',
								enum: ['', 'field', 'hidden'],
							},
							ref: {
								type: 'string',
								description:
									'Reference that is accessible in the current form scope.',
							},
							actions: {
								type: 'array',
								description:
									'Objects that define the Logic Jump behavior. Required when a logic item is provided.',
								items: {
									type: 'object',
									description: 'A Logic Jump action.',
									properties: {
										action: {
											type: 'string',
											description:
												'Behavior the Logic Jump will take. Required when an action is provided.',
											default: '',
											enum: [
												'',
												'jump',
												'add',
												'subtract',
												'multiply',
												'divide',
											],
										},
										details: {
											type: 'object',
											description:
												'Where the Logic Jump leads. Required when an action is provided.',
											properties: {
												to: {
													type: 'object',
													description: 'Destination of the jump.',
													properties: {
														type: {
															type: 'string',
															description: 'Destination type.',
															default: '',
															enum: [
																'',
																'field',
																'hidden',
																'thankyou',
															],
														},
														value: {
															type: 'string',
															description:
																'Ref of the field, hidden field, or thank you screen the jump leads to. Required when To is provided.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										condition: {
											type: 'object',
											description: 'Conditions for executing the Logic Jump.',
											properties: {
												op: {
													type: 'string',
													description:
														'Operator for the condition. Required when a condition is provided.',
													default: '',
													enum: [
														'',
														'begins_with',
														'ends_with',
														'contains',
														'not_contains',
														'lower_than',
														'lower_equal_than',
														'greater_than',
														'greater_equal_than',
														'is',
														'is_not',
														'equal',
														'not_equal',
														'always',
														'on',
														'not_on',
														'earlier_than',
														'earlier_than_or_on',
														'later_than',
														'later_than_or_on',
													],
												},
												vars: {
													type: 'array',
													description: 'Values the operator evaluates.',
													items: {
														type: 'object',
														description:
															'A value the condition evaluates.',
														properties: {
															type: {
																type: 'string',
																description:
																	'Type of value the condition refers to.',
																default: '',
																enum: [
																	'',
																	'field',
																	'hidden',
																	'variable',
																	'constant',
																	'end',
																],
															},
															value: {
																type: 'string',
																description:
																	'Value to evaluate. Required when a var is provided.',
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
						},
						required: [],
					},
				},
			},
			required: ['title'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique ID of the form.' },
				created_at: {
					type: 'string',
					description: "Time of the form's creation, in ISO 8601 UTC format.",
				},
				last_updated_at: {
					type: 'string',
					description: 'Time of the last update, in ISO 8601 UTC format.',
				},
				type: { type: 'string', description: 'Type of form.' },
				language: {
					type: 'string',
					description: 'Language of the form. Default is `en`.',
					default: '',
					enum: [
						'',
						'en',
						'es',
						'ca',
						'fr',
						'de',
						'ru',
						'it',
						'da',
						'pt',
						'ch',
						'zh',
						'nl',
						'no',
						'uk',
						'ja',
						'ko',
						'hr',
						'fi',
						'sv',
						'pl',
						'el',
						'hu',
						'tr',
						'cs',
						'et',
						'di',
					],
				},
				fields: {
					type: 'array',
					description:
						'Fields to use in the form and their properties, validations, and attachments.',
					items: {
						type: 'object',
						description: 'A form field.',
						properties: {
							id: {
								type: 'string',
								description:
									'Unique ID of the field. Include the original ID when updating a form so the field and its responses are preserved.',
							},
							ref: {
								type: 'string',
								description: 'Readable name you can use to reference the field.',
							},
							type: {
								type: 'string',
								description:
									'The type of field. Required when a field is provided.',
								default: '',
								enum: [
									'',
									'calendly',
									'checkbox',
									'contact_info',
									'date',
									'dropdown',
									'email',
									'file_upload',
									'google_calendar',
									'group',
									'legal',
									'long_text',
									'matrix',
									'multi_format',
									'multiple_choice',
									'nps',
									'number',
									'opinion_scale',
									'payment',
									'phone_number',
									'picture_choice',
									'ranking',
									'rating',
									'short_text',
									'signature',
									'statement',
									'website',
									'yes_no',
								],
							},
							properties: {
								type: 'object',
								description:
									'Field properties, validations helpers, and type-specific settings.',
								properties: {
									description: {
										type: 'string',
										description:
											'Question or instruction to display for the field.',
									},
									choices: {
										type: 'array',
										description:
											'Answer choices. Available for `ranking`, `dropdown`, `multiple_choice`, `picture_choice`, and `checkbox` types. For `checkbox`, the array must contain exactly one item.',
										items: {
											type: 'object',
											description: 'An answer choice.',
											properties: {
												ref: {
													type: 'string',
													description:
														'Readable name for the answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`. Not available for `dropdown`.',
												},
												label: {
													type: 'string',
													description:
														'Text for the answer choice. Maximum 255 characters.',
												},
												attachment: {
													type: 'object',
													description:
														'Image for the answer choice. Available only for `picture_choice` types.',
													properties: {
														type: {
															type: 'string',
															description:
																'Type of attachment. Must be `image` for picture choices.',
															default: '',
															enum: ['', 'image'],
														},
														href: {
															type: 'string',
															description:
																'Typeform URL for the image to use for the answer choice.',
														},
														properties: {
															type: 'object',
															description:
																'Optional attachment properties.',
															properties: {
																description: {
																	type: 'string',
																	description:
																		'Alt text for the choice image.',
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
									},
									fields: {
										type: 'array',
										description:
											'Fields that belong in a question group or matrix. `payment` and `group` blocks are not allowed inside a question group. Available for the `group` and `matrix` types.',
										items: {
											type: 'object',
											description: 'A nested field inside a group or matrix.',
											properties: {
												id: {
													type: 'string',
													description:
														'Unique ID of the field. Include the original ID when updating a form so the field and its responses are preserved.',
												},
												ref: {
													type: 'string',
													description:
														'Readable name you can use to reference the field.',
												},
												type: {
													type: 'string',
													description:
														'The type of field. Required when a field is provided.',
													default: '',
													enum: [
														'',
														'calendly',
														'checkbox',
														'contact_info',
														'date',
														'dropdown',
														'email',
														'file_upload',
														'google_calendar',
														'group',
														'legal',
														'long_text',
														'matrix',
														'multi_format',
														'multiple_choice',
														'nps',
														'number',
														'opinion_scale',
														'payment',
														'phone_number',
														'picture_choice',
														'ranking',
														'rating',
														'short_text',
														'signature',
														'statement',
														'website',
														'yes_no',
													],
												},
												properties: {
													type: 'object',
													description:
														'Field properties, validations helpers, and type-specific settings.',
													properties: {
														description: {
															type: 'string',
															description:
																'Question or instruction to display for the field.',
														},
														choices: {
															type: 'array',
															description:
																'Answer choices. Available for `ranking`, `dropdown`, `multiple_choice`, `picture_choice`, and `checkbox` types. For `checkbox`, the array must contain exactly one item.',
															items: {
																type: 'object',
																description: 'An answer choice.',
																properties: {
																	ref: {
																		type: 'string',
																		description:
																			'Readable name for the answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`. Not available for `dropdown`.',
																	},
																	label: {
																		type: 'string',
																		description:
																			'Text for the answer choice. Maximum 255 characters.',
																	},
																	attachment: {
																		type: 'object',
																		description:
																			'Image for the answer choice. Available only for `picture_choice` types.',
																		properties: {
																			type: {
																				type: 'string',
																				description:
																					'Type of attachment. Must be `image` for picture choices.',
																				default: '',
																				enum: ['', 'image'],
																			},
																			href: {
																				type: 'string',
																				description:
																					'Typeform URL for the image to use for the answer choice.',
																			},
																			properties: {
																				type: 'object',
																				description:
																					'Optional attachment properties.',
																				properties: {
																					description: {
																						type: 'string',
																						description:
																							'Alt text for the choice image.',
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
														},
														allow_multiple_selection: {
															type: 'boolean',
															description:
																'True to allow respondents to select more than one answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
														randomize: {
															type: 'boolean',
															description:
																'True to present answer choices in a new random order for each respondent. Available for `ranking`, `multiple_choice`, `picture_choice`, and `dropdown`.',
														},
														allow_other_choice: {
															type: 'boolean',
															description:
																'True to include an Other option. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
														vertical_alignment: {
															type: 'boolean',
															description:
																'True to list answer choices vertically. Available for `ranking` and `multiple_choice`.',
														},
														supersized: {
															type: 'boolean',
															description:
																'True to use larger-sized images for answer choices. Available for `picture_choice`.',
														},
														show_labels: {
															type: 'boolean',
															description:
																'True to show text labels and images as answer choices. Available for `picture_choice`. Default is true.',
														},
														alphabetical_order: {
															type: 'boolean',
															description:
																'True to list dropdown choices alphabetically. Available for `dropdown`.',
														},
														hide_marks: {
															type: 'boolean',
															description:
																'True to hide quotation marks around a statement. Available for `statement`.',
														},
														button_text: {
															type: 'string',
															description:
																'Text to display on the button. Available for `group`, `payment`, and `statement`. Default is `Continue`.',
														},
														steps: {
															type: 'number',
															description:
																"Number of steps in the scale's range. Minimum is 5 and maximum is 11. Available for `opinion_scale` and `rating`.",
														},
														shape: {
															type: 'string',
															description:
																"Shape to display on the scale's steps. Available for `opinion_scale` and `rating`. Default is `star`.",
															default: '',
															enum: [
																'',
																'cat',
																'circle',
																'cloud',
																'crown',
																'dog',
																'droplet',
																'flag',
																'heart',
																'lightbulb',
																'pencil',
																'skull',
																'star',
																'thunderbolt',
																'tick',
																'trophy',
																'up',
																'user',
															],
														},
														labels: {
															type: 'object',
															description:
																"Labels that help respondents understand the scale's range. Available for `opinion_scale` and `rating`.",
															properties: {
																left: {
																	type: 'string',
																	description:
																		'Text of the left-aligned label for the scale.',
																},
																center: {
																	type: 'string',
																	description:
																		'Text of the center-aligned label for the scale.',
																},
																right: {
																	type: 'string',
																	description:
																		'Text of the right-aligned label for the scale.',
																},
															},
															required: [],
														},
														start_at_one: {
															type: 'boolean',
															description:
																'True if range numbering should start at 1. Available for `opinion_scale`.',
														},
														structure: {
															type: 'string',
															description:
																'Date format for answers. Available for `date`. Default is `DDMMYYYY`.',
															default: '',
															enum: [
																'',
																'MMDDYYYY',
																'DDMMYYYY',
																'YYYYMMDD',
															],
														},
														separator: {
															type: 'string',
															description:
																'Character between month, day, and year. Available for `date`. Default is `/`.',
															default: '',
															enum: ['', '/', '-', '.'],
														},
														currency: {
															type: 'string',
															description:
																'Currency of the payment. Available for `payment`. Default is `EUR`.',
															default: '',
															enum: [
																'',
																'AUD',
																'BRL',
																'CAD',
																'CHF',
																'DKK',
																'EUR',
																'GBP',
																'MXN',
																'NOK',
																'SEK',
																'USD',
															],
														},
														email_receipts: {
															type: 'boolean',
															description:
																"Enables collection of the customer's email so Stripe can send a payment receipt. Available for `payment`.",
														},
														additional_payment_methods: {
															type: 'array',
															description:
																'Enabled payment methods allowed for payment (for example Google Pay or Apple Pay). Available for `payment`.',
															items: {
																type: 'string',
																description:
																	'An enabled payment method name.',
															},
														},
														price: {
															type: 'object',
															description:
																'Price of the item. Available for `payment`.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'Specifies that the value is a variable.',
																	default: '',
																	enum: ['', 'variable'],
																},
																value: {
																	type: 'string',
																	description:
																		'Variable name to use for the price.',
																	default: '',
																	enum: ['', 'price'],
																},
															},
															required: [],
														},
														show_button: {
															type: 'boolean',
															description:
																'True to display a button. Available for `group` and `payment`.',
														},
														default_country_code: {
															type: 'string',
															description:
																'Default 2-letter ISO 3166-1 country code. Available for `phone_number`. Default is `us`.',
														},
														regexp: {
															type: 'string',
															description:
																'Regular expression pattern to validate the answer. Available for `long_text`.',
														},
														allowed_answer_types: {
															type: 'array',
															description:
																'List of allowed answer types for the field. Available for `multi_format`.',
															items: {
																type: 'string',
																description:
																	'An allowed answer type.',
															},
														},
														availability: {
															type: 'object',
															description:
																'Weekly availability for booking, with one entry per day plus a required `timezone`. Available for `google_calendar`.',
															properties: {
																monday: {
																	type: 'array',
																	description:
																		'Available time slots on Monday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																tuesday: {
																	type: 'array',
																	description:
																		'Available time slots on Tuesday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																wednesday: {
																	type: 'array',
																	description:
																		'Available time slots on Wednesday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																thursday: {
																	type: 'array',
																	description:
																		'Available time slots on Thursday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																friday: {
																	type: 'array',
																	description:
																		'Available time slots on Friday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																saturday: {
																	type: 'array',
																	description:
																		'Available time slots on Saturday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																sunday: {
																	type: 'array',
																	description:
																		'Available time slots on Sunday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																timezone: {
																	type: 'string',
																	description:
																		'IANA time zone name (for example `Europe/Madrid`) used to interpret all slot times. Required when availability is provided.',
																},
															},
															required: [],
														},
														booking_limits: {
															type: 'object',
															description:
																'Optional caps on how many slots can be booked. Available for `google_calendar`.',
															properties: {
																max_daily_bookings: {
																	type: 'number',
																	description:
																		'Maximum number of bookings allowed per day.',
																},
																buffer_duration: {
																	type: 'number',
																	description:
																		'Buffer time, in minutes, to keep free between consecutive bookings.',
																},
															},
															required: [],
														},
														calendar_id: {
															type: 'string',
															description:
																'Identifier of the Google Calendar to book against. Available for `google_calendar`.',
														},
														event: {
															type: 'object',
															description:
																'Event details written to the booked calendar invite. Available for `google_calendar`.',
															properties: {
																description: {
																	type: 'string',
																	description:
																		'Description of the calendar event created when a respondent books a slot.',
																},
																duration: {
																	type: 'object',
																	description:
																		'Duration of the calendar event.',
																	properties: {
																		time: {
																			type: 'number',
																			description:
																				'Numeric length of the event, expressed in `unit`. Must be a positive integer.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'Unit of time for `time`.',
																			default: '',
																			enum: [
																				'',
																				'hours',
																				'minutes',
																			],
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														reminders: {
															type: 'object',
															description:
																'Optional reminder sent to respondents ahead of a booked slot. Available for `google_calendar`.',
															properties: {
																amount: {
																	type: 'number',
																	description:
																		'Numeric amount of time before the slot at which to send the reminder, expressed in `unit`.',
																},
																unit: {
																	type: 'string',
																	description:
																		'Unit of time for `amount`.',
																	default: '',
																	enum: [
																		'',
																		'minute',
																		'hour',
																		'day',
																		'week',
																	],
																},
															},
															required: [],
														},
														scheduling_window: {
															type: 'object',
															description:
																'Constraints on when respondents can book a slot. Available for `google_calendar`.',
															properties: {
																start_at: {
																	type: 'string',
																	description:
																		'Earliest date or datetime at which a respondent can book a slot.',
																},
																end_at: {
																	type: 'string',
																	description:
																		'Latest date or datetime at which a respondent can book a slot.',
																},
																max_advanced_booking_days: {
																	type: 'number',
																	description:
																		'Maximum number of days in advance a respondent can book a slot.',
																},
																min_lead_time_hours: {
																	type: 'number',
																	description:
																		'Minimum number of hours between booking and the start of the slot.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												validations: {
													type: 'object',
													description: 'Validation rules for the field.',
													properties: {
														required: {
															type: 'boolean',
															description:
																'True if respondents must provide an answer. Available for `matrix`, `ranking`, `checkbox`, `date`, `dropdown`, `email`, `file_upload`, `legal`, `long_text`, `multiple_choice`, `number`, `opinion_scale`, `payment`, `picture_choice`, `rating`, `short_text`, `signature`, `website`, `phone_number`, and `yes_no`.',
														},
														max_length: {
															type: 'number',
															description:
																'Maximum number of characters allowed in the answer. Available for `long_text` and `short_text`.',
														},
														min_value: {
															type: 'number',
															description:
																'Minimum value allowed in the answer. Must be a positive integer. Available for `number`.',
														},
														max_value: {
															type: 'number',
															description:
																'Maximum value allowed in the answer. Must be a positive integer. Available for `number`.',
														},
														min_selection: {
															type: 'number',
															description:
																'Minimum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
														max_selection: {
															type: 'number',
															description:
																'Maximum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
													},
													required: [],
												},
												attachment: {
													type: 'object',
													description:
														'Image or video displayed with the field.',
													properties: {
														type: {
															type: 'string',
															description: 'Type of attachment.',
															default: '',
															enum: ['', 'image', 'video'],
														},
														href: {
															type: 'string',
															description:
																"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
														},
														scale: {
															type: 'string',
															description:
																'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
															default: '',
															enum: ['', 0.4, 0.6, 0.8, 1],
														},
														properties: {
															type: 'object',
															description:
																'Optional attachment properties.',
															properties: {
																description: {
																	type: 'string',
																	description:
																		'Alt text that describes the image for people with visual impairments.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												layout: {
													type: 'object',
													description:
														'Position of the field attachment.',
													properties: {
														type: {
															type: 'string',
															description: 'Type of layout.',
															default: '',
															enum: [
																'',
																'split',
																'wallpaper',
																'float',
																'stack',
															],
														},
														placement: {
															type: 'string',
															description:
																'Position of media for split and float layouts.',
															default: '',
															enum: ['', 'left', 'right'],
														},
														attachment: {
															type: 'object',
															description:
																'Image or video used by this layout.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'Type of attachment.',
																	default: '',
																	enum: ['', 'image', 'video'],
																},
																href: {
																	type: 'string',
																	description:
																		"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
																},
																scale: {
																	type: 'string',
																	description:
																		'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
																	default: '',
																	enum: ['', 0.4, 0.6, 0.8, 1],
																},
																properties: {
																	type: 'object',
																	description:
																		'Optional attachment properties.',
																	properties: {
																		description: {
																			type: 'string',
																			description:
																				'Alt text that describes the image for people with visual impairments.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														viewport_overrides: {
															type: 'object',
															description:
																'Layout-specific overrides per viewport (small / large).',
															properties: {
																small: {
																	type: 'object',
																	description:
																		'Overrides for small viewports.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Layout type for the small viewport.',
																			default: '',
																			enum: [
																				'',
																				'split',
																				'wallpaper',
																				'float',
																				'stack',
																			],
																		},
																		placement: {
																			type: 'string',
																			description:
																				'Media position for split and float layouts on the small viewport.',
																			default: '',
																			enum: [
																				'',
																				'left',
																				'right',
																			],
																		},
																	},
																	required: [],
																},
																large: {
																	type: 'object',
																	description:
																		'Overrides for large viewports.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Layout type for the large viewport.',
																			default: '',
																			enum: [
																				'',
																				'split',
																				'wallpaper',
																				'float',
																				'stack',
																			],
																		},
																		placement: {
																			type: 'string',
																			description:
																				'Media position for split and float layouts on the large viewport.',
																			default: '',
																			enum: [
																				'',
																				'left',
																				'right',
																			],
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
												media: {
													type: 'array',
													description:
														'Video question to display with the field.',
													items: {
														type: 'object',
														description:
															'A media item displayed with the field.',
														properties: {
															ref: {
																type: 'string',
																description:
																	'Readable name you can use to reference the media item.',
															},
															enabled: {
																type: 'boolean',
																description:
																	'True if the media item should be displayed. Default is true.',
															},
															href: {
																type: 'string',
																description:
																	'URL for the media item.',
															},
															type: {
																type: 'string',
																description: 'Type of media.',
																default: '',
																enum: ['', 'video'],
															},
															properties: {
																type: 'object',
																description:
																	'Optional media properties.',
																properties: {
																	fit: {
																		type: 'boolean',
																		description:
																			'True to fit the media to the available space.',
																	},
																	interaction_delay: {
																		type: 'number',
																		description:
																			'Delay in seconds before the media item is displayed.',
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
									allow_multiple_selection: {
										type: 'boolean',
										description:
											'True to allow respondents to select more than one answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
									randomize: {
										type: 'boolean',
										description:
											'True to present answer choices in a new random order for each respondent. Available for `ranking`, `multiple_choice`, `picture_choice`, and `dropdown`.',
									},
									allow_other_choice: {
										type: 'boolean',
										description:
											'True to include an Other option. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
									vertical_alignment: {
										type: 'boolean',
										description:
											'True to list answer choices vertically. Available for `ranking` and `multiple_choice`.',
									},
									supersized: {
										type: 'boolean',
										description:
											'True to use larger-sized images for answer choices. Available for `picture_choice`.',
									},
									show_labels: {
										type: 'boolean',
										description:
											'True to show text labels and images as answer choices. Available for `picture_choice`. Default is true.',
									},
									alphabetical_order: {
										type: 'boolean',
										description:
											'True to list dropdown choices alphabetically. Available for `dropdown`.',
									},
									hide_marks: {
										type: 'boolean',
										description:
											'True to hide quotation marks around a statement. Available for `statement`.',
									},
									button_text: {
										type: 'string',
										description:
											'Text to display on the button. Available for `group`, `payment`, and `statement`. Default is `Continue`.',
									},
									steps: {
										type: 'number',
										description:
											"Number of steps in the scale's range. Minimum is 5 and maximum is 11. Available for `opinion_scale` and `rating`.",
									},
									shape: {
										type: 'string',
										description:
											"Shape to display on the scale's steps. Available for `opinion_scale` and `rating`. Default is `star`.",
										default: '',
										enum: [
											'',
											'cat',
											'circle',
											'cloud',
											'crown',
											'dog',
											'droplet',
											'flag',
											'heart',
											'lightbulb',
											'pencil',
											'skull',
											'star',
											'thunderbolt',
											'tick',
											'trophy',
											'up',
											'user',
										],
									},
									labels: {
										type: 'object',
										description:
											"Labels that help respondents understand the scale's range. Available for `opinion_scale` and `rating`.",
										properties: {
											left: {
												type: 'string',
												description:
													'Text of the left-aligned label for the scale.',
											},
											center: {
												type: 'string',
												description:
													'Text of the center-aligned label for the scale.',
											},
											right: {
												type: 'string',
												description:
													'Text of the right-aligned label for the scale.',
											},
										},
										required: [],
									},
									start_at_one: {
										type: 'boolean',
										description:
											'True if range numbering should start at 1. Available for `opinion_scale`.',
									},
									structure: {
										type: 'string',
										description:
											'Date format for answers. Available for `date`. Default is `DDMMYYYY`.',
										default: '',
										enum: ['', 'MMDDYYYY', 'DDMMYYYY', 'YYYYMMDD'],
									},
									separator: {
										type: 'string',
										description:
											'Character between month, day, and year. Available for `date`. Default is `/`.',
										default: '',
										enum: ['', '/', '-', '.'],
									},
									currency: {
										type: 'string',
										description:
											'Currency of the payment. Available for `payment`. Default is `EUR`.',
										default: '',
										enum: [
											'',
											'AUD',
											'BRL',
											'CAD',
											'CHF',
											'DKK',
											'EUR',
											'GBP',
											'MXN',
											'NOK',
											'SEK',
											'USD',
										],
									},
									email_receipts: {
										type: 'boolean',
										description:
											"Enables collection of the customer's email so Stripe can send a payment receipt. Available for `payment`.",
									},
									additional_payment_methods: {
										type: 'array',
										description:
											'Enabled payment methods allowed for payment (for example Google Pay or Apple Pay). Available for `payment`.',
										items: {
											type: 'string',
											description: 'An enabled payment method name.',
										},
									},
									price: {
										type: 'object',
										description: 'Price of the item. Available for `payment`.',
										properties: {
											type: {
												type: 'string',
												description:
													'Specifies that the value is a variable.',
												default: '',
												enum: ['', 'variable'],
											},
											value: {
												type: 'string',
												description: 'Variable name to use for the price.',
												default: '',
												enum: ['', 'price'],
											},
										},
										required: [],
									},
									show_button: {
										type: 'boolean',
										description:
											'True to display a button. Available for `group` and `payment`.',
									},
									default_country_code: {
										type: 'string',
										description:
											'Default 2-letter ISO 3166-1 country code. Available for `phone_number`. Default is `us`.',
									},
									regexp: {
										type: 'string',
										description:
											'Regular expression pattern to validate the answer. Available for `long_text`.',
									},
									allowed_answer_types: {
										type: 'array',
										description:
											'List of allowed answer types for the field. Available for `multi_format`.',
										items: {
											type: 'string',
											description: 'An allowed answer type.',
										},
									},
									availability: {
										type: 'object',
										description:
											'Weekly availability for booking, with one entry per day plus a required `timezone`. Available for `google_calendar`.',
										properties: {
											monday: {
												type: 'array',
												description: 'Available time slots on Monday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											tuesday: {
												type: 'array',
												description: 'Available time slots on Tuesday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											wednesday: {
												type: 'array',
												description: 'Available time slots on Wednesday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											thursday: {
												type: 'array',
												description: 'Available time slots on Thursday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											friday: {
												type: 'array',
												description: 'Available time slots on Friday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											saturday: {
												type: 'array',
												description: 'Available time slots on Saturday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											sunday: {
												type: 'array',
												description: 'Available time slots on Sunday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											timezone: {
												type: 'string',
												description:
													'IANA time zone name (for example `Europe/Madrid`) used to interpret all slot times. Required when availability is provided.',
											},
										},
										required: [],
									},
									booking_limits: {
										type: 'object',
										description:
											'Optional caps on how many slots can be booked. Available for `google_calendar`.',
										properties: {
											max_daily_bookings: {
												type: 'number',
												description:
													'Maximum number of bookings allowed per day.',
											},
											buffer_duration: {
												type: 'number',
												description:
													'Buffer time, in minutes, to keep free between consecutive bookings.',
											},
										},
										required: [],
									},
									calendar_id: {
										type: 'string',
										description:
											'Identifier of the Google Calendar to book against. Available for `google_calendar`.',
									},
									event: {
										type: 'object',
										description:
											'Event details written to the booked calendar invite. Available for `google_calendar`.',
										properties: {
											description: {
												type: 'string',
												description:
													'Description of the calendar event created when a respondent books a slot.',
											},
											duration: {
												type: 'object',
												description: 'Duration of the calendar event.',
												properties: {
													time: {
														type: 'number',
														description:
															'Numeric length of the event, expressed in `unit`. Must be a positive integer.',
													},
													unit: {
														type: 'string',
														description: 'Unit of time for `time`.',
														default: '',
														enum: ['', 'hours', 'minutes'],
													},
												},
												required: [],
											},
										},
										required: [],
									},
									reminders: {
										type: 'object',
										description:
											'Optional reminder sent to respondents ahead of a booked slot. Available for `google_calendar`.',
										properties: {
											amount: {
												type: 'number',
												description:
													'Numeric amount of time before the slot at which to send the reminder, expressed in `unit`.',
											},
											unit: {
												type: 'string',
												description: 'Unit of time for `amount`.',
												default: '',
												enum: ['', 'minute', 'hour', 'day', 'week'],
											},
										},
										required: [],
									},
									scheduling_window: {
										type: 'object',
										description:
											'Constraints on when respondents can book a slot. Available for `google_calendar`.',
										properties: {
											start_at: {
												type: 'string',
												description:
													'Earliest date or datetime at which a respondent can book a slot.',
											},
											end_at: {
												type: 'string',
												description:
													'Latest date or datetime at which a respondent can book a slot.',
											},
											max_advanced_booking_days: {
												type: 'number',
												description:
													'Maximum number of days in advance a respondent can book a slot.',
											},
											min_lead_time_hours: {
												type: 'number',
												description:
													'Minimum number of hours between booking and the start of the slot.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							validations: {
								type: 'object',
								description: 'Validation rules for the field.',
								properties: {
									required: {
										type: 'boolean',
										description:
											'True if respondents must provide an answer. Available for `matrix`, `ranking`, `checkbox`, `date`, `dropdown`, `email`, `file_upload`, `legal`, `long_text`, `multiple_choice`, `number`, `opinion_scale`, `payment`, `picture_choice`, `rating`, `short_text`, `signature`, `website`, `phone_number`, and `yes_no`.',
									},
									max_length: {
										type: 'number',
										description:
											'Maximum number of characters allowed in the answer. Available for `long_text` and `short_text`.',
									},
									min_value: {
										type: 'number',
										description:
											'Minimum value allowed in the answer. Must be a positive integer. Available for `number`.',
									},
									max_value: {
										type: 'number',
										description:
											'Maximum value allowed in the answer. Must be a positive integer. Available for `number`.',
									},
									min_selection: {
										type: 'number',
										description:
											'Minimum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
									max_selection: {
										type: 'number',
										description:
											'Maximum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed with the field.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
									},
									scale: {
										type: 'string',
										description:
											'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
										default: '',
										enum: ['', 0.4, 0.6, 0.8, 1],
									},
									properties: {
										type: 'object',
										description: 'Optional attachment properties.',
										properties: {
											description: {
												type: 'string',
												description:
													'Alt text that describes the image for people with visual impairments.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							layout: {
								type: 'object',
								description: 'Position of the field attachment.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of layout.',
										default: '',
										enum: ['', 'split', 'wallpaper', 'float', 'stack'],
									},
									placement: {
										type: 'string',
										description:
											'Position of media for split and float layouts.',
										default: '',
										enum: ['', 'left', 'right'],
									},
									attachment: {
										type: 'object',
										description: 'Image or video used by this layout.',
										properties: {
											type: {
												type: 'string',
												description: 'Type of attachment.',
												default: '',
												enum: ['', 'image', 'video'],
											},
											href: {
												type: 'string',
												description:
													"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
											},
											scale: {
												type: 'string',
												description:
													'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
												default: '',
												enum: ['', 0.4, 0.6, 0.8, 1],
											},
											properties: {
												type: 'object',
												description: 'Optional attachment properties.',
												properties: {
													description: {
														type: 'string',
														description:
															'Alt text that describes the image for people with visual impairments.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									viewport_overrides: {
										type: 'object',
										description:
											'Layout-specific overrides per viewport (small / large).',
										properties: {
											small: {
												type: 'object',
												description: 'Overrides for small viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the small viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the small viewport.',
														default: '',
														enum: ['', 'left', 'right'],
													},
												},
												required: [],
											},
											large: {
												type: 'object',
												description: 'Overrides for large viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the large viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the large viewport.',
														default: '',
														enum: ['', 'left', 'right'],
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
							media: {
								type: 'array',
								description: 'Video question to display with the field.',
								items: {
									type: 'object',
									description: 'A media item displayed with the field.',
									properties: {
										ref: {
											type: 'string',
											description:
												'Readable name you can use to reference the media item.',
										},
										enabled: {
											type: 'boolean',
											description:
												'True if the media item should be displayed. Default is true.',
										},
										href: {
											type: 'string',
											description: 'URL for the media item.',
										},
										type: {
											type: 'string',
											description: 'Type of media.',
											default: '',
											enum: ['', 'video'],
										},
										properties: {
											type: 'object',
											description: 'Optional media properties.',
											properties: {
												fit: {
													type: 'boolean',
													description:
														'True to fit the media to the available space.',
												},
												interaction_delay: {
													type: 'number',
													description:
														'Delay in seconds before the media item is displayed.',
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
				hidden: {
					type: 'array',
					description: 'Hidden Fields to use in the form.',
					items: { type: 'string', description: 'Name of a Hidden Field.' },
				},
				variables: {
					type: 'object',
					description:
						'Running totals and enrichment variables used in the form. Open object of variable names to numeric or text values (commonly `score` and `price`).',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				welcome_screens: {
					type: 'array',
					description: "Settings and properties for the form's welcome screen.",
					items: {
						type: 'object',
						description: 'A welcome screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the welcome screen.',
							},
							properties: {
								type: 'object',
								description: 'Settings for the welcome screen.',
								properties: {
									description: {
										type: 'string',
										description: 'Description of the welcome screen.',
									},
									show_button: {
										type: 'boolean',
										description:
											'True to display a Start button on the welcome screen.',
									},
									button_text: {
										type: 'string',
										description: 'Text to display on the Start button.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the welcome screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
									},
									scale: {
										type: 'string',
										description:
											'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
										default: '',
										enum: ['', 0.4, 0.6, 0.8, 1],
									},
									properties: {
										type: 'object',
										description: 'Optional attachment properties.',
										properties: {
											description: {
												type: 'string',
												description:
													'Alt text that describes the image for people with visual impairments.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							layout: {
								type: 'object',
								description: 'Position of the welcome screen attachment.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of layout.',
										default: '',
										enum: ['', 'split', 'wallpaper', 'float', 'stack'],
									},
									placement: {
										type: 'string',
										description:
											'Position of media for split and float layouts.',
										default: '',
										enum: ['', 'left', 'right'],
									},
									attachment: {
										type: 'object',
										description: 'Image or video used by this layout.',
										properties: {
											type: {
												type: 'string',
												description: 'Type of attachment.',
												default: '',
												enum: ['', 'image', 'video'],
											},
											href: {
												type: 'string',
												description:
													"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
											},
											scale: {
												type: 'string',
												description:
													'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
												default: '',
												enum: ['', 0.4, 0.6, 0.8, 1],
											},
											properties: {
												type: 'object',
												description: 'Optional attachment properties.',
												properties: {
													description: {
														type: 'string',
														description:
															'Alt text that describes the image for people with visual impairments.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									viewport_overrides: {
										type: 'object',
										description:
											'Layout-specific overrides per viewport (small / large).',
										properties: {
											small: {
												type: 'object',
												description: 'Overrides for small viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the small viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the small viewport.',
														default: '',
														enum: ['', 'left', 'right'],
													},
												},
												required: [],
											},
											large: {
												type: 'object',
												description: 'Overrides for large viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the large viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the large viewport.',
														default: '',
														enum: ['', 'left', 'right'],
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
						},
						required: [],
					},
				},
				thankyou_screens: {
					type: 'array',
					description: "Settings and properties for the form's thank you screen.",
					items: {
						type: 'object',
						description: 'A thank you screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the thank you screen.',
							},
							type: {
								type: 'string',
								description: 'The type of thank you screen.',
								default: '',
								enum: ['', 'thankyou_screen', 'url_redirect'],
							},
							properties: {
								type: 'object',
								description: 'Settings for the thank you screen.',
								properties: {
									show_button: {
										type: 'boolean',
										description:
											'True to display a button on the thank you screen.',
									},
									button_text: {
										type: 'string',
										description: 'Text to display on the button.',
									},
									button_mode: {
										type: 'string',
										description:
											'What happens when respondents click the button. Premium feature.',
										default: '',
										enum: ['', 'reload', 'default_redirect', 'redirect'],
									},
									redirect_url: {
										type: 'string',
										description:
											'URL where the typeform should redirect after submission, if you specified `redirect` for `button_mode` or are using the `url_redirect` type.',
									},
									share_icons: {
										type: 'boolean',
										description:
											'True to display social media sharing icons on the thank you screen.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the thank you screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
									},
									scale: {
										type: 'string',
										description:
											'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
										default: '',
										enum: ['', 0.4, 0.6, 0.8, 1],
									},
									properties: {
										type: 'object',
										description: 'Optional attachment properties.',
										properties: {
											description: {
												type: 'string',
												description:
													'Alt text that describes the image for people with visual impairments.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							layout: {
								type: 'object',
								description: 'Position of the thank you screen attachment.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of layout.',
										default: '',
										enum: ['', 'split', 'wallpaper', 'float', 'stack'],
									},
									placement: {
										type: 'string',
										description:
											'Position of media for split and float layouts.',
										default: '',
										enum: ['', 'left', 'right'],
									},
									attachment: {
										type: 'object',
										description: 'Image or video used by this layout.',
										properties: {
											type: {
												type: 'string',
												description: 'Type of attachment.',
												default: '',
												enum: ['', 'image', 'video'],
											},
											href: {
												type: 'string',
												description:
													"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
											},
											scale: {
												type: 'string',
												description:
													'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
												default: '',
												enum: ['', 0.4, 0.6, 0.8, 1],
											},
											properties: {
												type: 'object',
												description: 'Optional attachment properties.',
												properties: {
													description: {
														type: 'string',
														description:
															'Alt text that describes the image for people with visual impairments.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									viewport_overrides: {
										type: 'object',
										description:
											'Layout-specific overrides per viewport (small / large).',
										properties: {
											small: {
												type: 'object',
												description: 'Overrides for small viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the small viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the small viewport.',
														default: '',
														enum: ['', 'left', 'right'],
													},
												},
												required: [],
											},
											large: {
												type: 'object',
												description: 'Overrides for large viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the large viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the large viewport.',
														default: '',
														enum: ['', 'left', 'right'],
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
						},
						required: [],
					},
				},
				consent_screen: {
					type: 'object',
					description:
						'Optional consent screen configuration for data collection compliance.',
					properties: {
						email: {
							type: 'string',
							description: 'Email address where consent information should be sent.',
						},
						message: {
							type: 'string',
							description: 'Message to display or send regarding the consent.',
						},
					},
					required: [],
				},
				logic: {
					type: 'array',
					description:
						'Logic Jump objects to use in the form. When referring to fields, those fields must already exist on the form.',
					items: {
						type: 'object',
						description: 'A Logic Jump definition.',
						properties: {
							type: {
								type: 'string',
								description:
									'Specifies whether the Logic Jump is based on a question field or Hidden Field.',
								default: '',
								enum: ['', 'field', 'hidden'],
							},
							ref: {
								type: 'string',
								description: 'Reference to the field that triggers the Logic Jump.',
							},
							actions: {
								type: 'array',
								description:
									"Objects that define the Logic Jump's behavior. Required when a logic item is provided.",
								items: {
									type: 'object',
									description: 'A Logic Jump action.',
									properties: {
										action: {
											type: 'string',
											description:
												'Behavior the Logic Jump will take. Required when an action is provided.',
											default: '',
											enum: [
												'',
												'jump',
												'add',
												'subtract',
												'multiply',
												'divide',
												'set',
											],
										},
										details: {
											type: 'object',
											description:
												'Properties that further specify how the Logic Jump will behave. Required when an action is provided.',
											properties: {
												to: {
													type: 'object',
													description:
														'Where the Logic Jump leads — to another field, a thank you screen, or an outcome.',
													properties: {
														type: {
															type: 'string',
															description:
																'Logic Jump `to` option you are using.',
															default: '',
															enum: [
																'',
																'field',
																'thankyou',
																'outcome',
															],
														},
														value: {
															type: 'string',
															description:
																'The `ref` value for the field, Hidden Field, or thank you screen the Logic Jump leads to.',
														},
													},
													required: [],
												},
												target: {
													type: 'object',
													description:
														'Keeps a running total for variables.',
													properties: {
														type: {
															type: 'string',
															description:
																'Specifies that the value is a variable.',
															default: '',
															enum: ['', 'variable'],
														},
														value: {
															type: 'string',
															description:
																'Variable name to use in the calculation.',
														},
													},
													required: [],
												},
												value: {
													type: 'object',
													description:
														'Value to use in the calculation for the variables.',
													properties: {
														type: {
															type: 'string',
															description:
																'Which type of value is used: a numeric constant, a variable name, or an `evaluation` to determine an outcome.',
															default: '',
															enum: [
																'',
																'constant',
																'variable',
																'evaluation',
															],
														},
														value: {
															type: 'string',
															description:
																'Value used in the variable calculation. May be a number, variable name, or evaluation depending on `type`.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										condition: {
											type: 'object',
											description:
												'Conditions for executing the Logic Jump (the IF statement). Required when an action is provided.',
											properties: {
												op: {
													type: 'string',
													description: 'Operator for the condition.',
													default: '',
													enum: [
														'',
														'begins_with',
														'ends_with',
														'contains',
														'not_contains',
														'lower_than',
														'lower_equal_than',
														'greater_than',
														'greater_equal_than',
														'is',
														'is_not',
														'equal',
														'not_equal',
														'always',
														'on',
														'not_on',
														'earlier_than',
														'earlier_than_or_on',
														'later_than',
														'later_than_or_on',
													],
												},
												vars: {
													type: 'array',
													description:
														'Objects that define the field type and value to evaluate with the operator. Required when a condition is provided.',
													items: {
														type: 'object',
														description:
															'A value the condition evaluates.',
														properties: {
															type: {
																type: 'string',
																description:
																	'Type of value the condition object refers to.',
																default: '',
																enum: [
																	'',
																	'field',
																	'hidden',
																	'variable',
																	'constant',
																	'choice',
																],
															},
															value: {
																type: 'string',
																description:
																	'Value to check for in the `type` field. May be a field ref, hidden field name, variable name, choice, number, or boolean depending on `type`.',
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
						},
						required: [],
					},
				},
				theme: {
					type: 'object',
					description:
						'Theme to use for the form. If omitted on update, Typeform applies a new copy of the default theme.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of the theme, for example `https://api.typeform.com/themes/Fs24as`.',
						},
					},
					required: [],
				},
				workspace: {
					type: 'object',
					description:
						'Workspace that contains the form. If omitted, Typeform saves the form in the default workspace.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of the workspace, for example `https://api.typeform.com/workspaces/Aw33bz`.',
						},
					},
					required: [],
				},
				settings: {
					type: 'object',
					description:
						'Form settings and metadata, including language, public availability, progress bar, and search-engine indexing.',
					properties: {
						language: {
							type: 'string',
							description: 'Language to use for the form.',
							default: '',
							enum: [
								'',
								'en',
								'es',
								'ca',
								'fr',
								'de',
								'ru',
								'it',
								'da',
								'pt',
								'ch',
								'zh',
								'nl',
								'no',
								'uk',
								'ja',
								'ko',
								'hr',
								'fi',
								'sv',
								'pl',
								'el',
								'hu',
								'tr',
								'cs',
								'et',
								'di',
							],
						},
						is_public: {
							type: 'boolean',
							description:
								'True if the form is public. Otherwise false (the form is private). Default is true.',
						},
						autosave_progress: {
							type: 'boolean',
							description:
								'True to enable saving partial form responses on the client side. Default is true.',
						},
						progress_bar: {
							type: 'string',
							description:
								'Basis for the progress bar. `proportion` shows the number of questions answered; `percentage` shows the percentage answered. Default is `proportion`.',
							default: '',
							enum: ['', 'percentage', 'proportion'],
						},
						show_progress_bar: {
							type: 'boolean',
							description: 'True to display the progress bar. Default is true.',
						},
						show_typeform_branding: {
							type: 'boolean',
							description:
								'True to display Typeform branding. Hiding branding is available for Premium accounts. Default is true.',
						},
						show_time_to_complete: {
							type: 'boolean',
							description:
								'True to display estimated time to complete on welcome screens. Mutually exclusive with `show_number_of_submissions`. Default is true.',
						},
						show_number_of_submissions: {
							type: 'boolean',
							description:
								'True to display the number of submissions on welcome screens. Mutually exclusive with `show_time_to_complete`.',
						},
						show_cookie_consent: {
							type: 'boolean',
							description: 'True to request cookie consent through a banner.',
						},
						show_question_number: {
							type: 'boolean',
							description:
								'True to display the question number on each block. Default is true.',
						},
						show_key_hint_on_choices: {
							type: 'boolean',
							description:
								'True to display key hint letters on Multiple Choice, Picture Choice, Legal, and Yes/No blocks. Default is true.',
						},
						hide_navigation: {
							type: 'boolean',
							description:
								'True to hide the navigation arrows in the bottom-right corner of the form.',
						},
						meta: {
							type: 'object',
							description: 'Search-engine metadata for the typeform.',
							properties: {
								allow_indexing: {
									type: 'boolean',
									description:
										'True to allow search engines to index your typeform. Default is true.',
								},
								description: {
									type: 'string',
									description:
										'Description for search engines to display for your typeform.',
								},
								image: {
									type: 'object',
									description:
										'Image for search engines to display for your typeform.',
									properties: {
										href: {
											type: 'string',
											description: 'URL of the image for search engines.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						redirect_after_submit_url: {
							type: 'string',
							description: 'URL where the typeform should redirect upon submission.',
						},
						google_analytics: {
							type: 'string',
							description: 'Google Analytics tracking ID to use for the form.',
						},
						facebook_pixel: {
							type: 'string',
							description: 'Facebook Pixel tracking ID to use for the form.',
						},
						google_tag_manager: {
							type: 'string',
							description: 'Google Tag Manager ID to use for the form.',
						},
						mode: {
							type: 'string',
							description:
								'The mode of the form. If not specified, the form is in Universal mode.',
							default: '',
							enum: ['', 'knowledge_quiz'],
						},
						feedback_mode: {
							type: 'string',
							description:
								'How feedback is shown to respondents. `knowledge_quiz_inline` shows correct answers after each question in Knowledge Quiz mode.',
							default: '',
							enum: ['', 'knowledge_quiz_inline'],
						},
						milestones: {
							type: 'array',
							description:
								'Block references indicating where each partial submit point is located.',
							items: {
								type: 'object',
								description: 'A partial submit point.',
								properties: {
									field_ref: {
										type: 'string',
										description:
											'The partial submit point is positioned after the question with this `field_ref`.',
									},
									status: {
										type: 'string',
										description: 'Informative. Cannot be set through the API.',
										default: '',
										enum: ['', 'active', 'inactive'],
									},
									reason: {
										type: 'string',
										description: 'Informative. Cannot be set through the API.',
										default: '',
										enum: ['', 'wrong_position', 'incompatible_feature'],
									},
								},
								required: [],
							},
						},
						enrichment_in_renderer: {
							type: 'object',
							description:
								'Controls data enrichment in the renderer. See [Data enrichment with Typeform](https://www.typeform.com/developers/create/).',
							properties: {
								toggle: {
									type: 'boolean',
									description:
										'True to enable enrichment in the renderer, false to disable it.',
								},
								active: {
									type: 'boolean',
									description:
										'Informative. Cannot be set through the API. If false, enrichment in the renderer is disabled.',
								},
							},
							required: [],
						},
						email_consent_notifications_config: {
							type: 'object',
							description:
								'Configuration for signed-document email notifications (signature block).',
							properties: {
								send_email_copy: {
									type: 'boolean',
									description:
										"Whether a copy of the signed document is BCC'd to `recipient_emails`. When `recipient_emails` is empty or absent, the copy is sent to the account owner. Setting this to false always resets `recipient_emails`. Default is true. Required when this object is provided.",
								},
								recipient_emails: {
									type: 'array',
									description:
										'Email addresses that receive a BCC copy of the signed document. Only meaningful when `send_email_copy` is true. Maximum 10 addresses; duplicates are not allowed.',
									items: {
										type: 'string',
										description:
											'An email address that receives a BCC copy of the signed document.',
									},
								},
							},
							required: [],
						},
						captcha: {
							type: 'boolean',
							description:
								'True to enable captcha on the typeform. See [Secure your forms with Google reCAPTCHA protection](https://www.typeform.com/help/).',
						},
						duplicate_prevention: {
							type: 'object',
							description:
								'Enable and set up duplicate response prevention. See [Prevent duplicate responses](https://www.typeform.com/help/).',
							properties: {
								type: {
									type: 'string',
									description:
										'`cookie`: duplicates may be submitted if cookies are cleared or the device changes. `cookie_ip`: prevent duplicates using cookies and IP. `url_param`: identify duplicates by a hidden-field URL parameter (Growth Custom plan).',
									default: '',
									enum: ['', 'cookie', 'cookie_ip', 'url_param'],
								},
								url_param: {
									type: 'string',
									description:
										"Name of the hidden field whose value identifies the respondent. Required when `type` is `url_param`, and must match a name declared in the form's `hidden` fields.",
								},
								responses_limit: {
									type: 'number',
									description:
										'Number of responses per respondent in the given period.',
								},
								period: {
									type: 'string',
									description: 'Time period for `responses_limit`.',
									default: '',
									enum: ['', 'day', 'week', 'month', 'year'],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cui_settings: {
					type: 'object',
					description: 'Conversation UI settings for the form.',
					properties: {
						avatar: {
							type: 'string',
							description:
								"URL for the image to use as conversation avatar. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`.",
						},
						is_typing_emulation_disabled: {
							type: 'boolean',
							description:
								'True to disable typing emulation (the delay between messages). Typing emulation is enabled by default.',
						},
						typing_emulation_speed: {
							type: 'string',
							description:
								'The pace at which messages appear in a conversation while typing emulation is enabled.',
							default: '',
							enum: ['', 'slow', 'medium', 'fast'],
						},
					},
					required: [],
				},
				self: {
					type: 'object',
					description: 'URL for the typeform resource.',
					properties: { href: { type: 'string', description: 'API URL for this form.' } },
					required: [],
				},
				_links: {
					type: 'object',
					description: 'Related URLs for the form.',
					properties: {
						display: { type: 'string', description: 'URL for the actual form.' },
						responses: {
							type: 'string',
							description: 'URL for the responses public API.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'createImage',
		label: 'Create an image',
		description: 'Adds an image to the Typeform account.',
		context:
			'---\nname: createImage\ndescription: Adds an image to the Typeform account.\n---\n\nCalls `POST /images` with a JSON body. Provide either a public **URL** or a base64 **Image** string (not a binary upload).\n\nDo not include `data:image/...` prefixes in the base64 string.\n\nSee the [Create image](https://www.typeform.com/developers/create/reference/create-image/) documentation.\n',
		accounts: { typeform2: { scope: ['images:write'] } },
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
				file_name: { type: 'string', description: 'File name for the image.' },
				image: {
					type: 'string',
					description:
						'Base64 code for the image. Do not include descriptors such as `data:image/png;base64,` — include only the base64 code. Send either `image` or `url`.',
				},
				url: {
					type: 'string',
					description: 'URL of the image to import. Send either `image` or `url`.',
				},
				upload_source: {
					type: 'string',
					description: 'The source of the image upload.',
					default: '',
					enum: ['', 'user_upload', 'stock_image', 'stock_icon', 'unknown'],
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique ID for the image.' },
				src: { type: 'string', description: 'URL for the image.' },
				file_name: {
					type: 'string',
					description: 'File name for the image (specified when the image is created).',
				},
				width: { type: 'number', description: 'Width of the image in pixels.' },
				height: { type: 'number', description: 'Height of the image in pixels.' },
				media_type: {
					type: 'string',
					description: 'The MIME type of the image.',
					default: '',
					enum: ['', 'image/gif', 'image/jpeg', 'image/png'],
				},
				has_alpha: {
					type: 'boolean',
					description:
						'True if the image has an alpha channel (some degree of transparency).',
				},
				avg_color: {
					type: 'string',
					description: 'Average color of the image in hexadecimal format.',
				},
				upload_source: {
					type: 'string',
					description: 'The source of the image upload.',
					default: '',
					enum: ['', 'user_upload', 'stock_image', 'stock_icon', 'unknown'],
				},
			},
			required: [],
		},
	},
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'createOrUpdateWebhook',
		label: 'Create or update a webhook',
		description: 'Creates or overwrites a webhook for a form.',
		context:
			'---\nname: createOrUpdateWebhook\ndescription: Creates or overwrites a webhook for a form.\n---\n\nCalls `PUT /forms/{form_id}/webhooks/{tag}`. If a webhook with this tag already exists, it is replaced.\n\n**Secret** is write-only and is not returned in the response.\n\n**Verify SSL** is read-only. Typeform derives it from the URL scheme (`https` → `true`, legacy `http` → `false`) and ignores a value sent on the request. The field is still returned in the response. See [Secure your webhooks](https://www.typeform.com/developers/webhooks/secure-your-webhooks/).\n\nSee the [Create or update webhook](https://www.typeform.com/developers/webhooks/reference/create-or-update-webhook/) documentation.\n',
		accounts: { typeform2: { scope: ['webhooks:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				form_id: {
					type: 'string',
					description:
						'Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.',
				},
				tag: {
					type: 'string',
					description: 'Unique name you want to use for the webhook.',
				},
				url: {
					type: 'string',
					description: 'Webhook URL. It must use `https://`.',
					pattern: '^[hH][tT][tT][pP][sS]://',
				},
				enabled: {
					type: 'boolean',
					description:
						'True if you want to send responses to the webhook immediately. Otherwise false.',
				},
				event_types: {
					type: 'object',
					description:
						'Event types this webhook is subscribed to. The webhook is triggered each time any of these events occurs.',
					properties: {
						form_response: {
							type: 'boolean',
							description: 'True to subscribe to completed form responses.',
						},
						form_response_partial: {
							type: 'boolean',
							description: 'True to subscribe to partial form responses.',
						},
					},
					required: [],
				},
				secret: {
					type: 'string',
					description:
						'If specified, used to sign the webhook payload with HMAC SHA256 so you can verify that it came from Typeform. Write-only; not returned on GET.',
				},
			},
			required: ['form_id', 'tag', 'url'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique ID for the webhook.' },
				form_id: { type: 'string', description: 'Unique ID for the typeform.' },
				tag: { type: 'string', description: 'Unique name of the webhook.' },
				url: { type: 'string', description: 'Webhook URL.' },
				enabled: {
					type: 'boolean',
					description: 'True if responses are sent to the webhook immediately.',
				},
				event_types: {
					type: 'object',
					description:
						'Event types this webhook is subscribed to. The webhook is triggered each time any of these events occurs.',
					properties: {
						form_response: {
							type: 'boolean',
							description:
								'True if the webhook is subscribed to completed form responses.',
						},
						form_response_partial: {
							type: 'boolean',
							description:
								'True if the webhook is subscribed to partial form responses.',
						},
					},
					required: [],
				},
				verify_ssl: {
					type: 'boolean',
					description:
						'Derived from the URL scheme: `true` for `https`, `false` for legacy `http`. A value sent on the request is ignored.',
				},
				created_at: {
					type: 'string',
					description:
						'Date and time when the webhook was created, in ISO 8601 UTC format.',
				},
				updated_at: {
					type: 'string',
					description: 'Date of last update to the webhook, in ISO 8601 UTC format.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'deleteForm',
		label: 'Delete a form',
		description: 'Deletes a form and all of its responses.',
		context:
			'---\nname: deleteForm\ndescription: Deletes a form and all of its responses.\n---\n\nCalls `DELETE /forms/{form_id}`. A successful delete returns HTTP 204 with no body.\n\nThis also deletes all responses for the form.\n\nSee the [Delete form](https://www.typeform.com/developers/create/reference/delete-form/) documentation.\n',
		accounts: { typeform2: { scope: ['forms:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				form_id: {
					type: 'string',
					description:
						'Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.',
				},
			},
			required: ['form_id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'deleteImage',
		label: 'Delete an image',
		description: 'Deletes an image from the Typeform account.',
		context:
			'---\nname: deleteImage\ndescription: Deletes an image from the Typeform account.\n---\n\nCalls `DELETE /images/{image_id}`. A successful delete returns HTTP 204 with no body.\n\nSee the [Delete image](https://www.typeform.com/developers/create/reference/delete-image/) documentation.\n',
		accounts: { typeform2: { scope: ['images:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				image_id: { type: 'string', description: 'Unique ID for the image to delete.' },
			},
			required: ['image_id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'deleteWebhook',
		label: 'Delete a webhook',
		description: 'Deletes a webhook.',
		context:
			'---\nname: deleteWebhook\ndescription: Deletes a webhook.\n---\n\nCalls `DELETE /forms/{form_id}/webhooks/{tag}`. A successful delete returns HTTP 204 with no body.\n\nSee the [Delete webhook](https://www.typeform.com/developers/webhooks/reference/delete-webhook/) documentation.\n',
		accounts: { typeform2: { scope: ['webhooks:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				form_id: {
					type: 'string',
					description:
						'Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.',
				},
				tag: { type: 'string', description: 'Unique name of the webhook to delete.' },
			},
			required: ['form_id', 'tag'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'getForm',
		label: 'Get a form',
		description: 'Retrieves a form by ID.',
		context:
			'---\nname: getForm\ndescription: Retrieves a form by ID.\n---\n\nCalls `GET /forms/{form_id}` and returns the full form resource, including theme and image references.\n\nUse **Get a form** before **Update a form**. A PUT update overwrites the stored form; omitted fields (and their responses) are deleted.\n\nSee the [Retrieve form](https://www.typeform.com/developers/create/reference/retrieve-form/) documentation.\n',
		accounts: { typeform2: { scope: ['forms:read'] } },
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
				form_id: {
					type: 'string',
					description:
						'Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.',
				},
			},
			required: ['form_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique ID of the form.' },
				created_at: {
					type: 'string',
					description: "Time of the form's creation, in ISO 8601 UTC format.",
				},
				last_updated_at: {
					type: 'string',
					description: 'Time of the last update, in ISO 8601 UTC format.',
				},
				type: { type: 'string', description: 'Type of form.' },
				language: {
					type: 'string',
					description: 'Language of the form. Default is `en`.',
					default: '',
					enum: [
						'',
						'en',
						'es',
						'ca',
						'fr',
						'de',
						'ru',
						'it',
						'da',
						'pt',
						'ch',
						'zh',
						'nl',
						'no',
						'uk',
						'ja',
						'ko',
						'hr',
						'fi',
						'sv',
						'pl',
						'el',
						'hu',
						'tr',
						'cs',
						'et',
						'di',
					],
				},
				fields: {
					type: 'array',
					description:
						'Fields to use in the form and their properties, validations, and attachments.',
					items: {
						type: 'object',
						description: 'A form field.',
						properties: {
							id: {
								type: 'string',
								description:
									'Unique ID of the field. Include the original ID when updating a form so the field and its responses are preserved.',
							},
							ref: {
								type: 'string',
								description: 'Readable name you can use to reference the field.',
							},
							type: {
								type: 'string',
								description:
									'The type of field. Required when a field is provided.',
								default: '',
								enum: [
									'',
									'calendly',
									'checkbox',
									'contact_info',
									'date',
									'dropdown',
									'email',
									'file_upload',
									'google_calendar',
									'group',
									'legal',
									'long_text',
									'matrix',
									'multi_format',
									'multiple_choice',
									'nps',
									'number',
									'opinion_scale',
									'payment',
									'phone_number',
									'picture_choice',
									'ranking',
									'rating',
									'short_text',
									'signature',
									'statement',
									'website',
									'yes_no',
								],
							},
							properties: {
								type: 'object',
								description:
									'Field properties, validations helpers, and type-specific settings.',
								properties: {
									description: {
										type: 'string',
										description:
											'Question or instruction to display for the field.',
									},
									choices: {
										type: 'array',
										description:
											'Answer choices. Available for `ranking`, `dropdown`, `multiple_choice`, `picture_choice`, and `checkbox` types. For `checkbox`, the array must contain exactly one item.',
										items: {
											type: 'object',
											description: 'An answer choice.',
											properties: {
												ref: {
													type: 'string',
													description:
														'Readable name for the answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`. Not available for `dropdown`.',
												},
												label: {
													type: 'string',
													description:
														'Text for the answer choice. Maximum 255 characters.',
												},
												attachment: {
													type: 'object',
													description:
														'Image for the answer choice. Available only for `picture_choice` types.',
													properties: {
														type: {
															type: 'string',
															description:
																'Type of attachment. Must be `image` for picture choices.',
															default: '',
															enum: ['', 'image'],
														},
														href: {
															type: 'string',
															description:
																'Typeform URL for the image to use for the answer choice.',
														},
														properties: {
															type: 'object',
															description:
																'Optional attachment properties.',
															properties: {
																description: {
																	type: 'string',
																	description:
																		'Alt text for the choice image.',
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
									},
									fields: {
										type: 'array',
										description:
											'Fields that belong in a question group or matrix. `payment` and `group` blocks are not allowed inside a question group. Available for the `group` and `matrix` types.',
										items: {
											type: 'object',
											description: 'A nested field inside a group or matrix.',
											properties: {
												id: {
													type: 'string',
													description:
														'Unique ID of the field. Include the original ID when updating a form so the field and its responses are preserved.',
												},
												ref: {
													type: 'string',
													description:
														'Readable name you can use to reference the field.',
												},
												type: {
													type: 'string',
													description:
														'The type of field. Required when a field is provided.',
													default: '',
													enum: [
														'',
														'calendly',
														'checkbox',
														'contact_info',
														'date',
														'dropdown',
														'email',
														'file_upload',
														'google_calendar',
														'group',
														'legal',
														'long_text',
														'matrix',
														'multi_format',
														'multiple_choice',
														'nps',
														'number',
														'opinion_scale',
														'payment',
														'phone_number',
														'picture_choice',
														'ranking',
														'rating',
														'short_text',
														'signature',
														'statement',
														'website',
														'yes_no',
													],
												},
												properties: {
													type: 'object',
													description:
														'Field properties, validations helpers, and type-specific settings.',
													properties: {
														description: {
															type: 'string',
															description:
																'Question or instruction to display for the field.',
														},
														choices: {
															type: 'array',
															description:
																'Answer choices. Available for `ranking`, `dropdown`, `multiple_choice`, `picture_choice`, and `checkbox` types. For `checkbox`, the array must contain exactly one item.',
															items: {
																type: 'object',
																description: 'An answer choice.',
																properties: {
																	ref: {
																		type: 'string',
																		description:
																			'Readable name for the answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`. Not available for `dropdown`.',
																	},
																	label: {
																		type: 'string',
																		description:
																			'Text for the answer choice. Maximum 255 characters.',
																	},
																	attachment: {
																		type: 'object',
																		description:
																			'Image for the answer choice. Available only for `picture_choice` types.',
																		properties: {
																			type: {
																				type: 'string',
																				description:
																					'Type of attachment. Must be `image` for picture choices.',
																				default: '',
																				enum: ['', 'image'],
																			},
																			href: {
																				type: 'string',
																				description:
																					'Typeform URL for the image to use for the answer choice.',
																			},
																			properties: {
																				type: 'object',
																				description:
																					'Optional attachment properties.',
																				properties: {
																					description: {
																						type: 'string',
																						description:
																							'Alt text for the choice image.',
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
														},
														allow_multiple_selection: {
															type: 'boolean',
															description:
																'True to allow respondents to select more than one answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
														randomize: {
															type: 'boolean',
															description:
																'True to present answer choices in a new random order for each respondent. Available for `ranking`, `multiple_choice`, `picture_choice`, and `dropdown`.',
														},
														allow_other_choice: {
															type: 'boolean',
															description:
																'True to include an Other option. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
														vertical_alignment: {
															type: 'boolean',
															description:
																'True to list answer choices vertically. Available for `ranking` and `multiple_choice`.',
														},
														supersized: {
															type: 'boolean',
															description:
																'True to use larger-sized images for answer choices. Available for `picture_choice`.',
														},
														show_labels: {
															type: 'boolean',
															description:
																'True to show text labels and images as answer choices. Available for `picture_choice`. Default is true.',
														},
														alphabetical_order: {
															type: 'boolean',
															description:
																'True to list dropdown choices alphabetically. Available for `dropdown`.',
														},
														hide_marks: {
															type: 'boolean',
															description:
																'True to hide quotation marks around a statement. Available for `statement`.',
														},
														button_text: {
															type: 'string',
															description:
																'Text to display on the button. Available for `group`, `payment`, and `statement`. Default is `Continue`.',
														},
														steps: {
															type: 'number',
															description:
																"Number of steps in the scale's range. Minimum is 5 and maximum is 11. Available for `opinion_scale` and `rating`.",
														},
														shape: {
															type: 'string',
															description:
																"Shape to display on the scale's steps. Available for `opinion_scale` and `rating`. Default is `star`.",
															default: '',
															enum: [
																'',
																'cat',
																'circle',
																'cloud',
																'crown',
																'dog',
																'droplet',
																'flag',
																'heart',
																'lightbulb',
																'pencil',
																'skull',
																'star',
																'thunderbolt',
																'tick',
																'trophy',
																'up',
																'user',
															],
														},
														labels: {
															type: 'object',
															description:
																"Labels that help respondents understand the scale's range. Available for `opinion_scale` and `rating`.",
															properties: {
																left: {
																	type: 'string',
																	description:
																		'Text of the left-aligned label for the scale.',
																},
																center: {
																	type: 'string',
																	description:
																		'Text of the center-aligned label for the scale.',
																},
																right: {
																	type: 'string',
																	description:
																		'Text of the right-aligned label for the scale.',
																},
															},
															required: [],
														},
														start_at_one: {
															type: 'boolean',
															description:
																'True if range numbering should start at 1. Available for `opinion_scale`.',
														},
														structure: {
															type: 'string',
															description:
																'Date format for answers. Available for `date`. Default is `DDMMYYYY`.',
															default: '',
															enum: [
																'',
																'MMDDYYYY',
																'DDMMYYYY',
																'YYYYMMDD',
															],
														},
														separator: {
															type: 'string',
															description:
																'Character between month, day, and year. Available for `date`. Default is `/`.',
															default: '',
															enum: ['', '/', '-', '.'],
														},
														currency: {
															type: 'string',
															description:
																'Currency of the payment. Available for `payment`. Default is `EUR`.',
															default: '',
															enum: [
																'',
																'AUD',
																'BRL',
																'CAD',
																'CHF',
																'DKK',
																'EUR',
																'GBP',
																'MXN',
																'NOK',
																'SEK',
																'USD',
															],
														},
														email_receipts: {
															type: 'boolean',
															description:
																"Enables collection of the customer's email so Stripe can send a payment receipt. Available for `payment`.",
														},
														additional_payment_methods: {
															type: 'array',
															description:
																'Enabled payment methods allowed for payment (for example Google Pay or Apple Pay). Available for `payment`.',
															items: {
																type: 'string',
																description:
																	'An enabled payment method name.',
															},
														},
														price: {
															type: 'object',
															description:
																'Price of the item. Available for `payment`.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'Specifies that the value is a variable.',
																	default: '',
																	enum: ['', 'variable'],
																},
																value: {
																	type: 'string',
																	description:
																		'Variable name to use for the price.',
																	default: '',
																	enum: ['', 'price'],
																},
															},
															required: [],
														},
														show_button: {
															type: 'boolean',
															description:
																'True to display a button. Available for `group` and `payment`.',
														},
														default_country_code: {
															type: 'string',
															description:
																'Default 2-letter ISO 3166-1 country code. Available for `phone_number`. Default is `us`.',
														},
														regexp: {
															type: 'string',
															description:
																'Regular expression pattern to validate the answer. Available for `long_text`.',
														},
														allowed_answer_types: {
															type: 'array',
															description:
																'List of allowed answer types for the field. Available for `multi_format`.',
															items: {
																type: 'string',
																description:
																	'An allowed answer type.',
															},
														},
														availability: {
															type: 'object',
															description:
																'Weekly availability for booking, with one entry per day plus a required `timezone`. Available for `google_calendar`.',
															properties: {
																monday: {
																	type: 'array',
																	description:
																		'Available time slots on Monday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																tuesday: {
																	type: 'array',
																	description:
																		'Available time slots on Tuesday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																wednesday: {
																	type: 'array',
																	description:
																		'Available time slots on Wednesday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																thursday: {
																	type: 'array',
																	description:
																		'Available time slots on Thursday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																friday: {
																	type: 'array',
																	description:
																		'Available time slots on Friday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																saturday: {
																	type: 'array',
																	description:
																		'Available time slots on Saturday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																sunday: {
																	type: 'array',
																	description:
																		'Available time slots on Sunday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																timezone: {
																	type: 'string',
																	description:
																		'IANA time zone name (for example `Europe/Madrid`) used to interpret all slot times. Required when availability is provided.',
																},
															},
															required: [],
														},
														booking_limits: {
															type: 'object',
															description:
																'Optional caps on how many slots can be booked. Available for `google_calendar`.',
															properties: {
																max_daily_bookings: {
																	type: 'number',
																	description:
																		'Maximum number of bookings allowed per day.',
																},
																buffer_duration: {
																	type: 'number',
																	description:
																		'Buffer time, in minutes, to keep free between consecutive bookings.',
																},
															},
															required: [],
														},
														calendar_id: {
															type: 'string',
															description:
																'Identifier of the Google Calendar to book against. Available for `google_calendar`.',
														},
														event: {
															type: 'object',
															description:
																'Event details written to the booked calendar invite. Available for `google_calendar`.',
															properties: {
																description: {
																	type: 'string',
																	description:
																		'Description of the calendar event created when a respondent books a slot.',
																},
																duration: {
																	type: 'object',
																	description:
																		'Duration of the calendar event.',
																	properties: {
																		time: {
																			type: 'number',
																			description:
																				'Numeric length of the event, expressed in `unit`. Must be a positive integer.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'Unit of time for `time`.',
																			default: '',
																			enum: [
																				'',
																				'hours',
																				'minutes',
																			],
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														reminders: {
															type: 'object',
															description:
																'Optional reminder sent to respondents ahead of a booked slot. Available for `google_calendar`.',
															properties: {
																amount: {
																	type: 'number',
																	description:
																		'Numeric amount of time before the slot at which to send the reminder, expressed in `unit`.',
																},
																unit: {
																	type: 'string',
																	description:
																		'Unit of time for `amount`.',
																	default: '',
																	enum: [
																		'',
																		'minute',
																		'hour',
																		'day',
																		'week',
																	],
																},
															},
															required: [],
														},
														scheduling_window: {
															type: 'object',
															description:
																'Constraints on when respondents can book a slot. Available for `google_calendar`.',
															properties: {
																start_at: {
																	type: 'string',
																	description:
																		'Earliest date or datetime at which a respondent can book a slot.',
																},
																end_at: {
																	type: 'string',
																	description:
																		'Latest date or datetime at which a respondent can book a slot.',
																},
																max_advanced_booking_days: {
																	type: 'number',
																	description:
																		'Maximum number of days in advance a respondent can book a slot.',
																},
																min_lead_time_hours: {
																	type: 'number',
																	description:
																		'Minimum number of hours between booking and the start of the slot.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												validations: {
													type: 'object',
													description: 'Validation rules for the field.',
													properties: {
														required: {
															type: 'boolean',
															description:
																'True if respondents must provide an answer. Available for `matrix`, `ranking`, `checkbox`, `date`, `dropdown`, `email`, `file_upload`, `legal`, `long_text`, `multiple_choice`, `number`, `opinion_scale`, `payment`, `picture_choice`, `rating`, `short_text`, `signature`, `website`, `phone_number`, and `yes_no`.',
														},
														max_length: {
															type: 'number',
															description:
																'Maximum number of characters allowed in the answer. Available for `long_text` and `short_text`.',
														},
														min_value: {
															type: 'number',
															description:
																'Minimum value allowed in the answer. Must be a positive integer. Available for `number`.',
														},
														max_value: {
															type: 'number',
															description:
																'Maximum value allowed in the answer. Must be a positive integer. Available for `number`.',
														},
														min_selection: {
															type: 'number',
															description:
																'Minimum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
														max_selection: {
															type: 'number',
															description:
																'Maximum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
													},
													required: [],
												},
												attachment: {
													type: 'object',
													description:
														'Image or video displayed with the field.',
													properties: {
														type: {
															type: 'string',
															description: 'Type of attachment.',
															default: '',
															enum: ['', 'image', 'video'],
														},
														href: {
															type: 'string',
															description:
																"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
														},
														scale: {
															type: 'string',
															description:
																'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
															default: '',
															enum: ['', 0.4, 0.6, 0.8, 1],
														},
														properties: {
															type: 'object',
															description:
																'Optional attachment properties.',
															properties: {
																description: {
																	type: 'string',
																	description:
																		'Alt text that describes the image for people with visual impairments.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												layout: {
													type: 'object',
													description:
														'Position of the field attachment.',
													properties: {
														type: {
															type: 'string',
															description: 'Type of layout.',
															default: '',
															enum: [
																'',
																'split',
																'wallpaper',
																'float',
																'stack',
															],
														},
														placement: {
															type: 'string',
															description:
																'Position of media for split and float layouts.',
															default: '',
															enum: ['', 'left', 'right'],
														},
														attachment: {
															type: 'object',
															description:
																'Image or video used by this layout.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'Type of attachment.',
																	default: '',
																	enum: ['', 'image', 'video'],
																},
																href: {
																	type: 'string',
																	description:
																		"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
																},
																scale: {
																	type: 'string',
																	description:
																		'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
																	default: '',
																	enum: ['', 0.4, 0.6, 0.8, 1],
																},
																properties: {
																	type: 'object',
																	description:
																		'Optional attachment properties.',
																	properties: {
																		description: {
																			type: 'string',
																			description:
																				'Alt text that describes the image for people with visual impairments.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														viewport_overrides: {
															type: 'object',
															description:
																'Layout-specific overrides per viewport (small / large).',
															properties: {
																small: {
																	type: 'object',
																	description:
																		'Overrides for small viewports.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Layout type for the small viewport.',
																			default: '',
																			enum: [
																				'',
																				'split',
																				'wallpaper',
																				'float',
																				'stack',
																			],
																		},
																		placement: {
																			type: 'string',
																			description:
																				'Media position for split and float layouts on the small viewport.',
																			default: '',
																			enum: [
																				'',
																				'left',
																				'right',
																			],
																		},
																	},
																	required: [],
																},
																large: {
																	type: 'object',
																	description:
																		'Overrides for large viewports.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Layout type for the large viewport.',
																			default: '',
																			enum: [
																				'',
																				'split',
																				'wallpaper',
																				'float',
																				'stack',
																			],
																		},
																		placement: {
																			type: 'string',
																			description:
																				'Media position for split and float layouts on the large viewport.',
																			default: '',
																			enum: [
																				'',
																				'left',
																				'right',
																			],
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
												media: {
													type: 'array',
													description:
														'Video question to display with the field.',
													items: {
														type: 'object',
														description:
															'A media item displayed with the field.',
														properties: {
															ref: {
																type: 'string',
																description:
																	'Readable name you can use to reference the media item.',
															},
															enabled: {
																type: 'boolean',
																description:
																	'True if the media item should be displayed. Default is true.',
															},
															href: {
																type: 'string',
																description:
																	'URL for the media item.',
															},
															type: {
																type: 'string',
																description: 'Type of media.',
																default: '',
																enum: ['', 'video'],
															},
															properties: {
																type: 'object',
																description:
																	'Optional media properties.',
																properties: {
																	fit: {
																		type: 'boolean',
																		description:
																			'True to fit the media to the available space.',
																	},
																	interaction_delay: {
																		type: 'number',
																		description:
																			'Delay in seconds before the media item is displayed.',
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
									allow_multiple_selection: {
										type: 'boolean',
										description:
											'True to allow respondents to select more than one answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
									randomize: {
										type: 'boolean',
										description:
											'True to present answer choices in a new random order for each respondent. Available for `ranking`, `multiple_choice`, `picture_choice`, and `dropdown`.',
									},
									allow_other_choice: {
										type: 'boolean',
										description:
											'True to include an Other option. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
									vertical_alignment: {
										type: 'boolean',
										description:
											'True to list answer choices vertically. Available for `ranking` and `multiple_choice`.',
									},
									supersized: {
										type: 'boolean',
										description:
											'True to use larger-sized images for answer choices. Available for `picture_choice`.',
									},
									show_labels: {
										type: 'boolean',
										description:
											'True to show text labels and images as answer choices. Available for `picture_choice`. Default is true.',
									},
									alphabetical_order: {
										type: 'boolean',
										description:
											'True to list dropdown choices alphabetically. Available for `dropdown`.',
									},
									hide_marks: {
										type: 'boolean',
										description:
											'True to hide quotation marks around a statement. Available for `statement`.',
									},
									button_text: {
										type: 'string',
										description:
											'Text to display on the button. Available for `group`, `payment`, and `statement`. Default is `Continue`.',
									},
									steps: {
										type: 'number',
										description:
											"Number of steps in the scale's range. Minimum is 5 and maximum is 11. Available for `opinion_scale` and `rating`.",
									},
									shape: {
										type: 'string',
										description:
											"Shape to display on the scale's steps. Available for `opinion_scale` and `rating`. Default is `star`.",
										default: '',
										enum: [
											'',
											'cat',
											'circle',
											'cloud',
											'crown',
											'dog',
											'droplet',
											'flag',
											'heart',
											'lightbulb',
											'pencil',
											'skull',
											'star',
											'thunderbolt',
											'tick',
											'trophy',
											'up',
											'user',
										],
									},
									labels: {
										type: 'object',
										description:
											"Labels that help respondents understand the scale's range. Available for `opinion_scale` and `rating`.",
										properties: {
											left: {
												type: 'string',
												description:
													'Text of the left-aligned label for the scale.',
											},
											center: {
												type: 'string',
												description:
													'Text of the center-aligned label for the scale.',
											},
											right: {
												type: 'string',
												description:
													'Text of the right-aligned label for the scale.',
											},
										},
										required: [],
									},
									start_at_one: {
										type: 'boolean',
										description:
											'True if range numbering should start at 1. Available for `opinion_scale`.',
									},
									structure: {
										type: 'string',
										description:
											'Date format for answers. Available for `date`. Default is `DDMMYYYY`.',
										default: '',
										enum: ['', 'MMDDYYYY', 'DDMMYYYY', 'YYYYMMDD'],
									},
									separator: {
										type: 'string',
										description:
											'Character between month, day, and year. Available for `date`. Default is `/`.',
										default: '',
										enum: ['', '/', '-', '.'],
									},
									currency: {
										type: 'string',
										description:
											'Currency of the payment. Available for `payment`. Default is `EUR`.',
										default: '',
										enum: [
											'',
											'AUD',
											'BRL',
											'CAD',
											'CHF',
											'DKK',
											'EUR',
											'GBP',
											'MXN',
											'NOK',
											'SEK',
											'USD',
										],
									},
									email_receipts: {
										type: 'boolean',
										description:
											"Enables collection of the customer's email so Stripe can send a payment receipt. Available for `payment`.",
									},
									additional_payment_methods: {
										type: 'array',
										description:
											'Enabled payment methods allowed for payment (for example Google Pay or Apple Pay). Available for `payment`.',
										items: {
											type: 'string',
											description: 'An enabled payment method name.',
										},
									},
									price: {
										type: 'object',
										description: 'Price of the item. Available for `payment`.',
										properties: {
											type: {
												type: 'string',
												description:
													'Specifies that the value is a variable.',
												default: '',
												enum: ['', 'variable'],
											},
											value: {
												type: 'string',
												description: 'Variable name to use for the price.',
												default: '',
												enum: ['', 'price'],
											},
										},
										required: [],
									},
									show_button: {
										type: 'boolean',
										description:
											'True to display a button. Available for `group` and `payment`.',
									},
									default_country_code: {
										type: 'string',
										description:
											'Default 2-letter ISO 3166-1 country code. Available for `phone_number`. Default is `us`.',
									},
									regexp: {
										type: 'string',
										description:
											'Regular expression pattern to validate the answer. Available for `long_text`.',
									},
									allowed_answer_types: {
										type: 'array',
										description:
											'List of allowed answer types for the field. Available for `multi_format`.',
										items: {
											type: 'string',
											description: 'An allowed answer type.',
										},
									},
									availability: {
										type: 'object',
										description:
											'Weekly availability for booking, with one entry per day plus a required `timezone`. Available for `google_calendar`.',
										properties: {
											monday: {
												type: 'array',
												description: 'Available time slots on Monday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											tuesday: {
												type: 'array',
												description: 'Available time slots on Tuesday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											wednesday: {
												type: 'array',
												description: 'Available time slots on Wednesday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											thursday: {
												type: 'array',
												description: 'Available time slots on Thursday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											friday: {
												type: 'array',
												description: 'Available time slots on Friday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											saturday: {
												type: 'array',
												description: 'Available time slots on Saturday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											sunday: {
												type: 'array',
												description: 'Available time slots on Sunday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											timezone: {
												type: 'string',
												description:
													'IANA time zone name (for example `Europe/Madrid`) used to interpret all slot times. Required when availability is provided.',
											},
										},
										required: [],
									},
									booking_limits: {
										type: 'object',
										description:
											'Optional caps on how many slots can be booked. Available for `google_calendar`.',
										properties: {
											max_daily_bookings: {
												type: 'number',
												description:
													'Maximum number of bookings allowed per day.',
											},
											buffer_duration: {
												type: 'number',
												description:
													'Buffer time, in minutes, to keep free between consecutive bookings.',
											},
										},
										required: [],
									},
									calendar_id: {
										type: 'string',
										description:
											'Identifier of the Google Calendar to book against. Available for `google_calendar`.',
									},
									event: {
										type: 'object',
										description:
											'Event details written to the booked calendar invite. Available for `google_calendar`.',
										properties: {
											description: {
												type: 'string',
												description:
													'Description of the calendar event created when a respondent books a slot.',
											},
											duration: {
												type: 'object',
												description: 'Duration of the calendar event.',
												properties: {
													time: {
														type: 'number',
														description:
															'Numeric length of the event, expressed in `unit`. Must be a positive integer.',
													},
													unit: {
														type: 'string',
														description: 'Unit of time for `time`.',
														default: '',
														enum: ['', 'hours', 'minutes'],
													},
												},
												required: [],
											},
										},
										required: [],
									},
									reminders: {
										type: 'object',
										description:
											'Optional reminder sent to respondents ahead of a booked slot. Available for `google_calendar`.',
										properties: {
											amount: {
												type: 'number',
												description:
													'Numeric amount of time before the slot at which to send the reminder, expressed in `unit`.',
											},
											unit: {
												type: 'string',
												description: 'Unit of time for `amount`.',
												default: '',
												enum: ['', 'minute', 'hour', 'day', 'week'],
											},
										},
										required: [],
									},
									scheduling_window: {
										type: 'object',
										description:
											'Constraints on when respondents can book a slot. Available for `google_calendar`.',
										properties: {
											start_at: {
												type: 'string',
												description:
													'Earliest date or datetime at which a respondent can book a slot.',
											},
											end_at: {
												type: 'string',
												description:
													'Latest date or datetime at which a respondent can book a slot.',
											},
											max_advanced_booking_days: {
												type: 'number',
												description:
													'Maximum number of days in advance a respondent can book a slot.',
											},
											min_lead_time_hours: {
												type: 'number',
												description:
													'Minimum number of hours between booking and the start of the slot.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							validations: {
								type: 'object',
								description: 'Validation rules for the field.',
								properties: {
									required: {
										type: 'boolean',
										description:
											'True if respondents must provide an answer. Available for `matrix`, `ranking`, `checkbox`, `date`, `dropdown`, `email`, `file_upload`, `legal`, `long_text`, `multiple_choice`, `number`, `opinion_scale`, `payment`, `picture_choice`, `rating`, `short_text`, `signature`, `website`, `phone_number`, and `yes_no`.',
									},
									max_length: {
										type: 'number',
										description:
											'Maximum number of characters allowed in the answer. Available for `long_text` and `short_text`.',
									},
									min_value: {
										type: 'number',
										description:
											'Minimum value allowed in the answer. Must be a positive integer. Available for `number`.',
									},
									max_value: {
										type: 'number',
										description:
											'Maximum value allowed in the answer. Must be a positive integer. Available for `number`.',
									},
									min_selection: {
										type: 'number',
										description:
											'Minimum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
									max_selection: {
										type: 'number',
										description:
											'Maximum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed with the field.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
									},
									scale: {
										type: 'string',
										description:
											'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
										default: '',
										enum: ['', 0.4, 0.6, 0.8, 1],
									},
									properties: {
										type: 'object',
										description: 'Optional attachment properties.',
										properties: {
											description: {
												type: 'string',
												description:
													'Alt text that describes the image for people with visual impairments.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							layout: {
								type: 'object',
								description: 'Position of the field attachment.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of layout.',
										default: '',
										enum: ['', 'split', 'wallpaper', 'float', 'stack'],
									},
									placement: {
										type: 'string',
										description:
											'Position of media for split and float layouts.',
										default: '',
										enum: ['', 'left', 'right'],
									},
									attachment: {
										type: 'object',
										description: 'Image or video used by this layout.',
										properties: {
											type: {
												type: 'string',
												description: 'Type of attachment.',
												default: '',
												enum: ['', 'image', 'video'],
											},
											href: {
												type: 'string',
												description:
													"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
											},
											scale: {
												type: 'string',
												description:
													'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
												default: '',
												enum: ['', 0.4, 0.6, 0.8, 1],
											},
											properties: {
												type: 'object',
												description: 'Optional attachment properties.',
												properties: {
													description: {
														type: 'string',
														description:
															'Alt text that describes the image for people with visual impairments.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									viewport_overrides: {
										type: 'object',
										description:
											'Layout-specific overrides per viewport (small / large).',
										properties: {
											small: {
												type: 'object',
												description: 'Overrides for small viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the small viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the small viewport.',
														default: '',
														enum: ['', 'left', 'right'],
													},
												},
												required: [],
											},
											large: {
												type: 'object',
												description: 'Overrides for large viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the large viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the large viewport.',
														default: '',
														enum: ['', 'left', 'right'],
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
							media: {
								type: 'array',
								description: 'Video question to display with the field.',
								items: {
									type: 'object',
									description: 'A media item displayed with the field.',
									properties: {
										ref: {
											type: 'string',
											description:
												'Readable name you can use to reference the media item.',
										},
										enabled: {
											type: 'boolean',
											description:
												'True if the media item should be displayed. Default is true.',
										},
										href: {
											type: 'string',
											description: 'URL for the media item.',
										},
										type: {
											type: 'string',
											description: 'Type of media.',
											default: '',
											enum: ['', 'video'],
										},
										properties: {
											type: 'object',
											description: 'Optional media properties.',
											properties: {
												fit: {
													type: 'boolean',
													description:
														'True to fit the media to the available space.',
												},
												interaction_delay: {
													type: 'number',
													description:
														'Delay in seconds before the media item is displayed.',
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
				hidden: {
					type: 'array',
					description: 'Hidden Fields to use in the form.',
					items: { type: 'string', description: 'Name of a Hidden Field.' },
				},
				variables: {
					type: 'object',
					description:
						'Running totals and enrichment variables used in the form. Open object of variable names to numeric or text values (commonly `score` and `price`).',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				welcome_screens: {
					type: 'array',
					description: "Settings and properties for the form's welcome screen.",
					items: {
						type: 'object',
						description: 'A welcome screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the welcome screen.',
							},
							properties: {
								type: 'object',
								description: 'Settings for the welcome screen.',
								properties: {
									description: {
										type: 'string',
										description: 'Description of the welcome screen.',
									},
									show_button: {
										type: 'boolean',
										description:
											'True to display a Start button on the welcome screen.',
									},
									button_text: {
										type: 'string',
										description: 'Text to display on the Start button.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the welcome screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
									},
									scale: {
										type: 'string',
										description:
											'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
										default: '',
										enum: ['', 0.4, 0.6, 0.8, 1],
									},
									properties: {
										type: 'object',
										description: 'Optional attachment properties.',
										properties: {
											description: {
												type: 'string',
												description:
													'Alt text that describes the image for people with visual impairments.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							layout: {
								type: 'object',
								description: 'Position of the welcome screen attachment.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of layout.',
										default: '',
										enum: ['', 'split', 'wallpaper', 'float', 'stack'],
									},
									placement: {
										type: 'string',
										description:
											'Position of media for split and float layouts.',
										default: '',
										enum: ['', 'left', 'right'],
									},
									attachment: {
										type: 'object',
										description: 'Image or video used by this layout.',
										properties: {
											type: {
												type: 'string',
												description: 'Type of attachment.',
												default: '',
												enum: ['', 'image', 'video'],
											},
											href: {
												type: 'string',
												description:
													"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
											},
											scale: {
												type: 'string',
												description:
													'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
												default: '',
												enum: ['', 0.4, 0.6, 0.8, 1],
											},
											properties: {
												type: 'object',
												description: 'Optional attachment properties.',
												properties: {
													description: {
														type: 'string',
														description:
															'Alt text that describes the image for people with visual impairments.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									viewport_overrides: {
										type: 'object',
										description:
											'Layout-specific overrides per viewport (small / large).',
										properties: {
											small: {
												type: 'object',
												description: 'Overrides for small viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the small viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the small viewport.',
														default: '',
														enum: ['', 'left', 'right'],
													},
												},
												required: [],
											},
											large: {
												type: 'object',
												description: 'Overrides for large viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the large viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the large viewport.',
														default: '',
														enum: ['', 'left', 'right'],
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
						},
						required: [],
					},
				},
				thankyou_screens: {
					type: 'array',
					description: "Settings and properties for the form's thank you screen.",
					items: {
						type: 'object',
						description: 'A thank you screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the thank you screen.',
							},
							type: {
								type: 'string',
								description: 'The type of thank you screen.',
								default: '',
								enum: ['', 'thankyou_screen', 'url_redirect'],
							},
							properties: {
								type: 'object',
								description: 'Settings for the thank you screen.',
								properties: {
									show_button: {
										type: 'boolean',
										description:
											'True to display a button on the thank you screen.',
									},
									button_text: {
										type: 'string',
										description: 'Text to display on the button.',
									},
									button_mode: {
										type: 'string',
										description:
											'What happens when respondents click the button. Premium feature.',
										default: '',
										enum: ['', 'reload', 'default_redirect', 'redirect'],
									},
									redirect_url: {
										type: 'string',
										description:
											'URL where the typeform should redirect after submission, if you specified `redirect` for `button_mode` or are using the `url_redirect` type.',
									},
									share_icons: {
										type: 'boolean',
										description:
											'True to display social media sharing icons on the thank you screen.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the thank you screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
									},
									scale: {
										type: 'string',
										description:
											'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
										default: '',
										enum: ['', 0.4, 0.6, 0.8, 1],
									},
									properties: {
										type: 'object',
										description: 'Optional attachment properties.',
										properties: {
											description: {
												type: 'string',
												description:
													'Alt text that describes the image for people with visual impairments.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							layout: {
								type: 'object',
								description: 'Position of the thank you screen attachment.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of layout.',
										default: '',
										enum: ['', 'split', 'wallpaper', 'float', 'stack'],
									},
									placement: {
										type: 'string',
										description:
											'Position of media for split and float layouts.',
										default: '',
										enum: ['', 'left', 'right'],
									},
									attachment: {
										type: 'object',
										description: 'Image or video used by this layout.',
										properties: {
											type: {
												type: 'string',
												description: 'Type of attachment.',
												default: '',
												enum: ['', 'image', 'video'],
											},
											href: {
												type: 'string',
												description:
													"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
											},
											scale: {
												type: 'string',
												description:
													'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
												default: '',
												enum: ['', 0.4, 0.6, 0.8, 1],
											},
											properties: {
												type: 'object',
												description: 'Optional attachment properties.',
												properties: {
													description: {
														type: 'string',
														description:
															'Alt text that describes the image for people with visual impairments.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									viewport_overrides: {
										type: 'object',
										description:
											'Layout-specific overrides per viewport (small / large).',
										properties: {
											small: {
												type: 'object',
												description: 'Overrides for small viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the small viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the small viewport.',
														default: '',
														enum: ['', 'left', 'right'],
													},
												},
												required: [],
											},
											large: {
												type: 'object',
												description: 'Overrides for large viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the large viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the large viewport.',
														default: '',
														enum: ['', 'left', 'right'],
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
						},
						required: [],
					},
				},
				consent_screen: {
					type: 'object',
					description:
						'Optional consent screen configuration for data collection compliance.',
					properties: {
						email: {
							type: 'string',
							description: 'Email address where consent information should be sent.',
						},
						message: {
							type: 'string',
							description: 'Message to display or send regarding the consent.',
						},
					},
					required: [],
				},
				logic: {
					type: 'array',
					description:
						'Logic Jump objects to use in the form. When referring to fields, those fields must already exist on the form.',
					items: {
						type: 'object',
						description: 'A Logic Jump definition.',
						properties: {
							type: {
								type: 'string',
								description:
									'Specifies whether the Logic Jump is based on a question field or Hidden Field.',
								default: '',
								enum: ['', 'field', 'hidden'],
							},
							ref: {
								type: 'string',
								description: 'Reference to the field that triggers the Logic Jump.',
							},
							actions: {
								type: 'array',
								description:
									"Objects that define the Logic Jump's behavior. Required when a logic item is provided.",
								items: {
									type: 'object',
									description: 'A Logic Jump action.',
									properties: {
										action: {
											type: 'string',
											description:
												'Behavior the Logic Jump will take. Required when an action is provided.',
											default: '',
											enum: [
												'',
												'jump',
												'add',
												'subtract',
												'multiply',
												'divide',
												'set',
											],
										},
										details: {
											type: 'object',
											description:
												'Properties that further specify how the Logic Jump will behave. Required when an action is provided.',
											properties: {
												to: {
													type: 'object',
													description:
														'Where the Logic Jump leads — to another field, a thank you screen, or an outcome.',
													properties: {
														type: {
															type: 'string',
															description:
																'Logic Jump `to` option you are using.',
															default: '',
															enum: [
																'',
																'field',
																'thankyou',
																'outcome',
															],
														},
														value: {
															type: 'string',
															description:
																'The `ref` value for the field, Hidden Field, or thank you screen the Logic Jump leads to.',
														},
													},
													required: [],
												},
												target: {
													type: 'object',
													description:
														'Keeps a running total for variables.',
													properties: {
														type: {
															type: 'string',
															description:
																'Specifies that the value is a variable.',
															default: '',
															enum: ['', 'variable'],
														},
														value: {
															type: 'string',
															description:
																'Variable name to use in the calculation.',
														},
													},
													required: [],
												},
												value: {
													type: 'object',
													description:
														'Value to use in the calculation for the variables.',
													properties: {
														type: {
															type: 'string',
															description:
																'Which type of value is used: a numeric constant, a variable name, or an `evaluation` to determine an outcome.',
															default: '',
															enum: [
																'',
																'constant',
																'variable',
																'evaluation',
															],
														},
														value: {
															type: 'string',
															description:
																'Value used in the variable calculation. May be a number, variable name, or evaluation depending on `type`.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										condition: {
											type: 'object',
											description:
												'Conditions for executing the Logic Jump (the IF statement). Required when an action is provided.',
											properties: {
												op: {
													type: 'string',
													description: 'Operator for the condition.',
													default: '',
													enum: [
														'',
														'begins_with',
														'ends_with',
														'contains',
														'not_contains',
														'lower_than',
														'lower_equal_than',
														'greater_than',
														'greater_equal_than',
														'is',
														'is_not',
														'equal',
														'not_equal',
														'always',
														'on',
														'not_on',
														'earlier_than',
														'earlier_than_or_on',
														'later_than',
														'later_than_or_on',
													],
												},
												vars: {
													type: 'array',
													description:
														'Objects that define the field type and value to evaluate with the operator. Required when a condition is provided.',
													items: {
														type: 'object',
														description:
															'A value the condition evaluates.',
														properties: {
															type: {
																type: 'string',
																description:
																	'Type of value the condition object refers to.',
																default: '',
																enum: [
																	'',
																	'field',
																	'hidden',
																	'variable',
																	'constant',
																	'choice',
																],
															},
															value: {
																type: 'string',
																description:
																	'Value to check for in the `type` field. May be a field ref, hidden field name, variable name, choice, number, or boolean depending on `type`.',
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
						},
						required: [],
					},
				},
				theme: {
					type: 'object',
					description:
						'Theme to use for the form. If omitted on update, Typeform applies a new copy of the default theme.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of the theme, for example `https://api.typeform.com/themes/Fs24as`.',
						},
					},
					required: [],
				},
				workspace: {
					type: 'object',
					description:
						'Workspace that contains the form. If omitted, Typeform saves the form in the default workspace.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of the workspace, for example `https://api.typeform.com/workspaces/Aw33bz`.',
						},
					},
					required: [],
				},
				settings: {
					type: 'object',
					description:
						'Form settings and metadata, including language, public availability, progress bar, and search-engine indexing.',
					properties: {
						language: {
							type: 'string',
							description: 'Language to use for the form.',
							default: '',
							enum: [
								'',
								'en',
								'es',
								'ca',
								'fr',
								'de',
								'ru',
								'it',
								'da',
								'pt',
								'ch',
								'zh',
								'nl',
								'no',
								'uk',
								'ja',
								'ko',
								'hr',
								'fi',
								'sv',
								'pl',
								'el',
								'hu',
								'tr',
								'cs',
								'et',
								'di',
							],
						},
						is_public: {
							type: 'boolean',
							description:
								'True if the form is public. Otherwise false (the form is private). Default is true.',
						},
						autosave_progress: {
							type: 'boolean',
							description:
								'True to enable saving partial form responses on the client side. Default is true.',
						},
						progress_bar: {
							type: 'string',
							description:
								'Basis for the progress bar. `proportion` shows the number of questions answered; `percentage` shows the percentage answered. Default is `proportion`.',
							default: '',
							enum: ['', 'percentage', 'proportion'],
						},
						show_progress_bar: {
							type: 'boolean',
							description: 'True to display the progress bar. Default is true.',
						},
						show_typeform_branding: {
							type: 'boolean',
							description:
								'True to display Typeform branding. Hiding branding is available for Premium accounts. Default is true.',
						},
						show_time_to_complete: {
							type: 'boolean',
							description:
								'True to display estimated time to complete on welcome screens. Mutually exclusive with `show_number_of_submissions`. Default is true.',
						},
						show_number_of_submissions: {
							type: 'boolean',
							description:
								'True to display the number of submissions on welcome screens. Mutually exclusive with `show_time_to_complete`.',
						},
						show_cookie_consent: {
							type: 'boolean',
							description: 'True to request cookie consent through a banner.',
						},
						show_question_number: {
							type: 'boolean',
							description:
								'True to display the question number on each block. Default is true.',
						},
						show_key_hint_on_choices: {
							type: 'boolean',
							description:
								'True to display key hint letters on Multiple Choice, Picture Choice, Legal, and Yes/No blocks. Default is true.',
						},
						hide_navigation: {
							type: 'boolean',
							description:
								'True to hide the navigation arrows in the bottom-right corner of the form.',
						},
						meta: {
							type: 'object',
							description: 'Search-engine metadata for the typeform.',
							properties: {
								allow_indexing: {
									type: 'boolean',
									description:
										'True to allow search engines to index your typeform. Default is true.',
								},
								description: {
									type: 'string',
									description:
										'Description for search engines to display for your typeform.',
								},
								image: {
									type: 'object',
									description:
										'Image for search engines to display for your typeform.',
									properties: {
										href: {
											type: 'string',
											description: 'URL of the image for search engines.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						redirect_after_submit_url: {
							type: 'string',
							description: 'URL where the typeform should redirect upon submission.',
						},
						google_analytics: {
							type: 'string',
							description: 'Google Analytics tracking ID to use for the form.',
						},
						facebook_pixel: {
							type: 'string',
							description: 'Facebook Pixel tracking ID to use for the form.',
						},
						google_tag_manager: {
							type: 'string',
							description: 'Google Tag Manager ID to use for the form.',
						},
						mode: {
							type: 'string',
							description:
								'The mode of the form. If not specified, the form is in Universal mode.',
							default: '',
							enum: ['', 'knowledge_quiz'],
						},
						feedback_mode: {
							type: 'string',
							description:
								'How feedback is shown to respondents. `knowledge_quiz_inline` shows correct answers after each question in Knowledge Quiz mode.',
							default: '',
							enum: ['', 'knowledge_quiz_inline'],
						},
						milestones: {
							type: 'array',
							description:
								'Block references indicating where each partial submit point is located.',
							items: {
								type: 'object',
								description: 'A partial submit point.',
								properties: {
									field_ref: {
										type: 'string',
										description:
											'The partial submit point is positioned after the question with this `field_ref`.',
									},
									status: {
										type: 'string',
										description: 'Informative. Cannot be set through the API.',
										default: '',
										enum: ['', 'active', 'inactive'],
									},
									reason: {
										type: 'string',
										description: 'Informative. Cannot be set through the API.',
										default: '',
										enum: ['', 'wrong_position', 'incompatible_feature'],
									},
								},
								required: [],
							},
						},
						enrichment_in_renderer: {
							type: 'object',
							description:
								'Controls data enrichment in the renderer. See [Data enrichment with Typeform](https://www.typeform.com/developers/create/).',
							properties: {
								toggle: {
									type: 'boolean',
									description:
										'True to enable enrichment in the renderer, false to disable it.',
								},
								active: {
									type: 'boolean',
									description:
										'Informative. Cannot be set through the API. If false, enrichment in the renderer is disabled.',
								},
							},
							required: [],
						},
						email_consent_notifications_config: {
							type: 'object',
							description:
								'Configuration for signed-document email notifications (signature block).',
							properties: {
								send_email_copy: {
									type: 'boolean',
									description:
										"Whether a copy of the signed document is BCC'd to `recipient_emails`. When `recipient_emails` is empty or absent, the copy is sent to the account owner. Setting this to false always resets `recipient_emails`. Default is true. Required when this object is provided.",
								},
								recipient_emails: {
									type: 'array',
									description:
										'Email addresses that receive a BCC copy of the signed document. Only meaningful when `send_email_copy` is true. Maximum 10 addresses; duplicates are not allowed.',
									items: {
										type: 'string',
										description:
											'An email address that receives a BCC copy of the signed document.',
									},
								},
							},
							required: [],
						},
						captcha: {
							type: 'boolean',
							description:
								'True to enable captcha on the typeform. See [Secure your forms with Google reCAPTCHA protection](https://www.typeform.com/help/).',
						},
						duplicate_prevention: {
							type: 'object',
							description:
								'Enable and set up duplicate response prevention. See [Prevent duplicate responses](https://www.typeform.com/help/).',
							properties: {
								type: {
									type: 'string',
									description:
										'`cookie`: duplicates may be submitted if cookies are cleared or the device changes. `cookie_ip`: prevent duplicates using cookies and IP. `url_param`: identify duplicates by a hidden-field URL parameter (Growth Custom plan).',
									default: '',
									enum: ['', 'cookie', 'cookie_ip', 'url_param'],
								},
								url_param: {
									type: 'string',
									description:
										"Name of the hidden field whose value identifies the respondent. Required when `type` is `url_param`, and must match a name declared in the form's `hidden` fields.",
								},
								responses_limit: {
									type: 'number',
									description:
										'Number of responses per respondent in the given period.',
								},
								period: {
									type: 'string',
									description: 'Time period for `responses_limit`.',
									default: '',
									enum: ['', 'day', 'week', 'month', 'year'],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cui_settings: {
					type: 'object',
					description: 'Conversation UI settings for the form.',
					properties: {
						avatar: {
							type: 'string',
							description:
								"URL for the image to use as conversation avatar. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`.",
						},
						is_typing_emulation_disabled: {
							type: 'boolean',
							description:
								'True to disable typing emulation (the delay between messages). Typing emulation is enabled by default.',
						},
						typing_emulation_speed: {
							type: 'string',
							description:
								'The pace at which messages appear in a conversation while typing emulation is enabled.',
							default: '',
							enum: ['', 'slow', 'medium', 'fast'],
						},
					},
					required: [],
				},
				self: {
					type: 'object',
					description: 'URL for the typeform resource.',
					properties: { href: { type: 'string', description: 'API URL for this form.' } },
					required: [],
				},
				_links: {
					type: 'object',
					description: 'Related URLs for the form.',
					properties: {
						display: { type: 'string', description: 'URL for the actual form.' },
						responses: {
							type: 'string',
							description: 'URL for the responses public API.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'getWebhook',
		label: 'Get a webhook',
		description: 'Retrieves a single webhook.',
		context:
			'---\nname: getWebhook\ndescription: Retrieves a single webhook.\n---\n\nCalls `GET /forms/{form_id}/webhooks/{tag}` and returns the webhook resource.\n\nSee the [Retrieve single webhook](https://www.typeform.com/developers/webhooks/reference/retrieve-single-webhook/) documentation.\n',
		accounts: { typeform2: { scope: ['webhooks:read'] } },
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
				form_id: {
					type: 'string',
					description:
						'Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.',
				},
				tag: { type: 'string', description: 'Unique name of the webhook.' },
			},
			required: ['form_id', 'tag'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique ID for the webhook.' },
				form_id: { type: 'string', description: 'Unique ID for the typeform.' },
				tag: { type: 'string', description: 'Unique name of the webhook.' },
				url: { type: 'string', description: 'Webhook URL.' },
				enabled: {
					type: 'boolean',
					description: 'True if responses are sent to the webhook immediately.',
				},
				event_types: {
					type: 'object',
					description:
						'Event types this webhook is subscribed to. The webhook is triggered each time any of these events occurs.',
					properties: {
						form_response: {
							type: 'boolean',
							description:
								'True if the webhook is subscribed to completed form responses.',
						},
						form_response_partial: {
							type: 'boolean',
							description:
								'True if the webhook is subscribed to partial form responses.',
						},
					},
					required: [],
				},
				verify_ssl: {
					type: 'boolean',
					description:
						'Read-only. Derived from the URL scheme: `true` for `https`, `false` for legacy `http`. A value sent on the request is ignored.',
				},
				created_at: {
					type: 'string',
					description:
						'Date and time when the webhook was created, in ISO 8601 UTC format.',
				},
				updated_at: {
					type: 'string',
					description: 'Date of last update to the webhook, in ISO 8601 UTC format.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'listForms',
		label: 'List forms',
		description: 'Retrieves a list of forms in the Typeform account.',
		context:
			'---\nname: listForms\ndescription: Retrieves a list of forms in the Typeform account.\n---\n\nCalls `GET /forms` and returns the raw collection: `total_items`, `page_count`, and `items`.\n\nThis endpoint returns a **single page**. Increment **Page** while `page` is less than `page_count`. **Page size** defaults to 10 (maximum 200).\n\nSee the [Retrieve forms](https://www.typeform.com/developers/create/reference/retrieve-forms/) documentation.\n',
		accounts: { typeform2: { scope: ['forms:read', 'workspaces:read'] } },
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
				search: {
					type: 'string',
					description: 'Returns items that contain the specified string.',
				},
				workspace_id: {
					type: 'string',
					description: 'Retrieve typeforms for the specified workspace.',
				},
				is_public: {
					type: 'boolean',
					description: 'Filter forms by their `settings.is_public` property.',
				},
				sort_by: {
					type: 'string',
					description:
						'Field to sort the results by. Currently only `created_at` and `last_updated_at` are accepted.',
					default: '',
					enum: ['', 'created_at', 'last_updated_at'],
				},
				order_by: {
					type: 'string',
					description: 'Sort order. Ascending `asc` or descending `desc`.',
					default: '',
					enum: ['', 'asc', 'desc'],
				},
				page: {
					type: 'number',
					description:
						'The page of results to retrieve. Default `1` is the first page of results.',
					minimum: 1,
				},
				page_size: {
					type: 'number',
					description:
						'Number of results to retrieve per page. Default is 10. Maximum is 200.',
					minimum: 1,
					maximum: 200,
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total_items: {
					type: 'number',
					description: 'Total number of items in the retrieved collection.',
				},
				page_count: { type: 'number', description: 'Number of pages.' },
				items: {
					type: 'array',
					description:
						'JSON descriptions for all forms in your Typeform account (public and private).',
					items: {
						type: 'object',
						description: 'A listed form.',
						properties: {
							id: { type: 'string', description: 'Unique ID of the form.' },
							created_at: {
								type: 'string',
								description: "Time of the form's creation, in ISO 8601 UTC format.",
							},
							last_updated_at: {
								type: 'string',
								description: 'Time of the last update, in ISO 8601 UTC format.',
							},
							settings: {
								type: 'object',
								description: 'Public/private setting for the listed form.',
								properties: {
									is_public: {
										type: 'boolean',
										description: 'True if the form is public. Otherwise false.',
									},
								},
								required: [],
							},
							self: {
								type: 'object',
								description: 'URL for the typeform.',
								properties: {
									href: { type: 'string', description: 'API URL for this form.' },
								},
								required: [],
							},
							theme: {
								type: 'object',
								description: 'Theme the typeform uses.',
								properties: {
									href: { type: 'string', description: 'URL for the theme.' },
								},
								required: [],
							},
							_links: {
								type: 'object',
								description: 'Related URLs for the form.',
								properties: {
									display: {
										type: 'string',
										description: 'URL for the actual form.',
									},
									responses: {
										type: 'string',
										description: 'URL for the responses public API.',
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
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'listImages',
		label: 'List images',
		description: 'Retrieves all images in the Typeform account.',
		context:
			'---\nname: listImages\ndescription: Retrieves all images in the Typeform account.\n---\n\nCalls `GET /images` and returns a JSON **array** of image objects (not a `{ items }` wrapper), in reverse-chronological order.\n\n`unwrap` is disabled so a single-image account still returns an array.\n\nSee the [Retrieve images collection](https://www.typeform.com/developers/create/reference/retrieve-images-collection/) documentation.\n',
		accounts: { typeform2: { scope: ['images:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'listResponses',
		label: 'List responses',
		description: 'Retrieves responses for a form.',
		context:
			'---\nname: listResponses\ndescription: Retrieves responses for a form.\n---\n\nCalls `GET /forms/{form_id}/responses` and returns the raw collection: `total_items`, `page_count`, and `items`.\n\nVery recent responses (within about the last 30 minutes) may not be returned. Use Typeform webhooks for near-real-time submission data.\n\nMulti-value filters (`fields`, `answered_fields`, `included_response_ids`, `excluded_response_ids`, `response_type`) are sent as comma-separated query parameters.\n\nThe deprecated `completed` query parameter is omitted; use **Response type** instead.\n\nSee the [Retrieve responses](https://www.typeform.com/developers/responses/reference/retrieve-responses/) documentation.\n',
		accounts: { typeform2: { scope: ['responses:read'] } },
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
				form_id: {
					type: 'string',
					description:
						'Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.',
				},
				query: {
					type: 'string',
					description:
						'Search for an exact phrase within answer values, hidden field values, and variable values.',
				},
				fields: {
					type: 'array',
					description:
						'Show only these fields in the answers section. If a response has no answers for a specified field, the value is `null`.',
					items: {
						type: 'string',
						description: 'A field ID to include in the answers section.',
					},
				},
				answered_fields: {
					type: 'array',
					description:
						'Limit to responses that include at least one of these fields in the answers section.',
					items: {
						type: 'string',
						description: 'A field ID that must appear in the answers section.',
					},
				},
				included_response_ids: {
					type: 'array',
					description: 'Limit the request to these `response_id` values.',
					items: { type: 'string', description: 'A response ID to include.' },
				},
				excluded_response_ids: {
					type: 'array',
					description: 'Response IDs to exclude from the result.',
					items: { type: 'string', description: 'A response ID to exclude.' },
				},
				response_type: {
					type: 'string',
					description:
						'Limit responses to these types, as a multi-select (sent as a comma-separated list). This changes how `since`/`until` filter: `completed` uses `submitted_at`, `partial` uses `staged_at`, otherwise `landed_at`. Default is `completed`. The deprecated `completed` query parameter is not exposed.',
					default: '',
					enum: ['', 'started', 'partial', 'completed'],
				},
				since: {
					type: 'string',
					description:
						'Limit to responses submitted since this date and time, inclusive. The API accepts ISO 8601 UTC (`2020-03-20T14:00:59`) or a Unix timestamp in seconds.',
				},
				until: {
					type: 'string',
					description:
						'Limit to responses submitted until this date and time, inclusive. The API accepts ISO 8601 UTC (`2020-03-20T14:00:59`) or a Unix timestamp in seconds.',
				},
				after: {
					type: 'string',
					description: 'Return responses submitted after this cursor (exclusive).',
				},
				before: {
					type: 'string',
					description: 'Return responses submitted before this cursor (exclusive).',
				},
				sort: {
					type: 'string',
					description:
						'How to sort the returned responses. Default is `submitted_at,desc` for completed responses, `staged_at,desc` for partial responses, and `landed_at,desc` for started responses.',
				},
				page_size: {
					type: 'number',
					description:
						'Maximum number of responses to return. If the form has more than 1000 responses, use `since`/`until` or `before`/`after` to narrow the request.',
					minimum: 1,
					maximum: 1000,
				},
			},
			required: ['form_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total_items: {
					type: 'number',
					description: 'Total number of items in the retrieved collection.',
				},
				page_count: { type: 'number', description: 'Number of pages.' },
				items: {
					type: 'array',
					description: 'Responses to the form.',
					items: {
						type: 'object',
						description: 'A form response.',
						properties: {
							landing_id: {
								type: 'string',
								description: 'Unique ID for the form landing.',
							},
							token: {
								type: 'string',
								description: 'Secret token for the response.',
							},
							response_id: {
								type: 'string',
								description: 'Unique ID for the response.',
							},
							landed_at: {
								type: 'string',
								description:
									'Date and time the respondent landed on the form, in ISO 8601 UTC format.',
							},
							submitted_at: {
								type: 'string',
								description:
									'Date and time the respondent submitted the form, in ISO 8601 UTC format. Unsubmitted responses may use a placeholder timestamp.',
							},
							metadata: {
								type: 'object',
								description: 'Browser and platform metadata for the response.',
								properties: {
									user_agent: {
										type: 'string',
										description:
											"User agent string of the respondent's browser.",
									},
									platform: {
										type: 'string',
										description: 'Platform the respondent used.',
									},
									referer: { type: 'string', description: 'Referer URL.' },
									network_id: {
										type: 'string',
										description: 'Network identifier for the respondent.',
									},
									browser: { type: 'string', description: 'Browser identifier.' },
								},
								required: [],
							},
							answers: {
								type: 'array',
								description:
									'Answers submitted for this response. Partial or started responses may omit answers.',
								items: {
									type: 'object',
									description: 'An answer to a form field.',
									properties: {
										field: {
											type: 'object',
											description: 'The form field this answer belongs to.',
											properties: {
												id: {
													type: 'string',
													description: 'Unique ID of the field.',
												},
												ref: {
													type: 'string',
													description: 'Readable name of the field.',
												},
												type: {
													type: 'string',
													description:
														'Type of the field, for example `short_text` or `multiple_choice`.',
												},
											},
											required: [],
										},
										type: {
											type: 'string',
											description:
												'Answer type returned by the API. One of `text`, `boolean`, `email`, `number`, `date`, `choice`, `choices`, `file_url`, `url`, or `phone_number`.',
										},
										text: {
											type: 'string',
											description:
												'Text answer. Present when `type` is `text`.',
										},
										boolean: {
											type: 'boolean',
											description:
												'Boolean answer. Present when `type` is `boolean`.',
										},
										email: {
											type: 'string',
											description:
												'Email answer. Present when `type` is `email`.',
										},
										number: {
											type: 'number',
											description:
												'Numeric answer. Present when `type` is `number`.',
										},
										date: {
											type: 'string',
											description:
												'Date answer. Present when `type` is `date`.',
										},
										url: {
											type: 'string',
											description:
												'URL answer. Present when `type` is `url`.',
										},
										file_url: {
											type: 'string',
											description:
												'URL of an uploaded file. Present when `type` is `file_url`. Use this URL with an authorized request to download the file.',
										},
										phone_number: {
											type: 'string',
											description:
												'Phone number answer. Present when `type` is `phone_number`.',
										},
										choice: {
											type: 'object',
											description:
												'Single-choice answer. Present when `type` is `choice`.',
											properties: {
												id: {
													type: 'string',
													description: 'ID of the selected choice.',
												},
												ref: {
													type: 'string',
													description:
														'Readable name of the selected choice.',
												},
												label: {
													type: 'string',
													description: 'Label of the selected choice.',
												},
												other: {
													type: 'string',
													description:
														'Free-text value when the respondent selected Other.',
												},
											},
											required: [],
										},
										choices: {
											type: 'object',
											description:
												'Multi-choice answer. Present when `type` is `choices`.',
											properties: {
												ids: {
													type: 'array',
													description: 'IDs of the selected choices.',
													items: {
														type: 'string',
														description: 'ID of a selected choice.',
													},
												},
												refs: {
													type: 'array',
													description:
														'Readable names of the selected choices.',
													items: {
														type: 'string',
														description:
															'Readable name of a selected choice.',
													},
												},
												labels: {
													type: 'array',
													description: 'Labels of the selected choices.',
													items: {
														type: 'string',
														description: 'Label of a selected choice.',
													},
												},
												other: {
													type: 'string',
													description:
														'Free-text value when the respondent selected Other.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							hidden: {
								type: 'object',
								description:
									'Hidden Field values for this response. Open object of hidden field names to values.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							calculated: {
								type: 'object',
								description: 'Calculated values for this response.',
								properties: {
									score: { type: 'number', description: 'Calculated score.' },
								},
								required: [],
							},
							variables: {
								type: 'array',
								description: 'Variable values for this response.',
								items: {
									type: 'object',
									description: 'A form variable value.',
									properties: {
										key: { type: 'string', description: 'Variable name.' },
										type: {
											type: 'string',
											description:
												'Variable type, for example `number` or `text`.',
										},
										number: {
											type: 'number',
											description: 'Numeric value when `type` is `number`.',
										},
										text: {
											type: 'string',
											description: 'Text value when `type` is `text`.',
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
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'listWebhooks',
		label: 'List webhooks',
		description: 'Retrieves all webhooks for a form.',
		context:
			'---\nname: listWebhooks\ndescription: Retrieves all webhooks for a form.\n---\n\nCalls `GET /forms/{form_id}/webhooks` and returns `{ items }`.\n\nSee the [Retrieve webhooks](https://www.typeform.com/developers/webhooks/reference/retrieve-webhooks/) documentation.\n',
		accounts: { typeform2: { scope: ['webhooks:read'] } },
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
				form_id: {
					type: 'string',
					description:
						'Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.',
				},
			},
			required: ['form_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'Webhooks configured for the form.',
					items: {
						type: 'object',
						description: 'A webhook.',
						properties: {
							id: { type: 'string', description: 'Unique ID for the webhook.' },
							form_id: { type: 'string', description: 'Unique ID for the typeform.' },
							tag: { type: 'string', description: 'Unique name of the webhook.' },
							url: { type: 'string', description: 'Webhook URL.' },
							enabled: {
								type: 'boolean',
								description:
									'True if responses are sent to the webhook immediately.',
							},
							event_types: {
								type: 'object',
								description:
									'Event types this webhook is subscribed to. The webhook is triggered each time any of these events occurs.',
								properties: {
									form_response: {
										type: 'boolean',
										description:
											'True if the webhook is subscribed to completed form responses.',
									},
									form_response_partial: {
										type: 'boolean',
										description:
											'True if the webhook is subscribed to partial form responses.',
									},
								},
								required: [],
							},
							verify_ssl: {
								type: 'boolean',
								description:
									'Read-only. Derived from the URL scheme: `true` for `https`, `false` for legacy `http`. A value sent on the request is ignored.',
							},
							created_at: {
								type: 'string',
								description:
									'Date and time when the webhook was created, in ISO 8601 UTC format.',
							},
							updated_at: {
								type: 'string',
								description:
									'Date of last update to the webhook, in ISO 8601 UTC format.',
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
		appName: 'typeform',
		appVersion: 2,
		endpointName: 'updateForm',
		label: 'Update a form',
		description: 'Overwrites an existing form.',
		context:
			'---\nname: updateForm\ndescription: Overwrites an existing form.\n---\n\nCalls `PUT /forms/{form_id}` and replaces the stored form with the request body.\n\n**Always GET the form first.** PUT overwrites the entire form. Any field you omit is deleted, including responses for that field. Include every field you want to keep, with its original field `id`.\n\nIf you omit `theme`, Typeform applies a new copy of the default theme even when a theme is already assigned.\n\nEmpty optional objects and arrays are stripped before the request is sent.\n\nSee the [Update form](https://www.typeform.com/developers/create/reference/update-form/) documentation.\n',
		accounts: { typeform2: { scope: ['forms:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				form_id: {
					type: 'string',
					description:
						'Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.',
				},
				settings: {
					type: 'object',
					description:
						'Form settings, including language, public availability, progress bar, tracking, and notifications.',
					properties: {
						language: {
							type: 'string',
							description: 'Language to use for the form.',
							default: '',
							enum: [
								'',
								'en',
								'es',
								'ca',
								'fr',
								'de',
								'ru',
								'it',
								'da',
								'pt',
								'ch',
								'zh',
								'nl',
								'no',
								'uk',
								'ja',
								'ko',
								'hr',
								'fi',
								'sv',
								'pl',
								'el',
								'hu',
								'tr',
								'cs',
								'et',
								'di',
							],
						},
						is_public: {
							type: 'boolean',
							description: 'True if the form is publicly available.',
						},
						progress_bar: {
							type: 'string',
							description: 'Progress bar display style.',
							default: '',
							enum: ['', 'proportion', 'percentage'],
						},
						show_progress_bar: {
							type: 'boolean',
							description: 'True to display the progress bar.',
						},
						show_typeform_branding: {
							type: 'boolean',
							description: 'True to display Typeform branding on the form.',
						},
						meta: {
							type: 'object',
							description: 'Search-engine metadata for the form.',
							properties: {
								allow_indexing: {
									type: 'boolean',
									description: 'True if search engines can index the form.',
								},
								description: {
									type: 'string',
									description: 'Description for search-engine indexing.',
								},
								image: {
									type: 'object',
									description: 'Image used in search-engine metadata.',
									properties: {
										href: {
											type: 'string',
											description:
												'URL of the metadata image. Images must already exist in your account.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						redirect_after_submit_url: {
							type: 'string',
							description:
								'URL to redirect respondents to after they submit the form.',
						},
						google_analytics: {
							type: 'string',
							description: 'Google Analytics tracking ID to associate with the form.',
						},
						facebook_pixel: {
							type: 'string',
							description: 'Facebook Pixel tracking ID to associate with the form.',
						},
						google_tag_manager: {
							type: 'string',
							description: 'Google Tag Manager ID to associate with the form.',
						},
						notifications: {
							type: 'object',
							description:
								'Email notifications sent to you or to the respondent after a submission.',
							properties: {
								self: {
									type: 'object',
									description:
										'Notification sent to you when someone submits the form.',
									properties: {
										enabled: {
											type: 'boolean',
											description:
												'True to send a notification email to the addresses in Recipients.',
										},
										recipients: {
											type: 'array',
											description:
												'Email addresses that receive the notification. Required when Self is enabled.',
											items: {
												type: 'string',
												description: 'Recipient email address.',
											},
										},
										reply_to: {
											type: 'string',
											description:
												'Reply-to address for the notification email.',
										},
										subject: {
											type: 'string',
											description:
												'Subject line of the notification email. Required when Self is enabled.',
										},
										message: {
											type: 'string',
											description:
												'Body of the notification email. Required when Self is enabled.',
										},
									},
									required: [],
								},
								respondent: {
									type: 'object',
									description:
										'Notification sent to the respondent after they submit the form.',
									properties: {
										enabled: {
											type: 'boolean',
											description:
												'True to email the respondent after they submit the form.',
										},
										recipient: {
											type: 'string',
											description:
												'Email field that receives the message. Use `{{field:internal_name}}`. Required when Respondent is enabled.',
										},
										reply_to: {
											type: 'array',
											description:
												'Reply-to addresses for the respondent email.',
											items: {
												type: 'string',
												description: 'Reply-to email address.',
											},
										},
										subject: {
											type: 'string',
											description:
												'Subject line of the respondent email. Required when Respondent is enabled.',
										},
										message: {
											type: 'string',
											description:
												'Body of the respondent email. Required when Respondent is enabled.',
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
				cui_settings: {
					type: 'object',
					description: 'Conversation user-interface settings for chat-style forms.',
					properties: {
						avatar: {
							type: 'string',
							description:
								'URL for the image to use as conversation avatar. Images must already exist in your account — use the image Typeform URL, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
						},
						is_typing_emulation_disabled: {
							type: 'boolean',
							description:
								'True to disable the delay between messages. Typing emulation is enabled by default.',
						},
						typing_emulation_speed: {
							type: 'string',
							description:
								'Pace at which messages appear in a conversation when typing emulation is enabled.',
							default: '',
							enum: ['', 'slow', 'medium', 'fast'],
						},
					},
					required: [],
				},
				theme: {
					type: 'object',
					description: 'Theme to use for the form.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of the theme, for example `https://api.typeform.com/themes/Fs24as`.',
						},
					},
					required: [],
				},
				workspace: {
					type: 'object',
					description:
						'Workspace that contains the form. If omitted, Typeform saves the form in the default workspace.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of your workspace, for example `https://api.typeform.com/workspaces/123456789`.',
						},
					},
					required: [],
				},
				hidden: {
					type: 'array',
					description: 'Hidden field names whose values you can pass in the form URL.',
					items: { type: 'string', description: 'Hidden field name.' },
				},
				variables: {
					type: 'object',
					description: 'Recall variables used in the form, such as score and price.',
					properties: {
						score: {
							type: 'number',
							description: 'Starting value for the score Recall variable.',
						},
						price: {
							type: 'number',
							description:
								'Starting value for the price Recall variable. Used by payment fields.',
						},
					},
					required: [],
				},
				welcome_screens: {
					type: 'array',
					description: 'Welcome screens shown before the first question.',
					items: {
						type: 'object',
						description: 'A welcome screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the welcome screen.',
							},
							properties: {
								type: 'object',
								description: 'Display options for the welcome screen.',
								properties: {
									description: {
										type: 'string',
										description: 'Description shown on the welcome screen.',
									},
									show_button: {
										type: 'boolean',
										description:
											'True to show a start button on the welcome screen.',
									},
									button_text: {
										type: 'string',
										description: 'Text displayed on the start button.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the welcome screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											'URL for the image or video. Images must already exist in your account. Use the image Typeform URL, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				thankyou_screens: {
					type: 'array',
					description: 'Thank you screens shown after the form is submitted.',
					items: {
						type: 'object',
						description: 'A thank you screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the thank you screen.',
							},
							properties: {
								type: 'object',
								description: 'Display options for the thank you screen.',
								properties: {
									description: {
										type: 'string',
										description: 'Description shown on the thank you screen.',
									},
									show_button: {
										type: 'boolean',
										description:
											'True to show a button on the thank you screen.',
									},
									button_text: {
										type: 'string',
										description:
											'Text displayed on the thank you screen button.',
									},
									redirect_url: {
										type: 'string',
										description:
											'URL to open when the respondent clicks the thank you screen button.',
									},
									share_icons: {
										type: 'boolean',
										description:
											'True to show social share icons on the thank you screen.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the thank you screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											'URL for the image or video. Images must already exist in your account. Use the image Typeform URL, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				fields: {
					type: 'array',
					description:
						'Questions on the form. Include every field you want to keep, with its original `id`. Omitted fields and their responses are deleted.',
					items: {
						type: 'object',
						description: 'A form field.',
						properties: {
							id: {
								type: 'string',
								description:
									'Unique ID of the field. Include the original ID so the field and its responses are preserved. Omit only when adding a new field.',
							},
							type: {
								type: 'string',
								description:
									'The type of field. Required when a field is provided.',
								default: '',
								enum: [
									'',
									'date',
									'contact_info',
									'nps',
									'dropdown',
									'email',
									'file_upload',
									'legal',
									'long_text',
									'multiple_choice',
									'number',
									'opinion_scale',
									'payment',
									'picture_choice',
									'rating',
									'short_text',
									'statement',
									'website',
									'yes_no',
									'phone_number',
									'matrix',
									'ranking',
									'group',
								],
							},
							ref: {
								type: 'string',
								description: 'Readable name you can use to reference the field.',
							},
							validations: {
								type: 'object',
								description:
									'Validation rules for the field. Leave empty for statement, matrix, or group types.',
								properties: {
									required: {
										type: 'boolean',
										description:
											'True if respondents must provide an answer. Leave empty if the field type is statement, matrix, or group.',
									},
								},
								required: [],
							},
							properties: {
								type: 'object',
								description: 'Type-specific properties for the field.',
								properties: {
									description: {
										type: 'string',
										description:
											'Question description or additional text shown with the field.',
									},
									choices: {
										type: 'array',
										description:
											'Answer choices. Used for dropdown, multiple choice, picture choice, and ranking fields.',
										items: {
											type: 'object',
											description: 'An answer choice.',
											properties: {
												label: {
													type: 'string',
													description:
														'Text displayed for this choice. Required when a choice is provided.',
												},
												ref: {
													type: 'string',
													description:
														'Readable name you can use to reference the choice.',
												},
												attachment: {
													type: 'object',
													description:
														'Image for a picture-choice answer. Images must already exist in your account.',
													properties: {
														href: {
															type: 'string',
															description:
																'Typeform image URL to use for the answer choice, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
														},
														type: {
															type: 'string',
															description:
																'Attachment type. Use `image` for picture-choice answers.',
															default: '',
															enum: ['', 'image'],
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									fields: {
										type: 'array',
										description:
											'Nested fields. Use contact-info subfields (`subfield_key`), matrix rows as multiple-choice fields, or questions inside a group.',
										items: {
											type: 'object',
											description:
												'A nested field for a group, contact info, or matrix question.',
											properties: {
												id: {
													type: 'string',
													description:
														'Unique ID of the nested field. Include the original ID when updating so the field is preserved.',
												},
												type: {
													type: 'string',
													description: 'The type of nested field.',
													default: '',
													enum: [
														'',
														'date',
														'contact_info',
														'nps',
														'dropdown',
														'email',
														'file_upload',
														'legal',
														'long_text',
														'multiple_choice',
														'number',
														'opinion_scale',
														'payment',
														'picture_choice',
														'rating',
														'short_text',
														'statement',
														'website',
														'yes_no',
														'phone_number',
														'matrix',
														'ranking',
														'group',
													],
												},
												ref: {
													type: 'string',
													description:
														'Readable name you can use to reference the nested field.',
												},
												subfield_key: {
													type: 'string',
													description:
														'Contact-info subfield key. Use `first_name`, `last_name`, `phone_number`, `email`, or `company`.',
												},
												validations: {
													type: 'object',
													description:
														'Validation rules for the nested field. Leave empty for statement, matrix, or group types.',
													properties: {
														required: {
															type: 'boolean',
															description:
																'True if respondents must provide an answer. Leave empty if the field type is statement, matrix, or group.',
														},
													},
													required: [],
												},
												properties: {
													type: 'object',
													description:
														'Type-specific properties for the nested field.',
													properties: {
														description: {
															type: 'string',
															description:
																'Question description or additional text shown with the field.',
														},
														choices: {
															type: 'array',
															description:
																'Answer choices. Used for dropdown, multiple choice, picture choice, and ranking fields.',
															items: {
																type: 'object',
																description: 'An answer choice.',
																properties: {
																	label: {
																		type: 'string',
																		description:
																			'Text displayed for this choice. Required when a choice is provided.',
																	},
																	ref: {
																		type: 'string',
																		description:
																			'Readable name you can use to reference the choice.',
																	},
																	attachment: {
																		type: 'object',
																		description:
																			'Image for a picture-choice answer. Images must already exist in your account.',
																		properties: {
																			href: {
																				type: 'string',
																				description:
																					'Typeform image URL to use for the answer choice, for example `https://images.typeform.com/images/kbn8tc98AHb`.',
																			},
																			type: {
																				type: 'string',
																				description:
																					'Attachment type. Use `image` for picture-choice answers.',
																				default: '',
																				enum: ['', 'image'],
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
											required: [],
										},
									},
									alphabetical_order: {
										type: 'boolean',
										description:
											'True to sort dropdown choices alphabetically. Used for dropdown fields.',
									},
									allow_multiple_selection: {
										type: 'boolean',
										description:
											'True to let respondents select more than one choice. Used for multiple choice, picture choice, and ranking fields.',
									},
									randomize: {
										type: 'boolean',
										description:
											'True to show choices in random order. Used for multiple choice, picture choice, and ranking fields.',
									},
									allow_other_choice: {
										type: 'boolean',
										description:
											'True to include an Other option. Used for multiple choice and picture choice fields.',
									},
									vertical_alignment: {
										type: 'boolean',
										description:
											'True to stack choices vertically. Used for multiple choice fields.',
									},
									supersized: {
										type: 'boolean',
										description:
											'True to display picture-choice images larger. Used for picture choice fields.',
									},
									show_labels: {
										type: 'boolean',
										description:
											'True to show labels with picture-choice images. Used for picture choice fields.',
									},
									hide_marks: {
										type: 'boolean',
										description:
											'True to hide quotation marks on a statement field.',
									},
									button_text: {
										type: 'string',
										description:
											'Text displayed on the continue or pay button. Used for payment and statement fields.',
									},
									steps: {
										type: 'string',
										description:
											'Number of steps on the scale. Used for rating and opinion scale fields.',
										default: '',
										enum: ['', 5, 6, 7, 8, 9, 10, 11],
									},
									shape: {
										type: 'string',
										description:
											'Shape used for rating steps. Used for rating fields.',
										default: '',
										enum: [
											'',
											'cat',
											'circle',
											'cloud',
											'crown',
											'dog',
											'droplet',
											'flag',
											'heart',
											'lightbulb',
											'pencil',
											'skull',
											'star',
											'thunderbolt',
											'tick',
											'trophy',
											'up',
											'user',
										],
									},
									labels: {
										type: 'object',
										description:
											'Labels for the left, center, and right of an opinion scale.',
										properties: {
											left: {
												type: 'string',
												description:
													'Text of the left-aligned label for the scale.',
											},
											center: {
												type: 'string',
												description:
													'Text of the center-aligned label for the scale.',
											},
											right: {
												type: 'string',
												description:
													'Text of the right-aligned label for the scale.',
											},
										},
										required: [],
									},
									start_at_one: {
										type: 'boolean',
										description:
											'True to start the opinion scale at 1 instead of 0. Used for opinion scale fields.',
									},
									structure: {
										type: 'string',
										description: 'Date format. Used for date fields.',
										default: '',
										enum: ['', 'MMDDYYYY', 'DDMMYYYY', 'YYYYMMDD'],
									},
									separator: {
										type: 'string',
										description:
											'Character that separates month, day, and year in a date field, for example `/` or `-`.',
									},
									currency: {
										type: 'string',
										description: 'Currency for a payment field.',
										default: '',
										enum: [
											'',
											'AUD',
											'BRL',
											'CAD',
											'CHF',
											'DKK',
											'EUR',
											'GBP',
											'MXN',
											'NOK',
											'SEK',
											'USD',
										],
									},
									price: {
										type: 'object',
										description:
											'Price source for a payment field. Typeform uses the form `price` variable.',
										properties: {
											type: {
												type: 'string',
												description: 'Price source type. Use `variable`.',
												default: '',
												enum: ['', 'variable'],
											},
											value: {
												type: 'string',
												description:
													'Variable that holds the price. Use `price`.',
												default: '',
												enum: ['', 'price'],
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
				},
				logic: {
					type: 'array',
					description:
						'Logic jumps. Referenced fields must already exist on the form. To jump to a newly created field, create the form first, then add logic with Update a form.',
					items: {
						type: 'object',
						description: 'A Logic Jump definition.',
						properties: {
							type: {
								type: 'string',
								description:
									'Whether the Logic Jump is based on a question field or a hidden field. Required when a logic item is provided.',
								default: '',
								enum: ['', 'field', 'hidden'],
							},
							ref: {
								type: 'string',
								description:
									'Reference that is accessible in the current form scope.',
							},
							actions: {
								type: 'array',
								description:
									'Objects that define the Logic Jump behavior. Required when a logic item is provided.',
								items: {
									type: 'object',
									description: 'A Logic Jump action.',
									properties: {
										action: {
											type: 'string',
											description:
												'Behavior the Logic Jump will take. Required when an action is provided.',
											default: '',
											enum: [
												'',
												'jump',
												'add',
												'subtract',
												'multiply',
												'divide',
											],
										},
										details: {
											type: 'object',
											description:
												'Where the Logic Jump leads. Required when an action is provided.',
											properties: {
												to: {
													type: 'object',
													description: 'Destination of the jump.',
													properties: {
														type: {
															type: 'string',
															description: 'Destination type.',
															default: '',
															enum: [
																'',
																'field',
																'hidden',
																'thankyou',
															],
														},
														value: {
															type: 'string',
															description:
																'Ref of the field, hidden field, or thank you screen the jump leads to. Required when To is provided.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										condition: {
											type: 'object',
											description: 'Conditions for executing the Logic Jump.',
											properties: {
												op: {
													type: 'string',
													description:
														'Operator for the condition. Required when a condition is provided.',
													default: '',
													enum: [
														'',
														'begins_with',
														'ends_with',
														'contains',
														'not_contains',
														'lower_than',
														'lower_equal_than',
														'greater_than',
														'greater_equal_than',
														'is',
														'is_not',
														'equal',
														'not_equal',
														'always',
														'on',
														'not_on',
														'earlier_than',
														'earlier_than_or_on',
														'later_than',
														'later_than_or_on',
													],
												},
												vars: {
													type: 'array',
													description: 'Values the operator evaluates.',
													items: {
														type: 'object',
														description:
															'A value the condition evaluates.',
														properties: {
															type: {
																type: 'string',
																description:
																	'Type of value the condition refers to.',
																default: '',
																enum: [
																	'',
																	'field',
																	'hidden',
																	'variable',
																	'constant',
																	'end',
																],
															},
															value: {
																type: 'string',
																description:
																	'Value to evaluate. Required when a var is provided.',
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
						},
						required: [],
					},
				},
			},
			required: ['form_id', 'title'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique ID of the form.' },
				created_at: {
					type: 'string',
					description: "Time of the form's creation, in ISO 8601 UTC format.",
				},
				last_updated_at: {
					type: 'string',
					description: 'Time of the last update, in ISO 8601 UTC format.',
				},
				type: { type: 'string', description: 'Type of form.' },
				language: {
					type: 'string',
					description: 'Language of the form. Default is `en`.',
					default: '',
					enum: [
						'',
						'en',
						'es',
						'ca',
						'fr',
						'de',
						'ru',
						'it',
						'da',
						'pt',
						'ch',
						'zh',
						'nl',
						'no',
						'uk',
						'ja',
						'ko',
						'hr',
						'fi',
						'sv',
						'pl',
						'el',
						'hu',
						'tr',
						'cs',
						'et',
						'di',
					],
				},
				fields: {
					type: 'array',
					description:
						'Fields to use in the form and their properties, validations, and attachments.',
					items: {
						type: 'object',
						description: 'A form field.',
						properties: {
							id: {
								type: 'string',
								description:
									'Unique ID of the field. Include the original ID when updating a form so the field and its responses are preserved.',
							},
							ref: {
								type: 'string',
								description: 'Readable name you can use to reference the field.',
							},
							type: {
								type: 'string',
								description:
									'The type of field. Required when a field is provided.',
								default: '',
								enum: [
									'',
									'calendly',
									'checkbox',
									'contact_info',
									'date',
									'dropdown',
									'email',
									'file_upload',
									'google_calendar',
									'group',
									'legal',
									'long_text',
									'matrix',
									'multi_format',
									'multiple_choice',
									'nps',
									'number',
									'opinion_scale',
									'payment',
									'phone_number',
									'picture_choice',
									'ranking',
									'rating',
									'short_text',
									'signature',
									'statement',
									'website',
									'yes_no',
								],
							},
							properties: {
								type: 'object',
								description:
									'Field properties, validations helpers, and type-specific settings.',
								properties: {
									description: {
										type: 'string',
										description:
											'Question or instruction to display for the field.',
									},
									choices: {
										type: 'array',
										description:
											'Answer choices. Available for `ranking`, `dropdown`, `multiple_choice`, `picture_choice`, and `checkbox` types. For `checkbox`, the array must contain exactly one item.',
										items: {
											type: 'object',
											description: 'An answer choice.',
											properties: {
												ref: {
													type: 'string',
													description:
														'Readable name for the answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`. Not available for `dropdown`.',
												},
												label: {
													type: 'string',
													description:
														'Text for the answer choice. Maximum 255 characters.',
												},
												attachment: {
													type: 'object',
													description:
														'Image for the answer choice. Available only for `picture_choice` types.',
													properties: {
														type: {
															type: 'string',
															description:
																'Type of attachment. Must be `image` for picture choices.',
															default: '',
															enum: ['', 'image'],
														},
														href: {
															type: 'string',
															description:
																'Typeform URL for the image to use for the answer choice.',
														},
														properties: {
															type: 'object',
															description:
																'Optional attachment properties.',
															properties: {
																description: {
																	type: 'string',
																	description:
																		'Alt text for the choice image.',
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
									},
									fields: {
										type: 'array',
										description:
											'Fields that belong in a question group or matrix. `payment` and `group` blocks are not allowed inside a question group. Available for the `group` and `matrix` types.',
										items: {
											type: 'object',
											description: 'A nested field inside a group or matrix.',
											properties: {
												id: {
													type: 'string',
													description:
														'Unique ID of the field. Include the original ID when updating a form so the field and its responses are preserved.',
												},
												ref: {
													type: 'string',
													description:
														'Readable name you can use to reference the field.',
												},
												type: {
													type: 'string',
													description:
														'The type of field. Required when a field is provided.',
													default: '',
													enum: [
														'',
														'calendly',
														'checkbox',
														'contact_info',
														'date',
														'dropdown',
														'email',
														'file_upload',
														'google_calendar',
														'group',
														'legal',
														'long_text',
														'matrix',
														'multi_format',
														'multiple_choice',
														'nps',
														'number',
														'opinion_scale',
														'payment',
														'phone_number',
														'picture_choice',
														'ranking',
														'rating',
														'short_text',
														'signature',
														'statement',
														'website',
														'yes_no',
													],
												},
												properties: {
													type: 'object',
													description:
														'Field properties, validations helpers, and type-specific settings.',
													properties: {
														description: {
															type: 'string',
															description:
																'Question or instruction to display for the field.',
														},
														choices: {
															type: 'array',
															description:
																'Answer choices. Available for `ranking`, `dropdown`, `multiple_choice`, `picture_choice`, and `checkbox` types. For `checkbox`, the array must contain exactly one item.',
															items: {
																type: 'object',
																description: 'An answer choice.',
																properties: {
																	ref: {
																		type: 'string',
																		description:
																			'Readable name for the answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`. Not available for `dropdown`.',
																	},
																	label: {
																		type: 'string',
																		description:
																			'Text for the answer choice. Maximum 255 characters.',
																	},
																	attachment: {
																		type: 'object',
																		description:
																			'Image for the answer choice. Available only for `picture_choice` types.',
																		properties: {
																			type: {
																				type: 'string',
																				description:
																					'Type of attachment. Must be `image` for picture choices.',
																				default: '',
																				enum: ['', 'image'],
																			},
																			href: {
																				type: 'string',
																				description:
																					'Typeform URL for the image to use for the answer choice.',
																			},
																			properties: {
																				type: 'object',
																				description:
																					'Optional attachment properties.',
																				properties: {
																					description: {
																						type: 'string',
																						description:
																							'Alt text for the choice image.',
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
														},
														allow_multiple_selection: {
															type: 'boolean',
															description:
																'True to allow respondents to select more than one answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
														randomize: {
															type: 'boolean',
															description:
																'True to present answer choices in a new random order for each respondent. Available for `ranking`, `multiple_choice`, `picture_choice`, and `dropdown`.',
														},
														allow_other_choice: {
															type: 'boolean',
															description:
																'True to include an Other option. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
														vertical_alignment: {
															type: 'boolean',
															description:
																'True to list answer choices vertically. Available for `ranking` and `multiple_choice`.',
														},
														supersized: {
															type: 'boolean',
															description:
																'True to use larger-sized images for answer choices. Available for `picture_choice`.',
														},
														show_labels: {
															type: 'boolean',
															description:
																'True to show text labels and images as answer choices. Available for `picture_choice`. Default is true.',
														},
														alphabetical_order: {
															type: 'boolean',
															description:
																'True to list dropdown choices alphabetically. Available for `dropdown`.',
														},
														hide_marks: {
															type: 'boolean',
															description:
																'True to hide quotation marks around a statement. Available for `statement`.',
														},
														button_text: {
															type: 'string',
															description:
																'Text to display on the button. Available for `group`, `payment`, and `statement`. Default is `Continue`.',
														},
														steps: {
															type: 'number',
															description:
																"Number of steps in the scale's range. Minimum is 5 and maximum is 11. Available for `opinion_scale` and `rating`.",
														},
														shape: {
															type: 'string',
															description:
																"Shape to display on the scale's steps. Available for `opinion_scale` and `rating`. Default is `star`.",
															default: '',
															enum: [
																'',
																'cat',
																'circle',
																'cloud',
																'crown',
																'dog',
																'droplet',
																'flag',
																'heart',
																'lightbulb',
																'pencil',
																'skull',
																'star',
																'thunderbolt',
																'tick',
																'trophy',
																'up',
																'user',
															],
														},
														labels: {
															type: 'object',
															description:
																"Labels that help respondents understand the scale's range. Available for `opinion_scale` and `rating`.",
															properties: {
																left: {
																	type: 'string',
																	description:
																		'Text of the left-aligned label for the scale.',
																},
																center: {
																	type: 'string',
																	description:
																		'Text of the center-aligned label for the scale.',
																},
																right: {
																	type: 'string',
																	description:
																		'Text of the right-aligned label for the scale.',
																},
															},
															required: [],
														},
														start_at_one: {
															type: 'boolean',
															description:
																'True if range numbering should start at 1. Available for `opinion_scale`.',
														},
														structure: {
															type: 'string',
															description:
																'Date format for answers. Available for `date`. Default is `DDMMYYYY`.',
															default: '',
															enum: [
																'',
																'MMDDYYYY',
																'DDMMYYYY',
																'YYYYMMDD',
															],
														},
														separator: {
															type: 'string',
															description:
																'Character between month, day, and year. Available for `date`. Default is `/`.',
															default: '',
															enum: ['', '/', '-', '.'],
														},
														currency: {
															type: 'string',
															description:
																'Currency of the payment. Available for `payment`. Default is `EUR`.',
															default: '',
															enum: [
																'',
																'AUD',
																'BRL',
																'CAD',
																'CHF',
																'DKK',
																'EUR',
																'GBP',
																'MXN',
																'NOK',
																'SEK',
																'USD',
															],
														},
														email_receipts: {
															type: 'boolean',
															description:
																"Enables collection of the customer's email so Stripe can send a payment receipt. Available for `payment`.",
														},
														additional_payment_methods: {
															type: 'array',
															description:
																'Enabled payment methods allowed for payment (for example Google Pay or Apple Pay). Available for `payment`.',
															items: {
																type: 'string',
																description:
																	'An enabled payment method name.',
															},
														},
														price: {
															type: 'object',
															description:
																'Price of the item. Available for `payment`.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'Specifies that the value is a variable.',
																	default: '',
																	enum: ['', 'variable'],
																},
																value: {
																	type: 'string',
																	description:
																		'Variable name to use for the price.',
																	default: '',
																	enum: ['', 'price'],
																},
															},
															required: [],
														},
														show_button: {
															type: 'boolean',
															description:
																'True to display a button. Available for `group` and `payment`.',
														},
														default_country_code: {
															type: 'string',
															description:
																'Default 2-letter ISO 3166-1 country code. Available for `phone_number`. Default is `us`.',
														},
														regexp: {
															type: 'string',
															description:
																'Regular expression pattern to validate the answer. Available for `long_text`.',
														},
														allowed_answer_types: {
															type: 'array',
															description:
																'List of allowed answer types for the field. Available for `multi_format`.',
															items: {
																type: 'string',
																description:
																	'An allowed answer type.',
															},
														},
														availability: {
															type: 'object',
															description:
																'Weekly availability for booking, with one entry per day plus a required `timezone`. Available for `google_calendar`.',
															properties: {
																monday: {
																	type: 'array',
																	description:
																		'Available time slots on Monday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																tuesday: {
																	type: 'array',
																	description:
																		'Available time slots on Tuesday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																wednesday: {
																	type: 'array',
																	description:
																		'Available time slots on Wednesday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																thursday: {
																	type: 'array',
																	description:
																		'Available time slots on Thursday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																friday: {
																	type: 'array',
																	description:
																		'Available time slots on Friday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																saturday: {
																	type: 'array',
																	description:
																		'Available time slots on Saturday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																sunday: {
																	type: 'array',
																	description:
																		'Available time slots on Sunday.',
																	items: {
																		type: 'object',
																		description:
																			'A bookable time slot.',
																		properties: {
																			start: {
																				type: 'string',
																				description:
																					'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																			end: {
																				type: 'string',
																				description:
																					'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
																			},
																		},
																		required: [],
																	},
																},
																timezone: {
																	type: 'string',
																	description:
																		'IANA time zone name (for example `Europe/Madrid`) used to interpret all slot times. Required when availability is provided.',
																},
															},
															required: [],
														},
														booking_limits: {
															type: 'object',
															description:
																'Optional caps on how many slots can be booked. Available for `google_calendar`.',
															properties: {
																max_daily_bookings: {
																	type: 'number',
																	description:
																		'Maximum number of bookings allowed per day.',
																},
																buffer_duration: {
																	type: 'number',
																	description:
																		'Buffer time, in minutes, to keep free between consecutive bookings.',
																},
															},
															required: [],
														},
														calendar_id: {
															type: 'string',
															description:
																'Identifier of the Google Calendar to book against. Available for `google_calendar`.',
														},
														event: {
															type: 'object',
															description:
																'Event details written to the booked calendar invite. Available for `google_calendar`.',
															properties: {
																description: {
																	type: 'string',
																	description:
																		'Description of the calendar event created when a respondent books a slot.',
																},
																duration: {
																	type: 'object',
																	description:
																		'Duration of the calendar event.',
																	properties: {
																		time: {
																			type: 'number',
																			description:
																				'Numeric length of the event, expressed in `unit`. Must be a positive integer.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'Unit of time for `time`.',
																			default: '',
																			enum: [
																				'',
																				'hours',
																				'minutes',
																			],
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														reminders: {
															type: 'object',
															description:
																'Optional reminder sent to respondents ahead of a booked slot. Available for `google_calendar`.',
															properties: {
																amount: {
																	type: 'number',
																	description:
																		'Numeric amount of time before the slot at which to send the reminder, expressed in `unit`.',
																},
																unit: {
																	type: 'string',
																	description:
																		'Unit of time for `amount`.',
																	default: '',
																	enum: [
																		'',
																		'minute',
																		'hour',
																		'day',
																		'week',
																	],
																},
															},
															required: [],
														},
														scheduling_window: {
															type: 'object',
															description:
																'Constraints on when respondents can book a slot. Available for `google_calendar`.',
															properties: {
																start_at: {
																	type: 'string',
																	description:
																		'Earliest date or datetime at which a respondent can book a slot.',
																},
																end_at: {
																	type: 'string',
																	description:
																		'Latest date or datetime at which a respondent can book a slot.',
																},
																max_advanced_booking_days: {
																	type: 'number',
																	description:
																		'Maximum number of days in advance a respondent can book a slot.',
																},
																min_lead_time_hours: {
																	type: 'number',
																	description:
																		'Minimum number of hours between booking and the start of the slot.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												validations: {
													type: 'object',
													description: 'Validation rules for the field.',
													properties: {
														required: {
															type: 'boolean',
															description:
																'True if respondents must provide an answer. Available for `matrix`, `ranking`, `checkbox`, `date`, `dropdown`, `email`, `file_upload`, `legal`, `long_text`, `multiple_choice`, `number`, `opinion_scale`, `payment`, `picture_choice`, `rating`, `short_text`, `signature`, `website`, `phone_number`, and `yes_no`.',
														},
														max_length: {
															type: 'number',
															description:
																'Maximum number of characters allowed in the answer. Available for `long_text` and `short_text`.',
														},
														min_value: {
															type: 'number',
															description:
																'Minimum value allowed in the answer. Must be a positive integer. Available for `number`.',
														},
														max_value: {
															type: 'number',
															description:
																'Maximum value allowed in the answer. Must be a positive integer. Available for `number`.',
														},
														min_selection: {
															type: 'number',
															description:
																'Minimum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
														max_selection: {
															type: 'number',
															description:
																'Maximum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
														},
													},
													required: [],
												},
												attachment: {
													type: 'object',
													description:
														'Image or video displayed with the field.',
													properties: {
														type: {
															type: 'string',
															description: 'Type of attachment.',
															default: '',
															enum: ['', 'image', 'video'],
														},
														href: {
															type: 'string',
															description:
																"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
														},
														scale: {
															type: 'string',
															description:
																'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
															default: '',
															enum: ['', 0.4, 0.6, 0.8, 1],
														},
														properties: {
															type: 'object',
															description:
																'Optional attachment properties.',
															properties: {
																description: {
																	type: 'string',
																	description:
																		'Alt text that describes the image for people with visual impairments.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												layout: {
													type: 'object',
													description:
														'Position of the field attachment.',
													properties: {
														type: {
															type: 'string',
															description: 'Type of layout.',
															default: '',
															enum: [
																'',
																'split',
																'wallpaper',
																'float',
																'stack',
															],
														},
														placement: {
															type: 'string',
															description:
																'Position of media for split and float layouts.',
															default: '',
															enum: ['', 'left', 'right'],
														},
														attachment: {
															type: 'object',
															description:
																'Image or video used by this layout.',
															properties: {
																type: {
																	type: 'string',
																	description:
																		'Type of attachment.',
																	default: '',
																	enum: ['', 'image', 'video'],
																},
																href: {
																	type: 'string',
																	description:
																		"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
																},
																scale: {
																	type: 'string',
																	description:
																		'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
																	default: '',
																	enum: ['', 0.4, 0.6, 0.8, 1],
																},
																properties: {
																	type: 'object',
																	description:
																		'Optional attachment properties.',
																	properties: {
																		description: {
																			type: 'string',
																			description:
																				'Alt text that describes the image for people with visual impairments.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														viewport_overrides: {
															type: 'object',
															description:
																'Layout-specific overrides per viewport (small / large).',
															properties: {
																small: {
																	type: 'object',
																	description:
																		'Overrides for small viewports.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Layout type for the small viewport.',
																			default: '',
																			enum: [
																				'',
																				'split',
																				'wallpaper',
																				'float',
																				'stack',
																			],
																		},
																		placement: {
																			type: 'string',
																			description:
																				'Media position for split and float layouts on the small viewport.',
																			default: '',
																			enum: [
																				'',
																				'left',
																				'right',
																			],
																		},
																	},
																	required: [],
																},
																large: {
																	type: 'object',
																	description:
																		'Overrides for large viewports.',
																	properties: {
																		type: {
																			type: 'string',
																			description:
																				'Layout type for the large viewport.',
																			default: '',
																			enum: [
																				'',
																				'split',
																				'wallpaper',
																				'float',
																				'stack',
																			],
																		},
																		placement: {
																			type: 'string',
																			description:
																				'Media position for split and float layouts on the large viewport.',
																			default: '',
																			enum: [
																				'',
																				'left',
																				'right',
																			],
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
												media: {
													type: 'array',
													description:
														'Video question to display with the field.',
													items: {
														type: 'object',
														description:
															'A media item displayed with the field.',
														properties: {
															ref: {
																type: 'string',
																description:
																	'Readable name you can use to reference the media item.',
															},
															enabled: {
																type: 'boolean',
																description:
																	'True if the media item should be displayed. Default is true.',
															},
															href: {
																type: 'string',
																description:
																	'URL for the media item.',
															},
															type: {
																type: 'string',
																description: 'Type of media.',
																default: '',
																enum: ['', 'video'],
															},
															properties: {
																type: 'object',
																description:
																	'Optional media properties.',
																properties: {
																	fit: {
																		type: 'boolean',
																		description:
																			'True to fit the media to the available space.',
																	},
																	interaction_delay: {
																		type: 'number',
																		description:
																			'Delay in seconds before the media item is displayed.',
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
									allow_multiple_selection: {
										type: 'boolean',
										description:
											'True to allow respondents to select more than one answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
									randomize: {
										type: 'boolean',
										description:
											'True to present answer choices in a new random order for each respondent. Available for `ranking`, `multiple_choice`, `picture_choice`, and `dropdown`.',
									},
									allow_other_choice: {
										type: 'boolean',
										description:
											'True to include an Other option. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
									vertical_alignment: {
										type: 'boolean',
										description:
											'True to list answer choices vertically. Available for `ranking` and `multiple_choice`.',
									},
									supersized: {
										type: 'boolean',
										description:
											'True to use larger-sized images for answer choices. Available for `picture_choice`.',
									},
									show_labels: {
										type: 'boolean',
										description:
											'True to show text labels and images as answer choices. Available for `picture_choice`. Default is true.',
									},
									alphabetical_order: {
										type: 'boolean',
										description:
											'True to list dropdown choices alphabetically. Available for `dropdown`.',
									},
									hide_marks: {
										type: 'boolean',
										description:
											'True to hide quotation marks around a statement. Available for `statement`.',
									},
									button_text: {
										type: 'string',
										description:
											'Text to display on the button. Available for `group`, `payment`, and `statement`. Default is `Continue`.',
									},
									steps: {
										type: 'number',
										description:
											"Number of steps in the scale's range. Minimum is 5 and maximum is 11. Available for `opinion_scale` and `rating`.",
									},
									shape: {
										type: 'string',
										description:
											"Shape to display on the scale's steps. Available for `opinion_scale` and `rating`. Default is `star`.",
										default: '',
										enum: [
											'',
											'cat',
											'circle',
											'cloud',
											'crown',
											'dog',
											'droplet',
											'flag',
											'heart',
											'lightbulb',
											'pencil',
											'skull',
											'star',
											'thunderbolt',
											'tick',
											'trophy',
											'up',
											'user',
										],
									},
									labels: {
										type: 'object',
										description:
											"Labels that help respondents understand the scale's range. Available for `opinion_scale` and `rating`.",
										properties: {
											left: {
												type: 'string',
												description:
													'Text of the left-aligned label for the scale.',
											},
											center: {
												type: 'string',
												description:
													'Text of the center-aligned label for the scale.',
											},
											right: {
												type: 'string',
												description:
													'Text of the right-aligned label for the scale.',
											},
										},
										required: [],
									},
									start_at_one: {
										type: 'boolean',
										description:
											'True if range numbering should start at 1. Available for `opinion_scale`.',
									},
									structure: {
										type: 'string',
										description:
											'Date format for answers. Available for `date`. Default is `DDMMYYYY`.',
										default: '',
										enum: ['', 'MMDDYYYY', 'DDMMYYYY', 'YYYYMMDD'],
									},
									separator: {
										type: 'string',
										description:
											'Character between month, day, and year. Available for `date`. Default is `/`.',
										default: '',
										enum: ['', '/', '-', '.'],
									},
									currency: {
										type: 'string',
										description:
											'Currency of the payment. Available for `payment`. Default is `EUR`.',
										default: '',
										enum: [
											'',
											'AUD',
											'BRL',
											'CAD',
											'CHF',
											'DKK',
											'EUR',
											'GBP',
											'MXN',
											'NOK',
											'SEK',
											'USD',
										],
									},
									email_receipts: {
										type: 'boolean',
										description:
											"Enables collection of the customer's email so Stripe can send a payment receipt. Available for `payment`.",
									},
									additional_payment_methods: {
										type: 'array',
										description:
											'Enabled payment methods allowed for payment (for example Google Pay or Apple Pay). Available for `payment`.',
										items: {
											type: 'string',
											description: 'An enabled payment method name.',
										},
									},
									price: {
										type: 'object',
										description: 'Price of the item. Available for `payment`.',
										properties: {
											type: {
												type: 'string',
												description:
													'Specifies that the value is a variable.',
												default: '',
												enum: ['', 'variable'],
											},
											value: {
												type: 'string',
												description: 'Variable name to use for the price.',
												default: '',
												enum: ['', 'price'],
											},
										},
										required: [],
									},
									show_button: {
										type: 'boolean',
										description:
											'True to display a button. Available for `group` and `payment`.',
									},
									default_country_code: {
										type: 'string',
										description:
											'Default 2-letter ISO 3166-1 country code. Available for `phone_number`. Default is `us`.',
									},
									regexp: {
										type: 'string',
										description:
											'Regular expression pattern to validate the answer. Available for `long_text`.',
									},
									allowed_answer_types: {
										type: 'array',
										description:
											'List of allowed answer types for the field. Available for `multi_format`.',
										items: {
											type: 'string',
											description: 'An allowed answer type.',
										},
									},
									availability: {
										type: 'object',
										description:
											'Weekly availability for booking, with one entry per day plus a required `timezone`. Available for `google_calendar`.',
										properties: {
											monday: {
												type: 'array',
												description: 'Available time slots on Monday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											tuesday: {
												type: 'array',
												description: 'Available time slots on Tuesday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											wednesday: {
												type: 'array',
												description: 'Available time slots on Wednesday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											thursday: {
												type: 'array',
												description: 'Available time slots on Thursday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											friday: {
												type: 'array',
												description: 'Available time slots on Friday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											saturday: {
												type: 'array',
												description: 'Available time slots on Saturday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											sunday: {
												type: 'array',
												description: 'Available time slots on Sunday.',
												items: {
													type: 'object',
													description: 'A bookable time slot.',
													properties: {
														start: {
															type: 'string',
															description:
																'Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
														end: {
															type: 'string',
															description:
																'End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.',
														},
													},
													required: [],
												},
											},
											timezone: {
												type: 'string',
												description:
													'IANA time zone name (for example `Europe/Madrid`) used to interpret all slot times. Required when availability is provided.',
											},
										},
										required: [],
									},
									booking_limits: {
										type: 'object',
										description:
											'Optional caps on how many slots can be booked. Available for `google_calendar`.',
										properties: {
											max_daily_bookings: {
												type: 'number',
												description:
													'Maximum number of bookings allowed per day.',
											},
											buffer_duration: {
												type: 'number',
												description:
													'Buffer time, in minutes, to keep free between consecutive bookings.',
											},
										},
										required: [],
									},
									calendar_id: {
										type: 'string',
										description:
											'Identifier of the Google Calendar to book against. Available for `google_calendar`.',
									},
									event: {
										type: 'object',
										description:
											'Event details written to the booked calendar invite. Available for `google_calendar`.',
										properties: {
											description: {
												type: 'string',
												description:
													'Description of the calendar event created when a respondent books a slot.',
											},
											duration: {
												type: 'object',
												description: 'Duration of the calendar event.',
												properties: {
													time: {
														type: 'number',
														description:
															'Numeric length of the event, expressed in `unit`. Must be a positive integer.',
													},
													unit: {
														type: 'string',
														description: 'Unit of time for `time`.',
														default: '',
														enum: ['', 'hours', 'minutes'],
													},
												},
												required: [],
											},
										},
										required: [],
									},
									reminders: {
										type: 'object',
										description:
											'Optional reminder sent to respondents ahead of a booked slot. Available for `google_calendar`.',
										properties: {
											amount: {
												type: 'number',
												description:
													'Numeric amount of time before the slot at which to send the reminder, expressed in `unit`.',
											},
											unit: {
												type: 'string',
												description: 'Unit of time for `amount`.',
												default: '',
												enum: ['', 'minute', 'hour', 'day', 'week'],
											},
										},
										required: [],
									},
									scheduling_window: {
										type: 'object',
										description:
											'Constraints on when respondents can book a slot. Available for `google_calendar`.',
										properties: {
											start_at: {
												type: 'string',
												description:
													'Earliest date or datetime at which a respondent can book a slot.',
											},
											end_at: {
												type: 'string',
												description:
													'Latest date or datetime at which a respondent can book a slot.',
											},
											max_advanced_booking_days: {
												type: 'number',
												description:
													'Maximum number of days in advance a respondent can book a slot.',
											},
											min_lead_time_hours: {
												type: 'number',
												description:
													'Minimum number of hours between booking and the start of the slot.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							validations: {
								type: 'object',
								description: 'Validation rules for the field.',
								properties: {
									required: {
										type: 'boolean',
										description:
											'True if respondents must provide an answer. Available for `matrix`, `ranking`, `checkbox`, `date`, `dropdown`, `email`, `file_upload`, `legal`, `long_text`, `multiple_choice`, `number`, `opinion_scale`, `payment`, `picture_choice`, `rating`, `short_text`, `signature`, `website`, `phone_number`, and `yes_no`.',
									},
									max_length: {
										type: 'number',
										description:
											'Maximum number of characters allowed in the answer. Available for `long_text` and `short_text`.',
									},
									min_value: {
										type: 'number',
										description:
											'Minimum value allowed in the answer. Must be a positive integer. Available for `number`.',
									},
									max_value: {
										type: 'number',
										description:
											'Maximum value allowed in the answer. Must be a positive integer. Available for `number`.',
									},
									min_selection: {
										type: 'number',
										description:
											'Minimum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
									max_selection: {
										type: 'number',
										description:
											'Maximum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed with the field.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
									},
									scale: {
										type: 'string',
										description:
											'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
										default: '',
										enum: ['', 0.4, 0.6, 0.8, 1],
									},
									properties: {
										type: 'object',
										description: 'Optional attachment properties.',
										properties: {
											description: {
												type: 'string',
												description:
													'Alt text that describes the image for people with visual impairments.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							layout: {
								type: 'object',
								description: 'Position of the field attachment.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of layout.',
										default: '',
										enum: ['', 'split', 'wallpaper', 'float', 'stack'],
									},
									placement: {
										type: 'string',
										description:
											'Position of media for split and float layouts.',
										default: '',
										enum: ['', 'left', 'right'],
									},
									attachment: {
										type: 'object',
										description: 'Image or video used by this layout.',
										properties: {
											type: {
												type: 'string',
												description: 'Type of attachment.',
												default: '',
												enum: ['', 'image', 'video'],
											},
											href: {
												type: 'string',
												description:
													"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
											},
											scale: {
												type: 'string',
												description:
													'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
												default: '',
												enum: ['', 0.4, 0.6, 0.8, 1],
											},
											properties: {
												type: 'object',
												description: 'Optional attachment properties.',
												properties: {
													description: {
														type: 'string',
														description:
															'Alt text that describes the image for people with visual impairments.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									viewport_overrides: {
										type: 'object',
										description:
											'Layout-specific overrides per viewport (small / large).',
										properties: {
											small: {
												type: 'object',
												description: 'Overrides for small viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the small viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the small viewport.',
														default: '',
														enum: ['', 'left', 'right'],
													},
												},
												required: [],
											},
											large: {
												type: 'object',
												description: 'Overrides for large viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the large viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the large viewport.',
														default: '',
														enum: ['', 'left', 'right'],
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
							media: {
								type: 'array',
								description: 'Video question to display with the field.',
								items: {
									type: 'object',
									description: 'A media item displayed with the field.',
									properties: {
										ref: {
											type: 'string',
											description:
												'Readable name you can use to reference the media item.',
										},
										enabled: {
											type: 'boolean',
											description:
												'True if the media item should be displayed. Default is true.',
										},
										href: {
											type: 'string',
											description: 'URL for the media item.',
										},
										type: {
											type: 'string',
											description: 'Type of media.',
											default: '',
											enum: ['', 'video'],
										},
										properties: {
											type: 'object',
											description: 'Optional media properties.',
											properties: {
												fit: {
													type: 'boolean',
													description:
														'True to fit the media to the available space.',
												},
												interaction_delay: {
													type: 'number',
													description:
														'Delay in seconds before the media item is displayed.',
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
				hidden: {
					type: 'array',
					description: 'Hidden Fields to use in the form.',
					items: { type: 'string', description: 'Name of a Hidden Field.' },
				},
				variables: {
					type: 'object',
					description:
						'Running totals and enrichment variables used in the form. Open object of variable names to numeric or text values (commonly `score` and `price`).',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				welcome_screens: {
					type: 'array',
					description: "Settings and properties for the form's welcome screen.",
					items: {
						type: 'object',
						description: 'A welcome screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the welcome screen.',
							},
							properties: {
								type: 'object',
								description: 'Settings for the welcome screen.',
								properties: {
									description: {
										type: 'string',
										description: 'Description of the welcome screen.',
									},
									show_button: {
										type: 'boolean',
										description:
											'True to display a Start button on the welcome screen.',
									},
									button_text: {
										type: 'string',
										description: 'Text to display on the Start button.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the welcome screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
									},
									scale: {
										type: 'string',
										description:
											'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
										default: '',
										enum: ['', 0.4, 0.6, 0.8, 1],
									},
									properties: {
										type: 'object',
										description: 'Optional attachment properties.',
										properties: {
											description: {
												type: 'string',
												description:
													'Alt text that describes the image for people with visual impairments.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							layout: {
								type: 'object',
								description: 'Position of the welcome screen attachment.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of layout.',
										default: '',
										enum: ['', 'split', 'wallpaper', 'float', 'stack'],
									},
									placement: {
										type: 'string',
										description:
											'Position of media for split and float layouts.',
										default: '',
										enum: ['', 'left', 'right'],
									},
									attachment: {
										type: 'object',
										description: 'Image or video used by this layout.',
										properties: {
											type: {
												type: 'string',
												description: 'Type of attachment.',
												default: '',
												enum: ['', 'image', 'video'],
											},
											href: {
												type: 'string',
												description:
													"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
											},
											scale: {
												type: 'string',
												description:
													'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
												default: '',
												enum: ['', 0.4, 0.6, 0.8, 1],
											},
											properties: {
												type: 'object',
												description: 'Optional attachment properties.',
												properties: {
													description: {
														type: 'string',
														description:
															'Alt text that describes the image for people with visual impairments.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									viewport_overrides: {
										type: 'object',
										description:
											'Layout-specific overrides per viewport (small / large).',
										properties: {
											small: {
												type: 'object',
												description: 'Overrides for small viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the small viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the small viewport.',
														default: '',
														enum: ['', 'left', 'right'],
													},
												},
												required: [],
											},
											large: {
												type: 'object',
												description: 'Overrides for large viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the large viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the large viewport.',
														default: '',
														enum: ['', 'left', 'right'],
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
						},
						required: [],
					},
				},
				thankyou_screens: {
					type: 'array',
					description: "Settings and properties for the form's thank you screen.",
					items: {
						type: 'object',
						description: 'A thank you screen.',
						properties: {
							ref: {
								type: 'string',
								description:
									'Readable name you can use to reference the thank you screen.',
							},
							type: {
								type: 'string',
								description: 'The type of thank you screen.',
								default: '',
								enum: ['', 'thankyou_screen', 'url_redirect'],
							},
							properties: {
								type: 'object',
								description: 'Settings for the thank you screen.',
								properties: {
									show_button: {
										type: 'boolean',
										description:
											'True to display a button on the thank you screen.',
									},
									button_text: {
										type: 'string',
										description: 'Text to display on the button.',
									},
									button_mode: {
										type: 'string',
										description:
											'What happens when respondents click the button. Premium feature.',
										default: '',
										enum: ['', 'reload', 'default_redirect', 'redirect'],
									},
									redirect_url: {
										type: 'string',
										description:
											'URL where the typeform should redirect after submission, if you specified `redirect` for `button_mode` or are using the `url_redirect` type.',
									},
									share_icons: {
										type: 'boolean',
										description:
											'True to display social media sharing icons on the thank you screen.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description: 'Image or video displayed on the thank you screen.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of attachment.',
										default: '',
										enum: ['', 'image', 'video'],
									},
									href: {
										type: 'string',
										description:
											"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
									},
									scale: {
										type: 'string',
										description:
											'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
										default: '',
										enum: ['', 0.4, 0.6, 0.8, 1],
									},
									properties: {
										type: 'object',
										description: 'Optional attachment properties.',
										properties: {
											description: {
												type: 'string',
												description:
													'Alt text that describes the image for people with visual impairments.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							layout: {
								type: 'object',
								description: 'Position of the thank you screen attachment.',
								properties: {
									type: {
										type: 'string',
										description: 'Type of layout.',
										default: '',
										enum: ['', 'split', 'wallpaper', 'float', 'stack'],
									},
									placement: {
										type: 'string',
										description:
											'Position of media for split and float layouts.',
										default: '',
										enum: ['', 'left', 'right'],
									},
									attachment: {
										type: 'object',
										description: 'Image or video used by this layout.',
										properties: {
											type: {
												type: 'string',
												description: 'Type of attachment.',
												default: '',
												enum: ['', 'image', 'video'],
											},
											href: {
												type: 'string',
												description:
													"URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.",
											},
											scale: {
												type: 'string',
												description:
													'Optional scale for videos. Available only for `video` type. Default is `0.6`.',
												default: '',
												enum: ['', 0.4, 0.6, 0.8, 1],
											},
											properties: {
												type: 'object',
												description: 'Optional attachment properties.',
												properties: {
													description: {
														type: 'string',
														description:
															'Alt text that describes the image for people with visual impairments.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									viewport_overrides: {
										type: 'object',
										description:
											'Layout-specific overrides per viewport (small / large).',
										properties: {
											small: {
												type: 'object',
												description: 'Overrides for small viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the small viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the small viewport.',
														default: '',
														enum: ['', 'left', 'right'],
													},
												},
												required: [],
											},
											large: {
												type: 'object',
												description: 'Overrides for large viewports.',
												properties: {
													type: {
														type: 'string',
														description:
															'Layout type for the large viewport.',
														default: '',
														enum: [
															'',
															'split',
															'wallpaper',
															'float',
															'stack',
														],
													},
													placement: {
														type: 'string',
														description:
															'Media position for split and float layouts on the large viewport.',
														default: '',
														enum: ['', 'left', 'right'],
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
						},
						required: [],
					},
				},
				consent_screen: {
					type: 'object',
					description:
						'Optional consent screen configuration for data collection compliance.',
					properties: {
						email: {
							type: 'string',
							description: 'Email address where consent information should be sent.',
						},
						message: {
							type: 'string',
							description: 'Message to display or send regarding the consent.',
						},
					},
					required: [],
				},
				logic: {
					type: 'array',
					description:
						'Logic Jump objects to use in the form. When referring to fields, those fields must already exist on the form.',
					items: {
						type: 'object',
						description: 'A Logic Jump definition.',
						properties: {
							type: {
								type: 'string',
								description:
									'Specifies whether the Logic Jump is based on a question field or Hidden Field.',
								default: '',
								enum: ['', 'field', 'hidden'],
							},
							ref: {
								type: 'string',
								description: 'Reference to the field that triggers the Logic Jump.',
							},
							actions: {
								type: 'array',
								description:
									"Objects that define the Logic Jump's behavior. Required when a logic item is provided.",
								items: {
									type: 'object',
									description: 'A Logic Jump action.',
									properties: {
										action: {
											type: 'string',
											description:
												'Behavior the Logic Jump will take. Required when an action is provided.',
											default: '',
											enum: [
												'',
												'jump',
												'add',
												'subtract',
												'multiply',
												'divide',
												'set',
											],
										},
										details: {
											type: 'object',
											description:
												'Properties that further specify how the Logic Jump will behave. Required when an action is provided.',
											properties: {
												to: {
													type: 'object',
													description:
														'Where the Logic Jump leads — to another field, a thank you screen, or an outcome.',
													properties: {
														type: {
															type: 'string',
															description:
																'Logic Jump `to` option you are using.',
															default: '',
															enum: [
																'',
																'field',
																'thankyou',
																'outcome',
															],
														},
														value: {
															type: 'string',
															description:
																'The `ref` value for the field, Hidden Field, or thank you screen the Logic Jump leads to.',
														},
													},
													required: [],
												},
												target: {
													type: 'object',
													description:
														'Keeps a running total for variables.',
													properties: {
														type: {
															type: 'string',
															description:
																'Specifies that the value is a variable.',
															default: '',
															enum: ['', 'variable'],
														},
														value: {
															type: 'string',
															description:
																'Variable name to use in the calculation.',
														},
													},
													required: [],
												},
												value: {
													type: 'object',
													description:
														'Value to use in the calculation for the variables.',
													properties: {
														type: {
															type: 'string',
															description:
																'Which type of value is used: a numeric constant, a variable name, or an `evaluation` to determine an outcome.',
															default: '',
															enum: [
																'',
																'constant',
																'variable',
																'evaluation',
															],
														},
														value: {
															type: 'string',
															description:
																'Value used in the variable calculation. May be a number, variable name, or evaluation depending on `type`.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										condition: {
											type: 'object',
											description:
												'Conditions for executing the Logic Jump (the IF statement). Required when an action is provided.',
											properties: {
												op: {
													type: 'string',
													description: 'Operator for the condition.',
													default: '',
													enum: [
														'',
														'begins_with',
														'ends_with',
														'contains',
														'not_contains',
														'lower_than',
														'lower_equal_than',
														'greater_than',
														'greater_equal_than',
														'is',
														'is_not',
														'equal',
														'not_equal',
														'always',
														'on',
														'not_on',
														'earlier_than',
														'earlier_than_or_on',
														'later_than',
														'later_than_or_on',
													],
												},
												vars: {
													type: 'array',
													description:
														'Objects that define the field type and value to evaluate with the operator. Required when a condition is provided.',
													items: {
														type: 'object',
														description:
															'A value the condition evaluates.',
														properties: {
															type: {
																type: 'string',
																description:
																	'Type of value the condition object refers to.',
																default: '',
																enum: [
																	'',
																	'field',
																	'hidden',
																	'variable',
																	'constant',
																	'choice',
																],
															},
															value: {
																type: 'string',
																description:
																	'Value to check for in the `type` field. May be a field ref, hidden field name, variable name, choice, number, or boolean depending on `type`.',
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
						},
						required: [],
					},
				},
				theme: {
					type: 'object',
					description:
						'Theme to use for the form. If omitted on update, Typeform applies a new copy of the default theme.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of the theme, for example `https://api.typeform.com/themes/Fs24as`.',
						},
					},
					required: [],
				},
				workspace: {
					type: 'object',
					description:
						'Workspace that contains the form. If omitted, Typeform saves the form in the default workspace.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL of the workspace, for example `https://api.typeform.com/workspaces/Aw33bz`.',
						},
					},
					required: [],
				},
				settings: {
					type: 'object',
					description:
						'Form settings and metadata, including language, public availability, progress bar, and search-engine indexing.',
					properties: {
						language: {
							type: 'string',
							description: 'Language to use for the form.',
							default: '',
							enum: [
								'',
								'en',
								'es',
								'ca',
								'fr',
								'de',
								'ru',
								'it',
								'da',
								'pt',
								'ch',
								'zh',
								'nl',
								'no',
								'uk',
								'ja',
								'ko',
								'hr',
								'fi',
								'sv',
								'pl',
								'el',
								'hu',
								'tr',
								'cs',
								'et',
								'di',
							],
						},
						is_public: {
							type: 'boolean',
							description:
								'True if the form is public. Otherwise false (the form is private). Default is true.',
						},
						autosave_progress: {
							type: 'boolean',
							description:
								'True to enable saving partial form responses on the client side. Default is true.',
						},
						progress_bar: {
							type: 'string',
							description:
								'Basis for the progress bar. `proportion` shows the number of questions answered; `percentage` shows the percentage answered. Default is `proportion`.',
							default: '',
							enum: ['', 'percentage', 'proportion'],
						},
						show_progress_bar: {
							type: 'boolean',
							description: 'True to display the progress bar. Default is true.',
						},
						show_typeform_branding: {
							type: 'boolean',
							description:
								'True to display Typeform branding. Hiding branding is available for Premium accounts. Default is true.',
						},
						show_time_to_complete: {
							type: 'boolean',
							description:
								'True to display estimated time to complete on welcome screens. Mutually exclusive with `show_number_of_submissions`. Default is true.',
						},
						show_number_of_submissions: {
							type: 'boolean',
							description:
								'True to display the number of submissions on welcome screens. Mutually exclusive with `show_time_to_complete`.',
						},
						show_cookie_consent: {
							type: 'boolean',
							description: 'True to request cookie consent through a banner.',
						},
						show_question_number: {
							type: 'boolean',
							description:
								'True to display the question number on each block. Default is true.',
						},
						show_key_hint_on_choices: {
							type: 'boolean',
							description:
								'True to display key hint letters on Multiple Choice, Picture Choice, Legal, and Yes/No blocks. Default is true.',
						},
						hide_navigation: {
							type: 'boolean',
							description:
								'True to hide the navigation arrows in the bottom-right corner of the form.',
						},
						meta: {
							type: 'object',
							description: 'Search-engine metadata for the typeform.',
							properties: {
								allow_indexing: {
									type: 'boolean',
									description:
										'True to allow search engines to index your typeform. Default is true.',
								},
								description: {
									type: 'string',
									description:
										'Description for search engines to display for your typeform.',
								},
								image: {
									type: 'object',
									description:
										'Image for search engines to display for your typeform.',
									properties: {
										href: {
											type: 'string',
											description: 'URL of the image for search engines.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						redirect_after_submit_url: {
							type: 'string',
							description: 'URL where the typeform should redirect upon submission.',
						},
						google_analytics: {
							type: 'string',
							description: 'Google Analytics tracking ID to use for the form.',
						},
						facebook_pixel: {
							type: 'string',
							description: 'Facebook Pixel tracking ID to use for the form.',
						},
						google_tag_manager: {
							type: 'string',
							description: 'Google Tag Manager ID to use for the form.',
						},
						mode: {
							type: 'string',
							description:
								'The mode of the form. If not specified, the form is in Universal mode.',
							default: '',
							enum: ['', 'knowledge_quiz'],
						},
						feedback_mode: {
							type: 'string',
							description:
								'How feedback is shown to respondents. `knowledge_quiz_inline` shows correct answers after each question in Knowledge Quiz mode.',
							default: '',
							enum: ['', 'knowledge_quiz_inline'],
						},
						milestones: {
							type: 'array',
							description:
								'Block references indicating where each partial submit point is located.',
							items: {
								type: 'object',
								description: 'A partial submit point.',
								properties: {
									field_ref: {
										type: 'string',
										description:
											'The partial submit point is positioned after the question with this `field_ref`.',
									},
									status: {
										type: 'string',
										description: 'Informative. Cannot be set through the API.',
										default: '',
										enum: ['', 'active', 'inactive'],
									},
									reason: {
										type: 'string',
										description: 'Informative. Cannot be set through the API.',
										default: '',
										enum: ['', 'wrong_position', 'incompatible_feature'],
									},
								},
								required: [],
							},
						},
						enrichment_in_renderer: {
							type: 'object',
							description:
								'Controls data enrichment in the renderer. See [Data enrichment with Typeform](https://www.typeform.com/developers/create/).',
							properties: {
								toggle: {
									type: 'boolean',
									description:
										'True to enable enrichment in the renderer, false to disable it.',
								},
								active: {
									type: 'boolean',
									description:
										'Informative. Cannot be set through the API. If false, enrichment in the renderer is disabled.',
								},
							},
							required: [],
						},
						email_consent_notifications_config: {
							type: 'object',
							description:
								'Configuration for signed-document email notifications (signature block).',
							properties: {
								send_email_copy: {
									type: 'boolean',
									description:
										"Whether a copy of the signed document is BCC'd to `recipient_emails`. When `recipient_emails` is empty or absent, the copy is sent to the account owner. Setting this to false always resets `recipient_emails`. Default is true. Required when this object is provided.",
								},
								recipient_emails: {
									type: 'array',
									description:
										'Email addresses that receive a BCC copy of the signed document. Only meaningful when `send_email_copy` is true. Maximum 10 addresses; duplicates are not allowed.',
									items: {
										type: 'string',
										description:
											'An email address that receives a BCC copy of the signed document.',
									},
								},
							},
							required: [],
						},
						captcha: {
							type: 'boolean',
							description:
								'True to enable captcha on the typeform. See [Secure your forms with Google reCAPTCHA protection](https://www.typeform.com/help/).',
						},
						duplicate_prevention: {
							type: 'object',
							description:
								'Enable and set up duplicate response prevention. See [Prevent duplicate responses](https://www.typeform.com/help/).',
							properties: {
								type: {
									type: 'string',
									description:
										'`cookie`: duplicates may be submitted if cookies are cleared or the device changes. `cookie_ip`: prevent duplicates using cookies and IP. `url_param`: identify duplicates by a hidden-field URL parameter (Growth Custom plan).',
									default: '',
									enum: ['', 'cookie', 'cookie_ip', 'url_param'],
								},
								url_param: {
									type: 'string',
									description:
										"Name of the hidden field whose value identifies the respondent. Required when `type` is `url_param`, and must match a name declared in the form's `hidden` fields.",
								},
								responses_limit: {
									type: 'number',
									description:
										'Number of responses per respondent in the given period.',
								},
								period: {
									type: 'string',
									description: 'Time period for `responses_limit`.',
									default: '',
									enum: ['', 'day', 'week', 'month', 'year'],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				cui_settings: {
					type: 'object',
					description: 'Conversation UI settings for the form.',
					properties: {
						avatar: {
							type: 'string',
							description:
								"URL for the image to use as conversation avatar. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`.",
						},
						is_typing_emulation_disabled: {
							type: 'boolean',
							description:
								'True to disable typing emulation (the delay between messages). Typing emulation is enabled by default.',
						},
						typing_emulation_speed: {
							type: 'string',
							description:
								'The pace at which messages appear in a conversation while typing emulation is enabled.',
							default: '',
							enum: ['', 'slow', 'medium', 'fast'],
						},
					},
					required: [],
				},
				self: {
					type: 'object',
					description: 'URL for the typeform resource.',
					properties: { href: { type: 'string', description: 'API URL for this form.' } },
					required: [],
				},
				_links: {
					type: 'object',
					description: 'Related URLs for the form.',
					properties: {
						display: { type: 'string', description: 'URL for the actual form.' },
						responses: {
							type: 'string',
							description: 'URL for the responses public API.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
];
