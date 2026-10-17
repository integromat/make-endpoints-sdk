// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateTaskInput = {
	/**
	 * JSON object of task property internal names and API-formatted values. Include required `hs_timestamp` as Unix milliseconds or a UTC timestamp.
	 */
	properties: Record<string, JSONValue>;
	/**
	 * Existing CRM records to associate with the new task in the same request.
	 */
	associations?: {
		/**
		 * The existing CRM record to associate with the task.
		 */
		to: {
			/**
			 * The ID of the target CRM record.
			 */
			id: string;
		};
		/**
		 * One or more directional association types between the task and the target record.
		 */
		types: {
			/**
			 * The HubSpot category of the association type.
			 */
			associationCategory: 'HUBSPOT_DEFINED' | 'USER_DEFINED' | 'INTEGRATOR_DEFINED' | 'WORK';
			/**
			 * The numeric association type ID for the task-to-record direction.
			 */
			associationTypeId: number;
		}[];
	}[];
};

export type CreateTaskOutput = {
	/**
	 * The unique ID of the created task.
	 */
	id?: string;
	/**
	 * Property values returned for the created task.
	 */
	properties?: Record<string, JSONValue>;
	/**
	 * Date and time when the task was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the task was last updated.
	 */
	updatedAt?: string;
	/**
	 * Whether the task is archived.
	 */
	archived?: boolean;
	/**
	 * Date and time when the task was archived, when applicable.
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
	 * URL associated with the created task, when returned.
	 */
	url?: string;
	/**
	 * Warnings returned while creating the task.
	 *
	 * Items: A warning returned while creating the task.
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
 * Create a task
 * Creates a task with the given properties and returns the created object.
 */
export async function createTask(
	this: EndpointFunctionThis,
	payload: {
		input: CreateTaskInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateTaskOutput> {
	const response = await this.endpointCaller<CreateTaskOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createTask',
		},
		payload,
	);
	return response.output;
}
