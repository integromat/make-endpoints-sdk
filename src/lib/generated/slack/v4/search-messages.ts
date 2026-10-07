// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SearchMessagesInput = {
	/**
	 * Search query. Supports Slack's search modifiers, for example `from:@bot in:#general`.
	 */
	query: string;
	/**
	 * How to sort the results.
	 */
	sort?: '' | 'score' | 'timestamp';
	/**
	 * Direction to sort the results in.
	 */
	sort_dir?: '' | 'asc' | 'desc';
	/**
	 * Whether to enable query highlight markers in the returned results.
	 */
	highlight?: boolean;
	/**
	 * Encoded team ID to search within. Required when using an org-wide token.
	 */
	team_id?: string;
	/**
	 * Number of results to return per page, up to 100.
	 */
	count?: number;
	/**
	 * Page number of results to return.
	 */
	page?: number;
	/**
	 * Cursor-based pagination token. Use `*` to start from the first page.
	 */
	cursor?: string;
};

export type SearchMessagesOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The search query that was submitted.
	 */
	query?: string;
	/**
	 * Container for the search results.
	 */
	messages?: {
		/**
		 * Total number of matches found.
		 */
		total?: number;
		/**
		 * Messages matching the search query.
		 *
		 * Items: A single matching message.
		 */
		matches?: {
			/**
			 * Result type, for example `message`, `im`, or `group`.
			 */
			type?: string;
			/**
			 * Plain-text content of the message.
			 */
			text?: string;
			/**
			 * Timestamp ID of the message.
			 */
			ts?: string;
			/**
			 * ID of the user who sent the message.
			 */
			user?: string;
			/**
			 * Display name of the sender.
			 */
			username?: string;
			/**
			 * ID of the team the message belongs to.
			 */
			team?: string;
			/**
			 * URL linking directly to the message.
			 */
			permalink?: string;
			/**
			 * Channel the message was posted in.
			 */
			channel?: {
				/**
				 * ID of the channel.
				 */
				id?: string;
				/**
				 * Name of the channel.
				 */
				name?: string;
			};
		}[];
		/**
		 * Pagination metadata for the current result set.
		 */
		pagination?: {
			/**
			 * Total number of matches across all pages.
			 */
			total_count?: number;
			/**
			 * Current page number.
			 */
			page?: number;
			/**
			 * Number of results per page.
			 */
			per_page?: number;
			/**
			 * Total number of pages.
			 */
			page_count?: number;
			/**
			 * Index of the first result on this page.
			 */
			first?: number;
			/**
			 * Index of the last result on this page.
			 */
			last?: number;
		};
	};
};

/**
 * Search messages
 * Searches for messages matching a query.
 */
export async function searchMessages(
	this: EndpointFunctionThis,
	payload: {
		input: SearchMessagesInput;
		connectionId: number;
	},
): Promise<SearchMessagesOutput> {
	const response = await this.endpointCaller<SearchMessagesOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'searchMessages',
		},
		payload,
	);
	return response.output;
}
