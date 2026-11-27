// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type GetAdAnalyticsInput = {
	/**
	 * The pivots by which each report data point is grouped. Accepts up to 3 values. `MEMBER_*` professional demographic pivots are not supported by the statistics finder.
	 */
	pivots:
		| 'COMPANY'
		| 'ACCOUNT'
		| 'SHARE'
		| 'CAMPAIGN'
		| 'CREATIVE'
		| 'CAMPAIGN_GROUP'
		| 'CONVERSION'
		| 'CONVERSATION_NODE'
		| 'CONVERSATION_NODE_OPTION_INDEX'
		| 'SERVING_LOCATION'
		| 'OBJECTIVE_TYPE'
		| 'CARD_INDEX'
		| 'PLACEMENT_NAME'
		| 'IMPRESSION_DEVICE_TYPE'
		| 'EVENT_STAGE';
	/**
	 * The inclusive date range of the analytics, in UTC. `start` is required; when `end` is omitted the range is open-ended up to today.
	 */
	dateRange: {
		/**
		 * The inclusive start date of the analytics.
		 */
		start: {
			/**
			 * The start year, e.g. `2024`.
			 */
			year: number;
			/**
			 * The start month, `1`–`12`.
			 */
			month: number;
			/**
			 * The start day of the month, `1`–`31`.
			 */
			day: number;
		};
		/**
		 * The inclusive end date of the analytics. Must be after the start date. Omit for an open range from the start date to today.
		 */
		end?: {
			/**
			 * The end year, e.g. `2024`. Required when the end date is provided.
			 */
			year?: number;
			/**
			 * The end month, `1`–`12`. Required when the end date is provided.
			 */
			month?: number;
			/**
			 * The end day of the month, `1`–`31`. Required when the end date is provided.
			 */
			day?: number;
		};
	};
	/**
	 * Time granularity of the results. `ALL` returns a single result across the entire date range; `DAILY`, `MONTHLY` and `YEARLY` return one result per period.
	 */
	timeGranularity: 'ALL' | 'DAILY' | 'MONTHLY' | 'YEARLY';
	/**
	 * The metrics to return, up to 20. Only the requested metrics are returned, so include `dateRange` and `pivotValues` to see which period and pivot entity each element belongs to. Some metric and pivot combinations are not supported by LinkedIn and come back as `0`. See the [metrics table](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting-schema).
	 */
	fields:
		| 'dateRange'
		| 'pivotValues'
		| 'actionClicks'
		| 'adUnitClicks'
		| 'appointmentsScheduled'
		| 'approximateMemberReach'
		| 'averageDwellTime'
		| 'averageEventWatchTime'
		| 'averageEventWatchTimeOver15Seconds'
		| 'averageEventWatchTimeOver2Minutes'
		| 'averageEventWatchTimeOver30Seconds'
		| 'averageVideoWatchTime'
		| 'audiencePenetration'
		| 'cardClicks'
		| 'cardImpressions'
		| 'clicks'
		| 'commentLikes'
		| 'comments'
		| 'companyPageClicks'
		| 'conversionValueInLocalCurrency'
		| 'costInLocalCurrency'
		| 'costInUsd'
		| 'costPerEventView'
		| 'costPerEventViewOver15Seconds'
		| 'costPerEventViewOver2Minutes'
		| 'costPerEventViewOver30Seconds'
		| 'costPerQualifiedLead'
		| 'documentCompletions'
		| 'documentFirstQuartileCompletions'
		| 'documentMidpointCompletions'
		| 'documentThirdQuartileCompletions'
		| 'downloadClicks'
		| 'eventViews'
		| 'eventViewsOver15Seconds'
		| 'eventViewsOver2Minutes'
		| 'eventViewsOver30Seconds'
		| 'eventWatchTime'
		| 'externalWebsiteConversions'
		| 'externalWebsitePostClickConversions'
		| 'externalWebsitePostViewConversions'
		| 'follows'
		| 'fullScreenPlays'
		| 'headlineClicks'
		| 'headlineImpressions'
		| 'impressions'
		| 'jobApplications'
		| 'jobApplyClicks'
		| 'landingPageClicks'
		| 'leadGenerationMailContactInfoShares'
		| 'leadGenerationMailInterestedClicks'
		| 'likes'
		| 'oneClickLeadFormOpens'
		| 'oneClickLeads'
		| 'opens'
		| 'otherEngagements'
		| 'postClickJobApplications'
		| 'postClickJobApplyClicks'
		| 'postClickRegistrations'
		| 'postViewJobApplications'
		| 'postViewJobApplyClicks'
		| 'postViewRegistrations'
		| 'qualifiedLeads'
		| 'reactions'
		| 'registrations'
		| 'sends'
		| 'shares'
		| 'subscriptionClicks'
		| 'talentLeads'
		| 'textUrlClicks'
		| 'totalEngagements'
		| 'validWorkEmailLeads'
		| 'videoCompletions'
		| 'videoFirstQuartileCompletions'
		| 'videoMidpointCompletions'
		| 'videoStarts'
		| 'videoThirdQuartileCompletions'
		| 'videoViews'
		| 'videoWatchTime'
		| 'viralCardClicks'
		| 'viralCardImpressions'
		| 'viralClicks'
		| 'viralCommentLikes'
		| 'viralComments'
		| 'viralCompanyPageClicks'
		| 'viralDocumentCompletions'
		| 'viralDocumentFirstQuartileCompletions'
		| 'viralDocumentMidpointCompletions'
		| 'viralDocumentThirdQuartileCompletions'
		| 'viralDownloadClicks'
		| 'viralExternalWebsiteConversions'
		| 'viralExternalWebsitePostClickConversions'
		| 'viralExternalWebsitePostViewConversions'
		| 'viralFollows'
		| 'viralFullScreenPlays'
		| 'viralImpressions'
		| 'viralJobApplications'
		| 'viralJobApplyClicks'
		| 'viralLandingPageClicks'
		| 'viralLikes'
		| 'viralOneClickLeadFormOpens'
		| 'viralOneClickLeads'
		| 'viralOtherEngagements'
		| 'viralPostClickJobApplications'
		| 'viralPostClickJobApplyClicks'
		| 'viralPostClickRegistrations'
		| 'viralPostViewJobApplications'
		| 'viralPostViewJobApplyClicks'
		| 'viralPostViewRegistrations'
		| 'viralReactions'
		| 'viralRegistrations'
		| 'viralShares'
		| 'viralSubscriptionClicks'
		| 'viralTotalEngagements'
		| 'viralVideoCompletions'
		| 'viralVideoFirstQuartileCompletions'
		| 'viralVideoMidpointCompletions'
		| 'viralVideoStarts'
		| 'viralVideoThirdQuartileCompletions'
		| 'viralVideoViews';
	/**
	 * Filters the results by campaign objective type.
	 */
	objectiveType?:
		| ''
		| 'LEAD_GENERATION'
		| 'CREATIVE_ENGAGEMENT'
		| 'WEBSITE_TRAFFIC'
		| 'VIDEO_VIEW'
		| 'BRAND_AWARENESS'
		| 'WEBSITE_CONVERSION'
		| 'WEBSITE_VISIT'
		| 'ENGAGEMENT'
		| 'JOB_APPLICANT';
	/**
	 * Matches results by campaign type. Requires at least one other facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`).
	 */
	campaignType?: '' | 'TEXT_AD' | 'SPONSORED_UPDATES' | 'SPONSORED_INMAILS' | 'DYNAMIC';
	/**
	 * Matches results by sponsored ad account. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.
	 *
	 * Items: The URN, e.g. `urn:li:sponsoredAccount:123456789`.
	 */
	accounts?: string[];
	/**
	 * Matches results by campaign. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.
	 *
	 * Items: The URN, e.g. `urn:li:sponsoredCampaign:123456789`.
	 */
	campaigns?: string[];
	/**
	 * Matches results by campaign group. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.
	 *
	 * Items: The URN, e.g. `urn:li:sponsoredCampaignGroup:123456789`.
	 */
	campaignGroups?: string[];
	/**
	 * Matches results by sponsored share. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.
	 *
	 * Items: The URN, e.g. `urn:li:share:123456789`.
	 */
	shares?: string[];
	/**
	 * Matches results by the advertiser's own company. At least one facet (`accounts`, `campaigns`, `campaignGroups`, `shares` or `companies`) is required.
	 *
	 * Items: The URN, e.g. `urn:li:organization:123456789`.
	 */
	companies?: string[];
	/**
	 * Sorts the results by a metric. `field` and `order` must be provided together.
	 */
	sortBy?: {
		/**
		 * The metric by which the results are sorted. Required when `order` is provided.
		 */
		field?:
			| ''
			| 'COST_IN_LOCAL_CURRENCY'
			| 'IMPRESSIONS'
			| 'CLICKS'
			| 'ONE_CLICK_LEADS'
			| 'OPENS'
			| 'SENDS'
			| 'EXTERNAL_WEBSITE_CONVERSIONS';
		/**
		 * The sort order. Required when `field` is provided.
		 */
		order?: '' | 'ASCENDING' | 'DESCENDING';
	};
};

