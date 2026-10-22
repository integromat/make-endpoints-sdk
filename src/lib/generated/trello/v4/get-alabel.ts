// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetALabelInput = {
	/**
	 * The ID of the label.
	 */
	id: string;
	/**
	 * The label fields to return. Default: `all`.
	 */
	fields?: '' | 'all' | 'color' | 'idBoard' | 'name' | 'uses';
};

export type GetALabelOutput = {
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
 * Get a label
 * Returns a label.
 */
export async function getAlabel(
	this: EndpointFunctionThis,
	payload: {
		input: GetALabelInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetALabelOutput> {
	const response = await this.endpointCaller<GetALabelOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'getALabel',
		},
		payload,
	);
	return response.output;
}
