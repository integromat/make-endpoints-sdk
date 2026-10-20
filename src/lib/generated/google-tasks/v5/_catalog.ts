// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createAtask } from './create-atask.ts';
import { createAtaskList } from './create-atask-list.ts';
import { deleteAtask } from './delete-atask.ts';
import { deleteAtaskList } from './delete-atask-list.ts';
import { getAtask } from './get-atask.ts';
import { getAtaskList } from './get-atask-list.ts';
import { listTaskLists } from './list-task-lists.ts';
import { listTasks } from './list-tasks.ts';
import { updateAtask } from './update-atask.ts';
import { updateAtaskList } from './update-atask-list.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateATaskInput, CreateATaskOutput } from './create-atask.ts';
export type { CreateATaskListInput, CreateATaskListOutput } from './create-atask-list.ts';
export type { DeleteATaskInput, DeleteATaskOutput } from './delete-atask.ts';
export type { DeleteATaskListInput, DeleteATaskListOutput } from './delete-atask-list.ts';
export type { GetATaskInput, GetATaskOutput } from './get-atask.ts';
export type { GetATaskListInput, GetATaskListOutput } from './get-atask-list.ts';
export type { ListTaskListsInput, ListTaskListsOutput } from './list-task-lists.ts';
export type { ListTasksInput, ListTasksOutput } from './list-tasks.ts';
export type { UpdateATaskInput, UpdateATaskOutput } from './update-atask.ts';
export type { UpdateATaskListInput, UpdateATaskListOutput } from './update-atask-list.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createAtask: createAtask.bind({ endpointCaller }),
		createAtaskList: createAtaskList.bind({ endpointCaller }),
		deleteAtask: deleteAtask.bind({ endpointCaller }),
		deleteAtaskList: deleteAtaskList.bind({ endpointCaller }),
		getAtask: getAtask.bind({ endpointCaller }),
		getAtaskList: getAtaskList.bind({ endpointCaller }),
		listTaskLists: listTaskLists.bind({ endpointCaller }),
		listTasks: listTasks.bind({ endpointCaller }),
		updateAtask: updateAtask.bind({ endpointCaller }),
		updateAtaskList: updateAtaskList.bind({ endpointCaller }),
	};
};

export class GoogleTasksV5Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