export type GetAdAnalyticsOutput = {
	/**
	 * The report data points, one per combination of pivot values and time period. Empty when there is no activity to report or the connection has no read access to the requested data. Only the requested `fields` are present on each element.
	 *
	 * Items: One report data point.
	 */
	elements?: {
		/**
		 * Date range covered by the data point. Returned only when `dateRange` is requested in `fields`.
		 */
		dateRange?: {
			/**
			 * The inclusive start date of the data point, in UTC.
			 */
			start?: {
				/**
				 * The start year.
				 */
				year?: number;
				/**
				 * The start month, 1–12.
				 */
				month?: number;
				/**
				 * The start day of the month.
				 */
				day?: number;
			};
			/**
			 * The inclusive end date of the data point, in UTC.
			 */
			end?: {
				/**
				 * The end year.
				 */
				year?: number;
				/**
				 * The end month, 1–12.
				 */
				month?: number;
				/**
				 * The end day of the month.
				 */
				day?: number;
			};
		};
		/**
		 * The serialized URNs (or enum values) of the pivots for this data point, in the order of the requested `pivots`. Returned only when `pivotValues` is requested in `fields`.
		 *
		 * Items: A pivot value, e.g. `urn:li:sponsoredCampaign:123456789`.
		 */
		pivotValues?: string[];
		/**
		 * The count of clicks on the action button of the Sponsored Messaging ad.
		 */
		actionClicks?: number;
		/**
		 * The count of clicks on the ad unit displayed alongside the Sponsored Messaging ad.
		 */
		adUnitClicks?: number;
		/**
		 * The number of appointments booked through Lead Gen campaigns.
		 */
		appointmentsScheduled?: number;
		/**
		 * The estimated number of unique member accounts with at least one impression. Non-demographic pivots only; available when the date range is 92 days or less.
		 */
		approximateMemberReach?: number;
		/**
		 * Average user dwell time in seconds, measured while more than 50% of the ad's pixels remain visible in the viewport.
		 */
		averageDwellTime?: number;
		/**
		 * The average watch time of the event in milliseconds.
		 */
		averageEventWatchTime?: number;
		/**
		 * The average watch time in milliseconds for users who watched the event for more than 15 seconds.
		 */
		averageEventWatchTimeOver15Seconds?: number;
		/**
		 * The average watch time in milliseconds for users who watched the event for more than 2 minutes.
		 */
		averageEventWatchTimeOver2Minutes?: number;
		/**
		 * The average watch time in milliseconds for users who watched the event for more than 30 seconds.
		 */
		averageEventWatchTimeOver30Seconds?: number;
		/**
		 * Average video watch time in milliseconds. May be delayed by up to 48 hours.
		 */
		averageVideoWatchTime?: number;
		/**
		 * The approximate number of unique members reached divided by the approximate total target audience size. Null when the date range exceeds 92 days; requires an ACCOUNT, CAMPAIGN_GROUP or CAMPAIGN pivot.
		 */
		audiencePenetration?: number;
		/**
		 * The number of clicks for each card of a carousel ad. Non-demographic pivots only.
		 */
		cardClicks?: number;
		/**
		 * The number of impressions shown for each card of a carousel ad. Non-demographic pivots only.
		 */
		cardImpressions?: number;
		/**
		 * The count of chargeable clicks.
		 */
		clicks?: number;
		/**
		 * The count of likes of a comment. Sponsored Content only.
		 */
		commentLikes?: number;
		/**
		 * The count of comments. Sponsored Content only.
		 */
		comments?: number;
		/**
		 * The count of clicks to view the company page.
		 */
		companyPageClicks?: number;
		/**
		 * Value of the conversions in the account's local currency, as a decimal string. Non-demographic pivots only.
		 */
		conversionValueInLocalCurrency?: string;
		/**
		 * Cost in the account's local currency, as a decimal string, based on the pivot and time granularity.
		 */
		costInLocalCurrency?: string;
		/**
		 * Cost in USD, as a decimal string, based on the pivot and time granularity.
		 */
		costInUsd?: string;
		/**
		 * The cost per view for an event hosted on LinkedIn.
		 */
		costPerEventView?: number;
		/**
		 * The cost per view for users who watched the event for more than 15 seconds.
		 */
		costPerEventViewOver15Seconds?: number;
		/**
		 * The cost per view for users who watched the event for more than 2 minutes.
		 */
		costPerEventViewOver2Minutes?: number;
		/**
		 * The cost per view for users who watched the event for more than 30 seconds.
		 */
		costPerEventViewOver30Seconds?: number;
		/**
		 * How much money was spent per qualified lead (costInLocalCurrency / qualifiedLeads), as a decimal string.
		 */
		costPerQualifiedLead?: string;
		/**
		 * The number of times users reached 100% of the document's length. Document ads only.
		 */
		documentCompletions?: number;
		/**
		 * The number of times users reached the first quartile of the document's length. Document ads only.
		 */
		documentFirstQuartileCompletions?: number;
		/**
		 * The number of times users reached the second quartile of the document's length. Document ads only.
		 */
		documentMidpointCompletions?: number;
		/**
		 * The number of times users reached the third quartile of the document's length. Document ads only.
		 */
		documentThirdQuartileCompletions?: number;
		/**
		 * The number of times users clicked the download icon of the ad media. Only for ad formats supporting media downloads.
		 */
		downloadClicks?: number;
		/**
		 * The count of valid views for an event hosted on LinkedIn.
		 */
		eventViews?: number;
		/**
		 * The count of valid event views longer than 15 seconds.
		 */
		eventViewsOver15Seconds?: number;
		/**
		 * The count of valid event views longer than 2 minutes.
		 */
		eventViewsOver2Minutes?: number;
		/**
		 * The count of valid event views longer than 30 seconds.
		 */
		eventViewsOver30Seconds?: number;
		/**
		 * The total watch time of the event in milliseconds.
		 */
		eventWatchTime?: number;
		/**
		 * Total number of times users took a desired action after clicking on or seeing your ad.
		 */
		externalWebsiteConversions?: number;
		/**
		 * Total number of times users took a desired action after clicking on your ad.
		 */
		externalWebsitePostClickConversions?: number;
		/**
		 * Total number of times users took a desired action after seeing your ad.
		 */
		externalWebsitePostViewConversions?: number;
		/**
		 * The count of follows. Sponsored Content and Follower ads only.
		 */
		follows?: number;
		/**
		 * Number of times members entered full screen mode on a video ad.
		 */
		fullScreenPlays?: number;
		/**
		 * The number of times members clicked on the headline of conversation ads.
		 */
		headlineClicks?: number;
		/**
		 * The number of times members were shown the headline of conversation ads.
		 */
		headlineImpressions?: number;
		/**
		 * The number of times members were shown the ads.
		 */
		impressions?: number;
		/**
		 * The number of times a member completed a job application after viewing or clicking on an ad, as a decimal string.
		 */
		jobApplications?: string;
		/**
		 * The number of times a member clicked the job's apply button after viewing or clicking on an ad, as a decimal string.
		 */
		jobApplyClicks?: string;
		/**
		 * The count of clicks which take the user to the creative landing page.
		 */
		landingPageClicks?: number;
		/**
		 * The number of times users shared contact info through One Click Lead Gen for Sponsored Messaging ads.
		 */
		leadGenerationMailContactInfoShares?: number;
		/**
		 * The count of Sponsored Messaging ad recipients who clicked to demonstrate interest.
		 */
		leadGenerationMailInterestedClicks?: number;
		/**
		 * The count of likes. Sponsored Content only.
		 */
		likes?: number;
		/**
		 * The count of times users opened the lead form for a One Click Lead Gen campaign.
		 */
		oneClickLeadFormOpens?: number;
		/**
		 * The count of leads generated through One Click Lead Gen.
		 */
		oneClickLeads?: number;
		/**
		 * The count of opens of Sponsored Messaging ads.
		 */
		opens?: number;
		/**
		 * The count of user interactions with the ad unit that don't fit into any other category.
		 */
		otherEngagements?: number;
		/**
		 * The number of times a member completed a job application after clicking on an ad, as a decimal string.
		 */
		postClickJobApplications?: string;
		/**
		 * The number of times a member clicked the job's apply button after clicking on an ad, as a decimal string.
		 */
		postClickJobApplyClicks?: string;
		/**
		 * The number of times a member registered for an event after clicking on an ad, as a decimal string.
		 */
		postClickRegistrations?: string;
		/**
		 * The number of times a member completed a job application after viewing an ad, as a decimal string.
		 */
		postViewJobApplications?: string;
		/**
		 * The number of times a member clicked the job's apply button after viewing an ad, as a decimal string.
		 */
		postViewJobApplyClicks?: string;
		/**
		 * The number of times a member registered for an event after viewing an ad, as a decimal string.
		 */
		postViewRegistrations?: string;
		/**
		 * The count of qualified leads shared by the advertiser.
		 */
		qualifiedLeads?: number;
		/**
		 * The count of positive reactions on Sponsored Content.
		 */
		reactions?: number;
		/**
		 * The number of times a member registered for an event after viewing or clicking on an ad, as a decimal string.
		 */
		registrations?: string;
		/**
		 * The count of sends of Sponsored Messaging ads.
		 */
		sends?: number;
		/**
		 * The count of shares. Sponsored Content only.
		 */
		shares?: number;
		/**
		 * The count of clicks to subscribe to a series, such as a Newsletter.
		 */
		subscriptionClicks?: number;
		/**
		 * Number of leads captured through a talent media campaign.
		 */
		talentLeads?: number;
		/**
		 * The count of clicks on links included in the body of the Sponsored Messaging ad.
		 */
		textUrlClicks?: number;
		/**
		 * The count of all user interactions with the ad unit.
		 */
		totalEngagements?: number;
		/**
		 * The count of leads with a valid work email that doesn't use a free or personal email domain.
		 */
		validWorkEmailLeads?: number;
		/**
		 * The count of video ads that played 97-100% of the video.
		 */
		videoCompletions?: number;
		/**
		 * The count of video ads that played through the first quartile of the video.
		 */
		videoFirstQuartileCompletions?: number;
		/**
		 * The count of video ads that played through the midpoint of the video.
		 */
		videoMidpointCompletions?: number;
		/**
		 * The count of video ads that were started by users.
		 */
		videoStarts?: number;
		/**
		 * The count of video ads that played through the third quartile of the video.
		 */
		videoThirdQuartileCompletions?: number;
		/**
		 * A video ad playing for at least 2 continuous seconds 50% in-view, or a click on the CTA.
		 */
		videoViews?: number;
		/**
		 * The total watch time in milliseconds for a video ad. May be delayed by up to 48 hours.
		 */
		videoWatchTime?: number;
		/**
		 * The number of viral clicks for each card of a carousel ad. Non-demographic pivots only.
		 */
		viralCardClicks?: number;
		/**
		 * The number of viral impressions shown for each card of a carousel ad. Non-demographic pivots only.
		 */
		viralCardImpressions?: number;
		/**
		 * The count of clicks on viral impressions. Sponsored Content only.
		 */
		viralClicks?: number;
		/**
		 * The count of likes on comments from viral impressions. Sponsored Content only.
		 */
		viralCommentLikes?: number;
		/**
		 * The count of comments from viral impressions. Sponsored Content only.
		 */
		viralComments?: number;
		/**
		 * The count of clicks to view the company page from viral impressions. Sponsored Content only.
		 */
		viralCompanyPageClicks?: number;
		/**
		 * The number of times users reached 100% of the document's length on a viral post. Document ads only.
		 */
		viralDocumentCompletions?: number;
		/**
		 * The number of times users reached the first quartile of the document's length on a viral post. Document ads only.
		 */
		viralDocumentFirstQuartileCompletions?: number;
		/**
		 * The number of times users reached the second quartile of the document's length on a viral post. Document ads only.
		 */
		viralDocumentMidpointCompletions?: number;
		/**
		 * The number of times users reached the third quartile of the document's length on a viral post. Document ads only.
		 */
		viralDocumentThirdQuartileCompletions?: number;
		/**
		 * The number of times users clicked the download icon of the media in a viral ad.
		 */
		viralDownloadClicks?: number;
		/**
		 * The count of conversions attributed to your ads driven by a viral event.
		 */
		viralExternalWebsiteConversions?: number;
		/**
		 * The count of post-click conversions attributed to your ads driven by a viral click.
		 */
		viralExternalWebsitePostClickConversions?: number;
		/**
		 * The count of post-view conversions attributed to your ads driven by a viral impression.
		 */
		viralExternalWebsitePostViewConversions?: number;
		/**
		 * The count of follows from viral impressions. Sponsored Content only.
		 */
		viralFollows?: number;
		/**
		 * Number of times members entered full screen mode on a viral video ad.
		 */
		viralFullScreenPlays?: number;
		/**
		 * The count of viral impressions, i.e. impressions resulting from users sharing sponsored content to their own network. Sponsored Content only.
		 */
		viralImpressions?: number;
		/**
		 * The number of times a member completed a job application after viewing or clicking on a viral ad, as a decimal string.
		 */
		viralJobApplications?: string;
		/**
		 * The number of times a member clicked the job's apply button after viewing or clicking on a viral ad, as a decimal string.
		 */
		viralJobApplyClicks?: string;
		/**
		 * The count of clicks on viral impressions that take the user to the creative landing page. Sponsored Content only.
		 */
		viralLandingPageClicks?: number;
		/**
		 * The count of likes from viral impressions. Sponsored Content only.
		 */
		viralLikes?: number;
		/**
		 * The count of times users opened the lead form for viral impressions from a Lead Gen campaign.
		 */
		viralOneClickLeadFormOpens?: number;
		/**
		 * The count of leads generated through One Click Lead Gen from viral impressions.
		 */
		viralOneClickLeads?: number;
		/**
		 * The count of user interactions with viral impressions that don't fit into any other category. Sponsored Content only.
		 */
		viralOtherEngagements?: number;
		/**
		 * The number of times a member completed a job application after clicking on a viral ad, as a decimal string.
		 */
		viralPostClickJobApplications?: string;
		/**
		 * The number of times a member clicked the job's apply button after clicking on a viral ad, as a decimal string.
		 */
		viralPostClickJobApplyClicks?: string;
		/**
		 * The number of times a member registered for an event after clicking on a viral ad, as a decimal string.
		 */
		viralPostClickRegistrations?: string;
		/**
		 * The number of times a member completed a job application after viewing a viral ad, as a decimal string.
		 */
		viralPostViewJobApplications?: string;
		/**
		 * The number of times a member clicked the job's apply button after viewing a viral ad, as a decimal string.
		 */
		viralPostViewJobApplyClicks?: string;
		/**
		 * The number of times a member registered for an event after viewing a viral ad, as a decimal string.
		 */
		viralPostViewRegistrations?: string;
		/**
		 * The count of positive reactions on viral Sponsored Content.
		 */
		viralReactions?: number;
		/**
		 * The number of times a member registered for an event after viewing or clicking on a viral ad, as a decimal string.
		 */
		viralRegistrations?: string;
		/**
		 * The count of shares from viral impressions. Sponsored Content only.
		 */
		viralShares?: number;
		/**
		 * The count of viral clicks to subscribe to a series, such as a Newsletter.
		 */
		viralSubscriptionClicks?: number;
		/**
		 * The count of all user interactions with a viral ad unit. Sponsored Content only.
		 */
		viralTotalEngagements?: number;
		/**
		 * The count of viral video ads that played 97-100% of the video.
		 */
		viralVideoCompletions?: number;
		/**
		 * The count of viral video ads that played through the first quartile of the video.
		 */
		viralVideoFirstQuartileCompletions?: number;
		/**
		 * The count of viral video ads that played through the midpoint of the video.
		 */
		viralVideoMidpointCompletions?: number;
		/**
		 * The count of viral video ads that were started by users.
		 */
		viralVideoStarts?: number;
		/**
		 * The count of viral video ads that played through the third quartile of the video.
		 */
		viralVideoThirdQuartileCompletions?: number;
		/**
		 * A viral video ad playing for at least 2 continuous seconds 50% in-view, or a click on the CTA.
		 */
		viralVideoViews?: number;
	}[];
	/**
	 * Rest.li paging metadata. The `adAnalytics` finder does not support pagination; all matching elements (up to 15,000) are returned in one response.
	 */
	paging?: {
		/**
		 * The index of the first returned element.
		 */
		start?: number;
		/**
		 * The page size reported by the API.
		 */
		count?: number;
		/**
		 * Paging links. Usually empty for this finder.
		 *
		 * Items: A paging link.
		 */
		links?: {
			/**
			 * The link relation, e.g. `next`.
			 */
			rel?: string;
			/**
			 * The relative URL of the linked page.
			 */
			href?: string;
			/**
			 * The media type of the linked page.
			 */
			type?: string;
		}[];
	};
};

/**
 * Get ad analytics
 * Returns ad analytics statistics grouped by up to three pivots.
 */
export async function getAdAnalytics(
	this: EndpointFunctionThis,
	payload: {
		input: GetAdAnalyticsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetAdAnalyticsOutput>> {
	const response = await this.endpointCaller<GetAdAnalyticsOutput>(
		{
			appName: 'linkedin-ads-reports',
			appVersion: 1,
			endpointName: 'getAdAnalytics',
		},
		payload,
	);
	return response;
}
