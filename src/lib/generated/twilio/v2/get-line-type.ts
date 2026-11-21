// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetLineTypeInput = {
	/**
	 * The phone number to look up, in E.164 or national format. The default country code is +1 when this is a national number and `CountryCode` is omitted.
	 */
	PhoneNumber: string;
	/**
	 * Packages to return. Selected values are sent as a comma-separated `Fields` query parameter. Basic formatting is returned on every request. Null packages stay null unless their name is selected.
	 */
	Fields?:
		| ''
		| 'validation'
		| 'caller_name'
		| 'sim_swap'
		| 'call_forwarding'
		| 'line_status'
		| 'line_type_intelligence'
		| 'identity_match'
		| 'reassigned_number'
		| 'sms_pumping_risk'
		| 'phone_number_quality_score'
		| 'pre_fill';
	/**
	 * The ISO 3166-1 alpha-2 country code used when `PhoneNumber` is in national format.
	 */
	CountryCode?: string;
	/**
	 * The user's given name. Used only when `Fields` includes `identity_match`.
	 */
	FirstName?: string;
	/**
	 * The user's surname. Used only when `Fields` includes `identity_match`.
	 */
	LastName?: string;
	/**
	 * The first line of the user's address. Used only when `Fields` includes `identity_match`.
	 */
	AddressLine1?: string;
	/**
	 * The second line of the user's address. Used only when `Fields` includes `identity_match`.
	 */
	AddressLine2?: string;
	/**
	 * The user's city. Used only when `Fields` includes `identity_match`.
	 */
	City?: string;
	/**
	 * The user's state or region. Used only when `Fields` includes `identity_match`.
	 */
	State?: string;
	/**
	 * The user's postal or ZIP code. Used only when `Fields` includes `identity_match`.
	 */
	PostalCode?: string;
	/**
	 * The ISO country code of the user's address. Used only when `Fields` includes `identity_match`.
	 */
	AddressCountryCode?: string;
	/**
	 * The user's national ID. Used only when `Fields` includes `identity_match`. Non-KYC accounts receive null for this value in the response.
	 */
	NationalId?: string;
	/**
	 * The user's date of birth in `YYYYMMDD` format. Used only when `Fields` includes `identity_match`.
	 */
	DateOfBirth?: string;
	/**
	 * The date consent was obtained to reach the end user at this number, or a date they could still be reached there, in `YYYYMMDD` format. Used only when `Fields` includes `reassigned_number`.
	 */
	LastVerifiedDate?: string;
	/**
	 * The identifier of a Verify API verification. Used only when `Fields` includes `pre_fill`.
	 */
	VerificationSid?: string;
	/**
	 * Optional context for sub-accounts, tenant IDs, or sender IDs. It improves SMS pumping risk analysis.
	 */
	PartnerSubId?: string;
};

