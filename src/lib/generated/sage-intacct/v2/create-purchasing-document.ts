// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreatePurchasingDocumentInput = {
	/**
	 * Name of the transaction definition used as the template for the purchasing document, for example `Purchase Order`. It must match a transaction definition configured in the company. Look it up with the Search purchasing documents Endpoint or in the Sage Intacct transaction definitions.
	 */
	documentName: string;
	/**
	 * Document number for the purchasing document. If the transaction definition does not have a numbering sequence configured, provide a number to identify the transaction. For example, `PO-O122`.
	 */
	documentNumber?: string;
	/**
	 * State of the new purchasing document. If empty, the document is created as `pending`.
	 */
	state?: '' | 'pending' | 'draft' | 'submitted';
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
	txnDate: string;
	/**
	 * Due date for the purchasing document. Use the format `YYYY-MM-DD`.
	 */
	dueDate?: string;
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
	};
	/**
	 * Accounts Payable (AP) term, which determines the expiration date for quotes and the due date for invoices.
	 */
	paymentTerm?: {
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
		 * Unique ID for the vendor. For example, `ALPHA001`. Required when vendor is provided.
		 */
		id?: string;
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
	};
	/**
	 * Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
	 */
	status?: '' | 'active' | 'inactive';
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
	 * The internal reference.
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
	 * The external reference.
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
		};
	};
	/**
	 * Revision details post change order. (Construction subscription)
	 */
	revision?: {
		/**
		 * Log number for tracking the number of changes applied to a source transaction. Default 0 for a source transaction, 1 for a change transaction. (Construction subscription) For example, `1`.
		 */
		changeLogNumber?: number;
	};
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
	};
	/**
	 * Lines of the purchasing document.
	 *
	 * Items: Line items in a purchasing document represent purchasing transactions.
	 */
	lines?: {
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
		 * Unit associated with this document line item. For example, `Each`. Required when line is provided.
		 */
		unit?: string;
		/**
		 * Unit quantity associated with this document line item. For example, `10.10`. Required when line is provided.
		 */
		unitQuantity?: string;
		/**
		 * Unit price associated with this line item. For example, `10.50`. Required when line is provided.
		 */
		unitPrice?: string;
		/**
		 * Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
		 */
		status?: '' | 'active' | 'inactive';
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
		};
		/**
		 * Transaction price. For example, `10.00`.
		 */
		priceInTxnCurrency?: string;
		/**
		 * Indicates whether the line is billable.
		 */
		isBillable?: boolean;
		/**
		 * Tax rate for the document line item. For example, `10.050`.
		 */
		taxRate?: string;
		/**
		 * Discount applied to the line item. For example, `10.25`.
		 */
		discount?: string;
		/**
		 * Indicates whether the line item is taxable.
		 */
		enableTax?: boolean;
		/**
		 * Conversion type used for the transaction.
		 */
		conversionType?: '' | 'quantity' | 'price';
		/**
		 * The dimensions of the line.
		 */
		dimensions?: {
			/**
			 * Location associated with the document line. Required when dimensions is provided.
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
			 * The item of the dimensions. Required when dimensions is provided.
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
			 * Warehouse associated with the document line. Required when dimensions is provided.
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
		};
		/**
		 * Date the order was confirmed. Use the format `YYYY-MM-DD`.
		 */
		orderConfirmationDate?: string;
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
		};
		/**
		 * List of warehouse inventory details including serial number, aisle, bin, and row per item.
		 *
		 * Items: List of warehouse inventory details including serial number, aisle, bin, and row per document line item.
		 */
		trackingDetail?: {
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
		};
		/**
		 * Indicates whether the document line is reverse converted. (Construction subscription)
		 */
		isReverseConversion?: boolean;
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
			 * A non-negative base amount for the document subtotal line. For example, `100.00`.
			 */
			absoluteValue?: string;
			/**
			 * A non-negative amount for the subtotal line. For example, `100.00`.
			 */
			txnAbsoluteValue?: string;
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
			};
			/**
			 * Department associated with the document subtotal.
			 */
			department?: {
				/**
				 * Unique key for the department. For example, `9`. Sage's OpenAPI spec marks this field as read-only for subtotals, so Sage may ignore it.
				 */
				key?: string;
				/**
				 * Unique ID for the department. For example, `Sales`. Sage's OpenAPI spec marks this field as read-only for subtotals, so Sage may ignore it.
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
	}[];
	/**
	 * For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.
	 */
	entityId?: string;
};

export type CreatePurchasingDocumentOutput = {
	/**
	 * System-assigned key of the purchasing document.
	 */
	key?: string;
	/**
	 * Unique ID of the purchasing document.
	 */
	id?: string;
	/**
	 * Relative API URL of the purchasing document.
	 */
	href?: string;
};

/**
 * Create a purchasing document
 * Creates a new purchasing document.
 */
export async function createPurchasingDocument(
	this: EndpointFunctionThis,
	payload: {
		input: CreatePurchasingDocumentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreatePurchasingDocumentOutput> {
	const response = await this.endpointCaller<CreatePurchasingDocumentOutput>(
		{
			appName: 'sage-intacct',
			appVersion: 2,
			endpointName: 'createPurchasingDocument',
		},
		payload,
	);
	return response.output;
}
