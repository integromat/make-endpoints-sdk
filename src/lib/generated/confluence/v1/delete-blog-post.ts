// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteBlogPostInput = {
	/**
	 * Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchBlogPosts` endpoint to find it.
	 */
	blogPostId: string;
	/**
	 * Delete a draft blog post rather than a published one.
	 */
	draft?: boolean;
	/**
	 * Permanently purge an already-trashed blog post. This is irreversible. A normal delete moves the blog post to the trash and can be undone in the UI.
	 */
	purge?: boolean;
};

export type DeleteBlogPostOutput = {
	/**
	 * Always true when the call succeeds. Confluence returns HTTP 204 with an empty body on a successful blog post delete, so this is synthesized by the endpoint rather than read from the response; a failure surfaces as an error instead.
	 */
	deleted?: boolean;
	/**
	 * Echo of the blog post ID that was deleted.
	 */
	blogPostId?: string;
};

/**
 * Delete a blog post
 * Deletes a blog post by its numeric ID. Destructive.
 */
export async function deleteBlogPost(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteBlogPostInput;
		connectionId: number;
	},
): Promise<DeleteBlogPostOutput> {
	const response = await this.endpointCaller<DeleteBlogPostOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'deleteBlogPost',
		},
		payload,
	);
	return response.output;
}
