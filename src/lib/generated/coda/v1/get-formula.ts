// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type GetFormulaInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the formula. Names are discouraged because users can easily change them. Example ID: `f-fgHijkLm`. Use the listFormulas endpoint to find formula IDs.
	 */
	formulaIdOrName: string;
};

export type GetFormulaOutput = {
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
	/**
	 * The current value of the formula: a string, number, or boolean, or an array of such values (arrays may be nested one level).
	 */
	value?: Record<string, JSONValue>;
};

/**
 * Get a formula
 * Returns details about a named formula in a doc, including its current value.
 */
export async function getFormula(
	this: EndpointFunctionThis,
	payload: {
		input: GetFormulaInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetFormulaOutput>> {
	const response = await this.endpointCaller<GetFormulaOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'getFormula',
		},
		payload,
	);
	return response;
}
