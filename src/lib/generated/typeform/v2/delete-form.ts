// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteFormInput = {
	/**
	 * Unique ID for the form. Find it in your form URL. For example, in `https://mysite.typeform.com/to/u6nXL7` the form ID is `u6nXL7`.
	 */
	form_id: string;
};

export type DeleteFormOutput = Record<string, never>;

/**
 * Delete a form
 * Deletes a form and all of its responses.
 */
export async function deleteForm(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteFormInput;
		connectionId: number;
	},
): Promise<DeleteFormOutput> {
	const response = await this.endpointCaller<DeleteFormOutput>(
		{
			appName: 'typeform',
			appVersion: 2,
			endpointName: 'deleteForm',
		},
		payload,
	);
	return response.output;
}
