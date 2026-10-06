// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type BatchModifyMessagesInput = {
	/**
	 * The ID of the message to modify.
	 */
	ids: string[];
	/**
	 * A list of label IDs to add to this message. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.
	 */
	addLabelIds?: string[];
	/**
	 * A list of label IDs to remove from this message. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.
	 */
	removeLabelIds?: string[];
	/**
	 * A list of classification label values to add. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.
	 */
	addClassificationLabels?: {
		/**
		 * The canonical or raw alphanumeric classification label ID.
		 */
		labelId?: string;
		/**
		 * Field values for the given classification label ID.
		 */
		fields?: {
			/**
			 * The field ID for the classification label value.
			 */
			fieldId?: string;
			/**
			 * Selection choice ID for the selection option.
			 */
			selection?: string;
		}[];
	}[];
	/**
	 * A list of classification label values to remove from this message. At least one of **Add label IDs**, **Remove label IDs**, **Add classification labels**, or **Remove classification label IDs** must be provided.
	 */
	removeClassificationLabelIds?: string[];
};

export type BatchModifyMessagesOutput = Record<string, never>;

/**
 * Batch modify messages
 * Modifies the labels and the classification label values on the specified messages.
 */
export async function batchModifyMessages(
	this: EndpointFunctionThis,
	payload: {
		input: BatchModifyMessagesInput;
		connectionId: number;
	},
): Promise<BatchModifyMessagesOutput> {
	const response = await this.endpointCaller<BatchModifyMessagesOutput>(
		{
			appName: 'google-email',
			appVersion: 4,
			endpointName: 'batchModifyMessages',
		},
		payload,
	);
	return response.output;
}
