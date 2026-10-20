// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type AnnotateImagesInput = {
	/**
	 * Individual image annotation requests for this batch. A maximum of 16 images per request is allowed.
	 *
	 * Items: Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
	 */
	requests: {
		/**
		 * The image to be processed.
		 */
		image?: {
			/**
			 * Google Cloud Storage image location, or publicly-accessible image URL. If both `content` and `source` are provided for an image, `content` takes precedence and is used to perform the image annotation request.
			 */
			source?: {
				/**
				 * The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications.
				 */
				imageUri?: string;
			};
			/**
			 * The base64-encoded image bytes. Provide either this or the image source URI.
			 */
			content?: string;
		};
		/**
		 * Requested features.
		 *
		 * Items: The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
		 */
		features?: {
			/**
			 * The feature type.
			 */
			type:
				| 'FACE_DETECTION'
				| 'LANDMARK_DETECTION'
				| 'LOGO_DETECTION'
				| 'LABEL_DETECTION'
				| 'TEXT_DETECTION'
				| 'DOCUMENT_TEXT_DETECTION'
				| 'SAFE_SEARCH_DETECTION'
				| 'IMAGE_PROPERTIES'
				| 'CROP_HINTS'
				| 'WEB_DETECTION'
				| 'PRODUCT_SEARCH'
				| 'OBJECT_LOCALIZATION';
			/**
			 * Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
			 */
			maxResults?: number;
			/**
			 * Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/rc" for the latest release candidate.
			 */
			model?: '' | 'builtin/stable' | 'builtin/latest' | 'builtin/rc';
		}[];
		/**
		 * Additional context that may accompany the image.
		 */
		imageContext?: {
			/**
			 * List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages).
			 *
			 * Items: A single language hint.
			 */
			languageHints?: string[];
			/**
			 * Parameters for text detection and document text detection.
			 */
			textDetectionParams?: {
				/**
				 * By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well.
				 */
				enableTextDetectionConfidenceScore?: boolean;
				/**
				 * A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation.
				 *
				 * Items: An advanced OCR option.
				 */
				advancedOcrOptions?: ('' | 'legacy_layout')[];
			};
			/**
			 * Parameters for crop hints annotation request.
			 */
			cropHintsParams?: {
				/**
				 * Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored.
				 *
				 * Items: A single aspect ratio.
				 */
				aspectRatios?: number[];
			};
			/**
			 * Parameters for web detection.
			 */
			webDetectionParams?: {
				/**
				 * This field has no effect on results.
				 */
				includeGeoResults?: boolean;
			};
			/**
			 * Parameters for product search.
			 */
			productSearchParams?: {
				/**
				 * The bounding polygon around the area of interest in the image. If it is not specified, system discretion will be applied.
				 */
				boundingPoly?: {
					/**
					 * The bounding polygon vertices.
					 *
					 * Items: A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
					 */
					vertices?: {
						/**
						 * Y coordinate.
						 */
						y?: number;
						/**
						 * X coordinate.
						 */
						x?: number;
					}[];
					/**
					 * The bounding polygon normalized vertices.
					 *
					 * Items: A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
					 */
					normalizedVertices?: {
						/**
						 * X coordinate.
						 */
						x?: number;
						/**
						 * Y coordinate.
						 */
						y?: number;
					}[];
				};
				/**
				 * The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
				 */
				productSet?: string;
				/**
				 * The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified.
				 *
				 * Items: A product category to search in.
				 */
				productCategories?: (
					| ''
					| 'homegoods-v2'
					| 'apparel-v2'
					| 'toys-v2'
					| 'packagedgoods-v1'
					| 'general-v1'
				)[];
				/**
				 * The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An '=' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a ':' instead of an '='.
				 */
				filter?: string;
			};
		};
	}[];
	/**
	 * Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
	 */
	parent?: string;
	/**
	 * The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.
	 *
	 * Items: A user-defined metadata label.
	 */
	labels?: {
		/**
		 * The label key. It must start with a letter and can contain only lowercase letters, numeric characters, underscores and dashes.
		 */
		key?: string;
		/**
		 * The label value. It can contain only lowercase letters, numeric characters, underscores and dashes.
		 */
		value?: string;
	}[];
};

