// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetQueryResultsInput = {
	/**
	 * The ID of the Google Cloud project.
	 */
	projectId: string;
	/**
	 * The ID of the job.
	 */
	jobId: string;
	/**
	 * The geographic location of the job. You must specify the location to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
	 */
	location?: string;
	/**
	 * Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.
	 */
	timeoutMs?: number;
	/**
	 * Output timestamp as usec int64. Default is false. Sent as the `formatOptions.useInt64Timestamp` query parameter.
	 */
	useInt64Timestamp?: boolean;
	/**
	 * The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the `useInt64Timestamp` option. The two options are mutually exclusive: sending both is rejected by the API. Values: `FLOAT64` - Timestamp is output as float64 seconds since Unix epoch; `INT64` - Timestamp is output as int64 microseconds since Unix epoch; `ISO8601_STRING` - Timestamp is output as ISO 8601 String ("YYYY-MM-DDTHH:MM:SS.FFFFFFFFFFFFZ"). Sent as the `formatOptions.timestampOutputFormat` query parameter.
	 */
	timestampOutputFormat?: '' | 'FLOAT64' | 'INT64' | 'ISO8601_STRING';
	/**
	 * Zero-based index of the starting row.
	 */
	startIndex?: number;
	/**
	 * Maximum number of results to read.
	 */
	maxResults?: number;
	/**
	 * The `pageToken` value returned by the previous call, to request the next page of results. Omit it for the first page.
	 */
	pageToken?: string;
};

