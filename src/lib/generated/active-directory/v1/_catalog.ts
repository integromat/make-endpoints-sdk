// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addGroupMembers } from './add-group-members.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { createUser } from './create-user.ts';
import { deleteUser } from './delete-user.ts';
import { getCurrentUser } from './get-current-user.ts';
import { getGroup } from './get-group.ts';
import { getUser } from './get-user.ts';
import { getUserGroups } from './get-user-groups.ts';
import { listGroups } from './list-groups.ts';
import { listUsers } from './list-users.ts';
import { removeGroupMember } from './remove-group-member.ts';
import { updateUser } from './update-user.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddGroupMembersInput, AddGroupMembersOutput } from './add-group-members.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateUserInput, CreateUserOutput } from './create-user.ts';
export type { DeleteUserInput, DeleteUserOutput } from './delete-user.ts';
export type { GetCurrentUserInput, GetCurrentUserOutput } from './get-current-user.ts';
export type { GetGroupInput, GetGroupOutput } from './get-group.ts';
export type { GetUserInput, GetUserOutput } from './get-user.ts';
export type { GetUserGroupsInput, GetUserGroupsOutput } from './get-user-groups.ts';
export type { ListGroupsInput, ListGroupsOutput } from './list-groups.ts';
export type { ListUsersInput, ListUsersOutput } from './list-users.ts';
export type { RemoveGroupMemberInput, RemoveGroupMemberOutput } from './remove-group-member.ts';
export type { UpdateUserInput, UpdateUserOutput } from './update-user.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addGroupMembers: addGroupMembers.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createUser: createUser.bind({ endpointCaller }),
		deleteUser: deleteUser.bind({ endpointCaller }),
		getCurrentUser: getCurrentUser.bind({ endpointCaller }),
		getGroup: getGroup.bind({ endpointCaller }),
		getUser: getUser.bind({ endpointCaller }),
		getUserGroups: getUserGroups.bind({ endpointCaller }),
		listGroups: listGroups.bind({ endpointCaller }),
		listUsers: listUsers.bind({ endpointCaller }),
		removeGroupMember: removeGroupMember.bind({ endpointCaller }),
		updateUser: updateUser.bind({ endpointCaller }),
	};
};

export class ActiveDirectoryV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
