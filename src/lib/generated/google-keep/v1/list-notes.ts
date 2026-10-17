// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type ListNotesInput = {
	/**
	 * Filter for list results. If no filter is supplied, the `trashed` filter is applied by default. Valid fields to filter by are: `create_time`, `update_time`, `trash_time`, and `trashed`. Filter syntax follows the [Google AIP filtering spec](https://aip.dev/160).
	 */
	filter?: string;
	/**
	 * The maximum number of notes to return. A value of `0` or an empty value lets the server choose the upper bound.
	 */
	pageSize?: number;
	/**
	 * The `nextPageToken` value from the previous response. Leave empty to get the first page.
	 */
	pageToken?: string;
};

export type ListNotesOutput = {
	/**
	 * A page of notes.
	 *
	 * Items: A single note.
	 */
	notes?: {
		/**
		 * The resource name of the note. Format: `notes/{note}`.
		 */
		name?: string;
		/**
		 * When the note was created.
		 */
		createTime?: string;
		/**
		 * When the note was last modified.
		 */
		updateTime?: string;
		/**
		 * When the note was trashed. If `trashed` is `true`, the note is eventually deleted. Not set if the note is not trashed.
		 */
		trashTime?: string;
		/**
		 * Whether the note has been trashed. If trashed, the note is eventually deleted.
		 */
		trashed?: boolean;
		/**
		 * The attachments attached to the note.
		 *
		 * Items: An attachment of the note.
		 */
		attachments?: {
			/**
			 * The resource name of the attachment. Format: `notes/{note}/attachments/{attachment}`.
			 */
			name?: string;
			/**
			 * The MIME types (IANA media types) in which the attachment is available.
			 *
			 * Items: An IANA media type in which the attachment is available.
			 */
			mimeType?: string[];
		}[];
		/**
		 * The list of permissions set on the note. Contains at least one entry for the note owner.
		 *
		 * Items: A single permission on the note. Associates a member with a role.
		 */
		permissions?: {
			/**
			 * The resource name of the permission. Format: `notes/{note}/permissions/{permission}`.
			 */
			name?: string;
			/**
			 * The role granted by this permission. The role determines the entity's ability to read, write, and share notes. `OWNER` has full access and cannot be added or removed; `WRITER` can contribute content and modify note permissions.
			 */
			role?: '' | 'ROLE_UNSPECIFIED' | 'OWNER' | 'WRITER';
			/**
			 * The email associated with the member. May be unset if the member does not have an associated email.
			 */
			email?: string;
			/**
			 * Whether this member has been deleted. If the member is recovered, this value is set to `false` and the recovered member retains the role on the note.
			 */
			deleted?: boolean;
			/**
			 * The user to whom this role applies.
			 */
			user?: {
				/**
				 * The user's email.
				 */
				email?: string;
			};
			/**
			 * The group to which this role applies.
			 */
			group?: {
				/**
				 * The group email.
				 */
				email?: string;
			};
			/**
			 * The Google Family to which this role applies. The object has no fields; its presence indicates a family member.
			 */
			family?: Record<string, JSONValue>;
		}[];
		/**
		 * The body of the note. Contains either a text section or a list section.
		 */
		body?: {
			/**
			 * Used if the content of the note is a block of text.
			 */
			text?: {
				/**
				 * The text of the note.
				 */
				text?: string;
			};
			/**
			 * Used if the content of the note is a list.
			 */
			list?: {
				/**
				 * The items in the list.
				 *
				 * Items: A single list item in the note's list.
				 */
				listItems?: {
					/**
					 * The text of this item.
					 */
					text?: {
						/**
						 * The text of the list item.
						 */
						text?: string;
					};
					/**
					 * Whether this item has been checked off or not.
					 */
					checked?: boolean;
					/**
					 * List of list items nested under this list item. Only one level of nesting is allowed.
					 *
					 * Items: A list item nested under this list item.
					 */
					childListItems?: {
						/**
						 * The text of this item.
						 */
						text?: {
							/**
							 * The text of the list item.
							 */
							text?: string;
						};
						/**
						 * Whether this item has been checked off or not.
						 */
						checked?: boolean;
					}[];
				}[];
			};
		};
	}[];
	/**
	 * The token for the next page. Pass it as the `pageToken` input to get the next page. Empty when there are no more results.
	 */
	nextPageToken?: string;
};

/**
 * List notes
 * Lists notes.
 */
export async function listNotes(
	this: EndpointFunctionThis,
	payload: {
		input: ListNotesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListNotesOutput> {
	const response = await this.endpointCaller<ListNotesOutput>(
		{
			appName: 'google-keep',
			appVersion: 1,
			endpointName: 'listNotes',
		},
		payload,
	);
	return response.output;
}
