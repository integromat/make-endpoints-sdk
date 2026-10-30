// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetCollectionInput = {
	/**
	 * Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.
	 */
	collection_id: string;
};

export type GetCollectionOutput = {
	/**
	 * Unique identifier for a Collection.
	 */
	id?: string;
	/**
	 * Name given to the Collection.
	 */
	displayName?: string;
	/**
	 * The name of one Item in Collection (e.g. “Blog Post” if the Collection is called “Blog Posts”).
	 */
	singularName?: string;
	/**
	 * Slug of Collection in Site URL structure.
	 */
	slug?: string;
	/**
	 * The date the collection was created.
	 */
	createdOn?: string;
	/**
	 * The date the collection was last updated.
	 */
	lastUpdated?: string;
	/**
	 * The list of fields in the Collection.
	 *
	 * Items: The details of a field in a collection.
	 */
	fields?: {
		/**
		 * Unique identifier for a Field.
		 */
		id?: string;
		/**
		 * Whether the field is required in the collection.
		 */
		isRequired?: boolean;
		/**
		 * Whether the field is editable.
		 */
		isEditable?: boolean;
		/**
		 * The field type. One of: `Color`, `DateTime`, `Email`, `ExtFileRef`, `File`, `Image`, `Link`, `MultiImage`, `MultiReference`, `Number`, `Option`, `Phone`, `PlainText`, `Reference`, `RichText`, `Switch`, `VideoLink`. The e-commerce Products and SKUs collections also return `SkuSettings`, `SkuValues`, `Price`, `TextOption`, `MultiExternalFile` and `MembershipPlan`, which Webflow's reference does not list.
		 */
		type?: string;
		/**
		 * Slug of Field in Site URL structure. Slugs should be all lowercase with no spaces. Any spaces will be converted to "-".
		 */
		slug?: string;
		/**
		 * The name of a field.
		 */
		displayName?: string;
		/**
		 * Additional text to help anyone filling out this field.
		 */
		helpText?: string;
		/**
		 * Validation rules of the field. Which keys are present depends on `type`; most types return `null`. Webflow documents this object as an open map, so keys other than those listed may appear.
		 */
		validations?: {
			/**
			 * PlainText fields: `true` when the field accepts a single line of text only.
			 */
			singleLine?: boolean;
			/**
			 * PlainText fields: maximum number of characters accepted.
			 */
			maxLength?: number;
			/**
			 * PlainText fields: regular expression the value must match. The API serialises it as an empty object; use `messages.pattern` for the human-readable rule.
			 */
			pattern?: Record<string, JSONValue>;
			/**
			 * Human-readable messages shown when a validation fails, keyed by the validation name.
			 */
			messages?: {
				/**
				 * Message shown when the value exceeds `maxLength`.
				 */
				maxLength?: string;
				/**
				 * Message shown when the value does not match `pattern`.
				 */
				pattern?: string;
			};
			/**
			 * Number fields: smallest value accepted.
			 */
			minValue?: number;
			/**
			 * Number fields: the numeric format, e.g. `integer`. DateTime fields: `date-time` when the field stores a time as well as a date.
			 */
			format?: string;
			/**
			 * Number fields: number of decimal places.
			 */
			precision?: number;
			/**
			 * Number fields: whether negative values are accepted.
			 */
			allowNegative?: boolean;
			/**
			 * Image, MultiImage and File fields: file extensions accepted for upload.
			 *
			 * Items: A file extension without the leading dot, e.g. `png`.
			 */
			acceptedExtensions?: string[];
			/**
			 * Reference and MultiReference fields: ID of the collection whose item IDs this field accepts. Use `listItems` on that collection to find values.
			 */
			collectionId?: string;
			/**
			 * Option fields: the predefined choices. Write the option `id` (not the name) as the item value.
			 *
			 * Items: One predefined choice.
			 */
			options?: {
				/**
				 * Unique identifier of the option; this is the value to write into `fieldData`.
				 */
				id?: string;
				/**
				 * Display name of the option.
				 */
				name?: string;
			}[];
			/**
			 * TextOption fields (e-commerce, e.g. billing method): name of the built-in enumeration that supplies the allowed values.
			 */
			enumName?: string;
		};
	}[];
	/**
	 * The list of field groups in the Collection.
	 *
	 * Items: A group of fields within a collection.
	 */
	fieldGroups?: {
		/**
		 * The display name of the field group.
		 */
		displayName?: string;
		/**
		 * The IDs of the fields in this group.
		 *
		 * Items: ID of a collection field.
		 */
		fieldIds?: string[];
		/**
		 * A description of the field group.
		 */
		description?: string;
	}[];
};

/**
 * Get a collection
 * Returns a CMS collection including its field schema.
 */
export async function getCollection(
	this: EndpointFunctionThis,
	payload: {
		input: GetCollectionInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetCollectionOutput> {
	const response = await this.endpointCaller<GetCollectionOutput>(
		{
			appName: 'webflow',
			appVersion: 2,
			endpointName: 'getCollection',
		},
		payload,
	);
	return response.output;
}
