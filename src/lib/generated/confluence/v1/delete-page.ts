// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeletePageInput = {
	/**
	 * Numeric ID as a string, e.g. `123456789`. All Confluence IDs are numeric strings. Use the `searchPages` endpoint to find it.
	 */
	pageId: string;
	/**
	 * Delete a draft page rather than a published one.
	 */
	draft?: boolean;
	/**
	 * Permanently purge an already-trashed page. This is irreversible. A normal delete moves the page to the trash and can be undone in the UI.
	 */
	purge?: boolean;
};

export type DeletePageOutput = {
	/**
	 * Always true when the call succeeds. Confluence returns HTTP 204 with an empty body on a successful page delete, so this is synthesized by the endpoint rather than read from the response; a failure surfaces as an error instead.
	 */
	deleted?: boolean;
	/**
	 * Echo of the page ID that was deleted.
	 */
	pageId?: string;
};

/**
 * Delete a page
 * Deletes a page by its numeric ID. Destructive.
 */
export async function deletePage(
	this: EndpointFunctionThis,
	payload: {
		input: DeletePageInput;
		connectionId: number;
	},
): Promise<DeletePageOutput> {
	const response = await this.endpointCaller<DeletePageOutput>(
		{
			appName: 'confluence',
			appVersion: 1,
			endpointName: 'deletePage',
		},
		payload,
	);
	return response.output;
}
