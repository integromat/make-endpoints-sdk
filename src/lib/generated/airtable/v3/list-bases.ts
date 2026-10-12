// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListBasesInput = {
	/**
	 * Pagination cursor returned by a previous call to this endpoint (as 'Offset' in the response). Pass it here to fetch the next page of bases.
	 */
	offset?: string;
};

export type ListBasesOutput = {
	/**
	 * The page of bases returned by this call (up to 1000).
	 */
	bases?: {
		/**
		 * Unique identifier of the base, for example `appLkNDICXNqxSDhG`.
		 */
		id?: string;
		/**
		 * Name of the base as shown in the Airtable UI.
		 */
		name?: string;
		/**
		 * Access level the connected account holds on the base. One of: `none`, `read`, `comment`, `edit`, `create`, or `interfaceOnly`.
		 */
		permissionLevel?: string;
	}[];
	/**
	 * Pagination cursor. Present only when more bases remain; pass it back as the 'Offset' input parameter to fetch the next page.
	 */
	offset?: string;
};

/**
 * List bases
 * Returns detailed list of all bases.
 */
export async function listBases(
	this: EndpointFunctionThis,
	payload: {
		input: ListBasesInput;
		connectionId: number;
	},
): Promise<ListBasesOutput> {
	const response = await this.endpointCaller<ListBasesOutput>(
		{
			appName: 'airtable',
			appVersion: 3,
			endpointName: 'listBases',
		},
		payload,
	);
	return response.output;
}
