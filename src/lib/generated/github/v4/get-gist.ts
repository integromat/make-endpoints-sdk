// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetGistInput = {
	/**
	 * The login field of the user that owns the gist.
	 */
	login: string;
	/**
	 * The gist name (the identifier in the gist URL).
	 */
	name: string;
};

export type GetGistOutput = {
	data?: {
		user?: {
			gist?: {
				/**
				 * The node ID of the gist object.
				 */
				id?: string;
				/**
				 * The gist name.
				 */
				name?: string;
				/**
				 * The gist description.
				 */
				description?: string;
				/**
				 * Identifies the date and time when the object was created.
				 */
				createdAt?: string;
				/**
				 * Identifies the date and time when the gist was last pushed to.
				 */
				pushedAt?: string;
				/**
				 * Identifies the date and time when the object was last updated.
				 */
				updatedAt?: string;
				/**
				 * The HTTP URL for this gist.
				 */
				url?: string;
				/**
				 * The HTML path to this resource.
				 */
				resourcePath?: string;
				/**
				 * Identifies if the gist is a fork.
				 */
				isFork?: boolean;
				/**
				 * Whether the gist is public or not.
				 */
				isPublic?: boolean;
				/**
				 * Returns a count of how many stargazers there are on this object.
				 */
				stargazerCount?: number;
				/**
				 * Returns a boolean indicating whether the viewing user has starred this starrable.
				 */
				viewerHasStarred?: boolean;
				/**
				 * The gist owner.
				 */
				owner?: {
					/**
					 * The username used to login.
					 */
					login?: string;
					/**
					 * A URL pointing to the owner's public avatar.
					 */
					avatarUrl?: string;
					/**
					 * The HTTP path for the owner.
					 */
					resourcePath?: string;
					/**
					 * The HTTP URL for the owner.
					 */
					url?: string;
				};
				/**
				 * A list of a gist's files.
				 */
				files?: {
					/**
					 * The gist file name.
					 */
					name?: string;
					/**
					 * The gist file extension.
					 */
					extension?: string;
					/**
					 * The gist file size in bytes.
					 */
					size?: number;
					/**
					 * Whether the file is an image.
					 */
					isImage?: boolean;
					/**
					 * Whether the file's contents were truncated.
					 */
					isTruncated?: boolean;
					/**
					 * The encoding used to encode the file contents.
					 */
					encoding?: string;
					/**
					 * The programming language this file is written in.
					 */
					language?: {
						/**
						 * The name of the current language.
						 */
						name?: string;
					};
				}[];
			};
		};
	};
};

/**
 * Get a gist
 * Retrieves an existing gist by owner and gist name.
 */
export async function getGist(
	this: EndpointFunctionThis,
	payload: {
		input: GetGistInput;
		connectionId: number;
	},
): Promise<GetGistOutput> {
	const response = await this.endpointCaller<GetGistOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'getGist',
		},
		payload,
	);
	return response.output;
}
