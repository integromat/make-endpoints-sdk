// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreateIssueLinkInput = {
	/**
	 * The type of issue link to create.
	 */
	type: {
		/**
		 * The ID of the issue link type. Required when `Name` isn't provided.
		 */
		id?: string;
		/**
		 * The name of the issue link type, e.g. `Blocks`. Required when `ID` isn't provided.
		 */
		name?: string;
	};
	/**
	 * The issue that the link points from (the inward side of the relationship, e.g. the issue that "is blocked by").
	 */
	inwardIssue: {
		/**
		 * The ID of the issue. Required when `Key` isn't provided.
		 */
		id?: string;
		/**
		 * The key of the issue, e.g. `PROJ-1`. Required when `ID` isn't provided.
		 */
		key?: string;
	};
	/**
	 * The issue that the link points to (the outward side of the relationship, e.g. the issue that "blocks").
	 */
	outwardIssue: {
		/**
		 * The ID of the issue. Required when `Key` isn't provided.
		 */
		id?: string;
		/**
		 * The key of the issue, e.g. `PROJ-1`. Required when `ID` isn't provided.
		 */
		key?: string;
	};
	/**
	 * An optional comment to add to the issue when the link is created.
	 */
	comment?: {
		/**
		 * The comment text, as an [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/) JSON object.
		 */
		body?: Record<string, JSONValue>;
		/**
		 * Restricts who can see the comment, to a group or a project role.
		 */
		visibility?: {
			/**
			 * Whether visibility is restricted to a group or a role.
			 */
			type?: '' | 'group' | 'role';
			/**
			 * The name of the group or role that visibility is restricted to.
			 */
			value?: string;
			/**
			 * The ID of the group or the name of the role that visibility is restricted to.
			 */
			identifier?: string;
		};
	};
};

export type CreateIssueLinkOutput = Record<string, never>;

/**
 * Create issue link
 * Creates a link between two issues.
 */
export async function createIssueLink(
	this: EndpointFunctionThis,
	payload: {
		input: CreateIssueLinkInput;
		connectionId: number;
	},
): Promise<CreateIssueLinkOutput> {
	const response = await this.endpointCaller<CreateIssueLinkOutput>(
		{
			appName: 'jira',
			appVersion: 2,
			endpointName: 'createIssueLink',
		},
		payload,
	);
	return response.output;
}
