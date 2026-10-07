// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateDocumentInput = Record<string, never>;

export type CreateDocumentOutput = {
	/**
	 * The ID of the document.
	 */
	documentId?: string;
	/**
	 * The revision ID of the document.
	 */
	revisionId?: string;
	/**
	 * The suggestions view mode applied to the document.
	 */
	suggestionsViewMode?: string;
	/**
	 * The body content of the document.
	 */
	body?: {
		/**
		 * The structural elements that make up the body content.
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
			 * A section break structural element.
			 */
			sectionBreak?: {
				/**
				 * The style of the section after the break.
				 */
				sectionStyle?: {
					/**
					 * The style of column separators (NONE, BETWEEN_EACH_COLUMN).
					 */
					columnSeparatorStyle?: string;
					/**
					 * The content direction of the section (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
					 */
					contentDirection?: string;
					/**
					 * The type of section (CONTINUOUS, NEXT_PAGE).
					 */
					sectionType?: string;
				};
			};
			/**
			 * A paragraph structural element.
			 */
			paragraph?: {
				/**
				 * The inline content elements within the paragraph.
				 */
				elements?: {
					/**
					 * The zero-based start index of the element in UTF-16 code units.
					 */
					startIndex?: number;
					/**
					 * The zero-based end index of the element in UTF-16 code units.
					 */
					endIndex?: number;
					/**
					 * A run of text with uniform styling.
					 */
					textRun?: {
						/**
						 * The text content of the run.
						 */
						content?: string;
						/**
						 * The styling applied to the text run.
						 */
						textStyle?: {
							/**
							 * Whether the text is bold.
							 */
							bold?: boolean;
							/**
							 * Whether the text is italic.
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
							 * Whether the text is in small caps.
							 */
							smallCaps?: boolean;
							/**
							 * The background color of the text.
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
							 * The foreground color of the text.
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
							 * The font size of the text.
							 */
							fontSize?: {
								/**
								 * The font size value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The font family and weight of the text.
							 */
							weightedFontFamily?: {
								/**
								 * The font family of the text.
								 */
								fontFamily?: string;
								/**
								 * The font weight (100 to 900).
								 */
								weight?: number;
							};
							/**
							 * The vertical offset of the text (NONE, SUPERSCRIPT, SUBSCRIPT).
							 */
							baselineOffset?: string;
						};
					};
				}[];
				/**
				 * The styling applied to the paragraph.
				 */
				paragraphStyle?: {
					/**
					 * The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).
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
					 * The spacing mode (COLLAPSE_LISTS, NEVER_COLLAPSE).
					 */
					spacingMode?: string;
					/**
					 * The amount of extra space above the paragraph.
					 */
					spaceAbove?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The amount of extra space below the paragraph.
					 */
					spaceBelow?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The border between paragraphs in the same group.
					 */
					borderBetween?: {
						/**
						 * The color of the border.
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
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The top border of the paragraph.
					 */
					borderTop?: {
						/**
						 * The color of the border.
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
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The bottom border of the paragraph.
					 */
					borderBottom?: {
						/**
						 * The color of the border.
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
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The left border of the paragraph.
					 */
					borderLeft?: {
						/**
						 * The color of the border.
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
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The right border of the paragraph.
					 */
					borderRight?: {
						/**
						 * The color of the border.
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
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The padding of the border.
						 */
						padding?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The dash style of the border (SOLID, DOT, DASH).
						 */
						dashStyle?: string;
					};
					/**
					 * The first line indentation of the paragraph.
					 */
					indentFirstLine?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The start-side indentation of the paragraph.
					 */
					indentStart?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The end-side indentation of the paragraph.
					 */
					indentEnd?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * Whether all lines of the paragraph should be laid out on the same page.
					 */
					keepLinesTogether?: boolean;
					/**
					 * Whether at least part of the paragraph should be on the same page as the next.
					 */
					keepWithNext?: boolean;
					/**
					 * Whether to avoid widows and orphans for the paragraph.
					 */
					avoidWidowAndOrphan?: boolean;
					/**
					 * The shading of the paragraph.
					 */
					shading?: {
						/**
						 * The background color of the shading.
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
					};
					/**
					 * Whether to insert a page break before the paragraph.
					 */
					pageBreakBefore?: boolean;
				};
			};
		}[];
	};
	/**
	 * The style of the document.
	 */
	documentStyle?: {
		/**
		 * The background of the document.
		 */
		background?: {
			/**
			 * The background color.
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
		};
		/**
		 * The page number from which to start counting.
		 */
		pageNumberStart?: number;
		/**
		 * The top page margin.
		 */
		marginTop?: {
			/**
			 * The magnitude value.
			 */
			magnitude?: number;
			/**
			 * The unit (PT = points).
			 */
			unit?: string;
		};
		/**
		 * The bottom page margin.
		 */
		marginBottom?: {
			/**
			 * The magnitude value.
			 */
			magnitude?: number;
			/**
			 * The unit (PT = points).
			 */
			unit?: string;
		};
		/**
		 * The right page margin.
		 */
		marginRight?: {
			/**
			 * The magnitude value.
			 */
			magnitude?: number;
			/**
			 * The unit (PT = points).
			 */
			unit?: string;
		};
		/**
		 * The left page margin.
		 */
		marginLeft?: {
			/**
			 * The magnitude value.
			 */
			magnitude?: number;
			/**
			 * The unit (PT = points).
			 */
			unit?: string;
		};
		/**
		 * The size of the page in the document.
		 */
		pageSize?: {
			/**
			 * The height of the page.
			 */
			height?: {
				/**
				 * The magnitude value.
				 */
				magnitude?: number;
				/**
				 * The unit (PT = points).
				 */
				unit?: string;
			};
			/**
			 * The width of the page.
			 */
			width?: {
				/**
				 * The magnitude value.
				 */
				magnitude?: number;
				/**
				 * The unit (PT = points).
				 */
				unit?: string;
			};
		};
		/**
		 * The header margin of the document.
		 */
		marginHeader?: {
			/**
			 * The magnitude value.
			 */
			magnitude?: number;
			/**
			 * The unit (PT = points).
			 */
			unit?: string;
		};
		/**
		 * The footer margin of the document.
		 */
		marginFooter?: {
			/**
			 * The magnitude value.
			 */
			magnitude?: number;
			/**
			 * The unit (PT = points).
			 */
			unit?: string;
		};
		/**
		 * Whether to use custom header and footer margins.
		 */
		useCustomHeaderFooterMargins?: boolean;
		/**
		 * The format of the document.
		 */
		documentFormat?: {
			/**
			 * The document mode (PAGES, PAGELESS).
			 */
			documentMode?: string;
		};
	};
	/**
	 * The named styles of the document.
	 */
	namedStyles?: {
		/**
		 * The named styles in the document.
		 */
		styles?: {
			/**
			 * The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).
			 */
			namedStyleType?: string;
			/**
			 * The text style properties for this named style.
			 */
			textStyle?: {
				/**
				 * Whether the text is bold.
				 */
				bold?: boolean;
				/**
				 * Whether the text is italic.
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
				 * Whether the text is in small caps.
				 */
				smallCaps?: boolean;
				/**
				 * The background color of the text.
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
				 * The foreground color of the text.
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
				 * The font size of the text.
				 */
				fontSize?: {
					/**
					 * The font size value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The font family and weight of the text.
				 */
				weightedFontFamily?: {
					/**
					 * The font family of the text.
					 */
					fontFamily?: string;
					/**
					 * The font weight (100 to 900).
					 */
					weight?: number;
				};
				/**
				 * The vertical offset of the text (NONE, SUPERSCRIPT, SUBSCRIPT).
				 */
				baselineOffset?: string;
			};
			/**
			 * The paragraph style properties for this named style.
			 */
			paragraphStyle?: {
				/**
				 * The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).
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
				 * The spacing mode (COLLAPSE_LISTS, NEVER_COLLAPSE).
				 */
				spacingMode?: string;
				/**
				 * The amount of extra space above the paragraph.
				 */
				spaceAbove?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The amount of extra space below the paragraph.
				 */
				spaceBelow?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The border between paragraphs in the same group.
				 */
				borderBetween?: {
					/**
					 * The color of the border.
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
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The top border of the paragraph.
				 */
				borderTop?: {
					/**
					 * The color of the border.
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
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The bottom border of the paragraph.
				 */
				borderBottom?: {
					/**
					 * The color of the border.
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
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The left border of the paragraph.
				 */
				borderLeft?: {
					/**
					 * The color of the border.
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
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The right border of the paragraph.
				 */
				borderRight?: {
					/**
					 * The color of the border.
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
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The padding of the border.
					 */
					padding?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The dash style of the border (SOLID, DOT, DASH).
					 */
					dashStyle?: string;
				};
				/**
				 * The first line indentation of the paragraph.
				 */
				indentFirstLine?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The start-side indentation of the paragraph.
				 */
				indentStart?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The end-side indentation of the paragraph.
				 */
				indentEnd?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * Whether all lines of the paragraph should be laid out on the same page.
				 */
				keepLinesTogether?: boolean;
				/**
				 * Whether at least part of the paragraph should be on the same page as the next.
				 */
				keepWithNext?: boolean;
				/**
				 * Whether to avoid widows and orphans for the paragraph.
				 */
				avoidWidowAndOrphan?: boolean;
				/**
				 * The shading of the paragraph.
				 */
				shading?: {
					/**
					 * The background color of the shading.
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
				};
				/**
				 * Whether to insert a page break before the paragraph.
				 */
				pageBreakBefore?: boolean;
			};
		}[];
	};
	/**
	 * The tabs that make up the document.
	 */
	tabs?: {
		/**
		 * The properties of the tab.
		 */
		tabProperties?: {
			/**
			 * The ID of the tab.
			 */
			tabId?: string;
			/**
			 * The zero-based index of the tab.
			 */
			index?: number;
		};
		/**
		 * The tab-level document content, mirroring the top-level body, documentStyle, and namedStyles structure.
		 */
		documentTab?: {
			/**
			 * The body content of this tab.
			 */
			body?: {
				/**
				 * The structural elements that make up the body content.
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
					 * A section break structural element.
					 */
					sectionBreak?: {
						/**
						 * The style of the section after the break.
						 */
						sectionStyle?: {
							/**
							 * The style of column separators (NONE, BETWEEN_EACH_COLUMN).
							 */
							columnSeparatorStyle?: string;
							/**
							 * The content direction of the section (LEFT_TO_RIGHT, RIGHT_TO_LEFT).
							 */
							contentDirection?: string;
							/**
							 * The type of section (CONTINUOUS, NEXT_PAGE).
							 */
							sectionType?: string;
						};
					};
					/**
					 * A paragraph structural element.
					 */
					paragraph?: {
						/**
						 * The inline content elements within the paragraph.
						 */
						elements?: {
							/**
							 * The zero-based start index of the element in UTF-16 code units.
							 */
							startIndex?: number;
							/**
							 * The zero-based end index of the element in UTF-16 code units.
							 */
							endIndex?: number;
							/**
							 * A run of text with uniform styling.
							 */
							textRun?: {
								/**
								 * The text content of the run.
								 */
								content?: string;
								/**
								 * The styling applied to the text run.
								 */
								textStyle?: {
									/**
									 * Whether the text is bold.
									 */
									bold?: boolean;
									/**
									 * Whether the text is italic.
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
									 * Whether the text is in small caps.
									 */
									smallCaps?: boolean;
									/**
									 * The background color of the text.
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
									 * The foreground color of the text.
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
									 * The font size of the text.
									 */
									fontSize?: {
										/**
										 * The font size value.
										 */
										magnitude?: number;
										/**
										 * The unit (PT = points).
										 */
										unit?: string;
									};
									/**
									 * The font family and weight of the text.
									 */
									weightedFontFamily?: {
										/**
										 * The font family of the text.
										 */
										fontFamily?: string;
										/**
										 * The font weight (100 to 900).
										 */
										weight?: number;
									};
									/**
									 * The vertical offset of the text (NONE, SUPERSCRIPT, SUBSCRIPT).
									 */
									baselineOffset?: string;
								};
							};
						}[];
						/**
						 * The styling applied to the paragraph.
						 */
						paragraphStyle?: {
							/**
							 * The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).
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
							 * The spacing mode (COLLAPSE_LISTS, NEVER_COLLAPSE).
							 */
							spacingMode?: string;
							/**
							 * The amount of extra space above the paragraph.
							 */
							spaceAbove?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The amount of extra space below the paragraph.
							 */
							spaceBelow?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The border between paragraphs in the same group.
							 */
							borderBetween?: {
								/**
								 * The color of the border.
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
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The top border of the paragraph.
							 */
							borderTop?: {
								/**
								 * The color of the border.
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
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The bottom border of the paragraph.
							 */
							borderBottom?: {
								/**
								 * The color of the border.
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
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The left border of the paragraph.
							 */
							borderLeft?: {
								/**
								 * The color of the border.
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
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The right border of the paragraph.
							 */
							borderRight?: {
								/**
								 * The color of the border.
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
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The padding of the border.
								 */
								padding?: {
									/**
									 * The magnitude value.
									 */
									magnitude?: number;
									/**
									 * The unit (PT = points).
									 */
									unit?: string;
								};
								/**
								 * The dash style of the border (SOLID, DOT, DASH).
								 */
								dashStyle?: string;
							};
							/**
							 * The first line indentation of the paragraph.
							 */
							indentFirstLine?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The start-side indentation of the paragraph.
							 */
							indentStart?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The end-side indentation of the paragraph.
							 */
							indentEnd?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * Whether all lines of the paragraph should be laid out on the same page.
							 */
							keepLinesTogether?: boolean;
							/**
							 * Whether at least part of the paragraph should be on the same page as the next.
							 */
							keepWithNext?: boolean;
							/**
							 * Whether to avoid widows and orphans for the paragraph.
							 */
							avoidWidowAndOrphan?: boolean;
							/**
							 * The shading of the paragraph.
							 */
							shading?: {
								/**
								 * The background color of the shading.
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
							};
							/**
							 * Whether to insert a page break before the paragraph.
							 */
							pageBreakBefore?: boolean;
						};
					};
				}[];
			};
			/**
			 * The document style for this tab.
			 */
			documentStyle?: {
				/**
				 * The background of the document.
				 */
				background?: {
					/**
					 * The background color.
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
				};
				/**
				 * The page number from which to start counting.
				 */
				pageNumberStart?: number;
				/**
				 * The top page margin.
				 */
				marginTop?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The bottom page margin.
				 */
				marginBottom?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The right page margin.
				 */
				marginRight?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The left page margin.
				 */
				marginLeft?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The size of the page in the document.
				 */
				pageSize?: {
					/**
					 * The height of the page.
					 */
					height?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
					/**
					 * The width of the page.
					 */
					width?: {
						/**
						 * The magnitude value.
						 */
						magnitude?: number;
						/**
						 * The unit (PT = points).
						 */
						unit?: string;
					};
				};
				/**
				 * The header margin of the document.
				 */
				marginHeader?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * The footer margin of the document.
				 */
				marginFooter?: {
					/**
					 * The magnitude value.
					 */
					magnitude?: number;
					/**
					 * The unit (PT = points).
					 */
					unit?: string;
				};
				/**
				 * Whether to use custom header and footer margins.
				 */
				useCustomHeaderFooterMargins?: boolean;
				/**
				 * The format of the document.
				 */
				documentFormat?: {
					/**
					 * The document mode (PAGES, PAGELESS).
					 */
					documentMode?: string;
				};
			};
			/**
			 * The named styles for this tab.
			 */
			namedStyles?: {
				/**
				 * The named styles in the document.
				 */
				styles?: {
					/**
					 * The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).
					 */
					namedStyleType?: string;
					/**
					 * The text style properties for this named style.
					 */
					textStyle?: {
						/**
						 * Whether the text is bold.
						 */
						bold?: boolean;
						/**
						 * Whether the text is italic.
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
						 * Whether the text is in small caps.
						 */
						smallCaps?: boolean;
						/**
						 * The background color of the text.
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
						 * The foreground color of the text.
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
						 * The font size of the text.
						 */
						fontSize?: {
							/**
							 * The font size value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The font family and weight of the text.
						 */
						weightedFontFamily?: {
							/**
							 * The font family of the text.
							 */
							fontFamily?: string;
							/**
							 * The font weight (100 to 900).
							 */
							weight?: number;
						};
						/**
						 * The vertical offset of the text (NONE, SUPERSCRIPT, SUBSCRIPT).
						 */
						baselineOffset?: string;
					};
					/**
					 * The paragraph style properties for this named style.
					 */
					paragraphStyle?: {
						/**
						 * The named style type (NORMAL_TEXT, HEADING_1 through HEADING_6, TITLE, SUBTITLE).
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
						 * The spacing mode (COLLAPSE_LISTS, NEVER_COLLAPSE).
						 */
						spacingMode?: string;
						/**
						 * The amount of extra space above the paragraph.
						 */
						spaceAbove?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The amount of extra space below the paragraph.
						 */
						spaceBelow?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The border between paragraphs in the same group.
						 */
						borderBetween?: {
							/**
							 * The color of the border.
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
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The top border of the paragraph.
						 */
						borderTop?: {
							/**
							 * The color of the border.
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
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The bottom border of the paragraph.
						 */
						borderBottom?: {
							/**
							 * The color of the border.
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
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The left border of the paragraph.
						 */
						borderLeft?: {
							/**
							 * The color of the border.
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
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The right border of the paragraph.
						 */
						borderRight?: {
							/**
							 * The color of the border.
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
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The padding of the border.
							 */
							padding?: {
								/**
								 * The magnitude value.
								 */
								magnitude?: number;
								/**
								 * The unit (PT = points).
								 */
								unit?: string;
							};
							/**
							 * The dash style of the border (SOLID, DOT, DASH).
							 */
							dashStyle?: string;
						};
						/**
						 * The first line indentation of the paragraph.
						 */
						indentFirstLine?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The start-side indentation of the paragraph.
						 */
						indentStart?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * The end-side indentation of the paragraph.
						 */
						indentEnd?: {
							/**
							 * The magnitude value.
							 */
							magnitude?: number;
							/**
							 * The unit (PT = points).
							 */
							unit?: string;
						};
						/**
						 * Whether all lines of the paragraph should be laid out on the same page.
						 */
						keepLinesTogether?: boolean;
						/**
						 * Whether at least part of the paragraph should be on the same page as the next.
						 */
						keepWithNext?: boolean;
						/**
						 * Whether to avoid widows and orphans for the paragraph.
						 */
						avoidWidowAndOrphan?: boolean;
						/**
						 * The shading of the paragraph.
						 */
						shading?: {
							/**
							 * The background color of the shading.
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
						};
						/**
						 * Whether to insert a page break before the paragraph.
						 */
						pageBreakBefore?: boolean;
					};
				}[];
			};
		};
	}[];
};

/**
 * Create a document
 * Creates a new blank Google Docs document with the given title. The document is created in the user's My Drive root folder.
 */
export async function createDocument(
	this: EndpointFunctionThis,
	payload: {
		input: CreateDocumentInput;
		connectionId: number;
	},
): Promise<CreateDocumentOutput> {
	const response = await this.endpointCaller<CreateDocumentOutput>(
		{
			appName: 'google-docs',
			appVersion: 1,
			endpointName: 'createDocument',
		},
		payload,
	);
	return response.output;
}
