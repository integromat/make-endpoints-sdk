// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListControlsInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * Determines how the controls are sorted.
	 */
	sortBy?: '' | 'name';
	/**
	 * Maximum number of controls to return in this call. The API defaults to 25.
	 */
	limit?: number;
	/**
	 * Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.
	 */
	pageToken?: string;
};

export type ListControlsOutput = {
	/**
	 * The controls on this page of results.
	 *
	 * Items: Reference to a control.
	 */
	items?: {
		/**
		 * ID of the control.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `control`.
		 */
		type?: string;
		/**
		 * API link to the control.
		 */
		href?: string;
		/**
		 * Name of the control.
		 */
		name?: string;
		/**
		 * Reference to the page containing the control.
		 */
		parent?: {
			/**
			 * ID of the parent page.
			 */
			id?: string;
			/**
			 * The type of this resource. Always `page`.
			 */
			type?: string;
			/**
			 * API link to the parent page.
			 */
			href?: string;
			/**
			 * Browser-friendly link to the parent page.
			 */
			browserLink?: string;
			/**
			 * Name of the parent page.
			 */
			name?: string;
		};
	}[];
	/**
	 * API link to these results.
	 */
	href?: string;
	/**
	 * Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.
	 */
	nextPageToken?: string;
	/**
	 * API link to the next page of results. Absent when there are no more results.
	 */
	nextPageLink?: string;
};

/**
 * List controls
 * Returns a list of controls in a doc.
 */
export async function listControls(
	this: EndpointFunctionThis,
	payload: {
		input: ListControlsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListControlsOutput> {
	const response = await this.endpointCaller<ListControlsOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'listControls',
		},
		payload,
	);
	return response.output;
}
