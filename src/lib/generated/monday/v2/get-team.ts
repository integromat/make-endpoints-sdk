// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetTeamInput = Record<string, never>;

export type GetTeamOutput = Record<string, never>;

/**
 * Get a team
 * Returns a single team with its owners and full member profiles.
 */
export async function getTeam(
	this: EndpointFunctionThis,
	payload: {
		input: GetTeamInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetTeamOutput> {
	const response = await this.endpointCaller<GetTeamOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'getTeam',
		},
		payload,
	);
	return response.output;
}
