// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type BatchUpdatePresentationInput = {
	/**
	 * The ID of the presentation to apply the updates to. You can find this in the presentation URL: docs.google.com/presentation/d/{presentationId}/edit
	 */
	presentationId: string;
	/**
	 * A list of updates to apply to the presentation. Each item is one Request: set exactly one of createSlide, deleteObject, insertText, duplicateObject, replaceAllText, updateSlideProperties, updateSlidesPosition, updateTextStyle, refreshSheetsChart, replaceAllShapesWithImage, or replaceImage. All requests are validated before any are applied -- if any request is invalid, the entire batch fails. See the [presentations.batchUpdate reference](https://developers.google.com/slides/api/reference/rest/v1/presentations/batchUpdate).
	 *
	 * Items: A single update request. Set exactly one request field per item. These types cover Add/Delete a Slide, Create a Slide from a Template Slide, Insert Links in a Presentation, Refresh a Chart, and Upload an Image To a Presentation.
	 */
	requests: {
		/**
		 * A create slide request. Set this field or another request field, not several.
		 */
		createSlide?: {
			/**
			 * A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The ID length must be between 5 and 50 characters, inclusive. If you don't specify an ID, a unique one is generated.
			 */
			objectId?: string;
			/**
			 * An optional list of object ID mappings from the placeholder(s) on the layout to the placeholders that are created on the slide from the specified layout. Can only be used when `slide_layout_reference` is specified.
			 *
			 * Items: The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.
			 */
			placeholderIdMappings?: {
				/**
				 * A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
				 */
				objectId?: string;
				/**
				 * The placeholder on a layout that will be applied to a slide. Only type and index are needed. For example, a predefined `TITLE_AND_BODY` layout may usually have a TITLE placeholder with index 0 and a BODY placeholder with index 0.
				 */
				layoutPlaceholder?: {
					/**
					 * The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.
					 */
					index?: number;
					/**
					 * The type of the placeholder.
					 */
					type?:
						| ''
						| 'NONE'
						| 'BODY'
						| 'CHART'
						| 'CLIP_ART'
						| 'CENTERED_TITLE'
						| 'DIAGRAM'
						| 'DATE_AND_TIME'
						| 'FOOTER'
						| 'HEADER'
						| 'MEDIA'
						| 'OBJECT'
						| 'PICTURE'
						| 'SLIDE_NUMBER'
						| 'SUBTITLE'
						| 'TABLE'
						| 'TITLE'
						| 'SLIDE_IMAGE';
					/**
					 * The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape.
					 */
					parentObjectId?: string;
				};
				/**
				 * The object ID of the placeholder on a layout that will be applied to a slide.
				 */
				layoutPlaceholderObjectId?: string;
			}[];
			/**
			 * Layout reference of the slide to be inserted, based on the *current master*, which is one of the following: - The master of the previous slide index. - The master of the first slide, if the insertion_index is zero. - The first master in the presentation, if there are no slides. If the LayoutReference is not found in the current master, a 400 bad request error is returned. If you don't specify a layout reference, the slide uses the predefined `BLANK` layout.
			 */
			slideLayoutReference?: {
				/**
				 * Layout ID: the object ID of one of the layouts in the presentation.
				 */
				layoutId?: string;
				/**
				 * Predefined layout.
				 */
				predefinedLayout?:
					| ''
					| 'PREDEFINED_LAYOUT_UNSPECIFIED'
					| 'BLANK'
					| 'CAPTION_ONLY'
					| 'TITLE'
					| 'TITLE_AND_BODY'
					| 'TITLE_AND_TWO_COLUMNS'
					| 'TITLE_ONLY'
					| 'SECTION_HEADER'
					| 'SECTION_TITLE_AND_DESCRIPTION'
					| 'ONE_COLUMN_TEXT'
					| 'MAIN_POINT'
					| 'BIG_NUMBER';
			};
			/**
			 * The optional zero-based index indicating where to insert the slides. If you don't specify an index, the slide is created at the end.
			 */
			insertionIndex?: number;
		};
		/**
		 * A delete object request. Set this field or another request field, not several.
		 */
		deleteObject?: {
			/**
			 * The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting placeholders are also deleted.
			 */
			objectId?: string;
		};
		/**
		 * A insert text request. Set this field or another request field, not several.
		 */
		insertText?: {
			/**
			 * The index where the text will be inserted, in Unicode code units, based on TextElement indexes. The index is zero-based and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme clusters. In these cases, the text will be inserted immediately after the grapheme cluster.
			 */
			insertionIndex?: number;
			/**
			 * The optional table cell location if the text is to be inserted into a table cell. If present, the object_id must refer to a table.
			 */
			cellLocation?: {
				/**
				 * The 0-based row index.
				 */
				rowIndex?: number;
				/**
				 * The 0-based column index.
				 */
				columnIndex?: number;
			};
			/**
			 * The object ID of the shape or table where the text will be inserted.
			 */
			objectId?: string;
			/**
			 * The text to be inserted. Inserting a newline character will implicitly create a new ParagraphMarker at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text will be added to the TextRun that exists at the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.
			 */
			text?: string;
		};
		/**
		 * A duplicate object request. Set this field or another request field, not several.
		 */
		duplicateObject?: {
			/**
			 * The ID of the object to duplicate.
			 */
			objectId?: string;
			/**
			 * The object being duplicated may contain other objects, for example when duplicating a slide or a group page element. This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object's duplicate may be specified in this map as well, using the same value of the `objectId` field as a key and the newly desired ID as the value. All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation and must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or greater than 50. If any IDs of source objects are omitted from the map, a new random ID will be assigned. If the map is empty or unset, all duplicate objects will receive a new random ID.
			 *
			 * Items: A mapping from a source object ID to the ID to assign to its duplicate.
			 */
			objectIds?: {
				/**
				 * The object ID of the source object.
				 */
				key: string;
				/**
				 * The object ID to assign to the duplicate.
				 */
				value?: string;
			}[];
		};
		/**
		 * A replace all text request. Set this field or another request field, not several.
		 */
		replaceAllText?: {
			/**
			 * The text that will replace the matched text.
			 */
			replaceText?: string;
			/**
			 * Finds text in a shape matching this substring.
			 */
			containsText?: {
				/**
				 * Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.
				 */
				matchCase?: boolean;
				/**
				 * The text to search for in the shape or table.
				 */
				text?: string;
				/**
				 * Optional. True if the find value should be treated as a regular expression. Any backslashes in the pattern should be escaped. - `True`: the search text is treated as a regular expressions. - `False`: the search text is treated as a substring for matching.
				 */
				searchByRegex?: boolean;
			};
			/**
			 * If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes master, or if a page with that object ID doesn't exist in the presentation.
			 *
			 * Items: A page object ids value.
			 */
			pageObjectIds?: string[];
		};
		/**
		 * A update slide properties request. Set this field or another request field, not several.
		 */
		updateSlideProperties?: {
			/**
			 * The slide properties to update.
			 */
			slideProperties?: {
				/**
				 * Whether the slide is skipped in the presentation mode. Defaults to false.
				 */
				isSkipped?: boolean;
			};
			/**
			 * The fields that should be updated. At least one field must be specified. The root 'slideProperties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update whether a slide is skipped, set `fields` to `"isSkipped"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
			 */
			fields?: string;
			/**
			 * The object ID of the slide the update is applied to.
			 */
			objectId?: string;
		};
		/**
		 * A update slides position request. Set this field or another request field, not several.
		 */
		updateSlidesPosition?: {
			/**
			 * The IDs of the slides in the presentation that should be moved. The slides in this list must be in existing presentation order, without duplicates.
			 *
			 * Items: A slide object ids value.
			 */
			slideObjectIds?: string[];
			/**
			 * The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be between zero and the number of slides in the presentation, inclusive.
			 */
			insertionIndex?: number;
		};
		/**
		 * A update text style request. Set this field or another request field, not several.
		 */
		updateTextStyle?: {
			/**
			 * The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
			 */
			fields?: string;
			/**
			 * The style(s) to set on the text. If the value for a particular style matches that of the parent, that style will be set to inherit. Certain text style changes may cause other changes meant to mirror the behavior of the Slides editor. See the documentation of TextStyle for more information.
			 */
			style?: {
				/**
				 * Whether or not the text is rendered as bold.
				 */
				bold?: boolean;
				/**
				 * Whether or not the text is italicized.
				 */
				italic?: boolean;
				/**
				 * Whether or not the text is struck through.
				 */
				strikethrough?: boolean;
				/**
				 * The color of the text itself. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.
				 */
				foregroundColor?: {
					/**
					 * If set, this will be used as an opaque color. If unset, this represents a transparent color.
					 */
					opaqueColor?: {
						/**
						 * An opaque RGB color.
						 */
						rgbColor?: {
							/**
							 * The red component of the color, from 0.0 to 1.0.
							 */
							red?: number;
							/**
							 * The blue component of the color, from 0.0 to 1.0.
							 */
							blue?: number;
							/**
							 * The green component of the color, from 0.0 to 1.0.
							 */
							green?: number;
						};
						/**
						 * An opaque theme color.
						 */
						themeColor?:
							| ''
							| 'DARK1'
							| 'LIGHT1'
							| 'DARK2'
							| 'LIGHT2'
							| 'ACCENT1'
							| 'ACCENT2'
							| 'ACCENT3'
							| 'ACCENT4'
							| 'ACCENT5'
							| 'ACCENT6'
							| 'HYPERLINK'
							| 'FOLLOWED_HYPERLINK'
							| 'TEXT1'
							| 'BACKGROUND1'
							| 'TEXT2'
							| 'BACKGROUND2';
					};
				};
				/**
				 * The size of the text's font. When read, the `font_size` will specified in points.
				 */
				fontSize?: {
					/**
					 * The units for magnitude.
					 */
					unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
					/**
					 * The magnitude.
					 */
					magnitude?: number;
				};
				/**
				 * Whether or not the text is in small capital letters.
				 */
				smallCaps?: boolean;
				/**
				 * The background color of the text. If set, the color is either opaque or transparent, depending on if the `opaque_color` field in it is set.
				 */
				backgroundColor?: {
					/**
					 * If set, this will be used as an opaque color. If unset, this represents a transparent color.
					 */
					opaqueColor?: {
						/**
						 * An opaque RGB color.
						 */
						rgbColor?: {
							/**
							 * The red component of the color, from 0.0 to 1.0.
							 */
							red?: number;
							/**
							 * The blue component of the color, from 0.0 to 1.0.
							 */
							blue?: number;
							/**
							 * The green component of the color, from 0.0 to 1.0.
							 */
							green?: number;
						};
						/**
						 * An opaque theme color.
						 */
						themeColor?:
							| ''
							| 'DARK1'
							| 'LIGHT1'
							| 'DARK2'
							| 'LIGHT2'
							| 'ACCENT1'
							| 'ACCENT2'
							| 'ACCENT3'
							| 'ACCENT4'
							| 'ACCENT5'
							| 'ACCENT6'
							| 'HYPERLINK'
							| 'FOLLOWED_HYPERLINK'
							| 'TEXT1'
							| 'BACKGROUND1'
							| 'TEXT2'
							| 'BACKGROUND2';
					};
				};
				/**
				 * The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be set to ThemeColorType.HYPERLINK and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.
				 */
				link?: {
					/**
					 * If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.
					 */
					slideIndex?: number;
					/**
					 * If set, indicates this is a link to the external web page at this URL.
					 */
					url?: string;
					/**
					 * If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist.
					 */
					pageObjectId?: string;
					/**
					 * If set, indicates this is a link to a slide in this presentation, addressed by its position.
					 */
					relativeLink?:
						| ''
						| 'RELATIVE_SLIDE_LINK_UNSPECIFIED'
						| 'NEXT_SLIDE'
						| 'PREVIOUS_SLIDE'
						| 'FIRST_SLIDE'
						| 'LAST_SLIDE';
				};
				/**
				 * Whether or not the text is underlined.
				 */
				underline?: boolean;
				/**
				 * The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.
				 */
				baselineOffset?:
					| ''
					| 'BASELINE_OFFSET_UNSPECIFIED'
					| 'NONE'
					| 'SUPERSCRIPT'
					| 'SUBSCRIPT';
				/**
				 * The font family and rendered weight of the text. This field is an extension of `font_family` meant to support explicit font weights without breaking backwards compatibility. As such, when reading the style of a range of text, the value of `weighted_font_family#font_family` will always be equal to that of `font_family`. However, when writing, if both fields are included in the field mask (either explicitly or through the wildcard `"*"`), their values are reconciled as follows: * If `font_family` is set and `weighted_font_family` is not, the value of `font_family` is applied with weight `400` ("normal"). * If both fields are set, the value of `font_family` must match that of `weighted_font_family#font_family`. If so, the font family and weight of `weighted_font_family` is applied. Otherwise, a 400 bad request error is returned. * If `weighted_font_family` is set and `font_family` is not, the font family and weight of `weighted_font_family` is applied. * If neither field is set, the font family and weight of the text inherit from the parent. Note that these properties cannot inherit separately from each other. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.
				 */
				weightedFontFamily?: {
					/**
					 * The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").
					 */
					weight?: number;
					/**
					 * The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.
					 */
					fontFamily?: string;
				};
				/**
				 * The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.
				 */
				fontFamily?: string;
			};
			/**
			 * The range of text to style. The range may be extended to include adjacent newlines. If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style.
			 */
			textRange?: {
				/**
				 * The type of range.
				 */
				type?: '' | 'FIXED_RANGE' | 'FROM_START_INDEX' | 'ALL';
				/**
				 * The optional zero-based index of the end of the collection. Required for `FIXED_RANGE` ranges.
				 */
				endIndex?: number;
				/**
				 * The optional zero-based index of the beginning of the collection. Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.
				 */
				startIndex?: number;
			};
			/**
			 * The location of the cell in the table containing the text to style. If `object_id` refers to a table, `cell_location` must have a value. Otherwise, it must not.
			 */
			cellLocation?: {
				/**
				 * The 0-based row index.
				 */
				rowIndex?: number;
				/**
				 * The 0-based column index.
				 */
				columnIndex?: number;
			};
			/**
			 * The object ID of the shape or table with the text to be styled.
			 */
			objectId?: string;
		};
		/**
		 * A refresh sheets chart request. Set this field or another request field, not several.
		 */
		refreshSheetsChart?: {
			/**
			 * The object ID of the chart to refresh.
			 */
			objectId?: string;
		};
		/**
		 * A replace all shapes with image request. Set this field or another request field, not several.
		 */
		replaceAllShapesWithImage?: {
			/**
			 * If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation.
			 *
			 * Items: A page object ids value.
			 */
			pageObjectIds?: string[];
			/**
			 * The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field.
			 */
			imageUrl?: string;
			/**
			 * If set, this request will replace all of the shapes that contain the given text.
			 */
			containsText?: {
				/**
				 * Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.
				 */
				matchCase?: boolean;
				/**
				 * The text to search for in the shape or table.
				 */
				text?: string;
				/**
				 * Optional. True if the find value should be treated as a regular expression. Any backslashes in the pattern should be escaped. - `True`: the search text is treated as a regular expressions. - `False`: the search text is treated as a substring for matching.
				 */
				searchByRegex?: boolean;
			};
			/**
			 * The image replace method. If you don't specify a value, CENTER_INSIDE is used.
			 */
			imageReplaceMethod?: '' | 'CENTER_INSIDE' | 'CENTER_CROP';
		};
		/**
		 * A replace image request. Set this field or another request field, not several.
		 */
		replaceImage?: {
			/**
			 * The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.
			 */
			imageObjectId?: string;
			/**
			 * The replacement method. If you don't specify a value, CENTER_INSIDE is used.
			 */
			imageReplaceMethod?: '' | 'CENTER_INSIDE' | 'CENTER_CROP';
			/**
			 * The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URL can't surpass 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field.
			 */
			url?: string;
		};
	}[];
	/**
	 * Optional control over how write requests are executed. Use requiredRevisionId for optimistic locking. Get the current revision ID from Get a presentation first.
	 */
	writeControl?: {
		/**
		 * The revision ID of the presentation required for the write request. If it does not match the current revision ID, the request returns a 400 error.
		 */
		requiredRevisionId?: string;
	};
};

