// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListItemSubscribersInput = Record<string, never>;

export type ListItemSubscribersOutput = Record<string, never>;

/**
 * List item subscribers
 * Returns the users subscribed to an item.
 */
export async function listItemSubscribers(
	this: EndpointFunctionThis,
	payload: {
		input: ListItemSubscribersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListItemSubscribersOutput> {
	const response = await this.endpointCaller<ListItemSubscribersOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listItemSubscribers',
		},
		payload,
	);
	return response.output;
}
