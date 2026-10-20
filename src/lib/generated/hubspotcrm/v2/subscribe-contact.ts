// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SubscribeContactInput = {
	/**
	 * The contact's email address to subscribe.
	 */
	emailAddress: string;
	/**
	 * The ID of the communication subscription type. Obtain it from the subscription definitions endpoint.
	 */
	subscriptionId: string;
	/**
	 * The legal basis for processing the contact's data for this subscription.
	 */
	legalBasis?:
		| ''
		| 'CONSENT_WITH_NOTICE'
		| 'LEGITIMATE_INTEREST_CLIENT'
		| 'LEGITIMATE_INTEREST_OTHER'
		| 'LEGITIMATE_INTEREST_PQL'
		| 'NON_GDPR'
		| 'PERFORMANCE_OF_CONTRACT'
		| 'PROCESS_AND_STORE';
	/**
	 * An explanation supporting the selected legal basis.
	 */
	legalBasisExplanation?: string;
};

export type SubscribeContactOutput = {
	/**
	 * The ID of the communication subscription status.
	 */
	id: string;
	/**
	 * The name of the communication subscription type.
	 */
	name: string;
	/**
	 * The description of the communication subscription type.
	 */
	description: string;
	/**
	 * The level from which the returned subscription status originates.
	 */
	sourceOfStatus: 'BRAND_WIDE_STATUS' | 'PORTAL_WIDE_STATUS' | 'SUBSCRIPTION_STATUS';
	/**
	 * The contact's resulting subscription status.
	 */
	status: 'NOT_SUBSCRIBED' | 'SUBSCRIBED';
	/**
	 * The ID of the brand associated with the subscription status.
	 */
	brandId?: number;
	/**
	 * The legal basis recorded for the subscription status.
	 */
	legalBasis?:
		| ''
		| 'CONSENT_WITH_NOTICE'
		| 'LEGITIMATE_INTEREST_CLIENT'
		| 'LEGITIMATE_INTEREST_OTHER'
		| 'LEGITIMATE_INTEREST_PQL'
		| 'NON_GDPR'
		| 'PERFORMANCE_OF_CONTRACT'
		| 'PROCESS_AND_STORE';
	/**
	 * The explanation recorded for the legal basis.
	 */
	legalBasisExplanation?: string;
	/**
	 * The name of the preference group containing the subscription type.
	 */
	preferenceGroupName?: string;
};

/**
 * Subscribe a contact
 * Subscribes a contact's email address to a specific communication subscription type.
 */
export async function subscribeContact(
	this: EndpointFunctionThis,
	payload: {
		input: SubscribeContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<SubscribeContactOutput> {
	const response = await this.endpointCaller<SubscribeContactOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'subscribeContact',
		},
		payload,
	);
	return response.output;
}
