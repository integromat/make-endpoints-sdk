// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListPipelinesInput = {
	/**
	 * The CRM object type whose pipelines should be returned. Deals requires `crm.objects.deals.read`; Tickets requires `tickets`.
	 */
	objectType: 'deals' | 'tickets';
};

export type ListPipelinesOutput = {
	/**
	 * The pipelines for the selected object type.
	 *
	 * Items: A HubSpot CRM pipeline.
	 */
	results?: {
		/**
		 * The unique pipeline ID.
		 */
		id?: string;
		/**
		 * The pipeline's user-facing label.
		 */
		label?: string;
		/**
		 * The pipeline's display order.
		 */
		displayOrder?: number;
		/**
		 * The date and time when the pipeline was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the pipeline was last updated.
		 */
		updatedAt?: string;
		/**
		 * Whether the pipeline is archived.
		 */
		archived?: boolean;
		/**
		 * The date and time when the pipeline was archived.
		 */
		archivedAt?: string;
		/**
		 * The ordered stages in the pipeline.
		 *
		 * Items: A stage within the pipeline.
		 */
		stages?: {
			/**
			 * The unique stage ID.
			 */
			id?: string;
			/**
			 * The stage's user-facing label.
			 */
			label?: string;
			/**
			 * The stage's display order.
			 */
			displayOrder?: number;
			/**
			 * HubSpot's object-specific string-valued metadata map for the stage.
			 */
			metadata?: Record<string, JSONValue>;
			/**
			 * The date and time when the stage was created.
			 */
			createdAt?: string;
			/**
			 * The date and time when the stage was last updated.
			 */
			updatedAt?: string;
			/**
			 * Whether the stage is archived.
			 */
			archived?: boolean;
			/**
			 * The date and time when the stage was archived.
			 */
			archivedAt?: string;
			/**
			 * The write-permission setting for the stage.
			 */
			writePermissions?: string;
		}[];
	}[];
};

/**
 * List pipelines
 * Returns all pipelines and stages for deals or tickets.
 */
export async function listPipelines(
	this: EndpointFunctionThis,
	payload: {
		input: ListPipelinesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListPipelinesOutput> {
	const response = await this.endpointCaller<ListPipelinesOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'listPipelines',
		},
		payload,
	);
	return response.output;
}
