// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetInvoiceInput = {
	/**
	 * System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.
	 */
	key: string;
	/**
	 * For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.
	 */
	entityId?: string;
};

export type GetInvoiceOutput = {
	/**
	 * System-assigned key for the AR invoice. For example, `11`.
	 */
	key?: string;
	/**
	 * Unique identifier for the AR invoice. For example, `11`.
	 */
	id?: string;
	/**
	 * The record type for the invoice. For example, `ri`.
	 */
	recordType?: string;
	/**
	 * Key of the module from which the invoice was created.
	 */
	moduleKey?: '' | 'accountsReceivable' | 'orderEntry';
	/**
	 * Invoice number. For example, `INV-001`.
	 */
	invoiceNumber?: string;
	/**
	 * State of the invoice in the workflow. For example, `posted`.
	 */
	state?:
		| ''
		| 'reversed'
		| 'reversal'
		| 'draft'
		| 'noValue'
		| 'posted'
		| 'paid'
		| 'partiallyPaid'
		| 'selected';
	/**
	 * Number of days until the invoice is due. For example, `108`.
	 */
	dueInDays?: number;
	/**
	 * Customer purchase order number or another reference number. For example, `PO6917`.
	 */
	referenceNumber?: string;
	/**
	 * Description of the invoice, which prints on the Customer Ledger report. For example, `Regular invoice`.
	 */
	description?: string;
	/**
	 * This field is deprecated, please use `salesDocument` field instead.
	 */
	documentId?: string;
	/**
	 * The sales document of the invoice.
	 */
	salesDocument?: {
		/**
		 * Document ID of the sales invoice. For example, `Sales Invoice-SI-00188`.
		 */
		id?: string;
		/**
		 * System-assigned key to uniquely identify the order entry document. For example, `511`.
		 */
		key?: string;
		/**
		 * URL endpoint for the order entry document. For example, `/objects/order-entry/document/511`.
		 */
		href?: string;
	};
	/**
	 * Date of the discount. Returned in the format `YYYY-MM-DD`.
	 */
	discountCutOffDate?: string;
	/**
	 * Date the invoice was created. Returned in the format `YYYY-MM-DD`.
	 */
	invoiceDate?: string;
	/**
	 * Date the invoice is due. Returned in the format `YYYY-MM-DD`.
	 */
	dueDate?: string;
	/**
	 * Currency details for this invoice.
	 */
	currency?: {
		/**
		 * Base currency for the invoice. For example, `USD`.
		 */
		baseCurrency?: string;
		/**
		 * The transaction currency of this invoice. For example, `USD`.
		 */
		txnCurrency?: string;
		/**
		 * Exchange rate details used to calculate the base amount.
		 */
		exchangeRate?: {
			/**
			 * Exchange rate date for this transaction. Returned in the format `YYYY-MM-DD`.
			 */
			date?: string;
			/**
			 * Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.
			 */
			rate?: number;
			/**
			 * Exchange rate type used to calculate the base amount from the transaction amount. For example, `Intacct Daily Rate`.
			 */
			typeId?: string;
		};
	};
	/**
	 * For multi-currency companies, total entered in the base currency of the company. For example, `700000`.
	 */
	totalBaseAmount?: string;
	/**
	 * For multi-currency companies, total due in the base currency of the company. For example, `700000`.
	 */
	totalBaseAmountDue?: string;
	/**
	 * Total transaction amount in the currency of the invoice. For example, `700000`.
	 */
	totalTxnAmount?: string;
	/**
	 * Total transaction amount due in the currency of the invoice. For example, `700000`.
	 */
	totalTxnAmountDue?: string;
	/**
	 * Number of associated dunning notices. For example, `1`.
	 */
	dunningCount?: number;
	/**
	 * Message to include on the customer's invoice.
	 */
	customerMessage?: {
		/**
		 * System-assigned key for the customer message. For example, `10`.
		 */
		key?: string;
		/**
		 * ID for the customer message. For example, `welcome message`.
		 */
		id?: string;
		/**
		 * Message text for the customer message. For example, `welcome to the company`.
		 */
		message?: string;
		/**
		 * URL endpoint for the customer message. For example, `/objects/accounts-receivable/customer-message/10`.
		 */
		href?: string;
	};
	/**
	 * Recurring schedule used to automate the billing process.
	 */
	recurringSchedule?: {
		/**
		 * System-assigned key to uniquely identify the recurring schedule. For example, `20`.
		 */
		key?: string;
	};
	/**
	 * Payment information for the invoice.
	 */
	paymentInformation?: {
		/**
		 * Date the invoice was paid. Returned in the format `YYYY-MM-DD`.
		 */
		fullyPaidDate?: string;
		/**
		 * Number of days from invoiceDate to fullyPaidDate. For example, `23`.
		 */
		daysToPay?: number;
		/**
		 * Number of days from invoice dueDate to fullyPaidDate. For example, `3`.
		 */
		daysPaidAfterDue?: number;
		/**
		 * Total paid in the company's base currency. For example, `500`.
		 */
		totalBaseAmountPaid?: string;
		/**
		 * Total selected for payment in the company's base currency. For example, `500`.
		 */
		totalBaseAmountSelectedForPayment?: string;
		/**
		 * Total amount selected for payment in the invoice currency. For example, `500`.
		 */
		totalTxnAmountSelectedForPayment?: string;
		/**
		 * Total amount paid in the invoice currency. For example, `500`.
		 */
		totalTxnAmountPaid?: string;
	};
	/**
	 * Associated contacts.
	 */
	contacts?: {
		/**
		 * Pay to contact information from the customer record.
		 */
		payTo?: {
			/**
			 * System-assigned key to uniquely identify the contact. For example, `176`.
			 */
			key?: string;
			/**
			 * Name of the contact. For example, `Power Aerospace Materials(C1)`.
			 */
			id?: string;
			/**
			 * URL for the contact. For example, `/objects/company-config/contact-version/176`.
			 */
			href?: string;
		};
		/**
		 * Return to contact information from the customer record.
		 */
		returnTo?: {
			/**
			 * System-assigned key to uniquely identify the contact. For example, `176`.
			 */
			key?: string;
			/**
			 * Name of the contact. For example, `Power Aerospace Materials(C1)`.
			 */
			id?: string;
			/**
			 * URL for the contact. For example, `/objects/company-config/contact-version/176`.
			 */
			href?: string;
			/**
			 * Tax related information for the ship-to contact.
			 */
			tax?: {
				/**
				 * Tax identification number. For example, `252-85-7897`.
				 */
				taxId?: string;
				/**
				 * Contact tax group associated with the ship-to contact.
				 */
				group?: {
					/**
					 * System-assigned key for the group. For example, `288`.
					 */
					key?: string;
					/**
					 * Unique identifier for the group. For example, `Goods Zero Rate - CA`.
					 */
					id?: string;
					/**
					 * URL endpoint for the group. For example, `/objects/tax/contact-tax-group/288`.
					 */
					href?: string;
				};
			};
		};
	};
	/**
	 * If `true`, this invoice record is created by the system internally and not created based on user input.
	 */
	isSystemGeneratedDocument?: boolean;
	/**
	 * If AR is configured for inter-entity bill back, the template to use to create a matching bill.
	 */
	billbackTemplate?: {
		/**
		 * System-assigned key for the template. For example, `18`.
		 */
		key?: string;
		/**
		 * ID for the template. For example, `BBT-error5`.
		 */
		id?: string;
		/**
		 * URL for the template. For example, `/objects/accounts-receivable/billback-template/18`.
		 */
		href?: string;
	};
	/**
	 * Supporting document attached to the invoice.
	 */
	attachment?: {
		/**
		 * System-assigned key for the supporting document. For example, `11`.
		 */
		key?: string;
		/**
		 * System-assigned ID for the supporting document. For example, `11`.
		 */
		id?: string;
		/**
		 * URL for the attachment. For example, `/objects/company-config/attachment/11`.
		 */
		href?: string;
	};
	/**
	 * Customer to receive the invoice.
	 */
	customer?: {
		/**
		 * System-assigned key for the customer. For example, `14`.
		 */
		key?: string;
		/**
		 * Unique identifier of the customer. For example, `C-00019`.
		 */
		id?: string;
		/**
		 * Name of the customer. For example, `Haversham Textiles Corp`.
		 */
		name?: string;
		/**
		 * Indicates whether email is a delivery option for the customer.
		 */
		emailOption?: boolean;
		/**
		 * Amount due from the customer. For example, `124041.29`.
		 */
		customerDue?: string;
		/**
		 * Invoice delivery options for the customer.
		 */
		deliveryOptions?: '' | 'print' | 'email' | 'both';
		/**
		 * URL for the customer. For example, `/objects/accounts-receivable/customer/14`.
		 */
		href?: string;
	};
	/**
	 * Term details for the invoice.
	 */
	term?: {
		/**
		 * System-assigned key for the term. For example, `16`.
		 */
		key?: string;
		/**
		 * Name of the term. For example, `30 Days`.
		 */
		id?: string;
		/**
		 * URL for the term. For example, `/objects/accounts-receivable/term/16`.
		 */
		href?: string;
	};
	/**
	 * Tax solution details for this invoice.
	 */
	taxSolution?: {
		/**
		 * System-assigned key to uniquely identify the tax solution. For example, `4`.
		 */
		key?: string;
		/**
		 * Name or other unique identifier for the tax solution. For example, `Australia GST`.
		 */
		id?: string;
		/**
		 * URL endpoint for the tax solution. For example, `/objects/tax/tax-solution/4`.
		 */
		href?: string;
	};
	/**
	 * Specifies whether the transaction is a regular invoice (invoice), an electronic invoice (eInvoice), or an invoice reported to the tax agency because it is not eligible for e-invoicing (eReporting).
	 */
	invoiceType?: '' | 'invoice' | 'eInvoice' | 'eReporting';
	/**
	 * Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities. Specifies the invoice mode based on invoiceType. For eReporting, specify tlb1 (goods) or tps1 (services). For eInvoice, specify b1 or s1. Supported values: - `tlb1` - E-Reporting mode for goods. - `tps1` - E-Reporting mode for services. - `b1` - Submission of an e-invoice for goods. - `s1` - Submission of an e-invoice for services. Leave this field blank when `invoiceType` is `invoice`.
	 */
	invoiceMode?: '' | 'tlb1' | 'tps1' | 'b1' | 's1';
	/**
	 * Current status of an e-invoice; applicable only when selected invoice type is eInvoice. Supported statuses: - `submitted` - The supplier submits its invoice or credit note to the public invoicing portal or its registered private platform. - `issuedByPlatform` - The invoice has been processed on the supplier’s platform and issued to the buyer. - `fileUploaded` - The invoice file has been uploaded to the platform. - `madeAvailable` - The invoice has been made available to the buyer on the public invoicing portal or its registered private platform. - `inHand` - The invoice is assumed by the buyer for processing. - `refused` - The invoice has been refused by the recipient for business reasons. A complete list of reasons for refusal is available in the document "Annex 1 - Semantic Format FE e-invoicing - Flows 1 & 2" on the "Reason for refusal" tab. - `paymentSent` - The bank transfer flow has been sent to the supplier / The reimbursement flow has been sent to the buyer. - `paymentReceived` - The supplier has received payment of the invoice. This status is mandatory for supply of services (except VAT on debits and excluding reverse charge transactions). - `disputed` - There is a dispute regarding the invoice. This may ultimately lead to refusal or approval by the buyer. - `notSent` - The invoice has not been sent to the platform. - `inTransit` - The invoice has been sent and is in transit between platforms. - `approved` - The invoice has been approved by the buyer. - `receivedByPlatform` - The invoice has been received by the public invoicing portal or the buyer’s registered private platform but has not yet been made available to the buyer. - `rejectedByPlatform` - The invoice can be automatically rejected by the platform on technical grounds (e.g. format, non-compliance with the standard, etc.). When the transmit platform rejects the invoice, the invoice must be corrected by its issuer and resubmitted to the platform. - `suspended` - Processing of the invoice is temporarily suspended. - `completed` - The invoice processing lifecycle is completed. - `partiallyApproved` - The invoice has been partially approved.
	 */
	eInvoiceStatus?:
		| ''
		| 'submitted'
		| 'issuedByPlatform'
		| 'fileUploaded'
		| 'madeAvailable'
		| 'inHand'
		| 'refused'
		| 'paymentSent'
		| 'paymentReceived'
		| 'disputed'
		| 'notSent'
		| 'inTransit'
		| 'approved'
		| 'receivedByPlatform'
		| 'rejectedByPlatform'
		| 'suspended'
		| 'completed'
		| 'partiallyApproved';
	/**
	 * France E-invoicing dispute information.
	 */
	dispute?: {
		/**
		 * Dispute reason (France E-invoicing only).
		 */
		reason?:
			| ''
			| 'recipientNotConnected'
			| 'other'
			| 'bankDetailsError'
			| 'incorrectVATRate'
			| 'incorrectTotalAmount'
			| 'invoiceCalculationError'
			| 'legalNoticeMissing'
			| 'duplicateInvoice'
			| 'errorInRecipientInformation'
			| 'unknownTransaction'
			| 'issuerUnknown'
			| 'contractCompleted'
			| 'doubleInvoice'
			| 'orderNumberIncorrectOrMissing'
			| 'incorrectEmailBillingAddress'
			| 'incorrectOrMissingSiretNumber'
			| 'routingCodeMissingOrIncorrect'
			| 'contractualReferenceRequired'
			| 'incorrectReference'
			| 'incorrectUnitPrices'
			| 'incorrectDiscount'
			| 'incorrectQuantityBilled'
			| 'itemBilledIncorrectly'
			| 'incorrectPaymentMethod'
			| 'incorrectQualityOfItemDelivered'
			| 'deliveryProblem';
		/**
		 * Additional information for disputing the bill which is supported only for France E-invoicing. Use this field to provide the detail that explains why the bill was disputed. For example, `Does not have an active invoice receiving address`.
		 */
		notes?: string;
	};
	/**
	 * France E-invoicing refusal information.
	 */
	refuse?: {
		/**
		 * Refusal reason (France E-invoicing only).
		 */
		reason?:
			| ''
			| 'incorrectVATRate'
			| 'incorrectTotalAmount'
			| 'invoiceCalculationError'
			| 'legalNoticeMissing'
			| 'duplicateInvoice'
			| 'errorInRecipientInformation'
			| 'unknownTransaction'
			| 'issuerUnknown'
			| 'contractCompleted'
			| 'doubleInvoice'
			| 'orderNumberIncorrectOrMissing'
			| 'incorrectEmailBillingAddress'
			| 'contractualReferenceRequired';
		/**
		 * Additional information for refusing the bill which is supported only for France E-invoicing. Use this field to provide the detail that explains why the bill was refused. For example, `The VAT rate used is not the one that should have been`.
		 */
		notes?: string;
	};
	/**
	 * Summary details for this invoice. Summaries are collections of the same types of transactions grouped together for processing.
	 */
	invoiceSummary?: {
		/**
		 * System-assigned key to uniquely identify the summary. For example, `33`.
		 */
		key?: string;
		/**
		 * Name of the summary. For example, `OE Sales Invoice: 2023 Batch 1`.
		 */
		id?: string;
		/**
		 * GL posting date for the summary. Returned in the format `YYYY-MM-DD`.
		 */
		glPostingDate?: string;
		/**
		 * A summary can be `open` or `closed`. Items, such as invoices, can be added to open summaries.
		 */
		isSummaryOpen?: '' | 'open' | 'closed';
		/**
		 * If `true`, the summary has been posted to the General Ledger. For example, `false`.
		 */
		isSummaryPosted?: string;
		/**
		 * URL for the summary. For example, `/objects/accounts-receivable/summary/33`.
		 */
		href?: string;
	};
	/**
	 * Contains download link for an invoice.
	 */
	downloadURL?: string;
	/**
	 * Indicates whether online payment through a Payment Acceptance Services (PAS), like Stripe or PayPal, is enabled for this invoice.
	 */
	allowOnlinePayment?: boolean;
	/**
	 * Provider payment details for the invoice.
	 */
	providerPayment?: {
		/**
		 * Unique key for the provider payment. For example, `4`.
		 */
		key?: string;
		/**
		 * Unique ID for the provider payment. For example, `4`.
		 */
		id?: string;
		/**
		 * URL endpoint for the provider payment. For example, `/objects/accounts-receivable/provider-payment/4`.
		 */
		href?: string;
		/**
		 * Current state of the payment processed by a payment provider.
		 */
		state?:
			| ''
			| 'inProgress'
			| 'pending'
			| 'unauthorized'
			| 'arrived'
			| 'rejected'
			| 'paidOffline'
			| 'cancelled'
			| 'processing'
			| 'processingCompleted'
			| 'processingFailed'
			| 'refunded'
			| 'partiallyPaid'
			| 'partiallyRefunded'
			| 'paid'
			| 'requestFailed';
	};
	/**
	 * Retainage information for the invoice. Retainage is a portion of the agreed-upon contract price withheld until the work is substantially complete. (Construction subscription)
	 */
	retainage?: {
		/**
		 * Default retainage percentage for the customer. For example, `5.00`.
		 */
		defaultPercentage?: string;
		/**
		 * Total transaction amount retained. For example, `200.00`.
		 */
		totalTxnAmountRetained?: string;
		/**
		 * Total transaction amount released. For example, `100.00`.
		 */
		totalTxnAmountReleased?: string;
		/**
		 * Total base amount retained. For example, `100.00`.
		 */
		totalBaseAmountRetained?: string;
		/**
		 * Indicates whether the retainage is released.
		 */
		isReleased?: boolean;
	};
	/**
	 * Reference to the project contract. (Construction subscription)
	 */
	projectContract?: {
		/**
		 * Project contract key. For example, `1`.
		 */
		key?: string;
		/**
		 * Project contract ID. For example, `BTI-01`.
		 */
		id?: string;
		/**
		 * Project contract name. For example, `Berkeley Technology Inc - Contract 01`.
		 */
		name?: string;
		/**
		 * URL endpoint for the project contract. For example, `/objects/construction/project-contract/1`.
		 */
		href?: string;
	};
	/**
	 * Project contract billing details for the invoice. (Construction subscription)
	 */
	projectContractBilling?: {
		/**
		 * External reference number for the project contract. For example, `HGS-1024`.
		 */
		externalReferenceNumber?: string;
		/**
		 * Description of the project contract. For example, `Construction of club house and offices`.
		 */
		description?: string;
		/**
		 * Date of the project contract. Returned in the format `YYYY-MM-DD`.
		 */
		contractDate?: string;
		/**
		 * Billing through date for the Account Receivable Invoice. Returned in the format `YYYY-MM-DD`.
		 */
		billingThroughDate?: string;
		/**
		 * Billing application number for the Account Receivable Invoice. For example, `IA-89115`.
		 */
		billingApplicationNumber?: string;
	};
	/**
	 * Reference to a project contract architect contact. (Construction subscription)
	 */
	architect?: {
		/**
		 * System-assigned key for the contact. For example, `12`.
		 */
		key?: string;
		/**
		 * Unique identifier for the contact. For example, `Eberhardt`.
		 */
		id?: string;
		/**
		 * URL endpoint for the architect contact. For example, `/objects/company-config/contact/12`.
		 */
		href?: string;
	};
	/**
	 * Project contract billing summary totals on the invoice. (Construction subscription).
	 */
	projectContractBillingInvoiceSummary?: {
		/**
		 * Sum of the original contract amounts. For example, `1000.0000000000`.
		 */
		originalContractAmount?: string;
		/**
		 * Sum of the net approved changes amounts. For example, `1000.0000000000`.
		 */
		netApprovedChangesAmount?: string;
		/**
		 * Sum of the revised contract amounts. For example, `1000.0000000000`.
		 */
		revisedContractAmount?: string;
		/**
		 * Sum of the completed from prior applications amounts. For example, `1000.0000000000`.
		 */
		completedFromPriorApplicationAmount?: string;
		/**
		 * Sum of the completed to date amounts. For example, `1000.0000000000`.
		 */
		completedToDateAmount?: string;
		/**
		 * Sum of the less previous billing amounts. For example, `1000.0000000000`.
		 */
		lessPreviousBillingAmount?: string;
		/**
		 * Sum of the current due amounts. For example, `1000.0000000000`.
		 */
		currentDueAmount?: string;
		/**
		 * Sum of the balance to finish amounts. For example, `1000.0000000000`.
		 */
		balanceToFinishAmount?: string;
		/**
		 * Sum of the taxes. For example, `1000.0000000000`.
		 */
		taxAmount?: string;
		/**
		 * Sum of the charges. For example, `1000.0000000000`.
		 */
		chargeAmount?: string;
		/**
		 * Sum of the discounts. For example, `1000.0000000000`.
		 */
		discountAmount?: string;
		/**
		 * Project contract billing changes approved for the prior month on the Order Entry document or Account Receivable Invoice.
		 */
		changesApprovedPriorMonth?: {
			/**
			 * Sum of the additional changes approved in prior months. For example, `1000.0000000000`.
			 */
			additionsAmount?: string;
			/**
			 * Sum of the deducted changes approved in prior months. For example, `1000.0000000000`.
			 */
			deductionsAmount?: string;
		};
		/**
		 * Project contract billing changes approved for the current month on the Order Entry document or Account Receivable Invoice.
		 */
		changesApprovedThisMonth?: {
			/**
			 * Sum of the additional changes approved this month. For example, `1000.0000000000`.
			 */
			additionsAmount?: string;
			/**
			 * Sum of the deducted changes approved this month. For example, `1000.0000000000`.
			 */
			deductionsAmount?: string;
		};
		/**
		 * Retainage totals.
		 */
		retainage?: {
			/**
			 * Sum of the invoice amounts retained. For example, `1000.0000000000`.
			 */
			amountRetained?: string;
			/**
			 * Sum of the invoice retainage billed. For example, `1000.0000000000`.
			 */
			billedAmount?: string;
			/**
			 * Sum of the net change retainage held. For example, `1000.0000000000`.
			 */
			netChangeHeldAmount?: string;
			/**
			 * Sum of the retainage held to date. For example, `1000.0000000000`.
			 */
			heldToDateAmount?: string;
			/**
			 * Sum of the retainage billed to date. For example, `1000.0000000000`.
			 */
			billedToDateAmount?: string;
			/**
			 * Sum of the retainage balance to date. For example, `1000.0000000000`.
			 */
			balanceToDateAmount?: string;
			/**
			 * Sum of the previous retainage balance. For example, `1000.0000000000`.
			 */
			previousBalanceAmount?: string;
			/**
			 * Sum of the total earned less retainage. For example, `1000.0000000000`.
			 */
			totalEarnedLessAmount?: string;
		};
		/**
		 * Accounts Receivable invoice number. For example, `INV1`.
		 */
		accountsReceivableInvoiceNumber?: string;
		/**
		 * Order Entry document ID. For example, `SO-AIA-Invoice01-Ord#0011#doc`.
		 */
		orderEntryDocumentId?: string;
		/**
		 * Project ID. For example, `DIM - HCS`.
		 */
		projectId?: string;
		/**
		 * Project name. For example, `Dimensions - Hands Computer Systems`.
		 */
		projectName?: string;
	};
	/**
	 * Line items of the invoice.
	 *
	 * Items: Line items in an AR invoice represent transactions captured in that invoice.
	 */
	lines?: {
		/**
		 * System-assigned key for the AR invoice line item. For example, `103`.
		 */
		key?: string;
		/**
		 * Identifier for the AR invoice line item. For example, `103`.
		 */
		id?: string;
		/**
		 * General Ledger (GL) account associated with the line item.
		 */
		glAccount?: {
			/**
			 * System-assigned key for the GL account. For example, `163`.
			 */
			key?: string;
			/**
			 * User-assigned number for the GL account. For example, `4010`.
			 */
			id?: string;
			/**
			 * Name of the GL account. For example, `Sales Revenue Licensing`.
			 */
			name?: string;
			/**
			 * Relative API URL of the GL account.
			 */
			href?: string;
		};
		/**
		 * An alternative AR account to override the default GL AR account for the invoice line item.
		 */
		overrideOffsetGLAccount?: {
			/**
			 * System-assigned key for the GL account. For example, `263`.
			 */
			key?: string;
			/**
			 * GL account number. For example, `1103`.
			 */
			id?: string;
			/**
			 * GL account name. For example, `Accounts Receivable - Microcomputer`.
			 */
			name?: string;
			/**
			 * URL for the GL account. For example, `/objects/general-ledger/account/263`.
			 */
			href?: string;
		};
		/**
		 * For multi-currency companies, Sage Intacct calculates the base amount by applying the exchange rate from the header to the transaction amount. For example, `24115.65`.
		 */
		baseAmount?: string;
		/**
		 * Amount for the AR invoice line item in the transaction currency. For example, `16740.00`.
		 */
		txnAmount?: string;
		/**
		 * Memo or notes about the AR invoice line item. For example, `Replaces discontinued part`.
		 */
		memo?: string;
		/**
		 * Currency details for multi-currency companies.
		 */
		currency?: {
			/**
			 * Base currency for the invoice line item. For example, `USD`.
			 */
			baseCurrency?: string;
			/**
			 * Transaction currency for the invoice line item. For example, `EUR`.
			 */
			txnCurrency?: string;
			/**
			 * Exchange rate details used to calculate the base amount.
			 */
			exchangeRate?: {
				/**
				 * Exchange rate date used to calculate the base amount from the transaction amount. Returned in the format `YYYY-MM-DD`.
				 */
				date?: string;
				/**
				 * Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.
				 */
				rate?: number;
				/**
				 * Exchange rate type used to calculate the base amount from the transaction amount. For example, `-1`.
				 */
				typeId?: string;
			};
		};
		/**
		 * Payment information for the line item.
		 */
		paymentInformation?: {
			/**
			 * Total base amount that was paid. For example, `100.00`.
			 */
			totalBaseAmountPaid?: string;
			/**
			 * Total transaction amount that was paid. For example, `100.00`.
			 */
			totalTxnAmountPaid?: string;
			/**
			 * Total base amount selected for the payment. For example, `100.00`.
			 */
			totalBaseAmountSelectedForPayment?: string;
			/**
			 * Total transaction amount selected for the payment. For example, `100.00`.
			 */
			totalTxnAmountSelectedForPayment?: string;
		};
		/**
		 * Transaction allocation template for the line item, which distributes the invoice amount across specified dimensions.
		 */
		allocation?: {
			/**
			 * System-assigned key for the allocation. For example, `22`.
			 */
			key?: string;
			/**
			 * System-assigned ID for the allocation. For example, `Premium Allocation`.
			 */
			id?: string;
			/**
			 * Relative API URL of the allocation.
			 */
			href?: string;
		};
		/**
		 * Line number. For example, `1`.
		 */
		lineNumber?: number;
		/**
		 * Indicates if the line item is a subtotal, tax item, or neither.
		 */
		isSubtotal?: '' | 'subtotal' | 'tax';
		/**
		 * The base location of the line.
		 */
		baseLocation?: {
			/**
			 * Base location key. For example, `4`.
			 */
			key?: string;
			/**
			 * Unique identifier for the location. For example, `US`.
			 */
			id?: string;
			/**
			 * Name for the location. For example, `United States of America`.
			 */
			name?: string;
			/**
			 * URL endpoint for the location. For example, `/objects/company-config/location/1`.
			 */
			href?: string;
		};
		/**
		 * Entry date for the line item. Returned in the format `YYYY-MM-DD`.
		 */
		createdDate?: string;
		/**
		 * Meaningful name of AR account.
		 */
		accountLabel?: {
			/**
			 * System-assigned key for the account label. For example, `14`.
			 */
			key?: string;
			/**
			 * Meaningful name of the account. For example, `Accounts Receivable - Microcomputer`.
			 */
			id?: string;
			/**
			 * Name of the account label. For example, `Sales Midwest`.
			 */
			name?: string;
			/**
			 * URL for the account label. For example, `/objects/accounts-receivable/account-label/14`.
			 */
			href?: string;
		};
		/**
		 * Indicates whether the entry is summarized. (Construction subscription)
		 */
		isSummarized?: boolean;
		/**
		 * Retainage information for the line item. Retainage is a portion of the agreed upon contract price withheld until the work is substantially complete. (Construction subscription)
		 */
		retainage?: {
			/**
			 * If `true`, retainage applies to the line item.
			 */
			hasRetainage?: boolean;
			/**
			 * Retainage percentage for the line item. For example, `2.00`.
			 */
			percentage?: string;
			/**
			 * Base amount retained for the line item. For example, `20.00`.
			 */
			baseAmountRetained?: string;
			/**
			 * Transaction amount retained for the line item. For example, `20.00`.
			 */
			txnAmountRetained?: string;
			/**
			 * Transaction amount released for the line item. For example, `10.00`.
			 */
			txnAmountReleased?: string;
			/**
			 * Indicates whether retainage is released to pay.
			 */
			isReleased?: boolean;
			/**
			 * Indicates whether the line item is a retainage release.
			 */
			isReleaseLine?: boolean;
			/**
			 * The GL account where the system posts retainage offsets to this line item.
			 */
			offsetGLAccount?: {
				/**
				 * System-assigned key for the GL account. For example, `263`.
				 */
				key?: string;
				/**
				 * GL account number. For example, `1103`.
				 */
				id?: string;
				/**
				 * GL account name. For example, `Accounts Receivable - Microcomputer`.
				 */
				name?: string;
				/**
				 * URL endpoint for the GL account. For example, `/objects/general-ledger/account/263`.
				 */
				href?: string;
			};
		};
		/**
		 * Reference to the project contract. (Construction subscription)
		 */
		projectContract?: {
			/**
			 * Project contract key. For example, `1`.
			 */
			key?: string;
			/**
			 * Project contract ID. For example, `BTI-01`.
			 */
			id?: string;
			/**
			 * Project contract name. For example, `Berkeley Technology Inc - Contract 01`.
			 */
			name?: string;
			/**
			 * URL endpoint for the project contract. For example, `/objects/construction/project-contract/1`.
			 */
			href?: string;
		};
		/**
		 * Reference to a specific project contract line. (Construction subscription)
		 */
		projectContractLine?: {
			/**
			 * Project contract line key. For example, `4`.
			 */
			key?: string;
			/**
			 * Project contract line ID. For example, `Project-Contract-Line-04`.
			 */
			id?: string;
			/**
			 * Project contract line name. For example, `Project contract line 04`.
			 */
			name?: string;
			/**
			 * URL endpoint for the project contract line. For example, `/objects/construction/project-contract-line/4`.
			 */
			href?: string;
		};
		/**
		 * Tax entries for the AR invoice.
		 *
		 * Items: For VAT enabled transactions, invoice line items will have tax entries.
		 */
		taxEntries?: {
			/**
			 * System-assigned key for the tax entry. For example, `7149`.
			 */
			key?: string;
			/**
			 * Unique identifier for the tax entry. For example, `7149`.
			 */
			id?: string;
			/**
			 * Base tax amount. For example, `100.00`.
			 */
			baseTaxAmount?: string;
			/**
			 * Transaction tax amount. For example, `100.00`.
			 */
			txnTaxAmount?: string;
			/**
			 * Tax rate. For example, `1.0299`.
			 */
			taxRate?: number;
			/**
			 * Order Entry tax details associated with the invoice tax entry.
			 */
			orderEntryTaxDetail?: {
				/**
				 * Unique key for the Order Entry tax detail. For example, `1`.
				 */
				key?: string;
				/**
				 * Unique identifier for the Order Entry tax detail. For example, `Alaska Tax Detail`.
				 */
				id?: string;
				/**
				 * URL endpoint for the Order Entry tax detail. For example, `/objects/tax/order-entry-tax-detail/1`.
				 */
				href?: string;
			};
			/**
			 * Invoice line item that the invoice tax entry is associated with.
			 */
			invoiceLine?: {
				/**
				 * Unique identifier for the invoice line. For example, `100`.
				 */
				id?: string;
				/**
				 * Unique key for the invoice line. This value is the same as the `key` for this object. For example, `100`.
				 */
				key?: string;
				/**
				 * URL endpoint for the invoice line. For example, `/objects/accounts-receivable/invoice-line/100`.
				 */
				href?: string;
			};
		}[];
		/**
		 * The dimensions of the line.
		 */
		dimensions?: {
			/**
			 * Standard Sage Intacct dimension that allows you to create a hierarchy of locations to reflect how your company is organized.
			 */
			location?: {
				/**
				 * System-assigned key for the location. For example, `4`.
				 */
				key?: string;
				/**
				 * Unique identifier of the location. For example, `AU`.
				 */
				id?: string;
				/**
				 * Name of the location. For example, `Australia`.
				 */
				name?: string;
				/**
				 * URL endpoint for the location. For example, `/objects/company-config/location/4`.
				 */
				href?: string;
			};
			/**
			 * Standard Sage Intacct dimension that allows you to create a hierarchy of departments to reflect how your company is organized.
			 */
			department?: {
				/**
				 * System-assigned key for the department. For example, `9`.
				 */
				key?: string;
				/**
				 * Unique identifier of the department. For example, `01`.
				 */
				id?: string;
				/**
				 * Name of the department. For example, `Sales`.
				 */
				name?: string;
				/**
				 * URL endpoint for the department. For example, `/objects/company-config/department/9`.
				 */
				href?: string;
			};
			/**
			 * The employee of the dimensions.
			 */
			employee?: {
				/**
				 * System-assigned key for the employee. For example, `10`.
				 */
				key?: string;
				/**
				 * Unique identifier for the employee. For example, `EMP-10`.
				 */
				id?: string;
				/**
				 * Name for the employee. For example, `Thomas, Glenn`.
				 */
				name?: string;
				/**
				 * URL endpoint for the employee. For example, `/objects/company-config/employee/10`.
				 */
				href?: string;
			};
			/**
			 * The project of the dimensions.
			 */
			project?: {
				/**
				 * System-assigned key for the project. For example, `2`.
				 */
				key?: string;
				/**
				 * Unique identifier for the project. For example, `NET-XML30-2`.
				 */
				id?: string;
				/**
				 * Name for the project. For example, `Talcomp training`.
				 */
				name?: string;
				/**
				 * URL endpoint for the project. For example, `/objects/projects/project/2`.
				 */
				href?: string;
			};
			/**
			 * The customer of the dimensions.
			 */
			customer?: {
				/**
				 * System-assigned key for the customer. For example, `13`.
				 */
				key?: string;
				/**
				 * Unique identifier for the customer. For example, `CUST-13`.
				 */
				id?: string;
				/**
				 * Name for the customer. For example, `Jack In the Box`.
				 */
				name?: string;
				/**
				 * URL endpoint for the customer. For example, `/objects/accounts-receivable/customer/13`.
				 */
				href?: string;
			};
			/**
			 * The vendor of the dimensions.
			 */
			vendor?: {
				/**
				 * System-assigned key for the vendor. For example, `357`.
				 */
				key?: string;
				/**
				 * Unique identifier for the vendor. For example, `1605212096809`.
				 */
				id?: string;
				/**
				 * Name for the vendor. For example, `GenLab`.
				 */
				name?: string;
				/**
				 * URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/357`.
				 */
				href?: string;
			};
			/**
			 * The item of the dimensions.
			 */
			item?: {
				/**
				 * System-assigned key for the item. For example, `13`.
				 */
				key?: string;
				/**
				 * Unique identifier for the item. For example, `Case 13`.
				 */
				id?: string;
				/**
				 * Name for the item. For example, `Platform pack`.
				 */
				name?: string;
				/**
				 * URL endpoint for the item. For example, `/objects/inventory-control/item/13`.
				 */
				href?: string;
			};
			/**
			 * The warehouse of the dimensions.
			 */
			warehouse?: {
				/**
				 * System-assigned key for the warehouse. For example, `6`.
				 */
				key?: string;
				/**
				 * Unique identifier for the warehouse. For example, `WH01`.
				 */
				id?: string;
				/**
				 * Name for the warehouse. For example, `WH01`.
				 */
				name?: string;
				/**
				 * URL endpoint for the warehouse. For example, `/objects/inventory-control/warehouse/6`.
				 */
				href?: string;
			};
			/**
			 * The class of the dimensions.
			 */
			class?: {
				/**
				 * System-assigned key for the class. For example, `731`.
				 */
				key?: string;
				/**
				 * Unique identifier for the class. For example, `REST_CLS_001`.
				 */
				id?: string;
				/**
				 * Name for the class. For example, `Enterprises`.
				 */
				name?: string;
				/**
				 * URL endpoint for the class. For example, `/objects/company-config/class/731`.
				 */
				href?: string;
			};
			/**
			 * The task of the dimensions.
			 */
			task?: {
				/**
				 * Unique identifier for the task. For example, `1`.
				 */
				id?: string;
				/**
				 * System-assigned key for the task. For example, `1`.
				 */
				key?: string;
				/**
				 * Name for the task. For example, `Project Task`.
				 */
				name?: string;
				/**
				 * URL endpoint for the task. For example, `/objects/projects/task/1`.
				 */
				href?: string;
			};
			/**
			 * The cost type of the dimensions.
			 */
			costType?: {
				/**
				 * Unique identifier for the cost type. For example, `2`.
				 */
				id?: string;
				/**
				 * System-assigned key for the cost type. For example, `2`.
				 */
				key?: string;
				/**
				 * Name for the cost type. For example, `Project Expense`.
				 */
				name?: string;
				/**
				 * URL endpoint for the cost type. For example, `/objects/construction/cost-type/2`.
				 */
				href?: string;
			};
			/**
			 * The asset of the dimensions.
			 */
			asset?: {
				/**
				 * Unique identifier for the asset. For example, `A001`.
				 */
				id?: string;
				/**
				 * System-assigned key for the asset. For example, `1`.
				 */
				key?: string;
				/**
				 * Name for the asset. For example, `Laptop`.
				 */
				name?: string;
				/**
				 * URL endpoint for the asset. For example, `/objects/fixed-assets/asset/1`.
				 */
				href?: string;
			};
			/**
			 * The contract of the dimensions.
			 */
			contract?: {
				/**
				 * Unique identifier for the contract. For example, `CON-0045-1`.
				 */
				id?: string;
				/**
				 * System-assigned key for the contract. For example, `12`.
				 */
				key?: string;
				/**
				 * Name for the contract. For example, `ACME Widgets - Service`.
				 */
				name?: string;
				/**
				 * URL endpoint for the contract. For example, `/objects/contracts/contract/12`.
				 */
				href?: string;
			};
			/**
			 * The affiliate entity of the dimensions.
			 */
			affiliateEntity?: {
				/**
				 * System-assigned key for the affiliate entity. For example, `23`.
				 */
				key?: string;
				/**
				 * Unique identifier for the affiliate entity. For example, `AFF-23`.
				 */
				id?: string;
				/**
				 * URL endpoint for the affiliate entity. For example, `/objects/affiliate-entity/23`.
				 */
				href?: string;
				/**
				 * Name for the affiliate entity. For example, `100-USA`.
				 */
				name?: string;
			};
			/**
			 * The loan account of the dimensions.
			 */
			loanAccount?: {
				/**
				 * Unique identifier for the loan account. For example, `LN001`.
				 */
				id?: string;
				/**
				 * System-assigned key for the loan account. For example, `852`.
				 */
				key?: string;
				/**
				 * Name for the loan account. For example, `Business Loan`.
				 */
				name?: string;
				/**
				 * URL endpoint for the loan account. For example, `/objects/loan-management/loan-account/852`.
				 */
				href?: string;
			};
			/**
			 * Work order associated with the dimension.
			 */
			workOrder?: {
				/**
				 * System-assigned key for the work order. For example, `18`.
				 */
				key?: string;
				/**
				 * Unique identifier for the work order. For example, `WO-0017`.
				 */
				id?: string;
				/**
				 * Name for the work order. For example, `WO-India`.
				 */
				name?: string;
				/**
				 * URL endpoint for the work order. For example, `/objects/construction/work-order/18`.
				 */
				href?: string;
			};
		};
		/**
		 * Header level details for the AR invoice's line items.
		 */
		invoice?: {
			/**
			 * Identifier for the AR invoice. For example, `6`.
			 */
			id?: string;
			/**
			 * System-assigned key for the AR invoice. For example, `6`.
			 */
			key?: string;
			/**
			 * URL for the AR invoice. For example, `/objects/accounts-receivable/invoice/6`.
			 */
			href?: string;
		};
		/**
		 * The audit of the line.
		 */
		audit?: {
			/**
			 * Date and time when the record was created. Returned in the ISO 8601 format.
			 */
			createdDateTime?: string;
			/**
			 * Date and time when the record was last modified. Returned in the ISO 8601 format.
			 */
			modifiedDateTime?: string;
			/**
			 * This field has been deprecated. Use the `createdByUser` field instead.
			 */
			createdBy?: string;
			/**
			 * This field has been deprecated. Use the `modifiedByUser` field instead.
			 */
			modifiedBy?: string;
			/**
			 * The user who created the object.
			 */
			createdByUser?: {
				/**
				 * System-assigned key for the user. For example, `436`.
				 */
				key?: string;
				/**
				 * User login ID. For example, `JohnDoe`.
				 */
				id?: string;
				/**
				 * URL endpoint for the user. For example, `/objects/company-config/user/436`.
				 */
				href?: string;
			};
			/**
			 * The user who last modified this object.
			 */
			modifiedByUser?: {
				/**
				 * System-assigned key for the user. For example, `3086`.
				 */
				key?: string;
				/**
				 * User login ID. For example, `JaneDoe`.
				 */
				id?: string;
				/**
				 * URL endpoint for the user. For example, `/objects/company-config/user/3086`.
				 */
				href?: string;
			};
		};
	}[];
	/**
	 * The entity that the object is associated with. Objects created at the top level do not have an entity reference so the `key`, `id`, and `name` properties will be `null`.
	 */
	entity?: {
		/**
		 * System-assigned key for the entity. For example, `46`.
		 */
		key?: string;
		/**
		 * Unique identifier for the entity. For example, `CORP`.
		 */
		id?: string;
		/**
		 * Name for the entity. For example, `Corp`.
		 */
		name?: string;
		/**
		 * URL endpoint for the entity. For example, `/objects/company-config/entity/46`.
		 */
		href?: string;
	};
	/**
	 * RecordURL of the invoice.
	 */
	webURL?: string;
	/**
	 * The audit of the invoice.
	 */
	audit?: {
		/**
		 * Time of the submission. Returned in the ISO 8601 format.
		 */
		createdDateTime?: string;
		/**
		 * Date and time when the record was last modified. Returned in the ISO 8601 format.
		 */
		modifiedDateTime?: string;
		/**
		 * This field has been deprecated. Use the `createdByUser` field instead.
		 */
		createdBy?: string;
		/**
		 * This field has been deprecated. Use the `modifiedByUser` field instead.
		 */
		modifiedBy?: string;
		/**
		 * The user who created the object.
		 */
		createdByUser?: {
			/**
			 * System-assigned key for the user. For example, `436`.
			 */
			key?: string;
			/**
			 * User login ID. For example, `JohnDoe`.
			 */
			id?: string;
			/**
			 * URL endpoint for the user. For example, `/objects/company-config/user/436`.
			 */
			href?: string;
		};
		/**
		 * The user who last modified this object.
		 */
		modifiedByUser?: {
			/**
			 * System-assigned key for the user. For example, `3086`.
			 */
			key?: string;
			/**
			 * User login ID. For example, `JaneDoe`.
			 */
			id?: string;
			/**
			 * URL endpoint for the user. For example, `/objects/company-config/user/3086`.
			 */
			href?: string;
		};
	};
};

/**
 * Get an invoice
 * Returns information about a specific invoice by its key.
 */
export async function getInvoice(
	this: EndpointFunctionThis,
	payload: {
		input: GetInvoiceInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetInvoiceOutput> {
	const response = await this.endpointCaller<GetInvoiceOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'getInvoice',
		},
		payload,
	);
	return response.output;
}
