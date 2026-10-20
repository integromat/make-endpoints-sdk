// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createContact } from './create-contact.ts';
import { createContactGroup } from './create-contact-group.ts';
import { deleteContact } from './delete-contact.ts';
import { deleteContactGroup } from './delete-contact-group.ts';
import { getContact } from './get-contact.ts';
import { getContactGroup } from './get-contact-group.ts';
import { listContactGroups } from './list-contact-groups.ts';
import { listContacts } from './list-contacts.ts';
import { listDirectoryPeople } from './list-directory-people.ts';
import { listOtherContacts } from './list-other-contacts.ts';
import { modifyContactGroupMembers } from './modify-contact-group-members.ts';
import { searchContacts } from './search-contacts.ts';
import { searchDirectoryPeople } from './search-directory-people.ts';
import { updateContact } from './update-contact.ts';
import { updateContactGroup } from './update-contact-group.ts';
import { updateContactPhoto } from './update-contact-photo.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateContactInput, CreateContactOutput } from './create-contact.ts';
export type { CreateContactGroupInput, CreateContactGroupOutput } from './create-contact-group.ts';
export type { DeleteContactInput, DeleteContactOutput } from './delete-contact.ts';
export type { DeleteContactGroupInput, DeleteContactGroupOutput } from './delete-contact-group.ts';
export type { GetContactInput, GetContactOutput } from './get-contact.ts';
export type { GetContactGroupInput, GetContactGroupOutput } from './get-contact-group.ts';
export type { ListContactGroupsInput, ListContactGroupsOutput } from './list-contact-groups.ts';
export type { ListContactsInput, ListContactsOutput } from './list-contacts.ts';
export type {
	ListDirectoryPeopleInput,
	ListDirectoryPeopleOutput,
} from './list-directory-people.ts';
export type { ListOtherContactsInput, ListOtherContactsOutput } from './list-other-contacts.ts';
export type {
	ModifyContactGroupMembersInput,
	ModifyContactGroupMembersOutput,
} from './modify-contact-group-members.ts';
export type { SearchContactsInput, SearchContactsOutput } from './search-contacts.ts';
export type {
	SearchDirectoryPeopleInput,
	SearchDirectoryPeopleOutput,
} from './search-directory-people.ts';
export type { UpdateContactInput, UpdateContactOutput } from './update-contact.ts';
export type { UpdateContactGroupInput, UpdateContactGroupOutput } from './update-contact-group.ts';
export type { UpdateContactPhotoInput, UpdateContactPhotoOutput } from './update-contact-photo.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createContact: createContact.bind({ endpointCaller }),
		createContactGroup: createContactGroup.bind({ endpointCaller }),
		deleteContact: deleteContact.bind({ endpointCaller }),
		deleteContactGroup: deleteContactGroup.bind({ endpointCaller }),
		getContact: getContact.bind({ endpointCaller }),
		getContactGroup: getContactGroup.bind({ endpointCaller }),
		listContactGroups: listContactGroups.bind({ endpointCaller }),
		listContacts: listContacts.bind({ endpointCaller }),
		listDirectoryPeople: listDirectoryPeople.bind({ endpointCaller }),
		listOtherContacts: listOtherContacts.bind({ endpointCaller }),
		modifyContactGroupMembers: modifyContactGroupMembers.bind({ endpointCaller }),
		searchContacts: searchContacts.bind({ endpointCaller }),
		searchDirectoryPeople: searchDirectoryPeople.bind({ endpointCaller }),
		updateContact: updateContact.bind({ endpointCaller }),
		updateContactGroup: updateContactGroup.bind({ endpointCaller }),
		updateContactPhoto: updateContactPhoto.bind({ endpointCaller }),
	};
};

export class GoogleContactsV4Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
