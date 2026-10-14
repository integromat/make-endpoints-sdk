// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListBoardSubscribersInput = Record<string, never>;

export type ListBoardSubscribersOutput = Record<string, never>;

/**
 * List board subscribers
 * Returns the users and teams subscribed to a board.
 */
export async function listBoardSubscribers(
	this: EndpointFunctionThis,
	payload: {
		input: ListBoardSubscribersInput;
		connectionId: number;
	},
): Promise<ListBoardSubscribersOutput> {
	const response = await this.endpointCaller<ListBoardSubscribersOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listBoardSubscribers',
		},
		payload,
	);
	return response.output;
}
