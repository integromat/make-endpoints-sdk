// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type SetFormPublishSettingsInput = {
	/**
	 * The ID of the form.
	 */
	formId: string;
	/**
	 * The desired publish settings to apply to the form.
	 */
	publishSettings: {
		/**
		 * The publishing state of the form. When updating, both `isPublished` and `isAcceptingResponses` must be set.
		 */
		publishState?: {
			/**
			 * Whether the form is published and visible to others.
			 */
			isPublished: boolean;
			/**
			 * Whether the form accepts responses. Setting to `true` with `isPublished` set to `false` is not supported.
			 */
			isAcceptingResponses: boolean;
		};
	};
	/**
	 * The `publishSettings` fields to update. Accepts: `publishState` or `*`. If omitted, all fields are updated.
	 */
	updateMask?: string;
};

export type SetFormPublishSettingsOutput = {
	/**
	 * The ID of the form.
	 */
	formId?: string;
	/**
	 * The publish settings of the form.
	 */
	publishSettings?: {
		/**
		 * The publishing state of the form.
		 */
		publishState?: {
			/**
			 * Whether the form is published and visible to others.
			 */
			isPublished?: boolean;
			/**
			 * Whether the form accepts responses.
			 */
			isAcceptingResponses?: boolean;
		};
	};
};

/**
 * Set form publish settings
 * Updates the publish settings of a form.
 */
export async function setFormPublishSettings(
	this: EndpointFunctionThis,
	payload: {
		input: SetFormPublishSettingsInput;
		connectionId: number;
	},
): Promise<SetFormPublishSettingsOutput> {
	const response = await this.endpointCaller<SetFormPublishSettingsOutput>(
		{
			appName: 'google-forms',
			appVersion: 2,
			endpointName: 'setFormPublishSettings',
		},
		payload,
	);
	return response.output;
}
