// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetBlogPostInput = {
	/**
	 * Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchBlogPosts` endpoint to find it.
	 */
	blogPostId: string;
	/**
	 * Content format returned in the `body` output field. The body is NOT returned at all unless this is set. Use `storage` (XHTML-like) for programmatic content, or `atlas_doc_format` for JSON ADF.
	 */
	bodyFormat?:
		| ''
		| 'storage'
		| 'atlas_doc_format'
		| 'view'
		| 'export_view'
		| 'anonymous_export_view';
	/**
	 * Retrieve a specific previously published version of the blog post. Version numbers are sequential integers starting at 1. Omit for the latest.
	 */
	version?: number;
	/**
	 * Retrieve the draft version of the blog post instead of the published one.
	 */
	getDraft?: boolean;
};

export type GetBlogPostOutput = {
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
 * Get a blog post
 * Retrieves a single blog post by its numeric ID, optionally at a specific version.
 */
export async function getBlogPost(
	this: EndpointFunctionThis,
	payload: {
		input: GetBlogPostInput;
		connectionId: number;
	},
): Promise<GetBlogPostOutput> {
	const response = await this.endpointCaller<GetBlogPostOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'getBlogPost',
		},
		payload,
	);
	return response.output;
}
