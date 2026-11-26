// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type RunQueryInput = {
	/**
	 * The ID of the Google Cloud project.
	 */
	projectId: string;
	/**
	 * A GoogleSQL query string to execute, e.g. `SELECT name, age FROM my_dataset.users WHERE age > @min_age` (quote `project.dataset.table` references with backticks when the project ID contains dashes). The query always runs as GoogleSQL (legacy SQL is disabled).
	 */
	query: string;
	/**
	 * Specifies the default datasetId and projectId to assume for any unqualified table names in the query. If not set, all table names in the query string must be qualified in the format 'datasetId.tableId'.
	 */
	defaultDataset?: {
		/**
		 * The ID of the project containing this dataset.
		 */
		projectId?: string;
		/**
		 * Required when the parent is provided. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
		 */
		datasetId: string;
	};
	/**
	 * GoogleSQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
	 */
	parameterMode?: '' | 'NAMED' | 'POSITIONAL';
	/**
	 * Query parameters for GoogleSQL queries.
	 *
	 * Items: A parameter given to a query.
	 */
	queryParameters?: {
		/**
		 * If unset, this is a positional parameter. Otherwise, should be unique within a query.
		 */
		name?: string;
		/**
		 * Required when the parent is provided. The type of this parameter.
		 */
		parameterType: {
			/**
			 * Required when the parent is provided. The top level type of this field.
			 */
			type:
				| 'STRING'
				| 'BYTES'
				| 'INT64'
				| 'FLOAT64'
				| 'NUMERIC'
				| 'BIGNUMERIC'
				| 'BOOL'
				| 'TIMESTAMP'
				| 'DATE'
				| 'TIME'
				| 'DATETIME'
				| 'INTERVAL'
				| 'GEOGRAPHY'
				| 'JSON'
				| 'ARRAY'
				| 'STRUCT'
				| 'RANGE';
			/**
			 * The type of the array's elements, if this is an array. Nested structure of the same shape as its parent (Query parameter type); pass a JSON object.
			 */
			arrayType?: Record<string, JSONValue>;
			/**
			 * The types of the fields of this struct, in order, if this is a struct.
			 *
			 * Items: The type of a struct parameter.
			 */
			structTypes?: {
				/**
				 * Required when the parent is provided. The type of this field. Nested structure of the same shape as its parent (Query parameter type); pass a JSON object.
				 */
				type: Record<string, JSONValue>;
				/**
				 * Human-oriented description of the field.
				 */
				description?: string;
				/**
				 * The name of this field.
				 */
				name?: string;
			}[];
			/**
			 * The element type of the range, if this is a range. Nested structure of the same shape as its parent (Query parameter type); pass a JSON object.
			 */
			rangeElementType?: Record<string, JSONValue>;
			/**
			 * Precision (maximum number of total digits in base 10) for seconds of TIMESTAMP type. Possible values include: * 6 (Default, for TIMESTAMP type with microsecond precision) * 12 (For TIMESTAMP type with picosecond precision).
			 */
			timestampPrecision?: '' | 6 | 12;
		};
		/**
		 * Required when the parent is provided. The value of this parameter.
		 */
		parameterValue: {
			/**
			 * The scalar value as a string, e.g. `42`, `2026-01-31` or `Alice`; an empty string is passed as an empty string. For SQL `NULL` omit `value` and send an empty `parameterValue` object.
			 */
			value?: string;
			/**
			 * The array elements, each a query parameter value object (e.g. `{"value": "1"}`). An empty array is passed as given, but BigQuery treats an empty array parameter as `NULL`.
			 *
			 * Items: An array value as a JSON object (same shape as Query parameter value).
			 */
			arrayValues?: Record<string, JSONValue>[];
			/**
			 * The struct field values as a JSON object keyed by field name; each value is a query parameter value object, e.g. `{"name": {"value": "Alice"}, "age": {"value": "30"}}`.
			 */
			structValues?: Record<string, JSONValue>;
			/**
			 * The range value, if this is a range type.
			 */
			rangeValue?: {
				/**
				 * The end value of the range. A missing value represents an unbounded end. Nested structure of the same shape as its parent (Query parameter value); pass a JSON object.
				 */
				end?: Record<string, JSONValue>;
				/**
				 * The start value of the range. A missing value represents an unbounded start. Nested structure of the same shape as its parent (Query parameter value); pass a JSON object.
				 */
				start?: Record<string, JSONValue>;
			};
		};
	}[];
	/**
	 * The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.
	 */
	maxResults?: number;
	/**
	 * Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.
	 */
	timeoutMs?: number;
	/**
	 * If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false.
	 */
	dryRun?: boolean;
	/**
	 * Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true.
	 */
	useQueryCache?: boolean;
	/**
	 * The geographic location where the job should run. For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
	 */
	location?: string;
	/**
	 * Limits the bytes billed for this query. Queries with bytes billed above this limit will fail (without incurring a charge). If unspecified, the project default is used.
	 */
	maximumBytesBilled?: number;
	/**
	 * The labels associated with this query. Labels can be used to organize and group query jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label keys must start with a letter and each label in the list must have a different key.
	 *
	 * Items: One label entry (key and value).
	 */
	labels?: {
		/**
		 * Required when the parent is provided. The label key.
		 */
		key: string;
		/**
		 * The label value. Always provide it: an empty string creates a key-only label.
		 */
		value?: string;
	}[];
	/**
	 * Output format adjustments.
	 */
	formatOptions?: {
		/**
		 * The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the `useInt64Timestamp` option. The two options are mutually exclusive: sending both is rejected by the API. Values: `FLOAT64` - Timestamp is output as float64 seconds since Unix epoch; `INT64` - Timestamp is output as int64 microseconds since Unix epoch; `ISO8601_STRING` - Timestamp is output as ISO 8601 String ("YYYY-MM-DDTHH:MM:SS.FFFFFFFFFFFFZ").
		 */
		timestampOutputFormat?: '' | 'FLOAT64' | 'INT64' | 'ISO8601_STRING';
		/**
		 * Output timestamp as usec int64. Default is false.
		 */
		useInt64Timestamp?: boolean;
	};
	/**
	 * Options specific to the Apache Arrow output format.
	 */
	arrowSerializationOptions?: {
		/**
		 * The compression codec to use for Arrow buffers in serialized record batches. Values: `LZ4_FRAME` - [LZ4 Frame](https://github.com/lz4/lz4/blob/dev/doc/lz4_Frame_format.md); `ZSTD` - Zstandard compression.
		 */
		bufferCompression?: '' | 'LZ4_FRAME' | 'ZSTD';
		/**
		 * Set timestamp precision option. If not set, the default precision is microseconds. Values: `TIMESTAMP_PRECISION_MICROS` - Timestamp values returned in the results will be truncated to microsecond level precision. The value will be encoded as Arrow TIMESTAMP type in a 64 bit integer; `TIMESTAMP_PRECISION_NANOS` - Timestamp values returned in the results will be truncated to nanosecond level precision. The value will be encoded as Arrow TIMESTAMP type in a 64 bit integer; `TIMESTAMP_PRECISION_PICOS` - Timestamp values returned in the results will contain full precision picosecond value. The value will be encoded as a string which conforms to ISO 8601 format.
		 */
		picosTimestampPrecision?:
			| ''
			| 'TIMESTAMP_PRECISION_MICROS'
			| 'TIMESTAMP_PRECISION_NANOS'
			| 'TIMESTAMP_PRECISION_PICOS';
	};
	/**
	 * Connection properties which can modify the query behavior.
	 *
	 * Items: A connection-level property to customize query behavior. Under JDBC, these correspond directly to connection properties passed to the DriverManager. Under ODBC, these correspond to properties in the connection string. Currently supported connection properties: * **dataset_project_id**: represents the default project for datasets that are used in the query. Setting the system variable `@@dataset_project_id` achieves the same behavior. For more information about system variables, see [System variables](https://cloud.google.com/bigquery/docs/reference/system-variables) * **time_zone**: represents the default timezone used to run the query. * **session_id**: associates the query with a given session. * **query_label**: associates the query with a given job label. If set, all subsequent queries in a script or session will have this label.
	 */
	connectionProperties?: {
		/**
		 * The key of the property to set.
		 */
		key?: string;
		/**
		 * The value of the property to set.
		 */
		value?: string;
	}[];
	/**
	 * Specifies whether the query should be executed as a continuous query. The default value is false.
	 */
	continuous?: boolean;
	/**
	 * If true, creates a new session using a randomly generated session_id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs query in non-session mode. The session location will be set to QueryRequest.location if it is present, otherwise it's set to the default location based on existing routing logic.
	 */
	createSession?: boolean;
	/**
	 * Custom encryption configuration (e.g., Cloud KMS keys).
	 */
	destinationEncryptionConfiguration?: {
		/**
		 * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.
		 */
		kmsKeyName?: string;
	};
	/**
	 * If not set, jobs are always required. If set, the query request will follow the behavior described JobCreationMode. Values: `JOB_CREATION_REQUIRED` - Default. Job creation is always required; `JOB_CREATION_OPTIONAL` - Job creation is optional. Returning immediate results is prioritized. BigQuery will automatically determine if a Job needs to be created. The conditions under which BigQuery can decide to not create a Job are subject to change. If Job creation is required, JOB_CREATION_REQUIRED mode should be used, which is the default.
	 */
	jobCreationMode?: '' | 'JOB_CREATION_REQUIRED' | 'JOB_CREATION_OPTIONAL';
	/**
	 * Job timeout in milliseconds. If this time limit is exceeded, BigQuery will attempt to stop a longer job, but may not always succeed in canceling it before the job completes. For example, a job that takes more than 60 seconds to complete has a better chance of being stopped than a job that takes 10 seconds to complete. This timeout applies to the query even if a job does not need to be created.
	 */
	jobTimeoutMs?: number;
	/**
	 * A target limit on the rate of slot consumption by this query. If set to a value > 0, BigQuery will attempt to limit the rate of slot consumption by this query to keep it below the configured limit, even if the query is eligible for more slots based on fair scheduling. The unused slots will be available for other jobs and queries to use. Note: This feature is not yet generally available.
	 */
	maxSlots?: number;
	/**
	 * The query results format. If the value is anything other than `STRUCT_ENCODING` or unspecified: * The schema of the results will be provided in `QueryResponse.results_schema` field. * The results of the first page will be provided in `QueryResponse.results` field. * The `QueryResponse.rows` will not be populated. * The `QueryResponse.schema` for `QueryResponse.rows` will also not be populated since it is the schema of the `QueryResponse.rows`. This feature is not yet available. Values: `STRUCT_ENCODING` - Default encoding of results as struct in `QueryResponse.rows`; `ARROW` - Arrow is a standard open source column-based message format. See [Apache Arrow](https://arrow.apache.org/) for more details.
	 */
	queryResultsFormat?: '' | 'STRUCT_ENCODING' | 'ARROW';
	/**
	 * A unique user provided identifier to ensure idempotent behavior for queries. Note that this is different from the job_id. It has the following properties: 1. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended. 2. Read only queries can ignore this token since they are nullipotent by definition. 3. For the purposes of idempotency ensured by the request_id, a request is considered duplicate of another only if they have the same request_id and are actually duplicates. When determining whether a request is a duplicate of another request, all parameters in the request that may affect the result are considered.
	 */
	requestId?: string;
	/**
	 * The reservation that jobs.query request would use. User can specify a reservation to execute the job.query. The expected format is `projects/{project}/locations/{location}/reservations/{reservation}`. Forces the query to use on-demand billing when set to `none`. This requires the project or organization to have `reservation_override_mode` set to `ALLOW_ANY_OVERRIDE`.
	 */
	reservation?: string;
	/**
	 * A set of key-value pairs representing the secure context. This can be used to pass sensitive or context-specific information. They can be retrieved via the SECURE_CONTEXT() function and used to modify the run-time behavior of a query.
	 */
	secureContext?: {
		/**
		 * A set of key-value pairs representing the secure parameter values. They can be retrieved via the SECURE_CONTEXT() function and used to modify the run-time behavior of a query. Pass a JSON object of key/value pairs.
		 */
		secureParameterEntries?: Record<string, JSONValue>;
	};
	/**
	 * This is only supported for SELECT query. If set, the query is allowed to write results incrementally to the temporary result table. This may incur a performance penalty. This option cannot be used with Legacy SQL. This feature is not yet available.
	 */
	writeIncrementalResults?: boolean;
};

