// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetDataSourceInput = {
	/**
	 * ID of the data source to retrieve (schema + metadata).
	 */
	id: string;
};

export type GetDataSourceOutput = {
	/**
	 * Always one of the Notion object type names (e.g. page, database, data_source, list, user).
	 */
	object?: string;
	/**
	 * ID of the data source to retrieve (schema + metadata).
	 */
	id?: string;
	/**
	 * ISO 8601 date and time when this object was created.
	 */
	created_time?: string;
	/**
	 * ISO 8601 date and time when this object was last edited.
	 */
	last_edited_time?: string;
	/**
	 * Partial user object for who created this object.
	 */
	created_by?: {
		/**
		 * Always "user".
		 */
		object?: string;
		/**
		 * User ID of the creator.
		 */
		id?: string;
		/**
		 * Display name as it appears in Notion.
		 */
		name?: string;
		/**
		 * Avatar URL of the user, if any.
		 */
		avatar_url?: string;
		/**
		 * Discriminator for the object or property type. Determines which sibling type-specific fields are populated.
		 */
		type?: string;
		/**
		 * Details about the person when user type is person.
		 */
		person?: {
			/**
			 * Email of the person.
			 */
			email?: string;
		};
	};
	/**
	 * Partial user object for who last edited this object.
	 */
	last_edited_by?: {
		/**
		 * Always "user".
		 */
		object?: string;
		/**
		 * User ID of the last editor.
		 */
		id?: string;
		/**
		 * Display name as it appears in Notion.
		 */
		name?: string;
		/**
		 * Avatar URL of the user, if any.
		 */
		avatar_url?: string;
		/**
		 * Discriminator for the object or property type. Determines which sibling type-specific fields are populated.
		 */
		type?: string;
		/**
		 * Details about the person when user type is person.
		 */
		person?: {
			/**
			 * Email of the person.
			 */
			email?: string;
		};
	};
	/**
	 * Page/database/data source icon. Discriminated union on type (emoji, custom_emoji, icon, external, file, file_upload).
	 */
	icon?: {
		/**
		 * Icon type. One of: emoji, custom_emoji, icon, external, file, file_upload.
		 */
		type?: string;
		/**
		 * Standard emoji character used as the icon.
		 */
		emoji?: string;
		/**
		 * Externally hosted file or image referenced by URL.
		 */
		external?: {
			/**
			 * URL of the external file or resource.
			 */
			url?: string;
		};
		/**
		 * Notion-hosted file object (includes temporary url and expiry_time).
		 */
		file?: {
			/**
			 * Temporary URL of the Notion-hosted file.
			 */
			url?: string;
			/**
			 * Time when the temporary file URL will expire.
			 */
			expiry_time?: string;
		};
	};
	/**
	 * Cover image. Discriminated union on type (external, file, file_upload).
	 */
	cover?: {
		/**
		 * Cover type. One of: external, file, file_upload.
		 */
		type?: string;
		/**
		 * Externally hosted file or image referenced by URL.
		 */
		external?: {
			/**
			 * URL of the external file or resource.
			 */
			url?: string;
		};
		/**
		 * Notion-hosted file object (includes temporary url and expiry_time).
		 */
		file?: {
			/**
			 * Temporary URL of the Notion-hosted file.
			 */
			url?: string;
			/**
			 * Time when the temporary file URL will expire.
			 */
			expiry_time?: string;
		};
	};
	/**
	 * Optional description text for this object or property.
	 */
	description?: {
		/**
		 * Discriminator for the object or property type. Determines which sibling type-specific fields are populated.
		 */
		type?: string;
		/**
		 * Text payload for a rich text item of type text (content + optional link).
		 */
		text?: {
			/**
			 * The actual text content of the text rich text item (max 2000 characters).
			 */
			content?: string;
			/**
			 * Inline link object with url, if this text is linked.
			 */
			link?: string;
		};
		/**
		 * Styling for a rich text object (bold, italic, strikethrough, underline, code, color).
		 */
		annotations?: {
			/**
			 * Whether the text is bold.
			 */
			bold?: boolean;
			/**
			 * Whether the text is italic.
			 */
			italic?: boolean;
			/**
			 * Whether the text is struck through.
			 */
			strikethrough?: boolean;
			/**
			 * Whether the text is underlined.
			 */
			underline?: boolean;
			/**
			 * Whether the text is styled as inline code.
			 */
			code?: boolean;
			/**
			 * Rich text color, including background variants (e.g. default, blue, blue_background).
			 */
			color?: string;
		};
		/**
		 * Plain text content of the rich text object, without styling.
		 */
		plain_text?: string;
		/**
		 * URL that this rich text object links to or mentions, if any.
		 */
		href?: string;
	}[];
	/**
	 * Whether the database/data source is inline.
	 */
	is_inline?: boolean;
	/**
	 * Parent of the data source's containing database (typically a page, block, or workspace).
	 */
	database_parent?: {
		/**
		 * Discriminator for the object or property type. Determines which sibling type-specific fields are populated.
		 */
		type?: string;
		/**
		 * True when the parent type is workspace.
		 */
		workspace?: boolean;
		/**
		 * ID of the parent page when type is page_id.
		 */
		page_id?: string;
		/**
		 * ID of the parent database when type is database_id.
		 */
		database_id?: string;
		/**
		 * ID of the parent block when type is block_id.
		 */
		block_id?: string;
	};
	/**
	 * Public URL if the object has been published to the web; otherwise null.
	 */
	public_url?: string;
	/**
	 * Whether the object is in the trash.
	 */
	in_trash?: boolean;
	/**
	 * Set true to move the page to trash; false to restore it.
	 */
	archived?: boolean;
	/**
	 * URL of the Notion object (or of an external file/resource when nested under icon/cover/files).
	 */
	url?: string;
	/**
	 * Data source property schema after searchResponse normalization: array of typed entries (each includes label = property name). Prefer properties_value for a name→config map.
	 */
	properties?: {
		/**
		 * Underlying identifier for the property. Remains constant when the property name changes; may be used in place of name.
		 */
		id?: string;
		/**
		 * Name of the property as it appears in Notion.
		 */
		name?: string;
		/**
		 * Description of the property as it appears in Notion.
		 */
		description?: string;
		/**
		 * Property type controlling behavior (checkbox, title, rich_text, select, status, relation, etc.).
		 */
		type?: string;
		/**
		 * Human-readable label for this property (usually the property name).
		 */
		label?: string;
		/**
		 * People property config (empty) or array of user objects as the page property value.
		 */
		people?: Record<string, JSONValue>;
		/**
		 * URL of the Notion object (or of an external file/resource when nested under icon/cover/files).
		 */
		url?: Record<string, JSONValue>;
		/**
		 * Select property: options config on a data source, or selected option (id/name/color) on a page.
		 */
		select?: {
			/**
			 * Array of select/status options (id, name, color).
			 */
			options?: {
				/**
				 * Identifier for this option. Does not change if the name is changed. Can be used interchangeably with name when writing.
				 */
				id?: string;
				/**
				 * Display name as it appears in Notion.
				 */
				name?: string;
				/**
				 * Text or option color. One of Notion's color / *_background values, or a select/status option color.
				 */
				color?: string;
			}[];
		};
		/**
		 * Status property: options/groups config on a data source, or selected status option on a page.
		 */
		status?: {
			/**
			 * Array of select/status options (id, name, color).
			 */
			options?: {
				/**
				 * Identifier for this option. Does not change if the name is changed. Can be used interchangeably with name when writing.
				 */
				id?: string;
				/**
				 * Display name as it appears in Notion.
				 */
				name?: string;
				/**
				 * Text or option color. One of Notion's color / *_background values, or a select/status option color.
				 */
				color?: string;
			}[];
			/**
			 * Status groups (id, name, color, option_ids).
			 */
			groups?: {
				/**
				 * Identifier for this status group.
				 */
				id?: string;
				/**
				 * Display name as it appears in Notion.
				 */
				name?: string;
				/**
				 * Text or option color. One of Notion's color / *_background values, or a select/status option color.
				 */
				color?: string;
				/**
				 * Sorted list of option ids that belong to this status group.
				 */
				option_ids?: string[];
			}[];
		};
		/**
		 * Email address.
		 */
		email?: Record<string, JSONValue>;
		/**
		 * Phone number property config (empty) or phone number string value. No format is enforced.
		 */
		phone_number?: Record<string, JSONValue>;
		/**
		 * Multi-select property: options config on a data source, or array of selected options on a page.
		 */
		multi_select?: {
			/**
			 * Array of select/status options (id, name, color).
			 */
			options?: {
				/**
				 * Identifier for this option. Does not change if the name is changed. Can be used interchangeably with name when writing.
				 */
				id?: string;
				/**
				 * Display name as it appears in Notion.
				 */
				name?: string;
				/**
				 * Text or option color. One of Notion's color / *_background values, or a select/status option color.
				 */
				color?: string;
			}[];
		};
		/**
		 * Date property config (empty) or date object (start, optional end, time_zone) as the page property value.
		 */
		date?: Record<string, JSONValue>;
		/**
		 * Checkbox property config (empty) or boolean value when used as a page property value.
		 */
		checkbox?: Record<string, JSONValue>;
		/**
		 * Number property: format config on a data source, or numeric value on a page / unique_id count.
		 */
		number?: {
			/**
			 * How the number displays in Notion (number, percent, dollar, euro, etc.).
			 */
			format?: string;
		};
		/**
		 * Files property config (empty) or array of file objects as the page property value.
		 */
		files?: Record<string, JSONValue>;
		/**
		 * Rich text property config (empty) or array of rich text items as the page property value.
		 */
		rich_text?: Record<string, JSONValue>;
		/**
		 * Text payload for a rich text item of type text (content + optional link).
		 */
		text?: Record<string, JSONValue>;
		/**
		 * Formula property: expression config on a data source, or computed result on a page.
		 */
		formula?: {
			/**
			 * The formula used to compute values. Refer to the Notion help center for syntax.
			 */
			expression?: string;
		};
		/**
		 * Relation property config (data_source_id, optional dual_property) or array of related page references / relation value object.
		 */
		relation?: {
			/**
			 * ID of the parent data source when type is data_source_id.
			 */
			data_source_id?: string;
			/**
			 * ID of the parent database when type is database_id.
			 */
			database_id?: string;
			/**
			 * Name of the corresponding property in the related data source for a dual relation.
			 */
			synced_property_name?: string;
			/**
			 * ID of the corresponding property in the related data source for a dual relation.
			 */
			synced_property_id?: string;
			/**
			 * Bidirectional relation sync metadata (synced_property_id, synced_property_name).
			 */
			dual_property?: {
				/**
				 * ID of the corresponding property in the related data source for a dual relation.
				 */
				synced_property_id?: string;
				/**
				 * Name of the corresponding property in the related data source for a dual relation.
				 */
				synced_property_name?: string;
			};
		};
		/**
		 * Rollup property config (relation/rollup property refs + function) or computed rollup value on a page.
		 */
		rollup?: {
			/**
			 * Name of the relation property used by this rollup.
			 */
			relation_property_name?: string;
			/**
			 * Name of the property being rolled up.
			 */
			rollup_property_name?: string;
			/**
			 * ID of the relation property used by this rollup.
			 */
			relation_property_id?: string;
			/**
			 * ID of the property being rolled up.
			 */
			rollup_property_id?: string;
			/**
			 * Rollup aggregation function (e.g. sum, count, average, show_original).
			 */
			function?: string;
		};
		/**
		 * Unique ID property: optional prefix config on a data source, or {number, prefix} value on a page (read-only).
		 */
		unique_id?: {
			/**
			 * Optional prefix applied to the unique ID (e.g. TASK).
			 */
			prefix?: string;
		};
		/**
		 * ISO 8601 date and time when this object was last edited.
		 */
		last_edited_time?: Record<string, JSONValue>;
		/**
		 * Partial user object for who last edited this object.
		 */
		last_edited_by?: Record<string, JSONValue>;
		/**
		 * ISO 8601 date and time when this object was created.
		 */
		created_time?: Record<string, JSONValue>;
		/**
		 * Partial user object for who created this object.
		 */
		created_by?: Record<string, JSONValue>;
	}[];
	/**
	 * Map of property name to schema/config payload, derived from properties by searchResponse.
	 */
	properties_value?: Record<string, JSONValue>;
	/**
	 * Parent of this object (page_id, database_id, data_source_id, workspace, or block_id).
	 */
	parent?: {
		/**
		 * Parent type. One of: page_id, database_id, data_source_id, workspace, block_id.
		 */
		type?: string;
		/**
		 * True when the parent type is workspace.
		 */
		workspace?: boolean;
		/**
		 * ID of the parent page when type is page_id.
		 */
		page_id?: string;
		/**
		 * ID of the parent database when type is database_id.
		 */
		database_id?: string;
		/**
		 * ID of the parent data source when type is data_source_id.
		 */
		data_source_id?: string;
		/**
		 * ID of the parent block when type is block_id.
		 */
		block_id?: string;
	};
};

/**
 * Get a data source
 * Gets a specified data source.
 */
export async function getDataSource(
	this: EndpointFunctionThis,
	payload: {
		input: GetDataSourceInput;
		connectionId: number;
	},
): Promise<GetDataSourceOutput> {
	const response = await this.endpointCaller<GetDataSourceOutput>(
		{
			appName: 'notion',
			appVersion: 1,
			endpointName: 'getDataSource',
		},
		payload,
	);
	return response.output;
}
