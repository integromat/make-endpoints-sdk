// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendEmailInput = {
	id: number;
	email?: string;
	name?: string;
};

export type SendEmailOutput = {
	id?: number;
};

/**
 * Send a transactional email
 * Sends or schedules a transactional email with inline content or a template.
 */
export async function sendEmail(
	this: EndpointFunctionThis,
	payload: {
		input: SendEmailInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SendEmailOutput> {
	const response = await this.endpointCaller<SendEmailOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'sendEmail',
		},
		payload,
	);
	return response.output;
}
