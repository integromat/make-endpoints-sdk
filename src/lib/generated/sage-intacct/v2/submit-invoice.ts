// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SubmitInvoiceInput = {
	/**
	 * System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.
	 */
	key: string;
	/**
	 * For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.
	 */
	entityId?: string;
};

export type SubmitInvoiceOutput = {
	/**
	 * System-assigned key for the invoice. For example, `11`.
	 */
	key?: string;
	/**
	 * Unique ID for the invoice. For example, `11`.
	 */
	id?: string;
	/**
	 * URL endpoint for the invoice. For example, `/objects/accounts-receivable/invoice/11`.
	 */
	href?: string;
	/**
	 * State of the invoice after the submission. For example, `posted`.
	 */
	state?: string;
};

/**
 * Submit an invoice
 * Submits a draft invoice for posting.
 */
export async function submitInvoice(
	this: EndpointFunctionThis,
	payload: {
		input: SubmitInvoiceInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SubmitInvoiceOutput> {
	const response = await this.endpointCaller<SubmitInvoiceOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'submitInvoice',
		},
		payload,
	);
	return response.output;
}
