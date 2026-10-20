// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateAssociationInput = {
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
	/**
	 * One or more directional association types to apply between the two records.
	 */
	associationTypes: {
		/**
		 * The HubSpot category of the association type.
		 */
		associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
		/**
		 * The numeric ID of the association type for the specified source-to-target direction.
		 */
		associationTypeId: number;
	}[];
};

export type CreateAssociationOutput = {
	/**
	 * Type ID of the source object.
	 */
	fromObjectTypeId?: string;
	/**
	 * Record ID of the source object.
	 */
	fromObjectId?: string;
	/**
	 * Type ID of the target object.
	 */
	toObjectTypeId?: string;
	/**
	 * Record ID of the target object.
	 */
	toObjectId?: string;
	/**
	 * Association labels applied between the records.
	 *
	 * Items: A label applied to the association.
	 */
	labels?: string[];
};

/**
 * Create an association
 * Associates two supported standard or custom CRM objects with one or more association types.
 */
export async function createAssociation(
	this: EndpointFunctionThis,
	payload: {
		input: CreateAssociationInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateAssociationOutput> {
	const response = await this.endpointCaller<CreateAssociationOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createAssociation',
		},
		payload,
	);
	return response.output;
}
