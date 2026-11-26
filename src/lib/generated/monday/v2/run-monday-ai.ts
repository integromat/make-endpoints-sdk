// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type RunMondayAiInput = Record<string, never>;

export type RunMondayAiOutput = Record<string, never>;

/**
 * Run monday.com AI
 * Sends a chat conversation to monday.com AI (OpenAI-compatible chat completions) and returns the generated reply.
 */
export async function runMondayAi(
	this: EndpointFunctionThis,
	payload: {
		input: RunMondayAiInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<RunMondayAiOutput>> {
	const response = await this.endpointCaller<RunMondayAiOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'runMondayAi',
		},
		payload,
	);
	return response;
}
