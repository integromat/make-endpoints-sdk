// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetRecordDefinitionsInput = {
	/**
	 * Script IDs of the record types to return definitions for. Use the List record types endpoint to discover valid values. Matching is case-insensitive, so the script IDs returned by that endpoint can be passed through unchanged.
	 *
	 * Items: A single record type script ID, for example `customer`, `salesOrder`, or `customrecord_my_type`.
	 */
	select: string[];
};

export type GetRecordDefinitionsOutput = {
	/**
	 * Version of the OpenAPI specification this document conforms to, for example `3.0.1`.
	 */
	openapi?: string;
	/**
	 * Metadata describing the generated document.
	 */
	info?: {
		/**
		 * Generation timestamp plus the account ID, user, and role the document was generated for.
		 */
		description?: string;
		/**
		 * URL of the NetSuite terms of service.
		 */
		termsOfService?: string;
		/**
		 * Oracle NetSuite contact details.
		 */
		contact?: {
			/**
			 * Contact name, always `Oracle NetSuite`.
			 */
			name?: string;
			/**
			 * NetSuite website URL.
			 */
			url?: string;
			/**
			 * NetSuite contact email address.
			 */
			email?: string;
		};
		/**
		 * Version of the Record Service described, for example `v1`.
		 */
		version?: string;
		/**
		 * Vendor extension identifying the framework that generated the document.
		 */
		'x-framework'?: {
			/**
			 * Framework name, always `oracle-netsuite-suitetalk-rest`.
			 */
			name?: string;
		};
	};
	/**
	 * Base URLs the documented operations are served from.
	 *
	 * Items: A single server entry.
	 */
	servers?: {
		/**
		 * Account-specific base URL of the REST Record Service.
		 */
		url?: string;
	}[];
	/**
	 * Authentication schemes the documented operations accept, for example `OAuth_1.0_authorization`.
	 *
	 * Items: A single security requirement, keyed by scheme name with an array of required scopes.
	 */
	security?: Record<string, JSONValue>[];
	/**
	 * Request paths available for the selected record types, keyed by path such as `/noteType` and `/noteType/{id}`. Each entry lists the supported HTTP methods with their query parameters, request bodies, and response schemas. Keys depend on the record types requested, so they are not enumerated here.
	 */
	paths?: Record<string, JSONValue>;
	/**
	 * Reusable definitions referenced from the paths.
	 */
	components?: {
		/**
		 * Field definitions for the selected record types, keyed by schema name. Each schema lists the record's fields with their types and formats, its sublists, and any enumerated values. Keys depend on the record types requested, so they are not enumerated here.
		 */
		schemas?: Record<string, JSONValue>;
		/**
		 * Definitions of the authentication schemes listed under `security`.
		 */
		securitySchemes?: Record<string, JSONValue>;
	};
};

/**
 * Get record definitions
 * Returns the OpenAPI 3.0 definitions of the specified NetSuite record types, including their fields, field types, sublists, and supported HTTP methods.
 */
export async function getRecordDefinitions(
	this: EndpointFunctionThis,
	payload: {
		input: GetRecordDefinitionsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetRecordDefinitionsOutput> {
	const response = await this.endpointCaller<GetRecordDefinitionsOutput>(
		{
			appName: 'netsuite',
			appVersion: 2,
			endpointName: 'getRecordDefinitions',
		},
		payload,
	);
	return response.output;
}
