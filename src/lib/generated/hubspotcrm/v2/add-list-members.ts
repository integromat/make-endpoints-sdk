// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddListMembersInput = {
	/**
	 * The HubSpot internal ID of the MANUAL or SNAPSHOT list to add records to.
	 */
	listId: string;
	/**
	 * IDs of the CRM records to add to the list.
	 *
	 * Items: The ID of a CRM record to add to the list.
	 */
	recordIds: string[];
};

export type AddListMembersOutput = {
	/**
	 * IDs of records added to the list.
	 *
	 * Items: The ID of a record added to the list.
	 */
	recordsIdsAdded?: string[];
	/**
	 * IDs of records removed from the list.
	 *
	 * Items: The ID of a record removed from the list.
	 */
	recordIdsRemoved?: string[];
	/**
	 * IDs that did not exist and could not be added or removed.
	 *
	 * Items: The ID of a record that HubSpot could not find.
	 */
	recordIdsMissing?: string[];
};

/**
 * Add members to a list
 * Adds one or more records to a static HubSpot list. This modern v3 endpoint works for contact lists as well as company/deal lists, replacing the legacy contacts-only 'add to list' endpoint.
 */
export async function addListMembers(
	this: EndpointFunctionThis,
	payload: {
		input: AddListMembersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AddListMembersOutput> {
	const response = await this.endpointCaller<AddListMembersOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'addListMembers',
		},
		payload,
	);
	return response.output;
}
