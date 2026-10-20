// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetLabelInput = {
	/**
	 * The ID of the personal label to return.
	 */
	label_id: string;
};

export type GetLabelOutput = {
	/**
	 * The ID of the label.
	 */
	id?: string;
	/**
	 * The name of the label.
	 */
	name?: string;
	/**
	 * The color of the label icon, for example `berry_red`.
	 */
	color?: string;
	/**
	 * The position of the label in the label list.
	 */
	order?: number;
	/**
	 * Whether the label is a favorite.
	 */
	is_favorite?: boolean;
};

/**
 * Get a label
 * Returns a personal label by its ID.
 */
export async function getLabel(
	this: EndpointFunctionThis,
	payload: {
		input: GetLabelInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetLabelOutput> {
	const response = await this.endpointCaller<GetLabelOutput>(
		{
			appName: 'todoist',
			appVersion: 3,
			endpointName: 'getLabel',
		},
		payload,
	);
	return response.output;
}
