// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'---\nname: arbitraryCall\ndescription: Performs an arbitrary authorized API call.\n---\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string,\nheaders and body) to the Webflow Data API, mirroring the "Make an API Call" module.\n\nThe base URL is `https://api.webflow.com/beta`. Provide the remaining path in the URL parameter\n(e.g. `/sites`). Authentication is handled automatically via the app\'s connection.\n\nRefer to the [Webflow Data API reference](https://developers.webflow.com/data/reference/rest-introduction) for available endpoints, required parameters, and response schemas.\n',
		accounts: { webflow2: { scope: [] } },
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
						'Enter the part of the URL that comes after `https://api.webflow.com/beta`. For example, `/sites`.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'createAssetFolder',
		label: 'Create an asset folder',
		description: 'Creates an asset folder in a site.',
		context:
			'---\nname: createAssetFolder\ndescription: Creates an asset folder in a site.\n---\n\nWraps `POST /sites/{site_id}/asset_folders` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/assets/asset-folders/create-folder)) and returns the raw response body.\n\n- Omit `parentFolder` to create the folder at the root.\n- Required scope: `assets:write`.\n',
		accounts: { webflow2: { scope: ['assets:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				displayName: {
					type: 'string',
					description: 'A human readable name for the Asset Folder.',
				},
				parentFolder: {
					type: 'string',
					description:
						'An (optional) pointer to a parent Asset Folder (or null for root).',
				},
			},
			required: ['site_id', 'displayName'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the Asset Folder.' },
				displayName: {
					type: 'string',
					description: 'User visible name for the Asset Folder.',
				},
				parentFolder: {
					type: 'string',
					description: 'Pointer to parent Asset Folder (or null if root).',
				},
				assets: {
					type: 'array',
					description: 'IDs of the assets in the folder.',
					items: { type: 'string', description: 'ID of an asset in the folder.' },
				},
				siteId: {
					type: 'string',
					description: 'The unique ID of the site the Asset Folder belongs to.',
				},
				createdOn: {
					type: 'string',
					description: 'Date that the Asset Folder was created on.',
				},
				lastUpdated: {
					type: 'string',
					description: 'Date that the Asset Folder was last updated on.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'createItem',
		label: 'Create an item',
		description: 'Creates a staged item in a CMS collection.',
		context:
			'---\nname: createItem\ndescription: Creates a staged item in a CMS collection.\n---\n\nWraps `POST /collections/{collection_id}/items` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/create-item)) and returns the raw response body.\n\n- Wraps the single-item `POST /collections/{collection_id}/items` call ([Create Item](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/create-item)) used by the app\'s "Create an Item" module. Webflow also documents a bulk form [Create Items](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/create-items) (`POST .../items/insert`, `items[]` with `cmsLocaleIds`), available through `arbitraryCall`.\n- New items are created as drafts unless `isDraft` is `false`. Creating an item does not publish it — call `publishItems` afterwards.\n- `fieldData` is an object keyed by the collection field slugs (see `getCollection` → `fields[].slug`). `name` and `slug` are the built-in fields: `name` is required, `slug` is optional — when omitted Webflow derives it from `name` (`"My Post"` → `my-post`). The value format per field type is documented in [Field Types & Item Values](https://developers.webflow.com/data/v2.0.0-beta/reference/field-types-item-values).\n- Field slugs differ from display names, so resolve them first. Example — a featured blog post with a summary: `listCollections` to find the blog collection by `displayName` (e.g. "Blog Posts"), `getCollection` to read its `fields[]` (a "Post Summary" PlainText field has slug `post-summary`, a "Featured?" Switch has slug `featured`), then `fieldData: { "name": "Hello", "post-summary": "Short teaser", "featured": true }`.\n- Required scope: `cms:write`.\n',
		accounts: { webflow2: { scope: ['cms:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				collection_id: {
					type: 'string',
					description:
						'Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.',
				},
				cmsLocaleId: {
					type: 'string',
					description:
						'Identifier of the CMS locale the item belongs to. Omit it for the primary locale; locale identifiers are listed as `cmsLocaleId` in the `getSite` response.',
				},
				isArchived: {
					type: 'boolean',
					description: 'Boolean determining if the Item is set to archived.',
				},
				isDraft: {
					type: 'boolean',
					description:
						"Sets the item's draft state. The resulting status depends on whether the item has been published before: **Item that has never been published:** `isDraft: true` results in a `Draft` status. **Already-published item:** `isDraft: true` results in a `Changes in draft` status. The live item stays published, and your changes are held back until you publish them. Setting `isDraft: true` never unpublishes an item. To remove an item from the live site, use [Unpublish Live Collection Items](https://developers.webflow.com/data/reference/cms/collection-items/live-items/delete-items-live).",
				},
				fieldData: {
					description:
						'Object of field values keyed by the collection field slug, e.g. `{ "name": "Mostly Harmless", "slug": "mostly-harmless" }`. `name` is required; `slug` is optional and derived from `name` when omitted. Use `getCollection` to list the field slugs and types; the accepted value format per type is in the [Field Types & Item Values](https://developers.webflow.com/data/v2.0.0-beta/reference/field-types-item-values) reference.',
				},
			},
			required: ['collection_id', 'fieldData'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the Item.' },
				cmsLocaleId: {
					type: 'string',
					description: 'Identifier for the locale of the CMS item.',
				},
				lastPublished: {
					type: 'string',
					description: 'The date the item was last published.',
				},
				lastUpdated: { type: 'string', description: 'The date the item was last updated.' },
				createdOn: { type: 'string', description: 'The date the item was created.' },
				isArchived: {
					type: 'boolean',
					description:
						'Boolean determining if the Item is set to archived. Defaults to `false`.',
				},
				isDraft: {
					type: 'boolean',
					description:
						'Whether the item is in a draft state. Together with `lastPublished`, this determines the status shown in the Webflow UI. See [Publishing with the CMS API](https://developers.webflow.com/data/docs/working-with-the-cms/publishing) for the full mapping. Items created without `isDraft` are drafts (`true`).',
				},
				fieldData: {
					type: 'object',
					description:
						'Field values keyed by the collection field slug. Standard fields are listed; custom fields of the collection are returned under their slug as well.',
					properties: {
						name: { type: 'string', description: 'Name of the Item.' },
						slug: {
							type: 'string',
							description:
								'URL structure of the Item in your site. Note: Updates to an item slug will break all links referencing the old slug.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'createProduct',
		label: 'Create a product',
		description: 'Creates a product with its default SKU.',
		context:
			'---\nname: createProduct\ndescription: Creates a product with its default SKU.\n---\n\nWraps `POST /sites/{site_id}/products` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/products-sk-us/create)) and returns the raw response body.\n\n- `name` and `slug` are required on both `product.fieldData` and `sku.fieldData` (Webflow does not derive the slug from the name here; a missing slug is a 400), and `sku.fieldData.price` is required. `price.value` is the amount in the smallest unit of the currency — `{ "value": 2500, "unit": "USD" }` is 25.00 USD.\n- A product needs at least one SKU: `sku.fieldData` describes the default SKU. To offer variants, declare `product.fieldData.sku-properties` (options and their enum values) here, then add the remaining SKUs with `createProductSkus`; each SKU\'s `sku-values` maps a property ID to an enum ID.\n- `sku-properties[].id` and `enum[].id` are identifiers you choose (e.g. `color`, `red`, `blue`); Webflow stores them as given and SKUs reference them as `sku-values: { "<propertyId>": "<enumId>" }`.\n- There is no delete route for products: delete one with `deleteItem` on the site\'s Products collection (`listCollections` → slug `product`) using the product ID; its SKUs are deleted with it.\n- `publishStatus` controls whether the product is created as `staging` (default) or `live`.\n- The response is `{ "product": {...}, "sku": {...} }` — the created default SKU as a single object, not the `skus[]` array shown in the vendor reference. `getProduct` returns `skus[]`.\n- Products and SKUs are CMS items of the e-commerce Products and SKUs collections; `fieldData` keys are the collection field slugs (`name`, `slug`, `description`, `sku-properties`, `price`, …). Keys containing hyphens are sent exactly as named.\n- Required scope: `ecommerce:write`.\n',
		accounts: { webflow2: { scope: ['ecommerce:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				publishStatus: {
					type: 'string',
					description:
						'Indicate whether your Product should be set as "staging" or "live". Defaults to `staging`.',
					default: '',
					enum: ['', 'staging', 'live'],
				},
				product: {
					type: 'object',
					description:
						'The product to write. Standard product fields go under `fieldData`; custom fields of the product collection can be added under their field slug.',
					properties: {
						fieldData: {
							type: 'object',
							description:
								'Contains content-specific details for a product, covering both standard (e.g., title, description) and custom fields tailored to the product setup.',
							properties: {
								name: { type: 'string', description: 'Name of the Product.' },
								slug: {
									type: 'string',
									description:
										'URL structure of the Product in your site. Required — Webflow does not derive it from the name here.',
								},
								description: {
									type: 'string',
									description: 'A description of your product.',
								},
								shippable: {
									type: 'boolean',
									description: 'Boolean determining if the Product is shippable.',
								},
								'sku-properties': {
									type: 'array',
									description: 'Variant types to include in SKUs.',
									items: {
										type: 'object',
										description: 'A variant/option type for a SKU.',
										properties: {
											id: {
												type: 'string',
												description:
													'Identifier of the option, chosen by the caller (e.g. `color`); SKUs reference it as the key in `sku-values`. Required for every `sku-properties` entry.',
											},
											name: {
												type: 'string',
												description:
													'Name of the option as shown to shoppers (e.g. `Color`). Required for every `sku-properties` entry.',
											},
											enum: {
												type: 'array',
												description:
													'The values of the option (e.g. Red, Blue). Required for every `sku-properties` entry.',
												items: {
													type: 'object',
													description:
														'Enumerated Product variants/Options for the SKU.',
													properties: {
														id: {
															type: 'string',
															description:
																'Identifier of the value, chosen by the caller (e.g. `blue`); SKUs reference it as the value in `sku-values`. Required for every `enum` entry.',
														},
														name: {
															type: 'string',
															description:
																'Name of the value as shown to shoppers (e.g. `Blue`). Required for every `enum` entry.',
														},
														slug: {
															type: 'string',
															description:
																'Slug of the value in the site URL structure (e.g. `blue`). Required for every `enum` entry.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
								},
								category: {
									type: 'array',
									description: 'The category your product belongs to.',
									items: {
										type: 'string',
										description: 'ID of a category item.',
									},
								},
								'tax-category': {
									type: 'string',
									description: 'Product tax class.',
									default: '',
									enum: [
										'',
										'standard-taxable',
										'standard-exempt',
										'books-religious',
										'books-textbook',
										'clothing',
										'clothing-swimwear',
										'digital-goods',
										'digital-service',
										'drugs-non-prescription',
										'drugs-prescription',
										'food-bottled-water',
										'food-candy',
										'food-groceries',
										'food-prepared',
										'food-soda',
										'food-supplements',
										'magazine-individual',
										'magazine-subscription',
										'service-admission',
										'service-advertising',
										'service-dry-cleaning',
										'service-hairdressing',
										'service-installation',
										'service-miscellaneous',
										'service-parking',
										'service-printing',
										'service-professional',
										'service-repair',
										'service-training',
									],
								},
								'default-sku': {
									type: 'string',
									description: 'The default SKU associated with this product.',
								},
								'ec-product-type': {
									type: 'string',
									description:
										'Product type. One of Physical, Digital, Service or Advanced (see [product types](https://university.webflow.com/lesson/add-and-manage-products-and-categories?topics=ecommerce#how-to-understand-product-types)).',
									default: '',
									enum: [
										'',
										'ff42fee0113744f693a764e3431a9cc2',
										'f22027db68002190aef89a4a2b7ac8a1',
										'c599e43b1a1c34d5a323aedf75d3adf6',
										'b6ccc1830db4b1babeb06a9ac5f6dd76',
									],
								},
							},
							required: ['name', 'slug'],
						},
					},
					required: [],
				},
				sku: {
					type: 'object',
					description:
						'The SKU to write. Standard SKU fields go under `fieldData`; custom fields of the SKU collection can be added under their field slug.',
					properties: {
						fieldData: {
							type: 'object',
							description: 'Standard and Custom fields for a SKU.',
							properties: {
								'sku-values': {
									description:
										'Mapping between SKU property IDs and SKU value IDs that identifies this variant, e.g. `{ "<colorPropertyId>": "<blueValueId>" }`. Omit for the default SKU of a product without variants.',
								},
								name: { type: 'string', description: 'Name of the SKU (variant).' },
								slug: {
									type: 'string',
									description:
										'URL structure of the SKU in your site. Required — Webflow does not derive it from the name here.',
								},
								price: {
									type: 'object',
									description:
										'Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
									properties: {
										value: {
											type: 'number',
											description:
												'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										},
										unit: {
											type: 'string',
											description:
												'ISO 4217 currency code of the amount, e.g. `USD`.',
										},
										currency: {
											type: 'string',
											description:
												'Same value as `unit`; optional — Webflow returns only `unit`.',
										},
									},
									required: [],
								},
								'compare-at-price': {
									type: 'object',
									description:
										'Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.',
									properties: {
										value: {
											type: 'number',
											description:
												'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										},
										unit: {
											type: 'string',
											description:
												'ISO 4217 currency code of the amount, e.g. `USD`.',
										},
									},
									required: [],
								},
								'ec-sku-billing-method': {
									type: 'string',
									description:
										'[Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU.',
									default: '',
									enum: ['', 'one-time', 'subscription'],
								},
								'ec-sku-subscription-plan': {
									type: 'object',
									description:
										'[Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.',
									properties: {
										interval: {
											type: 'string',
											description: 'Interval of subscription renewal.',
											default: '',
											enum: ['', 'day', 'week', 'month', 'year'],
										},
										frequency: {
											type: 'number',
											description:
												'Frequency of billing within the interval.',
										},
										trial: {
											type: 'number',
											description: 'Number of days of a trial.',
										},
										plans: {
											type: 'array',
											description: 'The plans of the subscription plan.',
											items: {
												type: 'object',
												description: 'One subscription plan entry.',
												properties: {
													platform: {
														type: 'string',
														description:
															'The platform of the subscription plan.',
														default: '',
														enum: ['', 'stripe'],
													},
													id: {
														type: 'string',
														description:
															'The unique identifier of the plan.',
													},
													status: {
														type: 'string',
														description: 'The status of the plan.',
														default: '',
														enum: [
															'',
															'active',
															'inactive',
															'canceled',
														],
													},
												},
												required: [],
											},
										},
									},
									required: [],
								},
								'main-image': {
									type: 'string',
									description:
										'URL of the main image of the SKU. Webflow stores a copy and returns it as an object (`fileId`, `url`, `alt`).',
								},
								sku: {
									type: 'string',
									description:
										'Your own SKU code for this variant (free text, shown in the Webflow dashboard).',
								},
								'sku-properties': {
									type: 'array',
									description:
										'Options are declared on the product (`product.fieldData.sku-properties`), not per SKU — leave this out and reference them through `sku-values`. Present in the vendor schema, never returned for SKUs.',
									items: {
										type: 'object',
										description: 'A variant/option type for a SKU.',
										properties: {
											id: {
												type: 'string',
												description:
													'Identifier of the option, chosen by the caller (e.g. `color`); SKUs reference it as the key in `sku-values`. Required for every `sku-properties` entry.',
											},
											name: {
												type: 'string',
												description:
													'Name of the option as shown to shoppers (e.g. `Color`). Required for every `sku-properties` entry.',
											},
											enum: {
												type: 'array',
												description:
													'The values of the option (e.g. Red, Blue). Required for every `sku-properties` entry.',
												items: {
													type: 'object',
													description:
														'Enumerated Product variants/Options for the SKU.',
													properties: {
														id: {
															type: 'string',
															description:
																'Identifier of the value, chosen by the caller (e.g. `blue`); SKUs reference it as the value in `sku-values`. Required for every `enum` entry.',
														},
														name: {
															type: 'string',
															description:
																'Name of the value as shown to shoppers (e.g. `Blue`). Required for every `enum` entry.',
														},
														slug: {
															type: 'string',
															description:
																'Slug of the value in the site URL structure (e.g. `blue`). Required for every `enum` entry.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
								},
							},
							required: ['name', 'slug', 'price'],
						},
					},
					required: [],
				},
			},
			required: ['site_id', 'product', 'sku'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				product: {
					type: 'object',
					description: 'The Product object.',
					properties: {
						id: { type: 'string', description: 'Unique identifier for the Product.' },
						cmsLocaleId: {
							type: 'string',
							description: 'Identifier for the locale of the CMS item.',
						},
						lastPublished: {
							type: 'string',
							description: 'The date the Product was last published.',
						},
						lastUpdated: {
							type: 'string',
							description: 'The date the Product was last updated.',
						},
						createdOn: {
							type: 'string',
							description: 'The date the Product was created.',
						},
						isArchived: {
							type: 'boolean',
							description:
								'Whether the product is archived. Products created without `isArchived` are not archived (`false`).',
						},
						isDraft: {
							type: 'boolean',
							description:
								'Whether the product is a draft. Products created without `isDraft` are not drafts (`false`).',
						},
						fieldData: {
							type: 'object',
							description:
								'Field values of the product keyed by the Products collection field slug. Standard fields are listed; custom fields added to the Products collection are returned under their slug as well and are not declared here.',
							properties: {
								name: { type: 'string', description: 'Name of the Product.' },
								slug: {
									type: 'string',
									description: 'URL structure of the Product in your site.',
								},
								description: {
									type: 'string',
									description: 'A description of your product.',
								},
								shippable: {
									type: 'boolean',
									description: 'Boolean determining if the Product is shippable.',
								},
								'sku-properties': {
									type: 'array',
									description: 'Variant types to include in SKUs.',
									items: {
										type: 'object',
										description: 'A variant/option type for a SKU.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for a collection of Product Variants.',
											},
											name: {
												type: 'string',
												description:
													'Name of the collection of Product Variants.',
											},
											enum: {
												type: 'array',
												description:
													'The individual Product variants that are contained within the collection.',
												items: {
													type: 'object',
													description:
														'Enumerated Product variants/Options for the SKU.',
													properties: {
														id: {
															type: 'string',
															description:
																'Unique identifier for a Product variant/Option.',
														},
														name: {
															type: 'string',
															description:
																'Name of the Product variant/Option.',
														},
														slug: {
															type: 'string',
															description:
																'Slug for the Product variant/Option in the Site URL structure.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
								},
								category: {
									type: 'array',
									description: 'The category your product belongs to.',
									items: {
										type: 'string',
										description: 'ID of a category item.',
									},
								},
								'tax-category': {
									type: 'string',
									description:
										'Product tax class. One of: `standard-taxable`, `standard-exempt`, `books-religious`, `books-textbook`, `clothing`, `clothing-swimwear`, `digital-goods`, `digital-service`, `drugs-non-prescription`, `drugs-prescription`, `food-bottled-water`, `food-candy`, `food-groceries`, `food-prepared`, `food-soda`, `food-supplements`, `magazine-individual`, `magazine-subscription`, `service-admission`, `service-advertising`, `service-dry-cleaning`, `service-hairdressing`, `service-installation`, `service-miscellaneous`, `service-parking`, `service-printing`, `service-professional`, `service-repair`, `service-training`.',
								},
								'default-sku': {
									type: 'string',
									description: 'The default SKU associated with this product.',
								},
								'ec-product-type': {
									type: 'string',
									description:
										'[Product types.](https://university.webflow.com/lesson/add-and-manage-products-and-categories?topics=ecommerce#how-to-understand-product-types) Enums reflect the following values in order: Physical, Digital, Service, Membership, Advanced. One of: `ff42fee0113744f693a764e3431a9cc2`, `f22027db68002190aef89a4a2b7ac8a1`, `c599e43b1a1c34d5a323aedf75d3adf6`, `e348fd487d0102946c9179d2a94bb613`, `b6ccc1830db4b1babeb06a9ac5f6dd76`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				sku: {
					type: 'object',
					description:
						'The default SKU created together with the product (a single object, although the vendor reference documents an array). Its `id` is needed by `updateProductSku`, `getItemInventory` and `updateItemInventory`.',
					properties: {
						id: { type: 'string', description: 'Unique identifier for the SKU.' },
						cmsLocaleId: {
							type: 'string',
							description: 'Identifier for the locale of the CMS item.',
						},
						lastPublished: {
							type: 'string',
							description: 'The date the SKU was last published.',
						},
						lastUpdated: {
							type: 'string',
							description: 'The date the SKU was last updated.',
						},
						createdOn: { type: 'string', description: 'The date the SKU was created.' },
						fieldData: {
							type: 'object',
							description: 'Standard and Custom fields for a SKU.',
							properties: {
								'sku-values': {
									type: 'object',
									description:
										'A mapping between SKU properties and their values, represented as key-value pairs. Each key represents a SKU Property ID (e.g. "color") and maps to its corresponding SKU Value ID (e.g. "blue"). This structure defines the specific variant combination for a SKU.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
								product: {
									type: 'string',
									description:
										'ID of the product item this SKU belongs to. Returned by the API but not described in the vendor reference.',
								},
								name: { type: 'string', description: 'Name of the SKU (variant).' },
								slug: {
									type: 'string',
									description: 'URL structure of the SKU in your site.',
								},
								price: {
									type: 'object',
									description:
										'Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
									properties: {
										value: {
											type: 'number',
											description:
												'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										},
										unit: {
											type: 'string',
											description:
												'ISO 4217 currency code of the amount, e.g. `USD`.',
										},
									},
									required: [],
								},
								'compare-at-price': {
									type: 'object',
									description:
										'Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.',
									properties: {
										value: {
											type: 'number',
											description:
												'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										},
										unit: {
											type: 'string',
											description:
												'ISO 4217 currency code of the amount, e.g. `USD`.',
										},
									},
									required: [],
								},
								'ec-sku-billing-method': {
									type: 'string',
									description:
										'[Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU. One of: `one-time`, `subscription`.',
								},
								'ec-sku-subscription-plan': {
									type: 'object',
									description:
										'[Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.',
									properties: {
										interval: {
											type: 'string',
											description:
												'Interval of subscription renewal. One of: `day`, `week`, `month`, `year`.',
										},
										frequency: {
											type: 'number',
											description:
												'Frequency of billing within the interval.',
										},
										trial: {
											type: 'number',
											description: 'Number of days of a trial.',
										},
										plans: {
											type: 'array',
											description: 'The plans of the subscription plan.',
											items: {
												type: 'object',
												description: 'One subscription plan entry.',
												properties: {
													platform: {
														type: 'string',
														description:
															'The platform of the subscription plan. One of: `stripe`.',
													},
													id: {
														type: 'string',
														description:
															'The unique identifier of the plan.',
													},
													status: {
														type: 'string',
														description:
															'The status of the plan. One of: `active`, `inactive`, `canceled`.',
													},
												},
												required: [],
											},
										},
									},
									required: [],
								},
								'main-image': {
									type: 'object',
									description:
										'The main image of the SKU, or `null`. Set with an image URL; Webflow stores a copy and returns the asset.',
									properties: {
										fileId: {
											type: 'string',
											description: 'ID of the uploaded image asset.',
										},
										url: { type: 'string', description: 'URL of the image.' },
										alt: {
											type: 'string',
											description: 'Alt text of the image, or `null`.',
										},
									},
									required: [],
								},
								'more-images': {
									type: 'array',
									description:
										'Additional images of the SKU, or `null`. Returned by the API but not described in the vendor reference.',
									items: {
										type: 'object',
										description: 'An additional image of the SKU.',
										properties: {
											fileId: {
												type: 'string',
												description: 'ID of the uploaded image asset.',
											},
											url: {
												type: 'string',
												description: 'URL of the image.',
											},
											alt: {
												type: 'string',
												description: 'Alt text of the image, or `null`.',
											},
										},
										required: [],
									},
								},
								'download-files': {
									type: 'array',
									description:
										'Downloadable files attached to the SKU (digital products), or `null`. Returned by the API but not described in the vendor reference. Only empty values were observed, so the item structure is left open.',
									items: {
										type: 'object',
										description:
											'A downloadable file of the SKU. Returned as an open object; only empty lists were observed and the vendor reference does not describe it.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
								},
								sku: {
									type: 'string',
									description:
										'Your own SKU code for this variant (free text), or `null`.',
								},
								width: {
									type: 'number',
									description:
										'The physical width of the variant if provided, or null.',
								},
								length: {
									type: 'number',
									description:
										'The physical length of the variant if provided, or null.',
								},
								height: {
									type: 'number',
									description:
										'The physical height of the variant if provided, or null.',
								},
								weight: {
									type: 'number',
									description:
										'The physical weight of the variant if provided, or null.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'createProductSkus',
		label: 'Create product SKUs',
		description: 'Adds SKUs (variants) to an existing product.',
		context:
			'---\nname: createProductSkus\ndescription: Adds SKUs (variants) to an existing product.\n---\n\nWraps `POST /sites/{site_id}/products/{product_id}/skus` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/products-sk-us/create-sku)) and returns the raw response body.\n\n- Each SKU\'s `fieldData.sku-values` must reference the `sku-properties` declared on the product (property ID → enum value ID); see `getProduct`. Creating SKUs via the API sets the product type to `Advanced`.\n- Each SKU needs `name`, `slug` and `price`; `price.value` is the amount in the smallest unit of the currency (`{ "value": 2500, "unit": "USD" }` is 25.00 USD).\n- Returns `{ "skus": [...] }` with the created SKU items.\n- Products and SKUs are CMS items of the e-commerce Products and SKUs collections; `fieldData` keys are the collection field slugs (`name`, `slug`, `description`, `sku-properties`, `price`, …). Keys containing hyphens are sent exactly as named.\n- Required scope: `ecommerce:write`.\n',
		accounts: { webflow2: { scope: ['ecommerce:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				product_id: {
					type: 'string',
					description:
						'Unique identifier for a product. Use the `listProducts` endpoint to find it.',
				},
				publishStatus: {
					type: 'string',
					description:
						'Indicate whether the SKUs should be set as "staging" or "live". Defaults to `staging`.',
					default: '',
					enum: ['', 'staging', 'live'],
				},
				skus: {
					type: 'array',
					description:
						'SKUs to create, one entry per variant combination. Standard SKU fields go under each `fieldData`; custom fields of the SKU collection can be added under their field slug.',
					items: {
						type: 'object',
						description: 'The SKU object.',
						properties: {
							fieldData: {
								type: 'object',
								description: 'Standard and Custom fields for a SKU.',
								properties: {
									'sku-values': {
										description:
											'Required for every variant: maps each `sku-properties` ID declared on the product to one of its enum IDs, e.g. `{ "color": "blue" }`. The combination must be unique per SKU.',
									},
									name: {
										type: 'string',
										description: 'Name of the SKU (variant).',
									},
									slug: {
										type: 'string',
										description:
											'URL structure of the SKU in your site. Required — Webflow does not derive it from the name here.',
									},
									price: {
										type: 'object',
										description:
											'Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										properties: {
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
											},
											unit: {
												type: 'string',
												description:
													'ISO 4217 currency code of the amount, e.g. `USD`.',
											},
											currency: {
												type: 'string',
												description:
													'Same value as `unit`; optional — Webflow returns only `unit`.',
											},
										},
										required: [],
									},
									'compare-at-price': {
										type: 'object',
										description:
											'Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.',
										properties: {
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
											},
											unit: {
												type: 'string',
												description:
													'ISO 4217 currency code of the amount, e.g. `USD`.',
											},
										},
										required: [],
									},
									'ec-sku-billing-method': {
										type: 'string',
										description:
											'[Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU.',
										default: '',
										enum: ['', 'one-time', 'subscription'],
									},
									'ec-sku-subscription-plan': {
										type: 'object',
										description:
											'[Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.',
										properties: {
											interval: {
												type: 'string',
												description: 'Interval of subscription renewal.',
												default: '',
												enum: ['', 'day', 'week', 'month', 'year'],
											},
											frequency: {
												type: 'number',
												description:
													'Frequency of billing within the interval.',
											},
											trial: {
												type: 'number',
												description: 'Number of days of a trial.',
											},
											plans: {
												type: 'array',
												description: 'The plans of the subscription plan.',
												items: {
													type: 'object',
													description: 'One subscription plan entry.',
													properties: {
														platform: {
															type: 'string',
															description:
																'The platform of the subscription plan.',
															default: '',
															enum: ['', 'stripe'],
														},
														id: {
															type: 'string',
															description:
																'The unique identifier of the plan.',
														},
														status: {
															type: 'string',
															description: 'The status of the plan.',
															default: '',
															enum: [
																'',
																'active',
																'inactive',
																'canceled',
															],
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
									'main-image': {
										type: 'string',
										description:
											'URL of the main image of the SKU. Webflow stores a copy and returns it as an object (`fileId`, `url`, `alt`).',
									},
									sku: {
										type: 'string',
										description:
											'Your own SKU code for this variant (free text, shown in the Webflow dashboard).',
									},
									'sku-properties': {
										type: 'array',
										description:
											'Options are declared on the product (`product.fieldData.sku-properties`), not per SKU — leave this out and reference them through `sku-values`. Present in the vendor schema, never returned for SKUs.',
										items: {
											type: 'object',
											description: 'A variant/option type for a SKU.',
											properties: {
												id: {
													type: 'string',
													description:
														'Identifier of the option, chosen by the caller (e.g. `color`); SKUs reference it as the key in `sku-values`. Required for every `sku-properties` entry.',
												},
												name: {
													type: 'string',
													description:
														'Name of the option as shown to shoppers (e.g. `Color`). Required for every `sku-properties` entry.',
												},
												enum: {
													type: 'array',
													description:
														'The values of the option (e.g. Red, Blue). Required for every `sku-properties` entry.',
													items: {
														type: 'object',
														description:
															'Enumerated Product variants/Options for the SKU.',
														properties: {
															id: {
																type: 'string',
																description:
																	'Identifier of the value, chosen by the caller (e.g. `blue`); SKUs reference it as the value in `sku-values`. Required for every `enum` entry.',
															},
															name: {
																type: 'string',
																description:
																	'Name of the value as shown to shoppers (e.g. `Blue`). Required for every `enum` entry.',
															},
															slug: {
																type: 'string',
																description:
																	'Slug of the value in the site URL structure (e.g. `blue`). Required for every `enum` entry.',
															},
														},
														required: [],
													},
												},
											},
											required: [],
										},
									},
								},
								required: ['name', 'slug', 'price'],
							},
						},
						required: [],
					},
				},
			},
			required: ['site_id', 'product_id', 'skus'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				skus: {
					type: 'array',
					description: 'SKUs (variants) of the product.',
					items: {
						type: 'object',
						description: 'The SKU object.',
						properties: {
							id: { type: 'string', description: 'Unique identifier for the SKU.' },
							cmsLocaleId: {
								type: 'string',
								description: 'Identifier for the locale of the CMS item.',
							},
							lastPublished: {
								type: 'string',
								description: 'The date the SKU was last published.',
							},
							lastUpdated: {
								type: 'string',
								description: 'The date the SKU was last updated.',
							},
							createdOn: {
								type: 'string',
								description: 'The date the SKU was created.',
							},
							fieldData: {
								type: 'object',
								description: 'Standard and Custom fields for a SKU.',
								properties: {
									'sku-values': {
										type: 'object',
										description:
											'A mapping between SKU properties and their values, represented as key-value pairs. Each key represents a SKU Property ID (e.g. "color") and maps to its corresponding SKU Value ID (e.g. "blue"). This structure defines the specific variant combination for a SKU.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									product: {
										type: 'string',
										description:
											'ID of the product item this SKU belongs to. Returned by the API but not described in the vendor reference.',
									},
									name: {
										type: 'string',
										description: 'Name of the SKU (variant).',
									},
									slug: {
										type: 'string',
										description: 'URL structure of the SKU in your site.',
									},
									price: {
										type: 'object',
										description:
											'Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										properties: {
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
											},
											unit: {
												type: 'string',
												description:
													'ISO 4217 currency code of the amount, e.g. `USD`.',
											},
										},
										required: [],
									},
									'compare-at-price': {
										type: 'object',
										description:
											'Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.',
										properties: {
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
											},
											unit: {
												type: 'string',
												description:
													'ISO 4217 currency code of the amount, e.g. `USD`.',
											},
										},
										required: [],
									},
									'ec-sku-billing-method': {
										type: 'string',
										description:
											'[Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU. One of: `one-time`, `subscription`.',
									},
									'ec-sku-subscription-plan': {
										type: 'object',
										description:
											'[Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.',
										properties: {
											interval: {
												type: 'string',
												description:
													'Interval of subscription renewal. One of: `day`, `week`, `month`, `year`.',
											},
											frequency: {
												type: 'number',
												description:
													'Frequency of billing within the interval.',
											},
											trial: {
												type: 'number',
												description: 'Number of days of a trial.',
											},
											plans: {
												type: 'array',
												description: 'The plans of the subscription plan.',
												items: {
													type: 'object',
													description: 'One subscription plan entry.',
													properties: {
														platform: {
															type: 'string',
															description:
																'The platform of the subscription plan. One of: `stripe`.',
														},
														id: {
															type: 'string',
															description:
																'The unique identifier of the plan.',
														},
														status: {
															type: 'string',
															description:
																'The status of the plan. One of: `active`, `inactive`, `canceled`.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
									'main-image': {
										type: 'object',
										description:
											'The main image of the SKU, or `null`. Set with an image URL; Webflow stores a copy and returns the asset.',
										properties: {
											fileId: {
												type: 'string',
												description: 'ID of the uploaded image asset.',
											},
											url: {
												type: 'string',
												description: 'URL of the image.',
											},
											alt: {
												type: 'string',
												description: 'Alt text of the image, or `null`.',
											},
										},
										required: [],
									},
									'more-images': {
										type: 'array',
										description:
											'Additional images of the SKU, or `null`. Returned by the API but not described in the vendor reference.',
										items: {
											type: 'object',
											description: 'An additional image of the SKU.',
											properties: {
												fileId: {
													type: 'string',
													description: 'ID of the uploaded image asset.',
												},
												url: {
													type: 'string',
													description: 'URL of the image.',
												},
												alt: {
													type: 'string',
													description:
														'Alt text of the image, or `null`.',
												},
											},
											required: [],
										},
									},
									'download-files': {
										type: 'array',
										description:
											'Downloadable files attached to the SKU (digital products), or `null`. Returned by the API but not described in the vendor reference. Only empty values were observed, so the item structure is left open.',
										items: {
											type: 'object',
											description:
												'A downloadable file of the SKU. Returned as an open object; only empty lists were observed and the vendor reference does not describe it.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
									sku: {
										type: 'string',
										description:
											'Your own SKU code for this variant (free text), or `null`.',
									},
									width: {
										type: 'number',
										description:
											'The physical width of the variant if provided, or null.',
									},
									length: {
										type: 'number',
										description:
											'The physical length of the variant if provided, or null.',
									},
									height: {
										type: 'number',
										description:
											'The physical height of the variant if provided, or null.',
									},
									weight: {
										type: 'number',
										description:
											'The physical weight of the variant if provided, or null.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'deleteAsset',
		label: 'Delete an asset',
		description: 'Deletes an asset from a site.',
		context:
			'---\nname: deleteAsset\ndescription: Deletes an asset from a site.\n---\n\nWraps `DELETE /assets/{asset_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/assets/assets/delete)).\n\n- Returns an empty response (`204 No Content`).\n- Required scope: `assets:write`.\n',
		accounts: { webflow2: { scope: ['assets:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				asset_id: {
					type: 'string',
					description:
						'Unique identifier for an asset. Use the `listAssets` endpoint to find it.',
				},
			},
			required: ['asset_id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'deleteItem',
		label: 'Delete an item',
		description: 'Deletes a staged item from a CMS collection.',
		context:
			'---\nname: deleteItem\ndescription: Deletes a staged item from a CMS collection.\n---\n\nWraps `DELETE /collections/{collection_id}/items/{item_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/delete-item)).\n\n- Wraps the single-item `DELETE /collections/{collection_id}/items/{item_id}` call ([Delete Item](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/delete-item)) used by the app\'s "Delete an Item" module. Webflow also documents a bulk form [Delete Items](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/delete-items) (`DELETE /collections/{collection_id}/items` with an `items[]` body), available through `arbitraryCall`.\n- Also the way to delete an e-commerce product: products are items of the site\'s Products collection (`listCollections` → the collection with slug `product`), so call this with that collection ID and the product ID (`listProducts` / `getProduct` → `product.id`). Webflow deletes all SKUs of the product with it (they disappear from the SKUs collection). The Data API has no dedicated product-delete route.\n- Returns an empty response (`204 No Content`). The endpoint sends no `cmsLocaleId`; Webflow documents an optional `cmsLocaleId` query parameter for removing a single locale version of the item — use `arbitraryCall` for that.\n- Required scope: `cms:write`.\n',
		accounts: { webflow2: { scope: ['cms:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				collection_id: {
					type: 'string',
					description:
						'Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.',
				},
				item_id: {
					type: 'string',
					description:
						'Unique identifier for a collection item. Use the `listItems` endpoint to find it.',
				},
			},
			required: ['collection_id', 'item_id'],
		},
		outputSchema: { type: 'object', properties: {}, required: [] },
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'fulfillOrder',
		label: 'Fulfill an order',
		description: 'Marks an order as fulfilled.',
		context:
			'---\nname: fulfillOrder\ndescription: Marks an order as fulfilled.\n---\n\nWraps `POST /sites/{site_id}/orders/{order_id}/fulfill` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/orders/update-fulfill)) and returns the raw response body.\n\n- Set `sendOrderFulfilledEmail` to `true` to send the customer the "order fulfilled" email. Returns the updated order.\n- Required scope: `ecommerce:write`.\n',
		accounts: { webflow2: { scope: ['ecommerce:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				order_id: {
					type: 'string',
					description:
						'Unique identifier for an order. Use the `listOrders` endpoint to find it.',
				},
				sendOrderFulfilledEmail: {
					type: 'boolean',
					description:
						'Whether or not the Order Fulfilled email should be sent. Defaults to `false`.',
				},
			},
			required: ['site_id', 'order_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				orderId: {
					type: 'string',
					description:
						'The order ID. Will usually be 6 hex characters, but can also be 9 hex characters if the site has a very large number of Orders. Randomly assigned.',
				},
				status: {
					type: 'string',
					description:
						'The status of the Order. One of: `pending`, `unfulfilled`, `fulfilled`, `disputed`, `dispute-lost`, `refunded`.',
				},
				comment: {
					type: 'string',
					description:
						'A comment string for this Order, which is editable by API user (not used by Webflow).',
				},
				orderComment: {
					type: 'string',
					description: 'A comment that the customer left when making their Order.',
				},
				acceptedOn: {
					type: 'string',
					description: 'The ISO8601 timestamp that an Order was placed.',
				},
				fulfilledOn: {
					type: 'string',
					description:
						"When an Order is marked as 'fulfilled', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null.",
				},
				refundedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'refunded', this field represents the timestamp of the refund in ISO8601 format. Otherwise, it is null.",
				},
				disputedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'disputed', this field represents the timestamp of the dispute in ISO8601 format. Otherwise, it is null.",
				},
				disputeUpdatedOn: {
					type: 'string',
					description:
						'If an Order has been disputed by the customer, this key will be set to the ISO8601 timestamp of the last update received. If the Order is not disputed, the key will be null.',
				},
				disputeLastStatus: {
					type: 'string',
					description:
						"If an order was disputed by the customer, then this key will be set with the [dispute's status](https://stripe.com/docs/api#dispute_object-status). One of: `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, `lost`.",
				},
				customerPaid: {
					type: 'object',
					description: 'The total paid by the customer.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				netAmount: {
					type: 'object',
					description: 'The net amount after application fees.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				applicationFee: {
					type: 'object',
					description: 'The application fee assessed by the platform.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				allAddresses: {
					type: 'array',
					description: 'All addresses provided by the customer during the ordering flow.',
					items: {
						type: 'object',
						description: 'A customer address.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
							},
							japanType: {
								type: 'string',
								description:
									'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
							},
							addressee: {
								type: 'string',
								description: 'Display name on the address.',
							},
							line1: {
								type: 'string',
								description: 'The first line of the address.',
							},
							line2: {
								type: 'string',
								description: 'The second line of the address.',
							},
							city: { type: 'string', description: 'The city of the address.' },
							state: {
								type: 'string',
								description: 'The state or province of the address.',
							},
							country: { type: 'string', description: 'The country of the address.' },
							postalCode: {
								type: 'string',
								description: 'The postal code of the address.',
							},
						},
						required: [],
					},
				},
				shippingAddress: {
					type: 'object',
					description: 'The shipping address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				billingAddress: {
					type: 'object',
					description: 'The billing address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				shippingProvider: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping provider used (not used by Webflow).',
				},
				shippingTracking: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping tracking number for the order (not used by Webflow).',
				},
				shippingTrackingURL: { type: 'string', description: 'The shipping tracking URL.' },
				customerInfo: {
					type: 'object',
					description: 'An object with the keys `fullName` and `email`.',
					properties: {
						fullName: { type: 'string', description: 'The full name of the Customer.' },
						email: { type: 'string', description: "The Customer's email address." },
					},
					required: [],
				},
				purchasedItems: {
					type: 'array',
					description: 'An array of all things that the Customer purchased.',
					items: {
						type: 'object',
						description: 'An Item that was purchased.',
						properties: {
							count: { type: 'number', description: 'Number of Item purchased.' },
							rowTotal: {
								type: 'object',
								description: 'The total for the row.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							productId: {
								type: 'string',
								description: 'The unique identifier for the Product.',
							},
							productName: {
								type: 'string',
								description: 'User-facing name of the Product.',
							},
							productSlug: { type: 'string', description: 'Slug for the Product.' },
							variantId: {
								type: 'string',
								description: 'Identifier for the Product Variant (SKU).',
							},
							variantName: {
								type: 'string',
								description: 'User-facing name of the Product Variant (SKU).',
							},
							variantSlug: {
								type: 'string',
								description: 'Slug for the Product Variant (SKU).',
							},
							variantSKU: {
								type: 'string',
								description:
									'The user-defined custom SKU of the Product Variant (SKU).',
							},
							variantImage: {
								type: 'object',
								description: 'The variant image of the purchased item.',
								properties: {
									url: {
										type: 'string',
										description: "The hosted location for the Variant's image.",
									},
									file: {
										type: 'object',
										description: 'The file of the variant image.',
										properties: {
											size: {
												type: 'number',
												description: 'The image size in bytes.',
											},
											originalFileName: {
												type: 'string',
												description: 'The original name of the image.',
											},
											createdOn: {
												type: 'string',
												description: 'The creation timestamp of the image.',
											},
											contentType: {
												type: 'string',
												description: 'The MIME type of the image.',
											},
											width: {
												type: 'number',
												description: 'The image width in pixels.',
											},
											height: {
												type: 'number',
												description: 'The image height in pixels.',
											},
											variants: {
												type: 'array',
												description: 'Variants of the supplied image.',
												items: {
													type: 'object',
													description:
														'A resized rendition of the image.',
													properties: {
														url: {
															type: 'string',
															description:
																"The hosted location for the Variant's image.",
														},
														originalFileName: {
															type: 'string',
															description:
																'The original file name of the variant.',
														},
														size: {
															type: 'number',
															description: 'The image size in bytes.',
														},
														width: {
															type: 'number',
															description:
																'The image width in pixels.',
														},
														height: {
															type: 'number',
															description:
																'The image height in pixels.',
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
							variantPrice: {
								type: 'object',
								description: 'The price corresponding to the variant.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							weight: {
								type: 'number',
								description:
									'The physical weight of the variant if provided, or null.',
							},
							width: {
								type: 'number',
								description:
									'The physical width of the variant if provided, or null.',
							},
							height: {
								type: 'number',
								description:
									'The physical height of the variant if provided, or null.',
							},
							length: {
								type: 'number',
								description:
									'The physical length of the variant if provided, or null.',
							},
						},
						required: [],
					},
				},
				purchasedItemsCount: {
					type: 'number',
					description: "The sum of all 'count' fields in 'purchasedItems'.",
				},
				stripeDetails: {
					type: 'object',
					description:
						'An object with various Stripe IDs, useful for linking into the Stripe dashboard.',
					properties: {
						subscriptionId: {
							type: 'string',
							description: 'Stripe-generated identifier for the Subscription.',
						},
						paymentMethod: {
							type: 'string',
							description: 'Stripe-generated identifier for the PaymentMethod used.',
						},
						paymentIntentId: {
							type: 'string',
							description:
								'Stripe-generated identifier for the PaymentIntent, or null.',
						},
						customerId: {
							type: 'string',
							description: 'Stripe-generated customer identifier, or null.',
						},
						chargeId: {
							type: 'string',
							description: 'Stripe-generated charge identifier, or null.',
						},
						disputeId: {
							type: 'string',
							description: 'Stripe-generated dispute identifier, or null.',
						},
						refundId: {
							type: 'string',
							description: 'Stripe-generated refund identifier, or null.',
						},
						refundReason: {
							type: 'string',
							description: 'Stripe-generated refund reason, or null.',
						},
					},
					required: [],
				},
				stripeCard: {
					type: 'object',
					description:
						'Details on the card used to pay for this order, if the order was finalized with Stripe.',
					properties: {
						last4: {
							type: 'string',
							description: 'The last 4 digits on the card as a string.',
						},
						brand: {
							type: 'string',
							description:
								"The card's brand (i.e. the credit card network). One of: `Visa`, `American Express`, `MasterCard`, `Discover`, `JCB`, `Diners Club`, `Unknown`.",
						},
						ownerName: { type: 'string', description: 'The name on the card.' },
						expires: {
							type: 'object',
							description: "The card's expiration date.",
							properties: {
								year: {
									type: 'number',
									description: 'Year that the card expires.',
								},
								month: {
									type: 'number',
									description: 'Month that the card expires.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				paypalDetails: {
					type: 'object',
					description: 'PayPal transaction details when the order was paid with PayPal.',
					properties: {
						orderId: { type: 'string', description: 'PayPal order identifier.' },
						payerId: { type: 'string', description: 'PayPal payer identifier.' },
						captureId: { type: 'string', description: 'PayPal capture identifier.' },
						refundId: { type: 'string', description: 'PayPal refund identifier.' },
						refundReason: {
							type: 'string',
							description: 'PayPal-issued reason for the refund.',
						},
						disputeId: { type: 'string', description: 'PayPal dispute identifier.' },
					},
					required: [],
				},
				customData: {
					type: 'array',
					description:
						'An array of additional inputs for custom order data gathering. Each object in the array represents an input with a name, and a textInput, textArea, or checkbox value.',
					items: {
						type: 'object',
						description: 'One custom-data entry.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				metadata: {
					type: 'object',
					description: 'Additional metadata of the order.',
					properties: {
						isBuyNow: {
							type: 'boolean',
							description: 'Whether the order was placed through the Buy Now button.',
						},
					},
					required: [],
				},
				isCustomerDeleted: {
					type: 'boolean',
					description:
						'A boolean indicating whether the customer has been deleted from the site.',
				},
				isShippingRequired: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that require shipping.',
				},
				hasDownloads: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that are downloadable.',
				},
				paymentProcessor: {
					type: 'string',
					description: 'A string indicating the payment processor used for this order.',
				},
				totals: {
					type: 'object',
					description: 'An object describing various pricing totals.',
					properties: {
						subtotal: {
							type: 'object',
							description: 'The subtotal price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
						extras: {
							type: 'array',
							description:
								'An array of extra items, includes discounts, shipping, and taxes.',
							items: {
								type: 'object',
								description:
									'Extra order items, includes discounts, shipping, and taxes.',
								properties: {
									type: {
										type: 'string',
										description:
											'The type of extra item this is. One of: `discount`, `discount-shipping`, `shipping`, `tax`.',
									},
									name: {
										type: 'string',
										description:
											'A human-readable (but English) name for this extra charge.',
									},
									description: {
										type: 'string',
										description:
											'A human-readable (but English) description of this extra charge.',
									},
									price: {
										type: 'object',
										description: 'The price for the item.',
										properties: {
											unit: {
												type: 'string',
												description: 'The three-letter ISO currency code.',
											},
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
											},
											string: {
												type: 'string',
												description:
													'The user-facing string representation of the amount.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						total: {
							type: 'object',
							description: 'The total price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				downloadFiles: {
					type: 'array',
					description: 'An array of downloadable file objects.',
					items: {
						type: 'object',
						description: 'One downloadable file.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the downloadable file.',
							},
							name: {
								type: 'string',
								description: 'The user-facing name for the downloadable file.',
							},
							url: {
								type: 'string',
								description: 'The hosted location for the downloadable file.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getAssetFolder',
		label: 'Get an asset folder',
		description: 'Returns the details of an asset folder.',
		context:
			'---\nname: getAssetFolder\ndescription: Returns the details of an asset folder.\n---\n\nWraps `GET /asset_folders/{asset_folder_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/assets/asset-folders/get-folder)) and returns the raw response body.\n\n- `assets` lists the IDs of the assets in the folder.\n- Required scope: `assets:read`.\n',
		accounts: { webflow2: { scope: ['assets:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				asset_folder_id: {
					type: 'string',
					description:
						'Unique identifier for an asset folder. Use the `listAssetFolders` endpoint to find it.',
				},
			},
			required: ['asset_folder_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the Asset Folder.' },
				displayName: {
					type: 'string',
					description: 'User visible name for the Asset Folder.',
				},
				parentFolder: {
					type: 'string',
					description: 'Pointer to parent Asset Folder (or null if root).',
				},
				assets: {
					type: 'array',
					description: 'IDs of the assets in the folder.',
					items: { type: 'string', description: 'ID of an asset in the folder.' },
				},
				siteId: {
					type: 'string',
					description: 'The unique ID of the site the Asset Folder belongs to.',
				},
				createdOn: {
					type: 'string',
					description: 'Date that the Asset Folder was created on.',
				},
				lastUpdated: {
					type: 'string',
					description: 'Date that the Asset Folder was last updated on.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getCollection',
		label: 'Get a collection',
		description: 'Returns a CMS collection including its field schema.',
		context:
			'---\nname: getCollection\ndescription: Returns a CMS collection including its field schema.\n---\n\nWraps `GET /collections/{collection_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collections/get)) and returns the raw response body.\n\n- Use `fields[].slug` as the keys of `fieldData` when creating or updating items.\n- `fields[].validations` is `null` for most field types; its keys depend on `type` (e.g. `maxLength` / `singleLine` / `pattern` / `messages` for PlainText, `minValue` / `format` / `precision` / `allowNegative` for Number, `acceptedExtensions` for images and files, `collectionId` for Reference / MultiReference, `options[]` for Option). For Option fields write `options[].id` as the item value; for Reference fields write item IDs from the collection named by `collectionId`.\n- Required scope: `cms:read`.\n',
		accounts: { webflow2: { scope: ['cms:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				collection_id: {
					type: 'string',
					description:
						'Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.',
				},
			},
			required: ['collection_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for a Collection.' },
				displayName: { type: 'string', description: 'Name given to the Collection.' },
				singularName: {
					type: 'string',
					description:
						'The name of one Item in Collection (e.g. “Blog Post” if the Collection is called “Blog Posts”).',
				},
				slug: { type: 'string', description: 'Slug of Collection in Site URL structure.' },
				createdOn: { type: 'string', description: 'The date the collection was created.' },
				lastUpdated: {
					type: 'string',
					description: 'The date the collection was last updated.',
				},
				fields: {
					type: 'array',
					description: 'The list of fields in the Collection.',
					items: {
						type: 'object',
						description: 'The details of a field in a collection.',
						properties: {
							id: { type: 'string', description: 'Unique identifier for a Field.' },
							isRequired: {
								type: 'boolean',
								description: 'Whether the field is required in the collection.',
							},
							isEditable: {
								type: 'boolean',
								description: 'Whether the field is editable.',
							},
							type: {
								type: 'string',
								description:
									"The field type. One of: `Color`, `DateTime`, `Email`, `ExtFileRef`, `File`, `Image`, `Link`, `MultiImage`, `MultiReference`, `Number`, `Option`, `Phone`, `PlainText`, `Reference`, `RichText`, `Switch`, `VideoLink`. The e-commerce Products and SKUs collections also return `SkuSettings`, `SkuValues`, `Price`, `TextOption`, `MultiExternalFile` and `MembershipPlan`, which Webflow's reference does not list.",
							},
							slug: {
								type: 'string',
								description:
									'Slug of Field in Site URL structure. Slugs should be all lowercase with no spaces. Any spaces will be converted to "-".',
							},
							displayName: { type: 'string', description: 'The name of a field.' },
							helpText: {
								type: 'string',
								description:
									'Additional text to help anyone filling out this field.',
							},
							validations: {
								type: 'object',
								description:
									'Validation rules of the field. Which keys are present depends on `type`; most types return `null`. Webflow documents this object as an open map, so keys other than those listed may appear.',
								properties: {
									singleLine: {
										type: 'boolean',
										description:
											'PlainText fields: `true` when the field accepts a single line of text only.',
									},
									maxLength: {
										type: 'number',
										description:
											'PlainText fields: maximum number of characters accepted.',
									},
									pattern: {
										description:
											'PlainText fields: regular expression the value must match. The API serialises it as an empty object; use `messages.pattern` for the human-readable rule.',
									},
									messages: {
										type: 'object',
										description:
											'Human-readable messages shown when a validation fails, keyed by the validation name.',
										properties: {
											maxLength: {
												type: 'string',
												description:
													'Message shown when the value exceeds `maxLength`.',
											},
											pattern: {
												type: 'string',
												description:
													'Message shown when the value does not match `pattern`.',
											},
										},
										required: [],
									},
									minValue: {
										type: 'number',
										description: 'Number fields: smallest value accepted.',
									},
									format: {
										type: 'string',
										description:
											'Number fields: the numeric format, e.g. `integer`. DateTime fields: `date-time` when the field stores a time as well as a date.',
									},
									precision: {
										type: 'number',
										description: 'Number fields: number of decimal places.',
									},
									allowNegative: {
										type: 'boolean',
										description:
											'Number fields: whether negative values are accepted.',
									},
									acceptedExtensions: {
										type: 'array',
										description:
											'Image, MultiImage and File fields: file extensions accepted for upload.',
										items: {
											type: 'string',
											description:
												'A file extension without the leading dot, e.g. `png`.',
										},
									},
									collectionId: {
										type: 'string',
										description:
											'Reference and MultiReference fields: ID of the collection whose item IDs this field accepts. Use `listItems` on that collection to find values.',
									},
									options: {
										type: 'array',
										description:
											'Option fields: the predefined choices. Write the option `id` (not the name) as the item value.',
										items: {
											type: 'object',
											description: 'One predefined choice.',
											properties: {
												id: {
													type: 'string',
													description:
														'Unique identifier of the option; this is the value to write into `fieldData`.',
												},
												name: {
													type: 'string',
													description: 'Display name of the option.',
												},
											},
											required: [],
										},
									},
									enumName: {
										type: 'string',
										description:
											'TextOption fields (e-commerce, e.g. billing method): name of the built-in enumeration that supplies the allowed values.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				fieldGroups: {
					type: 'array',
					description: 'The list of field groups in the Collection.',
					items: {
						type: 'object',
						description: 'A group of fields within a collection.',
						properties: {
							displayName: {
								type: 'string',
								description: 'The display name of the field group.',
							},
							fieldIds: {
								type: 'array',
								description: 'The IDs of the fields in this group.',
								items: { type: 'string', description: 'ID of a collection field.' },
							},
							description: {
								type: 'string',
								description: 'A description of the field group.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getCommentThread',
		label: 'Get a comment thread',
		description: 'Returns a comment thread.',
		context:
			"---\nname: getCommentThread\ndescription: Returns a comment thread.\n---\n\nWraps `GET /sites/{site_id}/comments/{comment_thread_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/comments/get-comment-thread)) and returns the raw response body.\n\n- New comments can take up to 5 minutes to appear in the API.\n- The response is the thread object (original comment) without its replies; use `listCommentReplies` for the replies. Webflow's reference lists paging and sorting query parameters on this route, but they have no effect on the single-object response, so the endpoint does not expose them.\n- Required scope: `comments:read`.\n",
		accounts: { webflow2: { scope: ['comments:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				comment_thread_id: {
					type: 'string',
					description:
						'Unique identifier for a comment thread. Use the `listCommentThreads` endpoint to find it.',
				},
				localeId: {
					type: 'string',
					description:
						'Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).',
				},
			},
			required: ['site_id', 'comment_thread_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the comment thread.' },
				siteId: { type: 'string', description: 'The site unique identifier.' },
				pageId: { type: 'string', description: 'The page unique identifier.' },
				localeId: { type: 'string', description: 'The locale unique identifier.' },
				elementId: {
					type: 'string',
					description:
						'ID of the element the comment is attached to. Returned by the API but not described in the vendor reference.',
				},
				objectId: {
					type: 'string',
					description:
						'ID of the object the comment belongs to (the page ID for `objectType` `page`). Returned by the API but not described in the vendor reference.',
				},
				objectType: {
					type: 'string',
					description:
						'Type of the object the comment belongs to, e.g. `page`. Returned by the API but not described in the vendor reference.',
				},
				itemId: { type: 'string', description: 'The item unique identifier.' },
				breakpoint: {
					type: 'string',
					description: 'The breakpoint the comment was left on.',
				},
				url: {
					type: 'string',
					description: 'The URL of the page the comment was left on.',
				},
				content: {
					type: 'string',
					description: "The content of the thread's opening comment.",
				},
				isResolved: {
					type: 'boolean',
					description:
						'Boolean determining if the comment thread is resolved. Defaults to `false`.',
				},
				author: {
					type: 'object',
					description: 'Author of the comment.',
					properties: {
						userId: {
							type: 'string',
							description: 'The unique identifier of the author.',
						},
						email: { type: 'string', description: 'Email of the author.' },
						name: { type: 'string', description: 'Name of the author.' },
						verified: {
							type: 'boolean',
							description:
								"Whether the user's email address is verified. Returned by the API but not described in the vendor reference.",
						},
					},
					required: [],
				},
				mentionedUsers: {
					type: 'array',
					description:
						'List of mentioned users. This is an empty array until email notifications are sent, which can take up to 5 minutes after the comment is created.',
					items: {
						type: 'object',
						description: 'One mentioned user.',
						properties: {
							userId: {
								type: 'string',
								description: 'The unique identifier of the mentioned user.',
							},
							email: { type: 'string', description: 'Email of the user.' },
							name: { type: 'string', description: 'Name of the User.' },
							verified: {
								type: 'boolean',
								description:
									"Whether the user's email address is verified. Returned by the API but not described in the vendor reference.",
							},
						},
						required: [],
					},
				},
				createdOn: {
					type: 'string',
					description: 'The date the comment thread was created.',
				},
				lastUpdated: {
					type: 'string',
					description: 'The date the comment thread was last updated.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getForm',
		label: 'Get a form',
		description: 'Returns the schema and settings of a form.',
		context:
			'---\nname: getForm\ndescription: Returns the schema and settings of a form.\n---\n\nWraps `GET /forms/{form_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/forms/forms/get)) and returns the raw response body.\n\n- `fields` is keyed by the form field ID; each entry describes the field (`displayName`, `type`, `userVisible`, `placeholder`).\n- Required scope: `forms:read`.\n',
		accounts: { webflow2: { scope: ['forms:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				form_id: {
					type: 'string',
					description:
						'Unique identifier for a form. Use the `listForms` endpoint to find it.',
				},
			},
			required: ['form_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				displayName: {
					type: 'string',
					description: 'The Form name displayed on the site.',
				},
				createdOn: { type: 'string', description: 'Date that the Form was created on.' },
				lastUpdated: {
					type: 'string',
					description: 'Date that the Form was last updated on.',
				},
				fields: {
					type: 'object',
					description: 'A collection of form field objects.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				responseSettings: {
					type: 'object',
					description: 'Settings for form responses.',
					properties: {
						redirectUrl: {
							type: 'string',
							description:
								'The URL or path to redirect the user to after form submission.',
						},
						redirectMethod: {
							type: 'string',
							description:
								'The HTTP request method to use for the redirectUrl (e.g. POST or GET).',
						},
						redirectAction: {
							type: 'string',
							description: 'The action to take after form submission.',
						},
						sendEmailConfirmation: {
							type: 'boolean',
							description: 'Whether to send an email confirmation to the user.',
						},
					},
					required: [],
				},
				id: { type: 'string', description: 'The unique ID for the Form.' },
				siteId: {
					type: 'string',
					description: 'The unique ID of the Site the Form belongs to.',
				},
				siteDomainId: {
					type: 'string',
					description: "The unique ID corresponding to the site's Domain name.",
				},
				pageId: {
					type: 'string',
					description: 'The unique ID for the Page on which the Form is placed.',
				},
				pageName: {
					type: 'string',
					description: 'The user-visible name of the Page where the Form is placed.',
				},
				formElementId: {
					type: 'string',
					description: 'The unique ID of the Form element.',
				},
				workspaceId: {
					type: 'string',
					description: 'The unique ID of the Workspace the Site belongs to.',
				},
				componentId: {
					type: 'string',
					description:
						'ID of the component the form is placed in; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.',
				},
				componentElementId: {
					type: 'string',
					description:
						'Element ID of the component instance containing the form; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getFormSubmission',
		label: 'Get a form submission',
		description: 'Returns a single form submission.',
		context:
			'---\nname: getFormSubmission\ndescription: Returns a single form submission.\n---\n\nWraps `GET /sites/{site_id}/form_submissions/{form_submission_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/reference/forms/form-submissions/get-submission)) and returns the raw response body.\n\n- Uses the site-scoped route documented in Webflow\'s current reference (the beta reference page still lists the older `GET /form_submissions/{form_submission_id}`; both work under the `/beta` base). The older route — still used by the app\'s "Get a Form Submission" module — is flagged with a `deprecation: 1777747200` response header (2 May 2026) and a lower rate limit (60 instead of 150 requests per minute). `site_id` is the `siteId` returned on every submission.\n- `formResponse` is an object keyed by the form field names with the submitted values.\n- Required scope: `forms:read`.\n',
		accounts: { webflow2: { scope: ['forms:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for the site the submission belongs to (`siteId` on the submission). Use the `listSites` endpoint to find it.',
				},
				form_submission_id: {
					type: 'string',
					description:
						'Unique identifier for a form submission. Use the `listFormSubmissions` endpoint to find it.',
				},
			},
			required: ['site_id', 'form_submission_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the Form submission.' },
				formId: {
					type: 'string',
					description: 'The ID of the form the submission belongs to.',
				},
				displayName: {
					type: 'string',
					description: 'The Form name displayed on the site.',
				},
				siteId: {
					type: 'string',
					description: 'The unique ID of the Site the Form belongs to.',
				},
				workspaceId: {
					type: 'string',
					description: 'The unique ID of the Workspace the Site belongs to.',
				},
				dateSubmitted: {
					type: 'string',
					description: 'Date that the Form was submitted on.',
				},
				formResponse: {
					type: 'object',
					description: 'The data submitted in the Form.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				localeId: {
					type: 'string',
					description:
						'The ID of the locale the form was submitted from. `null` for primary-locale submissions or sites without localization.',
				},
				pageId: {
					type: 'string',
					description: 'The unique ID for the Page on which the Form is placed.',
				},
				publishedPath: {
					type: 'string',
					description: 'Relative path of the published page URL.',
				},
				schema: {
					type: 'array',
					description:
						'A list of fields from the submitted form. Returned by the GET endpoints (`listFormSubmissions`, `getFormSubmission`) only; the `updateFormSubmission` response omits it.',
					items: {
						type: 'object',
						description: 'A field of the submitted form.',
						properties: {
							fieldName: {
								type: 'string',
								description: 'Form field name; matches a key of `formResponse`.',
							},
							fieldType: {
								type: 'string',
								description:
									'Form field type, e.g. `FormTextInput`, `FormTextarea`.',
							},
							fieldElementId: {
								type: 'string',
								description: 'Element ID of the Form Field.',
							},
						},
						required: [],
					},
				},
				formElementId: {
					type: 'string',
					description: 'The unique ID of the Form element.',
				},
				componentElementId: {
					type: 'string',
					description:
						'Element ID of the component instance containing the form; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getItem',
		label: 'Get an item',
		description: 'Returns a single staged item of a CMS collection.',
		context:
			'---\nname: getItem\ndescription: Returns a single staged item of a CMS collection.\n---\n\nWraps `GET /collections/{collection_id}/items/{item_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/get-item)) and returns the raw response body.\n\n- `fieldData` is an object keyed by the collection field slugs (see `getCollection` → `fields[].slug`). `name` and `slug` are the built-in fields; the value format per field type is documented in [Field Types & Item Values](https://developers.webflow.com/data/v2.0.0-beta/reference/field-types-item-values).\n- Required scope: `cms:read`.\n',
		accounts: { webflow2: { scope: ['cms:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				collection_id: {
					type: 'string',
					description:
						'Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.',
				},
				item_id: {
					type: 'string',
					description:
						'Unique identifier for a collection item. Use the `listItems` endpoint to find it.',
				},
				cmsLocaleId: {
					type: 'string',
					description:
						'Unique identifier for a CMS Locale. This UID is different from the Site locale identifier and is listed as `cmsLocaleId` in the Sites response. This endpoint returns a single item, so it accepts one locale. To retrieve an item in several locales, use [List Collection Items](https://developers.webflow.com/data/reference/cms/collection-items/staged-items/list-items) with `filter[id][eq]` and a comma separated `cmsLocaleId`.',
				},
				translatable: {
					type: 'string',
					description:
						"Unique identifier for the secondary Locale you're translating **into**. Returns only content that hasn't been excluded from translation for that locale. This is independent of `cmsLocaleId`, which selects which version of the content is returned. To fetch the source text to translate, request the primary locale's content and set `translatable` to the locale you're translating into: `?cmsLocaleId={primary CMS locale id}&translatable={target locale id}`. Only exclusion rules scoped to manual translation are respected — rules scoped only to automatic translation don't affect this parameter's response. Omitting `translatable` returns the same response as if this parameter didn't exist. The value must be the ID of one of the site's secondary locales (see `locales.secondary[]` in the `getSite` response; Webflow's reference does not say whether its `id` or its `cmsLocaleId` is expected) — the primary locale, or any other value, returns a `400` error. Requires translation exclusions to be enabled for the site; if they aren't, the request returns a `403` error. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).",
				},
			},
			required: ['collection_id', 'item_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the Item.' },
				cmsLocaleId: {
					type: 'string',
					description: 'Identifier for the locale of the CMS item.',
				},
				lastPublished: {
					type: 'string',
					description: 'The date the item was last published.',
				},
				lastUpdated: { type: 'string', description: 'The date the item was last updated.' },
				createdOn: { type: 'string', description: 'The date the item was created.' },
				isArchived: {
					type: 'boolean',
					description:
						'Boolean determining if the Item is set to archived. Defaults to `false`.',
				},
				isDraft: {
					type: 'boolean',
					description:
						'Whether the item is in a draft state. Together with `lastPublished`, this determines the status shown in the Webflow UI. See [Publishing with the CMS API](https://developers.webflow.com/data/docs/working-with-the-cms/publishing) for the full mapping.',
				},
				fieldData: {
					type: 'object',
					description:
						'Field values keyed by the collection field slug. Standard fields are listed; custom fields of the collection are returned under their slug as well.',
					properties: {
						name: { type: 'string', description: 'Name of the Item.' },
						slug: {
							type: 'string',
							description:
								'URL structure of the Item in your site. Note: Updates to an item slug will break all links referencing the old slug.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getItemInventory',
		label: 'Get item inventory',
		description: 'Returns the current inventory level of a SKU item.',
		context:
			'---\nname: getItemInventory\ndescription: Returns the current inventory level of a SKU item.\n---\n\nWraps `GET /collections/{collection_id}/items/{item_id}/inventory` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/inventory/list)) and returns the raw response body.\n\n- `collection_id` is the SKU collection of the e-commerce site (see `listCollections`), and `item_id` is the SKU item ID.\n- Required scope: `ecommerce:read`.\n',
		accounts: { webflow2: { scope: ['ecommerce:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				collection_id: {
					type: 'string',
					description:
						'Unique identifier of the SKUs collection of the site (the e-commerce collection whose `slug` is `sku`; see `listCollections`).',
				},
				item_id: {
					type: 'string',
					description:
						'Unique identifier of the SKU item. SKU IDs are returned in `skus[].id` by `getProduct` / `listProducts`.',
				},
			},
			required: ['collection_id', 'item_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for a SKU item.' },
				quantity: {
					type: 'number',
					description:
						'Total quantity of items remaining in inventory (if inventoryType is finite).',
				},
				inventoryType: {
					type: 'string',
					description: 'Inventory type. One of: `infinite`, `finite`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getOrder',
		label: 'Get an order',
		description: 'Returns an e-commerce order.',
		context:
			'---\nname: getOrder\ndescription: Returns an e-commerce order.\n---\n\nWraps `GET /sites/{site_id}/orders/{order_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/orders/get)) and returns the raw response body.\n\n- `orderId` is the short hexadecimal order number shown in the Webflow dashboard; use it as `order_id` in the other order endpoints.\n- Required scope: `ecommerce:read`.\n',
		accounts: { webflow2: { scope: ['ecommerce:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				order_id: {
					type: 'string',
					description:
						'Unique identifier for an order. Use the `listOrders` endpoint to find it.',
				},
			},
			required: ['site_id', 'order_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				orderId: {
					type: 'string',
					description:
						'The order ID. Will usually be 6 hex characters, but can also be 9 hex characters if the site has a very large number of Orders. Randomly assigned.',
				},
				status: {
					type: 'string',
					description:
						'The status of the Order. One of: `pending`, `unfulfilled`, `fulfilled`, `disputed`, `dispute-lost`, `refunded`.',
				},
				comment: {
					type: 'string',
					description:
						'A comment string for this Order, which is editable by API user (not used by Webflow).',
				},
				orderComment: {
					type: 'string',
					description: 'A comment that the customer left when making their Order.',
				},
				acceptedOn: {
					type: 'string',
					description: 'The ISO8601 timestamp that an Order was placed.',
				},
				fulfilledOn: {
					type: 'string',
					description:
						"When an Order is marked as 'fulfilled', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null.",
				},
				refundedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'refunded', this field represents the timestamp of the refund in ISO8601 format. Otherwise, it is null.",
				},
				disputedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'disputed', this field represents the timestamp of the dispute in ISO8601 format. Otherwise, it is null.",
				},
				disputeUpdatedOn: {
					type: 'string',
					description:
						'If an Order has been disputed by the customer, this key will be set to the ISO8601 timestamp of the last update received. If the Order is not disputed, the key will be null.',
				},
				disputeLastStatus: {
					type: 'string',
					description:
						"If an order was disputed by the customer, then this key will be set with the [dispute's status](https://stripe.com/docs/api#dispute_object-status). One of: `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, `lost`.",
				},
				customerPaid: {
					type: 'object',
					description: 'The total paid by the customer.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				netAmount: {
					type: 'object',
					description: 'The net amount after application fees.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				applicationFee: {
					type: 'object',
					description: 'The application fee assessed by the platform.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				allAddresses: {
					type: 'array',
					description: 'All addresses provided by the customer during the ordering flow.',
					items: {
						type: 'object',
						description: 'A customer address.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
							},
							japanType: {
								type: 'string',
								description:
									'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
							},
							addressee: {
								type: 'string',
								description: 'Display name on the address.',
							},
							line1: {
								type: 'string',
								description: 'The first line of the address.',
							},
							line2: {
								type: 'string',
								description: 'The second line of the address.',
							},
							city: { type: 'string', description: 'The city of the address.' },
							state: {
								type: 'string',
								description: 'The state or province of the address.',
							},
							country: { type: 'string', description: 'The country of the address.' },
							postalCode: {
								type: 'string',
								description: 'The postal code of the address.',
							},
						},
						required: [],
					},
				},
				shippingAddress: {
					type: 'object',
					description: 'The shipping address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				billingAddress: {
					type: 'object',
					description: 'The billing address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				shippingProvider: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping provider used (not used by Webflow).',
				},
				shippingTracking: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping tracking number for the order (not used by Webflow).',
				},
				shippingTrackingURL: { type: 'string', description: 'The shipping tracking URL.' },
				customerInfo: {
					type: 'object',
					description: 'An object with the keys `fullName` and `email`.',
					properties: {
						fullName: { type: 'string', description: 'The full name of the Customer.' },
						email: { type: 'string', description: "The Customer's email address." },
					},
					required: [],
				},
				purchasedItems: {
					type: 'array',
					description: 'An array of all things that the Customer purchased.',
					items: {
						type: 'object',
						description: 'An Item that was purchased.',
						properties: {
							count: { type: 'number', description: 'Number of Item purchased.' },
							rowTotal: {
								type: 'object',
								description: 'The total for the row.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							productId: {
								type: 'string',
								description: 'The unique identifier for the Product.',
							},
							productName: {
								type: 'string',
								description: 'User-facing name of the Product.',
							},
							productSlug: { type: 'string', description: 'Slug for the Product.' },
							variantId: {
								type: 'string',
								description: 'Identifier for the Product Variant (SKU).',
							},
							variantName: {
								type: 'string',
								description: 'User-facing name of the Product Variant (SKU).',
							},
							variantSlug: {
								type: 'string',
								description: 'Slug for the Product Variant (SKU).',
							},
							variantSKU: {
								type: 'string',
								description:
									'The user-defined custom SKU of the Product Variant (SKU).',
							},
							variantImage: {
								type: 'object',
								description: 'The variant image of the purchased item.',
								properties: {
									url: {
										type: 'string',
										description: "The hosted location for the Variant's image.",
									},
									file: {
										type: 'object',
										description: 'The file of the variant image.',
										properties: {
											size: {
												type: 'number',
												description: 'The image size in bytes.',
											},
											originalFileName: {
												type: 'string',
												description: 'The original name of the image.',
											},
											createdOn: {
												type: 'string',
												description: 'The creation timestamp of the image.',
											},
											contentType: {
												type: 'string',
												description: 'The MIME type of the image.',
											},
											width: {
												type: 'number',
												description: 'The image width in pixels.',
											},
											height: {
												type: 'number',
												description: 'The image height in pixels.',
											},
											variants: {
												type: 'array',
												description: 'Variants of the supplied image.',
												items: {
													type: 'object',
													description:
														'A resized rendition of the image.',
													properties: {
														url: {
															type: 'string',
															description:
																"The hosted location for the Variant's image.",
														},
														originalFileName: {
															type: 'string',
															description:
																'The original file name of the variant.',
														},
														size: {
															type: 'number',
															description: 'The image size in bytes.',
														},
														width: {
															type: 'number',
															description:
																'The image width in pixels.',
														},
														height: {
															type: 'number',
															description:
																'The image height in pixels.',
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
							variantPrice: {
								type: 'object',
								description: 'The price corresponding to the variant.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							weight: {
								type: 'number',
								description:
									'The physical weight of the variant if provided, or null.',
							},
							width: {
								type: 'number',
								description:
									'The physical width of the variant if provided, or null.',
							},
							height: {
								type: 'number',
								description:
									'The physical height of the variant if provided, or null.',
							},
							length: {
								type: 'number',
								description:
									'The physical length of the variant if provided, or null.',
							},
						},
						required: [],
					},
				},
				purchasedItemsCount: {
					type: 'number',
					description: "The sum of all 'count' fields in 'purchasedItems'.",
				},
				stripeDetails: {
					type: 'object',
					description:
						'An object with various Stripe IDs, useful for linking into the Stripe dashboard.',
					properties: {
						subscriptionId: {
							type: 'string',
							description: 'Stripe-generated identifier for the Subscription.',
						},
						paymentMethod: {
							type: 'string',
							description: 'Stripe-generated identifier for the PaymentMethod used.',
						},
						paymentIntentId: {
							type: 'string',
							description:
								'Stripe-generated identifier for the PaymentIntent, or null.',
						},
						customerId: {
							type: 'string',
							description: 'Stripe-generated customer identifier, or null.',
						},
						chargeId: {
							type: 'string',
							description: 'Stripe-generated charge identifier, or null.',
						},
						disputeId: {
							type: 'string',
							description: 'Stripe-generated dispute identifier, or null.',
						},
						refundId: {
							type: 'string',
							description: 'Stripe-generated refund identifier, or null.',
						},
						refundReason: {
							type: 'string',
							description: 'Stripe-generated refund reason, or null.',
						},
					},
					required: [],
				},
				stripeCard: {
					type: 'object',
					description:
						'Details on the card used to pay for this order, if the order was finalized with Stripe.',
					properties: {
						last4: {
							type: 'string',
							description: 'The last 4 digits on the card as a string.',
						},
						brand: {
							type: 'string',
							description:
								"The card's brand (i.e. the credit card network). One of: `Visa`, `American Express`, `MasterCard`, `Discover`, `JCB`, `Diners Club`, `Unknown`.",
						},
						ownerName: { type: 'string', description: 'The name on the card.' },
						expires: {
							type: 'object',
							description: "The card's expiration date.",
							properties: {
								year: {
									type: 'number',
									description: 'Year that the card expires.',
								},
								month: {
									type: 'number',
									description: 'Month that the card expires.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				paypalDetails: {
					type: 'object',
					description: 'PayPal transaction details when the order was paid with PayPal.',
					properties: {
						orderId: { type: 'string', description: 'PayPal order identifier.' },
						payerId: { type: 'string', description: 'PayPal payer identifier.' },
						captureId: { type: 'string', description: 'PayPal capture identifier.' },
						refundId: { type: 'string', description: 'PayPal refund identifier.' },
						refundReason: {
							type: 'string',
							description: 'PayPal-issued reason for the refund.',
						},
						disputeId: { type: 'string', description: 'PayPal dispute identifier.' },
					},
					required: [],
				},
				customData: {
					type: 'array',
					description:
						'An array of additional inputs for custom order data gathering. Each object in the array represents an input with a name, and a textInput, textArea, or checkbox value.',
					items: {
						type: 'object',
						description: 'One custom-data entry.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				metadata: {
					type: 'object',
					description: 'Additional metadata of the order.',
					properties: {
						isBuyNow: {
							type: 'boolean',
							description: 'Whether the order was placed through the Buy Now button.',
						},
					},
					required: [],
				},
				isCustomerDeleted: {
					type: 'boolean',
					description:
						'A boolean indicating whether the customer has been deleted from the site.',
				},
				isShippingRequired: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that require shipping.',
				},
				hasDownloads: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that are downloadable.',
				},
				paymentProcessor: {
					type: 'string',
					description: 'A string indicating the payment processor used for this order.',
				},
				totals: {
					type: 'object',
					description: 'An object describing various pricing totals.',
					properties: {
						subtotal: {
							type: 'object',
							description: 'The subtotal price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
						extras: {
							type: 'array',
							description:
								'An array of extra items, includes discounts, shipping, and taxes.',
							items: {
								type: 'object',
								description:
									'Extra order items, includes discounts, shipping, and taxes.',
								properties: {
									type: {
										type: 'string',
										description:
											'The type of extra item this is. One of: `discount`, `discount-shipping`, `shipping`, `tax`.',
									},
									name: {
										type: 'string',
										description:
											'A human-readable (but English) name for this extra charge.',
									},
									description: {
										type: 'string',
										description:
											'A human-readable (but English) description of this extra charge.',
									},
									price: {
										type: 'object',
										description: 'The price for the item.',
										properties: {
											unit: {
												type: 'string',
												description: 'The three-letter ISO currency code.',
											},
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
											},
											string: {
												type: 'string',
												description:
													'The user-facing string representation of the amount.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						total: {
							type: 'object',
							description: 'The total price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				downloadFiles: {
					type: 'array',
					description: 'An array of downloadable file objects.',
					items: {
						type: 'object',
						description: 'One downloadable file.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the downloadable file.',
							},
							name: {
								type: 'string',
								description: 'The user-facing name for the downloadable file.',
							},
							url: {
								type: 'string',
								description: 'The hosted location for the downloadable file.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getPageMetadata',
		label: 'Get page metadata',
		description: 'Returns the metadata of a page.',
		context:
			'---\nname: getPageMetadata\ndescription: Returns the metadata of a page.\n---\n\nWraps `GET /pages/{page_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/pages-and-components/pages/get-metadata)) and returns the raw response body.\n\n- Returns page settings (title, slug, SEO, Open Graph), not the page content.\n- Required scope: `pages:read`.\n',
		accounts: { webflow2: { scope: ['pages:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'Unique identifier for a page. Use the `listPages` endpoint to find it.',
				},
				localeId: {
					type: 'string',
					description:
						'Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).',
				},
				translatable: {
					type: 'string',
					description:
						"Unique identifier for the secondary Locale you're translating **into**. Returns only content that hasn't been excluded from translation for that locale. This is independent of `localeId`, which selects which version of the content is returned. To fetch the source text to translate, request the primary locale's content and set `translatable` to the locale you're translating into: `?localeId={primary locale id}&translatable={target locale id}`. Only exclusion rules scoped to manual translation are respected — rules scoped only to automatic translation don't affect this parameter's response. Omitting `translatable` returns the same response as if this parameter didn't exist. The value must be the id of one of the site's secondary locales — the primary locale id, or any other value, returns a `400` error. Requires translation exclusions to be enabled for the site; if they aren't, the request returns a `403` error. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).",
				},
			},
			required: ['page_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the Page.' },
				siteId: { type: 'string', description: 'Unique identifier for the Site.' },
				slug: {
					type: 'string',
					description:
						'Slug of the Page in the site URL (Webflow derives it from the title by default).',
				},
				parentId: { type: 'string', description: 'Identifier of the parent folder.' },
				collectionId: {
					type: 'string',
					description:
						'Unique identifier for a linked Collection, value will be null if the Page is not part of a Collection.',
				},
				createdOn: { type: 'string', description: 'The date the Page was created.' },
				lastUpdated: {
					type: 'string',
					description: 'The date the Page was most recently updated.',
				},
				archived: {
					type: 'boolean',
					description: 'Whether the Page has been archived. Defaults to `false`.',
				},
				draft: {
					type: 'boolean',
					description: 'Whether the Page is a draft. Defaults to `false`.',
				},
				shouldPublish: {
					type: 'boolean',
					description:
						'Publishing flag of the page as returned by the API (`true` on every page observed). Returned by the API but not described in the vendor reference.',
				},
				canBranch: {
					type: 'boolean',
					description:
						'Indicates whether the Page supports [Page Branching](https://university.webflow.com/lesson/page-branching). Pages that are already branches cannot be branched again. Defaults to `false`.',
				},
				isBranch: {
					type: 'boolean',
					description:
						'Indicates whether the Page is a branch of another Page (see [Page Branching](https://university.webflow.com/lesson/page-branching)). Defaults to `false`.',
				},
				branchId: {
					type: 'string',
					description:
						'If the Page is a Branch of another Page, this is the ID of the Branch.',
				},
				seo: {
					type: 'object',
					description: 'SEO-related fields for the Page.',
					properties: {
						description: {
							type: 'string',
							description: 'The Page description shown in search engine results.',
						},
					},
					required: [],
				},
				openGraph: {
					type: 'object',
					description: 'Open Graph fields for the Page.',
					properties: {
						titleCopied: {
							type: 'boolean',
							description:
								'Indicates the Open Graph title was copied from the SEO title. Defaults to `true`.',
						},
						description: {
							type: 'string',
							description: 'The description supplied to Open Graph annotations.',
						},
						descriptionCopied: {
							type: 'boolean',
							description:
								'Indicates the Open Graph description was copied from the SEO description. Defaults to `true`.',
						},
						imageUrl: {
							type: 'string',
							description:
								'URL of the Open Graph image, or `null`. Returned by the API but not described in the vendor reference.',
						},
						imageAssetId: {
							type: 'string',
							description:
								'ID of the asset used as the Open Graph image, or `null`. Returned by the API but not described in the vendor reference.',
						},
					},
					required: [],
				},
				localeId: { type: 'string', description: 'Unique ID of the page locale.' },
				publishedPath: {
					type: 'string',
					description: 'Relative path of the published page URL.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getProduct',
		label: 'Get a product',
		description: 'Returns a product and all of its SKUs.',
		context:
			'---\nname: getProduct\ndescription: Returns a product and all of its SKUs.\n---\n\nWraps `GET /sites/{site_id}/products/{product_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/products-sk-us/get)) and returns the raw response body.\n\n- Returns `{ product, skus[] }`. SKU IDs from `skus[].id` are needed by `updateProductSku`, `getItemInventory` and `updateItemInventory`.\n- SKU `price.value` and `compare-at-price.value` are amounts in the smallest unit of the currency (`2500` with `unit: "USD"` is 25.00 USD).\n- There is no delete route for products: delete one with `deleteItem` on the site\'s Products collection (`listCollections` → slug `product`) using `product.id`; its SKUs are deleted with it.\n- Required scope: `ecommerce:read`.\n',
		accounts: { webflow2: { scope: ['ecommerce:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				product_id: {
					type: 'string',
					description:
						'Unique identifier for a product. Use the `listProducts` endpoint to find it.',
				},
			},
			required: ['site_id', 'product_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				product: {
					type: 'object',
					description: 'The Product object.',
					properties: {
						id: { type: 'string', description: 'Unique identifier for the Product.' },
						cmsLocaleId: {
							type: 'string',
							description: 'Identifier for the locale of the CMS item.',
						},
						lastPublished: {
							type: 'string',
							description: 'The date the Product was last published.',
						},
						lastUpdated: {
							type: 'string',
							description: 'The date the Product was last updated.',
						},
						createdOn: {
							type: 'string',
							description: 'The date the Product was created.',
						},
						isArchived: {
							type: 'boolean',
							description:
								'Whether the product is archived. Products created without `isArchived` are not archived (`false`).',
						},
						isDraft: {
							type: 'boolean',
							description:
								'Whether the product is a draft. Products created without `isDraft` are not drafts (`false`).',
						},
						fieldData: {
							type: 'object',
							description:
								'Field values of the product keyed by the Products collection field slug. Standard fields are listed; custom fields added to the Products collection are returned under their slug as well and are not declared here.',
							properties: {
								name: { type: 'string', description: 'Name of the Product.' },
								slug: {
									type: 'string',
									description: 'URL structure of the Product in your site.',
								},
								description: {
									type: 'string',
									description: 'A description of your product.',
								},
								shippable: {
									type: 'boolean',
									description: 'Boolean determining if the Product is shippable.',
								},
								'sku-properties': {
									type: 'array',
									description: 'Variant types to include in SKUs.',
									items: {
										type: 'object',
										description: 'A variant/option type for a SKU.',
										properties: {
											id: {
												type: 'string',
												description:
													'Unique identifier for a collection of Product Variants.',
											},
											name: {
												type: 'string',
												description:
													'Name of the collection of Product Variants.',
											},
											enum: {
												type: 'array',
												description:
													'The individual Product variants that are contained within the collection.',
												items: {
													type: 'object',
													description:
														'Enumerated Product variants/Options for the SKU.',
													properties: {
														id: {
															type: 'string',
															description:
																'Unique identifier for a Product variant/Option.',
														},
														name: {
															type: 'string',
															description:
																'Name of the Product variant/Option.',
														},
														slug: {
															type: 'string',
															description:
																'Slug for the Product variant/Option in the Site URL structure.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
								},
								category: {
									type: 'array',
									description: 'The category your product belongs to.',
									items: {
										type: 'string',
										description: 'ID of a category item.',
									},
								},
								'tax-category': {
									type: 'string',
									description:
										'Product tax class. One of: `standard-taxable`, `standard-exempt`, `books-religious`, `books-textbook`, `clothing`, `clothing-swimwear`, `digital-goods`, `digital-service`, `drugs-non-prescription`, `drugs-prescription`, `food-bottled-water`, `food-candy`, `food-groceries`, `food-prepared`, `food-soda`, `food-supplements`, `magazine-individual`, `magazine-subscription`, `service-admission`, `service-advertising`, `service-dry-cleaning`, `service-hairdressing`, `service-installation`, `service-miscellaneous`, `service-parking`, `service-printing`, `service-professional`, `service-repair`, `service-training`.',
								},
								'default-sku': {
									type: 'string',
									description: 'The default SKU associated with this product.',
								},
								'ec-product-type': {
									type: 'string',
									description:
										'[Product types.](https://university.webflow.com/lesson/add-and-manage-products-and-categories?topics=ecommerce#how-to-understand-product-types) Enums reflect the following values in order: Physical, Digital, Service, Membership, Advanced. One of: `ff42fee0113744f693a764e3431a9cc2`, `f22027db68002190aef89a4a2b7ac8a1`, `c599e43b1a1c34d5a323aedf75d3adf6`, `e348fd487d0102946c9179d2a94bb613`, `b6ccc1830db4b1babeb06a9ac5f6dd76`.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				skus: {
					type: 'array',
					description: 'A list of SKU Objects.',
					items: {
						type: 'object',
						description: 'The SKU object.',
						properties: {
							id: { type: 'string', description: 'Unique identifier for the SKU.' },
							cmsLocaleId: {
								type: 'string',
								description: 'Identifier for the locale of the CMS item.',
							},
							lastPublished: {
								type: 'string',
								description: 'The date the SKU was last published.',
							},
							lastUpdated: {
								type: 'string',
								description: 'The date the SKU was last updated.',
							},
							createdOn: {
								type: 'string',
								description: 'The date the SKU was created.',
							},
							fieldData: {
								type: 'object',
								description: 'Standard and Custom fields for a SKU.',
								properties: {
									'sku-values': {
										type: 'object',
										description:
											'A mapping between SKU properties and their values, represented as key-value pairs. Each key represents a SKU Property ID (e.g. "color") and maps to its corresponding SKU Value ID (e.g. "blue"). This structure defines the specific variant combination for a SKU.',
										properties: {},
										required: [],
										additionalProperties: true,
									},
									product: {
										type: 'string',
										description:
											'ID of the product item this SKU belongs to. Returned by the API but not described in the vendor reference.',
									},
									name: {
										type: 'string',
										description: 'Name of the SKU (variant).',
									},
									slug: {
										type: 'string',
										description: 'URL structure of the SKU in your site.',
									},
									price: {
										type: 'object',
										description:
											'Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										properties: {
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
											},
											unit: {
												type: 'string',
												description:
													'ISO 4217 currency code of the amount, e.g. `USD`.',
											},
										},
										required: [],
									},
									'compare-at-price': {
										type: 'object',
										description:
											'Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.',
										properties: {
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
											},
											unit: {
												type: 'string',
												description:
													'ISO 4217 currency code of the amount, e.g. `USD`.',
											},
										},
										required: [],
									},
									'ec-sku-billing-method': {
										type: 'string',
										description:
											'[Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU. One of: `one-time`, `subscription`.',
									},
									'ec-sku-subscription-plan': {
										type: 'object',
										description:
											'[Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.',
										properties: {
											interval: {
												type: 'string',
												description:
													'Interval of subscription renewal. One of: `day`, `week`, `month`, `year`.',
											},
											frequency: {
												type: 'number',
												description:
													'Frequency of billing within the interval.',
											},
											trial: {
												type: 'number',
												description: 'Number of days of a trial.',
											},
											plans: {
												type: 'array',
												description: 'The plans of the subscription plan.',
												items: {
													type: 'object',
													description: 'One subscription plan entry.',
													properties: {
														platform: {
															type: 'string',
															description:
																'The platform of the subscription plan. One of: `stripe`.',
														},
														id: {
															type: 'string',
															description:
																'The unique identifier of the plan.',
														},
														status: {
															type: 'string',
															description:
																'The status of the plan. One of: `active`, `inactive`, `canceled`.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
									'main-image': {
										type: 'object',
										description:
											'The main image of the SKU, or `null`. Set with an image URL; Webflow stores a copy and returns the asset.',
										properties: {
											fileId: {
												type: 'string',
												description: 'ID of the uploaded image asset.',
											},
											url: {
												type: 'string',
												description: 'URL of the image.',
											},
											alt: {
												type: 'string',
												description: 'Alt text of the image, or `null`.',
											},
										},
										required: [],
									},
									'more-images': {
										type: 'array',
										description:
											'Additional images of the SKU, or `null`. Returned by the API but not described in the vendor reference.',
										items: {
											type: 'object',
											description: 'An additional image of the SKU.',
											properties: {
												fileId: {
													type: 'string',
													description: 'ID of the uploaded image asset.',
												},
												url: {
													type: 'string',
													description: 'URL of the image.',
												},
												alt: {
													type: 'string',
													description:
														'Alt text of the image, or `null`.',
												},
											},
											required: [],
										},
									},
									'download-files': {
										type: 'array',
										description:
											'Downloadable files attached to the SKU (digital products), or `null`. Returned by the API but not described in the vendor reference. Only empty values were observed, so the item structure is left open.',
										items: {
											type: 'object',
											description:
												'A downloadable file of the SKU. Returned as an open object; only empty lists were observed and the vendor reference does not describe it.',
											properties: {},
											required: [],
											additionalProperties: true,
										},
									},
									sku: {
										type: 'string',
										description:
											'Your own SKU code for this variant (free text), or `null`.',
									},
									width: {
										type: 'number',
										description:
											'The physical width of the variant if provided, or null.',
									},
									length: {
										type: 'number',
										description:
											'The physical length of the variant if provided, or null.',
									},
									height: {
										type: 'number',
										description:
											'The physical height of the variant if provided, or null.',
									},
									weight: {
										type: 'number',
										description:
											'The physical weight of the variant if provided, or null.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'getSite',
		label: 'Get a site',
		description: 'Returns the details of a site.',
		context:
			'---\nname: getSite\ndescription: Returns the details of a site.\n---\n\nWraps `GET /sites/{site_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/sites/get)) and returns the raw response body.\n\n- `locales` lists the site locales; the CMS locale identifiers needed by the items endpoints are the `cmsLocaleId` values inside it.\n- Required scope: `sites:read`.\n',
		accounts: { webflow2: { scope: ['sites:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the Site.' },
				workspaceId: {
					type: 'string',
					description: 'Unique identifier for the Workspace.',
				},
				createdOn: { type: 'string', description: 'Date the Site was created.' },
				displayName: { type: 'string', description: 'Name given to Site.' },
				shortName: { type: 'string', description: 'Slugified version of name.' },
				lastPublished: { type: 'string', description: 'Date the Site was last published.' },
				fullSiteCompiledAt: {
					type: 'string',
					description:
						'Timestamp of the last full compile of the site; equals `lastPublished` on published sites and is `null` for a site that has never been published. Returned by the API but not described in the vendor reference.',
				},
				lastUpdated: { type: 'string', description: 'Date the Site was last updated.' },
				previewUrl: {
					type: 'string',
					description: 'URL of a generated image for the given Site.',
				},
				timeZone: { type: 'string', description: 'Site timezone set under Site Settings.' },
				parentFolderId: {
					type: 'string',
					description: 'The ID of the parent folder the Site exists in.',
				},
				customDomains: {
					type: 'array',
					description: 'Custom domains connected to the site.',
					items: {
						type: 'object',
						description: 'A custom domain connected to the site.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier for the Domain.',
							},
							url: { type: 'string', description: 'The registered Domain name.' },
							lastPublished: {
								type: 'string',
								description: 'The date the custom domain was last published to.',
							},
						},
						required: [],
					},
				},
				locales: {
					type: 'object',
					description: 'Locales configured for the site.',
					properties: {
						primary: {
							type: 'object',
							description: 'The primary locale for the site or application.',
							properties: {
								id: {
									type: 'string',
									description: 'The unique identifier for the locale.',
								},
								cmsLocaleId: {
									type: 'string',
									description: 'A CMS-specific identifier for the locale.',
								},
								enabled: {
									type: 'boolean',
									description: 'Indicates if the locale is enabled.',
								},
								displayName: {
									type: 'string',
									description:
										'The display name of the locale, typically in English.',
								},
								displayImageId: {
									type: 'string',
									description:
										'An optional ID for an image associated with the locale, nullable.',
								},
								redirect: {
									type: 'boolean',
									description:
										"Determines if requests should redirect to the locale's subdirectory.",
								},
								subdirectory: {
									type: 'string',
									description:
										'The subdirectory path for the locale, used in URLs.',
								},
								tag: {
									type: 'string',
									description:
										"A tag or code representing the locale, often following a standard format like 'en-US'.",
								},
							},
							required: [],
						},
						secondary: {
							type: 'array',
							description:
								'A list of secondary locales available for the site or application.',
							items: {
								type: 'object',
								description: 'One secondary locale.',
								properties: {
									id: {
										type: 'string',
										description: 'The unique identifier for the locale.',
									},
									cmsLocaleId: {
										type: 'string',
										description: 'A CMS-specific identifier for the locale.',
									},
									enabled: {
										type: 'boolean',
										description: 'Indicates if the locale is enabled.',
									},
									displayName: {
										type: 'string',
										description:
											'The display name of the locale, typically in English.',
									},
									displayImageId: {
										type: 'string',
										description:
											'An optional ID for an image associated with the locale, nullable.',
									},
									redirect: {
										type: 'boolean',
										description:
											"Determines if requests should redirect to the locale's subdirectory.",
									},
									subdirectory: {
										type: 'string',
										description:
											'The subdirectory path for the locale, used in URLs.',
									},
									tag: {
										type: 'string',
										description:
											"A tag or code representing the locale, often following a standard format like 'en-US'.",
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				dataCollectionEnabled: {
					type: 'boolean',
					description: 'Indicates if data collection is enabled for the site.',
				},
				dataCollectionType: {
					type: 'string',
					description:
						'The type of data collection enabled for the site. One of: `always`, `optOut`, `disabled`.',
				},
				googleTagIds: {
					type: 'array',
					description:
						'List of Google Tags configured for a site, sorted by order. Returned by `getSite` only (not by `listSites`); returned by the API but not described in the vendor reference.',
					items: {
						type: 'string',
						description: 'A Google Tag ID installed on the site.',
					},
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listAssetFolders',
		label: 'List asset folders',
		description: 'Lists the asset folders of a site.',
		context:
			'---\nname: listAssetFolders\ndescription: Lists the asset folders of a site.\n---\n\nWraps `GET /sites/{site_id}/asset_folders` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/assets/asset-folders/list-folders)) and returns the raw response body.\n\n- Returns `{ "assetFolders": [...], "pagination": { limit, offset, total } }`. `total` is the number of all folders on the site, not of the returned page; Webflow returns 25 per call by default. `offset` and `limit` (max 100) page through the full list — they work on this route although Webflow\'s reference does not document them.\n- Required scope: `assets:read`.\n',
		accounts: { webflow2: { scope: ['assets:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				offset: {
					type: 'number',
					description: 'Number of folders to skip, for pagination.',
				},
				limit: {
					type: 'number',
					description:
						'Maximum number of folders to return (max 100; Webflow defaults to 25 and caps larger values at 100).',
					maximum: 100,
				},
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				assetFolders: {
					type: 'array',
					description: 'A list of Asset folders.',
					items: {
						type: 'object',
						description: 'Asset Folder details.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier for the Asset Folder.',
							},
							displayName: {
								type: 'string',
								description: 'User visible name for the Asset Folder.',
							},
							parentFolder: {
								type: 'string',
								description: 'Pointer to parent Asset Folder (or null if root).',
							},
							assets: {
								type: 'array',
								description: 'IDs of the assets in the folder.',
								items: {
									type: 'string',
									description: 'ID of an asset in the folder.',
								},
							},
							siteId: {
								type: 'string',
								description:
									'The unique ID of the site the Asset Folder belongs to.',
							},
							createdOn: {
								type: 'string',
								description: 'Date that the Asset Folder was created on.',
							},
							lastUpdated: {
								type: 'string',
								description: 'Date that the Asset Folder was last updated on.',
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination object.',
					properties: {
						limit: { type: 'number', description: 'The limit used for pagination.' },
						offset: { type: 'number', description: 'The offset used for pagination.' },
						total: { type: 'number', description: 'The total number of records.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listAssets',
		label: 'List assets',
		description: 'Lists the assets uploaded to a site.',
		context:
			'---\nname: listAssets\ndescription: Lists the assets uploaded to a site.\n---\n\nWraps `GET /sites/{site_id}/assets` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/assets/assets/list)) and returns the raw response body.\n\n- Pagination is offset based: pass `limit` (max 100) and `offset`; the response `pagination` object carries `limit`, `offset` and `total`. There is no cursor — increase `offset` by `limit` until `offset + limit >= total`.\n- `folderId` restricts the result to a folder and all its descendant folders.\n- Required scope: `assets:read`.\n',
		accounts: { webflow2: { scope: ['assets:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				localeId: {
					type: 'string',
					description:
						'Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).',
				},
				folderId: {
					type: 'string',
					description:
						'Filter assets to those in the specified folder and all descendant folders. Must be a 24-character hex ObjectId.',
				},
				offset: {
					type: 'number',
					description: 'Number of records to skip, for pagination.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return (max 100).',
					maximum: 100,
				},
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				assets: {
					type: 'array',
					description: 'Assets of the site.',
					items: {
						type: 'object',
						description: 'Asset details.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier for this asset.',
							},
							contentType: { type: 'string', description: 'File format type.' },
							size: { type: 'number', description: 'Size in bytes.' },
							siteId: {
								type: 'string',
								description:
									'Unique identifier for the site that hosts this asset.',
							},
							hostedUrl: { type: 'string', description: 'Link to the asset.' },
							originalFileName: {
								type: 'string',
								description: 'Original file name at the time of upload.',
							},
							displayName: {
								type: 'string',
								description: 'Display name of the asset.',
							},
							lastUpdated: {
								type: 'string',
								description: 'Date the asset metadata was last updated.',
							},
							createdOn: {
								type: 'string',
								description: 'Date the asset metadata was created.',
							},
							variants: {
								type: 'array',
								description:
									'A list of [asset variants](https://help.webflow.com/hc/en-us/articles/33961378697107-Responsive-images) created by Webflow to serve your site responsively.',
								items: {
									type: 'object',
									description: 'Asset variant details.',
									properties: {
										hostedUrl: {
											type: 'string',
											description:
												'URL of where the asset variant is hosted.',
										},
										originalFileName: {
											type: 'string',
											description: 'Original file name of the variant.',
										},
										displayName: {
											type: 'string',
											description: 'Display name of the variant.',
										},
										format: {
											type: 'string',
											description: 'Format of the variant.',
										},
										width: { type: 'number', description: 'Width in pixels.' },
										height: {
											type: 'number',
											description: 'Height in pixels.',
										},
										quality: {
											type: 'number',
											description:
												'Value between 0 and 100 representing the image quality.',
										},
										error: {
											type: 'string',
											description: 'Any associated validation errors.',
										},
									},
									required: [],
								},
							},
							altText: {
								type: 'string',
								description: 'The visual description of the asset.',
							},
							folderId: {
								type: 'string',
								description:
									'The ID of the folder the asset belongs to, or `null` if the asset is at the site root. This field is present only in list responses (`GET /sites/{site_id}/assets`).',
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination object.',
					properties: {
						limit: { type: 'number', description: 'The limit used for pagination.' },
						offset: { type: 'number', description: 'The offset used for pagination.' },
						total: { type: 'number', description: 'The total number of records.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listCollections',
		label: 'List collections',
		description: 'Lists the CMS collections of a site.',
		context:
			'---\nname: listCollections\ndescription: Lists the CMS collections of a site.\n---\n\nWraps `GET /sites/{site_id}/collections` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collections/list)) and returns the raw response body.\n\n- Returns `{ "collections": [...] }`. The endpoint is not paginated.\n- Required scope: `cms:read`.\n',
		accounts: { webflow2: { scope: ['cms:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				collections: {
					type: 'array',
					description: 'An array of Collections.',
					items: {
						type: 'object',
						description: 'A collection object.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier for a Collection.',
							},
							displayName: {
								type: 'string',
								description: 'Name given to the Collection.',
							},
							singularName: {
								type: 'string',
								description:
									'The name of one Item in Collection (e.g. “Blog Post” if the Collection is called “Blog Posts”).',
							},
							slug: {
								type: 'string',
								description: 'Slug of Collection in Site URL structure.',
							},
							createdOn: {
								type: 'string',
								description: 'The date the collection was created.',
							},
							lastUpdated: {
								type: 'string',
								description: 'The date the collection was last updated.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listCommentReplies',
		label: 'List comment replies',
		description: 'Lists the replies of a comment thread.',
		context:
			'---\nname: listCommentReplies\ndescription: Lists the replies of a comment thread.\n---\n\nWraps `GET /sites/{site_id}/comments/{comment_thread_id}/replies` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/comments/list-comment-replies)) and returns the raw response body.\n\n- Pagination is offset based: pass `limit` (max 100) and `offset`; the response `pagination` object carries `limit`, `offset` and `total`. There is no cursor — increase `offset` by `limit` until `offset + limit >= total`.\n- New comments can take up to 5 minutes to appear in the API.\n- Required scope: `comments:read`.\n',
		accounts: { webflow2: { scope: ['comments:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				comment_thread_id: {
					type: 'string',
					description:
						'Unique identifier for a comment thread. Use the `listCommentThreads` endpoint to find it.',
				},
				localeId: {
					type: 'string',
					description:
						'Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).',
				},
				sortBy: {
					type: 'string',
					description:
						'Sort results by the provided value. Only allowed when sortOrder is provided.',
					default: '',
					enum: ['', 'createdOn', 'lastUpdated'],
				},
				sortOrder: {
					type: 'string',
					description: 'Sorts the results by asc or desc.',
					default: '',
					enum: ['', 'asc', 'desc'],
				},
				offset: {
					type: 'number',
					description: 'Number of records to skip, for pagination.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return (max 100).',
					maximum: 100,
				},
			},
			required: ['site_id', 'comment_thread_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				comments: {
					type: 'array',
					description: 'Comments returned by the call.',
					items: {
						type: 'object',
						description: 'A reply within the comment thread.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier for the comment reply.',
							},
							commentId: {
								type: 'string',
								description:
									"ID of the parent comment thread (equals the thread's `id`).",
							},
							siteId: { type: 'string', description: 'The site unique identifier.' },
							pageId: { type: 'string', description: 'The page unique identifier.' },
							localeId: {
								type: 'string',
								description: 'The locale unique identifier.',
							},
							elementId: {
								type: 'string',
								description:
									'ID of the element the comment is attached to. Returned by the API but not described in the vendor reference.',
							},
							objectId: {
								type: 'string',
								description:
									'ID of the object the comment belongs to (the page ID for `objectType` `page`). Returned by the API but not described in the vendor reference.',
							},
							objectType: {
								type: 'string',
								description:
									'Type of the object the comment belongs to, e.g. `page`. Returned by the API but not described in the vendor reference.',
							},
							itemId: {
								type: 'string',
								description:
									'ID of the CMS item the comment is attached to, or `null`. Returned by the API but not described in the vendor reference.',
							},
							breakpoint: {
								type: 'string',
								description: 'The breakpoint the comment was left on.',
							},
							url: {
								type: 'string',
								description:
									'Link to the comment thread in the Webflow Designer. Returned by the API but not described in the vendor reference.',
							},
							content: {
								type: 'string',
								description: 'The content of the comment reply.',
							},
							isResolved: {
								type: 'boolean',
								description:
									'Boolean determining if the comment thread is resolved. Defaults to `false`.',
							},
							author: {
								type: 'object',
								description: 'Author of the comment.',
								properties: {
									userId: {
										type: 'string',
										description: 'The unique identifier of the author.',
									},
									email: { type: 'string', description: 'Email of the author.' },
									name: { type: 'string', description: 'Name of the author.' },
									verified: {
										type: 'boolean',
										description:
											"Whether the user's email address is verified. Returned by the API but not described in the vendor reference.",
									},
								},
								required: [],
							},
							mentionedUsers: {
								type: 'array',
								description:
									'List of mentioned users is an empty array until email notifications are sent.',
								items: {
									type: 'object',
									description: 'One mentioned user.',
									properties: {
										userId: {
											type: 'string',
											description:
												'The unique identifier of the mentioned user.',
										},
										email: {
											type: 'string',
											description: 'Email of the user.',
										},
										name: { type: 'string', description: 'Name of the User.' },
										verified: {
											type: 'boolean',
											description:
												"Whether the user's email address is verified. Returned by the API but not described in the vendor reference.",
										},
									},
									required: [],
								},
							},
							lastUpdated: {
								type: 'string',
								description: 'The date the reply was last updated.',
							},
							createdOn: {
								type: 'string',
								description: 'The date the reply was created.',
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination information for the returned list.',
					properties: {
						limit: {
							type: 'number',
							description: 'The limit specified in the request (default 100).',
						},
						offset: {
							type: 'number',
							description: 'The offset specified for pagination. Defaults to `0`.',
						},
						total: { type: 'number', description: 'Total number of comment replies.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listCommentThreads',
		label: 'List comment threads',
		description: 'Lists the comment threads of a site.',
		context:
			'---\nname: listCommentThreads\ndescription: Lists the comment threads of a site.\n---\n\nWraps `GET /sites/{site_id}/comments` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/comments/list-comment-threads)) and returns the raw response body.\n\n- Pagination is offset based: pass `limit` (max 100) and `offset`; the response `pagination` object carries `limit`, `offset` and `total`. There is no cursor — increase `offset` by `limit` until `offset + limit >= total`.\n- New comments can take up to 5 minutes to appear in the API.\n- The `pageId` and `isResolved` query filters are not listed in the current API reference but are sent by the app\'s "Search Comment Threads" module and accepted by the API. Replies are listed with `listCommentReplies`.\n- Required scope: `comments:read`.\n',
		accounts: { webflow2: { scope: ['comments:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				localeId: {
					type: 'string',
					description:
						'Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).',
				},
				pageId: {
					type: 'string',
					description:
						'Return only comment threads left on this page. Use `listPages` to find page IDs.',
				},
				isResolved: {
					type: 'boolean',
					description:
						'Return only resolved (`true`) or only unresolved (`false`) comment threads.',
				},
				sortBy: {
					type: 'string',
					description:
						'Sort results by the provided value. Only allowed when sortOrder is provided.',
					default: '',
					enum: ['', 'createdOn', 'lastUpdated'],
				},
				sortOrder: {
					type: 'string',
					description: 'Sorts the results by asc or desc.',
					default: '',
					enum: ['', 'asc', 'desc'],
				},
				offset: {
					type: 'number',
					description: 'Number of records to skip, for pagination.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return (max 100).',
					maximum: 100,
				},
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				comments: {
					type: 'array',
					description: 'Comments returned by the call.',
					items: {
						type: 'object',
						description:
							'A comment thread represents a conversation between users on a specific page. Each comment thread has a unique identifier and can contain multiple comments. Retrieve comment replies using the replies API endpoint.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier for the comment thread.',
							},
							siteId: { type: 'string', description: 'The site unique identifier.' },
							pageId: { type: 'string', description: 'The page unique identifier.' },
							localeId: {
								type: 'string',
								description: 'The locale unique identifier.',
							},
							elementId: {
								type: 'string',
								description:
									'ID of the element the comment is attached to. Returned by the API but not described in the vendor reference.',
							},
							objectId: {
								type: 'string',
								description:
									'ID of the object the comment belongs to (the page ID for `objectType` `page`). Returned by the API but not described in the vendor reference.',
							},
							objectType: {
								type: 'string',
								description:
									'Type of the object the comment belongs to, e.g. `page`. Returned by the API but not described in the vendor reference.',
							},
							itemId: { type: 'string', description: 'The item unique identifier.' },
							breakpoint: {
								type: 'string',
								description: 'The breakpoint the comment was left on.',
							},
							url: {
								type: 'string',
								description: 'The URL of the page the comment was left on.',
							},
							content: {
								type: 'string',
								description: "The content of the thread's opening comment.",
							},
							isResolved: {
								type: 'boolean',
								description:
									'Boolean determining if the comment thread is resolved. Defaults to `false`.',
							},
							author: {
								type: 'object',
								description: 'Author of the comment.',
								properties: {
									userId: {
										type: 'string',
										description: 'The unique identifier of the author.',
									},
									email: { type: 'string', description: 'Email of the author.' },
									name: { type: 'string', description: 'Name of the author.' },
									verified: {
										type: 'boolean',
										description:
											"Whether the user's email address is verified. Returned by the API but not described in the vendor reference.",
									},
								},
								required: [],
							},
							mentionedUsers: {
								type: 'array',
								description:
									'List of mentioned users. This is an empty array until email notifications are sent, which can take up to 5 minutes after the comment is created.',
								items: {
									type: 'object',
									description: 'One mentioned user.',
									properties: {
										userId: {
											type: 'string',
											description:
												'The unique identifier of the mentioned user.',
										},
										email: {
											type: 'string',
											description: 'Email of the user.',
										},
										name: { type: 'string', description: 'Name of the User.' },
										verified: {
											type: 'boolean',
											description:
												"Whether the user's email address is verified. Returned by the API but not described in the vendor reference.",
										},
									},
									required: [],
								},
							},
							createdOn: {
								type: 'string',
								description: 'The date the comment thread was created.',
							},
							lastUpdated: {
								type: 'string',
								description: 'The date the comment thread was last updated.',
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination information for the returned list.',
					properties: {
						limit: {
							type: 'number',
							description: 'The limit specified in the request (default 100).',
						},
						offset: {
							type: 'number',
							description: 'The offset specified for pagination. Defaults to `0`.',
						},
						total: { type: 'number', description: 'Total number of comment threads.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listForms',
		label: 'List forms',
		description: 'Lists the forms of a site.',
		context:
			'---\nname: listForms\ndescription: Lists the forms of a site.\n---\n\nWraps `GET /sites/{site_id}/forms` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/forms/forms/list)) and returns the raw response body.\n\n- Pagination is offset based: pass `limit` (max 100) and `offset`; the response `pagination` object carries `limit`, `offset` and `total`. There is no cursor — increase `offset` by `limit` until `offset + limit >= total`.\n- Required scope: `forms:read`.\n',
		accounts: { webflow2: { scope: ['forms:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return (max 100).',
					maximum: 100,
				},
				offset: {
					type: 'number',
					description: 'Number of records to skip, for pagination.',
				},
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				forms: {
					type: 'array',
					description: 'Forms of the site.',
					items: {
						type: 'object',
						description: 'A Webflow form.',
						properties: {
							displayName: {
								type: 'string',
								description: 'The Form name displayed on the site.',
							},
							createdOn: {
								type: 'string',
								description: 'Date that the Form was created on.',
							},
							lastUpdated: {
								type: 'string',
								description: 'Date that the Form was last updated on.',
							},
							fields: {
								type: 'object',
								description: 'A collection of form field objects.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							responseSettings: {
								type: 'object',
								description: 'Settings for form responses.',
								properties: {
									redirectUrl: {
										type: 'string',
										description:
											'The URL or path to redirect the user to after form submission.',
									},
									redirectMethod: {
										type: 'string',
										description:
											'The HTTP request method to use for the redirectUrl (e.g. POST or GET).',
									},
									redirectAction: {
										type: 'string',
										description: 'The action to take after form submission.',
									},
									sendEmailConfirmation: {
										type: 'boolean',
										description:
											'Whether to send an email confirmation to the user.',
									},
								},
								required: [],
							},
							id: { type: 'string', description: 'The unique ID for the Form.' },
							siteId: {
								type: 'string',
								description: 'The unique ID of the Site the Form belongs to.',
							},
							siteDomainId: {
								type: 'string',
								description:
									"The unique ID corresponding to the site's Domain name.",
							},
							pageId: {
								type: 'string',
								description:
									'The unique ID for the Page on which the Form is placed.',
							},
							pageName: {
								type: 'string',
								description:
									'The user-visible name of the Page where the Form is placed.',
							},
							formElementId: {
								type: 'string',
								description: 'The unique ID of the Form element.',
							},
							workspaceId: {
								type: 'string',
								description: 'The unique ID of the Workspace the Site belongs to.',
							},
							componentId: {
								type: 'string',
								description:
									'ID of the component the form is placed in; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.',
							},
							componentElementId: {
								type: 'string',
								description:
									'Element ID of the component instance containing the form; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.',
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination object.',
					properties: {
						limit: { type: 'number', description: 'The limit used for pagination.' },
						offset: { type: 'number', description: 'The offset used for pagination.' },
						total: { type: 'number', description: 'The total number of records.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listFormSubmissions',
		label: 'List form submissions',
		description: 'Lists the submissions of a form.',
		context:
			'---\nname: listFormSubmissions\ndescription: Lists the submissions of a form.\n---\n\nWraps `GET /sites/{site_id}/forms/{form_id}/submissions` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/forms/form-submissions/list-submissions)) and returns the raw response body.\n\n- Uses the site-scoped route, which is the one Webflow documents. The older form-scoped `GET /forms/{form_id}/submissions` (still used by the app\'s "List Form Submissions" module) returns the same data but is flagged by Webflow with a `deprecation: 1777747200` response header (2 May 2026) and a lower rate limit (60 instead of 150 requests per minute). A combined list across all forms of a site is available via `GET /sites/{site_id}/form_submissions` through `arbitraryCall`.\n- Pagination is offset based: pass `limit` (max 100) and `offset`; the response `pagination` object carries `limit`, `offset` and `total`. There is no cursor — increase `offset` by `limit` until `offset + limit >= total`.\n- A form placed in a component counts as a separate form per component instance.\n- Required scope: `forms:read`.\n',
		accounts: { webflow2: { scope: ['forms:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				form_id: {
					type: 'string',
					description:
						'Unique identifier for a form. Use the `listForms` endpoint to find it.',
				},
				offset: {
					type: 'number',
					description: 'Number of records to skip, for pagination.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return (max 100).',
					maximum: 100,
				},
			},
			required: ['site_id', 'form_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				formSubmissions: {
					type: 'array',
					description: 'Form submissions.',
					items: {
						type: 'object',
						description: 'One form submission.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique ID of the Form submission.',
							},
							formId: {
								type: 'string',
								description: 'The ID of the form the submission belongs to.',
							},
							displayName: {
								type: 'string',
								description: 'The Form name displayed on the site.',
							},
							siteId: {
								type: 'string',
								description: 'The unique ID of the Site the Form belongs to.',
							},
							workspaceId: {
								type: 'string',
								description: 'The unique ID of the Workspace the Site belongs to.',
							},
							dateSubmitted: {
								type: 'string',
								description: 'Date that the Form was submitted on.',
							},
							formResponse: {
								type: 'object',
								description: 'The data submitted in the Form.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
							localeId: {
								type: 'string',
								description:
									'The ID of the locale the form was submitted from. `null` for primary-locale submissions or sites without localization.',
							},
							pageId: {
								type: 'string',
								description:
									'The unique ID for the Page on which the Form is placed.',
							},
							publishedPath: {
								type: 'string',
								description: 'Relative path of the published page URL.',
							},
							schema: {
								type: 'array',
								description:
									'A list of fields from the submitted form. Returned by the GET endpoints (`listFormSubmissions`, `getFormSubmission`) only; the `updateFormSubmission` response omits it.',
								items: {
									type: 'object',
									description: 'A field of the submitted form.',
									properties: {
										fieldName: {
											type: 'string',
											description:
												'Form field name; matches a key of `formResponse`.',
										},
										fieldType: {
											type: 'string',
											description:
												'Form field type, e.g. `FormTextInput`, `FormTextarea`.',
										},
										fieldElementId: {
											type: 'string',
											description: 'Element ID of the Form Field.',
										},
									},
									required: [],
								},
							},
							formElementId: {
								type: 'string',
								description: 'The unique ID of the Form element.',
							},
							componentElementId: {
								type: 'string',
								description:
									'Element ID of the component instance containing the form; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.',
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination object.',
					properties: {
						limit: { type: 'number', description: 'The limit used for pagination.' },
						offset: { type: 'number', description: 'The offset used for pagination.' },
						total: { type: 'number', description: 'The total number of records.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listItems',
		label: 'List items',
		description:
			'Lists the staged items of a CMS collection with optional filtering and sorting.',
		context:
			'---\nname: listItems\ndescription: Lists the staged items of a CMS collection with optional filtering and sorting.\n---\n\nWraps `GET /collections/{collection_id}/items` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/list-items)) and returns the raw response body.\n\n- Pagination is offset based: pass `limit` (max 100) and `offset`; the response `pagination` object carries `limit`, `offset` and `total`. There is no cursor — increase `offset` by `limit` until `offset + limit >= total`.\n- Date filters (`createdOn`, `lastPublished`, `lastUpdated`) are ranges sent as `<name>[gte]` / `<name>[lte]`. `filter` entries are sent as `filter[<fieldSlug>][<operator>]=<value>` and combined with AND; `sort` entries are sent as `sort[<fieldSlug>]=<asc|desc>` and take precedence over `sortBy` / `sortOrder`. Supported operators depend on the field type — see the vendor docs table.\n- Returns staged (CMS) items. Live items are not exposed by this app.\n- Required scope: `cms:read`.\n',
		accounts: { webflow2: { scope: ['cms:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				collection_id: {
					type: 'string',
					description:
						'Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.',
				},
				cmsLocaleId: {
					type: 'string',
					description:
						'Unique identifier for a CMS Locale. This UID is different from the Site locale identifier and is listed as `cmsLocaleId` in the Sites response. To query multiple locales, input a comma separated string.',
				},
				name: { type: 'string', description: 'Filter by the exact name of the item(s).' },
				slug: { type: 'string', description: 'Filter by the exact slug of the item.' },
				createdOn: {
					type: 'object',
					description:
						'Filter by the created on date. Provide `gte` (from) and/or `lte` (to); sent as `createdOn[gte]` / `createdOn[lte]`.',
					properties: {
						lte: {
							type: 'string',
							description: 'Filter items created before this date.',
						},
						gte: {
							type: 'string',
							description: 'Filter items created after this date.',
						},
					},
					required: [],
				},
				lastPublished: {
					type: 'object',
					description:
						'Filter by the last published date. Provide `gte` (from) and/or `lte` (to); sent as `lastPublished[gte]` / `lastPublished[lte]`.',
					properties: {
						lte: {
							type: 'string',
							description: 'Filter items last published before this date.',
						},
						gte: {
							type: 'string',
							description: 'Filter items last published after this date.',
						},
					},
					required: [],
				},
				lastUpdated: {
					type: 'object',
					description:
						'Filter by the last updated date. Provide `gte` (from) and/or `lte` (to); sent as `lastUpdated[gte]` / `lastUpdated[lte]`.',
					properties: {
						lte: {
							type: 'string',
							description: 'Filter items last updated before this date.',
						},
						gte: {
							type: 'string',
							description: 'Filter items last updated after this date.',
						},
					},
					required: [],
				},
				filter: {
					type: 'array',
					description:
						'Filters on custom field values, combined with AND. Each entry is sent as `filter[<field>][<operator>]=<value>`. Supported operators depend on the field type (for example `PlainText`: eq, ne, in, nin, contains, ncontains, exists; `Number` / `DateTime`: eq, ne, gt, gte, lt, lte, in, nin, exists; `Reference`: eq, ne, in, nin, exists; `RichText`, `Image`, `MultiReference`: exists only). Invalid combinations return `400 BadArgument`.',
					items: {
						type: 'object',
						description: 'One field filter condition.',
						properties: {
							field: {
								type: 'string',
								description:
									'Slug of the collection field to filter on (see `getCollection` → `fields[].slug`), or `id`.',
							},
							operator: {
								type: 'string',
								description:
									'Comparison operator. `contains` / `ncontains` are case-insensitive; `exists` takes `true` or `false` as the value.',
								enum: [
									'eq',
									'ne',
									'gt',
									'gte',
									'lt',
									'lte',
									'in',
									'nin',
									'contains',
									'ncontains',
									'exists',
								],
							},
							value: {
								type: 'string',
								description:
									'Value to compare with: a number, `true` / `false`, an ISO 8601 date-time, a 24-character item ID or an option ID depending on the field type. For `in` / `nin` pass a comma-separated list of up to 100 values.',
							},
						},
						required: ['field', 'operator', 'value'],
					},
				},
				translatable: {
					type: 'string',
					description:
						"Unique identifier for the secondary Locale you're translating **into**. Returns only content that hasn't been excluded from translation for that locale. This is independent of `cmsLocaleId`, which selects which version of the content is returned. To fetch the source text to translate, request the primary locale's content and set `translatable` to the locale you're translating into: `?cmsLocaleId={primary CMS locale id}&translatable={target locale id}`. Only exclusion rules scoped to manual translation are respected — rules scoped only to automatic translation don't affect this parameter's response. Omitting `translatable` returns the same response as if this parameter didn't exist. The value must be the ID of one of the site's secondary locales (see `locales.secondary[]` in the `getSite` response; Webflow's reference does not say whether its `id` or its `cmsLocaleId` is expected) — the primary locale, or any other value, returns a `400` error. Requires translation exclusions to be enabled for the site; if they aren't, the request returns a `403` error. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).",
				},
				sortBy: {
					type: 'string',
					description: 'Sort results by the provided value.',
					default: '',
					enum: ['', 'createdOn', 'lastPublished', 'lastUpdated', 'name', 'slug'],
				},
				sortOrder: {
					type: 'string',
					description: 'Sorts the results by asc or desc.',
					default: '',
					enum: ['', 'asc', 'desc'],
				},
				sort: {
					type: 'array',
					description:
						'Sort by custom fields, applied in order. Each entry is sent as `sort[<field>]=<asc|desc>` and takes precedence over `sortBy` / `sortOrder`. Sortable field types: PlainText, Email, Phone, Number, DateTime and Switch.',
					items: {
						type: 'object',
						description: 'One sort instruction.',
						properties: {
							field: {
								type: 'string',
								description: 'Slug of the collection field to sort by.',
							},
							direction: {
								type: 'string',
								description: 'Sort direction.',
								enum: ['asc', 'desc'],
							},
						},
						required: ['field', 'direction'],
					},
				},
				offset: {
					type: 'number',
					description: 'Number of records to skip, for pagination.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return (max 100).',
					maximum: 100,
				},
			},
			required: ['collection_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description: 'List of Items within the collection.',
					items: {
						type: 'object',
						description:
							'A Collection Item represents a single entry in your collection. Each item carries system metadata (IDs and timestamps), the status flags `isDraft` and `isArchived`, and its content in `fieldData`, which always has `name` and `slug` and may include further fields matching the collection schema.',
						properties: {
							id: { type: 'string', description: 'Unique identifier for the Item.' },
							cmsLocaleId: {
								type: 'string',
								description: 'Identifier for the locale of the CMS item.',
							},
							lastPublished: {
								type: 'string',
								description: 'The date the item was last published.',
							},
							lastUpdated: {
								type: 'string',
								description: 'The date the item was last updated.',
							},
							createdOn: {
								type: 'string',
								description: 'The date the item was created.',
							},
							isArchived: {
								type: 'boolean',
								description:
									'Boolean determining if the Item is set to archived. Defaults to `false`.',
							},
							isDraft: {
								type: 'boolean',
								description:
									'Whether the item is in a draft state. Together with `lastPublished`, this determines the status shown in the Webflow UI. See [Publishing with the CMS API](https://developers.webflow.com/data/docs/working-with-the-cms/publishing) for the full mapping.',
							},
							fieldData: {
								type: 'object',
								description:
									'Field values keyed by the collection field slug. Standard fields are listed; custom fields of the collection are returned under their slug as well.',
								properties: {
									name: { type: 'string', description: 'Name of the Item.' },
									slug: {
										type: 'string',
										description:
											'URL structure of the Item in your site. Note: Updates to an item slug will break all links referencing the old slug.',
									},
								},
								required: [],
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination information for the returned list.',
					properties: {
						limit: {
							type: 'number',
							description: 'The limit specified in the request. Defaults to `100`.',
						},
						offset: {
							type: 'number',
							description: 'The offset specified for pagination. Defaults to `0`.',
						},
						total: {
							type: 'number',
							description: 'Total number of items in the collection.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listOrders',
		label: 'List orders',
		description: 'Lists the e-commerce orders of a site.',
		context:
			'---\nname: listOrders\ndescription: Lists the e-commerce orders of a site.\n---\n\nWraps `GET /sites/{site_id}/orders` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/orders/list)) and returns the raw response body.\n\n- Pagination is offset based: pass `limit` (max 100) and `offset`; the response `pagination` object carries `limit`, `offset` and `total`. There is no cursor — increase `offset` by `limit` until `offset + limit >= total`.\n- Filter by `status` to list e.g. only `unfulfilled` orders.\n- Required scope: `ecommerce:read`.\n',
		accounts: { webflow2: { scope: ['ecommerce:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				status: {
					type: 'string',
					description: 'Filter the orders by status.',
					default: '',
					enum: [
						'',
						'pending',
						'refunded',
						'dispute-lost',
						'fulfilled',
						'disputed',
						'unfulfilled',
					],
				},
				offset: {
					type: 'number',
					description: 'Number of records to skip, for pagination.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return (max 100).',
					maximum: 100,
				},
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				orders: {
					type: 'array',
					description: 'List of orders.',
					items: {
						type: 'object',
						description: 'One order.',
						properties: {
							orderId: {
								type: 'string',
								description:
									'The order ID. Will usually be 6 hex characters, but can also be 9 hex characters if the site has a very large number of Orders. Randomly assigned.',
							},
							status: {
								type: 'string',
								description:
									'The status of the Order. One of: `pending`, `unfulfilled`, `fulfilled`, `disputed`, `dispute-lost`, `refunded`.',
							},
							comment: {
								type: 'string',
								description:
									'A comment string for this Order, which is editable by API user (not used by Webflow).',
							},
							orderComment: {
								type: 'string',
								description:
									'A comment that the customer left when making their Order.',
							},
							acceptedOn: {
								type: 'string',
								description: 'The ISO8601 timestamp that an Order was placed.',
							},
							fulfilledOn: {
								type: 'string',
								description:
									"When an Order is marked as 'fulfilled', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null.",
							},
							refundedOn: {
								type: 'string',
								description:
									"When an Order is marked as 'refunded', this field represents the timestamp of the refund in ISO8601 format. Otherwise, it is null.",
							},
							disputedOn: {
								type: 'string',
								description:
									"When an Order is marked as 'disputed', this field represents the timestamp of the dispute in ISO8601 format. Otherwise, it is null.",
							},
							disputeUpdatedOn: {
								type: 'string',
								description:
									'If an Order has been disputed by the customer, this key will be set to the ISO8601 timestamp of the last update received. If the Order is not disputed, the key will be null.',
							},
							disputeLastStatus: {
								type: 'string',
								description:
									"If an order was disputed by the customer, then this key will be set with the [dispute's status](https://stripe.com/docs/api#dispute_object-status). One of: `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, `lost`.",
							},
							customerPaid: {
								type: 'object',
								description: 'The total paid by the customer.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							netAmount: {
								type: 'object',
								description: 'The net amount after application fees.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							applicationFee: {
								type: 'object',
								description: 'The application fee assessed by the platform.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							allAddresses: {
								type: 'array',
								description:
									'All addresses provided by the customer during the ordering flow.',
								items: {
									type: 'object',
									description: 'A customer address.',
									properties: {
										type: {
											type: 'string',
											description:
												'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
										},
										japanType: {
											type: 'string',
											description:
												'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
										},
										addressee: {
											type: 'string',
											description: 'Display name on the address.',
										},
										line1: {
											type: 'string',
											description: 'The first line of the address.',
										},
										line2: {
											type: 'string',
											description: 'The second line of the address.',
										},
										city: {
											type: 'string',
											description: 'The city of the address.',
										},
										state: {
											type: 'string',
											description: 'The state or province of the address.',
										},
										country: {
											type: 'string',
											description: 'The country of the address.',
										},
										postalCode: {
											type: 'string',
											description: 'The postal code of the address.',
										},
									},
									required: [],
								},
							},
							shippingAddress: {
								type: 'object',
								description: 'The shipping address.',
								properties: {
									type: {
										type: 'string',
										description:
											'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
									},
									japanType: {
										type: 'string',
										description:
											'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
									},
									addressee: {
										type: 'string',
										description: 'Display name on the address.',
									},
									line1: {
										type: 'string',
										description: 'The first line of the address.',
									},
									line2: {
										type: 'string',
										description: 'The second line of the address.',
									},
									city: {
										type: 'string',
										description: 'The city of the address.',
									},
									state: {
										type: 'string',
										description: 'The state or province of the address.',
									},
									country: {
										type: 'string',
										description: 'The country of the address.',
									},
									postalCode: {
										type: 'string',
										description: 'The postal code of the address.',
									},
								},
								required: [],
							},
							billingAddress: {
								type: 'object',
								description: 'The billing address.',
								properties: {
									type: {
										type: 'string',
										description:
											'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
									},
									japanType: {
										type: 'string',
										description:
											'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
									},
									addressee: {
										type: 'string',
										description: 'Display name on the address.',
									},
									line1: {
										type: 'string',
										description: 'The first line of the address.',
									},
									line2: {
										type: 'string',
										description: 'The second line of the address.',
									},
									city: {
										type: 'string',
										description: 'The city of the address.',
									},
									state: {
										type: 'string',
										description: 'The state or province of the address.',
									},
									country: {
										type: 'string',
										description: 'The country of the address.',
									},
									postalCode: {
										type: 'string',
										description: 'The postal code of the address.',
									},
								},
								required: [],
							},
							shippingProvider: {
								type: 'string',
								description:
									'A string editable by the API user to note the shipping provider used (not used by Webflow).',
							},
							shippingTracking: {
								type: 'string',
								description:
									'A string editable by the API user to note the shipping tracking number for the order (not used by Webflow).',
							},
							shippingTrackingURL: {
								type: 'string',
								description: 'The shipping tracking URL of the order.',
							},
							customerInfo: {
								type: 'object',
								description: 'An object with the keys `fullName` and `email`.',
								properties: {
									fullName: {
										type: 'string',
										description: 'The full name of the Customer.',
									},
									email: {
										type: 'string',
										description: "The Customer's email address.",
									},
								},
								required: [],
							},
							purchasedItems: {
								type: 'array',
								description: 'An array of all things that the Customer purchased.',
								items: {
									type: 'object',
									description: 'An Item that was purchased.',
									properties: {
										count: {
											type: 'number',
											description: 'Number of Item purchased.',
										},
										rowTotal: {
											type: 'object',
											description: 'The total for the row.',
											properties: {
												unit: {
													type: 'string',
													description:
														'The three-letter ISO currency code.',
												},
												value: {
													type: 'number',
													description:
														'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
												},
												string: {
													type: 'string',
													description:
														'The user-facing string representation of the amount.',
												},
											},
											required: [],
										},
										productId: {
											type: 'string',
											description: 'The unique identifier for the Product.',
										},
										productName: {
											type: 'string',
											description: 'User-facing name of the Product.',
										},
										productSlug: {
											type: 'string',
											description: 'Slug for the Product.',
										},
										variantId: {
											type: 'string',
											description:
												'Identifier for the Product Variant (SKU).',
										},
										variantName: {
											type: 'string',
											description:
												'User-facing name of the Product Variant (SKU).',
										},
										variantSlug: {
											type: 'string',
											description: 'Slug for the Product Variant (SKU).',
										},
										variantSKU: {
											type: 'string',
											description:
												'The user-defined custom SKU of the Product Variant (SKU).',
										},
										variantImage: {
											type: 'object',
											description: 'The variant image of the purchased item.',
											properties: {
												url: {
													type: 'string',
													description:
														"The hosted location for the Variant's image.",
												},
												file: {
													type: 'object',
													description: 'The file of the variant image.',
													properties: {
														size: {
															type: 'number',
															description: 'The image size in bytes.',
														},
														originalFileName: {
															type: 'string',
															description:
																'The original name of the image.',
														},
														createdOn: {
															type: 'string',
															description:
																'The creation timestamp of the image.',
														},
														contentType: {
															type: 'string',
															description:
																'The MIME type of the image.',
														},
														width: {
															type: 'number',
															description:
																'The image width in pixels.',
														},
														height: {
															type: 'number',
															description:
																'The image height in pixels.',
														},
														variants: {
															type: 'array',
															description:
																'Variants of the supplied image.',
															items: {
																type: 'object',
																description:
																	'A resized rendition of the image.',
																properties: {
																	url: {
																		type: 'string',
																		description:
																			"The hosted location for the Variant's image.",
																	},
																	originalFileName: {
																		type: 'string',
																		description:
																			'The original file name of the variant.',
																	},
																	size: {
																		type: 'number',
																		description:
																			'The image size in bytes.',
																	},
																	width: {
																		type: 'number',
																		description:
																			'The image width in pixels.',
																	},
																	height: {
																		type: 'number',
																		description:
																			'The image height in pixels.',
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
										variantPrice: {
											type: 'object',
											description: 'The price corresponding to the variant.',
											properties: {
												unit: {
													type: 'string',
													description:
														'The three-letter ISO currency code.',
												},
												value: {
													type: 'number',
													description:
														'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
												},
												string: {
													type: 'string',
													description:
														'The user-facing string representation of the amount.',
												},
											},
											required: [],
										},
										weight: {
											type: 'number',
											description:
												'The physical weight of the variant if provided, or null.',
										},
										width: {
											type: 'number',
											description:
												'The physical width of the variant if provided, or null.',
										},
										height: {
											type: 'number',
											description:
												'The physical height of the variant if provided, or null.',
										},
										length: {
											type: 'number',
											description:
												'The physical length of the variant if provided, or null.',
										},
									},
									required: [],
								},
							},
							purchasedItemsCount: {
								type: 'number',
								description: "The sum of all 'count' fields in 'purchasedItems'.",
							},
							stripeDetails: {
								type: 'object',
								description:
									'An object with various Stripe IDs, useful for linking into the Stripe dashboard.',
								properties: {
									subscriptionId: {
										type: 'string',
										description:
											'Stripe-generated identifier for the Subscription.',
									},
									paymentMethod: {
										type: 'string',
										description:
											'Stripe-generated identifier for the PaymentMethod used.',
									},
									paymentIntentId: {
										type: 'string',
										description:
											'Stripe-generated identifier for the PaymentIntent, or null.',
									},
									customerId: {
										type: 'string',
										description:
											'Stripe-generated customer identifier, or null.',
									},
									chargeId: {
										type: 'string',
										description: 'Stripe-generated charge identifier, or null.',
									},
									disputeId: {
										type: 'string',
										description:
											'Stripe-generated dispute identifier, or null.',
									},
									refundId: {
										type: 'string',
										description: 'Stripe-generated refund identifier, or null.',
									},
									refundReason: {
										type: 'string',
										description: 'Stripe-generated refund reason, or null.',
									},
								},
								required: [],
							},
							stripeCard: {
								type: 'object',
								description:
									'Details on the card used to pay for this order, if the order was finalized with Stripe.',
								properties: {
									last4: {
										type: 'string',
										description: 'The last 4 digits on the card as a string.',
									},
									brand: {
										type: 'string',
										description:
											"The card's brand (i.e. the credit card network). One of: `Visa`, `American Express`, `MasterCard`, `Discover`, `JCB`, `Diners Club`, `Unknown`.",
									},
									ownerName: {
										type: 'string',
										description: 'The name on the card.',
									},
									expires: {
										type: 'object',
										description: "The card's expiration date.",
										properties: {
											year: {
												type: 'number',
												description: 'Year that the card expires.',
											},
											month: {
												type: 'number',
												description: 'Month that the card expires.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							paypalDetails: {
								type: 'object',
								description:
									'PayPal transaction details when the order was paid with PayPal.',
								properties: {
									orderId: {
										type: 'string',
										description: 'PayPal order identifier.',
									},
									payerId: {
										type: 'string',
										description: 'PayPal payer identifier.',
									},
									captureId: {
										type: 'string',
										description: 'PayPal capture identifier.',
									},
									refundId: {
										type: 'string',
										description: 'PayPal refund identifier.',
									},
									refundReason: {
										type: 'string',
										description: 'PayPal-issued reason for the refund.',
									},
									disputeId: {
										type: 'string',
										description: 'PayPal dispute identifier.',
									},
								},
								required: [],
							},
							customData: {
								type: 'array',
								description:
									'An array of additional inputs for custom order data gathering. Each object in the array represents an input with a name, and a textInput, textArea, or checkbox value.',
								items: {
									type: 'object',
									description: 'One custom-data entry.',
									properties: {},
									required: [],
									additionalProperties: true,
								},
							},
							metadata: {
								type: 'object',
								description: 'Additional metadata of the order.',
								properties: {
									isBuyNow: {
										type: 'boolean',
										description:
											'Whether the order was placed through the Buy Now button.',
									},
								},
								required: [],
							},
							isCustomerDeleted: {
								type: 'boolean',
								description:
									'A boolean indicating whether the customer has been deleted from the site.',
							},
							isShippingRequired: {
								type: 'boolean',
								description:
									'A boolean indicating whether the order contains one or more purchased items that require shipping.',
							},
							hasDownloads: {
								type: 'boolean',
								description:
									'A boolean indicating whether the order contains one or more purchased items that are downloadable.',
							},
							paymentProcessor: {
								type: 'string',
								description:
									'A string indicating the payment processor used for this order.',
							},
							totals: {
								type: 'object',
								description: 'An object describing various pricing totals.',
								properties: {
									subtotal: {
										type: 'object',
										description: 'The subtotal price.',
										properties: {
											unit: {
												type: 'string',
												description: 'The three-letter ISO currency code.',
											},
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
											},
											string: {
												type: 'string',
												description:
													'The user-facing string representation of the amount.',
											},
										},
										required: [],
									},
									extras: {
										type: 'array',
										description:
											'An array of extra items, includes discounts, shipping, and taxes.',
										items: {
											type: 'object',
											description:
												'Extra order items, includes discounts, shipping, and taxes.',
											properties: {
												type: {
													type: 'string',
													description:
														'The type of extra item this is. One of: `discount`, `discount-shipping`, `shipping`, `tax`.',
												},
												name: {
													type: 'string',
													description:
														'A human-readable (but English) name for this extra charge.',
												},
												description: {
													type: 'string',
													description:
														'A human-readable (but English) description of this extra charge.',
												},
												price: {
													type: 'object',
													description: 'The price for the item.',
													properties: {
														unit: {
															type: 'string',
															description:
																'The three-letter ISO currency code.',
														},
														value: {
															type: 'number',
															description:
																'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
														},
														string: {
															type: 'string',
															description:
																'The user-facing string representation of the amount.',
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
									total: {
										type: 'object',
										description: 'The total price.',
										properties: {
											unit: {
												type: 'string',
												description: 'The three-letter ISO currency code.',
											},
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
											},
											string: {
												type: 'string',
												description:
													'The user-facing string representation of the amount.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							downloadFiles: {
								type: 'array',
								description: 'An array of downloadable file objects.',
								items: {
									type: 'object',
									description: 'One downloadable file.',
									properties: {
										id: {
											type: 'string',
											description:
												'The unique identifier for the downloadable file.',
										},
										name: {
											type: 'string',
											description:
												'The user-facing name for the downloadable file.',
										},
										url: {
											type: 'string',
											description:
												'The hosted location for the downloadable file.',
										},
									},
									required: [],
								},
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination object.',
					properties: {
						limit: { type: 'number', description: 'The limit used for pagination.' },
						offset: { type: 'number', description: 'The offset used for pagination.' },
						total: { type: 'number', description: 'The total number of records.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listPages',
		label: 'List pages',
		description: 'Lists the pages of a site, including collection template pages.',
		context:
			'---\nname: listPages\ndescription: Lists the pages of a site, including collection template pages.\n---\n\nWraps `GET /sites/{site_id}/pages` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/pages-and-components/pages/list)) and returns the raw response body.\n\n- Pagination is offset based: pass `limit` (max 100) and `offset`; the response `pagination` object carries `limit`, `offset` and `total`. There is no cursor — increase `offset` by `limit` until `offset + limit >= total`.\n- `createdOn` and `lastUpdated` are date ranges sent as `createdOn[gte]` / `createdOn[lte]` query parameters.\n- Required scope: `pages:read`.\n',
		accounts: { webflow2: { scope: ['pages:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				localeId: {
					type: 'string',
					description:
						'Unique identifier for a specific Locale. [Learn more about localization](https://developers.webflow.com/data/v2.0.0/docs/working-with-localization).',
				},
				createdOn: {
					type: 'object',
					description:
						'Filter by the created on date. Provide `gte` (from) and/or `lte` (to); sent as `createdOn[gte]` / `createdOn[lte]`.',
					properties: {
						lte: {
							type: 'string',
							description: 'Filter pages created before this date.',
						},
						gte: {
							type: 'string',
							description: 'Filter pages created after this date.',
						},
					},
					required: [],
				},
				lastUpdated: {
					type: 'object',
					description:
						'Filter by the last updated date. Provide `gte` (from) and/or `lte` (to); sent as `lastUpdated[gte]` / `lastUpdated[lte]`.',
					properties: {
						lte: {
							type: 'string',
							description: 'Filter pages last updated before this date.',
						},
						gte: {
							type: 'string',
							description: 'Filter pages last updated after this date.',
						},
					},
					required: [],
				},
				sortBy: {
					type: 'string',
					description:
						'Sort results by the provided value. Defaults to `createdOn` if not provided.',
					default: '',
					enum: ['', 'createdOn', 'lastUpdated'],
				},
				sortOrder: {
					type: 'string',
					description: 'Sorts the results by asc or desc.',
					default: '',
					enum: ['', 'asc', 'desc'],
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return (max 100).',
					maximum: 100,
				},
				offset: {
					type: 'number',
					description: 'Number of records to skip, for pagination.',
				},
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				pages: {
					type: 'array',
					description:
						'Pages of the site, including collection template pages (those have a `collectionId`).',
					items: {
						type: 'object',
						description: 'The Page object.',
						properties: {
							id: { type: 'string', description: 'Unique identifier for the Page.' },
							siteId: {
								type: 'string',
								description: 'Unique identifier for the Site.',
							},
							slug: {
								type: 'string',
								description:
									'Slug of the Page in the site URL (Webflow derives it from the title by default).',
							},
							parentId: {
								type: 'string',
								description: 'Identifier of the parent folder.',
							},
							collectionId: {
								type: 'string',
								description:
									'Unique identifier for a linked Collection, value will be null if the Page is not part of a Collection.',
							},
							createdOn: {
								type: 'string',
								description: 'The date the Page was created.',
							},
							lastUpdated: {
								type: 'string',
								description: 'The date the Page was most recently updated.',
							},
							archived: {
								type: 'boolean',
								description:
									'Whether the Page has been archived. Defaults to `false`.',
							},
							draft: {
								type: 'boolean',
								description: 'Whether the Page is a draft. Defaults to `false`.',
							},
							shouldPublish: {
								type: 'boolean',
								description:
									'Publishing flag of the page as returned by the API (`true` on every page observed). Returned by the API but not described in the vendor reference.',
							},
							canBranch: {
								type: 'boolean',
								description:
									'Indicates whether the Page supports [Page Branching](https://university.webflow.com/lesson/page-branching). Pages that are already branches cannot be branched again. Defaults to `false`.',
							},
							isBranch: {
								type: 'boolean',
								description:
									'Indicates whether the Page is a branch of another Page (see [Page Branching](https://university.webflow.com/lesson/page-branching)). Defaults to `false`.',
							},
							branchId: {
								type: 'string',
								description:
									'If the Page is a Branch of another Page, this is the ID of the Branch.',
							},
							seo: {
								type: 'object',
								description: 'SEO-related fields for the Page.',
								properties: {
									description: {
										type: 'string',
										description:
											'The Page description shown in search engine results.',
									},
								},
								required: [],
							},
							openGraph: {
								type: 'object',
								description: 'Open Graph fields for the Page.',
								properties: {
									titleCopied: {
										type: 'boolean',
										description:
											'Indicates the Open Graph title was copied from the SEO title. Defaults to `true`.',
									},
									description: {
										type: 'string',
										description:
											'The description supplied to Open Graph annotations.',
									},
									descriptionCopied: {
										type: 'boolean',
										description:
											'Indicates the Open Graph description was copied from the SEO description. Defaults to `true`.',
									},
									imageUrl: {
										type: 'string',
										description:
											'URL of the Open Graph image, or `null`. Returned by the API but not described in the vendor reference.',
									},
									imageAssetId: {
										type: 'string',
										description:
											'ID of the asset used as the Open Graph image, or `null`. Returned by the API but not described in the vendor reference.',
									},
								},
								required: [],
							},
							localeId: {
								type: 'string',
								description: 'Unique ID of the page locale.',
							},
							publishedPath: {
								type: 'string',
								description: 'Relative path of the published page URL.',
							},
						},
						required: [],
					},
				},
				pagination: {
					type: 'object',
					description: 'Pagination object.',
					properties: {
						limit: { type: 'number', description: 'The limit used for pagination.' },
						offset: { type: 'number', description: 'The offset used for pagination.' },
						total: { type: 'number', description: 'The total number of records.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listProducts',
		label: 'List products',
		description: 'Lists the products of a site together with their SKUs.',
		context:
			'---\nname: listProducts\ndescription: Lists the products of a site together with their SKUs.\n---\n\nWraps `GET /sites/{site_id}/products` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/products-sk-us/list)) and returns the raw response body.\n\n- Pagination is offset based: pass `limit` (max 100) and `offset`; the response `pagination` object carries `limit`, `offset` and `total`. There is no cursor — increase `offset` by `limit` until `offset + limit >= total`. `limit`, `offset` and `total` count products only, not SKUs.\n- Each `items[]` entry is `{ product, skus[] }`.\n- SKU `price.value` and `compare-at-price.value` are amounts in the smallest unit of the currency (`2500` with `unit: "USD"` is 25.00 USD).\n- There is no delete route for products: delete one with `deleteItem` on the site\'s Products collection (`listCollections` → slug `product`) using `product.id`; its SKUs are deleted with it.\n- Required scope: `ecommerce:read`.\n',
		accounts: { webflow2: { scope: ['ecommerce:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				offset: {
					type: 'number',
					description: 'Number of records to skip, for pagination.',
				},
				limit: {
					type: 'number',
					description: 'Maximum number of records to return (max 100).',
					maximum: 100,
				},
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				items: {
					type: 'array',
					description:
						'List of Item objects within the Collection. Contains product and skus keys for each Item.',
					items: {
						type: 'object',
						description: 'A product and its SKUs.',
						properties: {
							product: {
								type: 'object',
								description: 'The Product object.',
								properties: {
									id: {
										type: 'string',
										description: 'Unique identifier for the Product.',
									},
									cmsLocaleId: {
										type: 'string',
										description: 'Identifier for the locale of the CMS item.',
									},
									lastPublished: {
										type: 'string',
										description: 'The date the Product was last published.',
									},
									lastUpdated: {
										type: 'string',
										description: 'The date the Product was last updated.',
									},
									createdOn: {
										type: 'string',
										description: 'The date the Product was created.',
									},
									isArchived: {
										type: 'boolean',
										description:
											'Whether the product is archived. Products created without `isArchived` are not archived (`false`).',
									},
									isDraft: {
										type: 'boolean',
										description:
											'Whether the product is a draft. Products created without `isDraft` are not drafts (`false`).',
									},
									fieldData: {
										type: 'object',
										description:
											'Field values of the product keyed by the Products collection field slug. Standard fields are listed; custom fields added to the Products collection are returned under their slug as well and are not declared here.',
										properties: {
											name: {
												type: 'string',
												description: 'Name of the Product.',
											},
											slug: {
												type: 'string',
												description:
													'URL structure of the Product in your site.',
											},
											description: {
												type: 'string',
												description: 'A description of your product.',
											},
											shippable: {
												type: 'boolean',
												description:
													'Boolean determining if the Product is shippable.',
											},
											'sku-properties': {
												type: 'array',
												description: 'Variant types to include in SKUs.',
												items: {
													type: 'object',
													description: 'A variant/option type for a SKU.',
													properties: {
														id: {
															type: 'string',
															description:
																'Unique identifier for a collection of Product Variants.',
														},
														name: {
															type: 'string',
															description:
																'Name of the collection of Product Variants.',
														},
														enum: {
															type: 'array',
															description:
																'The individual Product variants that are contained within the collection.',
															items: {
																type: 'object',
																description:
																	'Enumerated Product variants/Options for the SKU.',
																properties: {
																	id: {
																		type: 'string',
																		description:
																			'Unique identifier for a Product variant/Option.',
																	},
																	name: {
																		type: 'string',
																		description:
																			'Name of the Product variant/Option.',
																	},
																	slug: {
																		type: 'string',
																		description:
																			'Slug for the Product variant/Option in the Site URL structure.',
																	},
																},
																required: [],
															},
														},
													},
													required: [],
												},
											},
											category: {
												type: 'array',
												description:
													'The category your product belongs to.',
												items: {
													type: 'string',
													description: 'ID of a category item.',
												},
											},
											'tax-category': {
												type: 'string',
												description:
													'Product tax class. One of: `standard-taxable`, `standard-exempt`, `books-religious`, `books-textbook`, `clothing`, `clothing-swimwear`, `digital-goods`, `digital-service`, `drugs-non-prescription`, `drugs-prescription`, `food-bottled-water`, `food-candy`, `food-groceries`, `food-prepared`, `food-soda`, `food-supplements`, `magazine-individual`, `magazine-subscription`, `service-admission`, `service-advertising`, `service-dry-cleaning`, `service-hairdressing`, `service-installation`, `service-miscellaneous`, `service-parking`, `service-printing`, `service-professional`, `service-repair`, `service-training`.',
											},
											'default-sku': {
												type: 'string',
												description:
													'The default SKU associated with this product.',
											},
											'ec-product-type': {
												type: 'string',
												description:
													'[Product types.](https://university.webflow.com/lesson/add-and-manage-products-and-categories?topics=ecommerce#how-to-understand-product-types) Enums reflect the following values in order: Physical, Digital, Service, Membership, Advanced. One of: `ff42fee0113744f693a764e3431a9cc2`, `f22027db68002190aef89a4a2b7ac8a1`, `c599e43b1a1c34d5a323aedf75d3adf6`, `e348fd487d0102946c9179d2a94bb613`, `b6ccc1830db4b1babeb06a9ac5f6dd76`.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							skus: {
								type: 'array',
								description: 'A list of SKU Objects.',
								items: {
									type: 'object',
									description: 'The SKU object.',
									properties: {
										id: {
											type: 'string',
											description: 'Unique identifier for the SKU.',
										},
										cmsLocaleId: {
											type: 'string',
											description:
												'Identifier for the locale of the CMS item.',
										},
										lastPublished: {
											type: 'string',
											description: 'The date the SKU was last published.',
										},
										lastUpdated: {
											type: 'string',
											description: 'The date the SKU was last updated.',
										},
										createdOn: {
											type: 'string',
											description: 'The date the SKU was created.',
										},
										fieldData: {
											type: 'object',
											description: 'Standard and Custom fields for a SKU.',
											properties: {
												'sku-values': {
													type: 'object',
													description:
														'A mapping between SKU properties and their values, represented as key-value pairs. Each key represents a SKU Property ID (e.g. "color") and maps to its corresponding SKU Value ID (e.g. "blue"). This structure defines the specific variant combination for a SKU.',
													properties: {},
													required: [],
													additionalProperties: true,
												},
												product: {
													type: 'string',
													description:
														'ID of the product item this SKU belongs to. Returned by the API but not described in the vendor reference.',
												},
												name: {
													type: 'string',
													description: 'Name of the SKU (variant).',
												},
												slug: {
													type: 'string',
													description:
														'URL structure of the SKU in your site.',
												},
												price: {
													type: 'object',
													description:
														'Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
													properties: {
														value: {
															type: 'number',
															description:
																'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
														},
														unit: {
															type: 'string',
															description:
																'ISO 4217 currency code of the amount, e.g. `USD`.',
														},
													},
													required: [],
												},
												'compare-at-price': {
													type: 'object',
													description:
														'Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.',
													properties: {
														value: {
															type: 'number',
															description:
																'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
														},
														unit: {
															type: 'string',
															description:
																'ISO 4217 currency code of the amount, e.g. `USD`.',
														},
													},
													required: [],
												},
												'ec-sku-billing-method': {
													type: 'string',
													description:
														'[Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU. One of: `one-time`, `subscription`.',
												},
												'ec-sku-subscription-plan': {
													type: 'object',
													description:
														'[Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.',
													properties: {
														interval: {
															type: 'string',
															description:
																'Interval of subscription renewal. One of: `day`, `week`, `month`, `year`.',
														},
														frequency: {
															type: 'number',
															description:
																'Frequency of billing within the interval.',
														},
														trial: {
															type: 'number',
															description:
																'Number of days of a trial.',
														},
														plans: {
															type: 'array',
															description:
																'The plans of the subscription plan.',
															items: {
																type: 'object',
																description:
																	'One subscription plan entry.',
																properties: {
																	platform: {
																		type: 'string',
																		description:
																			'The platform of the subscription plan. One of: `stripe`.',
																	},
																	id: {
																		type: 'string',
																		description:
																			'The unique identifier of the plan.',
																	},
																	status: {
																		type: 'string',
																		description:
																			'The status of the plan. One of: `active`, `inactive`, `canceled`.',
																	},
																},
																required: [],
															},
														},
													},
													required: [],
												},
												'main-image': {
													type: 'object',
													description:
														'The main image of the SKU, or `null`. Set with an image URL; Webflow stores a copy and returns the asset.',
													properties: {
														fileId: {
															type: 'string',
															description:
																'ID of the uploaded image asset.',
														},
														url: {
															type: 'string',
															description: 'URL of the image.',
														},
														alt: {
															type: 'string',
															description:
																'Alt text of the image, or `null`.',
														},
													},
													required: [],
												},
												'more-images': {
													type: 'array',
													description:
														'Additional images of the SKU, or `null`. Returned by the API but not described in the vendor reference.',
													items: {
														type: 'object',
														description:
															'An additional image of the SKU.',
														properties: {
															fileId: {
																type: 'string',
																description:
																	'ID of the uploaded image asset.',
															},
															url: {
																type: 'string',
																description: 'URL of the image.',
															},
															alt: {
																type: 'string',
																description:
																	'Alt text of the image, or `null`.',
															},
														},
														required: [],
													},
												},
												'download-files': {
													type: 'array',
													description:
														'Downloadable files attached to the SKU (digital products), or `null`. Returned by the API but not described in the vendor reference. Only empty values were observed, so the item structure is left open.',
													items: {
														type: 'object',
														description:
															'A downloadable file of the SKU. Returned as an open object; only empty lists were observed and the vendor reference does not describe it.',
														properties: {},
														required: [],
														additionalProperties: true,
													},
												},
												sku: {
													type: 'string',
													description:
														'Your own SKU code for this variant (free text), or `null`.',
												},
												width: {
													type: 'number',
													description:
														'The physical width of the variant if provided, or null.',
												},
												length: {
													type: 'number',
													description:
														'The physical length of the variant if provided, or null.',
												},
												height: {
													type: 'number',
													description:
														'The physical height of the variant if provided, or null.',
												},
												weight: {
													type: 'number',
													description:
														'The physical weight of the variant if provided, or null.',
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
				pagination: {
					type: 'object',
					description: 'Pagination object.',
					properties: {
						limit: { type: 'number', description: 'The limit used for pagination.' },
						offset: { type: 'number', description: 'The offset used for pagination.' },
						total: { type: 'number', description: 'The total number of records.' },
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'listSites',
		label: 'List sites',
		description: 'Lists all sites the connection can access.',
		context:
			'---\nname: listSites\ndescription: Lists all sites the connection can access.\n---\n\nWraps `GET /sites` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/sites/list)) and returns the raw response body.\n\n- Returns `{ "sites": [...] }`. The endpoint is not paginated.\n- Required scope: `sites:read`.\n',
		accounts: { webflow2: { scope: ['sites:read'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				sites: {
					type: 'array',
					description: 'Sites the connection has access to.',
					items: {
						type: 'object',
						description: 'One site.',
						properties: {
							id: { type: 'string', description: 'Unique identifier for the Site.' },
							workspaceId: {
								type: 'string',
								description: 'Unique identifier for the Workspace.',
							},
							createdOn: {
								type: 'string',
								description: 'Date the Site was created.',
							},
							displayName: { type: 'string', description: 'Name given to Site.' },
							shortName: {
								type: 'string',
								description: 'Slugified version of name.',
							},
							lastPublished: {
								type: 'string',
								description: 'Date the Site was last published.',
							},
							fullSiteCompiledAt: {
								type: 'string',
								description:
									'Timestamp of the last full compile of the site; equals `lastPublished` on published sites and is `null` for a site that has never been published. Returned by the API but not described in the vendor reference.',
							},
							lastUpdated: {
								type: 'string',
								description: 'Date the Site was last updated.',
							},
							previewUrl: {
								type: 'string',
								description: 'URL of a generated image for the given Site.',
							},
							timeZone: {
								type: 'string',
								description: 'Site timezone set under Site Settings.',
							},
							parentFolderId: {
								type: 'string',
								description: 'The ID of the parent folder the Site exists in.',
							},
							customDomains: {
								type: 'array',
								description: 'Custom domains connected to the site.',
								items: {
									type: 'object',
									description: 'A custom domain connected to the site.',
									properties: {
										id: {
											type: 'string',
											description: 'Unique identifier for the Domain.',
										},
										url: {
											type: 'string',
											description: 'The registered Domain name.',
										},
										lastPublished: {
											type: 'string',
											description:
												'The date the custom domain was last published to.',
										},
									},
									required: [],
								},
							},
							locales: {
								type: 'object',
								description: 'Locales configured for the site.',
								properties: {
									primary: {
										type: 'object',
										description:
											'The primary locale for the site or application.',
										properties: {
											id: {
												type: 'string',
												description:
													'The unique identifier for the locale.',
											},
											cmsLocaleId: {
												type: 'string',
												description:
													'A CMS-specific identifier for the locale.',
											},
											enabled: {
												type: 'boolean',
												description: 'Indicates if the locale is enabled.',
											},
											displayName: {
												type: 'string',
												description:
													'The display name of the locale, typically in English.',
											},
											displayImageId: {
												type: 'string',
												description:
													'An optional ID for an image associated with the locale, nullable.',
											},
											redirect: {
												type: 'boolean',
												description:
													"Determines if requests should redirect to the locale's subdirectory.",
											},
											subdirectory: {
												type: 'string',
												description:
													'The subdirectory path for the locale, used in URLs.',
											},
											tag: {
												type: 'string',
												description:
													"A tag or code representing the locale, often following a standard format like 'en-US'.",
											},
										},
										required: [],
									},
									secondary: {
										type: 'array',
										description:
											'A list of secondary locales available for the site or application.',
										items: {
											type: 'object',
											description: 'One secondary locale.',
											properties: {
												id: {
													type: 'string',
													description:
														'The unique identifier for the locale.',
												},
												cmsLocaleId: {
													type: 'string',
													description:
														'A CMS-specific identifier for the locale.',
												},
												enabled: {
													type: 'boolean',
													description:
														'Indicates if the locale is enabled.',
												},
												displayName: {
													type: 'string',
													description:
														'The display name of the locale, typically in English.',
												},
												displayImageId: {
													type: 'string',
													description:
														'An optional ID for an image associated with the locale, nullable.',
												},
												redirect: {
													type: 'boolean',
													description:
														"Determines if requests should redirect to the locale's subdirectory.",
												},
												subdirectory: {
													type: 'string',
													description:
														'The subdirectory path for the locale, used in URLs.',
												},
												tag: {
													type: 'string',
													description:
														"A tag or code representing the locale, often following a standard format like 'en-US'.",
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							dataCollectionEnabled: {
								type: 'boolean',
								description:
									'Indicates if data collection is enabled for the site.',
							},
							dataCollectionType: {
								type: 'string',
								description:
									'The type of data collection enabled for the site. One of: `always`, `optOut`, `disabled`.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'publishItems',
		label: 'Publish items',
		description: 'Publishes one or more staged items of a CMS collection to the live site.',
		context:
			'---\nname: publishItems\ndescription: Publishes one or more staged items of a CMS collection to the live site.\n---\n\nWraps `POST /collections/{collection_id}/items/publish` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/publish-item)) and returns the raw response body.\n\n- Provide either `itemIds` (publish in the primary locale) or `items` (publish specific locales per item). Publishing a draft automatically sets `isDraft` to `false`.\n- The response lists `publishedItemIds` and per-item `errors`. Webflow answers `202 Accepted`.\n- Required scope: `cms:write`.\n',
		accounts: { webflow2: { scope: ['cms:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				collection_id: {
					type: 'string',
					description:
						'Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.',
				},
				itemIds: {
					type: 'array',
					description: 'IDs of the items to publish in the primary locale.',
					items: { type: 'string', description: 'ID of an item to publish.' },
				},
				items: {
					type: 'array',
					description: 'Items to publish with an explicit set of locales each.',
					items: {
						type: 'object',
						description: 'One item with its locales.',
						properties: {
							id: {
								type: 'string',
								description:
									'The ID of the CMS item. Required for every `items` entry.',
							},
							cmsLocaleIds: {
								type: 'array',
								description:
									'Array of identifiers for the locales where the item will be published.',
								items: { type: 'string', description: 'A CMS locale ID.' },
							},
						},
						required: [],
					},
				},
			},
			required: ['collection_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				publishedItemIds: {
					type: 'array',
					description: 'IDs of the items that were published.',
					items: { type: 'string', description: 'ID of a published item.' },
				},
				errors: {
					type: 'array',
					description: 'Error messages for items that could not be published.',
					items: { type: 'string', description: 'An error message.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'publishSite',
		label: 'Publish a site',
		description: 'Publishes a site, or a single page, to one or more domains.',
		context:
			'---\nname: publishSite\ndescription: Publishes a site, or a single page, to one or more domains.\n---\n\nWraps `POST /sites/{site_id}/publish` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/sites/publish)) and returns the raw response body.\n\n- Publishing is asynchronous: the API answers `202 Accepted` and the publish happens in the background. Pass `pageId` to publish a single page only.\n- Custom domain IDs come from `getSite` → `customDomains[].id`. Webflow allows one publish per minute per site.\n- Required scope: `sites:write`.\n',
		accounts: { webflow2: { scope: ['sites:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				customDomains: {
					type: 'array',
					description: 'Array of Custom Domain IDs to publish.',
					items: { type: 'string', description: 'ID of a custom domain to publish to.' },
				},
				publishToWebflowSubdomain: {
					type: 'boolean',
					description: 'Choice of whether to publish to the default Webflow Subdomain.',
					default: false,
				},
				pageId: { type: 'string', description: 'The ID of the page to publish.' },
			},
			required: ['site_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				customDomains: {
					type: 'array',
					description: 'Custom domains the site was published to.',
					items: {
						type: 'object',
						description: 'A custom domain connected to the site.',
						properties: {
							id: {
								type: 'string',
								description: 'Unique identifier for the Domain.',
							},
							url: { type: 'string', description: 'The registered Domain name.' },
							lastPublished: {
								type: 'string',
								description: 'The date the custom domain was last published to.',
							},
						},
						required: [],
					},
				},
				publishToWebflowSubdomain: {
					type: 'boolean',
					description:
						'Flag for publishing to webflow.io subdomain. Defaults to `false`.',
				},
				publishScope: {
					type: 'string',
					description:
						'Whether the site or an individual page was published. One of: `site`, `page`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'refundOrder',
		label: 'Refund an order',
		description: 'Refunds an order and reverses its Stripe charge.',
		context:
			'---\nname: refundOrder\ndescription: Refunds an order and reverses its Stripe charge.\n---\n\nWraps `POST /sites/{site_id}/orders/{order_id}/refund` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/orders/refund)) and returns the raw response body.\n\n- Refunds the full order through Stripe and sets its status to `refunded`. This cannot be undone. Returns the updated order.\n- Required scope: `ecommerce:write`.\n',
		accounts: { webflow2: { scope: ['ecommerce:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				order_id: {
					type: 'string',
					description:
						'Unique identifier for an order. Use the `listOrders` endpoint to find it.',
				},
				reason: {
					type: 'string',
					description: 'The reason for the refund.',
					default: '',
					enum: ['', 'duplicate', 'fraudulent', 'requested'],
				},
			},
			required: ['site_id', 'order_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				orderId: {
					type: 'string',
					description:
						'The order ID. Will usually be 6 hex characters, but can also be 9 hex characters if the site has a very large number of Orders. Randomly assigned.',
				},
				status: {
					type: 'string',
					description:
						'The status of the Order. One of: `pending`, `unfulfilled`, `fulfilled`, `disputed`, `dispute-lost`, `refunded`.',
				},
				comment: {
					type: 'string',
					description:
						'A comment string for this Order, which is editable by API user (not used by Webflow).',
				},
				orderComment: {
					type: 'string',
					description: 'A comment that the customer left when making their Order.',
				},
				acceptedOn: {
					type: 'string',
					description: 'The ISO8601 timestamp that an Order was placed.',
				},
				fulfilledOn: {
					type: 'string',
					description:
						"When an Order is marked as 'fulfilled', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null.",
				},
				refundedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'refunded', this field represents the timestamp of the refund in ISO8601 format. Otherwise, it is null.",
				},
				disputedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'disputed', this field represents the timestamp of the dispute in ISO8601 format. Otherwise, it is null.",
				},
				disputeUpdatedOn: {
					type: 'string',
					description:
						'If an Order has been disputed by the customer, this key will be set to the ISO8601 timestamp of the last update received. If the Order is not disputed, the key will be null.',
				},
				disputeLastStatus: {
					type: 'string',
					description:
						"If an order was disputed by the customer, then this key will be set with the [dispute's status](https://stripe.com/docs/api#dispute_object-status). One of: `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, `lost`.",
				},
				customerPaid: {
					type: 'object',
					description: 'The total paid by the customer.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				netAmount: {
					type: 'object',
					description: 'The net amount after application fees.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				applicationFee: {
					type: 'object',
					description: 'The application fee assessed by the platform.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				allAddresses: {
					type: 'array',
					description: 'All addresses provided by the customer during the ordering flow.',
					items: {
						type: 'object',
						description: 'A customer address.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
							},
							japanType: {
								type: 'string',
								description:
									'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
							},
							addressee: {
								type: 'string',
								description: 'Display name on the address.',
							},
							line1: {
								type: 'string',
								description: 'The first line of the address.',
							},
							line2: {
								type: 'string',
								description: 'The second line of the address.',
							},
							city: { type: 'string', description: 'The city of the address.' },
							state: {
								type: 'string',
								description: 'The state or province of the address.',
							},
							country: { type: 'string', description: 'The country of the address.' },
							postalCode: {
								type: 'string',
								description: 'The postal code of the address.',
							},
						},
						required: [],
					},
				},
				shippingAddress: {
					type: 'object',
					description: 'The shipping address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				billingAddress: {
					type: 'object',
					description: 'The billing address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				shippingProvider: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping provider used (not used by Webflow).',
				},
				shippingTracking: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping tracking number for the order (not used by Webflow).',
				},
				shippingTrackingURL: { type: 'string', description: 'The shipping tracking URL.' },
				customerInfo: {
					type: 'object',
					description: 'An object with the keys `fullName` and `email`.',
					properties: {
						fullName: { type: 'string', description: 'The full name of the Customer.' },
						email: { type: 'string', description: "The Customer's email address." },
					},
					required: [],
				},
				purchasedItems: {
					type: 'array',
					description: 'An array of all things that the Customer purchased.',
					items: {
						type: 'object',
						description: 'An Item that was purchased.',
						properties: {
							count: { type: 'number', description: 'Number of Item purchased.' },
							rowTotal: {
								type: 'object',
								description: 'The total for the row.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							productId: {
								type: 'string',
								description: 'The unique identifier for the Product.',
							},
							productName: {
								type: 'string',
								description: 'User-facing name of the Product.',
							},
							productSlug: { type: 'string', description: 'Slug for the Product.' },
							variantId: {
								type: 'string',
								description: 'Identifier for the Product Variant (SKU).',
							},
							variantName: {
								type: 'string',
								description: 'User-facing name of the Product Variant (SKU).',
							},
							variantSlug: {
								type: 'string',
								description: 'Slug for the Product Variant (SKU).',
							},
							variantSKU: {
								type: 'string',
								description:
									'The user-defined custom SKU of the Product Variant (SKU).',
							},
							variantImage: {
								type: 'object',
								description: 'The variant image of the purchased item.',
								properties: {
									url: {
										type: 'string',
										description: "The hosted location for the Variant's image.",
									},
									file: {
										type: 'object',
										description: 'The file of the variant image.',
										properties: {
											size: {
												type: 'number',
												description: 'The image size in bytes.',
											},
											originalFileName: {
												type: 'string',
												description: 'The original name of the image.',
											},
											createdOn: {
												type: 'string',
												description: 'The creation timestamp of the image.',
											},
											contentType: {
												type: 'string',
												description: 'The MIME type of the image.',
											},
											width: {
												type: 'number',
												description: 'The image width in pixels.',
											},
											height: {
												type: 'number',
												description: 'The image height in pixels.',
											},
											variants: {
												type: 'array',
												description: 'Variants of the supplied image.',
												items: {
													type: 'object',
													description:
														'A resized rendition of the image.',
													properties: {
														url: {
															type: 'string',
															description:
																"The hosted location for the Variant's image.",
														},
														originalFileName: {
															type: 'string',
															description:
																'The original file name of the variant.',
														},
														size: {
															type: 'number',
															description: 'The image size in bytes.',
														},
														width: {
															type: 'number',
															description:
																'The image width in pixels.',
														},
														height: {
															type: 'number',
															description:
																'The image height in pixels.',
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
							variantPrice: {
								type: 'object',
								description: 'The price corresponding to the variant.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							weight: {
								type: 'number',
								description:
									'The physical weight of the variant if provided, or null.',
							},
							width: {
								type: 'number',
								description:
									'The physical width of the variant if provided, or null.',
							},
							height: {
								type: 'number',
								description:
									'The physical height of the variant if provided, or null.',
							},
							length: {
								type: 'number',
								description:
									'The physical length of the variant if provided, or null.',
							},
						},
						required: [],
					},
				},
				purchasedItemsCount: {
					type: 'number',
					description: "The sum of all 'count' fields in 'purchasedItems'.",
				},
				stripeDetails: {
					type: 'object',
					description:
						'An object with various Stripe IDs, useful for linking into the Stripe dashboard.',
					properties: {
						subscriptionId: {
							type: 'string',
							description: 'Stripe-generated identifier for the Subscription.',
						},
						paymentMethod: {
							type: 'string',
							description: 'Stripe-generated identifier for the PaymentMethod used.',
						},
						paymentIntentId: {
							type: 'string',
							description:
								'Stripe-generated identifier for the PaymentIntent, or null.',
						},
						customerId: {
							type: 'string',
							description: 'Stripe-generated customer identifier, or null.',
						},
						chargeId: {
							type: 'string',
							description: 'Stripe-generated charge identifier, or null.',
						},
						disputeId: {
							type: 'string',
							description: 'Stripe-generated dispute identifier, or null.',
						},
						refundId: {
							type: 'string',
							description: 'Stripe-generated refund identifier, or null.',
						},
						refundReason: {
							type: 'string',
							description: 'Stripe-generated refund reason, or null.',
						},
					},
					required: [],
				},
				stripeCard: {
					type: 'object',
					description:
						'Details on the card used to pay for this order, if the order was finalized with Stripe.',
					properties: {
						last4: {
							type: 'string',
							description: 'The last 4 digits on the card as a string.',
						},
						brand: {
							type: 'string',
							description:
								"The card's brand (i.e. the credit card network). One of: `Visa`, `American Express`, `MasterCard`, `Discover`, `JCB`, `Diners Club`, `Unknown`.",
						},
						ownerName: { type: 'string', description: 'The name on the card.' },
						expires: {
							type: 'object',
							description: "The card's expiration date.",
							properties: {
								year: {
									type: 'number',
									description: 'Year that the card expires.',
								},
								month: {
									type: 'number',
									description: 'Month that the card expires.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				paypalDetails: {
					type: 'object',
					description: 'PayPal transaction details when the order was paid with PayPal.',
					properties: {
						orderId: { type: 'string', description: 'PayPal order identifier.' },
						payerId: { type: 'string', description: 'PayPal payer identifier.' },
						captureId: { type: 'string', description: 'PayPal capture identifier.' },
						refundId: { type: 'string', description: 'PayPal refund identifier.' },
						refundReason: {
							type: 'string',
							description: 'PayPal-issued reason for the refund.',
						},
						disputeId: { type: 'string', description: 'PayPal dispute identifier.' },
					},
					required: [],
				},
				customData: {
					type: 'array',
					description:
						'An array of additional inputs for custom order data gathering. Each object in the array represents an input with a name, and a textInput, textArea, or checkbox value.',
					items: {
						type: 'object',
						description: 'One custom-data entry.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				metadata: {
					type: 'object',
					description: 'Additional metadata of the order.',
					properties: {
						isBuyNow: {
							type: 'boolean',
							description: 'Whether the order was placed through the Buy Now button.',
						},
					},
					required: [],
				},
				isCustomerDeleted: {
					type: 'boolean',
					description:
						'A boolean indicating whether the customer has been deleted from the site.',
				},
				isShippingRequired: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that require shipping.',
				},
				hasDownloads: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that are downloadable.',
				},
				paymentProcessor: {
					type: 'string',
					description: 'A string indicating the payment processor used for this order.',
				},
				totals: {
					type: 'object',
					description: 'An object describing various pricing totals.',
					properties: {
						subtotal: {
							type: 'object',
							description: 'The subtotal price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
						extras: {
							type: 'array',
							description:
								'An array of extra items, includes discounts, shipping, and taxes.',
							items: {
								type: 'object',
								description:
									'Extra order items, includes discounts, shipping, and taxes.',
								properties: {
									type: {
										type: 'string',
										description:
											'The type of extra item this is. One of: `discount`, `discount-shipping`, `shipping`, `tax`.',
									},
									name: {
										type: 'string',
										description:
											'A human-readable (but English) name for this extra charge.',
									},
									description: {
										type: 'string',
										description:
											'A human-readable (but English) description of this extra charge.',
									},
									price: {
										type: 'object',
										description: 'The price for the item.',
										properties: {
											unit: {
												type: 'string',
												description: 'The three-letter ISO currency code.',
											},
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
											},
											string: {
												type: 'string',
												description:
													'The user-facing string representation of the amount.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						total: {
							type: 'object',
							description: 'The total price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				downloadFiles: {
					type: 'array',
					description: 'An array of downloadable file objects.',
					items: {
						type: 'object',
						description: 'One downloadable file.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the downloadable file.',
							},
							name: {
								type: 'string',
								description: 'The user-facing name for the downloadable file.',
							},
							url: {
								type: 'string',
								description: 'The hosted location for the downloadable file.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'unfulfillOrder',
		label: 'Unfulfill an order',
		description: 'Marks an order as unfulfilled.',
		context:
			'---\nname: unfulfillOrder\ndescription: Marks an order as unfulfilled.\n---\n\nWraps `POST /sites/{site_id}/orders/{order_id}/unfulfill` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/orders/update-unfulfill)) and returns the raw response body.\n\n- Reverts a fulfilled order to `unfulfilled`. Returns the updated order.\n- Required scope: `ecommerce:write`.\n',
		accounts: { webflow2: { scope: ['ecommerce:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				order_id: {
					type: 'string',
					description:
						'Unique identifier for an order. Use the `listOrders` endpoint to find it.',
				},
			},
			required: ['site_id', 'order_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				orderId: {
					type: 'string',
					description:
						'The order ID. Will usually be 6 hex characters, but can also be 9 hex characters if the site has a very large number of Orders. Randomly assigned.',
				},
				status: {
					type: 'string',
					description:
						'The status of the Order. One of: `pending`, `unfulfilled`, `fulfilled`, `disputed`, `dispute-lost`, `refunded`.',
				},
				comment: {
					type: 'string',
					description:
						'A comment string for this Order, which is editable by API user (not used by Webflow).',
				},
				orderComment: {
					type: 'string',
					description: 'A comment that the customer left when making their Order.',
				},
				acceptedOn: {
					type: 'string',
					description: 'The ISO8601 timestamp that an Order was placed.',
				},
				fulfilledOn: {
					type: 'string',
					description:
						"When an Order is marked as 'fulfilled', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null.",
				},
				refundedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'refunded', this field represents the timestamp of the refund in ISO8601 format. Otherwise, it is null.",
				},
				disputedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'disputed', this field represents the timestamp of the dispute in ISO8601 format. Otherwise, it is null.",
				},
				disputeUpdatedOn: {
					type: 'string',
					description:
						'If an Order has been disputed by the customer, this key will be set to the ISO8601 timestamp of the last update received. If the Order is not disputed, the key will be null.',
				},
				disputeLastStatus: {
					type: 'string',
					description:
						"If an order was disputed by the customer, then this key will be set with the [dispute's status](https://stripe.com/docs/api#dispute_object-status). One of: `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, `lost`.",
				},
				customerPaid: {
					type: 'object',
					description: 'The total paid by the customer.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				netAmount: {
					type: 'object',
					description: 'The net amount after application fees.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				applicationFee: {
					type: 'object',
					description: 'The application fee assessed by the platform.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				allAddresses: {
					type: 'array',
					description: 'All addresses provided by the customer during the ordering flow.',
					items: {
						type: 'object',
						description: 'A customer address.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
							},
							japanType: {
								type: 'string',
								description:
									'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
							},
							addressee: {
								type: 'string',
								description: 'Display name on the address.',
							},
							line1: {
								type: 'string',
								description: 'The first line of the address.',
							},
							line2: {
								type: 'string',
								description: 'The second line of the address.',
							},
							city: { type: 'string', description: 'The city of the address.' },
							state: {
								type: 'string',
								description: 'The state or province of the address.',
							},
							country: { type: 'string', description: 'The country of the address.' },
							postalCode: {
								type: 'string',
								description: 'The postal code of the address.',
							},
						},
						required: [],
					},
				},
				shippingAddress: {
					type: 'object',
					description: 'The shipping address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				billingAddress: {
					type: 'object',
					description: 'The billing address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				shippingProvider: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping provider used (not used by Webflow).',
				},
				shippingTracking: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping tracking number for the order (not used by Webflow).',
				},
				shippingTrackingURL: { type: 'string', description: 'The shipping tracking URL.' },
				customerInfo: {
					type: 'object',
					description: 'An object with the keys `fullName` and `email`.',
					properties: {
						fullName: { type: 'string', description: 'The full name of the Customer.' },
						email: { type: 'string', description: "The Customer's email address." },
					},
					required: [],
				},
				purchasedItems: {
					type: 'array',
					description: 'An array of all things that the Customer purchased.',
					items: {
						type: 'object',
						description: 'An Item that was purchased.',
						properties: {
							count: { type: 'number', description: 'Number of Item purchased.' },
							rowTotal: {
								type: 'object',
								description: 'The total for the row.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							productId: {
								type: 'string',
								description: 'The unique identifier for the Product.',
							},
							productName: {
								type: 'string',
								description: 'User-facing name of the Product.',
							},
							productSlug: { type: 'string', description: 'Slug for the Product.' },
							variantId: {
								type: 'string',
								description: 'Identifier for the Product Variant (SKU).',
							},
							variantName: {
								type: 'string',
								description: 'User-facing name of the Product Variant (SKU).',
							},
							variantSlug: {
								type: 'string',
								description: 'Slug for the Product Variant (SKU).',
							},
							variantSKU: {
								type: 'string',
								description:
									'The user-defined custom SKU of the Product Variant (SKU).',
							},
							variantImage: {
								type: 'object',
								description: 'The variant image of the purchased item.',
								properties: {
									url: {
										type: 'string',
										description: "The hosted location for the Variant's image.",
									},
									file: {
										type: 'object',
										description: 'The file of the variant image.',
										properties: {
											size: {
												type: 'number',
												description: 'The image size in bytes.',
											},
											originalFileName: {
												type: 'string',
												description: 'The original name of the image.',
											},
											createdOn: {
												type: 'string',
												description: 'The creation timestamp of the image.',
											},
											contentType: {
												type: 'string',
												description: 'The MIME type of the image.',
											},
											width: {
												type: 'number',
												description: 'The image width in pixels.',
											},
											height: {
												type: 'number',
												description: 'The image height in pixels.',
											},
											variants: {
												type: 'array',
												description: 'Variants of the supplied image.',
												items: {
													type: 'object',
													description:
														'A resized rendition of the image.',
													properties: {
														url: {
															type: 'string',
															description:
																"The hosted location for the Variant's image.",
														},
														originalFileName: {
															type: 'string',
															description:
																'The original file name of the variant.',
														},
														size: {
															type: 'number',
															description: 'The image size in bytes.',
														},
														width: {
															type: 'number',
															description:
																'The image width in pixels.',
														},
														height: {
															type: 'number',
															description:
																'The image height in pixels.',
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
							variantPrice: {
								type: 'object',
								description: 'The price corresponding to the variant.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							weight: {
								type: 'number',
								description:
									'The physical weight of the variant if provided, or null.',
							},
							width: {
								type: 'number',
								description:
									'The physical width of the variant if provided, or null.',
							},
							height: {
								type: 'number',
								description:
									'The physical height of the variant if provided, or null.',
							},
							length: {
								type: 'number',
								description:
									'The physical length of the variant if provided, or null.',
							},
						},
						required: [],
					},
				},
				purchasedItemsCount: {
					type: 'number',
					description: "The sum of all 'count' fields in 'purchasedItems'.",
				},
				stripeDetails: {
					type: 'object',
					description:
						'An object with various Stripe IDs, useful for linking into the Stripe dashboard.',
					properties: {
						subscriptionId: {
							type: 'string',
							description: 'Stripe-generated identifier for the Subscription.',
						},
						paymentMethod: {
							type: 'string',
							description: 'Stripe-generated identifier for the PaymentMethod used.',
						},
						paymentIntentId: {
							type: 'string',
							description:
								'Stripe-generated identifier for the PaymentIntent, or null.',
						},
						customerId: {
							type: 'string',
							description: 'Stripe-generated customer identifier, or null.',
						},
						chargeId: {
							type: 'string',
							description: 'Stripe-generated charge identifier, or null.',
						},
						disputeId: {
							type: 'string',
							description: 'Stripe-generated dispute identifier, or null.',
						},
						refundId: {
							type: 'string',
							description: 'Stripe-generated refund identifier, or null.',
						},
						refundReason: {
							type: 'string',
							description: 'Stripe-generated refund reason, or null.',
						},
					},
					required: [],
				},
				stripeCard: {
					type: 'object',
					description:
						'Details on the card used to pay for this order, if the order was finalized with Stripe.',
					properties: {
						last4: {
							type: 'string',
							description: 'The last 4 digits on the card as a string.',
						},
						brand: {
							type: 'string',
							description:
								"The card's brand (i.e. the credit card network). One of: `Visa`, `American Express`, `MasterCard`, `Discover`, `JCB`, `Diners Club`, `Unknown`.",
						},
						ownerName: { type: 'string', description: 'The name on the card.' },
						expires: {
							type: 'object',
							description: "The card's expiration date.",
							properties: {
								year: {
									type: 'number',
									description: 'Year that the card expires.',
								},
								month: {
									type: 'number',
									description: 'Month that the card expires.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				paypalDetails: {
					type: 'object',
					description: 'PayPal transaction details when the order was paid with PayPal.',
					properties: {
						orderId: { type: 'string', description: 'PayPal order identifier.' },
						payerId: { type: 'string', description: 'PayPal payer identifier.' },
						captureId: { type: 'string', description: 'PayPal capture identifier.' },
						refundId: { type: 'string', description: 'PayPal refund identifier.' },
						refundReason: {
							type: 'string',
							description: 'PayPal-issued reason for the refund.',
						},
						disputeId: { type: 'string', description: 'PayPal dispute identifier.' },
					},
					required: [],
				},
				customData: {
					type: 'array',
					description:
						'An array of additional inputs for custom order data gathering. Each object in the array represents an input with a name, and a textInput, textArea, or checkbox value.',
					items: {
						type: 'object',
						description: 'One custom-data entry.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				metadata: {
					type: 'object',
					description: 'Additional metadata of the order.',
					properties: {
						isBuyNow: {
							type: 'boolean',
							description: 'Whether the order was placed through the Buy Now button.',
						},
					},
					required: [],
				},
				isCustomerDeleted: {
					type: 'boolean',
					description:
						'A boolean indicating whether the customer has been deleted from the site.',
				},
				isShippingRequired: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that require shipping.',
				},
				hasDownloads: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that are downloadable.',
				},
				paymentProcessor: {
					type: 'string',
					description: 'A string indicating the payment processor used for this order.',
				},
				totals: {
					type: 'object',
					description: 'An object describing various pricing totals.',
					properties: {
						subtotal: {
							type: 'object',
							description: 'The subtotal price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
						extras: {
							type: 'array',
							description:
								'An array of extra items, includes discounts, shipping, and taxes.',
							items: {
								type: 'object',
								description:
									'Extra order items, includes discounts, shipping, and taxes.',
								properties: {
									type: {
										type: 'string',
										description:
											'The type of extra item this is. One of: `discount`, `discount-shipping`, `shipping`, `tax`.',
									},
									name: {
										type: 'string',
										description:
											'A human-readable (but English) name for this extra charge.',
									},
									description: {
										type: 'string',
										description:
											'A human-readable (but English) description of this extra charge.',
									},
									price: {
										type: 'object',
										description: 'The price for the item.',
										properties: {
											unit: {
												type: 'string',
												description: 'The three-letter ISO currency code.',
											},
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
											},
											string: {
												type: 'string',
												description:
													'The user-facing string representation of the amount.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						total: {
							type: 'object',
							description: 'The total price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				downloadFiles: {
					type: 'array',
					description: 'An array of downloadable file objects.',
					items: {
						type: 'object',
						description: 'One downloadable file.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the downloadable file.',
							},
							name: {
								type: 'string',
								description: 'The user-facing name for the downloadable file.',
							},
							url: {
								type: 'string',
								description: 'The hosted location for the downloadable file.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'updateFormSubmission',
		label: 'Update a form submission',
		description: 'Updates hidden field values on a form submission.',
		context:
			'---\nname: updateFormSubmission\ndescription: Updates hidden field values on a form submission.\n---\n\nWraps `PATCH /sites/{site_id}/form_submissions/{form_submission_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/reference/forms/form-submissions/update-submission)) and returns the raw response body.\n\n- Uses the site-scoped route documented in Webflow\'s current reference (the beta reference page still lists the older `PATCH /form_submissions/{form_submission_id}`; both work under the `/beta` base). The older route — still used by the app\'s "Update a Form Submission" module — is flagged with a `deprecation: 1777747200` response header (2 May 2026) and a lower rate limit (60 instead of 150 requests per minute). `site_id` is the `siteId` returned on every submission.\n- Read the submission first with `getFormSubmission`: the keys of its `formResponse` are the field names to use in `formSubmissionData`. Only hidden form fields can be modified; visible submitted values are read-only, and keys that do not match a hidden field are silently ignored (the call still returns `200`). The key/value entries are sent as a `formSubmissionData` object.\n- Required scope: `forms:write`.\n',
		accounts: { webflow2: { scope: ['forms:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for the site the submission belongs to (`siteId` on the submission). Use the `listSites` endpoint to find it.',
				},
				form_submission_id: {
					type: 'string',
					description:
						'Unique identifier for a form submission. Use the `listFormSubmissions` endpoint to find it.',
				},
				formSubmissionData: {
					type: 'array',
					description:
						'Hidden fields to set on the submission, one entry per field. Only fields defined as **hidden** in the form schema (see `getForm`) can be updated.',
					items: {
						type: 'object',
						description: 'A hidden form field and its new value.',
						properties: {
							key: {
								type: 'string',
								description: 'Name of the hidden field as defined on the form.',
							},
							value: {
								type: 'string',
								description: 'The value to store in the hidden field.',
							},
						},
						required: ['key', 'value'],
					},
				},
			},
			required: ['site_id', 'form_submission_id', 'formSubmissionData'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The unique ID of the Form submission.' },
				formId: {
					type: 'string',
					description: 'The ID of the form the submission belongs to.',
				},
				displayName: {
					type: 'string',
					description: 'The Form name displayed on the site.',
				},
				siteId: {
					type: 'string',
					description: 'The unique ID of the Site the Form belongs to.',
				},
				workspaceId: {
					type: 'string',
					description: 'The unique ID of the Workspace the Site belongs to.',
				},
				dateSubmitted: {
					type: 'string',
					description: 'Date that the Form was submitted on.',
				},
				formResponse: {
					type: 'object',
					description: 'The data submitted in the Form.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				localeId: {
					type: 'string',
					description:
						'The ID of the locale the form was submitted from. `null` for primary-locale submissions or sites without localization.',
				},
				pageId: {
					type: 'string',
					description: 'The unique ID for the Page on which the Form is placed.',
				},
				publishedPath: {
					type: 'string',
					description: 'Relative path of the published page URL.',
				},
				formElementId: {
					type: 'string',
					description: 'The unique ID of the Form element.',
				},
				componentElementId: {
					type: 'string',
					description:
						'Element ID of the component instance containing the form; `null` when the form is not inside a component. Returned by the API but not described in the vendor reference.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'updateItem',
		label: 'Update an item',
		description: 'Updates a staged item in a CMS collection.',
		context:
			'---\nname: updateItem\ndescription: Updates a staged item in a CMS collection.\n---\n\nWraps `PATCH /collections/{collection_id}/items/{item_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/update-item)) and returns the raw response body.\n\n- Wraps the single-item `PATCH /collections/{collection_id}/items/{item_id}` call ([Update Item](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/update-item)) used by the app\'s "Update an Item" module. Webflow also documents a bulk form [Update Items](https://developers.webflow.com/data/v2.0.0-beta/reference/cms/collection-items/staged-items/update-items) (`PATCH /collections/{collection_id}/items` with an `items[]` array), available through `arbitraryCall`.\n- Partial update: `isArchived`, `isDraft` and `fieldData` are independent and all optional — omitted inputs (and an empty `fieldData` object) are left out of the request body, so a flag-only change such as `{ "isArchived": true }` needs no `fieldData`. Inside `fieldData` only the slugs present are changed; read the item first with `getItem` if you need the current values.\n- Setting `isDraft: true` on a published item creates "changes in draft"; it never unpublishes. Updates are staged until the item is published again with `publishItems`.\n- `fieldData` is an object keyed by the collection field slugs (see `getCollection` → `fields[].slug`). `name` and `slug` are the built-in fields; the value format per field type is documented in [Field Types & Item Values](https://developers.webflow.com/data/v2.0.0-beta/reference/field-types-item-values).\n- Field slugs differ from display names, so resolve them first. Example — mark a blog post as featured and set its summary: `getCollection` on the blog collection (find it with `listCollections`) to read `fields[]` (a "Post Summary" field has slug `post-summary`, a "Featured?" Switch has slug `featured`), then `fieldData: { "post-summary": "Short teaser", "featured": true }`.\n- Required scope: `cms:write`.\n',
		accounts: { webflow2: { scope: ['cms:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				collection_id: {
					type: 'string',
					description:
						'Unique identifier for a CMS collection. Use the `listCollections` endpoint to find it.',
				},
				item_id: {
					type: 'string',
					description:
						'Unique identifier for a collection item. Use the `listItems` endpoint to find it.',
				},
				cmsLocaleId: {
					type: 'string',
					description:
						'Identifier of the CMS locale the item belongs to. Omit it for the primary locale; locale identifiers are listed as `cmsLocaleId` in the `getSite` response.',
				},
				isArchived: {
					type: 'boolean',
					description: 'Boolean determining if the Item is set to archived.',
				},
				isDraft: {
					type: 'boolean',
					description:
						"Sets the item's draft state. The resulting status depends on whether the item has been published before: **Item that has never been published:** `isDraft: true` results in a `Draft` status. **Already-published item:** `isDraft: true` results in a `Changes in draft` status. The live item stays published, and your changes are held back until you publish them. Setting `isDraft: true` never unpublishes an item. To remove an item from the live site, use [Unpublish Live Collection Items](https://developers.webflow.com/data/reference/cms/collection-items/live-items/delete-items-live).",
				},
				fieldData: {
					description:
						'Object of field values keyed by the collection field slug, e.g. `{ "name": "Mostly Harmless", "slug": "mostly-harmless" }`. Use `getCollection` to list the field slugs and types; the accepted value format per type is in the [Field Types & Item Values](https://developers.webflow.com/data/v2.0.0-beta/reference/field-types-item-values) reference. Omit it to change only `isArchived` / `isDraft`; only the slugs present in the object are changed.',
				},
			},
			required: ['collection_id', 'item_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the Item.' },
				cmsLocaleId: {
					type: 'string',
					description: 'Identifier for the locale of the CMS item.',
				},
				lastPublished: {
					type: 'string',
					description: 'The date the item was last published.',
				},
				lastUpdated: { type: 'string', description: 'The date the item was last updated.' },
				createdOn: { type: 'string', description: 'The date the item was created.' },
				isArchived: {
					type: 'boolean',
					description:
						'Boolean determining if the Item is set to archived. Defaults to `false`.',
				},
				isDraft: {
					type: 'boolean',
					description:
						'Whether the item is in a draft state. Together with `lastPublished`, this determines the status shown in the Webflow UI. See [Publishing with the CMS API](https://developers.webflow.com/data/docs/working-with-the-cms/publishing) for the full mapping.',
				},
				fieldData: {
					type: 'object',
					description:
						'Field values keyed by the collection field slug. Standard fields are listed; custom fields of the collection are returned under their slug as well.',
					properties: {
						name: { type: 'string', description: 'Name of the Item.' },
						slug: {
							type: 'string',
							description:
								'URL structure of the Item in your site. Note: Updates to an item slug will break all links referencing the old slug.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'updateItemInventory',
		label: 'Update item inventory',
		description: 'Sets or adjusts the inventory level of a SKU item.',
		context:
			'---\nname: updateItemInventory\ndescription: Sets or adjusts the inventory level of a SKU item.\n---\n\nWraps `PATCH /collections/{collection_id}/items/{item_id}/inventory` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/inventory/update)) and returns the raw response body.\n\n- Read the current inventory first with `getItemInventory`: `inventoryType` is required on every call, so send the current value back unless you intend to change the tracking mode, and use the returned `quantity` to compute the value you want.\n- Not safe to retry blindly (`idempotentHint` is `false`): `updateQuantity` is a delta applied on every call — the same request sent twice adds twice. Only `quantity` (absolute) is safe to repeat; prefer it whenever a retry is possible, computing the target from the `getItemInventory` read.\n- Send one of `quantity` / `updateQuantity`. If both are sent, `quantity` wins and `updateQuantity` is silently ignored. `updateQuantity` has no floor and can push the stock negative (e.g. 3 + (-10) → -7), whereas a negative `quantity` is rejected with `400 Value (quantity) should be >= 0`.\n- With `inventoryType: infinite` a sent `quantity` / `updateQuantity` is discarded and the inventory reads back as `quantity: 0`.\n- Required scope: `ecommerce:write`.\n',
		accounts: { webflow2: { scope: ['ecommerce:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				collection_id: {
					type: 'string',
					description:
						'Unique identifier of the SKUs collection of the site (the e-commerce collection whose `slug` is `sku`; see `listCollections`).',
				},
				item_id: {
					type: 'string',
					description:
						'Unique identifier of the SKU item. SKU IDs are returned in `skus[].id` by `getProduct` / `listProducts`.',
				},
				inventoryType: {
					type: 'string',
					description:
						'Inventory tracking mode: `finite` tracks a numeric stock level, `infinite` disables stock tracking.',
					enum: ['infinite', 'finite'],
				},
				updateQuantity: {
					type: 'number',
					description:
						'Delta added to the currently stored quantity; can be negative. Applied on every call, so repeating the same request changes the stock again (not safe to retry). There is no floor — the stock can become negative. Ignored when `quantity` is also sent or when `inventoryType` is `infinite`.',
				},
				quantity: {
					type: 'number',
					description:
						'Absolute stock level to set; must be `>= 0` (negative values are rejected with `400`). Safe to repeat. Takes precedence over `updateQuantity` when both are sent; discarded when `inventoryType` is `infinite`.',
				},
			},
			required: ['collection_id', 'item_id', 'inventoryType'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for a SKU item.' },
				quantity: {
					type: 'number',
					description:
						'Total quantity of items remaining in inventory (if inventoryType is finite).',
				},
				inventoryType: {
					type: 'string',
					description: 'Inventory type. One of: `infinite`, `finite`.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'updateOrder',
		label: 'Update an order',
		description: 'Updates the comment and shipping details of an order.',
		context:
			'---\nname: updateOrder\ndescription: Updates the comment and shipping details of an order.\n---\n\nWraps `PATCH /sites/{site_id}/orders/{order_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/orders/update)) and returns the raw response body.\n\n- Read the order first with `getOrder` if you need the current values. The update is partial: only the fields you send are changed and omitted fields keep their current values. A field cannot be cleared through this endpoint because empty values are not sent.\n- Only `comment`, `shippingProvider`, `shippingTracking` (free text) and `shippingTrackingURL` (a URL) are editable; they are for your records and are not used by Webflow. Any subset can be sent.\n- Required scope: `ecommerce:write`.',
		accounts: { webflow2: { scope: ['ecommerce:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				order_id: {
					type: 'string',
					description:
						'Unique identifier for an order. Use the `listOrders` endpoint to find it.',
				},
				comment: { type: 'string', description: 'Arbitrary data for your records.' },
				shippingProvider: {
					type: 'string',
					description: 'Company or method used to ship order.',
				},
				shippingTracking: {
					type: 'string',
					description: 'Tracking number for order shipment.',
				},
				shippingTrackingURL: {
					type: 'string',
					description: 'URL to track order shipment.',
				},
			},
			required: ['site_id', 'order_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				orderId: {
					type: 'string',
					description:
						'The order ID. Will usually be 6 hex characters, but can also be 9 hex characters if the site has a very large number of Orders. Randomly assigned.',
				},
				status: {
					type: 'string',
					description:
						'The status of the Order. One of: `pending`, `unfulfilled`, `fulfilled`, `disputed`, `dispute-lost`, `refunded`.',
				},
				comment: {
					type: 'string',
					description:
						'A comment string for this Order, which is editable by API user (not used by Webflow).',
				},
				orderComment: {
					type: 'string',
					description: 'A comment that the customer left when making their Order.',
				},
				acceptedOn: {
					type: 'string',
					description: 'The ISO8601 timestamp that an Order was placed.',
				},
				fulfilledOn: {
					type: 'string',
					description:
						"When an Order is marked as 'fulfilled', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null.",
				},
				refundedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'refunded', this field represents the timestamp of the refund in ISO8601 format. Otherwise, it is null.",
				},
				disputedOn: {
					type: 'string',
					description:
						"When an Order is marked as 'disputed', this field represents the timestamp of the dispute in ISO8601 format. Otherwise, it is null.",
				},
				disputeUpdatedOn: {
					type: 'string',
					description:
						'If an Order has been disputed by the customer, this key will be set to the ISO8601 timestamp of the last update received. If the Order is not disputed, the key will be null.',
				},
				disputeLastStatus: {
					type: 'string',
					description:
						"If an order was disputed by the customer, then this key will be set with the [dispute's status](https://stripe.com/docs/api#dispute_object-status). One of: `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, `lost`.",
				},
				customerPaid: {
					type: 'object',
					description: 'The total paid by the customer.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				netAmount: {
					type: 'object',
					description: 'The net amount after application fees.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				applicationFee: {
					type: 'object',
					description: 'The application fee assessed by the platform.',
					properties: {
						unit: {
							type: 'string',
							description: 'The three-letter ISO currency code.',
						},
						value: {
							type: 'number',
							description:
								'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
						},
						string: {
							type: 'string',
							description: 'The user-facing string representation of the amount.',
						},
					},
					required: [],
				},
				allAddresses: {
					type: 'array',
					description: 'All addresses provided by the customer during the ordering flow.',
					items: {
						type: 'object',
						description: 'A customer address.',
						properties: {
							type: {
								type: 'string',
								description:
									'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
							},
							japanType: {
								type: 'string',
								description:
									'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
							},
							addressee: {
								type: 'string',
								description: 'Display name on the address.',
							},
							line1: {
								type: 'string',
								description: 'The first line of the address.',
							},
							line2: {
								type: 'string',
								description: 'The second line of the address.',
							},
							city: { type: 'string', description: 'The city of the address.' },
							state: {
								type: 'string',
								description: 'The state or province of the address.',
							},
							country: { type: 'string', description: 'The country of the address.' },
							postalCode: {
								type: 'string',
								description: 'The postal code of the address.',
							},
						},
						required: [],
					},
				},
				shippingAddress: {
					type: 'object',
					description: 'The shipping address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				billingAddress: {
					type: 'object',
					description: 'The billing address.',
					properties: {
						type: {
							type: 'string',
							description:
								'The type of the order address (billing or shipping). One of: `shipping`, `billing`.',
						},
						japanType: {
							type: 'string',
							description:
								'Represents a Japan-only address format. This field will only appear on orders placed from Japan. One of: `kana`, `kanji`.',
						},
						addressee: { type: 'string', description: 'Display name on the address.' },
						line1: { type: 'string', description: 'The first line of the address.' },
						line2: { type: 'string', description: 'The second line of the address.' },
						city: { type: 'string', description: 'The city of the address.' },
						state: {
							type: 'string',
							description: 'The state or province of the address.',
						},
						country: { type: 'string', description: 'The country of the address.' },
						postalCode: {
							type: 'string',
							description: 'The postal code of the address.',
						},
					},
					required: [],
				},
				shippingProvider: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping provider used (not used by Webflow).',
				},
				shippingTracking: {
					type: 'string',
					description:
						'A string editable by the API user to note the shipping tracking number for the order (not used by Webflow).',
				},
				shippingTrackingURL: { type: 'string', description: 'The shipping tracking URL.' },
				customerInfo: {
					type: 'object',
					description: 'An object with the keys `fullName` and `email`.',
					properties: {
						fullName: { type: 'string', description: 'The full name of the Customer.' },
						email: { type: 'string', description: "The Customer's email address." },
					},
					required: [],
				},
				purchasedItems: {
					type: 'array',
					description: 'An array of all things that the Customer purchased.',
					items: {
						type: 'object',
						description: 'An Item that was purchased.',
						properties: {
							count: { type: 'number', description: 'Number of Item purchased.' },
							rowTotal: {
								type: 'object',
								description: 'The total for the row.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							productId: {
								type: 'string',
								description: 'The unique identifier for the Product.',
							},
							productName: {
								type: 'string',
								description: 'User-facing name of the Product.',
							},
							productSlug: { type: 'string', description: 'Slug for the Product.' },
							variantId: {
								type: 'string',
								description: 'Identifier for the Product Variant (SKU).',
							},
							variantName: {
								type: 'string',
								description: 'User-facing name of the Product Variant (SKU).',
							},
							variantSlug: {
								type: 'string',
								description: 'Slug for the Product Variant (SKU).',
							},
							variantSKU: {
								type: 'string',
								description:
									'The user-defined custom SKU of the Product Variant (SKU).',
							},
							variantImage: {
								type: 'object',
								description: 'The variant image of the purchased item.',
								properties: {
									url: {
										type: 'string',
										description: "The hosted location for the Variant's image.",
									},
									file: {
										type: 'object',
										description: 'The file of the variant image.',
										properties: {
											size: {
												type: 'number',
												description: 'The image size in bytes.',
											},
											originalFileName: {
												type: 'string',
												description: 'The original name of the image.',
											},
											createdOn: {
												type: 'string',
												description: 'The creation timestamp of the image.',
											},
											contentType: {
												type: 'string',
												description: 'The MIME type of the image.',
											},
											width: {
												type: 'number',
												description: 'The image width in pixels.',
											},
											height: {
												type: 'number',
												description: 'The image height in pixels.',
											},
											variants: {
												type: 'array',
												description: 'Variants of the supplied image.',
												items: {
													type: 'object',
													description:
														'A resized rendition of the image.',
													properties: {
														url: {
															type: 'string',
															description:
																"The hosted location for the Variant's image.",
														},
														originalFileName: {
															type: 'string',
															description:
																'The original file name of the variant.',
														},
														size: {
															type: 'number',
															description: 'The image size in bytes.',
														},
														width: {
															type: 'number',
															description:
																'The image width in pixels.',
														},
														height: {
															type: 'number',
															description:
																'The image height in pixels.',
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
							variantPrice: {
								type: 'object',
								description: 'The price corresponding to the variant.',
								properties: {
									unit: {
										type: 'string',
										description: 'The three-letter ISO currency code.',
									},
									value: {
										type: 'number',
										description:
											'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
									},
									string: {
										type: 'string',
										description:
											'The user-facing string representation of the amount.',
									},
								},
								required: [],
							},
							weight: {
								type: 'number',
								description:
									'The physical weight of the variant if provided, or null.',
							},
							width: {
								type: 'number',
								description:
									'The physical width of the variant if provided, or null.',
							},
							height: {
								type: 'number',
								description:
									'The physical height of the variant if provided, or null.',
							},
							length: {
								type: 'number',
								description:
									'The physical length of the variant if provided, or null.',
							},
						},
						required: [],
					},
				},
				purchasedItemsCount: {
					type: 'number',
					description: "The sum of all 'count' fields in 'purchasedItems'.",
				},
				stripeDetails: {
					type: 'object',
					description:
						'An object with various Stripe IDs, useful for linking into the Stripe dashboard.',
					properties: {
						subscriptionId: {
							type: 'string',
							description: 'Stripe-generated identifier for the Subscription.',
						},
						paymentMethod: {
							type: 'string',
							description: 'Stripe-generated identifier for the PaymentMethod used.',
						},
						paymentIntentId: {
							type: 'string',
							description:
								'Stripe-generated identifier for the PaymentIntent, or null.',
						},
						customerId: {
							type: 'string',
							description: 'Stripe-generated customer identifier, or null.',
						},
						chargeId: {
							type: 'string',
							description: 'Stripe-generated charge identifier, or null.',
						},
						disputeId: {
							type: 'string',
							description: 'Stripe-generated dispute identifier, or null.',
						},
						refundId: {
							type: 'string',
							description: 'Stripe-generated refund identifier, or null.',
						},
						refundReason: {
							type: 'string',
							description: 'Stripe-generated refund reason, or null.',
						},
					},
					required: [],
				},
				stripeCard: {
					type: 'object',
					description:
						'Details on the card used to pay for this order, if the order was finalized with Stripe.',
					properties: {
						last4: {
							type: 'string',
							description: 'The last 4 digits on the card as a string.',
						},
						brand: {
							type: 'string',
							description:
								"The card's brand (i.e. the credit card network). One of: `Visa`, `American Express`, `MasterCard`, `Discover`, `JCB`, `Diners Club`, `Unknown`.",
						},
						ownerName: { type: 'string', description: 'The name on the card.' },
						expires: {
							type: 'object',
							description: "The card's expiration date.",
							properties: {
								year: {
									type: 'number',
									description: 'Year that the card expires.',
								},
								month: {
									type: 'number',
									description: 'Month that the card expires.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				paypalDetails: {
					type: 'object',
					description: 'PayPal transaction details when the order was paid with PayPal.',
					properties: {
						orderId: { type: 'string', description: 'PayPal order identifier.' },
						payerId: { type: 'string', description: 'PayPal payer identifier.' },
						captureId: { type: 'string', description: 'PayPal capture identifier.' },
						refundId: { type: 'string', description: 'PayPal refund identifier.' },
						refundReason: {
							type: 'string',
							description: 'PayPal-issued reason for the refund.',
						},
						disputeId: { type: 'string', description: 'PayPal dispute identifier.' },
					},
					required: [],
				},
				customData: {
					type: 'array',
					description:
						'An array of additional inputs for custom order data gathering. Each object in the array represents an input with a name, and a textInput, textArea, or checkbox value.',
					items: {
						type: 'object',
						description: 'One custom-data entry.',
						properties: {},
						required: [],
						additionalProperties: true,
					},
				},
				metadata: {
					type: 'object',
					description: 'Additional metadata of the order.',
					properties: {
						isBuyNow: {
							type: 'boolean',
							description: 'Whether the order was placed through the Buy Now button.',
						},
					},
					required: [],
				},
				isCustomerDeleted: {
					type: 'boolean',
					description:
						'A boolean indicating whether the customer has been deleted from the site.',
				},
				isShippingRequired: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that require shipping.',
				},
				hasDownloads: {
					type: 'boolean',
					description:
						'A boolean indicating whether the order contains one or more purchased items that are downloadable.',
				},
				paymentProcessor: {
					type: 'string',
					description: 'A string indicating the payment processor used for this order.',
				},
				totals: {
					type: 'object',
					description: 'An object describing various pricing totals.',
					properties: {
						subtotal: {
							type: 'object',
							description: 'The subtotal price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
						extras: {
							type: 'array',
							description:
								'An array of extra items, includes discounts, shipping, and taxes.',
							items: {
								type: 'object',
								description:
									'Extra order items, includes discounts, shipping, and taxes.',
								properties: {
									type: {
										type: 'string',
										description:
											'The type of extra item this is. One of: `discount`, `discount-shipping`, `shipping`, `tax`.',
									},
									name: {
										type: 'string',
										description:
											'A human-readable (but English) name for this extra charge.',
									},
									description: {
										type: 'string',
										description:
											'A human-readable (but English) description of this extra charge.',
									},
									price: {
										type: 'object',
										description: 'The price for the item.',
										properties: {
											unit: {
												type: 'string',
												description: 'The three-letter ISO currency code.',
											},
											value: {
												type: 'number',
												description:
													'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
											},
											string: {
												type: 'string',
												description:
													'The user-facing string representation of the amount.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
						total: {
							type: 'object',
							description: 'The total price.',
							properties: {
								unit: {
									type: 'string',
									description: 'The three-letter ISO currency code.',
								},
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `5561` with `unit: "USD"` is 55.61 USD, as in Webflow\'s own order examples (`"string": "$ 55.61 USD"`). `string` holds the formatted amount.',
								},
								string: {
									type: 'string',
									description:
										'The user-facing string representation of the amount.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				downloadFiles: {
					type: 'array',
					description: 'An array of downloadable file objects.',
					items: {
						type: 'object',
						description: 'One downloadable file.',
						properties: {
							id: {
								type: 'string',
								description: 'The unique identifier for the downloadable file.',
							},
							name: {
								type: 'string',
								description: 'The user-facing name for the downloadable file.',
							},
							url: {
								type: 'string',
								description: 'The hosted location for the downloadable file.',
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
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'updateProduct',
		label: 'Update a product',
		description: 'Updates a product and optionally its default SKU.',
		context:
			"---\nname: updateProduct\ndescription: Updates a product and optionally its default SKU.\n---\n\nWraps `PATCH /sites/{site_id}/products/{product_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/products-sk-us/update)) and returns the raw response body.\n\n- Partial update with one exception: `fieldData` keys are merged (only the slugs you send change), but Webflow resets `product.isArchived` to `false` whenever it is omitted — read the product first (`getProduct`) and always send the current `isArchived`, otherwise renaming an archived product un-archives it. Omitted optional inputs are left out of the request body.\n- The product's draft state cannot be changed through this call (`isDraft` in the body is ignored, observed on unpublished products) and is therefore not an input here; to change it, use `updateItem` on the site's Products collection (products are CMS items), which honours `isDraft`.\n- Updating a product through the API sets its type to `Advanced` in the Designer. The response is the updated product item only (no SKUs). SKUs carry no `isArchived` / `isDraft` flags.\n- Products and SKUs are CMS items of the e-commerce Products and SKUs collections; `fieldData` keys are the collection field slugs (`name`, `slug`, `description`, `sku-properties`, `price`, …). Keys containing hyphens are sent exactly as named.\n- Required scope: `ecommerce:write`.\n",
		accounts: { webflow2: { scope: ['ecommerce:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				product_id: {
					type: 'string',
					description:
						'Unique identifier for a product. Use the `listProducts` endpoint to find it.',
				},
				publishStatus: {
					type: 'string',
					description:
						'Indicate whether your Product should be set as "staging" or "live". Defaults to `staging`.',
					default: '',
					enum: ['', 'staging', 'live'],
				},
				product: {
					type: 'object',
					description:
						'The product to write. Standard product fields go under `fieldData`; custom fields of the product collection can be added under their field slug.',
					properties: {
						isArchived: {
							type: 'boolean',
							description:
								'Boolean determining if the Product is set to archived. Webflow resets it to `false` whenever it is omitted from `product`, so read the product first (`getProduct`) and pass the current value with every update — renaming an archived product without it un-archives it.',
						},
						fieldData: {
							type: 'object',
							description:
								'Contains content-specific details for a product, covering both standard (e.g., title, description) and custom fields tailored to the product setup.',
							properties: {
								name: { type: 'string', description: 'Name of the Product.' },
								slug: {
									type: 'string',
									description: 'URL structure of the Product in your site.',
								},
								description: {
									type: 'string',
									description: 'A description of your product.',
								},
								shippable: {
									type: 'boolean',
									description: 'Boolean determining if the Product is shippable.',
								},
								'sku-properties': {
									type: 'array',
									description: 'Variant types to include in SKUs.',
									items: {
										type: 'object',
										description: 'A variant/option type for a SKU.',
										properties: {
											id: {
												type: 'string',
												description:
													'Identifier of the option, chosen by the caller (e.g. `color`); SKUs reference it as the key in `sku-values`. Required for every `sku-properties` entry.',
											},
											name: {
												type: 'string',
												description:
													'Name of the option as shown to shoppers (e.g. `Color`). Required for every `sku-properties` entry.',
											},
											enum: {
												type: 'array',
												description:
													'The values of the option (e.g. Red, Blue). Required for every `sku-properties` entry.',
												items: {
													type: 'object',
													description:
														'Enumerated Product variants/Options for the SKU.',
													properties: {
														id: {
															type: 'string',
															description:
																'Identifier of the value, chosen by the caller (e.g. `blue`); SKUs reference it as the value in `sku-values`. Required for every `enum` entry.',
														},
														name: {
															type: 'string',
															description:
																'Name of the value as shown to shoppers (e.g. `Blue`). Required for every `enum` entry.',
														},
														slug: {
															type: 'string',
															description:
																'Slug of the value in the site URL structure (e.g. `blue`). Required for every `enum` entry.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
								},
								category: {
									type: 'array',
									description: 'The category your product belongs to.',
									items: {
										type: 'string',
										description: 'ID of a category item.',
									},
								},
								'tax-category': {
									type: 'string',
									description: 'Product tax class.',
									default: '',
									enum: [
										'',
										'standard-taxable',
										'standard-exempt',
										'books-religious',
										'books-textbook',
										'clothing',
										'clothing-swimwear',
										'digital-goods',
										'digital-service',
										'drugs-non-prescription',
										'drugs-prescription',
										'food-bottled-water',
										'food-candy',
										'food-groceries',
										'food-prepared',
										'food-soda',
										'food-supplements',
										'magazine-individual',
										'magazine-subscription',
										'service-admission',
										'service-advertising',
										'service-dry-cleaning',
										'service-hairdressing',
										'service-installation',
										'service-miscellaneous',
										'service-parking',
										'service-printing',
										'service-professional',
										'service-repair',
										'service-training',
									],
								},
								'default-sku': {
									type: 'string',
									description: 'The default SKU associated with this product.',
								},
								'ec-product-type': {
									type: 'string',
									description:
										'Product type. One of Physical, Digital, Service or Advanced (see [product types](https://university.webflow.com/lesson/add-and-manage-products-and-categories?topics=ecommerce#how-to-understand-product-types)).',
									default: '',
									enum: [
										'',
										'ff42fee0113744f693a764e3431a9cc2',
										'f22027db68002190aef89a4a2b7ac8a1',
										'c599e43b1a1c34d5a323aedf75d3adf6',
										'b6ccc1830db4b1babeb06a9ac5f6dd76',
									],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				sku: {
					type: 'object',
					description:
						"The product's default SKU to update (optional). Standard SKU fields go under `fieldData`; custom fields of the SKU collection can be added under their field slug.",
					properties: {
						fieldData: {
							type: 'object',
							description: 'Standard and Custom fields for a SKU.',
							properties: {
								'sku-values': {
									description:
										'Mapping between SKU property IDs and SKU value IDs that identifies this variant, e.g. `{ "<colorPropertyId>": "<blueValueId>" }`. Omit for the default SKU of a product without variants.',
								},
								name: {
									type: 'string',
									description:
										'Name of the SKU (variant). Omit to keep the current value.',
								},
								slug: {
									type: 'string',
									description:
										'URL structure of the SKU in your site. Omit to keep the current value.',
								},
								price: {
									type: 'object',
									description:
										'Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD. Omit to keep the current value.',
									properties: {
										value: {
											type: 'number',
											description:
												'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										},
										unit: {
											type: 'string',
											description:
												'ISO 4217 currency code of the amount, e.g. `USD`.',
										},
										currency: {
											type: 'string',
											description:
												'Same value as `unit`; optional — Webflow returns only `unit`.',
										},
									},
									required: [],
								},
								'compare-at-price': {
									type: 'object',
									description:
										'Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.',
									properties: {
										value: {
											type: 'number',
											description:
												'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										},
										unit: {
											type: 'string',
											description:
												'ISO 4217 currency code of the amount, e.g. `USD`.',
										},
									},
									required: [],
								},
								'ec-sku-billing-method': {
									type: 'string',
									description:
										'[Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU.',
									default: '',
									enum: ['', 'one-time', 'subscription'],
								},
								'ec-sku-subscription-plan': {
									type: 'object',
									description:
										'[Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.',
									properties: {
										interval: {
											type: 'string',
											description: 'Interval of subscription renewal.',
											default: '',
											enum: ['', 'day', 'week', 'month', 'year'],
										},
										frequency: {
											type: 'number',
											description:
												'Frequency of billing within the interval.',
										},
										trial: {
											type: 'number',
											description: 'Number of days of a trial.',
										},
										plans: {
											type: 'array',
											description: 'The plans of the subscription plan.',
											items: {
												type: 'object',
												description: 'One subscription plan entry.',
												properties: {
													platform: {
														type: 'string',
														description:
															'The platform of the subscription plan.',
														default: '',
														enum: ['', 'stripe'],
													},
													id: {
														type: 'string',
														description:
															'The unique identifier of the plan.',
													},
													status: {
														type: 'string',
														description: 'The status of the plan.',
														default: '',
														enum: [
															'',
															'active',
															'inactive',
															'canceled',
														],
													},
												},
												required: [],
											},
										},
									},
									required: [],
								},
								'main-image': {
									type: 'string',
									description:
										'URL of the main image of the SKU. Webflow stores a copy and returns it as an object (`fileId`, `url`, `alt`).',
								},
								sku: {
									type: 'string',
									description:
										'Your own SKU code for this variant (free text, shown in the Webflow dashboard).',
								},
								'sku-properties': {
									type: 'array',
									description:
										'Options are declared on the product (`product.fieldData.sku-properties`), not per SKU — leave this out and reference them through `sku-values`. Present in the vendor schema, never returned for SKUs.',
									items: {
										type: 'object',
										description: 'A variant/option type for a SKU.',
										properties: {
											id: {
												type: 'string',
												description:
													'Identifier of the option, chosen by the caller (e.g. `color`); SKUs reference it as the key in `sku-values`. Required for every `sku-properties` entry.',
											},
											name: {
												type: 'string',
												description:
													'Name of the option as shown to shoppers (e.g. `Color`). Required for every `sku-properties` entry.',
											},
											enum: {
												type: 'array',
												description:
													'The values of the option (e.g. Red, Blue). Required for every `sku-properties` entry.',
												items: {
													type: 'object',
													description:
														'Enumerated Product variants/Options for the SKU.',
													properties: {
														id: {
															type: 'string',
															description:
																'Identifier of the value, chosen by the caller (e.g. `blue`); SKUs reference it as the value in `sku-values`. Required for every `enum` entry.',
														},
														name: {
															type: 'string',
															description:
																'Name of the value as shown to shoppers (e.g. `Blue`). Required for every `enum` entry.',
														},
														slug: {
															type: 'string',
															description:
																'Slug of the value in the site URL structure (e.g. `blue`). Required for every `enum` entry.',
														},
													},
													required: [],
												},
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
			required: ['site_id', 'product_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the Product.' },
				cmsLocaleId: {
					type: 'string',
					description: 'Identifier for the locale of the CMS item.',
				},
				lastPublished: {
					type: 'string',
					description: 'The date the Product was last published.',
				},
				lastUpdated: {
					type: 'string',
					description: 'The date the Product was last updated.',
				},
				createdOn: { type: 'string', description: 'The date the Product was created.' },
				isArchived: {
					type: 'boolean',
					description:
						'Whether the product is archived. Products created without `isArchived` are not archived (`false`).',
				},
				isDraft: {
					type: 'boolean',
					description:
						'Whether the product is a draft. Products created without `isDraft` are not drafts (`false`).',
				},
				fieldData: {
					type: 'object',
					description:
						'Field values of the product keyed by the Products collection field slug. Standard fields are listed; custom fields added to the Products collection are returned under their slug as well and are not declared here.',
					properties: {
						name: { type: 'string', description: 'Name of the Product.' },
						slug: {
							type: 'string',
							description: 'URL structure of the Product in your site.',
						},
						description: {
							type: 'string',
							description: 'A description of your product.',
						},
						shippable: {
							type: 'boolean',
							description: 'Boolean determining if the Product is shippable.',
						},
						'sku-properties': {
							type: 'array',
							description: 'Variant types to include in SKUs.',
							items: {
								type: 'object',
								description: 'A variant/option type for a SKU.',
								properties: {
									id: {
										type: 'string',
										description:
											'Unique identifier for a collection of Product Variants.',
									},
									name: {
										type: 'string',
										description: 'Name of the collection of Product Variants.',
									},
									enum: {
										type: 'array',
										description:
											'The individual Product variants that are contained within the collection.',
										items: {
											type: 'object',
											description:
												'Enumerated Product variants/Options for the SKU.',
											properties: {
												id: {
													type: 'string',
													description:
														'Unique identifier for a Product variant/Option.',
												},
												name: {
													type: 'string',
													description:
														'Name of the Product variant/Option.',
												},
												slug: {
													type: 'string',
													description:
														'Slug for the Product variant/Option in the Site URL structure.',
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
						},
						category: {
							type: 'array',
							description: 'The category your product belongs to.',
							items: { type: 'string', description: 'ID of a category item.' },
						},
						'tax-category': {
							type: 'string',
							description:
								'Product tax class. One of: `standard-taxable`, `standard-exempt`, `books-religious`, `books-textbook`, `clothing`, `clothing-swimwear`, `digital-goods`, `digital-service`, `drugs-non-prescription`, `drugs-prescription`, `food-bottled-water`, `food-candy`, `food-groceries`, `food-prepared`, `food-soda`, `food-supplements`, `magazine-individual`, `magazine-subscription`, `service-admission`, `service-advertising`, `service-dry-cleaning`, `service-hairdressing`, `service-installation`, `service-miscellaneous`, `service-parking`, `service-printing`, `service-professional`, `service-repair`, `service-training`.',
						},
						'default-sku': {
							type: 'string',
							description: 'The default SKU associated with this product.',
						},
						'ec-product-type': {
							type: 'string',
							description:
								'[Product types.](https://university.webflow.com/lesson/add-and-manage-products-and-categories?topics=ecommerce#how-to-understand-product-types) Enums reflect the following values in order: Physical, Digital, Service, Membership, Advanced. One of: `ff42fee0113744f693a764e3431a9cc2`, `f22027db68002190aef89a4a2b7ac8a1`, `c599e43b1a1c34d5a323aedf75d3adf6`, `e348fd487d0102946c9179d2a94bb613`, `b6ccc1830db4b1babeb06a9ac5f6dd76`.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'webflow',
		appVersion: 2,
		endpointName: 'updateProductSku',
		label: 'Update a product SKU',
		description: 'Updates a SKU of a product.',
		context:
			'---\nname: updateProductSku\ndescription: Updates a SKU of a product.\n---\n\nWraps `PATCH /sites/{site_id}/products/{product_id}/skus/{sku_id}` of the Webflow Data API ([docs](https://developers.webflow.com/data/v2.0.0-beta/reference/ecommerce/products-sk-us/update-sku)) and returns the raw response body.\n\n- Read the current resource first (`getProduct`, whose `skus[]` holds the current SKU values) and send only the fields you intend to change; omitted optional fields are left out of the request body.\n- `price.value` is the amount in the smallest unit of the currency (`{ "value": 2500, "unit": "USD" }` is 25.00 USD).\n- The API requires `sku-values` to stay consistent with the product\'s `sku-properties`; include the current `sku-values` when updating a variant SKU.\n- Products and SKUs are CMS items of the e-commerce Products and SKUs collections; `fieldData` keys are the collection field slugs (`name`, `slug`, `description`, `sku-properties`, `price`, …). Keys containing hyphens are sent exactly as named.\n- Required scope: `ecommerce:write`.\n',
		accounts: { webflow2: { scope: ['ecommerce:write'] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				site_id: {
					type: 'string',
					description:
						'Unique identifier for a site. Use the `listSites` endpoint to find it.',
				},
				product_id: {
					type: 'string',
					description:
						'Unique identifier for a product. Use the `listProducts` endpoint to find it.',
				},
				sku_id: {
					type: 'string',
					description:
						'Unique identifier for a SKU. SKU IDs are returned in the `skus` array of the `getProduct` endpoint.',
				},
				publishStatus: {
					type: 'string',
					description:
						'Indicate whether the SKU should be set as "staging" or "live". Defaults to `staging`.',
					default: '',
					enum: ['', 'staging', 'live'],
				},
				sku: {
					type: 'object',
					description:
						'The SKU to write. Standard SKU fields go under `fieldData`; custom fields of the SKU collection can be added under their field slug.',
					properties: {
						fieldData: {
							type: 'object',
							description: 'Standard and Custom fields for a SKU.',
							properties: {
								'sku-values': {
									description:
										'Mapping between SKU property IDs and SKU value IDs that identifies this variant, e.g. `{ "<colorPropertyId>": "<blueValueId>" }`. Omit for the default SKU of a product without variants.',
								},
								name: {
									type: 'string',
									description:
										'Name of the SKU (variant). Omit to keep the current value.',
								},
								slug: {
									type: 'string',
									description:
										'URL structure of the SKU in your site. Omit to keep the current value.',
								},
								price: {
									type: 'object',
									description:
										'Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD. Omit to keep the current value.',
									properties: {
										value: {
											type: 'number',
											description:
												'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										},
										unit: {
											type: 'string',
											description:
												'ISO 4217 currency code of the amount, e.g. `USD`.',
										},
										currency: {
											type: 'string',
											description:
												'Same value as `unit`; optional — Webflow returns only `unit`.',
										},
									},
									required: [],
								},
								'compare-at-price': {
									type: 'object',
									description:
										'Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.',
									properties: {
										value: {
											type: 'number',
											description:
												'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
										},
										unit: {
											type: 'string',
											description:
												'ISO 4217 currency code of the amount, e.g. `USD`.',
										},
									},
									required: [],
								},
								'ec-sku-billing-method': {
									type: 'string',
									description:
										'[Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU.',
									default: '',
									enum: ['', 'one-time', 'subscription'],
								},
								'ec-sku-subscription-plan': {
									type: 'object',
									description:
										'[Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.',
									properties: {
										interval: {
											type: 'string',
											description: 'Interval of subscription renewal.',
											default: '',
											enum: ['', 'day', 'week', 'month', 'year'],
										},
										frequency: {
											type: 'number',
											description:
												'Frequency of billing within the interval.',
										},
										trial: {
											type: 'number',
											description: 'Number of days of a trial.',
										},
										plans: {
											type: 'array',
											description: 'The plans of the subscription plan.',
											items: {
												type: 'object',
												description: 'One subscription plan entry.',
												properties: {
													platform: {
														type: 'string',
														description:
															'The platform of the subscription plan.',
														default: '',
														enum: ['', 'stripe'],
													},
													id: {
														type: 'string',
														description:
															'The unique identifier of the plan.',
													},
													status: {
														type: 'string',
														description: 'The status of the plan.',
														default: '',
														enum: [
															'',
															'active',
															'inactive',
															'canceled',
														],
													},
												},
												required: [],
											},
										},
									},
									required: [],
								},
								'main-image': {
									type: 'string',
									description:
										'URL of the main image of the SKU. Webflow stores a copy and returns it as an object (`fileId`, `url`, `alt`).',
								},
								sku: {
									type: 'string',
									description:
										'Your own SKU code for this variant (free text, shown in the Webflow dashboard).',
								},
								'sku-properties': {
									type: 'array',
									description:
										'Options are declared on the product (`product.fieldData.sku-properties`), not per SKU — leave this out and reference them through `sku-values`. Present in the vendor schema, never returned for SKUs.',
									items: {
										type: 'object',
										description: 'A variant/option type for a SKU.',
										properties: {
											id: {
												type: 'string',
												description:
													'Identifier of the option, chosen by the caller (e.g. `color`); SKUs reference it as the key in `sku-values`. Required for every `sku-properties` entry.',
											},
											name: {
												type: 'string',
												description:
													'Name of the option as shown to shoppers (e.g. `Color`). Required for every `sku-properties` entry.',
											},
											enum: {
												type: 'array',
												description:
													'The values of the option (e.g. Red, Blue). Required for every `sku-properties` entry.',
												items: {
													type: 'object',
													description:
														'Enumerated Product variants/Options for the SKU.',
													properties: {
														id: {
															type: 'string',
															description:
																'Identifier of the value, chosen by the caller (e.g. `blue`); SKUs reference it as the value in `sku-values`. Required for every `enum` entry.',
														},
														name: {
															type: 'string',
															description:
																'Name of the value as shown to shoppers (e.g. `Blue`). Required for every `enum` entry.',
														},
														slug: {
															type: 'string',
															description:
																'Slug of the value in the site URL structure (e.g. `blue`). Required for every `enum` entry.',
														},
													},
													required: [],
												},
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
			required: ['site_id', 'product_id', 'sku_id', 'sku'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'Unique identifier for the SKU.' },
				cmsLocaleId: {
					type: 'string',
					description: 'Identifier for the locale of the CMS item.',
				},
				lastPublished: {
					type: 'string',
					description: 'The date the SKU was last published.',
				},
				lastUpdated: { type: 'string', description: 'The date the SKU was last updated.' },
				createdOn: { type: 'string', description: 'The date the SKU was created.' },
				fieldData: {
					type: 'object',
					description: 'Standard and Custom fields for a SKU.',
					properties: {
						'sku-values': {
							type: 'object',
							description:
								'A mapping between SKU properties and their values, represented as key-value pairs. Each key represents a SKU Property ID (e.g. "color") and maps to its corresponding SKU Value ID (e.g. "blue"). This structure defines the specific variant combination for a SKU.',
							properties: {},
							required: [],
							additionalProperties: true,
						},
						product: {
							type: 'string',
							description:
								'ID of the product item this SKU belongs to. Returned by the API but not described in the vendor reference.',
						},
						name: { type: 'string', description: 'Name of the SKU (variant).' },
						slug: {
							type: 'string',
							description: 'URL structure of the SKU in your site.',
						},
						price: {
							type: 'object',
							description:
								'Price of the SKU. Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
							properties: {
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
								},
								unit: {
									type: 'string',
									description:
										'ISO 4217 currency code of the amount, e.g. `USD`.',
								},
							},
							required: [],
						},
						'compare-at-price': {
							type: 'object',
							description:
								'Compare-at (strike-through) price of the SKU, in the smallest unit of the currency like `price`.',
							properties: {
								value: {
									type: 'number',
									description:
										'Amount in the smallest unit of the currency (cents for USD): `2500` = 25.00 USD.',
								},
								unit: {
									type: 'string',
									description:
										'ISO 4217 currency code of the amount, e.g. `USD`.',
								},
							},
							required: [],
						},
						'ec-sku-billing-method': {
							type: 'string',
							description:
								'[Billing method](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#billing-methods) for the SKU. One of: `one-time`, `subscription`.',
						},
						'ec-sku-subscription-plan': {
							type: 'object',
							description:
								'[Subscription plan](https://help.webflow.com/hc/en-us/articles/33961432087955-Add-and-manage-products-and-categories#subscription) for the SKU.',
							properties: {
								interval: {
									type: 'string',
									description:
										'Interval of subscription renewal. One of: `day`, `week`, `month`, `year`.',
								},
								frequency: {
									type: 'number',
									description: 'Frequency of billing within the interval.',
								},
								trial: {
									type: 'number',
									description: 'Number of days of a trial.',
								},
								plans: {
									type: 'array',
									description: 'The plans of the subscription plan.',
									items: {
										type: 'object',
										description: 'One subscription plan entry.',
										properties: {
											platform: {
												type: 'string',
												description:
													'The platform of the subscription plan. One of: `stripe`.',
											},
											id: {
												type: 'string',
												description: 'The unique identifier of the plan.',
											},
											status: {
												type: 'string',
												description:
													'The status of the plan. One of: `active`, `inactive`, `canceled`.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						'main-image': {
							type: 'object',
							description:
								'The main image of the SKU, or `null`. Set with an image URL; Webflow stores a copy and returns the asset.',
							properties: {
								fileId: {
									type: 'string',
									description: 'ID of the uploaded image asset.',
								},
								url: { type: 'string', description: 'URL of the image.' },
								alt: {
									type: 'string',
									description: 'Alt text of the image, or `null`.',
								},
							},
							required: [],
						},
						'more-images': {
							type: 'array',
							description:
								'Additional images of the SKU, or `null`. Returned by the API but not described in the vendor reference.',
							items: {
								type: 'object',
								description: 'An additional image of the SKU.',
								properties: {
									fileId: {
										type: 'string',
										description: 'ID of the uploaded image asset.',
									},
									url: { type: 'string', description: 'URL of the image.' },
									alt: {
										type: 'string',
										description: 'Alt text of the image, or `null`.',
									},
								},
								required: [],
							},
						},
						'download-files': {
							type: 'array',
							description:
								'Downloadable files attached to the SKU (digital products), or `null`. Returned by the API but not described in the vendor reference. Only empty values were observed, so the item structure is left open.',
							items: {
								type: 'object',
								description:
									'A downloadable file of the SKU. Returned as an open object; only empty lists were observed and the vendor reference does not describe it.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
						sku: {
							type: 'string',
							description:
								'Your own SKU code for this variant (free text), or `null`.',
						},
						width: {
							type: 'number',
							description: 'The physical width of the variant if provided, or null.',
						},
						length: {
							type: 'number',
							description: 'The physical length of the variant if provided, or null.',
						},
						height: {
							type: 'number',
							description: 'The physical height of the variant if provided, or null.',
						},
						weight: {
							type: 'number',
							description: 'The physical weight of the variant if provided, or null.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
];
