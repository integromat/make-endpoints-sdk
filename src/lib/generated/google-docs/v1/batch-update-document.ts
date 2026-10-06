// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type BatchUpdateDocumentInput = {
	/**
	 * The ID of the document to update.
	 */
	documentId: string;
	/**
	 * A list of update requests to apply to the document. Select the request type for each item -- only the relevant fields will appear. The buildBatchRequests function wraps the fields under the selected type and strips empty values.
	 *
	 * Items: A single update request. Select the request type to see the relevant fields.
	 */
	requests: {
		/**
		 * The type of update to apply.
		 */
		requestType:
			| 'insertText'
			| 'replaceAllText'
			| 'insertInlineImage'
			| 'replaceImage'
			| 'updateTextStyle'
			| 'createHeader'
			| 'createFooter';
	}[];
	/**
	 * Optional control over how the write request is applied. Use requiredRevisionId for optimistic locking or targetRevisionId for collaborative merge.
	 */
	writeControl?: {
		/**
		 * If set, the request fails with 400 if the document has been modified since this revision.
		 */
		requiredRevisionId?: string;
		/**
		 * If set, changes are merged collaboratively against this revision, similar to how two users editing simultaneously would be resolved.
		 */
		targetRevisionId?: string;
	};
};

export type BatchUpdateDocumentOutput = {
	/**
	 * The ID of the document the updates were applied to.
	 */
	documentId?: string;
	/**
	 * The reply for each request, in the same order. Some request types return empty replies.
	 */
	replies?: {
		/**
		 * The result of a replaceAllText request.
		 */
		replaceAllText?: {
			/**
			 * The number of occurrences changed by the request.
			 */
			occurrencesChanged?: number;
		};
		/**
		 * The result of an insertInlineImage request.
		 */
		insertInlineImage?: {
			/**
			 * The ID of the created InlineObject. Use this to reference or replace the image later.
			 */
			objectId?: string;
		};
		/**
		 * The result of a createHeader request.
		 */
		createHeader?: {
			/**
			 * The ID of the created header.
			 */
			headerId?: string;
		};
		/**
		 * The result of a createFooter request.
		 */
		createFooter?: {
			/**
			 * The ID of the created footer.
			 */
			footerId?: string;
		};
	}[];
	/**
	 * The updated write control after applying the request. Contains the revision ID that can be used for subsequent optimistic locking.
	 */
	writeControl?: {
		/**
		 * The revision ID of the document after the request was applied. Use this for optimistic locking in subsequent batchUpdate calls.
		 */
		requiredRevisionId?: string;
		/**
		 * The target revision ID of the document after the request was applied.
		 */
		targetRevisionId?: string;
	};
};

/**
 * Batch update a document
 * Applies one or more updates to a document. Supports inserting, deleting, and replacing text, images, and other content.
 */
export async function batchUpdateDocument(
	this: EndpointFunctionThis,
	payload: {
		input: BatchUpdateDocumentInput;
		connectionId: number;
	},
): Promise<BatchUpdateDocumentOutput> {
	const response = await this.endpointCaller<BatchUpdateDocumentOutput>(
		{
			appName: 'google-docs',
			appVersion: 1,
			endpointName: 'batchUpdateDocument',
		},
		payload,
	);
	return response.output;
}
