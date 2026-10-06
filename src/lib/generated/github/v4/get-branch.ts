// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetBranchInput = {
	/**
	 * The login field of a user or organization that owns the repository.
	 */
	owner: string;
	/**
	 * The name of the repository.
	 */
	name: string;
	/**
	 * The branch name to retrieve, e.g. `master` or the fully qualified `refs/heads/master`.
	 */
	qualifiedName: string;
};

export type GetBranchOutput = {
	data?: {
		repository?: {
			/**
			 * The branch (Ref) identified by the qualified name.
			 */
			ref?: {
				/**
				 * The node ID of the ref.
				 */
				id?: string;
				/**
				 * The ref name (e.g. main).
				 */
				name?: string;
				/**
				 * The ref prefix (e.g. refs/heads/).
				 */
				prefix?: string;
				/**
				 * The commit the branch points to.
				 */
				target?: {
					/**
					 * The Git object ID.
					 */
					oid?: string;
					/**
					 * An abbreviated version of the Git object ID.
					 */
					abbreviatedOid?: string;
					/**
					 * The Git commit message.
					 */
					message?: string;
					/**
					 * The Git commit message headline.
					 */
					messageHeadline?: string;
					/**
					 * The datetime when this commit was committed.
					 */
					committedDate?: string;
					/**
					 * The HTTP URL for this commit.
					 */
					url?: string;
					/**
					 * Authorship details of the commit.
					 */
					author?: {
						/**
						 * The name in the Git commit.
						 */
						name?: string;
						/**
						 * The email in the Git commit.
						 */
						email?: string;
						/**
						 * The timestamp of the Git action (authoring or committing).
						 */
						date?: string;
						/**
						 * A URL pointing to the author's public avatar.
						 */
						avatarUrl?: string;
						/**
						 * The GitHub user corresponding to the email field. Null if no such user exists.
						 */
						user?: {
							/**
							 * The username used to login.
							 */
							login?: string;
							/**
							 * The HTTP URL for this user.
							 */
							url?: string;
						};
					};
				};
			};
		};
	};
};

/**
 * Get a branch
 * Retrieves an existing branch of a repository.
 */
export async function getBranch(
	this: EndpointFunctionThis,
	payload: {
		input: GetBranchInput;
		connectionId: number;
	},
): Promise<GetBranchOutput> {
	const response = await this.endpointCaller<GetBranchOutput>(
		{
			appName: 'github',
			appVersion: 4,
			endpointName: 'getBranch',
		},
		payload,
	);
	return response.output;
}
