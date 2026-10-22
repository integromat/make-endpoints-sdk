// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetOrganizationExportsInput = {
	/**
	 * The ID or short name of the workspace.
	 */
	id: string;
};

export type GetOrganizationExportsOutput = {
	/**
	 * The ID of the export job.
	 */
	id?: string;
	/**
	 * The status of the export job.
	 */
	status?: {
		/**
		 * The stage of the export, for example `Export_queued` or `Export_completed`.
		 */
		stage?: string;
		/**
		 * Whether the export has finished.
		 */
		finished?: boolean;
		/**
		 * The number of attempts made to produce the export.
		 */
		attempts?: number;
		/**
		 * The progress counter of the export job, as reported by Trello.
		 */
		progress?: number;
		/**
		 * The total counter of the export job, as reported by Trello.
		 */
		total?: number;
	};
	/**
	 * When the export job started.
	 */
	startedAt?: string;
	/**
	 * The size (bytes) of the exported file, once it is available.
	 */
	size?: number;
	/**
	 * The API path of the exported ZIP file, relative to `https://api.trello.com`. Requires authentication. Empty until the export is completed.
	 */
	exportUrl?: string;
};

/**
 * Get workspace exports
 * Lists the export jobs of a workspace.
 */
export async function getOrganizationExports(
	this: EndpointFunctionThis,
	payload: {
		input: GetOrganizationExportsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetOrganizationExportsOutput> {
	const response = await this.endpointCaller<GetOrganizationExportsOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'getOrganizationExports',
		},
		payload,
	);
	return response.output;
}
