// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type GetJobInput = {
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
};

export type GetJobOutput = {
	/**
	 * Reference describing the unique-per-user name of the job.
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
	 * Describes the job configuration.
	 */
	configuration?: {
		/**
		 * The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN.
		 */
		jobType?: string;
		/**
		 * Set exactly one of the alternative fields. Configures a load job.
		 */
		load?: {
			/**
			 * The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
			 *
			 * Items: A single source uri value.
			 */
			sourceUris?: string[];
			/**
			 * The destination table to load the data into.
			 */
			destinationTable?: {
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
			 * The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET". For orc, specify "ORC". The default value is CSV.
			 */
			sourceFormat?: string;
			/**
			 * The schema for the destination table. The schema can be omitted if the destination table already exists, or if you're loading data from Google Cloud Datastore.
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
			 * Indicates if we should automatically infer the options and schema for CSV and JSON sources.
			 */
			autodetect?: boolean;
			/**
			 * Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the data, removes the constraints and uses the schema from the load job. * WRITE_TRUNCATE_DATA: If the table already exists, BigQuery overwrites the data, but keeps the constraints and schema of the existing table. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
			 */
			writeDisposition?: string;
			/**
			 * Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
			 */
			createDisposition?: string;
			/**
			 * The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
			 */
			skipLeadingRows?: number;
			/**
			 * The separator character for fields in a CSV file. The separator is interpreted as a single byte. For files encoded in ISO-8859-1, any single character can be used as a separator. For files encoded in UTF-8, characters represented in decimal range 1-127 (U+0001-U+007F) can be used without any modification. UTF-8 characters encoded with multiple bytes (i.e. U+0080 and above) will have only the first byte used for separating fields. The remaining bytes will be treated as a part of the field. BigQuery also supports the escape sequence "\t" (U+0009) to specify a tab separator. The default value is comma (",", U+002C).
			 */
			fieldDelimiter?: string;
			/**
			 * The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, if you want to escape the default character ' " ', use ' "" '.
			 */
			quote?: string;
			/**
			 * The character encoding of the data. The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the `quote` and `fieldDelimiter` properties. If you don't specify an encoding, or if you specify a UTF-8 encoding when the CSV file is not UTF-8 encoded, BigQuery attempts to convert the data to UTF-8. Generally, your data loads successfully, but it may not match byte-for-byte what you expect. To avoid this, specify the correct encoding by using the `--encoding` flag. If BigQuery can't convert a character other than the ASCII `0` character, BigQuery converts the character to the standard Unicode replacement character: �.
			 */
			encoding?: string;
			/**
			 * Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
			 */
			allowJaggedRows?: boolean;
			/**
			 * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
			 */
			allowQuotedNewlines?: boolean;
			/**
			 * Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names in the table schema Avro, Parquet, ORC: Fields in the file schema that don't exist in the table schema.
			 */
			ignoreUnknownValues?: boolean;
			/**
			 * The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This is only supported for CSV and NEWLINE_DELIMITED_JSON file formats.
			 */
			maxBadRecords?: number;
			/**
			 * Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.
			 */
			nullMarker?: string;
			/**
			 * Clustering specification for the destination table.
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
			 * Character map supported for column names in CSV/Parquet loads. Defaults to STRICT and can be overridden by Project Config Service. Using this option with unsupporting load formats will result in an error. Values: `STRICT` - Support flexible column name and reject invalid column names; `V1` - Support alphanumeric + underscore characters and names must start with a letter or underscore. Invalid column names will be normalized; `V2` - Support flexible column name. Invalid column names will be normalized.
			 */
			columnNameCharacterMap?: string;
			/**
			 * Connection properties which can modify the load job behavior. Currently, only the 'session_id' connection property is supported, and is used to resolve _SESSION appearing as the dataset id.
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
			 * Configures the load job to copy files directly to the destination BigLake managed table, bypassing file content reading and rewriting. Copying files only is supported when all the following are true: * `source_uris` are located in the same Cloud Storage location as the destination table's `storage_uri` location. * `source_format` is `PARQUET`. * `destination_table` is an existing BigLake managed table. The table's schema does not have flexible column names. The table's columns do not have type parameters other than precision and scale. * No options other than the above are specified.
			 */
			copyFilesOnly?: boolean;
			/**
			 * If this property is true, the job creates a new session using a randomly generated session_id. To continue using a created session with subsequent queries, pass the existing session identifier as a `ConnectionProperty` value. The session identifier is returned as part of the `SessionInfo` message within the query statistics. The new session's location will be set to `Job.JobReference.location` if it is present, otherwise it's set to the default location based on existing routing logic.
			 */
			createSession?: boolean;
			/**
			 * Date format used for parsing DATE values.
			 */
			dateFormat?: string;
			/**
			 * Date format used for parsing DATETIME values.
			 */
			datetimeFormat?: string;
			/**
			 * Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"].
			 *
			 * Items: A single decimal target type value.
			 */
			decimalTargetTypes?: string[];
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
			 * Properties with which to create the destination table if it is new.
			 */
			destinationTableProperties?: {
				/**
				 * The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail.
				 */
				description?: string;
				/**
				 * Internal use only.
				 */
				expirationTime?: string;
				/**
				 * Friendly name for the destination table. If the table already exists, it should be same as the existing friendly name.
				 */
				friendlyName?: string;
				/**
				 * The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail.
				 */
				labels?: Record<string, JSONValue>;
			};
			/**
			 * Specifies how source URIs are interpreted for constructing the file set to load. By default, source URIs are expanded against the underlying storage. You can also specify manifest files to control how the file set is constructed. This option is only applicable to object storage systems. Values: `FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH` - This option expands source URIs by listing files from the object store. It is the default behavior if FileSetSpecType is not set; `FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST` - This option indicates that the provided URIs are newline-delimited manifest files, with one URI per line. Wildcard URIs are not supported.
			 */
			fileSetSpecType?: string;
			/**
			 * When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.
			 */
			hivePartitioningOptions?: {
				/**
				 * For permanent external tables, this field is populated with the hive partition keys in the order they were inferred. The types of the partition keys can be deduced by checking the table schema (which will include the partition keys). Not every API will populate this field in the output. For example, Tables.Get will populate it, but Tables.List will not contain this field.
				 *
				 * Items: A single field value.
				 */
				fields?: string[];
				/**
				 * When set, what mode of hive partitioning to use when reading data. The following modes are supported: * AUTO: automatically infer partition key name(s) and type(s). * STRINGS: automatically infer partition key name(s). All types are strings. * CUSTOM: partition key schema is encoded in the source URI prefix. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported formats are: JSON, CSV, ORC, Avro and Parquet.
				 */
				mode?: string;
				/**
				 * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. Note that this field should only be true when creating a permanent external table or querying a temporary external table. Hive-partitioned loads with require_partition_filter explicitly set to true will fail.
				 */
				requirePartitionFilter?: boolean;
				/**
				 * When hive partition detection is requested, a common prefix for all source uris must be required. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout: gs://bucket/path_to_table/dt=2019-06-01/country=USA/id=7/file.avro gs://bucket/path_to_table/dt=2019-05-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/. CUSTOM detection requires encoding the partitioning schema immediately after the common prefix. For CUSTOM, any of * gs://bucket/path_to_table/{dt:DATE}/{country:STRING}/{id:INTEGER} * gs://bucket/path_to_table/{dt:STRING}/{country:STRING}/{id:INTEGER} * gs://bucket/path_to_table/{dt:DATE}/{country:STRING}/{id:STRING} would all be valid source URI prefixes.
				 */
				sourceUriPrefix?: string;
			};
			/**
			 * Load option to be used together with source_format newline-delimited JSON to indicate that a variant of JSON is being loaded. To load newline-delimited GeoJSON, specify GEOJSON (and source_format must be set to NEWLINE_DELIMITED_JSON). Values: `GEOJSON` - Use GeoJSON variant of JSON. See [RFC 7946](https://tools.ietf.org/html/rfc7946).
			 */
			jsonExtension?: string;
			/**
			 * A list of strings represented as SQL NULL value in a CSV file. null_marker and null_markers can't be set at the same time. If null_marker is set, null_markers has to be not set. If null_markers is set, null_marker has to be not set. If both null_marker and null_markers are set at the same time, a user error would be thrown. Any strings listed in null_markers, including empty string would be interpreted as SQL NULL. This applies to all column types.
			 *
			 * Items: A single null marker value.
			 */
			nullMarkers?: string[];
			/**
			 * Additional properties to set if sourceFormat is set to PARQUET.
			 */
			parquetOptions?: {
				/**
				 * Indicates whether to use schema inference specifically for Parquet LIST logical type.
				 */
				enableListInference?: boolean;
				/**
				 * Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
				 */
				enumAsString?: boolean;
				/**
				 * Indicates how to represent a Parquet map if present. Values: `ARRAY_OF_STRUCT` - In this mode, the map will have the following schema: repeated struct map_field_name { key value }.
				 */
				mapTargetType?: string;
			};
			/**
			 * When sourceFormat is set to "CSV", this indicates whether the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\x00' to '\x1F') are preserved.
			 */
			preserveAsciiControlCharacters?: boolean;
			/**
			 * If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
			 *
			 * Items: A single projection field value.
			 */
			projectionFields?: string[];
			/**
			 * Range partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
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
			 * The user can provide a reference file with the reader schema. This file is only loaded if it is part of source URIs, but is not loaded otherwise. It is enabled for the following formats: AVRO, PARQUET, ORC.
			 */
			referenceFileSchemaUri?: string;
			/**
			 * [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT".
			 */
			schemaInline?: string;
			/**
			 * [Deprecated] The format of the schemaInline property.
			 */
			schemaInlineFormat?: string;
			/**
			 * Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in three cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE_DATA; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
			 *
			 * Items: A single schema update option value.
			 */
			schemaUpdateOptions?: string[];
			/**
			 * Controls the strategy used to match loaded columns to the schema. If not set, a sensible default is chosen based on how the schema is provided. If autodetect is used, then columns are matched by name. Otherwise, columns are matched by position. This is done to keep the behavior backward-compatible. Values: `POSITION` - Matches by position. This assumes that the columns are ordered the same way as the schema; `NAME` - Matches by name. This reads the header row as column names and reorders columns to match the field names in the schema.
			 */
			sourceColumnMatch?: string;
			/**
			 * Date format used for parsing TIME values.
			 */
			timeFormat?: string;
			/**
			 * Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
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
			 * Date format used for parsing TIMESTAMP values.
			 */
			timestampFormat?: string;
			/**
			 * Precisions (maximum number of total digits in base 10) for seconds of TIMESTAMP types that are allowed to the destination table for autodetection mode. Available for the formats: CSV, PARQUET, AVRO, and Iceberg External Table. Possible values include: Not Specified, [], or [6]: timestamp(6) for all auto detected TIMESTAMP columns [6, 12]: timestamp(6) for all auto detected TIMESTAMP columns that have less than 6 digits of subseconds. timestamp(12) for all auto detected TIMESTAMP columns that have more than 6 digits of subseconds. [12]: timestamp(12) for all auto detected TIMESTAMP columns. The order of the elements in this array is ignored. Inputs that have higher precision than the highest target precision in this array will be truncated.
			 *
			 * Items: A single timestamp target precision value.
			 */
			timestampTargetPrecision?: number[];
			/**
			 * Default time zone that will apply when parsing timestamp values that have no specific time zone.
			 */
			timeZone?: string;
			/**
			 * If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
			 */
			useAvroLogicalTypes?: boolean;
		};
		/**
		 * Set exactly one of the alternative fields. Configures a query job.
		 */
		query?: {
			/**
			 * SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or GoogleSQL.
			 */
			query?: string;
			/**
			 * Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query uses BigQuery's [GoogleSQL](https://docs.cloud.google.com/bigquery/docs/introduction-sql). When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
			 */
			useLegacySql?: boolean;
			/**
			 * Describes the table where the query results should be stored. This property must be set for large results that exceed the maximum response size. For queries that produce anonymous (cached) results, this field will be populated by BigQuery.
			 */
			destinationTable?: {
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
			 * Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the data, removes the constraints, and uses the schema from the query result. * WRITE_TRUNCATE_DATA: If the table already exists, BigQuery overwrites the data, but keeps the constraints and schema of the existing table. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
			 */
			writeDisposition?: string;
			/**
			 * Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
			 */
			createDisposition?: string;
			/**
			 * Specifies the default dataset to use for unqualified table names in the query. This setting does not alter behavior of unqualified dataset names. Setting the system variable `@@dataset_id` achieves the same behavior. See [System variables](https://cloud.google.com/bigquery/docs/reference/system-variables) for more information on system variables.
			 */
			defaultDataset?: {
				/**
				 * The ID of the project containing this dataset.
				 */
				projectId?: string;
				/**
				 * A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
				 */
				datasetId?: string;
			};
			/**
			 * GoogleSQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
			 */
			parameterMode?: string;
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
				 * The type of this parameter.
				 */
				parameterType?: {
					/**
					 * The top level type of this field.
					 */
					type?: string;
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
						 * The type of this field. Nested structure of the same shape as its parent (Query parameter type); pass a JSON object.
						 */
						type?: Record<string, JSONValue>;
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
					timestampPrecision?: string;
				};
				/**
				 * The value of this parameter.
				 */
				parameterValue?: {
					/**
					 * The value of this value, if a simple scalar type.
					 */
					value?: string;
					/**
					 * The array values, if this is an array type.
					 *
					 * Items: An array value as a JSON object (same shape as Query parameter value).
					 */
					arrayValues?: Record<string, JSONValue>[];
					/**
					 * The struct field values.
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
			 * Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE.
			 */
			priority?: string;
			/**
			 * Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true.
			 */
			useQueryCache?: boolean;
			/**
			 * Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default.
			 */
			maximumBytesBilled?: string;
			/**
			 * If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For GoogleSQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size.
			 */
			allowLargeResults?: boolean;
			/**
			 * Clustering specification for the destination table.
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
			 * If this property is true, the job creates a new session using a randomly generated session_id. To continue using a created session with subsequent queries, pass the existing session identifier as a `ConnectionProperty` value. The session identifier is returned as part of the `SessionInfo` message within the query statistics. The new session's location will be set to `Job.JobReference.location` if it is present, otherwise it's set to the default location based on existing routing logic.
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
			 * If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. allowLargeResults must be true if this is set to false. For GoogleSQL queries, this flag is ignored and results are never flattened.
			 */
			flattenResults?: boolean;
			/**
			 * [Deprecated] Maximum billing tier allowed for this query. The billing tier controls the amount of compute resources allotted to the query, and multiplies the on-demand cost of the query accordingly. A query that runs within its allotted resources will succeed and indicate its billing tier in statistics.query.billingTier, but if the query exceeds its allotted resources, it will fail with billingTierLimitExceeded. WARNING: The billed byte amount can be multiplied by an amount up to this number! Most users should not need to alter this setting, and we recommend that you avoid introducing new uses of it.
			 */
			maximumBillingTier?: number;
			/**
			 * [Deprecated] This property is deprecated.
			 */
			preserveNulls?: boolean;
			/**
			 * Range partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
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
			 * Allows the schema of the destination table to be updated as a side effect of the query job. Schema update options are supported in three cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE_DATA; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
			 *
			 * Items: A single schema update option value.
			 */
			schemaUpdateOptions?: string[];
			/**
			 * Options controlling the execution of scripts.
			 */
			scriptOptions?: {
				/**
				 * Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. Default is LAST. Values: `LAST` - The last result determines the key result; `FIRST_SELECT` - The first SELECT statement determines the key result.
				 */
				keyResultStatement?: string;
				/**
				 * Limit on the number of bytes billed per statement. Exceeding this budget results in an error.
				 */
				statementByteBudget?: string;
				/**
				 * Timeout period for each statement in a script.
				 */
				statementTimeoutMs?: string;
			};
			/**
			 * A set of key-value pairs representing the secure context. This can be used to pass sensitive or context-specific information. They can be retrieved via the SECURE_CONTEXT() function and used to modify the run-time behavior of a query.
			 */
			secureContext?: {
				/**
				 * A set of key-value pairs representing the secure parameter values. They can be retrieved via the SECURE_CONTEXT() function and used to modify the run-time behavior of a query.
				 */
				secureParameterEntries?: Record<string, JSONValue>;
			};
			/**
			 * System variables for GoogleSQL queries. A system variable is output if the variable is settable and its value differs from the system default. "@@" prefix is not included in the name of the System variables.
			 */
			systemVariables?: {
				/**
				 * Data type for each system variable.
				 */
				types?: Record<string, JSONValue>;
				/**
				 * Value for each system variable.
				 */
				values?: Record<string, JSONValue>;
			};
			/**
			 * You can specify external table definitions, which operate as ephemeral tables that can be queried. These definitions are configured using a JSON map, where the string key represents the table identifier, and the value is the corresponding external data configuration object.
			 */
			tableDefinitions?: Record<string, JSONValue>;
			/**
			 * Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
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
			 * Describes user-defined function resources used in the query.
			 *
			 * Items: This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of GoogleSQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see [Differences in user-defined JavaScript functions](https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions).
			 */
			userDefinedFunctionResources?: {
				/**
				 * Set exactly one of the alternative fields. An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
				 */
				inlineCode?: string;
				/**
				 * Set exactly one of the alternative fields. A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
				 */
				resourceUri?: string;
			}[];
			/**
			 * This is only supported for a SELECT query using a temporary table. If set, the query is allowed to write results incrementally to the temporary result table. This may incur a performance penalty. This option cannot be used with Legacy SQL. This feature is not yet available.
			 */
			writeIncrementalResults?: boolean;
		};
		/**
		 * Set exactly one of the alternative fields. Copies a table.
		 */
		copy?: {
			/**
			 * Set exactly one of the alternative fields. Source table to copy.
			 */
			sourceTable?: {
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
			 * Set exactly one of the alternative fields. Source tables to copy.
			 *
			 * Items: A single source table.
			 */
			sourceTables?: {
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
			}[];
			/**
			 * The destination table.
			 */
			destinationTable?: {
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
			 * Supported operation types in table copy job. Values: `COPY` - The source and destination table have the same table type; `SNAPSHOT` - The source table type is TABLE and the destination table type is SNAPSHOT; `RESTORE` - The source table type is SNAPSHOT and the destination table type is TABLE; `CLONE` - The source and destination table have the same table type, but only bill for unique data.
			 */
			operationType?: string;
			/**
			 * Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema and table constraints from the source table. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
			 */
			writeDisposition?: string;
			/**
			 * Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
			 */
			createDisposition?: string;
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
			 * The time when the destination table expires. Expired tables will be deleted and their storage reclaimed.
			 */
			destinationExpirationTime?: string;
		};
		/**
		 * Set exactly one of the alternative fields. Configures an extract job.
		 */
		extract?: {
			/**
			 * A reference to the table being exported.
			 */
			sourceTable?: {
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
			 * A reference to the model being exported.
			 */
			sourceModel?: {
				/**
				 * The ID of the dataset containing this model.
				 */
				datasetId?: string;
				/**
				 * The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
				 */
				modelId?: string;
				/**
				 * The ID of the project containing this model.
				 */
				projectId?: string;
			};
			/**
			 * Set exactly one of the alternative fields. A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
			 *
			 * Items: A single destination uri value.
			 */
			destinationUris?: string[];
			/**
			 * Set exactly one of the alternative fields. DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written.
			 */
			destinationUri?: string;
			/**
			 * The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON, PARQUET, or AVRO for tables and ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL.
			 */
			destinationFormat?: string;
			/**
			 * The compression type to use for exported files. Possible values include DEFLATE, GZIP, NONE, SNAPPY, and ZSTD. The default value is NONE. Not all compression formats are support for all file formats. DEFLATE is only supported for Avro. ZSTD is only supported for Parquet. Not applicable when extracting models.
			 */
			compression?: string;
			/**
			 * When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. Default is ','. Not applicable when extracting models.
			 */
			fieldDelimiter?: string;
			/**
			 * Whether to print out a header row in the results. Default is true. Not applicable when extracting models.
			 */
			printHeader?: boolean;
			/**
			 * Model extract options only applicable when extracting models.
			 */
			modelExtractOptions?: {
				/**
				 * The 1-based ID of the trial to be exported from a hyperparameter tuning model. If not specified, the trial with id = [Model](https://cloud.google.com/bigquery/docs/reference/rest/v2/models#resource:-model).defaultTrialId is exported. This field is ignored for models not trained with hyperparameter tuning.
				 */
				trialId?: string;
			};
			/**
			 * Applicable to formats: PARQUET. If enabled, BigQuery to Parquet export will write the native Parquet Geography type instead of the default GeoParquet type.
			 */
			nativeGeographyExportEnabled?: boolean;
			/**
			 * A set of key-value pairs representing the secure context. This can be used to pass sensitive or context-specific information. They can be retrieved via the SECURE_CONTEXT() function and used to modify the run-time behavior of an extract job on tables with row access policies.
			 */
			secureContext?: {
				/**
				 * A set of key-value pairs representing the secure parameter values. They can be retrieved via the SECURE_CONTEXT() function and used to modify the run-time behavior of a query.
				 */
				secureParameterEntries?: Record<string, JSONValue>;
			};
			/**
			 * Whether to use logical types when extracting to AVRO format. Not applicable when extracting models.
			 */
			useAvroLogicalTypes?: boolean;
		};
		/**
		 * If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined.
		 */
		dryRun?: boolean;
		/**
		 * Job timeout in milliseconds relative to the job creation time. If this time limit is exceeded, BigQuery attempts to stop the job, but might not always succeed in canceling it before the job completes. For example, a job that takes more than 60 seconds to complete has a better chance of being stopped than a job that takes 10 seconds to complete.
		 */
		jobTimeoutMs?: string;
		/**
		 * The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
		 */
		labels?: Record<string, JSONValue>;
		/**
		 * A target limit on the rate of slot consumption by this job. If set to a value > 0, BigQuery will attempt to limit the rate of slot consumption by this job to keep it below the configured limit, even if the job is eligible for more slots based on fair scheduling. The unused slots will be available for other jobs and queries to use. Note: This feature is not yet generally available.
		 */
		maxSlots?: number;
		/**
		 * The reservation that job would use. User can specify a reservation to execute the job. If reservation is not set, reservation is determined based on the rules defined by the reservation assignments. The expected format is `projects/{project}/locations/{location}/reservations/{reservation}`. Forces the query to use on-demand billing when set to `none`, which requires the project or organization to have `reservation_override_mode` set to `ALLOW_ANY_OVERRIDE`.
		 */
		reservation?: string;
	};
	/**
	 * Opaque ID field of the job.
	 */
	id?: string;
	/**
	 * The type of the resource.
	 */
	kind?: string;
	/**
	 * A hash of this resource.
	 */
	etag?: string;
	/**
	 * A URL that can be used to access the resource again.
	 */
	selfLink?: string;
	/**
	 * The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
	 */
	status?: {
		/**
		 * Running state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.
		 */
		state?: string;
		/**
		 * Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
		 */
		errorResult?: {
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
		};
		/**
		 * The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has not completed or was unsuccessful.
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
	};
	/**
	 * Information about the job, including starting time and ending time of the job.
	 */
	statistics?: {
		/**
		 * [TrustedTester] Job progress (0.0 -> 1.0) for LOAD and EXTRACT jobs.
		 */
		completionRatio?: number;
		/**
		 * Statistics for a copy job.
		 */
		copy?: {
			/**
			 * Number of logical bytes copied to the destination table.
			 */
			copiedLogicalBytes?: string;
			/**
			 * Number of rows copied to the destination table.
			 */
			copiedRows?: string;
			/**
			 * Destination region for a cross-region copy job. Not set for in-region copy jobs.
			 */
			remoteDestinationRegion?: string;
		};
		/**
		 * Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
		 */
		creationTime?: string;
		/**
		 * Statistics for data-masking. Present only for query and extract jobs.
		 */
		dataMaskingStatistics?: {
			/**
			 * Whether any accessed data was protected by the data masking.
			 */
			dataMaskingApplied?: boolean;
		};
		/**
		 * Name of edition corresponding to the reservation for this job at the time of this update. Values: `STANDARD` - Standard edition; `ENTERPRISE` - Enterprise edition; `ENTERPRISE_PLUS` - Enterprise Plus edition.
		 */
		edition?: string;
		/**
		 * End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.
		 */
		endTime?: string;
		/**
		 * Statistics for an extract job.
		 */
		extract?: {
			/**
			 * Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the 'destinationUris' field.
			 *
			 * Items: A single destination uri file count value.
			 */
			destinationUriFileCounts?: string[];
			/**
			 * Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes and doesn't have any relationship with the number of actual result bytes extracted in the desired format.
			 */
			inputBytes?: string;
			/**
			 * Describes a timeline of job execution.
			 *
			 * Items: Summary of the state of query execution at a given time.
			 */
			timeline?: {
				/**
				 * Total number of active workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample.
				 */
				activeUnits?: string;
				/**
				 * Total parallel units of work completed by this query.
				 */
				completedUnits?: string;
				/**
				 * Milliseconds elapsed since the start of query execution.
				 */
				elapsedMs?: string;
				/**
				 * Units of work that can be scheduled immediately. Providing additional slots for these units of work will accelerate the query, if no other query in the reservation needs additional slots.
				 */
				estimatedRunnableUnits?: string;
				/**
				 * Total units of work remaining for the query. This number can be revised (increased or decreased) while the query is running.
				 */
				pendingUnits?: string;
				/**
				 * Total shuffle usage ratio in shuffle RAM per reservation of this query. This will be provided for reservation customers only.
				 */
				shuffleRamUsageRatio?: number;
				/**
				 * Cumulative slot-ms consumed by the query.
				 */
				totalSlotMs?: string;
			}[];
		};
		/**
		 * The duration in milliseconds of the execution of the final attempt of this job, as BigQuery may internally re-attempt to execute the job.
		 */
		finalExecutionDurationMs?: string;
		/**
		 * The list of remote regions from which a global query accesses data. This field is populated only for parent global query jobs in the primary execution region. It is empty for child global query jobs and single-region queries. For more information, see [Global queries](https://cloud.google.com/bigquery/docs/global-queries).
		 *
		 * Items: A single global query remote region value.
		 */
		globalQueryRemoteRegions?: string[];
		/**
		 * Statistics for a load job.
		 */
		load?: {
			/**
			 * The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.
			 */
			badRecords?: string;
			/**
			 * Number of bytes of source data in a load job.
			 */
			inputFileBytes?: string;
			/**
			 * Number of source files in a load job.
			 */
			inputFiles?: string;
			/**
			 * Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change.
			 */
			outputBytes?: string;
			/**
			 * Number of rows imported in a load job. Note that while an import job is in the running state, this value may change.
			 */
			outputRows?: string;
			/**
			 * Describes a timeline of job execution.
			 *
			 * Items: Summary of the state of query execution at a given time.
			 */
			timeline?: {
				/**
				 * Total number of active workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample.
				 */
				activeUnits?: string;
				/**
				 * Total parallel units of work completed by this query.
				 */
				completedUnits?: string;
				/**
				 * Milliseconds elapsed since the start of query execution.
				 */
				elapsedMs?: string;
				/**
				 * Units of work that can be scheduled immediately. Providing additional slots for these units of work will accelerate the query, if no other query in the reservation needs additional slots.
				 */
				estimatedRunnableUnits?: string;
				/**
				 * Total units of work remaining for the query. This number can be revised (increased or decreased) while the query is running.
				 */
				pendingUnits?: string;
				/**
				 * Total shuffle usage ratio in shuffle RAM per reservation of this query. This will be provided for reservation customers only.
				 */
				shuffleRamUsageRatio?: number;
				/**
				 * Cumulative slot-ms consumed by the query.
				 */
				totalSlotMs?: string;
			}[];
		};
		/**
		 * Number of child jobs executed.
		 */
		numChildJobs?: string;
		/**
		 * Reference to the parent global query job, if this is a child global query job. This field is populated only for child global query jobs (remote subqueries or cross-region table copy jobs) executed in remote regions on behalf of a global query. It contains the project ID, job ID, and location of the parent global query job. It is unset for parent global query jobs and single-region queries. For more information, see [Global queries](https://cloud.google.com/bigquery/docs/global-queries).
		 */
		parentGlobalQueryJob?: {
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
		 * If this is a child job, specifies the job ID of the parent.
		 */
		parentJobId?: string;
		/**
		 * Statistics for a query job.
		 */
		query?: {
			/**
			 * BI Engine specific Statistics.
			 */
			biEngineStatistics?: {
				/**
				 * Specifies which mode of BI Engine acceleration was performed (if any). Values: `BI_ENGINE_DISABLED` - BI Engine acceleration was attempted but disabled. bi_engine_reasons specifies a more detailed reason; `PARTIAL_INPUT` - Some inputs were accelerated using BI Engine. See bi_engine_reasons for why parts of the query were not accelerated; `FULL_INPUT` - All of the query inputs were accelerated using BI Engine; `FULL_QUERY` - All of the query was accelerated using BI Engine.
				 */
				accelerationMode?: string;
				/**
				 * Specifies which mode of BI Engine acceleration was performed (if any). Values: `DISABLED` - BI Engine disabled the acceleration. bi_engine_reasons specifies a more detailed reason; `PARTIAL` - Part of the query was accelerated using BI Engine. See bi_engine_reasons for why parts of the query were not accelerated; `FULL` - All of the query was accelerated using BI Engine.
				 */
				biEngineMode?: string;
				/**
				 * In case of DISABLED or PARTIAL bi_engine_mode, these contain the explanatory reasons as to why BI Engine could not accelerate. In case the full query was accelerated, this field is not populated.
				 *
				 * Items: Reason why BI Engine didn't accelerate the query (or sub-query).
				 */
				biEngineReasons?: {
					/**
					 * High-level BI Engine reason for partial or disabled acceleration. Values: `NO_RESERVATION` - No reservation available for BI Engine acceleration; `INSUFFICIENT_RESERVATION` - Not enough memory available for BI Engine acceleration; `UNSUPPORTED_SQL_TEXT` - This particular SQL text is not supported for acceleration by BI Engine; `INPUT_TOO_LARGE` - Input too large for acceleration by BI Engine; `OTHER_REASON` - Catch-all code for all other cases for partial or disabled acceleration; `TABLE_EXCLUDED` - One or more tables were not eligible for BI Engine acceleration.
					 */
					code?: string;
					/**
					 * Free form human-readable reason for partial or disabled acceleration.
					 */
					message?: string;
				}[];
			};
			/**
			 * Billing tier for the job. This is a BigQuery-specific concept which is not related to the Google Cloud notion of "free tier". The value here is a measure of the query's resource consumption relative to the amount of data scanned. For on-demand queries, the limit is 100, and all queries within this limit are billed at the standard on-demand rates. On-demand queries that exceed this limit will fail with a billingTierLimitExceeded error.
			 */
			billingTier?: number;
			/**
			 * Whether the query result was fetched from the query cache.
			 */
			cacheHit?: boolean;
			/**
			 * Referenced dataset for DCL statement.
			 */
			dclTargetDataset?: {
				/**
				 * The ID of the project containing this dataset.
				 */
				projectId?: string;
				/**
				 * A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
				 */
				datasetId?: string;
			};
			/**
			 * Referenced table for DCL statement.
			 */
			dclTargetTable?: {
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
			 * Referenced view for DCL statement.
			 */
			dclTargetView?: {
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
			 * The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries.
			 */
			ddlAffectedRowAccessPolicyCount?: string;
			/**
			 * The table after rename. Present only for ALTER TABLE RENAME TO query.
			 */
			ddlDestinationTable?: {
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
			 * The DDL operation performed, possibly dependent on the pre-existence of the DDL target.
			 */
			ddlOperationPerformed?: string;
			/**
			 * The DDL target dataset. Present only for CREATE/ALTER/DROP SCHEMA(dataset) queries.
			 */
			ddlTargetDataset?: {
				/**
				 * The ID of the project containing this dataset.
				 */
				projectId?: string;
				/**
				 * A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
				 */
				datasetId?: string;
			};
			/**
			 * The DDL target routine. Present only for CREATE/DROP FUNCTION/PROCEDURE queries.
			 */
			ddlTargetRoutine?: {
				/**
				 * The ID of the dataset containing this routine.
				 */
				datasetId?: string;
				/**
				 * The ID of the project containing this routine.
				 */
				projectId?: string;
				/**
				 * The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
				 */
				routineId?: string;
			};
			/**
			 * The DDL target row access policy. Present only for CREATE/DROP ROW ACCESS POLICY queries.
			 */
			ddlTargetRowAccessPolicy?: {
				/**
				 * The ID of the dataset containing this row access policy.
				 */
				datasetId?: string;
				/**
				 * The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
				 */
				policyId?: string;
				/**
				 * The ID of the project containing this row access policy.
				 */
				projectId?: string;
				/**
				 * The ID of the table containing this row access policy.
				 */
				tableId?: string;
			};
			/**
			 * The DDL target table. Present only for CREATE/DROP TABLE/VIEW and DROP ALL ROW ACCESS POLICIES queries.
			 */
			ddlTargetTable?: {
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
			 * The original estimate of bytes processed for the job.
			 */
			estimatedBytesProcessed?: string;
			/**
			 * Stats for EXPORT DATA statement.
			 */
			exportDataStatistics?: {
				/**
				 * Number of destination files generated in case of EXPORT DATA statement only.
				 */
				fileCount?: string;
				/**
				 * [Alpha] Number of destination rows generated in case of EXPORT DATA statement only.
				 */
				rowCount?: string;
			};
			/**
			 * Job cost breakdown as bigquery internal cost and external service costs.
			 *
			 * Items: The external service cost is a portion of the total cost, these costs are not additive with total_bytes_billed. Moreover, this field only track external service costs that will show up as BigQuery costs (e.g. training BigQuery ML job with google cloud CAIP or Automl Tables services), not other costs which may be accrued by running the query (e.g. reading from Bigtable or Cloud Storage). The external service costs with different billing sku (e.g. CAIP job is charged based on VM usage) are converted to BigQuery billed_bytes and slot_ms with equivalent amount of US dollars. Services may not directly correlate to these metrics, but these are the equivalents for billing purposes. Output only.
			 */
			externalServiceCosts?: {
				/**
				 * The billing method used for the external job. This field, set to `SERVICES_SKU`, is only used when billing under the services SKU. Otherwise, it is unspecified for backward compatibility.
				 */
				billingMethod?: string;
				/**
				 * External service cost in terms of bigquery bytes billed.
				 */
				bytesBilled?: string;
				/**
				 * External service cost in terms of bigquery bytes processed.
				 */
				bytesProcessed?: string;
				/**
				 * External service name.
				 */
				externalService?: string;
				/**
				 * Non-preemptable reserved slots used for external job. For example, reserved slots for Cloua AI Platform job are the VM usages converted to BigQuery slot with equivalent mount of price.
				 */
				reservedSlotCount?: string;
				/**
				 * External service cost in terms of bigquery slot milliseconds.
				 */
				slotMs?: string;
			}[];
			/**
			 * Statistics related to GenAI usage in the query.
			 */
			genAiStats?: {
				/**
				 * Job level error stats across all GenAi functions.
				 */
				errorStats?: {
					/**
					 * A list of unique errors at query level (up to 5, truncated to 100 chars).
					 *
					 * Items: A single error value.
					 */
					errors?: string[];
				};
				/**
				 * Function level stats for GenAI Functions. For more information, see [Generative AI overview](https://docs.cloud.google.com/bigquery/docs/generative-ai-overview).
				 *
				 * Items: Provides statistics for each Ai function call within a query.
				 */
				functionStats?: {
					/**
					 * Cache stats for the function.
					 */
					cacheStats?: {
						/**
						 * Number of rows served from cache.
						 */
						numCacheHitRows?: string;
					};
					/**
					 * Cost optimization stats if applied on the rows processed by the function.
					 */
					costOptimizationStats?: {
						/**
						 * System generated message to provide insights into cost optimization state.
						 */
						message?: string;
						/**
						 * Number of rows inferred via cost optimized workflow.
						 */
						numCostOptimizedRows?: string;
					};
					/**
					 * Error stats for the function.
					 */
					errorStats?: {
						/**
						 * A list of unique errors at function level (up to 5, truncated to 100 chars).
						 *
						 * Items: A single error value.
						 */
						errors?: string[];
						/**
						 * Number of failed rows processed by the function.
						 */
						numFailedRows?: string;
					};
					/**
					 * Name of the function.
					 */
					functionName?: string;
					/**
					 * Number of rows processed by this GenAi function. This includes all cost_optimized, llm_inferred and failed_rows.
					 */
					numProcessedRows?: string;
					/**
					 * User input prompt of the function (truncated to 20 chars).
					 */
					prompt?: string;
				}[];
			};
			/**
			 * Statistics related to incremental query results, if enabled for the query. This feature is not yet available.
			 */
			incrementalResultStats?: {
				/**
				 * Reason why incremental query results are/were not written by the query. Values: `OTHER` - Incremental results are/were disabled for reasons not covered by the other enum values, e.g. runtime issues; `UNSUPPORTED_OPERATOR` - Query includes an operation that is not supported.
				 */
				disabledReason?: string;
				/**
				 * Additional human-readable clarification, if available, for DisabledReason.
				 */
				disabledReasonDetails?: string;
				/**
				 * The time at which the first incremental result was written. If the query needed to restart internally, this only describes the final attempt.
				 */
				firstIncrementalRowTime?: string;
				/**
				 * Number of rows that were in the latest result set before query completion.
				 */
				incrementalRowCount?: string;
				/**
				 * The time at which the last incremental result was written. Does not include the final result written after query completion.
				 */
				lastIncrementalRowTime?: string;
				/**
				 * The time at which the result table's contents were modified. May be absent if no results have been written or the query has completed.
				 */
				resultSetLastModifyTime?: string;
				/**
				 * The time at which the result table's contents were completely replaced. May be absent if no results have been written or the query has completed.
				 */
				resultSetLastReplaceTime?: string;
			};
			/**
			 * Statistics for a LOAD query.
			 */
			loadQueryStatistics?: {
				/**
				 * The number of bad records encountered while processing a LOAD query. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.
				 */
				badRecords?: string;
				/**
				 * This field is deprecated. The number of bytes of source data copied over the network for a `LOAD` query. `transferred_bytes` has the canonical value for physical transferred bytes, which is used for BigQuery Omni billing.
				 */
				bytesTransferred?: string;
				/**
				 * Number of bytes of source data in a LOAD query.
				 */
				inputFileBytes?: string;
				/**
				 * Number of source files in a LOAD query.
				 */
				inputFiles?: string;
				/**
				 * Size of the loaded data in bytes. Note that while a LOAD query is in the running state, this value may change.
				 */
				outputBytes?: string;
				/**
				 * Number of rows imported in a LOAD query. Note that while a LOAD query is in the running state, this value may change.
				 */
				outputRows?: string;
			};
			/**
			 * Statistics of materialized views of a query job.
			 */
			materializedViewStatistics?: {
				/**
				 * Materialized views considered for the query job. Only certain materialized views are used. For a detailed list, see the child message. If many materialized views are considered, then the list might be incomplete.
				 *
				 * Items: A materialized view considered for a query job.
				 */
				materializedView?: {
					/**
					 * Whether the materialized view is chosen for the query. A materialized view can be chosen to rewrite multiple parts of the same query. If a materialized view is chosen to rewrite any part of the query, then this field is true, even if the materialized view was not chosen to rewrite others parts.
					 */
					chosen?: boolean;
					/**
					 * If present, specifies a best-effort estimation of the bytes saved by using the materialized view rather than its base tables.
					 */
					estimatedBytesSaved?: string;
					/**
					 * If present, specifies the reason why the materialized view was not chosen for the query. Values: `NO_DATA` - View has no cached data because it has not refreshed yet; `COST` - The estimated cost of the view is more expensive than another view or the base table. Note: The estimate cost might not match the billed cost; `BASE_TABLE_TRUNCATED` - View has no cached data because a base table is truncated; `BASE_TABLE_DATA_CHANGE` - View is invalidated because of a data change in one or more base tables. It could be any recent change if the [`maxStaleness`](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#Table.FIELDS.max_staleness) option is not set for the view, or otherwise any change outside of the staleness window; `BASE_TABLE_PARTITION_EXPIRATION_CHANGE` - View is invalidated because a base table's partition expiration has changed; and more - see the API reference.
					 */
					rejectedReason?: string;
					/**
					 * The candidate materialized view.
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
				}[];
			};
			/**
			 * Statistics of metadata cache usage in a query for BigLake tables.
			 */
			metadataCacheStatistics?: {
				/**
				 * Set for the Metadata caching eligible tables referenced in the query.
				 *
				 * Items: Table level detail on the usage of metadata caching. Only set for Metadata caching eligible tables referenced in the query.
				 */
				tableMetadataCacheUsage?: {
					/**
					 * Free form human-readable reason metadata caching was unused for the job.
					 */
					explanation?: string;
					/**
					 * The column metadata index pruning statistics.
					 */
					pruningStats?: {
						/**
						 * The number of parallel inputs matched.
						 */
						postCmetaPruningParallelInputCount?: string;
						/**
						 * The number of partitions matched.
						 */
						postCmetaPruningPartitionCount?: string;
						/**
						 * The number of parallel inputs scanned.
						 */
						preCmetaPruningParallelInputCount?: string;
					};
					/**
					 * Duration since last refresh as of this job for managed tables (indicates metadata cache staleness as seen by this job).
					 */
					staleness?: string;
					/**
					 * Metadata caching eligible table referenced in the query.
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
					 * [Table type](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#Table.FIELDS.type).
					 */
					tableType?: string;
					/**
					 * Reason for not using metadata caching for the table. Values: `EXCEEDED_MAX_STALENESS` - Metadata cache was outside the table's maxStaleness; `METADATA_CACHING_NOT_ENABLED` - Metadata caching feature is not enabled. [Update BigLake tables](https://cloud.google.com/bigquery/docs/create-cloud-storage-table-biglake#update-biglake-tables) to enable the metadata caching; `OTHER_REASON` - Other unknown reason.
					 */
					unusedReason?: string;
				}[];
			};
			/**
			 * Statistics of a BigQuery ML training job.
			 */
			mlStatistics?: {
				/**
				 * Trials of a [hyperparameter tuning job](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) sorted by trial_id.
				 *
				 * Items: Training info of a trial in [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.
				 */
				hparamTrials?: {
					/**
					 * Ending time of the trial.
					 */
					endTimeMs?: string;
					/**
					 * Error message for FAILED and INFEASIBLE trial.
					 */
					errorMessage?: string;
					/**
					 * Loss computed on the eval data at the end of trial.
					 */
					evalLoss?: number;
					/**
					 * Evaluation metrics of this trial calculated on the test data. Empty in Job API.
					 */
					evaluationMetrics?: {
						/**
						 * Populated for ARIMA models.
						 */
						arimaForecastingMetrics?: {
							/**
							 * Arima model fitting metrics.
							 *
							 * Items: ARIMA model fitting metrics.
							 */
							arimaFittingMetrics?: {
								/**
								 * AIC.
								 */
								aic?: number;
								/**
								 * Log-likelihood.
								 */
								logLikelihood?: number;
								/**
								 * Variance.
								 */
								variance?: number;
							}[];
							/**
							 * Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case.
							 *
							 * Items: Model evaluation metrics for a single ARIMA forecasting model.
							 */
							arimaSingleModelForecastingMetrics?: {
								/**
								 * Arima fitting metrics.
								 */
								arimaFittingMetrics?: {
									/**
									 * AIC.
									 */
									aic?: number;
									/**
									 * Log-likelihood.
									 */
									logLikelihood?: number;
									/**
									 * Variance.
									 */
									variance?: number;
								};
								/**
								 * Is arima model fitted with drift or not. It is always false when d is not 1.
								 */
								hasDrift?: boolean;
								/**
								 * If true, holiday_effect is a part of time series decomposition result.
								 */
								hasHolidayEffect?: boolean;
								/**
								 * If true, spikes_and_dips is a part of time series decomposition result.
								 */
								hasSpikesAndDips?: boolean;
								/**
								 * If true, step_changes is a part of time series decomposition result.
								 */
								hasStepChanges?: boolean;
								/**
								 * Non-seasonal order.
								 */
								nonSeasonalOrder?: {
									/**
									 * Order of the differencing part.
									 */
									d?: string;
									/**
									 * Order of the autoregressive part.
									 */
									p?: string;
									/**
									 * Order of the moving-average part.
									 */
									q?: string;
								};
								/**
								 * Seasonal periods. Repeated because multiple periods are supported for one time series. Values: `NO_SEASONALITY` - No seasonality; `DAILY` - Daily period, 24 hours; `WEEKLY` - Weekly period, 7 days; `MONTHLY` - Monthly period, 30 days or irregular; `QUARTERLY` - Quarterly period, 90 days or irregular; `YEARLY` - Yearly period, 365 days or irregular; `HOURLY` - Hourly period, 1 hour.
								 *
								 * Items: A single seasonal period value.
								 */
								seasonalPeriods?: string[];
								/**
								 * The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.
								 */
								timeSeriesId?: string;
								/**
								 * The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.
								 *
								 * Items: A single time series id value.
								 */
								timeSeriesIds?: string[];
							}[];
							/**
							 * Whether Arima model fitted with drift or not. It is always false when d is not 1.
							 *
							 * Items: A single has drift value.
							 */
							hasDrift?: boolean[];
							/**
							 * Non-seasonal order.
							 *
							 * Items: Arima order, can be used for both non-seasonal and seasonal parts.
							 */
							nonSeasonalOrder?: {
								/**
								 * Order of the differencing part.
								 */
								d?: string;
								/**
								 * Order of the autoregressive part.
								 */
								p?: string;
								/**
								 * Order of the moving-average part.
								 */
								q?: string;
							}[];
							/**
							 * Seasonal periods. Repeated because multiple periods are supported for one time series. Values: `NO_SEASONALITY` - No seasonality; `DAILY` - Daily period, 24 hours; `WEEKLY` - Weekly period, 7 days; `MONTHLY` - Monthly period, 30 days or irregular; `QUARTERLY` - Quarterly period, 90 days or irregular; `YEARLY` - Yearly period, 365 days or irregular; `HOURLY` - Hourly period, 1 hour.
							 *
							 * Items: A single seasonal period value.
							 */
							seasonalPeriods?: string[];
							/**
							 * Id to differentiate different time series for the large-scale case.
							 *
							 * Items: A single time series id value.
							 */
							timeSeriesId?: string[];
						};
						/**
						 * Populated for binary classification/classifier models.
						 */
						binaryClassificationMetrics?: {
							/**
							 * Aggregate classification metrics.
							 */
							aggregateClassificationMetrics?: {
								/**
								 * Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.
								 */
								accuracy?: number;
								/**
								 * The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.
								 */
								f1Score?: number;
								/**
								 * Logarithmic Loss. For multiclass this is a macro-averaged metric.
								 */
								logLoss?: number;
								/**
								 * Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier.
								 */
								precision?: number;
								/**
								 * Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric.
								 */
								recall?: number;
								/**
								 * Area Under a ROC Curve. For multiclass this is a macro-averaged metric.
								 */
								rocAuc?: number;
								/**
								 * Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classification models this is the confidence threshold.
								 */
								threshold?: number;
							};
							/**
							 * Binary confusion matrix at multiple thresholds.
							 *
							 * Items: Confusion matrix for binary classification models.
							 */
							binaryConfusionMatrixList?: {
								/**
								 * The fraction of predictions given the correct label.
								 */
								accuracy?: number;
								/**
								 * The equally weighted average of recall and precision.
								 */
								f1Score?: number;
								/**
								 * Number of false samples predicted as false.
								 */
								falseNegatives?: string;
								/**
								 * Number of false samples predicted as true.
								 */
								falsePositives?: string;
								/**
								 * Threshold value used when computing each of the following metric.
								 */
								positiveClassThreshold?: number;
								/**
								 * The fraction of actual positive predictions that had positive actual labels.
								 */
								precision?: number;
								/**
								 * The fraction of actual positive labels that were given a positive prediction.
								 */
								recall?: number;
								/**
								 * Number of true samples predicted as false.
								 */
								trueNegatives?: string;
								/**
								 * Number of true samples predicted as true.
								 */
								truePositives?: string;
							}[];
							/**
							 * Label representing the negative class.
							 */
							negativeLabel?: string;
							/**
							 * Label representing the positive class.
							 */
							positiveLabel?: string;
						};
						/**
						 * Populated for clustering models.
						 */
						clusteringMetrics?: {
							/**
							 * Information for all clusters.
							 *
							 * Items: Message containing the information about one cluster.
							 */
							clusters?: {
								/**
								 * Centroid id.
								 */
								centroidId?: string;
								/**
								 * Count of training data rows that were assigned to this cluster.
								 */
								count?: string;
								/**
								 * Values of highly variant features for this cluster.
								 *
								 * Items: Representative value of a single feature within the cluster.
								 */
								featureValues?: {
									/**
									 * The categorical feature value.
									 */
									categoricalValue?: {
										/**
										 * Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category "_OTHER_" and count as aggregate counts of remaining categories.
										 *
										 * Items: Represents the count of a single category within the cluster.
										 */
										categoryCounts?: {
											/**
											 * The name of category.
											 */
											category?: string;
											/**
											 * The count of training samples matching the category within the cluster.
											 */
											count?: string;
										}[];
									};
									/**
									 * The feature column name.
									 */
									featureColumn?: string;
									/**
									 * The numerical feature value. This is the centroid value for this feature.
									 */
									numericalValue?: number;
								}[];
							}[];
							/**
							 * Davies-Bouldin index.
							 */
							daviesBouldinIndex?: number;
							/**
							 * Mean of squared distances between each sample to its cluster centroid.
							 */
							meanSquaredDistance?: number;
						};
						/**
						 * Evaluation metrics when the model is a dimensionality reduction model, which currently includes PCA.
						 */
						dimensionalityReductionMetrics?: {
							/**
							 * Total percentage of variance explained by the selected principal components.
							 */
							totalExplainedVarianceRatio?: number;
						};
						/**
						 * Populated for multi-class classification/classifier models.
						 */
						multiClassClassificationMetrics?: {
							/**
							 * Aggregate classification metrics.
							 */
							aggregateClassificationMetrics?: {
								/**
								 * Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.
								 */
								accuracy?: number;
								/**
								 * The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.
								 */
								f1Score?: number;
								/**
								 * Logarithmic Loss. For multiclass this is a macro-averaged metric.
								 */
								logLoss?: number;
								/**
								 * Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier.
								 */
								precision?: number;
								/**
								 * Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric.
								 */
								recall?: number;
								/**
								 * Area Under a ROC Curve. For multiclass this is a macro-averaged metric.
								 */
								rocAuc?: number;
								/**
								 * Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classification models this is the confidence threshold.
								 */
								threshold?: number;
							};
							/**
							 * Confusion matrix at different thresholds.
							 *
							 * Items: Confusion matrix for multi-class classification models.
							 */
							confusionMatrixList?: {
								/**
								 * Confidence threshold used when computing the entries of the confusion matrix.
								 */
								confidenceThreshold?: number;
								/**
								 * One row per actual label.
								 *
								 * Items: A single row in the confusion matrix.
								 */
								rows?: {
									/**
									 * The original label of this row.
									 */
									actualLabel?: string;
									/**
									 * Info describing predicted label distribution.
									 *
									 * Items: A single entry in the confusion matrix.
									 */
									entries?: {
										/**
										 * Number of items being predicted as this label.
										 */
										itemCount?: string;
										/**
										 * The predicted label. For confidence_threshold > 0, we will also add an entry indicating the number of items under the confidence threshold.
										 */
										predictedLabel?: string;
									}[];
								}[];
							}[];
						};
						/**
						 * Populated for implicit feedback type matrix factorization models.
						 */
						rankingMetrics?: {
							/**
							 * Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by the original rank.
							 */
							averageRank?: number;
							/**
							 * Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the users.
							 */
							meanAveragePrecision?: number;
							/**
							 * Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the rating exists or not.
							 */
							meanSquaredError?: number;
							/**
							 * A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal rank measured by the original ratings.
							 */
							normalizedDiscountedCumulativeGain?: number;
						};
						/**
						 * Populated for regression models and explicit feedback type matrix factorization models.
						 */
						regressionMetrics?: {
							/**
							 * Mean absolute error.
							 */
							meanAbsoluteError?: number;
							/**
							 * Mean squared error.
							 */
							meanSquaredError?: number;
							/**
							 * Mean squared log error.
							 */
							meanSquaredLogError?: number;
							/**
							 * Median absolute error.
							 */
							medianAbsoluteError?: number;
							/**
							 * R^2 score. This corresponds to r2_score in ML.EVALUATE.
							 */
							rSquared?: number;
						};
					};
					/**
					 * The hyperprameters selected for this trial.
					 */
					hparams?: {
						/**
						 * Activation function of the neural nets.
						 */
						activationFn?: string;
						/**
						 * If true, detect step changes and make data adjustment in the input time series.
						 */
						adjustStepChanges?: boolean;
						/**
						 * Whether to use approximate feature contribution method in XGBoost model explanation for global explain.
						 */
						approxGlobalFeatureContrib?: boolean;
						/**
						 * Whether to enable auto ARIMA or not.
						 */
						autoArima?: boolean;
						/**
						 * The max value of the sum of non-seasonal p and q.
						 */
						autoArimaMaxOrder?: string;
						/**
						 * The min value of the sum of non-seasonal p and q.
						 */
						autoArimaMinOrder?: string;
						/**
						 * Whether to calculate class weights automatically based on the popularity of each label.
						 */
						autoClassWeights?: boolean;
						/**
						 * Batch size for dnn models.
						 */
						batchSize?: string;
						/**
						 * Booster type for boosted tree models. Values: `GBTREE` - Gbtree booster; `DART` - Dart booster.
						 */
						boosterType?: string;
						/**
						 * Budget in hours for AutoML training.
						 */
						budgetHours?: number;
						/**
						 * Whether or not p-value test should be computed for this model. Only available for linear and logistic regression models.
						 */
						calculatePValues?: boolean;
						/**
						 * Categorical feature encoding method. Values: `ONE_HOT_ENCODING` - Applies one-hot encoding; `LABEL_ENCODING` - Applies label encoding; `DUMMY_ENCODING` - Applies dummy encoding.
						 */
						categoryEncodingMethod?: string;
						/**
						 * If true, clean spikes and dips in the input time series.
						 */
						cleanSpikesAndDips?: boolean;
						/**
						 * Enums for color space, used for processing images in Object Table. See more details in [TensorFlow I/O color space tutorial](https://www.tensorflow.org/io/tutorials/colorspace). Values: `RGB` - RGB; `HSV` - HSV; `YIQ` - YIQ; `YUV` - YUV; `GRAYSCALE` - GRAYSCALE.
						 */
						colorSpace?: string;
						/**
						 * Subsample ratio of columns for each level for boosted tree models.
						 */
						colsampleBylevel?: number;
						/**
						 * Subsample ratio of columns for each node(split) for boosted tree models.
						 */
						colsampleBynode?: number;
						/**
						 * Subsample ratio of columns when constructing each tree for boosted tree models.
						 */
						colsampleBytree?: number;
						/**
						 * The contribution metric. Applies to contribution analysis models. Allowed formats supported are for summable and summable ratio contribution metrics. These include expressions such as `SUM(x)` or `SUM(x)/SUM(y)`, where x and y are column names from the base table.
						 */
						contributionMetric?: string;
						/**
						 * Type of normalization algorithm for boosted tree models using dart booster. Values: `TREE` - New trees have the same weight of each of dropped trees; `FOREST` - New trees have the same weight of sum of dropped trees.
						 */
						dartNormalizeType?: string;
						/**
						 * The data frequency of a time series. Values: `AUTO_FREQUENCY` - Automatically inferred from timestamps; `YEARLY` - Yearly data; `QUARTERLY` - Quarterly data; `MONTHLY` - Monthly data; `WEEKLY` - Weekly data; `DAILY` - Daily data; `HOURLY` - Hourly data; `PER_MINUTE` - Per-minute data.
						 */
						dataFrequency?: string;
						/**
						 * The column to split data with. This column won't be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: [Data type properties](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data_type_properties).
						 */
						dataSplitColumn?: string;
						/**
						 * The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2.
						 */
						dataSplitEvalFraction?: number;
						/**
						 * The data split type for training and evaluation, e.g. RANDOM. Values: `RANDOM` - Splits data randomly; `CUSTOM` - Splits data with the user provided tags; `SEQUENTIAL` - Splits data sequentially; `NO_SPLIT` - Data split will be skipped; `AUTO_SPLIT` - Splits data automatically: Uses NO_SPLIT if the data size is small. Otherwise uses RANDOM.
						 */
						dataSplitMethod?: string;
						/**
						 * If true, perform decompose time series and save the results.
						 */
						decomposeTimeSeries?: boolean;
						/**
						 * Names of the columns to slice on. Applies to contribution analysis models.
						 *
						 * Items: A single dimension id column value.
						 */
						dimensionIdColumns?: string[];
						/**
						 * Distance type for clustering models. Values: `EUCLIDEAN` - Eculidean distance; `COSINE` - Cosine distance.
						 */
						distanceType?: string;
						/**
						 * Dropout probability for dnn models.
						 */
						dropout?: number;
						/**
						 * Whether to stop early when the loss doesn't improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms.
						 */
						earlyStop?: boolean;
						/**
						 * If true, enable global explanation during training.
						 */
						enableGlobalExplain?: boolean;
						/**
						 * The idle TTL of the endpoint before the resources get destroyed. The default value is 6.5 hours.
						 */
						endpointIdleTtl?: string;
						/**
						 * Feedback type that specifies which algorithm to run for matrix factorization. Values: `IMPLICIT` - Use weighted-als for implicit feedback problems; `EXPLICIT` - Use nonweighted-als for explicit feedback problems.
						 */
						feedbackType?: string;
						/**
						 * Whether the model should include intercept during model training.
						 */
						fitIntercept?: boolean;
						/**
						 * The forecast limit lower bound that was used during ARIMA model training with limits. To see more details of the algorithm: [Forecasts constrained to an interval](https://otexts.com/fpp2/limits.html).
						 */
						forecastLimitLowerBound?: number;
						/**
						 * The forecast limit upper bound that was used during ARIMA model training with limits.
						 */
						forecastLimitUpperBound?: number;
						/**
						 * Hidden units for dnn models.
						 *
						 * Items: A single hidden unit value.
						 */
						hiddenUnits?: string[];
						/**
						 * The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled. Values: `GLOBAL` - Global; `NA` - North America; `JAPAC` - Japan and Asia Pacific: Korea, Greater China, India, Australia, and New Zealand; `EMEA` - Europe, the Middle East and Africa; `LAC` - Latin America and the Caribbean; `AE` - United Arab Emirates; `AR` - Argentina; `AT` - Austria; `AU` - Australia; `BE` - Belgium; `BR` - Brazil; `CA` - Canada; `CH` - Switzerland; `CL` - Chile; `CN` - China; `CO` - Colombia; `CS` - Czechoslovakia; `CZ` - Czech Republic; `DE` - Germany; `DK` - Denmark; `DZ` - Algeria; `EC` - Ecuador; `EE` - Estonia; `EG` - Egypt; `ES` - Spain; `FI` - Finland; `FR` - France; `GB` - Great Britain (United Kingdom); `GR` - Greece; `HK` - Hong Kong; `HU` - Hungary; `ID` - Indonesia; `IE` - Ireland; and more - see the API reference.
						 */
						holidayRegion?: string;
						/**
						 * A list of geographical regions that are used for time series modeling. Values: `GLOBAL` - Global; `NA` - North America; `JAPAC` - Japan and Asia Pacific: Korea, Greater China, India, Australia, and New Zealand; `EMEA` - Europe, the Middle East and Africa; `LAC` - Latin America and the Caribbean; `AE` - United Arab Emirates; `AR` - Argentina; `AT` - Austria; `AU` - Australia; `BE` - Belgium; `BR` - Brazil; `CA` - Canada; `CH` - Switzerland; `CL` - Chile; `CN` - China; `CO` - Colombia; `CS` - Czechoslovakia; `CZ` - Czech Republic; `DE` - Germany; `DK` - Denmark; `DZ` - Algeria; `EC` - Ecuador; `EE` - Estonia; `EG` - Egypt; `ES` - Spain; `FI` - Finland; `FR` - France; `GB` - Great Britain (United Kingdom); `GR` - Greece; `HK` - Hong Kong; `HU` - Hungary; `ID` - Indonesia; `IE` - Ireland; `IL` - Israel; `IN` - India; `IR` - Iran; `IT` - Italy; `JP` - Japan; `KR` - Korea (South); and more - see the API reference.
						 *
						 * Items: A single holiday region value.
						 */
						holidayRegions?: string[];
						/**
						 * The number of periods ahead that need to be forecasted.
						 */
						horizon?: string;
						/**
						 * The target evaluation metrics to optimize the hyperparameters for. Values: `MEAN_ABSOLUTE_ERROR` - Mean absolute error. mean_absolute_error = AVG(ABS(label - predicted)); `MEAN_SQUARED_ERROR` - Mean squared error. mean_squared_error = AVG(POW(label - predicted, 2)); `MEAN_SQUARED_LOG_ERROR` - Mean squared log error. mean_squared_log_error = AVG(POW(LN(1 + label) - LN(1 + predicted), 2)); `MEDIAN_ABSOLUTE_ERROR` - Mean absolute error. median_absolute_error = APPROX_QUANTILES(absolute_error, 2)[OFFSET(1)]; `R_SQUARED` - R^2 score. This corresponds to r2_score in ML.EVALUATE. r_squared = 1 - SUM(squared_error)/(COUNT(label)*VAR_POP(label)); `EXPLAINED_VARIANCE` - Explained variance. explained_variance = 1 - VAR_POP(label_error)/VAR_POP(label); and more - see the API reference.
						 *
						 * Items: A single hparam tuning objective value.
						 */
						hparamTuningObjectives?: string[];
						/**
						 * The id of a Hugging Face model. For example, `google/gemma-2-2b-it`.
						 */
						huggingFaceModelId?: string;
						/**
						 * Include drift when fitting an ARIMA model.
						 */
						includeDrift?: boolean;
						/**
						 * Specifies the initial learning rate for the line search learn rate strategy.
						 */
						initialLearnRate?: number;
						/**
						 * Name of input label columns in training data.
						 *
						 * Items: A single input label column value.
						 */
						inputLabelColumns?: string[];
						/**
						 * Name of the instance weight column for training data. This column isn't be used as a feature.
						 */
						instanceWeightColumn?: string;
						/**
						 * Number of integral steps for the integrated gradients explain method.
						 */
						integratedGradientsNumSteps?: string;
						/**
						 * Name of the column used to determine the rows corresponding to control and test. Applies to contribution analysis models.
						 */
						isTestColumn?: string;
						/**
						 * Item column specified for matrix factorization models.
						 */
						itemColumn?: string;
						/**
						 * The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM.
						 */
						kmeansInitializationColumn?: string;
						/**
						 * The method used to initialize the centroids for kmeans algorithm. Values: `RANDOM` - Initializes the centroids randomly; `CUSTOM` - Initializes the centroids using data specified in kmeans_initialization_column; `KMEANS_PLUS_PLUS` - Initializes with kmeans++.
						 */
						kmeansInitializationMethod?: string;
						/**
						 * L1 regularization coefficient to activations.
						 */
						l1RegActivation?: number;
						/**
						 * L1 regularization coefficient.
						 */
						l1Regularization?: number;
						/**
						 * L2 regularization coefficient.
						 */
						l2Regularization?: number;
						/**
						 * Weights associated with each label class, for rebalancing the training data. Only applicable for classification models.
						 */
						labelClassWeights?: Record<string, JSONValue>;
						/**
						 * Learning rate in training. Used only for iterative training algorithms.
						 */
						learnRate?: number;
						/**
						 * The strategy to determine learn rate for the current iteration. Values: `LINE_SEARCH` - Use line search to determine learning rate; `CONSTANT` - Use a constant learning rate.
						 */
						learnRateStrategy?: string;
						/**
						 * Type of loss function used during training run. Values: `MEAN_SQUARED_LOSS` - Mean squared loss, used for linear regression; `MEAN_LOG_LOSS` - Mean log loss, used for logistic regression.
						 */
						lossType?: string;
						/**
						 * The type of the machine used to deploy and serve the model.
						 */
						machineType?: string;
						/**
						 * The maximum number of iterations in training. Used only for iterative training algorithms.
						 */
						maxIterations?: string;
						/**
						 * Maximum number of trials to run in parallel.
						 */
						maxParallelTrials?: string;
						/**
						 * The maximum number of machine replicas that will be deployed on an endpoint. The default value is equal to min_replica_count.
						 */
						maxReplicaCount?: string;
						/**
						 * The maximum number of time points in a time series that can be used in modeling the trend component of the time series. Don't use this option with the `timeSeriesLengthFraction` or `minTimeSeriesLength` options.
						 */
						maxTimeSeriesLength?: string;
						/**
						 * Maximum depth of a tree for boosted tree models.
						 */
						maxTreeDepth?: string;
						/**
						 * The apriori support minimum. Applies to contribution analysis models.
						 */
						minAprioriSupport?: number;
						/**
						 * When early_stop is true, stops training when accuracy improvement is less than 'min_relative_progress'. Used only for iterative training algorithms.
						 */
						minRelativeProgress?: number;
						/**
						 * The minimum number of machine replicas that will be always deployed on an endpoint. This value must be greater than or equal to 1. The default value is 1.
						 */
						minReplicaCount?: string;
						/**
						 * Minimum split loss for boosted tree models.
						 */
						minSplitLoss?: number;
						/**
						 * The minimum number of time points in a time series that are used in modeling the trend component of the time series. If you use this option you must also set the `timeSeriesLengthFraction` option. This training option ensures that enough time points are available when you use `timeSeriesLengthFraction` in trend modeling. This is particularly important when forecasting multiple time series in a single query using `timeSeriesIdColumn`. If the total number of time points is less than the `minTimeSeriesLength` value, then the query uses all available time points.
						 */
						minTimeSeriesLength?: string;
						/**
						 * Minimum sum of instance weight needed in a child for boosted tree models.
						 */
						minTreeChildWeight?: string;
						/**
						 * The name of a Vertex model garden publisher model. Format is `publishers/{publisher}/models/{model}@{optional_version_id}`.
						 */
						modelGardenModelName?: string;
						/**
						 * The model registry. Values: `VERTEX_AI` - Vertex AI.
						 */
						modelRegistry?: string;
						/**
						 * Google Cloud Storage URI from which the model was imported. Only applicable for imported models.
						 */
						modelUri?: string;
						/**
						 * A specification of the non-seasonal part of the ARIMA model: the three components (p, d, q) are the AR order, the degree of differencing, and the MA order.
						 */
						nonSeasonalOrder?: {
							/**
							 * Order of the differencing part.
							 */
							d?: string;
							/**
							 * Order of the autoregressive part.
							 */
							p?: string;
							/**
							 * Order of the moving-average part.
							 */
							q?: string;
						};
						/**
						 * Number of clusters for clustering models.
						 */
						numClusters?: string;
						/**
						 * Num factors specified for matrix factorization models.
						 */
						numFactors?: string;
						/**
						 * Number of parallel trees constructed during each iteration for boosted tree models.
						 */
						numParallelTree?: string;
						/**
						 * Number of principal components to keep in the PCA model. Must be <= the number of features.
						 */
						numPrincipalComponents?: string;
						/**
						 * Number of trials to run this hyperparameter tuning job.
						 */
						numTrials?: string;
						/**
						 * Optimization strategy for training linear regression models. Values: `BATCH_GRADIENT_DESCENT` - Uses an iterative batch gradient descent algorithm; `NORMAL_EQUATION` - Uses a normal equation to solve linear regression problem.
						 */
						optimizationStrategy?: string;
						/**
						 * Optimizer used for training the neural nets.
						 */
						optimizer?: string;
						/**
						 * The minimum ratio of cumulative explained variance that needs to be given by the PCA model.
						 */
						pcaExplainedVarianceRatio?: number;
						/**
						 * The solver for PCA. Values: `FULL` - Full eigen-decoposition; `RANDOMIZED` - Randomized SVD; `AUTO` - Auto.
						 */
						pcaSolver?: string;
						/**
						 * Corresponds to the label key of a reservation resource used by Vertex AI. To target a SPECIFIC_RESERVATION by name, use `compute.googleapis.com/reservation-name` as the key and specify the name of your reservation as its value.
						 */
						reservationAffinityKey?: string;
						/**
						 * Specifies the reservation affinity type used to configure a Vertex AI resource. The default value is `NO_RESERVATION`. Values: `NO_RESERVATION` - No reservation; `ANY_RESERVATION` - Any reservation; `SPECIFIC_RESERVATION` - Specific reservation.
						 */
						reservationAffinityType?: string;
						/**
						 * Corresponds to the label values of a reservation resource used by Vertex AI. This must be the full resource name of the reservation or reservation block.
						 *
						 * Items: A single reservation affinity value value.
						 */
						reservationAffinityValues?: string[];
						/**
						 * Number of paths for the sampled Shapley explain method.
						 */
						sampledShapleyNumPaths?: string;
						/**
						 * If true, scale the feature values by dividing the feature standard deviation. Currently only apply to PCA.
						 */
						scaleFeatures?: boolean;
						/**
						 * Whether to standardize numerical features. Default to true.
						 */
						standardizeFeatures?: boolean;
						/**
						 * Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models.
						 */
						subsample?: number;
						/**
						 * Based on the selected TF version, the corresponding docker image is used to train external models.
						 */
						tfVersion?: string;
						/**
						 * Column to be designated as time series data for ARIMA model.
						 */
						timeSeriesDataColumn?: string;
						/**
						 * The time series id column that was used during ARIMA model training.
						 */
						timeSeriesIdColumn?: string;
						/**
						 * The time series id columns that were used during ARIMA model training.
						 *
						 * Items: A single time series id column value.
						 */
						timeSeriesIdColumns?: string[];
						/**
						 * The fraction of the interpolated length of the time series that's used to model the time series trend component. All of the time points of the time series are used to model the non-trend component. This training option accelerates modeling training without sacrificing much forecasting accuracy. You can use this option with `minTimeSeriesLength` but not with `maxTimeSeriesLength`.
						 */
						timeSeriesLengthFraction?: number;
						/**
						 * Column to be designated as time series timestamp for ARIMA model.
						 */
						timeSeriesTimestampColumn?: string;
						/**
						 * Tree construction algorithm for boosted tree models. Values: `AUTO` - Use heuristic to choose the fastest method; `EXACT` - Exact greedy algorithm; `APPROX` - Approximate greedy algorithm using quantile sketch and gradient histogram; `HIST` - Fast histogram optimized approximate greedy algorithm.
						 */
						treeMethod?: string;
						/**
						 * Smoothing window size for the trend component. When a positive value is specified, a center moving average smoothing is applied on the history trend. When the smoothing window is out of the boundary at the beginning or the end of the trend, the first element or the last element is padded to fill the smoothing window before the average is applied.
						 */
						trendSmoothingWindowSize?: string;
						/**
						 * User column specified for matrix factorization models.
						 */
						userColumn?: string;
						/**
						 * The version aliases to apply in Vertex AI model registry. Always overwrite if the version aliases exists in a existing model.
						 *
						 * Items: A single vertex ai model version aliase value.
						 */
						vertexAiModelVersionAliases?: string[];
						/**
						 * Hyperparameter for matrix factoration when implicit feedback type is specified.
						 */
						walsAlpha?: number;
						/**
						 * Whether to train a model from the last checkpoint.
						 */
						warmStart?: boolean;
						/**
						 * User-selected XGBoost versions for training of XGBoost models.
						 */
						xgboostVersion?: string;
					};
					/**
					 * Hyperparameter tuning evaluation metrics of this trial calculated on the eval data. Unlike evaluation_metrics, only the fields corresponding to the hparam_tuning_objectives are set.
					 */
					hparamTuningEvaluationMetrics?: {
						/**
						 * Populated for ARIMA models.
						 */
						arimaForecastingMetrics?: {
							/**
							 * Arima model fitting metrics.
							 *
							 * Items: ARIMA model fitting metrics.
							 */
							arimaFittingMetrics?: {
								/**
								 * AIC.
								 */
								aic?: number;
								/**
								 * Log-likelihood.
								 */
								logLikelihood?: number;
								/**
								 * Variance.
								 */
								variance?: number;
							}[];
							/**
							 * Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case.
							 *
							 * Items: Model evaluation metrics for a single ARIMA forecasting model.
							 */
							arimaSingleModelForecastingMetrics?: {
								/**
								 * Arima fitting metrics.
								 */
								arimaFittingMetrics?: {
									/**
									 * AIC.
									 */
									aic?: number;
									/**
									 * Log-likelihood.
									 */
									logLikelihood?: number;
									/**
									 * Variance.
									 */
									variance?: number;
								};
								/**
								 * Is arima model fitted with drift or not. It is always false when d is not 1.
								 */
								hasDrift?: boolean;
								/**
								 * If true, holiday_effect is a part of time series decomposition result.
								 */
								hasHolidayEffect?: boolean;
								/**
								 * If true, spikes_and_dips is a part of time series decomposition result.
								 */
								hasSpikesAndDips?: boolean;
								/**
								 * If true, step_changes is a part of time series decomposition result.
								 */
								hasStepChanges?: boolean;
								/**
								 * Non-seasonal order.
								 */
								nonSeasonalOrder?: {
									/**
									 * Order of the differencing part.
									 */
									d?: string;
									/**
									 * Order of the autoregressive part.
									 */
									p?: string;
									/**
									 * Order of the moving-average part.
									 */
									q?: string;
								};
								/**
								 * Seasonal periods. Repeated because multiple periods are supported for one time series. Values: `NO_SEASONALITY` - No seasonality; `DAILY` - Daily period, 24 hours; `WEEKLY` - Weekly period, 7 days; `MONTHLY` - Monthly period, 30 days or irregular; `QUARTERLY` - Quarterly period, 90 days or irregular; `YEARLY` - Yearly period, 365 days or irregular; `HOURLY` - Hourly period, 1 hour.
								 *
								 * Items: A single seasonal period value.
								 */
								seasonalPeriods?: string[];
								/**
								 * The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.
								 */
								timeSeriesId?: string;
								/**
								 * The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.
								 *
								 * Items: A single time series id value.
								 */
								timeSeriesIds?: string[];
							}[];
							/**
							 * Whether Arima model fitted with drift or not. It is always false when d is not 1.
							 *
							 * Items: A single has drift value.
							 */
							hasDrift?: boolean[];
							/**
							 * Non-seasonal order.
							 *
							 * Items: Arima order, can be used for both non-seasonal and seasonal parts.
							 */
							nonSeasonalOrder?: {
								/**
								 * Order of the differencing part.
								 */
								d?: string;
								/**
								 * Order of the autoregressive part.
								 */
								p?: string;
								/**
								 * Order of the moving-average part.
								 */
								q?: string;
							}[];
							/**
							 * Seasonal periods. Repeated because multiple periods are supported for one time series. Values: `NO_SEASONALITY` - No seasonality; `DAILY` - Daily period, 24 hours; `WEEKLY` - Weekly period, 7 days; `MONTHLY` - Monthly period, 30 days or irregular; `QUARTERLY` - Quarterly period, 90 days or irregular; `YEARLY` - Yearly period, 365 days or irregular; `HOURLY` - Hourly period, 1 hour.
							 *
							 * Items: A single seasonal period value.
							 */
							seasonalPeriods?: string[];
							/**
							 * Id to differentiate different time series for the large-scale case.
							 *
							 * Items: A single time series id value.
							 */
							timeSeriesId?: string[];
						};
						/**
						 * Populated for binary classification/classifier models.
						 */
						binaryClassificationMetrics?: {
							/**
							 * Aggregate classification metrics.
							 */
							aggregateClassificationMetrics?: {
								/**
								 * Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.
								 */
								accuracy?: number;
								/**
								 * The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.
								 */
								f1Score?: number;
								/**
								 * Logarithmic Loss. For multiclass this is a macro-averaged metric.
								 */
								logLoss?: number;
								/**
								 * Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier.
								 */
								precision?: number;
								/**
								 * Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric.
								 */
								recall?: number;
								/**
								 * Area Under a ROC Curve. For multiclass this is a macro-averaged metric.
								 */
								rocAuc?: number;
								/**
								 * Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classification models this is the confidence threshold.
								 */
								threshold?: number;
							};
							/**
							 * Binary confusion matrix at multiple thresholds.
							 *
							 * Items: Confusion matrix for binary classification models.
							 */
							binaryConfusionMatrixList?: {
								/**
								 * The fraction of predictions given the correct label.
								 */
								accuracy?: number;
								/**
								 * The equally weighted average of recall and precision.
								 */
								f1Score?: number;
								/**
								 * Number of false samples predicted as false.
								 */
								falseNegatives?: string;
								/**
								 * Number of false samples predicted as true.
								 */
								falsePositives?: string;
								/**
								 * Threshold value used when computing each of the following metric.
								 */
								positiveClassThreshold?: number;
								/**
								 * The fraction of actual positive predictions that had positive actual labels.
								 */
								precision?: number;
								/**
								 * The fraction of actual positive labels that were given a positive prediction.
								 */
								recall?: number;
								/**
								 * Number of true samples predicted as false.
								 */
								trueNegatives?: string;
								/**
								 * Number of true samples predicted as true.
								 */
								truePositives?: string;
							}[];
							/**
							 * Label representing the negative class.
							 */
							negativeLabel?: string;
							/**
							 * Label representing the positive class.
							 */
							positiveLabel?: string;
						};
						/**
						 * Populated for clustering models.
						 */
						clusteringMetrics?: {
							/**
							 * Information for all clusters.
							 *
							 * Items: Message containing the information about one cluster.
							 */
							clusters?: {
								/**
								 * Centroid id.
								 */
								centroidId?: string;
								/**
								 * Count of training data rows that were assigned to this cluster.
								 */
								count?: string;
								/**
								 * Values of highly variant features for this cluster.
								 *
								 * Items: Representative value of a single feature within the cluster.
								 */
								featureValues?: {
									/**
									 * The categorical feature value.
									 */
									categoricalValue?: {
										/**
										 * Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category "_OTHER_" and count as aggregate counts of remaining categories.
										 *
										 * Items: Represents the count of a single category within the cluster.
										 */
										categoryCounts?: {
											/**
											 * The name of category.
											 */
											category?: string;
											/**
											 * The count of training samples matching the category within the cluster.
											 */
											count?: string;
										}[];
									};
									/**
									 * The feature column name.
									 */
									featureColumn?: string;
									/**
									 * The numerical feature value. This is the centroid value for this feature.
									 */
									numericalValue?: number;
								}[];
							}[];
							/**
							 * Davies-Bouldin index.
							 */
							daviesBouldinIndex?: number;
							/**
							 * Mean of squared distances between each sample to its cluster centroid.
							 */
							meanSquaredDistance?: number;
						};
						/**
						 * Evaluation metrics when the model is a dimensionality reduction model, which currently includes PCA.
						 */
						dimensionalityReductionMetrics?: {
							/**
							 * Total percentage of variance explained by the selected principal components.
							 */
							totalExplainedVarianceRatio?: number;
						};
						/**
						 * Populated for multi-class classification/classifier models.
						 */
						multiClassClassificationMetrics?: {
							/**
							 * Aggregate classification metrics.
							 */
							aggregateClassificationMetrics?: {
								/**
								 * Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.
								 */
								accuracy?: number;
								/**
								 * The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.
								 */
								f1Score?: number;
								/**
								 * Logarithmic Loss. For multiclass this is a macro-averaged metric.
								 */
								logLoss?: number;
								/**
								 * Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier.
								 */
								precision?: number;
								/**
								 * Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric.
								 */
								recall?: number;
								/**
								 * Area Under a ROC Curve. For multiclass this is a macro-averaged metric.
								 */
								rocAuc?: number;
								/**
								 * Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classification models this is the confidence threshold.
								 */
								threshold?: number;
							};
							/**
							 * Confusion matrix at different thresholds.
							 *
							 * Items: Confusion matrix for multi-class classification models.
							 */
							confusionMatrixList?: {
								/**
								 * Confidence threshold used when computing the entries of the confusion matrix.
								 */
								confidenceThreshold?: number;
								/**
								 * One row per actual label.
								 *
								 * Items: A single row in the confusion matrix.
								 */
								rows?: {
									/**
									 * The original label of this row.
									 */
									actualLabel?: string;
									/**
									 * Info describing predicted label distribution.
									 *
									 * Items: A single entry in the confusion matrix.
									 */
									entries?: {
										/**
										 * Number of items being predicted as this label.
										 */
										itemCount?: string;
										/**
										 * The predicted label. For confidence_threshold > 0, we will also add an entry indicating the number of items under the confidence threshold.
										 */
										predictedLabel?: string;
									}[];
								}[];
							}[];
						};
						/**
						 * Populated for implicit feedback type matrix factorization models.
						 */
						rankingMetrics?: {
							/**
							 * Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by the original rank.
							 */
							averageRank?: number;
							/**
							 * Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the users.
							 */
							meanAveragePrecision?: number;
							/**
							 * Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the rating exists or not.
							 */
							meanSquaredError?: number;
							/**
							 * A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal rank measured by the original ratings.
							 */
							normalizedDiscountedCumulativeGain?: number;
						};
						/**
						 * Populated for regression models and explicit feedback type matrix factorization models.
						 */
						regressionMetrics?: {
							/**
							 * Mean absolute error.
							 */
							meanAbsoluteError?: number;
							/**
							 * Mean squared error.
							 */
							meanSquaredError?: number;
							/**
							 * Mean squared log error.
							 */
							meanSquaredLogError?: number;
							/**
							 * Median absolute error.
							 */
							medianAbsoluteError?: number;
							/**
							 * R^2 score. This corresponds to r2_score in ML.EVALUATE.
							 */
							rSquared?: number;
						};
					};
					/**
					 * Starting time of the trial.
					 */
					startTimeMs?: string;
					/**
					 * The status of the trial. Values: `NOT_STARTED` - Scheduled but not started; `RUNNING` - Running state; `SUCCEEDED` - The trial succeeded; `FAILED` - The trial failed; `INFEASIBLE` - The trial is infeasible due to the invalid params; `STOPPED_EARLY` - Trial stopped early because it's not promising.
					 */
					status?: string;
					/**
					 * Loss computed on the training data at the end of trial.
					 */
					trainingLoss?: number;
					/**
					 * 1-based index of the trial.
					 */
					trialId?: string;
				}[];
				/**
				 * Results for all completed iterations. Empty for [hyperparameter tuning jobs](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview).
				 *
				 * Items: Information about a single iteration of the training run.
				 */
				iterationResults?: {
					/**
					 * Arima result.
					 */
					arimaResult?: {
						/**
						 * This message is repeated because there are multiple arima models fitted in auto-arima. For non-auto-arima model, its size is one.
						 *
						 * Items: Arima model information.
						 */
						arimaModelInfo?: {
							/**
							 * Arima coefficients.
							 */
							arimaCoefficients?: {
								/**
								 * Auto-regressive coefficients, an array of double.
								 *
								 * Items: A single auto regressive coefficient value.
								 */
								autoRegressiveCoefficients?: number[];
								/**
								 * Intercept coefficient, just a double not an array.
								 */
								interceptCoefficient?: number;
								/**
								 * Moving-average coefficients, an array of double.
								 *
								 * Items: A single moving average coefficient value.
								 */
								movingAverageCoefficients?: number[];
							};
							/**
							 * Arima fitting metrics.
							 */
							arimaFittingMetrics?: {
								/**
								 * AIC.
								 */
								aic?: number;
								/**
								 * Log-likelihood.
								 */
								logLikelihood?: number;
								/**
								 * Variance.
								 */
								variance?: number;
							};
							/**
							 * Whether Arima model fitted with drift or not. It is always false when d is not 1.
							 */
							hasDrift?: boolean;
							/**
							 * If true, holiday_effect is a part of time series decomposition result.
							 */
							hasHolidayEffect?: boolean;
							/**
							 * If true, spikes_and_dips is a part of time series decomposition result.
							 */
							hasSpikesAndDips?: boolean;
							/**
							 * If true, step_changes is a part of time series decomposition result.
							 */
							hasStepChanges?: boolean;
							/**
							 * Non-seasonal order.
							 */
							nonSeasonalOrder?: {
								/**
								 * Order of the differencing part.
								 */
								d?: string;
								/**
								 * Order of the autoregressive part.
								 */
								p?: string;
								/**
								 * Order of the moving-average part.
								 */
								q?: string;
							};
							/**
							 * Seasonal periods. Repeated because multiple periods are supported for one time series. Values: `NO_SEASONALITY` - No seasonality; `DAILY` - Daily period, 24 hours; `WEEKLY` - Weekly period, 7 days; `MONTHLY` - Monthly period, 30 days or irregular; `QUARTERLY` - Quarterly period, 90 days or irregular; `YEARLY` - Yearly period, 365 days or irregular; `HOURLY` - Hourly period, 1 hour.
							 *
							 * Items: A single seasonal period value.
							 */
							seasonalPeriods?: string[];
							/**
							 * The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.
							 */
							timeSeriesId?: string;
							/**
							 * The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.
							 *
							 * Items: A single time series id value.
							 */
							timeSeriesIds?: string[];
						}[];
						/**
						 * Seasonal periods. Repeated because multiple periods are supported for one time series. Values: `NO_SEASONALITY` - No seasonality; `DAILY` - Daily period, 24 hours; `WEEKLY` - Weekly period, 7 days; `MONTHLY` - Monthly period, 30 days or irregular; `QUARTERLY` - Quarterly period, 90 days or irregular; `YEARLY` - Yearly period, 365 days or irregular; `HOURLY` - Hourly period, 1 hour.
						 *
						 * Items: A single seasonal period value.
						 */
						seasonalPeriods?: string[];
					};
					/**
					 * Information about top clusters for clustering models.
					 *
					 * Items: Information about a single cluster for clustering model.
					 */
					clusterInfos?: {
						/**
						 * Centroid id.
						 */
						centroidId?: string;
						/**
						 * Cluster radius, the average distance from centroid to each point assigned to the cluster.
						 */
						clusterRadius?: number;
						/**
						 * Cluster size, the total number of points assigned to the cluster.
						 */
						clusterSize?: string;
					}[];
					/**
					 * Time taken to run the iteration in milliseconds.
					 */
					durationMs?: string;
					/**
					 * Loss computed on the eval data at the end of iteration.
					 */
					evalLoss?: number;
					/**
					 * Index of the iteration, 0 based.
					 */
					index?: number;
					/**
					 * Learn rate used for this iteration.
					 */
					learnRate?: number;
					/**
					 * The information of the principal components.
					 *
					 * Items: Principal component infos, used only for eigen decomposition based models, e.g., PCA. Ordered by explained_variance in the descending order.
					 */
					principalComponentInfos?: {
						/**
						 * The explained_variance is pre-ordered in the descending order to compute the cumulative explained variance ratio.
						 */
						cumulativeExplainedVarianceRatio?: number;
						/**
						 * Explained variance by this principal component, which is simply the eigenvalue.
						 */
						explainedVariance?: number;
						/**
						 * Explained_variance over the total explained variance.
						 */
						explainedVarianceRatio?: number;
						/**
						 * Id of the principal component.
						 */
						principalComponentId?: string;
					}[];
					/**
					 * Loss computed on the training data at the end of iteration.
					 */
					trainingLoss?: number;
				}[];
				/**
				 * Maximum number of iterations specified as max_iterations in the 'CREATE MODEL' query. The actual number of iterations may be less than this number due to early stop.
				 */
				maxIterations?: string;
				/**
				 * The type of the model that is being trained. Values: `LINEAR_REGRESSION` - Linear regression model; `LOGISTIC_REGRESSION` - Logistic regression based classification model; `KMEANS` - K-means clustering model; `MATRIX_FACTORIZATION` - Matrix factorization model; `DNN_CLASSIFIER` - DNN classifier model; `TENSORFLOW` - An imported TensorFlow model; `DNN_REGRESSOR` - DNN regressor model; `XGBOOST` - An imported XGBoost model; `BOOSTED_TREE_REGRESSOR` - Boosted tree regressor model; `BOOSTED_TREE_CLASSIFIER` - Boosted tree classifier model; `ARIMA` - ARIMA model; `AUTOML_REGRESSOR` - AutoML Tables regression model; `AUTOML_CLASSIFIER` - AutoML Tables classification model; `PCA` - Prinpical Component Analysis model; `DNN_LINEAR_COMBINED_CLASSIFIER` - Wide-and-deep classifier model; `DNN_LINEAR_COMBINED_REGRESSOR` - Wide-and-deep regressor model; `AUTOENCODER` - Autoencoder model; and more - see the API reference.
				 */
				modelType?: string;
				/**
				 * Training type of the job. Values: `SINGLE_TRAINING` - Single training with fixed parameter space; `HPARAM_TUNING` - [Hyperparameter tuning training](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview).
				 */
				trainingType?: string;
			};
			/**
			 * Deprecated.
			 */
			modelTraining?: {
				/**
				 * Deprecated.
				 */
				currentIteration?: number;
				/**
				 * Deprecated.
				 */
				expectedTotalIterations?: string;
			};
			/**
			 * Deprecated.
			 */
			modelTrainingCurrentIteration?: number;
			/**
			 * Deprecated.
			 */
			modelTrainingExpectedTotalIteration?: string;
			/**
			 * The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
			 */
			numDmlAffectedRows?: string;
			/**
			 * Storage and caching statistics per cloud provider for queries over object storage.
			 *
			 * Items: Storage and caching statistics for object storage.
			 */
			objectStorageStats?: {
				/**
				 * Total bytes read from the GCP Lakehouse-internal cache, avoiding an object storage read.
				 */
				cacheBytesRead?: string;
				/**
				 * The cloud provider for this block of statistics. Values: `GCP` - Google Cloud Platform; `AWS` - Amazon Web Services; `AZURE` - Microsoft Azure.
				 */
				cloudProvider?: string;
				/**
				 * Total bytes read directly from the cloud provider's storage.
				 */
				objectStorageBytesRead?: string;
			}[];
			/**
			 * Performance insights.
			 */
			performanceInsights?: {
				/**
				 * Average execution ms of previous runs. Indicates the job ran slow compared to previous executions. To find previous executions, use INFORMATION_SCHEMA tables and filter jobs with same query hash.
				 */
				avgPreviousExecutionMs?: string;
				/**
				 * Query stage performance insights compared to previous runs, for diagnosing performance regression.
				 *
				 * Items: Performance insights compared to the previous executions for a specific stage.
				 */
				stagePerformanceChangeInsights?: {
					/**
					 * Input data change insight of the query stage.
					 */
					inputDataChange?: {
						/**
						 * Records read difference percentage compared to a previous run.
						 */
						recordsReadDiffPercentage?: number;
					};
					/**
					 * The stage id that the insight mapped to.
					 */
					stageId?: string;
				}[];
				/**
				 * Standalone query stage performance insights, for exploring potential improvements.
				 *
				 * Items: Standalone performance insights for a specific stage.
				 */
				stagePerformanceStandaloneInsights?: {
					/**
					 * If present, the stage had the following reasons for being disqualified from BI Engine execution.
					 *
					 * Items: Reason why BI Engine didn't accelerate the query (or sub-query).
					 */
					biEngineReasons?: {
						/**
						 * High-level BI Engine reason for partial or disabled acceleration. Values: `NO_RESERVATION` - No reservation available for BI Engine acceleration; `INSUFFICIENT_RESERVATION` - Not enough memory available for BI Engine acceleration; `UNSUPPORTED_SQL_TEXT` - This particular SQL text is not supported for acceleration by BI Engine; `INPUT_TOO_LARGE` - Input too large for acceleration by BI Engine; `OTHER_REASON` - Catch-all code for all other cases for partial or disabled acceleration; `TABLE_EXCLUDED` - One or more tables were not eligible for BI Engine acceleration.
						 */
						code?: string;
						/**
						 * Free form human-readable reason for partial or disabled acceleration.
						 */
						message?: string;
					}[];
					/**
					 * High cardinality joins in the stage.
					 *
					 * Items: High cardinality join detailed information.
					 */
					highCardinalityJoins?: {
						/**
						 * Count of left input rows.
						 */
						leftRows?: string;
						/**
						 * Count of the output rows.
						 */
						outputRows?: string;
						/**
						 * Count of right input rows.
						 */
						rightRows?: string;
						/**
						 * The index of the join operator in the ExplainQueryStep lists.
						 */
						stepIndex?: number;
					}[];
					/**
					 * True if the stage has insufficient shuffle quota.
					 */
					insufficientShuffleQuota?: boolean;
					/**
					 * Partition skew in the stage.
					 */
					partitionSkew?: {
						/**
						 * Source stages which produce skewed data.
						 *
						 * Items: Details about source stages which produce skewed data.
						 */
						skewSources?: {
							/**
							 * Max partition output size (in bytes) for this stage.
							 */
							outputBytesMax?: string;
							/**
							 * Median partition output size (in bytes) for this stage.
							 */
							outputBytesMedian?: string;
							/**
							 * 95-th percentile of partition output size (in bytes) for this stage.
							 */
							outputBytesP95?: string;
							/**
							 * Stage id of the skew source stage.
							 */
							stageId?: string;
						}[];
					};
					/**
					 * True if the stage has a slot contention issue.
					 */
					slotContention?: boolean;
					/**
					 * The stage id that the insight mapped to.
					 */
					stageId?: string;
				}[];
				/**
				 * Performance insights for table-level attributes that changed compared to previous runs.
				 *
				 * Items: Table-level performance insights compared to previous runs. These insights don't apply to specific query stages, rather they apply to the whole table.
				 */
				tableChangeInsights?: {
					/**
					 * True if the table's column metadata index was not used in the current job, but was used in a previous job with the same query hash.
					 */
					metadataCacheNotUsedButUsedPreviously?: boolean;
					/**
					 * If present, indicates that the table's metadata column index staleness has increased significantly compared to previous jobs with the same query hash.
					 */
					metadataCacheStalenessInsight?: {
						/**
						 * Average column metadata index staleness of previous runs with the same query hash.
						 */
						avgPreviousStalenessMs?: string;
						/**
						 * The percent increase in staleness between the current job and the average staleness of previous jobs with the same query hash.
						 */
						stalenessPercentageIncrease?: number;
					};
					/**
					 * The table that was queried.
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
				}[];
			};
			/**
			 * Query optimization information for a QUERY job.
			 */
			queryInfo?: {
				/**
				 * Information about query optimizations.
				 */
				optimizationDetails?: Record<string, JSONValue>;
			};
			/**
			 * Describes execution plan for the query.
			 *
			 * Items: A single stage of query execution.
			 */
			queryPlan?: {
				/**
				 * Number of parallel input segments completed.
				 */
				completedParallelInputs?: string;
				/**
				 * Compute mode for this stage. Values: `BIGQUERY` - This stage was processed using BigQuery slots; `BI_ENGINE` - This stage was processed using BI Engine compute.
				 */
				computeMode?: string;
				/**
				 * Milliseconds the average shard spent on CPU-bound tasks.
				 */
				computeMsAvg?: string;
				/**
				 * Milliseconds the slowest shard spent on CPU-bound tasks.
				 */
				computeMsMax?: string;
				/**
				 * Relative amount of time the average shard spent on CPU-bound tasks.
				 */
				computeRatioAvg?: number;
				/**
				 * Relative amount of time the slowest shard spent on CPU-bound tasks.
				 */
				computeRatioMax?: number;
				/**
				 * Stage end time represented as milliseconds since the epoch.
				 */
				endMs?: string;
				/**
				 * Unique ID for the stage within the plan.
				 */
				id?: string;
				/**
				 * IDs for stages that are inputs to this stage.
				 *
				 * Items: A single input stage value.
				 */
				inputStages?: string[];
				/**
				 * Human-readable name for the stage.
				 */
				name?: string;
				/**
				 * Number of parallel input segments to be processed.
				 */
				parallelInputs?: string;
				/**
				 * Milliseconds the average shard spent reading input.
				 */
				readMsAvg?: string;
				/**
				 * Milliseconds the slowest shard spent reading input.
				 */
				readMsMax?: string;
				/**
				 * Relative amount of time the average shard spent reading input.
				 */
				readRatioAvg?: number;
				/**
				 * Relative amount of time the slowest shard spent reading input.
				 */
				readRatioMax?: number;
				/**
				 * Number of records read into the stage.
				 */
				recordsRead?: string;
				/**
				 * Number of records written by the stage.
				 */
				recordsWritten?: string;
				/**
				 * Total number of bytes written to shuffle.
				 */
				shuffleOutputBytes?: string;
				/**
				 * Total number of bytes written to shuffle and spilled to disk.
				 */
				shuffleOutputBytesSpilled?: string;
				/**
				 * Slot-milliseconds used by the stage.
				 */
				slotMs?: string;
				/**
				 * Stage start time represented as milliseconds since the epoch.
				 */
				startMs?: string;
				/**
				 * Current status for this stage.
				 */
				status?: string;
				/**
				 * List of operations within the stage in dependency order (approximately chronological).
				 *
				 * Items: An operation within a stage.
				 */
				steps?: {
					/**
					 * Machine-readable operation type.
					 */
					kind?: string;
					/**
					 * Human-readable description of the step(s).
					 *
					 * Items: A single substep value.
					 */
					substeps?: string[];
				}[];
				/**
				 * Milliseconds the average shard spent waiting to be scheduled.
				 */
				waitMsAvg?: string;
				/**
				 * Milliseconds the slowest shard spent waiting to be scheduled.
				 */
				waitMsMax?: string;
				/**
				 * Relative amount of time the average shard spent waiting to be scheduled.
				 */
				waitRatioAvg?: number;
				/**
				 * Relative amount of time the slowest shard spent waiting to be scheduled.
				 */
				waitRatioMax?: number;
				/**
				 * Milliseconds the average shard spent on writing output.
				 */
				writeMsAvg?: string;
				/**
				 * Milliseconds the slowest shard spent on writing output.
				 */
				writeMsMax?: string;
				/**
				 * Relative amount of time the average shard spent on writing output.
				 */
				writeRatioAvg?: number;
				/**
				 * Relative amount of time the slowest shard spent on writing output.
				 */
				writeRatioMax?: number;
			}[];
			/**
			 * Referenced logical views for the job.
			 *
			 * Items: A single referenced logical view.
			 */
			referencedLogicalViews?: {
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
			}[];
			/**
			 * Referenced property graphs for the job. Queries that reference more than 50 property graphs will not have a complete list.
			 *
			 * Items: Id path of a property graph.
			 */
			referencedPropertyGraphs?: {
				/**
				 * The ID of the dataset containing this property graph.
				 */
				datasetId?: string;
				/**
				 * The ID of the project containing this property graph.
				 */
				projectId?: string;
				/**
				 * The ID of the property graph. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
				 */
				propertyGraphId?: string;
			}[];
			/**
			 * Referenced routines for the job.
			 *
			 * Items: Id path of a routine.
			 */
			referencedRoutines?: {
				/**
				 * The ID of the dataset containing this routine.
				 */
				datasetId?: string;
				/**
				 * The ID of the project containing this routine.
				 */
				projectId?: string;
				/**
				 * The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
				 */
				routineId?: string;
			}[];
			/**
			 * Referenced tables for the job.
			 *
			 * Items: A single referenced table.
			 */
			referencedTables?: {
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
			}[];
			/**
			 * Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated.
			 *
			 * Items: Job resource usage breakdown by reservation.
			 */
			reservationUsage?: {
				/**
				 * Reservation name or "unreserved" for on-demand resource usage and multi-statement queries.
				 */
				name?: string;
				/**
				 * Total slot milliseconds used by the reservation for a particular job.
				 */
				slotMs?: string;
			}[];
			/**
			 * The schema of the results. Present only for successful dry run of non-legacy SQL queries.
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
			 * Search query specific statistics.
			 */
			searchStatistics?: {
				/**
				 * Search index pruning statistics, one for each base table that has a search index. If a base table does not have a search index or the index does not help with pruning on the base table, then there is no pruning statistics for that table.
				 *
				 * Items: Statistics for index pruning.
				 */
				indexPruningStats?: {
					/**
					 * The base table reference.
					 */
					baseTable?: {
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
					 * The index id.
					 */
					indexId?: string;
					/**
					 * The number of parallel inputs after index pruning.
					 */
					postIndexPruningParallelInputCount?: string;
					/**
					 * The number of parallel inputs before index pruning.
					 */
					preIndexPruningParallelInputCount?: string;
				}[];
				/**
				 * When `indexUsageMode` is `UNUSED` or `PARTIALLY_USED`, this field explains why indexes were not used in all or part of the search query. If `indexUsageMode` is `FULLY_USED`, this field is not populated.
				 *
				 * Items: Reason about why no search index was used in the search query (or sub-query).
				 */
				indexUnusedReasons?: {
					/**
					 * Specifies the base table involved in the reason that no search index was used.
					 */
					baseTable?: {
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
					 * Specifies the high-level reason for the scenario when no search index was used. Values: `INDEX_CONFIG_NOT_AVAILABLE` - Indicates the search index configuration has not been created; `PENDING_INDEX_CREATION` - Indicates the search index creation has not been completed; `BASE_TABLE_TRUNCATED` - Indicates the base table has been truncated (rows have been removed from table with TRUNCATE TABLE statement) since the last time the search index was refreshed; `INDEX_CONFIG_MODIFIED` - Indicates the search index configuration has been changed since the last time the search index was refreshed; `TIME_TRAVEL_QUERY` - Indicates the search query accesses data at a timestamp before the last time the search index was refreshed; and more - see the API reference.
					 */
					code?: string;
					/**
					 * Specifies the name of the unused search index, if available.
					 */
					indexName?: string;
					/**
					 * Free form human-readable reason for the scenario when no search index was used.
					 */
					message?: string;
				}[];
				/**
				 * Specifies the index usage mode for the query. Values: `UNUSED` - No search indexes were used in the search query. See [`indexUnusedReasons`](https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#IndexUnusedReason) for detailed reasons; `PARTIALLY_USED` - Part of the search query used search indexes. See [`indexUnusedReasons`](https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#IndexUnusedReason) for why other parts of the query did not use search indexes; `FULLY_USED` - The entire search query used search indexes.
				 */
				indexUsageMode?: string;
			};
			/**
			 * Statistics of a Spark procedure job.
			 */
			sparkStatistics?: {
				/**
				 * Endpoints returned from Dataproc. Key list: - history_server_endpoint: A link to Spark job UI.
				 */
				endpoints?: Record<string, JSONValue>;
				/**
				 * The Google Cloud Storage bucket that is used as the default file system by the Spark application. This field is only filled when the Spark procedure uses the invoker security mode. The `gcsStagingBucket` bucket is inferred from the `@@spark_proc_properties.staging_bucket` system variable (if it is provided). Otherwise, BigQuery creates a default staging bucket for the job and returns the bucket name in this field. Example: * `gs://[bucket_name]`
				 */
				gcsStagingBucket?: string;
				/**
				 * The Cloud KMS encryption key that is used to protect the resources created by the Spark job. If the Spark procedure uses the invoker security mode, the Cloud KMS encryption key is either inferred from the provided system variable, `@@spark_proc_properties.kms_key_name`, or the default key of the BigQuery job's project (if the CMEK organization policy is enforced). Otherwise, the Cloud KMS key is either inferred from the Spark connection associated with the procedure (if it is provided), or from the default key of the Spark connection's project if the CMEK organization policy is enforced. Example: * `projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]`
				 */
				kmsKeyName?: string;
				/**
				 * Logging info is used to generate a link to Cloud Logging.
				 */
				loggingInfo?: {
					/**
					 * Project ID where the Spark logs were written.
					 */
					projectId?: string;
					/**
					 * Resource type used for logging.
					 */
					resourceType?: string;
				};
				/**
				 * Spark job ID if a Spark job is created successfully.
				 */
				sparkJobId?: string;
				/**
				 * Location where the Spark job is executed. A location is selected by BigQueury for jobs configured to run in a multi-region.
				 */
				sparkJobLocation?: string;
			};
			/**
			 * The type of query statement, if valid. Possible values: * `SELECT`: [`SELECT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#select_list) statement. * `ASSERT`: [`ASSERT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/debugging-statements#assert) statement. * `INSERT`: [`INSERT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#insert_statement) statement. * `UPDATE`: [`UPDATE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#update_statement) statement. * `DELETE`: [`DELETE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `MERGE`: [`MERGE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language) statement.
			 */
			statementType?: string;
			/**
			 * Describes a timeline of job execution.
			 *
			 * Items: Summary of the state of query execution at a given time.
			 */
			timeline?: {
				/**
				 * Total number of active workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample.
				 */
				activeUnits?: string;
				/**
				 * Total parallel units of work completed by this query.
				 */
				completedUnits?: string;
				/**
				 * Milliseconds elapsed since the start of query execution.
				 */
				elapsedMs?: string;
				/**
				 * Units of work that can be scheduled immediately. Providing additional slots for these units of work will accelerate the query, if no other query in the reservation needs additional slots.
				 */
				estimatedRunnableUnits?: string;
				/**
				 * Total units of work remaining for the query. This number can be revised (increased or decreased) while the query is running.
				 */
				pendingUnits?: string;
				/**
				 * Total shuffle usage ratio in shuffle RAM per reservation of this query. This will be provided for reservation customers only.
				 */
				shuffleRamUsageRatio?: number;
				/**
				 * Cumulative slot-ms consumed by the query.
				 */
				totalSlotMs?: string;
			}[];
			/**
			 * If the project is configured to use on-demand pricing, then this field contains the total bytes billed for the job. If the project is configured to use flat-rate pricing, then you are not billed for bytes and this field is informational only.
			 */
			totalBytesBilled?: string;
			/**
			 * Total bytes processed for the job.
			 */
			totalBytesProcessed?: string;
			/**
			 * For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost.
			 */
			totalBytesProcessedAccuracy?: string;
			/**
			 * Total number of partitions processed from all partitioned tables referenced in the job.
			 */
			totalPartitionsProcessed?: string;
			/**
			 * Total slot milliseconds for the job that ran on external services and billed on the services SKU. This field is only populated for jobs that have external service costs, and is the total of the usage for costs whose billing method is `"SERVICES_SKU"`.
			 */
			totalServicesSkuSlotMs?: string;
			/**
			 * Slot-milliseconds for the job.
			 */
			totalSlotMs?: string;
			/**
			 * Total bytes transferred for BigQuery Omni queries from the remote cloud back to Google Cloud. This tracks data movement over Google-managed connections (like query results). It doesn't include input data read from the external data lake (for example, S3) because that data stays within the remote cloud.
			 */
			transferredBytes?: string;
			/**
			 * GoogleSQL only: list of undeclared query parameters detected during a dry run validation.
			 *
			 * Items: A parameter given to a query.
			 */
			undeclaredQueryParameters?: {
				/**
				 * If unset, this is a positional parameter. Otherwise, should be unique within a query.
				 */
				name?: string;
				/**
				 * The type of this parameter.
				 */
				parameterType?: {
					/**
					 * The top level type of this field.
					 */
					type?: string;
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
						 * The type of this field. Nested structure of the same shape as its parent (Query parameter type); pass a JSON object.
						 */
						type?: Record<string, JSONValue>;
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
					timestampPrecision?: string;
				};
				/**
				 * The value of this parameter.
				 */
				parameterValue?: {
					/**
					 * The value of this value, if a simple scalar type.
					 */
					value?: string;
					/**
					 * The array values, if this is an array type.
					 *
					 * Items: An array value as a JSON object (same shape as Query parameter value).
					 */
					arrayValues?: Record<string, JSONValue>[];
					/**
					 * The struct field values.
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
			 * Vector Search query specific statistics.
			 */
			vectorSearchStatistics?: {
				/**
				 * When `indexUsageMode` is `UNUSED` or `PARTIALLY_USED`, this field explains why indexes were not used in all or part of the vector search query. If `indexUsageMode` is `FULLY_USED`, this field is not populated.
				 *
				 * Items: Reason about why no search index was used in the search query (or sub-query).
				 */
				indexUnusedReasons?: {
					/**
					 * Specifies the base table involved in the reason that no search index was used.
					 */
					baseTable?: {
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
					 * Specifies the high-level reason for the scenario when no search index was used. Values: `INDEX_CONFIG_NOT_AVAILABLE` - Indicates the search index configuration has not been created; `PENDING_INDEX_CREATION` - Indicates the search index creation has not been completed; `BASE_TABLE_TRUNCATED` - Indicates the base table has been truncated (rows have been removed from table with TRUNCATE TABLE statement) since the last time the search index was refreshed; `INDEX_CONFIG_MODIFIED` - Indicates the search index configuration has been changed since the last time the search index was refreshed; `TIME_TRAVEL_QUERY` - Indicates the search query accesses data at a timestamp before the last time the search index was refreshed; and more - see the API reference.
					 */
					code?: string;
					/**
					 * Specifies the name of the unused search index, if available.
					 */
					indexName?: string;
					/**
					 * Free form human-readable reason for the scenario when no search index was used.
					 */
					message?: string;
				}[];
				/**
				 * Specifies the index usage mode for the query. Values: `UNUSED` - No vector indexes were used in the vector search query. See [`indexUnusedReasons`](https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#IndexUnusedReason) for detailed reasons; `PARTIALLY_USED` - Part of the vector search query used vector indexes. See [`indexUnusedReasons`](https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#IndexUnusedReason) for why other parts of the query did not use vector indexes; `FULLY_USED` - The entire vector search query used vector indexes.
				 */
				indexUsageMode?: string;
				/**
				 * Specifies the usage of stored columns in the query when stored columns are used in the query.
				 *
				 * Items: Indicates the stored columns usage in the query.
				 */
				storedColumnsUsages?: {
					/**
					 * Specifies the base table.
					 */
					baseTable?: {
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
					 * Specifies whether the query was accelerated with stored columns.
					 */
					isQueryAccelerated?: boolean;
					/**
					 * If stored columns were not used, explain why.
					 *
					 * Items: If the stored column was not used, explain why.
					 */
					storedColumnsUnusedReasons?: {
						/**
						 * Specifies the high-level reason for the unused scenario, each reason must have a code associated. Values: `STORED_COLUMNS_COVER_INSUFFICIENT` - If stored columns do not fully cover the columns; `BASE_TABLE_HAS_RLS` - If the base table has RLS (Row Level Security); `BASE_TABLE_HAS_CLS` - If the base table has CLS (Column Level Security); `UNSUPPORTED_PREFILTER` - If the provided prefilter is not supported; `INTERNAL_ERROR` - If an internal error is preventing stored columns from being used; `OTHER_REASON` - Indicates that the reason stored columns cannot be used in the query is not covered by any of the other StoredColumnsUnusedReason options.
						 */
						code?: string;
						/**
						 * Specifies the detailed description for the scenario.
						 */
						message?: string;
						/**
						 * Specifies which columns were not covered by the stored columns for the specified code up to 20 columns. This is populated when the code is STORED_COLUMNS_COVER_INSUFFICIENT and BASE_TABLE_HAS_CLS.
						 *
						 * Items: A single uncovered column value.
						 */
						uncoveredColumns?: string[];
					}[];
				}[];
			};
		};
		/**
		 * Quotas which delayed this job's start time.
		 *
		 * Items: A single quota deferment value.
		 */
		quotaDeferments?: string[];
		/**
		 * Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job.
		 */
		reservation_id?: string;
		/**
		 * The reservation group path of the reservation assigned to this job. This field has a limit of 10 nested reservation groups. This is to maintain consistency between reservations info schema and jobs info schema. The first reservation group is the root reservation group and the last is the leaf or lowest level reservation group.
		 *
		 * Items: A single reservation group path value.
		 */
		reservationGroupPath?: string[];
		/**
		 * Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated.
		 *
		 * Items: Job resource usage breakdown by reservation.
		 */
		reservationUsage?: {
			/**
			 * Reservation name or "unreserved" for on-demand resource usage and multi-statement queries.
			 */
			name?: string;
			/**
			 * Total slot milliseconds used by the reservation for a particular job.
			 */
			slotMs?: string;
		}[];
		/**
		 * Statistics for row-level security. Present only for query and extract jobs.
		 */
		rowLevelSecurityStatistics?: {
			/**
			 * Whether any accessed data was protected by row access policies.
			 */
			rowLevelSecurityApplied?: boolean;
		};
		/**
		 * If this a child job of a script, specifies information about the context of this job within the script.
		 */
		scriptStatistics?: {
			/**
			 * Whether this child job was a statement or expression. Values: `STATEMENT` - The statement appears directly in the script; `EXPRESSION` - The statement evaluates an expression that appears in the script.
			 */
			evaluationKind?: string;
			/**
			 * Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation happened. The leaf frame is first, the primary script is last. Never empty.
			 *
			 * Items: Represents the location of the statement/expression being evaluated. Line and column numbers are defined as follows: - Line and column numbers start with one. That is, line 1 column 1 denotes the start of the script. - When inside a stored procedure, all line/column numbers are relative to the procedure body, not the script in which the procedure was defined. - Start/end positions exclude leading/trailing comments and whitespace. The end position always ends with a ";", when present. - Multi-byte Unicode characters are treated as just one column. - If the original script (or procedure definition) contains TAB characters, a tab "snaps" the indentation forward to the nearest multiple of 8 characters, plus 1. For example, a TAB on column 1, 2, 3, 4, 5, 6 , or 8 will advance the next character to column 9.
			 */
			stackFrames?: {
				/**
				 * One-based end column.
				 */
				endColumn?: number;
				/**
				 * One-based end line.
				 */
				endLine?: number;
				/**
				 * Name of the active procedure, empty if in a top-level script.
				 */
				procedureId?: string;
				/**
				 * One-based start column.
				 */
				startColumn?: number;
				/**
				 * One-based start line.
				 */
				startLine?: number;
				/**
				 * Text of the current statement/expression.
				 */
				text?: string;
			}[];
		};
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
		 * Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.
		 */
		startTime?: string;
		/**
		 * Total bytes processed for the job.
		 */
		totalBytesProcessed?: string;
		/**
		 * Slot-milliseconds for the job.
		 */
		totalSlotMs?: string;
		/**
		 * [Alpha] Information of the multi-statement transaction if this job is part of one. This property is only expected on a child job or a job that is in a session. A script parent job is not part of the transaction started in the script.
		 */
		transactionInfo?: {
			/**
			 * [Alpha] Id of the transaction.
			 */
			transactionId?: string;
		};
	};
	/**
	 * The reason why a Job was created.
	 */
	jobCreationReason?: {
		/**
		 * Specifies the high level reason why a Job was created. Values: `REQUESTED` - Job creation was requested; `LONG_RUNNING` - The query request ran beyond a system defined timeout specified by the [timeoutMs field in the QueryRequest](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#queryrequest). As a result it was considered a long running operation for which a job was created; `LARGE_RESULTS` - The results from the query cannot fit in the response; `OTHER` - BigQuery has determined that the query needs to be executed as a Job.
		 */
		code?: string;
	};
	/**
	 * String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities.
	 */
	principal_subject?: string;
	/**
	 * Email address of the user who ran the job.
	 */
	user_email?: string;
};

/**
 * Get a job
 * Returns information about a specific job, including its status and statistics.
 */
export async function getJob(
	this: EndpointFunctionThis,
	payload: {
		input: GetJobInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetJobOutput>> {
	const response = await this.endpointCaller<GetJobOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'getJob',
		},
		payload,
	);
	return response;
}
