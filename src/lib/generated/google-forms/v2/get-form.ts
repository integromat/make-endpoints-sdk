// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type GetFormInput = {
	/**
	 * The ID of the form to retrieve.
	 */
	formId: string;
};

export type GetFormOutput = {
	/**
	 * The form ID.
	 */
	formId?: string;
	/**
	 * The general information for the form.
	 */
	info?: {
		/**
		 * The title of the document which is visible in Google Drive.
		 */
		documentTitle?: string;
		/**
		 * The description of the form.
		 */
		description?: string;
	};
	/**
	 * The form's settings.
	 */
	settings?: {
		/**
		 * Settings related to quiz forms and grading.
		 */
		quizSettings?: {
			/**
			 * Whether this form is a quiz. When `true`, responses are graded based on question grading.
			 */
			isQuiz?: boolean;
		};
		/**
		 * The setting that determines whether the form collects email addresses from respondents. One of: `DO_NOT_COLLECT`, `VERIFIED`, `RESPONDER_INPUT`.
		 */
		emailCollectionType?: string;
	};
	/**
	 * A list of the form's items, which can include section headers, questions, embedded media, etc.
	 *
	 * Items: A single item of the form.
	 */
	items?: {
		/**
		 * The item ID.
		 */
		itemId?: string;
		/**
		 * The description of the item.
		 */
		description?: string;
		/**
		 * A form item containing a single question.
		 */
		questionItem?: {
			/**
			 * The displayed question.
			 */
			question?: {
				/**
				 * The question ID.
				 */
				questionId?: string;
				/**
				 * Whether the question must be answered in order for a respondent to submit their response.
				 */
				required?: boolean;
				/**
				 * Grading setup for the question.
				 */
				grading?: {
					/**
					 * The maximum number of points a respondent can automatically get for a correct answer.
					 */
					pointValue?: number;
					/**
					 * The answer key for the question.
					 */
					correctAnswers?: {
						/**
						 * A list of correct answers.
						 *
						 * Items: A single correct answer.
						 */
						answers?: {
							/**
							 * The correct answer value.
							 */
							value?: string;
						}[];
					};
					/**
					 * The feedback displayed for all answers.
					 */
					generalFeedback?: {
						/**
						 * The feedback text.
						 */
						text?: string;
						/**
						 * A list of extra material attached to the feedback.
						 *
						 * Items: A single piece of extra material.
						 */
						material?: {
							/**
							 * A link extra material.
							 */
							link?: {
								/**
								 * The URI.
								 */
								uri?: string;
								/**
								 * The display text for the link.
								 */
								displayText?: string;
							};
							/**
							 * A video extra material.
							 */
							video?: {
								/**
								 * The display text for the video.
								 */
								displayText?: string;
								/**
								 * The YouTube URI.
								 */
								youtubeUri?: string;
							};
						}[];
					};
					/**
					 * The feedback displayed for correct responses.
					 */
					whenRight?: {
						/**
						 * The feedback text.
						 */
						text?: string;
						/**
						 * A list of extra material attached to the feedback.
						 *
						 * Items: A single piece of extra material.
						 */
						material?: {
							/**
							 * A link extra material.
							 */
							link?: {
								/**
								 * The URI.
								 */
								uri?: string;
								/**
								 * The display text for the link.
								 */
								displayText?: string;
							};
							/**
							 * A video extra material.
							 */
							video?: {
								/**
								 * The display text for the video.
								 */
								displayText?: string;
								/**
								 * The YouTube URI.
								 */
								youtubeUri?: string;
							};
						}[];
					};
					/**
					 * The feedback displayed for incorrect responses.
					 */
					whenWrong?: {
						/**
						 * The feedback text.
						 */
						text?: string;
						/**
						 * A list of extra material attached to the feedback.
						 *
						 * Items: A single piece of extra material.
						 */
						material?: {
							/**
							 * A link extra material.
							 */
							link?: {
								/**
								 * The URI.
								 */
								uri?: string;
								/**
								 * The display text for the link.
								 */
								displayText?: string;
							};
							/**
							 * A video extra material.
							 */
							video?: {
								/**
								 * The display text for the video.
								 */
								displayText?: string;
								/**
								 * The YouTube URI.
								 */
								youtubeUri?: string;
							};
						}[];
					};
				};
				/**
				 * A radio/checkbox/dropdown question.
				 */
				choiceQuestion?: {
					/**
					 * The type of choice question. One of: `RADIO`, `CHECKBOX`, `DROP_DOWN`.
					 */
					type?: string;
					/**
					 * List of options that a respondent must choose from.
					 *
					 * Items: An option for a choice question.
					 */
					options?: {
						/**
						 * The choice as presented to the user.
						 */
						value?: string;
						/**
						 * Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types.
						 */
						isOther?: boolean;
						/**
						 * Section navigation type. One of: `NEXT_SECTION`, `RESTART_FORM`, `SUBMIT_FORM`.
						 */
						goToAction?: string;
						/**
						 * Item ID of section header to go to.
						 */
						goToSectionId?: string;
						/**
						 * Display image as an option.
						 */
						image?: {
							/**
							 * A URI from which you can download the image; valid only for a limited time.
							 */
							contentUri?: string;
							/**
							 * A description of the image that is shown on hover and read by screenreaders.
							 */
							altText?: string;
							/**
							 * Properties of the image.
							 */
							properties?: {
								/**
								 * Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.
								 */
								alignment?: string;
								/**
								 * The width of the media in pixels (0–740).
								 */
								width?: number;
							};
						};
					}[];
					/**
					 * Whether the options should be displayed in random order.
					 */
					shuffle?: boolean;
				};
				/**
				 * A free text response question.
				 */
				textQuestion?: {
					/**
					 * Whether the question is a paragraph question. If not, it is a short text question.
					 */
					paragraph?: boolean;
				};
				/**
				 * A scale question where the user picks a number from a range.
				 */
				scaleQuestion?: {
					/**
					 * The lowest possible value for the scale.
					 */
					low?: number;
					/**
					 * The highest possible value for the scale.
					 */
					high?: number;
					/**
					 * The label to display describing the lowest point on the scale.
					 */
					lowLabel?: string;
					/**
					 * The label to display describing the highest point on the scale.
					 */
					highLabel?: string;
				};
				/**
				 * A date question. Date questions default to just month + day.
				 */
				dateQuestion?: {
					/**
					 * Whether to include the time as part of the question.
					 */
					includeTime?: boolean;
					/**
					 * Whether to include the year as part of the question.
					 */
					includeYear?: boolean;
				};
				/**
				 * A time question.
				 */
				timeQuestion?: {
					/**
					 * `true` if the question is about an elapsed time. Otherwise it is about a time of day.
					 */
					duration?: boolean;
				};
				/**
				 * A file upload question.
				 */
				fileUploadQuestion?: {
					/**
					 * The ID of the Drive folder where uploaded files are stored.
					 */
					folderId?: string;
					/**
					 * File types accepted by this question. Values: `ANY`, `DOCUMENT`, `PRESENTATION`, `SPREADSHEET`, `DRAWING`, `PDF`, `IMAGE`, `VIDEO`, `AUDIO`.
					 *
					 * Items: A file type.
					 */
					types?: string[];
					/**
					 * Maximum number of files that can be uploaded for this question in a single response.
					 */
					maxFiles?: number;
					/**
					 * Maximum number of bytes allowed for any single file uploaded to this question.
					 */
					maxFileSize?: string;
				};
				/**
				 * A question that is part of a question group.
				 */
				rowQuestion?: Record<string, JSONValue>;
				/**
				 * A rating question with icons.
				 */
				ratingQuestion?: {
					/**
					 * The rating scale level of the rating question.
					 */
					ratingScaleLevel?: number;
					/**
					 * The icon type to use for the rating. One of: `STAR`, `HEART`, `THUMB_UP`.
					 */
					iconType?: string;
				};
			};
			/**
			 * The image displayed within the question.
			 */
			image?: {
				/**
				 * A URI from which you can download the image; valid only for a limited time.
				 */
				contentUri?: string;
				/**
				 * A description of the image that is shown on hover and read by screenreaders.
				 */
				altText?: string;
				/**
				 * Properties of the image.
				 */
				properties?: {
					/**
					 * Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.
					 */
					alignment?: string;
					/**
					 * The width of the media in pixels (0–740).
					 */
					width?: number;
				};
			};
		};
		/**
		 * Poses one or more questions to the user with a single major prompt.
		 */
		questionGroupItem?: {
			/**
			 * A list of questions that belong in this question group.
			 *
			 * Items: A question in the group.
			 */
			questions?: {
				/**
				 * The question ID.
				 */
				questionId?: string;
				/**
				 * Whether the question must be answered.
				 */
				required?: boolean;
				/**
				 * A row of a QuestionGroupItem.
				 */
				rowQuestion?: Record<string, JSONValue>;
			}[];
			/**
			 * The image displayed within the question group above the specific questions.
			 */
			image?: {
				/**
				 * A URI from which you can download the image; valid only for a limited time.
				 */
				contentUri?: string;
				/**
				 * A description of the image.
				 */
				altText?: string;
				/**
				 * Properties of the image.
				 */
				properties?: {
					/**
					 * Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.
					 */
					alignment?: string;
					/**
					 * The width of the media in pixels (0–740).
					 */
					width?: number;
				};
			};
			/**
			 * A grid with rows of multiple choice questions that share the same options.
			 */
			grid?: {
				/**
				 * The choices shared by each question in the grid.
				 */
				columns?: {
					/**
					 * The type of choice question. One of: `RADIO`, `CHECKBOX`.
					 */
					type?: string;
					/**
					 * List of options.
					 *
					 * Items: An option for a choice question.
					 */
					options?: {
						/**
						 * The choice as presented to the user.
						 */
						value?: string;
					}[];
				};
				/**
				 * If `true`, the questions are randomly ordered.
				 */
				shuffleQuestions?: boolean;
			};
		};
		/**
		 * Starts a new page with a title.
		 */
		pageBreakItem?: Record<string, JSONValue>;
		/**
		 * Displays a title and description on the page.
		 */
		textItem?: Record<string, JSONValue>;
		/**
		 * Displays an image on the page.
		 */
		imageItem?: {
			/**
			 * The image displayed in the item.
			 */
			image?: {
				/**
				 * A URI from which you can download the image; valid only for a limited time.
				 */
				contentUri?: string;
				/**
				 * A description of the image.
				 */
				altText?: string;
				/**
				 * Properties of the image.
				 */
				properties?: {
					/**
					 * Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.
					 */
					alignment?: string;
					/**
					 * The width of the media in pixels (0–740).
					 */
					width?: number;
				};
			};
		};
		/**
		 * Displays a video on the page.
		 */
		videoItem?: {
			/**
			 * The video displayed in the item.
			 */
			video?: {
				/**
				 * A YouTube URI.
				 */
				youtubeUri?: string;
				/**
				 * Properties of the video.
				 */
				properties?: {
					/**
					 * Position of the media. One of: `LEFT`, `RIGHT`, `CENTER`.
					 */
					alignment?: string;
					/**
					 * The width of the media in pixels (0–740).
					 */
					width?: number;
				};
			};
			/**
			 * The text displayed below the video.
			 */
			caption?: string;
		};
	}[];
	/**
	 * The revision ID of the form.
	 */
	revisionId?: string;
	/**
	 * The form URI to share with responders.
	 */
	responderUri?: string;
	/**
	 * The ID of the linked Google Sheet which is accumulating responses from this form.
	 */
	linkedSheetId?: string;
	/**
	 * The publishing settings for the form.
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
 * Get a form
 * Gets a form.
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
			appName: 'google-forms',
			appVersion: 2,
			endpointName: 'getForm',
		},
		payload,
	);
	return response.output;
}
