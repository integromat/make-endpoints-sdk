// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetPageMarkdownInput = {
	/**
	 * ID of the page or block whose children you want. Any block ID works, not just a page — this is how you descend into nested content. Accepts the hyphenated or unhyphenated UUID form.
	 */
	blockId: string;
	/**
	 * Pass the `next_cursor` from the previous response to get the next page of blocks. Omit for the first page.
	 */
	startCursor?: string;
	/**
	 * Number of blocks to return, 1 to 100. Defaults to 100.
	 */
	pageSize?: number;
};

export type GetPageMarkdownOutput = {
	/**
	 * Experimental. The blocks in this response rendered as Markdown. This is a derived convenience field - results is the authoritative content, and the rendering may change as block-type coverage improves. It covers only the blocks in this response: content under a block with has_children is absent until you call again with that block ID, and an HTML comment of the form <!-- nested: type id --> marks every place that happens. Block types with no Markdown mapping contribute no text here but remain in results.
	 */
	markdown?: string;
	/**
	 * Always `list` for a paginated Notion list response.
	 */
	object?: string;
	/**
	 * Always `block` for a block children response.
	 */
	type?: string;
	/**
	 * An empty object included by Notion as the list discriminator.
	 */
	block?: Record<string, JSONValue>;
	/**
	 * Child blocks of the requested block, in document order. Empty array when the block has no children.
	 *
	 * Items: A Notion block object. `type` names the one type-specific field that is populated.
	 */
	results?: {
		/**
		 * Always `block`.
		 */
		object?: string;
		/**
		 * ID of this block. Pass it back as `blockId` to read its children.
		 */
		id?: string;
		/**
		 * Block type. Only the sibling field with this same name is populated.
		 */
		type?: string;
		/**
		 * Whether this block has nested content. When true, that content is NOT in this response — call the endpoint again with this block's `id`.
		 */
		has_children?: boolean;
		/**
		 * Parent of this block. Not always the block you queried — some blocks report a `workspace` parent.
		 */
		parent?: {
			/**
			 * One of: page_id, block_id, database_id, data_source_id, workspace.
			 */
			type?: string;
			/**
			 * ID of the parent page when type is `page_id`.
			 */
			page_id?: string;
			/**
			 * ID of the parent block when type is `block_id`. Set on blocks nested inside a toggle, column, or table.
			 */
			block_id?: string;
			/**
			 * ID of the parent database when type is `database_id`.
			 */
			database_id?: string;
			/**
			 * ID of the parent data source when type is `data_source_id`.
			 */
			data_source_id?: string;
			/**
			 * True when the parent type is `workspace`.
			 */
			workspace?: boolean;
		};
		/**
		 * ISO 8601 date and time when this block was created.
		 */
		created_time?: string;
		/**
		 * ISO 8601 date and time when this block was last edited.
		 */
		last_edited_time?: string;
		/**
		 * Partial user object for who created this block. In practice contains only `object` and `id`.
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
		 * Partial user object for who last edited this block. In practice contains only `object` and `id`.
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
		 * Whether this block is in the trash.
		 */
		in_trash?: boolean;
		/**
		 * Alias of `in_trash` added by `aliasFields` for compatibility with the legacy Notion field name.
		 */
		archived?: boolean;
		/**
		 * Populated when `type` is `paragraph`.
		 */
		paragraph?: {
			/**
			 * Text content. Concatenate `plain_text` across items for the plain string. Empty array for a blank line.
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
					 * Color of the text or its background, for example `default`, `red`, or `yellow_background`.
					 */
					color?: string;
				};
			}[];
			/**
			 * Optional icon on the paragraph. Normally null. Same union as a page or callout icon.
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
					 * Name of the Notion icon.
					 */
					name?: string;
					/**
					 * Color variant of the Notion icon.
					 */
					color?: string;
				};
			};
			/**
			 * Block text or background color, `default` when unstyled.
			 */
			color?: string;
		};
		/**
		 * Populated when `type` is `heading_1`.
		 */
		heading_1?: {
			/**
			 * Heading text.
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
			 * Block text or background color.
			 */
			color?: string;
			/**
			 * Whether the heading collapses. When true the block also has children.
			 */
			is_toggleable?: boolean;
		};
		/**
		 * Populated when `type` is `heading_2`. Same shape as `heading_1`.
		 */
		heading_2?: {
			/**
			 * Heading text.
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
			 * Block text or background color.
			 */
			color?: string;
			/**
			 * Whether the heading collapses. When true the block also has children.
			 */
			is_toggleable?: boolean;
		};
		/**
		 * Populated when `type` is `heading_3`. Same shape as `heading_1`.
		 */
		heading_3?: {
			/**
			 * Heading text.
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
			 * Block text or background color.
			 */
			color?: string;
			/**
			 * Whether the heading collapses. When true the block also has children.
			 */
			is_toggleable?: boolean;
		};
		/**
		 * Populated when `type` is `bulleted_list_item`.
		 */
		bulleted_list_item?: {
			/**
			 * Item text.
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
			 * Block text or background color.
			 */
			color?: string;
		};
		/**
		 * Populated when `type` is `numbered_list_item`. Notion does not return the item's number — derive it from position.
		 */
		numbered_list_item?: {
			/**
			 * Item text.
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
			 * Block text or background color.
			 */
			color?: string;
		};
		/**
		 * Populated when `type` is `to_do`.
		 */
		to_do?: {
			/**
			 * To-do text.
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
			 * Whether the checkbox is ticked.
			 */
			checked?: boolean;
			/**
			 * Block text or background color.
			 */
			color?: string;
		};
		/**
		 * Populated when `type` is `toggle`. Its contents are children — fetch them with this block's `id`.
		 */
		toggle?: {
			/**
			 * The toggle's summary line.
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
			 * Block text or background color.
			 */
			color?: string;
		};
		/**
		 * Populated when `type` is `code`.
		 */
		code?: {
			/**
			 * The code itself.
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
			 * Caption below the code block.
			 */
			caption?: {
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
			 * Syntax highlighting language, for example `javascript` or `plain text`.
			 */
			language?: string;
		};
		/**
		 * Populated when `type` is `quote`.
		 */
		quote?: {
			/**
			 * Quote text.
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
			 * Block text or background color.
			 */
			color?: string;
		};
		/**
		 * Populated when `type` is `callout`. Often has children.
		 */
		callout?: {
			/**
			 * Callout text.
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
			 * Callout icon. Same union as a page icon.
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
					 * Name of the Notion icon.
					 */
					name?: string;
					/**
					 * Color variant of the Notion icon.
					 */
					color?: string;
				};
			};
			/**
			 * Block text or background color, for example `yellow_background`.
			 */
			color?: string;
		};
		/**
		 * Populated when `type` is `divider`. Always an empty object.
		 */
		divider?: Record<string, JSONValue>;
		/**
		 * Populated when `type` is `equation`.
		 */
		equation?: {
			/**
			 * KaTeX-compatible expression.
			 */
			expression?: string;
		};
		/**
		 * Populated when `type` is `image`. The same shape is used by `video`, `audio`, `pdf`, and `file`, which are returned but not declared here.
		 */
		image?: {
			/**
			 * Either `file` for Notion-hosted or `external`.
			 */
			type?: string;
			/**
			 * Populated when `type` is `file`. The URL is temporary.
			 */
			file?: {
				/**
				 * Temporary URL of the Notion-hosted file.
				 */
				url?: string;
				/**
				 * When the temporary URL stops working, normally one hour out.
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
			/**
			 * Caption shown below the image.
			 */
			caption?: {
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
		};
		/**
		 * Populated when `type` is `bookmark`. `embed` and `link_preview` share this shape.
		 */
		bookmark?: {
			/**
			 * The bookmarked web address.
			 */
			url?: string;
			/**
			 * Caption shown below the bookmark.
			 */
			caption?: {
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
		};
		/**
		 * Populated when `type` is `child_page`. The block `id` is also the page ID — pass it back to read the nested page.
		 */
		child_page?: Record<string, JSONValue>;
		/**
		 * Populated when `type` is `child_database`. Use `queryDataSource` to read its rows.
		 */
		child_database?: Record<string, JSONValue>;
		/**
		 * Populated when `type` is `table`. Rows are children — fetch them with this block's `id`.
		 */
		table?: {
			/**
			 * Number of columns. Fixed once the table is created.
			 */
			table_width?: number;
			/**
			 * Whether the first row is a header row.
			 */
			has_column_header?: boolean;
			/**
			 * Whether the first column is a header column.
			 */
			has_row_header?: boolean;
		};
		/**
		 * Populated when `type` is `table_row`. Only returned when calling this endpoint on a table block.
		 */
		table_row?: {
			/**
			 * One entry per column, each itself an array of rich text objects.
			 */
			cells?: {
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
			}[][];
		};
		/**
		 * Populated when `type` is `link_to_page`.
		 */
		link_to_page?: {
			/**
			 * One of: page_id, database_id, data_source_id, comment_id.
			 */
			type?: string;
			/**
			 * ID of the linked page when type is `page_id`.
			 */
			page_id?: string;
			/**
			 * ID of the linked database when type is `database_id`.
			 */
			database_id?: string;
		};
		/**
		 * Populated when `type` is `unsupported` — a block the API cannot read. Always empty.
		 */
		unsupported?: Record<string, JSONValue>;
	}[];
	/**
	 * Cursor to pass as `startCursor` to fetch the next page of blocks. Null when `has_more` is false.
	 */
	next_cursor?: string;
	/**
	 * Whether more child blocks exist beyond this page.
	 */
	has_more?: boolean;
	/**
	 * Unique identifier Notion assigns to this API request.
	 */
	request_id?: string;
};

/**
 * Get page markdown
 * Returns a page's content as Markdown, with the raw blocks.
 */
export async function getPageMarkdown(
	this: EndpointFunctionThis,
	payload: {
		input: GetPageMarkdownInput;
		connectionId: number;
	},
): Promise<GetPageMarkdownOutput> {
	const response = await this.endpointCaller<GetPageMarkdownOutput>(
		{
			appName: 'notion',
			appVersion: 1,
			endpointName: 'getPageMarkdown',
		},
		payload,
	);
	return response.output;
}
