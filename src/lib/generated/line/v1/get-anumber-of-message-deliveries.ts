// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetANumberOfMessageDeliveriesInput = {
	/**
	 * Date for which to retrieve the number of sent messages. Format: `yyyyMMdd` (for example `20191231`). Timezone: UTC+9.
	 */
	date: string;
};

export type GetANumberOfMessageDeliveriesOutput = {
	/**
	 * Status of the counting process. The properties after `broadcast` are returned only when `status` is `ready`.
	 */
	status?: '' | 'ready' | 'unready' | 'out_of_service';
	/**
	 * Number of messages sent to all of this LINE Official Account's friends (broadcast messages).
	 */
	broadcast?: number;
	/**
	 * Number of messages sent to some of this LINE Official Account's friends, based on specific attributes (targeted messages).
	 */
	targeting?: number;
	/**
	 * Number of messages sent with step messages in the LINE Official Account Manager. For more information, see [Step messages](https://www.linebiz.com/jp/manual/OfficialAccountManager/step-message/) (only available in Japanese) in LINE for Business.
	 */
	stepMessage?: number;
	/**
	 * Number of auto-response messages sent.
	 */
	autoResponse?: number;
	/**
	 * Number of greeting messages sent.
	 */
	welcomeResponse?: number;
	/**
	 * Number of messages sent from LINE Official Account Manager [Chat screen](https://www.linebiz.com/jp/manual/OfficialAccountManager/chats/) (only available in Japanese).
	 */
	chat?: number;
	/**
	 * Number of broadcast messages sent with the `Send broadcast message` Messaging API operation.
	 */
	apiBroadcast?: number;
	/**
	 * Number of push messages sent with the `Send push message` Messaging API operation.
	 */
	apiPush?: number;
	/**
	 * Number of multicast messages sent with the `Send multicast message` Messaging API operation.
	 */
	apiMulticast?: number;
	/**
	 * Number of narrowcast messages sent with the `Send narrowcast message` Messaging API operation.
	 */
	apiNarrowcast?: number;
	/**
	 * Number of replies sent with the `Send reply message` Messaging API operation.
	 */
	apiReply?: number;
	/**
	 * Number of messages sent by auto reply with LINE Chat Plus.
	 */
	ccAutoReply?: number;
	/**
	 * Number of messages sent by manual chat support with LINE Chat Plus.
	 */
	ccManualReply?: number;
	/**
	 * Number of messages sent with [LINE notification messages](https://developers.line.biz/en/docs/partner-docs/line-notification-messages/overview/) on the options for corporate customers.
	 */
	pnpNoticeMessage?: number;
	/**
	 * Number of messages sent with Call to LINE. New registration for Call to LINE has been discontinued.
	 */
	pnpCallToLine?: number;
	/**
	 * Number of messages sent from third party chat tools.
	 */
	thirdPartyChatTool?: number;
};

/**
 * Get the number of message deliveries
 * Returns the number of messages sent from the LINE Official Account on a specified day.
 */
export async function getAnumberOfMessageDeliveries(
	this: EndpointFunctionThis,
	payload: {
		input: GetANumberOfMessageDeliveriesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetANumberOfMessageDeliveriesOutput> {
	const response = await this.endpointCaller<GetANumberOfMessageDeliveriesOutput>(
		{
			appName: 'line',
			appVersion: 1,
			endpointName: 'getANumberOfMessageDeliveries',
		},
		payload,
	);
	return response.output;
}
