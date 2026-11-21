// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdatePageDetailsInput = {
	/**
	 * The ID of the page to update. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * Short description of the page. Shown as the description setting in the page's edit page info section.
	 */
	about?: string;
	/**
	 * Long description of the page. Shown as the additional information setting in the page's edit page info section.
	 */
	description?: string;
	/**
	 * Overview of the company.
	 */
	company_overview?: string;
	/**
	 * The company's mission.
	 */
	mission?: string;
	/**
	 * General information about the page.
	 */
	general_info?: string;
	/**
	 * Legal notice (impressum) of the page. Required by law for businesses in some countries.
	 */
	impressum?: string;
	/**
	 * Phone number of the page.
	 */
	phone?: string;
	/**
	 * Email addresses of the page.
	 *
	 * Items: An email address.
	 */
	emails?: string[];
	/**
	 * URL of the page's website.
	 */
	website?: string;
	/**
	 * IDs of the page categories.
	 *
	 * Items: The ID of a page category.
	 */
	category_list?: string[];
	/**
	 * Location of the business.
	 */
	location?: {
		/**
		 * Street address.
		 */
		street?: string;
		/**
		 * City name.
		 */
		city?: string;
		/**
		 * Facebook ID of the city.
		 */
		city_id?: string;
		/**
		 * State or region.
		 */
		state?: string;
		/**
		 * Country name.
		 */
		country?: string;
		/**
		 * Postal code.
		 */
		zip?: string;
		/**
		 * Latitude of the location.
		 */
		latitude?: number;
		/**
		 * Longitude of the location.
		 */
		longitude?: number;
	};
	/**
	 * Whether to ignore coordinate warnings when updating the page location.
	 */
	ignore_coordinate_warnings?: boolean;
	/**
	 * Description of the store location, for example a mall or neighborhood name.
	 */
	store_location_descriptor?: string;
	/**
	 * Contact (mailing) address of the page.
	 */
	contact_address?: {
		/**
		 * First line of the street address.
		 */
		street1?: string;
		/**
		 * Second line of the street address.
		 */
		street2?: string;
		/**
		 * Facebook ID of the city.
		 */
		city_id?: string;
		/**
		 * Postal code.
		 */
		zip?: string;
	};
	/**
	 * Opening hours. Each item is one opening or closing time. Each day can have up to 2 time ranges. If the business is open 24/7, use `is_always_open` instead.
	 *
	 * Items: An opening or closing time.
	 */
	hours?: {
		/**
		 * Key in the `{day}_{number}_{status}` format: `{day}` is the first 3 letters of the weekday (`mon`–`sun`), `{number}` is `1` or `2`, `{status}` is `open` or `close`. For example `mon_1_open`.
		 */
		key: string;
		/**
		 * Time in the 24-hour `HH:MM` format, for example `09:00`. A day open 24 hours uses `00:00` to `24:00`.
		 */
		value: string;
	}[];
	/**
	 * Whether the business is always open.
	 */
	is_always_open?: boolean;
	/**
	 * Whether the business is permanently closed.
	 */
	is_permanently_closed?: boolean;
	/**
	 * Temporary operating status of the business.
	 */
	temporary_status?:
		| ''
		| 'DIFFERENTLY_OPEN'
		| 'TEMPORARILY_CLOSED'
		| 'OPERATING_AS_USUAL'
		| 'NO_DATA';
	/**
	 * Services currently offered by the business. Intended for use with `temporary_status` set to `DIFFERENTLY_OPEN`.
	 */
	differently_open_offerings?: {
		/**
		 * Whether online services are offered.
		 */
		ONLINE_SERVICES?: boolean;
		/**
		 * Whether delivery is offered.
		 */
		DELIVERY?: boolean;
		/**
		 * Whether pickup is offered.
		 */
		PICKUP?: boolean;
		/**
		 * Whether other services are offered.
		 */
		OTHER?: boolean;
	};
	/**
	 * Pickup option types available at the business location.
	 */
	pickup_options?: '' | 'CURBSIDE' | 'IN_STORE' | 'OTHER';
	/**
	 * URLs of web pages with delivery and pickup options. Facebook removes duplicate and invalid URLs. An empty list is not sent, so this endpoint cannot clear the field.
	 *
	 * Items: URL of a delivery or pickup option page.
	 */
	delivery_and_pickup_option_info?: string[];
	/**
	 * Public transit information for the business location.
	 */
	public_transit?: string;
	/**
	 * Payment options accepted by the business.
	 */
	payment_options?: {
		/**
		 * Whether only cash is accepted.
		 */
		cash_only?: boolean;
		/**
		 * Whether Visa is accepted.
		 */
		visa?: boolean;
		/**
		 * Whether American Express is accepted.
		 */
		amex?: boolean;
		/**
		 * Whether Mastercard is accepted.
		 */
		mastercard?: boolean;
		/**
		 * Whether Discover is accepted.
		 */
		discover?: boolean;
		/**
		 * Whether credit cards are accepted.
		 */
		credit_cards?: boolean;
	};
	/**
	 * Price range of the business, for example `$`, `$$`, `$$$`, `$$$$`, or `Unspecified`.
	 */
	price_range?: string;
	/**
	 * Dress code of the business.
	 */
	attire?: '' | 'Unspecified' | 'Casual' | 'Dressy';
	/**
	 * Food styles served by the restaurant.
	 */
	food_styles?:
		| ''
		| 'Afghani'
		| 'American (New)'
		| 'American (Traditional)'
		| 'Asian fusion'
		| 'Barbeque'
		| 'Brazilian'
		| 'Breakfast'
		| 'British'
		| 'Brunch'
		| 'Buffets'
		| 'Burgers'
		| 'Burmese'
		| 'Cajun/Creole'
		| 'Caribbean'
		| 'Chinese'
		| 'Creperies'
		| 'Cuban'
		| 'Delis'
		| 'Diners'
		| 'Ethiopian'
		| 'Fast food'
		| 'Filipino'
		| 'Fondue'
		| 'Food stands'
		| 'French'
		| 'German'
		| 'Greek and Mediterranean'
		| 'Hawaiian'
		| 'Himalayan/Nepalese'
		| 'Hot dogs'
		| 'Indian/Pakistani'
		| 'Irish'
		| 'Italian'
		| 'Japanese'
		| 'Korean'
		| 'Latin American'
		| 'Mexican'
		| 'Middle Eastern'
		| 'Moroccan'
		| 'Pizza'
		| 'Russian'
		| 'Sandwiches'
		| 'Seafood'
		| 'Singaporean'
		| 'Soul food'
		| 'Southern'
		| 'Spanish/Basque'
		| 'Steakhouses'
		| 'Sushi bars'
		| 'Taiwanese'
		| 'Tapas bars'
		| 'Tex-Mex'
		| 'Thai'
		| 'Turkish'
		| 'Vegan'
		| 'Vegetarian'
		| 'Vietnamese';
	/**
	 * Services offered by the restaurant.
	 */
	restaurant_services?: {
		/**
		 * Whether reservations are accepted.
		 */
		reserve?: boolean;
		/**
		 * Whether walk-ins are welcome.
		 */
		walkins?: boolean;
		/**
		 * Whether the restaurant is good for groups.
		 */
		groups?: boolean;
		/**
		 * Whether the restaurant is good for kids.
		 */
		kids?: boolean;
		/**
		 * Whether takeout is offered.
		 */
		takeout?: boolean;
		/**
		 * Whether delivery is offered.
		 */
		delivery?: boolean;
		/**
		 * Whether catering is offered.
		 */
		catering?: boolean;
		/**
		 * Whether there is waiter service.
		 */
		waiter?: boolean;
		/**
		 * Whether there is outdoor seating.
		 */
		outdoor?: boolean;
	};
	/**
	 * Meals the restaurant specializes in.
	 */
	restaurant_specialties?: {
		/**
		 * Whether breakfast is served.
		 */
		breakfast?: boolean;
		/**
		 * Whether lunch is served.
		 */
		lunch?: boolean;
		/**
		 * Whether dinner is served.
		 */
		dinner?: boolean;
		/**
		 * Whether coffee is served.
		 */
		coffee?: boolean;
		/**
		 * Whether drinks are served.
		 */
		drinks?: boolean;
	};
	/**
	 * Culinary team of the restaurant.
	 */
	culinary_team?: string;
	/**
	 * General manager of the business.
	 */
	general_manager?: string;
	/**
	 * Director, for film pages.
	 */
	directed_by?: string;
	/**
	 * Plot outline, for film or TV show pages.
	 */
	plot_outline?: string;
	/**
	 * Estimated message response time shown to people on the page.
	 */
	displayed_message_response_time?: string;
	/**
	 * Whether the page is published (visible to the public).
	 */
	is_published?: boolean;
	/**
	 * ID of a photo already uploaded to the page to use as the cover photo. Requires the EDIT_PROFILE task on the page.
	 */
	cover?: string;
	/**
	 * Horizontal offset of the cover photo, in percent. Default is `50`.
	 */
	offset_x?: number;
	/**
	 * Vertical offset of the cover photo, in percent. Default is `50`.
	 */
	offset_y?: number;
	/**
	 * Horizontal focus point of the cover photo.
	 */
	focus_x?: number;
	/**
	 * Vertical focus point of the cover photo.
	 */
	focus_y?: number;
	/**
	 * Horizontal zoom scale of the cover photo.
	 */
	zoom_scale_x?: number;
	/**
	 * Vertical zoom scale of the cover photo.
	 */
	zoom_scale_y?: number;
	/**
	 * Whether to skip creating a feed story for the new cover photo. Default is `false`.
	 */
	no_feed_story?: boolean;
	/**
	 * Whether to skip sending a notification for the new cover photo. Default is `false`.
	 */
	no_notification?: boolean;
	/**
	 * Whether to re-scrape the website associated with the page.
	 */
	scrape?: boolean;
};

export type UpdatePageDetailsOutput = {
	/**
	 * Whether the operation succeeded.
	 */
	success?: boolean;
};

/**
 * Update page details
 * Updates the details of a Facebook page, such as about, contact info, location, and opening hours.
 */
export async function updatePageDetails(
	this: EndpointFunctionThis,
	payload: {
		input: UpdatePageDetailsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdatePageDetailsOutput> {
	const response = await this.endpointCaller<UpdatePageDetailsOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'UpdatePageDetails',
		},
		payload,
	);
	return response.output;
}
