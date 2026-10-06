// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListAttachmentsInput = {
	/**
	 * The unique identifier of the message whose attachments to list.
	 */
	messageId: string;
	/**
	 * Comma-separated list of properties to include.
	 */
	select?: string;
	/**
	 * An OData `$filter` expression.
	 */
	filter?: string;
	/**
	 * Comma-separated list of relationships to expand.
	 */
	expand?: string;
};

export type ListAttachmentsOutput = {
	/**
	 * The list of attachments.
	 *
	 * Items: An attachment object.
	 */
	value?: {
		/**
		 * The unique identifier of the attachment.
		 */
		id?: string;
		/**
		 * The OData type (`#microsoft.graph.fileAttachment`, `#microsoft.graph.itemAttachment`, `#microsoft.graph.referenceAttachment`).
		 */
		'@odata.type'?: string;
		/**
		 * The date and time the attachment was last modified.
		 */
		lastModifiedDateTime?: string;
		/**
		 * The name of the attachment.
		 */
		name?: string;
		/**
		 * The MIME content type of the attachment.
		 */
		contentType?: string;
		/**
		 * The size of the attachment in bytes.
		 */
		size?: number;
		/**
		 * Whether the attachment is an inline attachment.
		 */
		isInline?: boolean;
		/**
		 * The ID of the attachment in the MIME message.
		 */
		contentId?: string;
	}[];
};

/**
 * List attachments
 * Lists attachments for a message.
 */
export async function listAttachments(
	this: EndpointFunctionThis,
	payload: {
		input: ListAttachmentsInput;
		connectionId: number;
	},
): Promise<ListAttachmentsOutput> {
	const response = await this.endpointCaller<ListAttachmentsOutput>(
		{
			appName: 'microsoft-email',
			appVersion: 2,
			endpointName: 'listAttachments',
		},
		payload,
	);
	return response.output;
}
