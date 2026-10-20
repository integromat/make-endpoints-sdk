// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetPipelineInput = {
	/**
	 * The CRM object family whose pipeline is requested. Deals requires `crm.objects.deals.read`; Tickets requires `tickets`.
	 */
	objectType: 'deals' | 'tickets';
	/**
	 * The unique HubSpot ID of the pipeline to retrieve.
	 */
	pipelineId: string;
};

export type GetPipelineOutput = {
	/**
	 * Whether the pipeline is archived.
	 */
	archived?: boolean;
	/**
	 * When the pipeline was archived.
	 */
	archivedAt?: string;
	/**
	 * When the pipeline was created.
	 */
	createdAt?: string;
	/**
	 * The pipeline's display order.
	 */
	displayOrder?: number;
	/**
	 * The pipeline ID.
	 */
	id?: string;
	/**
	 * The pipeline's display label.
	 */
	label?: string;
	/**
	 * Stages in the pipeline.
	 *
	 * Items: A pipeline stage.
	 */
	stages?: {
		/**
		 * Whether the stage is archived.
		 */
		archived?: boolean;
		/**
		 * When the stage was archived.
		 */
		archivedAt?: string;
		/**
		 * When the stage was created.
		 */
		createdAt?: string;
		/**
		 * The stage's display order.
		 */
		displayOrder?: number;
		/**
		 * The stage ID.
		 */
		id?: string;
		/**
		 * The stage display label.
		 */
		label?: string;
		/**
		 * Object-specific stage metadata.
		 */
		metadata?: Record<string, JSONValue>;
		/**
		 * When the stage was last updated.
		 */
		updatedAt?: string;
		/**
		 * The permission mode controlling stage updates.
		 */
		writePermissions?: string;
	}[];
	/**
	 * When the pipeline was last updated.
	 */
	updatedAt?: string;
};

/**
 * Get a pipeline
 * Returns information about a specific pipeline (its stages, display order, and metadata) for a given CRM object type.
 */
export async function getPipeline(
	this: EndpointFunctionThis,
	payload: {
		input: GetPipelineInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetPipelineOutput> {
	const response = await this.endpointCaller<GetPipelineOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'getPipeline',
		},
		payload,
	);
	return response.output;
}
