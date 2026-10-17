// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateOrganizationInvitationInput = {
	/**
	 * The unique identifier of the organization. You can find this in the organization URI: `https://api.calendly.com/organizations/{uuid}`.
	 */
	org_uuid: string;
	/**
	 * The email address of the user to invite.
	 */
	email: string;
};

export type CreateOrganizationInvitationOutput = {
	/**
	 * The organization invitation resource.
	 */
	resource?: {
		/**
		 * Canonical reference for the invitation.
		 */
		uri?: string;
		/**
		 * The email of the invited user.
		 */
		email?: string;
		/**
		 * The URI of the organization.
		 */
		organization?: string;
		/**
		 * The status of the invitation (e.g. `pending`, `accepted`, `declined`).
		 */
		status?: string;
		/**
		 * When the invitation was last sent.
		 */
		last_sent_at?: string;
		/**
		 * When the invitation is accepted, the URI of the user who accepted.
		 */
		user?: string;
		/**
		 * When the invitation was created.
		 */
		created_at?: string;
		/**
		 * When the invitation was last updated.
		 */
		updated_at?: string;
	};
};

/**
 * Create organization invitation
 * Invites a user to an organization.
 */
export async function createOrganizationInvitation(
	this: EndpointFunctionThis,
	payload: {
		input: CreateOrganizationInvitationInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateOrganizationInvitationOutput> {
	const response = await this.endpointCaller<CreateOrganizationInvitationOutput>(
		{
			appName: 'calendly',
			appVersion: 2,
			endpointName: 'createOrganizationInvitation',
		},
		payload,
	);
	return response.output;
}
