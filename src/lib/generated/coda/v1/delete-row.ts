// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteRowInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.
	 */
	tableIdOrName: string;
	/**
	 * ID or name of the row. Names are discouraged because users can easily change them. When a name matches several rows, an arbitrary one is deleted. Example ID: `i-tuVwxYz`. Use the listRows endpoint to find row IDs.
	 */
	rowIdOrName: string;
};

export type DeleteRowOutput = {
	/**
	 * An arbitrary unique identifier for this request.
	 */
	requestId?: string;
	/**
	 * ID of the row to be deleted.
	 */
	id?: string;
};

/**
 * Delete a row
 * Deletes a row from a table or view.
 */
export async function deleteRow(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteRowInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteRowOutput> {
	const response = await this.endpointCaller<DeleteRowOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'deleteRow',
		},
		payload,
	);
	return response.output;
}
