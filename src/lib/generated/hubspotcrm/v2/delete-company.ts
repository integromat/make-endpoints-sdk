// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteCompanyInput = {
	/**
	 * The record ID of the company to delete.
	 */
	id: string;
};

export type DeleteCompanyOutput = Record<string, never>;

/**
 * Delete a company
 * Moves a company to the recycling bin.
 */
export async function deleteCompany(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteCompanyInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteCompanyOutput> {
	const response = await this.endpointCaller<DeleteCompanyOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteCompany',
		},
		payload,
	);
	return response.output;
}
