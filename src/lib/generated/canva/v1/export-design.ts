// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ExportDesignInput = {
	/**
	 * The ID of the design to export.
	 */
	design_id: string;
	/**
	 * The export format type.
	 */
	format_type:
		| 'pdf'
		| 'jpg'
		| 'png'
		| 'gif'
		| 'pptx'
		| 'mp4'
		| 'csv'
		| 'html_bundle'
		| 'html_standalone';
	/**
	 * Export quality. Regular or pro (premium). Default: `regular`.
	 */
	export_quality?: '' | 'regular' | 'pro';
	/**
	 * Export height in pixels (40–25000). For JPG, PNG, GIF formats. If only one dimension is given, aspect ratio is preserved.
	 */
	height?: number;
	/**
	 * Export width in pixels (40–25000). For JPG, PNG, GIF formats. If only one dimension is given, aspect ratio is preserved.
	 */
	width?: number;
	/**
	 * JPG compression quality (1–100). Only used when format type is `jpg`.
	 */
	quality?: number;
	/**
	 * If true (default), PNG is exported losslessly. If false, lossy compression is used (requires premium plan).
	 */
	lossless?: boolean;
	/**
	 * If true, PNG is exported with a transparent background (requires premium plan). Default: false.
	 */
	transparent_background?: boolean;
	/**
	 * When true, multi-page designs are merged into a single PNG image. Default: false.
	 */
	as_single_image?: boolean;
	/**
	 * Paper size for PDF export of Canva Docs. Default: `a4`. Values: `a4`, `a3`, `letter`, `legal`.
	 */
	size?: '' | 'a4' | 'a3' | 'letter' | 'legal';
	/**
	 * Video quality for MP4 export. Values: `horizontal_480p`, `horizontal_720p`, `horizontal_1080p`, `horizontal_4k`, `vertical_480p`, `vertical_720p`, `vertical_1080p`, `vertical_4k`.
	 */
	video_quality?:
		| ''
		| 'horizontal_480p'
		| 'horizontal_720p'
		| 'horizontal_1080p'
		| 'horizontal_4k'
		| 'vertical_480p'
		| 'vertical_720p'
		| 'vertical_1080p'
		| 'vertical_4k';
	/**
	 * Page numbers to export (array of integers, 1-indexed). If not specified, all pages are exported.
	 *
	 * Items: Page number.
	 */
	pages?: number[];
};

export type ExportDesignOutput = {
	/**
	 * The export job status.
	 */
	job?: {
		/**
		 * The ID of the export job. Use this to poll the job status.
		 */
		id?: string;
		/**
		 * The status of the job. Values: `failed`, `in_progress`, `success`.
		 */
		status?: string;
		/**
		 * Download URLs for the exported files (available when status is `success`).
		 *
		 * Items: A download URL for an exported file.
		 */
		urls?: string[];
		/**
		 * Error details if the export failed.
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
 * Create design export job
 * Creates an asynchronous job to export a design.
 */
export async function exportDesign(
	this: EndpointFunctionThis,
	payload: {
		input: ExportDesignInput;
		connectionId: number;
	},
): Promise<ExportDesignOutput> {
	const response = await this.endpointCaller<ExportDesignOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'exportDesign',
		},
		payload,
	);
	return response.output;
}
