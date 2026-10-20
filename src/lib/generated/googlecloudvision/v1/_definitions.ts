// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'googlecloudvision',
		appVersion: 1,
		endpointName: 'annotateFiles',
		label: 'Annotate files',
		description:
			'Runs Google Cloud Vision detection features on pages of a PDF, TIFF or GIF file.',
		context:
			"---\nname: annotateFiles\ndescription: Runs Google Cloud Vision detection features on pages of a PDF, TIFF or GIF file.\n---\n\nWraps a single call to [`files:annotate`](https://cloud.google.com/vision/docs/reference/rest/v1/files/annotate). It is synchronous, read-only analysis: nothing in the Vision project is created or changed. For plain images use the `annotateImages` endpoint instead.\n\n**Input**\n- `requests` currently supports exactly one item (one file) per call.\n- Provide the file either as base64 `inputConfig.content` or as `inputConfig.gcsSource.uri` (a `gs://bucket/object` Cloud Storage URI; a public HTTP/HTTPS URL is not accepted here). Also set `inputConfig.mimeType` to `application/pdf`, `image/tiff` or `image/gif`.\n- Per the [quotas](https://cloud.google.com/vision/quotas), a PDF can be at most 1 GB, the JSON request at most 10 MB, and a call processes at most 5 pages. Base64 is about 37% larger than the original file, so large files should be passed by Cloud Storage URI.\n- `pages` selects the pages to process (1-based; negative numbers count from the end, `-1` is the last page; for GIF, pages are frames). If empty, the first 5 pages are processed. To read a longer document, call the endpoint again with the next set of pages and use `totalPages` from the output to know when to stop.\n- `features` lists the detection types to run on every selected page. For documents use `DOCUMENT_TEXT_DETECTION`; `TEXT_DETECTION` is meant for text inside a larger image. If both are present, `DOCUMENT_TEXT_DETECTION` takes precedence.\n- `parent` (`projects/{project-id}/locations/{location-id}`, location `us`, `asia` or `eu`) pins processing to a region; leave it empty to let Google choose.\n- Leave out optional fields you do not need instead of sending empty values.\n\n**Output**\n- `responses` has one item per request. Inside it, `responses` has one item per processed page, with `context.pageNumber` giving the page, and `totalPages` gives the page count of the whole file.\n- Each page item contains only the annotations for the requested features (for example `fullTextAnnotation` and `textAnnotations` for text detection).\n- Errors: a file-level failure makes the whole call fail with an error that carries that failure's message, and no `responses` are returned. A failure on a single page is reported in that page item's `error` object (`code`, `message`) while the call still returns HTTP 200. Handle both cases, and check `error` on every page item.\n\nAuthentication is the connection's API key, sent automatically as the `key` query parameter.",
		accounts: { googlecloudvision: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				requests: {
					type: 'array',
					description:
						'The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest.',
					items: {
						type: 'object',
						description:
							'A request to annotate one single file, e.g. a PDF, TIFF or GIF file.',
						properties: {
							inputConfig: {
								type: 'object',
								description: 'Information about the input file.',
								properties: {
									mimeType: {
										type: 'string',
										description:
											'The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.',
										default: '',
										enum: ['', 'application/pdf', 'image/tiff', 'image/gif'],
									},
									gcsSource: {
										type: 'object',
										description:
											'The Google Cloud Storage location to read the input from.',
										properties: {
											uri: {
												type: 'string',
												description:
													'Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.',
											},
										},
										required: [],
									},
									content: {
										type: 'string',
										description:
											'The base64-encoded file bytes. Provide either this or the Google Cloud Storage source URI.',
									},
								},
								required: [],
							},
							features: {
								type: 'array',
								description: 'Requested features.',
								items: {
									type: 'object',
									description:
										'The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.',
									properties: {
										type: {
											type: 'string',
											description: 'The feature type.',
											enum: [
												'FACE_DETECTION',
												'LANDMARK_DETECTION',
												'LOGO_DETECTION',
												'LABEL_DETECTION',
												'TEXT_DETECTION',
												'DOCUMENT_TEXT_DETECTION',
												'SAFE_SEARCH_DETECTION',
												'IMAGE_PROPERTIES',
												'CROP_HINTS',
												'WEB_DETECTION',
												'PRODUCT_SEARCH',
												'OBJECT_LOCALIZATION',
											],
										},
										maxResults: {
											type: 'number',
											description:
												'Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.',
										},
										model: {
											type: 'string',
											description:
												'Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/rc" for the latest release candidate.',
											default: '',
											enum: [
												'',
												'builtin/stable',
												'builtin/latest',
												'builtin/rc',
											],
										},
									},
									required: ['type'],
								},
							},
							pages: {
								type: 'array',
								description:
									'Pages of the file to perform image annotation. Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative. Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page. If the file is GIF instead of PDF or TIFF, page refers to GIF frames. If this field is empty, by default the service performs image annotation for the first 5 pages of the file.',
								items: { type: 'number', description: 'A single page.' },
							},
							imageContext: {
								type: 'object',
								description:
									'Additional context that may accompany the image(s) in the file.',
								properties: {
									languageHints: {
										type: 'array',
										description:
											'List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages).',
										items: {
											type: 'string',
											description: 'A single language hint.',
										},
									},
									textDetectionParams: {
										type: 'object',
										description:
											'Parameters for text detection and document text detection.',
										properties: {
											enableTextDetectionConfidenceScore: {
												type: 'boolean',
												description:
													'By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well.',
											},
											advancedOcrOptions: {
												type: 'array',
												description:
													'A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation.',
												items: {
													type: 'string',
													description: 'An advanced OCR option.',
													default: '',
													enum: ['', 'legacy_layout'],
												},
											},
										},
										required: [],
									},
									cropHintsParams: {
										type: 'object',
										description:
											'Parameters for crop hints annotation request.',
										properties: {
											aspectRatios: {
												type: 'array',
												description:
													'Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored.',
												items: {
													type: 'number',
													description: 'A single aspect ratio.',
												},
											},
										},
										required: [],
									},
									webDetectionParams: {
										type: 'object',
										description: 'Parameters for web detection.',
										properties: {
											includeGeoResults: {
												type: 'boolean',
												description: 'This field has no effect on results.',
											},
										},
										required: [],
									},
									productSearchParams: {
										type: 'object',
										description: 'Parameters for product search.',
										properties: {
											boundingPoly: {
												type: 'object',
												description:
													'The bounding polygon around the area of interest in the image. If it is not specified, system discretion will be applied.',
												properties: {
													vertices: {
														type: 'array',
														description:
															'The bounding polygon vertices.',
														items: {
															type: 'object',
															description:
																'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
															properties: {
																y: {
																	type: 'number',
																	description: 'Y coordinate.',
																},
																x: {
																	type: 'number',
																	description: 'X coordinate.',
																},
															},
															required: [],
														},
													},
													normalizedVertices: {
														type: 'array',
														description:
															'The bounding polygon normalized vertices.',
														items: {
															type: 'object',
															description:
																'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
															properties: {
																x: {
																	type: 'number',
																	description: 'X coordinate.',
																},
																y: {
																	type: 'number',
																	description: 'Y coordinate.',
																},
															},
															required: [],
														},
													},
												},
												required: [],
											},
											productSet: {
												type: 'string',
												description:
													'The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.',
											},
											productCategories: {
												type: 'array',
												description:
													'The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified.',
												items: {
													type: 'string',
													description: 'A product category to search in.',
													default: '',
													enum: [
														'',
														'homegoods-v2',
														'apparel-v2',
														'toys-v2',
														'packagedgoods-v1',
														'general-v1',
													],
												},
											},
											filter: {
												type: 'string',
												description:
													'The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An \'=\' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a \':\' instead of an \'=\'.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: ['inputConfig', 'features'],
					},
				},
				parent: {
					type: 'string',
					description:
						'Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
				},
				labels: {
					type: 'array',
					description:
						'The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.',
					items: {
						type: 'object',
						description: 'A user-defined metadata label.',
						properties: {
							key: {
								type: 'string',
								description:
									'The label key. It must start with a letter and can contain only lowercase letters, numeric characters, underscores and dashes.',
							},
							value: {
								type: 'string',
								description:
									'The label value. It can contain only lowercase letters, numeric characters, underscores and dashes.',
							},
						},
						required: [],
					},
				},
			},
			required: ['requests'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				responses: {
					type: 'array',
					description:
						'The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.',
					items: {
						type: 'object',
						description: 'Response to a single file annotation request.',
						properties: {
							error: {
								type: 'object',
								description:
									'If set, represents the error message for the failed request.',
								properties: {
									code: {
										type: 'number',
										description:
											'The status code, which should be an enum value of google.rpc.Code.',
									},
									message: {
										type: 'string',
										description:
											'A developer-facing error message, which should be in English.',
									},
									details: {
										type: 'array',
										description:
											'A list of messages that carry the error details.',
										items: {
											type: 'object',
											description: 'A single detail.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
								},
								required: [],
							},
							responses: {
								type: 'array',
								description:
									'Individual responses to images found within the file.',
								items: {
									type: 'object',
									description: 'Response to an image annotation request.',
									properties: {
										faceAnnotations: {
											type: 'array',
											description:
												'If present, face detection has completed successfully.',
											items: {
												type: 'object',
												description:
													'A face annotation object contains the results of face detection.',
												properties: {
													landmarks: {
														type: 'array',
														description: 'Detected face landmarks.',
														items: {
															type: 'object',
															description:
																'A face-specific landmark (for example, a face feature).',
															properties: {
																position: {
																	type: 'object',
																	description:
																		'Face landmark position.',
																	properties: {
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																		z: {
																			type: 'number',
																			description:
																				'Z coordinate (or depth).',
																		},
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
																		},
																	},
																	required: [],
																},
																type: {
																	type: 'string',
																	description:
																		'Face landmark type.',
																	default: '',
																	enum: [
																		'',
																		'UNKNOWN_LANDMARK',
																		'LEFT_EYE',
																		'RIGHT_EYE',
																		'LEFT_OF_LEFT_EYEBROW',
																		'RIGHT_OF_LEFT_EYEBROW',
																		'LEFT_OF_RIGHT_EYEBROW',
																		'RIGHT_OF_RIGHT_EYEBROW',
																		'MIDPOINT_BETWEEN_EYES',
																		'NOSE_TIP',
																		'UPPER_LIP',
																		'LOWER_LIP',
																		'MOUTH_LEFT',
																		'MOUTH_RIGHT',
																		'MOUTH_CENTER',
																		'NOSE_BOTTOM_RIGHT',
																		'NOSE_BOTTOM_LEFT',
																		'NOSE_BOTTOM_CENTER',
																		'LEFT_EYE_TOP_BOUNDARY',
																		'LEFT_EYE_RIGHT_CORNER',
																		'LEFT_EYE_BOTTOM_BOUNDARY',
																		'LEFT_EYE_LEFT_CORNER',
																		'RIGHT_EYE_TOP_BOUNDARY',
																		'RIGHT_EYE_RIGHT_CORNER',
																		'RIGHT_EYE_BOTTOM_BOUNDARY',
																		'RIGHT_EYE_LEFT_CORNER',
																		'LEFT_EYEBROW_UPPER_MIDPOINT',
																		'RIGHT_EYEBROW_UPPER_MIDPOINT',
																		'LEFT_EAR_TRAGION',
																		'RIGHT_EAR_TRAGION',
																		'LEFT_EYE_PUPIL',
																		'RIGHT_EYE_PUPIL',
																		'FOREHEAD_GLABELLA',
																		'CHIN_GNATHION',
																		'CHIN_LEFT_GONION',
																		'CHIN_RIGHT_GONION',
																		'LEFT_CHEEK_CENTER',
																		'RIGHT_CHEEK_CENTER',
																	],
																},
															},
															required: [],
														},
													},
													sorrowLikelihood: {
														type: 'string',
														description: 'Sorrow likelihood.',
														default: '',
														enum: [
															'',
															'UNKNOWN',
															'VERY_UNLIKELY',
															'UNLIKELY',
															'POSSIBLE',
															'LIKELY',
															'VERY_LIKELY',
														],
													},
													panAngle: {
														type: 'number',
														description:
															'Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image.',
													},
													surpriseLikelihood: {
														type: 'string',
														description: 'Surprise likelihood.',
														default: '',
														enum: [
															'',
															'UNKNOWN',
															'VERY_UNLIKELY',
															'UNLIKELY',
															'POSSIBLE',
															'LIKELY',
															'VERY_LIKELY',
														],
													},
													fdBoundingPoly: {
														type: 'object',
														description:
															'The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face.',
														properties: {
															vertices: {
																type: 'array',
																description:
																	'The bounding polygon vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
																		},
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																	},
																	required: [],
																},
															},
															normalizedVertices: {
																type: 'array',
																description:
																	'The bounding polygon normalized vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
																		},
																	},
																	required: [],
																},
															},
														},
														required: [],
													},
													landmarkingConfidence: {
														type: 'number',
														description: 'Face landmarking confidence.',
													},
													tiltAngle: {
														type: 'number',
														description:
															"Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane.",
													},
													joyLikelihood: {
														type: 'string',
														description: 'Joy likelihood.',
														default: '',
														enum: [
															'',
															'UNKNOWN',
															'VERY_UNLIKELY',
															'UNLIKELY',
															'POSSIBLE',
															'LIKELY',
															'VERY_LIKELY',
														],
													},
													detectionConfidence: {
														type: 'number',
														description:
															'Detection confidence. Range [0, 1].',
													},
													rollAngle: {
														type: 'number',
														description:
															'Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face.',
													},
													underExposedLikelihood: {
														type: 'string',
														description: 'Under-exposed likelihood.',
														default: '',
														enum: [
															'',
															'UNKNOWN',
															'VERY_UNLIKELY',
															'UNLIKELY',
															'POSSIBLE',
															'LIKELY',
															'VERY_LIKELY',
														],
													},
													angerLikelihood: {
														type: 'string',
														description: 'Anger likelihood.',
														default: '',
														enum: [
															'',
															'UNKNOWN',
															'VERY_UNLIKELY',
															'UNLIKELY',
															'POSSIBLE',
															'LIKELY',
															'VERY_LIKELY',
														],
													},
													headwearLikelihood: {
														type: 'string',
														description: 'Headwear likelihood.',
														default: '',
														enum: [
															'',
															'UNKNOWN',
															'VERY_UNLIKELY',
															'UNLIKELY',
															'POSSIBLE',
															'LIKELY',
															'VERY_LIKELY',
														],
													},
													blurredLikelihood: {
														type: 'string',
														description: 'Blurred likelihood.',
														default: '',
														enum: [
															'',
															'UNKNOWN',
															'VERY_UNLIKELY',
															'UNLIKELY',
															'POSSIBLE',
															'LIKELY',
															'VERY_LIKELY',
														],
													},
													boundingPoly: {
														type: 'object',
														description:
															'The bounding polygon around the face.',
														properties: {
															vertices: {
																type: 'array',
																description:
																	'The bounding polygon vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
																		},
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																	},
																	required: [],
																},
															},
															normalizedVertices: {
																type: 'array',
																description:
																	'The bounding polygon normalized vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
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
										labelAnnotations: {
											type: 'array',
											description:
												'If present, label detection has completed successfully.',
											items: {
												type: 'object',
												description: 'Set of detected entity features.',
												properties: {
													score: {
														type: 'number',
														description: 'Overall score of the result.',
													},
													topicality: {
														type: 'number',
														description:
															'The relevancy of the ICA (Image Content Annotation) label to the image.',
													},
													locations: {
														type: 'array',
														description:
															'The location information for the detected entity.',
														items: {
															type: 'object',
															description:
																'Detected entity location information.',
															properties: {
																latLng: {
																	type: 'object',
																	description:
																		'lat/long location coordinates.',
																	properties: {
																		latitude: {
																			type: 'number',
																			description:
																				'The latitude in degrees. It must be in the range [-90.0, +90.0].',
																		},
																		longitude: {
																			type: 'number',
																			description:
																				'The longitude in degrees.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
													},
													mid: {
														type: 'string',
														description:
															'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
													},
													properties: {
														type: 'array',
														description:
															'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
														items: {
															type: 'object',
															description:
																'A `Property` consists of a user-supplied name/value pair.',
															properties: {
																name: {
																	type: 'string',
																	description:
																		'Name of the property.',
																},
																value: {
																	type: 'string',
																	description:
																		'Value of the property.',
																},
																uint64Value: {
																	type: 'string',
																	description:
																		'Value of numeric properties.',
																},
															},
															required: [],
														},
													},
													description: {
														type: 'string',
														description:
															'Entity textual description, expressed in its `locale` language.',
													},
													locale: {
														type: 'string',
														description:
															'The language code for the locale in which the entity textual `description` is expressed.',
													},
													boundingPoly: {
														type: 'object',
														description:
															'Image region to which this entity belongs.',
														properties: {
															vertices: {
																type: 'array',
																description:
																	'The bounding polygon vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
																		},
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																	},
																	required: [],
																},
															},
															normalizedVertices: {
																type: 'array',
																description:
																	'The bounding polygon normalized vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
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
										productSearchResults: {
											type: 'object',
											description:
												'If present, product search has completed successfully.',
											properties: {
												indexTime: {
													type: 'string',
													description:
														'Timestamp of the index which provided these results.',
												},
												productGroupedResults: {
													type: 'array',
													description:
														'List of results grouped by products detected in the query image.',
													items: {
														type: 'object',
														description:
															'Information about the products similar to a single product in a query image.',
														properties: {
															boundingPoly: {
																type: 'object',
																description:
																	'The bounding polygon around the product detected in the query image.',
																properties: {
																	vertices: {
																		type: 'array',
																		description:
																			'The bounding polygon vertices.',
																		items: {
																			type: 'object',
																			description:
																				'A vertex represents a 2D point in the image.',
																			properties: {
																				y: {
																					type: 'number',
																					description:
																						'Y coordinate.',
																				},
																				x: {
																					type: 'number',
																					description:
																						'X coordinate.',
																				},
																			},
																			required: [],
																		},
																	},
																	normalizedVertices: {
																		type: 'array',
																		description:
																			'The bounding polygon normalized vertices.',
																		items: {
																			type: 'object',
																			description:
																				'A vertex represents a 2D point in the image.',
																			properties: {
																				x: {
																					type: 'number',
																					description:
																						'X coordinate.',
																				},
																				y: {
																					type: 'number',
																					description:
																						'Y coordinate.',
																				},
																			},
																			required: [],
																		},
																	},
																},
																required: [],
															},
															objectAnnotations: {
																type: 'array',
																description:
																	'List of generic predictions for the object in the bounding box.',
																items: {
																	type: 'object',
																	description:
																		'Prediction for what the object in the bounding box is.',
																	properties: {
																		languageCode: {
																			type: 'string',
																			description:
																				'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																		},
																		mid: {
																			type: 'string',
																			description:
																				'Object ID that should align with EntityAnnotation mid.',
																		},
																		name: {
																			type: 'string',
																			description:
																				'Object name, expressed in its `language_code` language.',
																		},
																		score: {
																			type: 'number',
																			description:
																				'Score of the result. Range [0, 1].',
																		},
																	},
																	required: [],
																},
															},
															results: {
																type: 'array',
																description:
																	'List of results, one for each product match.',
																items: {
																	type: 'object',
																	description:
																		'Information about a product.',
																	properties: {
																		product: {
																			type: 'object',
																			description:
																				'The Product.',
																			properties: {
																				description: {
																					type: 'string',
																					description:
																						'User-provided metadata to be stored with this product.',
																				},
																				productCategory: {
																					type: 'string',
																					description:
																						'Immutable. The category for the product identified by the reference image.',
																				},
																				name: {
																					type: 'string',
																					description:
																						'The resource name of the product.',
																				},
																				productLabels: {
																					type: 'array',
																					description:
																						'Key-value pairs that can be attached to a product.',
																					items: {
																						type: 'object',
																						description:
																							'A product label represented as a key-value pair.',
																						properties:
																							{
																								key: {
																									type: 'string',
																									description:
																										'The key of the label attached to the product.',
																								},
																								value: {
																									type: 'string',
																									description:
																										'The value of the label attached to the product.',
																								},
																							},
																						required:
																							[],
																					},
																				},
																				displayName: {
																					type: 'string',
																					description:
																						'The user-provided name for this Product.',
																				},
																			},
																			required: [],
																		},
																		image: {
																			type: 'string',
																			description:
																				'The resource name of the image from the product that is the closest match to the query.',
																		},
																		score: {
																			type: 'number',
																			description:
																				'A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).',
																		},
																	},
																	required: [],
																},
															},
														},
														required: [],
													},
												},
												results: {
													type: 'array',
													description:
														'List of results, one for each product match.',
													items: {
														type: 'object',
														description: 'Information about a product.',
														properties: {
															product: {
																type: 'object',
																description: 'The Product.',
																properties: {
																	description: {
																		type: 'string',
																		description:
																			'User-provided metadata to be stored with this product.',
																	},
																	productCategory: {
																		type: 'string',
																		description:
																			'Immutable. The category for the product identified by the reference image.',
																	},
																	name: {
																		type: 'string',
																		description:
																			'The resource name of the product.',
																	},
																	productLabels: {
																		type: 'array',
																		description:
																			'Key-value pairs that can be attached to a product.',
																		items: {
																			type: 'object',
																			description:
																				'A product label represented as a key-value pair.',
																			properties: {
																				key: {
																					type: 'string',
																					description:
																						'The key of the label attached to the product.',
																				},
																				value: {
																					type: 'string',
																					description:
																						'The value of the label attached to the product.',
																				},
																			},
																			required: [],
																		},
																	},
																	displayName: {
																		type: 'string',
																		description:
																			'The user-provided name for this Product.',
																	},
																},
																required: [],
															},
															image: {
																type: 'string',
																description:
																	'The resource name of the image from the product that is the closest match to the query.',
															},
															score: {
																type: 'number',
																description:
																	'A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).',
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
										context: {
											type: 'object',
											description:
												'If present, contextual information is needed to understand where this image comes from.',
											properties: {
												pageNumber: {
													type: 'number',
													description:
														'If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.',
												},
												uri: {
													type: 'string',
													description:
														'The URI of the file used to produce the image.',
												},
											},
											required: [],
										},
										logoAnnotations: {
											type: 'array',
											description:
												'If present, logo detection has completed successfully.',
											items: {
												type: 'object',
												description: 'Set of detected entity features.',
												properties: {
													score: {
														type: 'number',
														description: 'Overall score of the result.',
													},
													topicality: {
														type: 'number',
														description:
															'The relevancy of the ICA (Image Content Annotation) label to the image.',
													},
													locations: {
														type: 'array',
														description:
															'The location information for the detected entity.',
														items: {
															type: 'object',
															description:
																'Detected entity location information.',
															properties: {
																latLng: {
																	type: 'object',
																	description:
																		'lat/long location coordinates.',
																	properties: {
																		latitude: {
																			type: 'number',
																			description:
																				'The latitude in degrees. It must be in the range [-90.0, +90.0].',
																		},
																		longitude: {
																			type: 'number',
																			description:
																				'The longitude in degrees.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
													},
													mid: {
														type: 'string',
														description:
															'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
													},
													properties: {
														type: 'array',
														description:
															'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
														items: {
															type: 'object',
															description:
																'A `Property` consists of a user-supplied name/value pair.',
															properties: {
																name: {
																	type: 'string',
																	description:
																		'Name of the property.',
																},
																value: {
																	type: 'string',
																	description:
																		'Value of the property.',
																},
																uint64Value: {
																	type: 'string',
																	description:
																		'Value of numeric properties.',
																},
															},
															required: [],
														},
													},
													description: {
														type: 'string',
														description:
															'Entity textual description, expressed in its `locale` language.',
													},
													locale: {
														type: 'string',
														description:
															'The language code for the locale in which the entity textual `description` is expressed.',
													},
													boundingPoly: {
														type: 'object',
														description:
															'Image region to which this entity belongs.',
														properties: {
															vertices: {
																type: 'array',
																description:
																	'The bounding polygon vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
																		},
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																	},
																	required: [],
																},
															},
															normalizedVertices: {
																type: 'array',
																description:
																	'The bounding polygon normalized vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
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
										webDetection: {
											type: 'object',
											description:
												'If present, web detection has completed successfully.',
											properties: {
												partialMatchingImages: {
													type: 'array',
													description:
														'Partial matching images from the Internet.',
													items: {
														type: 'object',
														description: 'Metadata for online images.',
														properties: {
															url: {
																type: 'string',
																description:
																	'The result image URL.',
															},
														},
														required: [],
													},
												},
												visuallySimilarImages: {
													type: 'array',
													description:
														'The visually similar image results.',
													items: {
														type: 'object',
														description: 'Metadata for online images.',
														properties: {
															url: {
																type: 'string',
																description:
																	'The result image URL.',
															},
														},
														required: [],
													},
												},
												bestGuessLabels: {
													type: 'array',
													description:
														"The service's best guess as to the topic of the request image.",
													items: {
														type: 'object',
														description:
															'Label to provide extra metadata for the web detection.',
														properties: {
															label: {
																type: 'string',
																description:
																	'Label for extra metadata.',
															},
															languageCode: {
																type: 'string',
																description:
																	'The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".',
															},
														},
														required: [],
													},
												},
												webEntities: {
													type: 'array',
													description:
														'Deduced entities from similar images on the Internet.',
													items: {
														type: 'object',
														description:
															'Entity deduced from similar images on the Internet.',
														properties: {
															score: {
																type: 'number',
																description:
																	'Overall relevancy score for the entity.',
															},
															description: {
																type: 'string',
																description:
																	'Canonical description of the entity, in English.',
															},
															entityId: {
																type: 'string',
																description: 'Opaque entity ID.',
															},
														},
														required: [],
													},
												},
												pagesWithMatchingImages: {
													type: 'array',
													description:
														'Web pages containing the matching images from the Internet.',
													items: {
														type: 'object',
														description: 'Metadata for web pages.',
														properties: {
															partialMatchingImages: {
																type: 'array',
																description:
																	'Partial matching images on the page.',
																items: {
																	type: 'object',
																	description:
																		'Metadata for online images.',
																	properties: {
																		url: {
																			type: 'string',
																			description:
																				'The result image URL.',
																		},
																	},
																	required: [],
																},
															},
															url: {
																type: 'string',
																description:
																	'The result web page URL.',
															},
															fullMatchingImages: {
																type: 'array',
																description:
																	'Fully matching images on the page.',
																items: {
																	type: 'object',
																	description:
																		'Metadata for online images.',
																	properties: {
																		url: {
																			type: 'string',
																			description:
																				'The result image URL.',
																		},
																	},
																	required: [],
																},
															},
															pageTitle: {
																type: 'string',
																description:
																	'Title for the web page, may contain HTML markups.',
															},
														},
														required: [],
													},
												},
												fullMatchingImages: {
													type: 'array',
													description:
														'Fully matching images from the Internet.',
													items: {
														type: 'object',
														description: 'Metadata for online images.',
														properties: {
															url: {
																type: 'string',
																description:
																	'The result image URL.',
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
										cropHintsAnnotation: {
											type: 'object',
											description:
												'If present, crop hints have completed successfully.',
											properties: {
												cropHints: {
													type: 'array',
													description: 'Crop hint results.',
													items: {
														type: 'object',
														description:
															'Single crop hint that is used to generate a new crop when serving an image.',
														properties: {
															boundingPoly: {
																type: 'object',
																description:
																	'The bounding polygon for the crop region.',
																properties: {
																	vertices: {
																		type: 'array',
																		description:
																			'The bounding polygon vertices.',
																		items: {
																			type: 'object',
																			description:
																				'A vertex represents a 2D point in the image.',
																			properties: {
																				y: {
																					type: 'number',
																					description:
																						'Y coordinate.',
																				},
																				x: {
																					type: 'number',
																					description:
																						'X coordinate.',
																				},
																			},
																			required: [],
																		},
																	},
																	normalizedVertices: {
																		type: 'array',
																		description:
																			'The bounding polygon normalized vertices.',
																		items: {
																			type: 'object',
																			description:
																				'A vertex represents a 2D point in the image.',
																			properties: {
																				x: {
																					type: 'number',
																					description:
																						'X coordinate.',
																				},
																				y: {
																					type: 'number',
																					description:
																						'Y coordinate.',
																				},
																			},
																			required: [],
																		},
																	},
																},
																required: [],
															},
															confidence: {
																type: 'number',
																description:
																	'Confidence of this being a salient region.',
															},
															importanceFraction: {
																type: 'number',
																description:
																	'Fraction of importance of this salient region with respect to the original image.',
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
										localizedObjectAnnotations: {
											type: 'array',
											description:
												'If present, localized object detection has completed successfully.',
											items: {
												type: 'object',
												description:
													'Set of detected objects with bounding boxes.',
												properties: {
													languageCode: {
														type: 'string',
														description:
															'The BCP-47 language code, such as "en-US" or "sr-Latn".',
													},
													mid: {
														type: 'string',
														description:
															'Object ID that should align with EntityAnnotation mid.',
													},
													name: {
														type: 'string',
														description:
															'Object name, expressed in its `language_code` language.',
													},
													score: {
														type: 'number',
														description:
															'Score of the result. Range [0, 1].',
													},
													boundingPoly: {
														type: 'object',
														description:
															'Image region to which this object belongs.',
														properties: {
															vertices: {
																type: 'array',
																description:
																	'The bounding polygon vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
																		},
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																	},
																	required: [],
																},
															},
															normalizedVertices: {
																type: 'array',
																description:
																	'The bounding polygon normalized vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
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
										imagePropertiesAnnotation: {
											type: 'object',
											description:
												'If present, image properties were extracted successfully.',
											properties: {
												dominantColors: {
													type: 'object',
													description:
														'If present, dominant colors completed successfully.',
													properties: {
														colors: {
															type: 'array',
															description:
																'RGB color values with their score and pixel fraction.',
															items: {
																type: 'object',
																description:
																	'Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.',
																properties: {
																	color: {
																		type: 'object',
																		description:
																			'RGB components of the color.',
																		properties: {
																			alpha: {
																				type: 'number',
																				description:
																					'The fraction of this color that should be applied to the pixel.',
																			},
																			blue: {
																				type: 'number',
																				description:
																					'The amount of blue in the color as a value in the interval [0, 1].',
																			},
																			red: {
																				type: 'number',
																				description:
																					'The amount of red in the color as a value in the interval [0, 1].',
																			},
																			green: {
																				type: 'number',
																				description:
																					'The amount of green in the color as a value in the interval [0, 1].',
																			},
																		},
																		required: [],
																	},
																	pixelFraction: {
																		type: 'number',
																		description:
																			'The fraction of pixels the color occupies in the image.',
																	},
																	score: {
																		type: 'number',
																		description:
																			'Image-specific score for this color.',
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
										safeSearchAnnotation: {
											type: 'object',
											description:
												'If present, safe-search annotation has completed successfully.',
											properties: {
												racy: {
													type: 'string',
													description:
														'Likelihood that the request image contains racy content.',
													default: '',
													enum: [
														'',
														'UNKNOWN',
														'VERY_UNLIKELY',
														'UNLIKELY',
														'POSSIBLE',
														'LIKELY',
														'VERY_LIKELY',
													],
												},
												spoof: {
													type: 'string',
													description:
														"Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.",
													default: '',
													enum: [
														'',
														'UNKNOWN',
														'VERY_UNLIKELY',
														'UNLIKELY',
														'POSSIBLE',
														'LIKELY',
														'VERY_LIKELY',
													],
												},
												medical: {
													type: 'string',
													description:
														'Likelihood that this is a medical image.',
													default: '',
													enum: [
														'',
														'UNKNOWN',
														'VERY_UNLIKELY',
														'UNLIKELY',
														'POSSIBLE',
														'LIKELY',
														'VERY_LIKELY',
													],
												},
												adult: {
													type: 'string',
													description:
														'Represents the adult content likelihood for the image.',
													default: '',
													enum: [
														'',
														'UNKNOWN',
														'VERY_UNLIKELY',
														'UNLIKELY',
														'POSSIBLE',
														'LIKELY',
														'VERY_LIKELY',
													],
												},
												violence: {
													type: 'string',
													description:
														'Likelihood that this image contains violent content.',
													default: '',
													enum: [
														'',
														'UNKNOWN',
														'VERY_UNLIKELY',
														'UNLIKELY',
														'POSSIBLE',
														'LIKELY',
														'VERY_LIKELY',
													],
												},
											},
											required: [],
										},
										error: {
											type: 'object',
											description:
												'If set, represents the error message for the operation.',
											properties: {
												code: {
													type: 'number',
													description:
														'The status code, which should be an enum value of google.rpc.Code.',
												},
												message: {
													type: 'string',
													description:
														'A developer-facing error message, which should be in English.',
												},
												details: {
													type: 'array',
													description:
														'A list of messages that carry the error details.',
													items: {
														type: 'object',
														description: 'A single detail.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
											},
											required: [],
										},
										fullTextAnnotation: {
											type: 'object',
											description:
												'If present, text (OCR) detection or document (OCR) text detection has completed successfully.',
											properties: {
												pages: {
													type: 'array',
													description: 'List of pages detected by OCR.',
													items: {
														type: 'object',
														description: 'Detected page from OCR.',
														properties: {
															width: {
																type: 'number',
																description:
																	'Page width. For PDFs the unit is points.',
															},
															confidence: {
																type: 'number',
																description:
																	'Confidence of the OCR results on the page.',
															},
															property: {
																type: 'object',
																description:
																	'Additional information detected on the page.',
																properties: {
																	detectedLanguages: {
																		type: 'array',
																		description:
																			'A list of detected languages together with confidence.',
																		items: {
																			type: 'object',
																			description:
																				'Detected language for a structural component.',
																			properties: {
																				languageCode: {
																					type: 'string',
																					description:
																						'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																				},
																				confidence: {
																					type: 'number',
																					description:
																						'Confidence of detected language.',
																				},
																			},
																			required: [],
																		},
																	},
																	detectedBreak: {
																		type: 'object',
																		description:
																			'Detected start or end of a text segment.',
																		properties: {
																			isPrefix: {
																				type: 'boolean',
																				description:
																					'True if break prepends the element.',
																			},
																			type: {
																				type: 'string',
																				description:
																					'Detected break type.',
																				default: '',
																				enum: [
																					'',
																					'UNKNOWN',
																					'SPACE',
																					'SURE_SPACE',
																					'EOL_SURE_SPACE',
																					'HYPHEN',
																					'LINE_BREAK',
																				],
																			},
																		},
																		required: [],
																	},
																},
																required: [],
															},
															height: {
																type: 'number',
																description:
																	'Page height. For PDFs the unit is points.',
															},
															blocks: {
																type: 'array',
																description:
																	'List of blocks of text, images etc on this page.',
																items: {
																	type: 'object',
																	description:
																		'Logical element on the page.',
																	properties: {
																		paragraphs: {
																			type: 'array',
																			description:
																				'List of paragraphs in this block (if this blocks is of type text).',
																			items: {
																				type: 'object',
																				description:
																					'Structural unit of text representing a number of words in certain order.',
																				properties: {
																					property: {
																						type: 'object',
																						description:
																							'Additional information detected for the paragraph.',
																						properties:
																							{
																								detectedLanguages:
																									{
																										type: 'array',
																										description:
																											'A list of detected languages together with confidence.',
																										items: {
																											type: 'object',
																											description:
																												'Detected language for a structural component.',
																											properties:
																												{
																													languageCode:
																														{
																															type: 'string',
																															description:
																																'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																														},
																													confidence:
																														{
																															type: 'number',
																															description:
																																'Confidence of detected language.',
																														},
																												},
																											required:
																												[],
																										},
																									},
																								detectedBreak:
																									{
																										type: 'object',
																										description:
																											'Detected start or end of a text segment.',
																										properties:
																											{
																												isPrefix:
																													{
																														type: 'boolean',
																														description:
																															'True if break prepends the element.',
																													},
																												type: {
																													type: 'string',
																													description:
																														'Detected break type.',
																													default:
																														'',
																													enum: [
																														'',
																														'UNKNOWN',
																														'SPACE',
																														'SURE_SPACE',
																														'EOL_SURE_SPACE',
																														'HYPHEN',
																														'LINE_BREAK',
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
																					confidence: {
																						type: 'number',
																						description:
																							'Confidence of the OCR results for the paragraph.',
																					},
																					boundingBox: {
																						type: 'object',
																						description:
																							'The bounding box for the paragraph.',
																						properties:
																							{
																								vertices:
																									{
																										type: 'array',
																										description:
																											'The bounding polygon vertices.',
																										items: {
																											type: 'object',
																											description:
																												'A vertex represents a 2D point in the image.',
																											properties:
																												{
																													y: {
																														type: 'number',
																														description:
																															'Y coordinate.',
																													},
																													x: {
																														type: 'number',
																														description:
																															'X coordinate.',
																													},
																												},
																											required:
																												[],
																										},
																									},
																								normalizedVertices:
																									{
																										type: 'array',
																										description:
																											'The bounding polygon normalized vertices.',
																										items: {
																											type: 'object',
																											description:
																												'A vertex represents a 2D point in the image.',
																											properties:
																												{
																													x: {
																														type: 'number',
																														description:
																															'X coordinate.',
																													},
																													y: {
																														type: 'number',
																														description:
																															'Y coordinate.',
																													},
																												},
																											required:
																												[],
																										},
																									},
																							},
																						required:
																							[],
																					},
																					words: {
																						type: 'array',
																						description:
																							'List of all words in this paragraph.',
																						items: {
																							type: 'object',
																							description:
																								'A word representation.',
																							properties:
																								{
																									property:
																										{
																											type: 'object',
																											description:
																												'Additional information detected for the word.',
																											properties:
																												{
																													detectedLanguages:
																														{
																															type: 'array',
																															description:
																																'A list of detected languages together with confidence.',
																															items: {
																																type: 'object',
																																description:
																																	'Detected language for a structural component.',
																																properties:
																																	{
																																		languageCode:
																																			{
																																				type: 'string',
																																				description:
																																					'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																																			},
																																		confidence:
																																			{
																																				type: 'number',
																																				description:
																																					'Confidence of detected language.',
																																			},
																																	},
																																required:
																																	[],
																															},
																														},
																													detectedBreak:
																														{
																															type: 'object',
																															description:
																																'Detected start or end of a text segment.',
																															properties:
																																{
																																	isPrefix:
																																		{
																																			type: 'boolean',
																																			description:
																																				'True if break prepends the element.',
																																		},
																																	type: {
																																		type: 'string',
																																		description:
																																			'Detected break type.',
																																		default:
																																			'',
																																		enum: [
																																			'',
																																			'UNKNOWN',
																																			'SPACE',
																																			'SURE_SPACE',
																																			'EOL_SURE_SPACE',
																																			'HYPHEN',
																																			'LINE_BREAK',
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
																									symbols:
																										{
																											type: 'array',
																											description:
																												'List of symbols in the word.',
																											items: {
																												type: 'object',
																												description:
																													'A single symbol representation.',
																												properties:
																													{
																														property:
																															{
																																type: 'object',
																																description:
																																	'Additional information detected for the symbol.',
																																properties:
																																	{
																																		detectedLanguages:
																																			{
																																				type: 'array',
																																				description:
																																					'A list of detected languages together with confidence.',
																																				items: {
																																					type: 'object',
																																					description:
																																						'Detected language for a structural component.',
																																					properties:
																																						{
																																							languageCode:
																																								{
																																									type: 'string',
																																									description:
																																										'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																																								},
																																							confidence:
																																								{
																																									type: 'number',
																																									description:
																																										'Confidence of detected language.',
																																								},
																																						},
																																					required:
																																						[],
																																				},
																																			},
																																		detectedBreak:
																																			{
																																				type: 'object',
																																				description:
																																					'Detected start or end of a text segment.',
																																				properties:
																																					{
																																						isPrefix:
																																							{
																																								type: 'boolean',
																																								description:
																																									'True if break prepends the element.',
																																							},
																																						type: {
																																							type: 'string',
																																							description:
																																								'Detected break type.',
																																							default:
																																								'',
																																							enum: [
																																								'',
																																								'UNKNOWN',
																																								'SPACE',
																																								'SURE_SPACE',
																																								'EOL_SURE_SPACE',
																																								'HYPHEN',
																																								'LINE_BREAK',
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
																														confidence:
																															{
																																type: 'number',
																																description:
																																	'Confidence of the OCR results for the symbol.',
																															},
																														boundingBox:
																															{
																																type: 'object',
																																description:
																																	'The bounding box for the symbol.',
																																properties:
																																	{
																																		vertices:
																																			{
																																				type: 'array',
																																				description:
																																					'The bounding polygon vertices.',
																																				items: {
																																					type: 'object',
																																					description:
																																						'A vertex represents a 2D point in the image.',
																																					properties:
																																						{
																																							y: {
																																								type: 'number',
																																								description:
																																									'Y coordinate.',
																																							},
																																							x: {
																																								type: 'number',
																																								description:
																																									'X coordinate.',
																																							},
																																						},
																																					required:
																																						[],
																																				},
																																			},
																																		normalizedVertices:
																																			{
																																				type: 'array',
																																				description:
																																					'The bounding polygon normalized vertices.',
																																				items: {
																																					type: 'object',
																																					description:
																																						'A vertex represents a 2D point in the image.',
																																					properties:
																																						{
																																							x: {
																																								type: 'number',
																																								description:
																																									'X coordinate.',
																																							},
																																							y: {
																																								type: 'number',
																																								description:
																																									'Y coordinate.',
																																							},
																																						},
																																					required:
																																						[],
																																				},
																																			},
																																	},
																																required:
																																	[],
																															},
																														text: {
																															type: 'string',
																															description:
																																'The actual UTF-8 representation of the symbol.',
																														},
																													},
																												required:
																													[],
																											},
																										},
																									boundingBox:
																										{
																											type: 'object',
																											description:
																												'The bounding box for the word.',
																											properties:
																												{
																													vertices:
																														{
																															type: 'array',
																															description:
																																'The bounding polygon vertices.',
																															items: {
																																type: 'object',
																																description:
																																	'A vertex represents a 2D point in the image.',
																																properties:
																																	{
																																		y: {
																																			type: 'number',
																																			description:
																																				'Y coordinate.',
																																		},
																																		x: {
																																			type: 'number',
																																			description:
																																				'X coordinate.',
																																		},
																																	},
																																required:
																																	[],
																															},
																														},
																													normalizedVertices:
																														{
																															type: 'array',
																															description:
																																'The bounding polygon normalized vertices.',
																															items: {
																																type: 'object',
																																description:
																																	'A vertex represents a 2D point in the image.',
																																properties:
																																	{
																																		x: {
																																			type: 'number',
																																			description:
																																				'X coordinate.',
																																		},
																																		y: {
																																			type: 'number',
																																			description:
																																				'Y coordinate.',
																																		},
																																	},
																																required:
																																	[],
																															},
																														},
																												},
																											required:
																												[],
																										},
																									confidence:
																										{
																											type: 'number',
																											description:
																												'Confidence of the OCR results for the word.',
																										},
																								},
																							required:
																								[],
																						},
																					},
																				},
																				required: [],
																			},
																		},
																		confidence: {
																			type: 'number',
																			description:
																				'Confidence of the OCR results on the block.',
																		},
																		blockType: {
																			type: 'string',
																			description:
																				'Detected block type (text, image etc) for this block.',
																			default: '',
																			enum: [
																				'',
																				'UNKNOWN',
																				'TEXT',
																				'TABLE',
																				'PICTURE',
																				'RULER',
																				'BARCODE',
																			],
																		},
																		property: {
																			type: 'object',
																			description:
																				'Additional information detected for the block.',
																			properties: {
																				detectedLanguages: {
																					type: 'array',
																					description:
																						'A list of detected languages together with confidence.',
																					items: {
																						type: 'object',
																						description:
																							'Detected language for a structural component.',
																						properties:
																							{
																								languageCode:
																									{
																										type: 'string',
																										description:
																											'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																									},
																								confidence:
																									{
																										type: 'number',
																										description:
																											'Confidence of detected language.',
																									},
																							},
																						required:
																							[],
																					},
																				},
																				detectedBreak: {
																					type: 'object',
																					description:
																						'Detected start or end of a text segment.',
																					properties: {
																						isPrefix: {
																							type: 'boolean',
																							description:
																								'True if break prepends the element.',
																						},
																						type: {
																							type: 'string',
																							description:
																								'Detected break type.',
																							default:
																								'',
																							enum: [
																								'',
																								'UNKNOWN',
																								'SPACE',
																								'SURE_SPACE',
																								'EOL_SURE_SPACE',
																								'HYPHEN',
																								'LINE_BREAK',
																							],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		boundingBox: {
																			type: 'object',
																			description:
																				'The bounding box for the block.',
																			properties: {
																				vertices: {
																					type: 'array',
																					description:
																						'The bounding polygon vertices.',
																					items: {
																						type: 'object',
																						description:
																							'A vertex represents a 2D point in the image.',
																						properties:
																							{
																								y: {
																									type: 'number',
																									description:
																										'Y coordinate.',
																								},
																								x: {
																									type: 'number',
																									description:
																										'X coordinate.',
																								},
																							},
																						required:
																							[],
																					},
																				},
																				normalizedVertices:
																					{
																						type: 'array',
																						description:
																							'The bounding polygon normalized vertices.',
																						items: {
																							type: 'object',
																							description:
																								'A vertex represents a 2D point in the image.',
																							properties:
																								{
																									x: {
																										type: 'number',
																										description:
																											'X coordinate.',
																									},
																									y: {
																										type: 'number',
																										description:
																											'Y coordinate.',
																									},
																								},
																							required:
																								[],
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
												text: {
													type: 'string',
													description:
														'UTF-8 text detected on the pages.',
												},
											},
											required: [],
										},
										landmarkAnnotations: {
											type: 'array',
											description:
												'If present, landmark detection has completed successfully.',
											items: {
												type: 'object',
												description: 'Set of detected entity features.',
												properties: {
													score: {
														type: 'number',
														description: 'Overall score of the result.',
													},
													topicality: {
														type: 'number',
														description:
															'The relevancy of the ICA (Image Content Annotation) label to the image.',
													},
													locations: {
														type: 'array',
														description:
															'The location information for the detected entity.',
														items: {
															type: 'object',
															description:
																'Detected entity location information.',
															properties: {
																latLng: {
																	type: 'object',
																	description:
																		'lat/long location coordinates.',
																	properties: {
																		latitude: {
																			type: 'number',
																			description:
																				'The latitude in degrees. It must be in the range [-90.0, +90.0].',
																		},
																		longitude: {
																			type: 'number',
																			description:
																				'The longitude in degrees.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
													},
													mid: {
														type: 'string',
														description:
															'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
													},
													properties: {
														type: 'array',
														description:
															'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
														items: {
															type: 'object',
															description:
																'A `Property` consists of a user-supplied name/value pair.',
															properties: {
																name: {
																	type: 'string',
																	description:
																		'Name of the property.',
																},
																value: {
																	type: 'string',
																	description:
																		'Value of the property.',
																},
																uint64Value: {
																	type: 'string',
																	description:
																		'Value of numeric properties.',
																},
															},
															required: [],
														},
													},
													description: {
														type: 'string',
														description:
															'Entity textual description, expressed in its `locale` language.',
													},
													locale: {
														type: 'string',
														description:
															'The language code for the locale in which the entity textual `description` is expressed.',
													},
													boundingPoly: {
														type: 'object',
														description:
															'Image region to which this entity belongs.',
														properties: {
															vertices: {
																type: 'array',
																description:
																	'The bounding polygon vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
																		},
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																	},
																	required: [],
																},
															},
															normalizedVertices: {
																type: 'array',
																description:
																	'The bounding polygon normalized vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
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
										textAnnotations: {
											type: 'array',
											description:
												'If present, text (OCR) detection has completed successfully.',
											items: {
												type: 'object',
												description: 'Set of detected entity features.',
												properties: {
													score: {
														type: 'number',
														description: 'Overall score of the result.',
													},
													topicality: {
														type: 'number',
														description:
															'The relevancy of the ICA (Image Content Annotation) label to the image.',
													},
													locations: {
														type: 'array',
														description:
															'The location information for the detected entity.',
														items: {
															type: 'object',
															description:
																'Detected entity location information.',
															properties: {
																latLng: {
																	type: 'object',
																	description:
																		'lat/long location coordinates.',
																	properties: {
																		latitude: {
																			type: 'number',
																			description:
																				'The latitude in degrees. It must be in the range [-90.0, +90.0].',
																		},
																		longitude: {
																			type: 'number',
																			description:
																				'The longitude in degrees.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
													},
													mid: {
														type: 'string',
														description:
															'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
													},
													properties: {
														type: 'array',
														description:
															'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
														items: {
															type: 'object',
															description:
																'A `Property` consists of a user-supplied name/value pair.',
															properties: {
																name: {
																	type: 'string',
																	description:
																		'Name of the property.',
																},
																value: {
																	type: 'string',
																	description:
																		'Value of the property.',
																},
																uint64Value: {
																	type: 'string',
																	description:
																		'Value of numeric properties.',
																},
															},
															required: [],
														},
													},
													description: {
														type: 'string',
														description:
															'Entity textual description, expressed in its `locale` language.',
													},
													locale: {
														type: 'string',
														description:
															'The language code for the locale in which the entity textual `description` is expressed.',
													},
													boundingPoly: {
														type: 'object',
														description:
															'Image region to which this entity belongs.',
														properties: {
															vertices: {
																type: 'array',
																description:
																	'The bounding polygon vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
																		},
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																	},
																	required: [],
																},
															},
															normalizedVertices: {
																type: 'array',
																description:
																	'The bounding polygon normalized vertices.',
																items: {
																	type: 'object',
																	description:
																		'A vertex represents a 2D point in the image.',
																	properties: {
																		x: {
																			type: 'number',
																			description:
																				'X coordinate.',
																		},
																		y: {
																			type: 'number',
																			description:
																				'Y coordinate.',
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
							totalPages: {
								type: 'number',
								description:
									'This field gives the total number of pages in the file.',
							},
							inputConfig: {
								type: 'object',
								description:
									'Information about the file for which this response is generated.',
								properties: {
									mimeType: {
										type: 'string',
										description:
											'The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported.',
									},
									gcsSource: {
										type: 'object',
										description:
											'The Google Cloud Storage location to read the input from.',
										properties: {
											uri: {
												type: 'string',
												description:
													'Google Cloud Storage URI for the input file.',
											},
										},
										required: [],
									},
									content: {
										type: 'string',
										description:
											'File content, represented as a stream of bytes.',
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
		appName: 'googlecloudvision',
		appVersion: 1,
		endpointName: 'annotateImages',
		label: 'Annotate images',
		description: 'Runs Google Cloud Vision detection features on one or more images.',
		context:
			"---\nname: annotateImages\ndescription: Runs Google Cloud Vision detection features on one or more images.\n---\n\nWraps a single call to [`images:annotate`](https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate). It is synchronous, read-only analysis: nothing in the Vision project is created or changed.\n\n**Input**\n- `requests` is a batch; each item is one image plus the features to run on it. Per the [quotas](https://cloud.google.com/vision/quotas), a request can hold at most 16 images, an image file can be at most 20 MB, and the whole JSON request at most 10 MB.\n- Provide each image either as base64 `image.content` or as `image.source.imageUri` (a `gs://bucket/object` Cloud Storage URI or a publicly accessible HTTP/HTTPS URL). If both are set, `content` wins. Base64 is about 37% larger than the original file, so large images should be passed by URI.\n- `features` can list several detection types for the same image, each with its own `maxResults`. `maxResults` does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION` or `CROP_HINTS`.\n- Use `TEXT_DETECTION` for text in a larger image and `DOCUMENT_TEXT_DETECTION` for dense text and documents. If both are present, `DOCUMENT_TEXT_DETECTION` takes precedence.\n- `parent` (`projects/{project-id}/locations/{location-id}`, location `us`, `asia` or `eu`) pins processing to a region; leave it empty to let Google choose.\n- `PRODUCT_SEARCH` needs `imageContext.productSearchParams` (a product set and category) and a pre-existing Vision Product Search product set.\n- Leave out optional fields you do not need instead of sending empty values. For PDF or TIFF files use the `annotateFiles` endpoint.\n\n**Output**\n- `responses` has one item per request, in the same order.\n- Each item contains only the annotations for the requested features: `faceAnnotations`, `landmarkAnnotations`, `logoAnnotations`, `labelAnnotations`, `textAnnotations` and `fullTextAnnotation` (text detection), `safeSearchAnnotation`, `imagePropertiesAnnotation`, `cropHintsAnnotation`, `webDetection`, `productSearchResults` and `localizedObjectAnnotations`.\n- Errors: if the first item in `requests` fails, the whole call fails with an error that carries that item's error message, and no `responses` are returned. A failure on any later item is reported in that item's `error` object (`code`, `message`) while the call still returns HTTP 200 for the batch. Handle both cases, and check `error` on every returned item.\n- Likelihood fields (for example `safeSearchAnnotation.adult`) are strings from `VERY_UNLIKELY` to `VERY_LIKELY`.\n\nAuthentication is the connection's API key, sent automatically as the `key` query parameter.",
		accounts: { googlecloudvision: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				requests: {
					type: 'array',
					description:
						'Individual image annotation requests for this batch. A maximum of 16 images per request is allowed.',
					items: {
						type: 'object',
						description:
							'Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.',
						properties: {
							image: {
								type: 'object',
								description: 'The image to be processed.',
								properties: {
									source: {
										type: 'object',
										description:
											'Google Cloud Storage image location, or publicly-accessible image URL. If both `content` and `source` are provided for an image, `content` takes precedence and is used to perform the image annotation request.',
										properties: {
											imageUri: {
												type: 'string',
												description:
													'The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications.',
											},
										},
										required: [],
									},
									content: {
										type: 'string',
										description:
											'The base64-encoded image bytes. Provide either this or the image source URI.',
									},
								},
								required: [],
							},
							features: {
								type: 'array',
								description: 'Requested features.',
								items: {
									type: 'object',
									description:
										'The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.',
									properties: {
										type: {
											type: 'string',
											description: 'The feature type.',
											enum: [
												'FACE_DETECTION',
												'LANDMARK_DETECTION',
												'LOGO_DETECTION',
												'LABEL_DETECTION',
												'TEXT_DETECTION',
												'DOCUMENT_TEXT_DETECTION',
												'SAFE_SEARCH_DETECTION',
												'IMAGE_PROPERTIES',
												'CROP_HINTS',
												'WEB_DETECTION',
												'PRODUCT_SEARCH',
												'OBJECT_LOCALIZATION',
											],
										},
										maxResults: {
											type: 'number',
											description:
												'Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.',
										},
										model: {
											type: 'string',
											description:
												'Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/rc" for the latest release candidate.',
											default: '',
											enum: [
												'',
												'builtin/stable',
												'builtin/latest',
												'builtin/rc',
											],
										},
									},
									required: ['type'],
								},
							},
							imageContext: {
								type: 'object',
								description: 'Additional context that may accompany the image.',
								properties: {
									languageHints: {
										type: 'array',
										description:
											'List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages).',
										items: {
											type: 'string',
											description: 'A single language hint.',
										},
									},
									textDetectionParams: {
										type: 'object',
										description:
											'Parameters for text detection and document text detection.',
										properties: {
											enableTextDetectionConfidenceScore: {
												type: 'boolean',
												description:
													'By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well.',
											},
											advancedOcrOptions: {
												type: 'array',
												description:
													'A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation.',
												items: {
													type: 'string',
													description: 'An advanced OCR option.',
													default: '',
													enum: ['', 'legacy_layout'],
												},
											},
										},
										required: [],
									},
									cropHintsParams: {
										type: 'object',
										description:
											'Parameters for crop hints annotation request.',
										properties: {
											aspectRatios: {
												type: 'array',
												description:
													'Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored.',
												items: {
													type: 'number',
													description: 'A single aspect ratio.',
												},
											},
										},
										required: [],
									},
									webDetectionParams: {
										type: 'object',
										description: 'Parameters for web detection.',
										properties: {
											includeGeoResults: {
												type: 'boolean',
												description: 'This field has no effect on results.',
											},
										},
										required: [],
									},
									productSearchParams: {
										type: 'object',
										description: 'Parameters for product search.',
										properties: {
											boundingPoly: {
												type: 'object',
												description:
													'The bounding polygon around the area of interest in the image. If it is not specified, system discretion will be applied.',
												properties: {
													vertices: {
														type: 'array',
														description:
															'The bounding polygon vertices.',
														items: {
															type: 'object',
															description:
																'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
															properties: {
																y: {
																	type: 'number',
																	description: 'Y coordinate.',
																},
																x: {
																	type: 'number',
																	description: 'X coordinate.',
																},
															},
															required: [],
														},
													},
													normalizedVertices: {
														type: 'array',
														description:
															'The bounding polygon normalized vertices.',
														items: {
															type: 'object',
															description:
																'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
															properties: {
																x: {
																	type: 'number',
																	description: 'X coordinate.',
																},
																y: {
																	type: 'number',
																	description: 'Y coordinate.',
																},
															},
															required: [],
														},
													},
												},
												required: [],
											},
											productSet: {
												type: 'string',
												description:
													'The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.',
											},
											productCategories: {
												type: 'array',
												description:
													'The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified.',
												items: {
													type: 'string',
													description: 'A product category to search in.',
													default: '',
													enum: [
														'',
														'homegoods-v2',
														'apparel-v2',
														'toys-v2',
														'packagedgoods-v1',
														'general-v1',
													],
												},
											},
											filter: {
												type: 'string',
												description:
													'The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An \'=\' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a \':\' instead of an \'=\'.',
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
				parent: {
					type: 'string',
					description:
						'Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
				},
				labels: {
					type: 'array',
					description:
						'The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.',
					items: {
						type: 'object',
						description: 'A user-defined metadata label.',
						properties: {
							key: {
								type: 'string',
								description:
									'The label key. It must start with a letter and can contain only lowercase letters, numeric characters, underscores and dashes.',
							},
							value: {
								type: 'string',
								description:
									'The label value. It can contain only lowercase letters, numeric characters, underscores and dashes.',
							},
						},
						required: [],
					},
				},
			},
			required: ['requests'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				responses: {
					type: 'array',
					description:
						'Individual responses to image annotation requests within the batch.',
					items: {
						type: 'object',
						description: 'Response to an image annotation request.',
						properties: {
							faceAnnotations: {
								type: 'array',
								description:
									'If present, face detection has completed successfully.',
								items: {
									type: 'object',
									description:
										'A face annotation object contains the results of face detection.',
									properties: {
										landmarks: {
											type: 'array',
											description: 'Detected face landmarks.',
											items: {
												type: 'object',
												description:
													'A face-specific landmark (for example, a face feature).',
												properties: {
													position: {
														type: 'object',
														description: 'Face landmark position.',
														properties: {
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
															z: {
																type: 'number',
																description:
																	'Z coordinate (or depth).',
															},
															y: {
																type: 'number',
																description: 'Y coordinate.',
															},
														},
														required: [],
													},
													type: {
														type: 'string',
														description: 'Face landmark type.',
														default: '',
														enum: [
															'',
															'UNKNOWN_LANDMARK',
															'LEFT_EYE',
															'RIGHT_EYE',
															'LEFT_OF_LEFT_EYEBROW',
															'RIGHT_OF_LEFT_EYEBROW',
															'LEFT_OF_RIGHT_EYEBROW',
															'RIGHT_OF_RIGHT_EYEBROW',
															'MIDPOINT_BETWEEN_EYES',
															'NOSE_TIP',
															'UPPER_LIP',
															'LOWER_LIP',
															'MOUTH_LEFT',
															'MOUTH_RIGHT',
															'MOUTH_CENTER',
															'NOSE_BOTTOM_RIGHT',
															'NOSE_BOTTOM_LEFT',
															'NOSE_BOTTOM_CENTER',
															'LEFT_EYE_TOP_BOUNDARY',
															'LEFT_EYE_RIGHT_CORNER',
															'LEFT_EYE_BOTTOM_BOUNDARY',
															'LEFT_EYE_LEFT_CORNER',
															'RIGHT_EYE_TOP_BOUNDARY',
															'RIGHT_EYE_RIGHT_CORNER',
															'RIGHT_EYE_BOTTOM_BOUNDARY',
															'RIGHT_EYE_LEFT_CORNER',
															'LEFT_EYEBROW_UPPER_MIDPOINT',
															'RIGHT_EYEBROW_UPPER_MIDPOINT',
															'LEFT_EAR_TRAGION',
															'RIGHT_EAR_TRAGION',
															'LEFT_EYE_PUPIL',
															'RIGHT_EYE_PUPIL',
															'FOREHEAD_GLABELLA',
															'CHIN_GNATHION',
															'CHIN_LEFT_GONION',
															'CHIN_RIGHT_GONION',
															'LEFT_CHEEK_CENTER',
															'RIGHT_CHEEK_CENTER',
														],
													},
												},
												required: [],
											},
										},
										sorrowLikelihood: {
											type: 'string',
											description: 'Sorrow likelihood.',
											default: '',
											enum: [
												'',
												'UNKNOWN',
												'VERY_UNLIKELY',
												'UNLIKELY',
												'POSSIBLE',
												'LIKELY',
												'VERY_LIKELY',
											],
										},
										panAngle: {
											type: 'number',
											description:
												'Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image.',
										},
										surpriseLikelihood: {
											type: 'string',
											description: 'Surprise likelihood.',
											default: '',
											enum: [
												'',
												'UNKNOWN',
												'VERY_UNLIKELY',
												'UNLIKELY',
												'POSSIBLE',
												'LIKELY',
												'VERY_LIKELY',
											],
										},
										fdBoundingPoly: {
											type: 'object',
											description:
												'The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face.',
											properties: {
												vertices: {
													type: 'array',
													description: 'The bounding polygon vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															y: {
																type: 'number',
																description: 'Y coordinate.',
															},
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
														},
														required: [],
													},
												},
												normalizedVertices: {
													type: 'array',
													description:
														'The bounding polygon normalized vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
															y: {
																type: 'number',
																description: 'Y coordinate.',
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
										landmarkingConfidence: {
											type: 'number',
											description: 'Face landmarking confidence.',
										},
										tiltAngle: {
											type: 'number',
											description:
												"Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane.",
										},
										joyLikelihood: {
											type: 'string',
											description: 'Joy likelihood.',
											default: '',
											enum: [
												'',
												'UNKNOWN',
												'VERY_UNLIKELY',
												'UNLIKELY',
												'POSSIBLE',
												'LIKELY',
												'VERY_LIKELY',
											],
										},
										detectionConfidence: {
											type: 'number',
											description: 'Detection confidence. Range [0, 1].',
										},
										rollAngle: {
											type: 'number',
											description:
												'Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face.',
										},
										underExposedLikelihood: {
											type: 'string',
											description: 'Under-exposed likelihood.',
											default: '',
											enum: [
												'',
												'UNKNOWN',
												'VERY_UNLIKELY',
												'UNLIKELY',
												'POSSIBLE',
												'LIKELY',
												'VERY_LIKELY',
											],
										},
										angerLikelihood: {
											type: 'string',
											description: 'Anger likelihood.',
											default: '',
											enum: [
												'',
												'UNKNOWN',
												'VERY_UNLIKELY',
												'UNLIKELY',
												'POSSIBLE',
												'LIKELY',
												'VERY_LIKELY',
											],
										},
										headwearLikelihood: {
											type: 'string',
											description: 'Headwear likelihood.',
											default: '',
											enum: [
												'',
												'UNKNOWN',
												'VERY_UNLIKELY',
												'UNLIKELY',
												'POSSIBLE',
												'LIKELY',
												'VERY_LIKELY',
											],
										},
										blurredLikelihood: {
											type: 'string',
											description: 'Blurred likelihood.',
											default: '',
											enum: [
												'',
												'UNKNOWN',
												'VERY_UNLIKELY',
												'UNLIKELY',
												'POSSIBLE',
												'LIKELY',
												'VERY_LIKELY',
											],
										},
										boundingPoly: {
											type: 'object',
											description: 'The bounding polygon around the face.',
											properties: {
												vertices: {
													type: 'array',
													description: 'The bounding polygon vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															y: {
																type: 'number',
																description: 'Y coordinate.',
															},
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
														},
														required: [],
													},
												},
												normalizedVertices: {
													type: 'array',
													description:
														'The bounding polygon normalized vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
															y: {
																type: 'number',
																description: 'Y coordinate.',
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
							labelAnnotations: {
								type: 'array',
								description:
									'If present, label detection has completed successfully.',
								items: {
									type: 'object',
									description: 'Set of detected entity features.',
									properties: {
										score: {
											type: 'number',
											description: 'Overall score of the result.',
										},
										topicality: {
											type: 'number',
											description:
												'The relevancy of the ICA (Image Content Annotation) label to the image.',
										},
										locations: {
											type: 'array',
											description:
												'The location information for the detected entity.',
											items: {
												type: 'object',
												description:
													'Detected entity location information.',
												properties: {
													latLng: {
														type: 'object',
														description:
															'lat/long location coordinates.',
														properties: {
															latitude: {
																type: 'number',
																description:
																	'The latitude in degrees. It must be in the range [-90.0, +90.0].',
															},
															longitude: {
																type: 'number',
																description:
																	'The longitude in degrees.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
										},
										mid: {
											type: 'string',
											description:
												'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
										},
										properties: {
											type: 'array',
											description:
												'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
											items: {
												type: 'object',
												description:
													'A `Property` consists of a user-supplied name/value pair.',
												properties: {
													name: {
														type: 'string',
														description: 'Name of the property.',
													},
													value: {
														type: 'string',
														description: 'Value of the property.',
													},
													uint64Value: {
														type: 'string',
														description: 'Value of numeric properties.',
													},
												},
												required: [],
											},
										},
										description: {
											type: 'string',
											description:
												'Entity textual description, expressed in its `locale` language.',
										},
										locale: {
											type: 'string',
											description:
												'The language code for the locale in which the entity textual `description` is expressed.',
										},
										boundingPoly: {
											type: 'object',
											description:
												'Image region to which this entity belongs.',
											properties: {
												vertices: {
													type: 'array',
													description: 'The bounding polygon vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															y: {
																type: 'number',
																description: 'Y coordinate.',
															},
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
														},
														required: [],
													},
												},
												normalizedVertices: {
													type: 'array',
													description:
														'The bounding polygon normalized vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
															y: {
																type: 'number',
																description: 'Y coordinate.',
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
							productSearchResults: {
								type: 'object',
								description:
									'If present, product search has completed successfully.',
								properties: {
									indexTime: {
										type: 'string',
										description:
											'Timestamp of the index which provided these results.',
									},
									productGroupedResults: {
										type: 'array',
										description:
											'List of results grouped by products detected in the query image.',
										items: {
											type: 'object',
											description:
												'Information about the products similar to a single product in a query image.',
											properties: {
												boundingPoly: {
													type: 'object',
													description:
														'The bounding polygon around the product detected in the query image.',
													properties: {
														vertices: {
															type: 'array',
															description:
																'The bounding polygon vertices.',
															items: {
																type: 'object',
																description:
																	'A vertex represents a 2D point in the image.',
																properties: {
																	y: {
																		type: 'number',
																		description:
																			'Y coordinate.',
																	},
																	x: {
																		type: 'number',
																		description:
																			'X coordinate.',
																	},
																},
																required: [],
															},
														},
														normalizedVertices: {
															type: 'array',
															description:
																'The bounding polygon normalized vertices.',
															items: {
																type: 'object',
																description:
																	'A vertex represents a 2D point in the image.',
																properties: {
																	x: {
																		type: 'number',
																		description:
																			'X coordinate.',
																	},
																	y: {
																		type: 'number',
																		description:
																			'Y coordinate.',
																	},
																},
																required: [],
															},
														},
													},
													required: [],
												},
												objectAnnotations: {
													type: 'array',
													description:
														'List of generic predictions for the object in the bounding box.',
													items: {
														type: 'object',
														description:
															'Prediction for what the object in the bounding box is.',
														properties: {
															languageCode: {
																type: 'string',
																description:
																	'The BCP-47 language code, such as "en-US" or "sr-Latn".',
															},
															mid: {
																type: 'string',
																description:
																	'Object ID that should align with EntityAnnotation mid.',
															},
															name: {
																type: 'string',
																description:
																	'Object name, expressed in its `language_code` language.',
															},
															score: {
																type: 'number',
																description:
																	'Score of the result. Range [0, 1].',
															},
														},
														required: [],
													},
												},
												results: {
													type: 'array',
													description:
														'List of results, one for each product match.',
													items: {
														type: 'object',
														description: 'Information about a product.',
														properties: {
															product: {
																type: 'object',
																description: 'The Product.',
																properties: {
																	description: {
																		type: 'string',
																		description:
																			'User-provided metadata to be stored with this product.',
																	},
																	productCategory: {
																		type: 'string',
																		description:
																			'Immutable. The category for the product identified by the reference image.',
																	},
																	name: {
																		type: 'string',
																		description:
																			'The resource name of the product.',
																	},
																	productLabels: {
																		type: 'array',
																		description:
																			'Key-value pairs that can be attached to a product.',
																		items: {
																			type: 'object',
																			description:
																				'A product label represented as a key-value pair.',
																			properties: {
																				key: {
																					type: 'string',
																					description:
																						'The key of the label attached to the product.',
																				},
																				value: {
																					type: 'string',
																					description:
																						'The value of the label attached to the product.',
																				},
																			},
																			required: [],
																		},
																	},
																	displayName: {
																		type: 'string',
																		description:
																			'The user-provided name for this Product.',
																	},
																},
																required: [],
															},
															image: {
																type: 'string',
																description:
																	'The resource name of the image from the product that is the closest match to the query.',
															},
															score: {
																type: 'number',
																description:
																	'A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).',
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
									},
									results: {
										type: 'array',
										description: 'List of results, one for each product match.',
										items: {
											type: 'object',
											description: 'Information about a product.',
											properties: {
												product: {
													type: 'object',
													description: 'The Product.',
													properties: {
														description: {
															type: 'string',
															description:
																'User-provided metadata to be stored with this product.',
														},
														productCategory: {
															type: 'string',
															description:
																'Immutable. The category for the product identified by the reference image.',
														},
														name: {
															type: 'string',
															description:
																'The resource name of the product.',
														},
														productLabels: {
															type: 'array',
															description:
																'Key-value pairs that can be attached to a product.',
															items: {
																type: 'object',
																description:
																	'A product label represented as a key-value pair.',
																properties: {
																	key: {
																		type: 'string',
																		description:
																			'The key of the label attached to the product.',
																	},
																	value: {
																		type: 'string',
																		description:
																			'The value of the label attached to the product.',
																	},
																},
																required: [],
															},
														},
														displayName: {
															type: 'string',
															description:
																'The user-provided name for this Product.',
														},
													},
													required: [],
												},
												image: {
													type: 'string',
													description:
														'The resource name of the image from the product that is the closest match to the query.',
												},
												score: {
													type: 'number',
													description:
														'A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							context: {
								type: 'object',
								description:
									'If present, contextual information is needed to understand where this image comes from.',
								properties: {
									pageNumber: {
										type: 'number',
										description:
											'If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.',
									},
									uri: {
										type: 'string',
										description:
											'The URI of the file used to produce the image.',
									},
								},
								required: [],
							},
							logoAnnotations: {
								type: 'array',
								description:
									'If present, logo detection has completed successfully.',
								items: {
									type: 'object',
									description: 'Set of detected entity features.',
									properties: {
										score: {
											type: 'number',
											description: 'Overall score of the result.',
										},
										topicality: {
											type: 'number',
											description:
												'The relevancy of the ICA (Image Content Annotation) label to the image.',
										},
										locations: {
											type: 'array',
											description:
												'The location information for the detected entity.',
											items: {
												type: 'object',
												description:
													'Detected entity location information.',
												properties: {
													latLng: {
														type: 'object',
														description:
															'lat/long location coordinates.',
														properties: {
															latitude: {
																type: 'number',
																description:
																	'The latitude in degrees. It must be in the range [-90.0, +90.0].',
															},
															longitude: {
																type: 'number',
																description:
																	'The longitude in degrees.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
										},
										mid: {
											type: 'string',
											description:
												'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
										},
										properties: {
											type: 'array',
											description:
												'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
											items: {
												type: 'object',
												description:
													'A `Property` consists of a user-supplied name/value pair.',
												properties: {
													name: {
														type: 'string',
														description: 'Name of the property.',
													},
													value: {
														type: 'string',
														description: 'Value of the property.',
													},
													uint64Value: {
														type: 'string',
														description: 'Value of numeric properties.',
													},
												},
												required: [],
											},
										},
										description: {
											type: 'string',
											description:
												'Entity textual description, expressed in its `locale` language.',
										},
										locale: {
											type: 'string',
											description:
												'The language code for the locale in which the entity textual `description` is expressed.',
										},
										boundingPoly: {
											type: 'object',
											description:
												'Image region to which this entity belongs.',
											properties: {
												vertices: {
													type: 'array',
													description: 'The bounding polygon vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															y: {
																type: 'number',
																description: 'Y coordinate.',
															},
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
														},
														required: [],
													},
												},
												normalizedVertices: {
													type: 'array',
													description:
														'The bounding polygon normalized vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
															y: {
																type: 'number',
																description: 'Y coordinate.',
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
							webDetection: {
								type: 'object',
								description:
									'If present, web detection has completed successfully.',
								properties: {
									partialMatchingImages: {
										type: 'array',
										description: 'Partial matching images from the Internet.',
										items: {
											type: 'object',
											description: 'Metadata for online images.',
											properties: {
												url: {
													type: 'string',
													description: 'The result image URL.',
												},
											},
											required: [],
										},
									},
									visuallySimilarImages: {
										type: 'array',
										description: 'The visually similar image results.',
										items: {
											type: 'object',
											description: 'Metadata for online images.',
											properties: {
												url: {
													type: 'string',
													description: 'The result image URL.',
												},
											},
											required: [],
										},
									},
									bestGuessLabels: {
										type: 'array',
										description:
											"The service's best guess as to the topic of the request image.",
										items: {
											type: 'object',
											description:
												'Label to provide extra metadata for the web detection.',
											properties: {
												label: {
													type: 'string',
													description: 'Label for extra metadata.',
												},
												languageCode: {
													type: 'string',
													description:
														'The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".',
												},
											},
											required: [],
										},
									},
									webEntities: {
										type: 'array',
										description:
											'Deduced entities from similar images on the Internet.',
										items: {
											type: 'object',
											description:
												'Entity deduced from similar images on the Internet.',
											properties: {
												score: {
													type: 'number',
													description:
														'Overall relevancy score for the entity.',
												},
												description: {
													type: 'string',
													description:
														'Canonical description of the entity, in English.',
												},
												entityId: {
													type: 'string',
													description: 'Opaque entity ID.',
												},
											},
											required: [],
										},
									},
									pagesWithMatchingImages: {
										type: 'array',
										description:
											'Web pages containing the matching images from the Internet.',
										items: {
											type: 'object',
											description: 'Metadata for web pages.',
											properties: {
												partialMatchingImages: {
													type: 'array',
													description:
														'Partial matching images on the page.',
													items: {
														type: 'object',
														description: 'Metadata for online images.',
														properties: {
															url: {
																type: 'string',
																description:
																	'The result image URL.',
															},
														},
														required: [],
													},
												},
												url: {
													type: 'string',
													description: 'The result web page URL.',
												},
												fullMatchingImages: {
													type: 'array',
													description:
														'Fully matching images on the page.',
													items: {
														type: 'object',
														description: 'Metadata for online images.',
														properties: {
															url: {
																type: 'string',
																description:
																	'The result image URL.',
															},
														},
														required: [],
													},
												},
												pageTitle: {
													type: 'string',
													description:
														'Title for the web page, may contain HTML markups.',
												},
											},
											required: [],
										},
									},
									fullMatchingImages: {
										type: 'array',
										description: 'Fully matching images from the Internet.',
										items: {
											type: 'object',
											description: 'Metadata for online images.',
											properties: {
												url: {
													type: 'string',
													description: 'The result image URL.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							cropHintsAnnotation: {
								type: 'object',
								description: 'If present, crop hints have completed successfully.',
								properties: {
									cropHints: {
										type: 'array',
										description: 'Crop hint results.',
										items: {
											type: 'object',
											description:
												'Single crop hint that is used to generate a new crop when serving an image.',
											properties: {
												boundingPoly: {
													type: 'object',
													description:
														'The bounding polygon for the crop region.',
													properties: {
														vertices: {
															type: 'array',
															description:
																'The bounding polygon vertices.',
															items: {
																type: 'object',
																description:
																	'A vertex represents a 2D point in the image.',
																properties: {
																	y: {
																		type: 'number',
																		description:
																			'Y coordinate.',
																	},
																	x: {
																		type: 'number',
																		description:
																			'X coordinate.',
																	},
																},
																required: [],
															},
														},
														normalizedVertices: {
															type: 'array',
															description:
																'The bounding polygon normalized vertices.',
															items: {
																type: 'object',
																description:
																	'A vertex represents a 2D point in the image.',
																properties: {
																	x: {
																		type: 'number',
																		description:
																			'X coordinate.',
																	},
																	y: {
																		type: 'number',
																		description:
																			'Y coordinate.',
																	},
																},
																required: [],
															},
														},
													},
													required: [],
												},
												confidence: {
													type: 'number',
													description:
														'Confidence of this being a salient region.',
												},
												importanceFraction: {
													type: 'number',
													description:
														'Fraction of importance of this salient region with respect to the original image.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							localizedObjectAnnotations: {
								type: 'array',
								description:
									'If present, localized object detection has completed successfully.',
								items: {
									type: 'object',
									description: 'Set of detected objects with bounding boxes.',
									properties: {
										languageCode: {
											type: 'string',
											description:
												'The BCP-47 language code, such as "en-US" or "sr-Latn".',
										},
										mid: {
											type: 'string',
											description:
												'Object ID that should align with EntityAnnotation mid.',
										},
										name: {
											type: 'string',
											description:
												'Object name, expressed in its `language_code` language.',
										},
										score: {
											type: 'number',
											description: 'Score of the result. Range [0, 1].',
										},
										boundingPoly: {
											type: 'object',
											description:
												'Image region to which this object belongs.',
											properties: {
												vertices: {
													type: 'array',
													description: 'The bounding polygon vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															y: {
																type: 'number',
																description: 'Y coordinate.',
															},
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
														},
														required: [],
													},
												},
												normalizedVertices: {
													type: 'array',
													description:
														'The bounding polygon normalized vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
															y: {
																type: 'number',
																description: 'Y coordinate.',
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
							imagePropertiesAnnotation: {
								type: 'object',
								description:
									'If present, image properties were extracted successfully.',
								properties: {
									dominantColors: {
										type: 'object',
										description:
											'If present, dominant colors completed successfully.',
										properties: {
											colors: {
												type: 'array',
												description:
													'RGB color values with their score and pixel fraction.',
												items: {
													type: 'object',
													description:
														'Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.',
													properties: {
														color: {
															type: 'object',
															description:
																'RGB components of the color.',
															properties: {
																alpha: {
																	type: 'number',
																	description:
																		'The fraction of this color that should be applied to the pixel.',
																},
																blue: {
																	type: 'number',
																	description:
																		'The amount of blue in the color as a value in the interval [0, 1].',
																},
																red: {
																	type: 'number',
																	description:
																		'The amount of red in the color as a value in the interval [0, 1].',
																},
																green: {
																	type: 'number',
																	description:
																		'The amount of green in the color as a value in the interval [0, 1].',
																},
															},
															required: [],
														},
														pixelFraction: {
															type: 'number',
															description:
																'The fraction of pixels the color occupies in the image.',
														},
														score: {
															type: 'number',
															description:
																'Image-specific score for this color.',
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
							safeSearchAnnotation: {
								type: 'object',
								description:
									'If present, safe-search annotation has completed successfully.',
								properties: {
									racy: {
										type: 'string',
										description:
											'Likelihood that the request image contains racy content.',
										default: '',
										enum: [
											'',
											'UNKNOWN',
											'VERY_UNLIKELY',
											'UNLIKELY',
											'POSSIBLE',
											'LIKELY',
											'VERY_LIKELY',
										],
									},
									spoof: {
										type: 'string',
										description:
											"Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.",
										default: '',
										enum: [
											'',
											'UNKNOWN',
											'VERY_UNLIKELY',
											'UNLIKELY',
											'POSSIBLE',
											'LIKELY',
											'VERY_LIKELY',
										],
									},
									medical: {
										type: 'string',
										description: 'Likelihood that this is a medical image.',
										default: '',
										enum: [
											'',
											'UNKNOWN',
											'VERY_UNLIKELY',
											'UNLIKELY',
											'POSSIBLE',
											'LIKELY',
											'VERY_LIKELY',
										],
									},
									adult: {
										type: 'string',
										description:
											'Represents the adult content likelihood for the image.',
										default: '',
										enum: [
											'',
											'UNKNOWN',
											'VERY_UNLIKELY',
											'UNLIKELY',
											'POSSIBLE',
											'LIKELY',
											'VERY_LIKELY',
										],
									},
									violence: {
										type: 'string',
										description:
											'Likelihood that this image contains violent content.',
										default: '',
										enum: [
											'',
											'UNKNOWN',
											'VERY_UNLIKELY',
											'UNLIKELY',
											'POSSIBLE',
											'LIKELY',
											'VERY_LIKELY',
										],
									},
								},
								required: [],
							},
							error: {
								type: 'object',
								description:
									'If set, represents the error message for the operation.',
								properties: {
									code: {
										type: 'number',
										description:
											'The status code, which should be an enum value of google.rpc.Code.',
									},
									message: {
										type: 'string',
										description:
											'A developer-facing error message, which should be in English.',
									},
									details: {
										type: 'array',
										description:
											'A list of messages that carry the error details.',
										items: {
											type: 'object',
											description: 'A single detail.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
								},
								required: [],
							},
							fullTextAnnotation: {
								type: 'object',
								description:
									'If present, text (OCR) detection or document (OCR) text detection has completed successfully.',
								properties: {
									pages: {
										type: 'array',
										description: 'List of pages detected by OCR.',
										items: {
											type: 'object',
											description: 'Detected page from OCR.',
											properties: {
												width: {
													type: 'number',
													description:
														'Page width. For PDFs the unit is points.',
												},
												confidence: {
													type: 'number',
													description:
														'Confidence of the OCR results on the page.',
												},
												property: {
													type: 'object',
													description:
														'Additional information detected on the page.',
													properties: {
														detectedLanguages: {
															type: 'array',
															description:
																'A list of detected languages together with confidence.',
															items: {
																type: 'object',
																description:
																	'Detected language for a structural component.',
																properties: {
																	languageCode: {
																		type: 'string',
																		description:
																			'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																	},
																	confidence: {
																		type: 'number',
																		description:
																			'Confidence of detected language.',
																	},
																},
																required: [],
															},
														},
														detectedBreak: {
															type: 'object',
															description:
																'Detected start or end of a text segment.',
															properties: {
																isPrefix: {
																	type: 'boolean',
																	description:
																		'True if break prepends the element.',
																},
																type: {
																	type: 'string',
																	description:
																		'Detected break type.',
																	default: '',
																	enum: [
																		'',
																		'UNKNOWN',
																		'SPACE',
																		'SURE_SPACE',
																		'EOL_SURE_SPACE',
																		'HYPHEN',
																		'LINE_BREAK',
																	],
																},
															},
															required: [],
														},
													},
													required: [],
												},
												height: {
													type: 'number',
													description:
														'Page height. For PDFs the unit is points.',
												},
												blocks: {
													type: 'array',
													description:
														'List of blocks of text, images etc on this page.',
													items: {
														type: 'object',
														description: 'Logical element on the page.',
														properties: {
															paragraphs: {
																type: 'array',
																description:
																	'List of paragraphs in this block (if this blocks is of type text).',
																items: {
																	type: 'object',
																	description:
																		'Structural unit of text representing a number of words in certain order.',
																	properties: {
																		property: {
																			type: 'object',
																			description:
																				'Additional information detected for the paragraph.',
																			properties: {
																				detectedLanguages: {
																					type: 'array',
																					description:
																						'A list of detected languages together with confidence.',
																					items: {
																						type: 'object',
																						description:
																							'Detected language for a structural component.',
																						properties:
																							{
																								languageCode:
																									{
																										type: 'string',
																										description:
																											'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																									},
																								confidence:
																									{
																										type: 'number',
																										description:
																											'Confidence of detected language.',
																									},
																							},
																						required:
																							[],
																					},
																				},
																				detectedBreak: {
																					type: 'object',
																					description:
																						'Detected start or end of a text segment.',
																					properties: {
																						isPrefix: {
																							type: 'boolean',
																							description:
																								'True if break prepends the element.',
																						},
																						type: {
																							type: 'string',
																							description:
																								'Detected break type.',
																							default:
																								'',
																							enum: [
																								'',
																								'UNKNOWN',
																								'SPACE',
																								'SURE_SPACE',
																								'EOL_SURE_SPACE',
																								'HYPHEN',
																								'LINE_BREAK',
																							],
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		confidence: {
																			type: 'number',
																			description:
																				'Confidence of the OCR results for the paragraph.',
																		},
																		boundingBox: {
																			type: 'object',
																			description:
																				'The bounding box for the paragraph.',
																			properties: {
																				vertices: {
																					type: 'array',
																					description:
																						'The bounding polygon vertices.',
																					items: {
																						type: 'object',
																						description:
																							'A vertex represents a 2D point in the image.',
																						properties:
																							{
																								y: {
																									type: 'number',
																									description:
																										'Y coordinate.',
																								},
																								x: {
																									type: 'number',
																									description:
																										'X coordinate.',
																								},
																							},
																						required:
																							[],
																					},
																				},
																				normalizedVertices:
																					{
																						type: 'array',
																						description:
																							'The bounding polygon normalized vertices.',
																						items: {
																							type: 'object',
																							description:
																								'A vertex represents a 2D point in the image.',
																							properties:
																								{
																									x: {
																										type: 'number',
																										description:
																											'X coordinate.',
																									},
																									y: {
																										type: 'number',
																										description:
																											'Y coordinate.',
																									},
																								},
																							required:
																								[],
																						},
																					},
																			},
																			required: [],
																		},
																		words: {
																			type: 'array',
																			description:
																				'List of all words in this paragraph.',
																			items: {
																				type: 'object',
																				description:
																					'A word representation.',
																				properties: {
																					property: {
																						type: 'object',
																						description:
																							'Additional information detected for the word.',
																						properties:
																							{
																								detectedLanguages:
																									{
																										type: 'array',
																										description:
																											'A list of detected languages together with confidence.',
																										items: {
																											type: 'object',
																											description:
																												'Detected language for a structural component.',
																											properties:
																												{
																													languageCode:
																														{
																															type: 'string',
																															description:
																																'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																														},
																													confidence:
																														{
																															type: 'number',
																															description:
																																'Confidence of detected language.',
																														},
																												},
																											required:
																												[],
																										},
																									},
																								detectedBreak:
																									{
																										type: 'object',
																										description:
																											'Detected start or end of a text segment.',
																										properties:
																											{
																												isPrefix:
																													{
																														type: 'boolean',
																														description:
																															'True if break prepends the element.',
																													},
																												type: {
																													type: 'string',
																													description:
																														'Detected break type.',
																													default:
																														'',
																													enum: [
																														'',
																														'UNKNOWN',
																														'SPACE',
																														'SURE_SPACE',
																														'EOL_SURE_SPACE',
																														'HYPHEN',
																														'LINE_BREAK',
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
																					symbols: {
																						type: 'array',
																						description:
																							'List of symbols in the word.',
																						items: {
																							type: 'object',
																							description:
																								'A single symbol representation.',
																							properties:
																								{
																									property:
																										{
																											type: 'object',
																											description:
																												'Additional information detected for the symbol.',
																											properties:
																												{
																													detectedLanguages:
																														{
																															type: 'array',
																															description:
																																'A list of detected languages together with confidence.',
																															items: {
																																type: 'object',
																																description:
																																	'Detected language for a structural component.',
																																properties:
																																	{
																																		languageCode:
																																			{
																																				type: 'string',
																																				description:
																																					'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																																			},
																																		confidence:
																																			{
																																				type: 'number',
																																				description:
																																					'Confidence of detected language.',
																																			},
																																	},
																																required:
																																	[],
																															},
																														},
																													detectedBreak:
																														{
																															type: 'object',
																															description:
																																'Detected start or end of a text segment.',
																															properties:
																																{
																																	isPrefix:
																																		{
																																			type: 'boolean',
																																			description:
																																				'True if break prepends the element.',
																																		},
																																	type: {
																																		type: 'string',
																																		description:
																																			'Detected break type.',
																																		default:
																																			'',
																																		enum: [
																																			'',
																																			'UNKNOWN',
																																			'SPACE',
																																			'SURE_SPACE',
																																			'EOL_SURE_SPACE',
																																			'HYPHEN',
																																			'LINE_BREAK',
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
																									confidence:
																										{
																											type: 'number',
																											description:
																												'Confidence of the OCR results for the symbol.',
																										},
																									boundingBox:
																										{
																											type: 'object',
																											description:
																												'The bounding box for the symbol.',
																											properties:
																												{
																													vertices:
																														{
																															type: 'array',
																															description:
																																'The bounding polygon vertices.',
																															items: {
																																type: 'object',
																																description:
																																	'A vertex represents a 2D point in the image.',
																																properties:
																																	{
																																		y: {
																																			type: 'number',
																																			description:
																																				'Y coordinate.',
																																		},
																																		x: {
																																			type: 'number',
																																			description:
																																				'X coordinate.',
																																		},
																																	},
																																required:
																																	[],
																															},
																														},
																													normalizedVertices:
																														{
																															type: 'array',
																															description:
																																'The bounding polygon normalized vertices.',
																															items: {
																																type: 'object',
																																description:
																																	'A vertex represents a 2D point in the image.',
																																properties:
																																	{
																																		x: {
																																			type: 'number',
																																			description:
																																				'X coordinate.',
																																		},
																																		y: {
																																			type: 'number',
																																			description:
																																				'Y coordinate.',
																																		},
																																	},
																																required:
																																	[],
																															},
																														},
																												},
																											required:
																												[],
																										},
																									text: {
																										type: 'string',
																										description:
																											'The actual UTF-8 representation of the symbol.',
																									},
																								},
																							required:
																								[],
																						},
																					},
																					boundingBox: {
																						type: 'object',
																						description:
																							'The bounding box for the word.',
																						properties:
																							{
																								vertices:
																									{
																										type: 'array',
																										description:
																											'The bounding polygon vertices.',
																										items: {
																											type: 'object',
																											description:
																												'A vertex represents a 2D point in the image.',
																											properties:
																												{
																													y: {
																														type: 'number',
																														description:
																															'Y coordinate.',
																													},
																													x: {
																														type: 'number',
																														description:
																															'X coordinate.',
																													},
																												},
																											required:
																												[],
																										},
																									},
																								normalizedVertices:
																									{
																										type: 'array',
																										description:
																											'The bounding polygon normalized vertices.',
																										items: {
																											type: 'object',
																											description:
																												'A vertex represents a 2D point in the image.',
																											properties:
																												{
																													x: {
																														type: 'number',
																														description:
																															'X coordinate.',
																													},
																													y: {
																														type: 'number',
																														description:
																															'Y coordinate.',
																													},
																												},
																											required:
																												[],
																										},
																									},
																							},
																						required:
																							[],
																					},
																					confidence: {
																						type: 'number',
																						description:
																							'Confidence of the OCR results for the word.',
																					},
																				},
																				required: [],
																			},
																		},
																	},
																	required: [],
																},
															},
															confidence: {
																type: 'number',
																description:
																	'Confidence of the OCR results on the block.',
															},
															blockType: {
																type: 'string',
																description:
																	'Detected block type (text, image etc) for this block.',
																default: '',
																enum: [
																	'',
																	'UNKNOWN',
																	'TEXT',
																	'TABLE',
																	'PICTURE',
																	'RULER',
																	'BARCODE',
																],
															},
															property: {
																type: 'object',
																description:
																	'Additional information detected for the block.',
																properties: {
																	detectedLanguages: {
																		type: 'array',
																		description:
																			'A list of detected languages together with confidence.',
																		items: {
																			type: 'object',
																			description:
																				'Detected language for a structural component.',
																			properties: {
																				languageCode: {
																					type: 'string',
																					description:
																						'The BCP-47 language code, such as "en-US" or "sr-Latn".',
																				},
																				confidence: {
																					type: 'number',
																					description:
																						'Confidence of detected language.',
																				},
																			},
																			required: [],
																		},
																	},
																	detectedBreak: {
																		type: 'object',
																		description:
																			'Detected start or end of a text segment.',
																		properties: {
																			isPrefix: {
																				type: 'boolean',
																				description:
																					'True if break prepends the element.',
																			},
																			type: {
																				type: 'string',
																				description:
																					'Detected break type.',
																				default: '',
																				enum: [
																					'',
																					'UNKNOWN',
																					'SPACE',
																					'SURE_SPACE',
																					'EOL_SURE_SPACE',
																					'HYPHEN',
																					'LINE_BREAK',
																				],
																			},
																		},
																		required: [],
																	},
																},
																required: [],
															},
															boundingBox: {
																type: 'object',
																description:
																	'The bounding box for the block.',
																properties: {
																	vertices: {
																		type: 'array',
																		description:
																			'The bounding polygon vertices.',
																		items: {
																			type: 'object',
																			description:
																				'A vertex represents a 2D point in the image.',
																			properties: {
																				y: {
																					type: 'number',
																					description:
																						'Y coordinate.',
																				},
																				x: {
																					type: 'number',
																					description:
																						'X coordinate.',
																				},
																			},
																			required: [],
																		},
																	},
																	normalizedVertices: {
																		type: 'array',
																		description:
																			'The bounding polygon normalized vertices.',
																		items: {
																			type: 'object',
																			description:
																				'A vertex represents a 2D point in the image.',
																			properties: {
																				x: {
																					type: 'number',
																					description:
																						'X coordinate.',
																				},
																				y: {
																					type: 'number',
																					description:
																						'Y coordinate.',
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
									text: {
										type: 'string',
										description: 'UTF-8 text detected on the pages.',
									},
								},
								required: [],
							},
							landmarkAnnotations: {
								type: 'array',
								description:
									'If present, landmark detection has completed successfully.',
								items: {
									type: 'object',
									description: 'Set of detected entity features.',
									properties: {
										score: {
											type: 'number',
											description: 'Overall score of the result.',
										},
										topicality: {
											type: 'number',
											description:
												'The relevancy of the ICA (Image Content Annotation) label to the image.',
										},
										locations: {
											type: 'array',
											description:
												'The location information for the detected entity.',
											items: {
												type: 'object',
												description:
													'Detected entity location information.',
												properties: {
													latLng: {
														type: 'object',
														description:
															'lat/long location coordinates.',
														properties: {
															latitude: {
																type: 'number',
																description:
																	'The latitude in degrees. It must be in the range [-90.0, +90.0].',
															},
															longitude: {
																type: 'number',
																description:
																	'The longitude in degrees.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
										},
										mid: {
											type: 'string',
											description:
												'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
										},
										properties: {
											type: 'array',
											description:
												'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
											items: {
												type: 'object',
												description:
													'A `Property` consists of a user-supplied name/value pair.',
												properties: {
													name: {
														type: 'string',
														description: 'Name of the property.',
													},
													value: {
														type: 'string',
														description: 'Value of the property.',
													},
													uint64Value: {
														type: 'string',
														description: 'Value of numeric properties.',
													},
												},
												required: [],
											},
										},
										description: {
											type: 'string',
											description:
												'Entity textual description, expressed in its `locale` language.',
										},
										locale: {
											type: 'string',
											description:
												'The language code for the locale in which the entity textual `description` is expressed.',
										},
										boundingPoly: {
											type: 'object',
											description:
												'Image region to which this entity belongs.',
											properties: {
												vertices: {
													type: 'array',
													description: 'The bounding polygon vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															y: {
																type: 'number',
																description: 'Y coordinate.',
															},
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
														},
														required: [],
													},
												},
												normalizedVertices: {
													type: 'array',
													description:
														'The bounding polygon normalized vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
															y: {
																type: 'number',
																description: 'Y coordinate.',
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
							textAnnotations: {
								type: 'array',
								description:
									'If present, text (OCR) detection has completed successfully.',
								items: {
									type: 'object',
									description: 'Set of detected entity features.',
									properties: {
										score: {
											type: 'number',
											description: 'Overall score of the result.',
										},
										topicality: {
											type: 'number',
											description:
												'The relevancy of the ICA (Image Content Annotation) label to the image.',
										},
										locations: {
											type: 'array',
											description:
												'The location information for the detected entity.',
											items: {
												type: 'object',
												description:
													'Detected entity location information.',
												properties: {
													latLng: {
														type: 'object',
														description:
															'lat/long location coordinates.',
														properties: {
															latitude: {
																type: 'number',
																description:
																	'The latitude in degrees. It must be in the range [-90.0, +90.0].',
															},
															longitude: {
																type: 'number',
																description:
																	'The longitude in degrees.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
										},
										mid: {
											type: 'string',
											description:
												'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
										},
										properties: {
											type: 'array',
											description:
												'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
											items: {
												type: 'object',
												description:
													'A `Property` consists of a user-supplied name/value pair.',
												properties: {
													name: {
														type: 'string',
														description: 'Name of the property.',
													},
													value: {
														type: 'string',
														description: 'Value of the property.',
													},
													uint64Value: {
														type: 'string',
														description: 'Value of numeric properties.',
													},
												},
												required: [],
											},
										},
										description: {
											type: 'string',
											description:
												'Entity textual description, expressed in its `locale` language.',
										},
										locale: {
											type: 'string',
											description:
												'The language code for the locale in which the entity textual `description` is expressed.',
										},
										boundingPoly: {
											type: 'object',
											description:
												'Image region to which this entity belongs.',
											properties: {
												vertices: {
													type: 'array',
													description: 'The bounding polygon vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															y: {
																type: 'number',
																description: 'Y coordinate.',
															},
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
														},
														required: [],
													},
												},
												normalizedVertices: {
													type: 'array',
													description:
														'The bounding polygon normalized vertices.',
													items: {
														type: 'object',
														description:
															'A vertex represents a 2D point in the image.',
														properties: {
															x: {
																type: 'number',
																description: 'X coordinate.',
															},
															y: {
																type: 'number',
																description: 'Y coordinate.',
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
			required: [],
		},
	},
	{
		appName: 'googlecloudvision',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Google Cloud Vision API.\n\nThe base URL is `https://vision.googleapis.com`. Provide the remaining path in the URL parameter\n(e.g. `/$discovery/rest`). Authentication (the connection\'s API key) is added automatically as the `key` query parameter.\n\n## Example: simple GET call\n\n`url` = `/$discovery/rest`, `method` = `GET`, and one `qs` item with `key` = `version` and `value` = `v1`. It returns the Cloud Vision API discovery document (HTTP 200, `name` is `vision`, `version` is `v1`). Without the `version` query parameter the API returns a different version of the document. The response is large (about 300 KB), and adding a `fields` query parameter is rejected by the API ("Request contains an invalid argument"), so the response cannot be trimmed.\n\n## Example: call with a JSON body\n\n`url` = `/v1/images:annotate`, `method` = `POST`, and `body` = `{"requests": [{"image": {"source": {"imageUri": "gs://bucket_name/object_name"}}, "features": [{"type": "LABEL_DETECTION", "maxResults": 3}]}]}`. This call only reads and analyses the image; it does not change anything. To annotate images, prefer the dedicated annotate images Endpoint.\n\n## Example: poll a long-running operation\n\n`url` = `/v1/projects/{project}/operations/{operationId}`, `method` = `GET`. It returns the latest state of an asynchronous job (for example one started with `POST /v1/images:asyncBatchAnnotate` or `POST /v1/files:asyncBatchAnnotate`). Use a real project ID and operation ID. An invalid operation ID is rejected with "Invalid operation id format".\n\nSome paths listed in the API reference are not implemented by the live API. For example, `GET /v1/operations` returns "Operation is not implemented, or supported, or enabled.".\n\nRefer to the [Google Cloud Vision API reference](https://cloud.google.com/vision/docs/reference/rest) for available\nendpoints, required parameters, and response schemas.\n',
		accounts: { googlecloudvision: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://vision.googleapis.com`. For example, `/$discovery/rest` with the query parameter `version` = `v1`.',
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
];
