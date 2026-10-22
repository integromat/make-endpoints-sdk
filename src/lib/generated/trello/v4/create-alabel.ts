// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateALabelInput = {
	/**
	 * The ID of the board to create the label on.
	 */
	idBoard: string;
	/**
	 * The name displayed for the label, up to 16384 characters long.
	 */
	name: string;
	/**
	 * The color of the label.
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

export type CreateALabelOutput = {
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
 * Create a label
 * Creates a new label on a board.
 */
export async function createAlabel(
	this: EndpointFunctionThis,
	payload: {
		input: CreateALabelInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateALabelOutput> {
	const response = await this.endpointCaller<CreateALabelOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'createALabel',
		},
		payload,
	);
	return response.output;
}
