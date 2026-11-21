// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetEmailCampaignInput = {
	id: number;
	email?: string;
	name?: string;
};

export type GetEmailCampaignOutput = {
	id?: number;
};

/**
 * Get an email campaign
 * Retrieves an email campaign with its content, recipients and optional statistics.
 */
export async function getEmailCampaign(
	this: EndpointFunctionThis,
	payload: {
		input: GetEmailCampaignInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetEmailCampaignOutput> {
	const response = await this.endpointCaller<GetEmailCampaignOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'getEmailCampaign',
		},
		payload,
	);
	return response.output;
}
