// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetOrganizationPageStatisticsInput = {
	/**
	 * The URN of the organization, `urn:li:organization:{id}`.
	 */
	organization: string;
	/**
	 * Restricts the query to a time range. Omit it to retrieve lifetime statistics. When it is provided, **Time range** is required.
	 */
	timeIntervals?: {
		/**
		 * The time range of the query.
		 */
		timeRange?: {
			/**
			 * The exclusive start of the range, in milliseconds since epoch. When it is not set, the query starts from the beginning of time.
			 */
			start?: number;
			/**
			 * The inclusive end of the range, in milliseconds since epoch. When it is not set, the query runs until the current time.
			 */
			end?: number;
		};
		/**
		 * The granularity of the returned statistics.
		 */
		timeGranularityType?: '' | 'DAY' | 'MONTH';
	};
};

export type GetOrganizationPageStatisticsOutput = {
	/**
	 * The statistics elements.
	 *
	 * Items: The page statistics of an organization or of a time interval.
	 */
	elements?: {
		/**
		 * The URN of the organization the statistics belong to.
		 */
		organization?: string;
		/**
		 * The time range of the element. Present for time-bound statistics.
		 */
		timeRange?: {
			/**
			 * The start of the time range, in milliseconds since epoch.
			 */
			start?: number;
			/**
			 * The end of the time range, in milliseconds since epoch.
			 */
			end?: number;
		};
		/**
		 * The page statistics segmented by country.
		 *
		 * Items: The page statistics of one country segment.
		 */
		pageStatisticsByGeoCountry?: {
			/**
			 * The URN of the country or region, for example `urn:li:geo:103644278`.
			 */
			geo?: string;
			/**
			 * The page statistics of the segment.
			 */
			pageStatistics?: {
				/**
				 * The click statistics of the page.
				 */
				clicks?: {
					/**
					 * The click counts of the custom buttons on desktop.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					desktopCustomButtonClickCounts?: Record<string, JSONValue>[];
					/**
					 * The click counts of the custom buttons on mobile.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					mobileCustomButtonClickCounts?: Record<string, JSONValue>[];
				};
				/**
				 * The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.
				 */
				views?: {
					/**
					 * The about page views statistics.
					 */
					aboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all desktop page views statistics.
					 */
					allDesktopPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all mobile page views statistics.
					 */
					allMobilePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all page views statistics.
					 */
					allPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The careers page views statistics.
					 */
					careersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop about page views statistics.
					 */
					desktopAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop careers page views statistics.
					 */
					desktopCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop insights page views statistics.
					 */
					desktopInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop jobs page views statistics.
					 */
					desktopJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop life at page views statistics.
					 */
					desktopLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop overview page views statistics.
					 */
					desktopOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop people page views statistics.
					 */
					desktopPeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop products page views statistics.
					 */
					desktopProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The insights page views statistics.
					 */
					insightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The jobs page views statistics.
					 */
					jobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The life at page views statistics.
					 */
					lifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile about page views statistics.
					 */
					mobileAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile careers page views statistics.
					 */
					mobileCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile insights page views statistics.
					 */
					mobileInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile jobs page views statistics.
					 */
					mobileJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile life at page views statistics.
					 */
					mobileLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile overview page views statistics.
					 */
					mobileOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile people page views statistics.
					 */
					mobilePeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile products page views statistics.
					 */
					mobileProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The overview page views statistics.
					 */
					overviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The people page views statistics.
					 */
					peoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The products page views statistics.
					 */
					productsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
				};
			};
		}[];
		/**
		 * The page statistics segmented by function.
		 *
		 * Items: The page statistics of one function segment.
		 */
		pageStatisticsByFunction?: {
			/**
			 * The URN of the job function, for example `urn:li:function:1`.
			 */
			function?: string;
			/**
			 * The page statistics of the segment.
			 */
			pageStatistics?: {
				/**
				 * The click statistics of the page.
				 */
				clicks?: {
					/**
					 * The click counts of the custom buttons on desktop.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					desktopCustomButtonClickCounts?: Record<string, JSONValue>[];
					/**
					 * The click counts of the custom buttons on mobile.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					mobileCustomButtonClickCounts?: Record<string, JSONValue>[];
				};
				/**
				 * The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.
				 */
				views?: {
					/**
					 * The about page views statistics.
					 */
					aboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all desktop page views statistics.
					 */
					allDesktopPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all mobile page views statistics.
					 */
					allMobilePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all page views statistics.
					 */
					allPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The careers page views statistics.
					 */
					careersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop about page views statistics.
					 */
					desktopAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop careers page views statistics.
					 */
					desktopCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop insights page views statistics.
					 */
					desktopInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop jobs page views statistics.
					 */
					desktopJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop life at page views statistics.
					 */
					desktopLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop overview page views statistics.
					 */
					desktopOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop people page views statistics.
					 */
					desktopPeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop products page views statistics.
					 */
					desktopProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The insights page views statistics.
					 */
					insightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The jobs page views statistics.
					 */
					jobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The life at page views statistics.
					 */
					lifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile about page views statistics.
					 */
					mobileAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile careers page views statistics.
					 */
					mobileCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile insights page views statistics.
					 */
					mobileInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile jobs page views statistics.
					 */
					mobileJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile life at page views statistics.
					 */
					mobileLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile overview page views statistics.
					 */
					mobileOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile people page views statistics.
					 */
					mobilePeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile products page views statistics.
					 */
					mobileProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The overview page views statistics.
					 */
					overviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The people page views statistics.
					 */
					peoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The products page views statistics.
					 */
					productsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
				};
			};
		}[];
		/**
		 * The page statistics segmented by industry.
		 *
		 * Items: The page statistics of one industry segment.
		 */
		pageStatisticsByIndustryV2?: {
			/**
			 * The URN of the industry, for example `urn:li:industry:1`.
			 */
			industryV2?: string;
			/**
			 * The page statistics of the segment.
			 */
			pageStatistics?: {
				/**
				 * The click statistics of the page.
				 */
				clicks?: {
					/**
					 * The click counts of the custom buttons on desktop.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					desktopCustomButtonClickCounts?: Record<string, JSONValue>[];
					/**
					 * The click counts of the custom buttons on mobile.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					mobileCustomButtonClickCounts?: Record<string, JSONValue>[];
				};
				/**
				 * The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.
				 */
				views?: {
					/**
					 * The about page views statistics.
					 */
					aboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all desktop page views statistics.
					 */
					allDesktopPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all mobile page views statistics.
					 */
					allMobilePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all page views statistics.
					 */
					allPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The careers page views statistics.
					 */
					careersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop about page views statistics.
					 */
					desktopAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop careers page views statistics.
					 */
					desktopCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop insights page views statistics.
					 */
					desktopInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop jobs page views statistics.
					 */
					desktopJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop life at page views statistics.
					 */
					desktopLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop overview page views statistics.
					 */
					desktopOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop people page views statistics.
					 */
					desktopPeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop products page views statistics.
					 */
					desktopProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The insights page views statistics.
					 */
					insightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The jobs page views statistics.
					 */
					jobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The life at page views statistics.
					 */
					lifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile about page views statistics.
					 */
					mobileAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile careers page views statistics.
					 */
					mobileCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile insights page views statistics.
					 */
					mobileInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile jobs page views statistics.
					 */
					mobileJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile life at page views statistics.
					 */
					mobileLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile overview page views statistics.
					 */
					mobileOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile people page views statistics.
					 */
					mobilePeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile products page views statistics.
					 */
					mobileProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The overview page views statistics.
					 */
					overviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The people page views statistics.
					 */
					peoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The products page views statistics.
					 */
					productsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
				};
			};
		}[];
		/**
		 * The page statistics segmented by market area.
		 *
		 * Items: The page statistics of one market area segment.
		 */
		pageStatisticsByGeo?: {
			/**
			 * The URN of the market area, for example `urn:li:geo:7`.
			 */
			geo?: string;
			/**
			 * The page statistics of the segment.
			 */
			pageStatistics?: {
				/**
				 * The click statistics of the page.
				 */
				clicks?: {
					/**
					 * The click counts of the custom buttons on desktop.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					desktopCustomButtonClickCounts?: Record<string, JSONValue>[];
					/**
					 * The click counts of the custom buttons on mobile.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					mobileCustomButtonClickCounts?: Record<string, JSONValue>[];
				};
				/**
				 * The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.
				 */
				views?: {
					/**
					 * The about page views statistics.
					 */
					aboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all desktop page views statistics.
					 */
					allDesktopPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all mobile page views statistics.
					 */
					allMobilePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all page views statistics.
					 */
					allPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The careers page views statistics.
					 */
					careersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop about page views statistics.
					 */
					desktopAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop careers page views statistics.
					 */
					desktopCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop insights page views statistics.
					 */
					desktopInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop jobs page views statistics.
					 */
					desktopJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop life at page views statistics.
					 */
					desktopLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop overview page views statistics.
					 */
					desktopOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop people page views statistics.
					 */
					desktopPeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop products page views statistics.
					 */
					desktopProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The insights page views statistics.
					 */
					insightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The jobs page views statistics.
					 */
					jobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The life at page views statistics.
					 */
					lifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile about page views statistics.
					 */
					mobileAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile careers page views statistics.
					 */
					mobileCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile insights page views statistics.
					 */
					mobileInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile jobs page views statistics.
					 */
					mobileJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile life at page views statistics.
					 */
					mobileLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile overview page views statistics.
					 */
					mobileOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile people page views statistics.
					 */
					mobilePeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile products page views statistics.
					 */
					mobileProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The overview page views statistics.
					 */
					overviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The people page views statistics.
					 */
					peoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The products page views statistics.
					 */
					productsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
				};
			};
		}[];
		/**
		 * The page statistics segmented by seniority.
		 *
		 * Items: The page statistics of one seniority segment.
		 */
		pageStatisticsBySeniority?: {
			/**
			 * The URN of the seniority, for example `urn:li:seniority:10`.
			 */
			seniority?: string;
			/**
			 * The page statistics of the segment.
			 */
			pageStatistics?: {
				/**
				 * The click statistics of the page.
				 */
				clicks?: {
					/**
					 * The click counts of the custom buttons on desktop.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					desktopCustomButtonClickCounts?: Record<string, JSONValue>[];
					/**
					 * The click counts of the custom buttons on mobile.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					mobileCustomButtonClickCounts?: Record<string, JSONValue>[];
				};
				/**
				 * The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.
				 */
				views?: {
					/**
					 * The about page views statistics.
					 */
					aboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all desktop page views statistics.
					 */
					allDesktopPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all mobile page views statistics.
					 */
					allMobilePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all page views statistics.
					 */
					allPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The careers page views statistics.
					 */
					careersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop about page views statistics.
					 */
					desktopAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop careers page views statistics.
					 */
					desktopCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop insights page views statistics.
					 */
					desktopInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop jobs page views statistics.
					 */
					desktopJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop life at page views statistics.
					 */
					desktopLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop overview page views statistics.
					 */
					desktopOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop people page views statistics.
					 */
					desktopPeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop products page views statistics.
					 */
					desktopProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The insights page views statistics.
					 */
					insightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The jobs page views statistics.
					 */
					jobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The life at page views statistics.
					 */
					lifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile about page views statistics.
					 */
					mobileAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile careers page views statistics.
					 */
					mobileCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile insights page views statistics.
					 */
					mobileInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile jobs page views statistics.
					 */
					mobileJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile life at page views statistics.
					 */
					mobileLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile overview page views statistics.
					 */
					mobileOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile people page views statistics.
					 */
					mobilePeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile products page views statistics.
					 */
					mobileProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The overview page views statistics.
					 */
					overviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The people page views statistics.
					 */
					peoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The products page views statistics.
					 */
					productsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
				};
			};
		}[];
		/**
		 * The page statistics segmented by staff count range.
		 *
		 * Items: The page statistics of one staff count range segment.
		 */
		pageStatisticsByStaffCountRange?: {
			/**
			 * The staff count range, for example `SIZE_10001_OR_MORE`.
			 */
			staffCountRange?: string;
			/**
			 * The page statistics of the segment.
			 */
			pageStatistics?: {
				/**
				 * The click statistics of the page.
				 */
				clicks?: {
					/**
					 * The click counts of the custom buttons on desktop.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					desktopCustomButtonClickCounts?: Record<string, JSONValue>[];
					/**
					 * The click counts of the custom buttons on mobile.
					 *
					 * Items: The click count entry of a custom button as returned by LinkedIn.
					 */
					mobileCustomButtonClickCounts?: Record<string, JSONValue>[];
				};
				/**
				 * The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.
				 */
				views?: {
					/**
					 * The about page views statistics.
					 */
					aboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all desktop page views statistics.
					 */
					allDesktopPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all mobile page views statistics.
					 */
					allMobilePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The all page views statistics.
					 */
					allPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The careers page views statistics.
					 */
					careersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop about page views statistics.
					 */
					desktopAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop careers page views statistics.
					 */
					desktopCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop insights page views statistics.
					 */
					desktopInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop jobs page views statistics.
					 */
					desktopJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop life at page views statistics.
					 */
					desktopLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop overview page views statistics.
					 */
					desktopOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop people page views statistics.
					 */
					desktopPeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The desktop products page views statistics.
					 */
					desktopProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The insights page views statistics.
					 */
					insightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The jobs page views statistics.
					 */
					jobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The life at page views statistics.
					 */
					lifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile about page views statistics.
					 */
					mobileAboutPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile careers page views statistics.
					 */
					mobileCareersPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile insights page views statistics.
					 */
					mobileInsightsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile jobs page views statistics.
					 */
					mobileJobsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile life at page views statistics.
					 */
					mobileLifeAtPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile overview page views statistics.
					 */
					mobileOverviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile people page views statistics.
					 */
					mobilePeoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The mobile products page views statistics.
					 */
					mobileProductsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The overview page views statistics.
					 */
					overviewPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The people page views statistics.
					 */
					peoplePageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
					/**
					 * The products page views statistics.
					 */
					productsPageViews?: {
						/**
						 * The number of page views.
						 */
						pageViews?: number;
						/**
						 * The number of unique page views.
						 */
						uniquePageViews?: number;
					};
				};
			};
		}[];
		/**
		 * The page statistics segmented by targeted content. LinkedIn returns an empty array when the page has no targeted content.
		 *
		 * Items: The page statistics of one targeted content segment as returned by LinkedIn.
		 */
		pageStatisticsByTargetedContent?: Record<string, JSONValue>[];
		/**
		 * The total page statistics.
		 */
		totalPageStatistics?: {
			/**
			 * The click statistics of the page.
			 */
			clicks?: {
				/**
				 * The click counts of the custom buttons on desktop.
				 *
				 * Items: The click count entry of a custom button as returned by LinkedIn.
				 */
				desktopCustomButtonClickCounts?: Record<string, JSONValue>[];
				/**
				 * The click counts of the custom buttons on mobile.
				 *
				 * Items: The click count entry of a custom button as returned by LinkedIn.
				 */
				mobileCustomButtonClickCounts?: Record<string, JSONValue>[];
			};
			/**
			 * The view statistics of the page. The all and overview views include comprehensive mobile and desktop traffic.
			 */
			views?: {
				/**
				 * The about page views statistics.
				 */
				aboutPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The all desktop page views statistics.
				 */
				allDesktopPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The all mobile page views statistics.
				 */
				allMobilePageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The all page views statistics.
				 */
				allPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The careers page views statistics.
				 */
				careersPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The desktop about page views statistics.
				 */
				desktopAboutPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The desktop careers page views statistics.
				 */
				desktopCareersPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The desktop insights page views statistics.
				 */
				desktopInsightsPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The desktop jobs page views statistics.
				 */
				desktopJobsPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The desktop life at page views statistics.
				 */
				desktopLifeAtPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The desktop overview page views statistics.
				 */
				desktopOverviewPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The desktop people page views statistics.
				 */
				desktopPeoplePageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The desktop products page views statistics.
				 */
				desktopProductsPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The insights page views statistics.
				 */
				insightsPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The jobs page views statistics.
				 */
				jobsPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The life at page views statistics.
				 */
				lifeAtPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The mobile about page views statistics.
				 */
				mobileAboutPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The mobile careers page views statistics.
				 */
				mobileCareersPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The mobile insights page views statistics.
				 */
				mobileInsightsPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The mobile jobs page views statistics.
				 */
				mobileJobsPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The mobile life at page views statistics.
				 */
				mobileLifeAtPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The mobile overview page views statistics.
				 */
				mobileOverviewPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The mobile people page views statistics.
				 */
				mobilePeoplePageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The mobile products page views statistics.
				 */
				mobileProductsPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The overview page views statistics.
				 */
				overviewPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The people page views statistics.
				 */
				peoplePageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
				/**
				 * The products page views statistics.
				 */
				productsPageViews?: {
					/**
					 * The number of page views.
					 */
					pageViews?: number;
					/**
					 * The number of unique page views.
					 */
					uniquePageViews?: number;
				};
			};
		};
	}[];
	/**
	 * Pagination information of the response.
	 */
	paging?: {
		/**
		 * The number of items requested per page.
		 */
		count?: number;
		/**
		 * The index of the first item in this page.
		 */
		start?: number;
		/**
		 * The total number of items, when LinkedIn returns it.
		 */
		total?: number;
		/**
		 * Links to adjacent pages. Use the `next` link information to request the following page.
		 *
		 * Items: A link to an adjacent page.
		 */
		links?: {
			/**
			 * The media type of the linked resource.
			 */
			type?: string;
			/**
			 * The relation of the link to the current page, for example `next` or `prev`.
			 */
			rel?: string;
			/**
			 * The relative URL of the linked page.
			 */
			href?: string;
		}[];
	};
};

/**
 * Get organization page statistics
 * Retrieves lifetime or time-bound page statistics of a LinkedIn organization.
 */
export async function getOrganizationPageStatistics(
	this: EndpointFunctionThis,
	payload: {
		input: GetOrganizationPageStatisticsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetOrganizationPageStatisticsOutput> {
	const response = await this.endpointCaller<GetOrganizationPageStatisticsOutput>(
		{
			appName: 'linkedin',
			appVersion: 2,
			endpointName: 'getOrganizationPageStatistics',
		},
		payload,
	);
	return response.output;
}
