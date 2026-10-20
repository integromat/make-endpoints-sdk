// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type DescribeObjectInput = {
	/**
	 * Salesforce object API name to describe. For example, Account, Contact, or Lead. Letters, digits, and underscores only; other characters are removed. Use List object types to discover names.
	 */
	sObject: string;
};

export type DescribeObjectOutput = {
	/**
	 * Action override definitions for the object.
	 *
	 * Items: One Salesforce action override definition.
	 */
	actionOverrides?: Record<string, JSONValue>[];
	/**
	 * Whether records of this object can be activated.
	 */
	activateable?: boolean;
	/**
	 * Associate entity type of the object. Null when not applicable.
	 */
	associateEntityType?: string;
	/**
	 * Parent entity of the associate entity. Null when not applicable.
	 */
	associateParentEntity?: string;
	/**
	 * Child relationship definitions for the object.
	 *
	 * Items: One Salesforce child relationship definition.
	 */
	childRelationships?: Record<string, JSONValue>[];
	/**
	 * Whether compact layouts are available.
	 */
	compactLayoutable?: boolean;
	/**
	 * Whether records of this object can be created.
	 */
	createable?: boolean;
	/**
	 * Whether this is a custom object.
	 */
	custom?: boolean;
	/**
	 * Whether this object is a custom setting.
	 */
	customSetting?: boolean;
	/**
	 * Whether records support deep cloning.
	 */
	deepCloneable?: boolean;
	/**
	 * Default implementation of the object when it is an interface. Null when not applicable.
	 */
	defaultImplementation?: string;
	/**
	 * Whether records of this object can be deleted.
	 */
	deletable?: boolean;
	/**
	 * Whether the object is deprecated and hidden.
	 */
	deprecatedAndHidden?: boolean;
	/**
	 * Objects that extend this object. Null when not applicable.
	 */
	extendedBy?: string;
	/**
	 * Interfaces that this object extends. Null when not applicable.
	 */
	extendsInterfaces?: string;
	/**
	 * Whether feeds are enabled for the object.
	 */
	feedEnabled?: boolean;
	/**
	 * Complete Salesforce field definitions for the object.
	 *
	 * Items: One complete Salesforce field definition.
	 */
	fields?: Record<string, JSONValue>[];
	/**
	 * Whether the object has subtypes.
	 */
	hasSubtypes?: boolean;
	/**
	 * Objects that implement this object when it is an interface. Null when not applicable.
	 */
	implementedBy?: string;
	/**
	 * Interfaces that this object implements. Null when not applicable.
	 */
	implementsInterfaces?: string;
	/**
	 * Whether the object is an interface.
	 */
	isInterface?: boolean;
	/**
	 * Whether the object is a subtype.
	 */
	isSubtype?: boolean;
	/**
	 * Three-character record ID prefix, when available.
	 */
	keyPrefix?: string;
	/**
	 * Singular object label.
	 */
	label?: string;
	/**
	 * Plural object label.
	 */
	labelPlural?: string;
	/**
	 * Whether layouts are available.
	 */
	layoutable?: boolean;
	/**
	 * Whether list views are available, when returned by Salesforce.
	 */
	listviewable?: boolean;
	/**
	 * Whether lookup layouts are available, when returned by Salesforce.
	 */
	lookupLayoutable?: boolean;
	/**
	 * Whether records can be merged.
	 */
	mergeable?: boolean;
	/**
	 * Whether most-recently-used tracking is enabled.
	 */
	mruEnabled?: boolean;
	/**
	 * Object API name.
	 */
	name?: string;
	/**
	 * Named layout definitions.
	 *
	 * Items: One Salesforce named layout definition.
	 */
	namedLayoutInfos?: Record<string, JSONValue>[];
	/**
	 * Network scope field API name, when applicable.
	 */
	networkScopeFieldName?: string;
	/**
	 * Whether the object can be queried with SOQL.
	 */
	queryable?: boolean;
	/**
	 * Record type definitions for the object.
	 *
	 * Items: One Salesforce record type definition.
	 */
	recordTypeInfos?: Record<string, JSONValue>[];
	/**
	 * Whether records can be replicated.
	 */
	replicateable?: boolean;
	/**
	 * Whether records can be retrieved.
	 */
	retrieveable?: boolean;
	/**
	 * Whether search layouts are available.
	 */
	searchLayoutable?: boolean;
	/**
	 * Whether the object can be searched with SOSL.
	 */
	searchable?: boolean;
	/**
	 * Level of detail of this describe response, for example FULL.
	 */
	sobjectDescribeOption?: string;
	/**
	 * Supported data scopes for the object.
	 *
	 * Items: One Salesforce supported scope definition.
	 */
	supportedScopes?: Record<string, JSONValue>[];
	/**
	 * Whether triggers are supported.
	 */
	triggerable?: boolean;
	/**
	 * Whether deleted records can be restored.
	 */
	undeletable?: boolean;
	/**
	 * Whether records can be updated.
	 */
	updateable?: boolean;
	/**
	 * URLs for object metadata and record operations.
	 */
	urls?: Record<string, JSONValue>;
};

/**
 * Describe an object
 * Returns field definitions for one Salesforce object.
 */
export async function describeObject(
	this: EndpointFunctionThis,
	payload: {
		input: DescribeObjectInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DescribeObjectOutput> {
	const response = await this.endpointCaller<DescribeObjectOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'describeObject',
		},
		payload,
	);
	return response.output;
}
