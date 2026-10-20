// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteEmailInput = {
	/**
	 * The record ID of the email to delete.
	 */
	id: string;
};

export type DeleteEmailOutput = Record<string, never>;

/**
 * Delete an email
 * Permanently deletes an email engagement.
 */
export async function deleteEmail(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteEmailInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteEmailOutput> {
	const response = await this.endpointCaller<DeleteEmailOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteEmail',
		},
		payload,
	);
	return response.output;
}
