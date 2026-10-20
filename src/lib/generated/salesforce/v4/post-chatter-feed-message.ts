// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type PostChatterFeedMessageInput = {
	/**
	 * Id of the user, group, or record that parents the feed item. Use me to post to the connected user. Use List Chatter subjects to find a user or group id.
	 */
	subjectId: string;
	/**
	 * Text of the Chatter post. One text segment is sent. The feed item body limit is 10000 characters.
	 */
	text: string;
};

export type PostChatterFeedMessageOutput = {
	/**
	 * User or entity that created the feed element.
	 */
	actor?: Record<string, JSONValue>;
	/**
	 * Feed element body and message segments.
	 */
	body?: Record<string, JSONValue>;
	/**
	 * Capabilities available for the feed element.
	 */
	capabilities?: Record<string, JSONValue>;
	/**
	 * Client application information.
	 */
	clientInfo?: Record<string, JSONValue>;
	/**
	 * Date and time the feed element was created.
	 */
	createdDate?: string;
	/**
	 * Whether the feed element represents an event.
	 */
	event?: boolean;
	/**
	 * Salesforce feed element type.
	 */
	feedElementType?: string;
	/**
	 * Whether the feed element has a verified comment.
	 */
	hasVerifiedComment?: boolean;
	/**
	 * Rendered feed element header.
	 */
	header?: Record<string, JSONValue>;
	/**
	 * Salesforce feed element ID.
	 */
	id?: string;
	/**
	 * Whether deletion is restricted.
	 */
	isDeleteRestricted?: boolean;
	/**
	 * Whether the feed element can be shared.
	 */
	isSharable?: boolean;
	/**
	 * Date and time the feed element was last modified.
	 */
	modifiedDate?: string;
	/**
	 * Original feed item when this item references another item.
	 */
	originalFeedItem?: Record<string, JSONValue>;
	/**
	 * Actor of the original feed item.
	 */
	originalFeedItemActor?: Record<string, JSONValue>;
	/**
	 * Parent user, group, or record resource.
	 */
	parent?: Record<string, JSONValue>;
	/**
	 * Photo URL associated with the feed element.
	 */
	photoUrl?: string;
	/**
	 * Human-readable relative creation time.
	 */
	relativeCreatedDate?: string;
	/**
	 * Feed item type.
	 */
	type?: string;
	/**
	 * Salesforce API path for the feed element.
	 */
	url?: string;
	/**
	 * Feed element visibility.
	 */
	visibility?: string;
};

/**
 * Post a message to a Chatter feed
 * Posts a message to a Chatter feed.
 */
export async function postChatterFeedMessage(
	this: EndpointFunctionThis,
	payload: {
		input: PostChatterFeedMessageInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<PostChatterFeedMessageOutput> {
	const response = await this.endpointCaller<PostChatterFeedMessageOutput>(
		{
			appName: 'salesforce',
			appVersion: 4,
			endpointName: 'postChatterFeedMessage',
		},
		payload,
	);
	return response.output;
}
