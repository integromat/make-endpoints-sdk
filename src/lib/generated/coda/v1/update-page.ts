// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type UpdatePageInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the page. Names are discouraged because users can easily change them. If several pages share the name, an arbitrary one is used. Example ID: `canvas-IjkLmnO`. Use the listSections endpoint to find page IDs.
	 */
	pageIdOrName: string;
	/**
	 * New name of the page.
	 */
	name?: string;
	/**
	 * New subtitle of the page.
	 */
	subtitle?: string;
	/**
	 * Name of the new page icon, for example `rocket`.
	 */
	iconName?: string;
	/**
	 * URL of the new cover image.
	 */
	imageUrl?: string;
	/**
	 * Whether the page is hidden. Ignored for pages that cannot be hidden, such as the only top-level page in a doc.
	 */
	isHidden?: boolean;
	/**
	 * Changes the canvas content of the page. When provided, `insertionMode` and `canvasContent` are required.
	 */
	contentUpdate?: {
		/**
		 * How the content is applied: appended, prepended, or replacing existing content. Required when content update is provided.
		 */
		insertionMode?: '' | 'append' | 'prepend' | 'replace';
		/**
		 * ID of the page element to use as the reference point, for example `cl-lzqh0Q0poT`. The content is appended after, prepended before, or replaces that element. If omitted, the operation applies to the whole page.
		 */
		elementId?: string;
		/**
		 * The content to insert. Required when content update is provided.
		 */
		canvasContent?: {
			/**
			 * Format of the content. Required for canvas content.
			 */
			format?: '' | 'html' | 'markdown';
			/**
			 * The content in the chosen format, for example `<p><b>This</b> is rich text</p>`. Required for canvas content.
			 */
			content?: string;
		};
	};
};

export type UpdatePageOutput = {
	/**
	 * An arbitrary unique identifier for this request.
	 */
	requestId?: string;
	/**
	 * ID of the updated page.
	 */
	id?: string;
};

/**
 * Update a page
 * Updates the properties or the content of a page in a doc.
 */
export async function updatePage(
	this: EndpointFunctionThis,
	payload: {
		input: UpdatePageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UpdatePageOutput>> {
	const response = await this.endpointCaller<UpdatePageOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'updatePage',
		},
		payload,
	);
	return response;
}
