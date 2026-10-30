// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListItemsInput = {
	/**
	 * Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.
	 */
	collection_id: string;
	/**
	 * Unique identifier for a CMS Locale. This UID is different from the Site locale identifier and is listed as `cmsLocaleId` in the Sites response. To query multiple locales, input a comma separated string.
	 */
	cmsLocaleId?: string;
	/**
	 * Filter by the exact name of the item(s).
	 */
	name?: string;
	/**
	 * Filter by the exact slug of the item.
	 */
	slug?: string;
	/**
	 * Filter by the created on date. Provide `gte` (from) and/or `lte` (to); sent as `createdOn[gte]` / `createdOn[lte]`.
	 */
	createdOn?: {
		/**
		 * Filter items created before this date.
		 */
		lte?: string;
		/**
		 * Filter items created after this date.
		 */
		gte?: string;
	};
	/**
	 * Filter by the last published date. Provide `gte` (from) and/or `lte` (to); sent as `lastPublished[gte]` / `lastPublished[lte]`.
	 */
	lastPublished?: {
		/**
		 * Filter items last published before this date.
		 */
		lte?: string;
		/**
		 * Filter items last published after this date.
		 */
		gte?: string;
	};
	/**
	 * Filter by the last updated date. Provide `gte` (from) and/or `lte` (to); sent as `lastUpdated[gte]` / `lastUpdated[lte]`.
	 */
	lastUpdated?: {
		/**
		 * Filter items last updated before this date.
		 */
		lte?: string;
		/**
		 * Filter items last updated after this date.
		 */
		gte?: string;
	};
	/**
	 * Filters on custom field values, combined with AND. Each entry is sent as `filter[<field>][<operator>]=<value>`. Supported operators depend on the field type (for example `PlainText`: eq, ne, in, nin, contains, ncontains, exists; `Number` / `DateTime`: eq, ne, gt, gte, lt, lte, in, nin, exists; `Reference`: eq, ne, in, nin, exists; `RichText`, `Image`, `MultiReference`: exists only). Invalid combinations return `400 BadArgument`.
	 *
	 * Items: One field filter condition.
	 */
	filter?: {
		/**
		 * Slug of the collection field to filter on (see `getCollection` → `fields[].slug`), or `id`.
		 */
		field: string;
		/**
		 * Comparison operator. `contains` / `ncontains` are case-insensitive; `exists` takes `true` or `false` as the value.
		 */
		operator:
			| 'eq'
			| 'ne'
			| 'gt'
			| 'gte'
			| 'lt'
			| 'lte'
			| 'in'
			| 'nin'
			| 'contains'
			| 'ncontains'
			| 'exists';
		/**
		 * Value to compare with: a number, `true` / `false`, an ISO 8601 date-time, a 24-character item ID or an option ID depending on the field type. For `in` / `nin` pass a comma-separated list of up to 100 values.
		 */
		value: string;
	}[];
	/**
	 * Unique identifier for the secondary Locale you're translating **into**. Returns only content that hasn't been excluded from translation for that locale. This is independent of `cmsLocaleId`, which selects which version of the content is returned. To fetch the source text to translate, request the primary locale's content and set `translatable` to the locale you're translating into: `?cmsLocaleId={primary CMS locale id}&translatable={target locale id}`. Only exclusion rules scoped to manual translation are respected — rules scoped only to automatic translation don't affect this parameter's response. Omitting `translatable` returns the same response as if this parameter didn't exist. The value must be the ID of one of the site's secondary locales (see `locales.secondary[]` in the `getSite` response; Webflow's reference does not say whether its `id` or its `cmsLocaleId` is expected) — the primary locale, or any other value, returns a `400` error. Requires translation exclusions to be enabled for the site; if they aren't, the request returns a `403` error. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).
	 */
	translatable?: string;
	/**
	 * Sort results by the provided value.
	 */
	sortBy?: '' | 'createdOn' | 'lastPublished' | 'lastUpdated' | 'name' | 'slug';
	/**
	 * Sorts the results by asc or desc.
	 */
	sortOrder?: '' | 'asc' | 'desc';
	/**
	 * Sort by custom fields, applied in order. Each entry is sent as `sort[<field>]=<asc|desc>` and takes precedence over `sortBy` / `sortOrder`. Sortable field types: PlainText, Email, Phone, Number, DateTime and Switch.
	 *
	 * Items: One sort instruction.
	 */
	sort?: {
		/**
		 * Slug of the collection field to sort by.
		 */
		field: string;
		/**
		 * Sort direction.
		 */
		direction: 'asc' | 'desc';
	}[];
	/**
	 * Number of records to skip, for pagination.
	 */
	offset?: number;
	/**
	 * Maximum number of records to return (max 100).
	 */
	limit?: number;
};

export type ListItemsOutput = {
	/**
	 * List of Items within the collection.
	 *
	 * Items: A Collection Item represents a single entry in your collection. Each item carries system metadata (IDs and timestamps), the status flags `isDraft` and `isArchived`, and its content in `fieldData`, which always has `name` and `slug` and may include further fields matching the collection schema.
	 */
	items?: {
		/**
		 * Unique identifier for the Item.
		 */
		id?: string;
		/**
		 * Identifier for the locale of the CMS item.
		 */
		cmsLocaleId?: string;
		/**
		 * The date the item was last published.
		 */
		lastPublished?: string;
		/**
		 * The date the item was last updated.
		 */
		lastUpdated?: string;
		/**
		 * The date the item was created.
		 */
		createdOn?: string;
		/**
		 * Boolean determining if the Item is set to archived. Defaults to `false`.
		 */
		isArchived?: boolean;
		/**
		 * Whether the item is in a draft state. Together with `lastPublished`, this determines the status shown in the Webflow UI. See [Publishing with the CMS API](https://developers.webflow.com/data/docs/working-with-the-cms/publishing) for the full mapping.
		 */
		isDraft?: boolean;
		/**
		 * Field values keyed by the collection field slug. Standard fields are listed; custom fields of the collection are returned under their slug as well.
		 */
		fieldData?: {
			/**
			 * Name of the Item.
			 */
			name?: string;
			/**
			 * URL structure of the Item in your site. Note: Updates to an item slug will break all links referencing the old slug.
			 */
			slug?: string;
		};
	}[];
	/**
	 * Pagination information for the returned list.
	 */
	pagination?: {
		/**
		 * The limit specified in the request. Defaults to `100`.
		 */
		limit?: number;
		/**
		 * The offset specified for pagination. Defaults to `0`.
		 */
		offset?: number;
		/**
		 * Total number of items in the collection.
		 */
		total?: number;
	};
};

/**
 * List items
 * Lists the staged items of a CMS collection with optional filtering and sorting.
 */
export async function listItems(
	this: EndpointFunctionThis,
	payload: {
		input: ListItemsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListItemsOutput> {
	const response = await this.endpointCaller<ListItemsOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'listItems',
		},
		payload,
	);
	return response.output;
}
