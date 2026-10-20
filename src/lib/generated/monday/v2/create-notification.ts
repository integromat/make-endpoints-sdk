// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateNotificationInput = Record<string, never>;

export type CreateNotificationOutput = Record<string, never>;

/**
 * Create a notification
 * Sends a notification to a user about an item, board, update or reply.
 */
export async function createNotification(
	this: EndpointFunctionThis,
	payload: {
		input: CreateNotificationInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateNotificationOutput> {
	const response = await this.endpointCaller<CreateNotificationOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'createNotification',
		},
		payload,
	);
	return response.output;
}
