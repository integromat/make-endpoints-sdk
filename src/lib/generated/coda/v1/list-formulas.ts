// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type ListFormulasInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * Determines how the formulas are sorted.
	 */
	sortBy?: '' | 'name';
	/**
	 * Maximum number of formulas to return in this call. The API defaults to 25.
	 */
	limit?: number;
	/**
	 * Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.
	 */
	pageToken?: string;
};

export type ListFormulasOutput = {
	/**
	 * The formulas on this page of results.
	 *
	 * Items: Reference to a named formula.
	 */
	items?: {
		/**
		 * ID of the formula.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `formula`.
		 */
		type?: string;
		/**
		 * API link to the formula.
		 */
		href?: string;
		/**
		 * Name of the formula.
		 */
		name?: string;
		/**
		 * Reference to the page containing the formula.
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
 * List formulas
 * Returns a list of named formulas in a doc.
 */
export async function listFormulas(
	this: EndpointFunctionThis,
	payload: {
		input: ListFormulasInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListFormulasOutput>> {
	const response = await this.endpointCaller<ListFormulasOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'listFormulas',
		},
		payload,
	);
	return response;
}
