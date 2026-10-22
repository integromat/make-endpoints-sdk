// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAnAttachmentInput = {
	/**
	 * The ID or short link of the card.
	 */
	id: string;
	/**
	 * The ID of the attachment to delete. Find it with `listAttachments`.
	 */
	idAttachment: string;
};

export type DeleteAnAttachmentOutput = Record<string, never>;

/**
 * Delete an attachment
 * Deletes an attachment from a card.
 */
export async function deleteAnAttachment(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAnAttachmentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteAnAttachmentOutput> {
	const response = await this.endpointCaller<DeleteAnAttachmentOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'deleteAnAttachment',
		},
		payload,
	);
	return response.output;
}
