// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addAliasForGroup } from './add-alias-for-group.ts';
import { addMemberToGroup } from './add-member-to-group.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { createGroup } from './create-group.ts';
import { deleteAlias } from './delete-alias.ts';
import { deleteGroup } from './delete-group.ts';
import { deleteMember } from './delete-member.ts';
import { getGroup } from './get-group.ts';
import { getGroupSettings } from './get-group-settings.ts';
import { getMember } from './get-member.ts';
import { listAliases } from './list-aliases.ts';
import { listGroups } from './list-groups.ts';
import { listMembers } from './list-members.ts';
import { updateGroupSettings } from './update-group-settings.ts';
import { updateMember } from './update-member.ts';
import { updatesGroup } from './updates-group.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddAliasForGroupInput, AddAliasForGroupOutput } from './add-alias-for-group.ts';
export type { AddMemberToGroupInput, AddMemberToGroupOutput } from './add-member-to-group.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateGroupInput, CreateGroupOutput } from './create-group.ts';
export type { DeleteAliasInput, DeleteAliasOutput } from './delete-alias.ts';
export type { DeleteGroupInput, DeleteGroupOutput } from './delete-group.ts';
export type { DeleteMemberInput, DeleteMemberOutput } from './delete-member.ts';
export type { GetGroupInput, GetGroupOutput } from './get-group.ts';
export type { GetGroupSettingsInput, GetGroupSettingsOutput } from './get-group-settings.ts';
export type { GetMemberInput, GetMemberOutput } from './get-member.ts';
export type { ListAliasesInput, ListAliasesOutput } from './list-aliases.ts';
export type { ListGroupsInput, ListGroupsOutput } from './list-groups.ts';
export type { ListMembersInput, ListMembersOutput } from './list-members.ts';
export type {
	UpdateGroupSettingsInput,
	UpdateGroupSettingsOutput,
} from './update-group-settings.ts';
export type { UpdateMemberInput, UpdateMemberOutput } from './update-member.ts';
export type { UpdatesGroupInput, UpdatesGroupOutput } from './updates-group.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addAliasForGroup: addAliasForGroup.bind({ endpointCaller }),
		addMemberToGroup: addMemberToGroup.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createGroup: createGroup.bind({ endpointCaller }),
		deleteAlias: deleteAlias.bind({ endpointCaller }),
		deleteGroup: deleteGroup.bind({ endpointCaller }),
		deleteMember: deleteMember.bind({ endpointCaller }),
		getGroup: getGroup.bind({ endpointCaller }),
		getGroupSettings: getGroupSettings.bind({ endpointCaller }),
		getMember: getMember.bind({ endpointCaller }),
		listAliases: listAliases.bind({ endpointCaller }),
		listGroups: listGroups.bind({ endpointCaller }),
		listMembers: listMembers.bind({ endpointCaller }),
		updateGroupSettings: updateGroupSettings.bind({ endpointCaller }),
		updateMember: updateMember.bind({ endpointCaller }),
		updatesGroup: updatesGroup.bind({ endpointCaller }),
	};
};

export class GoogleGroupsV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
