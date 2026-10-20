// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddAliasForGroupInput = {
	/**
	 * The group's email address, group alias, or unique group ID.
	 */
	groupKey: string;
	/**
	 * The alias email address to add, including the domain, for example `alias@example.com`.
	 */
	alias: string;
};

export type AddAliasForGroupOutput = {
	/**
	 * The unique ID of the group.
	 */
	id?: string;
	/**
	 * The primary email address of the group.
	 */
	primaryEmail?: string;
	/**
	 * The alias email address.
	 */
	alias?: string;
	/**
	 * The type of the API resource. For aliases, the value is `admin#directory#alias`.
	 */
	kind?: string;
	/**
	 * ETag of the resource.
	 */
	etag?: string;
};

/**
 * Add an alias to a group
 * Adds an alias for the group.
 */
export async function addAliasForGroup(
	this: EndpointFunctionThis,
	payload: {
		input: AddAliasForGroupInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AddAliasForGroupOutput> {
	const response = await this.endpointCaller<AddAliasForGroupOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'addAliasForGroup',
		},
		payload,
	);
	return response.output;
}
