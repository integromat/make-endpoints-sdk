// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type GetDatasetInput = {
	/**
	 * The ID of the Google Cloud project.
	 */
	projectId: string;
	/**
	 * The ID of the dataset.
	 */
	datasetId: string;
	/**
	 * Specifies the view that determines which dataset information is returned. By default, metadata and ACL information are returned. Values: `METADATA` - View metadata information for the dataset, such as friendlyName, description, labels, etc; `ACL` - View ACL information for the dataset, which defines dataset access for one or more entities; `FULL` - View both dataset metadata and ACL information.
	 */
	datasetView?: '' | 'METADATA' | 'ACL' | 'FULL';
	/**
	 * The version of the access policy schema to fetch. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for conditional access policy binding in datasets must specify version 3. Dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. This field will be mapped to [IAM Policy version](https://cloud.google.com/iam/docs/policies#versions) and will be used to fetch policy from IAM. If unset or if 0 or 1 value is used for dataset with conditional bindings, access entry with condition will have role string appended by 'withcond' string followed by a hash value.
	 */
	accessPolicyVersion?: '' | 0 | 1 | 3;
};

export type GetDatasetOutput = {
	/**
	 * The resource type.
	 */
	kind?: string;
	/**
	 * A hash of the resource.
	 */
	etag?: string;
	/**
	 * The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.
	 */
	id?: string;
	/**
	 * A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.
	 */
	selfLink?: string;
	/**
	 * A reference that identifies the dataset.
	 */
	datasetReference?: {
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
	 * A descriptive name for the dataset.
	 */
	friendlyName?: string;
	/**
	 * A user-friendly description of the dataset.
	 */
	description?: string;
	/**
	 * The geographic location where the dataset should reside. See [BigQuery locations](https://cloud.google.com/bigquery/docs/locations) for supported locations.
	 */
	location?: string;
	/**
	 * The default lifetime of all tables in the dataset, in milliseconds. The minimum lifetime value is 3600000 milliseconds (one hour). To clear an existing default expiration with a PATCH request, set to 0. Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
	 */
	defaultTableExpirationMs?: string;
	/**
	 * This default partition expiration, expressed in milliseconds. When new time-partitioned tables are created in a dataset where this property is set, the table will inherit this value, propagated as the `TimePartitioning.expirationMs` property on the new table. If you set `TimePartitioning.expirationMs` explicitly when creating a table, the `defaultPartitionExpirationMs` of the containing dataset is ignored. When creating a partitioned table, if `defaultPartitionExpirationMs` is set, the `defaultTableExpirationMs` value is ignored and the table will not be inherit a table expiration deadline.
	 */
	defaultPartitionExpirationMs?: string;
	/**
	 * The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See [Adding dataset labels](https://docs.cloud.google.com/bigquery/docs/adding-labels#adding_dataset_labels) for more information.
	 */
	labels?: Record<string, JSONValue>;
	/**
	 * The [tags](https://cloud.google.com/bigquery/docs/tags) attached to this dataset. Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "123456789012/environment" where 123456789012 is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "Production". See [Tag definitions](https://cloud.google.com/iam/docs/tags-access-control#definitions) for more details.
	 */
	resourceTags?: Record<string, JSONValue>;
	/**
	 * An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER; If you patch a dataset, then this field is overwritten by the patched dataset's access field. To add entities, you must supply the entire existing access array in addition to any new entities that you want to add.
	 *
	 * Items: An object that defines dataset access for an entity.
	 */
	access?: {
		/**
		 * Condition for the binding. If CEL expression in this field is true, this access binding will be considered.
		 */
		condition?: {
			/**
			 * Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
			 */
			description?: string;
			/**
			 * Textual representation of an expression in Common Expression Language syntax.
			 */
			expression?: string;
			/**
			 * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
			 */
			location?: string;
		};
		/**
		 * Set exactly one of the alternative fields. A grant authorizing all resources of a particular type in a particular dataset access to this dataset. Only views are supported for now. The role field is not required when this field is set. If that dataset is deleted and re-created, its access needs to be granted again via an update operation.
		 */
		dataset?: {
			/**
			 * The dataset this entry applies to.
			 */
			dataset?: {
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
			 * Which resources in the dataset this entry applies to. Views and routines are supported; further target types may be added by the vendor. Values: `VIEWS` - This entry applies to views in the dataset; `ROUTINES` - This entry applies to routines in the dataset.
			 *
			 * Items: A single target type value.
			 */
			targetTypes?: string[];
		};
		/**
		 * Set exactly one of the alternative fields. A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN".
		 */
		domain?: string;
		/**
		 * Set exactly one of the alternative fields. An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP".
		 */
		groupByEmail?: string;
		/**
		 * Set exactly one of the alternative fields. Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.
		 */
		iamMember?: string;
		/**
		 * An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The following legacy mappings will be applied: * `OWNER`: `roles/bigquery.dataOwner` * `WRITER`: `roles/bigquery.dataEditor` * `READER`: `roles/bigquery.dataViewer` This field will accept any of the above formats, but will return only the legacy format. For example, if you set this field to "roles/bigquery.dataOwner", it will be returned back as "OWNER".
		 */
		role?: string;
		/**
		 * Set exactly one of the alternative fields. A routine from a different dataset to grant access to. Queries executed against that routine will have read access to views/tables/routines in this dataset. Only UDF is supported for now. The role field is not required when this field is set. If that routine is updated by any user, access to the routine needs to be granted again via an update operation.
		 */
		routine?: {
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
		 * Set exactly one of the alternative fields. A special group to grant access to. Possible values include: * projectOwners: Owners of the enclosing project. * projectReaders: Readers of the enclosing project. * projectWriters: Writers of the enclosing project. * allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members.
		 */
		specialGroup?: string;
		/**
		 * Set exactly one of the alternative fields. An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL".
		 */
		userByEmail?: string;
		/**
		 * Set exactly one of the alternative fields. A view from a different dataset to grant access to. Queries executed against that view will have read access to views/tables/routines in this dataset. The role field is not required when this field is set. If that view is updated by any user, access to the view needs to be granted again via an update operation.
		 */
		view?: {
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
	/**
	 * The time when this dataset was created, in milliseconds since the epoch.
	 */
	creationTime?: string;
	/**
	 * The date when this dataset was last modified, in milliseconds since the epoch.
	 */
	lastModifiedTime?: string;
	/**
	 * The origin of the dataset, one of: * (Unset) - Native BigQuery Dataset * BIGLAKE - Dataset is backed by a namespace stored natively in Biglake.
	 */
	catalogSource?: string;
	/**
	 * Defines the default collation specification of future tables created in the dataset. If a table is created in this dataset without table-level default collation, then the table inherits the dataset default collation, which is applied to the string fields that do not have explicit collation specified. A change to this field affects only tables created afterwards, and does not alter the existing tables. Supported values: `und:ci` (undetermined locale, case-insensitive) or empty for the default case-sensitive behaviour.
	 */
	defaultCollation?: string;
	/**
	 * The default encryption key for all tables in the dataset. After this property is set, the encryption key of all newly-created tables in the dataset is set to this value unless the table creation request or query explicitly overrides the key.
	 */
	defaultEncryptionConfiguration?: {
		/**
		 * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.
		 */
		kmsKeyName?: string;
	};
	/**
	 * The default rounding mode for NUMERIC and BIGNUMERIC columns of tables created in this dataset after this setting is applied; a `roundingMode` set on a table field overrides it and existing tables are unaffected. Values: `ROUND_HALF_AWAY_FROM_ZERO` - half values are rounded away from zero (1.5 => 2, 2.5 => 3); `ROUND_HALF_EVEN` - half values are rounded to the nearest even value (1.5 => 2, 2.5 => 2).
	 */
	defaultRoundingMode?: string;
	/**
	 * Options defining open source compatible datasets living in the BigQuery catalog. Contains metadata of open source database, schema or namespace represented by the current dataset.
	 */
	externalCatalogDatasetOptions?: {
		/**
		 * The storage location URI for all tables in the dataset. Equivalent to hive metastore's database locationUri. Maximum length of 1024 characters.
		 */
		defaultStorageLocationUri?: string;
		/**
		 * A map of key value pairs defining the parameters and properties of the open source schema. Maximum size of 2MiB.
		 */
		parameters?: Record<string, JSONValue>;
	};
	/**
	 * Reference to a read-only external dataset defined in data catalogs outside of BigQuery. Filled out when the dataset type is EXTERNAL.
	 */
	externalDatasetReference?: {
		/**
		 * The connection id that is used to access the external_source. Format: projects/{project_id}/locations/{location_id}/connections/{connection_id}.
		 */
		connection?: string;
		/**
		 * External source that backs this dataset.
		 */
		externalSource?: string;
	};
	/**
	 * TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. By default, this is FALSE, which means the dataset and its table names are case-sensitive. This field does not affect routine references.
	 */
	isCaseInsensitive?: boolean;
	/**
	 * Metadata about the LinkedDataset. Filled out when the dataset type is LINKED.
	 */
	linkedDatasetMetadata?: {
		/**
		 * Specifies whether Linked Dataset is currently in a linked state or not. Values: `LINKED` - Normal Linked Dataset state. Data is queryable via the Linked Dataset; `UNLINKED` - Data publisher or owner has unlinked this Linked Dataset. It means you can no longer query or see the data in the Linked Dataset.
		 */
		linkState?: string;
	};
	/**
	 * The source dataset reference when the dataset is of type LINKED. For all other dataset types it is not set. This field cannot be updated once it is set. Any attempt to update this field using Update and Patch API Operations will be ignored.
	 */
	linkedDatasetSource?: {
		/**
		 * The source dataset reference contains project numbers and not project ids.
		 */
		sourceDataset?: {
			/**
			 * The ID of the project containing this dataset.
			 */
			projectId?: string;
			/**
			 * A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
			 */
			datasetId?: string;
		};
	};
	/**
	 * Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days). The default value is 168 hours if this is not set.
	 */
	maxTimeTravelHours?: string;
	/**
	 * Restriction config for all tables and dataset. If set, restrict certain accesses on the dataset and all its tables based on the config. See [Data egress](https://cloud.google.com/bigquery/docs/analytics-hub-introduction#data_egress) for more details.
	 */
	restrictions?: {
		/**
		 * Specifies the type of dataset/table restriction. Values: `RESTRICTED_DATA_EGRESS` - Restrict data egress. See [Data egress](https://cloud.google.com/bigquery/docs/analytics-hub-introduction#data_egress) for more details.
		 */
		type?: string;
	};
	/**
	 * Reserved for future use.
	 */
	satisfiesPzi?: boolean;
	/**
	 * Reserved for future use.
	 */
	satisfiesPzs?: boolean;
	/**
	 * Updates storage_billing_model for the dataset. Values: `LOGICAL` - Billing for logical bytes; `PHYSICAL` - Billing for physical bytes.
	 */
	storageBillingModel?: string;
	/**
	 * Tags for the dataset. To provide tags as inputs, use the `resourceTags` field.
	 *
	 * Items: A global tag managed by Resource Manager. See [Tag definitions](https://cloud.google.com/iam/docs/tags-access-control#definitions).
	 */
	tags?: {
		/**
		 * The namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is org id.
		 */
		tagKey?: string;
		/**
		 * The friendly short name of the tag value, e.g. "production".
		 */
		tagValue?: string;
	}[];
	/**
	 * Same as `type` in `ListFormatDataset`. The type of the dataset, one of: * DEFAULT - only accessible by owner and authorized accounts, * PUBLIC - accessible by everyone, * LINKED - linked dataset, * EXTERNAL - dataset with definition in external metadata catalog, * BIGLAKE_ICEBERG - a Biglake dataset accessible through the Iceberg API, * BIGLAKE_HIVE - a Biglake dataset accessible through the Hive API.
	 */
	type?: string;
};

/**
 * Get a dataset
 * Returns the dataset specified by dataset ID.
 */
export async function getDataset(
	this: EndpointFunctionThis,
	payload: {
		input: GetDatasetInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetDatasetOutput>> {
	const response = await this.endpointCaller<GetDatasetOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'getDataset',
		},
		payload,
	);
	return response;
}
