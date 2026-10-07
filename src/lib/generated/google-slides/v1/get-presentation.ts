// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetPresentationInput = {
	/**
	 * The ID of the presentation to retrieve. You can find this in the presentation URL: docs.google.com/presentation/d/{presentationId}/edit
	 */
	presentationId: string;
};

export type GetPresentationOutput = {
	/**
	 * The slides in the presentation. A slide inherits properties from a slide layout.
	 *
	 * Items: A page in a presentation.
	 */
	slides?: {
		/**
		 * The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
		 */
		objectId?: string;
		/**
		 * Layout specific properties. Only set if page_type = LAYOUT.
		 */
		layoutProperties?: {
			/**
			 * The object ID of the master that this layout is based on.
			 */
			masterObjectId?: string;
			/**
			 * The name of the layout.
			 */
			name?: string;
			/**
			 * The human-readable name of the layout.
			 */
			displayName?: string;
		};
		/**
		 * Master specific properties. Only set if page_type = MASTER.
		 */
		masterProperties?: {
			/**
			 * The human-readable name of the master.
			 */
			displayName?: string;
		};
		/**
		 * The type of the page.
		 */
		pageType?: '' | 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER';
		/**
		 * Notes specific properties. Only set if page_type = NOTES.
		 */
		notesProperties?: {
			/**
			 * The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.
			 */
			speakerNotesObjectId?: string;
		};
		/**
		 * Slide specific properties. Only set if page_type = SLIDE.
		 */
		slideProperties?: {
			/**
			 * The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.
			 */
			notesPage?: {
				/**
				 * The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
				 */
				objectId?: string;
				/**
				 * The type of the page.
				 */
				pageType?: '' | 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER';
			};
			/**
			 * The object ID of the layout that this slide is based on. This property is read-only.
			 */
			layoutObjectId?: string;
			/**
			 * The object ID of the master that this slide is based on. This property is read-only.
			 */
			masterObjectId?: string;
			/**
			 * Whether the slide is skipped in the presentation mode. Defaults to false.
			 */
			isSkipped?: boolean;
		};
		/**
		 * The properties of the page.
		 */
		pageProperties?: {
			/**
			 * The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.
			 */
			pageBackgroundFill?: {
				/**
				 * Solid color fill.
				 */
				solidFill?: {
					/**
					 * The color value of the solid fill.
					 */
					color?: {
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
							| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
					/**
					 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
					 */
					alpha?: number;
				};
				/**
				 * Stretched picture fill.
				 */
				stretchedPictureFill?: {
					/**
					 * Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.
					 */
					contentUrl?: string;
					/**
					 * The original size of the picture fill. This field is read-only.
					 */
					size?: {
						/**
						 * The width of the object.
						 */
						width?: {
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
						 * The height of the object.
						 */
						height?: {
							/**
							 * The units for magnitude.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
							/**
							 * The magnitude.
							 */
							magnitude?: number;
						};
					};
				};
				/**
				 * The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
				 */
				propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
			};
			/**
			 * The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.
			 */
			colorScheme?: {
				/**
				 * The ThemeColorType and corresponding concrete color pairs.
				 *
				 * Items: A pair mapping a theme color type to the concrete color it represents.
				 */
				colors?: {
					/**
					 * The concrete color corresponding to the theme color type above.
					 */
					color?: {
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
					 * The type of the theme color.
					 */
					type?:
						| ''
						| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
				}[];
			};
		};
		/**
		 * Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.
		 */
		revisionId?: string;
		/**
		 * The page elements rendered on the page.
		 *
		 * Items: A visual element rendered on a page.
		 */
		pageElements?: {
			/**
			 * The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.
			 */
			objectId?: string;
			/**
			 * The transform of the page element. The visual appearance of the page element is determined by its absolute transform. To compute the absolute transform, preconcatenate a page element's transform with the transforms of all of its parent groups. If the page element is not in a group, its absolute transform is the same as the value in this field. The initial transform for the newly created Group is always the identity transform.
			 */
			transform?: {
				/**
				 * The X coordinate scaling element.
				 */
				scaleX?: number;
				/**
				 * The X coordinate shearing element.
				 */
				shearX?: number;
				/**
				 * The X coordinate translation element.
				 */
				translateX?: number;
				/**
				 * The Y coordinate scaling element.
				 */
				scaleY?: number;
				/**
				 * The Y coordinate translation element.
				 */
				translateY?: number;
				/**
				 * The Y coordinate shearing element.
				 */
				shearY?: number;
				/**
				 * The units for translate elements.
				 */
				unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
			};
			/**
			 * A collection of page elements joined as a single unit.
			 */
			elementGroup?: {
				/**
				 * The collection of elements in the group. The minimum size of a group is 2.
				 *
				 * Items: A visual element rendered on a page.
				 */
				children?: {
					/**
					 * The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.
					 */
					objectId?: string;
					/**
					 * The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.
					 */
					description?: string;
				}[];
			};
			/**
			 * A Speaker Spotlight.
			 */
			speakerSpotlight?: {
				/**
				 * The properties of the Speaker Spotlight.
				 */
				speakerSpotlightProperties?: {
					/**
					 * The outline of the Speaker Spotlight. If not set, it has no outline.
					 */
					outline?: {
						/**
						 * The dash style of the outline.
						 */
						dashStyle?:
							| ''
							| 'DASH_STYLE_UNSPECIFIED'
							| 'SOLID'
							| 'DOT'
							| 'DASH'
							| 'DASH_DOT'
							| 'LONG_DASH'
							| 'LONG_DASH_DOT';
						/**
						 * The fill of the outline.
						 */
						outlineFill?: {
							/**
							 * Solid color fill.
							 */
							solidFill?: {
								/**
								 * The color value of the solid fill.
								 */
								color?: {
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
										| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
								/**
								 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
								 */
								alpha?: number;
							};
						};
						/**
						 * The thickness of the outline.
						 */
						weight?: {
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
						 * The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.
						 */
						propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
					};
					/**
					 * The shadow of the Speaker Spotlight. If not set, it has no shadow.
					 */
					shadow?: {
						/**
						 * The alpha of the shadow's color, from 0.0 to 1.0.
						 */
						alpha?: number;
						/**
						 * Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.
						 */
						transform?: {
							/**
							 * The X coordinate scaling element.
							 */
							scaleX?: number;
							/**
							 * The X coordinate shearing element.
							 */
							shearX?: number;
							/**
							 * The X coordinate translation element.
							 */
							translateX?: number;
							/**
							 * The Y coordinate scaling element.
							 */
							scaleY?: number;
							/**
							 * The Y coordinate translation element.
							 */
							translateY?: number;
							/**
							 * The Y coordinate shearing element.
							 */
							shearY?: number;
							/**
							 * The units for translate elements.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
						};
						/**
						 * The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.
						 */
						alignment?:
							| ''
							| 'RECTANGLE_POSITION_UNSPECIFIED'
							| 'TOP_LEFT'
							| 'TOP_CENTER'
							| 'TOP_RIGHT'
							| 'LEFT_CENTER'
							| 'CENTER'
							| 'RIGHT_CENTER'
							| 'BOTTOM_LEFT'
							| 'BOTTOM_CENTER'
							| 'BOTTOM_RIGHT';
						/**
						 * The type of the shadow. This property is read-only.
						 */
						type?: '' | 'SHADOW_TYPE_UNSPECIFIED' | 'OUTER';
						/**
						 * Whether the shadow should rotate with the shape. This property is read-only.
						 */
						rotateWithShape?: boolean;
						/**
						 * The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.
						 */
						propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
						/**
						 * The shadow color value.
						 */
						color?: {
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
								| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
						/**
						 * The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.
						 */
						blurRadius?: {
							/**
							 * The units for magnitude.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
							/**
							 * The magnitude.
							 */
							magnitude?: number;
						};
					};
				};
			};
			/**
			 * A generic shape.
			 */
			shape?: {
				/**
				 * Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the shape is a placeholder shape and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.
				 */
				placeholder?: {
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
				 * The type of the shape.
				 */
				shapeType?:
					| ''
					| 'TYPE_UNSPECIFIED'
					| 'TEXT_BOX'
					| 'RECTANGLE'
					| 'ROUND_RECTANGLE'
					| 'ELLIPSE'
					| 'ARC'
					| 'BENT_ARROW'
					| 'BENT_UP_ARROW'
					| 'BEVEL'
					| 'BLOCK_ARC'
					| 'BRACE_PAIR'
					| 'BRACKET_PAIR'
					| 'CAN'
					| 'CHEVRON'
					| 'CHORD'
					| 'CLOUD'
					| 'CORNER'
					| 'CUBE'
					| 'CURVED_DOWN_ARROW'
					| 'CURVED_LEFT_ARROW'
					| 'CURVED_RIGHT_ARROW'
					| 'CURVED_UP_ARROW'
					| 'DECAGON'
					| 'DIAGONAL_STRIPE'
					| 'DIAMOND'
					| 'DODECAGON'
					| 'DONUT'
					| 'DOUBLE_WAVE'
					| 'DOWN_ARROW'
					| 'DOWN_ARROW_CALLOUT'
					| 'FOLDED_CORNER'
					| 'FRAME'
					| 'HALF_FRAME'
					| 'HEART'
					| 'HEPTAGON'
					| 'HEXAGON'
					| 'HOME_PLATE'
					| 'HORIZONTAL_SCROLL'
					| 'IRREGULAR_SEAL_1'
					| 'IRREGULAR_SEAL_2'
					| 'LEFT_ARROW'
					| 'LEFT_ARROW_CALLOUT'
					| 'LEFT_BRACE'
					| 'LEFT_BRACKET'
					| 'LEFT_RIGHT_ARROW'
					| 'LEFT_RIGHT_ARROW_CALLOUT'
					| 'LEFT_RIGHT_UP_ARROW'
					| 'LEFT_UP_ARROW'
					| 'LIGHTNING_BOLT'
					| 'MATH_DIVIDE'
					| 'MATH_EQUAL'
					| 'MATH_MINUS'
					| 'MATH_MULTIPLY'
					| 'MATH_NOT_EQUAL'
					| 'MATH_PLUS'
					| 'MOON'
					| 'NO_SMOKING'
					| 'NOTCHED_RIGHT_ARROW'
					| 'OCTAGON'
					| 'PARALLELOGRAM'
					| 'PENTAGON'
					| 'PIE'
					| 'PLAQUE'
					| 'PLUS'
					| 'QUAD_ARROW'
					| 'QUAD_ARROW_CALLOUT'
					| 'RIBBON'
					| 'RIBBON_2'
					| 'RIGHT_ARROW'
					| 'RIGHT_ARROW_CALLOUT'
					| 'RIGHT_BRACE'
					| 'RIGHT_BRACKET'
					| 'ROUND_1_RECTANGLE'
					| 'ROUND_2_DIAGONAL_RECTANGLE'
					| 'ROUND_2_SAME_RECTANGLE'
					| 'RIGHT_TRIANGLE'
					| 'SMILEY_FACE'
					| 'SNIP_1_RECTANGLE'
					| 'SNIP_2_DIAGONAL_RECTANGLE'
					| 'SNIP_2_SAME_RECTANGLE'
					| 'SNIP_ROUND_RECTANGLE'
					| 'STAR_10'
					| 'STAR_12'
					| 'STAR_16'
					| 'STAR_24'
					| 'STAR_32'
					| 'STAR_4'
					| 'STAR_5'
					| 'STAR_6'
					| 'STAR_7'
					| 'STAR_8'
					| 'STRIPED_RIGHT_ARROW'
					| 'SUN'
					| 'TRAPEZOID'
					| 'TRIANGLE'
					| 'UP_ARROW'
					| 'UP_ARROW_CALLOUT'
					| 'UP_DOWN_ARROW'
					| 'UTURN_ARROW'
					| 'VERTICAL_SCROLL'
					| 'WAVE'
					| 'WEDGE_ELLIPSE_CALLOUT'
					| 'WEDGE_RECTANGLE_CALLOUT'
					| 'WEDGE_ROUND_RECTANGLE_CALLOUT'
					| 'FLOW_CHART_ALTERNATE_PROCESS'
					| 'FLOW_CHART_COLLATE'
					| 'FLOW_CHART_CONNECTOR'
					| 'FLOW_CHART_DECISION'
					| 'FLOW_CHART_DELAY'
					| 'FLOW_CHART_DISPLAY'
					| 'FLOW_CHART_DOCUMENT'
					| 'FLOW_CHART_EXTRACT'
					| 'FLOW_CHART_INPUT_OUTPUT'
					| 'FLOW_CHART_INTERNAL_STORAGE'
					| 'FLOW_CHART_MAGNETIC_DISK'
					| 'FLOW_CHART_MAGNETIC_DRUM'
					| 'FLOW_CHART_MAGNETIC_TAPE'
					| 'FLOW_CHART_MANUAL_INPUT'
					| 'FLOW_CHART_MANUAL_OPERATION'
					| 'FLOW_CHART_MERGE'
					| 'FLOW_CHART_MULTIDOCUMENT'
					| 'FLOW_CHART_OFFLINE_STORAGE'
					| 'FLOW_CHART_OFFPAGE_CONNECTOR'
					| 'FLOW_CHART_ONLINE_STORAGE'
					| 'FLOW_CHART_OR'
					| 'FLOW_CHART_PREDEFINED_PROCESS'
					| 'FLOW_CHART_PREPARATION'
					| 'FLOW_CHART_PROCESS'
					| 'FLOW_CHART_PUNCHED_CARD'
					| 'FLOW_CHART_PUNCHED_TAPE'
					| 'FLOW_CHART_SORT'
					| 'FLOW_CHART_SUMMING_JUNCTION'
					| 'FLOW_CHART_TERMINATOR'
					| 'ARROW_EAST'
					| 'ARROW_NORTH_EAST'
					| 'ARROW_NORTH'
					| 'SPEECH'
					| 'STARBURST'
					| 'TEARDROP'
					| 'ELLIPSE_RIBBON'
					| 'ELLIPSE_RIBBON_2'
					| 'CLOUD_CALLOUT'
					| 'CUSTOM';
				/**
				 * The properties of the shape.
				 */
				shapeProperties?: {
					/**
					 * The hyperlink destination of the shape. If unset, there is no link. Links are not inherited from parent placeholders.
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
					 * The autofit properties of the shape. This property is only set for shapes that allow text.
					 */
					autofit?: {
						/**
						 * The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that's rendered in the editor. This property is read-only.
						 */
						fontScale?: number;
						/**
						 * The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case, the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values.
						 */
						autofitType?:
							| ''
							| 'AUTOFIT_TYPE_UNSPECIFIED'
							| 'NONE'
							| 'TEXT_AUTOFIT'
							| 'SHAPE_AUTOFIT';
						/**
						 * The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that's rendered in the editor. This property is read-only.
						 */
						lineSpacingReduction?: number;
					};
					/**
					 * The shadow properties of the shape. If unset, the shadow is inherited from a parent placeholder if it exists. If the shape has no parent, then the default shadow matches the defaults for new shapes created in the Slides editor. This property is read-only.
					 */
					shadow?: {
						/**
						 * The alpha of the shadow's color, from 0.0 to 1.0.
						 */
						alpha?: number;
						/**
						 * Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.
						 */
						transform?: {
							/**
							 * The X coordinate scaling element.
							 */
							scaleX?: number;
							/**
							 * The X coordinate shearing element.
							 */
							shearX?: number;
							/**
							 * The X coordinate translation element.
							 */
							translateX?: number;
							/**
							 * The Y coordinate scaling element.
							 */
							scaleY?: number;
							/**
							 * The Y coordinate translation element.
							 */
							translateY?: number;
							/**
							 * The Y coordinate shearing element.
							 */
							shearY?: number;
							/**
							 * The units for translate elements.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
						};
						/**
						 * The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.
						 */
						alignment?:
							| ''
							| 'RECTANGLE_POSITION_UNSPECIFIED'
							| 'TOP_LEFT'
							| 'TOP_CENTER'
							| 'TOP_RIGHT'
							| 'LEFT_CENTER'
							| 'CENTER'
							| 'RIGHT_CENTER'
							| 'BOTTOM_LEFT'
							| 'BOTTOM_CENTER'
							| 'BOTTOM_RIGHT';
						/**
						 * The type of the shadow. This property is read-only.
						 */
						type?: '' | 'SHADOW_TYPE_UNSPECIFIED' | 'OUTER';
						/**
						 * Whether the shadow should rotate with the shape. This property is read-only.
						 */
						rotateWithShape?: boolean;
						/**
						 * The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.
						 */
						propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
						/**
						 * The shadow color value.
						 */
						color?: {
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
								| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
						/**
						 * The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.
						 */
						blurRadius?: {
							/**
							 * The units for magnitude.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
							/**
							 * The magnitude.
							 */
							magnitude?: number;
						};
					};
					/**
					 * The outline of the shape. If unset, the outline is inherited from a parent placeholder if it exists. If the shape has no parent, then the default outline depends on the shape type, matching the defaults for new shapes created in the Slides editor.
					 */
					outline?: {
						/**
						 * The dash style of the outline.
						 */
						dashStyle?:
							| ''
							| 'DASH_STYLE_UNSPECIFIED'
							| 'SOLID'
							| 'DOT'
							| 'DASH'
							| 'DASH_DOT'
							| 'LONG_DASH'
							| 'LONG_DASH_DOT';
						/**
						 * The fill of the outline.
						 */
						outlineFill?: {
							/**
							 * Solid color fill.
							 */
							solidFill?: {
								/**
								 * The color value of the solid fill.
								 */
								color?: {
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
										| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
								/**
								 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
								 */
								alpha?: number;
							};
						};
						/**
						 * The thickness of the outline.
						 */
						weight?: {
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
						 * The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.
						 */
						propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
					};
					/**
					 * The background fill of the shape. If unset, the background fill is inherited from a parent placeholder if it exists. If the shape has no parent, then the default background fill depends on the shape type, matching the defaults for new shapes created in the Slides editor.
					 */
					shapeBackgroundFill?: {
						/**
						 * The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
						 */
						propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
						/**
						 * Solid color fill.
						 */
						solidFill?: {
							/**
							 * The color value of the solid fill.
							 */
							color?: {
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
									| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
							/**
							 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
							 */
							alpha?: number;
						};
					};
					/**
					 * The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor.
					 */
					contentAlignment?:
						| ''
						| 'CONTENT_ALIGNMENT_UNSPECIFIED'
						| 'CONTENT_ALIGNMENT_UNSUPPORTED'
						| 'TOP'
						| 'MIDDLE'
						| 'BOTTOM';
				};
				/**
				 * The text content of the shape.
				 */
				text?: {
					/**
					 * The bulleted lists contained in this text, keyed by list ID.
					 */
					lists?: Record<string, JSONValue>;
					/**
					 * The text contents broken down into its component parts, including styling information. This property is read-only.
					 *
					 * Items: A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
					 */
					textElements?: {
						/**
						 * The zero-based end index of this text element, exclusive, in Unicode code units.
						 */
						endIndex?: number;
						/**
						 * A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.
						 */
						paragraphMarker?: {
							/**
							 * The paragraph's style
							 */
							style?: {
								/**
								 * The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.
								 */
								indentEnd?: {
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
								 * The spacing mode for the paragraph.
								 */
								spacingMode?:
									| ''
									| 'SPACING_MODE_UNSPECIFIED'
									| 'NEVER_COLLAPSE'
									| 'COLLAPSE_LISTS';
								/**
								 * The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.
								 */
								indentStart?: {
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
								 * The text alignment for this paragraph.
								 */
								alignment?:
									| ''
									| 'ALIGNMENT_UNSPECIFIED'
									| 'START'
									| 'CENTER'
									| 'END'
									| 'JUSTIFIED';
								/**
								 * The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.
								 */
								indentFirstLine?: {
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
								 * The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.
								 */
								lineSpacing?: number;
								/**
								 * The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.
								 */
								direction?:
									| ''
									| 'TEXT_DIRECTION_UNSPECIFIED'
									| 'LEFT_TO_RIGHT'
									| 'RIGHT_TO_LEFT';
								/**
								 * The amount of extra space above the paragraph. If unset, the value is inherited from the parent.
								 */
								spaceAbove?: {
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
								 * The amount of extra space below the paragraph. If unset, the value is inherited from the parent.
								 */
								spaceBelow?: {
									/**
									 * The units for magnitude.
									 */
									unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
									/**
									 * The magnitude.
									 */
									magnitude?: number;
								};
							};
							/**
							 * The bullet for this paragraph. If not present, the paragraph does not belong to a list.
							 */
							bullet?: {
								/**
								 * The rendered bullet glyph for this paragraph.
								 */
								glyph?: string;
								/**
								 * The paragraph specific text style applied to this bullet.
								 */
								bulletStyle?: {
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
												| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
												| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
								 * The nesting level of this paragraph in the list.
								 */
								nestingLevel?: number;
								/**
								 * The ID of the list this paragraph belongs to.
								 */
								listId?: string;
							};
						};
						/**
						 * A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.
						 */
						autoText?: {
							/**
							 * The styling applied to this auto text.
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
											| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
											| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
							 * The rendered content of this auto text, if available.
							 */
							content?: string;
							/**
							 * The type of this auto text.
							 */
							type?: '' | 'TYPE_UNSPECIFIED' | 'SLIDE_NUMBER';
						};
						/**
						 * A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.
						 */
						textRun?: {
							/**
							 * The text of this run.
							 */
							content?: string;
							/**
							 * The styling applied to this run.
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
											| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
											| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
						};
						/**
						 * The zero-based start index of this text element, in Unicode code units.
						 */
						startIndex?: number;
					}[];
				};
			};
			/**
			 * The size of the page element.
			 */
			size?: {
				/**
				 * The width of the object.
				 */
				width?: {
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
				 * The height of the object.
				 */
				height?: {
					/**
					 * The units for magnitude.
					 */
					unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
					/**
					 * The magnitude.
					 */
					magnitude?: number;
				};
			};
			/**
			 * The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.
			 */
			description?: string;
			/**
			 * A video page element.
			 */
			video?: {
				/**
				 * The video source's unique identifier for this video.
				 */
				id?: string;
				/**
				 * An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.
				 */
				url?: string;
				/**
				 * The properties of the video.
				 */
				videoProperties?: {
					/**
					 * The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.
					 */
					end?: number;
					/**
					 * Whether to enable video autoplay when the page is displayed in present mode. Defaults to false.
					 */
					autoPlay?: boolean;
					/**
					 * The outline of the video. The default outline matches the defaults for new videos created in the Slides editor.
					 */
					outline?: {
						/**
						 * The dash style of the outline.
						 */
						dashStyle?:
							| ''
							| 'DASH_STYLE_UNSPECIFIED'
							| 'SOLID'
							| 'DOT'
							| 'DASH'
							| 'DASH_DOT'
							| 'LONG_DASH'
							| 'LONG_DASH_DOT';
						/**
						 * The fill of the outline.
						 */
						outlineFill?: {
							/**
							 * Solid color fill.
							 */
							solidFill?: {
								/**
								 * The color value of the solid fill.
								 */
								color?: {
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
										| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
								/**
								 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
								 */
								alpha?: number;
							};
						};
						/**
						 * The thickness of the outline.
						 */
						weight?: {
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
						 * The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.
						 */
						propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
					};
					/**
					 * Whether to mute the audio during video playback. Defaults to false.
					 */
					mute?: boolean;
					/**
					 * The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.
					 */
					start?: number;
				};
				/**
				 * The video source.
				 */
				source?: '' | 'SOURCE_UNSPECIFIED' | 'YOUTUBE' | 'DRIVE';
			};
			/**
			 * A table page element.
			 */
			table?: {
				/**
				 * Properties of each column.
				 *
				 * Items: Properties of each column in a table.
				 */
				tableColumns?: {
					/**
					 * Width of a column.
					 */
					columnWidth?: {
						/**
						 * The units for magnitude.
						 */
						unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
						/**
						 * The magnitude.
						 */
						magnitude?: number;
					};
				}[];
				/**
				 * Properties of vertical cell borders. A table's vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns.
				 *
				 * Items: Contents of each border row in a table.
				 */
				verticalBorderRows?: {
					/**
					 * Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.
					 *
					 * Items: The properties of each border cell.
					 */
					tableBorderCells?: {
						/**
						 * The border properties.
						 */
						tableBorderProperties?: {
							/**
							 * The dash style of the border.
							 */
							dashStyle?:
								| ''
								| 'DASH_STYLE_UNSPECIFIED'
								| 'SOLID'
								| 'DOT'
								| 'DASH'
								| 'DASH_DOT'
								| 'LONG_DASH'
								| 'LONG_DASH_DOT';
							/**
							 * The fill of the table border.
							 */
							tableBorderFill?: {
								/**
								 * Solid fill.
								 */
								solidFill?: {
									/**
									 * The color value of the solid fill.
									 */
									color?: {
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
											| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
									/**
									 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
									 */
									alpha?: number;
								};
							};
							/**
							 * The thickness of the border.
							 */
							weight?: {
								/**
								 * The units for magnitude.
								 */
								unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
								/**
								 * The magnitude.
								 */
								magnitude?: number;
							};
						};
						/**
						 * The location of the border within the border table.
						 */
						location?: {
							/**
							 * The 0-based row index.
							 */
							rowIndex?: number;
							/**
							 * The 0-based column index.
							 */
							columnIndex?: number;
						};
					}[];
				}[];
				/**
				 * Number of rows in the table.
				 */
				rows?: number;
				/**
				 * Number of columns in the table.
				 */
				columns?: number;
				/**
				 * Properties of horizontal cell borders. A table's horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns.
				 *
				 * Items: Contents of each border row in a table.
				 */
				horizontalBorderRows?: {
					/**
					 * Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response.
					 *
					 * Items: The properties of each border cell.
					 */
					tableBorderCells?: {
						/**
						 * The border properties.
						 */
						tableBorderProperties?: {
							/**
							 * The dash style of the border.
							 */
							dashStyle?:
								| ''
								| 'DASH_STYLE_UNSPECIFIED'
								| 'SOLID'
								| 'DOT'
								| 'DASH'
								| 'DASH_DOT'
								| 'LONG_DASH'
								| 'LONG_DASH_DOT';
							/**
							 * The fill of the table border.
							 */
							tableBorderFill?: {
								/**
								 * Solid fill.
								 */
								solidFill?: {
									/**
									 * The color value of the solid fill.
									 */
									color?: {
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
											| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
									/**
									 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
									 */
									alpha?: number;
								};
							};
							/**
							 * The thickness of the border.
							 */
							weight?: {
								/**
								 * The units for magnitude.
								 */
								unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
								/**
								 * The magnitude.
								 */
								magnitude?: number;
							};
						};
						/**
						 * The location of the border within the border table.
						 */
						location?: {
							/**
							 * The 0-based row index.
							 */
							rowIndex?: number;
							/**
							 * The 0-based column index.
							 */
							columnIndex?: number;
						};
					}[];
				}[];
				/**
				 * Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a row_span greater than 1.
				 *
				 * Items: Properties and contents of each row in a table.
				 */
				tableRows?: {
					/**
					 * Properties of the row.
					 */
					tableRowProperties?: {
						/**
						 * Minimum height of the row. The row will be rendered in the Slides editor at a height equal to or greater than this value in order to show all the text in the row's cell(s).
						 */
						minRowHeight?: {
							/**
							 * The units for magnitude.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
							/**
							 * The magnitude.
							 */
							magnitude?: number;
						};
					};
					/**
					 * Height of a row.
					 */
					rowHeight?: {
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
					 * Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table.
					 *
					 * Items: Properties and contents of each table cell.
					 */
					tableCells?: {
						/**
						 * Column span of the cell.
						 */
						columnSpan?: number;
						/**
						 * The location of the cell within the table.
						 */
						location?: {
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
						 * Row span of the cell.
						 */
						rowSpan?: number;
						/**
						 * The text content of the cell.
						 */
						text?: {
							/**
							 * The bulleted lists contained in this text, keyed by list ID.
							 */
							lists?: Record<string, JSONValue>;
							/**
							 * The text contents broken down into its component parts, including styling information. This property is read-only.
							 *
							 * Items: A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
							 */
							textElements?: {
								/**
								 * The zero-based end index of this text element, exclusive, in Unicode code units.
								 */
								endIndex?: number;
								/**
								 * A marker representing the beginning of a new paragraph. The `start_index` and `end_index` of this TextElement represent the range of the paragraph. Other TextElements with an index range contained inside this paragraph's range are considered to be part of this paragraph. The range of indices of two separate paragraphs will never overlap.
								 */
								paragraphMarker?: {
									/**
									 * The paragraph's style
									 */
									style?: {
										/**
										 * The amount indentation for the paragraph on the side that corresponds to the end of the text, based on the current text direction. If unset, the value is inherited from the parent.
										 */
										indentEnd?: {
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
										 * The spacing mode for the paragraph.
										 */
										spacingMode?:
											| ''
											| 'SPACING_MODE_UNSPECIFIED'
											| 'NEVER_COLLAPSE'
											| 'COLLAPSE_LISTS';
										/**
										 * The amount indentation for the paragraph on the side that corresponds to the start of the text, based on the current text direction. If unset, the value is inherited from the parent.
										 */
										indentStart?: {
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
										 * The text alignment for this paragraph.
										 */
										alignment?:
											| ''
											| 'ALIGNMENT_UNSPECIFIED'
											| 'START'
											| 'CENTER'
											| 'END'
											| 'JUSTIFIED';
										/**
										 * The amount of indentation for the start of the first line of the paragraph. If unset, the value is inherited from the parent.
										 */
										indentFirstLine?: {
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
										 * The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.
										 */
										lineSpacing?: number;
										/**
										 * The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.
										 */
										direction?:
											| ''
											| 'TEXT_DIRECTION_UNSPECIFIED'
											| 'LEFT_TO_RIGHT'
											| 'RIGHT_TO_LEFT';
										/**
										 * The amount of extra space above the paragraph. If unset, the value is inherited from the parent.
										 */
										spaceAbove?: {
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
										 * The amount of extra space below the paragraph. If unset, the value is inherited from the parent.
										 */
										spaceBelow?: {
											/**
											 * The units for magnitude.
											 */
											unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
											/**
											 * The magnitude.
											 */
											magnitude?: number;
										};
									};
									/**
									 * The bullet for this paragraph. If not present, the paragraph does not belong to a list.
									 */
									bullet?: {
										/**
										 * The rendered bullet glyph for this paragraph.
										 */
										glyph?: string;
										/**
										 * The paragraph specific text style applied to this bullet.
										 */
										bulletStyle?: {
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
														| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
														| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
										 * The nesting level of this paragraph in the list.
										 */
										nestingLevel?: number;
										/**
										 * The ID of the list this paragraph belongs to.
										 */
										listId?: string;
									};
								};
								/**
								 * A TextElement representing a spot in the text that is dynamically replaced with content that can change over time.
								 */
								autoText?: {
									/**
									 * The styling applied to this auto text.
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
													| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
													| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
									 * The rendered content of this auto text, if available.
									 */
									content?: string;
									/**
									 * The type of this auto text.
									 */
									type?: '' | 'TYPE_UNSPECIFIED' | 'SLIDE_NUMBER';
								};
								/**
								 * A TextElement representing a run of text where all of the characters in the run have the same TextStyle. The `start_index` and `end_index` of TextRuns will always be fully contained in the index range of a single `paragraph_marker` TextElement. In other words, a TextRun will never span multiple paragraphs.
								 */
								textRun?: {
									/**
									 * The text of this run.
									 */
									content?: string;
									/**
									 * The styling applied to this run.
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
													| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
													| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
								};
								/**
								 * The zero-based start index of this text element, in Unicode code units.
								 */
								startIndex?: number;
							}[];
						};
						/**
						 * The properties of the table cell.
						 */
						tableCellProperties?: {
							/**
							 * The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor.
							 */
							contentAlignment?:
								| ''
								| 'CONTENT_ALIGNMENT_UNSPECIFIED'
								| 'CONTENT_ALIGNMENT_UNSUPPORTED'
								| 'TOP'
								| 'MIDDLE'
								| 'BOTTOM';
							/**
							 * The background fill of the table cell. The default fill matches the fill for newly created table cells in the Slides editor.
							 */
							tableCellBackgroundFill?: {
								/**
								 * The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
								 */
								propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
								/**
								 * Solid color fill.
								 */
								solidFill?: {
									/**
									 * The color value of the solid fill.
									 */
									color?: {
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
											| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
									/**
									 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
									 */
									alpha?: number;
								};
							};
						};
					}[];
				}[];
			};
			/**
			 * A line page element.
			 */
			line?: {
				/**
				 * The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest.
				 */
				lineCategory?: '' | 'LINE_CATEGORY_UNSPECIFIED' | 'STRAIGHT' | 'BENT' | 'CURVED';
				/**
				 * The type of the line.
				 */
				lineType?:
					| ''
					| 'TYPE_UNSPECIFIED'
					| 'STRAIGHT_CONNECTOR_1'
					| 'BENT_CONNECTOR_2'
					| 'BENT_CONNECTOR_3'
					| 'BENT_CONNECTOR_4'
					| 'BENT_CONNECTOR_5'
					| 'CURVED_CONNECTOR_2'
					| 'CURVED_CONNECTOR_3'
					| 'CURVED_CONNECTOR_4'
					| 'CURVED_CONNECTOR_5'
					| 'STRAIGHT_LINE';
				/**
				 * The properties of the line.
				 */
				lineProperties?: {
					/**
					 * The connection at the beginning of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have a `start_connection`.
					 */
					startConnection?: {
						/**
						 * The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in both the description of the "cxn" attribute in section 20.1.9.9 and "Annex H. Example Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/). The position of each connection site can also be viewed from Slides editor.
						 */
						connectionSiteIndex?: number;
						/**
						 * The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.
						 */
						connectedObjectId?: string;
					};
					/**
					 * The hyperlink destination of the line. If unset, there is no link.
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
					 * The connection at the end of the line. If unset, there is no connection. Only lines with a Type indicating it is a "connector" can have an `end_connection`.
					 */
					endConnection?: {
						/**
						 * The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in both the description of the "cxn" attribute in section 20.1.9.9 and "Annex H. Example Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition](https://ecma-international.org/publications-and-standards/standards/ecma-376/). The position of each connection site can also be viewed from Slides editor.
						 */
						connectionSiteIndex?: number;
						/**
						 * The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line.
						 */
						connectedObjectId?: string;
					};
					/**
					 * The style of the arrow at the end of the line.
					 */
					endArrow?:
						| ''
						| 'ARROW_STYLE_UNSPECIFIED'
						| 'NONE'
						| 'STEALTH_ARROW'
						| 'FILL_ARROW'
						| 'FILL_CIRCLE'
						| 'FILL_SQUARE'
						| 'FILL_DIAMOND'
						| 'OPEN_ARROW'
						| 'OPEN_CIRCLE'
						| 'OPEN_SQUARE'
						| 'OPEN_DIAMOND';
					/**
					 * The dash style of the line.
					 */
					dashStyle?:
						| ''
						| 'DASH_STYLE_UNSPECIFIED'
						| 'SOLID'
						| 'DOT'
						| 'DASH'
						| 'DASH_DOT'
						| 'LONG_DASH'
						| 'LONG_DASH_DOT';
					/**
					 * The fill of the line. The default line fill matches the defaults for new lines created in the Slides editor.
					 */
					lineFill?: {
						/**
						 * Solid color fill.
						 */
						solidFill?: {
							/**
							 * The color value of the solid fill.
							 */
							color?: {
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
									| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
							/**
							 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
							 */
							alpha?: number;
						};
					};
					/**
					 * The thickness of the line.
					 */
					weight?: {
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
					 * The style of the arrow at the beginning of the line.
					 */
					startArrow?:
						| ''
						| 'ARROW_STYLE_UNSPECIFIED'
						| 'NONE'
						| 'STEALTH_ARROW'
						| 'FILL_ARROW'
						| 'FILL_CIRCLE'
						| 'FILL_SQUARE'
						| 'FILL_DIAMOND'
						| 'OPEN_ARROW'
						| 'OPEN_CIRCLE'
						| 'OPEN_SQUARE'
						| 'OPEN_DIAMOND';
				};
			};
			/**
			 * A linked chart embedded from Google Sheets. Unlinked charts are represented as images.
			 */
			sheetsChart?: {
				/**
				 * The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.
				 */
				contentUrl?: string;
				/**
				 * The ID of the Google Sheets spreadsheet that contains the source chart.
				 */
				spreadsheetId?: string;
				/**
				 * The ID of the specific chart in the Google Sheets spreadsheet that is embedded.
				 */
				chartId?: number;
				/**
				 * The properties of the Sheets chart.
				 */
				sheetsChartProperties?: {
					/**
					 * The properties of the embedded chart image.
					 */
					chartImageProperties?: {
						/**
						 * The shadow of the image. If not set, the image has no shadow. This property is read-only.
						 */
						shadow?: {
							/**
							 * The alpha of the shadow's color, from 0.0 to 1.0.
							 */
							alpha?: number;
							/**
							 * Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.
							 */
							transform?: {
								/**
								 * The X coordinate scaling element.
								 */
								scaleX?: number;
								/**
								 * The X coordinate shearing element.
								 */
								shearX?: number;
								/**
								 * The X coordinate translation element.
								 */
								translateX?: number;
								/**
								 * The Y coordinate scaling element.
								 */
								scaleY?: number;
								/**
								 * The Y coordinate translation element.
								 */
								translateY?: number;
								/**
								 * The Y coordinate shearing element.
								 */
								shearY?: number;
								/**
								 * The units for translate elements.
								 */
								unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
							};
							/**
							 * The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.
							 */
							alignment?:
								| ''
								| 'RECTANGLE_POSITION_UNSPECIFIED'
								| 'TOP_LEFT'
								| 'TOP_CENTER'
								| 'TOP_RIGHT'
								| 'LEFT_CENTER'
								| 'CENTER'
								| 'RIGHT_CENTER'
								| 'BOTTOM_LEFT'
								| 'BOTTOM_CENTER'
								| 'BOTTOM_RIGHT';
							/**
							 * The type of the shadow. This property is read-only.
							 */
							type?: '' | 'SHADOW_TYPE_UNSPECIFIED' | 'OUTER';
							/**
							 * Whether the shadow should rotate with the shape. This property is read-only.
							 */
							rotateWithShape?: boolean;
							/**
							 * The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.
							 */
							propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
							/**
							 * The shadow color value.
							 */
							color?: {
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
									| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
							/**
							 * The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.
							 */
							blurRadius?: {
								/**
								 * The units for magnitude.
								 */
								unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
								/**
								 * The magnitude.
								 */
								magnitude?: number;
							};
						};
						/**
						 * The crop properties of the image. If not set, the image is not cropped. This property is read-only.
						 */
						cropProperties?: {
							/**
							 * The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.
							 */
							rightOffset?: number;
							/**
							 * The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.
							 */
							bottomOffset?: number;
							/**
							 * The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.
							 */
							angle?: number;
							/**
							 * The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.
							 */
							leftOffset?: number;
							/**
							 * The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.
							 */
							topOffset?: number;
						};
						/**
						 * The recolor effect of the image. If not set, the image is not recolored. This property is read-only.
						 */
						recolor?: {
							/**
							 * The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.
							 */
							name?:
								| ''
								| 'NONE'
								| 'LIGHT1'
								| 'LIGHT2'
								| 'LIGHT3'
								| 'LIGHT4'
								| 'LIGHT5'
								| 'LIGHT6'
								| 'LIGHT7'
								| 'LIGHT8'
								| 'LIGHT9'
								| 'LIGHT10'
								| 'DARK1'
								| 'DARK2'
								| 'DARK3'
								| 'DARK4'
								| 'DARK5'
								| 'DARK6'
								| 'DARK7'
								| 'DARK8'
								| 'DARK9'
								| 'DARK10'
								| 'GRAYSCALE'
								| 'NEGATIVE'
								| 'SEPIA'
								| 'CUSTOM';
							/**
							 * The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.
							 *
							 * Items: A color and position in a gradient band.
							 */
							recolorStops?: {
								/**
								 * The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].
								 */
								position?: number;
								/**
								 * The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.
								 */
								alpha?: number;
								/**
								 * The color of the gradient stop.
								 */
								color?: {
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
										| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
							}[];
						};
						/**
						 * The outline of the image. If not set, the image has no outline.
						 */
						outline?: {
							/**
							 * The dash style of the outline.
							 */
							dashStyle?:
								| ''
								| 'DASH_STYLE_UNSPECIFIED'
								| 'SOLID'
								| 'DOT'
								| 'DASH'
								| 'DASH_DOT'
								| 'LONG_DASH'
								| 'LONG_DASH_DOT';
							/**
							 * The fill of the outline.
							 */
							outlineFill?: {
								/**
								 * Solid color fill.
								 */
								solidFill?: {
									/**
									 * The color value of the solid fill.
									 */
									color?: {
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
											| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
									/**
									 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
									 */
									alpha?: number;
								};
							};
							/**
							 * The thickness of the outline.
							 */
							weight?: {
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
							 * The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.
							 */
							propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
						};
						/**
						 * The hyperlink destination of the image. If unset, there is no link.
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
						 * The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.
						 */
						transparency?: number;
						/**
						 * The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
						 */
						brightness?: number;
						/**
						 * The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
						 */
						contrast?: number;
					};
				};
			};
			/**
			 * A word art page element.
			 */
			wordArt?: {
				/**
				 * The text rendered as word art.
				 */
				renderedText?: string;
			};
			/**
			 * An image page element.
			 */
			image?: {
				/**
				 * Placeholders are page elements that inherit from corresponding placeholders on layouts and masters. If set, the image is a placeholder image and any inherited properties can be resolved by looking at the parent placeholder identified by the Placeholder.parent_object_id field.
				 */
				placeholder?: {
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
				 * The properties of the image.
				 */
				imageProperties?: {
					/**
					 * The shadow of the image. If not set, the image has no shadow. This property is read-only.
					 */
					shadow?: {
						/**
						 * The alpha of the shadow's color, from 0.0 to 1.0.
						 */
						alpha?: number;
						/**
						 * Transform that encodes the translate, scale, and skew of the shadow, relative to the alignment position.
						 */
						transform?: {
							/**
							 * The X coordinate scaling element.
							 */
							scaleX?: number;
							/**
							 * The X coordinate shearing element.
							 */
							shearX?: number;
							/**
							 * The X coordinate translation element.
							 */
							translateX?: number;
							/**
							 * The Y coordinate scaling element.
							 */
							scaleY?: number;
							/**
							 * The Y coordinate translation element.
							 */
							translateY?: number;
							/**
							 * The Y coordinate shearing element.
							 */
							shearY?: number;
							/**
							 * The units for translate elements.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
						};
						/**
						 * The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only.
						 */
						alignment?:
							| ''
							| 'RECTANGLE_POSITION_UNSPECIFIED'
							| 'TOP_LEFT'
							| 'TOP_CENTER'
							| 'TOP_RIGHT'
							| 'LEFT_CENTER'
							| 'CENTER'
							| 'RIGHT_CENTER'
							| 'BOTTOM_LEFT'
							| 'BOTTOM_CENTER'
							| 'BOTTOM_RIGHT';
						/**
						 * The type of the shadow. This property is read-only.
						 */
						type?: '' | 'SHADOW_TYPE_UNSPECIFIED' | 'OUTER';
						/**
						 * Whether the shadow should rotate with the shape. This property is read-only.
						 */
						rotateWithShape?: boolean;
						/**
						 * The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored.
						 */
						propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
						/**
						 * The shadow color value.
						 */
						color?: {
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
								| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
						/**
						 * The radius of the shadow blur. The larger the radius, the more diffuse the shadow becomes.
						 */
						blurRadius?: {
							/**
							 * The units for magnitude.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
							/**
							 * The magnitude.
							 */
							magnitude?: number;
						};
					};
					/**
					 * The crop properties of the image. If not set, the image is not cropped. This property is read-only.
					 */
					cropProperties?: {
						/**
						 * The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.
						 */
						rightOffset?: number;
						/**
						 * The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.
						 */
						bottomOffset?: number;
						/**
						 * The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.
						 */
						angle?: number;
						/**
						 * The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.
						 */
						leftOffset?: number;
						/**
						 * The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.
						 */
						topOffset?: number;
					};
					/**
					 * The recolor effect of the image. If not set, the image is not recolored. This property is read-only.
					 */
					recolor?: {
						/**
						 * The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only.
						 */
						name?:
							| ''
							| 'NONE'
							| 'LIGHT1'
							| 'LIGHT2'
							| 'LIGHT3'
							| 'LIGHT4'
							| 'LIGHT5'
							| 'LIGHT6'
							| 'LIGHT7'
							| 'LIGHT8'
							| 'LIGHT9'
							| 'LIGHT10'
							| 'DARK1'
							| 'DARK2'
							| 'DARK3'
							| 'DARK4'
							| 'DARK5'
							| 'DARK6'
							| 'DARK7'
							| 'DARK8'
							| 'DARK9'
							| 'DARK10'
							| 'GRAYSCALE'
							| 'NEGATIVE'
							| 'SEPIA'
							| 'CUSTOM';
						/**
						 * The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only.
						 *
						 * Items: A color and position in a gradient band.
						 */
						recolorStops?: {
							/**
							 * The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].
							 */
							position?: number;
							/**
							 * The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.
							 */
							alpha?: number;
							/**
							 * The color of the gradient stop.
							 */
							color?: {
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
									| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
						}[];
					};
					/**
					 * The outline of the image. If not set, the image has no outline.
					 */
					outline?: {
						/**
						 * The dash style of the outline.
						 */
						dashStyle?:
							| ''
							| 'DASH_STYLE_UNSPECIFIED'
							| 'SOLID'
							| 'DOT'
							| 'DASH'
							| 'DASH_DOT'
							| 'LONG_DASH'
							| 'LONG_DASH_DOT';
						/**
						 * The fill of the outline.
						 */
						outlineFill?: {
							/**
							 * Solid color fill.
							 */
							solidFill?: {
								/**
								 * The color value of the solid fill.
								 */
								color?: {
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
										| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
								/**
								 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
								 */
								alpha?: number;
							};
						};
						/**
						 * The thickness of the outline.
						 */
						weight?: {
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
						 * The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.
						 */
						propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
					};
					/**
					 * The hyperlink destination of the image. If unset, there is no link.
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
					 * The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.
					 */
					transparency?: number;
					/**
					 * The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
					 */
					brightness?: number;
					/**
					 * The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
					 */
					contrast?: number;
				};
				/**
				 * An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change.
				 */
				contentUrl?: string;
				/**
				 * The source URL is the URL used to insert the image. The source URL can be empty.
				 */
				sourceUrl?: string;
			};
		}[];
	}[];
	/**
	 * The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout. Nested pageElements match the Page resource from Get a page; they are omitted here because they duplicate the slides[].pageElements schema.
	 *
	 * Items: A page in a presentation.
	 */
	layouts?: {
		/**
		 * The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
		 */
		objectId?: string;
		/**
		 * Layout specific properties. Only set if page_type = LAYOUT.
		 */
		layoutProperties?: {
			/**
			 * The object ID of the master that this layout is based on.
			 */
			masterObjectId?: string;
			/**
			 * The name of the layout.
			 */
			name?: string;
			/**
			 * The human-readable name of the layout.
			 */
			displayName?: string;
		};
		/**
		 * Master specific properties. Only set if page_type = MASTER.
		 */
		masterProperties?: {
			/**
			 * The human-readable name of the master.
			 */
			displayName?: string;
		};
		/**
		 * The type of the page.
		 */
		pageType?: '' | 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER';
		/**
		 * Notes specific properties. Only set if page_type = NOTES.
		 */
		notesProperties?: {
			/**
			 * The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.
			 */
			speakerNotesObjectId?: string;
		};
		/**
		 * Slide specific properties. Only set if page_type = SLIDE.
		 */
		slideProperties?: {
			/**
			 * The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.
			 */
			notesPage?: {
				/**
				 * The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
				 */
				objectId?: string;
				/**
				 * The type of the page.
				 */
				pageType?: '' | 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER';
			};
			/**
			 * The object ID of the layout that this slide is based on. This property is read-only.
			 */
			layoutObjectId?: string;
			/**
			 * The object ID of the master that this slide is based on. This property is read-only.
			 */
			masterObjectId?: string;
			/**
			 * Whether the slide is skipped in the presentation mode. Defaults to false.
			 */
			isSkipped?: boolean;
		};
		/**
		 * The properties of the page.
		 */
		pageProperties?: {
			/**
			 * The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.
			 */
			pageBackgroundFill?: {
				/**
				 * Solid color fill.
				 */
				solidFill?: {
					/**
					 * The color value of the solid fill.
					 */
					color?: {
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
							| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
					/**
					 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
					 */
					alpha?: number;
				};
				/**
				 * Stretched picture fill.
				 */
				stretchedPictureFill?: {
					/**
					 * Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.
					 */
					contentUrl?: string;
					/**
					 * The original size of the picture fill. This field is read-only.
					 */
					size?: {
						/**
						 * The width of the object.
						 */
						width?: {
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
						 * The height of the object.
						 */
						height?: {
							/**
							 * The units for magnitude.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
							/**
							 * The magnitude.
							 */
							magnitude?: number;
						};
					};
				};
				/**
				 * The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
				 */
				propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
			};
			/**
			 * The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.
			 */
			colorScheme?: {
				/**
				 * The ThemeColorType and corresponding concrete color pairs.
				 *
				 * Items: A pair mapping a theme color type to the concrete color it represents.
				 */
				colors?: {
					/**
					 * The concrete color corresponding to the theme color type above.
					 */
					color?: {
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
					 * The type of the theme color.
					 */
					type?:
						| ''
						| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
				}[];
			};
		};
		/**
		 * Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.
		 */
		revisionId?: string;
	}[];
	/**
	 * The ID of the presentation.
	 */
	presentationId?: string;
	/**
	 * Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.
	 */
	revisionId?: string;
	/**
	 * The notes master in the presentation. It serves three purposes: - Placeholder shapes on a notes master contain the default text styles and shape properties of all placeholder shapes on notes pages. Specifically, a `SLIDE_IMAGE` placeholder shape contains the slide thumbnail, and a `BODY` placeholder shape contains the speaker notes. - The notes master page properties define the common page properties inherited by all notes pages. - Any other shapes on the notes master appear on all notes pages. The notes master is read-only. Nested pageElements match the Page resource from Get a page; they are omitted here because they duplicate the slides[].pageElements schema.
	 */
	notesMaster?: {
		/**
		 * The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
		 */
		objectId?: string;
		/**
		 * Layout specific properties. Only set if page_type = LAYOUT.
		 */
		layoutProperties?: {
			/**
			 * The object ID of the master that this layout is based on.
			 */
			masterObjectId?: string;
			/**
			 * The name of the layout.
			 */
			name?: string;
			/**
			 * The human-readable name of the layout.
			 */
			displayName?: string;
		};
		/**
		 * Master specific properties. Only set if page_type = MASTER.
		 */
		masterProperties?: {
			/**
			 * The human-readable name of the master.
			 */
			displayName?: string;
		};
		/**
		 * The type of the page.
		 */
		pageType?: '' | 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER';
		/**
		 * Notes specific properties. Only set if page_type = NOTES.
		 */
		notesProperties?: {
			/**
			 * The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.
			 */
			speakerNotesObjectId?: string;
		};
		/**
		 * Slide specific properties. Only set if page_type = SLIDE.
		 */
		slideProperties?: {
			/**
			 * The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.
			 */
			notesPage?: {
				/**
				 * The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
				 */
				objectId?: string;
				/**
				 * The type of the page.
				 */
				pageType?: '' | 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER';
			};
			/**
			 * The object ID of the layout that this slide is based on. This property is read-only.
			 */
			layoutObjectId?: string;
			/**
			 * The object ID of the master that this slide is based on. This property is read-only.
			 */
			masterObjectId?: string;
			/**
			 * Whether the slide is skipped in the presentation mode. Defaults to false.
			 */
			isSkipped?: boolean;
		};
		/**
		 * The properties of the page.
		 */
		pageProperties?: {
			/**
			 * The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.
			 */
			pageBackgroundFill?: {
				/**
				 * Solid color fill.
				 */
				solidFill?: {
					/**
					 * The color value of the solid fill.
					 */
					color?: {
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
							| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
					/**
					 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
					 */
					alpha?: number;
				};
				/**
				 * Stretched picture fill.
				 */
				stretchedPictureFill?: {
					/**
					 * Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.
					 */
					contentUrl?: string;
					/**
					 * The original size of the picture fill. This field is read-only.
					 */
					size?: {
						/**
						 * The width of the object.
						 */
						width?: {
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
						 * The height of the object.
						 */
						height?: {
							/**
							 * The units for magnitude.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
							/**
							 * The magnitude.
							 */
							magnitude?: number;
						};
					};
				};
				/**
				 * The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
				 */
				propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
			};
			/**
			 * The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.
			 */
			colorScheme?: {
				/**
				 * The ThemeColorType and corresponding concrete color pairs.
				 *
				 * Items: A pair mapping a theme color type to the concrete color it represents.
				 */
				colors?: {
					/**
					 * The concrete color corresponding to the theme color type above.
					 */
					color?: {
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
					 * The type of the theme color.
					 */
					type?:
						| ''
						| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
				}[];
			};
		};
		/**
		 * Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.
		 */
		revisionId?: string;
	};
	/**
	 * The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master. - The master page properties define the common page properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master, regardless of their layout. Nested pageElements match the Page resource from Get a page; they are omitted here because they duplicate the slides[].pageElements schema.
	 *
	 * Items: A page in a presentation.
	 */
	masters?: {
		/**
		 * The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
		 */
		objectId?: string;
		/**
		 * Layout specific properties. Only set if page_type = LAYOUT.
		 */
		layoutProperties?: {
			/**
			 * The object ID of the master that this layout is based on.
			 */
			masterObjectId?: string;
			/**
			 * The name of the layout.
			 */
			name?: string;
			/**
			 * The human-readable name of the layout.
			 */
			displayName?: string;
		};
		/**
		 * Master specific properties. Only set if page_type = MASTER.
		 */
		masterProperties?: {
			/**
			 * The human-readable name of the master.
			 */
			displayName?: string;
		};
		/**
		 * The type of the page.
		 */
		pageType?: '' | 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER';
		/**
		 * Notes specific properties. Only set if page_type = NOTES.
		 */
		notesProperties?: {
			/**
			 * The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.
			 */
			speakerNotesObjectId?: string;
		};
		/**
		 * Slide specific properties. Only set if page_type = SLIDE.
		 */
		slideProperties?: {
			/**
			 * The notes page that this slide is associated with. It defines the visual appearance of a notes page when printing or exporting slides with speaker notes. A notes page inherits properties from the notes master. The placeholder shape with type BODY on the notes page contains the speaker notes for this slide. The ID of this shape is identified by the speakerNotesObjectId field. The notes page is read-only except for the text content and styles of the speaker notes shape. This property is read-only.
			 */
			notesPage?: {
				/**
				 * The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
				 */
				objectId?: string;
				/**
				 * The type of the page.
				 */
				pageType?: '' | 'SLIDE' | 'MASTER' | 'LAYOUT' | 'NOTES' | 'NOTES_MASTER';
			};
			/**
			 * The object ID of the layout that this slide is based on. This property is read-only.
			 */
			layoutObjectId?: string;
			/**
			 * The object ID of the master that this slide is based on. This property is read-only.
			 */
			masterObjectId?: string;
			/**
			 * Whether the slide is skipped in the presentation mode. Defaults to false.
			 */
			isSkipped?: boolean;
		};
		/**
		 * The properties of the page.
		 */
		pageProperties?: {
			/**
			 * The background fill of the page. If unset, the background fill is inherited from a parent page if it exists. If the page has no parent, then the background fill defaults to the corresponding fill in the Slides editor.
			 */
			pageBackgroundFill?: {
				/**
				 * Solid color fill.
				 */
				solidFill?: {
					/**
					 * The color value of the solid fill.
					 */
					color?: {
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
							| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
					/**
					 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
					 */
					alpha?: number;
				};
				/**
				 * Stretched picture fill.
				 */
				stretchedPictureFill?: {
					/**
					 * Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length.
					 */
					contentUrl?: string;
					/**
					 * The original size of the picture fill. This field is read-only.
					 */
					size?: {
						/**
						 * The width of the object.
						 */
						width?: {
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
						 * The height of the object.
						 */
						height?: {
							/**
							 * The units for magnitude.
							 */
							unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
							/**
							 * The magnitude.
							 */
							magnitude?: number;
						};
					};
				};
				/**
				 * The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
				 */
				propertyState?: '' | 'RENDERED' | 'NOT_RENDERED' | 'INHERIT';
			};
			/**
			 * The color scheme of the page. If unset, the color scheme is inherited from a parent page. If the page has no parent, the color scheme uses a default Slides color scheme, matching the defaults in the Slides editor. Only the concrete colors of the first 12 ThemeColorTypes are editable. In addition, only the color scheme on `Master` pages can be updated. To update the field, a color scheme containing mappings from all the first 12 ThemeColorTypes to their concrete colors must be provided. Colors for the remaining ThemeColorTypes will be ignored.
			 */
			colorScheme?: {
				/**
				 * The ThemeColorType and corresponding concrete color pairs.
				 *
				 * Items: A pair mapping a theme color type to the concrete color it represents.
				 */
				colors?: {
					/**
					 * The concrete color corresponding to the theme color type above.
					 */
					color?: {
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
					 * The type of the theme color.
					 */
					type?:
						| ''
						| 'THEME_COLOR_TYPE_UNSPECIFIED'
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
				}[];
			};
		};
		/**
		 * Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.
		 */
		revisionId?: string;
	}[];
	/**
	 * The size of pages in the presentation.
	 */
	pageSize?: {
		/**
		 * The width of the object.
		 */
		width?: {
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
		 * The height of the object.
		 */
		height?: {
			/**
			 * The units for magnitude.
			 */
			unit?: '' | 'UNIT_UNSPECIFIED' | 'EMU' | 'PT';
			/**
			 * The magnitude.
			 */
			magnitude?: number;
		};
	};
	/**
	 * The locale of the presentation, as an IETF BCP 47 language tag.
	 */
	locale?: string;
};

/**
 * Get a presentation
 * Retrieves a Google Slides presentation by ID.
 */
export async function getPresentation(
	this: EndpointFunctionThis,
	payload: {
		input: GetPresentationInput;
		connectionId: number;
	},
): Promise<GetPresentationOutput> {
	const response = await this.endpointCaller<GetPresentationOutput>(
		{
			appName: 'google-slides',
			appVersion: 1,
			endpointName: 'getPresentation',
		},
		payload,
	);
	return response.output;
}