export type GetLineTypeOutput = {
	/**
	 * International dialing prefix of the phone number defined in the E.164 standard.
	 */
	calling_country_code?: string;
	/**
	 * The phone number's [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
	 */
	country_code?: string;
	/**
	 * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
	 */
	phone_number?: string;
	/**
	 * The phone number in [national format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).
	 */
	national_format?: string;
	/**
	 * Boolean which indicates if the phone number is in a valid range that can be freely assigned by a carrier to a user.
	 */
	valid?: boolean;
	/**
	 * Contains reasons why a phone number is invalid. Possible values: TOO_SHORT, TOO_LONG, INVALID_BUT_POSSIBLE, INVALID_COUNTRY_CODE, INVALID_LENGTH, NOT_A_NUMBER.
	 */
	validation_errors?:
		| ''
		| 'TOO_SHORT'
		| 'TOO_LONG'
		| 'INVALID_BUT_POSSIBLE'
		| 'INVALID_COUNTRY_CODE'
		| 'INVALID_LENGTH'
		| 'NOT_A_NUMBER';
	/**
	 * An object that contains caller name information based on [CNAM](https://support.twilio.com/hc/en-us/articles/360051670533-Getting-Started-with-CNAM-Caller-ID).
	 */
	caller_name?: {
		/**
		 * The caller name from the CNAM package. Null unless `Fields` includes `caller_name`.
		 */
		caller_name?: string;
		/**
		 * The caller type from the CNAM package. Null unless `Fields` includes `caller_name`.
		 */
		caller_type?: string;
		/**
		 * Error code for the caller name package. Null when that package succeeds.
		 */
		error_code?: number;
	};
	/**
	 * An object that contains information on the last date the subscriber identity module (SIM) was changed for a mobile phone number.
	 */
	sim_swap?: {
		/**
		 * When the SIM was last changed for this mobile number.
		 */
		last_sim_swap?: {
			/**
			 * The date of the last SIM swap.
			 */
			last_sim_swap_date?: string;
			/**
			 * The period Twilio checked for a SIM swap. The documented sample is an ISO 8601 duration such as `PT24H`.
			 */
			swapped_period?: string;
			/**
			 * Whether the SIM was swapped during that period.
			 */
			swapped_in_period?: boolean;
		};
		/**
		 * The carrier name reported with the SIM swap package.
		 */
		carrier_name?: string;
		/**
		 * The mobile country code reported with the SIM swap package.
		 */
		mobile_country_code?: string;
		/**
		 * The mobile network code reported with the SIM swap package.
		 */
		mobile_network_code?: string;
		/**
		 * Error code for the SIM swap package. Null when that package succeeds.
		 */
		error_code?: number;
	};
	/**
	 * An object that contains information on the unconditional call forwarding status of mobile phone number.
	 */
	call_forwarding?: {
		/**
		 * Whether unconditional call forwarding is enabled for this mobile number.
		 */
		call_forwarding_enabled?: boolean;
		/**
		 * Error code for the call forwarding package. Null when that package succeeds.
		 */
		error_code?: number;
	};
	/**
	 * An object that contains line type information including the carrier name, mobile country code, and mobile network code.
	 */
	line_type_intelligence?: {
		/**
		 * The mobile country code from the line type package.
		 */
		mobile_country_code?: string;
		/**
		 * The mobile network code from the line type package.
		 */
		mobile_network_code?: string;
		/**
		 * The carrier name from the line type package.
		 */
		carrier_name?: string;
		/**
		 * The line type from the line type package.
		 */
		type?: string;
		/**
		 * Error code for the line type package. Null when that package succeeds.
		 */
		error_code?: number;
	};
	/**
	 * An object that contains line status information for a mobile phone number.
	 */
	line_status?: {
		/**
		 * The line status for this mobile number.
		 */
		status?: string;
		/**
		 * Error code for the line status package. Null when that package succeeds.
		 */
		error_code?: number;
	};
	/**
	 * An object that contains identity match information. The result of comparing user-provided information including name, address, date of birth, national ID, against authoritative phone-based data sources
	 */
	identity_match?: {
		/**
		 * The match level for the submitted first name.
		 */
		first_name_match?: string;
		/**
		 * The match level for the submitted last name.
		 */
		last_name_match?: string;
		/**
		 * The match level for the submitted address lines.
		 */
		address_lines_match?: string;
		/**
		 * The match level for the submitted city.
		 */
		city_match?: string;
		/**
		 * The match level for the submitted state.
		 */
		state_match?: string;
		/**
		 * The match level for the submitted postal code.
		 */
		postal_code_match?: string;
		/**
		 * The match level for the submitted address country.
		 */
		address_country_match?: string;
		/**
		 * The match level for the submitted national ID.
		 */
		national_id_match?: string;
		/**
		 * The match level for the submitted date of birth.
		 */
		date_of_birth_match?: string;
		/**
		 * A summary score from 0 (no match) to 100 (exact match).
		 */
		summary_score?: number;
		/**
		 * Error code for the identity match package. Null when that package succeeds.
		 */
		error_code?: number;
		/**
		 * Error message for the identity match package. Null when that package succeeds.
		 */
		error_message?: string;
	};
	/**
	 * An object that contains reassigned number information. Reassigned Numbers will return a phone number's reassignment status given a phone number and date
	 */
	reassigned_number?: {
		/**
		 * The last verified date used for the reassigned number check.
		 */
		last_verified_date?: string;
		/**
		 * The reassignment status of the phone number.
		 */
		is_number_reassigned?: string;
		/**
		 * Error code for the reassigned number package. Null when that package succeeds.
		 */
		error_code?: string;
	};
	/**
	 * An object that contains information on if a phone number has been currently or previously blocked by Verify Fraud Guard for receiving malicious SMS pumping traffic as well as other signals associated with risky carriers and low conversion rates.
	 */
	sms_pumping_risk?: {
		/**
		 * The carrier risk category from the SMS pumping risk package.
		 */
		carrier_risk_category?: string;
		/**
		 * Whether Verify Fraud Guard has blocked this number for SMS pumping.
		 */
		number_blocked?: boolean;
		/**
		 * The date Verify Fraud Guard blocked this number.
		 */
		number_blocked_date?: string;
		/**
		 * Whether this number was blocked for SMS pumping in the last 3 months.
		 */
		number_blocked_last_3_months?: boolean;
		/**
		 * The SMS pumping risk score.
		 */
		sms_pumping_risk_score?: number;
		/**
		 * Error code for the SMS pumping risk package. Null when that package succeeds.
		 */
		error_code?: number;
	};
	/**
	 * An object that contains information of a mobile phone number quality score. Quality score will return a risk score about the phone number.
	 */
	phone_number_quality_score?: Record<string, JSONValue>;
	/**
	 * An object that contains pre fill information. pre_fill will return PII information associated with the phone number like first name, last name, address line, country code, state and postal code.
	 */
	pre_fill?: Record<string, JSONValue>;
	/**
	 * The absolute URL of the resource.
	 */
	url?: string;
};

/**
 * Get line type
 * Looks up a phone number with Lookup v2.
 */
export async function getLineType(
	this: EndpointFunctionThis,
	payload: {
		input: GetLineTypeInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetLineTypeOutput> {
	const response = await this.endpointCaller<GetLineTypeOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'getLineType',
		},
		payload,
	);
	return response.output;
}
