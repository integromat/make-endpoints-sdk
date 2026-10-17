// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListTimelineEventTemplatesInput = Record<string, never>;

export type ListTimelineEventTemplatesOutput = {
	/**
	 * The timeline event templates owned by the app.
	 *
	 * Items: A legacy HubSpot timeline event template.
	 */
	results?: {
		/**
		 * The unique timeline event template ID.
		 */
		id?: string;
		/**
		 * The template name.
		 */
		name?: string;
		/**
		 * The CRM object type to which events using this template belong.
		 */
		objectType?: string;
		/**
		 * The date and time when the template was created.
		 */
		createdAt?: string;
		/**
		 * The date and time when the template was last updated.
		 */
		updatedAt?: string;
		/**
		 * The template used to render an event header.
		 */
		headerTemplate?: string;
		/**
		 * The template used to render event details.
		 */
		detailTemplate?: string;
		/**
		 * The tokens available to the timeline event template.
		 *
		 * Items: A token defined for the timeline event template.
		 */
		tokens?: {
			/**
			 * The token's internal name.
			 */
			name?: string;
			/**
			 * The token's user-facing label.
			 */
			label?: string;
			/**
			 * The token data type.
			 */
			type?: string;
			/**
			 * The date and time when the token was created.
			 */
			createdAt?: string;
			/**
			 * The date and time when the token was last updated.
			 */
			updatedAt?: string;
			/**
			 * The CRM object property linked to the token.
			 */
			objectPropertyName?: string;
			/**
			 * The selectable values configured for the token.
			 *
			 * Items: A selectable token option.
			 */
			options?: {
				/**
				 * The option's user-facing label.
				 */
				label?: string;
				/**
				 * The option value.
				 */
				value?: string;
			}[];
		}[];
	}[];
};

/**
 * List timeline event templates
 * Returns the legacy timeline event templates owned by a HubSpot public app.
 */
export async function listTimelineEventTemplates(
	this: EndpointFunctionThis,
	payload: {
		input: ListTimelineEventTemplatesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListTimelineEventTemplatesOutput> {
	const response = await this.endpointCaller<ListTimelineEventTemplatesOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'listTimelineEventTemplates',
		},
		payload,
	);
	return response.output;
}