export type GetQueryResultsOutput = {
	/**
	 * The resource type of the response.
	 */
	kind?: string;
	/**
	 * A hash of this response.
	 */
	etag?: string;
	/**
	 * Reference to the BigQuery Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
	 */
	jobReference?: {
		/**
		 * The ID of the project containing this job.
		 */
		projectId?: string;
		/**
		 * The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
		 */
		jobId?: string;
		/**
		 * The geographic location of the job. The default value is US. For more information about BigQuery locations, see [BigQuery locations](https://cloud.google.com/bigquery/docs/locations).
		 */
		location?: string;
	};
	/**
	 * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
	 */
	jobComplete?: boolean;
	/**
	 * The schema of the results. Present only when the query completes successfully.
	 */
	schema?: {
		/**
		 * Describes the fields in a table.
		 *
		 * Items: A field in TableSchema.
		 */
		fields?: {
			/**
			 * The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 300 characters.
			 */
			name?: string;
			/**
			 * The field data type. Possible values include: * STRING * BYTES * INTEGER (or INT64) * FLOAT (or FLOAT64) * BOOLEAN (or BOOL) * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY * NUMERIC * BIGNUMERIC * JSON * RECORD (or STRUCT) * RANGE Use of RECORD/STRUCT indicates that the field contains a nested schema.
			 */
			type?: string;
			/**
			 * The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
			 */
			mode?: string;
			/**
			 * The field description. The maximum length is 1,024 characters.
			 */
			description?: string;
			/**
			 * Describes the nested schema fields if the type property is set to RECORD.
			 *
			 * Items: A field in TableSchema.
			 */
			fields?: {
				/**
				 * The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 300 characters.
				 */
				name?: string;
				/**
				 * The field data type. Possible values include: * STRING * BYTES * INTEGER (or INT64) * FLOAT (or FLOAT64) * BOOLEAN (or BOOL) * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY * NUMERIC * BIGNUMERIC * JSON * RECORD (or STRUCT) * RANGE Use of RECORD/STRUCT indicates that the field contains a nested schema.
				 */
				type?: string;
				/**
				 * The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
				 */
				mode?: string;
				/**
				 * The field description. The maximum length is 1,024 characters.
				 */
				description?: string;
				/**
				 * Describes the nested schema fields if the type property is set to RECORD.
				 *
				 * Items: A field as a JSON object (same shape as Table field schema).
				 */
				fields?: Record<string, JSONValue>[];
				/**
				 * Maximum length of values of this field for STRINGS or BYTES. If max_length is not specified, no maximum length constraint is imposed on this field. If type = "STRING", then max_length represents the maximum UTF-8 length of strings in this field. If type = "BYTES", then max_length represents the maximum number of bytes in this field. It is invalid to set this field if type ≠ "STRING" and ≠ "BYTES".
				 */
				maxLength?: string;
				/**
				 * Precision (maximum number of total digits in base 10) and scale (maximum number of digits in the fractional part in base 10) constraints for values of this field for NUMERIC or BIGNUMERIC. It is invalid to set precision or scale if type ≠ "NUMERIC" and ≠ "BIGNUMERIC". If precision and scale are not specified, no value range constraint is imposed on this field insofar as values are permitted by the type. Values of this NUMERIC or BIGNUMERIC field must be in this range when: * Precision (P) and scale (S) are specified: [-10P-S + 10-S, 10P-S - 10-S] * Precision (P) is specified but not scale (and thus scale is interpreted to be equal to zero): [-10P + 1, 10P - 1]. Acceptable values for precision and scale if both are specified: * If type = "NUMERIC": 1 ≤ precision - scale ≤ 29 and 0 ≤ scale ≤ 9. * If type = "BIGNUMERIC": 1 ≤ precision - scale ≤ 38 and 0 ≤ scale ≤ 38.
				 */
				precision?: string;
				/**
				 * See documentation for precision.
				 */
				scale?: string;
				/**
				 * A SQL expression to specify the [default value](https://cloud.google.com/bigquery/docs/default-values) for this field.
				 */
				defaultValueExpression?: string;
				/**
				 * Field collation can be set only when the type of field is STRING. Supported values: `und:ci` (undetermined locale, case-insensitive) or empty for the default case-sensitive behaviour.
				 */
				collation?: string;
				/**
				 * Specifies the rounding mode to be used when storing values of NUMERIC and BIGNUMERIC type. Values: `ROUND_HALF_AWAY_FROM_ZERO` - ROUND_HALF_AWAY_FROM_ZERO rounds half values away from zero when applying precision and scale upon writing of NUMERIC and BIGNUMERIC values. For Scale: 0 1.1, 1.2, 1.3, 1.4 => 1 1.5, 1.6, 1.7, 1.8, 1.9 => 2; `ROUND_HALF_EVEN` - ROUND_HALF_EVEN rounds half values to the nearest even value when applying precision and scale upon writing of NUMERIC and BIGNUMERIC values. For Scale: 0 1.1, 1.2, 1.3, 1.4 => 1 1.5 => 2 1.6, 1.7, 1.8, 1.9 => 2 2.5 => 2.
				 */
				roundingMode?: string;
				/**
				 * Deprecated.
				 */
				categories?: {
					/**
					 * Deprecated.
					 *
					 * Items: A single name value.
					 */
					names?: string[];
				};
				/**
				 * Specifies the data governance tags on this field. This field works with other column-level security fields as follows: * **Precedence**: If a data governance tag is attached to a column, it takes precedence over the policy tag attached to the column. However, if a data policy is attached to a column, it takes precedence over the data governance tag. * **Patching behavior**: Describes how this field behaves during a `Table.patch` schema update: * **Unset**: If the `data_governance_tags_info` field is omitted from the update request, the existing tags on the column are preserved. * **Empty Field**: To clear data governance tags from a column, send the `data_governance_tags_info` field as an empty object. This removes all tags from the column. * **Updating tags**: To replace an existing tag, send the field with the new tag.
				 */
				dataGovernanceTagsInfo?: {
					/**
					 * The data governance tags added to this field are used for field-level access control. Only one data governance tag is currently supported on a field. Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "parent-id/pii" where parent-id is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "sensitive". See [Tag definitions](https://cloud.google.com/iam/docs/tags-access-control#definitions) for more details. For example: "parent-id/pii": "sensitive", "myProject/cost_center": "sales".
					 */
					dataGovernanceTags?: Record<string, JSONValue>;
				};
				/**
				 * Data policies attached to this field, used for field-level access control.
				 *
				 * Items: Data policy option. For more information, see [Mask data by applying data policies to a column](https://docs.cloud.google.com/bigquery/docs/column-data-masking#data-policies-on-column).
				 */
				dataPolicies?: {
					/**
					 * Data policy resource name in the form of projects/project_id/locations/location_id/dataPolicies/data_policy_id.
					 */
					name?: string;
				}[];
				/**
				 * Specifies data policies attached to this field, used for field-level access control. When set, this will be the source of truth for data policy information.
				 */
				dataPolicyList?: {
					/**
					 * Contains a list of data policy options. At most 9 data policies are allowed per field.
					 *
					 * Items: Data policy option. For more information, see [Mask data by applying data policies to a column](https://docs.cloud.google.com/bigquery/docs/column-data-masking#data-policies-on-column).
					 */
					dataPolicies?: {
						/**
						 * Data policy resource name in the form of projects/project_id/locations/location_id/dataPolicies/data_policy_id.
						 */
						name?: string;
					}[];
				};
				/**
				 * Definition of the foreign data type. Only valid for top-level schema fields (not nested fields). If the type is FOREIGN, this field is required.
				 */
				foreignTypeDefinition?: string;
				/**
				 * Definition of how values are generated for the field. Only valid for top-level schema fields (not nested fields).
				 */
				generatedColumn?: {
					/**
					 * Definition of the expression used to generate the field.
					 */
					generatedExpressionInfo?: {
						/**
						 * Whether the column generation is done asynchronously.
						 */
						asynchronous?: boolean;
						/**
						 * The generation expression (e.g. AI.EMBED(...)) used to generate the field.
						 */
						generationExpression?: string;
						/**
						 * Whether the generated column is stored in the table.
						 */
						stored?: boolean;
					};
					/**
					 * Dictates when system generated values are used to populate the field. Values: `GENERATED_ALWAYS` - Field can only have system generated values. Users cannot manually insert values into the field; `GENERATED_BY_DEFAULT` - Use system generated values only if the user does not explicitly provide a value.
					 */
					generatedMode?: string;
				};
				/**
				 * The policy tags attached to this field, used for field-level access control. If not set, defaults to empty policy_tags.
				 */
				policyTags?: {
					/**
					 * A list of policy tag resource names. For example, "projects/1/locations/eu/taxonomies/2/policyTags/3". At most 1 policy tag is currently allowed.
					 *
					 * Items: A single name value.
					 */
					names?: string[];
				};
				/**
				 * Represents the type of a field element.
				 */
				rangeElementType?: {
					/**
					 * The type of a field element. For more information, see TableFieldSchema.type.
					 */
					type?: string;
				};
				/**
				 * Precision (maximum number of total digits in base 10) for seconds of TIMESTAMP type. Possible values include: * 6 (Default, for TIMESTAMP type with microsecond precision) * 12 (For TIMESTAMP type with picosecond precision).
				 */
				timestampPrecision?: string;
			}[];
			/**
			 * Maximum length of values of this field for STRINGS or BYTES. If max_length is not specified, no maximum length constraint is imposed on this field. If type = "STRING", then max_length represents the maximum UTF-8 length of strings in this field. If type = "BYTES", then max_length represents the maximum number of bytes in this field. It is invalid to set this field if type ≠ "STRING" and ≠ "BYTES".
			 */
			maxLength?: string;
			/**
			 * Precision (maximum number of total digits in base 10) and scale (maximum number of digits in the fractional part in base 10) constraints for values of this field for NUMERIC or BIGNUMERIC. It is invalid to set precision or scale if type ≠ "NUMERIC" and ≠ "BIGNUMERIC". If precision and scale are not specified, no value range constraint is imposed on this field insofar as values are permitted by the type. Values of this NUMERIC or BIGNUMERIC field must be in this range when: * Precision (P) and scale (S) are specified: [-10P-S + 10-S, 10P-S - 10-S] * Precision (P) is specified but not scale (and thus scale is interpreted to be equal to zero): [-10P + 1, 10P - 1]. Acceptable values for precision and scale if both are specified: * If type = "NUMERIC": 1 ≤ precision - scale ≤ 29 and 0 ≤ scale ≤ 9. * If type = "BIGNUMERIC": 1 ≤ precision - scale ≤ 38 and 0 ≤ scale ≤ 38.
			 */
			precision?: string;
			/**
			 * See documentation for precision.
			 */
			scale?: string;
			/**
			 * A SQL expression to specify the [default value](https://cloud.google.com/bigquery/docs/default-values) for this field.
			 */
			defaultValueExpression?: string;
			/**
			 * Field collation can be set only when the type of field is STRING. Supported values: `und:ci` (undetermined locale, case-insensitive) or empty for the default case-sensitive behaviour.
			 */
			collation?: string;
			/**
			 * Specifies the rounding mode to be used when storing values of NUMERIC and BIGNUMERIC type. Values: `ROUND_HALF_AWAY_FROM_ZERO` - ROUND_HALF_AWAY_FROM_ZERO rounds half values away from zero when applying precision and scale upon writing of NUMERIC and BIGNUMERIC values. For Scale: 0 1.1, 1.2, 1.3, 1.4 => 1 1.5, 1.6, 1.7, 1.8, 1.9 => 2; `ROUND_HALF_EVEN` - ROUND_HALF_EVEN rounds half values to the nearest even value when applying precision and scale upon writing of NUMERIC and BIGNUMERIC values. For Scale: 0 1.1, 1.2, 1.3, 1.4 => 1 1.5 => 2 1.6, 1.7, 1.8, 1.9 => 2 2.5 => 2.
			 */
			roundingMode?: string;
			/**
			 * Deprecated.
			 */
			categories?: {
				/**
				 * Deprecated.
				 *
				 * Items: A single name value.
				 */
				names?: string[];
			};
			/**
			 * Specifies the data governance tags on this field. This field works with other column-level security fields as follows: * **Precedence**: If a data governance tag is attached to a column, it takes precedence over the policy tag attached to the column. However, if a data policy is attached to a column, it takes precedence over the data governance tag. * **Patching behavior**: Describes how this field behaves during a `Table.patch` schema update: * **Unset**: If the `data_governance_tags_info` field is omitted from the update request, the existing tags on the column are preserved. * **Empty Field**: To clear data governance tags from a column, send the `data_governance_tags_info` field as an empty object. This removes all tags from the column. * **Updating tags**: To replace an existing tag, send the field with the new tag.
			 */
			dataGovernanceTagsInfo?: {
				/**
				 * The data governance tags added to this field are used for field-level access control. Only one data governance tag is currently supported on a field. Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "parent-id/pii" where parent-id is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "sensitive". See [Tag definitions](https://cloud.google.com/iam/docs/tags-access-control#definitions) for more details. For example: "parent-id/pii": "sensitive", "myProject/cost_center": "sales".
				 */
				dataGovernanceTags?: Record<string, JSONValue>;
			};
			/**
			 * Data policies attached to this field, used for field-level access control.
			 *
			 * Items: Data policy option. For more information, see [Mask data by applying data policies to a column](https://docs.cloud.google.com/bigquery/docs/column-data-masking#data-policies-on-column).
			 */
			dataPolicies?: {
				/**
				 * Data policy resource name in the form of projects/project_id/locations/location_id/dataPolicies/data_policy_id.
				 */
				name?: string;
			}[];
			/**
			 * Specifies data policies attached to this field, used for field-level access control. When set, this will be the source of truth for data policy information.
			 */
			dataPolicyList?: {
				/**
				 * Contains a list of data policy options. At most 9 data policies are allowed per field.
				 *
				 * Items: Data policy option. For more information, see [Mask data by applying data policies to a column](https://docs.cloud.google.com/bigquery/docs/column-data-masking#data-policies-on-column).
				 */
				dataPolicies?: {
					/**
					 * Data policy resource name in the form of projects/project_id/locations/location_id/dataPolicies/data_policy_id.
					 */
					name?: string;
				}[];
			};
			/**
			 * Definition of the foreign data type. Only valid for top-level schema fields (not nested fields). If the type is FOREIGN, this field is required.
			 */
			foreignTypeDefinition?: string;
			/**
			 * Definition of how values are generated for the field. Only valid for top-level schema fields (not nested fields).
			 */
			generatedColumn?: {
				/**
				 * Definition of the expression used to generate the field.
				 */
				generatedExpressionInfo?: {
					/**
					 * Whether the column generation is done asynchronously.
					 */
					asynchronous?: boolean;
					/**
					 * The generation expression (e.g. AI.EMBED(...)) used to generate the field.
					 */
					generationExpression?: string;
					/**
					 * Whether the generated column is stored in the table.
					 */
					stored?: boolean;
				};
				/**
				 * Dictates when system generated values are used to populate the field. Values: `GENERATED_ALWAYS` - Field can only have system generated values. Users cannot manually insert values into the field; `GENERATED_BY_DEFAULT` - Use system generated values only if the user does not explicitly provide a value.
				 */
				generatedMode?: string;
			};
			/**
			 * The policy tags attached to this field, used for field-level access control. If not set, defaults to empty policy_tags.
			 */
			policyTags?: {
				/**
				 * A list of policy tag resource names. For example, "projects/1/locations/eu/taxonomies/2/policyTags/3". At most 1 policy tag is currently allowed.
				 *
				 * Items: A single name value.
				 */
				names?: string[];
			};
			/**
			 * Represents the type of a field element.
			 */
			rangeElementType?: {
				/**
				 * The type of a field element. For more information, see TableFieldSchema.type.
				 */
				type?: string;
			};
			/**
			 * Precision (maximum number of total digits in base 10) for seconds of TIMESTAMP type. Possible values include: * 6 (Default, for TIMESTAMP type with microsecond precision) * 12 (For TIMESTAMP type with picosecond precision).
			 */
			timestampPrecision?: string;
		}[];
		/**
		 * Specifies metadata of the foreign data type definition in field schema (TableFieldSchema.foreign_type_definition).
		 */
		foreignTypeInfo?: {
			/**
			 * Specifies the system which defines the foreign data type. Values: `HIVE` - Represents Hive data types.
			 */
			typeSystem?: string;
		};
	};
	/**
	 * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully. The REST-based representation of this data leverages a series of JSON f,v objects for indicating fields and values.
	 *
	 * Items: A single row.
	 */
	rows?: {
		/**
		 * The cells of the row, in the order of `schema.fields`.
		 *
		 * Items: One cell of the row.
		 */
		f?: {
			/**
			 * The cell value as a string (`null` for a SQL NULL). A nested `RECORD` is an object with its own `f` array of cells; a `REPEATED` field is an array of `{ "v": ... }` items.
			 */
			v?: Record<string, JSONValue>;
		}[];
	}[];
	/**
	 * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully.
	 */
	totalRows?: string;
	/**
	 * A token used for paging results. When this token is non-empty, it indicates additional results are available.
	 */
	pageToken?: string;
	/**
	 * The total number of bytes processed for this query.
	 */
	totalBytesProcessed?: string;
	/**
	 * Whether the query result was fetched from the query cache.
	 */
	cacheHit?: boolean;
	/**
	 * The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages).
	 *
	 * Items: Error details.
	 */
	errors?: {
		/**
		 * A short error code that summarizes the error.
		 */
		reason?: string;
		/**
		 * Specifies where the error occurred, if present.
		 */
		location?: string;
		/**
		 * A human-readable description of the error.
		 */
		message?: string;
		/**
		 * Debugging information. This property is internal to Google and should not be used.
		 */
		debugInfo?: string;
	}[];
	/**
	 * The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
	 */
	numDmlAffectedRows?: string;
};

/**
 * Get query results
 * Returns the results of a query job.
 */
export async function getQueryResults(
	this: EndpointFunctionThis,
	payload: {
		input: GetQueryResultsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetQueryResultsOutput> {
	const response = await this.endpointCaller<GetQueryResultsOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'getQueryResults',
		},
		payload,
	);
	return response.output;
}
