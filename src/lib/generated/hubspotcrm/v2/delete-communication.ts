// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteCommunicationInput = {
	/**
	 * The record ID of the communication to delete.
	 */
	id: string;
};

export type DeleteCommunicationOutput = Record<string, never>;

/**
 * Delete a communication
 * Moves a communication to the recycling bin.
 */
export async function deleteCommunication(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteCommunicationInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteCommunicationOutput> {
	const response = await this.endpointCaller<DeleteCommunicationOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteCommunication',
		},
		payload,
	);
	return response.output;
}
