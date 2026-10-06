// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListModelsInput = Record<string, never>;

export type ListModelsOutput = {
	/**
	 * Aliases and models the account can send in evaluate.model.
	 */
	models?: {
		/**
		 * Alias or ID for evaluate.model, for example `jev-latest`.
		 */
		name?: string;
		/**
		 * What this alias or model is for.
		 */
		description?: string;
		/**
		 * When this model was released.
		 */
		release_date?: string;
	}[];
};

/**
 * List models
 * List models and aliases available to the account.
 */
export async function listModels(
	this: EndpointFunctionThis,
	payload: {
		input: ListModelsInput;
		connectionId: number;
	},
): Promise<ListModelsOutput> {
	const response = await this.endpointCaller<ListModelsOutput>(
		{
			appName: 'typesafe',
			appVersion: 1,
			endpointName: 'listModels',
		},
		payload,
	);
	return response.output;
}
