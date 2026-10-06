// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type MoveMessageInput = {
	/**
	 * The unique identifier of the message to move.
	 */
	id: string;
	/**
	 * The ID of the destination folder (e.g., `inbox`, `drafts`, `deleteditems`, or a folder ID).
	 */
	destinationId: string;
};

export type MoveMessageOutput = {
	/**
	 * The unique identifier for the message.
	 */
	id?: string;
	/**
	 * The date and time the message was created (ISO 8601, UTC).
	 */
	createdDateTime?: string;
	/**
	 * The date and time the message was last changed (ISO 8601, UTC).
	 */
	lastModifiedDateTime?: string;
	/**
	 * The version of the message.
	 */
	changeKey?: string;
	/**
	 * The categories associated with the message.
	 *
	 * Items: A category name.
	 */
	categories?: string[];
	/**
	 * The date and time the message was received (ISO 8601, UTC).
	 */
	receivedDateTime?: string;
	/**
	 * The date and time the message was sent (ISO 8601, UTC).
	 */
	sentDateTime?: string;
	/**
	 * Whether the message has attachments (excludes inline attachments).
	 */
	hasAttachments?: boolean;
	/**
	 * The message ID in the format specified by [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt).
	 */
	internetMessageId?: string;
	/**
	 * A collection of message headers defined by [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt). Requires `$select` to retrieve.
	 *
	 * Items: An internet message header.
	 */
	internetMessageHeaders?: {
		/**
		 * The header name.
		 */
		name?: string;
		/**
		 * The header value.
		 */
		value?: string;
	}[];
	/**
	 * The subject of the message.
	 */
	subject?: string;
	/**
	 * The body of the message. Can be in HTML or text format.
	 */
	body?: {
		/**
		 * The type of the content. Possible values are `text` and `html`.
		 */
		contentType?: string;
		/**
		 * The content of the body.
		 */
		content?: string;
	};
	/**
	 * The first 255 characters of the message body in text format.
	 */
	bodyPreview?: string;
	/**
	 * The importance of the message. Possible values: `low`, `normal`, `high`.
	 */
	importance?: string;
	/**
	 * The unique identifier for the message's parent mail folder.
	 */
	parentFolderId?: string;
	/**
	 * The ID of the conversation the email belongs to.
	 */
	conversationId?: string;
	/**
	 * The position of the message within the conversation (binary).
	 */
	conversationIndex?: string;
	/**
	 * Whether a delivery receipt is requested for the message.
	 */
	isDeliveryReceiptRequested?: boolean;
	/**
	 * Whether a read receipt is requested for the message.
	 */
	isReadReceiptRequested?: boolean;
	/**
	 * Whether the message has been read.
	 */
	isRead?: boolean;
	/**
	 * Whether the message is a draft.
	 */
	isDraft?: boolean;
	/**
	 * The URL to open the message in Outlook on the web.
	 */
	webLink?: string;
	/**
	 * The classification of the message for the user. Possible values: `focused`, `other`.
	 */
	inferenceClassification?: string;
	/**
	 * The flag value that indicates the status, start date, due date, or completion date for the message.
	 */
	flag?: {
		/**
		 * The flag status. Possible values: `notFlagged`, `complete`, `flagged`.
		 */
		flagStatus?: string;
		/**
		 * The start date and time of the flag.
		 */
		startDateTime?: {
			/**
			 * A single point of time in a combined date and time representation.
			 */
			dateTime?: string;
			/**
			 * The time zone.
			 */
			timeZone?: string;
		};
		/**
		 * The due date and time of the flag.
		 */
		dueDateTime?: {
			/**
			 * A single point of time in a combined date and time representation.
			 */
			dateTime?: string;
			/**
			 * The time zone.
			 */
			timeZone?: string;
		};
		/**
		 * The date and time the flag was completed.
		 */
		completedDateTime?: {
			/**
			 * A single point of time in a combined date and time representation.
			 */
			dateTime?: string;
			/**
			 * The time zone.
			 */
			timeZone?: string;
		};
	};
	/**
	 * The account that is used to generate the message.
	 */
	sender?: {
		/**
		 * The sender's email address information.
		 */
		emailAddress?: {
			/**
			 * The display name of the sender.
			 */
			name?: string;
			/**
			 * The email address of the sender.
			 */
			address?: string;
		};
	};
	/**
	 * The mailbox owner and sender of the message.
	 */
	from?: {
		/**
		 * The from email address information.
		 */
		emailAddress?: {
			/**
			 * The display name.
			 */
			name?: string;
			/**
			 * The email address.
			 */
			address?: string;
		};
	};
	/**
	 * The To: recipients for the message.
	 *
	 * Items: A recipient of the message.
	 */
	toRecipients?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The display name of the recipient.
			 */
			name?: string;
			/**
			 * The email address of the recipient.
			 */
			address?: string;
		};
	}[];
	/**
	 * The Cc: recipients for the message.
	 *
	 * Items: A recipient of the message.
	 */
	ccRecipients?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The display name of the recipient.
			 */
			name?: string;
			/**
			 * The email address of the recipient.
			 */
			address?: string;
		};
	}[];
	/**
	 * The Bcc: recipients for the message.
	 *
	 * Items: A recipient of the message.
	 */
	bccRecipients?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The display name of the recipient.
			 */
			name?: string;
			/**
			 * The email address of the recipient.
			 */
			address?: string;
		};
	}[];
	/**
	 * The email addresses to use when replying.
	 *
	 * Items: A recipient of the message.
	 */
	replyTo?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The display name of the recipient.
			 */
			name?: string;
			/**
			 * The email address of the recipient.
			 */
			address?: string;
		};
	}[];
	/**
	 * The part of the body of the message that is unique to the current message. Requires `$select=uniqueBody`.
	 */
	uniqueBody?: {
		/**
		 * The type of the content. Possible values are `text` and `html`.
		 */
		contentType?: string;
		/**
		 * The content of the unique body.
		 */
		content?: string;
	};
};

/**
 * Move a message
 * Moves a message to a different mail folder.
 */
export async function moveMessage(
	this: EndpointFunctionThis,
	payload: {
		input: MoveMessageInput;
		connectionId: number;
	},
): Promise<MoveMessageOutput> {
	const response = await this.endpointCaller<MoveMessageOutput>(
		{
			appName: 'microsoft-email',
			appVersion: 2,
			endpointName: 'moveMessage',
		},
		payload,
	);
	return response.output;
}
