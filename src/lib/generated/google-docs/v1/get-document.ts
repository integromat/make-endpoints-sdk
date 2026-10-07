// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetDocumentInput = {
	/**
	 * The ID of the Google Docs document to retrieve. You can find this in the document URL: docs.google.com/document/d/{documentId}/edit
	 */
	documentId: string;
	/**
	 * When true, document content is returned in the tabs field instead of the top-level body field. Set to true if the document has multiple tabs.
	 */
	includeTabsContent?: boolean;
	/**
	 * Controls how suggestions (tracked changes) appear in the returned content. When omitted, defaults to the mode appropriate for the caller's access level.
	 */
	suggestionsViewMode?:
		| ''
		| 'SUGGESTIONS_INLINE'
		| 'PREVIEW_SUGGESTIONS_ACCEPTED'
		| 'PREVIEW_WITHOUT_SUGGESTIONS';
	/**
	 * Selects which type of inline objects to collect into the inlineObjectsArray output field. Only one type is collected per call. Default: Image. Note: only linked charts (from Sheets) and linked drawings are reliably classified; unlinked charts and drawings appear as images due to a Google Docs API limitation.
	 */
	filter: 'image' | 'drawing' | 'chart';
};

export type GetDocumentOutput = {
	/**
	 * The revision ID of the document. Can be used in batchUpdate requests for optimistic locking. Valid for 24 hours.
	 */
	revisionId?: string;
	/**
	 * The suggestions view mode applied to the returned document.
	 */
	suggestionsViewMode?: string;
	/**
	 * The ID of the document.
	 */
	documentId?: string;
	/**
	 * The main body content of the document. Legacy field -- empty when includeTabsContent is true; use tabs[].documentTab.body instead.
	 */
	body?: {
		/**
		 * The structural elements composing the body.
		 */
		content?: {
			/**
			 * The zero-based end index in UTF-16 code units.
			 */
			endIndex?: number;
			/**
			 * The zero-based start index in UTF-16 code units.
			 */
			startIndex?: number;
			/**
			 * A section break element.
			 */
			sectionBreak?: {
				/**
				 * The style of the section.
				 */
				sectionStyle?: {
					/**
					 * The style of column separators (NONE, BETWEEN_EACH_COLUMN).
					 */
					columnSeparatorStyle?: string;
					/**
					 * The content direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
					 */
					contentDirection?: string;
					/**
					 * The type of section (CONTINUOUS, NEXT_PAGE).
					 */
					sectionType?: string;
				};
			};
			/**
			 * A paragraph element in the document.
			 */
			paragraph?: {
				/**
				 * The bullet properties for the paragraph.
				 */
				bullet?: {
					/**
					 * The ID of the list this paragraph belongs to.
					 */
					listId?: string;
					/**
					 * The text style properties for this run.
					 */
					textStyle?: {
						/**
						 * Whether the text is underlined.
						 */
						underline?: boolean;
						/**
						 * The background color.
						 */
						backgroundColor?: Record<string, JSONValue>;
						/**
						 * The foreground (text) color.
						 */
						foregroundColor?: {
							/**
							 * The color value.
							 */
							color?: {
								/**
								 * The RGB color value.
								 */
								rgbColor?: {
									/**
									 * Red component (0.0 to 1.0).
									 */
									red?: number;
									/**
									 * Green component (0.0 to 1.0).
									 */
									green?: number;
									/**
									 * Blue component (0.0 to 1.0).
									 */
									blue?: number;
								};
							};
						};
						/**
						 * The size of the font.
						 */
						fontSize?: {
							/**
							 * The magnitude of the measurement.
							 */
							magnitude?: number;
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
						};
					};
					/**
					 * The nesting level of this paragraph in the list (0 = top level).
					 */
					nestingLevel?: number;
				};
				/**
				 * The content elements within the paragraph.
				 */
				elements?: {
					/**
					 * The zero-based start index in UTF-16 code units.
					 */
					startIndex?: number;
					/**
					 * The zero-based end index in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * A run of text with the same styling.
					 */
					textRun?: {
						/**
						 * The text content of the run.
						 */
						content?: string;
						/**
						 * The text style properties for this run.
						 */
						textStyle?: {
							/**
							 * The background color.
							 */
							backgroundColor?: {
								/**
								 * The color value.
								 */
								color?: {
									/**
									 * The RGB color value.
									 */
									rgbColor?: {
										/**
										 * Red component (0.0 to 1.0).
										 */
										red?: number;
										/**
										 * Green component (0.0 to 1.0).
										 */
										green?: number;
										/**
										 * Blue component (0.0 to 1.0).
										 */
										blue?: number;
									};
								};
							};
							/**
							 * The foreground (text) color.
							 */
							foregroundColor?: {
								/**
								 * The color value.
								 */
								color?: {
									/**
									 * The RGB color value.
									 */
									rgbColor?: {
										/**
										 * Red component (0.0 to 1.0).
										 */
										red?: number;
										/**
										 * Green component (0.0 to 1.0).
										 */
										green?: number;
										/**
										 * Blue component (0.0 to 1.0).
										 */
										blue?: number;
									};
								};
							};
							/**
							 * Whether the text is bold.
							 */
							bold?: boolean;
							/**
							 * The size of the font.
							 */
							fontSize?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * Whether the text is italicized.
							 */
							italic?: boolean;
							/**
							 * Whether the text is underlined.
							 */
							underline?: boolean;
							/**
							 * Whether the text is struck through.
							 */
							strikethrough?: boolean;
							/**
							 * The font family and weight of the text.
							 */
							weightedFontFamily?: {
								/**
								 * The font family name (e.g. Arial, Times New Roman).
								 */
								fontFamily?: string;
								/**
								 * The font weight (100-900, multiples of 100). Default is 400 (normal).
								 */
								weight?: number;
							};
							/**
							 * The hyperlink destination, if this text is a link.
							 */
							link?: {
								/**
								 * An external URL.
								 */
								url?: string;
								/**
								 * The ID of a bookmark in this document (legacy, use bookmark instead).
								 */
								bookmarkId?: string;
								/**
								 * The ID of a heading in this document (legacy, use heading instead).
								 */
								headingId?: string;
							};
							/**
							 * Vertical offset: NONE, SUPERSCRIPT, or SUBSCRIPT.
							 */
							baselineOffset?: string;
							/**
							 * Whether the text is in small capital letters.
							 */
							smallCaps?: boolean;
						};
					};
					/**
					 * An inline object element (e.g., an image).
					 */
					inlineObjectElement?: {
						/**
						 * The ID of the inline object.
						 */
						inlineObjectId?: string;
						/**
						 * The text style properties for this run.
						 */
						textStyle?: {
							/**
							 * The size of the font.
							 */
							fontSize?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
						};
					};
					/**
					 * A horizontal line element.
					 */
					horizontalRule?: {
						/**
						 * The text style of the horizontal rule (inherited from surrounding text).
						 */
						textStyle?: Record<string, JSONValue>;
					};
					/**
					 * A date smart chip element.
					 */
					dateElement?: {
						/**
						 * The unique ID of this date element.
						 */
						dateId?: string;
						/**
						 * The text style of the date element.
						 */
						textStyle?: Record<string, JSONValue>;
						/**
						 * The properties of the date element.
						 */
						dateElementProperties?: {
							/**
							 * The ISO 8601 timestamp of the date (e.g. 2019-11-05T12:00:00Z).
							 */
							timestamp?: string;
							/**
							 * The locale used for formatting the date (e.g. en).
							 */
							locale?: string;
							/**
							 * The date format, e.g. DATE_FORMAT_MONTH_DAY_YEAR_ABBREVIATED.
							 */
							dateFormat?: string;
							/**
							 * The time format, e.g. TIME_FORMAT_DISABLED.
							 */
							timeFormat?: string;
							/**
							 * The rendered display text (e.g. Nov 5, 2019).
							 */
							displayText?: string;
						};
					};
					/**
					 * A reference to a footnote.
					 */
					footnoteReference?: {
						/**
						 * The ID of the footnote. Use this to look up content in the top-level footnotes map.
						 */
						footnoteId?: string;
						/**
						 * The rendered number of this footnote.
						 */
						footnoteNumber?: string;
					};
					/**
					 * A person or email address mention.
					 */
					person?: {
						/**
						 * The unique ID of this person link.
						 */
						personId?: string;
					};
					/**
					 * A smart chip linking to a Google resource (Drive file, YouTube video, Calendar event).
					 */
					richLink?: {
						/**
						 * The ID of this rich link.
						 */
						richLinkId?: string;
					};
				}[];
				/**
				 * The style of the paragraph.
				 */
				paragraphStyle?: {
					/**
					 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
					 */
					namedStyleType?: string;
					/**
					 * The ID of the heading.
					 */
					headingId?: string;
					/**
					 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
					 */
					direction?: string;
					/**
					 * The amount of space above the paragraph.
					 */
					spaceAbove?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
						/**
						 * The space value.
						 */
						magnitude?: number;
					};
					/**
					 * The amount of space below the paragraph.
					 */
					spaceBelow?: {
						/**
						 * The magnitude of the measurement.
						 */
						magnitude?: number;
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The line spacing as a percentage of normal (100 = single).
					 */
					lineSpacing?: number;
					/**
					 * The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).
					 */
					spacingMode?: string;
					/**
					 * The indentation of the first line.
					 */
					indentFirstLine?: {
						/**
						 * The magnitude of the measurement.
						 */
						magnitude?: number;
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The indentation from the start of the paragraph.
					 */
					indentStart?: {
						/**
						 * The magnitude of the measurement.
						 */
						magnitude?: number;
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The border between paragraphs in the section.
					 */
					borderBetween?: {
						/**
						 * The border color.
						 */
						color?: Record<string, JSONValue>;
						/**
						 * The width of the border.
						 */
						width?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The top border.
					 */
					borderTop?: {
						/**
						 * The border color.
						 */
						color?: Record<string, JSONValue>;
						/**
						 * The width of the border.
						 */
						width?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The bottom border.
					 */
					borderBottom?: {
						/**
						 * The border color.
						 */
						color?: Record<string, JSONValue>;
						/**
						 * The width of the border.
						 */
						width?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The left border.
					 */
					borderLeft?: {
						/**
						 * The border color.
						 */
						color?: Record<string, JSONValue>;
						/**
						 * The width of the border.
						 */
						width?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The right border.
					 */
					borderRight?: {
						/**
						 * The border color.
						 */
						color?: Record<string, JSONValue>;
						/**
						 * The width of the border.
						 */
						width?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
							/**
							 * The numeric value.
							 */
							magnitude?: number;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The shading of the paragraph.
					 */
					shading?: {
						/**
						 * The background color.
						 */
						backgroundColor?: Record<string, JSONValue>;
					};
					/**
					 * The text alignment: START, CENTER, END, or JUSTIFIED.
					 */
					alignment?: string;
					/**
					 * The amount of indentation for the end side of the paragraph.
					 */
					indentEnd?: {
						/**
						 * The indentation value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * Whether all lines of the paragraph should be laid out on the same page or column if possible.
					 */
					keepLinesTogether?: boolean;
					/**
					 * Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if possible.
					 */
					keepWithNext?: boolean;
					/**
					 * Whether to avoid widows and orphans for the paragraph.
					 */
					avoidWidowAndOrphan?: boolean;
					/**
					 * Whether the current paragraph should always start at the beginning of a page.
					 */
					pageBreakBefore?: boolean;
				};
			};
			/**
			 * A table structural element.
			 */
			table?: {
				/**
				 * Number of rows in the table.
				 */
				rows?: number;
				/**
				 * Number of columns in the table.
				 */
				columns?: number;
				/**
				 * The contents and style of each row.
				 *
				 * Items: A single table row.
				 */
				tableRows?: {
					/**
					 * The zero-based start index of this row.
					 */
					startIndex?: number;
					/**
					 * The zero-based end index of this row, exclusive.
					 */
					endIndex?: number;
					/**
					 * The contents and style of each cell in this row.
					 *
					 * Items: A single table cell.
					 */
					tableCells?: {
						/**
						 * The zero-based start index of this cell.
						 */
						startIndex?: number;
						/**
						 * The zero-based end index of this cell, exclusive.
						 */
						endIndex?: number;
						/**
						 * The structural elements inside this cell (paragraphs, nested tables).
						 */
						content?: JSONValue[];
						/**
						 * The style of this cell (background, borders, padding, span, alignment).
						 */
						tableCellStyle?: {
							/**
							 * Number of rows this cell spans.
							 */
							rowSpan?: number;
							/**
							 * Number of columns this cell spans.
							 */
							columnSpan?: number;
							/**
							 * The background color of the cell.
							 */
							backgroundColor?: Record<string, JSONValue>;
							/**
							 * Vertical alignment: TOP, MIDDLE, or BOTTOM.
							 */
							contentAlignment?: string;
							/**
							 * Left padding (magnitude + unit).
							 */
							paddingLeft?: Record<string, JSONValue>;
							/**
							 * Right padding (magnitude + unit).
							 */
							paddingRight?: Record<string, JSONValue>;
							/**
							 * Top padding (magnitude + unit).
							 */
							paddingTop?: Record<string, JSONValue>;
							/**
							 * Bottom padding (magnitude + unit).
							 */
							paddingBottom?: Record<string, JSONValue>;
						};
					}[];
				}[];
				/**
				 * Style of the table (column properties with widthType).
				 */
				tableStyle?: Record<string, JSONValue>;
			};
			/**
			 * A table of contents structural element.
			 */
			tableOfContents?: {
				/**
				 * The content of the table of contents.
				 */
				content?: JSONValue[];
			};
		}[];
	};
	/**
	 * The headers in the document (converted from map to array by handleTabs). Legacy field -- use tabs[].documentTab.headers when includeTabsContent is true.
	 *
	 * Items: A single document header.
	 */
	headers?: {
		/**
		 * The unique identifier of the header.
		 */
		headerId?: string;
		/**
		 * The content elements within this section.
		 *
		 * Items: A structural element in this header.
		 */
		content?: {
			/**
			 * The zero-based start index in UTF-16 code units.
			 */
			startIndex?: number;
			/**
			 * The zero-based end index in UTF-16 code units.
			 */
			endIndex?: number;
			/**
			 * A paragraph element in the document.
			 */
			paragraph?: {
				/**
				 * The content elements within the paragraph.
				 */
				elements?: {
					/**
					 * The zero-based start index in UTF-16 code units.
					 */
					startIndex?: number;
					/**
					 * The zero-based end index in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * A run of text with the same styling.
					 */
					textRun?: {
						/**
						 * The text content of the run.
						 */
						content?: string;
						/**
						 * The text style properties for this run.
						 */
						textStyle?: {
							/**
							 * The background color.
							 */
							backgroundColor?: Record<string, JSONValue>;
							/**
							 * The foreground (text) color.
							 */
							foregroundColor?: {
								/**
								 * The color value.
								 */
								color?: {
									/**
									 * The RGB color value.
									 */
									rgbColor?: Record<string, JSONValue>;
								};
							};
							/**
							 * The size of the font.
							 */
							fontSize?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The font family and weight.
							 */
							weightedFontFamily?: {
								/**
								 * The name of the font family.
								 */
								fontFamily?: string;
								/**
								 * The weight (boldness) of the font.
								 */
								weight?: number;
							};
						};
					};
					/**
					 * An inline object element (e.g., an image).
					 */
					inlineObjectElement?: {
						/**
						 * The ID of the inline object.
						 */
						inlineObjectId?: string;
						/**
						 * The text style properties for this run.
						 */
						textStyle?: Record<string, JSONValue>;
					};
				}[];
				/**
				 * The style of the paragraph.
				 */
				paragraphStyle?: {
					/**
					 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
					 */
					namedStyleType?: string;
					/**
					 * The text alignment (START, CENTER, END, JUSTIFIED).
					 */
					alignment?: string;
					/**
					 * The line spacing as a percentage of normal (100 = single).
					 */
					lineSpacing?: number;
					/**
					 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
					 */
					direction?: string;
					/**
					 * The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).
					 */
					spacingMode?: string;
					/**
					 * Whether to avoid widow and orphan lines.
					 */
					avoidWidowAndOrphan?: boolean;
					/**
					 * Whether there is a page break before this paragraph.
					 */
					pageBreakBefore?: boolean;
				};
			};
			/**
			 * A table element in the document.
			 */
			table?: {
				/**
				 * The number of rows in the table.
				 */
				rows?: number;
				/**
				 * The number of columns in the table.
				 */
				columns?: number;
				/**
				 * The rows in the table.
				 */
				tableRows?: {
					/**
					 * The zero-based start index in UTF-16 code units.
					 */
					startIndex?: number;
					/**
					 * The zero-based end index in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * The cells in the table row.
					 */
					tableCells?: {
						/**
						 * The zero-based start index in UTF-16 code units.
						 */
						startIndex?: number;
						/**
						 * The zero-based end index in UTF-16 code units.
						 */
						endIndex?: number;
						/**
						 * The content elements within this section.
						 */
						content?: {
							/**
							 * The zero-based start index in UTF-16 code units.
							 */
							startIndex?: number;
							/**
							 * The zero-based end index in UTF-16 code units.
							 */
							endIndex?: number;
							/**
							 * A paragraph element in the document.
							 */
							paragraph?: {
								/**
								 * The content elements within the paragraph.
								 */
								elements?: {
									/**
									 * The zero-based start index in UTF-16 code units.
									 */
									startIndex?: number;
									/**
									 * The zero-based end index in UTF-16 code units.
									 */
									endIndex?: number;
									/**
									 * A run of text with the same styling.
									 */
									textRun?: {
										/**
										 * The text content of the run.
										 */
										content?: string;
										/**
										 * The text style properties for this run.
										 */
										textStyle?: {
											/**
											 * The background color.
											 */
											backgroundColor?: Record<string, JSONValue>;
											/**
											 * The foreground (text) color.
											 */
											foregroundColor?: {
												/**
												 * The color value.
												 */
												color?: {
													/**
													 * The RGB color value.
													 */
													rgbColor?: {
														/**
														 * Red component (0.0 to 1.0).
														 */
														red?: number;
														/**
														 * Green component (0.0 to 1.0).
														 */
														green?: number;
														/**
														 * Blue component (0.0 to 1.0).
														 */
														blue?: number;
													};
												};
											};
											/**
											 * The size of the font.
											 */
											fontSize?: {
												/**
												 * The magnitude of the measurement.
												 */
												magnitude?: number;
												/**
												 * The unit of measurement (e.g., PT).
												 */
												unit?: string;
											};
										};
									};
								}[];
								/**
								 * The style of the paragraph.
								 */
								paragraphStyle?: {
									/**
									 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
									 */
									namedStyleType?: string;
									/**
									 * The text alignment (START, CENTER, END, JUSTIFIED).
									 */
									alignment?: string;
									/**
									 * The line spacing as a percentage of normal (100 = single).
									 */
									lineSpacing?: number;
									/**
									 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
									 */
									direction?: string;
									/**
									 * The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).
									 */
									spacingMode?: string;
									/**
									 * The amount of space above the paragraph.
									 */
									spaceAbove?: {
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * The amount of space below the paragraph.
									 */
									spaceBelow?: {
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * The border between paragraphs in the section.
									 */
									borderBetween?: {
										/**
										 * The border color.
										 */
										color?: Record<string, JSONValue>;
										/**
										 * The width of the border.
										 */
										width?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The padding of the border.
										 */
										padding?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The dash style of the border (SOLID, DOT, DASH).
										 */
										dashStyle?: string;
									};
									/**
									 * The top border.
									 */
									borderTop?: {
										/**
										 * The border color.
										 */
										color?: Record<string, JSONValue>;
										/**
										 * The width of the border.
										 */
										width?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The padding of the border.
										 */
										padding?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The dash style of the border (SOLID, DOT, DASH).
										 */
										dashStyle?: string;
									};
									/**
									 * The bottom border.
									 */
									borderBottom?: {
										/**
										 * The border color.
										 */
										color?: Record<string, JSONValue>;
										/**
										 * The width of the border.
										 */
										width?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The padding of the border.
										 */
										padding?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The dash style of the border (SOLID, DOT, DASH).
										 */
										dashStyle?: string;
									};
									/**
									 * The left border.
									 */
									borderLeft?: {
										/**
										 * The border color.
										 */
										color?: Record<string, JSONValue>;
										/**
										 * The width of the border.
										 */
										width?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The padding of the border.
										 */
										padding?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The dash style of the border (SOLID, DOT, DASH).
										 */
										dashStyle?: string;
									};
									/**
									 * The right border.
									 */
									borderRight?: {
										/**
										 * The border color.
										 */
										color?: Record<string, JSONValue>;
										/**
										 * The width of the border.
										 */
										width?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The padding of the border.
										 */
										padding?: {
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The dash style of the border (SOLID, DOT, DASH).
										 */
										dashStyle?: string;
									};
									/**
									 * The indentation of the first line.
									 */
									indentFirstLine?: {
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * The indentation from the start of the paragraph.
									 */
									indentStart?: {
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * The indentation from the end of the paragraph.
									 */
									indentEnd?: {
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * Whether all lines of the paragraph should be on the same page.
									 */
									keepLinesTogether?: boolean;
									/**
									 * Whether this paragraph should be on the same page as the next.
									 */
									keepWithNext?: boolean;
									/**
									 * Whether to avoid widow and orphan lines.
									 */
									avoidWidowAndOrphan?: boolean;
									/**
									 * The shading of the paragraph.
									 */
									shading?: {
										/**
										 * The background color.
										 */
										backgroundColor?: Record<string, JSONValue>;
									};
									/**
									 * Whether there is a page break before this paragraph.
									 */
									pageBreakBefore?: boolean;
								};
							};
						}[];
						/**
						 * The style of the table cell.
						 */
						tableCellStyle?: {
							/**
							 * The number of rows this cell spans.
							 */
							rowSpan?: number;
							/**
							 * The number of columns this cell spans.
							 */
							columnSpan?: number;
							/**
							 * The background color.
							 */
							backgroundColor?: {
								/**
								 * The color value.
								 */
								color?: {
									/**
									 * The RGB color value.
									 */
									rgbColor?: {
										/**
										 * Red component (0.0 to 1.0).
										 */
										red?: number;
										/**
										 * Green component (0.0 to 1.0).
										 */
										green?: number;
										/**
										 * Blue component (0.0 to 1.0).
										 */
										blue?: number;
									};
								};
							};
							/**
							 * The left border.
							 */
							borderLeft?: {
								/**
								 * The border color.
								 */
								color?: {
									/**
									 * The color value.
									 */
									color?: {
										/**
										 * The RGB color value.
										 */
										rgbColor?: {
											/**
											 * Red component (0.0 to 1.0).
											 */
											red?: number;
											/**
											 * Green component (0.0 to 1.0).
											 */
											green?: number;
											/**
											 * Blue component (0.0 to 1.0).
											 */
											blue?: number;
										};
									};
								};
								/**
								 * The width of the border.
								 */
								width?: {
									/**
									 * The magnitude of the measurement.
									 */
									magnitude?: number;
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The right border.
							 */
							borderRight?: {
								/**
								 * The border color.
								 */
								color?: {
									/**
									 * The color value.
									 */
									color?: {
										/**
										 * The RGB color value.
										 */
										rgbColor?: {
											/**
											 * Red component (0.0 to 1.0).
											 */
											red?: number;
											/**
											 * Green component (0.0 to 1.0).
											 */
											green?: number;
											/**
											 * Blue component (0.0 to 1.0).
											 */
											blue?: number;
										};
									};
								};
								/**
								 * The width of the border.
								 */
								width?: {
									/**
									 * The magnitude of the measurement.
									 */
									magnitude?: number;
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The top border.
							 */
							borderTop?: {
								/**
								 * The border color.
								 */
								color?: {
									/**
									 * The color value.
									 */
									color?: {
										/**
										 * The RGB color value.
										 */
										rgbColor?: {
											/**
											 * Red component (0.0 to 1.0).
											 */
											red?: number;
											/**
											 * Green component (0.0 to 1.0).
											 */
											green?: number;
											/**
											 * Blue component (0.0 to 1.0).
											 */
											blue?: number;
										};
									};
								};
								/**
								 * The width of the border.
								 */
								width?: {
									/**
									 * The magnitude of the measurement.
									 */
									magnitude?: number;
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The bottom border.
							 */
							borderBottom?: {
								/**
								 * The border color.
								 */
								color?: {
									/**
									 * The color value.
									 */
									color?: {
										/**
										 * The RGB color value.
										 */
										rgbColor?: {
											/**
											 * Red component (0.0 to 1.0).
											 */
											red?: number;
											/**
											 * Green component (0.0 to 1.0).
											 */
											green?: number;
											/**
											 * Blue component (0.0 to 1.0).
											 */
											blue?: number;
										};
									};
								};
								/**
								 * The width of the border.
								 */
								width?: {
									/**
									 * The magnitude of the measurement.
									 */
									magnitude?: number;
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The left padding of the cell.
							 */
							paddingLeft?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The right padding of the cell.
							 */
							paddingRight?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The top padding of the cell.
							 */
							paddingTop?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The bottom padding of the cell.
							 */
							paddingBottom?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The alignment of content in the cell (TOP, MIDDLE, BOTTOM).
							 */
							contentAlignment?: string;
						};
					}[];
					/**
					 * The style of the table row.
					 */
					tableRowStyle?: {
						/**
						 * The minimum height of the row.
						 */
						minRowHeight?: {
							/**
							 * The magnitude of the measurement.
							 */
							magnitude?: number;
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
						};
					};
				}[];
				/**
				 * The style of the table.
				 */
				tableStyle?: {
					/**
					 * The properties of each table column.
					 */
					tableColumnProperties?: {
						/**
						 * The width type of the column (EVENLY_DISTRIBUTED, FIXED_WIDTH).
						 */
						widthType?: string;
					}[];
				};
			};
		}[];
	}[];
	/**
	 * The footers in the document (converted from map to array by handleTabs). Legacy field -- use tabs[].documentTab.footers when includeTabsContent is true.
	 */
	footers?: {
		/**
		 * The unique identifier of the footer.
		 */
		footerId?: string;
		/**
		 * The content elements within this section.
		 */
		content?: {
			/**
			 * The zero-based end index in UTF-16 code units.
			 */
			endIndex?: number;
			/**
			 * A paragraph element in the document.
			 */
			paragraph?: {
				/**
				 * The content elements within the paragraph.
				 */
				elements?: {
					/**
					 * The zero-based end index in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * An inline object element (e.g., an image).
					 */
					inlineObjectElement?: {
						/**
						 * The ID of the inline object.
						 */
						inlineObjectId?: string;
						/**
						 * The text style properties for this run.
						 */
						textStyle?: Record<string, JSONValue>;
					};
				}[];
				/**
				 * The style of the paragraph.
				 */
				paragraphStyle?: {
					/**
					 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
					 */
					namedStyleType?: string;
					/**
					 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
					 */
					direction?: string;
				};
			};
		}[];
	}[];
	/**
	 * The footnotes in the document (converted from map to array by handleTabs). Legacy field -- use tabs[].documentTab.footnotes when includeTabsContent is true.
	 */
	footnotes?: {
		/**
		 * The unique identifier of the footnote.
		 */
		footnoteId?: string;
		/**
		 * The content elements within this section.
		 */
		content?: {
			/**
			 * The zero-based end index in UTF-16 code units.
			 */
			endIndex?: number;
			/**
			 * A paragraph element in the document.
			 */
			paragraph?: {
				/**
				 * The content elements within the paragraph.
				 */
				elements?: {
					/**
					 * The zero-based end index in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * A run of text with the same styling.
					 */
					textRun?: {
						/**
						 * The text content of the run.
						 */
						content?: string;
						/**
						 * The text style properties for this run.
						 */
						textStyle?: {
							/**
							 * The size of the font.
							 */
							fontSize?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
						};
					};
				}[];
				/**
				 * The style of the paragraph.
				 */
				paragraphStyle?: {
					/**
					 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
					 */
					namedStyleType?: string;
					/**
					 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
					 */
					direction?: string;
				};
			};
		}[];
	}[];
	/**
	 * The style of the document (page size, margins, background, etc.). Legacy field -- use tabs[].documentTab.documentStyle when includeTabsContent is true.
	 */
	documentStyle?: {
		/**
		 * The background of the document.
		 */
		background?: {
			/**
			 * The color value.
			 */
			color?: Record<string, JSONValue>;
		};
		/**
		 * The ID of the default header.
		 */
		defaultHeaderId?: string;
		/**
		 * The ID of the default footer.
		 */
		defaultFooterId?: string;
		/**
		 * The page number from which to start counting.
		 */
		pageNumberStart?: number;
		/**
		 * The top margin of the page.
		 */
		marginTop?: {
			/**
			 * The magnitude of the measurement.
			 */
			magnitude?: number;
			/**
			 * The unit of measurement (e.g., PT).
			 */
			unit?: string;
		};
		/**
		 * The bottom margin of the page.
		 */
		marginBottom?: {
			/**
			 * The magnitude of the measurement.
			 */
			magnitude?: number;
			/**
			 * The unit of measurement (e.g., PT).
			 */
			unit?: string;
		};
		/**
		 * The right margin of the page.
		 */
		marginRight?: {
			/**
			 * The magnitude of the measurement.
			 */
			magnitude?: number;
			/**
			 * The unit of measurement (e.g., PT).
			 */
			unit?: string;
		};
		/**
		 * The left margin of the page.
		 */
		marginLeft?: {
			/**
			 * The magnitude of the measurement.
			 */
			magnitude?: number;
			/**
			 * The unit of measurement (e.g., PT).
			 */
			unit?: string;
		};
		/**
		 * The size of the page.
		 */
		pageSize?: {
			/**
			 * The height dimension.
			 */
			height?: {
				/**
				 * The magnitude of the measurement.
				 */
				magnitude?: number;
				/**
				 * The unit of measurement (e.g., PT).
				 */
				unit?: string;
			};
			/**
			 * The width dimension.
			 */
			width?: {
				/**
				 * The magnitude of the measurement.
				 */
				magnitude?: number;
				/**
				 * The unit of measurement (e.g., PT).
				 */
				unit?: string;
			};
		};
		/**
		 * The margin between the top of the page and the header.
		 */
		marginHeader?: {
			/**
			 * The magnitude of the measurement.
			 */
			magnitude?: number;
			/**
			 * The unit of measurement (e.g., PT).
			 */
			unit?: string;
		};
		/**
		 * The margin between the bottom of the page and the footer.
		 */
		marginFooter?: {
			/**
			 * The magnitude of the measurement.
			 */
			magnitude?: number;
			/**
			 * The unit of measurement (e.g., PT).
			 */
			unit?: string;
		};
		/**
		 * Whether the document uses custom header and footer margins.
		 */
		useCustomHeaderFooterMargins?: boolean;
		/**
		 * Whether the page orientation is flipped (landscape vs portrait).
		 */
		flipPageOrientation?: boolean;
		/**
		 * The document format settings.
		 */
		documentFormat?: {
			/**
			 * The mode of the document: PAGES or PAGELESS.
			 */
			documentMode?: string;
		};
	};
	/**
	 * The named styles of the document (NORMAL_TEXT, HEADING_1-6, TITLE, SUBTITLE). Legacy field -- use tabs[].documentTab.namedStyles when includeTabsContent is true.
	 */
	namedStyles?: {
		/**
		 * The named style definitions.
		 *
		 * Items: A single named style definition.
		 */
		styles?: {
			/**
			 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
			 */
			namedStyleType?: string;
			/**
			 * The text style properties for this run.
			 */
			textStyle?: Record<string, JSONValue>;
			/**
			 * The style of the paragraph.
			 */
			paragraphStyle?: {
				/**
				 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
				 */
				namedStyleType?: string;
				/**
				 * The text alignment (START, CENTER, END, JUSTIFIED).
				 */
				alignment?: string;
				/**
				 * The line spacing as a percentage of normal (100 = single).
				 */
				lineSpacing?: number;
				/**
				 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
				 */
				direction?: string;
				/**
				 * The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).
				 */
				spacingMode?: string;
				/**
				 * The amount of space above the paragraph.
				 */
				spaceAbove?: {
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The amount of space below the paragraph.
				 */
				spaceBelow?: {
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The border between paragraphs in the section.
				 */
				borderBetween?: {
					/**
					 * The border color.
					 */
					color?: Record<string, JSONValue>;
					/**
					 * The width of the border.
					 */
					width?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The top border.
				 */
				borderTop?: {
					/**
					 * The border color.
					 */
					color?: Record<string, JSONValue>;
					/**
					 * The width of the border.
					 */
					width?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The bottom border.
				 */
				borderBottom?: {
					/**
					 * The border color.
					 */
					color?: Record<string, JSONValue>;
					/**
					 * The width of the border.
					 */
					width?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The left border.
				 */
				borderLeft?: {
					/**
					 * The border color.
					 */
					color?: Record<string, JSONValue>;
					/**
					 * The width of the border.
					 */
					width?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The right border.
				 */
				borderRight?: {
					/**
					 * The border color.
					 */
					color?: Record<string, JSONValue>;
					/**
					 * The width of the border.
					 */
					width?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The indentation of the first line.
				 */
				indentFirstLine?: {
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The indentation from the start of the paragraph.
				 */
				indentStart?: {
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The indentation from the end of the paragraph.
				 */
				indentEnd?: {
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * Whether all lines of the paragraph should be on the same page.
				 */
				keepLinesTogether?: boolean;
				/**
				 * Whether this paragraph should be on the same page as the next.
				 */
				keepWithNext?: boolean;
				/**
				 * Whether to avoid widow and orphan lines.
				 */
				avoidWidowAndOrphan?: boolean;
				/**
				 * The shading of the paragraph.
				 */
				shading?: {
					/**
					 * The background color.
					 */
					backgroundColor?: Record<string, JSONValue>;
				};
			};
		}[];
	};
	/**
	 * The lists in the document (converted from map to array by handleTabs). Legacy field -- use tabs[].documentTab.lists when includeTabsContent is true.
	 */
	lists?: {
		/**
		 * The properties of the list.
		 */
		listProperties?: {
			/**
			 * The nesting levels of the list.
			 *
			 * Items: A single nesting level definition.
			 */
			nestingLevels?: {
				/**
				 * The alignment of the bullet (START, CENTER, END).
				 */
				bulletAlignment?: string;
				/**
				 * The symbol used for the bullet glyph.
				 */
				glyphSymbol?: string;
				/**
				 * The format string for the bullet glyph.
				 */
				glyphFormat?: string;
				/**
				 * The indentation of the first line.
				 */
				indentFirstLine?: {
					/**
					 * The magnitude of the measurement.
					 */
					magnitude?: number;
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The indentation from the start of the paragraph.
				 */
				indentStart?: {
					/**
					 * The magnitude of the measurement.
					 */
					magnitude?: number;
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The text style properties for this run.
				 */
				textStyle?: {
					/**
					 * Whether the text is underlined.
					 */
					underline?: boolean;
					/**
					 * The foreground (text) color.
					 */
					foregroundColor?: {
						/**
						 * The color value.
						 */
						color?: {
							/**
							 * The RGB color value.
							 */
							rgbColor?: {
								/**
								 * Red component (0.0 to 1.0).
								 */
								red?: number;
								/**
								 * Green component (0.0 to 1.0).
								 */
								green?: number;
								/**
								 * Blue component (0.0 to 1.0).
								 */
								blue?: number;
							};
						};
					};
				};
				/**
				 * The number of the first item in the list.
				 */
				startNumber?: number;
				/**
				 * The type of glyph for ordered/unordered lists.
				 */
				glyphType?: string;
			}[];
		};
	}[];
	/**
	 * The named ranges in the document (converted from map to array by handleTabs).
	 */
	namedRanges?: JSONValue[];
	/**
	 * The inline objects (images, drawings) in the document, keyed by object ID.
	 */
	inlineObjects?: Record<string, JSONValue>;
	/**
	 * A convenience array of inline objects filtered by the selected Filter type.
	 */
	inlineObjectsArray?: {
		/**
		 * The ID of the inline object. Can be used with replaceImage in batchUpdate.
		 */
		objectId?: string;
		/**
		 * A human-readable label indicating the location and sequence of the object, e.g. 'Header: Image No. 1', 'Body: Drawing No. 3'.
		 */
		label?: string;
	}[];
	/**
	 * The positioned objects (floating images, drawings) in the document.
	 */
	positionedObjects?: JSONValue[];
	/**
	 * Tabs in the document. Only populated when includeTabsContent is true.
	 *
	 * Items: A tab within the document.
	 */
	tabs?: {
		/**
		 * The properties of the tab.
		 */
		tabProperties?: {
			/**
			 * The unique identifier of the tab.
			 */
			tabId?: string;
			/**
			 * The zero-based index.
			 */
			index?: number;
			/**
			 * The ID of the parent tab. Empty for root-level tabs.
			 */
			parentTabId?: string;
			/**
			 * The depth of the tab. Root-level tabs are 0.
			 */
			nestingLevel?: number;
		};
		/**
		 * The document tab content.
		 */
		documentTab?: {
			/**
			 * The main body content of the document.
			 */
			body?: {
				/**
				 * The structural elements composing the body.
				 */
				content?: {
					/**
					 * The zero-based end index in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * The zero-based start index in UTF-16 code units.
					 */
					startIndex?: number;
					/**
					 * A section break element.
					 */
					sectionBreak?: {
						/**
						 * The style of the section.
						 */
						sectionStyle?: {
							/**
							 * The style of column separators (NONE, BETWEEN_EACH_COLUMN).
							 */
							columnSeparatorStyle?: string;
							/**
							 * The content direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
							 */
							contentDirection?: string;
							/**
							 * The type of section (CONTINUOUS, NEXT_PAGE).
							 */
							sectionType?: string;
						};
					};
					/**
					 * A paragraph element in the document.
					 */
					paragraph?: {
						/**
						 * The bullet properties for the paragraph.
						 */
						bullet?: {
							/**
							 * The ID of the list this paragraph belongs to.
							 */
							listId?: string;
							/**
							 * The text style properties for this run.
							 */
							textStyle?: {
								/**
								 * Whether the text is underlined.
								 */
								underline?: boolean;
								/**
								 * The background color.
								 */
								backgroundColor?: Record<string, JSONValue>;
								/**
								 * The foreground (text) color.
								 */
								foregroundColor?: {
									/**
									 * The color value.
									 */
									color?: {
										/**
										 * The RGB color value.
										 */
										rgbColor?: Record<string, JSONValue>;
									};
								};
								/**
								 * The size of the font.
								 */
								fontSize?: {
									/**
									 * The magnitude of the measurement.
									 */
									magnitude?: number;
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
							};
						};
						/**
						 * The content elements within the paragraph.
						 */
						elements?: {
							/**
							 * The zero-based start index in UTF-16 code units.
							 */
							startIndex?: number;
							/**
							 * The zero-based end index in UTF-16 code units.
							 */
							endIndex?: number;
							/**
							 * A run of text with the same styling.
							 */
							textRun?: {
								/**
								 * The text content of the run.
								 */
								content?: string;
								/**
								 * The text style properties for this run.
								 */
								textStyle?: {
									/**
									 * The background color.
									 */
									backgroundColor?: {
										/**
										 * The color value.
										 */
										color?: {
											/**
											 * The RGB color value.
											 */
											rgbColor?: {
												/**
												 * Red component (0.0 to 1.0).
												 */
												red?: number;
												/**
												 * Green component (0.0 to 1.0).
												 */
												green?: number;
												/**
												 * Blue component (0.0 to 1.0).
												 */
												blue?: number;
											};
										};
									};
									/**
									 * The foreground (text) color.
									 */
									foregroundColor?: {
										/**
										 * The color value.
										 */
										color?: {
											/**
											 * The RGB color value.
											 */
											rgbColor?: {
												/**
												 * Red component (0.0 to 1.0).
												 */
												red?: number;
												/**
												 * Green component (0.0 to 1.0).
												 */
												green?: number;
												/**
												 * Blue component (0.0 to 1.0).
												 */
												blue?: number;
											};
										};
									};
									/**
									 * Whether the text is bold.
									 */
									bold?: boolean;
									/**
									 * The size of the font.
									 */
									fontSize?: {
										/**
										 * The magnitude of the measurement.
										 */
										magnitude?: number;
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
								};
							};
							/**
							 * An inline object element (e.g., an image).
							 */
							inlineObjectElement?: {
								/**
								 * The ID of the inline object.
								 */
								inlineObjectId?: string;
								/**
								 * The text style properties for this run.
								 */
								textStyle?: {
									/**
									 * The size of the font.
									 */
									fontSize?: {
										/**
										 * The magnitude of the measurement.
										 */
										magnitude?: number;
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
								};
							};
						}[];
						/**
						 * The style of the paragraph.
						 */
						paragraphStyle?: {
							/**
							 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
							 */
							namedStyleType?: string;
							/**
							 * The ID of the heading.
							 */
							headingId?: string;
							/**
							 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
							 */
							direction?: string;
							/**
							 * The amount of space above the paragraph.
							 */
							spaceAbove?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The amount of space below the paragraph.
							 */
							spaceBelow?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The line spacing as a percentage of normal (100 = single).
							 */
							lineSpacing?: number;
							/**
							 * The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).
							 */
							spacingMode?: string;
							/**
							 * The indentation of the first line.
							 */
							indentFirstLine?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The indentation from the start of the paragraph.
							 */
							indentStart?: {
								/**
								 * The magnitude of the measurement.
								 */
								magnitude?: number;
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The border between paragraphs in the section.
							 */
							borderBetween?: {
								/**
								 * The border color.
								 */
								color?: Record<string, JSONValue>;
								/**
								 * The width of the border.
								 */
								width?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The top border.
							 */
							borderTop?: {
								/**
								 * The border color.
								 */
								color?: Record<string, JSONValue>;
								/**
								 * The width of the border.
								 */
								width?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The bottom border.
							 */
							borderBottom?: {
								/**
								 * The border color.
								 */
								color?: Record<string, JSONValue>;
								/**
								 * The width of the border.
								 */
								width?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The left border.
							 */
							borderLeft?: {
								/**
								 * The border color.
								 */
								color?: Record<string, JSONValue>;
								/**
								 * The width of the border.
								 */
								width?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The right border.
							 */
							borderRight?: {
								/**
								 * The border color.
								 */
								color?: Record<string, JSONValue>;
								/**
								 * The width of the border.
								 */
								width?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The shading of the paragraph.
							 */
							shading?: {
								/**
								 * The background color.
								 */
								backgroundColor?: Record<string, JSONValue>;
							};
						};
					};
				}[];
			};
			/**
			 * The headers in the document, keyed by header ID.
			 */
			headers?: {
				/**
				 * The unique identifier of the header.
				 */
				headerId?: string;
				/**
				 * The content elements within this section.
				 */
				content?: {
					/**
					 * The zero-based start index in UTF-16 code units.
					 */
					startIndex?: number;
					/**
					 * The zero-based end index in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * A paragraph element in the document.
					 */
					paragraph?: {
						/**
						 * The content elements within the paragraph.
						 */
						elements?: {
							/**
							 * The zero-based start index in UTF-16 code units.
							 */
							startIndex?: number;
							/**
							 * The zero-based end index in UTF-16 code units.
							 */
							endIndex?: number;
							/**
							 * A run of text with the same styling.
							 */
							textRun?: {
								/**
								 * The text content of the run.
								 */
								content?: string;
								/**
								 * The text style properties for this run.
								 */
								textStyle?: {
									/**
									 * The background color.
									 */
									backgroundColor?: Record<string, JSONValue>;
									/**
									 * The foreground (text) color.
									 */
									foregroundColor?: {
										/**
										 * The color value.
										 */
										color?: {
											/**
											 * The RGB color value.
											 */
											rgbColor?: Record<string, JSONValue>;
										};
									};
									/**
									 * The size of the font.
									 */
									fontSize?: {
										/**
										 * The magnitude of the measurement.
										 */
										magnitude?: number;
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * The font family and weight.
									 */
									weightedFontFamily?: {
										/**
										 * The name of the font family.
										 */
										fontFamily?: string;
										/**
										 * The weight (boldness) of the font.
										 */
										weight?: number;
									};
								};
							};
							/**
							 * An inline object element (e.g., an image).
							 */
							inlineObjectElement?: {
								/**
								 * The ID of the inline object.
								 */
								inlineObjectId?: string;
								/**
								 * The text style properties for this run.
								 */
								textStyle?: Record<string, JSONValue>;
							};
						}[];
						/**
						 * The style of the paragraph.
						 */
						paragraphStyle?: {
							/**
							 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
							 */
							namedStyleType?: string;
							/**
							 * The text alignment (START, CENTER, END, JUSTIFIED).
							 */
							alignment?: string;
							/**
							 * The line spacing as a percentage of normal (100 = single).
							 */
							lineSpacing?: number;
							/**
							 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
							 */
							direction?: string;
							/**
							 * The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).
							 */
							spacingMode?: string;
							/**
							 * Whether to avoid widow and orphan lines.
							 */
							avoidWidowAndOrphan?: boolean;
							/**
							 * Whether there is a page break before this paragraph.
							 */
							pageBreakBefore?: boolean;
						};
					};
					/**
					 * A table element in the document.
					 */
					table?: {
						/**
						 * The number of rows in the table.
						 */
						rows?: number;
						/**
						 * The number of columns in the table.
						 */
						columns?: number;
						/**
						 * The rows in the table.
						 */
						tableRows?: {
							/**
							 * The zero-based start index in UTF-16 code units.
							 */
							startIndex?: number;
							/**
							 * The zero-based end index in UTF-16 code units.
							 */
							endIndex?: number;
							/**
							 * The cells in the table row.
							 */
							tableCells?: {
								/**
								 * The zero-based start index in UTF-16 code units.
								 */
								startIndex?: number;
								/**
								 * The zero-based end index in UTF-16 code units.
								 */
								endIndex?: number;
								/**
								 * The content elements within this section.
								 */
								content?: {
									/**
									 * The zero-based start index in UTF-16 code units.
									 */
									startIndex?: number;
									/**
									 * The zero-based end index in UTF-16 code units.
									 */
									endIndex?: number;
									/**
									 * A paragraph element in the document.
									 */
									paragraph?: {
										/**
										 * The content elements within the paragraph.
										 */
										elements?: {
											/**
											 * The zero-based start index in UTF-16 code units.
											 */
											startIndex?: number;
											/**
											 * The zero-based end index in UTF-16 code units.
											 */
											endIndex?: number;
											/**
											 * A run of text with the same styling.
											 */
											textRun?: {
												/**
												 * The text content of the run.
												 */
												content?: string;
												/**
												 * The text style properties for this run.
												 */
												textStyle?: {
													/**
													 * The background color.
													 */
													backgroundColor?: Record<string, JSONValue>;
													/**
													 * The foreground (text) color.
													 */
													foregroundColor?: {
														/**
														 * The color value.
														 */
														color?: {
															/**
															 * The RGB color value.
															 */
															rgbColor?: {
																/**
																 * Red component (0.0 to 1.0).
																 */
																red?: number;
																/**
																 * Green component (0.0 to 1.0).
																 */
																green?: number;
																/**
																 * Blue component (0.0 to 1.0).
																 */
																blue?: number;
															};
														};
													};
													/**
													 * The size of the font.
													 */
													fontSize?: {
														/**
														 * The magnitude of the measurement.
														 */
														magnitude?: number;
														/**
														 * The unit of measurement (e.g., PT).
														 */
														unit?: string;
													};
												};
											};
										}[];
										/**
										 * The style of the paragraph.
										 */
										paragraphStyle?: {
											/**
											 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
											 */
											namedStyleType?: string;
											/**
											 * The text alignment (START, CENTER, END, JUSTIFIED).
											 */
											alignment?: string;
											/**
											 * The line spacing as a percentage of normal (100 = single).
											 */
											lineSpacing?: number;
											/**
											 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
											 */
											direction?: string;
											/**
											 * The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).
											 */
											spacingMode?: string;
											/**
											 * The amount of space above the paragraph.
											 */
											spaceAbove?: {
												/**
												 * The unit of measurement (e.g., PT).
												 */
												unit?: string;
											};
											/**
											 * The amount of space below the paragraph.
											 */
											spaceBelow?: {
												/**
												 * The unit of measurement (e.g., PT).
												 */
												unit?: string;
											};
											/**
											 * The border between paragraphs in the section.
											 */
											borderBetween?: {
												/**
												 * The border color.
												 */
												color?: Record<string, JSONValue>;
												/**
												 * The width of the border.
												 */
												width?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The padding of the border.
												 */
												padding?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The dash style of the border (SOLID, DOT, DASH).
												 */
												dashStyle?: string;
											};
											/**
											 * The top border.
											 */
											borderTop?: {
												/**
												 * The border color.
												 */
												color?: Record<string, JSONValue>;
												/**
												 * The width of the border.
												 */
												width?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The padding of the border.
												 */
												padding?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The dash style of the border (SOLID, DOT, DASH).
												 */
												dashStyle?: string;
											};
											/**
											 * The bottom border.
											 */
											borderBottom?: {
												/**
												 * The border color.
												 */
												color?: Record<string, JSONValue>;
												/**
												 * The width of the border.
												 */
												width?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The padding of the border.
												 */
												padding?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The dash style of the border (SOLID, DOT, DASH).
												 */
												dashStyle?: string;
											};
											/**
											 * The left border.
											 */
											borderLeft?: {
												/**
												 * The border color.
												 */
												color?: Record<string, JSONValue>;
												/**
												 * The width of the border.
												 */
												width?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The padding of the border.
												 */
												padding?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The dash style of the border (SOLID, DOT, DASH).
												 */
												dashStyle?: string;
											};
											/**
											 * The right border.
											 */
											borderRight?: {
												/**
												 * The border color.
												 */
												color?: Record<string, JSONValue>;
												/**
												 * The width of the border.
												 */
												width?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The padding of the border.
												 */
												padding?: {
													/**
													 * The unit of measurement (e.g., PT).
													 */
													unit?: string;
												};
												/**
												 * The dash style of the border (SOLID, DOT, DASH).
												 */
												dashStyle?: string;
											};
											/**
											 * The indentation of the first line.
											 */
											indentFirstLine?: {
												/**
												 * The unit of measurement (e.g., PT).
												 */
												unit?: string;
											};
											/**
											 * The indentation from the start of the paragraph.
											 */
											indentStart?: {
												/**
												 * The unit of measurement (e.g., PT).
												 */
												unit?: string;
											};
											/**
											 * The indentation from the end of the paragraph.
											 */
											indentEnd?: {
												/**
												 * The unit of measurement (e.g., PT).
												 */
												unit?: string;
											};
											/**
											 * Whether all lines of the paragraph should be on the same page.
											 */
											keepLinesTogether?: boolean;
											/**
											 * Whether this paragraph should be on the same page as the next.
											 */
											keepWithNext?: boolean;
											/**
											 * Whether to avoid widow and orphan lines.
											 */
											avoidWidowAndOrphan?: boolean;
											/**
											 * The shading of the paragraph.
											 */
											shading?: {
												/**
												 * The background color.
												 */
												backgroundColor?: Record<string, JSONValue>;
											};
											/**
											 * Whether there is a page break before this paragraph.
											 */
											pageBreakBefore?: boolean;
										};
									};
								}[];
								/**
								 * The style of the table cell.
								 */
								tableCellStyle?: {
									/**
									 * The number of rows this cell spans.
									 */
									rowSpan?: number;
									/**
									 * The number of columns this cell spans.
									 */
									columnSpan?: number;
									/**
									 * The background color.
									 */
									backgroundColor?: {
										/**
										 * The color value.
										 */
										color?: {
											/**
											 * The RGB color value.
											 */
											rgbColor?: {
												/**
												 * Red component (0.0 to 1.0).
												 */
												red?: number;
												/**
												 * Green component (0.0 to 1.0).
												 */
												green?: number;
												/**
												 * Blue component (0.0 to 1.0).
												 */
												blue?: number;
											};
										};
									};
									/**
									 * The left border.
									 */
									borderLeft?: {
										/**
										 * The border color.
										 */
										color?: {
											/**
											 * The color value.
											 */
											color?: {
												/**
												 * The RGB color value.
												 */
												rgbColor?: {
													/**
													 * Red component (0.0 to 1.0).
													 */
													red?: number;
													/**
													 * Green component (0.0 to 1.0).
													 */
													green?: number;
													/**
													 * Blue component (0.0 to 1.0).
													 */
													blue?: number;
												};
											};
										};
										/**
										 * The width of the border.
										 */
										width?: {
											/**
											 * The magnitude of the measurement.
											 */
											magnitude?: number;
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The dash style of the border (SOLID, DOT, DASH).
										 */
										dashStyle?: string;
									};
									/**
									 * The right border.
									 */
									borderRight?: {
										/**
										 * The border color.
										 */
										color?: {
											/**
											 * The color value.
											 */
											color?: {
												/**
												 * The RGB color value.
												 */
												rgbColor?: {
													/**
													 * Red component (0.0 to 1.0).
													 */
													red?: number;
													/**
													 * Green component (0.0 to 1.0).
													 */
													green?: number;
													/**
													 * Blue component (0.0 to 1.0).
													 */
													blue?: number;
												};
											};
										};
										/**
										 * The width of the border.
										 */
										width?: {
											/**
											 * The magnitude of the measurement.
											 */
											magnitude?: number;
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The dash style of the border (SOLID, DOT, DASH).
										 */
										dashStyle?: string;
									};
									/**
									 * The top border.
									 */
									borderTop?: {
										/**
										 * The border color.
										 */
										color?: {
											/**
											 * The color value.
											 */
											color?: {
												/**
												 * The RGB color value.
												 */
												rgbColor?: {
													/**
													 * Red component (0.0 to 1.0).
													 */
													red?: number;
													/**
													 * Green component (0.0 to 1.0).
													 */
													green?: number;
													/**
													 * Blue component (0.0 to 1.0).
													 */
													blue?: number;
												};
											};
										};
										/**
										 * The width of the border.
										 */
										width?: {
											/**
											 * The magnitude of the measurement.
											 */
											magnitude?: number;
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The dash style of the border (SOLID, DOT, DASH).
										 */
										dashStyle?: string;
									};
									/**
									 * The bottom border.
									 */
									borderBottom?: {
										/**
										 * The border color.
										 */
										color?: {
											/**
											 * The color value.
											 */
											color?: {
												/**
												 * The RGB color value.
												 */
												rgbColor?: {
													/**
													 * Red component (0.0 to 1.0).
													 */
													red?: number;
													/**
													 * Green component (0.0 to 1.0).
													 */
													green?: number;
													/**
													 * Blue component (0.0 to 1.0).
													 */
													blue?: number;
												};
											};
										};
										/**
										 * The width of the border.
										 */
										width?: {
											/**
											 * The magnitude of the measurement.
											 */
											magnitude?: number;
											/**
											 * The unit of measurement (e.g., PT).
											 */
											unit?: string;
										};
										/**
										 * The dash style of the border (SOLID, DOT, DASH).
										 */
										dashStyle?: string;
									};
									/**
									 * The left padding of the cell.
									 */
									paddingLeft?: {
										/**
										 * The magnitude of the measurement.
										 */
										magnitude?: number;
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * The right padding of the cell.
									 */
									paddingRight?: {
										/**
										 * The magnitude of the measurement.
										 */
										magnitude?: number;
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * The top padding of the cell.
									 */
									paddingTop?: {
										/**
										 * The magnitude of the measurement.
										 */
										magnitude?: number;
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * The bottom padding of the cell.
									 */
									paddingBottom?: {
										/**
										 * The magnitude of the measurement.
										 */
										magnitude?: number;
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
									/**
									 * The alignment of content in the cell (TOP, MIDDLE, BOTTOM).
									 */
									contentAlignment?: string;
								};
							}[];
							/**
							 * The style of the table row.
							 */
							tableRowStyle?: {
								/**
								 * The minimum height of the row.
								 */
								minRowHeight?: {
									/**
									 * The magnitude of the measurement.
									 */
									magnitude?: number;
									/**
									 * The unit of measurement (e.g., PT).
									 */
									unit?: string;
								};
							};
						}[];
						/**
						 * The style of the table.
						 */
						tableStyle?: {
							/**
							 * The properties of each table column.
							 */
							tableColumnProperties?: {
								/**
								 * The width type of the column (EVENLY_DISTRIBUTED, FIXED_WIDTH).
								 */
								widthType?: string;
							}[];
						};
					};
				}[];
			}[];
			/**
			 * The footers in the document.
			 */
			footers?: {
				/**
				 * The unique identifier of the footer.
				 */
				footerId?: string;
				/**
				 * The content elements within this section.
				 */
				content?: {
					/**
					 * The zero-based end index in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * A paragraph element in the document.
					 */
					paragraph?: {
						/**
						 * The content elements within the paragraph.
						 */
						elements?: {
							/**
							 * The zero-based end index in UTF-16 code units.
							 */
							endIndex?: number;
							/**
							 * An inline object element (e.g., an image).
							 */
							inlineObjectElement?: {
								/**
								 * The ID of the inline object.
								 */
								inlineObjectId?: string;
								/**
								 * The text style properties for this run.
								 */
								textStyle?: Record<string, JSONValue>;
							};
						}[];
						/**
						 * The style of the paragraph.
						 */
						paragraphStyle?: {
							/**
							 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
							 */
							namedStyleType?: string;
							/**
							 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
							 */
							direction?: string;
						};
					};
				}[];
			}[];
			/**
			 * The footnotes in the document.
			 */
			footnotes?: {
				/**
				 * The unique identifier of the footnote.
				 */
				footnoteId?: string;
				/**
				 * The content elements within this section.
				 */
				content?: {
					/**
					 * The zero-based end index in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * A paragraph element in the document.
					 */
					paragraph?: {
						/**
						 * The content elements within the paragraph.
						 */
						elements?: {
							/**
							 * The zero-based end index in UTF-16 code units.
							 */
							endIndex?: number;
							/**
							 * A run of text with the same styling.
							 */
							textRun?: {
								/**
								 * The text content of the run.
								 */
								content?: string;
								/**
								 * The text style properties for this run.
								 */
								textStyle?: {
									/**
									 * The size of the font.
									 */
									fontSize?: {
										/**
										 * The magnitude of the measurement.
										 */
										magnitude?: number;
										/**
										 * The unit of measurement (e.g., PT).
										 */
										unit?: string;
									};
								};
							};
						}[];
						/**
						 * The style of the paragraph.
						 */
						paragraphStyle?: {
							/**
							 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
							 */
							namedStyleType?: string;
							/**
							 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
							 */
							direction?: string;
						};
					};
				}[];
			}[];
			/**
			 * The style settings for the document.
			 */
			documentStyle?: {
				/**
				 * The background of the document.
				 */
				background?: {
					/**
					 * The color value.
					 */
					color?: Record<string, JSONValue>;
				};
				/**
				 * The ID of the default header.
				 */
				defaultHeaderId?: string;
				/**
				 * The ID of the default footer.
				 */
				defaultFooterId?: string;
				/**
				 * The page number from which to start counting.
				 */
				pageNumberStart?: number;
				/**
				 * The top margin of the page.
				 */
				marginTop?: {
					/**
					 * The magnitude of the measurement.
					 */
					magnitude?: number;
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The bottom margin of the page.
				 */
				marginBottom?: {
					/**
					 * The magnitude of the measurement.
					 */
					magnitude?: number;
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The right margin of the page.
				 */
				marginRight?: {
					/**
					 * The magnitude of the measurement.
					 */
					magnitude?: number;
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The left margin of the page.
				 */
				marginLeft?: {
					/**
					 * The magnitude of the measurement.
					 */
					magnitude?: number;
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The size of the page.
				 */
				pageSize?: {
					/**
					 * The height dimension.
					 */
					height?: {
						/**
						 * The magnitude of the measurement.
						 */
						magnitude?: number;
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
					/**
					 * The width dimension.
					 */
					width?: {
						/**
						 * The magnitude of the measurement.
						 */
						magnitude?: number;
						/**
						 * The unit of measurement (e.g., PT).
						 */
						unit?: string;
					};
				};
				/**
				 * The margin between the top of the page and the header.
				 */
				marginHeader?: {
					/**
					 * The magnitude of the measurement.
					 */
					magnitude?: number;
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
				/**
				 * The margin between the bottom of the page and the footer.
				 */
				marginFooter?: {
					/**
					 * The magnitude of the measurement.
					 */
					magnitude?: number;
					/**
					 * The unit of measurement (e.g., PT).
					 */
					unit?: string;
				};
			};
			/**
			 * The named styles defined in the document.
			 */
			namedStyles?: {
				/**
				 * The named style definitions.
				 */
				styles?: {
					/**
					 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
					 */
					namedStyleType?: string;
					/**
					 * The text style properties for this run.
					 */
					textStyle?: Record<string, JSONValue>;
					/**
					 * The style of the paragraph.
					 */
					paragraphStyle?: {
						/**
						 * The type of named style (e.g., NORMAL_TEXT, HEADING_1).
						 */
						namedStyleType?: string;
						/**
						 * The text alignment (START, CENTER, END, JUSTIFIED).
						 */
						alignment?: string;
						/**
						 * The line spacing as a percentage of normal (100 = single).
						 */
						lineSpacing?: number;
						/**
						 * The text direction (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
						 */
						direction?: string;
						/**
						 * The spacing mode (NEVER_COLLAPSE, COLLAPSE_LISTS).
						 */
						spacingMode?: string;
						/**
						 * The amount of space above the paragraph.
						 */
						spaceAbove?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
						};
						/**
						 * The amount of space below the paragraph.
						 */
						spaceBelow?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
						};
						/**
						 * The border between paragraphs in the section.
						 */
						borderBetween?: {
							/**
							 * The border color.
							 */
							color?: Record<string, JSONValue>;
							/**
							 * The width of the border.
							 */
							width?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The top border.
						 */
						borderTop?: {
							/**
							 * The border color.
							 */
							color?: Record<string, JSONValue>;
							/**
							 * The width of the border.
							 */
							width?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The bottom border.
						 */
						borderBottom?: {
							/**
							 * The border color.
							 */
							color?: Record<string, JSONValue>;
							/**
							 * The width of the border.
							 */
							width?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The left border.
						 */
						borderLeft?: {
							/**
							 * The border color.
							 */
							color?: Record<string, JSONValue>;
							/**
							 * The width of the border.
							 */
							width?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The right border.
						 */
						borderRight?: {
							/**
							 * The border color.
							 */
							color?: Record<string, JSONValue>;
							/**
							 * The width of the border.
							 */
							width?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The unit of measurement (e.g., PT).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The indentation of the first line.
						 */
						indentFirstLine?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
						};
						/**
						 * The indentation from the start of the paragraph.
						 */
						indentStart?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
						};
						/**
						 * The indentation from the end of the paragraph.
						 */
						indentEnd?: {
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
						};
						/**
						 * Whether all lines of the paragraph should be on the same page.
						 */
						keepLinesTogether?: boolean;
						/**
						 * Whether this paragraph should be on the same page as the next.
						 */
						keepWithNext?: boolean;
						/**
						 * Whether to avoid widow and orphan lines.
						 */
						avoidWidowAndOrphan?: boolean;
						/**
						 * The shading of the paragraph.
						 */
						shading?: {
							/**
							 * The background color.
							 */
							backgroundColor?: Record<string, JSONValue>;
						};
					};
				}[];
			};
			/**
			 * The lists in the document, keyed by list ID.
			 */
			lists?: {
				/**
				 * The properties of the list.
				 */
				listProperties?: {
					/**
					 * The nesting levels of the list.
					 */
					nestingLevels?: {
						/**
						 * The alignment of the bullet (START, CENTER, END).
						 */
						bulletAlignment?: string;
						/**
						 * The symbol used for the bullet glyph.
						 */
						glyphSymbol?: string;
						/**
						 * The format string for the bullet glyph.
						 */
						glyphFormat?: string;
						/**
						 * The indentation of the first line.
						 */
						indentFirstLine?: {
							/**
							 * The magnitude of the measurement.
							 */
							magnitude?: number;
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
						};
						/**
						 * The indentation from the start of the paragraph.
						 */
						indentStart?: {
							/**
							 * The magnitude of the measurement.
							 */
							magnitude?: number;
							/**
							 * The unit of measurement (e.g., PT).
							 */
							unit?: string;
						};
						/**
						 * The text style properties for this run.
						 */
						textStyle?: {
							/**
							 * Whether the text is underlined.
							 */
							underline?: boolean;
							/**
							 * The foreground (text) color.
							 */
							foregroundColor?: {
								/**
								 * The color value.
								 */
								color?: {
									/**
									 * The RGB color value.
									 */
									rgbColor?: {
										/**
										 * Red component (0.0 to 1.0).
										 */
										red?: number;
										/**
										 * Green component (0.0 to 1.0).
										 */
										green?: number;
										/**
										 * Blue component (0.0 to 1.0).
										 */
										blue?: number;
									};
								};
							};
						};
						/**
						 * The number of the first item in the list.
						 */
						startNumber?: number;
					}[];
				};
			}[];
			/**
			 * The inline objects in the document, keyed by object ID.
			 */
			inlineObjects?: Record<string, JSONValue>;
			/**
			 * The inline objects in the document as an array.
			 */
			inlineObjectsArray?: {
				/**
				 * The unique identifier of the object.
				 */
				objectId?: string;
				/**
				 * The display label of the object.
				 */
				label?: string;
			}[];
		};
		/**
		 * Child tabs nested within this tab.
		 */
		childTabs?: JSONValue[];
	}[];
};

/**
 * Get a document
 * Retrieves a document by its ID, optionally including tab content and controlling how suggestions appear.
 */
export async function getDocument(
	this: EndpointFunctionThis,
	payload: {
		input: GetDocumentInput;
		connectionId: number;
	},
): Promise<GetDocumentOutput> {
	const response = await this.endpointCaller<GetDocumentOutput>(
		{
			appName: 'google-docs',
			appVersion: 1,
			endpointName: 'getDocument',
		},
		payload,
	);
	return response.output;
}
