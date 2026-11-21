// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListDocsInput = {
	/**
	 * Search term used to filter down results.
	 */
	query?: string;
	/**
	 * If true, returns only docs owned by the user.
	 */
	isOwner?: boolean;
	/**
	 * If true, returns only published docs.
	 */
	isPublished?: boolean;
	/**
	 * Returns only docs copied from the doc with this ID.
	 */
	sourceDoc?: string;
	/**
	 * If true, returns only starred docs. If false, returns only docs that are not starred.
	 */
	isStarred?: boolean;
	/**
	 * If true, returns only docs visible within the gallery.
	 */
	inGallery?: boolean;
	/**
	 * Returns only docs belonging to the workspace with this ID, for example `ws-1Ab234`.
	 */
	workspaceId?: string;
	/**
	 * Returns only docs belonging to the folder with this ID, for example `fl-1Ab234`.
	 */
	folderId?: string;
	/**
	 * Returns only docs where the user has at least this access level. `Write` includes both editors and managers.
	 */
	minimumAccess?: '' | 'readonly' | 'comment' | 'write';
	/**
	 * Maximum number of docs to return in this call. The API defaults to 25.
	 */
	limit?: number;
	/**
	 * Opaque token used to fetch the next page of results. Use the `nextPageToken` value from the previous call. Leave empty to fetch the first page.
	 */
	pageToken?: string;
};

export type ListDocsOutput = {
	/**
	 * The docs on this page of results.
	 *
	 * Items: Metadata about a doc.
	 */
	items?: {
		/**
		 * ID of the doc.
		 */
		id?: string;
		/**
		 * The type of this resource. Always `doc`.
		 */
		type?: string;
		/**
		 * API link to the doc.
		 */
		href?: string;
		/**
		 * Browser-friendly link to the doc.
		 */
		browserLink?: string;
		/**
		 * Info about the doc icon.
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
		 * Name of the doc.
		 */
		name?: string;
		/**
		 * Email address of the doc owner.
		 */
		owner?: string;
		/**
		 * Name of the doc owner.
		 */
		ownerName?: string;
		/**
		 * The number of components within the doc.
		 */
		docSize?: {
			/**
			 * The number of rows contained within all tables of the doc.
			 */
			totalRowCount?: number;
			/**
			 * The total number of tables and views contained within the doc.
			 */
			tableAndViewCount?: number;
			/**
			 * The total number of base tables contained within the doc.
			 */
			baseTableCount?: number;
			/**
			 * The total number of pages contained within the doc.
			 */
			pageCount?: number;
			/**
			 * If true, the doc is over the API size limit.
			 */
			overApiSizeLimit?: boolean;
		};
		/**
		 * Reference to the doc this doc was copied from, if any.
		 */
		sourceDoc?: {
			/**
			 * ID of the source doc.
			 */
			id?: string;
			/**
			 * The type of this resource. Always `doc`.
			 */
			type?: string;
			/**
			 * API link to the source doc.
			 */
			href?: string;
			/**
			 * Browser-friendly link to the source doc.
			 */
			browserLink?: string;
		};
		/**
		 * Timestamp for when the doc was created.
		 */
		createdAt?: string;
		/**
		 * Timestamp for when the doc was last modified.
		 */
		updatedAt?: string;
		/**
		 * Information about the publishing state of the doc. Present only for published docs.
		 */
		published?: {
			/**
			 * Description of the published doc.
			 */
			description?: string;
			/**
			 * URL to the published doc.
			 */
			browserLink?: string;
			/**
			 * URL to the cover image for the published doc.
			 */
			imageLink?: string;
			/**
			 * If true, the doc is discoverable.
			 */
			discoverable?: boolean;
			/**
			 * If true, new users may be required to sign in to view content within this doc, and the doc owner receives credit for each user who signs up via the doc.
			 */
			earnCredit?: boolean;
			/**
			 * Which interaction mode the published doc uses: `view`, `play`, or `edit`.
			 */
			mode?: string;
			/**
			 * Categories applied to the doc.
			 *
			 * Items: A category applied to the doc.
			 */
			categories?: {
				/**
				 * Name of the category.
				 */
				name?: string;
			}[];
		};
		/**
		 * Reference to the folder containing the doc.
		 */
		folder?: {
			/**
			 * ID of the folder.
			 */
			id?: string;
			/**
			 * The type of this resource. Always `folder`.
			 */
			type?: string;
			/**
			 * Browser-friendly link to the folder.
			 */
			browserLink?: string;
			/**
			 * Name of the folder. Included if the user has access to the folder.
			 */
			name?: string;
		};
		/**
		 * Reference to the workspace.
		 */
		workspace?: {
			/**
			 * ID of the workspace.
			 */
			id?: string;
			/**
			 * The type of this resource. Always `workspace`.
			 */
			type?: string;
			/**
			 * ID of the organization bound to this workspace, if any.
			 */
			organizationId?: string;
			/**
			 * Browser-friendly link to the workspace.
			 */
			browserLink?: string;
			/**
			 * Name of the workspace. Included if the user has access to the workspace.
			 */
			name?: string;
		};
		/**
		 * ID of the workspace containing the doc. Deprecated by the vendor: use `workspace.id` instead.
		 */
		workspaceId?: string;
		/**
		 * ID of the folder containing the doc. Deprecated by the vendor: use `folder.id` instead.
		 */
		folderId?: string;
	}[];
	/**
	 * API link to these results.
	 */
	href?: string;
	/**
	 * Token for the next page of results. Pass it as `pageToken` in the next call. Absent when there are no more results.
	 */
	nextPageToken?: string;
	/**
	 * API link to the next page of results. Absent when there are no more results.
	 */
	nextPageLink?: string;
};

/**
 * List docs
 * Returns a list of docs accessible by the user.
 */
export async function listDocs(
	this: EndpointFunctionThis,
	payload: {
		input: ListDocsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListDocsOutput> {
	const response = await this.endpointCaller<ListDocsOutput>(
		{
			appName: 'coda',
			appVersion: 1,
			endpointName: 'listDocs',
		},
		payload,
	);
	return response.output;
}
