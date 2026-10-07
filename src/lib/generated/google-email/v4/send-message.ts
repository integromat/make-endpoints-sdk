// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type SendMessageInput = {
	/**
	 * Enter a recipient email address.
	 */
	to: string[];
	subject?: string;
	/**
	 * Select how you want to provide the body contents.
	 */
	bodyType: 'rawHtml' | 'collection';
	attachments?: {
		/**
		 * File name, including the extension, e.g.`invoice.xml`.
		 */
		filename: string;
		/**
		 * Binary or text data to be uploaded to a selected folder. [More information about working with files](kb://mapping/working-with-files.html).
		 */
		data: string;
	}[];
	/**
	 * For example: `"John Doe" <johndoe@mail.com>`.
	 */
	from?: string;
	cc?: string[];
	bcc?: string[];
	emailHeaders?: {
		key: string;
		value?: string;
	}[];
	/**
	 * The `Message-Id` header that can be retrieved from the **Get a thread** endpoint. Used to send a message as a reply to an existing message.
	 */
	messageId?: string;
};

export type SendMessageOutput = {
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
 * Send a message
 * Sends a new message.
 */
export async function sendMessage(
	this: EndpointFunctionThis,
	payload: {
		input: SendMessageInput;
		connectionId: number;
	},
): Promise<SendMessageOutput> {
	const response = await this.endpointCaller<SendMessageOutput>(
		{
			appName: 'google-email',
			appVersion: 4,
			endpointName: 'sendMessage',
		},
		payload,
	);
	return response.output;
}
