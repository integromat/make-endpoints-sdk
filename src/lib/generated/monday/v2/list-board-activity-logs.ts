// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListBoardActivityLogsInput = Record<string, never>;

export type ListBoardActivityLogsOutput = Record<string, never>;

/**
 * List board activity logs
 * Returns a page of a board's activity log events, newest first, with optional filters.
 */
export async function listBoardActivityLogs(
	this: EndpointFunctionThis,
	payload: {
		input: ListBoardActivityLogsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListBoardActivityLogsOutput> {
	const response = await this.endpointCaller<ListBoardActivityLogsOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listBoardActivityLogs',
		},
		payload,
	);
	return response.output;
}
