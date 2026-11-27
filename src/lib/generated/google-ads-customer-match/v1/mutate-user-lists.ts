// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type MutateUserListsInput = {
	/**
	 * The ID of the Google Ads account (customer) whose user lists are modified, as 10 digits without hyphens. For example, `1234567890`.
	 */
	customerId: string;
	/**
	 * The operations to perform on individual user lists. One request may carry several operations; each operation sets exactly one of `create`, `update`, or `remove`.
	 *
	 * Items: A single operation on one user list. Set exactly one of `create`, `update`, or `remove`; `updateMask` is used only together with `update`.
	 */
	operations: {
		/**
		 * Create operation: the user list to create. Set exactly one list type (`crmBasedUserList` for Customer Match). Do not set `resourceName`. Leave `update` and `remove` empty.
		 */
		create?: {
			/**
			 * Do not set for a create operation; the API assigns the resource name.
			 */
			resourceName?: string;
			/**
			 * Name of the user list. Must be unique among the user lists of the customer.
			 */
			name?: string;
			/**
			 * Description of the user list.
			 */
			description?: string;
			/**
			 * Whether the list is open or closed. Only open lists accumulate members and can be targeted.
			 */
			membershipStatus?: '' | 'OPEN' | 'CLOSED';
			/**
			 * Number of days a user stays on the list since the most recent addition, between 0 and 540. Ignored for logical and rule-based lists.
			 */
			membershipLifeSpan?: number;
			/**
			 * An ID from an external system, used by user list sellers to correlate IDs on their systems.
			 */
			integrationCode?: string;
			/**
			 * Whether the share of this list with the account is enabled. Default is `ENABLED`.
			 */
			accountUserListStatus?: '' | 'ENABLED' | 'DISABLED';
			/**
			 * Whether the user list is eligible for the Google Search Network.
			 */
			eligibleForSearch?: boolean;
			/**
			 * A Customer Match list of CRM users provided by the advertiser. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			crmBasedUserList?: {
				/**
				 * Matching key type of the list. Mixed data types are not allowed on the same list. Required when creating a Customer Match list.
				 */
				uploadKeyType?: '' | 'CONTACT_INFO' | 'CRM_ID' | 'MOBILE_ADVERTISING_ID';
				/**
				 * Data source of the list. Default is `FIRST_PARTY`. Only customers on the allow-list can create third-party sourced CRM lists.
				 */
				dataSourceType?:
					| ''
					| 'FIRST_PARTY'
					| 'THIRD_PARTY_CREDIT_BUREAU'
					| 'THIRD_PARTY_VOTER_FILE'
					| 'THIRD_PARTY_PARTNER_DATA';
				/**
				 * Identifies the mobile application the data was collected from. For iOS, the 9-digit ID at the end of the App Store URL (`476943146`); for Android, the package name (`com.labpixies.colordrips`). Required when `uploadKeyType` is `MOBILE_ADVERTISING_ID`.
				 */
				appId?: string;
			};
			/**
			 * A remarketing list defined as a collection of conversion or remarketing actions. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			basicUserList?: {
				/**
				 * Actions associated with this user list.
				 *
				 * Items: A conversion or remarketing action. Set exactly one of `conversionAction` or `remarketingAction`.
				 */
				actions?: {
					/**
					 * Resource name of a conversion action that is not generated from remarketing, in the format `customers/{customerId}/conversionActions/{conversionActionId}`.
					 */
					conversionAction?: string;
					/**
					 * Resource name of a remarketing action, in the format `customers/{customerId}/remarketingActions/{remarketingActionId}`.
					 */
					remarketingAction?: string;
				}[];
			};
			/**
			 * A list that is a custom combination of other user lists. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			logicalUserList?: {
				/**
				 * Logical rules that define this list. All rules are ANDed when evaluated. Required when creating a logical user list.
				 *
				 * Items: A logical operator and the user lists it applies to.
				 */
				rules?: {
					/**
					 * The logical operator of the rule.
					 */
					operator?: '' | 'ALL' | 'ANY' | 'NONE';
					/**
					 * The operands of the rule.
					 *
					 * Items: A user list used as an operand.
					 */
					ruleOperands?: {
						/**
						 * Resource name of the user list operand, in the format `customers/{customerId}/userLists/{userListId}`.
						 */
						userList?: string;
					}[];
				}[];
			};
			/**
			 * A list of users similar to those of the seed user lists. Immutable after creation. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			lookalikeUserList?: {
				/**
				 * IDs of the seed user lists this list is derived from.
				 *
				 * Items: The ID of a seed user list, as a 64-bit integer string.
				 */
				seedUserListIds?: string[];
				/**
				 * Countries targeted by the lookalike list.
				 *
				 * Items: Two-letter ISO 3166 country code, for example `US`.
				 */
				countryCodes?: string[];
				/**
				 * Size of the lookalike audience relative to the seed lists.
				 */
				expansionLevel?: '' | 'NARROW' | 'BALANCED' | 'BROAD';
			};
			/**
			 * A list generated by a rule on visitor actions. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			ruleBasedUserList?: {
				/**
				 * Set to `REQUESTED` to include past site visitors or app users from the last 30 days who match the list definition (Display Network only). The API later reports `FINISHED` or `FAILED`; those values are not settable.
				 */
				prepopulationStatus?: '' | 'REQUESTED' | 'FINISHED' | 'FAILED';
				/**
				 * Visitors with one or multiple actions. Users matched by `inclusiveOperands` are included, minus the users matched by `exclusiveOperands` (AND NOT).
				 */
				flexibleRuleUserList?: {
					/**
					 * How the inclusive operands are combined.
					 */
					inclusiveRuleOperator?: '' | 'AND' | 'OR';
					/**
					 * Rules representing users to include in the list, combined with `inclusiveRuleOperator`.
					 *
					 * Items: A set of users based on actions they took within the lookback window.
					 */
					inclusiveOperands?: {
						/**
						 * Lookback window for this rule in days, from now until this many days ago.
						 */
						lookbackWindowDays?: number;
						/**
						 * Rule item groups that define this operand.
						 */
						rule?: {
							/**
							 * How rule items are grouped. `OR_OF_ANDS` (the default and the only type supported for flexible rule user lists) ANDs the items within a group and ORs the groups.
							 */
							ruleType?: '' | 'OR_OF_ANDS' | 'AND_OF_ORS';
							/**
							 * Groups of rule items. Items are grouped based on `ruleType`.
							 *
							 * Items: A group of rule items.
							 */
							ruleItemGroups?: {
								/**
								 * Rule items in this group.
								 *
								 * Items: An atomic rule item: a variable name compared with a string, a number, or a date. Set exactly one of `stringRuleItem`, `numberRuleItem`, or `dateRuleItem`.
								 */
								ruleItems?: {
									/**
									 * Rule variable name. It should match the key name fired by the remarketing tag. For websites, the built-in variables are the page URL (`url__`) and the referrer URL (`ref_url__`).
									 */
									name?: string;
									/**
									 * A string comparison.
									 */
									stringRuleItem?: {
										/**
										 * String comparison operator.
										 */
										operator?:
											| ''
											| 'CONTAINS'
											| 'EQUALS'
											| 'STARTS_WITH'
											| 'ENDS_WITH'
											| 'NOT_EQUALS'
											| 'NOT_CONTAINS'
											| 'NOT_STARTS_WITH'
											| 'NOT_ENDS_WITH';
										/**
										 * The right-hand side of the comparison. For URLs or referrer URLs the value cannot contain newlines, quotes, tabs, or parentheses.
										 */
										value?: string;
									};
									/**
									 * A number comparison.
									 */
									numberRuleItem?: {
										/**
										 * Number comparison operator.
										 */
										operator?:
											| ''
											| 'EQUALS'
											| 'NOT_EQUALS'
											| 'GREATER_THAN'
											| 'GREATER_THAN_OR_EQUAL'
											| 'LESS_THAN'
											| 'LESS_THAN_OR_EQUAL';
										/**
										 * Number value to compare the variable with.
										 */
										value?: number;
									};
									/**
									 * A date comparison.
									 */
									dateRuleItem?: {
										/**
										 * Date comparison operator.
										 */
										operator?:
											| ''
											| 'EQUALS'
											| 'NOT_EQUALS'
											| 'BEFORE'
											| 'AFTER';
										/**
										 * Date to compare the variable with, in the `YYYY-MM-DD` format, in the customer's time zone. Overrides `offsetInDays` when both are set.
										 */
										value?: string;
										/**
										 * Relative date: number of days offset from now. Ignored when `value` is set.
										 */
										offsetInDays?: number;
									};
								}[];
							}[];
						};
					}[];
					/**
					 * Rules representing users to exclude from the list, joined together by OR.
					 *
					 * Items: A set of users based on actions they took within the lookback window.
					 */
					exclusiveOperands?: {
						/**
						 * Lookback window for this rule in days, from now until this many days ago.
						 */
						lookbackWindowDays?: number;
						/**
						 * Rule item groups that define this operand.
						 */
						rule?: {
							/**
							 * How rule items are grouped. `OR_OF_ANDS` (the default and the only type supported for flexible rule user lists) ANDs the items within a group and ORs the groups.
							 */
							ruleType?: '' | 'OR_OF_ANDS' | 'AND_OF_ORS';
							/**
							 * Groups of rule items. Items are grouped based on `ruleType`.
							 *
							 * Items: A group of rule items.
							 */
							ruleItemGroups?: {
								/**
								 * Rule items in this group.
								 *
								 * Items: An atomic rule item: a variable name compared with a string, a number, or a date. Set exactly one of `stringRuleItem`, `numberRuleItem`, or `dateRuleItem`.
								 */
								ruleItems?: {
									/**
									 * Rule variable name. It should match the key name fired by the remarketing tag. For websites, the built-in variables are the page URL (`url__`) and the referrer URL (`ref_url__`).
									 */
									name?: string;
									/**
									 * A string comparison.
									 */
									stringRuleItem?: {
										/**
										 * String comparison operator.
										 */
										operator?:
											| ''
											| 'CONTAINS'
											| 'EQUALS'
											| 'STARTS_WITH'
											| 'ENDS_WITH'
											| 'NOT_EQUALS'
											| 'NOT_CONTAINS'
											| 'NOT_STARTS_WITH'
											| 'NOT_ENDS_WITH';
										/**
										 * The right-hand side of the comparison. For URLs or referrer URLs the value cannot contain newlines, quotes, tabs, or parentheses.
										 */
										value?: string;
									};
									/**
									 * A number comparison.
									 */
									numberRuleItem?: {
										/**
										 * Number comparison operator.
										 */
										operator?:
											| ''
											| 'EQUALS'
											| 'NOT_EQUALS'
											| 'GREATER_THAN'
											| 'GREATER_THAN_OR_EQUAL'
											| 'LESS_THAN'
											| 'LESS_THAN_OR_EQUAL';
										/**
										 * Number value to compare the variable with.
										 */
										value?: number;
									};
									/**
									 * A date comparison.
									 */
									dateRuleItem?: {
										/**
										 * Date comparison operator.
										 */
										operator?:
											| ''
											| 'EQUALS'
											| 'NOT_EQUALS'
											| 'BEFORE'
											| 'AFTER';
										/**
										 * Date to compare the variable with, in the `YYYY-MM-DD` format, in the customer's time zone. Overrides `offsetInDays` when both are set.
										 */
										value?: string;
										/**
										 * Relative date: number of days offset from now. Ignored when `value` is set.
										 */
										offsetInDays?: number;
									};
								}[];
							}[];
						};
					}[];
				};
			};
		};
		/**
		 * Update operation: the user list to update. `resourceName` is required, and `updateMask` lists the fields to change. Leave `create` and `remove` empty.
		 */
		update?: {
			/**
			 * Required. The resource name of the user list to update, in the format `customers/{customerId}/userLists/{userListId}`.
			 */
			resourceName?: string;
			/**
			 * Name of the user list. Must be unique among the user lists of the customer.
			 */
			name?: string;
			/**
			 * Description of the user list.
			 */
			description?: string;
			/**
			 * Whether the list is open or closed. Only open lists accumulate members and can be targeted.
			 */
			membershipStatus?: '' | 'OPEN' | 'CLOSED';
			/**
			 * Number of days a user stays on the list since the most recent addition, between 0 and 540. Ignored for logical and rule-based lists.
			 */
			membershipLifeSpan?: number;
			/**
			 * An ID from an external system, used by user list sellers to correlate IDs on their systems.
			 */
			integrationCode?: string;
			/**
			 * Whether the share of this list with the account is enabled. Default is `ENABLED`.
			 */
			accountUserListStatus?: '' | 'ENABLED' | 'DISABLED';
			/**
			 * Whether the user list is eligible for the Google Search Network.
			 */
			eligibleForSearch?: boolean;
			/**
			 * A Customer Match list of CRM users provided by the advertiser. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			crmBasedUserList?: {
				/**
				 * Matching key type of the list. Mixed data types are not allowed on the same list. Required when creating a Customer Match list.
				 */
				uploadKeyType?: '' | 'CONTACT_INFO' | 'CRM_ID' | 'MOBILE_ADVERTISING_ID';
				/**
				 * Data source of the list. Default is `FIRST_PARTY`. Only customers on the allow-list can create third-party sourced CRM lists.
				 */
				dataSourceType?:
					| ''
					| 'FIRST_PARTY'
					| 'THIRD_PARTY_CREDIT_BUREAU'
					| 'THIRD_PARTY_VOTER_FILE'
					| 'THIRD_PARTY_PARTNER_DATA';
				/**
				 * Identifies the mobile application the data was collected from. For iOS, the 9-digit ID at the end of the App Store URL (`476943146`); for Android, the package name (`com.labpixies.colordrips`). Required when `uploadKeyType` is `MOBILE_ADVERTISING_ID`.
				 */
				appId?: string;
			};
			/**
			 * A remarketing list defined as a collection of conversion or remarketing actions. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			basicUserList?: {
				/**
				 * Actions associated with this user list.
				 *
				 * Items: A conversion or remarketing action. Set exactly one of `conversionAction` or `remarketingAction`.
				 */
				actions?: {
					/**
					 * Resource name of a conversion action that is not generated from remarketing, in the format `customers/{customerId}/conversionActions/{conversionActionId}`.
					 */
					conversionAction?: string;
					/**
					 * Resource name of a remarketing action, in the format `customers/{customerId}/remarketingActions/{remarketingActionId}`.
					 */
					remarketingAction?: string;
				}[];
			};
			/**
			 * A list that is a custom combination of other user lists. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			logicalUserList?: {
				/**
				 * Logical rules that define this list. All rules are ANDed when evaluated. Required when creating a logical user list.
				 *
				 * Items: A logical operator and the user lists it applies to.
				 */
				rules?: {
					/**
					 * The logical operator of the rule.
					 */
					operator?: '' | 'ALL' | 'ANY' | 'NONE';
					/**
					 * The operands of the rule.
					 *
					 * Items: A user list used as an operand.
					 */
					ruleOperands?: {
						/**
						 * Resource name of the user list operand, in the format `customers/{customerId}/userLists/{userListId}`.
						 */
						userList?: string;
					}[];
				}[];
			};
			/**
			 * A list of users similar to those of the seed user lists. Immutable after creation. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			lookalikeUserList?: {
				/**
				 * IDs of the seed user lists this list is derived from.
				 *
				 * Items: The ID of a seed user list, as a 64-bit integer string.
				 */
				seedUserListIds?: string[];
				/**
				 * Countries targeted by the lookalike list.
				 *
				 * Items: Two-letter ISO 3166 country code, for example `US`.
				 */
				countryCodes?: string[];
				/**
				 * Size of the lookalike audience relative to the seed lists.
				 */
				expansionLevel?: '' | 'NARROW' | 'BALANCED' | 'BROAD';
			};
			/**
			 * A list generated by a rule on visitor actions. Set exactly one of `crmBasedUserList`, `basicUserList`, `logicalUserList`, `lookalikeUserList`, or `ruleBasedUserList`; a user list has exactly one type and the type cannot be changed after creation.
			 */
			ruleBasedUserList?: {
				/**
				 * Set to `REQUESTED` to include past site visitors or app users from the last 30 days who match the list definition (Display Network only). The API later reports `FINISHED` or `FAILED`; those values are not settable.
				 */
				prepopulationStatus?: '' | 'REQUESTED' | 'FINISHED' | 'FAILED';
				/**
				 * Visitors with one or multiple actions. Users matched by `inclusiveOperands` are included, minus the users matched by `exclusiveOperands` (AND NOT).
				 */
				flexibleRuleUserList?: {
					/**
					 * How the inclusive operands are combined.
					 */
					inclusiveRuleOperator?: '' | 'AND' | 'OR';
					/**
					 * Rules representing users to include in the list, combined with `inclusiveRuleOperator`.
					 *
					 * Items: A set of users based on actions they took within the lookback window.
					 */
					inclusiveOperands?: {
						/**
						 * Lookback window for this rule in days, from now until this many days ago.
						 */
						lookbackWindowDays?: number;
						/**
						 * Rule item groups that define this operand.
						 */
						rule?: {
							/**
							 * How rule items are grouped. `OR_OF_ANDS` (the default and the only type supported for flexible rule user lists) ANDs the items within a group and ORs the groups.
							 */
							ruleType?: '' | 'OR_OF_ANDS' | 'AND_OF_ORS';
							/**
							 * Groups of rule items. Items are grouped based on `ruleType`.
							 *
							 * Items: A group of rule items.
							 */
							ruleItemGroups?: {
								/**
								 * Rule items in this group.
								 *
								 * Items: An atomic rule item: a variable name compared with a string, a number, or a date. Set exactly one of `stringRuleItem`, `numberRuleItem`, or `dateRuleItem`.
								 */
								ruleItems?: {
									/**
									 * Rule variable name. It should match the key name fired by the remarketing tag. For websites, the built-in variables are the page URL (`url__`) and the referrer URL (`ref_url__`).
									 */
									name?: string;
									/**
									 * A string comparison.
									 */
									stringRuleItem?: {
										/**
										 * String comparison operator.
										 */
										operator?:
											| ''
											| 'CONTAINS'
											| 'EQUALS'
											| 'STARTS_WITH'
											| 'ENDS_WITH'
											| 'NOT_EQUALS'
											| 'NOT_CONTAINS'
											| 'NOT_STARTS_WITH'
											| 'NOT_ENDS_WITH';
										/**
										 * The right-hand side of the comparison. For URLs or referrer URLs the value cannot contain newlines, quotes, tabs, or parentheses.
										 */
										value?: string;
									};
									/**
									 * A number comparison.
									 */
									numberRuleItem?: {
										/**
										 * Number comparison operator.
										 */
										operator?:
											| ''
											| 'EQUALS'
											| 'NOT_EQUALS'
											| 'GREATER_THAN'
											| 'GREATER_THAN_OR_EQUAL'
											| 'LESS_THAN'
											| 'LESS_THAN_OR_EQUAL';
										/**
										 * Number value to compare the variable with.
										 */
										value?: number;
									};
									/**
									 * A date comparison.
									 */
									dateRuleItem?: {
										/**
										 * Date comparison operator.
										 */
										operator?:
											| ''
											| 'EQUALS'
											| 'NOT_EQUALS'
											| 'BEFORE'
											| 'AFTER';
										/**
										 * Date to compare the variable with, in the `YYYY-MM-DD` format, in the customer's time zone. Overrides `offsetInDays` when both are set.
										 */
										value?: string;
										/**
										 * Relative date: number of days offset from now. Ignored when `value` is set.
										 */
										offsetInDays?: number;
									};
								}[];
							}[];
						};
					}[];
					/**
					 * Rules representing users to exclude from the list, joined together by OR.
					 *
					 * Items: A set of users based on actions they took within the lookback window.
					 */
					exclusiveOperands?: {
						/**
						 * Lookback window for this rule in days, from now until this many days ago.
						 */
						lookbackWindowDays?: number;
						/**
						 * Rule item groups that define this operand.
						 */
						rule?: {
							/**
							 * How rule items are grouped. `OR_OF_ANDS` (the default and the only type supported for flexible rule user lists) ANDs the items within a group and ORs the groups.
							 */
							ruleType?: '' | 'OR_OF_ANDS' | 'AND_OF_ORS';
							/**
							 * Groups of rule items. Items are grouped based on `ruleType`.
							 *
							 * Items: A group of rule items.
							 */
							ruleItemGroups?: {
								/**
								 * Rule items in this group.
								 *
								 * Items: An atomic rule item: a variable name compared with a string, a number, or a date. Set exactly one of `stringRuleItem`, `numberRuleItem`, or `dateRuleItem`.
								 */
								ruleItems?: {
									/**
									 * Rule variable name. It should match the key name fired by the remarketing tag. For websites, the built-in variables are the page URL (`url__`) and the referrer URL (`ref_url__`).
									 */
									name?: string;
									/**
									 * A string comparison.
									 */
									stringRuleItem?: {
										/**
										 * String comparison operator.
										 */
										operator?:
											| ''
											| 'CONTAINS'
											| 'EQUALS'
											| 'STARTS_WITH'
											| 'ENDS_WITH'
											| 'NOT_EQUALS'
											| 'NOT_CONTAINS'
											| 'NOT_STARTS_WITH'
											| 'NOT_ENDS_WITH';
										/**
										 * The right-hand side of the comparison. For URLs or referrer URLs the value cannot contain newlines, quotes, tabs, or parentheses.
										 */
										value?: string;
									};
									/**
									 * A number comparison.
									 */
									numberRuleItem?: {
										/**
										 * Number comparison operator.
										 */
										operator?:
											| ''
											| 'EQUALS'
											| 'NOT_EQUALS'
											| 'GREATER_THAN'
											| 'GREATER_THAN_OR_EQUAL'
											| 'LESS_THAN'
											| 'LESS_THAN_OR_EQUAL';
										/**
										 * Number value to compare the variable with.
										 */
										value?: number;
									};
									/**
									 * A date comparison.
									 */
									dateRuleItem?: {
										/**
										 * Date comparison operator.
										 */
										operator?:
											| ''
											| 'EQUALS'
											| 'NOT_EQUALS'
											| 'BEFORE'
											| 'AFTER';
										/**
										 * Date to compare the variable with, in the `YYYY-MM-DD` format, in the customer's time zone. Overrides `offsetInDays` when both are set.
										 */
										value?: string;
										/**
										 * Relative date: number of days offset from now. Ignored when `value` is set.
										 */
										offsetInDays?: number;
									};
								}[];
							}[];
						};
					}[];
				};
			};
		};
		/**
		 * Remove operation: the resource name of the user list to remove, in the format `customers/{customerId}/userLists/{userListId}`. Leave `create` and `update` empty.
		 */
		remove?: string;
		/**
		 * Comma-separated list of the `update` fields to modify, in camelCase, for example `name,description,membershipLifeSpan`. Required for an update operation and used only with `update`. A field listed here but left empty in `update` is cleared.
		 */
		updateMask?: string;
	}[];
	/**
	 * If `true`, valid operations are carried out and invalid operations return errors in `partialFailureError`. If `false` (default), all operations are carried out in one transaction only if they are all valid.
	 */
	partialFailure?: boolean;
	/**
	 * If `true`, the request is validated but not executed. Only errors are returned, not results.
	 */
	validateOnly?: boolean;
};

