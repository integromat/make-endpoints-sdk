// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type GetBrandPageStatisticsInput = {
	/**
	 * The URN of the organization brand, `urn:li:organizationBrand:{id}`.
	 */
	brand: string;
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

export type GetBrandPageStatisticsOutput = {
	/**
	 * The statistics elements.
	 *
	 * Items: The page statistics of an organization brand or of a time interval.
	 */
	elements?: {
		/**
		 * The URN of the organization brand the statistics belong to.
		 */
		brand?: string;
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
		pageStatisticsByCountry?: Record<string, JSONValue>[];
		/**
		 * The page statistics segmented by function.
		 *
		 * Items: The page statistics of one function segment.
		 */
		pageStatisticsByFunction?: Record<string, JSONValue>[];
		/**
		 * The page statistics segmented by industry.
		 *
		 * Items: The page statistics of one industry segment.
		 */
		pageStatisticsByIndustry?: Record<string, JSONValue>[];
		/**
		 * The page statistics segmented by region.
		 *
		 * Items: The page statistics of one region segment.
		 */
		pageStatisticsByRegion?: Record<string, JSONValue>[];
		/**
		 * The page statistics segmented by seniority.
		 *
		 * Items: The page statistics of one seniority segment.
		 */
		pageStatisticsBySeniority?: Record<string, JSONValue>[];
		/**
		 * The page statistics segmented by staff count range.
		 *
		 * Items: The page statistics of one staff count range segment.
		 */
		pageStatisticsByStaffCountRange?: Record<string, JSONValue>[];
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
 * Get brand page statistics
 * Retrieves lifetime or time-bound page statistics of a LinkedIn organization brand page.
 */
export async function getBrandPageStatistics(
	this: EndpointFunctionThis,
	payload: {
		input: GetBrandPageStatisticsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetBrandPageStatisticsOutput>> {
	const response = await this.endpointCaller<GetBrandPageStatisticsOutput>(
		{
			appName: 'linkedin',
			appVersion: 2,
			endpointName: 'getBrandPageStatistics',
		},
		payload,
	);
	return response;
}
