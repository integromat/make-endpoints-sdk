// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListAttachmentsInput = {
	/**
	 * The ID or short link of the card.
	 */
	id: string;
	/**
	 * The attachment fields to return. Default: `all`.
	 */
	fields?:
		| ''
		| 'all'
		| 'bytes'
		| 'date'
		| 'edgeColor'
		| 'idMember'
		| 'isUpload'
		| 'mimeType'
		| 'name'
		| 'previews'
		| 'url';
	/**
	 * Which attachments to return. Use `cover` to return only the cover attachment. Default: `false`.
	 */
	filter?: '' | 'false' | 'cover';
};

export type ListAttachmentsOutput = {
	/**
	 * The ID of the attachment.
	 */
	id?: string;
	/**
	 * The size of the attachment in bytes.
	 */
	bytes?: number;
	/**
	 * When the attachment was added.
	 */
	date?: string;
	/**
	 * The extracted edge color, for image attachments.
	 */
	edgeColor?: string;
	/**
	 * The ID of the member who added the attachment.
	 */
	idMember?: string;
	/**
	 * Whether the attachment was uploaded.
	 */
	isUpload?: boolean;
	/**
	 * The MIME type of the attachment.
	 */
	mimeType?: string;
	/**
	 * The name of the attachment.
	 */
	name?: string;
	/**
	 * The position of the attachment in the attachments list.
	 */
	pos?: number;
	/**
	 * Generated previews of an image attachment in various sizes.
	 *
	 * Items: A generated preview of the image.
	 */
	previews?: {
		/**
		 * The ID of the preview.
		 */
		id?: string;
		/**
		 * Whether the preview is scaled.
		 */
		scaled?: boolean;
		/**
		 * The URL of the preview.
		 */
		url?: string;
		/**
		 * The size of the preview in bytes.
		 */
		bytes?: number;
		/**
		 * The height of the preview in pixels.
		 */
		height?: number;
		/**
		 * The width of the preview in pixels.
		 */
		width?: number;
	}[];
	/**
	 * The URL of the attachment.
	 */
	url?: string;
	/**
	 * The file name of the attachment.
	 */
	fileName?: string;
	/**
	 * The limits that apply to the attachment.
	 */
	limits?: Record<string, JSONValue>;
};

/**
 * List attachments
 * Lists the attachments on a card.
 */
export async function listAttachments(
	this: EndpointFunctionThis,
	payload: {
		input: ListAttachmentsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListAttachmentsOutput> {
	const response = await this.endpointCaller<ListAttachmentsOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'listAttachments',
		},
		payload,
	);
	return response.output;
}
