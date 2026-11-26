// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type GetOrganizationShareStatisticsInput = {
	/**
	 * The URN of the organization, `urn:li:organization:{id}`, or of the organization brand, `urn:li:organizationBrand:{id}`.
	 */
	organizationalEntity: string;
	/**
	 * Share URNs to return statistics for. Lifetime statistics only. Cannot be combined with **Time intervals**.
	 *
	 * Items: A share URN, for example `urn:li:share:1000000`.
	 */
	shares?: string[];
	/**
	 * UGC post URNs to return statistics for. Lifetime statistics only. Cannot be combined with **Time intervals**.
	 *
	 * Items: A UGC post URN, for example `urn:li:ugcPost:1000000`.
	 */
	ugcPosts?: string[];
	/**
	 * Restricts the query to a time range. Omit it to retrieve lifetime statistics. When it is provided, **Time range** is required. Only data of the past 12 months is returned.
	 */
	timeIntervals?: {
		/**
		 * The time range of the query.
		 */
		timeRange?: {
			/**
			 * The inclusive start of the range, in milliseconds since epoch. The smallest supported granularity is a day. When it is not set, the query starts from the beginning of time.
			 */
			start?: number;
			/**
			 * The exclusive end of the range, in milliseconds since epoch. The smallest supported granularity is a day. When it is not set, the query runs until the current time.
			 */
			end?: number;
		};
		/**
		 * The granularity of the returned statistics.
		 */
		timeGranularityType?: '' | 'DAY' | 'MONTH';
	};
};

export type GetOrganizationShareStatisticsOutput = {
	/**
	 * The statistics elements.
	 *
	 * Items: The statistics of an organization, a share, a UGC post or a time interval.
	 */
	elements?: {
		/**
		 * The URN of the organization or organization brand the statistics belong to.
		 */
		organizationalEntity?: string;
		/**
		 * The URN of the share. Empty for aggregate statistics.
		 */
		share?: string;
		/**
		 * The URN of the UGC post. Empty for aggregate statistics.
		 */
		ugcPost?: string;
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
		 * The share statistics.
		 */
		totalShareStatistics?: {
			/**
			 * The number of clicks.
			 */
			clickCount?: number;
			/**
			 * The number of comments.
			 */
			commentCount?: number;
			/**
			 * The number of organic clicks, likes, comments and shares over impressions.
			 */
			engagement?: number;
			/**
			 * The number of impressions.
			 */
			impressionCount?: number;
			/**
			 * The number of likes. It can be negative when members unlike a sponsored share they liked.
			 */
			likeCount?: number;
			/**
			 * The number of shares.
			 */
			shareCount?: number;
			/**
			 * The number of unique impressions.
			 */
			uniqueImpressionsCount?: number;
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
 * Get organization share statistics
 * Retrieves organic share statistics of a LinkedIn organization or of specific shares.
 */
export async function getOrganizationShareStatistics(
	this: EndpointFunctionThis,
	payload: {
		input: GetOrganizationShareStatisticsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetOrganizationShareStatisticsOutput>> {
	const response = await this.endpointCaller<GetOrganizationShareStatisticsOutput>(
		{
			appName: 'linkedin',
			appVersion: 2,
			endpointName: 'getOrganizationShareStatistics',
		},
		payload,
	);
	return response;
}
