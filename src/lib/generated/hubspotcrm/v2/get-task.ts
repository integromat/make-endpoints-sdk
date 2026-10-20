// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetTaskInput = {
	/**
	 * Task ID or unique property value when ID property is set.
	 */
	id: string;
	/**
	 * True retrieves an archived task.
	 */
	archived?: boolean;
	/**
	 * Associated object types to return.
	 *
	 * Items: CRM object type such as contacts.
	 */
	associations?: string[];
	/**
	 * Unique property whose value is supplied as the path ID.
	 */
	idProperty?: string;
	/**
	 * Task properties to return.
	 *
	 * Items: Task property internal name.
	 */
	properties?: string[];
	/**
	 * Task properties to return with history.
	 *
	 * Items: Task property internal name whose history is requested.
	 */
	propertiesWithHistory?: string[];
};

export type GetTaskOutput = {
	/**
	 * Task record ID.
	 */
	id?: string;
	/**
	 * Requested task properties.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Creation time.
	 */
	createdAt?: string;
	/**
	 * Last update time.
	 */
	updatedAt?: string;
	/**
	 * Whether archived.
	 */
	archived?: boolean;
	/**
	 * Archive time.
	 */
	archivedAt?: string;
	/**
	 * Requested associated IDs.
	 */
	associations?: Record<string, JSONValue>;
	/**
	 * HubSpot write trace ID.
	 */
	objectWriteTraceId?: string;
	/**
	 * Properties with historical values.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * HubSpot record URL.
	 */
	url?: string;
	/**
	 * HubSpot warnings.
	 *
	 * Items: One warning.
	 */
	warnings?: {
		/**
		 * Warning category.
		 */
		category?: string;
		/**
		 * Warning context.
		 */
		context?: Record<string, JSONValue>;
		/**
		 * Warning message.
		 */
		message?: string;
	}[];
};

/**
 * Get a task
 * Returns information about a specific task.
 */
export async function getTask(
	this: EndpointFunctionThis,
	payload: {
		input: GetTaskInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetTaskOutput> {
	const response = await this.endpointCaller<GetTaskOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getTask',
		},
		payload,
	);
	return response.output;
}
