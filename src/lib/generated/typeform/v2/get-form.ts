// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetFormInput = {
	/**
	 * Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.
	 */
	form_id: string;
};

export type GetFormOutput = {
	/**
	 * Unique ID of the form.
	 */
	id?: string;
	/**
	 * Time of the form's creation, in ISO 8601 UTC format.
	 */
	created_at?: string;
	/**
	 * Time of the last update, in ISO 8601 UTC format.
	 */
	last_updated_at?: string;
	/**
	 * Type of form.
	 */
	type?: string;
	/**
	 * Language of the form. Default is `en`.
	 */
	language?:
		| ''
		| 'en'
		| 'es'
		| 'ca'
		| 'fr'
		| 'de'
		| 'ru'
		| 'it'
		| 'da'
		| 'pt'
		| 'ch'
		| 'zh'
		| 'nl'
		| 'no'
		| 'uk'
		| 'ja'
		| 'ko'
		| 'hr'
		| 'fi'
		| 'sv'
		| 'pl'
		| 'el'
		| 'hu'
		| 'tr'
		| 'cs'
		| 'et'
		| 'di';
	/**
	 * Fields to use in the form and their properties, validations, and attachments.
	 *
	 * Items: A form field.
	 */
	fields?: {
		/**
		 * Unique ID of the field. Include the original ID when updating a form so the field and its responses are preserved.
		 */
		id?: string;
		/**
		 * Readable name you can use to reference the field.
		 */
		ref?: string;
		/**
		 * The type of field. Required when a field is provided.
		 */
		type?:
			| ''
			| 'calendly'
			| 'checkbox'
			| 'contact_info'
			| 'date'
			| 'dropdown'
			| 'email'
			| 'file_upload'
			| 'google_calendar'
			| 'group'
			| 'legal'
			| 'long_text'
			| 'matrix'
			| 'multi_format'
			| 'multiple_choice'
			| 'nps'
			| 'number'
			| 'opinion_scale'
			| 'payment'
			| 'phone_number'
			| 'picture_choice'
			| 'ranking'
			| 'rating'
			| 'short_text'
			| 'signature'
			| 'statement'
			| 'website'
			| 'yes_no';
		/**
		 * Field properties, validations helpers, and type-specific settings.
		 */
		properties?: {
			/**
			 * Question or instruction to display for the field.
			 */
			description?: string;
			/**
			 * Answer choices. Available for `ranking`, `dropdown`, `multiple_choice`, `picture_choice`, and `checkbox` types. For `checkbox`, the array must contain exactly one item.
			 *
			 * Items: An answer choice.
			 */
			choices?: {
				/**
				 * Readable name for the answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`. Not available for `dropdown`.
				 */
				ref?: string;
				/**
				 * Text for the answer choice. Maximum 255 characters.
				 */
				label?: string;
				/**
				 * Image for the answer choice. Available only for `picture_choice` types.
				 */
				attachment?: {
					/**
					 * Type of attachment. Must be `image` for picture choices.
					 */
					type?: '' | 'image';
					/**
					 * Typeform URL for the image to use for the answer choice.
					 */
					href?: string;
					/**
					 * Optional attachment properties.
					 */
					properties?: {
						/**
						 * Alt text for the choice image.
						 */
						description?: string;
					};
				};
			}[];
			/**
			 * Fields that belong in a question group or matrix. `payment` and `group` blocks are not allowed inside a question group. Available for the `group` and `matrix` types.
			 *
			 * Items: A nested field inside a group or matrix.
			 */
			fields?: {
				/**
				 * Unique ID of the field. Include the original ID when updating a form so the field and its responses are preserved.
				 */
				id?: string;
				/**
				 * Readable name you can use to reference the field.
				 */
				ref?: string;
				/**
				 * The type of field. Required when a field is provided.
				 */
				type?:
					| ''
					| 'calendly'
					| 'checkbox'
					| 'contact_info'
					| 'date'
					| 'dropdown'
					| 'email'
					| 'file_upload'
					| 'google_calendar'
					| 'group'
					| 'legal'
					| 'long_text'
					| 'matrix'
					| 'multi_format'
					| 'multiple_choice'
					| 'nps'
					| 'number'
					| 'opinion_scale'
					| 'payment'
					| 'phone_number'
					| 'picture_choice'
					| 'ranking'
					| 'rating'
					| 'short_text'
					| 'signature'
					| 'statement'
					| 'website'
					| 'yes_no';
				/**
				 * Field properties, validations helpers, and type-specific settings.
				 */
				properties?: {
					/**
					 * Question or instruction to display for the field.
					 */
					description?: string;
					/**
					 * Answer choices. Available for `ranking`, `dropdown`, `multiple_choice`, `picture_choice`, and `checkbox` types. For `checkbox`, the array must contain exactly one item.
					 *
					 * Items: An answer choice.
					 */
					choices?: {
						/**
						 * Readable name for the answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`. Not available for `dropdown`.
						 */
						ref?: string;
						/**
						 * Text for the answer choice. Maximum 255 characters.
						 */
						label?: string;
						/**
						 * Image for the answer choice. Available only for `picture_choice` types.
						 */
						attachment?: {
							/**
							 * Type of attachment. Must be `image` for picture choices.
							 */
							type?: '' | 'image';
							/**
							 * Typeform URL for the image to use for the answer choice.
							 */
							href?: string;
							/**
							 * Optional attachment properties.
							 */
							properties?: {
								/**
								 * Alt text for the choice image.
								 */
								description?: string;
							};
						};
					}[];
					/**
					 * True to allow respondents to select more than one answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`.
					 */
					allow_multiple_selection?: boolean;
					/**
					 * True to present answer choices in a new random order for each respondent. Available for `ranking`, `multiple_choice`, `picture_choice`, and `dropdown`.
					 */
					randomize?: boolean;
					/**
					 * True to include an Other option. Available for `ranking`, `multiple_choice`, and `picture_choice`.
					 */
					allow_other_choice?: boolean;
					/**
					 * True to list answer choices vertically. Available for `ranking` and `multiple_choice`.
					 */
					vertical_alignment?: boolean;
					/**
					 * True to use larger-sized images for answer choices. Available for `picture_choice`.
					 */
					supersized?: boolean;
					/**
					 * True to show text labels and images as answer choices. Available for `picture_choice`. Default is true.
					 */
					show_labels?: boolean;
					/**
					 * True to list dropdown choices alphabetically. Available for `dropdown`.
					 */
					alphabetical_order?: boolean;
					/**
					 * True to hide quotation marks around a statement. Available for `statement`.
					 */
					hide_marks?: boolean;
					/**
					 * Text to display on the button. Available for `group`, `payment`, and `statement`. Default is `Continue`.
					 */
					button_text?: string;
					/**
					 * Number of steps in the scale's range. Minimum is 5 and maximum is 11. Available for `opinion_scale` and `rating`.
					 */
					steps?: number;
					/**
					 * Shape to display on the scale's steps. Available for `opinion_scale` and `rating`. Default is `star`.
					 */
					shape?:
						| ''
						| 'cat'
						| 'circle'
						| 'cloud'
						| 'crown'
						| 'dog'
						| 'droplet'
						| 'flag'
						| 'heart'
						| 'lightbulb'
						| 'pencil'
						| 'skull'
						| 'star'
						| 'thunderbolt'
						| 'tick'
						| 'trophy'
						| 'up'
						| 'user';
					/**
					 * Labels that help respondents understand the scale's range. Available for `opinion_scale` and `rating`.
					 */
					labels?: {
						/**
						 * Text of the left-aligned label for the scale.
						 */
						left?: string;
						/**
						 * Text of the center-aligned label for the scale.
						 */
						center?: string;
						/**
						 * Text of the right-aligned label for the scale.
						 */
						right?: string;
					};
					/**
					 * True if range numbering should start at 1. Available for `opinion_scale`.
					 */
					start_at_one?: boolean;
					/**
					 * Date format for answers. Available for `date`. Default is `DDMMYYYY`.
					 */
					structure?: '' | 'MMDDYYYY' | 'DDMMYYYY' | 'YYYYMMDD';
					/**
					 * Character between month, day, and year. Available for `date`. Default is `/`.
					 */
					separator?: '' | '/' | '-' | '.';
					/**
					 * Currency of the payment. Available for `payment`. Default is `EUR`.
					 */
					currency?:
						| ''
						| 'AUD'
						| 'BRL'
						| 'CAD'
						| 'CHF'
						| 'DKK'
						| 'EUR'
						| 'GBP'
						| 'MXN'
						| 'NOK'
						| 'SEK'
						| 'USD';
					/**
					 * Enables collection of the customer's email so Stripe can send a payment receipt. Available for `payment`.
					 */
					email_receipts?: boolean;
					/**
					 * Enabled payment methods allowed for payment (for example Google Pay or Apple Pay). Available for `payment`.
					 *
					 * Items: An enabled payment method name.
					 */
					additional_payment_methods?: string[];
					/**
					 * Price of the item. Available for `payment`.
					 */
					price?: {
						/**
						 * Specifies that the value is a variable.
						 */
						type?: '' | 'variable';
						/**
						 * Variable name to use for the price.
						 */
						value?: '' | 'price';
					};
					/**
					 * True to display a button. Available for `group` and `payment`.
					 */
					show_button?: boolean;
					/**
					 * Default 2-letter ISO 3166-1 country code. Available for `phone_number`. Default is `us`.
					 */
					default_country_code?: string;
					/**
					 * Regular expression pattern to validate the answer. Available for `long_text`.
					 */
					regexp?: string;
					/**
					 * List of allowed answer types for the field. Available for `multi_format`.
					 *
					 * Items: An allowed answer type.
					 */
					allowed_answer_types?: string[];
					/**
					 * Weekly availability for booking, with one entry per day plus a required `timezone`. Available for `google_calendar`.
					 */
					availability?: {
						/**
						 * Available time slots on Monday.
						 *
						 * Items: A bookable time slot.
						 */
						monday?: {
							/**
							 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							start?: string;
							/**
							 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							end?: string;
						}[];
						/**
						 * Available time slots on Tuesday.
						 *
						 * Items: A bookable time slot.
						 */
						tuesday?: {
							/**
							 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							start?: string;
							/**
							 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							end?: string;
						}[];
						/**
						 * Available time slots on Wednesday.
						 *
						 * Items: A bookable time slot.
						 */
						wednesday?: {
							/**
							 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							start?: string;
							/**
							 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							end?: string;
						}[];
						/**
						 * Available time slots on Thursday.
						 *
						 * Items: A bookable time slot.
						 */
						thursday?: {
							/**
							 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							start?: string;
							/**
							 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							end?: string;
						}[];
						/**
						 * Available time slots on Friday.
						 *
						 * Items: A bookable time slot.
						 */
						friday?: {
							/**
							 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							start?: string;
							/**
							 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							end?: string;
						}[];
						/**
						 * Available time slots on Saturday.
						 *
						 * Items: A bookable time slot.
						 */
						saturday?: {
							/**
							 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							start?: string;
							/**
							 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							end?: string;
						}[];
						/**
						 * Available time slots on Sunday.
						 *
						 * Items: A bookable time slot.
						 */
						sunday?: {
							/**
							 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							start?: string;
							/**
							 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
							 */
							end?: string;
						}[];
						/**
						 * IANA time zone name (for example `Europe/Madrid`) used to interpret all slot times. Required when availability is provided.
						 */
						timezone?: string;
					};
					/**
					 * Optional caps on how many slots can be booked. Available for `google_calendar`.
					 */
					booking_limits?: {
						/**
						 * Maximum number of bookings allowed per day.
						 */
						max_daily_bookings?: number;
						/**
						 * Buffer time, in minutes, to keep free between consecutive bookings.
						 */
						buffer_duration?: number;
					};
					/**
					 * Identifier of the Google Calendar to book against. Available for `google_calendar`.
					 */
					calendar_id?: string;
					/**
					 * Event details written to the booked calendar invite. Available for `google_calendar`.
					 */
					event?: {
						/**
						 * Description of the calendar event created when a respondent books a slot.
						 */
						description?: string;
						/**
						 * Duration of the calendar event.
						 */
						duration?: {
							/**
							 * Numeric length of the event, expressed in `unit`. Must be a positive integer.
							 */
							time?: number;
							/**
							 * Unit of time for `time`.
							 */
							unit?: '' | 'hours' | 'minutes';
						};
					};
					/**
					 * Optional reminder sent to respondents ahead of a booked slot. Available for `google_calendar`.
					 */
					reminders?: {
						/**
						 * Numeric amount of time before the slot at which to send the reminder, expressed in `unit`.
						 */
						amount?: number;
						/**
						 * Unit of time for `amount`.
						 */
						unit?: '' | 'minute' | 'hour' | 'day' | 'week';
					};
					/**
					 * Constraints on when respondents can book a slot. Available for `google_calendar`.
					 */
					scheduling_window?: {
						/**
						 * Earliest date or datetime at which a respondent can book a slot.
						 */
						start_at?: string;
						/**
						 * Latest date or datetime at which a respondent can book a slot.
						 */
						end_at?: string;
						/**
						 * Maximum number of days in advance a respondent can book a slot.
						 */
						max_advanced_booking_days?: number;
						/**
						 * Minimum number of hours between booking and the start of the slot.
						 */
						min_lead_time_hours?: number;
					};
				};
				/**
				 * Validation rules for the field.
				 */
				validations?: {
					/**
					 * True if respondents must provide an answer. Available for `matrix`, `ranking`, `checkbox`, `date`, `dropdown`, `email`, `file_upload`, `legal`, `long_text`, `multiple_choice`, `number`, `opinion_scale`, `payment`, `picture_choice`, `rating`, `short_text`, `signature`, `website`, `phone_number`, and `yes_no`.
					 */
					required?: boolean;
					/**
					 * Maximum number of characters allowed in the answer. Available for `long_text` and `short_text`.
					 */
					max_length?: number;
					/**
					 * Minimum value allowed in the answer. Must be a positive integer. Available for `number`.
					 */
					min_value?: number;
					/**
					 * Maximum value allowed in the answer. Must be a positive integer. Available for `number`.
					 */
					max_value?: number;
					/**
					 * Minimum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.
					 */
					min_selection?: number;
					/**
					 * Maximum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.
					 */
					max_selection?: number;
				};
				/**
				 * Image or video displayed with the field.
				 */
				attachment?: {
					/**
					 * Type of attachment.
					 */
					type?: '' | 'image' | 'video';
					/**
					 * URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.
					 */
					href?: string;
					/**
					 * Optional scale for videos. Available only for `video` type. Default is `0.6`.
					 */
					scale?: '' | 0.4 | 0.6 | 0.8 | 1;
					/**
					 * Optional attachment properties.
					 */
					properties?: {
						/**
						 * Alt text that describes the image for people with visual impairments.
						 */
						description?: string;
					};
				};
				/**
				 * Position of the field attachment.
				 */
				layout?: {
					/**
					 * Type of layout.
					 */
					type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
					/**
					 * Position of media for split and float layouts.
					 */
					placement?: '' | 'left' | 'right';
					/**
					 * Image or video used by this layout.
					 */
					attachment?: {
						/**
						 * Type of attachment.
						 */
						type?: '' | 'image' | 'video';
						/**
						 * URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.
						 */
						href?: string;
						/**
						 * Optional scale for videos. Available only for `video` type. Default is `0.6`.
						 */
						scale?: '' | 0.4 | 0.6 | 0.8 | 1;
						/**
						 * Optional attachment properties.
						 */
						properties?: {
							/**
							 * Alt text that describes the image for people with visual impairments.
							 */
							description?: string;
						};
					};
					/**
					 * Layout-specific overrides per viewport (small / large).
					 */
					viewport_overrides?: {
						/**
						 * Overrides for small viewports.
						 */
						small?: {
							/**
							 * Layout type for the small viewport.
							 */
							type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
							/**
							 * Media position for split and float layouts on the small viewport.
							 */
							placement?: '' | 'left' | 'right';
						};
						/**
						 * Overrides for large viewports.
						 */
						large?: {
							/**
							 * Layout type for the large viewport.
							 */
							type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
							/**
							 * Media position for split and float layouts on the large viewport.
							 */
							placement?: '' | 'left' | 'right';
						};
					};
				};
				/**
				 * Video question to display with the field.
				 *
				 * Items: A media item displayed with the field.
				 */
				media?: {
					/**
					 * Readable name you can use to reference the media item.
					 */
					ref?: string;
					/**
					 * True if the media item should be displayed. Default is true.
					 */
					enabled?: boolean;
					/**
					 * URL for the media item.
					 */
					href?: string;
					/**
					 * Type of media.
					 */
					type?: '' | 'video';
					/**
					 * Optional media properties.
					 */
					properties?: {
						/**
						 * True to fit the media to the available space.
						 */
						fit?: boolean;
						/**
						 * Delay in seconds before the media item is displayed.
						 */
						interaction_delay?: number;
					};
				}[];
			}[];
			/**
			 * True to allow respondents to select more than one answer choice. Available for `ranking`, `multiple_choice`, and `picture_choice`.
			 */
			allow_multiple_selection?: boolean;
			/**
			 * True to present answer choices in a new random order for each respondent. Available for `ranking`, `multiple_choice`, `picture_choice`, and `dropdown`.
			 */
			randomize?: boolean;
			/**
			 * True to include an Other option. Available for `ranking`, `multiple_choice`, and `picture_choice`.
			 */
			allow_other_choice?: boolean;
			/**
			 * True to list answer choices vertically. Available for `ranking` and `multiple_choice`.
			 */
			vertical_alignment?: boolean;
			/**
			 * True to use larger-sized images for answer choices. Available for `picture_choice`.
			 */
			supersized?: boolean;
			/**
			 * True to show text labels and images as answer choices. Available for `picture_choice`. Default is true.
			 */
			show_labels?: boolean;
			/**
			 * True to list dropdown choices alphabetically. Available for `dropdown`.
			 */
			alphabetical_order?: boolean;
			/**
			 * True to hide quotation marks around a statement. Available for `statement`.
			 */
			hide_marks?: boolean;
			/**
			 * Text to display on the button. Available for `group`, `payment`, and `statement`. Default is `Continue`.
			 */
			button_text?: string;
			/**
			 * Number of steps in the scale's range. Minimum is 5 and maximum is 11. Available for `opinion_scale` and `rating`.
			 */
			steps?: number;
			/**
			 * Shape to display on the scale's steps. Available for `opinion_scale` and `rating`. Default is `star`.
			 */
			shape?:
				| ''
				| 'cat'
				| 'circle'
				| 'cloud'
				| 'crown'
				| 'dog'
				| 'droplet'
				| 'flag'
				| 'heart'
				| 'lightbulb'
				| 'pencil'
				| 'skull'
				| 'star'
				| 'thunderbolt'
				| 'tick'
				| 'trophy'
				| 'up'
				| 'user';
			/**
			 * Labels that help respondents understand the scale's range. Available for `opinion_scale` and `rating`.
			 */
			labels?: {
				/**
				 * Text of the left-aligned label for the scale.
				 */
				left?: string;
				/**
				 * Text of the center-aligned label for the scale.
				 */
				center?: string;
				/**
				 * Text of the right-aligned label for the scale.
				 */
				right?: string;
			};
			/**
			 * True if range numbering should start at 1. Available for `opinion_scale`.
			 */
			start_at_one?: boolean;
			/**
			 * Date format for answers. Available for `date`. Default is `DDMMYYYY`.
			 */
			structure?: '' | 'MMDDYYYY' | 'DDMMYYYY' | 'YYYYMMDD';
			/**
			 * Character between month, day, and year. Available for `date`. Default is `/`.
			 */
			separator?: '' | '/' | '-' | '.';
			/**
			 * Currency of the payment. Available for `payment`. Default is `EUR`.
			 */
			currency?:
				| ''
				| 'AUD'
				| 'BRL'
				| 'CAD'
				| 'CHF'
				| 'DKK'
				| 'EUR'
				| 'GBP'
				| 'MXN'
				| 'NOK'
				| 'SEK'
				| 'USD';
			/**
			 * Enables collection of the customer's email so Stripe can send a payment receipt. Available for `payment`.
			 */
			email_receipts?: boolean;
			/**
			 * Enabled payment methods allowed for payment (for example Google Pay or Apple Pay). Available for `payment`.
			 *
			 * Items: An enabled payment method name.
			 */
			additional_payment_methods?: string[];
			/**
			 * Price of the item. Available for `payment`.
			 */
			price?: {
				/**
				 * Specifies that the value is a variable.
				 */
				type?: '' | 'variable';
				/**
				 * Variable name to use for the price.
				 */
				value?: '' | 'price';
			};
			/**
			 * True to display a button. Available for `group` and `payment`.
			 */
			show_button?: boolean;
			/**
			 * Default 2-letter ISO 3166-1 country code. Available for `phone_number`. Default is `us`.
			 */
			default_country_code?: string;
			/**
			 * Regular expression pattern to validate the answer. Available for `long_text`.
			 */
			regexp?: string;
			/**
			 * List of allowed answer types for the field. Available for `multi_format`.
			 *
			 * Items: An allowed answer type.
			 */
			allowed_answer_types?: string[];
			/**
			 * Weekly availability for booking, with one entry per day plus a required `timezone`. Available for `google_calendar`.
			 */
			availability?: {
				/**
				 * Available time slots on Monday.
				 *
				 * Items: A bookable time slot.
				 */
				monday?: {
					/**
					 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					start?: string;
					/**
					 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					end?: string;
				}[];
				/**
				 * Available time slots on Tuesday.
				 *
				 * Items: A bookable time slot.
				 */
				tuesday?: {
					/**
					 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					start?: string;
					/**
					 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					end?: string;
				}[];
				/**
				 * Available time slots on Wednesday.
				 *
				 * Items: A bookable time slot.
				 */
				wednesday?: {
					/**
					 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					start?: string;
					/**
					 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					end?: string;
				}[];
				/**
				 * Available time slots on Thursday.
				 *
				 * Items: A bookable time slot.
				 */
				thursday?: {
					/**
					 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					start?: string;
					/**
					 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					end?: string;
				}[];
				/**
				 * Available time slots on Friday.
				 *
				 * Items: A bookable time slot.
				 */
				friday?: {
					/**
					 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					start?: string;
					/**
					 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					end?: string;
				}[];
				/**
				 * Available time slots on Saturday.
				 *
				 * Items: A bookable time slot.
				 */
				saturday?: {
					/**
					 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					start?: string;
					/**
					 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					end?: string;
				}[];
				/**
				 * Available time slots on Sunday.
				 *
				 * Items: A bookable time slot.
				 */
				sunday?: {
					/**
					 * Start time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					start?: string;
					/**
					 * End time of the slot, formatted as `HH:MM` or `HH:MM:SS`. Required when a slot is provided.
					 */
					end?: string;
				}[];
				/**
				 * IANA time zone name (for example `Europe/Madrid`) used to interpret all slot times. Required when availability is provided.
				 */
				timezone?: string;
			};
			/**
			 * Optional caps on how many slots can be booked. Available for `google_calendar`.
			 */
			booking_limits?: {
				/**
				 * Maximum number of bookings allowed per day.
				 */
				max_daily_bookings?: number;
				/**
				 * Buffer time, in minutes, to keep free between consecutive bookings.
				 */
				buffer_duration?: number;
			};
			/**
			 * Identifier of the Google Calendar to book against. Available for `google_calendar`.
			 */
			calendar_id?: string;
			/**
			 * Event details written to the booked calendar invite. Available for `google_calendar`.
			 */
			event?: {
				/**
				 * Description of the calendar event created when a respondent books a slot.
				 */
				description?: string;
				/**
				 * Duration of the calendar event.
				 */
				duration?: {
					/**
					 * Numeric length of the event, expressed in `unit`. Must be a positive integer.
					 */
					time?: number;
					/**
					 * Unit of time for `time`.
					 */
					unit?: '' | 'hours' | 'minutes';
				};
			};
			/**
			 * Optional reminder sent to respondents ahead of a booked slot. Available for `google_calendar`.
			 */
			reminders?: {
				/**
				 * Numeric amount of time before the slot at which to send the reminder, expressed in `unit`.
				 */
				amount?: number;
				/**
				 * Unit of time for `amount`.
				 */
				unit?: '' | 'minute' | 'hour' | 'day' | 'week';
			};
			/**
			 * Constraints on when respondents can book a slot. Available for `google_calendar`.
			 */
			scheduling_window?: {
				/**
				 * Earliest date or datetime at which a respondent can book a slot.
				 */
				start_at?: string;
				/**
				 * Latest date or datetime at which a respondent can book a slot.
				 */
				end_at?: string;
				/**
				 * Maximum number of days in advance a respondent can book a slot.
				 */
				max_advanced_booking_days?: number;
				/**
				 * Minimum number of hours between booking and the start of the slot.
				 */
				min_lead_time_hours?: number;
			};
		};
		/**
		 * Validation rules for the field.
		 */
		validations?: {
			/**
			 * True if respondents must provide an answer. Available for `matrix`, `ranking`, `checkbox`, `date`, `dropdown`, `email`, `file_upload`, `legal`, `long_text`, `multiple_choice`, `number`, `opinion_scale`, `payment`, `picture_choice`, `rating`, `short_text`, `signature`, `website`, `phone_number`, and `yes_no`.
			 */
			required?: boolean;
			/**
			 * Maximum number of characters allowed in the answer. Available for `long_text` and `short_text`.
			 */
			max_length?: number;
			/**
			 * Minimum value allowed in the answer. Must be a positive integer. Available for `number`.
			 */
			min_value?: number;
			/**
			 * Maximum value allowed in the answer. Must be a positive integer. Available for `number`.
			 */
			max_value?: number;
			/**
			 * Minimum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.
			 */
			min_selection?: number;
			/**
			 * Maximum selections allowed in the answer. Must be a positive integer. Available for `ranking`, `multiple_choice`, and `picture_choice`.
			 */
			max_selection?: number;
		};
		/**
		 * Image or video displayed with the field.
		 */
		attachment?: {
			/**
			 * Type of attachment.
			 */
			type?: '' | 'image' | 'video';
			/**
			 * URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.
			 */
			href?: string;
			/**
			 * Optional scale for videos. Available only for `video` type. Default is `0.6`.
			 */
			scale?: '' | 0.4 | 0.6 | 0.8 | 1;
			/**
			 * Optional attachment properties.
			 */
			properties?: {
				/**
				 * Alt text that describes the image for people with visual impairments.
				 */
				description?: string;
			};
		};
		/**
		 * Position of the field attachment.
		 */
		layout?: {
			/**
			 * Type of layout.
			 */
			type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
			/**
			 * Position of media for split and float layouts.
			 */
			placement?: '' | 'left' | 'right';
			/**
			 * Image or video used by this layout.
			 */
			attachment?: {
				/**
				 * Type of attachment.
				 */
				type?: '' | 'image' | 'video';
				/**
				 * URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.
				 */
				href?: string;
				/**
				 * Optional scale for videos. Available only for `video` type. Default is `0.6`.
				 */
				scale?: '' | 0.4 | 0.6 | 0.8 | 1;
				/**
				 * Optional attachment properties.
				 */
				properties?: {
					/**
					 * Alt text that describes the image for people with visual impairments.
					 */
					description?: string;
				};
			};
			/**
			 * Layout-specific overrides per viewport (small / large).
			 */
			viewport_overrides?: {
				/**
				 * Overrides for small viewports.
				 */
				small?: {
					/**
					 * Layout type for the small viewport.
					 */
					type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
					/**
					 * Media position for split and float layouts on the small viewport.
					 */
					placement?: '' | 'left' | 'right';
				};
				/**
				 * Overrides for large viewports.
				 */
				large?: {
					/**
					 * Layout type for the large viewport.
					 */
					type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
					/**
					 * Media position for split and float layouts on the large viewport.
					 */
					placement?: '' | 'left' | 'right';
				};
			};
		};
		/**
		 * Video question to display with the field.
		 *
		 * Items: A media item displayed with the field.
		 */
		media?: {
			/**
			 * Readable name you can use to reference the media item.
			 */
			ref?: string;
			/**
			 * True if the media item should be displayed. Default is true.
			 */
			enabled?: boolean;
			/**
			 * URL for the media item.
			 */
			href?: string;
			/**
			 * Type of media.
			 */
			type?: '' | 'video';
			/**
			 * Optional media properties.
			 */
			properties?: {
				/**
				 * True to fit the media to the available space.
				 */
				fit?: boolean;
				/**
				 * Delay in seconds before the media item is displayed.
				 */
				interaction_delay?: number;
			};
		}[];
	}[];
	/**
	 * Hidden Fields to use in the form.
	 *
	 * Items: Name of a Hidden Field.
	 */
	hidden?: string[];
	/**
	 * Running totals and enrichment variables used in the form. Open object of variable names to numeric or text values (commonly `score` and `price`).
	 */
	variables?: Record<string, JSONValue>;
	/**
	 * Settings and properties for the form's welcome screen.
	 *
	 * Items: A welcome screen.
	 */
	welcome_screens?: {
		/**
		 * Readable name you can use to reference the welcome screen.
		 */
		ref?: string;
		/**
		 * Settings for the welcome screen.
		 */
		properties?: {
			/**
			 * Description of the welcome screen.
			 */
			description?: string;
			/**
			 * True to display a Start button on the welcome screen.
			 */
			show_button?: boolean;
			/**
			 * Text to display on the Start button.
			 */
			button_text?: string;
		};
		/**
		 * Image or video displayed on the welcome screen.
		 */
		attachment?: {
			/**
			 * Type of attachment.
			 */
			type?: '' | 'image' | 'video';
			/**
			 * URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.
			 */
			href?: string;
			/**
			 * Optional scale for videos. Available only for `video` type. Default is `0.6`.
			 */
			scale?: '' | 0.4 | 0.6 | 0.8 | 1;
			/**
			 * Optional attachment properties.
			 */
			properties?: {
				/**
				 * Alt text that describes the image for people with visual impairments.
				 */
				description?: string;
			};
		};
		/**
		 * Position of the welcome screen attachment.
		 */
		layout?: {
			/**
			 * Type of layout.
			 */
			type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
			/**
			 * Position of media for split and float layouts.
			 */
			placement?: '' | 'left' | 'right';
			/**
			 * Image or video used by this layout.
			 */
			attachment?: {
				/**
				 * Type of attachment.
				 */
				type?: '' | 'image' | 'video';
				/**
				 * URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.
				 */
				href?: string;
				/**
				 * Optional scale for videos. Available only for `video` type. Default is `0.6`.
				 */
				scale?: '' | 0.4 | 0.6 | 0.8 | 1;
				/**
				 * Optional attachment properties.
				 */
				properties?: {
					/**
					 * Alt text that describes the image for people with visual impairments.
					 */
					description?: string;
				};
			};
			/**
			 * Layout-specific overrides per viewport (small / large).
			 */
			viewport_overrides?: {
				/**
				 * Overrides for small viewports.
				 */
				small?: {
					/**
					 * Layout type for the small viewport.
					 */
					type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
					/**
					 * Media position for split and float layouts on the small viewport.
					 */
					placement?: '' | 'left' | 'right';
				};
				/**
				 * Overrides for large viewports.
				 */
				large?: {
					/**
					 * Layout type for the large viewport.
					 */
					type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
					/**
					 * Media position for split and float layouts on the large viewport.
					 */
					placement?: '' | 'left' | 'right';
				};
			};
		};
	}[];
	/**
	 * Settings and properties for the form's thank you screen.
	 *
	 * Items: A thank you screen.
	 */
	thankyou_screens?: {
		/**
		 * Readable name you can use to reference the thank you screen.
		 */
		ref?: string;
		/**
		 * The type of thank you screen.
		 */
		type?: '' | 'thankyou_screen' | 'url_redirect';
		/**
		 * Settings for the thank you screen.
		 */
		properties?: {
			/**
			 * True to display a button on the thank you screen.
			 */
			show_button?: boolean;
			/**
			 * Text to display on the button.
			 */
			button_text?: string;
			/**
			 * What happens when respondents click the button. Premium feature.
			 */
			button_mode?: '' | 'reload' | 'default_redirect' | 'redirect';
			/**
			 * URL where the typeform should redirect after submission, if you specified `redirect` for `button_mode` or are using the `url_redirect` type.
			 */
			redirect_url?: string;
			/**
			 * True to display social media sharing icons on the thank you screen.
			 */
			share_icons?: boolean;
		};
		/**
		 * Image or video displayed on the thank you screen.
		 */
		attachment?: {
			/**
			 * Type of attachment.
			 */
			type?: '' | 'image' | 'video';
			/**
			 * URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.
			 */
			href?: string;
			/**
			 * Optional scale for videos. Available only for `video` type. Default is `0.6`.
			 */
			scale?: '' | 0.4 | 0.6 | 0.8 | 1;
			/**
			 * Optional attachment properties.
			 */
			properties?: {
				/**
				 * Alt text that describes the image for people with visual impairments.
				 */
				description?: string;
			};
		};
		/**
		 * Position of the thank you screen attachment.
		 */
		layout?: {
			/**
			 * Type of layout.
			 */
			type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
			/**
			 * Position of media for split and float layouts.
			 */
			placement?: '' | 'left' | 'right';
			/**
			 * Image or video used by this layout.
			 */
			attachment?: {
				/**
				 * Type of attachment.
				 */
				type?: '' | 'image' | 'video';
				/**
				 * URL for the image or video. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`. For videos, use a [Vimeo](https://vimeo.com), [YouTube](https://www.youtube.com), or [Pexels](https://www.pexels.com) URL.
				 */
				href?: string;
				/**
				 * Optional scale for videos. Available only for `video` type. Default is `0.6`.
				 */
				scale?: '' | 0.4 | 0.6 | 0.8 | 1;
				/**
				 * Optional attachment properties.
				 */
				properties?: {
					/**
					 * Alt text that describes the image for people with visual impairments.
					 */
					description?: string;
				};
			};
			/**
			 * Layout-specific overrides per viewport (small / large).
			 */
			viewport_overrides?: {
				/**
				 * Overrides for small viewports.
				 */
				small?: {
					/**
					 * Layout type for the small viewport.
					 */
					type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
					/**
					 * Media position for split and float layouts on the small viewport.
					 */
					placement?: '' | 'left' | 'right';
				};
				/**
				 * Overrides for large viewports.
				 */
				large?: {
					/**
					 * Layout type for the large viewport.
					 */
					type?: '' | 'split' | 'wallpaper' | 'float' | 'stack';
					/**
					 * Media position for split and float layouts on the large viewport.
					 */
					placement?: '' | 'left' | 'right';
				};
			};
		};
	}[];
	/**
	 * Optional consent screen configuration for data collection compliance.
	 */
	consent_screen?: {
		/**
		 * Email address where consent information should be sent.
		 */
		email?: string;
		/**
		 * Message to display or send regarding the consent.
		 */
		message?: string;
	};
	/**
	 * Logic Jump objects to use in the form. When referring to fields, those fields must already exist on the form.
	 *
	 * Items: A Logic Jump definition.
	 */
	logic?: {
		/**
		 * Specifies whether the Logic Jump is based on a question field or Hidden Field.
		 */
		type?: '' | 'field' | 'hidden';
		/**
		 * Reference to the field that triggers the Logic Jump.
		 */
		ref?: string;
		/**
		 * Objects that define the Logic Jump's behavior. Required when a logic item is provided.
		 *
		 * Items: A Logic Jump action.
		 */
		actions?: {
			/**
			 * Behavior the Logic Jump will take. Required when an action is provided.
			 */
			action?: '' | 'jump' | 'add' | 'subtract' | 'multiply' | 'divide' | 'set';
			/**
			 * Properties that further specify how the Logic Jump will behave. Required when an action is provided.
			 */
			details?: {
				/**
				 * Where the Logic Jump leads — to another field, a thank you screen, or an outcome.
				 */
				to?: {
					/**
					 * Logic Jump `to` option you are using.
					 */
					type?: '' | 'field' | 'thankyou' | 'outcome';
					/**
					 * The `ref` value for the field, Hidden Field, or thank you screen the Logic Jump leads to.
					 */
					value?: string;
				};
				/**
				 * Keeps a running total for variables.
				 */
				target?: {
					/**
					 * Specifies that the value is a variable.
					 */
					type?: '' | 'variable';
					/**
					 * Variable name to use in the calculation.
					 */
					value?: string;
				};
				/**
				 * Value to use in the calculation for the variables.
				 */
				value?: {
					/**
					 * Which type of value is used: a numeric constant, a variable name, or an `evaluation` to determine an outcome.
					 */
					type?: '' | 'constant' | 'variable' | 'evaluation';
					/**
					 * Value used in the variable calculation. May be a number, variable name, or evaluation depending on `type`.
					 */
					value?: string;
				};
			};
			/**
			 * Conditions for executing the Logic Jump (the IF statement). Required when an action is provided.
			 */
			condition?: {
				/**
				 * Operator for the condition.
				 */
				op?:
					| ''
					| 'begins_with'
					| 'ends_with'
					| 'contains'
					| 'not_contains'
					| 'lower_than'
					| 'lower_equal_than'
					| 'greater_than'
					| 'greater_equal_than'
					| 'is'
					| 'is_not'
					| 'equal'
					| 'not_equal'
					| 'always'
					| 'on'
					| 'not_on'
					| 'earlier_than'
					| 'earlier_than_or_on'
					| 'later_than'
					| 'later_than_or_on';
				/**
				 * Objects that define the field type and value to evaluate with the operator. Required when a condition is provided.
				 *
				 * Items: A value the condition evaluates.
				 */
				vars?: {
					/**
					 * Type of value the condition object refers to.
					 */
					type?: '' | 'field' | 'hidden' | 'variable' | 'constant' | 'choice';
					/**
					 * Value to check for in the `type` field. May be a field ref, hidden field name, variable name, choice, number, or boolean depending on `type`.
					 */
					value?: string;
				}[];
			};
		}[];
	}[];
	/**
	 * Theme to use for the form. If omitted on update, Typeform applies a new copy of the default theme.
	 */
	theme?: {
		/**
		 * URL of the theme, for example `https://api.typeform.com/themes/Fs24as`.
		 */
		href?: string;
	};
	/**
	 * Workspace that contains the form. If omitted, Typeform saves the form in the default workspace.
	 */
	workspace?: {
		/**
		 * URL of the workspace, for example `https://api.typeform.com/workspaces/Aw33bz`.
		 */
		href?: string;
	};
	/**
	 * Form settings and metadata, including language, public availability, progress bar, and search-engine indexing.
	 */
	settings?: {
		/**
		 * Language to use for the form.
		 */
		language?:
			| ''
			| 'en'
			| 'es'
			| 'ca'
			| 'fr'
			| 'de'
			| 'ru'
			| 'it'
			| 'da'
			| 'pt'
			| 'ch'
			| 'zh'
			| 'nl'
			| 'no'
			| 'uk'
			| 'ja'
			| 'ko'
			| 'hr'
			| 'fi'
			| 'sv'
			| 'pl'
			| 'el'
			| 'hu'
			| 'tr'
			| 'cs'
			| 'et'
			| 'di';
		/**
		 * True if the form is public. Otherwise false (the form is private). Default is true.
		 */
		is_public?: boolean;
		/**
		 * True to enable saving partial form responses on the client side. Default is true.
		 */
		autosave_progress?: boolean;
		/**
		 * Basis for the progress bar. `proportion` shows the number of questions answered; `percentage` shows the percentage answered. Default is `proportion`.
		 */
		progress_bar?: '' | 'percentage' | 'proportion';
		/**
		 * True to display the progress bar. Default is true.
		 */
		show_progress_bar?: boolean;
		/**
		 * True to display Typeform branding. Hiding branding is available for Premium accounts. Default is true.
		 */
		show_typeform_branding?: boolean;
		/**
		 * True to display estimated time to complete on welcome screens. Mutually exclusive with `show_number_of_submissions`. Default is true.
		 */
		show_time_to_complete?: boolean;
		/**
		 * True to display the number of submissions on welcome screens. Mutually exclusive with `show_time_to_complete`.
		 */
		show_number_of_submissions?: boolean;
		/**
		 * True to request cookie consent through a banner.
		 */
		show_cookie_consent?: boolean;
		/**
		 * True to display the question number on each block. Default is true.
		 */
		show_question_number?: boolean;
		/**
		 * True to display key hint letters on Multiple Choice, Picture Choice, Legal, and Yes/No blocks. Default is true.
		 */
		show_key_hint_on_choices?: boolean;
		/**
		 * True to hide the navigation arrows in the bottom-right corner of the form.
		 */
		hide_navigation?: boolean;
		/**
		 * Search-engine metadata for the typeform.
		 */
		meta?: {
			/**
			 * True to allow search engines to index your typeform. Default is true.
			 */
			allow_indexing?: boolean;
			/**
			 * Description for search engines to display for your typeform.
			 */
			description?: string;
			/**
			 * Image for search engines to display for your typeform.
			 */
			image?: {
				/**
				 * URL of the image for search engines.
				 */
				href?: string;
			};
		};
		/**
		 * URL where the typeform should redirect upon submission.
		 */
		redirect_after_submit_url?: string;
		/**
		 * Google Analytics tracking ID to use for the form.
		 */
		google_analytics?: string;
		/**
		 * Facebook Pixel tracking ID to use for the form.
		 */
		facebook_pixel?: string;
		/**
		 * Google Tag Manager ID to use for the form.
		 */
		google_tag_manager?: string;
		/**
		 * The mode of the form. If not specified, the form is in Universal mode.
		 */
		mode?: '' | 'knowledge_quiz';
		/**
		 * How feedback is shown to respondents. `knowledge_quiz_inline` shows correct answers after each question in Knowledge Quiz mode.
		 */
		feedback_mode?: '' | 'knowledge_quiz_inline';
		/**
		 * Block references indicating where each partial submit point is located.
		 *
		 * Items: A partial submit point.
		 */
		milestones?: {
			/**
			 * The partial submit point is positioned after the question with this `field_ref`.
			 */
			field_ref?: string;
			/**
			 * Informative. Cannot be set through the API.
			 */
			status?: '' | 'active' | 'inactive';
			/**
			 * Informative. Cannot be set through the API.
			 */
			reason?: '' | 'wrong_position' | 'incompatible_feature';
		}[];
		/**
		 * Controls data enrichment in the renderer. See [Data enrichment with Typeform](https://www.typeform.com/developers/create/).
		 */
		enrichment_in_renderer?: {
			/**
			 * True to enable enrichment in the renderer, false to disable it.
			 */
			toggle?: boolean;
			/**
			 * Informative. Cannot be set through the API. If false, enrichment in the renderer is disabled.
			 */
			active?: boolean;
		};
		/**
		 * Configuration for signed-document email notifications (signature block).
		 */
		email_consent_notifications_config?: {
			/**
			 * Whether a copy of the signed document is BCC'd to `recipient_emails`. When `recipient_emails` is empty or absent, the copy is sent to the account owner. Setting this to false always resets `recipient_emails`. Default is true. Required when this object is provided.
			 */
			send_email_copy?: boolean;
			/**
			 * Email addresses that receive a BCC copy of the signed document. Only meaningful when `send_email_copy` is true. Maximum 10 addresses; duplicates are not allowed.
			 *
			 * Items: An email address that receives a BCC copy of the signed document.
			 */
			recipient_emails?: string[];
		};
		/**
		 * True to enable captcha on the typeform. See [Secure your forms with Google reCAPTCHA protection](https://www.typeform.com/help/).
		 */
		captcha?: boolean;
		/**
		 * Enable and set up duplicate response prevention. See [Prevent duplicate responses](https://www.typeform.com/help/).
		 */
		duplicate_prevention?: {
			/**
			 * `cookie`: duplicates may be submitted if cookies are cleared or the device changes. `cookie_ip`: prevent duplicates using cookies and IP. `url_param`: identify duplicates by a hidden-field URL parameter (Growth Custom plan).
			 */
			type?: '' | 'cookie' | 'cookie_ip' | 'url_param';
			/**
			 * Name of the hidden field whose value identifies the respondent. Required when `type` is `url_param`, and must match a name declared in the form's `hidden` fields.
			 */
			url_param?: string;
			/**
			 * Number of responses per respondent in the given period.
			 */
			responses_limit?: number;
			/**
			 * Time period for `responses_limit`.
			 */
			period?: '' | 'day' | 'week' | 'month' | 'year';
		};
	};
	/**
	 * Conversation UI settings for the form.
	 */
	cui_settings?: {
		/**
		 * URL for the image to use as conversation avatar. Images must already exist in your account — use the image's Typeform URL, such as `https://images.typeform.com/images/kbn8tc98AHb`.
		 */
		avatar?: string;
		/**
		 * True to disable typing emulation (the delay between messages). Typing emulation is enabled by default.
		 */
		is_typing_emulation_disabled?: boolean;
		/**
		 * The pace at which messages appear in a conversation while typing emulation is enabled.
		 */
		typing_emulation_speed?: '' | 'slow' | 'medium' | 'fast';
	};
	/**
	 * URL for the typeform resource.
	 */
	self?: {
		/**
		 * API URL for this form.
		 */
		href?: string;
	};
	/**
	 * Related URLs for the form.
	 */
	_links?: {
		/**
		 * URL for the actual form.
		 */
		display?: string;
		/**
		 * URL for the responses public API.
		 */
		responses?: string;
	};
};

/**
 * Get a form
 * Retrieves a form by ID.
 */
export async function getForm(
	this: EndpointFunctionThis,
	payload: {
		input: GetFormInput;
		connectionId: number;
	},
): Promise<GetFormOutput> {
	const response = await this.endpointCaller<GetFormOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'getForm',
		},
		payload,
	);
	return response.output;
}
