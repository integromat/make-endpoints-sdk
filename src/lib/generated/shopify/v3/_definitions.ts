// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'adjustInventoryLevel',
		label: 'Adjust an inventory level',
		description: 'Applies relative quantity changes to inventory items at locations.',
		context:
			'---\nname: adjustInventoryLevel\ndescription: Applies relative quantity changes to inventory items at locations.\n---\n\nWraps the `inventoryAdjustQuantities` mutation of the Shopify GraphQL Admin API. Every input field except\n**Idempotency key** is part of `InventoryAdjustQuantitiesInput`.\n\n## Where the IDs come from\n\n**Location ID** comes from the **Search locations** endpoint. **Inventory item ID** comes from the\n**Get a product variant** endpoint, which returns it as `inventoryItem.id`.\n\n## Relative, not absolute\n\n**Delta** is a change, not a target: `-3` removes three units. To set an exact number instead, use the\n**Update an inventory level** endpoint, which wraps `inventorySetQuantities`.\n\nShopify recommends this mutation over the absolute one unless your system is the authoritative source of truth for\nthe inventory, because relative changes survive concurrent updates.\n\n## Compare-and-swap\n\n**Change from quantity** is a safety check: supply the quantity you believe is currently at the location and the\ncall fails with `CHANGE_FROM_QUANTITY_STALE` rather than writing over a change someone else made. As of the\n2026-04 API the field is **mandatory**, so leaving it empty does not omit it — the endpoint sends an explicit\n`null`, which is how you opt out of the check.\n\n## Idempotency\n\nThe 2026-04 API requires an idempotency key on this mutation. Leave **Idempotency key** empty and a fresh UUID is\ngenerated per call, which means a retry after a network timeout would apply the adjustment twice. Pass your own\nstable key whenever you intend to retry.\n\n## Ledger document URI\n\nRequired for every quantity name except `available`, and rejected for `available`. It must not be a\n`gid://shopify/…` value.\n\n## Output\n\nReturns the `inventoryAdjustmentGroup` recording the batch, with the resulting quantity per change, plus\n`userErrors`. A non-empty `userErrors` list fails the call with the Shopify messages.\n',
		accounts: {
			shopify: { scope: ['write_inventory', 'read_locations'] },
			shopify4: { scope: ['write_inventory', 'read_locations'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				changes: {
					type: 'array',
					description:
						'The relative quantity changes to apply. Each entry targets one inventory item at one location.',
					items: {
						type: 'object',
						description: 'One relative quantity change.',
						properties: {
							inventoryItemId: {
								type: 'string',
								description:
									'The global ID of the inventory item, such as `gid://shopify/InventoryItem/123`. The **Get a product variant** endpoint returns it as `inventoryItem.id`.',
							},
							locationId: {
								type: 'string',
								description:
									'The global ID of the location, such as `gid://shopify/Location/123`. The **Search locations** endpoint returns it as `id`.',
							},
							delta: {
								type: 'number',
								description:
									'The amount by which the quantity changes. Use a negative number to remove stock.',
							},
							changeFromQuantity: {
								type: 'number',
								description:
									'The quantity you expect at this location right now, for a compare-and-swap safety check. When it does not match, the call fails with `CHANGE_FROM_QUANTITY_STALE` instead of writing stale data. Leave it empty to skip the check — the endpoint then sends an explicit `null`, which the 2026-04 API requires.',
							},
							ledgerDocumentUri: {
								type: 'string',
								description:
									'A non-Shopify URI identifying the specific inventory transaction behind this change, such as `gid://warehouse-app/InventoryTransaction/TXN-1`. Required for every quantity name except `available`, and not supported for `available`. A `gid://shopify/…` value is rejected.',
							},
						},
						required: ['inventoryItemId', 'locationId', 'delta'],
					},
					minItems: 1,
				},
				name: {
					type: 'string',
					description: 'The inventory quantity state to adjust.',
					enum: [
						'available',
						'damaged',
						'incoming',
						'quality_control',
						'reserved',
						'safety_stock',
					],
				},
				reason: {
					type: 'string',
					description:
						'The reason recorded for the adjustment. It must be one of the values Shopify accepts — see the [`inventoryAdjustQuantities` reference](https://shopify.dev/docs/api/admin-graphql/2026-04/mutations/inventoryAdjustQuantities).',
					enum: [
						'correction',
						'cycle_count_available',
						'damaged',
						'movement_created',
						'movement_updated',
						'movement_received',
						'movement_canceled',
						'other',
						'promotion',
						'quality_control',
						'received',
						'reservation_created',
						'reservation_deleted',
						'reservation_updated',
						'restock',
						'safety_stock',
						'shrinkage',
					],
				},
				referenceDocumentUri: {
					type: 'string',
					description:
						'A URI recording why the change happened, shown in the merchant inventory history. Shopify prefers a global ID naming your app, such as `gid://warehouse-app/PurchaseOrder/PO-1`, but an `https://` URL or a custom scheme also works.',
				},
				idempotencyKey: {
					type: 'string',
					description:
						'A key that makes the adjustment safe to retry: repeating a call with the same key does not apply the change twice. The 2026-04 API requires one, so a fresh UUID is generated when you leave this empty. Supply your own value when you may retry after a timeout. See the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).',
				},
			},
			required: ['changes', 'name', 'reason'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				inventoryAdjustmentGroup: {
					type: 'object',
					description: 'The batch of inventory changes this call produced.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the inventory adjustment group.',
						},
						createdAt: {
							type: 'string',
							description: 'The date and time when the adjustment group was created.',
						},
						reason: {
							type: 'string',
							description: 'The reason recorded for the group of adjustments.',
						},
						referenceDocumentUri: {
							type: 'string',
							description:
								'The URI recorded as the reason the inventory change happened.',
						},
						changes: {
							type: 'array',
							description:
								'The individual quantity changes in this group. This is a list field, so it has no `nodes` wrapper.',
							items: {
								type: 'object',
								description:
									'One quantity change of one inventory item at one location.',
								properties: {
									name: {
										type: 'string',
										description:
											'The name of the inventory quantity that changed, such as `available`.',
									},
									delta: {
										type: 'number',
										description:
											'The amount by which the quantity changed. Negative when stock was removed.',
									},
									quantityAfterChange: {
										type: 'number',
										description:
											'The resulting quantity of the named inventory state after the change.',
									},
									ledgerDocumentUri: {
										type: 'string',
										description:
											'The URI identifying what the quantity change was applied to.',
									},
									item: {
										type: 'object',
										description: 'The inventory item the change applies to.',
										properties: {
											id: {
												type: 'string',
												description: 'The global ID of the inventory item.',
											},
										},
										required: [],
									},
									location: {
										type: 'object',
										description: 'The location the change applies to.',
										properties: {
											id: {
												type: 'string',
												description: 'The global ID of the location.',
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
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The module fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single operation — it forwards an arbitrary GraphQL document to the Shopify\nAdmin API, mirroring the "Make a GraphQL API call" module. Use it for anything the typed endpoints in this app do\nnot cover.\n\nThe request always goes by `POST` to\n`https://{shop}.myshopify.com/admin/api/{version}/graphql.json`, with the shop domain taken from the connection\nand authentication handled automatically. Put the document in **Query** and its variables in **Variables**:\n\n    query GetProduct($id: ID!) {\n      product(id: $id) {\n        id\n        title\n      }\n    }\n\nwith variables `{"id": "gid://shopify/Product/123"}`.\n\n## Scopes\n\nThis endpoint declares no scope of its own, because the operation you send determines what is needed. The\nconnection must already carry the access scopes for whatever you call, otherwise Shopify rejects the request.\n\n## Errors\n\nThe GraphQL Admin API returns HTTP `200` for failed operations, so **Status code** is not a success signal. The\napp inspects `errors` and any nested `userErrors` in the response and fails the call with the Shopify messages,\nwhich includes surfacing `THROTTLED` together with the current query-cost budget.\n\nBecause of that, a mutation you send through here must select its own `userErrors { field message }`, or a\nrejected write will look like a success.\n\n## Query cost\n\nThe Admin API meters by [calculated query cost](https://shopify.dev/docs/api/usage/rate-limits), not request count. Deeply nested documents and\nlarge `first` values are what exhaust the budget; `extensions.cost` in the response body reports what the call\nconsumed and what is left.\n\n## Reference\n\nThe full schema is in the [Shopify GraphQL Admin API reference](https://shopify.dev/docs/api/admin-graphql).\n',
		accounts: { shopify: { scope: [] }, shopify4: { scope: [] } },
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
				query: {
					type: 'string',
					description:
						'The GraphQL document to send. It can be a query or a mutation — the field is called **Query** because that is the name of the JSON key Shopify expects. Example: `query { shop { name } }`.',
				},
				variables: {
					description:
						'The GraphQL variables as a JSON object, for example `{"id": "gid://shopify/Product/123"}`. Pass an object, not a string. Omit it for a document with no variables.',
				},
				version: {
					type: 'string',
					description:
						'The Shopify Admin API version to call, such as `2026-07`. Defaults to `2026-04`, the version the rest of this app targets. See the [API versioning documentation](https://shopify.dev/docs/api/usage/versioning).',
					default: '2026-04',
				},
			},
			required: ['query'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: {
					description:
						'The raw GraphQL response body, with `data` and — on partial failures — `errors` and `extensions`. Not flattened, so GraphQL connections keep their `nodes` and `edges` wrappers.',
				},
				headers: {
					type: 'object',
					description: 'The HTTP response headers.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				statusCode: {
					type: 'number',
					description:
						'The HTTP response status code. The GraphQL Admin API answers `200` even for failed operations, so read `body.errors` rather than relying on this.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'createACustomer',
		label: 'Create a customer',
		description:
			'Creates a customer with the given contact details, marketing consent, tags, and metafields.',
		context:
			'---\nname: createACustomer\ndescription: Creates a customer with the given contact details, marketing consent, tags, and metafields.\n---\n\nWraps the `customerCreate` mutation of the Shopify GraphQL Admin API. Every input field is part of `CustomerInput`.\n\n## At least one identifier is needed\n\nNo single field is marked required by the API, but Shopify rejects a customer with nothing to identify it. Provide at\nleast one of **First name**, **Last name**, **Email**, or **Phone**. **Email** and **Phone** must be unique across the\nshop.\n\n## Marketing consent\n\nSetting **Email marketing consent** requires **Email**, and **SMS marketing consent** requires **Phone**. Only\n`SUBSCRIBED`, `UNSUBSCRIBED`, and `PENDING` are accepted as an email marketing state — `NOT_SUBSCRIBED` is the\ndefault for customers who never subscribed and is rejected as input.\n\n## Addresses\n\nAddresses are deliberately **not** exposed here: `CustomerInput.addresses` is deprecated in the Shopify API. Create\nthe customer first, then add addresses with the `customerAddressCreate` mutation through the Arbitrary call endpoint.\n\n## Output\n\nThe mutation returns the new customer ID plus `userErrors`. A non-empty `userErrors` list fails the call with the\nShopify messages.\n',
		accounts: {
			shopify: { scope: ['write_customers'] },
			shopify4: { scope: ['write_customers'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				firstName: { type: 'string', description: 'The first name of the customer.' },
				lastName: { type: 'string', description: 'The last name of the customer.' },
				email: {
					type: 'string',
					description:
						'The unique email address of the customer. Required when setting email marketing consent.',
				},
				phone: {
					type: 'string',
					description:
						'The unique phone number of the customer, in E.164 format such as `+16135551212`. Required when setting SMS marketing consent.',
				},
				locale: {
					type: 'string',
					description: 'The locale of the customer, such as `en` or `cs`.',
				},
				note: { type: 'string', description: 'A note about the customer.' },
				tags: {
					type: 'array',
					description:
						'The tags to associate with the customer. This **overwrites** any existing tags. A customer can have up to 250 tags. Use the `tagsAdd` mutation through the Arbitrary call endpoint to add tags without replacing them.',
					items: { type: 'string', description: 'A tag to associate with the customer.' },
				},
				taxExempt: {
					type: 'boolean',
					description:
						'Whether the customer is exempt from paying taxes on their orders.',
				},
				taxExemptions: {
					type: 'array',
					description:
						'The tax exemptions to apply to the customer, such as `CA_STATUS_CARD_EXEMPTION` or `US_NY_RESELLER_EXEMPTION`. See [TaxExemption](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/TaxExemption) for the full list of values.',
					items: {
						type: 'string',
						description:
							'One tax exemption value from the Shopify `TaxExemption` enum.',
					},
				},
				multipassIdentifier: {
					type: 'string',
					description: 'A unique identifier for the customer used with multipass login.',
				},
				emailMarketingConsent: {
					type: 'object',
					description:
						'When and how the customer consented to receive marketing material by email. **Email** is required when creating a customer with email marketing consent.',
					properties: {
						marketingState: {
							type: 'string',
							description:
								'The email marketing state to set. Only `SUBSCRIBED`, `UNSUBSCRIBED`, and `PENDING` are accepted as input; `NOT_SUBSCRIBED`, `REDACTED`, and `INVALID` are rejected.',
							default: '',
							enum: ['', 'SUBSCRIBED', 'UNSUBSCRIBED', 'PENDING'],
						},
						marketingOptInLevel: {
							type: 'string',
							description:
								'The opt-in level recorded at the time the customer subscribed.',
							default: '',
							enum: ['', 'CONFIRMED_OPT_IN', 'SINGLE_OPT_IN', 'UNKNOWN'],
						},
						consentUpdatedAt: {
							type: 'string',
							description:
								'The date and time when the customer last consented or objected. Defaults to the time the request is sent.',
						},
						sourceLocationId: {
							type: 'string',
							description:
								'The global ID of the location where the customer gave consent, such as `gid://shopify/Location/123`.',
						},
					},
					required: [],
				},
				smsMarketingConsent: {
					type: 'object',
					description:
						'When and how the customer consented to receive marketing material by SMS. **Phone** is required when creating a customer with SMS marketing consent.',
					properties: {
						marketingState: {
							type: 'string',
							description:
								'The SMS marketing state to set. `REDACTED` is read-only and cannot be sent.',
							default: '',
							enum: ['', 'SUBSCRIBED', 'UNSUBSCRIBED', 'PENDING', 'NOT_SUBSCRIBED'],
						},
						marketingOptInLevel: {
							type: 'string',
							description:
								'The opt-in level recorded at the time the customer subscribed.',
							default: '',
							enum: ['', 'CONFIRMED_OPT_IN', 'SINGLE_OPT_IN', 'UNKNOWN'],
						},
						consentUpdatedAt: {
							type: 'string',
							description:
								'The date and time when the customer last consented or objected. Defaults to the time the request is sent.',
						},
						sourceLocationId: {
							type: 'string',
							description:
								'The global ID of the location where the customer gave consent, such as `gid://shopify/Location/123`.',
						},
					},
					required: [],
				},
				metafields: {
					type: 'array',
					description: 'The metafields to associate with the customer.',
					items: {
						type: 'object',
						description:
							'A metafield holding additional information about the resource.',
						properties: {
							namespace: {
								type: 'string',
								description:
									'The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 3,
								maximum: 255,
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 2,
								maximum: 64,
							},
							type: {
								type: 'string',
								description:
									'The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							value: {
								type: 'string',
								description:
									'The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.',
							},
							id: {
								type: 'string',
								description:
									'The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				customer: {
					type: 'object',
					description:
						'The created customer. Call the Get a customer endpoint with this ID for the full customer details.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the created customer.',
						},
						legacyResourceId: {
							type: 'string',
							description: 'The REST API ID of the created customer.',
						},
						displayName: {
							type: 'string',
							description:
								'The full name of the customer, based on the first and last names.',
						},
						createdAt: {
							type: 'string',
							description: 'The date and time when the customer was created.',
						},
						updatedAt: {
							type: 'string',
							description: 'The date and time when the customer was last modified.',
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'createAFulfillment',
		label: 'Create a fulfillment',
		description: 'Creates a fulfillment for the line items of one or more fulfillment orders.',
		context:
			"---\nname: createAFulfillment\ndescription: Creates a fulfillment for the line items of one or more fulfillment orders.\n---\n\nWraps the `fulfillmentCreate` mutation of the Shopify GraphQL Admin API. **Fulfillment** maps to the\n`FulfillmentInput` argument; **Message** is the separate `message` argument.\n\n## The two-step flow\n\nA fulfillment is always created against **fulfillment orders**, never against an order directly:\n\n1. Call **Get an order** with **Output fulfillment order IDs**, or **Search fulfillment orders**, to get the\n   fulfillment order IDs.\n2. Call **Get a fulfillment order** with **Output line items** to get the line item IDs and their remaining\n   quantities, and check `supportedActions`.\n3. Call this endpoint with those IDs.\n\nTo fulfill an entire fulfillment order, add one entry to **Line items by fulfillment order** with just the\n**Fulfillment order ID** and leave its **Line items** empty. To fulfill part of it, list the specific line item IDs\nand quantities. One call can cover several fulfillment orders at once.\n\n## When this fails\n\n`supportedActions` on the fulfillment order tells you what is allowed. If it lists `REQUEST_FULFILLMENT` rather\nthan `CREATE_FULFILLMENT`, the location is managed by a fulfillment service and you must submit a request with the\n`fulfillmentOrderSubmitFulfillmentRequest` mutation through the **Arbitrary call** endpoint instead.\n\n## Tracking information\n\nThe singular and plural tracking fields are mutually exclusive: use **Number** with **URL** for one shipment, or\n**Numbers** with **URLs** for several. Supplying a **Company** name that matches Shopify's list exactly lets Shopify\nbuild the tracking URLs for you; otherwise provide them yourself, in the same order as the numbers.\n\n## Output\n\nThe mutation returns the created fulfillment plus `userErrors`. A non-empty `userErrors` list fails the call with\nthe Shopify messages.\n",
		accounts: {
			shopify: {
				scope: [
					'write_merchant_managed_fulfillment_orders',
					'write_third_party_fulfillment_orders',
				],
			},
			shopify4: {
				scope: [
					'write_merchant_managed_fulfillment_orders',
					'write_third_party_fulfillment_orders',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fulfillment: {
					type: 'object',
					description: 'The fulfillment to create from one or more fulfillment orders.',
					properties: {
						lineItemsByFulfillmentOrder: {
							type: 'array',
							description:
								'The fulfillment order line items to fulfill, grouped by fulfillment order. Leave **Line items** empty for an entry to fulfill everything in that fulfillment order.',
							items: {
								type: 'object',
								description:
									'One fulfillment order and the line items of it to fulfill.',
								properties: {
									fulfillmentOrderId: {
										type: 'string',
										description:
											'The global ID of the fulfillment order, such as `gid://shopify/FulfillmentOrder/123`. The **Get a fulfillment order** endpoint returns it as `id`.',
									},
									fulfillmentOrderLineItems: {
										type: 'array',
										description:
											'The specific line items to fulfill. Leave empty to fulfill all line items of the fulfillment order. Accepts a maximum of 512 line items.',
										items: {
											type: 'object',
											description:
												'One fulfillment order line item and the quantity to fulfill.',
											properties: {
												id: {
													type: 'string',
													description:
														'The global ID of the fulfillment order line item, as returned by the **Get a fulfillment order** endpoint under **Line items**. Required when a line item is provided.',
												},
												quantity: {
													type: 'number',
													description:
														'The number of units of this line item to fulfill. Required when a line item is provided.',
												},
											},
											required: [],
										},
									},
								},
								required: ['fulfillmentOrderId'],
							},
							minItems: 1,
						},
						notifyCustomer: {
							type: 'boolean',
							description:
								'Whether a shipping notification is sent to the customer when the fulfillment is created. Defaults to `false`.',
						},
						trackingInfo: {
							type: 'object',
							description:
								'The tracking information of the fulfillment. Provide either the singular **Number** / **URL** pair or the plural **Numbers** / **URLs** pair, never a mix of the two.',
							properties: {
								company: {
									type: 'string',
									description:
										'The name of the tracking company. When it matches one of the [supported tracking companies](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/FulfillmentTrackingInfo#supported-tracking-companies) exactly — capitalization included — Shopify builds the tracking URLs automatically and you only need the numbers. Otherwise supply the URLs yourself.',
								},
								number: {
									type: 'string',
									description:
										'The tracking number of the fulfillment. Use this with **URL** for a single shipment; do not combine it with **Numbers**.',
								},
								url: {
									type: 'string',
									description:
										'The URL to track the fulfillment, such as `https://www.myshipping.com/track/?tracknumbers=TRACKING_NUMBER`. Must be an RFC 3986-compliant URI. Provide it together with **Number**.',
								},
								numbers: {
									type: 'array',
									description:
										'The tracking numbers of the fulfillment when one fulfillment covers several shipments. Use this with **URLs**; do not combine it with **Number**.',
									items: {
										type: 'string',
										description: 'One tracking number of the fulfillment.',
									},
								},
								urls: {
									type: 'array',
									description:
										'The tracking URLs of the fulfillment. They are matched to **Numbers** by position, so the first URL belongs to the first number.',
									items: {
										type: 'string',
										description:
											'One tracking URL of the fulfillment. Must be an RFC 3986-compliant URI.',
									},
								},
							},
							required: [],
						},
						originAddress: {
							type: 'object',
							description:
								'The address the order was fulfilled from, typically the warehouse or fulfillment center. Intended for tax calculation.',
							properties: {
								countryCode: {
									type: 'string',
									description:
										'The country of the fulfillment location. Required when an origin address is provided.',
								},
								address1: {
									type: 'string',
									description: 'The street address of the fulfillment location.',
								},
								address2: {
									type: 'string',
									description:
										'The second line of the address, typically the apartment, suite, or unit number.',
								},
								city: {
									type: 'string',
									description: 'The city of the fulfillment location.',
								},
								provinceCode: {
									type: 'string',
									description: 'The province of the fulfillment location.',
								},
								zip: {
									type: 'string',
									description: 'The zip code of the fulfillment location.',
								},
							},
							required: [],
						},
					},
					required: ['lineItemsByFulfillmentOrder'],
				},
				message: {
					type: 'string',
					description:
						'An optional message about the fulfillment, shown to the fulfillment service.',
				},
			},
			required: ['fulfillment'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				fulfillment: {
					type: 'object',
					description: 'The created fulfillment.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the created fulfillment.',
						},
						legacyResourceId: {
							type: 'string',
							description: 'The REST API ID of the created fulfillment.',
						},
						name: {
							type: 'string',
							description:
								'A human-readable identifier of the fulfillment, such as `#1001.1`.',
						},
						status: {
							type: 'string',
							description:
								'The status of the fulfillment, such as `SUCCESS` or `PENDING`.',
						},
						totalQuantity: {
							type: 'number',
							description: 'The total number of units in the fulfillment.',
						},
						createdAt: {
							type: 'string',
							description: 'The date and time when the fulfillment was created.',
						},
						trackingInfo: {
							type: 'array',
							description:
								'The tracking information of the fulfillment. This is a list field, so it has no `nodes` wrapper.',
							items: {
								type: 'object',
								description: 'One tracking entry of the fulfillment.',
								properties: {
									company: {
										type: 'string',
										description: 'The name of the tracking company.',
									},
									number: {
										type: 'string',
										description: 'The tracking number of the fulfillment.',
									},
									url: {
										type: 'string',
										description: 'The URL to track the fulfillment.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'createAnOrder',
		label: 'Create an order',
		description:
			'Creates an order with the given line items, customer, addresses, and transactions.',
		context:
			'---\nname: createAnOrder\ndescription: Creates an order with the given line items, customer, addresses, and transactions.\n---\n\nWraps the `orderCreate` mutation of the Shopify GraphQL Admin API. Every input field except **Options** is\npart of `OrderCreateOrderInput`; **Options** maps to the separate `options` argument.\n\nThis mutation is intended for importing or recording orders that were placed elsewhere. It is **not** the way to\nlet a customer check out, and it is not the way to edit an existing order — use `orderEditBegin` for structural\nchanges to an order that already exists.\n\n## Line items\n\nEach line item needs either a product reference or its own title and price:\n\n- Reference an existing variant with **Variant ID**. When both **Product ID** and **Variant ID** are set, Shopify\n  uses the product that the variant belongs to.\n- For a custom item, set **Title** and **Price** → **Shop money** instead.\n\n## Inventory\n\n**Options** → **Inventory behaviour** defaults to `BYPASS`, which means the order does **not** claim inventory.\nUse `DECREMENT_OBEYING_POLICY` to decrement stock while respecting the product inventory policy, or\n`DECREMENT_IGNORING_POLICY` to decrement it regardless.\n\n## Taxes\n\nTax lines can be set at the order level or on individual line items, but **not both**. Order-level tax lines are\nsplit across the taxable line items of the created order.\n\n## Output\n\nThe mutation returns the new order ID plus `userErrors`. A non-empty `userErrors` list fails the call with the\nShopify messages, so a successful response means the order was created. Call `getAnOrder` with the returned ID\nwhen you need the full order.\n',
		accounts: {
			shopify: {
				scope: ['write_orders', 'read_products', 'read_customers', 'read_locations'],
			},
			shopify4: {
				scope: ['write_orders', 'read_products', 'read_customers', 'read_locations'],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				lineItems: {
					type: 'array',
					description:
						'The line items to create for the order. Each line item must reference either a product variant or a title and price.',
					items: {
						type: 'object',
						description: 'A line item to create for the order.',
						properties: {
							quantity: {
								type: 'number',
								description: 'The number of units purchased.',
							},
							variantId: {
								type: 'string',
								description:
									'The global ID of the product variant, such as `gid://shopify/ProductVariant/123`. When both **Product ID** and **Variant ID** are provided, the product of the variant is used.',
							},
							productId: {
								type: 'string',
								description:
									'The global ID of the product the line item belongs to, such as `gid://shopify/Product/123`.',
							},
							variantTitle: {
								type: 'string',
								description: 'The title of the product variant.',
							},
							priceSet: {
								type: 'object',
								description:
									'The price of the item before discounts, in the shop currency. Required when no product variant is referenced.',
								properties: {
									shopMoney: {
										type: 'object',
										description:
											"The amount in the shop's currency. Required when this price is provided.",
										properties: {
											amount: {
												type: 'number',
												description: 'The decimal monetary amount.',
											},
											currencyCode: {
												type: 'string',
												description:
													'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
												minimum: 3,
												maximum: 3,
											},
										},
										required: [],
									},
									presentmentMoney: {
										type: 'object',
										description:
											"The amount in the customer's presentment currency. Defaults to the shop currency when omitted.",
										properties: {
											amount: {
												type: 'number',
												description: 'The decimal monetary amount.',
											},
											currencyCode: {
												type: 'string',
												description:
													'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
												minimum: 3,
												maximum: 3,
											},
										},
										required: [],
									},
								},
								required: [],
							},
							sku: {
								type: 'string',
								description: 'The stock keeping unit of the item.',
							},
							vendor: {
								type: 'string',
								description: "The name of the item's supplier.",
							},
							taxable: {
								type: 'boolean',
								description: 'Whether the item is taxable. Defaults to `true`.',
							},
							requiresShipping: {
								type: 'boolean',
								description:
									'Whether the item requires shipping. Defaults to `false`.',
							},
							giftCard: {
								type: 'boolean',
								description:
									'Whether the item is a gift card. Gift cards are not taxed and are not considered for shipping charges. Defaults to `false`.',
							},
							fulfillmentService: {
								type: 'string',
								description:
									'The handle of the fulfillment service that stocks the product variant. Third-party services do not use the `manual` handle.',
							},
							weight: {
								type: 'object',
								description:
									'The weight of the line item. Takes precedence over the weight of the product variant.',
								properties: {
									unit: {
										type: 'string',
										description:
											'The unit of measurement for the weight value.',
										default: '',
										enum: ['', 'GRAMS', 'KILOGRAMS', 'OUNCES', 'POUNDS'],
									},
									value: {
										type: 'number',
										description: 'The weight value in the selected unit.',
									},
								},
								required: [],
							},
							properties: {
								type: 'array',
								description:
									'Custom information added to the item, often used for product customization options.',
								items: {
									type: 'object',
									description: 'A custom property of the line item.',
									properties: {
										name: {
											type: 'string',
											description: 'The name of the line item property.',
										},
										value: {
											type: 'string',
											description: 'The value of the line item property.',
										},
									},
									required: ['name', 'value'],
								},
							},
							taxLines: {
								type: 'array',
								description:
									'The taxes applied to this line item. Tax lines can be set on the order or on its line items, but not both.',
								items: {
									type: 'object',
									description: 'A tax applicable to the item.',
									properties: {
										rate: {
											type: 'number',
											description:
												'The proportion of the item price that the tax represents, as a decimal. For example, `0.21` for 21%.',
										},
										priceSet: {
											type: 'object',
											description:
												'The amount added to the order for this tax, after discounts are applied.',
											properties: {
												shopMoney: {
													type: 'object',
													description:
														"The amount in the shop's currency. Required when this price is provided.",
													properties: {
														amount: {
															type: 'number',
															description:
																'The decimal monetary amount.',
														},
														currencyCode: {
															type: 'string',
															description:
																'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
															minimum: 3,
															maximum: 3,
														},
													},
													required: [],
												},
												presentmentMoney: {
													type: 'object',
													description:
														"The amount in the customer's presentment currency. Defaults to the shop currency when omitted.",
													properties: {
														amount: {
															type: 'number',
															description:
																'The decimal monetary amount.',
														},
														currencyCode: {
															type: 'string',
															description:
																'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
															minimum: 3,
															maximum: 3,
														},
													},
													required: [],
												},
											},
											required: [],
										},
										channelLiable: {
											type: 'boolean',
											description:
												'Whether the channel that submitted the tax line is liable for remitting it. Defaults to `false`.',
										},
									},
									required: ['title', 'rate'],
								},
							},
						},
						required: ['quantity'],
					},
				},
				customer: {
					type: 'object',
					description:
						'The customer to associate with the order. Provide either **To associate** for an existing customer or **To upsert** to create or update one, but not both.',
					properties: {
						toAssociate: {
							type: 'object',
							description:
								'An existing customer to associate with the order, identified by ID or email.',
							properties: {
								id: {
									type: 'string',
									description:
										'The global ID of the customer, such as `gid://shopify/Customer/123`.',
								},
								email: {
									type: 'string',
									description:
										'The email of the customer to associate. Takes precedence over the order **Email** field.',
								},
							},
							required: [],
						},
						toUpsert: {
							type: 'object',
							description:
								'A customer to create, or an existing one to update, and associate with the order.',
							properties: {
								id: {
									type: 'string',
									description:
										'The global ID of the customer to update. Omit it to create a new customer.',
								},
								email: {
									type: 'string',
									description:
										'The email address of the customer. Used to uniquely identify the customer when no ID is provided, and takes precedence over the order **Email** field.',
								},
								firstName: {
									type: 'string',
									description: 'The first name of the customer.',
								},
								lastName: {
									type: 'string',
									description: 'The last name of the customer.',
								},
								phone: {
									type: 'string',
									description:
										'A unique phone number for the customer in E.164 format, such as `+16135551212`. Assigning the same number to multiple customers returns an error.',
								},
								note: { type: 'string', description: 'A note about the customer.' },
								tags: {
									type: 'array',
									description:
										'The tags to attach to the customer. A customer can have up to 250 tags of up to 255 characters each.',
									items: {
										type: 'string',
										description: 'A tag to attach to the customer.',
									},
								},
								taxExempt: {
									type: 'boolean',
									description:
										'Whether the customer is exempt from paying taxes on their order.',
								},
								multipassIdentifier: {
									type: 'string',
									description:
										'A unique identifier for the customer used with multipass login.',
								},
								addresses: {
									type: 'array',
									description:
										'The mailing addresses to associate with the customer. These use country and province **names**, unlike the order addresses, which use codes.',
									items: {
										type: 'object',
										description: 'A mailing address of the customer.',
										properties: {
											firstName: {
												type: 'string',
												description: 'The first name of the customer.',
											},
											lastName: {
												type: 'string',
												description: 'The last name of the customer.',
											},
											company: {
												type: 'string',
												description:
													"The name of the customer's company or organization.",
											},
											address1: {
												type: 'string',
												description:
													'The first line of the address, typically the street address or PO box number.',
											},
											address2: {
												type: 'string',
												description:
													'The second line of the address, typically the apartment, suite, or unit number.',
											},
											city: {
												type: 'string',
												description:
													'The name of the city, district, village, or town.',
											},
											province: {
												type: 'string',
												description:
													'The name of the region, such as the province, state, or district.',
											},
											country: {
												type: 'string',
												description: 'The name of the country.',
											},
											zip: {
												type: 'string',
												description:
													'The zip or postal code of the address.',
											},
											phone: {
												type: 'string',
												description:
													'A unique phone number for the customer, formatted using the E.164 standard.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
					},
					required: [],
				},
				email: {
					type: 'string',
					description:
						'The email address of the order. When a customer is provided without an email, the customer email is set to this value.',
				},
				phone: {
					type: 'string',
					description: 'The customer phone number of the order, in E.164 format.',
				},
				shippingAddress: {
					type: 'object',
					description:
						'The mailing address the order is shipped to. When a customer is provided, this address takes precedence over the billing address as the customer default address.',
					properties: {
						firstName: {
							type: 'string',
							description: 'The first name of the customer.',
						},
						lastName: { type: 'string', description: 'The last name of the customer.' },
						company: {
							type: 'string',
							description: "The name of the customer's company or organization.",
						},
						address1: {
							type: 'string',
							description:
								'The first line of the address, typically the street address or PO box number.',
						},
						address2: {
							type: 'string',
							description:
								'The second line of the address, typically the apartment, suite, or unit number.',
						},
						city: {
							type: 'string',
							description: 'The name of the city, district, village, or town.',
						},
						provinceCode: {
							type: 'string',
							description:
								'The code for the region of the address, such as the province, state, or district. For example, `QC` for Quebec, Canada.',
						},
						countryCode: {
							type: 'string',
							description:
								'The two-letter country code of the address, such as `CZ` for Czechia. See [CountryCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CountryCode).',
						},
						zip: {
							type: 'string',
							description: 'The zip or postal code of the address.',
						},
						phone: {
							type: 'string',
							description:
								'A unique phone number for the customer, formatted using the E.164 standard. For example, `+16135551111`.',
						},
					},
					required: [],
				},
				billingAddress: {
					type: 'object',
					description:
						'The mailing address associated with the payment method. Not available on orders that do not require a payment method.',
					properties: {
						firstName: {
							type: 'string',
							description: 'The first name of the customer.',
						},
						lastName: { type: 'string', description: 'The last name of the customer.' },
						company: {
							type: 'string',
							description: "The name of the customer's company or organization.",
						},
						address1: {
							type: 'string',
							description:
								'The first line of the address, typically the street address or PO box number.',
						},
						address2: {
							type: 'string',
							description:
								'The second line of the address, typically the apartment, suite, or unit number.',
						},
						city: {
							type: 'string',
							description: 'The name of the city, district, village, or town.',
						},
						provinceCode: {
							type: 'string',
							description:
								'The code for the region of the address, such as the province, state, or district. For example, `QC` for Quebec, Canada.',
						},
						countryCode: {
							type: 'string',
							description:
								'The two-letter country code of the address, such as `CZ` for Czechia. See [CountryCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CountryCode).',
						},
						zip: {
							type: 'string',
							description: 'The zip or postal code of the address.',
						},
						phone: {
							type: 'string',
							description:
								'A unique phone number for the customer, formatted using the E.164 standard. For example, `+16135551111`.',
						},
					},
					required: [],
				},
				shippingLines: {
					type: 'array',
					description: 'The shipping methods applied to the order.',
					items: {
						type: 'object',
						description: 'A shipping method applied to the order.',
						properties: {
							priceSet: {
								type: 'object',
								description:
									'The price of this shipping method in the shop currency. Cannot be negative. Required when a shipping line is provided.',
								properties: {
									shopMoney: {
										type: 'object',
										description:
											"The amount in the shop's currency. Required when this price is provided.",
										properties: {
											amount: {
												type: 'number',
												description: 'The decimal monetary amount.',
											},
											currencyCode: {
												type: 'string',
												description:
													'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
												minimum: 3,
												maximum: 3,
											},
										},
										required: [],
									},
									presentmentMoney: {
										type: 'object',
										description:
											"The amount in the customer's presentment currency. Defaults to the shop currency when omitted.",
										properties: {
											amount: {
												type: 'number',
												description: 'The decimal monetary amount.',
											},
											currencyCode: {
												type: 'string',
												description:
													'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
												minimum: 3,
												maximum: 3,
											},
										},
										required: [],
									},
								},
								required: [],
							},
							code: {
								type: 'string',
								description: 'A reference to the shipping method.',
							},
							source: {
								type: 'string',
								description: 'The source of the shipping method.',
							},
							taxLines: {
								type: 'array',
								description: 'The taxes applicable to this shipping line.',
								items: {
									type: 'object',
									description: 'A tax applicable to the item.',
									properties: {
										rate: {
											type: 'number',
											description:
												'The proportion of the item price that the tax represents, as a decimal. For example, `0.21` for 21%.',
										},
										priceSet: {
											type: 'object',
											description:
												'The amount added to the order for this tax, after discounts are applied.',
											properties: {
												shopMoney: {
													type: 'object',
													description:
														"The amount in the shop's currency. Required when this price is provided.",
													properties: {
														amount: {
															type: 'number',
															description:
																'The decimal monetary amount.',
														},
														currencyCode: {
															type: 'string',
															description:
																'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
															minimum: 3,
															maximum: 3,
														},
													},
													required: [],
												},
												presentmentMoney: {
													type: 'object',
													description:
														"The amount in the customer's presentment currency. Defaults to the shop currency when omitted.",
													properties: {
														amount: {
															type: 'number',
															description:
																'The decimal monetary amount.',
														},
														currencyCode: {
															type: 'string',
															description:
																'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
															minimum: 3,
															maximum: 3,
														},
													},
													required: [],
												},
											},
											required: [],
										},
										channelLiable: {
											type: 'boolean',
											description:
												'Whether the channel that submitted the tax line is liable for remitting it. Defaults to `false`.',
										},
									},
									required: ['title', 'rate'],
								},
							},
						},
						required: ['title'],
					},
				},
				financialStatus: {
					type: 'string',
					description:
						'The financial status of the order. Derived from the transactions when omitted, and can be recalculated later as the transactions change.',
					default: '',
					enum: [
						'',
						'PENDING',
						'AUTHORIZED',
						'PARTIALLY_PAID',
						'PAID',
						'PARTIALLY_REFUNDED',
						'REFUNDED',
						'EXPIRED',
						'VOIDED',
					],
				},
				fulfillmentStatus: {
					type: 'string',
					description:
						'The fulfillment status of the order. Defaults to unfulfilled when omitted.',
					default: '',
					enum: ['', 'FULFILLED', 'PARTIAL', 'RESTOCKED'],
				},
				fulfillment: {
					type: 'object',
					description:
						'A fulfillment to create for the order. It applies to all line items.',
					properties: {
						locationId: {
							type: 'string',
							description:
								'The global ID of the location to fulfill the order from, such as `gid://shopify/Location/123`.',
						},
						trackingNumber: {
							type: 'string',
							description: 'The tracking number of the fulfillment.',
						},
						trackingCompany: {
							type: 'string',
							description:
								'The name of the tracking company, written exactly as in the [supported tracking companies list](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/FulfillmentTrackingInfo#supported-tracking-companies). Capitalization matters.',
						},
						notifyCustomer: {
							type: 'boolean',
							description:
								'Whether the customer is notified of changes to the fulfillment. Defaults to `false`.',
						},
						shipmentStatus: {
							type: 'string',
							description: 'The status of the shipment.',
							default: '',
							enum: [
								'',
								'ATTEMPTED_DELIVERY',
								'CARRIER_PICKED_UP',
								'CONFIRMED',
								'DELAYED',
								'DELIVERED',
								'FAILURE',
								'IN_TRANSIT',
								'LABEL_PRINTED',
								'LABEL_PURCHASED',
								'OUT_FOR_DELIVERY',
								'READY_FOR_PICKUP',
							],
						},
						originAddress: {
							type: 'object',
							description:
								'The address at which the fulfillment occurred, typically the warehouse or fulfillment center. Intended for tax calculation.',
							properties: {
								address1: {
									type: 'string',
									description: 'The street address of the fulfillment location.',
								},
								address2: {
									type: 'string',
									description:
										'The second line of the address, typically the apartment, suite, or unit number.',
								},
								city: {
									type: 'string',
									description: 'The city of the fulfillment location.',
								},
								provinceCode: {
									type: 'string',
									description: 'The province of the fulfillment location.',
								},
								countryCode: {
									type: 'string',
									description:
										'The country of the fulfillment location. Required when an origin address is provided.',
								},
								zip: {
									type: 'string',
									description: 'The zip code of the fulfillment location.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				transactions: {
					type: 'array',
					description: 'The payment transactions to create for the order.',
					items: {
						type: 'object',
						description: 'A payment transaction of the order.',
						properties: {
							amountSet: {
								type: 'object',
								description:
									'The amount of the transaction. Required when a transaction is provided.',
								properties: {
									shopMoney: {
										type: 'object',
										description:
											"The amount in the shop's currency. Required when this price is provided.",
										properties: {
											amount: {
												type: 'number',
												description: 'The decimal monetary amount.',
											},
											currencyCode: {
												type: 'string',
												description:
													'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
												minimum: 3,
												maximum: 3,
											},
										},
										required: [],
									},
									presentmentMoney: {
										type: 'object',
										description:
											"The amount in the customer's presentment currency. Defaults to the shop currency when omitted.",
										properties: {
											amount: {
												type: 'number',
												description: 'The decimal monetary amount.',
											},
											currencyCode: {
												type: 'string',
												description:
													'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
												minimum: 3,
												maximum: 3,
											},
										},
										required: [],
									},
								},
								required: [],
							},
							kind: {
								type: 'string',
								description: 'The kind of transaction. Defaults to `SALE`.',
								default: '',
								enum: [
									'',
									'AUTHORIZATION',
									'CAPTURE',
									'CHANGE',
									'EMV_AUTHORIZATION',
									'REFUND',
									'SALE',
									'SUGGESTED_REFUND',
									'VOID',
								],
							},
							status: {
								type: 'string',
								description:
									'The status of the transaction. Defaults to `SUCCESS`.',
								default: '',
								enum: [
									'',
									'AWAITING_RESPONSE',
									'ERROR',
									'FAILURE',
									'PENDING',
									'SUCCESS',
									'UNKNOWN',
								],
							},
							gateway: {
								type: 'string',
								description:
									'The name of the gateway the transaction was issued through.',
							},
							authorizationCode: {
								type: 'string',
								description:
									'The authorization code associated with the transaction.',
							},
							processedAt: {
								type: 'string',
								description:
									'The date and time when the transaction was processed.',
							},
							locationId: {
								type: 'string',
								description:
									'The global ID of the location where the transaction was processed.',
							},
							deviceId: {
								type: 'string',
								description:
									'The global ID of the device used to process the transaction.',
							},
							giftCardId: {
								type: 'string',
								description:
									'The global ID of the gift card used for this transaction.',
							},
							userId: {
								type: 'string',
								description:
									'The global ID of the user who processed the transaction.',
							},
							receiptJson: {
								description:
									'The transaction receipt that the payment gateway attaches to the transaction. Its shape depends on the gateway.',
							},
							test: {
								type: 'boolean',
								description:
									'Whether the transaction is a test transaction. Defaults to `false`.',
							},
						},
						required: [],
					},
				},
				taxLines: {
					type: 'array',
					description:
						'The taxes applicable to the order. Tax lines can be set on the order or on its line items, but not both. Order-level tax lines are split across the taxable line items.',
					items: {
						type: 'object',
						description: 'A tax applicable to the item.',
						properties: {
							rate: {
								type: 'number',
								description:
									'The proportion of the item price that the tax represents, as a decimal. For example, `0.21` for 21%.',
							},
							priceSet: {
								type: 'object',
								description:
									'The amount added to the order for this tax, after discounts are applied.',
								properties: {
									shopMoney: {
										type: 'object',
										description:
											"The amount in the shop's currency. Required when this price is provided.",
										properties: {
											amount: {
												type: 'number',
												description: 'The decimal monetary amount.',
											},
											currencyCode: {
												type: 'string',
												description:
													'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
												minimum: 3,
												maximum: 3,
											},
										},
										required: [],
									},
									presentmentMoney: {
										type: 'object',
										description:
											"The amount in the customer's presentment currency. Defaults to the shop currency when omitted.",
										properties: {
											amount: {
												type: 'number',
												description: 'The decimal monetary amount.',
											},
											currencyCode: {
												type: 'string',
												description:
													'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
												minimum: 3,
												maximum: 3,
											},
										},
										required: [],
									},
								},
								required: [],
							},
							channelLiable: {
								type: 'boolean',
								description:
									'Whether the channel that submitted the tax line is liable for remitting it. Defaults to `false`.',
							},
						},
						required: ['title', 'rate'],
					},
				},
				discountCode: {
					type: 'object',
					description:
						'A discount code applied to the order. Provide exactly one of the three discount types.',
					properties: {
						freeShippingDiscountCode: {
							type: 'object',
							description:
								'A free shipping discount code applied to the shipping on the order.',
							properties: {
								code: {
									type: 'string',
									description: 'The discount code entered at checkout.',
								},
							},
							required: [],
						},
						itemFixedDiscountCode: {
							type: 'object',
							description:
								'A fixed amount discount code applied to the line items on the order.',
							properties: {
								code: {
									type: 'string',
									description: 'The discount code entered at checkout.',
								},
								amountSet: {
									type: 'object',
									description:
										'The monetary amount deducted from the order total.',
									properties: {
										shopMoney: {
											type: 'object',
											description:
												"The amount in the shop's currency. Required when this price is provided.",
											properties: {
												amount: {
													type: 'number',
													description: 'The decimal monetary amount.',
												},
												currencyCode: {
													type: 'string',
													description:
														'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
													minimum: 3,
													maximum: 3,
												},
											},
											required: [],
										},
										presentmentMoney: {
											type: 'object',
											description:
												"The amount in the customer's presentment currency. Defaults to the shop currency when omitted.",
											properties: {
												amount: {
													type: 'number',
													description: 'The decimal monetary amount.',
												},
												currencyCode: {
													type: 'string',
													description:
														'The three-letter currency code in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217), such as `USD`. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
													minimum: 3,
													maximum: 3,
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
						itemPercentageDiscountCode: {
							type: 'object',
							description:
								'A percentage discount code applied to the line items on the order.',
							properties: {
								code: {
									type: 'string',
									description: 'The discount code entered at checkout.',
								},
								percentage: {
									type: 'number',
									description: 'The percentage deducted from the order total.',
									minimum: 0,
									maximum: 100,
								},
							},
							required: [],
						},
					},
					required: [],
				},
				currency: {
					type: 'string',
					description:
						'The shop-facing currency of the order, as a three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code. Defaults to the shop currency. See [CurrencyCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CurrencyCode).',
					minimum: 3,
					maximum: 3,
				},
				presentmentCurrency: {
					type: 'string',
					description:
						'The presentment currency used to display prices to the customer, as a three-letter ISO 4217 code. Required when any presentment currency amounts are used in the order.',
					minimum: 3,
					maximum: 3,
				},
				taxesIncluded: {
					type: 'boolean',
					description:
						'Whether taxes are included in the order subtotal. Defaults to `false`.',
				},
				companyLocationId: {
					type: 'string',
					description:
						"The global ID of the purchasing company's location for the order, such as `gid://shopify/CompanyLocation/123`.",
				},
				name: {
					type: 'string',
					description:
						'The order name shown to the merchant, such as `#1001`. Generated from the order number and the shop prefix and suffix when omitted. This is not the order ID.',
				},
				poNumber: {
					type: 'string',
					description: 'The purchase order number associated with the order.',
				},
				note: { type: 'string', description: 'The note associated with the order.' },
				tags: {
					type: 'array',
					description: 'The tags to attach to the order.',
					items: { type: 'string', description: 'A tag to attach to the order.' },
				},
				customAttributes: {
					type: 'array',
					description:
						'Extra information added to the order. Appears in the Additional details section of the order details page in the Shopify admin.',
					items: {
						type: 'object',
						description: 'A note attribute of the order.',
						properties: {
							key: {
								type: 'string',
								description: 'The key or name of the custom attribute.',
							},
							value: {
								type: 'string',
								description: 'The value of the custom attribute.',
							},
						},
						required: ['key', 'value'],
					},
				},
				metafields: {
					type: 'array',
					description: 'The metafields to add to the order.',
					items: {
						type: 'object',
						description:
							'A metafield holding additional information about the resource.',
						properties: {
							namespace: {
								type: 'string',
								description:
									'The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 3,
								maximum: 255,
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 2,
								maximum: 64,
							},
							type: {
								type: 'string',
								description:
									'The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							value: {
								type: 'string',
								description:
									'The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.',
							},
							id: {
								type: 'string',
								description:
									'The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.',
							},
						},
						required: [],
					},
				},
				buyerAcceptsMarketing: {
					type: 'boolean',
					description:
						'Whether the customer consented to receive email updates from the shop.',
				},
				processedAt: {
					type: 'string',
					description:
						'The date and time when the order was processed. This is the date shown on the order and used in analytics reports. Set it to a past date when importing historical orders. On API version 2026-04, a future value returns a `PROCESSED_AT_INVALID` error.',
				},
				closedAt: {
					type: 'string',
					description: 'The date and time when the order was closed.',
				},
				referringSite: {
					type: 'string',
					description: 'The website where the customer clicked a link to the shop.',
				},
				sourceName: {
					type: 'string',
					description:
						'The source channel the order is attributed to. Use the handle of an order attribution definition configured for your sales channel app, such as `youtube`.',
				},
				sourceIdentifier: {
					type: 'string',
					description:
						'The ID of the order on the originating platform. This is not the Shopify ID.',
				},
				sourceUrl: {
					type: 'string',
					description:
						'A valid URL to the original order on the originating surface, shown to merchants on the order details page. Invalid URLs are not displayed.',
				},
				userId: {
					type: 'string',
					description:
						'The global ID of the staff member who processed the order, such as `gid://shopify/StaffMember/123`.',
				},
				test: {
					type: 'boolean',
					description: 'Whether this is a test order. Defaults to `false`.',
				},
				options: {
					type: 'object',
					description:
						'The inventory and notification behavior applied while creating the order.',
					properties: {
						inventoryBehaviour: {
							type: 'string',
							description:
								'How inventory is claimed. `BYPASS` does not claim inventory and is the default.',
							default: '',
							enum: [
								'',
								'BYPASS',
								'DECREMENT_IGNORING_POLICY',
								'DECREMENT_OBEYING_POLICY',
							],
						},
						sendReceipt: {
							type: 'boolean',
							description:
								'Whether to send an order confirmation to the customer. Defaults to `false`.',
						},
						sendFulfillmentReceipt: {
							type: 'boolean',
							description:
								'Whether to send a shipping confirmation to the customer. Defaults to `false`.',
						},
					},
					required: [],
				},
			},
			required: ['lineItems'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				order: {
					type: 'object',
					description:
						'The created order. Call the Get an order endpoint with this ID for the full order details.',
					properties: {
						id: { type: 'string', description: 'The global ID of the created order.' },
						legacyResourceId: {
							type: 'string',
							description: 'The REST API ID of the created order.',
						},
						name: {
							type: 'string',
							description:
								'The unique identifier that appears on the order, such as `#1001`.',
						},
						createdAt: {
							type: 'string',
							description: 'The date and time when the order was created.',
						},
						updatedAt: {
							type: 'string',
							description: 'The date and time when the order was last modified.',
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'createArticle',
		label: 'Create an article',
		description: 'Creates a blog article with the given title, author, body, and image.',
		context:
			"---\nname: createArticle\ndescription: Creates a blog article with the given title, author, body, and image.\n---\n\nWraps the `articleCreate` mutation of the Shopify GraphQL Admin API. Every input field is part of\n`ArticleCreateInput`.\n\n## Required fields\n\n`ArticleCreateInput` marks only **Title** and **Author** as non-null. **Author** is an object: set either **Name**\nor **User ID**, never both — Shopify rejects the input when both are present.\n\n**Blog ID** is technically optional in the schema, but an article belongs on a blog; omit it only if you know the\nshop's default behavior. Get the ID from the **Search blogs** endpoint, which returns it as `id`.\n\n## Publishing\n\n**Is published** controls visibility now; **Publish date** schedules it for a future date and time. Setting a past\ndate publishes immediately.\n\n## Image\n\nOnly URL-based images are supported — set **Image** → **URL** to an externally reachable URL. Binary upload is not\navailable through endpoints.\n\n## Output\n\nThe mutation returns the new article plus `userErrors`. A non-empty `userErrors` list fails the call with the\nShopify messages.\n",
		accounts: { shopify: { scope: ['write_content'] }, shopify4: { scope: ['write_content'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				author: {
					type: 'object',
					description:
						'The author of the article. Provide either **Name** or **User ID**, but never both.',
					properties: {
						name: {
							type: 'string',
							description: "The author's full name. Provide this or **User ID**.",
						},
						userId: {
							type: 'string',
							description:
								"The global ID of a staff member's account, such as `gid://shopify/StaffMember/123`. Provide this or **Name**.",
						},
					},
					required: [],
				},
				blogId: {
					type: 'string',
					description:
						'The global ID of the blog to create the article in, such as `gid://shopify/Blog/123`. The **Search blogs** endpoint returns it as `id`.',
				},
				body: {
					type: 'string',
					description: "The text of the article's body, complete with HTML markup.",
				},
				summary: {
					type: 'string',
					description:
						'A summary of the article, which can include HTML markup. Themes use it to display the article on listing pages such as the home page or the main blog page.',
				},
				handle: {
					type: 'string',
					description:
						"The unique, human-friendly string used in the article's URL. Generated from the title when omitted.",
				},
				isPublished: {
					type: 'boolean',
					description: 'Whether the article is visible in the online store.',
				},
				publishDate: {
					type: 'string',
					description: 'The date and time when the article should become visible.',
				},
				tags: {
					type: 'array',
					description:
						'The tags to attach to the article. Tags are short descriptors used for filtering and theme logic.',
					items: { type: 'string', description: 'A tag to attach to the article.' },
				},
				templateSuffix: {
					type: 'string',
					description:
						'The suffix of the template used to render the article page. The default article template is used when this is empty.',
				},
				image: {
					type: 'object',
					description:
						'The image associated with the article. Only URL-based sources are supported; binary uploads are not available through endpoints.',
					properties: {
						url: {
							type: 'string',
							description:
								'The URL of the image. Required when an image is provided.',
						},
						altText: {
							type: 'string',
							description:
								'A word or phrase describing the nature or contents of the image.',
						},
					},
					required: [],
				},
				metafields: {
					type: 'array',
					description: 'The metafields to associate with the article.',
					items: {
						type: 'object',
						description:
							'A metafield holding additional information about the resource.',
						properties: {
							namespace: {
								type: 'string',
								description:
									'The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 3,
								maximum: 255,
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 2,
								maximum: 64,
							},
							type: {
								type: 'string',
								description:
									'The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							value: {
								type: 'string',
								description:
									'The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.',
							},
							id: {
								type: 'string',
								description:
									'The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.',
							},
						},
						required: [],
					},
				},
			},
			required: ['title', 'author'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				article: {
					type: 'object',
					description:
						'The created article. Use the **Search articles** endpoint with `id:` for the full article details.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the created article.',
						},
						handle: {
							type: 'string',
							description:
								"The unique, human-friendly string used in the article's URL.",
						},
						isPublished: {
							type: 'boolean',
							description: 'Whether the article is visible in the online store.',
						},
						publishedAt: {
							type: 'string',
							description: 'The date and time when the article became visible.',
						},
						createdAt: {
							type: 'string',
							description: 'The date and time when the article was created.',
						},
						updatedAt: {
							type: 'string',
							description: 'The date and time when the article was last modified.',
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'createProduct',
		label: 'Create a product',
		description: 'Creates a product with the given attributes, options, and media.',
		context:
			'---\nname: createProduct\ndescription: Creates a product with the given attributes, options, and media.\n---\n\nWraps the `productCreate` mutation of the Shopify GraphQL Admin API. Every input field except **Media** is part of\n`ProductCreateInput`; **Media** maps to the separate `media` argument.\n\n## Variants\n\n`productCreate` does **not** create variants. It creates the product and its options, and Shopify generates a single\ndefault variant. To add real variants, define **Product options** here and then call the product variant endpoints, or\nthe `productVariantsBulkCreate` mutation through the Arbitrary call endpoint.\n\n## Options\n\nA product can have at most three options. Each option needs a **Name** and its **Values**; each value is an object with\na `name`, not a bare string.\n\n## Media\n\nOnly URL-based media is supported: set **Original source** to an external URL or a staged upload URL. Binary upload is\nnot available through endpoints, so a local file has to be hosted or staged first.\n\n## Output\n\nThe mutation returns the new product ID plus `userErrors`. A non-empty `userErrors` list fails the call with the\nShopify messages. Call `getProduct` with the returned ID when you need the full product.\n',
		accounts: {
			shopify: { scope: ['write_products'] },
			shopify4: { scope: ['write_products'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				descriptionHtml: {
					type: 'string',
					description:
						'The description of the product, including HTML tags such as `<b>` and `<i>`.',
				},
				productType: {
					type: 'string',
					description: 'The product type that the merchant defines.',
				},
				vendor: { type: 'string', description: "The name of the product's vendor." },
				status: {
					type: 'string',
					description:
						'The product status, which controls visibility across all sales channels.',
					default: '',
					enum: ['', 'ACTIVE', 'ARCHIVED', 'DRAFT'],
				},
				category: {
					type: 'string',
					description:
						'The global ID of the taxonomy category associated with the product, such as `gid://shopify/TaxonomyCategory/aa-1`. Look up category IDs in the [Shopify product taxonomy](https://shopify.github.io/product-taxonomy/).',
				},
				tags: {
					type: 'array',
					description:
						'The searchable keywords associated with the product. This **overwrites** any existing tags. Use the `tagsAdd` mutation through the Arbitrary call endpoint to add tags without replacing them.',
					items: {
						type: 'string',
						description: 'A searchable keyword associated with the product.',
					},
				},
				handle: {
					type: 'string',
					description:
						'The unique, human-readable string used to identify the product in URLs. It can contain letters, hyphens, and numbers, but no spaces. Generated from the title when omitted.',
				},
				seo: {
					type: 'object',
					description: 'The SEO title and description associated with the product.',
					properties: {
						description: {
							type: 'string',
							description: 'The SEO description of the product.',
						},
					},
					required: [],
				},
				templateSuffix: {
					type: 'string',
					description:
						'The theme template used when customers view the product in the store.',
				},
				giftCardTemplateSuffix: {
					type: 'string',
					description:
						'The theme template used when customers view a gift card in the store.',
				},
				collectionsToJoin: {
					type: 'array',
					description:
						'The global IDs of the collections to associate the product with, such as `gid://shopify/Collection/123`.',
					items: {
						type: 'string',
						description: 'The global ID of a collection to associate the product with.',
					},
				},
				requiresSellingPlan: {
					type: 'boolean',
					description:
						'Whether the product can only be purchased with a selling plan. Subscription-only products can be updated only for online stores, and setting this to `true` unpublishes the product from every channel except the online store.',
				},
				metafields: {
					type: 'array',
					description: 'The custom fields to associate with the product.',
					items: {
						type: 'object',
						description:
							'A metafield holding additional information about the resource.',
						properties: {
							namespace: {
								type: 'string',
								description:
									'The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 3,
								maximum: 255,
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 2,
								maximum: 64,
							},
							type: {
								type: 'string',
								description:
									'The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							value: {
								type: 'string',
								description:
									'The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.',
							},
							id: {
								type: 'string',
								description:
									'The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.',
							},
						},
						required: [],
					},
				},
				productOptions: {
					type: 'array',
					description:
						'The options of the product and their values, such as a `Size` option with `S`, `M`, and `L`. A product can have at most three options, with no limit on the number of values.',
					items: {
						type: 'object',
						description: 'An option of the product.',
						properties: {
							name: {
								type: 'string',
								description: 'The name of the option, such as `Size`.',
							},
							position: {
								type: 'number',
								description:
									'The position of the option in the list of options, starting at 1.',
							},
							values: {
								type: 'array',
								description: 'The values associated with the option.',
								items: {
									type: 'object',
									description: 'A value associated with the option.',
									properties: {
										name: {
											type: 'string',
											description:
												'The value associated with the option, such as `Small`.',
										},
										linkedMetafieldValue: {
											type: 'string',
											description:
												'The metafield value associated with the option. Use it only when the option is linked to a metafield.',
										},
									},
									required: [],
								},
							},
							linkedMetafield: {
								type: 'object',
								description: 'The metafield the option is linked to.',
								properties: {
									namespace: {
										type: 'string',
										description:
											'The namespace of the metafield the option is linked to.',
									},
									key: {
										type: 'string',
										description:
											'The key of the metafield the option is linked to.',
									},
									values: {
										type: 'array',
										description:
											'The metafield values associated with the option.',
										items: {
											type: 'string',
											description:
												'A metafield value associated with the option.',
										},
									},
								},
								required: [],
							},
						},
						required: [],
					},
					maxItems: 3,
				},
				media: {
					type: 'array',
					description:
						'The media to create for the product. Only URL-based sources are supported; binary uploads are not available through endpoints.',
					items: {
						type: 'object',
						description: 'A media object to create for the product.',
						properties: {
							mediaContentType: {
								type: 'string',
								description: 'The content type of the media.',
								enum: ['IMAGE', 'VIDEO', 'EXTERNAL_VIDEO', 'MODEL_3D'],
							},
							originalSource: {
								type: 'string',
								description:
									'The original source of the media object. Use an external URL or a staged upload URL.',
							},
							alt: {
								type: 'string',
								description: 'The alternative text describing the media.',
							},
						},
						required: ['mediaContentType', 'originalSource'],
					},
				},
				giftCard: { type: 'boolean', description: 'Whether the product is a gift card.' },
				combinedListingRole: {
					type: 'string',
					description: 'The role of the product in a combined listing.',
					default: '',
					enum: ['', 'PARENT', 'CHILD'],
				},
				claimOwnership: {
					type: 'object',
					description:
						'Enables the calling app to provide additional product features. Bundle ownership can only be claimed while creating the product.',
					properties: {
						bundles: {
							type: 'boolean',
							description:
								'Whether the calling app claims ownership of the bundles card on the product details page in the Shopify admin.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				product: {
					type: 'object',
					description:
						'The created product. Call the Get a product endpoint with this ID for the full product details.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the created product.',
						},
						legacyResourceId: {
							type: 'string',
							description: 'The REST API ID of the created product.',
						},
						handle: {
							type: 'string',
							description:
								'The unique, human-readable string used to identify the product in URLs.',
						},
						status: {
							type: 'string',
							description: 'The product status: `ACTIVE`, `ARCHIVED`, or `DRAFT`.',
						},
						createdAt: {
							type: 'string',
							description: 'The date and time when the product was created.',
						},
						updatedAt: {
							type: 'string',
							description: 'The date and time when the product was last modified.',
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'createProductVariants',
		label: 'Create product variants',
		description: 'Creates one or more product variants on a single product.',
		context:
			'---\nname: createProductVariants\ndescription: Creates one or more product variants on a single product.\n---\n\nWraps the `productVariantsBulkCreate` mutation of the Shopify GraphQL Admin API. The mutation is bulk by design:\n**Variants** is an array and every entry is created on the product given by **Product ID**. Pass a single-element\narray to create one variant.\n\n## Option values are required in practice\n\nA product variant is defined by its option values. For every option on the product, add one **Option values** entry\nthat names the option (**Option name** or **Option ID**) and the value (**Name** or **Option value ID**). If the\nproduct has no options yet, create them first with `createProduct` → **Product options**, or with\n`productOptionsCreate` through the Arbitrary call endpoint.\n\n## The standalone variant\n\nA product with no explicit variants still has one implicit "Default Title" variant. **Strategy** decides what\nhappens to it: the default behavior deletes it when it is the auto-generated default, keeps it when a merchant\ncustomized it. Set `REMOVE_STANDALONE_VARIANT` to always delete it.\n\n## Inventory\n\n**Inventory quantities** sets a starting quantity per location and works only on create. Afterwards use\n`updateProductVariants` → **Quantity adjustments**, or the inventory level endpoints.\n\n## Limits\n\nStores allow 2048 variants per product by default.\n\n## Output\n\nThe mutation returns the created variants, the product, and `userErrors`. A non-empty `userErrors` list fails the\ncall with the Shopify messages.\n',
		accounts: {
			shopify: { scope: ['write_products'] },
			shopify4: { scope: ['write_products'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				productId: {
					type: 'string',
					description:
						'The global ID of the product to create the variants on, such as `gid://shopify/Product/123`.',
				},
				variants: {
					type: 'array',
					description:
						'The product variants to create. All of them are created on the same product.',
					items: {
						type: 'object',
						description: 'A product variant to create.',
						properties: {
							inventoryQuantities: {
								type: 'array',
								description:
									'The starting inventory quantity of the variant at each location. Supported on create only; use **Quantity adjustments** or the inventory level endpoints afterwards.',
								items: {
									type: 'object',
									description: 'The inventory quantity at one location.',
									properties: {
										locationId: {
											type: 'string',
											description:
												'The global ID of the location, such as `gid://shopify/Location/123`.',
										},
										availableQuantity: {
											type: 'number',
											description:
												'The available quantity of the item at this location.',
										},
									},
									required: ['locationId', 'availableQuantity'],
								},
							},
							price: {
								type: 'number',
								description: "The price of the variant in the shop's currency.",
							},
							compareAtPrice: {
								type: 'number',
								description: 'The original price of the variant before a sale.',
							},
							barcode: {
								type: 'string',
								description:
									'The barcode associated with the variant, such as an ISBN, UPC, or GTIN.',
							},
							taxable: {
								type: 'boolean',
								description: 'Whether a tax is charged when the variant is sold.',
							},
							taxCode: {
								type: 'string',
								description:
									'The tax code associated with the variant. Available on Shopify Plus with Avalara AvaTax.',
							},
							inventoryPolicy: {
								type: 'string',
								description:
									"Whether customers can order the variant when it's out of stock. Defaults to `DENY`.",
								default: '',
								enum: ['', 'DENY', 'CONTINUE'],
							},
							optionValues: {
								type: 'array',
								description:
									'The option values that define this variant. Provide one entry per product option. Identify the option by **Option ID** or **Option name**, and the value by **Option value ID** or **Name**.',
								items: {
									type: 'object',
									description: 'One option value of the variant.',
									properties: {
										optionId: {
											type: 'string',
											description:
												'The global ID of the product option, such as `gid://shopify/ProductOption/123`. Provide this or **Option name**.',
										},
										optionName: {
											type: 'string',
											description:
												'The name of the product option, such as `Size`. Provide this or **Option ID**.',
										},
										id: {
											type: 'string',
											description:
												'The global ID of the product option value. Provide this or **Name**.',
										},
										name: {
											type: 'string',
											description:
												'The name of the product option value, such as `Small`. Provide this or **Option value ID**.',
										},
										linkedMetafieldValue: {
											type: 'string',
											description:
												'The metafield value associated with the option. Use it only when the option is linked to a metafield.',
										},
									},
									required: [],
								},
							},
							inventoryItem: {
								type: 'object',
								description:
									'The inventory item settings of the variant, such as its cost, weight, and customs information.',
								properties: {
									sku: {
										type: 'string',
										description:
											'The stock keeping unit of the inventory item.',
									},
									cost: {
										type: 'number',
										description:
											"The unit cost of the inventory item, in the shop's default currency.",
									},
									tracked: {
										type: 'boolean',
										description:
											'Whether inventory levels are tracked for the item.',
									},
									requiresShipping: {
										type: 'boolean',
										description:
											'Whether the item must be physically shipped. Digital goods and services usually do not.',
									},
									countryCodeOfOrigin: {
										type: 'string',
										description:
											'The two-letter ISO 3166-1 alpha-2 code of the country where the item was produced, such as `CZ`.',
									},
									provinceCodeOfOrigin: {
										type: 'string',
										description:
											'The two-letter ISO 3166-2 code of the province where the item was produced, such as `QC`.',
									},
									harmonizedSystemCode: {
										type: 'string',
										description:
											'The global harmonized system code of the item. Must be a number of 6 to 13 digits.',
									},
									countryHarmonizedSystemCodes: {
										type: 'array',
										description:
											'The country-specific harmonized system codes of the item.',
										items: {
											type: 'object',
											description:
												'A harmonized system code issued by a specific country.',
											properties: {
												harmonizedSystemCode: {
													type: 'string',
													description:
														'The country-specific harmonized system code.',
												},
												countryCode: {
													type: 'string',
													description:
														'The two-letter ISO 3166-1 alpha-2 code of the country that issued the code.',
												},
											},
											required: ['harmonizedSystemCode'],
										},
									},
									measurement: {
										type: 'object',
										description: 'The measurements of the inventory item.',
										properties: {
											shippingPackageId: {
												type: 'string',
												description:
													'The global ID of the shipping package associated with the inventory item.',
											},
											weight: {
												type: 'object',
												description: 'The weight of the inventory item.',
												properties: {
													unit: {
														type: 'string',
														description:
															'The unit of measurement for the weight value.',
														default: '',
														enum: [
															'',
															'GRAMS',
															'KILOGRAMS',
															'OUNCES',
															'POUNDS',
														],
													},
													value: {
														type: 'number',
														description:
															'The weight value in the selected unit.',
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
							unitPriceMeasurement: {
								type: 'object',
								description:
									'The measurement used to calculate a unit price for the variant, such as $9.99 per 100 ml.',
								properties: {
									quantityValue: {
										type: 'number',
										description:
											'The quantity value of the measurement, such as `100` in "100 ml".',
									},
									quantityUnit: {
										type: 'string',
										description:
											'The quantity unit of the measurement. See [UnitPriceMeasurementMeasuredUnit](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/UnitPriceMeasurementMeasuredUnit).',
										default: '',
										enum: [
											'',
											'CL',
											'CM',
											'FLOZ',
											'FT',
											'FT2',
											'G',
											'GAL',
											'IN',
											'ITEM',
											'KG',
											'L',
											'LB',
											'M',
											'M2',
											'M3',
											'MG',
											'ML',
											'MM',
											'OZ',
											'PT',
											'QT',
											'YD',
										],
									},
									referenceValue: {
										type: 'number',
										description:
											'The reference value of the measurement, such as `1` in "per 1 l".',
									},
									referenceUnit: {
										type: 'string',
										description: 'The reference unit of the measurement.',
										default: '',
										enum: [
											'',
											'CL',
											'CM',
											'FLOZ',
											'FT',
											'FT2',
											'G',
											'GAL',
											'IN',
											'ITEM',
											'KG',
											'L',
											'LB',
											'M',
											'M2',
											'M3',
											'MG',
											'ML',
											'MM',
											'OZ',
											'PT',
											'QT',
											'YD',
										],
									},
								},
								required: [],
							},
							showUnitPrice: {
								type: 'boolean',
								description: 'Whether the unit price is shown for this variant.',
							},
							requiresComponents: {
								type: 'boolean',
								description:
									'Whether the variant requires components. When `true`, it can only be purchased as a parent bundle and is omitted from channels that do not support bundles. Defaults to `false`.',
							},
							mediaId: {
								type: 'string',
								description:
									'The global ID of existing product media to associate with the variant.',
							},
							mediaSrc: {
								type: 'array',
								description: 'The URLs of media to associate with the variant.',
								items: {
									type: 'string',
									description:
										'The URL of a media object to associate with the variant.',
								},
							},
							metafields: {
								type: 'array',
								description: 'The metafields to associate with the variant.',
								items: {
									type: 'object',
									description:
										'A metafield holding additional information about the resource.',
									properties: {
										namespace: {
											type: 'string',
											description:
												'The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.',
											minimum: 3,
											maximum: 255,
										},
										key: {
											type: 'string',
											description:
												'The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.',
											minimum: 2,
											maximum: 64,
										},
										type: {
											type: 'string',
											description:
												'The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
										},
										value: {
											type: 'string',
											description:
												'The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.',
										},
										id: {
											type: 'string',
											description:
												'The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				media: {
					type: 'array',
					description:
						'New media to add to the product. Only URL-based sources are supported; binary uploads are not available through endpoints.',
					items: {
						type: 'object',
						description: 'A media object to add to the product.',
						properties: {
							mediaContentType: {
								type: 'string',
								description: 'The content type of the media.',
								enum: ['IMAGE', 'VIDEO', 'EXTERNAL_VIDEO', 'MODEL_3D'],
							},
							originalSource: {
								type: 'string',
								description:
									'The original source of the media object. Use an external URL or a staged upload URL.',
							},
							alt: {
								type: 'string',
								description: 'The alternative text describing the media.',
							},
						},
						required: ['mediaContentType', 'originalSource'],
					},
				},
				strategy: {
					type: 'string',
					description:
						'How to treat an existing standalone variant when the product has only one. `DEFAULT` deletes a standalone "Default Title" variant but keeps a custom one; `REMOVE_STANDALONE_VARIANT` deletes either; `PRESERVE_STANDALONE_VARIANT` keeps either. Defaults to `DEFAULT`.',
					default: '',
					enum: [
						'',
						'DEFAULT',
						'PRESERVE_STANDALONE_VARIANT',
						'REMOVE_STANDALONE_VARIANT',
					],
				},
			},
			required: ['productId', 'variants'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				productVariants: {
					type: 'array',
					description:
						'The created product variants. This is a list field, so it has no `nodes` wrapper.',
					items: {
						type: 'object',
						description: 'A created product variant.',
						properties: {
							id: {
								type: 'string',
								description: 'The global ID of the product variant.',
							},
							legacyResourceId: {
								type: 'string',
								description: 'The REST API ID of the product variant.',
							},
							sku: {
								type: 'string',
								description: 'The stock keeping unit of the product variant.',
							},
							price: {
								type: 'string',
								description:
									"The price of the variant in the shop's currency, serialized as a decimal string.",
							},
							createdAt: {
								type: 'string',
								description:
									'The date and time when the product variant was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the product variant was last modified.',
							},
						},
						required: [],
					},
				},
				product: {
					type: 'object',
					description: 'The product the variants belong to.',
					properties: {
						id: { type: 'string', description: 'The global ID of the product.' },
						updatedAt: {
							type: 'string',
							description: 'The date and time when the product was last modified.',
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'getACustomer',
		label: 'Get a customer',
		description: 'Returns a single customer by their ID.',
		context:
			"---\nname: getACustomer\ndescription: Returns a single customer by their ID.\n---\n\nWraps the `customer` query of the Shopify GraphQL Admin API.\n\n**Customer ID** must be a global ID (`gid://shopify/Customer/123`), not the legacy numeric ID and not the email.\nTo look a customer up by email, use `searchCustomers` with `email:someone@example.com`.\n\n## Addresses\n\nAll mailing addresses are returned under `addressesV2.nodes`, selected through the `addressesV2` connection because the\n`addresses` field is deprecated in the Shopify API. The default address is returned separately as `defaultAddress`.\n\n## Scopes\n\nThe order-related fields (`lastOrder`, `numberOfOrders`, `amountSpent`) are why this endpoint requires the order\nscopes in addition to `read_customers`. Customer data is subject to Shopify's\n[protected customer data](https://shopify.dev/docs/apps/launch/protected-customer-data) requirements.\n\n## Related endpoints\n\n- `searchCustomers` finds customer IDs by search query.\n- `updateACustomer` changes the customer attributes. Read the current values here first — **Tags** is overwritten.\n",
		accounts: {
			shopify: { scope: ['read_customers', 'read_orders', 'read_all_orders'] },
			shopify4: { scope: ['read_customers', 'read_orders', 'read_all_orders'] },
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the customer to retrieve, such as `gid://shopify/Customer/123`. The **Search customers** endpoint returns this value as `id`.',
				},
				nAddresses: {
					type: 'number',
					description:
						'The maximum number of mailing addresses to include for each customer. Defaults to 250 when omitted.',
					default: 250,
					minimum: 1,
					maximum: 250,
				},
				metafields: {
					type: 'boolean',
					description: 'Whether to include the metafields of each customer.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nMetafields: {
								type: 'number',
								description:
									'The maximum number of metafields to include for each customer.',
								default: 20,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the customer, such as `gid://shopify/Customer/123`.',
				},
				legacyResourceId: {
					type: 'string',
					description: 'The REST API ID of the customer.',
				},
				firstName: { type: 'string', description: 'The first name of the customer.' },
				lastName: { type: 'string', description: 'The last name of the customer.' },
				displayName: {
					type: 'string',
					description:
						'The full name of the customer, based on the first and last names.',
				},
				verifiedEmail: {
					type: 'boolean',
					description: 'Whether the customer has verified their email address.',
				},
				state: {
					type: 'string',
					description:
						'The state of the customer account with the shop, such as `ENABLED`, `DISABLED`, `INVITED`, or `DECLINED`.',
				},
				taxExempt: {
					type: 'boolean',
					description:
						'Whether the customer is exempt from paying taxes on their orders.',
				},
				lifetimeDuration: {
					type: 'string',
					description:
						'How long the customer has been a customer, in a human-readable form such as `2 years`.',
				},
				locale: {
					type: 'string',
					description: 'The locale of the customer, such as `en`.',
				},
				tags: {
					type: 'array',
					description: 'The tags attached to the customer.',
					items: { type: 'string', description: 'A tag attached to the customer.' },
				},
				note: { type: 'string', description: 'The note associated with the customer.' },
				numberOfOrders: {
					type: 'string',
					description:
						'The number of orders the customer has placed, returned as a string.',
				},
				createdAt: {
					type: 'string',
					description: 'The date and time when the customer was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the customer was last modified.',
				},
				defaultEmailAddress: {
					type: 'object',
					description:
						'The default email address of the customer and its marketing state.',
					properties: {
						emailAddress: {
							type: 'string',
							description: 'The email address of the customer.',
						},
						marketingOptInLevel: {
							type: 'string',
							description:
								'The opt-in level used when the customer consented to email marketing.',
						},
						marketingState: {
							type: 'string',
							description: 'The current email marketing state of the customer.',
						},
						validFormat: {
							type: 'boolean',
							description: 'Whether the email address is formatted correctly.',
						},
					},
					required: [],
				},
				defaultPhoneNumber: {
					type: 'object',
					description:
						'The default phone number of the customer and its marketing state.',
					properties: {
						phoneNumber: {
							type: 'string',
							description: 'The phone number of the customer, in E.164 format.',
						},
						marketingOptInLevel: {
							type: 'string',
							description:
								'The opt-in level used when the customer consented to SMS marketing.',
						},
						marketingState: {
							type: 'string',
							description: 'The current SMS marketing state of the customer.',
						},
					},
					required: [],
				},
				defaultAddress: {
					type: 'object',
					description: 'The default mailing address of the customer.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the mailing address.',
						},
						name: {
							type: 'string',
							description: 'The full name of the person at this address.',
						},
						firstName: {
							type: 'string',
							description: 'The first name of the person at this address.',
						},
						lastName: {
							type: 'string',
							description: 'The last name of the person at this address.',
						},
						phone: {
							type: 'string',
							description: 'The phone number at this address, in E.164 format.',
						},
						company: {
							type: 'string',
							description: 'The company or organization at this address.',
						},
						address1: {
							type: 'string',
							description:
								'The first line of the address, typically the street address or PO box number.',
						},
						address2: {
							type: 'string',
							description:
								'The second line of the address, typically the apartment, suite, or unit number.',
						},
						city: {
							type: 'string',
							description: 'The name of the city, district, village, or town.',
						},
						province: {
							type: 'string',
							description:
								'The name of the region, such as the province, state, or district.',
						},
						provinceCode: {
							type: 'string',
							description:
								'The code for the region, such as `QC` for Quebec, Canada.',
						},
						country: { type: 'string', description: 'The name of the country.' },
						countryCodeV2: {
							type: 'string',
							description:
								'The two-letter country code of the address, such as `CZ` for Czechia.',
						},
						zip: {
							type: 'string',
							description: 'The zip or postal code of the address.',
						},
					},
					required: [],
				},
				addressesV2: {
					type: 'object',
					description: 'The mailing addresses of the customer.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of mailing addresses.',
							items: {
								type: 'object',
								description: 'A mailing address of the customer.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the mailing address.',
									},
									name: {
										type: 'string',
										description: 'The full name of the person at this address.',
									},
									firstName: {
										type: 'string',
										description:
											'The first name of the person at this address.',
									},
									lastName: {
										type: 'string',
										description: 'The last name of the person at this address.',
									},
									phone: {
										type: 'string',
										description:
											'The phone number at this address, in E.164 format.',
									},
									company: {
										type: 'string',
										description: 'The company or organization at this address.',
									},
									address1: {
										type: 'string',
										description:
											'The first line of the address, typically the street address or PO box number.',
									},
									address2: {
										type: 'string',
										description:
											'The second line of the address, typically the apartment, suite, or unit number.',
									},
									city: {
										type: 'string',
										description:
											'The name of the city, district, village, or town.',
									},
									province: {
										type: 'string',
										description:
											'The name of the region, such as the province, state, or district.',
									},
									provinceCode: {
										type: 'string',
										description:
											'The code for the region, such as `QC` for Quebec, Canada.',
									},
									country: {
										type: 'string',
										description: 'The name of the country.',
									},
									countryCodeV2: {
										type: 'string',
										description:
											'The two-letter country code of the address, such as `CZ` for Czechia.',
									},
									zip: {
										type: 'string',
										description: 'The zip or postal code of the address.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				lastOrder: {
					type: 'object',
					description: 'The most recent order the customer placed.',
					properties: {
						id: {
							type: 'string',
							description:
								'The global ID of the order. Pass it to the Get an order endpoint for details.',
						},
						name: {
							type: 'string',
							description:
								'The unique identifier that appears on the order, such as `#1001`.',
						},
					},
					required: [],
				},
				amountSpent: {
					type: 'object',
					description: 'The total amount the customer has spent across all orders.',
					properties: {
						amount: {
							type: 'string',
							description: 'The decimal monetary amount, serialized as a string.',
						},
						currencyCode: {
							type: 'string',
							description: 'The three-letter currency code in ISO 4217 format.',
						},
					},
					required: [],
				},
				statistics: {
					type: 'object',
					description: 'The Shopify-computed segmentation statistics of the customer.',
					properties: {
						predictedSpendTier: {
							type: 'string',
							description:
								'The predicted spend tier of the customer, such as `HIGH`, `MEDIUM`, or `LOW`.',
						},
						rfmGroup: {
							type: 'string',
							description:
								'The recency, frequency, and monetary group the customer belongs to, such as `LOYAL` or `AT_RISK`.',
						},
					},
					required: [],
				},
				metafields: {
					type: 'object',
					description:
						'The metafields of the customer. Returned only when **Output customer metafields** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of metafields.',
							items: {
								type: 'object',
								description:
									'A metafield holding additional information about the resource.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the metafield.',
									},
									namespace: {
										type: 'string',
										description: 'The container the metafield belongs to.',
									},
									legacyResourceId: {
										type: 'string',
										description: 'The REST API ID of the metafield.',
									},
									key: {
										type: 'string',
										description:
											'The unique identifier of the metafield within its namespace.',
									},
									value: {
										type: 'string',
										description:
											'The data stored in the metafield, always returned as a string.',
									},
									jsonValue: {
										description:
											'The data stored in the metafield, parsed into its JSON representation.',
									},
									type: {
										type: 'string',
										description:
											'The metafield type, such as `single_line_text_field`. See the [supported metafield types](https://shopify.dev/docs/api/admin-graphql/2026-04/../../apps/build/custom-data/metafields/list-of-data-types).',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'getAnOrder',
		label: 'Get an order',
		description: 'Returns a single order by its ID.',
		context:
			'---\nname: getAnOrder\ndescription: Returns a single order by its ID.\n---\n\nWraps the `order` query of the Shopify GraphQL Admin API.\n\n**Order ID** must be a global ID (`gid://shopify/Order/123`), not the legacy numeric ID and not the order name\n(`#1001`). The Search orders endpoint returns the global ID as `id` and the numeric one as `legacyResourceId`.\n\n## Query cost\n\nThe Shopify GraphQL Admin API meters requests by [calculated query cost](https://shopify.dev/docs/api/usage/rate-limits).\nThe default limits on the **Output …** toggles are tuned to stay inside a 100-point bucket for a single order. Raising\nseveral of them at once — in particular **Output product variants**, which adds a variant list per line item — can\nexceed the bucket and return a `THROTTLED` error.\n\n## Related endpoints\n\n- `searchOrders` finds order IDs by search query.\n- The fulfillment order IDs returned here are the input of the Get a fulfillment order endpoint.\n',
		accounts: {
			shopify: {
				scope: [
					'read_all_orders',
					'read_orders',
					'read_customers',
					'read_products',
					'read_merchant_managed_fulfillment_orders',
					'read_third_party_fulfillment_orders',
					'read_locations',
					'read_inventory',
				],
			},
			shopify4: {
				scope: [
					'read_all_orders',
					'read_orders',
					'read_customers',
					'read_products',
					'read_merchant_managed_fulfillment_orders',
					'read_third_party_fulfillment_orders',
					'read_locations',
					'read_inventory',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the order to retrieve, such as `gid://shopify/Order/123`. The Search orders endpoint returns this value as `id`.',
				},
				lineItems: {
					type: 'boolean',
					description:
						'Whether to include the line items of each order. Increases the query cost.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nLineItems: {
								type: 'number',
								description:
									'The maximum number of line items to include in each order.',
								default: 50,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				variants: {
					type: 'boolean',
					description:
						'Whether to include the product variants of each line item. Requires **Output line items** and increases the query cost significantly.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nVariants: {
								type: 'number',
								description:
									'The maximum number of product variants to include in each line item.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				customer: {
					type: 'boolean',
					description:
						'Whether to include the customer details of each order. The shipping and billing addresses are returned regardless of this setting.',
					default: true,
				},
				shippingLines: {
					type: 'boolean',
					description: 'Whether to include the shipping lines of each order.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nShippingLines: {
								type: 'number',
								description:
									'The maximum number of shipping lines to include in each order.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				metafields: {
					type: 'boolean',
					description: 'Whether to include the metafields of each order.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nMetafields: {
								type: 'number',
								description:
									'The maximum number of metafields to include in each order.',
								default: 20,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				fulfillmentOrders: {
					type: 'boolean',
					description:
						'Whether to include the fulfillment order IDs and the fulfillment count of the order.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nFulfillmentOrders: {
								type: 'number',
								description:
									'The maximum number of fulfillment order IDs to include in the order.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The global ID of the order, such as `gid://shopify/Order/123`.',
				},
				legacyResourceId: { type: 'string', description: 'The REST API ID of the order.' },
				name: {
					type: 'string',
					description:
						'The unique identifier of the order that appears on the order, such as `#1001`.',
				},
				email: {
					type: 'string',
					description: 'The email address associated with the order.',
				},
				phone: {
					type: 'string',
					description: 'The phone number associated with the order, in E.164 format.',
				},
				poNumber: {
					type: 'string',
					description: 'The purchase order number associated with the order.',
				},
				displayFinancialStatus: {
					type: 'string',
					description:
						'The financial status of the order, such as `PAID`. See [OrderDisplayFinancialStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/OrderDisplayFinancialStatus).',
				},
				displayFulfillmentStatus: {
					type: 'string',
					description:
						'The fulfillment status of the order, such as `UNFULFILLED`. See [OrderDisplayFulfillmentStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/OrderDisplayFulfillmentStatus).',
				},
				confirmed: {
					type: 'boolean',
					description: 'Whether inventory has been reserved for the order.',
				},
				confirmationNumber: {
					type: 'string',
					description:
						'The randomly generated code shown to the customer to confirm the order.',
				},
				tags: {
					type: 'array',
					description: 'The tags attached to the order.',
					items: { type: 'string', description: 'A tag attached to the order.' },
				},
				statusPageUrl: {
					type: 'string',
					description: 'The URL of the order status page for the customer.',
				},
				note: { type: 'string', description: 'The note associated with the order.' },
				createdAt: {
					type: 'string',
					description: 'The date and time when the order was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the order was last modified.',
				},
				billingAddressMatchesShippingAddress: {
					type: 'boolean',
					description: 'Whether the billing address matches the shipping address.',
				},
				fullyPaid: {
					type: 'boolean',
					description: 'Whether the order has been paid in full.',
				},
				totalPriceSet: {
					type: 'object',
					description:
						'The total price of the order, including taxes, shipping, and discounts.',
					properties: {
						presentmentMoney: {
							type: 'object',
							description: "The amount in the customer's presentment currency.",
							properties: {
								amount: {
									type: 'string',
									description:
										'The decimal monetary amount, serialized as a string.',
								},
								currencyCode: {
									type: 'string',
									description:
										'The three-letter currency code in ISO 4217 format, such as `USD`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				shippingAddress: {
					type: 'object',
					description: 'The mailing address the order is shipped to.',
					properties: {
						name: {
							type: 'string',
							description: 'The full name of the person at this address.',
						},
						firstName: {
							type: 'string',
							description: 'The first name of the person at this address.',
						},
						lastName: {
							type: 'string',
							description: 'The last name of the person at this address.',
						},
						phone: {
							type: 'string',
							description: 'The phone number at this address, in E.164 format.',
						},
						company: {
							type: 'string',
							description: 'The company or organization at this address.',
						},
						address1: {
							type: 'string',
							description:
								'The first line of the address, typically the street address or PO box number.',
						},
						address2: {
							type: 'string',
							description:
								'The second line of the address, typically the apartment, suite, or unit number.',
						},
						city: {
							type: 'string',
							description: 'The name of the city, district, village, or town.',
						},
						province: {
							type: 'string',
							description:
								'The name of the region, such as the province, state, or district.',
						},
						provinceCode: {
							type: 'string',
							description:
								'The code for the region, such as `QC` for Quebec, Canada.',
						},
						country: { type: 'string', description: 'The name of the country.' },
						countryCodeV2: {
							type: 'string',
							description:
								'The two-letter country code of the address, such as `CZ` for Czechia.',
						},
						zip: {
							type: 'string',
							description: 'The zip or postal code of the address.',
						},
					},
					required: [],
				},
				billingAddress: {
					type: 'object',
					description: 'The mailing address associated with the payment method.',
					properties: {
						name: {
							type: 'string',
							description: 'The full name of the person at this address.',
						},
						firstName: {
							type: 'string',
							description: 'The first name of the person at this address.',
						},
						lastName: {
							type: 'string',
							description: 'The last name of the person at this address.',
						},
						phone: {
							type: 'string',
							description: 'The phone number at this address, in E.164 format.',
						},
						company: {
							type: 'string',
							description: 'The company or organization at this address.',
						},
						address1: {
							type: 'string',
							description:
								'The first line of the address, typically the street address or PO box number.',
						},
						address2: {
							type: 'string',
							description:
								'The second line of the address, typically the apartment, suite, or unit number.',
						},
						city: {
							type: 'string',
							description: 'The name of the city, district, village, or town.',
						},
						province: {
							type: 'string',
							description:
								'The name of the region, such as the province, state, or district.',
						},
						provinceCode: {
							type: 'string',
							description:
								'The code for the region, such as `QC` for Quebec, Canada.',
						},
						country: { type: 'string', description: 'The name of the country.' },
						countryCodeV2: {
							type: 'string',
							description:
								'The two-letter country code of the address, such as `CZ` for Czechia.',
						},
						zip: {
							type: 'string',
							description: 'The zip or postal code of the address.',
						},
					},
					required: [],
				},
				customer: {
					type: 'object',
					description:
						'The customer associated with the order. Returned only when **Output customer details** is enabled.',
					properties: {
						id: { type: 'string', description: 'The global ID of the customer.' },
						legacyResourceId: {
							type: 'string',
							description: 'The REST API ID of the customer.',
						},
						firstName: {
							type: 'string',
							description: 'The first name of the customer.',
						},
						lastName: { type: 'string', description: 'The last name of the customer.' },
						displayName: {
							type: 'string',
							description:
								'The full name of the customer, based on the first and last names.',
						},
						verifiedEmail: {
							type: 'boolean',
							description: 'Whether the customer has verified their email address.',
						},
						note: {
							type: 'string',
							description: 'The note associated with the customer.',
						},
						tags: {
							type: 'array',
							description: 'The tags attached to the customer.',
							items: {
								type: 'string',
								description: 'A tag attached to the customer.',
							},
						},
						numberOfOrders: {
							type: 'string',
							description:
								'The number of orders the customer has placed, returned as a string.',
						},
						defaultEmailAddress: {
							type: 'object',
							description:
								'The default email address of the customer and its marketing state.',
							properties: {
								emailAddress: {
									type: 'string',
									description: 'The email address of the customer.',
								},
								marketingOptInLevel: {
									type: 'string',
									description:
										'The marketing subscription opt-in level used when the customer consented to receive marketing material by email.',
								},
								marketingState: {
									type: 'string',
									description:
										'The current email marketing state of the customer.',
								},
								validFormat: {
									type: 'boolean',
									description:
										'Whether the email address is formatted correctly.',
								},
							},
							required: [],
						},
						defaultPhoneNumber: {
							type: 'object',
							description:
								'The default phone number of the customer and its marketing state.',
							properties: {
								phoneNumber: {
									type: 'string',
									description:
										'The phone number of the customer, in E.164 format.',
								},
								marketingOptInLevel: {
									type: 'string',
									description:
										'The marketing subscription opt-in level used when the customer consented to receive marketing material by SMS.',
								},
								marketingState: {
									type: 'string',
									description: 'The current SMS marketing state of the customer.',
								},
							},
							required: [],
						},
						defaultAddress: {
							type: 'object',
							description: 'The default mailing address of the customer.',
							properties: {
								name: {
									type: 'string',
									description: 'The full name of the person at this address.',
								},
								firstName: {
									type: 'string',
									description: 'The first name of the person at this address.',
								},
								lastName: {
									type: 'string',
									description: 'The last name of the person at this address.',
								},
								phone: {
									type: 'string',
									description:
										'The phone number at this address, in E.164 format.',
								},
								company: {
									type: 'string',
									description: 'The company or organization at this address.',
								},
								address1: {
									type: 'string',
									description:
										'The first line of the address, typically the street address or PO box number.',
								},
								address2: {
									type: 'string',
									description:
										'The second line of the address, typically the apartment, suite, or unit number.',
								},
								city: {
									type: 'string',
									description:
										'The name of the city, district, village, or town.',
								},
								province: {
									type: 'string',
									description:
										'The name of the region, such as the province, state, or district.',
								},
								provinceCode: {
									type: 'string',
									description:
										'The code for the region, such as `QC` for Quebec, Canada.',
								},
								country: {
									type: 'string',
									description: 'The name of the country.',
								},
								countryCodeV2: {
									type: 'string',
									description:
										'The two-letter country code of the address, such as `CZ` for Czechia.',
								},
								zip: {
									type: 'string',
									description: 'The zip or postal code of the address.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				shippingLines: {
					type: 'object',
					description:
						'The shipping methods applied to the order. Returned only when **Output shipping lines** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of shipping lines.',
							items: {
								type: 'object',
								description: 'A shipping method applied to the order.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the shipping line.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				lineItems: {
					type: 'object',
					description:
						'The line items of the order. Returned only when **Output line items** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of line items.',
							items: {
								type: 'object',
								description: 'A line item of the order.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the line item.',
									},
									sku: {
										type: 'string',
										description:
											'The stock keeping unit of the line item variant.',
									},
									quantity: {
										type: 'number',
										description: 'The number of units ordered.',
									},
									originalUnitPriceSet: {
										type: 'object',
										description:
											'The unit price of the line item before discounts.',
										properties: {
											presentmentMoney: {
												type: 'object',
												description:
													"The amount in the customer's presentment currency.",
												properties: {
													amount: {
														type: 'string',
														description:
															'The decimal monetary amount, serialized as a string.',
													},
													currencyCode: {
														type: 'string',
														description:
															'The three-letter currency code in ISO 4217 format, such as `USD`.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									discountedUnitPriceSet: {
										type: 'object',
										description:
											'The unit price of the line item after line-level discounts.',
										properties: {
											presentmentMoney: {
												type: 'object',
												description:
													"The amount in the customer's presentment currency.",
												properties: {
													amount: {
														type: 'string',
														description:
															'The decimal monetary amount, serialized as a string.',
													},
													currencyCode: {
														type: 'string',
														description:
															'The three-letter currency code in ISO 4217 format, such as `USD`.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									discountedUnitPriceAfterAllDiscountsSet: {
										type: 'object',
										description:
											'The unit price of the line item after all line-level and order-level discounts.',
										properties: {
											presentmentMoney: {
												type: 'object',
												description:
													"The amount in the customer's presentment currency.",
												properties: {
													amount: {
														type: 'string',
														description:
															'The decimal monetary amount, serialized as a string.',
													},
													currencyCode: {
														type: 'string',
														description:
															'The three-letter currency code in ISO 4217 format, such as `USD`.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									variant: {
										type: 'object',
										description:
											'The product variant of the line item. Returned only when **Output product variants** is enabled.',
										properties: {
											id: {
												type: 'string',
												description:
													'The global ID of the product variant.',
											},
											legacyResourceId: {
												type: 'string',
												description:
													'The REST API ID of the product variant.',
											},
											displayName: {
												type: 'string',
												description:
													'The product title combined with the variant selected options.',
											},
											sku: {
												type: 'string',
												description:
													'The stock keeping unit of the product variant.',
											},
											taxable: {
												type: 'boolean',
												description:
													'Whether a tax is charged when the product variant is sold.',
											},
											availableForSale: {
												type: 'boolean',
												description:
													'Whether the product variant is available for sale.',
											},
											inventoryQuantity: {
												type: 'number',
												description:
													'The total sellable quantity of the product variant.',
											},
											barcode: {
												type: 'string',
												description:
													'The barcode of the product variant, such as an ISBN, UPC, or GTIN.',
											},
										},
										required: [],
									},
									product: {
										type: 'object',
										description: 'The product of the line item.',
										properties: {
											id: {
												type: 'string',
												description: 'The global ID of the product.',
											},
											legacyResourceId: {
												type: 'string',
												description: 'The REST API ID of the product.',
											},
											totalInventory: {
												type: 'number',
												description:
													'The quantity of inventory that is in stock across all locations.',
											},
											tracksInventory: {
												type: 'boolean',
												description:
													'Whether inventory tracking has been enabled for the product.',
											},
											variants: {
												type: 'object',
												description:
													'The variants of the product. Returned only when **Output product variants** is enabled.',
												properties: {
													nodes: {
														type: 'array',
														description:
															'The list of product variants.',
														items: {
															type: 'object',
															description:
																'A variant of the product.',
															properties: {
																id: {
																	type: 'string',
																	description:
																		'The global ID of the product variant.',
																},
																legacyResourceId: {
																	type: 'string',
																	description:
																		'The REST API ID of the product variant.',
																},
																displayName: {
																	type: 'string',
																	description:
																		'The product title combined with the variant selected options.',
																},
																sku: {
																	type: 'string',
																	description:
																		'The stock keeping unit of the product variant.',
																},
																taxable: {
																	type: 'boolean',
																	description:
																		'Whether a tax is charged when the product variant is sold.',
																},
																availableForSale: {
																	type: 'boolean',
																	description:
																		'Whether the product variant is available for sale.',
																},
																inventoryQuantity: {
																	type: 'number',
																	description:
																		'The total sellable quantity of the product variant.',
																},
																barcode: {
																	type: 'string',
																	description:
																		'The barcode of the product variant, such as an ISBN, UPC, or GTIN.',
																},
															},
															required: [],
														},
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
					},
					required: [],
				},
				metafields: {
					type: 'object',
					description:
						'The metafields of the order. Returned only when **Output order metafields** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of metafields.',
							items: {
								type: 'object',
								description:
									'A metafield holding additional information about the resource.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the metafield.',
									},
									namespace: {
										type: 'string',
										description: 'The container the metafield belongs to.',
									},
									legacyResourceId: {
										type: 'string',
										description: 'The REST API ID of the metafield.',
									},
									key: {
										type: 'string',
										description:
											'The unique identifier of the metafield within its namespace.',
									},
									value: {
										type: 'string',
										description:
											'The data stored in the metafield, always returned as a string.',
									},
									jsonValue: {
										description:
											'The data stored in the metafield, parsed into its JSON representation.',
									},
									type: {
										type: 'string',
										description:
											'The metafield type, such as `single_line_text_field`. See the [supported metafield types](https://shopify.dev/docs/api/admin-graphql/2026-04/../../apps/build/custom-data/metafields/list-of-data-types).',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				fulfillmentsCount: {
					type: 'object',
					description:
						'The number of fulfillments of the order. Returned only when **Output fulfillment order IDs** is enabled.',
					properties: {
						count: { type: 'number', description: 'The number of fulfillments.' },
						precision: {
							type: 'string',
							description:
								'Whether the count is exact or a lower bound, such as `EXACT` or `AT_LEAST`.',
						},
					},
					required: [],
				},
				fulfillmentOrders: {
					type: 'object',
					description:
						'The fulfillment orders of the order. Returned only when **Output fulfillment order IDs** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of fulfillment orders.',
							items: {
								type: 'object',
								description: 'A fulfillment order of the order.',
								properties: {
									id: {
										type: 'string',
										description:
											'The global ID of the fulfillment order. Pass it to the Get a fulfillment order endpoint for details.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'getFulfillments',
		label: 'Get a fulfillment order',
		description:
			'Returns a single fulfillment order by its ID, including its line items and fulfillments.',
		context:
			'---\nname: getFulfillments\ndescription: Returns a single fulfillment order by its ID, including its line items and fulfillments.\n---\n\nWraps the `fulfillmentOrder` query of the Shopify GraphQL Admin API. Despite the name, this returns **one\nfulfillment order** — the fulfillments it already has are one optional section of the output.\n\nShopify creates fulfillment orders automatically when an order is created; they cannot be created manually. One\norder can have several fulfillment orders, one per location expected to ship part of it.\n\n## Finding a fulfillment order ID\n\n- The **Get an order** endpoint returns them when **Output fulfillment order IDs** is enabled.\n- The **Search fulfillment orders** endpoint returns them as `id`.\n\n## Fulfilling it\n\n**Output line items** returns the fulfillment order line item IDs, which are exactly what the\n**Create a fulfillment** endpoint expects under **Line items by fulfillment order**. Check `supportedActions`\nfirst: `CREATE_FULFILLMENT` means you can fulfill directly, `REQUEST_FULFILLMENT` means the location is managed\nby a fulfillment service and a request has to be submitted instead.\n\n## Query cost\n\nThe Shopify GraphQL Admin API meters requests by [calculated query cost](https://shopify.dev/docs/api/usage/rate-limits).\n**Output inventory levels** is the expensive one — it adds an inventory level list per fulfillment location, nested\ninside the fulfillment list. Enabling it together with a high **Fulfillments limit** will exceed a 100-point bucket.\n\n## Deprecated field\n\nThe `channelId` field that the "Get a fulfillment order" module selects is deprecated on `FulfillmentOrder` and is\nnot returned here. Use `orderId`, `orderName`, and `orderProcessedAt` instead.\n',
		accounts: {
			shopify: {
				scope: [
					'read_all_orders',
					'read_orders',
					'read_merchant_managed_fulfillment_orders',
					'read_third_party_fulfillment_orders',
					'read_locations',
					'read_inventory',
					'read_products',
				],
			},
			shopify4: {
				scope: [
					'read_all_orders',
					'read_orders',
					'read_merchant_managed_fulfillment_orders',
					'read_third_party_fulfillment_orders',
					'read_locations',
					'read_inventory',
					'read_products',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the fulfillment order to retrieve, such as `gid://shopify/FulfillmentOrder/123`. The **Get an order** endpoint returns these IDs when **Output fulfillment order IDs** is enabled, and the **Search fulfillment orders** endpoint returns them as `id`.',
				},
				lineItems: {
					type: 'boolean',
					description:
						'Whether to include the line items of the fulfillment order. Their IDs are what the **Create a fulfillment** endpoint expects.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nLineItems: {
								type: 'number',
								description: 'The maximum number of line items to include.',
								default: 20,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				fulfillments: {
					type: 'boolean',
					description:
						'Whether to include the fulfillments already created for this fulfillment order, with their tracking information and location.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nFulfillments: {
								type: 'number',
								description: 'The maximum number of fulfillments to include.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				inventoryLevels: {
					type: 'boolean',
					description:
						'Whether to include the inventory levels of each fulfillment location. Requires **Output fulfillments** and increases the query cost significantly, so it is off by default.',
					default: false,
					'x-nested': {
						type: 'object',
						properties: {
							nInventoryLevels: {
								type: 'number',
								description:
									'The maximum number of inventory levels to include for each location.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				events: {
					type: 'boolean',
					description:
						'Whether to include the tracking events of each fulfillment. Requires **Output fulfillments**. Off by default to keep the query cost down.',
					default: false,
					'x-nested': {
						type: 'object',
						properties: {
							nEvents: {
								type: 'number',
								description:
									'The maximum number of events to include for each fulfillment.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the fulfillment order, such as `gid://shopify/FulfillmentOrder/123`.',
				},
				status: {
					type: 'string',
					description:
						'The status of the fulfillment order, such as `OPEN`, `IN_PROGRESS`, `SCHEDULED`, `ON_HOLD`, `INCOMPLETE`, `CANCELLED`, or `CLOSED`. See [FulfillmentOrderStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderStatus).',
				},
				requestStatus: {
					type: 'string',
					description:
						'The status of the fulfillment request sent to the fulfillment service, such as `UNSUBMITTED`, `SUBMITTED`, `ACCEPTED`, or `REJECTED`. See [FulfillmentOrderRequestStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderRequestStatus).',
				},
				supportedActions: {
					type: 'array',
					description:
						'The actions that can currently be performed on this fulfillment order. This is a list field, so it has no `nodes` wrapper.',
					items: {
						type: 'object',
						description:
							'One action the fulfillment order supports in its current state.',
						properties: {
							action: {
								type: 'string',
								description:
									'The action value, such as `CREATE_FULFILLMENT`, `REQUEST_FULFILLMENT`, `MOVE`, or `HOLD`. See [FulfillmentOrderAction](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderAction).',
							},
							externalUrl: {
								type: 'string',
								description:
									'The external URL used to start the fulfillment process outside Shopify. Present only when **Action** is `EXTERNAL`.',
							},
						},
						required: [],
					},
				},
				createdAt: {
					type: 'string',
					description: 'The date and time when the fulfillment order was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the fulfillment order was last updated.',
				},
				fulfillAt: {
					type: 'string',
					description:
						'The date and time at which the fulfillment order becomes fulfillable. Set on scheduled fulfillment orders.',
				},
				fulfillBy: {
					type: 'string',
					description:
						'The latest date and time by which all items in the fulfillment order need to be fulfilled.',
				},
				orderId: {
					type: 'string',
					description:
						'The global ID of the order the fulfillment order belongs to. Pass it to the **Get an order** endpoint for details.',
				},
				orderName: {
					type: 'string',
					description:
						'The unique identifier that appears on the order page in the Shopify admin, such as `#1001`.',
				},
				orderProcessedAt: {
					type: 'string',
					description:
						'The date and time when the order was processed. This may differ from when the order was created.',
				},
				remainingLineItemsWeight: {
					type: 'object',
					description:
						'The total weight of all line items in the fulfillment order that are not yet fulfilled.',
					properties: {
						unit: {
							type: 'string',
							description:
								'The unit of measurement: `GRAMS`, `KILOGRAMS`, `OUNCES`, or `POUNDS`.',
						},
						value: {
							type: 'number',
							description: 'The weight value in the given unit.',
						},
					},
					required: [],
				},
				internationalDuties: {
					type: 'object',
					description: 'The duties delivery method of the fulfillment order.',
					properties: {
						incoterm: {
							type: 'string',
							description: 'The method of duties payment, such as `DAP` or `DDP`.',
						},
					},
					required: [],
				},
				assignedLocation: {
					type: 'object',
					description:
						'The location where the fulfillment is expected to happen. These are snapshot values and may differ from the current location record.',
					properties: {
						address1: {
							type: 'string',
							description:
								'The first line of the address, typically the street address or PO box number.',
						},
						address2: {
							type: 'string',
							description:
								'The second line of the address, typically the apartment, suite, or unit number.',
						},
						city: {
							type: 'string',
							description: 'The name of the city, district, village, or town.',
						},
						province: {
							type: 'string',
							description:
								'The name of the region, such as the province, state, or district.',
						},
						countryCode: {
							type: 'string',
							description:
								'The two-letter country code of the address, such as `CZ` for Czechia.',
						},
						zip: {
							type: 'string',
							description: 'The zip or postal code of the address.',
						},
						name: { type: 'string', description: 'The name of the assigned location.' },
						phone: {
							type: 'string',
							description: 'The phone number of the assigned location.',
						},
						location: {
							type: 'object',
							description:
								'The location record behind the assignment. Absent when the location has been deleted.',
							properties: {
								id: {
									type: 'string',
									description: 'The global ID of the location.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				destination: {
					type: 'object',
					description: 'The destination where the items should be sent.',
					properties: {
						address1: {
							type: 'string',
							description:
								'The first line of the address, typically the street address or PO box number.',
						},
						address2: {
							type: 'string',
							description:
								'The second line of the address, typically the apartment, suite, or unit number.',
						},
						city: {
							type: 'string',
							description: 'The name of the city, district, village, or town.',
						},
						province: {
							type: 'string',
							description:
								'The name of the region, such as the province, state, or district.',
						},
						countryCode: {
							type: 'string',
							description:
								'The two-letter country code of the address, such as `CZ` for Czechia.',
						},
						zip: {
							type: 'string',
							description: 'The zip or postal code of the address.',
						},
						id: {
							type: 'string',
							description: 'The global ID of the fulfillment order destination.',
						},
						firstName: {
							type: 'string',
							description: 'The first name of the recipient.',
						},
						lastName: {
							type: 'string',
							description: 'The last name of the recipient.',
						},
						company: { type: 'string', description: 'The company of the recipient.' },
						email: {
							type: 'string',
							description: 'The email address of the recipient.',
						},
						phone: {
							type: 'string',
							description: 'The phone number of the recipient.',
						},
					},
					required: [],
				},
				deliveryMethod: {
					type: 'object',
					description: 'The delivery method of the fulfillment order.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the delivery method.',
						},
						methodType: {
							type: 'string',
							description:
								'The type of delivery method, such as `SHIPPING`, `LOCAL`, `PICK_UP`, `RETAIL`, or `NONE`.',
						},
						presentedName: {
							type: 'string',
							description:
								'The name of the delivery option as presented to the buyer.',
						},
						serviceCode: {
							type: 'string',
							description: 'The code of the delivery service provider.',
						},
						sourceReference: {
							type: 'string',
							description:
								'The reference to the shipping method on the source platform.',
						},
						minDeliveryDateTime: {
							type: 'string',
							description: 'The earliest date and time the delivery is expected.',
						},
						maxDeliveryDateTime: {
							type: 'string',
							description: 'The latest date and time the delivery is expected.',
						},
						additionalInformation: {
							type: 'object',
							description: 'Additional delivery instructions supplied by the buyer.',
							properties: {
								instructions: {
									type: 'string',
									description: 'The delivery instructions.',
								},
								phone: {
									type: 'string',
									description:
										'The phone number of the recipient for the delivery.',
								},
							},
							required: [],
						},
						brandedPromise: {
							type: 'object',
							description:
								'The branded delivery promise shown to the buyer, such as Shop Promise.',
							properties: {
								handle: {
									type: 'string',
									description:
										'The handle of the branded promise, such as `shop_promise`.',
								},
								name: {
									type: 'string',
									description: 'The human-readable name of the branded promise.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				lineItems: {
					type: 'object',
					description:
						'The line items of the fulfillment order. Returned only when **Output line items** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of fulfillment order line items.',
							items: {
								type: 'object',
								description: 'A line item of the fulfillment order.',
								properties: {
									id: {
										type: 'string',
										description:
											'The global ID of the fulfillment order line item. This is the ID the **Create a fulfillment** endpoint expects.',
									},
									inventoryItemId: {
										type: 'string',
										description:
											'The global ID of the inventory item of the line item.',
									},
									totalQuantity: {
										type: 'number',
										description:
											'The total number of units of the line item in the fulfillment order.',
									},
									remainingQuantity: {
										type: 'number',
										description:
											'The number of units that are still not fulfilled.',
									},
									productTitle: {
										type: 'string',
										description: 'The title of the product of the line item.',
									},
									variantTitle: {
										type: 'string',
										description:
											'The title of the product variant of the line item.',
									},
									sku: {
										type: 'string',
										description: 'The stock keeping unit of the line item.',
									},
									requiresShipping: {
										type: 'boolean',
										description:
											'Whether the line item must be physically shipped.',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				fulfillments: {
					type: 'object',
					description:
						'The fulfillments created for this fulfillment order. Returned only when **Output fulfillments** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of fulfillments.',
							items: {
								type: 'object',
								description: 'A fulfillment of the fulfillment order.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the fulfillment.',
									},
									legacyResourceId: {
										type: 'string',
										description: 'The REST API ID of the fulfillment.',
									},
									name: {
										type: 'string',
										description:
											'A human-readable identifier of the fulfillment, such as `#1001.1`.',
									},
									status: {
										type: 'string',
										description:
											'The status of the fulfillment, such as `SUCCESS`, `PENDING`, `OPEN`, `CANCELLED`, `ERROR`, or `FAILURE`.',
									},
									displayStatus: {
										type: 'string',
										description:
											'The human-readable delivery status shown to the merchant, such as `DELIVERED` or `IN_TRANSIT`.',
									},
									totalQuantity: {
										type: 'number',
										description:
											'The total number of units in the fulfillment.',
									},
									requiresShipping: {
										type: 'boolean',
										description:
											'Whether any of the line items require shipping.',
									},
									createdAt: {
										type: 'string',
										description:
											'The date and time when the fulfillment was created.',
									},
									estimatedDeliveryAt: {
										type: 'string',
										description: 'The estimated date and time of delivery.',
									},
									deliveredAt: {
										type: 'string',
										description:
											'The date and time when the fulfillment was delivered.',
									},
									inTransitAt: {
										type: 'string',
										description:
											'The date and time when the fulfillment went into transit.',
									},
									trackingInfo: {
										type: 'array',
										description:
											'The tracking information of the fulfillment. This is a list field, so it has no `nodes` wrapper.',
										items: {
											type: 'object',
											description: 'One tracking entry of the fulfillment.',
											properties: {
												company: {
													type: 'string',
													description:
														'The name of the tracking company.',
												},
												number: {
													type: 'string',
													description:
														'The tracking number of the fulfillment.',
												},
												url: {
													type: 'string',
													description:
														'The URL to track the fulfillment.',
												},
											},
											required: [],
										},
									},
									originAddress: {
										type: 'object',
										description: 'The address the fulfillment was sent from.',
										properties: {
											address1: {
												type: 'string',
												description:
													'The street address of the fulfillment location.',
											},
											address2: {
												type: 'string',
												description: 'The second line of the address.',
											},
											city: {
												type: 'string',
												description:
													'The city of the fulfillment location.',
											},
											provinceCode: {
												type: 'string',
												description:
													'The province of the fulfillment location.',
											},
											countryCode: {
												type: 'string',
												description:
													'The country of the fulfillment location.',
											},
											zip: {
												type: 'string',
												description:
													'The zip code of the fulfillment location.',
											},
										},
										required: [],
									},
									location: {
										type: 'object',
										description:
											'The location the fulfillment was processed at.',
										properties: {
											activatable: {
												type: 'boolean',
												description:
													'Whether the location can be reactivated.',
											},
											addressVerified: {
												type: 'boolean',
												description:
													'Whether the address of the location has been verified.',
											},
											createdAt: {
												type: 'string',
												description:
													'The date and time when the location was created.',
											},
											deactivatable: {
												type: 'boolean',
												description:
													'Whether the location can be deactivated.',
											},
											deactivatedAt: {
												type: 'string',
												description:
													'The date the location was deactivated, as a string. Empty when the location is active.',
											},
											deletable: {
												type: 'boolean',
												description: 'Whether the location can be deleted.',
											},
											fulfillsOnlineOrders: {
												type: 'boolean',
												description:
													'Whether the location is used for calculating delivery rates for online orders.',
											},
											isActive: {
												type: 'boolean',
												description: 'Whether the location is active.',
											},
											shipsInventory: {
												type: 'boolean',
												description:
													'Whether the location is the default one for shipping inventory.',
											},
											address: {
												type: 'object',
												description: 'The address of the location.',
												properties: {
													address1: {
														type: 'string',
														description:
															'The first line of the address, typically the street address or PO box number.',
													},
													address2: {
														type: 'string',
														description:
															'The second line of the address, typically the apartment, suite, or unit number.',
													},
													city: {
														type: 'string',
														description:
															'The name of the city, district, village, or town.',
													},
													province: {
														type: 'string',
														description:
															'The name of the region, such as the province, state, or district.',
													},
													countryCode: {
														type: 'string',
														description:
															'The two-letter country code of the address, such as `CZ` for Czechia.',
													},
													zip: {
														type: 'string',
														description:
															'The zip or postal code of the address.',
													},
													provinceCode: {
														type: 'string',
														description:
															'The code for the region of the address, such as `QC`.',
													},
													country: {
														type: 'string',
														description: 'The name of the country.',
													},
													phone: {
														type: 'string',
														description:
															'The phone number of the location.',
													},
													latitude: {
														type: 'number',
														description:
															'The latitude of the location.',
													},
													longitude: {
														type: 'number',
														description:
															'The longitude of the location.',
													},
												},
												required: [],
											},
											fulfillmentService: {
												type: 'object',
												description:
													'The fulfillment service that manages the location.',
												properties: {
													id: {
														type: 'string',
														description:
															'The global ID of the fulfillment service.',
													},
													handle: {
														type: 'string',
														description:
															'The handle of the fulfillment service. A handle other than `manual` indicates a third-party service.',
													},
													inventoryManagement: {
														type: 'boolean',
														description:
															'Whether the fulfillment service tracks product inventory and provides updates to Shopify.',
													},
												},
												required: [],
											},
											inventoryLevels: {
												type: 'object',
												description:
													'The inventory levels at the location. Returned only when **Output inventory levels** is enabled.',
												properties: {
													nodes: {
														type: 'array',
														description:
															'The list of inventory levels.',
														items: {
															type: 'object',
															description:
																'An inventory level of one inventory item at the location.',
															properties: {
																id: {
																	type: 'string',
																	description:
																		'The global ID of the inventory level.',
																},
																canDeactivate: {
																	type: 'boolean',
																	description:
																		'Whether the inventory item can be deactivated at this location.',
																},
																deactivationAlert: {
																	type: 'string',
																	description:
																		'The reason the inventory item cannot be deactivated at this location.',
																},
																createdAt: {
																	type: 'string',
																	description:
																		'The date and time when the inventory level was created.',
																},
																updatedAt: {
																	type: 'string',
																	description:
																		'The date and time when the inventory level was last modified.',
																},
																item: {
																	type: 'object',
																	description:
																		'The inventory item the level belongs to.',
																	properties: {
																		id: {
																			type: 'string',
																			description:
																				'The global ID of the inventory item.',
																		},
																		legacyResourceId: {
																			type: 'string',
																			description:
																				'The REST API ID of the inventory item.',
																		},
																		sku: {
																			type: 'string',
																			description:
																				'The stock keeping unit of the inventory item.',
																		},
																		tracked: {
																			type: 'boolean',
																			description:
																				'Whether inventory levels are tracked for the item.',
																		},
																		requiresShipping: {
																			type: 'boolean',
																			description:
																				'Whether the item must be physically shipped.',
																		},
																		countryCodeOfOrigin: {
																			type: 'string',
																			description:
																				'The two-letter code of the country where the item was produced.',
																		},
																		provinceCodeOfOrigin: {
																			type: 'string',
																			description:
																				'The two-letter code of the province where the item was produced.',
																		},
																		createdAt: {
																			type: 'string',
																			description:
																				'The date and time when the inventory item was created.',
																		},
																		updatedAt: {
																			type: 'string',
																			description:
																				'The date and time when the inventory item was last modified.',
																		},
																		measurement: {
																			type: 'object',
																			description:
																				'The measurements of the inventory item.',
																			properties: {
																				weight: {
																					type: 'object',
																					description:
																						'The weight of the inventory item.',
																					properties: {
																						unit: {
																							type: 'string',
																							description:
																								'The unit of measurement: `GRAMS`, `KILOGRAMS`, `OUNCES`, or `POUNDS`.',
																						},
																						value: {
																							type: 'number',
																							description:
																								'The weight value in the given unit.',
																						},
																					},
																					required: [],
																				},
																			},
																			required: [],
																		},
																		unitCost: {
																			type: 'object',
																			description:
																				"The unit cost of the inventory item, in the shop's default currency.",
																			properties: {
																				amount: {
																					type: 'string',
																					description:
																						'The decimal monetary amount, serialized as a string.',
																				},
																				currencyCode: {
																					type: 'string',
																					description:
																						'The three-letter currency code in ISO 4217 format.',
																				},
																			},
																			required: [],
																		},
																		variant: {
																			type: 'object',
																			description:
																				'The product variant the inventory item belongs to.',
																			properties: {
																				id: {
																					type: 'string',
																					description:
																						'The global ID of the product variant.',
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
												},
												required: [],
											},
										},
										required: [],
									},
									events: {
										type: 'object',
										description:
											'The tracking events of the fulfillment. Returned only when **Output fulfillment events** is enabled.',
										properties: {
											nodes: {
												type: 'array',
												description: 'The list of fulfillment events.',
												items: {
													type: 'object',
													description:
														'One tracking event of the fulfillment.',
													properties: {
														id: {
															type: 'string',
															description:
																'The global ID of the fulfillment event.',
														},
														status: {
															type: 'string',
															description:
																'The status the event records, such as `IN_TRANSIT` or `DELIVERED`.',
														},
														message: {
															type: 'string',
															description:
																'The message associated with the event.',
														},
														createdAt: {
															type: 'string',
															description:
																'The date and time when the event was created.',
														},
														happenedAt: {
															type: 'string',
															description:
																'The date and time when the event occurred.',
														},
														estimatedDeliveryAt: {
															type: 'string',
															description:
																'The estimated delivery date and time recorded by the event.',
														},
														address1: {
															type: 'string',
															description:
																'The street address where the event occurred.',
														},
														city: {
															type: 'string',
															description:
																'The city where the event occurred.',
														},
														province: {
															type: 'string',
															description:
																'The province where the event occurred.',
														},
														country: {
															type: 'string',
															description:
																'The country where the event occurred.',
														},
														zip: {
															type: 'string',
															description:
																'The zip code where the event occurred.',
														},
														latitude: {
															type: 'number',
															description:
																'The latitude where the event occurred.',
														},
														longitude: {
															type: 'number',
															description:
																'The longitude where the event occurred.',
														},
													},
													required: [],
												},
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
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'getProduct',
		label: 'Get a product',
		description: 'Returns a single product by its ID.',
		context:
			'---\nname: getProduct\ndescription: Returns a single product by its ID.\n---\n\nWraps the `product` query of the Shopify GraphQL Admin API.\n\n**Product ID** must be a global ID (`gid://shopify/Product/123`), not the legacy numeric ID and not the handle.\nThe Search products endpoint returns the global ID as `id` and the numeric one as `legacyResourceId`.\n\n## Media\n\nProduct media is returned under `media.nodes` (images, videos, external videos, and 3D models), selected through the\n`media` connection because the `images` field is deprecated in the Shopify API. Every node has `id`, `alt`,\n`mediaContentType`, `status`, and a `preview.image`. For nodes whose `mediaContentType` is `IMAGE`, `image.url` is the URL\nof the original image. `image` and `preview.image` are `null` until `status` is `READY`.\n\n## Query cost\n\nThe Shopify GraphQL Admin API meters requests by [calculated query cost](https://shopify.dev/docs/api/usage/rate-limits).\nThe default limits on the **Output …** toggles are tuned to stay inside a 100-point bucket for a single product.\n\n## Related endpoints\n\n- `searchProducts` finds product IDs by search query.\n- `updateProduct` changes the product attributes. Read the current values here first — omitted fields are left\n  unchanged, but list fields such as **Tags** are overwritten.\n',
		accounts: { shopify: { scope: ['read_products'] }, shopify4: { scope: ['read_products'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the product to retrieve, such as `gid://shopify/Product/123`. The **Search products** endpoint returns this value as `id`.',
				},
				images: {
					type: 'boolean',
					description:
						'Whether to include the media of each product, such as images. Returned as `media`.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nImages: {
								type: 'number',
								description:
									'The maximum number of product media objects to include in each product.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				options: {
					type: 'boolean',
					description:
						'Whether to include the options of each product, such as size or color.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nOptions: {
								type: 'number',
								description:
									'The maximum number of product options to include in each product.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				variants: {
					type: 'boolean',
					description:
						'Whether to include the variants of each product. Increases the query cost.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nVariants: {
								type: 'number',
								description:
									'The maximum number of product variants to include in each product.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				metafields: {
					type: 'boolean',
					description: 'Whether to include the metafields of each product.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nMetafields: {
								type: 'number',
								description:
									'The maximum number of metafields to include in each product.',
								default: 20,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the product, such as `gid://shopify/Product/123`.',
				},
				legacyResourceId: {
					type: 'string',
					description: 'The REST API ID of the product.',
				},
				descriptionHtml: {
					type: 'string',
					description: 'The description of the product, including HTML tags.',
				},
				templateSuffix: {
					type: 'string',
					description:
						'The theme template used when customers view the product in the store.',
				},
				handle: {
					type: 'string',
					description:
						'The unique, human-readable string used to identify the product in URLs.',
				},
				tags: {
					type: 'array',
					description: 'The searchable keywords associated with the product.',
					items: { type: 'string', description: 'A tag associated with the product.' },
				},
				status: {
					type: 'string',
					description:
						'The product status, which controls visibility across all sales channels: `ACTIVE`, `ARCHIVED`, or `DRAFT`.',
				},
				publishedAt: {
					type: 'string',
					description:
						'The date and time when the product was published to the online store.',
				},
				productType: {
					type: 'string',
					description: 'The product type that the merchant defined.',
				},
				vendor: { type: 'string', description: "The name of the product's vendor." },
				createdAt: {
					type: 'string',
					description: 'The date and time when the product was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the product was last modified.',
				},
				category: {
					type: 'object',
					description: 'The taxonomy category associated with the product.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the taxonomy category.',
						},
						name: { type: 'string', description: 'The name of the taxonomy category.' },
						fullName: {
							type: 'string',
							description:
								'The full name of the taxonomy category, including its ancestors.',
						},
						level: {
							type: 'number',
							description: 'The depth of the category in the taxonomy tree.',
						},
						isLeaf: {
							type: 'boolean',
							description: 'Whether the category has no children.',
						},
						isRoot: {
							type: 'boolean',
							description: 'Whether the category has no parent.',
						},
						isArchived: {
							type: 'boolean',
							description: 'Whether the category is archived.',
						},
						parentId: {
							type: 'string',
							description: 'The global ID of the parent category.',
						},
						ancestorIds: {
							type: 'array',
							description: 'The global IDs of all ancestor categories.',
							items: {
								type: 'string',
								description: 'The global ID of an ancestor category.',
							},
						},
						childrenIds: {
							type: 'array',
							description: 'The global IDs of all direct child categories.',
							items: {
								type: 'string',
								description: 'The global ID of a child category.',
							},
						},
					},
					required: [],
				},
				media: {
					type: 'object',
					description:
						'The media of the product. Returned only when **Output product images** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of product media.',
							items: {
								type: 'object',
								description:
									'A media object of the product, such as an image, video, or 3D model.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the media.',
									},
									alt: {
										type: 'string',
										description:
											'A word or phrase that describes the nature or contents of the media.',
									},
									mediaContentType: {
										type: 'string',
										description:
											'The content type of the media. Possible values are `IMAGE`, `VIDEO`, `EXTERNAL_VIDEO`, and `MODEL_3D`.',
									},
									status: {
										type: 'string',
										description:
											'The current status of the media. Possible values are `UPLOADED`, `PROCESSING`, `READY`, and `FAILED`.',
									},
									preview: {
										type: 'object',
										description: 'The preview of the media.',
										properties: {
											image: {
												type: 'object',
												description:
													'The preview image of the media. Is `null` until the preview is processed.',
												properties: {
													url: {
														type: 'string',
														description:
															'The URL of the preview image.',
													},
													altText: {
														type: 'string',
														description:
															'The alternative text describing the preview image.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									image: {
										type: 'object',
										description:
											'The original image of the media. Returned only for media whose content type is `IMAGE`, and is `null` until the status is `READY`.',
										properties: {
											id: {
												type: 'string',
												description: 'The global ID of the image.',
											},
											url: {
												type: 'string',
												description:
													'The URL of the original, unmodified image.',
											},
											altText: {
												type: 'string',
												description:
													'The alternative text describing the image.',
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
				options: {
					type: 'array',
					description:
						'The options of the product, such as size or color. Returned only when **Output product options** is enabled. This is a list field, so it has no `nodes` wrapper.',
					items: {
						type: 'object',
						description: 'An option of the product.',
						properties: {
							id: {
								type: 'string',
								description: 'The global ID of the product option.',
							},
							name: {
								type: 'string',
								description: 'The name of the product option, such as `Size`.',
							},
							position: {
								type: 'number',
								description:
									'The position of the option in the list of options, starting at 1.',
							},
							values: {
								type: 'array',
								description: 'The values associated with the option.',
								items: {
									type: 'string',
									description: 'A value associated with the option.',
								},
							},
							linkedMetafield: {
								type: 'object',
								description: 'The metafield the option is linked to, if any.',
								properties: {
									key: {
										type: 'string',
										description: 'The key of the linked metafield.',
									},
									namespace: {
										type: 'string',
										description: 'The namespace of the linked metafield.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				variants: {
					type: 'object',
					description:
						'The variants of the product. Returned only when **Output product variants** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of product variants.',
							items: {
								type: 'object',
								description: 'A variant of the product.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the product variant.',
									},
									sku: {
										type: 'string',
										description:
											'The stock keeping unit of the product variant.',
									},
									displayName: {
										type: 'string',
										description:
											'The product title combined with the variant selected options.',
									},
									barcode: {
										type: 'string',
										description:
											'The barcode of the product variant, such as an ISBN, UPC, or GTIN.',
									},
									price: {
										type: 'string',
										description:
											'The price of the product variant in the shop currency, serialized as a decimal string.',
									},
									compareAtPrice: {
										type: 'string',
										description:
											'The original price of the product variant before a sale, serialized as a decimal string.',
									},
									inventoryQuantity: {
										type: 'number',
										description:
											'The total sellable quantity of the product variant.',
									},
									inventoryItem: {
										type: 'object',
										description: 'The inventory item of the product variant.',
										properties: {
											id: {
												type: 'string',
												description:
													'The global ID of the inventory item. Use it with the inventory level endpoints.',
											},
											requiresShipping: {
												type: 'boolean',
												description:
													'Whether the inventory item requires shipping.',
											},
										},
										required: [],
									},
									product: {
										type: 'object',
										description: 'The product the variant belongs to.',
										properties: {
											id: {
												type: 'string',
												description: 'The global ID of the product.',
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
				metafields: {
					type: 'object',
					description:
						'The metafields of the product. Returned only when **Output product metafields** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of metafields.',
							items: {
								type: 'object',
								description:
									'A metafield holding additional information about the resource.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the metafield.',
									},
									namespace: {
										type: 'string',
										description: 'The container the metafield belongs to.',
									},
									legacyResourceId: {
										type: 'string',
										description: 'The REST API ID of the metafield.',
									},
									key: {
										type: 'string',
										description:
											'The unique identifier of the metafield within its namespace.',
									},
									value: {
										type: 'string',
										description:
											'The data stored in the metafield, always returned as a string.',
									},
									jsonValue: {
										description:
											'The data stored in the metafield, parsed into its JSON representation.',
									},
									type: {
										type: 'string',
										description:
											'The metafield type, such as `single_line_text_field`. See the [supported metafield types](https://shopify.dev/docs/api/admin-graphql/2026-04/../../apps/build/custom-data/metafields/list-of-data-types).',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'getProductVariant',
		label: 'Get a product variant',
		description: 'Returns a single product variant by its ID.',
		context:
			'---\nname: getProductVariant\ndescription: Returns a single product variant by its ID.\n---\n\nWraps the `productVariant` query of the Shopify GraphQL Admin API.\n\n**Variant ID** must be a global ID (`gid://shopify/ProductVariant/123`). Unlike the "Get a product variant" module,\nthis endpoint does not ask for a product ID — the module only needs it to populate its variant picker, and the\nunderlying query takes the variant ID alone.\n\n## Media\n\nVariant media is returned under `media.nodes`, selected through the `media` connection because the `image` field is\ndeprecated in the Shopify API. Every node has `id`, `alt`, `mediaContentType`, `status`, and a `preview.image`. For nodes\nwhose `mediaContentType` is `IMAGE`, `image.url` is the URL of the original image. `image` and `preview.image` are\n`null` until `status` is `READY`.\n\n## Finding a variant ID\n\nCall `searchProducts` or `getProduct` with **Output product variants** enabled; the variant IDs come back under\n`variants.nodes[].id`.\n\n## Related endpoints\n\n- `createProductVariants` / `updateProductVariants` modify variants.\n- The `inventoryItem.id` returned here is the input of the inventory level endpoints.\n',
		accounts: { shopify: { scope: ['read_products'] }, shopify4: { scope: ['read_products'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the product variant to retrieve, such as `gid://shopify/ProductVariant/123`. The **Search products** endpoint returns variant IDs under **Variants** when **Output product variants** is enabled.',
				},
				inventoryItem: {
					type: 'boolean',
					description:
						'Whether to include the inventory item of the variant, including its unit cost, weight, and country of origin.',
					default: true,
				},
				selectedOptions: {
					type: 'boolean',
					description: 'Whether to include the option values selected for the variant.',
					default: true,
				},
				image: {
					type: 'boolean',
					description:
						'Whether to include the media of the variant, such as images. Returned as `media`.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nImages: {
								type: 'number',
								description:
									'The maximum number of media objects to include for the variant.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				metafields: {
					type: 'boolean',
					description: 'Whether to include the metafields of the variant.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nMetafields: {
								type: 'number',
								description:
									'The maximum number of metafields to include in the variant.',
								default: 20,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the product variant, such as `gid://shopify/ProductVariant/123`.',
				},
				legacyResourceId: {
					type: 'string',
					description: 'The REST API ID of the product variant.',
				},
				barcode: {
					type: 'string',
					description:
						'The barcode of the product variant, such as an ISBN, UPC, or GTIN.',
				},
				sku: {
					type: 'string',
					description: 'The stock keeping unit of the product variant.',
				},
				price: {
					type: 'string',
					description:
						"The price of the product variant in the shop's currency, serialized as a decimal string.",
				},
				compareAtPrice: {
					type: 'string',
					description:
						'The original price before a sale, serialized as a decimal string.',
				},
				inventoryQuantity: {
					type: 'number',
					description:
						'The total sellable quantity of the product variant across all locations.',
				},
				taxable: {
					type: 'boolean',
					description: 'Whether a tax is charged when the product variant is sold.',
				},
				createdAt: {
					type: 'string',
					description: 'The date and time when the product variant was created.',
				},
				updatedAt: {
					type: 'string',
					description: 'The date and time when the product variant was last modified.',
				},
				product: {
					type: 'object',
					description: 'The product the variant belongs to.',
					properties: {
						id: { type: 'string', description: 'The global ID of the product.' },
					},
					required: [],
				},
				inventoryItem: {
					type: 'object',
					description:
						'The inventory item of the product variant. Returned only when **Output inventory item** is enabled.',
					properties: {
						id: {
							type: 'string',
							description:
								'The global ID of the inventory item. Use it with the inventory level endpoints.',
						},
						legacyResourceId: {
							type: 'string',
							description: 'The REST API ID of the inventory item.',
						},
						sku: {
							type: 'string',
							description: 'The stock keeping unit of the inventory item.',
						},
						tracked: {
							type: 'boolean',
							description: 'Whether inventory levels are tracked for the item.',
						},
						requiresShipping: {
							type: 'boolean',
							description:
								'Whether the item must be physically shipped to the customer.',
						},
						countryCodeOfOrigin: {
							type: 'string',
							description:
								'The two-letter ISO 3166-1 alpha-2 code of the country where the item was produced.',
						},
						provinceCodeOfOrigin: {
							type: 'string',
							description:
								'The two-letter code of the province where the item was produced.',
						},
						createdAt: {
							type: 'string',
							description: 'The date and time when the inventory item was created.',
						},
						updatedAt: {
							type: 'string',
							description:
								'The date and time when the inventory item was last modified.',
						},
						measurement: {
							type: 'object',
							description: 'The measurements of the inventory item.',
							properties: {
								id: {
									type: 'string',
									description: 'The global ID of the inventory item measurement.',
								},
								weight: {
									type: 'object',
									description: 'The weight of the inventory item.',
									properties: {
										unit: {
											type: 'string',
											description:
												'The unit of measurement: `GRAMS`, `KILOGRAMS`, `OUNCES`, or `POUNDS`.',
										},
										value: {
											type: 'number',
											description: 'The weight value in the given unit.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						unitCost: {
							type: 'object',
							description:
								"The unit cost of the inventory item, in the shop's default currency.",
							properties: {
								amount: {
									type: 'string',
									description:
										'The decimal monetary amount, serialized as a string.',
								},
								currencyCode: {
									type: 'string',
									description:
										'The three-letter currency code in ISO 4217 format.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				selectedOptions: {
					type: 'array',
					description:
						'The option values selected for this variant, such as `Size: Small`. Returned only when **Output selected options** is enabled. This is a list field, so it has no `nodes` wrapper.',
					items: {
						type: 'object',
						description: 'One selected option of the variant.',
						properties: {
							name: {
								type: 'string',
								description: 'The name of the product option, such as `Size`.',
							},
							value: {
								type: 'string',
								description:
									'The selected value of the product option, such as `Small`.',
							},
							optionValue: {
								type: 'object',
								description:
									'The product option value object behind the selection.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the product option value.',
									},
									name: {
										type: 'string',
										description: 'The name of the product option value.',
									},
									hasVariants: {
										type: 'boolean',
										description:
											'Whether any variant of the product uses this option value.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				media: {
					type: 'object',
					description:
						'The media of the product variant. Returned only when **Output image** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of variant media.',
							items: {
								type: 'object',
								description:
									'A media object of the product variant, such as an image, video, or 3D model.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the media.',
									},
									alt: {
										type: 'string',
										description:
											'A word or phrase that describes the nature or contents of the media.',
									},
									mediaContentType: {
										type: 'string',
										description:
											'The content type of the media. Possible values are `IMAGE`, `VIDEO`, `EXTERNAL_VIDEO`, and `MODEL_3D`.',
									},
									status: {
										type: 'string',
										description:
											'The current status of the media. Possible values are `UPLOADED`, `PROCESSING`, `READY`, and `FAILED`.',
									},
									preview: {
										type: 'object',
										description: 'The preview of the media.',
										properties: {
											image: {
												type: 'object',
												description:
													'The preview image of the media. Is `null` until the preview is processed.',
												properties: {
													url: {
														type: 'string',
														description:
															'The URL of the preview image.',
													},
													altText: {
														type: 'string',
														description:
															'The alternative text describing the preview image.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									image: {
										type: 'object',
										description:
											'The original image of the media. Returned only for media whose content type is `IMAGE`, and is `null` until the status is `READY`.',
										properties: {
											id: {
												type: 'string',
												description: 'The global ID of the image.',
											},
											url: {
												type: 'string',
												description:
													'The URL of the original, unmodified image.',
											},
											altText: {
												type: 'string',
												description:
													'The alternative text describing the image.',
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
				metafields: {
					type: 'object',
					description:
						'The metafields of the product variant. Returned only when **Output variant metafields** is enabled.',
					properties: {
						nodes: {
							type: 'array',
							description: 'The list of metafields.',
							items: {
								type: 'object',
								description:
									'A metafield holding additional information about the resource.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the metafield.',
									},
									namespace: {
										type: 'string',
										description: 'The container the metafield belongs to.',
									},
									legacyResourceId: {
										type: 'string',
										description: 'The REST API ID of the metafield.',
									},
									key: {
										type: 'string',
										description:
											'The unique identifier of the metafield within its namespace.',
									},
									value: {
										type: 'string',
										description:
											'The data stored in the metafield, always returned as a string.',
									},
									jsonValue: {
										description:
											'The data stored in the metafield, parsed into its JSON representation.',
									},
									type: {
										type: 'string',
										description:
											'The metafield type, such as `single_line_text_field`. See the [supported metafield types](https://shopify.dev/docs/api/admin-graphql/2026-04/../../apps/build/custom-data/metafields/list-of-data-types).',
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'listBlogs',
		label: 'Search blogs',
		description: 'Returns the blogs of the shop.',
		context:
			'---\nname: listBlogs\ndescription: Returns the blogs of the shop.\n---\n\nWraps the `blogs` query of the Shopify GraphQL Admin API. This is a lookup endpoint: its job is to supply the\n**Blog ID** values that the **Create an article** endpoint needs and that nothing else in this app returns.\n\nEvery article belongs to a blog, and most shops have only one, so a single call with the default limit usually\ngives you everything you need.\n\n## Filtering\n\n**Query** uses the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax) with the keys `title`, `handle`, `id`,\n`created_at` and `updated_at`. Note that `id` filters on the **legacy numeric** range, so `id:>=1234` rather\nthan a global ID.\n\n## Pagination\n\nPagination is cursor-based. Read `pageInfo.hasNextPage`; when it is `true`, pass `pageInfo.endCursor` as\n**After** on the next call.\n\n## Related endpoints\n\n- **Create an article** takes the `id` returned here as **Blog ID**.\n- **Search articles** filters by blog with `blog_id:`, which takes the **legacy numeric** ID rather than the\n  global ID returned here.\n',
		accounts: { shopify: { scope: ['read_content'] }, shopify4: { scope: ['read_content'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description:
						'Filters the blogs using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Supported keys are `title`, `handle`, `id`, `created_at` and `updated_at` — for example `title:News`. A bare term runs a full-text search. See the [`blogs` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/blogs). Leave empty to return all blogs.',
				},
				first: {
					type: 'number',
					description:
						'The maximum number of blogs to return in one call. Shopify allows up to 250. Defaults to 50 when omitted.',
					default: 50,
					minimum: 1,
					maximum: 250,
				},
				after: {
					type: 'string',
					description:
						'The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.',
				},
				sortKey: {
					type: 'string',
					description:
						'The field to sort by. Defaults to `ID`. See [BlogSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/BlogSortKeys).',
					default: '',
					enum: ['', 'ID', 'HANDLE', 'TITLE'],
				},
				reverse: {
					type: 'boolean',
					description:
						'Whether to reverse the sort order. Set to `true` to sort in descending order.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'The blogs that match the query.',
					items: {
						type: 'object',
						description: "A container for the shop's articles.",
						properties: {
							id: {
								type: 'string',
								description:
									'The global ID of the blog, such as `gid://shopify/Blog/123`. This is the value the **Create an article** endpoint expects as **Blog ID**.',
							},
							handle: {
								type: 'string',
								description:
									"The unique, human-friendly string used in the blog's URL.",
							},
							commentPolicy: {
								type: 'string',
								description:
									'Whether readers can comment on the articles of this blog: `MODERATED`, `CLOSED`, or `AUTO_PUBLISHED`.',
							},
							templateSuffix: {
								type: 'string',
								description:
									'The theme template used when customers view the blog in the store.',
							},
							tags: {
								type: 'array',
								description: 'The tags used across the articles of this blog.',
								items: {
									type: 'string',
									description: 'One tag used by an article of this blog.',
								},
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the blog was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'The date and time when the blog was last modified.',
							},
							feed: {
								type: 'object',
								description:
									'The RSS feed of the blog. Empty when the blog has no feed.',
								properties: {
									path: {
										type: 'string',
										description: 'The path to the RSS feed of the blog.',
									},
									location: {
										type: 'string',
										description: 'The full URL of the RSS feed of the blog.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pageInfo: {
					type: 'object',
					description: 'The cursor information used to paginate through the result set.',
					properties: {
						hasNextPage: {
							type: 'boolean',
							description: 'Whether another page of results exists after this one.',
						},
						hasPreviousPage: {
							type: 'boolean',
							description: 'Whether another page of results exists before this one.',
						},
						startCursor: {
							type: 'string',
							description: 'The cursor of the first result in this page.',
						},
						endCursor: {
							type: 'string',
							description:
								'The cursor of the last result in this page. Pass it as **After** to fetch the next page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'listLocations',
		label: 'Search locations',
		description: 'Returns the locations where the shop stocks inventory and fulfils orders.',
		context:
			"---\nname: listLocations\ndescription: Returns the locations where the shop stocks inventory and fulfils orders.\n---\n\nWraps the `locations` query of the Shopify GraphQL Admin API. This is a lookup endpoint: its job is to supply the\n**Location ID** values that other endpoints require and that nothing else in this app returns.\n\n## What needs a location ID\n\n- **Adjust an inventory level** and **Update an inventory level** — every entry needs **Location ID**.\n- **Create an order** — **Fulfillment** → **Location ID**, and each transaction's **Location ID**.\n- **Create product variants** — each **Inventory quantities** entry.\n- **Update product variants** — each **Quantity adjustments** entry.\n\n## Active locations only, by default\n\nOnly active locations can stock inventory or fulfil orders, and the query returns just those unless you set\n**Include inactive**. A deactivated location will be rejected by the inventory endpoints, so keep the default off\nwhen you are looking for somewhere to write to. Read `isActive` when you do include them.\n\n**Include legacy** adds the locations that fulfillment service apps manage, which are also off by default.\n\n## Filtering\n\n**Query** uses the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax) with keys such as `name`, `city`, `country` and\n`active`. `id` filters on the **legacy numeric** range, so `id:>=1234` rather than a global ID.\n\n## Pagination\n\nPagination is cursor-based. Read `pageInfo.hasNextPage`; when it is `true`, pass `pageInfo.endCursor` as\n**After** on the next call. Most shops have few enough locations that one call with the default limit of 50 covers\neverything.\n",
		accounts: {
			shopify: { scope: ['read_locations'] },
			shopify4: { scope: ['read_locations'] },
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description:
						'Filters the locations using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Supported keys include `name`, `address1`, `address2`, `city`, `province`, `country`, `zip`, `active`, `legacy`, `geolocated`, `id`, `location_id` and `pickup_in_store` — for example `name:Warehouse`. A bare term runs a full-text search. See the [`locations` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/locations). Leave empty to return all locations.',
				},
				first: {
					type: 'number',
					description:
						'The maximum number of locations to return in one call. Shopify allows up to 250. Defaults to 50 when omitted.',
					default: 50,
					minimum: 1,
					maximum: 250,
				},
				after: {
					type: 'string',
					description:
						'The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.',
				},
				sortKey: {
					type: 'string',
					description:
						'The field to sort by. Defaults to `NAME`. See [LocationSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/LocationSortKeys).',
					default: '',
					enum: ['', 'NAME', 'ID', 'RELEVANCE'],
				},
				reverse: {
					type: 'boolean',
					description:
						'Whether to reverse the sort order. Set to `true` to sort in descending order.',
				},
				includeInactive: {
					type: 'boolean',
					description:
						'Whether to include deactivated locations. They can no longer stock inventory or fulfil orders, so leave this off when you need a location to write to. Defaults to `false`.',
				},
				includeLegacy: {
					type: 'boolean',
					description:
						'Whether to include the legacy locations that fulfillment service apps manage. Defaults to `false`.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'The locations that match the query.',
					items: {
						type: 'object',
						description:
							'A location where the merchant stocks inventory and fulfils orders.',
						properties: {
							id: {
								type: 'string',
								description:
									'The global ID of the location, such as `gid://shopify/Location/123`. This is the value the inventory and fulfillment endpoints expect as **Location ID**.',
							},
							name: {
								type: 'string',
								description: 'The name of the location as the merchant sees it.',
							},
							isActive: {
								type: 'boolean',
								description:
									'Whether the location is active. Only active locations can stock inventory and fulfil orders.',
							},
							activatable: {
								type: 'boolean',
								description: 'Whether the location can be reactivated.',
							},
							deactivatable: {
								type: 'boolean',
								description: 'Whether the location can be deactivated.',
							},
							deactivatedAt: {
								type: 'string',
								description:
									'The date the location was deactivated, as a string. Empty while the location is active.',
							},
							deletable: {
								type: 'boolean',
								description: 'Whether the location can be deleted.',
							},
							addressVerified: {
								type: 'boolean',
								description:
									'Whether Shopify has verified the address of the location.',
							},
							fulfillsOnlineOrders: {
								type: 'boolean',
								description:
									'Whether the location is used when calculating delivery rates for online orders.',
							},
							shipsInventory: {
								type: 'boolean',
								description:
									'Whether the location is the default one for shipping inventory.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the location was created.',
							},
							address: {
								type: 'object',
								description: 'The address of the location.',
								properties: {
									formatted: {
										type: 'array',
										description:
											'The address formatted for display, one line per element.',
										items: {
											type: 'string',
											description: 'One line of the formatted address.',
										},
									},
									address1: {
										type: 'string',
										description:
											'The first line of the address, typically the street address.',
									},
									address2: {
										type: 'string',
										description:
											'The second line of the address, typically the apartment, suite, or unit number.',
									},
									city: {
										type: 'string',
										description:
											'The name of the city, district, village, or town.',
									},
									province: {
										type: 'string',
										description:
											'The name of the region, such as the province, state, or district.',
									},
									provinceCode: {
										type: 'string',
										description:
											'The code for the region, such as `QC` for Quebec, Canada.',
									},
									country: {
										type: 'string',
										description: 'The name of the country.',
									},
									countryCode: {
										type: 'string',
										description:
											'The two-letter country code of the address, such as `CZ` for Czechia.',
									},
									zip: {
										type: 'string',
										description: 'The zip or postal code of the address.',
									},
									phone: {
										type: 'string',
										description: 'The phone number of the location.',
									},
									latitude: {
										type: 'number',
										description: 'The latitude of the location.',
									},
									longitude: {
										type: 'number',
										description: 'The longitude of the location.',
									},
								},
								required: [],
							},
							fulfillmentService: {
								type: 'object',
								description:
									'The fulfillment service that manages the location, when one does.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the fulfillment service.',
									},
									handle: {
										type: 'string',
										description:
											'The handle of the fulfillment service. A handle other than `manual` means a third-party service manages this location.',
									},
									inventoryManagement: {
										type: 'boolean',
										description:
											'Whether the fulfillment service tracks inventory and reports it back to Shopify.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pageInfo: {
					type: 'object',
					description: 'The cursor information used to paginate through the result set.',
					properties: {
						hasNextPage: {
							type: 'boolean',
							description: 'Whether another page of results exists after this one.',
						},
						hasPreviousPage: {
							type: 'boolean',
							description: 'Whether another page of results exists before this one.',
						},
						startCursor: {
							type: 'string',
							description: 'The cursor of the first result in this page.',
						},
						endCursor: {
							type: 'string',
							description:
								'The cursor of the last result in this page. Pass it as **After** to fetch the next page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'searchArticles',
		label: 'Search articles',
		description: 'Returns a list of blog articles that match a search query.',
		context:
			"---\nname: searchArticles\ndescription: Returns a list of blog articles that match a search query.\n---\n\nWraps the `articles` query of the Shopify GraphQL Admin API. One call returns one page of articles across all of\nthe shop's blogs.\n\n## Filtering\n\n**Query** uses the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Two notes that matter\nin practice:\n\n- `blog_id` takes the **legacy numeric** ID, not the global ID — `blog_id:1234`, not\n  `blog_id:gid://shopify/Blog/1234`.\n- `id` also filters on the numeric range, so `id:>=1234` works.\n\nThe full list of supported keys is in the [`articles` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/articles).\n\n## Pagination\n\nPagination is cursor-based. Read `pageInfo.hasNextPage`; when it is `true`, pass `pageInfo.endCursor` as\n**After** on the next call.\n\n## Related endpoints\n\n- `createArticle` creates an article on a specific blog.\n- There is no Get an article endpoint; filter here with `id:` or `handle:` to fetch one.\n",
		accounts: { shopify: { scope: ['read_content'] }, shopify4: { scope: ['read_content'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description:
						'Filters the articles using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Supported keys include `author`, `blog_id`, `blog_title`, `created_at`, `handle`, `id`, `published_at`, `published_status`, `tag`, `tag_not`, `title`, and `updated_at` — for example `blog_id:1234 AND tag:news`. A bare term runs a full-text search. See the [`articles` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/articles). Leave empty to return all articles.',
				},
				first: {
					type: 'number',
					description:
						'The maximum number of articles to return in one call. Shopify allows up to 250. Defaults to 10 when omitted.',
					default: 10,
					minimum: 1,
					maximum: 250,
				},
				after: {
					type: 'string',
					description:
						'The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.',
				},
				sortKey: {
					type: 'string',
					description:
						'The field to sort the articles by. Defaults to `ID`. See [ArticleSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/ArticleSortKeys).',
					default: '',
					enum: ['', 'AUTHOR', 'BLOG_TITLE', 'ID', 'PUBLISHED_AT', 'TITLE', 'UPDATED_AT'],
				},
				reverse: {
					type: 'boolean',
					description:
						'Whether to reverse the sort order. Set to `true` to sort in descending order.',
				},
				metafields: {
					type: 'boolean',
					description: 'Whether to include the metafields of each article.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nMetafields: {
								type: 'number',
								description:
									'The maximum number of metafields to include for each article.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'The list of articles that match the query.',
					items: {
						type: 'object',
						description: "A blog post from one of the shop's blogs.",
						properties: {
							id: {
								type: 'string',
								description:
									'The global ID of the article, such as `gid://shopify/Article/123`.',
							},
							body: {
								type: 'string',
								description:
									"The text of the article's body, including HTML markup.",
							},
							summary: {
								type: 'string',
								description:
									'A summary of the article, which can include HTML markup. Themes use it to display the article on listing pages.',
							},
							handle: {
								type: 'string',
								description:
									"The unique, human-friendly string used in the article's URL.",
							},
							isPublished: {
								type: 'boolean',
								description: 'Whether the article is visible in the online store.',
							},
							publishedAt: {
								type: 'string',
								description: 'The date and time when the article became visible.',
							},
							tags: {
								type: 'array',
								description: 'The tags attached to the article.',
								items: {
									type: 'string',
									description: 'A tag attached to the article.',
								},
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the article was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the article was last modified.',
							},
							author: {
								type: 'object',
								description: 'The author of the article.',
								properties: {
									name: {
										type: 'string',
										description: "The author's full name.",
									},
								},
								required: [],
							},
							blog: {
								type: 'object',
								description: 'The blog that contains the article.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the blog.',
									},
								},
								required: [],
							},
							image: {
								type: 'object',
								description: 'The image associated with the article.',
								properties: {
									altText: {
										type: 'string',
										description:
											'A word or phrase describing the nature or contents of the image.',
									},
									url: { type: 'string', description: 'The URL of the image.' },
								},
								required: [],
							},
							metafields: {
								type: 'object',
								description:
									'The metafields of the article. Returned only when **Output article metafields** is enabled.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of metafields.',
										items: {
											type: 'object',
											description:
												'A metafield holding additional information about the resource.',
											properties: {
												id: {
													type: 'string',
													description: 'The global ID of the metafield.',
												},
												namespace: {
													type: 'string',
													description:
														'The container the metafield belongs to.',
												},
												legacyResourceId: {
													type: 'string',
													description:
														'The REST API ID of the metafield.',
												},
												key: {
													type: 'string',
													description:
														'The unique identifier of the metafield within its namespace.',
												},
												value: {
													type: 'string',
													description:
														'The data stored in the metafield, always returned as a string.',
												},
												jsonValue: {
													description:
														'The data stored in the metafield, parsed into its JSON representation.',
												},
												type: {
													type: 'string',
													description:
														'The metafield type, such as `single_line_text_field`. See the [supported metafield types](https://shopify.dev/docs/api/admin-graphql/2026-04/../../apps/build/custom-data/metafields/list-of-data-types).',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pageInfo: {
					type: 'object',
					description: 'The cursor information used to paginate through the result set.',
					properties: {
						hasNextPage: {
							type: 'boolean',
							description: 'Whether another page of results exists after this one.',
						},
						hasPreviousPage: {
							type: 'boolean',
							description: 'Whether another page of results exists before this one.',
						},
						startCursor: {
							type: 'string',
							description: 'The cursor of the first result in this page.',
						},
						endCursor: {
							type: 'string',
							description:
								'The cursor of the last result in this page. Pass it as **After** to fetch the next page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'searchCustomers',
		label: 'Search customers',
		description: 'Returns a list of customers that match a search query.',
		context:
			"---\nname: searchCustomers\ndescription: Returns a list of customers that match a search query.\n---\n\nWraps the `customers` query of the Shopify GraphQL Admin API. One call returns one page of customers.\n\n## Filtering\n\n**Query** uses the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Useful keys include\n`email`, `phone`, `first_name`, `last_name`, `tag`, `orders_count`, `total_spent`, and `state`. A bare term runs a\nfull-text search. The full list is in the [`customers` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/customers).\n\n## Addresses\n\nAll mailing addresses are returned under `addressesV2.nodes`, selected through the `addressesV2` connection because the\n`addresses` field is deprecated in the Shopify API. The default address is returned separately as `defaultAddress`.\n\n## Pagination\n\nPagination is cursor-based. Read `pageInfo.hasNextPage`; when it is `true`, pass `pageInfo.endCursor` as\n**After** on the next call.\n\n## Query cost and scopes\n\nThe order-related fields (`lastOrder`, `numberOfOrders`, `amountSpent`) are why this endpoint requires the order\nscopes in addition to `read_customers`. **Addresses limit** defaults to 250, which is the Shopify maximum; lower it\nto cut query cost when a store has customers with many addresses.\n\nCustomer data is subject to Shopify's [protected customer data](https://shopify.dev/docs/apps/launch/protected-customer-data)\nrequirements — request only what the app genuinely needs.\n\n## Related endpoints\n\n- `getACustomer` returns one customer by ID.\n- The `lastOrder.id` returned here is the input of `getAnOrder`.\n",
		accounts: {
			shopify: { scope: ['read_customers', 'read_orders', 'read_all_orders'] },
			shopify4: { scope: ['read_customers', 'read_orders', 'read_all_orders'] },
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description:
						'Filters the customers using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax), such as `email:jane@example.com` or `orders_count:>5`. A bare term runs a full-text search across name, email, and more. See the [supported filters](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/customers) for the `customers` query. Leave empty to return all customers.',
				},
				first: {
					type: 'number',
					description:
						'The maximum number of customers to return in one call. Shopify allows up to 250. Defaults to 10 when omitted.',
					default: 10,
					minimum: 1,
					maximum: 250,
				},
				after: {
					type: 'string',
					description:
						'The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.',
				},
				sortKey: {
					type: 'string',
					description:
						"The field to sort the customers by. Don't use `RELEVANCE` unless **Query** is set. See [CustomerSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CustomerSortKeys).",
					default: '',
					enum: ['', 'CREATED_AT', 'ID', 'LOCATION', 'NAME', 'RELEVANCE', 'UPDATED_AT'],
				},
				reverse: {
					type: 'boolean',
					description:
						'Whether to reverse the sort order. Set to `true` to sort in descending order.',
				},
				nAddresses: {
					type: 'number',
					description:
						'The maximum number of mailing addresses to include for each customer. Defaults to 250 when omitted.',
					default: 250,
					minimum: 1,
					maximum: 250,
				},
				metafields: {
					type: 'boolean',
					description: 'Whether to include the metafields of each customer.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nMetafields: {
								type: 'number',
								description:
									'The maximum number of metafields to include for each customer.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'The list of customers that match the query.',
					items: {
						type: 'object',
						description: 'A customer of the shop.',
						properties: {
							id: {
								type: 'string',
								description:
									'The global ID of the customer, such as `gid://shopify/Customer/123`.',
							},
							legacyResourceId: {
								type: 'string',
								description: 'The REST API ID of the customer.',
							},
							firstName: {
								type: 'string',
								description: 'The first name of the customer.',
							},
							lastName: {
								type: 'string',
								description: 'The last name of the customer.',
							},
							displayName: {
								type: 'string',
								description:
									'The full name of the customer, based on the first and last names.',
							},
							verifiedEmail: {
								type: 'boolean',
								description:
									'Whether the customer has verified their email address.',
							},
							state: {
								type: 'string',
								description:
									'The state of the customer account with the shop, such as `ENABLED`, `DISABLED`, `INVITED`, or `DECLINED`.',
							},
							taxExempt: {
								type: 'boolean',
								description:
									'Whether the customer is exempt from paying taxes on their orders.',
							},
							lifetimeDuration: {
								type: 'string',
								description:
									'How long the customer has been a customer, in a human-readable form such as `2 years`.',
							},
							locale: {
								type: 'string',
								description: 'The locale of the customer, such as `en`.',
							},
							tags: {
								type: 'array',
								description: 'The tags attached to the customer.',
								items: {
									type: 'string',
									description: 'A tag attached to the customer.',
								},
							},
							note: {
								type: 'string',
								description: 'The note associated with the customer.',
							},
							numberOfOrders: {
								type: 'string',
								description:
									'The number of orders the customer has placed, returned as a string.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the customer was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the customer was last modified.',
							},
							defaultEmailAddress: {
								type: 'object',
								description:
									'The default email address of the customer and its marketing state.',
								properties: {
									emailAddress: {
										type: 'string',
										description: 'The email address of the customer.',
									},
									marketingOptInLevel: {
										type: 'string',
										description:
											'The opt-in level used when the customer consented to email marketing.',
									},
									marketingState: {
										type: 'string',
										description:
											'The current email marketing state of the customer.',
									},
									validFormat: {
										type: 'boolean',
										description:
											'Whether the email address is formatted correctly.',
									},
								},
								required: [],
							},
							defaultPhoneNumber: {
								type: 'object',
								description:
									'The default phone number of the customer and its marketing state.',
								properties: {
									phoneNumber: {
										type: 'string',
										description:
											'The phone number of the customer, in E.164 format.',
									},
									marketingOptInLevel: {
										type: 'string',
										description:
											'The opt-in level used when the customer consented to SMS marketing.',
									},
									marketingState: {
										type: 'string',
										description:
											'The current SMS marketing state of the customer.',
									},
								},
								required: [],
							},
							defaultAddress: {
								type: 'object',
								description: 'The default mailing address of the customer.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the mailing address.',
									},
									name: {
										type: 'string',
										description: 'The full name of the person at this address.',
									},
									firstName: {
										type: 'string',
										description:
											'The first name of the person at this address.',
									},
									lastName: {
										type: 'string',
										description: 'The last name of the person at this address.',
									},
									phone: {
										type: 'string',
										description:
											'The phone number at this address, in E.164 format.',
									},
									company: {
										type: 'string',
										description: 'The company or organization at this address.',
									},
									address1: {
										type: 'string',
										description:
											'The first line of the address, typically the street address or PO box number.',
									},
									address2: {
										type: 'string',
										description:
											'The second line of the address, typically the apartment, suite, or unit number.',
									},
									city: {
										type: 'string',
										description:
											'The name of the city, district, village, or town.',
									},
									province: {
										type: 'string',
										description:
											'The name of the region, such as the province, state, or district.',
									},
									provinceCode: {
										type: 'string',
										description:
											'The code for the region, such as `QC` for Quebec, Canada.',
									},
									country: {
										type: 'string',
										description: 'The name of the country.',
									},
									countryCodeV2: {
										type: 'string',
										description:
											'The two-letter country code of the address, such as `CZ` for Czechia.',
									},
									zip: {
										type: 'string',
										description: 'The zip or postal code of the address.',
									},
								},
								required: [],
							},
							addressesV2: {
								type: 'object',
								description: 'The mailing addresses of the customer.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of mailing addresses.',
										items: {
											type: 'object',
											description: 'A mailing address of the customer.',
											properties: {
												id: {
													type: 'string',
													description:
														'The global ID of the mailing address.',
												},
												name: {
													type: 'string',
													description:
														'The full name of the person at this address.',
												},
												firstName: {
													type: 'string',
													description:
														'The first name of the person at this address.',
												},
												lastName: {
													type: 'string',
													description:
														'The last name of the person at this address.',
												},
												phone: {
													type: 'string',
													description:
														'The phone number at this address, in E.164 format.',
												},
												company: {
													type: 'string',
													description:
														'The company or organization at this address.',
												},
												address1: {
													type: 'string',
													description:
														'The first line of the address, typically the street address or PO box number.',
												},
												address2: {
													type: 'string',
													description:
														'The second line of the address, typically the apartment, suite, or unit number.',
												},
												city: {
													type: 'string',
													description:
														'The name of the city, district, village, or town.',
												},
												province: {
													type: 'string',
													description:
														'The name of the region, such as the province, state, or district.',
												},
												provinceCode: {
													type: 'string',
													description:
														'The code for the region, such as `QC` for Quebec, Canada.',
												},
												country: {
													type: 'string',
													description: 'The name of the country.',
												},
												countryCodeV2: {
													type: 'string',
													description:
														'The two-letter country code of the address, such as `CZ` for Czechia.',
												},
												zip: {
													type: 'string',
													description:
														'The zip or postal code of the address.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							lastOrder: {
								type: 'object',
								description: 'The most recent order the customer placed.',
								properties: {
									id: {
										type: 'string',
										description:
											'The global ID of the order. Pass it to the Get an order endpoint for details.',
									},
									name: {
										type: 'string',
										description:
											'The unique identifier that appears on the order, such as `#1001`.',
									},
								},
								required: [],
							},
							amountSpent: {
								type: 'object',
								description:
									'The total amount the customer has spent across all orders.',
								properties: {
									amount: {
										type: 'string',
										description:
											'The decimal monetary amount, serialized as a string.',
									},
									currencyCode: {
										type: 'string',
										description:
											'The three-letter currency code in ISO 4217 format.',
									},
								},
								required: [],
							},
							statistics: {
								type: 'object',
								description:
									'The Shopify-computed segmentation statistics of the customer.',
								properties: {
									predictedSpendTier: {
										type: 'string',
										description:
											'The predicted spend tier of the customer, such as `HIGH`, `MEDIUM`, or `LOW`.',
									},
									rfmGroup: {
										type: 'string',
										description:
											'The recency, frequency, and monetary group the customer belongs to, such as `LOYAL` or `AT_RISK`.',
									},
								},
								required: [],
							},
							metafields: {
								type: 'object',
								description:
									'The metafields of the customer. Returned only when **Output customer metafields** is enabled.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of metafields.',
										items: {
											type: 'object',
											description:
												'A metafield holding additional information about the resource.',
											properties: {
												id: {
													type: 'string',
													description: 'The global ID of the metafield.',
												},
												namespace: {
													type: 'string',
													description:
														'The container the metafield belongs to.',
												},
												legacyResourceId: {
													type: 'string',
													description:
														'The REST API ID of the metafield.',
												},
												key: {
													type: 'string',
													description:
														'The unique identifier of the metafield within its namespace.',
												},
												value: {
													type: 'string',
													description:
														'The data stored in the metafield, always returned as a string.',
												},
												jsonValue: {
													description:
														'The data stored in the metafield, parsed into its JSON representation.',
												},
												type: {
													type: 'string',
													description:
														'The metafield type, such as `single_line_text_field`. See the [supported metafield types](https://shopify.dev/docs/api/admin-graphql/2026-04/../../apps/build/custom-data/metafields/list-of-data-types).',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pageInfo: {
					type: 'object',
					description: 'The cursor information used to paginate through the result set.',
					properties: {
						hasNextPage: {
							type: 'boolean',
							description: 'Whether another page of results exists after this one.',
						},
						hasPreviousPage: {
							type: 'boolean',
							description: 'Whether another page of results exists before this one.',
						},
						startCursor: {
							type: 'string',
							description: 'The cursor of the first result in this page.',
						},
						endCursor: {
							type: 'string',
							description:
								'The cursor of the last result in this page. Pass it as **After** to fetch the next page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'searchFulfillmentOrders',
		label: 'Search fulfillment orders',
		description: 'Returns a list of fulfillment orders that match a search query.',
		context:
			'---\nname: searchFulfillmentOrders\ndescription: Returns a list of fulfillment orders that match a search query.\n---\n\nWraps the `fulfillmentOrders` query of the Shopify GraphQL Admin API. One call returns one page of fulfillment\norders across the whole shop.\n\n## Access scopes decide what you see\n\nShopify filters the result by the fulfillment order access scopes the app was granted. This endpoint requests\n`read_merchant_managed_fulfillment_orders` and `read_third_party_fulfillment_orders`, which cover fulfillment\norders at merchant-managed and third-party service locations. A fulfillment service app that needs only the\nfulfillment orders assigned to **its own** locations should use the `assignedFulfillmentOrders` query with\n`read_assigned_fulfillment_orders` through the **Arbitrary call** endpoint instead.\n\n## Filtering\n\n**Query** supports a small set of keys: `assigned_location_id`, `id`, `status`, and `updated_at`. Note that\n**Include closed** is a separate argument, not a query term — closed fulfillment orders are excluded by default no\nmatter what the query says.\n\nShopify\'s own guidance is to pick a **Sort key** that matches the field you filter on when a query is slow, and only\n`ID` and `UPDATED_AT` are available here.\n\n## Pagination\n\nPagination is cursor-based. Read `pageInfo.hasNextPage`; when it is `true`, pass `pageInfo.endCursor` as\n**After** on the next call.\n\n## Related endpoints\n\n- **Get a fulfillment order** returns one fulfillment order with its fulfillments and events.\n- **Create a fulfillment** consumes the line item IDs returned here under **Line items**.\n\n## Note on the source module\n\nThe "Search fulfillment orders (NOT USED)" module in this app is unimplemented SDK scaffolding and is hidden from\nthe compiled build, so this endpoint was designed from the Shopify API reference rather than from that module. It\nuses the app\'s regular Shopify connections, not the unused ones that module is attached to.\n',
		accounts: {
			shopify: {
				scope: [
					'read_merchant_managed_fulfillment_orders',
					'read_third_party_fulfillment_orders',
				],
			},
			shopify4: {
				scope: [
					'read_merchant_managed_fulfillment_orders',
					'read_third_party_fulfillment_orders',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description:
						'Filters the fulfillment orders using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Supported keys are `assigned_location_id`, `id`, `status`, and `updated_at` — for example `status:open AND updated_at:>2026-01-01`. See the [`fulfillmentOrders` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/fulfillmentOrders). Leave empty to return all accessible fulfillment orders.',
				},
				first: {
					type: 'number',
					description:
						'The maximum number of fulfillment orders to return in one call. Shopify allows up to 250. Defaults to 10 when omitted.',
					default: 10,
					minimum: 1,
					maximum: 250,
				},
				after: {
					type: 'string',
					description:
						'The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.',
				},
				sortKey: {
					type: 'string',
					description:
						'The field to sort the fulfillment orders by. Defaults to `ID`. See [FulfillmentOrderSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderSortKeys).',
					default: '',
					enum: ['', 'ID', 'UPDATED_AT'],
				},
				reverse: {
					type: 'boolean',
					description:
						'Whether to reverse the sort order. Set to `true` to sort in descending order.',
				},
				includeClosed: {
					type: 'boolean',
					description:
						'Whether to include closed fulfillment orders. Defaults to `false`, so completed work is hidden unless you ask for it.',
				},
				lineItems: {
					type: 'boolean',
					description:
						'Whether to include the line items of each fulfillment order. Their IDs are what the **Create a fulfillment** endpoint expects.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nLineItems: {
								type: 'number',
								description:
									'The maximum number of line items to include for each fulfillment order.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'The list of fulfillment orders that match the query.',
					items: {
						type: 'object',
						description:
							'A group of items in an order that are expected to be fulfilled from the same location.',
						properties: {
							id: {
								type: 'string',
								description:
									'The global ID of the fulfillment order, such as `gid://shopify/FulfillmentOrder/123`.',
							},
							status: {
								type: 'string',
								description:
									'The status of the fulfillment order, such as `OPEN`, `IN_PROGRESS`, `SCHEDULED`, `ON_HOLD`, `INCOMPLETE`, `CANCELLED`, or `CLOSED`. See [FulfillmentOrderStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderStatus).',
							},
							requestStatus: {
								type: 'string',
								description:
									'The status of the fulfillment request sent to the fulfillment service, such as `UNSUBMITTED`, `SUBMITTED`, `ACCEPTED`, or `REJECTED`. See [FulfillmentOrderRequestStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderRequestStatus).',
							},
							supportedActions: {
								type: 'array',
								description:
									'The actions that can currently be performed on this fulfillment order. This is a list field, so it has no `nodes` wrapper.',
								items: {
									type: 'object',
									description:
										'One action the fulfillment order supports in its current state.',
									properties: {
										action: {
											type: 'string',
											description:
												'The action value, such as `CREATE_FULFILLMENT`, `REQUEST_FULFILLMENT`, `MOVE`, or `HOLD`. See [FulfillmentOrderAction](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/FulfillmentOrderAction).',
										},
										externalUrl: {
											type: 'string',
											description:
												'The external URL used to start the fulfillment process outside Shopify. Present only when **Action** is `EXTERNAL`.',
										},
									},
									required: [],
								},
							},
							createdAt: {
								type: 'string',
								description:
									'The date and time when the fulfillment order was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the fulfillment order was last updated.',
							},
							fulfillAt: {
								type: 'string',
								description:
									'The date and time at which the fulfillment order becomes fulfillable. Set on scheduled fulfillment orders.',
							},
							fulfillBy: {
								type: 'string',
								description:
									'The latest date and time by which all items in the fulfillment order need to be fulfilled.',
							},
							orderId: {
								type: 'string',
								description:
									'The global ID of the order the fulfillment order belongs to. Pass it to the **Get an order** endpoint for details.',
							},
							orderName: {
								type: 'string',
								description:
									'The unique identifier that appears on the order page in the Shopify admin, such as `#1001`.',
							},
							orderProcessedAt: {
								type: 'string',
								description:
									'The date and time when the order was processed. This may differ from when the order was created.',
							},
							remainingLineItemsWeight: {
								type: 'object',
								description:
									'The total weight of all line items in the fulfillment order that are not yet fulfilled.',
								properties: {
									unit: {
										type: 'string',
										description:
											'The unit of measurement: `GRAMS`, `KILOGRAMS`, `OUNCES`, or `POUNDS`.',
									},
									value: {
										type: 'number',
										description: 'The weight value in the given unit.',
									},
								},
								required: [],
							},
							internationalDuties: {
								type: 'object',
								description: 'The duties delivery method of the fulfillment order.',
								properties: {
									incoterm: {
										type: 'string',
										description:
											'The method of duties payment, such as `DAP` or `DDP`.',
									},
								},
								required: [],
							},
							assignedLocation: {
								type: 'object',
								description:
									'The location where the fulfillment is expected to happen. These are snapshot values and may differ from the current location record.',
								properties: {
									address1: {
										type: 'string',
										description:
											'The first line of the address, typically the street address or PO box number.',
									},
									address2: {
										type: 'string',
										description:
											'The second line of the address, typically the apartment, suite, or unit number.',
									},
									city: {
										type: 'string',
										description:
											'The name of the city, district, village, or town.',
									},
									province: {
										type: 'string',
										description:
											'The name of the region, such as the province, state, or district.',
									},
									countryCode: {
										type: 'string',
										description:
											'The two-letter country code of the address, such as `CZ` for Czechia.',
									},
									zip: {
										type: 'string',
										description: 'The zip or postal code of the address.',
									},
									name: {
										type: 'string',
										description: 'The name of the assigned location.',
									},
									phone: {
										type: 'string',
										description: 'The phone number of the assigned location.',
									},
									location: {
										type: 'object',
										description:
											'The location record behind the assignment. Absent when the location has been deleted.',
										properties: {
											id: {
												type: 'string',
												description: 'The global ID of the location.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							destination: {
								type: 'object',
								description: 'The destination where the items should be sent.',
								properties: {
									address1: {
										type: 'string',
										description:
											'The first line of the address, typically the street address or PO box number.',
									},
									address2: {
										type: 'string',
										description:
											'The second line of the address, typically the apartment, suite, or unit number.',
									},
									city: {
										type: 'string',
										description:
											'The name of the city, district, village, or town.',
									},
									province: {
										type: 'string',
										description:
											'The name of the region, such as the province, state, or district.',
									},
									countryCode: {
										type: 'string',
										description:
											'The two-letter country code of the address, such as `CZ` for Czechia.',
									},
									zip: {
										type: 'string',
										description: 'The zip or postal code of the address.',
									},
									id: {
										type: 'string',
										description:
											'The global ID of the fulfillment order destination.',
									},
									firstName: {
										type: 'string',
										description: 'The first name of the recipient.',
									},
									lastName: {
										type: 'string',
										description: 'The last name of the recipient.',
									},
									company: {
										type: 'string',
										description: 'The company of the recipient.',
									},
									email: {
										type: 'string',
										description: 'The email address of the recipient.',
									},
									phone: {
										type: 'string',
										description: 'The phone number of the recipient.',
									},
								},
								required: [],
							},
							deliveryMethod: {
								type: 'object',
								description: 'The delivery method of the fulfillment order.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the delivery method.',
									},
									methodType: {
										type: 'string',
										description:
											'The type of delivery method, such as `SHIPPING`, `LOCAL`, `PICK_UP`, `RETAIL`, or `NONE`.',
									},
									presentedName: {
										type: 'string',
										description:
											'The name of the delivery option as presented to the buyer.',
									},
									serviceCode: {
										type: 'string',
										description: 'The code of the delivery service provider.',
									},
									sourceReference: {
										type: 'string',
										description:
											'The reference to the shipping method on the source platform.',
									},
									minDeliveryDateTime: {
										type: 'string',
										description:
											'The earliest date and time the delivery is expected.',
									},
									maxDeliveryDateTime: {
										type: 'string',
										description:
											'The latest date and time the delivery is expected.',
									},
									additionalInformation: {
										type: 'object',
										description:
											'Additional delivery instructions supplied by the buyer.',
										properties: {
											instructions: {
												type: 'string',
												description: 'The delivery instructions.',
											},
											phone: {
												type: 'string',
												description:
													'The phone number of the recipient for the delivery.',
											},
										},
										required: [],
									},
									brandedPromise: {
										type: 'object',
										description:
											'The branded delivery promise shown to the buyer, such as Shop Promise.',
										properties: {
											handle: {
												type: 'string',
												description:
													'The handle of the branded promise, such as `shop_promise`.',
											},
											name: {
												type: 'string',
												description:
													'The human-readable name of the branded promise.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							lineItems: {
								type: 'object',
								description:
									'The line items of the fulfillment order. Returned only when **Output line items** is enabled.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of fulfillment order line items.',
										items: {
											type: 'object',
											description: 'A line item of the fulfillment order.',
											properties: {
												id: {
													type: 'string',
													description:
														'The global ID of the fulfillment order line item. This is the ID the **Create a fulfillment** endpoint expects.',
												},
												inventoryItemId: {
													type: 'string',
													description:
														'The global ID of the inventory item of the line item.',
												},
												totalQuantity: {
													type: 'number',
													description:
														'The total number of units of the line item in the fulfillment order.',
												},
												remainingQuantity: {
													type: 'number',
													description:
														'The number of units that are still not fulfilled.',
												},
												productTitle: {
													type: 'string',
													description:
														'The title of the product of the line item.',
												},
												variantTitle: {
													type: 'string',
													description:
														'The title of the product variant of the line item.',
												},
												sku: {
													type: 'string',
													description:
														'The stock keeping unit of the line item.',
												},
												requiresShipping: {
													type: 'boolean',
													description:
														'Whether the line item must be physically shipped.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pageInfo: {
					type: 'object',
					description: 'The cursor information used to paginate through the result set.',
					properties: {
						hasNextPage: {
							type: 'boolean',
							description: 'Whether another page of results exists after this one.',
						},
						hasPreviousPage: {
							type: 'boolean',
							description: 'Whether another page of results exists before this one.',
						},
						startCursor: {
							type: 'string',
							description: 'The cursor of the first result in this page.',
						},
						endCursor: {
							type: 'string',
							description:
								'The cursor of the last result in this page. Pass it as **After** to fetch the next page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'searchMetafields',
		label: 'Search metafields',
		description: 'Returns the metafields attached to any resource, by the resource ID.',
		context:
			'---\nname: searchMetafields\ndescription: Returns the metafields attached to any resource, by the resource ID.\n---\n\nWraps the `node` query of the Shopify GraphQL Admin API with an inline fragment on the `HasMetafields`\ninterface, which every metafield owner implements. That is why a single **Owner ID** is enough and there is no\nresource-type parameter: products, orders, customers, variants, collections, blogs, articles, pages, locations,\ncompanies and the rest all work through the same call.\n\n## Access scopes\n\nThis endpoint declares no scope of its own on purpose. Shopify governs metafield reads with the access level of the\n**owner** resource — reading product metafields needs `read_products`, order metafields need the order scopes, and\nso on. The connection must already carry the right scope for whatever **Owner ID** you pass.\n\n## Filtering\n\n**Namespace** and **Keys** narrow the result. **Keys** uses the `namespace.key` form, so\n`custom.care_guide` rather than just `care_guide`.\n\n## When the ID is not a metafield owner\n\nA valid global ID that belongs to a type without metafields returns an empty result rather than an error, because\nthe inline fragment simply does not match. A non-existent ID fails with "ID not found".\n\n## Pagination\n\nPagination is cursor-based. Read `pageInfo.hasNextPage`; when it is `true`, pass `pageInfo.endCursor` as\n**After** on the next call.\n\n## Related endpoints\n\n- **Set metafields** creates and updates metafields.\n- `compareDigest` returned here is what makes a safe concurrent update possible on that endpoint.\n',
		accounts: { shopify: { scope: [] }, shopify4: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the resource whose metafields you want, such as `gid://shopify/Product/123` or `gid://shopify/Order/123`. Any resource type that supports metafields works.',
				},
				namespace: {
					type: 'string',
					description:
						'Return only metafields in this container. All namespaces are returned when omitted.',
				},
				keys: {
					type: 'array',
					description:
						'Return only these metafields, given as `namespace.key` — for example `custom.care_guide`. They are returned in the same format.',
					items: {
						type: 'string',
						description: 'One metafield identifier in `namespace.key` format.',
					},
				},
				first: {
					type: 'number',
					description:
						'The maximum number of metafields to return in one call. Shopify allows up to 250. Defaults to 10 when omitted.',
					default: 10,
					minimum: 1,
					maximum: 250,
				},
				after: {
					type: 'string',
					description:
						'The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.',
				},
				reverse: {
					type: 'boolean',
					description: 'Whether to reverse the order of the returned metafields.',
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'The metafields attached to the resource.',
					items: {
						type: 'object',
						description: 'A custom field attached to the resource.',
						properties: {
							id: { type: 'string', description: 'The global ID of the metafield.' },
							legacyResourceId: {
								type: 'string',
								description: 'The REST API ID of the metafield.',
							},
							namespace: {
								type: 'string',
								description: 'The container the metafield belongs to.',
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace.',
							},
							value: {
								type: 'string',
								description:
									'The data stored in the metafield, always returned as a string regardless of its type.',
							},
							jsonValue: {
								description:
									'The data stored in the metafield, parsed into its JSON representation.',
							},
							type: {
								type: 'string',
								description:
									'The type of data stored in the metafield, such as `single_line_text_field`. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							ownerType: {
								type: 'string',
								description:
									'The type of resource the metafield is attached to, such as `PRODUCT` or `ORDER`.',
							},
							compareDigest: {
								type: 'string',
								description:
									'A digest of the stored value. Pass it back as **Compare digest** on the **Set metafields** endpoint to update the metafield only if it has not changed since you read it.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the metafield was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the metafield was last updated.',
							},
						},
						required: [],
					},
				},
				pageInfo: {
					type: 'object',
					description: 'The cursor information used to paginate through the result set.',
					properties: {
						hasNextPage: {
							type: 'boolean',
							description: 'Whether another page of results exists after this one.',
						},
						hasPreviousPage: {
							type: 'boolean',
							description: 'Whether another page of results exists before this one.',
						},
						startCursor: {
							type: 'string',
							description: 'The cursor of the first result in this page.',
						},
						endCursor: {
							type: 'string',
							description:
								'The cursor of the last result in this page. Pass it as **After** to fetch the next page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'searchOrders',
		label: 'Search orders',
		description: 'Returns a list of orders that match a search query.',
		context:
			"---\nname: searchOrders\ndescription: Returns a list of orders that match a search query.\n---\n\nWraps the `orders` query of the Shopify GraphQL Admin API. One call returns one page of orders.\n\n## Filtering\n\n**Query** uses the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax), not a structured\nfilter object. Combine terms with `AND` / `OR` and quote values that contain special characters. Examples:\n\n- `financial_status:paid`\n- `created_at:>2026-01-01 AND fulfillment_status:unshipped`\n- `customer_id:123456789` — note that this filter takes the **legacy** numeric ID, not the global ID\n\nThe full list of supported filter keys is in the [`orders` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/orders).\n\n## Pagination\n\nPagination is cursor-based. Read `pageInfo.hasNextPage`; when it is `true`, pass `pageInfo.endCursor` as\n**After** on the next call. Do not attempt offset pagination — the Shopify GraphQL Admin API does not support it.\n\n## Query cost\n\nThe Shopify GraphQL Admin API meters requests by [calculated query cost](https://shopify.dev/docs/api/usage/rate-limits),\nand every connection field multiplies that cost. The **Output …** toggles and their limits exist to control it. A\nrequest that selects line items, product variants, shipping lines, and metafields for 250 orders will be throttled on\na standard 100-point bucket. Start with the default limits and raise them only as needed, or lower **Limit**.\n\n## Related endpoints\n\n- Use `getAnOrder` for one order, including its fulfillment order IDs.\n- Use `updateAnOrder` to change an order's email, note, tags, shipping address, or metafields.\n",
		accounts: {
			shopify: {
				scope: ['read_all_orders', 'read_orders', 'read_customers', 'read_products'],
			},
			shopify4: {
				scope: ['read_all_orders', 'read_orders', 'read_customers', 'read_products'],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description:
						'Filters the orders using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax), such as `financial_status:paid AND created_at:>2026-01-01`. See the [supported filters](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/orders) for the `orders` query. Leave empty to return all orders.',
				},
				first: {
					type: 'number',
					description:
						'The maximum number of orders to return in one call. Shopify allows up to 250. Defaults to 10 when omitted.',
					default: 10,
					minimum: 1,
					maximum: 250,
				},
				after: {
					type: 'string',
					description:
						'The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.',
				},
				sortKey: {
					type: 'string',
					description:
						"The field to sort the orders by. Don't use `RELEVANCE` unless **Query** is set. See [OrderSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/OrderSortKeys).",
					default: '',
					enum: [
						'',
						'CREATED_AT',
						'CURRENT_TOTAL_PRICE',
						'CUSTOMER_NAME',
						'DESTINATION',
						'FINANCIAL_STATUS',
						'FULFILLMENT_STATUS',
						'ID',
						'ORDER_NUMBER',
						'PO_NUMBER',
						'PROCESSED_AT',
						'RELEVANCE',
						'TOTAL_ITEMS_QUANTITY',
						'TOTAL_PRICE',
						'UPDATED_AT',
					],
				},
				reverse: {
					type: 'boolean',
					description:
						'Whether to reverse the sort order. Set to `true` to sort in descending order.',
				},
				lineItems: {
					type: 'boolean',
					description:
						'Whether to include the line items of each order. Increases the query cost.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nLineItems: {
								type: 'number',
								description:
									'The maximum number of line items to include in each order.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				variants: {
					type: 'boolean',
					description:
						'Whether to include the product variants of each line item. Requires **Output line items** and increases the query cost significantly.',
					default: false,
					'x-nested': {
						type: 'object',
						properties: {
							nVariants: {
								type: 'number',
								description:
									'The maximum number of product variants to include in each line item.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				customer: {
					type: 'boolean',
					description:
						'Whether to include the customer details of each order. The shipping and billing addresses are returned regardless of this setting.',
					default: true,
				},
				shippingLines: {
					type: 'boolean',
					description: 'Whether to include the shipping lines of each order.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nShippingLines: {
								type: 'number',
								description:
									'The maximum number of shipping lines to include in each order.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				metafields: {
					type: 'boolean',
					description: 'Whether to include the metafields of each order.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nMetafields: {
								type: 'number',
								description:
									'The maximum number of metafields to include in each order.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'The list of orders that match the query.',
					items: {
						type: 'object',
						description: 'An order placed in the shop.',
						properties: {
							id: {
								type: 'string',
								description:
									'The global ID of the order, such as `gid://shopify/Order/123`.',
							},
							legacyResourceId: {
								type: 'string',
								description: 'The REST API ID of the order.',
							},
							name: {
								type: 'string',
								description:
									'The unique identifier of the order that appears on the order, such as `#1001`.',
							},
							email: {
								type: 'string',
								description: 'The email address associated with the order.',
							},
							phone: {
								type: 'string',
								description:
									'The phone number associated with the order, in E.164 format.',
							},
							poNumber: {
								type: 'string',
								description: 'The purchase order number associated with the order.',
							},
							displayFinancialStatus: {
								type: 'string',
								description:
									'The financial status of the order, such as `PAID`. See [OrderDisplayFinancialStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/OrderDisplayFinancialStatus).',
							},
							displayFulfillmentStatus: {
								type: 'string',
								description:
									'The fulfillment status of the order, such as `UNFULFILLED`. See [OrderDisplayFulfillmentStatus](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/OrderDisplayFulfillmentStatus).',
							},
							confirmed: {
								type: 'boolean',
								description: 'Whether inventory has been reserved for the order.',
							},
							confirmationNumber: {
								type: 'string',
								description:
									'The randomly generated code shown to the customer to confirm the order.',
							},
							tags: {
								type: 'array',
								description: 'The tags attached to the order.',
								items: {
									type: 'string',
									description: 'A tag attached to the order.',
								},
							},
							statusPageUrl: {
								type: 'string',
								description: 'The URL of the order status page for the customer.',
							},
							note: {
								type: 'string',
								description: 'The note associated with the order.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the order was created.',
							},
							updatedAt: {
								type: 'string',
								description: 'The date and time when the order was last modified.',
							},
							billingAddressMatchesShippingAddress: {
								type: 'boolean',
								description:
									'Whether the billing address matches the shipping address.',
							},
							fullyPaid: {
								type: 'boolean',
								description: 'Whether the order has been paid in full.',
							},
							totalPriceSet: {
								type: 'object',
								description:
									'The total price of the order, including taxes, shipping, and discounts.',
								properties: {
									presentmentMoney: {
										type: 'object',
										description:
											"The amount in the customer's presentment currency.",
										properties: {
											amount: {
												type: 'string',
												description:
													'The decimal monetary amount, serialized as a string.',
											},
											currencyCode: {
												type: 'string',
												description:
													'The three-letter currency code in ISO 4217 format, such as `USD`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							shippingAddress: {
								type: 'object',
								description: 'The mailing address the order is shipped to.',
								properties: {
									name: {
										type: 'string',
										description: 'The full name of the person at this address.',
									},
									firstName: {
										type: 'string',
										description:
											'The first name of the person at this address.',
									},
									lastName: {
										type: 'string',
										description: 'The last name of the person at this address.',
									},
									phone: {
										type: 'string',
										description:
											'The phone number at this address, in E.164 format.',
									},
									company: {
										type: 'string',
										description: 'The company or organization at this address.',
									},
									address1: {
										type: 'string',
										description:
											'The first line of the address, typically the street address or PO box number.',
									},
									address2: {
										type: 'string',
										description:
											'The second line of the address, typically the apartment, suite, or unit number.',
									},
									city: {
										type: 'string',
										description:
											'The name of the city, district, village, or town.',
									},
									province: {
										type: 'string',
										description:
											'The name of the region, such as the province, state, or district.',
									},
									provinceCode: {
										type: 'string',
										description:
											'The code for the region, such as `QC` for Quebec, Canada.',
									},
									country: {
										type: 'string',
										description: 'The name of the country.',
									},
									countryCodeV2: {
										type: 'string',
										description:
											'The two-letter country code of the address, such as `CZ` for Czechia.',
									},
									zip: {
										type: 'string',
										description: 'The zip or postal code of the address.',
									},
								},
								required: [],
							},
							billingAddress: {
								type: 'object',
								description:
									'The mailing address associated with the payment method.',
								properties: {
									name: {
										type: 'string',
										description: 'The full name of the person at this address.',
									},
									firstName: {
										type: 'string',
										description:
											'The first name of the person at this address.',
									},
									lastName: {
										type: 'string',
										description: 'The last name of the person at this address.',
									},
									phone: {
										type: 'string',
										description:
											'The phone number at this address, in E.164 format.',
									},
									company: {
										type: 'string',
										description: 'The company or organization at this address.',
									},
									address1: {
										type: 'string',
										description:
											'The first line of the address, typically the street address or PO box number.',
									},
									address2: {
										type: 'string',
										description:
											'The second line of the address, typically the apartment, suite, or unit number.',
									},
									city: {
										type: 'string',
										description:
											'The name of the city, district, village, or town.',
									},
									province: {
										type: 'string',
										description:
											'The name of the region, such as the province, state, or district.',
									},
									provinceCode: {
										type: 'string',
										description:
											'The code for the region, such as `QC` for Quebec, Canada.',
									},
									country: {
										type: 'string',
										description: 'The name of the country.',
									},
									countryCodeV2: {
										type: 'string',
										description:
											'The two-letter country code of the address, such as `CZ` for Czechia.',
									},
									zip: {
										type: 'string',
										description: 'The zip or postal code of the address.',
									},
								},
								required: [],
							},
							customer: {
								type: 'object',
								description:
									'The customer associated with the order. Returned only when **Output customer details** is enabled.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the customer.',
									},
									legacyResourceId: {
										type: 'string',
										description: 'The REST API ID of the customer.',
									},
									firstName: {
										type: 'string',
										description: 'The first name of the customer.',
									},
									lastName: {
										type: 'string',
										description: 'The last name of the customer.',
									},
									displayName: {
										type: 'string',
										description:
											'The full name of the customer, based on the first and last names.',
									},
									verifiedEmail: {
										type: 'boolean',
										description:
											'Whether the customer has verified their email address.',
									},
									note: {
										type: 'string',
										description: 'The note associated with the customer.',
									},
									tags: {
										type: 'array',
										description: 'The tags attached to the customer.',
										items: {
											type: 'string',
											description: 'A tag attached to the customer.',
										},
									},
									numberOfOrders: {
										type: 'string',
										description:
											'The number of orders the customer has placed, returned as a string.',
									},
									defaultEmailAddress: {
										type: 'object',
										description:
											'The default email address of the customer and its marketing state.',
										properties: {
											emailAddress: {
												type: 'string',
												description: 'The email address of the customer.',
											},
											marketingOptInLevel: {
												type: 'string',
												description:
													'The marketing subscription opt-in level used when the customer consented to receive marketing material by email.',
											},
											marketingState: {
												type: 'string',
												description:
													'The current email marketing state of the customer.',
											},
											validFormat: {
												type: 'boolean',
												description:
													'Whether the email address is formatted correctly.',
											},
										},
										required: [],
									},
									defaultPhoneNumber: {
										type: 'object',
										description:
											'The default phone number of the customer and its marketing state.',
										properties: {
											phoneNumber: {
												type: 'string',
												description:
													'The phone number of the customer, in E.164 format.',
											},
											marketingOptInLevel: {
												type: 'string',
												description:
													'The marketing subscription opt-in level used when the customer consented to receive marketing material by SMS.',
											},
											marketingState: {
												type: 'string',
												description:
													'The current SMS marketing state of the customer.',
											},
										},
										required: [],
									},
									defaultAddress: {
										type: 'object',
										description: 'The default mailing address of the customer.',
										properties: {
											name: {
												type: 'string',
												description:
													'The full name of the person at this address.',
											},
											firstName: {
												type: 'string',
												description:
													'The first name of the person at this address.',
											},
											lastName: {
												type: 'string',
												description:
													'The last name of the person at this address.',
											},
											phone: {
												type: 'string',
												description:
													'The phone number at this address, in E.164 format.',
											},
											company: {
												type: 'string',
												description:
													'The company or organization at this address.',
											},
											address1: {
												type: 'string',
												description:
													'The first line of the address, typically the street address or PO box number.',
											},
											address2: {
												type: 'string',
												description:
													'The second line of the address, typically the apartment, suite, or unit number.',
											},
											city: {
												type: 'string',
												description:
													'The name of the city, district, village, or town.',
											},
											province: {
												type: 'string',
												description:
													'The name of the region, such as the province, state, or district.',
											},
											provinceCode: {
												type: 'string',
												description:
													'The code for the region, such as `QC` for Quebec, Canada.',
											},
											country: {
												type: 'string',
												description: 'The name of the country.',
											},
											countryCodeV2: {
												type: 'string',
												description:
													'The two-letter country code of the address, such as `CZ` for Czechia.',
											},
											zip: {
												type: 'string',
												description:
													'The zip or postal code of the address.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							shippingLines: {
								type: 'object',
								description:
									'The shipping methods applied to the order. Returned only when **Output shipping lines** is enabled.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of shipping lines.',
										items: {
											type: 'object',
											description: 'A shipping method applied to the order.',
											properties: {
												id: {
													type: 'string',
													description:
														'The global ID of the shipping line.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							lineItems: {
								type: 'object',
								description:
									'The line items of the order. Returned only when **Output line items** is enabled.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of line items.',
										items: {
											type: 'object',
											description: 'A line item of the order.',
											properties: {
												id: {
													type: 'string',
													description: 'The global ID of the line item.',
												},
												sku: {
													type: 'string',
													description:
														'The stock keeping unit of the line item variant.',
												},
												quantity: {
													type: 'number',
													description: 'The number of units ordered.',
												},
												originalUnitPriceSet: {
													type: 'object',
													description:
														'The unit price of the line item before discounts.',
													properties: {
														presentmentMoney: {
															type: 'object',
															description:
																"The amount in the customer's presentment currency.",
															properties: {
																amount: {
																	type: 'string',
																	description:
																		'The decimal monetary amount, serialized as a string.',
																},
																currencyCode: {
																	type: 'string',
																	description:
																		'The three-letter currency code in ISO 4217 format, such as `USD`.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												discountedUnitPriceSet: {
													type: 'object',
													description:
														'The unit price of the line item after line-level discounts.',
													properties: {
														presentmentMoney: {
															type: 'object',
															description:
																"The amount in the customer's presentment currency.",
															properties: {
																amount: {
																	type: 'string',
																	description:
																		'The decimal monetary amount, serialized as a string.',
																},
																currencyCode: {
																	type: 'string',
																	description:
																		'The three-letter currency code in ISO 4217 format, such as `USD`.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												discountedUnitPriceAfterAllDiscountsSet: {
													type: 'object',
													description:
														'The unit price of the line item after all line-level and order-level discounts.',
													properties: {
														presentmentMoney: {
															type: 'object',
															description:
																"The amount in the customer's presentment currency.",
															properties: {
																amount: {
																	type: 'string',
																	description:
																		'The decimal monetary amount, serialized as a string.',
																},
																currencyCode: {
																	type: 'string',
																	description:
																		'The three-letter currency code in ISO 4217 format, such as `USD`.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												variant: {
													type: 'object',
													description:
														'The product variant of the line item. Returned only when **Output product variants** is enabled.',
													properties: {
														id: {
															type: 'string',
															description:
																'The global ID of the product variant.',
														},
														legacyResourceId: {
															type: 'string',
															description:
																'The REST API ID of the product variant.',
														},
														displayName: {
															type: 'string',
															description:
																'The product title combined with the variant selected options.',
														},
														sku: {
															type: 'string',
															description:
																'The stock keeping unit of the product variant.',
														},
														taxable: {
															type: 'boolean',
															description:
																'Whether a tax is charged when the product variant is sold.',
														},
														availableForSale: {
															type: 'boolean',
															description:
																'Whether the product variant is available for sale.',
														},
														inventoryQuantity: {
															type: 'number',
															description:
																'The total sellable quantity of the product variant.',
														},
														barcode: {
															type: 'string',
															description:
																'The barcode of the product variant, such as an ISBN, UPC, or GTIN.',
														},
													},
													required: [],
												},
												product: {
													type: 'object',
													description: 'The product of the line item.',
													properties: {
														id: {
															type: 'string',
															description:
																'The global ID of the product.',
														},
														legacyResourceId: {
															type: 'string',
															description:
																'The REST API ID of the product.',
														},
														totalInventory: {
															type: 'number',
															description:
																'The quantity of inventory that is in stock across all locations.',
														},
														tracksInventory: {
															type: 'boolean',
															description:
																'Whether inventory tracking has been enabled for the product.',
														},
														variants: {
															type: 'object',
															description:
																'The variants of the product. Returned only when **Output product variants** is enabled.',
															properties: {
																nodes: {
																	type: 'array',
																	description:
																		'The list of product variants.',
																	items: {
																		type: 'object',
																		description:
																			'A variant of the product.',
																		properties: {
																			id: {
																				type: 'string',
																				description:
																					'The global ID of the product variant.',
																			},
																			legacyResourceId: {
																				type: 'string',
																				description:
																					'The REST API ID of the product variant.',
																			},
																			displayName: {
																				type: 'string',
																				description:
																					'The product title combined with the variant selected options.',
																			},
																			sku: {
																				type: 'string',
																				description:
																					'The stock keeping unit of the product variant.',
																			},
																			taxable: {
																				type: 'boolean',
																				description:
																					'Whether a tax is charged when the product variant is sold.',
																			},
																			availableForSale: {
																				type: 'boolean',
																				description:
																					'Whether the product variant is available for sale.',
																			},
																			inventoryQuantity: {
																				type: 'number',
																				description:
																					'The total sellable quantity of the product variant.',
																			},
																			barcode: {
																				type: 'string',
																				description:
																					'The barcode of the product variant, such as an ISBN, UPC, or GTIN.',
																			},
																		},
																		required: [],
																	},
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
								},
								required: [],
							},
							metafields: {
								type: 'object',
								description:
									'The metafields of the order. Returned only when **Output order metafields** is enabled.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of metafields.',
										items: {
											type: 'object',
											description:
												'A metafield holding additional information about the resource.',
											properties: {
												id: {
													type: 'string',
													description: 'The global ID of the metafield.',
												},
												namespace: {
													type: 'string',
													description:
														'The container the metafield belongs to.',
												},
												legacyResourceId: {
													type: 'string',
													description:
														'The REST API ID of the metafield.',
												},
												key: {
													type: 'string',
													description:
														'The unique identifier of the metafield within its namespace.',
												},
												value: {
													type: 'string',
													description:
														'The data stored in the metafield, always returned as a string.',
												},
												jsonValue: {
													description:
														'The data stored in the metafield, parsed into its JSON representation.',
												},
												type: {
													type: 'string',
													description:
														'The metafield type, such as `single_line_text_field`. See the [supported metafield types](https://shopify.dev/docs/api/admin-graphql/2026-04/../../apps/build/custom-data/metafields/list-of-data-types).',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pageInfo: {
					type: 'object',
					description: 'The cursor information used to paginate through the result set.',
					properties: {
						hasNextPage: {
							type: 'boolean',
							description: 'Whether another page of results exists after this one.',
						},
						hasPreviousPage: {
							type: 'boolean',
							description: 'Whether another page of results exists before this one.',
						},
						startCursor: {
							type: 'string',
							description: 'The cursor of the first result in this page.',
						},
						endCursor: {
							type: 'string',
							description:
								'The cursor of the last result in this page. Pass it as **After** to fetch the next page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'searchProducts',
		label: 'Search products',
		description: 'Returns a list of products that match a search query.',
		context:
			'---\nname: searchProducts\ndescription: Returns a list of products that match a search query.\n---\n\nWraps the `products` query of the Shopify GraphQL Admin API. One call returns one page of products.\n\n## Filtering\n\n**Query** uses the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax). Keyed terms match a\nspecific field; a bare term runs a full-text search. Two things to know:\n\n- `title:t-shirt` matches the **exact** title only. It will not find "Make T-shirt".\n- A bare `t-shirt` searches the title, description, and other fields, and does match partial values.\n- Avoid the reserved words `AND`, `OR`, and `NOT` and the `:` character inside unquoted values.\n\nThe full list of supported filter keys is in the [`products` query reference](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/products).\n\n## Media\n\nProduct media is returned under `media.nodes` (images, videos, external videos, and 3D models), selected through the\n`media` connection because the `images` field is deprecated in the Shopify API. Every node has `id`, `alt`,\n`mediaContentType`, `status`, and a `preview.image`. For nodes whose `mediaContentType` is `IMAGE`, `image.url` is the URL\nof the original image. `image` and `preview.image` are `null` until `status` is `READY`.\n\n## Pagination\n\nPagination is cursor-based. Read `pageInfo.hasNextPage`; when it is `true`, pass `pageInfo.endCursor` as\n**After** on the next call.\n\n## Query cost\n\nThe Shopify GraphQL Admin API meters requests by [calculated query cost](https://shopify.dev/docs/api/usage/rate-limits).\nThe **Output …** toggles and their limits control it. Selecting variants and metafields for 250 products will be\nthrottled on a standard 100-point bucket; start with the default limits and raise them only as needed.\n\n## Related endpoints\n\n- `getProduct` returns one product by ID.\n- The variant IDs returned under **Variants** are the input of the product variant endpoints.\n',
		accounts: { shopify: { scope: ['read_products'] }, shopify4: { scope: ['read_products'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description:
						'Filters the products using the [Shopify search syntax](https://shopify.dev/docs/api/usage/search-syntax), such as `status:ACTIVE AND vendor:Make`. A bare term without a key runs a full-text search across the title, description, and more. See the [supported filters](https://shopify.dev/docs/api/admin-graphql/2026-04/queries/products) for the `products` query. Leave empty to return all products.',
				},
				first: {
					type: 'number',
					description:
						'The maximum number of products to return in one call. Shopify allows up to 250. Defaults to 10 when omitted.',
					default: 10,
					minimum: 1,
					maximum: 250,
				},
				after: {
					type: 'string',
					description:
						'The cursor to start the page from. Pass the **End cursor** returned by a previous call to fetch the next page.',
				},
				sortKey: {
					type: 'string',
					description:
						"The field to sort the products by. Don't use `RELEVANCE` unless **Query** is set. See [ProductSortKeys](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/ProductSortKeys).",
					default: '',
					enum: [
						'',
						'CREATED_AT',
						'ID',
						'INVENTORY_TOTAL',
						'PRODUCT_TYPE',
						'PUBLISHED_AT',
						'RELEVANCE',
						'TITLE',
						'UPDATED_AT',
						'VENDOR',
					],
				},
				reverse: {
					type: 'boolean',
					description:
						'Whether to reverse the sort order. Set to `true` to sort in descending order.',
				},
				images: {
					type: 'boolean',
					description:
						'Whether to include the media of each product, such as images. Returned as `media`.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nImages: {
								type: 'number',
								description:
									'The maximum number of product media objects to include in each product.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				options: {
					type: 'boolean',
					description:
						'Whether to include the options of each product, such as size or color.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nOptions: {
								type: 'number',
								description:
									'The maximum number of product options to include in each product.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				variants: {
					type: 'boolean',
					description:
						'Whether to include the variants of each product. Increases the query cost.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nVariants: {
								type: 'number',
								description:
									'The maximum number of product variants to include in each product.',
								default: 5,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
				metafields: {
					type: 'boolean',
					description: 'Whether to include the metafields of each product.',
					default: true,
					'x-nested': {
						type: 'object',
						properties: {
							nMetafields: {
								type: 'number',
								description:
									'The maximum number of metafields to include in each product.',
								default: 10,
								minimum: 1,
								maximum: 250,
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				nodes: {
					type: 'array',
					description: 'The list of products that match the query.',
					items: {
						type: 'object',
						description: 'A product in the shop.',
						properties: {
							id: {
								type: 'string',
								description:
									'The global ID of the product, such as `gid://shopify/Product/123`.',
							},
							legacyResourceId: {
								type: 'string',
								description: 'The REST API ID of the product.',
							},
							descriptionHtml: {
								type: 'string',
								description: 'The description of the product, including HTML tags.',
							},
							templateSuffix: {
								type: 'string',
								description:
									'The theme template used when customers view the product in the store.',
							},
							handle: {
								type: 'string',
								description:
									'The unique, human-readable string used to identify the product in URLs.',
							},
							tags: {
								type: 'array',
								description: 'The searchable keywords associated with the product.',
								items: {
									type: 'string',
									description: 'A tag associated with the product.',
								},
							},
							status: {
								type: 'string',
								description:
									'The product status, which controls visibility across all sales channels: `ACTIVE`, `ARCHIVED`, or `DRAFT`.',
							},
							publishedAt: {
								type: 'string',
								description:
									'The date and time when the product was published to the online store.',
							},
							productType: {
								type: 'string',
								description: 'The product type that the merchant defined.',
							},
							vendor: {
								type: 'string',
								description: "The name of the product's vendor.",
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the product was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the product was last modified.',
							},
							category: {
								type: 'object',
								description: 'The taxonomy category associated with the product.',
								properties: {
									id: {
										type: 'string',
										description: 'The global ID of the taxonomy category.',
									},
									name: {
										type: 'string',
										description: 'The name of the taxonomy category.',
									},
									fullName: {
										type: 'string',
										description:
											'The full name of the taxonomy category, including its ancestors.',
									},
									level: {
										type: 'number',
										description:
											'The depth of the category in the taxonomy tree.',
									},
									isLeaf: {
										type: 'boolean',
										description: 'Whether the category has no children.',
									},
									isRoot: {
										type: 'boolean',
										description: 'Whether the category has no parent.',
									},
									isArchived: {
										type: 'boolean',
										description: 'Whether the category is archived.',
									},
									parentId: {
										type: 'string',
										description: 'The global ID of the parent category.',
									},
									ancestorIds: {
										type: 'array',
										description: 'The global IDs of all ancestor categories.',
										items: {
											type: 'string',
											description: 'The global ID of an ancestor category.',
										},
									},
									childrenIds: {
										type: 'array',
										description:
											'The global IDs of all direct child categories.',
										items: {
											type: 'string',
											description: 'The global ID of a child category.',
										},
									},
								},
								required: [],
							},
							media: {
								type: 'object',
								description:
									'The media of the product. Returned only when **Output product images** is enabled.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of product media.',
										items: {
											type: 'object',
											description:
												'A media object of the product, such as an image, video, or 3D model.',
											properties: {
												id: {
													type: 'string',
													description: 'The global ID of the media.',
												},
												alt: {
													type: 'string',
													description:
														'A word or phrase that describes the nature or contents of the media.',
												},
												mediaContentType: {
													type: 'string',
													description:
														'The content type of the media. Possible values are `IMAGE`, `VIDEO`, `EXTERNAL_VIDEO`, and `MODEL_3D`.',
												},
												status: {
													type: 'string',
													description:
														'The current status of the media. Possible values are `UPLOADED`, `PROCESSING`, `READY`, and `FAILED`.',
												},
												preview: {
													type: 'object',
													description: 'The preview of the media.',
													properties: {
														image: {
															type: 'object',
															description:
																'The preview image of the media. Is `null` until the preview is processed.',
															properties: {
																url: {
																	type: 'string',
																	description:
																		'The URL of the preview image.',
																},
																altText: {
																	type: 'string',
																	description:
																		'The alternative text describing the preview image.',
																},
															},
															required: [],
														},
													},
													required: [],
												},
												image: {
													type: 'object',
													description:
														'The original image of the media. Returned only for media whose content type is `IMAGE`, and is `null` until the status is `READY`.',
													properties: {
														id: {
															type: 'string',
															description:
																'The global ID of the image.',
														},
														url: {
															type: 'string',
															description:
																'The URL of the original, unmodified image.',
														},
														altText: {
															type: 'string',
															description:
																'The alternative text describing the image.',
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
							options: {
								type: 'array',
								description:
									'The options of the product, such as size or color. Returned only when **Output product options** is enabled. This is a list field, so it has no `nodes` wrapper.',
								items: {
									type: 'object',
									description: 'An option of the product.',
									properties: {
										id: {
											type: 'string',
											description: 'The global ID of the product option.',
										},
										name: {
											type: 'string',
											description:
												'The name of the product option, such as `Size`.',
										},
										position: {
											type: 'number',
											description:
												'The position of the option in the list of options, starting at 1.',
										},
										values: {
											type: 'array',
											description: 'The values associated with the option.',
											items: {
												type: 'string',
												description: 'A value associated with the option.',
											},
										},
										linkedMetafield: {
											type: 'object',
											description:
												'The metafield the option is linked to, if any.',
											properties: {
												key: {
													type: 'string',
													description: 'The key of the linked metafield.',
												},
												namespace: {
													type: 'string',
													description:
														'The namespace of the linked metafield.',
												},
											},
											required: [],
										},
									},
									required: [],
								},
							},
							variants: {
								type: 'object',
								description:
									'The variants of the product. Returned only when **Output product variants** is enabled.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of product variants.',
										items: {
											type: 'object',
											description: 'A variant of the product.',
											properties: {
												id: {
													type: 'string',
													description:
														'The global ID of the product variant.',
												},
												sku: {
													type: 'string',
													description:
														'The stock keeping unit of the product variant.',
												},
												displayName: {
													type: 'string',
													description:
														'The product title combined with the variant selected options.',
												},
												barcode: {
													type: 'string',
													description:
														'The barcode of the product variant, such as an ISBN, UPC, or GTIN.',
												},
												price: {
													type: 'string',
													description:
														'The price of the product variant in the shop currency, serialized as a decimal string.',
												},
												compareAtPrice: {
													type: 'string',
													description:
														'The original price of the product variant before a sale, serialized as a decimal string.',
												},
												inventoryQuantity: {
													type: 'number',
													description:
														'The total sellable quantity of the product variant.',
												},
												inventoryItem: {
													type: 'object',
													description:
														'The inventory item of the product variant.',
													properties: {
														id: {
															type: 'string',
															description:
																'The global ID of the inventory item. Use it with the inventory level endpoints.',
														},
														requiresShipping: {
															type: 'boolean',
															description:
																'Whether the inventory item requires shipping.',
														},
													},
													required: [],
												},
												product: {
													type: 'object',
													description:
														'The product the variant belongs to.',
													properties: {
														id: {
															type: 'string',
															description:
																'The global ID of the product.',
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
							metafields: {
								type: 'object',
								description:
									'The metafields of the product. Returned only when **Output product metafields** is enabled.',
								properties: {
									nodes: {
										type: 'array',
										description: 'The list of metafields.',
										items: {
											type: 'object',
											description:
												'A metafield holding additional information about the resource.',
											properties: {
												id: {
													type: 'string',
													description: 'The global ID of the metafield.',
												},
												namespace: {
													type: 'string',
													description:
														'The container the metafield belongs to.',
												},
												legacyResourceId: {
													type: 'string',
													description:
														'The REST API ID of the metafield.',
												},
												key: {
													type: 'string',
													description:
														'The unique identifier of the metafield within its namespace.',
												},
												value: {
													type: 'string',
													description:
														'The data stored in the metafield, always returned as a string.',
												},
												jsonValue: {
													description:
														'The data stored in the metafield, parsed into its JSON representation.',
												},
												type: {
													type: 'string',
													description:
														'The metafield type, such as `single_line_text_field`. See the [supported metafield types](https://shopify.dev/docs/api/admin-graphql/2026-04/../../apps/build/custom-data/metafields/list-of-data-types).',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pageInfo: {
					type: 'object',
					description: 'The cursor information used to paginate through the result set.',
					properties: {
						hasNextPage: {
							type: 'boolean',
							description: 'Whether another page of results exists after this one.',
						},
						hasPreviousPage: {
							type: 'boolean',
							description: 'Whether another page of results exists before this one.',
						},
						startCursor: {
							type: 'string',
							description: 'The cursor of the first result in this page.',
						},
						endCursor: {
							type: 'string',
							description:
								'The cursor of the last result in this page. Pass it as **After** to fetch the next page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'setMetafields',
		label: 'Set metafields',
		description: 'Creates or updates up to 25 metafields on one or more resources.',
		context:
			'---\nname: setMetafields\ndescription: Creates or updates up to 25 metafields on one or more resources.\n---\n\nWraps the `metafieldsSet` mutation of the Shopify GraphQL Admin API.\n\n## It is an upsert, and it is bulk\n\nThe mutation sets values whether or not the metafield already existed, so there is no separate create and update.\n**Metafields** is an array of up to 25 entries and they can target different resources in the same call. The whole\noperation is atomic: one bad entry means nothing is written.\n\n## Access scopes\n\nThis endpoint declares no scope of its own on purpose. Shopify requires the same access level needed to **mutate the\nowner resource** — setting a metafield on a product needs `write_products`, on an order the order write scopes, and\nso on. The connection must already carry the right scope for each **Owner ID** you pass.\n\n## Namespace\n\nOmitting **Namespace** stores the metafield in the app-reserved namespace, where only this app can see it. Supply an\nexplicit namespace such as `custom` when the value should be visible to the merchant and to themes.\n\n## Type\n\n**Type** is required unless a metafield definition already exists for that namespace, key and owner type. Sending\nthe wrong type for an existing definition is rejected.\n\n## Safe concurrent updates\n\nRead the metafield with the **Search metafields** endpoint, take its `compareDigest`, and pass it back here. The\nwrite then only lands if nobody changed the value in between. Pass `null` to assert the metafield does not exist\nyet. Omit it entirely to overwrite unconditionally.\n\n## Output\n\nReturns the metafields that were set plus `userErrors`. A non-empty `userErrors` list fails the call with the\nShopify messages.\n',
		accounts: { shopify: { scope: [] }, shopify4: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				metafields: {
					type: 'array',
					description:
						'The metafield values to set. A maximum of 25 per call, with a total payload under 10 MB. The operation is atomic: if one entry fails, none are written.',
					items: {
						type: 'object',
						description: 'One metafield value to set on one resource.',
						properties: {
							ownerId: {
								type: 'string',
								description:
									'The global ID of the resource to attach the metafield to, such as `gid://shopify/Product/123`.',
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace. 2-64 characters, alphanumeric plus hyphen and underscore.',
								minimum: 2,
								maximum: 64,
							},
							value: {
								type: 'string',
								description:
									'The data to store. Always sent as a string regardless of the type — for structured types such as `json` or `dimension`, pass the JSON-encoded value.',
							},
							namespace: {
								type: 'string',
								description:
									'The container to group the metafield under. 3-255 characters. The app-reserved namespace is used when omitted, which makes the metafield invisible to other apps.',
								minimum: 3,
								maximum: 255,
							},
							type: {
								type: 'string',
								description:
									'The type of data stored, such as `single_line_text_field` or `number_integer`. Required unless a metafield definition already exists for this namespace, key and owner type. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							compareDigest: {
								type: 'string',
								description:
									'The digest read from a previous query, for a safe concurrent update: the write only happens if the stored value still matches. Pass `null` when the metafield does not exist yet but you still want the guarantee. Omit it to write unconditionally. The **Search metafields** endpoint returns it as `compareDigest`.',
							},
						},
						required: ['ownerId', 'key', 'value'],
					},
					minItems: 1,
					maxItems: 25,
				},
			},
			required: ['metafields'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				metafields: {
					type: 'array',
					description:
						'The metafields that were set. This is a list field, so it has no `nodes` wrapper.',
					items: {
						type: 'object',
						description: 'One metafield that was set.',
						properties: {
							id: { type: 'string', description: 'The global ID of the metafield.' },
							legacyResourceId: {
								type: 'string',
								description: 'The REST API ID of the metafield.',
							},
							namespace: {
								type: 'string',
								description: 'The container the metafield belongs to.',
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace.',
							},
							value: {
								type: 'string',
								description:
									'The data stored in the metafield, always returned as a string regardless of its type.',
							},
							jsonValue: {
								description:
									'The data stored in the metafield, parsed into its JSON representation.',
							},
							type: {
								type: 'string',
								description:
									'The type of data stored in the metafield, such as `single_line_text_field`. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							ownerType: {
								type: 'string',
								description:
									'The type of resource the metafield is attached to, such as `PRODUCT` or `ORDER`.',
							},
							compareDigest: {
								type: 'string',
								description:
									'A digest of the stored value. Pass it back as **Compare digest** on the **Set metafields** endpoint to update the metafield only if it has not changed since you read it.',
							},
							createdAt: {
								type: 'string',
								description: 'The date and time when the metafield was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the metafield was last updated.',
							},
						},
						required: [],
					},
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The module fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'updateACustomer',
		label: 'Update a customer',
		description: 'Updates the contact details, tags, and metafields of a customer.',
		context:
			'---\nname: updateACustomer\ndescription: Updates the contact details, tags, and metafields of a customer.\n---\n\nWraps the `customerUpdate` mutation of the Shopify GraphQL Admin API. Every input field is part of `CustomerInput`.\n\n## Partial update semantics\n\nFields you omit are left unchanged, so this behaves like a PATCH. The exception is **Tags**, which **overwrites** the\nexisting tags — call `getACustomer` first and resend every tag you want to keep, or use the `tagsAdd` mutation\nthrough the Arbitrary call endpoint.\n\n## Marketing consent is not exposed here\n\n`CustomerInput` does carry `emailMarketingConsent` and `smsMarketingConsent`, but this endpoint deliberately\nleaves them out: changing an existing customer\'s consent belongs to the dedicated\n`customerEmailMarketingConsentUpdate` and `customerSmsMarketingConsentUpdate` mutations, which record the consent\nsource and are what the "Update a customer" module uses. Call them through the **Arbitrary call** endpoint.\n\nConsent can still be set at creation time with the **Create a customer** endpoint.\n\n## Addresses\n\nAddresses are deliberately **not** exposed here: `CustomerInput.addresses` is deprecated in the Shopify API. Use the\n`customerAddressUpdate` and `customerAddressCreate` mutations through the Arbitrary call endpoint.\n\n## Output\n\nThe mutation returns the updated customer ID plus `userErrors`. A non-empty `userErrors` list fails the call with\nthe Shopify messages.\n',
		accounts: {
			shopify: { scope: ['write_customers'] },
			shopify4: { scope: ['write_customers'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the customer to update, such as `gid://shopify/Customer/123`.',
				},
				firstName: { type: 'string', description: 'The first name of the customer.' },
				lastName: { type: 'string', description: 'The last name of the customer.' },
				email: {
					type: 'string',
					description:
						'The unique email address of the customer. Required when setting email marketing consent.',
				},
				phone: {
					type: 'string',
					description:
						'The unique phone number of the customer, in E.164 format such as `+16135551212`. Required when setting SMS marketing consent.',
				},
				locale: {
					type: 'string',
					description: 'The locale of the customer, such as `en` or `cs`.',
				},
				note: { type: 'string', description: 'A note about the customer.' },
				tags: {
					type: 'array',
					description:
						'The tags to associate with the customer. This **overwrites** any existing tags. A customer can have up to 250 tags. Use the `tagsAdd` mutation through the Arbitrary call endpoint to add tags without replacing them.',
					items: { type: 'string', description: 'A tag to associate with the customer.' },
				},
				taxExempt: {
					type: 'boolean',
					description:
						'Whether the customer is exempt from paying taxes on their orders.',
				},
				taxExemptions: {
					type: 'array',
					description:
						'The tax exemptions to apply to the customer, such as `CA_STATUS_CARD_EXEMPTION` or `US_NY_RESELLER_EXEMPTION`. See [TaxExemption](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/TaxExemption) for the full list of values.',
					items: {
						type: 'string',
						description:
							'One tax exemption value from the Shopify `TaxExemption` enum.',
					},
				},
				multipassIdentifier: {
					type: 'string',
					description: 'A unique identifier for the customer used with multipass login.',
				},
				metafields: {
					type: 'array',
					description: 'The metafields to associate with the customer.',
					items: {
						type: 'object',
						description:
							'A metafield holding additional information about the resource.',
						properties: {
							namespace: {
								type: 'string',
								description:
									'The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 3,
								maximum: 255,
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 2,
								maximum: 64,
							},
							type: {
								type: 'string',
								description:
									'The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							value: {
								type: 'string',
								description:
									'The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.',
							},
							id: {
								type: 'string',
								description:
									'The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.',
							},
						},
						required: [],
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				customer: {
					type: 'object',
					description:
						'The updated customer. Call the Get a customer endpoint with this ID for the full customer details.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the updated customer.',
						},
						legacyResourceId: {
							type: 'string',
							description: 'The REST API ID of the updated customer.',
						},
						displayName: {
							type: 'string',
							description:
								'The full name of the customer, based on the first and last names.',
						},
						createdAt: {
							type: 'string',
							description: 'The date and time when the customer was created.',
						},
						updatedAt: {
							type: 'string',
							description: 'The date and time when the customer was last modified.',
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'updateAnOrder',
		label: 'Update an order',
		description:
			'Updates the attributes of an order, such as its email, note, tags, shipping address, and metafields.',
		context:
			'---\nname: updateAnOrder\ndescription: Updates the attributes of an order, such as its email, note, tags, shipping address, and metafields.\n---\n\nWraps the `orderUpdate` mutation of the Shopify GraphQL Admin API.\n\n## Overwrite semantics\n\nMost fields here **replace** rather than merge. **Tags**, **Custom attributes**, and **Shipping address** overwrite\nthe existing values entirely, so call `getAnOrder` first and resend every value you want to keep. **Metafields**\nand **Localized fields** are the exception — they are added to the existing list.\n\n## What this mutation cannot do\n\n`orderUpdate` only changes order attributes. It cannot add or remove line items, change quantities, or modify\ndiscounts; that requires the `orderEditBegin` flow, which is not available as an endpoint and must go through the\nArbitrary call endpoint. It also cannot remove a customer from an order — that is `orderCustomerRemove`.\n\n## Output\n\nThe mutation returns the updated order ID plus `userErrors`. A non-empty `userErrors` list fails the call with the\nShopify messages.\n',
		accounts: { shopify: { scope: ['write_orders'] }, shopify4: { scope: ['write_orders'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the order to update, such as `gid://shopify/Order/123`.',
				},
				email: {
					type: 'string',
					description:
						'A new customer email address for the order. Overwrites the existing email address.',
				},
				phone: {
					type: 'string',
					description:
						'A new customer phone number for the order, in E.164 format. Overwrites the existing phone number.',
				},
				note: {
					type: 'string',
					description:
						'The new contents of the note associated with the order. Overwrites the existing note.',
				},
				poNumber: {
					type: 'string',
					description: 'The new purchase order number for the order.',
				},
				shippingAddress: {
					type: 'object',
					description:
						'The new shipping address for the order. Overwrites the existing shipping address entirely, so provide every field you want to keep.',
					properties: {
						firstName: {
							type: 'string',
							description: 'The first name of the customer.',
						},
						lastName: { type: 'string', description: 'The last name of the customer.' },
						company: {
							type: 'string',
							description: "The name of the customer's company or organization.",
						},
						address1: {
							type: 'string',
							description:
								'The first line of the address, typically the street address or PO box number.',
						},
						address2: {
							type: 'string',
							description:
								'The second line of the address, typically the apartment, suite, or unit number.',
						},
						city: {
							type: 'string',
							description: 'The name of the city, district, village, or town.',
						},
						provinceCode: {
							type: 'string',
							description:
								'The code for the region of the address, such as the province, state, or district. For example, `QC` for Quebec, Canada.',
						},
						countryCode: {
							type: 'string',
							description:
								'The two-letter country code of the address, such as `CZ` for Czechia. See [CountryCode](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/CountryCode).',
						},
						zip: {
							type: 'string',
							description: 'The zip or postal code of the address.',
						},
						phone: {
							type: 'string',
							description:
								'A unique phone number for the customer, formatted using the E.164 standard. For example, `+16135551111`.',
						},
					},
					required: [],
				},
				tags: {
					type: 'array',
					description:
						'A new list of tags for the order. Overwrites the existing tags. Use the `tagsAdd` mutation through the Arbitrary call endpoint to add tags without replacing them.',
					items: { type: 'string', description: 'A tag to attach to the order.' },
				},
				customAttributes: {
					type: 'array',
					description:
						'A new list of custom attributes for the order. Overwrites the existing custom attributes.',
					items: {
						type: 'object',
						description: 'A custom attribute of the order.',
						properties: {
							key: {
								type: 'string',
								description: 'The key or name of the custom attribute.',
							},
							value: {
								type: 'string',
								description: 'The value of the custom attribute.',
							},
						},
						required: ['key'],
					},
				},
				metafields: {
					type: 'array',
					description:
						'The metafields to add to the existing metafields of the order. Existing metafields that are not listed are left unchanged.',
					items: {
						type: 'object',
						description:
							'A metafield holding additional information about the resource.',
						properties: {
							namespace: {
								type: 'string',
								description:
									'The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 3,
								maximum: 255,
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 2,
								maximum: 64,
							},
							type: {
								type: 'string',
								description:
									'The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							value: {
								type: 'string',
								description:
									'The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.',
							},
							id: {
								type: 'string',
								description:
									'The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.',
							},
						},
						required: [],
					},
				},
				localizedFields: {
					type: 'array',
					description:
						'The localized fields to add to the existing list. These are additional fields that certain countries require on international orders, such as customs or tax identification numbers.',
					items: {
						type: 'object',
						description: 'A localized field of the order.',
						properties: {
							key: {
								type: 'string',
								description:
									'The key of the localized field, such as `TAX_CREDENTIAL_BR`. See [LocalizedFieldKey](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/LocalizedFieldKey) for the full list.',
							},
							value: { type: 'string', description: 'The localized field value.' },
						},
						required: ['key', 'value'],
					},
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				order: {
					type: 'object',
					description:
						'The updated order. Call the Get an order endpoint with this ID for the full order details.',
					properties: {
						id: { type: 'string', description: 'The global ID of the updated order.' },
						legacyResourceId: {
							type: 'string',
							description: 'The REST API ID of the updated order.',
						},
						name: {
							type: 'string',
							description:
								'The unique identifier that appears on the order, such as `#1001`.',
						},
						updatedAt: {
							type: 'string',
							description: 'The date and time when the order was last modified.',
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'updateInventoryLevel',
		label: 'Update an inventory level',
		description: 'Sets inventory items at locations to exact quantities.',
		context:
			'---\nname: updateInventoryLevel\ndescription: Sets inventory items at locations to exact quantities.\n---\n\nWraps the `inventorySetQuantities` mutation of the Shopify GraphQL Admin API. Every input field except\n**Idempotency key** is part of `InventorySetQuantitiesInput`.\n\n## Where the IDs come from\n\n**Location ID** comes from the **Search locations** endpoint. **Inventory item ID** comes from the\n**Get a product variant** endpoint, which returns it as `inventoryItem.id`.\n\n## Absolute, not relative\n\n**Quantity** is a target value, not a change. Shopify\'s own guidance is to use this mutation **only** when your\nsystem is the source of truth for the inventory; otherwise prefer the **Adjust an inventory level** endpoint, whose\nrelative deltas behave correctly under concurrent updates.\n\nOnly `available` and `on_hand` can be set to an absolute value. Every other quantity state has to go through the\nadjust mutation.\n\n## Compare-and-swap\n\n**Change from quantity** is a safety check: supply the quantity you believe is currently at the location and the\ncall fails with `CHANGE_FROM_QUANTITY_STALE` rather than overwriting a concurrent change. As of the 2026-04 API the\nfield is **mandatory**, so leaving it empty does not omit it — the endpoint sends an explicit `null`, which is how\nyou opt out of the check. Opting out on an absolute write is the riskiest combination available here; do it only\ndeliberately.\n\n## Nothing-changed responses\n\nWhen every quantity you sent already matched the stored value, Shopify performs no write and returns\n`inventoryAdjustmentGroup: null` with an empty `userErrors`. That is a success, not a failure. Treat a `null`\ngroup as "already up to date" rather than retrying.\n\n## Idempotency\n\nThe 2026-04 API requires an idempotency key. Leave **Idempotency key** empty and a fresh UUID is generated per\ncall; pass your own stable key whenever you intend to retry.\n\n## Output\n\nReturns the `inventoryAdjustmentGroup` recording the batch, with the resulting quantity per change, plus\n`userErrors`. A non-empty `userErrors` list fails the call with the Shopify messages.\n',
		accounts: {
			shopify: { scope: ['write_inventory', 'read_locations'] },
			shopify4: { scope: ['write_inventory', 'read_locations'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				quantities: {
					type: 'array',
					description:
						'The absolute quantities to set. Each entry targets one inventory item at one location.',
					items: {
						type: 'object',
						description: 'One absolute quantity to set.',
						properties: {
							inventoryItemId: {
								type: 'string',
								description:
									'The global ID of the inventory item, such as `gid://shopify/InventoryItem/123`. The **Get a product variant** endpoint returns it as `inventoryItem.id`.',
							},
							locationId: {
								type: 'string',
								description:
									'The global ID of the location, such as `gid://shopify/Location/123`. The **Search locations** endpoint returns it as `id`.',
							},
							quantity: {
								type: 'number',
								description:
									'The exact quantity to set at this location. This replaces the current value rather than adding to it.',
							},
							changeFromQuantity: {
								type: 'number',
								description:
									'The quantity you expect at this location right now, for a compare-and-swap safety check. When it does not match, the call fails with `CHANGE_FROM_QUANTITY_STALE` instead of writing stale data. Leave it empty to skip the check — the endpoint then sends an explicit `null`, which the 2026-04 API requires.',
							},
						},
						required: ['inventoryItemId', 'locationId', 'quantity'],
					},
					minItems: 1,
				},
				name: {
					type: 'string',
					description:
						'The inventory quantity state to set. Only `available` and `on_hand` can be set to an absolute value.',
					enum: ['available', 'on_hand'],
				},
				reason: {
					type: 'string',
					description:
						'The reason recorded for the change. It must be one of the values Shopify accepts — see the [`inventorySetQuantities` reference](https://shopify.dev/docs/api/admin-graphql/2026-04/mutations/inventorySetQuantities).',
					enum: [
						'correction',
						'cycle_count_available',
						'damaged',
						'movement_created',
						'movement_updated',
						'movement_received',
						'movement_canceled',
						'other',
						'promotion',
						'quality_control',
						'received',
						'reservation_created',
						'reservation_deleted',
						'reservation_updated',
						'restock',
						'safety_stock',
						'shrinkage',
					],
				},
				referenceDocumentUri: {
					type: 'string',
					description:
						'A URI recording why the change happened, shown in the merchant inventory history. Shopify prefers a global ID naming your app, such as `gid://erp-connector/SyncJob/SYNC-1`, but an `https://` URL or a custom scheme also works.',
				},
				idempotencyKey: {
					type: 'string',
					description:
						'A key that makes the change safe to retry: repeating a call with the same key does not apply the change twice. The 2026-04 API requires one, so a fresh UUID is generated when you leave this empty. Supply your own value when you may retry after a timeout. See the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).',
				},
			},
			required: ['quantities', 'name', 'reason'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				inventoryAdjustmentGroup: {
					type: 'object',
					description:
						'The batch of inventory changes this call produced. It is `null` when nothing actually changed, which happens when every quantity you sent already matched the stored value.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the inventory adjustment group.',
						},
						createdAt: {
							type: 'string',
							description: 'The date and time when the adjustment group was created.',
						},
						reason: {
							type: 'string',
							description: 'The reason recorded for the group of adjustments.',
						},
						referenceDocumentUri: {
							type: 'string',
							description:
								'The URI recorded as the reason the inventory change happened.',
						},
						changes: {
							type: 'array',
							description:
								'The individual quantity changes in this group. This is a list field, so it has no `nodes` wrapper.',
							items: {
								type: 'object',
								description:
									'One quantity change of one inventory item at one location.',
								properties: {
									name: {
										type: 'string',
										description:
											'The name of the inventory quantity that changed, such as `available`.',
									},
									delta: {
										type: 'number',
										description:
											'The amount by which the quantity changed. Negative when stock was removed.',
									},
									quantityAfterChange: {
										type: 'number',
										description:
											'The resulting quantity of the named inventory state after the change.',
									},
									ledgerDocumentUri: {
										type: 'string',
										description:
											'The URI identifying what the quantity change was applied to.',
									},
									item: {
										type: 'object',
										description: 'The inventory item the change applies to.',
										properties: {
											id: {
												type: 'string',
												description: 'The global ID of the inventory item.',
											},
										},
										required: [],
									},
									location: {
										type: 'object',
										description: 'The location the change applies to.',
										properties: {
											id: {
												type: 'string',
												description: 'The global ID of the location.',
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
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The module fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'updateProduct',
		label: 'Update a product',
		description: 'Updates the attributes, media, and collection membership of a product.',
		context:
			'---\nname: updateProduct\ndescription: Updates the attributes, media, and collection membership of a product.\n---\n\nWraps the `productUpdate` mutation of the Shopify GraphQL Admin API. Every input field except **Media** is part of\n`ProductUpdateInput`; **Media** maps to the separate `media` argument.\n\n## Partial update semantics\n\nFields you omit are left unchanged, so this behaves like a PATCH. The exception is list fields: **Tags** and **SEO**\n**overwrite** the existing values. Call `getProduct` first and resend everything you want to keep. To add tags without\nreplacing them, use the `tagsAdd` mutation through the Arbitrary call endpoint.\n\n## What this mutation cannot do\n\n`productUpdate` does not change variants or product options. Use the product variant endpoints, or\n`productOptionsCreate` / `productOptionUpdate` through the Arbitrary call endpoint.\n\n**Media** only adds new media; it does not replace or delete existing media, and it accepts URL-based sources only.\n\n## Output\n\nThe mutation returns the updated product ID plus `userErrors`. A non-empty `userErrors` list fails the call with the\nShopify messages.\n',
		accounts: {
			shopify: { scope: ['write_products'] },
			shopify4: { scope: ['write_products'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description:
						'The global ID of the product to update, such as `gid://shopify/Product/123`.',
				},
				descriptionHtml: {
					type: 'string',
					description:
						'The description of the product, including HTML tags such as `<b>` and `<i>`.',
				},
				productType: {
					type: 'string',
					description: 'The product type that the merchant defines.',
				},
				vendor: { type: 'string', description: "The name of the product's vendor." },
				status: {
					type: 'string',
					description:
						'The product status, which controls visibility across all sales channels.',
					default: '',
					enum: ['', 'ACTIVE', 'ARCHIVED', 'DRAFT'],
				},
				category: {
					type: 'string',
					description:
						'The global ID of the taxonomy category associated with the product, such as `gid://shopify/TaxonomyCategory/aa-1`. Look up category IDs in the [Shopify product taxonomy](https://shopify.github.io/product-taxonomy/).',
				},
				tags: {
					type: 'array',
					description:
						'The searchable keywords associated with the product. This **overwrites** any existing tags. Use the `tagsAdd` mutation through the Arbitrary call endpoint to add tags without replacing them.',
					items: {
						type: 'string',
						description: 'A searchable keyword associated with the product.',
					},
				},
				handle: {
					type: 'string',
					description:
						'The unique, human-readable string used to identify the product in URLs. It can contain letters, hyphens, and numbers, but no spaces. Generated from the title when omitted.',
				},
				seo: {
					type: 'object',
					description: 'The SEO title and description associated with the product.',
					properties: {
						description: {
							type: 'string',
							description: 'The SEO description of the product.',
						},
					},
					required: [],
				},
				templateSuffix: {
					type: 'string',
					description:
						'The theme template used when customers view the product in the store.',
				},
				giftCardTemplateSuffix: {
					type: 'string',
					description:
						'The theme template used when customers view a gift card in the store.',
				},
				collectionsToJoin: {
					type: 'array',
					description:
						'The global IDs of the collections to associate the product with, such as `gid://shopify/Collection/123`.',
					items: {
						type: 'string',
						description: 'The global ID of a collection to associate the product with.',
					},
				},
				requiresSellingPlan: {
					type: 'boolean',
					description:
						'Whether the product can only be purchased with a selling plan. Subscription-only products can be updated only for online stores, and setting this to `true` unpublishes the product from every channel except the online store.',
				},
				metafields: {
					type: 'array',
					description: 'The custom fields to associate with the product.',
					items: {
						type: 'object',
						description:
							'A metafield holding additional information about the resource.',
						properties: {
							namespace: {
								type: 'string',
								description:
									'The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 3,
								maximum: 255,
							},
							key: {
								type: 'string',
								description:
									'The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.',
								minimum: 2,
								maximum: 64,
							},
							type: {
								type: 'string',
								description:
									'The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
							},
							value: {
								type: 'string',
								description:
									'The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.',
							},
							id: {
								type: 'string',
								description:
									'The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.',
							},
						},
						required: [],
					},
				},
				collectionsToLeave: {
					type: 'array',
					description:
						'The global IDs of the collections to disassociate from the product.',
					items: {
						type: 'string',
						description:
							'The global ID of a collection to disassociate from the product.',
					},
				},
				media: {
					type: 'array',
					description:
						'The media to create for the product. Only URL-based sources are supported; binary uploads are not available through endpoints.',
					items: {
						type: 'object',
						description: 'A media object to create for the product.',
						properties: {
							mediaContentType: {
								type: 'string',
								description: 'The content type of the media.',
								enum: ['IMAGE', 'VIDEO', 'EXTERNAL_VIDEO', 'MODEL_3D'],
							},
							originalSource: {
								type: 'string',
								description:
									'The original source of the media object. Use an external URL or a staged upload URL.',
							},
							alt: {
								type: 'string',
								description: 'The alternative text describing the media.',
							},
						},
						required: ['mediaContentType', 'originalSource'],
					},
				},
				redirectNewHandle: {
					type: 'boolean',
					description:
						'Whether to redirect the old handle to the new one automatically. Only relevant when **Handle** is changed.',
				},
				deleteConflictingConstrainedMetafields: {
					type: 'boolean',
					description:
						"Whether to delete metafields whose constraints don't match the product category. Can only be used when **Category ID** is changed. Defaults to `false`.",
				},
			},
			required: ['id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				product: {
					type: 'object',
					description:
						'The updated product. Call the Get a product endpoint with this ID for the full product details.',
					properties: {
						id: {
							type: 'string',
							description: 'The global ID of the updated product.',
						},
						legacyResourceId: {
							type: 'string',
							description: 'The REST API ID of the updated product.',
						},
						handle: {
							type: 'string',
							description:
								'The unique, human-readable string used to identify the product in URLs.',
						},
						status: {
							type: 'string',
							description: 'The product status: `ACTIVE`, `ARCHIVED`, or `DRAFT`.',
						},
						updatedAt: {
							type: 'string',
							description: 'The date and time when the product was last modified.',
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
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
		appName: 'shopify',
		appVersion: 3,
		endpointName: 'updateProductVariants',
		label: 'Update product variants',
		description: 'Updates one or more product variants on a single product.',
		context:
			'---\nname: updateProductVariants\ndescription: Updates one or more product variants on a single product.\n---\n\nWraps the `productVariantsBulkUpdate` mutation of the Shopify GraphQL Admin API. The mutation is bulk by design:\n**Variants** is an array, every entry needs its own **Variant ID**, and all of them must belong to the product given\nby **Product ID**. Pass a single-element array to update one variant.\n\n## Partial update semantics\n\nFields you omit on a variant are left unchanged. **Allow partial updates** controls what happens when one variant in\nthe batch is invalid: by default the whole call is rejected, so nothing is written.\n\n## Inventory\n\n**Quantity adjustments** applies a **relative** change per location, not an absolute quantity. Shopify requires\n**Change from quantity** to be present on every adjustment — send it explicitly, even empty, or the call errors. To\nset an absolute quantity instead, use the inventory level endpoints.\n\n## What this mutation cannot do\n\nIt does not create or delete product options. Use `productOptionsCreate` / `productOptionUpdate` through the\nArbitrary call endpoint.\n\n**Media** only adds new media to the product; it does not replace or delete existing media.\n\n## Output\n\nThe mutation returns the updated variants, the product, and `userErrors`. A non-empty `userErrors` list fails the\ncall with the Shopify messages.\n',
		accounts: {
			shopify: { scope: ['write_products'] },
			shopify4: { scope: ['write_products'] },
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				productId: {
					type: 'string',
					description:
						'The global ID of the product the variants belong to, such as `gid://shopify/Product/123`.',
				},
				variants: {
					type: 'array',
					description:
						'The product variants to update. All of them must belong to the same product.',
					items: {
						type: 'object',
						description: 'A product variant to update.',
						properties: {
							id: {
								type: 'string',
								description:
									'The global ID of the variant to update, such as `gid://shopify/ProductVariant/123`.',
							},
							quantityAdjustments: {
								type: 'array',
								description: 'Relative inventory adjustments for the variant.',
								items: {
									type: 'object',
									description: 'An inventory adjustment at one location.',
									properties: {
										locationId: {
											type: 'string',
											description:
												'The global ID of the location where the available quantity is adjusted.',
										},
										adjustment: {
											type: 'number',
											description:
												'The change to the available quantity at the location. Leave empty to stop stocking the variant at that location.',
										},
										changeFromQuantity: {
											type: 'number',
											description:
												'The quantity to compare against before applying the adjustment. Shopify requires this field to be present, so send it explicitly even when empty.',
										},
									},
									required: ['locationId'],
								},
							},
							price: {
								type: 'number',
								description: "The price of the variant in the shop's currency.",
							},
							compareAtPrice: {
								type: 'number',
								description: 'The original price of the variant before a sale.',
							},
							barcode: {
								type: 'string',
								description:
									'The barcode associated with the variant, such as an ISBN, UPC, or GTIN.',
							},
							taxable: {
								type: 'boolean',
								description: 'Whether a tax is charged when the variant is sold.',
							},
							taxCode: {
								type: 'string',
								description:
									'The tax code associated with the variant. Available on Shopify Plus with Avalara AvaTax.',
							},
							inventoryPolicy: {
								type: 'string',
								description:
									"Whether customers can order the variant when it's out of stock. Defaults to `DENY`.",
								default: '',
								enum: ['', 'DENY', 'CONTINUE'],
							},
							optionValues: {
								type: 'array',
								description:
									'The option values that define this variant. Provide one entry per product option. Identify the option by **Option ID** or **Option name**, and the value by **Option value ID** or **Name**.',
								items: {
									type: 'object',
									description: 'One option value of the variant.',
									properties: {
										optionId: {
											type: 'string',
											description:
												'The global ID of the product option, such as `gid://shopify/ProductOption/123`. Provide this or **Option name**.',
										},
										optionName: {
											type: 'string',
											description:
												'The name of the product option, such as `Size`. Provide this or **Option ID**.',
										},
										id: {
											type: 'string',
											description:
												'The global ID of the product option value. Provide this or **Name**.',
										},
										name: {
											type: 'string',
											description:
												'The name of the product option value, such as `Small`. Provide this or **Option value ID**.',
										},
										linkedMetafieldValue: {
											type: 'string',
											description:
												'The metafield value associated with the option. Use it only when the option is linked to a metafield.',
										},
									},
									required: [],
								},
							},
							inventoryItem: {
								type: 'object',
								description:
									'The inventory item settings of the variant, such as its cost, weight, and customs information.',
								properties: {
									sku: {
										type: 'string',
										description:
											'The stock keeping unit of the inventory item.',
									},
									cost: {
										type: 'number',
										description:
											"The unit cost of the inventory item, in the shop's default currency.",
									},
									tracked: {
										type: 'boolean',
										description:
											'Whether inventory levels are tracked for the item.',
									},
									requiresShipping: {
										type: 'boolean',
										description:
											'Whether the item must be physically shipped. Digital goods and services usually do not.',
									},
									countryCodeOfOrigin: {
										type: 'string',
										description:
											'The two-letter ISO 3166-1 alpha-2 code of the country where the item was produced, such as `CZ`.',
									},
									provinceCodeOfOrigin: {
										type: 'string',
										description:
											'The two-letter ISO 3166-2 code of the province where the item was produced, such as `QC`.',
									},
									harmonizedSystemCode: {
										type: 'string',
										description:
											'The global harmonized system code of the item. Must be a number of 6 to 13 digits.',
									},
									countryHarmonizedSystemCodes: {
										type: 'array',
										description:
											'The country-specific harmonized system codes of the item.',
										items: {
											type: 'object',
											description:
												'A harmonized system code issued by a specific country.',
											properties: {
												harmonizedSystemCode: {
													type: 'string',
													description:
														'The country-specific harmonized system code.',
												},
												countryCode: {
													type: 'string',
													description:
														'The two-letter ISO 3166-1 alpha-2 code of the country that issued the code.',
												},
											},
											required: ['harmonizedSystemCode'],
										},
									},
									measurement: {
										type: 'object',
										description: 'The measurements of the inventory item.',
										properties: {
											shippingPackageId: {
												type: 'string',
												description:
													'The global ID of the shipping package associated with the inventory item.',
											},
											weight: {
												type: 'object',
												description: 'The weight of the inventory item.',
												properties: {
													unit: {
														type: 'string',
														description:
															'The unit of measurement for the weight value.',
														default: '',
														enum: [
															'',
															'GRAMS',
															'KILOGRAMS',
															'OUNCES',
															'POUNDS',
														],
													},
													value: {
														type: 'number',
														description:
															'The weight value in the selected unit.',
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
							unitPriceMeasurement: {
								type: 'object',
								description:
									'The measurement used to calculate a unit price for the variant, such as $9.99 per 100 ml.',
								properties: {
									quantityValue: {
										type: 'number',
										description:
											'The quantity value of the measurement, such as `100` in "100 ml".',
									},
									quantityUnit: {
										type: 'string',
										description:
											'The quantity unit of the measurement. See [UnitPriceMeasurementMeasuredUnit](https://shopify.dev/docs/api/admin-graphql/2026-04/enums/UnitPriceMeasurementMeasuredUnit).',
										default: '',
										enum: [
											'',
											'CL',
											'CM',
											'FLOZ',
											'FT',
											'FT2',
											'G',
											'GAL',
											'IN',
											'ITEM',
											'KG',
											'L',
											'LB',
											'M',
											'M2',
											'M3',
											'MG',
											'ML',
											'MM',
											'OZ',
											'PT',
											'QT',
											'YD',
										],
									},
									referenceValue: {
										type: 'number',
										description:
											'The reference value of the measurement, such as `1` in "per 1 l".',
									},
									referenceUnit: {
										type: 'string',
										description: 'The reference unit of the measurement.',
										default: '',
										enum: [
											'',
											'CL',
											'CM',
											'FLOZ',
											'FT',
											'FT2',
											'G',
											'GAL',
											'IN',
											'ITEM',
											'KG',
											'L',
											'LB',
											'M',
											'M2',
											'M3',
											'MG',
											'ML',
											'MM',
											'OZ',
											'PT',
											'QT',
											'YD',
										],
									},
								},
								required: [],
							},
							showUnitPrice: {
								type: 'boolean',
								description: 'Whether the unit price is shown for this variant.',
							},
							requiresComponents: {
								type: 'boolean',
								description:
									'Whether the variant requires components. When `true`, it can only be purchased as a parent bundle and is omitted from channels that do not support bundles. Defaults to `false`.',
							},
							mediaId: {
								type: 'string',
								description:
									'The global ID of existing product media to associate with the variant.',
							},
							mediaSrc: {
								type: 'array',
								description: 'The URLs of media to associate with the variant.',
								items: {
									type: 'string',
									description:
										'The URL of a media object to associate with the variant.',
								},
							},
							metafields: {
								type: 'array',
								description: 'The metafields to associate with the variant.',
								items: {
									type: 'object',
									description:
										'A metafield holding additional information about the resource.',
									properties: {
										namespace: {
											type: 'string',
											description:
												'The container for a group of metafields. Required when creating a metafield. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.',
											minimum: 3,
											maximum: 255,
										},
										key: {
											type: 'string',
											description:
												'The unique identifier of the metafield within its namespace. Required when creating a metafield. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.',
											minimum: 2,
											maximum: 64,
										},
										type: {
											type: 'string',
											description:
												'The type of data stored in the metafield, such as `single_line_text_field`. Required when creating or updating a metafield without a definition. See the [list of supported types](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types).',
										},
										value: {
											type: 'string',
											description:
												'The data to store in the metafield. Always sent as a string, regardless of the metafield type. For structured types, pass the JSON-encoded value.',
										},
										id: {
											type: 'string',
											description:
												'The global ID of an existing metafield to update. Prefer **Namespace** and **Key** for creating and updating.',
										},
									},
									required: [],
								},
							},
						},
						required: ['id'],
					},
				},
				media: {
					type: 'array',
					description:
						'New media to add to the product. Only URL-based sources are supported; binary uploads are not available through endpoints.',
					items: {
						type: 'object',
						description: 'A media object to add to the product.',
						properties: {
							mediaContentType: {
								type: 'string',
								description: 'The content type of the media.',
								enum: ['IMAGE', 'VIDEO', 'EXTERNAL_VIDEO', 'MODEL_3D'],
							},
							originalSource: {
								type: 'string',
								description:
									'The original source of the media object. Use an external URL or a staged upload URL.',
							},
							alt: {
								type: 'string',
								description: 'The alternative text describing the media.',
							},
						},
						required: ['mediaContentType', 'originalSource'],
					},
				},
				allowPartialUpdates: {
					type: 'boolean',
					description:
						'Whether valid variant changes are persisted even when other variants in the same call have invalid data. When `false`, any error prevents all variants from updating. Defaults to `false`.',
				},
			},
			required: ['productId', 'variants'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				productVariants: {
					type: 'array',
					description:
						'The updated product variants. This is a list field, so it has no `nodes` wrapper.',
					items: {
						type: 'object',
						description: 'A updated product variant.',
						properties: {
							id: {
								type: 'string',
								description: 'The global ID of the product variant.',
							},
							legacyResourceId: {
								type: 'string',
								description: 'The REST API ID of the product variant.',
							},
							sku: {
								type: 'string',
								description: 'The stock keeping unit of the product variant.',
							},
							price: {
								type: 'string',
								description:
									"The price of the variant in the shop's currency, serialized as a decimal string.",
							},
							createdAt: {
								type: 'string',
								description:
									'The date and time when the product variant was created.',
							},
							updatedAt: {
								type: 'string',
								description:
									'The date and time when the product variant was last modified.',
							},
						},
						required: [],
					},
				},
				product: {
					type: 'object',
					description: 'The product the variants belong to.',
					properties: {
						id: { type: 'string', description: 'The global ID of the product.' },
						updatedAt: {
							type: 'string',
							description: 'The date and time when the product was last modified.',
						},
					},
					required: [],
				},
				userErrors: {
					type: 'array',
					description:
						'The list of errors that occurred while executing the mutation. The call fails when this list is not empty.',
					items: {
						type: 'object',
						description: 'An error returned by the mutation.',
						properties: {
							field: {
								type: 'array',
								description: 'The path to the input field that caused the error.',
								items: {
									type: 'string',
									description:
										'One segment of the path to the input field that caused the error.',
								},
							},
							message: {
								type: 'string',
								description: 'The error message describing the problem.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
];
