// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetANoteInput = {
	/**
	 * The resource name of the note. Format: `notes/{note}`. You can get it from the `name` field of **List notes**.
	 */
	name: string;
};

export type GetANoteOutput = {
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
};

/**
 * Get a note
 * Gets a note.
 */
export async function getAnote(
	this: EndpointFunctionThis,
	payload: {
		input: GetANoteInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetANoteOutput> {
	const response = await this.endpointCaller<GetANoteOutput>(
		{
			appName: 'google-keep',
			appVersion: 1,
			endpointName: 'getANote',
		},
		payload,
	);
	return response.output;
}
