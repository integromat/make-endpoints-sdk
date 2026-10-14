// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetInviteeNoShowInput = {
	/**
	 * The unique identifier of the no show record.
	 */
	uuid: string;
};

export type GetInviteeNoShowOutput = {
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
 * Get invitee no show
 * Returns information about a specified invitee no show.
 */
export async function getInviteeNoShow(
	this: EndpointFunctionThis,
	payload: {
		input: GetInviteeNoShowInput;
		connectionId: number;
	},
): Promise<GetInviteeNoShowOutput> {
	const response = await this.endpointCaller<GetInviteeNoShowOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'getInviteeNoShow',
		},
		payload,
	);
	return response.output;
}
