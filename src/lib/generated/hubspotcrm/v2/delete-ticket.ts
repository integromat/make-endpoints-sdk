// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteTicketInput = {
	/**
	 * The record ID of the support ticket to delete.
	 */
	id: string;
};

export type DeleteTicketOutput = Record<string, never>;

/**
 * Delete a ticket
 * Moves a support ticket to the recycling bin.
 */
export async function deleteTicket(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteTicketInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteTicketOutput> {
	const response = await this.endpointCaller<DeleteTicketOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteTicket',
		},
		payload,
	);
	return response.output;
}
