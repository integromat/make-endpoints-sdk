// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type UpdateExecutionInput = {
	/**
	 * The SID of the Flow that owns the Execution. Pattern `FW` plus 32 hex characters.
	 */
	FlowSid: string;
	/**
	 * The SID of the Execution resource to update. Pattern `FN` plus 32 hex characters.
	 */
	Sid: string;
	/**
	 * The status of the Execution. Can be: `active` or `ended`.
	 */
	Status: 'active' | 'ended';
};

export type UpdateExecutionOutput = {
	/**
	 * The unique string that we created to identify the Execution resource.
	 */
	sid?: string;
	/**
	 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Execution resource.
	 */
	account_sid?: string;
	/**
	 * The SID of the Flow.
	 */
	flow_sid?: string;
	/**
	 * The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
	 */
	contact_channel_address?: string;
	/**
	 * The SID of the Contact.
	 */
	contact_sid?: string;
	/**
	 * The Flow version number at the time of Execution creation.
	 */
	flow_version?: number;
	/**
	 * The current state of the Flow's Execution. As a flow executes, we save its state in this context. We save data that your widgets can access as variables in configuration fields or in text areas as variable substitution.
	 */
	context?: Record<string, JSONValue>;
	/**
	 * The status of the Execution. Can be: `active` or `ended`.
	 */
	status?: '' | 'active' | 'ended';
	/**
	 * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
	 */
	date_created?: string;
	/**
	 * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
	 */
	date_updated?: string;
	/**
	 * The SID or identifier that triggered this Execution. For example, a Call SID if triggered by an incoming call, a Message SID if triggered by an incoming message, a Request SID if triggered by a REST API request, and so on.
	 */
	initiated_by?: string;
	/**
	 * The absolute URL of the resource.
	 */
	url?: string;
	/**
	 * The URLs of nested resources.
	 */
	links?: Record<string, JSONValue>;
};

/**
 * Update an execution
 * Updates a Studio Flow execution status.
 */
export async function updateExecution(
	this: EndpointFunctionThis,
	payload: {
		input: UpdateExecutionInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<UpdateExecutionOutput>> {
	const response = await this.endpointCaller<UpdateExecutionOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'updateExecution',
		},
		payload,
	);
	return response;
}
