// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteEngagementInput = {
	/**
	 * Which kind of engagement to delete.
	 */
	objectType: 'calls' | 'emails' | 'meetings' | 'notes' | 'tasks';
	/**
	 * The record ID of the engagement to delete.
	 */
	engagementId: string;
};

export type DeleteEngagementOutput = Record<string, never>;

/**
 * Delete an engagement
 * Deletes an engagement (a call, email, meeting, note, or task) on an object in HubSpot.
 */
export async function deleteEngagement(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteEngagementInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<DeleteEngagementOutput> {
	const response = await this.endpointCaller<DeleteEngagementOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'deleteEngagement',
		},
		payload,
	);
	return response.output;
}
