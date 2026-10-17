// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { addContactToWorkflow } from './add-contact-to-workflow.ts';
import { addListMembers } from './add-list-members.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { createAssociation } from './create-association.ts';
import { createCall } from './create-call.ts';
import { createCommunication } from './create-communication.ts';
import { createCompany } from './create-company.ts';
import { createContact } from './create-contact.ts';
import { createCustomObject } from './create-custom-object.ts';
import { createDeal } from './create-deal.ts';
import { createEmail } from './create-email.ts';
import { createEngagement } from './create-engagement.ts';
import { createFolder } from './create-folder.ts';
import { createLineItem } from './create-line-item.ts';
import { createMeeting } from './create-meeting.ts';
import { createNote } from './create-note.ts';
import { createOrUpdateTimelineEvent } from './create-or-update-timeline-event.ts';
import { createOrder } from './create-order.ts';
import { createProduct } from './create-product.ts';
import { createQuote } from './create-quote.ts';
import { createTask } from './create-task.ts';
import { createTicket } from './create-ticket.ts';
import { deleteAssociation } from './delete-association.ts';
import { deleteCall } from './delete-call.ts';
import { deleteCommunication } from './delete-communication.ts';
import { deleteCompany } from './delete-company.ts';
import { deleteContact } from './delete-contact.ts';
import { deleteCustomObject } from './delete-custom-object.ts';
import { deleteDeal } from './delete-deal.ts';
import { deleteEmail } from './delete-email.ts';
import { deleteEngagement } from './delete-engagement.ts';
import { deleteFile } from './delete-file.ts';
import { deleteFolder } from './delete-folder.ts';
import { deleteLineItem } from './delete-line-item.ts';
import { deleteMeeting } from './delete-meeting.ts';
import { deleteNote } from './delete-note.ts';
import { deleteOrder } from './delete-order.ts';
import { deleteProduct } from './delete-product.ts';
import { deleteQuote } from './delete-quote.ts';
import { deleteTask } from './delete-task.ts';
import { deleteTicket } from './delete-ticket.ts';
import { downloadFile } from './download-file.ts';
import { getCall } from './get-call.ts';
import { getCommunication } from './get-communication.ts';
import { getCompany } from './get-company.ts';
import { getContact } from './get-contact.ts';
import { getCustomObject } from './get-custom-object.ts';
import { getDeal } from './get-deal.ts';
import { getEmail } from './get-email.ts';
import { getInvoice } from './get-invoice.ts';
import { getLineItem } from './get-line-item.ts';
import { getMeeting } from './get-meeting.ts';
import { getNote } from './get-note.ts';
import { getOrder } from './get-order.ts';
import { getOwner } from './get-owner.ts';
import { getPipeline } from './get-pipeline.ts';
import { getProduct } from './get-product.ts';
import { getQuote } from './get-quote.ts';
import { getRecordProperty } from './get-record-property.ts';
import { getTask } from './get-task.ts';
import { getTicket } from './get-ticket.ts';
import { getWorkflowIdMapping } from './get-workflow-id-mapping.ts';
import { importFileFromUrl } from './import-file-from-url.ts';
import { listAllContacts } from './list-all-contacts.ts';
import { listAssociations } from './list-associations.ts';
import { listFiles } from './list-files.ts';
import { listForms } from './list-forms.ts';
import { listOwners } from './list-owners.ts';
import { listPipelines } from './list-pipelines.ts';
import { listTimelineEventTemplates } from './list-timeline-event-templates.ts';
import { mergeContacts } from './merge-contacts.ts';
import { removeContactFromWorkflow } from './remove-contact-from-workflow.ts';
import { removeListMembers } from './remove-list-members.ts';
import { searchCalls } from './search-calls.ts';
import { searchCommunications } from './search-communications.ts';
import { searchCompanies } from './search-companies.ts';
import { searchContacts } from './search-contacts.ts';
import { searchCustomObjects } from './search-custom-objects.ts';
import { searchDeals } from './search-deals.ts';
import { searchEmails } from './search-emails.ts';
import { searchInvoices } from './search-invoices.ts';
import { searchLineItems } from './search-line-items.ts';
import { searchMeetings } from './search-meetings.ts';
import { searchNotes } from './search-notes.ts';
import { searchOrders } from './search-orders.ts';
import { searchProducts } from './search-products.ts';
import { searchQuotes } from './search-quotes.ts';
import { searchTasks } from './search-tasks.ts';
import { searchTickets } from './search-tickets.ts';
import { submitFormData } from './submit-form-data.ts';
import { subscribeContact } from './subscribe-contact.ts';
import { unsubscribeContact } from './unsubscribe-contact.ts';
import { updateCall } from './update-call.ts';
import { updateCommunication } from './update-communication.ts';
import { updateCompany } from './update-company.ts';
import { updateContact } from './update-contact.ts';
import { updateCustomObject } from './update-custom-object.ts';
import { updateDeal } from './update-deal.ts';
import { updateEmail } from './update-email.ts';
import { updateFileProperties } from './update-file-properties.ts';
import { updateLineItem } from './update-line-item.ts';
import { updateMeeting } from './update-meeting.ts';
import { updateNote } from './update-note.ts';
import { updateOrder } from './update-order.ts';
import { updateProduct } from './update-product.ts';
import { updateQuote } from './update-quote.ts';
import { updateTask } from './update-task.ts';
import { updateTicket } from './update-ticket.ts';
import { upsertContact } from './upsert-contact.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type {
	AddContactToWorkflowInput,
	AddContactToWorkflowOutput,
} from './add-contact-to-workflow.ts';
export type { AddListMembersInput, AddListMembersOutput } from './add-list-members.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateAssociationInput, CreateAssociationOutput } from './create-association.ts';
export type { CreateCallInput, CreateCallOutput } from './create-call.ts';
export type {
	CreateCommunicationInput,
	CreateCommunicationOutput,
} from './create-communication.ts';
export type { CreateCompanyInput, CreateCompanyOutput } from './create-company.ts';
export type { CreateContactInput, CreateContactOutput } from './create-contact.ts';
export type { CreateCustomObjectInput, CreateCustomObjectOutput } from './create-custom-object.ts';
export type { CreateDealInput, CreateDealOutput } from './create-deal.ts';
export type { CreateEmailInput, CreateEmailOutput } from './create-email.ts';
export type { CreateEngagementInput, CreateEngagementOutput } from './create-engagement.ts';
export type { CreateFolderInput, CreateFolderOutput } from './create-folder.ts';
export type { CreateLineItemInput, CreateLineItemOutput } from './create-line-item.ts';
export type { CreateMeetingInput, CreateMeetingOutput } from './create-meeting.ts';
export type { CreateNoteInput, CreateNoteOutput } from './create-note.ts';
export type {
	CreateOrUpdateTimelineEventInput,
	CreateOrUpdateTimelineEventOutput,
} from './create-or-update-timeline-event.ts';
export type { CreateOrderInput, CreateOrderOutput } from './create-order.ts';
export type { CreateProductInput, CreateProductOutput } from './create-product.ts';
export type { CreateQuoteInput, CreateQuoteOutput } from './create-quote.ts';
export type { CreateTaskInput, CreateTaskOutput } from './create-task.ts';
export type { CreateTicketInput, CreateTicketOutput } from './create-ticket.ts';
export type { DeleteAssociationInput, DeleteAssociationOutput } from './delete-association.ts';
export type { DeleteCallInput, DeleteCallOutput } from './delete-call.ts';
export type {
	DeleteCommunicationInput,
	DeleteCommunicationOutput,
} from './delete-communication.ts';
export type { DeleteCompanyInput, DeleteCompanyOutput } from './delete-company.ts';
export type { DeleteContactInput, DeleteContactOutput } from './delete-contact.ts';
export type { DeleteCustomObjectInput, DeleteCustomObjectOutput } from './delete-custom-object.ts';
export type { DeleteDealInput, DeleteDealOutput } from './delete-deal.ts';
export type { DeleteEmailInput, DeleteEmailOutput } from './delete-email.ts';
export type { DeleteEngagementInput, DeleteEngagementOutput } from './delete-engagement.ts';
export type { DeleteFileInput, DeleteFileOutput } from './delete-file.ts';
export type { DeleteFolderInput, DeleteFolderOutput } from './delete-folder.ts';
export type { DeleteLineItemInput, DeleteLineItemOutput } from './delete-line-item.ts';
export type { DeleteMeetingInput, DeleteMeetingOutput } from './delete-meeting.ts';
export type { DeleteNoteInput, DeleteNoteOutput } from './delete-note.ts';
export type { DeleteOrderInput, DeleteOrderOutput } from './delete-order.ts';
export type { DeleteProductInput, DeleteProductOutput } from './delete-product.ts';
export type { DeleteQuoteInput, DeleteQuoteOutput } from './delete-quote.ts';
export type { DeleteTaskInput, DeleteTaskOutput } from './delete-task.ts';
export type { DeleteTicketInput, DeleteTicketOutput } from './delete-ticket.ts';
export type { DownloadFileInput, DownloadFileOutput } from './download-file.ts';
export type { GetCallInput, GetCallOutput } from './get-call.ts';
export type { GetCommunicationInput, GetCommunicationOutput } from './get-communication.ts';
export type { GetCompanyInput, GetCompanyOutput } from './get-company.ts';
export type { GetContactInput, GetContactOutput } from './get-contact.ts';
export type { GetCustomObjectInput, GetCustomObjectOutput } from './get-custom-object.ts';
export type { GetDealInput, GetDealOutput } from './get-deal.ts';
export type { GetEmailInput, GetEmailOutput } from './get-email.ts';
export type { GetInvoiceInput, GetInvoiceOutput } from './get-invoice.ts';
export type { GetLineItemInput, GetLineItemOutput } from './get-line-item.ts';
export type { GetMeetingInput, GetMeetingOutput } from './get-meeting.ts';
export type { GetNoteInput, GetNoteOutput } from './get-note.ts';
export type { GetOrderInput, GetOrderOutput } from './get-order.ts';
export type { GetOwnerInput, GetOwnerOutput } from './get-owner.ts';
export type { GetPipelineInput, GetPipelineOutput } from './get-pipeline.ts';
export type { GetProductInput, GetProductOutput } from './get-product.ts';
export type { GetQuoteInput, GetQuoteOutput } from './get-quote.ts';
export type { GetRecordPropertyInput, GetRecordPropertyOutput } from './get-record-property.ts';
export type { GetTaskInput, GetTaskOutput } from './get-task.ts';
export type { GetTicketInput, GetTicketOutput } from './get-ticket.ts';
export type {
	GetWorkflowIdMappingInput,
	GetWorkflowIdMappingOutput,
} from './get-workflow-id-mapping.ts';
export type { ImportFileFromUrlInput, ImportFileFromUrlOutput } from './import-file-from-url.ts';
export type { ListAllContactsInput, ListAllContactsOutput } from './list-all-contacts.ts';
export type { ListAssociationsInput, ListAssociationsOutput } from './list-associations.ts';
export type { ListFilesInput, ListFilesOutput } from './list-files.ts';
export type { ListFormsInput, ListFormsOutput } from './list-forms.ts';
export type { ListOwnersInput, ListOwnersOutput } from './list-owners.ts';
export type { ListPipelinesInput, ListPipelinesOutput } from './list-pipelines.ts';
export type {
	ListTimelineEventTemplatesInput,
	ListTimelineEventTemplatesOutput,
} from './list-timeline-event-templates.ts';
export type { MergeContactsInput, MergeContactsOutput } from './merge-contacts.ts';
export type {
	RemoveContactFromWorkflowInput,
	RemoveContactFromWorkflowOutput,
} from './remove-contact-from-workflow.ts';
export type { RemoveListMembersInput, RemoveListMembersOutput } from './remove-list-members.ts';
export type { SearchCallsInput, SearchCallsOutput } from './search-calls.ts';
export type {
	SearchCommunicationsInput,
	SearchCommunicationsOutput,
} from './search-communications.ts';
export type { SearchCompaniesInput, SearchCompaniesOutput } from './search-companies.ts';
export type { SearchContactsInput, SearchContactsOutput } from './search-contacts.ts';
export type {
	SearchCustomObjectsInput,
	SearchCustomObjectsOutput,
} from './search-custom-objects.ts';
export type { SearchDealsInput, SearchDealsOutput } from './search-deals.ts';
export type { SearchEmailsInput, SearchEmailsOutput } from './search-emails.ts';
export type { SearchInvoicesInput, SearchInvoicesOutput } from './search-invoices.ts';
export type { SearchLineItemsInput, SearchLineItemsOutput } from './search-line-items.ts';
export type { SearchMeetingsInput, SearchMeetingsOutput } from './search-meetings.ts';
export type { SearchNotesInput, SearchNotesOutput } from './search-notes.ts';
export type { SearchOrdersInput, SearchOrdersOutput } from './search-orders.ts';
export type { SearchProductsInput, SearchProductsOutput } from './search-products.ts';
export type { SearchQuotesInput, SearchQuotesOutput } from './search-quotes.ts';
export type { SearchTasksInput, SearchTasksOutput } from './search-tasks.ts';
export type { SearchTicketsInput, SearchTicketsOutput } from './search-tickets.ts';
export type { SubmitFormDataInput, SubmitFormDataOutput } from './submit-form-data.ts';
export type { SubscribeContactInput, SubscribeContactOutput } from './subscribe-contact.ts';
export type { UnsubscribeContactInput, UnsubscribeContactOutput } from './unsubscribe-contact.ts';
export type { UpdateCallInput, UpdateCallOutput } from './update-call.ts';
export type {
	UpdateCommunicationInput,
	UpdateCommunicationOutput,
} from './update-communication.ts';
export type { UpdateCompanyInput, UpdateCompanyOutput } from './update-company.ts';
export type { UpdateContactInput, UpdateContactOutput } from './update-contact.ts';
export type { UpdateCustomObjectInput, UpdateCustomObjectOutput } from './update-custom-object.ts';
export type { UpdateDealInput, UpdateDealOutput } from './update-deal.ts';
export type { UpdateEmailInput, UpdateEmailOutput } from './update-email.ts';
export type {
	UpdateFilePropertiesInput,
	UpdateFilePropertiesOutput,
} from './update-file-properties.ts';
export type { UpdateLineItemInput, UpdateLineItemOutput } from './update-line-item.ts';
export type { UpdateMeetingInput, UpdateMeetingOutput } from './update-meeting.ts';
export type { UpdateNoteInput, UpdateNoteOutput } from './update-note.ts';
export type { UpdateOrderInput, UpdateOrderOutput } from './update-order.ts';
export type { UpdateProductInput, UpdateProductOutput } from './update-product.ts';
export type { UpdateQuoteInput, UpdateQuoteOutput } from './update-quote.ts';
export type { UpdateTaskInput, UpdateTaskOutput } from './update-task.ts';
export type { UpdateTicketInput, UpdateTicketOutput } from './update-ticket.ts';
export type { UpsertContactInput, UpsertContactOutput } from './upsert-contact.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		addContactToWorkflow: addContactToWorkflow.bind({ endpointCaller }),
		addListMembers: addListMembers.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createAssociation: createAssociation.bind({ endpointCaller }),
		createCall: createCall.bind({ endpointCaller }),
		createCommunication: createCommunication.bind({ endpointCaller }),
		createCompany: createCompany.bind({ endpointCaller }),
		createContact: createContact.bind({ endpointCaller }),
		createCustomObject: createCustomObject.bind({ endpointCaller }),
		createDeal: createDeal.bind({ endpointCaller }),
		createEmail: createEmail.bind({ endpointCaller }),
		createEngagement: createEngagement.bind({ endpointCaller }),
		createFolder: createFolder.bind({ endpointCaller }),
		createLineItem: createLineItem.bind({ endpointCaller }),
		createMeeting: createMeeting.bind({ endpointCaller }),
		createNote: createNote.bind({ endpointCaller }),
		createOrder: createOrder.bind({ endpointCaller }),
		createOrUpdateTimelineEvent: createOrUpdateTimelineEvent.bind({ endpointCaller }),
		createProduct: createProduct.bind({ endpointCaller }),
		createQuote: createQuote.bind({ endpointCaller }),
		createTask: createTask.bind({ endpointCaller }),
		createTicket: createTicket.bind({ endpointCaller }),
		deleteAssociation: deleteAssociation.bind({ endpointCaller }),
		deleteCall: deleteCall.bind({ endpointCaller }),
		deleteCommunication: deleteCommunication.bind({ endpointCaller }),
		deleteCompany: deleteCompany.bind({ endpointCaller }),
		deleteContact: deleteContact.bind({ endpointCaller }),
		deleteCustomObject: deleteCustomObject.bind({ endpointCaller }),
		deleteDeal: deleteDeal.bind({ endpointCaller }),
		deleteEmail: deleteEmail.bind({ endpointCaller }),
		deleteEngagement: deleteEngagement.bind({ endpointCaller }),
		deleteFile: deleteFile.bind({ endpointCaller }),
		deleteFolder: deleteFolder.bind({ endpointCaller }),
		deleteLineItem: deleteLineItem.bind({ endpointCaller }),
		deleteMeeting: deleteMeeting.bind({ endpointCaller }),
		deleteNote: deleteNote.bind({ endpointCaller }),
		deleteOrder: deleteOrder.bind({ endpointCaller }),
		deleteProduct: deleteProduct.bind({ endpointCaller }),
		deleteQuote: deleteQuote.bind({ endpointCaller }),
		deleteTask: deleteTask.bind({ endpointCaller }),
		deleteTicket: deleteTicket.bind({ endpointCaller }),
		downloadFile: downloadFile.bind({ endpointCaller }),
		getCall: getCall.bind({ endpointCaller }),
		getCommunication: getCommunication.bind({ endpointCaller }),
		getCompany: getCompany.bind({ endpointCaller }),
		getContact: getContact.bind({ endpointCaller }),
		getCustomObject: getCustomObject.bind({ endpointCaller }),
		getDeal: getDeal.bind({ endpointCaller }),
		getEmail: getEmail.bind({ endpointCaller }),
		getInvoice: getInvoice.bind({ endpointCaller }),
		getLineItem: getLineItem.bind({ endpointCaller }),
		getMeeting: getMeeting.bind({ endpointCaller }),
		getNote: getNote.bind({ endpointCaller }),
		getOrder: getOrder.bind({ endpointCaller }),
		getOwner: getOwner.bind({ endpointCaller }),
		getPipeline: getPipeline.bind({ endpointCaller }),
		getProduct: getProduct.bind({ endpointCaller }),
		getQuote: getQuote.bind({ endpointCaller }),
		getRecordProperty: getRecordProperty.bind({ endpointCaller }),
		getTask: getTask.bind({ endpointCaller }),
		getTicket: getTicket.bind({ endpointCaller }),
		getWorkflowIdMapping: getWorkflowIdMapping.bind({ endpointCaller }),
		importFileFromUrl: importFileFromUrl.bind({ endpointCaller }),
		listAllContacts: listAllContacts.bind({ endpointCaller }),
		listAssociations: listAssociations.bind({ endpointCaller }),
		listFiles: listFiles.bind({ endpointCaller }),
		listForms: listForms.bind({ endpointCaller }),
		listOwners: listOwners.bind({ endpointCaller }),
		listPipelines: listPipelines.bind({ endpointCaller }),
		listTimelineEventTemplates: listTimelineEventTemplates.bind({ endpointCaller }),
		mergeContacts: mergeContacts.bind({ endpointCaller }),
		removeContactFromWorkflow: removeContactFromWorkflow.bind({ endpointCaller }),
		removeListMembers: removeListMembers.bind({ endpointCaller }),
		searchCalls: searchCalls.bind({ endpointCaller }),
		searchCommunications: searchCommunications.bind({ endpointCaller }),
		searchCompanies: searchCompanies.bind({ endpointCaller }),
		searchContacts: searchContacts.bind({ endpointCaller }),
		searchCustomObjects: searchCustomObjects.bind({ endpointCaller }),
		searchDeals: searchDeals.bind({ endpointCaller }),
		searchEmails: searchEmails.bind({ endpointCaller }),
		searchInvoices: searchInvoices.bind({ endpointCaller }),
		searchLineItems: searchLineItems.bind({ endpointCaller }),
		searchMeetings: searchMeetings.bind({ endpointCaller }),
		searchNotes: searchNotes.bind({ endpointCaller }),
		searchOrders: searchOrders.bind({ endpointCaller }),
		searchProducts: searchProducts.bind({ endpointCaller }),
		searchQuotes: searchQuotes.bind({ endpointCaller }),
		searchTasks: searchTasks.bind({ endpointCaller }),
		searchTickets: searchTickets.bind({ endpointCaller }),
		submitFormData: submitFormData.bind({ endpointCaller }),
		subscribeContact: subscribeContact.bind({ endpointCaller }),
		unsubscribeContact: unsubscribeContact.bind({ endpointCaller }),
		updateCall: updateCall.bind({ endpointCaller }),
		updateCommunication: updateCommunication.bind({ endpointCaller }),
		updateCompany: updateCompany.bind({ endpointCaller }),
		updateContact: updateContact.bind({ endpointCaller }),
		updateCustomObject: updateCustomObject.bind({ endpointCaller }),
		updateDeal: updateDeal.bind({ endpointCaller }),
		updateEmail: updateEmail.bind({ endpointCaller }),
		updateFileProperties: updateFileProperties.bind({ endpointCaller }),
		updateLineItem: updateLineItem.bind({ endpointCaller }),
		updateMeeting: updateMeeting.bind({ endpointCaller }),
		updateNote: updateNote.bind({ endpointCaller }),
		updateOrder: updateOrder.bind({ endpointCaller }),
		updateProduct: updateProduct.bind({ endpointCaller }),
		updateQuote: updateQuote.bind({ endpointCaller }),
		updateTask: updateTask.bind({ endpointCaller }),
		updateTicket: updateTicket.bind({ endpointCaller }),
		upsertContact: upsertContact.bind({ endpointCaller }),
	};
};

export class HubspotcrmV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
