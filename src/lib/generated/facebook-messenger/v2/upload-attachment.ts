// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UploadAttachmentInput = {
	/**
	 * The type of the asset to upload. Maximum file size is 25 MB.
	 */
	type: 'image' | 'audio' | 'video' | 'file';
	/**
	 * Publicly reachable URL of the file to upload. Maximum file size is 25 MB. Meta downloads the file with a timeout of 75 seconds for videos and 10 seconds for every other file type.
	 */
	url: string;
};

export type UploadAttachmentOutput = {
	/**
	 * The ID of the saved, reusable attachment. Pass it as `message.attachment.payload.attachment_id` in `sendMessage` to send the asset without uploading it again.
	 */
	attachment_id?: string;
};

/**
 * Upload an attachment
 * Uploads an attachment from a URL to the Attachment Upload API and returns a reusable attachment ID.
 */
export async function uploadAttachment(
	this: EndpointFunctionThis,
	payload: {
		input: UploadAttachmentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UploadAttachmentOutput> {
	const response = await this.endpointCaller<UploadAttachmentOutput>(
		{
			appName: 'facebook-messenger',
			appVersion: 2,
			endpointName: 'uploadAttachment',
		},
		payload,
	);
	return response.output;
}
