// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RetrieveLabelsInput = {
	/**
	 * The ID or short link of the board.
	 */
	id: string;
	/**
	 * The label fields to return. Default: `all`.
	 */
	fields?: '' | 'all' | 'color' | 'idBoard' | 'name' | 'uses';
	/**
	 * The number of labels to return, from 0 to 1000. Default: `50`.
	 */
	limit?: number;
};

export type RetrieveLabelsOutput = {
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
 * List labels
 * Lists the labels on a board.
 */
export async function retrieveLabels(
	this: EndpointFunctionThis,
	payload: {
		input: RetrieveLabelsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<RetrieveLabelsOutput> {
	const response = await this.endpointCaller<RetrieveLabelsOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'retrieveLabels',
		},
		payload,
	);
	return response.output;
}
