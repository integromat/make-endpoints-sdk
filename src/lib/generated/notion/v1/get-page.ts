// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetPageInput = {
	/**
	 * ID of the page to retrieve.
	 */
	id: string;
};

export type GetPageOutput = {
	/**
	 * Always one of the Notion object type names (e.g. page, database, data_source, list, user).
	 */
	object?: string;
	/**
	 * ID of the page to retrieve.
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
	 * Set true to move the page to trash; false to restore it.
	 */
	archived?: boolean;
	/**
	 * Whether the object is in the trash.
	 */
	in_trash?: boolean;
	/**
	 * Whether the page has been archived.
	 */
	is_archived?: boolean;
	/**
	 * Whether the object is locked from editing in the Notion app UI.
	 */
	is_locked?: boolean;
	/**
	 * URL of the Notion object (or of an external file/resource when nested under icon/cover/files).
	 */
	url?: string;
	/**
	 * Public URL if the object has been published to the web; otherwise null.
	 */
	public_url?: string;
	/**
	 * Page property values after searchResponse normalization: array of typed entries (each includes label = property name). Prefer properties_value for a name→value map.
	 */
	properties?: {
		/**
		 * Underlying identifier for the property. Remains constant when the property name changes; may be used in place of name.
		 */
		id?: string;
		/**
		 * Property type controlling behavior (checkbox, title, rich_text, select, status, relation, etc.).
		 */
		type?: string;
		/**
		 * Human-readable label for this property (usually the property name).
		 */
		label?: string;
		/**
		 * Name of the property as it appears in Notion.
		 */
		name?: string;
		/**
		 * People property config (empty) or array of user objects as the page property value.
		 */
		people?: {
			/**
			 * Always one of the Notion object type names (e.g. page, database, data_source, list, user).
			 */
			object?: string;
			/**
			 * User ID of a person mentioned in this property.
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
		}[];
		/**
		 * URL of the Notion object (or of an external file/resource when nested under icon/cover/files).
		 */
		url?: string;
		/**
		 * Rich text property config (empty) or array of rich text items as the page property value.
		 */
		rich_text?: JSONValue[];
		/**
		 * Text payload for a rich text item of type text (content + optional link).
		 */
		text?: JSONValue[];
		/**
		 * Select property: options config on a data source, or selected option (id/name/color) on a page.
		 */
		select?: {
			/**
			 * ID of the select option. You can use id or name when updating.
			 */
			id?: string;
			/**
			 * Name of the select option as it appears in Notion. Commas are not valid.
			 */
			name?: string;
			/**
			 * Color of the option. Cannot be updated via the API.
			 */
			color?: string;
		};
		/**
		 * Status property: options/groups config on a data source, or selected status option on a page.
		 */
		status?: {
			/**
			 * ID of the status option.
			 */
			id?: string;
			/**
			 * Name of the status option as it appears in Notion.
			 */
			name?: string;
			/**
			 * Color of the status option. Cannot be updated via the API.
			 */
			color?: string;
		};
		/**
		 * Email address.
		 */
		email?: string;
		/**
		 * Phone number property config (empty) or phone number string value. No format is enforced.
		 */
		phone_number?: string;
		/**
		 * Multi-select property: options config on a data source, or array of selected options on a page.
		 */
		multi_select?: JSONValue[];
		/**
		 * Date property config (empty) or date object (start, optional end, time_zone) as the page property value.
		 */
		date?: {
			/**
			 * A date, with an optional time. If the value is a range, start is the start of the range.
			 */
			start?: string;
			/**
			 * Optional end of a date range. Null if the date value is not a range.
			 */
			end?: string;
			/**
			 * IANA time zone of the date object, if any.
			 */
			time_zone?: string;
		};
		/**
		 * Checkbox property config (empty) or boolean value when used as a page property value.
		 */
		checkbox?: boolean;
		/**
		 * Number property: format config on a data source, or numeric value on a page / unique_id count.
		 */
		number?: number;
		/**
		 * Files property config (empty) or array of file objects as the page property value.
		 */
		files?: JSONValue[];
		/**
		 * ISO 8601 date and time when this object was last edited.
		 */
		last_edited_time?: string;
		/**
		 * ISO 8601 date and time when this object was created.
		 */
		created_time?: string;
		/**
		 * Partial user object for who last edited this object.
		 */
		last_edited_by?: Record<string, JSONValue>;
		/**
		 * Partial user object for who created this object.
		 */
		created_by?: Record<string, JSONValue>;
		/**
		 * Formula property: expression config on a data source, or computed result on a page.
		 */
		formula?: Record<string, JSONValue>;
		/**
		 * Relation property config (data_source_id, optional dual_property) or array of related page references / relation value object.
		 */
		relation?: JSONValue[];
		/**
		 * Rollup property config (relation/rollup property refs + function) or computed rollup value on a page.
		 */
		rollup?: Record<string, JSONValue>;
		/**
		 * Unique ID property: optional prefix config on a data source, or {number, prefix} value on a page (read-only).
		 */
		unique_id?: Record<string, JSONValue>;
		/**
		 * Wiki verification status of a page (state, verified_by, date).
		 */
		verification?: Record<string, JSONValue>;
	}[];
	/**
	 * Map of property name to typed value, derived from properties by searchResponse.
	 */
	properties_value?: Record<string, JSONValue>;
};

/**
 * Get a page
 * Gets a specified page.
 */
export async function getPage(
	this: EndpointFunctionThis,
	payload: {
		input: GetPageInput;
		connectionId: number;
	},
): Promise<GetPageOutput> {
	const response = await this.endpointCaller<GetPageOutput>(
		{
			appName: 'notion',
			appVersion: 1,
			endpointName: 'getPage',
		},
		payload,
	);
	return response.output;
}
