// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateBlogPostInput = {
	/**
	 * Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchBlogPosts` endpoint to find it.
	 */
	blogPostId: string;
	/**
	 * Target status. `current` publishes the blog post; `draft` saves a draft. This choice changes which `versionNumber` is valid - see the description.
	 */
	status: 'current' | 'draft';
	/**
	 * Format of the `content` value you are sending. `atlas_doc_format` is JSON ADF (https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/); `storage` is Confluence Storage Format, XHTML-like (https://confluence.atlassian.com/doc/confluence-storage-format-790796544.html); `wiki` is Confluence Wiki Markup and is accepted on write only.
	 */
	representation: 'atlas_doc_format' | 'storage' | 'wiki';
	/**
	 * The body content, encoded in the format named by `representation`.
	 */
	content: string;
	/**
	 * For `status: current`, the current `version.number` from getBlogPost PLUS 1. For `status: draft`, always `1`. A wrong value returns 409 Conflict.
	 */
	versionNumber: number;
	/**
	 * Optional note stored alongside this version in the history.
	 */
	versionMessage?: string;
};

export type UpdateBlogPostOutput = {
	authorId?: string;
	id?: string;
	version?: {
		number?: number;
		message?: string;
		minorEdit?: boolean;
		authorId?: string;
		createdAt?: string;
	};
	status?: string;
	body?: {
		storage?: {
			value?: string;
			representation?: string;
		};
		atlas_doc_format?: {
			value?: string;
			representation?: string;
		};
		view?: {
			value?: string;
			representation?: string;
		};
	};
	spaceId?: string;
	createdAt?: string;
	_links?: {
		editui?: string;
		webui?: string;
		tinyui?: string;
		base?: string;
	};
};

/**
 * Update a blog post
 * Replaces the title, body, status and version of an existing blog post. Full replacement - omitted fields are overwritten.
 */
export async function updateBlogPost(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateBlogPostInput;
		connectionId: number;
	},
): Promise<UpdateBlogPostOutput> {
	const response = await this.endpointCaller<UpdateBlogPostOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'updateBlogPost',
		},
		payload,
	);
	return response.output;
}
