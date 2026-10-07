// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type QueryDataSourceInput = {
	/**
	 * ID of the data source whose pages (rows) to query.
	 */
	id: string;
	/**
	 * Notion filter object. See https://developers.notion.com/reference/filter-data-source-entries
	 */
	filter?: Record<string, JSONValue>;
	/**
	 * Sort conditions applied in order. Each entry uses property or timestamp plus direction.
	 */
	sorts?: {
		/**
		 * Name of the property to sort against.
		 */
		property?: string;
		/**
		 * Timestamp to sort against when not sorting by a property. created_time or last_edited_time.
		 */
		timestamp?: '' | 'created_time' | 'last_edited_time';
		/**
		 * Sort direction: ascending or descending.
		 */
		direction?: '' | 'ascending' | 'descending';
	}[];
	/**
	 * Cursor from a previous response's next_cursor. Omit on the first request.
	 */
	startCursor?: string;
	/**
	 * Number of pages to return (max 100). Defaults to 100.
	 */
	pageSize?: number;
};

export type QueryDataSourceOutput = {
	/**
	 * Always one of the Notion object type names (e.g. page, database, data_source, list, user).
	 */
	object?: string;
	/**
	 * Array of page (row) objects returned by the query for this page of results.
	 */
	results?: {
		/**
		 * Always one of the Notion object type names (e.g. page, database, data_source, list, user).
		 */
		object?: string;
		/**
		 * ID of a page (row) returned by the query.
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
		properties?: JSONValue[];
		/**
		 * Map of property name to typed value, derived from properties by searchResponse.
		 */
		properties_value?: Record<string, JSONValue>;
	}[];
	/**
	 * Cursor to pass as start_cursor to fetch the next page of results. Null when has_more is false.
	 */
	next_cursor?: string;
	/**
	 * Whether more results are available beyond this page.
	 */
	has_more?: boolean;
	/**
	 * Always "list" for paginated Notion list responses.
	 */
	type?: string;
	/**
	 * Notion list discriminator for result object kinds (API 2026-03-11).
	 */
	page_or_data_source?: string;
	/**
	 * Notion request ID for this API call.
	 */
	request_id?: string;
};

/**
 * Query a data source
 * Queries pages in a data source. Supports manual pagination via startCursor and next_cursor.
 */
export async function queryDataSource(
	this: EndpointFunctionThis,
	payload: {
		input: QueryDataSourceInput;
		connectionId: number;
	},
): Promise<QueryDataSourceOutput> {
	const response = await this.endpointCaller<QueryDataSourceOutput>(
		{
			appName: 'notion',
			appVersion: 1,
			endpointName: 'queryDataSource',
		},
		payload,
	);
	return response.output;
}
