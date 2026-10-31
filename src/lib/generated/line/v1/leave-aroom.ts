// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type LeaveARoomInput = {
	/**
	 * ID of the multi-person chat.
	 */
	roomId: string;
};

export type LeaveARoomOutput = Record<string, never>;

/**
 * Leave a room
 * Makes the LINE Official Account leave a multi-person chat.
 */
export async function leaveAroom(
	this: EndpointFunctionThis,
	payload: {
		input: LeaveARoomInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<LeaveARoomOutput> {
	const response = await this.endpointCaller<LeaveARoomOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'leaveARoom',
		},
		payload,
	);
	return response.output;
}
