// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateOrUpdateTimelineEventInput = {
	/**
	 * The ID of a legacy timeline event template owned by this public app.
	 */
	eventTemplateId: string;
	/**
	 * A stable identifier unique to this app and event template. Reusing it updates/replaces the existing event.
	 */
	id: string;
	/**
	 * JSON object containing every token defined by the event template; use an empty object when the template defines none.
	 */
	tokens: Record<string, JSONValue>;
	/**
	 * The target CRM record ID. Required for non-contact templates; for contacts it takes precedence over UTK and Email.
	 */
	objectId?: string;
	/**
	 * HubSpot user token identifying a contact. Provide at least one of Object ID, UTK, or Email.
	 */
	utk?: string;
	/**
	 * Contact email used when Object ID and UTK are unavailable. It can identify or create a contact.
	 */
	email?: string;
	/**
	 * Event domain, commonly supplied together with UTK.
	 */
	domain?: string;
	/**
	 * Date and time when the event occurred. HubSpot uses submission time when omitted.
	 */
	timestamp?: string;
	/**
	 * Custom object type identifier when the template targets a custom object.
	 */
	customObjectTypeId?: string;
	/**
	 * Optional iframe configuration displayed with the event.
	 */
	timelineIFrame?: {
		/**
		 * Text of the link that opens the iframe.
		 */
		linkLabel: string;
		/**
		 * Heading displayed above the iframe.
		 */
		headerLabel: string;
		/**
		 * HTTPS URL loaded in the iframe.
		 */
		url: string;
		/**
		 * Iframe modal width in pixels.
		 */
		width: number;
		/**
		 * Iframe modal height in pixels.
		 */
		height: number;
	};
	/**
	 * Additional JSON interpreted by the event template's detail section.
	 */
	extraData?: Record<string, JSONValue>;
};

export type CreateOrUpdateTimelineEventOutput = {
	/**
	 * Timeline event ID.
	 */
	id?: string;
	/**
	 * ID of the event template used by the event.
	 */
	eventTemplateId?: string;
	/**
	 * Email address used for a contact timeline event.
	 */
	email?: string;
	/**
	 * ID of the CRM object associated with the event.
	 */
	objectId?: string;
	/**
	 * User token used to identify a contact.
	 */
	utk?: string;
	/**
	 * Event domain.
	 */
	domain?: string;
	/**
	 * Date and time when the event occurred.
	 */
	timestamp?: string;
	/**
	 * Template token keys and values.
	 */
	tokens?: Record<string, JSONValue>;
	/**
	 * Additional event data interpreted by the template.
	 */
	extraData?: Record<string, JSONValue>;
	/**
	 * Iframe configuration displayed with the event.
	 */
	timelineIFrame?: {
		/**
		 * Text of the iframe link.
		 */
		linkLabel?: string;
		/**
		 * Iframe heading.
		 */
		headerLabel?: string;
		/**
		 * Iframe content URL.
		 */
		url?: string;
		/**
		 * Iframe width in pixels.
		 */
		width?: number;
		/**
		 * Iframe height in pixels.
		 */
		height?: number;
	};
	/**
	 * CRM object type associated with the event template.
	 */
	objectType?: string;
	/**
	 * Custom object type identifier associated with the event.
	 */
	customObjectTypeId?: string;
	/**
	 * Date and time when the event was created.
	 */
	createdAt?: string;
};

/**
 * Create or update a timeline event
 * Creates a new custom timeline event, or updates an existing one if an event with the same ID was already sent.
 */
export async function createOrUpdateTimelineEvent(
	this: EndpointFunctionThis,
	payload: {
		input: CreateOrUpdateTimelineEventInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreateOrUpdateTimelineEventOutput> {
	const response = await this.endpointCaller<CreateOrUpdateTimelineEventOutput>(
		{
			appName: 'hubspotcrm',
			appVersion: 2,
			endpointName: 'createOrUpdateTimelineEvent',
		},
		payload,
	);
	return response.output;
}
