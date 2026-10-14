// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RunPlatformAgentInput = Record<string, never>;

export type RunPlatformAgentOutput = Record<string, never>;

/**
 * Run platform agent
 * Sends a prompt to monday.com's Platform Agent (Sidekick), which can read and act on the account's data, and returns its reply.
 */
export async function runPlatformAgent(
	this: EndpointFunctionThis,
	payload: {
		input: RunPlatformAgentInput;
		connectionId: number;
	},
): Promise<RunPlatformAgentOutput> {
	const response = await this.endpointCaller<RunPlatformAgentOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'runPlatformAgent',
		},
		payload,
	);
	return response.output;
}
