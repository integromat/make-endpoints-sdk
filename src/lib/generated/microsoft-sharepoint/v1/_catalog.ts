// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createAfolder } from './create-afolder.ts';
import { createAlist } from './create-alist.ts';
import { createAnItem } from './create-an-item.ts';
import { deleteAnItem } from './delete-an-item.ts';
import { getAlist } from './get-alist.ts';
import { getAnItem } from './get-an-item.ts';
import { getApage } from './get-apage.ts';
import { getAsite } from './get-asite.ts';
import { listDriveItemChildren } from './list-drive-item-children.ts';
import { listItems } from './list-items.ts';
import { listLists } from './list-lists.ts';
import { listPages } from './list-pages.ts';
import { publishApage } from './publish-apage.ts';
import { searchDriveItems } from './search-drive-items.ts';
import { searchSites } from './search-sites.ts';
import { updateAnItem } from './update-an-item.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateAFolderInput, CreateAFolderOutput } from './create-afolder.ts';
export type { CreateAListInput, CreateAListOutput } from './create-alist.ts';
export type { CreateAnItemInput, CreateAnItemOutput } from './create-an-item.ts';
export type { DeleteAnItemInput, DeleteAnItemOutput } from './delete-an-item.ts';
export type { GetAListInput, GetAListOutput } from './get-alist.ts';
export type { GetAnItemInput, GetAnItemOutput } from './get-an-item.ts';
export type { GetAPageInput, GetAPageOutput } from './get-apage.ts';
export type { GetASiteInput, GetASiteOutput } from './get-asite.ts';
export type {
	ListDriveItemChildrenInput,
	ListDriveItemChildrenOutput,
} from './list-drive-item-children.ts';
export type { ListItemsInput, ListItemsOutput } from './list-items.ts';
export type { ListListsInput, ListListsOutput } from './list-lists.ts';
export type { ListPagesInput, ListPagesOutput } from './list-pages.ts';
export type { PublishAPageInput, PublishAPageOutput } from './publish-apage.ts';
export type { SearchDriveItemsInput, SearchDriveItemsOutput } from './search-drive-items.ts';
export type { SearchSitesInput, SearchSitesOutput } from './search-sites.ts';
export type { UpdateAnItemInput, UpdateAnItemOutput } from './update-an-item.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createAfolder: createAfolder.bind({ endpointCaller }),
		createAlist: createAlist.bind({ endpointCaller }),
		createAnItem: createAnItem.bind({ endpointCaller }),
		deleteAnItem: deleteAnItem.bind({ endpointCaller }),
		getAlist: getAlist.bind({ endpointCaller }),
		getAnItem: getAnItem.bind({ endpointCaller }),
		getApage: getApage.bind({ endpointCaller }),
		getAsite: getAsite.bind({ endpointCaller }),
		listDriveItemChildren: listDriveItemChildren.bind({ endpointCaller }),
		listItems: listItems.bind({ endpointCaller }),
		listLists: listLists.bind({ endpointCaller }),
		listPages: listPages.bind({ endpointCaller }),
		publishApage: publishApage.bind({ endpointCaller }),
		searchDriveItems: searchDriveItems.bind({ endpointCaller }),
		searchSites: searchSites.bind({ endpointCaller }),
		updateAnItem: updateAnItem.bind({ endpointCaller }),
	};
};

export class MicrosoftSharepointV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
