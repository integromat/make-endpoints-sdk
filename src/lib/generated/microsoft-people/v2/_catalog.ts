// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createAcontact } from './create-acontact.ts';
import { createAcontactFolder } from './create-acontact-folder.ts';
import { createAcontactInFolder } from './create-acontact-in-folder.ts';
import { deleteAcontact } from './delete-acontact.ts';
import { deleteAcontactFolder } from './delete-acontact-folder.ts';
import { getAcontact } from './get-acontact.ts';
import { getAcontactFolder } from './get-acontact-folder.ts';
import { searchContactFolders } from './search-contact-folders.ts';
import { searchContacts } from './search-contacts.ts';
import { searchContactsInFolder } from './search-contacts-in-folder.ts';
import { updateAcontact } from './update-acontact.ts';
import { updateAcontactFolder } from './update-acontact-folder.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateAContactInput, CreateAContactOutput } from './create-acontact.ts';
export type {
	CreateAContactFolderInput,
	CreateAContactFolderOutput,
} from './create-acontact-folder.ts';
export type {
	CreateAContactInFolderInput,
	CreateAContactInFolderOutput,
} from './create-acontact-in-folder.ts';
export type { DeleteAContactInput, DeleteAContactOutput } from './delete-acontact.ts';
export type {
	DeleteAContactFolderInput,
	DeleteAContactFolderOutput,
} from './delete-acontact-folder.ts';
export type { GetAContactInput, GetAContactOutput } from './get-acontact.ts';
export type { GetAContactFolderInput, GetAContactFolderOutput } from './get-acontact-folder.ts';
export type {
	SearchContactFoldersInput,
	SearchContactFoldersOutput,
} from './search-contact-folders.ts';
export type { SearchContactsInput, SearchContactsOutput } from './search-contacts.ts';
export type {
	SearchContactsInFolderInput,
	SearchContactsInFolderOutput,
} from './search-contacts-in-folder.ts';
export type { UpdateAContactInput, UpdateAContactOutput } from './update-acontact.ts';
export type {
	UpdateAContactFolderInput,
	UpdateAContactFolderOutput,
} from './update-acontact-folder.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createAcontact: createAcontact.bind({ endpointCaller }),
		createAcontactFolder: createAcontactFolder.bind({ endpointCaller }),
		createAcontactInFolder: createAcontactInFolder.bind({ endpointCaller }),
		deleteAcontact: deleteAcontact.bind({ endpointCaller }),
		deleteAcontactFolder: deleteAcontactFolder.bind({ endpointCaller }),
		getAcontact: getAcontact.bind({ endpointCaller }),
		getAcontactFolder: getAcontactFolder.bind({ endpointCaller }),
		searchContactFolders: searchContactFolders.bind({ endpointCaller }),
		searchContacts: searchContacts.bind({ endpointCaller }),
		searchContactsInFolder: searchContactsInFolder.bind({ endpointCaller }),
		updateAcontact: updateAcontact.bind({ endpointCaller }),
		updateAcontactFolder: updateAcontactFolder.bind({ endpointCaller }),
	};
};

export class MicrosoftPeopleV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
