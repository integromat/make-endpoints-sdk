// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListTeamsInput = Record<string, never>;

export type ListTeamsOutput = Record<string, never>;

/**
 * List teams
 * Returns the teams of the account.
 */
export async function listTeams(
	this: EndpointFunctionThis,
	payload: {
		input: ListTeamsInput;
		connectionId: number;
	},
): Promise<ListTeamsOutput> {
	const response = await this.endpointCaller<ListTeamsOutput>(
		{
			appName: 'monday',
			appVersion: 2,
			endpointName: 'listTeams',
		},
		payload,
	);
	return response.output;
}
