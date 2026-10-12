// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateFormInput = {
	/**
	 * Questions to add to the form.
	 */
	questions?: {
		/**
		 * The question control type.
		 */
		type:
			| 'control_head'
			| 'control_text'
			| 'control_textbox'
			| 'control_textarea'
			| 'control_dropdown'
			| 'control_radio'
			| 'control_checkbox'
			| 'control_image'
			| 'control_fileupload'
			| 'control_button'
			| 'control_fullname'
			| 'control_email'
			| 'control_address'
			| 'control_phone'
			| 'control_datetime'
			| 'control_time'
			| 'control_birthdate'
			| 'control_number'
			| 'control_captcha'
			| 'control_rating'
			| 'control_scale'
			| 'control_spinner'
			| 'control_matrix'
			| 'control_collapse'
			| 'control_pagebreak'
			| 'control_hidden'
			| 'control_slider'
			| 'control_signature'
			| 'control_widget';
		/**
		 * Question label text shown on the form.
		 */
		text?: string;
		/**
		 * Machine-readable field name (slug) for the question.
		 */
		name?: string;
		/**
		 * Position of the question on the form.
		 */
		order?: number;
		/**
		 * Choices for Dropdown, Radio, or Checkbox questions.
		 *
		 * Items: One choice for a Dropdown, Radio, or Checkbox question.
		 */
		options?: string[];
		/**
		 * Whether an answer is mandatory. Applies to Dropdown, Radio, and Checkbox questions only.
		 */
		required?: boolean;
	}[];
	/**
	 * Height of the form's iframe, in pixels.
	 */
	height?: number;
	/**
	 * Email notifications to configure for the form.
	 */
	emails?: {
		/**
		 * Kind of email notification.
		 */
		type: 'email' | 'notification' | 'autoresponder';
		/**
		 * Sender address or name.
		 */
		from?: string;
		/**
		 * Recipient address.
		 */
		to?: string;
		/**
		 * Email subject line.
		 */
		subject?: string;
		/**
		 * Whether the email body is HTML.
		 */
		html: 0 | 1;
		/**
		 * Email body content.
		 */
		body?: string;
	}[];
};

export type CreateFormOutput = {
	/**
	 * Jotform API response code (200 on success).
	 */
	responseCode?: number;
	/**
	 * Response status message (for example `success`).
	 */
	message?: string;
	/**
	 * The newly created form.
	 */
	content?: {
		/**
		 * ID of the created form.
		 */
		id?: string;
		/**
		 * Jotform username that owns the form.
		 */
		username?: string;
		/**
		 * Height of the form, in pixels.
		 */
		height?: string;
		/**
		 * Status of the form.
		 */
		status?: string;
		/**
		 * When the form was created.
		 */
		created_at?: string;
		/**
		 * When the form was last updated.
		 */
		updated_at?: string;
		/**
		 * When the form last received a submission.
		 */
		last_submission?: string;
		/**
		 * Number of unread submissions.
		 */
		new?: string;
		/**
		 * Total number of submissions.
		 */
		count?: string;
		/**
		 * Type of the form.
		 */
		type?: string;
		/**
		 * Whether the form is marked as a favorite.
		 */
		favorite?: number;
		/**
		 * Whether the form is archived.
		 */
		archived?: number;
		/**
		 * Public URL of the form.
		 */
		url?: string;
	};
	/**
	 * Number of API calls left in the current period for this API key.
	 */
	'limit-left'?: string;
};

/**
 * Create a form
 * Creates a new form with the given title, questions, and email settings.
 */
export async function createForm(
	this: EndpointFunctionThis,
	payload: {
		input: CreateFormInput;
		connectionId: number;
	},
): Promise<CreateFormOutput> {
	const response = await this.endpointCaller<CreateFormOutput>(
		{
			appName: 'jotform',
			appVersion: 1,
			endpointName: 'createForm',
		},
		payload,
	);
	return response.output;
}
