// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteCallInput = {
	/**
	 * The Twilio-provided Call SID that uniquely identifies the Call resource to delete
	 */
	Sid: string;
};

export type DeleteCallOutput = Record<string, never>;

/**
 * Delete a call
 * Deletes a call record.
 */
export async function deleteCall(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteCallInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteCallOutput> {
	const response = await this.endpointCaller<DeleteCallOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'deleteCall',
		},
		payload,
	);
	return response.output;
}
