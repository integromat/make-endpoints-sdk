// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdatePageInput = {
	/**
	 * Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchPages` endpoint to find it.
	 */
	pageId: string;
	/**
	 * Target status. `current` publishes the page; `draft` saves a draft. This choice changes which `versionNumber` is valid - see the description.
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
	 * For `status: current`, the current `version.number` from getPage PLUS 1. For `status: draft`, always `1`. A wrong value returns 409 Conflict.
	 */
	versionNumber: number;
	/**
	 * Optional note stored alongside this version in the history.
	 */
	versionMessage?: string;
	/**
	 * Numeric ID of the parent page, to move the page within the same space. Moving between spaces is not supported by this API.
	 */
	parentId?: string;
};

export type UpdatePageOutput = {
	id?: string;
	status?: string;
	spaceId?: string;
	parentId?: string;
	parentType?: string;
	position?: number;
	authorId?: string;
	createdAt?: string;
	version?: {
		createdAt?: string;
		message?: string;
		number?: number;
		minorEdit?: boolean;
		authorId?: string;
	};
	body?: {
		storage?: {
			value?: string;
			representation?: string;
		};
		atlas_doc_format?: {
			value?: string;
			representation?: string;
		};
	};
	_links?: {
		webui?: string;
		editui?: string;
		tinyui?: string;
		base?: string;
	};
	ownerId?: string;
	lastOwnerId?: string;
};

/**
 * Update a page
 * Replaces the title, body, status and version of an existing page. Full replacement - omitted fields are overwritten.
 */
export async function updatePage(
	this: EndpointFunctionThis,
	payload: {
		input: UpdatePageInput;
		connectionId: number;
	},
): Promise<UpdatePageOutput> {
	const response = await this.endpointCaller<UpdatePageOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'updatePage',
		},
		payload,
	);
	return response.output;
}
