// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUserCapabilitiesInput = Record<string, never>;

export type GetUserCapabilitiesOutput = {
	/**
	 * A list of API capabilities available to the user. Possible values include `analytics`, `autofill`, `brand_template`, `export_png_transparency`, `resize`, and `team_restricted_app`. Enterprise users typically have `autofill` and `brand_template` capabilities.
	 *
	 * Items: The name of an API capability available to the user.
	 */
	capabilities?: string[];
};

/**
 * Get user capabilities
 * Returns the API capabilities for the authenticated user's account.
 */
export async function getUserCapabilities(
	this: EndpointFunctionThis,
	payload: {
		input: GetUserCapabilitiesInput;
		connectionId: number;
	},
): Promise<GetUserCapabilitiesOutput> {
	const response = await this.endpointCaller<GetUserCapabilitiesOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'getUserCapabilities',
		},
		payload,
	);
	return response.output;
}
