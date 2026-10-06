// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetFolderDirectChildrenInput = {
	/**
	 * Numeric ID of the parent folder, as a string. Folder IDs are not listable directly: discover them from a `getPageDirectChildren` row whose `type` is `folder`.
	 */
	folderId: string;
	/**
	 * Field to sort children by. `-` prefix means descending. `child-position` is the manual order shown in the Confluence page tree, which is usually what a human means by "the order they appear".
	 */
	sort?:
		| ''
		| 'child-position'
		| '-child-position'
		| 'title'
		| '-title'
		| 'created-date'
		| '-created-date'
		| 'modified-date'
		| '-modified-date'
		| 'id'
		| '-id';
	/**
	 * Opaque cursor for the next page. Do not construct this yourself: take the `next` value from the `_links` output of a previous call, which is a relative URL such as `/wiki/api/v2/pages?cursor=abc123&limit=25`, and pass only the value of its `cursor` query parameter here. Omit for the first page.
	 */
	cursor?: string;
	/**
	 * Maximum number of results in this single page (1-250, default 25). This endpoint returns one page only and does not follow pagination automatically - use `cursor` to fetch further pages.
	 */
	limit?: number;
};

export type GetFolderDirectChildrenOutput = {
	/**
	 * The children returned in this page, at most `limit` items.
	 */
	results?: {
		/**
		 * Numeric ID of the child, as a string.
		 */
		id?: string;
		/**
		 * Discriminator for what this child is: `page`, `folder`, `whiteboard`, `database` or `embed`. Use it to decide how to recurse - `page` children expand with `getPageDirectChildren`, `folder` children with `getFolderDirectChildren`. `whiteboard`, `database` and `embed` are leaves for the purposes of these two endpoints.
		 */
		type?: string;
		/**
		 * Status of the child, e.g. `current`.
		 */
		status?: string;
		/**
		 * Numeric ID of the space the child lives in.
		 */
		spaceId?: string;
		/**
		 * Manual ordering position within the parent. Absent when the parent has no explicit ordering.
		 */
		childPosition?: number;
	}[];
	/**
	 * Pagination and context links for this children page. `next` is a RELATIVE URL (e.g. `/wiki/api/v2/pages?cursor=abc123&limit=25`); extract its `cursor` query parameter and pass it as this endpoint's `cursor` input to get the next page. Absent when there are no further pages.
	 */
	_links?: {
		/**
		 * Relative URL of the next page, or absent on the last page.
		 */
		next?: string;
		/**
		 * Base URL of the Confluence site.
		 */
		base?: string;
	};
};

/**
 * Get folder direct children
 * Returns a page of the direct children of one folder. Results are heterogeneous (pages, folders, whiteboards, databases, embeds), each row carrying a `type` discriminator.
 */
export async function getFolderDirectChildren(
	this: EndpointFunctionThis,
	payload: {
		input: GetFolderDirectChildrenInput;
		connectionId: number;
	},
): Promise<GetFolderDirectChildrenOutput> {
	const response = await this.endpointCaller<GetFolderDirectChildrenOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'getFolderDirectChildren',
		},
		payload,
	);
	return response.output;
}
