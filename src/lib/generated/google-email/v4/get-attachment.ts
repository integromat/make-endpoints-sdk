// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAttachmentInput = {
	/**
	 * The ID of the message containing the attachment.
	 */
	id: string;
	/**
	 * The ID of the attachment.
	 */
	attachmentId: string;
};

export type GetAttachmentOutput = {
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
 * Get an attachment
 * Returns information about a specific attachment.
 */
export async function getAttachment(
	this: EndpointFunctionThis,
	payload: {
		input: GetAttachmentInput;
		connectionId: number;
	},
): Promise<GetAttachmentOutput> {
	const response = await this.endpointCaller<GetAttachmentOutput>(
		{
			appName: 'google-email',
			appVersion: 4,
			endpointName: 'getAttachment',
		},
		payload,
	);
	return response.output;
}
