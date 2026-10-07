// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SearchPagesInput = {
	/**
	 * Text used to match against page titles. Omit to return every page shared with the connection.
	 */
	query?: string;
	/**
	 * Sort results by `last_edited_time`. Defaults to `descending`, so the most recently edited pages come first.
	 */
	sortDirection?: '' | 'ascending' | 'descending';
	/**
	 * Cursor taken from a previous response's `next_cursor` to fetch the next page of results. Omit on the first request.
	 */
	startCursor?: string;
	/**
	 * Number of results to return (1-100). Defaults to 100.
	 */
	pageSize?: number;
};

export type SearchPagesOutput = {
	/**
	 * Always `list` for a paginated Notion list response.
	 */
	object?: string;
	/**
	 * Always `page_or_data_source` for a search response.
	 */
	type?: string;
	/**
	 * An empty object included by Notion as the list discriminator (API 2026-03-11).
	 */
	page_or_data_source?: Record<string, JSONValue>;
	/**
	 * The pages matching the query, after `searchResponse` normalization.
	 *
	 * Items: A Notion page object.
	 */
	results?: {
		/**
		 * Always `page`.
		 */
		object?: string;
		/**
		 * ID of the Notion page.
		 */
		id?: string;
		/**
		 * ISO 8601 date and time when this page was created.
		 */
		created_time?: string;
		/**
		 * ISO 8601 date and time when this page was last edited.
		 */
		last_edited_time?: string;
		/**
		 * Partial user object for who created this page. May contain only `object` and `id`.
		 */
		created_by?: {
			/**
			 * Always `user`.
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
			 * User type, either `person` or `bot`.
			 */
			type?: string;
			/**
			 * Details about the person when user type is `person`.
			 */
			person?: {
				/**
				 * Email of the person.
				 */
				email?: string;
			};
		};
		/**
		 * Partial user object for who last edited this page. May contain only `object` and `id`.
		 */
		last_edited_by?: {
			/**
			 * Always `user`.
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
			 * User type, either `person` or `bot`.
			 */
			type?: string;
			/**
			 * Details about the person when user type is `person`.
			 */
			person?: {
				/**
				 * Email of the person.
				 */
				email?: string;
			};
		};
		/**
		 * Page icon, or null when unset. Discriminated union on `type`.
		 */
		icon?: {
			/**
			 * Icon type. One of: emoji, custom_emoji, icon, external, file.
			 */
			type?: string;
			/**
			 * Standard emoji character used as the icon.
			 */
			emoji?: string;
			/**
			 * Externally hosted image referenced by URL.
			 */
			external?: {
				/**
				 * URL of the external file or resource.
				 */
				url?: string;
			};
			/**
			 * Notion-hosted file object.
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
			/**
			 * Workspace custom emoji used as the icon.
			 */
			custom_emoji?: {
				/**
				 * ID of the custom emoji.
				 */
				id?: string;
				/**
				 * Name of the custom emoji.
				 */
				name?: string;
				/**
				 * URL of the custom emoji image.
				 */
				url?: string;
			};
			/**
			 * Notion native icon, specified by name and color.
			 */
			icon?: {
				/**
				 * Name of the Notion icon, for example `pizza`, `meeting`, or `home`.
				 */
				name?: string;
				/**
				 * Color variant: gray, lightgray, brown, yellow, orange, green, blue, purple, pink, or red.
				 */
				color?: string;
			};
		};
		/**
		 * Page cover image, or null when unset. Discriminated union on `type`.
		 */
		cover?: {
			/**
			 * Cover type, either `external` or `file`.
			 */
			type?: string;
			/**
			 * Externally hosted image referenced by URL.
			 */
			external?: {
				/**
				 * URL of the external file or resource.
				 */
				url?: string;
			};
			/**
			 * Notion-hosted file object.
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
		 * URL of the Notion page.
		 */
		url?: string;
		/**
		 * Public URL if the page has been published to the web; otherwise null.
		 */
		public_url?: string;
		/**
		 * Whether the page is in the trash.
		 */
		in_trash?: boolean;
		/**
		 * Alias of `in_trash` added by `aliasFields` for compatibility with the legacy Notion field name.
		 */
		archived?: boolean;
		/**
		 * Whether the page has been archived.
		 */
		is_archived?: boolean;
		/**
		 * Whether the page is locked from editing in the Notion app UI.
		 */
		is_locked?: boolean;
		/**
		 * Parent of this page. The field matching `type` is populated; a `data_source_id` parent also carries `database_id`.
		 */
		parent?: {
			/**
			 * Parent type. One of: database_id, data_source_id, page_id, block_id, agent_id, workspace.
			 */
			type?: string;
			/**
			 * True when the parent type is `workspace`.
			 */
			workspace?: boolean;
			/**
			 * ID of the parent page when type is `page_id`.
			 */
			page_id?: string;
			/**
			 * ID of the parent database. Also present alongside `data_source_id`.
			 */
			database_id?: string;
			/**
			 * ID of the parent data source when type is `data_source_id`.
			 */
			data_source_id?: string;
			/**
			 * ID of the parent block when type is `block_id`.
			 */
			block_id?: string;
			/**
			 * ID of the parent agent when type is `agent_id`.
			 */
			agent_id?: string;
		};
		/**
		 * Page property values after `searchResponse` normalization: an array of typed entries, each including `label` = the property name. Only the field matching `type` is populated, and it is null when the property is empty. Prefer `properties_value` for a name-to-value map.
		 *
		 * Items: A single page property value.
		 */
		properties?: {
			/**
			 * Underlying identifier for the property. Remains constant when the property name changes.
			 */
			id?: string;
			/**
			 * Property type controlling which sibling field is populated (title, rich_text, select, relation, etc.).
			 */
			type?: string;
			/**
			 * The property name, added by `searchResponse`.
			 */
			label?: string;
			/**
			 * Array of rich text objects. Concatenate `plain_text` across items for the full string.
			 */
			rich_text?: {
				/**
				 * One of `text`, `mention`, or `equation`.
				 */
				type?: string;
				/**
				 * The text content without any annotations.
				 */
				plain_text?: string;
				/**
				 * URL of any link or mention in this text, if any.
				 */
				href?: string;
				/**
				 * Populated when `type` is `text`.
				 */
				text?: {
					/**
					 * The actual text content.
					 */
					content?: string;
					/**
					 * Inline link, or null when the text is not a link.
					 */
					link?: {
						/**
						 * The link target.
						 */
						url?: string;
					};
				};
				/**
				 * Styling applied to this text.
				 */
				annotations?: {
					/**
					 * Whether the text is bolded.
					 */
					bold?: boolean;
					/**
					 * Whether the text is italicized.
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
					 * Whether the text is code style.
					 */
					code?: boolean;
					/**
					 * Color of the text or its background.
					 */
					color?: string;
				};
			}[];
			/**
			 * Numeric value of the property, or null when empty.
			 */
			number?: number;
			/**
			 * The selected option, or null when empty.
			 */
			select?: {
				/**
				 * Identifier for this option.
				 */
				id?: string;
				/**
				 * Display name as it appears in Notion.
				 */
				name?: string;
				/**
				 * One of Notion's option colors.
				 */
				color?: string;
			};
			/**
			 * Array of selected options. Empty array when nothing is selected.
			 */
			multi_select?: {
				/**
				 * Identifier for this option.
				 */
				id?: string;
				/**
				 * Display name as it appears in Notion.
				 */
				name?: string;
				/**
				 * One of Notion's option colors.
				 */
				color?: string;
			}[];
			/**
			 * The selected status option.
			 */
			status?: {
				/**
				 * Identifier for this status option.
				 */
				id?: string;
				/**
				 * Display name as it appears in Notion.
				 */
				name?: string;
				/**
				 * One of Notion's option colors.
				 */
				color?: string;
			};
			/**
			 * Date value, or null when empty.
			 */
			date?: {
				/**
				 * ISO 8601 start date or date-time.
				 */
				start?: string;
				/**
				 * ISO 8601 end date or date-time for a range; null otherwise.
				 */
				end?: string;
				/**
				 * Time zone of the date, or null when unset.
				 */
				time_zone?: string;
			};
			/**
			 * Whether the checkbox is checked.
			 */
			checkbox?: boolean;
			/**
			 * Web address value of the property, or null when empty.
			 */
			url?: string;
			/**
			 * Email address value of the property, or null when empty.
			 */
			email?: string;
			/**
			 * Phone number value, or null when empty. No format is enforced.
			 */
			phone_number?: string;
			/**
			 * Array of file objects attached to the property. Empty array when none.
			 */
			files?: {
				/**
				 * Name of the file.
				 */
				name?: string;
				/**
				 * Either `file` for Notion-hosted or `external` for externally hosted.
				 */
				type?: string;
				/**
				 * Populated when `type` is `file`.
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
				/**
				 * Populated when `type` is `external`.
				 */
				external?: {
					/**
					 * URL of the externally hosted file.
					 */
					url?: string;
				};
			}[];
			/**
			 * Array of user objects assigned to the property. Empty array when none.
			 */
			people?: {
				/**
				 * Always `user`.
				 */
				object?: string;
				/**
				 * User ID.
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
				 * User type, either `person` or `bot`.
				 */
				type?: string;
				/**
				 * Details about the person when user type is `person`.
				 */
				person?: {
					/**
					 * Email of the person.
					 */
					email?: string;
				};
			}[];
			/**
			 * Computed formula result. `type` says which sibling field carries the value.
			 */
			formula?: {
				/**
				 * Result type: `boolean`, `date`, `number`, `string`, or `unsupported`.
				 */
				type?: string;
				/**
				 * Result when `type` is `string`.
				 */
				string?: string;
				/**
				 * Result when `type` is `number`.
				 */
				number?: number;
				/**
				 * Result when `type` is `boolean`.
				 */
				boolean?: boolean;
				/**
				 * Result when `type` is `date`.
				 */
				date?: {
					/**
					 * ISO 8601 start date or date-time.
					 */
					start?: string;
					/**
					 * ISO 8601 end date or date-time for a range; null otherwise.
					 */
					end?: string;
					/**
					 * Time zone of the date, or null when unset.
					 */
					time_zone?: string;
				};
			};
			/**
			 * Array of related page references. Empty array when none.
			 */
			relation?: {
				/**
				 * ID of a page in the related data source.
				 */
				id?: string;
			}[];
			/**
			 * Present on `relation` properties: whether more than 25 relations exist. Retrieve the property item to get the rest.
			 */
			has_more?: boolean;
			/**
			 * Computed rollup value. `type` says which sibling field carries the value.
			 */
			rollup?: {
				/**
				 * Value type: `array`, `date`, `incomplete`, `number`, or `unsupported`.
				 */
				type?: string;
				/**
				 * The aggregation function applied, for example `sum` or `count`.
				 */
				function?: string;
				/**
				 * Result when `type` is `number`.
				 */
				number?: number;
				/**
				 * Result when `type` is `date`.
				 */
				date?: {
					/**
					 * ISO 8601 start date or date-time.
					 */
					start?: string;
					/**
					 * ISO 8601 end date or date-time for a range; null otherwise.
					 */
					end?: string;
					/**
					 * Time zone of the date, or null when unset.
					 */
					time_zone?: string;
				};
				/**
				 * Result when `type` is `array`: a list of property values collected from the related pages.
				 *
				 * Items: One collected property value. Its keys follow that property's own type, so the shape varies with the rolled-up property.
				 */
				array?: Record<string, JSONValue>[];
			};
			/**
			 * Read-only unique ID value.
			 */
			unique_id?: {
				/**
				 * The generated unique number.
				 */
				number?: number;
				/**
				 * Optional prefix applied to the unique ID, for example `TASK`.
				 */
				prefix?: string;
			};
			/**
			 * ISO 8601 creation timestamp exposed as a page property.
			 */
			created_time?: string;
			/**
			 * Partial user object exposed as a page property.
			 */
			created_by?: {
				/**
				 * Always `user`.
				 */
				object?: string;
				/**
				 * User ID.
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
				 * User type, either `person` or `bot`.
				 */
				type?: string;
			};
			/**
			 * ISO 8601 last-edited timestamp exposed as a page property.
			 */
			last_edited_time?: string;
			/**
			 * Partial user object exposed as a page property.
			 */
			last_edited_by?: {
				/**
				 * Always `user`.
				 */
				object?: string;
				/**
				 * User ID.
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
				 * User type, either `person` or `bot`.
				 */
				type?: string;
			};
			/**
			 * Verification state of a wiki page.
			 */
			verification?: {
				/**
				 * Either `verified` or `unverified`.
				 */
				state?: string;
				/**
				 * Partial user object for who verified the page, or null when unverified.
				 */
				verified_by?: {
					/**
					 * Always `user`.
					 */
					object?: string;
					/**
					 * User ID of the verifier.
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
					 * User type, either `person` or `bot`.
					 */
					type?: string;
				};
				/**
				 * When the verification was set and when it expires, or null when unverified.
				 */
				date?: {
					/**
					 * ISO 8601 date the verification began.
					 */
					start?: string;
					/**
					 * ISO 8601 date the verification expires; null when it does not.
					 */
					end?: string;
					/**
					 * Time zone of the date, or null when unset.
					 */
					time_zone?: string;
				};
			};
		}[];
		/**
		 * Map of property name to its raw typed value, derived from `properties` by `searchResponse`. Keys are the page's own property names, so the shape varies per page.
		 */
		properties_value?: Record<string, JSONValue>;
	}[];
	/**
	 * Cursor to pass as `startCursor` to fetch the next page of results. Null when `has_more` is false.
	 */
	next_cursor?: string;
	/**
	 * Whether more results are available beyond this page.
	 */
	has_more?: boolean;
	/**
	 * Unique identifier Notion assigns to this API request. Useful when reporting an issue to Notion support.
	 */
	request_id?: string;
};

/**
 * Search pages
 * Searches for pages by title.
 */
export async function searchPages(
	this: EndpointFunctionThis,
	payload: {
		input: SearchPagesInput;
		connectionId: number;
	},
): Promise<SearchPagesOutput> {
	const response = await this.endpointCaller<SearchPagesOutput>(
		{
			appName: 'notion',
			appVersion: 1,
			endpointName: 'searchPages',
		},
		payload,
	);
	return response.output;
}
