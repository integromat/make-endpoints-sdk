// Generated file. Do not edit by hand.
import type { EndpointFunctionThis } from '../../../shared.ts';

export type ListCommentsInput = {
	/**
	 * The ID of the page that owns the object. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the object: a page post (`{page_id}_{post_id}`), a photo, a video, an album, or a comment (to list replies).
	 */
	object_id: string;
	/**
	 * Which comments to return. `toplevel` (default) returns top-level comments; `stream` returns all comments including replies, in chronological order.
	 */
	filter?: '' | 'toplevel' | 'stream';
	/**
	 * Order of the comments.
	 */
	order?: '' | 'chronological' | 'reverse_chronological';
	/**
	 * Return comments created after this time.
	 */
	since?: string;
	/**
	 * Whether to return the `summary` with the total comment count and order.
	 */
	summary?: boolean;
	/**
	 * Fields to return for each comment. If empty, these fields are returned: `id,message,attachment,comment_count,created_time,object,parent,like_count,can_comment,can_remove,can_hide,can_like,from,user_likes`.
	 */
	fields?:
		| ''
		| 'id'
		| 'message'
		| 'created_time'
		| 'from'
		| 'attachment'
		| 'object'
		| 'parent'
		| 'can_comment'
		| 'can_hide'
		| 'can_like'
		| 'can_remove'
		| 'can_reply_privately'
		| 'comment_count'
		| 'like_count'
		| 'is_hidden'
		| 'is_private'
		| 'live_broadcast_timestamp'
		| 'private_reply_conversation'
		| 'user_likes';
	/**
	 * Maximum number of items to return.
	 */
	limit?: number;
	/**
	 * Cursor of the next page, from `paging.cursors.after` of the previous response.
	 */
	after?: string;
	/**
	 * Cursor of the previous page, from `paging.cursors.before` of the previous response.
	 */
	before?: string;
};

