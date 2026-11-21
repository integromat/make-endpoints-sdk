// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetOrganizationFollowerStatisticsInput = {
	/**
	 * The URN of the organization, `urn:li:organization:{id}`.
	 */
	organizationalEntity: string;
	/**
	 * Restricts the query to a time range. Omit it to retrieve lifetime statistics. When it is provided, **Time range** is required. Time-bound results contain follower gains and no demographic segments. Data is available from 12 months before the request date until 2 days before it.
	 */
	timeIntervals?: {
		/**
		 * The time range of the query.
		 */
		timeRange?: {
			/**
			 * The inclusive start of the range, in milliseconds since epoch. Required when **Time intervals** is provided. A value earlier than the data retention limit is moved to it.
			 */
			start?: number;
			/**
			 * The exclusive end of the range, in milliseconds since epoch. When it is not set, the query runs until the current time.
			 */
			end?: number;
		};
		/**
		 * The granularity of the returned statistics.
		 */
		timeGranularityType?: '' | 'DAY' | 'WEEK' | 'MONTH';
	};
};

export type GetOrganizationFollowerStatisticsOutput = {
	/**
	 * The statistics elements.
	 *
	 * Items: The follower statistics of an organization or of a time interval.
	 */
	elements?: {
		/**
		 * The URN of the organization the statistics belong to.
		 */
		organizationalEntity?: string;
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
		 * The follower gains in the time range. Present for time-bound statistics.
		 */
		followerGains?: {
			/**
			 * The number of organic followers gained.
			 */
			organicFollowerGain?: number;
			/**
			 * The number of paid followers gained.
			 */
			paidFollowerGain?: number;
		};
		/**
		 * The follower counts segmented by association type. Only the top 100 results are returned.
		 *
		 * Items: The follower counts of one segment.
		 */
		followerCountsByAssociationType?: {
			/**
			 * The association type of the followers, for example `EMPLOYEE`.
			 */
			associationType?: string;
			/**
			 * The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.
			 */
			followerCounts?: {
				/**
				 * The number of organic followers.
				 */
				organicFollowerCount?: number;
				/**
				 * The number of paid followers. Do not use it for professional demographic statistics.
				 */
				paidFollowerCount?: number;
			};
		}[];
		/**
		 * The follower counts segmented by country. Only the top 100 results are returned.
		 *
		 * Items: The follower counts of one segment.
		 */
		followerCountsByGeoCountry?: {
			/**
			 * The URN of the country or region, for example `urn:li:geo:102713980`.
			 */
			geo?: string;
			/**
			 * The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.
			 */
			followerCounts?: {
				/**
				 * The number of organic followers.
				 */
				organicFollowerCount?: number;
				/**
				 * The number of paid followers. Do not use it for professional demographic statistics.
				 */
				paidFollowerCount?: number;
			};
		}[];
		/**
		 * The follower counts segmented by function. Only the top 100 results are returned.
		 *
		 * Items: The follower counts of one segment.
		 */
		followerCountsByFunction?: {
			/**
			 * The URN of the job function, for example `urn:li:function:22`.
			 */
			function?: string;
			/**
			 * The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.
			 */
			followerCounts?: {
				/**
				 * The number of organic followers.
				 */
				organicFollowerCount?: number;
				/**
				 * The number of paid followers. Do not use it for professional demographic statistics.
				 */
				paidFollowerCount?: number;
			};
		}[];
		/**
		 * The follower counts segmented by industry. Only the top 100 results are returned.
		 *
		 * Items: The follower counts of one segment.
		 */
		followerCountsByIndustry?: {
			/**
			 * The URN of the industry, for example `urn:li:industry:96`.
			 */
			industry?: string;
			/**
			 * The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.
			 */
			followerCounts?: {
				/**
				 * The number of organic followers.
				 */
				organicFollowerCount?: number;
				/**
				 * The number of paid followers. Do not use it for professional demographic statistics.
				 */
				paidFollowerCount?: number;
			};
		}[];
		/**
		 * The follower counts segmented by market area. Only the top 100 results are returned.
		 *
		 * Items: The follower counts of one segment.
		 */
		followerCountsByGeo?: {
			/**
			 * The URN of the market area, for example `urn:li:geo:90009626`.
			 */
			geo?: string;
			/**
			 * The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.
			 */
			followerCounts?: {
				/**
				 * The number of organic followers.
				 */
				organicFollowerCount?: number;
				/**
				 * The number of paid followers. Do not use it for professional demographic statistics.
				 */
				paidFollowerCount?: number;
			};
		}[];
		/**
		 * The follower counts segmented by seniority. Only the top 100 results are returned.
		 *
		 * Items: The follower counts of one segment.
		 */
		followerCountsBySeniority?: {
			/**
			 * The URN of the seniority, for example `urn:li:seniority:2`.
			 */
			seniority?: string;
			/**
			 * The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.
			 */
			followerCounts?: {
				/**
				 * The number of organic followers.
				 */
				organicFollowerCount?: number;
				/**
				 * The number of paid followers. Do not use it for professional demographic statistics.
				 */
				paidFollowerCount?: number;
			};
		}[];
		/**
		 * The follower counts segmented by staff count range. Only the top 100 results are returned.
		 *
		 * Items: The follower counts of one segment.
		 */
		followerCountsByStaffCountRange?: {
			/**
			 * The staff count range of the current organizations of the followers, for example `SIZE_2_TO_10`.
			 */
			staffCountRange?: string;
			/**
			 * The follower counts of the segment. Professional demographic results are rolled up into **Organic follower count**.
			 */
			followerCounts?: {
				/**
				 * The number of organic followers.
				 */
				organicFollowerCount?: number;
				/**
				 * The number of paid followers. Do not use it for professional demographic statistics.
				 */
				paidFollowerCount?: number;
			};
		}[];
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
 * Get organization follower statistics
 * Retrieves lifetime or time-bound follower statistics of a LinkedIn organization.
 */
export async function getOrganizationFollowerStatistics(
	this: EndpointFunctionThis,
	payload: {
		input: GetOrganizationFollowerStatisticsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetOrganizationFollowerStatisticsOutput> {
	const response = await this.endpointCaller<GetOrganizationFollowerStatisticsOutput>(
		{
			appName: 'linkedin',
			appVersion: 2,
			endpointName: 'getOrganizationFollowerStatistics',
		},
		payload,
	);
	return response.output;
}
