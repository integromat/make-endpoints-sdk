// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateExportForOrganizationsInput = {
	/**
	 * The ID or short name of the workspace to export.
	 */
	id: string;
	/**
	 * Whether the export includes the attachments of the workspace. Default: `true`.
	 */
	attachments?: boolean;
};

export type CreateExportForOrganizationsOutput = {
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
 * Create an export for a workspace
 * Starts an export job for a workspace.
 */
export async function createExportForOrganizations(
	this: EndpointFunctionThis,
	payload: {
		input: CreateExportForOrganizationsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateExportForOrganizationsOutput> {
	const response = await this.endpointCaller<CreateExportForOrganizationsOutput>(
		{
			appName: 'trello',
			appVersion: 4,
			endpointName: 'createExportForOrganizations',
		},
		payload,
	);
	return response.output;
}
