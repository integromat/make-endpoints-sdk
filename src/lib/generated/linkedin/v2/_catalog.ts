// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createPost } from './create-post.ts';
import { deletePost } from './delete-post.ts';
import { getBrandPageStatistics } from './get-brand-page-statistics.ts';
import { getOrganizationFollowerStatistics } from './get-organization-follower-statistics.ts';
import { getOrganizationPageStatistics } from './get-organization-page-statistics.ts';
import { getOrganizationShareStatistics } from './get-organization-share-statistics.ts';
import { getPost } from './get-post.ts';
import { getVideo } from './get-video.ts';
import { listPosts } from './list-posts.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreatePostInput, CreatePostOutput } from './create-post.ts';
export type { DeletePostInput, DeletePostOutput } from './delete-post.ts';
export type {
	GetBrandPageStatisticsInput,
	GetBrandPageStatisticsOutput,
} from './get-brand-page-statistics.ts';
export type {
	GetOrganizationFollowerStatisticsInput,
	GetOrganizationFollowerStatisticsOutput,
} from './get-organization-follower-statistics.ts';
export type {
	GetOrganizationPageStatisticsInput,
	GetOrganizationPageStatisticsOutput,
} from './get-organization-page-statistics.ts';
export type {
	GetOrganizationShareStatisticsInput,
	GetOrganizationShareStatisticsOutput,
} from './get-organization-share-statistics.ts';
export type { GetPostInput, GetPostOutput } from './get-post.ts';
export type { GetVideoInput, GetVideoOutput } from './get-video.ts';
export type { ListPostsInput, ListPostsOutput } from './list-posts.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createPost: createPost.bind({ endpointCaller }),
		deletePost: deletePost.bind({ endpointCaller }),
		getBrandPageStatistics: getBrandPageStatistics.bind({ endpointCaller }),
		getOrganizationFollowerStatistics: getOrganizationFollowerStatistics.bind({
			endpointCaller,
		}),
		getOrganizationPageStatistics: getOrganizationPageStatistics.bind({ endpointCaller }),
		getOrganizationShareStatistics: getOrganizationShareStatistics.bind({ endpointCaller }),
		getPost: getPost.bind({ endpointCaller }),
		getVideo: getVideo.bind({ endpointCaller }),
		listPosts: listPosts.bind({ endpointCaller }),
	};
};

export class LinkedinV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
