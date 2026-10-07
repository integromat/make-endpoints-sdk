// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetFormInput = {
	/**
	 * The ID of the form to retrieve. For example, `mexJoq`.
	 */
	id: string;
};

export type GetFormOutput = {
	/**
	 * Unique identifier of the form.
	 */
	id?: string;
	/**
	 * Form name.
	 */
	name?: string;
	/**
	 * ID of the workspace that contains the form.
	 */
	workspaceId?: string;
	/**
	 * Form status. One of `BLANK`, `DRAFT`, or `PUBLISHED`.
	 */
	status?: string;
	/**
	 * Number of submissions received for the form.
	 */
	numberOfSubmissions?: number;
	/**
	 * Whether the form is closed for new submissions.
	 */
	isClosed?: boolean;
	/**
	 * Payment amounts associated with the form.
	 *
	 * Items: A payment amount and currency for the form.
	 */
	payments?: {
		/**
		 * Payment amount.
		 */
		amount?: number;
		/**
		 * Payment currency code.
		 */
		currency?: string;
	}[];
	/**
	 * Date and time when the form was created.
	 */
	createdAt?: string;
	/**
	 * Date and time when the form was last updated.
	 */
	updatedAt?: string;
	/**
	 * Form settings, including close rules, notifications, and appearance.
	 */
	settings?: {
		/**
		 * Form language code.
		 */
		language?: string;
		/**
		 * Whether the form is closed for new submissions.
		 */
		isClosed?: boolean;
		/**
		 * Title shown when the form is closed.
		 */
		closeMessageTitle?: string;
		/**
		 * Description shown when the form is closed.
		 */
		closeMessageDescription?: string;
		/**
		 * Timezone used for the scheduled close date and time.
		 */
		closeTimezone?: string;
		/**
		 * Date when the form is scheduled to close.
		 */
		closeDate?: string;
		/**
		 * Time when the form is scheduled to close.
		 */
		closeTime?: string;
		/**
		 * Maximum number of submissions allowed for the form.
		 */
		submissionsLimit?: number;
		/**
		 * Rich text used as the unique submission key.
		 */
		uniqueSubmissionKey?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Rich text redirect target after the form is submitted.
		 */
		redirectOnCompletion?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Whether the form author receives email notifications for new submissions.
		 */
		hasSelfEmailNotifications?: boolean;
		/**
		 * Rich text recipient list for form-author notification emails.
		 */
		selfEmailTo?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Rich text reply-to address for form-author notification emails.
		 */
		selfEmailReplyTo?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Rich text subject for form-author notification emails.
		 */
		selfEmailSubject?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Rich text from name for form-author notification emails.
		 */
		selfEmailFromName?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Rich text body for form-author notification emails.
		 */
		selfEmailBody?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Whether respondents receive email notifications after submitting the form.
		 */
		hasRespondentEmailNotifications?: boolean;
		/**
		 * Rich text recipient list for respondent notification emails.
		 */
		respondentEmailTo?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Rich text reply-to address for respondent notification emails.
		 */
		respondentEmailReplyTo?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Rich text subject for respondent notification emails.
		 */
		respondentEmailSubject?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Rich text from name for respondent notification emails.
		 */
		respondentEmailFromName?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Rich text body for respondent notification emails.
		 */
		respondentEmailBody?: {
			/**
			 * Rich text HTML. Supports basic formatting and mentions.
			 */
			html?: string;
			/**
			 * Dynamic placeholders that reference other field values.
			 *
			 * Items: A mention that references another field's value.
			 */
			mentions?: {
				/**
				 * Unique identifier for this mention.
				 */
				uuid?: string;
				/**
				 * The field being referenced. Its value replaces the mention placeholder at runtime.
				 */
				field?: {
					/**
					 * Unique identifier of the referenced field. A UUID for regular fields, or a utility identifier such as `utility::today()` when type is `UTILITY`.
					 */
					uuid?: string;
					/**
					 * Category of the referenced field. One of `INPUT_FIELD`, `CALCULATED_FIELD`, `HIDDEN_FIELD`, `UTILITY`, `PLACEHOLDER`, or `METADATA`.
					 */
					type?: string;
					/**
					 * Block type of the referenced field. For example, `INPUT_TEXT`, `INPUT_EMAIL`, or `CALCULATED_FIELDS`.
					 */
					questionType?: string;
					/**
					 * Identifier of the block group containing the referenced field. A UUID for regular fields, or a utility identifier when type is `UTILITY`.
					 */
					blockGroupUuid?: string;
					/**
					 * For calculated fields, whether the result is `NUMBER` or `TEXT`.
					 */
					calculatedFieldType?: string;
					/**
					 * Additional configuration for utility fields. Only present when type is `UTILITY`.
					 */
					payload?: Record<string, JSONValue>;
				};
				/**
				 * Fallback value displayed when the referenced field has no data.
				 */
				defaultValue?: string;
			}[];
		};
		/**
		 * Whether the form shows a progress bar.
		 */
		hasProgressBar?: boolean;
		/**
		 * Whether partial submissions are enabled.
		 */
		hasPartialSubmissions?: boolean;
		/**
		 * Whether the form automatically jumps to the next page.
		 */
		pageAutoJump?: boolean;
		/**
		 * Whether respondents can save the form and continue later.
		 */
		saveForLater?: boolean;
		/**
		 * Custom CSS styles applied to the form.
		 */
		styles?: string;
		/**
		 * Password required to access the form, if one is set.
		 */
		password?: string;
		/**
		 * How long submission data is retained.
		 */
		submissionsDataRetentionDuration?: number;
		/**
		 * Unit for the submissions data retention duration.
		 */
		submissionsDataRetentionUnit?: string;
	};
	/**
	 * Form content blocks, including titles, questions, and layout elements.
	 *
	 * Items: A block in the form. The `payload` structure varies by `type`.
	 */
	blocks?: {
		/**
		 * Unique identifier of the block.
		 */
		uuid?: string;
		/**
		 * Block type. For example, `FORM_TITLE`, `INPUT_TEXT`, or `PAGE_BREAK`.
		 */
		type?: string;
		/**
		 * UUID that groups related blocks. Standalone blocks use their own UUID.
		 */
		groupUuid?: string;
		/**
		 * Block group type.
		 */
		groupType?: string;
		/**
		 * Type-specific block payload. The structure varies by block type. See the Tally blocks reference.
		 */
		payload?: Record<string, JSONValue>;
	}[];
};

/**
 * Get a form
 * Returns a form by its ID, including blocks and settings.
 */
export async function getForm(
	this: EndpointFunctionThis,
	payload: {
		input: GetFormInput;
		connectionId: number;
	},
): Promise<GetFormOutput> {
	const response = await this.endpointCaller<GetFormOutput>(
		{
			appName: 'tally',
			appVersion: 1,
			endpointName: 'getForm',
		},
		payload,
	);
	return response.output;
}
