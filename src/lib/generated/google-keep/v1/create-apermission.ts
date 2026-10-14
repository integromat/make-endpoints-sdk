// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateAPermissionInput = {
	/**
	 * The note shared by all permissions being created. Format: `notes/{note}`. You can get it from the `name` field of **List notes**.
	 */
	parent: string;
	/**
	 * The permissions to create. If adding any permission fails, the entire request fails and no changes are made.
	 *
	 * Items: The request to add a single permission on the note.
	 */
	requests: {
		/**
		 * The parent note where the permission is created. Format: `notes/{note}`. Leave empty or set it to the same value as the top-level parent.
		 */
		parent?: string;
		/**
		 * The permission to create.
		 */
		permission: {
			/**
			 * The email associated with the member.
			 */
			email: string;
			/**
			 * The role granted by this permission. Currently, only `WRITER` may be specified.
			 */
			role?: '' | 'WRITER';
		};
	}[];
};

export type CreateAPermissionOutput = {
	/**
	 * The permissions created.
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
};

/**
 * Create permissions
 * Creates one or more permissions on a note.
 */
export async function createApermission(
	this: EndpointFunctionThis,
	payload: {
		input: CreateAPermissionInput;
		connectionId: number;
	},
): Promise<CreateAPermissionOutput> {
	const response = await this.endpointCaller<CreateAPermissionOutput>(
		{
			appName: 'google-keep',
			appVersion: 1,
			endpointName: 'createAPermission',
		},
		payload,
	);
	return response.output;
}
