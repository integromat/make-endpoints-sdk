// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetBrandTemplateDatasetInput = {
	/**
	 * The ID of the brand template.
	 */
	brandTemplateId: string;
};

export type GetBrandTemplateDatasetOutput = {
	/**
	 * A collection of autofillable fields in the brand template. Keys are the field names, values describe the field type and constraints.
	 */
	dataset?: Record<string, JSONValue>;
};

/**
 * Get brand template dataset
 * Gets the autofillable dataset for a brand template.
 */
export async function getBrandTemplateDataset(
	this: EndpointFunctionThis,
	payload: {
		input: GetBrandTemplateDatasetInput;
		connectionId: number;
	},
): Promise<GetBrandTemplateDatasetOutput> {
	const response = await this.endpointCaller<GetBrandTemplateDatasetOutput>(
		{
			appName: 'canva',
			appVersion: 1,
			endpointName: 'getBrandTemplateDataset',
		},
		payload,
	);
	return response.output;
}
