// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateTaskInput = {
	/**
	 * The task record ID, or the value of the unique property selected in ID property.
	 */
	id: string;
	/**
	 * The internal name of a unique task property used to identify the task. Leave empty when ID contains the record ID.
	 */
	idProperty?: string;
	/**
	 * JSON object of task property internal names and string values. Only supplied properties are updated. Pass an empty string to clear a property. Invalid values, unknown properties, or read-only properties cause an error.
	 */
	properties: Record<string, JSONValue>;
};

export type UpdateTaskOutput = {
	/**
	 * The unique ID of the updated task.
	 */
	id: string;
	/**
	 * Property values returned for the updated task.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Date and time when the task was created.
	 */
	createdAt: string;
	/**
	 * Date and time when the task was last updated.
	 */
	updatedAt: string;
	/**
	 * Whether the task is archived.
	 */
	archived: boolean;
	/**
	 * Date and time when the task was archived, when applicable.
	 */
	archivedAt?: string;
	/**
	 * Identifier used to trace the task update request, when returned.
	 */
	objectWriteTraceId?: string;
	/**
	 * Task property values together with their history, when returned.
	 */
	propertiesWithHistory?: Record<string, JSONValue>;
	/**
	 * URL associated with the updated task, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while updating the task.
	 *
	 * Items: A warning returned by HubSpot.
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
 * Update a task
 * Updates the properties of an existing task and returns the updated object.
 */
export async function updateTask(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateTaskInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateTaskOutput> {
	const response = await this.endpointCaller<UpdateTaskOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'updateTask',
		},
		payload,
	);
	return response.output;
}
