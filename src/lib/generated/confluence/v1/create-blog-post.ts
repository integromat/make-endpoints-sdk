// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateBlogPostInput = {
	/**
	 * Numeric ID of the space to create in. Use `listSpaces` to find it. Note this is the numeric id, not the space key.
	 */
	spaceId: string;
	/**
	 * Create the blog post as published (`current`) or as a draft (`draft`).
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
	 * When true, only the creating user can view or edit the new blog post.
	 */
	private?: boolean;
};

export type CreateBlogPostOutput = {
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
 * Create a blog post
 * Creates a new blog post in a space, as a draft or published.
 */
export async function createBlogPost(
	this: EndpointFunctionThis,
	payload: {
		input: CreateBlogPostInput;
		connectionId: number;
	},
): Promise<CreateBlogPostOutput> {
	const response = await this.endpointCaller<CreateBlogPostOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'createBlogPost',
		},
		payload,
	);
	return response.output;
}
