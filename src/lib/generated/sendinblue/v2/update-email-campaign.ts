// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type UpdateEmailCampaignInput = {
	id: number;
	email?: string;
	name?: string;
};

export type UpdateEmailCampaignOutput = {
	id?: number;
};

/**
 * Update an email campaign
 * Updates the content, recipients or schedule of an email campaign that is not sent yet.
 */
export async function updateEmailCampaign(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateEmailCampaignInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UpdateEmailCampaignOutput>> {
	const response = await this.endpointCaller<UpdateEmailCampaignOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'updateEmailCampaign',
		},
		payload,
	);
	return response;
}
