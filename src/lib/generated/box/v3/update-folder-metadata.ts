// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type UpdateFolderMetadataInput = {
	/**
	 * The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`.
	 */
	folder_id: string;
	/**
	 * The scope of the metadata template.
	 */
	scope: 'global' | 'enterprise';
	/**
	 * The name of the metadata template.
	 */
	template_key: string;
	/**
	 * A [JSON-Patch](https://tools.ietf.org/html/rfc6902) specification for the changes to make to the metadata instance. The changes are represented as a JSON array of operation objects.
	 */
	operations: {
		/**
		 * The type of change to perform on the template. Some of these are hazardous as they will change existing templates.
		 */
		op?: '' | 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy';
		/**
		 * The location in the metadata JSON object to apply the changes to, in the format of a [JSON-Pointer](https://tools.ietf.org/html/rfc6901). The path must always be prefixed with a `/` to represent the root of the template. The characters `~` and `/` are reserved characters and must be escaped in the key.
		 */
		path?: string;
		/**
		 * The value to be set or tested. Required for `add`, `replace`, and `test` operations. For `add`, if the value exists already the previous value will be overwritten by the new value. For `replace`, the value must exist before replacing. For `test`, the existing value at the `path` location must match the specified value. A string, number, or array of strings. To set or test an empty string, pass the two-character value `""` (a pair of double quotes) — an empty input is treated as not provided and is not sent.
		 */
		value?: Record<string, JSONValue>;
		/**
		 * The location in the metadata JSON object to move or copy a value from. Required for `move` or `copy` operations and must be in the format of a [JSON-Pointer](https://tools.ietf.org/html/rfc6901).
		 */
		from?: string;
	}[];
};

export type UpdateFolderMetadataOutput = {
	/**
	 * The identifier of the item that this metadata instance has been attached to. This combines the `type` and the `id` of the parent in the form `{type}_{id}`.
	 */
	$parent?: string;
	/**
	 * The name of the template.
	 */
	$template?: string;
	/**
	 * An ID for the scope in which this template has been applied. This will be `enterprise_{enterprise_id}` for templates defined for use in this enterprise, and `global` for general templates that are available to all enterprises using Box.
	 */
	$scope?: string;
	/**
	 * The version of the metadata instance. This version starts at 0 and increases every time a user-defined property is modified.
	 */
	$version?: number;
	/**
	 * Whether the user can edit this metadata instance.
	 */
	$canEdit?: boolean;
	/**
	 * A UUID to identify the metadata instance.
	 */
	$id?: string;
	/**
	 * A unique identifier for the "type" of this instance. This is an internal system property and should not be used by a client application.
	 */
	$type?: string;
	/**
	 * The last-known version of the template of the object. This is an internal system property and should not be used by a client application.
	 */
	$typeVersion?: number;
};

/**
 * Update folder metadata
 * Updates a metadata template instance on a folder using JSON Patch operations.
 */
export async function updateFolderMetadata(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateFolderMetadataInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UpdateFolderMetadataOutput> {
	const response = await this.endpointCaller<UpdateFolderMetadataOutput>(
		{
			appName: 'box',
			appVersion: 3,
			endpointName: 'updateFolderMetadata',
		},
		payload,
	);
	return response.output;
}
