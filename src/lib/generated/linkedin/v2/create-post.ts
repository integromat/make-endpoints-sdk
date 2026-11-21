// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, JSONValue } from '../../../shared.ts';

export type CreatePostInput = {
	/**
	 * The author of the post. A person URN (`urn:li:person:{id}`) to post as a member, or an organization URN (`urn:li:organization:{id}`) to post as a company page.
	 */
	author: string;
	/**
	 * The text of the post in [little Text Format](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/little-text-format). Use `@[Name](urn)` to mention a person or an organization and `{hashtag|\#|tag}` for a hashtag. The reserved characters `| { } @ [ ] ( ) < > # \ * _ ~` must be escaped with a backslash to be treated as plain text. Unescaped `(`, `)` or `|` silently cut the text: LinkedIn creates the post without an error, but only the text before the first such character is saved. For example, send `Q4 \(final\) results`, not `Q4 (final) results`.
	 */
	commentary: string;
	/**
	 * Who can see the post. `CONNECTIONS` is the first-degree network of the author and is rejected with `400` when **Author** is an organization (use `PUBLIC` with `MAIN_FEED`, or `LOGGED_IN`). `CONTAINER` delegates visibility to the **Container** entity.
	 */
	visibility: 'PUBLIC' | 'CONNECTIONS' | 'LOGGED_IN' | 'CONTAINER';
	/**
	 * Distribution of the post within LinkedIn and externally.
	 */
	distribution: {
		/**
		 * Where the post is distributed within LinkedIn. `MAIN_FEED` distributes to the main feed (and the container feed, if applicable). `NONE` does not distribute the post to any feed. `MAIN_FEED` is required when **Visibility** is `PUBLIC`: for an organization author, `PUBLIC` with `NONE` is treated as a dark post and fails with a `400` about `/adContext/dscAdAccount`.
		 */
		feedDistribution: 'MAIN_FEED' | 'NONE';
		/**
		 * The intended audience of the post. The distribution is an OR of the targets. LinkedIn accepts a single item in this array. The audience must be larger than 300 members.
		 *
		 * Items: A set of targeting facets. Each facet is a list of URNs.
		 */
		targetEntities?: {
			/**
			 * Standardized degrees to target.
			 *
			 * Items: A degree URN.
			 */
			degrees?: string[];
			/**
			 * Standardized fields of study to target.
			 *
			 * Items: A field of study URN.
			 */
			fieldsOfStudy?: string[];
			/**
			 * Industries to target.
			 *
			 * Items: An industry URN, for example `urn:li:industry:4`.
			 */
			industries?: string[];
			/**
			 * Interface locales to target.
			 *
			 * Items: An interface locale.
			 */
			interfaceLocales?: string[];
			/**
			 * Job functions to target.
			 *
			 * Items: A job function URN, for example `urn:li:function:13`.
			 */
			jobFunctions?: string[];
			/**
			 * Geographic locations to target.
			 *
			 * Items: A geo URN, for example `urn:li:geo:103644278`.
			 */
			geoLocations?: string[];
			/**
			 * School organizations to target.
			 *
			 * Items: An organization URN.
			 */
			organizations?: string[];
			/**
			 * Seniority levels to target.
			 *
			 * Items: A seniority URN, for example `urn:li:seniority:3`.
			 */
			seniorities?: string[];
			/**
			 * Organization sizes to target.
			 */
			staffCountRanges?:
				| ''
				| 'SIZE_1'
				| 'SIZE_2_TO_10'
				| 'SIZE_11_TO_50'
				| 'SIZE_51_TO_200'
				| 'SIZE_201_TO_500'
				| 'SIZE_501_TO_1000'
				| 'SIZE_1001_TO_5000'
				| 'SIZE_5001_TO_10000'
				| 'SIZE_10001_OR_MORE';
		}[];
		/**
		 * External channels the post is distributed to. Leave empty to not distribute the post externally.
		 *
		 * Items: An external distribution channel.
		 */
		thirdPartyDistributionChannels?: Record<string, JSONValue>[];
	};
	/**
	 * The content of the post. Provide only one of **Media**, **Article**, **Poll**, **Multi image** or **Reference**. Omit the whole collection for a text-only post.
	 */
	content?: {
		/**
		 * A single image, video or document. Upload the asset first and use its URN. **ID** is required when **Media** is provided.
		 */
		media?: {
			/**
			 * The URN of the media asset, for example `urn:li:image:C4D22AQFttWMAaIqHaa`, `urn:li:video:C5F10AQGKQg_6y2a4sQ` or `urn:li:document:C4D1FAQFg8MuXNoKq3Q`.
			 */
			id?: string;
			/**
			 * The alternative text of the media, used for accessibility.
			 */
			altText?: string;
		};
		/**
		 * A link to an article. LinkedIn does not scrape the URL, so the title, description and thumbnail must be provided. **Source** and **Title** are required when **Article** is provided.
		 */
		article?: {
			/**
			 * The URL of the article.
			 */
			source?: string;
			/**
			 * The description of the article. Maximum 4086 characters.
			 */
			description?: string;
			/**
			 * The URN of the thumbnail image, for example `urn:li:image:C49klciosC89`. Upload the image first.
			 */
			thumbnail?: string;
			/**
			 * The alternative text of the thumbnail. Maximum 4086 characters.
			 */
			thumbnailAltText?: string;
		};
		/**
		 * A poll. Only non-sponsored polls can be created. **Question**, **Options** and **Settings** are required when **Poll** is provided.
		 */
		poll?: {
			/**
			 * The question of the poll. Maximum 140 characters.
			 */
			question?: string;
			/**
			 * The poll options. A poll has between 2 and 4 options.
			 *
			 * Items: A poll option.
			 */
			options?: {
				/**
				 * The text of the option. Maximum 30 characters.
				 */
				text?: string;
			}[];
			/**
			 * The settings of the poll.
			 */
			settings?: {
				/**
				 * How long the poll is open for votes.
				 */
				duration?: '' | 'ONE_DAY' | 'THREE_DAYS' | 'SEVEN_DAYS' | 'FOURTEEN_DAYS';
				/**
				 * The vote selection type. LinkedIn currently supports `SINGLE_VOTE` only. Defaults to `SINGLE_VOTE`.
				 */
				voteSelectionType?: '' | 'SINGLE_VOTE';
				/**
				 * Whether the author can see who voted. Defaults to `true`. LinkedIn does not support `false`.
				 */
				isVoterVisibleToAuthor?: boolean;
			};
		};
		/**
		 * A post with multiple images. Only non-sponsored posts can be created. **Images** is required when **Multi image** is provided.
		 */
		multiImage?: {
			/**
			 * The images of the post. A multi image post has between 2 and 20 images.
			 *
			 * Items: An uploaded image.
			 */
			images?: {
				/**
				 * The URN of the image, for example `urn:li:image:C4D22AQFttWMAaIqHaa`. Upload the image first.
				 */
				id?: string;
				/**
				 * The alternative text of the image, used for accessibility.
				 */
				altText?: string;
			}[];
			/**
			 * The alternative text of the content. Maximum 4086 characters.
			 */
			altText?: string;
		};
		/**
		 * A reference to an existing LinkedIn entity, used to post an event. **ID** is required when **Reference** is provided.
		 */
		reference?: {
			/**
			 * The URN of the referenced entity. `urn:li:event:{id}` for an external or in-person event, `urn:li:liveVideo:{id}` for a live video event (the `type.online.format.liveVideo.liveVideo` value of the event).
			 */
			id?: string;
		};
	};
	/**
	 * Set it to reshare an existing post.
	 */
	reshareContext?: {
		/**
		 * The URN of the post to reshare, for example `urn:li:share:6957408550713184256`.
		 */
		parent?: string;
	};
	/**
	 * The URN of the container entity that contains the post. Leave empty if the post does not belong to a container.
	 */
	container?: string;
	/**
	 * The web page that opens when a member clicks the content of the post.
	 */
	contentLandingPage?: string;
	/**
	 * The label of the call to action button associated with the content. `BUY_NOW` and `SHOP_NOW` require API version 202504 or later.
	 */
	contentCallToActionLabel?:
		| ''
		| 'APPLY'
		| 'DOWNLOAD'
		| 'VIEW_QUOTE'
		| 'LEARN_MORE'
		| 'SIGN_UP'
		| 'SUBSCRIBE'
		| 'REGISTER'
		| 'JOIN'
		| 'ATTEND'
		| 'REQUEST_DEMO'
		| 'SEE_MORE'
		| 'BUY_NOW'
		| 'SHOP_NOW';
	/**
	 * Whether resharing of the post is disabled. If `true`, the post cannot be reshared in any context. Defaults to `false`.
	 */
	isReshareDisabledByAuthor?: boolean;
};

export type CreatePostOutput = {
	/**
	 * The URN of the created post, for example `urn:li:share:6844785523593134080` or `urn:li:ugcPost:6844785523593124`. LinkedIn returns it in the `x-restli-id` response header.
	 */
	id?: string;
};

/**
 * Create a post
 * Creates a post on LinkedIn as a member or as a company page.
 */
export async function createPost(
	this: EndpointFunctionThis,
	payload: {
		input: CreatePostInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<CreatePostOutput> {
	const response = await this.endpointCaller<CreatePostOutput>(
		{
			appName: 'linkedin',
			appVersion: 2,
			endpointName: 'createPost',
		},
		payload,
	);
	return response.output;
}
