// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'google-ads-customer-match',
		appVersion: 1,
		endpointName: 'mutateUserLists',
		label: 'Mutate user lists',
		description:
			'Creates, updates, or removes user lists (audiences) in a Google Ads account, including Customer Match lists.',
		context:
			'---\nname: mutateUserLists\ndescription: Creates, updates, or removes user lists (audiences) in a Google Ads account, including Customer Match lists.\n---\n\nCalls `UserListService.MutateUserLists` (`POST /customers/{customerId}/userLists:mutate`). One request carries one\nor more operations; each operation sets exactly one of `create`, `update`, or `remove`.\n\n## Input\n\n- `customerId`: the Google Ads account ID, 10 digits without hyphens (`123-456-7890` becomes `1234567890`).\n- `operations`: the operations to perform. One request may carry several operations, but each operation object\n  sets exactly one of `create`, `update`, or `remove` (`updateMask` only accompanies `update`). Likewise a user\n  list has exactly one type: set only one of `crmBasedUserList`, `basicUserList`, `logicalUserList`,\n  `lookalikeUserList`, or `ruleBasedUserList`.\n  - `create`: a user list without `resourceName`. Set exactly one list type. For a Customer Match list set\n    `crmBasedUserList` with `uploadKeyType` (`CONTACT_INFO`, `CRM_ID`, or `MOBILE_ADVERTISING_ID`; `appId` is\n    required for `MOBILE_ADVERTISING_ID`). `name` must be unique in the account. `membershipLifeSpan` is in days\n    (0–540). `membershipStatus` defaults to `OPEN` and `accountUserListStatus` to `ENABLED` when omitted.\n  - `update`: a user list with its `resourceName` plus the fields to change, and `updateMask` naming those fields\n    in camelCase (`name,description,membershipLifeSpan`). Fields not listed in `updateMask` are left unchanged.\n    A field listed in `updateMask` and left empty in `update` is cleared. Read the current values first with a\n    GAQL query (`SELECT user_list.name, user_list.description, ... FROM user_list WHERE user_list.id = ...`) using\n    the Google Ads Reports app\'s search or searchStream endpoint, which run on the same connection. The list type (`crmBasedUserList` and the other type objects) cannot be changed\n    after creation.\n  - `remove`: the resource name `customers/{customerId}/userLists/{userListId}` of the list to remove.\n- `partialFailure`: run the valid operations and report the invalid ones in `partialFailureError` instead of\n  failing the whole request.\n- `validateOnly`: validate without executing; the response has no `results`.\n\n## Output\n\n`results` has one entry per operation with the `resourceName` of the affected user list. The user list ID is the\nlast path segment of the resource name (`customers/1234567890/userLists/987654321` → `987654321`). The full\nresource is not returned. This app has no read endpoint; read the list with a GAQL query (`SELECT user_list.id,\nuser_list.name, user_list.membership_status, ... FROM user_list WHERE user_list.id = 987654321`) through the\nGoogle Ads Reports app\'s search or searchStream endpoint, which use the same Google Ads connection.\n\n## Example\n\nCreate a Customer Match list keyed by contact info:\n\n```json\n{\n  "customerId": "1234567890",\n  "operations": [\n    {\n      "create": {\n        "name": "Newsletter subscribers",\n        "description": "Imported from the CRM",\n        "membershipLifeSpan": 30,\n        "membershipStatus": "OPEN",\n        "crmBasedUserList": {\n          "uploadKeyType": "CONTACT_INFO",\n          "dataSourceType": "FIRST_PARTY"\n        }\n      }\n    }\n  ]\n}\n```\n\n## Limitations\n\n- Members are not added or removed with this call. Customer Match members are uploaded with\n  `OfflineUserDataJobService` or `customers/{customerId}:uploadUserData`; see the\n  [Customer Match guide](https://developers.google.com/google-ads/api/docs/remarketing/audience-segments/customer-match/get-started).\n- Third-party `dataSourceType` values are available only to allow-listed customers.\n- `lookalikeUserList` is immutable after creation, and `similarUserList` lists are created by Google and cannot be\n  created or updated.\n- Removing a user list that is referenced by campaigns or ad groups fails with a `UserListError`.\n\nSee [UserListService.MutateUserLists](https://developers.google.com/google-ads/api/reference/rpc/v25/UserListService/MutateUserLists?transport=rest)\nand the [UserList resource](https://developers.google.com/google-ads/api/reference/rpc/v25/UserList?transport=rest).\n',
		accounts: { 'google-ads2': { scope: ['https://www.googleapis.com/auth/adwords'] } },
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
				customerId: {
					type: 'string',
					description:
						'The ID of the Google Ads account (customer) whose user lists are modified, as 10 digits without hyphens. For example, `1234567890`.',
					pattern: String.raw`^\d{10}$`,
				},
				operations: {
					type: 'array',
					description:
						'The operations to perform on individual user lists. One request may carry several operations; each operation sets exactly one of `create`, `update`, or `remove`.',
					items: {
						type: 'object',
						description:
							'A single operation on one user list. Set exactly one of `create`, `update`, or `remove`; `updateMask` is used only together with `update`.',
						properties: {
							create: {
								type: 'object',
								description:
									'Create operation: the user list to create. Set exactly one list type (`crmBasedUserList` for Customer Match). Do not set `resourceName`. Leave `update` and `remove` empty.',
								properties: {
									resourceName: {
										type: 'string',
										description:
											'Do not set for a create operation; the API assigns the resource name.',
									},
									name: {
										type: 'string',
										description:
											'Name of the user list. Must be unique among the user lists of the customer.',
									},
									description: {
										type: 'string',
										description: 'Description of the user list.',
									},
									membershipStatus: {
										type: 'string',
										description:
											'Whether the list is open or closed. Only open lists accumulate members and can be targeted.',
										default: '',
										enum: ['', 'OPEN', 'CLOSED'],
									},
									membershipLifeSpan: {
										type: 'number',
										description:
											'Number of days a user stays on the list since the most recent addition, between 0 and 540. Ignored for logical and rule-based lists.',
										minimum: 0,
										maximum: 540,
									},
									integrationCode: {
										type: 'string',
										description:
											'An ID from an external system, used by user list sellers to correlate IDs on their systems.',
									},
									accountUserListStatus: {
										type: 'string',
										description:
											'Whether the share of this list with the account is enabled. Default is `ENABLED`.',
										default: '',
										enum: ['', 'ENABLED', 'DISABLED'],
									},
									eligibleForSearch: {
										type: 'boolean',
										description:
											'Whether the user list is eligible for the Google Search Network.',
									},
									crmBasedUserList: {
										type: 'object',
										description:
											'A Customer Match list of CRM users provided by the advertiser. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											uploadKeyType: {
												type: 'string',
												description:
													'Matching key type of the list. Mixed data types are not allowed on the same list. Required when creating a Customer Match list.',
												default: '',
												enum: [
													'',
													'CONTACT_INFO',
													'CRM_ID',
													'MOBILE_ADVERTISING_ID',
												],
											},
											dataSourceType: {
												type: 'string',
												description:
													'Data source of the list. Default is `FIRST_PARTY`. Only customers on the allow-list can create third-party sourced CRM lists.',
												default: '',
												enum: [
													'',
													'FIRST_PARTY',
													'THIRD_PARTY_CREDIT_BUREAU',
													'THIRD_PARTY_VOTER_FILE',
													'THIRD_PARTY_PARTNER_DATA',
												],
											},
											appId: {
												type: 'string',
												description:
													'Identifies the mobile application the data was collected from. For iOS, the 9-digit ID at the end of the App Store URL (`476943146`); for Android, the package name (`com.labpixies.colordrips`). Required when `uploadKeyType` is `MOBILE_ADVERTISING_ID`.',
											},
										},
										required: [],
									},
									basicUserList: {
										type: 'object',
										description:
											'A remarketing list defined as a collection of conversion or remarketing actions. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											actions: {
												type: 'array',
												description:
													'Actions associated with this user list.',
												items: {
													type: 'object',
													description:
														'A conversion or remarketing action. Set exactly one of `conversionAction` or `remarketingAction`.',
													properties: {
														conversionAction: {
															type: 'string',
															description:
																'Resource name of a conversion action that is not generated from remarketing, in the format `customers/{customerId}/conversionActions/{conversionActionId}`.',
														},
														remarketingAction: {
															type: 'string',
															description:
																'Resource name of a remarketing action, in the format `customers/{customerId}/remarketingActions/{remarketingActionId}`.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
									logicalUserList: {
										type: 'object',
										description:
											'A list that is a custom combination of other user lists. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											rules: {
												type: 'array',
												description:
													'Logical rules that define this list. All rules are ANDed when evaluated. Required when creating a logical user list.',
												items: {
													type: 'object',
													description:
														'A logical operator and the user lists it applies to.',
													properties: {
														operator: {
															type: 'string',
															description:
																'The logical operator of the rule.',
															default: '',
															enum: ['', 'ALL', 'ANY', 'NONE'],
														},
														ruleOperands: {
															type: 'array',
															description:
																'The operands of the rule.',
															items: {
																type: 'object',
																description:
																	'A user list used as an operand.',
																properties: {
																	userList: {
																		type: 'string',
																		description:
																			'Resource name of the user list operand, in the format `customers/{customerId}/userLists/{userListId}`.',
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
									lookalikeUserList: {
										type: 'object',
										description:
											'A list of users similar to those of the seed user lists. Immutable after creation. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											seedUserListIds: {
												type: 'array',
												description:
													'IDs of the seed user lists this list is derived from.',
												items: {
													type: 'string',
													description:
														'The ID of a seed user list, as a 64-bit integer string.',
												},
											},
											countryCodes: {
												type: 'array',
												description:
													'Countries targeted by the lookalike list.',
												items: {
													type: 'string',
													description:
														'Two-letter ISO 3166 country code, for example `US`.',
												},
											},
											expansionLevel: {
												type: 'string',
												description:
													'Size of the lookalike audience relative to the seed lists.',
												default: '',
												enum: ['', 'NARROW', 'BALANCED', 'BROAD'],
											},
										},
										required: [],
									},
									ruleBasedUserList: {
										type: 'object',
										description:
											'A list generated by a rule on visitor actions. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											prepopulationStatus: {
												type: 'string',
												description:
													'Set to `REQUESTED` to include past site visitors or app users from the last 30 days who match the list definition (Display Network only). The API later reports `FINISHED` or `FAILED`; those values are not settable.',
												default: '',
												enum: ['', 'REQUESTED', 'FINISHED', 'FAILED'],
											},
											flexibleRuleUserList: {
												type: 'object',
												description:
													'Visitors with one or multiple actions. Users matched by `inclusiveOperands` are included, minus the users matched by `exclusiveOperands` (AND NOT).',
												properties: {
													inclusiveRuleOperator: {
														type: 'string',
														description:
															'How the inclusive operands are combined.',
														default: '',
														enum: ['', 'AND', 'OR'],
													},
													inclusiveOperands: {
														type: 'array',
														description:
															'Rules representing users to include in the list, combined with `inclusiveRuleOperator`.',
														items: {
															type: 'object',
															description:
																'A set of users based on actions they took within the lookback window.',
															properties: {
																lookbackWindowDays: {
																	type: 'number',
																	description:
																		'Lookback window for this rule in days, from now until this many days ago.',
																},
																rule: {
																	type: 'object',
																	description:
																		'Rule item groups that define this operand.',
																	properties: {
																		ruleType: {
																			type: 'string',
																			description:
																				'How rule items are grouped. `OR_OF_ANDS` (the default and the only type supported for flexible rule user lists) ANDs the items within a group and ORs the groups.',
																			default: '',
																			enum: [
																				'',
																				'OR_OF_ANDS',
																				'AND_OF_ORS',
																			],
																		},
																		ruleItemGroups: {
																			type: 'array',
																			description:
																				'Groups of rule items. Items are grouped based on `ruleType`.',
																			items: {
																				type: 'object',
																				description:
																					'A group of rule items.',
																				properties: {
																					ruleItems: {
																						type: 'array',
																						description:
																							'Rule items in this group.',
																						items: {
																							type: 'object',
																							description:
																								'An atomic rule item: a variable name compared with a string, a number, or a date. Set exactly one of `stringRuleItem`, `numberRuleItem`, or `dateRuleItem`.',
																							properties:
																								{
																									name: {
																										type: 'string',
																										description:
																											'Rule variable name. It should match the key name fired by the remarketing tag. For websites, the built-in variables are the page URL (`url__`) and the referrer URL (`ref_url__`).',
																									},
																									stringRuleItem:
																										{
																											type: 'object',
																											description:
																												'A string comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'String comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'CONTAINS',
																																'EQUALS',
																																'STARTS_WITH',
																																'ENDS_WITH',
																																'NOT_EQUALS',
																																'NOT_CONTAINS',
																																'NOT_STARTS_WITH',
																																'NOT_ENDS_WITH',
																															],
																														},
																													value: {
																														type: 'string',
																														description:
																															'The right-hand side of the comparison. For URLs or referrer URLs the value cannot contain newlines, quotes, tabs, or parentheses.',
																													},
																												},
																											required:
																												[],
																										},
																									numberRuleItem:
																										{
																											type: 'object',
																											description:
																												'A number comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'Number comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'EQUALS',
																																'NOT_EQUALS',
																																'GREATER_THAN',
																																'GREATER_THAN_OR_EQUAL',
																																'LESS_THAN',
																																'LESS_THAN_OR_EQUAL',
																															],
																														},
																													value: {
																														type: 'number',
																														description:
																															'Number value to compare the variable with.',
																													},
																												},
																											required:
																												[],
																										},
																									dateRuleItem:
																										{
																											type: 'object',
																											description:
																												'A date comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'Date comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'EQUALS',
																																'NOT_EQUALS',
																																'BEFORE',
																																'AFTER',
																															],
																														},
																													value: {
																														type: 'string',
																														description:
																															"Date to compare the variable with, in the `YYYY-MM-DD` format, in the customer's time zone. Overrides `offsetInDays` when both are set.",
																													},
																													offsetInDays:
																														{
																															type: 'number',
																															description:
																																'Relative date: number of days offset from now. Ignored when `value` is set.',
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
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
													exclusiveOperands: {
														type: 'array',
														description:
															'Rules representing users to exclude from the list, joined together by OR.',
														items: {
															type: 'object',
															description:
																'A set of users based on actions they took within the lookback window.',
															properties: {
																lookbackWindowDays: {
																	type: 'number',
																	description:
																		'Lookback window for this rule in days, from now until this many days ago.',
																},
																rule: {
																	type: 'object',
																	description:
																		'Rule item groups that define this operand.',
																	properties: {
																		ruleType: {
																			type: 'string',
																			description:
																				'How rule items are grouped. `OR_OF_ANDS` (the default and the only type supported for flexible rule user lists) ANDs the items within a group and ORs the groups.',
																			default: '',
																			enum: [
																				'',
																				'OR_OF_ANDS',
																				'AND_OF_ORS',
																			],
																		},
																		ruleItemGroups: {
																			type: 'array',
																			description:
																				'Groups of rule items. Items are grouped based on `ruleType`.',
																			items: {
																				type: 'object',
																				description:
																					'A group of rule items.',
																				properties: {
																					ruleItems: {
																						type: 'array',
																						description:
																							'Rule items in this group.',
																						items: {
																							type: 'object',
																							description:
																								'An atomic rule item: a variable name compared with a string, a number, or a date. Set exactly one of `stringRuleItem`, `numberRuleItem`, or `dateRuleItem`.',
																							properties:
																								{
																									name: {
																										type: 'string',
																										description:
																											'Rule variable name. It should match the key name fired by the remarketing tag. For websites, the built-in variables are the page URL (`url__`) and the referrer URL (`ref_url__`).',
																									},
																									stringRuleItem:
																										{
																											type: 'object',
																											description:
																												'A string comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'String comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'CONTAINS',
																																'EQUALS',
																																'STARTS_WITH',
																																'ENDS_WITH',
																																'NOT_EQUALS',
																																'NOT_CONTAINS',
																																'NOT_STARTS_WITH',
																																'NOT_ENDS_WITH',
																															],
																														},
																													value: {
																														type: 'string',
																														description:
																															'The right-hand side of the comparison. For URLs or referrer URLs the value cannot contain newlines, quotes, tabs, or parentheses.',
																													},
																												},
																											required:
																												[],
																										},
																									numberRuleItem:
																										{
																											type: 'object',
																											description:
																												'A number comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'Number comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'EQUALS',
																																'NOT_EQUALS',
																																'GREATER_THAN',
																																'GREATER_THAN_OR_EQUAL',
																																'LESS_THAN',
																																'LESS_THAN_OR_EQUAL',
																															],
																														},
																													value: {
																														type: 'number',
																														description:
																															'Number value to compare the variable with.',
																													},
																												},
																											required:
																												[],
																										},
																									dateRuleItem:
																										{
																											type: 'object',
																											description:
																												'A date comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'Date comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'EQUALS',
																																'NOT_EQUALS',
																																'BEFORE',
																																'AFTER',
																															],
																														},
																													value: {
																														type: 'string',
																														description:
																															"Date to compare the variable with, in the `YYYY-MM-DD` format, in the customer's time zone. Overrides `offsetInDays` when both are set.",
																													},
																													offsetInDays:
																														{
																															type: 'number',
																															description:
																																'Relative date: number of days offset from now. Ignored when `value` is set.',
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
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
												},
												required: [],
											},
										},
										required: [],
									},
								},
								required: [],
							},
							update: {
								type: 'object',
								description:
									'Update operation: the user list to update. `resourceName` is required, and `updateMask` lists the fields to change. Leave `create` and `remove` empty.',
								properties: {
									resourceName: {
										type: 'string',
										description:
											'Required. The resource name of the user list to update, in the format `customers/{customerId}/userLists/{userListId}`.',
									},
									name: {
										type: 'string',
										description:
											'Name of the user list. Must be unique among the user lists of the customer.',
									},
									description: {
										type: 'string',
										description: 'Description of the user list.',
									},
									membershipStatus: {
										type: 'string',
										description:
											'Whether the list is open or closed. Only open lists accumulate members and can be targeted.',
										default: '',
										enum: ['', 'OPEN', 'CLOSED'],
									},
									membershipLifeSpan: {
										type: 'number',
										description:
											'Number of days a user stays on the list since the most recent addition, between 0 and 540. Ignored for logical and rule-based lists.',
										minimum: 0,
										maximum: 540,
									},
									integrationCode: {
										type: 'string',
										description:
											'An ID from an external system, used by user list sellers to correlate IDs on their systems.',
									},
									accountUserListStatus: {
										type: 'string',
										description:
											'Whether the share of this list with the account is enabled. Default is `ENABLED`.',
										default: '',
										enum: ['', 'ENABLED', 'DISABLED'],
									},
									eligibleForSearch: {
										type: 'boolean',
										description:
											'Whether the user list is eligible for the Google Search Network.',
									},
									crmBasedUserList: {
										type: 'object',
										description:
											'A Customer Match list of CRM users provided by the advertiser. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											uploadKeyType: {
												type: 'string',
												description:
													'Matching key type of the list. Mixed data types are not allowed on the same list. Required when creating a Customer Match list.',
												default: '',
												enum: [
													'',
													'CONTACT_INFO',
													'CRM_ID',
													'MOBILE_ADVERTISING_ID',
												],
											},
											dataSourceType: {
												type: 'string',
												description:
													'Data source of the list. Default is `FIRST_PARTY`. Only customers on the allow-list can create third-party sourced CRM lists.',
												default: '',
												enum: [
													'',
													'FIRST_PARTY',
													'THIRD_PARTY_CREDIT_BUREAU',
													'THIRD_PARTY_VOTER_FILE',
													'THIRD_PARTY_PARTNER_DATA',
												],
											},
											appId: {
												type: 'string',
												description:
													'Identifies the mobile application the data was collected from. For iOS, the 9-digit ID at the end of the App Store URL (`476943146`); for Android, the package name (`com.labpixies.colordrips`). Required when `uploadKeyType` is `MOBILE_ADVERTISING_ID`.',
											},
										},
										required: [],
									},
									basicUserList: {
										type: 'object',
										description:
											'A remarketing list defined as a collection of conversion or remarketing actions. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											actions: {
												type: 'array',
												description:
													'Actions associated with this user list.',
												items: {
													type: 'object',
													description:
														'A conversion or remarketing action. Set exactly one of `conversionAction` or `remarketingAction`.',
													properties: {
														conversionAction: {
															type: 'string',
															description:
																'Resource name of a conversion action that is not generated from remarketing, in the format `customers/{customerId}/conversionActions/{conversionActionId}`.',
														},
														remarketingAction: {
															type: 'string',
															description:
																'Resource name of a remarketing action, in the format `customers/{customerId}/remarketingActions/{remarketingActionId}`.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
									logicalUserList: {
										type: 'object',
										description:
											'A list that is a custom combination of other user lists. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											rules: {
												type: 'array',
												description:
													'Logical rules that define this list. All rules are ANDed when evaluated. Required when creating a logical user list.',
												items: {
													type: 'object',
													description:
														'A logical operator and the user lists it applies to.',
													properties: {
														operator: {
															type: 'string',
															description:
																'The logical operator of the rule.',
															default: '',
															enum: ['', 'ALL', 'ANY', 'NONE'],
														},
														ruleOperands: {
															type: 'array',
															description:
																'The operands of the rule.',
															items: {
																type: 'object',
																description:
																	'A user list used as an operand.',
																properties: {
																	userList: {
																		type: 'string',
																		description:
																			'Resource name of the user list operand, in the format `customers/{customerId}/userLists/{userListId}`.',
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
									lookalikeUserList: {
										type: 'object',
										description:
											'A list of users similar to those of the seed user lists. Immutable after creation. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											seedUserListIds: {
												type: 'array',
												description:
													'IDs of the seed user lists this list is derived from.',
												items: {
													type: 'string',
													description:
														'The ID of a seed user list, as a 64-bit integer string.',
												},
											},
											countryCodes: {
												type: 'array',
												description:
													'Countries targeted by the lookalike list.',
												items: {
													type: 'string',
													description:
														'Two-letter ISO 3166 country code, for example `US`.',
												},
											},
											expansionLevel: {
												type: 'string',
												description:
													'Size of the lookalike audience relative to the seed lists.',
												default: '',
												enum: ['', 'NARROW', 'BALANCED', 'BROAD'],
											},
										},
										required: [],
									},
									ruleBasedUserList: {
										type: 'object',
										description:
											'A list generated by a rule on visitor actions. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.',
										properties: {
											prepopulationStatus: {
												type: 'string',
												description:
													'Set to `REQUESTED` to include past site visitors or app users from the last 30 days who match the list definition (Display Network only). The API later reports `FINISHED` or `FAILED`; those values are not settable.',
												default: '',
												enum: ['', 'REQUESTED', 'FINISHED', 'FAILED'],
											},
											flexibleRuleUserList: {
												type: 'object',
												description:
													'Visitors with one or multiple actions. Users matched by `inclusiveOperands` are included, minus the users matched by `exclusiveOperands` (AND NOT).',
												properties: {
													inclusiveRuleOperator: {
														type: 'string',
														description:
															'How the inclusive operands are combined.',
														default: '',
														enum: ['', 'AND', 'OR'],
													},
													inclusiveOperands: {
														type: 'array',
														description:
															'Rules representing users to include in the list, combined with `inclusiveRuleOperator`.',
														items: {
															type: 'object',
															description:
																'A set of users based on actions they took within the lookback window.',
															properties: {
																lookbackWindowDays: {
																	type: 'number',
																	description:
																		'Lookback window for this rule in days, from now until this many days ago.',
																},
																rule: {
																	type: 'object',
																	description:
																		'Rule item groups that define this operand.',
																	properties: {
																		ruleType: {
																			type: 'string',
																			description:
																				'How rule items are grouped. `OR_OF_ANDS` (the default and the only type supported for flexible rule user lists) ANDs the items within a group and ORs the groups.',
																			default: '',
																			enum: [
																				'',
																				'OR_OF_ANDS',
																				'AND_OF_ORS',
																			],
																		},
																		ruleItemGroups: {
																			type: 'array',
																			description:
																				'Groups of rule items. Items are grouped based on `ruleType`.',
																			items: {
																				type: 'object',
																				description:
																					'A group of rule items.',
																				properties: {
																					ruleItems: {
																						type: 'array',
																						description:
																							'Rule items in this group.',
																						items: {
																							type: 'object',
																							description:
																								'An atomic rule item: a variable name compared with a string, a number, or a date. Set exactly one of `stringRuleItem`, `numberRuleItem`, or `dateRuleItem`.',
																							properties:
																								{
																									name: {
																										type: 'string',
																										description:
																											'Rule variable name. It should match the key name fired by the remarketing tag. For websites, the built-in variables are the page URL (`url__`) and the referrer URL (`ref_url__`).',
																									},
																									stringRuleItem:
																										{
																											type: 'object',
																											description:
																												'A string comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'String comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'CONTAINS',
																																'EQUALS',
																																'STARTS_WITH',
																																'ENDS_WITH',
																																'NOT_EQUALS',
																																'NOT_CONTAINS',
																																'NOT_STARTS_WITH',
																																'NOT_ENDS_WITH',
																															],
																														},
																													value: {
																														type: 'string',
																														description:
																															'The right-hand side of the comparison. For URLs or referrer URLs the value cannot contain newlines, quotes, tabs, or parentheses.',
																													},
																												},
																											required:
																												[],
																										},
																									numberRuleItem:
																										{
																											type: 'object',
																											description:
																												'A number comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'Number comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'EQUALS',
																																'NOT_EQUALS',
																																'GREATER_THAN',
																																'GREATER_THAN_OR_EQUAL',
																																'LESS_THAN',
																																'LESS_THAN_OR_EQUAL',
																															],
																														},
																													value: {
																														type: 'number',
																														description:
																															'Number value to compare the variable with.',
																													},
																												},
																											required:
																												[],
																										},
																									dateRuleItem:
																										{
																											type: 'object',
																											description:
																												'A date comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'Date comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'EQUALS',
																																'NOT_EQUALS',
																																'BEFORE',
																																'AFTER',
																															],
																														},
																													value: {
																														type: 'string',
																														description:
																															"Date to compare the variable with, in the `YYYY-MM-DD` format, in the customer's time zone. Overrides `offsetInDays` when both are set.",
																													},
																													offsetInDays:
																														{
																															type: 'number',
																															description:
																																'Relative date: number of days offset from now. Ignored when `value` is set.',
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
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
													exclusiveOperands: {
														type: 'array',
														description:
															'Rules representing users to exclude from the list, joined together by OR.',
														items: {
															type: 'object',
															description:
																'A set of users based on actions they took within the lookback window.',
															properties: {
																lookbackWindowDays: {
																	type: 'number',
																	description:
																		'Lookback window for this rule in days, from now until this many days ago.',
																},
																rule: {
																	type: 'object',
																	description:
																		'Rule item groups that define this operand.',
																	properties: {
																		ruleType: {
																			type: 'string',
																			description:
																				'How rule items are grouped. `OR_OF_ANDS` (the default and the only type supported for flexible rule user lists) ANDs the items within a group and ORs the groups.',
																			default: '',
																			enum: [
																				'',
																				'OR_OF_ANDS',
																				'AND_OF_ORS',
																			],
																		},
																		ruleItemGroups: {
																			type: 'array',
																			description:
																				'Groups of rule items. Items are grouped based on `ruleType`.',
																			items: {
																				type: 'object',
																				description:
																					'A group of rule items.',
																				properties: {
																					ruleItems: {
																						type: 'array',
																						description:
																							'Rule items in this group.',
																						items: {
																							type: 'object',
																							description:
																								'An atomic rule item: a variable name compared with a string, a number, or a date. Set exactly one of `stringRuleItem`, `numberRuleItem`, or `dateRuleItem`.',
																							properties:
																								{
																									name: {
																										type: 'string',
																										description:
																											'Rule variable name. It should match the key name fired by the remarketing tag. For websites, the built-in variables are the page URL (`url__`) and the referrer URL (`ref_url__`).',
																									},
																									stringRuleItem:
																										{
																											type: 'object',
																											description:
																												'A string comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'String comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'CONTAINS',
																																'EQUALS',
																																'STARTS_WITH',
																																'ENDS_WITH',
																																'NOT_EQUALS',
																																'NOT_CONTAINS',
																																'NOT_STARTS_WITH',
																																'NOT_ENDS_WITH',
																															],
																														},
																													value: {
																														type: 'string',
																														description:
																															'The right-hand side of the comparison. For URLs or referrer URLs the value cannot contain newlines, quotes, tabs, or parentheses.',
																													},
																												},
																											required:
																												[],
																										},
																									numberRuleItem:
																										{
																											type: 'object',
																											description:
																												'A number comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'Number comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'EQUALS',
																																'NOT_EQUALS',
																																'GREATER_THAN',
																																'GREATER_THAN_OR_EQUAL',
																																'LESS_THAN',
																																'LESS_THAN_OR_EQUAL',
																															],
																														},
																													value: {
																														type: 'number',
																														description:
																															'Number value to compare the variable with.',
																													},
																												},
																											required:
																												[],
																										},
																									dateRuleItem:
																										{
																											type: 'object',
																											description:
																												'A date comparison.',
																											properties:
																												{
																													operator:
																														{
																															type: 'string',
																															description:
																																'Date comparison operator.',
																															default:
																																'',
																															enum: [
																																'',
																																'EQUALS',
																																'NOT_EQUALS',
																																'BEFORE',
																																'AFTER',
																															],
																														},
																													value: {
																														type: 'string',
																														description:
																															"Date to compare the variable with, in the `YYYY-MM-DD` format, in the customer's time zone. Overrides `offsetInDays` when both are set.",
																													},
																													offsetInDays:
																														{
																															type: 'number',
																															description:
																																'Relative date: number of days offset from now. Ignored when `value` is set.',
																														},
																												},
																											required:
																												[],
																										},
																								},
																							required:
																								[],
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
												},
												required: [],
											},
										},
										required: [],
									},
								},
								required: [],
							},
							remove: {
								type: 'string',
								description:
									'Remove operation: the resource name of the user list to remove, in the format `customers/{customerId}/userLists/{userListId}`. Leave `create` and `update` empty.',
							},
							updateMask: {
								type: 'string',
								description:
									'Comma-separated list of the `update` fields to modify, in camelCase, for example `name,description,membershipLifeSpan`. Required for an update operation and used only with `update`. A field listed here but left empty in `update` is cleared.',
							},
						},
						required: [],
					},
				},
				partialFailure: {
					type: 'boolean',
					description:
						'If `true`, valid operations are carried out and invalid operations return errors in `partialFailureError`. If `false` (default), all operations are carried out in one transaction only if they are all valid.',
				},
				validateOnly: {
					type: 'boolean',
					description:
						'If `true`, the request is validated but not executed. Only errors are returned, not results.',
				},
			},
			required: ['customerId', 'operations'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				results: {
					type: 'array',
					description:
						'One result per successful operation, in the order of the `operations` input. Empty when `validateOnly` was set.',
					items: {
						type: 'object',
						description: 'The result of one user list operation.',
						properties: {
							resourceName: {
								type: 'string',
								description:
									'Resource name of the created, updated, or removed user list, in the format `customers/{customerId}/userLists/{userListId}`. The user list ID is the last path segment.',
							},
						},
						required: [],
					},
				},
				partialFailureError: {
					type: 'object',
					description:
						'Errors of the operations that failed. Returned only when `partialFailure` was `true` and all errors occurred inside the operations; errors outside the operations (for example authentication) fail the whole request instead.',
					properties: {
						code: { type: 'number', description: 'The gRPC status code.' },
						message: {
							type: 'string',
							description: 'A developer-facing error message.',
						},
						details: {
							type: 'array',
							description:
								'Error details. Each entry is a `GoogleAdsFailure` with an `errors` array that names the failed operation index in `location.fieldPathElements`.',
							items: {
								type: 'object',
								description:
									'A `GoogleAdsFailure` object with `errors` and `requestId`.',
								properties: {},
								required: [],
								additionalProperties: true,
							},
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
];