export type BatchUpdatePresentationOutput = {
	/**
	 * The presentation the updates were applied to.
	 */
	presentationId?: string;
	/**
	 * The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
	 *
	 * Items: A single response from an update.
	 */
	replies?: {
		/**
		 * The result of creating a slide.
		 */
		createSlide?: {
			/**
			 * The object ID of the created slide.
			 */
			objectId?: string;
		};
		/**
		 * The result of duplicating an object.
		 */
		duplicateObject?: {
			/**
			 * The ID of the new duplicate object.
			 */
			objectId?: string;
		};
		/**
		 * The result of replacing text.
		 */
		replaceAllText?: {
			/**
			 * The number of occurrences changed by replacing all text.
			 */
			occurrencesChanged?: number;
		};
		/**
		 * The result of replacing all shapes matching some criteria with an image.
		 */
		replaceAllShapesWithImage?: {
			/**
			 * The number of shapes replaced with images.
			 */
			occurrencesChanged?: number;
		};
	}[];
	/**
	 * The updated write control after applying the request.
	 */
	writeControl?: {
		/**
		 * The revision ID of the presentation required for the write request. If specified and the required revision ID doesn't match the presentation's current revision ID, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.
		 */
		requiredRevisionId?: string;
	};
};

/**
 * Batch update a presentation
 * Applies one or more updates to a Google Slides presentation.
 */
export async function batchUpdatePresentation(
	this: EndpointFunctionThis,
	payload: {
		input: BatchUpdatePresentationInput;
		connectionId: number;
	},
): Promise<BatchUpdatePresentationOutput> {
	const response = await this.endpointCaller<BatchUpdatePresentationOutput>(
		{
			appName: 'google-slides',
			appVersion: 1,
			endpointName: 'batchUpdatePresentation',
		},
		payload,
	);
	return response.output;
}
