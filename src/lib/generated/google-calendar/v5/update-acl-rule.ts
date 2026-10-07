// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UpdateAclRuleInput = {
	/**
	 * The identifier of the calendar.
	 */
	calendarId: string;
	/**
	 * The identifier of the ACL rule to update.
	 */
	ruleId: string;
	/**
	 * The access role to assign.
	 */
	role: 'none' | 'freeBusyReader' | 'reader' | 'writerWithoutPrivateAccess' | 'writer' | 'owner';
	/**
	 * Whether to send notifications about the calendar sharing change.
	 */
	sendNotifications?: boolean;
};

export type UpdateAclRuleOutput = {
	/**
	 * Type of the resource. Value is always calendar#aclRule.
	 */
	kind?: string;
	/**
	 * ETag of the resource.
	 */
	etag?: string;
	/**
	 * Identifier of the ACL rule.
	 */
	id?: string;
	/**
	 * The extent to which calendar access is granted by this ACL rule.
	 */
	scope?: {
		/**
		 * The type of the scope. Possible values are default, user, group, or domain.
		 */
		type?: string;
		/**
		 * The email address of a user or group, or the name of a domain.
		 */
		value?: string;
	};
	/**
	 * The access role granted by this ACL rule. Possible values are none, freeBusyReader, reader, writerWithoutPrivateAccess, writer, or owner.
	 */
	role?: string;
};

/**
 * Update an access control rule
 * Updates an access control rule for a calendar using patch semantics.
 */
export async function updateAclRule(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateAclRuleInput;
		connectionId: number;
	},
): Promise<UpdateAclRuleOutput> {
	const response = await this.endpointCaller<UpdateAclRuleOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'updateAclRule',
		},
		payload,
	);
	return response.output;
}
