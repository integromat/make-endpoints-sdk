// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteACommentInACardInput = {
	/**
	 * The ID of the comment action to delete. Only comment actions (`commentCard`) can be deleted.
	 */
	id: string;
};

export type DeleteACommentInACardOutput = Record<string, never>;

/**
 * Delete a comment in a card
 * Deletes a comment from a card.
 */
export async function deleteAcommentInAcard(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteACommentInACardInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteACommentInACardOutput> {
	const response = await this.endpointCaller<DeleteACommentInACardOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'deleteACommentInACard',
		},
		payload,
	);
	return response.output;
}
