// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateCompanyInput = {
	/**
	 * JSON object of standard company property internal names and string values. Include at least `name` or `domain`; prefer `domain` when available.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new company in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the company.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the company and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the company-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateCompanyOutput = {
	/**
	 * The unique ID of the created company.
	 */
	id?: string;
	/**
	 * Property values returned for the created company.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the company was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the company was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the company is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the company was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Identifier used to trace the object write request.
	 */
	objectWriteTraceId?: string;
	/**
	 * Property values together with their history, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * URL associated with the created company, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the company.
	 *
	 * Items: A warning returned while creating the company.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Additional warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Warning message.
		 */
		message?: string;
	}[];
};

/**
 * Create a company
 * Creates a company with the given properties and returns the created object.
 */
export async function createCompany(
	this: EndpointFunctionThis,
	payload: {
		input: CreateCompanyInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateCompanyOutput> {
	const response = await this.endpointCaller<CreateCompanyOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createCompany',
		},
		payload,
	);
	return response.output;
}
