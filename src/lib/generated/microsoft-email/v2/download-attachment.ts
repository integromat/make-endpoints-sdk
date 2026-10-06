// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DownloadAttachmentInput = {
	/**
	 * The unique identifier of the message containing the attachment.
	 */
	messageId: string;
	/**
	 * The unique identifier of the attachment to retrieve.
	 */
	attachmentId: string;
	/**
	 * Comma-separated list of properties to include.
	 */
	select?: string;
};

export type DownloadAttachmentOutput = {
	/**
	 * The unique identifier of the attachment.
	 */
	id?: string;
	/**
	 * The OData type of the attachment resource.
	 */
	'@odata.type'?: string;
	/**
	 * The MIME content type of the attachment content.
	 */
	'@odata.mediaContentType'?: string;
	/**
	 * The date and time the attachment was last modified.
	 */
	lastModifiedDateTime?: string;
	/**
	 * The file name of the attachment.
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
	/**
	 * The URI for the content location of the attachment.
	 */
	contentLocation?: string;
	/**
	 * The base64-encoded content of the file attachment.
	 */
	contentBytes?: string;
};

/**
 * Get an attachment
 * Retrieves an attachment from a message, including its content.
 */
export async function downloadAttachment(
	this: EndpointFunctionThis,
	payload: {
		input: DownloadAttachmentInput;
		connectionId: number;
	},
): Promise<DownloadAttachmentOutput> {
	const response = await this.endpointCaller<DownloadAttachmentOutput>(
		{
			appName: 'microsoft-email',
			appVersion: 2,
			endpointName: 'downloadAttachment',
		},
		payload,
	);
	return response.output;
}
