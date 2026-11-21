// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { createComment } from './create-comment.ts';
import { createPost } from './create-post.ts';
import { deleteComment } from './delete-comment.ts';
import { deletePhoto } from './delete-photo.ts';
import { deletePost } from './delete-post.ts';
import { deleteVideo } from './delete-video.ts';
import { getComment } from './get-comment.ts';
import { getPage } from './get-page.ts';
import { getPhoto } from './get-photo.ts';
import { getPost } from './get-post.ts';
import { getPostReactions } from './get-post-reactions.ts';
import { getVideo } from './get-video.ts';
import { getVideoStatus } from './get-video-status.ts';
import { likeObject } from './like-object.ts';
import { listComments } from './list-comments.ts';
import { listPagePosts } from './list-page-posts.ts';
import { listPages } from './list-pages.ts';
import { listPhotos } from './list-photos.ts';
import { listVideos } from './list-videos.ts';
import { publishReel } from './publish-reel.ts';
import { startReelUpload } from './start-reel-upload.ts';
import { unlikePost } from './unlike-post.ts';
import { updateComment } from './update-comment.ts';
import { updatePageDetails } from './update-page-details.ts';
import { updatePost } from './update-post.ts';
import { updateVideo } from './update-video.ts';
import { uploadPhoto } from './upload-photo.ts';
import { uploadReelFromUrl } from './upload-reel-from-url.ts';
import { uploadVideo } from './upload-video.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { CreateCommentInput, CreateCommentOutput } from './create-comment.ts';
export type { CreatePostInput, CreatePostOutput } from './create-post.ts';
export type { DeleteCommentInput, DeleteCommentOutput } from './delete-comment.ts';
export type { DeletePhotoInput, DeletePhotoOutput } from './delete-photo.ts';
export type { DeletePostInput, DeletePostOutput } from './delete-post.ts';
export type { DeleteVideoInput, DeleteVideoOutput } from './delete-video.ts';
export type { GetCommentInput, GetCommentOutput } from './get-comment.ts';
export type { GetPageInput, GetPageOutput } from './get-page.ts';
export type { GetPhotoInput, GetPhotoOutput } from './get-photo.ts';
export type { GetPostInput, GetPostOutput } from './get-post.ts';
export type { GetPostReactionsInput, GetPostReactionsOutput } from './get-post-reactions.ts';
export type { GetVideoInput, GetVideoOutput } from './get-video.ts';
export type { GetVideoStatusInput, GetVideoStatusOutput } from './get-video-status.ts';
export type { LikeObjectInput, LikeObjectOutput } from './like-object.ts';
export type { ListCommentsInput, ListCommentsOutput } from './list-comments.ts';
export type { ListPagePostsInput, ListPagePostsOutput } from './list-page-posts.ts';
export type { ListPagesInput, ListPagesOutput } from './list-pages.ts';
export type { ListPhotosInput, ListPhotosOutput } from './list-photos.ts';
export type { ListVideosInput, ListVideosOutput } from './list-videos.ts';
export type { PublishReelInput, PublishReelOutput } from './publish-reel.ts';
export type { StartReelUploadInput, StartReelUploadOutput } from './start-reel-upload.ts';
export type { UnlikePostInput, UnlikePostOutput } from './unlike-post.ts';
export type { UpdateCommentInput, UpdateCommentOutput } from './update-comment.ts';
export type { UpdatePageDetailsInput, UpdatePageDetailsOutput } from './update-page-details.ts';
export type { UpdatePostInput, UpdatePostOutput } from './update-post.ts';
export type { UpdateVideoInput, UpdateVideoOutput } from './update-video.ts';
export type { UploadPhotoInput, UploadPhotoOutput } from './upload-photo.ts';
export type { UploadReelFromUrlInput, UploadReelFromUrlOutput } from './upload-reel-from-url.ts';
export type { UploadVideoInput, UploadVideoOutput } from './upload-video.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		createComment: createComment.bind({ endpointCaller }),
		createPost: createPost.bind({ endpointCaller }),
		deleteComment: deleteComment.bind({ endpointCaller }),
		deletePhoto: deletePhoto.bind({ endpointCaller }),
		deletePost: deletePost.bind({ endpointCaller }),
		deleteVideo: deleteVideo.bind({ endpointCaller }),
		getComment: getComment.bind({ endpointCaller }),
		getPage: getPage.bind({ endpointCaller }),
		getPhoto: getPhoto.bind({ endpointCaller }),
		getPost: getPost.bind({ endpointCaller }),
		getPostReactions: getPostReactions.bind({ endpointCaller }),
		getVideo: getVideo.bind({ endpointCaller }),
		getVideoStatus: getVideoStatus.bind({ endpointCaller }),
		likeObject: likeObject.bind({ endpointCaller }),
		listComments: listComments.bind({ endpointCaller }),
		listPagePosts: listPagePosts.bind({ endpointCaller }),
		listPages: listPages.bind({ endpointCaller }),
		listPhotos: listPhotos.bind({ endpointCaller }),
		listVideos: listVideos.bind({ endpointCaller }),
		publishReel: publishReel.bind({ endpointCaller }),
		startReelUpload: startReelUpload.bind({ endpointCaller }),
		unlikePost: unlikePost.bind({ endpointCaller }),
		updateComment: updateComment.bind({ endpointCaller }),
		updatePageDetails: updatePageDetails.bind({ endpointCaller }),
		updatePost: updatePost.bind({ endpointCaller }),
		updateVideo: updateVideo.bind({ endpointCaller }),
		uploadPhoto: uploadPhoto.bind({ endpointCaller }),
		uploadReelFromUrl: uploadReelFromUrl.bind({ endpointCaller }),
		uploadVideo: uploadVideo.bind({ endpointCaller }),
	};
};

export class FacebookPagesV6Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
