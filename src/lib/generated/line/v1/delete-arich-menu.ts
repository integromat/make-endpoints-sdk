// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteARichMenuInput = {
	/**
	 * ID of the rich menu.
	 */
	richMenuId: string;
};

export type DeleteARichMenuOutput = Record<string, never>;

/**
 * Delete a rich menu
 * Deletes a rich menu by its ID.
 */
export async function deleteArichMenu(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteARichMenuInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteARichMenuOutput> {
	const response = await this.endpointCaller<DeleteARichMenuOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'deleteARichMenu',
		},
		payload,
	);
	return response.output;
}
