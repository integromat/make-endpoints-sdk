// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type GetVideoStatusInput = {
	/**
	 * The ID of the page that owns the video. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the video or reel.
	 */
	video_id: string;
};

export type GetVideoStatusOutput = {
	/**
	 * The ID of the video.
	 */
	id?: string;
	/**
	 * Upload, processing, and publishing status of the video.
	 */
	status?: {
		/**
		 * Overall status: `uploading`, `upload_complete`, `upload_failed`, `processing`, `ready`, `expired`, or `error`.
		 */
		video_status?: string;
		/**
		 * Progress of the upload.
		 */
		uploading_phase?: {
			/**
			 * Status of the uploading phase: `not_started`, `in_progress`, `complete`, or `error`.
			 */
			status?: string;
			/**
			 * Number of bytes of the video file uploaded so far.
			 */
			bytes_transfered?: number;
			/**
			 * Size of the video file in bytes.
			 */
			source_file_size?: number;
			/**
			 * Errors of the upload.
			 *
			 * Items: An upload error.
			 */
			errors?: {
				/**
				 * Error message.
				 */
				message?: string;
			}[];
		};
		/**
		 * Progress of processing, such as encoding and thumbnail generation.
		 */
		processing_phase?: {
			/**
			 * Status of the processing phase: `not_started`, `in_progress`, `complete`, or `error`.
			 */
			status?: string;
			/**
			 * Details of a processing error.
			 */
			error?: {
				/**
				 * Error message.
				 */
				message?: string;
			};
		};
		/**
		 * Progress of publishing to the page.
		 */
		publishing_phase?: {
			/**
			 * Status of the publishing phase: `not_started`, `in_progress`, `complete`, or `error`.
			 */
			status?: string;
			/**
			 * Publish state: `published`, `scheduled`, `draft`, or `error`.
			 */
			publish_status?: string;
			/**
			 * Actual or scheduled publish time.
			 */
			publish_time?: string;
			/**
			 * Details of a publishing error.
			 */
			error?: {
				/**
				 * Error message.
				 */
				message?: string;
			};
		};
	};
};

/**
 * Get a video status
 * Gets the upload, processing, and publishing status of a Facebook video or reel.
 */
export async function getVideoStatus(
	this: EndpointFunctionThis,
	payload: {
		input: GetVideoStatusInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetVideoStatusOutput>> {
	const response = await this.endpointCaller<GetVideoStatusOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'GetVideoStatus',
		},
		payload,
	);
	return response;
}
