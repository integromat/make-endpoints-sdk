// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendDraftInput = {
	/**
	 * The unique identifier of the draft message to send.
	 */
	id: string;
};

export type SendDraftOutput = Record<string, never>;

/**
 * Send a draft message
 * Sends a previously created draft message.
 */
export async function sendDraft(
	this: EndpointFunctionThis,
	payload: {
		input: SendDraftInput;
		connectionId: number;
	},
): Promise<SendDraftOutput> {
	const response = await this.endpointCaller<SendDraftOutput>(
		{
			appName: 'microsoft-email',
			appVersion: 2,
			endpointName: 'sendDraft',
		},
		payload,
	);
	return response.output;
}
