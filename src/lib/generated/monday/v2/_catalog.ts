// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addUsersToBoard } from './add-users-to-board.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { archiveItem } from './archive-item.ts';
import { changeMultipleColumnValues } from './change-multiple-column-values.ts';
import { createBoard } from './create-board.ts';
import { createColumn } from './create-column.ts';
import { createGroup } from './create-group.ts';
import { createItem } from './create-item.ts';
import { createNotification } from './create-notification.ts';
import { createOrGetTag } from './create-or-get-tag.ts';
import { createSubitem } from './create-subitem.ts';
import { createUpdate } from './create-update.ts';
import { deleteItem } from './delete-item.ts';
import { deleteSubscribersFromBoard } from './delete-subscribers-from-board.ts';
import { duplicateBoard } from './duplicate-board.ts';
import { duplicateGroup } from './duplicate-group.ts';
import { duplicateItem } from './duplicate-item.ts';
import { getAggregate } from './get-aggregate.ts';
import { getBoard } from './get-board.ts';
import { getGroup } from './get-group.ts';
import { getItem } from './get-item.ts';
import { getItemColumnValues } from './get-item-column-values.ts';
import { getTeam } from './get-team.ts';
import { getUser } from './get-user.ts';
import { listAssets } from './list-assets.ts';
import { listBoardActivityLogs } from './list-board-activity-logs.ts';
import { listBoardItems } from './list-board-items.ts';
import { listBoardSubscribers } from './list-board-subscribers.ts';
import { listBoards } from './list-boards.ts';
import { listGroupItems } from './list-group-items.ts';
import { listGroups } from './list-groups.ts';
import { listItemSubscribers } from './list-item-subscribers.ts';
import { listItemUpdates } from './list-item-updates.ts';
import { listTeams } from './list-teams.ts';
import { listUpdates } from './list-updates.ts';
import { listUsers } from './list-users.ts';
import { listWorkspaces } from './list-workspaces.ts';
import { moveItemToGroup } from './move-item-to-group.ts';
import { nextItemsPage } from './next-items-page.ts';
import { runMondayAi } from './run-monday-ai.ts';
import { runPlatformAgent } from './run-platform-agent.ts';
import { searchItemsByColumnValues } from './search-items-by-column-values.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddUsersToBoardInput, AddUsersToBoardOutput } from './add-users-to-board.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { ArchiveItemInput, ArchiveItemOutput } from './archive-item.ts';
export type {
	ChangeMultipleColumnValuesInput,
	ChangeMultipleColumnValuesOutput,
} from './change-multiple-column-values.ts';
export type { CreateBoardInput, CreateBoardOutput } from './create-board.ts';
export type { CreateColumnInput, CreateColumnOutput } from './create-column.ts';
export type { CreateGroupInput, CreateGroupOutput } from './create-group.ts';
export type { CreateItemInput, CreateItemOutput } from './create-item.ts';
export type { CreateNotificationInput, CreateNotificationOutput } from './create-notification.ts';
export type { CreateOrGetTagInput, CreateOrGetTagOutput } from './create-or-get-tag.ts';
export type { CreateSubitemInput, CreateSubitemOutput } from './create-subitem.ts';
export type { CreateUpdateInput, CreateUpdateOutput } from './create-update.ts';
export type { DeleteItemInput, DeleteItemOutput } from './delete-item.ts';
export type {
	DeleteSubscribersFromBoardInput,
	DeleteSubscribersFromBoardOutput,
} from './delete-subscribers-from-board.ts';
export type { DuplicateBoardInput, DuplicateBoardOutput } from './duplicate-board.ts';
export type { DuplicateGroupInput, DuplicateGroupOutput } from './duplicate-group.ts';
export type { DuplicateItemInput, DuplicateItemOutput } from './duplicate-item.ts';
export type { GetAggregateInput, GetAggregateOutput } from './get-aggregate.ts';
export type { GetBoardInput, GetBoardOutput } from './get-board.ts';
export type { GetGroupInput, GetGroupOutput } from './get-group.ts';
export type { GetItemInput, GetItemOutput } from './get-item.ts';
export type {
	GetItemColumnValuesInput,
	GetItemColumnValuesOutput,
} from './get-item-column-values.ts';
export type { GetTeamInput, GetTeamOutput } from './get-team.ts';
export type { GetUserInput, GetUserOutput } from './get-user.ts';
export type { ListAssetsInput, ListAssetsOutput } from './list-assets.ts';
export type {
	ListBoardActivityLogsInput,
	ListBoardActivityLogsOutput,
} from './list-board-activity-logs.ts';
export type { ListBoardItemsInput, ListBoardItemsOutput } from './list-board-items.ts';
export type {
	ListBoardSubscribersInput,
	ListBoardSubscribersOutput,
} from './list-board-subscribers.ts';
export type { ListBoardsInput, ListBoardsOutput } from './list-boards.ts';
export type { ListGroupItemsInput, ListGroupItemsOutput } from './list-group-items.ts';
export type { ListGroupsInput, ListGroupsOutput } from './list-groups.ts';
export type {
	ListItemSubscribersInput,
	ListItemSubscribersOutput,
} from './list-item-subscribers.ts';
export type { ListItemUpdatesInput, ListItemUpdatesOutput } from './list-item-updates.ts';
export type { ListTeamsInput, ListTeamsOutput } from './list-teams.ts';
export type { ListUpdatesInput, ListUpdatesOutput } from './list-updates.ts';
export type { ListUsersInput, ListUsersOutput } from './list-users.ts';
export type { ListWorkspacesInput, ListWorkspacesOutput } from './list-workspaces.ts';
export type { MoveItemToGroupInput, MoveItemToGroupOutput } from './move-item-to-group.ts';
export type { NextItemsPageInput, NextItemsPageOutput } from './next-items-page.ts';
export type { RunMondayAiInput, RunMondayAiOutput } from './run-monday-ai.ts';
export type { RunPlatformAgentInput, RunPlatformAgentOutput } from './run-platform-agent.ts';
export type {
	SearchItemsByColumnValuesInput,
	SearchItemsByColumnValuesOutput,
} from './search-items-by-column-values.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addUsersToBoard: addUsersToBoard.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		archiveItem: archiveItem.bind({ endpointCaller }),
		changeMultipleColumnValues: changeMultipleColumnValues.bind({ endpointCaller }),
		createBoard: createBoard.bind({ endpointCaller }),
		createColumn: createColumn.bind({ endpointCaller }),
		createGroup: createGroup.bind({ endpointCaller }),
		createItem: createItem.bind({ endpointCaller }),
		createNotification: createNotification.bind({ endpointCaller }),
		createOrGetTag: createOrGetTag.bind({ endpointCaller }),
		createSubitem: createSubitem.bind({ endpointCaller }),
		createUpdate: createUpdate.bind({ endpointCaller }),
		deleteItem: deleteItem.bind({ endpointCaller }),
		deleteSubscribersFromBoard: deleteSubscribersFromBoard.bind({ endpointCaller }),
		duplicateBoard: duplicateBoard.bind({ endpointCaller }),
		duplicateGroup: duplicateGroup.bind({ endpointCaller }),
		duplicateItem: duplicateItem.bind({ endpointCaller }),
		getAggregate: getAggregate.bind({ endpointCaller }),
		getBoard: getBoard.bind({ endpointCaller }),
		getGroup: getGroup.bind({ endpointCaller }),
		getItem: getItem.bind({ endpointCaller }),
		getItemColumnValues: getItemColumnValues.bind({ endpointCaller }),
		getTeam: getTeam.bind({ endpointCaller }),
		getUser: getUser.bind({ endpointCaller }),
		listAssets: listAssets.bind({ endpointCaller }),
		listBoardActivityLogs: listBoardActivityLogs.bind({ endpointCaller }),
		listBoardItems: listBoardItems.bind({ endpointCaller }),
		listBoards: listBoards.bind({ endpointCaller }),
		listBoardSubscribers: listBoardSubscribers.bind({ endpointCaller }),
		listGroupItems: listGroupItems.bind({ endpointCaller }),
		listGroups: listGroups.bind({ endpointCaller }),
		listItemSubscribers: listItemSubscribers.bind({ endpointCaller }),
		listItemUpdates: listItemUpdates.bind({ endpointCaller }),
		listTeams: listTeams.bind({ endpointCaller }),
		listUpdates: listUpdates.bind({ endpointCaller }),
		listUsers: listUsers.bind({ endpointCaller }),
		listWorkspaces: listWorkspaces.bind({ endpointCaller }),
		moveItemToGroup: moveItemToGroup.bind({ endpointCaller }),
		nextItemsPage: nextItemsPage.bind({ endpointCaller }),
		runMondayAi: runMondayAi.bind({ endpointCaller }),
		runPlatformAgent: runPlatformAgent.bind({ endpointCaller }),
		searchItemsByColumnValues: searchItemsByColumnValues.bind({ endpointCaller }),
	};
};

export class MondayV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
