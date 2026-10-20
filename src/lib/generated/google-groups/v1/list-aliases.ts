// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListAliasesInput = {
	/**
	 * The group's email address, group alias, or unique group ID.
	 */
	groupKey: string;
};

export type ListAliasesOutput = {
	/**
	 * The kind of the resource.
	 */
	kind?: string;
	/**
	 * ETag of the resource.
	 */
	etag?: string;
	/**
	 * A list of alias objects.
	 *
	 * Items: A group alias.
	 */
	aliases?: {
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
	}[];
};

/**
 * List aliases
 * Lists all aliases for a group.
 */
export async function listAliases(
	this: EndpointFunctionThis,
	payload: {
		input: ListAliasesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListAliasesOutput> {
	const response = await this.endpointCaller<ListAliasesOutput>(
		{
			appName: 'google-groups',
			appVersion: 1,
			endpointName: 'listAliases',
		},
		payload,
	);
	return response.output;
}
