// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateUrlImportJobInput = {
	/**
	 * The URL of the file to import. Must be publicly accessible. Maximum length: 2048 characters.
	 */
	url: string;
	/**
	 * The MIME type of the file being imported (e.g., `application/pdf`, `application/vnd.apple.keynote`). If not provided, Canva auto-detects it.
	 */
	mime_type?: string;
};

export type CreateUrlImportJobOutput = {
	/**
	 * The import job status.
	 */
	job?: {
		/**
		 * The ID of the import job. Use this to poll the job status.
		 */
		id?: string;
		/**
		 * The status of the job. Values: `failed`, `in_progress`, `success`.
		 */
		status?: string;
		/**
		 * The result (available when status is `success`).
		 */
		result?: {
			/**
			 * The list of imported designs. Usually contains one item.
			 *
			 * Items: An imported design.
			 */
			designs?: {
				/**
				 * The design ID.
				 */
				id?: string;
				/**
				 * Temporary URLs for viewing or editing the design.
				 */
				urls?: {
					/**
					 * A temporary editing URL. Valid for 30 days.
					 */
					edit_url?: string;
					/**
					 * A temporary viewing URL. Valid for 30 days.
					 */
					view_url?: string;
				};
				/**
				 * When the design was created, as a Unix timestamp.
				 */
				created_at?: number;
				/**
				 * When the design was last updated, as a Unix timestamp.
				 */
				updated_at?: number;
				/**
				 * A thumbnail for the design.
				 */
				thumbnail?: {
					/**
					 * Width in pixels.
					 */
					width?: number;
					/**
					 * Height in pixels.
					 */
					height?: number;
					/**
					 * Thumbnail URL. Expires after 15 minutes.
					 */
					url?: string;
				};
				/**
				 * The total number of pages in the design.
				 */
				page_count?: number;
			}[];
		};
		/**
		 * Error details if the import failed.
		 */
		error?: {
			/**
			 * A short error code.
			 */
			code?: string;
			/**
			 * A human-readable error message.
			 */
			message?: string;
		};
	};
};

/**
 * Create URL import job
 * Creates an asynchronous job to import a design from a URL.
 */
export async function createUrlImportJob(
	this: EndpointFunctionThis,
	payload: {
		input: CreateUrlImportJobInput;
		connectionId: number;
	},
): Promise<CreateUrlImportJobOutput> {
	const response = await this.endpointCaller<CreateUrlImportJobOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'createUrlImportJob',
		},
		payload,
	);
	return response.output;
}
