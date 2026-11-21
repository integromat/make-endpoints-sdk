// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateEmailCampaignInput = {
	id: number;
	email?: string;
	name?: string;
};

export type CreateEmailCampaignOutput = {
	id?: number;
};

/**
 * Create an email campaign
 * Creates an email campaign as a draft or schedules it for sending.
 */
export async function createEmailCampaign(
	this: EndpointFunctionThis,
	payload: {
		input: CreateEmailCampaignInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateEmailCampaignOutput> {
	const response = await this.endpointCaller<CreateEmailCampaignOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'createEmailCampaign',
		},
		payload,
	);
	return response.output;
}
