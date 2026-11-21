// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListDatasetsInput = {
	/**
	 * The ID of the Google Cloud project.
	 */
	projectId: string;
	/**
	 * Whether to list all datasets, including hidden ones.
	 */
	all?: boolean;
	/**
	 * An expression for filtering the results of the request by label. The syntax is `labels.<key>[:<value>]`; multiple filters are AND-ed with a space. Example: `labels.department:receiving labels.active`. See [Filtering datasets using labels](https://cloud.google.com/bigquery/docs/filtering-labels#filtering_datasets_using_labels) for details.
	 */
	filter?: string;
	/**
	 * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
	 */
	maxResults?: number;
	/**
	 * The `nextPageToken` value returned by the previous call, to request the next page of results. Omit it for the first page.
	 */
	pageToken?: string;
};

export type ListDatasetsOutput = {
	/**
	 * The resource type. This property always returns the value "bigquery#datasetList".
	 */
	kind?: string;
	/**
	 * A hash value of the results page. You can use this property to determine if the page has changed since the last request.
	 */
	etag?: string;
	/**
	 * A token that can be used to request the next results page. This property is omitted on the final results page.
	 */
	nextPageToken?: string;
	/**
	 * An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.
	 *
	 * Items: A dataset resource with only a subset of fields, to be returned in a list of datasets.
	 */
	datasets?: {
		/**
		 * The resource type. This property always returns the value "bigquery#dataset".
		 */
		kind?: string;
		/**
		 * The origin of the dataset, one of: * (Unset) - Native BigQuery Dataset. * BIGLAKE - Dataset is backed by a namespace stored natively in Biglake.
		 */
		catalogSource?: string;
		/**
		 * The dataset reference. Use this property to access specific parts of the dataset's ID, such as project ID or dataset ID.
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
		 * An alternate name for the dataset. The friendly name is purely decorative in nature.
		 */
		friendlyName?: string;
		/**
		 * The fully-qualified, unique, opaque ID of the dataset.
		 */
		id?: string;
		/**
		 * The labels associated with this dataset. You can use these to organize and group your datasets.
		 */
		labels?: Record<string, JSONValue>;
		/**
		 * The geographic location where the dataset resides.
		 */
		location?: string;
		/**
		 * Same as `type` in `Dataset`. The type of the dataset, one of: * DEFAULT - only accessible by owner and authorized accounts, * PUBLIC - accessible by everyone, * LINKED - linked dataset, * EXTERNAL - dataset with definition in external metadata catalog, * BIGLAKE_ICEBERG - a Biglake dataset accessible through the Iceberg API, * BIGLAKE_HIVE - a Biglake dataset accessible through the Hive API.
		 */
		type?: string;
	}[];
	/**
	 * A list of skipped locations that were unreachable. For more information about BigQuery locations, see [BigQuery locations](https://cloud.google.com/bigquery/docs/locations). Example: "europe-west5".
	 *
	 * Items: A single unreachable value.
	 */
	unreachable?: string[];
};

/**
 * List datasets
 * Lists all datasets in a project to which the user has been granted the READER role.
 */
export async function listDatasets(
	this: EndpointFunctionThis,
	payload: {
		input: ListDatasetsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListDatasetsOutput> {
	const response = await this.endpointCaller<ListDatasetsOutput>(
		{
			appName: 'google-bigquery',
			appVersion: 1,
			endpointName: 'listDatasets',
		},
		payload,
	);
	return response.output;
}
