// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type CreateAclRuleInput = {
	/**
	 * The identifier of the calendar.
	 */
	calendarId: string;
	/**
	 * The access role to assign.
	 */
	role: 'none' | 'freeBusyReader' | 'reader' | 'writerWithoutPrivateAccess' | 'writer' | 'owner';
	/**
	 * The extent to which calendar access is granted by this ACL rule.
	 */
	scope: {
		/**
		 * The type of the scope.
		 */
		type: 'default' | 'user' | 'group' | 'domain';
		/**
		 * The email address of a user or group, or the name of a domain. Omitted for type default.
		 */
		value?: string;
	};
	/**
	 * Whether to send notifications about the calendar sharing change.
	 */
	sendNotifications?: boolean;
};

export type CreateAclRuleOutput = {
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
 * Create an access control rule
 * Creates an access control rule for a calendar.
 */
export async function createAclRule(
	this: EndpointFunctionThis,
	payload: {
		input: CreateAclRuleInput;
		connectionId: number;
	},
): Promise<CreateAclRuleOutput> {
	const response = await this.endpointCaller<CreateAclRuleOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'createAclRule',
		},
		payload,
	);
	return response.output;
}
