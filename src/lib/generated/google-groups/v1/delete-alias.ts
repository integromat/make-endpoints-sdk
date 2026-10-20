// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAliasInput = {
	/**
	 * The group's email address, group alias, or unique group ID.
	 */
	groupKey: string;
	/**
	 * The alias email address to remove.
	 */
	alias: string;
};

export type DeleteAliasOutput = Record<string, never>;

/**
 * Delete an alias
 * Removes an alias from a group.
 */
export async function deleteAlias(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAliasInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteAliasOutput> {
	const response = await this.endpointCaller<DeleteAliasOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'deleteAlias',
		},
		payload,
	);
	return response.output;
}
