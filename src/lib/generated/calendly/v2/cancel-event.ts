// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CancelEventInput = {
	/**
	 * The unique identifier of the scheduled event to cancel. You can find this in the event URI: `https://api.calendly.com/scheduled_events/{uuid}`.
	 */
	uuid: string;
	/**
	 * The reason for canceling the event.
	 */
	reason?: string;
};

export type CancelEventOutput = {
	/**
	 * The cancellation resource.
	 */
	resource?: {
		/**
		 * The name of the person who canceled the event.
		 */
		canceled_by?: string;
		/**
		 * The type of the canceler (e.g. `host`, `invitee`).
		 */
		canceler_type?: string;
		/**
		 * The reason for the cancellation.
		 */
		reason?: string;
		/**
		 * The moment when the cancellation was created.
		 */
		created_at?: string;
	};
};

/**
 * Cancel event
 * Cancels a specified scheduled event.
 */
export async function cancelEvent(
	this: EndpointFunctionThis,
	payload: {
		input: CancelEventInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CancelEventOutput> {
	const response = await this.endpointCaller<CancelEventOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'cancelEvent',
		},
		payload,
	);
	return response.output;
}
