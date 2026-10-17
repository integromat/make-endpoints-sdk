// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAssociationInput = {
	/**
	 * The source object's API name, numeric object type ID, or supported fully qualified custom-object name.
	 */
	fromObjectType: string;
	/**
	 * The record ID of the source object.
	 */
	fromObjectId: string;
	/**
	 * The target object's API name, numeric object type ID, or supported fully qualified custom-object name.
	 */
	toObjectType: string;
	/**
	 * The record ID of the target object.
	 */
	toObjectId: string;
};

export type DeleteAssociationOutput = Record<string, never>;

/**
 * Delete an association
 * Removes all association types between two CRM objects.
 */
export async function deleteAssociation(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAssociationInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteAssociationOutput> {
	const response = await this.endpointCaller<DeleteAssociationOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteAssociation',
		},
		payload,
	);
	return response.output;
}
