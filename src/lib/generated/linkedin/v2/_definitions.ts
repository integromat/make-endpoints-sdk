// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the LinkedIn API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.linkedin.com/`. Provide the remaining path in the URL parameter\n(e.g. `/rest/organizationAcls`). Authentication is handled automatically via the app\'s connection.\n\nLinkedIn\'s unversioned API (`/v2/...`) was deprecated in March 2023 in favor of the versioned base path\n`https://api.linkedin.com/rest/`. A URL starting with `/v2` is automatically converted to `/rest`\n(except `/v2/me` and `/v2/userinfo`, which stay unversioned). Every request automatically includes the\n`X-Restli-Protocol-Version: 2.0.0` and `Linkedin-Version: 202605` headers unless you override them via the\n**Headers** parameter.\n\nThe URL must be a path, never a full URL. A URL that starts with a scheme or with `//` (for example\n`https://api.linkedin.com/rest/organizationAcls`) is rejected with an error. Remove the scheme and the host.\n\nThe path is sent exactly as written and is not encoded again. With the `X-Restli-Protocol-Version: 2.0.0`\nheader (the default) LinkedIn requires the reserved characters of a key in the path to be percent-encoded, so\naddress a post as `/rest/posts/urn%3Ali%3Ashare%3A7525865890798768128`. A plain colon URN\n(`/rest/posts/urn:li:share:7525865890798768128`) is rejected with `400 Syntax exception in path variables`.\nIt was only accepted when the `X-Restli-Protocol-Version` header was set to `1.0.0`; this was observed, it is\nnot stated in the LinkedIn documentation.\n\nQuery string parameters are URL-encoded by default. If you hit `invalid URL` or `invalid URL parameters`\nerrors, enable **Send Unencoded Query String Parameters** to send them as provided instead (you may then need\n`encodeURL()` on individual values yourself).\n\nRefer to the [LinkedIn API documentation](https://learn.microsoft.com/en-us/linkedin/) and the\n[LinkedIn API Versioning Documentation](https://learn.microsoft.com/en-us/linkedin/marketing/versioning) for\navailable endpoints, required parameters, and response schemas.\n',
		accounts: { linkedin2: { scope: [] }, 'linkedin-openid': { scope: [] } },
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
						"Enter a path relative to `https://api.linkedin.com/`. For example: `/rest/organizationAcls`. A full URL (starting with `https://`, `http://` or `//`) is rejected with an error.\nThe path is sent as written and is not encoded again. With the default `X-Restli-Protocol-Version: 2.0.0` header, percent-encode the reserved characters of a key in the path, for example `/rest/posts/urn%3Ali%3Ashare%3A123`.\nLinkedIn's unversioned API was deprecated from March 2023 and released under a new base path: `https://api.linkedin.com/rest/`. The URL that starts with `/v2` will be converted to `/rest` except `/v2/me`. For more information please visit the [LinkedIn Marketing API Versioning Documentation](https://learn.microsoft.com/en-us/linkedin/marketing/versioning).",
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers — we already did that for you. If you don't set the `X-Restli-Protocol-Version` or `Linkedin-Version` headers here, we'll add them for you with the defaults `2.0.0` and `202605`.",
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
					description:
						'The HTTP request query parameters. By default these are automatically encoded — enable **Send Unencoded Query String Parameters** below to send them as provided instead.',
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
				sendUnencodedQueryString: {
					type: 'boolean',
					description:
						"Setting this to `Yes` will send the **Query String** parameters as provided, without automatic encoding. This may be useful if you're facing `invalid URL` or `invalid URL parameters` errors, but you may need to use the `encodeURL()` function in parts of your **Query String** values to ensure those parts get encoded correctly.",
					default: false,
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
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'createPost',
		label: 'Create a post',
		description: 'Creates a post on LinkedIn as a member or as a company page.',
		context:
			'---\nname: createPost\ndescription: Creates a post on LinkedIn as a member or as a company page.\n---\n\nCreates a post with the [Posts API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api). The post is always created as `PUBLISHED`.\n\n- Set **Author** to `urn:li:person:{id}` to post as the authenticated member (requires `w_member_social`) or to `urn:li:organization:{id}` to post as a company page (requires `w_organization_social` and the Administrator, Direct sponsored content poster or Content admin role on the page).\n- **Commentary** is written in [little Text Format](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/little-text-format). The reserved characters `| { } @ [ ] ( ) < > # \\ * _ ~` must be escaped with a backslash to be treated as plain text, **including in ordinary text**: send `Q4 \\(final\\) results`, not `Q4 (final) results`. Escape every reserved character that is not part of a mention (`@[Name](urn)`) or a hashtag (`{hashtag|\\#|tag}`). To send a backslash, write `\\\\`.\n- LinkedIn does not return an error for unescaped reserved characters. It answers `201` and the post is saved with the text cut at the first unescaped `(`, `)` or `|` (`before (f) after` is saved as `before`), so the rest of the text is lost without any warning. Unescaped `<` and `>` are removed from the text without cutting it. Read the post back with the getPost endpoint to check the saved **Commentary**.\n- **Visibility** `PUBLIC` requires **Feed distribution** `MAIN_FEED`. For an organization author, `PUBLIC` with `NONE` is the combination LinkedIn uses for a [dark post](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api#create-dark-posts) (direct sponsored content, which needs an ad account in `adContext`). LinkedIn answers `400` with a message about `/adContext/dscAdAccount`. That message is about the combination, not about a missing field: use `MAIN_FEED`, or use `LOGGED_IN` with `NONE`. This endpoint cannot create dark posts because it has no `adContext` input.\n- **Visibility** `CONNECTIONS` (the first-degree network of the author) is rejected with `400` when the author is an organization, because a company page has no connections. For an organization author use `PUBLIC` with `MAIN_FEED`, or `LOGGED_IN`. This was observed on organization pages, it is not stated in the LinkedIn documentation. `CONNECTIONS` is meant for a member author (`urn:li:person:{id}`).\n- A text-only post has no **Content**. For other posts provide exactly one of **Media**, **Article**, **Poll**, **Multi image** or **Reference** in **Content**.\n- To post an event, set **Reference** → **ID** to `urn:li:event:{id}` (external or in-person event) or `urn:li:liveVideo:{id}` (live video event). An event can only be fetched or updated after it has been posted ([Event APIs](https://learn.microsoft.com/en-us/linkedin/marketing/event-management/events)).\n- Carousel and celebration posts cannot be created with this endpoint: LinkedIn supports carousels only for sponsored posts, and celebration posts cannot be created through the API.\n- Posts with images, videos or documents reference assets that already exist on LinkedIn by URN (`urn:li:image:{id}`, `urn:li:video:{id}`, `urn:li:document:{id}`). This endpoint does not upload files. Use the status of a video (the getVideo endpoint) to check that it is `AVAILABLE` before it is used.\n- An article post needs **Source** and **Title** because LinkedIn does not scrape the URL. A thumbnail must be an existing image URN.\n- To reshare, set **Reshare context** → **Parent** to the URN of the post to reshare.\n\nLinkedIn answers with `201` and an empty body. The endpoint returns the new post URN from the `x-restli-id` response header as **ID**. See the [post schema](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/post-api-schema) for all fields.\n',
		accounts: {
			linkedin2: { scope: ['w_member_social', 'w_organization_social'] },
			'linkedin-openid': { scope: ['w_member_social', 'w_organization_social'] },
		},
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
				author: {
					type: 'string',
					description:
						'The author of the post. A person URN (`urn:li:person:{id}`) to post as a member, or an organization URN (`urn:li:organization:{id}`) to post as a company page.',
				},
				commentary: {
					type: 'string',
					description:
						'The text of the post in [little Text Format](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/little-text-format). Use `@[Name](urn)` to mention a person or an organization and `{hashtag|\\#|tag}` for a hashtag. The reserved characters `| { } @ [ ] ( ) < > # \\ * _ ~` must be escaped with a backslash to be treated as plain text. Unescaped `(`, `)` or `|` silently cut the text: LinkedIn creates the post without an error, but only the text before the first such character is saved. For example, send `Q4 \\(final\\) results`, not `Q4 (final) results`.',
				},
				visibility: {
					type: 'string',
					description:
						'Who can see the post. `CONNECTIONS` is the first-degree network of the author and is rejected with `400` when **Author** is an organization (use `PUBLIC` with `MAIN_FEED`, or `LOGGED_IN`). `CONTAINER` delegates visibility to the **Container** entity.',
					enum: ['PUBLIC', 'CONNECTIONS', 'LOGGED_IN', 'CONTAINER'],
				},
				distribution: {
					type: 'object',
					description: 'Distribution of the post within LinkedIn and externally.',
					properties: {
						feedDistribution: {
							type: 'string',
							description:
								'Where the post is distributed within LinkedIn. `MAIN_FEED` distributes to the main feed (and the container feed, if applicable). `NONE` does not distribute the post to any feed. `MAIN_FEED` is required when **Visibility** is `PUBLIC`: for an organization author, `PUBLIC` with `NONE` is treated as a dark post and fails with a `400` about `/adContext/dscAdAccount`.',
							enum: ['MAIN_FEED', 'NONE'],
						},
						targetEntities: {
							type: 'array',
							description:
								'The intended audience of the post. The distribution is an OR of the targets. LinkedIn accepts a single item in this array. The audience must be larger than 300 members.',
							items: {
								type: 'object',
								description:
									'A set of targeting facets. Each facet is a list of URNs.',
								properties: {
									degrees: {
										type: 'array',
										description: 'Standardized degrees to target.',
										items: { type: 'string', description: 'A degree URN.' },
									},
									fieldsOfStudy: {
										type: 'array',
										description: 'Standardized fields of study to target.',
										items: {
											type: 'string',
											description: 'A field of study URN.',
										},
									},
									industries: {
										type: 'array',
										description: 'Industries to target.',
										items: {
											type: 'string',
											description:
												'An industry URN, for example `urn:li:industry:4`.',
										},
									},
									interfaceLocales: {
										type: 'array',
										description: 'Interface locales to target.',
										items: {
											type: 'string',
											description: 'An interface locale.',
										},
									},
									jobFunctions: {
										type: 'array',
										description: 'Job functions to target.',
										items: {
											type: 'string',
											description:
												'A job function URN, for example `urn:li:function:13`.',
										},
									},
									geoLocations: {
										type: 'array',
										description: 'Geographic locations to target.',
										items: {
											type: 'string',
											description:
												'A geo URN, for example `urn:li:geo:103644278`.',
										},
									},
									organizations: {
										type: 'array',
										description: 'School organizations to target.',
										items: {
											type: 'string',
											description: 'An organization URN.',
										},
									},
									seniorities: {
										type: 'array',
										description: 'Seniority levels to target.',
										items: {
											type: 'string',
											description:
												'A seniority URN, for example `urn:li:seniority:3`.',
										},
									},
									staffCountRanges: {
										type: 'string',
										description: 'Organization sizes to target.',
										default: '',
										enum: [
											'',
											'SIZE_1',
											'SIZE_2_TO_10',
											'SIZE_11_TO_50',
											'SIZE_51_TO_200',
											'SIZE_201_TO_500',
											'SIZE_501_TO_1000',
											'SIZE_1001_TO_5000',
											'SIZE_5001_TO_10000',
											'SIZE_10001_OR_MORE',
										],
									},
								},
								required: [],
							},
						},
						thirdPartyDistributionChannels: {
							type: 'array',
							description:
								'External channels the post is distributed to. Leave empty to not distribute the post externally.',
							items: { description: 'An external distribution channel.' },
						},
					},
					required: ['feedDistribution'],
				},
				content: {
					type: 'object',
					description:
						'The content of the post. Provide only one of **Media**, **Article**, **Poll**, **Multi image** or **Reference**. Omit the whole collection for a text-only post.',
					properties: {
						media: {
							type: 'object',
							description:
								'A single image, video or document. Upload the asset first and use its URN. **ID** is required when **Media** is provided.',
							properties: {
								id: {
									type: 'string',
									description:
										'The URN of the media asset, for example `urn:li:image:C4D22AQFttWMAaIqHaa`, `urn:li:video:C5F10AQGKQg_6y2a4sQ` or `urn:li:document:C4D1FAQFg8MuXNoKq3Q`.',
								},
								altText: {
									type: 'string',
									description:
										'The alternative text of the media, used for accessibility.',
								},
							},
							required: [],
						},
						article: {
							type: 'object',
							description:
								'A link to an article. LinkedIn does not scrape the URL, so the title, description and thumbnail must be provided. **Source** and **Title** are required when **Article** is provided.',
							properties: {
								source: { type: 'string', description: 'The URL of the article.' },
								description: {
									type: 'string',
									description:
										'The description of the article. Maximum 4086 characters.',
									maximum: 4086,
								},
								thumbnail: {
									type: 'string',
									description:
										'The URN of the thumbnail image, for example `urn:li:image:C49klciosC89`. Upload the image first.',
								},
								thumbnailAltText: {
									type: 'string',
									description:
										'The alternative text of the thumbnail. Maximum 4086 characters.',
									maximum: 4086,
								},
							},
							required: [],
						},
						poll: {
							type: 'object',
							description:
								'A poll. Only non-sponsored polls can be created. **Question**, **Options** and **Settings** are required when **Poll** is provided.',
							properties: {
								question: {
									type: 'string',
									description:
										'The question of the poll. Maximum 140 characters.',
									maximum: 140,
								},
								options: {
									type: 'array',
									description:
										'The poll options. A poll has between 2 and 4 options.',
									items: {
										type: 'object',
										description: 'A poll option.',
										properties: {
											text: {
												type: 'string',
												description:
													'The text of the option. Maximum 30 characters.',
												maximum: 30,
											},
										},
										required: [],
									},
								},
								settings: {
									type: 'object',
									description: 'The settings of the poll.',
									properties: {
										duration: {
											type: 'string',
											description: 'How long the poll is open for votes.',
											default: '',
											enum: [
												'',
												'ONE_DAY',
												'THREE_DAYS',
												'SEVEN_DAYS',
												'FOURTEEN_DAYS',
											],
										},
										voteSelectionType: {
											type: 'string',
											description:
												'The vote selection type. LinkedIn currently supports `SINGLE_VOTE` only. Defaults to `SINGLE_VOTE`.',
											default: '',
											enum: ['', 'SINGLE_VOTE'],
										},
										isVoterVisibleToAuthor: {
											type: 'boolean',
											description:
												'Whether the author can see who voted. Defaults to `true`. LinkedIn does not support `false`.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						multiImage: {
							type: 'object',
							description:
								'A post with multiple images. Only non-sponsored posts can be created. **Images** is required when **Multi image** is provided.',
							properties: {
								images: {
									type: 'array',
									description:
										'The images of the post. A multi image post has between 2 and 20 images.',
									items: {
										type: 'object',
										description: 'An uploaded image.',
										properties: {
											id: {
												type: 'string',
												description:
													'The URN of the image, for example `urn:li:image:C4D22AQFttWMAaIqHaa`. Upload the image first.',
											},
											altText: {
												type: 'string',
												description:
													'The alternative text of the image, used for accessibility.',
											},
										},
										required: [],
									},
								},
								altText: {
									type: 'string',
									description:
										'The alternative text of the content. Maximum 4086 characters.',
									maximum: 4086,
								},
							},
							required: [],
						},
						reference: {
							type: 'object',
							description:
								'A reference to an existing LinkedIn entity, used to post an event. **ID** is required when **Reference** is provided.',
							properties: {
								id: {
									type: 'string',
									description:
										'The URN of the referenced entity. `urn:li:event:{id}` for an external or in-person event, `urn:li:liveVideo:{id}` for a live video event (the `type.online.format.liveVideo.liveVideo` value of the event).',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				reshareContext: {
					type: 'object',
					description: 'Set it to reshare an existing post.',
					properties: {
						parent: {
							type: 'string',
							description:
								'The URN of the post to reshare, for example `urn:li:share:6957408550713184256`.',
						},
					},
					required: [],
				},
				container: {
					type: 'string',
					description:
						'The URN of the container entity that contains the post. Leave empty if the post does not belong to a container.',
				},
				contentLandingPage: {
					type: 'string',
					description:
						'The web page that opens when a member clicks the content of the post.',
				},
				contentCallToActionLabel: {
					type: 'string',
					description:
						'The label of the call to action button associated with the content. `BUY_NOW` and `SHOP_NOW` require API version 202504 or later.',
					default: '',
					enum: [
						'',
						'APPLY',
						'DOWNLOAD',
						'VIEW_QUOTE',
						'LEARN_MORE',
						'SIGN_UP',
						'SUBSCRIBE',
						'REGISTER',
						'JOIN',
						'ATTEND',
						'REQUEST_DEMO',
						'SEE_MORE',
						'BUY_NOW',
						'SHOP_NOW',
					],
				},
				isReshareDisabledByAuthor: {
					type: 'boolean',
					description:
						'Whether resharing of the post is disabled. If `true`, the post cannot be reshared in any context. Defaults to `false`.',
				},
			},
			required: ['author', 'commentary', 'visibility', 'distribution'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The URN of the created post, for example `urn:li:share:6844785523593134080` or `urn:li:ugcPost:6844785523593124`. LinkedIn returns it in the `x-restli-id` response header.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'deletePost',
		label: 'Delete a post',
		description: 'Deletes a LinkedIn post of a member or a company page.',
		context:
			"---\nname: deletePost\ndescription: Deletes a LinkedIn post of a member or a company page.\n---\n\nPermanently deletes a post with the [Posts API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api). The URN (`urn:li:share:{id}` or `urn:li:ugcPost:{id}`) is URL-encoded by the endpoint.\n\nDeleting a member's post requires `w_member_social`. Deleting a company page post requires `w_organization_social` and the Administrator, Direct sponsored content poster or Content admin role on the page. The deletion is idempotent: LinkedIn answers `204` with an empty body, also for a post that was already deleted. Batch deletion is not supported.\n",
		accounts: {
			linkedin2: { scope: ['w_member_social', 'w_organization_social'] },
			'linkedin-openid': { scope: ['w_member_social', 'w_organization_social'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: true,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				postUrn: {
					type: 'string',
					description:
						'The URN of the post to delete, for example `urn:li:ugcPost:6856810298419044352` or `urn:li:share:6844785523593134080`.',
				},
			},
			required: ['postUrn'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'getBrandPageStatistics',
		label: 'Get brand page statistics',
		description:
			'Retrieves lifetime or time-bound page statistics of a LinkedIn organization brand page.',
		context:
			'---\nname: getBrandPageStatistics\ndescription: Retrieves lifetime or time-bound page statistics of a LinkedIn organization brand page.\n---\n\nRetrieves page view statistics of an organization brand page (previously a Showcase Page) with the [Organization Page Statistics API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/page-statistics). Requires `rw_organization_admin` and the Administrator role on the organization. For an organization page use the getOrganizationPageStatistics endpoint.\n\n- **Lifetime statistics**: provide only **Brand** (`urn:li:organizationBrand:{id}`).\n- **Time-bound statistics**: also provide **Time intervals** with **Time range** and **Time granularity type**. Times are milliseconds since epoch.\n',
		accounts: {
			linkedin2: { scope: ['rw_organization_admin'] },
			'linkedin-openid': { scope: ['rw_organization_admin'] },
		},
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
				brand: {
					type: 'string',
					description:
						'The URN of the organization brand, `urn:li:organizationBrand:{id}`.',
				},
				timeIntervals: {
					type: 'object',
					description:
						'Restricts the query to a time range. Omit it to retrieve lifetime statistics. When it is provided, **Time range** is required.',
					properties: {
						timeRange: {
							type: 'object',
							description: 'The time range of the query.',
							properties: {
								start: {
									type: 'number',
									description:
										'The exclusive start of the range, in milliseconds since epoch. When it is not set, the query starts from the beginning of time.',
								},
								end: {
									type: 'number',
									description:
										'The inclusive end of the range, in milliseconds since epoch. When it is not set, the query runs until the current time.',
								},
							},
							required: [],
						},
						timeGranularityType: {
							type: 'string',
							description: 'The granularity of the returned statistics.',
							default: '',
							enum: ['', 'DAY', 'MONTH'],
						},
					},
					required: [],
				},
			},
			required: ['brand'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				elements: {
					type: 'array',
					description: 'The statistics elements.',
					items: {
						type: 'object',
						description:
							'The page statistics of an organization brand or of a time interval.',
						properties: {
							brand: {
								type: 'string',
								description:
									'The URN of the organization brand the statistics belong to.',
							},
							timeRange: {
								type: 'object',
								description:
									'The time range of the element. Present for time-bound statistics.',
								properties: {
									start: {
										type: 'number',
										description:
											'The start of the time range, in milliseconds since epoch.',
									},
									end: {
										type: 'number',
										description:
											'The end of the time range, in milliseconds since epoch.',
									},
								},
								required: [],
							},
							pageStatisticsByCountry: {
								type: 'array',
								description: 'The page statistics segmented by country.',
								items: {
									description: 'The page statistics of one country segment.',
								},
							},
							pageStatisticsByFunction: {
								type: 'array',
								description: 'The page statistics segmented by function.',
								items: {
									description: 'The page statistics of one function segment.',
								},
							},
							pageStatisticsByIndustry: {
								type: 'array',
								description: 'The page statistics segmented by industry.',
								items: {
									description: 'The page statistics of one industry segment.',
								},
							},
							pageStatisticsByRegion: {
								type: 'array',
								description: 'The page statistics segmented by region.',
								items: {
									description: 'The page statistics of one region segment.',
								},
							},
							pageStatisticsBySeniority: {
								type: 'array',
								description: 'The page statistics segmented by seniority.',
								items: {
									description: 'The page statistics of one seniority segment.',
								},
							},
							pageStatisticsByStaffCountRange: {
								type: 'array',
								description: 'The page statistics segmented by staff count range.',
								items: {
									description:
										'The page statistics of one staff count range segment.',
								},
							},
							totalPageStatistics: {
								type: 'object',
								description: 'The total page statistics.',
								properties: {
									clicks: {
										type: 'object',
										description: 'The click statistics of the page.',
										properties: {
											desktopCustomButtonClickCounts: {
												type: 'array',
												description:
													'The click counts of the custom buttons on desktop.',
												items: {
													description:
														'The click count entry of a custom button as returned by LinkedIn.',
												},
											},
											mobileCustomButtonClickCounts: {
												type: 'array',
												description:
													'The click counts of the custom buttons on mobile.',
												items: {
													description:
														'The click count entry of a custom button as returned by LinkedIn.',
												},
											},
										},
										required: [],
									},
									views: {
										type: 'object',
										description:
											'The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.',
										properties: {
											allDesktopPageViews: {
												type: 'object',
												description:
													'The all desktop page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											allMobilePageViews: {
												type: 'object',
												description:
													'The all mobile page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											allPageViews: {
												type: 'object',
												description: 'The all page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											careersPageViews: {
												type: 'object',
												description: 'The careers page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopCareersPageViews: {
												type: 'object',
												description:
													'The desktop careers page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopJobsPageViews: {
												type: 'object',
												description:
													'The desktop jobs page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopLifeAtPageViews: {
												type: 'object',
												description:
													'The desktop life at page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopOverviewPageViews: {
												type: 'object',
												description:
													'The desktop overview page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											jobsPageViews: {
												type: 'object',
												description: 'The jobs page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											lifeAtPageViews: {
												type: 'object',
												description: 'The life at page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileCareersPageViews: {
												type: 'object',
												description:
													'The mobile careers page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileJobsPageViews: {
												type: 'object',
												description:
													'The mobile jobs page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileLifeAtPageViews: {
												type: 'object',
												description:
													'The mobile life at page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileOverviewPageViews: {
												type: 'object',
												description:
													'The mobile overview page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											overviewPageViews: {
												type: 'object',
												description: 'The overview page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
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
				paging: {
					type: 'object',
					description: 'Pagination information of the response.',
					properties: {
						count: {
							type: 'number',
							description: 'The number of items requested per page.',
						},
						start: {
							type: 'number',
							description: 'The index of the first item in this page.',
						},
						total: {
							type: 'number',
							description: 'The total number of items, when LinkedIn returns it.',
						},
						links: {
							type: 'array',
							description:
								'Links to adjacent pages. Use the `next` link information to request the following page.',
							items: {
								type: 'object',
								description: 'A link to an adjacent page.',
								properties: {
									type: {
										type: 'string',
										description: 'The media type of the linked resource.',
									},
									rel: {
										type: 'string',
										description:
											'The relation of the link to the current page, for example `next` or `prev`.',
									},
									href: {
										type: 'string',
										description: 'The relative URL of the linked page.',
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
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'getOrganizationFollowerStatistics',
		label: 'Get organization follower statistics',
		description:
			'Retrieves lifetime or time-bound follower statistics of a LinkedIn organization.',
		context:
			'---\nname: getOrganizationFollowerStatistics\ndescription: Retrieves lifetime or time-bound follower statistics of a LinkedIn organization.\n---\n\nRetrieves follower statistics with the [Organization Follower Statistics API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/follower-statistics). Requires `rw_organization_admin` and the Administrator role on the organization.\n\n- **Lifetime statistics**: provide only **Organizational entity**. The result contains follower counts segmented by association type, country, function, industry, market area, seniority and staff count range (top 100 per segment). The total follower count is not returned. Use the Organization Lookup `networkSizes` API for it.\n- **Time-bound statistics**: also provide **Time intervals** with **Time range** (**Start** is required) and **Time granularity type**. Times are milliseconds since epoch. The result contains the follower gains per interval and no demographic segments.\n',
		accounts: {
			linkedin2: { scope: ['rw_organization_admin'] },
			'linkedin-openid': { scope: ['rw_organization_admin'] },
		},
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
				organizationalEntity: {
					type: 'string',
					description: 'The URN of the organization, `urn:li:organization:{id}`.',
				},
				timeIntervals: {
					type: 'object',
					description:
						'Restricts the query to a time range. Omit it to retrieve lifetime statistics. When it is provided, **Time range** is required. Time-bound results contain follower gains and no demographic segments. Data is available from 12 months before the request date until 2 days before it.',
					properties: {
						timeRange: {
							type: 'object',
							description: 'The time range of the query.',
							properties: {
								start: {
									type: 'number',
									description:
										'The inclusive start of the range, in milliseconds since epoch. Required when **Time intervals** is provided. A value earlier than the data retention limit is moved to it.',
								},
								end: {
									type: 'number',
									description:
										'The exclusive end of the range, in milliseconds since epoch. When it is not set, the query runs until the current time.',
								},
							},
							required: [],
						},
						timeGranularityType: {
							type: 'string',
							description: 'The granularity of the returned statistics.',
							default: '',
							enum: ['', 'DAY', 'WEEK', 'MONTH'],
						},
					},
					required: [],
				},
			},
			required: ['organizationalEntity'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				elements: {
					type: 'array',
					description: 'The statistics elements.',
					items: {
						type: 'object',
						description:
							'The follower statistics of an organization or of a time interval.',
						properties: {
							organizationalEntity: {
								type: 'string',
								description:
									'The URN of the organization the statistics belong to.',
							},
							timeRange: {
								type: 'object',
								description:
									'The time range of the element. Present for time-bound statistics.',
								properties: {
									start: {
										type: 'number',
										description:
											'The start of the time range, in milliseconds since epoch.',
									},
									end: {
										type: 'number',
										description:
											'The end of the time range, in milliseconds since epoch.',
									},
								},
								required: [],
							},
							followerGains: {
								type: 'object',
								description:
									'The follower gains in the time range. Present for time-bound statistics.',
								properties: {
									organicFollowerGain: {
										type: 'number',
										description: 'The number of organic followers gained.',
									},
									paidFollowerGain: {
										type: 'number',
										description: 'The number of paid followers gained.',
									},
								},
								required: [],
							},
							followerCountsByAssociationType: {
								type: 'array',
								description:
									'The follower counts segmented by association type. Only the top 100 results are returned.',
								items: {
									type: 'object',
									description: 'The follower counts of one segment.',
									properties: {
										associationType: {
											type: 'string',
											description:
												'The association type of the followers, for example `EMPLOYEE`.',
										},
										followerCounts: {
											type: 'object',
											description:
												'The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.',
											properties: {
												organicFollowerCount: {
													type: 'number',
													description: 'The number of organic followers.',
												},
												paidFollowerCount: {
													type: 'number',
													description:
														'The number of paid followers. Do not use it for professional demographic statistics.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							followerCountsByGeoCountry: {
								type: 'array',
								description:
									'The follower counts segmented by country. Only the top 100 results are returned.',
								items: {
									type: 'object',
									description: 'The follower counts of one segment.',
									properties: {
										geo: {
											type: 'string',
											description:
												'The URN of the country or region, for example `urn:li:geo:102713980`.',
										},
										followerCounts: {
											type: 'object',
											description:
												'The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.',
											properties: {
												organicFollowerCount: {
													type: 'number',
													description: 'The number of organic followers.',
												},
												paidFollowerCount: {
													type: 'number',
													description:
														'The number of paid followers. Do not use it for professional demographic statistics.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							followerCountsByFunction: {
								type: 'array',
								description:
									'The follower counts segmented by function. Only the top 100 results are returned.',
								items: {
									type: 'object',
									description: 'The follower counts of one segment.',
									properties: {
										function: {
											type: 'string',
											description:
												'The URN of the job function, for example `urn:li:function:22`.',
										},
										followerCounts: {
											type: 'object',
											description:
												'The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.',
											properties: {
												organicFollowerCount: {
													type: 'number',
													description: 'The number of organic followers.',
												},
												paidFollowerCount: {
													type: 'number',
													description:
														'The number of paid followers. Do not use it for professional demographic statistics.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							followerCountsByIndustry: {
								type: 'array',
								description:
									'The follower counts segmented by industry. Only the top 100 results are returned.',
								items: {
									type: 'object',
									description: 'The follower counts of one segment.',
									properties: {
										industry: {
											type: 'string',
											description:
												'The URN of the industry, for example `urn:li:industry:96`.',
										},
										followerCounts: {
											type: 'object',
											description:
												'The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.',
											properties: {
												organicFollowerCount: {
													type: 'number',
													description: 'The number of organic followers.',
												},
												paidFollowerCount: {
													type: 'number',
													description:
														'The number of paid followers. Do not use it for professional demographic statistics.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							followerCountsByGeo: {
								type: 'array',
								description:
									'The follower counts segmented by market area. Only the top 100 results are returned.',
								items: {
									type: 'object',
									description: 'The follower counts of one segment.',
									properties: {
										geo: {
											type: 'string',
											description:
												'The URN of the market area, for example `urn:li:geo:90009626`.',
										},
										followerCounts: {
											type: 'object',
											description:
												'The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.',
											properties: {
												organicFollowerCount: {
													type: 'number',
													description: 'The number of organic followers.',
												},
												paidFollowerCount: {
													type: 'number',
													description:
														'The number of paid followers. Do not use it for professional demographic statistics.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							followerCountsBySeniority: {
								type: 'array',
								description:
									'The follower counts segmented by seniority. Only the top 100 results are returned.',
								items: {
									type: 'object',
									description: 'The follower counts of one segment.',
									properties: {
										seniority: {
											type: 'string',
											description:
												'The URN of the seniority, for example `urn:li:seniority:2`.',
										},
										followerCounts: {
											type: 'object',
											description:
												'The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.',
											properties: {
												organicFollowerCount: {
													type: 'number',
													description: 'The number of organic followers.',
												},
												paidFollowerCount: {
													type: 'number',
													description:
														'The number of paid followers. Do not use it for professional demographic statistics.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							followerCountsByStaffCountRange: {
								type: 'array',
								description:
									'The follower counts segmented by staff count range. Only the top 100 results are returned.',
								items: {
									type: 'object',
									description: 'The follower counts of one segment.',
									properties: {
										staffCountRange: {
											type: 'string',
											description:
												'The staff count range of the current organizations of the followers, for example `SIZE_2_TO_10`.',
										},
										followerCounts: {
											type: 'object',
											description:
												'The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.',
											properties: {
												organicFollowerCount: {
													type: 'number',
													description: 'The number of organic followers.',
												},
												paidFollowerCount: {
													type: 'number',
													description:
														'The number of paid followers. Do not use it for professional demographic statistics.',
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
				paging: {
					type: 'object',
					description: 'Pagination information of the response.',
					properties: {
						count: {
							type: 'number',
							description: 'The number of items requested per page.',
						},
						start: {
							type: 'number',
							description: 'The index of the first item in this page.',
						},
						total: {
							type: 'number',
							description: 'The total number of items, when LinkedIn returns it.',
						},
						links: {
							type: 'array',
							description:
								'Links to adjacent pages. Use the `next` link information to request the following page.',
							items: {
								type: 'object',
								description: 'A link to an adjacent page.',
								properties: {
									type: {
										type: 'string',
										description: 'The media type of the linked resource.',
									},
									rel: {
										type: 'string',
										description:
											'The relation of the link to the current page, for example `next` or `prev`.',
									},
									href: {
										type: 'string',
										description: 'The relative URL of the linked page.',
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
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'getOrganizationPageStatistics',
		label: 'Get organization page statistics',
		description: 'Retrieves lifetime or time-bound page statistics of a LinkedIn organization.',
		context:
			'---\nname: getOrganizationPageStatistics\ndescription: Retrieves lifetime or time-bound page statistics of a LinkedIn organization.\n---\n\nRetrieves page view and click statistics of an organization page with the [Organization Page Statistics API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/page-statistics). Requires `rw_organization_admin` and the Administrator role on the organization. For an organization brand page use the getBrandPageStatistics endpoint.\n\n- **Lifetime statistics**: provide only **Organization**. The result is segmented by country, function, industry, market area, seniority and staff count range, and contains the totals.\n- **Time-bound statistics**: also provide **Time intervals** with **Time range** and **Time granularity type**. Times are milliseconds since epoch. The result contains the totals per interval.\n\n`careersPageViews` is only available for organizations with a Career Page (a paid LinkedIn product).\n',
		accounts: {
			linkedin2: { scope: ['rw_organization_admin'] },
			'linkedin-openid': { scope: ['rw_organization_admin'] },
		},
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
				organization: {
					type: 'string',
					description: 'The URN of the organization, `urn:li:organization:{id}`.',
				},
				timeIntervals: {
					type: 'object',
					description:
						'Restricts the query to a time range. Omit it to retrieve lifetime statistics. When it is provided, **Time range** is required.',
					properties: {
						timeRange: {
							type: 'object',
							description: 'The time range of the query.',
							properties: {
								start: {
									type: 'number',
									description:
										'The exclusive start of the range, in milliseconds since epoch. When it is not set, the query starts from the beginning of time.',
								},
								end: {
									type: 'number',
									description:
										'The inclusive end of the range, in milliseconds since epoch. When it is not set, the query runs until the current time.',
								},
							},
							required: [],
						},
						timeGranularityType: {
							type: 'string',
							description: 'The granularity of the returned statistics.',
							default: '',
							enum: ['', 'DAY', 'MONTH'],
						},
					},
					required: [],
				},
			},
			required: ['organization'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				elements: {
					type: 'array',
					description: 'The statistics elements.',
					items: {
						type: 'object',
						description:
							'The page statistics of an organization or of a time interval.',
						properties: {
							organization: {
								type: 'string',
								description:
									'The URN of the organization the statistics belong to.',
							},
							timeRange: {
								type: 'object',
								description:
									'The time range of the element. Present for time-bound statistics.',
								properties: {
									start: {
										type: 'number',
										description:
											'The start of the time range, in milliseconds since epoch.',
									},
									end: {
										type: 'number',
										description:
											'The end of the time range, in milliseconds since epoch.',
									},
								},
								required: [],
							},
							pageStatisticsByGeoCountry: {
								type: 'array',
								description: 'The page statistics segmented by country.',
								items: {
									type: 'object',
									description: 'The page statistics of one country segment.',
									properties: {
										geo: {
											type: 'string',
											description:
												'The URN of the country or region, for example `urn:li:geo:103644278`.',
										},
										pageStatistics: {
											type: 'object',
											description: 'The page statistics of the segment.',
											properties: {
												clicks: {
													type: 'object',
													description:
														'The click statistics of the page.',
													properties: {
														desktopCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on desktop.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
														mobileCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on mobile.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
													},
													required: [],
												},
												views: {
													type: 'object',
													description:
														'The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.',
													properties: {
														aboutPageViews: {
															type: 'object',
															description:
																'The about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allDesktopPageViews: {
															type: 'object',
															description:
																'The all desktop page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allMobilePageViews: {
															type: 'object',
															description:
																'The all mobile page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allPageViews: {
															type: 'object',
															description:
																'The all page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														careersPageViews: {
															type: 'object',
															description:
																'The careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopAboutPageViews: {
															type: 'object',
															description:
																'The desktop about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopCareersPageViews: {
															type: 'object',
															description:
																'The desktop careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopInsightsPageViews: {
															type: 'object',
															description:
																'The desktop insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopJobsPageViews: {
															type: 'object',
															description:
																'The desktop jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopLifeAtPageViews: {
															type: 'object',
															description:
																'The desktop life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopOverviewPageViews: {
															type: 'object',
															description:
																'The desktop overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopPeoplePageViews: {
															type: 'object',
															description:
																'The desktop people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopProductsPageViews: {
															type: 'object',
															description:
																'The desktop products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														insightsPageViews: {
															type: 'object',
															description:
																'The insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														jobsPageViews: {
															type: 'object',
															description:
																'The jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														lifeAtPageViews: {
															type: 'object',
															description:
																'The life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileAboutPageViews: {
															type: 'object',
															description:
																'The mobile about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileCareersPageViews: {
															type: 'object',
															description:
																'The mobile careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileInsightsPageViews: {
															type: 'object',
															description:
																'The mobile insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileJobsPageViews: {
															type: 'object',
															description:
																'The mobile jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileLifeAtPageViews: {
															type: 'object',
															description:
																'The mobile life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileOverviewPageViews: {
															type: 'object',
															description:
																'The mobile overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobilePeoplePageViews: {
															type: 'object',
															description:
																'The mobile people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileProductsPageViews: {
															type: 'object',
															description:
																'The mobile products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														overviewPageViews: {
															type: 'object',
															description:
																'The overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														peoplePageViews: {
															type: 'object',
															description:
																'The people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														productsPageViews: {
															type: 'object',
															description:
																'The products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
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
							pageStatisticsByFunction: {
								type: 'array',
								description: 'The page statistics segmented by function.',
								items: {
									type: 'object',
									description: 'The page statistics of one function segment.',
									properties: {
										function: {
											type: 'string',
											description:
												'The URN of the job function, for example `urn:li:function:1`.',
										},
										pageStatistics: {
											type: 'object',
											description: 'The page statistics of the segment.',
											properties: {
												clicks: {
													type: 'object',
													description:
														'The click statistics of the page.',
													properties: {
														desktopCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on desktop.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
														mobileCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on mobile.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
													},
													required: [],
												},
												views: {
													type: 'object',
													description:
														'The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.',
													properties: {
														aboutPageViews: {
															type: 'object',
															description:
																'The about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allDesktopPageViews: {
															type: 'object',
															description:
																'The all desktop page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allMobilePageViews: {
															type: 'object',
															description:
																'The all mobile page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allPageViews: {
															type: 'object',
															description:
																'The all page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														careersPageViews: {
															type: 'object',
															description:
																'The careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopAboutPageViews: {
															type: 'object',
															description:
																'The desktop about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopCareersPageViews: {
															type: 'object',
															description:
																'The desktop careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopInsightsPageViews: {
															type: 'object',
															description:
																'The desktop insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopJobsPageViews: {
															type: 'object',
															description:
																'The desktop jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopLifeAtPageViews: {
															type: 'object',
															description:
																'The desktop life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopOverviewPageViews: {
															type: 'object',
															description:
																'The desktop overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopPeoplePageViews: {
															type: 'object',
															description:
																'The desktop people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopProductsPageViews: {
															type: 'object',
															description:
																'The desktop products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														insightsPageViews: {
															type: 'object',
															description:
																'The insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														jobsPageViews: {
															type: 'object',
															description:
																'The jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														lifeAtPageViews: {
															type: 'object',
															description:
																'The life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileAboutPageViews: {
															type: 'object',
															description:
																'The mobile about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileCareersPageViews: {
															type: 'object',
															description:
																'The mobile careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileInsightsPageViews: {
															type: 'object',
															description:
																'The mobile insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileJobsPageViews: {
															type: 'object',
															description:
																'The mobile jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileLifeAtPageViews: {
															type: 'object',
															description:
																'The mobile life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileOverviewPageViews: {
															type: 'object',
															description:
																'The mobile overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobilePeoplePageViews: {
															type: 'object',
															description:
																'The mobile people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileProductsPageViews: {
															type: 'object',
															description:
																'The mobile products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														overviewPageViews: {
															type: 'object',
															description:
																'The overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														peoplePageViews: {
															type: 'object',
															description:
																'The people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														productsPageViews: {
															type: 'object',
															description:
																'The products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
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
							pageStatisticsByIndustryV2: {
								type: 'array',
								description: 'The page statistics segmented by industry.',
								items: {
									type: 'object',
									description: 'The page statistics of one industry segment.',
									properties: {
										industryV2: {
											type: 'string',
											description:
												'The URN of the industry, for example `urn:li:industry:1`.',
										},
										pageStatistics: {
											type: 'object',
											description: 'The page statistics of the segment.',
											properties: {
												clicks: {
													type: 'object',
													description:
														'The click statistics of the page.',
													properties: {
														desktopCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on desktop.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
														mobileCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on mobile.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
													},
													required: [],
												},
												views: {
													type: 'object',
													description:
														'The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.',
													properties: {
														aboutPageViews: {
															type: 'object',
															description:
																'The about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allDesktopPageViews: {
															type: 'object',
															description:
																'The all desktop page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allMobilePageViews: {
															type: 'object',
															description:
																'The all mobile page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allPageViews: {
															type: 'object',
															description:
																'The all page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														careersPageViews: {
															type: 'object',
															description:
																'The careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopAboutPageViews: {
															type: 'object',
															description:
																'The desktop about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopCareersPageViews: {
															type: 'object',
															description:
																'The desktop careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopInsightsPageViews: {
															type: 'object',
															description:
																'The desktop insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopJobsPageViews: {
															type: 'object',
															description:
																'The desktop jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopLifeAtPageViews: {
															type: 'object',
															description:
																'The desktop life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopOverviewPageViews: {
															type: 'object',
															description:
																'The desktop overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopPeoplePageViews: {
															type: 'object',
															description:
																'The desktop people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopProductsPageViews: {
															type: 'object',
															description:
																'The desktop products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														insightsPageViews: {
															type: 'object',
															description:
																'The insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														jobsPageViews: {
															type: 'object',
															description:
																'The jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														lifeAtPageViews: {
															type: 'object',
															description:
																'The life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileAboutPageViews: {
															type: 'object',
															description:
																'The mobile about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileCareersPageViews: {
															type: 'object',
															description:
																'The mobile careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileInsightsPageViews: {
															type: 'object',
															description:
																'The mobile insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileJobsPageViews: {
															type: 'object',
															description:
																'The mobile jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileLifeAtPageViews: {
															type: 'object',
															description:
																'The mobile life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileOverviewPageViews: {
															type: 'object',
															description:
																'The mobile overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobilePeoplePageViews: {
															type: 'object',
															description:
																'The mobile people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileProductsPageViews: {
															type: 'object',
															description:
																'The mobile products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														overviewPageViews: {
															type: 'object',
															description:
																'The overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														peoplePageViews: {
															type: 'object',
															description:
																'The people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														productsPageViews: {
															type: 'object',
															description:
																'The products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
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
							pageStatisticsByGeo: {
								type: 'array',
								description: 'The page statistics segmented by market area.',
								items: {
									type: 'object',
									description: 'The page statistics of one market area segment.',
									properties: {
										geo: {
											type: 'string',
											description:
												'The URN of the market area, for example `urn:li:geo:7`.',
										},
										pageStatistics: {
											type: 'object',
											description: 'The page statistics of the segment.',
											properties: {
												clicks: {
													type: 'object',
													description:
														'The click statistics of the page.',
													properties: {
														desktopCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on desktop.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
														mobileCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on mobile.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
													},
													required: [],
												},
												views: {
													type: 'object',
													description:
														'The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.',
													properties: {
														aboutPageViews: {
															type: 'object',
															description:
																'The about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allDesktopPageViews: {
															type: 'object',
															description:
																'The all desktop page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allMobilePageViews: {
															type: 'object',
															description:
																'The all mobile page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allPageViews: {
															type: 'object',
															description:
																'The all page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														careersPageViews: {
															type: 'object',
															description:
																'The careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopAboutPageViews: {
															type: 'object',
															description:
																'The desktop about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopCareersPageViews: {
															type: 'object',
															description:
																'The desktop careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopInsightsPageViews: {
															type: 'object',
															description:
																'The desktop insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopJobsPageViews: {
															type: 'object',
															description:
																'The desktop jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopLifeAtPageViews: {
															type: 'object',
															description:
																'The desktop life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopOverviewPageViews: {
															type: 'object',
															description:
																'The desktop overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopPeoplePageViews: {
															type: 'object',
															description:
																'The desktop people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopProductsPageViews: {
															type: 'object',
															description:
																'The desktop products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														insightsPageViews: {
															type: 'object',
															description:
																'The insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														jobsPageViews: {
															type: 'object',
															description:
																'The jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														lifeAtPageViews: {
															type: 'object',
															description:
																'The life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileAboutPageViews: {
															type: 'object',
															description:
																'The mobile about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileCareersPageViews: {
															type: 'object',
															description:
																'The mobile careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileInsightsPageViews: {
															type: 'object',
															description:
																'The mobile insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileJobsPageViews: {
															type: 'object',
															description:
																'The mobile jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileLifeAtPageViews: {
															type: 'object',
															description:
																'The mobile life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileOverviewPageViews: {
															type: 'object',
															description:
																'The mobile overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobilePeoplePageViews: {
															type: 'object',
															description:
																'The mobile people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileProductsPageViews: {
															type: 'object',
															description:
																'The mobile products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														overviewPageViews: {
															type: 'object',
															description:
																'The overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														peoplePageViews: {
															type: 'object',
															description:
																'The people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														productsPageViews: {
															type: 'object',
															description:
																'The products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
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
							pageStatisticsBySeniority: {
								type: 'array',
								description: 'The page statistics segmented by seniority.',
								items: {
									type: 'object',
									description: 'The page statistics of one seniority segment.',
									properties: {
										seniority: {
											type: 'string',
											description:
												'The URN of the seniority, for example `urn:li:seniority:10`.',
										},
										pageStatistics: {
											type: 'object',
											description: 'The page statistics of the segment.',
											properties: {
												clicks: {
													type: 'object',
													description:
														'The click statistics of the page.',
													properties: {
														desktopCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on desktop.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
														mobileCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on mobile.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
													},
													required: [],
												},
												views: {
													type: 'object',
													description:
														'The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.',
													properties: {
														aboutPageViews: {
															type: 'object',
															description:
																'The about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allDesktopPageViews: {
															type: 'object',
															description:
																'The all desktop page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allMobilePageViews: {
															type: 'object',
															description:
																'The all mobile page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allPageViews: {
															type: 'object',
															description:
																'The all page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														careersPageViews: {
															type: 'object',
															description:
																'The careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopAboutPageViews: {
															type: 'object',
															description:
																'The desktop about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopCareersPageViews: {
															type: 'object',
															description:
																'The desktop careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopInsightsPageViews: {
															type: 'object',
															description:
																'The desktop insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopJobsPageViews: {
															type: 'object',
															description:
																'The desktop jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopLifeAtPageViews: {
															type: 'object',
															description:
																'The desktop life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopOverviewPageViews: {
															type: 'object',
															description:
																'The desktop overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopPeoplePageViews: {
															type: 'object',
															description:
																'The desktop people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopProductsPageViews: {
															type: 'object',
															description:
																'The desktop products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														insightsPageViews: {
															type: 'object',
															description:
																'The insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														jobsPageViews: {
															type: 'object',
															description:
																'The jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														lifeAtPageViews: {
															type: 'object',
															description:
																'The life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileAboutPageViews: {
															type: 'object',
															description:
																'The mobile about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileCareersPageViews: {
															type: 'object',
															description:
																'The mobile careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileInsightsPageViews: {
															type: 'object',
															description:
																'The mobile insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileJobsPageViews: {
															type: 'object',
															description:
																'The mobile jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileLifeAtPageViews: {
															type: 'object',
															description:
																'The mobile life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileOverviewPageViews: {
															type: 'object',
															description:
																'The mobile overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobilePeoplePageViews: {
															type: 'object',
															description:
																'The mobile people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileProductsPageViews: {
															type: 'object',
															description:
																'The mobile products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														overviewPageViews: {
															type: 'object',
															description:
																'The overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														peoplePageViews: {
															type: 'object',
															description:
																'The people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														productsPageViews: {
															type: 'object',
															description:
																'The products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
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
							pageStatisticsByStaffCountRange: {
								type: 'array',
								description: 'The page statistics segmented by staff count range.',
								items: {
									type: 'object',
									description:
										'The page statistics of one staff count range segment.',
									properties: {
										staffCountRange: {
											type: 'string',
											description:
												'The staff count range, for example `SIZE_10001_OR_MORE`.',
										},
										pageStatistics: {
											type: 'object',
											description: 'The page statistics of the segment.',
											properties: {
												clicks: {
													type: 'object',
													description:
														'The click statistics of the page.',
													properties: {
														desktopCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on desktop.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
														mobileCustomButtonClickCounts: {
															type: 'array',
															description:
																'The click counts of the custom buttons on mobile.',
															items: {
																description:
																	'The click count entry of a custom button as returned by LinkedIn.',
															},
														},
													},
													required: [],
												},
												views: {
													type: 'object',
													description:
														'The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.',
													properties: {
														aboutPageViews: {
															type: 'object',
															description:
																'The about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allDesktopPageViews: {
															type: 'object',
															description:
																'The all desktop page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allMobilePageViews: {
															type: 'object',
															description:
																'The all mobile page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														allPageViews: {
															type: 'object',
															description:
																'The all page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														careersPageViews: {
															type: 'object',
															description:
																'The careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopAboutPageViews: {
															type: 'object',
															description:
																'The desktop about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopCareersPageViews: {
															type: 'object',
															description:
																'The desktop careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopInsightsPageViews: {
															type: 'object',
															description:
																'The desktop insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopJobsPageViews: {
															type: 'object',
															description:
																'The desktop jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopLifeAtPageViews: {
															type: 'object',
															description:
																'The desktop life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopOverviewPageViews: {
															type: 'object',
															description:
																'The desktop overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopPeoplePageViews: {
															type: 'object',
															description:
																'The desktop people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														desktopProductsPageViews: {
															type: 'object',
															description:
																'The desktop products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														insightsPageViews: {
															type: 'object',
															description:
																'The insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														jobsPageViews: {
															type: 'object',
															description:
																'The jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														lifeAtPageViews: {
															type: 'object',
															description:
																'The life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileAboutPageViews: {
															type: 'object',
															description:
																'The mobile about page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileCareersPageViews: {
															type: 'object',
															description:
																'The mobile careers page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileInsightsPageViews: {
															type: 'object',
															description:
																'The mobile insights page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileJobsPageViews: {
															type: 'object',
															description:
																'The mobile jobs page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileLifeAtPageViews: {
															type: 'object',
															description:
																'The mobile life at page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileOverviewPageViews: {
															type: 'object',
															description:
																'The mobile overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobilePeoplePageViews: {
															type: 'object',
															description:
																'The mobile people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														mobileProductsPageViews: {
															type: 'object',
															description:
																'The mobile products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														overviewPageViews: {
															type: 'object',
															description:
																'The overview page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														peoplePageViews: {
															type: 'object',
															description:
																'The people page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
																},
															},
															required: [],
														},
														productsPageViews: {
															type: 'object',
															description:
																'The products page views statistics.',
															properties: {
																pageViews: {
																	type: 'number',
																	description:
																		'The number of page views.',
																},
																uniquePageViews: {
																	type: 'number',
																	description:
																		'The number of unique page views.',
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
							pageStatisticsByTargetedContent: {
								type: 'array',
								description:
									'The page statistics segmented by targeted content. LinkedIn returns an empty array when the page has no targeted content.',
								items: {
									description:
										'The page statistics of one targeted content segment as returned by LinkedIn.',
								},
							},
							totalPageStatistics: {
								type: 'object',
								description: 'The total page statistics.',
								properties: {
									clicks: {
										type: 'object',
										description: 'The click statistics of the page.',
										properties: {
											desktopCustomButtonClickCounts: {
												type: 'array',
												description:
													'The click counts of the custom buttons on desktop.',
												items: {
													description:
														'The click count entry of a custom button as returned by LinkedIn.',
												},
											},
											mobileCustomButtonClickCounts: {
												type: 'array',
												description:
													'The click counts of the custom buttons on mobile.',
												items: {
													description:
														'The click count entry of a custom button as returned by LinkedIn.',
												},
											},
										},
										required: [],
									},
									views: {
										type: 'object',
										description:
											'The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.',
										properties: {
											aboutPageViews: {
												type: 'object',
												description: 'The about page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											allDesktopPageViews: {
												type: 'object',
												description:
													'The all desktop page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											allMobilePageViews: {
												type: 'object',
												description:
													'The all mobile page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											allPageViews: {
												type: 'object',
												description: 'The all page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											careersPageViews: {
												type: 'object',
												description: 'The careers page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopAboutPageViews: {
												type: 'object',
												description:
													'The desktop about page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopCareersPageViews: {
												type: 'object',
												description:
													'The desktop careers page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopInsightsPageViews: {
												type: 'object',
												description:
													'The desktop insights page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopJobsPageViews: {
												type: 'object',
												description:
													'The desktop jobs page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopLifeAtPageViews: {
												type: 'object',
												description:
													'The desktop life at page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopOverviewPageViews: {
												type: 'object',
												description:
													'The desktop overview page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopPeoplePageViews: {
												type: 'object',
												description:
													'The desktop people page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											desktopProductsPageViews: {
												type: 'object',
												description:
													'The desktop products page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											insightsPageViews: {
												type: 'object',
												description: 'The insights page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											jobsPageViews: {
												type: 'object',
												description: 'The jobs page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											lifeAtPageViews: {
												type: 'object',
												description: 'The life at page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileAboutPageViews: {
												type: 'object',
												description:
													'The mobile about page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileCareersPageViews: {
												type: 'object',
												description:
													'The mobile careers page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileInsightsPageViews: {
												type: 'object',
												description:
													'The mobile insights page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileJobsPageViews: {
												type: 'object',
												description:
													'The mobile jobs page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileLifeAtPageViews: {
												type: 'object',
												description:
													'The mobile life at page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileOverviewPageViews: {
												type: 'object',
												description:
													'The mobile overview page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobilePeoplePageViews: {
												type: 'object',
												description:
													'The mobile people page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											mobileProductsPageViews: {
												type: 'object',
												description:
													'The mobile products page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											overviewPageViews: {
												type: 'object',
												description: 'The overview page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											peoplePageViews: {
												type: 'object',
												description: 'The people page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
													},
												},
												required: [],
											},
											productsPageViews: {
												type: 'object',
												description: 'The products page views statistics.',
												properties: {
													pageViews: {
														type: 'number',
														description: 'The number of page views.',
													},
													uniquePageViews: {
														type: 'number',
														description:
															'The number of unique page views.',
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
				paging: {
					type: 'object',
					description: 'Pagination information of the response.',
					properties: {
						count: {
							type: 'number',
							description: 'The number of items requested per page.',
						},
						start: {
							type: 'number',
							description: 'The index of the first item in this page.',
						},
						total: {
							type: 'number',
							description: 'The total number of items, when LinkedIn returns it.',
						},
						links: {
							type: 'array',
							description:
								'Links to adjacent pages. Use the `next` link information to request the following page.',
							items: {
								type: 'object',
								description: 'A link to an adjacent page.',
								properties: {
									type: {
										type: 'string',
										description: 'The media type of the linked resource.',
									},
									rel: {
										type: 'string',
										description:
											'The relation of the link to the current page, for example `next` or `prev`.',
									},
									href: {
										type: 'string',
										description: 'The relative URL of the linked page.',
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
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'getOrganizationShareStatistics',
		label: 'Get organization share statistics',
		description:
			'Retrieves organic share statistics of a LinkedIn organization or of specific shares.',
		context:
			'---\nname: getOrganizationShareStatistics\ndescription: Retrieves organic share statistics of a LinkedIn organization or of specific shares.\n---\n\nRetrieves organic share statistics with the [Organization Share Statistics API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/organizations/share-statistics). Sponsored activity is not included. Requires `rw_organization_admin` and the Administrator role on the organization.\n\nThere are three kinds of queries:\n\n- **Lifetime statistics**: provide only **Organizational entity**.\n- **Time-bound statistics**: also provide **Time intervals** with **Time range** and **Time granularity type**. Times are milliseconds since epoch. Only data from the past 12 months is returned and the `shareCount` of time-bound data does not include instant reposts.\n- **Statistics of specific posts**: provide **Shares** or **UGC posts**. Only lifetime statistics are supported, so do not combine them with **Time intervals**. Posts without activity are not returned, their counts are 0.\n\nThe endpoint does not support pagination.\n',
		accounts: {
			linkedin2: { scope: ['rw_organization_admin'] },
			'linkedin-openid': { scope: ['rw_organization_admin'] },
		},
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
				organizationalEntity: {
					type: 'string',
					description:
						'The URN of the organization, `urn:li:organization:{id}`, or of the organization brand, `urn:li:organizationBrand:{id}`.',
				},
				shares: {
					type: 'array',
					description:
						'Share URNs to return statistics for. Lifetime statistics only. Cannot be combined with **Time intervals**.',
					items: {
						type: 'string',
						description: 'A share URN, for example `urn:li:share:1000000`.',
					},
				},
				ugcPosts: {
					type: 'array',
					description:
						'UGC post URNs to return statistics for. Lifetime statistics only. Cannot be combined with **Time intervals**.',
					items: {
						type: 'string',
						description: 'A UGC post URN, for example `urn:li:ugcPost:1000000`.',
					},
				},
				timeIntervals: {
					type: 'object',
					description:
						'Restricts the query to a time range. Omit it to retrieve lifetime statistics. When it is provided, **Time range** is required. Only data of the past 12 months is returned.',
					properties: {
						timeRange: {
							type: 'object',
							description: 'The time range of the query.',
							properties: {
								start: {
									type: 'number',
									description:
										'The inclusive start of the range, in milliseconds since epoch. The smallest supported granularity is a day. When it is not set, the query starts from the beginning of time.',
								},
								end: {
									type: 'number',
									description:
										'The exclusive end of the range, in milliseconds since epoch. The smallest supported granularity is a day. When it is not set, the query runs until the current time.',
								},
							},
							required: [],
						},
						timeGranularityType: {
							type: 'string',
							description: 'The granularity of the returned statistics.',
							default: '',
							enum: ['', 'DAY', 'MONTH'],
						},
					},
					required: [],
				},
			},
			required: ['organizationalEntity'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				elements: {
					type: 'array',
					description: 'The statistics elements.',
					items: {
						type: 'object',
						description:
							'The statistics of an organization, a share, a UGC post or a time interval.',
						properties: {
							organizationalEntity: {
								type: 'string',
								description:
									'The URN of the organization or organization brand the statistics belong to.',
							},
							share: {
								type: 'string',
								description:
									'The URN of the share. Empty for aggregate statistics.',
							},
							ugcPost: {
								type: 'string',
								description:
									'The URN of the UGC post. Empty for aggregate statistics.',
							},
							timeRange: {
								type: 'object',
								description:
									'The time range of the element. Present for time-bound statistics.',
								properties: {
									start: {
										type: 'number',
										description:
											'The start of the time range, in milliseconds since epoch.',
									},
									end: {
										type: 'number',
										description:
											'The end of the time range, in milliseconds since epoch.',
									},
								},
								required: [],
							},
							totalShareStatistics: {
								type: 'object',
								description: 'The share statistics.',
								properties: {
									clickCount: {
										type: 'number',
										description: 'The number of clicks.',
									},
									commentCount: {
										type: 'number',
										description: 'The number of comments.',
									},
									engagement: {
										type: 'number',
										description:
											'The number of organic clicks, likes, comments and shares over impressions.',
									},
									impressionCount: {
										type: 'number',
										description: 'The number of impressions.',
									},
									likeCount: {
										type: 'number',
										description:
											'The number of likes. It can be negative when members unlike a sponsored share they liked.',
									},
									shareCount: {
										type: 'number',
										description: 'The number of shares.',
									},
									uniqueImpressionsCount: {
										type: 'number',
										description: 'The number of unique impressions.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Pagination information of the response.',
					properties: {
						count: {
							type: 'number',
							description: 'The number of items requested per page.',
						},
						start: {
							type: 'number',
							description: 'The index of the first item in this page.',
						},
						total: {
							type: 'number',
							description: 'The total number of items, when LinkedIn returns it.',
						},
						links: {
							type: 'array',
							description:
								'Links to adjacent pages. Use the `next` link information to request the following page.',
							items: {
								type: 'object',
								description: 'A link to an adjacent page.',
								properties: {
									type: {
										type: 'string',
										description: 'The media type of the linked resource.',
									},
									rel: {
										type: 'string',
										description:
											'The relation of the link to the current page, for example `next` or `prev`.',
									},
									href: {
										type: 'string',
										description: 'The relative URL of the linked page.',
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
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'getPost',
		label: 'Get a post',
		description: 'Retrieves a LinkedIn post of a company page by its URN.',
		context:
			'---\nname: getPost\ndescription: Retrieves a LinkedIn post of a company page by its URN.\n---\n\nRetrieves one post with the [Posts API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api). Pass the URN of the post (`urn:li:share:{id}` or `urn:li:ugcPost:{id}`) as **Post URN**. The URN is URL-encoded by the endpoint.\n\nReading posts of a company page requires `r_organization_social` and the Administrator, Direct sponsored content poster or Content admin role on that page.\n\nBy default LinkedIn returns the published version (**View context** `READER`). Use `AUTHOR` to retrieve the latest version, for example an unpublished draft. Image and video assets are returned as URNs only. Use the getVideo endpoint for details of a video.\n',
		accounts: {
			linkedin2: { scope: ['r_organization_social'] },
			'linkedin-openid': { scope: ['r_organization_social'] },
		},
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
				postUrn: {
					type: 'string',
					description:
						'The URN of the post, for example `urn:li:ugcPost:6856810298419044352` or `urn:li:share:6844785523593134080`.',
				},
				viewContext: {
					type: 'string',
					description:
						'The context in which the post is viewed. `READER` returns the published version visible to a general audience. `AUTHOR` returns the latest version, which can be unpublished (`DRAFT` or `PROCESSING`). LinkedIn defaults to `READER`.',
					default: '',
					enum: ['', 'READER', 'AUTHOR'],
				},
			},
			required: ['postUrn'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The URN of the post, for example `urn:li:share:6844785523593134080` or `urn:li:ugcPost:6856810298419044352`.',
				},
				author: {
					type: 'string',
					description:
						'The URN of the author of the post. A person or an organization URN.',
				},
				commentary: {
					type: 'string',
					description:
						'The text of the post in little Text Format. Mentions and hashtags are returned in that format.',
				},
				visibility: {
					type: 'string',
					description:
						'Who can see the post: `PUBLIC`, `CONNECTIONS`, `LOGGED_IN` or `CONTAINER`.',
				},
				lifecycleState: {
					type: 'string',
					description:
						'The state of the post: `DRAFT`, `PUBLISHED`, `PUBLISH_REQUESTED` or `PUBLISH_FAILED`.',
				},
				lifecycleStateInfo: {
					type: 'object',
					description: 'Additional information about the lifecycle state.',
					properties: {
						isEditedByAuthor: {
							type: 'boolean',
							description: 'Whether the author edited the post after publishing.',
						},
						contentStatus: {
							type: 'string',
							description:
								'The processing status of the content: `PENDING`, `PROCESSING` or `FAILED`. Empty once the content is processed.',
						},
						reviewStatus: {
							type: 'string',
							description:
								'The review status of the post: `PENDING`, `PROCESSING` or `FAILED`. Empty once the review is complete.',
						},
					},
					required: [],
				},
				distribution: {
					type: 'object',
					description: 'Distribution of the post within LinkedIn and externally.',
					properties: {
						feedDistribution: {
							type: 'string',
							description:
								'Where the post is distributed within LinkedIn: `MAIN_FEED` or `NONE`.',
						},
						targetEntities: {
							type: 'array',
							description: 'The intended audience of the post.',
							items: {
								type: 'object',
								description:
									'A set of targeting facets. Each facet is a list of URNs.',
								properties: {
									degrees: {
										type: 'array',
										description: 'Standardized degrees targeted.',
										items: { type: 'string', description: 'A degree URN.' },
									},
									fieldsOfStudy: {
										type: 'array',
										description: 'Standardized fields of study targeted.',
										items: {
											type: 'string',
											description: 'A field of study URN.',
										},
									},
									industries: {
										type: 'array',
										description: 'Industries targeted.',
										items: { type: 'string', description: 'An industry URN.' },
									},
									interfaceLocales: {
										type: 'array',
										description: 'Interface locales targeted.',
										items: {
											type: 'string',
											description: 'An interface locale.',
										},
									},
									jobFunctions: {
										type: 'array',
										description: 'Job functions targeted.',
										items: {
											type: 'string',
											description: 'A job function URN.',
										},
									},
									geoLocations: {
										type: 'array',
										description: 'Geographic locations targeted.',
										items: { type: 'string', description: 'A geo URN.' },
									},
									organizations: {
										type: 'array',
										description: 'School organizations targeted.',
										items: {
											type: 'string',
											description: 'An organization URN.',
										},
									},
									seniorities: {
										type: 'array',
										description: 'Seniority levels targeted.',
										items: { type: 'string', description: 'A seniority URN.' },
									},
									staffCountRanges: {
										type: 'array',
										description: 'Organization sizes targeted.',
										items: {
											type: 'string',
											description:
												'A staff count range, for example `SIZE_11_TO_50`.',
										},
									},
								},
								required: [],
							},
						},
						thirdPartyDistributionChannels: {
							type: 'array',
							description:
								'External channels the post is distributed to. Empty when the post is not distributed externally.',
							items: { description: 'An external distribution channel.' },
						},
					},
					required: [],
				},
				content: {
					type: 'object',
					description: 'The content of the post. Empty for a text-only post.',
					properties: {
						media: {
							type: 'object',
							description: 'A single image, video or document.',
							properties: {
								id: { type: 'string', description: 'The URN of the media asset.' },
								altText: {
									type: 'string',
									description: 'The alternative text of the media.',
								},
								taggedEntities: {
									description: 'The entities tagged in the media.',
								},
							},
							required: [],
						},
						article: {
							type: 'object',
							description: 'A link to an article.',
							properties: {
								source: { type: 'string', description: 'The URL of the article.' },
								description: {
									type: 'string',
									description: 'The description of the article.',
								},
								thumbnail: {
									type: 'string',
									description: 'The URN of the thumbnail image.',
								},
								thumbnailAltText: {
									type: 'string',
									description: 'The alternative text of the thumbnail.',
								},
							},
							required: [],
						},
						poll: {
							type: 'object',
							description: 'A poll.',
							properties: {
								question: {
									type: 'string',
									description: 'The question of the poll.',
								},
								options: {
									type: 'array',
									description: 'The poll options.',
									items: {
										type: 'object',
										description: 'A poll option.',
										properties: {
											text: {
												type: 'string',
												description: 'The text of the option.',
											},
											isVotedByViewer: {
												type: 'boolean',
												description:
													'Whether the viewer voted for this option.',
											},
											voteCount: {
												type: 'number',
												description:
													'The number of votes of the option. Missing when the viewer is not allowed to see it yet.',
											},
										},
										required: [],
									},
								},
								settings: {
									type: 'object',
									description: 'The settings of the poll.',
									properties: {
										voteSelectionType: {
											type: 'string',
											description:
												'The vote selection type, for example `SINGLE_VOTE`.',
										},
										duration: {
											type: 'string',
											description:
												'How long the poll is open: `ONE_DAY`, `THREE_DAYS`, `SEVEN_DAYS` or `FOURTEEN_DAYS`.',
										},
										isVoterVisibleToAuthor: {
											type: 'boolean',
											description: 'Whether the author can see who voted.',
										},
									},
									required: [],
								},
								uniqueVotersCount: {
									type: 'number',
									description: 'The number of unique voters.',
								},
							},
							required: [],
						},
						multiImage: {
							type: 'object',
							description: 'A post with multiple images.',
							properties: {
								images: {
									type: 'array',
									description: 'The images of the post.',
									items: {
										type: 'object',
										description: 'An image of the post.',
										properties: {
											id: {
												type: 'string',
												description: 'The URN of the image.',
											},
											altText: {
												type: 'string',
												description: 'The alternative text of the image.',
											},
											taggedEntities: {
												description: 'The entities tagged in the media.',
											},
										},
										required: [],
									},
								},
								altText: {
									type: 'string',
									description: 'The alternative text of the content.',
								},
							},
							required: [],
						},
						carousel: {
							type: 'object',
							description: 'A carousel. Only sponsored posts have it.',
							properties: {
								cards: {
									type: 'array',
									description: 'The cards of the carousel.',
									items: {
										type: 'object',
										description: 'A card of the carousel.',
										properties: {
											landingPage: {
												type: 'string',
												description:
													'The URL that opens when the card is clicked.',
											},
											media: {
												type: 'object',
												description: 'The media of the card.',
												properties: {
													id: {
														type: 'string',
														description: 'The URN of the media asset.',
													},
													taggedEntities: {
														description:
															'The entities tagged in the media.',
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
						reference: {
							type: 'object',
							description: 'A reference to another entity, for example an event.',
							properties: {
								id: {
									type: 'string',
									description: 'The URN of the referenced entity.',
								},
							},
							required: [],
						},
						celebration: {
							description:
								'The celebration content. A celebration post cannot be created through the API.',
						},
					},
					required: [],
				},
				contentLandingPage: {
					type: 'string',
					description:
						'The web page that opens when a member clicks the content of the post.',
				},
				contentCallToActionLabel: {
					type: 'string',
					description:
						'The label of the call to action button associated with the content.',
				},
				reshareContext: {
					type: 'object',
					description: 'The context of a reshare. Empty when the post is not a reshare.',
					properties: {
						parent: {
							type: 'string',
							description: 'The URN of the post that was reshared.',
						},
						root: {
							type: 'string',
							description:
								'The URN of the greatest ancestor of the post. It can be the parent.',
						},
					},
					required: [],
				},
				container: {
					type: 'string',
					description: 'The URN of the container entity that contains the post.',
				},
				adContext: {
					type: 'object',
					description: 'Advertising metadata of the post. Empty when the post has none.',
					properties: {
						dscAdAccount: {
							type: 'string',
							description:
								'The URN of the ad account that created the direct sponsored content.',
						},
						dscAdType: {
							type: 'string',
							description:
								'The type of the direct sponsored content, for example `VIDEO` or `STANDARD`.',
						},
						dscName: {
							type: 'string',
							description: 'The name of the direct sponsored content.',
						},
						dscStatus: {
							type: 'string',
							description:
								'The status of the direct sponsored content: `ACTIVE` or `ARCHIVED`.',
						},
						isDsc: {
							type: 'boolean',
							description: 'Whether the post is direct sponsored content.',
						},
					},
					required: [],
				},
				isReshareDisabledByAuthor: {
					type: 'boolean',
					description: 'Whether the author disabled resharing of the post.',
				},
				createdAt: {
					type: 'number',
					description: 'The time the post was created, in milliseconds since epoch.',
				},
				lastModifiedAt: {
					type: 'number',
					description:
						'The time the post was last modified, in milliseconds since epoch.',
				},
				publishedAt: {
					type: 'number',
					description: 'The time the post was published, in milliseconds since epoch.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'getVideo',
		label: 'Get a video',
		description: 'Retrieves the metadata and processing status of a LinkedIn video.',
		context:
			'---\nname: getVideo\ndescription: Retrieves the metadata and processing status of a LinkedIn video.\n---\n\nRetrieves a video with the [Videos API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/videos-api). Use it to check the processing **Status** of a video before it is used in a post: the video can be used once the status is `AVAILABLE`. `WAITING_UPLOAD` and `PROCESSING` are transient. `PROCESSING_FAILED` comes with a **Processing failure reason**.\n\nLinkedIn checks that the caller owns the video (a member URN owner must match the caller, a company URN owner requires the Administrator or Direct sponsored content role on the page). A missing permission returns `403`.\n',
		accounts: {
			linkedin2: { scope: ['w_member_social', 'w_organization_social'] },
			'linkedin-openid': { scope: ['w_member_social', 'w_organization_social'] },
		},
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
				videoUrn: {
					type: 'string',
					description:
						'The URN of the video, for example `urn:li:video:C4E10AQGUkQY7trgh-Q`.',
				},
			},
			required: ['videoUrn'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The URN of the video.' },
				owner: {
					type: 'string',
					description: 'The URN of the person or organization that owns the video.',
				},
				status: {
					type: 'string',
					description:
						'The processing status of the video: `WAITING_UPLOAD`, `PROCESSING`, `PROCESSING_FAILED` or `AVAILABLE`.',
				},
				processingFailureReason: {
					type: 'string',
					description:
						'The reason the processing failed. Present only when **Status** is `PROCESSING_FAILED`.',
				},
				duration: {
					type: 'number',
					description:
						'The length of the video in milliseconds. Empty when the video is not available.',
				},
				aspectRatioWidth: {
					type: 'number',
					description:
						'The aspect ratio width of the video, for example 16 for a 16:9 video.',
				},
				aspectRatioHeight: {
					type: 'number',
					description:
						'The aspect ratio height of the video, for example 9 for a 16:9 video.',
				},
				downloadUrl: {
					type: 'string',
					description:
						'The URL to download or view the video. Empty when the video is not available.',
				},
				downloadUrlExpiresAt: {
					type: 'number',
					description:
						'The time the download URL expires, in milliseconds since epoch. If empty, the URL may never expire.',
				},
				thumbnail: {
					type: 'string',
					description: 'The URL of the thumbnail of the video.',
				},
				captions: {
					type: 'string',
					description:
						'The URL of the caption file. Present when captions were uploaded and processed.',
				},
				mediaLibraryMetadata: {
					type: 'object',
					description: 'Metadata of the video in the media library of an ad account.',
					properties: {
						associatedAccount: {
							type: 'string',
							description:
								'The URN of the account that owns the media library, for example `urn:li:sponsoredAccount:123`.',
						},
						assetName: {
							type: 'string',
							description: 'The name of the asset in the media library.',
						},
						mediaLibraryStatus: {
							type: 'string',
							description:
								'The status of the asset in the media library: `ACTIVE` or `ARCHIVED`.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'linkedin',
		appVersion: 2,
		endpointName: 'listPosts',
		label: 'List posts',
		description: 'Lists the posts of a LinkedIn company page.',
		context:
			'---\nname: listPosts\ndescription: Lists the posts of a LinkedIn company page.\n---\n\nFinds posts by author with the [Posts API](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api). Set **Author** to the organization URN (`urn:li:organization:{id}`). Requires `r_organization_social` and the Administrator, Direct sponsored content poster or Content admin role on the page.\n\nThe endpoint returns one page. To get the next page call it again with **Start** increased by the number of posts you received, or follow the `next` entry of `paging.links`. LinkedIn can return fewer posts than **Count** on a page even when more posts are available. Posts are sorted by last modified time, newest first, unless **Sort by** says otherwise. Both organic and sponsored posts are returned.\n',
		accounts: {
			linkedin2: { scope: ['r_organization_social'] },
			'linkedin-openid': { scope: ['r_organization_social'] },
		},
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
				author: {
					type: 'string',
					description:
						'The URN of the author whose posts are listed. An organization URN (`urn:li:organization:{id}`) for a company page.',
				},
				viewContext: {
					type: 'string',
					description:
						'The context in which the posts are viewed. `READER` returns the published versions visible to a general audience, `AUTHOR` returns the latest versions as seen by the author. LinkedIn defaults to `READER`.',
					default: '',
					enum: ['', 'READER', 'AUTHOR'],
				},
				sortBy: {
					type: 'string',
					description:
						'The sort order of the results, in descending order. LinkedIn defaults to `LAST_MODIFIED`.',
					default: '',
					enum: ['', 'LAST_MODIFIED', 'CREATED'],
				},
				count: {
					type: 'number',
					description:
						'The number of posts per page. The default is 10 and the maximum is 100. A page can contain fewer posts than requested even when more posts are available.',
					minimum: 1,
					maximum: 100,
				},
				start: {
					type: 'number',
					description: 'The index of the first post of the page. The default is 0.',
				},
			},
			required: ['author'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				elements: {
					type: 'array',
					description: 'The posts of the page.',
					items: {
						type: 'object',
						description: 'A LinkedIn post.',
						properties: {
							id: {
								type: 'string',
								description:
									'The URN of the post, for example `urn:li:share:6844785523593134080` or `urn:li:ugcPost:6856810298419044352`.',
							},
							author: {
								type: 'string',
								description:
									'The URN of the author of the post. A person or an organization URN.',
							},
							commentary: {
								type: 'string',
								description:
									'The text of the post in little Text Format. Mentions and hashtags are returned in that format.',
							},
							visibility: {
								type: 'string',
								description:
									'Who can see the post: `PUBLIC`, `CONNECTIONS`, `LOGGED_IN` or `CONTAINER`.',
							},
							lifecycleState: {
								type: 'string',
								description:
									'The state of the post: `DRAFT`, `PUBLISHED`, `PUBLISH_REQUESTED` or `PUBLISH_FAILED`.',
							},
							lifecycleStateInfo: {
								type: 'object',
								description: 'Additional information about the lifecycle state.',
								properties: {
									isEditedByAuthor: {
										type: 'boolean',
										description:
											'Whether the author edited the post after publishing.',
									},
									contentStatus: {
										type: 'string',
										description:
											'The processing status of the content: `PENDING`, `PROCESSING` or `FAILED`. Empty once the content is processed.',
									},
									reviewStatus: {
										type: 'string',
										description:
											'The review status of the post: `PENDING`, `PROCESSING` or `FAILED`. Empty once the review is complete.',
									},
								},
								required: [],
							},
							distribution: {
								type: 'object',
								description:
									'Distribution of the post within LinkedIn and externally.',
								properties: {
									feedDistribution: {
										type: 'string',
										description:
											'Where the post is distributed within LinkedIn: `MAIN_FEED` or `NONE`.',
									},
									targetEntities: {
										type: 'array',
										description: 'The intended audience of the post.',
										items: {
											type: 'object',
											description:
												'A set of targeting facets. Each facet is a list of URNs.',
											properties: {
												degrees: {
													type: 'array',
													description: 'Standardized degrees targeted.',
													items: {
														type: 'string',
														description: 'A degree URN.',
													},
												},
												fieldsOfStudy: {
													type: 'array',
													description:
														'Standardized fields of study targeted.',
													items: {
														type: 'string',
														description: 'A field of study URN.',
													},
												},
												industries: {
													type: 'array',
													description: 'Industries targeted.',
													items: {
														type: 'string',
														description: 'An industry URN.',
													},
												},
												interfaceLocales: {
													type: 'array',
													description: 'Interface locales targeted.',
													items: {
														type: 'string',
														description: 'An interface locale.',
													},
												},
												jobFunctions: {
													type: 'array',
													description: 'Job functions targeted.',
													items: {
														type: 'string',
														description: 'A job function URN.',
													},
												},
												geoLocations: {
													type: 'array',
													description: 'Geographic locations targeted.',
													items: {
														type: 'string',
														description: 'A geo URN.',
													},
												},
												organizations: {
													type: 'array',
													description: 'School organizations targeted.',
													items: {
														type: 'string',
														description: 'An organization URN.',
													},
												},
												seniorities: {
													type: 'array',
													description: 'Seniority levels targeted.',
													items: {
														type: 'string',
														description: 'A seniority URN.',
													},
												},
												staffCountRanges: {
													type: 'array',
													description: 'Organization sizes targeted.',
													items: {
														type: 'string',
														description:
															'A staff count range, for example `SIZE_11_TO_50`.',
													},
												},
											},
											required: [],
										},
									},
									thirdPartyDistributionChannels: {
										type: 'array',
										description:
											'External channels the post is distributed to. Empty when the post is not distributed externally.',
										items: { description: 'An external distribution channel.' },
									},
								},
								required: [],
							},
							content: {
								type: 'object',
								description: 'The content of the post. Empty for a text-only post.',
								properties: {
									media: {
										type: 'object',
										description: 'A single image, video or document.',
										properties: {
											id: {
												type: 'string',
												description: 'The URN of the media asset.',
											},
											altText: {
												type: 'string',
												description: 'The alternative text of the media.',
											},
											taggedEntities: {
												description: 'The entities tagged in the media.',
											},
										},
										required: [],
									},
									article: {
										type: 'object',
										description: 'A link to an article.',
										properties: {
											source: {
												type: 'string',
												description: 'The URL of the article.',
											},
											description: {
												type: 'string',
												description: 'The description of the article.',
											},
											thumbnail: {
												type: 'string',
												description: 'The URN of the thumbnail image.',
											},
											thumbnailAltText: {
												type: 'string',
												description:
													'The alternative text of the thumbnail.',
											},
										},
										required: [],
									},
									poll: {
										type: 'object',
										description: 'A poll.',
										properties: {
											question: {
												type: 'string',
												description: 'The question of the poll.',
											},
											options: {
												type: 'array',
												description: 'The poll options.',
												items: {
													type: 'object',
													description: 'A poll option.',
													properties: {
														text: {
															type: 'string',
															description: 'The text of the option.',
														},
														isVotedByViewer: {
															type: 'boolean',
															description:
																'Whether the viewer voted for this option.',
														},
														voteCount: {
															type: 'number',
															description:
																'The number of votes of the option. Missing when the viewer is not allowed to see it yet.',
														},
													},
													required: [],
												},
											},
											settings: {
												type: 'object',
												description: 'The settings of the poll.',
												properties: {
													voteSelectionType: {
														type: 'string',
														description:
															'The vote selection type, for example `SINGLE_VOTE`.',
													},
													duration: {
														type: 'string',
														description:
															'How long the poll is open: `ONE_DAY`, `THREE_DAYS`, `SEVEN_DAYS` or `FOURTEEN_DAYS`.',
													},
													isVoterVisibleToAuthor: {
														type: 'boolean',
														description:
															'Whether the author can see who voted.',
													},
												},
												required: [],
											},
											uniqueVotersCount: {
												type: 'number',
												description: 'The number of unique voters.',
											},
										},
										required: [],
									},
									multiImage: {
										type: 'object',
										description: 'A post with multiple images.',
										properties: {
											images: {
												type: 'array',
												description: 'The images of the post.',
												items: {
													type: 'object',
													description: 'An image of the post.',
													properties: {
														id: {
															type: 'string',
															description: 'The URN of the image.',
														},
														altText: {
															type: 'string',
															description:
																'The alternative text of the image.',
														},
														taggedEntities: {
															description:
																'The entities tagged in the media.',
														},
													},
													required: [],
												},
											},
											altText: {
												type: 'string',
												description: 'The alternative text of the content.',
											},
										},
										required: [],
									},
									carousel: {
										type: 'object',
										description: 'A carousel. Only sponsored posts have it.',
										properties: {
											cards: {
												type: 'array',
												description: 'The cards of the carousel.',
												items: {
													type: 'object',
													description: 'A card of the carousel.',
													properties: {
														landingPage: {
															type: 'string',
															description:
																'The URL that opens when the card is clicked.',
														},
														media: {
															type: 'object',
															description: 'The media of the card.',
															properties: {
																id: {
																	type: 'string',
																	description:
																		'The URN of the media asset.',
																},
																taggedEntities: {
																	description:
																		'The entities tagged in the media.',
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
									reference: {
										type: 'object',
										description:
											'A reference to another entity, for example an event.',
										properties: {
											id: {
												type: 'string',
												description: 'The URN of the referenced entity.',
											},
										},
										required: [],
									},
									celebration: {
										description:
											'The celebration content. A celebration post cannot be created through the API.',
									},
								},
								required: [],
							},
							contentLandingPage: {
								type: 'string',
								description:
									'The web page that opens when a member clicks the content of the post.',
							},
							contentCallToActionLabel: {
								type: 'string',
								description:
									'The label of the call to action button associated with the content.',
							},
							reshareContext: {
								type: 'object',
								description:
									'The context of a reshare. Empty when the post is not a reshare.',
								properties: {
									parent: {
										type: 'string',
										description: 'The URN of the post that was reshared.',
									},
									root: {
										type: 'string',
										description:
											'The URN of the greatest ancestor of the post. It can be the parent.',
									},
								},
								required: [],
							},
							container: {
								type: 'string',
								description:
									'The URN of the container entity that contains the post.',
							},
							adContext: {
								type: 'object',
								description:
									'Advertising metadata of the post. Empty when the post has none.',
								properties: {
									dscAdAccount: {
										type: 'string',
										description:
											'The URN of the ad account that created the direct sponsored content.',
									},
									dscAdType: {
										type: 'string',
										description:
											'The type of the direct sponsored content, for example `VIDEO` or `STANDARD`.',
									},
									dscName: {
										type: 'string',
										description: 'The name of the direct sponsored content.',
									},
									dscStatus: {
										type: 'string',
										description:
											'The status of the direct sponsored content: `ACTIVE` or `ARCHIVED`.',
									},
									isDsc: {
										type: 'boolean',
										description:
											'Whether the post is direct sponsored content.',
									},
								},
								required: [],
							},
							isReshareDisabledByAuthor: {
								type: 'boolean',
								description: 'Whether the author disabled resharing of the post.',
							},
							createdAt: {
								type: 'number',
								description:
									'The time the post was created, in milliseconds since epoch.',
							},
							lastModifiedAt: {
								type: 'number',
								description:
									'The time the post was last modified, in milliseconds since epoch.',
							},
							publishedAt: {
								type: 'number',
								description:
									'The time the post was published, in milliseconds since epoch.',
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Pagination information of the response.',
					properties: {
						count: {
							type: 'number',
							description: 'The number of items requested per page.',
						},
						start: {
							type: 'number',
							description: 'The index of the first item in this page.',
						},
						total: {
							type: 'number',
							description: 'The total number of items, when LinkedIn returns it.',
						},
						links: {
							type: 'array',
							description:
								'Links to adjacent pages. Use the `next` link information to request the following page.',
							items: {
								type: 'object',
								description: 'A link to an adjacent page.',
								properties: {
									type: {
										type: 'string',
										description: 'The media type of the linked resource.',
									},
									rel: {
										type: 'string',
										description:
											'The relation of the link to the current page, for example `next` or `prev`.',
									},
									href: {
										type: 'string',
										description: 'The relative URL of the linked page.',
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
];
