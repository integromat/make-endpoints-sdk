// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult, JSONValue } from '../../../shared.ts';

export type ListPostsInput = {
	/**
	 * The URN of the author whose posts are listed. An organization URN (`urn:li:organization:{id}`) for a company page.
	 */
	author: string;
	/**
	 * The context in which the posts are viewed. `READER` returns the published versions visible to a general audience, `AUTHOR` returns the latest versions as seen by the author. LinkedIn defaults to `READER`.
	 */
	viewContext?: '' | 'READER' | 'AUTHOR';
	/**
	 * The sort order of the results, in descending order. LinkedIn defaults to `LAST_MODIFIED`.
	 */
	sortBy?: '' | 'LAST_MODIFIED' | 'CREATED';
	/**
	 * The number of posts per page. The default is 10 and the maximum is 100. A page can contain fewer posts than requested even when more posts are available.
	 */
	count?: number;
	/**
	 * The index of the first post of the page. The default is 0.
	 */
	start?: number;
};

export type ListPostsOutput = {
	/**
	 * The posts of the page.
	 *
	 * Items: A LinkedIn post.
	 */
	elements?: {
		/**
		 * The URN of the post, for example `urn:li:share:6844785523593134080` or `urn:li:ugcPost:6856810298419044352`.
		 */
		id?: string;
		/**
		 * The URN of the author of the post. A person or an organization URN.
		 */
		author?: string;
		/**
		 * The text of the post in little Text Format. Mentions and hashtags are returned in that format.
		 */
		commentary?: string;
		/**
		 * Who can see the post: `PUBLIC`, `CONNECTIONS`, `LOGGED_IN` or `CONTAINER`.
		 */
		visibility?: string;
		/**
		 * The state of the post: `DRAFT`, `PUBLISHED`, `PUBLISH_REQUESTED` or `PUBLISH_FAILED`.
		 */
		lifecycleState?: string;
		/**
		 * Additional information about the lifecycle state.
		 */
		lifecycleStateInfo?: {
			/**
			 * Whether the author edited the post after publishing.
			 */
			isEditedByAuthor?: boolean;
			/**
			 * The processing status of the content: `PENDING`, `PROCESSING` or `FAILED`. Empty once the content is processed.
			 */
			contentStatus?: string;
			/**
			 * The review status of the post: `PENDING`, `PROCESSING` or `FAILED`. Empty once the review is complete.
			 */
			reviewStatus?: string;
		};
		/**
		 * Distribution of the post within LinkedIn and externally.
		 */
		distribution?: {
			/**
			 * Where the post is distributed within LinkedIn: `MAIN_FEED` or `NONE`.
			 */
			feedDistribution?: string;
			/**
			 * The intended audience of the post.
			 *
			 * Items: A set of targeting facets. Each facet is a list of URNs.
			 */
			targetEntities?: {
				/**
				 * Standardized degrees targeted.
				 *
				 * Items: A degree URN.
				 */
				degrees?: string[];
				/**
				 * Standardized fields of study targeted.
				 *
				 * Items: A field of study URN.
				 */
				fieldsOfStudy?: string[];
				/**
				 * Industries targeted.
				 *
				 * Items: An industry URN.
				 */
				industries?: string[];
				/**
				 * Interface locales targeted.
				 *
				 * Items: An interface locale.
				 */
				interfaceLocales?: string[];
				/**
				 * Job functions targeted.
				 *
				 * Items: A job function URN.
				 */
				jobFunctions?: string[];
				/**
				 * Geographic locations targeted.
				 *
				 * Items: A geo URN.
				 */
				geoLocations?: string[];
				/**
				 * School organizations targeted.
				 *
				 * Items: An organization URN.
				 */
				organizations?: string[];
				/**
				 * Seniority levels targeted.
				 *
				 * Items: A seniority URN.
				 */
				seniorities?: string[];
				/**
				 * Organization sizes targeted.
				 *
				 * Items: A staff count range, for example `SIZE_11_TO_50`.
				 */
				staffCountRanges?: string[];
			}[];
			/**
			 * External channels the post is distributed to. Empty when the post is not distributed externally.
			 *
			 * Items: An external distribution channel.
			 */
			thirdPartyDistributionChannels?: Record<string, JSONValue>[];
		};
		/**
		 * The content of the post. Empty for a text-only post.
		 */
		content?: {
			/**
			 * A single image, video or document.
			 */
			media?: {
				/**
				 * The URN of the media asset.
				 */
				id?: string;
				/**
				 * The alternative text of the media.
				 */
				altText?: string;
				/**
				 * The entities tagged in the media.
				 */
				taggedEntities?: Record<string, JSONValue>;
			};
			/**
			 * A link to an article.
			 */
			article?: {
				/**
				 * The URL of the article.
				 */
				source?: string;
				/**
				 * The description of the article.
				 */
				description?: string;
				/**
				 * The URN of the thumbnail image.
				 */
				thumbnail?: string;
				/**
				 * The alternative text of the thumbnail.
				 */
				thumbnailAltText?: string;
			};
			/**
			 * A poll.
			 */
			poll?: {
				/**
				 * The question of the poll.
				 */
				question?: string;
				/**
				 * The poll options.
				 *
				 * Items: A poll option.
				 */
				options?: {
					/**
					 * The text of the option.
					 */
					text?: string;
					/**
					 * Whether the viewer voted for this option.
					 */
					isVotedByViewer?: boolean;
					/**
					 * The number of votes of the option. Missing when the viewer is not allowed to see it yet.
					 */
					voteCount?: number;
				}[];
				/**
				 * The settings of the poll.
				 */
				settings?: {
					/**
					 * The vote selection type, for example `SINGLE_VOTE`.
					 */
					voteSelectionType?: string;
					/**
					 * How long the poll is open: `ONE_DAY`, `THREE_DAYS`, `SEVEN_DAYS` or `FOURTEEN_DAYS`.
					 */
					duration?: string;
					/**
					 * Whether the author can see who voted.
					 */
					isVoterVisibleToAuthor?: boolean;
				};
				/**
				 * The number of unique voters.
				 */
				uniqueVotersCount?: number;
			};
			/**
			 * A post with multiple images.
			 */
			multiImage?: {
				/**
				 * The images of the post.
				 *
				 * Items: An image of the post.
				 */
				images?: {
					/**
					 * The URN of the image.
					 */
					id?: string;
					/**
					 * The alternative text of the image.
					 */
					altText?: string;
					/**
					 * The entities tagged in the media.
					 */
					taggedEntities?: Record<string, JSONValue>;
				}[];
				/**
				 * The alternative text of the content.
				 */
				altText?: string;
			};
			/**
			 * A carousel. Only sponsored posts have it.
			 */
			carousel?: {
				/**
				 * The cards of the carousel.
				 *
				 * Items: A card of the carousel.
				 */
				cards?: {
					/**
					 * The URL that opens when the card is clicked.
					 */
					landingPage?: string;
					/**
					 * The media of the card.
					 */
					media?: {
						/**
						 * The URN of the media asset.
						 */
						id?: string;
						/**
						 * The entities tagged in the media.
						 */
						taggedEntities?: Record<string, JSONValue>;
					};
				}[];
			};
			/**
			 * A reference to another entity, for example an event.
			 */
			reference?: {
				/**
				 * The URN of the referenced entity.
				 */
				id?: string;
			};
			/**
			 * The celebration content. A celebration post cannot be created through the API.
			 */
			celebration?: Record<string, JSONValue>;
		};
		/**
		 * The web page that opens when a member clicks the content of the post.
		 */
		contentLandingPage?: string;
		/**
		 * The label of the call to action button associated with the content.
		 */
		contentCallToActionLabel?: string;
		/**
		 * The context of a reshare. Empty when the post is not a reshare.
		 */
		reshareContext?: {
			/**
			 * The URN of the post that was reshared.
			 */
			parent?: string;
			/**
			 * The URN of the greatest ancestor of the post. It can be the parent.
			 */
			root?: string;
		};
		/**
		 * The URN of the container entity that contains the post.
		 */
		container?: string;
		/**
		 * Advertising metadata of the post. Empty when the post has none.
		 */
		adContext?: {
			/**
			 * The URN of the ad account that created the direct sponsored content.
			 */
			dscAdAccount?: string;
			/**
			 * The type of the direct sponsored content, for example `VIDEO` or `STANDARD`.
			 */
			dscAdType?: string;
			/**
			 * The name of the direct sponsored content.
			 */
			dscName?: string;
			/**
			 * The status of the direct sponsored content: `ACTIVE` or `ARCHIVED`.
			 */
			dscStatus?: string;
			/**
			 * Whether the post is direct sponsored content.
			 */
			isDsc?: boolean;
		};
		/**
		 * Whether the author disabled resharing of the post.
		 */
		isReshareDisabledByAuthor?: boolean;
		/**
		 * The time the post was created, in milliseconds since epoch.
		 */
		createdAt?: number;
		/**
		 * The time the post was last modified, in milliseconds since epoch.
		 */
		lastModifiedAt?: number;
		/**
		 * The time the post was published, in milliseconds since epoch.
		 */
		publishedAt?: number;
	}[];
	/**
	 * Pagination information of the response.
	 */
	paging?: {
		/**
		 * The number of items requested per page.
		 */
		count?: number;
		/**
		 * The index of the first item in this page.
		 */
		start?: number;
		/**
		 * The total number of items, when LinkedIn returns it.
		 */
		total?: number;
		/**
		 * Links to adjacent pages. Use the `next` link information to request the following page.
		 *
		 * Items: A link to an adjacent page.
		 */
		links?: {
			/**
			 * The media type of the linked resource.
			 */
			type?: string;
			/**
			 * The relation of the link to the current page, for example `next` or `prev`.
			 */
			rel?: string;
			/**
			 * The relative URL of the linked page.
			 */
			href?: string;
		}[];
	};
};

/**
 * List posts
 * Lists the posts of a LinkedIn company page.
 */
export async function listPosts(
	this: EndpointFunctionThis,
	payload: {
		input: ListPostsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<ListPostsOutput>> {
	const response = await this.endpointCaller<ListPostsOutput>(
		{
			appName: 'linkedin',
			appVersion: 2,
			endpointName: 'listPosts',
		},
		payload,
	);
	return response;
}
