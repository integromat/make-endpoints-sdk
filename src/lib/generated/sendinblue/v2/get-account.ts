// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAccountInput = {
	id: number;
	email?: string;
	name?: string;
};

export type GetAccountOutput = {
	id?: number;
};

/**
 * Get account details
 * Retrieves the details of the connected Brevo account, including plan and credits.
 */
export async function getAccount(
	this: EndpointFunctionThis,
	payload: {
		input: GetAccountInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetAccountOutput> {
	const response = await this.endpointCaller<GetAccountOutput>(
		{
			appName: 'sendinblue',
			appVersion: 2,
			endpointName: 'getAccount',
		},
		payload,
	);
	return response.output;
}
