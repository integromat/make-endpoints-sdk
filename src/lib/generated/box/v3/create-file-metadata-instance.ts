// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateFileMetadataInstanceInput = {
	/**
	 * The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
	 */
	file_id: string;
	/**
	 * The scope of the metadata template.
	 */
	scope: 'global' | 'enterprise';
	/**
	 * The name of the metadata template.
	 */
	template_key: string;
	/**
	 * An object with one key per metadata template field and the value to set, for example `{"category": "online", "contractValue": 100000}`. Only fields that exist on the template are accepted, except for the `global.properties` template, which accepts any keys but only string values. Multi-select and taxonomy fields take an array of values. Sent as the request body.
	 */
	metadata: Record<string, JSONValue>;
};

export type CreateFileMetadataInstanceOutput = {
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
 * Create a file metadata instance
 * Applies an instance of a metadata template to a file.
 */
export async function createFileMetadataInstance(
	this: EndpointFunctionThis,
	payload: {
		input: CreateFileMetadataInstanceInput;
		connectionId: number;
	},
): Promise<CreateFileMetadataInstanceOutput> {
	const response = await this.endpointCaller<CreateFileMetadataInstanceOutput>(
		{
			appName: 'box',
			appVersion: 3,
			endpointName: 'createFileMetadataInstance',
		},
		payload,
	);
	return response.output;
}
