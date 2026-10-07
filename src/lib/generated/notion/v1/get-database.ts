// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetDatabaseInput = {
	/**
	 * ID of a Notion database (container for one or more data sources).
	 */
	id: string;
};

export type GetDatabaseOutput = {
	/**
	 * Always one of the Notion object type names (e.g. page, database, data_source, list, user).
	 */
	object?: string;
	/**
	 * ID of a Notion database (container for one or more data sources).
	 */
	id?: string;
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
	 * Whether the database/data source is inline.
	 */
	is_inline?: boolean;
	/**
	 * Whether the object is in the trash. Aliased from in_trash for BC.
	 */
	archived?: boolean;
	/**
	 * Whether the object is in the trash.
	 */
	in_trash?: boolean;
	/**
	 * Whether the object is locked from editing in the Notion app UI.
	 */
	is_locked?: boolean;
	/**
	 * ISO 8601 date and time when this object was created.
	 */
	created_time?: string;
	/**
	 * ISO 8601 date and time when this object was last edited.
	 */
	last_edited_time?: string;
	/**
	 * Data sources contained in this database.
	 */
	data_sources?: {
		/**
		 * The ID of the data source.
		 */
		id?: string;
		/**
		 * The name of the data source.
		 */
		name?: string;
	}[];
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
	 * URL of the Notion object (or of an external file/resource when nested under icon/cover/files).
	 */
	url?: string;
	/**
	 * Public URL if the object has been published to the web; otherwise null.
	 */
	public_url?: string;
};

/**
 * Get a database
 * Gets a specified database.
 */
export async function getDatabase(
	this: EndpointFunctionThis,
	payload: {
		input: GetDatabaseInput;
		connectionId: number;
	},
): Promise<GetDatabaseOutput> {
	const response = await this.endpointCaller<GetDatabaseOutput>(
		{
			appName: 'notion',
			appVersion: 1,
			endpointName: 'getDatabase',
		},
		payload,
	);
	return response.output;
}
