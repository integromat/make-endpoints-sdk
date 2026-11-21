// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListEmailCampaignsInput = {
	id: number;
	email?: string;
	name?: string;
};

export type ListEmailCampaignsOutput = {
	id?: number;
};

/**
 * List email campaigns
 * Retrieves one page of email campaigns, optionally filtered by type, status and sent date.
 */
export async function listEmailCampaigns(
	this: EndpointFunctionThis,
	payload: {
		input: ListEmailCampaignsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListEmailCampaignsOutput> {
	const response = await this.endpointCaller<ListEmailCampaignsOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'listEmailCampaigns',
		},
		payload,
	);
	return response.output;
}
