// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type AddAnAttachmentInput = {
	/**
	 * The ID or short link of the card to add the attachment to.
	 */
	id: string;
	/**
	 * The URL to attach. Must start with `http://` or `https://`.
	 */
	url: string;
	/**
	 * The name of the attachment, up to 256 characters long.
	 */
	name?: string;
	/**
	 * The MIME type of the attachment, up to 256 characters long.
	 */
	mimeType?: string;
	/**
	 * Whether to use the new attachment as the card cover. Default: `false`.
	 */
	setCover?: boolean;
};

export type AddAnAttachmentOutput = {
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
 * Add an attachment
 * Attaches a URL to a card.
 */
export async function addAnAttachment(
	this: EndpointFunctionThis,
	payload: {
		input: AddAnAttachmentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<AddAnAttachmentOutput> {
	const response = await this.endpointCaller<AddAnAttachmentOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'addAnAttachment',
		},
		payload,
	);
	return response.output;
}
