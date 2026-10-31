// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createInvoice } from './create-invoice.ts';
import { createPurchasingDocument } from './create-purchasing-document.ts';
import { deleteInvoice } from './delete-invoice.ts';
import { deletePurchasingDocument } from './delete-purchasing-document.ts';
import { generateInvoicePdf } from './generate-invoice-pdf.ts';
import { getInvoice } from './get-invoice.ts';
import { getPurchasingDocument } from './get-purchasing-document.ts';
import { queryInvoices } from './query-invoices.ts';
import { queryPurchasingDocuments } from './query-purchasing-documents.ts';
import { reverseInvoice } from './reverse-invoice.ts';
import { submitInvoice } from './submit-invoice.ts';
import { updateInvoice } from './update-invoice.ts';
import { updatePurchasingDocument } from './update-purchasing-document.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateInvoiceInput, CreateInvoiceOutput } from './create-invoice.ts';
export type {
	CreatePurchasingDocumentInput,
	CreatePurchasingDocumentOutput,
} from './create-purchasing-document.ts';
export type { DeleteInvoiceInput, DeleteInvoiceOutput } from './delete-invoice.ts';
export type {
	DeletePurchasingDocumentInput,
	DeletePurchasingDocumentOutput,
} from './delete-purchasing-document.ts';
export type { GenerateInvoicePdfInput, GenerateInvoicePdfOutput } from './generate-invoice-pdf.ts';
export type { GetInvoiceInput, GetInvoiceOutput } from './get-invoice.ts';
export type {
	GetPurchasingDocumentInput,
	GetPurchasingDocumentOutput,
} from './get-purchasing-document.ts';
export type { QueryInvoicesInput, QueryInvoicesOutput } from './query-invoices.ts';
export type {
	QueryPurchasingDocumentsInput,
	QueryPurchasingDocumentsOutput,
} from './query-purchasing-documents.ts';
export type { ReverseInvoiceInput, ReverseInvoiceOutput } from './reverse-invoice.ts';
export type { SubmitInvoiceInput, SubmitInvoiceOutput } from './submit-invoice.ts';
export type { UpdateInvoiceInput, UpdateInvoiceOutput } from './update-invoice.ts';
export type {
	UpdatePurchasingDocumentInput,
	UpdatePurchasingDocumentOutput,
} from './update-purchasing-document.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createInvoice: createInvoice.bind({ endpointCaller }),
		createPurchasingDocument: createPurchasingDocument.bind({ endpointCaller }),
		deleteInvoice: deleteInvoice.bind({ endpointCaller }),
		deletePurchasingDocument: deletePurchasingDocument.bind({ endpointCaller }),
		generateInvoicePdf: generateInvoicePdf.bind({ endpointCaller }),
		getInvoice: getInvoice.bind({ endpointCaller }),
		getPurchasingDocument: getPurchasingDocument.bind({ endpointCaller }),
		queryInvoices: queryInvoices.bind({ endpointCaller }),
		queryPurchasingDocuments: queryPurchasingDocuments.bind({ endpointCaller }),
		reverseInvoice: reverseInvoice.bind({ endpointCaller }),
		submitInvoice: submitInvoice.bind({ endpointCaller }),
		updateInvoice: updateInvoice.bind({ endpointCaller }),
		updatePurchasingDocument: updatePurchasingDocument.bind({ endpointCaller }),
	};
};

export class SageIntacctV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
