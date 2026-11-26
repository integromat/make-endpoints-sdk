// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type GetPageInput = {
	/**
	 * The ID or username of the page. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * Fields to return. If empty, all fields listed here are returned.
	 */
	fields?:
		| ''
		| 'id'
		| 'about'
		| 'app_id'
		| 'artists_we_like'
		| 'attire'
		| 'awards'
		| 'band_interests'
		| 'band_members'
		| 'birthday'
		| 'booking_agent'
		| 'built'
		| 'can_checkin'
		| 'can_post'
		| 'category'
		| 'category_list'
		| 'checkins'
		| 'company_overview'
		| 'connected_instagram_account'
		| 'contact_address'
		| 'copyright_whitelisted_ig_partners'
		| 'country_page_likes'
		| 'cover'
		| 'culinary_team'
		| 'description'
		| 'description_html'
		| 'directed_by'
		| 'display_subtext'
		| 'displayed_message_response_time'
		| 'emails'
		| 'engagement'
		| 'fan_count'
		| 'features'
		| 'food_styles'
		| 'founded'
		| 'general_info'
		| 'general_manager'
		| 'global_brand_page_name'
		| 'global_brand_root_id'
		| 'has_added_app'
		| 'has_whatsapp_number'
		| 'hometown'
		| 'hours'
		| 'impressum'
		| 'influences'
		| 'instagram_business_account'
		| 'is_always_open'
		| 'is_chain'
		| 'is_community_page'
		| 'is_eligible_for_branded_content'
		| 'is_messenger_bot_get_started_enabled'
		| 'is_messenger_platform_bot'
		| 'is_owned'
		| 'is_permanently_closed'
		| 'is_published'
		| 'is_unclaimed'
		| 'is_webhooks_subscribed'
		| 'link'
		| 'location'
		| 'members'
		| 'mission'
		| 'mpg'
		| 'name'
		| 'name_with_location_descriptor'
		| 'new_like_count'
		| 'offer_eligible'
		| 'overall_star_rating'
		| 'payment_options'
		| 'personal_info'
		| 'personal_interests'
		| 'pharma_safety_info'
		| 'phone'
		| 'place_type'
		| 'plot_outline'
		| 'press_contact'
		| 'price_range'
		| 'privacy_info_url'
		| 'produced_by'
		| 'products'
		| 'promotion_eligible'
		| 'promotion_ineligible_reason'
		| 'public_transit'
		| 'rating_count'
		| 'record_label'
		| 'release_date'
		| 'restaurant_services'
		| 'restaurant_specialties'
		| 'schedule'
		| 'screenplay_by'
		| 'season'
		| 'single_line_address'
		| 'starring'
		| 'store_code'
		| 'store_location_descriptor'
		| 'store_number'
		| 'studio'
		| 'talking_about_count'
		| 'unread_message_count'
		| 'unread_notif_count'
		| 'unseen_message_count'
		| 'username'
		| 'verification_status'
		| 'voip_info'
		| 'website'
		| 'were_here_count'
		| 'whatsapp_number'
		| 'written_by';
};

