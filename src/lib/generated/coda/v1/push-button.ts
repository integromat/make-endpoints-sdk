// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type PushButtonInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the table. Names are discouraged because users can easily change them. Example ID: `grid-pqRst-U`. Use the listTables endpoint to find table IDs.
	 */
	tableIdOrName: string;
	/**
	 * ID or name of the row. Names are discouraged because users can easily change them. When a name matches several rows, an arbitrary one is used. Example ID: `i-tuVwxYz`. Use the listRows endpoint to find row IDs.
	 */
	rowIdOrName: string;
	/**
	 * ID or name of the button column. Names are discouraged because users can easily change them. Example ID: `c-tuVwxYz`. Use the listColumns endpoint to find button columns (`format.type` is `button`).
	 */
	columnIdOrName: string;
};

export type PushButtonOutput = {
	/**
	 * An arbitrary unique identifier for this request.
	 */
	requestId?: string;
	/**
	 * ID of the row where the button exists.
	 */
	rowId?: string;
	/**
	 * ID of the column where the button exists.
	 */
	columnId?: string;
};

/**
 * Push a button
 * Pushes a button in a row of a table.
 */
export async function pushButton(
	this: EndpointFunctionThis,
	payload: {
		input: PushButtonInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<PushButtonOutput> {
	const response = await this.endpointCaller<PushButtonOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'pushButton',
		},
		payload,
	);
	return response.output;
}
