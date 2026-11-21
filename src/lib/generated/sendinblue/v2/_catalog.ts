// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addContactsToList } from './add-contacts-to-list.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { createContact } from './create-contact.ts';
import { createEmailCampaign } from './create-email-campaign.ts';
import { createFolder } from './create-folder.ts';
import { createList } from './create-list.ts';
import { deleteContact } from './delete-contact.ts';
import { deleteEmailCampaign } from './delete-email-campaign.ts';
import { deleteFolder } from './delete-folder.ts';
import { deleteList } from './delete-list.ts';
import { getAccount } from './get-account.ts';
import { getContact } from './get-contact.ts';
import { getEmailCampaign } from './get-email-campaign.ts';
import { getFolder } from './get-folder.ts';
import { getList } from './get-list.ts';
import { listContacts } from './list-contacts.ts';
import { listContactsInList } from './list-contacts-in-list.ts';
import { listEmailCampaigns } from './list-email-campaigns.ts';
import { listFolders } from './list-folders.ts';
import { listLists } from './list-lists.ts';
import { listListsInFolder } from './list-lists-in-folder.ts';
import { sendCampaignReport } from './send-campaign-report.ts';
import { sendEmail } from './send-email.ts';
import { sendSms } from './send-sms.ts';
import { updateContact } from './update-contact.ts';
import { updateEmailCampaign } from './update-email-campaign.ts';
import { updateFolder } from './update-folder.ts';
import { updateList } from './update-list.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { AddContactsToListInput, AddContactsToListOutput } from './add-contacts-to-list.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateContactInput, CreateContactOutput } from './create-contact.ts';
export type {
	CreateEmailCampaignInput,
	CreateEmailCampaignOutput,
} from './create-email-campaign.ts';
export type { CreateFolderInput, CreateFolderOutput } from './create-folder.ts';
export type { CreateListInput, CreateListOutput } from './create-list.ts';
export type { DeleteContactInput, DeleteContactOutput } from './delete-contact.ts';
export type {
	DeleteEmailCampaignInput,
	DeleteEmailCampaignOutput,
} from './delete-email-campaign.ts';
export type { DeleteFolderInput, DeleteFolderOutput } from './delete-folder.ts';
export type { DeleteListInput, DeleteListOutput } from './delete-list.ts';
export type { GetAccountInput, GetAccountOutput } from './get-account.ts';
export type { GetContactInput, GetContactOutput } from './get-contact.ts';
export type { GetEmailCampaignInput, GetEmailCampaignOutput } from './get-email-campaign.ts';
export type { GetFolderInput, GetFolderOutput } from './get-folder.ts';
export type { GetListInput, GetListOutput } from './get-list.ts';
export type { ListContactsInput, ListContactsOutput } from './list-contacts.ts';
export type { ListContactsInListInput, ListContactsInListOutput } from './list-contacts-in-list.ts';
export type { ListEmailCampaignsInput, ListEmailCampaignsOutput } from './list-email-campaigns.ts';
export type { ListFoldersInput, ListFoldersOutput } from './list-folders.ts';
export type { ListListsInput, ListListsOutput } from './list-lists.ts';
export type { ListListsInFolderInput, ListListsInFolderOutput } from './list-lists-in-folder.ts';
export type { SendCampaignReportInput, SendCampaignReportOutput } from './send-campaign-report.ts';
export type { SendEmailInput, SendEmailOutput } from './send-email.ts';
export type { SendSmsInput, SendSmsOutput } from './send-sms.ts';
export type { UpdateContactInput, UpdateContactOutput } from './update-contact.ts';
export type {
	UpdateEmailCampaignInput,
	UpdateEmailCampaignOutput,
} from './update-email-campaign.ts';
export type { UpdateFolderInput, UpdateFolderOutput } from './update-folder.ts';
export type { UpdateListInput, UpdateListOutput } from './update-list.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addContactsToList: addContactsToList.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createContact: createContact.bind({ endpointCaller }),
		createEmailCampaign: createEmailCampaign.bind({ endpointCaller }),
		createFolder: createFolder.bind({ endpointCaller }),
		createList: createList.bind({ endpointCaller }),
		deleteContact: deleteContact.bind({ endpointCaller }),
		deleteEmailCampaign: deleteEmailCampaign.bind({ endpointCaller }),
		deleteFolder: deleteFolder.bind({ endpointCaller }),
		deleteList: deleteList.bind({ endpointCaller }),
		getAccount: getAccount.bind({ endpointCaller }),
		getContact: getContact.bind({ endpointCaller }),
		getEmailCampaign: getEmailCampaign.bind({ endpointCaller }),
		getFolder: getFolder.bind({ endpointCaller }),
		getList: getList.bind({ endpointCaller }),
		listContacts: listContacts.bind({ endpointCaller }),
		listContactsInList: listContactsInList.bind({ endpointCaller }),
		listEmailCampaigns: listEmailCampaigns.bind({ endpointCaller }),
		listFolders: listFolders.bind({ endpointCaller }),
		listLists: listLists.bind({ endpointCaller }),
		listListsInFolder: listListsInFolder.bind({ endpointCaller }),
		sendCampaignReport: sendCampaignReport.bind({ endpointCaller }),
		sendEmail: sendEmail.bind({ endpointCaller }),
		sendSms: sendSms.bind({ endpointCaller }),
		updateContact: updateContact.bind({ endpointCaller }),
		updateEmailCampaign: updateEmailCampaign.bind({ endpointCaller }),
		updateFolder: updateFolder.bind({ endpointCaller }),
		updateList: updateList.bind({ endpointCaller }),
	};
};

export class SendinblueV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
