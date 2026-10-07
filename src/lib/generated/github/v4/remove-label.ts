// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type RemoveLabelInput = {
	/**
	 * The node ID of the labelable object (issue or pull request) to remove labels from.
	 */
	labelableId: string;
	/**
	 * An array of node IDs of the labels to remove from the issue or pull request.
	 */
	labelIds: string[];
};

export type RemoveLabelOutput = {
	data?: {
		removeLabelsFromLabelable?: {
			/**
			 * A unique identifier for the client performing the mutation.
			 */
			clientMutationId?: string;
			/**
			 * The item that was unlabeled.
			 */
			labelable?: {
				/**
				 * The labels remaining on the labelable after the mutation.
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
 * Remove label
 * Removes labels from an issue or pull request.
 */
export async function removeLabel(
	this: EndpointFunctionThis,
	payload: {
		input: RemoveLabelInput;
		connectionId: number;
	},
): Promise<RemoveLabelOutput> {
	const response = await this.endpointCaller<RemoveLabelOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'removeLabel',
		},
		payload,
	);
	return response.output;
}
