// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateSchedulingLinkInput = {
	/**
	 * The URI of the event type. For example, `https://api.calendly.com/event_types/ABCD1234`.
	 */
	owner: string;
};

export type CreateSchedulingLinkOutput = {
	/**
	 * The scheduling link resource.
	 */
	resource?: {
		/**
		 * The URL for the scheduling link.
		 */
		booking_url?: string;
		/**
		 * The URI of the owner (event type).
		 */
		owner?: string;
		/**
		 * The type of the owner.
		 */
		owner_type?: string;
	};
};

/**
 * Create scheduling link
 * Creates a single-use scheduling link.
 */
export async function createSchedulingLink(
	this: EndpointFunctionThis,
	payload: {
		input: CreateSchedulingLinkInput;
		connectionId: number;
	},
): Promise<CreateSchedulingLinkOutput> {
	const response = await this.endpointCaller<CreateSchedulingLinkOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'createSchedulingLink',
		},
		payload,
	);
	return response.output;
}
