// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { deleteProject } from './delete-project.ts';
import { exportTasksAsShareableUrl } from './export-tasks-as-shareable-url.ts';
import { getComment } from './get-comment.ts';
import { getLabel } from './get-label.ts';
import { getProject } from './get-project.ts';
import { getStats } from './get-stats.ts';
import { getTask } from './get-task.ts';
import { importTasksFromTemplate } from './import-tasks-from-template.ts';
import { listComments } from './list-comments.ts';
import { sync } from './sync.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { DeleteProjectInput, DeleteProjectOutput } from './delete-project.ts';
export type {
	ExportTasksAsShareableUrlInput,
	ExportTasksAsShareableUrlOutput,
} from './export-tasks-as-shareable-url.ts';
export type { GetCommentInput, GetCommentOutput } from './get-comment.ts';
export type { GetLabelInput, GetLabelOutput } from './get-label.ts';
export type { GetProjectInput, GetProjectOutput } from './get-project.ts';
export type { GetStatsInput, GetStatsOutput } from './get-stats.ts';
export type { GetTaskInput, GetTaskOutput } from './get-task.ts';
export type {
	ImportTasksFromTemplateInput,
	ImportTasksFromTemplateOutput,
} from './import-tasks-from-template.ts';
export type { ListCommentsInput, ListCommentsOutput } from './list-comments.ts';
export type { SyncInput, SyncOutput } from './sync.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		deleteProject: deleteProject.bind({ endpointCaller }),
		exportTasksAsShareableUrl: exportTasksAsShareableUrl.bind({ endpointCaller }),
		getComment: getComment.bind({ endpointCaller }),
		getLabel: getLabel.bind({ endpointCaller }),
		getProject: getProject.bind({ endpointCaller }),
		getStats: getStats.bind({ endpointCaller }),
		getTask: getTask.bind({ endpointCaller }),
		importTasksFromTemplate: importTasksFromTemplate.bind({ endpointCaller }),
		listComments: listComments.bind({ endpointCaller }),
		sync: sync.bind({ endpointCaller }),
	};
};

export class TodoistV3Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
