// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type AutofillDesignInput = {
	/**
	 * The ID of the brand template to autofill.
	 */
	brand_template_id: string;
	/**
	 * The data to autofill the brand template with. An object where each key is a field name from the brand template dataset and each value is a type-specific object. Use `getBrandTemplateDataset` to discover available field names. Value formats: text → {"type": "text", "text": "..."}, image → {"type": "image", "asset_id": "..."}, video → {"type": "video", "asset_id": "..."}, chart → {"type": "chart", "chart_data": {"column_configs": [...], "rows": [...]}}, sheet → {"type": "sheet", "sheet_data": {"column_configs": [...], "rows": [...]}}. Unknown field names are silently skipped.
	 */
	data: Record<string, JSONValue>;
};

export type AutofillDesignOutput = {
	/**
	 * The autofill job status.
	 */
	job?: {
		/**
		 * The ID of the autofill job. Use this to poll the job status.
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
			 * The type of the result.
			 */
			type?: string;
			/**
			 * The autofilled design metadata.
			 */
			design?: {
				/**
				 * The design ID.
				 */
				id?: string;
				/**
				 * A temporary set of URLs for viewing or editing the design.
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
			};
		};
		/**
		 * Error details if the autofill failed.
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
 * Create design autofill job
 * Creates an asynchronous job to autofill a design from a brand template.
 */
export async function autofillDesign(
	this: EndpointFunctionThis,
	payload: {
		input: AutofillDesignInput;
		connectionId: number;
	},
): Promise<AutofillDesignOutput> {
	const response = await this.endpointCaller<AutofillDesignOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'autofillDesign',
		},
		payload,
	);
	return response.output;
}
