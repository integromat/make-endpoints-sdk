// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAttachmentInput = {
	/**
	 * The ID of the attachment to delete.
	 */
	attachmentId: string;
};

export type DeleteAttachmentOutput = Record<string, never>;

/**
 * Delete attachment
 * Deletes an attachment.
 */
export async function deleteAttachment(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAttachmentInput;
		connectionId: number;
	},
): Promise<DeleteAttachmentOutput> {
	const response = await this.endpointCaller<DeleteAttachmentOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'deleteAttachment',
		},
		payload,
	);
	return response.output;
}
