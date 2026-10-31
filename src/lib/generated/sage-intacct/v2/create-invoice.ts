// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateInvoiceInput = {
	/**
	 * Specify a unique invoice number while creating an invoice unless document sequencing is configured, in which case the number is auto-generated. For example, `INV-001`.
	 */
	invoiceNumber?: string;
	/**
	 * State of the invoice after creation. Use `draft` to save the invoice without posting it. If empty, the invoice is posted (`posted`).
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
	 * Customer purchase order number or another reference number. For example, `PO6917`.
	 */
	referenceNumber?: string;
	/**
	 * Description of the invoice, which prints on the Customer Ledger report. For example, `Regular invoice`.
	 */
	description?: string;
	/**
	 * Date the invoice was created. Use the format `YYYY-MM-DD`.
	 */
	invoiceDate: string;
	/**
	 * Date the invoice is due. Use the format `YYYY-MM-DD`.
	 */
	dueDate: string;
	/**
	 * Currency details for this invoice.
	 */
	currency?: {
		/**
		 * Base currency for the invoice. For example, `USD`.
		 */
		baseCurrency?: string;
		/**
		 * The transaction currency to use for this invoice. If this currency is different from the base currency, provide an exchange rate. For example, `USD`.
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
			rate?: number;
			/**
			 * Exchange rate type used to calculate the base amount from the transaction amount. For example, `Intacct Daily Rate`.
			 */
			typeId?: string;
		};
	};
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
				};
			};
		};
	};
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
		 * Invoice delivery options for the customer.
		 */
		deliveryOptions?: '' | 'print' | 'email' | 'both';
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
		 * GL posting date for the summary. Use the format `YYYY-MM-DD`.
		 */
		glPostingDate?: string;
	};
	/**
	 * Line items of the invoice.
	 *
	 * Items: Line items in an AR invoice represent transactions captured in that invoice.
	 */
	lines?: {
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
		};
		/**
		 * Amount for the AR invoice line item in the transaction currency. For example, `16740.00`.
		 */
		txnAmount?: string;
		/**
		 * Memo or notes about the AR invoice line item. For example, `Replaces discontinued part`.
		 */
		memo?: string;
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
		};
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
		};
		/**
		 * Tax entries for the AR invoice.
		 *
		 * Items: For VAT enabled transactions, invoice line items will have tax entries.
		 */
		taxEntries?: {
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
			};
		};
		/**
		 * Header level details for the AR invoice's line items.
		 */
		invoice?: {
			/**
			 * System-assigned key for the AR invoice. For example, `6`.
			 */
			key?: string;
		};
	}[];
	/**
	 * For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.
	 */
	entityId?: string;
};

export type CreateInvoiceOutput = {
	/**
	 * System-assigned key of the invoice.
	 */
	key?: string;
	/**
	 * Unique ID of the invoice.
	 */
	id?: string;
	/**
	 * Relative API URL of the invoice.
	 */
	href?: string;
};

/**
 * Create an invoice
 * Creates a new invoice.
 */
export async function createInvoice(
	this: EndpointFunctionThis,
	payload: {
		input: CreateInvoiceInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateInvoiceOutput> {
	const response = await this.endpointCaller<CreateInvoiceOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'createInvoice',
		},
		payload,
	);
	return response.output;
}
