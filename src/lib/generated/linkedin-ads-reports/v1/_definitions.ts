// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'linkedin-ads-reports',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the LinkedIn Marketing API (versioned Rest.li API), mirroring a "Make an API Call" module.\n\nThe base URL is `https://api.linkedin.com/rest`. Provide the remaining path in the URL parameter\n(e.g. `/adTargetingFacets`, a GET that needs no query parameters, or `/adAccounts?q=search`). A missing leading\nslash is added automatically; a full URL with scheme and host is rejected. Authentication is handled automatically via the app\'s connection. Every request\nautomatically includes the `X-Restli-Protocol-Version: 2.0.0` and `LinkedIn-Version: 202605` headers unless you\noverride them via the **Headers** parameter (for example to pin a newer API version). Header names are matched\ncase-insensitively (`linkedin-version` overrides `LinkedIn-Version`); when a header is given more than once, the last value wins.\n\nThe URL must be a path, never a full URL. A URL that starts with a scheme or with `//` (for example\n`https://api.linkedin.com/rest/adAccounts`) is rejected with an error. Remove the scheme and the host.\n\nThe path is sent exactly as written and is not encoded again. With the `X-Restli-Protocol-Version: 2.0.0`\nheader (the default) LinkedIn requires the reserved characters of a key in the path to be percent-encoded, so\naddress a campaign as `/adCampaigns/urn%3Ali%3AsponsoredCampaign%3A123456789`. A plain colon URN\n(`/adCampaigns/urn:li:sponsoredCampaign:123456789`) is rejected with `400 Syntax exception in path variables`.\n\nQuery string parameters are URL-encoded by default. Rest.li structured values — finder lists such as\n`accounts=List(urn%3Ali%3AsponsoredAccount%3A123)` or date ranges such as\n`dateRange=(start:(year:2024,month:1,day:1))` — break under standard encoding, so for those enable\n**Send unencoded query string parameters** and percent-encode only the colons inside URNs (`%3A`) yourself.\nFinder calls take the finder name in the `q` query parameter (`q=search`, `q=statistics`).\n\nThis Endpoint does not request any permission of its own; it uses whatever the connection already holds. Create\nthe connection through the getAdAnalytics endpoint (or the Generate an Ad Statistics Report module) so it carries\nthe `r_ads` and `r_ads_reporting` permissions. Those are read-only, so write operations on ad entities are\nrejected by LinkedIn.\n\nRefer to the [LinkedIn Marketing API documentation](https://learn.microsoft.com/en-us/linkedin/marketing/) and the\n[LinkedIn API versioning documentation](https://learn.microsoft.com/en-us/linkedin/marketing/versioning) for\navailable endpoints, required parameters, and response schemas.\n',
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
						'Enter a path relative to `https://api.linkedin.com/rest`. For example: `/adTargetingFacets`. A full URL (starting with `https://`, `http://` or `//`) is rejected with an error.\nThe path is sent as written and is not encoded again. With the default `X-Restli-Protocol-Version: 2.0.0` header, percent-encode the reserved characters of a key in the path, for example `/adCampaigns/urn%3Ali%3AsponsoredCampaign%3A123`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers — we already did that for you. If you don't set the `X-Restli-Protocol-Version` or `LinkedIn-Version` headers here, we'll add them for you with the defaults `2.0.0` and `202605`.",
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
						'The HTTP request query parameters. By default these are automatically encoded — enable **Send unencoded query string parameters** below to send them as provided instead.',
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
						'Setting this to `Yes` will send the **Query string** parameters as provided, without automatic encoding. Use it for Rest.li structured values such as `List(urn%3Ali%3AsponsoredAccount%3A123)` or `(start:(year:2024,month:1,day:1))`, which break under standard URL encoding. You may need to percent-encode parts of the values yourself (for example `:` inside URNs as `%3A`).',
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
		appName: 'linkedin-ads-reports',
		appVersion: 1,
		endpointName: 'getAdAnalytics',
		label: 'Get ad analytics',
		description: 'Returns ad analytics statistics grouped by up to three pivots.',
		context:
			'---\nname: getAdAnalytics\ndescription: Returns ad analytics statistics grouped by up to three pivots.\n---\n\nCalls the LinkedIn Ads Reporting **statistics finder** (`GET /rest/adAnalytics?q=statistics`) once and returns the raw response. Each element of `elements` is one data point for a combination of pivot values and time period.\n\n## Required inputs\n\n- `pivots` — 1 to 3 grouping dimensions (for example `CAMPAIGN`, or `CAMPAIGN` + `CREATIVE`). Professional demographic pivots (`MEMBER_*`) are only available in the analytics finder, not in this call.\n- `dateRange.start` — `year`, `month`, `day` in UTC. `dateRange.end` is optional; omit it for an open range up to today.\n- `timeGranularity` — `ALL` for one aggregated row per pivot combination, or `DAILY` / `MONTHLY` / `YEARLY` for one row per period.\n- `fields` — up to 20 metrics. LinkedIn returns only what is requested (without `fields` the API would default to `impressions` and `clicks`). Always include `dateRange` and `pivotValues` in `fields`, otherwise the elements carry no period or entity information.\n- At least one facet: `accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`, as full URNs (`urn:li:sponsoredAccount:123456789`, `urn:li:sponsoredCampaign:123456789`, `urn:li:sponsoredCampaignGroup:123456789`, `urn:li:share:123456789`, `urn:li:organization:123456789`). `campaignType` on its own is not a facet.\n\n## Optional inputs\n\n- `objectiveType` filters by campaign objective; `campaignType` filters by ad format and requires another facet.\n- `sortBy` needs both `field` and `order`.\n\n## Behaviour and limits\n\n- No pagination: the finder returns all matching elements in one response, capped at 15,000. Narrow the date range, pivots or facets if the cap is reached. `paging.links` is normally empty.\n- An empty `elements` array means no activity in the range, or the connected user has no read access to the requested entities.\n- Some metric and pivot combinations are not supported by LinkedIn and are returned as `0` (for example `clicks` with `CAMPAIGN` + `CONVERSION`). `approximateMemberReach`, `cardImpressions`, `cardClicks`, `viralCardImpressions`, `viralCardClicks` and `conversionValueInLocalCurrency` are only available for non-demographic pivots; `approximateMemberReach` and `audiencePenetration` need a date range of 92 days or less.\n- Monetary and `BigDecimal` metrics (`costInLocalCurrency`, `costInUsd`, `conversionValueInLocalCurrency`, `costPerQualifiedLead`, registrations, job metrics) are returned as decimal strings, not numbers.\n- With `timeGranularity=ALL`, dates older than the 6-month daily retention window are rounded to month boundaries by LinkedIn.\n- LinkedIn throttles when more than 45 million metric values are requested within 5 minutes (HTTP 429); request fewer `fields` or a shorter range.\n- `pivotValues` are URNs. Resolve them with the LinkedIn URN resolution APIs when human-readable names are needed.\n\nReference: [LinkedIn Ads Reporting](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting) and the [metrics and query parameters table](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting-schema).\n',
		accounts: {
			linkedin2: { scope: ['r_ads', 'r_ads_reporting'] },
			'linkedin-openid': { scope: ['r_ads', 'r_ads_reporting'] },
		},
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
				pivots: {
					type: 'string',
					description:
						'The pivots by which each report data point is grouped. Accepts up to 3 values. `MEMBER_*` professional demographic pivots are not supported by the statistics finder.',
					enum: [
						'COMPANY',
						'ACCOUNT',
						'SHARE',
						'CAMPAIGN',
						'CREATIVE',
						'CAMPAIGN_GROUP',
						'CONVERSION',
						'CONVERSATION_NODE',
						'CONVERSATION_NODE_OPTION_INDEX',
						'SERVING_LOCATION',
						'OBJECTIVE_TYPE',
						'CARD_INDEX',
						'PLACEMENT_NAME',
						'IMPRESSION_DEVICE_TYPE',
						'EVENT_STAGE',
					],
				},
				dateRange: {
					type: 'object',
					description:
						'The inclusive date range of the analytics, in UTC. `start` is required; when `end` is omitted the range is open-ended up to today.',
					properties: {
						start: {
							type: 'object',
							description: 'The inclusive start date of the analytics.',
							properties: {
								year: {
									type: 'number',
									description: 'The start year, e.g. `2024`.',
								},
								month: {
									type: 'number',
									description: 'The start month, `1`–`12`.',
									minimum: 1,
									maximum: 12,
								},
								day: {
									type: 'number',
									description: 'The start day of the month, `1`–`31`.',
									minimum: 1,
									maximum: 31,
								},
							},
							required: ['year', 'month', 'day'],
						},
						end: {
							type: 'object',
							description:
								'The inclusive end date of the analytics. Must be after the start date. Omit for an open range from the start date to today.',
							properties: {
								year: {
									type: 'number',
									description:
										'The end year, e.g. `2024`. Required when the end date is provided.',
								},
								month: {
									type: 'number',
									description:
										'The end month, `1`–`12`. Required when the end date is provided.',
									minimum: 1,
									maximum: 12,
								},
								day: {
									type: 'number',
									description:
										'The end day of the month, `1`–`31`. Required when the end date is provided.',
									minimum: 1,
									maximum: 31,
								},
							},
							required: [],
						},
					},
					required: ['start'],
				},
				timeGranularity: {
					type: 'string',
					description:
						'Time granularity of the results. `ALL` returns a single result across the entire date range; `DAILY`, `MONTHLY` and `YEARLY` return one result per period.',
					enum: ['ALL', 'DAILY', 'MONTHLY', 'YEARLY'],
				},
				fields: {
					type: 'string',
					description:
						'The metrics to return, up to 20. Only the requested metrics are returned, so include `dateRange` and `pivotValues` to see which period and pivot entity each element belongs to. Some metric and pivot combinations are not supported by LinkedIn and come back as `0`. See the [metrics table](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting-schema).',
					enum: [
						'dateRange',
						'pivotValues',
						'actionClicks',
						'adUnitClicks',
						'appointmentsScheduled',
						'approximateMemberReach',
						'averageDwellTime',
						'averageEventWatchTime',
						'averageEventWatchTimeOver15Seconds',
						'averageEventWatchTimeOver2Minutes',
						'averageEventWatchTimeOver30Seconds',
						'averageVideoWatchTime',
						'audiencePenetration',
						'cardClicks',
						'cardImpressions',
						'clicks',
						'commentLikes',
						'comments',
						'companyPageClicks',
						'conversionValueInLocalCurrency',
						'costInLocalCurrency',
						'costInUsd',
						'costPerEventView',
						'costPerEventViewOver15Seconds',
						'costPerEventViewOver2Minutes',
						'costPerEventViewOver30Seconds',
						'costPerQualifiedLead',
						'documentCompletions',
						'documentFirstQuartileCompletions',
						'documentMidpointCompletions',
						'documentThirdQuartileCompletions',
						'downloadClicks',
						'eventViews',
						'eventViewsOver15Seconds',
						'eventViewsOver2Minutes',
						'eventViewsOver30Seconds',
						'eventWatchTime',
						'externalWebsiteConversions',
						'externalWebsitePostClickConversions',
						'externalWebsitePostViewConversions',
						'follows',
						'fullScreenPlays',
						'headlineClicks',
						'headlineImpressions',
						'impressions',
						'jobApplications',
						'jobApplyClicks',
						'landingPageClicks',
						'leadGenerationMailContactInfoShares',
						'leadGenerationMailInterestedClicks',
						'likes',
						'oneClickLeadFormOpens',
						'oneClickLeads',
						'opens',
						'otherEngagements',
						'postClickJobApplications',
						'postClickJobApplyClicks',
						'postClickRegistrations',
						'postViewJobApplications',
						'postViewJobApplyClicks',
						'postViewRegistrations',
						'qualifiedLeads',
						'reactions',
						'registrations',
						'sends',
						'shares',
						'subscriptionClicks',
						'talentLeads',
						'textUrlClicks',
						'totalEngagements',
						'validWorkEmailLeads',
						'videoCompletions',
						'videoFirstQuartileCompletions',
						'videoMidpointCompletions',
						'videoStarts',
						'videoThirdQuartileCompletions',
						'videoViews',
						'videoWatchTime',
						'viralCardClicks',
						'viralCardImpressions',
						'viralClicks',
						'viralCommentLikes',
						'viralComments',
						'viralCompanyPageClicks',
						'viralDocumentCompletions',
						'viralDocumentFirstQuartileCompletions',
						'viralDocumentMidpointCompletions',
						'viralDocumentThirdQuartileCompletions',
						'viralDownloadClicks',
						'viralExternalWebsiteConversions',
						'viralExternalWebsitePostClickConversions',
						'viralExternalWebsitePostViewConversions',
						'viralFollows',
						'viralFullScreenPlays',
						'viralImpressions',
						'viralJobApplications',
						'viralJobApplyClicks',
						'viralLandingPageClicks',
						'viralLikes',
						'viralOneClickLeadFormOpens',
						'viralOneClickLeads',
						'viralOtherEngagements',
						'viralPostClickJobApplications',
						'viralPostClickJobApplyClicks',
						'viralPostClickRegistrations',
						'viralPostViewJobApplications',
						'viralPostViewJobApplyClicks',
						'viralPostViewRegistrations',
						'viralReactions',
						'viralRegistrations',
						'viralShares',
						'viralSubscriptionClicks',
						'viralTotalEngagements',
						'viralVideoCompletions',
						'viralVideoFirstQuartileCompletions',
						'viralVideoMidpointCompletions',
						'viralVideoStarts',
						'viralVideoThirdQuartileCompletions',
						'viralVideoViews',
					],
				},
				objectiveType: {
					type: 'string',
					description: 'Filters the results by campaign objective type.',
					default: '',
					enum: [
						'',
						'LEAD_GENERATION',
						'CREATIVE_ENGAGEMENT',
						'WEBSITE_TRAFFIC',
						'VIDEO_VIEW',
						'BRAND_AWARENESS',
						'WEBSITE_CONVERSION',
						'WEBSITE_VISIT',
						'ENGAGEMENT',
						'JOB_APPLICANT',
					],
				},
				campaignType: {
					type: 'string',
					description:
						'Matches results by campaign type. Requires at least one other facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`).',
					default: '',
					enum: ['', 'TEXT_AD', 'SPONSORED_UPDATES', 'SPONSORED_INMAILS', 'DYNAMIC'],
				},
				accounts: {
					type: 'array',
					description:
						'Matches results by sponsored ad account. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.',
					items: {
						type: 'string',
						description: 'The URN, e.g. `urn:li:sponsoredAccount:123456789`.',
					},
				},
				campaigns: {
					type: 'array',
					description:
						'Matches results by campaign. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.',
					items: {
						type: 'string',
						description: 'The URN, e.g. `urn:li:sponsoredCampaign:123456789`.',
					},
				},
				campaignGroups: {
					type: 'array',
					description:
						'Matches results by campaign group. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.',
					items: {
						type: 'string',
						description: 'The URN, e.g. `urn:li:sponsoredCampaignGroup:123456789`.',
					},
				},
				shares: {
					type: 'array',
					description:
						'Matches results by sponsored share. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.',
					items: {
						type: 'string',
						description: 'The URN, e.g. `urn:li:share:123456789`.',
					},
				},
				companies: {
					type: 'array',
					description:
						"Matches results by the advertiser's own company. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.",
					items: {
						type: 'string',
						description: 'The URN, e.g. `urn:li:organization:123456789`.',
					},
				},
				sortBy: {
					type: 'object',
					description:
						'Sorts the results by a metric. `field` and `order` must be provided together.',
					properties: {
						field: {
							type: 'string',
							description:
								'The metric by which the results are sorted. Required when `order` is provided.',
							default: '',
							enum: [
								'',
								'COST_IN_LOCAL_CURRENCY',
								'IMPRESSIONS',
								'CLICKS',
								'ONE_CLICK_LEADS',
								'OPENS',
								'SENDS',
								'EXTERNAL_WEBSITE_CONVERSIONS',
							],
						},
						order: {
							type: 'string',
							description: 'The sort order. Required when `field` is provided.',
							default: '',
							enum: ['', 'ASCENDING', 'DESCENDING'],
						},
					},
					required: [],
				},
			},
			required: ['pivots', 'dateRange', 'timeGranularity', 'fields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				elements: {
					type: 'array',
					description:
						'The report data points, one per combination of pivot values and time period. Empty when there is no activity to report or the connection has no read access to the requested data. Only the requested `fields` are present on each element.',
					items: {
						type: 'object',
						description: 'One report data point.',
						properties: {
							dateRange: {
								type: 'object',
								description:
									'Date range covered by the data point. Returned only when `dateRange` is requested in `fields`.',
								properties: {
									start: {
										type: 'object',
										description:
											'The inclusive start date of the data point, in UTC.',
										properties: {
											year: {
												type: 'number',
												description: 'The start year.',
											},
											month: {
												type: 'number',
												description: 'The start month, 1–12.',
											},
											day: {
												type: 'number',
												description: 'The start day of the month.',
											},
										},
										required: [],
									},
									end: {
										type: 'object',
										description:
											'The inclusive end date of the data point, in UTC.',
										properties: {
											year: { type: 'number', description: 'The end year.' },
											month: {
												type: 'number',
												description: 'The end month, 1–12.',
											},
											day: {
												type: 'number',
												description: 'The end day of the month.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							pivotValues: {
								type: 'array',
								description:
									'The serialized URNs (or enum values) of the pivots for this data point, in the order of the requested `pivots`. Returned only when `pivotValues` is requested in `fields`.',
								items: {
									type: 'string',
									description:
										'A pivot value, e.g. `urn:li:sponsoredCampaign:123456789`.',
								},
							},
							actionClicks: {
								type: 'number',
								description:
									'The count of clicks on the action button of the Sponsored Messaging ad.',
							},
							adUnitClicks: {
								type: 'number',
								description:
									'The count of clicks on the ad unit displayed alongside the Sponsored Messaging ad.',
							},
							appointmentsScheduled: {
								type: 'number',
								description:
									'The number of appointments booked through Lead Gen campaigns.',
							},
							approximateMemberReach: {
								type: 'number',
								description:
									'The estimated number of unique member accounts with at least one impression. Non-demographic pivots only; available when the date range is 92 days or less.',
							},
							averageDwellTime: {
								type: 'number',
								description:
									"Average user dwell time in seconds, measured while more than 50% of the ad's pixels remain visible in the viewport.",
							},
							averageEventWatchTime: {
								type: 'number',
								description: 'The average watch time of the event in milliseconds.',
							},
							averageEventWatchTimeOver15Seconds: {
								type: 'number',
								description:
									'The average watch time in milliseconds for users who watched the event for more than 15 seconds.',
							},
							averageEventWatchTimeOver2Minutes: {
								type: 'number',
								description:
									'The average watch time in milliseconds for users who watched the event for more than 2 minutes.',
							},
							averageEventWatchTimeOver30Seconds: {
								type: 'number',
								description:
									'The average watch time in milliseconds for users who watched the event for more than 30 seconds.',
							},
							averageVideoWatchTime: {
								type: 'number',
								description:
									'Average video watch time in milliseconds. May be delayed by up to 48 hours.',
							},
							audiencePenetration: {
								type: 'number',
								description:
									'The approximate number of unique members reached divided by the approximate total target audience size. Null when the date range exceeds 92 days; requires an ACCOUNT, CAMPAIGN_GROUP or CAMPAIGN pivot.',
							},
							cardClicks: {
								type: 'number',
								description:
									'The number of clicks for each card of a carousel ad. Non-demographic pivots only.',
							},
							cardImpressions: {
								type: 'number',
								description:
									'The number of impressions shown for each card of a carousel ad. Non-demographic pivots only.',
							},
							clicks: {
								type: 'number',
								description: 'The count of chargeable clicks.',
							},
							commentLikes: {
								type: 'number',
								description:
									'The count of likes of a comment. Sponsored Content only.',
							},
							comments: {
								type: 'number',
								description: 'The count of comments. Sponsored Content only.',
							},
							companyPageClicks: {
								type: 'number',
								description: 'The count of clicks to view the company page.',
							},
							conversionValueInLocalCurrency: {
								type: 'string',
								description:
									"Value of the conversions in the account's local currency, as a decimal string. Non-demographic pivots only.",
							},
							costInLocalCurrency: {
								type: 'string',
								description:
									"Cost in the account's local currency, as a decimal string, based on the pivot and time granularity.",
							},
							costInUsd: {
								type: 'string',
								description:
									'Cost in USD, as a decimal string, based on the pivot and time granularity.',
							},
							costPerEventView: {
								type: 'number',
								description: 'The cost per view for an event hosted on LinkedIn.',
							},
							costPerEventViewOver15Seconds: {
								type: 'number',
								description:
									'The cost per view for users who watched the event for more than 15 seconds.',
							},
							costPerEventViewOver2Minutes: {
								type: 'number',
								description:
									'The cost per view for users who watched the event for more than 2 minutes.',
							},
							costPerEventViewOver30Seconds: {
								type: 'number',
								description:
									'The cost per view for users who watched the event for more than 30 seconds.',
							},
							costPerQualifiedLead: {
								type: 'string',
								description:
									'How much money was spent per qualified lead (costInLocalCurrency / qualifiedLeads), as a decimal string.',
							},
							documentCompletions: {
								type: 'number',
								description:
									"The number of times users reached 100% of the document's length. Document ads only.",
							},
							documentFirstQuartileCompletions: {
								type: 'number',
								description:
									"The number of times users reached the first quartile of the document's length. Document ads only.",
							},
							documentMidpointCompletions: {
								type: 'number',
								description:
									"The number of times users reached the second quartile of the document's length. Document ads only.",
							},
							documentThirdQuartileCompletions: {
								type: 'number',
								description:
									"The number of times users reached the third quartile of the document's length. Document ads only.",
							},
							downloadClicks: {
								type: 'number',
								description:
									'The number of times users clicked the download icon of the ad media. Only for ad formats supporting media downloads.',
							},
							eventViews: {
								type: 'number',
								description:
									'The count of valid views for an event hosted on LinkedIn.',
							},
							eventViewsOver15Seconds: {
								type: 'number',
								description:
									'The count of valid event views longer than 15 seconds.',
							},
							eventViewsOver2Minutes: {
								type: 'number',
								description:
									'The count of valid event views longer than 2 minutes.',
							},
							eventViewsOver30Seconds: {
								type: 'number',
								description:
									'The count of valid event views longer than 30 seconds.',
							},
							eventWatchTime: {
								type: 'number',
								description: 'The total watch time of the event in milliseconds.',
							},
							externalWebsiteConversions: {
								type: 'number',
								description:
									'Total number of times users took a desired action after clicking on or seeing your ad.',
							},
							externalWebsitePostClickConversions: {
								type: 'number',
								description:
									'Total number of times users took a desired action after clicking on your ad.',
							},
							externalWebsitePostViewConversions: {
								type: 'number',
								description:
									'Total number of times users took a desired action after seeing your ad.',
							},
							follows: {
								type: 'number',
								description:
									'The count of follows. Sponsored Content and Follower ads only.',
							},
							fullScreenPlays: {
								type: 'number',
								description:
									'Number of times members entered full screen mode on a video ad.',
							},
							headlineClicks: {
								type: 'number',
								description:
									'The number of times members clicked on the headline of conversation ads.',
							},
							headlineImpressions: {
								type: 'number',
								description:
									'The number of times members were shown the headline of conversation ads.',
							},
							impressions: {
								type: 'number',
								description: 'The number of times members were shown the ads.',
							},
							jobApplications: {
								type: 'string',
								description:
									'The number of times a member completed a job application after viewing or clicking on an ad, as a decimal string.',
							},
							jobApplyClicks: {
								type: 'string',
								description:
									"The number of times a member clicked the job's apply button after viewing or clicking on an ad, as a decimal string.",
							},
							landingPageClicks: {
								type: 'number',
								description:
									'The count of clicks which take the user to the creative landing page.',
							},
							leadGenerationMailContactInfoShares: {
								type: 'number',
								description:
									'The number of times users shared contact info through One Click Lead Gen for Sponsored Messaging ads.',
							},
							leadGenerationMailInterestedClicks: {
								type: 'number',
								description:
									'The count of Sponsored Messaging ad recipients who clicked to demonstrate interest.',
							},
							likes: {
								type: 'number',
								description: 'The count of likes. Sponsored Content only.',
							},
							oneClickLeadFormOpens: {
								type: 'number',
								description:
									'The count of times users opened the lead form for a One Click Lead Gen campaign.',
							},
							oneClickLeads: {
								type: 'number',
								description:
									'The count of leads generated through One Click Lead Gen.',
							},
							opens: {
								type: 'number',
								description: 'The count of opens of Sponsored Messaging ads.',
							},
							otherEngagements: {
								type: 'number',
								description:
									"The count of user interactions with the ad unit that don't fit into any other category.",
							},
							postClickJobApplications: {
								type: 'string',
								description:
									'The number of times a member completed a job application after clicking on an ad, as a decimal string.',
							},
							postClickJobApplyClicks: {
								type: 'string',
								description:
									"The number of times a member clicked the job's apply button after clicking on an ad, as a decimal string.",
							},
							postClickRegistrations: {
								type: 'string',
								description:
									'The number of times a member registered for an event after clicking on an ad, as a decimal string.',
							},
							postViewJobApplications: {
								type: 'string',
								description:
									'The number of times a member completed a job application after viewing an ad, as a decimal string.',
							},
							postViewJobApplyClicks: {
								type: 'string',
								description:
									"The number of times a member clicked the job's apply button after viewing an ad, as a decimal string.",
							},
							postViewRegistrations: {
								type: 'string',
								description:
									'The number of times a member registered for an event after viewing an ad, as a decimal string.',
							},
							qualifiedLeads: {
								type: 'number',
								description:
									'The count of qualified leads shared by the advertiser.',
							},
							reactions: {
								type: 'number',
								description:
									'The count of positive reactions on Sponsored Content.',
							},
							registrations: {
								type: 'string',
								description:
									'The number of times a member registered for an event after viewing or clicking on an ad, as a decimal string.',
							},
							sends: {
								type: 'number',
								description: 'The count of sends of Sponsored Messaging ads.',
							},
							shares: {
								type: 'number',
								description: 'The count of shares. Sponsored Content only.',
							},
							subscriptionClicks: {
								type: 'number',
								description:
									'The count of clicks to subscribe to a series, such as a Newsletter.',
							},
							talentLeads: {
								type: 'number',
								description:
									'Number of leads captured through a talent media campaign.',
							},
							textUrlClicks: {
								type: 'number',
								description:
									'The count of clicks on links included in the body of the Sponsored Messaging ad.',
							},
							totalEngagements: {
								type: 'number',
								description: 'The count of all user interactions with the ad unit.',
							},
							validWorkEmailLeads: {
								type: 'number',
								description:
									"The count of leads with a valid work email that doesn't use a free or personal email domain.",
							},
							videoCompletions: {
								type: 'number',
								description:
									'The count of video ads that played 97-100% of the video.',
							},
							videoFirstQuartileCompletions: {
								type: 'number',
								description:
									'The count of video ads that played through the first quartile of the video.',
							},
							videoMidpointCompletions: {
								type: 'number',
								description:
									'The count of video ads that played through the midpoint of the video.',
							},
							videoStarts: {
								type: 'number',
								description: 'The count of video ads that were started by users.',
							},
							videoThirdQuartileCompletions: {
								type: 'number',
								description:
									'The count of video ads that played through the third quartile of the video.',
							},
							videoViews: {
								type: 'number',
								description:
									'A video ad playing for at least 2 continuous seconds 50% in-view, or a click on the CTA.',
							},
							videoWatchTime: {
								type: 'number',
								description:
									'The total watch time in milliseconds for a video ad. May be delayed by up to 48 hours.',
							},
							viralCardClicks: {
								type: 'number',
								description:
									'The number of viral clicks for each card of a carousel ad. Non-demographic pivots only.',
							},
							viralCardImpressions: {
								type: 'number',
								description:
									'The number of viral impressions shown for each card of a carousel ad. Non-demographic pivots only.',
							},
							viralClicks: {
								type: 'number',
								description:
									'The count of clicks on viral impressions. Sponsored Content only.',
							},
							viralCommentLikes: {
								type: 'number',
								description:
									'The count of likes on comments from viral impressions. Sponsored Content only.',
							},
							viralComments: {
								type: 'number',
								description:
									'The count of comments from viral impressions. Sponsored Content only.',
							},
							viralCompanyPageClicks: {
								type: 'number',
								description:
									'The count of clicks to view the company page from viral impressions. Sponsored Content only.',
							},
							viralDocumentCompletions: {
								type: 'number',
								description:
									"The number of times users reached 100% of the document's length on a viral post. Document ads only.",
							},
							viralDocumentFirstQuartileCompletions: {
								type: 'number',
								description:
									"The number of times users reached the first quartile of the document's length on a viral post. Document ads only.",
							},
							viralDocumentMidpointCompletions: {
								type: 'number',
								description:
									"The number of times users reached the second quartile of the document's length on a viral post. Document ads only.",
							},
							viralDocumentThirdQuartileCompletions: {
								type: 'number',
								description:
									"The number of times users reached the third quartile of the document's length on a viral post. Document ads only.",
							},
							viralDownloadClicks: {
								type: 'number',
								description:
									'The number of times users clicked the download icon of the media in a viral ad.',
							},
							viralExternalWebsiteConversions: {
								type: 'number',
								description:
									'The count of conversions attributed to your ads driven by a viral event.',
							},
							viralExternalWebsitePostClickConversions: {
								type: 'number',
								description:
									'The count of post-click conversions attributed to your ads driven by a viral click.',
							},
							viralExternalWebsitePostViewConversions: {
								type: 'number',
								description:
									'The count of post-view conversions attributed to your ads driven by a viral impression.',
							},
							viralFollows: {
								type: 'number',
								description:
									'The count of follows from viral impressions. Sponsored Content only.',
							},
							viralFullScreenPlays: {
								type: 'number',
								description:
									'Number of times members entered full screen mode on a viral video ad.',
							},
							viralImpressions: {
								type: 'number',
								description:
									'The count of viral impressions, i.e. impressions resulting from users sharing sponsored content to their own network. Sponsored Content only.',
							},
							viralJobApplications: {
								type: 'string',
								description:
									'The number of times a member completed a job application after viewing or clicking on a viral ad, as a decimal string.',
							},
							viralJobApplyClicks: {
								type: 'string',
								description:
									"The number of times a member clicked the job's apply button after viewing or clicking on a viral ad, as a decimal string.",
							},
							viralLandingPageClicks: {
								type: 'number',
								description:
									'The count of clicks on viral impressions that take the user to the creative landing page. Sponsored Content only.',
							},
							viralLikes: {
								type: 'number',
								description:
									'The count of likes from viral impressions. Sponsored Content only.',
							},
							viralOneClickLeadFormOpens: {
								type: 'number',
								description:
									'The count of times users opened the lead form for viral impressions from a Lead Gen campaign.',
							},
							viralOneClickLeads: {
								type: 'number',
								description:
									'The count of leads generated through One Click Lead Gen from viral impressions.',
							},
							viralOtherEngagements: {
								type: 'number',
								description:
									"The count of user interactions with viral impressions that don't fit into any other category. Sponsored Content only.",
							},
							viralPostClickJobApplications: {
								type: 'string',
								description:
									'The number of times a member completed a job application after clicking on a viral ad, as a decimal string.',
							},
							viralPostClickJobApplyClicks: {
								type: 'string',
								description:
									"The number of times a member clicked the job's apply button after clicking on a viral ad, as a decimal string.",
							},
							viralPostClickRegistrations: {
								type: 'string',
								description:
									'The number of times a member registered for an event after clicking on a viral ad, as a decimal string.',
							},
							viralPostViewJobApplications: {
								type: 'string',
								description:
									'The number of times a member completed a job application after viewing a viral ad, as a decimal string.',
							},
							viralPostViewJobApplyClicks: {
								type: 'string',
								description:
									"The number of times a member clicked the job's apply button after viewing a viral ad, as a decimal string.",
							},
							viralPostViewRegistrations: {
								type: 'string',
								description:
									'The number of times a member registered for an event after viewing a viral ad, as a decimal string.',
							},
							viralReactions: {
								type: 'number',
								description:
									'The count of positive reactions on viral Sponsored Content.',
							},
							viralRegistrations: {
								type: 'string',
								description:
									'The number of times a member registered for an event after viewing or clicking on a viral ad, as a decimal string.',
							},
							viralShares: {
								type: 'number',
								description:
									'The count of shares from viral impressions. Sponsored Content only.',
							},
							viralSubscriptionClicks: {
								type: 'number',
								description:
									'The count of viral clicks to subscribe to a series, such as a Newsletter.',
							},
							viralTotalEngagements: {
								type: 'number',
								description:
									'The count of all user interactions with a viral ad unit. Sponsored Content only.',
							},
							viralVideoCompletions: {
								type: 'number',
								description:
									'The count of viral video ads that played 97-100% of the video.',
							},
							viralVideoFirstQuartileCompletions: {
								type: 'number',
								description:
									'The count of viral video ads that played through the first quartile of the video.',
							},
							viralVideoMidpointCompletions: {
								type: 'number',
								description:
									'The count of viral video ads that played through the midpoint of the video.',
							},
							viralVideoStarts: {
								type: 'number',
								description:
									'The count of viral video ads that were started by users.',
							},
							viralVideoThirdQuartileCompletions: {
								type: 'number',
								description:
									'The count of viral video ads that played through the third quartile of the video.',
							},
							viralVideoViews: {
								type: 'number',
								description:
									'A viral video ad playing for at least 2 continuous seconds 50% in-view, or a click on the CTA.',
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description:
						'Rest.li paging metadata. The `adAnalytics` finder does not support pagination; all matching elements (up to 15,000) are returned in one response.',
					properties: {
						start: {
							type: 'number',
							description: 'The index of the first returned element.',
						},
						count: {
							type: 'number',
							description: 'The page size reported by the API.',
						},
						links: {
							type: 'array',
							description: 'Paging links. Usually empty for this finder.',
							items: {
								type: 'object',
								description: 'A paging link.',
								properties: {
									rel: {
										type: 'string',
										description: 'The link relation, e.g. `next`.',
									},
									href: {
										type: 'string',
										description: 'The relative URL of the linked page.',
									},
									type: {
										type: 'string',
										description: 'The media type of the linked page.',
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
