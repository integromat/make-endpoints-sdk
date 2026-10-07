// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createBlogPost } from './create-blog-post.ts';
import { createPage } from './create-page.ts';
import { deleteBlogPost } from './delete-blog-post.ts';
import { deletePage } from './delete-page.ts';
import { getBlogPost } from './get-blog-post.ts';
import { getFolderDirectChildren } from './get-folder-direct-children.ts';
import { getPage } from './get-page.ts';
import { getPageDirectChildren } from './get-page-direct-children.ts';
import { listBlogPostVersions } from './list-blog-post-versions.ts';
import { listPageVersions } from './list-page-versions.ts';
import { listSpacePages } from './list-space-pages.ts';
import { listSpaces } from './list-spaces.ts';
import { searchBlogPosts } from './search-blog-posts.ts';
import { searchPages } from './search-pages.ts';
import { updateBlogPost } from './update-blog-post.ts';
import { updatePage } from './update-page.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateBlogPostInput, CreateBlogPostOutput } from './create-blog-post.ts';
export type { CreatePageInput, CreatePageOutput } from './create-page.ts';
export type { DeleteBlogPostInput, DeleteBlogPostOutput } from './delete-blog-post.ts';
export type { DeletePageInput, DeletePageOutput } from './delete-page.ts';
export type { GetBlogPostInput, GetBlogPostOutput } from './get-blog-post.ts';
export type {
	GetFolderDirectChildrenInput,
	GetFolderDirectChildrenOutput,
} from './get-folder-direct-children.ts';
export type { GetPageInput, GetPageOutput } from './get-page.ts';
export type {
	GetPageDirectChildrenInput,
	GetPageDirectChildrenOutput,
} from './get-page-direct-children.ts';
export type {
	ListBlogPostVersionsInput,
	ListBlogPostVersionsOutput,
} from './list-blog-post-versions.ts';
export type { ListPageVersionsInput, ListPageVersionsOutput } from './list-page-versions.ts';
export type { ListSpacePagesInput, ListSpacePagesOutput } from './list-space-pages.ts';
export type { ListSpacesInput, ListSpacesOutput } from './list-spaces.ts';
export type { SearchBlogPostsInput, SearchBlogPostsOutput } from './search-blog-posts.ts';
export type { SearchPagesInput, SearchPagesOutput } from './search-pages.ts';
export type { UpdateBlogPostInput, UpdateBlogPostOutput } from './update-blog-post.ts';
export type { UpdatePageInput, UpdatePageOutput } from './update-page.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createBlogPost: createBlogPost.bind({ endpointCaller }),
		createPage: createPage.bind({ endpointCaller }),
		deleteBlogPost: deleteBlogPost.bind({ endpointCaller }),
		deletePage: deletePage.bind({ endpointCaller }),
		getBlogPost: getBlogPost.bind({ endpointCaller }),
		getFolderDirectChildren: getFolderDirectChildren.bind({ endpointCaller }),
		getPage: getPage.bind({ endpointCaller }),
		getPageDirectChildren: getPageDirectChildren.bind({ endpointCaller }),
		listBlogPostVersions: listBlogPostVersions.bind({ endpointCaller }),
		listPageVersions: listPageVersions.bind({ endpointCaller }),
		listSpacePages: listSpacePages.bind({ endpointCaller }),
		listSpaces: listSpaces.bind({ endpointCaller }),
		searchBlogPosts: searchBlogPosts.bind({ endpointCaller }),
		searchPages: searchPages.bind({ endpointCaller }),
		updateBlogPost: updateBlogPost.bind({ endpointCaller }),
		updatePage: updatePage.bind({ endpointCaller }),
	};
};

export class ConfluenceV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
