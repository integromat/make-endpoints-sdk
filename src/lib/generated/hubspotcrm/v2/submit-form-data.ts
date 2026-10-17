// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SubmitFormDataInput = {
	/**
	 * The HubSpot account (hub) ID that owns the form.
	 */
	portalId: string;
	/**
	 * The unique ID of the HubSpot form to submit.
	 */
	formGuid: string;
	/**
	 * The form field values to submit. Add no more than 1,000 fields.
	 */
	fields: {
		/**
		 * The type of CRM object that contains the property, for example `0-1` for contacts or `0-2` for companies.
		 */
		objectTypeId: string;
		/**
		 * The internal name of the form field or CRM property.
		 */
		name: string;
		/**
		 * The value to submit for the field.
		 */
		value: string;
	}[];
	/**
	 * The submission time as a millisecond timestamp. It cannot be older than one month.
	 */
	submittedAt?: string;
	/**
	 * Context about the visitor and page where the form was submitted.
	 */
	context?: {
		/**
		 * The visitor's `hubspotutk` cookie value used to associate the submission with tracking data.
		 */
		hutk?: string;
		/**
		 * The visitor's IP address.
		 */
		ipAddress?: string;
		/**
		 * The name or title of the page where the form was submitted.
		 */
		pageName?: string;
		/**
		 * The URI of the page where the form was submitted.
		 */
		pageUri?: string;
		/**
		 * The ID of the HubSpot page where the form was submitted.
		 */
		pageId?: string;
		/**
		 * The Salesforce campaign ID to associate with the submission.
		 */
		sfdcCampaignId?: string;
		/**
		 * The GoToWebinar webinar key to associate with the submission.
		 */
		goToWebinarWebinarKey?: string;
	};
	/**
	 * Consent details required by the form's data privacy configuration.
	 */
	legalConsentOptions?: {
		/**
		 * Explicit consent to process data and receive specified communications.
		 */
		consent?: {
			/**
			 * Whether the visitor consents to the processing of their personal data.
			 */
			consentToProcess: boolean;
			/**
			 * The notice text shown when the visitor gave consent to data processing.
			 */
			text: string;
			/**
			 * Consent choices for individual communication subscription types.
			 */
			communications: {
				/**
				 * Whether the visitor consents to this communication subscription type.
				 */
				value: boolean;
				/**
				 * The ID of the communication subscription type.
				 */
				subscriptionTypeId: number;
				/**
				 * The notice text shown for this communication consent choice.
				 */
				text: string;
			}[];
		};
		/**
		 * Legitimate-interest details for processing and communication.
		 */
		legitimateInterest?: {
			/**
			 * Confirms legitimate interest. This value must be `true`.
			 */
			value: boolean;
			/**
			 * The ID of the communication subscription type covered by legitimate interest.
			 */
			subscriptionTypeId: number;
			/**
			 * Whether the legitimate-interest relationship is with a customer or a lead.
			 */
			legalBasis: 'CUSTOMER' | 'LEAD';
			/**
			 * The legitimate-interest notice shown to the visitor.
			 */
			text: string;
		};
	};
};

export type SubmitFormDataOutput = {
	/**
	 * The configured redirect URI when the form redirects after submission.
	 */
	redirectUri?: string;
	/**
	 * The configured HTML thank-you message when the form displays an inline message.
	 */
	inlineMessage?: string;
};

/**
 * Submit form data
 * Submits data to a HubSpot marketing form, creating or updating the associated contact as HubSpot's form-processing rules dictate.
 */
export async function submitFormData(
	this: EndpointFunctionThis,
	payload: {
		input: SubmitFormDataInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SubmitFormDataOutput> {
	const response = await this.endpointCaller<SubmitFormDataOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'submitFormData',
		},
		payload,
	);
	return response.output;
}
