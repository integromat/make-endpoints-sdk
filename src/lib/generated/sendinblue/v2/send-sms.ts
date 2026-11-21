// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendSmsInput = {
	id: number;
	email?: string;
	name?: string;
};

export type SendSmsOutput = {
	id?: number;
};

/**
 * Send a transactional SMS
 * Sends a transactional or marketing SMS to one mobile number.
 */
export async function sendSms(
	this: EndpointFunctionThis,
	payload: {
		input: SendSmsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SendSmsOutput> {
	const response = await this.endpointCaller<SendSmsOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'sendSms',
		},
		payload,
	);
	return response.output;
}
