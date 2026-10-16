// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ExportTasksAsShareableUrlInput = {
	/**
	 * The ID of the project to export as a template.
	 */
	project_id: string;
	/**
	 * Whether to export due dates as relative dates. The default is `true`.
	 */
	use_relative_dates?: boolean;
};

export type ExportTasksAsShareableUrlOutput = {
	/**
	 * The name of the exported template file.
	 */
	file_name?: string;
	/**
	 * The URL of the exported template file.
	 */
	file_url?: string;
};

/**
 * Export tasks as shareable URL
 * Exports a project as a template and returns a shareable URL.
 */
export async function exportTasksAsShareableUrl(
	this: EndpointFunctionThis,
	payload: {
		input: ExportTasksAsShareableUrlInput;
		connectionId: number;
	},
): Promise<ExportTasksAsShareableUrlOutput> {
	const response = await this.endpointCaller<ExportTasksAsShareableUrlOutput>(
		{
			appName: 'todoist',
			appVersion: 3,
			endpointName: 'exportTasksAsShareableUrl',
		},
		payload,
	);
	return response.output;
}
