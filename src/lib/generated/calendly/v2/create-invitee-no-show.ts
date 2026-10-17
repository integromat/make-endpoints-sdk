// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateInviteeNoShowInput = {
	/**
	 * The URI of the invitee to mark as no show. For example, `https://api.calendly.com/scheduled_events/ABCD1234/invitees/EFGH5678`.
	 */
	invitee: string;
};

export type CreateInviteeNoShowOutput = {
	/**
	 * The no show resource.
	 */
	resource?: {
		/**
		 * Canonical reference for the no show record.
		 */
		uri?: string;
		/**
		 * The URI of the invitee.
		 */
		invitee?: string;
		/**
		 * When the no show was created.
		 */
		created_at?: string;
	};
};

/**
 * Create invitee no show
 * Marks an invitee as a no show.
 */
export async function createInviteeNoShow(
	this: EndpointFunctionThis,
	payload: {
		input: CreateInviteeNoShowInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateInviteeNoShowOutput> {
	const response = await this.endpointCaller<CreateInviteeNoShowOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'createInviteeNoShow',
		},
		payload,
	);
	return response.output;
}
