// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type AddPinInput = {
	/**
	 * Channel to pin the message to.
	 */
	channel: string;
	/**
	 * Timestamp of the message to pin. Slack's docs list this as optional, but it is functionally required when pinning a message.
	 */
	timestamp: string;
};

export type AddPinOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
};

/**
 * Pin a message
 * Pins a message to a channel.
 */
export async function addPin(
	this: EndpointFunctionThis,
	payload: {
		input: AddPinInput;
		connectionId: number;
	},
): Promise<AddPinOutput> {
	const response = await this.endpointCaller<AddPinOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'addPin',
		},
		payload,
	);
	return response.output;
}
