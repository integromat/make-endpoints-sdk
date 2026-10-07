// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetRepositoryInput = {
	/**
	 * The login field of a user or organization.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * Follow repository renames. If disabled, a repository referenced by its old name will return an error.
	 */
	followRenames?: boolean;
};

export type GetRepositoryOutput = {
	data?: {
		repository?: {
			/**
			 * The ID of the repository.
			 */
			id?: string;
			/**
			 * Identifies the date and time when the object was created.
			 */
			createdAt?: string;
			/**
			 * The description of the repository.
			 */
			description?: string;
			/**
			 * The repository's URL.
			 */
			homepageUrl?: string;
			/**
			 * The name of the repository.
			 */
			name?: string;
			/**
			 * The repository's name with owner.
			 */
			nameWithOwner?: string;
			/**
			 * The user owner of the repository.
			 */
			owner?: {
				/**
				 * A URL pointing to the owner's public avatar.
				 */
				avatarUrl?: string;
				/**
				 * The username used to login.
				 */
				login?: string;
				/**
				 * The HTTP URL for the owner.
				 */
				url?: string;
			};
			/**
			 * Identifies the date and time when the repository was last pushed to.
			 */
			pushedAt?: string;
			/**
			 * Identifies the date and time when the object was last updated.
			 */
			updatedAt?: string;
			/**
			 * The HTTP URL for this repository.
			 */
			url?: string;
			/**
			 * The HTTP path for this repository.
			 */
			resourcePath?: string;
		};
	};
};

/**
 * Get a repository
 * Retrieves an existing repository by its owner and repository name.
 */
export async function getRepository(
	this: EndpointFunctionThis,
	payload: {
		input: GetRepositoryInput;
		connectionId: number;
	},
): Promise<GetRepositoryOutput> {
	const response = await this.endpointCaller<GetRepositoryOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'getRepository',
		},
		payload,
	);
	return response.output;
}
