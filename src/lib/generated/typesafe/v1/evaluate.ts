// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type EvaluateInput = {
	/**
	 * The content to evaluate: a string, object, or array. Put facts here; put judgments in questions.
	 */
	state: Record<string, JSONValue>;
	/**
	 * Yes/no, choice, and score questions in one call. Each `id` must be unique. Send an array of rows, not an object keyed by id.
	 */
	questions: {
		/**
		 * Key for this question in the answers map. For example `is_urgent`. Must be unique.
		 */
		id: string;
		/**
		 * Question type.
		 */
		type: 'noul' | 'choice' | 'score';
	}[];
	/**
	 * Model name or alias, for example `jev-latest`. Use listModels to see aliases.
	 */
	model?: string;
};

export type EvaluateOutput = {
	/**
	 * Resolved versioned model ID that answered, for example `jev-1.13.0`.
	 */
	model?: string;
	/**
	 * Map keyed by your question ids. Noul: `noul` 0-1. Choice: `choice`, `probabilities`, `confidence`. Score: `score`, `legend`, `probabilities`, `confidence`.
	 */
	answers?: Record<string, JSONValue>;
	/**
	 * Token usage for this call.
	 */
	usage?: {
		/**
		 * Tokens in the request (state plus questions).
		 */
		input_tokens?: number;
		/**
		 * Tokens in the model response.
		 */
		output_tokens?: number;
	};
};

/**
 * Evaluate a state
 * Evaluates state against typed questions and gets back structured answers.
 */
export async function evaluate(
	this: EndpointFunctionThis,
	payload: {
		input: EvaluateInput;
		connectionId: number;
	},
): Promise<EvaluateOutput> {
	const response = await this.endpointCaller<EvaluateOutput>(
		{
			appName: 'typesafe',
			appVersion: 1,
			endpointName: 'evaluate',
		},
		payload,
	);
	return response.output;
}
