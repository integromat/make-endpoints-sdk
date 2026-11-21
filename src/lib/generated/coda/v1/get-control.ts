// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetControlInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the control. Names are discouraged because users can easily change them. Example ID: `ctrl-cDefGhij`. Use the listControls endpoint to find control IDs.
	 */
	controlIdOrName: string;
};

export type GetControlOutput = {
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
	/**
	 * Type of the control: `aiBlock`, `button`, `checkbox`, `datePicker`, `dateRangePicker`, `dateTimePicker`, `lookup`, `multiselect`, `select`, `scale`, `slider`, `reaction`, `textbox`, or `timePicker`.
	 */
	controlType?: string;
	/**
	 * The current value of the control: a string, number, or boolean, or an array of such values (arrays may be nested one level).
	 */
	value?: Record<string, JSONValue>;
};

/**
 * Get a control
 * Returns details about a control in a doc, including its current value.
 */
export async function getControl(
	this: EndpointFunctionThis,
	payload: {
		input: GetControlInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetControlOutput> {
	const response = await this.endpointCaller<GetControlOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'getControl',
		},
		payload,
	);
	return response.output;
}