export type ListCommentsOutput = {
	/**
	 * List of comments.
	 *
	 * Items: A comment.
	 */
	data?: {
		/**
		 * The comment ID.
		 */
		id?: string;
		/**
		 * The comment text.
		 */
		message?: string;
		/**
		 * The time the comment was created.
		 */
		created_time?: string;
		/**
		 * The person or Page that made the comment.
		 */
		from?: {
			/**
			 * The Page-scoped ID of the person, or the ID of the Page.
			 */
			id?: string;
			/**
			 * The name of the person or Page.
			 */
			name?: string;
		};
		/**
		 * Link, photo, sticker, or animated GIF attached to the comment.
		 */
		attachment?: {
			/**
			 * Description of the attachment.
			 */
			description?: string;
			/**
			 * Media of the attachment.
			 */
			media?: {
				/**
				 * Image of the attachment.
				 */
				image?: {
					/**
					 * Image height in pixels.
					 */
					height?: number;
					/**
					 * URL of the image.
					 */
					src?: string;
					/**
					 * Image width in pixels.
					 */
					width?: number;
				};
			};
			/**
			 * The object the attachment links to.
			 */
			target?: {
				/**
				 * ID of the target object.
				 */
				id?: string;
				/**
				 * URL of the target object.
				 */
				url?: string;
			};
			/**
			 * Type of the attachment, for example `photo`, `animated_image_share`, or `sticker`.
			 */
			type?: string;
			/**
			 * URL of the attachment.
			 */
			url?: string;
			/**
			 * Nested attachments.
			 */
			subattachments?: {
				/**
				 * List of nested attachments.
				 *
				 * Items: A nested attachment.
				 */
				data?: {
					/**
					 * Description of the attachment.
					 */
					description?: string;
					/**
					 * Media of the attachment.
					 */
					media?: {
						/**
						 * Image of the attachment.
						 */
						image?: {
							/**
							 * Image height in pixels.
							 */
							height?: number;
							/**
							 * URL of the image.
							 */
							src?: string;
							/**
							 * Image width in pixels.
							 */
							width?: number;
						};
					};
					/**
					 * The object the attachment links to.
					 */
					target?: {
						/**
						 * ID of the target object.
						 */
						id?: string;
						/**
						 * URL of the target object.
						 */
						url?: string;
					};
					/**
					 * Type of the attachment, for example `photo`, `animated_image_share`, or `sticker`.
					 */
					type?: string;
					/**
					 * URL of the attachment.
					 */
					url?: string;
				}[];
			};
		};
		/**
		 * The object (post, photo, or video) the comment was made on.
		 */
		object?: {
			/**
			 * ID of the object.
			 */
			id?: string;
			/**
			 * Text of the object, when it has one.
			 */
			message?: string;
			/**
			 * The time the object was created.
			 */
			created_time?: string;
		};
		/**
		 * For comment replies, the comment this is a reply to.
		 */
		parent?: {
			/**
			 * ID of the parent comment.
			 */
			id?: string;
			/**
			 * Text of the parent comment.
			 */
			message?: string;
			/**
			 * The time the parent comment was created.
			 */
			created_time?: string;
			/**
			 * The person or Page that made the parent comment.
			 */
			from?: {
				/**
				 * The Page-scoped ID of the person, or the ID of the Page.
				 */
				id?: string;
				/**
				 * The name of the person or Page.
				 */
				name?: string;
			};
		};
		/**
		 * Whether the viewer can reply to this comment.
		 */
		can_comment?: boolean;
		/**
		 * Whether the viewer can hide this comment.
		 */
		can_hide?: boolean;
		/**
		 * Whether the viewer can like this comment.
		 */
		can_like?: boolean;
		/**
		 * Whether the viewer can remove this comment.
		 */
		can_remove?: boolean;
		/**
		 * Whether the Page can send a private reply to this comment.
		 */
		can_reply_privately?: boolean;
		/**
		 * Number of replies to this comment.
		 */
		comment_count?: number;
		/**
		 * Number of times this comment was liked.
		 */
		like_count?: number;
		/**
		 * Whether the comment is hidden.
		 */
		is_hidden?: boolean;
		/**
		 * Whether the comment is a private comment.
		 */
		is_private?: boolean;
		/**
		 * Time the comment was made on a live video, in seconds from the start of the broadcast.
		 */
		live_broadcast_timestamp?: number;
		/**
		 * If a private reply was sent to this comment, the conversation between the Page and the comment author.
		 */
		private_reply_conversation?: {
			/**
			 * ID of the conversation.
			 */
			id?: string;
		};
		/**
		 * Whether the viewer has liked this comment.
		 */
		user_likes?: boolean;
	}[];
	/**
	 * Cursors for paging through results.
	 */
	paging?: {
		/**
		 * Paging cursors.
		 */
		cursors?: {
			/**
			 * Cursor of the start of the page. Pass it as `before` to get the previous page.
			 */
			before?: string;
			/**
			 * Cursor of the end of the page. Pass it as `after` to get the next page.
			 */
			after?: string;
		};
		/**
		 * URL of the next page. Missing on the last page.
		 */
		next?: string;
		/**
		 * URL of the previous page. Missing on the first page.
		 */
		previous?: string;
	};
	/**
	 * Comment metadata. Returned when `summary` is `true`.
	 */
	summary?: {
		/**
		 * Order of the comments: `chronological` or `reverse_chronological`.
		 */
		order?: string;
		/**
		 * Number of comments. With `filter` = `stream` it includes replies. Can be higher than the number of returned comments because of privacy or deletion.
		 */
		total_count?: number;
		/**
		 * Whether the caller can comment on the object.
		 */
		can_comment?: boolean;
	};
};

/**
 * List comments
 * Lists the comments on a Facebook page post, photo, video, album, or the replies to a comment.
 */
export async function listComments(
	this: EndpointFunctionThis,
	payload: {
		input: ListCommentsInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<ListCommentsOutput> {
	const response = await this.endpointCaller<ListCommentsOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'ListComments',
		},
		payload,
	);
	return response.output;
}
