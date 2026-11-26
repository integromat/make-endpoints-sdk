// Generated file. Do not edit by hand.
import type { EndpointFunctionThis, EndpointResult } from '../../../shared.ts';

export type GetCommentInput = {
	/**
	 * The ID of the page where the comment was posted. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.
	 */
	page_id: string;
	/**
	 * The ID of the comment.
	 */
	comment_id: string;
	/**
	 * Fields to return. If empty, Facebook returns its default fields for the comment.
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
};

export type GetCommentOutput = {
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
};

/**
 * Get a comment
 * Returns a comment.
 */
export async function getComment(
	this: EndpointFunctionThis,
	payload: {
		input: GetCommentInput;
		connectionId: number;
		confidential?: boolean;
		idempotencyKey?: string;
	},
): Promise<EndpointResult<GetCommentOutput>> {
	const response = await this.endpointCaller<GetCommentOutput>(
		{
			appName: 'facebook-pages',
			appVersion: 6,
			endpointName: 'GetComment',
		},
		payload,
	);
	return response;
}
