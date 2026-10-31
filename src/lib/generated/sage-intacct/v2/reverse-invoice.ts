// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ReverseInvoiceInput = {
	/**
	 * System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.
	 */
	key: string;
	/**
	 * Date the invoice is reversed. Use the format `YYYY-MM-DD`. For example, `2025-04-15`.
	 */
	reversedDate: string;
	/**
	 * Notes or comments about the reason for the invoice reversal. For example, `Reversed the invoice for duplicate entry`.
	 */
	memo?: string;
	/**
	 * For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.
	 */
	entityId?: string;
};

export type ReverseInvoiceOutput = {
	/**
	 * System-assigned key for the invoice. For example, `23`.
	 */
	key?: string;
	/**
	 * Unique ID for the invoice. For example, `23`.
	 */
	id?: string;
	/**
	 * URL endpoint for the invoice. For example, `/objects/accounts-receivable/invoice/23`.
	 */
	href?: string;
	/**
	 * State of the invoice after reversal. For example, `reversed`.
	 */
	state?: string;
};

/**
 * Reverse an invoice
 * Reverses an invoice and maintains an audit trail. Only posted or paid invoices can be reversed.
 */
export async function reverseInvoice(
	this: EndpointFunctionThis,
	payload: {
		input: ReverseInvoiceInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ReverseInvoiceOutput> {
	const response = await this.endpointCaller<ReverseInvoiceOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'reverseInvoice',
		},
		payload,
	);
	return response.output;
}
