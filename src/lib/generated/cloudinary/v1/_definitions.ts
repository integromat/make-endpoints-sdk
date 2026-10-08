// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'cloudinary',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Cloudinary API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.cloudinary.com/v1_1/{cloudName}`. Provide the remaining path in the URL parameter\n(e.g. `/resources/image`). Authentication is handled automatically via the app\'s connection.\n\nThe response body has the `api_key` field stripped for security. If Upload API responses include the API key,\nit will not appear in the output.\n\n## Limitation: Upload API paths not supported\n\nThis endpoint sends the request body as raw text (`"type": "text"`). This works for Admin API calls\n(e.g. `GET /resources/image`, `POST /resources/search`) but **does not work for Upload API paths**\n(e.g. `/image/upload`, `/image/destroy`) because the Upload API requires a properly structured\nform-encoded or JSON object body, not a raw text string.\n\nFor Upload API operations, use the dedicated endpoints instead:\n- **`uploadResource`** — for uploading resources via URL\n- **`deleteResource`** — for destroying resources\n\nRefer to the [Cloudinary API reference](https://cloudinary.com/documentation/cloudinary_references) for available\nendpoints, required parameters, and response schemas.',
		accounts: { cloudinary: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://api.cloudinary.com/v1_1/{cloudName}`. For example, `/resources/image`.',
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
		appName: 'cloudinary',
		appVersion: 1,
		endpointName: 'deleteResource',
		label: 'Delete a resource',
		description: 'Permanently deletes a single resource by its public ID.',
		context:
			'---\nname: deleteResource\ndescription: Permanently deletes a single resource by its public ID.\n---\n\nPermanently deletes a single resource (asset) from the Cloudinary product environment using the\nUpload API `POST /{resource_type}/destroy`.\n\nNote: Cloudinary uses `POST` with a `/destroy` path for deletion (not HTTP DELETE).\n\nThe `invalidate` parameter can be used to also invalidate cached copies on the CDN, but it may\ntake a few minutes to take effect.\n\nReturns `{"result": "ok"}` on success or `{"result": "not found"}` if no resource with the\nspecified public ID exists.\n\nRefer to the [Cloudinary Upload API reference](https://cloudinary.com/documentation/image_upload_api_reference#destroy_by_public_id)\nfor the complete destroy parameters and behavior.\n',
		accounts: { cloudinary: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				resource_type: {
					type: 'string',
					description:
						'The type of asset to delete. Use `video` for all video and audio assets.',
					enum: ['image', 'video', 'raw'],
				},
				public_id: {
					type: 'string',
					description:
						'The identifier of the uploaded asset to delete. Do not include a file extension for images and videos. Include the file extension for `raw` files only.',
				},
				type: {
					type: 'string',
					description: 'The delivery type of the asset to delete.',
					default: '',
					enum: ['', 'upload', 'private', 'authenticated'],
				},
				invalidate: {
					type: 'boolean',
					description:
						'Whether to also invalidate the cached copies of the asset (and all its transformed versions) on the CDN. It usually takes between a few seconds and a few minutes for the invalidation to fully propagate.',
				},
				notification_url: {
					type: 'string',
					description:
						'An HTTP or HTTPS URL to notify your application (a webhook) when the process has completed.',
				},
			},
			required: ['resource_type', 'public_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				result: {
					type: 'string',
					description:
						'The result of the delete operation. Returns `ok` on success or `not found` if the resource does not exist.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'cloudinary',
		appVersion: 1,
		endpointName: 'getResource',
		label: 'Get a resource',
		description:
			'Returns the details of a single resource by its public ID, including all derived assets.',
		context:
			'---\nname: getResource\ndescription: Returns the details of a single resource by its public ID, including all derived assets.\n---\n\nRetrieves the details of a single resource (asset) by its public ID, resource type, and delivery type,\nincluding details on all derived assets.\n\nUse the boolean flags (`colors`, `media_metadata`, `faces`, `quality_analysis`, `accessibility_analysis`,\n`pages`, `phash`, `coordinates`, `versions`) to include additional analysis data in the response.\n\nThe `public_id` parameter is the public ID of the resource. If the public ID contains path separators\n(e.g., `folder/image`), pass the full path.\n\n## Moderation\n\nFor moderated resources, the response includes `moderation_kind`, `moderation_status`, and the full\n`moderation` array with detailed results per moderation check (`kind`, `status`, `response`,\n`updated_at`). This is the only endpoint that returns the complete moderation details — the list\nendpoints (`listResourcesByType`, `listResourcesByTag`) only return the summary `moderation_kind`\nand `moderation_status` fields.\n\nRefer to the [Cloudinary Admin API reference](https://cloudinary.com/documentation/admin_api#get_details_of_a_single_resource_by_public_id)\nfor the complete list of response fields and their descriptions.',
		accounts: { cloudinary: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				resource_type: {
					type: 'string',
					description:
						'The type of the resource. Use `video` for all video and audio assets.',
					enum: ['image', 'video', 'raw'],
				},
				type: {
					type: 'string',
					description: 'The delivery type of the resource.',
					enum: [
						'upload',
						'private',
						'authenticated',
						'facebook',
						'twitter',
						'gravatar',
						'youtube',
						'vimeo',
						'hulu',
						'animoto',
						'worldstarhiphop',
						'dailymotion',
					],
				},
				public_id: {
					type: 'string',
					description:
						'The public ID of the resource to retrieve. If the public ID contains path separators (e.g., `folder/image`), pass the full path.',
				},
				colors: {
					type: 'boolean',
					description:
						'Whether to include color information: predominant colors and histogram of 32 leading colors.',
				},
				media_metadata: {
					type: 'boolean',
					description:
						"Whether to include IPTC, XMP, and detailed Exif metadata in the response. Applies to both image and video asset types. Also returns the asset's ETag value for all asset types, including raw.",
				},
				faces: {
					type: 'boolean',
					description: 'Whether to include a list of coordinates of detected faces.',
				},
				quality_analysis: {
					type: 'boolean',
					description: 'Whether to return quality analysis scores for the image.',
				},
				accessibility_analysis: {
					type: 'boolean',
					description: 'Whether to return accessibility analysis scores for the image.',
				},
				pages: {
					type: 'boolean',
					description:
						'Whether to report the number of pages in multi-page documents (e.g., PDF). For PSD/TIFF with clipping paths, the response includes a `pages` value indicating how many clipping paths are stored.',
				},
				phash: {
					type: 'boolean',
					description:
						'Whether to include the perceptual hash (pHash) of the uploaded photo for image similarity detection.',
				},
				coordinates: {
					type: 'boolean',
					description:
						'Whether to include previously specified custom cropping coordinates and faces coordinates.',
				},
				versions: {
					type: 'boolean',
					description:
						'Whether to include details of all the backed up versions of the asset. Note: requesting versions consumes an additional 10 units of your rate limit (11 total).',
				},
				related: {
					type: 'boolean',
					description: 'Whether to include the list of assets related to this asset.',
				},
				related_next_cursor: {
					type: 'string',
					description:
						'If there are more than 100 related assets, pass the `related_next_cursor` value from a previous response to retrieve the next page.',
				},
				max_results: {
					type: 'number',
					description: 'Maximum number of derived assets to return (maximum 100).',
					default: 10,
				},
				derived_next_cursor: {
					type: 'string',
					description:
						'If there are more derived images than `max_results`, pass the `derived_next_cursor` value from a previous response to retrieve the next page.',
				},
			},
			required: ['resource_type', 'type', 'public_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				asset_id: {
					type: 'string',
					description: 'The unique, immutable identifier of the asset.',
				},
				public_id: {
					type: 'string',
					description: 'The public identifier of the resource.',
				},
				format: {
					type: 'string',
					description: 'The format of the resource (e.g., jpg, png, mp4).',
				},
				version: {
					type: 'number',
					description: 'The current version number of the resource.',
				},
				resource_type: {
					type: 'string',
					description: 'The type of the resource (image, video, or raw).',
				},
				type: {
					type: 'string',
					description:
						'The delivery type of the resource (e.g., upload, private, authenticated).',
				},
				created_at: {
					type: 'string',
					description:
						'The date and time the resource was originally uploaded (ISO 8601).',
				},
				bytes: { type: 'number', description: 'The size of the resource in bytes.' },
				width: { type: 'number', description: 'The width of the resource in pixels.' },
				height: { type: 'number', description: 'The height of the resource in pixels.' },
				folder: { type: 'string', description: 'The legacy folder path of the resource.' },
				asset_folder: {
					type: 'string',
					description: 'The asset folder path where the resource is stored.',
				},
				placeholder: {
					type: 'boolean',
					description: 'Whether the asset is a placeholder.',
				},
				backup: { type: 'boolean', description: 'Whether the asset has a backup.' },
				display_name: {
					type: 'string',
					description: 'The user-friendly display name of the asset.',
				},
				url: { type: 'string', description: 'The HTTP URL for accessing the resource.' },
				secure_url: {
					type: 'string',
					description: 'The HTTPS URL for accessing the resource.',
				},
				moderation_kind: {
					type: 'string',
					description:
						'The type of moderation applied to the resource (e.g., `aws_rek`, `manual`, `webpurify`).',
				},
				moderation_status: {
					type: 'string',
					description:
						'The moderation result for the resource (e.g., `approved`, `rejected`, `pending`).',
				},
				moderation: {
					type: 'array',
					description:
						'Detailed moderation results for the resource. Each entry represents one moderation check.',
					items: {
						type: 'object',
						description: 'A moderation check result.',
						properties: {
							kind: {
								type: 'string',
								description:
									'The moderation add-on type (e.g., `aws_rek`, `manual`, `webpurify`).',
							},
							status: {
								type: 'string',
								description:
									'The moderation status (`approved`, `rejected`, `pending`, `aborted`).',
							},
							response: {
								type: 'object',
								description: 'The detailed moderation response from the add-on.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							updated_at: {
								type: 'string',
								description:
									'When the moderation check was last updated (ISO 8601).',
							},
						},
						required: [],
					},
				},
				tags: {
					type: 'array',
					description: 'The list of tags assigned to the resource.',
					items: { type: 'string', description: 'A tag assigned to the resource.' },
				},
				context: {
					type: 'object',
					description: 'Contextual metadata associated with the resource.',
					properties: {
						custom: {
							type: 'object',
							description: 'Custom contextual metadata key-value pairs.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				metadata: {
					type: 'object',
					description: 'Structured metadata fields and values assigned to the resource.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				last_updated: {
					type: 'object',
					description: 'Timestamps of when specific attributes were last changed.',
					properties: {
						access_control_updated_at: {
							type: 'string',
							description: 'When access control was last updated (ISO 8601).',
						},
						context_updated_at: {
							type: 'string',
							description: 'When context metadata was last updated (ISO 8601).',
						},
						metadata_updated_at: {
							type: 'string',
							description: 'When structured metadata was last updated (ISO 8601).',
						},
						public_id_updated_at: {
							type: 'string',
							description: 'When the public ID was last updated (ISO 8601).',
						},
						tags_updated_at: {
							type: 'string',
							description: 'When tags were last updated (ISO 8601).',
						},
						updated_at: {
							type: 'string',
							description: 'When the resource was last updated (ISO 8601).',
						},
					},
					required: [],
				},
				next_cursor: {
					type: 'string',
					description: 'A cursor for pagination through derived resources.',
				},
				derived: {
					type: 'array',
					description: 'A list of derived assets (transformations) of this resource.',
					items: {
						type: 'object',
						description: 'A derived asset of this resource.',
						properties: {
							transformation: {
								type: 'string',
								description:
									'The transformation string applied to the derived asset.',
							},
							format: {
								type: 'string',
								description: 'The format of the derived asset.',
							},
							bytes: {
								type: 'number',
								description: 'The size of the derived asset in bytes.',
							},
							id: {
								type: 'string',
								description: 'The identifier of the derived asset.',
							},
							url: {
								type: 'string',
								description: 'The HTTP URL of the derived asset.',
							},
							secure_url: {
								type: 'string',
								description: 'The HTTPS URL of the derived asset.',
							},
						},
						required: [],
					},
				},
				etag: {
					type: 'string',
					description: 'The ETag of the resource for caching purposes.',
				},
				image_metadata: {
					type: 'object',
					description:
						'IPTC, XMP, and Exif metadata. Returned when `media_metadata` is requested.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				coordinates: {
					type: 'object',
					description:
						'Custom cropping and faces coordinates. Returned when `coordinates` is requested.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				faces: {
					type: 'array',
					description:
						'A list of coordinates of detected faces. Returned when `faces` is requested.',
					items: {
						type: 'array',
						description: 'Coordinates of a detected face [x, y, width, height].',
						items: {
							type: 'number',
							description: 'A coordinate value of the detected face bounding box.',
						},
					},
				},
				illustration_score: {
					type: 'number',
					description:
						'A score indicating how likely the image is an illustration (0 = photo, 1 = illustration).',
				},
				semi_transparent: {
					type: 'boolean',
					description: 'Whether the image has semi-transparent pixels.',
				},
				grayscale: { type: 'boolean', description: 'Whether the image is grayscale.' },
				colors: {
					type: 'array',
					description:
						'Color information for the image. Returned when `colors` is requested.',
					items: {
						type: 'array',
						description: 'A color entry [hex_value, percentage].',
						items: {
							type: 'string',
							description: 'The color hex value or percentage.',
						},
					},
				},
				predominant: {
					type: 'object',
					description: 'The predominant colors detected in the image.',
					properties: {
						google: {
							type: 'array',
							description: 'Predominant colors as classified by Google.',
							items: {
								type: 'array',
								description: 'A predominant color entry [color name, percentage].',
								items: {
									type: 'string',
									description: 'The color name or percentage.',
								},
							},
						},
						cloudinary: {
							type: 'array',
							description: 'Predominant colors as classified by Cloudinary.',
							items: {
								type: 'array',
								description: 'A predominant color entry [color name, percentage].',
								items: {
									type: 'string',
									description: 'The color name or percentage.',
								},
							},
						},
					},
					required: [],
				},
				phash: {
					type: 'string',
					description:
						'The perceptual hash of the image. Returned when `phash` is requested.',
				},
				quality_analysis: {
					type: 'object',
					description:
						'Quality analysis scores. Returned when `quality_analysis` is requested.',
					properties: {
						focus: {
							type: 'number',
							description: 'The focus score of the image (0 to 1).',
						},
					},
					required: [],
				},
				accessibility_analysis: {
					type: 'object',
					description:
						'Accessibility analysis scores. Returned when `accessibility_analysis` is requested.',
					properties: {
						colorblind_accessibility_analysis: {
							type: 'object',
							description: 'Analysis of colorblind accessibility.',
							properties: {
								distinct_edges: {
									type: 'number',
									description:
										'The ratio of distinct edges visible to colorblind viewers.',
								},
								distinct_colors: {
									type: 'number',
									description:
										'The ratio of distinct colors visible to colorblind viewers.',
								},
								most_indistinct_pair: {
									type: 'array',
									description:
										'The pair of colors most difficult to distinguish.',
									items: {
										type: 'string',
										description: 'A color in the most indistinct pair.',
									},
								},
							},
							required: [],
						},
						colorblind_accessibility_score: {
							type: 'number',
							description: 'The overall colorblind accessibility score (0 to 1).',
						},
					},
					required: [],
				},
				pages: {
					type: 'number',
					description:
						'The number of pages in a multi-page document. Returned when `pages` is requested.',
				},
				related: {
					type: 'object',
					description: 'Related assets. Returned when `related` is requested.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				usage: {
					type: 'object',
					description: 'Usage details for the resource.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				original_filename: {
					type: 'string',
					description: 'The original filename of the uploaded resource.',
				},
				versions: {
					type: 'array',
					description:
						'Details of all backed up versions. Returned when `versions` is requested.',
					items: {
						type: 'object',
						description: 'A backed up version of the asset.',
						properties: {
							version_id: {
								type: 'string',
								description: 'The unique identifier of this version.',
							},
							version: { type: 'string', description: 'The version number.' },
							format: { type: 'string', description: 'The format of this version.' },
							size: {
								type: 'number',
								description: 'The size of this version in bytes.',
							},
							time: {
								type: 'string',
								description: 'The timestamp when this version was created.',
							},
							restorable: {
								type: 'boolean',
								description: 'Whether this version can be restored.',
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
		appName: 'cloudinary',
		appVersion: 1,
		endpointName: 'getUsage',
		label: 'Get usage report',
		description: 'Returns a usage report for the product environment.',
		context:
			'---\nname: getUsage\ndescription: Returns a usage report for the product environment.\n---\n\nReturns a usage report for the Cloudinary product environment using the Admin API\n`GET /usage/{date}`.\n\nThe report includes statistics on transformations, bandwidth, storage, credits,\nrequests, resources, and media limits.\n\nThe optional `date` parameter specifies the date for the report (must be within the\nlast 3 months). If omitted, the report is for the current date.\n\nNote: usage numbers are updated periodically and may not reflect real-time values.\n\nRefer to the [Cloudinary Admin API reference](https://cloudinary.com/documentation/admin_api#usage)\nfor the complete list of response fields.\n',
		accounts: { cloudinary: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				date: {
					type: 'string',
					description:
						'The date for the usage report. Must be within the last 3 months. Defaults to the current date if left empty.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				plan: { type: 'string', description: 'The name of the Cloudinary plan.' },
				last_updated: {
					type: 'string',
					description: 'The date the usage data was last updated.',
				},
				date_requested: {
					type: 'string',
					description: 'The date that was requested for the usage report (ISO 8601).',
				},
				transformations: {
					type: 'object',
					description: 'Transformation usage statistics.',
					properties: {
						usage: {
							type: 'number',
							description: 'The number of transformations used.',
						},
						limit: {
							type: 'number',
							description: 'The transformation limit for the plan.',
						},
						used_percent: {
							type: 'number',
							description: 'The percentage of the transformation limit used.',
						},
						credits_usage: {
							type: 'number',
							description: 'The number of credits used for transformations.',
						},
						breakdown: {
							type: 'object',
							description: 'Detailed breakdown of transformation usage by type.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
					},
					required: [],
				},
				objects: {
					type: 'object',
					description: 'Object usage statistics.',
					properties: {
						usage: { type: 'number', description: 'The number of objects.' },
					},
					required: [],
				},
				bandwidth: {
					type: 'object',
					description: 'Bandwidth usage statistics.',
					properties: {
						usage: { type: 'number', description: 'The bandwidth used in bytes.' },
						limit: { type: 'number', description: 'The bandwidth limit in bytes.' },
						used_percent: {
							type: 'number',
							description: 'The percentage of the bandwidth limit used.',
						},
						credits_usage: {
							type: 'number',
							description: 'The number of credits used for bandwidth.',
						},
					},
					required: [],
				},
				storage: {
					type: 'object',
					description: 'Storage usage statistics.',
					properties: {
						usage: { type: 'number', description: 'The storage used in bytes.' },
						limit: { type: 'number', description: 'The storage limit in bytes.' },
						used_percent: {
							type: 'number',
							description: 'The percentage of the storage limit used.',
						},
						credits_usage: {
							type: 'number',
							description: 'The number of credits used for storage.',
						},
					},
					required: [],
				},
				credits: {
					type: 'object',
					description: 'Credit usage and limits.',
					properties: {
						usage: { type: 'number', description: 'The number of credits used.' },
						limit: { type: 'number', description: 'The credit limit for the plan.' },
						used_percent: {
							type: 'number',
							description: 'The percentage of credits used.',
						},
					},
					required: [],
				},
				requests: { type: 'number', description: 'The number of API requests made.' },
				resources: { type: 'number', description: 'The total number of resources stored.' },
				derived_resources: {
					type: 'number',
					description: 'The total number of derived resources.',
				},
				media_limits: {
					type: 'object',
					description: 'Media size limits for the plan.',
					properties: {
						image_max_size_bytes: {
							type: 'number',
							description: 'The maximum image file size in bytes.',
						},
						video_max_size_bytes: {
							type: 'number',
							description: 'The maximum video file size in bytes.',
						},
						raw_max_size_bytes: {
							type: 'number',
							description: 'The maximum raw file size in bytes.',
						},
						image_max_px: {
							type: 'number',
							description: 'The maximum number of pixels for an image.',
						},
						asset_max_total_px: {
							type: 'number',
							description: 'The maximum total number of pixels for an asset.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'cloudinary',
		appVersion: 1,
		endpointName: 'listResourcesByTag',
		label: 'List resources by tag',
		description: 'Lists resources with a specified tag.',
		context:
			'---\nname: listResourcesByTag\ndescription: Lists resources with a specified tag.\n---\n\nLists resources (assets) that have a specified tag, filtered by resource type. Uses the Admin API\n`GET /resources/{resource_type}/tags/{tag}`.\n\nThis endpoint does not return deleted assets even if they have been backed up.\n\nEnable `tags`, `context`, and `metadata` flags to include additional metadata per resource.\n\nUse `next_cursor` for pagination: pass the `next_cursor` value from a previous response\nto retrieve the next page.\n\n## Moderation\n\nFor moderated resources, the response automatically includes `moderation_kind` and\n`moderation_status` as top-level fields on each resource — no special parameter is needed.\nHowever, the full `moderation` array (with detailed `kind`, `status`, `response`, and\n`updated_at` per check) is **only available from the `getResource` endpoint** (the detail\nview). Use `getResource` to retrieve the complete moderation history for a specific asset.\n\nRefer to the [Cloudinary Admin API reference](https://cloudinary.com/documentation/admin_api#get_resources_by_tag)\nfor the full list of parameters and response fields.',
		accounts: { cloudinary: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				resource_type: {
					type: 'string',
					description:
						'The type of resources to list. Use `video` for all video and audio assets.',
					enum: ['image', 'video', 'raw'],
				},
				tag: {
					type: 'string',
					description:
						'The tag to filter resources by. Only resources with this tag are returned.',
				},
				max_results: {
					type: 'number',
					description: 'The maximum number of resources to return (maximum 500).',
					default: 10,
				},
				next_cursor: {
					type: 'string',
					description:
						'A cursor for pagination. Pass the `next_cursor` value from a previous response to retrieve the next page of results.',
				},
				direction: {
					type: 'string',
					description: 'Control the order of returned assets by `created_at` date.',
					default: '',
					enum: ['', 'desc', 'asc'],
				},
				tags: {
					type: 'boolean',
					description:
						'Whether to include the full list of tags for each resource in the response.',
				},
				context: {
					type: 'boolean',
					description:
						'Whether to include contextual metadata for each resource in the response.',
				},
				metadata: {
					type: 'boolean',
					description:
						'Whether to include the structured metadata fields and values assigned to each asset.',
				},
			},
			required: ['resource_type', 'tag'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resources: {
					type: 'array',
					description: 'The list of resources with the specified tag.',
					items: {
						type: 'object',
						description: 'A resource with the specified tag.',
						properties: {
							asset_id: {
								type: 'string',
								description: 'The unique, immutable identifier of the asset.',
							},
							public_id: {
								type: 'string',
								description: 'The public identifier of the resource.',
							},
							format: { type: 'string', description: 'The format of the resource.' },
							version: { type: 'number', description: 'The current version number.' },
							resource_type: {
								type: 'string',
								description: 'The type of the resource.',
							},
							type: {
								type: 'string',
								description: 'The delivery type of the resource.',
							},
							created_at: {
								type: 'string',
								description:
									'The date and time the resource was created (ISO 8601).',
							},
							bytes: {
								type: 'number',
								description: 'The size of the resource in bytes.',
							},
							width: {
								type: 'number',
								description: 'The width of the resource in pixels.',
							},
							height: {
								type: 'number',
								description: 'The height of the resource in pixels.',
							},
							folder: {
								type: 'string',
								description: 'The legacy folder path of the resource.',
							},
							asset_folder: {
								type: 'string',
								description: 'The asset folder path where the resource is stored.',
							},
							placeholder: {
								type: 'boolean',
								description: 'Whether the asset is a placeholder.',
							},
							backup: {
								type: 'boolean',
								description: 'Whether the asset has a backup.',
							},
							display_name: {
								type: 'string',
								description: 'The user-friendly display name of the asset.',
							},
							url: {
								type: 'string',
								description: 'The HTTP URL for accessing the resource.',
							},
							secure_url: {
								type: 'string',
								description: 'The HTTPS URL for accessing the resource.',
							},
							tags: {
								type: 'array',
								description:
									'The tags assigned to the resource. Returned when `tags` is requested.',
								items: {
									type: 'string',
									description: 'A tag assigned to the resource.',
								},
							},
							context: {
								type: 'object',
								description:
									'Contextual metadata. Returned when `context` is requested.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							metadata: {
								type: 'object',
								description:
									'Structured metadata. Returned when `metadata` is requested.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							last_updated: {
								type: 'object',
								description:
									'Timestamps of when specific attributes were last changed.',
								properties: {
									tags_updated_at: {
										type: 'string',
										description: 'When tags were last updated (ISO 8601).',
									},
									metadata_updated_at: {
										type: 'string',
										description:
											'When structured metadata was last updated (ISO 8601).',
									},
									updated_at: {
										type: 'string',
										description:
											'When the resource was last updated (ISO 8601).',
									},
								},
								required: [],
							},
							moderation_kind: {
								type: 'string',
								description:
									'The type of moderation applied to the resource (e.g., `aws_rek`, `manual`, `webpurify`).',
							},
							moderation_status: {
								type: 'string',
								description:
									'The moderation result for the resource (e.g., `approved`, `rejected`, `pending`).',
							},
						},
						required: [],
					},
				},
				next_cursor: {
					type: 'string',
					description: 'A cursor for retrieving the next page of results.',
				},
				rate_limit_allowed: {
					type: 'number',
					description: 'The maximum number of API requests allowed per hour.',
				},
				rate_limit_reset_at: {
					type: 'string',
					description: 'The time at which the rate limit counter resets (ISO 8601).',
				},
				rate_limit_remaining: {
					type: 'number',
					description:
						'The number of API requests remaining before the rate limit is reached.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'cloudinary',
		appVersion: 1,
		endpointName: 'listResourcesByType',
		label: 'List resources by type',
		description: 'Lists resources of a specified resource type.',
		context:
			'---\nname: listResourcesByType\ndescription: Lists resources of a specified resource type.\n---\n\nLists resources (assets) uploaded to the product environment, filtered by resource type\n(`image`, `video`, or `raw`) and optionally by delivery type (`upload`, `private`, etc.).\nUses the Admin API `GET /resources/:resource_type(/:type)`.\n\n## Delivery type\n\nThe `type` parameter controls the delivery type filter. When not set, resources of all\ndelivery types are returned. When set (e.g. `upload`), only resources of that delivery\ntype are listed. **`prefix` and `public_ids` require `type` to be set** — the Cloudinary\nAPI returns a 400 error without it.\n\n## start_at and direction\n\nThe `start_at` parameter filters resources created since a given timestamp. However,\n**`start_at` silently requires `direction` to be set to `asc`** (Ascending) to return\nresults. Without `direction: asc`, the API returns an empty `resources: []` with no\nerror, even when matching resources exist. Always set `direction` to `Ascending` when\nusing `start_at`.\n\n## Moderation\n\nFor moderated resources, the response automatically includes `moderation_kind` and\n`moderation_status` as top-level fields on each resource — no special parameter is needed.\nHowever, the full `moderation` array (with detailed `kind`, `status`, `response`, and\n`updated_at` per check) is **only available from the `getResource` endpoint** (the detail\nview). Use `getResource` to retrieve the complete moderation history for a specific asset.\n\n## Pagination\n\nUse `next_cursor` for pagination: pass the `next_cursor` value from a previous response\nto retrieve the next page. The `max_results` parameter controls page size (up to 500,\ndefault 10).\n\nRefer to the [Cloudinary Admin API reference](https://cloudinary.com/documentation/admin_api_resources_get_resources)\nfor the full list of parameters and response fields.',
		accounts: { cloudinary: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				resource_type: {
					type: 'string',
					description:
						'The type of resources to list. Use `video` for all video and audio assets.',
					enum: ['image', 'video', 'raw'],
				},
				type: {
					type: 'string',
					description:
						'The delivery type of assets to list. When not set, resources of all delivery types are returned. Required when using `Prefix` or `Public IDs` filters.',
					default: '',
					enum: [
						'',
						'upload',
						'private',
						'authenticated',
						'fetch',
						'facebook',
						'twitter',
						'gravatar',
						'youtube',
						'vimeo',
						'hulu',
						'animoto',
						'worldstarhiphop',
						'dailymotion',
						'list',
					],
				},
				prefix: {
					type: 'string',
					description:
						'Find all assets with a public ID that starts with the specified prefix. The assets are sorted by public ID in the response. Requires `Delivery type` to be set.',
				},
				public_ids: {
					type: 'array',
					description:
						'An array of public IDs (up to 100). Get assets with the specified public IDs. Does not support public IDs with a `+` character (use `Prefix` instead). Requires `Delivery type` to be set.',
					items: {
						type: 'string',
						description: 'A public ID of a resource to retrieve.',
					},
				},
				max_results: {
					type: 'number',
					description: 'The maximum number of resources to return (up to 500).',
					default: 10,
				},
				next_cursor: {
					type: 'string',
					description:
						'A cursor for pagination. Pass the `next_cursor` value from a previous response to retrieve the next page of results.',
				},
				start_at: {
					type: 'string',
					description:
						'Get assets created since the specified timestamp in ISO 8601 format (e.g., `2020-12-01`). Requires `Direction` to be set to `Ascending`, otherwise results may be empty. Not supported when `prefix` or `public_ids` are specified.',
				},
				direction: {
					type: 'string',
					description:
						'Control the order of returned assets by `created_at` date. If a `prefix` is specified, this parameter is ignored and results are sorted by public ID.',
					default: '',
					enum: ['', 'desc', 'asc'],
				},
				context: {
					type: 'boolean',
					description:
						'Whether to include key-value pairs of contextual metadata associated with each asset.',
				},
				metadata: {
					type: 'boolean',
					description:
						'Whether to include the structured metadata fields and values assigned to each asset.',
				},
				tags: {
					type: 'boolean',
					description:
						'Whether to include the list of tags for each resource in the response.',
				},
			},
			required: ['resource_type'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				resources: {
					type: 'array',
					description: 'The list of resources matching the specified type.',
					items: {
						type: 'object',
						description: 'A resource in the list.',
						properties: {
							asset_id: {
								type: 'string',
								description: 'The unique, immutable identifier of the asset.',
							},
							public_id: {
								type: 'string',
								description: 'The public identifier of the resource.',
							},
							format: { type: 'string', description: 'The format of the resource.' },
							version: { type: 'number', description: 'The current version number.' },
							resource_type: {
								type: 'string',
								description: 'The type of the resource.',
							},
							type: {
								type: 'string',
								description: 'The delivery type of the resource.',
							},
							created_at: {
								type: 'string',
								description:
									'The date and time the resource was created (ISO 8601).',
							},
							bytes: {
								type: 'number',
								description: 'The size of the resource in bytes.',
							},
							width: {
								type: 'number',
								description: 'The width of the resource in pixels.',
							},
							height: {
								type: 'number',
								description: 'The height of the resource in pixels.',
							},
							folder: {
								type: 'string',
								description: 'The legacy folder path of the resource.',
							},
							asset_folder: {
								type: 'string',
								description: 'The asset folder path where the resource is stored.',
							},
							placeholder: {
								type: 'boolean',
								description: 'Whether the asset is a placeholder.',
							},
							backup: {
								type: 'boolean',
								description: 'Whether the asset has a backup.',
							},
							display_name: {
								type: 'string',
								description: 'The user-friendly display name of the asset.',
							},
							url: {
								type: 'string',
								description: 'The HTTP URL for accessing the resource.',
							},
							secure_url: {
								type: 'string',
								description: 'The HTTPS URL for accessing the resource.',
							},
							tags: {
								type: 'array',
								description:
									'The tags assigned to the resource. Returned when `tags` is requested.',
								items: {
									type: 'string',
									description: 'A tag assigned to the resource.',
								},
							},
							context: {
								type: 'object',
								description:
									'Contextual metadata. Returned when `context` is requested.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							metadata: {
								type: 'object',
								description:
									'Structured metadata. Returned when `metadata` is requested.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							last_updated: {
								type: 'object',
								description:
									'Timestamps of when specific attributes were last changed.',
								properties: {
									tags_updated_at: {
										type: 'string',
										description: 'When tags were last updated (ISO 8601).',
									},
									metadata_updated_at: {
										type: 'string',
										description:
											'When structured metadata was last updated (ISO 8601).',
									},
									updated_at: {
										type: 'string',
										description:
											'When the resource was last updated (ISO 8601).',
									},
								},
								required: [],
							},
							moderation_kind: {
								type: 'string',
								description:
									'The type of moderation applied to the resource (e.g., `aws_rek`, `manual`, `webpurify`).',
							},
							moderation_status: {
								type: 'string',
								description:
									'The moderation result for the resource (e.g., `approved`, `rejected`, `pending`).',
							},
						},
						required: [],
					},
				},
				next_cursor: {
					type: 'string',
					description: 'A cursor for retrieving the next page of results.',
				},
				rate_limit_allowed: {
					type: 'number',
					description: 'The maximum number of API requests allowed per hour.',
				},
				rate_limit_reset_at: {
					type: 'string',
					description: 'The time at which the rate limit counter resets (ISO 8601).',
				},
				rate_limit_remaining: {
					type: 'number',
					description:
						'The number of API requests remaining before the rate limit is reached.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'cloudinary',
		appVersion: 1,
		endpointName: 'searchResources',
		label: 'Search resources',
		description: 'Searches for resources using a Lucene-like query expression.',
		context:
			"Searches for resources (assets) in the product environment using a Lucene-like query language via\nthe Search API (`POST /resources/search`).\n\nThe `expression` parameter accepts search expressions like `resource_type:image AND tags:cat` or\n`uploaded_at>1w AND bytes>1m`. See the [search expression documentation](https://cloudinary.com/documentation/search_api#expressions)\nfor the full syntax.\n\nThe `sort_by` parameter uses a key-value input: each entry has a **Field name** (e.g., `created_at`,\n`public_id`, `score`) and a **Direction** (`asc` or `desc`). The endpoint converts these to the\nCloudinary API's native format using the app's `parseSortBy` function.\n\nUse `next_cursor` for pagination: pass the `next_cursor` value from a previous response to retrieve\nsubsequent pages.\n\nRefer to the [Cloudinary Search API reference](https://cloudinary.com/documentation/search_api)\nfor available search fields and operators.",
		accounts: { cloudinary: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: true,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				expression: {
					type: 'string',
					description:
						'The search expression in Lucene-like query language (e.g., `resource_type:image AND tags:cat`). If not provided, all resources are listed (up to `max_results`). See [search expressions](https://cloudinary.com/documentation/search_api#expressions).',
				},
				sort_by: {
					type: 'array',
					description:
						'Sort criteria. Each entry specifies a field name and a direction. Supported fields include `created_at`, `public_id`, `score` (for relevance).',
					items: {
						type: 'object',
						description: 'A sort criterion specifying a field name and direction.',
						properties: {
							key: {
								type: 'string',
								description:
									'The field to sort by (e.g., `created_at`, `public_id`, `score`).',
							},
							value: {
								type: 'string',
								description: 'The sort direction.',
								default: '',
								enum: ['', 'asc', 'desc'],
							},
						},
						required: [],
					},
				},
				max_results: {
					type: 'number',
					description: 'The maximum number of resources to return (maximum 500).',
					default: 10,
				},
				next_cursor: {
					type: 'string',
					description:
						'A cursor for pagination. Pass the `next_cursor` value from a previous response to retrieve the next page of results.',
				},
				with_field: {
					type: 'string',
					description:
						'The name of an additional asset attribute to include for each asset in the response. Possible values: `context`, `tags`, `metadata`, `image_metadata`, `image_analysis`. You can specify multiple values separated by commas.',
				},
				fields: {
					type: 'string',
					description:
						'A comma-separated list of fields to include in the response. Takes precedence over `with_field`, so make sure to include any additional attributes here as well. The following fields are always included: `public_id`, `asset_id`, `asset_folder`, `created_at`, `status`, `type`, `resource_type`.',
				},
				aggregate: {
					type: 'string',
					description:
						'The name of a field for which an aggregation count should be calculated and returned in the response. Tier 2 only.',
					default: '',
					enum: ['', 'resource_type', 'type', 'format', 'pixels', 'duration', 'bytes'],
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				total_count: {
					type: 'number',
					description: 'The total number of resources matching the search expression.',
				},
				time: {
					type: 'number',
					description: 'The time taken to process the search query, in milliseconds.',
				},
				next_cursor: {
					type: 'string',
					description:
						'A cursor for retrieving the next page of results. Pass this value in the `next_cursor` input parameter.',
				},
				resources: {
					type: 'array',
					description: 'The list of resources matching the search criteria.',
					items: {
						type: 'object',
						description: 'A resource matching the search criteria.',
						properties: {
							asset_id: {
								type: 'string',
								description: 'The unique, immutable identifier of the asset.',
							},
							public_id: {
								type: 'string',
								description: 'The public identifier of the resource.',
							},
							asset_folder: {
								type: 'string',
								description: 'The asset folder path where the resource is stored.',
							},
							display_name: {
								type: 'string',
								description: 'The user-friendly display name of the asset.',
							},
							folder: {
								type: 'string',
								description: 'The folder path of the resource.',
							},
							filename: {
								type: 'string',
								description: 'The filename of the resource.',
							},
							format: { type: 'string', description: 'The format of the resource.' },
							version: { type: 'number', description: 'The current version number.' },
							resource_type: {
								type: 'string',
								description: 'The type of the resource.',
							},
							type: {
								type: 'string',
								description: 'The delivery type of the resource.',
							},
							created_at: {
								type: 'string',
								description:
									'The date and time the resource was originally uploaded (ISO 8601).',
							},
							uploaded_at: {
								type: 'string',
								description:
									'The date and time the resource was last uploaded (ISO 8601).',
							},
							bytes: {
								type: 'number',
								description: 'The size of the resource in bytes.',
							},
							backup_bytes: {
								type: 'number',
								description: 'The size of the resource backup in bytes.',
							},
							width: {
								type: 'number',
								description: 'The width of the resource in pixels.',
							},
							height: {
								type: 'number',
								description: 'The height of the resource in pixels.',
							},
							aspect_ratio: {
								type: 'number',
								description: 'The aspect ratio of the resource.',
							},
							pixels: {
								type: 'number',
								description: 'The total number of pixels in the resource.',
							},
							url: {
								type: 'string',
								description: 'The HTTP URL for accessing the resource.',
							},
							secure_url: {
								type: 'string',
								description: 'The HTTPS URL for accessing the resource.',
							},
							status: { type: 'string', description: 'The status of the resource.' },
							access_mode: {
								type: 'string',
								description: 'The access mode of the resource.',
							},
							tags: {
								type: 'array',
								description:
									'The tags assigned to the resource. Returned when requested via `with_field`.',
								items: {
									type: 'string',
									description: 'A tag assigned to the resource.',
								},
							},
							context: {
								type: 'object',
								description:
									'Contextual metadata. Returned when requested via `with_field`.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							etag: { type: 'string', description: 'The ETag of the resource.' },
							created_by: {
								type: 'object',
								description: 'Information about who created the resource.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							uploaded_by: {
								type: 'object',
								description: 'Information about who uploaded the resource.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						required: [],
					},
				},
				aggregations: {
					type: 'object',
					description: 'Aggregation counts. Returned when `aggregate` is provided.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
	{
		appName: 'cloudinary',
		appVersion: 1,
		endpointName: 'uploadResource',
		label: 'Upload a resource',
		description: 'Uploads a resource from a URL to the product environment.',
		context:
			"---\nname: uploadResource\ndescription: Uploads a resource from a URL to the product environment.\n---\n\nUploads a resource (asset) to the Cloudinary product environment using the Upload API\n`POST /{resource_type}/upload`.\n\n**Important: URL upload only.** This endpoint accepts a file URL (HTTP, HTTPS, FTP, or allowlisted\nS3/Google Storage bucket URL) in the `file` parameter. Binary file upload is not supported in\nSDK Endpoints. Use the `arbitraryCall` endpoint or the Make module for binary uploads.\n\nAuthentication uses Basic auth (API key + secret) via the app's base configuration — no\nsignature calculation is needed.\n\nThe `resourceType` determines how Cloudinary processes the file: `image` for images, `video` for\nvideo and audio files, `raw` for non-media files, or `auto` to let Cloudinary detect automatically.\n\nRefer to the [Cloudinary Upload API reference](https://cloudinary.com/documentation/image_upload_api_reference#upload)\nfor the complete list of upload parameters and response fields.\n",
		accounts: { cloudinary: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				resource_type: {
					type: 'string',
					description:
						'The type of asset to upload. Use `video` for all video and audio assets. Use `auto` to automatically detect the file type.',
					enum: ['image', 'video', 'raw', 'auto'],
				},
				file: {
					type: 'string',
					description:
						'The URL of the file to upload. Accepts a remote HTTP/HTTPS URL, an FTP URL, a Base64 Data URI, or a private storage bucket (S3 or Google Storage) URL of an allowlisted bucket. Binary file upload is not supported in SDK Endpoints.',
				},
				type: {
					type: 'string',
					description: 'The delivery type of the uploaded resource.',
					default: '',
					enum: ['', 'upload', 'private', 'authenticated'],
				},
				public_id: {
					type: 'string',
					description:
						'The identifier for accessing the uploaded asset. A randomly generated ID is assigned if left blank. Can include folder path separated by `/`. Do not include a file extension for images and videos.',
				},
				display_name: {
					type: 'string',
					description:
						'A user-friendly name for the asset shown in the Media Library. Defaults to the public ID. Can have spaces and special characters but cannot include forward slashes.',
				},
				asset_folder: {
					type: 'string',
					description:
						"The full path of the folder where the asset is placed in the Cloudinary repository. Does not impact the asset's public ID path. Not relevant for product environments using legacy fixed folder mode.",
				},
				folder: {
					type: 'string',
					description:
						'Only relevant for product environments using legacy fixed folder mode. Defines both the folder path and a prefix prepended to the public ID.',
				},
				upload_preset: {
					type: 'string',
					description:
						'The name of an upload preset defined for the Cloudinary product environment. Upload presets centrally define upload options.',
				},
				use_filename: {
					type: 'boolean',
					description:
						'Whether to use the original file name of the uploaded asset as the public ID. Only relevant if `public_id` is not set.',
				},
				unique_filename: {
					type: 'boolean',
					description:
						'Whether to append random characters to the filename to guarantee uniqueness. Only relevant when `use_filename` is `true`.',
					default: true,
				},
				overwrite: {
					type: 'boolean',
					description:
						'Whether to overwrite an existing asset with the same public ID. When `false` and an asset with the same public ID exists, the upload returns the existing asset.',
				},
				tags: {
					type: 'string',
					description:
						'A comma-separated list of tags to assign to the uploaded asset (e.g., `animal,cat`).',
				},
				context: {
					type: 'string',
					description:
						'A pipe-separated list of key-value pairs of contextual metadata (e.g., `alt=My image|caption=Profile image`). Escape `=` and `|` with a backslash.',
				},
				metadata: {
					type: 'string',
					description:
						'A pipe-separated list of custom metadata fields (by external_id) and values (e.g., `in_stock_id=50|color_id=["green","red"]`).',
				},
				notification_url: {
					type: 'string',
					description:
						'An HTTP or HTTPS URL to notify your application (a webhook) when the upload or any requested asynchronous action is completed.',
				},
				eager: {
					type: 'string',
					description:
						'A pipe-separated list of transformations to create for the uploaded asset eagerly, instead of lazily on first access.',
				},
				invalidate: {
					type: 'boolean',
					description:
						'Whether to invalidate CDN cached copies of a previously uploaded asset with the same public ID.',
				},
				moderation: {
					type: 'string',
					description:
						'The moderation mode: `manual`, `perception_point`, `webpurify`, `aws_rek`, `duplicate:<threshold>`, `aws_rek_video`, or `google_video_moderation`. Multiple values separated by pipe.',
				},
				media_metadata: {
					type: 'boolean',
					description:
						'Whether to return IPTC, XMP, and detailed Exif metadata of the uploaded asset in the response.',
				},
				colors: {
					type: 'boolean',
					description:
						'Whether to retrieve predominant colors and color histogram of the uploaded image.',
				},
				faces: {
					type: 'boolean',
					description:
						'Whether to return the coordinates of faces contained in the uploaded image.',
				},
				quality_analysis: {
					type: 'boolean',
					description:
						'Whether to return a quality analysis value for the image between 0 and 1.',
				},
				phash: {
					type: 'boolean',
					description:
						'Whether to return the perceptual hash (pHash) of the uploaded photo for image similarity detection.',
				},
			},
			required: ['resource_type', 'file'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				asset_id: {
					type: 'string',
					description: 'The unique, immutable identifier of the uploaded asset.',
				},
				public_id: {
					type: 'string',
					description: 'The public identifier of the uploaded resource.',
				},
				version: {
					type: 'number',
					description: 'The version number of the uploaded resource.',
				},
				version_id: {
					type: 'string',
					description: 'The unique identifier of this specific version.',
				},
				signature: {
					type: 'string',
					description: 'The signature of the upload response for verification.',
				},
				width: {
					type: 'number',
					description: 'The width of the uploaded resource in pixels.',
				},
				height: {
					type: 'number',
					description: 'The height of the uploaded resource in pixels.',
				},
				format: {
					type: 'string',
					description: 'The format of the uploaded resource (e.g., jpg, png, mp4).',
				},
				resource_type: {
					type: 'string',
					description: 'The type of the uploaded resource (image, video, or raw).',
				},
				created_at: {
					type: 'string',
					description: 'The date and time the resource was uploaded (ISO 8601).',
				},
				tags: {
					type: 'array',
					description: 'The tags assigned to the uploaded resource.',
					items: { type: 'string', description: 'A tag assigned to the resource.' },
				},
				bytes: {
					type: 'number',
					description: 'The size of the uploaded resource in bytes.',
				},
				type: {
					type: 'string',
					description: 'The delivery type of the uploaded resource.',
				},
				etag: { type: 'string', description: 'The ETag of the uploaded resource.' },
				placeholder: {
					type: 'boolean',
					description: 'Whether the asset is a placeholder.',
				},
				asset_folder: {
					type: 'string',
					description: 'The asset folder path where the resource is stored.',
				},
				display_name: {
					type: 'string',
					description: 'The user-friendly display name of the asset.',
				},
				url: {
					type: 'string',
					description: 'The HTTP URL for accessing the uploaded resource.',
				},
				secure_url: {
					type: 'string',
					description: 'The HTTPS URL for accessing the uploaded resource.',
				},
				access_mode: {
					type: 'string',
					description: 'The access mode of the uploaded resource.',
				},
				original_filename: {
					type: 'string',
					description: 'The original filename of the uploaded resource.',
				},
				overwritten: {
					type: 'boolean',
					description: 'Whether an existing resource was overwritten.',
				},
				existing: {
					type: 'boolean',
					description: 'Whether the resource already existed (when overwrite is false).',
				},
				context: {
					type: 'object',
					description: 'Contextual metadata associated with the resource.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				metadata: {
					type: 'object',
					description: 'Structured metadata fields and values assigned to the resource.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
			},
			required: [],
		},
	},
];
