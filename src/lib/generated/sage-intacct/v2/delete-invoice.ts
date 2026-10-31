// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteInvoiceInput = {
	/**
	 * System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.
	 */
	key: string;
	/**
	 * For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.
	 */
	entityId?: string;
};

export type DeleteInvoiceOutput = Record<string, never>;

/**
 * Delete an invoice
 * Deletes an invoice. Only invoices in draft or posted state can be deleted.
 */
export async function deleteInvoice(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteInvoiceInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteInvoiceOutput> {
	const response = await this.endpointCaller<DeleteInvoiceOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'deleteInvoice',
		},
		payload,
	);
	return response.output;
}
