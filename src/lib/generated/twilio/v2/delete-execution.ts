// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type DeleteExecutionInput = {
	/**
	 * The SID of the Flow that owns the Execution. Pattern `FW` plus 32 hex characters.
	 */
	FlowSid: string;
	/**
	 * The SID of the Execution resource to delete. Pattern `FN` plus 32 hex characters.
	 */
	Sid: string;
};

export type DeleteExecutionOutput = Record<string, never>;

/**
 * Delete an execution
 * Deletes a Studio Flow execution.
 */
export async function deleteExecution(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteExecutionInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<DeleteExecutionOutput>> {
	const response = await this.endpointCaller<DeleteExecutionOutput>(
		{
			appName: 'twilio',
			appVersion: 2,
			endpointName: 'deleteExecution',
		},
		payload,
	);
	return response;
}