export type MutateUserListsOutput = {
	/**
	 * One result per successful operation, in the order of the `operations` input. Empty when `validateOnly` was set.
	 *
	 * Items: The result of one user list operation.
	 */
	results?: {
		/**
		 * Resource name of the created, updated, or removed user list, in the format `customers/{customerId}/userLists/{userListId}`. The user list ID is the last path segment.
		 */
		resourceName?: string;
	}[];
	/**
	 * Errors of the operations that failed. Returned only when `partialFailure` was `true` and all errors occurred inside the operations; errors outside the operations (for example authentication) fail the whole request instead.
	 */
	partialFailureError?: {
		/**
		 * The gRPC status code.
		 */
		code?: number;
		/**
		 * A developer-facing error message.
		 */
		message?: string;
		/**
		 * Error details. Each entry is a `GoogleAdsFailure` with an `errors` array that names the failed operation index in `location.fieldPathElements`.
		 *
		 * Items: A `GoogleAdsFailure` object with `errors` and `requestId`.
		 */
		details?: Record<string, JSONValue>[];
	};
};

/**
 * Mutate user lists
 * Creates, updates, or removes user lists (audiences) in a Google Ads account, including Customer Match lists.
 */
export async function mutateUserLists(
	this: EndpointFunctionThis,
	payload: {
		input: MutateUserListsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<MutateUserListsOutput>> {
	const response = await this.endpointCaller<MutateUserListsOutput>(
		{
			appName: 'google-ads-customer-match',
			appVersion: 1,
			endpointName: 'mutateUserLists',
		},
		payload,
	);
	return response;
}
