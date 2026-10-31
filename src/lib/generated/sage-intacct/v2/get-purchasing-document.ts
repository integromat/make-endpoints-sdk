// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetPurchasingDocumentInput = {
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

export type GetPurchasingDocumentOutput = {
	/**
	 * System-assigned key for the purchasing document. For example, `66`.
	 */
	key?: string;
	/**
	 * System-assigned key for the purchasing document. For example, `66`.
	 */
	id?: string;
	/**
	 * URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Invoice/66`.
	 */
	href?: string;
	/**
	 * Name or other unique ID for the purchasing document. For example, `Purchase Invoice-PO-O122`.
	 */
	documentId?: string;
	/**
	 * Document number for the purchasing document. If the transaction definition does not have a numbering sequence configured, provide a number to identify the transaction. For example, `PO-O122`.
	 */
	documentNumber?: string;
	/**
	 * Type of the associated transaction. For example, `Purchase Invoice`.
	 */
	documentType?: string;
	/**
	 * State of the purchasing document.
	 */
	state?:
		| ''
		| 'submitted'
		| 'approved'
		| 'partiallyApproved'
		| 'declined'
		| 'draft'
		| 'pending'
		| 'closed'
		| 'inProgress'
		| 'converted'
		| 'partiallyConverted'
		| 'exception'
		| 'analyzing';
	/**
	 * Indicates whether the document has been printed.
	 */
	isPrinted?: boolean;
	/**
	 * Indicates whether the transaction is a back order.
	 */
	isBackordered?: boolean;
	/**
	 * Subtotal of the document in base currency. For example, `50.10`.
	 */
	subtotal?: string;
	/**
	 * Subtotal of the document in transaction currency. For example, `51.10`.
	 */
	subtotalInTxnCurrency?: string;
	/**
	 * The sum of values across all lines in the document. For example, `100.10`.
	 */
	total?: string;
	/**
	 * Total in the transaction currency. For example, `100.11`.
	 */
	totalInTxnCurrency?: string;
	/**
	 * Base currency for the transaction. For example, `USD`.
	 */
	baseCurrency?: string;
	/**
	 * Currency used for the transaction. For example, `USD`.
	 */
	txnCurrency?: string;
	/**
	 * Exchange rate details used to calculate the base amount.
	 */
	exchangeRate?: {
		/**
		 * Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid. Use the format `YYYY-MM-DD`.
		 */
		date?: string;
		/**
		 * Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.
		 */
		rate?: string;
		/**
		 * Exchange rate type used to calculate the base amount from the transaction amount. For example, `1`.
		 */
		typeId?: string;
		/**
		 * The name of exchange rate type. For example, `Intacct Daily Rate`.
		 */
		typeName?: string;
	};
	/**
	 * Date on the purchasing document. Use the format `YYYY-MM-DD`.
	 */
	txnDate?: string;
	/**
	 * Due date for the purchasing document. Use the format `YYYY-MM-DD`.
	 */
	dueDate?: string;
	/**
	 * Indicates whether the purchasing document is system generated.
	 */
	isSystemGeneratedDocument?: boolean;
	/**
	 * The date on which purchasing document posts to the General Ledger. Use the format `YYYY-MM-DD`.
	 */
	postingDate?: string;
	/**
	 * Reference to another document, as needed. For example, `PURCHASE-100`.
	 */
	referenceNumber?: string;
	/**
	 * The number by which to reference a bill or other vendor document. A number is required only if Accounts Payable is configured to require numbers on bills, adjustments, and recurring bills. For example, `A2330-12`.
	 */
	vendorDocumentNumber?: string;
	/**
	 * Notes about the purchasing document. For example, `Fast order`.
	 */
	notes?: string;
	/**
	 * Text to appear on the printed document. For example, `Lowry solutions`.
	 */
	memo?: string;
	/**
	 * Payment status for the transaction.
	 */
	paymentStatus?: '' | 'paid' | 'partiallyPaid' | 'selected' | 'open';
	/**
	 * Indicates the date after which the transaction should be canceled. Use the format `YYYY-MM-DD`.
	 */
	cancelAfterDate?: string;
	/**
	 * The date before which goods cannot be shipped. Use the format `YYYY-MM-DD`.
	 */
	doNotShipBeforeDate?: string;
	/**
	 * The date after which goods cannot be shipped. Use the format `YYYY-MM-DD`.
	 */
	doNotShipAfterDate?: string;
	/**
	 * The date the customer requests the goods to arrive on their premises. The default is the due date. Use the format `YYYY-MM-DD`.
	 */
	requestedShippingDate?: string;
	/**
	 * The date the vendor promised to deliver the goods. Use the format `YYYY-MM-DD`.
	 */
	promisedDate?: string;
	/**
	 * Valid start date of a purchase order or purchase contract. Use the format `YYYY-MM-DD`.
	 */
	contractStartDate?: string;
	/**
	 * Valid end date of a purchase order or purchase contract. Use the format `YYYY-MM-DD`.
	 */
	contractEndDate?: string;
	/**
	 * Default retainage percentage. For example, `50.10`.
	 */
	retainagePercent?: string;
	/**
	 * Contacts associated with the purchasing document.
	 */
	contacts?: {
		/**
		 * Primary contact for the purchasing document.
		 */
		primary?: {
			/**
			 * Unique key for the primary contact. For example, `13`.
			 */
			key?: string;
			/**
			 * Unique ID for the primary contact. For example, `Main contact`.
			 */
			id?: string;
			/**
			 * URL endpoint for the contact. For example, `/objects/company-config/contact-version/13`.
			 */
			href?: string;
		};
		/**
		 * Contact to ship to.
		 */
		shipTo?: {
			/**
			 * Unique key for the contact to ship to. For example, `43`.
			 */
			key?: string;
			/**
			 * Unique ID for the contact to ship to. For example, `shipping contact`.
			 */
			id?: string;
			/**
			 * URL endpoint for the contact to ship to. For example, `/objects/company-config/contact-version/43`.
			 */
			href?: string;
		};
		/**
		 * Contact to bill to.
		 */
		billTo?: {
			/**
			 * Unique key for the contact to bill to. For example, `44`.
			 */
			key?: string;
			/**
			 * Unique ID for the contact to bill to. For example, `Main billing contact`.
			 */
			id?: string;
			/**
			 * URL endpoint for the contact to bill to. For example, `/objects/company-config/contact-version/44`.
			 */
			href?: string;
		};
		/**
		 * Contact to deliver to.
		 */
		deliverTo?: {
			/**
			 * Unique key for the contact to deliver to. For example, `66`.
			 */
			key?: string;
			/**
			 * Unique ID for the contact to deliver to. For example, `Main deliver-to contact`.
			 */
			id?: string;
			/**
			 * URL endpoint for the contact to deliver to. For example, `/objects/company-config/contact-version/66`.
			 */
			href?: string;
		};
	};
	/**
	 * Shipping method for the order.
	 */
	shippingMethod?: {
		/**
		 * Unique key for the shipping method. For example, `77`.
		 */
		key?: string;
		/**
		 * Unique ID for the shipping method. For example, `Air`.
		 */
		id?: string;
		/**
		 * URL endpoint for the shipping method. For example, `/objects/accounts-receivable/shipping-method/77`.
		 */
		href?: string;
	};
	/**
	 * Accounts Payable (AP) term, which determines the expiration date for quotes and the due date for invoices.
	 */
	paymentTerm?: {
		/**
		 * URL endpoint for the AP term. For example, `/objects/accounts-payable/term/75`.
		 */
		href?: string;
		/**
		 * Unique key for the AP term. For example, `75`.
		 */
		key?: string;
		/**
		 * Unique ID for the AP term. For example, `10 Days`.
		 */
		id?: string;
	};
	/**
	 * Transaction definition that is associated with this transaction.
	 */
	txnDefinition?: {
		/**
		 * Unique key for the transaction definition. For example, `11`.
		 */
		key?: string;
		/**
		 * Name of the transaction definition. For example, `Purchase Invoice`.
		 */
		id?: string;
		/**
		 * URL endpoint for the transaction definition. For example, `/objects/purchasing/txn-definition/11`.
		 */
		href?: string;
	};
	/**
	 * The source transaction from which the purchasing document was created.
	 */
	sourceDocument?: {
		/**
		 * Unique key for the source document. For example, `44`.
		 */
		key?: string;
		/**
		 * Unique ID for the source document. For example, `Purchase Order-PO0022`.
		 */
		id?: string;
		/**
		 * Document type of the source document. For example, `Purchase Order`.
		 */
		documentType?: string;
		/**
		 * URL endpoint for the source document. For example, `/objects/purchasing/document::Purchase%20Order/44`.
		 */
		href?: string;
	};
	/**
	 * The associated tax solution for the transaction. Tax solutions are available for different countries, for example Australia GST or South Africa VAT.
	 */
	taxSolution?: {
		/**
		 * Unique key for the tax solution. For example, `44`.
		 */
		key?: string;
		/**
		 * Unique ID for the tax solution. For example, `simpleTax`.
		 */
		id?: string;
		/**
		 * URL endpoint for the tax solution. For example, `/objects/taxsolution/44`.
		 */
		href?: string;
		/**
		 * Calculation method used for the tax solution.
		 */
		taxCalculationMethod?: '' | 'noTax' | 'simpleTax' | 'advancedTax' | 'avaTax' | 'VAT';
		/**
		 * Indicates whether to show multiple taxes per line.
		 */
		showMultilineTax?: boolean;
	};
	/**
	 * Vendor associated with the purchasing document.
	 */
	vendor?: {
		/**
		 * Unique key for the vendor. For example, `15`.
		 */
		key?: string;
		/**
		 * Unique ID for the vendor. For example, `ALPHA001`.
		 */
		id?: string;
		/**
		 * Name of the vendor. For example, `ALPH Apartments`.
		 */
		name?: string;
		/**
		 * URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/15`.
		 */
		href?: string;
	};
	/**
	 * The bill associated with this purchasing document.
	 */
	bill?: {
		/**
		 * Unique key for the AP bill. For example, `1`.
		 */
		key?: string;
		/**
		 * Unique ID for the AP bill. For example, `1`.
		 */
		id?: string;
		/**
		 * URL endpoint for the AP bill. For example, `/objects/accounts-payable/bill/1`.
		 */
		href?: string;
	};
	/**
	 * Supporting document for this transaction.
	 */
	attachment?: {
		/**
		 * Unique key for the attachment. For example, `41`.
		 */
		key?: string;
		/**
		 * Unique ID for the attachment. For example, `Balance attachment`.
		 */
		id?: string;
		/**
		 * URL endpoint for the attachment. For example, `/objects/company-config/attachment/41`.
		 */
		href?: string;
	};
	/**
	 * The audit of the purchasing document.
	 */
	audit?: {
		/**
		 * Time of the submission. Use the ISO 8601 format.
		 */
		createdDateTime?: string;
		/**
		 * Date and time when the record was last modified. Use the ISO 8601 format.
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
	/**
	 * Record URL for the Purchasing document.
	 */
	webURL?: string;
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
	 * Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
	 */
	status?: '' | 'active' | 'inactive';
	/**
	 * Specifies whether the transaction is a regular invoice (invoice) or an electronic invoice (eInvoice).
	 */
	invoiceType?: '' | 'invoice' | 'eInvoice';
	/**
	 * Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities. Specifies the invoice mode based on invoiceType. For eInvoice, specify b1 or s1. Supported values: - `b1` - Submission of an e-invoice for goods. - `s1` - Submission of an e-invoice for services. Leave this field blank when `invoiceType` is `invoice`.
	 */
	invoiceMode?: '' | 'b1' | 's1';
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
	 * Details about the expected scope of work to be performed or materials to be delivered. Use 4000 or fewer characters. (Construction subscription)
	 */
	scope?: string;
	/**
	 * Details related to items that are explicitly included in the terms of this document. Use 4000 or fewer characters. (Construction subscription) For example, `Includes drive through building`.
	 */
	inclusions?: string;
	/**
	 * Details related to items that are explicitly excluded in the terms of this document. Use 4000 or fewer characters. (Construction subscription) For example, `Excludes additional purchase`.
	 */
	exclusions?: string;
	/**
	 * Additional terms or performance obligations. Use 4000 or fewer characters. (Construction subscription)
	 */
	terms?: string;
	/**
	 * Additional details for Quote or Requisition and Order type documents. (Construction subscription)
	 */
	schedule?: {
		/**
		 * Scheduled start date. Use the format `YYYY-MM-DD`.
		 */
		scheduledStartDate?: string;
		/**
		 * Original scheduled date for completion of the work. Use the format `YYYY-MM-DD`.
		 */
		scheduledCompletionDate?: string;
		/**
		 * Actual start date. Use the format `YYYY-MM-DD`.
		 */
		actualStartDate?: string;
		/**
		 * Date the work is actually complete. Use the format `YYYY-MM-DD`.
		 */
		actualCompletionDate?: string;
		/**
		 * Revised completion date for the work (caused by changes). Use the format `YYYY-MM-DD`.
		 */
		revisedCompletionDate?: string;
		/**
		 * Date the work is considered substantially complete. Typically used as a milestone to identify when payment obligations are due. Use the format `YYYY-MM-DD`.
		 */
		substantialCompletionDate?: string;
		/**
		 * Date when a formal notice to proceed was given. Use the format `YYYY-MM-DD`.
		 */
		noticeToProceedDate?: string;
		/**
		 * Date when a response is expected from an external party. Use the format `YYYY-MM-DD`.
		 */
		responseDueDate?: string;
		/**
		 * Date the related contract document was formally executed. Use the format `YYYY-MM-DD`.
		 */
		executedOnDate?: string;
		/**
		 * Details about any impacts on the current schedule. Use 100 or fewer characters. For example, `None`.
		 */
		scheduleImpactNotes?: string;
	};
	/**
	 * The internal reference of the purchasing document.
	 */
	internalReference?: {
		/**
		 * Reference number for the internal document. For example, `INT-01`.
		 */
		referenceNumber?: string;
		/**
		 * Reference to the employee who initiated the document.
		 */
		initiatedBy?: {
			/**
			 * System-assigned key for the employee. For example, `2`.
			 */
			key?: string;
			/**
			 * Unique identifier for the employee. For example, `dhatchet`.
			 */
			id?: string;
			/**
			 * Name for the employee. For example, `David Hatcher`.
			 */
			name?: string;
			/**
			 * URL endpoint for the employee. For example, `/objects/company-config/employee/2`.
			 */
			href?: string;
		};
		/**
		 * Employee who provided verbal approval.
		 */
		verbalApprovalBy?: {
			/**
			 * System-assigned key for the employee. For example, `2`.
			 */
			key?: string;
			/**
			 * Unique identifier for the employee. For example, `sdye`.
			 */
			id?: string;
			/**
			 * Name for the employee. For example, `Sara Dye`.
			 */
			name?: string;
			/**
			 * URL endpoint for the employee. For example, `/objects/company-config/employee/2`.
			 */
			href?: string;
		};
		/**
		 * Employee who issued the internal document.
		 */
		issuedBy?: {
			/**
			 * System-assigned key for the employee. For example, `25`.
			 */
			key?: string;
			/**
			 * Unique identifier for the employee. For example, `amarquess`.
			 */
			id?: string;
			/**
			 * Name for the employee. For example, `Adam Marquess`.
			 */
			name?: string;
			/**
			 * URL endpoint for the employee. For example, `/objects/company-config/employee/25`.
			 */
			href?: string;
		};
		/**
		 * Date the document was issued. Use the format `YYYY-MM-DD`.
		 */
		issuedOnDate?: string;
		/**
		 * Employee who approved the document.
		 */
		approvedBy?: {
			/**
			 * System-assigned key for the employee. For example, `1`.
			 */
			key?: string;
			/**
			 * Unique identifier for the employee. For example, `treser`.
			 */
			id?: string;
			/**
			 * Name for the employee. For example, `Tim Reser`.
			 */
			name?: string;
			/**
			 * URL endpoint for the employee. For example, `/objects/company-config/employee/1`.
			 */
			href?: string;
		};
		/**
		 * Date the document was approved. Use the format `YYYY-MM-DD`.
		 */
		approvedOnDate?: string;
		/**
		 * Employee who signed the internal document.
		 */
		signedBy?: {
			/**
			 * System-assigned key for the employee. For example, `32`.
			 */
			key?: string;
			/**
			 * Unique identifier for the employee. For example, `broberts`.
			 */
			id?: string;
			/**
			 * Name for the employee. For example, `Bob Roberts`.
			 */
			name?: string;
			/**
			 * URL endpoint for the employee. For example, `/objects/company-config/employee/32`.
			 */
			href?: string;
		};
		/**
		 * Date the document was signed. Use the format `YYYY-MM-DD`.
		 */
		signedOnDate?: string;
		/**
		 * Internal source. For example, `Internal`.
		 */
		source?: string;
		/**
		 * Internal source reference number. For example, `REF-INT-01`.
		 */
		sourceReferenceNumber?: string;
	};
	/**
	 * The external reference of the purchasing document.
	 */
	externalReference?: {
		/**
		 * Reference number for the external document. For example, `A23`.
		 */
		referenceNumber?: string;
		/**
		 * Reference to the contact who provided verbal approval.
		 */
		verbalApprovalBy?: {
			/**
			 * System-assigned key for the contact. For example, `6`.
			 */
			key?: string;
			/**
			 * Unique identifier for the contact. For example, `Johnson`.
			 */
			id?: string;
			/**
			 * URL endpoint for the contact. For example, `/objects/company-config/contact/6`.
			 */
			href?: string;
		};
		/**
		 * Contact who approved the document.
		 */
		approvedBy?: {
			/**
			 * System-assigned key for the contact. For example, `51`.
			 */
			key?: string;
			/**
			 * Unique identifier for the contact. For example, `Jagadish`.
			 */
			id?: string;
			/**
			 * URL endpoint for the contact. For example, `/objects/company-config/contact/51`.
			 */
			href?: string;
		};
		/**
		 * Date the document was approved. Use the format `YYYY-MM-DD`.
		 */
		approvedOnDate?: string;
		/**
		 * Contact who signed the document.
		 */
		signedBy?: {
			/**
			 * System-assigned key for the contact. For example, `200`.
			 */
			key?: string;
			/**
			 * Unique identifier for the contact. For example, `Modulus Industries`.
			 */
			id?: string;
			/**
			 * URL endpoint for the contact. For example, `/objects/company-config/contact/200`.
			 */
			href?: string;
		};
		/**
		 * Date the document was signed. Use the format `YYYY-MM-DD`.
		 */
		signedOnDate?: string;
	};
	/**
	 * Performance bond details from the vendor or a company for an order. (Construction subscription)
	 */
	performanceBond?: {
		/**
		 * Set to `true` if a performance bond is required.
		 */
		isRequired?: boolean;
		/**
		 * Set to `true` if a performance bond was received.
		 */
		isReceived?: boolean;
		/**
		 * Amount of the performance bond. For example, `1000.00`.
		 */
		amount?: string;
		/**
		 * Vendor for the related surety company providing the performance bond. (Construction subscription)
		 */
		vendor?: {
			/**
			 * Unique key for the vendor. For example, `11`.
			 */
			key?: string;
			/**
			 * Unique ID for the vendor. For example, `VND-IND-0081`.
			 */
			id?: string;
			/**
			 * User-specified name for the vendor. For example, `Vendor-India-0081`.
			 */
			name?: string;
			/**
			 * URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/11`.
			 */
			href?: string;
		};
	};
	/**
	 * Payment bond details from the vendor or a company for an order. (Construction subscription)
	 */
	paymentBond?: {
		/**
		 * Set to `true` if a payment bond is required.
		 */
		isRequired?: boolean;
		/**
		 * Set to `true` if a payment bond was received.
		 */
		isReceived?: boolean;
		/**
		 * Amount of the payment bond. For example, `1000.00`.
		 */
		amount?: string;
		/**
		 * Vendor for the related surety company providing the payment bond. (Construction subscription)
		 */
		vendor?: {
			/**
			 * System-assigned key for the vendor. For example, `21`.
			 */
			key?: string;
			/**
			 * Unique ID for the vendor. For example, `VND-IND-0081`.
			 */
			id?: string;
			/**
			 * User-specified name for the vendor. For example, `Vendor-India-0081`.
			 */
			name?: string;
			/**
			 * URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/21`.
			 */
			href?: string;
		};
	};
	/**
	 * Primary document related details. Calculated when the transaction is a change order. (Construction subscription)
	 */
	primaryDocumentDetails?: {
		/**
		 * Total quantity converted to a downstream document from the original quantity entered. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.
		 */
		totalQuantityConverted?: string;
		/**
		 * Total price converted to a downstream document from the original price entered. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.
		 */
		totalPriceConverted?: string;
		/**
		 * Total amount converted to a downstream document from the original amount entered. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.
		 */
		totalAmountConverted?: string;
		/**
		 * Total amount remaining after a partial conversion of this transaction. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.
		 */
		totalAmountRemaining?: string;
		/**
		 * Total quantity remaining after a partial conversion of this transaction. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.
		 */
		totalQuantityRemaining?: string;
		/**
		 * Scheduled start date of the downstream document. Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.
		 */
		scheduledStartDate?: string;
		/**
		 * Actual start date of the downstream document. Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.
		 */
		actualStartDate?: string;
		/**
		 * Revised completion date of the downstream document for the work (caused by changes). Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.
		 */
		revisedCompletionDate?: string;
		/**
		 * Internal reference number of the downstream document. Set when the transaction is a change order. (Construction subscription) For example, `INT-01`.
		 */
		internalReferenceNumber?: string;
		/**
		 * Internal approved on date of the downstream document. Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.
		 */
		internalApprovedOnDate?: string;
		/**
		 * Internal employee who approved the downstream document. Set when the transaction is a change order. (Construction subscription)
		 */
		internalApprovedBy?: {
			/**
			 * System-assigned key for the employee. For example, `1`.
			 */
			key?: string;
			/**
			 * Unique identifier for the employee. For example, `timreser`.
			 */
			id?: string;
			/**
			 * Name for the employee. For example, `Tim Reser`.
			 */
			name?: string;
			/**
			 * URL endpoint for the employee. For example, `/objects/company-config/employee/1`.
			 */
			href?: string;
		};
		/**
		 * External reference number of the downstream document. Set when the transaction is a change order. (Construction subscription) For example, `EXT-01`.
		 */
		externalReferenceNumber?: string;
		/**
		 * External approved on date of the downstream document. Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.
		 */
		externalApprovedOnDate?: string;
		/**
		 * External contact who approved the downstream document. Set when the transaction is a change order. (Construction subscription)
		 */
		externalApprovedBy?: {
			/**
			 * System-assigned key for the contact. For example, `1`.
			 */
			key?: string;
			/**
			 * Unique identifier for the contact. For example, `Johnson`.
			 */
			id?: string;
			/**
			 * URL endpoint for the contact. For example, `/objects/company-config/contact/1`.
			 */
			href?: string;
		};
	};
	/**
	 * Revision details post change order. (Construction subscription)
	 */
	revision?: {
		/**
		 * Whether the document has changes applied. (Construction subscription)
		 */
		isDocumentChanged?: boolean;
		/**
		 * Revised total. (Construction subscription) For example, `1000.00`.
		 */
		revisedTotal?: string;
		/**
		 * Revised subtotal. (Construction subscription) For example, `1000.00`.
		 */
		revisedSubTotal?: string;
		/**
		 * Revised total in transaction currency. (Construction subscription) For example, `1000.00`.
		 */
		revisedTotalInTxnCurrency?: string;
		/**
		 * Revised subtotal in transaction currency. (Construction subscription) For example, `1000.00`.
		 */
		revisedSubTotalInTxnCurrency?: string;
		/**
		 * Log number for tracking the number of changes applied to a source transaction. Default 0 for a source transaction, 1 for a change transaction. (Construction subscription) For example, `1`.
		 */
		changeLogNumber?: number;
	};
	/**
	 * Document ID of the source transaction when updating a change order. Set when the transaction is a change order. (Construction subscription) For example, `Invoice-PO#0140#inv`.
	 */
	relatedDocumentNumber?: string;
	/**
	 * Draft changes total. Calculated when the transaction is a change order. (Construction subscription) For example, `1000.00`.
	 */
	draftChangesTotal?: string;
	/**
	 * Posted changes total. Calculated when the transaction is a change order. (Construction subscription) For example, `1000.00`.
	 */
	postedChangesTotal?: string;
	/**
	 * The original transaction amount before any changes or adjustments. Calculated when the transaction is a change order. (Construction subscription) For example, `100.0000000000`.
	 */
	originalAmount?: string;
	/**
	 * Project associated with the purchasing document.
	 */
	project?: {
		/**
		 * System-assigned unique key for the project. For example, `2`.
		 */
		key?: string;
		/**
		 * Unique identifier of the project. For example, `NET-XML30-2`.
		 */
		id?: string;
		/**
		 * Name of the project. For example, `Talcomp training`.
		 */
		name?: string;
		/**
		 * URL endpoint for the project. For example, `/objects/projects/project/2`.
		 */
		href?: string;
	};
	/**
	 * Lines of the purchasing document.
	 *
	 * Items: Line items in a purchasing document represent purchasing transactions.
	 */
	lines?: {
		/**
		 * System-assigned unique key for the purchasing document line item. For example, `44`.
		 */
		key?: string;
		/**
		 * ID for the purchasing document line item. This value is the same as key for this object. For example, `44`.
		 */
		id?: string;
		/**
		 * URL endpoint for the purchasing document line item. For example, `/objects/purchasing/document-line::Purchase%20Invoice/44`.
		 */
		href?: string;
		/**
		 * The type of transaction document. For example, `Purchase Invoice`.
		 */
		documentType?: string;
		/**
		 * Line number for the document line. For example, `1`.
		 */
		lineNumber?: number;
		/**
		 * Item associated with the document line.
		 */
		item?: {
			/**
			 * Unique key for the item. For example, `10`.
			 */
			key?: string;
			/**
			 * ID for the item. For example, `MX001`.
			 */
			id?: string;
			/**
			 * URL endpoint for the item. For example, `/objects/inventory-control/item/10`.
			 */
			href?: string;
		};
		/**
		 * Description of the line item. For example, `Computer`.
		 */
		lineDescription?: string;
		/**
		 * Memo about the document line item. For example, `Payment ACH`.
		 */
		memo?: string;
		/**
		 * Unit associated with this document line item. For example, `Each`.
		 */
		unit?: string;
		/**
		 * Quantity associated with this document line item. For example, `40.10`.
		 */
		quantity?: string;
		/**
		 * Unit quantity associated with this document line item. For example, `10.10`.
		 */
		unitQuantity?: string;
		/**
		 * Unit price associated with this line item. For example, `10.50`.
		 */
		unitPrice?: string;
		/**
		 * The price is computed based on unit factor. For example, `33.66`.
		 */
		price?: string;
		/**
		 * Quantity of items converted to a downstream document from the original quantity entered. For example, `5.10`.
		 */
		quantityConverted?: string;
		/**
		 * Suggested retail price for the item. For example, `10.44`.
		 */
		retailPrice?: string;
		/**
		 * Price of converted document. For example, `200`.
		 */
		priceConverted?: string;
		/**
		 * Tolerance limit allowed for the quantity to vary from the parent document. For example, `10.55`.
		 */
		quantityToleranceVariance?: string;
		/**
		 * Tolerance limit allowed for the price to vary from the parent document. For example, `22.10`.
		 */
		priceToleranceVariance?: string;
		/**
		 * The audit of the line.
		 */
		audit?: {
			/**
			 * Date and time when the record was created. Use the ISO 8601 format.
			 */
			createdDateTime?: string;
			/**
			 * Date and time when the record was last modified. Use the ISO 8601 format.
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
		/**
		 * Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
		 */
		status?: '' | 'active' | 'inactive';
		/**
		 * Cost method associated with the document line item.
		 */
		costMethod?: '' | 'standard' | 'average' | 'FIFO' | 'LIFO';
		/**
		 * Source purchasing document.
		 */
		sourceDocument?: {
			/**
			 * Unique key for the purchasing document. For example, `77`.
			 */
			key?: string;
			/**
			 * The source transaction from which the purchasing document was created. For example, `Purchase Order-PO0022`.
			 */
			id?: string;
			/**
			 * Type of the purchasing document. For example, `Purchase Order`.
			 */
			documentType?: string;
			/**
			 * URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/77`.
			 */
			href?: string;
		};
		/**
		 * Source document line that needs to be converted.
		 */
		sourceDocumentLine?: {
			/**
			 * Unique key for the purchasing document line item. For example, `2234`.
			 */
			key?: string;
			/**
			 * ID for the purchasing document line item. For example, `2234`.
			 */
			id?: string;
			/**
			 * Type of purchasing document. For example, `Purchase Order`.
			 */
			documentType?: string;
			/**
			 * URL endpoint for the purchasing document line item. For example, `/objects/purchasing/document-line::Purchase%20Order/2234`.
			 */
			href?: string;
		};
		/**
		 * Base currency for the transaction. For example, `USD`.
		 */
		baseCurrency?: string;
		/**
		 * Currency used for the transaction. For example, `CAD`.
		 */
		txnCurrency?: string;
		/**
		 * Transaction price. For example, `10.00`.
		 */
		priceInTxnCurrency?: string;
		/**
		 * Indicates whether the line is billable.
		 */
		isBillable?: boolean;
		/**
		 * Indicates whether the line has been billed.
		 */
		isBilled?: boolean;
		/**
		 * Tax rate for the document line item. For example, `10.050`.
		 */
		taxRate?: string;
		/**
		 * The line-level tax amount in base currency. For example, `10.50`.
		 */
		taxInBaseCurrency?: string;
		/**
		 * The line-level tax amount in transaction currency. For example, `40.50`.
		 */
		taxInTxnCurrency?: string;
		/**
		 * Discount applied to the line item. For example, `10.25`.
		 */
		discount?: string;
		/**
		 * Indicates whether the line item is taxable.
		 */
		enableTax?: boolean;
		/**
		 * Quantity of the item remaining. For example, `10.10`.
		 */
		quantityRemaining?: string;
		/**
		 * Conversion type used for the transaction.
		 */
		conversionType?: '' | 'quantity' | 'price';
		/**
		 * The dimensions of the line.
		 */
		dimensions?: {
			/**
			 * Location associated with the document line.
			 */
			location?: {
				/**
				 * Unique key for the location. For example, `22`.
				 */
				key?: string;
				/**
				 * ID for the location. For example, `Arizona`.
				 */
				id?: string;
				/**
				 * Name for the location. For example, `California`.
				 */
				name?: string;
				/**
				 * URL endpoint for the location. For example, `/objects/company-config/location/22`.
				 */
				href?: string;
			};
			/**
			 * Department associated with the document line.
			 */
			department?: {
				/**
				 * Unique key for the department. For example, `9`.
				 */
				key?: string;
				/**
				 * Unique ID for the department. For example, `Sales`.
				 */
				id?: string;
				/**
				 * Name for the department. For example, `Sales and Marketing`.
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
			 * Project associated with the document line.
			 */
			project?: {
				/**
				 * Unique key for the associated project. For example, `2`.
				 */
				key?: string;
				/**
				 * ID for the associated project. For example, `NET-XML30-2`.
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
			 * Warehouse associated with the document line.
			 */
			warehouse?: {
				/**
				 * Unique key for the warehouse. For example, `6`.
				 */
				key?: string;
				/**
				 * Unique ID for the warehouse. For example, `WH01`.
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
			 * Task associated with the document line.
			 */
			task?: {
				/**
				 * ID for the associated task. For example, `TSK01`.
				 */
				id?: string;
				/**
				 * Unique key for the associated task. For example, `1`.
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
		 * The date the customer requests the goods to arrive on their premises. The default is the due date. Use the format `YYYY-MM-DD`.
		 */
		requestedShippingDate?: string;
		/**
		 * The date the goods should be shipped so they arrive when the customer needs them. Use the format `YYYY-MM-DD`.
		 */
		shipByDate?: string;
		/**
		 * Indicates the date after which the order can be canceled. Use the format `YYYY-MM-DD`.
		 */
		cancelAfterDate?: string;
		/**
		 * Do not ship before this date. Use the format `YYYY-MM-DD`.
		 */
		doNotShipBeforeDate?: string;
		/**
		 * Do not ship after this date. Use the format `YYYY-MM-DD`.
		 */
		doNotShipAfterDate?: string;
		/**
		 * Promised by date. Use the format `YYYY-MM-DD`.
		 */
		deliveryDueDate?: string;
		/**
		 * Delivery method applies only to transaction documents that are configured as supplies purchase transactions. The delivery method is not populated for transaction documents that are not used for supplies purchase transactions. For more information, see [Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Inventory_Control/Setting_up_Inventory_Control/configure-inventory-control-FbF.htm#SuppliesInventory).
		 */
		deliveryMethod?: {
			/**
			 * Unique key for the delivery method. For example, `77`.
			 */
			key?: string;
			/**
			 * Unique ID for the delivery method. For example, `Air`.
			 */
			id?: string;
			/**
			 * URL endpoint for the delivery method. For example, `/objects/accounts-receivable/shipping-method/77`.
			 */
			href?: string;
		};
		/**
		 * Date the order was confirmed. Use the format `YYYY-MM-DD`.
		 */
		orderConfirmationDate?: string;
		/**
		 * The state of the document line in the approval process.
		 */
		approvalState?: '' | 'submitted' | 'pendingApproval' | 'approved' | 'declined';
		/**
		 * Transaction allocation template for the line item, which distributes the amount across specified dimensions.
		 */
		allocation?: {
			/**
			 * Unique key for the allocation. For example, `14`.
			 */
			key?: string;
			/**
			 * ID for the allocation. For example, `Alloc1-WBS-US`.
			 */
			id?: string;
			/**
			 * URL endpoint for the allocation. For example, `/objects/general-ledger/txn-allocation-template/14`.
			 */
			href?: string;
		};
		/**
		 * If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details in the purchasing transaction.
		 */
		taxSchedule?: {
			/**
			 * Unique key for the tax schedule. For example, `19`.
			 */
			key?: string;
			/**
			 * Unique ID of the tax schedule. For example, `Sale Goods Standard`.
			 */
			id?: string;
			/**
			 * URL endpoint for the tax schedule. For example, `/objects/tax/purchasing-tax-schedule/19`.
			 */
			href?: string;
		};
		/**
		 * List of warehouse inventory details including serial number, aisle, bin, and row per item.
		 *
		 * Items: List of warehouse inventory details including serial number, aisle, bin, and row per document line item.
		 */
		trackingDetail?: {
			/**
			 * System-assigned key for the document line detail object. For example, `55`.
			 */
			key?: string;
			/**
			 * Unique ID for the document line detail object. This value is the same as the `key` for this object. For example, `55`.
			 */
			id?: string;
			/**
			 * URL endpoint for the document line detail object. For example, `/objects/purchasing/document-line-detail/55`.
			 */
			href?: string;
			/**
			 * The quantity of the units being built for the combination of the tracking attributes specified for the line. For example, `10`.
			 */
			quantity?: string;
			/**
			 * Serial number of the line item. For example, `S1001`.
			 */
			serialNumber?: string;
			/**
			 * The lot numbers for the units being built and the quantity being built for each lot. For example, `L1001`.
			 */
			lotNumber?: string;
			/**
			 * The expiration date for the units being built and the quantity being built. Use the format `YYYY-MM-DD`.
			 */
			expirationDate?: string;
			/**
			 * Aisle associated with the line details.
			 */
			aisle?: {
				/**
				 * URL endpoint for the aisle. For example, `/objects/inventory-control/aisle/10`.
				 */
				href?: string;
				/**
				 * Unique key for the aisle. For example, `10`.
				 */
				key?: string;
				/**
				 * Unique ID for the aisle. For example, `AISLE1`.
				 */
				id?: string;
			};
			/**
			 * The bin associated with the line details.
			 */
			bin?: {
				/**
				 * URL endpoint for the bin. For example, `/objects/inventory-control/bin/20`.
				 */
				href?: string;
				/**
				 * Unique key for the bin. For example, `20`.
				 */
				key?: string;
				/**
				 * Unique ID for the bin. For example, `BIN1`.
				 */
				id?: string;
			};
			/**
			 * The row associated with the line details.
			 */
			row?: {
				/**
				 * URL endpoint for the row. For example, `/objects/inventory-control/row/15`.
				 */
				href?: string;
				/**
				 * Unique key for the row. For example, `15`.
				 */
				key?: string;
				/**
				 * Unique ID for the row. For example, `ROW1`.
				 */
				id?: string;
			};
			/**
			 * Item associated with the line details.
			 */
			item?: {
				/**
				 * Unique key for the item. For example, `10`.
				 */
				key?: string;
				/**
				 * Unique ID for the item. For example, `Battery`.
				 */
				id?: string;
				/**
				 * Name of the item. For example, `Battery`.
				 */
				name?: string;
				/**
				 * URL endpoint for the item. For example, `/objects/inventory-control/item/10`.
				 */
				href?: string;
			};
			/**
			 * The audit of the tracking detail item.
			 */
			audit?: {
				/**
				 * Date and time when the record was created. Use the ISO 8601 format.
				 */
				createdDateTime?: string;
				/**
				 * Date and time when the record was last modified. Use the ISO 8601 format.
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
			/**
			 * The Purchasing document line associated with the detail.
			 */
			purchasingDocumentLine?: {
				/**
				 * Unique key for the Purchasing document line. For example, `23`.
				 */
				key?: string;
				/**
				 * Unique ID for the document line. For example, `23`.
				 */
				id?: string;
				/**
				 * Type of the Purchasing document in which the line resides. For example, `Purchase Order`.
				 */
				documentType?: string;
				/**
				 * URL endpoint for the Purchasing document line. For example, `/objects/purchasing/document-line::Purchase%20Order/23`.
				 */
				href?: string;
			};
		}[];
		/**
		 * Header level details for the document line item.
		 */
		documentHeader?: {
			/**
			 * Unique key for the purchasing document. For example, `55`.
			 */
			key?: string;
			/**
			 * ID for the purchasing document. For example, `Purchase Invoice-PO0066`.
			 */
			id?: string;
			/**
			 * Type of the purchasing document. For example, `Purchase Invoice`.
			 */
			documentType?: string;
			/**
			 * URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Invoice/55`.
			 */
			href?: string;
		};
		/**
		 * Line-level retainage details. (Construction subscription)
		 */
		retainage?: {
			/**
			 * Retainage percentage. For example, `10.00`.
			 */
			percentage?: string;
			/**
			 * Base amount retained. For example, `10.00`.
			 */
			baseAmountRetained?: string;
			/**
			 * Transaction amount retained. For example, `10.00`.
			 */
			txnAmountRetained?: string;
			/**
			 * Extended price net retainage amount. For example, `1000.0000000000`.
			 */
			extendedPriceNetAmount?: string;
			/**
			 * Extended base price net retainage amount. For example, `1000.0000000000`.
			 */
			extendedBasePriceNetAmount?: string;
		};
		/**
		 * Reference to the source transaction when creating a change order. (Construction subscription)
		 */
		relatedDocument?: {
			/**
			 * System-assigned unique key for the purchasing document. For example, `5151`.
			 */
			key?: string;
			/**
			 * Unique ID for the purchasing document. This value is the same as the key for this object. For example, `5151`.
			 */
			id?: string;
			/**
			 * Document number for the purchasing document. For example, `PO0550`.
			 */
			documentNumber?: string;
			/**
			 * URL endpoint for the purchasing document. For example, `/objects/purchasing/document/5151`.
			 */
			href?: string;
		};
		/**
		 * Reference to the source transaction line when creating a change order. (Construction subscription)
		 */
		relatedDocumentLine?: {
			/**
			 * System-assigned unique key for the document line. For example, `13965`.
			 */
			key?: string;
			/**
			 * Name or other unique ID for the document line. For example, `13965`.
			 */
			id?: string;
			/**
			 * Unit quantity for the document line. For example, `10.0000000000`.
			 */
			unitQuantity?: string;
			/**
			 * Extended price in transaction currency for the document line. For example, `1294.3200000000`.
			 */
			extendedPriceInTxnCurrency?: string;
			/**
			 * Extended total cost for the document line. For example, `1560.0000000000`.
			 */
			extendedCost?: string;
			/**
			 * URL endpoint for the document line. For example, `/objects/purchasing/document-line/13965`.
			 */
			href?: string;
		};
		/**
		 * Extended price in transaction currency. For example, `1294.3200000000`.
		 */
		extendedPriceInTxnCurrency?: string;
		/**
		 * Extended total cost. For example, `1560.0000000000`.
		 */
		extendedCost?: string;
		/**
		 * Line-level revised details post change order. (Construction subscription)
		 */
		revision?: {
			/**
			 * Revised unit quantity. For example, `10`.
			 */
			unitQuantity?: number;
			/**
			 * Revised quantity. For example, `10`.
			 */
			quantity?: number;
			/**
			 * Revised unit value. For example, `80.00`.
			 */
			unitValue?: string;
			/**
			 * Revised value. For example, `80.00`.
			 */
			value?: string;
			/**
			 * Revised transaction currency. For example, `100.00`.
			 */
			valueInTxnCurrency?: string;
			/**
			 * Revised price. For example, `100.0000000000`.
			 */
			price?: string;
			/**
			 * Revised unit price. For example, `100.0000000000`.
			 */
			unitPrice?: string;
			/**
			 * Revised transaction price. For example, `100.0000000000`.
			 */
			priceInTxnCurrency?: string;
		};
		/**
		 * Line-level draft details post change order. (Construction subscription)
		 */
		draft?: {
			/**
			 * Draft unit quantity change. For example, `10`.
			 */
			unitQuantity?: number;
			/**
			 * Draft quantity change. For example, `10`.
			 */
			quantity?: number;
			/**
			 * Draft price change. For example, `20.0000000000`.
			 */
			price?: string;
			/**
			 * Draft base price change. For example, `20.0000000000`.
			 */
			basePrice?: string;
		};
		/**
		 * Line-level posted details post change order. (Construction subscription)
		 */
		posted?: {
			/**
			 * Posted quantity change. For example, `20.0000000000`.
			 */
			quantity?: string;
			/**
			 * Posted extended price change. For example, `10.0000000000`.
			 */
			price?: string;
			/**
			 * Posted extended base price change. For example, `10.0000000000`.
			 */
			basePrice?: string;
		};
		/**
		 * Indicates whether the line has been added by change document. (Construction subscription)
		 */
		addedByChangeDocument?: boolean;
		/**
		 * Indicates whether the document line is reverse converted. (Construction subscription)
		 */
		isReverseConversion?: boolean;
		/**
		 * Line-level reverse conversion details. (Construction subscription)
		 */
		reverseConversion?: {
			/**
			 * Reverse converted price. For example, `100.0000000000`.
			 */
			price?: string;
			/**
			 * Reverse quantity converted. For example, `10.0000000000`.
			 */
			quantity?: string;
			/**
			 * Standard price converted. For example, `100.0000000000`.
			 */
			standardPrice?: string;
			/**
			 * Standard quantity converted. For example, `10.0000000000`.
			 */
			standardQuantity?: string;
			/**
			 * Total amount converted. For example, `1000.0000000000`.
			 */
			totalConvertedAmount?: string;
			/**
			 * Total amount remaining. For example, `500.0000000000`.
			 */
			totalRemainingAmount?: string;
		};
		/**
		 * Reference to the source transaction for primary document order. (Construction subscription)
		 */
		primaryDocument?: {
			/**
			 * System-assigned unique key for the purchasing document. For example, `3669`.
			 */
			key?: string;
			/**
			 * Unique identifier for the purchasing document. This value is the same as the `key` value for this object. For example, `3669`.
			 */
			id?: string;
			/**
			 * Unique number for the purchasing document. For example, `PO-Source01-R2-81`.
			 */
			documentNumber?: string;
			/**
			 * URL endpoint for the purchasing document. For example, `/objects/purchasing/document/3669`.
			 */
			href?: string;
		};
		/**
		 * Reference to the source transaction line item for primary document order. (Construction subscription)
		 */
		primaryDocumentLine?: {
			/**
			 * System-assigned unique key for the primary document line. For example, `9156`.
			 */
			key?: string;
			/**
			 * Name or other unique ID for the primary document line. For example, `9156`.
			 */
			id?: string;
			/**
			 * URL endpoint for the primary document line. For example, `/objects/purchasing/document-line/9156`.
			 */
			href?: string;
		};
		/**
		 * Amortization template for prepaid expense distribution.
		 */
		amortizationTemplate?: {
			/**
			 * System-assigned key for the amortization template. For example, `1`.
			 */
			key?: string;
			/**
			 * Unique identifier for the amortization template. For example, `StraightLine_Monthly`.
			 */
			id?: string;
			/**
			 * URL endpoint for the amortization template. For example, `/objects/accounts-payable/amortization-template/1`.
			 */
			href?: string;
		};
		/**
		 * Start date for the amortization period. Use the format `YYYY-MM-DD`.
		 */
		amortizationStartDate?: string;
		/**
		 * End date for the amortization period. Use the format `YYYY-MM-DD`.
		 */
		amortizationEndDate?: string;
		/**
		 * Lines of the purchasing document line subtotal.
		 *
		 * Items: Details of the subtotals, taxes, discounts, charges, and more for the document line.
		 */
		lineSubtotals?: {
			/**
			 * System-assigned key for the document line subtotal. For example, `23`.
			 */
			key?: string;
			/**
			 * System-assigned ID for the document line subtotal. This value is the same as the `key` for this object. For example, `23`.
			 */
			id?: string;
			/**
			 * URL endpoint for the document line subtotal. For example, `/objects/purchasing/document-line-subtotal/23`.
			 */
			href?: string;
			/**
			 * Description of the document line subtotal. For example, `VAT Tax`.
			 */
			description?: string;
			/**
			 * A non-negative base amount for the document subtotal line. For example, `100.00`.
			 */
			absoluteValue?: string;
			/**
			 * Percentage value that is calculated for the subtotal line. For example, `5.00`.
			 */
			percentValue?: string;
			/**
			 * The base total amount for the line item subtotal. For example, `105.00`.
			 */
			total?: string;
			/**
			 * A non-negative amount for the subtotal line. For example, `100.00`.
			 */
			txnAbsoluteValue?: string;
			/**
			 * A non-negative total for the subtotal amount. For example, `105.00`.
			 */
			txnTotal?: string;
			/**
			 * Set this field to `true` to allow users to override both tax detail (`taxDetail`) and the tax value (`txnAbsoluteValue`).
			 */
			enableOverrideTax?: boolean;
			/**
			 * Tax details describe a specific type of tax that applies to document lines.
			 */
			taxDetail?: {
				/**
				 * Unique key for the tax detail. For example, `15`.
				 */
				key?: string;
				/**
				 * ID for the tax detail. For example, `VAT Tax Detail`.
				 */
				id?: string;
				/**
				 * URL endpoint for the tax detail. For example, `/objects/tax/tax-detail/15`.
				 */
				href?: string;
			};
			/**
			 * When the `enableOverrideTax` field is set to `true`, users can provide `taxDetail`. The originally allotted `taxDetail` will then be assigned to `systemTaxDetail`.
			 */
			systemTaxDetail?: {
				/**
				 * Unique key for the tax detail. For example, `10`.
				 */
				key?: string;
				/**
				 * ID for the tax detail. For example, `VAT Tax Detail`.
				 */
				id?: string;
				/**
				 * URL endpoint for the tax detail object. For example, `/objects/tax/tax-detail/10`.
				 */
				href?: string;
			};
			/**
			 * The dimensions of the line subtotal.
			 */
			dimensions?: {
				/**
				 * Location associated with the subtotal line.
				 */
				location?: {
					/**
					 * Unique key for the location. For example, `22`.
					 */
					key?: string;
					/**
					 * Unique ID for the location. For example, `Arizona`.
					 */
					id?: string;
					/**
					 * Name of the location. For example, `Arizona`.
					 */
					name?: string;
					/**
					 * URL endpoint for the location. For example, `/objects/company-config/location/22`.
					 */
					href?: string;
				};
				/**
				 * Department associated with the subtotal line.
				 */
				department?: {
					/**
					 * Unique key for the department. For example, `9`.
					 */
					key?: string;
					/**
					 * ID for the department. For example, `Accounting`.
					 */
					id?: string;
					/**
					 * Name of the department. For example, `Accounting`.
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
			 * The Purchasing document line associated with the subtotal.
			 */
			documentLine?: {
				/**
				 * Unique key for the Purchasing document line. For example, `6`.
				 */
				key?: string;
				/**
				 * ID for the Purchasing document line. For example, `6`.
				 */
				id?: string;
				/**
				 * Type of the Purchasing document. For example, `Purchase Order`.
				 */
				documentType?: string;
				/**
				 * URL endpoint for the Purchasing document line. For example, `/objects/purchasing/document-line::Purchase%20Order/6`.
				 */
				href?: string;
			};
			/**
			 * The Purchasing document in which the associated line resides.
			 */
			document?: {
				/**
				 * Unique key for the Purchasing document. For example, `14`.
				 */
				key?: string;
				/**
				 * ID for the Purchasing document. For example, `14`.
				 */
				id?: string;
				/**
				 * Type of the Purchasing document. For example, `Purchase Order`.
				 */
				documentType?: string;
				/**
				 * URL endpoint for the Purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/14`.
				 */
				href?: string;
			};
			/**
			 * Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
			 */
			status?: '' | 'active' | 'inactive';
		}[];
	}[];
	/**
	 * Lines of the purchasing document subtotal.
	 *
	 * Items: Details of subtotals, taxes, discounts, charges, and more for a purchasing transaction.
	 */
	subtotals?: {
		/**
		 * System-assigned unique key for the purchasing document subtotal. For example, `23`.
		 */
		key?: string;
		/**
		 * ID for the purchasing document subtotal. This value is the same as the key for this object. For example, `23`.
		 */
		id?: string;
		/**
		 * URL endpoint for the purchasing document subtotal. For example, `/objects/purchasing/document-subtotal/23`.
		 */
		href?: string;
		/**
		 * Description of the document subtotal. For example, `Tax`.
		 */
		description?: string;
		/**
		 * Non-negative base amount for the subtotal. API clients can set this value; when provided, it is used by the system when calculating any derived subtotal totals. For example, `40.50`.
		 */
		absoluteValue?: string;
		/**
		 * Percentage value that is calculated on the total of all line items of the document. For example, `10.50`.
		 */
		percentValue?: string;
		/**
		 * Non-negative transaction amount calculated across all other lines of the document. For example, `44.78`.
		 */
		txnAbsoluteValue?: string;
		/**
		 * The computed base amount for the subtotal. For example, `500.10`.
		 */
		total?: string;
		/**
		 * The computed transaction amount for the subtotal. For example, `400.10`.
		 */
		txnTotal?: string;
		/**
		 * The purchasing document line associated with the subtotal.
		 */
		documentLine?: {
			/**
			 * Unique key for the purchasing document line. For example, `10`.
			 */
			key?: string;
			/**
			 * Type of the purchasing document. For example, `Purchase Order`.
			 */
			documentType?: string;
			/**
			 * ID for the purchasing document line. For example, `10`.
			 */
			id?: string;
			/**
			 * URL endpoint for the purchasing document line. For example, `/objects/purchasing/document-line::Purchase%20Order/10`.
			 */
			href?: string;
		};
		/**
		 * The dimensions of the subtotal.
		 */
		dimensions?: {
			/**
			 * Location associated with the document subtotal.
			 */
			location?: {
				/**
				 * Unique key for the location. For example, `22`.
				 */
				key?: string;
				/**
				 * ID for the location. For example, `Arizona`.
				 */
				id?: string;
				/**
				 * Name for the location. For example, `California`.
				 */
				name?: string;
				/**
				 * URL endpoint for the location. For example, `/objects/company-config/location/22`.
				 */
				href?: string;
			};
			/**
			 * Department associated with the document subtotal.
			 */
			department?: {
				/**
				 * Unique key for the department. For example, `9`.
				 */
				key?: string;
				/**
				 * Unique ID of the department. For example, `Accounting`.
				 */
				id?: string;
				/**
				 * Name for the department. For example, `Sales and Marketing`.
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
		 * Header level details for the purchasing document subtotal.
		 */
		documentHeader?: {
			/**
			 * Unique key for the purchasing document. For example, `23`.
			 */
			key?: string;
			/**
			 * ID for the purchasing document. For example, `23`.
			 */
			id?: string;
			/**
			 * Type of the purchasing document. For example, `Purchase Order`.
			 */
			documentType?: string;
			/**
			 * URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/23`.
			 */
			href?: string;
		};
		/**
		 * The audit of the subtotal.
		 */
		audit?: {
			/**
			 * Date and time when the record was created. Use the ISO 8601 format.
			 */
			createdDateTime?: string;
			/**
			 * Date and time when the record was last modified. Use the ISO 8601 format.
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
	 * Lines of the purchasing document history.
	 *
	 * Items: History of workflow conversions associated with the purchasing transaction.
	 */
	history?: {
		/**
		 * System-assigned key for the purchasing document history. For example, `11`.
		 */
		key?: string;
		/**
		 * Unique ID for the purchasing document history. This value is the same as the `key` for this object. For example, `11`.
		 */
		id?: string;
		/**
		 * URL endpoint for the purchasing document history. For example, `/objects/purchasing/document-history/11`.
		 */
		href?: string;
		/**
		 * The transaction from which the corresponding purchasing transaction was converted.
		 */
		convertedFrom?: {
			/**
			 * Unique key for the purchasing document. For example, `22`.
			 */
			key?: string;
			/**
			 * Unique ID for the purchasing document. For example, `Purchase Order-ORINV#0182#doc`.
			 */
			id?: string;
			/**
			 * Type of the purchasing document. For example, `Purchase Order`.
			 */
			documentType?: string;
			/**
			 * URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/22`.
			 */
			href?: string;
		};
		/**
		 * The transaction to which the corresponding purchasing transaction was converted.
		 */
		convertedTo?: {
			/**
			 * Unique key for the purchasing document. For example, `14`.
			 */
			key?: string;
			/**
			 * Unique ID for the purchasing document. For example, `Purchase Invoice-SUBINV#0182#doc`.
			 */
			id?: string;
			/**
			 * Type of the purchasing document. For example, `Purchase Invoice`.
			 */
			documentType?: string;
			/**
			 * URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Invoice/14`.
			 */
			href?: string;
		};
		/**
		 * The purchasing document with which the history information is associated.
		 */
		purchasingDocument?: {
			/**
			 * Unique key for the purchasing document. For example, `23`.
			 */
			key?: string;
			/**
			 * Name or other unique identifier for the purchasing document. For example, `Purchase Order-ORINV#0182#doc`.
			 */
			id?: string;
			/**
			 * Type of the purchasing document. For example, `Purchase Invoice`.
			 */
			documentType?: string;
			/**
			 * URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/22`.
			 */
			href?: string;
		};
	}[];
};

/**
 * Get a purchasing document
 * Returns information about a specific purchasing document by its key.
 */
export async function getPurchasingDocument(
	this: EndpointFunctionThis,
	payload: {
		input: GetPurchasingDocumentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetPurchasingDocumentOutput> {
	const response = await this.endpointCaller<GetPurchasingDocumentOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'getPurchasingDocument',
		},
		payload,
	);
	return response.output;
}
