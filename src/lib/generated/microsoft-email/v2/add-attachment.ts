// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddAttachmentInput = {
	/**
	 * The unique identifier of the message to add the attachment to.
	 */
	messageId: string;
	/**
	 * The name of the attachment file (e.g., `report.pdf`).
	 */
	name: string;
	/**
	 * The base64-encoded content of the file.
	 */
	contentBytes: string;
	/**
	 * The MIME type of the attachment (e.g., `application/pdf`, `image/png`).
	 */
	contentType?: string;
	/**
	 * Whether the attachment is an inline attachment (referenced in the message body via a `cid:` URL).
	 */
	isInline?: boolean;
};

export type AddAttachmentOutput = {
	/**
	 * The unique identifier of the attachment.
	 */
	id?: string;
	/**
	 * The OData type of the attachment resource.
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
	/**
	 * The Uniform Resource Identifier (URI) that corresponds to the location of the content of the attachment.
	 */
	contentLocation?: string;
	/**
	 * The base64-encoded content of the file attachment.
	 */
	contentBytes?: string;
};

/**
 * Add an attachment
 * Adds a file attachment to a message.
 */
export async function addAttachment(
	this: EndpointFunctionThis,
	payload: {
		input: AddAttachmentInput;
		connectionId: number;
	},
): Promise<AddAttachmentOutput> {
	const response = await this.endpointCaller<AddAttachmentOutput>(
		{
			appName: 'microsoft-email',
			appVersion: 2,
			endpointName: 'addAttachment',
		},
		payload,
	);
	return response.output;
}
