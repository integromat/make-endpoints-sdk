// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetReleaseInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * The name of the Git tag the release is associated with.
	 */
	tagName: string;
};

export type GetReleaseOutput = {
	data?: {
		repository?: {
			release?: {
				/**
				 * The node ID of the release object.
				 */
				id?: string;
				/**
				 * The title of the release.
				 */
				name?: string;
				/**
				 * The name of the release's Git tag.
				 */
				tagName?: string;
				/**
				 * The description of the release.
				 */
				description?: string;
				/**
				 * The HTTP URL for this release.
				 */
				url?: string;
				/**
				 * Whether or not the release is a draft.
				 */
				isDraft?: boolean;
				/**
				 * Whether or not the release is a prerelease.
				 */
				isPrerelease?: boolean;
				/**
				 * Whether or not the release is the latest release in the repository.
				 */
				isLatest?: boolean;
				/**
				 * Identifies the date and time when the object was created.
				 */
				createdAt?: string;
				/**
				 * Identifies the date and time when the release was published.
				 */
				publishedAt?: string;
				/**
				 * Identifies the date and time when the object was last updated.
				 */
				updatedAt?: string;
				/**
				 * The author of the release.
				 */
				author?: {
					/**
					 * The username of the actor.
					 */
					login?: string;
					/**
					 * A URL pointing to the actor's public avatar.
					 */
					avatarUrl?: string;
					/**
					 * The HTTP path for this actor.
					 */
					resourcePath?: string;
					/**
					 * The HTTP URL for this actor.
					 */
					url?: string;
				};
				/**
				 * The Git tag associated with this release.
				 */
				tag?: {
					/**
					 * The ref name of the Git tag.
					 */
					name?: string;
				};
			};
		};
	};
};

/**
 * Get a release
 * Retrieves an existing release by repository and tag name.
 */
export async function getRelease(
	this: EndpointFunctionThis,
	payload: {
		input: GetReleaseInput;
		connectionId: number;
	},
): Promise<GetReleaseOutput> {
	const response = await this.endpointCaller<GetReleaseOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'getRelease',
		},
		payload,
	);
	return response.output;
}
