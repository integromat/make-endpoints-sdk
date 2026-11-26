// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type GetSectionInput = {
	/**
	 * ID of the doc, for example `AbCDeFGH`. Use the listDocs endpoint to find doc IDs.
	 */
	docId: string;
	/**
	 * ID or name of the page. Names are discouraged because users can easily change them. If several pages share the name, an arbitrary one is returned. Example ID: `canvas-IjkLmnO`. Use the listSections endpoint to find page IDs.
	 */
	pageIdOrName: string;
};

export type GetSectionOutput = {
	/**
	 * ID of the page.
	 */
	id?: string;
	/**
	 * The type of this resource. Always `page`.
	 */
	type?: string;
	/**
	 * API link to the page.
	 */
	href?: string;
	/**
	 * Browser-friendly link to the page.
	 */
	browserLink?: string;
	/**
	 * Name of the page.
	 */
	name?: string;
	/**
	 * Subtitle of the page.
	 */
	subtitle?: string;
	/**
	 * Info about the page icon.
	 */
	icon?: {
		/**
		 * Name of the icon.
		 */
		name?: string;
		/**
		 * MIME type of the icon.
		 */
		type?: string;
		/**
		 * Browser-friendly link to the icon.
		 */
		browserLink?: string;
	};
	/**
	 * Info about the page cover image.
	 */
	image?: {
		/**
		 * Browser-friendly link to the image.
		 */
		browserLink?: string;
		/**
		 * MIME type of the image.
		 */
		type?: string;
		/**
		 * The width of the image in pixels.
		 */
		width?: number;
		/**
		 * The height of the image in pixels.
		 */
		height?: number;
	};
	/**
	 * The type of the page: `canvas`, `embed`, or `syncPage`.
	 */
	contentType?: string;
	/**
	 * Whether the page is hidden in the UI.
	 */
	isHidden?: boolean;
	/**
	 * Whether the page or any of its parents is hidden in the UI.
	 */
	isEffectivelyHidden?: boolean;
	/**
	 * Reference to the parent page, if this is a subpage.
	 */
	parent?: {
		/**
		 * ID of the parent page.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `page`.
		 */
		type?: string;
		/**
		 * API link to the parent page.
		 */
		href?: string;
		/**
		 * Browser-friendly link to the parent page.
		 */
		browserLink?: string;
		/**
		 * Name of the parent page.
		 */
		name?: string;
	};
	/**
	 * References to the subpages of this page.
	 *
	 * Items: Reference to a subpage.
	 */
	children?: {
		/**
		 * ID of the subpage.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `page`.
		 */
		type?: string;
		/**
		 * API link to the subpage.
		 */
		href?: string;
		/**
		 * Browser-friendly link to the subpage.
		 */
		browserLink?: string;
		/**
		 * Name of the subpage.
		 */
		name?: string;
	}[];
	/**
	 * Authors of the page.
	 *
	 * Items: A person who authored the page.
	 */
	authors?: {
		/**
		 * A URL describing the schema context for this object, typically `http://schema.org/`.
		 */
		'@context'?: string;
		/**
		 * The schema.org type of this object. Always `Person`.
		 */
		'@type'?: string;
		/**
		 * An identifier of additional type info that may not be present in a schema.org taxonomy.
		 */
		additionalType?: string;
		/**
		 * The full name of the person.
		 */
		name?: string;
		/**
		 * The email address of the person.
		 */
		email?: string;
	}[];
	/**
	 * Timestamp for when the page was created.
	 */
	createdAt?: string;
	/**
	 * The person who created the page.
	 */
	createdBy?: {
		/**
		 * A URL describing the schema context for this object, typically `http://schema.org/`.
		 */
		'@context'?: string;
		/**
		 * The schema.org type of this object. Always `Person`.
		 */
		'@type'?: string;
		/**
		 * An identifier of additional type info that may not be present in a schema.org taxonomy.
		 */
		additionalType?: string;
		/**
		 * The full name of the person.
		 */
		name?: string;
		/**
		 * The email address of the person.
		 */
		email?: string;
	};
	/**
	 * Timestamp for when the page content was last modified.
	 */
	updatedAt?: string;
	/**
	 * The person who last modified the page content.
	 */
	updatedBy?: {
		/**
		 * A URL describing the schema context for this object, typically `http://schema.org/`.
		 */
		'@context'?: string;
		/**
		 * The schema.org type of this object. Always `Person`.
		 */
		'@type'?: string;
		/**
		 * An identifier of additional type info that may not be present in a schema.org taxonomy.
		 */
		additionalType?: string;
		/**
		 * The full name of the person.
		 */
		name?: string;
		/**
		 * The email address of the person.
		 */
		email?: string;
	};
};

/**
 * Get a page
 * Returns details about a page in a doc.
 */
export async function getSection(
	this: EndpointFunctionThis,
	payload: {
		input: GetSectionInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetSectionOutput>> {
	const response = await this.endpointCaller<GetSectionOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'getSection',
		},
		payload,
	);
	return response;
}