export type AnnotateImagesOutput = {
	/**
	 * Individual responses to image annotation requests within the batch.
	 *
	 * Items: Response to an image annotation request.
	 */
	responses?: {
		/**
		 * If present, face detection has completed successfully.
		 *
		 * Items: A face annotation object contains the results of face detection.
		 */
		faceAnnotations?: {
			/**
			 * Detected face landmarks.
			 *
			 * Items: A face-specific landmark (for example, a face feature).
			 */
			landmarks?: {
				/**
				 * Face landmark position.
				 */
				position?: {
					/**
					 * X coordinate.
					 */
					x?: number;
					/**
					 * Z coordinate (or depth).
					 */
					z?: number;
					/**
					 * Y coordinate.
					 */
					y?: number;
				};
				/**
				 * Face landmark type.
				 */
				type?:
					| ''
					| 'UNKNOWN_LANDMARK'
					| 'LEFT_EYE'
					| 'RIGHT_EYE'
					| 'LEFT_OF_LEFT_EYEBROW'
					| 'RIGHT_OF_LEFT_EYEBROW'
					| 'LEFT_OF_RIGHT_EYEBROW'
					| 'RIGHT_OF_RIGHT_EYEBROW'
					| 'MIDPOINT_BETWEEN_EYES'
					| 'NOSE_TIP'
					| 'UPPER_LIP'
					| 'LOWER_LIP'
					| 'MOUTH_LEFT'
					| 'MOUTH_RIGHT'
					| 'MOUTH_CENTER'
					| 'NOSE_BOTTOM_RIGHT'
					| 'NOSE_BOTTOM_LEFT'
					| 'NOSE_BOTTOM_CENTER'
					| 'LEFT_EYE_TOP_BOUNDARY'
					| 'LEFT_EYE_RIGHT_CORNER'
					| 'LEFT_EYE_BOTTOM_BOUNDARY'
					| 'LEFT_EYE_LEFT_CORNER'
					| 'RIGHT_EYE_TOP_BOUNDARY'
					| 'RIGHT_EYE_RIGHT_CORNER'
					| 'RIGHT_EYE_BOTTOM_BOUNDARY'
					| 'RIGHT_EYE_LEFT_CORNER'
					| 'LEFT_EYEBROW_UPPER_MIDPOINT'
					| 'RIGHT_EYEBROW_UPPER_MIDPOINT'
					| 'LEFT_EAR_TRAGION'
					| 'RIGHT_EAR_TRAGION'
					| 'LEFT_EYE_PUPIL'
					| 'RIGHT_EYE_PUPIL'
					| 'FOREHEAD_GLABELLA'
					| 'CHIN_GNATHION'
					| 'CHIN_LEFT_GONION'
					| 'CHIN_RIGHT_GONION'
					| 'LEFT_CHEEK_CENTER'
					| 'RIGHT_CHEEK_CENTER';
			}[];
			/**
			 * Sorrow likelihood.
			 */
			sorrowLikelihood?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image.
			 */
			panAngle?: number;
			/**
			 * Surprise likelihood.
			 */
			surpriseLikelihood?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face.
			 */
			fdBoundingPoly?: {
				/**
				 * The bounding polygon vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				vertices?: {
					/**
					 * Y coordinate.
					 */
					y?: number;
					/**
					 * X coordinate.
					 */
					x?: number;
				}[];
				/**
				 * The bounding polygon normalized vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				normalizedVertices?: {
					/**
					 * X coordinate.
					 */
					x?: number;
					/**
					 * Y coordinate.
					 */
					y?: number;
				}[];
			};
			/**
			 * Face landmarking confidence.
			 */
			landmarkingConfidence?: number;
			/**
			 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane.
			 */
			tiltAngle?: number;
			/**
			 * Joy likelihood.
			 */
			joyLikelihood?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * Detection confidence. Range [0, 1].
			 */
			detectionConfidence?: number;
			/**
			 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face.
			 */
			rollAngle?: number;
			/**
			 * Under-exposed likelihood.
			 */
			underExposedLikelihood?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * Anger likelihood.
			 */
			angerLikelihood?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * Headwear likelihood.
			 */
			headwearLikelihood?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * Blurred likelihood.
			 */
			blurredLikelihood?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * The bounding polygon around the face.
			 */
			boundingPoly?: {
				/**
				 * The bounding polygon vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				vertices?: {
					/**
					 * Y coordinate.
					 */
					y?: number;
					/**
					 * X coordinate.
					 */
					x?: number;
				}[];
				/**
				 * The bounding polygon normalized vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				normalizedVertices?: {
					/**
					 * X coordinate.
					 */
					x?: number;
					/**
					 * Y coordinate.
					 */
					y?: number;
				}[];
			};
		}[];
		/**
		 * If present, label detection has completed successfully.
		 *
		 * Items: Set of detected entity features.
		 */
		labelAnnotations?: {
			/**
			 * Overall score of the result.
			 */
			score?: number;
			/**
			 * The relevancy of the ICA (Image Content Annotation) label to the image.
			 */
			topicality?: number;
			/**
			 * The location information for the detected entity.
			 *
			 * Items: Detected entity location information.
			 */
			locations?: {
				/**
				 * lat/long location coordinates.
				 */
				latLng?: {
					/**
					 * The latitude in degrees. It must be in the range [-90.0, +90.0].
					 */
					latitude?: number;
					/**
					 * The longitude in degrees.
					 */
					longitude?: number;
				};
			}[];
			/**
			 * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
			 */
			mid?: string;
			/**
			 * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
			 *
			 * Items: A `Property` consists of a user-supplied name/value pair.
			 */
			properties?: {
				/**
				 * Name of the property.
				 */
				name?: string;
				/**
				 * Value of the property.
				 */
				value?: string;
				/**
				 * Value of numeric properties.
				 */
				uint64Value?: string;
			}[];
			/**
			 * Entity textual description, expressed in its `locale` language.
			 */
			description?: string;
			/**
			 * The language code for the locale in which the entity textual `description` is expressed.
			 */
			locale?: string;
			/**
			 * Image region to which this entity belongs.
			 */
			boundingPoly?: {
				/**
				 * The bounding polygon vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				vertices?: {
					/**
					 * Y coordinate.
					 */
					y?: number;
					/**
					 * X coordinate.
					 */
					x?: number;
				}[];
				/**
				 * The bounding polygon normalized vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				normalizedVertices?: {
					/**
					 * X coordinate.
					 */
					x?: number;
					/**
					 * Y coordinate.
					 */
					y?: number;
				}[];
			};
		}[];
		/**
		 * If present, product search has completed successfully.
		 */
		productSearchResults?: {
			/**
			 * Timestamp of the index which provided these results.
			 */
			indexTime?: string;
			/**
			 * List of results grouped by products detected in the query image.
			 *
			 * Items: Information about the products similar to a single product in a query image.
			 */
			productGroupedResults?: {
				/**
				 * The bounding polygon around the product detected in the query image.
				 */
				boundingPoly?: {
					/**
					 * The bounding polygon vertices.
					 *
					 * Items: A vertex represents a 2D point in the image.
					 */
					vertices?: {
						/**
						 * Y coordinate.
						 */
						y?: number;
						/**
						 * X coordinate.
						 */
						x?: number;
					}[];
					/**
					 * The bounding polygon normalized vertices.
					 *
					 * Items: A vertex represents a 2D point in the image.
					 */
					normalizedVertices?: {
						/**
						 * X coordinate.
						 */
						x?: number;
						/**
						 * Y coordinate.
						 */
						y?: number;
					}[];
				};
				/**
				 * List of generic predictions for the object in the bounding box.
				 *
				 * Items: Prediction for what the object in the bounding box is.
				 */
				objectAnnotations?: {
					/**
					 * The BCP-47 language code, such as "en-US" or "sr-Latn".
					 */
					languageCode?: string;
					/**
					 * Object ID that should align with EntityAnnotation mid.
					 */
					mid?: string;
					/**
					 * Object name, expressed in its `language_code` language.
					 */
					name?: string;
					/**
					 * Score of the result. Range [0, 1].
					 */
					score?: number;
				}[];
				/**
				 * List of results, one for each product match.
				 *
				 * Items: Information about a product.
				 */
				results?: {
					/**
					 * The Product.
					 */
					product?: {
						/**
						 * User-provided metadata to be stored with this product.
						 */
						description?: string;
						/**
						 * Immutable. The category for the product identified by the reference image.
						 */
						productCategory?: string;
						/**
						 * The resource name of the product.
						 */
						name?: string;
						/**
						 * Key-value pairs that can be attached to a product.
						 *
						 * Items: A product label represented as a key-value pair.
						 */
						productLabels?: {
							/**
							 * The key of the label attached to the product.
							 */
							key?: string;
							/**
							 * The value of the label attached to the product.
							 */
							value?: string;
						}[];
						/**
						 * The user-provided name for this Product.
						 */
						displayName?: string;
					};
					/**
					 * The resource name of the image from the product that is the closest match to the query.
					 */
					image?: string;
					/**
					 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
					 */
					score?: number;
				}[];
			}[];
			/**
			 * List of results, one for each product match.
			 *
			 * Items: Information about a product.
			 */
			results?: {
				/**
				 * The Product.
				 */
				product?: {
					/**
					 * User-provided metadata to be stored with this product.
					 */
					description?: string;
					/**
					 * Immutable. The category for the product identified by the reference image.
					 */
					productCategory?: string;
					/**
					 * The resource name of the product.
					 */
					name?: string;
					/**
					 * Key-value pairs that can be attached to a product.
					 *
					 * Items: A product label represented as a key-value pair.
					 */
					productLabels?: {
						/**
						 * The key of the label attached to the product.
						 */
						key?: string;
						/**
						 * The value of the label attached to the product.
						 */
						value?: string;
					}[];
					/**
					 * The user-provided name for this Product.
					 */
					displayName?: string;
				};
				/**
				 * The resource name of the image from the product that is the closest match to the query.
				 */
				image?: string;
				/**
				 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
				 */
				score?: number;
			}[];
		};
		/**
		 * If present, contextual information is needed to understand where this image comes from.
		 */
		context?: {
			/**
			 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
			 */
			pageNumber?: number;
			/**
			 * The URI of the file used to produce the image.
			 */
			uri?: string;
		};
		/**
		 * If present, logo detection has completed successfully.
		 *
		 * Items: Set of detected entity features.
		 */
		logoAnnotations?: {
			/**
			 * Overall score of the result.
			 */
			score?: number;
			/**
			 * The relevancy of the ICA (Image Content Annotation) label to the image.
			 */
			topicality?: number;
			/**
			 * The location information for the detected entity.
			 *
			 * Items: Detected entity location information.
			 */
			locations?: {
				/**
				 * lat/long location coordinates.
				 */
				latLng?: {
					/**
					 * The latitude in degrees. It must be in the range [-90.0, +90.0].
					 */
					latitude?: number;
					/**
					 * The longitude in degrees.
					 */
					longitude?: number;
				};
			}[];
			/**
			 * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
			 */
			mid?: string;
			/**
			 * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
			 *
			 * Items: A `Property` consists of a user-supplied name/value pair.
			 */
			properties?: {
				/**
				 * Name of the property.
				 */
				name?: string;
				/**
				 * Value of the property.
				 */
				value?: string;
				/**
				 * Value of numeric properties.
				 */
				uint64Value?: string;
			}[];
			/**
			 * Entity textual description, expressed in its `locale` language.
			 */
			description?: string;
			/**
			 * The language code for the locale in which the entity textual `description` is expressed.
			 */
			locale?: string;
			/**
			 * Image region to which this entity belongs.
			 */
			boundingPoly?: {
				/**
				 * The bounding polygon vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				vertices?: {
					/**
					 * Y coordinate.
					 */
					y?: number;
					/**
					 * X coordinate.
					 */
					x?: number;
				}[];
				/**
				 * The bounding polygon normalized vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				normalizedVertices?: {
					/**
					 * X coordinate.
					 */
					x?: number;
					/**
					 * Y coordinate.
					 */
					y?: number;
				}[];
			};
		}[];
		/**
		 * If present, web detection has completed successfully.
		 */
		webDetection?: {
			/**
			 * Partial matching images from the Internet.
			 *
			 * Items: Metadata for online images.
			 */
			partialMatchingImages?: {
				/**
				 * The result image URL.
				 */
				url?: string;
			}[];
			/**
			 * The visually similar image results.
			 *
			 * Items: Metadata for online images.
			 */
			visuallySimilarImages?: {
				/**
				 * The result image URL.
				 */
				url?: string;
			}[];
			/**
			 * The service's best guess as to the topic of the request image.
			 *
			 * Items: Label to provide extra metadata for the web detection.
			 */
			bestGuessLabels?: {
				/**
				 * Label for extra metadata.
				 */
				label?: string;
				/**
				 * The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".
				 */
				languageCode?: string;
			}[];
			/**
			 * Deduced entities from similar images on the Internet.
			 *
			 * Items: Entity deduced from similar images on the Internet.
			 */
			webEntities?: {
				/**
				 * Overall relevancy score for the entity.
				 */
				score?: number;
				/**
				 * Canonical description of the entity, in English.
				 */
				description?: string;
				/**
				 * Opaque entity ID.
				 */
				entityId?: string;
			}[];
			/**
			 * Web pages containing the matching images from the Internet.
			 *
			 * Items: Metadata for web pages.
			 */
			pagesWithMatchingImages?: {
				/**
				 * Partial matching images on the page.
				 *
				 * Items: Metadata for online images.
				 */
				partialMatchingImages?: {
					/**
					 * The result image URL.
					 */
					url?: string;
				}[];
				/**
				 * The result web page URL.
				 */
				url?: string;
				/**
				 * Fully matching images on the page.
				 *
				 * Items: Metadata for online images.
				 */
				fullMatchingImages?: {
					/**
					 * The result image URL.
					 */
					url?: string;
				}[];
				/**
				 * Title for the web page, may contain HTML markups.
				 */
				pageTitle?: string;
			}[];
			/**
			 * Fully matching images from the Internet.
			 *
			 * Items: Metadata for online images.
			 */
			fullMatchingImages?: {
				/**
				 * The result image URL.
				 */
				url?: string;
			}[];
		};
		/**
		 * If present, crop hints have completed successfully.
		 */
		cropHintsAnnotation?: {
			/**
			 * Crop hint results.
			 *
			 * Items: Single crop hint that is used to generate a new crop when serving an image.
			 */
			cropHints?: {
				/**
				 * The bounding polygon for the crop region.
				 */
				boundingPoly?: {
					/**
					 * The bounding polygon vertices.
					 *
					 * Items: A vertex represents a 2D point in the image.
					 */
					vertices?: {
						/**
						 * Y coordinate.
						 */
						y?: number;
						/**
						 * X coordinate.
						 */
						x?: number;
					}[];
					/**
					 * The bounding polygon normalized vertices.
					 *
					 * Items: A vertex represents a 2D point in the image.
					 */
					normalizedVertices?: {
						/**
						 * X coordinate.
						 */
						x?: number;
						/**
						 * Y coordinate.
						 */
						y?: number;
					}[];
				};
				/**
				 * Confidence of this being a salient region.
				 */
				confidence?: number;
				/**
				 * Fraction of importance of this salient region with respect to the original image.
				 */
				importanceFraction?: number;
			}[];
		};
		/**
		 * If present, localized object detection has completed successfully.
		 *
		 * Items: Set of detected objects with bounding boxes.
		 */
		localizedObjectAnnotations?: {
			/**
			 * The BCP-47 language code, such as "en-US" or "sr-Latn".
			 */
			languageCode?: string;
			/**
			 * Object ID that should align with EntityAnnotation mid.
			 */
			mid?: string;
			/**
			 * Object name, expressed in its `language_code` language.
			 */
			name?: string;
			/**
			 * Score of the result. Range [0, 1].
			 */
			score?: number;
			/**
			 * Image region to which this object belongs.
			 */
			boundingPoly?: {
				/**
				 * The bounding polygon vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				vertices?: {
					/**
					 * Y coordinate.
					 */
					y?: number;
					/**
					 * X coordinate.
					 */
					x?: number;
				}[];
				/**
				 * The bounding polygon normalized vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				normalizedVertices?: {
					/**
					 * X coordinate.
					 */
					x?: number;
					/**
					 * Y coordinate.
					 */
					y?: number;
				}[];
			};
		}[];
		/**
		 * If present, image properties were extracted successfully.
		 */
		imagePropertiesAnnotation?: {
			/**
			 * If present, dominant colors completed successfully.
			 */
			dominantColors?: {
				/**
				 * RGB color values with their score and pixel fraction.
				 *
				 * Items: Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
				 */
				colors?: {
					/**
					 * RGB components of the color.
					 */
					color?: {
						/**
						 * The fraction of this color that should be applied to the pixel.
						 */
						alpha?: number;
						/**
						 * The amount of blue in the color as a value in the interval [0, 1].
						 */
						blue?: number;
						/**
						 * The amount of red in the color as a value in the interval [0, 1].
						 */
						red?: number;
						/**
						 * The amount of green in the color as a value in the interval [0, 1].
						 */
						green?: number;
					};
					/**
					 * The fraction of pixels the color occupies in the image.
					 */
					pixelFraction?: number;
					/**
					 * Image-specific score for this color.
					 */
					score?: number;
				}[];
			};
		};
		/**
		 * If present, safe-search annotation has completed successfully.
		 */
		safeSearchAnnotation?: {
			/**
			 * Likelihood that the request image contains racy content.
			 */
			racy?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.
			 */
			spoof?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * Likelihood that this is a medical image.
			 */
			medical?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * Represents the adult content likelihood for the image.
			 */
			adult?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
			/**
			 * Likelihood that this image contains violent content.
			 */
			violence?:
				| ''
				| 'UNKNOWN'
				| 'VERY_UNLIKELY'
				| 'UNLIKELY'
				| 'POSSIBLE'
				| 'LIKELY'
				| 'VERY_LIKELY';
		};
		/**
		 * If set, represents the error message for the operation.
		 */
		error?: {
			/**
			 * The status code, which should be an enum value of google.rpc.Code.
			 */
			code?: number;
			/**
			 * A developer-facing error message, which should be in English.
			 */
			message?: string;
			/**
			 * A list of messages that carry the error details.
			 *
			 * Items: A single detail.
			 */
			details?: Record<string, JSONValue>[];
		};
		/**
		 * If present, text (OCR) detection or document (OCR) text detection has completed successfully.
		 */
		fullTextAnnotation?: {
			/**
			 * List of pages detected by OCR.
			 *
			 * Items: Detected page from OCR.
			 */
			pages?: {
				/**
				 * Page width. For PDFs the unit is points.
				 */
				width?: number;
				/**
				 * Confidence of the OCR results on the page.
				 */
				confidence?: number;
				/**
				 * Additional information detected on the page.
				 */
				property?: {
					/**
					 * A list of detected languages together with confidence.
					 *
					 * Items: Detected language for a structural component.
					 */
					detectedLanguages?: {
						/**
						 * The BCP-47 language code, such as "en-US" or "sr-Latn".
						 */
						languageCode?: string;
						/**
						 * Confidence of detected language.
						 */
						confidence?: number;
					}[];
					/**
					 * Detected start or end of a text segment.
					 */
					detectedBreak?: {
						/**
						 * True if break prepends the element.
						 */
						isPrefix?: boolean;
						/**
						 * Detected break type.
						 */
						type?:
							| ''
							| 'UNKNOWN'
							| 'SPACE'
							| 'SURE_SPACE'
							| 'EOL_SURE_SPACE'
							| 'HYPHEN'
							| 'LINE_BREAK';
					};
				};
				/**
				 * Page height. For PDFs the unit is points.
				 */
				height?: number;
				/**
				 * List of blocks of text, images etc on this page.
				 *
				 * Items: Logical element on the page.
				 */
				blocks?: {
					/**
					 * List of paragraphs in this block (if this blocks is of type text).
					 *
					 * Items: Structural unit of text representing a number of words in certain order.
					 */
					paragraphs?: {
						/**
						 * Additional information detected for the paragraph.
						 */
						property?: {
							/**
							 * A list of detected languages together with confidence.
							 *
							 * Items: Detected language for a structural component.
							 */
							detectedLanguages?: {
								/**
								 * The BCP-47 language code, such as "en-US" or "sr-Latn".
								 */
								languageCode?: string;
								/**
								 * Confidence of detected language.
								 */
								confidence?: number;
							}[];
							/**
							 * Detected start or end of a text segment.
							 */
							detectedBreak?: {
								/**
								 * True if break prepends the element.
								 */
								isPrefix?: boolean;
								/**
								 * Detected break type.
								 */
								type?:
									| ''
									| 'UNKNOWN'
									| 'SPACE'
									| 'SURE_SPACE'
									| 'EOL_SURE_SPACE'
									| 'HYPHEN'
									| 'LINE_BREAK';
							};
						};
						/**
						 * Confidence of the OCR results for the paragraph.
						 */
						confidence?: number;
						/**
						 * The bounding box for the paragraph.
						 */
						boundingBox?: {
							/**
							 * The bounding polygon vertices.
							 *
							 * Items: A vertex represents a 2D point in the image.
							 */
							vertices?: {
								/**
								 * Y coordinate.
								 */
								y?: number;
								/**
								 * X coordinate.
								 */
								x?: number;
							}[];
							/**
							 * The bounding polygon normalized vertices.
							 *
							 * Items: A vertex represents a 2D point in the image.
							 */
							normalizedVertices?: {
								/**
								 * X coordinate.
								 */
								x?: number;
								/**
								 * Y coordinate.
								 */
								y?: number;
							}[];
						};
						/**
						 * List of all words in this paragraph.
						 *
						 * Items: A word representation.
						 */
						words?: {
							/**
							 * Additional information detected for the word.
							 */
							property?: {
								/**
								 * A list of detected languages together with confidence.
								 *
								 * Items: Detected language for a structural component.
								 */
								detectedLanguages?: {
									/**
									 * The BCP-47 language code, such as "en-US" or "sr-Latn".
									 */
									languageCode?: string;
									/**
									 * Confidence of detected language.
									 */
									confidence?: number;
								}[];
								/**
								 * Detected start or end of a text segment.
								 */
								detectedBreak?: {
									/**
									 * True if break prepends the element.
									 */
									isPrefix?: boolean;
									/**
									 * Detected break type.
									 */
									type?:
										| ''
										| 'UNKNOWN'
										| 'SPACE'
										| 'SURE_SPACE'
										| 'EOL_SURE_SPACE'
										| 'HYPHEN'
										| 'LINE_BREAK';
								};
							};
							/**
							 * List of symbols in the word.
							 *
							 * Items: A single symbol representation.
							 */
							symbols?: {
								/**
								 * Additional information detected for the symbol.
								 */
								property?: {
									/**
									 * A list of detected languages together with confidence.
									 *
									 * Items: Detected language for a structural component.
									 */
									detectedLanguages?: {
										/**
										 * The BCP-47 language code, such as "en-US" or "sr-Latn".
										 */
										languageCode?: string;
										/**
										 * Confidence of detected language.
										 */
										confidence?: number;
									}[];
									/**
									 * Detected start or end of a text segment.
									 */
									detectedBreak?: {
										/**
										 * True if break prepends the element.
										 */
										isPrefix?: boolean;
										/**
										 * Detected break type.
										 */
										type?:
											| ''
											| 'UNKNOWN'
											| 'SPACE'
											| 'SURE_SPACE'
											| 'EOL_SURE_SPACE'
											| 'HYPHEN'
											| 'LINE_BREAK';
									};
								};
								/**
								 * Confidence of the OCR results for the symbol.
								 */
								confidence?: number;
								/**
								 * The bounding box for the symbol.
								 */
								boundingBox?: {
									/**
									 * The bounding polygon vertices.
									 *
									 * Items: A vertex represents a 2D point in the image.
									 */
									vertices?: {
										/**
										 * Y coordinate.
										 */
										y?: number;
										/**
										 * X coordinate.
										 */
										x?: number;
									}[];
									/**
									 * The bounding polygon normalized vertices.
									 *
									 * Items: A vertex represents a 2D point in the image.
									 */
									normalizedVertices?: {
										/**
										 * X coordinate.
										 */
										x?: number;
										/**
										 * Y coordinate.
										 */
										y?: number;
									}[];
								};
								/**
								 * The actual UTF-8 representation of the symbol.
								 */
								text?: string;
							}[];
							/**
							 * The bounding box for the word.
							 */
							boundingBox?: {
								/**
								 * The bounding polygon vertices.
								 *
								 * Items: A vertex represents a 2D point in the image.
								 */
								vertices?: {
									/**
									 * Y coordinate.
									 */
									y?: number;
									/**
									 * X coordinate.
									 */
									x?: number;
								}[];
								/**
								 * The bounding polygon normalized vertices.
								 *
								 * Items: A vertex represents a 2D point in the image.
								 */
								normalizedVertices?: {
									/**
									 * X coordinate.
									 */
									x?: number;
									/**
									 * Y coordinate.
									 */
									y?: number;
								}[];
							};
							/**
							 * Confidence of the OCR results for the word.
							 */
							confidence?: number;
						}[];
					}[];
					/**
					 * Confidence of the OCR results on the block.
					 */
					confidence?: number;
					/**
					 * Detected block type (text, image etc) for this block.
					 */
					blockType?: '' | 'UNKNOWN' | 'TEXT' | 'TABLE' | 'PICTURE' | 'RULER' | 'BARCODE';
					/**
					 * Additional information detected for the block.
					 */
					property?: {
						/**
						 * A list of detected languages together with confidence.
						 *
						 * Items: Detected language for a structural component.
						 */
						detectedLanguages?: {
							/**
							 * The BCP-47 language code, such as "en-US" or "sr-Latn".
							 */
							languageCode?: string;
							/**
							 * Confidence of detected language.
							 */
							confidence?: number;
						}[];
						/**
						 * Detected start or end of a text segment.
						 */
						detectedBreak?: {
							/**
							 * True if break prepends the element.
							 */
							isPrefix?: boolean;
							/**
							 * Detected break type.
							 */
							type?:
								| ''
								| 'UNKNOWN'
								| 'SPACE'
								| 'SURE_SPACE'
								| 'EOL_SURE_SPACE'
								| 'HYPHEN'
								| 'LINE_BREAK';
						};
					};
					/**
					 * The bounding box for the block.
					 */
					boundingBox?: {
						/**
						 * The bounding polygon vertices.
						 *
						 * Items: A vertex represents a 2D point in the image.
						 */
						vertices?: {
							/**
							 * Y coordinate.
							 */
							y?: number;
							/**
							 * X coordinate.
							 */
							x?: number;
						}[];
						/**
						 * The bounding polygon normalized vertices.
						 *
						 * Items: A vertex represents a 2D point in the image.
						 */
						normalizedVertices?: {
							/**
							 * X coordinate.
							 */
							x?: number;
							/**
							 * Y coordinate.
							 */
							y?: number;
						}[];
					};
				}[];
			}[];
			/**
			 * UTF-8 text detected on the pages.
			 */
			text?: string;
		};
		/**
		 * If present, landmark detection has completed successfully.
		 *
		 * Items: Set of detected entity features.
		 */
		landmarkAnnotations?: {
			/**
			 * Overall score of the result.
			 */
			score?: number;
			/**
			 * The relevancy of the ICA (Image Content Annotation) label to the image.
			 */
			topicality?: number;
			/**
			 * The location information for the detected entity.
			 *
			 * Items: Detected entity location information.
			 */
			locations?: {
				/**
				 * lat/long location coordinates.
				 */
				latLng?: {
					/**
					 * The latitude in degrees. It must be in the range [-90.0, +90.0].
					 */
					latitude?: number;
					/**
					 * The longitude in degrees.
					 */
					longitude?: number;
				};
			}[];
			/**
			 * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
			 */
			mid?: string;
			/**
			 * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
			 *
			 * Items: A `Property` consists of a user-supplied name/value pair.
			 */
			properties?: {
				/**
				 * Name of the property.
				 */
				name?: string;
				/**
				 * Value of the property.
				 */
				value?: string;
				/**
				 * Value of numeric properties.
				 */
				uint64Value?: string;
			}[];
			/**
			 * Entity textual description, expressed in its `locale` language.
			 */
			description?: string;
			/**
			 * The language code for the locale in which the entity textual `description` is expressed.
			 */
			locale?: string;
			/**
			 * Image region to which this entity belongs.
			 */
			boundingPoly?: {
				/**
				 * The bounding polygon vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				vertices?: {
					/**
					 * Y coordinate.
					 */
					y?: number;
					/**
					 * X coordinate.
					 */
					x?: number;
				}[];
				/**
				 * The bounding polygon normalized vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				normalizedVertices?: {
					/**
					 * X coordinate.
					 */
					x?: number;
					/**
					 * Y coordinate.
					 */
					y?: number;
				}[];
			};
		}[];
		/**
		 * If present, text (OCR) detection has completed successfully.
		 *
		 * Items: Set of detected entity features.
		 */
		textAnnotations?: {
			/**
			 * Overall score of the result.
			 */
			score?: number;
			/**
			 * The relevancy of the ICA (Image Content Annotation) label to the image.
			 */
			topicality?: number;
			/**
			 * The location information for the detected entity.
			 *
			 * Items: Detected entity location information.
			 */
			locations?: {
				/**
				 * lat/long location coordinates.
				 */
				latLng?: {
					/**
					 * The latitude in degrees. It must be in the range [-90.0, +90.0].
					 */
					latitude?: number;
					/**
					 * The longitude in degrees.
					 */
					longitude?: number;
				};
			}[];
			/**
			 * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
			 */
			mid?: string;
			/**
			 * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
			 *
			 * Items: A `Property` consists of a user-supplied name/value pair.
			 */
			properties?: {
				/**
				 * Name of the property.
				 */
				name?: string;
				/**
				 * Value of the property.
				 */
				value?: string;
				/**
				 * Value of numeric properties.
				 */
				uint64Value?: string;
			}[];
			/**
			 * Entity textual description, expressed in its `locale` language.
			 */
			description?: string;
			/**
			 * The language code for the locale in which the entity textual `description` is expressed.
			 */
			locale?: string;
			/**
			 * Image region to which this entity belongs.
			 */
			boundingPoly?: {
				/**
				 * The bounding polygon vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				vertices?: {
					/**
					 * Y coordinate.
					 */
					y?: number;
					/**
					 * X coordinate.
					 */
					x?: number;
				}[];
				/**
				 * The bounding polygon normalized vertices.
				 *
				 * Items: A vertex represents a 2D point in the image.
				 */
				normalizedVertices?: {
					/**
					 * X coordinate.
					 */
					x?: number;
					/**
					 * Y coordinate.
					 */
					y?: number;
				}[];
			};
		}[];
	}[];
};

/**
 * Annotate images
 * Runs Google Cloud Vision detection features on one or more images.
 */
export async function annotateImages(
	this: EndpointFunctionThis,
	payload: {
		input: AnnotateImagesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AnnotateImagesOutput> {
	const response = await this.endpointCaller<AnnotateImagesOutput>(
		{
			appName: 'googlecloudvision',
			appVersion: 1,
			endpointName: 'annotateImages',
		},
		payload,
	);
	return response.output;
}
