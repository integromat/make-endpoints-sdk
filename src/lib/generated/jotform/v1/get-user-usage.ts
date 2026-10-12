// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetUserUsageInput = Record<string, never>;

export type GetUserUsageOutput = {
	/**
	 * Jotform API response code (200 on success).
	 */
	responseCode?: number;
	/**
	 * Response status message (for example `success`).
	 */
	message?: string;
	/**
	 * The account's usage figures for the current month.
	 */
	content?: {
		/**
		 * Number of form submissions received this month.
		 */
		submissions?: string;
		/**
		 * Number of SSL form submissions received this month.
		 */
		ssl_submissions?: string;
		/**
		 * Number of payment form submissions received this month.
		 */
		payments?: string;
		/**
		 * Upload space used this month.
		 */
		uploads?: string;
		/**
		 * Number of form views this month.
		 */
		views?: string;
		/**
		 * Number of API calls used this month.
		 */
		api?: number;
		/**
		 * Number of forms on the account.
		 */
		form_count?: number;
		/**
		 * Jotform username of the connected account.
		 */
		username?: string;
		/**
		 * Submissions over the plan limit.
		 */
		overSubmissions?: string;
		/**
		 * Total submissions on the account.
		 */
		total_submissions?: string;
		/**
		 * Number of support tickets.
		 */
		tickets?: string;
		/**
		 * Number of signed documents.
		 */
		signed_documents?: string;
		/**
		 * Number of workflow runs.
		 */
		workflow_runs?: string;
		/**
		 * Number of AI conversations.
		 */
		ai_conversations?: string;
		/**
		 * Number of AI messages.
		 */
		ai_messages?: string;
		/**
		 * Number of AI sessions.
		 */
		ai_sessions?: string;
		/**
		 * Number of AI phone calls.
		 */
		ai_phone_call?: string;
		/**
		 * Number of AI agent SMS messages.
		 */
		ai_agent_sms?: string;
		/**
		 * Number of AI chatbot conversations.
		 */
		ai_chatbot_conversations?: string;
		/**
		 * Number of submissions with a PDF attachment.
		 */
		pdf_attachment_submissions?: string;
		/**
		 * When the monthly usage counters reset.
		 */
		monthly_usage_reset_date?: string;
		/**
		 * Number of mobile submissions.
		 */
		mobile_submissions?: string;
		/**
		 * Number of Noupe AI conversations.
		 */
		noupe_ai_conversations?: string;
		/**
		 * Number of SMS notifications.
		 */
		sms_notifications?: string;
		/**
		 * Number of WhatsApp notifications.
		 */
		whatsapp_notifications?: string;
		/**
		 * Number of PDF generations.
		 */
		pdf_generations?: string;
		/**
		 * Number of website widget views.
		 */
		website_widget_views?: string;
		/**
		 * Number of AI agents.
		 */
		ai_agents?: string;
		/**
		 * Number of AI chatbot agents.
		 */
		ai_chatbot_agents?: string;
		/**
		 * Number of AI knowledge bases.
		 */
		ai_knowledge_base?: string;
		/**
		 * When the account was created.
		 */
		created_at?: string;
	};
	/**
	 * Number of API calls left in the current period for this API key.
	 */
	'limit-left'?: string;
};

/**
 * Get user usage
 * Returns the connected account's monthly submission, upload, and API usage.
 */
export async function getUserUsage(
	this: EndpointFunctionThis,
	payload: {
		input: GetUserUsageInput;
		connectionId: number;
	},
): Promise<GetUserUsageOutput> {
	const response = await this.endpointCaller<GetUserUsageOutput>(
		{
			appName: 'jotform',
			appVersion: 1,
			endpointName: 'getUserUsage',
		},
		payload,
	);
	return response.output;
}
