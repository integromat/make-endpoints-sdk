// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type EditALabelInput = {
	/**
	 * The ID of the label.
	 */
	id: string;
	/**
	 * The new name of the label, up to 16384 characters long.
	 */
	name?: string;
	/**
	 * The new color of the label.
	 */
	color?:
		| ''
		| 'green'
		| 'yellow'
		| 'orange'
		| 'red'
		| 'purple'
		| 'blue'
		| 'sky'
		| 'lime'
		| 'pink'
		| 'black';
};

export type EditALabelOutput = {
	/**
	 * The ID of the label.
	 */
	id?: string;
	/**
	 * The ID of the board the label is on.
	 */
	idBoard?: string;
	/**
	 * The name displayed for the label.
	 */
	name?: string;
	/**
	 * The color of the label. Empty means no color and the label is not shown on the front of cards.
	 */
	color?: string;
	/**
	 * The number of cards the label is used on.
	 */
	uses?: number;
};

/**
 * Edit a label
 * Updates the name or color of a label.
 */
export async function editAlabel(
	this: EndpointFunctionThis,
	payload: {
		input: EditALabelInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EditALabelOutput> {
	const response = await this.endpointCaller<EditALabelOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'editALabel',
		},
		payload,
	);
	return response.output;
}
