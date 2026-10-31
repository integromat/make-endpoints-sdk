// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeletePurchasingDocumentInput = {
	/**
	 * Name of the transaction definition used as the template for the purchasing document, for example `Purchase Order`. It must match a transaction definition configured in the company. Look it up with the Search purchasing documents Endpoint or in the Sage Intacct transaction definitions.
	 */
	documentName: string;
	/**
	 * System-assigned key of the purchasing document. You can find it in the `key` field of a created, queried or retrieved purchasing document.
	 */
	key: string;
	/**
	 * For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.
	 */
	entityId?: string;
};

export type DeletePurchasingDocumentOutput = Record<string, never>;

/**
 * Delete a purchasing document
 * Deletes a purchasing document. Several factors determine whether a purchasing document can be deleted.
 */
export async function deletePurchasingDocument(
	this: EndpointFunctionThis,
	payload: {
		input: DeletePurchasingDocumentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeletePurchasingDocumentOutput> {
	const response = await this.endpointCaller<DeletePurchasingDocumentOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'deletePurchasingDocument',
		},
		payload,
	);
	return response.output;
}
