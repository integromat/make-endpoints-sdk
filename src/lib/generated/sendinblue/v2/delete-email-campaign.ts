// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteEmailCampaignInput = {
	id: number;
	email?: string;
	name?: string;
};

export type DeleteEmailCampaignOutput = {
	id?: number;
};

/**
 * Delete an email campaign
 * Deletes an email campaign that is not scheduled.
 */
export async function deleteEmailCampaign(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteEmailCampaignInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteEmailCampaignOutput> {
	const response = await this.endpointCaller<DeleteEmailCampaignOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'deleteEmailCampaign',
		},
		payload,
	);
	return response.output;
}
