// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetANumberOfFollowersInput = {
	/**
	 * Date for which to retrieve the number of followers. Format: `yyyyMMdd` (for example `20191231`). Timezone: UTC+9.
	 */
	date: string;
};

export type GetANumberOfFollowersOutput = {
	/**
	 * Calculation status.
	 */
	status?: '' | 'ready' | 'unready' | 'out_of_service';
	/**
	 * The number of times, as of the specified date, that a user added this LINE Official Account as a friend for the first time. The number doesn't decrease even if a user later blocks the account or when they delete their LINE account. `null` until `status` is `ready`.
	 */
	followers?: number;
	/**
	 * The number of users, as of the specified date, that the LINE Official Account can reach through targeted messages based on gender, age, and/or region. This number only includes users who are active on LINE or LINE services and whose demographics have a high level of certainty. `null` until `status` is `ready`.
	 */
	targetedReaches?: number;
	/**
	 * The number of users blocking the account as of the specified date. The number decreases when a user unblocks the account. `null` until `status` is `ready`.
	 */
	blocks?: number;
};

/**
 * Get the number of followers
 * Returns the number of users who have added the LINE Official Account on or before a specified date.
 */
export async function getAnumberOfFollowers(
	this: EndpointFunctionThis,
	payload: {
		input: GetANumberOfFollowersInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetANumberOfFollowersOutput> {
	const response = await this.endpointCaller<GetANumberOfFollowersOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'getANumberOfFollowers',
		},
		payload,
	);
	return response.output;
}
