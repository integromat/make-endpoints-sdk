// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addAssignees } from './add-assignees.ts';
import { addLabels } from './add-labels.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { createComment } from './create-comment.ts';
import { createIssue } from './create-issue.ts';
import { deleteComment } from './delete-comment.ts';
import { deleteIssue } from './delete-issue.ts';
import { getAssignee } from './get-assignee.ts';
import { getBranch } from './get-branch.ts';
import { getComment } from './get-comment.ts';
import { getGist } from './get-gist.ts';
import { getIssue } from './get-issue.ts';
import { getMilestone } from './get-milestone.ts';
import { getOrganization } from './get-organization.ts';
import { getPullRequest } from './get-pull-request.ts';
import { getRelease } from './get-release.ts';
import { getRepository } from './get-repository.ts';
import { getUser } from './get-user.ts';
import { listCommits } from './list-commits.ts';
import { listForks } from './list-forks.ts';
import { listLabels } from './list-labels.ts';
import { listOrganizations } from './list-organizations.ts';
import { listRepositories } from './list-repositories.ts';
import { removeAssignees } from './remove-assignees.ts';
import { removeLabel } from './remove-label.ts';
import { searchAssignees } from './search-assignees.ts';
import { searchBranches } from './search-branches.ts';
import { searchComments } from './search-comments.ts';
import { searchCommitComments } from './search-commit-comments.ts';
import { searchGists } from './search-gists.ts';
import { searchIssues } from './search-issues.ts';
import { searchMilestones } from './search-milestones.ts';
import { searchOrganizationMembers } from './search-organization-members.ts';
import { searchPullRequests } from './search-pull-requests.ts';
import { searchReleases } from './search-releases.ts';
import { updateComment } from './update-comment.ts';
import { updateIssue } from './update-issue.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddAssigneesInput, AddAssigneesOutput } from './add-assignees.ts';
export type { AddLabelsInput, AddLabelsOutput } from './add-labels.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateCommentInput, CreateCommentOutput } from './create-comment.ts';
export type { CreateIssueInput, CreateIssueOutput } from './create-issue.ts';
export type { DeleteCommentInput, DeleteCommentOutput } from './delete-comment.ts';
export type { DeleteIssueInput, DeleteIssueOutput } from './delete-issue.ts';
export type { GetAssigneeInput, GetAssigneeOutput } from './get-assignee.ts';
export type { GetBranchInput, GetBranchOutput } from './get-branch.ts';
export type { GetCommentInput, GetCommentOutput } from './get-comment.ts';
export type { GetGistInput, GetGistOutput } from './get-gist.ts';
export type { GetIssueInput, GetIssueOutput } from './get-issue.ts';
export type { GetMilestoneInput, GetMilestoneOutput } from './get-milestone.ts';
export type { GetOrganizationInput, GetOrganizationOutput } from './get-organization.ts';
export type { GetPullRequestInput, GetPullRequestOutput } from './get-pull-request.ts';
export type { GetReleaseInput, GetReleaseOutput } from './get-release.ts';
export type { GetRepositoryInput, GetRepositoryOutput } from './get-repository.ts';
export type { GetUserInput, GetUserOutput } from './get-user.ts';
export type { ListCommitsInput, ListCommitsOutput } from './list-commits.ts';
export type { ListForksInput, ListForksOutput } from './list-forks.ts';
export type { ListLabelsInput, ListLabelsOutput } from './list-labels.ts';
export type { ListOrganizationsInput, ListOrganizationsOutput } from './list-organizations.ts';
export type { ListRepositoriesInput, ListRepositoriesOutput } from './list-repositories.ts';
export type { RemoveAssigneesInput, RemoveAssigneesOutput } from './remove-assignees.ts';
export type { RemoveLabelInput, RemoveLabelOutput } from './remove-label.ts';
export type { SearchAssigneesInput, SearchAssigneesOutput } from './search-assignees.ts';
export type { SearchBranchesInput, SearchBranchesOutput } from './search-branches.ts';
export type { SearchCommentsInput, SearchCommentsOutput } from './search-comments.ts';
export type {
	SearchCommitCommentsInput,
	SearchCommitCommentsOutput,
} from './search-commit-comments.ts';
export type { SearchGistsInput, SearchGistsOutput } from './search-gists.ts';
export type { SearchIssuesInput, SearchIssuesOutput } from './search-issues.ts';
export type { SearchMilestonesInput, SearchMilestonesOutput } from './search-milestones.ts';
export type {
	SearchOrganizationMembersInput,
	SearchOrganizationMembersOutput,
} from './search-organization-members.ts';
export type { SearchPullRequestsInput, SearchPullRequestsOutput } from './search-pull-requests.ts';
export type { SearchReleasesInput, SearchReleasesOutput } from './search-releases.ts';
export type { UpdateCommentInput, UpdateCommentOutput } from './update-comment.ts';
export type { UpdateIssueInput, UpdateIssueOutput } from './update-issue.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addAssignees: addAssignees.bind({ endpointCaller }),
		addLabels: addLabels.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createComment: createComment.bind({ endpointCaller }),
		createIssue: createIssue.bind({ endpointCaller }),
		deleteComment: deleteComment.bind({ endpointCaller }),
		deleteIssue: deleteIssue.bind({ endpointCaller }),
		getAssignee: getAssignee.bind({ endpointCaller }),
		getBranch: getBranch.bind({ endpointCaller }),
		getComment: getComment.bind({ endpointCaller }),
		getGist: getGist.bind({ endpointCaller }),
		getIssue: getIssue.bind({ endpointCaller }),
		getMilestone: getMilestone.bind({ endpointCaller }),
		getOrganization: getOrganization.bind({ endpointCaller }),
		getPullRequest: getPullRequest.bind({ endpointCaller }),
		getRelease: getRelease.bind({ endpointCaller }),
		getRepository: getRepository.bind({ endpointCaller }),
		getUser: getUser.bind({ endpointCaller }),
		listCommits: listCommits.bind({ endpointCaller }),
		listForks: listForks.bind({ endpointCaller }),
		listLabels: listLabels.bind({ endpointCaller }),
		listOrganizations: listOrganizations.bind({ endpointCaller }),
		listRepositories: listRepositories.bind({ endpointCaller }),
		removeAssignees: removeAssignees.bind({ endpointCaller }),
		removeLabel: removeLabel.bind({ endpointCaller }),
		searchAssignees: searchAssignees.bind({ endpointCaller }),
		searchBranches: searchBranches.bind({ endpointCaller }),
		searchComments: searchComments.bind({ endpointCaller }),
		searchCommitComments: searchCommitComments.bind({ endpointCaller }),
		searchGists: searchGists.bind({ endpointCaller }),
		searchIssues: searchIssues.bind({ endpointCaller }),
		searchMilestones: searchMilestones.bind({ endpointCaller }),
		searchOrganizationMembers: searchOrganizationMembers.bind({ endpointCaller }),
		searchPullRequests: searchPullRequests.bind({ endpointCaller }),
		searchReleases: searchReleases.bind({ endpointCaller }),
		updateComment: updateComment.bind({ endpointCaller }),
		updateIssue: updateIssue.bind({ endpointCaller }),
	};
};

export class GithubV4Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
