// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddLabelsInput = {
	/**
	 * The node ID of the labelable object (issue or pull request) to add labels to.
	 */
	labelableId: string;
	/**
	 * An array of node IDs of the labels to add.
	 */
	labelIds: string[];
};

export type AddLabelsOutput = {
	data?: {
		addLabelsToLabelable?: {
			/**
			 * A unique identifier for the client performing the mutation.
			 */
			clientMutationId?: string;
			/**
			 * The item that was labeled.
			 */
			labelable?: {
				/**
				 * The labels on the labelable after the mutation.
				 */
				labels?: {
					/**
					 * Identifies the total count of labels.
					 */
					totalCount?: number;
					nodes?: {
						/**
						 * The node ID of the label object.
						 */
						id?: string;
						/**
						 * Identifies the label name.
						 */
						name?: string;
						/**
						 * Identifies the label color as a 6 character hex code, without the leading #.
						 */
						color?: string;
						/**
						 * A brief description of this label.
						 */
						description?: string;
						/**
						 * Indicates whether or not this is a default label.
						 */
						isDefault?: boolean;
						/**
						 * The HTTP URL for this label.
						 */
						url?: string;
					}[];
				};
			};
		};
	};
};

/**
 * Add labels
 * Adds labels to an issue or pull request.
 */
export async function addLabels(
	this: EndpointFunctionThis,
	payload: {
		input: AddLabelsInput;
		connectionId: number;
	},
): Promise<AddLabelsOutput> {
	const response = await this.endpointCaller<AddLabelsOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'addLabels',
		},
		payload,
	);
	return response.output;
}
