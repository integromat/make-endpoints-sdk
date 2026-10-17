// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateFormQuestionsInput = {
	/**
	 * ID of the form to add questions to.
	 */
	formId: string;
	/**
	 * Questions to add to the form.
	 */
	questions: {
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
		 * Users can choose from these options. Separated with pipe character. Example: Option 1|Option 2|Option 3. Applies to Dropdown, Radio, and Checkbox questions only.
		 */
		options?: string;
		/**
		 * Whether an answer is mandatory. Applies to Dropdown, Radio, and Checkbox questions only.
		 */
		required?: '' | 'Yes' | 'No';
	}[];
};

export type UpdateFormQuestionsOutput = {
	/**
	 * Jotform API response code (200 on success).
	 */
	responseCode?: number;
	/**
	 * Response status message (for example `success`).
	 */
	message?: string;
	/**
	 * Questions added by this call.
	 */
	content?: {
		/**
		 * ID Jotform assigned to the added question.
		 */
		qid?: number;
		/**
		 * Question control type.
		 */
		type?: string;
		/**
		 * Question label text.
		 */
		text?: string;
		/**
		 * Machine-readable field name (slug).
		 */
		name?: string;
		/**
		 * Position of the question on the form.
		 */
		order?: string;
	}[];
	/**
	 * Number of API calls left in the current period for this API key.
	 */
	'limit-left'?: string;
};

/**
 * Add form questions
 * Adds new questions to an existing form.
 */
export async function updateFormQuestions(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateFormQuestionsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateFormQuestionsOutput> {
	const response = await this.endpointCaller<UpdateFormQuestionsOutput>(
		{
			appName: 'jotform',
			appVersion: 1,
			endpointName: 'updateFormQuestions',
		},
		payload,
	);
	return response.output;
}