export type GetPageOutput = {
	/**
	 * The ID representing a Facebook Page.
	 */
	id?: string;
	/**
	 * Information about the Page. This value maps to the Description setting in the Edit Page Info user interface.
	 */
	about?: string;
	/**
	 * App ID for app-owned Pages and app Pages.
	 */
	app_id?: string;
	/**
	 * Artists the band likes. Applicable to Bands.
	 */
	artists_we_like?: string;
	/**
	 * Dress code of the business. Applicable to Restaurants or Nightlife.
	 */
	attire?: string;
	/**
	 * The awards information of the film. Applicable to Films.
	 */
	awards?: string;
	/**
	 * Band interests. Applicable to Bands.
	 */
	band_interests?: string;
	/**
	 * Members of the band. Applicable to Bands.
	 */
	band_members?: string;
	/**
	 * Birthday of this person. Applicable to Pages representing people.
	 */
	birthday?: string;
	/**
	 * Booking agent of the band. Applicable to Bands.
	 */
	booking_agent?: string;
	/**
	 * Year vehicle was built. Applicable to Vehicles.
	 */
	built?: string;
	/**
	 * Whether the Page has checkin functionality enabled.
	 */
	can_checkin?: boolean;
	/**
	 * Indicates whether the current app user can post on this Page.
	 */
	can_post?: boolean;
	/**
	 * The Page's category. e.g.
	 */
	category?: string;
	/**
	 * The page's sub-categories. The parent category is not included.
	 *
	 * Items: A page category.
	 */
	category_list?: {
		/**
		 * ID of the category.
		 */
		id?: string;
		/**
		 * Name of the category.
		 */
		name?: string;
	}[];
	/**
	 * Number of checkins at a place represented by a Page.
	 */
	checkins?: number;
	/**
	 * The company overview. Applicable to Companies.
	 */
	company_overview?: string;
	/**
	 * Instagram account connected to the page in the page settings.
	 */
	connected_instagram_account?: {
		/**
		 * ID of the Instagram account.
		 */
		id?: string;
	};
	/**
	 * The mailing or contact address of the page. Empty when it matches the physical address.
	 */
	contact_address?: {
		/**
		 * ID of the address.
		 */
		id?: string;
		/**
		 * First line of the street address.
		 */
		street1?: string;
		/**
		 * Second line of the street address.
		 */
		street2?: string;
		/**
		 * City.
		 */
		city?: string;
		/**
		 * State or region.
		 */
		region?: string;
		/**
		 * Postal code.
		 */
		postal_code?: string;
		/**
		 * Country.
		 */
		country?: string;
	};
	/**
	 * Instagram usernames that are not reported by copyright matching.
	 *
	 * Items: An Instagram username.
	 */
	copyright_whitelisted_ig_partners?: string[];
	/**
	 * If this is a Page in a Global Pages hierarchy, the number of people who are being directed to this Page.
	 */
	country_page_likes?: number;
	/**
	 * The page's cover photo.
	 */
	cover?: {
		/**
		 * ID of the cover photo object.
		 */
		id?: string;
		/**
		 * ID of the photo used as the cover.
		 */
		cover_id?: string;
		/**
		 * URL of the cover photo.
		 */
		source?: string;
		/**
		 * Horizontal offset of the cover photo, in percent.
		 */
		offset_x?: number;
		/**
		 * Vertical offset of the cover photo, in percent.
		 */
		offset_y?: number;
	};
	/**
	 * Culinary team of the business. Applicable to Restaurants or Nightlife.
	 */
	culinary_team?: string;
	/**
	 * The description of the Page. Note that this value is mapped to the Additional Information setting in the Edit Page Info user interface.
	 */
	description?: string;
	/**
	 * The description of the Page in raw HTML.
	 */
	description_html?: string;
	/**
	 * The director of the film. Applicable to Films.
	 */
	directed_by?: string;
	/**
	 * Subtext about the Page being viewed.
	 */
	display_subtext?: string;
	/**
	 * Page estimated message response time displayed to user.
	 */
	displayed_message_response_time?: string;
	/**
	 * Email addresses listed in the page's About section.
	 *
	 * Items: An email address.
	 */
	emails?: string[];
	/**
	 * Like count and social sentence of the page, as shown on the Like button.
	 */
	engagement?: {
		/**
		 * Number of likes.
		 */
		count?: number;
		/**
		 * Text describing who likes the page.
		 */
		social_sentence?: string;
	};
	/**
	 * The number of users who like the Page. For Global Pages this is the count for all Pages across the brand.
	 */
	fan_count?: number;
	/**
	 * Features of the vehicle. Applicable to Vehicles.
	 */
	features?: string;
	/**
	 * Food styles of the restaurant.
	 *
	 * Items: A food style.
	 */
	food_styles?: string[];
	/**
	 * When the company was founded. Applicable to Pages in the Company category.
	 */
	founded?: string;
	/**
	 * General information provided by the Page.
	 */
	general_info?: string;
	/**
	 * General manager of the business. Applicable to Restaurants or Nightlife.
	 */
	general_manager?: string;
	/**
	 * The name of the Page with country codes appended for Global Pages. Only visible to the Page admin.
	 */
	global_brand_page_name?: string;
	/**
	 * This brand's global Root ID.
	 */
	global_brand_root_id?: string;
	/**
	 * Indicates whether this Page has added the app making the query in a Page tab.
	 */
	has_added_app?: boolean;
	/**
	 * Indicates whether WhatsApp number connected to this page is a WhatsApp number.
	 */
	has_whatsapp_number?: boolean;
	/**
	 * Hometown of the band. Applicable to Bands.
	 */
	hometown?: string;
	/**
	 * Opening hours. Keys are in the `{day}_{number}_{status}` format, for example `mon_1_open`; values are times in the `HH:MM` format.
	 */
	hours?: Record<string, JSONValue>;
	/**
	 * Legal information about the Page publishers.
	 */
	impressum?: string;
	/**
	 * Influences on the band. Applicable to Bands.
	 */
	influences?: string;
	/**
	 * Instagram business account linked to the page.
	 */
	instagram_business_account?: {
		/**
		 * ID of the Instagram business account.
		 */
		id?: string;
	};
	/**
	 * Indicates whether this location is always open.
	 */
	is_always_open?: boolean;
	/**
	 * Indicates whether location is part of a chain.
	 */
	is_chain?: boolean;
	/**
	 * Indicates whether the Page is a community Page.
	 */
	is_community_page?: boolean;
	/**
	 * Indicates whether the page is eligible for the branded content tool.
	 */
	is_eligible_for_branded_content?: boolean;
	/**
	 * Indicates whether the page is a Messenger Platform Bot with Get Started button enabled.
	 */
	is_messenger_bot_get_started_enabled?: boolean;
	/**
	 * Indicates whether the page is a Messenger Platform Bot.
	 */
	is_messenger_platform_bot?: boolean;
	/**
	 * Indicates whether Page is owned.
	 */
	is_owned?: boolean;
	/**
	 * Whether the business corresponding to this Page is permanently closed.
	 */
	is_permanently_closed?: boolean;
	/**
	 * Indicates whether the Page is published and visible to non-admins.
	 */
	is_published?: boolean;
	/**
	 * Indicates whether the Page is unclaimed.
	 */
	is_unclaimed?: boolean;
	/**
	 * Indicates whether the application is subscribed for real time updates from this page.
	 */
	is_webhooks_subscribed?: boolean;
	/**
	 * The Page's Facebook URL.
	 */
	link?: string;
	/**
	 * Location of the place.
	 */
	location?: {
		/**
		 * Street address.
		 */
		street?: string;
		/**
		 * City.
		 */
		city?: string;
		/**
		 * Facebook ID of the city.
		 */
		city_id?: number;
		/**
		 * State.
		 */
		state?: string;
		/**
		 * Region.
		 */
		region?: string;
		/**
		 * Facebook ID of the region.
		 */
		region_id?: number;
		/**
		 * Country.
		 */
		country?: string;
		/**
		 * Country code.
		 */
		country_code?: string;
		/**
		 * Postal code.
		 */
		zip?: string;
		/**
		 * Latitude.
		 */
		latitude?: number;
		/**
		 * Longitude.
		 */
		longitude?: number;
		/**
		 * ID of the parent location page, for example a mall.
		 */
		located_in?: string;
		/**
		 * Name of the location.
		 */
		name?: string;
	};
	/**
	 * Members of this org. Applicable to Pages representing Team Orgs.
	 */
	members?: string;
	/**
	 * The company mission. Applicable to Companies.
	 */
	mission?: string;
	/**
	 * MPG of the vehicle. Applicable to Vehicles.
	 */
	mpg?: string;
	/**
	 * The name of the Page.
	 */
	name?: string;
	/**
	 * The name of the Page with its location and/or global brand descriptor. Only visible to a page admin.
	 */
	name_with_location_descriptor?: string;
	/**
	 * The number of people who have liked the Page, since the last login. Only visible to a Page admin.
	 */
	new_like_count?: number;
	/**
	 * Offer eligibility status. Only visible to a page admin.
	 */
	offer_eligible?: boolean;
	/**
	 * Overall page rating based on rating survey from users on a scale of 1-5. This value is normalized and is not guaranteed to be a strict average of user ratings.
	 */
	overall_star_rating?: number;
	/**
	 * Accepted payment options.
	 */
	payment_options?: {
		/**
		 * `1` if American Express is accepted, otherwise `0`.
		 */
		amex?: number;
		/**
		 * `1` if only cash is accepted, otherwise `0`.
		 */
		cash_only?: number;
		/**
		 * `1` if Discover is accepted, otherwise `0`.
		 */
		discover?: number;
		/**
		 * `1` if Mastercard is accepted, otherwise `0`.
		 */
		mastercard?: number;
		/**
		 * `1` if Visa is accepted, otherwise `0`.
		 */
		visa?: number;
	};
	/**
	 * Personal information. Applicable to Pages representing People.
	 */
	personal_info?: string;
	/**
	 * Personal interests. Applicable to Pages representing People.
	 */
	personal_interests?: string;
	/**
	 * Pharmacy safety information. Applicable to Pharmaceutical companies.
	 */
	pharma_safety_info?: string;
	/**
	 * Phone number provided by a Page.
	 */
	phone?: string;
	/**
	 * For places, the category of the place. Value can be CITY, COUNTRY, EVENT, GEO_ENTITY, PLACE, RESIDENCE, STATE_PROVINCE, or TEXT.
	 */
	place_type?: string;
	/**
	 * The plot outline of the film. Applicable to Films.
	 */
	plot_outline?: string;
	/**
	 * Press contact information of the band. Applicable to Bands.
	 */
	press_contact?: string;
	/**
	 * Price range of the business, such as a restaurant or salon. Values can be one of $, $$, $$$, $$$$, Not Applicable, or null if no value is set..
	 */
	price_range?: string;
	/**
	 * Privacy url in page info section.
	 */
	privacy_info_url?: string;
	/**
	 * The productor of the film. Applicable to Films.
	 */
	produced_by?: string;
	/**
	 * The products of this company. Applicable to Companies.
	 */
	products?: string;
	/**
	 * Boosted posts eligibility status. Only visible to a page admin.
	 */
	promotion_eligible?: boolean;
	/**
	 * Reason for which boosted posts are not eligible. Only visible to a page admin.
	 */
	promotion_ineligible_reason?: string;
	/**
	 * Public transit to the business. Applicable to Restaurants or Nightlife.
	 */
	public_transit?: string;
	/**
	 * Number of ratings for the Page (limited to ratings that are publicly accessible).
	 */
	rating_count?: number;
	/**
	 * Record label of the band. Applicable to Bands.
	 */
	record_label?: string;
	/**
	 * The film's release date. Applicable to Films.
	 */
	release_date?: string;
	/**
	 * Services of the restaurant.
	 */
	restaurant_services?: {
		/**
		 * `1` if catering is offered, otherwise `0`.
		 */
		catering?: number;
		/**
		 * `1` if delivery is offered, otherwise `0`.
		 */
		delivery?: number;
		/**
		 * `1` if it is good for groups, otherwise `0`.
		 */
		groups?: number;
		/**
		 * `1` if it is good for kids, otherwise `0`.
		 */
		kids?: number;
		/**
		 * `1` if there is outdoor seating, otherwise `0`.
		 */
		outdoor?: number;
		/**
		 * `1` if pickup is offered, otherwise `0`.
		 */
		pickup?: number;
		/**
		 * `1` if reservations are accepted, otherwise `0`.
		 */
		reserve?: number;
		/**
		 * `1` if takeout is offered, otherwise `0`.
		 */
		takeout?: number;
		/**
		 * `1` if there is waiter service, otherwise `0`.
		 */
		waiter?: number;
		/**
		 * `1` if walk-ins are welcome, otherwise `0`.
		 */
		walkins?: number;
	};
	/**
	 * Specialties of the restaurant.
	 */
	restaurant_specialties?: {
		/**
		 * `1` if breakfast is served, otherwise `0`.
		 */
		breakfast?: number;
		/**
		 * `1` if coffee is served, otherwise `0`.
		 */
		coffee?: number;
		/**
		 * `1` if dinner is served, otherwise `0`.
		 */
		dinner?: number;
		/**
		 * `1` if drinks are served, otherwise `0`.
		 */
		drinks?: number;
		/**
		 * `1` if lunch is served, otherwise `0`.
		 */
		lunch?: number;
	};
	/**
	 * The air schedule of the TV show. Applicable to TV Shows.
	 */
	schedule?: string;
	/**
	 * The screenwriter of the film. Applicable to Films.
	 */
	screenplay_by?: string;
	/**
	 * The season information of the TV Show. Applicable to TV Shows.
	 */
	season?: string;
	/**
	 * The Page address, if any, in a simple single line format.
	 */
	single_line_address?: string;
	/**
	 * The cast of the film. Applicable to Films.
	 */
	starring?: string;
	/**
	 * Unique store code for this location Page.
	 */
	store_code?: string;
	/**
	 * Location Page's store location descriptor.
	 */
	store_location_descriptor?: string;
	/**
	 * Unique store number for this location Page.
	 */
	store_number?: number;
	/**
	 * The studio for the film production. Applicable to Films.
	 */
	studio?: string;
	/**
	 * The number of people talking about this Page.
	 */
	talking_about_count?: number;
	/**
	 * Unread message count for the Page. Only visible to a page admin.
	 */
	unread_message_count?: number;
	/**
	 * Number of unread notifications. Only visible to a page admin.
	 */
	unread_notif_count?: number;
	/**
	 * Unseen message count for the Page. Only visible to a page admin.
	 */
	unseen_message_count?: number;
	/**
	 * The alias of the Page. For example, for www.facebook.com/platform the username is 'platform'.
	 */
	username?: string;
	/**
	 * Showing whether this Page is verified. Value can be blue_verified or gray_verified, which represents that Facebook has confirmed that a Page is the authentic presence of the public figure, celebrity, or global brand it represents, or not_verified.
	 */
	verification_status?: string;
	/**
	 * Messenger calling information of the page.
	 */
	voip_info?: {
		/**
		 * Whether the page has the mobile app.
		 */
		has_mobile_app?: boolean;
		/**
		 * Whether calling is permitted.
		 */
		has_permission?: boolean;
		/**
		 * Whether the page can be called.
		 */
		is_callable?: boolean;
		/**
		 * Whether the page can be called over WebRTC.
		 */
		is_callable_webrtc?: boolean;
		/**
		 * Whether push notifications can be sent.
		 */
		is_pushable?: boolean;
		/**
		 * Code of the reason the page can't be called.
		 */
		reason_code?: number;
		/**
		 * Description of the reason the page can't be called.
		 */
		reason_description?: string;
	};
	/**
	 * The URL of the Page's website.
	 */
	website?: string;
	/**
	 * The number of visits to this Page's location. If the Page setting Show map, check-ins and star ratings on the Page (under Page Settings > Page Info > Address) is disabled, then this value will also be disabled.
	 */
	were_here_count?: number;
	/**
	 * The Page's WhatsApp number.
	 */
	whatsapp_number?: string;
	/**
	 * The writer of the TV show. Applicable to TV Shows.
	 */
	written_by?: string;
};

/**
 * Get a page
 * Gets the details of a Facebook page.
 */
export async function getPage(
	this: EndpointFunctionThis,
	payload: {
		input: GetPageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetPageOutput>> {
	const response = await this.endpointCaller<GetPageOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'GetPage',
		},
		payload,
	);
	return response;
}
