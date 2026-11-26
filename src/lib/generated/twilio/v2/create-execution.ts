// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type CreateExecutionInput = {
	/**
	 * The SID of the Flow that owns the Execution. Pattern `FW` plus 32 hex characters.
	 */
	FlowSid: string;
	/**
	 * The Contact phone number to start a Studio Flow Execution, available as variable `{{contact.channel.address}}`.
	 */
	To: string;
	/**
	 * The Twilio phone number to send messages or initiate calls from during the Flow's Execution. Available as variable `{{flow.channel.address}}`. For SMS, this can also be a Messaging Service SID.
	 */
	From: string;
	/**
	 * JSON data that will be added to the Flow's context and that can be accessed as variables inside your Flow. For example, if you pass in `Parameters={"name":"Zeke"}`, a widget in your Flow can reference the variable `{{flow.data.name}}`, which returns "Zeke". Send a JSON object. The call forwards it as a JSON string.
	 */
	Parameters?: Record<string, JSONValue>;
};

export type CreateExecutionOutput = {
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
 * Create an execution
 * Starts a Studio Flow execution.
 */
export async function createExecution(
	this: EndpointFunctionThis,
	payload: {
		input: CreateExecutionInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<CreateExecutionOutput>> {
	const response = await this.endpointCaller<CreateExecutionOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'createExecution',
		},
		payload,
	);
	return response;
}
