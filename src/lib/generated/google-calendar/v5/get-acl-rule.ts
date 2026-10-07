// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetAclRuleInput = {
	/**
	 * The identifier of the calendar.
	 */
	calendarId: string;
	/**
	 * The identifier of the ACL rule.
	 */
	ruleId: string;
};

export type GetAclRuleOutput = {
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
 * Get an access control rule
 * Returns an access control rule for a calendar.
 */
export async function getAclRule(
	this: EndpointFunctionThis,
	payload: {
		input: GetAclRuleInput;
		connectionId: number;
	},
): Promise<GetAclRuleOutput> {
	const response = await this.endpointCaller<GetAclRuleOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'getAclRule',
		},
		payload,
	);
	return response.output;
}
