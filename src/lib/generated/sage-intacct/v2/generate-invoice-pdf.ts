// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GenerateInvoicePdfInput = {
	/**
	 * System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.
	 */
	key: string;
	/**
	 * For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.
	 */
	entityId?: string;
};

export type GenerateInvoicePdfOutput = {
	/**
	 * System-assigned key for the invoice. For example, `132`.
	 */
	key?: string;
	/**
	 * Unique ID for the invoice. For example, `132`.
	 */
	id?: string;
	/**
	 * URL endpoint for the invoice. For example, `/objects/accounts-receivable/invoice/132`.
	 */
	href?: string;
	/**
	 * The download link for the invoice.
	 */
	downloadURL?: string;
};

/**
 * Generate a PDF of an invoice
 * Generates a PDF of an invoice and returns a download link.
 */
export async function generateInvoicePdf(
	this: EndpointFunctionThis,
	payload: {
		input: GenerateInvoicePdfInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GenerateInvoicePdfOutput> {
	const response = await this.endpointCaller<GenerateInvoicePdfOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'generateInvoicePdf',
		},
		payload,
	);
	return response.output;
}
