// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListSubUsersInput = Record<string, never>;

export type ListSubUsersOutput = {
	/**
	 * Jotform API response code (200 on success).
	 */
	responseCode?: number;
	/**
	 * Response status message (for example `success`).
	 */
	message?: string;
	/**
	 * The account's sub-users.
	 */
	content?: {
		/**
		 * Username of the account that owns this sub-user.
		 */
		owner?: string;
		/**
		 * Status of the sub-user.
		 */
		status?: string;
		/**
		 * Email address of the sub-user.
		 */
		email?: string;
		/**
		 * Username of the sub-user.
		 */
		username?: string;
		/**
		 * When the sub-user was created.
		 */
		created_at?: string;
		/**
		 * Forms and folders this sub-user can access.
		 */
		permissions?: {
			/**
			 * Whether the permission applies to a form or a folder.
			 */
			type?: string;
			/**
			 * ID of the form or folder.
			 */
			resource_id?: number;
			/**
			 * Access level granted on the form or folder.
			 */
			access_type?: string;
		}[];
	}[];
	/**
	 * Number of API calls left in the current period for this API key.
	 */
	'limit-left'?: string;
};

/**
 * List sub-users
 * Lists the sub-users of the connected account and their form access.
 */
export async function listSubUsers(
	this: EndpointFunctionThis,
	payload: {
		input: ListSubUsersInput;
		connectionId: number;
	},
): Promise<ListSubUsersOutput> {
	const response = await this.endpointCaller<ListSubUsersOutput>(
		{
			appName: 'jotform',
			appVersion: 1,
			endpointName: 'listSubUsers',
		},
		payload,
	);
	return response.output;
}
