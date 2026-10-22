// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteALabelInput = {
	/**
	 * The ID of the label to delete.
	 */
	id: string;
};

export type DeleteALabelOutput = Record<string, never>;

/**
 * Delete a label
 * Deletes a label permanently.
 */
export async function deleteAlabel(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteALabelInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteALabelOutput> {
	const response = await this.endpointCaller<DeleteALabelOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'deleteALabel',
		},
		payload,
	);
	return response.output;
}
