// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListEntityDefinitionsInput = {
	/**
	 * An OData `$filter` expression on table properties, for example `LogicalName eq 'account'`. Sent as `$filter`. See [Query table definitions](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api).
	 */
	filter?: string;
	/**
	 * A comma-separated list of table properties to return, for example `LogicalName,EntitySetName,PrimaryIdAttribute`. Sent as `$select`. Table definitions are large, so select only what you need.
	 */
	select?: string;
	/**
	 * A comma-separated list of navigation properties to expand, for example `Attributes($select=LogicalName)`. Sent as `$expand`.
	 */
	expand?: string;
};

export type ListEntityDefinitionsOutput = {
	/**
	 * The OData metadata context URL of the response.
	 */
	'@odata.context'?: string;
	/**
	 * The table definitions that match the request.
	 *
	 * Items: A table definition. Only the properties you select (or all, if none are selected) are present. This schema declares the commonly used properties only. Any other property you select is returned too. See [EntityMetadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/entitymetadata?view=dataverse-latest).
	 */
	value?: {
		/**
		 * The unique identifier of the table definition.
		 */
		MetadataId?: string;
		/**
		 * The logical name of the table, for example `account`.
		 */
		LogicalName?: string;
		/**
		 * The schema name of the table.
		 */
		SchemaName?: string;
		/**
		 * The logical collection (plural) name of the table.
		 */
		LogicalCollectionName?: string;
		/**
		 * The collection (plural) schema name of the table.
		 */
		CollectionSchemaName?: string;
		/**
		 * The entity set name used in Web API URLs, for example `accounts`. Use this value as the entity set name in the other Endpoints.
		 */
		EntitySetName?: string;
		/**
		 * The logical name of the column that holds the record ID.
		 */
		PrimaryIdAttribute?: string;
		/**
		 * The logical name of the column that holds the primary name of the record.
		 */
		PrimaryNameAttribute?: string;
		/**
		 * The logical name of the column that holds the primary image of the record.
		 */
		PrimaryImageAttribute?: string;
		/**
		 * The object type code of the table.
		 */
		ObjectTypeCode?: number;
		/**
		 * The ownership type of the table, for example `UserOwned` or `OrganizationOwned`.
		 */
		OwnershipType?: string;
		/**
		 * Whether the table is a custom table.
		 */
		IsCustomEntity?: boolean;
		/**
		 * Whether the table is an activity table.
		 */
		IsActivity?: boolean;
		/**
		 * Whether activities are associated with the table.
		 */
		HasActivities?: boolean;
		/**
		 * Whether notes are associated with the table.
		 */
		HasNotes?: boolean;
		/**
		 * Whether change tracking is enabled for the table.
		 */
		ChangeTrackingEnabled?: boolean;
		/**
		 * Whether auditing is enabled for the table, as a managed property.
		 */
		IsAuditEnabled?: {
			/**
			 * The value of the managed property.
			 */
			Value?: boolean;
			/**
			 * Whether the value of the managed property can be changed.
			 */
			CanBeChanged?: boolean;
			/**
			 * The logical name of the managed property.
			 */
			ManagedPropertyLogicalName?: string;
		};
		/**
		 * The date and time when the table was created.
		 */
		CreatedOn?: string;
		/**
		 * The localized display name of the table.
		 */
		DisplayName?: {
			/**
			 * The labels in each language.
			 *
			 * Items: A label in one language.
			 */
			LocalizedLabels?: {
				/**
				 * The label text.
				 */
				Label?: string;
				/**
				 * The locale ID (LCID) of the label.
				 */
				LanguageCode?: number;
			}[];
			/**
			 * The label in the language of the calling user.
			 */
			UserLocalizedLabel?: {
				/**
				 * The label text.
				 */
				Label?: string;
				/**
				 * The locale ID (LCID) of the label.
				 */
				LanguageCode?: number;
			};
		};
		/**
		 * The localized plural display name of the table.
		 */
		DisplayCollectionName?: {
			/**
			 * The labels in each language.
			 *
			 * Items: A label in one language.
			 */
			LocalizedLabels?: {
				/**
				 * The label text.
				 */
				Label?: string;
				/**
				 * The locale ID (LCID) of the label.
				 */
				LanguageCode?: number;
			}[];
			/**
			 * The label in the language of the calling user.
			 */
			UserLocalizedLabel?: {
				/**
				 * The label text.
				 */
				Label?: string;
				/**
				 * The locale ID (LCID) of the label.
				 */
				LanguageCode?: number;
			};
		};
		/**
		 * The localized description of the table.
		 */
		Description?: {
			/**
			 * The labels in each language.
			 *
			 * Items: A label in one language.
			 */
			LocalizedLabels?: {
				/**
				 * The label text.
				 */
				Label?: string;
				/**
				 * The locale ID (LCID) of the label.
				 */
				LanguageCode?: number;
			}[];
			/**
			 * The label in the language of the calling user.
			 */
			UserLocalizedLabel?: {
				/**
				 * The label text.
				 */
				Label?: string;
				/**
				 * The locale ID (LCID) of the label.
				 */
				LanguageCode?: number;
			};
		};
	}[];
};

/**
 * List table definitions
 * Returns the definitions (metadata) of Dataverse tables.
 */
export async function listEntityDefinitions(
	this: EndpointFunctionThis,
	payload: {
		input: ListEntityDefinitionsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListEntityDefinitionsOutput> {
	const response = await this.endpointCaller<ListEntityDefinitionsOutput>(
		{
			appName: 'microsoft-dynamics-365-crm',
			appVersion: 1,
			endpointName: 'listEntityDefinitions',
		},
		payload,
	);
	return response.output;
}
