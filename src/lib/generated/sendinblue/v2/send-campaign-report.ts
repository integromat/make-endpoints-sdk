// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type SendCampaignReportInput = {
	id: number;
	email?: string;
	name?: string;
};

export type SendCampaignReportOutput = {
	id?: number;
};

/**
 * Send an email campaign report
 * Emails the PDF report of a sent email campaign to the given recipients.
 */
export async function sendCampaignReport(
	this: EndpointFunctionThis,
	payload: {
		input: SendCampaignReportInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<SendCampaignReportOutput>> {
	const response = await this.endpointCaller<SendCampaignReportOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'sendCampaignReport',
		},
		payload,
	);
	return response;
}
