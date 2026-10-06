// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ModifyMessageLabelsInput = {
	/**
	 * The ID of the message to modify.
	 */
	id: string;
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

export type ModifyMessageLabelsOutput = {
	/**
	 * The immutable ID of the message.
	 */
	id?: string;
	/**
	 * The ID of the thread the message belongs to.
	 */
	threadId?: string;
	/**
	 * List of IDs of labels applied to this message.
	 */
	labelIds?: string[];
	/**
	 * A short part of the message text.
	 */
	snippet?: string;
	/**
	 * The ID of the last history record that modified this message.
	 */
	historyId?: string;
	/**
	 * The internal message creation timestamp, which determines ordering in the inbox.
	 */
	internalDate?: string;
	/**
	 * The parsed email structure in the message parts.
	 */
	payload?: {
		/**
		 * The immutable ID of the message part.
		 */
		partId?: string;
		/**
		 * The MIME type of the message part.
		 */
		mimeType?: string;
		/**
		 * The filename of the attachment.
		 */
		filename?: string;
		/**
		 * List of headers on this message part.
		 */
		headers?: {
			/**
			 * The name of the header before the `:` separator. For example, `To`.
			 */
			name?: string;
			/**
			 * The value of the header after the `:` separator. For example, `someuser@example.com`.
			 */
			value?: string;
		}[];
		/**
		 * The message part body for this part, which may be empty for container MIME message parts.
		 */
		body?: {
			/**
			 * When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.
			 */
			attachmentId?: string;
			/**
			 * Number of bytes for the message part data.
			 */
			size?: number;
			/**
			 * The body data of a MIME message part as a base64url encoded string.
			 */
			data?: string;
		};
		/**
		 * The child MIME message parts of this part.
		 */
		parts?: {
			/**
			 * The immutable ID of the message part.
			 */
			partId?: string;
			/**
			 * The MIME type of the message part.
			 */
			mimeType?: string;
			/**
			 * The filename of the attachment.
			 */
			filename?: string;
			/**
			 * List of headers on this message part.
			 */
			headers?: {
				/**
				 * The name of the header before the `:` separator. For example, `To`.
				 */
				name?: string;
				/**
				 * The value of the header after the `:` separator. For example, `someuser@example.com`.
				 */
				value?: string;
			}[];
			/**
			 * The message part body for this part, which may be empty for container MIME message parts.
			 */
			body?: {
				/**
				 * When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request.
				 */
				attachmentId?: string;
				/**
				 * Number of bytes for the message part data.
				 */
				size?: number;
				/**
				 * The body data of a MIME message part as a base64url encoded string.
				 */
				data?: string;
			};
			/**
			 * The child MIME message parts of this part.
			 */
			parts?: JSONValue[];
		}[];
	};
	/**
	 * Estimated size in bytes of the message.
	 */
	sizeEstimate?: number;
	/**
	 * The entire email message in an RFC 2822 formatted and base64url encoded string.
	 */
	raw?: string;
	classificationLabelValues?: {
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
};

/**
 * Update message labels
 * Updates labels of an existing message.
 */
export async function modifyMessageLabels(
	this: EndpointFunctionThis,
	payload: {
		input: ModifyMessageLabelsInput;
		connectionId: number;
	},
): Promise<ModifyMessageLabelsOutput> {
	const response = await this.endpointCaller<ModifyMessageLabelsOutput>(
		{
			appName: 'google-email',
			appVersion: 4,
			endpointName: 'modifyMessageLabels',
		},
		payload,
	);
	return response.output;
}
