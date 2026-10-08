// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-slides',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google Slides API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://slides.googleapis.com`. Provide the remaining path in the URL parameter\n(e.g. `/v1/presentations/{presentationId}`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Google Slides API reference](https://developers.google.com/slides/api/reference/rest) for available\nendpoints, required parameters, and response schemas.',
		accounts: { google: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://slides.googleapis.com`. For example, `/v1/presentations/{presentationId}`.',
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
		appName: 'google-slides',
		appVersion: 1,
		endpointName: 'batchUpdatePresentation',
		label: 'Batch update a presentation',
		description: 'Applies one or more updates to a Google Slides presentation.',
		context:
			'---\nname: batchUpdatePresentation\ndescription: Applies one or more updates to a Google Slides presentation.\n---\n\nSends a batch of update requests to a presentation. Each item in `requests` is one Request object: set exactly one of the request fields. All requests are validated before any are applied -- if any request is invalid, the entire batch fails.\n\nThis endpoint covers the `presentations.batchUpdate` operations used by **Add/Delete a Slide**, **Create a Slide from a Template Slide**, **Insert Links in a Presentation**, **Refresh a Chart**, and **Upload an Image To a Presentation**. Other Google Request types are not exposed here; use **Arbitrary call** for those.\n\nSupported request fields:\n\n- `createSlide` -- add a slide from a predefined layout or layout ID (Add a Slide)\n- `deleteObject` -- delete a slide or page element by object ID (Delete a Slide)\n- `insertText` -- insert text into a shape or table cell (Add a Slide content)\n- `duplicateObject` -- duplicate a slide or page element (Create a Slide from a Template Slide). Optional `objectIds` maps each source object ID to the ID of its duplicate.\n- `replaceAllText` -- find and replace text, optionally limited to page object IDs\n- `updateSlideProperties` -- for example `isSkipped` after duplicating a template slide\n- `updateSlidesPosition` -- move slides to an insertion index\n- `updateTextStyle` -- apply text style and hyperlinks (Insert Links in a Presentation)\n- `refreshSheetsChart` -- refresh an embedded Google Sheets chart (Refresh a Chart)\n- `replaceAllShapesWithImage` -- replace shapes matching text with an image (Upload an Image)\n- `replaceImage` -- replace an existing image by object ID (Upload an Image)\n\nEach request produces one reply in `replies`, in the same order. Most types return an empty reply. Create, duplicate, and replace types return an `objectId` or `occurrencesChanged`.\n\nUse `writeControl.requiredRevisionId` for optimistic locking. Get the current revision ID from **Get a presentation** first. If the presentation changed, the request returns 400.\n\nRefer to the [presentations.batchUpdate reference](https://developers.google.com/slides/api/reference/rest/v1/presentations/batchUpdate).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/presentations'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				presentationId: {
					type: 'string',
					description:
						'The ID of the presentation to apply the updates to. You can find this in the presentation URL: docs.google.com/presentation/d/{presentationId}/edit',
				},
				requests: {
					type: 'array',
					description:
						'A list of updates to apply to the presentation. Each item is one Request: set exactly one of createSlide, deleteObject, insertText, duplicateObject, replaceAllText, updateSlideProperties, updateSlidesPosition, updateTextStyle, refreshSheetsChart, replaceAllShapesWithImage, or replaceImage. All requests are validated before any are applied -- if any request is invalid, the entire batch fails. See the [presentations.batchUpdate reference](https://developers.google.com/slides/api/reference/rest/v1/presentations/batchUpdate).',
					items: {
						type: 'object',
						description:
							'A single update request. Set exactly one request field per item. These types cover Add/Delete a Slide, Create a Slide from a Template Slide, Insert Links in a Presentation, Refresh a Chart, and Upload an Image To a Presentation.',
						properties: {
							createSlide: {
								type: 'object',
								description:
									'A create slide request. Set this field or another request field, not several.',
								properties: {
									objectId: {
										type: 'string',
										description:
											"A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The ID length must be between 5 and 50 characters, inclusive. If you don't specify an ID, a unique one is generated.",
									},
									placeholderIdMappings: {
										type: 'array',
										description:
											'An optional list of object ID mappings from the placeholder(s) on the layout to the placeholders that are created on the slide from the specified layout. Can only be used when `slide_layout_reference` is specified.',
										items: {
											type: 'object',
											description:
												'The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.',
											properties: {
												objectId: {
													type: 'string',
													description:
														"A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.",
												},
												layoutPlaceholder: {
													type: 'object',
													description:
														'The placeholder on a layout that will be applied to a slide. Only type and index are needed. For example, a predefined `TITLE_AND_BODY` layout may usually have a TITLE placeholder with index 0 and a BODY placeholder with index 0.',
													properties: {
														index: {
															type: 'number',
															description:
																'The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.',
														},
														type: {
															type: 'string',
															description:
																'The type of the placeholder.',
															default: '',
															enum: [
																'',
																'NONE',
																'BODY',
																'CHART',
																'CLIP_ART',
																'CENTERED_TITLE',
																'DIAGRAM',
																'DATE_AND_TIME',
																'FOOTER',
																'HEADER',
																'MEDIA',
																'OBJECT',
																'PICTURE',
																'SLIDE_NUMBER',
																'SUBTITLE',
																'TABLE',
																'TITLE',
																'SLIDE_IMAGE',
															],
														},
														parentObjectId: {
															type: 'string',
															description:
																"The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.",
														},
													},
													required: [],
												},
												layoutPlaceholderObjectId: {
													type: 'string',
													description:
														'The object ID of the placeholder on a layout that will be applied to a slide.',
												},
											},
											required: [],
										},
									},
									slideLayoutReference: {
										type: 'object',
										description:
											"Layout reference of the slide to be inserted, based on the *current master*, which is one of the following: - The master of the previous slide index. - The master of the first slide, if the insertion_index is zero. - The first master in the presentation, if there are no slides. If the LayoutReference is not found in the current master, a 400 bad request error is returned. If you don't specify a layout reference, the slide uses the predefined `BLANK` layout.",
										properties: {
											layoutId: {
												type: 'string',
												description:
													'Layout ID: the object ID of one of the layouts in the presentation.',
											},
											predefinedLayout: {
												type: 'string',
												description: 'Predefined layout.',
												default: '',
												enum: [
													'',
													'PREDEFINED_LAYOUT_UNSPECIFIED',
													'BLANK',
													'CAPTION_ONLY',
													'TITLE',
													'TITLE_AND_BODY',
													'TITLE_AND_TWO_COLUMNS',
													'TITLE_ONLY',
													'SECTION_HEADER',
													'SECTION_TITLE_AND_DESCRIPTION',
													'ONE_COLUMN_TEXT',
													'MAIN_POINT',
													'BIG_NUMBER',
												],
											},
										},
										required: [],
									},
									insertionIndex: {
										type: 'number',
										description:
											"The optional zero-based index indicating where to insert the slides. If you don't specify an index, the slide is created at the end.",
									},
								},
								required: [],
							},
							deleteObject: {
								type: 'object',
								description:
									'A delete object request. Set this field or another request field, not several.',
								properties: {
									objectId: {
										type: 'string',
										description:
											'The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting placeholders are also deleted.',
									},
								},
								required: [],
							},
							insertText: {
								type: 'object',
								description:
									'A insert text request. Set this field or another request field, not several.',
								properties: {
									insertionIndex: {
										type: 'number',
										description:
											'The index where the text will be inserted, in Unicode code units, based on TextElement indexes. The index is zero-based and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme clusters. In these cases, the text will be inserted immediately after the grapheme cluster.',
									},
									cellLocation: {
										type: 'object',
										description:
											'The optional table cell location if the text is to be inserted into a table cell. If present, the object_id must refer to a table.',
										properties: {
											rowIndex: {
												type: 'number',
												description: 'The 0-based row index.',
											},
											columnIndex: {
												type: 'number',
												description: 'The 0-based column index.',
											},
										},
										required: [],
									},
									objectId: {
										type: 'string',
										description:
											'The object ID of the shape or table where the text will be inserted.',
									},
									text: {
										type: 'string',
										description:
											'The text to be inserted. Inserting a newline character will implicitly create a new ParagraphMarker at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text will be added to the TextRun that exists at the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.',
									},
								},
								required: [],
							},
							duplicateObject: {
								type: 'object',
								description:
									'A duplicate object request. Set this field or another request field, not several.',
								properties: {
									objectId: {
										type: 'string',
										description: 'The ID of the object to duplicate.',
									},
									objectIds: {
										type: 'array',
										description:
											"The object being duplicated may contain other objects, for example when duplicating a slide or a group page element. This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object's duplicate may be specified in this map as well, using the same value of the `objectId` field as a key and the newly desired ID as the value. All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation and must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or greater than 50. If any IDs of source objects are omitted from the map, a new random ID will be assigned. If the map is empty or unset, all duplicate objects will receive a new random ID.",
										items: {
											type: 'object',
											description:
												'A mapping from a source object ID to the ID to assign to its duplicate.',
											properties: {
												key: {
													type: 'string',
													description:
														'The object ID of the source object.',
												},
												value: {
													type: 'string',
													description:
														'The object ID to assign to the duplicate.',
												},
											},
											required: ['key'],
										},
									},
								},
								required: [],
							},
							replaceAllText: {
								type: 'object',
								description:
									'A replace all text request. Set this field or another request field, not several.',
								properties: {
									replaceText: {
										type: 'string',
										description: 'The text that will replace the matched text.',
									},
									containsText: {
										type: 'object',
										description:
											'Finds text in a shape matching this substring.',
										properties: {
											matchCase: {
												type: 'boolean',
												description:
													'Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.',
											},
											text: {
												type: 'string',
												description:
													'The text to search for in the shape or table.',
											},
											searchByRegex: {
												type: 'boolean',
												description:
													'Optional. True if the find value should be treated as a regular expression. Any backslashes in the pattern should be escaped. - `True`: the search text is treated as a regular expressions. - `False`: the search text is treated as a substring for matching.',
											},
										},
										required: [],
									},
									pageObjectIds: {
										type: 'array',
										description:
											"If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes master, or if a page with that object ID doesn't exist in the presentation.",
										items: {
											type: 'string',
											description: 'A page object ids value.',
										},
									},
								},
								required: [],
							},
							updateSlideProperties: {
								type: 'object',
								description:
									'A update slide properties request. Set this field or another request field, not several.',
								properties: {
									slideProperties: {
										type: 'object',
										description: 'The slide properties to update.',
										properties: {
											isSkipped: {
												type: 'boolean',
												description:
													'Whether the slide is skipped in the presentation mode. Defaults to false.',
											},
										},
										required: [],
									},
									fields: {
										type: 'string',
										description:
											'The fields that should be updated. At least one field must be specified. The root \'slideProperties\' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update whether a slide is skipped, set `fields` to `"isSkipped"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
									},
									objectId: {
										type: 'string',
										description:
											'The object ID of the slide the update is applied to.',
									},
								},
								required: [],
							},
							updateSlidesPosition: {
								type: 'object',
								description:
									'A update slides position request. Set this field or another request field, not several.',
								properties: {
									slideObjectIds: {
										type: 'array',
										description:
											'The IDs of the slides in the presentation that should be moved. The slides in this list must be in existing presentation order, without duplicates.',
										items: {
											type: 'string',
											description: 'A slide object ids value.',
										},
									},
									insertionIndex: {
										type: 'number',
										description:
											'The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be between zero and the number of slides in the presentation, inclusive.',
									},
								},
								required: [],
							},
							updateTextStyle: {
								type: 'object',
								description:
									'A update text style request. Set this field or another request field, not several.',
								properties: {
									fields: {
										type: 'string',
										description:
											'The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.',
									},
									style: {
										type: 'object',
										description:
											'The style(s) to set on the text. If the value for a particular style matches that of the parent, that style will be set to inherit. Certain text style changes may cause other changes meant to mirror the behavior of the Slides editor. See the documentation of TextStyle for more information.',
										properties: {
											bold: {
												type: 'boolean',
												description:
													'Whether or not the text is rendered as bold.',
											},
											italic: {
												type: 'boolean',
												description:
													'Whether or not the text is italicized.',
											},
											strikethrough: {
												type: 'boolean',
												description:
													'Whether or not the text is struck through.',
											},
											foregroundColor: {
												type: 'object',
												description:
													'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
												properties: {
													opaqueColor: {
														type: 'object',
														description:
															'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
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
													"The size of the text's font. When read, the `font_size` will specified in points.",
												properties: {
													unit: {
														type: 'string',
														description: 'The units for magnitude.',
														default: '',
														enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
													},
													magnitude: {
														type: 'number',
														description: 'The magnitude.',
													},
												},
												required: [],
											},
											smallCaps: {
												type: 'boolean',
												description:
													'Whether or not the text is in small capital letters.',
											},
											backgroundColor: {
												type: 'object',
												description:
													'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
												properties: {
													opaqueColor: {
														type: 'object',
														description:
															'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
												},
												required: [],
											},
											link: {
												type: 'object',
												description:
													'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
												properties: {
													slideIndex: {
														type: 'number',
														description:
															'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
													},
													url: {
														type: 'string',
														description:
															'If set, indicates this is a link to the external web page at this URL.',
													},
													pageObjectId: {
														type: 'string',
														description:
															'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
													},
													relativeLink: {
														type: 'string',
														description:
															'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
														default: '',
														enum: [
															'',
															'RELATIVE_SLIDE_LINK_UNSPECIFIED',
															'NEXT_SLIDE',
															'PREVIOUS_SLIDE',
															'FIRST_SLIDE',
															'LAST_SLIDE',
														],
													},
												},
												required: [],
											},
											underline: {
												type: 'boolean',
												description:
													'Whether or not the text is underlined.',
											},
											baselineOffset: {
												type: 'string',
												description:
													"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
												default: '',
												enum: [
													'',
													'BASELINE_OFFSET_UNSPECIFIED',
													'NONE',
													'SUPERSCRIPT',
													'SUBSCRIPT',
												],
											},
											weightedFontFamily: {
												type: 'object',
												description:
													'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
												properties: {
													weight: {
														type: 'number',
														description:
															'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
													},
													fontFamily: {
														type: 'string',
														description:
															'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
													},
												},
												required: [],
											},
											fontFamily: {
												type: 'string',
												description:
													'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
											},
										},
										required: [],
									},
									textRange: {
										type: 'object',
										description:
											"The range of text to style. The range may be extended to include adjacent newlines. If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style.",
										properties: {
											type: {
												type: 'string',
												description: 'The type of range.',
												default: '',
												enum: [
													'',
													'FIXED_RANGE',
													'FROM_START_INDEX',
													'ALL',
												],
											},
											endIndex: {
												type: 'number',
												description:
													'The optional zero-based index of the end of the collection. Required for `FIXED_RANGE` ranges.',
											},
											startIndex: {
												type: 'number',
												description:
													'The optional zero-based index of the beginning of the collection. Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.',
											},
										},
										required: [],
									},
									cellLocation: {
										type: 'object',
										description:
											'The location of the cell in the table containing the text to style. If `object_id` refers to a table, `cell_location` must have a value. Otherwise, it must not.',
										properties: {
											rowIndex: {
												type: 'number',
												description: 'The 0-based row index.',
											},
											columnIndex: {
												type: 'number',
												description: 'The 0-based column index.',
											},
										},
										required: [],
									},
									objectId: {
										type: 'string',
										description:
											'The object ID of the shape or table with the text to be styled.',
									},
								},
								required: [],
							},
							refreshSheetsChart: {
								type: 'object',
								description:
									'A refresh sheets chart request. Set this field or another request field, not several.',
								properties: {
									objectId: {
										type: 'string',
										description: 'The object ID of the chart to refresh.',
									},
								},
								required: [],
							},
							replaceAllShapesWithImage: {
								type: 'object',
								description:
									'A replace all shapes with image request. Set this field or another request field, not several.',
								properties: {
									pageObjectIds: {
										type: 'array',
										description:
											"If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.",
										items: {
											type: 'string',
											description: 'A page object ids value.',
										},
									},
									imageUrl: {
										type: 'string',
										description:
											'The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field.',
									},
									containsText: {
										type: 'object',
										description:
											'If set, this request will replace all of the shapes that contain the given text.',
										properties: {
											matchCase: {
												type: 'boolean',
												description:
													'Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.',
											},
											text: {
												type: 'string',
												description:
													'The text to search for in the shape or table.',
											},
											searchByRegex: {
												type: 'boolean',
												description:
													'Optional. True if the find value should be treated as a regular expression. Any backslashes in the pattern should be escaped. - `True`: the search text is treated as a regular expressions. - `False`: the search text is treated as a substring for matching.',
											},
										},
										required: [],
									},
									imageReplaceMethod: {
										type: 'string',
										description:
											"The image replace method. If you don't specify a value, CENTER_INSIDE is used.",
										default: '',
										enum: ['', 'CENTER_INSIDE', 'CENTER_CROP'],
									},
								},
								required: [],
							},
							replaceImage: {
								type: 'object',
								description:
									'A replace image request. Set this field or another request field, not several.',
								properties: {
									imageObjectId: {
										type: 'string',
										description:
											'The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.',
									},
									imageReplaceMethod: {
										type: 'string',
										description:
											"The replacement method. If you don't specify a value, CENTER_INSIDE is used.",
										default: '',
										enum: ['', 'CENTER_INSIDE', 'CENTER_CROP'],
									},
									url: {
										type: 'string',
										description:
											"The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URL can't surpass 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field.",
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
						'Optional control over how write requests are executed. Use requiredRevisionId for optimistic locking. Get the current revision ID from Get a presentation first.',
					properties: {
						requiredRevisionId: {
							type: 'string',
							description:
								'The revision ID of the presentation required for the write request. If it does not match the current revision ID, the request returns a 400 error.',
						},
					},
					required: [],
				},
			},
			required: ['presentationId', 'requests'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				presentationId: {
					type: 'string',
					description: 'The presentation the updates were applied to.',
				},
				replies: {
					type: 'array',
					description:
						'The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.',
					items: {
						type: 'object',
						description: 'A single response from an update.',
						properties: {
							createSlide: {
								type: 'object',
								description: 'The result of creating a slide.',
								properties: {
									objectId: {
										type: 'string',
										description: 'The object ID of the created slide.',
									},
								},
								required: [],
							},
							duplicateObject: {
								type: 'object',
								description: 'The result of duplicating an object.',
								properties: {
									objectId: {
										type: 'string',
										description: 'The ID of the new duplicate object.',
									},
								},
								required: [],
							},
							replaceAllText: {
								type: 'object',
								description: 'The result of replacing text.',
								properties: {
									occurrencesChanged: {
										type: 'number',
										description:
											'The number of occurrences changed by replacing all text.',
									},
								},
								required: [],
							},
							replaceAllShapesWithImage: {
								type: 'object',
								description:
									'The result of replacing all shapes matching some criteria with an image.',
								properties: {
									occurrencesChanged: {
										type: 'number',
										description: 'The number of shapes replaced with images.',
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
							description:
								"The revision ID of the presentation required for the write request. If specified and the required revision ID doesn't match the presentation's current revision ID, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.",
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-slides',
		appVersion: 1,
		endpointName: 'createPresentation',
		label: 'Create a presentation',
		description: 'Creates a blank Google Slides presentation.',
		context:
			"---\nname: createPresentation\ndescription: Creates a blank Google Slides presentation.\n---\n\nCreates a blank presentation using the given title.\n\nThe new presentation is created in the user's My Drive root. To copy an existing presentation into a folder, use the Google Drive API `files.copy` method.\n\nRefer to the [presentations.create reference](https://developers.google.com/slides/api/reference/rest/v1/presentations/create).\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/presentations'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				slides: {
					type: 'array',
					description:
						'The slides in the presentation. A slide inherits properties from a slide layout.',
					items: {
						type: 'object',
						description: 'A page in a presentation.',
						properties: {
							objectId: {
								type: 'string',
								description:
									'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
							},
							layoutProperties: {
								type: 'object',
								description:
									'Layout specific properties. Only set if page_type = LAYOUT.',
								properties: {
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this layout is based on.',
									},
									name: {
										type: 'string',
										description: 'The name of the layout.',
									},
									displayName: {
										type: 'string',
										description: 'The human-readable name of the layout.',
									},
								},
								required: [],
							},
							masterProperties: {
								type: 'object',
								description:
									'Master specific properties. Only set if page_type = MASTER.',
								properties: {
									displayName: {
										type: 'string',
										description: 'The human-readable name of the master.',
									},
								},
								required: [],
							},
							pageType: {
								type: 'string',
								description: 'The type of the page.',
								default: '',
								enum: ['', 'SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'],
							},
							notesProperties: {
								type: 'object',
								description:
									'Notes specific properties. Only set if page_type = NOTES.',
								properties: {
									speakerNotesObjectId: {
										type: 'string',
										description:
											'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
									},
								},
								required: [],
							},
							slideProperties: {
								type: 'object',
								description:
									'Slide specific properties. Only set if page_type = SLIDE.',
								properties: {
									notesPage: {
										type: 'object',
										description:
											'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
										properties: {
											objectId: {
												type: 'string',
												description:
													'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
											},
											pageType: {
												type: 'string',
												description: 'The type of the page.',
												default: '',
												enum: [
													'',
													'SLIDE',
													'MASTER',
													'LAYOUT',
													'NOTES',
													'NOTES_MASTER',
												],
											},
										},
										required: [],
									},
									layoutObjectId: {
										type: 'string',
										description:
											'The object ID of the layout that this slide is based on. This property is read-only.',
									},
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this slide is based on. This property is read-only.',
									},
									isSkipped: {
										type: 'boolean',
										description:
											'Whether the slide is skipped in the presentation mode. Defaults to false.',
									},
								},
								required: [],
							},
							pageProperties: {
								type: 'object',
								description: 'The properties of the page.',
								properties: {
									pageBackgroundFill: {
										type: 'object',
										description:
											'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
										properties: {
											solidFill: {
												type: 'object',
												description: 'Solid color fill.',
												properties: {
													color: {
														type: 'object',
														description:
															'The color value of the solid fill.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'THEME_COLOR_TYPE_UNSPECIFIED',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
													alpha: {
														type: 'number',
														description:
															'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
													},
												},
												required: [],
											},
											stretchedPictureFill: {
												type: 'object',
												description: 'Stretched picture fill.',
												properties: {
													contentUrl: {
														type: 'string',
														description:
															"Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
													},
													size: {
														type: 'object',
														description:
															'The original size of the picture fill. This field is read-only.',
														properties: {
															width: {
																type: 'object',
																description:
																	'The width of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
															height: {
																type: 'object',
																description:
																	'The height of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
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
											propertyState: {
												type: 'string',
												description:
													'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
												default: '',
												enum: ['', 'RENDERED', 'NOT_RENDERED', 'INHERIT'],
											},
										},
										required: [],
									},
									colorScheme: {
										type: 'object',
										description:
											'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
										properties: {
											colors: {
												type: 'array',
												description:
													'The ThemeColorType and corresponding concrete color pairs.',
												items: {
													type: 'object',
													description:
														'A pair mapping a theme color type to the concrete color it represents.',
													properties: {
														color: {
															type: 'object',
															description:
																'The concrete color corresponding to the theme color type above.',
															properties: {
																red: {
																	type: 'number',
																	description:
																		'The red component of the color, from 0.0 to 1.0.',
																},
																blue: {
																	type: 'number',
																	description:
																		'The blue component of the color, from 0.0 to 1.0.',
																},
																green: {
																	type: 'number',
																	description:
																		'The green component of the color, from 0.0 to 1.0.',
																},
															},
															required: [],
														},
														type: {
															type: 'string',
															description:
																'The type of the theme color.',
															default: '',
															enum: [
																'',
																'THEME_COLOR_TYPE_UNSPECIFIED',
																'DARK1',
																'LIGHT1',
																'DARK2',
																'LIGHT2',
																'ACCENT1',
																'ACCENT2',
																'ACCENT3',
																'ACCENT4',
																'ACCENT5',
																'ACCENT6',
																'HYPERLINK',
																'FOLLOWED_HYPERLINK',
																'TEXT1',
																'BACKGROUND1',
																'TEXT2',
																'BACKGROUND2',
															],
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
							revisionId: {
								type: 'string',
								description:
									"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
							},
							pageElements: {
								type: 'array',
								description: 'The page elements rendered on the page.',
								items: {
									type: 'object',
									description: 'A visual element rendered on a page.',
									properties: {
										objectId: {
											type: 'string',
											description:
												'The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.',
										},
										transform: {
											type: 'object',
											description:
												"The transform of the page element. The visual appearance of the page element is determined by its absolute transform. To compute the absolute transform, preconcatenate a page element's transform with the transforms of all of its parent groups. If the page element is not in a group, its absolute transform is the same as the value in this field. The initial transform for the newly created Group is always the identity transform.",
											properties: {
												scaleX: {
													type: 'number',
													description:
														'The X coordinate scaling element.',
												},
												shearX: {
													type: 'number',
													description:
														'The X coordinate shearing element.',
												},
												translateX: {
													type: 'number',
													description:
														'The X coordinate translation element.',
												},
												scaleY: {
													type: 'number',
													description:
														'The Y coordinate scaling element.',
												},
												translateY: {
													type: 'number',
													description:
														'The Y coordinate translation element.',
												},
												shearY: {
													type: 'number',
													description:
														'The Y coordinate shearing element.',
												},
												unit: {
													type: 'string',
													description:
														'The units for translate elements.',
													default: '',
													enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
												},
											},
											required: [],
										},
										elementGroup: {
											type: 'object',
											description:
												'A collection of page elements joined as a single unit.',
											properties: {
												children: {
													type: 'array',
													description:
														'The collection of elements in the group. The minimum size of a group is 2.',
													items: {
														type: 'object',
														description:
															'A visual element rendered on a page.',
														properties: {
															objectId: {
																type: 'string',
																description:
																	'The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.',
															},
															description: {
																type: 'string',
																description:
																	'The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.',
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
										speakerSpotlight: {
											type: 'object',
											description: 'A Speaker Spotlight.',
											properties: {
												speakerSpotlightProperties: {
													type: 'object',
													description:
														'The properties of the Speaker Spotlight.',
													properties: {
														outline: {
															type: 'object',
															description:
																'The outline of the Speaker Spotlight. If not set, it has no outline.',
															properties: {
																dashStyle: {
																	type: 'string',
																	description:
																		'The dash style of the outline.',
																	default: '',
																	enum: [
																		'',
																		'DASH_STYLE_UNSPECIFIED',
																		'SOLID',
																		'DOT',
																		'DASH',
																		'DASH_DOT',
																		'LONG_DASH',
																		'LONG_DASH_DOT',
																	],
																},
																outlineFill: {
																	type: 'object',
																	description:
																		'The fill of the outline.',
																	properties: {
																		solidFill: {
																			type: 'object',
																			description:
																				'Solid color fill.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value of the solid fill.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																				alpha: {
																					type: 'number',
																					description:
																						'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																weight: {
																	type: 'object',
																	description:
																		'The thickness of the outline.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
															},
															required: [],
														},
														shadow: {
															type: 'object',
															description:
																'The shadow of the Speaker Spotlight. If not set, it has no shadow.',
															properties: {
																alpha: {
																	type: 'number',
																	description:
																		"The alpha of the shadow's color, from 0.0 to 1.0.",
																},
																transform: {
																	type: 'object',
																	description:
																		'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
																	properties: {
																		scaleX: {
																			type: 'number',
																			description:
																				'The X coordinate scaling element.',
																		},
																		shearX: {
																			type: 'number',
																			description:
																				'The X coordinate shearing element.',
																		},
																		translateX: {
																			type: 'number',
																			description:
																				'The X coordinate translation element.',
																		},
																		scaleY: {
																			type: 'number',
																			description:
																				'The Y coordinate scaling element.',
																		},
																		translateY: {
																			type: 'number',
																			description:
																				'The Y coordinate translation element.',
																		},
																		shearY: {
																			type: 'number',
																			description:
																				'The Y coordinate shearing element.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The units for translate elements.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																	},
																	required: [],
																},
																alignment: {
																	type: 'string',
																	description:
																		'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'RECTANGLE_POSITION_UNSPECIFIED',
																		'TOP_LEFT',
																		'TOP_CENTER',
																		'TOP_RIGHT',
																		'LEFT_CENTER',
																		'CENTER',
																		'RIGHT_CENTER',
																		'BOTTOM_LEFT',
																		'BOTTOM_CENTER',
																		'BOTTOM_RIGHT',
																	],
																},
																type: {
																	type: 'string',
																	description:
																		'The type of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'SHADOW_TYPE_UNSPECIFIED',
																		'OUTER',
																	],
																},
																rotateWithShape: {
																	type: 'boolean',
																	description:
																		'Whether the shadow should rotate with the shape. This property is read-only.',
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
																color: {
																	type: 'object',
																	description:
																		'The shadow color value.',
																	properties: {
																		rgbColor: {
																			type: 'object',
																			description:
																				'An opaque RGB color.',
																			properties: {
																				red: {
																					type: 'number',
																					description:
																						'The red component of the color, from 0.0 to 1.0.',
																				},
																				blue: {
																					type: 'number',
																					description:
																						'The blue component of the color, from 0.0 to 1.0.',
																				},
																				green: {
																					type: 'number',
																					description:
																						'The green component of the color, from 0.0 to 1.0.',
																				},
																			},
																			required: [],
																		},
																		themeColor: {
																			type: 'string',
																			description:
																				'An opaque theme color.',
																			default: '',
																			enum: [
																				'',
																				'THEME_COLOR_TYPE_UNSPECIFIED',
																				'DARK1',
																				'LIGHT1',
																				'DARK2',
																				'LIGHT2',
																				'ACCENT1',
																				'ACCENT2',
																				'ACCENT3',
																				'ACCENT4',
																				'ACCENT5',
																				'ACCENT6',
																				'HYPERLINK',
																				'FOLLOWED_HYPERLINK',
																				'TEXT1',
																				'BACKGROUND1',
																				'TEXT2',
																				'BACKGROUND2',
																			],
																		},
																	},
																	required: [],
																},
																blurRadius: {
																	type: 'object',
																	description:
																		'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
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
										shape: {
											type: 'object',
											description: 'A generic shape.',
											properties: {
												placeholder: {
													type: 'object',
													description:
														'Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the shape is a placeholder shape and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.',
													properties: {
														index: {
															type: 'number',
															description:
																'The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.',
														},
														type: {
															type: 'string',
															description:
																'The type of the placeholder.',
															default: '',
															enum: [
																'',
																'NONE',
																'BODY',
																'CHART',
																'CLIP_ART',
																'CENTERED_TITLE',
																'DIAGRAM',
																'DATE_AND_TIME',
																'FOOTER',
																'HEADER',
																'MEDIA',
																'OBJECT',
																'PICTURE',
																'SLIDE_NUMBER',
																'SUBTITLE',
																'TABLE',
																'TITLE',
																'SLIDE_IMAGE',
															],
														},
														parentObjectId: {
															type: 'string',
															description:
																"The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.",
														},
													},
													required: [],
												},
												shapeType: {
													type: 'string',
													description: 'The type of the shape.',
													default: '',
													enum: [
														'',
														'TYPE_UNSPECIFIED',
														'TEXT_BOX',
														'RECTANGLE',
														'ROUND_RECTANGLE',
														'ELLIPSE',
														'ARC',
														'BENT_ARROW',
														'BENT_UP_ARROW',
														'BEVEL',
														'BLOCK_ARC',
														'BRACE_PAIR',
														'BRACKET_PAIR',
														'CAN',
														'CHEVRON',
														'CHORD',
														'CLOUD',
														'CORNER',
														'CUBE',
														'CURVED_DOWN_ARROW',
														'CURVED_LEFT_ARROW',
														'CURVED_RIGHT_ARROW',
														'CURVED_UP_ARROW',
														'DECAGON',
														'DIAGONAL_STRIPE',
														'DIAMOND',
														'DODECAGON',
														'DONUT',
														'DOUBLE_WAVE',
														'DOWN_ARROW',
														'DOWN_ARROW_CALLOUT',
														'FOLDED_CORNER',
														'FRAME',
														'HALF_FRAME',
														'HEART',
														'HEPTAGON',
														'HEXAGON',
														'HOME_PLATE',
														'HORIZONTAL_SCROLL',
														'IRREGULAR_SEAL_1',
														'IRREGULAR_SEAL_2',
														'LEFT_ARROW',
														'LEFT_ARROW_CALLOUT',
														'LEFT_BRACE',
														'LEFT_BRACKET',
														'LEFT_RIGHT_ARROW',
														'LEFT_RIGHT_ARROW_CALLOUT',
														'LEFT_RIGHT_UP_ARROW',
														'LEFT_UP_ARROW',
														'LIGHTNING_BOLT',
														'MATH_DIVIDE',
														'MATH_EQUAL',
														'MATH_MINUS',
														'MATH_MULTIPLY',
														'MATH_NOT_EQUAL',
														'MATH_PLUS',
														'MOON',
														'NO_SMOKING',
														'NOTCHED_RIGHT_ARROW',
														'OCTAGON',
														'PARALLELOGRAM',
														'PENTAGON',
														'PIE',
														'PLAQUE',
														'PLUS',
														'QUAD_ARROW',
														'QUAD_ARROW_CALLOUT',
														'RIBBON',
														'RIBBON_2',
														'RIGHT_ARROW',
														'RIGHT_ARROW_CALLOUT',
														'RIGHT_BRACE',
														'RIGHT_BRACKET',
														'ROUND_1_RECTANGLE',
														'ROUND_2_DIAGONAL_RECTANGLE',
														'ROUND_2_SAME_RECTANGLE',
														'RIGHT_TRIANGLE',
														'SMILEY_FACE',
														'SNIP_1_RECTANGLE',
														'SNIP_2_DIAGONAL_RECTANGLE',
														'SNIP_2_SAME_RECTANGLE',
														'SNIP_ROUND_RECTANGLE',
														'STAR_10',
														'STAR_12',
														'STAR_16',
														'STAR_24',
														'STAR_32',
														'STAR_4',
														'STAR_5',
														'STAR_6',
														'STAR_7',
														'STAR_8',
														'STRIPED_RIGHT_ARROW',
														'SUN',
														'TRAPEZOID',
														'TRIANGLE',
														'UP_ARROW',
														'UP_ARROW_CALLOUT',
														'UP_DOWN_ARROW',
														'UTURN_ARROW',
														'VERTICAL_SCROLL',
														'WAVE',
														'WEDGE_ELLIPSE_CALLOUT',
														'WEDGE_RECTANGLE_CALLOUT',
														'WEDGE_ROUND_RECTANGLE_CALLOUT',
														'FLOW_CHART_ALTERNATE_PROCESS',
														'FLOW_CHART_COLLATE',
														'FLOW_CHART_CONNECTOR',
														'FLOW_CHART_DECISION',
														'FLOW_CHART_DELAY',
														'FLOW_CHART_DISPLAY',
														'FLOW_CHART_DOCUMENT',
														'FLOW_CHART_EXTRACT',
														'FLOW_CHART_INPUT_OUTPUT',
														'FLOW_CHART_INTERNAL_STORAGE',
														'FLOW_CHART_MAGNETIC_DISK',
														'FLOW_CHART_MAGNETIC_DRUM',
														'FLOW_CHART_MAGNETIC_TAPE',
														'FLOW_CHART_MANUAL_INPUT',
														'FLOW_CHART_MANUAL_OPERATION',
														'FLOW_CHART_MERGE',
														'FLOW_CHART_MULTIDOCUMENT',
														'FLOW_CHART_OFFLINE_STORAGE',
														'FLOW_CHART_OFFPAGE_CONNECTOR',
														'FLOW_CHART_ONLINE_STORAGE',
														'FLOW_CHART_OR',
														'FLOW_CHART_PREDEFINED_PROCESS',
														'FLOW_CHART_PREPARATION',
														'FLOW_CHART_PROCESS',
														'FLOW_CHART_PUNCHED_CARD',
														'FLOW_CHART_PUNCHED_TAPE',
														'FLOW_CHART_SORT',
														'FLOW_CHART_SUMMING_JUNCTION',
														'FLOW_CHART_TERMINATOR',
														'ARROW_EAST',
														'ARROW_NORTH_EAST',
														'ARROW_NORTH',
														'SPEECH',
														'STARBURST',
														'TEARDROP',
														'ELLIPSE_RIBBON',
														'ELLIPSE_RIBBON_2',
														'CLOUD_CALLOUT',
														'CUSTOM',
													],
												},
												shapeProperties: {
													type: 'object',
													description: 'The properties of the shape.',
													properties: {
														link: {
															type: 'object',
															description:
																'The hyperlink destination of the shape. If unset, there is no link. Links are not inherited from parent placeholders.',
															properties: {
																slideIndex: {
																	type: 'number',
																	description:
																		'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																},
																url: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the external web page at this URL.',
																},
																pageObjectId: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																},
																relativeLink: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																	default: '',
																	enum: [
																		'',
																		'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																		'NEXT_SLIDE',
																		'PREVIOUS_SLIDE',
																		'FIRST_SLIDE',
																		'LAST_SLIDE',
																	],
																},
															},
															required: [],
														},
														autofit: {
															type: 'object',
															description:
																'The autofit properties of the shape. This property is only set for shapes that allow text.',
															properties: {
																fontScale: {
																	type: 'number',
																	description:
																		"The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that's rendered in the editor. This property is read-only.",
																},
																autofitType: {
																	type: 'string',
																	description:
																		'The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case, the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values.',
																	default: '',
																	enum: [
																		'',
																		'AUTOFIT_TYPE_UNSPECIFIED',
																		'NONE',
																		'TEXT_AUTOFIT',
																		'SHAPE_AUTOFIT',
																	],
																},
																lineSpacingReduction: {
																	type: 'number',
																	description:
																		"The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that's rendered in the editor. This property is read-only.",
																},
															},
															required: [],
														},
														shadow: {
															type: 'object',
															description:
																'The shadow properties of the shape. If unset, the shadow is inherited from a parent placeholder if it exists. If the shape has no parent, then the default shadow matches the defaults for new shapes created in the Slides editor. This property is read-only.',
															properties: {
																alpha: {
																	type: 'number',
																	description:
																		"The alpha of the shadow's color, from 0.0 to 1.0.",
																},
																transform: {
																	type: 'object',
																	description:
																		'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
																	properties: {
																		scaleX: {
																			type: 'number',
																			description:
																				'The X coordinate scaling element.',
																		},
																		shearX: {
																			type: 'number',
																			description:
																				'The X coordinate shearing element.',
																		},
																		translateX: {
																			type: 'number',
																			description:
																				'The X coordinate translation element.',
																		},
																		scaleY: {
																			type: 'number',
																			description:
																				'The Y coordinate scaling element.',
																		},
																		translateY: {
																			type: 'number',
																			description:
																				'The Y coordinate translation element.',
																		},
																		shearY: {
																			type: 'number',
																			description:
																				'The Y coordinate shearing element.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The units for translate elements.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																	},
																	required: [],
																},
																alignment: {
																	type: 'string',
																	description:
																		'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'RECTANGLE_POSITION_UNSPECIFIED',
																		'TOP_LEFT',
																		'TOP_CENTER',
																		'TOP_RIGHT',
																		'LEFT_CENTER',
																		'CENTER',
																		'RIGHT_CENTER',
																		'BOTTOM_LEFT',
																		'BOTTOM_CENTER',
																		'BOTTOM_RIGHT',
																	],
																},
																type: {
																	type: 'string',
																	description:
																		'The type of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'SHADOW_TYPE_UNSPECIFIED',
																		'OUTER',
																	],
																},
																rotateWithShape: {
																	type: 'boolean',
																	description:
																		'Whether the shadow should rotate with the shape. This property is read-only.',
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
																color: {
																	type: 'object',
																	description:
																		'The shadow color value.',
																	properties: {
																		rgbColor: {
																			type: 'object',
																			description:
																				'An opaque RGB color.',
																			properties: {
																				red: {
																					type: 'number',
																					description:
																						'The red component of the color, from 0.0 to 1.0.',
																				},
																				blue: {
																					type: 'number',
																					description:
																						'The blue component of the color, from 0.0 to 1.0.',
																				},
																				green: {
																					type: 'number',
																					description:
																						'The green component of the color, from 0.0 to 1.0.',
																				},
																			},
																			required: [],
																		},
																		themeColor: {
																			type: 'string',
																			description:
																				'An opaque theme color.',
																			default: '',
																			enum: [
																				'',
																				'THEME_COLOR_TYPE_UNSPECIFIED',
																				'DARK1',
																				'LIGHT1',
																				'DARK2',
																				'LIGHT2',
																				'ACCENT1',
																				'ACCENT2',
																				'ACCENT3',
																				'ACCENT4',
																				'ACCENT5',
																				'ACCENT6',
																				'HYPERLINK',
																				'FOLLOWED_HYPERLINK',
																				'TEXT1',
																				'BACKGROUND1',
																				'TEXT2',
																				'BACKGROUND2',
																			],
																		},
																	},
																	required: [],
																},
																blurRadius: {
																	type: 'object',
																	description:
																		'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														outline: {
															type: 'object',
															description:
																'The outline of the shape. If unset, the outline is inherited from a parent placeholder if it exists. If the shape has no parent, then the default outline depends on the shape type, matching the defaults for new shapes created in the Slides editor.',
															properties: {
																dashStyle: {
																	type: 'string',
																	description:
																		'The dash style of the outline.',
																	default: '',
																	enum: [
																		'',
																		'DASH_STYLE_UNSPECIFIED',
																		'SOLID',
																		'DOT',
																		'DASH',
																		'DASH_DOT',
																		'LONG_DASH',
																		'LONG_DASH_DOT',
																	],
																},
																outlineFill: {
																	type: 'object',
																	description:
																		'The fill of the outline.',
																	properties: {
																		solidFill: {
																			type: 'object',
																			description:
																				'Solid color fill.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value of the solid fill.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																				alpha: {
																					type: 'number',
																					description:
																						'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																weight: {
																	type: 'object',
																	description:
																		'The thickness of the outline.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
															},
															required: [],
														},
														shapeBackgroundFill: {
															type: 'object',
															description:
																'The background fill of the shape. If unset, the background fill is inherited from a parent placeholder if it exists. If the shape has no parent, then the default background fill depends on the shape type, matching the defaults for new shapes created in the Slides editor.',
															properties: {
																propertyState: {
																	type: 'string',
																	description:
																		'The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
																solidFill: {
																	type: 'object',
																	description:
																		'Solid color fill.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color value of the solid fill.',
																			properties: {
																				rgbColor: {
																					type: 'object',
																					description:
																						'An opaque RGB color.',
																					properties: {
																						red: {
																							type: 'number',
																							description:
																								'The red component of the color, from 0.0 to 1.0.',
																						},
																						blue: {
																							type: 'number',
																							description:
																								'The blue component of the color, from 0.0 to 1.0.',
																						},
																						green: {
																							type: 'number',
																							description:
																								'The green component of the color, from 0.0 to 1.0.',
																						},
																					},
																					required: [],
																				},
																				themeColor: {
																					type: 'string',
																					description:
																						'An opaque theme color.',
																					default: '',
																					enum: [
																						'',
																						'THEME_COLOR_TYPE_UNSPECIFIED',
																						'DARK1',
																						'LIGHT1',
																						'DARK2',
																						'LIGHT2',
																						'ACCENT1',
																						'ACCENT2',
																						'ACCENT3',
																						'ACCENT4',
																						'ACCENT5',
																						'ACCENT6',
																						'HYPERLINK',
																						'FOLLOWED_HYPERLINK',
																						'TEXT1',
																						'BACKGROUND1',
																						'TEXT2',
																						'BACKGROUND2',
																					],
																				},
																			},
																			required: [],
																		},
																		alpha: {
																			type: 'number',
																			description:
																				'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														contentAlignment: {
															type: 'string',
															description:
																'The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor.',
															default: '',
															enum: [
																'',
																'CONTENT_ALIGNMENT_UNSPECIFIED',
																'CONTENT_ALIGNMENT_UNSUPPORTED',
																'TOP',
																'MIDDLE',
																'BOTTOM',
															],
														},
													},
													required: [],
												},
												text: {
													type: 'object',
													description: 'The text content of the shape.',
													properties: {
														lists: {
															type: 'object',
															description:
																'The bulleted lists contained in this text, keyed by list ID.',
															properties: {},
															required: [],
															additionalProperties: true,
														},
														textElements: {
															type: 'array',
															description:
																'The text contents broken down into its component parts, including styling information. This property is read-only.',
															items: {
																type: 'object',
																description:
																	'A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.',
																properties: {
																	endIndex: {
																		type: 'number',
																		description:
																			'The zero-based end index of this text element, exclusive, in Unicode code units.',
																	},
																	paragraphMarker: {
																		type: 'object',
																		description:
																			"A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.",
																		properties: {
																			style: {
																				type: 'object',
																				description:
																					"The paragraph's style",
																				properties: {
																					indentEnd: {
																						type: 'object',
																						description:
																							'The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					spacingMode: {
																						type: 'string',
																						description:
																							'The spacing mode for the paragraph.',
																						default: '',
																						enum: [
																							'',
																							'SPACING_MODE_UNSPECIFIED',
																							'NEVER_COLLAPSE',
																							'COLLAPSE_LISTS',
																						],
																					},
																					indentStart: {
																						type: 'object',
																						description:
																							'The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					alignment: {
																						type: 'string',
																						description:
																							'The text alignment for this paragraph.',
																						default: '',
																						enum: [
																							'',
																							'ALIGNMENT_UNSPECIFIED',
																							'START',
																							'CENTER',
																							'END',
																							'JUSTIFIED',
																						],
																					},
																					indentFirstLine:
																						{
																							type: 'object',
																							description:
																								'The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.',
																							properties:
																								{
																									unit: {
																										type: 'string',
																										description:
																											'The units for magnitude.',
																										default:
																											'',
																										enum: [
																											'',
																											'UNIT_UNSPECIFIED',
																											'EMU',
																											'PT',
																										],
																									},
																									magnitude:
																										{
																											type: 'number',
																											description:
																												'The magnitude.',
																										},
																								},
																							required:
																								[],
																						},
																					lineSpacing: {
																						type: 'number',
																						description:
																							'The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.',
																					},
																					direction: {
																						type: 'string',
																						description:
																							'The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.',
																						default: '',
																						enum: [
																							'',
																							'TEXT_DIRECTION_UNSPECIFIED',
																							'LEFT_TO_RIGHT',
																							'RIGHT_TO_LEFT',
																						],
																					},
																					spaceAbove: {
																						type: 'object',
																						description:
																							'The amount of extra space above the paragraph. If unset, the value is inherited from the parent.',
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					spaceBelow: {
																						type: 'object',
																						description:
																							'The amount of extra space below the paragraph. If unset, the value is inherited from the parent.',
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: [],
																			},
																			bullet: {
																				type: 'object',
																				description:
																					'The bullet for this paragraph. If not present, the paragraph does not belong to a list.',
																				properties: {
																					glyph: {
																						type: 'string',
																						description:
																							'The rendered bullet glyph for this paragraph.',
																					},
																					bulletStyle: {
																						type: 'object',
																						description:
																							'The paragraph specific text style applied to this bullet.',
																						properties:
																							{
																								bold: {
																									type: 'boolean',
																									description:
																										'Whether or not the text is rendered as bold.',
																								},
																								italic: {
																									type: 'boolean',
																									description:
																										'Whether or not the text is italicized.',
																								},
																								strikethrough:
																									{
																										type: 'boolean',
																										description:
																											'Whether or not the text is struck through.',
																									},
																								foregroundColor:
																									{
																										type: 'object',
																										description:
																											'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																										properties:
																											{
																												opaqueColor:
																													{
																														type: 'object',
																														description:
																															'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																														properties:
																															{
																																rgbColor:
																																	{
																																		type: 'object',
																																		description:
																																			'An opaque RGB color.',
																																		properties:
																																			{
																																				red: {
																																					type: 'number',
																																					description:
																																						'The red component of the color, from 0.0 to 1.0.',
																																				},
																																				blue: {
																																					type: 'number',
																																					description:
																																						'The blue component of the color, from 0.0 to 1.0.',
																																				},
																																				green: {
																																					type: 'number',
																																					description:
																																						'The green component of the color, from 0.0 to 1.0.',
																																				},
																																			},
																																		required:
																																			[],
																																	},
																																themeColor:
																																	{
																																		type: 'string',
																																		description:
																																			'An opaque theme color.',
																																		default:
																																			'',
																																		enum: [
																																			'',
																																			'THEME_COLOR_TYPE_UNSPECIFIED',
																																			'DARK1',
																																			'LIGHT1',
																																			'DARK2',
																																			'LIGHT2',
																																			'ACCENT1',
																																			'ACCENT2',
																																			'ACCENT3',
																																			'ACCENT4',
																																			'ACCENT5',
																																			'ACCENT6',
																																			'HYPERLINK',
																																			'FOLLOWED_HYPERLINK',
																																			'TEXT1',
																																			'BACKGROUND1',
																																			'TEXT2',
																																			'BACKGROUND2',
																																		],
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
																											"The size of the text's font. When read, the `font_size` will specified in points.",
																										properties:
																											{
																												unit: {
																													type: 'string',
																													description:
																														'The units for magnitude.',
																													default:
																														'',
																													enum: [
																														'',
																														'UNIT_UNSPECIFIED',
																														'EMU',
																														'PT',
																													],
																												},
																												magnitude:
																													{
																														type: 'number',
																														description:
																															'The magnitude.',
																													},
																											},
																										required:
																											[],
																									},
																								smallCaps:
																									{
																										type: 'boolean',
																										description:
																											'Whether or not the text is in small capital letters.',
																									},
																								backgroundColor:
																									{
																										type: 'object',
																										description:
																											'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																										properties:
																											{
																												opaqueColor:
																													{
																														type: 'object',
																														description:
																															'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																														properties:
																															{
																																rgbColor:
																																	{
																																		type: 'object',
																																		description:
																																			'An opaque RGB color.',
																																		properties:
																																			{
																																				red: {
																																					type: 'number',
																																					description:
																																						'The red component of the color, from 0.0 to 1.0.',
																																				},
																																				blue: {
																																					type: 'number',
																																					description:
																																						'The blue component of the color, from 0.0 to 1.0.',
																																				},
																																				green: {
																																					type: 'number',
																																					description:
																																						'The green component of the color, from 0.0 to 1.0.',
																																				},
																																			},
																																		required:
																																			[],
																																	},
																																themeColor:
																																	{
																																		type: 'string',
																																		description:
																																			'An opaque theme color.',
																																		default:
																																			'',
																																		enum: [
																																			'',
																																			'THEME_COLOR_TYPE_UNSPECIFIED',
																																			'DARK1',
																																			'LIGHT1',
																																			'DARK2',
																																			'LIGHT2',
																																			'ACCENT1',
																																			'ACCENT2',
																																			'ACCENT3',
																																			'ACCENT4',
																																			'ACCENT5',
																																			'ACCENT6',
																																			'HYPERLINK',
																																			'FOLLOWED_HYPERLINK',
																																			'TEXT1',
																																			'BACKGROUND1',
																																			'TEXT2',
																																			'BACKGROUND2',
																																		],
																																	},
																															},
																														required:
																															[],
																													},
																											},
																										required:
																											[],
																									},
																								link: {
																									type: 'object',
																									description:
																										'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																									properties:
																										{
																											slideIndex:
																												{
																													type: 'number',
																													description:
																														'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																												},
																											url: {
																												type: 'string',
																												description:
																													'If set, indicates this is a link to the external web page at this URL.',
																											},
																											pageObjectId:
																												{
																													type: 'string',
																													description:
																														'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																												},
																											relativeLink:
																												{
																													type: 'string',
																													description:
																														'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																													default:
																														'',
																													enum: [
																														'',
																														'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																														'NEXT_SLIDE',
																														'PREVIOUS_SLIDE',
																														'FIRST_SLIDE',
																														'LAST_SLIDE',
																													],
																												},
																										},
																									required:
																										[],
																								},
																								underline:
																									{
																										type: 'boolean',
																										description:
																											'Whether or not the text is underlined.',
																									},
																								baselineOffset:
																									{
																										type: 'string',
																										description:
																											"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																										default:
																											'',
																										enum: [
																											'',
																											'BASELINE_OFFSET_UNSPECIFIED',
																											'NONE',
																											'SUPERSCRIPT',
																											'SUBSCRIPT',
																										],
																									},
																								weightedFontFamily:
																									{
																										type: 'object',
																										description:
																											'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																										properties:
																											{
																												weight: {
																													type: 'number',
																													description:
																														'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																												},
																												fontFamily:
																													{
																														type: 'string',
																														description:
																															'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																													},
																											},
																										required:
																											[],
																									},
																								fontFamily:
																									{
																										type: 'string',
																										description:
																											'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																									},
																							},
																						required:
																							[],
																					},
																					nestingLevel: {
																						type: 'number',
																						description:
																							'The nesting level of this paragraph in the list.',
																					},
																					listId: {
																						type: 'string',
																						description:
																							'The ID of the list this paragraph belongs to.',
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																	autoText: {
																		type: 'object',
																		description:
																			'A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.',
																		properties: {
																			style: {
																				type: 'object',
																				description:
																					'The styling applied to this auto text.',
																				properties: {
																					bold: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is rendered as bold.',
																					},
																					italic: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is italicized.',
																					},
																					strikethrough: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is struck through.',
																					},
																					foregroundColor:
																						{
																							type: 'object',
																							description:
																								'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																							properties:
																								{
																									opaqueColor:
																										{
																											type: 'object',
																											description:
																												'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																											properties:
																												{
																													rgbColor:
																														{
																															type: 'object',
																															description:
																																'An opaque RGB color.',
																															properties:
																																{
																																	red: {
																																		type: 'number',
																																		description:
																																			'The red component of the color, from 0.0 to 1.0.',
																																	},
																																	blue: {
																																		type: 'number',
																																		description:
																																			'The blue component of the color, from 0.0 to 1.0.',
																																	},
																																	green: {
																																		type: 'number',
																																		description:
																																			'The green component of the color, from 0.0 to 1.0.',
																																	},
																																},
																															required:
																																[],
																														},
																													themeColor:
																														{
																															type: 'string',
																															description:
																																'An opaque theme color.',
																															default:
																																'',
																															enum: [
																																'',
																																'THEME_COLOR_TYPE_UNSPECIFIED',
																																'DARK1',
																																'LIGHT1',
																																'DARK2',
																																'LIGHT2',
																																'ACCENT1',
																																'ACCENT2',
																																'ACCENT3',
																																'ACCENT4',
																																'ACCENT5',
																																'ACCENT6',
																																'HYPERLINK',
																																'FOLLOWED_HYPERLINK',
																																'TEXT1',
																																'BACKGROUND1',
																																'TEXT2',
																																'BACKGROUND2',
																															],
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					fontSize: {
																						type: 'object',
																						description:
																							"The size of the text's font. When read, the `font_size` will specified in points.",
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					smallCaps: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is in small capital letters.',
																					},
																					backgroundColor:
																						{
																							type: 'object',
																							description:
																								'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																							properties:
																								{
																									opaqueColor:
																										{
																											type: 'object',
																											description:
																												'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																											properties:
																												{
																													rgbColor:
																														{
																															type: 'object',
																															description:
																																'An opaque RGB color.',
																															properties:
																																{
																																	red: {
																																		type: 'number',
																																		description:
																																			'The red component of the color, from 0.0 to 1.0.',
																																	},
																																	blue: {
																																		type: 'number',
																																		description:
																																			'The blue component of the color, from 0.0 to 1.0.',
																																	},
																																	green: {
																																		type: 'number',
																																		description:
																																			'The green component of the color, from 0.0 to 1.0.',
																																	},
																																},
																															required:
																																[],
																														},
																													themeColor:
																														{
																															type: 'string',
																															description:
																																'An opaque theme color.',
																															default:
																																'',
																															enum: [
																																'',
																																'THEME_COLOR_TYPE_UNSPECIFIED',
																																'DARK1',
																																'LIGHT1',
																																'DARK2',
																																'LIGHT2',
																																'ACCENT1',
																																'ACCENT2',
																																'ACCENT3',
																																'ACCENT4',
																																'ACCENT5',
																																'ACCENT6',
																																'HYPERLINK',
																																'FOLLOWED_HYPERLINK',
																																'TEXT1',
																																'BACKGROUND1',
																																'TEXT2',
																																'BACKGROUND2',
																															],
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					link: {
																						type: 'object',
																						description:
																							'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																						properties:
																							{
																								slideIndex:
																									{
																										type: 'number',
																										description:
																											'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																									},
																								url: {
																									type: 'string',
																									description:
																										'If set, indicates this is a link to the external web page at this URL.',
																								},
																								pageObjectId:
																									{
																										type: 'string',
																										description:
																											'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																									},
																								relativeLink:
																									{
																										type: 'string',
																										description:
																											'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																										default:
																											'',
																										enum: [
																											'',
																											'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																											'NEXT_SLIDE',
																											'PREVIOUS_SLIDE',
																											'FIRST_SLIDE',
																											'LAST_SLIDE',
																										],
																									},
																							},
																						required:
																							[],
																					},
																					underline: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is underlined.',
																					},
																					baselineOffset:
																						{
																							type: 'string',
																							description:
																								"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																							default:
																								'',
																							enum: [
																								'',
																								'BASELINE_OFFSET_UNSPECIFIED',
																								'NONE',
																								'SUPERSCRIPT',
																								'SUBSCRIPT',
																							],
																						},
																					weightedFontFamily:
																						{
																							type: 'object',
																							description:
																								'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																							properties:
																								{
																									weight: {
																										type: 'number',
																										description:
																											'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																									},
																									fontFamily:
																										{
																											type: 'string',
																											description:
																												'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																										},
																								},
																							required:
																								[],
																						},
																					fontFamily: {
																						type: 'string',
																						description:
																							'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																					},
																				},
																				required: [],
																			},
																			content: {
																				type: 'string',
																				description:
																					'The rendered content of this auto text, if available.',
																			},
																			type: {
																				type: 'string',
																				description:
																					'The type of this auto text.',
																				default: '',
																				enum: [
																					'',
																					'TYPE_UNSPECIFIED',
																					'SLIDE_NUMBER',
																				],
																			},
																		},
																		required: [],
																	},
																	textRun: {
																		type: 'object',
																		description:
																			'A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.',
																		properties: {
																			content: {
																				type: 'string',
																				description:
																					'The text of this run.',
																			},
																			style: {
																				type: 'object',
																				description:
																					'The styling applied to this run.',
																				properties: {
																					bold: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is rendered as bold.',
																					},
																					italic: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is italicized.',
																					},
																					strikethrough: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is struck through.',
																					},
																					foregroundColor:
																						{
																							type: 'object',
																							description:
																								'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																							properties:
																								{
																									opaqueColor:
																										{
																											type: 'object',
																											description:
																												'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																											properties:
																												{
																													rgbColor:
																														{
																															type: 'object',
																															description:
																																'An opaque RGB color.',
																															properties:
																																{
																																	red: {
																																		type: 'number',
																																		description:
																																			'The red component of the color, from 0.0 to 1.0.',
																																	},
																																	blue: {
																																		type: 'number',
																																		description:
																																			'The blue component of the color, from 0.0 to 1.0.',
																																	},
																																	green: {
																																		type: 'number',
																																		description:
																																			'The green component of the color, from 0.0 to 1.0.',
																																	},
																																},
																															required:
																																[],
																														},
																													themeColor:
																														{
																															type: 'string',
																															description:
																																'An opaque theme color.',
																															default:
																																'',
																															enum: [
																																'',
																																'THEME_COLOR_TYPE_UNSPECIFIED',
																																'DARK1',
																																'LIGHT1',
																																'DARK2',
																																'LIGHT2',
																																'ACCENT1',
																																'ACCENT2',
																																'ACCENT3',
																																'ACCENT4',
																																'ACCENT5',
																																'ACCENT6',
																																'HYPERLINK',
																																'FOLLOWED_HYPERLINK',
																																'TEXT1',
																																'BACKGROUND1',
																																'TEXT2',
																																'BACKGROUND2',
																															],
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					fontSize: {
																						type: 'object',
																						description:
																							"The size of the text's font. When read, the `font_size` will specified in points.",
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					smallCaps: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is in small capital letters.',
																					},
																					backgroundColor:
																						{
																							type: 'object',
																							description:
																								'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																							properties:
																								{
																									opaqueColor:
																										{
																											type: 'object',
																											description:
																												'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																											properties:
																												{
																													rgbColor:
																														{
																															type: 'object',
																															description:
																																'An opaque RGB color.',
																															properties:
																																{
																																	red: {
																																		type: 'number',
																																		description:
																																			'The red component of the color, from 0.0 to 1.0.',
																																	},
																																	blue: {
																																		type: 'number',
																																		description:
																																			'The blue component of the color, from 0.0 to 1.0.',
																																	},
																																	green: {
																																		type: 'number',
																																		description:
																																			'The green component of the color, from 0.0 to 1.0.',
																																	},
																																},
																															required:
																																[],
																														},
																													themeColor:
																														{
																															type: 'string',
																															description:
																																'An opaque theme color.',
																															default:
																																'',
																															enum: [
																																'',
																																'THEME_COLOR_TYPE_UNSPECIFIED',
																																'DARK1',
																																'LIGHT1',
																																'DARK2',
																																'LIGHT2',
																																'ACCENT1',
																																'ACCENT2',
																																'ACCENT3',
																																'ACCENT4',
																																'ACCENT5',
																																'ACCENT6',
																																'HYPERLINK',
																																'FOLLOWED_HYPERLINK',
																																'TEXT1',
																																'BACKGROUND1',
																																'TEXT2',
																																'BACKGROUND2',
																															],
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					link: {
																						type: 'object',
																						description:
																							'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																						properties:
																							{
																								slideIndex:
																									{
																										type: 'number',
																										description:
																											'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																									},
																								url: {
																									type: 'string',
																									description:
																										'If set, indicates this is a link to the external web page at this URL.',
																								},
																								pageObjectId:
																									{
																										type: 'string',
																										description:
																											'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																									},
																								relativeLink:
																									{
																										type: 'string',
																										description:
																											'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																										default:
																											'',
																										enum: [
																											'',
																											'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																											'NEXT_SLIDE',
																											'PREVIOUS_SLIDE',
																											'FIRST_SLIDE',
																											'LAST_SLIDE',
																										],
																									},
																							},
																						required:
																							[],
																					},
																					underline: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is underlined.',
																					},
																					baselineOffset:
																						{
																							type: 'string',
																							description:
																								"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																							default:
																								'',
																							enum: [
																								'',
																								'BASELINE_OFFSET_UNSPECIFIED',
																								'NONE',
																								'SUPERSCRIPT',
																								'SUBSCRIPT',
																							],
																						},
																					weightedFontFamily:
																						{
																							type: 'object',
																							description:
																								'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																							properties:
																								{
																									weight: {
																										type: 'number',
																										description:
																											'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																									},
																									fontFamily:
																										{
																											type: 'string',
																											description:
																												'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																										},
																								},
																							required:
																								[],
																						},
																					fontFamily: {
																						type: 'string',
																						description:
																							'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																	startIndex: {
																		type: 'number',
																		description:
																			'The zero-based start index of this text element, in Unicode code units.',
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
										size: {
											type: 'object',
											description: 'The size of the page element.',
											properties: {
												width: {
													type: 'object',
													description: 'The width of the object.',
													properties: {
														unit: {
															type: 'string',
															description: 'The units for magnitude.',
															default: '',
															enum: [
																'',
																'UNIT_UNSPECIFIED',
																'EMU',
																'PT',
															],
														},
														magnitude: {
															type: 'number',
															description: 'The magnitude.',
														},
													},
													required: [],
												},
												height: {
													type: 'object',
													description: 'The height of the object.',
													properties: {
														unit: {
															type: 'string',
															description: 'The units for magnitude.',
															default: '',
															enum: [
																'',
																'UNIT_UNSPECIFIED',
																'EMU',
																'PT',
															],
														},
														magnitude: {
															type: 'number',
															description: 'The magnitude.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										description: {
											type: 'string',
											description:
												'The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.',
										},
										video: {
											type: 'object',
											description: 'A video page element.',
											properties: {
												id: {
													type: 'string',
													description:
														"The video source's unique identifier for this video.",
												},
												url: {
													type: 'string',
													description:
														'An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.',
												},
												videoProperties: {
													type: 'object',
													description: 'The properties of the video.',
													properties: {
														end: {
															type: 'number',
															description:
																"The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.",
														},
														autoPlay: {
															type: 'boolean',
															description:
																'Whether to enable video autoplay when the page is displayed in present mode. Defaults to false.',
														},
														outline: {
															type: 'object',
															description:
																'The outline of the video. The default outline matches the defaults for new videos created in the Slides editor.',
															properties: {
																dashStyle: {
																	type: 'string',
																	description:
																		'The dash style of the outline.',
																	default: '',
																	enum: [
																		'',
																		'DASH_STYLE_UNSPECIFIED',
																		'SOLID',
																		'DOT',
																		'DASH',
																		'DASH_DOT',
																		'LONG_DASH',
																		'LONG_DASH_DOT',
																	],
																},
																outlineFill: {
																	type: 'object',
																	description:
																		'The fill of the outline.',
																	properties: {
																		solidFill: {
																			type: 'object',
																			description:
																				'Solid color fill.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value of the solid fill.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																				alpha: {
																					type: 'number',
																					description:
																						'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																weight: {
																	type: 'object',
																	description:
																		'The thickness of the outline.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
															},
															required: [],
														},
														mute: {
															type: 'boolean',
															description:
																'Whether to mute the audio during video playback. Defaults to false.',
														},
														start: {
															type: 'number',
															description:
																"The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.",
														},
													},
													required: [],
												},
												source: {
													type: 'string',
													description: 'The video source.',
													default: '',
													enum: [
														'',
														'SOURCE_UNSPECIFIED',
														'YOUTUBE',
														'DRIVE',
													],
												},
											},
											required: [],
										},
										table: {
											type: 'object',
											description: 'A table page element.',
											properties: {
												tableColumns: {
													type: 'array',
													description: 'Properties of each column.',
													items: {
														type: 'object',
														description:
															'Properties of each column in a table.',
														properties: {
															columnWidth: {
																type: 'object',
																description: 'Width of a column.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
												},
												verticalBorderRows: {
													type: 'array',
													description:
														"Properties of vertical cell borders. A table's vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns.",
													items: {
														type: 'object',
														description:
															'Contents of each border row in a table.',
														properties: {
															tableBorderCells: {
																type: 'array',
																description:
																	"Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.",
																items: {
																	type: 'object',
																	description:
																		'The properties of each border cell.',
																	properties: {
																		tableBorderProperties: {
																			type: 'object',
																			description:
																				'The border properties.',
																			properties: {
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border.',
																					default: '',
																					enum: [
																						'',
																						'DASH_STYLE_UNSPECIFIED',
																						'SOLID',
																						'DOT',
																						'DASH',
																						'DASH_DOT',
																						'LONG_DASH',
																						'LONG_DASH_DOT',
																					],
																				},
																				tableBorderFill: {
																					type: 'object',
																					description:
																						'The fill of the table border.',
																					properties: {
																						solidFill: {
																							type: 'object',
																							description:
																								'Solid fill.',
																							properties:
																								{
																									color: {
																										type: 'object',
																										description:
																											'The color value of the solid fill.',
																										properties:
																											{
																												rgbColor:
																													{
																														type: 'object',
																														description:
																															'An opaque RGB color.',
																														properties:
																															{
																																red: {
																																	type: 'number',
																																	description:
																																		'The red component of the color, from 0.0 to 1.0.',
																																},
																																blue: {
																																	type: 'number',
																																	description:
																																		'The blue component of the color, from 0.0 to 1.0.',
																																},
																																green: {
																																	type: 'number',
																																	description:
																																		'The green component of the color, from 0.0 to 1.0.',
																																},
																															},
																														required:
																															[],
																													},
																												themeColor:
																													{
																														type: 'string',
																														description:
																															'An opaque theme color.',
																														default:
																															'',
																														enum: [
																															'',
																															'THEME_COLOR_TYPE_UNSPECIFIED',
																															'DARK1',
																															'LIGHT1',
																															'DARK2',
																															'LIGHT2',
																															'ACCENT1',
																															'ACCENT2',
																															'ACCENT3',
																															'ACCENT4',
																															'ACCENT5',
																															'ACCENT6',
																															'HYPERLINK',
																															'FOLLOWED_HYPERLINK',
																															'TEXT1',
																															'BACKGROUND1',
																															'TEXT2',
																															'BACKGROUND2',
																														],
																													},
																											},
																										required:
																											[],
																									},
																									alpha: {
																										type: 'number',
																										description:
																											'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				weight: {
																					type: 'object',
																					description:
																						'The thickness of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The units for magnitude.',
																							default:
																								'',
																							enum: [
																								'',
																								'UNIT_UNSPECIFIED',
																								'EMU',
																								'PT',
																							],
																						},
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude.',
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
																				'The location of the border within the border table.',
																			properties: {
																				rowIndex: {
																					type: 'number',
																					description:
																						'The 0-based row index.',
																				},
																				columnIndex: {
																					type: 'number',
																					description:
																						'The 0-based column index.',
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
												rows: {
													type: 'number',
													description: 'Number of rows in the table.',
												},
												columns: {
													type: 'number',
													description: 'Number of columns in the table.',
												},
												horizontalBorderRows: {
													type: 'array',
													description:
														"Properties of horizontal cell borders. A table's horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns.",
													items: {
														type: 'object',
														description:
															'Contents of each border row in a table.',
														properties: {
															tableBorderCells: {
																type: 'array',
																description:
																	"Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.",
																items: {
																	type: 'object',
																	description:
																		'The properties of each border cell.',
																	properties: {
																		tableBorderProperties: {
																			type: 'object',
																			description:
																				'The border properties.',
																			properties: {
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border.',
																					default: '',
																					enum: [
																						'',
																						'DASH_STYLE_UNSPECIFIED',
																						'SOLID',
																						'DOT',
																						'DASH',
																						'DASH_DOT',
																						'LONG_DASH',
																						'LONG_DASH_DOT',
																					],
																				},
																				tableBorderFill: {
																					type: 'object',
																					description:
																						'The fill of the table border.',
																					properties: {
																						solidFill: {
																							type: 'object',
																							description:
																								'Solid fill.',
																							properties:
																								{
																									color: {
																										type: 'object',
																										description:
																											'The color value of the solid fill.',
																										properties:
																											{
																												rgbColor:
																													{
																														type: 'object',
																														description:
																															'An opaque RGB color.',
																														properties:
																															{
																																red: {
																																	type: 'number',
																																	description:
																																		'The red component of the color, from 0.0 to 1.0.',
																																},
																																blue: {
																																	type: 'number',
																																	description:
																																		'The blue component of the color, from 0.0 to 1.0.',
																																},
																																green: {
																																	type: 'number',
																																	description:
																																		'The green component of the color, from 0.0 to 1.0.',
																																},
																															},
																														required:
																															[],
																													},
																												themeColor:
																													{
																														type: 'string',
																														description:
																															'An opaque theme color.',
																														default:
																															'',
																														enum: [
																															'',
																															'THEME_COLOR_TYPE_UNSPECIFIED',
																															'DARK1',
																															'LIGHT1',
																															'DARK2',
																															'LIGHT2',
																															'ACCENT1',
																															'ACCENT2',
																															'ACCENT3',
																															'ACCENT4',
																															'ACCENT5',
																															'ACCENT6',
																															'HYPERLINK',
																															'FOLLOWED_HYPERLINK',
																															'TEXT1',
																															'BACKGROUND1',
																															'TEXT2',
																															'BACKGROUND2',
																														],
																													},
																											},
																										required:
																											[],
																									},
																									alpha: {
																										type: 'number',
																										description:
																											'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				weight: {
																					type: 'object',
																					description:
																						'The thickness of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The units for magnitude.',
																							default:
																								'',
																							enum: [
																								'',
																								'UNIT_UNSPECIFIED',
																								'EMU',
																								'PT',
																							],
																						},
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude.',
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
																				'The location of the border within the border table.',
																			properties: {
																				rowIndex: {
																					type: 'number',
																					description:
																						'The 0-based row index.',
																				},
																				columnIndex: {
																					type: 'number',
																					description:
																						'The 0-based column index.',
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
												tableRows: {
													type: 'array',
													description:
														'Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a row_span greater than 1.',
													items: {
														type: 'object',
														description:
															'Properties and contents of each row in a table.',
														properties: {
															tableRowProperties: {
																type: 'object',
																description:
																	'Properties of the row.',
																properties: {
																	minRowHeight: {
																		type: 'object',
																		description:
																			"Minimum height of the row. The row will be rendered in the Slides editor at a height equal to or greater than this value in order to show all the text in the row's cell(s).",
																		properties: {
																			unit: {
																				type: 'string',
																				description:
																					'The units for magnitude.',
																				default: '',
																				enum: [
																					'',
																					'UNIT_UNSPECIFIED',
																					'EMU',
																					'PT',
																				],
																			},
																			magnitude: {
																				type: 'number',
																				description:
																					'The magnitude.',
																			},
																		},
																		required: [],
																	},
																},
																required: [],
															},
															rowHeight: {
																type: 'object',
																description: 'Height of a row.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
															tableCells: {
																type: 'array',
																description:
																	'Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table.',
																items: {
																	type: 'object',
																	description:
																		'Properties and contents of each table cell.',
																	properties: {
																		columnSpan: {
																			type: 'number',
																			description:
																				'Column span of the cell.',
																		},
																		location: {
																			type: 'object',
																			description:
																				'The location of the cell within the table.',
																			properties: {
																				rowIndex: {
																					type: 'number',
																					description:
																						'The 0-based row index.',
																				},
																				columnIndex: {
																					type: 'number',
																					description:
																						'The 0-based column index.',
																				},
																			},
																			required: [],
																		},
																		rowSpan: {
																			type: 'number',
																			description:
																				'Row span of the cell.',
																		},
																		text: {
																			type: 'object',
																			description:
																				'The text content of the cell.',
																			properties: {
																				lists: {
																					type: 'object',
																					description:
																						'The bulleted lists contained in this text, keyed by list ID.',
																					properties: {},
																					required: [],
																					additionalProperties:
																						true,
																				},
																				textElements: {
																					type: 'array',
																					description:
																						'The text contents broken down into its component parts, including styling information. This property is read-only.',
																					items: {
																						type: 'object',
																						description:
																							'A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.',
																						properties:
																							{
																								endIndex:
																									{
																										type: 'number',
																										description:
																											'The zero-based end index of this text element, exclusive, in Unicode code units.',
																									},
																								paragraphMarker:
																									{
																										type: 'object',
																										description:
																											"A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.",
																										properties:
																											{
																												style: {
																													type: 'object',
																													description:
																														"The paragraph's style",
																													properties:
																														{
																															indentEnd:
																																{
																																	type: 'object',
																																	description:
																																		'The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															spacingMode:
																																{
																																	type: 'string',
																																	description:
																																		'The spacing mode for the paragraph.',
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'SPACING_MODE_UNSPECIFIED',
																																		'NEVER_COLLAPSE',
																																		'COLLAPSE_LISTS',
																																	],
																																},
																															indentStart:
																																{
																																	type: 'object',
																																	description:
																																		'The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															alignment:
																																{
																																	type: 'string',
																																	description:
																																		'The text alignment for this paragraph.',
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'ALIGNMENT_UNSPECIFIED',
																																		'START',
																																		'CENTER',
																																		'END',
																																		'JUSTIFIED',
																																	],
																																},
																															indentFirstLine:
																																{
																																	type: 'object',
																																	description:
																																		'The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															lineSpacing:
																																{
																																	type: 'number',
																																	description:
																																		'The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.',
																																},
																															direction:
																																{
																																	type: 'string',
																																	description:
																																		'The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.',
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'TEXT_DIRECTION_UNSPECIFIED',
																																		'LEFT_TO_RIGHT',
																																		'RIGHT_TO_LEFT',
																																	],
																																},
																															spaceAbove:
																																{
																																	type: 'object',
																																	description:
																																		'The amount of extra space above the paragraph. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															spaceBelow:
																																{
																																	type: 'object',
																																	description:
																																		'The amount of extra space below the paragraph. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																														},
																													required:
																														[],
																												},
																												bullet: {
																													type: 'object',
																													description:
																														'The bullet for this paragraph. If not present, the paragraph does not belong to a list.',
																													properties:
																														{
																															glyph: {
																																type: 'string',
																																description:
																																	'The rendered bullet glyph for this paragraph.',
																															},
																															bulletStyle:
																																{
																																	type: 'object',
																																	description:
																																		'The paragraph specific text style applied to this bullet.',
																																	properties:
																																		{
																																			bold: {
																																				type: 'boolean',
																																				description:
																																					'Whether or not the text is rendered as bold.',
																																			},
																																			italic: {
																																				type: 'boolean',
																																				description:
																																					'Whether or not the text is italicized.',
																																			},
																																			strikethrough:
																																				{
																																					type: 'boolean',
																																					description:
																																						'Whether or not the text is struck through.',
																																				},
																																			foregroundColor:
																																				{
																																					type: 'object',
																																					description:
																																						'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																					properties:
																																						{
																																							opaqueColor:
																																								{
																																									type: 'object',
																																									description:
																																										'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																									properties:
																																										{
																																											rgbColor:
																																												{
																																													type: 'object',
																																													description:
																																														'An opaque RGB color.',
																																													properties:
																																														{
																																															red: {
																																																type: 'number',
																																																description:
																																																	'The red component of the color, from 0.0 to 1.0.',
																																															},
																																															blue: {
																																																type: 'number',
																																																description:
																																																	'The blue component of the color, from 0.0 to 1.0.',
																																															},
																																															green: {
																																																type: 'number',
																																																description:
																																																	'The green component of the color, from 0.0 to 1.0.',
																																															},
																																														},
																																													required:
																																														[],
																																												},
																																											themeColor:
																																												{
																																													type: 'string',
																																													description:
																																														'An opaque theme color.',
																																													default:
																																														'',
																																													enum: [
																																														'',
																																														'THEME_COLOR_TYPE_UNSPECIFIED',
																																														'DARK1',
																																														'LIGHT1',
																																														'DARK2',
																																														'LIGHT2',
																																														'ACCENT1',
																																														'ACCENT2',
																																														'ACCENT3',
																																														'ACCENT4',
																																														'ACCENT5',
																																														'ACCENT6',
																																														'HYPERLINK',
																																														'FOLLOWED_HYPERLINK',
																																														'TEXT1',
																																														'BACKGROUND1',
																																														'TEXT2',
																																														'BACKGROUND2',
																																													],
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
																																						"The size of the text's font. When read, the `font_size` will specified in points.",
																																					properties:
																																						{
																																							unit: {
																																								type: 'string',
																																								description:
																																									'The units for magnitude.',
																																								default:
																																									'',
																																								enum: [
																																									'',
																																									'UNIT_UNSPECIFIED',
																																									'EMU',
																																									'PT',
																																								],
																																							},
																																							magnitude:
																																								{
																																									type: 'number',
																																									description:
																																										'The magnitude.',
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																			smallCaps:
																																				{
																																					type: 'boolean',
																																					description:
																																						'Whether or not the text is in small capital letters.',
																																				},
																																			backgroundColor:
																																				{
																																					type: 'object',
																																					description:
																																						'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																					properties:
																																						{
																																							opaqueColor:
																																								{
																																									type: 'object',
																																									description:
																																										'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																									properties:
																																										{
																																											rgbColor:
																																												{
																																													type: 'object',
																																													description:
																																														'An opaque RGB color.',
																																													properties:
																																														{
																																															red: {
																																																type: 'number',
																																																description:
																																																	'The red component of the color, from 0.0 to 1.0.',
																																															},
																																															blue: {
																																																type: 'number',
																																																description:
																																																	'The blue component of the color, from 0.0 to 1.0.',
																																															},
																																															green: {
																																																type: 'number',
																																																description:
																																																	'The green component of the color, from 0.0 to 1.0.',
																																															},
																																														},
																																													required:
																																														[],
																																												},
																																											themeColor:
																																												{
																																													type: 'string',
																																													description:
																																														'An opaque theme color.',
																																													default:
																																														'',
																																													enum: [
																																														'',
																																														'THEME_COLOR_TYPE_UNSPECIFIED',
																																														'DARK1',
																																														'LIGHT1',
																																														'DARK2',
																																														'LIGHT2',
																																														'ACCENT1',
																																														'ACCENT2',
																																														'ACCENT3',
																																														'ACCENT4',
																																														'ACCENT5',
																																														'ACCENT6',
																																														'HYPERLINK',
																																														'FOLLOWED_HYPERLINK',
																																														'TEXT1',
																																														'BACKGROUND1',
																																														'TEXT2',
																																														'BACKGROUND2',
																																													],
																																												},
																																										},
																																									required:
																																										[],
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																			link: {
																																				type: 'object',
																																				description:
																																					'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																																				properties:
																																					{
																																						slideIndex:
																																							{
																																								type: 'number',
																																								description:
																																									'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																																							},
																																						url: {
																																							type: 'string',
																																							description:
																																								'If set, indicates this is a link to the external web page at this URL.',
																																						},
																																						pageObjectId:
																																							{
																																								type: 'string',
																																								description:
																																									'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																																							},
																																						relativeLink:
																																							{
																																								type: 'string',
																																								description:
																																									'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																																								default:
																																									'',
																																								enum: [
																																									'',
																																									'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																																									'NEXT_SLIDE',
																																									'PREVIOUS_SLIDE',
																																									'FIRST_SLIDE',
																																									'LAST_SLIDE',
																																								],
																																							},
																																					},
																																				required:
																																					[],
																																			},
																																			underline:
																																				{
																																					type: 'boolean',
																																					description:
																																						'Whether or not the text is underlined.',
																																				},
																																			baselineOffset:
																																				{
																																					type: 'string',
																																					description:
																																						"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																																					default:
																																						'',
																																					enum: [
																																						'',
																																						'BASELINE_OFFSET_UNSPECIFIED',
																																						'NONE',
																																						'SUPERSCRIPT',
																																						'SUBSCRIPT',
																																					],
																																				},
																																			weightedFontFamily:
																																				{
																																					type: 'object',
																																					description:
																																						'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																																					properties:
																																						{
																																							weight: {
																																								type: 'number',
																																								description:
																																									'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																																							},
																																							fontFamily:
																																								{
																																									type: 'string',
																																									description:
																																										'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																			fontFamily:
																																				{
																																					type: 'string',
																																					description:
																																						'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															nestingLevel:
																																{
																																	type: 'number',
																																	description:
																																		'The nesting level of this paragraph in the list.',
																																},
																															listId: {
																																type: 'string',
																																description:
																																	'The ID of the list this paragraph belongs to.',
																															},
																														},
																													required:
																														[],
																												},
																											},
																										required:
																											[],
																									},
																								autoText:
																									{
																										type: 'object',
																										description:
																											'A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.',
																										properties:
																											{
																												style: {
																													type: 'object',
																													description:
																														'The styling applied to this auto text.',
																													properties:
																														{
																															bold: {
																																type: 'boolean',
																																description:
																																	'Whether or not the text is rendered as bold.',
																															},
																															italic: {
																																type: 'boolean',
																																description:
																																	'Whether or not the text is italicized.',
																															},
																															strikethrough:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is struck through.',
																																},
																															foregroundColor:
																																{
																																	type: 'object',
																																	description:
																																		'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																	properties:
																																		{
																																			opaqueColor:
																																				{
																																					type: 'object',
																																					description:
																																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																					properties:
																																						{
																																							rgbColor:
																																								{
																																									type: 'object',
																																									description:
																																										'An opaque RGB color.',
																																									properties:
																																										{
																																											red: {
																																												type: 'number',
																																												description:
																																													'The red component of the color, from 0.0 to 1.0.',
																																											},
																																											blue: {
																																												type: 'number',
																																												description:
																																													'The blue component of the color, from 0.0 to 1.0.',
																																											},
																																											green: {
																																												type: 'number',
																																												description:
																																													'The green component of the color, from 0.0 to 1.0.',
																																											},
																																										},
																																									required:
																																										[],
																																								},
																																							themeColor:
																																								{
																																									type: 'string',
																																									description:
																																										'An opaque theme color.',
																																									default:
																																										'',
																																									enum: [
																																										'',
																																										'THEME_COLOR_TYPE_UNSPECIFIED',
																																										'DARK1',
																																										'LIGHT1',
																																										'DARK2',
																																										'LIGHT2',
																																										'ACCENT1',
																																										'ACCENT2',
																																										'ACCENT3',
																																										'ACCENT4',
																																										'ACCENT5',
																																										'ACCENT6',
																																										'HYPERLINK',
																																										'FOLLOWED_HYPERLINK',
																																										'TEXT1',
																																										'BACKGROUND1',
																																										'TEXT2',
																																										'BACKGROUND2',
																																									],
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
																																		"The size of the text's font. When read, the `font_size` will specified in points.",
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															smallCaps:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is in small capital letters.',
																																},
																															backgroundColor:
																																{
																																	type: 'object',
																																	description:
																																		'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																	properties:
																																		{
																																			opaqueColor:
																																				{
																																					type: 'object',
																																					description:
																																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																					properties:
																																						{
																																							rgbColor:
																																								{
																																									type: 'object',
																																									description:
																																										'An opaque RGB color.',
																																									properties:
																																										{
																																											red: {
																																												type: 'number',
																																												description:
																																													'The red component of the color, from 0.0 to 1.0.',
																																											},
																																											blue: {
																																												type: 'number',
																																												description:
																																													'The blue component of the color, from 0.0 to 1.0.',
																																											},
																																											green: {
																																												type: 'number',
																																												description:
																																													'The green component of the color, from 0.0 to 1.0.',
																																											},
																																										},
																																									required:
																																										[],
																																								},
																																							themeColor:
																																								{
																																									type: 'string',
																																									description:
																																										'An opaque theme color.',
																																									default:
																																										'',
																																									enum: [
																																										'',
																																										'THEME_COLOR_TYPE_UNSPECIFIED',
																																										'DARK1',
																																										'LIGHT1',
																																										'DARK2',
																																										'LIGHT2',
																																										'ACCENT1',
																																										'ACCENT2',
																																										'ACCENT3',
																																										'ACCENT4',
																																										'ACCENT5',
																																										'ACCENT6',
																																										'HYPERLINK',
																																										'FOLLOWED_HYPERLINK',
																																										'TEXT1',
																																										'BACKGROUND1',
																																										'TEXT2',
																																										'BACKGROUND2',
																																									],
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																		},
																																	required:
																																		[],
																																},
																															link: {
																																type: 'object',
																																description:
																																	'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																																properties:
																																	{
																																		slideIndex:
																																			{
																																				type: 'number',
																																				description:
																																					'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																																			},
																																		url: {
																																			type: 'string',
																																			description:
																																				'If set, indicates this is a link to the external web page at this URL.',
																																		},
																																		pageObjectId:
																																			{
																																				type: 'string',
																																				description:
																																					'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																																			},
																																		relativeLink:
																																			{
																																				type: 'string',
																																				description:
																																					'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																																					'NEXT_SLIDE',
																																					'PREVIOUS_SLIDE',
																																					'FIRST_SLIDE',
																																					'LAST_SLIDE',
																																				],
																																			},
																																	},
																																required:
																																	[],
																															},
																															underline:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is underlined.',
																																},
																															baselineOffset:
																																{
																																	type: 'string',
																																	description:
																																		"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'BASELINE_OFFSET_UNSPECIFIED',
																																		'NONE',
																																		'SUPERSCRIPT',
																																		'SUBSCRIPT',
																																	],
																																},
																															weightedFontFamily:
																																{
																																	type: 'object',
																																	description:
																																		'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																																	properties:
																																		{
																																			weight: {
																																				type: 'number',
																																				description:
																																					'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																																			},
																																			fontFamily:
																																				{
																																					type: 'string',
																																					description:
																																						'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															fontFamily:
																																{
																																	type: 'string',
																																	description:
																																		'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																																},
																														},
																													required:
																														[],
																												},
																												content:
																													{
																														type: 'string',
																														description:
																															'The rendered content of this auto text, if available.',
																													},
																												type: {
																													type: 'string',
																													description:
																														'The type of this auto text.',
																													default:
																														'',
																													enum: [
																														'',
																														'TYPE_UNSPECIFIED',
																														'SLIDE_NUMBER',
																													],
																												},
																											},
																										required:
																											[],
																									},
																								textRun:
																									{
																										type: 'object',
																										description:
																											'A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.',
																										properties:
																											{
																												content:
																													{
																														type: 'string',
																														description:
																															'The text of this run.',
																													},
																												style: {
																													type: 'object',
																													description:
																														'The styling applied to this run.',
																													properties:
																														{
																															bold: {
																																type: 'boolean',
																																description:
																																	'Whether or not the text is rendered as bold.',
																															},
																															italic: {
																																type: 'boolean',
																																description:
																																	'Whether or not the text is italicized.',
																															},
																															strikethrough:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is struck through.',
																																},
																															foregroundColor:
																																{
																																	type: 'object',
																																	description:
																																		'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																	properties:
																																		{
																																			opaqueColor:
																																				{
																																					type: 'object',
																																					description:
																																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																					properties:
																																						{
																																							rgbColor:
																																								{
																																									type: 'object',
																																									description:
																																										'An opaque RGB color.',
																																									properties:
																																										{
																																											red: {
																																												type: 'number',
																																												description:
																																													'The red component of the color, from 0.0 to 1.0.',
																																											},
																																											blue: {
																																												type: 'number',
																																												description:
																																													'The blue component of the color, from 0.0 to 1.0.',
																																											},
																																											green: {
																																												type: 'number',
																																												description:
																																													'The green component of the color, from 0.0 to 1.0.',
																																											},
																																										},
																																									required:
																																										[],
																																								},
																																							themeColor:
																																								{
																																									type: 'string',
																																									description:
																																										'An opaque theme color.',
																																									default:
																																										'',
																																									enum: [
																																										'',
																																										'THEME_COLOR_TYPE_UNSPECIFIED',
																																										'DARK1',
																																										'LIGHT1',
																																										'DARK2',
																																										'LIGHT2',
																																										'ACCENT1',
																																										'ACCENT2',
																																										'ACCENT3',
																																										'ACCENT4',
																																										'ACCENT5',
																																										'ACCENT6',
																																										'HYPERLINK',
																																										'FOLLOWED_HYPERLINK',
																																										'TEXT1',
																																										'BACKGROUND1',
																																										'TEXT2',
																																										'BACKGROUND2',
																																									],
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
																																		"The size of the text's font. When read, the `font_size` will specified in points.",
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															smallCaps:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is in small capital letters.',
																																},
																															backgroundColor:
																																{
																																	type: 'object',
																																	description:
																																		'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																	properties:
																																		{
																																			opaqueColor:
																																				{
																																					type: 'object',
																																					description:
																																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																					properties:
																																						{
																																							rgbColor:
																																								{
																																									type: 'object',
																																									description:
																																										'An opaque RGB color.',
																																									properties:
																																										{
																																											red: {
																																												type: 'number',
																																												description:
																																													'The red component of the color, from 0.0 to 1.0.',
																																											},
																																											blue: {
																																												type: 'number',
																																												description:
																																													'The blue component of the color, from 0.0 to 1.0.',
																																											},
																																											green: {
																																												type: 'number',
																																												description:
																																													'The green component of the color, from 0.0 to 1.0.',
																																											},
																																										},
																																									required:
																																										[],
																																								},
																																							themeColor:
																																								{
																																									type: 'string',
																																									description:
																																										'An opaque theme color.',
																																									default:
																																										'',
																																									enum: [
																																										'',
																																										'THEME_COLOR_TYPE_UNSPECIFIED',
																																										'DARK1',
																																										'LIGHT1',
																																										'DARK2',
																																										'LIGHT2',
																																										'ACCENT1',
																																										'ACCENT2',
																																										'ACCENT3',
																																										'ACCENT4',
																																										'ACCENT5',
																																										'ACCENT6',
																																										'HYPERLINK',
																																										'FOLLOWED_HYPERLINK',
																																										'TEXT1',
																																										'BACKGROUND1',
																																										'TEXT2',
																																										'BACKGROUND2',
																																									],
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																		},
																																	required:
																																		[],
																																},
																															link: {
																																type: 'object',
																																description:
																																	'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																																properties:
																																	{
																																		slideIndex:
																																			{
																																				type: 'number',
																																				description:
																																					'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																																			},
																																		url: {
																																			type: 'string',
																																			description:
																																				'If set, indicates this is a link to the external web page at this URL.',
																																		},
																																		pageObjectId:
																																			{
																																				type: 'string',
																																				description:
																																					'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																																			},
																																		relativeLink:
																																			{
																																				type: 'string',
																																				description:
																																					'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																																					'NEXT_SLIDE',
																																					'PREVIOUS_SLIDE',
																																					'FIRST_SLIDE',
																																					'LAST_SLIDE',
																																				],
																																			},
																																	},
																																required:
																																	[],
																															},
																															underline:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is underlined.',
																																},
																															baselineOffset:
																																{
																																	type: 'string',
																																	description:
																																		"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'BASELINE_OFFSET_UNSPECIFIED',
																																		'NONE',
																																		'SUPERSCRIPT',
																																		'SUBSCRIPT',
																																	],
																																},
																															weightedFontFamily:
																																{
																																	type: 'object',
																																	description:
																																		'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																																	properties:
																																		{
																																			weight: {
																																				type: 'number',
																																				description:
																																					'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																																			},
																																			fontFamily:
																																				{
																																					type: 'string',
																																					description:
																																						'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															fontFamily:
																																{
																																	type: 'string',
																																	description:
																																		'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																																},
																														},
																													required:
																														[],
																												},
																											},
																										required:
																											[],
																									},
																								startIndex:
																									{
																										type: 'number',
																										description:
																											'The zero-based start index of this text element, in Unicode code units.',
																									},
																							},
																						required:
																							[],
																					},
																				},
																			},
																			required: [],
																		},
																		tableCellProperties: {
																			type: 'object',
																			description:
																				'The properties of the table cell.',
																			properties: {
																				contentAlignment: {
																					type: 'string',
																					description:
																						'The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.',
																					default: '',
																					enum: [
																						'',
																						'CONTENT_ALIGNMENT_UNSPECIFIED',
																						'CONTENT_ALIGNMENT_UNSUPPORTED',
																						'TOP',
																						'MIDDLE',
																						'BOTTOM',
																					],
																				},
																				tableCellBackgroundFill:
																					{
																						type: 'object',
																						description:
																							'The background fill of the table cell. The default fill matches the fill for newly created table cells in the Slides editor.',
																						properties:
																							{
																								propertyState:
																									{
																										type: 'string',
																										description:
																											'The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
																										default:
																											'',
																										enum: [
																											'',
																											'RENDERED',
																											'NOT_RENDERED',
																											'INHERIT',
																										],
																									},
																								solidFill:
																									{
																										type: 'object',
																										description:
																											'Solid color fill.',
																										properties:
																											{
																												color: {
																													type: 'object',
																													description:
																														'The color value of the solid fill.',
																													properties:
																														{
																															rgbColor:
																																{
																																	type: 'object',
																																	description:
																																		'An opaque RGB color.',
																																	properties:
																																		{
																																			red: {
																																				type: 'number',
																																				description:
																																					'The red component of the color, from 0.0 to 1.0.',
																																			},
																																			blue: {
																																				type: 'number',
																																				description:
																																					'The blue component of the color, from 0.0 to 1.0.',
																																			},
																																			green: {
																																				type: 'number',
																																				description:
																																					'The green component of the color, from 0.0 to 1.0.',
																																			},
																																		},
																																	required:
																																		[],
																																},
																															themeColor:
																																{
																																	type: 'string',
																																	description:
																																		'An opaque theme color.',
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'THEME_COLOR_TYPE_UNSPECIFIED',
																																		'DARK1',
																																		'LIGHT1',
																																		'DARK2',
																																		'LIGHT2',
																																		'ACCENT1',
																																		'ACCENT2',
																																		'ACCENT3',
																																		'ACCENT4',
																																		'ACCENT5',
																																		'ACCENT6',
																																		'HYPERLINK',
																																		'FOLLOWED_HYPERLINK',
																																		'TEXT1',
																																		'BACKGROUND1',
																																		'TEXT2',
																																		'BACKGROUND2',
																																	],
																																},
																														},
																													required:
																														[],
																												},
																												alpha: {
																													type: 'number',
																													description:
																														'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
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
														},
														required: [],
													},
												},
											},
											required: [],
										},
										line: {
											type: 'object',
											description: 'A line page element.',
											properties: {
												lineCategory: {
													type: 'string',
													description:
														'The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest.',
													default: '',
													enum: [
														'',
														'LINE_CATEGORY_UNSPECIFIED',
														'STRAIGHT',
														'BENT',
														'CURVED',
													],
												},
												lineType: {
													type: 'string',
													description: 'The type of the line.',
													default: '',
													enum: [
														'',
														'TYPE_UNSPECIFIED',
														'STRAIGHT_CONNECTOR_1',
														'BENT_CONNECTOR_2',
														'BENT_CONNECTOR_3',
														'BENT_CONNECTOR_4',
														'BENT_CONNECTOR_5',
														'CURVED_CONNECTOR_2',
														'CURVED_CONNECTOR_3',
														'CURVED_CONNECTOR_4',
														'CURVED_CONNECTOR_5',
														'STRAIGHT_LINE',
													],
												},
												lineProperties: {
													type: 'object',
													description: 'The properties of the line.',
													properties: {
														startConnection: {
															type: 'object',
															description:
																'The connection at the beginning of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have a `start_connection`.',
															properties: {
																connectionSiteIndex: {
																	type: 'number',
																	description:
																		'The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in both the description of the "cxn" attribute in section 20.1.9.9 and "Annex H. Example Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/). The position of each connection site can also be viewed from Slides editor.',
																},
																connectedObjectId: {
																	type: 'string',
																	description:
																		'The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.',
																},
															},
															required: [],
														},
														link: {
															type: 'object',
															description:
																'The hyperlink destination of the line. If unset, there is no link.',
															properties: {
																slideIndex: {
																	type: 'number',
																	description:
																		'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																},
																url: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the external web page at this URL.',
																},
																pageObjectId: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																},
																relativeLink: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																	default: '',
																	enum: [
																		'',
																		'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																		'NEXT_SLIDE',
																		'PREVIOUS_SLIDE',
																		'FIRST_SLIDE',
																		'LAST_SLIDE',
																	],
																},
															},
															required: [],
														},
														endConnection: {
															type: 'object',
															description:
																'The connection at the end of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have an `end_connection`.',
															properties: {
																connectionSiteIndex: {
																	type: 'number',
																	description:
																		'The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in both the description of the "cxn" attribute in section 20.1.9.9 and "Annex H. Example Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/). The position of each connection site can also be viewed from Slides editor.',
																},
																connectedObjectId: {
																	type: 'string',
																	description:
																		'The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.',
																},
															},
															required: [],
														},
														endArrow: {
															type: 'string',
															description:
																'The style of the arrow at the end of the line.',
															default: '',
															enum: [
																'',
																'ARROW_STYLE_UNSPECIFIED',
																'NONE',
																'STEALTH_ARROW',
																'FILL_ARROW',
																'FILL_CIRCLE',
																'FILL_SQUARE',
																'FILL_DIAMOND',
																'OPEN_ARROW',
																'OPEN_CIRCLE',
																'OPEN_SQUARE',
																'OPEN_DIAMOND',
															],
														},
														dashStyle: {
															type: 'string',
															description:
																'The dash style of the line.',
															default: '',
															enum: [
																'',
																'DASH_STYLE_UNSPECIFIED',
																'SOLID',
																'DOT',
																'DASH',
																'DASH_DOT',
																'LONG_DASH',
																'LONG_DASH_DOT',
															],
														},
														lineFill: {
															type: 'object',
															description:
																'The fill of the line. The default line fill matches the defaults for new lines created in the Slides editor.',
															properties: {
																solidFill: {
																	type: 'object',
																	description:
																		'Solid color fill.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color value of the solid fill.',
																			properties: {
																				rgbColor: {
																					type: 'object',
																					description:
																						'An opaque RGB color.',
																					properties: {
																						red: {
																							type: 'number',
																							description:
																								'The red component of the color, from 0.0 to 1.0.',
																						},
																						blue: {
																							type: 'number',
																							description:
																								'The blue component of the color, from 0.0 to 1.0.',
																						},
																						green: {
																							type: 'number',
																							description:
																								'The green component of the color, from 0.0 to 1.0.',
																						},
																					},
																					required: [],
																				},
																				themeColor: {
																					type: 'string',
																					description:
																						'An opaque theme color.',
																					default: '',
																					enum: [
																						'',
																						'THEME_COLOR_TYPE_UNSPECIFIED',
																						'DARK1',
																						'LIGHT1',
																						'DARK2',
																						'LIGHT2',
																						'ACCENT1',
																						'ACCENT2',
																						'ACCENT3',
																						'ACCENT4',
																						'ACCENT5',
																						'ACCENT6',
																						'HYPERLINK',
																						'FOLLOWED_HYPERLINK',
																						'TEXT1',
																						'BACKGROUND1',
																						'TEXT2',
																						'BACKGROUND2',
																					],
																				},
																			},
																			required: [],
																		},
																		alpha: {
																			type: 'number',
																			description:
																				'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														weight: {
															type: 'object',
															description:
																'The thickness of the line.',
															properties: {
																unit: {
																	type: 'string',
																	description:
																		'The units for magnitude.',
																	default: '',
																	enum: [
																		'',
																		'UNIT_UNSPECIFIED',
																		'EMU',
																		'PT',
																	],
																},
																magnitude: {
																	type: 'number',
																	description: 'The magnitude.',
																},
															},
															required: [],
														},
														startArrow: {
															type: 'string',
															description:
																'The style of the arrow at the beginning of the line.',
															default: '',
															enum: [
																'',
																'ARROW_STYLE_UNSPECIFIED',
																'NONE',
																'STEALTH_ARROW',
																'FILL_ARROW',
																'FILL_CIRCLE',
																'FILL_SQUARE',
																'FILL_DIAMOND',
																'OPEN_ARROW',
																'OPEN_CIRCLE',
																'OPEN_SQUARE',
																'OPEN_DIAMOND',
															],
														},
													},
													required: [],
												},
											},
											required: [],
										},
										sheetsChart: {
											type: 'object',
											description:
												'A linked chart embedded from Google Sheets. Unlinked charts are represented as images.',
											properties: {
												contentUrl: {
													type: 'string',
													description:
														"The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.",
												},
												spreadsheetId: {
													type: 'string',
													description:
														'The ID of the Google Sheets spreadsheet that contains the source chart.',
												},
												chartId: {
													type: 'number',
													description:
														'The ID of the specific chart in the Google Sheets spreadsheet that is embedded.',
												},
												sheetsChartProperties: {
													type: 'object',
													description:
														'The properties of the Sheets chart.',
													properties: {
														chartImageProperties: {
															type: 'object',
															description:
																'The properties of the embedded chart image.',
															properties: {
																shadow: {
																	type: 'object',
																	description:
																		'The shadow of the image. If not set, the image has no shadow. This property is read-only.',
																	properties: {
																		alpha: {
																			type: 'number',
																			description:
																				"The alpha of the shadow's color, from 0.0 to 1.0.",
																		},
																		transform: {
																			type: 'object',
																			description:
																				'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
																			properties: {
																				scaleX: {
																					type: 'number',
																					description:
																						'The X coordinate scaling element.',
																				},
																				shearX: {
																					type: 'number',
																					description:
																						'The X coordinate shearing element.',
																				},
																				translateX: {
																					type: 'number',
																					description:
																						'The X coordinate translation element.',
																				},
																				scaleY: {
																					type: 'number',
																					description:
																						'The Y coordinate scaling element.',
																				},
																				translateY: {
																					type: 'number',
																					description:
																						'The Y coordinate translation element.',
																				},
																				shearY: {
																					type: 'number',
																					description:
																						'The Y coordinate shearing element.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The units for translate elements.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																			},
																			required: [],
																		},
																		alignment: {
																			type: 'string',
																			description:
																				'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
																			default: '',
																			enum: [
																				'',
																				'RECTANGLE_POSITION_UNSPECIFIED',
																				'TOP_LEFT',
																				'TOP_CENTER',
																				'TOP_RIGHT',
																				'LEFT_CENTER',
																				'CENTER',
																				'RIGHT_CENTER',
																				'BOTTOM_LEFT',
																				'BOTTOM_CENTER',
																				'BOTTOM_RIGHT',
																			],
																		},
																		type: {
																			type: 'string',
																			description:
																				'The type of the shadow. This property is read-only.',
																			default: '',
																			enum: [
																				'',
																				'SHADOW_TYPE_UNSPECIFIED',
																				'OUTER',
																			],
																		},
																		rotateWithShape: {
																			type: 'boolean',
																			description:
																				'Whether the shadow should rotate with the shape. This property is read-only.',
																		},
																		propertyState: {
																			type: 'string',
																			description:
																				'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
																			default: '',
																			enum: [
																				'',
																				'RENDERED',
																				'NOT_RENDERED',
																				'INHERIT',
																			],
																		},
																		color: {
																			type: 'object',
																			description:
																				'The shadow color value.',
																			properties: {
																				rgbColor: {
																					type: 'object',
																					description:
																						'An opaque RGB color.',
																					properties: {
																						red: {
																							type: 'number',
																							description:
																								'The red component of the color, from 0.0 to 1.0.',
																						},
																						blue: {
																							type: 'number',
																							description:
																								'The blue component of the color, from 0.0 to 1.0.',
																						},
																						green: {
																							type: 'number',
																							description:
																								'The green component of the color, from 0.0 to 1.0.',
																						},
																					},
																					required: [],
																				},
																				themeColor: {
																					type: 'string',
																					description:
																						'An opaque theme color.',
																					default: '',
																					enum: [
																						'',
																						'THEME_COLOR_TYPE_UNSPECIFIED',
																						'DARK1',
																						'LIGHT1',
																						'DARK2',
																						'LIGHT2',
																						'ACCENT1',
																						'ACCENT2',
																						'ACCENT3',
																						'ACCENT4',
																						'ACCENT5',
																						'ACCENT6',
																						'HYPERLINK',
																						'FOLLOWED_HYPERLINK',
																						'TEXT1',
																						'BACKGROUND1',
																						'TEXT2',
																						'BACKGROUND2',
																					],
																				},
																			},
																			required: [],
																		},
																		blurRadius: {
																			type: 'object',
																			description:
																				'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																cropProperties: {
																	type: 'object',
																	description:
																		'The crop properties of the image. If not set, the image is not cropped. This property is read-only.',
																	properties: {
																		rightOffset: {
																			type: 'number',
																			description:
																				"The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.",
																		},
																		bottomOffset: {
																			type: 'number',
																			description:
																				"The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.",
																		},
																		angle: {
																			type: 'number',
																			description:
																				'The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.',
																		},
																		leftOffset: {
																			type: 'number',
																			description:
																				"The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.",
																		},
																		topOffset: {
																			type: 'number',
																			description:
																				"The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.",
																		},
																	},
																	required: [],
																},
																recolor: {
																	type: 'object',
																	description:
																		'The recolor effect of the image. If not set, the image is not recolored. This property is read-only.',
																	properties: {
																		name: {
																			type: 'string',
																			description:
																				"The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.",
																			default: '',
																			enum: [
																				'',
																				'NONE',
																				'LIGHT1',
																				'LIGHT2',
																				'LIGHT3',
																				'LIGHT4',
																				'LIGHT5',
																				'LIGHT6',
																				'LIGHT7',
																				'LIGHT8',
																				'LIGHT9',
																				'LIGHT10',
																				'DARK1',
																				'DARK2',
																				'DARK3',
																				'DARK4',
																				'DARK5',
																				'DARK6',
																				'DARK7',
																				'DARK8',
																				'DARK9',
																				'DARK10',
																				'GRAYSCALE',
																				'NEGATIVE',
																				'SEPIA',
																				'CUSTOM',
																			],
																		},
																		recolorStops: {
																			type: 'array',
																			description:
																				'The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.',
																			items: {
																				type: 'object',
																				description:
																					'A color and position in a gradient band.',
																				properties: {
																					position: {
																						type: 'number',
																						description:
																							'The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].',
																					},
																					alpha: {
																						type: 'number',
																						description:
																							'The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.',
																					},
																					color: {
																						type: 'object',
																						description:
																							'The color of the gradient stop.',
																						properties:
																							{
																								rgbColor:
																									{
																										type: 'object',
																										description:
																											'An opaque RGB color.',
																										properties:
																											{
																												red: {
																													type: 'number',
																													description:
																														'The red component of the color, from 0.0 to 1.0.',
																												},
																												blue: {
																													type: 'number',
																													description:
																														'The blue component of the color, from 0.0 to 1.0.',
																												},
																												green: {
																													type: 'number',
																													description:
																														'The green component of the color, from 0.0 to 1.0.',
																												},
																											},
																										required:
																											[],
																									},
																								themeColor:
																									{
																										type: 'string',
																										description:
																											'An opaque theme color.',
																										default:
																											'',
																										enum: [
																											'',
																											'THEME_COLOR_TYPE_UNSPECIFIED',
																											'DARK1',
																											'LIGHT1',
																											'DARK2',
																											'LIGHT2',
																											'ACCENT1',
																											'ACCENT2',
																											'ACCENT3',
																											'ACCENT4',
																											'ACCENT5',
																											'ACCENT6',
																											'HYPERLINK',
																											'FOLLOWED_HYPERLINK',
																											'TEXT1',
																											'BACKGROUND1',
																											'TEXT2',
																											'BACKGROUND2',
																										],
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
																outline: {
																	type: 'object',
																	description:
																		'The outline of the image. If not set, the image has no outline.',
																	properties: {
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the outline.',
																			default: '',
																			enum: [
																				'',
																				'DASH_STYLE_UNSPECIFIED',
																				'SOLID',
																				'DOT',
																				'DASH',
																				'DASH_DOT',
																				'LONG_DASH',
																				'LONG_DASH_DOT',
																			],
																		},
																		outlineFill: {
																			type: 'object',
																			description:
																				'The fill of the outline.',
																			properties: {
																				solidFill: {
																					type: 'object',
																					description:
																						'Solid color fill.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value of the solid fill.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'An opaque RGB color.',
																											properties:
																												{
																													red: {
																														type: 'number',
																														description:
																															'The red component of the color, from 0.0 to 1.0.',
																													},
																													blue: {
																														type: 'number',
																														description:
																															'The blue component of the color, from 0.0 to 1.0.',
																													},
																													green: {
																														type: 'number',
																														description:
																															'The green component of the color, from 0.0 to 1.0.',
																													},
																												},
																											required:
																												[],
																										},
																									themeColor:
																										{
																											type: 'string',
																											description:
																												'An opaque theme color.',
																											default:
																												'',
																											enum: [
																												'',
																												'THEME_COLOR_TYPE_UNSPECIFIED',
																												'DARK1',
																												'LIGHT1',
																												'DARK2',
																												'LIGHT2',
																												'ACCENT1',
																												'ACCENT2',
																												'ACCENT3',
																												'ACCENT4',
																												'ACCENT5',
																												'ACCENT6',
																												'HYPERLINK',
																												'FOLLOWED_HYPERLINK',
																												'TEXT1',
																												'BACKGROUND1',
																												'TEXT2',
																												'BACKGROUND2',
																											],
																										},
																								},
																							required:
																								[],
																						},
																						alpha: {
																							type: 'number',
																							description:
																								'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		weight: {
																			type: 'object',
																			description:
																				'The thickness of the outline.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																		propertyState: {
																			type: 'string',
																			description:
																				'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																			default: '',
																			enum: [
																				'',
																				'RENDERED',
																				'NOT_RENDERED',
																				'INHERIT',
																			],
																		},
																	},
																	required: [],
																},
																link: {
																	type: 'object',
																	description:
																		'The hyperlink destination of the image. If unset, there is no link.',
																	properties: {
																		slideIndex: {
																			type: 'number',
																			description:
																				'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																		},
																		url: {
																			type: 'string',
																			description:
																				'If set, indicates this is a link to the external web page at this URL.',
																		},
																		pageObjectId: {
																			type: 'string',
																			description:
																				'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																		},
																		relativeLink: {
																			type: 'string',
																			description:
																				'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																			default: '',
																			enum: [
																				'',
																				'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																				'NEXT_SLIDE',
																				'PREVIOUS_SLIDE',
																				'FIRST_SLIDE',
																				'LAST_SLIDE',
																			],
																		},
																	},
																	required: [],
																},
																transparency: {
																	type: 'number',
																	description:
																		'The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.',
																},
																brightness: {
																	type: 'number',
																	description:
																		'The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
																},
																contrast: {
																	type: 'number',
																	description:
																		'The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
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
										wordArt: {
											type: 'object',
											description: 'A word art page element.',
											properties: {
												renderedText: {
													type: 'string',
													description: 'The text rendered as word art.',
												},
											},
											required: [],
										},
										image: {
											type: 'object',
											description: 'An image page element.',
											properties: {
												placeholder: {
													type: 'object',
													description:
														'Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the image is a placeholder image and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.',
													properties: {
														index: {
															type: 'number',
															description:
																'The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.',
														},
														type: {
															type: 'string',
															description:
																'The type of the placeholder.',
															default: '',
															enum: [
																'',
																'NONE',
																'BODY',
																'CHART',
																'CLIP_ART',
																'CENTERED_TITLE',
																'DIAGRAM',
																'DATE_AND_TIME',
																'FOOTER',
																'HEADER',
																'MEDIA',
																'OBJECT',
																'PICTURE',
																'SLIDE_NUMBER',
																'SUBTITLE',
																'TABLE',
																'TITLE',
																'SLIDE_IMAGE',
															],
														},
														parentObjectId: {
															type: 'string',
															description:
																"The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.",
														},
													},
													required: [],
												},
												imageProperties: {
													type: 'object',
													description: 'The properties of the image.',
													properties: {
														shadow: {
															type: 'object',
															description:
																'The shadow of the image. If not set, the image has no shadow. This property is read-only.',
															properties: {
																alpha: {
																	type: 'number',
																	description:
																		"The alpha of the shadow's color, from 0.0 to 1.0.",
																},
																transform: {
																	type: 'object',
																	description:
																		'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
																	properties: {
																		scaleX: {
																			type: 'number',
																			description:
																				'The X coordinate scaling element.',
																		},
																		shearX: {
																			type: 'number',
																			description:
																				'The X coordinate shearing element.',
																		},
																		translateX: {
																			type: 'number',
																			description:
																				'The X coordinate translation element.',
																		},
																		scaleY: {
																			type: 'number',
																			description:
																				'The Y coordinate scaling element.',
																		},
																		translateY: {
																			type: 'number',
																			description:
																				'The Y coordinate translation element.',
																		},
																		shearY: {
																			type: 'number',
																			description:
																				'The Y coordinate shearing element.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The units for translate elements.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																	},
																	required: [],
																},
																alignment: {
																	type: 'string',
																	description:
																		'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'RECTANGLE_POSITION_UNSPECIFIED',
																		'TOP_LEFT',
																		'TOP_CENTER',
																		'TOP_RIGHT',
																		'LEFT_CENTER',
																		'CENTER',
																		'RIGHT_CENTER',
																		'BOTTOM_LEFT',
																		'BOTTOM_CENTER',
																		'BOTTOM_RIGHT',
																	],
																},
																type: {
																	type: 'string',
																	description:
																		'The type of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'SHADOW_TYPE_UNSPECIFIED',
																		'OUTER',
																	],
																},
																rotateWithShape: {
																	type: 'boolean',
																	description:
																		'Whether the shadow should rotate with the shape. This property is read-only.',
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
																color: {
																	type: 'object',
																	description:
																		'The shadow color value.',
																	properties: {
																		rgbColor: {
																			type: 'object',
																			description:
																				'An opaque RGB color.',
																			properties: {
																				red: {
																					type: 'number',
																					description:
																						'The red component of the color, from 0.0 to 1.0.',
																				},
																				blue: {
																					type: 'number',
																					description:
																						'The blue component of the color, from 0.0 to 1.0.',
																				},
																				green: {
																					type: 'number',
																					description:
																						'The green component of the color, from 0.0 to 1.0.',
																				},
																			},
																			required: [],
																		},
																		themeColor: {
																			type: 'string',
																			description:
																				'An opaque theme color.',
																			default: '',
																			enum: [
																				'',
																				'THEME_COLOR_TYPE_UNSPECIFIED',
																				'DARK1',
																				'LIGHT1',
																				'DARK2',
																				'LIGHT2',
																				'ACCENT1',
																				'ACCENT2',
																				'ACCENT3',
																				'ACCENT4',
																				'ACCENT5',
																				'ACCENT6',
																				'HYPERLINK',
																				'FOLLOWED_HYPERLINK',
																				'TEXT1',
																				'BACKGROUND1',
																				'TEXT2',
																				'BACKGROUND2',
																			],
																		},
																	},
																	required: [],
																},
																blurRadius: {
																	type: 'object',
																	description:
																		'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														cropProperties: {
															type: 'object',
															description:
																'The crop properties of the image. If not set, the image is not cropped. This property is read-only.',
															properties: {
																rightOffset: {
																	type: 'number',
																	description:
																		"The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.",
																},
																bottomOffset: {
																	type: 'number',
																	description:
																		"The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.",
																},
																angle: {
																	type: 'number',
																	description:
																		'The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.',
																},
																leftOffset: {
																	type: 'number',
																	description:
																		"The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.",
																},
																topOffset: {
																	type: 'number',
																	description:
																		"The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.",
																},
															},
															required: [],
														},
														recolor: {
															type: 'object',
															description:
																'The recolor effect of the image. If not set, the image is not recolored. This property is read-only.',
															properties: {
																name: {
																	type: 'string',
																	description:
																		"The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.",
																	default: '',
																	enum: [
																		'',
																		'NONE',
																		'LIGHT1',
																		'LIGHT2',
																		'LIGHT3',
																		'LIGHT4',
																		'LIGHT5',
																		'LIGHT6',
																		'LIGHT7',
																		'LIGHT8',
																		'LIGHT9',
																		'LIGHT10',
																		'DARK1',
																		'DARK2',
																		'DARK3',
																		'DARK4',
																		'DARK5',
																		'DARK6',
																		'DARK7',
																		'DARK8',
																		'DARK9',
																		'DARK10',
																		'GRAYSCALE',
																		'NEGATIVE',
																		'SEPIA',
																		'CUSTOM',
																	],
																},
																recolorStops: {
																	type: 'array',
																	description:
																		'The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.',
																	items: {
																		type: 'object',
																		description:
																			'A color and position in a gradient band.',
																		properties: {
																			position: {
																				type: 'number',
																				description:
																					'The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].',
																			},
																			alpha: {
																				type: 'number',
																				description:
																					'The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.',
																			},
																			color: {
																				type: 'object',
																				description:
																					'The color of the gradient stop.',
																				properties: {
																					rgbColor: {
																						type: 'object',
																						description:
																							'An opaque RGB color.',
																						properties:
																							{
																								red: {
																									type: 'number',
																									description:
																										'The red component of the color, from 0.0 to 1.0.',
																								},
																								blue: {
																									type: 'number',
																									description:
																										'The blue component of the color, from 0.0 to 1.0.',
																								},
																								green: {
																									type: 'number',
																									description:
																										'The green component of the color, from 0.0 to 1.0.',
																								},
																							},
																						required:
																							[],
																					},
																					themeColor: {
																						type: 'string',
																						description:
																							'An opaque theme color.',
																						default: '',
																						enum: [
																							'',
																							'THEME_COLOR_TYPE_UNSPECIFIED',
																							'DARK1',
																							'LIGHT1',
																							'DARK2',
																							'LIGHT2',
																							'ACCENT1',
																							'ACCENT2',
																							'ACCENT3',
																							'ACCENT4',
																							'ACCENT5',
																							'ACCENT6',
																							'HYPERLINK',
																							'FOLLOWED_HYPERLINK',
																							'TEXT1',
																							'BACKGROUND1',
																							'TEXT2',
																							'BACKGROUND2',
																						],
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
														outline: {
															type: 'object',
															description:
																'The outline of the image. If not set, the image has no outline.',
															properties: {
																dashStyle: {
																	type: 'string',
																	description:
																		'The dash style of the outline.',
																	default: '',
																	enum: [
																		'',
																		'DASH_STYLE_UNSPECIFIED',
																		'SOLID',
																		'DOT',
																		'DASH',
																		'DASH_DOT',
																		'LONG_DASH',
																		'LONG_DASH_DOT',
																	],
																},
																outlineFill: {
																	type: 'object',
																	description:
																		'The fill of the outline.',
																	properties: {
																		solidFill: {
																			type: 'object',
																			description:
																				'Solid color fill.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value of the solid fill.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																				alpha: {
																					type: 'number',
																					description:
																						'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																weight: {
																	type: 'object',
																	description:
																		'The thickness of the outline.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
															},
															required: [],
														},
														link: {
															type: 'object',
															description:
																'The hyperlink destination of the image. If unset, there is no link.',
															properties: {
																slideIndex: {
																	type: 'number',
																	description:
																		'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																},
																url: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the external web page at this URL.',
																},
																pageObjectId: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																},
																relativeLink: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																	default: '',
																	enum: [
																		'',
																		'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																		'NEXT_SLIDE',
																		'PREVIOUS_SLIDE',
																		'FIRST_SLIDE',
																		'LAST_SLIDE',
																	],
																},
															},
															required: [],
														},
														transparency: {
															type: 'number',
															description:
																'The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.',
														},
														brightness: {
															type: 'number',
															description:
																'The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
														},
														contrast: {
															type: 'number',
															description:
																'The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
														},
													},
													required: [],
												},
												contentUrl: {
													type: 'string',
													description:
														"An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.",
												},
												sourceUrl: {
													type: 'string',
													description:
														'The source URL is the URL used to insert the image. The source URL can be empty.',
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
				layouts: {
					type: 'array',
					description:
						'The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout. Nested pageElements match the Page resource from Get a page; they are omitted here because they duplicate the slides[].pageElements schema.',
					items: {
						type: 'object',
						description: 'A page in a presentation.',
						properties: {
							objectId: {
								type: 'string',
								description:
									'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
							},
							layoutProperties: {
								type: 'object',
								description:
									'Layout specific properties. Only set if page_type = LAYOUT.',
								properties: {
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this layout is based on.',
									},
									name: {
										type: 'string',
										description: 'The name of the layout.',
									},
									displayName: {
										type: 'string',
										description: 'The human-readable name of the layout.',
									},
								},
								required: [],
							},
							masterProperties: {
								type: 'object',
								description:
									'Master specific properties. Only set if page_type = MASTER.',
								properties: {
									displayName: {
										type: 'string',
										description: 'The human-readable name of the master.',
									},
								},
								required: [],
							},
							pageType: {
								type: 'string',
								description: 'The type of the page.',
								default: '',
								enum: ['', 'SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'],
							},
							notesProperties: {
								type: 'object',
								description:
									'Notes specific properties. Only set if page_type = NOTES.',
								properties: {
									speakerNotesObjectId: {
										type: 'string',
										description:
											'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
									},
								},
								required: [],
							},
							slideProperties: {
								type: 'object',
								description:
									'Slide specific properties. Only set if page_type = SLIDE.',
								properties: {
									notesPage: {
										type: 'object',
										description:
											'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
										properties: {
											objectId: {
												type: 'string',
												description:
													'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
											},
											pageType: {
												type: 'string',
												description: 'The type of the page.',
												default: '',
												enum: [
													'',
													'SLIDE',
													'MASTER',
													'LAYOUT',
													'NOTES',
													'NOTES_MASTER',
												],
											},
										},
										required: [],
									},
									layoutObjectId: {
										type: 'string',
										description:
											'The object ID of the layout that this slide is based on. This property is read-only.',
									},
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this slide is based on. This property is read-only.',
									},
									isSkipped: {
										type: 'boolean',
										description:
											'Whether the slide is skipped in the presentation mode. Defaults to false.',
									},
								},
								required: [],
							},
							pageProperties: {
								type: 'object',
								description: 'The properties of the page.',
								properties: {
									pageBackgroundFill: {
										type: 'object',
										description:
											'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
										properties: {
											solidFill: {
												type: 'object',
												description: 'Solid color fill.',
												properties: {
													color: {
														type: 'object',
														description:
															'The color value of the solid fill.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'THEME_COLOR_TYPE_UNSPECIFIED',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
													alpha: {
														type: 'number',
														description:
															'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
													},
												},
												required: [],
											},
											stretchedPictureFill: {
												type: 'object',
												description: 'Stretched picture fill.',
												properties: {
													contentUrl: {
														type: 'string',
														description:
															"Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
													},
													size: {
														type: 'object',
														description:
															'The original size of the picture fill. This field is read-only.',
														properties: {
															width: {
																type: 'object',
																description:
																	'The width of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
															height: {
																type: 'object',
																description:
																	'The height of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
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
											propertyState: {
												type: 'string',
												description:
													'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
												default: '',
												enum: ['', 'RENDERED', 'NOT_RENDERED', 'INHERIT'],
											},
										},
										required: [],
									},
									colorScheme: {
										type: 'object',
										description:
											'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
										properties: {
											colors: {
												type: 'array',
												description:
													'The ThemeColorType and corresponding concrete color pairs.',
												items: {
													type: 'object',
													description:
														'A pair mapping a theme color type to the concrete color it represents.',
													properties: {
														color: {
															type: 'object',
															description:
																'The concrete color corresponding to the theme color type above.',
															properties: {
																red: {
																	type: 'number',
																	description:
																		'The red component of the color, from 0.0 to 1.0.',
																},
																blue: {
																	type: 'number',
																	description:
																		'The blue component of the color, from 0.0 to 1.0.',
																},
																green: {
																	type: 'number',
																	description:
																		'The green component of the color, from 0.0 to 1.0.',
																},
															},
															required: [],
														},
														type: {
															type: 'string',
															description:
																'The type of the theme color.',
															default: '',
															enum: [
																'',
																'THEME_COLOR_TYPE_UNSPECIFIED',
																'DARK1',
																'LIGHT1',
																'DARK2',
																'LIGHT2',
																'ACCENT1',
																'ACCENT2',
																'ACCENT3',
																'ACCENT4',
																'ACCENT5',
																'ACCENT6',
																'HYPERLINK',
																'FOLLOWED_HYPERLINK',
																'TEXT1',
																'BACKGROUND1',
																'TEXT2',
																'BACKGROUND2',
															],
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
							revisionId: {
								type: 'string',
								description:
									"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
							},
						},
						required: [],
					},
				},
				presentationId: { type: 'string', description: 'The ID of the presentation.' },
				revisionId: {
					type: 'string',
					description:
						"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
				},
				notesMaster: {
					type: 'object',
					description:
						'The notes master in the presentation. It serves three purposes: - Placeholder shapes on a notes master contain the default text styles and shape properties of all placeholder shapes on notes pages. Specifically, a `SLIDE_IMAGE` placeholder shape contains the slide thumbnail, and a `BODY` placeholder shape contains the speaker notes. - The notes master page properties define the common page properties inherited by all notes pages. - Any other shapes on the notes master appear on all notes pages. The notes master is read-only. Nested pageElements match the Page resource from Get a page; they are omitted here because they duplicate the slides[].pageElements schema.',
					properties: {
						objectId: {
							type: 'string',
							description:
								'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
						},
						layoutProperties: {
							type: 'object',
							description:
								'Layout specific properties. Only set if page_type = LAYOUT.',
							properties: {
								masterObjectId: {
									type: 'string',
									description:
										'The object ID of the master that this layout is based on.',
								},
								name: { type: 'string', description: 'The name of the layout.' },
								displayName: {
									type: 'string',
									description: 'The human-readable name of the layout.',
								},
							},
							required: [],
						},
						masterProperties: {
							type: 'object',
							description:
								'Master specific properties. Only set if page_type = MASTER.',
							properties: {
								displayName: {
									type: 'string',
									description: 'The human-readable name of the master.',
								},
							},
							required: [],
						},
						pageType: {
							type: 'string',
							description: 'The type of the page.',
							default: '',
							enum: ['', 'SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'],
						},
						notesProperties: {
							type: 'object',
							description:
								'Notes specific properties. Only set if page_type = NOTES.',
							properties: {
								speakerNotesObjectId: {
									type: 'string',
									description:
										'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
								},
							},
							required: [],
						},
						slideProperties: {
							type: 'object',
							description:
								'Slide specific properties. Only set if page_type = SLIDE.',
							properties: {
								notesPage: {
									type: 'object',
									description:
										'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
									properties: {
										objectId: {
											type: 'string',
											description:
												'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
										},
										pageType: {
											type: 'string',
											description: 'The type of the page.',
											default: '',
											enum: [
												'',
												'SLIDE',
												'MASTER',
												'LAYOUT',
												'NOTES',
												'NOTES_MASTER',
											],
										},
									},
									required: [],
								},
								layoutObjectId: {
									type: 'string',
									description:
										'The object ID of the layout that this slide is based on. This property is read-only.',
								},
								masterObjectId: {
									type: 'string',
									description:
										'The object ID of the master that this slide is based on. This property is read-only.',
								},
								isSkipped: {
									type: 'boolean',
									description:
										'Whether the slide is skipped in the presentation mode. Defaults to false.',
								},
							},
							required: [],
						},
						pageProperties: {
							type: 'object',
							description: 'The properties of the page.',
							properties: {
								pageBackgroundFill: {
									type: 'object',
									description:
										'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
									properties: {
										solidFill: {
											type: 'object',
											description: 'Solid color fill.',
											properties: {
												color: {
													type: 'object',
													description:
														'The color value of the solid fill.',
													properties: {
														rgbColor: {
															type: 'object',
															description: 'An opaque RGB color.',
															properties: {
																red: {
																	type: 'number',
																	description:
																		'The red component of the color, from 0.0 to 1.0.',
																},
																blue: {
																	type: 'number',
																	description:
																		'The blue component of the color, from 0.0 to 1.0.',
																},
																green: {
																	type: 'number',
																	description:
																		'The green component of the color, from 0.0 to 1.0.',
																},
															},
															required: [],
														},
														themeColor: {
															type: 'string',
															description: 'An opaque theme color.',
															default: '',
															enum: [
																'',
																'THEME_COLOR_TYPE_UNSPECIFIED',
																'DARK1',
																'LIGHT1',
																'DARK2',
																'LIGHT2',
																'ACCENT1',
																'ACCENT2',
																'ACCENT3',
																'ACCENT4',
																'ACCENT5',
																'ACCENT6',
																'HYPERLINK',
																'FOLLOWED_HYPERLINK',
																'TEXT1',
																'BACKGROUND1',
																'TEXT2',
																'BACKGROUND2',
															],
														},
													},
													required: [],
												},
												alpha: {
													type: 'number',
													description:
														'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
												},
											},
											required: [],
										},
										stretchedPictureFill: {
											type: 'object',
											description: 'Stretched picture fill.',
											properties: {
												contentUrl: {
													type: 'string',
													description:
														"Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
												},
												size: {
													type: 'object',
													description:
														'The original size of the picture fill. This field is read-only.',
													properties: {
														width: {
															type: 'object',
															description: 'The width of the object.',
															properties: {
																unit: {
																	type: 'string',
																	description:
																		'The units for magnitude.',
																	default: '',
																	enum: [
																		'',
																		'UNIT_UNSPECIFIED',
																		'EMU',
																		'PT',
																	],
																},
																magnitude: {
																	type: 'number',
																	description: 'The magnitude.',
																},
															},
															required: [],
														},
														height: {
															type: 'object',
															description:
																'The height of the object.',
															properties: {
																unit: {
																	type: 'string',
																	description:
																		'The units for magnitude.',
																	default: '',
																	enum: [
																		'',
																		'UNIT_UNSPECIFIED',
																		'EMU',
																		'PT',
																	],
																},
																magnitude: {
																	type: 'number',
																	description: 'The magnitude.',
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
										propertyState: {
											type: 'string',
											description:
												'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
											default: '',
											enum: ['', 'RENDERED', 'NOT_RENDERED', 'INHERIT'],
										},
									},
									required: [],
								},
								colorScheme: {
									type: 'object',
									description:
										'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
									properties: {
										colors: {
											type: 'array',
											description:
												'The ThemeColorType and corresponding concrete color pairs.',
											items: {
												type: 'object',
												description:
													'A pair mapping a theme color type to the concrete color it represents.',
												properties: {
													color: {
														type: 'object',
														description:
															'The concrete color corresponding to the theme color type above.',
														properties: {
															red: {
																type: 'number',
																description:
																	'The red component of the color, from 0.0 to 1.0.',
															},
															blue: {
																type: 'number',
																description:
																	'The blue component of the color, from 0.0 to 1.0.',
															},
															green: {
																type: 'number',
																description:
																	'The green component of the color, from 0.0 to 1.0.',
															},
														},
														required: [],
													},
													type: {
														type: 'string',
														description: 'The type of the theme color.',
														default: '',
														enum: [
															'',
															'THEME_COLOR_TYPE_UNSPECIFIED',
															'DARK1',
															'LIGHT1',
															'DARK2',
															'LIGHT2',
															'ACCENT1',
															'ACCENT2',
															'ACCENT3',
															'ACCENT4',
															'ACCENT5',
															'ACCENT6',
															'HYPERLINK',
															'FOLLOWED_HYPERLINK',
															'TEXT1',
															'BACKGROUND1',
															'TEXT2',
															'BACKGROUND2',
														],
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
						revisionId: {
							type: 'string',
							description:
								"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
						},
					},
					required: [],
				},
				masters: {
					type: 'array',
					description:
						'The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master. - The master page properties define the common page properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master, regardless of their layout. Nested pageElements match the Page resource from Get a page; they are omitted here because they duplicate the slides[].pageElements schema.',
					items: {
						type: 'object',
						description: 'A page in a presentation.',
						properties: {
							objectId: {
								type: 'string',
								description:
									'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
							},
							layoutProperties: {
								type: 'object',
								description:
									'Layout specific properties. Only set if page_type = LAYOUT.',
								properties: {
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this layout is based on.',
									},
									name: {
										type: 'string',
										description: 'The name of the layout.',
									},
									displayName: {
										type: 'string',
										description: 'The human-readable name of the layout.',
									},
								},
								required: [],
							},
							masterProperties: {
								type: 'object',
								description:
									'Master specific properties. Only set if page_type = MASTER.',
								properties: {
									displayName: {
										type: 'string',
										description: 'The human-readable name of the master.',
									},
								},
								required: [],
							},
							pageType: {
								type: 'string',
								description: 'The type of the page.',
								default: '',
								enum: ['', 'SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'],
							},
							notesProperties: {
								type: 'object',
								description:
									'Notes specific properties. Only set if page_type = NOTES.',
								properties: {
									speakerNotesObjectId: {
										type: 'string',
										description:
											'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
									},
								},
								required: [],
							},
							slideProperties: {
								type: 'object',
								description:
									'Slide specific properties. Only set if page_type = SLIDE.',
								properties: {
									notesPage: {
										type: 'object',
										description:
											'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
										properties: {
											objectId: {
												type: 'string',
												description:
													'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
											},
											pageType: {
												type: 'string',
												description: 'The type of the page.',
												default: '',
												enum: [
													'',
													'SLIDE',
													'MASTER',
													'LAYOUT',
													'NOTES',
													'NOTES_MASTER',
												],
											},
										},
										required: [],
									},
									layoutObjectId: {
										type: 'string',
										description:
											'The object ID of the layout that this slide is based on. This property is read-only.',
									},
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this slide is based on. This property is read-only.',
									},
									isSkipped: {
										type: 'boolean',
										description:
											'Whether the slide is skipped in the presentation mode. Defaults to false.',
									},
								},
								required: [],
							},
							pageProperties: {
								type: 'object',
								description: 'The properties of the page.',
								properties: {
									pageBackgroundFill: {
										type: 'object',
										description:
											'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
										properties: {
											solidFill: {
												type: 'object',
												description: 'Solid color fill.',
												properties: {
													color: {
														type: 'object',
														description:
															'The color value of the solid fill.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'THEME_COLOR_TYPE_UNSPECIFIED',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
													alpha: {
														type: 'number',
														description:
															'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
													},
												},
												required: [],
											},
											stretchedPictureFill: {
												type: 'object',
												description: 'Stretched picture fill.',
												properties: {
													contentUrl: {
														type: 'string',
														description:
															"Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
													},
													size: {
														type: 'object',
														description:
															'The original size of the picture fill. This field is read-only.',
														properties: {
															width: {
																type: 'object',
																description:
																	'The width of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
															height: {
																type: 'object',
																description:
																	'The height of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
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
											propertyState: {
												type: 'string',
												description:
													'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
												default: '',
												enum: ['', 'RENDERED', 'NOT_RENDERED', 'INHERIT'],
											},
										},
										required: [],
									},
									colorScheme: {
										type: 'object',
										description:
											'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
										properties: {
											colors: {
												type: 'array',
												description:
													'The ThemeColorType and corresponding concrete color pairs.',
												items: {
													type: 'object',
													description:
														'A pair mapping a theme color type to the concrete color it represents.',
													properties: {
														color: {
															type: 'object',
															description:
																'The concrete color corresponding to the theme color type above.',
															properties: {
																red: {
																	type: 'number',
																	description:
																		'The red component of the color, from 0.0 to 1.0.',
																},
																blue: {
																	type: 'number',
																	description:
																		'The blue component of the color, from 0.0 to 1.0.',
																},
																green: {
																	type: 'number',
																	description:
																		'The green component of the color, from 0.0 to 1.0.',
																},
															},
															required: [],
														},
														type: {
															type: 'string',
															description:
																'The type of the theme color.',
															default: '',
															enum: [
																'',
																'THEME_COLOR_TYPE_UNSPECIFIED',
																'DARK1',
																'LIGHT1',
																'DARK2',
																'LIGHT2',
																'ACCENT1',
																'ACCENT2',
																'ACCENT3',
																'ACCENT4',
																'ACCENT5',
																'ACCENT6',
																'HYPERLINK',
																'FOLLOWED_HYPERLINK',
																'TEXT1',
																'BACKGROUND1',
																'TEXT2',
																'BACKGROUND2',
															],
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
							revisionId: {
								type: 'string',
								description:
									"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
							},
						},
						required: [],
					},
				},
				pageSize: {
					type: 'object',
					description: 'The size of pages in the presentation.',
					properties: {
						width: {
							type: 'object',
							description: 'The width of the object.',
							properties: {
								unit: {
									type: 'string',
									description: 'The units for magnitude.',
									default: '',
									enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
								},
								magnitude: { type: 'number', description: 'The magnitude.' },
							},
							required: [],
						},
						height: {
							type: 'object',
							description: 'The height of the object.',
							properties: {
								unit: {
									type: 'string',
									description: 'The units for magnitude.',
									default: '',
									enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
								},
								magnitude: { type: 'number', description: 'The magnitude.' },
							},
							required: [],
						},
					},
					required: [],
				},
				locale: {
					type: 'string',
					description: 'The locale of the presentation, as an IETF BCP 47 language tag.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-slides',
		appVersion: 1,
		endpointName: 'getPage',
		label: 'Get a page',
		description: 'Retrieves a page from a Google Slides presentation.',
		context:
			'---\nname: getPage\ndescription: Retrieves a page from a Google Slides presentation.\n---\n\nFetches the latest version of a single page (slide, layout, master, notes, or notes master) by presentation ID and page object ID.\n\nPage object IDs are returned in the `slides`, `layouts`, `masters`, and `notesMaster` fields of **Get a presentation**. Object IDs for pages and page elements share the same namespace.\n\nThis endpoint returns the Page resource, not a thumbnail. Use **Get a page thumbnail** for a thumbnail image URL.\n\nRefer to the [presentations.pages.get reference](https://developers.google.com/slides/api/reference/rest/v1/presentations.pages/get).\n',
		accounts: { google: { scope: ['https://www.googleapis.com/auth/presentations'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				presentationId: {
					type: 'string',
					description:
						'The ID of the presentation that contains the page. You can find this in the presentation URL: docs.google.com/presentation/d/{presentationId}/edit',
				},
				pageObjectId: {
					type: 'string',
					description:
						'The object ID of the page to retrieve. Page object IDs are returned in the slides, masters, and layouts arrays of Get a presentation.',
				},
			},
			required: ['presentationId', 'pageObjectId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				objectId: {
					type: 'string',
					description:
						'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
				},
				layoutProperties: {
					type: 'object',
					description: 'Layout specific properties. Only set if page_type = LAYOUT.',
					properties: {
						masterObjectId: {
							type: 'string',
							description:
								'The object ID of the master that this layout is based on.',
						},
						name: { type: 'string', description: 'The name of the layout.' },
						displayName: {
							type: 'string',
							description: 'The human-readable name of the layout.',
						},
					},
					required: [],
				},
				masterProperties: {
					type: 'object',
					description: 'Master specific properties. Only set if page_type = MASTER.',
					properties: {
						displayName: {
							type: 'string',
							description: 'The human-readable name of the master.',
						},
					},
					required: [],
				},
				pageType: {
					type: 'string',
					description: 'The type of the page.',
					default: '',
					enum: ['', 'SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'],
				},
				notesProperties: {
					type: 'object',
					description: 'Notes specific properties. Only set if page_type = NOTES.',
					properties: {
						speakerNotesObjectId: {
							type: 'string',
							description:
								'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
						},
					},
					required: [],
				},
				slideProperties: {
					type: 'object',
					description: 'Slide specific properties. Only set if page_type = SLIDE.',
					properties: {
						notesPage: {
							type: 'object',
							description:
								'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
							properties: {
								objectId: {
									type: 'string',
									description:
										'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
								},
								pageType: {
									type: 'string',
									description: 'The type of the page.',
									default: '',
									enum: [
										'',
										'SLIDE',
										'MASTER',
										'LAYOUT',
										'NOTES',
										'NOTES_MASTER',
									],
								},
							},
							required: [],
						},
						layoutObjectId: {
							type: 'string',
							description:
								'The object ID of the layout that this slide is based on. This property is read-only.',
						},
						masterObjectId: {
							type: 'string',
							description:
								'The object ID of the master that this slide is based on. This property is read-only.',
						},
						isSkipped: {
							type: 'boolean',
							description:
								'Whether the slide is skipped in the presentation mode. Defaults to false.',
						},
					},
					required: [],
				},
				pageProperties: {
					type: 'object',
					description: 'The properties of the page.',
					properties: {
						pageBackgroundFill: {
							type: 'object',
							description:
								'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
							properties: {
								solidFill: {
									type: 'object',
									description: 'Solid color fill.',
									properties: {
										color: {
											type: 'object',
											description: 'The color value of the solid fill.',
											properties: {
												rgbColor: {
													type: 'object',
													description: 'An opaque RGB color.',
													properties: {
														red: {
															type: 'number',
															description:
																'The red component of the color, from 0.0 to 1.0.',
														},
														blue: {
															type: 'number',
															description:
																'The blue component of the color, from 0.0 to 1.0.',
														},
														green: {
															type: 'number',
															description:
																'The green component of the color, from 0.0 to 1.0.',
														},
													},
													required: [],
												},
												themeColor: {
													type: 'string',
													description: 'An opaque theme color.',
													default: '',
													enum: [
														'',
														'THEME_COLOR_TYPE_UNSPECIFIED',
														'DARK1',
														'LIGHT1',
														'DARK2',
														'LIGHT2',
														'ACCENT1',
														'ACCENT2',
														'ACCENT3',
														'ACCENT4',
														'ACCENT5',
														'ACCENT6',
														'HYPERLINK',
														'FOLLOWED_HYPERLINK',
														'TEXT1',
														'BACKGROUND1',
														'TEXT2',
														'BACKGROUND2',
													],
												},
											},
											required: [],
										},
										alpha: {
											type: 'number',
											description:
												'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
										},
									},
									required: [],
								},
								stretchedPictureFill: {
									type: 'object',
									description: 'Stretched picture fill.',
									properties: {
										contentUrl: {
											type: 'string',
											description:
												"Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
										},
										size: {
											type: 'object',
											description:
												'The original size of the picture fill. This field is read-only.',
											properties: {
												width: {
													type: 'object',
													description: 'The width of the object.',
													properties: {
														unit: {
															type: 'string',
															description: 'The units for magnitude.',
															default: '',
															enum: [
																'',
																'UNIT_UNSPECIFIED',
																'EMU',
																'PT',
															],
														},
														magnitude: {
															type: 'number',
															description: 'The magnitude.',
														},
													},
													required: [],
												},
												height: {
													type: 'object',
													description: 'The height of the object.',
													properties: {
														unit: {
															type: 'string',
															description: 'The units for magnitude.',
															default: '',
															enum: [
																'',
																'UNIT_UNSPECIFIED',
																'EMU',
																'PT',
															],
														},
														magnitude: {
															type: 'number',
															description: 'The magnitude.',
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
								propertyState: {
									type: 'string',
									description:
										'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
									default: '',
									enum: ['', 'RENDERED', 'NOT_RENDERED', 'INHERIT'],
								},
							},
							required: [],
						},
						colorScheme: {
							type: 'object',
							description:
								'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
							properties: {
								colors: {
									type: 'array',
									description:
										'The ThemeColorType and corresponding concrete color pairs.',
									items: {
										type: 'object',
										description:
											'A pair mapping a theme color type to the concrete color it represents.',
										properties: {
											color: {
												type: 'object',
												description:
													'The concrete color corresponding to the theme color type above.',
												properties: {
													red: {
														type: 'number',
														description:
															'The red component of the color, from 0.0 to 1.0.',
													},
													blue: {
														type: 'number',
														description:
															'The blue component of the color, from 0.0 to 1.0.',
													},
													green: {
														type: 'number',
														description:
															'The green component of the color, from 0.0 to 1.0.',
													},
												},
												required: [],
											},
											type: {
												type: 'string',
												description: 'The type of the theme color.',
												default: '',
												enum: [
													'',
													'THEME_COLOR_TYPE_UNSPECIFIED',
													'DARK1',
													'LIGHT1',
													'DARK2',
													'LIGHT2',
													'ACCENT1',
													'ACCENT2',
													'ACCENT3',
													'ACCENT4',
													'ACCENT5',
													'ACCENT6',
													'HYPERLINK',
													'FOLLOWED_HYPERLINK',
													'TEXT1',
													'BACKGROUND1',
													'TEXT2',
													'BACKGROUND2',
												],
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
				revisionId: {
					type: 'string',
					description:
						"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
				},
				pageElements: {
					type: 'array',
					description: 'The page elements rendered on the page.',
					items: {
						type: 'object',
						description: 'A visual element rendered on a page.',
						properties: {
							objectId: {
								type: 'string',
								description:
									'The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.',
							},
							transform: {
								type: 'object',
								description:
									"The transform of the page element. The visual appearance of the page element is determined by its absolute transform. To compute the absolute transform, preconcatenate a page element's transform with the transforms of all of its parent groups. If the page element is not in a group, its absolute transform is the same as the value in this field. The initial transform for the newly created Group is always the identity transform.",
								properties: {
									scaleX: {
										type: 'number',
										description: 'The X coordinate scaling element.',
									},
									shearX: {
										type: 'number',
										description: 'The X coordinate shearing element.',
									},
									translateX: {
										type: 'number',
										description: 'The X coordinate translation element.',
									},
									scaleY: {
										type: 'number',
										description: 'The Y coordinate scaling element.',
									},
									translateY: {
										type: 'number',
										description: 'The Y coordinate translation element.',
									},
									shearY: {
										type: 'number',
										description: 'The Y coordinate shearing element.',
									},
									unit: {
										type: 'string',
										description: 'The units for translate elements.',
										default: '',
										enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
									},
								},
								required: [],
							},
							elementGroup: {
								type: 'object',
								description:
									'A collection of page elements joined as a single unit.',
								properties: {
									children: {
										type: 'array',
										description:
											'The collection of elements in the group. The minimum size of a group is 2.',
										items: {
											type: 'object',
											description: 'A visual element rendered on a page.',
											properties: {
												objectId: {
													type: 'string',
													description:
														'The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.',
												},
												description: {
													type: 'string',
													description:
														'The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							speakerSpotlight: {
								type: 'object',
								description: 'A Speaker Spotlight.',
								properties: {
									speakerSpotlightProperties: {
										type: 'object',
										description: 'The properties of the Speaker Spotlight.',
										properties: {
											outline: {
												type: 'object',
												description:
													'The outline of the Speaker Spotlight. If not set, it has no outline.',
												properties: {
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the outline.',
														default: '',
														enum: [
															'',
															'DASH_STYLE_UNSPECIFIED',
															'SOLID',
															'DOT',
															'DASH',
															'DASH_DOT',
															'LONG_DASH',
															'LONG_DASH_DOT',
														],
													},
													outlineFill: {
														type: 'object',
														description: 'The fill of the outline.',
														properties: {
															solidFill: {
																type: 'object',
																description: 'Solid color fill.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value of the solid fill.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'An opaque RGB color.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'The red component of the color, from 0.0 to 1.0.',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'The blue component of the color, from 0.0 to 1.0.',
																					},
																					green: {
																						type: 'number',
																						description:
																							'The green component of the color, from 0.0 to 1.0.',
																					},
																				},
																				required: [],
																			},
																			themeColor: {
																				type: 'string',
																				description:
																					'An opaque theme color.',
																				default: '',
																				enum: [
																					'',
																					'THEME_COLOR_TYPE_UNSPECIFIED',
																					'DARK1',
																					'LIGHT1',
																					'DARK2',
																					'LIGHT2',
																					'ACCENT1',
																					'ACCENT2',
																					'ACCENT3',
																					'ACCENT4',
																					'ACCENT5',
																					'ACCENT6',
																					'HYPERLINK',
																					'FOLLOWED_HYPERLINK',
																					'TEXT1',
																					'BACKGROUND1',
																					'TEXT2',
																					'BACKGROUND2',
																				],
																			},
																		},
																		required: [],
																	},
																	alpha: {
																		type: 'number',
																		description:
																			'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													weight: {
														type: 'object',
														description:
															'The thickness of the outline.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The units for magnitude.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
															magnitude: {
																type: 'number',
																description: 'The magnitude.',
															},
														},
														required: [],
													},
													propertyState: {
														type: 'string',
														description:
															'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
														default: '',
														enum: [
															'',
															'RENDERED',
															'NOT_RENDERED',
															'INHERIT',
														],
													},
												},
												required: [],
											},
											shadow: {
												type: 'object',
												description:
													'The shadow of the Speaker Spotlight. If not set, it has no shadow.',
												properties: {
													alpha: {
														type: 'number',
														description:
															"The alpha of the shadow's color, from 0.0 to 1.0.",
													},
													transform: {
														type: 'object',
														description:
															'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
														properties: {
															scaleX: {
																type: 'number',
																description:
																	'The X coordinate scaling element.',
															},
															shearX: {
																type: 'number',
																description:
																	'The X coordinate shearing element.',
															},
															translateX: {
																type: 'number',
																description:
																	'The X coordinate translation element.',
															},
															scaleY: {
																type: 'number',
																description:
																	'The Y coordinate scaling element.',
															},
															translateY: {
																type: 'number',
																description:
																	'The Y coordinate translation element.',
															},
															shearY: {
																type: 'number',
																description:
																	'The Y coordinate shearing element.',
															},
															unit: {
																type: 'string',
																description:
																	'The units for translate elements.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
														},
														required: [],
													},
													alignment: {
														type: 'string',
														description:
															'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
														default: '',
														enum: [
															'',
															'RECTANGLE_POSITION_UNSPECIFIED',
															'TOP_LEFT',
															'TOP_CENTER',
															'TOP_RIGHT',
															'LEFT_CENTER',
															'CENTER',
															'RIGHT_CENTER',
															'BOTTOM_LEFT',
															'BOTTOM_CENTER',
															'BOTTOM_RIGHT',
														],
													},
													type: {
														type: 'string',
														description:
															'The type of the shadow. This property is read-only.',
														default: '',
														enum: [
															'',
															'SHADOW_TYPE_UNSPECIFIED',
															'OUTER',
														],
													},
													rotateWithShape: {
														type: 'boolean',
														description:
															'Whether the shadow should rotate with the shape. This property is read-only.',
													},
													propertyState: {
														type: 'string',
														description:
															'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
														default: '',
														enum: [
															'',
															'RENDERED',
															'NOT_RENDERED',
															'INHERIT',
														],
													},
													color: {
														type: 'object',
														description: 'The shadow color value.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'THEME_COLOR_TYPE_UNSPECIFIED',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
													blurRadius: {
														type: 'object',
														description:
															'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The units for magnitude.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
															magnitude: {
																type: 'number',
																description: 'The magnitude.',
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
							shape: {
								type: 'object',
								description: 'A generic shape.',
								properties: {
									placeholder: {
										type: 'object',
										description:
											'Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the shape is a placeholder shape and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.',
										properties: {
											index: {
												type: 'number',
												description:
													'The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.',
											},
											type: {
												type: 'string',
												description: 'The type of the placeholder.',
												default: '',
												enum: [
													'',
													'NONE',
													'BODY',
													'CHART',
													'CLIP_ART',
													'CENTERED_TITLE',
													'DIAGRAM',
													'DATE_AND_TIME',
													'FOOTER',
													'HEADER',
													'MEDIA',
													'OBJECT',
													'PICTURE',
													'SLIDE_NUMBER',
													'SUBTITLE',
													'TABLE',
													'TITLE',
													'SLIDE_IMAGE',
												],
											},
											parentObjectId: {
												type: 'string',
												description:
													"The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.",
											},
										},
										required: [],
									},
									shapeType: {
										type: 'string',
										description: 'The type of the shape.',
										default: '',
										enum: [
											'',
											'TYPE_UNSPECIFIED',
											'TEXT_BOX',
											'RECTANGLE',
											'ROUND_RECTANGLE',
											'ELLIPSE',
											'ARC',
											'BENT_ARROW',
											'BENT_UP_ARROW',
											'BEVEL',
											'BLOCK_ARC',
											'BRACE_PAIR',
											'BRACKET_PAIR',
											'CAN',
											'CHEVRON',
											'CHORD',
											'CLOUD',
											'CORNER',
											'CUBE',
											'CURVED_DOWN_ARROW',
											'CURVED_LEFT_ARROW',
											'CURVED_RIGHT_ARROW',
											'CURVED_UP_ARROW',
											'DECAGON',
											'DIAGONAL_STRIPE',
											'DIAMOND',
											'DODECAGON',
											'DONUT',
											'DOUBLE_WAVE',
											'DOWN_ARROW',
											'DOWN_ARROW_CALLOUT',
											'FOLDED_CORNER',
											'FRAME',
											'HALF_FRAME',
											'HEART',
											'HEPTAGON',
											'HEXAGON',
											'HOME_PLATE',
											'HORIZONTAL_SCROLL',
											'IRREGULAR_SEAL_1',
											'IRREGULAR_SEAL_2',
											'LEFT_ARROW',
											'LEFT_ARROW_CALLOUT',
											'LEFT_BRACE',
											'LEFT_BRACKET',
											'LEFT_RIGHT_ARROW',
											'LEFT_RIGHT_ARROW_CALLOUT',
											'LEFT_RIGHT_UP_ARROW',
											'LEFT_UP_ARROW',
											'LIGHTNING_BOLT',
											'MATH_DIVIDE',
											'MATH_EQUAL',
											'MATH_MINUS',
											'MATH_MULTIPLY',
											'MATH_NOT_EQUAL',
											'MATH_PLUS',
											'MOON',
											'NO_SMOKING',
											'NOTCHED_RIGHT_ARROW',
											'OCTAGON',
											'PARALLELOGRAM',
											'PENTAGON',
											'PIE',
											'PLAQUE',
											'PLUS',
											'QUAD_ARROW',
											'QUAD_ARROW_CALLOUT',
											'RIBBON',
											'RIBBON_2',
											'RIGHT_ARROW',
											'RIGHT_ARROW_CALLOUT',
											'RIGHT_BRACE',
											'RIGHT_BRACKET',
											'ROUND_1_RECTANGLE',
											'ROUND_2_DIAGONAL_RECTANGLE',
											'ROUND_2_SAME_RECTANGLE',
											'RIGHT_TRIANGLE',
											'SMILEY_FACE',
											'SNIP_1_RECTANGLE',
											'SNIP_2_DIAGONAL_RECTANGLE',
											'SNIP_2_SAME_RECTANGLE',
											'SNIP_ROUND_RECTANGLE',
											'STAR_10',
											'STAR_12',
											'STAR_16',
											'STAR_24',
											'STAR_32',
											'STAR_4',
											'STAR_5',
											'STAR_6',
											'STAR_7',
											'STAR_8',
											'STRIPED_RIGHT_ARROW',
											'SUN',
											'TRAPEZOID',
											'TRIANGLE',
											'UP_ARROW',
											'UP_ARROW_CALLOUT',
											'UP_DOWN_ARROW',
											'UTURN_ARROW',
											'VERTICAL_SCROLL',
											'WAVE',
											'WEDGE_ELLIPSE_CALLOUT',
											'WEDGE_RECTANGLE_CALLOUT',
											'WEDGE_ROUND_RECTANGLE_CALLOUT',
											'FLOW_CHART_ALTERNATE_PROCESS',
											'FLOW_CHART_COLLATE',
											'FLOW_CHART_CONNECTOR',
											'FLOW_CHART_DECISION',
											'FLOW_CHART_DELAY',
											'FLOW_CHART_DISPLAY',
											'FLOW_CHART_DOCUMENT',
											'FLOW_CHART_EXTRACT',
											'FLOW_CHART_INPUT_OUTPUT',
											'FLOW_CHART_INTERNAL_STORAGE',
											'FLOW_CHART_MAGNETIC_DISK',
											'FLOW_CHART_MAGNETIC_DRUM',
											'FLOW_CHART_MAGNETIC_TAPE',
											'FLOW_CHART_MANUAL_INPUT',
											'FLOW_CHART_MANUAL_OPERATION',
											'FLOW_CHART_MERGE',
											'FLOW_CHART_MULTIDOCUMENT',
											'FLOW_CHART_OFFLINE_STORAGE',
											'FLOW_CHART_OFFPAGE_CONNECTOR',
											'FLOW_CHART_ONLINE_STORAGE',
											'FLOW_CHART_OR',
											'FLOW_CHART_PREDEFINED_PROCESS',
											'FLOW_CHART_PREPARATION',
											'FLOW_CHART_PROCESS',
											'FLOW_CHART_PUNCHED_CARD',
											'FLOW_CHART_PUNCHED_TAPE',
											'FLOW_CHART_SORT',
											'FLOW_CHART_SUMMING_JUNCTION',
											'FLOW_CHART_TERMINATOR',
											'ARROW_EAST',
											'ARROW_NORTH_EAST',
											'ARROW_NORTH',
											'SPEECH',
											'STARBURST',
											'TEARDROP',
											'ELLIPSE_RIBBON',
											'ELLIPSE_RIBBON_2',
											'CLOUD_CALLOUT',
											'CUSTOM',
										],
									},
									shapeProperties: {
										type: 'object',
										description: 'The properties of the shape.',
										properties: {
											link: {
												type: 'object',
												description:
													'The hyperlink destination of the shape. If unset, there is no link. Links are not inherited from parent placeholders.',
												properties: {
													slideIndex: {
														type: 'number',
														description:
															'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
													},
													url: {
														type: 'string',
														description:
															'If set, indicates this is a link to the external web page at this URL.',
													},
													pageObjectId: {
														type: 'string',
														description:
															'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
													},
													relativeLink: {
														type: 'string',
														description:
															'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
														default: '',
														enum: [
															'',
															'RELATIVE_SLIDE_LINK_UNSPECIFIED',
															'NEXT_SLIDE',
															'PREVIOUS_SLIDE',
															'FIRST_SLIDE',
															'LAST_SLIDE',
														],
													},
												},
												required: [],
											},
											autofit: {
												type: 'object',
												description:
													'The autofit properties of the shape. This property is only set for shapes that allow text.',
												properties: {
													fontScale: {
														type: 'number',
														description:
															"The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that's rendered in the editor. This property is read-only.",
													},
													autofitType: {
														type: 'string',
														description:
															'The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case, the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values.',
														default: '',
														enum: [
															'',
															'AUTOFIT_TYPE_UNSPECIFIED',
															'NONE',
															'TEXT_AUTOFIT',
															'SHAPE_AUTOFIT',
														],
													},
													lineSpacingReduction: {
														type: 'number',
														description:
															"The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that's rendered in the editor. This property is read-only.",
													},
												},
												required: [],
											},
											shadow: {
												type: 'object',
												description:
													'The shadow properties of the shape. If unset, the shadow is inherited from a parent placeholder if it exists. If the shape has no parent, then the default shadow matches the defaults for new shapes created in the Slides editor. This property is read-only.',
												properties: {
													alpha: {
														type: 'number',
														description:
															"The alpha of the shadow's color, from 0.0 to 1.0.",
													},
													transform: {
														type: 'object',
														description:
															'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
														properties: {
															scaleX: {
																type: 'number',
																description:
																	'The X coordinate scaling element.',
															},
															shearX: {
																type: 'number',
																description:
																	'The X coordinate shearing element.',
															},
															translateX: {
																type: 'number',
																description:
																	'The X coordinate translation element.',
															},
															scaleY: {
																type: 'number',
																description:
																	'The Y coordinate scaling element.',
															},
															translateY: {
																type: 'number',
																description:
																	'The Y coordinate translation element.',
															},
															shearY: {
																type: 'number',
																description:
																	'The Y coordinate shearing element.',
															},
															unit: {
																type: 'string',
																description:
																	'The units for translate elements.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
														},
														required: [],
													},
													alignment: {
														type: 'string',
														description:
															'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
														default: '',
														enum: [
															'',
															'RECTANGLE_POSITION_UNSPECIFIED',
															'TOP_LEFT',
															'TOP_CENTER',
															'TOP_RIGHT',
															'LEFT_CENTER',
															'CENTER',
															'RIGHT_CENTER',
															'BOTTOM_LEFT',
															'BOTTOM_CENTER',
															'BOTTOM_RIGHT',
														],
													},
													type: {
														type: 'string',
														description:
															'The type of the shadow. This property is read-only.',
														default: '',
														enum: [
															'',
															'SHADOW_TYPE_UNSPECIFIED',
															'OUTER',
														],
													},
													rotateWithShape: {
														type: 'boolean',
														description:
															'Whether the shadow should rotate with the shape. This property is read-only.',
													},
													propertyState: {
														type: 'string',
														description:
															'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
														default: '',
														enum: [
															'',
															'RENDERED',
															'NOT_RENDERED',
															'INHERIT',
														],
													},
													color: {
														type: 'object',
														description: 'The shadow color value.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'THEME_COLOR_TYPE_UNSPECIFIED',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
													blurRadius: {
														type: 'object',
														description:
															'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The units for magnitude.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
															magnitude: {
																type: 'number',
																description: 'The magnitude.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											outline: {
												type: 'object',
												description:
													'The outline of the shape. If unset, the outline is inherited from a parent placeholder if it exists. If the shape has no parent, then the default outline depends on the shape type, matching the defaults for new shapes created in the Slides editor.',
												properties: {
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the outline.',
														default: '',
														enum: [
															'',
															'DASH_STYLE_UNSPECIFIED',
															'SOLID',
															'DOT',
															'DASH',
															'DASH_DOT',
															'LONG_DASH',
															'LONG_DASH_DOT',
														],
													},
													outlineFill: {
														type: 'object',
														description: 'The fill of the outline.',
														properties: {
															solidFill: {
																type: 'object',
																description: 'Solid color fill.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value of the solid fill.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'An opaque RGB color.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'The red component of the color, from 0.0 to 1.0.',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'The blue component of the color, from 0.0 to 1.0.',
																					},
																					green: {
																						type: 'number',
																						description:
																							'The green component of the color, from 0.0 to 1.0.',
																					},
																				},
																				required: [],
																			},
																			themeColor: {
																				type: 'string',
																				description:
																					'An opaque theme color.',
																				default: '',
																				enum: [
																					'',
																					'THEME_COLOR_TYPE_UNSPECIFIED',
																					'DARK1',
																					'LIGHT1',
																					'DARK2',
																					'LIGHT2',
																					'ACCENT1',
																					'ACCENT2',
																					'ACCENT3',
																					'ACCENT4',
																					'ACCENT5',
																					'ACCENT6',
																					'HYPERLINK',
																					'FOLLOWED_HYPERLINK',
																					'TEXT1',
																					'BACKGROUND1',
																					'TEXT2',
																					'BACKGROUND2',
																				],
																			},
																		},
																		required: [],
																	},
																	alpha: {
																		type: 'number',
																		description:
																			'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													weight: {
														type: 'object',
														description:
															'The thickness of the outline.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The units for magnitude.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
															magnitude: {
																type: 'number',
																description: 'The magnitude.',
															},
														},
														required: [],
													},
													propertyState: {
														type: 'string',
														description:
															'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
														default: '',
														enum: [
															'',
															'RENDERED',
															'NOT_RENDERED',
															'INHERIT',
														],
													},
												},
												required: [],
											},
											shapeBackgroundFill: {
												type: 'object',
												description:
													'The background fill of the shape. If unset, the background fill is inherited from a parent placeholder if it exists. If the shape has no parent, then the default background fill depends on the shape type, matching the defaults for new shapes created in the Slides editor.',
												properties: {
													propertyState: {
														type: 'string',
														description:
															'The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
														default: '',
														enum: [
															'',
															'RENDERED',
															'NOT_RENDERED',
															'INHERIT',
														],
													},
													solidFill: {
														type: 'object',
														description: 'Solid color fill.',
														properties: {
															color: {
																type: 'object',
																description:
																	'The color value of the solid fill.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'An opaque RGB color.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'The red component of the color, from 0.0 to 1.0.',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'The blue component of the color, from 0.0 to 1.0.',
																			},
																			green: {
																				type: 'number',
																				description:
																					'The green component of the color, from 0.0 to 1.0.',
																			},
																		},
																		required: [],
																	},
																	themeColor: {
																		type: 'string',
																		description:
																			'An opaque theme color.',
																		default: '',
																		enum: [
																			'',
																			'THEME_COLOR_TYPE_UNSPECIFIED',
																			'DARK1',
																			'LIGHT1',
																			'DARK2',
																			'LIGHT2',
																			'ACCENT1',
																			'ACCENT2',
																			'ACCENT3',
																			'ACCENT4',
																			'ACCENT5',
																			'ACCENT6',
																			'HYPERLINK',
																			'FOLLOWED_HYPERLINK',
																			'TEXT1',
																			'BACKGROUND1',
																			'TEXT2',
																			'BACKGROUND2',
																		],
																	},
																},
																required: [],
															},
															alpha: {
																type: 'number',
																description:
																	'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											contentAlignment: {
												type: 'string',
												description:
													'The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor.',
												default: '',
												enum: [
													'',
													'CONTENT_ALIGNMENT_UNSPECIFIED',
													'CONTENT_ALIGNMENT_UNSUPPORTED',
													'TOP',
													'MIDDLE',
													'BOTTOM',
												],
											},
										},
										required: [],
									},
									text: {
										type: 'object',
										description: 'The text content of the shape.',
										properties: {
											lists: {
												type: 'object',
												description:
													'The bulleted lists contained in this text, keyed by list ID.',
												properties: {},
												required: [],
												additionalProperties: true,
											},
											textElements: {
												type: 'array',
												description:
													'The text contents broken down into its component parts, including styling information. This property is read-only.',
												items: {
													type: 'object',
													description:
														'A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.',
													properties: {
														endIndex: {
															type: 'number',
															description:
																'The zero-based end index of this text element, exclusive, in Unicode code units.',
														},
														paragraphMarker: {
															type: 'object',
															description:
																"A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.",
															properties: {
																style: {
																	type: 'object',
																	description:
																		"The paragraph's style",
																	properties: {
																		indentEnd: {
																			type: 'object',
																			description:
																				'The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																		spacingMode: {
																			type: 'string',
																			description:
																				'The spacing mode for the paragraph.',
																			default: '',
																			enum: [
																				'',
																				'SPACING_MODE_UNSPECIFIED',
																				'NEVER_COLLAPSE',
																				'COLLAPSE_LISTS',
																			],
																		},
																		indentStart: {
																			type: 'object',
																			description:
																				'The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																		alignment: {
																			type: 'string',
																			description:
																				'The text alignment for this paragraph.',
																			default: '',
																			enum: [
																				'',
																				'ALIGNMENT_UNSPECIFIED',
																				'START',
																				'CENTER',
																				'END',
																				'JUSTIFIED',
																			],
																		},
																		indentFirstLine: {
																			type: 'object',
																			description:
																				'The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																		lineSpacing: {
																			type: 'number',
																			description:
																				'The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.',
																		},
																		direction: {
																			type: 'string',
																			description:
																				'The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.',
																			default: '',
																			enum: [
																				'',
																				'TEXT_DIRECTION_UNSPECIFIED',
																				'LEFT_TO_RIGHT',
																				'RIGHT_TO_LEFT',
																			],
																		},
																		spaceAbove: {
																			type: 'object',
																			description:
																				'The amount of extra space above the paragraph. If unset, the value is inherited from the parent.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																		spaceBelow: {
																			type: 'object',
																			description:
																				'The amount of extra space below the paragraph. If unset, the value is inherited from the parent.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																bullet: {
																	type: 'object',
																	description:
																		'The bullet for this paragraph. If not present, the paragraph does not belong to a list.',
																	properties: {
																		glyph: {
																			type: 'string',
																			description:
																				'The rendered bullet glyph for this paragraph.',
																		},
																		bulletStyle: {
																			type: 'object',
																			description:
																				'The paragraph specific text style applied to this bullet.',
																			properties: {
																				bold: {
																					type: 'boolean',
																					description:
																						'Whether or not the text is rendered as bold.',
																				},
																				italic: {
																					type: 'boolean',
																					description:
																						'Whether or not the text is italicized.',
																				},
																				strikethrough: {
																					type: 'boolean',
																					description:
																						'Whether or not the text is struck through.',
																				},
																				foregroundColor: {
																					type: 'object',
																					description:
																						'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																					properties: {
																						opaqueColor:
																							{
																								type: 'object',
																								description:
																									'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																								properties:
																									{
																										rgbColor:
																											{
																												type: 'object',
																												description:
																													'An opaque RGB color.',
																												properties:
																													{
																														red: {
																															type: 'number',
																															description:
																																'The red component of the color, from 0.0 to 1.0.',
																														},
																														blue: {
																															type: 'number',
																															description:
																																'The blue component of the color, from 0.0 to 1.0.',
																														},
																														green: {
																															type: 'number',
																															description:
																																'The green component of the color, from 0.0 to 1.0.',
																														},
																													},
																												required:
																													[],
																											},
																										themeColor:
																											{
																												type: 'string',
																												description:
																													'An opaque theme color.',
																												default:
																													'',
																												enum: [
																													'',
																													'THEME_COLOR_TYPE_UNSPECIFIED',
																													'DARK1',
																													'LIGHT1',
																													'DARK2',
																													'LIGHT2',
																													'ACCENT1',
																													'ACCENT2',
																													'ACCENT3',
																													'ACCENT4',
																													'ACCENT5',
																													'ACCENT6',
																													'HYPERLINK',
																													'FOLLOWED_HYPERLINK',
																													'TEXT1',
																													'BACKGROUND1',
																													'TEXT2',
																													'BACKGROUND2',
																												],
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
																						"The size of the text's font. When read, the `font_size` will specified in points.",
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The units for magnitude.',
																							default:
																								'',
																							enum: [
																								'',
																								'UNIT_UNSPECIFIED',
																								'EMU',
																								'PT',
																							],
																						},
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude.',
																						},
																					},
																					required: [],
																				},
																				smallCaps: {
																					type: 'boolean',
																					description:
																						'Whether or not the text is in small capital letters.',
																				},
																				backgroundColor: {
																					type: 'object',
																					description:
																						'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																					properties: {
																						opaqueColor:
																							{
																								type: 'object',
																								description:
																									'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																								properties:
																									{
																										rgbColor:
																											{
																												type: 'object',
																												description:
																													'An opaque RGB color.',
																												properties:
																													{
																														red: {
																															type: 'number',
																															description:
																																'The red component of the color, from 0.0 to 1.0.',
																														},
																														blue: {
																															type: 'number',
																															description:
																																'The blue component of the color, from 0.0 to 1.0.',
																														},
																														green: {
																															type: 'number',
																															description:
																																'The green component of the color, from 0.0 to 1.0.',
																														},
																													},
																												required:
																													[],
																											},
																										themeColor:
																											{
																												type: 'string',
																												description:
																													'An opaque theme color.',
																												default:
																													'',
																												enum: [
																													'',
																													'THEME_COLOR_TYPE_UNSPECIFIED',
																													'DARK1',
																													'LIGHT1',
																													'DARK2',
																													'LIGHT2',
																													'ACCENT1',
																													'ACCENT2',
																													'ACCENT3',
																													'ACCENT4',
																													'ACCENT5',
																													'ACCENT6',
																													'HYPERLINK',
																													'FOLLOWED_HYPERLINK',
																													'TEXT1',
																													'BACKGROUND1',
																													'TEXT2',
																													'BACKGROUND2',
																												],
																											},
																									},
																								required:
																									[],
																							},
																					},
																					required: [],
																				},
																				link: {
																					type: 'object',
																					description:
																						'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																					properties: {
																						slideIndex:
																							{
																								type: 'number',
																								description:
																									'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																							},
																						url: {
																							type: 'string',
																							description:
																								'If set, indicates this is a link to the external web page at this URL.',
																						},
																						pageObjectId:
																							{
																								type: 'string',
																								description:
																									'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																							},
																						relativeLink:
																							{
																								type: 'string',
																								description:
																									'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																								default:
																									'',
																								enum: [
																									'',
																									'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																									'NEXT_SLIDE',
																									'PREVIOUS_SLIDE',
																									'FIRST_SLIDE',
																									'LAST_SLIDE',
																								],
																							},
																					},
																					required: [],
																				},
																				underline: {
																					type: 'boolean',
																					description:
																						'Whether or not the text is underlined.',
																				},
																				baselineOffset: {
																					type: 'string',
																					description:
																						"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																					default: '',
																					enum: [
																						'',
																						'BASELINE_OFFSET_UNSPECIFIED',
																						'NONE',
																						'SUPERSCRIPT',
																						'SUBSCRIPT',
																					],
																				},
																				weightedFontFamily:
																					{
																						type: 'object',
																						description:
																							'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																						properties:
																							{
																								weight: {
																									type: 'number',
																									description:
																										'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																								},
																								fontFamily:
																									{
																										type: 'string',
																										description:
																											'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																									},
																							},
																						required:
																							[],
																					},
																				fontFamily: {
																					type: 'string',
																					description:
																						'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																				},
																			},
																			required: [],
																		},
																		nestingLevel: {
																			type: 'number',
																			description:
																				'The nesting level of this paragraph in the list.',
																		},
																		listId: {
																			type: 'string',
																			description:
																				'The ID of the list this paragraph belongs to.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														autoText: {
															type: 'object',
															description:
																'A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.',
															properties: {
																style: {
																	type: 'object',
																	description:
																		'The styling applied to this auto text.',
																	properties: {
																		bold: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is rendered as bold.',
																		},
																		italic: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is italicized.',
																		},
																		strikethrough: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is struck through.',
																		},
																		foregroundColor: {
																			type: 'object',
																			description:
																				'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																			properties: {
																				opaqueColor: {
																					type: 'object',
																					description:
																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
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
																				"The size of the text's font. When read, the `font_size` will specified in points.",
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																		smallCaps: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is in small capital letters.',
																		},
																		backgroundColor: {
																			type: 'object',
																			description:
																				'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																			properties: {
																				opaqueColor: {
																					type: 'object',
																					description:
																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		link: {
																			type: 'object',
																			description:
																				'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																			properties: {
																				slideIndex: {
																					type: 'number',
																					description:
																						'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																				},
																				url: {
																					type: 'string',
																					description:
																						'If set, indicates this is a link to the external web page at this URL.',
																				},
																				pageObjectId: {
																					type: 'string',
																					description:
																						'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																				},
																				relativeLink: {
																					type: 'string',
																					description:
																						'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																					default: '',
																					enum: [
																						'',
																						'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																						'NEXT_SLIDE',
																						'PREVIOUS_SLIDE',
																						'FIRST_SLIDE',
																						'LAST_SLIDE',
																					],
																				},
																			},
																			required: [],
																		},
																		underline: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is underlined.',
																		},
																		baselineOffset: {
																			type: 'string',
																			description:
																				"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																			default: '',
																			enum: [
																				'',
																				'BASELINE_OFFSET_UNSPECIFIED',
																				'NONE',
																				'SUPERSCRIPT',
																				'SUBSCRIPT',
																			],
																		},
																		weightedFontFamily: {
																			type: 'object',
																			description:
																				'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																			properties: {
																				weight: {
																					type: 'number',
																					description:
																						'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																				},
																				fontFamily: {
																					type: 'string',
																					description:
																						'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																				},
																			},
																			required: [],
																		},
																		fontFamily: {
																			type: 'string',
																			description:
																				'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																		},
																	},
																	required: [],
																},
																content: {
																	type: 'string',
																	description:
																		'The rendered content of this auto text, if available.',
																},
																type: {
																	type: 'string',
																	description:
																		'The type of this auto text.',
																	default: '',
																	enum: [
																		'',
																		'TYPE_UNSPECIFIED',
																		'SLIDE_NUMBER',
																	],
																},
															},
															required: [],
														},
														textRun: {
															type: 'object',
															description:
																'A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.',
															properties: {
																content: {
																	type: 'string',
																	description:
																		'The text of this run.',
																},
																style: {
																	type: 'object',
																	description:
																		'The styling applied to this run.',
																	properties: {
																		bold: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is rendered as bold.',
																		},
																		italic: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is italicized.',
																		},
																		strikethrough: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is struck through.',
																		},
																		foregroundColor: {
																			type: 'object',
																			description:
																				'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																			properties: {
																				opaqueColor: {
																					type: 'object',
																					description:
																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
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
																				"The size of the text's font. When read, the `font_size` will specified in points.",
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																		smallCaps: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is in small capital letters.',
																		},
																		backgroundColor: {
																			type: 'object',
																			description:
																				'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																			properties: {
																				opaqueColor: {
																					type: 'object',
																					description:
																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		link: {
																			type: 'object',
																			description:
																				'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																			properties: {
																				slideIndex: {
																					type: 'number',
																					description:
																						'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																				},
																				url: {
																					type: 'string',
																					description:
																						'If set, indicates this is a link to the external web page at this URL.',
																				},
																				pageObjectId: {
																					type: 'string',
																					description:
																						'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																				},
																				relativeLink: {
																					type: 'string',
																					description:
																						'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																					default: '',
																					enum: [
																						'',
																						'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																						'NEXT_SLIDE',
																						'PREVIOUS_SLIDE',
																						'FIRST_SLIDE',
																						'LAST_SLIDE',
																					],
																				},
																			},
																			required: [],
																		},
																		underline: {
																			type: 'boolean',
																			description:
																				'Whether or not the text is underlined.',
																		},
																		baselineOffset: {
																			type: 'string',
																			description:
																				"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																			default: '',
																			enum: [
																				'',
																				'BASELINE_OFFSET_UNSPECIFIED',
																				'NONE',
																				'SUPERSCRIPT',
																				'SUBSCRIPT',
																			],
																		},
																		weightedFontFamily: {
																			type: 'object',
																			description:
																				'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																			properties: {
																				weight: {
																					type: 'number',
																					description:
																						'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																				},
																				fontFamily: {
																					type: 'string',
																					description:
																						'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																				},
																			},
																			required: [],
																		},
																		fontFamily: {
																			type: 'string',
																			description:
																				'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														startIndex: {
															type: 'number',
															description:
																'The zero-based start index of this text element, in Unicode code units.',
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
							size: {
								type: 'object',
								description: 'The size of the page element.',
								properties: {
									width: {
										type: 'object',
										description: 'The width of the object.',
										properties: {
											unit: {
												type: 'string',
												description: 'The units for magnitude.',
												default: '',
												enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
											},
											magnitude: {
												type: 'number',
												description: 'The magnitude.',
											},
										},
										required: [],
									},
									height: {
										type: 'object',
										description: 'The height of the object.',
										properties: {
											unit: {
												type: 'string',
												description: 'The units for magnitude.',
												default: '',
												enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
											},
											magnitude: {
												type: 'number',
												description: 'The magnitude.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							description: {
								type: 'string',
								description:
									'The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.',
							},
							video: {
								type: 'object',
								description: 'A video page element.',
								properties: {
									id: {
										type: 'string',
										description:
											"The video source's unique identifier for this video.",
									},
									url: {
										type: 'string',
										description:
											'An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.',
									},
									videoProperties: {
										type: 'object',
										description: 'The properties of the video.',
										properties: {
											end: {
												type: 'number',
												description:
													"The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.",
											},
											autoPlay: {
												type: 'boolean',
												description:
													'Whether to enable video autoplay when the page is displayed in present mode. Defaults to false.',
											},
											outline: {
												type: 'object',
												description:
													'The outline of the video. The default outline matches the defaults for new videos created in the Slides editor.',
												properties: {
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the outline.',
														default: '',
														enum: [
															'',
															'DASH_STYLE_UNSPECIFIED',
															'SOLID',
															'DOT',
															'DASH',
															'DASH_DOT',
															'LONG_DASH',
															'LONG_DASH_DOT',
														],
													},
													outlineFill: {
														type: 'object',
														description: 'The fill of the outline.',
														properties: {
															solidFill: {
																type: 'object',
																description: 'Solid color fill.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value of the solid fill.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'An opaque RGB color.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'The red component of the color, from 0.0 to 1.0.',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'The blue component of the color, from 0.0 to 1.0.',
																					},
																					green: {
																						type: 'number',
																						description:
																							'The green component of the color, from 0.0 to 1.0.',
																					},
																				},
																				required: [],
																			},
																			themeColor: {
																				type: 'string',
																				description:
																					'An opaque theme color.',
																				default: '',
																				enum: [
																					'',
																					'THEME_COLOR_TYPE_UNSPECIFIED',
																					'DARK1',
																					'LIGHT1',
																					'DARK2',
																					'LIGHT2',
																					'ACCENT1',
																					'ACCENT2',
																					'ACCENT3',
																					'ACCENT4',
																					'ACCENT5',
																					'ACCENT6',
																					'HYPERLINK',
																					'FOLLOWED_HYPERLINK',
																					'TEXT1',
																					'BACKGROUND1',
																					'TEXT2',
																					'BACKGROUND2',
																				],
																			},
																		},
																		required: [],
																	},
																	alpha: {
																		type: 'number',
																		description:
																			'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													weight: {
														type: 'object',
														description:
															'The thickness of the outline.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The units for magnitude.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
															magnitude: {
																type: 'number',
																description: 'The magnitude.',
															},
														},
														required: [],
													},
													propertyState: {
														type: 'string',
														description:
															'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
														default: '',
														enum: [
															'',
															'RENDERED',
															'NOT_RENDERED',
															'INHERIT',
														],
													},
												},
												required: [],
											},
											mute: {
												type: 'boolean',
												description:
													'Whether to mute the audio during video playback. Defaults to false.',
											},
											start: {
												type: 'number',
												description:
													"The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.",
											},
										},
										required: [],
									},
									source: {
										type: 'string',
										description: 'The video source.',
										default: '',
										enum: ['', 'SOURCE_UNSPECIFIED', 'YOUTUBE', 'DRIVE'],
									},
								},
								required: [],
							},
							table: {
								type: 'object',
								description: 'A table page element.',
								properties: {
									tableColumns: {
										type: 'array',
										description: 'Properties of each column.',
										items: {
											type: 'object',
											description: 'Properties of each column in a table.',
											properties: {
												columnWidth: {
													type: 'object',
													description: 'Width of a column.',
													properties: {
														unit: {
															type: 'string',
															description: 'The units for magnitude.',
															default: '',
															enum: [
																'',
																'UNIT_UNSPECIFIED',
																'EMU',
																'PT',
															],
														},
														magnitude: {
															type: 'number',
															description: 'The magnitude.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									verticalBorderRows: {
										type: 'array',
										description:
											"Properties of vertical cell borders. A table's vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns.",
										items: {
											type: 'object',
											description: 'Contents of each border row in a table.',
											properties: {
												tableBorderCells: {
													type: 'array',
													description:
														"Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.",
													items: {
														type: 'object',
														description:
															'The properties of each border cell.',
														properties: {
															tableBorderProperties: {
																type: 'object',
																description:
																	'The border properties.',
																properties: {
																	dashStyle: {
																		type: 'string',
																		description:
																			'The dash style of the border.',
																		default: '',
																		enum: [
																			'',
																			'DASH_STYLE_UNSPECIFIED',
																			'SOLID',
																			'DOT',
																			'DASH',
																			'DASH_DOT',
																			'LONG_DASH',
																			'LONG_DASH_DOT',
																		],
																	},
																	tableBorderFill: {
																		type: 'object',
																		description:
																			'The fill of the table border.',
																		properties: {
																			solidFill: {
																				type: 'object',
																				description:
																					'Solid fill.',
																				properties: {
																					color: {
																						type: 'object',
																						description:
																							'The color value of the solid fill.',
																						properties:
																							{
																								rgbColor:
																									{
																										type: 'object',
																										description:
																											'An opaque RGB color.',
																										properties:
																											{
																												red: {
																													type: 'number',
																													description:
																														'The red component of the color, from 0.0 to 1.0.',
																												},
																												blue: {
																													type: 'number',
																													description:
																														'The blue component of the color, from 0.0 to 1.0.',
																												},
																												green: {
																													type: 'number',
																													description:
																														'The green component of the color, from 0.0 to 1.0.',
																												},
																											},
																										required:
																											[],
																									},
																								themeColor:
																									{
																										type: 'string',
																										description:
																											'An opaque theme color.',
																										default:
																											'',
																										enum: [
																											'',
																											'THEME_COLOR_TYPE_UNSPECIFIED',
																											'DARK1',
																											'LIGHT1',
																											'DARK2',
																											'LIGHT2',
																											'ACCENT1',
																											'ACCENT2',
																											'ACCENT3',
																											'ACCENT4',
																											'ACCENT5',
																											'ACCENT6',
																											'HYPERLINK',
																											'FOLLOWED_HYPERLINK',
																											'TEXT1',
																											'BACKGROUND1',
																											'TEXT2',
																											'BACKGROUND2',
																										],
																									},
																							},
																						required:
																							[],
																					},
																					alpha: {
																						type: 'number',
																						description:
																							'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																	weight: {
																		type: 'object',
																		description:
																			'The thickness of the border.',
																		properties: {
																			unit: {
																				type: 'string',
																				description:
																					'The units for magnitude.',
																				default: '',
																				enum: [
																					'',
																					'UNIT_UNSPECIFIED',
																					'EMU',
																					'PT',
																				],
																			},
																			magnitude: {
																				type: 'number',
																				description:
																					'The magnitude.',
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
																	'The location of the border within the border table.',
																properties: {
																	rowIndex: {
																		type: 'number',
																		description:
																			'The 0-based row index.',
																	},
																	columnIndex: {
																		type: 'number',
																		description:
																			'The 0-based column index.',
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
									rows: {
										type: 'number',
										description: 'Number of rows in the table.',
									},
									columns: {
										type: 'number',
										description: 'Number of columns in the table.',
									},
									horizontalBorderRows: {
										type: 'array',
										description:
											"Properties of horizontal cell borders. A table's horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns.",
										items: {
											type: 'object',
											description: 'Contents of each border row in a table.',
											properties: {
												tableBorderCells: {
													type: 'array',
													description:
														"Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.",
													items: {
														type: 'object',
														description:
															'The properties of each border cell.',
														properties: {
															tableBorderProperties: {
																type: 'object',
																description:
																	'The border properties.',
																properties: {
																	dashStyle: {
																		type: 'string',
																		description:
																			'The dash style of the border.',
																		default: '',
																		enum: [
																			'',
																			'DASH_STYLE_UNSPECIFIED',
																			'SOLID',
																			'DOT',
																			'DASH',
																			'DASH_DOT',
																			'LONG_DASH',
																			'LONG_DASH_DOT',
																		],
																	},
																	tableBorderFill: {
																		type: 'object',
																		description:
																			'The fill of the table border.',
																		properties: {
																			solidFill: {
																				type: 'object',
																				description:
																					'Solid fill.',
																				properties: {
																					color: {
																						type: 'object',
																						description:
																							'The color value of the solid fill.',
																						properties:
																							{
																								rgbColor:
																									{
																										type: 'object',
																										description:
																											'An opaque RGB color.',
																										properties:
																											{
																												red: {
																													type: 'number',
																													description:
																														'The red component of the color, from 0.0 to 1.0.',
																												},
																												blue: {
																													type: 'number',
																													description:
																														'The blue component of the color, from 0.0 to 1.0.',
																												},
																												green: {
																													type: 'number',
																													description:
																														'The green component of the color, from 0.0 to 1.0.',
																												},
																											},
																										required:
																											[],
																									},
																								themeColor:
																									{
																										type: 'string',
																										description:
																											'An opaque theme color.',
																										default:
																											'',
																										enum: [
																											'',
																											'THEME_COLOR_TYPE_UNSPECIFIED',
																											'DARK1',
																											'LIGHT1',
																											'DARK2',
																											'LIGHT2',
																											'ACCENT1',
																											'ACCENT2',
																											'ACCENT3',
																											'ACCENT4',
																											'ACCENT5',
																											'ACCENT6',
																											'HYPERLINK',
																											'FOLLOWED_HYPERLINK',
																											'TEXT1',
																											'BACKGROUND1',
																											'TEXT2',
																											'BACKGROUND2',
																										],
																									},
																							},
																						required:
																							[],
																					},
																					alpha: {
																						type: 'number',
																						description:
																							'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																	weight: {
																		type: 'object',
																		description:
																			'The thickness of the border.',
																		properties: {
																			unit: {
																				type: 'string',
																				description:
																					'The units for magnitude.',
																				default: '',
																				enum: [
																					'',
																					'UNIT_UNSPECIFIED',
																					'EMU',
																					'PT',
																				],
																			},
																			magnitude: {
																				type: 'number',
																				description:
																					'The magnitude.',
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
																	'The location of the border within the border table.',
																properties: {
																	rowIndex: {
																		type: 'number',
																		description:
																			'The 0-based row index.',
																	},
																	columnIndex: {
																		type: 'number',
																		description:
																			'The 0-based column index.',
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
									tableRows: {
										type: 'array',
										description:
											'Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a row_span greater than 1.',
										items: {
											type: 'object',
											description:
												'Properties and contents of each row in a table.',
											properties: {
												tableRowProperties: {
													type: 'object',
													description: 'Properties of the row.',
													properties: {
														minRowHeight: {
															type: 'object',
															description:
																"Minimum height of the row. The row will be rendered in the Slides editor at a height equal to or greater than this value in order to show all the text in the row's cell(s).",
															properties: {
																unit: {
																	type: 'string',
																	description:
																		'The units for magnitude.',
																	default: '',
																	enum: [
																		'',
																		'UNIT_UNSPECIFIED',
																		'EMU',
																		'PT',
																	],
																},
																magnitude: {
																	type: 'number',
																	description: 'The magnitude.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												rowHeight: {
													type: 'object',
													description: 'Height of a row.',
													properties: {
														unit: {
															type: 'string',
															description: 'The units for magnitude.',
															default: '',
															enum: [
																'',
																'UNIT_UNSPECIFIED',
																'EMU',
																'PT',
															],
														},
														magnitude: {
															type: 'number',
															description: 'The magnitude.',
														},
													},
													required: [],
												},
												tableCells: {
													type: 'array',
													description:
														'Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table.',
													items: {
														type: 'object',
														description:
															'Properties and contents of each table cell.',
														properties: {
															columnSpan: {
																type: 'number',
																description:
																	'Column span of the cell.',
															},
															location: {
																type: 'object',
																description:
																	'The location of the cell within the table.',
																properties: {
																	rowIndex: {
																		type: 'number',
																		description:
																			'The 0-based row index.',
																	},
																	columnIndex: {
																		type: 'number',
																		description:
																			'The 0-based column index.',
																	},
																},
																required: [],
															},
															rowSpan: {
																type: 'number',
																description:
																	'Row span of the cell.',
															},
															text: {
																type: 'object',
																description:
																	'The text content of the cell.',
																properties: {
																	lists: {
																		type: 'object',
																		description:
																			'The bulleted lists contained in this text, keyed by list ID.',
																		properties: {},
																		required: [],
																		additionalProperties: true,
																	},
																	textElements: {
																		type: 'array',
																		description:
																			'The text contents broken down into its component parts, including styling information. This property is read-only.',
																		items: {
																			type: 'object',
																			description:
																				'A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.',
																			properties: {
																				endIndex: {
																					type: 'number',
																					description:
																						'The zero-based end index of this text element, exclusive, in Unicode code units.',
																				},
																				paragraphMarker: {
																					type: 'object',
																					description:
																						"A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.",
																					properties: {
																						style: {
																							type: 'object',
																							description:
																								"The paragraph's style",
																							properties:
																								{
																									indentEnd:
																										{
																											type: 'object',
																											description:
																												'The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																											properties:
																												{
																													unit: {
																														type: 'string',
																														description:
																															'The units for magnitude.',
																														default:
																															'',
																														enum: [
																															'',
																															'UNIT_UNSPECIFIED',
																															'EMU',
																															'PT',
																														],
																													},
																													magnitude:
																														{
																															type: 'number',
																															description:
																																'The magnitude.',
																														},
																												},
																											required:
																												[],
																										},
																									spacingMode:
																										{
																											type: 'string',
																											description:
																												'The spacing mode for the paragraph.',
																											default:
																												'',
																											enum: [
																												'',
																												'SPACING_MODE_UNSPECIFIED',
																												'NEVER_COLLAPSE',
																												'COLLAPSE_LISTS',
																											],
																										},
																									indentStart:
																										{
																											type: 'object',
																											description:
																												'The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																											properties:
																												{
																													unit: {
																														type: 'string',
																														description:
																															'The units for magnitude.',
																														default:
																															'',
																														enum: [
																															'',
																															'UNIT_UNSPECIFIED',
																															'EMU',
																															'PT',
																														],
																													},
																													magnitude:
																														{
																															type: 'number',
																															description:
																																'The magnitude.',
																														},
																												},
																											required:
																												[],
																										},
																									alignment:
																										{
																											type: 'string',
																											description:
																												'The text alignment for this paragraph.',
																											default:
																												'',
																											enum: [
																												'',
																												'ALIGNMENT_UNSPECIFIED',
																												'START',
																												'CENTER',
																												'END',
																												'JUSTIFIED',
																											],
																										},
																									indentFirstLine:
																										{
																											type: 'object',
																											description:
																												'The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.',
																											properties:
																												{
																													unit: {
																														type: 'string',
																														description:
																															'The units for magnitude.',
																														default:
																															'',
																														enum: [
																															'',
																															'UNIT_UNSPECIFIED',
																															'EMU',
																															'PT',
																														],
																													},
																													magnitude:
																														{
																															type: 'number',
																															description:
																																'The magnitude.',
																														},
																												},
																											required:
																												[],
																										},
																									lineSpacing:
																										{
																											type: 'number',
																											description:
																												'The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.',
																										},
																									direction:
																										{
																											type: 'string',
																											description:
																												'The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.',
																											default:
																												'',
																											enum: [
																												'',
																												'TEXT_DIRECTION_UNSPECIFIED',
																												'LEFT_TO_RIGHT',
																												'RIGHT_TO_LEFT',
																											],
																										},
																									spaceAbove:
																										{
																											type: 'object',
																											description:
																												'The amount of extra space above the paragraph. If unset, the value is inherited from the parent.',
																											properties:
																												{
																													unit: {
																														type: 'string',
																														description:
																															'The units for magnitude.',
																														default:
																															'',
																														enum: [
																															'',
																															'UNIT_UNSPECIFIED',
																															'EMU',
																															'PT',
																														],
																													},
																													magnitude:
																														{
																															type: 'number',
																															description:
																																'The magnitude.',
																														},
																												},
																											required:
																												[],
																										},
																									spaceBelow:
																										{
																											type: 'object',
																											description:
																												'The amount of extra space below the paragraph. If unset, the value is inherited from the parent.',
																											properties:
																												{
																													unit: {
																														type: 'string',
																														description:
																															'The units for magnitude.',
																														default:
																															'',
																														enum: [
																															'',
																															'UNIT_UNSPECIFIED',
																															'EMU',
																															'PT',
																														],
																													},
																													magnitude:
																														{
																															type: 'number',
																															description:
																																'The magnitude.',
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																						bullet: {
																							type: 'object',
																							description:
																								'The bullet for this paragraph. If not present, the paragraph does not belong to a list.',
																							properties:
																								{
																									glyph: {
																										type: 'string',
																										description:
																											'The rendered bullet glyph for this paragraph.',
																									},
																									bulletStyle:
																										{
																											type: 'object',
																											description:
																												'The paragraph specific text style applied to this bullet.',
																											properties:
																												{
																													bold: {
																														type: 'boolean',
																														description:
																															'Whether or not the text is rendered as bold.',
																													},
																													italic: {
																														type: 'boolean',
																														description:
																															'Whether or not the text is italicized.',
																													},
																													strikethrough:
																														{
																															type: 'boolean',
																															description:
																																'Whether or not the text is struck through.',
																														},
																													foregroundColor:
																														{
																															type: 'object',
																															description:
																																'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																															properties:
																																{
																																	opaqueColor:
																																		{
																																			type: 'object',
																																			description:
																																				'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																			properties:
																																				{
																																					rgbColor:
																																						{
																																							type: 'object',
																																							description:
																																								'An opaque RGB color.',
																																							properties:
																																								{
																																									red: {
																																										type: 'number',
																																										description:
																																											'The red component of the color, from 0.0 to 1.0.',
																																									},
																																									blue: {
																																										type: 'number',
																																										description:
																																											'The blue component of the color, from 0.0 to 1.0.',
																																									},
																																									green: {
																																										type: 'number',
																																										description:
																																											'The green component of the color, from 0.0 to 1.0.',
																																									},
																																								},
																																							required:
																																								[],
																																						},
																																					themeColor:
																																						{
																																							type: 'string',
																																							description:
																																								'An opaque theme color.',
																																							default:
																																								'',
																																							enum: [
																																								'',
																																								'THEME_COLOR_TYPE_UNSPECIFIED',
																																								'DARK1',
																																								'LIGHT1',
																																								'DARK2',
																																								'LIGHT2',
																																								'ACCENT1',
																																								'ACCENT2',
																																								'ACCENT3',
																																								'ACCENT4',
																																								'ACCENT5',
																																								'ACCENT6',
																																								'HYPERLINK',
																																								'FOLLOWED_HYPERLINK',
																																								'TEXT1',
																																								'BACKGROUND1',
																																								'TEXT2',
																																								'BACKGROUND2',
																																							],
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
																																"The size of the text's font. When read, the `font_size` will specified in points.",
																															properties:
																																{
																																	unit: {
																																		type: 'string',
																																		description:
																																			'The units for magnitude.',
																																		default:
																																			'',
																																		enum: [
																																			'',
																																			'UNIT_UNSPECIFIED',
																																			'EMU',
																																			'PT',
																																		],
																																	},
																																	magnitude:
																																		{
																																			type: 'number',
																																			description:
																																				'The magnitude.',
																																		},
																																},
																															required:
																																[],
																														},
																													smallCaps:
																														{
																															type: 'boolean',
																															description:
																																'Whether or not the text is in small capital letters.',
																														},
																													backgroundColor:
																														{
																															type: 'object',
																															description:
																																'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																															properties:
																																{
																																	opaqueColor:
																																		{
																																			type: 'object',
																																			description:
																																				'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																			properties:
																																				{
																																					rgbColor:
																																						{
																																							type: 'object',
																																							description:
																																								'An opaque RGB color.',
																																							properties:
																																								{
																																									red: {
																																										type: 'number',
																																										description:
																																											'The red component of the color, from 0.0 to 1.0.',
																																									},
																																									blue: {
																																										type: 'number',
																																										description:
																																											'The blue component of the color, from 0.0 to 1.0.',
																																									},
																																									green: {
																																										type: 'number',
																																										description:
																																											'The green component of the color, from 0.0 to 1.0.',
																																									},
																																								},
																																							required:
																																								[],
																																						},
																																					themeColor:
																																						{
																																							type: 'string',
																																							description:
																																								'An opaque theme color.',
																																							default:
																																								'',
																																							enum: [
																																								'',
																																								'THEME_COLOR_TYPE_UNSPECIFIED',
																																								'DARK1',
																																								'LIGHT1',
																																								'DARK2',
																																								'LIGHT2',
																																								'ACCENT1',
																																								'ACCENT2',
																																								'ACCENT3',
																																								'ACCENT4',
																																								'ACCENT5',
																																								'ACCENT6',
																																								'HYPERLINK',
																																								'FOLLOWED_HYPERLINK',
																																								'TEXT1',
																																								'BACKGROUND1',
																																								'TEXT2',
																																								'BACKGROUND2',
																																							],
																																						},
																																				},
																																			required:
																																				[],
																																		},
																																},
																															required:
																																[],
																														},
																													link: {
																														type: 'object',
																														description:
																															'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																														properties:
																															{
																																slideIndex:
																																	{
																																		type: 'number',
																																		description:
																																			'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																																	},
																																url: {
																																	type: 'string',
																																	description:
																																		'If set, indicates this is a link to the external web page at this URL.',
																																},
																																pageObjectId:
																																	{
																																		type: 'string',
																																		description:
																																			'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																																	},
																																relativeLink:
																																	{
																																		type: 'string',
																																		description:
																																			'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																																		default:
																																			'',
																																		enum: [
																																			'',
																																			'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																																			'NEXT_SLIDE',
																																			'PREVIOUS_SLIDE',
																																			'FIRST_SLIDE',
																																			'LAST_SLIDE',
																																		],
																																	},
																															},
																														required:
																															[],
																													},
																													underline:
																														{
																															type: 'boolean',
																															description:
																																'Whether or not the text is underlined.',
																														},
																													baselineOffset:
																														{
																															type: 'string',
																															description:
																																"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																															default:
																																'',
																															enum: [
																																'',
																																'BASELINE_OFFSET_UNSPECIFIED',
																																'NONE',
																																'SUPERSCRIPT',
																																'SUBSCRIPT',
																															],
																														},
																													weightedFontFamily:
																														{
																															type: 'object',
																															description:
																																'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																															properties:
																																{
																																	weight: {
																																		type: 'number',
																																		description:
																																			'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																																	},
																																	fontFamily:
																																		{
																																			type: 'string',
																																			description:
																																				'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																																		},
																																},
																															required:
																																[],
																														},
																													fontFamily:
																														{
																															type: 'string',
																															description:
																																'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																														},
																												},
																											required:
																												[],
																										},
																									nestingLevel:
																										{
																											type: 'number',
																											description:
																												'The nesting level of this paragraph in the list.',
																										},
																									listId: {
																										type: 'string',
																										description:
																											'The ID of the list this paragraph belongs to.',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				autoText: {
																					type: 'object',
																					description:
																						'A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.',
																					properties: {
																						style: {
																							type: 'object',
																							description:
																								'The styling applied to this auto text.',
																							properties:
																								{
																									bold: {
																										type: 'boolean',
																										description:
																											'Whether or not the text is rendered as bold.',
																									},
																									italic: {
																										type: 'boolean',
																										description:
																											'Whether or not the text is italicized.',
																									},
																									strikethrough:
																										{
																											type: 'boolean',
																											description:
																												'Whether or not the text is struck through.',
																										},
																									foregroundColor:
																										{
																											type: 'object',
																											description:
																												'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																											properties:
																												{
																													opaqueColor:
																														{
																															type: 'object',
																															description:
																																'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																															properties:
																																{
																																	rgbColor:
																																		{
																																			type: 'object',
																																			description:
																																				'An opaque RGB color.',
																																			properties:
																																				{
																																					red: {
																																						type: 'number',
																																						description:
																																							'The red component of the color, from 0.0 to 1.0.',
																																					},
																																					blue: {
																																						type: 'number',
																																						description:
																																							'The blue component of the color, from 0.0 to 1.0.',
																																					},
																																					green: {
																																						type: 'number',
																																						description:
																																							'The green component of the color, from 0.0 to 1.0.',
																																					},
																																				},
																																			required:
																																				[],
																																		},
																																	themeColor:
																																		{
																																			type: 'string',
																																			description:
																																				'An opaque theme color.',
																																			default:
																																				'',
																																			enum: [
																																				'',
																																				'THEME_COLOR_TYPE_UNSPECIFIED',
																																				'DARK1',
																																				'LIGHT1',
																																				'DARK2',
																																				'LIGHT2',
																																				'ACCENT1',
																																				'ACCENT2',
																																				'ACCENT3',
																																				'ACCENT4',
																																				'ACCENT5',
																																				'ACCENT6',
																																				'HYPERLINK',
																																				'FOLLOWED_HYPERLINK',
																																				'TEXT1',
																																				'BACKGROUND1',
																																				'TEXT2',
																																				'BACKGROUND2',
																																			],
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
																												"The size of the text's font. When read, the `font_size` will specified in points.",
																											properties:
																												{
																													unit: {
																														type: 'string',
																														description:
																															'The units for magnitude.',
																														default:
																															'',
																														enum: [
																															'',
																															'UNIT_UNSPECIFIED',
																															'EMU',
																															'PT',
																														],
																													},
																													magnitude:
																														{
																															type: 'number',
																															description:
																																'The magnitude.',
																														},
																												},
																											required:
																												[],
																										},
																									smallCaps:
																										{
																											type: 'boolean',
																											description:
																												'Whether or not the text is in small capital letters.',
																										},
																									backgroundColor:
																										{
																											type: 'object',
																											description:
																												'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																											properties:
																												{
																													opaqueColor:
																														{
																															type: 'object',
																															description:
																																'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																															properties:
																																{
																																	rgbColor:
																																		{
																																			type: 'object',
																																			description:
																																				'An opaque RGB color.',
																																			properties:
																																				{
																																					red: {
																																						type: 'number',
																																						description:
																																							'The red component of the color, from 0.0 to 1.0.',
																																					},
																																					blue: {
																																						type: 'number',
																																						description:
																																							'The blue component of the color, from 0.0 to 1.0.',
																																					},
																																					green: {
																																						type: 'number',
																																						description:
																																							'The green component of the color, from 0.0 to 1.0.',
																																					},
																																				},
																																			required:
																																				[],
																																		},
																																	themeColor:
																																		{
																																			type: 'string',
																																			description:
																																				'An opaque theme color.',
																																			default:
																																				'',
																																			enum: [
																																				'',
																																				'THEME_COLOR_TYPE_UNSPECIFIED',
																																				'DARK1',
																																				'LIGHT1',
																																				'DARK2',
																																				'LIGHT2',
																																				'ACCENT1',
																																				'ACCENT2',
																																				'ACCENT3',
																																				'ACCENT4',
																																				'ACCENT5',
																																				'ACCENT6',
																																				'HYPERLINK',
																																				'FOLLOWED_HYPERLINK',
																																				'TEXT1',
																																				'BACKGROUND1',
																																				'TEXT2',
																																				'BACKGROUND2',
																																			],
																																		},
																																},
																															required:
																																[],
																														},
																												},
																											required:
																												[],
																										},
																									link: {
																										type: 'object',
																										description:
																											'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																										properties:
																											{
																												slideIndex:
																													{
																														type: 'number',
																														description:
																															'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																													},
																												url: {
																													type: 'string',
																													description:
																														'If set, indicates this is a link to the external web page at this URL.',
																												},
																												pageObjectId:
																													{
																														type: 'string',
																														description:
																															'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																													},
																												relativeLink:
																													{
																														type: 'string',
																														description:
																															'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																														default:
																															'',
																														enum: [
																															'',
																															'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																															'NEXT_SLIDE',
																															'PREVIOUS_SLIDE',
																															'FIRST_SLIDE',
																															'LAST_SLIDE',
																														],
																													},
																											},
																										required:
																											[],
																									},
																									underline:
																										{
																											type: 'boolean',
																											description:
																												'Whether or not the text is underlined.',
																										},
																									baselineOffset:
																										{
																											type: 'string',
																											description:
																												"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																											default:
																												'',
																											enum: [
																												'',
																												'BASELINE_OFFSET_UNSPECIFIED',
																												'NONE',
																												'SUPERSCRIPT',
																												'SUBSCRIPT',
																											],
																										},
																									weightedFontFamily:
																										{
																											type: 'object',
																											description:
																												'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																											properties:
																												{
																													weight: {
																														type: 'number',
																														description:
																															'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																													},
																													fontFamily:
																														{
																															type: 'string',
																															description:
																																'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																														},
																												},
																											required:
																												[],
																										},
																									fontFamily:
																										{
																											type: 'string',
																											description:
																												'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																										},
																								},
																							required:
																								[],
																						},
																						content: {
																							type: 'string',
																							description:
																								'The rendered content of this auto text, if available.',
																						},
																						type: {
																							type: 'string',
																							description:
																								'The type of this auto text.',
																							default:
																								'',
																							enum: [
																								'',
																								'TYPE_UNSPECIFIED',
																								'SLIDE_NUMBER',
																							],
																						},
																					},
																					required: [],
																				},
																				textRun: {
																					type: 'object',
																					description:
																						'A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.',
																					properties: {
																						content: {
																							type: 'string',
																							description:
																								'The text of this run.',
																						},
																						style: {
																							type: 'object',
																							description:
																								'The styling applied to this run.',
																							properties:
																								{
																									bold: {
																										type: 'boolean',
																										description:
																											'Whether or not the text is rendered as bold.',
																									},
																									italic: {
																										type: 'boolean',
																										description:
																											'Whether or not the text is italicized.',
																									},
																									strikethrough:
																										{
																											type: 'boolean',
																											description:
																												'Whether or not the text is struck through.',
																										},
																									foregroundColor:
																										{
																											type: 'object',
																											description:
																												'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																											properties:
																												{
																													opaqueColor:
																														{
																															type: 'object',
																															description:
																																'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																															properties:
																																{
																																	rgbColor:
																																		{
																																			type: 'object',
																																			description:
																																				'An opaque RGB color.',
																																			properties:
																																				{
																																					red: {
																																						type: 'number',
																																						description:
																																							'The red component of the color, from 0.0 to 1.0.',
																																					},
																																					blue: {
																																						type: 'number',
																																						description:
																																							'The blue component of the color, from 0.0 to 1.0.',
																																					},
																																					green: {
																																						type: 'number',
																																						description:
																																							'The green component of the color, from 0.0 to 1.0.',
																																					},
																																				},
																																			required:
																																				[],
																																		},
																																	themeColor:
																																		{
																																			type: 'string',
																																			description:
																																				'An opaque theme color.',
																																			default:
																																				'',
																																			enum: [
																																				'',
																																				'THEME_COLOR_TYPE_UNSPECIFIED',
																																				'DARK1',
																																				'LIGHT1',
																																				'DARK2',
																																				'LIGHT2',
																																				'ACCENT1',
																																				'ACCENT2',
																																				'ACCENT3',
																																				'ACCENT4',
																																				'ACCENT5',
																																				'ACCENT6',
																																				'HYPERLINK',
																																				'FOLLOWED_HYPERLINK',
																																				'TEXT1',
																																				'BACKGROUND1',
																																				'TEXT2',
																																				'BACKGROUND2',
																																			],
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
																												"The size of the text's font. When read, the `font_size` will specified in points.",
																											properties:
																												{
																													unit: {
																														type: 'string',
																														description:
																															'The units for magnitude.',
																														default:
																															'',
																														enum: [
																															'',
																															'UNIT_UNSPECIFIED',
																															'EMU',
																															'PT',
																														],
																													},
																													magnitude:
																														{
																															type: 'number',
																															description:
																																'The magnitude.',
																														},
																												},
																											required:
																												[],
																										},
																									smallCaps:
																										{
																											type: 'boolean',
																											description:
																												'Whether or not the text is in small capital letters.',
																										},
																									backgroundColor:
																										{
																											type: 'object',
																											description:
																												'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																											properties:
																												{
																													opaqueColor:
																														{
																															type: 'object',
																															description:
																																'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																															properties:
																																{
																																	rgbColor:
																																		{
																																			type: 'object',
																																			description:
																																				'An opaque RGB color.',
																																			properties:
																																				{
																																					red: {
																																						type: 'number',
																																						description:
																																							'The red component of the color, from 0.0 to 1.0.',
																																					},
																																					blue: {
																																						type: 'number',
																																						description:
																																							'The blue component of the color, from 0.0 to 1.0.',
																																					},
																																					green: {
																																						type: 'number',
																																						description:
																																							'The green component of the color, from 0.0 to 1.0.',
																																					},
																																				},
																																			required:
																																				[],
																																		},
																																	themeColor:
																																		{
																																			type: 'string',
																																			description:
																																				'An opaque theme color.',
																																			default:
																																				'',
																																			enum: [
																																				'',
																																				'THEME_COLOR_TYPE_UNSPECIFIED',
																																				'DARK1',
																																				'LIGHT1',
																																				'DARK2',
																																				'LIGHT2',
																																				'ACCENT1',
																																				'ACCENT2',
																																				'ACCENT3',
																																				'ACCENT4',
																																				'ACCENT5',
																																				'ACCENT6',
																																				'HYPERLINK',
																																				'FOLLOWED_HYPERLINK',
																																				'TEXT1',
																																				'BACKGROUND1',
																																				'TEXT2',
																																				'BACKGROUND2',
																																			],
																																		},
																																},
																															required:
																																[],
																														},
																												},
																											required:
																												[],
																										},
																									link: {
																										type: 'object',
																										description:
																											'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																										properties:
																											{
																												slideIndex:
																													{
																														type: 'number',
																														description:
																															'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																													},
																												url: {
																													type: 'string',
																													description:
																														'If set, indicates this is a link to the external web page at this URL.',
																												},
																												pageObjectId:
																													{
																														type: 'string',
																														description:
																															'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																													},
																												relativeLink:
																													{
																														type: 'string',
																														description:
																															'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																														default:
																															'',
																														enum: [
																															'',
																															'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																															'NEXT_SLIDE',
																															'PREVIOUS_SLIDE',
																															'FIRST_SLIDE',
																															'LAST_SLIDE',
																														],
																													},
																											},
																										required:
																											[],
																									},
																									underline:
																										{
																											type: 'boolean',
																											description:
																												'Whether or not the text is underlined.',
																										},
																									baselineOffset:
																										{
																											type: 'string',
																											description:
																												"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																											default:
																												'',
																											enum: [
																												'',
																												'BASELINE_OFFSET_UNSPECIFIED',
																												'NONE',
																												'SUPERSCRIPT',
																												'SUBSCRIPT',
																											],
																										},
																									weightedFontFamily:
																										{
																											type: 'object',
																											description:
																												'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																											properties:
																												{
																													weight: {
																														type: 'number',
																														description:
																															'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																													},
																													fontFamily:
																														{
																															type: 'string',
																															description:
																																'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																														},
																												},
																											required:
																												[],
																										},
																									fontFamily:
																										{
																											type: 'string',
																											description:
																												'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																										},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				startIndex: {
																					type: 'number',
																					description:
																						'The zero-based start index of this text element, in Unicode code units.',
																				},
																			},
																			required: [],
																		},
																	},
																},
																required: [],
															},
															tableCellProperties: {
																type: 'object',
																description:
																	'The properties of the table cell.',
																properties: {
																	contentAlignment: {
																		type: 'string',
																		description:
																			'The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.',
																		default: '',
																		enum: [
																			'',
																			'CONTENT_ALIGNMENT_UNSPECIFIED',
																			'CONTENT_ALIGNMENT_UNSUPPORTED',
																			'TOP',
																			'MIDDLE',
																			'BOTTOM',
																		],
																	},
																	tableCellBackgroundFill: {
																		type: 'object',
																		description:
																			'The background fill of the table cell. The default fill matches the fill for newly created table cells in the Slides editor.',
																		properties: {
																			propertyState: {
																				type: 'string',
																				description:
																					'The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
																				default: '',
																				enum: [
																					'',
																					'RENDERED',
																					'NOT_RENDERED',
																					'INHERIT',
																				],
																			},
																			solidFill: {
																				type: 'object',
																				description:
																					'Solid color fill.',
																				properties: {
																					color: {
																						type: 'object',
																						description:
																							'The color value of the solid fill.',
																						properties:
																							{
																								rgbColor:
																									{
																										type: 'object',
																										description:
																											'An opaque RGB color.',
																										properties:
																											{
																												red: {
																													type: 'number',
																													description:
																														'The red component of the color, from 0.0 to 1.0.',
																												},
																												blue: {
																													type: 'number',
																													description:
																														'The blue component of the color, from 0.0 to 1.0.',
																												},
																												green: {
																													type: 'number',
																													description:
																														'The green component of the color, from 0.0 to 1.0.',
																												},
																											},
																										required:
																											[],
																									},
																								themeColor:
																									{
																										type: 'string',
																										description:
																											'An opaque theme color.',
																										default:
																											'',
																										enum: [
																											'',
																											'THEME_COLOR_TYPE_UNSPECIFIED',
																											'DARK1',
																											'LIGHT1',
																											'DARK2',
																											'LIGHT2',
																											'ACCENT1',
																											'ACCENT2',
																											'ACCENT3',
																											'ACCENT4',
																											'ACCENT5',
																											'ACCENT6',
																											'HYPERLINK',
																											'FOLLOWED_HYPERLINK',
																											'TEXT1',
																											'BACKGROUND1',
																											'TEXT2',
																											'BACKGROUND2',
																										],
																									},
																							},
																						required:
																							[],
																					},
																					alpha: {
																						type: 'number',
																						description:
																							'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
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
									},
								},
								required: [],
							},
							line: {
								type: 'object',
								description: 'A line page element.',
								properties: {
									lineCategory: {
										type: 'string',
										description:
											'The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest.',
										default: '',
										enum: [
											'',
											'LINE_CATEGORY_UNSPECIFIED',
											'STRAIGHT',
											'BENT',
											'CURVED',
										],
									},
									lineType: {
										type: 'string',
										description: 'The type of the line.',
										default: '',
										enum: [
											'',
											'TYPE_UNSPECIFIED',
											'STRAIGHT_CONNECTOR_1',
											'BENT_CONNECTOR_2',
											'BENT_CONNECTOR_3',
											'BENT_CONNECTOR_4',
											'BENT_CONNECTOR_5',
											'CURVED_CONNECTOR_2',
											'CURVED_CONNECTOR_3',
											'CURVED_CONNECTOR_4',
											'CURVED_CONNECTOR_5',
											'STRAIGHT_LINE',
										],
									},
									lineProperties: {
										type: 'object',
										description: 'The properties of the line.',
										properties: {
											startConnection: {
												type: 'object',
												description:
													'The connection at the beginning of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have a `start_connection`.',
												properties: {
													connectionSiteIndex: {
														type: 'number',
														description:
															'The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in both the description of the "cxn" attribute in section 20.1.9.9 and "Annex H. Example Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/). The position of each connection site can also be viewed from Slides editor.',
													},
													connectedObjectId: {
														type: 'string',
														description:
															'The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.',
													},
												},
												required: [],
											},
											link: {
												type: 'object',
												description:
													'The hyperlink destination of the line. If unset, there is no link.',
												properties: {
													slideIndex: {
														type: 'number',
														description:
															'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
													},
													url: {
														type: 'string',
														description:
															'If set, indicates this is a link to the external web page at this URL.',
													},
													pageObjectId: {
														type: 'string',
														description:
															'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
													},
													relativeLink: {
														type: 'string',
														description:
															'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
														default: '',
														enum: [
															'',
															'RELATIVE_SLIDE_LINK_UNSPECIFIED',
															'NEXT_SLIDE',
															'PREVIOUS_SLIDE',
															'FIRST_SLIDE',
															'LAST_SLIDE',
														],
													},
												},
												required: [],
											},
											endConnection: {
												type: 'object',
												description:
													'The connection at the end of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have an `end_connection`.',
												properties: {
													connectionSiteIndex: {
														type: 'number',
														description:
															'The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in both the description of the "cxn" attribute in section 20.1.9.9 and "Annex H. Example Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/). The position of each connection site can also be viewed from Slides editor.',
													},
													connectedObjectId: {
														type: 'string',
														description:
															'The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.',
													},
												},
												required: [],
											},
											endArrow: {
												type: 'string',
												description:
													'The style of the arrow at the end of the line.',
												default: '',
												enum: [
													'',
													'ARROW_STYLE_UNSPECIFIED',
													'NONE',
													'STEALTH_ARROW',
													'FILL_ARROW',
													'FILL_CIRCLE',
													'FILL_SQUARE',
													'FILL_DIAMOND',
													'OPEN_ARROW',
													'OPEN_CIRCLE',
													'OPEN_SQUARE',
													'OPEN_DIAMOND',
												],
											},
											dashStyle: {
												type: 'string',
												description: 'The dash style of the line.',
												default: '',
												enum: [
													'',
													'DASH_STYLE_UNSPECIFIED',
													'SOLID',
													'DOT',
													'DASH',
													'DASH_DOT',
													'LONG_DASH',
													'LONG_DASH_DOT',
												],
											},
											lineFill: {
												type: 'object',
												description:
													'The fill of the line. The default line fill matches the defaults for new lines created in the Slides editor.',
												properties: {
													solidFill: {
														type: 'object',
														description: 'Solid color fill.',
														properties: {
															color: {
																type: 'object',
																description:
																	'The color value of the solid fill.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'An opaque RGB color.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'The red component of the color, from 0.0 to 1.0.',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'The blue component of the color, from 0.0 to 1.0.',
																			},
																			green: {
																				type: 'number',
																				description:
																					'The green component of the color, from 0.0 to 1.0.',
																			},
																		},
																		required: [],
																	},
																	themeColor: {
																		type: 'string',
																		description:
																			'An opaque theme color.',
																		default: '',
																		enum: [
																			'',
																			'THEME_COLOR_TYPE_UNSPECIFIED',
																			'DARK1',
																			'LIGHT1',
																			'DARK2',
																			'LIGHT2',
																			'ACCENT1',
																			'ACCENT2',
																			'ACCENT3',
																			'ACCENT4',
																			'ACCENT5',
																			'ACCENT6',
																			'HYPERLINK',
																			'FOLLOWED_HYPERLINK',
																			'TEXT1',
																			'BACKGROUND1',
																			'TEXT2',
																			'BACKGROUND2',
																		],
																	},
																},
																required: [],
															},
															alpha: {
																type: 'number',
																description:
																	'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											weight: {
												type: 'object',
												description: 'The thickness of the line.',
												properties: {
													unit: {
														type: 'string',
														description: 'The units for magnitude.',
														default: '',
														enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
													},
													magnitude: {
														type: 'number',
														description: 'The magnitude.',
													},
												},
												required: [],
											},
											startArrow: {
												type: 'string',
												description:
													'The style of the arrow at the beginning of the line.',
												default: '',
												enum: [
													'',
													'ARROW_STYLE_UNSPECIFIED',
													'NONE',
													'STEALTH_ARROW',
													'FILL_ARROW',
													'FILL_CIRCLE',
													'FILL_SQUARE',
													'FILL_DIAMOND',
													'OPEN_ARROW',
													'OPEN_CIRCLE',
													'OPEN_SQUARE',
													'OPEN_DIAMOND',
												],
											},
										},
										required: [],
									},
								},
								required: [],
							},
							sheetsChart: {
								type: 'object',
								description:
									'A linked chart embedded from Google Sheets. Unlinked charts are represented as images.',
								properties: {
									contentUrl: {
										type: 'string',
										description:
											"The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.",
									},
									spreadsheetId: {
										type: 'string',
										description:
											'The ID of the Google Sheets spreadsheet that contains the source chart.',
									},
									chartId: {
										type: 'number',
										description:
											'The ID of the specific chart in the Google Sheets spreadsheet that is embedded.',
									},
									sheetsChartProperties: {
										type: 'object',
										description: 'The properties of the Sheets chart.',
										properties: {
											chartImageProperties: {
												type: 'object',
												description:
													'The properties of the embedded chart image.',
												properties: {
													shadow: {
														type: 'object',
														description:
															'The shadow of the image. If not set, the image has no shadow. This property is read-only.',
														properties: {
															alpha: {
																type: 'number',
																description:
																	"The alpha of the shadow's color, from 0.0 to 1.0.",
															},
															transform: {
																type: 'object',
																description:
																	'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
																properties: {
																	scaleX: {
																		type: 'number',
																		description:
																			'The X coordinate scaling element.',
																	},
																	shearX: {
																		type: 'number',
																		description:
																			'The X coordinate shearing element.',
																	},
																	translateX: {
																		type: 'number',
																		description:
																			'The X coordinate translation element.',
																	},
																	scaleY: {
																		type: 'number',
																		description:
																			'The Y coordinate scaling element.',
																	},
																	translateY: {
																		type: 'number',
																		description:
																			'The Y coordinate translation element.',
																	},
																	shearY: {
																		type: 'number',
																		description:
																			'The Y coordinate shearing element.',
																	},
																	unit: {
																		type: 'string',
																		description:
																			'The units for translate elements.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																},
																required: [],
															},
															alignment: {
																type: 'string',
																description:
																	'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
																default: '',
																enum: [
																	'',
																	'RECTANGLE_POSITION_UNSPECIFIED',
																	'TOP_LEFT',
																	'TOP_CENTER',
																	'TOP_RIGHT',
																	'LEFT_CENTER',
																	'CENTER',
																	'RIGHT_CENTER',
																	'BOTTOM_LEFT',
																	'BOTTOM_CENTER',
																	'BOTTOM_RIGHT',
																],
															},
															type: {
																type: 'string',
																description:
																	'The type of the shadow. This property is read-only.',
																default: '',
																enum: [
																	'',
																	'SHADOW_TYPE_UNSPECIFIED',
																	'OUTER',
																],
															},
															rotateWithShape: {
																type: 'boolean',
																description:
																	'Whether the shadow should rotate with the shape. This property is read-only.',
															},
															propertyState: {
																type: 'string',
																description:
																	'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
																default: '',
																enum: [
																	'',
																	'RENDERED',
																	'NOT_RENDERED',
																	'INHERIT',
																],
															},
															color: {
																type: 'object',
																description:
																	'The shadow color value.',
																properties: {
																	rgbColor: {
																		type: 'object',
																		description:
																			'An opaque RGB color.',
																		properties: {
																			red: {
																				type: 'number',
																				description:
																					'The red component of the color, from 0.0 to 1.0.',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'The blue component of the color, from 0.0 to 1.0.',
																			},
																			green: {
																				type: 'number',
																				description:
																					'The green component of the color, from 0.0 to 1.0.',
																			},
																		},
																		required: [],
																	},
																	themeColor: {
																		type: 'string',
																		description:
																			'An opaque theme color.',
																		default: '',
																		enum: [
																			'',
																			'THEME_COLOR_TYPE_UNSPECIFIED',
																			'DARK1',
																			'LIGHT1',
																			'DARK2',
																			'LIGHT2',
																			'ACCENT1',
																			'ACCENT2',
																			'ACCENT3',
																			'ACCENT4',
																			'ACCENT5',
																			'ACCENT6',
																			'HYPERLINK',
																			'FOLLOWED_HYPERLINK',
																			'TEXT1',
																			'BACKGROUND1',
																			'TEXT2',
																			'BACKGROUND2',
																		],
																	},
																},
																required: [],
															},
															blurRadius: {
																type: 'object',
																description:
																	'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													cropProperties: {
														type: 'object',
														description:
															'The crop properties of the image. If not set, the image is not cropped. This property is read-only.',
														properties: {
															rightOffset: {
																type: 'number',
																description:
																	"The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.",
															},
															bottomOffset: {
																type: 'number',
																description:
																	"The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.",
															},
															angle: {
																type: 'number',
																description:
																	'The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.',
															},
															leftOffset: {
																type: 'number',
																description:
																	"The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.",
															},
															topOffset: {
																type: 'number',
																description:
																	"The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.",
															},
														},
														required: [],
													},
													recolor: {
														type: 'object',
														description:
															'The recolor effect of the image. If not set, the image is not recolored. This property is read-only.',
														properties: {
															name: {
																type: 'string',
																description:
																	"The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.",
																default: '',
																enum: [
																	'',
																	'NONE',
																	'LIGHT1',
																	'LIGHT2',
																	'LIGHT3',
																	'LIGHT4',
																	'LIGHT5',
																	'LIGHT6',
																	'LIGHT7',
																	'LIGHT8',
																	'LIGHT9',
																	'LIGHT10',
																	'DARK1',
																	'DARK2',
																	'DARK3',
																	'DARK4',
																	'DARK5',
																	'DARK6',
																	'DARK7',
																	'DARK8',
																	'DARK9',
																	'DARK10',
																	'GRAYSCALE',
																	'NEGATIVE',
																	'SEPIA',
																	'CUSTOM',
																],
															},
															recolorStops: {
																type: 'array',
																description:
																	'The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.',
																items: {
																	type: 'object',
																	description:
																		'A color and position in a gradient band.',
																	properties: {
																		position: {
																			type: 'number',
																			description:
																				'The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].',
																		},
																		alpha: {
																			type: 'number',
																			description:
																				'The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.',
																		},
																		color: {
																			type: 'object',
																			description:
																				'The color of the gradient stop.',
																			properties: {
																				rgbColor: {
																					type: 'object',
																					description:
																						'An opaque RGB color.',
																					properties: {
																						red: {
																							type: 'number',
																							description:
																								'The red component of the color, from 0.0 to 1.0.',
																						},
																						blue: {
																							type: 'number',
																							description:
																								'The blue component of the color, from 0.0 to 1.0.',
																						},
																						green: {
																							type: 'number',
																							description:
																								'The green component of the color, from 0.0 to 1.0.',
																						},
																					},
																					required: [],
																				},
																				themeColor: {
																					type: 'string',
																					description:
																						'An opaque theme color.',
																					default: '',
																					enum: [
																						'',
																						'THEME_COLOR_TYPE_UNSPECIFIED',
																						'DARK1',
																						'LIGHT1',
																						'DARK2',
																						'LIGHT2',
																						'ACCENT1',
																						'ACCENT2',
																						'ACCENT3',
																						'ACCENT4',
																						'ACCENT5',
																						'ACCENT6',
																						'HYPERLINK',
																						'FOLLOWED_HYPERLINK',
																						'TEXT1',
																						'BACKGROUND1',
																						'TEXT2',
																						'BACKGROUND2',
																					],
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
													outline: {
														type: 'object',
														description:
															'The outline of the image. If not set, the image has no outline.',
														properties: {
															dashStyle: {
																type: 'string',
																description:
																	'The dash style of the outline.',
																default: '',
																enum: [
																	'',
																	'DASH_STYLE_UNSPECIFIED',
																	'SOLID',
																	'DOT',
																	'DASH',
																	'DASH_DOT',
																	'LONG_DASH',
																	'LONG_DASH_DOT',
																],
															},
															outlineFill: {
																type: 'object',
																description:
																	'The fill of the outline.',
																properties: {
																	solidFill: {
																		type: 'object',
																		description:
																			'Solid color fill.',
																		properties: {
																			color: {
																				type: 'object',
																				description:
																					'The color value of the solid fill.',
																				properties: {
																					rgbColor: {
																						type: 'object',
																						description:
																							'An opaque RGB color.',
																						properties:
																							{
																								red: {
																									type: 'number',
																									description:
																										'The red component of the color, from 0.0 to 1.0.',
																								},
																								blue: {
																									type: 'number',
																									description:
																										'The blue component of the color, from 0.0 to 1.0.',
																								},
																								green: {
																									type: 'number',
																									description:
																										'The green component of the color, from 0.0 to 1.0.',
																								},
																							},
																						required:
																							[],
																					},
																					themeColor: {
																						type: 'string',
																						description:
																							'An opaque theme color.',
																						default: '',
																						enum: [
																							'',
																							'THEME_COLOR_TYPE_UNSPECIFIED',
																							'DARK1',
																							'LIGHT1',
																							'DARK2',
																							'LIGHT2',
																							'ACCENT1',
																							'ACCENT2',
																							'ACCENT3',
																							'ACCENT4',
																							'ACCENT5',
																							'ACCENT6',
																							'HYPERLINK',
																							'FOLLOWED_HYPERLINK',
																							'TEXT1',
																							'BACKGROUND1',
																							'TEXT2',
																							'BACKGROUND2',
																						],
																					},
																				},
																				required: [],
																			},
																			alpha: {
																				type: 'number',
																				description:
																					'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																			},
																		},
																		required: [],
																	},
																},
																required: [],
															},
															weight: {
																type: 'object',
																description:
																	'The thickness of the outline.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
															propertyState: {
																type: 'string',
																description:
																	'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																default: '',
																enum: [
																	'',
																	'RENDERED',
																	'NOT_RENDERED',
																	'INHERIT',
																],
															},
														},
														required: [],
													},
													link: {
														type: 'object',
														description:
															'The hyperlink destination of the image. If unset, there is no link.',
														properties: {
															slideIndex: {
																type: 'number',
																description:
																	'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
															},
															url: {
																type: 'string',
																description:
																	'If set, indicates this is a link to the external web page at this URL.',
															},
															pageObjectId: {
																type: 'string',
																description:
																	'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
															},
															relativeLink: {
																type: 'string',
																description:
																	'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																default: '',
																enum: [
																	'',
																	'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																	'NEXT_SLIDE',
																	'PREVIOUS_SLIDE',
																	'FIRST_SLIDE',
																	'LAST_SLIDE',
																],
															},
														},
														required: [],
													},
													transparency: {
														type: 'number',
														description:
															'The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.',
													},
													brightness: {
														type: 'number',
														description:
															'The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
													},
													contrast: {
														type: 'number',
														description:
															'The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
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
							wordArt: {
								type: 'object',
								description: 'A word art page element.',
								properties: {
									renderedText: {
										type: 'string',
										description: 'The text rendered as word art.',
									},
								},
								required: [],
							},
							image: {
								type: 'object',
								description: 'An image page element.',
								properties: {
									placeholder: {
										type: 'object',
										description:
											'Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the image is a placeholder image and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.',
										properties: {
											index: {
												type: 'number',
												description:
													'The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.',
											},
											type: {
												type: 'string',
												description: 'The type of the placeholder.',
												default: '',
												enum: [
													'',
													'NONE',
													'BODY',
													'CHART',
													'CLIP_ART',
													'CENTERED_TITLE',
													'DIAGRAM',
													'DATE_AND_TIME',
													'FOOTER',
													'HEADER',
													'MEDIA',
													'OBJECT',
													'PICTURE',
													'SLIDE_NUMBER',
													'SUBTITLE',
													'TABLE',
													'TITLE',
													'SLIDE_IMAGE',
												],
											},
											parentObjectId: {
												type: 'string',
												description:
													"The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.",
											},
										},
										required: [],
									},
									imageProperties: {
										type: 'object',
										description: 'The properties of the image.',
										properties: {
											shadow: {
												type: 'object',
												description:
													'The shadow of the image. If not set, the image has no shadow. This property is read-only.',
												properties: {
													alpha: {
														type: 'number',
														description:
															"The alpha of the shadow's color, from 0.0 to 1.0.",
													},
													transform: {
														type: 'object',
														description:
															'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
														properties: {
															scaleX: {
																type: 'number',
																description:
																	'The X coordinate scaling element.',
															},
															shearX: {
																type: 'number',
																description:
																	'The X coordinate shearing element.',
															},
															translateX: {
																type: 'number',
																description:
																	'The X coordinate translation element.',
															},
															scaleY: {
																type: 'number',
																description:
																	'The Y coordinate scaling element.',
															},
															translateY: {
																type: 'number',
																description:
																	'The Y coordinate translation element.',
															},
															shearY: {
																type: 'number',
																description:
																	'The Y coordinate shearing element.',
															},
															unit: {
																type: 'string',
																description:
																	'The units for translate elements.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
														},
														required: [],
													},
													alignment: {
														type: 'string',
														description:
															'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
														default: '',
														enum: [
															'',
															'RECTANGLE_POSITION_UNSPECIFIED',
															'TOP_LEFT',
															'TOP_CENTER',
															'TOP_RIGHT',
															'LEFT_CENTER',
															'CENTER',
															'RIGHT_CENTER',
															'BOTTOM_LEFT',
															'BOTTOM_CENTER',
															'BOTTOM_RIGHT',
														],
													},
													type: {
														type: 'string',
														description:
															'The type of the shadow. This property is read-only.',
														default: '',
														enum: [
															'',
															'SHADOW_TYPE_UNSPECIFIED',
															'OUTER',
														],
													},
													rotateWithShape: {
														type: 'boolean',
														description:
															'Whether the shadow should rotate with the shape. This property is read-only.',
													},
													propertyState: {
														type: 'string',
														description:
															'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
														default: '',
														enum: [
															'',
															'RENDERED',
															'NOT_RENDERED',
															'INHERIT',
														],
													},
													color: {
														type: 'object',
														description: 'The shadow color value.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'THEME_COLOR_TYPE_UNSPECIFIED',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
													blurRadius: {
														type: 'object',
														description:
															'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The units for magnitude.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
															magnitude: {
																type: 'number',
																description: 'The magnitude.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											cropProperties: {
												type: 'object',
												description:
													'The crop properties of the image. If not set, the image is not cropped. This property is read-only.',
												properties: {
													rightOffset: {
														type: 'number',
														description:
															"The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.",
													},
													bottomOffset: {
														type: 'number',
														description:
															"The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.",
													},
													angle: {
														type: 'number',
														description:
															'The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.',
													},
													leftOffset: {
														type: 'number',
														description:
															"The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.",
													},
													topOffset: {
														type: 'number',
														description:
															"The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.",
													},
												},
												required: [],
											},
											recolor: {
												type: 'object',
												description:
													'The recolor effect of the image. If not set, the image is not recolored. This property is read-only.',
												properties: {
													name: {
														type: 'string',
														description:
															"The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.",
														default: '',
														enum: [
															'',
															'NONE',
															'LIGHT1',
															'LIGHT2',
															'LIGHT3',
															'LIGHT4',
															'LIGHT5',
															'LIGHT6',
															'LIGHT7',
															'LIGHT8',
															'LIGHT9',
															'LIGHT10',
															'DARK1',
															'DARK2',
															'DARK3',
															'DARK4',
															'DARK5',
															'DARK6',
															'DARK7',
															'DARK8',
															'DARK9',
															'DARK10',
															'GRAYSCALE',
															'NEGATIVE',
															'SEPIA',
															'CUSTOM',
														],
													},
													recolorStops: {
														type: 'array',
														description:
															'The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.',
														items: {
															type: 'object',
															description:
																'A color and position in a gradient band.',
															properties: {
																position: {
																	type: 'number',
																	description:
																		'The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].',
																},
																alpha: {
																	type: 'number',
																	description:
																		'The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.',
																},
																color: {
																	type: 'object',
																	description:
																		'The color of the gradient stop.',
																	properties: {
																		rgbColor: {
																			type: 'object',
																			description:
																				'An opaque RGB color.',
																			properties: {
																				red: {
																					type: 'number',
																					description:
																						'The red component of the color, from 0.0 to 1.0.',
																				},
																				blue: {
																					type: 'number',
																					description:
																						'The blue component of the color, from 0.0 to 1.0.',
																				},
																				green: {
																					type: 'number',
																					description:
																						'The green component of the color, from 0.0 to 1.0.',
																				},
																			},
																			required: [],
																		},
																		themeColor: {
																			type: 'string',
																			description:
																				'An opaque theme color.',
																			default: '',
																			enum: [
																				'',
																				'THEME_COLOR_TYPE_UNSPECIFIED',
																				'DARK1',
																				'LIGHT1',
																				'DARK2',
																				'LIGHT2',
																				'ACCENT1',
																				'ACCENT2',
																				'ACCENT3',
																				'ACCENT4',
																				'ACCENT5',
																				'ACCENT6',
																				'HYPERLINK',
																				'FOLLOWED_HYPERLINK',
																				'TEXT1',
																				'BACKGROUND1',
																				'TEXT2',
																				'BACKGROUND2',
																			],
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
											outline: {
												type: 'object',
												description:
													'The outline of the image. If not set, the image has no outline.',
												properties: {
													dashStyle: {
														type: 'string',
														description:
															'The dash style of the outline.',
														default: '',
														enum: [
															'',
															'DASH_STYLE_UNSPECIFIED',
															'SOLID',
															'DOT',
															'DASH',
															'DASH_DOT',
															'LONG_DASH',
															'LONG_DASH_DOT',
														],
													},
													outlineFill: {
														type: 'object',
														description: 'The fill of the outline.',
														properties: {
															solidFill: {
																type: 'object',
																description: 'Solid color fill.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'The color value of the solid fill.',
																		properties: {
																			rgbColor: {
																				type: 'object',
																				description:
																					'An opaque RGB color.',
																				properties: {
																					red: {
																						type: 'number',
																						description:
																							'The red component of the color, from 0.0 to 1.0.',
																					},
																					blue: {
																						type: 'number',
																						description:
																							'The blue component of the color, from 0.0 to 1.0.',
																					},
																					green: {
																						type: 'number',
																						description:
																							'The green component of the color, from 0.0 to 1.0.',
																					},
																				},
																				required: [],
																			},
																			themeColor: {
																				type: 'string',
																				description:
																					'An opaque theme color.',
																				default: '',
																				enum: [
																					'',
																					'THEME_COLOR_TYPE_UNSPECIFIED',
																					'DARK1',
																					'LIGHT1',
																					'DARK2',
																					'LIGHT2',
																					'ACCENT1',
																					'ACCENT2',
																					'ACCENT3',
																					'ACCENT4',
																					'ACCENT5',
																					'ACCENT6',
																					'HYPERLINK',
																					'FOLLOWED_HYPERLINK',
																					'TEXT1',
																					'BACKGROUND1',
																					'TEXT2',
																					'BACKGROUND2',
																				],
																			},
																		},
																		required: [],
																	},
																	alpha: {
																		type: 'number',
																		description:
																			'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
													weight: {
														type: 'object',
														description:
															'The thickness of the outline.',
														properties: {
															unit: {
																type: 'string',
																description:
																	'The units for magnitude.',
																default: '',
																enum: [
																	'',
																	'UNIT_UNSPECIFIED',
																	'EMU',
																	'PT',
																],
															},
															magnitude: {
																type: 'number',
																description: 'The magnitude.',
															},
														},
														required: [],
													},
													propertyState: {
														type: 'string',
														description:
															'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
														default: '',
														enum: [
															'',
															'RENDERED',
															'NOT_RENDERED',
															'INHERIT',
														],
													},
												},
												required: [],
											},
											link: {
												type: 'object',
												description:
													'The hyperlink destination of the image. If unset, there is no link.',
												properties: {
													slideIndex: {
														type: 'number',
														description:
															'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
													},
													url: {
														type: 'string',
														description:
															'If set, indicates this is a link to the external web page at this URL.',
													},
													pageObjectId: {
														type: 'string',
														description:
															'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
													},
													relativeLink: {
														type: 'string',
														description:
															'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
														default: '',
														enum: [
															'',
															'RELATIVE_SLIDE_LINK_UNSPECIFIED',
															'NEXT_SLIDE',
															'PREVIOUS_SLIDE',
															'FIRST_SLIDE',
															'LAST_SLIDE',
														],
													},
												},
												required: [],
											},
											transparency: {
												type: 'number',
												description:
													'The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.',
											},
											brightness: {
												type: 'number',
												description:
													'The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
											},
											contrast: {
												type: 'number',
												description:
													'The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
											},
										},
										required: [],
									},
									contentUrl: {
										type: 'string',
										description:
											"An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.",
									},
									sourceUrl: {
										type: 'string',
										description:
											'The source URL is the URL used to insert the image. The source URL can be empty.',
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
		appName: 'google-slides',
		appVersion: 1,
		endpointName: 'getPageThumbnail',
		label: 'Get a page thumbnail',
		description: 'Generates a thumbnail URL for a page in a Google Slides presentation.',
		context:
			"---\nname: getPageThumbnail\ndescription: Generates a thumbnail URL for a page in a Google Slides presentation.\n---\n\nReturns a thumbnail of the latest version of the specified page. The response includes `width`, `height`, and `contentUrl`.\n\nThis request counts as an expensive read for quota purposes.\n\n`contentUrl` lasts about 30 minutes and is tagged with the requester's account. Anyone with the URL accesses the image as the original requester. Access may be lost if the presentation's sharing settings change.\n\nOptional `thumbnailProperties`:\n- `mimeType` -- defaults to PNG\n- `thumbnailSize` -- LARGE (1600px), MEDIUM (800px), SMALL (200px). If omitted, the server chooses a size.\n\nRefer to the [presentations.pages.getThumbnail reference](https://developers.google.com/slides/api/reference/rest/v1/presentations.pages/getThumbnail).\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/presentations'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				presentationId: {
					type: 'string',
					description:
						'The ID of the presentation that contains the page. You can find this in the presentation URL: docs.google.com/presentation/d/{presentationId}/edit',
				},
				pageObjectId: {
					type: 'string',
					description: 'The object ID of the page whose thumbnail to retrieve.',
				},
				thumbnailProperties: {
					type: 'object',
					description:
						'Optional controls for thumbnail creation. If omitted, Google returns a PNG at a server-chosen size.',
					properties: {
						mimeType: {
							type: 'string',
							description:
								"The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.",
							default: '',
							enum: ['', 'PNG'],
						},
						thumbnailSize: {
							type: 'string',
							description:
								"The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image.",
							default: '',
							enum: ['', 'THUMBNAIL_SIZE_UNSPECIFIED', 'LARGE', 'MEDIUM', 'SMALL'],
						},
					},
					required: [],
				},
			},
			required: ['presentationId', 'pageObjectId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				width: {
					type: 'number',
					description: 'The positive width in pixels of the thumbnail image.',
				},
				height: {
					type: 'number',
					description: 'The positive height in pixels of the thumbnail image.',
				},
				contentUrl: {
					type: 'string',
					description:
						"The content URL of the thumbnail image. The URL to the image has a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. The mime type of the thumbnail image is the same as specified in the `GetPageThumbnailRequest`.",
				},
			},
			required: [],
		},
	},
	{
		appName: 'google-slides',
		appVersion: 1,
		endpointName: 'getPresentation',
		label: 'Get a presentation',
		description: 'Retrieves a Google Slides presentation by ID.',
		context:
			"---\nname: getPresentation\ndescription: Retrieves a Google Slides presentation by ID.\n---\n\nFetches the latest version of a presentation, including slides, layouts, masters, notes master, page size, title, locale, and revision ID.\n\nUse the presentation ID from the URL: `docs.google.com/presentation/d/{presentationId}/edit`.\n\nThe `slides` array includes full `pageElements`. Layouts, masters, and the notes master use the same Page resource; call **Get a page** with a page object ID when you need that page's `pageElements`.\n\n`revisionId` is output-only and is only populated when the caller has edit access. It is valid for 24 hours and can be passed to **Batch update a presentation** as `writeControl.requiredRevisionId` for optimistic locking.\n\nRefer to the [presentations.get reference](https://developers.google.com/slides/api/reference/rest/v1/presentations/get).\n",
		accounts: { google: { scope: ['https://www.googleapis.com/auth/presentations'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				presentationId: {
					type: 'string',
					description:
						'The ID of the presentation to retrieve. You can find this in the presentation URL: docs.google.com/presentation/d/{presentationId}/edit',
				},
			},
			required: ['presentationId'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				slides: {
					type: 'array',
					description:
						'The slides in the presentation. A slide inherits properties from a slide layout.',
					items: {
						type: 'object',
						description: 'A page in a presentation.',
						properties: {
							objectId: {
								type: 'string',
								description:
									'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
							},
							layoutProperties: {
								type: 'object',
								description:
									'Layout specific properties. Only set if page_type = LAYOUT.',
								properties: {
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this layout is based on.',
									},
									name: {
										type: 'string',
										description: 'The name of the layout.',
									},
									displayName: {
										type: 'string',
										description: 'The human-readable name of the layout.',
									},
								},
								required: [],
							},
							masterProperties: {
								type: 'object',
								description:
									'Master specific properties. Only set if page_type = MASTER.',
								properties: {
									displayName: {
										type: 'string',
										description: 'The human-readable name of the master.',
									},
								},
								required: [],
							},
							pageType: {
								type: 'string',
								description: 'The type of the page.',
								default: '',
								enum: ['', 'SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'],
							},
							notesProperties: {
								type: 'object',
								description:
									'Notes specific properties. Only set if page_type = NOTES.',
								properties: {
									speakerNotesObjectId: {
										type: 'string',
										description:
											'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
									},
								},
								required: [],
							},
							slideProperties: {
								type: 'object',
								description:
									'Slide specific properties. Only set if page_type = SLIDE.',
								properties: {
									notesPage: {
										type: 'object',
										description:
											'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
										properties: {
											objectId: {
												type: 'string',
												description:
													'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
											},
											pageType: {
												type: 'string',
												description: 'The type of the page.',
												default: '',
												enum: [
													'',
													'SLIDE',
													'MASTER',
													'LAYOUT',
													'NOTES',
													'NOTES_MASTER',
												],
											},
										},
										required: [],
									},
									layoutObjectId: {
										type: 'string',
										description:
											'The object ID of the layout that this slide is based on. This property is read-only.',
									},
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this slide is based on. This property is read-only.',
									},
									isSkipped: {
										type: 'boolean',
										description:
											'Whether the slide is skipped in the presentation mode. Defaults to false.',
									},
								},
								required: [],
							},
							pageProperties: {
								type: 'object',
								description: 'The properties of the page.',
								properties: {
									pageBackgroundFill: {
										type: 'object',
										description:
											'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
										properties: {
											solidFill: {
												type: 'object',
												description: 'Solid color fill.',
												properties: {
													color: {
														type: 'object',
														description:
															'The color value of the solid fill.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'THEME_COLOR_TYPE_UNSPECIFIED',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
													alpha: {
														type: 'number',
														description:
															'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
													},
												},
												required: [],
											},
											stretchedPictureFill: {
												type: 'object',
												description: 'Stretched picture fill.',
												properties: {
													contentUrl: {
														type: 'string',
														description:
															"Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
													},
													size: {
														type: 'object',
														description:
															'The original size of the picture fill. This field is read-only.',
														properties: {
															width: {
																type: 'object',
																description:
																	'The width of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
															height: {
																type: 'object',
																description:
																	'The height of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
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
											propertyState: {
												type: 'string',
												description:
													'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
												default: '',
												enum: ['', 'RENDERED', 'NOT_RENDERED', 'INHERIT'],
											},
										},
										required: [],
									},
									colorScheme: {
										type: 'object',
										description:
											'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
										properties: {
											colors: {
												type: 'array',
												description:
													'The ThemeColorType and corresponding concrete color pairs.',
												items: {
													type: 'object',
													description:
														'A pair mapping a theme color type to the concrete color it represents.',
													properties: {
														color: {
															type: 'object',
															description:
																'The concrete color corresponding to the theme color type above.',
															properties: {
																red: {
																	type: 'number',
																	description:
																		'The red component of the color, from 0.0 to 1.0.',
																},
																blue: {
																	type: 'number',
																	description:
																		'The blue component of the color, from 0.0 to 1.0.',
																},
																green: {
																	type: 'number',
																	description:
																		'The green component of the color, from 0.0 to 1.0.',
																},
															},
															required: [],
														},
														type: {
															type: 'string',
															description:
																'The type of the theme color.',
															default: '',
															enum: [
																'',
																'THEME_COLOR_TYPE_UNSPECIFIED',
																'DARK1',
																'LIGHT1',
																'DARK2',
																'LIGHT2',
																'ACCENT1',
																'ACCENT2',
																'ACCENT3',
																'ACCENT4',
																'ACCENT5',
																'ACCENT6',
																'HYPERLINK',
																'FOLLOWED_HYPERLINK',
																'TEXT1',
																'BACKGROUND1',
																'TEXT2',
																'BACKGROUND2',
															],
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
							revisionId: {
								type: 'string',
								description:
									"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
							},
							pageElements: {
								type: 'array',
								description: 'The page elements rendered on the page.',
								items: {
									type: 'object',
									description: 'A visual element rendered on a page.',
									properties: {
										objectId: {
											type: 'string',
											description:
												'The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.',
										},
										transform: {
											type: 'object',
											description:
												"The transform of the page element. The visual appearance of the page element is determined by its absolute transform. To compute the absolute transform, preconcatenate a page element's transform with the transforms of all of its parent groups. If the page element is not in a group, its absolute transform is the same as the value in this field. The initial transform for the newly created Group is always the identity transform.",
											properties: {
												scaleX: {
													type: 'number',
													description:
														'The X coordinate scaling element.',
												},
												shearX: {
													type: 'number',
													description:
														'The X coordinate shearing element.',
												},
												translateX: {
													type: 'number',
													description:
														'The X coordinate translation element.',
												},
												scaleY: {
													type: 'number',
													description:
														'The Y coordinate scaling element.',
												},
												translateY: {
													type: 'number',
													description:
														'The Y coordinate translation element.',
												},
												shearY: {
													type: 'number',
													description:
														'The Y coordinate shearing element.',
												},
												unit: {
													type: 'string',
													description:
														'The units for translate elements.',
													default: '',
													enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
												},
											},
											required: [],
										},
										elementGroup: {
											type: 'object',
											description:
												'A collection of page elements joined as a single unit.',
											properties: {
												children: {
													type: 'array',
													description:
														'The collection of elements in the group. The minimum size of a group is 2.',
													items: {
														type: 'object',
														description:
															'A visual element rendered on a page.',
														properties: {
															objectId: {
																type: 'string',
																description:
																	'The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.',
															},
															description: {
																type: 'string',
																description:
																	'The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.',
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
										speakerSpotlight: {
											type: 'object',
											description: 'A Speaker Spotlight.',
											properties: {
												speakerSpotlightProperties: {
													type: 'object',
													description:
														'The properties of the Speaker Spotlight.',
													properties: {
														outline: {
															type: 'object',
															description:
																'The outline of the Speaker Spotlight. If not set, it has no outline.',
															properties: {
																dashStyle: {
																	type: 'string',
																	description:
																		'The dash style of the outline.',
																	default: '',
																	enum: [
																		'',
																		'DASH_STYLE_UNSPECIFIED',
																		'SOLID',
																		'DOT',
																		'DASH',
																		'DASH_DOT',
																		'LONG_DASH',
																		'LONG_DASH_DOT',
																	],
																},
																outlineFill: {
																	type: 'object',
																	description:
																		'The fill of the outline.',
																	properties: {
																		solidFill: {
																			type: 'object',
																			description:
																				'Solid color fill.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value of the solid fill.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																				alpha: {
																					type: 'number',
																					description:
																						'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																weight: {
																	type: 'object',
																	description:
																		'The thickness of the outline.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
															},
															required: [],
														},
														shadow: {
															type: 'object',
															description:
																'The shadow of the Speaker Spotlight. If not set, it has no shadow.',
															properties: {
																alpha: {
																	type: 'number',
																	description:
																		"The alpha of the shadow's color, from 0.0 to 1.0.",
																},
																transform: {
																	type: 'object',
																	description:
																		'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
																	properties: {
																		scaleX: {
																			type: 'number',
																			description:
																				'The X coordinate scaling element.',
																		},
																		shearX: {
																			type: 'number',
																			description:
																				'The X coordinate shearing element.',
																		},
																		translateX: {
																			type: 'number',
																			description:
																				'The X coordinate translation element.',
																		},
																		scaleY: {
																			type: 'number',
																			description:
																				'The Y coordinate scaling element.',
																		},
																		translateY: {
																			type: 'number',
																			description:
																				'The Y coordinate translation element.',
																		},
																		shearY: {
																			type: 'number',
																			description:
																				'The Y coordinate shearing element.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The units for translate elements.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																	},
																	required: [],
																},
																alignment: {
																	type: 'string',
																	description:
																		'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'RECTANGLE_POSITION_UNSPECIFIED',
																		'TOP_LEFT',
																		'TOP_CENTER',
																		'TOP_RIGHT',
																		'LEFT_CENTER',
																		'CENTER',
																		'RIGHT_CENTER',
																		'BOTTOM_LEFT',
																		'BOTTOM_CENTER',
																		'BOTTOM_RIGHT',
																	],
																},
																type: {
																	type: 'string',
																	description:
																		'The type of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'SHADOW_TYPE_UNSPECIFIED',
																		'OUTER',
																	],
																},
																rotateWithShape: {
																	type: 'boolean',
																	description:
																		'Whether the shadow should rotate with the shape. This property is read-only.',
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
																color: {
																	type: 'object',
																	description:
																		'The shadow color value.',
																	properties: {
																		rgbColor: {
																			type: 'object',
																			description:
																				'An opaque RGB color.',
																			properties: {
																				red: {
																					type: 'number',
																					description:
																						'The red component of the color, from 0.0 to 1.0.',
																				},
																				blue: {
																					type: 'number',
																					description:
																						'The blue component of the color, from 0.0 to 1.0.',
																				},
																				green: {
																					type: 'number',
																					description:
																						'The green component of the color, from 0.0 to 1.0.',
																				},
																			},
																			required: [],
																		},
																		themeColor: {
																			type: 'string',
																			description:
																				'An opaque theme color.',
																			default: '',
																			enum: [
																				'',
																				'THEME_COLOR_TYPE_UNSPECIFIED',
																				'DARK1',
																				'LIGHT1',
																				'DARK2',
																				'LIGHT2',
																				'ACCENT1',
																				'ACCENT2',
																				'ACCENT3',
																				'ACCENT4',
																				'ACCENT5',
																				'ACCENT6',
																				'HYPERLINK',
																				'FOLLOWED_HYPERLINK',
																				'TEXT1',
																				'BACKGROUND1',
																				'TEXT2',
																				'BACKGROUND2',
																			],
																		},
																	},
																	required: [],
																},
																blurRadius: {
																	type: 'object',
																	description:
																		'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
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
										shape: {
											type: 'object',
											description: 'A generic shape.',
											properties: {
												placeholder: {
													type: 'object',
													description:
														'Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the shape is a placeholder shape and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.',
													properties: {
														index: {
															type: 'number',
															description:
																'The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.',
														},
														type: {
															type: 'string',
															description:
																'The type of the placeholder.',
															default: '',
															enum: [
																'',
																'NONE',
																'BODY',
																'CHART',
																'CLIP_ART',
																'CENTERED_TITLE',
																'DIAGRAM',
																'DATE_AND_TIME',
																'FOOTER',
																'HEADER',
																'MEDIA',
																'OBJECT',
																'PICTURE',
																'SLIDE_NUMBER',
																'SUBTITLE',
																'TABLE',
																'TITLE',
																'SLIDE_IMAGE',
															],
														},
														parentObjectId: {
															type: 'string',
															description:
																"The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.",
														},
													},
													required: [],
												},
												shapeType: {
													type: 'string',
													description: 'The type of the shape.',
													default: '',
													enum: [
														'',
														'TYPE_UNSPECIFIED',
														'TEXT_BOX',
														'RECTANGLE',
														'ROUND_RECTANGLE',
														'ELLIPSE',
														'ARC',
														'BENT_ARROW',
														'BENT_UP_ARROW',
														'BEVEL',
														'BLOCK_ARC',
														'BRACE_PAIR',
														'BRACKET_PAIR',
														'CAN',
														'CHEVRON',
														'CHORD',
														'CLOUD',
														'CORNER',
														'CUBE',
														'CURVED_DOWN_ARROW',
														'CURVED_LEFT_ARROW',
														'CURVED_RIGHT_ARROW',
														'CURVED_UP_ARROW',
														'DECAGON',
														'DIAGONAL_STRIPE',
														'DIAMOND',
														'DODECAGON',
														'DONUT',
														'DOUBLE_WAVE',
														'DOWN_ARROW',
														'DOWN_ARROW_CALLOUT',
														'FOLDED_CORNER',
														'FRAME',
														'HALF_FRAME',
														'HEART',
														'HEPTAGON',
														'HEXAGON',
														'HOME_PLATE',
														'HORIZONTAL_SCROLL',
														'IRREGULAR_SEAL_1',
														'IRREGULAR_SEAL_2',
														'LEFT_ARROW',
														'LEFT_ARROW_CALLOUT',
														'LEFT_BRACE',
														'LEFT_BRACKET',
														'LEFT_RIGHT_ARROW',
														'LEFT_RIGHT_ARROW_CALLOUT',
														'LEFT_RIGHT_UP_ARROW',
														'LEFT_UP_ARROW',
														'LIGHTNING_BOLT',
														'MATH_DIVIDE',
														'MATH_EQUAL',
														'MATH_MINUS',
														'MATH_MULTIPLY',
														'MATH_NOT_EQUAL',
														'MATH_PLUS',
														'MOON',
														'NO_SMOKING',
														'NOTCHED_RIGHT_ARROW',
														'OCTAGON',
														'PARALLELOGRAM',
														'PENTAGON',
														'PIE',
														'PLAQUE',
														'PLUS',
														'QUAD_ARROW',
														'QUAD_ARROW_CALLOUT',
														'RIBBON',
														'RIBBON_2',
														'RIGHT_ARROW',
														'RIGHT_ARROW_CALLOUT',
														'RIGHT_BRACE',
														'RIGHT_BRACKET',
														'ROUND_1_RECTANGLE',
														'ROUND_2_DIAGONAL_RECTANGLE',
														'ROUND_2_SAME_RECTANGLE',
														'RIGHT_TRIANGLE',
														'SMILEY_FACE',
														'SNIP_1_RECTANGLE',
														'SNIP_2_DIAGONAL_RECTANGLE',
														'SNIP_2_SAME_RECTANGLE',
														'SNIP_ROUND_RECTANGLE',
														'STAR_10',
														'STAR_12',
														'STAR_16',
														'STAR_24',
														'STAR_32',
														'STAR_4',
														'STAR_5',
														'STAR_6',
														'STAR_7',
														'STAR_8',
														'STRIPED_RIGHT_ARROW',
														'SUN',
														'TRAPEZOID',
														'TRIANGLE',
														'UP_ARROW',
														'UP_ARROW_CALLOUT',
														'UP_DOWN_ARROW',
														'UTURN_ARROW',
														'VERTICAL_SCROLL',
														'WAVE',
														'WEDGE_ELLIPSE_CALLOUT',
														'WEDGE_RECTANGLE_CALLOUT',
														'WEDGE_ROUND_RECTANGLE_CALLOUT',
														'FLOW_CHART_ALTERNATE_PROCESS',
														'FLOW_CHART_COLLATE',
														'FLOW_CHART_CONNECTOR',
														'FLOW_CHART_DECISION',
														'FLOW_CHART_DELAY',
														'FLOW_CHART_DISPLAY',
														'FLOW_CHART_DOCUMENT',
														'FLOW_CHART_EXTRACT',
														'FLOW_CHART_INPUT_OUTPUT',
														'FLOW_CHART_INTERNAL_STORAGE',
														'FLOW_CHART_MAGNETIC_DISK',
														'FLOW_CHART_MAGNETIC_DRUM',
														'FLOW_CHART_MAGNETIC_TAPE',
														'FLOW_CHART_MANUAL_INPUT',
														'FLOW_CHART_MANUAL_OPERATION',
														'FLOW_CHART_MERGE',
														'FLOW_CHART_MULTIDOCUMENT',
														'FLOW_CHART_OFFLINE_STORAGE',
														'FLOW_CHART_OFFPAGE_CONNECTOR',
														'FLOW_CHART_ONLINE_STORAGE',
														'FLOW_CHART_OR',
														'FLOW_CHART_PREDEFINED_PROCESS',
														'FLOW_CHART_PREPARATION',
														'FLOW_CHART_PROCESS',
														'FLOW_CHART_PUNCHED_CARD',
														'FLOW_CHART_PUNCHED_TAPE',
														'FLOW_CHART_SORT',
														'FLOW_CHART_SUMMING_JUNCTION',
														'FLOW_CHART_TERMINATOR',
														'ARROW_EAST',
														'ARROW_NORTH_EAST',
														'ARROW_NORTH',
														'SPEECH',
														'STARBURST',
														'TEARDROP',
														'ELLIPSE_RIBBON',
														'ELLIPSE_RIBBON_2',
														'CLOUD_CALLOUT',
														'CUSTOM',
													],
												},
												shapeProperties: {
													type: 'object',
													description: 'The properties of the shape.',
													properties: {
														link: {
															type: 'object',
															description:
																'The hyperlink destination of the shape. If unset, there is no link. Links are not inherited from parent placeholders.',
															properties: {
																slideIndex: {
																	type: 'number',
																	description:
																		'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																},
																url: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the external web page at this URL.',
																},
																pageObjectId: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																},
																relativeLink: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																	default: '',
																	enum: [
																		'',
																		'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																		'NEXT_SLIDE',
																		'PREVIOUS_SLIDE',
																		'FIRST_SLIDE',
																		'LAST_SLIDE',
																	],
																},
															},
															required: [],
														},
														autofit: {
															type: 'object',
															description:
																'The autofit properties of the shape. This property is only set for shapes that allow text.',
															properties: {
																fontScale: {
																	type: 'number',
																	description:
																		"The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that's rendered in the editor. This property is read-only.",
																},
																autofitType: {
																	type: 'string',
																	description:
																		'The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case, the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values.',
																	default: '',
																	enum: [
																		'',
																		'AUTOFIT_TYPE_UNSPECIFIED',
																		'NONE',
																		'TEXT_AUTOFIT',
																		'SHAPE_AUTOFIT',
																	],
																},
																lineSpacingReduction: {
																	type: 'number',
																	description:
																		"The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that's rendered in the editor. This property is read-only.",
																},
															},
															required: [],
														},
														shadow: {
															type: 'object',
															description:
																'The shadow properties of the shape. If unset, the shadow is inherited from a parent placeholder if it exists. If the shape has no parent, then the default shadow matches the defaults for new shapes created in the Slides editor. This property is read-only.',
															properties: {
																alpha: {
																	type: 'number',
																	description:
																		"The alpha of the shadow's color, from 0.0 to 1.0.",
																},
																transform: {
																	type: 'object',
																	description:
																		'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
																	properties: {
																		scaleX: {
																			type: 'number',
																			description:
																				'The X coordinate scaling element.',
																		},
																		shearX: {
																			type: 'number',
																			description:
																				'The X coordinate shearing element.',
																		},
																		translateX: {
																			type: 'number',
																			description:
																				'The X coordinate translation element.',
																		},
																		scaleY: {
																			type: 'number',
																			description:
																				'The Y coordinate scaling element.',
																		},
																		translateY: {
																			type: 'number',
																			description:
																				'The Y coordinate translation element.',
																		},
																		shearY: {
																			type: 'number',
																			description:
																				'The Y coordinate shearing element.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The units for translate elements.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																	},
																	required: [],
																},
																alignment: {
																	type: 'string',
																	description:
																		'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'RECTANGLE_POSITION_UNSPECIFIED',
																		'TOP_LEFT',
																		'TOP_CENTER',
																		'TOP_RIGHT',
																		'LEFT_CENTER',
																		'CENTER',
																		'RIGHT_CENTER',
																		'BOTTOM_LEFT',
																		'BOTTOM_CENTER',
																		'BOTTOM_RIGHT',
																	],
																},
																type: {
																	type: 'string',
																	description:
																		'The type of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'SHADOW_TYPE_UNSPECIFIED',
																		'OUTER',
																	],
																},
																rotateWithShape: {
																	type: 'boolean',
																	description:
																		'Whether the shadow should rotate with the shape. This property is read-only.',
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
																color: {
																	type: 'object',
																	description:
																		'The shadow color value.',
																	properties: {
																		rgbColor: {
																			type: 'object',
																			description:
																				'An opaque RGB color.',
																			properties: {
																				red: {
																					type: 'number',
																					description:
																						'The red component of the color, from 0.0 to 1.0.',
																				},
																				blue: {
																					type: 'number',
																					description:
																						'The blue component of the color, from 0.0 to 1.0.',
																				},
																				green: {
																					type: 'number',
																					description:
																						'The green component of the color, from 0.0 to 1.0.',
																				},
																			},
																			required: [],
																		},
																		themeColor: {
																			type: 'string',
																			description:
																				'An opaque theme color.',
																			default: '',
																			enum: [
																				'',
																				'THEME_COLOR_TYPE_UNSPECIFIED',
																				'DARK1',
																				'LIGHT1',
																				'DARK2',
																				'LIGHT2',
																				'ACCENT1',
																				'ACCENT2',
																				'ACCENT3',
																				'ACCENT4',
																				'ACCENT5',
																				'ACCENT6',
																				'HYPERLINK',
																				'FOLLOWED_HYPERLINK',
																				'TEXT1',
																				'BACKGROUND1',
																				'TEXT2',
																				'BACKGROUND2',
																			],
																		},
																	},
																	required: [],
																},
																blurRadius: {
																	type: 'object',
																	description:
																		'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														outline: {
															type: 'object',
															description:
																'The outline of the shape. If unset, the outline is inherited from a parent placeholder if it exists. If the shape has no parent, then the default outline depends on the shape type, matching the defaults for new shapes created in the Slides editor.',
															properties: {
																dashStyle: {
																	type: 'string',
																	description:
																		'The dash style of the outline.',
																	default: '',
																	enum: [
																		'',
																		'DASH_STYLE_UNSPECIFIED',
																		'SOLID',
																		'DOT',
																		'DASH',
																		'DASH_DOT',
																		'LONG_DASH',
																		'LONG_DASH_DOT',
																	],
																},
																outlineFill: {
																	type: 'object',
																	description:
																		'The fill of the outline.',
																	properties: {
																		solidFill: {
																			type: 'object',
																			description:
																				'Solid color fill.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value of the solid fill.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																				alpha: {
																					type: 'number',
																					description:
																						'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																weight: {
																	type: 'object',
																	description:
																		'The thickness of the outline.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
															},
															required: [],
														},
														shapeBackgroundFill: {
															type: 'object',
															description:
																'The background fill of the shape. If unset, the background fill is inherited from a parent placeholder if it exists. If the shape has no parent, then the default background fill depends on the shape type, matching the defaults for new shapes created in the Slides editor.',
															properties: {
																propertyState: {
																	type: 'string',
																	description:
																		'The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
																solidFill: {
																	type: 'object',
																	description:
																		'Solid color fill.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color value of the solid fill.',
																			properties: {
																				rgbColor: {
																					type: 'object',
																					description:
																						'An opaque RGB color.',
																					properties: {
																						red: {
																							type: 'number',
																							description:
																								'The red component of the color, from 0.0 to 1.0.',
																						},
																						blue: {
																							type: 'number',
																							description:
																								'The blue component of the color, from 0.0 to 1.0.',
																						},
																						green: {
																							type: 'number',
																							description:
																								'The green component of the color, from 0.0 to 1.0.',
																						},
																					},
																					required: [],
																				},
																				themeColor: {
																					type: 'string',
																					description:
																						'An opaque theme color.',
																					default: '',
																					enum: [
																						'',
																						'THEME_COLOR_TYPE_UNSPECIFIED',
																						'DARK1',
																						'LIGHT1',
																						'DARK2',
																						'LIGHT2',
																						'ACCENT1',
																						'ACCENT2',
																						'ACCENT3',
																						'ACCENT4',
																						'ACCENT5',
																						'ACCENT6',
																						'HYPERLINK',
																						'FOLLOWED_HYPERLINK',
																						'TEXT1',
																						'BACKGROUND1',
																						'TEXT2',
																						'BACKGROUND2',
																					],
																				},
																			},
																			required: [],
																		},
																		alpha: {
																			type: 'number',
																			description:
																				'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														contentAlignment: {
															type: 'string',
															description:
																'The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor.',
															default: '',
															enum: [
																'',
																'CONTENT_ALIGNMENT_UNSPECIFIED',
																'CONTENT_ALIGNMENT_UNSUPPORTED',
																'TOP',
																'MIDDLE',
																'BOTTOM',
															],
														},
													},
													required: [],
												},
												text: {
													type: 'object',
													description: 'The text content of the shape.',
													properties: {
														lists: {
															type: 'object',
															description:
																'The bulleted lists contained in this text, keyed by list ID.',
															properties: {},
															required: [],
															additionalProperties: true,
														},
														textElements: {
															type: 'array',
															description:
																'The text contents broken down into its component parts, including styling information. This property is read-only.',
															items: {
																type: 'object',
																description:
																	'A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.',
																properties: {
																	endIndex: {
																		type: 'number',
																		description:
																			'The zero-based end index of this text element, exclusive, in Unicode code units.',
																	},
																	paragraphMarker: {
																		type: 'object',
																		description:
																			"A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.",
																		properties: {
																			style: {
																				type: 'object',
																				description:
																					"The paragraph's style",
																				properties: {
																					indentEnd: {
																						type: 'object',
																						description:
																							'The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					spacingMode: {
																						type: 'string',
																						description:
																							'The spacing mode for the paragraph.',
																						default: '',
																						enum: [
																							'',
																							'SPACING_MODE_UNSPECIFIED',
																							'NEVER_COLLAPSE',
																							'COLLAPSE_LISTS',
																						],
																					},
																					indentStart: {
																						type: 'object',
																						description:
																							'The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					alignment: {
																						type: 'string',
																						description:
																							'The text alignment for this paragraph.',
																						default: '',
																						enum: [
																							'',
																							'ALIGNMENT_UNSPECIFIED',
																							'START',
																							'CENTER',
																							'END',
																							'JUSTIFIED',
																						],
																					},
																					indentFirstLine:
																						{
																							type: 'object',
																							description:
																								'The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.',
																							properties:
																								{
																									unit: {
																										type: 'string',
																										description:
																											'The units for magnitude.',
																										default:
																											'',
																										enum: [
																											'',
																											'UNIT_UNSPECIFIED',
																											'EMU',
																											'PT',
																										],
																									},
																									magnitude:
																										{
																											type: 'number',
																											description:
																												'The magnitude.',
																										},
																								},
																							required:
																								[],
																						},
																					lineSpacing: {
																						type: 'number',
																						description:
																							'The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.',
																					},
																					direction: {
																						type: 'string',
																						description:
																							'The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.',
																						default: '',
																						enum: [
																							'',
																							'TEXT_DIRECTION_UNSPECIFIED',
																							'LEFT_TO_RIGHT',
																							'RIGHT_TO_LEFT',
																						],
																					},
																					spaceAbove: {
																						type: 'object',
																						description:
																							'The amount of extra space above the paragraph. If unset, the value is inherited from the parent.',
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					spaceBelow: {
																						type: 'object',
																						description:
																							'The amount of extra space below the paragraph. If unset, the value is inherited from the parent.',
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																				},
																				required: [],
																			},
																			bullet: {
																				type: 'object',
																				description:
																					'The bullet for this paragraph. If not present, the paragraph does not belong to a list.',
																				properties: {
																					glyph: {
																						type: 'string',
																						description:
																							'The rendered bullet glyph for this paragraph.',
																					},
																					bulletStyle: {
																						type: 'object',
																						description:
																							'The paragraph specific text style applied to this bullet.',
																						properties:
																							{
																								bold: {
																									type: 'boolean',
																									description:
																										'Whether or not the text is rendered as bold.',
																								},
																								italic: {
																									type: 'boolean',
																									description:
																										'Whether or not the text is italicized.',
																								},
																								strikethrough:
																									{
																										type: 'boolean',
																										description:
																											'Whether or not the text is struck through.',
																									},
																								foregroundColor:
																									{
																										type: 'object',
																										description:
																											'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																										properties:
																											{
																												opaqueColor:
																													{
																														type: 'object',
																														description:
																															'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																														properties:
																															{
																																rgbColor:
																																	{
																																		type: 'object',
																																		description:
																																			'An opaque RGB color.',
																																		properties:
																																			{
																																				red: {
																																					type: 'number',
																																					description:
																																						'The red component of the color, from 0.0 to 1.0.',
																																				},
																																				blue: {
																																					type: 'number',
																																					description:
																																						'The blue component of the color, from 0.0 to 1.0.',
																																				},
																																				green: {
																																					type: 'number',
																																					description:
																																						'The green component of the color, from 0.0 to 1.0.',
																																				},
																																			},
																																		required:
																																			[],
																																	},
																																themeColor:
																																	{
																																		type: 'string',
																																		description:
																																			'An opaque theme color.',
																																		default:
																																			'',
																																		enum: [
																																			'',
																																			'THEME_COLOR_TYPE_UNSPECIFIED',
																																			'DARK1',
																																			'LIGHT1',
																																			'DARK2',
																																			'LIGHT2',
																																			'ACCENT1',
																																			'ACCENT2',
																																			'ACCENT3',
																																			'ACCENT4',
																																			'ACCENT5',
																																			'ACCENT6',
																																			'HYPERLINK',
																																			'FOLLOWED_HYPERLINK',
																																			'TEXT1',
																																			'BACKGROUND1',
																																			'TEXT2',
																																			'BACKGROUND2',
																																		],
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
																											"The size of the text's font. When read, the `font_size` will specified in points.",
																										properties:
																											{
																												unit: {
																													type: 'string',
																													description:
																														'The units for magnitude.',
																													default:
																														'',
																													enum: [
																														'',
																														'UNIT_UNSPECIFIED',
																														'EMU',
																														'PT',
																													],
																												},
																												magnitude:
																													{
																														type: 'number',
																														description:
																															'The magnitude.',
																													},
																											},
																										required:
																											[],
																									},
																								smallCaps:
																									{
																										type: 'boolean',
																										description:
																											'Whether or not the text is in small capital letters.',
																									},
																								backgroundColor:
																									{
																										type: 'object',
																										description:
																											'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																										properties:
																											{
																												opaqueColor:
																													{
																														type: 'object',
																														description:
																															'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																														properties:
																															{
																																rgbColor:
																																	{
																																		type: 'object',
																																		description:
																																			'An opaque RGB color.',
																																		properties:
																																			{
																																				red: {
																																					type: 'number',
																																					description:
																																						'The red component of the color, from 0.0 to 1.0.',
																																				},
																																				blue: {
																																					type: 'number',
																																					description:
																																						'The blue component of the color, from 0.0 to 1.0.',
																																				},
																																				green: {
																																					type: 'number',
																																					description:
																																						'The green component of the color, from 0.0 to 1.0.',
																																				},
																																			},
																																		required:
																																			[],
																																	},
																																themeColor:
																																	{
																																		type: 'string',
																																		description:
																																			'An opaque theme color.',
																																		default:
																																			'',
																																		enum: [
																																			'',
																																			'THEME_COLOR_TYPE_UNSPECIFIED',
																																			'DARK1',
																																			'LIGHT1',
																																			'DARK2',
																																			'LIGHT2',
																																			'ACCENT1',
																																			'ACCENT2',
																																			'ACCENT3',
																																			'ACCENT4',
																																			'ACCENT5',
																																			'ACCENT6',
																																			'HYPERLINK',
																																			'FOLLOWED_HYPERLINK',
																																			'TEXT1',
																																			'BACKGROUND1',
																																			'TEXT2',
																																			'BACKGROUND2',
																																		],
																																	},
																															},
																														required:
																															[],
																													},
																											},
																										required:
																											[],
																									},
																								link: {
																									type: 'object',
																									description:
																										'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																									properties:
																										{
																											slideIndex:
																												{
																													type: 'number',
																													description:
																														'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																												},
																											url: {
																												type: 'string',
																												description:
																													'If set, indicates this is a link to the external web page at this URL.',
																											},
																											pageObjectId:
																												{
																													type: 'string',
																													description:
																														'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																												},
																											relativeLink:
																												{
																													type: 'string',
																													description:
																														'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																													default:
																														'',
																													enum: [
																														'',
																														'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																														'NEXT_SLIDE',
																														'PREVIOUS_SLIDE',
																														'FIRST_SLIDE',
																														'LAST_SLIDE',
																													],
																												},
																										},
																									required:
																										[],
																								},
																								underline:
																									{
																										type: 'boolean',
																										description:
																											'Whether or not the text is underlined.',
																									},
																								baselineOffset:
																									{
																										type: 'string',
																										description:
																											"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																										default:
																											'',
																										enum: [
																											'',
																											'BASELINE_OFFSET_UNSPECIFIED',
																											'NONE',
																											'SUPERSCRIPT',
																											'SUBSCRIPT',
																										],
																									},
																								weightedFontFamily:
																									{
																										type: 'object',
																										description:
																											'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																										properties:
																											{
																												weight: {
																													type: 'number',
																													description:
																														'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																												},
																												fontFamily:
																													{
																														type: 'string',
																														description:
																															'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																													},
																											},
																										required:
																											[],
																									},
																								fontFamily:
																									{
																										type: 'string',
																										description:
																											'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																									},
																							},
																						required:
																							[],
																					},
																					nestingLevel: {
																						type: 'number',
																						description:
																							'The nesting level of this paragraph in the list.',
																					},
																					listId: {
																						type: 'string',
																						description:
																							'The ID of the list this paragraph belongs to.',
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																	autoText: {
																		type: 'object',
																		description:
																			'A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.',
																		properties: {
																			style: {
																				type: 'object',
																				description:
																					'The styling applied to this auto text.',
																				properties: {
																					bold: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is rendered as bold.',
																					},
																					italic: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is italicized.',
																					},
																					strikethrough: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is struck through.',
																					},
																					foregroundColor:
																						{
																							type: 'object',
																							description:
																								'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																							properties:
																								{
																									opaqueColor:
																										{
																											type: 'object',
																											description:
																												'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																											properties:
																												{
																													rgbColor:
																														{
																															type: 'object',
																															description:
																																'An opaque RGB color.',
																															properties:
																																{
																																	red: {
																																		type: 'number',
																																		description:
																																			'The red component of the color, from 0.0 to 1.0.',
																																	},
																																	blue: {
																																		type: 'number',
																																		description:
																																			'The blue component of the color, from 0.0 to 1.0.',
																																	},
																																	green: {
																																		type: 'number',
																																		description:
																																			'The green component of the color, from 0.0 to 1.0.',
																																	},
																																},
																															required:
																																[],
																														},
																													themeColor:
																														{
																															type: 'string',
																															description:
																																'An opaque theme color.',
																															default:
																																'',
																															enum: [
																																'',
																																'THEME_COLOR_TYPE_UNSPECIFIED',
																																'DARK1',
																																'LIGHT1',
																																'DARK2',
																																'LIGHT2',
																																'ACCENT1',
																																'ACCENT2',
																																'ACCENT3',
																																'ACCENT4',
																																'ACCENT5',
																																'ACCENT6',
																																'HYPERLINK',
																																'FOLLOWED_HYPERLINK',
																																'TEXT1',
																																'BACKGROUND1',
																																'TEXT2',
																																'BACKGROUND2',
																															],
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					fontSize: {
																						type: 'object',
																						description:
																							"The size of the text's font. When read, the `font_size` will specified in points.",
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					smallCaps: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is in small capital letters.',
																					},
																					backgroundColor:
																						{
																							type: 'object',
																							description:
																								'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																							properties:
																								{
																									opaqueColor:
																										{
																											type: 'object',
																											description:
																												'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																											properties:
																												{
																													rgbColor:
																														{
																															type: 'object',
																															description:
																																'An opaque RGB color.',
																															properties:
																																{
																																	red: {
																																		type: 'number',
																																		description:
																																			'The red component of the color, from 0.0 to 1.0.',
																																	},
																																	blue: {
																																		type: 'number',
																																		description:
																																			'The blue component of the color, from 0.0 to 1.0.',
																																	},
																																	green: {
																																		type: 'number',
																																		description:
																																			'The green component of the color, from 0.0 to 1.0.',
																																	},
																																},
																															required:
																																[],
																														},
																													themeColor:
																														{
																															type: 'string',
																															description:
																																'An opaque theme color.',
																															default:
																																'',
																															enum: [
																																'',
																																'THEME_COLOR_TYPE_UNSPECIFIED',
																																'DARK1',
																																'LIGHT1',
																																'DARK2',
																																'LIGHT2',
																																'ACCENT1',
																																'ACCENT2',
																																'ACCENT3',
																																'ACCENT4',
																																'ACCENT5',
																																'ACCENT6',
																																'HYPERLINK',
																																'FOLLOWED_HYPERLINK',
																																'TEXT1',
																																'BACKGROUND1',
																																'TEXT2',
																																'BACKGROUND2',
																															],
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					link: {
																						type: 'object',
																						description:
																							'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																						properties:
																							{
																								slideIndex:
																									{
																										type: 'number',
																										description:
																											'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																									},
																								url: {
																									type: 'string',
																									description:
																										'If set, indicates this is a link to the external web page at this URL.',
																								},
																								pageObjectId:
																									{
																										type: 'string',
																										description:
																											'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																									},
																								relativeLink:
																									{
																										type: 'string',
																										description:
																											'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																										default:
																											'',
																										enum: [
																											'',
																											'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																											'NEXT_SLIDE',
																											'PREVIOUS_SLIDE',
																											'FIRST_SLIDE',
																											'LAST_SLIDE',
																										],
																									},
																							},
																						required:
																							[],
																					},
																					underline: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is underlined.',
																					},
																					baselineOffset:
																						{
																							type: 'string',
																							description:
																								"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																							default:
																								'',
																							enum: [
																								'',
																								'BASELINE_OFFSET_UNSPECIFIED',
																								'NONE',
																								'SUPERSCRIPT',
																								'SUBSCRIPT',
																							],
																						},
																					weightedFontFamily:
																						{
																							type: 'object',
																							description:
																								'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																							properties:
																								{
																									weight: {
																										type: 'number',
																										description:
																											'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																									},
																									fontFamily:
																										{
																											type: 'string',
																											description:
																												'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																										},
																								},
																							required:
																								[],
																						},
																					fontFamily: {
																						type: 'string',
																						description:
																							'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																					},
																				},
																				required: [],
																			},
																			content: {
																				type: 'string',
																				description:
																					'The rendered content of this auto text, if available.',
																			},
																			type: {
																				type: 'string',
																				description:
																					'The type of this auto text.',
																				default: '',
																				enum: [
																					'',
																					'TYPE_UNSPECIFIED',
																					'SLIDE_NUMBER',
																				],
																			},
																		},
																		required: [],
																	},
																	textRun: {
																		type: 'object',
																		description:
																			'A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.',
																		properties: {
																			content: {
																				type: 'string',
																				description:
																					'The text of this run.',
																			},
																			style: {
																				type: 'object',
																				description:
																					'The styling applied to this run.',
																				properties: {
																					bold: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is rendered as bold.',
																					},
																					italic: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is italicized.',
																					},
																					strikethrough: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is struck through.',
																					},
																					foregroundColor:
																						{
																							type: 'object',
																							description:
																								'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																							properties:
																								{
																									opaqueColor:
																										{
																											type: 'object',
																											description:
																												'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																											properties:
																												{
																													rgbColor:
																														{
																															type: 'object',
																															description:
																																'An opaque RGB color.',
																															properties:
																																{
																																	red: {
																																		type: 'number',
																																		description:
																																			'The red component of the color, from 0.0 to 1.0.',
																																	},
																																	blue: {
																																		type: 'number',
																																		description:
																																			'The blue component of the color, from 0.0 to 1.0.',
																																	},
																																	green: {
																																		type: 'number',
																																		description:
																																			'The green component of the color, from 0.0 to 1.0.',
																																	},
																																},
																															required:
																																[],
																														},
																													themeColor:
																														{
																															type: 'string',
																															description:
																																'An opaque theme color.',
																															default:
																																'',
																															enum: [
																																'',
																																'THEME_COLOR_TYPE_UNSPECIFIED',
																																'DARK1',
																																'LIGHT1',
																																'DARK2',
																																'LIGHT2',
																																'ACCENT1',
																																'ACCENT2',
																																'ACCENT3',
																																'ACCENT4',
																																'ACCENT5',
																																'ACCENT6',
																																'HYPERLINK',
																																'FOLLOWED_HYPERLINK',
																																'TEXT1',
																																'BACKGROUND1',
																																'TEXT2',
																																'BACKGROUND2',
																															],
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					fontSize: {
																						type: 'object',
																						description:
																							"The size of the text's font. When read, the `font_size` will specified in points.",
																						properties:
																							{
																								unit: {
																									type: 'string',
																									description:
																										'The units for magnitude.',
																									default:
																										'',
																									enum: [
																										'',
																										'UNIT_UNSPECIFIED',
																										'EMU',
																										'PT',
																									],
																								},
																								magnitude:
																									{
																										type: 'number',
																										description:
																											'The magnitude.',
																									},
																							},
																						required:
																							[],
																					},
																					smallCaps: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is in small capital letters.',
																					},
																					backgroundColor:
																						{
																							type: 'object',
																							description:
																								'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																							properties:
																								{
																									opaqueColor:
																										{
																											type: 'object',
																											description:
																												'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																											properties:
																												{
																													rgbColor:
																														{
																															type: 'object',
																															description:
																																'An opaque RGB color.',
																															properties:
																																{
																																	red: {
																																		type: 'number',
																																		description:
																																			'The red component of the color, from 0.0 to 1.0.',
																																	},
																																	blue: {
																																		type: 'number',
																																		description:
																																			'The blue component of the color, from 0.0 to 1.0.',
																																	},
																																	green: {
																																		type: 'number',
																																		description:
																																			'The green component of the color, from 0.0 to 1.0.',
																																	},
																																},
																															required:
																																[],
																														},
																													themeColor:
																														{
																															type: 'string',
																															description:
																																'An opaque theme color.',
																															default:
																																'',
																															enum: [
																																'',
																																'THEME_COLOR_TYPE_UNSPECIFIED',
																																'DARK1',
																																'LIGHT1',
																																'DARK2',
																																'LIGHT2',
																																'ACCENT1',
																																'ACCENT2',
																																'ACCENT3',
																																'ACCENT4',
																																'ACCENT5',
																																'ACCENT6',
																																'HYPERLINK',
																																'FOLLOWED_HYPERLINK',
																																'TEXT1',
																																'BACKGROUND1',
																																'TEXT2',
																																'BACKGROUND2',
																															],
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
																						},
																					link: {
																						type: 'object',
																						description:
																							'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																						properties:
																							{
																								slideIndex:
																									{
																										type: 'number',
																										description:
																											'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																									},
																								url: {
																									type: 'string',
																									description:
																										'If set, indicates this is a link to the external web page at this URL.',
																								},
																								pageObjectId:
																									{
																										type: 'string',
																										description:
																											'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																									},
																								relativeLink:
																									{
																										type: 'string',
																										description:
																											'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																										default:
																											'',
																										enum: [
																											'',
																											'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																											'NEXT_SLIDE',
																											'PREVIOUS_SLIDE',
																											'FIRST_SLIDE',
																											'LAST_SLIDE',
																										],
																									},
																							},
																						required:
																							[],
																					},
																					underline: {
																						type: 'boolean',
																						description:
																							'Whether or not the text is underlined.',
																					},
																					baselineOffset:
																						{
																							type: 'string',
																							description:
																								"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																							default:
																								'',
																							enum: [
																								'',
																								'BASELINE_OFFSET_UNSPECIFIED',
																								'NONE',
																								'SUPERSCRIPT',
																								'SUBSCRIPT',
																							],
																						},
																					weightedFontFamily:
																						{
																							type: 'object',
																							description:
																								'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																							properties:
																								{
																									weight: {
																										type: 'number',
																										description:
																											'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																									},
																									fontFamily:
																										{
																											type: 'string',
																											description:
																												'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																										},
																								},
																							required:
																								[],
																						},
																					fontFamily: {
																						type: 'string',
																						description:
																							'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																					},
																				},
																				required: [],
																			},
																		},
																		required: [],
																	},
																	startIndex: {
																		type: 'number',
																		description:
																			'The zero-based start index of this text element, in Unicode code units.',
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
										size: {
											type: 'object',
											description: 'The size of the page element.',
											properties: {
												width: {
													type: 'object',
													description: 'The width of the object.',
													properties: {
														unit: {
															type: 'string',
															description: 'The units for magnitude.',
															default: '',
															enum: [
																'',
																'UNIT_UNSPECIFIED',
																'EMU',
																'PT',
															],
														},
														magnitude: {
															type: 'number',
															description: 'The magnitude.',
														},
													},
													required: [],
												},
												height: {
													type: 'object',
													description: 'The height of the object.',
													properties: {
														unit: {
															type: 'string',
															description: 'The units for magnitude.',
															default: '',
															enum: [
																'',
																'UNIT_UNSPECIFIED',
																'EMU',
																'PT',
															],
														},
														magnitude: {
															type: 'number',
															description: 'The magnitude.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										description: {
											type: 'string',
											description:
												'The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.',
										},
										video: {
											type: 'object',
											description: 'A video page element.',
											properties: {
												id: {
													type: 'string',
													description:
														"The video source's unique identifier for this video.",
												},
												url: {
													type: 'string',
													description:
														'An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.',
												},
												videoProperties: {
													type: 'object',
													description: 'The properties of the video.',
													properties: {
														end: {
															type: 'number',
															description:
																"The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.",
														},
														autoPlay: {
															type: 'boolean',
															description:
																'Whether to enable video autoplay when the page is displayed in present mode. Defaults to false.',
														},
														outline: {
															type: 'object',
															description:
																'The outline of the video. The default outline matches the defaults for new videos created in the Slides editor.',
															properties: {
																dashStyle: {
																	type: 'string',
																	description:
																		'The dash style of the outline.',
																	default: '',
																	enum: [
																		'',
																		'DASH_STYLE_UNSPECIFIED',
																		'SOLID',
																		'DOT',
																		'DASH',
																		'DASH_DOT',
																		'LONG_DASH',
																		'LONG_DASH_DOT',
																	],
																},
																outlineFill: {
																	type: 'object',
																	description:
																		'The fill of the outline.',
																	properties: {
																		solidFill: {
																			type: 'object',
																			description:
																				'Solid color fill.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value of the solid fill.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																				alpha: {
																					type: 'number',
																					description:
																						'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																weight: {
																	type: 'object',
																	description:
																		'The thickness of the outline.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
															},
															required: [],
														},
														mute: {
															type: 'boolean',
															description:
																'Whether to mute the audio during video playback. Defaults to false.',
														},
														start: {
															type: 'number',
															description:
																"The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.",
														},
													},
													required: [],
												},
												source: {
													type: 'string',
													description: 'The video source.',
													default: '',
													enum: [
														'',
														'SOURCE_UNSPECIFIED',
														'YOUTUBE',
														'DRIVE',
													],
												},
											},
											required: [],
										},
										table: {
											type: 'object',
											description: 'A table page element.',
											properties: {
												tableColumns: {
													type: 'array',
													description: 'Properties of each column.',
													items: {
														type: 'object',
														description:
															'Properties of each column in a table.',
														properties: {
															columnWidth: {
																type: 'object',
																description: 'Width of a column.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
														},
														required: [],
													},
												},
												verticalBorderRows: {
													type: 'array',
													description:
														"Properties of vertical cell borders. A table's vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns.",
													items: {
														type: 'object',
														description:
															'Contents of each border row in a table.',
														properties: {
															tableBorderCells: {
																type: 'array',
																description:
																	"Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.",
																items: {
																	type: 'object',
																	description:
																		'The properties of each border cell.',
																	properties: {
																		tableBorderProperties: {
																			type: 'object',
																			description:
																				'The border properties.',
																			properties: {
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border.',
																					default: '',
																					enum: [
																						'',
																						'DASH_STYLE_UNSPECIFIED',
																						'SOLID',
																						'DOT',
																						'DASH',
																						'DASH_DOT',
																						'LONG_DASH',
																						'LONG_DASH_DOT',
																					],
																				},
																				tableBorderFill: {
																					type: 'object',
																					description:
																						'The fill of the table border.',
																					properties: {
																						solidFill: {
																							type: 'object',
																							description:
																								'Solid fill.',
																							properties:
																								{
																									color: {
																										type: 'object',
																										description:
																											'The color value of the solid fill.',
																										properties:
																											{
																												rgbColor:
																													{
																														type: 'object',
																														description:
																															'An opaque RGB color.',
																														properties:
																															{
																																red: {
																																	type: 'number',
																																	description:
																																		'The red component of the color, from 0.0 to 1.0.',
																																},
																																blue: {
																																	type: 'number',
																																	description:
																																		'The blue component of the color, from 0.0 to 1.0.',
																																},
																																green: {
																																	type: 'number',
																																	description:
																																		'The green component of the color, from 0.0 to 1.0.',
																																},
																															},
																														required:
																															[],
																													},
																												themeColor:
																													{
																														type: 'string',
																														description:
																															'An opaque theme color.',
																														default:
																															'',
																														enum: [
																															'',
																															'THEME_COLOR_TYPE_UNSPECIFIED',
																															'DARK1',
																															'LIGHT1',
																															'DARK2',
																															'LIGHT2',
																															'ACCENT1',
																															'ACCENT2',
																															'ACCENT3',
																															'ACCENT4',
																															'ACCENT5',
																															'ACCENT6',
																															'HYPERLINK',
																															'FOLLOWED_HYPERLINK',
																															'TEXT1',
																															'BACKGROUND1',
																															'TEXT2',
																															'BACKGROUND2',
																														],
																													},
																											},
																										required:
																											[],
																									},
																									alpha: {
																										type: 'number',
																										description:
																											'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				weight: {
																					type: 'object',
																					description:
																						'The thickness of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The units for magnitude.',
																							default:
																								'',
																							enum: [
																								'',
																								'UNIT_UNSPECIFIED',
																								'EMU',
																								'PT',
																							],
																						},
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude.',
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
																				'The location of the border within the border table.',
																			properties: {
																				rowIndex: {
																					type: 'number',
																					description:
																						'The 0-based row index.',
																				},
																				columnIndex: {
																					type: 'number',
																					description:
																						'The 0-based column index.',
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
												rows: {
													type: 'number',
													description: 'Number of rows in the table.',
												},
												columns: {
													type: 'number',
													description: 'Number of columns in the table.',
												},
												horizontalBorderRows: {
													type: 'array',
													description:
														"Properties of horizontal cell borders. A table's horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns.",
													items: {
														type: 'object',
														description:
															'Contents of each border row in a table.',
														properties: {
															tableBorderCells: {
																type: 'array',
																description:
																	"Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.",
																items: {
																	type: 'object',
																	description:
																		'The properties of each border cell.',
																	properties: {
																		tableBorderProperties: {
																			type: 'object',
																			description:
																				'The border properties.',
																			properties: {
																				dashStyle: {
																					type: 'string',
																					description:
																						'The dash style of the border.',
																					default: '',
																					enum: [
																						'',
																						'DASH_STYLE_UNSPECIFIED',
																						'SOLID',
																						'DOT',
																						'DASH',
																						'DASH_DOT',
																						'LONG_DASH',
																						'LONG_DASH_DOT',
																					],
																				},
																				tableBorderFill: {
																					type: 'object',
																					description:
																						'The fill of the table border.',
																					properties: {
																						solidFill: {
																							type: 'object',
																							description:
																								'Solid fill.',
																							properties:
																								{
																									color: {
																										type: 'object',
																										description:
																											'The color value of the solid fill.',
																										properties:
																											{
																												rgbColor:
																													{
																														type: 'object',
																														description:
																															'An opaque RGB color.',
																														properties:
																															{
																																red: {
																																	type: 'number',
																																	description:
																																		'The red component of the color, from 0.0 to 1.0.',
																																},
																																blue: {
																																	type: 'number',
																																	description:
																																		'The blue component of the color, from 0.0 to 1.0.',
																																},
																																green: {
																																	type: 'number',
																																	description:
																																		'The green component of the color, from 0.0 to 1.0.',
																																},
																															},
																														required:
																															[],
																													},
																												themeColor:
																													{
																														type: 'string',
																														description:
																															'An opaque theme color.',
																														default:
																															'',
																														enum: [
																															'',
																															'THEME_COLOR_TYPE_UNSPECIFIED',
																															'DARK1',
																															'LIGHT1',
																															'DARK2',
																															'LIGHT2',
																															'ACCENT1',
																															'ACCENT2',
																															'ACCENT3',
																															'ACCENT4',
																															'ACCENT5',
																															'ACCENT6',
																															'HYPERLINK',
																															'FOLLOWED_HYPERLINK',
																															'TEXT1',
																															'BACKGROUND1',
																															'TEXT2',
																															'BACKGROUND2',
																														],
																													},
																											},
																										required:
																											[],
																									},
																									alpha: {
																										type: 'number',
																										description:
																											'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					required: [],
																				},
																				weight: {
																					type: 'object',
																					description:
																						'The thickness of the border.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The units for magnitude.',
																							default:
																								'',
																							enum: [
																								'',
																								'UNIT_UNSPECIFIED',
																								'EMU',
																								'PT',
																							],
																						},
																						magnitude: {
																							type: 'number',
																							description:
																								'The magnitude.',
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
																				'The location of the border within the border table.',
																			properties: {
																				rowIndex: {
																					type: 'number',
																					description:
																						'The 0-based row index.',
																				},
																				columnIndex: {
																					type: 'number',
																					description:
																						'The 0-based column index.',
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
												tableRows: {
													type: 'array',
													description:
														'Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a row_span greater than 1.',
													items: {
														type: 'object',
														description:
															'Properties and contents of each row in a table.',
														properties: {
															tableRowProperties: {
																type: 'object',
																description:
																	'Properties of the row.',
																properties: {
																	minRowHeight: {
																		type: 'object',
																		description:
																			"Minimum height of the row. The row will be rendered in the Slides editor at a height equal to or greater than this value in order to show all the text in the row's cell(s).",
																		properties: {
																			unit: {
																				type: 'string',
																				description:
																					'The units for magnitude.',
																				default: '',
																				enum: [
																					'',
																					'UNIT_UNSPECIFIED',
																					'EMU',
																					'PT',
																				],
																			},
																			magnitude: {
																				type: 'number',
																				description:
																					'The magnitude.',
																			},
																		},
																		required: [],
																	},
																},
																required: [],
															},
															rowHeight: {
																type: 'object',
																description: 'Height of a row.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
															tableCells: {
																type: 'array',
																description:
																	'Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table.',
																items: {
																	type: 'object',
																	description:
																		'Properties and contents of each table cell.',
																	properties: {
																		columnSpan: {
																			type: 'number',
																			description:
																				'Column span of the cell.',
																		},
																		location: {
																			type: 'object',
																			description:
																				'The location of the cell within the table.',
																			properties: {
																				rowIndex: {
																					type: 'number',
																					description:
																						'The 0-based row index.',
																				},
																				columnIndex: {
																					type: 'number',
																					description:
																						'The 0-based column index.',
																				},
																			},
																			required: [],
																		},
																		rowSpan: {
																			type: 'number',
																			description:
																				'Row span of the cell.',
																		},
																		text: {
																			type: 'object',
																			description:
																				'The text content of the cell.',
																			properties: {
																				lists: {
																					type: 'object',
																					description:
																						'The bulleted lists contained in this text, keyed by list ID.',
																					properties: {},
																					required: [],
																					additionalProperties:
																						true,
																				},
																				textElements: {
																					type: 'array',
																					description:
																						'The text contents broken down into its component parts, including styling information. This property is read-only.',
																					items: {
																						type: 'object',
																						description:
																							'A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.',
																						properties:
																							{
																								endIndex:
																									{
																										type: 'number',
																										description:
																											'The zero-based end index of this text element, exclusive, in Unicode code units.',
																									},
																								paragraphMarker:
																									{
																										type: 'object',
																										description:
																											"A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.",
																										properties:
																											{
																												style: {
																													type: 'object',
																													description:
																														"The paragraph's style",
																													properties:
																														{
																															indentEnd:
																																{
																																	type: 'object',
																																	description:
																																		'The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															spacingMode:
																																{
																																	type: 'string',
																																	description:
																																		'The spacing mode for the paragraph.',
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'SPACING_MODE_UNSPECIFIED',
																																		'NEVER_COLLAPSE',
																																		'COLLAPSE_LISTS',
																																	],
																																},
																															indentStart:
																																{
																																	type: 'object',
																																	description:
																																		'The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															alignment:
																																{
																																	type: 'string',
																																	description:
																																		'The text alignment for this paragraph.',
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'ALIGNMENT_UNSPECIFIED',
																																		'START',
																																		'CENTER',
																																		'END',
																																		'JUSTIFIED',
																																	],
																																},
																															indentFirstLine:
																																{
																																	type: 'object',
																																	description:
																																		'The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															lineSpacing:
																																{
																																	type: 'number',
																																	description:
																																		'The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.',
																																},
																															direction:
																																{
																																	type: 'string',
																																	description:
																																		'The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.',
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'TEXT_DIRECTION_UNSPECIFIED',
																																		'LEFT_TO_RIGHT',
																																		'RIGHT_TO_LEFT',
																																	],
																																},
																															spaceAbove:
																																{
																																	type: 'object',
																																	description:
																																		'The amount of extra space above the paragraph. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															spaceBelow:
																																{
																																	type: 'object',
																																	description:
																																		'The amount of extra space below the paragraph. If unset, the value is inherited from the parent.',
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																														},
																													required:
																														[],
																												},
																												bullet: {
																													type: 'object',
																													description:
																														'The bullet for this paragraph. If not present, the paragraph does not belong to a list.',
																													properties:
																														{
																															glyph: {
																																type: 'string',
																																description:
																																	'The rendered bullet glyph for this paragraph.',
																															},
																															bulletStyle:
																																{
																																	type: 'object',
																																	description:
																																		'The paragraph specific text style applied to this bullet.',
																																	properties:
																																		{
																																			bold: {
																																				type: 'boolean',
																																				description:
																																					'Whether or not the text is rendered as bold.',
																																			},
																																			italic: {
																																				type: 'boolean',
																																				description:
																																					'Whether or not the text is italicized.',
																																			},
																																			strikethrough:
																																				{
																																					type: 'boolean',
																																					description:
																																						'Whether or not the text is struck through.',
																																				},
																																			foregroundColor:
																																				{
																																					type: 'object',
																																					description:
																																						'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																					properties:
																																						{
																																							opaqueColor:
																																								{
																																									type: 'object',
																																									description:
																																										'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																									properties:
																																										{
																																											rgbColor:
																																												{
																																													type: 'object',
																																													description:
																																														'An opaque RGB color.',
																																													properties:
																																														{
																																															red: {
																																																type: 'number',
																																																description:
																																																	'The red component of the color, from 0.0 to 1.0.',
																																															},
																																															blue: {
																																																type: 'number',
																																																description:
																																																	'The blue component of the color, from 0.0 to 1.0.',
																																															},
																																															green: {
																																																type: 'number',
																																																description:
																																																	'The green component of the color, from 0.0 to 1.0.',
																																															},
																																														},
																																													required:
																																														[],
																																												},
																																											themeColor:
																																												{
																																													type: 'string',
																																													description:
																																														'An opaque theme color.',
																																													default:
																																														'',
																																													enum: [
																																														'',
																																														'THEME_COLOR_TYPE_UNSPECIFIED',
																																														'DARK1',
																																														'LIGHT1',
																																														'DARK2',
																																														'LIGHT2',
																																														'ACCENT1',
																																														'ACCENT2',
																																														'ACCENT3',
																																														'ACCENT4',
																																														'ACCENT5',
																																														'ACCENT6',
																																														'HYPERLINK',
																																														'FOLLOWED_HYPERLINK',
																																														'TEXT1',
																																														'BACKGROUND1',
																																														'TEXT2',
																																														'BACKGROUND2',
																																													],
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
																																						"The size of the text's font. When read, the `font_size` will specified in points.",
																																					properties:
																																						{
																																							unit: {
																																								type: 'string',
																																								description:
																																									'The units for magnitude.',
																																								default:
																																									'',
																																								enum: [
																																									'',
																																									'UNIT_UNSPECIFIED',
																																									'EMU',
																																									'PT',
																																								],
																																							},
																																							magnitude:
																																								{
																																									type: 'number',
																																									description:
																																										'The magnitude.',
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																			smallCaps:
																																				{
																																					type: 'boolean',
																																					description:
																																						'Whether or not the text is in small capital letters.',
																																				},
																																			backgroundColor:
																																				{
																																					type: 'object',
																																					description:
																																						'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																					properties:
																																						{
																																							opaqueColor:
																																								{
																																									type: 'object',
																																									description:
																																										'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																									properties:
																																										{
																																											rgbColor:
																																												{
																																													type: 'object',
																																													description:
																																														'An opaque RGB color.',
																																													properties:
																																														{
																																															red: {
																																																type: 'number',
																																																description:
																																																	'The red component of the color, from 0.0 to 1.0.',
																																															},
																																															blue: {
																																																type: 'number',
																																																description:
																																																	'The blue component of the color, from 0.0 to 1.0.',
																																															},
																																															green: {
																																																type: 'number',
																																																description:
																																																	'The green component of the color, from 0.0 to 1.0.',
																																															},
																																														},
																																													required:
																																														[],
																																												},
																																											themeColor:
																																												{
																																													type: 'string',
																																													description:
																																														'An opaque theme color.',
																																													default:
																																														'',
																																													enum: [
																																														'',
																																														'THEME_COLOR_TYPE_UNSPECIFIED',
																																														'DARK1',
																																														'LIGHT1',
																																														'DARK2',
																																														'LIGHT2',
																																														'ACCENT1',
																																														'ACCENT2',
																																														'ACCENT3',
																																														'ACCENT4',
																																														'ACCENT5',
																																														'ACCENT6',
																																														'HYPERLINK',
																																														'FOLLOWED_HYPERLINK',
																																														'TEXT1',
																																														'BACKGROUND1',
																																														'TEXT2',
																																														'BACKGROUND2',
																																													],
																																												},
																																										},
																																									required:
																																										[],
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																			link: {
																																				type: 'object',
																																				description:
																																					'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																																				properties:
																																					{
																																						slideIndex:
																																							{
																																								type: 'number',
																																								description:
																																									'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																																							},
																																						url: {
																																							type: 'string',
																																							description:
																																								'If set, indicates this is a link to the external web page at this URL.',
																																						},
																																						pageObjectId:
																																							{
																																								type: 'string',
																																								description:
																																									'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																																							},
																																						relativeLink:
																																							{
																																								type: 'string',
																																								description:
																																									'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																																								default:
																																									'',
																																								enum: [
																																									'',
																																									'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																																									'NEXT_SLIDE',
																																									'PREVIOUS_SLIDE',
																																									'FIRST_SLIDE',
																																									'LAST_SLIDE',
																																								],
																																							},
																																					},
																																				required:
																																					[],
																																			},
																																			underline:
																																				{
																																					type: 'boolean',
																																					description:
																																						'Whether or not the text is underlined.',
																																				},
																																			baselineOffset:
																																				{
																																					type: 'string',
																																					description:
																																						"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																																					default:
																																						'',
																																					enum: [
																																						'',
																																						'BASELINE_OFFSET_UNSPECIFIED',
																																						'NONE',
																																						'SUPERSCRIPT',
																																						'SUBSCRIPT',
																																					],
																																				},
																																			weightedFontFamily:
																																				{
																																					type: 'object',
																																					description:
																																						'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																																					properties:
																																						{
																																							weight: {
																																								type: 'number',
																																								description:
																																									'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																																							},
																																							fontFamily:
																																								{
																																									type: 'string',
																																									description:
																																										'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																			fontFamily:
																																				{
																																					type: 'string',
																																					description:
																																						'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															nestingLevel:
																																{
																																	type: 'number',
																																	description:
																																		'The nesting level of this paragraph in the list.',
																																},
																															listId: {
																																type: 'string',
																																description:
																																	'The ID of the list this paragraph belongs to.',
																															},
																														},
																													required:
																														[],
																												},
																											},
																										required:
																											[],
																									},
																								autoText:
																									{
																										type: 'object',
																										description:
																											'A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.',
																										properties:
																											{
																												style: {
																													type: 'object',
																													description:
																														'The styling applied to this auto text.',
																													properties:
																														{
																															bold: {
																																type: 'boolean',
																																description:
																																	'Whether or not the text is rendered as bold.',
																															},
																															italic: {
																																type: 'boolean',
																																description:
																																	'Whether or not the text is italicized.',
																															},
																															strikethrough:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is struck through.',
																																},
																															foregroundColor:
																																{
																																	type: 'object',
																																	description:
																																		'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																	properties:
																																		{
																																			opaqueColor:
																																				{
																																					type: 'object',
																																					description:
																																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																					properties:
																																						{
																																							rgbColor:
																																								{
																																									type: 'object',
																																									description:
																																										'An opaque RGB color.',
																																									properties:
																																										{
																																											red: {
																																												type: 'number',
																																												description:
																																													'The red component of the color, from 0.0 to 1.0.',
																																											},
																																											blue: {
																																												type: 'number',
																																												description:
																																													'The blue component of the color, from 0.0 to 1.0.',
																																											},
																																											green: {
																																												type: 'number',
																																												description:
																																													'The green component of the color, from 0.0 to 1.0.',
																																											},
																																										},
																																									required:
																																										[],
																																								},
																																							themeColor:
																																								{
																																									type: 'string',
																																									description:
																																										'An opaque theme color.',
																																									default:
																																										'',
																																									enum: [
																																										'',
																																										'THEME_COLOR_TYPE_UNSPECIFIED',
																																										'DARK1',
																																										'LIGHT1',
																																										'DARK2',
																																										'LIGHT2',
																																										'ACCENT1',
																																										'ACCENT2',
																																										'ACCENT3',
																																										'ACCENT4',
																																										'ACCENT5',
																																										'ACCENT6',
																																										'HYPERLINK',
																																										'FOLLOWED_HYPERLINK',
																																										'TEXT1',
																																										'BACKGROUND1',
																																										'TEXT2',
																																										'BACKGROUND2',
																																									],
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
																																		"The size of the text's font. When read, the `font_size` will specified in points.",
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															smallCaps:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is in small capital letters.',
																																},
																															backgroundColor:
																																{
																																	type: 'object',
																																	description:
																																		'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																	properties:
																																		{
																																			opaqueColor:
																																				{
																																					type: 'object',
																																					description:
																																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																					properties:
																																						{
																																							rgbColor:
																																								{
																																									type: 'object',
																																									description:
																																										'An opaque RGB color.',
																																									properties:
																																										{
																																											red: {
																																												type: 'number',
																																												description:
																																													'The red component of the color, from 0.0 to 1.0.',
																																											},
																																											blue: {
																																												type: 'number',
																																												description:
																																													'The blue component of the color, from 0.0 to 1.0.',
																																											},
																																											green: {
																																												type: 'number',
																																												description:
																																													'The green component of the color, from 0.0 to 1.0.',
																																											},
																																										},
																																									required:
																																										[],
																																								},
																																							themeColor:
																																								{
																																									type: 'string',
																																									description:
																																										'An opaque theme color.',
																																									default:
																																										'',
																																									enum: [
																																										'',
																																										'THEME_COLOR_TYPE_UNSPECIFIED',
																																										'DARK1',
																																										'LIGHT1',
																																										'DARK2',
																																										'LIGHT2',
																																										'ACCENT1',
																																										'ACCENT2',
																																										'ACCENT3',
																																										'ACCENT4',
																																										'ACCENT5',
																																										'ACCENT6',
																																										'HYPERLINK',
																																										'FOLLOWED_HYPERLINK',
																																										'TEXT1',
																																										'BACKGROUND1',
																																										'TEXT2',
																																										'BACKGROUND2',
																																									],
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																		},
																																	required:
																																		[],
																																},
																															link: {
																																type: 'object',
																																description:
																																	'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																																properties:
																																	{
																																		slideIndex:
																																			{
																																				type: 'number',
																																				description:
																																					'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																																			},
																																		url: {
																																			type: 'string',
																																			description:
																																				'If set, indicates this is a link to the external web page at this URL.',
																																		},
																																		pageObjectId:
																																			{
																																				type: 'string',
																																				description:
																																					'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																																			},
																																		relativeLink:
																																			{
																																				type: 'string',
																																				description:
																																					'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																																					'NEXT_SLIDE',
																																					'PREVIOUS_SLIDE',
																																					'FIRST_SLIDE',
																																					'LAST_SLIDE',
																																				],
																																			},
																																	},
																																required:
																																	[],
																															},
																															underline:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is underlined.',
																																},
																															baselineOffset:
																																{
																																	type: 'string',
																																	description:
																																		"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'BASELINE_OFFSET_UNSPECIFIED',
																																		'NONE',
																																		'SUPERSCRIPT',
																																		'SUBSCRIPT',
																																	],
																																},
																															weightedFontFamily:
																																{
																																	type: 'object',
																																	description:
																																		'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																																	properties:
																																		{
																																			weight: {
																																				type: 'number',
																																				description:
																																					'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																																			},
																																			fontFamily:
																																				{
																																					type: 'string',
																																					description:
																																						'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															fontFamily:
																																{
																																	type: 'string',
																																	description:
																																		'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																																},
																														},
																													required:
																														[],
																												},
																												content:
																													{
																														type: 'string',
																														description:
																															'The rendered content of this auto text, if available.',
																													},
																												type: {
																													type: 'string',
																													description:
																														'The type of this auto text.',
																													default:
																														'',
																													enum: [
																														'',
																														'TYPE_UNSPECIFIED',
																														'SLIDE_NUMBER',
																													],
																												},
																											},
																										required:
																											[],
																									},
																								textRun:
																									{
																										type: 'object',
																										description:
																											'A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.',
																										properties:
																											{
																												content:
																													{
																														type: 'string',
																														description:
																															'The text of this run.',
																													},
																												style: {
																													type: 'object',
																													description:
																														'The styling applied to this run.',
																													properties:
																														{
																															bold: {
																																type: 'boolean',
																																description:
																																	'Whether or not the text is rendered as bold.',
																															},
																															italic: {
																																type: 'boolean',
																																description:
																																	'Whether or not the text is italicized.',
																															},
																															strikethrough:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is struck through.',
																																},
																															foregroundColor:
																																{
																																	type: 'object',
																																	description:
																																		'The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																	properties:
																																		{
																																			opaqueColor:
																																				{
																																					type: 'object',
																																					description:
																																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																					properties:
																																						{
																																							rgbColor:
																																								{
																																									type: 'object',
																																									description:
																																										'An opaque RGB color.',
																																									properties:
																																										{
																																											red: {
																																												type: 'number',
																																												description:
																																													'The red component of the color, from 0.0 to 1.0.',
																																											},
																																											blue: {
																																												type: 'number',
																																												description:
																																													'The blue component of the color, from 0.0 to 1.0.',
																																											},
																																											green: {
																																												type: 'number',
																																												description:
																																													'The green component of the color, from 0.0 to 1.0.',
																																											},
																																										},
																																									required:
																																										[],
																																								},
																																							themeColor:
																																								{
																																									type: 'string',
																																									description:
																																										'An opaque theme color.',
																																									default:
																																										'',
																																									enum: [
																																										'',
																																										'THEME_COLOR_TYPE_UNSPECIFIED',
																																										'DARK1',
																																										'LIGHT1',
																																										'DARK2',
																																										'LIGHT2',
																																										'ACCENT1',
																																										'ACCENT2',
																																										'ACCENT3',
																																										'ACCENT4',
																																										'ACCENT5',
																																										'ACCENT6',
																																										'HYPERLINK',
																																										'FOLLOWED_HYPERLINK',
																																										'TEXT1',
																																										'BACKGROUND1',
																																										'TEXT2',
																																										'BACKGROUND2',
																																									],
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
																																		"The size of the text's font. When read, the `font_size` will specified in points.",
																																	properties:
																																		{
																																			unit: {
																																				type: 'string',
																																				description:
																																					'The units for magnitude.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'UNIT_UNSPECIFIED',
																																					'EMU',
																																					'PT',
																																				],
																																			},
																																			magnitude:
																																				{
																																					type: 'number',
																																					description:
																																						'The magnitude.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															smallCaps:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is in small capital letters.',
																																},
																															backgroundColor:
																																{
																																	type: 'object',
																																	description:
																																		'The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.',
																																	properties:
																																		{
																																			opaqueColor:
																																				{
																																					type: 'object',
																																					description:
																																						'If set, this will be used as an opaque color. If unset, this represents a transparent color.',
																																					properties:
																																						{
																																							rgbColor:
																																								{
																																									type: 'object',
																																									description:
																																										'An opaque RGB color.',
																																									properties:
																																										{
																																											red: {
																																												type: 'number',
																																												description:
																																													'The red component of the color, from 0.0 to 1.0.',
																																											},
																																											blue: {
																																												type: 'number',
																																												description:
																																													'The blue component of the color, from 0.0 to 1.0.',
																																											},
																																											green: {
																																												type: 'number',
																																												description:
																																													'The green component of the color, from 0.0 to 1.0.',
																																											},
																																										},
																																									required:
																																										[],
																																								},
																																							themeColor:
																																								{
																																									type: 'string',
																																									description:
																																										'An opaque theme color.',
																																									default:
																																										'',
																																									enum: [
																																										'',
																																										'THEME_COLOR_TYPE_UNSPECIFIED',
																																										'DARK1',
																																										'LIGHT1',
																																										'DARK2',
																																										'LIGHT2',
																																										'ACCENT1',
																																										'ACCENT2',
																																										'ACCENT3',
																																										'ACCENT4',
																																										'ACCENT5',
																																										'ACCENT6',
																																										'HYPERLINK',
																																										'FOLLOWED_HYPERLINK',
																																										'TEXT1',
																																										'BACKGROUND1',
																																										'TEXT2',
																																										'BACKGROUND2',
																																									],
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																		},
																																	required:
																																		[],
																																},
																															link: {
																																type: 'object',
																																description:
																																	'The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.',
																																properties:
																																	{
																																		slideIndex:
																																			{
																																				type: 'number',
																																				description:
																																					'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																																			},
																																		url: {
																																			type: 'string',
																																			description:
																																				'If set, indicates this is a link to the external web page at this URL.',
																																		},
																																		pageObjectId:
																																			{
																																				type: 'string',
																																				description:
																																					'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																																			},
																																		relativeLink:
																																			{
																																				type: 'string',
																																				description:
																																					'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																																				default:
																																					'',
																																				enum: [
																																					'',
																																					'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																																					'NEXT_SLIDE',
																																					'PREVIOUS_SLIDE',
																																					'FIRST_SLIDE',
																																					'LAST_SLIDE',
																																				],
																																			},
																																	},
																																required:
																																	[],
																															},
																															underline:
																																{
																																	type: 'boolean',
																																	description:
																																		'Whether or not the text is underlined.',
																																},
																															baselineOffset:
																																{
																																	type: 'string',
																																	description:
																																		"The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.",
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'BASELINE_OFFSET_UNSPECIFIED',
																																		'NONE',
																																		'SUPERSCRIPT',
																																		'SUBSCRIPT',
																																	],
																																},
																															weightedFontFamily:
																																{
																																	type: 'object',
																																	description:
																																		'The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.',
																																	properties:
																																		{
																																			weight: {
																																				type: 'number',
																																				description:
																																					'The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").',
																																			},
																																			fontFamily:
																																				{
																																					type: 'string',
																																					description:
																																						'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.',
																																				},
																																		},
																																	required:
																																		[],
																																},
																															fontFamily:
																																{
																																	type: 'string',
																																	description:
																																		'The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.',
																																},
																														},
																													required:
																														[],
																												},
																											},
																										required:
																											[],
																									},
																								startIndex:
																									{
																										type: 'number',
																										description:
																											'The zero-based start index of this text element, in Unicode code units.',
																									},
																							},
																						required:
																							[],
																					},
																				},
																			},
																			required: [],
																		},
																		tableCellProperties: {
																			type: 'object',
																			description:
																				'The properties of the table cell.',
																			properties: {
																				contentAlignment: {
																					type: 'string',
																					description:
																						'The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.',
																					default: '',
																					enum: [
																						'',
																						'CONTENT_ALIGNMENT_UNSPECIFIED',
																						'CONTENT_ALIGNMENT_UNSUPPORTED',
																						'TOP',
																						'MIDDLE',
																						'BOTTOM',
																					],
																				},
																				tableCellBackgroundFill:
																					{
																						type: 'object',
																						description:
																							'The background fill of the table cell. The default fill matches the fill for newly created table cells in the Slides editor.',
																						properties:
																							{
																								propertyState:
																									{
																										type: 'string',
																										description:
																											'The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
																										default:
																											'',
																										enum: [
																											'',
																											'RENDERED',
																											'NOT_RENDERED',
																											'INHERIT',
																										],
																									},
																								solidFill:
																									{
																										type: 'object',
																										description:
																											'Solid color fill.',
																										properties:
																											{
																												color: {
																													type: 'object',
																													description:
																														'The color value of the solid fill.',
																													properties:
																														{
																															rgbColor:
																																{
																																	type: 'object',
																																	description:
																																		'An opaque RGB color.',
																																	properties:
																																		{
																																			red: {
																																				type: 'number',
																																				description:
																																					'The red component of the color, from 0.0 to 1.0.',
																																			},
																																			blue: {
																																				type: 'number',
																																				description:
																																					'The blue component of the color, from 0.0 to 1.0.',
																																			},
																																			green: {
																																				type: 'number',
																																				description:
																																					'The green component of the color, from 0.0 to 1.0.',
																																			},
																																		},
																																	required:
																																		[],
																																},
																															themeColor:
																																{
																																	type: 'string',
																																	description:
																																		'An opaque theme color.',
																																	default:
																																		'',
																																	enum: [
																																		'',
																																		'THEME_COLOR_TYPE_UNSPECIFIED',
																																		'DARK1',
																																		'LIGHT1',
																																		'DARK2',
																																		'LIGHT2',
																																		'ACCENT1',
																																		'ACCENT2',
																																		'ACCENT3',
																																		'ACCENT4',
																																		'ACCENT5',
																																		'ACCENT6',
																																		'HYPERLINK',
																																		'FOLLOWED_HYPERLINK',
																																		'TEXT1',
																																		'BACKGROUND1',
																																		'TEXT2',
																																		'BACKGROUND2',
																																	],
																																},
																														},
																													required:
																														[],
																												},
																												alpha: {
																													type: 'number',
																													description:
																														'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
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
														},
														required: [],
													},
												},
											},
											required: [],
										},
										line: {
											type: 'object',
											description: 'A line page element.',
											properties: {
												lineCategory: {
													type: 'string',
													description:
														'The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest.',
													default: '',
													enum: [
														'',
														'LINE_CATEGORY_UNSPECIFIED',
														'STRAIGHT',
														'BENT',
														'CURVED',
													],
												},
												lineType: {
													type: 'string',
													description: 'The type of the line.',
													default: '',
													enum: [
														'',
														'TYPE_UNSPECIFIED',
														'STRAIGHT_CONNECTOR_1',
														'BENT_CONNECTOR_2',
														'BENT_CONNECTOR_3',
														'BENT_CONNECTOR_4',
														'BENT_CONNECTOR_5',
														'CURVED_CONNECTOR_2',
														'CURVED_CONNECTOR_3',
														'CURVED_CONNECTOR_4',
														'CURVED_CONNECTOR_5',
														'STRAIGHT_LINE',
													],
												},
												lineProperties: {
													type: 'object',
													description: 'The properties of the line.',
													properties: {
														startConnection: {
															type: 'object',
															description:
																'The connection at the beginning of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have a `start_connection`.',
															properties: {
																connectionSiteIndex: {
																	type: 'number',
																	description:
																		'The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in both the description of the "cxn" attribute in section 20.1.9.9 and "Annex H. Example Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/). The position of each connection site can also be viewed from Slides editor.',
																},
																connectedObjectId: {
																	type: 'string',
																	description:
																		'The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.',
																},
															},
															required: [],
														},
														link: {
															type: 'object',
															description:
																'The hyperlink destination of the line. If unset, there is no link.',
															properties: {
																slideIndex: {
																	type: 'number',
																	description:
																		'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																},
																url: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the external web page at this URL.',
																},
																pageObjectId: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																},
																relativeLink: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																	default: '',
																	enum: [
																		'',
																		'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																		'NEXT_SLIDE',
																		'PREVIOUS_SLIDE',
																		'FIRST_SLIDE',
																		'LAST_SLIDE',
																	],
																},
															},
															required: [],
														},
														endConnection: {
															type: 'object',
															description:
																'The connection at the end of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have an `end_connection`.',
															properties: {
																connectionSiteIndex: {
																	type: 'number',
																	description:
																		'The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in both the description of the "cxn" attribute in section 20.1.9.9 and "Annex H. Example Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/). The position of each connection site can also be viewed from Slides editor.',
																},
																connectedObjectId: {
																	type: 'string',
																	description:
																		'The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.',
																},
															},
															required: [],
														},
														endArrow: {
															type: 'string',
															description:
																'The style of the arrow at the end of the line.',
															default: '',
															enum: [
																'',
																'ARROW_STYLE_UNSPECIFIED',
																'NONE',
																'STEALTH_ARROW',
																'FILL_ARROW',
																'FILL_CIRCLE',
																'FILL_SQUARE',
																'FILL_DIAMOND',
																'OPEN_ARROW',
																'OPEN_CIRCLE',
																'OPEN_SQUARE',
																'OPEN_DIAMOND',
															],
														},
														dashStyle: {
															type: 'string',
															description:
																'The dash style of the line.',
															default: '',
															enum: [
																'',
																'DASH_STYLE_UNSPECIFIED',
																'SOLID',
																'DOT',
																'DASH',
																'DASH_DOT',
																'LONG_DASH',
																'LONG_DASH_DOT',
															],
														},
														lineFill: {
															type: 'object',
															description:
																'The fill of the line. The default line fill matches the defaults for new lines created in the Slides editor.',
															properties: {
																solidFill: {
																	type: 'object',
																	description:
																		'Solid color fill.',
																	properties: {
																		color: {
																			type: 'object',
																			description:
																				'The color value of the solid fill.',
																			properties: {
																				rgbColor: {
																					type: 'object',
																					description:
																						'An opaque RGB color.',
																					properties: {
																						red: {
																							type: 'number',
																							description:
																								'The red component of the color, from 0.0 to 1.0.',
																						},
																						blue: {
																							type: 'number',
																							description:
																								'The blue component of the color, from 0.0 to 1.0.',
																						},
																						green: {
																							type: 'number',
																							description:
																								'The green component of the color, from 0.0 to 1.0.',
																						},
																					},
																					required: [],
																				},
																				themeColor: {
																					type: 'string',
																					description:
																						'An opaque theme color.',
																					default: '',
																					enum: [
																						'',
																						'THEME_COLOR_TYPE_UNSPECIFIED',
																						'DARK1',
																						'LIGHT1',
																						'DARK2',
																						'LIGHT2',
																						'ACCENT1',
																						'ACCENT2',
																						'ACCENT3',
																						'ACCENT4',
																						'ACCENT5',
																						'ACCENT6',
																						'HYPERLINK',
																						'FOLLOWED_HYPERLINK',
																						'TEXT1',
																						'BACKGROUND1',
																						'TEXT2',
																						'BACKGROUND2',
																					],
																				},
																			},
																			required: [],
																		},
																		alpha: {
																			type: 'number',
																			description:
																				'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														weight: {
															type: 'object',
															description:
																'The thickness of the line.',
															properties: {
																unit: {
																	type: 'string',
																	description:
																		'The units for magnitude.',
																	default: '',
																	enum: [
																		'',
																		'UNIT_UNSPECIFIED',
																		'EMU',
																		'PT',
																	],
																},
																magnitude: {
																	type: 'number',
																	description: 'The magnitude.',
																},
															},
															required: [],
														},
														startArrow: {
															type: 'string',
															description:
																'The style of the arrow at the beginning of the line.',
															default: '',
															enum: [
																'',
																'ARROW_STYLE_UNSPECIFIED',
																'NONE',
																'STEALTH_ARROW',
																'FILL_ARROW',
																'FILL_CIRCLE',
																'FILL_SQUARE',
																'FILL_DIAMOND',
																'OPEN_ARROW',
																'OPEN_CIRCLE',
																'OPEN_SQUARE',
																'OPEN_DIAMOND',
															],
														},
													},
													required: [],
												},
											},
											required: [],
										},
										sheetsChart: {
											type: 'object',
											description:
												'A linked chart embedded from Google Sheets. Unlinked charts are represented as images.',
											properties: {
												contentUrl: {
													type: 'string',
													description:
														"The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.",
												},
												spreadsheetId: {
													type: 'string',
													description:
														'The ID of the Google Sheets spreadsheet that contains the source chart.',
												},
												chartId: {
													type: 'number',
													description:
														'The ID of the specific chart in the Google Sheets spreadsheet that is embedded.',
												},
												sheetsChartProperties: {
													type: 'object',
													description:
														'The properties of the Sheets chart.',
													properties: {
														chartImageProperties: {
															type: 'object',
															description:
																'The properties of the embedded chart image.',
															properties: {
																shadow: {
																	type: 'object',
																	description:
																		'The shadow of the image. If not set, the image has no shadow. This property is read-only.',
																	properties: {
																		alpha: {
																			type: 'number',
																			description:
																				"The alpha of the shadow's color, from 0.0 to 1.0.",
																		},
																		transform: {
																			type: 'object',
																			description:
																				'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
																			properties: {
																				scaleX: {
																					type: 'number',
																					description:
																						'The X coordinate scaling element.',
																				},
																				shearX: {
																					type: 'number',
																					description:
																						'The X coordinate shearing element.',
																				},
																				translateX: {
																					type: 'number',
																					description:
																						'The X coordinate translation element.',
																				},
																				scaleY: {
																					type: 'number',
																					description:
																						'The Y coordinate scaling element.',
																				},
																				translateY: {
																					type: 'number',
																					description:
																						'The Y coordinate translation element.',
																				},
																				shearY: {
																					type: 'number',
																					description:
																						'The Y coordinate shearing element.',
																				},
																				unit: {
																					type: 'string',
																					description:
																						'The units for translate elements.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																			},
																			required: [],
																		},
																		alignment: {
																			type: 'string',
																			description:
																				'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
																			default: '',
																			enum: [
																				'',
																				'RECTANGLE_POSITION_UNSPECIFIED',
																				'TOP_LEFT',
																				'TOP_CENTER',
																				'TOP_RIGHT',
																				'LEFT_CENTER',
																				'CENTER',
																				'RIGHT_CENTER',
																				'BOTTOM_LEFT',
																				'BOTTOM_CENTER',
																				'BOTTOM_RIGHT',
																			],
																		},
																		type: {
																			type: 'string',
																			description:
																				'The type of the shadow. This property is read-only.',
																			default: '',
																			enum: [
																				'',
																				'SHADOW_TYPE_UNSPECIFIED',
																				'OUTER',
																			],
																		},
																		rotateWithShape: {
																			type: 'boolean',
																			description:
																				'Whether the shadow should rotate with the shape. This property is read-only.',
																		},
																		propertyState: {
																			type: 'string',
																			description:
																				'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
																			default: '',
																			enum: [
																				'',
																				'RENDERED',
																				'NOT_RENDERED',
																				'INHERIT',
																			],
																		},
																		color: {
																			type: 'object',
																			description:
																				'The shadow color value.',
																			properties: {
																				rgbColor: {
																					type: 'object',
																					description:
																						'An opaque RGB color.',
																					properties: {
																						red: {
																							type: 'number',
																							description:
																								'The red component of the color, from 0.0 to 1.0.',
																						},
																						blue: {
																							type: 'number',
																							description:
																								'The blue component of the color, from 0.0 to 1.0.',
																						},
																						green: {
																							type: 'number',
																							description:
																								'The green component of the color, from 0.0 to 1.0.',
																						},
																					},
																					required: [],
																				},
																				themeColor: {
																					type: 'string',
																					description:
																						'An opaque theme color.',
																					default: '',
																					enum: [
																						'',
																						'THEME_COLOR_TYPE_UNSPECIFIED',
																						'DARK1',
																						'LIGHT1',
																						'DARK2',
																						'LIGHT2',
																						'ACCENT1',
																						'ACCENT2',
																						'ACCENT3',
																						'ACCENT4',
																						'ACCENT5',
																						'ACCENT6',
																						'HYPERLINK',
																						'FOLLOWED_HYPERLINK',
																						'TEXT1',
																						'BACKGROUND1',
																						'TEXT2',
																						'BACKGROUND2',
																					],
																				},
																			},
																			required: [],
																		},
																		blurRadius: {
																			type: 'object',
																			description:
																				'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																cropProperties: {
																	type: 'object',
																	description:
																		'The crop properties of the image. If not set, the image is not cropped. This property is read-only.',
																	properties: {
																		rightOffset: {
																			type: 'number',
																			description:
																				"The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.",
																		},
																		bottomOffset: {
																			type: 'number',
																			description:
																				"The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.",
																		},
																		angle: {
																			type: 'number',
																			description:
																				'The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.',
																		},
																		leftOffset: {
																			type: 'number',
																			description:
																				"The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.",
																		},
																		topOffset: {
																			type: 'number',
																			description:
																				"The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.",
																		},
																	},
																	required: [],
																},
																recolor: {
																	type: 'object',
																	description:
																		'The recolor effect of the image. If not set, the image is not recolored. This property is read-only.',
																	properties: {
																		name: {
																			type: 'string',
																			description:
																				"The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.",
																			default: '',
																			enum: [
																				'',
																				'NONE',
																				'LIGHT1',
																				'LIGHT2',
																				'LIGHT3',
																				'LIGHT4',
																				'LIGHT5',
																				'LIGHT6',
																				'LIGHT7',
																				'LIGHT8',
																				'LIGHT9',
																				'LIGHT10',
																				'DARK1',
																				'DARK2',
																				'DARK3',
																				'DARK4',
																				'DARK5',
																				'DARK6',
																				'DARK7',
																				'DARK8',
																				'DARK9',
																				'DARK10',
																				'GRAYSCALE',
																				'NEGATIVE',
																				'SEPIA',
																				'CUSTOM',
																			],
																		},
																		recolorStops: {
																			type: 'array',
																			description:
																				'The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.',
																			items: {
																				type: 'object',
																				description:
																					'A color and position in a gradient band.',
																				properties: {
																					position: {
																						type: 'number',
																						description:
																							'The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].',
																					},
																					alpha: {
																						type: 'number',
																						description:
																							'The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.',
																					},
																					color: {
																						type: 'object',
																						description:
																							'The color of the gradient stop.',
																						properties:
																							{
																								rgbColor:
																									{
																										type: 'object',
																										description:
																											'An opaque RGB color.',
																										properties:
																											{
																												red: {
																													type: 'number',
																													description:
																														'The red component of the color, from 0.0 to 1.0.',
																												},
																												blue: {
																													type: 'number',
																													description:
																														'The blue component of the color, from 0.0 to 1.0.',
																												},
																												green: {
																													type: 'number',
																													description:
																														'The green component of the color, from 0.0 to 1.0.',
																												},
																											},
																										required:
																											[],
																									},
																								themeColor:
																									{
																										type: 'string',
																										description:
																											'An opaque theme color.',
																										default:
																											'',
																										enum: [
																											'',
																											'THEME_COLOR_TYPE_UNSPECIFIED',
																											'DARK1',
																											'LIGHT1',
																											'DARK2',
																											'LIGHT2',
																											'ACCENT1',
																											'ACCENT2',
																											'ACCENT3',
																											'ACCENT4',
																											'ACCENT5',
																											'ACCENT6',
																											'HYPERLINK',
																											'FOLLOWED_HYPERLINK',
																											'TEXT1',
																											'BACKGROUND1',
																											'TEXT2',
																											'BACKGROUND2',
																										],
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
																outline: {
																	type: 'object',
																	description:
																		'The outline of the image. If not set, the image has no outline.',
																	properties: {
																		dashStyle: {
																			type: 'string',
																			description:
																				'The dash style of the outline.',
																			default: '',
																			enum: [
																				'',
																				'DASH_STYLE_UNSPECIFIED',
																				'SOLID',
																				'DOT',
																				'DASH',
																				'DASH_DOT',
																				'LONG_DASH',
																				'LONG_DASH_DOT',
																			],
																		},
																		outlineFill: {
																			type: 'object',
																			description:
																				'The fill of the outline.',
																			properties: {
																				solidFill: {
																					type: 'object',
																					description:
																						'Solid color fill.',
																					properties: {
																						color: {
																							type: 'object',
																							description:
																								'The color value of the solid fill.',
																							properties:
																								{
																									rgbColor:
																										{
																											type: 'object',
																											description:
																												'An opaque RGB color.',
																											properties:
																												{
																													red: {
																														type: 'number',
																														description:
																															'The red component of the color, from 0.0 to 1.0.',
																													},
																													blue: {
																														type: 'number',
																														description:
																															'The blue component of the color, from 0.0 to 1.0.',
																													},
																													green: {
																														type: 'number',
																														description:
																															'The green component of the color, from 0.0 to 1.0.',
																													},
																												},
																											required:
																												[],
																										},
																									themeColor:
																										{
																											type: 'string',
																											description:
																												'An opaque theme color.',
																											default:
																												'',
																											enum: [
																												'',
																												'THEME_COLOR_TYPE_UNSPECIFIED',
																												'DARK1',
																												'LIGHT1',
																												'DARK2',
																												'LIGHT2',
																												'ACCENT1',
																												'ACCENT2',
																												'ACCENT3',
																												'ACCENT4',
																												'ACCENT5',
																												'ACCENT6',
																												'HYPERLINK',
																												'FOLLOWED_HYPERLINK',
																												'TEXT1',
																												'BACKGROUND1',
																												'TEXT2',
																												'BACKGROUND2',
																											],
																										},
																								},
																							required:
																								[],
																						},
																						alpha: {
																							type: 'number',
																							description:
																								'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		weight: {
																			type: 'object',
																			description:
																				'The thickness of the outline.',
																			properties: {
																				unit: {
																					type: 'string',
																					description:
																						'The units for magnitude.',
																					default: '',
																					enum: [
																						'',
																						'UNIT_UNSPECIFIED',
																						'EMU',
																						'PT',
																					],
																				},
																				magnitude: {
																					type: 'number',
																					description:
																						'The magnitude.',
																				},
																			},
																			required: [],
																		},
																		propertyState: {
																			type: 'string',
																			description:
																				'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																			default: '',
																			enum: [
																				'',
																				'RENDERED',
																				'NOT_RENDERED',
																				'INHERIT',
																			],
																		},
																	},
																	required: [],
																},
																link: {
																	type: 'object',
																	description:
																		'The hyperlink destination of the image. If unset, there is no link.',
																	properties: {
																		slideIndex: {
																			type: 'number',
																			description:
																				'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																		},
																		url: {
																			type: 'string',
																			description:
																				'If set, indicates this is a link to the external web page at this URL.',
																		},
																		pageObjectId: {
																			type: 'string',
																			description:
																				'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																		},
																		relativeLink: {
																			type: 'string',
																			description:
																				'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																			default: '',
																			enum: [
																				'',
																				'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																				'NEXT_SLIDE',
																				'PREVIOUS_SLIDE',
																				'FIRST_SLIDE',
																				'LAST_SLIDE',
																			],
																		},
																	},
																	required: [],
																},
																transparency: {
																	type: 'number',
																	description:
																		'The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.',
																},
																brightness: {
																	type: 'number',
																	description:
																		'The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
																},
																contrast: {
																	type: 'number',
																	description:
																		'The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
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
										wordArt: {
											type: 'object',
											description: 'A word art page element.',
											properties: {
												renderedText: {
													type: 'string',
													description: 'The text rendered as word art.',
												},
											},
											required: [],
										},
										image: {
											type: 'object',
											description: 'An image page element.',
											properties: {
												placeholder: {
													type: 'object',
													description:
														'Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the image is a placeholder image and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.',
													properties: {
														index: {
															type: 'number',
															description:
																'The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.',
														},
														type: {
															type: 'string',
															description:
																'The type of the placeholder.',
															default: '',
															enum: [
																'',
																'NONE',
																'BODY',
																'CHART',
																'CLIP_ART',
																'CENTERED_TITLE',
																'DIAGRAM',
																'DATE_AND_TIME',
																'FOOTER',
																'HEADER',
																'MEDIA',
																'OBJECT',
																'PICTURE',
																'SLIDE_NUMBER',
																'SUBTITLE',
																'TABLE',
																'TITLE',
																'SLIDE_IMAGE',
															],
														},
														parentObjectId: {
															type: 'string',
															description:
																"The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.",
														},
													},
													required: [],
												},
												imageProperties: {
													type: 'object',
													description: 'The properties of the image.',
													properties: {
														shadow: {
															type: 'object',
															description:
																'The shadow of the image. If not set, the image has no shadow. This property is read-only.',
															properties: {
																alpha: {
																	type: 'number',
																	description:
																		"The alpha of the shadow's color, from 0.0 to 1.0.",
																},
																transform: {
																	type: 'object',
																	description:
																		'Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.',
																	properties: {
																		scaleX: {
																			type: 'number',
																			description:
																				'The X coordinate scaling element.',
																		},
																		shearX: {
																			type: 'number',
																			description:
																				'The X coordinate shearing element.',
																		},
																		translateX: {
																			type: 'number',
																			description:
																				'The X coordinate translation element.',
																		},
																		scaleY: {
																			type: 'number',
																			description:
																				'The Y coordinate scaling element.',
																		},
																		translateY: {
																			type: 'number',
																			description:
																				'The Y coordinate translation element.',
																		},
																		shearY: {
																			type: 'number',
																			description:
																				'The Y coordinate shearing element.',
																		},
																		unit: {
																			type: 'string',
																			description:
																				'The units for translate elements.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																	},
																	required: [],
																},
																alignment: {
																	type: 'string',
																	description:
																		'The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'RECTANGLE_POSITION_UNSPECIFIED',
																		'TOP_LEFT',
																		'TOP_CENTER',
																		'TOP_RIGHT',
																		'LEFT_CENTER',
																		'CENTER',
																		'RIGHT_CENTER',
																		'BOTTOM_LEFT',
																		'BOTTOM_CENTER',
																		'BOTTOM_RIGHT',
																	],
																},
																type: {
																	type: 'string',
																	description:
																		'The type of the shadow. This property is read-only.',
																	default: '',
																	enum: [
																		'',
																		'SHADOW_TYPE_UNSPECIFIED',
																		'OUTER',
																	],
																},
																rotateWithShape: {
																	type: 'boolean',
																	description:
																		'Whether the shadow should rotate with the shape. This property is read-only.',
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
																color: {
																	type: 'object',
																	description:
																		'The shadow color value.',
																	properties: {
																		rgbColor: {
																			type: 'object',
																			description:
																				'An opaque RGB color.',
																			properties: {
																				red: {
																					type: 'number',
																					description:
																						'The red component of the color, from 0.0 to 1.0.',
																				},
																				blue: {
																					type: 'number',
																					description:
																						'The blue component of the color, from 0.0 to 1.0.',
																				},
																				green: {
																					type: 'number',
																					description:
																						'The green component of the color, from 0.0 to 1.0.',
																				},
																			},
																			required: [],
																		},
																		themeColor: {
																			type: 'string',
																			description:
																				'An opaque theme color.',
																			default: '',
																			enum: [
																				'',
																				'THEME_COLOR_TYPE_UNSPECIFIED',
																				'DARK1',
																				'LIGHT1',
																				'DARK2',
																				'LIGHT2',
																				'ACCENT1',
																				'ACCENT2',
																				'ACCENT3',
																				'ACCENT4',
																				'ACCENT5',
																				'ACCENT6',
																				'HYPERLINK',
																				'FOLLOWED_HYPERLINK',
																				'TEXT1',
																				'BACKGROUND1',
																				'TEXT2',
																				'BACKGROUND2',
																			],
																		},
																	},
																	required: [],
																},
																blurRadius: {
																	type: 'object',
																	description:
																		'The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														cropProperties: {
															type: 'object',
															description:
																'The crop properties of the image. If not set, the image is not cropped. This property is read-only.',
															properties: {
																rightOffset: {
																	type: 'number',
																	description:
																		"The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.",
																},
																bottomOffset: {
																	type: 'number',
																	description:
																		"The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.",
																},
																angle: {
																	type: 'number',
																	description:
																		'The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.',
																},
																leftOffset: {
																	type: 'number',
																	description:
																		"The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.",
																},
																topOffset: {
																	type: 'number',
																	description:
																		"The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.",
																},
															},
															required: [],
														},
														recolor: {
															type: 'object',
															description:
																'The recolor effect of the image. If not set, the image is not recolored. This property is read-only.',
															properties: {
																name: {
																	type: 'string',
																	description:
																		"The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.",
																	default: '',
																	enum: [
																		'',
																		'NONE',
																		'LIGHT1',
																		'LIGHT2',
																		'LIGHT3',
																		'LIGHT4',
																		'LIGHT5',
																		'LIGHT6',
																		'LIGHT7',
																		'LIGHT8',
																		'LIGHT9',
																		'LIGHT10',
																		'DARK1',
																		'DARK2',
																		'DARK3',
																		'DARK4',
																		'DARK5',
																		'DARK6',
																		'DARK7',
																		'DARK8',
																		'DARK9',
																		'DARK10',
																		'GRAYSCALE',
																		'NEGATIVE',
																		'SEPIA',
																		'CUSTOM',
																	],
																},
																recolorStops: {
																	type: 'array',
																	description:
																		'The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.',
																	items: {
																		type: 'object',
																		description:
																			'A color and position in a gradient band.',
																		properties: {
																			position: {
																				type: 'number',
																				description:
																					'The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].',
																			},
																			alpha: {
																				type: 'number',
																				description:
																					'The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.',
																			},
																			color: {
																				type: 'object',
																				description:
																					'The color of the gradient stop.',
																				properties: {
																					rgbColor: {
																						type: 'object',
																						description:
																							'An opaque RGB color.',
																						properties:
																							{
																								red: {
																									type: 'number',
																									description:
																										'The red component of the color, from 0.0 to 1.0.',
																								},
																								blue: {
																									type: 'number',
																									description:
																										'The blue component of the color, from 0.0 to 1.0.',
																								},
																								green: {
																									type: 'number',
																									description:
																										'The green component of the color, from 0.0 to 1.0.',
																								},
																							},
																						required:
																							[],
																					},
																					themeColor: {
																						type: 'string',
																						description:
																							'An opaque theme color.',
																						default: '',
																						enum: [
																							'',
																							'THEME_COLOR_TYPE_UNSPECIFIED',
																							'DARK1',
																							'LIGHT1',
																							'DARK2',
																							'LIGHT2',
																							'ACCENT1',
																							'ACCENT2',
																							'ACCENT3',
																							'ACCENT4',
																							'ACCENT5',
																							'ACCENT6',
																							'HYPERLINK',
																							'FOLLOWED_HYPERLINK',
																							'TEXT1',
																							'BACKGROUND1',
																							'TEXT2',
																							'BACKGROUND2',
																						],
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
														outline: {
															type: 'object',
															description:
																'The outline of the image. If not set, the image has no outline.',
															properties: {
																dashStyle: {
																	type: 'string',
																	description:
																		'The dash style of the outline.',
																	default: '',
																	enum: [
																		'',
																		'DASH_STYLE_UNSPECIFIED',
																		'SOLID',
																		'DOT',
																		'DASH',
																		'DASH_DOT',
																		'LONG_DASH',
																		'LONG_DASH_DOT',
																	],
																},
																outlineFill: {
																	type: 'object',
																	description:
																		'The fill of the outline.',
																	properties: {
																		solidFill: {
																			type: 'object',
																			description:
																				'Solid color fill.',
																			properties: {
																				color: {
																					type: 'object',
																					description:
																						'The color value of the solid fill.',
																					properties: {
																						rgbColor: {
																							type: 'object',
																							description:
																								'An opaque RGB color.',
																							properties:
																								{
																									red: {
																										type: 'number',
																										description:
																											'The red component of the color, from 0.0 to 1.0.',
																									},
																									blue: {
																										type: 'number',
																										description:
																											'The blue component of the color, from 0.0 to 1.0.',
																									},
																									green: {
																										type: 'number',
																										description:
																											'The green component of the color, from 0.0 to 1.0.',
																									},
																								},
																							required:
																								[],
																						},
																						themeColor:
																							{
																								type: 'string',
																								description:
																									'An opaque theme color.',
																								default:
																									'',
																								enum: [
																									'',
																									'THEME_COLOR_TYPE_UNSPECIFIED',
																									'DARK1',
																									'LIGHT1',
																									'DARK2',
																									'LIGHT2',
																									'ACCENT1',
																									'ACCENT2',
																									'ACCENT3',
																									'ACCENT4',
																									'ACCENT5',
																									'ACCENT6',
																									'HYPERLINK',
																									'FOLLOWED_HYPERLINK',
																									'TEXT1',
																									'BACKGROUND1',
																									'TEXT2',
																									'BACKGROUND2',
																								],
																							},
																					},
																					required: [],
																				},
																				alpha: {
																					type: 'number',
																					description:
																						'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
																				},
																			},
																			required: [],
																		},
																	},
																	required: [],
																},
																weight: {
																	type: 'object',
																	description:
																		'The thickness of the outline.',
																	properties: {
																		unit: {
																			type: 'string',
																			description:
																				'The units for magnitude.',
																			default: '',
																			enum: [
																				'',
																				'UNIT_UNSPECIFIED',
																				'EMU',
																				'PT',
																			],
																		},
																		magnitude: {
																			type: 'number',
																			description:
																				'The magnitude.',
																		},
																	},
																	required: [],
																},
																propertyState: {
																	type: 'string',
																	description:
																		'The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.',
																	default: '',
																	enum: [
																		'',
																		'RENDERED',
																		'NOT_RENDERED',
																		'INHERIT',
																	],
																},
															},
															required: [],
														},
														link: {
															type: 'object',
															description:
																'The hyperlink destination of the image. If unset, there is no link.',
															properties: {
																slideIndex: {
																	type: 'number',
																	description:
																		'If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.',
																},
																url: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the external web page at this URL.',
																},
																pageObjectId: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.',
																},
																relativeLink: {
																	type: 'string',
																	description:
																		'If set, indicates this is a link to a slide in this presentation, addressed by its position.',
																	default: '',
																	enum: [
																		'',
																		'RELATIVE_SLIDE_LINK_UNSPECIFIED',
																		'NEXT_SLIDE',
																		'PREVIOUS_SLIDE',
																		'FIRST_SLIDE',
																		'LAST_SLIDE',
																	],
																},
															},
															required: [],
														},
														transparency: {
															type: 'number',
															description:
																'The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.',
														},
														brightness: {
															type: 'number',
															description:
																'The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
														},
														contrast: {
															type: 'number',
															description:
																'The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.',
														},
													},
													required: [],
												},
												contentUrl: {
													type: 'string',
													description:
														"An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.",
												},
												sourceUrl: {
													type: 'string',
													description:
														'The source URL is the URL used to insert the image. The source URL can be empty.',
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
				layouts: {
					type: 'array',
					description:
						'The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout. Nested pageElements match the Page resource from Get a page; they are omitted here because they duplicate the slides[].pageElements schema.',
					items: {
						type: 'object',
						description: 'A page in a presentation.',
						properties: {
							objectId: {
								type: 'string',
								description:
									'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
							},
							layoutProperties: {
								type: 'object',
								description:
									'Layout specific properties. Only set if page_type = LAYOUT.',
								properties: {
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this layout is based on.',
									},
									name: {
										type: 'string',
										description: 'The name of the layout.',
									},
									displayName: {
										type: 'string',
										description: 'The human-readable name of the layout.',
									},
								},
								required: [],
							},
							masterProperties: {
								type: 'object',
								description:
									'Master specific properties. Only set if page_type = MASTER.',
								properties: {
									displayName: {
										type: 'string',
										description: 'The human-readable name of the master.',
									},
								},
								required: [],
							},
							pageType: {
								type: 'string',
								description: 'The type of the page.',
								default: '',
								enum: ['', 'SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'],
							},
							notesProperties: {
								type: 'object',
								description:
									'Notes specific properties. Only set if page_type = NOTES.',
								properties: {
									speakerNotesObjectId: {
										type: 'string',
										description:
											'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
									},
								},
								required: [],
							},
							slideProperties: {
								type: 'object',
								description:
									'Slide specific properties. Only set if page_type = SLIDE.',
								properties: {
									notesPage: {
										type: 'object',
										description:
											'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
										properties: {
											objectId: {
												type: 'string',
												description:
													'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
											},
											pageType: {
												type: 'string',
												description: 'The type of the page.',
												default: '',
												enum: [
													'',
													'SLIDE',
													'MASTER',
													'LAYOUT',
													'NOTES',
													'NOTES_MASTER',
												],
											},
										},
										required: [],
									},
									layoutObjectId: {
										type: 'string',
										description:
											'The object ID of the layout that this slide is based on. This property is read-only.',
									},
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this slide is based on. This property is read-only.',
									},
									isSkipped: {
										type: 'boolean',
										description:
											'Whether the slide is skipped in the presentation mode. Defaults to false.',
									},
								},
								required: [],
							},
							pageProperties: {
								type: 'object',
								description: 'The properties of the page.',
								properties: {
									pageBackgroundFill: {
										type: 'object',
										description:
											'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
										properties: {
											solidFill: {
												type: 'object',
												description: 'Solid color fill.',
												properties: {
													color: {
														type: 'object',
														description:
															'The color value of the solid fill.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'THEME_COLOR_TYPE_UNSPECIFIED',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
													alpha: {
														type: 'number',
														description:
															'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
													},
												},
												required: [],
											},
											stretchedPictureFill: {
												type: 'object',
												description: 'Stretched picture fill.',
												properties: {
													contentUrl: {
														type: 'string',
														description:
															"Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
													},
													size: {
														type: 'object',
														description:
															'The original size of the picture fill. This field is read-only.',
														properties: {
															width: {
																type: 'object',
																description:
																	'The width of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
															height: {
																type: 'object',
																description:
																	'The height of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
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
											propertyState: {
												type: 'string',
												description:
													'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
												default: '',
												enum: ['', 'RENDERED', 'NOT_RENDERED', 'INHERIT'],
											},
										},
										required: [],
									},
									colorScheme: {
										type: 'object',
										description:
											'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
										properties: {
											colors: {
												type: 'array',
												description:
													'The ThemeColorType and corresponding concrete color pairs.',
												items: {
													type: 'object',
													description:
														'A pair mapping a theme color type to the concrete color it represents.',
													properties: {
														color: {
															type: 'object',
															description:
																'The concrete color corresponding to the theme color type above.',
															properties: {
																red: {
																	type: 'number',
																	description:
																		'The red component of the color, from 0.0 to 1.0.',
																},
																blue: {
																	type: 'number',
																	description:
																		'The blue component of the color, from 0.0 to 1.0.',
																},
																green: {
																	type: 'number',
																	description:
																		'The green component of the color, from 0.0 to 1.0.',
																},
															},
															required: [],
														},
														type: {
															type: 'string',
															description:
																'The type of the theme color.',
															default: '',
															enum: [
																'',
																'THEME_COLOR_TYPE_UNSPECIFIED',
																'DARK1',
																'LIGHT1',
																'DARK2',
																'LIGHT2',
																'ACCENT1',
																'ACCENT2',
																'ACCENT3',
																'ACCENT4',
																'ACCENT5',
																'ACCENT6',
																'HYPERLINK',
																'FOLLOWED_HYPERLINK',
																'TEXT1',
																'BACKGROUND1',
																'TEXT2',
																'BACKGROUND2',
															],
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
							revisionId: {
								type: 'string',
								description:
									"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
							},
						},
						required: [],
					},
				},
				presentationId: { type: 'string', description: 'The ID of the presentation.' },
				revisionId: {
					type: 'string',
					description:
						"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
				},
				notesMaster: {
					type: 'object',
					description:
						'The notes master in the presentation. It serves three purposes: - Placeholder shapes on a notes master contain the default text styles and shape properties of all placeholder shapes on notes pages. Specifically, a `SLIDE_IMAGE` placeholder shape contains the slide thumbnail, and a `BODY` placeholder shape contains the speaker notes. - The notes master page properties define the common page properties inherited by all notes pages. - Any other shapes on the notes master appear on all notes pages. The notes master is read-only. Nested pageElements match the Page resource from Get a page; they are omitted here because they duplicate the slides[].pageElements schema.',
					properties: {
						objectId: {
							type: 'string',
							description:
								'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
						},
						layoutProperties: {
							type: 'object',
							description:
								'Layout specific properties. Only set if page_type = LAYOUT.',
							properties: {
								masterObjectId: {
									type: 'string',
									description:
										'The object ID of the master that this layout is based on.',
								},
								name: { type: 'string', description: 'The name of the layout.' },
								displayName: {
									type: 'string',
									description: 'The human-readable name of the layout.',
								},
							},
							required: [],
						},
						masterProperties: {
							type: 'object',
							description:
								'Master specific properties. Only set if page_type = MASTER.',
							properties: {
								displayName: {
									type: 'string',
									description: 'The human-readable name of the master.',
								},
							},
							required: [],
						},
						pageType: {
							type: 'string',
							description: 'The type of the page.',
							default: '',
							enum: ['', 'SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'],
						},
						notesProperties: {
							type: 'object',
							description:
								'Notes specific properties. Only set if page_type = NOTES.',
							properties: {
								speakerNotesObjectId: {
									type: 'string',
									description:
										'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
								},
							},
							required: [],
						},
						slideProperties: {
							type: 'object',
							description:
								'Slide specific properties. Only set if page_type = SLIDE.',
							properties: {
								notesPage: {
									type: 'object',
									description:
										'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
									properties: {
										objectId: {
											type: 'string',
											description:
												'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
										},
										pageType: {
											type: 'string',
											description: 'The type of the page.',
											default: '',
											enum: [
												'',
												'SLIDE',
												'MASTER',
												'LAYOUT',
												'NOTES',
												'NOTES_MASTER',
											],
										},
									},
									required: [],
								},
								layoutObjectId: {
									type: 'string',
									description:
										'The object ID of the layout that this slide is based on. This property is read-only.',
								},
								masterObjectId: {
									type: 'string',
									description:
										'The object ID of the master that this slide is based on. This property is read-only.',
								},
								isSkipped: {
									type: 'boolean',
									description:
										'Whether the slide is skipped in the presentation mode. Defaults to false.',
								},
							},
							required: [],
						},
						pageProperties: {
							type: 'object',
							description: 'The properties of the page.',
							properties: {
								pageBackgroundFill: {
									type: 'object',
									description:
										'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
									properties: {
										solidFill: {
											type: 'object',
											description: 'Solid color fill.',
											properties: {
												color: {
													type: 'object',
													description:
														'The color value of the solid fill.',
													properties: {
														rgbColor: {
															type: 'object',
															description: 'An opaque RGB color.',
															properties: {
																red: {
																	type: 'number',
																	description:
																		'The red component of the color, from 0.0 to 1.0.',
																},
																blue: {
																	type: 'number',
																	description:
																		'The blue component of the color, from 0.0 to 1.0.',
																},
																green: {
																	type: 'number',
																	description:
																		'The green component of the color, from 0.0 to 1.0.',
																},
															},
															required: [],
														},
														themeColor: {
															type: 'string',
															description: 'An opaque theme color.',
															default: '',
															enum: [
																'',
																'THEME_COLOR_TYPE_UNSPECIFIED',
																'DARK1',
																'LIGHT1',
																'DARK2',
																'LIGHT2',
																'ACCENT1',
																'ACCENT2',
																'ACCENT3',
																'ACCENT4',
																'ACCENT5',
																'ACCENT6',
																'HYPERLINK',
																'FOLLOWED_HYPERLINK',
																'TEXT1',
																'BACKGROUND1',
																'TEXT2',
																'BACKGROUND2',
															],
														},
													},
													required: [],
												},
												alpha: {
													type: 'number',
													description:
														'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
												},
											},
											required: [],
										},
										stretchedPictureFill: {
											type: 'object',
											description: 'Stretched picture fill.',
											properties: {
												contentUrl: {
													type: 'string',
													description:
														"Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
												},
												size: {
													type: 'object',
													description:
														'The original size of the picture fill. This field is read-only.',
													properties: {
														width: {
															type: 'object',
															description: 'The width of the object.',
															properties: {
																unit: {
																	type: 'string',
																	description:
																		'The units for magnitude.',
																	default: '',
																	enum: [
																		'',
																		'UNIT_UNSPECIFIED',
																		'EMU',
																		'PT',
																	],
																},
																magnitude: {
																	type: 'number',
																	description: 'The magnitude.',
																},
															},
															required: [],
														},
														height: {
															type: 'object',
															description:
																'The height of the object.',
															properties: {
																unit: {
																	type: 'string',
																	description:
																		'The units for magnitude.',
																	default: '',
																	enum: [
																		'',
																		'UNIT_UNSPECIFIED',
																		'EMU',
																		'PT',
																	],
																},
																magnitude: {
																	type: 'number',
																	description: 'The magnitude.',
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
										propertyState: {
											type: 'string',
											description:
												'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
											default: '',
											enum: ['', 'RENDERED', 'NOT_RENDERED', 'INHERIT'],
										},
									},
									required: [],
								},
								colorScheme: {
									type: 'object',
									description:
										'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
									properties: {
										colors: {
											type: 'array',
											description:
												'The ThemeColorType and corresponding concrete color pairs.',
											items: {
												type: 'object',
												description:
													'A pair mapping a theme color type to the concrete color it represents.',
												properties: {
													color: {
														type: 'object',
														description:
															'The concrete color corresponding to the theme color type above.',
														properties: {
															red: {
																type: 'number',
																description:
																	'The red component of the color, from 0.0 to 1.0.',
															},
															blue: {
																type: 'number',
																description:
																	'The blue component of the color, from 0.0 to 1.0.',
															},
															green: {
																type: 'number',
																description:
																	'The green component of the color, from 0.0 to 1.0.',
															},
														},
														required: [],
													},
													type: {
														type: 'string',
														description: 'The type of the theme color.',
														default: '',
														enum: [
															'',
															'THEME_COLOR_TYPE_UNSPECIFIED',
															'DARK1',
															'LIGHT1',
															'DARK2',
															'LIGHT2',
															'ACCENT1',
															'ACCENT2',
															'ACCENT3',
															'ACCENT4',
															'ACCENT5',
															'ACCENT6',
															'HYPERLINK',
															'FOLLOWED_HYPERLINK',
															'TEXT1',
															'BACKGROUND1',
															'TEXT2',
															'BACKGROUND2',
														],
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
						revisionId: {
							type: 'string',
							description:
								"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
						},
					},
					required: [],
				},
				masters: {
					type: 'array',
					description:
						'The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master. - The master page properties define the common page properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master, regardless of their layout. Nested pageElements match the Page resource from Get a page; they are omitted here because they duplicate the slides[].pageElements schema.',
					items: {
						type: 'object',
						description: 'A page in a presentation.',
						properties: {
							objectId: {
								type: 'string',
								description:
									'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
							},
							layoutProperties: {
								type: 'object',
								description:
									'Layout specific properties. Only set if page_type = LAYOUT.',
								properties: {
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this layout is based on.',
									},
									name: {
										type: 'string',
										description: 'The name of the layout.',
									},
									displayName: {
										type: 'string',
										description: 'The human-readable name of the layout.',
									},
								},
								required: [],
							},
							masterProperties: {
								type: 'object',
								description:
									'Master specific properties. Only set if page_type = MASTER.',
								properties: {
									displayName: {
										type: 'string',
										description: 'The human-readable name of the master.',
									},
								},
								required: [],
							},
							pageType: {
								type: 'string',
								description: 'The type of the page.',
								default: '',
								enum: ['', 'SLIDE', 'MASTER', 'LAYOUT', 'NOTES', 'NOTES_MASTER'],
							},
							notesProperties: {
								type: 'object',
								description:
									'Notes specific properties. Only set if page_type = NOTES.',
								properties: {
									speakerNotesObjectId: {
										type: 'string',
										description:
											'The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.',
									},
								},
								required: [],
							},
							slideProperties: {
								type: 'object',
								description:
									'Slide specific properties. Only set if page_type = SLIDE.',
								properties: {
									notesPage: {
										type: 'object',
										description:
											'The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.',
										properties: {
											objectId: {
												type: 'string',
												description:
													'The object ID for this page. Object IDs used by Page and PageElement share the same namespace.',
											},
											pageType: {
												type: 'string',
												description: 'The type of the page.',
												default: '',
												enum: [
													'',
													'SLIDE',
													'MASTER',
													'LAYOUT',
													'NOTES',
													'NOTES_MASTER',
												],
											},
										},
										required: [],
									},
									layoutObjectId: {
										type: 'string',
										description:
											'The object ID of the layout that this slide is based on. This property is read-only.',
									},
									masterObjectId: {
										type: 'string',
										description:
											'The object ID of the master that this slide is based on. This property is read-only.',
									},
									isSkipped: {
										type: 'boolean',
										description:
											'Whether the slide is skipped in the presentation mode. Defaults to false.',
									},
								},
								required: [],
							},
							pageProperties: {
								type: 'object',
								description: 'The properties of the page.',
								properties: {
									pageBackgroundFill: {
										type: 'object',
										description:
											'The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.',
										properties: {
											solidFill: {
												type: 'object',
												description: 'Solid color fill.',
												properties: {
													color: {
														type: 'object',
														description:
															'The color value of the solid fill.',
														properties: {
															rgbColor: {
																type: 'object',
																description: 'An opaque RGB color.',
																properties: {
																	red: {
																		type: 'number',
																		description:
																			'The red component of the color, from 0.0 to 1.0.',
																	},
																	blue: {
																		type: 'number',
																		description:
																			'The blue component of the color, from 0.0 to 1.0.',
																	},
																	green: {
																		type: 'number',
																		description:
																			'The green component of the color, from 0.0 to 1.0.',
																	},
																},
																required: [],
															},
															themeColor: {
																type: 'string',
																description:
																	'An opaque theme color.',
																default: '',
																enum: [
																	'',
																	'THEME_COLOR_TYPE_UNSPECIFIED',
																	'DARK1',
																	'LIGHT1',
																	'DARK2',
																	'LIGHT2',
																	'ACCENT1',
																	'ACCENT2',
																	'ACCENT3',
																	'ACCENT4',
																	'ACCENT5',
																	'ACCENT6',
																	'HYPERLINK',
																	'FOLLOWED_HYPERLINK',
																	'TEXT1',
																	'BACKGROUND1',
																	'TEXT2',
																	'BACKGROUND2',
																],
															},
														},
														required: [],
													},
													alpha: {
														type: 'number',
														description:
															'The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.',
													},
												},
												required: [],
											},
											stretchedPictureFill: {
												type: 'object',
												description: 'Stretched picture fill.',
												properties: {
													contentUrl: {
														type: 'string',
														description:
															"Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.",
													},
													size: {
														type: 'object',
														description:
															'The original size of the picture fill. This field is read-only.',
														properties: {
															width: {
																type: 'object',
																description:
																	'The width of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
																	},
																},
																required: [],
															},
															height: {
																type: 'object',
																description:
																	'The height of the object.',
																properties: {
																	unit: {
																		type: 'string',
																		description:
																			'The units for magnitude.',
																		default: '',
																		enum: [
																			'',
																			'UNIT_UNSPECIFIED',
																			'EMU',
																			'PT',
																		],
																	},
																	magnitude: {
																		type: 'number',
																		description:
																			'The magnitude.',
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
											propertyState: {
												type: 'string',
												description:
													'The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.',
												default: '',
												enum: ['', 'RENDERED', 'NOT_RENDERED', 'INHERIT'],
											},
										},
										required: [],
									},
									colorScheme: {
										type: 'object',
										description:
											'The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.',
										properties: {
											colors: {
												type: 'array',
												description:
													'The ThemeColorType and corresponding concrete color pairs.',
												items: {
													type: 'object',
													description:
														'A pair mapping a theme color type to the concrete color it represents.',
													properties: {
														color: {
															type: 'object',
															description:
																'The concrete color corresponding to the theme color type above.',
															properties: {
																red: {
																	type: 'number',
																	description:
																		'The red component of the color, from 0.0 to 1.0.',
																},
																blue: {
																	type: 'number',
																	description:
																		'The blue component of the color, from 0.0 to 1.0.',
																},
																green: {
																	type: 'number',
																	description:
																		'The green component of the color, from 0.0 to 1.0.',
																},
															},
															required: [],
														},
														type: {
															type: 'string',
															description:
																'The type of the theme color.',
															default: '',
															enum: [
																'',
																'THEME_COLOR_TYPE_UNSPECIFIED',
																'DARK1',
																'LIGHT1',
																'DARK2',
																'LIGHT2',
																'ACCENT1',
																'ACCENT2',
																'ACCENT3',
																'ACCENT4',
																'ACCENT5',
																'ACCENT6',
																'HYPERLINK',
																'FOLLOWED_HYPERLINK',
																'TEXT1',
																'BACKGROUND1',
																'TEXT2',
																'BACKGROUND2',
															],
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
							revisionId: {
								type: 'string',
								description:
									"Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.",
							},
						},
						required: [],
					},
				},
				pageSize: {
					type: 'object',
					description: 'The size of pages in the presentation.',
					properties: {
						width: {
							type: 'object',
							description: 'The width of the object.',
							properties: {
								unit: {
									type: 'string',
									description: 'The units for magnitude.',
									default: '',
									enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
								},
								magnitude: { type: 'number', description: 'The magnitude.' },
							},
							required: [],
						},
						height: {
							type: 'object',
							description: 'The height of the object.',
							properties: {
								unit: {
									type: 'string',
									description: 'The units for magnitude.',
									default: '',
									enum: ['', 'UNIT_UNSPECIFIED', 'EMU', 'PT'],
								},
								magnitude: { type: 'number', description: 'The magnitude.' },
							},
							required: [],
						},
					},
					required: [],
				},
				locale: {
					type: 'string',
					description: 'The locale of the presentation, as an IETF BCP 47 language tag.',
				},
			},
			required: [],
		},
	},
];
