// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListFormsInput = {
	/**
	 * The form types to include. HubSpot, Captured, Flow and Blog comment filter by that form type; All includes all supported form types.
	 *
	 * Items: A supported HubSpot form type.
	 */
	formTypes?: ('' | 'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all')[];
	/**
	 * The `paging.next.after` value from the previous response.
	 */
	after?: string;
	/**
	 * Whether to return only archived forms. When true, only archived forms are returned.
	 */
	archived?: boolean;
	/**
	 * The number of forms to request in this page.
	 */
	limit?: number;
};

export type ListFormsOutput = {
	/**
	 * The form definitions returned in this page.
	 *
	 * Items: A HubSpotFormDefinition returned by the legacy API.
	 */
	results?: {
		/**
		 * Whether the form is archived.
		 */
		archived?: boolean;
		/**
		 * The date and time when the form was archived.
		 */
		archivedAt?: string;
		/**
		 * The form's official complex or polymorphic configuration.
		 */
		configuration?: Record<string, JSONValue>;
		/**
		 * The date and time when the form was created.
		 */
		createdAt?: string;
		/**
		 * The form's official complex or polymorphic display options.
		 */
		displayOptions?: Record<string, JSONValue>;
		/**
		 * The field groups in the form definition.
		 *
		 * Items: An official complex or polymorphic field group definition.
		 */
		fieldGroups?: Record<string, JSONValue>[];
		/**
		 * The form type.
		 */
		formType?: string;
		/**
		 * The unique form identifier.
		 */
		id?: string;
		/**
		 * The form's official complex or polymorphic legal consent options.
		 */
		legalConsentOptions?: Record<string, JSONValue>;
		/**
		 * The form name.
		 */
		name?: string;
		/**
		 * The date and time when the form was last updated.
		 */
		updatedAt?: string;
	}[];
	/**
	 * Cursor information for the next page.
	 */
	paging?: {
		/**
		 * Information for requesting the next page.
		 */
		next?: {
			/**
			 * The cursor for the next page.
			 */
			after?: string;
			/**
			 * The URL for the next page.
			 */
			link?: string;
		};
	};
};

/**
 * List forms
 * Returns one page of legacy HubSpot marketing form definitions.
 */
export async function listForms(
	this: EndpointFunctionThis,
	payload: {
		input: ListFormsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListFormsOutput> {
	const response = await this.endpointCaller<ListFormsOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'listForms',
		},
		payload,
	);
	return response.output;
}
