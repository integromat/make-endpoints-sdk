// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type DeleteComponentInput = {
	/**
	 * The ID of the component to delete.
	 */
	componentId: string;
	/**
	 * The ID of a component to reassign the deleted component's issues to. Leave empty to leave those issues without a component.
	 */
	moveIssuesTo?: string;
};

export type DeleteComponentOutput = Record<string, never>;

/**
 * Delete component
 * Deletes a component.
 */
export async function deleteComponent(
	this: EndpointFunctionThis,
	payload: {
		input: DeleteComponentInput;
		connectionId: number;
	},
): Promise<DeleteComponentOutput> {
	const response = await this.endpointCaller<DeleteComponentOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'deleteComponent',
		},
		payload,
	);
	return response.output;
}