export type RunQueryOutput = {
	/**
	 * The resource type.
	 */
	kind?: string;
	/**
	 * Reference to the Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults). If job_creation_mode was set to `JOB_CREATION_OPTIONAL` and the query completes without creating a job, this field will be empty.
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
	 * Auto-generated ID for the query.
	 */
	queryId?: string;
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
	 * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above.
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
	 * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results.
	 */
	totalRows?: string;
	/**
	 * A token used for paging results. A non-empty token indicates that additional results are available. To see additional results, query the [`jobs.getQueryResults`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/getQueryResults) method. For more information, see [Paging through table data](https://cloud.google.com/bigquery/docs/paging-results).
	 */
	pageToken?: string;
	/**
	 * The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run.
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
	/**
	 * Serialized row data in Arrow RecordBatch format.
	 */
	arrowRecordBatch?: {
		/**
		 * IPC-serialized Arrow RecordBatch.
		 */
		serializedRecordBatch?: string;
	};
	/**
	 * Arrow schema.
	 */
	arrowSchema?: {
		/**
		 * IPC serialized Arrow schema.
		 */
		serializedSchema?: string;
	};
	/**
	 * Creation time of this query, in milliseconds since the epoch. This field will be present on all queries.
	 */
	creationTime?: string;
	/**
	 * Detailed statistics for DML statements INSERT, UPDATE, DELETE, MERGE or TRUNCATE.
	 */
	dmlStats?: {
		/**
		 * Number of deleted Rows. populated by DML DELETE, MERGE and TRUNCATE statements.
		 */
		deletedRowCount?: string;
		/**
		 * DML mode used. Values: `COARSE_GRAINED_DML` - Coarse-grained DML was used; `FINE_GRAINED_DML` - Fine-grained DML was used.
		 */
		dmlMode?: string;
		/**
		 * Reason for disabling fine-grained DML if applicable. Values: `MAX_PARTITION_SIZE_EXCEEDED` - Max partition size threshold exceeded. [Fine-grained DML Limitations](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language#fine-grained-dml-limitations); `TABLE_NOT_ENROLLED` - The table is not enrolled for fine-grained DML; `DML_IN_MULTI_STATEMENT_TRANSACTION` - The DML statement is part of a multi-statement transaction.
		 */
		fineGrainedDmlUnusedReason?: string;
		/**
		 * Number of inserted Rows. Populated by DML INSERT and MERGE statements.
		 */
		insertedRowCount?: string;
		/**
		 * Number of updated Rows. Populated by DML UPDATE and MERGE statements.
		 */
		updatedRowCount?: string;
	};
	/**
	 * End time of this query, in milliseconds since the epoch. This field will be present whenever a query job is in the DONE state.
	 */
	endTime?: string;
	/**
	 * The reason why a Job was created. Only relevant when a job_reference is present in the response. If job_reference is not present it will always be unset.
	 */
	jobCreationReason?: {
		/**
		 * Specifies the high level reason why a Job was created. Values: `REQUESTED` - Job creation was requested; `LONG_RUNNING` - The query request ran beyond a system defined timeout specified by the [timeoutMs field in the QueryRequest](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#queryrequest). As a result it was considered a long running operation for which a job was created; `LARGE_RESULTS` - The results from the query cannot fit in the response; `OTHER` - BigQuery has determined that the query needs to be executed as a Job.
		 */
		code?: string;
	};
	/**
	 * The geographic location of the query. For more information about BigQuery locations, see [BigQuery locations](https://cloud.google.com/bigquery/docs/locations).
	 */
	location?: string;
	/**
	 * The number of rows out of `total_rows` returned in this response. This feature is not yet available.
	 */
	pageRowCount?: string;
	/**
	 * Information of the session if this job is part of one.
	 */
	sessionInfo?: {
		/**
		 * The id of the session.
		 */
		sessionId?: string;
	};
	/**
	 * Start time of this query, in milliseconds since the epoch. This field will be present when the query job transitions from the PENDING state to either RUNNING or DONE.
	 */
	startTime?: string;
	/**
	 * The type of query statement, if valid. Possible values: * `SELECT`: [`SELECT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#select_list) statement. * `ASSERT`: [`ASSERT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/debugging-statements#assert) statement. * `INSERT`: [`INSERT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#insert_statement) statement. * `UPDATE`: [`UPDATE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#update_statement) statement. * `DELETE`: [`DELETE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `MERGE`: [`MERGE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language) statement.
	 */
	statementType?: string;
	/**
	 * If the project is configured to use on-demand pricing, then this field contains the total bytes billed for the job. If the project is configured to use flat-rate pricing, then you are not billed for bytes and this field is informational only.
	 */
	totalBytesBilled?: string;
	/**
	 * Number of slot ms the user is actually billed for.
	 */
	totalSlotMs?: string;
};

/**
 * Run a query
 * Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
 */
export async function runQuery(
	this: EndpointFunctionThis,
	payload: {
		input: RunQueryInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<RunQueryOutput>> {
	const response = await this.endpointCaller<RunQueryOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'runQuery',
		},
		payload,
	);
	return response;
}
