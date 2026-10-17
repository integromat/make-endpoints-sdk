// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemoveListMembersInput = {
	/**
	 * Internal ID of a MANUAL list or a completed SNAPSHOT list. DYNAMIC lists are unsupported.
	 */
	listId: string;
	/**
	 * CRM record IDs to remove. Nonexistent IDs and records not present in the list are ignored.
	 *
	 * Items: Internal ID of a CRM record to remove from the list.
	 */
	recordIds: string[];
};

export type RemoveListMembersOutput = {
	/**
	 * Record IDs added as part of membership processing, if any.
	 *
	 * Items: ID of a record added to the list.
	 */
	recordsIdsAdded: string[];
	/**
	 * Record IDs successfully removed from the list.
	 *
	 * Items: ID of a record removed from the list.
	 */
	recordIdsRemoved: string[];
	/**
	 * Record IDs that did not exist or were not present in the list.
	 *
	 * Items: ID of a record that did not exist or was not present in the list.
	 */
	recordIdsMissing: string[];
};

/**
 * Remove members from a list
 * Removes records from a manual list or a completed snapshot list; dynamic lists are unsupported.
 */
export async function removeListMembers(
	this: EndpointFunctionThis,
	payload: {
		input: RemoveListMembersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<RemoveListMembersOutput> {
	const response = await this.endpointCaller<RemoveListMembersOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'removeListMembers',
		},
		payload,
	);
	return response.output;
}
