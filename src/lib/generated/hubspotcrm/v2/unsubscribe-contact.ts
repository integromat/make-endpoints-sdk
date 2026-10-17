// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type UnsubscribeContactInput = {
	/**
	 * The contact's email address to unsubscribe.
	 */
	emailAddress: string;
	/**
	 * The ID of the communication subscription type. Obtain it from the subscription definitions endpoint.
	 */
	subscriptionId: string;
	/**
	 * The legal basis associated with changing this subscription status.
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

export type UnsubscribeContactOutput = {
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
 * Unsubscribe a contact
 * Unsubscribes a contact's email address from a specific communication subscription type.
 */
export async function unsubscribeContact(
	this: EndpointFunctionThis,
	payload: {
		input: UnsubscribeContactInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<UnsubscribeContactOutput> {
	const response = await this.endpointCaller<UnsubscribeContactOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'unsubscribeContact',
		},
		payload,
	);
	return response.output;
}
