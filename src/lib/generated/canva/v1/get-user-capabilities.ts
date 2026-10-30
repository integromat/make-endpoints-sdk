// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUserCapabilitiesInput = Record<string, never>;

export type GetUserCapabilitiesOutput = {
	/**
	 * A list of API capabilities available to the user. Possible values include `analytics`, `autofill`, `background_removal`, `brand_template`, `design_generation`, `export_png_transparency`, `image_to_design_imports`, `resize`, and `team_restricted_app`. Which capabilities a user has depends on their Canva plan and team settings.
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
		confidential?: boolean;
		idempotencyKey?: string;
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
