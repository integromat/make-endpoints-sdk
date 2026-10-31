// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route. It forwards an arbitrary call (method, path, query string, headers and body) to the Sage Intacct REST API, similar to the "Make an API call" module.\n\nThe base URL is `https://api.intacct.com/ia/api`. Provide the remaining path in the URL parameter, starting with a slash (for example `/v1/objects/accounts-receivable/invoice`; the API version is part of the path). Authentication is handled automatically through the app\'s connection.\n\nFor multi-entity companies, set `entityId` to target a sub-entity; it is sent as the `X-IA-API-Param-Entity` header.\n\nFor write calls (POST, PUT, PATCH), include a `Content-Type: application/json` header explicitly in the headers parameter, because not every caller applies the schema\'s default header.\n\nRefer to the [Sage Intacct REST API reference](https://developer.sage.com/intacct/apis/intacct/1/intacct-openapi) for available endpoints, required parameters and response schemas.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter the part of the URL that comes after `https://api.intacct.com/ia/api`, starting with a slash. For example, `/v1/objects/accounts-receivable/invoice`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"The HTTP request headers. You don't have to add authorization headers; we already did that for you.",
					items: {
						type: 'object',
						description: 'The HTTP request header.',
						properties: {
							key: { type: 'string', description: 'The HTTP request header key.' },
							value: {
								type: 'string',
								description: 'The HTTP request header value.',
							},
						},
						required: [],
					},
				},
				qs: {
					type: 'array',
					description: 'The HTTP request query parameters.',
					items: {
						type: 'object',
						description: 'The HTTP request query parameter.',
						properties: {
							key: {
								type: 'string',
								description: "The HTTP request query parameter's key.",
							},
							value: {
								type: 'string',
								description: "The HTTP request query parameter's value.",
							},
						},
						required: [],
					},
				},
				body: {
					description:
						'The HTTP request body. This input will be ignored if the HTTP request method is `GET`.',
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['url', 'method'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { description: 'The HTTP response body.' },
				headers: {
					type: 'object',
					description: 'The HTTP response headers.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				statusCode: { type: 'number', description: 'The HTTP response status code.' },
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'createInvoice',
		label: 'Create an invoice',
		description: 'Creates a new invoice.',
		context:
			'---\nname: createInvoice\ndescription: Creates a new accounts receivable invoice.\n---\n\nCreates a new invoice. For the invoice to be posted, you must specify at least the account and an amount for each line item. Requires the Accounts Receivable subscription and the Add Invoices permission.\n\nThe invoice `state` is `posted` by default. Set it to `draft` to save the invoice without posting, then post it later with `submitInvoice`.\n\nThe response contains only the `key`, `id` and `href` of the new invoice. Call `getInvoice` with the `key` to read the full invoice.\n\nFor multi-entity companies, pass `entityId` to create the invoice in a sub-entity.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				invoiceNumber: {
					type: 'string',
					description:
						'Specify a unique invoice number while creating an invoice unless document sequencing is configured, in which case the number is auto-generated. For example, `INV-001`.',
				},
				state: {
					type: 'string',
					description:
						'State of the invoice after creation. Use `draft` to save the invoice without posting it. If empty, the invoice is posted (`posted`).',
					default: '',
					enum: [
						'',
						'reversed',
						'reversal',
						'draft',
						'noValue',
						'posted',
						'paid',
						'partiallyPaid',
						'selected',
					],
				},
				referenceNumber: {
					type: 'string',
					description:
						'Customer purchase order number or another reference number. For example, `PO6917`.',
				},
				description: {
					type: 'string',
					description:
						'Description of the invoice, which prints on the Customer Ledger report. For example, `Regular invoice`.',
				},
				invoiceDate: {
					type: 'string',
					description: 'Date the invoice was created. Use the format `YYYY-MM-DD`.',
				},
				dueDate: {
					type: 'string',
					description: 'Date the invoice is due. Use the format `YYYY-MM-DD`.',
				},
				currency: {
					type: 'object',
					description: 'Currency details for this invoice.',
					properties: {
						baseCurrency: {
							type: 'string',
							description: 'Base currency for the invoice. For example, `USD`.',
						},
						txnCurrency: {
							type: 'string',
							description:
								'The transaction currency to use for this invoice. If this currency is different from the base currency, provide an exchange rate. For example, `USD`.',
						},
						exchangeRate: {
							type: 'object',
							description: 'Exchange rate details used to calculate the base amount.',
							properties: {
								date: {
									type: 'string',
									description:
										'Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid. Use the format `YYYY-MM-DD`.',
								},
								rate: {
									type: 'number',
									description:
										'Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.',
								},
								typeId: {
									type: 'string',
									description:
										'Exchange rate type used to calculate the base amount from the transaction amount. For example, `Intacct Daily Rate`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				customerMessage: {
					type: 'object',
					description: "Message to include on the customer's invoice.",
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key for the customer message. For example, `10`.',
						},
						id: {
							type: 'string',
							description:
								'ID for the customer message. For example, `welcome message`.',
						},
						message: {
							type: 'string',
							description:
								'Message text for the customer message. For example, `welcome to the company`.',
						},
					},
					required: [],
				},
				contacts: {
					type: 'object',
					description: 'Associated contacts.',
					properties: {
						payTo: {
							type: 'object',
							description: 'Pay to contact information from the customer record.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key to uniquely identify the contact. For example, `176`.',
								},
								id: {
									type: 'string',
									description:
										'Name of the contact. For example, `Power Aerospace Materials(C1)`.',
								},
							},
							required: [],
						},
						returnTo: {
							type: 'object',
							description: 'Return to contact information from the customer record.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key to uniquely identify the contact. For example, `176`.',
								},
								id: {
									type: 'string',
									description:
										'Name of the contact. For example, `Power Aerospace Materials(C1)`.',
								},
								tax: {
									type: 'object',
									description: 'Tax related information for the ship-to contact.',
									properties: {
										taxId: {
											type: 'string',
											description:
												'Tax identification number. For example, `252-85-7897`.',
										},
										group: {
											type: 'object',
											description:
												'Contact tax group associated with the ship-to contact.',
											properties: {
												key: {
													type: 'string',
													description:
														'System-assigned key for the group. For example, `288`.',
												},
												id: {
													type: 'string',
													description:
														'Unique identifier for the group. For example, `Goods Zero Rate - CA`.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				billbackTemplate: {
					type: 'object',
					description:
						'If AR is configured for inter-entity bill back, the template to use to create a matching bill.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the template. For example, `18`.',
						},
						id: {
							type: 'string',
							description: 'ID for the template. For example, `BBT-error5`.',
						},
					},
					required: [],
				},
				attachment: {
					type: 'object',
					description: 'Supporting document attached to the invoice.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key for the supporting document. For example, `11`.',
						},
						id: {
							type: 'string',
							description:
								'System-assigned ID for the supporting document. For example, `11`.',
						},
					},
					required: [],
				},
				customer: {
					type: 'object',
					description: 'Customer to receive the invoice.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the customer. For example, `14`.',
						},
						id: {
							type: 'string',
							description:
								'Unique identifier of the customer. For example, `C-00019`.',
						},
						deliveryOptions: {
							type: 'string',
							description: 'Invoice delivery options for the customer.',
							default: '',
							enum: ['', 'print', 'email', 'both'],
						},
					},
					required: [],
				},
				term: {
					type: 'object',
					description: 'Term details for the invoice.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the term. For example, `16`.',
						},
						id: {
							type: 'string',
							description: 'Name of the term. For example, `30 Days`.',
						},
					},
					required: [],
				},
				taxSolution: {
					type: 'object',
					description: 'Tax solution details for this invoice.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key to uniquely identify the tax solution. For example, `4`.',
						},
						id: {
							type: 'string',
							description:
								'Name or other unique identifier for the tax solution. For example, `Australia GST`.',
						},
					},
					required: [],
				},
				invoiceType: {
					type: 'string',
					description:
						'Specifies whether the transaction is a regular invoice (invoice), an electronic invoice (eInvoice), or an invoice reported to the tax agency because it is not eligible for e-invoicing (eReporting).',
					default: '',
					enum: ['', 'invoice', 'eInvoice', 'eReporting'],
				},
				invoiceMode: {
					type: 'string',
					description:
						'Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities. Specifies the invoice mode based on invoiceType. For eReporting, specify tlb1 (goods) or tps1 (services). For eInvoice, specify b1 or s1. Supported values: - `tlb1` - E-Reporting mode for goods. - `tps1` - E-Reporting mode for services. - `b1` - Submission of an e-invoice for goods. - `s1` - Submission of an e-invoice for services. Leave this field blank when `invoiceType` is `invoice`.',
					default: '',
					enum: ['', 'tlb1', 'tps1', 'b1', 's1'],
				},
				invoiceSummary: {
					type: 'object',
					description:
						'Summary details for this invoice. Summaries are collections of the same types of transactions grouped together for processing.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key to uniquely identify the summary. For example, `33`.',
						},
						id: {
							type: 'string',
							description:
								'Name of the summary. For example, `OE Sales Invoice: 2023 Batch 1`.',
						},
						glPostingDate: {
							type: 'string',
							description:
								'GL posting date for the summary. Use the format `YYYY-MM-DD`.',
						},
					},
					required: [],
				},
				lines: {
					type: 'array',
					description: 'Line items of the invoice.',
					items: {
						type: 'object',
						description:
							'Line items in an AR invoice represent transactions captured in that invoice.',
						properties: {
							glAccount: {
								type: 'object',
								description:
									'General Ledger (GL) account associated with the line item.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the GL account. For example, `163`.',
									},
									id: {
										type: 'string',
										description:
											'User-assigned number for the GL account. For example, `4010`.',
									},
								},
								required: [],
							},
							overrideOffsetGLAccount: {
								type: 'object',
								description:
									'An alternative AR account to override the default GL AR account for the invoice line item.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the GL account. For example, `263`.',
									},
									id: {
										type: 'string',
										description: 'GL account number. For example, `1103`.',
									},
								},
								required: [],
							},
							txnAmount: {
								type: 'string',
								description:
									'Amount for the AR invoice line item in the transaction currency. For example, `16740.00`.',
							},
							memo: {
								type: 'string',
								description:
									'Memo or notes about the AR invoice line item. For example, `Replaces discontinued part`.',
							},
							allocation: {
								type: 'object',
								description:
									'Transaction allocation template for the line item, which distributes the invoice amount across specified dimensions.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the allocation. For example, `22`.',
									},
									id: {
										type: 'string',
										description:
											'System-assigned ID for the allocation. For example, `Premium Allocation`.',
									},
								},
								required: [],
							},
							accountLabel: {
								type: 'object',
								description: 'Meaningful name of AR account.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the account label. For example, `14`.',
									},
									id: {
										type: 'string',
										description:
											'Meaningful name of the account. For example, `Accounts Receivable - Microcomputer`.',
									},
								},
								required: [],
							},
							taxEntries: {
								type: 'array',
								description: 'Tax entries for the AR invoice.',
								items: {
									type: 'object',
									description:
										'For VAT enabled transactions, invoice line items will have tax entries.',
									properties: {
										baseTaxAmount: {
											type: 'string',
											description: 'Base tax amount. For example, `100.00`.',
										},
										txnTaxAmount: {
											type: 'string',
											description:
												'Transaction tax amount. For example, `100.00`.',
										},
										taxRate: {
											type: 'number',
											description: 'Tax rate. For example, `1.0299`.',
										},
										orderEntryTaxDetail: {
											type: 'object',
											description:
												'Order Entry tax details associated with the invoice tax entry.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the Order Entry tax detail. For example, `1`.',
												},
												id: {
													type: 'string',
													description:
														'Unique identifier for the Order Entry tax detail. For example, `Alaska Tax Detail`.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							dimensions: {
								type: 'object',
								description: 'The dimensions of the line.',
								properties: {
									location: {
										type: 'object',
										description:
											'Standard Sage Intacct dimension that allows you to create a hierarchy of locations to reflect how your company is organized.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the location. For example, `4`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier of the location. For example, `AU`.',
											},
										},
										required: [],
									},
									department: {
										type: 'object',
										description:
											'Standard Sage Intacct dimension that allows you to create a hierarchy of departments to reflect how your company is organized.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the department. For example, `9`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier of the department. For example, `01`.',
											},
										},
										required: [],
									},
									employee: {
										type: 'object',
										description: 'The employee of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the employee. For example, `10`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the employee. For example, `EMP-10`.',
											},
										},
										required: [],
									},
									project: {
										type: 'object',
										description: 'The project of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the project. For example, `2`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the project. For example, `NET-XML30-2`.',
											},
										},
										required: [],
									},
									customer: {
										type: 'object',
										description: 'The customer of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the customer. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the customer. For example, `CUST-13`.',
											},
										},
										required: [],
									},
									vendor: {
										type: 'object',
										description: 'The vendor of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the vendor. For example, `357`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the vendor. For example, `1605212096809`.',
											},
										},
										required: [],
									},
									item: {
										type: 'object',
										description: 'The item of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the item. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the item. For example, `Case 13`.',
											},
										},
										required: [],
									},
									warehouse: {
										type: 'object',
										description: 'The warehouse of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the warehouse. For example, `6`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the warehouse. For example, `WH01`.',
											},
										},
										required: [],
									},
									class: {
										type: 'object',
										description: 'The class of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the class. For example, `731`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the class. For example, `REST_CLS_001`.',
											},
										},
										required: [],
									},
									task: {
										type: 'object',
										description: 'The task of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the task. For example, `1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the task. For example, `1`.',
											},
										},
										required: [],
									},
									costType: {
										type: 'object',
										description: 'The cost type of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the cost type. For example, `2`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the cost type. For example, `2`.',
											},
										},
										required: [],
									},
									asset: {
										type: 'object',
										description: 'The asset of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the asset. For example, `A001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the asset. For example, `1`.',
											},
										},
										required: [],
									},
									contract: {
										type: 'object',
										description: 'The contract of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the contract. For example, `CON-0045-1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the contract. For example, `12`.',
											},
										},
										required: [],
									},
									affiliateEntity: {
										type: 'object',
										description: 'The affiliate entity of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the affiliate entity. For example, `23`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the affiliate entity. For example, `AFF-23`.',
											},
										},
										required: [],
									},
									loanAccount: {
										type: 'object',
										description: 'The loan account of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the loan account. For example, `LN001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the loan account. For example, `852`.',
											},
										},
										required: [],
									},
									workOrder: {
										type: 'object',
										description: 'Work order associated with the dimension.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the work order. For example, `18`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the work order. For example, `WO-0017`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							invoice: {
								type: 'object',
								description:
									"Header level details for the AR invoice's line items.",
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the AR invoice. For example, `6`.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['invoiceDate', 'dueDate'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				key: { type: 'string', description: 'System-assigned key of the invoice.' },
				id: { type: 'string', description: 'Unique ID of the invoice.' },
				href: { type: 'string', description: 'Relative API URL of the invoice.' },
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'createPurchasingDocument',
		label: 'Create a purchasing document',
		description: 'Creates a new purchasing document.',
		context:
			'---\nname: createPurchasingDocument\ndescription: Creates a new purchasing document from a transaction definition.\n---\n\nCreates a new purchasing document. To create a new purchasing document, specify the transaction definition that is the template for the new document as `documentName`. When creating a new document, the field `state` must be set to one of these values: pending, draft, or submitted. If no value is specified for the `state` field, it defaults to pending. For example, to create a new purchasing document that uses the Purchase Requisition transaction definition as a template, specify `Purchase Requisition` for `documentName`. Use `queryPurchasingDocuments` with a filter on `txnDefinition.id` to see transaction definitions in use.\n\nThe `documentName` must be the name of an existing transaction definition (for example `Purchase Order`), not the number of the new document. The document number, if needed, goes in the request body.\n\nThe response contains only the `key`, `id` and `href` of the new document. Call `getPurchasingDocument` with the same `documentName` and the `key` to read the full document.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				documentName: {
					type: 'string',
					description:
						'Name of the transaction definition used as the template for the purchasing document, for example `Purchase Order`. It must match a transaction definition configured in the company. Look it up with the Search purchasing documents Endpoint or in the Sage Intacct transaction definitions.',
				},
				documentNumber: {
					type: 'string',
					description:
						'Document number for the purchasing document. If the transaction definition does not have a numbering sequence configured, provide a number to identify the transaction. For example, `PO-O122`.',
				},
				state: {
					type: 'string',
					description:
						'State of the new purchasing document. If empty, the document is created as `pending`.',
					default: '',
					enum: ['', 'pending', 'draft', 'submitted'],
				},
				baseCurrency: {
					type: 'string',
					description: 'Base currency for the transaction. For example, `USD`.',
				},
				txnCurrency: {
					type: 'string',
					description: 'Currency used for the transaction. For example, `USD`.',
				},
				exchangeRate: {
					type: 'object',
					description: 'Exchange rate details used to calculate the base amount.',
					properties: {
						date: {
							type: 'string',
							description:
								'Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid. Use the format `YYYY-MM-DD`.',
						},
						rate: {
							type: 'string',
							description:
								'Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.',
						},
						typeId: {
							type: 'string',
							description:
								'Exchange rate type used to calculate the base amount from the transaction amount. For example, `1`.',
						},
						typeName: {
							type: 'string',
							description:
								'The name of exchange rate type. For example, `Intacct Daily Rate`.',
						},
					},
					required: [],
				},
				txnDate: {
					type: 'string',
					description: 'Date on the purchasing document. Use the format `YYYY-MM-DD`.',
				},
				dueDate: {
					type: 'string',
					description:
						'Due date for the purchasing document. Use the format `YYYY-MM-DD`.',
				},
				postingDate: {
					type: 'string',
					description:
						'The date on which purchasing document posts to the General Ledger. Use the format `YYYY-MM-DD`.',
				},
				referenceNumber: {
					type: 'string',
					description:
						'Reference to another document, as needed. For example, `PURCHASE-100`.',
				},
				vendorDocumentNumber: {
					type: 'string',
					description:
						'The number by which to reference a bill or other vendor document. A number is required only if Accounts Payable is configured to require numbers on bills, adjustments, and recurring bills. For example, `A2330-12`.',
				},
				notes: {
					type: 'string',
					description: 'Notes about the purchasing document. For example, `Fast order`.',
				},
				memo: {
					type: 'string',
					description:
						'Text to appear on the printed document. For example, `Lowry solutions`.',
				},
				cancelAfterDate: {
					type: 'string',
					description:
						'Indicates the date after which the transaction should be canceled. Use the format `YYYY-MM-DD`.',
				},
				doNotShipBeforeDate: {
					type: 'string',
					description:
						'The date before which goods cannot be shipped. Use the format `YYYY-MM-DD`.',
				},
				doNotShipAfterDate: {
					type: 'string',
					description:
						'The date after which goods cannot be shipped. Use the format `YYYY-MM-DD`.',
				},
				requestedShippingDate: {
					type: 'string',
					description:
						'The date the customer requests the goods to arrive on their premises. The default is the due date. Use the format `YYYY-MM-DD`.',
				},
				promisedDate: {
					type: 'string',
					description:
						'The date the vendor promised to deliver the goods. Use the format `YYYY-MM-DD`.',
				},
				contractStartDate: {
					type: 'string',
					description:
						'Valid start date of a purchase order or purchase contract. Use the format `YYYY-MM-DD`.',
				},
				contractEndDate: {
					type: 'string',
					description:
						'Valid end date of a purchase order or purchase contract. Use the format `YYYY-MM-DD`.',
				},
				retainagePercent: {
					type: 'string',
					description: 'Default retainage percentage. For example, `50.10`.',
				},
				contacts: {
					type: 'object',
					description: 'Contacts associated with the purchasing document.',
					properties: {
						primary: {
							type: 'object',
							description: 'Primary contact for the purchasing document.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the primary contact. For example, `13`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the primary contact. For example, `Main contact`.',
								},
							},
							required: [],
						},
						shipTo: {
							type: 'object',
							description: 'Contact to ship to.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the contact to ship to. For example, `43`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the contact to ship to. For example, `shipping contact`.',
								},
							},
							required: [],
						},
						billTo: {
							type: 'object',
							description: 'Contact to bill to.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the contact to bill to. For example, `44`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the contact to bill to. For example, `Main billing contact`.',
								},
							},
							required: [],
						},
						deliverTo: {
							type: 'object',
							description: 'Contact to deliver to.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the contact to deliver to. For example, `66`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the contact to deliver to. For example, `Main deliver-to contact`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				shippingMethod: {
					type: 'object',
					description: 'Shipping method for the order.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the shipping method. For example, `77`.',
						},
						id: {
							type: 'string',
							description: 'Unique ID for the shipping method. For example, `Air`.',
						},
					},
					required: [],
				},
				paymentTerm: {
					type: 'object',
					description:
						'Accounts Payable (AP) term, which determines the expiration date for quotes and the due date for invoices.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the AP term. For example, `75`.',
						},
						id: {
							type: 'string',
							description: 'Unique ID for the AP term. For example, `10 Days`.',
						},
					},
					required: [],
				},
				txnDefinition: {
					type: 'object',
					description: 'Transaction definition that is associated with this transaction.',
					properties: {
						key: {
							type: 'string',
							description:
								'Unique key for the transaction definition. For example, `11`.',
						},
						id: {
							type: 'string',
							description:
								'Name of the transaction definition. For example, `Purchase Invoice`.',
						},
					},
					required: [],
				},
				sourceDocument: {
					type: 'object',
					description:
						'The source transaction from which the purchasing document was created.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the source document. For example, `44`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the source document. For example, `Purchase Order-PO0022`.',
						},
					},
					required: [],
				},
				taxSolution: {
					type: 'object',
					description:
						'The associated tax solution for the transaction. Tax solutions are available for different countries, for example Australia GST or South Africa VAT.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the tax solution. For example, `44`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the tax solution. For example, `simpleTax`.',
						},
					},
					required: [],
				},
				vendor: {
					type: 'object',
					description: 'Vendor associated with the purchasing document.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the vendor. For example, `15`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the vendor. For example, `ALPHA001`. Required when vendor is provided.',
						},
					},
					required: [],
				},
				attachment: {
					type: 'object',
					description: 'Supporting document for this transaction.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the attachment. For example, `41`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the attachment. For example, `Balance attachment`.',
						},
					},
					required: [],
				},
				status: {
					type: 'string',
					description:
						'Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.',
					default: '',
					enum: ['', 'active', 'inactive'],
				},
				scope: {
					type: 'string',
					description:
						'Details about the expected scope of work to be performed or materials to be delivered. Use 4000 or fewer characters. (Construction subscription)',
					maximum: 4000,
				},
				inclusions: {
					type: 'string',
					description:
						'Details related to items that are explicitly included in the terms of this document. Use 4000 or fewer characters. (Construction subscription) For example, `Includes drive through building`.',
					maximum: 4000,
				},
				exclusions: {
					type: 'string',
					description:
						'Details related to items that are explicitly excluded in the terms of this document. Use 4000 or fewer characters. (Construction subscription) For example, `Excludes additional purchase`.',
					maximum: 4000,
				},
				terms: {
					type: 'string',
					description:
						'Additional terms or performance obligations. Use 4000 or fewer characters. (Construction subscription)',
					maximum: 4000,
				},
				schedule: {
					type: 'object',
					description:
						'Additional details for Quote or Requisition and Order type documents. (Construction subscription)',
					properties: {
						scheduledStartDate: {
							type: 'string',
							description: 'Scheduled start date. Use the format `YYYY-MM-DD`.',
						},
						scheduledCompletionDate: {
							type: 'string',
							description:
								'Original scheduled date for completion of the work. Use the format `YYYY-MM-DD`.',
						},
						actualStartDate: {
							type: 'string',
							description: 'Actual start date. Use the format `YYYY-MM-DD`.',
						},
						actualCompletionDate: {
							type: 'string',
							description:
								'Date the work is actually complete. Use the format `YYYY-MM-DD`.',
						},
						revisedCompletionDate: {
							type: 'string',
							description:
								'Revised completion date for the work (caused by changes). Use the format `YYYY-MM-DD`.',
						},
						substantialCompletionDate: {
							type: 'string',
							description:
								'Date the work is considered substantially complete. Typically used as a milestone to identify when payment obligations are due. Use the format `YYYY-MM-DD`.',
						},
						noticeToProceedDate: {
							type: 'string',
							description:
								'Date when a formal notice to proceed was given. Use the format `YYYY-MM-DD`.',
						},
						responseDueDate: {
							type: 'string',
							description:
								'Date when a response is expected from an external party. Use the format `YYYY-MM-DD`.',
						},
						executedOnDate: {
							type: 'string',
							description:
								'Date the related contract document was formally executed. Use the format `YYYY-MM-DD`.',
						},
						scheduleImpactNotes: {
							type: 'string',
							description:
								'Details about any impacts on the current schedule. Use 100 or fewer characters. For example, `None`.',
							maximum: 100,
						},
					},
					required: [],
				},
				internalReference: {
					type: 'object',
					description: 'The internal reference.',
					properties: {
						referenceNumber: {
							type: 'string',
							description:
								'Reference number for the internal document. For example, `INT-01`.',
						},
						initiatedBy: {
							type: 'object',
							description: 'Reference to the employee who initiated the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `2`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `dhatchet`.',
								},
							},
							required: [],
						},
						verbalApprovalBy: {
							type: 'object',
							description: 'Employee who provided verbal approval.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `2`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `sdye`.',
								},
							},
							required: [],
						},
						issuedBy: {
							type: 'object',
							description: 'Employee who issued the internal document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `25`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `amarquess`.',
								},
							},
							required: [],
						},
						issuedOnDate: {
							type: 'string',
							description:
								'Date the document was issued. Use the format `YYYY-MM-DD`.',
						},
						approvedBy: {
							type: 'object',
							description: 'Employee who approved the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `1`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `treser`.',
								},
							},
							required: [],
						},
						approvedOnDate: {
							type: 'string',
							description:
								'Date the document was approved. Use the format `YYYY-MM-DD`.',
						},
						signedBy: {
							type: 'object',
							description: 'Employee who signed the internal document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `32`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `broberts`.',
								},
							},
							required: [],
						},
						signedOnDate: {
							type: 'string',
							description:
								'Date the document was signed. Use the format `YYYY-MM-DD`.',
						},
						source: {
							type: 'string',
							description: 'Internal source. For example, `Internal`.',
						},
						sourceReferenceNumber: {
							type: 'string',
							description:
								'Internal source reference number. For example, `REF-INT-01`.',
						},
					},
					required: [],
				},
				externalReference: {
					type: 'object',
					description: 'The external reference.',
					properties: {
						referenceNumber: {
							type: 'string',
							description:
								'Reference number for the external document. For example, `A23`.',
						},
						verbalApprovalBy: {
							type: 'object',
							description: 'Reference to the contact who provided verbal approval.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `6`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Johnson`.',
								},
							},
							required: [],
						},
						approvedBy: {
							type: 'object',
							description: 'Contact who approved the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `51`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Jagadish`.',
								},
							},
							required: [],
						},
						approvedOnDate: {
							type: 'string',
							description:
								'Date the document was approved. Use the format `YYYY-MM-DD`.',
						},
						signedBy: {
							type: 'object',
							description: 'Contact who signed the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `200`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Modulus Industries`.',
								},
							},
							required: [],
						},
						signedOnDate: {
							type: 'string',
							description:
								'Date the document was signed. Use the format `YYYY-MM-DD`.',
						},
					},
					required: [],
				},
				performanceBond: {
					type: 'object',
					description:
						'Performance bond details from the vendor or a company for an order. (Construction subscription)',
					properties: {
						isRequired: {
							type: 'boolean',
							description: 'Set to `true` if a performance bond is required.',
						},
						isReceived: {
							type: 'boolean',
							description: 'Set to `true` if a performance bond was received.',
						},
						amount: {
							type: 'string',
							description: 'Amount of the performance bond. For example, `1000.00`.',
						},
						vendor: {
							type: 'object',
							description:
								'Vendor for the related surety company providing the performance bond. (Construction subscription)',
							properties: {
								key: {
									type: 'string',
									description: 'Unique key for the vendor. For example, `11`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the vendor. For example, `VND-IND-0081`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				paymentBond: {
					type: 'object',
					description:
						'Payment bond details from the vendor or a company for an order. (Construction subscription)',
					properties: {
						isRequired: {
							type: 'boolean',
							description: 'Set to `true` if a payment bond is required.',
						},
						isReceived: {
							type: 'boolean',
							description: 'Set to `true` if a payment bond was received.',
						},
						amount: {
							type: 'string',
							description: 'Amount of the payment bond. For example, `1000.00`.',
						},
						vendor: {
							type: 'object',
							description:
								'Vendor for the related surety company providing the payment bond. (Construction subscription)',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the vendor. For example, `21`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the vendor. For example, `VND-IND-0081`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				revision: {
					type: 'object',
					description: 'Revision details post change order. (Construction subscription)',
					properties: {
						changeLogNumber: {
							type: 'number',
							description:
								'Log number for tracking the number of changes applied to a source transaction. Default 0 for a source transaction, 1 for a change transaction. (Construction subscription) For example, `1`.',
						},
					},
					required: [],
				},
				project: {
					type: 'object',
					description: 'Project associated with the purchasing document.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned unique key for the project. For example, `2`.',
						},
						id: {
							type: 'string',
							description:
								'Unique identifier of the project. For example, `NET-XML30-2`.',
						},
					},
					required: [],
				},
				lines: {
					type: 'array',
					description: 'Lines of the purchasing document.',
					items: {
						type: 'object',
						description:
							'Line items in a purchasing document represent purchasing transactions.',
						properties: {
							item: {
								type: 'object',
								description: 'Item associated with the document line.',
								properties: {
									key: {
										type: 'string',
										description: 'Unique key for the item. For example, `10`.',
									},
									id: {
										type: 'string',
										description: 'ID for the item. For example, `MX001`.',
									},
								},
								required: [],
							},
							lineDescription: {
								type: 'string',
								description:
									'Description of the line item. For example, `Computer`.',
							},
							memo: {
								type: 'string',
								description:
									'Memo about the document line item. For example, `Payment ACH`.',
							},
							unit: {
								type: 'string',
								description:
									'Unit associated with this document line item. For example, `Each`. Required when line is provided.',
							},
							unitQuantity: {
								type: 'string',
								description:
									'Unit quantity associated with this document line item. For example, `10.10`. Required when line is provided.',
							},
							unitPrice: {
								type: 'string',
								description:
									'Unit price associated with this line item. For example, `10.50`. Required when line is provided.',
							},
							status: {
								type: 'string',
								description:
									'Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.',
								default: '',
								enum: ['', 'active', 'inactive'],
							},
							sourceDocument: {
								type: 'object',
								description: 'Source purchasing document.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `77`.',
									},
									id: {
										type: 'string',
										description:
											'The source transaction from which the purchasing document was created. For example, `Purchase Order-PO0022`.',
									},
								},
								required: [],
							},
							sourceDocumentLine: {
								type: 'object',
								description: 'Source document line that needs to be converted.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document line item. For example, `2234`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the purchasing document line item. For example, `2234`.',
									},
								},
								required: [],
							},
							priceInTxnCurrency: {
								type: 'string',
								description: 'Transaction price. For example, `10.00`.',
							},
							isBillable: {
								type: 'boolean',
								description: 'Indicates whether the line is billable.',
							},
							taxRate: {
								type: 'string',
								description:
									'Tax rate for the document line item. For example, `10.050`.',
							},
							discount: {
								type: 'string',
								description:
									'Discount applied to the line item. For example, `10.25`.',
							},
							enableTax: {
								type: 'boolean',
								description: 'Indicates whether the line item is taxable.',
							},
							conversionType: {
								type: 'string',
								description: 'Conversion type used for the transaction.',
								default: '',
								enum: ['', 'quantity', 'price'],
							},
							dimensions: {
								type: 'object',
								description: 'The dimensions of the line.',
								properties: {
									location: {
										type: 'object',
										description:
											'Location associated with the document line. Required when dimensions is provided.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the location. For example, `22`.',
											},
											id: {
												type: 'string',
												description:
													'ID for the location. For example, `Arizona`.',
											},
										},
										required: [],
									},
									department: {
										type: 'object',
										description:
											'Department associated with the document line.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the department. For example, `9`.',
											},
											id: {
												type: 'string',
												description:
													'Unique ID for the department. For example, `Sales`.',
											},
										},
										required: [],
									},
									employee: {
										type: 'object',
										description: 'The employee of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the employee. For example, `10`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the employee. For example, `EMP-10`.',
											},
										},
										required: [],
									},
									project: {
										type: 'object',
										description: 'Project associated with the document line.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the associated project. For example, `2`.',
											},
											id: {
												type: 'string',
												description:
													'ID for the associated project. For example, `NET-XML30-2`.',
											},
										},
										required: [],
									},
									customer: {
										type: 'object',
										description: 'The customer of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the customer. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the customer. For example, `CUST-13`.',
											},
										},
										required: [],
									},
									vendor: {
										type: 'object',
										description: 'The vendor of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the vendor. For example, `357`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the vendor. For example, `1605212096809`.',
											},
										},
										required: [],
									},
									item: {
										type: 'object',
										description:
											'The item of the dimensions. Required when dimensions is provided.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the item. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the item. For example, `Case 13`.',
											},
										},
										required: [],
									},
									warehouse: {
										type: 'object',
										description:
											'Warehouse associated with the document line. Required when dimensions is provided.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the warehouse. For example, `6`.',
											},
											id: {
												type: 'string',
												description:
													'Unique ID for the warehouse. For example, `WH01`.',
											},
										},
										required: [],
									},
									class: {
										type: 'object',
										description: 'The class of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the class. For example, `731`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the class. For example, `REST_CLS_001`.',
											},
										},
										required: [],
									},
									task: {
										type: 'object',
										description: 'Task associated with the document line.',
										properties: {
											id: {
												type: 'string',
												description:
													'ID for the associated task. For example, `TSK01`.',
											},
											key: {
												type: 'string',
												description:
													'Unique key for the associated task. For example, `1`.',
											},
										},
										required: [],
									},
									costType: {
										type: 'object',
										description: 'The cost type of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the cost type. For example, `2`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the cost type. For example, `2`.',
											},
										},
										required: [],
									},
									asset: {
										type: 'object',
										description: 'The asset of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the asset. For example, `A001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the asset. For example, `1`.',
											},
										},
										required: [],
									},
									contract: {
										type: 'object',
										description: 'The contract of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the contract. For example, `CON-0045-1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the contract. For example, `12`.',
											},
										},
										required: [],
									},
									affiliateEntity: {
										type: 'object',
										description: 'The affiliate entity of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the affiliate entity. For example, `23`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the affiliate entity. For example, `AFF-23`.',
											},
										},
										required: [],
									},
									loanAccount: {
										type: 'object',
										description: 'The loan account of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the loan account. For example, `LN001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the loan account. For example, `852`.',
											},
										},
										required: [],
									},
									workOrder: {
										type: 'object',
										description: 'Work order associated with the dimension.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the work order. For example, `18`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the work order. For example, `WO-0017`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							requestedShippingDate: {
								type: 'string',
								description:
									'The date the customer requests the goods to arrive on their premises. The default is the due date. Use the format `YYYY-MM-DD`.',
							},
							shipByDate: {
								type: 'string',
								description:
									'The date the goods should be shipped so they arrive when the customer needs them. Use the format `YYYY-MM-DD`.',
							},
							cancelAfterDate: {
								type: 'string',
								description:
									'Indicates the date after which the order can be canceled. Use the format `YYYY-MM-DD`.',
							},
							doNotShipBeforeDate: {
								type: 'string',
								description:
									'Do not ship before this date. Use the format `YYYY-MM-DD`.',
							},
							doNotShipAfterDate: {
								type: 'string',
								description:
									'Do not ship after this date. Use the format `YYYY-MM-DD`.',
							},
							deliveryDueDate: {
								type: 'string',
								description: 'Promised by date. Use the format `YYYY-MM-DD`.',
							},
							deliveryMethod: {
								type: 'object',
								description:
									'Delivery method applies only to transaction documents that are configured as supplies purchase transactions. The delivery method is not populated for transaction documents that are not used for supplies purchase transactions. For more information, see [Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Inventory_Control/Setting_up_Inventory_Control/configure-inventory-control-FbF.htm#SuppliesInventory).',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the delivery method. For example, `77`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID for the delivery method. For example, `Air`.',
									},
								},
								required: [],
							},
							orderConfirmationDate: {
								type: 'string',
								description:
									'Date the order was confirmed. Use the format `YYYY-MM-DD`.',
							},
							allocation: {
								type: 'object',
								description:
									'Transaction allocation template for the line item, which distributes the amount across specified dimensions.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the allocation. For example, `14`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the allocation. For example, `Alloc1-WBS-US`.',
									},
								},
								required: [],
							},
							taxSchedule: {
								type: 'object',
								description:
									'If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details in the purchasing transaction.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the tax schedule. For example, `19`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID of the tax schedule. For example, `Sale Goods Standard`.',
									},
								},
								required: [],
							},
							trackingDetail: {
								type: 'array',
								description:
									'List of warehouse inventory details including serial number, aisle, bin, and row per item.',
								items: {
									type: 'object',
									description:
										'List of warehouse inventory details including serial number, aisle, bin, and row per document line item.',
									properties: {
										quantity: {
											type: 'string',
											description:
												'The quantity of the units being built for the combination of the tracking attributes specified for the line. For example, `10`.',
										},
										serialNumber: {
											type: 'string',
											description:
												'Serial number of the line item. For example, `S1001`.',
										},
										lotNumber: {
											type: 'string',
											description:
												'The lot numbers for the units being built and the quantity being built for each lot. For example, `L1001`.',
										},
										expirationDate: {
											type: 'string',
											description:
												'The expiration date for the units being built and the quantity being built. Use the format `YYYY-MM-DD`.',
										},
										aisle: {
											type: 'object',
											description: 'Aisle associated with the line details.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the aisle. For example, `10`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the aisle. For example, `AISLE1`.',
												},
											},
											required: [],
										},
										bin: {
											type: 'object',
											description:
												'The bin associated with the line details.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the bin. For example, `20`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the bin. For example, `BIN1`.',
												},
											},
											required: [],
										},
										row: {
											type: 'object',
											description:
												'The row associated with the line details.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the row. For example, `15`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the row. For example, `ROW1`.',
												},
											},
											required: [],
										},
										item: {
											type: 'object',
											description: 'Item associated with the line details.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the item. For example, `10`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the item. For example, `Battery`.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							documentHeader: {
								type: 'object',
								description: 'Header level details for the document line item.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `55`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the purchasing document. For example, `Purchase Invoice-PO0066`.',
									},
								},
								required: [],
							},
							retainage: {
								type: 'object',
								description:
									'Line-level retainage details. (Construction subscription)',
								properties: {
									percentage: {
										type: 'string',
										description: 'Retainage percentage. For example, `10.00`.',
									},
									baseAmountRetained: {
										type: 'string',
										description: 'Base amount retained. For example, `10.00`.',
									},
									txnAmountRetained: {
										type: 'string',
										description:
											'Transaction amount retained. For example, `10.00`.',
									},
								},
								required: [],
							},
							relatedDocument: {
								type: 'object',
								description:
									'Reference to the source transaction when creating a change order. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned unique key for the purchasing document. For example, `5151`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID for the purchasing document. This value is the same as the key for this object. For example, `5151`.',
									},
								},
								required: [],
							},
							relatedDocumentLine: {
								type: 'object',
								description:
									'Reference to the source transaction line when creating a change order. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned unique key for the document line. For example, `13965`.',
									},
									id: {
										type: 'string',
										description:
											'Name or other unique ID for the document line. For example, `13965`.',
									},
								},
								required: [],
							},
							extendedPriceInTxnCurrency: {
								type: 'string',
								description:
									'Extended price in transaction currency. For example, `1294.3200000000`.',
							},
							extendedCost: {
								type: 'string',
								description: 'Extended total cost. For example, `1560.0000000000`.',
							},
							revision: {
								type: 'object',
								description:
									'Line-level revised details post change order. (Construction subscription)',
								properties: {
									unitQuantity: {
										type: 'number',
										description: 'Revised unit quantity. For example, `10`.',
									},
									quantity: {
										type: 'number',
										description: 'Revised quantity. For example, `10`.',
									},
								},
								required: [],
							},
							draft: {
								type: 'object',
								description:
									'Line-level draft details post change order. (Construction subscription)',
								properties: {
									unitQuantity: {
										type: 'number',
										description:
											'Draft unit quantity change. For example, `10`.',
									},
									quantity: {
										type: 'number',
										description: 'Draft quantity change. For example, `10`.',
									},
									price: {
										type: 'string',
										description:
											'Draft price change. For example, `20.0000000000`.',
									},
								},
								required: [],
							},
							isReverseConversion: {
								type: 'boolean',
								description:
									'Indicates whether the document line is reverse converted. (Construction subscription)',
							},
							amortizationTemplate: {
								type: 'object',
								description:
									'Amortization template for prepaid expense distribution.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the amortization template. For example, `1`.',
									},
									id: {
										type: 'string',
										description:
											'Unique identifier for the amortization template. For example, `StraightLine_Monthly`.',
									},
								},
								required: [],
							},
							amortizationStartDate: {
								type: 'string',
								description:
									'Start date for the amortization period. Use the format `YYYY-MM-DD`.',
							},
							amortizationEndDate: {
								type: 'string',
								description:
									'End date for the amortization period. Use the format `YYYY-MM-DD`.',
							},
							lineSubtotals: {
								type: 'array',
								description: 'Lines of the purchasing document line subtotal.',
								items: {
									type: 'object',
									description:
										'Details of the subtotals, taxes, discounts, charges, and more for the document line.',
									properties: {
										absoluteValue: {
											type: 'string',
											description:
												'A non-negative base amount for the document subtotal line. For example, `100.00`.',
										},
										txnAbsoluteValue: {
											type: 'string',
											description:
												'A non-negative amount for the subtotal line. For example, `100.00`.',
										},
										enableOverrideTax: {
											type: 'boolean',
											description:
												'Set this field to `true` to allow users to override both tax detail (`taxDetail`) and the tax value (`txnAbsoluteValue`).',
										},
										taxDetail: {
											type: 'object',
											description:
												'Tax details describe a specific type of tax that applies to document lines.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the tax detail. For example, `15`.',
												},
												id: {
													type: 'string',
													description:
														'ID for the tax detail. For example, `VAT Tax Detail`.',
												},
											},
											required: [],
										},
										status: {
											type: 'string',
											description:
												'Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.',
											default: '',
											enum: ['', 'active', 'inactive'],
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				subtotals: {
					type: 'array',
					description: 'Lines of the purchasing document subtotal.',
					items: {
						type: 'object',
						description:
							'Details of subtotals, taxes, discounts, charges, and more for a purchasing transaction.',
						properties: {
							description: {
								type: 'string',
								description:
									'Description of the document subtotal. For example, `Tax`.',
							},
							absoluteValue: {
								type: 'string',
								description:
									'Non-negative base amount for the subtotal. API clients can set this value; when provided, it is used by the system when calculating any derived subtotal totals. For example, `40.50`.',
							},
							percentValue: {
								type: 'string',
								description:
									'Percentage value that is calculated on the total of all line items of the document. For example, `10.50`.',
							},
							txnAbsoluteValue: {
								type: 'string',
								description:
									'Non-negative transaction amount calculated across all other lines of the document. For example, `44.78`.',
							},
							dimensions: {
								type: 'object',
								description: 'The dimensions of the subtotal.',
								properties: {
									location: {
										type: 'object',
										description:
											'Location associated with the document subtotal.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the location. For example, `22`.',
											},
											id: {
												type: 'string',
												description:
													'ID for the location. For example, `Arizona`.',
											},
										},
										required: [],
									},
									department: {
										type: 'object',
										description:
											'Department associated with the document subtotal.',
										properties: {
											key: {
												type: 'string',
												description:
													"Unique key for the department. For example, `9`. Sage's OpenAPI spec marks this field as read-only for subtotals, so Sage may ignore it.",
											},
											id: {
												type: 'string',
												description:
													"Unique ID for the department. For example, `Sales`. Sage's OpenAPI spec marks this field as read-only for subtotals, so Sage may ignore it.",
											},
										},
										required: [],
									},
									employee: {
										type: 'object',
										description: 'The employee of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the employee. For example, `10`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the employee. For example, `EMP-10`.',
											},
										},
										required: [],
									},
									project: {
										type: 'object',
										description: 'The project of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the project. For example, `2`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the project. For example, `NET-XML30-2`.',
											},
										},
										required: [],
									},
									customer: {
										type: 'object',
										description: 'The customer of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the customer. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the customer. For example, `CUST-13`.',
											},
										},
										required: [],
									},
									vendor: {
										type: 'object',
										description: 'The vendor of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the vendor. For example, `357`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the vendor. For example, `1605212096809`.',
											},
										},
										required: [],
									},
									item: {
										type: 'object',
										description: 'The item of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the item. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the item. For example, `Case 13`.',
											},
										},
										required: [],
									},
									warehouse: {
										type: 'object',
										description: 'The warehouse of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the warehouse. For example, `6`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the warehouse. For example, `WH01`.',
											},
										},
										required: [],
									},
									class: {
										type: 'object',
										description: 'The class of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the class. For example, `731`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the class. For example, `REST_CLS_001`.',
											},
										},
										required: [],
									},
									task: {
										type: 'object',
										description: 'The task of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the task. For example, `1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the task. For example, `1`.',
											},
										},
										required: [],
									},
									costType: {
										type: 'object',
										description: 'The cost type of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the cost type. For example, `2`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the cost type. For example, `2`.',
											},
										},
										required: [],
									},
									asset: {
										type: 'object',
										description: 'The asset of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the asset. For example, `A001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the asset. For example, `1`.',
											},
										},
										required: [],
									},
									contract: {
										type: 'object',
										description: 'The contract of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the contract. For example, `CON-0045-1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the contract. For example, `12`.',
											},
										},
										required: [],
									},
									affiliateEntity: {
										type: 'object',
										description: 'The affiliate entity of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the affiliate entity. For example, `23`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the affiliate entity. For example, `AFF-23`.',
											},
										},
										required: [],
									},
									loanAccount: {
										type: 'object',
										description: 'The loan account of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the loan account. For example, `LN001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the loan account. For example, `852`.',
											},
										},
										required: [],
									},
									workOrder: {
										type: 'object',
										description: 'Work order associated with the dimension.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the work order. For example, `18`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the work order. For example, `WO-0017`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['documentName', 'txnDate'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description: 'System-assigned key of the purchasing document.',
				},
				id: { type: 'string', description: 'Unique ID of the purchasing document.' },
				href: {
					type: 'string',
					description: 'Relative API URL of the purchasing document.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'deleteInvoice',
		label: 'Delete an invoice',
		description: 'Deletes an invoice. Only invoices in draft or posted state can be deleted.',
		context:
			'---\nname: deleteInvoice\ndescription: Deletes an invoice by its key.\n---\n\nDeletes an invoice. Only invoices with a `draft` or `posted` state can be deleted.\n\nThis action cannot be undone. To cancel a posted invoice while keeping an audit trail, use `reverseInvoice` instead.\n\nThe API returns an empty response (204 No Content) on success.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description:
						'System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.',
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['key'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'deletePurchasingDocument',
		label: 'Delete a purchasing document',
		description:
			'Deletes a purchasing document. Several factors determine whether a purchasing document can be deleted.',
		context:
			'---\nname: deletePurchasingDocument\ndescription: Deletes a purchasing document.\n---\n\nDeletes a purchasing document. Several factors determine whether a purchasing transaction can be deleted. See [Purchasing transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_po_transactions) in the Sage Intacct Help Center for more information.\n\nThis action cannot be undone. The API returns an empty response (204 No Content) on success.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				documentName: {
					type: 'string',
					description:
						'Name of the transaction definition used as the template for the purchasing document, for example `Purchase Order`. It must match a transaction definition configured in the company. Look it up with the Search purchasing documents Endpoint or in the Sage Intacct transaction definitions.',
				},
				key: {
					type: 'string',
					description:
						'System-assigned key of the purchasing document. You can find it in the `key` field of a created, queried or retrieved purchasing document.',
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['documentName', 'key'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'generateInvoicePdf',
		label: 'Generate a PDF of an invoice',
		description: 'Generates a PDF of an invoice and returns a download link.',
		context:
			'---\nname: generateInvoicePdf\ndescription: Generates a PDF of an invoice and returns its download link.\n---\n\nThis workflow enables you to generate a PDF of an AR invoice. The response includes a download link for the generated PDF.\n\nThis Endpoint does not download the file. It returns `downloadURL`, a path relative to `https://api.intacct.com`. Downloading the PDF is a separate authorized GET request that returns binary data, which Endpoints cannot return. The invoice itself is not changed.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description:
						'System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.',
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['key'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description: 'System-assigned key for the invoice. For example, `132`.',
				},
				id: {
					type: 'string',
					description: 'Unique ID for the invoice. For example, `132`.',
				},
				href: {
					type: 'string',
					description:
						'URL endpoint for the invoice. For example, `/objects/accounts-receivable/invoice/132`.',
				},
				downloadURL: { type: 'string', description: 'The download link for the invoice.' },
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'getInvoice',
		label: 'Get an invoice',
		description: 'Returns information about a specific invoice by its key.',
		context:
			'---\nname: getInvoice\ndescription: Retrieves a single invoice by its key.\n---\n\nReturns detailed information for a specified invoice. Requires the Accounts Receivable subscription and the List, View Invoices permission.\n\nThe `key` is the system-assigned key of the invoice (for example `99`), not the invoice number. Use `queryInvoices` to find the key by invoice number or other criteria.\n\nUse this Endpoint after `createInvoice` or `updateInvoice` to read the full invoice, because those Endpoints return only `key`, `id` and `href`.\n\nDates are returned as the API returns them (for example `2022-12-06`).',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description:
						'System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.',
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['key'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description: 'System-assigned key for the AR invoice. For example, `11`.',
				},
				id: {
					type: 'string',
					description: 'Unique identifier for the AR invoice. For example, `11`.',
				},
				recordType: {
					type: 'string',
					description: 'The record type for the invoice. For example, `ri`.',
				},
				moduleKey: {
					type: 'string',
					description: 'Key of the module from which the invoice was created.',
					default: '',
					enum: ['', 'accountsReceivable', 'orderEntry'],
				},
				invoiceNumber: {
					type: 'string',
					description: 'Invoice number. For example, `INV-001`.',
				},
				state: {
					type: 'string',
					description: 'State of the invoice in the workflow. For example, `posted`.',
					default: '',
					enum: [
						'',
						'reversed',
						'reversal',
						'draft',
						'noValue',
						'posted',
						'paid',
						'partiallyPaid',
						'selected',
					],
				},
				dueInDays: {
					type: 'number',
					description: 'Number of days until the invoice is due. For example, `108`.',
				},
				referenceNumber: {
					type: 'string',
					description:
						'Customer purchase order number or another reference number. For example, `PO6917`.',
				},
				description: {
					type: 'string',
					description:
						'Description of the invoice, which prints on the Customer Ledger report. For example, `Regular invoice`.',
				},
				documentId: {
					type: 'string',
					description:
						'This field is deprecated, please use `salesDocument` field instead.',
				},
				salesDocument: {
					type: 'object',
					description: 'The sales document of the invoice.',
					properties: {
						id: {
							type: 'string',
							description:
								'Document ID of the sales invoice. For example, `Sales Invoice-SI-00188`.',
						},
						key: {
							type: 'string',
							description:
								'System-assigned key to uniquely identify the order entry document. For example, `511`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the order entry document. For example, `/objects/order-entry/document/511`.',
						},
					},
					required: [],
				},
				discountCutOffDate: {
					type: 'string',
					description: 'Date of the discount. Returned in the format `YYYY-MM-DD`.',
				},
				invoiceDate: {
					type: 'string',
					description:
						'Date the invoice was created. Returned in the format `YYYY-MM-DD`.',
				},
				dueDate: {
					type: 'string',
					description: 'Date the invoice is due. Returned in the format `YYYY-MM-DD`.',
				},
				currency: {
					type: 'object',
					description: 'Currency details for this invoice.',
					properties: {
						baseCurrency: {
							type: 'string',
							description: 'Base currency for the invoice. For example, `USD`.',
						},
						txnCurrency: {
							type: 'string',
							description:
								'The transaction currency of this invoice. For example, `USD`.',
						},
						exchangeRate: {
							type: 'object',
							description: 'Exchange rate details used to calculate the base amount.',
							properties: {
								date: {
									type: 'string',
									description:
										'Exchange rate date for this transaction. Returned in the format `YYYY-MM-DD`.',
								},
								rate: {
									type: 'number',
									description:
										'Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.',
								},
								typeId: {
									type: 'string',
									description:
										'Exchange rate type used to calculate the base amount from the transaction amount. For example, `Intacct Daily Rate`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				totalBaseAmount: {
					type: 'string',
					description:
						'For multi-currency companies, total entered in the base currency of the company. For example, `700000`.',
				},
				totalBaseAmountDue: {
					type: 'string',
					description:
						'For multi-currency companies, total due in the base currency of the company. For example, `700000`.',
				},
				totalTxnAmount: {
					type: 'string',
					description:
						'Total transaction amount in the currency of the invoice. For example, `700000`.',
				},
				totalTxnAmountDue: {
					type: 'string',
					description:
						'Total transaction amount due in the currency of the invoice. For example, `700000`.',
				},
				dunningCount: {
					type: 'number',
					description: 'Number of associated dunning notices. For example, `1`.',
				},
				customerMessage: {
					type: 'object',
					description: "Message to include on the customer's invoice.",
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key for the customer message. For example, `10`.',
						},
						id: {
							type: 'string',
							description:
								'ID for the customer message. For example, `welcome message`.',
						},
						message: {
							type: 'string',
							description:
								'Message text for the customer message. For example, `welcome to the company`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the customer message. For example, `/objects/accounts-receivable/customer-message/10`.',
						},
					},
					required: [],
				},
				recurringSchedule: {
					type: 'object',
					description: 'Recurring schedule used to automate the billing process.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key to uniquely identify the recurring schedule. For example, `20`.',
						},
					},
					required: [],
				},
				paymentInformation: {
					type: 'object',
					description: 'Payment information for the invoice.',
					properties: {
						fullyPaidDate: {
							type: 'string',
							description:
								'Date the invoice was paid. Returned in the format `YYYY-MM-DD`.',
						},
						daysToPay: {
							type: 'number',
							description:
								'Number of days from invoiceDate to fullyPaidDate. For example, `23`.',
						},
						daysPaidAfterDue: {
							type: 'number',
							description:
								'Number of days from invoice dueDate to fullyPaidDate. For example, `3`.',
						},
						totalBaseAmountPaid: {
							type: 'string',
							description:
								"Total paid in the company's base currency. For example, `500`.",
						},
						totalBaseAmountSelectedForPayment: {
							type: 'string',
							description:
								"Total selected for payment in the company's base currency. For example, `500`.",
						},
						totalTxnAmountSelectedForPayment: {
							type: 'string',
							description:
								'Total amount selected for payment in the invoice currency. For example, `500`.',
						},
						totalTxnAmountPaid: {
							type: 'string',
							description:
								'Total amount paid in the invoice currency. For example, `500`.',
						},
					},
					required: [],
				},
				contacts: {
					type: 'object',
					description: 'Associated contacts.',
					properties: {
						payTo: {
							type: 'object',
							description: 'Pay to contact information from the customer record.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key to uniquely identify the contact. For example, `176`.',
								},
								id: {
									type: 'string',
									description:
										'Name of the contact. For example, `Power Aerospace Materials(C1)`.',
								},
								href: {
									type: 'string',
									description:
										'URL for the contact. For example, `/objects/company-config/contact-version/176`.',
								},
							},
							required: [],
						},
						returnTo: {
							type: 'object',
							description: 'Return to contact information from the customer record.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key to uniquely identify the contact. For example, `176`.',
								},
								id: {
									type: 'string',
									description:
										'Name of the contact. For example, `Power Aerospace Materials(C1)`.',
								},
								href: {
									type: 'string',
									description:
										'URL for the contact. For example, `/objects/company-config/contact-version/176`.',
								},
								tax: {
									type: 'object',
									description: 'Tax related information for the ship-to contact.',
									properties: {
										taxId: {
											type: 'string',
											description:
												'Tax identification number. For example, `252-85-7897`.',
										},
										group: {
											type: 'object',
											description:
												'Contact tax group associated with the ship-to contact.',
											properties: {
												key: {
													type: 'string',
													description:
														'System-assigned key for the group. For example, `288`.',
												},
												id: {
													type: 'string',
													description:
														'Unique identifier for the group. For example, `Goods Zero Rate - CA`.',
												},
												href: {
													type: 'string',
													description:
														'URL endpoint for the group. For example, `/objects/tax/contact-tax-group/288`.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				isSystemGeneratedDocument: {
					type: 'boolean',
					description:
						'If `true`, this invoice record is created by the system internally and not created based on user input.',
				},
				billbackTemplate: {
					type: 'object',
					description:
						'If AR is configured for inter-entity bill back, the template to use to create a matching bill.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the template. For example, `18`.',
						},
						id: {
							type: 'string',
							description: 'ID for the template. For example, `BBT-error5`.',
						},
						href: {
							type: 'string',
							description:
								'URL for the template. For example, `/objects/accounts-receivable/billback-template/18`.',
						},
					},
					required: [],
				},
				attachment: {
					type: 'object',
					description: 'Supporting document attached to the invoice.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key for the supporting document. For example, `11`.',
						},
						id: {
							type: 'string',
							description:
								'System-assigned ID for the supporting document. For example, `11`.',
						},
						href: {
							type: 'string',
							description:
								'URL for the attachment. For example, `/objects/company-config/attachment/11`.',
						},
					},
					required: [],
				},
				customer: {
					type: 'object',
					description: 'Customer to receive the invoice.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the customer. For example, `14`.',
						},
						id: {
							type: 'string',
							description:
								'Unique identifier of the customer. For example, `C-00019`.',
						},
						name: {
							type: 'string',
							description:
								'Name of the customer. For example, `Haversham Textiles Corp`.',
						},
						emailOption: {
							type: 'boolean',
							description:
								'Indicates whether email is a delivery option for the customer.',
						},
						customerDue: {
							type: 'string',
							description: 'Amount due from the customer. For example, `124041.29`.',
						},
						deliveryOptions: {
							type: 'string',
							description: 'Invoice delivery options for the customer.',
							default: '',
							enum: ['', 'print', 'email', 'both'],
						},
						href: {
							type: 'string',
							description:
								'URL for the customer. For example, `/objects/accounts-receivable/customer/14`.',
						},
					},
					required: [],
				},
				term: {
					type: 'object',
					description: 'Term details for the invoice.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the term. For example, `16`.',
						},
						id: {
							type: 'string',
							description: 'Name of the term. For example, `30 Days`.',
						},
						href: {
							type: 'string',
							description:
								'URL for the term. For example, `/objects/accounts-receivable/term/16`.',
						},
					},
					required: [],
				},
				taxSolution: {
					type: 'object',
					description: 'Tax solution details for this invoice.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key to uniquely identify the tax solution. For example, `4`.',
						},
						id: {
							type: 'string',
							description:
								'Name or other unique identifier for the tax solution. For example, `Australia GST`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the tax solution. For example, `/objects/tax/tax-solution/4`.',
						},
					},
					required: [],
				},
				invoiceType: {
					type: 'string',
					description:
						'Specifies whether the transaction is a regular invoice (invoice), an electronic invoice (eInvoice), or an invoice reported to the tax agency because it is not eligible for e-invoicing (eReporting).',
					default: '',
					enum: ['', 'invoice', 'eInvoice', 'eReporting'],
				},
				invoiceMode: {
					type: 'string',
					description:
						'Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities. Specifies the invoice mode based on invoiceType. For eReporting, specify tlb1 (goods) or tps1 (services). For eInvoice, specify b1 or s1. Supported values: - `tlb1` - E-Reporting mode for goods. - `tps1` - E-Reporting mode for services. - `b1` - Submission of an e-invoice for goods. - `s1` - Submission of an e-invoice for services. Leave this field blank when `invoiceType` is `invoice`.',
					default: '',
					enum: ['', 'tlb1', 'tps1', 'b1', 's1'],
				},
				eInvoiceStatus: {
					type: 'string',
					description:
						'Current status of an e-invoice; applicable only when selected invoice type is eInvoice. Supported statuses: - `submitted` - The supplier submits its invoice or credit note to the public invoicing portal or its registered private platform. - `issuedByPlatform` - The invoice has been processed on the supplier’s platform and issued to the buyer. - `fileUploaded` - The invoice file has been uploaded to the platform. - `madeAvailable` - The invoice has been made available to the buyer on the public invoicing portal or its registered private platform. - `inHand` - The invoice is assumed by the buyer for processing. - `refused` - The invoice has been refused by the recipient for business reasons. A complete list of reasons for refusal is available in the document "Annex 1 - Semantic Format FE e-invoicing - Flows 1 & 2" on the "Reason for refusal" tab. - `paymentSent` - The bank transfer flow has been sent to the supplier / The reimbursement flow has been sent to the buyer. - `paymentReceived` - The supplier has received payment of the invoice. This status is mandatory for supply of services (except VAT on debits and excluding reverse charge transactions). - `disputed` - There is a dispute regarding the invoice. This may ultimately lead to refusal or approval by the buyer. - `notSent` - The invoice has not been sent to the platform. - `inTransit` - The invoice has been sent and is in transit between platforms. - `approved` - The invoice has been approved by the buyer. - `receivedByPlatform` - The invoice has been received by the public invoicing portal or the buyer’s registered private platform but has not yet been made available to the buyer. - `rejectedByPlatform` - The invoice can be automatically rejected by the platform on technical grounds (e.g. format, non-compliance with the standard, etc.). When the transmit platform rejects the invoice, the invoice must be corrected by its issuer and resubmitted to the platform. - `suspended` - Processing of the invoice is temporarily suspended. - `completed` - The invoice processing lifecycle is completed. - `partiallyApproved` - The invoice has been partially approved.',
					default: '',
					enum: [
						'',
						'submitted',
						'issuedByPlatform',
						'fileUploaded',
						'madeAvailable',
						'inHand',
						'refused',
						'paymentSent',
						'paymentReceived',
						'disputed',
						'notSent',
						'inTransit',
						'approved',
						'receivedByPlatform',
						'rejectedByPlatform',
						'suspended',
						'completed',
						'partiallyApproved',
					],
				},
				dispute: {
					type: 'object',
					description: 'France E-invoicing dispute information.',
					properties: {
						reason: {
							type: 'string',
							description: 'Dispute reason (France E-invoicing only).',
							default: '',
							enum: [
								'',
								'recipientNotConnected',
								'other',
								'bankDetailsError',
								'incorrectVATRate',
								'incorrectTotalAmount',
								'invoiceCalculationError',
								'legalNoticeMissing',
								'duplicateInvoice',
								'errorInRecipientInformation',
								'unknownTransaction',
								'issuerUnknown',
								'contractCompleted',
								'doubleInvoice',
								'orderNumberIncorrectOrMissing',
								'incorrectEmailBillingAddress',
								'incorrectOrMissingSiretNumber',
								'routingCodeMissingOrIncorrect',
								'contractualReferenceRequired',
								'incorrectReference',
								'incorrectUnitPrices',
								'incorrectDiscount',
								'incorrectQuantityBilled',
								'itemBilledIncorrectly',
								'incorrectPaymentMethod',
								'incorrectQualityOfItemDelivered',
								'deliveryProblem',
							],
						},
						notes: {
							type: 'string',
							description:
								'Additional information for disputing the bill which is supported only for France E-invoicing. Use this field to provide the detail that explains why the bill was disputed. For example, `Does not have an active invoice receiving address`.',
						},
					},
					required: [],
				},
				refuse: {
					type: 'object',
					description: 'France E-invoicing refusal information.',
					properties: {
						reason: {
							type: 'string',
							description: 'Refusal reason (France E-invoicing only).',
							default: '',
							enum: [
								'',
								'incorrectVATRate',
								'incorrectTotalAmount',
								'invoiceCalculationError',
								'legalNoticeMissing',
								'duplicateInvoice',
								'errorInRecipientInformation',
								'unknownTransaction',
								'issuerUnknown',
								'contractCompleted',
								'doubleInvoice',
								'orderNumberIncorrectOrMissing',
								'incorrectEmailBillingAddress',
								'contractualReferenceRequired',
							],
						},
						notes: {
							type: 'string',
							description:
								'Additional information for refusing the bill which is supported only for France E-invoicing. Use this field to provide the detail that explains why the bill was refused. For example, `The VAT rate used is not the one that should have been`.',
						},
					},
					required: [],
				},
				invoiceSummary: {
					type: 'object',
					description:
						'Summary details for this invoice. Summaries are collections of the same types of transactions grouped together for processing.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key to uniquely identify the summary. For example, `33`.',
						},
						id: {
							type: 'string',
							description:
								'Name of the summary. For example, `OE Sales Invoice: 2023 Batch 1`.',
						},
						glPostingDate: {
							type: 'string',
							description:
								'GL posting date for the summary. Returned in the format `YYYY-MM-DD`.',
						},
						isSummaryOpen: {
							type: 'string',
							description:
								'A summary can be `open` or `closed`. Items, such as invoices, can be added to open summaries.',
							default: '',
							enum: ['', 'open', 'closed'],
						},
						isSummaryPosted: {
							type: 'string',
							description:
								'If `true`, the summary has been posted to the General Ledger. For example, `false`.',
						},
						href: {
							type: 'string',
							description:
								'URL for the summary. For example, `/objects/accounts-receivable/summary/33`.',
						},
					},
					required: [],
				},
				downloadURL: {
					type: 'string',
					description: 'Contains download link for an invoice.',
				},
				allowOnlinePayment: {
					type: 'boolean',
					description:
						'Indicates whether online payment through a Payment Acceptance Services (PAS), like Stripe or PayPal, is enabled for this invoice.',
				},
				providerPayment: {
					type: 'object',
					description: 'Provider payment details for the invoice.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the provider payment. For example, `4`.',
						},
						id: {
							type: 'string',
							description: 'Unique ID for the provider payment. For example, `4`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the provider payment. For example, `/objects/accounts-receivable/provider-payment/4`.',
						},
						state: {
							type: 'string',
							description:
								'Current state of the payment processed by a payment provider.',
							default: '',
							enum: [
								'',
								'inProgress',
								'pending',
								'unauthorized',
								'arrived',
								'rejected',
								'paidOffline',
								'cancelled',
								'processing',
								'processingCompleted',
								'processingFailed',
								'refunded',
								'partiallyPaid',
								'partiallyRefunded',
								'paid',
								'requestFailed',
							],
						},
					},
					required: [],
				},
				retainage: {
					type: 'object',
					description:
						'Retainage information for the invoice. Retainage is a portion of the agreed-upon contract price withheld until the work is substantially complete. (Construction subscription)',
					properties: {
						defaultPercentage: {
							type: 'string',
							description:
								'Default retainage percentage for the customer. For example, `5.00`.',
						},
						totalTxnAmountRetained: {
							type: 'string',
							description:
								'Total transaction amount retained. For example, `200.00`.',
						},
						totalTxnAmountReleased: {
							type: 'string',
							description:
								'Total transaction amount released. For example, `100.00`.',
						},
						totalBaseAmountRetained: {
							type: 'string',
							description: 'Total base amount retained. For example, `100.00`.',
						},
						isReleased: {
							type: 'boolean',
							description: 'Indicates whether the retainage is released.',
						},
					},
					required: [],
				},
				projectContract: {
					type: 'object',
					description: 'Reference to the project contract. (Construction subscription)',
					properties: {
						key: {
							type: 'string',
							description: 'Project contract key. For example, `1`.',
						},
						id: {
							type: 'string',
							description: 'Project contract ID. For example, `BTI-01`.',
						},
						name: {
							type: 'string',
							description:
								'Project contract name. For example, `Berkeley Technology Inc - Contract 01`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the project contract. For example, `/objects/construction/project-contract/1`.',
						},
					},
					required: [],
				},
				projectContractBilling: {
					type: 'object',
					description:
						'Project contract billing details for the invoice. (Construction subscription)',
					properties: {
						externalReferenceNumber: {
							type: 'string',
							description:
								'External reference number for the project contract. For example, `HGS-1024`.',
						},
						description: {
							type: 'string',
							description:
								'Description of the project contract. For example, `Construction of club house and offices`.',
						},
						contractDate: {
							type: 'string',
							description:
								'Date of the project contract. Returned in the format `YYYY-MM-DD`.',
						},
						billingThroughDate: {
							type: 'string',
							description:
								'Billing through date for the Account Receivable Invoice. Returned in the format `YYYY-MM-DD`.',
						},
						billingApplicationNumber: {
							type: 'string',
							description:
								'Billing application number for the Account Receivable Invoice. For example, `IA-89115`.',
						},
					},
					required: [],
				},
				architect: {
					type: 'object',
					description:
						'Reference to a project contract architect contact. (Construction subscription)',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the contact. For example, `12`.',
						},
						id: {
							type: 'string',
							description:
								'Unique identifier for the contact. For example, `Eberhardt`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the architect contact. For example, `/objects/company-config/contact/12`.',
						},
					},
					required: [],
				},
				projectContractBillingInvoiceSummary: {
					type: 'object',
					description:
						'Project contract billing summary totals on the invoice. (Construction subscription).',
					properties: {
						originalContractAmount: {
							type: 'string',
							description:
								'Sum of the original contract amounts. For example, `1000.0000000000`.',
						},
						netApprovedChangesAmount: {
							type: 'string',
							description:
								'Sum of the net approved changes amounts. For example, `1000.0000000000`.',
						},
						revisedContractAmount: {
							type: 'string',
							description:
								'Sum of the revised contract amounts. For example, `1000.0000000000`.',
						},
						completedFromPriorApplicationAmount: {
							type: 'string',
							description:
								'Sum of the completed from prior applications amounts. For example, `1000.0000000000`.',
						},
						completedToDateAmount: {
							type: 'string',
							description:
								'Sum of the completed to date amounts. For example, `1000.0000000000`.',
						},
						lessPreviousBillingAmount: {
							type: 'string',
							description:
								'Sum of the less previous billing amounts. For example, `1000.0000000000`.',
						},
						currentDueAmount: {
							type: 'string',
							description:
								'Sum of the current due amounts. For example, `1000.0000000000`.',
						},
						balanceToFinishAmount: {
							type: 'string',
							description:
								'Sum of the balance to finish amounts. For example, `1000.0000000000`.',
						},
						taxAmount: {
							type: 'string',
							description: 'Sum of the taxes. For example, `1000.0000000000`.',
						},
						chargeAmount: {
							type: 'string',
							description: 'Sum of the charges. For example, `1000.0000000000`.',
						},
						discountAmount: {
							type: 'string',
							description: 'Sum of the discounts. For example, `1000.0000000000`.',
						},
						changesApprovedPriorMonth: {
							type: 'object',
							description:
								'Project contract billing changes approved for the prior month on the Order Entry document or Account Receivable Invoice.',
							properties: {
								additionsAmount: {
									type: 'string',
									description:
										'Sum of the additional changes approved in prior months. For example, `1000.0000000000`.',
								},
								deductionsAmount: {
									type: 'string',
									description:
										'Sum of the deducted changes approved in prior months. For example, `1000.0000000000`.',
								},
							},
							required: [],
						},
						changesApprovedThisMonth: {
							type: 'object',
							description:
								'Project contract billing changes approved for the current month on the Order Entry document or Account Receivable Invoice.',
							properties: {
								additionsAmount: {
									type: 'string',
									description:
										'Sum of the additional changes approved this month. For example, `1000.0000000000`.',
								},
								deductionsAmount: {
									type: 'string',
									description:
										'Sum of the deducted changes approved this month. For example, `1000.0000000000`.',
								},
							},
							required: [],
						},
						retainage: {
							type: 'object',
							description: 'Retainage totals.',
							properties: {
								amountRetained: {
									type: 'string',
									description:
										'Sum of the invoice amounts retained. For example, `1000.0000000000`.',
								},
								billedAmount: {
									type: 'string',
									description:
										'Sum of the invoice retainage billed. For example, `1000.0000000000`.',
								},
								netChangeHeldAmount: {
									type: 'string',
									description:
										'Sum of the net change retainage held. For example, `1000.0000000000`.',
								},
								heldToDateAmount: {
									type: 'string',
									description:
										'Sum of the retainage held to date. For example, `1000.0000000000`.',
								},
								billedToDateAmount: {
									type: 'string',
									description:
										'Sum of the retainage billed to date. For example, `1000.0000000000`.',
								},
								balanceToDateAmount: {
									type: 'string',
									description:
										'Sum of the retainage balance to date. For example, `1000.0000000000`.',
								},
								previousBalanceAmount: {
									type: 'string',
									description:
										'Sum of the previous retainage balance. For example, `1000.0000000000`.',
								},
								totalEarnedLessAmount: {
									type: 'string',
									description:
										'Sum of the total earned less retainage. For example, `1000.0000000000`.',
								},
							},
							required: [],
						},
						accountsReceivableInvoiceNumber: {
							type: 'string',
							description: 'Accounts Receivable invoice number. For example, `INV1`.',
						},
						orderEntryDocumentId: {
							type: 'string',
							description:
								'Order Entry document ID. For example, `SO-AIA-Invoice01-Ord#0011#doc`.',
						},
						projectId: {
							type: 'string',
							description: 'Project ID. For example, `DIM - HCS`.',
						},
						projectName: {
							type: 'string',
							description:
								'Project name. For example, `Dimensions - Hands Computer Systems`.',
						},
					},
					required: [],
				},
				lines: {
					type: 'array',
					description: 'Line items of the invoice.',
					items: {
						type: 'object',
						description:
							'Line items in an AR invoice represent transactions captured in that invoice.',
						properties: {
							key: {
								type: 'string',
								description:
									'System-assigned key for the AR invoice line item. For example, `103`.',
							},
							id: {
								type: 'string',
								description:
									'Identifier for the AR invoice line item. For example, `103`.',
							},
							glAccount: {
								type: 'object',
								description:
									'General Ledger (GL) account associated with the line item.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the GL account. For example, `163`.',
									},
									id: {
										type: 'string',
										description:
											'User-assigned number for the GL account. For example, `4010`.',
									},
									name: {
										type: 'string',
										description:
											'Name of the GL account. For example, `Sales Revenue Licensing`.',
									},
									href: {
										type: 'string',
										description: 'Relative API URL of the GL account.',
									},
								},
								required: [],
							},
							overrideOffsetGLAccount: {
								type: 'object',
								description:
									'An alternative AR account to override the default GL AR account for the invoice line item.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the GL account. For example, `263`.',
									},
									id: {
										type: 'string',
										description: 'GL account number. For example, `1103`.',
									},
									name: {
										type: 'string',
										description:
											'GL account name. For example, `Accounts Receivable - Microcomputer`.',
									},
									href: {
										type: 'string',
										description:
											'URL for the GL account. For example, `/objects/general-ledger/account/263`.',
									},
								},
								required: [],
							},
							baseAmount: {
								type: 'string',
								description:
									'For multi-currency companies, Sage Intacct calculates the base amount by applying the exchange rate from the header to the transaction amount. For example, `24115.65`.',
							},
							txnAmount: {
								type: 'string',
								description:
									'Amount for the AR invoice line item in the transaction currency. For example, `16740.00`.',
							},
							memo: {
								type: 'string',
								description:
									'Memo or notes about the AR invoice line item. For example, `Replaces discontinued part`.',
							},
							currency: {
								type: 'object',
								description: 'Currency details for multi-currency companies.',
								properties: {
									baseCurrency: {
										type: 'string',
										description:
											'Base currency for the invoice line item. For example, `USD`.',
									},
									txnCurrency: {
										type: 'string',
										description:
											'Transaction currency for the invoice line item. For example, `EUR`.',
									},
									exchangeRate: {
										type: 'object',
										description:
											'Exchange rate details used to calculate the base amount.',
										properties: {
											date: {
												type: 'string',
												description:
													'Exchange rate date used to calculate the base amount from the transaction amount. Returned in the format `YYYY-MM-DD`.',
											},
											rate: {
												type: 'number',
												description:
													'Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.',
											},
											typeId: {
												type: 'string',
												description:
													'Exchange rate type used to calculate the base amount from the transaction amount. For example, `-1`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							paymentInformation: {
								type: 'object',
								description: 'Payment information for the line item.',
								properties: {
									totalBaseAmountPaid: {
										type: 'string',
										description:
											'Total base amount that was paid. For example, `100.00`.',
									},
									totalTxnAmountPaid: {
										type: 'string',
										description:
											'Total transaction amount that was paid. For example, `100.00`.',
									},
									totalBaseAmountSelectedForPayment: {
										type: 'string',
										description:
											'Total base amount selected for the payment. For example, `100.00`.',
									},
									totalTxnAmountSelectedForPayment: {
										type: 'string',
										description:
											'Total transaction amount selected for the payment. For example, `100.00`.',
									},
								},
								required: [],
							},
							allocation: {
								type: 'object',
								description:
									'Transaction allocation template for the line item, which distributes the invoice amount across specified dimensions.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the allocation. For example, `22`.',
									},
									id: {
										type: 'string',
										description:
											'System-assigned ID for the allocation. For example, `Premium Allocation`.',
									},
									href: {
										type: 'string',
										description: 'Relative API URL of the allocation.',
									},
								},
								required: [],
							},
							lineNumber: {
								type: 'number',
								description: 'Line number. For example, `1`.',
							},
							isSubtotal: {
								type: 'string',
								description:
									'Indicates if the line item is a subtotal, tax item, or neither.',
								default: '',
								enum: ['', 'subtotal', 'tax'],
							},
							baseLocation: {
								type: 'object',
								description: 'The base location of the line.',
								properties: {
									key: {
										type: 'string',
										description: 'Base location key. For example, `4`.',
									},
									id: {
										type: 'string',
										description:
											'Unique identifier for the location. For example, `US`.',
									},
									name: {
										type: 'string',
										description:
											'Name for the location. For example, `United States of America`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the location. For example, `/objects/company-config/location/1`.',
									},
								},
								required: [],
							},
							createdDate: {
								type: 'string',
								description:
									'Entry date for the line item. Returned in the format `YYYY-MM-DD`.',
							},
							accountLabel: {
								type: 'object',
								description: 'Meaningful name of AR account.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the account label. For example, `14`.',
									},
									id: {
										type: 'string',
										description:
											'Meaningful name of the account. For example, `Accounts Receivable - Microcomputer`.',
									},
									name: {
										type: 'string',
										description:
											'Name of the account label. For example, `Sales Midwest`.',
									},
									href: {
										type: 'string',
										description:
											'URL for the account label. For example, `/objects/accounts-receivable/account-label/14`.',
									},
								},
								required: [],
							},
							isSummarized: {
								type: 'boolean',
								description:
									'Indicates whether the entry is summarized. (Construction subscription)',
							},
							retainage: {
								type: 'object',
								description:
									'Retainage information for the line item. Retainage is a portion of the agreed upon contract price withheld until the work is substantially complete. (Construction subscription)',
								properties: {
									hasRetainage: {
										type: 'boolean',
										description:
											'If `true`, retainage applies to the line item.',
									},
									percentage: {
										type: 'string',
										description:
											'Retainage percentage for the line item. For example, `2.00`.',
									},
									baseAmountRetained: {
										type: 'string',
										description:
											'Base amount retained for the line item. For example, `20.00`.',
									},
									txnAmountRetained: {
										type: 'string',
										description:
											'Transaction amount retained for the line item. For example, `20.00`.',
									},
									txnAmountReleased: {
										type: 'string',
										description:
											'Transaction amount released for the line item. For example, `10.00`.',
									},
									isReleased: {
										type: 'boolean',
										description:
											'Indicates whether retainage is released to pay.',
									},
									isReleaseLine: {
										type: 'boolean',
										description:
											'Indicates whether the line item is a retainage release.',
									},
									offsetGLAccount: {
										type: 'object',
										description:
											'The GL account where the system posts retainage offsets to this line item.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the GL account. For example, `263`.',
											},
											id: {
												type: 'string',
												description:
													'GL account number. For example, `1103`.',
											},
											name: {
												type: 'string',
												description:
													'GL account name. For example, `Accounts Receivable - Microcomputer`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the GL account. For example, `/objects/general-ledger/account/263`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							projectContract: {
								type: 'object',
								description:
									'Reference to the project contract. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description: 'Project contract key. For example, `1`.',
									},
									id: {
										type: 'string',
										description: 'Project contract ID. For example, `BTI-01`.',
									},
									name: {
										type: 'string',
										description:
											'Project contract name. For example, `Berkeley Technology Inc - Contract 01`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the project contract. For example, `/objects/construction/project-contract/1`.',
									},
								},
								required: [],
							},
							projectContractLine: {
								type: 'object',
								description:
									'Reference to a specific project contract line. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description: 'Project contract line key. For example, `4`.',
									},
									id: {
										type: 'string',
										description:
											'Project contract line ID. For example, `Project-Contract-Line-04`.',
									},
									name: {
										type: 'string',
										description:
											'Project contract line name. For example, `Project contract line 04`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the project contract line. For example, `/objects/construction/project-contract-line/4`.',
									},
								},
								required: [],
							},
							taxEntries: {
								type: 'array',
								description: 'Tax entries for the AR invoice.',
								items: {
									type: 'object',
									description:
										'For VAT enabled transactions, invoice line items will have tax entries.',
									properties: {
										key: {
											type: 'string',
											description:
												'System-assigned key for the tax entry. For example, `7149`.',
										},
										id: {
											type: 'string',
											description:
												'Unique identifier for the tax entry. For example, `7149`.',
										},
										baseTaxAmount: {
											type: 'string',
											description: 'Base tax amount. For example, `100.00`.',
										},
										txnTaxAmount: {
											type: 'string',
											description:
												'Transaction tax amount. For example, `100.00`.',
										},
										taxRate: {
											type: 'number',
											description: 'Tax rate. For example, `1.0299`.',
										},
										orderEntryTaxDetail: {
											type: 'object',
											description:
												'Order Entry tax details associated with the invoice tax entry.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the Order Entry tax detail. For example, `1`.',
												},
												id: {
													type: 'string',
													description:
														'Unique identifier for the Order Entry tax detail. For example, `Alaska Tax Detail`.',
												},
												href: {
													type: 'string',
													description:
														'URL endpoint for the Order Entry tax detail. For example, `/objects/tax/order-entry-tax-detail/1`.',
												},
											},
											required: [],
										},
										invoiceLine: {
											type: 'object',
											description:
												'Invoice line item that the invoice tax entry is associated with.',
											properties: {
												id: {
													type: 'string',
													description:
														'Unique identifier for the invoice line. For example, `100`.',
												},
												key: {
													type: 'string',
													description:
														'Unique key for the invoice line. This value is the same as the `key` for this object. For example, `100`.',
												},
												href: {
													type: 'string',
													description:
														'URL endpoint for the invoice line. For example, `/objects/accounts-receivable/invoice-line/100`.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							dimensions: {
								type: 'object',
								description: 'The dimensions of the line.',
								properties: {
									location: {
										type: 'object',
										description:
											'Standard Sage Intacct dimension that allows you to create a hierarchy of locations to reflect how your company is organized.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the location. For example, `4`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier of the location. For example, `AU`.',
											},
											name: {
												type: 'string',
												description:
													'Name of the location. For example, `Australia`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the location. For example, `/objects/company-config/location/4`.',
											},
										},
										required: [],
									},
									department: {
										type: 'object',
										description:
											'Standard Sage Intacct dimension that allows you to create a hierarchy of departments to reflect how your company is organized.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the department. For example, `9`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier of the department. For example, `01`.',
											},
											name: {
												type: 'string',
												description:
													'Name of the department. For example, `Sales`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the department. For example, `/objects/company-config/department/9`.',
											},
										},
										required: [],
									},
									employee: {
										type: 'object',
										description: 'The employee of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the employee. For example, `10`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the employee. For example, `EMP-10`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the employee. For example, `Thomas, Glenn`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the employee. For example, `/objects/company-config/employee/10`.',
											},
										},
										required: [],
									},
									project: {
										type: 'object',
										description: 'The project of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the project. For example, `2`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the project. For example, `NET-XML30-2`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the project. For example, `Talcomp training`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the project. For example, `/objects/projects/project/2`.',
											},
										},
										required: [],
									},
									customer: {
										type: 'object',
										description: 'The customer of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the customer. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the customer. For example, `CUST-13`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the customer. For example, `Jack In the Box`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the customer. For example, `/objects/accounts-receivable/customer/13`.',
											},
										},
										required: [],
									},
									vendor: {
										type: 'object',
										description: 'The vendor of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the vendor. For example, `357`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the vendor. For example, `1605212096809`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the vendor. For example, `GenLab`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/357`.',
											},
										},
										required: [],
									},
									item: {
										type: 'object',
										description: 'The item of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the item. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the item. For example, `Case 13`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the item. For example, `Platform pack`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the item. For example, `/objects/inventory-control/item/13`.',
											},
										},
										required: [],
									},
									warehouse: {
										type: 'object',
										description: 'The warehouse of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the warehouse. For example, `6`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the warehouse. For example, `WH01`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the warehouse. For example, `WH01`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the warehouse. For example, `/objects/inventory-control/warehouse/6`.',
											},
										},
										required: [],
									},
									class: {
										type: 'object',
										description: 'The class of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the class. For example, `731`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the class. For example, `REST_CLS_001`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the class. For example, `Enterprises`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the class. For example, `/objects/company-config/class/731`.',
											},
										},
										required: [],
									},
									task: {
										type: 'object',
										description: 'The task of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the task. For example, `1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the task. For example, `1`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the task. For example, `Project Task`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the task. For example, `/objects/projects/task/1`.',
											},
										},
										required: [],
									},
									costType: {
										type: 'object',
										description: 'The cost type of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the cost type. For example, `2`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the cost type. For example, `2`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the cost type. For example, `Project Expense`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the cost type. For example, `/objects/construction/cost-type/2`.',
											},
										},
										required: [],
									},
									asset: {
										type: 'object',
										description: 'The asset of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the asset. For example, `A001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the asset. For example, `1`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the asset. For example, `Laptop`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the asset. For example, `/objects/fixed-assets/asset/1`.',
											},
										},
										required: [],
									},
									contract: {
										type: 'object',
										description: 'The contract of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the contract. For example, `CON-0045-1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the contract. For example, `12`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the contract. For example, `ACME Widgets - Service`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the contract. For example, `/objects/contracts/contract/12`.',
											},
										},
										required: [],
									},
									affiliateEntity: {
										type: 'object',
										description: 'The affiliate entity of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the affiliate entity. For example, `23`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the affiliate entity. For example, `AFF-23`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the affiliate entity. For example, `/objects/affiliate-entity/23`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the affiliate entity. For example, `100-USA`.',
											},
										},
										required: [],
									},
									loanAccount: {
										type: 'object',
										description: 'The loan account of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the loan account. For example, `LN001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the loan account. For example, `852`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the loan account. For example, `Business Loan`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the loan account. For example, `/objects/loan-management/loan-account/852`.',
											},
										},
										required: [],
									},
									workOrder: {
										type: 'object',
										description: 'Work order associated with the dimension.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the work order. For example, `18`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the work order. For example, `WO-0017`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the work order. For example, `WO-India`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the work order. For example, `/objects/construction/work-order/18`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							invoice: {
								type: 'object',
								description:
									"Header level details for the AR invoice's line items.",
								properties: {
									id: {
										type: 'string',
										description:
											'Identifier for the AR invoice. For example, `6`.',
									},
									key: {
										type: 'string',
										description:
											'System-assigned key for the AR invoice. For example, `6`.',
									},
									href: {
										type: 'string',
										description:
											'URL for the AR invoice. For example, `/objects/accounts-receivable/invoice/6`.',
									},
								},
								required: [],
							},
							audit: {
								type: 'object',
								description: 'The audit of the line.',
								properties: {
									createdDateTime: {
										type: 'string',
										description:
											'Date and time when the record was created. Returned in the ISO 8601 format.',
									},
									modifiedDateTime: {
										type: 'string',
										description:
											'Date and time when the record was last modified. Returned in the ISO 8601 format.',
									},
									createdBy: {
										type: 'string',
										description:
											'This field has been deprecated. Use the `createdByUser` field instead.',
									},
									modifiedBy: {
										type: 'string',
										description:
											'This field has been deprecated. Use the `modifiedByUser` field instead.',
									},
									createdByUser: {
										type: 'object',
										description: 'The user who created the object.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the user. For example, `436`.',
											},
											id: {
												type: 'string',
												description:
													'User login ID. For example, `JohnDoe`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the user. For example, `/objects/company-config/user/436`.',
											},
										},
										required: [],
									},
									modifiedByUser: {
										type: 'object',
										description: 'The user who last modified this object.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the user. For example, `3086`.',
											},
											id: {
												type: 'string',
												description:
													'User login ID. For example, `JaneDoe`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the user. For example, `/objects/company-config/user/3086`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				entity: {
					type: 'object',
					description:
						'The entity that the object is associated with. Objects created at the top level do not have an entity reference so the `key`, `id`, and `name` properties will be `null`.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the entity. For example, `46`.',
						},
						id: {
							type: 'string',
							description: 'Unique identifier for the entity. For example, `CORP`.',
						},
						name: {
							type: 'string',
							description: 'Name for the entity. For example, `Corp`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the entity. For example, `/objects/company-config/entity/46`.',
						},
					},
					required: [],
				},
				webURL: { type: 'string', description: 'RecordURL of the invoice.' },
				audit: {
					type: 'object',
					description: 'The audit of the invoice.',
					properties: {
						createdDateTime: {
							type: 'string',
							description: 'Time of the submission. Returned in the ISO 8601 format.',
						},
						modifiedDateTime: {
							type: 'string',
							description:
								'Date and time when the record was last modified. Returned in the ISO 8601 format.',
						},
						createdBy: {
							type: 'string',
							description:
								'This field has been deprecated. Use the `createdByUser` field instead.',
						},
						modifiedBy: {
							type: 'string',
							description:
								'This field has been deprecated. Use the `modifiedByUser` field instead.',
						},
						createdByUser: {
							type: 'object',
							description: 'The user who created the object.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the user. For example, `436`.',
								},
								id: {
									type: 'string',
									description: 'User login ID. For example, `JohnDoe`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the user. For example, `/objects/company-config/user/436`.',
								},
							},
							required: [],
						},
						modifiedByUser: {
							type: 'object',
							description: 'The user who last modified this object.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the user. For example, `3086`.',
								},
								id: {
									type: 'string',
									description: 'User login ID. For example, `JaneDoe`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the user. For example, `/objects/company-config/user/3086`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'getPurchasingDocument',
		label: 'Get a purchasing document',
		description: 'Returns information about a specific purchasing document by its key.',
		context:
			'---\nname: getPurchasingDocument\ndescription: Retrieves a single purchasing document by its key and document name.\n---\n\nReturns detailed information for a specified purchasing document. For example, to return details about a purchasing document that uses the PO Receiver Invoice transaction definition as a template, specify `PO Receiver Invoice` for `documentName`.\n\nBoth `documentName` (the transaction definition, for example `PO Receiver Invoice`) and `key` are required. Use `queryPurchasingDocuments` to find them.\n\nUse this Endpoint after `createPurchasingDocument` or `updatePurchasingDocument`, because those Endpoints return only `key`, `id` and `href`.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				documentName: {
					type: 'string',
					description:
						'Name of the transaction definition used as the template for the purchasing document, for example `Purchase Order`. It must match a transaction definition configured in the company. Look it up with the Search purchasing documents Endpoint or in the Sage Intacct transaction definitions.',
				},
				key: {
					type: 'string',
					description:
						'System-assigned key of the purchasing document. You can find it in the `key` field of a created, queried or retrieved purchasing document.',
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['documentName', 'key'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description:
						'System-assigned key for the purchasing document. For example, `66`.',
				},
				id: {
					type: 'string',
					description:
						'System-assigned key for the purchasing document. For example, `66`.',
				},
				href: {
					type: 'string',
					description:
						'URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Invoice/66`.',
				},
				documentId: {
					type: 'string',
					description:
						'Name or other unique ID for the purchasing document. For example, `Purchase Invoice-PO-O122`.',
				},
				documentNumber: {
					type: 'string',
					description:
						'Document number for the purchasing document. If the transaction definition does not have a numbering sequence configured, provide a number to identify the transaction. For example, `PO-O122`.',
				},
				documentType: {
					type: 'string',
					description:
						'Type of the associated transaction. For example, `Purchase Invoice`.',
				},
				state: {
					type: 'string',
					description: 'State of the purchasing document.',
					default: '',
					enum: [
						'',
						'submitted',
						'approved',
						'partiallyApproved',
						'declined',
						'draft',
						'pending',
						'closed',
						'inProgress',
						'converted',
						'partiallyConverted',
						'exception',
						'analyzing',
					],
				},
				isPrinted: {
					type: 'boolean',
					description: 'Indicates whether the document has been printed.',
				},
				isBackordered: {
					type: 'boolean',
					description: 'Indicates whether the transaction is a back order.',
				},
				subtotal: {
					type: 'string',
					description: 'Subtotal of the document in base currency. For example, `50.10`.',
				},
				subtotalInTxnCurrency: {
					type: 'string',
					description:
						'Subtotal of the document in transaction currency. For example, `51.10`.',
				},
				total: {
					type: 'string',
					description:
						'The sum of values across all lines in the document. For example, `100.10`.',
				},
				totalInTxnCurrency: {
					type: 'string',
					description: 'Total in the transaction currency. For example, `100.11`.',
				},
				baseCurrency: {
					type: 'string',
					description: 'Base currency for the transaction. For example, `USD`.',
				},
				txnCurrency: {
					type: 'string',
					description: 'Currency used for the transaction. For example, `USD`.',
				},
				exchangeRate: {
					type: 'object',
					description: 'Exchange rate details used to calculate the base amount.',
					properties: {
						date: {
							type: 'string',
							description:
								'Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid. Use the format `YYYY-MM-DD`.',
						},
						rate: {
							type: 'string',
							description:
								'Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.',
						},
						typeId: {
							type: 'string',
							description:
								'Exchange rate type used to calculate the base amount from the transaction amount. For example, `1`.',
						},
						typeName: {
							type: 'string',
							description:
								'The name of exchange rate type. For example, `Intacct Daily Rate`.',
						},
					},
					required: [],
				},
				txnDate: {
					type: 'string',
					description: 'Date on the purchasing document. Use the format `YYYY-MM-DD`.',
				},
				dueDate: {
					type: 'string',
					description:
						'Due date for the purchasing document. Use the format `YYYY-MM-DD`.',
				},
				isSystemGeneratedDocument: {
					type: 'boolean',
					description: 'Indicates whether the purchasing document is system generated.',
				},
				postingDate: {
					type: 'string',
					description:
						'The date on which purchasing document posts to the General Ledger. Use the format `YYYY-MM-DD`.',
				},
				referenceNumber: {
					type: 'string',
					description:
						'Reference to another document, as needed. For example, `PURCHASE-100`.',
				},
				vendorDocumentNumber: {
					type: 'string',
					description:
						'The number by which to reference a bill or other vendor document. A number is required only if Accounts Payable is configured to require numbers on bills, adjustments, and recurring bills. For example, `A2330-12`.',
				},
				notes: {
					type: 'string',
					description: 'Notes about the purchasing document. For example, `Fast order`.',
				},
				memo: {
					type: 'string',
					description:
						'Text to appear on the printed document. For example, `Lowry solutions`.',
				},
				paymentStatus: {
					type: 'string',
					description: 'Payment status for the transaction.',
					default: '',
					enum: ['', 'paid', 'partiallyPaid', 'selected', 'open'],
				},
				cancelAfterDate: {
					type: 'string',
					description:
						'Indicates the date after which the transaction should be canceled. Use the format `YYYY-MM-DD`.',
				},
				doNotShipBeforeDate: {
					type: 'string',
					description:
						'The date before which goods cannot be shipped. Use the format `YYYY-MM-DD`.',
				},
				doNotShipAfterDate: {
					type: 'string',
					description:
						'The date after which goods cannot be shipped. Use the format `YYYY-MM-DD`.',
				},
				requestedShippingDate: {
					type: 'string',
					description:
						'The date the customer requests the goods to arrive on their premises. The default is the due date. Use the format `YYYY-MM-DD`.',
				},
				promisedDate: {
					type: 'string',
					description:
						'The date the vendor promised to deliver the goods. Use the format `YYYY-MM-DD`.',
				},
				contractStartDate: {
					type: 'string',
					description:
						'Valid start date of a purchase order or purchase contract. Use the format `YYYY-MM-DD`.',
				},
				contractEndDate: {
					type: 'string',
					description:
						'Valid end date of a purchase order or purchase contract. Use the format `YYYY-MM-DD`.',
				},
				retainagePercent: {
					type: 'string',
					description: 'Default retainage percentage. For example, `50.10`.',
				},
				contacts: {
					type: 'object',
					description: 'Contacts associated with the purchasing document.',
					properties: {
						primary: {
							type: 'object',
							description: 'Primary contact for the purchasing document.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the primary contact. For example, `13`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the primary contact. For example, `Main contact`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the contact. For example, `/objects/company-config/contact-version/13`.',
								},
							},
							required: [],
						},
						shipTo: {
							type: 'object',
							description: 'Contact to ship to.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the contact to ship to. For example, `43`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the contact to ship to. For example, `shipping contact`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the contact to ship to. For example, `/objects/company-config/contact-version/43`.',
								},
							},
							required: [],
						},
						billTo: {
							type: 'object',
							description: 'Contact to bill to.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the contact to bill to. For example, `44`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the contact to bill to. For example, `Main billing contact`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the contact to bill to. For example, `/objects/company-config/contact-version/44`.',
								},
							},
							required: [],
						},
						deliverTo: {
							type: 'object',
							description: 'Contact to deliver to.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the contact to deliver to. For example, `66`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the contact to deliver to. For example, `Main deliver-to contact`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the contact to deliver to. For example, `/objects/company-config/contact-version/66`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				shippingMethod: {
					type: 'object',
					description: 'Shipping method for the order.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the shipping method. For example, `77`.',
						},
						id: {
							type: 'string',
							description: 'Unique ID for the shipping method. For example, `Air`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the shipping method. For example, `/objects/accounts-receivable/shipping-method/77`.',
						},
					},
					required: [],
				},
				paymentTerm: {
					type: 'object',
					description:
						'Accounts Payable (AP) term, which determines the expiration date for quotes and the due date for invoices.',
					properties: {
						href: {
							type: 'string',
							description:
								'URL endpoint for the AP term. For example, `/objects/accounts-payable/term/75`.',
						},
						key: {
							type: 'string',
							description: 'Unique key for the AP term. For example, `75`.',
						},
						id: {
							type: 'string',
							description: 'Unique ID for the AP term. For example, `10 Days`.',
						},
					},
					required: [],
				},
				txnDefinition: {
					type: 'object',
					description: 'Transaction definition that is associated with this transaction.',
					properties: {
						key: {
							type: 'string',
							description:
								'Unique key for the transaction definition. For example, `11`.',
						},
						id: {
							type: 'string',
							description:
								'Name of the transaction definition. For example, `Purchase Invoice`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the transaction definition. For example, `/objects/purchasing/txn-definition/11`.',
						},
					},
					required: [],
				},
				sourceDocument: {
					type: 'object',
					description:
						'The source transaction from which the purchasing document was created.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the source document. For example, `44`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the source document. For example, `Purchase Order-PO0022`.',
						},
						documentType: {
							type: 'string',
							description:
								'Document type of the source document. For example, `Purchase Order`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the source document. For example, `/objects/purchasing/document::Purchase%20Order/44`.',
						},
					},
					required: [],
				},
				taxSolution: {
					type: 'object',
					description:
						'The associated tax solution for the transaction. Tax solutions are available for different countries, for example Australia GST or South Africa VAT.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the tax solution. For example, `44`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the tax solution. For example, `simpleTax`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the tax solution. For example, `/objects/taxsolution/44`.',
						},
						taxCalculationMethod: {
							type: 'string',
							description: 'Calculation method used for the tax solution.',
							default: '',
							enum: ['', 'noTax', 'simpleTax', 'advancedTax', 'avaTax', 'VAT'],
						},
						showMultilineTax: {
							type: 'boolean',
							description: 'Indicates whether to show multiple taxes per line.',
						},
					},
					required: [],
				},
				vendor: {
					type: 'object',
					description: 'Vendor associated with the purchasing document.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the vendor. For example, `15`.',
						},
						id: {
							type: 'string',
							description: 'Unique ID for the vendor. For example, `ALPHA001`.',
						},
						name: {
							type: 'string',
							description: 'Name of the vendor. For example, `ALPH Apartments`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/15`.',
						},
					},
					required: [],
				},
				bill: {
					type: 'object',
					description: 'The bill associated with this purchasing document.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the AP bill. For example, `1`.',
						},
						id: {
							type: 'string',
							description: 'Unique ID for the AP bill. For example, `1`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the AP bill. For example, `/objects/accounts-payable/bill/1`.',
						},
					},
					required: [],
				},
				attachment: {
					type: 'object',
					description: 'Supporting document for this transaction.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the attachment. For example, `41`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the attachment. For example, `Balance attachment`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the attachment. For example, `/objects/company-config/attachment/41`.',
						},
					},
					required: [],
				},
				audit: {
					type: 'object',
					description: 'The audit of the purchasing document.',
					properties: {
						createdDateTime: {
							type: 'string',
							description: 'Time of the submission. Use the ISO 8601 format.',
						},
						modifiedDateTime: {
							type: 'string',
							description:
								'Date and time when the record was last modified. Use the ISO 8601 format.',
						},
						createdBy: {
							type: 'string',
							description:
								'This field has been deprecated. Use the `createdByUser` field instead.',
						},
						modifiedBy: {
							type: 'string',
							description:
								'This field has been deprecated. Use the `modifiedByUser` field instead.',
						},
						createdByUser: {
							type: 'object',
							description: 'The user who created the object.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the user. For example, `436`.',
								},
								id: {
									type: 'string',
									description: 'User login ID. For example, `JohnDoe`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the user. For example, `/objects/company-config/user/436`.',
								},
							},
							required: [],
						},
						modifiedByUser: {
							type: 'object',
							description: 'The user who last modified this object.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the user. For example, `3086`.',
								},
								id: {
									type: 'string',
									description: 'User login ID. For example, `JaneDoe`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the user. For example, `/objects/company-config/user/3086`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				webURL: { type: 'string', description: 'Record URL for the Purchasing document.' },
				entity: {
					type: 'object',
					description:
						'The entity that the object is associated with. Objects created at the top level do not have an entity reference so the `key`, `id`, and `name` properties will be `null`.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the entity. For example, `46`.',
						},
						id: {
							type: 'string',
							description: 'Unique identifier for the entity. For example, `CORP`.',
						},
						name: {
							type: 'string',
							description: 'Name for the entity. For example, `Corp`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the entity. For example, `/objects/company-config/entity/46`.',
						},
					},
					required: [],
				},
				status: {
					type: 'string',
					description:
						'Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.',
					default: '',
					enum: ['', 'active', 'inactive'],
				},
				invoiceType: {
					type: 'string',
					description:
						'Specifies whether the transaction is a regular invoice (invoice) or an electronic invoice (eInvoice).',
					default: '',
					enum: ['', 'invoice', 'eInvoice'],
				},
				invoiceMode: {
					type: 'string',
					description:
						'Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities. Specifies the invoice mode based on invoiceType. For eInvoice, specify b1 or s1. Supported values: - `b1` - Submission of an e-invoice for goods. - `s1` - Submission of an e-invoice for services. Leave this field blank when `invoiceType` is `invoice`.',
					default: '',
					enum: ['', 'b1', 's1'],
				},
				eInvoiceStatus: {
					type: 'string',
					description:
						'Current status of an e-invoice; applicable only when selected invoice type is eInvoice. Supported statuses: - `submitted` - The supplier submits its invoice or credit note to the public invoicing portal or its registered private platform. - `issuedByPlatform` - The invoice has been processed on the supplier’s platform and issued to the buyer. - `fileUploaded` - The invoice file has been uploaded to the platform. - `madeAvailable` - The invoice has been made available to the buyer on the public invoicing portal or its registered private platform. - `inHand` - The invoice is assumed by the buyer for processing. - `refused` - The invoice has been refused by the recipient for business reasons. A complete list of reasons for refusal is available in the document "Annex 1 - Semantic Format FE e-invoicing - Flows 1 & 2" on the "Reason for refusal" tab. - `paymentSent` - The bank transfer flow has been sent to the supplier / The reimbursement flow has been sent to the buyer. - `paymentReceived` - The supplier has received payment of the invoice. This status is mandatory for supply of services (except VAT on debits and excluding reverse charge transactions). - `disputed` - There is a dispute regarding the invoice. This may ultimately lead to refusal or approval by the buyer. - `notSent` - The invoice has not been sent to the platform. - `inTransit` - The invoice has been sent and is in transit between platforms. - `approved` - The invoice has been approved by the buyer. - `receivedByPlatform` - The invoice has been received by the public invoicing portal or the buyer’s registered private platform but has not yet been made available to the buyer. - `rejectedByPlatform` - The invoice can be automatically rejected by the platform on technical grounds (e.g. format, non-compliance with the standard, etc.). When the transmit platform rejects the invoice, the invoice must be corrected by its issuer and resubmitted to the platform. - `suspended` - Processing of the invoice is temporarily suspended. - `completed` - The invoice processing lifecycle is completed. - `partiallyApproved` - The invoice has been partially approved.',
					default: '',
					enum: [
						'',
						'submitted',
						'issuedByPlatform',
						'fileUploaded',
						'madeAvailable',
						'inHand',
						'refused',
						'paymentSent',
						'paymentReceived',
						'disputed',
						'notSent',
						'inTransit',
						'approved',
						'receivedByPlatform',
						'rejectedByPlatform',
						'suspended',
						'completed',
						'partiallyApproved',
					],
				},
				scope: {
					type: 'string',
					description:
						'Details about the expected scope of work to be performed or materials to be delivered. Use 4000 or fewer characters. (Construction subscription)',
				},
				inclusions: {
					type: 'string',
					description:
						'Details related to items that are explicitly included in the terms of this document. Use 4000 or fewer characters. (Construction subscription) For example, `Includes drive through building`.',
				},
				exclusions: {
					type: 'string',
					description:
						'Details related to items that are explicitly excluded in the terms of this document. Use 4000 or fewer characters. (Construction subscription) For example, `Excludes additional purchase`.',
				},
				terms: {
					type: 'string',
					description:
						'Additional terms or performance obligations. Use 4000 or fewer characters. (Construction subscription)',
				},
				schedule: {
					type: 'object',
					description:
						'Additional details for Quote or Requisition and Order type documents. (Construction subscription)',
					properties: {
						scheduledStartDate: {
							type: 'string',
							description: 'Scheduled start date. Use the format `YYYY-MM-DD`.',
						},
						scheduledCompletionDate: {
							type: 'string',
							description:
								'Original scheduled date for completion of the work. Use the format `YYYY-MM-DD`.',
						},
						actualStartDate: {
							type: 'string',
							description: 'Actual start date. Use the format `YYYY-MM-DD`.',
						},
						actualCompletionDate: {
							type: 'string',
							description:
								'Date the work is actually complete. Use the format `YYYY-MM-DD`.',
						},
						revisedCompletionDate: {
							type: 'string',
							description:
								'Revised completion date for the work (caused by changes). Use the format `YYYY-MM-DD`.',
						},
						substantialCompletionDate: {
							type: 'string',
							description:
								'Date the work is considered substantially complete. Typically used as a milestone to identify when payment obligations are due. Use the format `YYYY-MM-DD`.',
						},
						noticeToProceedDate: {
							type: 'string',
							description:
								'Date when a formal notice to proceed was given. Use the format `YYYY-MM-DD`.',
						},
						responseDueDate: {
							type: 'string',
							description:
								'Date when a response is expected from an external party. Use the format `YYYY-MM-DD`.',
						},
						executedOnDate: {
							type: 'string',
							description:
								'Date the related contract document was formally executed. Use the format `YYYY-MM-DD`.',
						},
						scheduleImpactNotes: {
							type: 'string',
							description:
								'Details about any impacts on the current schedule. Use 100 or fewer characters. For example, `None`.',
						},
					},
					required: [],
				},
				internalReference: {
					type: 'object',
					description: 'The internal reference of the purchasing document.',
					properties: {
						referenceNumber: {
							type: 'string',
							description:
								'Reference number for the internal document. For example, `INT-01`.',
						},
						initiatedBy: {
							type: 'object',
							description: 'Reference to the employee who initiated the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `2`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `dhatchet`.',
								},
								name: {
									type: 'string',
									description:
										'Name for the employee. For example, `David Hatcher`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the employee. For example, `/objects/company-config/employee/2`.',
								},
							},
							required: [],
						},
						verbalApprovalBy: {
							type: 'object',
							description: 'Employee who provided verbal approval.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `2`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `sdye`.',
								},
								name: {
									type: 'string',
									description: 'Name for the employee. For example, `Sara Dye`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the employee. For example, `/objects/company-config/employee/2`.',
								},
							},
							required: [],
						},
						issuedBy: {
							type: 'object',
							description: 'Employee who issued the internal document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `25`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `amarquess`.',
								},
								name: {
									type: 'string',
									description:
										'Name for the employee. For example, `Adam Marquess`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the employee. For example, `/objects/company-config/employee/25`.',
								},
							},
							required: [],
						},
						issuedOnDate: {
							type: 'string',
							description:
								'Date the document was issued. Use the format `YYYY-MM-DD`.',
						},
						approvedBy: {
							type: 'object',
							description: 'Employee who approved the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `1`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `treser`.',
								},
								name: {
									type: 'string',
									description: 'Name for the employee. For example, `Tim Reser`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the employee. For example, `/objects/company-config/employee/1`.',
								},
							},
							required: [],
						},
						approvedOnDate: {
							type: 'string',
							description:
								'Date the document was approved. Use the format `YYYY-MM-DD`.',
						},
						signedBy: {
							type: 'object',
							description: 'Employee who signed the internal document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `32`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `broberts`.',
								},
								name: {
									type: 'string',
									description:
										'Name for the employee. For example, `Bob Roberts`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the employee. For example, `/objects/company-config/employee/32`.',
								},
							},
							required: [],
						},
						signedOnDate: {
							type: 'string',
							description:
								'Date the document was signed. Use the format `YYYY-MM-DD`.',
						},
						source: {
							type: 'string',
							description: 'Internal source. For example, `Internal`.',
						},
						sourceReferenceNumber: {
							type: 'string',
							description:
								'Internal source reference number. For example, `REF-INT-01`.',
						},
					},
					required: [],
				},
				externalReference: {
					type: 'object',
					description: 'The external reference of the purchasing document.',
					properties: {
						referenceNumber: {
							type: 'string',
							description:
								'Reference number for the external document. For example, `A23`.',
						},
						verbalApprovalBy: {
							type: 'object',
							description: 'Reference to the contact who provided verbal approval.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `6`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Johnson`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the contact. For example, `/objects/company-config/contact/6`.',
								},
							},
							required: [],
						},
						approvedBy: {
							type: 'object',
							description: 'Contact who approved the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `51`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Jagadish`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the contact. For example, `/objects/company-config/contact/51`.',
								},
							},
							required: [],
						},
						approvedOnDate: {
							type: 'string',
							description:
								'Date the document was approved. Use the format `YYYY-MM-DD`.',
						},
						signedBy: {
							type: 'object',
							description: 'Contact who signed the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `200`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Modulus Industries`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the contact. For example, `/objects/company-config/contact/200`.',
								},
							},
							required: [],
						},
						signedOnDate: {
							type: 'string',
							description:
								'Date the document was signed. Use the format `YYYY-MM-DD`.',
						},
					},
					required: [],
				},
				performanceBond: {
					type: 'object',
					description:
						'Performance bond details from the vendor or a company for an order. (Construction subscription)',
					properties: {
						isRequired: {
							type: 'boolean',
							description: 'Set to `true` if a performance bond is required.',
						},
						isReceived: {
							type: 'boolean',
							description: 'Set to `true` if a performance bond was received.',
						},
						amount: {
							type: 'string',
							description: 'Amount of the performance bond. For example, `1000.00`.',
						},
						vendor: {
							type: 'object',
							description:
								'Vendor for the related surety company providing the performance bond. (Construction subscription)',
							properties: {
								key: {
									type: 'string',
									description: 'Unique key for the vendor. For example, `11`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the vendor. For example, `VND-IND-0081`.',
								},
								name: {
									type: 'string',
									description:
										'User-specified name for the vendor. For example, `Vendor-India-0081`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/11`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				paymentBond: {
					type: 'object',
					description:
						'Payment bond details from the vendor or a company for an order. (Construction subscription)',
					properties: {
						isRequired: {
							type: 'boolean',
							description: 'Set to `true` if a payment bond is required.',
						},
						isReceived: {
							type: 'boolean',
							description: 'Set to `true` if a payment bond was received.',
						},
						amount: {
							type: 'string',
							description: 'Amount of the payment bond. For example, `1000.00`.',
						},
						vendor: {
							type: 'object',
							description:
								'Vendor for the related surety company providing the payment bond. (Construction subscription)',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the vendor. For example, `21`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the vendor. For example, `VND-IND-0081`.',
								},
								name: {
									type: 'string',
									description:
										'User-specified name for the vendor. For example, `Vendor-India-0081`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/21`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				primaryDocumentDetails: {
					type: 'object',
					description:
						'Primary document related details. Calculated when the transaction is a change order. (Construction subscription)',
					properties: {
						totalQuantityConverted: {
							type: 'string',
							description:
								'Total quantity converted to a downstream document from the original quantity entered. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.',
						},
						totalPriceConverted: {
							type: 'string',
							description:
								'Total price converted to a downstream document from the original price entered. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.',
						},
						totalAmountConverted: {
							type: 'string',
							description:
								'Total amount converted to a downstream document from the original amount entered. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.',
						},
						totalAmountRemaining: {
							type: 'string',
							description:
								'Total amount remaining after a partial conversion of this transaction. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.',
						},
						totalQuantityRemaining: {
							type: 'string',
							description:
								'Total quantity remaining after a partial conversion of this transaction. Calculated when the transaction is a change order. (Construction subscription) For example, `5.0000000000`.',
						},
						scheduledStartDate: {
							type: 'string',
							description:
								'Scheduled start date of the downstream document. Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.',
						},
						actualStartDate: {
							type: 'string',
							description:
								'Actual start date of the downstream document. Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.',
						},
						revisedCompletionDate: {
							type: 'string',
							description:
								'Revised completion date of the downstream document for the work (caused by changes). Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.',
						},
						internalReferenceNumber: {
							type: 'string',
							description:
								'Internal reference number of the downstream document. Set when the transaction is a change order. (Construction subscription) For example, `INT-01`.',
						},
						internalApprovedOnDate: {
							type: 'string',
							description:
								'Internal approved on date of the downstream document. Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.',
						},
						internalApprovedBy: {
							type: 'object',
							description:
								'Internal employee who approved the downstream document. Set when the transaction is a change order. (Construction subscription)',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `1`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `timreser`.',
								},
								name: {
									type: 'string',
									description: 'Name for the employee. For example, `Tim Reser`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the employee. For example, `/objects/company-config/employee/1`.',
								},
							},
							required: [],
						},
						externalReferenceNumber: {
							type: 'string',
							description:
								'External reference number of the downstream document. Set when the transaction is a change order. (Construction subscription) For example, `EXT-01`.',
						},
						externalApprovedOnDate: {
							type: 'string',
							description:
								'External approved on date of the downstream document. Set when the transaction is a change order. (Construction subscription) Use the format `YYYY-MM-DD`.',
						},
						externalApprovedBy: {
							type: 'object',
							description:
								'External contact who approved the downstream document. Set when the transaction is a change order. (Construction subscription)',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `1`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Johnson`.',
								},
								href: {
									type: 'string',
									description:
										'URL endpoint for the contact. For example, `/objects/company-config/contact/1`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				revision: {
					type: 'object',
					description: 'Revision details post change order. (Construction subscription)',
					properties: {
						isDocumentChanged: {
							type: 'boolean',
							description:
								'Whether the document has changes applied. (Construction subscription)',
						},
						revisedTotal: {
							type: 'string',
							description:
								'Revised total. (Construction subscription) For example, `1000.00`.',
						},
						revisedSubTotal: {
							type: 'string',
							description:
								'Revised subtotal. (Construction subscription) For example, `1000.00`.',
						},
						revisedTotalInTxnCurrency: {
							type: 'string',
							description:
								'Revised total in transaction currency. (Construction subscription) For example, `1000.00`.',
						},
						revisedSubTotalInTxnCurrency: {
							type: 'string',
							description:
								'Revised subtotal in transaction currency. (Construction subscription) For example, `1000.00`.',
						},
						changeLogNumber: {
							type: 'number',
							description:
								'Log number for tracking the number of changes applied to a source transaction. Default 0 for a source transaction, 1 for a change transaction. (Construction subscription) For example, `1`.',
						},
					},
					required: [],
				},
				relatedDocumentNumber: {
					type: 'string',
					description:
						'Document ID of the source transaction when updating a change order. Set when the transaction is a change order. (Construction subscription) For example, `Invoice-PO#0140#inv`.',
				},
				draftChangesTotal: {
					type: 'string',
					description:
						'Draft changes total. Calculated when the transaction is a change order. (Construction subscription) For example, `1000.00`.',
				},
				postedChangesTotal: {
					type: 'string',
					description:
						'Posted changes total. Calculated when the transaction is a change order. (Construction subscription) For example, `1000.00`.',
				},
				originalAmount: {
					type: 'string',
					description:
						'The original transaction amount before any changes or adjustments. Calculated when the transaction is a change order. (Construction subscription) For example, `100.0000000000`.',
				},
				project: {
					type: 'object',
					description: 'Project associated with the purchasing document.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned unique key for the project. For example, `2`.',
						},
						id: {
							type: 'string',
							description:
								'Unique identifier of the project. For example, `NET-XML30-2`.',
						},
						name: {
							type: 'string',
							description: 'Name of the project. For example, `Talcomp training`.',
						},
						href: {
							type: 'string',
							description:
								'URL endpoint for the project. For example, `/objects/projects/project/2`.',
						},
					},
					required: [],
				},
				lines: {
					type: 'array',
					description: 'Lines of the purchasing document.',
					items: {
						type: 'object',
						description:
							'Line items in a purchasing document represent purchasing transactions.',
						properties: {
							key: {
								type: 'string',
								description:
									'System-assigned unique key for the purchasing document line item. For example, `44`.',
							},
							id: {
								type: 'string',
								description:
									'ID for the purchasing document line item. This value is the same as key for this object. For example, `44`.',
							},
							href: {
								type: 'string',
								description:
									'URL endpoint for the purchasing document line item. For example, `/objects/purchasing/document-line::Purchase%20Invoice/44`.',
							},
							documentType: {
								type: 'string',
								description:
									'The type of transaction document. For example, `Purchase Invoice`.',
							},
							lineNumber: {
								type: 'number',
								description: 'Line number for the document line. For example, `1`.',
							},
							item: {
								type: 'object',
								description: 'Item associated with the document line.',
								properties: {
									key: {
										type: 'string',
										description: 'Unique key for the item. For example, `10`.',
									},
									id: {
										type: 'string',
										description: 'ID for the item. For example, `MX001`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the item. For example, `/objects/inventory-control/item/10`.',
									},
								},
								required: [],
							},
							lineDescription: {
								type: 'string',
								description:
									'Description of the line item. For example, `Computer`.',
							},
							memo: {
								type: 'string',
								description:
									'Memo about the document line item. For example, `Payment ACH`.',
							},
							unit: {
								type: 'string',
								description:
									'Unit associated with this document line item. For example, `Each`.',
							},
							quantity: {
								type: 'string',
								description:
									'Quantity associated with this document line item. For example, `40.10`.',
							},
							unitQuantity: {
								type: 'string',
								description:
									'Unit quantity associated with this document line item. For example, `10.10`.',
							},
							unitPrice: {
								type: 'string',
								description:
									'Unit price associated with this line item. For example, `10.50`.',
							},
							price: {
								type: 'string',
								description:
									'The price is computed based on unit factor. For example, `33.66`.',
							},
							quantityConverted: {
								type: 'string',
								description:
									'Quantity of items converted to a downstream document from the original quantity entered. For example, `5.10`.',
							},
							retailPrice: {
								type: 'string',
								description:
									'Suggested retail price for the item. For example, `10.44`.',
							},
							priceConverted: {
								type: 'string',
								description: 'Price of converted document. For example, `200`.',
							},
							quantityToleranceVariance: {
								type: 'string',
								description:
									'Tolerance limit allowed for the quantity to vary from the parent document. For example, `10.55`.',
							},
							priceToleranceVariance: {
								type: 'string',
								description:
									'Tolerance limit allowed for the price to vary from the parent document. For example, `22.10`.',
							},
							audit: {
								type: 'object',
								description: 'The audit of the line.',
								properties: {
									createdDateTime: {
										type: 'string',
										description:
											'Date and time when the record was created. Use the ISO 8601 format.',
									},
									modifiedDateTime: {
										type: 'string',
										description:
											'Date and time when the record was last modified. Use the ISO 8601 format.',
									},
									createdBy: {
										type: 'string',
										description:
											'This field has been deprecated. Use the `createdByUser` field instead.',
									},
									modifiedBy: {
										type: 'string',
										description:
											'This field has been deprecated. Use the `modifiedByUser` field instead.',
									},
									createdByUser: {
										type: 'object',
										description: 'The user who created the object.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the user. For example, `436`.',
											},
											id: {
												type: 'string',
												description:
													'User login ID. For example, `JohnDoe`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the user. For example, `/objects/company-config/user/436`.',
											},
										},
										required: [],
									},
									modifiedByUser: {
										type: 'object',
										description: 'The user who last modified this object.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the user. For example, `3086`.',
											},
											id: {
												type: 'string',
												description:
													'User login ID. For example, `JaneDoe`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the user. For example, `/objects/company-config/user/3086`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							status: {
								type: 'string',
								description:
									'Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.',
								default: '',
								enum: ['', 'active', 'inactive'],
							},
							costMethod: {
								type: 'string',
								description: 'Cost method associated with the document line item.',
								default: '',
								enum: ['', 'standard', 'average', 'FIFO', 'LIFO'],
							},
							sourceDocument: {
								type: 'object',
								description: 'Source purchasing document.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `77`.',
									},
									id: {
										type: 'string',
										description:
											'The source transaction from which the purchasing document was created. For example, `Purchase Order-PO0022`.',
									},
									documentType: {
										type: 'string',
										description:
											'Type of the purchasing document. For example, `Purchase Order`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/77`.',
									},
								},
								required: [],
							},
							sourceDocumentLine: {
								type: 'object',
								description: 'Source document line that needs to be converted.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document line item. For example, `2234`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the purchasing document line item. For example, `2234`.',
									},
									documentType: {
										type: 'string',
										description:
											'Type of purchasing document. For example, `Purchase Order`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document line item. For example, `/objects/purchasing/document-line::Purchase%20Order/2234`.',
									},
								},
								required: [],
							},
							baseCurrency: {
								type: 'string',
								description:
									'Base currency for the transaction. For example, `USD`.',
							},
							txnCurrency: {
								type: 'string',
								description:
									'Currency used for the transaction. For example, `CAD`.',
							},
							priceInTxnCurrency: {
								type: 'string',
								description: 'Transaction price. For example, `10.00`.',
							},
							isBillable: {
								type: 'boolean',
								description: 'Indicates whether the line is billable.',
							},
							isBilled: {
								type: 'boolean',
								description: 'Indicates whether the line has been billed.',
							},
							taxRate: {
								type: 'string',
								description:
									'Tax rate for the document line item. For example, `10.050`.',
							},
							taxInBaseCurrency: {
								type: 'string',
								description:
									'The line-level tax amount in base currency. For example, `10.50`.',
							},
							taxInTxnCurrency: {
								type: 'string',
								description:
									'The line-level tax amount in transaction currency. For example, `40.50`.',
							},
							discount: {
								type: 'string',
								description:
									'Discount applied to the line item. For example, `10.25`.',
							},
							enableTax: {
								type: 'boolean',
								description: 'Indicates whether the line item is taxable.',
							},
							quantityRemaining: {
								type: 'string',
								description:
									'Quantity of the item remaining. For example, `10.10`.',
							},
							conversionType: {
								type: 'string',
								description: 'Conversion type used for the transaction.',
								default: '',
								enum: ['', 'quantity', 'price'],
							},
							dimensions: {
								type: 'object',
								description: 'The dimensions of the line.',
								properties: {
									location: {
										type: 'object',
										description: 'Location associated with the document line.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the location. For example, `22`.',
											},
											id: {
												type: 'string',
												description:
													'ID for the location. For example, `Arizona`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the location. For example, `California`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the location. For example, `/objects/company-config/location/22`.',
											},
										},
										required: [],
									},
									department: {
										type: 'object',
										description:
											'Department associated with the document line.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the department. For example, `9`.',
											},
											id: {
												type: 'string',
												description:
													'Unique ID for the department. For example, `Sales`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the department. For example, `Sales and Marketing`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the department. For example, `/objects/company-config/department/9`.',
											},
										},
										required: [],
									},
									employee: {
										type: 'object',
										description: 'The employee of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the employee. For example, `10`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the employee. For example, `EMP-10`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the employee. For example, `Thomas, Glenn`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the employee. For example, `/objects/company-config/employee/10`.',
											},
										},
										required: [],
									},
									project: {
										type: 'object',
										description: 'Project associated with the document line.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the associated project. For example, `2`.',
											},
											id: {
												type: 'string',
												description:
													'ID for the associated project. For example, `NET-XML30-2`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the project. For example, `Talcomp training`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the project. For example, `/objects/projects/project/2`.',
											},
										},
										required: [],
									},
									customer: {
										type: 'object',
										description: 'The customer of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the customer. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the customer. For example, `CUST-13`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the customer. For example, `Jack In the Box`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the customer. For example, `/objects/accounts-receivable/customer/13`.',
											},
										},
										required: [],
									},
									vendor: {
										type: 'object',
										description: 'The vendor of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the vendor. For example, `357`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the vendor. For example, `1605212096809`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the vendor. For example, `GenLab`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/357`.',
											},
										},
										required: [],
									},
									item: {
										type: 'object',
										description: 'The item of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the item. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the item. For example, `Case 13`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the item. For example, `Platform pack`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the item. For example, `/objects/inventory-control/item/13`.',
											},
										},
										required: [],
									},
									warehouse: {
										type: 'object',
										description: 'Warehouse associated with the document line.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the warehouse. For example, `6`.',
											},
											id: {
												type: 'string',
												description:
													'Unique ID for the warehouse. For example, `WH01`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the warehouse. For example, `WH01`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the warehouse. For example, `/objects/inventory-control/warehouse/6`.',
											},
										},
										required: [],
									},
									class: {
										type: 'object',
										description: 'The class of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the class. For example, `731`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the class. For example, `REST_CLS_001`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the class. For example, `Enterprises`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the class. For example, `/objects/company-config/class/731`.',
											},
										},
										required: [],
									},
									task: {
										type: 'object',
										description: 'Task associated with the document line.',
										properties: {
											id: {
												type: 'string',
												description:
													'ID for the associated task. For example, `TSK01`.',
											},
											key: {
												type: 'string',
												description:
													'Unique key for the associated task. For example, `1`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the task. For example, `Project Task`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the task. For example, `/objects/projects/task/1`.',
											},
										},
										required: [],
									},
									costType: {
										type: 'object',
										description: 'The cost type of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the cost type. For example, `2`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the cost type. For example, `2`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the cost type. For example, `Project Expense`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the cost type. For example, `/objects/construction/cost-type/2`.',
											},
										},
										required: [],
									},
									asset: {
										type: 'object',
										description: 'The asset of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the asset. For example, `A001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the asset. For example, `1`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the asset. For example, `Laptop`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the asset. For example, `/objects/fixed-assets/asset/1`.',
											},
										},
										required: [],
									},
									contract: {
										type: 'object',
										description: 'The contract of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the contract. For example, `CON-0045-1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the contract. For example, `12`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the contract. For example, `ACME Widgets - Service`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the contract. For example, `/objects/contracts/contract/12`.',
											},
										},
										required: [],
									},
									affiliateEntity: {
										type: 'object',
										description: 'The affiliate entity of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the affiliate entity. For example, `23`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the affiliate entity. For example, `AFF-23`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the affiliate entity. For example, `/objects/affiliate-entity/23`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the affiliate entity. For example, `100-USA`.',
											},
										},
										required: [],
									},
									loanAccount: {
										type: 'object',
										description: 'The loan account of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the loan account. For example, `LN001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the loan account. For example, `852`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the loan account. For example, `Business Loan`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the loan account. For example, `/objects/loan-management/loan-account/852`.',
											},
										},
										required: [],
									},
									workOrder: {
										type: 'object',
										description: 'Work order associated with the dimension.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the work order. For example, `18`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the work order. For example, `WO-0017`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the work order. For example, `WO-India`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the work order. For example, `/objects/construction/work-order/18`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							requestedShippingDate: {
								type: 'string',
								description:
									'The date the customer requests the goods to arrive on their premises. The default is the due date. Use the format `YYYY-MM-DD`.',
							},
							shipByDate: {
								type: 'string',
								description:
									'The date the goods should be shipped so they arrive when the customer needs them. Use the format `YYYY-MM-DD`.',
							},
							cancelAfterDate: {
								type: 'string',
								description:
									'Indicates the date after which the order can be canceled. Use the format `YYYY-MM-DD`.',
							},
							doNotShipBeforeDate: {
								type: 'string',
								description:
									'Do not ship before this date. Use the format `YYYY-MM-DD`.',
							},
							doNotShipAfterDate: {
								type: 'string',
								description:
									'Do not ship after this date. Use the format `YYYY-MM-DD`.',
							},
							deliveryDueDate: {
								type: 'string',
								description: 'Promised by date. Use the format `YYYY-MM-DD`.',
							},
							deliveryMethod: {
								type: 'object',
								description:
									'Delivery method applies only to transaction documents that are configured as supplies purchase transactions. The delivery method is not populated for transaction documents that are not used for supplies purchase transactions. For more information, see [Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Inventory_Control/Setting_up_Inventory_Control/configure-inventory-control-FbF.htm#SuppliesInventory).',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the delivery method. For example, `77`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID for the delivery method. For example, `Air`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the delivery method. For example, `/objects/accounts-receivable/shipping-method/77`.',
									},
								},
								required: [],
							},
							orderConfirmationDate: {
								type: 'string',
								description:
									'Date the order was confirmed. Use the format `YYYY-MM-DD`.',
							},
							approvalState: {
								type: 'string',
								description:
									'The state of the document line in the approval process.',
								default: '',
								enum: ['', 'submitted', 'pendingApproval', 'approved', 'declined'],
							},
							allocation: {
								type: 'object',
								description:
									'Transaction allocation template for the line item, which distributes the amount across specified dimensions.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the allocation. For example, `14`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the allocation. For example, `Alloc1-WBS-US`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the allocation. For example, `/objects/general-ledger/txn-allocation-template/14`.',
									},
								},
								required: [],
							},
							taxSchedule: {
								type: 'object',
								description:
									'If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details in the purchasing transaction.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the tax schedule. For example, `19`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID of the tax schedule. For example, `Sale Goods Standard`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the tax schedule. For example, `/objects/tax/purchasing-tax-schedule/19`.',
									},
								},
								required: [],
							},
							trackingDetail: {
								type: 'array',
								description:
									'List of warehouse inventory details including serial number, aisle, bin, and row per item.',
								items: {
									type: 'object',
									description:
										'List of warehouse inventory details including serial number, aisle, bin, and row per document line item.',
									properties: {
										key: {
											type: 'string',
											description:
												'System-assigned key for the document line detail object. For example, `55`.',
										},
										id: {
											type: 'string',
											description:
												'Unique ID for the document line detail object. This value is the same as the `key` for this object. For example, `55`.',
										},
										href: {
											type: 'string',
											description:
												'URL endpoint for the document line detail object. For example, `/objects/purchasing/document-line-detail/55`.',
										},
										quantity: {
											type: 'string',
											description:
												'The quantity of the units being built for the combination of the tracking attributes specified for the line. For example, `10`.',
										},
										serialNumber: {
											type: 'string',
											description:
												'Serial number of the line item. For example, `S1001`.',
										},
										lotNumber: {
											type: 'string',
											description:
												'The lot numbers for the units being built and the quantity being built for each lot. For example, `L1001`.',
										},
										expirationDate: {
											type: 'string',
											description:
												'The expiration date for the units being built and the quantity being built. Use the format `YYYY-MM-DD`.',
										},
										aisle: {
											type: 'object',
											description: 'Aisle associated with the line details.',
											properties: {
												href: {
													type: 'string',
													description:
														'URL endpoint for the aisle. For example, `/objects/inventory-control/aisle/10`.',
												},
												key: {
													type: 'string',
													description:
														'Unique key for the aisle. For example, `10`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the aisle. For example, `AISLE1`.',
												},
											},
											required: [],
										},
										bin: {
											type: 'object',
											description:
												'The bin associated with the line details.',
											properties: {
												href: {
													type: 'string',
													description:
														'URL endpoint for the bin. For example, `/objects/inventory-control/bin/20`.',
												},
												key: {
													type: 'string',
													description:
														'Unique key for the bin. For example, `20`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the bin. For example, `BIN1`.',
												},
											},
											required: [],
										},
										row: {
											type: 'object',
											description:
												'The row associated with the line details.',
											properties: {
												href: {
													type: 'string',
													description:
														'URL endpoint for the row. For example, `/objects/inventory-control/row/15`.',
												},
												key: {
													type: 'string',
													description:
														'Unique key for the row. For example, `15`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the row. For example, `ROW1`.',
												},
											},
											required: [],
										},
										item: {
											type: 'object',
											description: 'Item associated with the line details.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the item. For example, `10`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the item. For example, `Battery`.',
												},
												name: {
													type: 'string',
													description:
														'Name of the item. For example, `Battery`.',
												},
												href: {
													type: 'string',
													description:
														'URL endpoint for the item. For example, `/objects/inventory-control/item/10`.',
												},
											},
											required: [],
										},
										audit: {
											type: 'object',
											description: 'The audit of the tracking detail item.',
											properties: {
												createdDateTime: {
													type: 'string',
													description:
														'Date and time when the record was created. Use the ISO 8601 format.',
												},
												modifiedDateTime: {
													type: 'string',
													description:
														'Date and time when the record was last modified. Use the ISO 8601 format.',
												},
												createdBy: {
													type: 'string',
													description:
														'This field has been deprecated. Use the `createdByUser` field instead.',
												},
												modifiedBy: {
													type: 'string',
													description:
														'This field has been deprecated. Use the `modifiedByUser` field instead.',
												},
												createdByUser: {
													type: 'object',
													description: 'The user who created the object.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the user. For example, `436`.',
														},
														id: {
															type: 'string',
															description:
																'User login ID. For example, `JohnDoe`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the user. For example, `/objects/company-config/user/436`.',
														},
													},
													required: [],
												},
												modifiedByUser: {
													type: 'object',
													description:
														'The user who last modified this object.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the user. For example, `3086`.',
														},
														id: {
															type: 'string',
															description:
																'User login ID. For example, `JaneDoe`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the user. For example, `/objects/company-config/user/3086`.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										purchasingDocumentLine: {
											type: 'object',
											description:
												'The Purchasing document line associated with the detail.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the Purchasing document line. For example, `23`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the document line. For example, `23`.',
												},
												documentType: {
													type: 'string',
													description:
														'Type of the Purchasing document in which the line resides. For example, `Purchase Order`.',
												},
												href: {
													type: 'string',
													description:
														'URL endpoint for the Purchasing document line. For example, `/objects/purchasing/document-line::Purchase%20Order/23`.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							documentHeader: {
								type: 'object',
								description: 'Header level details for the document line item.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `55`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the purchasing document. For example, `Purchase Invoice-PO0066`.',
									},
									documentType: {
										type: 'string',
										description:
											'Type of the purchasing document. For example, `Purchase Invoice`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Invoice/55`.',
									},
								},
								required: [],
							},
							retainage: {
								type: 'object',
								description:
									'Line-level retainage details. (Construction subscription)',
								properties: {
									percentage: {
										type: 'string',
										description: 'Retainage percentage. For example, `10.00`.',
									},
									baseAmountRetained: {
										type: 'string',
										description: 'Base amount retained. For example, `10.00`.',
									},
									txnAmountRetained: {
										type: 'string',
										description:
											'Transaction amount retained. For example, `10.00`.',
									},
									extendedPriceNetAmount: {
										type: 'string',
										description:
											'Extended price net retainage amount. For example, `1000.0000000000`.',
									},
									extendedBasePriceNetAmount: {
										type: 'string',
										description:
											'Extended base price net retainage amount. For example, `1000.0000000000`.',
									},
								},
								required: [],
							},
							relatedDocument: {
								type: 'object',
								description:
									'Reference to the source transaction when creating a change order. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned unique key for the purchasing document. For example, `5151`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID for the purchasing document. This value is the same as the key for this object. For example, `5151`.',
									},
									documentNumber: {
										type: 'string',
										description:
											'Document number for the purchasing document. For example, `PO0550`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document. For example, `/objects/purchasing/document/5151`.',
									},
								},
								required: [],
							},
							relatedDocumentLine: {
								type: 'object',
								description:
									'Reference to the source transaction line when creating a change order. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned unique key for the document line. For example, `13965`.',
									},
									id: {
										type: 'string',
										description:
											'Name or other unique ID for the document line. For example, `13965`.',
									},
									unitQuantity: {
										type: 'string',
										description:
											'Unit quantity for the document line. For example, `10.0000000000`.',
									},
									extendedPriceInTxnCurrency: {
										type: 'string',
										description:
											'Extended price in transaction currency for the document line. For example, `1294.3200000000`.',
									},
									extendedCost: {
										type: 'string',
										description:
											'Extended total cost for the document line. For example, `1560.0000000000`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the document line. For example, `/objects/purchasing/document-line/13965`.',
									},
								},
								required: [],
							},
							extendedPriceInTxnCurrency: {
								type: 'string',
								description:
									'Extended price in transaction currency. For example, `1294.3200000000`.',
							},
							extendedCost: {
								type: 'string',
								description: 'Extended total cost. For example, `1560.0000000000`.',
							},
							revision: {
								type: 'object',
								description:
									'Line-level revised details post change order. (Construction subscription)',
								properties: {
									unitQuantity: {
										type: 'number',
										description: 'Revised unit quantity. For example, `10`.',
									},
									quantity: {
										type: 'number',
										description: 'Revised quantity. For example, `10`.',
									},
									unitValue: {
										type: 'string',
										description: 'Revised unit value. For example, `80.00`.',
									},
									value: {
										type: 'string',
										description: 'Revised value. For example, `80.00`.',
									},
									valueInTxnCurrency: {
										type: 'string',
										description:
											'Revised transaction currency. For example, `100.00`.',
									},
									price: {
										type: 'string',
										description:
											'Revised price. For example, `100.0000000000`.',
									},
									unitPrice: {
										type: 'string',
										description:
											'Revised unit price. For example, `100.0000000000`.',
									},
									priceInTxnCurrency: {
										type: 'string',
										description:
											'Revised transaction price. For example, `100.0000000000`.',
									},
								},
								required: [],
							},
							draft: {
								type: 'object',
								description:
									'Line-level draft details post change order. (Construction subscription)',
								properties: {
									unitQuantity: {
										type: 'number',
										description:
											'Draft unit quantity change. For example, `10`.',
									},
									quantity: {
										type: 'number',
										description: 'Draft quantity change. For example, `10`.',
									},
									price: {
										type: 'string',
										description:
											'Draft price change. For example, `20.0000000000`.',
									},
									basePrice: {
										type: 'string',
										description:
											'Draft base price change. For example, `20.0000000000`.',
									},
								},
								required: [],
							},
							posted: {
								type: 'object',
								description:
									'Line-level posted details post change order. (Construction subscription)',
								properties: {
									quantity: {
										type: 'string',
										description:
											'Posted quantity change. For example, `20.0000000000`.',
									},
									price: {
										type: 'string',
										description:
											'Posted extended price change. For example, `10.0000000000`.',
									},
									basePrice: {
										type: 'string',
										description:
											'Posted extended base price change. For example, `10.0000000000`.',
									},
								},
								required: [],
							},
							addedByChangeDocument: {
								type: 'boolean',
								description:
									'Indicates whether the line has been added by change document. (Construction subscription)',
							},
							isReverseConversion: {
								type: 'boolean',
								description:
									'Indicates whether the document line is reverse converted. (Construction subscription)',
							},
							reverseConversion: {
								type: 'object',
								description:
									'Line-level reverse conversion details. (Construction subscription)',
								properties: {
									price: {
										type: 'string',
										description:
											'Reverse converted price. For example, `100.0000000000`.',
									},
									quantity: {
										type: 'string',
										description:
											'Reverse quantity converted. For example, `10.0000000000`.',
									},
									standardPrice: {
										type: 'string',
										description:
											'Standard price converted. For example, `100.0000000000`.',
									},
									standardQuantity: {
										type: 'string',
										description:
											'Standard quantity converted. For example, `10.0000000000`.',
									},
									totalConvertedAmount: {
										type: 'string',
										description:
											'Total amount converted. For example, `1000.0000000000`.',
									},
									totalRemainingAmount: {
										type: 'string',
										description:
											'Total amount remaining. For example, `500.0000000000`.',
									},
								},
								required: [],
							},
							primaryDocument: {
								type: 'object',
								description:
									'Reference to the source transaction for primary document order. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned unique key for the purchasing document. For example, `3669`.',
									},
									id: {
										type: 'string',
										description:
											'Unique identifier for the purchasing document. This value is the same as the `key` value for this object. For example, `3669`.',
									},
									documentNumber: {
										type: 'string',
										description:
											'Unique number for the purchasing document. For example, `PO-Source01-R2-81`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document. For example, `/objects/purchasing/document/3669`.',
									},
								},
								required: [],
							},
							primaryDocumentLine: {
								type: 'object',
								description:
									'Reference to the source transaction line item for primary document order. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned unique key for the primary document line. For example, `9156`.',
									},
									id: {
										type: 'string',
										description:
											'Name or other unique ID for the primary document line. For example, `9156`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the primary document line. For example, `/objects/purchasing/document-line/9156`.',
									},
								},
								required: [],
							},
							amortizationTemplate: {
								type: 'object',
								description:
									'Amortization template for prepaid expense distribution.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the amortization template. For example, `1`.',
									},
									id: {
										type: 'string',
										description:
											'Unique identifier for the amortization template. For example, `StraightLine_Monthly`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the amortization template. For example, `/objects/accounts-payable/amortization-template/1`.',
									},
								},
								required: [],
							},
							amortizationStartDate: {
								type: 'string',
								description:
									'Start date for the amortization period. Use the format `YYYY-MM-DD`.',
							},
							amortizationEndDate: {
								type: 'string',
								description:
									'End date for the amortization period. Use the format `YYYY-MM-DD`.',
							},
							lineSubtotals: {
								type: 'array',
								description: 'Lines of the purchasing document line subtotal.',
								items: {
									type: 'object',
									description:
										'Details of the subtotals, taxes, discounts, charges, and more for the document line.',
									properties: {
										key: {
											type: 'string',
											description:
												'System-assigned key for the document line subtotal. For example, `23`.',
										},
										id: {
											type: 'string',
											description:
												'System-assigned ID for the document line subtotal. This value is the same as the `key` for this object. For example, `23`.',
										},
										href: {
											type: 'string',
											description:
												'URL endpoint for the document line subtotal. For example, `/objects/purchasing/document-line-subtotal/23`.',
										},
										description: {
											type: 'string',
											description:
												'Description of the document line subtotal. For example, `VAT Tax`.',
										},
										absoluteValue: {
											type: 'string',
											description:
												'A non-negative base amount for the document subtotal line. For example, `100.00`.',
										},
										percentValue: {
											type: 'string',
											description:
												'Percentage value that is calculated for the subtotal line. For example, `5.00`.',
										},
										total: {
											type: 'string',
											description:
												'The base total amount for the line item subtotal. For example, `105.00`.',
										},
										txnAbsoluteValue: {
											type: 'string',
											description:
												'A non-negative amount for the subtotal line. For example, `100.00`.',
										},
										txnTotal: {
											type: 'string',
											description:
												'A non-negative total for the subtotal amount. For example, `105.00`.',
										},
										enableOverrideTax: {
											type: 'boolean',
											description:
												'Set this field to `true` to allow users to override both tax detail (`taxDetail`) and the tax value (`txnAbsoluteValue`).',
										},
										taxDetail: {
											type: 'object',
											description:
												'Tax details describe a specific type of tax that applies to document lines.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the tax detail. For example, `15`.',
												},
												id: {
													type: 'string',
													description:
														'ID for the tax detail. For example, `VAT Tax Detail`.',
												},
												href: {
													type: 'string',
													description:
														'URL endpoint for the tax detail. For example, `/objects/tax/tax-detail/15`.',
												},
											},
											required: [],
										},
										systemTaxDetail: {
											type: 'object',
											description:
												'When the `enableOverrideTax` field is set to `true`, users can provide `taxDetail`. The originally allotted `taxDetail` will then be assigned to `systemTaxDetail`.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the tax detail. For example, `10`.',
												},
												id: {
													type: 'string',
													description:
														'ID for the tax detail. For example, `VAT Tax Detail`.',
												},
												href: {
													type: 'string',
													description:
														'URL endpoint for the tax detail object. For example, `/objects/tax/tax-detail/10`.',
												},
											},
											required: [],
										},
										dimensions: {
											type: 'object',
											description: 'The dimensions of the line subtotal.',
											properties: {
												location: {
													type: 'object',
													description:
														'Location associated with the subtotal line.',
													properties: {
														key: {
															type: 'string',
															description:
																'Unique key for the location. For example, `22`.',
														},
														id: {
															type: 'string',
															description:
																'Unique ID for the location. For example, `Arizona`.',
														},
														name: {
															type: 'string',
															description:
																'Name of the location. For example, `Arizona`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the location. For example, `/objects/company-config/location/22`.',
														},
													},
													required: [],
												},
												department: {
													type: 'object',
													description:
														'Department associated with the subtotal line.',
													properties: {
														key: {
															type: 'string',
															description:
																'Unique key for the department. For example, `9`.',
														},
														id: {
															type: 'string',
															description:
																'ID for the department. For example, `Accounting`.',
														},
														name: {
															type: 'string',
															description:
																'Name of the department. For example, `Accounting`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the department. For example, `/objects/company-config/department/9`.',
														},
													},
													required: [],
												},
												employee: {
													type: 'object',
													description: 'The employee of the dimensions.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the employee. For example, `10`.',
														},
														id: {
															type: 'string',
															description:
																'Unique identifier for the employee. For example, `EMP-10`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the employee. For example, `Thomas, Glenn`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the employee. For example, `/objects/company-config/employee/10`.',
														},
													},
													required: [],
												},
												project: {
													type: 'object',
													description: 'The project of the dimensions.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the project. For example, `2`.',
														},
														id: {
															type: 'string',
															description:
																'Unique identifier for the project. For example, `NET-XML30-2`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the project. For example, `Talcomp training`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the project. For example, `/objects/projects/project/2`.',
														},
													},
													required: [],
												},
												customer: {
													type: 'object',
													description: 'The customer of the dimensions.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the customer. For example, `13`.',
														},
														id: {
															type: 'string',
															description:
																'Unique identifier for the customer. For example, `CUST-13`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the customer. For example, `Jack In the Box`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the customer. For example, `/objects/accounts-receivable/customer/13`.',
														},
													},
													required: [],
												},
												vendor: {
													type: 'object',
													description: 'The vendor of the dimensions.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the vendor. For example, `357`.',
														},
														id: {
															type: 'string',
															description:
																'Unique identifier for the vendor. For example, `1605212096809`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the vendor. For example, `GenLab`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/357`.',
														},
													},
													required: [],
												},
												item: {
													type: 'object',
													description: 'The item of the dimensions.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the item. For example, `13`.',
														},
														id: {
															type: 'string',
															description:
																'Unique identifier for the item. For example, `Case 13`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the item. For example, `Platform pack`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the item. For example, `/objects/inventory-control/item/13`.',
														},
													},
													required: [],
												},
												warehouse: {
													type: 'object',
													description: 'The warehouse of the dimensions.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the warehouse. For example, `6`.',
														},
														id: {
															type: 'string',
															description:
																'Unique identifier for the warehouse. For example, `WH01`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the warehouse. For example, `WH01`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the warehouse. For example, `/objects/inventory-control/warehouse/6`.',
														},
													},
													required: [],
												},
												class: {
													type: 'object',
													description: 'The class of the dimensions.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the class. For example, `731`.',
														},
														id: {
															type: 'string',
															description:
																'Unique identifier for the class. For example, `REST_CLS_001`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the class. For example, `Enterprises`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the class. For example, `/objects/company-config/class/731`.',
														},
													},
													required: [],
												},
												task: {
													type: 'object',
													description: 'The task of the dimensions.',
													properties: {
														id: {
															type: 'string',
															description:
																'Unique identifier for the task. For example, `1`.',
														},
														key: {
															type: 'string',
															description:
																'System-assigned key for the task. For example, `1`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the task. For example, `Project Task`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the task. For example, `/objects/projects/task/1`.',
														},
													},
													required: [],
												},
												costType: {
													type: 'object',
													description: 'The cost type of the dimensions.',
													properties: {
														id: {
															type: 'string',
															description:
																'Unique identifier for the cost type. For example, `2`.',
														},
														key: {
															type: 'string',
															description:
																'System-assigned key for the cost type. For example, `2`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the cost type. For example, `Project Expense`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the cost type. For example, `/objects/construction/cost-type/2`.',
														},
													},
													required: [],
												},
												asset: {
													type: 'object',
													description: 'The asset of the dimensions.',
													properties: {
														id: {
															type: 'string',
															description:
																'Unique identifier for the asset. For example, `A001`.',
														},
														key: {
															type: 'string',
															description:
																'System-assigned key for the asset. For example, `1`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the asset. For example, `Laptop`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the asset. For example, `/objects/fixed-assets/asset/1`.',
														},
													},
													required: [],
												},
												contract: {
													type: 'object',
													description: 'The contract of the dimensions.',
													properties: {
														id: {
															type: 'string',
															description:
																'Unique identifier for the contract. For example, `CON-0045-1`.',
														},
														key: {
															type: 'string',
															description:
																'System-assigned key for the contract. For example, `12`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the contract. For example, `ACME Widgets - Service`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the contract. For example, `/objects/contracts/contract/12`.',
														},
													},
													required: [],
												},
												affiliateEntity: {
													type: 'object',
													description:
														'The affiliate entity of the dimensions.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the affiliate entity. For example, `23`.',
														},
														id: {
															type: 'string',
															description:
																'Unique identifier for the affiliate entity. For example, `AFF-23`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the affiliate entity. For example, `/objects/affiliate-entity/23`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the affiliate entity. For example, `100-USA`.',
														},
													},
													required: [],
												},
												loanAccount: {
													type: 'object',
													description:
														'The loan account of the dimensions.',
													properties: {
														id: {
															type: 'string',
															description:
																'Unique identifier for the loan account. For example, `LN001`.',
														},
														key: {
															type: 'string',
															description:
																'System-assigned key for the loan account. For example, `852`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the loan account. For example, `Business Loan`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the loan account. For example, `/objects/loan-management/loan-account/852`.',
														},
													},
													required: [],
												},
												workOrder: {
													type: 'object',
													description:
														'Work order associated with the dimension.',
													properties: {
														key: {
															type: 'string',
															description:
																'System-assigned key for the work order. For example, `18`.',
														},
														id: {
															type: 'string',
															description:
																'Unique identifier for the work order. For example, `WO-0017`.',
														},
														name: {
															type: 'string',
															description:
																'Name for the work order. For example, `WO-India`.',
														},
														href: {
															type: 'string',
															description:
																'URL endpoint for the work order. For example, `/objects/construction/work-order/18`.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
										documentLine: {
											type: 'object',
											description:
												'The Purchasing document line associated with the subtotal.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the Purchasing document line. For example, `6`.',
												},
												id: {
													type: 'string',
													description:
														'ID for the Purchasing document line. For example, `6`.',
												},
												documentType: {
													type: 'string',
													description:
														'Type of the Purchasing document. For example, `Purchase Order`.',
												},
												href: {
													type: 'string',
													description:
														'URL endpoint for the Purchasing document line. For example, `/objects/purchasing/document-line::Purchase%20Order/6`.',
												},
											},
											required: [],
										},
										document: {
											type: 'object',
											description:
												'The Purchasing document in which the associated line resides.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the Purchasing document. For example, `14`.',
												},
												id: {
													type: 'string',
													description:
														'ID for the Purchasing document. For example, `14`.',
												},
												documentType: {
													type: 'string',
													description:
														'Type of the Purchasing document. For example, `Purchase Order`.',
												},
												href: {
													type: 'string',
													description:
														'URL endpoint for the Purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/14`.',
												},
											},
											required: [],
										},
										status: {
											type: 'string',
											description:
												'Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.',
											default: '',
											enum: ['', 'active', 'inactive'],
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				subtotals: {
					type: 'array',
					description: 'Lines of the purchasing document subtotal.',
					items: {
						type: 'object',
						description:
							'Details of subtotals, taxes, discounts, charges, and more for a purchasing transaction.',
						properties: {
							key: {
								type: 'string',
								description:
									'System-assigned unique key for the purchasing document subtotal. For example, `23`.',
							},
							id: {
								type: 'string',
								description:
									'ID for the purchasing document subtotal. This value is the same as the key for this object. For example, `23`.',
							},
							href: {
								type: 'string',
								description:
									'URL endpoint for the purchasing document subtotal. For example, `/objects/purchasing/document-subtotal/23`.',
							},
							description: {
								type: 'string',
								description:
									'Description of the document subtotal. For example, `Tax`.',
							},
							absoluteValue: {
								type: 'string',
								description:
									'Non-negative base amount for the subtotal. API clients can set this value; when provided, it is used by the system when calculating any derived subtotal totals. For example, `40.50`.',
							},
							percentValue: {
								type: 'string',
								description:
									'Percentage value that is calculated on the total of all line items of the document. For example, `10.50`.',
							},
							txnAbsoluteValue: {
								type: 'string',
								description:
									'Non-negative transaction amount calculated across all other lines of the document. For example, `44.78`.',
							},
							total: {
								type: 'string',
								description:
									'The computed base amount for the subtotal. For example, `500.10`.',
							},
							txnTotal: {
								type: 'string',
								description:
									'The computed transaction amount for the subtotal. For example, `400.10`.',
							},
							documentLine: {
								type: 'object',
								description:
									'The purchasing document line associated with the subtotal.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document line. For example, `10`.',
									},
									documentType: {
										type: 'string',
										description:
											'Type of the purchasing document. For example, `Purchase Order`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the purchasing document line. For example, `10`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document line. For example, `/objects/purchasing/document-line::Purchase%20Order/10`.',
									},
								},
								required: [],
							},
							dimensions: {
								type: 'object',
								description: 'The dimensions of the subtotal.',
								properties: {
									location: {
										type: 'object',
										description:
											'Location associated with the document subtotal.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the location. For example, `22`.',
											},
											id: {
												type: 'string',
												description:
													'ID for the location. For example, `Arizona`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the location. For example, `California`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the location. For example, `/objects/company-config/location/22`.',
											},
										},
										required: [],
									},
									department: {
										type: 'object',
										description:
											'Department associated with the document subtotal.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the department. For example, `9`.',
											},
											id: {
												type: 'string',
												description:
													'Unique ID of the department. For example, `Accounting`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the department. For example, `Sales and Marketing`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the department. For example, `/objects/company-config/department/9`.',
											},
										},
										required: [],
									},
									employee: {
										type: 'object',
										description: 'The employee of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the employee. For example, `10`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the employee. For example, `EMP-10`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the employee. For example, `Thomas, Glenn`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the employee. For example, `/objects/company-config/employee/10`.',
											},
										},
										required: [],
									},
									project: {
										type: 'object',
										description: 'The project of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the project. For example, `2`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the project. For example, `NET-XML30-2`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the project. For example, `Talcomp training`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the project. For example, `/objects/projects/project/2`.',
											},
										},
										required: [],
									},
									customer: {
										type: 'object',
										description: 'The customer of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the customer. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the customer. For example, `CUST-13`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the customer. For example, `Jack In the Box`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the customer. For example, `/objects/accounts-receivable/customer/13`.',
											},
										},
										required: [],
									},
									vendor: {
										type: 'object',
										description: 'The vendor of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the vendor. For example, `357`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the vendor. For example, `1605212096809`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the vendor. For example, `GenLab`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the vendor. For example, `/objects/accounts-payable/vendor/357`.',
											},
										},
										required: [],
									},
									item: {
										type: 'object',
										description: 'The item of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the item. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the item. For example, `Case 13`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the item. For example, `Platform pack`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the item. For example, `/objects/inventory-control/item/13`.',
											},
										},
										required: [],
									},
									warehouse: {
										type: 'object',
										description: 'The warehouse of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the warehouse. For example, `6`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the warehouse. For example, `WH01`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the warehouse. For example, `WH01`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the warehouse. For example, `/objects/inventory-control/warehouse/6`.',
											},
										},
										required: [],
									},
									class: {
										type: 'object',
										description: 'The class of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the class. For example, `731`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the class. For example, `REST_CLS_001`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the class. For example, `Enterprises`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the class. For example, `/objects/company-config/class/731`.',
											},
										},
										required: [],
									},
									task: {
										type: 'object',
										description: 'The task of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the task. For example, `1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the task. For example, `1`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the task. For example, `Project Task`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the task. For example, `/objects/projects/task/1`.',
											},
										},
										required: [],
									},
									costType: {
										type: 'object',
										description: 'The cost type of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the cost type. For example, `2`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the cost type. For example, `2`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the cost type. For example, `Project Expense`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the cost type. For example, `/objects/construction/cost-type/2`.',
											},
										},
										required: [],
									},
									asset: {
										type: 'object',
										description: 'The asset of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the asset. For example, `A001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the asset. For example, `1`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the asset. For example, `Laptop`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the asset. For example, `/objects/fixed-assets/asset/1`.',
											},
										},
										required: [],
									},
									contract: {
										type: 'object',
										description: 'The contract of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the contract. For example, `CON-0045-1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the contract. For example, `12`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the contract. For example, `ACME Widgets - Service`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the contract. For example, `/objects/contracts/contract/12`.',
											},
										},
										required: [],
									},
									affiliateEntity: {
										type: 'object',
										description: 'The affiliate entity of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the affiliate entity. For example, `23`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the affiliate entity. For example, `AFF-23`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the affiliate entity. For example, `/objects/affiliate-entity/23`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the affiliate entity. For example, `100-USA`.',
											},
										},
										required: [],
									},
									loanAccount: {
										type: 'object',
										description: 'The loan account of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the loan account. For example, `LN001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the loan account. For example, `852`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the loan account. For example, `Business Loan`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the loan account. For example, `/objects/loan-management/loan-account/852`.',
											},
										},
										required: [],
									},
									workOrder: {
										type: 'object',
										description: 'Work order associated with the dimension.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the work order. For example, `18`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the work order. For example, `WO-0017`.',
											},
											name: {
												type: 'string',
												description:
													'Name for the work order. For example, `WO-India`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the work order. For example, `/objects/construction/work-order/18`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							documentHeader: {
								type: 'object',
								description:
									'Header level details for the purchasing document subtotal.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `23`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the purchasing document. For example, `23`.',
									},
									documentType: {
										type: 'string',
										description:
											'Type of the purchasing document. For example, `Purchase Order`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/23`.',
									},
								},
								required: [],
							},
							audit: {
								type: 'object',
								description: 'The audit of the subtotal.',
								properties: {
									createdDateTime: {
										type: 'string',
										description:
											'Date and time when the record was created. Use the ISO 8601 format.',
									},
									modifiedDateTime: {
										type: 'string',
										description:
											'Date and time when the record was last modified. Use the ISO 8601 format.',
									},
									createdBy: {
										type: 'string',
										description:
											'This field has been deprecated. Use the `createdByUser` field instead.',
									},
									modifiedBy: {
										type: 'string',
										description:
											'This field has been deprecated. Use the `modifiedByUser` field instead.',
									},
									createdByUser: {
										type: 'object',
										description: 'The user who created the object.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the user. For example, `436`.',
											},
											id: {
												type: 'string',
												description:
													'User login ID. For example, `JohnDoe`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the user. For example, `/objects/company-config/user/436`.',
											},
										},
										required: [],
									},
									modifiedByUser: {
										type: 'object',
										description: 'The user who last modified this object.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the user. For example, `3086`.',
											},
											id: {
												type: 'string',
												description:
													'User login ID. For example, `JaneDoe`.',
											},
											href: {
												type: 'string',
												description:
													'URL endpoint for the user. For example, `/objects/company-config/user/3086`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				history: {
					type: 'array',
					description: 'Lines of the purchasing document history.',
					items: {
						type: 'object',
						description:
							'History of workflow conversions associated with the purchasing transaction.',
						properties: {
							key: {
								type: 'string',
								description:
									'System-assigned key for the purchasing document history. For example, `11`.',
							},
							id: {
								type: 'string',
								description:
									'Unique ID for the purchasing document history. This value is the same as the `key` for this object. For example, `11`.',
							},
							href: {
								type: 'string',
								description:
									'URL endpoint for the purchasing document history. For example, `/objects/purchasing/document-history/11`.',
							},
							convertedFrom: {
								type: 'object',
								description:
									'The transaction from which the corresponding purchasing transaction was converted.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `22`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID for the purchasing document. For example, `Purchase Order-ORINV#0182#doc`.',
									},
									documentType: {
										type: 'string',
										description:
											'Type of the purchasing document. For example, `Purchase Order`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/22`.',
									},
								},
								required: [],
							},
							convertedTo: {
								type: 'object',
								description:
									'The transaction to which the corresponding purchasing transaction was converted.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `14`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID for the purchasing document. For example, `Purchase Invoice-SUBINV#0182#doc`.',
									},
									documentType: {
										type: 'string',
										description:
											'Type of the purchasing document. For example, `Purchase Invoice`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Invoice/14`.',
									},
								},
								required: [],
							},
							purchasingDocument: {
								type: 'object',
								description:
									'The purchasing document with which the history information is associated.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `23`.',
									},
									id: {
										type: 'string',
										description:
											'Name or other unique identifier for the purchasing document. For example, `Purchase Order-ORINV#0182#doc`.',
									},
									documentType: {
										type: 'string',
										description:
											'Type of the purchasing document. For example, `Purchase Invoice`.',
									},
									href: {
										type: 'string',
										description:
											'URL endpoint for the purchasing document. For example, `/objects/purchasing/document::Purchase%20Order/22`.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'queryInvoices',
		label: 'Search invoices',
		description: 'Returns a list of invoices filtered by the specified criteria.',
		context:
			'---\nname: queryInvoices\ndescription: Queries accounts receivable invoices with filters, sorting and field selection.\n---\n\nQueries the `accounts-receivable/invoice` object with the Sage Intacct query service. Only the requested `fields` are returned; if `fields` is empty, the API returns its default fields. Request `key` to get the value needed by `getInvoice`, `updateInvoice`, `deleteInvoice`, `submitInvoice`, `reverseInvoice` and `generateInvoicePdf`.\n\nPagination: this Endpoint returns one page. If `meta.next` is not empty, call it again with `start` set to that value. The API maximum for `size` is 4000. Filter and field values for amounts are strings. Dates in filters use `YYYY-MM-DD`.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fields: {
					type: 'array',
					description:
						'Fields to include in the response, for example `key`, `id`, or `customer.id` for a field of a related object. An aggregate can be requested as `function:fieldName`, for example `sum:totalTxnAmount`. Valid functions are `count`, `avg`, `sum`, `min` and `max`.',
					items: {
						type: 'string',
						description: 'A field name, related-object field, or aggregate.',
					},
				},
				filters: {
					type: 'array',
					description:
						'Conditions that select the invoices to return. Each item is an object with one operator and one field, for example `{"$eq": {"state": "posted"}}`. Operators include `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$notIn`, `$between`, `$notBetween`, `$contains`, `$notContains`, `$startsWith`, `$notStartsWith`, `$endsWith`, `$notEndsWith`. Conditions are numbered from 1 in the order given, so you can reference them in **Filter expression**.',
					items: {
						description:
							'A filter condition, for example `{"$gt": {"totalTxnAmountDue": "1000"}}`.',
					},
				},
				filterExpression: {
					type: 'string',
					description:
						'Logical operators to combine multiple filter conditions. Conditions are numbered from 1 in the order given in **Filters**. Supports `and`, `or` and grouping with parentheses. For example, `(1 and 2) or 3`. If empty, all conditions must be true.',
				},
				filterParameters: {
					type: 'object',
					description: 'Pre-defined filter options.',
					properties: {
						asOfDate: {
							type: 'string',
							description:
								'The "as of" date used for relative date comparisons in **Filters**, such as `priorMonth`. Use the format `YYYY-MM-DD`. The current date is used if empty.',
						},
						includeHierarchyFields: {
							type: 'boolean',
							description:
								'Set to `true` to include hierarchical structure information with each object in the response.',
						},
						caseSensitiveComparison: {
							type: 'boolean',
							description:
								'Queries are case-sensitive by default. Set to `false` to ignore case in a query.',
						},
						includePrivate: {
							type: 'boolean',
							description:
								'In a multi-entity company, queries from the top-level entity do not access data in private entities by default. Set to `true` to include data in private entities.',
						},
					},
					required: [],
				},
				orderBy: {
					type: 'array',
					description:
						'Sort order of the results. Each item is an object with a field name and `asc` or `desc`, for example `{"invoiceDate": "desc"}`.',
					items: {
						description:
							'A field name and sort direction, for example `{"invoiceDate": "asc"}`.',
					},
				},
				start: {
					type: 'number',
					description:
						'First record of the result set to include in the response. Use `meta.next` from the previous response to get the next page. For example, `1`.',
					minimum: 1,
				},
				size: {
					type: 'number',
					description:
						'Number of records to include in the response. The API maximum is 4000. For example, `100`.',
					minimum: 1,
					maximum: 4000,
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				result: {
					type: 'array',
					description:
						'The invoices that match the query, with the requested fields only. Returned by the API as `ia::result`.',
					items: { description: 'An invoice with the requested fields.' },
				},
				meta: {
					type: 'object',
					description:
						'Metadata about the result set. Returned by the API as `ia::meta`.',
					properties: {
						totalCount: {
							type: 'number',
							description: 'Total number of records in the result set.',
						},
						start: {
							type: 'number',
							description:
								'First record of the result set included in this response.',
						},
						pageSize: {
							type: 'number',
							description:
								'Maximum number of records in this response. The last page may contain fewer.',
						},
						next: {
							type: 'number',
							description:
								'First record number of the next page. Pass it as **Start** to get the next page. Empty on the last page.',
						},
						previous: {
							type: 'number',
							description:
								'First record number of the previous page. Empty on the first page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'queryPurchasingDocuments',
		label: 'Search purchasing documents',
		description: 'Returns a list of purchasing documents filtered by the specified criteria.',
		context:
			'---\nname: queryPurchasingDocuments\ndescription: Queries purchasing documents with filters, sorting and field selection.\n---\n\nQueries the `purchasing/document` object with the Sage Intacct query service. This Endpoint searches all purchasing document types. To limit the results to one type, add a filter on `txnDefinition.id`, for example `{"$eq": {"txnDefinition.id": "Purchase Order"}}`. Request `key` and `txnDefinition.id` to get the values needed by `getPurchasingDocument`, `updatePurchasingDocument` and `deletePurchasingDocument`.\n\nPagination: this Endpoint returns one page. If `meta.next` is not empty, call it again with `start` set to that value. The API maximum for `size` is 4000. Filter and field values for amounts are strings. Dates in filters use `YYYY-MM-DD`.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fields: {
					type: 'array',
					description:
						'Fields to include in the response, for example `key`, `id`, or `vendor.id` for a field of a related object. An aggregate can be requested as `function:fieldName`, for example `sum:totalTxnAmount`. Valid functions are `count`, `avg`, `sum`, `min` and `max`.',
					items: {
						type: 'string',
						description: 'A field name, related-object field, or aggregate.',
					},
				},
				filters: {
					type: 'array',
					description:
						'Conditions that select the purchasing documents to return. Each item is an object with one operator and one field, for example `{"$eq": {"state": "approved"}}`. Operators include `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$notIn`, `$between`, `$notBetween`, `$contains`, `$notContains`, `$startsWith`, `$notStartsWith`, `$endsWith`, `$notEndsWith`. Conditions are numbered from 1 in the order given, so you can reference them in **Filter expression**. To limit the results to one document type, filter on the transaction definition, for example `{"$eq": {"txnDefinition.id": "Purchase Order"}}`.',
					items: {
						description:
							'A filter condition, for example `{"$gte": {"txnDate": "2025-01-01"}}`.',
					},
				},
				filterExpression: {
					type: 'string',
					description:
						'Logical operators to combine multiple filter conditions. Conditions are numbered from 1 in the order given in **Filters**. Supports `and`, `or` and grouping with parentheses. For example, `(1 and 2) or 3`. If empty, all conditions must be true.',
				},
				filterParameters: {
					type: 'object',
					description: 'Pre-defined filter options.',
					properties: {
						asOfDate: {
							type: 'string',
							description:
								'The "as of" date used for relative date comparisons in **Filters**, such as `priorMonth`. Use the format `YYYY-MM-DD`. The current date is used if empty.',
						},
						includeHierarchyFields: {
							type: 'boolean',
							description:
								'Set to `true` to include hierarchical structure information with each object in the response.',
						},
						caseSensitiveComparison: {
							type: 'boolean',
							description:
								'Queries are case-sensitive by default. Set to `false` to ignore case in a query.',
						},
						includePrivate: {
							type: 'boolean',
							description:
								'In a multi-entity company, queries from the top-level entity do not access data in private entities by default. Set to `true` to include data in private entities.',
						},
					},
					required: [],
				},
				orderBy: {
					type: 'array',
					description:
						'Sort order of the results. Each item is an object with a field name and `asc` or `desc`, for example `{"txnDate": "desc"}`.',
					items: {
						description:
							'A field name and sort direction, for example `{"txnDate": "asc"}`.',
					},
				},
				start: {
					type: 'number',
					description:
						'First record of the result set to include in the response. Use `meta.next` from the previous response to get the next page. For example, `1`.',
					minimum: 1,
				},
				size: {
					type: 'number',
					description:
						'Number of records to include in the response. The API maximum is 4000. For example, `100`.',
					minimum: 1,
					maximum: 4000,
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				result: {
					type: 'array',
					description:
						'The purchasing documents that match the query, with the requested fields only. Returned by the API as `ia::result`.',
					items: { description: 'A purchasing document with the requested fields.' },
				},
				meta: {
					type: 'object',
					description:
						'Metadata about the result set. Returned by the API as `ia::meta`.',
					properties: {
						totalCount: {
							type: 'number',
							description: 'Total number of records in the result set.',
						},
						start: {
							type: 'number',
							description:
								'First record of the result set included in this response.',
						},
						pageSize: {
							type: 'number',
							description:
								'Maximum number of records in this response. The last page may contain fewer.',
						},
						next: {
							type: 'number',
							description:
								'First record number of the next page. Pass it as **Start** to get the next page. Empty on the last page.',
						},
						previous: {
							type: 'number',
							description:
								'First record number of the previous page. Empty on the first page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'reverseInvoice',
		label: 'Reverse an invoice',
		description:
			'Reverses an invoice and maintains an audit trail. Only posted or paid invoices can be reversed.',
		context:
			'---\nname: reverseInvoice\ndescription: Reverses a posted or paid invoice.\n---\n\nReversing an invoice tracks the changes and maintains an audit trail. You can reverse `posted` or `paid` invoices. To reverse a `paid` invoice, first reverse the payment. For more information, see [Reverse an invoice](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_ar_invoice) in the Sage Intacct Help Center. When an invoice reversal is complete, the state changes from `posted` or `paid` to `reversed`.\n\nThis action changes the invoice state and cannot be undone through this Endpoint.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description:
						'System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.',
				},
				reversedDate: {
					type: 'string',
					description:
						'Date the invoice is reversed. Use the format `YYYY-MM-DD`. For example, `2025-04-15`.',
				},
				memo: {
					type: 'string',
					description:
						'Notes or comments about the reason for the invoice reversal. For example, `Reversed the invoice for duplicate entry`.',
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['key', 'reversedDate'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description: 'System-assigned key for the invoice. For example, `23`.',
				},
				id: {
					type: 'string',
					description: 'Unique ID for the invoice. For example, `23`.',
				},
				href: {
					type: 'string',
					description:
						'URL endpoint for the invoice. For example, `/objects/accounts-receivable/invoice/23`.',
				},
				state: {
					type: 'string',
					description: 'State of the invoice after reversal. For example, `reversed`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'submitInvoice',
		label: 'Submit an invoice',
		description: 'Submits a draft invoice for posting.',
		context:
			'---\nname: submitInvoice\ndescription: Submits a draft invoice to post it.\n---\n\nYou can submit a draft invoice to post it. Draft invoices are invoices that have been created, but were not yet ready to post. For more information, see [Save an invoice as draft](https://www.intacct.com/ia/docs/en_US/help_action/Accounts_Receivable/Invoices/Tasks/create-invoice-htm#Saveaninvoiceasadraft) in the Sage Intacct Help Center. When you submit a `draft` invoice, the invoice state changes to `posted`, indicating that the invoice has been posted to the General Ledger.\n\nCreate a draft invoice with `createInvoice` and `state` set to `draft`, then submit it here.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description:
						'System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.',
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['key'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description: 'System-assigned key for the invoice. For example, `11`.',
				},
				id: {
					type: 'string',
					description: 'Unique ID for the invoice. For example, `11`.',
				},
				href: {
					type: 'string',
					description:
						'URL endpoint for the invoice. For example, `/objects/accounts-receivable/invoice/11`.',
				},
				state: {
					type: 'string',
					description:
						'State of the invoice after the submission. For example, `posted`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'updateInvoice',
		label: 'Update an invoice',
		description: 'Updates an existing invoice.',
		context:
			'---\nname: updateInvoice\ndescription: Updates an existing invoice by setting field values.\n---\n\nUpdates an existing invoice by setting field values. Any fields not provided remain unchanged. Allowed edits depend on the state an invoice is in. For more information, see [About editing invoices](https://www.intacct.com/ia/docs/en_US/help_action/Accounts_Receivable/Invoices/Tasks/edit-an-invoice-overview.htm).\n\nPATCH operation: only the fields you provide are changed. Retrieve the current values with `getInvoice` first. Empty inputs (null, empty objects and empty arrays) are not sent, so they leave the field unchanged. An empty string (`""`) is sent to Sage Intacct as is; whether it clears the field or is rejected is not verified. The invoice state cannot be changed here; use `submitInvoice` or `reverseInvoice`.\n\nThe response contains only the `key`, `id` and `href` of the invoice. Call `getInvoice` to read the updated invoice.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description:
						'System-assigned key of the invoice. You can find it in the `key` field of a created, queried or retrieved invoice.',
				},
				invoiceNumber: {
					type: 'string',
					description: 'Unique invoice number. For example, `INV-001`.',
				},
				referenceNumber: {
					type: 'string',
					description:
						'Customer purchase order number or another reference number. For example, `PO6917`.',
				},
				description: {
					type: 'string',
					description:
						'Description of the invoice, which prints on the Customer Ledger report. For example, `Regular invoice`.',
				},
				invoiceDate: {
					type: 'string',
					description: 'Date the invoice was created. Use the format `YYYY-MM-DD`.',
				},
				dueDate: {
					type: 'string',
					description: 'Date the invoice is due. Use the format `YYYY-MM-DD`.',
				},
				currency: {
					type: 'object',
					description: 'Currency details for this invoice.',
					properties: {
						baseCurrency: {
							type: 'string',
							description: 'Base currency for the invoice. For example, `USD`.',
						},
						txnCurrency: {
							type: 'string',
							description:
								'The transaction currency to use for this invoice. If this currency is different from the base currency, provide an exchange rate. For example, `USD`.',
						},
						exchangeRate: {
							type: 'object',
							description: 'Exchange rate details used to calculate the base amount.',
							properties: {
								date: {
									type: 'string',
									description:
										'Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid. Use the format `YYYY-MM-DD`.',
								},
								rate: {
									type: 'number',
									description:
										'Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.',
								},
								typeId: {
									type: 'string',
									description:
										'Exchange rate type used to calculate the base amount from the transaction amount. For example, `Intacct Daily Rate`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				customerMessage: {
					type: 'object',
					description: "Message to include on the customer's invoice.",
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key for the customer message. For example, `10`.',
						},
						id: {
							type: 'string',
							description:
								'ID for the customer message. For example, `welcome message`.',
						},
						message: {
							type: 'string',
							description:
								'Message text for the customer message. For example, `welcome to the company`.',
						},
					},
					required: [],
				},
				contacts: {
					type: 'object',
					description: 'Associated contacts.',
					properties: {
						payTo: {
							type: 'object',
							description: 'Pay to contact information from the customer record.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key to uniquely identify the contact. For example, `176`.',
								},
								id: {
									type: 'string',
									description:
										'Name of the contact. For example, `Power Aerospace Materials(C1)`.',
								},
							},
							required: [],
						},
						returnTo: {
							type: 'object',
							description: 'Return to contact information from the customer record.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key to uniquely identify the contact. For example, `176`.',
								},
								id: {
									type: 'string',
									description:
										'Name of the contact. For example, `Power Aerospace Materials(C1)`.',
								},
								tax: {
									type: 'object',
									description: 'Tax related information for the ship-to contact.',
									properties: {
										taxId: {
											type: 'string',
											description:
												'Tax identification number. For example, `252-85-7897`.',
										},
										group: {
											type: 'object',
											description:
												'Contact tax group associated with the ship-to contact.',
											properties: {
												key: {
													type: 'string',
													description:
														'System-assigned key for the group. For example, `288`.',
												},
												id: {
													type: 'string',
													description:
														'Unique identifier for the group. For example, `Goods Zero Rate - CA`.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				billbackTemplate: {
					type: 'object',
					description:
						'If AR is configured for inter-entity bill back, the template to use to create a matching bill.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the template. For example, `18`.',
						},
						id: {
							type: 'string',
							description: 'ID for the template. For example, `BBT-error5`.',
						},
					},
					required: [],
				},
				attachment: {
					type: 'object',
					description: 'Supporting document attached to the invoice.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key for the supporting document. For example, `11`.',
						},
						id: {
							type: 'string',
							description:
								'System-assigned ID for the supporting document. For example, `11`.',
						},
					},
					required: [],
				},
				customer: {
					type: 'object',
					description: 'Customer to receive the invoice.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the customer. For example, `14`.',
						},
						id: {
							type: 'string',
							description:
								'Unique identifier of the customer. For example, `C-00019`.',
						},
						deliveryOptions: {
							type: 'string',
							description: 'Invoice delivery options for the customer.',
							default: '',
							enum: ['', 'print', 'email', 'both'],
						},
					},
					required: [],
				},
				term: {
					type: 'object',
					description: 'Term details for the invoice.',
					properties: {
						key: {
							type: 'string',
							description: 'System-assigned key for the term. For example, `16`.',
						},
						id: {
							type: 'string',
							description: 'Name of the term. For example, `30 Days`.',
						},
					},
					required: [],
				},
				taxSolution: {
					type: 'object',
					description: 'Tax solution details for this invoice.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key to uniquely identify the tax solution. For example, `4`.',
						},
						id: {
							type: 'string',
							description:
								'Name or other unique identifier for the tax solution. For example, `Australia GST`.',
						},
					},
					required: [],
				},
				invoiceType: {
					type: 'string',
					description:
						'Specifies whether the transaction is a regular invoice (invoice), an electronic invoice (eInvoice), or an invoice reported to the tax agency because it is not eligible for e-invoicing (eReporting).',
					default: '',
					enum: ['', 'invoice', 'eInvoice', 'eReporting'],
				},
				invoiceMode: {
					type: 'string',
					description:
						'Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities. Specifies the invoice mode based on invoiceType. For eReporting, specify tlb1 (goods) or tps1 (services). For eInvoice, specify b1 or s1. Supported values: - `tlb1` - E-Reporting mode for goods. - `tps1` - E-Reporting mode for services. - `b1` - Submission of an e-invoice for goods. - `s1` - Submission of an e-invoice for services. Leave this field blank when `invoiceType` is `invoice`.',
					default: '',
					enum: ['', 'tlb1', 'tps1', 'b1', 's1'],
				},
				invoiceSummary: {
					type: 'object',
					description:
						'Summary details for this invoice. Summaries are collections of the same types of transactions grouped together for processing.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned key to uniquely identify the summary. For example, `33`.',
						},
						id: {
							type: 'string',
							description:
								'Name of the summary. For example, `OE Sales Invoice: 2023 Batch 1`.',
						},
						glPostingDate: {
							type: 'string',
							description:
								'GL posting date for the summary. Use the format `YYYY-MM-DD`.',
						},
					},
					required: [],
				},
				lines: {
					type: 'array',
					description: 'Line items of the invoice.',
					items: {
						type: 'object',
						description:
							'Line items in an AR invoice represent transactions captured in that invoice.',
						properties: {
							glAccount: {
								type: 'object',
								description:
									'General Ledger (GL) account associated with the line item.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the GL account. For example, `163`.',
									},
									id: {
										type: 'string',
										description:
											'User-assigned number for the GL account. For example, `4010`.',
									},
								},
								required: [],
							},
							overrideOffsetGLAccount: {
								type: 'object',
								description:
									'An alternative AR account to override the default GL AR account for the invoice line item.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the GL account. For example, `263`.',
									},
									id: {
										type: 'string',
										description: 'GL account number. For example, `1103`.',
									},
								},
								required: [],
							},
							txnAmount: {
								type: 'string',
								description:
									'Amount for the AR invoice line item in the transaction currency. For example, `16740.00`.',
							},
							memo: {
								type: 'string',
								description:
									'Memo or notes about the AR invoice line item. For example, `Replaces discontinued part`.',
							},
							allocation: {
								type: 'object',
								description:
									'Transaction allocation template for the line item, which distributes the invoice amount across specified dimensions.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the allocation. For example, `22`.',
									},
									id: {
										type: 'string',
										description:
											'System-assigned ID for the allocation. For example, `Premium Allocation`.',
									},
								},
								required: [],
							},
							accountLabel: {
								type: 'object',
								description: 'Meaningful name of AR account.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the account label. For example, `14`.',
									},
									id: {
										type: 'string',
										description:
											'Meaningful name of the account. For example, `Accounts Receivable - Microcomputer`.',
									},
								},
								required: [],
							},
							taxEntries: {
								type: 'array',
								description: 'Tax entries for the AR invoice.',
								items: {
									type: 'object',
									description:
										'For VAT enabled transactions, invoice line items will have tax entries.',
									properties: {
										baseTaxAmount: {
											type: 'string',
											description: 'Base tax amount. For example, `100.00`.',
										},
										txnTaxAmount: {
											type: 'string',
											description:
												'Transaction tax amount. For example, `100.00`.',
										},
										taxRate: {
											type: 'number',
											description: 'Tax rate. For example, `1.0299`.',
										},
										orderEntryTaxDetail: {
											type: 'object',
											description:
												'Order Entry tax details associated with the invoice tax entry.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the Order Entry tax detail. For example, `1`.',
												},
												id: {
													type: 'string',
													description:
														'Unique identifier for the Order Entry tax detail. For example, `Alaska Tax Detail`.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							dimensions: {
								type: 'object',
								description: 'The dimensions of the line.',
								properties: {
									location: {
										type: 'object',
										description:
											'Standard Sage Intacct dimension that allows you to create a hierarchy of locations to reflect how your company is organized.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the location. For example, `4`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier of the location. For example, `AU`.',
											},
										},
										required: [],
									},
									department: {
										type: 'object',
										description:
											'Standard Sage Intacct dimension that allows you to create a hierarchy of departments to reflect how your company is organized.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the department. For example, `9`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier of the department. For example, `01`.',
											},
										},
										required: [],
									},
									employee: {
										type: 'object',
										description: 'The employee of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the employee. For example, `10`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the employee. For example, `EMP-10`.',
											},
										},
										required: [],
									},
									project: {
										type: 'object',
										description: 'The project of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the project. For example, `2`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the project. For example, `NET-XML30-2`.',
											},
										},
										required: [],
									},
									customer: {
										type: 'object',
										description: 'The customer of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the customer. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the customer. For example, `CUST-13`.',
											},
										},
										required: [],
									},
									vendor: {
										type: 'object',
										description: 'The vendor of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the vendor. For example, `357`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the vendor. For example, `1605212096809`.',
											},
										},
										required: [],
									},
									item: {
										type: 'object',
										description: 'The item of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the item. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the item. For example, `Case 13`.',
											},
										},
										required: [],
									},
									warehouse: {
										type: 'object',
										description: 'The warehouse of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the warehouse. For example, `6`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the warehouse. For example, `WH01`.',
											},
										},
										required: [],
									},
									class: {
										type: 'object',
										description: 'The class of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the class. For example, `731`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the class. For example, `REST_CLS_001`.',
											},
										},
										required: [],
									},
									task: {
										type: 'object',
										description: 'The task of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the task. For example, `1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the task. For example, `1`.',
											},
										},
										required: [],
									},
									costType: {
										type: 'object',
										description: 'The cost type of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the cost type. For example, `2`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the cost type. For example, `2`.',
											},
										},
										required: [],
									},
									asset: {
										type: 'object',
										description: 'The asset of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the asset. For example, `A001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the asset. For example, `1`.',
											},
										},
										required: [],
									},
									contract: {
										type: 'object',
										description: 'The contract of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the contract. For example, `CON-0045-1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the contract. For example, `12`.',
											},
										},
										required: [],
									},
									affiliateEntity: {
										type: 'object',
										description: 'The affiliate entity of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the affiliate entity. For example, `23`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the affiliate entity. For example, `AFF-23`.',
											},
										},
										required: [],
									},
									loanAccount: {
										type: 'object',
										description: 'The loan account of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the loan account. For example, `LN001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the loan account. For example, `852`.',
											},
										},
										required: [],
									},
									workOrder: {
										type: 'object',
										description: 'Work order associated with the dimension.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the work order. For example, `18`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the work order. For example, `WO-0017`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							invoice: {
								type: 'object',
								description:
									"Header level details for the AR invoice's line items.",
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the AR invoice. For example, `6`.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['key'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				key: { type: 'string', description: 'System-assigned key of the invoice.' },
				id: { type: 'string', description: 'Unique ID of the invoice.' },
				href: { type: 'string', description: 'Relative API URL of the invoice.' },
			},
			required: [],
		},
	},
	{
		appName: 'sage-intacct',
		appVersion: 2,
		endpointName: 'updatePurchasingDocument',
		label: 'Update a purchasing document',
		description: 'Updates an existing purchasing document.',
		context:
			'---\nname: updatePurchasingDocument\ndescription: Updates an existing purchasing document by setting field values.\n---\n\nUpdates an existing purchasing document by setting field values. Any fields not provided remain unchanged. With Edit permissions to Purchasing transactions, most details for a transaction that has a state of Draft or Pending can be edited.\n\nPATCH operation: only the fields you provide are changed. Retrieve the current values with `getPurchasingDocument` first. Empty inputs (null, empty objects and empty arrays) are not sent, so they leave the field unchanged. An empty string (`""`) is sent to Sage Intacct as is; whether it clears the field or is rejected is not verified.\n\nThe response contains only the `key`, `id` and `href`. Call `getPurchasingDocument` to read the updated document.',
		accounts: { 'sage-intacct2': { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				documentName: {
					type: 'string',
					description:
						'Name of the transaction definition used as the template for the purchasing document, for example `Purchase Order`. It must match a transaction definition configured in the company. Look it up with the Search purchasing documents Endpoint or in the Sage Intacct transaction definitions.',
				},
				key: {
					type: 'string',
					description:
						'System-assigned key of the purchasing document. You can find it in the `key` field of a created, queried or retrieved purchasing document.',
				},
				documentNumber: {
					type: 'string',
					description:
						'Document number for the purchasing document. For example, `PO-O122`.',
				},
				state: {
					type: 'string',
					description: 'State of the purchasing document.',
					default: '',
					enum: [
						'',
						'submitted',
						'approved',
						'partiallyApproved',
						'declined',
						'draft',
						'pending',
						'closed',
						'inProgress',
						'converted',
						'partiallyConverted',
						'exception',
						'analyzing',
					],
				},
				baseCurrency: {
					type: 'string',
					description: 'Base currency for the transaction. For example, `USD`.',
				},
				txnCurrency: {
					type: 'string',
					description: 'Currency used for the transaction. For example, `USD`.',
				},
				exchangeRate: {
					type: 'object',
					description: 'Exchange rate details used to calculate the base amount.',
					properties: {
						date: {
							type: 'string',
							description:
								'Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid. Use the format `YYYY-MM-DD`.',
						},
						rate: {
							type: 'string',
							description:
								'Exchange rate used to calculate the base amount from the transaction amount. For example, `1.0789`.',
						},
						typeId: {
							type: 'string',
							description:
								'Exchange rate type used to calculate the base amount from the transaction amount. For example, `1`.',
						},
						typeName: {
							type: 'string',
							description:
								'The name of exchange rate type. For example, `Intacct Daily Rate`.',
						},
					},
					required: [],
				},
				txnDate: {
					type: 'string',
					description: 'Date on the purchasing document. Use the format `YYYY-MM-DD`.',
				},
				dueDate: {
					type: 'string',
					description:
						'Due date for the purchasing document. Use the format `YYYY-MM-DD`.',
				},
				postingDate: {
					type: 'string',
					description:
						'The date on which purchasing document posts to the General Ledger. Use the format `YYYY-MM-DD`.',
				},
				referenceNumber: {
					type: 'string',
					description:
						'Reference to another document, as needed. For example, `PURCHASE-100`.',
				},
				vendorDocumentNumber: {
					type: 'string',
					description:
						'The number by which to reference a bill or other vendor document. A number is required only if Accounts Payable is configured to require numbers on bills, adjustments, and recurring bills. For example, `A2330-12`.',
				},
				notes: {
					type: 'string',
					description: 'Notes about the purchasing document. For example, `Fast order`.',
				},
				memo: {
					type: 'string',
					description:
						'Text to appear on the printed document. For example, `Lowry solutions`.',
				},
				cancelAfterDate: {
					type: 'string',
					description:
						'Indicates the date after which the transaction should be canceled. Use the format `YYYY-MM-DD`.',
				},
				doNotShipBeforeDate: {
					type: 'string',
					description:
						'The date before which goods cannot be shipped. Use the format `YYYY-MM-DD`.',
				},
				doNotShipAfterDate: {
					type: 'string',
					description:
						'The date after which goods cannot be shipped. Use the format `YYYY-MM-DD`.',
				},
				requestedShippingDate: {
					type: 'string',
					description:
						'The date the customer requests the goods to arrive on their premises. The default is the due date. Use the format `YYYY-MM-DD`.',
				},
				promisedDate: {
					type: 'string',
					description:
						'The date the vendor promised to deliver the goods. Use the format `YYYY-MM-DD`.',
				},
				contractStartDate: {
					type: 'string',
					description:
						'Valid start date of a purchase order or purchase contract. Use the format `YYYY-MM-DD`.',
				},
				contractEndDate: {
					type: 'string',
					description:
						'Valid end date of a purchase order or purchase contract. Use the format `YYYY-MM-DD`.',
				},
				retainagePercent: {
					type: 'string',
					description: 'Default retainage percentage. For example, `50.10`.',
				},
				contacts: {
					type: 'object',
					description: 'Contacts associated with the purchasing document.',
					properties: {
						primary: {
							type: 'object',
							description: 'Primary contact for the purchasing document.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the primary contact. For example, `13`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the primary contact. For example, `Main contact`.',
								},
							},
							required: [],
						},
						shipTo: {
							type: 'object',
							description: 'Contact to ship to.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the contact to ship to. For example, `43`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the contact to ship to. For example, `shipping contact`.',
								},
							},
							required: [],
						},
						billTo: {
							type: 'object',
							description: 'Contact to bill to.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the contact to bill to. For example, `44`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the contact to bill to. For example, `Main billing contact`.',
								},
							},
							required: [],
						},
						deliverTo: {
							type: 'object',
							description: 'Contact to deliver to.',
							properties: {
								key: {
									type: 'string',
									description:
										'Unique key for the contact to deliver to. For example, `66`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the contact to deliver to. For example, `Main deliver-to contact`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				shippingMethod: {
					type: 'object',
					description: 'Shipping method for the order.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the shipping method. For example, `77`.',
						},
						id: {
							type: 'string',
							description: 'Unique ID for the shipping method. For example, `Air`.',
						},
					},
					required: [],
				},
				paymentTerm: {
					type: 'object',
					description:
						'Accounts Payable (AP) term, which determines the expiration date for quotes and the due date for invoices.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the AP term. For example, `75`.',
						},
						id: {
							type: 'string',
							description: 'Unique ID for the AP term. For example, `10 Days`.',
						},
					},
					required: [],
				},
				txnDefinition: {
					type: 'object',
					description: 'Transaction definition that is associated with this transaction.',
					properties: {
						key: {
							type: 'string',
							description:
								'Unique key for the transaction definition. For example, `11`.',
						},
						id: {
							type: 'string',
							description:
								'Name of the transaction definition. For example, `Purchase Invoice`.',
						},
					},
					required: [],
				},
				sourceDocument: {
					type: 'object',
					description:
						'The source transaction from which the purchasing document was created.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the source document. For example, `44`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the source document. For example, `Purchase Order-PO0022`.',
						},
					},
					required: [],
				},
				taxSolution: {
					type: 'object',
					description:
						'The associated tax solution for the transaction. Tax solutions are available for different countries, for example Australia GST or South Africa VAT.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the tax solution. For example, `44`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the tax solution. For example, `simpleTax`.',
						},
					},
					required: [],
				},
				vendor: {
					type: 'object',
					description: 'Vendor associated with the purchasing document.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the vendor. For example, `15`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the vendor. For example, `ALPHA001`. Required when vendor is provided.',
						},
					},
					required: [],
				},
				attachment: {
					type: 'object',
					description: 'Supporting document for this transaction.',
					properties: {
						key: {
							type: 'string',
							description: 'Unique key for the attachment. For example, `41`.',
						},
						id: {
							type: 'string',
							description:
								'Unique ID for the attachment. For example, `Balance attachment`.',
						},
					},
					required: [],
				},
				status: {
					type: 'string',
					description:
						'Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.',
					default: '',
					enum: ['', 'active', 'inactive'],
				},
				scope: {
					type: 'string',
					description:
						'Details about the expected scope of work to be performed or materials to be delivered. Use 4000 or fewer characters. (Construction subscription)',
					maximum: 4000,
				},
				inclusions: {
					type: 'string',
					description:
						'Details related to items that are explicitly included in the terms of this document. Use 4000 or fewer characters. (Construction subscription) For example, `Includes drive through building`.',
					maximum: 4000,
				},
				exclusions: {
					type: 'string',
					description:
						'Details related to items that are explicitly excluded in the terms of this document. Use 4000 or fewer characters. (Construction subscription) For example, `Excludes additional purchase`.',
					maximum: 4000,
				},
				terms: {
					type: 'string',
					description:
						'Additional terms or performance obligations. Use 4000 or fewer characters. (Construction subscription)',
					maximum: 4000,
				},
				schedule: {
					type: 'object',
					description:
						'Additional details for Quote or Requisition and Order type documents. (Construction subscription)',
					properties: {
						scheduledStartDate: {
							type: 'string',
							description: 'Scheduled start date. Use the format `YYYY-MM-DD`.',
						},
						scheduledCompletionDate: {
							type: 'string',
							description:
								'Original scheduled date for completion of the work. Use the format `YYYY-MM-DD`.',
						},
						actualStartDate: {
							type: 'string',
							description: 'Actual start date. Use the format `YYYY-MM-DD`.',
						},
						actualCompletionDate: {
							type: 'string',
							description:
								'Date the work is actually complete. Use the format `YYYY-MM-DD`.',
						},
						revisedCompletionDate: {
							type: 'string',
							description:
								'Revised completion date for the work (caused by changes). Use the format `YYYY-MM-DD`.',
						},
						substantialCompletionDate: {
							type: 'string',
							description:
								'Date the work is considered substantially complete. Typically used as a milestone to identify when payment obligations are due. Use the format `YYYY-MM-DD`.',
						},
						noticeToProceedDate: {
							type: 'string',
							description:
								'Date when a formal notice to proceed was given. Use the format `YYYY-MM-DD`.',
						},
						responseDueDate: {
							type: 'string',
							description:
								'Date when a response is expected from an external party. Use the format `YYYY-MM-DD`.',
						},
						executedOnDate: {
							type: 'string',
							description:
								'Date the related contract document was formally executed. Use the format `YYYY-MM-DD`.',
						},
						scheduleImpactNotes: {
							type: 'string',
							description:
								'Details about any impacts on the current schedule. Use 100 or fewer characters. For example, `None`.',
							maximum: 100,
						},
					},
					required: [],
				},
				internalReference: {
					type: 'object',
					description: 'The internal reference.',
					properties: {
						referenceNumber: {
							type: 'string',
							description:
								'Reference number for the internal document. For example, `INT-01`.',
						},
						initiatedBy: {
							type: 'object',
							description: 'Reference to the employee who initiated the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `2`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `dhatchet`.',
								},
							},
							required: [],
						},
						verbalApprovalBy: {
							type: 'object',
							description: 'Employee who provided verbal approval.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `2`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `sdye`.',
								},
							},
							required: [],
						},
						issuedBy: {
							type: 'object',
							description: 'Employee who issued the internal document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `25`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `amarquess`.',
								},
							},
							required: [],
						},
						issuedOnDate: {
							type: 'string',
							description:
								'Date the document was issued. Use the format `YYYY-MM-DD`.',
						},
						approvedBy: {
							type: 'object',
							description: 'Employee who approved the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `1`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `treser`.',
								},
							},
							required: [],
						},
						approvedOnDate: {
							type: 'string',
							description:
								'Date the document was approved. Use the format `YYYY-MM-DD`.',
						},
						signedBy: {
							type: 'object',
							description: 'Employee who signed the internal document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the employee. For example, `32`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the employee. For example, `broberts`.',
								},
							},
							required: [],
						},
						signedOnDate: {
							type: 'string',
							description:
								'Date the document was signed. Use the format `YYYY-MM-DD`.',
						},
						source: {
							type: 'string',
							description: 'Internal source. For example, `Internal`.',
						},
						sourceReferenceNumber: {
							type: 'string',
							description:
								'Internal source reference number. For example, `REF-INT-01`.',
						},
					},
					required: [],
				},
				externalReference: {
					type: 'object',
					description: 'The external reference.',
					properties: {
						referenceNumber: {
							type: 'string',
							description:
								'Reference number for the external document. For example, `A23`.',
						},
						verbalApprovalBy: {
							type: 'object',
							description: 'Reference to the contact who provided verbal approval.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `6`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Johnson`.',
								},
							},
							required: [],
						},
						approvedBy: {
							type: 'object',
							description: 'Contact who approved the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `51`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Jagadish`.',
								},
							},
							required: [],
						},
						approvedOnDate: {
							type: 'string',
							description:
								'Date the document was approved. Use the format `YYYY-MM-DD`.',
						},
						signedBy: {
							type: 'object',
							description: 'Contact who signed the document.',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the contact. For example, `200`.',
								},
								id: {
									type: 'string',
									description:
										'Unique identifier for the contact. For example, `Modulus Industries`.',
								},
							},
							required: [],
						},
						signedOnDate: {
							type: 'string',
							description:
								'Date the document was signed. Use the format `YYYY-MM-DD`.',
						},
					},
					required: [],
				},
				performanceBond: {
					type: 'object',
					description:
						'Performance bond details from the vendor or a company for an order. (Construction subscription)',
					properties: {
						isRequired: {
							type: 'boolean',
							description: 'Set to `true` if a performance bond is required.',
						},
						isReceived: {
							type: 'boolean',
							description: 'Set to `true` if a performance bond was received.',
						},
						amount: {
							type: 'string',
							description: 'Amount of the performance bond. For example, `1000.00`.',
						},
						vendor: {
							type: 'object',
							description:
								'Vendor for the related surety company providing the performance bond. (Construction subscription)',
							properties: {
								key: {
									type: 'string',
									description: 'Unique key for the vendor. For example, `11`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the vendor. For example, `VND-IND-0081`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				paymentBond: {
					type: 'object',
					description:
						'Payment bond details from the vendor or a company for an order. (Construction subscription)',
					properties: {
						isRequired: {
							type: 'boolean',
							description: 'Set to `true` if a payment bond is required.',
						},
						isReceived: {
							type: 'boolean',
							description: 'Set to `true` if a payment bond was received.',
						},
						amount: {
							type: 'string',
							description: 'Amount of the payment bond. For example, `1000.00`.',
						},
						vendor: {
							type: 'object',
							description:
								'Vendor for the related surety company providing the payment bond. (Construction subscription)',
							properties: {
								key: {
									type: 'string',
									description:
										'System-assigned key for the vendor. For example, `21`.',
								},
								id: {
									type: 'string',
									description:
										'Unique ID for the vendor. For example, `VND-IND-0081`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				revision: {
					type: 'object',
					description: 'Revision details post change order. (Construction subscription)',
					properties: {
						changeLogNumber: {
							type: 'number',
							description:
								'Log number for tracking the number of changes applied to a source transaction. Default 0 for a source transaction, 1 for a change transaction. (Construction subscription) For example, `1`.',
						},
					},
					required: [],
				},
				project: {
					type: 'object',
					description: 'Project associated with the purchasing document.',
					properties: {
						key: {
							type: 'string',
							description:
								'System-assigned unique key for the project. For example, `2`.',
						},
						id: {
							type: 'string',
							description:
								'Unique identifier of the project. For example, `NET-XML30-2`.',
						},
					},
					required: [],
				},
				lines: {
					type: 'array',
					description: 'Lines of the purchasing document.',
					items: {
						type: 'object',
						description:
							'Line items in a purchasing document represent purchasing transactions.',
						properties: {
							item: {
								type: 'object',
								description: 'Item associated with the document line.',
								properties: {
									key: {
										type: 'string',
										description: 'Unique key for the item. For example, `10`.',
									},
									id: {
										type: 'string',
										description: 'ID for the item. For example, `MX001`.',
									},
								},
								required: [],
							},
							lineDescription: {
								type: 'string',
								description:
									'Description of the line item. For example, `Computer`.',
							},
							memo: {
								type: 'string',
								description:
									'Memo about the document line item. For example, `Payment ACH`.',
							},
							unit: {
								type: 'string',
								description:
									'Unit associated with this document line item. For example, `Each`. Required when line is provided.',
							},
							unitQuantity: {
								type: 'string',
								description:
									'Unit quantity associated with this document line item. For example, `10.10`. Required when line is provided.',
							},
							unitPrice: {
								type: 'string',
								description:
									'Unit price associated with this line item. For example, `10.50`. Required when line is provided.',
							},
							status: {
								type: 'string',
								description:
									'Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.',
								default: '',
								enum: ['', 'active', 'inactive'],
							},
							sourceDocument: {
								type: 'object',
								description: 'Source purchasing document.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `77`.',
									},
									id: {
										type: 'string',
										description:
											'The source transaction from which the purchasing document was created. For example, `Purchase Order-PO0022`.',
									},
								},
								required: [],
							},
							sourceDocumentLine: {
								type: 'object',
								description: 'Source document line that needs to be converted.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document line item. For example, `2234`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the purchasing document line item. For example, `2234`.',
									},
								},
								required: [],
							},
							priceInTxnCurrency: {
								type: 'string',
								description: 'Transaction price. For example, `10.00`.',
							},
							isBillable: {
								type: 'boolean',
								description: 'Indicates whether the line is billable.',
							},
							taxRate: {
								type: 'string',
								description:
									'Tax rate for the document line item. For example, `10.050`.',
							},
							discount: {
								type: 'string',
								description:
									'Discount applied to the line item. For example, `10.25`.',
							},
							enableTax: {
								type: 'boolean',
								description: 'Indicates whether the line item is taxable.',
							},
							conversionType: {
								type: 'string',
								description: 'Conversion type used for the transaction.',
								default: '',
								enum: ['', 'quantity', 'price'],
							},
							dimensions: {
								type: 'object',
								description: 'The dimensions of the line.',
								properties: {
									location: {
										type: 'object',
										description:
											'Location associated with the document line. Required when dimensions is provided.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the location. For example, `22`.',
											},
											id: {
												type: 'string',
												description:
													'ID for the location. For example, `Arizona`.',
											},
										},
										required: [],
									},
									department: {
										type: 'object',
										description:
											'Department associated with the document line.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the department. For example, `9`.',
											},
											id: {
												type: 'string',
												description:
													'Unique ID for the department. For example, `Sales`.',
											},
										},
										required: [],
									},
									employee: {
										type: 'object',
										description: 'The employee of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the employee. For example, `10`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the employee. For example, `EMP-10`.',
											},
										},
										required: [],
									},
									project: {
										type: 'object',
										description: 'Project associated with the document line.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the associated project. For example, `2`.',
											},
											id: {
												type: 'string',
												description:
													'ID for the associated project. For example, `NET-XML30-2`.',
											},
										},
										required: [],
									},
									customer: {
										type: 'object',
										description: 'The customer of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the customer. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the customer. For example, `CUST-13`.',
											},
										},
										required: [],
									},
									vendor: {
										type: 'object',
										description: 'The vendor of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the vendor. For example, `357`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the vendor. For example, `1605212096809`.',
											},
										},
										required: [],
									},
									item: {
										type: 'object',
										description:
											'The item of the dimensions. Required when dimensions is provided.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the item. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the item. For example, `Case 13`.',
											},
										},
										required: [],
									},
									warehouse: {
										type: 'object',
										description:
											'Warehouse associated with the document line. Required when dimensions is provided.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the warehouse. For example, `6`.',
											},
											id: {
												type: 'string',
												description:
													'Unique ID for the warehouse. For example, `WH01`.',
											},
										},
										required: [],
									},
									class: {
										type: 'object',
										description: 'The class of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the class. For example, `731`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the class. For example, `REST_CLS_001`.',
											},
										},
										required: [],
									},
									task: {
										type: 'object',
										description: 'Task associated with the document line.',
										properties: {
											id: {
												type: 'string',
												description:
													'ID for the associated task. For example, `TSK01`.',
											},
											key: {
												type: 'string',
												description:
													'Unique key for the associated task. For example, `1`.',
											},
										},
										required: [],
									},
									costType: {
										type: 'object',
										description: 'The cost type of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the cost type. For example, `2`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the cost type. For example, `2`.',
											},
										},
										required: [],
									},
									asset: {
										type: 'object',
										description: 'The asset of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the asset. For example, `A001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the asset. For example, `1`.',
											},
										},
										required: [],
									},
									contract: {
										type: 'object',
										description: 'The contract of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the contract. For example, `CON-0045-1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the contract. For example, `12`.',
											},
										},
										required: [],
									},
									affiliateEntity: {
										type: 'object',
										description: 'The affiliate entity of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the affiliate entity. For example, `23`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the affiliate entity. For example, `AFF-23`.',
											},
										},
										required: [],
									},
									loanAccount: {
										type: 'object',
										description: 'The loan account of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the loan account. For example, `LN001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the loan account. For example, `852`.',
											},
										},
										required: [],
									},
									workOrder: {
										type: 'object',
										description: 'Work order associated with the dimension.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the work order. For example, `18`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the work order. For example, `WO-0017`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							requestedShippingDate: {
								type: 'string',
								description:
									'The date the customer requests the goods to arrive on their premises. The default is the due date. Use the format `YYYY-MM-DD`.',
							},
							shipByDate: {
								type: 'string',
								description:
									'The date the goods should be shipped so they arrive when the customer needs them. Use the format `YYYY-MM-DD`.',
							},
							cancelAfterDate: {
								type: 'string',
								description:
									'Indicates the date after which the order can be canceled. Use the format `YYYY-MM-DD`.',
							},
							doNotShipBeforeDate: {
								type: 'string',
								description:
									'Do not ship before this date. Use the format `YYYY-MM-DD`.',
							},
							doNotShipAfterDate: {
								type: 'string',
								description:
									'Do not ship after this date. Use the format `YYYY-MM-DD`.',
							},
							deliveryDueDate: {
								type: 'string',
								description: 'Promised by date. Use the format `YYYY-MM-DD`.',
							},
							deliveryMethod: {
								type: 'object',
								description:
									'Delivery method applies only to transaction documents that are configured as supplies purchase transactions. The delivery method is not populated for transaction documents that are not used for supplies purchase transactions. For more information, see [Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Inventory_Control/Setting_up_Inventory_Control/configure-inventory-control-FbF.htm#SuppliesInventory).',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the delivery method. For example, `77`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID for the delivery method. For example, `Air`.',
									},
								},
								required: [],
							},
							orderConfirmationDate: {
								type: 'string',
								description:
									'Date the order was confirmed. Use the format `YYYY-MM-DD`.',
							},
							allocation: {
								type: 'object',
								description:
									'Transaction allocation template for the line item, which distributes the amount across specified dimensions.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the allocation. For example, `14`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the allocation. For example, `Alloc1-WBS-US`.',
									},
								},
								required: [],
							},
							taxSchedule: {
								type: 'object',
								description:
									'If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details in the purchasing transaction.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the tax schedule. For example, `19`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID of the tax schedule. For example, `Sale Goods Standard`.',
									},
								},
								required: [],
							},
							trackingDetail: {
								type: 'array',
								description:
									'List of warehouse inventory details including serial number, aisle, bin, and row per item.',
								items: {
									type: 'object',
									description:
										'List of warehouse inventory details including serial number, aisle, bin, and row per document line item.',
									properties: {
										quantity: {
											type: 'string',
											description:
												'The quantity of the units being built for the combination of the tracking attributes specified for the line. For example, `10`.',
										},
										serialNumber: {
											type: 'string',
											description:
												'Serial number of the line item. For example, `S1001`.',
										},
										lotNumber: {
											type: 'string',
											description:
												'The lot numbers for the units being built and the quantity being built for each lot. For example, `L1001`.',
										},
										expirationDate: {
											type: 'string',
											description:
												'The expiration date for the units being built and the quantity being built. Use the format `YYYY-MM-DD`.',
										},
										aisle: {
											type: 'object',
											description: 'Aisle associated with the line details.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the aisle. For example, `10`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the aisle. For example, `AISLE1`.',
												},
											},
											required: [],
										},
										bin: {
											type: 'object',
											description:
												'The bin associated with the line details.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the bin. For example, `20`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the bin. For example, `BIN1`.',
												},
											},
											required: [],
										},
										row: {
											type: 'object',
											description:
												'The row associated with the line details.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the row. For example, `15`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the row. For example, `ROW1`.',
												},
											},
											required: [],
										},
										item: {
											type: 'object',
											description: 'Item associated with the line details.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the item. For example, `10`.',
												},
												id: {
													type: 'string',
													description:
														'Unique ID for the item. For example, `Battery`.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							documentHeader: {
								type: 'object',
								description: 'Header level details for the document line item.',
								properties: {
									key: {
										type: 'string',
										description:
											'Unique key for the purchasing document. For example, `55`.',
									},
									id: {
										type: 'string',
										description:
											'ID for the purchasing document. For example, `Purchase Invoice-PO0066`.',
									},
								},
								required: [],
							},
							retainage: {
								type: 'object',
								description:
									'Line-level retainage details. (Construction subscription)',
								properties: {
									percentage: {
										type: 'string',
										description: 'Retainage percentage. For example, `10.00`.',
									},
									baseAmountRetained: {
										type: 'string',
										description: 'Base amount retained. For example, `10.00`.',
									},
									txnAmountRetained: {
										type: 'string',
										description:
											'Transaction amount retained. For example, `10.00`.',
									},
								},
								required: [],
							},
							relatedDocument: {
								type: 'object',
								description:
									'Reference to the source transaction when creating a change order. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned unique key for the purchasing document. For example, `5151`.',
									},
									id: {
										type: 'string',
										description:
											'Unique ID for the purchasing document. This value is the same as the key for this object. For example, `5151`.',
									},
								},
								required: [],
							},
							relatedDocumentLine: {
								type: 'object',
								description:
									'Reference to the source transaction line when creating a change order. (Construction subscription)',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned unique key for the document line. For example, `13965`.',
									},
									id: {
										type: 'string',
										description:
											'Name or other unique ID for the document line. For example, `13965`.',
									},
								},
								required: [],
							},
							extendedPriceInTxnCurrency: {
								type: 'string',
								description:
									'Extended price in transaction currency. For example, `1294.3200000000`.',
							},
							extendedCost: {
								type: 'string',
								description: 'Extended total cost. For example, `1560.0000000000`.',
							},
							revision: {
								type: 'object',
								description:
									'Line-level revised details post change order. (Construction subscription)',
								properties: {
									unitQuantity: {
										type: 'number',
										description: 'Revised unit quantity. For example, `10`.',
									},
									quantity: {
										type: 'number',
										description: 'Revised quantity. For example, `10`.',
									},
								},
								required: [],
							},
							draft: {
								type: 'object',
								description:
									'Line-level draft details post change order. (Construction subscription)',
								properties: {
									unitQuantity: {
										type: 'number',
										description:
											'Draft unit quantity change. For example, `10`.',
									},
									quantity: {
										type: 'number',
										description: 'Draft quantity change. For example, `10`.',
									},
									price: {
										type: 'string',
										description:
											'Draft price change. For example, `20.0000000000`.',
									},
								},
								required: [],
							},
							isReverseConversion: {
								type: 'boolean',
								description:
									'Indicates whether the document line is reverse converted. (Construction subscription)',
							},
							amortizationTemplate: {
								type: 'object',
								description:
									'Amortization template for prepaid expense distribution.',
								properties: {
									key: {
										type: 'string',
										description:
											'System-assigned key for the amortization template. For example, `1`.',
									},
									id: {
										type: 'string',
										description:
											'Unique identifier for the amortization template. For example, `StraightLine_Monthly`.',
									},
								},
								required: [],
							},
							amortizationStartDate: {
								type: 'string',
								description:
									'Start date for the amortization period. Use the format `YYYY-MM-DD`.',
							},
							amortizationEndDate: {
								type: 'string',
								description:
									'End date for the amortization period. Use the format `YYYY-MM-DD`.',
							},
							lineSubtotals: {
								type: 'array',
								description: 'Lines of the purchasing document line subtotal.',
								items: {
									type: 'object',
									description:
										'Details of the subtotals, taxes, discounts, charges, and more for the document line.',
									properties: {
										absoluteValue: {
											type: 'string',
											description:
												'A non-negative base amount for the document subtotal line. For example, `100.00`.',
										},
										txnAbsoluteValue: {
											type: 'string',
											description:
												'A non-negative amount for the subtotal line. For example, `100.00`.',
										},
										enableOverrideTax: {
											type: 'boolean',
											description:
												'Set this field to `true` to allow users to override both tax detail (`taxDetail`) and the tax value (`txnAbsoluteValue`).',
										},
										taxDetail: {
											type: 'object',
											description:
												'Tax details describe a specific type of tax that applies to document lines.',
											properties: {
												key: {
													type: 'string',
													description:
														'Unique key for the tax detail. For example, `15`.',
												},
												id: {
													type: 'string',
													description:
														'ID for the tax detail. For example, `VAT Tax Detail`.',
												},
											},
											required: [],
										},
										status: {
											type: 'string',
											description:
												'Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.',
											default: '',
											enum: ['', 'active', 'inactive'],
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				subtotals: {
					type: 'array',
					description: 'Lines of the purchasing document subtotal.',
					items: {
						type: 'object',
						description:
							'Details of subtotals, taxes, discounts, charges, and more for a purchasing transaction.',
						properties: {
							description: {
								type: 'string',
								description:
									'Description of the document subtotal. For example, `Tax`.',
							},
							absoluteValue: {
								type: 'string',
								description:
									'Non-negative base amount for the subtotal. API clients can set this value; when provided, it is used by the system when calculating any derived subtotal totals. For example, `40.50`.',
							},
							percentValue: {
								type: 'string',
								description:
									'Percentage value that is calculated on the total of all line items of the document. For example, `10.50`.',
							},
							txnAbsoluteValue: {
								type: 'string',
								description:
									'Non-negative transaction amount calculated across all other lines of the document. For example, `44.78`.',
							},
							dimensions: {
								type: 'object',
								description: 'The dimensions of the subtotal.',
								properties: {
									location: {
										type: 'object',
										description:
											'Location associated with the document subtotal.',
										properties: {
											key: {
												type: 'string',
												description:
													'Unique key for the location. For example, `22`.',
											},
											id: {
												type: 'string',
												description:
													'ID for the location. For example, `Arizona`.',
											},
										},
										required: [],
									},
									department: {
										type: 'object',
										description:
											'Department associated with the document subtotal.',
										properties: {
											key: {
												type: 'string',
												description:
													"Unique key for the department. For example, `9`. Sage's OpenAPI spec marks this field as read-only for subtotals, so Sage may ignore it.",
											},
											id: {
												type: 'string',
												description:
													"Unique ID for the department. For example, `Sales`. Sage's OpenAPI spec marks this field as read-only for subtotals, so Sage may ignore it.",
											},
										},
										required: [],
									},
									employee: {
										type: 'object',
										description: 'The employee of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the employee. For example, `10`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the employee. For example, `EMP-10`.',
											},
										},
										required: [],
									},
									project: {
										type: 'object',
										description: 'The project of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the project. For example, `2`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the project. For example, `NET-XML30-2`.',
											},
										},
										required: [],
									},
									customer: {
										type: 'object',
										description: 'The customer of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the customer. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the customer. For example, `CUST-13`.',
											},
										},
										required: [],
									},
									vendor: {
										type: 'object',
										description: 'The vendor of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the vendor. For example, `357`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the vendor. For example, `1605212096809`.',
											},
										},
										required: [],
									},
									item: {
										type: 'object',
										description: 'The item of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the item. For example, `13`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the item. For example, `Case 13`.',
											},
										},
										required: [],
									},
									warehouse: {
										type: 'object',
										description: 'The warehouse of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the warehouse. For example, `6`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the warehouse. For example, `WH01`.',
											},
										},
										required: [],
									},
									class: {
										type: 'object',
										description: 'The class of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the class. For example, `731`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the class. For example, `REST_CLS_001`.',
											},
										},
										required: [],
									},
									task: {
										type: 'object',
										description: 'The task of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the task. For example, `1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the task. For example, `1`.',
											},
										},
										required: [],
									},
									costType: {
										type: 'object',
										description: 'The cost type of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the cost type. For example, `2`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the cost type. For example, `2`.',
											},
										},
										required: [],
									},
									asset: {
										type: 'object',
										description: 'The asset of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the asset. For example, `A001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the asset. For example, `1`.',
											},
										},
										required: [],
									},
									contract: {
										type: 'object',
										description: 'The contract of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the contract. For example, `CON-0045-1`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the contract. For example, `12`.',
											},
										},
										required: [],
									},
									affiliateEntity: {
										type: 'object',
										description: 'The affiliate entity of the dimensions.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the affiliate entity. For example, `23`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the affiliate entity. For example, `AFF-23`.',
											},
										},
										required: [],
									},
									loanAccount: {
										type: 'object',
										description: 'The loan account of the dimensions.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for the loan account. For example, `LN001`.',
											},
											key: {
												type: 'string',
												description:
													'System-assigned key for the loan account. For example, `852`.',
											},
										},
										required: [],
									},
									workOrder: {
										type: 'object',
										description: 'Work order associated with the dimension.',
										properties: {
											key: {
												type: 'string',
												description:
													'System-assigned key for the work order. For example, `18`.',
											},
											id: {
												type: 'string',
												description:
													'Unique identifier for the work order. For example, `WO-0017`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				entityId: {
					type: 'string',
					description:
						'For multi-entity companies only. Enter the ID of the entity to target a specific sub-entity. Leave empty to use the top-level entity. Sent as the `X-IA-API-Param-Entity` header.',
				},
			},
			required: ['documentName', 'key'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description: 'System-assigned key of the purchasing document.',
				},
				id: { type: 'string', description: 'Unique ID of the purchasing document.' },
				href: {
					type: 'string',
					description: 'Relative API URL of the purchasing document.',
				},
			},
			required: [],
		},
	},
];
