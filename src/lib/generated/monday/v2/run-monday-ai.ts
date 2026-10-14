// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

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
	},
): Promise<RunMondayAiOutput> {
	const response = await this.endpointCaller<RunMondayAiOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'runMondayAi',
		},
		payload,
	);
	return response.output;
}
