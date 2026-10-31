// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type LeaveAGroupInput = {
	/**
	 * ID of the group chat.
	 */
	groupId: string;
};

export type LeaveAGroupOutput = Record<string, never>;

/**
 * Leave a group
 * Makes the LINE Official Account leave a group chat.
 */
export async function leaveAgroup(
	this: EndpointFunctionThis,
	payload: {
		input: LeaveAGroupInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<LeaveAGroupOutput> {
	const response = await this.endpointCaller<LeaveAGroupOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'leaveAGroup',
		},
		payload,
	);
	return response.output;
}
