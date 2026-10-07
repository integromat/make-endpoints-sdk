// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CompleteUploadExternalInput = {
	/**
	 * Files to complete the upload for, as returned by `getUploadURLExternal`.
	 *
	 * Items: A single uploaded file to finalize.
	 */
	files: {
		/**
		 * File ID returned by `getUploadURLExternal`.
		 */
		id?: string;
	}[];
	/**
	 * Channel to share the file to. The file stays private if omitted.
	 */
	channel_id?: string;
	/**
	 * Timestamp of the parent message to share the file into as a thread reply.
	 */
	thread_ts?: string;
	/**
	 * Up to 100 additional channel or user IDs to share the file to.
	 *
	 * Items: ID of a channel or user to share the file to.
	 */
	channels?: string[];
	/**
	 * Message text to introduce the file with.
	 */
	initial_comment?: string;
	/**
	 * Raw [Block Kit](https://api.slack.com/block-kit) blocks array for the share message. Ignored if `initial_comment` is set.
	 */
	blocks?: Record<string, JSONValue>;
	/**
	 * Custom username for the share message. Requires the `chat:write.customize` scope.
	 */
	username?: string;
	/**
	 * Custom icon image URL for the share message. Requires the `chat:write.customize` scope.
	 */
	icon_url?: string;
	/**
	 * Custom icon emoji for the share message, overrides `icon_url`. Requires the `chat:write.customize` scope.
	 */
	icon_emoji?: string;
};

export type CompleteUploadExternalOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The finalized files.
	 *
	 * Items: A single finalized file.
	 */
	files?: {
		/**
		 * ID of the file.
		 */
		id?: string;
	}[];
};

/**
 * Complete a file upload
 * Finalizes an external file upload and optionally shares it to a channel.
 */
export async function completeUploadExternal(
	this: EndpointFunctionThis,
	payload: {
		input: CompleteUploadExternalInput;
		connectionId: number;
	},
): Promise<CompleteUploadExternalOutput> {
	const response = await this.endpointCaller<CompleteUploadExternalOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'completeUploadExternal',
		},
		payload,
	);
	return response.output;
}
