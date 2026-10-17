// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type GetSignTemplatesInput = {
	/**
	 * The position marker at which to begin returning results, as returned in `next_marker` of the previous page. Leave empty for the first page.
	 */
	marker?: string;
	/**
	 * The maximum number of items to return per page.
	 */
	limit?: number;
};

export type GetSignTemplatesOutput = {
	/**
	 * The limit that was used for these entries. This will be the same as the `limit` query parameter unless that value exceeded the maximum value allowed. The maximum value varies by API.
	 */
	limit?: number;
	/**
	 * The marker for the start of the next page of results.
	 */
	next_marker?: string;
	/**
	 * The marker for the start of the previous page of results.
	 */
	prev_marker?: string;
	/**
	 * A list of templates.
	 */
	entries?: {
		/**
		 * The value will always be `sign-template`. One of `sign-template`.
		 */
		type?: string;
		/**
		 * Template identifier.
		 */
		id?: string;
		/**
		 * The name of the template.
		 */
		name?: string;
		/**
		 * Subject of signature request email. This is cleaned by sign request. If this field is not passed, a default subject will be used.
		 */
		email_subject?: string;
		/**
		 * Message to include in signature request email. The field is cleaned through sanitization of specific characters. However, some html tags are allowed. Links included in the message are also converted to hyperlinks in the email. The message may contain the following html tags including `a`, `abbr`, `acronym`, `b`, `blockquote`, `code`, `em`, `i`, `ul`, `li`, `ol`, and `strong`. Be aware that when the text to html ratio is too high, the email may end up in spam filters. Custom styles on these tags are not allowed. If this field is not passed, a default message will be used.
		 */
		email_message?: string;
		/**
		 * Set the number of days after which the created signature request will automatically expire if not completed. By default, we do not apply any expiration date on signature requests, and the signature request does not expire.
		 */
		days_valid?: number;
		/**
		 * A mini representation of a file version, used when nested under another resource.
		 */
		parent_folder?: {
			/**
			 * The unique identifier that represent a folder. The ID for any folder can be determined by visiting a folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folders/123` the `folder_id` is `123`.
			 */
			id?: string;
			/**
			 * The HTTP `etag` of this folder. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the folder if (no) changes have happened.
			 */
			etag?: string;
			/**
			 * The value will always be `folder`. One of `folder`.
			 */
			type?: string;
			/**
			 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
			 */
			sequence_id?: string;
			/**
			 * The name of the folder.
			 */
			name?: string;
		};
		/**
		 * List of files to create a signing document from. Only the ID and type fields are required for each file.
		 */
		source_files?: {
			/**
			 * The unique identifier that represent a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`.
			 */
			id?: string;
			/**
			 * The HTTP `etag` of this file. This can be used within some API endpoints in the `If-Match` and `If-None-Match` headers to only perform changes on the file if (no) changes have happened.
			 */
			etag?: string;
			/**
			 * The value will always be `file`. One of `file`.
			 */
			type?: string;
			/**
			 * A numeric identifier that represents the most recent user event that has been applied to this item. This can be used in combination with the `GET /events`-endpoint to filter out user events that would have occurred before this identifier was read. An example would be where a Box Drive-like application would fetch an item via the API, and then listen to incoming user events for changes to the item. The application would ignore any user events where the `sequence_id` in the event is smaller than or equal to the `sequence_id` in the originally fetched resource.
			 */
			sequence_id?: string;
			/**
			 * The name of the file.
			 */
			name?: string;
			/**
			 * The SHA1 hash of the file. This can be used to compare the contents of a file on Box with a local file.
			 */
			sha1?: string;
			/**
			 * A mini representation of a file version, used when nested within another resource.
			 */
			file_version?: {
				/**
				 * The unique identifier that represent a file version.
				 */
				id?: string;
				/**
				 * The value will always be `file_version`. One of `file_version`.
				 */
				type?: string;
				/**
				 * The SHA1 hash of this version of the file.
				 */
				sha1?: string;
			};
		}[];
		/**
		 * Indicates if the template input fields are editable or not.
		 */
		are_fields_locked?: boolean;
		/**
		 * Indicates if the template document options are editable or not, for example renaming the document.
		 */
		are_options_locked?: boolean;
		/**
		 * Indicates if the template signers are editable or not.
		 */
		are_recipients_locked?: boolean;
		/**
		 * Indicates if the template email settings are editable or not.
		 */
		are_email_settings_locked?: boolean;
		/**
		 * Indicates if the template files are editable or not. This includes deleting or renaming template files.
		 */
		are_files_locked?: boolean;
		/**
		 * Array of signers for the template. **Note**: It may happen that some signers specified in the template belong to conflicting [segments](https://developer.box.com/reference/resources/shield-information-barrier-segment-member) (user groups). This means that due to the security policies, users are assigned to segments to prevent exchanges or communication that could lead to ethical conflicts. In such a case, an attempt to send a sign request based on a template that lists signers in conflicting segments will result in an error. Read more about [segments and ethical walls](https://support.box.com/hc/en-us/articles/9920431507603-Understanding-Information-Barriers#h_01GFVJEHQA06N7XEZ4GCZ9GFAQ).
		 */
		signers?: {
			/**
			 * The inputs.
			 */
			inputs?: {
				/**
				 * This references the ID of a specific tag contained in a file of the signature request.
				 */
				document_tag_id?: string;
				/**
				 * Text prefill value.
				 */
				text_value?: string;
				/**
				 * Checkbox prefill value.
				 */
				checkbox_value?: boolean;
				/**
				 * Date prefill value.
				 */
				date_value?: string;
				/**
				 * Type of input. One of `signature`, `date`, `text`, `checkbox`, `attachment`, `radio`, `dropdown`.
				 */
				type?: string;
				/**
				 * Content type of input. One of `signature`, `initial`, `stamp`, `date`, `checkbox`, `text`, `full_name`, `first_name`, `last_name`, `company`, `title`, `email`, `attachment`, `radio`, `dropdown`.
				 */
				content_type?: string;
				/**
				 * Whether or not the input is required.
				 */
				is_required?: boolean;
				/**
				 * Index of page that the input is on.
				 */
				page_index?: number;
				/**
				 * Document identifier.
				 */
				document_id?: string;
				/**
				 * When the input is of the type `dropdown` this values will be filled with all the dropdown options.
				 *
				 * Items: The dropdown choice.
				 */
				dropdown_choices?: string[];
				/**
				 * When the input is of type `radio` they can be grouped to gather with this identifier.
				 */
				group_id?: string;
				/**
				 * Where the input is located on a page.
				 */
				coordinates?: {
					/**
					 * Relative x coordinate to the page the input is on, ranging from 0 to 1.
					 */
					x?: number;
					/**
					 * Relative y coordinate to the page the input is on, ranging from 0 to 1.
					 */
					y?: number;
				};
				/**
				 * The size of the input.
				 */
				dimensions?: {
					/**
					 * Relative width to the page the input is on, ranging from 0 to 1.
					 */
					width?: number;
					/**
					 * Relative height to the page the input is on, ranging from 0 to 1.
					 */
					height?: number;
				};
				/**
				 * The label field is used especially for text, attachment, radio, and checkbox type inputs.
				 */
				label?: string;
				/**
				 * Indicates whether this input is read-only (cannot be modified by signers).
				 */
				read_only?: boolean;
				/**
				 * Specifies the formatting rules that signers must follow for text field inputs. If set, this validation is mandatory.
				 */
				validation?: {
					/**
					 * Validates that the text input is an email address. One of `email`.
					 */
					validation_type?: string;
					/**
					 * Regular expression used for validation.
					 */
					custom_regex?: string;
					/**
					 * Error message shown if input fails custom regular expression validation.
					 */
					custom_error_message?: string;
				};
			}[];
			/**
			 * Email address of the signer.
			 */
			email?: string;
			/**
			 * Defines the role of the signer in the signature request. A role of `signer` needs to sign the document, a role `approver` approves the document and a `final_copy_reader` role only receives the final signed document and signing log. One of `signer`, `approver`, `final_copy_reader`.
			 */
			role?: string;
			/**
			 * Used in combination with an embed URL for a sender. After the sender signs, they will be redirected to the next `in_person` signer.
			 */
			is_in_person?: boolean;
			/**
			 * Order of the signer.
			 */
			order?: number;
			/**
			 * If provided, this value points signers that are assigned the same inputs and belongs to same signer group. A signer group is not a Box Group. It is an entity that belongs to the template itself and can only be used within Box Sign requests created from it.
			 */
			signer_group_id?: string;
			/**
			 * A placeholder label for the signer set by the template creator to differentiate between signers.
			 */
			label?: string;
			/**
			 * An identifier for the signer. This can be used to identify a signer within the template.
			 */
			public_id?: string;
			/**
			 * If true for signers with a defined email, the password provided when the template was created is used by default. If true for signers without a specified / defined email, the creator needs to provide a password when using the template.
			 */
			is_password_required?: boolean;
			/**
			 * If true for signers with a defined email, the phone number provided when the template was created is used by default. If true for signers without a specified / defined email, the template creator needs to provide a phone number when creating a request.
			 */
			is_phone_number_required?: boolean;
			/**
			 * If true, the signer is required to login to access the document.
			 */
			login_required?: boolean;
		}[];
		/**
		 * Additional information on which fields are required and which fields are not editable.
		 */
		additional_info?: {
			/**
			 * Non editable fields.
			 *
			 * Items: The non editable. One of `email_subject`, `email_message`, `name`, `days_valid`, `signers`, `source_files`.
			 */
			non_editable?: string[];
			/**
			 * Required fields.
			 */
			required?: {
				/**
				 * Required signer fields.
				 */
				signers?: string[][];
			};
		};
		/**
		 * Box's ready-sign link feature enables you to create a link to a signature request that you've created from a template. Use this link when you want to post a signature request on a public form — such as an email, social media post, or web page — without knowing who the signers will be. Note: The ready-sign link feature is limited to Enterprise Plus customers and not available to Box Verified Enterprises.
		 */
		ready_sign_link?: {
			/**
			 * The URL that can be sent to signers.
			 */
			url?: string;
			/**
			 * Request name.
			 */
			name?: string;
			/**
			 * Extra instructions for all signers.
			 */
			instructions?: string;
			/**
			 * The destination folder to place final, signed document and signing log. Only `ID` and `type` fields are required. The root folder, folder ID `0`, cannot be used.
			 */
			folder_id?: string;
			/**
			 * Whether to disable notifications when a signer has signed.
			 */
			is_notification_disabled?: boolean;
			/**
			 * Whether the ready sign link is enabled or not.
			 */
			is_active?: boolean;
		};
		/**
		 * Custom branding applied to notifications and signature requests.
		 */
		custom_branding?: {
			/**
			 * Name of the company.
			 */
			company_name?: string;
			/**
			 * Custom branding logo URI in the form of a base64 image.
			 */
			logo_uri?: string;
			/**
			 * Custom branding color in hex.
			 */
			branding_color?: string;
			/**
			 * Content of the email footer.
			 */
			email_footer_text?: string;
		};
		/**
		 * The sign flow of sign requests created from the template. Values can include `standard` or `cfr11`.
		 */
		request_flow?: string;
	}[];
};

/**
 * List sign templates
 * Retrieves a page of the Box Sign templates available to the user.
 */
export async function getSignTemplates(
	this: EndpointFunctionThis,
	payload: {
		input: GetSignTemplatesInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<GetSignTemplatesOutput> {
	const response = await this.endpointCaller<GetSignTemplatesOutput>(
		{
			appName: 'box',
			appVersion: 3,
			endpointName: 'getSignTemplates',
		},
		payload,
	);
	return response.output;
}
