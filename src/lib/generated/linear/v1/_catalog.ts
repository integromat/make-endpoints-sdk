// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createComment } from './create-comment.ts';
import { createIssue } from './create-issue.ts';
import { deleteComment } from './delete-comment.ts';
import { deleteIssue } from './delete-issue.ts';
import { getComment } from './get-comment.ts';
import { getIssue } from './get-issue.ts';
import { listComments } from './list-comments.ts';
import { listIssues } from './list-issues.ts';
import { updateComment } from './update-comment.ts';
import { updateIssue } from './update-issue.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateCommentInput, CreateCommentOutput } from './create-comment.ts';
export type { CreateIssueInput, CreateIssueOutput } from './create-issue.ts';
export type { DeleteCommentInput, DeleteCommentOutput } from './delete-comment.ts';
export type { DeleteIssueInput, DeleteIssueOutput } from './delete-issue.ts';
export type { GetCommentInput, GetCommentOutput } from './get-comment.ts';
export type { GetIssueInput, GetIssueOutput } from './get-issue.ts';
export type { ListCommentsInput, ListCommentsOutput } from './list-comments.ts';
export type { ListIssuesInput, ListIssuesOutput } from './list-issues.ts';
export type { UpdateCommentInput, UpdateCommentOutput } from './update-comment.ts';
export type { UpdateIssueInput, UpdateIssueOutput } from './update-issue.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createComment: createComment.bind({ endpointCaller }),
		createIssue: createIssue.bind({ endpointCaller }),
		deleteComment: deleteComment.bind({ endpointCaller }),
		deleteIssue: deleteIssue.bind({ endpointCaller }),
		getComment: getComment.bind({ endpointCaller }),
		getIssue: getIssue.bind({ endpointCaller }),
		listComments: listComments.bind({ endpointCaller }),
		listIssues: listIssues.bind({ endpointCaller }),
		updateComment: updateComment.bind({ endpointCaller }),
		updateIssue: updateIssue.bind({ endpointCaller }),
	};
};

export class LinearV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
