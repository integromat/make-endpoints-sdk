// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type ListTablesInput = {
	/**
	 * The ID of the Google Cloud project.
	 */
	projectId: string;
	/**
	 * The ID of the dataset.
	 */
	datasetId: string;
	/**
	 * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
	 */
	maxResults?: number;
	/**
	 * The `nextPageToken` value returned by the previous call, to request the next page of results. Omit it for the first page.
	 */
	pageToken?: string;
};

export type ListTablesOutput = {
	/**
	 * The type of list.
	 */
	kind?: string;
	/**
	 * A hash of this page of results.
	 */
	etag?: string;
	/**
	 * A token to request the next page of results.
	 */
	nextPageToken?: string;
	/**
	 * Tables in the requested dataset.
	 *
	 * Items: A single table.
	 */
	tables?: {
		/**
		 * The resource type.
		 */
		kind?: string;
		/**
		 * Clustering specification for this table, if configured.
		 */
		clustering?: {
			/**
			 * One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are supported. The ordering of the clustering fields should be prioritized from most to least important for filtering purposes. For additional information, see [Introduction to clustered tables](https://cloud.google.com/bigquery/docs/clustered-tables#limitations).
			 *
			 * Items: A single field value.
			 */
			fields?: string[];
		};
		/**
		 * The time when this table was created, in milliseconds since the epoch.
		 */
		creationTime?: string;
		/**
		 * The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
		 */
		expirationTime?: string;
		/**
		 * The user-friendly name for this table.
		 */
		friendlyName?: string;
		/**
		 * An opaque ID of the table.
		 */
		id?: string;
		/**
		 * The labels associated with this table. You can use these to organize and group your tables.
		 */
		labels?: Record<string, JSONValue>;
		/**
		 * The range partitioning for this table.
		 */
		rangePartitioning?: {
			/**
			 * The name of the column to partition the table on. It must be a top-level, INT64 column whose mode is NULLABLE or REQUIRED.
			 */
			field?: string;
			/**
			 * Defines the ranges for range partitioning.
			 */
			range?: {
				/**
				 * The end of range partitioning, exclusive.
				 */
				end?: string;
				/**
				 * The width of each interval.
				 */
				interval?: string;
				/**
				 * The start of range partitioning, inclusive.
				 */
				start?: string;
			};
		};
		/**
		 * If set to true, queries including this table must specify a partition filter. This filter is used for partition elimination.
		 */
		requirePartitionFilter?: boolean;
		/**
		 * A reference uniquely identifying table.
		 */
		tableReference?: {
			/**
			 * The ID of the project containing this table.
			 */
			projectId?: string;
			/**
			 * The ID of the dataset containing this table.
			 */
			datasetId?: string;
			/**
			 * The ID of the table. The ID can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as `sample_table$20190123`.
			 */
			tableId?: string;
		};
		/**
		 * The time-based partitioning for this table.
		 */
		timePartitioning?: {
			/**
			 * The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.
			 */
			type?: string;
			/**
			 * If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
			 */
			field?: string;
			/**
			 * Number of milliseconds for which to keep the storage for a partition.
			 */
			expirationMs?: string;
			/**
			 * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. This field is deprecated; please set the field with the same name on the table itself instead. This field needs a wrapper because we want to output the default value, false, if the user explicitly set it.
			 */
			requirePartitionFilter?: boolean;
		};
		/**
		 * The type of table.
		 */
		type?: string;
		/**
		 * Information about a logical view.
		 */
		view?: {
			/**
			 * Specifies the privacy policy for the view.
			 */
			privacyPolicy?: {
				/**
				 * Policy used for aggregation thresholds.
				 */
				aggregationThresholdPolicy?: {
					/**
					 * The privacy unit column(s) associated with this policy. For now, only one column per data source object (table, view) is allowed as a privacy unit column. Representing as a repeated field in metadata for extensibility to multiple columns in future. Duplicates and Repeated struct fields are not allowed. For nested fields, use dot notation ("outer.inner").
					 *
					 * Items: A single privacy unit column value.
					 */
					privacyUnitColumns?: string[];
					/**
					 * The threshold for the "aggregation threshold" policy.
					 */
					threshold?: string;
				};
				/**
				 * Policy used for differential privacy.
				 */
				differentialPrivacyPolicy?: {
					/**
					 * The total delta budget for all queries against the privacy-protected view. Each subscriber query against this view charges the amount of delta that is pre-defined by the contributor through the privacy policy delta_per_query field. If there is sufficient budget, then the subscriber query attempts to complete. It might still fail due to other reasons, in which case the charge is refunded. If there is insufficient budget the query is rejected. There might be multiple charge attempts if a single query references multiple views. In this case there must be sufficient budget for all charges or the query is rejected and charges are refunded in best effort. The budget does not have a refresh policy and can only be updated via ALTER VIEW or circumvented by creating a new view that can be queried with a fresh budget.
					 */
					deltaBudget?: number;
					/**
					 * The delta budget remaining. If budget is exhausted, no more queries are allowed. Note that the budget for queries that are in progress is deducted before the query executes. If the query fails or is cancelled then the budget is refunded. In this case the amount of budget remaining can increase.
					 */
					deltaBudgetRemaining?: number;
					/**
					 * The delta value that is used per query. Delta represents the probability that any row will fail to be epsilon differentially private. Indicates the risk associated with exposing aggregate rows in the result of a query.
					 */
					deltaPerQuery?: number;
					/**
					 * The total epsilon budget for all queries against the privacy-protected view. Each subscriber query against this view charges the amount of epsilon they request in their query. If there is sufficient budget, then the subscriber query attempts to complete. It might still fail due to other reasons, in which case the charge is refunded. If there is insufficient budget the query is rejected. There might be multiple charge attempts if a single query references multiple views. In this case there must be sufficient budget for all charges or the query is rejected and charges are refunded in best effort. The budget does not have a refresh policy and can only be updated via ALTER VIEW or circumvented by creating a new view that can be queried with a fresh budget.
					 */
					epsilonBudget?: number;
					/**
					 * The epsilon budget remaining. If budget is exhausted, no more queries are allowed. Note that the budget for queries that are in progress is deducted before the query executes. If the query fails or is cancelled then the budget is refunded. In this case the amount of budget remaining can increase.
					 */
					epsilonBudgetRemaining?: number;
					/**
					 * The maximum epsilon value that a query can consume. If the subscriber specifies epsilon as a parameter in a SELECT query, it must be less than or equal to this value. The epsilon parameter controls the amount of noise that is added to the groups — a higher epsilon means less noise.
					 */
					maxEpsilonPerQuery?: number;
					/**
					 * The maximum groups contributed value that is used per query. Represents the maximum number of groups to which each protected entity can contribute. Changing this value does not improve or worsen privacy. The best value for accuracy and utility depends on the query and data.
					 */
					maxGroupsContributed?: string;
					/**
					 * The privacy unit column associated with this policy. Differential privacy policies can only have one privacy unit column per data source object (table, view).
					 */
					privacyUnitColumn?: string;
				};
				/**
				 * Join restriction policy is outside of the one of policies, since this policy can be set along with other policies. This policy gives data providers the ability to enforce joins on the 'join_allowed_columns' when data is queried from a privacy protected view.
				 */
				joinRestrictionPolicy?: {
					/**
					 * The only columns that joins are allowed on. This field is must be specified for join_conditions JOIN_ANY and JOIN_ALL and it cannot be set for JOIN_BLOCKED.
					 *
					 * Items: A single join allowed column value.
					 */
					joinAllowedColumns?: string[];
					/**
					 * Specifies if a join is required or not on queries for the view. Default is JOIN_CONDITION_UNSPECIFIED. Values: `JOIN_ANY` - A join is required on at least one of the specified columns; `JOIN_ALL` - A join is required on all specified columns; `JOIN_NOT_REQUIRED` - A join is not required, but if present it is only permitted on 'join_allowed_columns'; `JOIN_BLOCKED` - Joins are blocked for all queries.
					 */
					joinCondition?: string;
				};
			};
			/**
			 * True if view is defined in legacy SQL dialect, false if in GoogleSQL.
			 */
			useLegacySql?: boolean;
		};
	}[];
	/**
	 * The total number of tables in the dataset.
	 */
	totalItems?: number;
};

/**
 * List tables
 * Lists all tables in the specified dataset.
 */
export async function listTables(
	this: EndpointFunctionThis,
	payload: {
		input: ListTablesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListTablesOutput>> {
	const response = await this.endpointCaller<ListTablesOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'listTables',
		},
		payload,
	);
	return response;
}
