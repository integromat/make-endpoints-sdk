// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteAclRuleInput = {
	/**
	 * The identifier of the calendar.
	 */
	calendarId: string;
	/**
	 * The identifier of the ACL rule to delete.
	 */
	ruleId: string;
};

export type DeleteAclRuleOutput = Record<string, never>;

/**
 * Delete an access control rule
 * Deletes an access control rule from a calendar.
 */
export async function deleteAclRule(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteAclRuleInput;
		connectionId: number;
	},
): Promise<DeleteAclRuleOutput> {
	const response = await this.endpointCaller<DeleteAclRuleOutput>(
		{
			appName: 'google-calendar',
			appVersion: 5,
			endpointName: 'deleteAclRule',
		},
		payload,
	);
	return response.output;
}
