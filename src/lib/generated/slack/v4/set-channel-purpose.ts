// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SetChannelPurposeInput = {
	/**
	 * ID of the channel to set the purpose of.
	 */
	channel: string;
	/**
	 * The new purpose text, up to 250 characters.
	 */
	purpose: string;
};

export type SetChannelPurposeOutput = {
	/**
	 * Whether the request was successful.
	 */
	ok?: boolean;
	/**
	 * The newly set purpose text.
	 */
	purpose?: string;
};

/**
 * Set a channel's purpose
 * Sets the purpose (description) of a channel.
 */
export async function setChannelPurpose(
	this: EndpointFunctionThis,
	payload: {
		input: SetChannelPurposeInput;
		connectionId: number;
	},
): Promise<SetChannelPurposeOutput> {
	const response = await this.endpointCaller<SetChannelPurposeOutput>(
		{
			appName: 'slack',
			appVersion: 4,
			endpointName: 'setChannelPurpose',
		},
		payload,
	);
	return response.output;
}
