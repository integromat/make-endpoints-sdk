// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-docs',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google Docs API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://docs.googleapis.com`. Provide the remaining path in the URL parameter\n(e.g. `/v1/documents/{documentId}`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Google Docs API reference](https://developers.google.com/workspace/docs/api/reference/rest) for available\nendpoints, required parameters, and response schemas.',
		accounts: { google: { scope: [] } },
		annotations: { arbitraryCallHint: true },
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter a path relative to `https://docs.googleapis.com/`. For example, `/v1/documents/{documentId}`.',
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
		appName: 'google-docs',
		appVersion: 1,
		endpointName: 'batchUpdateDocument',
		label: 'Batch update a document',
		description:
			'Applies one or more updates to a document. Supports inserting, deleting, and replacing text, images, and other content.',
		context:
			'---\nname: batchUpdateDocument\ndescription: Applies one or more atomic updates to a Google Docs document\n---\n\nSends a batch of update requests to modify a Google Docs document. Each request\nin the `requests` array is one atomic operation. All requests are validated before\nany are applied -- if any request is invalid, the entire batch fails.\n\n## Common Request Types\n\n### Insert text\nInserts text at a specific location in the document.\n```json\n{\n    "insertText": {\n        "text": "Hello, world!",\n        "location": {\n            "index": 1\n        }\n    }\n}\n```\nIndex 1 is the beginning of the document body. Use `endOfSegmentLocation` instead\nof `location` to append to the end:\n```json\n{\n    "insertText": {\n        "text": "Appended text",\n        "endOfSegmentLocation": {}\n    }\n}\n```\n\n### Replace all occurrences of text\nFinds and replaces all instances of a string in the document.\n```json\n{\n    "replaceAllText": {\n        "containsText": {\n            "text": "old text",\n            "matchCase": true\n        },\n        "replaceText": "new text"\n    }\n}\n```\n\n### Insert an inline image\nInserts an image from a URL at a specific location.\n```json\n{\n    "insertInlineImage": {\n        "uri": "https://example.com/image.png",\n        "location": {\n            "index": 1\n        },\n        "objectSize": {\n            "width": { "magnitude": 300, "unit": "PT" },\n            "height": { "magnitude": 200, "unit": "PT" }\n        }\n    }\n}\n```\n\n### Replace an image\nReplaces an existing inline image by its object ID.\n```json\n{\n    "replaceImage": {\n        "imageObjectId": "kix.abc123def456",\n        "uri": "https://example.com/new-image.png"\n    }\n}\n```\nUse `getDocument` first to find image object IDs in `inlineObjects`.\n\n### Insert a link (update text style)\nTo make existing text a hyperlink, use `updateTextStyle` with a range:\n```json\n{\n    "updateTextStyle": {\n        "range": {\n            "startIndex": 10,\n            "endIndex": 20\n        },\n        "textStyle": {\n            "link": {\n                "url": "https://example.com"\n            }\n        },\n        "fields": "link"\n    }\n}\n```\nTo insert new linked text, first `insertText`, then `updateTextStyle` on the range.\n\n## Index Positions\nDocument indices are zero-based UTF-16 code unit offsets. Index 0 is before the\ndocument body starts (reserved). The first valid insertion point is index 1.\nUse `getDocument` to read the current structure and determine correct indices.\n\n## Replies\nEach request in the batch produces one reply in the `replies` array, in the same\norder. Most request types return an empty reply object. Only these return data:\n- `replaceAllText` -- `occurrencesChanged` (number of replacements made)\n- `insertInlineImage` -- `objectId` (ID of the created inline object)\n- `createHeader` -- `headerId` (ID of the created header)\n- `createFooter` -- `footerId` (ID of the created footer)\n\n## Write Control\nUse `writeControl.requiredRevisionId` for optimistic locking -- the request fails\nif the document has been modified since that revision. Use `targetRevisionId` for\ncollaborative merge behavior.',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/documents'] } },
		inputSchema: {
			type: 'object',
			properties: {
				documentId: { type: 'string', description: 'The ID of the document to update.' },
				requests: {
					type: 'array',
					description:
						'A list of update requests to apply to the document. Select the request type for each item -- only the relevant fields will appear. The buildBatchRequests function wraps the fields under the selected type and strips empty values.',
					items: {
						type: 'object',
						description:
							'A single update request. Select the request type to see the relevant fields.',
						properties: {
							requestType: {
								type: 'string',
								description: 'The type of update to apply.',
								enum: [
									'insertText',
									'replaceAllText',
									'insertInlineImage',
									'replaceImage',
									'updateTextStyle',
									'createHeader',
									'createFooter',
								],
							},
						},
						required: ['requestType'],
						allOf: [
							{
								if: { properties: { requestType: { const: 'insertText' } } },
								then: {
									type: 'object',
									properties: {
										text: {
											type: 'string',
											description:
												'The text to insert. A newline character creates a new paragraph.',
										},
										location: {
											type: 'object',
											description:
												'Insert at a specific index. Index 1 = start of document body. Provide either location or endOfSegmentLocation, not both.',
											properties: {
												index: {
													type: 'number',
													description:
														'The zero-based index in UTF-16 code units. Index 1 is the start of the body.',
												},
												segmentId: {
													type: 'string',
													description:
														'The header, footer, or footnote ID. Empty = document body.',
												},
												tabId: {
													type: 'string',
													description:
														'The tab to insert into. Omit for single-tab documents or to target the first tab.',
												},
											},
											required: [],
										},
										endOfSegmentLocation: {
											type: 'object',
											description:
												'Append to the end of a segment (body, header, footer, or footnote). Provide either location or endOfSegmentLocation, not both.',
											properties: {
												segmentId: {
													type: 'string',
													description:
														'The header, footer, or footnote ID. Empty = document body.',
												},
												tabId: {
													type: 'string',
													description:
														'The tab to append to. Omit for single-tab documents or to target the first tab.',
												},
											},
											required: [],
										},
									},
									required: ['text'],
								},
							},
							{
								if: { properties: { requestType: { const: 'replaceAllText' } } },
								then: {
									type: 'object',
									properties: {
										containsText: {
											type: 'object',
											description: 'The text to search for.',
											properties: {
												text: {
													type: 'string',
													description: 'The string to search for.',
												},
												matchCase: {
													type: 'boolean',
													description:
														'True for case-sensitive matching.',
												},
												searchByRegex: {
													type: 'boolean',
													description:
														'When true, the text value is treated as a regular expression. Backslashes in the pattern must be escaped.',
												},
											},
											required: [],
										},
										replaceText: {
											type: 'string',
											description: 'The replacement text.',
										},
										tabsCriteria: {
											type: 'object',
											description:
												'Limit replacement to specific tabs. Omit to apply to all tabs.',
											properties: {
												tabIds: {
													type: 'array',
													description:
														'The list of tab IDs to apply the replacement to.',
													items: { type: 'string' },
												},
											},
											required: [],
										},
									},
									required: ['containsText', 'replaceText'],
								},
							},
							{
								if: { properties: { requestType: { const: 'insertInlineImage' } } },
								then: {
									type: 'object',
									properties: {
										uri: {
											type: 'string',
											description:
												'The image URL. Must be publicly accessible, under 50MB, max 25 megapixels, in PNG/JPEG/GIF format.',
										},
										objectSize: {
											type: 'object',
											description:
												'Optional size for the image. If omitted, uses default based on resolution.',
											properties: {
												width: {
													type: 'object',
													description: 'The width of the image.',
													properties: {
														magnitude: {
															type: 'number',
															description: 'The width value.',
														},
														unit: {
															type: 'string',
															description: 'The unit of measurement.',
															default: '',
															enum: ['', 'PT'],
														},
													},
													required: [],
												},
												height: {
													type: 'object',
													description: 'The height of the image.',
													properties: {
														magnitude: {
															type: 'number',
															description: 'The height value.',
														},
														unit: {
															type: 'string',
															description: 'The unit of measurement.',
															default: '',
															enum: ['', 'PT'],
														},
													},
													required: [],
												},
											},
											required: [],
										},
										location: {
											type: 'object',
											description:
												'Insert at a specific index. Provide either location or endOfSegmentLocation, not both.',
											properties: {
												index: {
													type: 'number',
													description:
														'The zero-based index in UTF-16 code units.',
												},
												segmentId: {
													type: 'string',
													description:
														'The header, footer, or footnote ID. Empty = document body.',
												},
												tabId: {
													type: 'string',
													description: 'The tab to insert into.',
												},
											},
											required: [],
										},
										endOfSegmentLocation: {
											type: 'object',
											description:
												'Insert at the end of a segment. Provide either location or endOfSegmentLocation, not both.',
											properties: {
												segmentId: {
													type: 'string',
													description:
														'The header, footer, or footnote ID. Empty = document body.',
												},
												tabId: {
													type: 'string',
													description: 'The tab to insert into.',
												},
											},
											required: [],
										},
									},
									required: ['uri'],
								},
							},
							{
								if: { properties: { requestType: { const: 'replaceImage' } } },
								then: {
									type: 'object',
									properties: {
										imageObjectId: {
											type: 'string',
											description:
												'The ID of the existing image to replace. Use getDocument to find image IDs in inlineObjects.',
										},
										uri: {
											type: 'string',
											description:
												'The URL of the new image. Same constraints as insertInlineImage.',
										},
										imageReplaceMethod: {
											type: 'string',
											description: 'The replacement method.',
											default: '',
											enum: ['', 'CENTER_CROP'],
										},
										tabId: {
											type: 'string',
											description:
												'The tab containing the image. Omit for single-tab documents or to target the first tab.',
										},
									},
									required: ['imageObjectId', 'uri'],
								},
							},
							{
								if: { properties: { requestType: { const: 'updateTextStyle' } } },
								then: {
									type: 'object',
									properties: {
										range: {
											type: 'object',
											description: 'The range of text to style.',
											properties: {
												startIndex: {
													type: 'number',
													description:
														'The zero-based start index (inclusive).',
												},
												endIndex: {
													type: 'number',
													description:
														'The zero-based end index (exclusive).',
												},
												segmentId: {
													type: 'string',
													description:
														'The header, footer, or footnote ID. Empty = document body.',
												},
												tabId: {
													type: 'string',
													description: 'The tab containing the text.',
												},
											},
											required: [],
										},
										textStyle: {
											type: 'object',
											description:
												"The styles to apply. Unset fields inherit from the parent style. Use the 'fields' parameter to specify which properties to update.",
											properties: {
												bold: {
													type: 'boolean',
													description: 'Whether the text is bold.',
												},
												italic: {
													type: 'boolean',
													description: 'Whether the text is italicized.',
												},
												underline: {
													type: 'boolean',
													description: 'Whether the text is underlined.',
												},
												strikethrough: {
													type: 'boolean',
													description:
														'Whether the text is struck through.',
												},
												smallCaps: {
													type: 'boolean',
													description:
														'Whether the text is in small capital letters.',
												},
												fontSize: {
													type: 'object',
													description: 'The font size of the text.',
													properties: {
														magnitude: {
															type: 'number',
															description: 'The font size value.',
														},
														unit: {
															type: 'string',
															description: 'The unit of measurement.',
															default: '',
															enum: ['', 'PT'],
														},
													},
													required: [],
												},
												weightedFontFamily: {
													type: 'object',
													description:
														'The font family and weight. If set, fontFamily must be non-empty. Weight defaults to 400 if unset.',
													properties: {
														fontFamily: {
															type: 'string',
															description:
																'The font family name (e.g. Arial, Times New Roman). Unrecognized fonts render as Arial.',
														},
														weight: {
															type: 'number',
															description:
																'The font weight (100-900, multiples of 100). Default 400 (normal). Bold text with weight < 400 renders at 400; bold with 400-699 renders at 700.',
														},
													},
													required: [],
												},
												foregroundColor: {
													type: 'object',
													description:
														'The text color. If set, must contain a color with rgbColor, or be empty for transparent.',
													properties: {
														color: {
															type: 'object',
															description:
																'The color value. Unset means transparent.',
															properties: {
																rgbColor: {
																	type: 'object',
																	description:
																		'The RGB color components.',
																	properties: {
																		red: {
																			type: 'number',
																			description:
																				'Red component (0.0 to 1.0).',
																		},
																		green: {
																			type: 'number',
																			description:
																				'Green component (0.0 to 1.0).',
																		},
																		blue: {
																			type: 'number',
																			description:
																				'Blue component (0.0 to 1.0).',
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
												backgroundColor: {
													type: 'object',
													description:
														'The text background/highlight color.',
													properties: {
														color: {
															type: 'object',
															description:
																'The color value. Unset means transparent.',
															properties: {
																rgbColor: {
																	type: 'object',
																	description:
																		'The RGB color components.',
																	properties: {
																		red: {
																			type: 'number',
																			description:
																				'Red component (0.0 to 1.0).',
																		},
																		green: {
																			type: 'number',
																			description:
																				'Green component (0.0 to 1.0).',
																		},
																		blue: {
																			type: 'number',
																			description:
																				'Blue component (0.0 to 1.0).',
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
												baselineOffset: {
													type: 'string',
													description:
														'Vertical offset for the text. Superscript/subscript text is automatically rendered in a smaller font.',
													default: '',
													enum: ['', 'NONE', 'SUPERSCRIPT', 'SUBSCRIPT'],
												},
												link: {
													type: 'object',
													description:
														"The hyperlink destination. Setting a link changes text color to link default and underlines it. To make text a hyperlink, set this and use fields='link'.",
													properties: {
														url: {
															type: 'string',
															description: 'An external URL.',
														},
														tabId: {
															type: 'string',
															description:
																'The ID of a tab in this document to link to.',
														},
														bookmarkId: {
															type: 'string',
															description:
																'The ID of a bookmark in this document (legacy -- use bookmark instead with includeTabsContent).',
														},
														headingId: {
															type: 'string',
															description:
																'The ID of a heading in this document (legacy -- use heading instead with includeTabsContent).',
														},
														bookmark: {
															type: 'object',
															description:
																'A bookmark link in this document (preferred over bookmarkId when includeTabsContent is true).',
															properties: {
																id: {
																	type: 'string',
																	description:
																		'The ID of the bookmark.',
																},
																tabId: {
																	type: 'string',
																	description:
																		'The ID of the tab containing this bookmark.',
																},
															},
															required: [],
														},
														heading: {
															type: 'object',
															description:
																'A heading link in this document (preferred over headingId when includeTabsContent is true).',
															properties: {
																id: {
																	type: 'string',
																	description:
																		'The ID of the heading.',
																},
																tabId: {
																	type: 'string',
																	description:
																		'The ID of the tab containing this heading.',
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
										fields: {
											type: 'string',
											description:
												"Which text style fields to update (field mask). Use 'link' for links, 'bold' for bold, or '*' for all fields.",
										},
									},
									required: ['range', 'textStyle', 'fields'],
								},
							},
							{
								if: { properties: { requestType: { const: 'createHeader' } } },
								then: {
									type: 'object',
									properties: {
										type: {
											type: 'string',
											description: 'The header type.',
											enum: ['DEFAULT'],
										},
										sectionBreakLocation: {
											type: 'object',
											description:
												'The section to add the header to. Omit for the document-level (first section) header.',
											properties: {
												index: {
													type: 'number',
													description: 'The index of the section break.',
												},
												segmentId: {
													type: 'string',
													description: 'The segment ID.',
												},
												tabId: {
													type: 'string',
													description: 'The tab ID.',
												},
											},
											required: [],
										},
									},
									required: ['type'],
								},
							},
							{
								if: { properties: { requestType: { const: 'createFooter' } } },
								then: {
									type: 'object',
									properties: {
										type: {
											type: 'string',
											description: 'The footer type.',
											enum: ['DEFAULT'],
										},
										sectionBreakLocation: {
											type: 'object',
											description:
												'The section to add the footer to. Omit for the document-level (first section) footer.',
											properties: {
												index: {
													type: 'number',
													description: 'The index of the section break.',
												},
												segmentId: {
													type: 'string',
													description: 'The segment ID.',
												},
												tabId: {
													type: 'string',
													description: 'The tab ID.',
												},
											},
											required: [],
										},
									},
									required: ['type'],
								},
							},
						],
					},
				},
				writeControl: {
					type: 'object',
					description:
						'Optional control over how the write request is applied. Use requiredRevisionId for optimistic locking or targetRevisionId for collaborative merge.',
					properties: {
						requiredRevisionId: {
							type: 'string',
							description:
								'If set, the request fails with 400 if the document has been modified since this revision.',
						},
						targetRevisionId: {
							type: 'string',
							description:
								'If set, changes are merged collaboratively against this revision, similar to how two users editing simultaneously would be resolved.',
						},
					},
					required: [],
				},
			},
			required: ['documentId', 'requests'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				documentId: {
					type: 'string',
					description: 'The ID of the document the updates were applied to.',
				},
				replies: {
					type: 'array',
					description:
						'The reply for each request, in the same order. Some request types return empty replies.',
					items: {
						type: 'object',
						properties: {
							replaceAllText: {
								type: 'object',
								description: 'The result of a replaceAllText request.',
								properties: {
									occurrencesChanged: {
										type: 'number',
										description:
											'The number of occurrences changed by the request.',
									},
								},
								required: [],
							},
							insertInlineImage: {
								type: 'object',
								description: 'The result of an insertInlineImage request.',
								properties: {
									objectId: {
										type: 'string',
										description:
											'The ID of the created InlineObject. Use this to reference or replace the image later.',
									},
								},
								required: [],
							},
							createHeader: {
								type: 'object',
								description: 'The result of a createHeader request.',
								properties: {
									headerId: {
										type: 'string',
										description: 'The ID of the created header.',
									},
								},
								required: [],
							},
							createFooter: {
								type: 'object',
								description: 'The result of a createFooter request.',
								properties: {
									footerId: {
										type: 'string',
										description: 'The ID of the created footer.',
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
					description:
						'The updated write control after applying the request. Contains the revision ID that can be used for subsequent optimistic locking.',
					properties: {
						requiredRevisionId: {
							type: 'string',
							description:
								'The revision ID of the document after the request was applied. Use this for optimistic locking in subsequent batchUpdate calls.',
						},
						targetRevisionId: {
							type: 'string',
							description:
								'The target revision ID of the document after the request was applied.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-docs',
		appVersion: 1,
		endpointName: 'createDocument',
		label: 'Create a document',
		description:
			"Creates a new blank Google Docs document with the given title. The document is created in the user's My Drive root folder.",
		context:
			"---\nname: createDocument\ndescription: Creates a new blank Google Docs document\n---\n\nCreates a new blank Google Docs document with the specified title.\nThe document is always created in the user's My Drive root folder.\nOnly the `title` field is used from the request -- all other fields are ignored\nby the Google Docs API.\n\nTo create a document in a specific folder, use the Drive API `createFile`\nendpoint with `mimeType: application/vnd.google-apps.document` instead.\nTo move an existing document to a folder, use the Drive API.",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/documents'] } },
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				documentId: { type: 'string', description: 'The ID of the document.' },
				revisionId: { type: 'string', description: 'The revision ID of the document.' },
				suggestionsViewMode: {
					type: 'string',
					description: 'The suggestions view mode applied to the document.',
				},
				body: {
					type: 'object',
					description: 'The body content of the document.',
					properties: {
						content: {
							type: 'array',
							description: 'The structural elements that make up the body content.',
							items: {
								type: 'object',
								properties: {
									startIndex: {
										type: 'number',
										description:
											'The zero-based start index in UTF-16 code units.',
									},
									endIndex: {
										type: 'number',
										description:
											'The zero-based end index in UTF-16 code units.',
									},
									sectionBreak: {
										type: 'object',
										description: 'A section break structural element.',
										properties: {
											sectionStyle: {
												type: 'object',
												description:
													'The style of the section after the break.',
												properties: {
													columnSeparatorStyle: {
														type: 'string',
														description:
															'The style of column separators (NONE, BETWEEN_EACH_COLUMN).',
													},
													contentDirection: {
														type: 'string',
														description:
															'The content direction of the section (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
													},
													sectionType: {
														type: 'string',
														description:
															'The type of section (CONTINUOUS, NEXT_PAGE).',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									paragraph: {
										type: 'object',
										description: 'A paragraph structural element.',
										properties: {
											elements: {
												type: 'array',
												description:
													'The inline content elements within the paragraph.',
												items: {
													type: 'object',
													properties: {
														startIndex: {
															type: 'number',
															description:
																'The zero-based start index of the element in UTF-16 code units.',
														},
														endIndex: {
															type: 'number',
															description:
																'The zero-based end index of the element in UTF-16 code units.',
														},
														textRun: {
															type: 'object',
															description:
																'A run of text with uniform styling.',
															properties: {
																content: {
																	type: 'string',
																	description:
																		'The text content of the run.',
																},
																textStyle: {
																	type: 'object',
																	description:
																		'The styling applied to the text run.',
																	properties: {
																		bold: {
																			type: 'boolean',
																			description:
																				'Whether the text is bold.',
																		},
																		italic: {
																			type: 'boolean',
																			description:
																				'Whether the text is italic.',
																		},
																		underline: {
																			type: 'boolean',
																			description:
																				'Whether the text is underlined.',
																		},
																		strikethrough: {
																			type: 'boolean',
																			description:
																				'Whether the text is struck through.',
																		},
																		smallCaps: {
																			type: 'boolean',
																			description:
																				'Whether the text is in small caps.',
																		},
																		backgroundColor: {
																			type: 'object',
																			description:
																				'The background color of the text.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		foregroundColor: {
																			type: 'object',
																			description:
																				'The foreground color of the text.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		fontSize: {
																			type: 'object',
																			description:
																				'The font size of the text.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The font size value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		weightedFontFamily: {
																			type: 'object',
																			description:
																				'The font family and weight of the text.',
																			properties: {
																				fontFamily: {
																					type: 'string',
																					description:
																						'The font family of the text.',
																				},
																				weight: {
																					type: 'number',
																					description:
																						'The font weight (100 to 900).',
																				},
																			},
																			required: [],
																		},
																		baselineOffset: {
																			type: 'string',
																			description:
																				'The vertical offset of the text (NONE, SUPERSCRIPT, SUBSCRIPT).',
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
											paragraphStyle: {
												type: 'object',
												description:
													'The styling applied to the paragraph.',
												properties: {
													namedStyleType: {
														type: 'string',
														description:
															'The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).',
													},
													alignment: {
														type: 'string',
														description:
															'The text alignment (START, CENTER, END, JUSTIFIED).',
													},
													lineSpacing: {
														type: 'number',
														description:
															'The line spacing as a percentage of normal (100 = single).',
													},
													direction: {
														type: 'string',
														description:
															'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
													},
													spacingMode: {
														type: 'string',
														description:
															'The spacing mode (COLLAPSE_LISTS, NEVER_COLLAPSE).',
													},
													spaceAbove: {
														type: 'object',
														description:
															'The amount of extra space above the paragraph.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													spaceBelow: {
														type: 'object',
														description:
															'The amount of extra space below the paragraph.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													borderBetween: {
														type: 'object',
														description:
															'The border between paragraphs in the same group.',
														properties: {
															color: {
																type: 'object',
																description:
																	'The color of the border.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'The RGB color value.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'Red component (0.0 to 1.0).',
																					},
																					green: {
																						type: 'number',
																						description:
																							'Green component (0.0 to 1.0).',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'Blue component (0.0 to 1.0).',
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
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													borderTop: {
														type: 'object',
														description:
															'The top border of the paragraph.',
														properties: {
															color: {
																type: 'object',
																description:
																	'The color of the border.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'The RGB color value.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'Red component (0.0 to 1.0).',
																					},
																					green: {
																						type: 'number',
																						description:
																							'Green component (0.0 to 1.0).',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'Blue component (0.0 to 1.0).',
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
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													borderBottom: {
														type: 'object',
														description:
															'The bottom border of the paragraph.',
														properties: {
															color: {
																type: 'object',
																description:
																	'The color of the border.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'The RGB color value.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'Red component (0.0 to 1.0).',
																					},
																					green: {
																						type: 'number',
																						description:
																							'Green component (0.0 to 1.0).',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'Blue component (0.0 to 1.0).',
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
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													borderLeft: {
														type: 'object',
														description:
															'The left border of the paragraph.',
														properties: {
															color: {
																type: 'object',
																description:
																	'The color of the border.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'The RGB color value.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'Red component (0.0 to 1.0).',
																					},
																					green: {
																						type: 'number',
																						description:
																							'Green component (0.0 to 1.0).',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'Blue component (0.0 to 1.0).',
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
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													borderRight: {
														type: 'object',
														description:
															'The right border of the paragraph.',
														properties: {
															color: {
																type: 'object',
																description:
																	'The color of the border.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'The RGB color value.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'Red component (0.0 to 1.0).',
																					},
																					green: {
																						type: 'number',
																						description:
																							'Green component (0.0 to 1.0).',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'Blue component (0.0 to 1.0).',
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
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude value.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit (PT = points).',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													indentFirstLine: {
														type: 'object',
														description:
															'The first line indentation of the paragraph.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													indentStart: {
														type: 'object',
														description:
															'The start-side indentation of the paragraph.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													indentEnd: {
														type: 'object',
														description:
															'The end-side indentation of the paragraph.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													keepLinesTogether: {
														type: 'boolean',
														description:
															'Whether all lines of the paragraph should be laid out on the same page.',
													},
													keepWithNext: {
														type: 'boolean',
														description:
															'Whether at least part of the paragraph should be on the same page as the next.',
													},
													avoidWidowAndOrphan: {
														type: 'boolean',
														description:
															'Whether to avoid widows and orphans for the paragraph.',
													},
													shading: {
														type: 'object',
														description:
															'The shading of the paragraph.',
														properties: {
															backgroundColor: {
																type: 'object',
																description:
																	'The background color of the shading.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'The RGB color value.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'Red component (0.0 to 1.0).',
																					},
																					green: {
																						type: 'number',
																						description:
																							'Green component (0.0 to 1.0).',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'Blue component (0.0 to 1.0).',
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
													pageBreakBefore: {
														type: 'boolean',
														description:
															'Whether to insert a page break before the paragraph.',
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
					},
					required: [],
				},
				documentStyle: {
					type: 'object',
					description: 'The style of the document.',
					properties: {
						background: {
							type: 'object',
							description: 'The background of the document.',
							properties: {
								color: {
									type: 'object',
									description: 'The background color.',
									properties: {
										color: {
											type: 'object',
											description: 'The color value.',
											properties: {
												rgbColor: {
													type: 'object',
													description: 'The RGB color value.',
													properties: {
														red: {
															type: 'number',
															description:
																'Red component (0.0 to 1.0).',
														},
														green: {
															type: 'number',
															description:
																'Green component (0.0 to 1.0).',
														},
														blue: {
															type: 'number',
															description:
																'Blue component (0.0 to 1.0).',
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
						pageNumberStart: {
							type: 'number',
							description: 'The page number from which to start counting.',
						},
						marginTop: {
							type: 'object',
							description: 'The top page margin.',
							properties: {
								magnitude: { type: 'number', description: 'The magnitude value.' },
								unit: { type: 'string', description: 'The unit (PT = points).' },
							},
							required: [],
						},
						marginBottom: {
							type: 'object',
							description: 'The bottom page margin.',
							properties: {
								magnitude: { type: 'number', description: 'The magnitude value.' },
								unit: { type: 'string', description: 'The unit (PT = points).' },
							},
							required: [],
						},
						marginRight: {
							type: 'object',
							description: 'The right page margin.',
							properties: {
								magnitude: { type: 'number', description: 'The magnitude value.' },
								unit: { type: 'string', description: 'The unit (PT = points).' },
							},
							required: [],
						},
						marginLeft: {
							type: 'object',
							description: 'The left page margin.',
							properties: {
								magnitude: { type: 'number', description: 'The magnitude value.' },
								unit: { type: 'string', description: 'The unit (PT = points).' },
							},
							required: [],
						},
						pageSize: {
							type: 'object',
							description: 'The size of the page in the document.',
							properties: {
								height: {
									type: 'object',
									description: 'The height of the page.',
									properties: {
										magnitude: {
											type: 'number',
											description: 'The magnitude value.',
										},
										unit: {
											type: 'string',
											description: 'The unit (PT = points).',
										},
									},
									required: [],
								},
								width: {
									type: 'object',
									description: 'The width of the page.',
									properties: {
										magnitude: {
											type: 'number',
											description: 'The magnitude value.',
										},
										unit: {
											type: 'string',
											description: 'The unit (PT = points).',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						marginHeader: {
							type: 'object',
							description: 'The header margin of the document.',
							properties: {
								magnitude: { type: 'number', description: 'The magnitude value.' },
								unit: { type: 'string', description: 'The unit (PT = points).' },
							},
							required: [],
						},
						marginFooter: {
							type: 'object',
							description: 'The footer margin of the document.',
							properties: {
								magnitude: { type: 'number', description: 'The magnitude value.' },
								unit: { type: 'string', description: 'The unit (PT = points).' },
							},
							required: [],
						},
						useCustomHeaderFooterMargins: {
							type: 'boolean',
							description: 'Whether to use custom header and footer margins.',
						},
						documentFormat: {
							type: 'object',
							description: 'The format of the document.',
							properties: {
								documentMode: {
									type: 'string',
									description: 'The document mode (PAGES, PAGELESS).',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				namedStyles: {
					type: 'object',
					description: 'The named styles of the document.',
					properties: {
						styles: {
							type: 'array',
							description: 'The named styles in the document.',
							items: {
								type: 'object',
								properties: {
									namedStyleType: {
										type: 'string',
										description:
											'The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).',
									},
									textStyle: {
										type: 'object',
										description:
											'The text style properties for this named style.',
										properties: {
											bold: {
												type: 'boolean',
												description: 'Whether the text is bold.',
											},
											italic: {
												type: 'boolean',
												description: 'Whether the text is italic.',
											},
											underline: {
												type: 'boolean',
												description: 'Whether the text is underlined.',
											},
											strikethrough: {
												type: 'boolean',
												description: 'Whether the text is struck through.',
											},
											smallCaps: {
												type: 'boolean',
												description: 'Whether the text is in small caps.',
											},
											backgroundColor: {
												type: 'object',
												description: 'The background color of the text.',
												properties: {
													color: {
														type: 'object',
														description: 'The color value.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'The RGB color value.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'Red component (0.0 to 1.0).',
																	},
																	green: {
																		type: 'number',
																		description:
																			'Green component (0.0 to 1.0).',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'Blue component (0.0 to 1.0).',
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
											foregroundColor: {
												type: 'object',
												description: 'The foreground color of the text.',
												properties: {
													color: {
														type: 'object',
														description: 'The color value.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'The RGB color value.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'Red component (0.0 to 1.0).',
																	},
																	green: {
																		type: 'number',
																		description:
																			'Green component (0.0 to 1.0).',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'Blue component (0.0 to 1.0).',
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
											fontSize: {
												type: 'object',
												description: 'The font size of the text.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The font size value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											weightedFontFamily: {
												type: 'object',
												description:
													'The font family and weight of the text.',
												properties: {
													fontFamily: {
														type: 'string',
														description: 'The font family of the text.',
													},
													weight: {
														type: 'number',
														description:
															'The font weight (100 to 900).',
													},
												},
												required: [],
											},
											baselineOffset: {
												type: 'string',
												description:
													'The vertical offset of the text (NONE, SUPERSCRIPT, SUBSCRIPT).',
											},
										},
										required: [],
									},
									paragraphStyle: {
										type: 'object',
										description:
											'The paragraph style properties for this named style.',
										properties: {
											namedStyleType: {
												type: 'string',
												description:
													'The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).',
											},
											alignment: {
												type: 'string',
												description:
													'The text alignment (START, CENTER, END, JUSTIFIED).',
											},
											lineSpacing: {
												type: 'number',
												description:
													'The line spacing as a percentage of normal (100 = single).',
											},
											direction: {
												type: 'string',
												description:
													'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
											},
											spacingMode: {
												type: 'string',
												description:
													'The spacing mode (COLLAPSE_LISTS, NEVER_COLLAPSE).',
											},
											spaceAbove: {
												type: 'object',
												description:
													'The amount of extra space above the paragraph.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											spaceBelow: {
												type: 'object',
												description:
													'The amount of extra space below the paragraph.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											borderBetween: {
												type: 'object',
												description:
													'The border between paragraphs in the same group.',
												properties: {
													color: {
														type: 'object',
														description: 'The color of the border.',
														properties: {
															color: {
																type: 'object',
																description: 'The color value.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'The RGB color value.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'Red component (0.0 to 1.0).',
																			},
																			green: {
																				type: 'number',
																				description:
																					'Green component (0.0 to 1.0).',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'Blue component (0.0 to 1.0).',
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
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											borderTop: {
												type: 'object',
												description: 'The top border of the paragraph.',
												properties: {
													color: {
														type: 'object',
														description: 'The color of the border.',
														properties: {
															color: {
																type: 'object',
																description: 'The color value.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'The RGB color value.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'Red component (0.0 to 1.0).',
																			},
																			green: {
																				type: 'number',
																				description:
																					'Green component (0.0 to 1.0).',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'Blue component (0.0 to 1.0).',
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
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											borderBottom: {
												type: 'object',
												description: 'The bottom border of the paragraph.',
												properties: {
													color: {
														type: 'object',
														description: 'The color of the border.',
														properties: {
															color: {
																type: 'object',
																description: 'The color value.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'The RGB color value.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'Red component (0.0 to 1.0).',
																			},
																			green: {
																				type: 'number',
																				description:
																					'Green component (0.0 to 1.0).',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'Blue component (0.0 to 1.0).',
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
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											borderLeft: {
												type: 'object',
												description: 'The left border of the paragraph.',
												properties: {
													color: {
														type: 'object',
														description: 'The color of the border.',
														properties: {
															color: {
																type: 'object',
																description: 'The color value.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'The RGB color value.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'Red component (0.0 to 1.0).',
																			},
																			green: {
																				type: 'number',
																				description:
																					'Green component (0.0 to 1.0).',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'Blue component (0.0 to 1.0).',
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
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											borderRight: {
												type: 'object',
												description: 'The right border of the paragraph.',
												properties: {
													color: {
														type: 'object',
														description: 'The color of the border.',
														properties: {
															color: {
																type: 'object',
																description: 'The color value.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'The RGB color value.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'Red component (0.0 to 1.0).',
																			},
																			green: {
																				type: 'number',
																				description:
																					'Green component (0.0 to 1.0).',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'Blue component (0.0 to 1.0).',
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
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											indentFirstLine: {
												type: 'object',
												description:
													'The first line indentation of the paragraph.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											indentStart: {
												type: 'object',
												description:
													'The start-side indentation of the paragraph.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											indentEnd: {
												type: 'object',
												description:
													'The end-side indentation of the paragraph.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											keepLinesTogether: {
												type: 'boolean',
												description:
													'Whether all lines of the paragraph should be laid out on the same page.',
											},
											keepWithNext: {
												type: 'boolean',
												description:
													'Whether at least part of the paragraph should be on the same page as the next.',
											},
											avoidWidowAndOrphan: {
												type: 'boolean',
												description:
													'Whether to avoid widows and orphans for the paragraph.',
											},
											shading: {
												type: 'object',
												description: 'The shading of the paragraph.',
												properties: {
													backgroundColor: {
														type: 'object',
														description:
															'The background color of the shading.',
														properties: {
															color: {
																type: 'object',
																description: 'The color value.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'The RGB color value.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'Red component (0.0 to 1.0).',
																			},
																			green: {
																				type: 'number',
																				description:
																					'Green component (0.0 to 1.0).',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'Blue component (0.0 to 1.0).',
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
											pageBreakBefore: {
												type: 'boolean',
												description:
													'Whether to insert a page break before the paragraph.',
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
				tabs: {
					type: 'array',
					description: 'The tabs that make up the document.',
					items: {
						type: 'object',
						properties: {
							tabProperties: {
								type: 'object',
								description: 'The properties of the tab.',
								properties: {
									tabId: { type: 'string', description: 'The ID of the tab.' },
									index: {
										type: 'number',
										description: 'The zero-based index of the tab.',
									},
								},
								required: [],
							},
							documentTab: {
								type: 'object',
								description:
									'The tab-level document content, mirroring the top-level body, documentStyle, and namedStyles structure.',
								properties: {
									body: {
										type: 'object',
										description: 'The body content of this tab.',
										properties: {
											content: {
												type: 'array',
												description:
													'The structural elements that make up the body content.',
												items: {
													type: 'object',
													properties: {
														startIndex: {
															type: 'number',
															description:
																'The zero-based start index in UTF-16 code units.',
														},
														endIndex: {
															type: 'number',
															description:
																'The zero-based end index in UTF-16 code units.',
														},
														sectionBreak: {
															type: 'object',
															description:
																'A section break structural element.',
															properties: {
																sectionStyle: {
																	type: 'object',
																	description:
																		'The style of the section after the break.',
																	properties: {
																		columnSeparatorStyle: {
																			type: 'string',
																			description:
																				'The style of column separators (NONE, BETWEEN_EACH_COLUMN).',
																		},
																		contentDirection: {
																			type: 'string',
																			description:
																				'The content direction of the section (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
																		},
																		sectionType: {
																			type: 'string',
																			description:
																				'The type of section (CONTINUOUS, NEXT_PAGE).',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														paragraph: {
															type: 'object',
															description:
																'A paragraph structural element.',
															properties: {
																elements: {
																	type: 'array',
																	description:
																		'The inline content elements within the paragraph.',
																	items: {
																		type: 'object',
																		properties: {
																			startIndex: {
																				type: 'number',
																				description:
																					'The zero-based start index of the element in UTF-16 code units.',
																			},
																			endIndex: {
																				type: 'number',
																				description:
																					'The zero-based end index of the element in UTF-16 code units.',
																			},
																			textRun: {
																				type: 'object',
																				description:
																					'A run of text with uniform styling.',
																				properties: {
																					content: {
																						type: 'string',
																						description:
																							'The text content of the run.',
																					},
																					textStyle: {
																						type: 'object',
																						description:
																							'The styling applied to the text run.',
																						properties:
																							{
																								bold: {
																									type: 'boolean',
																									description:
																										'Whether the text is bold.',
																								},
																								italic: {
																									type: 'boolean',
																									description:
																										'Whether the text is italic.',
																								},
																								underline:
																									{
																										type: 'boolean',
																										description:
																											'Whether the text is underlined.',
																									},
																								strikethrough:
																									{
																										type: 'boolean',
																										description:
																											'Whether the text is struck through.',
																									},
																								smallCaps:
																									{
																										type: 'boolean',
																										description:
																											'Whether the text is in small caps.',
																									},
																								backgroundColor:
																									{
																										type: 'object',
																										description:
																											'The background color of the text.',
																										properties:
																											{
																												color: {
																													type: 'object',
																													description:
																														'The color value.',
																													properties:
																														{
																															rgbColor:
																																{
																																	type: 'object',
																																	description:
																																		'The RGB color value.',
																																	properties:
																																		{
																																			red: {
																																				type: 'number',
																																				description:
																																					'Red component (0.0 to 1.0).',
																																			},
																																			green: {
																																				type: 'number',
																																				description:
																																					'Green component (0.0 to 1.0).',
																																			},
																																			blue: {
																																				type: 'number',
																																				description:
																																					'Blue component (0.0 to 1.0).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																														},
																													required:
																														[],
																												},
																											},
																										required:
																											[],
																									},
																								foregroundColor:
																									{
																										type: 'object',
																										description:
																											'The foreground color of the text.',
																										properties:
																											{
																												color: {
																													type: 'object',
																													description:
																														'The color value.',
																													properties:
																														{
																															rgbColor:
																																{
																																	type: 'object',
																																	description:
																																		'The RGB color value.',
																																	properties:
																																		{
																																			red: {
																																				type: 'number',
																																				description:
																																					'Red component (0.0 to 1.0).',
																																			},
																																			green: {
																																				type: 'number',
																																				description:
																																					'Green component (0.0 to 1.0).',
																																			},
																																			blue: {
																																				type: 'number',
																																				description:
																																					'Blue component (0.0 to 1.0).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																														},
																													required:
																														[],
																												},
																											},
																										required:
																											[],
																									},
																								fontSize:
																									{
																										type: 'object',
																										description:
																											'The font size of the text.',
																										properties:
																											{
																												magnitude:
																													{
																														type: 'number',
																														description:
																															'The font size value.',
																													},
																												unit: {
																													type: 'string',
																													description:
																														'The unit (PT = points).',
																												},
																											},
																										required:
																											[],
																									},
																								weightedFontFamily:
																									{
																										type: 'object',
																										description:
																											'The font family and weight of the text.',
																										properties:
																											{
																												fontFamily:
																													{
																														type: 'string',
																														description:
																															'The font family of the text.',
																													},
																												weight: {
																													type: 'number',
																													description:
																														'The font weight (100 to 900).',
																												},
																											},
																										required:
																											[],
																									},
																								baselineOffset:
																									{
																										type: 'string',
																										description:
																											'The vertical offset of the text (NONE, SUPERSCRIPT, SUBSCRIPT).',
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																},
																paragraphStyle: {
																	type: 'object',
																	description:
																		'The styling applied to the paragraph.',
																	properties: {
																		namedStyleType: {
																			type: 'string',
																			description:
																				'The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).',
																		},
																		alignment: {
																			type: 'string',
																			description:
																				'The text alignment (START, CENTER, END, JUSTIFIED).',
																		},
																		lineSpacing: {
																			type: 'number',
																			description:
																				'The line spacing as a percentage of normal (100 = single).',
																		},
																		direction: {
																			type: 'string',
																			description:
																				'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
																		},
																		spacingMode: {
																			type: 'string',
																			description:
																				'The spacing mode (COLLAPSE_LISTS, NEVER_COLLAPSE).',
																		},
																		spaceAbove: {
																			type: 'object',
																			description:
																				'The amount of extra space above the paragraph.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		spaceBelow: {
																			type: 'object',
																			description:
																				'The amount of extra space below the paragraph.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		borderBetween: {
																			type: 'object',
																			description:
																				'The border between paragraphs in the same group.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color of the border.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'The RGB color value.',
																											properties:
																												{
																													red: {
																														type: 'number',
																														description:
																															'Red component (0.0 to 1.0).',
																													},
																													green: {
																														type: 'number',
																														description:
																															'Green component (0.0 to 1.0).',
																													},
																													blue: {
																														type: 'number',
																														description:
																															'Blue component (0.0 to 1.0).',
																													},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		borderTop: {
																			type: 'object',
																			description:
																				'The top border of the paragraph.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color of the border.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'The RGB color value.',
																											properties:
																												{
																													red: {
																														type: 'number',
																														description:
																															'Red component (0.0 to 1.0).',
																													},
																													green: {
																														type: 'number',
																														description:
																															'Green component (0.0 to 1.0).',
																													},
																													blue: {
																														type: 'number',
																														description:
																															'Blue component (0.0 to 1.0).',
																													},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		borderBottom: {
																			type: 'object',
																			description:
																				'The bottom border of the paragraph.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color of the border.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'The RGB color value.',
																											properties:
																												{
																													red: {
																														type: 'number',
																														description:
																															'Red component (0.0 to 1.0).',
																													},
																													green: {
																														type: 'number',
																														description:
																															'Green component (0.0 to 1.0).',
																													},
																													blue: {
																														type: 'number',
																														description:
																															'Blue component (0.0 to 1.0).',
																													},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		borderLeft: {
																			type: 'object',
																			description:
																				'The left border of the paragraph.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color of the border.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'The RGB color value.',
																											properties:
																												{
																													red: {
																														type: 'number',
																														description:
																															'Red component (0.0 to 1.0).',
																													},
																													green: {
																														type: 'number',
																														description:
																															'Green component (0.0 to 1.0).',
																													},
																													blue: {
																														type: 'number',
																														description:
																															'Blue component (0.0 to 1.0).',
																													},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		borderRight: {
																			type: 'object',
																			description:
																				'The right border of the paragraph.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color of the border.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'The RGB color value.',
																											properties:
																												{
																													red: {
																														type: 'number',
																														description:
																															'Red component (0.0 to 1.0).',
																													},
																													green: {
																														type: 'number',
																														description:
																															'Green component (0.0 to 1.0).',
																													},
																													blue: {
																														type: 'number',
																														description:
																															'Blue component (0.0 to 1.0).',
																													},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude value.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit (PT = points).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		indentFirstLine: {
																			type: 'object',
																			description:
																				'The first line indentation of the paragraph.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		indentStart: {
																			type: 'object',
																			description:
																				'The start-side indentation of the paragraph.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		indentEnd: {
																			type: 'object',
																			description:
																				'The end-side indentation of the paragraph.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		keepLinesTogether: {
																			type: 'boolean',
																			description:
																				'Whether all lines of the paragraph should be laid out on the same page.',
																		},
																		keepWithNext: {
																			type: 'boolean',
																			description:
																				'Whether at least part of the paragraph should be on the same page as the next.',
																		},
																		avoidWidowAndOrphan: {
																			type: 'boolean',
																			description:
																				'Whether to avoid widows and orphans for the paragraph.',
																		},
																		shading: {
																			type: 'object',
																			description:
																				'The shading of the paragraph.',
																			properties: {
																				backgroundColor: {
																					type: 'object',
																					description:
																						'The background color of the shading.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'The RGB color value.',
																											properties:
																												{
																													red: {
																														type: 'number',
																														description:
																															'Red component (0.0 to 1.0).',
																													},
																													green: {
																														type: 'number',
																														description:
																															'Green component (0.0 to 1.0).',
																													},
																													blue: {
																														type: 'number',
																														description:
																															'Blue component (0.0 to 1.0).',
																													},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		pageBreakBefore: {
																			type: 'boolean',
																			description:
																				'Whether to insert a page break before the paragraph.',
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
										},
										required: [],
									},
									documentStyle: {
										type: 'object',
										description: 'The document style for this tab.',
										properties: {
											background: {
												type: 'object',
												description: 'The background of the document.',
												properties: {
													color: {
														type: 'object',
														description: 'The background color.',
														properties: {
															color: {
																type: 'object',
																description: 'The color value.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'The RGB color value.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'Red component (0.0 to 1.0).',
																			},
																			green: {
																				type: 'number',
																				description:
																					'Green component (0.0 to 1.0).',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'Blue component (0.0 to 1.0).',
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
											pageNumberStart: {
												type: 'number',
												description:
													'The page number from which to start counting.',
											},
											marginTop: {
												type: 'object',
												description: 'The top page margin.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											marginBottom: {
												type: 'object',
												description: 'The bottom page margin.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											marginRight: {
												type: 'object',
												description: 'The right page margin.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											marginLeft: {
												type: 'object',
												description: 'The left page margin.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											pageSize: {
												type: 'object',
												description:
													'The size of the page in the document.',
												properties: {
													height: {
														type: 'object',
														description: 'The height of the page.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													width: {
														type: 'object',
														description: 'The width of the page.',
														properties: {
															magnitude: {
																type: 'number',
																description: 'The magnitude value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											marginHeader: {
												type: 'object',
												description: 'The header margin of the document.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											marginFooter: {
												type: 'object',
												description: 'The footer margin of the document.',
												properties: {
													magnitude: {
														type: 'number',
														description: 'The magnitude value.',
													},
													unit: {
														type: 'string',
														description: 'The unit (PT = points).',
													},
												},
												required: [],
											},
											useCustomHeaderFooterMargins: {
												type: 'boolean',
												description:
													'Whether to use custom header and footer margins.',
											},
											documentFormat: {
												type: 'object',
												description: 'The format of the document.',
												properties: {
													documentMode: {
														type: 'string',
														description:
															'The document mode (PAGES, PAGELESS).',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									namedStyles: {
										type: 'object',
										description: 'The named styles for this tab.',
										properties: {
											styles: {
												type: 'array',
												description: 'The named styles in the document.',
												items: {
													type: 'object',
													properties: {
														namedStyleType: {
															type: 'string',
															description:
																'The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).',
														},
														textStyle: {
															type: 'object',
															description:
																'The text style properties for this named style.',
															properties: {
																bold: {
																	type: 'boolean',
																	description:
																		'Whether the text is bold.',
																},
																italic: {
																	type: 'boolean',
																	description:
																		'Whether the text is italic.',
																},
																underline: {
																	type: 'boolean',
																	description:
																		'Whether the text is underlined.',
																},
																strikethrough: {
																	type: 'boolean',
																	description:
																		'Whether the text is struck through.',
																},
																smallCaps: {
																	type: 'boolean',
																	description:
																		'Whether the text is in small caps.',
																},
																backgroundColor: {
																	type: 'object',
																	description:
																		'The background color of the text.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color value.',
																			properties: {
																				rgbColor: {
																					type: 'object',
																					description:
																						'The RGB color value.',
																					properties: {
																						red: {
																							type: 'number',
																							description:
																								'Red component (0.0 to 1.0).',
																						},
																						green: {
																							type: 'number',
																							description:
																								'Green component (0.0 to 1.0).',
																						},
																						blue: {
																							type: 'number',
																							description:
																								'Blue component (0.0 to 1.0).',
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
																foregroundColor: {
																	type: 'object',
																	description:
																		'The foreground color of the text.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color value.',
																			properties: {
																				rgbColor: {
																					type: 'object',
																					description:
																						'The RGB color value.',
																					properties: {
																						red: {
																							type: 'number',
																							description:
																								'Red component (0.0 to 1.0).',
																						},
																						green: {
																							type: 'number',
																							description:
																								'Green component (0.0 to 1.0).',
																						},
																						blue: {
																							type: 'number',
																							description:
																								'Blue component (0.0 to 1.0).',
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
																fontSize: {
																	type: 'object',
																	description:
																		'The font size of the text.',
																	properties: {
																		magnitude: {
																			type: 'number',
																			description:
																				'The font size value.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The unit (PT = points).',
																		},
																	},
																	required: [],
																},
																weightedFontFamily: {
																	type: 'object',
																	description:
																		'The font family and weight of the text.',
																	properties: {
																		fontFamily: {
																			type: 'string',
																			description:
																				'The font family of the text.',
																		},
																		weight: {
																			type: 'number',
																			description:
																				'The font weight (100 to 900).',
																		},
																	},
																	required: [],
																},
																baselineOffset: {
																	type: 'string',
																	description:
																		'The vertical offset of the text (NONE, SUPERSCRIPT, SUBSCRIPT).',
																},
															},
															required: [],
														},
														paragraphStyle: {
															type: 'object',
															description:
																'The paragraph style properties for this named style.',
															properties: {
																namedStyleType: {
																	type: 'string',
																	description:
																		'The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).',
																},
																alignment: {
																	type: 'string',
																	description:
																		'The text alignment (START, CENTER, END, JUSTIFIED).',
																},
																lineSpacing: {
																	type: 'number',
																	description:
																		'The line spacing as a percentage of normal (100 = single).',
																},
																direction: {
																	type: 'string',
																	description:
																		'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
																},
																spacingMode: {
																	type: 'string',
																	description:
																		'The spacing mode (COLLAPSE_LISTS, NEVER_COLLAPSE).',
																},
																spaceAbove: {
																	type: 'object',
																	description:
																		'The amount of extra space above the paragraph.',
																	properties: {
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude value.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The unit (PT = points).',
																		},
																	},
																	required: [],
																},
																spaceBelow: {
																	type: 'object',
																	description:
																		'The amount of extra space below the paragraph.',
																	properties: {
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude value.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The unit (PT = points).',
																		},
																	},
																	required: [],
																},
																borderBetween: {
																	type: 'object',
																	description:
																		'The border between paragraphs in the same group.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color of the border.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																borderTop: {
																	type: 'object',
																	description:
																		'The top border of the paragraph.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color of the border.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																borderBottom: {
																	type: 'object',
																	description:
																		'The bottom border of the paragraph.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color of the border.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																borderLeft: {
																	type: 'object',
																	description:
																		'The left border of the paragraph.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color of the border.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																borderRight: {
																	type: 'object',
																	description:
																		'The right border of the paragraph.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color of the border.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude value.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit (PT = points).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																indentFirstLine: {
																	type: 'object',
																	description:
																		'The first line indentation of the paragraph.',
																	properties: {
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude value.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The unit (PT = points).',
																		},
																	},
																	required: [],
																},
																indentStart: {
																	type: 'object',
																	description:
																		'The start-side indentation of the paragraph.',
																	properties: {
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude value.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The unit (PT = points).',
																		},
																	},
																	required: [],
																},
																indentEnd: {
																	type: 'object',
																	description:
																		'The end-side indentation of the paragraph.',
																	properties: {
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude value.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The unit (PT = points).',
																		},
																	},
																	required: [],
																},
																keepLinesTogether: {
																	type: 'boolean',
																	description:
																		'Whether all lines of the paragraph should be laid out on the same page.',
																},
																keepWithNext: {
																	type: 'boolean',
																	description:
																		'Whether at least part of the paragraph should be on the same page as the next.',
																},
																avoidWidowAndOrphan: {
																	type: 'boolean',
																	description:
																		'Whether to avoid widows and orphans for the paragraph.',
																},
																shading: {
																	type: 'object',
																	description:
																		'The shading of the paragraph.',
																	properties: {
																		backgroundColor: {
																			type: 'object',
																			description:
																				'The background color of the shading.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
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
																pageBreakBefore: {
																	type: 'boolean',
																	description:
																		'Whether to insert a page break before the paragraph.',
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
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-docs',
		appVersion: 1,
		endpointName: 'getDocument',
		label: 'Get a document',
		description:
			'Retrieves a document by its ID, optionally including tab content and controlling how suggestions appear.',
		context:
			"---\nname: getDocument\ndescription: Retrieves the full content and metadata of a Google Docs document\n---\n\nFetches a single Google Docs document by ID. Returns the document structure\nincluding body content, headers, footers, footnotes, and inline objects.\n\nUse `includeTabsContent: true` when the document has multiple tabs -- otherwise\nonly the first tab's content is returned in the top-level `body` field.\n\nUse `suggestionsViewMode` to control how tracked changes appear:\n- `SUGGESTIONS_INLINE` -- all pending suggestions shown inline\n- `PREVIEW_SUGGESTIONS_ACCEPTED` -- document as if all suggestions accepted\n- `PREVIEW_WITHOUT_SUGGESTIONS` -- document with all suggestions removed\n\nUse `filter` to select which type of inline objects to collect into the\n`inlineObjectsArray` output field. Only one type is collected per call:\n- `image` (default) -- collects embedded images\n- `drawing` -- collects linked drawings\n- `chart` -- collects linked charts (from Google Sheets)\n\nLimitation: only linked charts (with a Sheets reference) and linked drawings\nare reliably classified. Unlinked charts and drawings are indistinguishable\nfrom plain images in the Google Docs API response and will appear under\nthe `image` filter.",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/documents.readonly'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				documentId: {
					type: 'string',
					description:
						'The ID of the Google Docs document to retrieve. You can find this in the document URL: docs.google.com/document/d/{documentId}/edit',
				},
				includeTabsContent: {
					type: 'boolean',
					description:
						'When true, document content is returned in the tabs field instead of the top-level body field. Set to true if the document has multiple tabs.',
					default: false,
				},
				suggestionsViewMode: {
					type: 'string',
					description:
						"Controls how suggestions (tracked changes) appear in the returned content. When omitted, defaults to the mode appropriate for the caller's access level.",
					default: '',
					enum: [
						'',
						'SUGGESTIONS_INLINE',
						'PREVIEW_SUGGESTIONS_ACCEPTED',
						'PREVIEW_WITHOUT_SUGGESTIONS',
					],
				},
				filter: {
					type: 'string',
					description:
						'Selects which type of inline objects to collect into the inlineObjectsArray output field. Only one type is collected per call. Default: Image. Note: only linked charts (from Sheets) and linked drawings are reliably classified; unlinked charts and drawings appear as images due to a Google Docs API limitation.',
					'x-advanced': true,
					enum: ['image', 'drawing', 'chart'],
				},
			},
			required: ['documentId', 'filter'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				revisionId: {
					type: 'string',
					description:
						'The revision ID of the document. Can be used in batchUpdate requests for optimistic locking. Valid for 24 hours.',
				},
				suggestionsViewMode: {
					type: 'string',
					description: 'The suggestions view mode applied to the returned document.',
				},
				documentId: { type: 'string', description: 'The ID of the document.' },
				body: {
					type: 'object',
					description:
						'The main body content of the document. Legacy field -- empty when includeTabsContent is true; use tabs[].documentTab.body instead.',
					properties: {
						content: {
							type: 'array',
							description: 'The structural elements composing the body.',
							items: {
								type: 'object',
								properties: {
									endIndex: {
										type: 'number',
										description:
											'The zero-based end index in UTF-16 code units.',
									},
									startIndex: {
										type: 'number',
										description:
											'The zero-based start index in UTF-16 code units.',
									},
									sectionBreak: {
										type: 'object',
										description: 'A section break element.',
										properties: {
											sectionStyle: {
												type: 'object',
												description: 'The style of the section.',
												properties: {
													columnSeparatorStyle: {
														type: 'string',
														description:
															'The style of column separators (NONE, BETWEEN_EACH_COLUMN).',
													},
													contentDirection: {
														type: 'string',
														description:
															'The content direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
													},
													sectionType: {
														type: 'string',
														description:
															'The type of section (CONTINUOUS, NEXT_PAGE).',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									paragraph: {
										type: 'object',
										description: 'A paragraph element in the document.',
										properties: {
											bullet: {
												type: 'object',
												description:
													'The bullet properties for the paragraph.',
												properties: {
													listId: {
														type: 'string',
														description:
															'The ID of the list this paragraph belongs to.',
													},
													textStyle: {
														type: 'object',
														description:
															'The text style properties for this run.',
														properties: {
															underline: {
																type: 'boolean',
																description:
																	'Whether the text is underlined.',
															},
															backgroundColor: {
																type: 'object',
																description:
																	'The background color.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															foregroundColor: {
																type: 'object',
																description:
																	'The foreground (text) color.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'The RGB color value.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'Red component (0.0 to 1.0).',
																					},
																					green: {
																						type: 'number',
																						description:
																							'Green component (0.0 to 1.0).',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'Blue component (0.0 to 1.0).',
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
															fontSize: {
																type: 'object',
																description:
																	'The size of the font.',
																properties: {
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude of the measurement.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													nestingLevel: {
														type: 'number',
														description:
															'The nesting level of this paragraph in the list (0 = top level).',
													},
												},
												required: [],
											},
											elements: {
												type: 'array',
												description:
													'The content elements within the paragraph.',
												items: {
													type: 'object',
													properties: {
														startIndex: {
															type: 'number',
															description:
																'The zero-based start index in UTF-16 code units.',
														},
														endIndex: {
															type: 'number',
															description:
																'The zero-based end index in UTF-16 code units.',
														},
														textRun: {
															type: 'object',
															description:
																'A run of text with the same styling.',
															properties: {
																content: {
																	type: 'string',
																	description:
																		'The text content of the run.',
																},
																textStyle: {
																	type: 'object',
																	description:
																		'The text style properties for this run.',
																	properties: {
																		backgroundColor: {
																			type: 'object',
																			description:
																				'The background color.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		foregroundColor: {
																			type: 'object',
																			description:
																				'The foreground (text) color.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'The RGB color value.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'Red component (0.0 to 1.0).',
																									},
																									green: {
																										type: 'number',
																										description:
																											'Green component (0.0 to 1.0).',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'Blue component (0.0 to 1.0).',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		bold: {
																			type: 'boolean',
																			description:
																				'Whether the text is bold.',
																		},
																		fontSize: {
																			type: 'object',
																			description:
																				'The size of the font.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude of the measurement.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		italic: {
																			type: 'boolean',
																			description:
																				'Whether the text is italicized.',
																		},
																		underline: {
																			type: 'boolean',
																			description:
																				'Whether the text is underlined.',
																		},
																		strikethrough: {
																			type: 'boolean',
																			description:
																				'Whether the text is struck through.',
																		},
																		weightedFontFamily: {
																			type: 'object',
																			description:
																				'The font family and weight of the text.',
																			properties: {
																				fontFamily: {
																					type: 'string',
																					description:
																						'The font family name (e.g. Arial, Times New Roman).',
																				},
																				weight: {
																					type: 'number',
																					description:
																						'The font weight (100-900, multiples of 100). Default is 400 (normal).',
																				},
																			},
																			required: [],
																		},
																		link: {
																			type: 'object',
																			description:
																				'The hyperlink destination, if this text is a link.',
																			properties: {
																				url: {
																					type: 'string',
																					description:
																						'An external URL.',
																				},
																				bookmarkId: {
																					type: 'string',
																					description:
																						'The ID of a bookmark in this document (legacy, use bookmark instead).',
																				},
																				headingId: {
																					type: 'string',
																					description:
																						'The ID of a heading in this document (legacy, use heading instead).',
																				},
																			},
																			required: [],
																		},
																		baselineOffset: {
																			type: 'string',
																			description:
																				'Vertical offset: NONE, SUPERSCRIPT, or SUBSCRIPT.',
																		},
																		smallCaps: {
																			type: 'boolean',
																			description:
																				'Whether the text is in small capital letters.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														inlineObjectElement: {
															type: 'object',
															description:
																'An inline object element (e.g., an image).',
															properties: {
																inlineObjectId: {
																	type: 'string',
																	description:
																		'The ID of the inline object.',
																},
																textStyle: {
																	type: 'object',
																	description:
																		'The text style properties for this run.',
																	properties: {
																		fontSize: {
																			type: 'object',
																			description:
																				'The size of the font.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude of the measurement.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
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
														horizontalRule: {
															type: 'object',
															description:
																'A horizontal line element.',
															properties: {
																textStyle: {
																	type: 'object',
																	description:
																		'The text style of the horizontal rule (inherited from surrounding text).',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
															},
															required: [],
														},
														dateElement: {
															type: 'object',
															description:
																'A date smart chip element.',
															properties: {
																dateId: {
																	type: 'string',
																	description:
																		'The unique ID of this date element.',
																},
																textStyle: {
																	type: 'object',
																	description:
																		'The text style of the date element.',
																	properties: {},
																	required: [],
																	additionalProperties: true,
																},
																dateElementProperties: {
																	type: 'object',
																	description:
																		'The properties of the date element.',
																	properties: {
																		timestamp: {
																			type: 'string',
																			description:
																				'The ISO 8601 timestamp of the date (e.g. 2019-11-05T12:00:00Z).',
																		},
																		locale: {
																			type: 'string',
																			description:
																				'The locale used for formatting the date (e.g. en).',
																		},
																		dateFormat: {
																			type: 'string',
																			description:
																				'The date format, e.g. DATE_FORMAT_MONTH_DAY_YEAR_ABBREVIATED.',
																		},
																		timeFormat: {
																			type: 'string',
																			description:
																				'The time format, e.g. TIME_FORMAT_DISABLED.',
																		},
																		displayText: {
																			type: 'string',
																			description:
																				'The rendered display text (e.g. Nov 5, 2019).',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														footnoteReference: {
															type: 'object',
															description:
																'A reference to a footnote.',
															properties: {
																footnoteId: {
																	type: 'string',
																	description:
																		'The ID of the footnote. Use this to look up content in the top-level footnotes map.',
																},
																footnoteNumber: {
																	type: 'string',
																	description:
																		'The rendered number of this footnote.',
																},
															},
															required: [],
														},
														person: {
															type: 'object',
															description:
																'A person or email address mention.',
															properties: {
																personId: {
																	type: 'string',
																	description:
																		'The unique ID of this person link.',
																},
															},
															required: [],
														},
														richLink: {
															type: 'object',
															description:
																'A smart chip linking to a Google resource (Drive file, YouTube video, Calendar event).',
															properties: {
																richLinkId: {
																	type: 'string',
																	description:
																		'The ID of this rich link.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
											},
											paragraphStyle: {
												type: 'object',
												description: 'The style of the paragraph.',
												properties: {
													namedStyleType: {
														type: 'string',
														description:
															'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
													},
													headingId: {
														type: 'string',
														description: 'The ID of the heading.',
													},
													direction: {
														type: 'string',
														description:
															'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
													},
													spaceAbove: {
														type: 'object',
														description:
															'The amount of space above the paragraph.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
															magnitude: {
																type: 'number',
																description: 'The space value.',
															},
														},
														required: [],
													},
													spaceBelow: {
														type: 'object',
														description:
															'The amount of space below the paragraph.',
														properties: {
															magnitude: {
																type: 'number',
																description:
																	'The magnitude of the measurement.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													lineSpacing: {
														type: 'number',
														description:
															'The line spacing as a percentage of normal (100 = single).',
													},
													spacingMode: {
														type: 'string',
														description:
															'The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).',
													},
													indentFirstLine: {
														type: 'object',
														description:
															'The indentation of the first line.',
														properties: {
															magnitude: {
																type: 'number',
																description:
																	'The magnitude of the measurement.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													indentStart: {
														type: 'object',
														description:
															'The indentation from the start of the paragraph.',
														properties: {
															magnitude: {
																type: 'number',
																description:
																	'The magnitude of the measurement.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													borderBetween: {
														type: 'object',
														description:
															'The border between paragraphs in the section.',
														properties: {
															color: {
																type: 'object',
																description: 'The border color.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													borderTop: {
														type: 'object',
														description: 'The top border.',
														properties: {
															color: {
																type: 'object',
																description: 'The border color.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													borderBottom: {
														type: 'object',
														description: 'The bottom border.',
														properties: {
															color: {
																type: 'object',
																description: 'The border color.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													borderLeft: {
														type: 'object',
														description: 'The left border.',
														properties: {
															color: {
																type: 'object',
																description: 'The border color.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													borderRight: {
														type: 'object',
														description: 'The right border.',
														properties: {
															color: {
																type: 'object',
																description: 'The border color.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
															width: {
																type: 'object',
																description:
																	'The width of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															padding: {
																type: 'object',
																description:
																	'The padding of the border.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The unit of measurement (e.g., PT).',
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The numeric value.',
																	},
																},
																required: [],
															},
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the border (SOLID, DOT, DASH).',
															},
														},
														required: [],
													},
													shading: {
														type: 'object',
														description:
															'The shading of the paragraph.',
														properties: {
															backgroundColor: {
																type: 'object',
																description:
																	'The background color.',
																properties: {},
																required: [],
																additionalProperties: true,
															},
														},
														required: [],
													},
													alignment: {
														type: 'string',
														description:
															'The text alignment: START, CENTER, END, or JUSTIFIED.',
													},
													indentEnd: {
														type: 'object',
														description:
															'The amount of indentation for the end side of the paragraph.',
														properties: {
															magnitude: {
																type: 'number',
																description:
																	'The indentation value.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit (PT = points).',
															},
														},
														required: [],
													},
													keepLinesTogether: {
														type: 'boolean',
														description:
															'Whether all lines of the paragraph should be laid out on the same page or column if possible.',
													},
													keepWithNext: {
														type: 'boolean',
														description:
															'Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if possible.',
													},
													avoidWidowAndOrphan: {
														type: 'boolean',
														description:
															'Whether to avoid widows and orphans for the paragraph.',
													},
													pageBreakBefore: {
														type: 'boolean',
														description:
															'Whether the current paragraph should always start at the beginning of a page.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									table: {
										type: 'object',
										description: 'A table structural element.',
										properties: {
											rows: {
												type: 'number',
												description: 'Number of rows in the table.',
											},
											columns: {
												type: 'number',
												description: 'Number of columns in the table.',
											},
											tableRows: {
												type: 'array',
												description: 'The contents and style of each row.',
												items: {
													type: 'object',
													description: 'A single table row.',
													properties: {
														startIndex: {
															type: 'number',
															description:
																'The zero-based start index of this row.',
														},
														endIndex: {
															type: 'number',
															description:
																'The zero-based end index of this row, exclusive.',
														},
														tableCells: {
															type: 'array',
															description:
																'The contents and style of each cell in this row.',
															items: {
																type: 'object',
																description: 'A single table cell.',
																properties: {
																	startIndex: {
																		type: 'number',
																		description:
																			'The zero-based start index of this cell.',
																	},
																	endIndex: {
																		type: 'number',
																		description:
																			'The zero-based end index of this cell, exclusive.',
																	},
																	content: {
																		type: 'array',
																		description:
																			'The structural elements inside this cell (paragraphs, nested tables).',
																	},
																	tableCellStyle: {
																		type: 'object',
																		description:
																			'The style of this cell (background, borders, padding, span, alignment).',
																		properties: {
																			rowSpan: {
																				type: 'number',
																				description:
																					'Number of rows this cell spans.',
																			},
																			columnSpan: {
																				type: 'number',
																				description:
																					'Number of columns this cell spans.',
																			},
																			backgroundColor: {
																				type: 'object',
																				description:
																					'The background color of the cell.',
																				properties: {},
																				required: [],
																				additionalProperties:
																					true,
																			},
																			contentAlignment: {
																				type: 'string',
																				description:
																					'Vertical alignment: TOP, MIDDLE, or BOTTOM.',
																			},
																			paddingLeft: {
																				type: 'object',
																				description:
																					'Left padding (magnitude + unit).',
																				properties: {},
																				required: [],
																				additionalProperties:
																					true,
																			},
																			paddingRight: {
																				type: 'object',
																				description:
																					'Right padding (magnitude + unit).',
																				properties: {},
																				required: [],
																				additionalProperties:
																					true,
																			},
																			paddingTop: {
																				type: 'object',
																				description:
																					'Top padding (magnitude + unit).',
																				properties: {},
																				required: [],
																				additionalProperties:
																					true,
																			},
																			paddingBottom: {
																				type: 'object',
																				description:
																					'Bottom padding (magnitude + unit).',
																				properties: {},
																				required: [],
																				additionalProperties:
																					true,
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
											tableStyle: {
												type: 'object',
												description:
													'Style of the table (column properties with widthType).',
												properties: {},
												required: [],
												additionalProperties: true,
											},
										},
										required: [],
									},
									tableOfContents: {
										type: 'object',
										description: 'A table of contents structural element.',
										properties: {
											content: {
												type: 'array',
												description:
													'The content of the table of contents.',
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
				headers: {
					type: 'array',
					description:
						'The headers in the document (converted from map to array by handleTabs). Legacy field -- use tabs[].documentTab.headers when includeTabsContent is true.',
					items: {
						type: 'object',
						description: 'A single document header.',
						properties: {
							headerId: {
								type: 'string',
								description: 'The unique identifier of the header.',
							},
							content: {
								type: 'array',
								description: 'The content elements within this section.',
								items: {
									type: 'object',
									description: 'A structural element in this header.',
									properties: {
										startIndex: {
											type: 'number',
											description:
												'The zero-based start index in UTF-16 code units.',
										},
										endIndex: {
											type: 'number',
											description:
												'The zero-based end index in UTF-16 code units.',
										},
										paragraph: {
											type: 'object',
											description: 'A paragraph element in the document.',
											properties: {
												elements: {
													type: 'array',
													description:
														'The content elements within the paragraph.',
													items: {
														type: 'object',
														properties: {
															startIndex: {
																type: 'number',
																description:
																	'The zero-based start index in UTF-16 code units.',
															},
															endIndex: {
																type: 'number',
																description:
																	'The zero-based end index in UTF-16 code units.',
															},
															textRun: {
																type: 'object',
																description:
																	'A run of text with the same styling.',
																properties: {
																	content: {
																		type: 'string',
																		description:
																			'The text content of the run.',
																	},
																	textStyle: {
																		type: 'object',
																		description:
																			'The text style properties for this run.',
																		properties: {
																			backgroundColor: {
																				type: 'object',
																				description:
																					'The background color.',
																				properties: {},
																				required: [],
																				additionalProperties:
																					true,
																			},
																			foregroundColor: {
																				type: 'object',
																				description:
																					'The foreground (text) color.',
																				properties: {
																					color: {
																						type: 'object',
																						description:
																							'The color value.',
																						properties:
																							{
																								rgbColor:
																									{
																										type: 'object',
																										description:
																											'The RGB color value.',
																										properties:
																											{},
																										required:
																											[],
																										additionalProperties:
																											true,
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: [],
																			},
																			fontSize: {
																				type: 'object',
																				description:
																					'The size of the font.',
																				properties: {
																					magnitude: {
																						type: 'number',
																						description:
																							'The magnitude of the measurement.',
																					},
																					unit: {
																						type: 'string',
																						description:
																							'The unit of measurement (e.g., PT).',
																					},
																				},
																				required: [],
																			},
																			weightedFontFamily: {
																				type: 'object',
																				description:
																					'The font family and weight.',
																				properties: {
																					fontFamily: {
																						type: 'string',
																						description:
																							'The name of the font family.',
																					},
																					weight: {
																						type: 'number',
																						description:
																							'The weight (boldness) of the font.',
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
															inlineObjectElement: {
																type: 'object',
																description:
																	'An inline object element (e.g., an image).',
																properties: {
																	inlineObjectId: {
																		type: 'string',
																		description:
																			'The ID of the inline object.',
																	},
																	textStyle: {
																		type: 'object',
																		description:
																			'The text style properties for this run.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																},
																required: [],
															},
														},
														required: [],
													},
												},
												paragraphStyle: {
													type: 'object',
													description: 'The style of the paragraph.',
													properties: {
														namedStyleType: {
															type: 'string',
															description:
																'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
														},
														alignment: {
															type: 'string',
															description:
																'The text alignment (START, CENTER, END, JUSTIFIED).',
														},
														lineSpacing: {
															type: 'number',
															description:
																'The line spacing as a percentage of normal (100 = single).',
														},
														direction: {
															type: 'string',
															description:
																'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
														},
														spacingMode: {
															type: 'string',
															description:
																'The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).',
														},
														avoidWidowAndOrphan: {
															type: 'boolean',
															description:
																'Whether to avoid widow and orphan lines.',
														},
														pageBreakBefore: {
															type: 'boolean',
															description:
																'Whether there is a page break before this paragraph.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										table: {
											type: 'object',
											description: 'A table element in the document.',
											properties: {
												rows: {
													type: 'number',
													description: 'The number of rows in the table.',
												},
												columns: {
													type: 'number',
													description:
														'The number of columns in the table.',
												},
												tableRows: {
													type: 'array',
													description: 'The rows in the table.',
													items: {
														type: 'object',
														properties: {
															startIndex: {
																type: 'number',
																description:
																	'The zero-based start index in UTF-16 code units.',
															},
															endIndex: {
																type: 'number',
																description:
																	'The zero-based end index in UTF-16 code units.',
															},
															tableCells: {
																type: 'array',
																description:
																	'The cells in the table row.',
																items: {
																	type: 'object',
																	properties: {
																		startIndex: {
																			type: 'number',
																			description:
																				'The zero-based start index in UTF-16 code units.',
																		},
																		endIndex: {
																			type: 'number',
																			description:
																				'The zero-based end index in UTF-16 code units.',
																		},
																		content: {
																			type: 'array',
																			description:
																				'The content elements within this section.',
																			items: {
																				type: 'object',
																				properties: {
																					startIndex: {
																						type: 'number',
																						description:
																							'The zero-based start index in UTF-16 code units.',
																					},
																					endIndex: {
																						type: 'number',
																						description:
																							'The zero-based end index in UTF-16 code units.',
																					},
																					paragraph: {
																						type: 'object',
																						description:
																							'A paragraph element in the document.',
																						properties:
																							{
																								elements:
																									{
																										type: 'array',
																										description:
																											'The content elements within the paragraph.',
																										items: {
																											type: 'object',
																											properties:
																												{
																													startIndex:
																														{
																															type: 'number',
																															description:
																																'The zero-based start index in UTF-16 code units.',
																														},
																													endIndex:
																														{
																															type: 'number',
																															description:
																																'The zero-based end index in UTF-16 code units.',
																														},
																													textRun:
																														{
																															type: 'object',
																															description:
																																'A run of text with the same styling.',
																															properties:
																																{
																																	content:
																																		{
																																			type: 'string',
																																			description:
																																				'The text content of the run.',
																																		},
																																	textStyle:
																																		{
																																			type: 'object',
																																			description:
																																				'The text style properties for this run.',
																																			properties:
																																				{
																																					backgroundColor:
																																						{
																																							type: 'object',
																																							description:
																																								'The background color.',
																																							properties:
																																								{},
																																							required:
																																								[],
																																							additionalProperties:
																																								true,
																																						},
																																					foregroundColor:
																																						{
																																							type: 'object',
																																							description:
																																								'The foreground (text) color.',
																																							properties:
																																								{
																																									color: {
																																										type: 'object',
																																										description:
																																											'The color value.',
																																										properties:
																																											{
																																												rgbColor:
																																													{
																																														type: 'object',
																																														description:
																																															'The RGB color value.',
																																														properties:
																																															{
																																																red: {
																																																	type: 'number',
																																																	description:
																																																		'Red component (0.0 to 1.0).',
																																																},
																																																green: {
																																																	type: 'number',
																																																	description:
																																																		'Green component (0.0 to 1.0).',
																																																},
																																																blue: {
																																																	type: 'number',
																																																	description:
																																																		'Blue component (0.0 to 1.0).',
																																																},
																																															},
																																														required:
																																															[],
																																													},
																																											},
																																										required:
																																											[],
																																									},
																																								},
																																							required:
																																								[],
																																						},
																																					fontSize:
																																						{
																																							type: 'object',
																																							description:
																																								'The size of the font.',
																																							properties:
																																								{
																																									magnitude:
																																										{
																																											type: 'number',
																																											description:
																																												'The magnitude of the measurement.',
																																										},
																																									unit: {
																																										type: 'string',
																																										description:
																																											'The unit of measurement (e.g., PT).',
																																									},
																																								},
																																							required:
																																								[],
																																						},
																																				},
																																			required:
																																				[],
																																		},
																																},
																															required:
																																[],
																														},
																												},
																											required:
																												[],
																										},
																									},
																								paragraphStyle:
																									{
																										type: 'object',
																										description:
																											'The style of the paragraph.',
																										properties:
																											{
																												namedStyleType:
																													{
																														type: 'string',
																														description:
																															'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
																													},
																												alignment:
																													{
																														type: 'string',
																														description:
																															'The text alignment (START, CENTER, END, JUSTIFIED).',
																													},
																												lineSpacing:
																													{
																														type: 'number',
																														description:
																															'The line spacing as a percentage of normal (100 = single).',
																													},
																												direction:
																													{
																														type: 'string',
																														description:
																															'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
																													},
																												spacingMode:
																													{
																														type: 'string',
																														description:
																															'The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).',
																													},
																												spaceAbove:
																													{
																														type: 'object',
																														description:
																															'The amount of space above the paragraph.',
																														properties:
																															{
																																unit: {
																																	type: 'string',
																																	description:
																																		'The unit of measurement (e.g., PT).',
																																},
																															},
																														required:
																															[],
																													},
																												spaceBelow:
																													{
																														type: 'object',
																														description:
																															'The amount of space below the paragraph.',
																														properties:
																															{
																																unit: {
																																	type: 'string',
																																	description:
																																		'The unit of measurement (e.g., PT).',
																																},
																															},
																														required:
																															[],
																													},
																												borderBetween:
																													{
																														type: 'object',
																														description:
																															'The border between paragraphs in the section.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The border color.',
																																	properties:
																																		{},
																																	required:
																																		[],
																																	additionalProperties:
																																		true,
																																},
																																width: {
																																	type: 'object',
																																	description:
																																		'The width of the border.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The unit of measurement (e.g., PT).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																																padding:
																																	{
																																		type: 'object',
																																		description:
																																			'The padding of the border.',
																																		properties:
																																			{
																																				unit: {
																																					type: 'string',
																																					description:
																																						'The unit of measurement (e.g., PT).',
																																				},
																																			},
																																		required:
																																			[],
																																	},
																																dashStyle:
																																	{
																																		type: 'string',
																																		description:
																																			'The dash style of the border (SOLID, DOT, DASH).',
																																	},
																															},
																														required:
																															[],
																													},
																												borderTop:
																													{
																														type: 'object',
																														description:
																															'The top border.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The border color.',
																																	properties:
																																		{},
																																	required:
																																		[],
																																	additionalProperties:
																																		true,
																																},
																																width: {
																																	type: 'object',
																																	description:
																																		'The width of the border.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The unit of measurement (e.g., PT).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																																padding:
																																	{
																																		type: 'object',
																																		description:
																																			'The padding of the border.',
																																		properties:
																																			{
																																				unit: {
																																					type: 'string',
																																					description:
																																						'The unit of measurement (e.g., PT).',
																																				},
																																			},
																																		required:
																																			[],
																																	},
																																dashStyle:
																																	{
																																		type: 'string',
																																		description:
																																			'The dash style of the border (SOLID, DOT, DASH).',
																																	},
																															},
																														required:
																															[],
																													},
																												borderBottom:
																													{
																														type: 'object',
																														description:
																															'The bottom border.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The border color.',
																																	properties:
																																		{},
																																	required:
																																		[],
																																	additionalProperties:
																																		true,
																																},
																																width: {
																																	type: 'object',
																																	description:
																																		'The width of the border.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The unit of measurement (e.g., PT).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																																padding:
																																	{
																																		type: 'object',
																																		description:
																																			'The padding of the border.',
																																		properties:
																																			{
																																				unit: {
																																					type: 'string',
																																					description:
																																						'The unit of measurement (e.g., PT).',
																																				},
																																			},
																																		required:
																																			[],
																																	},
																																dashStyle:
																																	{
																																		type: 'string',
																																		description:
																																			'The dash style of the border (SOLID, DOT, DASH).',
																																	},
																															},
																														required:
																															[],
																													},
																												borderLeft:
																													{
																														type: 'object',
																														description:
																															'The left border.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The border color.',
																																	properties:
																																		{},
																																	required:
																																		[],
																																	additionalProperties:
																																		true,
																																},
																																width: {
																																	type: 'object',
																																	description:
																																		'The width of the border.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The unit of measurement (e.g., PT).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																																padding:
																																	{
																																		type: 'object',
																																		description:
																																			'The padding of the border.',
																																		properties:
																																			{
																																				unit: {
																																					type: 'string',
																																					description:
																																						'The unit of measurement (e.g., PT).',
																																				},
																																			},
																																		required:
																																			[],
																																	},
																																dashStyle:
																																	{
																																		type: 'string',
																																		description:
																																			'The dash style of the border (SOLID, DOT, DASH).',
																																	},
																															},
																														required:
																															[],
																													},
																												borderRight:
																													{
																														type: 'object',
																														description:
																															'The right border.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The border color.',
																																	properties:
																																		{},
																																	required:
																																		[],
																																	additionalProperties:
																																		true,
																																},
																																width: {
																																	type: 'object',
																																	description:
																																		'The width of the border.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The unit of measurement (e.g., PT).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																																padding:
																																	{
																																		type: 'object',
																																		description:
																																			'The padding of the border.',
																																		properties:
																																			{
																																				unit: {
																																					type: 'string',
																																					description:
																																						'The unit of measurement (e.g., PT).',
																																				},
																																			},
																																		required:
																																			[],
																																	},
																																dashStyle:
																																	{
																																		type: 'string',
																																		description:
																																			'The dash style of the border (SOLID, DOT, DASH).',
																																	},
																															},
																														required:
																															[],
																													},
																												indentFirstLine:
																													{
																														type: 'object',
																														description:
																															'The indentation of the first line.',
																														properties:
																															{
																																unit: {
																																	type: 'string',
																																	description:
																																		'The unit of measurement (e.g., PT).',
																																},
																															},
																														required:
																															[],
																													},
																												indentStart:
																													{
																														type: 'object',
																														description:
																															'The indentation from the start of the paragraph.',
																														properties:
																															{
																																unit: {
																																	type: 'string',
																																	description:
																																		'The unit of measurement (e.g., PT).',
																																},
																															},
																														required:
																															[],
																													},
																												indentEnd:
																													{
																														type: 'object',
																														description:
																															'The indentation from the end of the paragraph.',
																														properties:
																															{
																																unit: {
																																	type: 'string',
																																	description:
																																		'The unit of measurement (e.g., PT).',
																																},
																															},
																														required:
																															[],
																													},
																												keepLinesTogether:
																													{
																														type: 'boolean',
																														description:
																															'Whether all lines of the paragraph should be on the same page.',
																													},
																												keepWithNext:
																													{
																														type: 'boolean',
																														description:
																															'Whether this paragraph should be on the same page as the next.',
																													},
																												avoidWidowAndOrphan:
																													{
																														type: 'boolean',
																														description:
																															'Whether to avoid widow and orphan lines.',
																													},
																												shading:
																													{
																														type: 'object',
																														description:
																															'The shading of the paragraph.',
																														properties:
																															{
																																backgroundColor:
																																	{
																																		type: 'object',
																																		description:
																																			'The background color.',
																																		properties:
																																			{},
																																		required:
																																			[],
																																		additionalProperties:
																																			true,
																																	},
																															},
																														required:
																															[],
																													},
																												pageBreakBefore:
																													{
																														type: 'boolean',
																														description:
																															'Whether there is a page break before this paragraph.',
																													},
																											},
																										required:
																											[],
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: [],
																			},
																		},
																		tableCellStyle: {
																			type: 'object',
																			description:
																				'The style of the table cell.',
																			properties: {
																				rowSpan: {
																					type: 'number',
																					description:
																						'The number of rows this cell spans.',
																				},
																				columnSpan: {
																					type: 'number',
																					description:
																						'The number of columns this cell spans.',
																				},
																				backgroundColor: {
																					type: 'object',
																					description:
																						'The background color.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'The RGB color value.',
																											properties:
																												{
																													red: {
																														type: 'number',
																														description:
																															'Red component (0.0 to 1.0).',
																													},
																													green: {
																														type: 'number',
																														description:
																															'Green component (0.0 to 1.0).',
																													},
																													blue: {
																														type: 'number',
																														description:
																															'Blue component (0.0 to 1.0).',
																													},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				borderLeft: {
																					type: 'object',
																					description:
																						'The left border.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The border color.',
																							properties:
																								{
																									color: {
																										type: 'object',
																										description:
																											'The color value.',
																										properties:
																											{
																												rgbColor:
																													{
																														type: 'object',
																														description:
																															'The RGB color value.',
																														properties:
																															{
																																red: {
																																	type: 'number',
																																	description:
																																		'Red component (0.0 to 1.0).',
																																},
																																green: {
																																	type: 'number',
																																	description:
																																		'Green component (0.0 to 1.0).',
																																},
																																blue: {
																																	type: 'number',
																																	description:
																																		'Blue component (0.0 to 1.0).',
																																},
																															},
																														required:
																															[],
																													},
																											},
																										required:
																											[],
																									},
																								},
																							required:
																								[],
																						},
																						width: {
																							type: 'object',
																							description:
																								'The width of the border.',
																							properties:
																								{
																									magnitude:
																										{
																											type: 'number',
																											description:
																												'The magnitude of the measurement.',
																										},
																									unit: {
																										type: 'string',
																										description:
																											'The unit of measurement (e.g., PT).',
																									},
																								},
																							required:
																								[],
																						},
																						dashStyle: {
																							type: 'string',
																							description:
																								'The dash style of the border (SOLID, DOT, DASH).',
																						},
																					},
																					required: [],
																				},
																				borderRight: {
																					type: 'object',
																					description:
																						'The right border.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The border color.',
																							properties:
																								{
																									color: {
																										type: 'object',
																										description:
																											'The color value.',
																										properties:
																											{
																												rgbColor:
																													{
																														type: 'object',
																														description:
																															'The RGB color value.',
																														properties:
																															{
																																red: {
																																	type: 'number',
																																	description:
																																		'Red component (0.0 to 1.0).',
																																},
																																green: {
																																	type: 'number',
																																	description:
																																		'Green component (0.0 to 1.0).',
																																},
																																blue: {
																																	type: 'number',
																																	description:
																																		'Blue component (0.0 to 1.0).',
																																},
																															},
																														required:
																															[],
																													},
																											},
																										required:
																											[],
																									},
																								},
																							required:
																								[],
																						},
																						width: {
																							type: 'object',
																							description:
																								'The width of the border.',
																							properties:
																								{
																									magnitude:
																										{
																											type: 'number',
																											description:
																												'The magnitude of the measurement.',
																										},
																									unit: {
																										type: 'string',
																										description:
																											'The unit of measurement (e.g., PT).',
																									},
																								},
																							required:
																								[],
																						},
																						dashStyle: {
																							type: 'string',
																							description:
																								'The dash style of the border (SOLID, DOT, DASH).',
																						},
																					},
																					required: [],
																				},
																				borderTop: {
																					type: 'object',
																					description:
																						'The top border.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The border color.',
																							properties:
																								{
																									color: {
																										type: 'object',
																										description:
																											'The color value.',
																										properties:
																											{
																												rgbColor:
																													{
																														type: 'object',
																														description:
																															'The RGB color value.',
																														properties:
																															{
																																red: {
																																	type: 'number',
																																	description:
																																		'Red component (0.0 to 1.0).',
																																},
																																green: {
																																	type: 'number',
																																	description:
																																		'Green component (0.0 to 1.0).',
																																},
																																blue: {
																																	type: 'number',
																																	description:
																																		'Blue component (0.0 to 1.0).',
																																},
																															},
																														required:
																															[],
																													},
																											},
																										required:
																											[],
																									},
																								},
																							required:
																								[],
																						},
																						width: {
																							type: 'object',
																							description:
																								'The width of the border.',
																							properties:
																								{
																									magnitude:
																										{
																											type: 'number',
																											description:
																												'The magnitude of the measurement.',
																										},
																									unit: {
																										type: 'string',
																										description:
																											'The unit of measurement (e.g., PT).',
																									},
																								},
																							required:
																								[],
																						},
																						dashStyle: {
																							type: 'string',
																							description:
																								'The dash style of the border (SOLID, DOT, DASH).',
																						},
																					},
																					required: [],
																				},
																				borderBottom: {
																					type: 'object',
																					description:
																						'The bottom border.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The border color.',
																							properties:
																								{
																									color: {
																										type: 'object',
																										description:
																											'The color value.',
																										properties:
																											{
																												rgbColor:
																													{
																														type: 'object',
																														description:
																															'The RGB color value.',
																														properties:
																															{
																																red: {
																																	type: 'number',
																																	description:
																																		'Red component (0.0 to 1.0).',
																																},
																																green: {
																																	type: 'number',
																																	description:
																																		'Green component (0.0 to 1.0).',
																																},
																																blue: {
																																	type: 'number',
																																	description:
																																		'Blue component (0.0 to 1.0).',
																																},
																															},
																														required:
																															[],
																													},
																											},
																										required:
																											[],
																									},
																								},
																							required:
																								[],
																						},
																						width: {
																							type: 'object',
																							description:
																								'The width of the border.',
																							properties:
																								{
																									magnitude:
																										{
																											type: 'number',
																											description:
																												'The magnitude of the measurement.',
																										},
																									unit: {
																										type: 'string',
																										description:
																											'The unit of measurement (e.g., PT).',
																									},
																								},
																							required:
																								[],
																						},
																						dashStyle: {
																							type: 'string',
																							description:
																								'The dash style of the border (SOLID, DOT, DASH).',
																						},
																					},
																					required: [],
																				},
																				paddingLeft: {
																					type: 'object',
																					description:
																						'The left padding of the cell.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude of the measurement.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				paddingRight: {
																					type: 'object',
																					description:
																						'The right padding of the cell.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude of the measurement.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				paddingTop: {
																					type: 'object',
																					description:
																						'The top padding of the cell.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude of the measurement.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				paddingBottom: {
																					type: 'object',
																					description:
																						'The bottom padding of the cell.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude of the measurement.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				contentAlignment: {
																					type: 'string',
																					description:
																						'The alignment of content in the cell (TOP, MIDDLE, BOTTOM).',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
															},
															tableRowStyle: {
																type: 'object',
																description:
																	'The style of the table row.',
																properties: {
																	minRowHeight: {
																		type: 'object',
																		description:
																			'The minimum height of the row.',
																		properties: {
																			magnitude: {
																				type: 'number',
																				description:
																					'The magnitude of the measurement.',
																			},
																			unit: {
																				type: 'string',
																				description:
																					'The unit of measurement (e.g., PT).',
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
												tableStyle: {
													type: 'object',
													description: 'The style of the table.',
													properties: {
														tableColumnProperties: {
															type: 'array',
															description:
																'The properties of each table column.',
															items: {
																type: 'object',
																properties: {
																	widthType: {
																		type: 'string',
																		description:
																			'The width type of the column (EVENLY_DISTRIBUTED, FIXED_WIDTH).',
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
									required: [],
								},
							},
						},
						required: [],
					},
				},
				footers: {
					type: 'array',
					description:
						'The footers in the document (converted from map to array by handleTabs). Legacy field -- use tabs[].documentTab.footers when includeTabsContent is true.',
					items: {
						type: 'object',
						properties: {
							footerId: {
								type: 'string',
								description: 'The unique identifier of the footer.',
							},
							content: {
								type: 'array',
								description: 'The content elements within this section.',
								items: {
									type: 'object',
									properties: {
										endIndex: {
											type: 'number',
											description:
												'The zero-based end index in UTF-16 code units.',
										},
										paragraph: {
											type: 'object',
											description: 'A paragraph element in the document.',
											properties: {
												elements: {
													type: 'array',
													description:
														'The content elements within the paragraph.',
													items: {
														type: 'object',
														properties: {
															endIndex: {
																type: 'number',
																description:
																	'The zero-based end index in UTF-16 code units.',
															},
															inlineObjectElement: {
																type: 'object',
																description:
																	'An inline object element (e.g., an image).',
																properties: {
																	inlineObjectId: {
																		type: 'string',
																		description:
																			'The ID of the inline object.',
																	},
																	textStyle: {
																		type: 'object',
																		description:
																			'The text style properties for this run.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																},
																required: [],
															},
														},
														required: [],
													},
												},
												paragraphStyle: {
													type: 'object',
													description: 'The style of the paragraph.',
													properties: {
														namedStyleType: {
															type: 'string',
															description:
																'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
														},
														direction: {
															type: 'string',
															description:
																'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
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
						},
						required: [],
					},
				},
				footnotes: {
					type: 'array',
					description:
						'The footnotes in the document (converted from map to array by handleTabs). Legacy field -- use tabs[].documentTab.footnotes when includeTabsContent is true.',
					items: {
						type: 'object',
						properties: {
							footnoteId: {
								type: 'string',
								description: 'The unique identifier of the footnote.',
							},
							content: {
								type: 'array',
								description: 'The content elements within this section.',
								items: {
									type: 'object',
									properties: {
										endIndex: {
											type: 'number',
											description:
												'The zero-based end index in UTF-16 code units.',
										},
										paragraph: {
											type: 'object',
											description: 'A paragraph element in the document.',
											properties: {
												elements: {
													type: 'array',
													description:
														'The content elements within the paragraph.',
													items: {
														type: 'object',
														properties: {
															endIndex: {
																type: 'number',
																description:
																	'The zero-based end index in UTF-16 code units.',
															},
															textRun: {
																type: 'object',
																description:
																	'A run of text with the same styling.',
																properties: {
																	content: {
																		type: 'string',
																		description:
																			'The text content of the run.',
																	},
																	textStyle: {
																		type: 'object',
																		description:
																			'The text style properties for this run.',
																		properties: {
																			fontSize: {
																				type: 'object',
																				description:
																					'The size of the font.',
																				properties: {
																					magnitude: {
																						type: 'number',
																						description:
																							'The magnitude of the measurement.',
																					},
																					unit: {
																						type: 'string',
																						description:
																							'The unit of measurement (e.g., PT).',
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
												paragraphStyle: {
													type: 'object',
													description: 'The style of the paragraph.',
													properties: {
														namedStyleType: {
															type: 'string',
															description:
																'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
														},
														direction: {
															type: 'string',
															description:
																'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
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
						},
						required: [],
					},
				},
				documentStyle: {
					type: 'object',
					description:
						'The style of the document (page size, margins, background, etc.). Legacy field -- use tabs[].documentTab.documentStyle when includeTabsContent is true.',
					properties: {
						background: {
							type: 'object',
							description: 'The background of the document.',
							properties: {
								color: {
									type: 'object',
									description: 'The color value.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							required: [],
						},
						defaultHeaderId: {
							type: 'string',
							description: 'The ID of the default header.',
						},
						defaultFooterId: {
							type: 'string',
							description: 'The ID of the default footer.',
						},
						pageNumberStart: {
							type: 'number',
							description: 'The page number from which to start counting.',
						},
						marginTop: {
							type: 'object',
							description: 'The top margin of the page.',
							properties: {
								magnitude: {
									type: 'number',
									description: 'The magnitude of the measurement.',
								},
								unit: {
									type: 'string',
									description: 'The unit of measurement (e.g., PT).',
								},
							},
							required: [],
						},
						marginBottom: {
							type: 'object',
							description: 'The bottom margin of the page.',
							properties: {
								magnitude: {
									type: 'number',
									description: 'The magnitude of the measurement.',
								},
								unit: {
									type: 'string',
									description: 'The unit of measurement (e.g., PT).',
								},
							},
							required: [],
						},
						marginRight: {
							type: 'object',
							description: 'The right margin of the page.',
							properties: {
								magnitude: {
									type: 'number',
									description: 'The magnitude of the measurement.',
								},
								unit: {
									type: 'string',
									description: 'The unit of measurement (e.g., PT).',
								},
							},
							required: [],
						},
						marginLeft: {
							type: 'object',
							description: 'The left margin of the page.',
							properties: {
								magnitude: {
									type: 'number',
									description: 'The magnitude of the measurement.',
								},
								unit: {
									type: 'string',
									description: 'The unit of measurement (e.g., PT).',
								},
							},
							required: [],
						},
						pageSize: {
							type: 'object',
							description: 'The size of the page.',
							properties: {
								height: {
									type: 'object',
									description: 'The height dimension.',
									properties: {
										magnitude: {
											type: 'number',
											description: 'The magnitude of the measurement.',
										},
										unit: {
											type: 'string',
											description: 'The unit of measurement (e.g., PT).',
										},
									},
									required: [],
								},
								width: {
									type: 'object',
									description: 'The width dimension.',
									properties: {
										magnitude: {
											type: 'number',
											description: 'The magnitude of the measurement.',
										},
										unit: {
											type: 'string',
											description: 'The unit of measurement (e.g., PT).',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						marginHeader: {
							type: 'object',
							description: 'The margin between the top of the page and the header.',
							properties: {
								magnitude: {
									type: 'number',
									description: 'The magnitude of the measurement.',
								},
								unit: {
									type: 'string',
									description: 'The unit of measurement (e.g., PT).',
								},
							},
							required: [],
						},
						marginFooter: {
							type: 'object',
							description:
								'The margin between the bottom of the page and the footer.',
							properties: {
								magnitude: {
									type: 'number',
									description: 'The magnitude of the measurement.',
								},
								unit: {
									type: 'string',
									description: 'The unit of measurement (e.g., PT).',
								},
							},
							required: [],
						},
						useCustomHeaderFooterMargins: {
							type: 'boolean',
							description:
								'Whether the document uses custom header and footer margins.',
						},
						flipPageOrientation: {
							type: 'boolean',
							description:
								'Whether the page orientation is flipped (landscape vs portrait).',
						},
						documentFormat: {
							type: 'object',
							description: 'The document format settings.',
							properties: {
								documentMode: {
									type: 'string',
									description: 'The mode of the document: PAGES or PAGELESS.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				namedStyles: {
					type: 'object',
					description:
						'The named styles of the document (NORMAL_TEXT, HEADING_1-6, TITLE, SUBTITLE). Legacy field -- use tabs[].documentTab.namedStyles when includeTabsContent is true.',
					properties: {
						styles: {
							type: 'array',
							description: 'The named style definitions.',
							items: {
								type: 'object',
								description: 'A single named style definition.',
								properties: {
									namedStyleType: {
										type: 'string',
										description:
											'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
									},
									textStyle: {
										type: 'object',
										description: 'The text style properties for this run.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									paragraphStyle: {
										type: 'object',
										description: 'The style of the paragraph.',
										properties: {
											namedStyleType: {
												type: 'string',
												description:
													'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
											},
											alignment: {
												type: 'string',
												description:
													'The text alignment (START, CENTER, END, JUSTIFIED).',
											},
											lineSpacing: {
												type: 'number',
												description:
													'The line spacing as a percentage of normal (100 = single).',
											},
											direction: {
												type: 'string',
												description:
													'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
											},
											spacingMode: {
												type: 'string',
												description:
													'The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).',
											},
											spaceAbove: {
												type: 'object',
												description:
													'The amount of space above the paragraph.',
												properties: {
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											spaceBelow: {
												type: 'object',
												description:
													'The amount of space below the paragraph.',
												properties: {
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											borderBetween: {
												type: 'object',
												description:
													'The border between paragraphs in the section.',
												properties: {
													color: {
														type: 'object',
														description: 'The border color.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											borderTop: {
												type: 'object',
												description: 'The top border.',
												properties: {
													color: {
														type: 'object',
														description: 'The border color.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											borderBottom: {
												type: 'object',
												description: 'The bottom border.',
												properties: {
													color: {
														type: 'object',
														description: 'The border color.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											borderLeft: {
												type: 'object',
												description: 'The left border.',
												properties: {
													color: {
														type: 'object',
														description: 'The border color.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											borderRight: {
												type: 'object',
												description: 'The right border.',
												properties: {
													color: {
														type: 'object',
														description: 'The border color.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
													width: {
														type: 'object',
														description: 'The width of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													padding: {
														type: 'object',
														description: 'The padding of the border.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the border (SOLID, DOT, DASH).',
													},
												},
												required: [],
											},
											indentFirstLine: {
												type: 'object',
												description: 'The indentation of the first line.',
												properties: {
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											indentStart: {
												type: 'object',
												description:
													'The indentation from the start of the paragraph.',
												properties: {
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											indentEnd: {
												type: 'object',
												description:
													'The indentation from the end of the paragraph.',
												properties: {
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											keepLinesTogether: {
												type: 'boolean',
												description:
													'Whether all lines of the paragraph should be on the same page.',
											},
											keepWithNext: {
												type: 'boolean',
												description:
													'Whether this paragraph should be on the same page as the next.',
											},
											avoidWidowAndOrphan: {
												type: 'boolean',
												description:
													'Whether to avoid widow and orphan lines.',
											},
											shading: {
												type: 'object',
												description: 'The shading of the paragraph.',
												properties: {
													backgroundColor: {
														type: 'object',
														description: 'The background color.',
														properties: {},
														required: [],
														additionalProperties: true,
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
					},
					required: [],
				},
				lists: {
					type: 'array',
					description:
						'The lists in the document (converted from map to array by handleTabs). Legacy field -- use tabs[].documentTab.lists when includeTabsContent is true.',
					items: {
						type: 'object',
						properties: {
							listProperties: {
								type: 'object',
								description: 'The properties of the list.',
								properties: {
									nestingLevels: {
										type: 'array',
										description: 'The nesting levels of the list.',
										items: {
											type: 'object',
											description: 'A single nesting level definition.',
											properties: {
												bulletAlignment: {
													type: 'string',
													description:
														'The alignment of the bullet (START, CENTER, END).',
												},
												glyphSymbol: {
													type: 'string',
													description:
														'The symbol used for the bullet glyph.',
												},
												glyphFormat: {
													type: 'string',
													description:
														'The format string for the bullet glyph.',
												},
												indentFirstLine: {
													type: 'object',
													description:
														'The indentation of the first line.',
													properties: {
														magnitude: {
															type: 'number',
															description:
																'The magnitude of the measurement.',
														},
														unit: {
															type: 'string',
															description:
																'The unit of measurement (e.g., PT).',
														},
													},
													required: [],
												},
												indentStart: {
													type: 'object',
													description:
														'The indentation from the start of the paragraph.',
													properties: {
														magnitude: {
															type: 'number',
															description:
																'The magnitude of the measurement.',
														},
														unit: {
															type: 'string',
															description:
																'The unit of measurement (e.g., PT).',
														},
													},
													required: [],
												},
												textStyle: {
													type: 'object',
													description:
														'The text style properties for this run.',
													properties: {
														underline: {
															type: 'boolean',
															description:
																'Whether the text is underlined.',
														},
														foregroundColor: {
															type: 'object',
															description:
																'The foreground (text) color.',
															properties: {
																color: {
																	type: 'object',
																	description: 'The color value.',
																	properties: {
																		rgbColor: {
																			type: 'object',
																			description:
																				'The RGB color value.',
																			properties: {
																				red: {
																					type: 'number',
																					description:
																						'Red component (0.0 to 1.0).',
																				},
																				green: {
																					type: 'number',
																					description:
																						'Green component (0.0 to 1.0).',
																				},
																				blue: {
																					type: 'number',
																					description:
																						'Blue component (0.0 to 1.0).',
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
												startNumber: {
													type: 'number',
													description:
														'The number of the first item in the list.',
												},
												glyphType: {
													type: 'string',
													description:
														'The type of glyph for ordered/unordered lists.',
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
				namedRanges: {
					type: 'array',
					description:
						'The named ranges in the document (converted from map to array by handleTabs).',
				},
				inlineObjects: {
					type: 'object',
					description:
						'The inline objects (images, drawings) in the document, keyed by object ID.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				inlineObjectsArray: {
					type: 'array',
					description:
						'A convenience array of inline objects filtered by the selected Filter type.',
					items: {
						type: 'object',
						properties: {
							objectId: {
								type: 'string',
								description:
									'The ID of the inline object. Can be used with replaceImage in batchUpdate.',
							},
							label: {
								type: 'string',
								description:
									"A human-readable label indicating the location and sequence of the object, e.g. 'Header: Image No. 1', 'Body: Drawing No. 3'.",
							},
						},
						required: [],
					},
				},
				positionedObjects: {
					type: 'array',
					description:
						'The positioned objects (floating images, drawings) in the document.',
				},
				tabs: {
					type: 'array',
					description:
						'Tabs in the document. Only populated when includeTabsContent is true.',
					items: {
						type: 'object',
						description: 'A tab within the document.',
						properties: {
							tabProperties: {
								type: 'object',
								description: 'The properties of the tab.',
								properties: {
									tabId: {
										type: 'string',
										description: 'The unique identifier of the tab.',
									},
									index: { type: 'number', description: 'The zero-based index.' },
									parentTabId: {
										type: 'string',
										description:
											'The ID of the parent tab. Empty for root-level tabs.',
									},
									nestingLevel: {
										type: 'number',
										description: 'The depth of the tab. Root-level tabs are 0.',
									},
								},
								required: [],
							},
							documentTab: {
								type: 'object',
								description: 'The document tab content.',
								properties: {
									body: {
										type: 'object',
										description: 'The main body content of the document.',
										properties: {
											content: {
												type: 'array',
												description:
													'The structural elements composing the body.',
												items: {
													type: 'object',
													properties: {
														endIndex: {
															type: 'number',
															description:
																'The zero-based end index in UTF-16 code units.',
														},
														startIndex: {
															type: 'number',
															description:
																'The zero-based start index in UTF-16 code units.',
														},
														sectionBreak: {
															type: 'object',
															description: 'A section break element.',
															properties: {
																sectionStyle: {
																	type: 'object',
																	description:
																		'The style of the section.',
																	properties: {
																		columnSeparatorStyle: {
																			type: 'string',
																			description:
																				'The style of column separators (NONE, BETWEEN_EACH_COLUMN).',
																		},
																		contentDirection: {
																			type: 'string',
																			description:
																				'The content direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
																		},
																		sectionType: {
																			type: 'string',
																			description:
																				'The type of section (CONTINUOUS, NEXT_PAGE).',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														paragraph: {
															type: 'object',
															description:
																'A paragraph element in the document.',
															properties: {
																bullet: {
																	type: 'object',
																	description:
																		'The bullet properties for the paragraph.',
																	properties: {
																		listId: {
																			type: 'string',
																			description:
																				'The ID of the list this paragraph belongs to.',
																		},
																		textStyle: {
																			type: 'object',
																			description:
																				'The text style properties for this run.',
																			properties: {
																				underline: {
																					type: 'boolean',
																					description:
																						'Whether the text is underlined.',
																				},
																				backgroundColor: {
																					type: 'object',
																					description:
																						'The background color.',
																					properties: {},
																					required: [],
																					additionalProperties:
																						true,
																				},
																				foregroundColor: {
																					type: 'object',
																					description:
																						'The foreground (text) color.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'The RGB color value.',
																											properties:
																												{},
																											required:
																												[],
																											additionalProperties:
																												true,
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				fontSize: {
																					type: 'object',
																					description:
																						'The size of the font.',
																					properties: {
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude of the measurement.',
																						},
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
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
																elements: {
																	type: 'array',
																	description:
																		'The content elements within the paragraph.',
																	items: {
																		type: 'object',
																		properties: {
																			startIndex: {
																				type: 'number',
																				description:
																					'The zero-based start index in UTF-16 code units.',
																			},
																			endIndex: {
																				type: 'number',
																				description:
																					'The zero-based end index in UTF-16 code units.',
																			},
																			textRun: {
																				type: 'object',
																				description:
																					'A run of text with the same styling.',
																				properties: {
																					content: {
																						type: 'string',
																						description:
																							'The text content of the run.',
																					},
																					textStyle: {
																						type: 'object',
																						description:
																							'The text style properties for this run.',
																						properties:
																							{
																								backgroundColor:
																									{
																										type: 'object',
																										description:
																											'The background color.',
																										properties:
																											{
																												color: {
																													type: 'object',
																													description:
																														'The color value.',
																													properties:
																														{
																															rgbColor:
																																{
																																	type: 'object',
																																	description:
																																		'The RGB color value.',
																																	properties:
																																		{
																																			red: {
																																				type: 'number',
																																				description:
																																					'Red component (0.0 to 1.0).',
																																			},
																																			green: {
																																				type: 'number',
																																				description:
																																					'Green component (0.0 to 1.0).',
																																			},
																																			blue: {
																																				type: 'number',
																																				description:
																																					'Blue component (0.0 to 1.0).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																														},
																													required:
																														[],
																												},
																											},
																										required:
																											[],
																									},
																								foregroundColor:
																									{
																										type: 'object',
																										description:
																											'The foreground (text) color.',
																										properties:
																											{
																												color: {
																													type: 'object',
																													description:
																														'The color value.',
																													properties:
																														{
																															rgbColor:
																																{
																																	type: 'object',
																																	description:
																																		'The RGB color value.',
																																	properties:
																																		{
																																			red: {
																																				type: 'number',
																																				description:
																																					'Red component (0.0 to 1.0).',
																																			},
																																			green: {
																																				type: 'number',
																																				description:
																																					'Green component (0.0 to 1.0).',
																																			},
																																			blue: {
																																				type: 'number',
																																				description:
																																					'Blue component (0.0 to 1.0).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																														},
																													required:
																														[],
																												},
																											},
																										required:
																											[],
																									},
																								bold: {
																									type: 'boolean',
																									description:
																										'Whether the text is bold.',
																								},
																								fontSize:
																									{
																										type: 'object',
																										description:
																											'The size of the font.',
																										properties:
																											{
																												magnitude:
																													{
																														type: 'number',
																														description:
																															'The magnitude of the measurement.',
																													},
																												unit: {
																													type: 'string',
																													description:
																														'The unit of measurement (e.g., PT).',
																												},
																											},
																										required:
																											[],
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: [],
																			},
																			inlineObjectElement: {
																				type: 'object',
																				description:
																					'An inline object element (e.g., an image).',
																				properties: {
																					inlineObjectId:
																						{
																							type: 'string',
																							description:
																								'The ID of the inline object.',
																						},
																					textStyle: {
																						type: 'object',
																						description:
																							'The text style properties for this run.',
																						properties:
																							{
																								fontSize:
																									{
																										type: 'object',
																										description:
																											'The size of the font.',
																										properties:
																											{
																												magnitude:
																													{
																														type: 'number',
																														description:
																															'The magnitude of the measurement.',
																													},
																												unit: {
																													type: 'string',
																													description:
																														'The unit of measurement (e.g., PT).',
																												},
																											},
																										required:
																											[],
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																},
																paragraphStyle: {
																	type: 'object',
																	description:
																		'The style of the paragraph.',
																	properties: {
																		namedStyleType: {
																			type: 'string',
																			description:
																				'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
																		},
																		headingId: {
																			type: 'string',
																			description:
																				'The ID of the heading.',
																		},
																		direction: {
																			type: 'string',
																			description:
																				'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
																		},
																		spaceAbove: {
																			type: 'object',
																			description:
																				'The amount of space above the paragraph.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		spaceBelow: {
																			type: 'object',
																			description:
																				'The amount of space below the paragraph.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude of the measurement.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		lineSpacing: {
																			type: 'number',
																			description:
																				'The line spacing as a percentage of normal (100 = single).',
																		},
																		spacingMode: {
																			type: 'string',
																			description:
																				'The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).',
																		},
																		indentFirstLine: {
																			type: 'object',
																			description:
																				'The indentation of the first line.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude of the measurement.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		indentStart: {
																			type: 'object',
																			description:
																				'The indentation from the start of the paragraph.',
																			properties: {
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude of the measurement.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		borderBetween: {
																			type: 'object',
																			description:
																				'The border between paragraphs in the section.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The border color.',
																					properties: {},
																					required: [],
																					additionalProperties:
																						true,
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		borderTop: {
																			type: 'object',
																			description:
																				'The top border.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The border color.',
																					properties: {},
																					required: [],
																					additionalProperties:
																						true,
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		borderBottom: {
																			type: 'object',
																			description:
																				'The bottom border.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The border color.',
																					properties: {},
																					required: [],
																					additionalProperties:
																						true,
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		borderLeft: {
																			type: 'object',
																			description:
																				'The left border.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The border color.',
																					properties: {},
																					required: [],
																					additionalProperties:
																						true,
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		borderRight: {
																			type: 'object',
																			description:
																				'The right border.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The border color.',
																					properties: {},
																					required: [],
																					additionalProperties:
																						true,
																				},
																				width: {
																					type: 'object',
																					description:
																						'The width of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				padding: {
																					type: 'object',
																					description:
																						'The padding of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement (e.g., PT).',
																						},
																					},
																					required: [],
																				},
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border (SOLID, DOT, DASH).',
																				},
																			},
																			required: [],
																		},
																		shading: {
																			type: 'object',
																			description:
																				'The shading of the paragraph.',
																			properties: {
																				backgroundColor: {
																					type: 'object',
																					description:
																						'The background color.',
																					properties: {},
																					required: [],
																					additionalProperties:
																						true,
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
										},
										required: [],
									},
									headers: {
										type: 'array',
										description:
											'The headers in the document, keyed by header ID.',
										items: {
											type: 'object',
											properties: {
												headerId: {
													type: 'string',
													description:
														'The unique identifier of the header.',
												},
												content: {
													type: 'array',
													description:
														'The content elements within this section.',
													items: {
														type: 'object',
														properties: {
															startIndex: {
																type: 'number',
																description:
																	'The zero-based start index in UTF-16 code units.',
															},
															endIndex: {
																type: 'number',
																description:
																	'The zero-based end index in UTF-16 code units.',
															},
															paragraph: {
																type: 'object',
																description:
																	'A paragraph element in the document.',
																properties: {
																	elements: {
																		type: 'array',
																		description:
																			'The content elements within the paragraph.',
																		items: {
																			type: 'object',
																			properties: {
																				startIndex: {
																					type: 'number',
																					description:
																						'The zero-based start index in UTF-16 code units.',
																				},
																				endIndex: {
																					type: 'number',
																					description:
																						'The zero-based end index in UTF-16 code units.',
																				},
																				textRun: {
																					type: 'object',
																					description:
																						'A run of text with the same styling.',
																					properties: {
																						content: {
																							type: 'string',
																							description:
																								'The text content of the run.',
																						},
																						textStyle: {
																							type: 'object',
																							description:
																								'The text style properties for this run.',
																							properties:
																								{
																									backgroundColor:
																										{
																											type: 'object',
																											description:
																												'The background color.',
																											properties:
																												{},
																											required:
																												[],
																											additionalProperties:
																												true,
																										},
																									foregroundColor:
																										{
																											type: 'object',
																											description:
																												'The foreground (text) color.',
																											properties:
																												{
																													color: {
																														type: 'object',
																														description:
																															'The color value.',
																														properties:
																															{
																																rgbColor:
																																	{
																																		type: 'object',
																																		description:
																																			'The RGB color value.',
																																		properties:
																																			{},
																																		required:
																																			[],
																																		additionalProperties:
																																			true,
																																	},
																															},
																														required:
																															[],
																													},
																												},
																											required:
																												[],
																										},
																									fontSize:
																										{
																											type: 'object',
																											description:
																												'The size of the font.',
																											properties:
																												{
																													magnitude:
																														{
																															type: 'number',
																															description:
																																'The magnitude of the measurement.',
																														},
																													unit: {
																														type: 'string',
																														description:
																															'The unit of measurement (e.g., PT).',
																													},
																												},
																											required:
																												[],
																										},
																									weightedFontFamily:
																										{
																											type: 'object',
																											description:
																												'The font family and weight.',
																											properties:
																												{
																													fontFamily:
																														{
																															type: 'string',
																															description:
																																'The name of the font family.',
																														},
																													weight: {
																														type: 'number',
																														description:
																															'The weight (boldness) of the font.',
																													},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				inlineObjectElement:
																					{
																						type: 'object',
																						description:
																							'An inline object element (e.g., an image).',
																						properties:
																							{
																								inlineObjectId:
																									{
																										type: 'string',
																										description:
																											'The ID of the inline object.',
																									},
																								textStyle:
																									{
																										type: 'object',
																										description:
																											'The text style properties for this run.',
																										properties:
																											{},
																										required:
																											[],
																										additionalProperties:
																											true,
																									},
																							},
																						required:
																							[],
																					},
																			},
																			required: [],
																		},
																	},
																	paragraphStyle: {
																		type: 'object',
																		description:
																			'The style of the paragraph.',
																		properties: {
																			namedStyleType: {
																				type: 'string',
																				description:
																					'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
																			},
																			alignment: {
																				type: 'string',
																				description:
																					'The text alignment (START, CENTER, END, JUSTIFIED).',
																			},
																			lineSpacing: {
																				type: 'number',
																				description:
																					'The line spacing as a percentage of normal (100 = single).',
																			},
																			direction: {
																				type: 'string',
																				description:
																					'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
																			},
																			spacingMode: {
																				type: 'string',
																				description:
																					'The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).',
																			},
																			avoidWidowAndOrphan: {
																				type: 'boolean',
																				description:
																					'Whether to avoid widow and orphan lines.',
																			},
																			pageBreakBefore: {
																				type: 'boolean',
																				description:
																					'Whether there is a page break before this paragraph.',
																			},
																		},
																		required: [],
																	},
																},
																required: [],
															},
															table: {
																type: 'object',
																description:
																	'A table element in the document.',
																properties: {
																	rows: {
																		type: 'number',
																		description:
																			'The number of rows in the table.',
																	},
																	columns: {
																		type: 'number',
																		description:
																			'The number of columns in the table.',
																	},
																	tableRows: {
																		type: 'array',
																		description:
																			'The rows in the table.',
																		items: {
																			type: 'object',
																			properties: {
																				startIndex: {
																					type: 'number',
																					description:
																						'The zero-based start index in UTF-16 code units.',
																				},
																				endIndex: {
																					type: 'number',
																					description:
																						'The zero-based end index in UTF-16 code units.',
																				},
																				tableCells: {
																					type: 'array',
																					description:
																						'The cells in the table row.',
																					items: {
																						type: 'object',
																						properties:
																							{
																								startIndex:
																									{
																										type: 'number',
																										description:
																											'The zero-based start index in UTF-16 code units.',
																									},
																								endIndex:
																									{
																										type: 'number',
																										description:
																											'The zero-based end index in UTF-16 code units.',
																									},
																								content:
																									{
																										type: 'array',
																										description:
																											'The content elements within this section.',
																										items: {
																											type: 'object',
																											properties:
																												{
																													startIndex:
																														{
																															type: 'number',
																															description:
																																'The zero-based start index in UTF-16 code units.',
																														},
																													endIndex:
																														{
																															type: 'number',
																															description:
																																'The zero-based end index in UTF-16 code units.',
																														},
																													paragraph:
																														{
																															type: 'object',
																															description:
																																'A paragraph element in the document.',
																															properties:
																																{
																																	elements:
																																		{
																																			type: 'array',
																																			description:
																																				'The content elements within the paragraph.',
																																			items: {
																																				type: 'object',
																																				properties:
																																					{
																																						startIndex:
																																							{
																																								type: 'number',
																																								description:
																																									'The zero-based start index in UTF-16 code units.',
																																							},
																																						endIndex:
																																							{
																																								type: 'number',
																																								description:
																																									'The zero-based end index in UTF-16 code units.',
																																							},
																																						textRun:
																																							{
																																								type: 'object',
																																								description:
																																									'A run of text with the same styling.',
																																								properties:
																																									{
																																										content:
																																											{
																																												type: 'string',
																																												description:
																																													'The text content of the run.',
																																											},
																																										textStyle:
																																											{
																																												type: 'object',
																																												description:
																																													'The text style properties for this run.',
																																												properties:
																																													{
																																														backgroundColor:
																																															{
																																																type: 'object',
																																																description:
																																																	'The background color.',
																																																properties:
																																																	{},
																																																required:
																																																	[],
																																																additionalProperties:
																																																	true,
																																															},
																																														foregroundColor:
																																															{
																																																type: 'object',
																																																description:
																																																	'The foreground (text) color.',
																																																properties:
																																																	{
																																																		color: {
																																																			type: 'object',
																																																			description:
																																																				'The color value.',
																																																			properties:
																																																				{
																																																					rgbColor:
																																																						{
																																																							type: 'object',
																																																							description:
																																																								'The RGB color value.',
																																																							properties:
																																																								{
																																																									red: {
																																																										type: 'number',
																																																										description:
																																																											'Red component (0.0 to 1.0).',
																																																									},
																																																									green: {
																																																										type: 'number',
																																																										description:
																																																											'Green component (0.0 to 1.0).',
																																																									},
																																																									blue: {
																																																										type: 'number',
																																																										description:
																																																											'Blue component (0.0 to 1.0).',
																																																									},
																																																								},
																																																							required:
																																																								[],
																																																						},
																																																				},
																																																			required:
																																																				[],
																																																		},
																																																	},
																																																required:
																																																	[],
																																															},
																																														fontSize:
																																															{
																																																type: 'object',
																																																description:
																																																	'The size of the font.',
																																																properties:
																																																	{
																																																		magnitude:
																																																			{
																																																				type: 'number',
																																																				description:
																																																					'The magnitude of the measurement.',
																																																			},
																																																		unit: {
																																																			type: 'string',
																																																			description:
																																																				'The unit of measurement (e.g., PT).',
																																																		},
																																																	},
																																																required:
																																																	[],
																																															},
																																													},
																																												required:
																																													[],
																																											},
																																									},
																																								required:
																																									[],
																																							},
																																					},
																																				required:
																																					[],
																																			},
																																		},
																																	paragraphStyle:
																																		{
																																			type: 'object',
																																			description:
																																				'The style of the paragraph.',
																																			properties:
																																				{
																																					namedStyleType:
																																						{
																																							type: 'string',
																																							description:
																																								'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
																																						},
																																					alignment:
																																						{
																																							type: 'string',
																																							description:
																																								'The text alignment (START, CENTER, END, JUSTIFIED).',
																																						},
																																					lineSpacing:
																																						{
																																							type: 'number',
																																							description:
																																								'The line spacing as a percentage of normal (100 = single).',
																																						},
																																					direction:
																																						{
																																							type: 'string',
																																							description:
																																								'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
																																						},
																																					spacingMode:
																																						{
																																							type: 'string',
																																							description:
																																								'The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).',
																																						},
																																					spaceAbove:
																																						{
																																							type: 'object',
																																							description:
																																								'The amount of space above the paragraph.',
																																							properties:
																																								{
																																									unit: {
																																										type: 'string',
																																										description:
																																											'The unit of measurement (e.g., PT).',
																																									},
																																								},
																																							required:
																																								[],
																																						},
																																					spaceBelow:
																																						{
																																							type: 'object',
																																							description:
																																								'The amount of space below the paragraph.',
																																							properties:
																																								{
																																									unit: {
																																										type: 'string',
																																										description:
																																											'The unit of measurement (e.g., PT).',
																																									},
																																								},
																																							required:
																																								[],
																																						},
																																					borderBetween:
																																						{
																																							type: 'object',
																																							description:
																																								'The border between paragraphs in the section.',
																																							properties:
																																								{
																																									color: {
																																										type: 'object',
																																										description:
																																											'The border color.',
																																										properties:
																																											{},
																																										required:
																																											[],
																																										additionalProperties:
																																											true,
																																									},
																																									width: {
																																										type: 'object',
																																										description:
																																											'The width of the border.',
																																										properties:
																																											{
																																												unit: {
																																													type: 'string',
																																													description:
																																														'The unit of measurement (e.g., PT).',
																																												},
																																											},
																																										required:
																																											[],
																																									},
																																									padding:
																																										{
																																											type: 'object',
																																											description:
																																												'The padding of the border.',
																																											properties:
																																												{
																																													unit: {
																																														type: 'string',
																																														description:
																																															'The unit of measurement (e.g., PT).',
																																													},
																																												},
																																											required:
																																												[],
																																										},
																																									dashStyle:
																																										{
																																											type: 'string',
																																											description:
																																												'The dash style of the border (SOLID, DOT, DASH).',
																																										},
																																								},
																																							required:
																																								[],
																																						},
																																					borderTop:
																																						{
																																							type: 'object',
																																							description:
																																								'The top border.',
																																							properties:
																																								{
																																									color: {
																																										type: 'object',
																																										description:
																																											'The border color.',
																																										properties:
																																											{},
																																										required:
																																											[],
																																										additionalProperties:
																																											true,
																																									},
																																									width: {
																																										type: 'object',
																																										description:
																																											'The width of the border.',
																																										properties:
																																											{
																																												unit: {
																																													type: 'string',
																																													description:
																																														'The unit of measurement (e.g., PT).',
																																												},
																																											},
																																										required:
																																											[],
																																									},
																																									padding:
																																										{
																																											type: 'object',
																																											description:
																																												'The padding of the border.',
																																											properties:
																																												{
																																													unit: {
																																														type: 'string',
																																														description:
																																															'The unit of measurement (e.g., PT).',
																																													},
																																												},
																																											required:
																																												[],
																																										},
																																									dashStyle:
																																										{
																																											type: 'string',
																																											description:
																																												'The dash style of the border (SOLID, DOT, DASH).',
																																										},
																																								},
																																							required:
																																								[],
																																						},
																																					borderBottom:
																																						{
																																							type: 'object',
																																							description:
																																								'The bottom border.',
																																							properties:
																																								{
																																									color: {
																																										type: 'object',
																																										description:
																																											'The border color.',
																																										properties:
																																											{},
																																										required:
																																											[],
																																										additionalProperties:
																																											true,
																																									},
																																									width: {
																																										type: 'object',
																																										description:
																																											'The width of the border.',
																																										properties:
																																											{
																																												unit: {
																																													type: 'string',
																																													description:
																																														'The unit of measurement (e.g., PT).',
																																												},
																																											},
																																										required:
																																											[],
																																									},
																																									padding:
																																										{
																																											type: 'object',
																																											description:
																																												'The padding of the border.',
																																											properties:
																																												{
																																													unit: {
																																														type: 'string',
																																														description:
																																															'The unit of measurement (e.g., PT).',
																																													},
																																												},
																																											required:
																																												[],
																																										},
																																									dashStyle:
																																										{
																																											type: 'string',
																																											description:
																																												'The dash style of the border (SOLID, DOT, DASH).',
																																										},
																																								},
																																							required:
																																								[],
																																						},
																																					borderLeft:
																																						{
																																							type: 'object',
																																							description:
																																								'The left border.',
																																							properties:
																																								{
																																									color: {
																																										type: 'object',
																																										description:
																																											'The border color.',
																																										properties:
																																											{},
																																										required:
																																											[],
																																										additionalProperties:
																																											true,
																																									},
																																									width: {
																																										type: 'object',
																																										description:
																																											'The width of the border.',
																																										properties:
																																											{
																																												unit: {
																																													type: 'string',
																																													description:
																																														'The unit of measurement (e.g., PT).',
																																												},
																																											},
																																										required:
																																											[],
																																									},
																																									padding:
																																										{
																																											type: 'object',
																																											description:
																																												'The padding of the border.',
																																											properties:
																																												{
																																													unit: {
																																														type: 'string',
																																														description:
																																															'The unit of measurement (e.g., PT).',
																																													},
																																												},
																																											required:
																																												[],
																																										},
																																									dashStyle:
																																										{
																																											type: 'string',
																																											description:
																																												'The dash style of the border (SOLID, DOT, DASH).',
																																										},
																																								},
																																							required:
																																								[],
																																						},
																																					borderRight:
																																						{
																																							type: 'object',
																																							description:
																																								'The right border.',
																																							properties:
																																								{
																																									color: {
																																										type: 'object',
																																										description:
																																											'The border color.',
																																										properties:
																																											{},
																																										required:
																																											[],
																																										additionalProperties:
																																											true,
																																									},
																																									width: {
																																										type: 'object',
																																										description:
																																											'The width of the border.',
																																										properties:
																																											{
																																												unit: {
																																													type: 'string',
																																													description:
																																														'The unit of measurement (e.g., PT).',
																																												},
																																											},
																																										required:
																																											[],
																																									},
																																									padding:
																																										{
																																											type: 'object',
																																											description:
																																												'The padding of the border.',
																																											properties:
																																												{
																																													unit: {
																																														type: 'string',
																																														description:
																																															'The unit of measurement (e.g., PT).',
																																													},
																																												},
																																											required:
																																												[],
																																										},
																																									dashStyle:
																																										{
																																											type: 'string',
																																											description:
																																												'The dash style of the border (SOLID, DOT, DASH).',
																																										},
																																								},
																																							required:
																																								[],
																																						},
																																					indentFirstLine:
																																						{
																																							type: 'object',
																																							description:
																																								'The indentation of the first line.',
																																							properties:
																																								{
																																									unit: {
																																										type: 'string',
																																										description:
																																											'The unit of measurement (e.g., PT).',
																																									},
																																								},
																																							required:
																																								[],
																																						},
																																					indentStart:
																																						{
																																							type: 'object',
																																							description:
																																								'The indentation from the start of the paragraph.',
																																							properties:
																																								{
																																									unit: {
																																										type: 'string',
																																										description:
																																											'The unit of measurement (e.g., PT).',
																																									},
																																								},
																																							required:
																																								[],
																																						},
																																					indentEnd:
																																						{
																																							type: 'object',
																																							description:
																																								'The indentation from the end of the paragraph.',
																																							properties:
																																								{
																																									unit: {
																																										type: 'string',
																																										description:
																																											'The unit of measurement (e.g., PT).',
																																									},
																																								},
																																							required:
																																								[],
																																						},
																																					keepLinesTogether:
																																						{
																																							type: 'boolean',
																																							description:
																																								'Whether all lines of the paragraph should be on the same page.',
																																						},
																																					keepWithNext:
																																						{
																																							type: 'boolean',
																																							description:
																																								'Whether this paragraph should be on the same page as the next.',
																																						},
																																					avoidWidowAndOrphan:
																																						{
																																							type: 'boolean',
																																							description:
																																								'Whether to avoid widow and orphan lines.',
																																						},
																																					shading:
																																						{
																																							type: 'object',
																																							description:
																																								'The shading of the paragraph.',
																																							properties:
																																								{
																																									backgroundColor:
																																										{
																																											type: 'object',
																																											description:
																																												'The background color.',
																																											properties:
																																												{},
																																											required:
																																												[],
																																											additionalProperties:
																																												true,
																																										},
																																								},
																																							required:
																																								[],
																																						},
																																					pageBreakBefore:
																																						{
																																							type: 'boolean',
																																							description:
																																								'Whether there is a page break before this paragraph.',
																																						},
																																				},
																																			required:
																																				[],
																																		},
																																},
																															required:
																																[],
																														},
																												},
																											required:
																												[],
																										},
																									},
																								tableCellStyle:
																									{
																										type: 'object',
																										description:
																											'The style of the table cell.',
																										properties:
																											{
																												rowSpan:
																													{
																														type: 'number',
																														description:
																															'The number of rows this cell spans.',
																													},
																												columnSpan:
																													{
																														type: 'number',
																														description:
																															'The number of columns this cell spans.',
																													},
																												backgroundColor:
																													{
																														type: 'object',
																														description:
																															'The background color.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The color value.',
																																	properties:
																																		{
																																			rgbColor:
																																				{
																																					type: 'object',
																																					description:
																																						'The RGB color value.',
																																					properties:
																																						{
																																							red: {
																																								type: 'number',
																																								description:
																																									'Red component (0.0 to 1.0).',
																																							},
																																							green: {
																																								type: 'number',
																																								description:
																																									'Green component (0.0 to 1.0).',
																																							},
																																							blue: {
																																								type: 'number',
																																								description:
																																									'Blue component (0.0 to 1.0).',
																																							},
																																						},
																																					required:
																																						[],
																																				},
																																		},
																																	required:
																																		[],
																																},
																															},
																														required:
																															[],
																													},
																												borderLeft:
																													{
																														type: 'object',
																														description:
																															'The left border.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The border color.',
																																	properties:
																																		{
																																			color: {
																																				type: 'object',
																																				description:
																																					'The color value.',
																																				properties:
																																					{
																																						rgbColor:
																																							{
																																								type: 'object',
																																								description:
																																									'The RGB color value.',
																																								properties:
																																									{
																																										red: {
																																											type: 'number',
																																											description:
																																												'Red component (0.0 to 1.0).',
																																										},
																																										green: {
																																											type: 'number',
																																											description:
																																												'Green component (0.0 to 1.0).',
																																										},
																																										blue: {
																																											type: 'number',
																																											description:
																																												'Blue component (0.0 to 1.0).',
																																										},
																																									},
																																								required:
																																									[],
																																							},
																																					},
																																				required:
																																					[],
																																			},
																																		},
																																	required:
																																		[],
																																},
																																width: {
																																	type: 'object',
																																	description:
																																		'The width of the border.',
																																	properties:
																																		{
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude of the measurement.',
																																				},
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The unit of measurement (e.g., PT).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																																dashStyle:
																																	{
																																		type: 'string',
																																		description:
																																			'The dash style of the border (SOLID, DOT, DASH).',
																																	},
																															},
																														required:
																															[],
																													},
																												borderRight:
																													{
																														type: 'object',
																														description:
																															'The right border.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The border color.',
																																	properties:
																																		{
																																			color: {
																																				type: 'object',
																																				description:
																																					'The color value.',
																																				properties:
																																					{
																																						rgbColor:
																																							{
																																								type: 'object',
																																								description:
																																									'The RGB color value.',
																																								properties:
																																									{
																																										red: {
																																											type: 'number',
																																											description:
																																												'Red component (0.0 to 1.0).',
																																										},
																																										green: {
																																											type: 'number',
																																											description:
																																												'Green component (0.0 to 1.0).',
																																										},
																																										blue: {
																																											type: 'number',
																																											description:
																																												'Blue component (0.0 to 1.0).',
																																										},
																																									},
																																								required:
																																									[],
																																							},
																																					},
																																				required:
																																					[],
																																			},
																																		},
																																	required:
																																		[],
																																},
																																width: {
																																	type: 'object',
																																	description:
																																		'The width of the border.',
																																	properties:
																																		{
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude of the measurement.',
																																				},
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The unit of measurement (e.g., PT).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																																dashStyle:
																																	{
																																		type: 'string',
																																		description:
																																			'The dash style of the border (SOLID, DOT, DASH).',
																																	},
																															},
																														required:
																															[],
																													},
																												borderTop:
																													{
																														type: 'object',
																														description:
																															'The top border.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The border color.',
																																	properties:
																																		{
																																			color: {
																																				type: 'object',
																																				description:
																																					'The color value.',
																																				properties:
																																					{
																																						rgbColor:
																																							{
																																								type: 'object',
																																								description:
																																									'The RGB color value.',
																																								properties:
																																									{
																																										red: {
																																											type: 'number',
																																											description:
																																												'Red component (0.0 to 1.0).',
																																										},
																																										green: {
																																											type: 'number',
																																											description:
																																												'Green component (0.0 to 1.0).',
																																										},
																																										blue: {
																																											type: 'number',
																																											description:
																																												'Blue component (0.0 to 1.0).',
																																										},
																																									},
																																								required:
																																									[],
																																							},
																																					},
																																				required:
																																					[],
																																			},
																																		},
																																	required:
																																		[],
																																},
																																width: {
																																	type: 'object',
																																	description:
																																		'The width of the border.',
																																	properties:
																																		{
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude of the measurement.',
																																				},
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The unit of measurement (e.g., PT).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																																dashStyle:
																																	{
																																		type: 'string',
																																		description:
																																			'The dash style of the border (SOLID, DOT, DASH).',
																																	},
																															},
																														required:
																															[],
																													},
																												borderBottom:
																													{
																														type: 'object',
																														description:
																															'The bottom border.',
																														properties:
																															{
																																color: {
																																	type: 'object',
																																	description:
																																		'The border color.',
																																	properties:
																																		{
																																			color: {
																																				type: 'object',
																																				description:
																																					'The color value.',
																																				properties:
																																					{
																																						rgbColor:
																																							{
																																								type: 'object',
																																								description:
																																									'The RGB color value.',
																																								properties:
																																									{
																																										red: {
																																											type: 'number',
																																											description:
																																												'Red component (0.0 to 1.0).',
																																										},
																																										green: {
																																											type: 'number',
																																											description:
																																												'Green component (0.0 to 1.0).',
																																										},
																																										blue: {
																																											type: 'number',
																																											description:
																																												'Blue component (0.0 to 1.0).',
																																										},
																																									},
																																								required:
																																									[],
																																							},
																																					},
																																				required:
																																					[],
																																			},
																																		},
																																	required:
																																		[],
																																},
																																width: {
																																	type: 'object',
																																	description:
																																		'The width of the border.',
																																	properties:
																																		{
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude of the measurement.',
																																				},
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The unit of measurement (e.g., PT).',
																																			},
																																		},
																																	required:
																																		[],
																																},
																																dashStyle:
																																	{
																																		type: 'string',
																																		description:
																																			'The dash style of the border (SOLID, DOT, DASH).',
																																	},
																															},
																														required:
																															[],
																													},
																												paddingLeft:
																													{
																														type: 'object',
																														description:
																															'The left padding of the cell.',
																														properties:
																															{
																																magnitude:
																																	{
																																		type: 'number',
																																		description:
																																			'The magnitude of the measurement.',
																																	},
																																unit: {
																																	type: 'string',
																																	description:
																																		'The unit of measurement (e.g., PT).',
																																},
																															},
																														required:
																															[],
																													},
																												paddingRight:
																													{
																														type: 'object',
																														description:
																															'The right padding of the cell.',
																														properties:
																															{
																																magnitude:
																																	{
																																		type: 'number',
																																		description:
																																			'The magnitude of the measurement.',
																																	},
																																unit: {
																																	type: 'string',
																																	description:
																																		'The unit of measurement (e.g., PT).',
																																},
																															},
																														required:
																															[],
																													},
																												paddingTop:
																													{
																														type: 'object',
																														description:
																															'The top padding of the cell.',
																														properties:
																															{
																																magnitude:
																																	{
																																		type: 'number',
																																		description:
																																			'The magnitude of the measurement.',
																																	},
																																unit: {
																																	type: 'string',
																																	description:
																																		'The unit of measurement (e.g., PT).',
																																},
																															},
																														required:
																															[],
																													},
																												paddingBottom:
																													{
																														type: 'object',
																														description:
																															'The bottom padding of the cell.',
																														properties:
																															{
																																magnitude:
																																	{
																																		type: 'number',
																																		description:
																																			'The magnitude of the measurement.',
																																	},
																																unit: {
																																	type: 'string',
																																	description:
																																		'The unit of measurement (e.g., PT).',
																																},
																															},
																														required:
																															[],
																													},
																												contentAlignment:
																													{
																														type: 'string',
																														description:
																															'The alignment of content in the cell (TOP, MIDDLE, BOTTOM).',
																													},
																											},
																										required:
																											[],
																									},
																							},
																						required:
																							[],
																					},
																				},
																				tableRowStyle: {
																					type: 'object',
																					description:
																						'The style of the table row.',
																					properties: {
																						minRowHeight:
																							{
																								type: 'object',
																								description:
																									'The minimum height of the row.',
																								properties:
																									{
																										magnitude:
																											{
																												type: 'number',
																												description:
																													'The magnitude of the measurement.',
																											},
																										unit: {
																											type: 'string',
																											description:
																												'The unit of measurement (e.g., PT).',
																										},
																									},
																								required:
																									[],
																							},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																	},
																	tableStyle: {
																		type: 'object',
																		description:
																			'The style of the table.',
																		properties: {
																			tableColumnProperties: {
																				type: 'array',
																				description:
																					'The properties of each table column.',
																				items: {
																					type: 'object',
																					properties: {
																						widthType: {
																							type: 'string',
																							description:
																								'The width type of the column (EVENLY_DISTRIBUTED, FIXED_WIDTH).',
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
														required: [],
													},
												},
											},
											required: [],
										},
									},
									footers: {
										type: 'array',
										description: 'The footers in the document.',
										items: {
											type: 'object',
											properties: {
												footerId: {
													type: 'string',
													description:
														'The unique identifier of the footer.',
												},
												content: {
													type: 'array',
													description:
														'The content elements within this section.',
													items: {
														type: 'object',
														properties: {
															endIndex: {
																type: 'number',
																description:
																	'The zero-based end index in UTF-16 code units.',
															},
															paragraph: {
																type: 'object',
																description:
																	'A paragraph element in the document.',
																properties: {
																	elements: {
																		type: 'array',
																		description:
																			'The content elements within the paragraph.',
																		items: {
																			type: 'object',
																			properties: {
																				endIndex: {
																					type: 'number',
																					description:
																						'The zero-based end index in UTF-16 code units.',
																				},
																				inlineObjectElement:
																					{
																						type: 'object',
																						description:
																							'An inline object element (e.g., an image).',
																						properties:
																							{
																								inlineObjectId:
																									{
																										type: 'string',
																										description:
																											'The ID of the inline object.',
																									},
																								textStyle:
																									{
																										type: 'object',
																										description:
																											'The text style properties for this run.',
																										properties:
																											{},
																										required:
																											[],
																										additionalProperties:
																											true,
																									},
																							},
																						required:
																							[],
																					},
																			},
																			required: [],
																		},
																	},
																	paragraphStyle: {
																		type: 'object',
																		description:
																			'The style of the paragraph.',
																		properties: {
																			namedStyleType: {
																				type: 'string',
																				description:
																					'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
																			},
																			direction: {
																				type: 'string',
																				description:
																					'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
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
											},
											required: [],
										},
									},
									footnotes: {
										type: 'array',
										description: 'The footnotes in the document.',
										items: {
											type: 'object',
											properties: {
												footnoteId: {
													type: 'string',
													description:
														'The unique identifier of the footnote.',
												},
												content: {
													type: 'array',
													description:
														'The content elements within this section.',
													items: {
														type: 'object',
														properties: {
															endIndex: {
																type: 'number',
																description:
																	'The zero-based end index in UTF-16 code units.',
															},
															paragraph: {
																type: 'object',
																description:
																	'A paragraph element in the document.',
																properties: {
																	elements: {
																		type: 'array',
																		description:
																			'The content elements within the paragraph.',
																		items: {
																			type: 'object',
																			properties: {
																				endIndex: {
																					type: 'number',
																					description:
																						'The zero-based end index in UTF-16 code units.',
																				},
																				textRun: {
																					type: 'object',
																					description:
																						'A run of text with the same styling.',
																					properties: {
																						content: {
																							type: 'string',
																							description:
																								'The text content of the run.',
																						},
																						textStyle: {
																							type: 'object',
																							description:
																								'The text style properties for this run.',
																							properties:
																								{
																									fontSize:
																										{
																											type: 'object',
																											description:
																												'The size of the font.',
																											properties:
																												{
																													magnitude:
																														{
																															type: 'number',
																															description:
																																'The magnitude of the measurement.',
																														},
																													unit: {
																														type: 'string',
																														description:
																															'The unit of measurement (e.g., PT).',
																													},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																	},
																	paragraphStyle: {
																		type: 'object',
																		description:
																			'The style of the paragraph.',
																		properties: {
																			namedStyleType: {
																				type: 'string',
																				description:
																					'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
																			},
																			direction: {
																				type: 'string',
																				description:
																					'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
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
											},
											required: [],
										},
									},
									documentStyle: {
										type: 'object',
										description: 'The style settings for the document.',
										properties: {
											background: {
												type: 'object',
												description: 'The background of the document.',
												properties: {
													color: {
														type: 'object',
														description: 'The color value.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												required: [],
											},
											defaultHeaderId: {
												type: 'string',
												description: 'The ID of the default header.',
											},
											defaultFooterId: {
												type: 'string',
												description: 'The ID of the default footer.',
											},
											pageNumberStart: {
												type: 'number',
												description:
													'The page number from which to start counting.',
											},
											marginTop: {
												type: 'object',
												description: 'The top margin of the page.',
												properties: {
													magnitude: {
														type: 'number',
														description:
															'The magnitude of the measurement.',
													},
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											marginBottom: {
												type: 'object',
												description: 'The bottom margin of the page.',
												properties: {
													magnitude: {
														type: 'number',
														description:
															'The magnitude of the measurement.',
													},
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											marginRight: {
												type: 'object',
												description: 'The right margin of the page.',
												properties: {
													magnitude: {
														type: 'number',
														description:
															'The magnitude of the measurement.',
													},
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											marginLeft: {
												type: 'object',
												description: 'The left margin of the page.',
												properties: {
													magnitude: {
														type: 'number',
														description:
															'The magnitude of the measurement.',
													},
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											pageSize: {
												type: 'object',
												description: 'The size of the page.',
												properties: {
													height: {
														type: 'object',
														description: 'The height dimension.',
														properties: {
															magnitude: {
																type: 'number',
																description:
																	'The magnitude of the measurement.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
													width: {
														type: 'object',
														description: 'The width dimension.',
														properties: {
															magnitude: {
																type: 'number',
																description:
																	'The magnitude of the measurement.',
															},
															unit: {
																type: 'string',
																description:
																	'The unit of measurement (e.g., PT).',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											marginHeader: {
												type: 'object',
												description:
													'The margin between the top of the page and the header.',
												properties: {
													magnitude: {
														type: 'number',
														description:
															'The magnitude of the measurement.',
													},
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
											marginFooter: {
												type: 'object',
												description:
													'The margin between the bottom of the page and the footer.',
												properties: {
													magnitude: {
														type: 'number',
														description:
															'The magnitude of the measurement.',
													},
													unit: {
														type: 'string',
														description:
															'The unit of measurement (e.g., PT).',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									namedStyles: {
										type: 'object',
										description: 'The named styles defined in the document.',
										properties: {
											styles: {
												type: 'array',
												description: 'The named style definitions.',
												items: {
													type: 'object',
													properties: {
														namedStyleType: {
															type: 'string',
															description:
																'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
														},
														textStyle: {
															type: 'object',
															description:
																'The text style properties for this run.',
															properties: {},
															required: [],
															additionalProperties: true,
														},
														paragraphStyle: {
															type: 'object',
															description:
																'The style of the paragraph.',
															properties: {
																namedStyleType: {
																	type: 'string',
																	description:
																		'The type of named style (e.g., NORMAL_TEXT, HEADING_1).',
																},
																alignment: {
																	type: 'string',
																	description:
																		'The text alignment (START, CENTER, END, JUSTIFIED).',
																},
																lineSpacing: {
																	type: 'number',
																	description:
																		'The line spacing as a percentage of normal (100 = single).',
																},
																direction: {
																	type: 'string',
																	description:
																		'The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).',
																},
																spacingMode: {
																	type: 'string',
																	description:
																		'The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).',
																},
																spaceAbove: {
																	type: 'object',
																	description:
																		'The amount of space above the paragraph.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The unit of measurement (e.g., PT).',
																		},
																	},
																	required: [],
																},
																spaceBelow: {
																	type: 'object',
																	description:
																		'The amount of space below the paragraph.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The unit of measurement (e.g., PT).',
																		},
																	},
																	required: [],
																},
																borderBetween: {
																	type: 'object',
																	description:
																		'The border between paragraphs in the section.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The border color.',
																			properties: {},
																			required: [],
																			additionalProperties:
																				true,
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																borderTop: {
																	type: 'object',
																	description: 'The top border.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The border color.',
																			properties: {},
																			required: [],
																			additionalProperties:
																				true,
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																borderBottom: {
																	type: 'object',
																	description:
																		'The bottom border.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The border color.',
																			properties: {},
																			required: [],
																			additionalProperties:
																				true,
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																borderLeft: {
																	type: 'object',
																	description: 'The left border.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The border color.',
																			properties: {},
																			required: [],
																			additionalProperties:
																				true,
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																borderRight: {
																	type: 'object',
																	description:
																		'The right border.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The border color.',
																			properties: {},
																			required: [],
																			additionalProperties:
																				true,
																		},
																		width: {
																			type: 'object',
																			description:
																				'The width of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		padding: {
																			type: 'object',
																			description:
																				'The padding of the border.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The unit of measurement (e.g., PT).',
																				},
																			},
																			required: [],
																		},
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the border (SOLID, DOT, DASH).',
																		},
																	},
																	required: [],
																},
																indentFirstLine: {
																	type: 'object',
																	description:
																		'The indentation of the first line.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The unit of measurement (e.g., PT).',
																		},
																	},
																	required: [],
																},
																indentStart: {
																	type: 'object',
																	description:
																		'The indentation from the start of the paragraph.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The unit of measurement (e.g., PT).',
																		},
																	},
																	required: [],
																},
																indentEnd: {
																	type: 'object',
																	description:
																		'The indentation from the end of the paragraph.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The unit of measurement (e.g., PT).',
																		},
																	},
																	required: [],
																},
																keepLinesTogether: {
																	type: 'boolean',
																	description:
																		'Whether all lines of the paragraph should be on the same page.',
																},
																keepWithNext: {
																	type: 'boolean',
																	description:
																		'Whether this paragraph should be on the same page as the next.',
																},
																avoidWidowAndOrphan: {
																	type: 'boolean',
																	description:
																		'Whether to avoid widow and orphan lines.',
																},
																shading: {
																	type: 'object',
																	description:
																		'The shading of the paragraph.',
																	properties: {
																		backgroundColor: {
																			type: 'object',
																			description:
																				'The background color.',
																			properties: {},
																			required: [],
																			additionalProperties:
																				true,
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
										},
										required: [],
									},
									lists: {
										type: 'array',
										description: 'The lists in the document, keyed by list ID.',
										items: {
											type: 'object',
											properties: {
												listProperties: {
													type: 'object',
													description: 'The properties of the list.',
													properties: {
														nestingLevels: {
															type: 'array',
															description:
																'The nesting levels of the list.',
															items: {
																type: 'object',
																properties: {
																	bulletAlignment: {
																		type: 'string',
																		description:
																			'The alignment of the bullet (START, CENTER, END).',
																	},
																	glyphSymbol: {
																		type: 'string',
																		description:
																			'The symbol used for the bullet glyph.',
																	},
																	glyphFormat: {
																		type: 'string',
																		description:
																			'The format string for the bullet glyph.',
																	},
																	indentFirstLine: {
																		type: 'object',
																		description:
																			'The indentation of the first line.',
																		properties: {
																			magnitude: {
																				type: 'number',
																				description:
																					'The magnitude of the measurement.',
																			},
																			unit: {
																				type: 'string',
																				description:
																					'The unit of measurement (e.g., PT).',
																			},
																		},
																		required: [],
																	},
																	indentStart: {
																		type: 'object',
																		description:
																			'The indentation from the start of the paragraph.',
																		properties: {
																			magnitude: {
																				type: 'number',
																				description:
																					'The magnitude of the measurement.',
																			},
																			unit: {
																				type: 'string',
																				description:
																					'The unit of measurement (e.g., PT).',
																			},
																		},
																		required: [],
																	},
																	textStyle: {
																		type: 'object',
																		description:
																			'The text style properties for this run.',
																		properties: {
																			underline: {
																				type: 'boolean',
																				description:
																					'Whether the text is underlined.',
																			},
																			foregroundColor: {
																				type: 'object',
																				description:
																					'The foreground (text) color.',
																				properties: {
																					color: {
																						type: 'object',
																						description:
																							'The color value.',
																						properties:
																							{
																								rgbColor:
																									{
																										type: 'object',
																										description:
																											'The RGB color value.',
																										properties:
																											{
																												red: {
																													type: 'number',
																													description:
																														'Red component (0.0 to 1.0).',
																												},
																												green: {
																													type: 'number',
																													description:
																														'Green component (0.0 to 1.0).',
																												},
																												blue: {
																													type: 'number',
																													description:
																														'Blue component (0.0 to 1.0).',
																												},
																											},
																										required:
																											[],
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																	startNumber: {
																		type: 'number',
																		description:
																			'The number of the first item in the list.',
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
									inlineObjects: {
										type: 'object',
										description:
											'The inline objects in the document, keyed by object ID.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									inlineObjectsArray: {
										type: 'array',
										description:
											'The inline objects in the document as an array.',
										items: {
											type: 'object',
											properties: {
												objectId: {
													type: 'string',
													description:
														'The unique identifier of the object.',
												},
												label: {
													type: 'string',
													description: 'The display label of the object.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							childTabs: {
								type: 'array',
								description: 'Child tabs nested within this tab.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
];
