// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetThreadInput = {
	/**
	 * The ID of the thread to retrieve.
	 */
	id: string;
	/**
	 * The format to return the messages in.
	 */
	format?: '' | 'minimal' | 'full' | 'metadata';
	/**
	 * When given and format is metadata, only include headers specified.
	 */
	metadataHeaders?: string[];
};

export type GetThreadOutput = {
	/**
	 * The unique ID of the thread.
	 */
	id?: string;
	/**
	 * A short part of the message text.
	 */
	snippet?: string;
	/**
	 * The ID of the last history record that modified this thread.
	 */
	historyId?: string;
	/**
	 * The list of messages in the thread.
	 */
	messages?: {
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
	}[];
};

/**
 * Get a thread
 * Returns information about a specific thread.
 */
export async function getThread(
	this: EndpointFunctionThis,
	payload: {
		input: GetThreadInput;
		connectionId: number;
	},
): Promise<GetThreadOutput> {
	const response = await this.endpointCaller<GetThreadOutput>(
		{
			appName: 'google-email',
			appVersion: 4,
			endpointName: 'getThread',
		},
		payload,
	);
	return response.output;
}
