// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SendMailInput = {
	/**
	 * The subject of the message.
	 */
	subject?: string;
	/**
	 * The body of the message.
	 */
	body?: {
		/**
		 * The type of the content.
		 */
		contentType?: '' | 'html' | 'text';
		/**
		 * The content of the body.
		 */
		content?: string;
	};
	/**
	 * The importance of the message.
	 */
	importance?: '' | 'low' | 'normal' | 'high';
	/**
	 * The To: recipients for the message.
	 *
	 * Items: A recipient.
	 */
	toRecipients?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The email address.
			 */
			address: string;
			/**
			 * The display name.
			 */
			name?: string;
		};
	}[];
	/**
	 * The Cc: recipients for the message.
	 *
	 * Items: A recipient.
	 */
	ccRecipients?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The email address.
			 */
			address: string;
			/**
			 * The display name.
			 */
			name?: string;
		};
	}[];
	/**
	 * The Bcc: recipients for the message.
	 *
	 * Items: A recipient.
	 */
	bccRecipients?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The email address.
			 */
			address: string;
			/**
			 * The display name.
			 */
			name?: string;
		};
	}[];
	/**
	 * The email addresses to use when replying.
	 *
	 * Items: A recipient.
	 */
	replyTo?: {
		/**
		 * The recipient's email address.
		 */
		emailAddress?: {
			/**
			 * The email address.
			 */
			address: string;
			/**
			 * The display name.
			 */
			name?: string;
		};
	}[];
	/**
	 * The mailbox owner and sender of the message. Must correspond to the actual mailbox used.
	 */
	from?: {
		/**
		 * The sender's email address.
		 */
		emailAddress?: {
			/**
			 * The email address.
			 */
			address: string;
			/**
			 * The display name.
			 */
			name?: string;
		};
	};
	/**
	 * Custom internet message headers. Header names must start with `x-`.
	 *
	 * Items: A custom internet message header.
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
	 * Whether to save the message in Sent Items. Default: `true`.
	 */
	saveToSentItems?: boolean;
};

export type SendMailOutput = Record<string, never>;

/**
 * Send mail
 * Sends a new message in a single request.
 */
export async function sendMail(
	this: EndpointFunctionThis,
	payload: {
		input: SendMailInput;
		connectionId: number;
	},
): Promise<SendMailOutput> {
	const response = await this.endpointCaller<SendMailOutput>(
		{
			appName: 'microsoft-email',
			appVersion: 2,
			endpointName: 'sendMail',
		},
		payload,
	);
	return response.output;
}
