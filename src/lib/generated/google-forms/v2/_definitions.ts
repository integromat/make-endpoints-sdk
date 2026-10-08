// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-forms',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google Forms API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://forms.googleapis.com`. Provide the remaining path in the URL parameter\n(e.g. `/v1/forms/{formId}`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Google Forms API reference](https://developers.google.com/workspace/forms/api/reference/rest) for available\nendpoints, required parameters, and response schemas.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/drive'] } },
		annotations: { arbitraryCallHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter a path relative to `https://forms.googleapis.com`. For example, `/v1/forms/{formId}`.',
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
		appName: 'google-forms',
		appVersion: 2,
		endpointName: 'batchUpdateForm',
		label: 'Batch update a form',
		description: 'Changes a form with a batch of updates.',
		context:
			'---\nname: batchUpdateForm\ndescription: Changes a form with a batch of updates.\n---\n\nChanges the form with a batch of updates. Each request in the `requests` array performs\none atomic operation: create, update, move, or delete an item, update form info, or update settings.\n\nThe `createItem.item` and `updateItem.item` fields accept the full\n[Item](https://developers.google.com/forms/api/reference/rest/v1/forms#Item) object as JSON.\nUse `getForm` first to retrieve current item structure when updating.\n\nSet `includeFormInResponse` to `true` to receive the updated form in the response.\n\nUse `writeControl` to handle concurrent edits:\n- `requiredRevisionId`: fails if the form has been modified since this revision.\n- `targetRevisionId`: merges changes with any modifications made after this revision.\n\nRefer to the [Google Forms API reference](https://developers.google.com/forms/api/reference/rest/v1/forms/batchUpdate)\nfor the full Request schema and field mask syntax.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/drive'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				formId: { type: 'string', description: 'The ID of the form to update.' },
				includeFormInResponse: {
					type: 'boolean',
					description:
						'Whether to return an updated version of the form in the response.',
				},
				requests: {
					type: 'array',
					description:
						'The update requests of this batch. Each request performs one operation on the form.',
					items: {
						type: 'object',
						description:
							'A single update request. Only one field should be set per request.',
						properties: {
							updateFormInfo: {
								type: 'object',
								description: "Update the form's info (title, description).",
								properties: {
									info: {
										type: 'object',
										description: 'The info to update.',
										properties: {
											description: {
												type: 'string',
												description: 'The description of the form.',
											},
										},
										required: [],
									},
									updateMask: {
										type: 'string',
										description:
											'Only values named in this mask are changed. The root `info` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. Example: `title,description`.',
									},
								},
								required: ['updateMask'],
							},
							updateSettings: {
								type: 'object',
								description: "Update the form's settings.",
								properties: {
									settings: {
										type: 'object',
										description: 'The settings to update with.',
										properties: {
											quizSettings: {
												type: 'object',
												description:
													'Settings related to quiz forms and grading.',
												properties: {
													isQuiz: {
														type: 'boolean',
														description: 'Whether this form is a quiz.',
													},
												},
												required: [],
											},
											emailCollectionType: {
												type: 'string',
												description:
													'The setting that determines whether the form collects email addresses from respondents.',
												default: '',
												enum: [
													'',
													'DO_NOT_COLLECT',
													'VERIFIED',
													'RESPONDER_INPUT',
												],
											},
										},
										required: [],
									},
									updateMask: {
										type: 'string',
										description:
											'Only values named in this mask are changed. The root `settings` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.',
									},
								},
								required: ['updateMask'],
							},
							createItem: {
								type: 'object',
								description: 'Create a new item in the form.',
								properties: {
									item: {
										type: 'object',
										description:
											'The item to create. Must include one of: `questionItem`, `questionGroupItem`, `pageBreakItem`, `textItem`, `imageItem`, `videoItem`.',
										properties: {
											description: {
												type: 'string',
												description: 'The description of the item.',
											},
											questionItem: {
												type: 'object',
												description:
													'A form item containing a single question.',
												properties: {
													question: {
														type: 'object',
														description: 'The displayed question.',
														properties: {
															required: {
																type: 'boolean',
																description:
																	'Whether the question must be answered in order for a respondent to submit their response.',
															},
															grading: {
																type: 'object',
																description:
																	'Grading setup for the question.',
																properties: {
																	pointValue: {
																		type: 'number',
																		description:
																			'The maximum number of points a respondent can automatically get for a correct answer.',
																	},
																	correctAnswers: {
																		type: 'object',
																		description:
																			'The answer key for the question.',
																		properties: {
																			answers: {
																				type: 'array',
																				description:
																					'A list of correct answers.',
																				items: {
																					type: 'object',
																					description:
																						'A single correct answer.',
																					properties: {
																						value: {
																							type: 'string',
																							description:
																								'The correct answer value.',
																						},
																					},
																					required: [],
																				},
																			},
																		},
																		required: [],
																	},
																	generalFeedback: {
																		type: 'object',
																		description:
																			'The feedback displayed for all answers.',
																		properties: {
																			text: {
																				type: 'string',
																				description:
																					'The feedback text.',
																			},
																			material: {
																				type: 'array',
																				description:
																					'A list of extra material attached to the feedback.',
																				items: {
																					type: 'object',
																					description:
																						'A single piece of extra material.',
																					properties: {
																						link: {
																							type: 'object',
																							description:
																								'A link extra material.',
																							properties:
																								{
																									uri: {
																										type: 'string',
																										description:
																											'The URI.',
																									},
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the link.',
																										},
																								},
																							required:
																								[],
																						},
																						video: {
																							type: 'object',
																							description:
																								'A video extra material.',
																							properties:
																								{
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the video.',
																										},
																									youtubeUri:
																										{
																											type: 'string',
																											description:
																												'The YouTube URI.',
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																		},
																		required: [],
																	},
																	whenRight: {
																		type: 'object',
																		description:
																			'The feedback displayed for correct responses.',
																		properties: {
																			text: {
																				type: 'string',
																				description:
																					'The feedback text.',
																			},
																			material: {
																				type: 'array',
																				description:
																					'A list of extra material attached to the feedback.',
																				items: {
																					type: 'object',
																					description:
																						'A single piece of extra material.',
																					properties: {
																						link: {
																							type: 'object',
																							description:
																								'A link extra material.',
																							properties:
																								{
																									uri: {
																										type: 'string',
																										description:
																											'The URI.',
																									},
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the link.',
																										},
																								},
																							required:
																								[],
																						},
																						video: {
																							type: 'object',
																							description:
																								'A video extra material.',
																							properties:
																								{
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the video.',
																										},
																									youtubeUri:
																										{
																											type: 'string',
																											description:
																												'The YouTube URI.',
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																		},
																		required: [],
																	},
																	whenWrong: {
																		type: 'object',
																		description:
																			'The feedback displayed for incorrect responses.',
																		properties: {
																			text: {
																				type: 'string',
																				description:
																					'The feedback text.',
																			},
																			material: {
																				type: 'array',
																				description:
																					'A list of extra material attached to the feedback.',
																				items: {
																					type: 'object',
																					description:
																						'A single piece of extra material.',
																					properties: {
																						link: {
																							type: 'object',
																							description:
																								'A link extra material.',
																							properties:
																								{
																									uri: {
																										type: 'string',
																										description:
																											'The URI.',
																									},
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the link.',
																										},
																								},
																							required:
																								[],
																						},
																						video: {
																							type: 'object',
																							description:
																								'A video extra material.',
																							properties:
																								{
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the video.',
																										},
																									youtubeUri:
																										{
																											type: 'string',
																											description:
																												'The YouTube URI.',
																										},
																								},
																							required:
																								[],
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
															choiceQuestion: {
																type: 'object',
																description:
																	'A radio/checkbox/dropdown question.',
																properties: {
																	type: {
																		type: 'string',
																		description:
																			'The type of choice question.',
																		enum: [
																			'RADIO',
																			'CHECKBOX',
																			'DROP_DOWN',
																		],
																	},
																	options: {
																		type: 'array',
																		description:
																			'List of options that a respondent must choose from.',
																		items: {
																			type: 'object',
																			description:
																				'An option for a choice question.',
																			properties: {
																				value: {
																					type: 'string',
																					description:
																						'The choice as presented to the user.',
																				},
																				isOther: {
																					type: 'boolean',
																					description:
																						'Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types.',
																				},
																				goToAction: {
																					type: 'string',
																					description:
																						'Section navigation type.',
																					default: '',
																					enum: [
																						'',
																						'NEXT_SECTION',
																						'RESTART_FORM',
																						'SUBMIT_FORM',
																					],
																				},
																				goToSectionId: {
																					type: 'string',
																					description:
																						'Item ID of section header to go to.',
																				},
																			},
																			required: ['value'],
																		},
																	},
																	shuffle: {
																		type: 'boolean',
																		description:
																			'Whether the options should be displayed in random order.',
																	},
																},
																required: ['type', 'options'],
															},
															textQuestion: {
																type: 'object',
																description:
																	'A free text response question.',
																properties: {
																	paragraph: {
																		type: 'boolean',
																		description:
																			'Whether the question is a paragraph question. If not, it is a short text question.',
																	},
																},
																required: [],
															},
															scaleQuestion: {
																type: 'object',
																description:
																	'A scale question where the user picks a number from a range.',
																properties: {
																	low: {
																		type: 'number',
																		description:
																			'The lowest possible value for the scale.',
																	},
																	high: {
																		type: 'number',
																		description:
																			'The highest possible value for the scale.',
																	},
																	lowLabel: {
																		type: 'string',
																		description:
																			'The label to display describing the lowest point on the scale.',
																	},
																	highLabel: {
																		type: 'string',
																		description:
																			'The label to display describing the highest point on the scale.',
																	},
																},
																required: [],
															},
															dateQuestion: {
																type: 'object',
																description:
																	'A date question. Date questions default to just month + day.',
																properties: {
																	includeTime: {
																		type: 'boolean',
																		description:
																			'Whether to include the time as part of the question.',
																	},
																	includeYear: {
																		type: 'boolean',
																		description:
																			'Whether to include the year as part of the question.',
																	},
																},
																required: [],
															},
															timeQuestion: {
																type: 'object',
																description: 'A time question.',
																properties: {
																	duration: {
																		type: 'boolean',
																		description:
																			'`true` if the question is about an elapsed time. Otherwise it is about a time of day.',
																	},
																},
																required: [],
															},
															fileUploadQuestion: {
																type: 'object',
																description:
																	'A file upload question.',
																properties: {
																	folderId: {
																		type: 'string',
																		description:
																			'The ID of the Drive folder where uploaded files are stored.',
																	},
																	types: {
																		type: 'array',
																		description:
																			'File types accepted by this question.',
																		items: {
																			type: 'string',
																			description:
																				'A file type.',
																			default: '',
																			enum: [
																				'',
																				'ANY',
																				'DOCUMENT',
																				'PRESENTATION',
																				'SPREADSHEET',
																				'DRAWING',
																				'PDF',
																				'IMAGE',
																				'VIDEO',
																				'AUDIO',
																			],
																		},
																	},
																	maxFiles: {
																		type: 'number',
																		description:
																			'Maximum number of files that can be uploaded for this question in a single response.',
																	},
																	maxFileSize: {
																		type: 'string',
																		description:
																			'Maximum number of bytes allowed for any single file uploaded to this question.',
																	},
																},
																required: [],
															},
															ratingQuestion: {
																type: 'object',
																description:
																	'A rating question with icons.',
																properties: {
																	ratingScaleLevel: {
																		type: 'number',
																		description:
																			'The rating scale level of the rating question.',
																	},
																	iconType: {
																		type: 'string',
																		description:
																			'The icon type to use for the rating.',
																		default: '',
																		enum: [
																			'',
																			'STAR',
																			'HEART',
																			'THUMB_UP',
																		],
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													image: {
														type: 'object',
														description:
															'The image displayed within the question.',
														properties: {
															sourceUri: {
																type: 'string',
																description:
																	'Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched.',
															},
															altText: {
																type: 'string',
																description:
																	'A description of the image that is shown on hover and read by screenreaders.',
															},
															properties: {
																type: 'object',
																description:
																	'Properties of the image.',
																properties: {
																	alignment: {
																		type: 'string',
																		description:
																			'Position of the media.',
																		default: '',
																		enum: [
																			'',
																			'LEFT',
																			'RIGHT',
																			'CENTER',
																		],
																	},
																	width: {
																		type: 'number',
																		description:
																			'The width of the media in pixels (0–740).',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
												},
												required: ['question'],
											},
											questionGroupItem: {
												type: 'object',
												description:
													'Poses one or more questions to the user with a single major prompt.',
												properties: {
													questions: {
														type: 'array',
														description:
															'A list of questions that belong in this question group.',
														items: {
															type: 'object',
															description: 'A question in the group.',
															properties: {
																required: {
																	type: 'boolean',
																	description:
																		'Whether the question must be answered.',
																},
																rowQuestion: {
																	type: 'object',
																	description:
																		'A row of a QuestionGroupItem.',
																	properties: {},
																	required: ['title'],
																	additionalProperties: true,
																},
															},
															required: [],
														},
													},
													image: {
														type: 'object',
														description:
															'The image displayed within the question group above the specific questions.',
														properties: {
															sourceUri: {
																type: 'string',
																description:
																	'Input only. The source URI is the URI used to insert the image.',
															},
															altText: {
																type: 'string',
																description:
																	'A description of the image.',
															},
															properties: {
																type: 'object',
																description:
																	'Properties of the image.',
																properties: {
																	alignment: {
																		type: 'string',
																		description:
																			'Position of the media.',
																		default: '',
																		enum: [
																			'',
																			'LEFT',
																			'RIGHT',
																			'CENTER',
																		],
																	},
																	width: {
																		type: 'number',
																		description:
																			'The width of the media in pixels (0–740).',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													grid: {
														type: 'object',
														description:
															'A grid with rows of multiple choice questions that share the same options.',
														properties: {
															columns: {
																type: 'object',
																description:
																	'The choices shared by each question in the grid.',
																properties: {
																	type: {
																		type: 'string',
																		description:
																			'The type of choice question.',
																		enum: ['RADIO', 'CHECKBOX'],
																	},
																	options: {
																		type: 'array',
																		description:
																			'List of options.',
																		items: {
																			type: 'object',
																			description:
																				'An option for a choice question.',
																			properties: {
																				value: {
																					type: 'string',
																					description:
																						'The choice as presented to the user.',
																				},
																			},
																			required: ['value'],
																		},
																	},
																},
																required: ['type', 'options'],
															},
															shuffleQuestions: {
																type: 'boolean',
																description:
																	'If `true`, the questions are randomly ordered.',
															},
														},
														required: ['columns'],
													},
												},
												required: ['questions'],
											},
											pageBreakItem: {
												type: 'object',
												description:
													"Starts a new page with a title. The item's `title` and `description` fields apply to the new page.",
												properties: {},
												required: [],
												additionalProperties: true,
											},
											textItem: {
												type: 'object',
												description:
													'Displays a title and description on the page.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
											imageItem: {
												type: 'object',
												description: 'Displays an image on the page.',
												properties: {
													image: {
														type: 'object',
														description:
															'The image displayed in the item.',
														properties: {
															sourceUri: {
																type: 'string',
																description:
																	'Input only. The source URI is the URI used to insert the image.',
															},
															altText: {
																type: 'string',
																description:
																	'A description of the image.',
															},
															properties: {
																type: 'object',
																description:
																	'Properties of the image.',
																properties: {
																	alignment: {
																		type: 'string',
																		description:
																			'Position of the media.',
																		default: '',
																		enum: [
																			'',
																			'LEFT',
																			'RIGHT',
																			'CENTER',
																		],
																	},
																	width: {
																		type: 'number',
																		description:
																			'The width of the media in pixels (0–740).',
																	},
																},
																required: [],
															},
														},
														required: ['sourceUri'],
													},
												},
												required: ['image'],
											},
											videoItem: {
												type: 'object',
												description: 'Displays a video on the page.',
												properties: {
													video: {
														type: 'object',
														description:
															'The video displayed in the item.',
														properties: {
															youtubeUri: {
																type: 'string',
																description: 'A YouTube URI.',
															},
															properties: {
																type: 'object',
																description:
																	'Properties of the video.',
																properties: {
																	alignment: {
																		type: 'string',
																		description:
																			'Position of the media.',
																		default: '',
																		enum: [
																			'',
																			'LEFT',
																			'RIGHT',
																			'CENTER',
																		],
																	},
																	width: {
																		type: 'number',
																		description:
																			'The width of the media in pixels (0–740).',
																	},
																},
																required: [],
															},
														},
														required: ['youtubeUri'],
													},
													caption: {
														type: 'string',
														description:
															'The text displayed below the video.',
													},
												},
												required: ['video'],
											},
										},
										required: [],
									},
									location: {
										type: 'object',
										description: 'Where to place the new item.',
										properties: {
											index: {
												type: 'number',
												description:
													'The index of the item in the form. Must be in the range [0..N), where N is the number of items in the form.',
											},
										},
										required: ['index'],
									},
								},
								required: ['item', 'location'],
							},
							moveItem: {
								type: 'object',
								description: 'Move an item to a specified location.',
								properties: {
									originalLocation: {
										type: 'object',
										description: 'The current location of the item to move.',
										properties: {
											index: {
												type: 'number',
												description: 'The index of the item in the form.',
											},
										},
										required: ['index'],
									},
									newLocation: {
										type: 'object',
										description: 'The new location for the item.',
										properties: {
											index: {
												type: 'number',
												description: 'The new index for the item.',
											},
										},
										required: ['index'],
									},
								},
								required: ['originalLocation', 'newLocation'],
							},
							deleteItem: {
								type: 'object',
								description: 'Delete an item from the form.',
								properties: {
									location: {
										type: 'object',
										description: 'The location of the item to delete.',
										properties: {
											index: {
												type: 'number',
												description: 'The index of the item to delete.',
											},
										},
										required: ['index'],
									},
								},
								required: ['location'],
							},
							updateItem: {
								type: 'object',
								description: 'Update an existing item in the form.',
								properties: {
									item: {
										type: 'object',
										description:
											'New values for the item. Item and question IDs are used if provided (and are in the field mask). If an ID is blank (and in the field mask), a new ID is generated.',
										properties: {
											itemId: {
												type: 'string',
												description:
													'The item ID. Can be used to identify the item when updating.',
											},
											description: {
												type: 'string',
												description: 'The description of the item.',
											},
											questionItem: {
												type: 'object',
												description:
													'A form item containing a single question.',
												properties: {
													question: {
														type: 'object',
														description: 'The displayed question.',
														properties: {
															questionId: {
																type: 'string',
																description:
																	'The question ID. Can be used to identify the question when updating.',
															},
															required: {
																type: 'boolean',
																description:
																	'Whether the question must be answered in order for a respondent to submit their response.',
															},
															grading: {
																type: 'object',
																description:
																	'Grading setup for the question.',
																properties: {
																	pointValue: {
																		type: 'number',
																		description:
																			'The maximum number of points a respondent can automatically get for a correct answer.',
																	},
																	correctAnswers: {
																		type: 'object',
																		description:
																			'The answer key for the question.',
																		properties: {
																			answers: {
																				type: 'array',
																				description:
																					'A list of correct answers.',
																				items: {
																					type: 'object',
																					description:
																						'A single correct answer.',
																					properties: {
																						value: {
																							type: 'string',
																							description:
																								'The correct answer value.',
																						},
																					},
																					required: [],
																				},
																			},
																		},
																		required: [],
																	},
																	generalFeedback: {
																		type: 'object',
																		description:
																			'The feedback displayed for all answers.',
																		properties: {
																			text: {
																				type: 'string',
																				description:
																					'The feedback text.',
																			},
																			material: {
																				type: 'array',
																				description:
																					'A list of extra material attached to the feedback.',
																				items: {
																					type: 'object',
																					description:
																						'A single piece of extra material.',
																					properties: {
																						link: {
																							type: 'object',
																							description:
																								'A link extra material.',
																							properties:
																								{
																									uri: {
																										type: 'string',
																										description:
																											'The URI.',
																									},
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the link.',
																										},
																								},
																							required:
																								[],
																						},
																						video: {
																							type: 'object',
																							description:
																								'A video extra material.',
																							properties:
																								{
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the video.',
																										},
																									youtubeUri:
																										{
																											type: 'string',
																											description:
																												'The YouTube URI.',
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																		},
																		required: [],
																	},
																	whenRight: {
																		type: 'object',
																		description:
																			'The feedback displayed for correct responses.',
																		properties: {
																			text: {
																				type: 'string',
																				description:
																					'The feedback text.',
																			},
																			material: {
																				type: 'array',
																				description:
																					'A list of extra material attached to the feedback.',
																				items: {
																					type: 'object',
																					description:
																						'A single piece of extra material.',
																					properties: {
																						link: {
																							type: 'object',
																							description:
																								'A link extra material.',
																							properties:
																								{
																									uri: {
																										type: 'string',
																										description:
																											'The URI.',
																									},
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the link.',
																										},
																								},
																							required:
																								[],
																						},
																						video: {
																							type: 'object',
																							description:
																								'A video extra material.',
																							properties:
																								{
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the video.',
																										},
																									youtubeUri:
																										{
																											type: 'string',
																											description:
																												'The YouTube URI.',
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																		},
																		required: [],
																	},
																	whenWrong: {
																		type: 'object',
																		description:
																			'The feedback displayed for incorrect responses.',
																		properties: {
																			text: {
																				type: 'string',
																				description:
																					'The feedback text.',
																			},
																			material: {
																				type: 'array',
																				description:
																					'A list of extra material attached to the feedback.',
																				items: {
																					type: 'object',
																					description:
																						'A single piece of extra material.',
																					properties: {
																						link: {
																							type: 'object',
																							description:
																								'A link extra material.',
																							properties:
																								{
																									uri: {
																										type: 'string',
																										description:
																											'The URI.',
																									},
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the link.',
																										},
																								},
																							required:
																								[],
																						},
																						video: {
																							type: 'object',
																							description:
																								'A video extra material.',
																							properties:
																								{
																									displayText:
																										{
																											type: 'string',
																											description:
																												'The display text for the video.',
																										},
																									youtubeUri:
																										{
																											type: 'string',
																											description:
																												'The YouTube URI.',
																										},
																								},
																							required:
																								[],
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
															choiceQuestion: {
																type: 'object',
																description:
																	'A radio/checkbox/dropdown question.',
																properties: {
																	type: {
																		type: 'string',
																		description:
																			'The type of choice question.',
																		enum: [
																			'RADIO',
																			'CHECKBOX',
																			'DROP_DOWN',
																		],
																	},
																	options: {
																		type: 'array',
																		description:
																			'List of options that a respondent must choose from.',
																		items: {
																			type: 'object',
																			description:
																				'An option for a choice question.',
																			properties: {
																				value: {
																					type: 'string',
																					description:
																						'The choice as presented to the user.',
																				},
																				isOther: {
																					type: 'boolean',
																					description:
																						'Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types.',
																				},
																				goToAction: {
																					type: 'string',
																					description:
																						'Section navigation type.',
																					default: '',
																					enum: [
																						'',
																						'NEXT_SECTION',
																						'RESTART_FORM',
																						'SUBMIT_FORM',
																					],
																				},
																				goToSectionId: {
																					type: 'string',
																					description:
																						'Item ID of section header to go to.',
																				},
																			},
																			required: ['value'],
																		},
																	},
																	shuffle: {
																		type: 'boolean',
																		description:
																			'Whether the options should be displayed in random order.',
																	},
																},
																required: ['type', 'options'],
															},
															textQuestion: {
																type: 'object',
																description:
																	'A free text response question.',
																properties: {
																	paragraph: {
																		type: 'boolean',
																		description:
																			'Whether the question is a paragraph question. If not, it is a short text question.',
																	},
																},
																required: [],
															},
															scaleQuestion: {
																type: 'object',
																description:
																	'A scale question where the user picks a number from a range.',
																properties: {
																	low: {
																		type: 'number',
																		description:
																			'The lowest possible value for the scale.',
																	},
																	high: {
																		type: 'number',
																		description:
																			'The highest possible value for the scale.',
																	},
																	lowLabel: {
																		type: 'string',
																		description:
																			'The label to display describing the lowest point on the scale.',
																	},
																	highLabel: {
																		type: 'string',
																		description:
																			'The label to display describing the highest point on the scale.',
																	},
																},
																required: [],
															},
															dateQuestion: {
																type: 'object',
																description:
																	'A date question. Date questions default to just month + day.',
																properties: {
																	includeTime: {
																		type: 'boolean',
																		description:
																			'Whether to include the time as part of the question.',
																	},
																	includeYear: {
																		type: 'boolean',
																		description:
																			'Whether to include the year as part of the question.',
																	},
																},
																required: [],
															},
															timeQuestion: {
																type: 'object',
																description: 'A time question.',
																properties: {
																	duration: {
																		type: 'boolean',
																		description:
																			'`true` if the question is about an elapsed time. Otherwise it is about a time of day.',
																	},
																},
																required: [],
															},
															fileUploadQuestion: {
																type: 'object',
																description:
																	'A file upload question.',
																properties: {
																	folderId: {
																		type: 'string',
																		description:
																			'The ID of the Drive folder where uploaded files are stored.',
																	},
																	types: {
																		type: 'array',
																		description:
																			'File types accepted by this question.',
																		items: {
																			type: 'string',
																			description:
																				'A file type.',
																			default: '',
																			enum: [
																				'',
																				'ANY',
																				'DOCUMENT',
																				'PRESENTATION',
																				'SPREADSHEET',
																				'DRAWING',
																				'PDF',
																				'IMAGE',
																				'VIDEO',
																				'AUDIO',
																			],
																		},
																	},
																	maxFiles: {
																		type: 'number',
																		description:
																			'Maximum number of files that can be uploaded for this question in a single response.',
																	},
																	maxFileSize: {
																		type: 'string',
																		description:
																			'Maximum number of bytes allowed for any single file uploaded to this question.',
																	},
																},
																required: [],
															},
															ratingQuestion: {
																type: 'object',
																description:
																	'A rating question with icons.',
																properties: {
																	ratingScaleLevel: {
																		type: 'number',
																		description:
																			'The rating scale level of the rating question.',
																	},
																	iconType: {
																		type: 'string',
																		description:
																			'The icon type to use for the rating.',
																		default: '',
																		enum: [
																			'',
																			'STAR',
																			'HEART',
																			'THUMB_UP',
																		],
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													image: {
														type: 'object',
														description:
															'The image displayed within the question.',
														properties: {
															sourceUri: {
																type: 'string',
																description:
																	'Input only. The source URI is the URI used to insert the image.',
															},
															altText: {
																type: 'string',
																description:
																	'A description of the image that is shown on hover and read by screenreaders.',
															},
															properties: {
																type: 'object',
																description:
																	'Properties of the image.',
																properties: {
																	alignment: {
																		type: 'string',
																		description:
																			'Position of the media.',
																		default: '',
																		enum: [
																			'',
																			'LEFT',
																			'RIGHT',
																			'CENTER',
																		],
																	},
																	width: {
																		type: 'number',
																		description:
																			'The width of the media in pixels (0–740).',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
												},
												required: ['question'],
											},
											questionGroupItem: {
												type: 'object',
												description:
													'Poses one or more questions to the user with a single major prompt.',
												properties: {
													questions: {
														type: 'array',
														description:
															'A list of questions that belong in this question group.',
														items: {
															type: 'object',
															description: 'A question in the group.',
															properties: {
																questionId: {
																	type: 'string',
																	description:
																		'The question ID. Can be used to identify the question when updating.',
																},
																required: {
																	type: 'boolean',
																	description:
																		'Whether the question must be answered.',
																},
																rowQuestion: {
																	type: 'object',
																	description:
																		'A row of a QuestionGroupItem.',
																	properties: {},
																	required: ['title'],
																	additionalProperties: true,
																},
															},
															required: [],
														},
													},
													image: {
														type: 'object',
														description:
															'The image displayed within the question group above the specific questions.',
														properties: {
															sourceUri: {
																type: 'string',
																description:
																	'Input only. The source URI is the URI used to insert the image.',
															},
															altText: {
																type: 'string',
																description:
																	'A description of the image.',
															},
															properties: {
																type: 'object',
																description:
																	'Properties of the image.',
																properties: {
																	alignment: {
																		type: 'string',
																		description:
																			'Position of the media.',
																		default: '',
																		enum: [
																			'',
																			'LEFT',
																			'RIGHT',
																			'CENTER',
																		],
																	},
																	width: {
																		type: 'number',
																		description:
																			'The width of the media in pixels (0–740).',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													grid: {
														type: 'object',
														description:
															'A grid with rows of multiple choice questions that share the same options.',
														properties: {
															columns: {
																type: 'object',
																description:
																	'The choices shared by each question in the grid.',
																properties: {
																	type: {
																		type: 'string',
																		description:
																			'The type of choice question.',
																		enum: ['RADIO', 'CHECKBOX'],
																	},
																	options: {
																		type: 'array',
																		description:
																			'List of options.',
																		items: {
																			type: 'object',
																			description:
																				'An option for a choice question.',
																			properties: {
																				value: {
																					type: 'string',
																					description:
																						'The choice as presented to the user.',
																				},
																			},
																			required: ['value'],
																		},
																	},
																},
																required: ['type', 'options'],
															},
															shuffleQuestions: {
																type: 'boolean',
																description:
																	'If `true`, the questions are randomly ordered.',
															},
														},
														required: ['columns'],
													},
												},
												required: ['questions'],
											},
											pageBreakItem: {
												type: 'object',
												description:
													"Starts a new page with a title. The item's `title` and `description` fields apply to the new page.",
												properties: {},
												required: [],
												additionalProperties: true,
											},
											textItem: {
												type: 'object',
												description:
													'Displays a title and description on the page.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
											imageItem: {
												type: 'object',
												description: 'Displays an image on the page.',
												properties: {
													image: {
														type: 'object',
														description:
															'The image displayed in the item.',
														properties: {
															sourceUri: {
																type: 'string',
																description:
																	'Input only. The source URI is the URI used to insert the image.',
															},
															altText: {
																type: 'string',
																description:
																	'A description of the image.',
															},
															properties: {
																type: 'object',
																description:
																	'Properties of the image.',
																properties: {
																	alignment: {
																		type: 'string',
																		description:
																			'Position of the media.',
																		default: '',
																		enum: [
																			'',
																			'LEFT',
																			'RIGHT',
																			'CENTER',
																		],
																	},
																	width: {
																		type: 'number',
																		description:
																			'The width of the media in pixels (0–740).',
																	},
																},
																required: [],
															},
														},
														required: ['sourceUri'],
													},
												},
												required: ['image'],
											},
											videoItem: {
												type: 'object',
												description: 'Displays a video on the page.',
												properties: {
													video: {
														type: 'object',
														description:
															'The video displayed in the item.',
														properties: {
															youtubeUri: {
																type: 'string',
																description: 'A YouTube URI.',
															},
															properties: {
																type: 'object',
																description:
																	'Properties of the video.',
																properties: {
																	alignment: {
																		type: 'string',
																		description:
																			'Position of the media.',
																		default: '',
																		enum: [
																			'',
																			'LEFT',
																			'RIGHT',
																			'CENTER',
																		],
																	},
																	width: {
																		type: 'number',
																		description:
																			'The width of the media in pixels (0–740).',
																	},
																},
																required: [],
															},
														},
														required: ['youtubeUri'],
													},
													caption: {
														type: 'string',
														description:
															'The text displayed below the video.',
													},
												},
												required: ['video'],
											},
										},
										required: [],
									},
									location: {
										type: 'object',
										description: 'The location identifying the item to update.',
										properties: {
											index: {
												type: 'number',
												description: 'The index of the item to update.',
											},
										},
										required: ['index'],
									},
									updateMask: {
										type: 'string',
										description:
											'Only values named in this mask are changed. A single `*` can be used as short-hand for updating every field.',
									},
								},
								required: ['item', 'location', 'updateMask'],
							},
						},
						required: [],
					},
				},
				writeControl: {
					type: 'object',
					description: 'Provides control over how write requests are executed.',
					properties: {
						requiredRevisionId: {
							type: 'string',
							description:
								'The revision ID of the form that the write request is applied to. If this is not the latest revision, the request returns a 400 error.',
						},
						targetRevisionId: {
							type: 'string',
							description:
								'The target revision ID of the form. If changes have occurred after this revision, the changes in this request are transformed against those changes, resolving conflicts.',
						},
					},
					required: [],
				},
			},
			required: ['formId', 'requests'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				form: {
					type: 'object',
					description:
						'The updated form. Only set if `includeFormInResponse` was `true` in the request.',
					properties: {
						formId: { type: 'string', description: 'The form ID.' },
						info: {
							type: 'object',
							description: 'The general information for the form.',
							properties: {
								documentTitle: {
									type: 'string',
									description:
										'The title of the document which is visible in Google Drive.',
								},
								description: {
									type: 'string',
									description: 'The description of the form.',
								},
							},
							required: [],
						},
						settings: {
							type: 'object',
							description: "The form's settings.",
							properties: {
								quizSettings: {
									type: 'object',
									description: 'Settings related to quiz forms and grading.',
									properties: {
										isQuiz: {
											type: 'boolean',
											description:
												'Whether this form is a quiz. When `true`, responses are graded based on question grading.',
										},
									},
									required: [],
								},
								emailCollectionType: {
									type: 'string',
									description:
										'The setting that determines whether the form collects email addresses from respondents. One of: `DO_NOT_COLLECT`, `VERIFIED`, `RESPONDER_INPUT`.',
								},
							},
							required: [],
						},
						items: {
							type: 'array',
							description:
								"A list of the form's items, which can include section headers, questions, embedded media, etc.",
							items: {
								type: 'object',
								description: 'A single item of the form.',
								properties: {
									itemId: { type: 'string', description: 'The item ID.' },
									description: {
										type: 'string',
										description: 'The description of the item.',
									},
									questionItem: {
										type: 'object',
										description: 'A form item containing a single question.',
										properties: {
											question: {
												type: 'object',
												description: 'The displayed question.',
												properties: {
													questionId: {
														type: 'string',
														description: 'The question ID.',
													},
													required: {
														type: 'boolean',
														description:
															'Whether the question must be answered in order for a respondent to submit their response.',
													},
													grading: {
														type: 'object',
														description:
															'Grading setup for the question.',
														properties: {
															pointValue: {
																type: 'number',
																description:
																	'The maximum number of points a respondent can automatically get for a correct answer.',
															},
															correctAnswers: {
																type: 'object',
																description:
																	'The answer key for the question.',
																properties: {
																	answers: {
																		type: 'array',
																		description:
																			'A list of correct answers.',
																		items: {
																			type: 'object',
																			description:
																				'A single correct answer.',
																			properties: {
																				value: {
																					type: 'string',
																					description:
																						'The correct answer value.',
																				},
																			},
																			required: [],
																		},
																	},
																},
																required: [],
															},
															generalFeedback: {
																type: 'object',
																description:
																	'The feedback displayed for all answers.',
																properties: {
																	text: {
																		type: 'string',
																		description:
																			'The feedback text.',
																	},
																	material: {
																		type: 'array',
																		description:
																			'A list of extra material attached to the feedback.',
																		items: {
																			type: 'object',
																			description:
																				'A single piece of extra material.',
																			properties: {
																				link: {
																					type: 'object',
																					description:
																						'A link extra material.',
																					properties: {
																						uri: {
																							type: 'string',
																							description:
																								'The URI.',
																						},
																						displayText:
																							{
																								type: 'string',
																								description:
																									'The display text for the link.',
																							},
																					},
																					required: [],
																				},
																				video: {
																					type: 'object',
																					description:
																						'A video extra material.',
																					properties: {
																						displayText:
																							{
																								type: 'string',
																								description:
																									'The display text for the video.',
																							},
																						youtubeUri:
																							{
																								type: 'string',
																								description:
																									'The YouTube URI.',
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
															whenRight: {
																type: 'object',
																description:
																	'The feedback displayed for correct responses.',
																properties: {
																	text: {
																		type: 'string',
																		description:
																			'The feedback text.',
																	},
																	material: {
																		type: 'array',
																		description:
																			'A list of extra material attached to the feedback.',
																		items: {
																			type: 'object',
																			description:
																				'A single piece of extra material.',
																			properties: {
																				link: {
																					type: 'object',
																					description:
																						'A link extra material.',
																					properties: {
																						uri: {
																							type: 'string',
																							description:
																								'The URI.',
																						},
																						displayText:
																							{
																								type: 'string',
																								description:
																									'The display text for the link.',
																							},
																					},
																					required: [],
																				},
																				video: {
																					type: 'object',
																					description:
																						'A video extra material.',
																					properties: {
																						displayText:
																							{
																								type: 'string',
																								description:
																									'The display text for the video.',
																							},
																						youtubeUri:
																							{
																								type: 'string',
																								description:
																									'The YouTube URI.',
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
															whenWrong: {
																type: 'object',
																description:
																	'The feedback displayed for incorrect responses.',
																properties: {
																	text: {
																		type: 'string',
																		description:
																			'The feedback text.',
																	},
																	material: {
																		type: 'array',
																		description:
																			'A list of extra material attached to the feedback.',
																		items: {
																			type: 'object',
																			description:
																				'A single piece of extra material.',
																			properties: {
																				link: {
																					type: 'object',
																					description:
																						'A link extra material.',
																					properties: {
																						uri: {
																							type: 'string',
																							description:
																								'The URI.',
																						},
																						displayText:
																							{
																								type: 'string',
																								description:
																									'The display text for the link.',
																							},
																					},
																					required: [],
																				},
																				video: {
																					type: 'object',
																					description:
																						'A video extra material.',
																					properties: {
																						displayText:
																							{
																								type: 'string',
																								description:
																									'The display text for the video.',
																							},
																						youtubeUri:
																							{
																								type: 'string',
																								description:
																									'The YouTube URI.',
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
													choiceQuestion: {
														type: 'object',
														description:
															'A radio/checkbox/dropdown question.',
														properties: {
															type: {
																type: 'string',
																description:
																	'The type of choice question. One of: `RADIO`, `CHECKBOX`, `DROP_DOWN`.',
															},
															options: {
																type: 'array',
																description:
																	'List of options that a respondent must choose from.',
																items: {
																	type: 'object',
																	description:
																		'An option for a choice question.',
																	properties: {
																		value: {
																			type: 'string',
																			description:
																				'The choice as presented to the user.',
																		},
																		isOther: {
																			type: 'boolean',
																			description:
																				'Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types.',
																		},
																		goToAction: {
																			type: 'string',
																			description:
																				'Section navigation type. One of: `NEXT_SECTION`, `RESTART_FORM`, `SUBMIT_FORM`.',
																		},
																		goToSectionId: {
																			type: 'string',
																			description:
																				'Item ID of section header to go to.',
																		},
																		image: {
																			type: 'object',
																			description:
																				'Display image as an option.',
																			properties: {
																				contentUri: {
																					type: 'string',
																					description:
																						'A URI from which you can download the image; valid only for a limited time.',
																				},
																				altText: {
																					type: 'string',
																					description:
																						'A description of the image that is shown on hover and read by screenreaders.',
																				},
																				properties: {
																					type: 'object',
																					description:
																						'Properties of the image.',
																					properties: {
																						alignment: {
																							type: 'string',
																							description:
																								'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
																						},
																						width: {
																							type: 'number',
																							description:
																								'The width of the media in pixels (0–740).',
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
															shuffle: {
																type: 'boolean',
																description:
																	'Whether the options should be displayed in random order.',
															},
														},
														required: [],
													},
													textQuestion: {
														type: 'object',
														description:
															'A free text response question.',
														properties: {
															paragraph: {
																type: 'boolean',
																description:
																	'Whether the question is a paragraph question. If not, it is a short text question.',
															},
														},
														required: [],
													},
													scaleQuestion: {
														type: 'object',
														description:
															'A scale question where the user picks a number from a range.',
														properties: {
															low: {
																type: 'number',
																description:
																	'The lowest possible value for the scale.',
															},
															high: {
																type: 'number',
																description:
																	'The highest possible value for the scale.',
															},
															lowLabel: {
																type: 'string',
																description:
																	'The label to display describing the lowest point on the scale.',
															},
															highLabel: {
																type: 'string',
																description:
																	'The label to display describing the highest point on the scale.',
															},
														},
														required: [],
													},
													dateQuestion: {
														type: 'object',
														description:
															'A date question. Date questions default to just month + day.',
														properties: {
															includeTime: {
																type: 'boolean',
																description:
																	'Whether to include the time as part of the question.',
															},
															includeYear: {
																type: 'boolean',
																description:
																	'Whether to include the year as part of the question.',
															},
														},
														required: [],
													},
													timeQuestion: {
														type: 'object',
														description: 'A time question.',
														properties: {
															duration: {
																type: 'boolean',
																description:
																	'`true` if the question is about an elapsed time. Otherwise it is about a time of day.',
															},
														},
														required: [],
													},
													fileUploadQuestion: {
														type: 'object',
														description: 'A file upload question.',
														properties: {
															folderId: {
																type: 'string',
																description:
																	'The ID of the Drive folder where uploaded files are stored.',
															},
															types: {
																type: 'array',
																description:
																	'File types accepted by this question. Values: `ANY`, `DOCUMENT`, `PRESENTATION`, `SPREADSHEET`, `DRAWING`, `PDF`, `IMAGE`, `VIDEO`, `AUDIO`.',
																items: {
																	type: 'string',
																	description: 'A file type.',
																},
															},
															maxFiles: {
																type: 'number',
																description:
																	'Maximum number of files that can be uploaded for this question in a single response.',
															},
															maxFileSize: {
																type: 'string',
																description:
																	'Maximum number of bytes allowed for any single file uploaded to this question.',
															},
														},
														required: [],
													},
													rowQuestion: {
														type: 'object',
														description:
															'A question that is part of a question group.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
													ratingQuestion: {
														type: 'object',
														description:
															'A rating question with icons.',
														properties: {
															ratingScaleLevel: {
																type: 'number',
																description:
																	'The rating scale level of the rating question.',
															},
															iconType: {
																type: 'string',
																description:
																	'The icon type to use for the rating. One of: `STAR`, `HEART`, `THUMB_UP`.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											image: {
												type: 'object',
												description:
													'The image displayed within the question.',
												properties: {
													contentUri: {
														type: 'string',
														description:
															'A URI from which you can download the image; valid only for a limited time.',
													},
													altText: {
														type: 'string',
														description:
															'A description of the image that is shown on hover and read by screenreaders.',
													},
													properties: {
														type: 'object',
														description: 'Properties of the image.',
														properties: {
															alignment: {
																type: 'string',
																description:
																	'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
															},
															width: {
																type: 'number',
																description:
																	'The width of the media in pixels (0–740).',
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
									questionGroupItem: {
										type: 'object',
										description:
											'Poses one or more questions to the user with a single major prompt.',
										properties: {
											questions: {
												type: 'array',
												description:
													'A list of questions that belong in this question group.',
												items: {
													type: 'object',
													description: 'A question in the group.',
													properties: {
														questionId: {
															type: 'string',
															description: 'The question ID.',
														},
														required: {
															type: 'boolean',
															description:
																'Whether the question must be answered.',
														},
														rowQuestion: {
															type: 'object',
															description:
																'A row of a QuestionGroupItem.',
															properties: {},
															required: [],
															additionalProperties: true,
														},
													},
													required: [],
												},
											},
											image: {
												type: 'object',
												description:
													'The image displayed within the question group above the specific questions.',
												properties: {
													contentUri: {
														type: 'string',
														description:
															'A URI from which you can download the image; valid only for a limited time.',
													},
													altText: {
														type: 'string',
														description: 'A description of the image.',
													},
													properties: {
														type: 'object',
														description: 'Properties of the image.',
														properties: {
															alignment: {
																type: 'string',
																description:
																	'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
															},
															width: {
																type: 'number',
																description:
																	'The width of the media in pixels (0–740).',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											grid: {
												type: 'object',
												description:
													'A grid with rows of multiple choice questions that share the same options.',
												properties: {
													columns: {
														type: 'object',
														description:
															'The choices shared by each question in the grid.',
														properties: {
															type: {
																type: 'string',
																description:
																	'The type of choice question. One of: `RADIO`, `CHECKBOX`.',
															},
															options: {
																type: 'array',
																description: 'List of options.',
																items: {
																	type: 'object',
																	description:
																		'An option for a choice question.',
																	properties: {
																		value: {
																			type: 'string',
																			description:
																				'The choice as presented to the user.',
																		},
																	},
																	required: [],
																},
															},
														},
														required: [],
													},
													shuffleQuestions: {
														type: 'boolean',
														description:
															'If `true`, the questions are randomly ordered.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									pageBreakItem: {
										type: 'object',
										description: 'Starts a new page with a title.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									textItem: {
										type: 'object',
										description:
											'Displays a title and description on the page.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									imageItem: {
										type: 'object',
										description: 'Displays an image on the page.',
										properties: {
											image: {
												type: 'object',
												description: 'The image displayed in the item.',
												properties: {
													contentUri: {
														type: 'string',
														description:
															'A URI from which you can download the image; valid only for a limited time.',
													},
													altText: {
														type: 'string',
														description: 'A description of the image.',
													},
													properties: {
														type: 'object',
														description: 'Properties of the image.',
														properties: {
															alignment: {
																type: 'string',
																description:
																	'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
															},
															width: {
																type: 'number',
																description:
																	'The width of the media in pixels (0–740).',
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
									videoItem: {
										type: 'object',
										description: 'Displays a video on the page.',
										properties: {
											video: {
												type: 'object',
												description: 'The video displayed in the item.',
												properties: {
													youtubeUri: {
														type: 'string',
														description: 'A YouTube URI.',
													},
													properties: {
														type: 'object',
														description: 'Properties of the video.',
														properties: {
															alignment: {
																type: 'string',
																description:
																	'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
															},
															width: {
																type: 'number',
																description:
																	'The width of the media in pixels (0–740).',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											caption: {
												type: 'string',
												description: 'The text displayed below the video.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						revisionId: { type: 'string', description: 'The revision ID of the form.' },
						responderUri: {
							type: 'string',
							description: 'The form URI to share with responders.',
						},
						linkedSheetId: {
							type: 'string',
							description:
								'The ID of the linked Google Sheet which is accumulating responses from this form.',
						},
						publishSettings: {
							type: 'object',
							description: 'The publishing settings for the form.',
							properties: {
								publishState: {
									type: 'object',
									description: 'The publishing state of the form.',
									properties: {
										isPublished: {
											type: 'boolean',
											description:
												'Whether the form is published and visible to others.',
										},
										isAcceptingResponses: {
											type: 'boolean',
											description: 'Whether the form accepts responses.',
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
				replies: {
					type: 'array',
					description:
						'The reply of the updates. This maps 1:1 with the update requests.',
					items: {
						type: 'object',
						description: 'A single response from an update.',
						properties: {
							createItem: {
								type: 'object',
								description: 'The result of creating an item.',
								properties: {
									itemId: {
										type: 'string',
										description: 'The ID of the created item.',
									},
									questionId: {
										type: 'array',
										description:
											'The IDs of the questions created as part of this item.',
										items: { type: 'string', description: 'A question ID.' },
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				writeControl: {
					type: 'object',
					description: 'The updated write control after applying the request.',
					properties: {
						requiredRevisionId: {
							type: 'string',
							description: 'The required revision ID.',
						},
						targetRevisionId: {
							type: 'string',
							description: 'The target revision ID.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-forms',
		appVersion: 2,
		endpointName: 'createForm',
		label: 'Create a form',
		description: 'Creates a new form using the title given in the provided form message.',
		context:
			'---\nname: createForm\ndescription: Creates a new form using the title given in the provided form message.\n---\n\nCreates a new form. Only `info.title` and `info.documentTitle` are accepted in the request body.\nAll other fields including items and settings are ignored on create.\n\nTo create a form with items, first call `createForm` to create an empty form, then call\n`batchUpdateForm` to add items, and optionally `setFormPublishSettings` to publish it.\n\nSet `unpublished` to `true` to create a form that does not accept responses initially.\n\nRefer to the [Google Forms API reference](https://developers.google.com/forms/api/reference/rest/v1/forms/create)\nfor full details on the create operation.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/drive'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				info: {
					type: 'object',
					description: 'The general information for the form.',
					properties: {
						documentTitle: {
							type: 'string',
							description:
								'The title of the document which is visible in Google Drive. Can only be set on create, not via batch update.',
						},
					},
					required: ['title'],
				},
				unpublished: {
					type: 'boolean',
					description:
						"Whether the form is unpublished. If set to `true`, the form doesn't accept responses. If set to `false` or unset, the form is published and accepts responses.",
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				formId: { type: 'string', description: 'The form ID.' },
				info: {
					type: 'object',
					description: 'The general information for the form.',
					properties: {
						documentTitle: {
							type: 'string',
							description:
								'The title of the document which is visible in Google Drive.',
						},
						description: {
							type: 'string',
							description: 'The description of the form.',
						},
					},
					required: [],
				},
				settings: {
					type: 'object',
					description: "The form's settings.",
					properties: {
						quizSettings: {
							type: 'object',
							description: 'Settings related to quiz forms and grading.',
							properties: {
								isQuiz: {
									type: 'boolean',
									description:
										'Whether this form is a quiz. When `true`, responses are graded based on question grading.',
								},
							},
							required: [],
						},
						emailCollectionType: {
							type: 'string',
							description:
								'The setting that determines whether the form collects email addresses from respondents. One of: `DO_NOT_COLLECT`, `VERIFIED`, `RESPONDER_INPUT`.',
						},
					},
					required: [],
				},
				items: {
					type: 'array',
					description:
						"A list of the form's items, which can include section headers, questions, embedded media, etc.",
					items: {
						type: 'object',
						description: 'A single item of the form.',
						properties: {
							itemId: { type: 'string', description: 'The item ID.' },
							description: {
								type: 'string',
								description: 'The description of the item.',
							},
							questionItem: {
								type: 'object',
								description: 'A form item containing a single question.',
								properties: {
									question: {
										type: 'object',
										description: 'The displayed question.',
										properties: {
											questionId: {
												type: 'string',
												description: 'The question ID.',
											},
											required: {
												type: 'boolean',
												description:
													'Whether the question must be answered in order for a respondent to submit their response.',
											},
											grading: {
												type: 'object',
												description: 'Grading setup for the question.',
												properties: {
													pointValue: {
														type: 'number',
														description:
															'The maximum number of points a respondent can automatically get for a correct answer.',
													},
													correctAnswers: {
														type: 'object',
														description:
															'The answer key for the question.',
														properties: {
															answers: {
																type: 'array',
																description:
																	'A list of correct answers.',
																items: {
																	type: 'object',
																	description:
																		'A single correct answer.',
																	properties: {
																		value: {
																			type: 'string',
																			description:
																				'The correct answer value.',
																		},
																	},
																	required: [],
																},
															},
														},
														required: [],
													},
													generalFeedback: {
														type: 'object',
														description:
															'The feedback displayed for all answers.',
														properties: {
															text: {
																type: 'string',
																description: 'The feedback text.',
															},
															material: {
																type: 'array',
																description:
																	'A list of extra material attached to the feedback.',
																items: {
																	type: 'object',
																	description:
																		'A single piece of extra material.',
																	properties: {
																		link: {
																			type: 'object',
																			description:
																				'A link extra material.',
																			properties: {
																				uri: {
																					type: 'string',
																					description:
																						'The URI.',
																				},
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the link.',
																				},
																			},
																			required: [],
																		},
																		video: {
																			type: 'object',
																			description:
																				'A video extra material.',
																			properties: {
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the video.',
																				},
																				youtubeUri: {
																					type: 'string',
																					description:
																						'The YouTube URI.',
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
													whenRight: {
														type: 'object',
														description:
															'The feedback displayed for correct responses.',
														properties: {
															text: {
																type: 'string',
																description: 'The feedback text.',
															},
															material: {
																type: 'array',
																description:
																	'A list of extra material attached to the feedback.',
																items: {
																	type: 'object',
																	description:
																		'A single piece of extra material.',
																	properties: {
																		link: {
																			type: 'object',
																			description:
																				'A link extra material.',
																			properties: {
																				uri: {
																					type: 'string',
																					description:
																						'The URI.',
																				},
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the link.',
																				},
																			},
																			required: [],
																		},
																		video: {
																			type: 'object',
																			description:
																				'A video extra material.',
																			properties: {
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the video.',
																				},
																				youtubeUri: {
																					type: 'string',
																					description:
																						'The YouTube URI.',
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
													whenWrong: {
														type: 'object',
														description:
															'The feedback displayed for incorrect responses.',
														properties: {
															text: {
																type: 'string',
																description: 'The feedback text.',
															},
															material: {
																type: 'array',
																description:
																	'A list of extra material attached to the feedback.',
																items: {
																	type: 'object',
																	description:
																		'A single piece of extra material.',
																	properties: {
																		link: {
																			type: 'object',
																			description:
																				'A link extra material.',
																			properties: {
																				uri: {
																					type: 'string',
																					description:
																						'The URI.',
																				},
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the link.',
																				},
																			},
																			required: [],
																		},
																		video: {
																			type: 'object',
																			description:
																				'A video extra material.',
																			properties: {
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the video.',
																				},
																				youtubeUri: {
																					type: 'string',
																					description:
																						'The YouTube URI.',
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
											choiceQuestion: {
												type: 'object',
												description: 'A radio/checkbox/dropdown question.',
												properties: {
													type: {
														type: 'string',
														description:
															'The type of choice question. One of: `RADIO`, `CHECKBOX`, `DROP_DOWN`.',
													},
													options: {
														type: 'array',
														description:
															'List of options that a respondent must choose from.',
														items: {
															type: 'object',
															description:
																'An option for a choice question.',
															properties: {
																value: {
																	type: 'string',
																	description:
																		'The choice as presented to the user.',
																},
																isOther: {
																	type: 'boolean',
																	description:
																		'Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types.',
																},
																goToAction: {
																	type: 'string',
																	description:
																		'Section navigation type. One of: `NEXT_SECTION`, `RESTART_FORM`, `SUBMIT_FORM`.',
																},
																goToSectionId: {
																	type: 'string',
																	description:
																		'Item ID of section header to go to.',
																},
																image: {
																	type: 'object',
																	description:
																		'Display image as an option.',
																	properties: {
																		contentUri: {
																			type: 'string',
																			description:
																				'A URI from which you can download the image; valid only for a limited time.',
																		},
																		altText: {
																			type: 'string',
																			description:
																				'A description of the image that is shown on hover and read by screenreaders.',
																		},
																		properties: {
																			type: 'object',
																			description:
																				'Properties of the image.',
																			properties: {
																				alignment: {
																					type: 'string',
																					description:
																						'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
																				},
																				width: {
																					type: 'number',
																					description:
																						'The width of the media in pixels (0–740).',
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
													shuffle: {
														type: 'boolean',
														description:
															'Whether the options should be displayed in random order.',
													},
												},
												required: [],
											},
											textQuestion: {
												type: 'object',
												description: 'A free text response question.',
												properties: {
													paragraph: {
														type: 'boolean',
														description:
															'Whether the question is a paragraph question. If not, it is a short text question.',
													},
												},
												required: [],
											},
											scaleQuestion: {
												type: 'object',
												description:
													'A scale question where the user picks a number from a range.',
												properties: {
													low: {
														type: 'number',
														description:
															'The lowest possible value for the scale.',
													},
													high: {
														type: 'number',
														description:
															'The highest possible value for the scale.',
													},
													lowLabel: {
														type: 'string',
														description:
															'The label to display describing the lowest point on the scale.',
													},
													highLabel: {
														type: 'string',
														description:
															'The label to display describing the highest point on the scale.',
													},
												},
												required: [],
											},
											dateQuestion: {
												type: 'object',
												description:
													'A date question. Date questions default to just month + day.',
												properties: {
													includeTime: {
														type: 'boolean',
														description:
															'Whether to include the time as part of the question.',
													},
													includeYear: {
														type: 'boolean',
														description:
															'Whether to include the year as part of the question.',
													},
												},
												required: [],
											},
											timeQuestion: {
												type: 'object',
												description: 'A time question.',
												properties: {
													duration: {
														type: 'boolean',
														description:
															'`true` if the question is about an elapsed time. Otherwise it is about a time of day.',
													},
												},
												required: [],
											},
											fileUploadQuestion: {
												type: 'object',
												description: 'A file upload question.',
												properties: {
													folderId: {
														type: 'string',
														description:
															'The ID of the Drive folder where uploaded files are stored.',
													},
													types: {
														type: 'array',
														description:
															'File types accepted by this question. Values: `ANY`, `DOCUMENT`, `PRESENTATION`, `SPREADSHEET`, `DRAWING`, `PDF`, `IMAGE`, `VIDEO`, `AUDIO`.',
														items: {
															type: 'string',
															description: 'A file type.',
														},
													},
													maxFiles: {
														type: 'number',
														description:
															'Maximum number of files that can be uploaded for this question in a single response.',
													},
													maxFileSize: {
														type: 'string',
														description:
															'Maximum number of bytes allowed for any single file uploaded to this question.',
													},
												},
												required: [],
											},
											rowQuestion: {
												type: 'object',
												description:
													'A question that is part of a question group.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
											ratingQuestion: {
												type: 'object',
												description: 'A rating question with icons.',
												properties: {
													ratingScaleLevel: {
														type: 'number',
														description:
															'The rating scale level of the rating question.',
													},
													iconType: {
														type: 'string',
														description:
															'The icon type to use for the rating. One of: `STAR`, `HEART`, `THUMB_UP`.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									image: {
										type: 'object',
										description: 'The image displayed within the question.',
										properties: {
											contentUri: {
												type: 'string',
												description:
													'A URI from which you can download the image; valid only for a limited time.',
											},
											altText: {
												type: 'string',
												description:
													'A description of the image that is shown on hover and read by screenreaders.',
											},
											properties: {
												type: 'object',
												description: 'Properties of the image.',
												properties: {
													alignment: {
														type: 'string',
														description:
															'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
													},
													width: {
														type: 'number',
														description:
															'The width of the media in pixels (0–740).',
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
							questionGroupItem: {
								type: 'object',
								description:
									'Poses one or more questions to the user with a single major prompt.',
								properties: {
									questions: {
										type: 'array',
										description:
											'A list of questions that belong in this question group.',
										items: {
											type: 'object',
											description: 'A question in the group.',
											properties: {
												questionId: {
													type: 'string',
													description: 'The question ID.',
												},
												required: {
													type: 'boolean',
													description:
														'Whether the question must be answered.',
												},
												rowQuestion: {
													type: 'object',
													description: 'A row of a QuestionGroupItem.',
													properties: {},
													required: [],
													additionalProperties: true,
												},
											},
											required: [],
										},
									},
									image: {
										type: 'object',
										description:
											'The image displayed within the question group above the specific questions.',
										properties: {
											contentUri: {
												type: 'string',
												description:
													'A URI from which you can download the image; valid only for a limited time.',
											},
											altText: {
												type: 'string',
												description: 'A description of the image.',
											},
											properties: {
												type: 'object',
												description: 'Properties of the image.',
												properties: {
													alignment: {
														type: 'string',
														description:
															'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
													},
													width: {
														type: 'number',
														description:
															'The width of the media in pixels (0–740).',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									grid: {
										type: 'object',
										description:
											'A grid with rows of multiple choice questions that share the same options.',
										properties: {
											columns: {
												type: 'object',
												description:
													'The choices shared by each question in the grid.',
												properties: {
													type: {
														type: 'string',
														description:
															'The type of choice question. One of: `RADIO`, `CHECKBOX`.',
													},
													options: {
														type: 'array',
														description: 'List of options.',
														items: {
															type: 'object',
															description:
																'An option for a choice question.',
															properties: {
																value: {
																	type: 'string',
																	description:
																		'The choice as presented to the user.',
																},
															},
															required: [],
														},
													},
												},
												required: [],
											},
											shuffleQuestions: {
												type: 'boolean',
												description:
													'If `true`, the questions are randomly ordered.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							pageBreakItem: {
								type: 'object',
								description: 'Starts a new page with a title.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							textItem: {
								type: 'object',
								description: 'Displays a title and description on the page.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							imageItem: {
								type: 'object',
								description: 'Displays an image on the page.',
								properties: {
									image: {
										type: 'object',
										description: 'The image displayed in the item.',
										properties: {
											contentUri: {
												type: 'string',
												description:
													'A URI from which you can download the image; valid only for a limited time.',
											},
											altText: {
												type: 'string',
												description: 'A description of the image.',
											},
											properties: {
												type: 'object',
												description: 'Properties of the image.',
												properties: {
													alignment: {
														type: 'string',
														description:
															'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
													},
													width: {
														type: 'number',
														description:
															'The width of the media in pixels (0–740).',
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
							videoItem: {
								type: 'object',
								description: 'Displays a video on the page.',
								properties: {
									video: {
										type: 'object',
										description: 'The video displayed in the item.',
										properties: {
											youtubeUri: {
												type: 'string',
												description: 'A YouTube URI.',
											},
											properties: {
												type: 'object',
												description: 'Properties of the video.',
												properties: {
													alignment: {
														type: 'string',
														description:
															'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
													},
													width: {
														type: 'number',
														description:
															'The width of the media in pixels (0–740).',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									caption: {
										type: 'string',
										description: 'The text displayed below the video.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				revisionId: { type: 'string', description: 'The revision ID of the form.' },
				responderUri: {
					type: 'string',
					description: 'The form URI to share with responders.',
				},
				linkedSheetId: {
					type: 'string',
					description:
						'The ID of the linked Google Sheet which is accumulating responses from this form.',
				},
				publishSettings: {
					type: 'object',
					description: 'The publishing settings for the form.',
					properties: {
						publishState: {
							type: 'object',
							description: 'The publishing state of the form.',
							properties: {
								isPublished: {
									type: 'boolean',
									description:
										'Whether the form is published and visible to others.',
								},
								isAcceptingResponses: {
									type: 'boolean',
									description: 'Whether the form accepts responses.',
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
	{
		appName: 'google-forms',
		appVersion: 2,
		endpointName: 'getForm',
		label: 'Get a form',
		description: 'Gets a form.',
		context:
			'---\nname: getForm\ndescription: Gets a form.\n---\n\nReturns the full form resource including all items, settings, and metadata.\n\nUse this endpoint to retrieve the current state of a form before calling `batchUpdateForm`,\nespecially when you need item IDs, question IDs, or the current `revisionId` for write control.\n\nRefer to the [Google Forms API reference](https://developers.google.com/forms/api/reference/rest/v1/forms#Form)\nfor the full Form resource schema.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/drive'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				formId: { type: 'string', description: 'The ID of the form to retrieve.' },
			},
			required: ['formId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				formId: { type: 'string', description: 'The form ID.' },
				info: {
					type: 'object',
					description: 'The general information for the form.',
					properties: {
						documentTitle: {
							type: 'string',
							description:
								'The title of the document which is visible in Google Drive.',
						},
						description: {
							type: 'string',
							description: 'The description of the form.',
						},
					},
					required: [],
				},
				settings: {
					type: 'object',
					description: "The form's settings.",
					properties: {
						quizSettings: {
							type: 'object',
							description: 'Settings related to quiz forms and grading.',
							properties: {
								isQuiz: {
									type: 'boolean',
									description:
										'Whether this form is a quiz. When `true`, responses are graded based on question grading.',
								},
							},
							required: [],
						},
						emailCollectionType: {
							type: 'string',
							description:
								'The setting that determines whether the form collects email addresses from respondents. One of: `DO_NOT_COLLECT`, `VERIFIED`, `RESPONDER_INPUT`.',
						},
					},
					required: [],
				},
				items: {
					type: 'array',
					description:
						"A list of the form's items, which can include section headers, questions, embedded media, etc.",
					items: {
						type: 'object',
						description: 'A single item of the form.',
						properties: {
							itemId: { type: 'string', description: 'The item ID.' },
							description: {
								type: 'string',
								description: 'The description of the item.',
							},
							questionItem: {
								type: 'object',
								description: 'A form item containing a single question.',
								properties: {
									question: {
										type: 'object',
										description: 'The displayed question.',
										properties: {
											questionId: {
												type: 'string',
												description: 'The question ID.',
											},
											required: {
												type: 'boolean',
												description:
													'Whether the question must be answered in order for a respondent to submit their response.',
											},
											grading: {
												type: 'object',
												description: 'Grading setup for the question.',
												properties: {
													pointValue: {
														type: 'number',
														description:
															'The maximum number of points a respondent can automatically get for a correct answer.',
													},
													correctAnswers: {
														type: 'object',
														description:
															'The answer key for the question.',
														properties: {
															answers: {
																type: 'array',
																description:
																	'A list of correct answers.',
																items: {
																	type: 'object',
																	description:
																		'A single correct answer.',
																	properties: {
																		value: {
																			type: 'string',
																			description:
																				'The correct answer value.',
																		},
																	},
																	required: [],
																},
															},
														},
														required: [],
													},
													generalFeedback: {
														type: 'object',
														description:
															'The feedback displayed for all answers.',
														properties: {
															text: {
																type: 'string',
																description: 'The feedback text.',
															},
															material: {
																type: 'array',
																description:
																	'A list of extra material attached to the feedback.',
																items: {
																	type: 'object',
																	description:
																		'A single piece of extra material.',
																	properties: {
																		link: {
																			type: 'object',
																			description:
																				'A link extra material.',
																			properties: {
																				uri: {
																					type: 'string',
																					description:
																						'The URI.',
																				},
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the link.',
																				},
																			},
																			required: [],
																		},
																		video: {
																			type: 'object',
																			description:
																				'A video extra material.',
																			properties: {
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the video.',
																				},
																				youtubeUri: {
																					type: 'string',
																					description:
																						'The YouTube URI.',
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
													whenRight: {
														type: 'object',
														description:
															'The feedback displayed for correct responses.',
														properties: {
															text: {
																type: 'string',
																description: 'The feedback text.',
															},
															material: {
																type: 'array',
																description:
																	'A list of extra material attached to the feedback.',
																items: {
																	type: 'object',
																	description:
																		'A single piece of extra material.',
																	properties: {
																		link: {
																			type: 'object',
																			description:
																				'A link extra material.',
																			properties: {
																				uri: {
																					type: 'string',
																					description:
																						'The URI.',
																				},
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the link.',
																				},
																			},
																			required: [],
																		},
																		video: {
																			type: 'object',
																			description:
																				'A video extra material.',
																			properties: {
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the video.',
																				},
																				youtubeUri: {
																					type: 'string',
																					description:
																						'The YouTube URI.',
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
													whenWrong: {
														type: 'object',
														description:
															'The feedback displayed for incorrect responses.',
														properties: {
															text: {
																type: 'string',
																description: 'The feedback text.',
															},
															material: {
																type: 'array',
																description:
																	'A list of extra material attached to the feedback.',
																items: {
																	type: 'object',
																	description:
																		'A single piece of extra material.',
																	properties: {
																		link: {
																			type: 'object',
																			description:
																				'A link extra material.',
																			properties: {
																				uri: {
																					type: 'string',
																					description:
																						'The URI.',
																				},
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the link.',
																				},
																			},
																			required: [],
																		},
																		video: {
																			type: 'object',
																			description:
																				'A video extra material.',
																			properties: {
																				displayText: {
																					type: 'string',
																					description:
																						'The display text for the video.',
																				},
																				youtubeUri: {
																					type: 'string',
																					description:
																						'The YouTube URI.',
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
											choiceQuestion: {
												type: 'object',
												description: 'A radio/checkbox/dropdown question.',
												properties: {
													type: {
														type: 'string',
														description:
															'The type of choice question. One of: `RADIO`, `CHECKBOX`, `DROP_DOWN`.',
													},
													options: {
														type: 'array',
														description:
															'List of options that a respondent must choose from.',
														items: {
															type: 'object',
															description:
																'An option for a choice question.',
															properties: {
																value: {
																	type: 'string',
																	description:
																		'The choice as presented to the user.',
																},
																isOther: {
																	type: 'boolean',
																	description:
																		'Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types.',
																},
																goToAction: {
																	type: 'string',
																	description:
																		'Section navigation type. One of: `NEXT_SECTION`, `RESTART_FORM`, `SUBMIT_FORM`.',
																},
																goToSectionId: {
																	type: 'string',
																	description:
																		'Item ID of section header to go to.',
																},
																image: {
																	type: 'object',
																	description:
																		'Display image as an option.',
																	properties: {
																		contentUri: {
																			type: 'string',
																			description:
																				'A URI from which you can download the image; valid only for a limited time.',
																		},
																		altText: {
																			type: 'string',
																			description:
																				'A description of the image that is shown on hover and read by screenreaders.',
																		},
																		properties: {
																			type: 'object',
																			description:
																				'Properties of the image.',
																			properties: {
																				alignment: {
																					type: 'string',
																					description:
																						'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
																				},
																				width: {
																					type: 'number',
																					description:
																						'The width of the media in pixels (0–740).',
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
													shuffle: {
														type: 'boolean',
														description:
															'Whether the options should be displayed in random order.',
													},
												},
												required: [],
											},
											textQuestion: {
												type: 'object',
												description: 'A free text response question.',
												properties: {
													paragraph: {
														type: 'boolean',
														description:
															'Whether the question is a paragraph question. If not, it is a short text question.',
													},
												},
												required: [],
											},
											scaleQuestion: {
												type: 'object',
												description:
													'A scale question where the user picks a number from a range.',
												properties: {
													low: {
														type: 'number',
														description:
															'The lowest possible value for the scale.',
													},
													high: {
														type: 'number',
														description:
															'The highest possible value for the scale.',
													},
													lowLabel: {
														type: 'string',
														description:
															'The label to display describing the lowest point on the scale.',
													},
													highLabel: {
														type: 'string',
														description:
															'The label to display describing the highest point on the scale.',
													},
												},
												required: [],
											},
											dateQuestion: {
												type: 'object',
												description:
													'A date question. Date questions default to just month + day.',
												properties: {
													includeTime: {
														type: 'boolean',
														description:
															'Whether to include the time as part of the question.',
													},
													includeYear: {
														type: 'boolean',
														description:
															'Whether to include the year as part of the question.',
													},
												},
												required: [],
											},
											timeQuestion: {
												type: 'object',
												description: 'A time question.',
												properties: {
													duration: {
														type: 'boolean',
														description:
															'`true` if the question is about an elapsed time. Otherwise it is about a time of day.',
													},
												},
												required: [],
											},
											fileUploadQuestion: {
												type: 'object',
												description: 'A file upload question.',
												properties: {
													folderId: {
														type: 'string',
														description:
															'The ID of the Drive folder where uploaded files are stored.',
													},
													types: {
														type: 'array',
														description:
															'File types accepted by this question. Values: `ANY`, `DOCUMENT`, `PRESENTATION`, `SPREADSHEET`, `DRAWING`, `PDF`, `IMAGE`, `VIDEO`, `AUDIO`.',
														items: {
															type: 'string',
															description: 'A file type.',
														},
													},
													maxFiles: {
														type: 'number',
														description:
															'Maximum number of files that can be uploaded for this question in a single response.',
													},
													maxFileSize: {
														type: 'string',
														description:
															'Maximum number of bytes allowed for any single file uploaded to this question.',
													},
												},
												required: [],
											},
											rowQuestion: {
												type: 'object',
												description:
													'A question that is part of a question group.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
											ratingQuestion: {
												type: 'object',
												description: 'A rating question with icons.',
												properties: {
													ratingScaleLevel: {
														type: 'number',
														description:
															'The rating scale level of the rating question.',
													},
													iconType: {
														type: 'string',
														description:
															'The icon type to use for the rating. One of: `STAR`, `HEART`, `THUMB_UP`.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									image: {
										type: 'object',
										description: 'The image displayed within the question.',
										properties: {
											contentUri: {
												type: 'string',
												description:
													'A URI from which you can download the image; valid only for a limited time.',
											},
											altText: {
												type: 'string',
												description:
													'A description of the image that is shown on hover and read by screenreaders.',
											},
											properties: {
												type: 'object',
												description: 'Properties of the image.',
												properties: {
													alignment: {
														type: 'string',
														description:
															'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
													},
													width: {
														type: 'number',
														description:
															'The width of the media in pixels (0–740).',
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
							questionGroupItem: {
								type: 'object',
								description:
									'Poses one or more questions to the user with a single major prompt.',
								properties: {
									questions: {
										type: 'array',
										description:
											'A list of questions that belong in this question group.',
										items: {
											type: 'object',
											description: 'A question in the group.',
											properties: {
												questionId: {
													type: 'string',
													description: 'The question ID.',
												},
												required: {
													type: 'boolean',
													description:
														'Whether the question must be answered.',
												},
												rowQuestion: {
													type: 'object',
													description: 'A row of a QuestionGroupItem.',
													properties: {},
													required: [],
													additionalProperties: true,
												},
											},
											required: [],
										},
									},
									image: {
										type: 'object',
										description:
											'The image displayed within the question group above the specific questions.',
										properties: {
											contentUri: {
												type: 'string',
												description:
													'A URI from which you can download the image; valid only for a limited time.',
											},
											altText: {
												type: 'string',
												description: 'A description of the image.',
											},
											properties: {
												type: 'object',
												description: 'Properties of the image.',
												properties: {
													alignment: {
														type: 'string',
														description:
															'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
													},
													width: {
														type: 'number',
														description:
															'The width of the media in pixels (0–740).',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									grid: {
										type: 'object',
										description:
											'A grid with rows of multiple choice questions that share the same options.',
										properties: {
											columns: {
												type: 'object',
												description:
													'The choices shared by each question in the grid.',
												properties: {
													type: {
														type: 'string',
														description:
															'The type of choice question. One of: `RADIO`, `CHECKBOX`.',
													},
													options: {
														type: 'array',
														description: 'List of options.',
														items: {
															type: 'object',
															description:
																'An option for a choice question.',
															properties: {
																value: {
																	type: 'string',
																	description:
																		'The choice as presented to the user.',
																},
															},
															required: [],
														},
													},
												},
												required: [],
											},
											shuffleQuestions: {
												type: 'boolean',
												description:
													'If `true`, the questions are randomly ordered.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							pageBreakItem: {
								type: 'object',
								description: 'Starts a new page with a title.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							textItem: {
								type: 'object',
								description: 'Displays a title and description on the page.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							imageItem: {
								type: 'object',
								description: 'Displays an image on the page.',
								properties: {
									image: {
										type: 'object',
										description: 'The image displayed in the item.',
										properties: {
											contentUri: {
												type: 'string',
												description:
													'A URI from which you can download the image; valid only for a limited time.',
											},
											altText: {
												type: 'string',
												description: 'A description of the image.',
											},
											properties: {
												type: 'object',
												description: 'Properties of the image.',
												properties: {
													alignment: {
														type: 'string',
														description:
															'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
													},
													width: {
														type: 'number',
														description:
															'The width of the media in pixels (0–740).',
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
							videoItem: {
								type: 'object',
								description: 'Displays a video on the page.',
								properties: {
									video: {
										type: 'object',
										description: 'The video displayed in the item.',
										properties: {
											youtubeUri: {
												type: 'string',
												description: 'A YouTube URI.',
											},
											properties: {
												type: 'object',
												description: 'Properties of the video.',
												properties: {
													alignment: {
														type: 'string',
														description:
															'Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.',
													},
													width: {
														type: 'number',
														description:
															'The width of the media in pixels (0–740).',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									caption: {
										type: 'string',
										description: 'The text displayed below the video.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				revisionId: { type: 'string', description: 'The revision ID of the form.' },
				responderUri: {
					type: 'string',
					description: 'The form URI to share with responders.',
				},
				linkedSheetId: {
					type: 'string',
					description:
						'The ID of the linked Google Sheet which is accumulating responses from this form.',
				},
				publishSettings: {
					type: 'object',
					description: 'The publishing settings for the form.',
					properties: {
						publishState: {
							type: 'object',
							description: 'The publishing state of the form.',
							properties: {
								isPublished: {
									type: 'boolean',
									description:
										'Whether the form is published and visible to others.',
								},
								isAcceptingResponses: {
									type: 'boolean',
									description: 'Whether the form accepts responses.',
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
	{
		appName: 'google-forms',
		appVersion: 2,
		endpointName: 'getResponse',
		label: 'Get a response',
		description: 'Gets one response from a form.',
		context:
			'---\nname: getResponse\ndescription: Gets one response from a form.\n---\n\nReturns a single form response by its response ID.\n\nThe `answers` field is a map keyed by question ID. Each value is an\n[Answer](https://developers.google.com/forms/api/reference/rest/v1/forms.responses#Answer) object\nthat may contain `textAnswers` or `fileUploadAnswers` depending on the question type.\n\nTimestamps (`createTime`, `lastSubmittedTime`) are in RFC 3339 format.\n\nRefer to the [Google Forms API reference](https://developers.google.com/forms/api/reference/rest/v1/forms.responses/get)\nfor full details.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/drive'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				formId: { type: 'string', description: 'The ID of the form.' },
				responseId: { type: 'string', description: 'The ID of the response to retrieve.' },
			},
			required: ['formId', 'responseId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				formId: { type: 'string', description: 'The form ID.' },
				responseId: { type: 'string', description: 'The response ID.' },
				createTime: {
					type: 'string',
					description:
						'Timestamp for the first time the response was submitted, in RFC 3339 format.',
				},
				lastSubmittedTime: {
					type: 'string',
					description:
						'Timestamp for the most recent time the response was submitted, in RFC 3339 format.',
				},
				respondentEmail: {
					type: 'string',
					description: 'The email address of the respondent, if collected.',
				},
				answers: {
					type: 'object',
					description:
						'The actual answers to the questions, keyed by question ID. Each value is an Answer object.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				totalScore: {
					type: 'number',
					description:
						'The total number of points the respondent received. Only set if the form is a quiz and the response was graded.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-forms',
		appVersion: 2,
		endpointName: 'listResponses',
		label: 'List responses',
		description: "Lists a form's responses.",
		context:
			"---\nname: listResponses\ndescription: Lists a form's responses.\n---\n\nReturns a paginated list of responses submitted to a form.\n\nUse the `filter` parameter to retrieve responses after a specific timestamp:\n- `timestamp > 2024-01-01T00:00:00Z` — responses submitted after the timestamp\n- `timestamp >= 2024-01-01T00:00:00Z` — responses submitted at or after the timestamp\n\nThe maximum `pageSize` is 5000. If there are more responses, the `nextPageToken` field\nwill be set — pass it as `pageToken` in a subsequent request.\n\nNote: the `formId` field is not returned in each response object for list requests.\n\nRefer to the [Google Forms API reference](https://developers.google.com/forms/api/reference/rest/v1/forms.responses/list)\nfor full details.\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/drive'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				formId: {
					type: 'string',
					description: 'The ID of the form whose responses to list.',
				},
				filter: {
					type: 'string',
					description:
						'Which form responses to return. Supported filters: `timestamp > N` or `timestamp >= N`, where N is an RFC 3339 timestamp. Example: `timestamp >= 2024-01-01T00:00:00Z`.',
				},
				pageSize: {
					type: 'number',
					description:
						'The maximum number of responses to return. If unspecified or zero, at most 5000 responses are returned.',
					maximum: 5000,
				},
				pageToken: {
					type: 'string',
					description:
						'A page token returned by a previous list response. If set, the form and the values of the filter must be the same as for the original request.',
				},
			},
			required: ['formId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				responses: {
					type: 'array',
					description: 'The returned form responses.',
					items: {
						type: 'object',
						description: 'A single form response.',
						properties: {
							responseId: { type: 'string', description: 'The response ID.' },
							createTime: {
								type: 'string',
								description:
									'Timestamp for the first time the response was submitted, in RFC 3339 format.',
							},
							lastSubmittedTime: {
								type: 'string',
								description:
									'Timestamp for the most recent time the response was submitted, in RFC 3339 format.',
							},
							respondentEmail: {
								type: 'string',
								description: 'The email address of the respondent, if collected.',
							},
							answers: {
								type: 'object',
								description:
									'The actual answers to the questions, keyed by question ID.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							totalScore: {
								type: 'number',
								description:
									'The total number of points the respondent received. Only set for graded quizzes.',
							},
						},
						required: [],
					},
				},
				nextPageToken: {
					type: 'string',
					description:
						'If set, there are more responses. Provide this as `pageToken` in a subsequent request to get the next page.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-forms',
		appVersion: 2,
		endpointName: 'setFormPublishSettings',
		label: 'Set form publish settings',
		description: 'Updates the publish settings of a form.',
		context:
			'---\nname: setFormPublishSettings\ndescription: Updates the publish settings of a form.\n---\n\nUpdates the publish settings of a form. Legacy forms are not supported because they\ndo not have the `publishSettings` field.\n\nWhen updating `publishState`, both `isPublished` and `isAcceptingResponses` must be set.\nSetting `isAcceptingResponses` to `true` with `isPublished` set to `false` is not supported\nand returns an error.\n\nRefer to the [Google Forms API reference](https://developers.google.com/forms/api/reference/rest/v1/forms/setPublishSettings)\nfor full details.\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/drive'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				formId: { type: 'string', description: 'The ID of the form.' },
				publishSettings: {
					type: 'object',
					description: 'The desired publish settings to apply to the form.',
					properties: {
						publishState: {
							type: 'object',
							description:
								'The publishing state of the form. When updating, both `isPublished` and `isAcceptingResponses` must be set.',
							properties: {
								isPublished: {
									type: 'boolean',
									description:
										'Whether the form is published and visible to others.',
								},
								isAcceptingResponses: {
									type: 'boolean',
									description:
										'Whether the form accepts responses. Setting to `true` with `isPublished` set to `false` is not supported.',
								},
							},
							required: ['isPublished', 'isAcceptingResponses'],
						},
					},
					required: [],
				},
				updateMask: {
					type: 'string',
					description:
						'The `publishSettings` fields to update. Accepts: `publishState` or `*`. If omitted, all fields are updated.',
				},
			},
			required: ['formId', 'publishSettings'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				formId: { type: 'string', description: 'The ID of the form.' },
				publishSettings: {
					type: 'object',
					description: 'The publish settings of the form.',
					properties: {
						publishState: {
							type: 'object',
							description: 'The publishing state of the form.',
							properties: {
								isPublished: {
									type: 'boolean',
									description:
										'Whether the form is published and visible to others.',
								},
								isAcceptingResponses: {
									type: 'boolean',
									description: 'Whether the form accepts responses.',
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
];
