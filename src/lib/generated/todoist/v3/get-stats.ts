// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetStatsInput = Record<string, never>;

export type GetStatsOutput = {
	/**
	 * The completed tasks for each of the last 7 days.
	 *
	 * Items: The completed tasks of one day.
	 */
	days_items?: {
		/**
		 * The date of the day.
		 */
		date?: string;
		/**
		 * The number of tasks completed in each project on that day.
		 *
		 * Items: The completed tasks of one project.
		 */
		items?: {
			/**
			 * The ID of the project.
			 */
			id?: string;
			/**
			 * The number of tasks completed in the project.
			 */
			completed?: number;
		}[];
		/**
		 * The number of tasks completed on that day.
		 */
		total_completed?: number;
	}[];
	/**
	 * The completed tasks for each of the last 4 weeks.
	 *
	 * Items: The completed tasks of one week.
	 */
	week_items?: {
		/**
		 * The first day of the week.
		 */
		from?: string;
		/**
		 * The last day of the week.
		 */
		to?: string;
		/**
		 * The number of tasks completed in each project in that week.
		 *
		 * Items: The completed tasks of one project.
		 */
		items?: {
			/**
			 * The ID of the project.
			 */
			id?: string;
			/**
			 * The number of tasks completed in the project.
			 */
			completed?: number;
		}[];
		/**
		 * The number of tasks completed in that week.
		 */
		total_completed?: number;
	}[];
	/**
	 * The colors of the projects, used for visualization. Each key is a project ID and its value is the color name.
	 */
	project_colors?: Record<string, JSONValue>;
	/**
	 * The total number of tasks the user has completed.
	 */
	completed_count?: number;
	/**
	 * The Karma score of the user.
	 */
	karma?: number;
	/**
	 * The trend of the Karma score, for example `up`.
	 */
	karma_trend?: string;
	/**
	 * The data points of the Karma graph.
	 *
	 * Items: A data point of the Karma graph.
	 */
	karma_graph_data?: {
		/**
		 * The date of the data point.
		 */
		date?: string;
		/**
		 * The average Karma score on that date.
		 */
		karma_avg?: number;
	}[];
	/**
	 * The change of the Karma score in the last update.
	 */
	karma_last_update?: number;
	/**
	 * The reasons for the latest Karma updates.
	 *
	 * Items: A Karma update.
	 */
	karma_update_reasons?: {
		/**
		 * The date and time of the update.
		 */
		time?: string;
		/**
		 * The Karma score after the update.
		 */
		new_karma?: number;
		/**
		 * The Karma points gained.
		 */
		positive_karma?: number;
		/**
		 * The codes of the reasons for gaining Karma.
		 *
		 * Items: The code of a reason for gaining Karma.
		 */
		positive_karma_reasons?: number[];
		/**
		 * The Karma points lost.
		 */
		negative_karma?: number;
		/**
		 * The codes of the reasons for losing Karma.
		 *
		 * Items: The code of a reason for losing Karma.
		 */
		negative_karma_reasons?: number[];
	}[];
	/**
	 * The goal settings and streaks of the user.
	 */
	goals?: {
		/**
		 * The ID of the user.
		 */
		user?: string;
		/**
		 * The ID of the user.
		 */
		user_id?: string;
		/**
		 * The number of tasks to complete each day.
		 */
		daily_goal?: number;
		/**
		 * The number of tasks to complete each week.
		 */
		weekly_goal?: number;
		/**
		 * The days of the week excluded from the goals. 0 is Sunday and 6 is Saturday.
		 *
		 * Items: A day of the week excluded from the goals.
		 */
		ignore_days?: number[];
		/**
		 * Whether vacation mode is on: `1` if on, `0` if off.
		 */
		vacation_mode?: number;
		/**
		 * Whether Karma is disabled: `1` if disabled, `0` if enabled.
		 */
		karma_disabled?: number;
		/**
		 * The current daily streak of the user.
		 */
		current_daily_streak?: {
			/**
			 * The length of the streak.
			 */
			count?: number;
			/**
			 * The date when the streak started.
			 */
			start?: string;
			/**
			 * The date when the streak ended.
			 */
			end?: string;
		};
		/**
		 * The current weekly streak of the user.
		 */
		current_weekly_streak?: {
			/**
			 * The length of the streak.
			 */
			count?: number;
			/**
			 * The date when the streak started.
			 */
			start?: string;
			/**
			 * The date when the streak ended.
			 */
			end?: string;
		};
		/**
		 * The last daily streak of the user.
		 */
		last_daily_streak?: {
			/**
			 * The length of the streak.
			 */
			count?: number;
			/**
			 * The date when the streak started.
			 */
			start?: string;
			/**
			 * The date when the streak ended.
			 */
			end?: string;
		};
		/**
		 * The last weekly streak of the user.
		 */
		last_weekly_streak?: {
			/**
			 * The length of the streak.
			 */
			count?: number;
			/**
			 * The date when the streak started.
			 */
			start?: string;
			/**
			 * The date when the streak ended.
			 */
			end?: string;
		};
		/**
		 * The max daily streak of the user.
		 */
		max_daily_streak?: {
			/**
			 * The length of the streak.
			 */
			count?: number;
			/**
			 * The date when the streak started.
			 */
			start?: string;
			/**
			 * The date when the streak ended.
			 */
			end?: string;
		};
		/**
		 * The max weekly streak of the user.
		 */
		max_weekly_streak?: {
			/**
			 * The length of the streak.
			 */
			count?: number;
			/**
			 * The date when the streak started.
			 */
			start?: string;
			/**
			 * The date when the streak ended.
			 */
			end?: string;
		};
	};
};

/**
 * Get stats
 * Returns the productivity statistics and Karma of the authenticated user.
 */
export async function getStats(
	this: EndpointFunctionThis,
	payload: {
		input: GetStatsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetStatsOutput> {
	const response = await this.endpointCaller<GetStatsOutput>(
		{
			appName: 'todoist',
			appVersion: 3,
			endpointName: 'getStats',
		},
		payload,
	);
	return response.output;
}
