// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteInviteeNoShowInput = {
	/**
	 * The unique identifier of the no show record to delete.
	 */
	uuid: string;
};

export type DeleteInviteeNoShowOutput = Record<string, never>;

/**
 * Delete invitee no show
 * Removes the no show status from a specified invitee.
 */
export async function deleteInviteeNoShow(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteInviteeNoShowInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteInviteeNoShowOutput> {
	const response = await this.endpointCaller<DeleteInviteeNoShowOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'deleteInviteeNoShow',
		},
		payload,
	);
	return response.output;
}
