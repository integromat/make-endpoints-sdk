// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreatePageInput = {
	/**
	 * Numeric ID of the space to create in. Use `listSpaces` to find it. Note this is the numeric id, not the space key.
	 */
	spaceId: string;
	/**
	 * Create the page as published (`current`) or as a draft (`draft`).
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
	 * Numeric ID of the parent page. Omit to create at the space root. Blog posts cannot be nested; pages can.
	 */
	parentId?: string;
	/**
	 * When true, only the creating user can view or edit the new page.
	 */
	private?: boolean;
	/**
	 * Tag the content as embedded, creating it in NCS.
	 */
	embedded?: boolean;
};

export type CreatePageOutput = {
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
 * Create a page
 * Creates a new page in a space, as a draft or published.
 */
export async function createPage(
	this: EndpointFunctionThis,
	payload: {
		input: CreatePageInput;
		connectionId: number;
	},
): Promise<CreatePageOutput> {
	const response = await this.endpointCaller<CreatePageOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'createPage',
		},
		payload,
	);
	return response.output;
}
