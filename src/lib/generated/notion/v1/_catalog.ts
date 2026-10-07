// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createDataSourceItem } from './create-data-source-item.ts';
import { getDataSource } from './get-data-source.ts';
import { getDatabase } from './get-database.ts';
import { getPage } from './get-page.ts';
import { getPageMarkdown } from './get-page-markdown.ts';
import { queryDataSource } from './query-data-source.ts';
import { searchDataSources } from './search-data-sources.ts';
import { searchPages } from './search-pages.ts';
import { updatePage } from './update-page.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type {
	CreateDataSourceItemInput,
	CreateDataSourceItemOutput,
} from './create-data-source-item.ts';
export type { GetDataSourceInput, GetDataSourceOutput } from './get-data-source.ts';
export type { GetDatabaseInput, GetDatabaseOutput } from './get-database.ts';
export type { GetPageInput, GetPageOutput } from './get-page.ts';
export type { GetPageMarkdownInput, GetPageMarkdownOutput } from './get-page-markdown.ts';
export type { QueryDataSourceInput, QueryDataSourceOutput } from './query-data-source.ts';
export type { SearchDataSourcesInput, SearchDataSourcesOutput } from './search-data-sources.ts';
export type { SearchPagesInput, SearchPagesOutput } from './search-pages.ts';
export type { UpdatePageInput, UpdatePageOutput } from './update-page.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createDataSourceItem: createDataSourceItem.bind({ endpointCaller }),
		getDatabase: getDatabase.bind({ endpointCaller }),
		getDataSource: getDataSource.bind({ endpointCaller }),
		getPage: getPage.bind({ endpointCaller }),
		getPageMarkdown: getPageMarkdown.bind({ endpointCaller }),
		queryDataSource: queryDataSource.bind({ endpointCaller }),
		searchDataSources: searchDataSources.bind({ endpointCaller }),
		searchPages: searchPages.bind({ endpointCaller }),
		updatePage: updatePage.bind({ endpointCaller }),
	};
};

export class NotionV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
