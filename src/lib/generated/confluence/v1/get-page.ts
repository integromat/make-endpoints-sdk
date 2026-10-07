// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetPageInput = {
	/**
	 * Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchPages` endpoint to find it.
	 */
	pageId: string;
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
	 * Retrieve a specific previously published version of the page. Version numbers are sequential integers starting at 1. Omit for the latest.
	 */
	version?: number;
	/**
	 * Retrieve the draft version of the page instead of the published one.
	 */
	getDraft?: boolean;
};

export type GetPageOutput = {
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
		anonymous_export_view?: {
			value?: string;
			representation?: string;
		};
		export_view?: {
			value?: string;
			representation?: string;
		};
		view?: {
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
 * Get a page
 * Retrieves a single page by its numeric ID, optionally at a specific version.
 */
export async function getPage(
	this: EndpointFunctionThis,
	payload: {
		input: GetPageInput;
		connectionId: number;
	},
): Promise<GetPageOutput> {
	const response = await this.endpointCaller<GetPageOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'getPage',
		},
		payload,
	);
	return response.output;
}
