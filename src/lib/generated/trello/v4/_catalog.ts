// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addAlabelToAcard } from './add-alabel-to-acard.ts';
import { addAmemberToAcard } from './add-amember-to-acard.ts';
import { addAnAttachment } from './add-an-attachment.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { archiveOrUnarchiveAboard } from './archive-or-unarchive-aboard.ts';
import { archiveOrUnarchiveAcard } from './archive-or-unarchive-acard.ts';
import { archiveOrUnarchiveAlist } from './archive-or-unarchive-alist.ts';
import { assignMemberToAboard } from './assign-member-to-aboard.ts';
import { createAboard } from './create-aboard.ts';
import { createAchecklist } from './create-achecklist.ts';
import { createAcommentInAcard } from './create-acomment-in-acard.ts';
import { createAcustomField } from './create-acustom-field.ts';
import { createAlabel } from './create-alabel.ts';
import { createAlist } from './create-alist.ts';
import { createCard } from './create-card.ts';
import { createChecklistItem } from './create-checklist-item.ts';
import { createExportForOrganizations } from './create-export-for-organizations.ts';
import { deleteAcard } from './delete-acard.ts';
import { deleteAchecklist } from './delete-achecklist.ts';
import { deleteAcommentInAcard } from './delete-acomment-in-acard.ts';
import { deleteAlabel } from './delete-alabel.ts';
import { deleteAnAttachment } from './delete-an-attachment.ts';
import { editAchecklistItem } from './edit-achecklist-item.ts';
import { editAcommentInAcard } from './edit-acomment-in-acard.ts';
import { editAlabel } from './edit-alabel.ts';
import { editAlist } from './edit-alist.ts';
import { getAcard } from './get-acard.ts';
import { getAcardChecklists } from './get-acard-checklists.ts';
import { getAchecklist } from './get-achecklist.ts';
import { getAcustomField } from './get-acustom-field.ts';
import { getAlabel } from './get-alabel.ts';
import { getAlist } from './get-alist.ts';
import { getAnAttachment } from './get-an-attachment.ts';
import { getBoard } from './get-board.ts';
import { getBoardActions } from './get-board-actions.ts';
import { getBoardLists } from './get-board-lists.ts';
import { getCardActions } from './get-card-actions.ts';
import { getCustomFieldOptions } from './get-custom-field-options.ts';
import { getListActions } from './get-list-actions.ts';
import { getMemberActions } from './get-member-actions.ts';
import { getOrganizationExports } from './get-organization-exports.ts';
import { listAttachments } from './list-attachments.ts';
import { listCommentsInAcard } from './list-comments-in-acard.ts';
import { removeAlabelFromAcard } from './remove-alabel-from-acard.ts';
import { removeAmemberFromAcard } from './remove-amember-from-acard.ts';
import { removeAnItemFromChecklist } from './remove-an-item-from-checklist.ts';
import { retrieveLabels } from './retrieve-labels.ts';
import { searchBoards } from './search-boards.ts';
import { setAcustomFieldOnAcard } from './set-acustom-field-on-acard.ts';
import { unassignAmemberFromAboard } from './unassign-amember-from-aboard.ts';
import { watchNotifications } from './watch-notifications.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddALabelToACardInput, AddALabelToACardOutput } from './add-alabel-to-acard.ts';
export type { AddAMemberToACardInput, AddAMemberToACardOutput } from './add-amember-to-acard.ts';
export type { AddAnAttachmentInput, AddAnAttachmentOutput } from './add-an-attachment.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type {
	ArchiveOrUnarchiveABoardInput,
	ArchiveOrUnarchiveABoardOutput,
} from './archive-or-unarchive-aboard.ts';
export type {
	ArchiveOrUnarchiveACardInput,
	ArchiveOrUnarchiveACardOutput,
} from './archive-or-unarchive-acard.ts';
export type {
	ArchiveOrUnarchiveAListInput,
	ArchiveOrUnarchiveAListOutput,
} from './archive-or-unarchive-alist.ts';
export type {
	AssignMemberToABoardInput,
	AssignMemberToABoardOutput,
} from './assign-member-to-aboard.ts';
export type { CreateABoardInput, CreateABoardOutput } from './create-aboard.ts';
export type { CreateAChecklistInput, CreateAChecklistOutput } from './create-achecklist.ts';
export type {
	CreateACommentInACardInput,
	CreateACommentInACardOutput,
} from './create-acomment-in-acard.ts';
export type { CreateACustomFieldInput, CreateACustomFieldOutput } from './create-acustom-field.ts';
export type { CreateALabelInput, CreateALabelOutput } from './create-alabel.ts';
export type { CreateAListInput, CreateAListOutput } from './create-alist.ts';
export type { CreateCardInput, CreateCardOutput } from './create-card.ts';
export type {
	CreateChecklistItemInput,
	CreateChecklistItemOutput,
} from './create-checklist-item.ts';
export type {
	CreateExportForOrganizationsInput,
	CreateExportForOrganizationsOutput,
} from './create-export-for-organizations.ts';
export type { DeleteACardInput, DeleteACardOutput } from './delete-acard.ts';
export type { DeleteAChecklistInput, DeleteAChecklistOutput } from './delete-achecklist.ts';
export type {
	DeleteACommentInACardInput,
	DeleteACommentInACardOutput,
} from './delete-acomment-in-acard.ts';
export type { DeleteALabelInput, DeleteALabelOutput } from './delete-alabel.ts';
export type { DeleteAnAttachmentInput, DeleteAnAttachmentOutput } from './delete-an-attachment.ts';
export type { EditAChecklistItemInput, EditAChecklistItemOutput } from './edit-achecklist-item.ts';
export type {
	EditACommentInACardInput,
	EditACommentInACardOutput,
} from './edit-acomment-in-acard.ts';
export type { EditALabelInput, EditALabelOutput } from './edit-alabel.ts';
export type { EditAListInput, EditAListOutput } from './edit-alist.ts';
export type { GetACardInput, GetACardOutput } from './get-acard.ts';
export type { GetACardChecklistsInput, GetACardChecklistsOutput } from './get-acard-checklists.ts';
export type { GetAChecklistInput, GetAChecklistOutput } from './get-achecklist.ts';
export type { GetACustomFieldInput, GetACustomFieldOutput } from './get-acustom-field.ts';
export type { GetALabelInput, GetALabelOutput } from './get-alabel.ts';
export type { GetAListInput, GetAListOutput } from './get-alist.ts';
export type { GetAnAttachmentInput, GetAnAttachmentOutput } from './get-an-attachment.ts';
export type { GetBoardInput, GetBoardOutput } from './get-board.ts';
export type { GetBoardActionsInput, GetBoardActionsOutput } from './get-board-actions.ts';
export type { GetBoardListsInput, GetBoardListsOutput } from './get-board-lists.ts';
export type { GetCardActionsInput, GetCardActionsOutput } from './get-card-actions.ts';
export type {
	GetCustomFieldOptionsInput,
	GetCustomFieldOptionsOutput,
} from './get-custom-field-options.ts';
export type { GetListActionsInput, GetListActionsOutput } from './get-list-actions.ts';
export type { GetMemberActionsInput, GetMemberActionsOutput } from './get-member-actions.ts';
export type {
	GetOrganizationExportsInput,
	GetOrganizationExportsOutput,
} from './get-organization-exports.ts';
export type { ListAttachmentsInput, ListAttachmentsOutput } from './list-attachments.ts';
export type {
	ListCommentsInACardInput,
	ListCommentsInACardOutput,
} from './list-comments-in-acard.ts';
export type {
	RemoveALabelFromACardInput,
	RemoveALabelFromACardOutput,
} from './remove-alabel-from-acard.ts';
export type {
	RemoveAMemberFromACardInput,
	RemoveAMemberFromACardOutput,
} from './remove-amember-from-acard.ts';
export type {
	RemoveAnItemFromChecklistInput,
	RemoveAnItemFromChecklistOutput,
} from './remove-an-item-from-checklist.ts';
export type { RetrieveLabelsInput, RetrieveLabelsOutput } from './retrieve-labels.ts';
export type { SearchBoardsInput, SearchBoardsOutput } from './search-boards.ts';
export type {
	SetACustomFieldOnACardInput,
	SetACustomFieldOnACardOutput,
} from './set-acustom-field-on-acard.ts';
export type {
	UnassignAMemberFromABoardInput,
	UnassignAMemberFromABoardOutput,
} from './unassign-amember-from-aboard.ts';
export type { WatchNotificationsInput, WatchNotificationsOutput } from './watch-notifications.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addAlabelToAcard: addAlabelToAcard.bind({ endpointCaller }),
		addAmemberToAcard: addAmemberToAcard.bind({ endpointCaller }),
		addAnAttachment: addAnAttachment.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		archiveOrUnarchiveAboard: archiveOrUnarchiveAboard.bind({ endpointCaller }),
		archiveOrUnarchiveAcard: archiveOrUnarchiveAcard.bind({ endpointCaller }),
		archiveOrUnarchiveAlist: archiveOrUnarchiveAlist.bind({ endpointCaller }),
		assignMemberToAboard: assignMemberToAboard.bind({ endpointCaller }),
		createAboard: createAboard.bind({ endpointCaller }),
		createAchecklist: createAchecklist.bind({ endpointCaller }),
		createAcommentInAcard: createAcommentInAcard.bind({ endpointCaller }),
		createAcustomField: createAcustomField.bind({ endpointCaller }),
		createAlabel: createAlabel.bind({ endpointCaller }),
		createAlist: createAlist.bind({ endpointCaller }),
		createCard: createCard.bind({ endpointCaller }),
		createChecklistItem: createChecklistItem.bind({ endpointCaller }),
		createExportForOrganizations: createExportForOrganizations.bind({ endpointCaller }),
		deleteAcard: deleteAcard.bind({ endpointCaller }),
		deleteAchecklist: deleteAchecklist.bind({ endpointCaller }),
		deleteAcommentInAcard: deleteAcommentInAcard.bind({ endpointCaller }),
		deleteAlabel: deleteAlabel.bind({ endpointCaller }),
		deleteAnAttachment: deleteAnAttachment.bind({ endpointCaller }),
		editAchecklistItem: editAchecklistItem.bind({ endpointCaller }),
		editAcommentInAcard: editAcommentInAcard.bind({ endpointCaller }),
		editAlabel: editAlabel.bind({ endpointCaller }),
		editAlist: editAlist.bind({ endpointCaller }),
		getAcard: getAcard.bind({ endpointCaller }),
		getAcardChecklists: getAcardChecklists.bind({ endpointCaller }),
		getAchecklist: getAchecklist.bind({ endpointCaller }),
		getAcustomField: getAcustomField.bind({ endpointCaller }),
		getAlabel: getAlabel.bind({ endpointCaller }),
		getAlist: getAlist.bind({ endpointCaller }),
		getAnAttachment: getAnAttachment.bind({ endpointCaller }),
		getBoard: getBoard.bind({ endpointCaller }),
		getBoardActions: getBoardActions.bind({ endpointCaller }),
		getBoardLists: getBoardLists.bind({ endpointCaller }),
		getCardActions: getCardActions.bind({ endpointCaller }),
		getCustomFieldOptions: getCustomFieldOptions.bind({ endpointCaller }),
		getListActions: getListActions.bind({ endpointCaller }),
		getMemberActions: getMemberActions.bind({ endpointCaller }),
		getOrganizationExports: getOrganizationExports.bind({ endpointCaller }),
		listAttachments: listAttachments.bind({ endpointCaller }),
		listCommentsInAcard: listCommentsInAcard.bind({ endpointCaller }),
		removeAlabelFromAcard: removeAlabelFromAcard.bind({ endpointCaller }),
		removeAmemberFromAcard: removeAmemberFromAcard.bind({ endpointCaller }),
		removeAnItemFromChecklist: removeAnItemFromChecklist.bind({ endpointCaller }),
		retrieveLabels: retrieveLabels.bind({ endpointCaller }),
		searchBoards: searchBoards.bind({ endpointCaller }),
		setAcustomFieldOnAcard: setAcustomFieldOnAcard.bind({ endpointCaller }),
		unassignAmemberFromAboard: unassignAmemberFromAboard.bind({ endpointCaller }),
		watchNotifications: watchNotifications.bind({ endpointCaller }),
	};
};

export class TrelloV4Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
