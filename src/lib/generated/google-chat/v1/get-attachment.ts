// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAttachmentInput = {
	/**
	 * The resource name of the attachment, in the form `spaces/{space}/messages/{message}/attachments/{attachment}`. You can get it from the `attachment` array in the response of the Get a message endpoint.
	 */
	name: string;
};

export type GetAttachmentOutput = {
	/**
	 * The resource name of the attachment, in the form `spaces/{space}/messages/{message}/attachments/{attachment}`.
	 */
	name?: string;
	/**
	 * The original file name for the content, not the full path.
	 */
	contentName?: string;
	/**
	 * The content type (MIME type) of the file.
	 */
	contentType?: string;
	/**
	 * A reference to the attachment data. Used with the media API to download the attachment data.
	 */
	attachmentDataRef?: {
		/**
		 * The resource name of the attachment data. Used with the media API to download the attachment data.
		 */
		resourceName?: string;
		/**
		 * An opaque token containing a reference to an uploaded attachment. Treat it as an opaque string. It is used to create or update Chat messages with attachments.
		 */
		attachmentUploadToken?: string;
	};
	/**
	 * A reference to the Google Drive attachment. Used with the Google Drive API.
	 */
	driveDataRef?: {
		/**
		 * The ID of the Google Drive file. Use it with the Google Drive API.
		 */
		driveFileId?: string;
	};
	/**
	 * The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content.
	 */
	thumbnailUri?: string;
	/**
	 * The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content.
	 */
	downloadUri?: string;
	/**
	 * The source of the attachment.
	 */
	source?: '' | 'SOURCE_UNSPECIFIED' | 'DRIVE_FILE' | 'UPLOADED_CONTENT';
};

/**
 * Get an attachment
 * Returns the metadata of a message attachment.
 */
export async function getAttachment(
	this: EndpointFunctionThis,
	payload: {
		input: GetAttachmentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetAttachmentOutput> {
	const response = await this.endpointCaller<GetAttachmentOutput>(
		{
			appName: 'google-chat',
			appVersion: 1,
			endpointName: 'getAttachment',
		},
		payload,
	);
	return response.output;
}
