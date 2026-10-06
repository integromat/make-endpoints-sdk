// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addComment } from './add-comment.ts';
import { addWatcher } from './add-watcher.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { assignIssue } from './assign-issue.ts';
import { createComponent } from './create-component.ts';
import { createFieldOptions } from './create-field-options.ts';
import { createIssue } from './create-issue.ts';
import { createIssueLink } from './create-issue-link.ts';
import { createProjectVersion } from './create-project-version.ts';
import { deleteAttachment } from './delete-attachment.ts';
import { deleteComment } from './delete-comment.ts';
import { deleteComponent } from './delete-component.ts';
import { deleteFieldOption } from './delete-field-option.ts';
import { deleteIssue } from './delete-issue.ts';
import { deleteIssueLink } from './delete-issue-link.ts';
import { deleteProjectVersion } from './delete-project-version.ts';
import { deleteWatcher } from './delete-watcher.ts';
import { getComment } from './get-comment.ts';
import { getFieldOptions } from './get-field-options.ts';
import { getIssue } from './get-issue.ts';
import { getIssueTransitions } from './get-issue-transitions.ts';
import { getIssueWatchers } from './get-issue-watchers.ts';
import { getProjectComponents } from './get-project-components.ts';
import { getProjectVersions } from './get-project-versions.ts';
import { getUser } from './get-user.ts';
import { listComments } from './list-comments.ts';
import { listUsers } from './list-users.ts';
import { reorderFieldOptions } from './reorder-field-options.ts';
import { searchIssues } from './search-issues.ts';
import { searchUsers } from './search-users.ts';
import { transitionIssue } from './transition-issue.ts';
import { updateComment } from './update-comment.ts';
import { updateComponent } from './update-component.ts';
import { updateFieldOptions } from './update-field-options.ts';
import { updateIssue } from './update-issue.ts';
import { updateProjectVersion } from './update-project-version.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddCommentInput, AddCommentOutput } from './add-comment.ts';
export type { AddWatcherInput, AddWatcherOutput } from './add-watcher.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { AssignIssueInput, AssignIssueOutput } from './assign-issue.ts';
export type { CreateComponentInput, CreateComponentOutput } from './create-component.ts';
export type { CreateFieldOptionsInput, CreateFieldOptionsOutput } from './create-field-options.ts';
export type { CreateIssueInput, CreateIssueOutput } from './create-issue.ts';
export type { CreateIssueLinkInput, CreateIssueLinkOutput } from './create-issue-link.ts';
export type {
	CreateProjectVersionInput,
	CreateProjectVersionOutput,
} from './create-project-version.ts';
export type { DeleteAttachmentInput, DeleteAttachmentOutput } from './delete-attachment.ts';
export type { DeleteCommentInput, DeleteCommentOutput } from './delete-comment.ts';
export type { DeleteComponentInput, DeleteComponentOutput } from './delete-component.ts';
export type { DeleteFieldOptionInput, DeleteFieldOptionOutput } from './delete-field-option.ts';
export type { DeleteIssueInput, DeleteIssueOutput } from './delete-issue.ts';
export type { DeleteIssueLinkInput, DeleteIssueLinkOutput } from './delete-issue-link.ts';
export type {
	DeleteProjectVersionInput,
	DeleteProjectVersionOutput,
} from './delete-project-version.ts';
export type { DeleteWatcherInput, DeleteWatcherOutput } from './delete-watcher.ts';
export type { GetCommentInput, GetCommentOutput } from './get-comment.ts';
export type { GetFieldOptionsInput, GetFieldOptionsOutput } from './get-field-options.ts';
export type { GetIssueInput, GetIssueOutput } from './get-issue.ts';
export type {
	GetIssueTransitionsInput,
	GetIssueTransitionsOutput,
} from './get-issue-transitions.ts';
export type { GetIssueWatchersInput, GetIssueWatchersOutput } from './get-issue-watchers.ts';
export type {
	GetProjectComponentsInput,
	GetProjectComponentsOutput,
} from './get-project-components.ts';
export type { GetProjectVersionsInput, GetProjectVersionsOutput } from './get-project-versions.ts';
export type { GetUserInput, GetUserOutput } from './get-user.ts';
export type { ListCommentsInput, ListCommentsOutput } from './list-comments.ts';
export type { ListUsersInput, ListUsersOutput } from './list-users.ts';
export type {
	ReorderFieldOptionsInput,
	ReorderFieldOptionsOutput,
} from './reorder-field-options.ts';
export type { SearchIssuesInput, SearchIssuesOutput } from './search-issues.ts';
export type { SearchUsersInput, SearchUsersOutput } from './search-users.ts';
export type { TransitionIssueInput, TransitionIssueOutput } from './transition-issue.ts';
export type { UpdateCommentInput, UpdateCommentOutput } from './update-comment.ts';
export type { UpdateComponentInput, UpdateComponentOutput } from './update-component.ts';
export type { UpdateFieldOptionsInput, UpdateFieldOptionsOutput } from './update-field-options.ts';
export type { UpdateIssueInput, UpdateIssueOutput } from './update-issue.ts';
export type {
	UpdateProjectVersionInput,
	UpdateProjectVersionOutput,
} from './update-project-version.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addComment: addComment.bind({ endpointCaller }),
		addWatcher: addWatcher.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		assignIssue: assignIssue.bind({ endpointCaller }),
		createComponent: createComponent.bind({ endpointCaller }),
		createFieldOptions: createFieldOptions.bind({ endpointCaller }),
		createIssue: createIssue.bind({ endpointCaller }),
		createIssueLink: createIssueLink.bind({ endpointCaller }),
		createProjectVersion: createProjectVersion.bind({ endpointCaller }),
		deleteAttachment: deleteAttachment.bind({ endpointCaller }),
		deleteComment: deleteComment.bind({ endpointCaller }),
		deleteComponent: deleteComponent.bind({ endpointCaller }),
		deleteFieldOption: deleteFieldOption.bind({ endpointCaller }),
		deleteIssue: deleteIssue.bind({ endpointCaller }),
		deleteIssueLink: deleteIssueLink.bind({ endpointCaller }),
		deleteProjectVersion: deleteProjectVersion.bind({ endpointCaller }),
		deleteWatcher: deleteWatcher.bind({ endpointCaller }),
		getComment: getComment.bind({ endpointCaller }),
		getFieldOptions: getFieldOptions.bind({ endpointCaller }),
		getIssue: getIssue.bind({ endpointCaller }),
		getIssueTransitions: getIssueTransitions.bind({ endpointCaller }),
		getIssueWatchers: getIssueWatchers.bind({ endpointCaller }),
		getProjectComponents: getProjectComponents.bind({ endpointCaller }),
		getProjectVersions: getProjectVersions.bind({ endpointCaller }),
		getUser: getUser.bind({ endpointCaller }),
		listComments: listComments.bind({ endpointCaller }),
		listUsers: listUsers.bind({ endpointCaller }),
		reorderFieldOptions: reorderFieldOptions.bind({ endpointCaller }),
		searchIssues: searchIssues.bind({ endpointCaller }),
		searchUsers: searchUsers.bind({ endpointCaller }),
		transitionIssue: transitionIssue.bind({ endpointCaller }),
		updateComment: updateComment.bind({ endpointCaller }),
		updateComponent: updateComponent.bind({ endpointCaller }),
		updateFieldOptions: updateFieldOptions.bind({ endpointCaller }),
		updateIssue: updateIssue.bind({ endpointCaller }),
		updateProjectVersion: updateProjectVersion.bind({ endpointCaller }),
	};
};

export class JiraV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
