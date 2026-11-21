// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'CreateComment',
		label: 'Create a comment',
		description: 'Creates a comment on a page post, photo, video, or comment as the page.',
		context:
			"---\nname: CreateComment\ndescription: Creates a comment on a Page post, photo, video, or comment as the Page.\n---\n\nCreates a comment as the Page. To reply to a comment, use the comment ID as `object_id`.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- At least one of `message`, `attachment_id`, `attachment_url`, or `attachment_share_url` must be provided.\n- Comments cannot be created on posts of an unpublished Page.\n- Photo upload as file content is not supported; use `attachment_url` or `attachment_id` instead.\n\nAPI reference: [Object comments](https://developers.facebook.com/docs/graph-api/reference/object/comments/)\n",
		accounts: {
			facebook: {
				scope: ['pages_manage_engagement', 'pages_read_engagement', 'business_management'],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page to comment as. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				object_id: {
					type: 'string',
					description:
						'The ID of the object to comment on: a page post (`{page_id}_{post_id}`), a photo, a video, or a comment (to reply to it).',
				},
				message: {
					type: 'string',
					description:
						'The comment text. Supports emoji. To mention a person or page, use `@[id]`.',
				},
				attachment_id: {
					type: 'string',
					description: 'ID of an unpublished photo to attach to the comment.',
				},
				attachment_url: {
					type: 'string',
					description: 'URL of an image to attach to the comment.',
				},
				attachment_share_url: {
					type: 'string',
					description:
						'URL of an animated GIF to attach to the comment. The URL is not included in the message.',
				},
			},
			required: ['page_id', 'object_id'],
		},
		outputSchema: {
			type: 'object',
			properties: { id: { type: 'string', description: 'The ID of the new comment.' } },
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'CreatePost',
		label: 'Create a post',
		description:
			'Publishes a post to a Facebook page feed, optionally with a link or attached photos.',
		context:
			"---\nname: CreatePost\ndescription: Publishes a post to a Facebook page feed, optionally with a link or attached photos.\n---\n\nPublishes a post to a Facebook page feed: text, a link, a carousel of links, or photos.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Post with photos\n\n1. Upload each photo with `UploadPhoto` and `published` set to `false`. For a scheduled post, also set `temporary` to `true`.\n2. Call this endpoint with the returned photo `id` values in `attached_media`.\n3. For a scheduled post, also send `published` = `false`, `scheduled_publish_time`, and `unpublished_content_type` = `SCHEDULED`.\n\nUnpublished photos that are not attached to a post are deleted after about 24 hours.\n\n## Notes\n\n- Either `message` or `link` is required.\n- The person who granted the token must be able to perform the CREATE_CONTENT task on the page.\n- `tags` can only be used together with `place`.\n- `name`, `description`, and `picture` override the link preview and are used only with `link`.\n- The vendor's `thumbnail` file parameter is not supported, because endpoints can't upload files.\n\nAPI reference: [Page Feed – Publishing](https://developers.facebook.com/docs/graph-api/reference/page/feed/#publish)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page to post to. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				message: {
					type: 'string',
					description:
						'The text of the post. Supports emoji and page mentions in the `@[page-id]` format. Either `message` or `link` is required.',
				},
				link: {
					type: 'string',
					description:
						'URL of a link to attach to the post. Either `message` or `link` is required.',
				},
				name: {
					type: 'string',
					description: 'Overrides the title of the link preview. Used only with `link`.',
				},
				description: {
					type: 'string',
					description:
						'Overrides the description of the link preview. Used only with `link`.',
				},
				picture: {
					type: 'string',
					description: 'URL of the preview image of the link. Used only with `link`.',
				},
				attached_media: {
					type: 'array',
					description:
						'Photos to attach to the post. Upload each photo with `UploadPhoto` and `published` set to `false` first.',
					items: {
						type: 'object',
						description: 'An attached photo.',
						properties: {
							media_fbid: {
								type: 'string',
								description: 'The ID of an unpublished photo uploaded to the page.',
							},
						},
						required: ['media_fbid'],
					},
				},
				child_attachments: {
					type: 'array',
					description:
						'Links of a carousel (multi-link) post. 2 to 5 items, or up to 10 when `multi_share_optimized` is `true`.',
					items: {
						type: 'object',
						description: 'A link in the carousel.',
						properties: {
							link: { type: 'string', description: 'URL of the link.' },
							name: {
								type: 'string',
								description:
									'Title of the link preview. Typically truncated after 35 characters.',
							},
							description: {
								type: 'string',
								description:
									'Price, discount, or website domain shown with the link. Typically truncated after 30 characters.',
							},
							picture: {
								type: 'string',
								description:
									'URL of the preview image (1:1 aspect ratio, at least 458 × 458 px). Either `picture` or `image_hash` is required.',
							},
							image_hash: {
								type: 'string',
								description:
									'Hash of a preview image from your ad image library. Either `picture` or `image_hash` is required.',
							},
						},
						required: ['link'],
					},
				},
				multi_share_end_card: {
					type: 'boolean',
					description:
						'Whether to show the end card of a carousel post. Default is `true`.',
				},
				multi_share_optimized: {
					type: 'boolean',
					description:
						'Whether Facebook picks the order of `child_attachments` when the post is used in an ad. Default is `true`.',
				},
				object_attachment: {
					type: 'string',
					description:
						'ID of a photo owned by the page to use as the thumbnail image of the link.',
				},
				actions: {
					type: 'array',
					description:
						'Action links attached to the post. Cannot be used together with `published`.',
					items: {
						type: 'object',
						description: 'An action link.',
						properties: {
							link: { type: 'string', description: 'URL of the action link.' },
							name: { type: 'string', description: 'Label of the action link.' },
						},
						required: [],
					},
				},
				place: {
					type: 'string',
					description: 'The page ID of a location associated with the post.',
				},
				tags: {
					type: 'array',
					description:
						'IDs of people tagged in the post. Can only be used together with `place`.',
					items: { type: 'string', description: 'The ID of a tagged person.' },
				},
				published: {
					type: 'boolean',
					description:
						'Whether the post is published right away. Default is `true`. Set to `false` together with `scheduled_publish_time` to schedule the post.',
				},
				scheduled_publish_time: {
					type: 'number',
					description:
						'UNIX timestamp (in seconds) when the post goes live. Must be between 10 minutes and 75 days from the time of the request. Requires `published` set to `false`.',
				},
				unpublished_content_type: {
					type: 'string',
					description:
						'Type of the unpublished post. Use `SCHEDULED` for a scheduled post with attached photos.',
					default: '',
					enum: [
						'',
						'SCHEDULED',
						'SCHEDULED_RECURRING',
						'DRAFT',
						'PUBLISH_PENDING',
						'ADS_POST',
						'INLINE_CREATED',
						'PUBLISHED',
						'REVIEWABLE_BRANDED_CONTENT',
					],
				},
				backdated_time: {
					type: 'number',
					description: 'UNIX timestamp (in seconds) in the past to backdate the post to.',
				},
				backdated_time_granularity: {
					type: 'string',
					description:
						'Controls how the time of a backdated post is displayed. For example, `month` displays the post as "2 months ago" instead of an exact date.',
					default: '',
					enum: ['', 'year', 'month', 'day', 'hour', 'min', 'none'],
				},
				feed_targeting: {
					type: 'object',
					description:
						'Audience that is more likely to see the post in feed. Others are less likely to see it, but still can.',
					properties: {
						age_min: {
							type: 'number',
							description: 'Minimum age. Must be 13 or higher.',
							minimum: 13,
						},
						age_max: {
							type: 'number',
							description: 'Maximum age. Must be 65 or lower.',
							maximum: 65,
						},
						genders: {
							type: 'array',
							description: 'Genders to target. Default is both.',
							items: { type: 'number', description: '`1` for male, `2` for female.' },
						},
						geo_locations: {
							description:
								'Geographic locations to target, as a JSON object. See the Facebook targeting guide for the format.',
						},
						college_years: {
							type: 'array',
							description: 'Graduation years from college.',
							items: { type: 'number', description: 'A graduation year.' },
						},
						education_statuses: {
							type: 'array',
							description: 'Education levels to target.',
							items: {
								type: 'number',
								description:
									'`1` for high school, `2` for undergraduate, `3` for alum.',
							},
						},
						interests: {
							type: 'array',
							description:
								'IDs of interests to target. Search with `type=audienceinterest` to get the IDs.',
							items: { type: 'number', description: 'An interest ID.' },
						},
						locales: {
							type: 'array',
							description:
								'Locales to target. Search with `type=adlocale` to get the keys.',
							items: { type: 'number', description: 'A locale key.' },
						},
						relationship_statuses: {
							type: 'array',
							description: 'Relationship statuses to target. Default is all.',
							items: {
								type: 'number',
								description:
									'`1` single, `2` in a relationship, `3` married, `4` engaged.',
							},
						},
					},
					required: [],
				},
				targeting: {
					type: 'object',
					description:
						"Audience that can see the post. People outside it can't see the post. Does not override page-level restrictions.",
					properties: {
						age_min: {
							type: 'string',
							description: 'Minimum age of the audience.',
							default: '',
							enum: ['', 13, 15, 18, 21, 25],
						},
						geo_locations: {
							description:
								'Geographic locations of the audience, as a JSON object. See the Facebook targeting guide for the format.',
						},
					},
					required: [],
				},
				og_action_type_id: {
					type: 'string',
					description:
						'ID of the action of a feeling or activity, for example *feeling* or *watching*. Required together with `og_object_id`.',
				},
				og_object_id: {
					type: 'string',
					description:
						'ID of the object of a feeling or activity. Required together with `og_action_type_id`.',
				},
				og_icon_id: {
					type: 'string',
					description:
						'ID of the icon of a feeling or activity. If not set, Facebook picks an icon based on `og_object_id`.',
				},
			},
			required: ['page_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The ID of the new post, in the `{page_id}_{post_id}` format.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'DeleteComment',
		label: 'Delete a comment',
		description: 'Deletes a comment.',
		context:
			"---\nname: DeleteComment\ndescription: Deletes a comment.\n---\n\nDeletes a comment on a Page post, photo, or video. The deletion cannot be undone.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\nAPI reference: [Comment](https://developers.facebook.com/docs/graph-api/reference/comment/)\n",
		accounts: {
			facebook: {
				scope: ['pages_manage_engagement', 'pages_read_engagement', 'business_management'],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page where the comment was posted. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				comment_id: { type: 'string', description: 'The ID of the comment to delete.' },
			},
			required: ['page_id', 'comment_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'DeletePhoto',
		label: 'Delete a photo',
		description: 'Deletes a photo.',
		context:
			"---\nname: DeletePhoto\ndescription: Deletes a photo.\n---\n\nDeletes a photo owned by the Page or posted on the Page by a user. The deletion cannot be undone.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\nAPI reference: [Photo](https://developers.facebook.com/docs/graph-api/reference/photo/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page that owns the photo. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				photo_id: { type: 'string', description: 'The ID of the photo to delete.' },
			},
			required: ['page_id', 'photo_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'DeletePost',
		label: 'Delete a post',
		description: 'Deletes a post.',
		context:
			"---\nname: DeletePost\ndescription: Deletes a Facebook page post.\n---\n\nDeletes a Facebook page post. The post can't be restored.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- The post ID must be in the `{page_id}_{post_id}` format, as returned by `CreatePost` and `ListPagePosts`.\n- Meta documents this operation as available only to select developers; other apps may get a permissions error. Posts can always be deleted in Meta Business Manager.\n- Video posts: delete the video itself with `DeleteVideo`.\n\nAPI reference: [Page Post – Deleting](https://developers.facebook.com/docs/graph-api/reference/page-post/#Deleting)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page that owns the post. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				page_post_id: {
					type: 'string',
					description: 'The ID of the page post in the `{page_id}_{post_id}` format.',
				},
			},
			required: ['page_id', 'page_post_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'DeleteVideo',
		label: 'Delete a video',
		description: 'Deletes a video.',
		context:
			"---\nname: DeleteVideo\ndescription: Deletes a video from a Facebook page.\n---\n\nDeletes a published video from a Facebook page. The video can't be restored.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- Use the video ID, as returned by `UploadVideo` or `StartReelUpload`, not the ID of the video post.\n- Reels are videos too and can be deleted with this endpoint.\n\nAPI reference: [Video](https://developers.facebook.com/docs/graph-api/reference/video/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page that owns the video. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				video_id: { type: 'string', description: 'The ID of the video to delete.' },
			},
			required: ['page_id', 'video_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'GetComment',
		label: 'Get a comment',
		description: 'Returns a comment.',
		context:
			"---\nname: GetComment\ndescription: Returns a comment.\n---\n\nReturns a comment. Only the fields listed in `fields` are returned; if `fields` is empty, the default fields are returned.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- `from` (the comment author) is returned only with a Page access token.\n- `object` and `parent` return the ID and basic fields of the commented object and of the parent comment.\n\nAPI reference: [Comment](https://developers.facebook.com/docs/graph-api/reference/comment/)\n",
		accounts: {
			facebook: {
				scope: ['pages_manage_engagement', 'pages_read_engagement', 'business_management'],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page where the comment was posted. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				comment_id: { type: 'string', description: 'The ID of the comment.' },
				fields: {
					type: 'string',
					description:
						'Fields to return. If empty, Facebook returns its default fields for the comment.',
					default: '',
					enum: [
						'',
						'id',
						'message',
						'created_time',
						'from',
						'attachment',
						'object',
						'parent',
						'can_comment',
						'can_hide',
						'can_like',
						'can_remove',
						'can_reply_privately',
						'comment_count',
						'like_count',
						'is_hidden',
						'is_private',
						'live_broadcast_timestamp',
						'private_reply_conversation',
						'user_likes',
					],
				},
			},
			required: ['page_id', 'comment_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The comment ID.' },
				message: { type: 'string', description: 'The comment text.' },
				created_time: { type: 'string', description: 'The time the comment was created.' },
				from: {
					type: 'object',
					description: 'The person or Page that made the comment.',
					properties: {
						id: {
							type: 'string',
							description: 'The Page-scoped ID of the person, or the ID of the Page.',
						},
						name: { type: 'string', description: 'The name of the person or Page.' },
					},
					required: [],
				},
				attachment: {
					type: 'object',
					description: 'Link, photo, sticker, or animated GIF attached to the comment.',
					properties: {
						description: {
							type: 'string',
							description: 'Description of the attachment.',
						},
						media: {
							type: 'object',
							description: 'Media of the attachment.',
							properties: {
								image: {
									type: 'object',
									description: 'Image of the attachment.',
									properties: {
										height: {
											type: 'number',
											description: 'Image height in pixels.',
										},
										src: { type: 'string', description: 'URL of the image.' },
										width: {
											type: 'number',
											description: 'Image width in pixels.',
										},
									},
									required: [],
								},
							},
							required: [],
						},
						target: {
							type: 'object',
							description: 'The object the attachment links to.',
							properties: {
								id: { type: 'string', description: 'ID of the target object.' },
								url: { type: 'string', description: 'URL of the target object.' },
							},
							required: [],
						},
						type: {
							type: 'string',
							description:
								'Type of the attachment, for example `photo`, `animated_image_share`, or `sticker`.',
						},
						url: { type: 'string', description: 'URL of the attachment.' },
						subattachments: {
							type: 'object',
							description: 'Nested attachments.',
							properties: {
								data: {
									type: 'array',
									description: 'List of nested attachments.',
									items: {
										type: 'object',
										description: 'A nested attachment.',
										properties: {
											description: {
												type: 'string',
												description: 'Description of the attachment.',
											},
											media: {
												type: 'object',
												description: 'Media of the attachment.',
												properties: {
													image: {
														type: 'object',
														description: 'Image of the attachment.',
														properties: {
															height: {
																type: 'number',
																description:
																	'Image height in pixels.',
															},
															src: {
																type: 'string',
																description: 'URL of the image.',
															},
															width: {
																type: 'number',
																description:
																	'Image width in pixels.',
															},
														},
														required: [],
													},
												},
												required: [],
											},
											target: {
												type: 'object',
												description: 'The object the attachment links to.',
												properties: {
													id: {
														type: 'string',
														description: 'ID of the target object.',
													},
													url: {
														type: 'string',
														description: 'URL of the target object.',
													},
												},
												required: [],
											},
											type: {
												type: 'string',
												description:
													'Type of the attachment, for example `photo`, `animated_image_share`, or `sticker`.',
											},
											url: {
												type: 'string',
												description: 'URL of the attachment.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
					},
					required: [],
				},
				object: {
					type: 'object',
					description: 'The object (post, photo, or video) the comment was made on.',
					properties: {
						id: { type: 'string', description: 'ID of the object.' },
						message: {
							type: 'string',
							description: 'Text of the object, when it has one.',
						},
						created_time: {
							type: 'string',
							description: 'The time the object was created.',
						},
					},
					required: [],
				},
				parent: {
					type: 'object',
					description: 'For comment replies, the comment this is a reply to.',
					properties: {
						id: { type: 'string', description: 'ID of the parent comment.' },
						message: { type: 'string', description: 'Text of the parent comment.' },
						created_time: {
							type: 'string',
							description: 'The time the parent comment was created.',
						},
						from: {
							type: 'object',
							description: 'The person or Page that made the parent comment.',
							properties: {
								id: {
									type: 'string',
									description:
										'The Page-scoped ID of the person, or the ID of the Page.',
								},
								name: {
									type: 'string',
									description: 'The name of the person or Page.',
								},
							},
							required: [],
						},
					},
					required: [],
				},
				can_comment: {
					type: 'boolean',
					description: 'Whether the viewer can reply to this comment.',
				},
				can_hide: {
					type: 'boolean',
					description: 'Whether the viewer can hide this comment.',
				},
				can_like: {
					type: 'boolean',
					description: 'Whether the viewer can like this comment.',
				},
				can_remove: {
					type: 'boolean',
					description: 'Whether the viewer can remove this comment.',
				},
				can_reply_privately: {
					type: 'boolean',
					description: 'Whether the Page can send a private reply to this comment.',
				},
				comment_count: {
					type: 'number',
					description: 'Number of replies to this comment.',
				},
				like_count: {
					type: 'number',
					description: 'Number of times this comment was liked.',
				},
				is_hidden: { type: 'boolean', description: 'Whether the comment is hidden.' },
				is_private: {
					type: 'boolean',
					description: 'Whether the comment is a private comment.',
				},
				live_broadcast_timestamp: {
					type: 'number',
					description:
						'Time the comment was made on a live video, in seconds from the start of the broadcast.',
				},
				private_reply_conversation: {
					type: 'object',
					description:
						'If a private reply was sent to this comment, the conversation between the Page and the comment author.',
					properties: { id: { type: 'string', description: 'ID of the conversation.' } },
					required: [],
				},
				user_likes: {
					type: 'boolean',
					description: 'Whether the viewer has liked this comment.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'GetPage',
		label: 'Get a page',
		description: 'Gets the details of a Facebook page.',
		context:
			'---\nname: GetPage\ndescription: Gets the details of a Facebook page.\n---\n\nGets the details of a Facebook page: about info, contact details, location, opening hours, counts, and more.\n\nThis endpoint acts as the page `page_id`. It gets the page\'s access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- If `fields` is empty, all fields listed in `fields` are requested. Fields that don\'t apply to the page type are not returned.\n- Fields marked "only visible to a page admin" (for example `new_like_count`, `unread_message_count`) need a Page access token.\n- The page access token is never returned. A response that contains an access token is rejected with an error.\n\nAPI reference: [Page](https://developers.facebook.com/docs/graph-api/reference/page/)\n',
		accounts: {
			facebook: {
				scope: [
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'pages_manage_metadata',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID or username of the page. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				fields: {
					type: 'string',
					description: 'Fields to return. If empty, all fields listed here are returned.',
					default: '',
					enum: [
						'',
						'id',
						'about',
						'app_id',
						'artists_we_like',
						'attire',
						'awards',
						'band_interests',
						'band_members',
						'birthday',
						'booking_agent',
						'built',
						'can_checkin',
						'can_post',
						'category',
						'category_list',
						'checkins',
						'company_overview',
						'connected_instagram_account',
						'contact_address',
						'copyright_whitelisted_ig_partners',
						'country_page_likes',
						'cover',
						'culinary_team',
						'description',
						'description_html',
						'directed_by',
						'display_subtext',
						'displayed_message_response_time',
						'emails',
						'engagement',
						'fan_count',
						'features',
						'food_styles',
						'founded',
						'general_info',
						'general_manager',
						'global_brand_page_name',
						'global_brand_root_id',
						'has_added_app',
						'has_whatsapp_number',
						'hometown',
						'hours',
						'impressum',
						'influences',
						'instagram_business_account',
						'is_always_open',
						'is_chain',
						'is_community_page',
						'is_eligible_for_branded_content',
						'is_messenger_bot_get_started_enabled',
						'is_messenger_platform_bot',
						'is_owned',
						'is_permanently_closed',
						'is_published',
						'is_unclaimed',
						'is_webhooks_subscribed',
						'link',
						'location',
						'members',
						'mission',
						'mpg',
						'name',
						'name_with_location_descriptor',
						'new_like_count',
						'offer_eligible',
						'overall_star_rating',
						'payment_options',
						'personal_info',
						'personal_interests',
						'pharma_safety_info',
						'phone',
						'place_type',
						'plot_outline',
						'press_contact',
						'price_range',
						'privacy_info_url',
						'produced_by',
						'products',
						'promotion_eligible',
						'promotion_ineligible_reason',
						'public_transit',
						'rating_count',
						'record_label',
						'release_date',
						'restaurant_services',
						'restaurant_specialties',
						'schedule',
						'screenplay_by',
						'season',
						'single_line_address',
						'starring',
						'store_code',
						'store_location_descriptor',
						'store_number',
						'studio',
						'talking_about_count',
						'unread_message_count',
						'unread_notif_count',
						'unseen_message_count',
						'username',
						'verification_status',
						'voip_info',
						'website',
						'were_here_count',
						'whatsapp_number',
						'written_by',
					],
				},
			},
			required: ['page_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID representing a Facebook Page.' },
				about: {
					type: 'string',
					description:
						'Information about the Page. This value maps to the Description setting in the Edit Page Info user interface.',
				},
				app_id: {
					type: 'string',
					description: 'App ID for app-owned Pages and app Pages.',
				},
				artists_we_like: {
					type: 'string',
					description: 'Artists the band likes. Applicable to Bands.',
				},
				attire: {
					type: 'string',
					description:
						'Dress code of the business. Applicable to Restaurants or Nightlife.',
				},
				awards: {
					type: 'string',
					description: 'The awards information of the film. Applicable to Films.',
				},
				band_interests: {
					type: 'string',
					description: 'Band interests. Applicable to Bands.',
				},
				band_members: {
					type: 'string',
					description: 'Members of the band. Applicable to Bands.',
				},
				birthday: {
					type: 'string',
					description:
						'Birthday of this person. Applicable to Pages representing people.',
				},
				booking_agent: {
					type: 'string',
					description: 'Booking agent of the band. Applicable to Bands.',
				},
				built: {
					type: 'string',
					description: 'Year vehicle was built. Applicable to Vehicles.',
				},
				can_checkin: {
					type: 'boolean',
					description: 'Whether the Page has checkin functionality enabled.',
				},
				can_post: {
					type: 'boolean',
					description: 'Indicates whether the current app user can post on this Page.',
				},
				category: { type: 'string', description: "The Page's category. e.g." },
				category_list: {
					type: 'array',
					description: "The page's sub-categories. The parent category is not included.",
					items: {
						type: 'object',
						description: 'A page category.',
						properties: {
							id: { type: 'string', description: 'ID of the category.' },
							name: { type: 'string', description: 'Name of the category.' },
						},
						required: [],
					},
				},
				checkins: {
					type: 'number',
					description: 'Number of checkins at a place represented by a Page.',
				},
				company_overview: {
					type: 'string',
					description: 'The company overview. Applicable to Companies.',
				},
				connected_instagram_account: {
					type: 'object',
					description: 'Instagram account connected to the page in the page settings.',
					properties: {
						id: { type: 'string', description: 'ID of the Instagram account.' },
					},
					required: [],
				},
				contact_address: {
					type: 'object',
					description:
						'The mailing or contact address of the page. Empty when it matches the physical address.',
					properties: {
						id: { type: 'string', description: 'ID of the address.' },
						street1: {
							type: 'string',
							description: 'First line of the street address.',
						},
						street2: {
							type: 'string',
							description: 'Second line of the street address.',
						},
						city: { type: 'string', description: 'City.' },
						region: { type: 'string', description: 'State or region.' },
						postal_code: { type: 'string', description: 'Postal code.' },
						country: { type: 'string', description: 'Country.' },
					},
					required: [],
				},
				copyright_whitelisted_ig_partners: {
					type: 'array',
					description: 'Instagram usernames that are not reported by copyright matching.',
					items: { type: 'string', description: 'An Instagram username.' },
				},
				country_page_likes: {
					type: 'number',
					description:
						'If this is a Page in a Global Pages hierarchy, the number of people who are being directed to this Page.',
				},
				cover: {
					type: 'object',
					description: "The page's cover photo.",
					properties: {
						id: { type: 'string', description: 'ID of the cover photo object.' },
						cover_id: {
							type: 'string',
							description: 'ID of the photo used as the cover.',
						},
						source: { type: 'string', description: 'URL of the cover photo.' },
						offset_x: {
							type: 'number',
							description: 'Horizontal offset of the cover photo, in percent.',
						},
						offset_y: {
							type: 'number',
							description: 'Vertical offset of the cover photo, in percent.',
						},
					},
					required: [],
				},
				culinary_team: {
					type: 'string',
					description:
						'Culinary team of the business. Applicable to Restaurants or Nightlife.',
				},
				description: {
					type: 'string',
					description:
						'The description of the Page. Note that this value is mapped to the Additional Information setting in the Edit Page Info user interface.',
				},
				description_html: {
					type: 'string',
					description: 'The description of the Page in raw HTML.',
				},
				directed_by: {
					type: 'string',
					description: 'The director of the film. Applicable to Films.',
				},
				display_subtext: {
					type: 'string',
					description: 'Subtext about the Page being viewed.',
				},
				displayed_message_response_time: {
					type: 'string',
					description: 'Page estimated message response time displayed to user.',
				},
				emails: {
					type: 'array',
					description: "Email addresses listed in the page's About section.",
					items: { type: 'string', description: 'An email address.' },
				},
				engagement: {
					type: 'object',
					description:
						'Like count and social sentence of the page, as shown on the Like button.',
					properties: {
						count: { type: 'number', description: 'Number of likes.' },
						social_sentence: {
							type: 'string',
							description: 'Text describing who likes the page.',
						},
					},
					required: [],
				},
				fan_count: {
					type: 'number',
					description:
						'The number of users who like the Page. For Global Pages this is the count for all Pages across the brand.',
				},
				features: {
					type: 'string',
					description: 'Features of the vehicle. Applicable to Vehicles.',
				},
				food_styles: {
					type: 'array',
					description: 'Food styles of the restaurant.',
					items: { type: 'string', description: 'A food style.' },
				},
				founded: {
					type: 'string',
					description:
						'When the company was founded. Applicable to Pages in the Company category.',
				},
				general_info: {
					type: 'string',
					description: 'General information provided by the Page.',
				},
				general_manager: {
					type: 'string',
					description:
						'General manager of the business. Applicable to Restaurants or Nightlife.',
				},
				global_brand_page_name: {
					type: 'string',
					description:
						'The name of the Page with country codes appended for Global Pages. Only visible to the Page admin.',
				},
				global_brand_root_id: {
					type: 'string',
					description: "This brand's global Root ID.",
				},
				has_added_app: {
					type: 'boolean',
					description:
						'Indicates whether this Page has added the app making the query in a Page tab.',
				},
				has_whatsapp_number: {
					type: 'boolean',
					description:
						'Indicates whether WhatsApp number connected to this page is a WhatsApp number.',
				},
				hometown: {
					type: 'string',
					description: 'Hometown of the band. Applicable to Bands.',
				},
				hours: {
					type: 'object',
					description:
						'Opening hours. Keys are in the `{day}_{number}_{status}` format, for example `mon_1_open`; values are times in the `HH:MM` format.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				impressum: {
					type: 'string',
					description: 'Legal information about the Page publishers.',
				},
				influences: {
					type: 'string',
					description: 'Influences on the band. Applicable to Bands.',
				},
				instagram_business_account: {
					type: 'object',
					description: 'Instagram business account linked to the page.',
					properties: {
						id: {
							type: 'string',
							description: 'ID of the Instagram business account.',
						},
					},
					required: [],
				},
				is_always_open: {
					type: 'boolean',
					description: 'Indicates whether this location is always open.',
				},
				is_chain: {
					type: 'boolean',
					description: 'Indicates whether location is part of a chain.',
				},
				is_community_page: {
					type: 'boolean',
					description: 'Indicates whether the Page is a community Page.',
				},
				is_eligible_for_branded_content: {
					type: 'boolean',
					description:
						'Indicates whether the page is eligible for the branded content tool.',
				},
				is_messenger_bot_get_started_enabled: {
					type: 'boolean',
					description:
						'Indicates whether the page is a Messenger Platform Bot with Get Started button enabled.',
				},
				is_messenger_platform_bot: {
					type: 'boolean',
					description: 'Indicates whether the page is a Messenger Platform Bot.',
				},
				is_owned: { type: 'boolean', description: 'Indicates whether Page is owned.' },
				is_permanently_closed: {
					type: 'boolean',
					description:
						'Whether the business corresponding to this Page is permanently closed.',
				},
				is_published: {
					type: 'boolean',
					description:
						'Indicates whether the Page is published and visible to non-admins.',
				},
				is_unclaimed: {
					type: 'boolean',
					description: 'Indicates whether the Page is unclaimed.',
				},
				is_webhooks_subscribed: {
					type: 'boolean',
					description:
						'Indicates whether the application is subscribed for real time updates from this page.',
				},
				link: { type: 'string', description: "The Page's Facebook URL." },
				location: {
					type: 'object',
					description: 'Location of the place.',
					properties: {
						street: { type: 'string', description: 'Street address.' },
						city: { type: 'string', description: 'City.' },
						city_id: { type: 'number', description: 'Facebook ID of the city.' },
						state: { type: 'string', description: 'State.' },
						region: { type: 'string', description: 'Region.' },
						region_id: { type: 'number', description: 'Facebook ID of the region.' },
						country: { type: 'string', description: 'Country.' },
						country_code: { type: 'string', description: 'Country code.' },
						zip: { type: 'string', description: 'Postal code.' },
						latitude: { type: 'number', description: 'Latitude.' },
						longitude: { type: 'number', description: 'Longitude.' },
						located_in: {
							type: 'string',
							description: 'ID of the parent location page, for example a mall.',
						},
						name: { type: 'string', description: 'Name of the location.' },
					},
					required: [],
				},
				members: {
					type: 'string',
					description: 'Members of this org. Applicable to Pages representing Team Orgs.',
				},
				mission: {
					type: 'string',
					description: 'The company mission. Applicable to Companies.',
				},
				mpg: { type: 'string', description: 'MPG of the vehicle. Applicable to Vehicles.' },
				name: { type: 'string', description: 'The name of the Page.' },
				name_with_location_descriptor: {
					type: 'string',
					description:
						'The name of the Page with its location and/or global brand descriptor. Only visible to a page admin.',
				},
				new_like_count: {
					type: 'number',
					description:
						'The number of people who have liked the Page, since the last login. Only visible to a Page admin.',
				},
				offer_eligible: {
					type: 'boolean',
					description: 'Offer eligibility status. Only visible to a page admin.',
				},
				overall_star_rating: {
					type: 'number',
					description:
						'Overall page rating based on rating survey from users on a scale of 1-5. This value is normalized and is not guaranteed to be a strict average of user ratings.',
				},
				payment_options: {
					type: 'object',
					description: 'Accepted payment options.',
					properties: {
						amex: {
							type: 'number',
							description: '`1` if American Express is accepted, otherwise `0`.',
						},
						cash_only: {
							type: 'number',
							description: '`1` if only cash is accepted, otherwise `0`.',
						},
						discover: {
							type: 'number',
							description: '`1` if Discover is accepted, otherwise `0`.',
						},
						mastercard: {
							type: 'number',
							description: '`1` if Mastercard is accepted, otherwise `0`.',
						},
						visa: {
							type: 'number',
							description: '`1` if Visa is accepted, otherwise `0`.',
						},
					},
					required: [],
				},
				personal_info: {
					type: 'string',
					description: 'Personal information. Applicable to Pages representing People.',
				},
				personal_interests: {
					type: 'string',
					description: 'Personal interests. Applicable to Pages representing People.',
				},
				pharma_safety_info: {
					type: 'string',
					description:
						'Pharmacy safety information. Applicable to Pharmaceutical companies.',
				},
				phone: { type: 'string', description: 'Phone number provided by a Page.' },
				place_type: {
					type: 'string',
					description:
						'For places, the category of the place. Value can be CITY, COUNTRY, EVENT, GEO_ENTITY, PLACE, RESIDENCE, STATE_PROVINCE, or TEXT.',
				},
				plot_outline: {
					type: 'string',
					description: 'The plot outline of the film. Applicable to Films.',
				},
				press_contact: {
					type: 'string',
					description: 'Press contact information of the band. Applicable to Bands.',
				},
				price_range: {
					type: 'string',
					description:
						'Price range of the business, such as a restaurant or salon. Values can be one of $, $$, $$$, $$$$, Not Applicable, or null if no value is set..',
				},
				privacy_info_url: {
					type: 'string',
					description: 'Privacy url in page info section.',
				},
				produced_by: {
					type: 'string',
					description: 'The productor of the film. Applicable to Films.',
				},
				products: {
					type: 'string',
					description: 'The products of this company. Applicable to Companies.',
				},
				promotion_eligible: {
					type: 'boolean',
					description: 'Boosted posts eligibility status. Only visible to a page admin.',
				},
				promotion_ineligible_reason: {
					type: 'string',
					description:
						'Reason for which boosted posts are not eligible. Only visible to a page admin.',
				},
				public_transit: {
					type: 'string',
					description:
						'Public transit to the business. Applicable to Restaurants or Nightlife.',
				},
				rating_count: {
					type: 'number',
					description:
						'Number of ratings for the Page (limited to ratings that are publicly accessible).',
				},
				record_label: {
					type: 'string',
					description: 'Record label of the band. Applicable to Bands.',
				},
				release_date: {
					type: 'string',
					description: "The film's release date. Applicable to Films.",
				},
				restaurant_services: {
					type: 'object',
					description: 'Services of the restaurant.',
					properties: {
						catering: {
							type: 'number',
							description: '`1` if catering is offered, otherwise `0`.',
						},
						delivery: {
							type: 'number',
							description: '`1` if delivery is offered, otherwise `0`.',
						},
						groups: {
							type: 'number',
							description: '`1` if it is good for groups, otherwise `0`.',
						},
						kids: {
							type: 'number',
							description: '`1` if it is good for kids, otherwise `0`.',
						},
						outdoor: {
							type: 'number',
							description: '`1` if there is outdoor seating, otherwise `0`.',
						},
						pickup: {
							type: 'number',
							description: '`1` if pickup is offered, otherwise `0`.',
						},
						reserve: {
							type: 'number',
							description: '`1` if reservations are accepted, otherwise `0`.',
						},
						takeout: {
							type: 'number',
							description: '`1` if takeout is offered, otherwise `0`.',
						},
						waiter: {
							type: 'number',
							description: '`1` if there is waiter service, otherwise `0`.',
						},
						walkins: {
							type: 'number',
							description: '`1` if walk-ins are welcome, otherwise `0`.',
						},
					},
					required: [],
				},
				restaurant_specialties: {
					type: 'object',
					description: 'Specialties of the restaurant.',
					properties: {
						breakfast: {
							type: 'number',
							description: '`1` if breakfast is served, otherwise `0`.',
						},
						coffee: {
							type: 'number',
							description: '`1` if coffee is served, otherwise `0`.',
						},
						dinner: {
							type: 'number',
							description: '`1` if dinner is served, otherwise `0`.',
						},
						drinks: {
							type: 'number',
							description: '`1` if drinks are served, otherwise `0`.',
						},
						lunch: {
							type: 'number',
							description: '`1` if lunch is served, otherwise `0`.',
						},
					},
					required: [],
				},
				schedule: {
					type: 'string',
					description: 'The air schedule of the TV show. Applicable to TV Shows.',
				},
				screenplay_by: {
					type: 'string',
					description: 'The screenwriter of the film. Applicable to Films.',
				},
				season: {
					type: 'string',
					description: 'The season information of the TV Show. Applicable to TV Shows.',
				},
				single_line_address: {
					type: 'string',
					description: 'The Page address, if any, in a simple single line format.',
				},
				starring: {
					type: 'string',
					description: 'The cast of the film. Applicable to Films.',
				},
				store_code: {
					type: 'string',
					description: 'Unique store code for this location Page.',
				},
				store_location_descriptor: {
					type: 'string',
					description: "Location Page's store location descriptor.",
				},
				store_number: {
					type: 'number',
					description: 'Unique store number for this location Page.',
				},
				studio: {
					type: 'string',
					description: 'The studio for the film production. Applicable to Films.',
				},
				talking_about_count: {
					type: 'number',
					description: 'The number of people talking about this Page.',
				},
				unread_message_count: {
					type: 'number',
					description: 'Unread message count for the Page. Only visible to a page admin.',
				},
				unread_notif_count: {
					type: 'number',
					description: 'Number of unread notifications. Only visible to a page admin.',
				},
				unseen_message_count: {
					type: 'number',
					description: 'Unseen message count for the Page. Only visible to a page admin.',
				},
				username: {
					type: 'string',
					description:
						"The alias of the Page. For example, for www.facebook.com/platform the username is 'platform'.",
				},
				verification_status: {
					type: 'string',
					description:
						'Showing whether this Page is verified. Value can be blue_verified or gray_verified, which represents that Facebook has confirmed that a Page is the authentic presence of the public figure, celebrity, or global brand it represents, or not_verified.',
				},
				voip_info: {
					type: 'object',
					description: 'Messenger calling information of the page.',
					properties: {
						has_mobile_app: {
							type: 'boolean',
							description: 'Whether the page has the mobile app.',
						},
						has_permission: {
							type: 'boolean',
							description: 'Whether calling is permitted.',
						},
						is_callable: {
							type: 'boolean',
							description: 'Whether the page can be called.',
						},
						is_callable_webrtc: {
							type: 'boolean',
							description: 'Whether the page can be called over WebRTC.',
						},
						is_pushable: {
							type: 'boolean',
							description: 'Whether push notifications can be sent.',
						},
						reason_code: {
							type: 'number',
							description: "Code of the reason the page can't be called.",
						},
						reason_description: {
							type: 'string',
							description: "Description of the reason the page can't be called.",
						},
					},
					required: [],
				},
				website: { type: 'string', description: "The URL of the Page's website." },
				were_here_count: {
					type: 'number',
					description:
						"The number of visits to this Page's location. If the Page setting Show map, check-ins and star ratings on the Page (under Page Settings > Page Info > Address) is disabled, then this value will also be disabled.",
				},
				whatsapp_number: { type: 'string', description: "The Page's WhatsApp number." },
				written_by: {
					type: 'string',
					description: 'The writer of the TV show. Applicable to TV Shows.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'GetPhoto',
		label: 'Get a photo',
		description: 'Gets a Facebook photo by its ID.',
		context:
			"---\nname: GetPhoto\ndescription: Gets a Facebook photo by its ID.\n---\n\nGets a photo by its ID.\n\nThis endpoint gets the access token of the page `page_id` internally and acts as the page when the connected user has a role on it (other than Live Contributor). Otherwise, the connection's user token is used, which works only for content the app can read publicly. Use `ListPages` to find the page ID.\n\n## Notes\n\n- A Page access token can read all photos posted to or by its page.\n- `images` lists the stored sizes of the photo; the first item is usually the largest.\n\nAPI reference: [Photo](https://developers.facebook.com/docs/graph-api/reference/photo/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						"The ID of the page that owns the photo. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.",
				},
				photo_id: { type: 'string', description: 'The ID of the photo.' },
				fields: {
					type: 'string',
					description:
						'Fields to return for each photo. If empty, these fields are returned: `id,name,alt_text,alt_text_custom,album,created_time,updated_time,backdated_time,can_backdate,can_delete,can_tag,from,height,width,icon,images,webp_images,link,picture,place,page_story_id,name_tags`.',
					default: '',
					enum: [
						'',
						'id',
						'name',
						'alt_text',
						'alt_text_custom',
						'album',
						'created_time',
						'updated_time',
						'backdated_time',
						'can_backdate',
						'can_delete',
						'can_tag',
						'from',
						'height',
						'width',
						'icon',
						'images',
						'webp_images',
						'link',
						'picture',
						'place',
						'page_story_id',
						'name_tags',
						'backdated_time_granularity',
						'target',
					],
				},
			},
			required: ['page_id', 'photo_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the photo.' },
				name: { type: 'string', description: 'The caption of the photo.' },
				alt_text: {
					type: 'string',
					description: 'Automatically generated alternative text of the photo.',
				},
				alt_text_custom: {
					type: 'string',
					description: 'Alternative text of the photo provided by the user.',
				},
				album: {
					type: 'object',
					description: 'The album the photo is in.',
					properties: {
						id: { type: 'string', description: 'ID.' },
						name: { type: 'string', description: 'Name.' },
					},
					required: [],
				},
				created_time: { type: 'string', description: 'The time the photo was published.' },
				updated_time: {
					type: 'string',
					description: 'The last time the photo was updated.',
				},
				backdated_time: {
					type: 'string',
					description: 'The backdated creation time of the photo.',
				},
				backdated_time_granularity: {
					type: 'string',
					description: 'Which part of `backdated_time` is displayed.',
				},
				can_backdate: {
					type: 'boolean',
					description: 'Whether the viewer can backdate the photo.',
				},
				can_delete: {
					type: 'boolean',
					description: 'Whether the viewer can delete the photo.',
				},
				can_tag: { type: 'boolean', description: 'Whether the viewer can tag the photo.' },
				from: {
					type: 'object',
					description: 'The page or person that uploaded the photo.',
					properties: {
						id: { type: 'string', description: 'ID.' },
						name: { type: 'string', description: 'Name.' },
					},
					required: [],
				},
				height: { type: 'number', description: 'Height of the photo in pixels.' },
				width: { type: 'number', description: 'Width of the photo in pixels.' },
				icon: {
					type: 'string',
					description:
						'URL of the icon Facebook shows when the photo is published to the feed.',
				},
				images: {
					type: 'array',
					description: 'Stored versions of the photo in different sizes.',
					items: {
						type: 'object',
						description: 'A stored version of the photo.',
						properties: {
							height: { type: 'number', description: 'Height in pixels.' },
							width: { type: 'number', description: 'Width in pixels.' },
							source: { type: 'string', description: 'URL of the image.' },
						},
						required: [],
					},
				},
				webp_images: {
					type: 'array',
					description: 'Stored versions of the photo in WebP format.',
					items: {
						type: 'object',
						description: 'A stored version of the photo.',
						properties: {
							height: { type: 'number', description: 'Height in pixels.' },
							width: { type: 'number', description: 'Width in pixels.' },
							source: { type: 'string', description: 'URL of the image.' },
						},
						required: [],
					},
				},
				link: { type: 'string', description: 'URL of the photo on Facebook.' },
				picture: { type: 'string', description: 'URL of a thumbnail of the photo.' },
				place: {
					type: 'object',
					description: 'The place (location page) associated with the object.',
					properties: {
						id: { type: 'string', description: 'ID of the place page.' },
						name: { type: 'string', description: 'Name of the place.' },
						location: {
							type: 'object',
							description: 'Location of the place.',
							properties: {
								city: { type: 'string', description: 'City.' },
								country: { type: 'string', description: 'Country.' },
								latitude: { type: 'number', description: 'Latitude.' },
								longitude: { type: 'number', description: 'Longitude.' },
								street: { type: 'string', description: 'Street address.' },
								zip: { type: 'string', description: 'Postal code.' },
							},
							required: [],
						},
					},
					required: [],
				},
				page_story_id: {
					type: 'string',
					description: 'ID of the page story of the photo. Only for published photos.',
				},
				name_tags: {
					type: 'array',
					description: 'Profiles mentioned in the caption.',
					items: {
						type: 'object',
						description: 'A profile mentioned in the caption.',
						properties: {
							id: { type: 'string', description: 'ID of the profile.' },
							name: { type: 'string', description: 'Name of the profile.' },
							type: {
								type: 'string',
								description: 'Type of the profile, for example `user` or `page`.',
							},
							offset: {
								type: 'number',
								description: 'Position of the mention in the caption.',
							},
							length: { type: 'number', description: 'Length of the mention.' },
						},
						required: [],
					},
				},
				target: {
					type: 'object',
					description: 'The profile the photo is published to.',
					properties: { id: { type: 'string', description: 'ID of the profile.' } },
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'GetPost',
		label: 'Get a post',
		description: 'Gets a Facebook page post by its ID.',
		context:
			"---\nname: GetPost\ndescription: Gets a Facebook page post by its ID.\n---\n\nGets a page post by its ID.\n\nThis endpoint gets the access token of the page `page_id` internally and acts as the page when the connected user has a role on it (other than Live Contributor). Otherwise, the connection's user token is used, which works only for content the app can read publicly. Use `ListPages` to find the page ID.\n\n## Notes\n\n- The post ID must be in the `{page_id}_{post_id}` format, as returned by `CreatePost` and `ListPagePosts`.\n- User information in the post is returned only with a Page access token.\n- Expired posts can't be read.\n\nAPI reference: [Page Post](https://developers.facebook.com/docs/graph-api/reference/page-post/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						"The ID of the page that owns the post. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.",
				},
				page_post_id: {
					type: 'string',
					description: 'The ID of the page post in the `{page_id}_{post_id}` format.',
				},
				fields: {
					type: 'string',
					description:
						'Fields to return. If empty, these fields are returned: `id,created_time,updated_time,message,story,full_picture,permalink_url,status_type,shares,attachments`.',
					default: '',
					enum: [
						'',
						'id',
						'created_time',
						'updated_time',
						'message',
						'message_tags',
						'story',
						'full_picture',
						'icon',
						'permalink_url',
						'status_type',
						'from',
						'attachments',
						'is_hidden',
						'is_published',
						'is_expired',
						'is_popular',
						'is_eligible_for_promotion',
						'is_spherical',
						'parent_id',
						'privacy',
						'promotable_id',
						'shares',
						'backdated_time',
					],
				},
			},
			required: ['page_id', 'page_post_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'The ID of the post, in the `{page_id}_{post_id}` format.',
				},
				created_time: { type: 'string', description: 'The time the post was published.' },
				updated_time: {
					type: 'string',
					description: 'The time the post was last updated, including new comments.',
				},
				message: { type: 'string', description: 'The text of the post.' },
				message_tags: {
					type: 'array',
					description: 'Profiles tagged in the message.',
					items: {
						type: 'object',
						description: 'A profile tagged in the message.',
						properties: {
							id: { type: 'string', description: 'ID of the tagged profile.' },
							name: { type: 'string', description: 'Text used to tag the profile.' },
							type: {
								type: 'string',
								description:
									'Type of the tagged profile: `user`, `page`, or `group`.',
							},
							offset: {
								type: 'number',
								description:
									'Position of the first character of the tag in the message, in Unicode code points.',
							},
							length: {
								type: 'number',
								description: 'Length of the tag text, in Unicode code points.',
							},
						},
						required: [],
					},
				},
				story: {
					type: 'string',
					description:
						'Text of an automatically generated story, for example when a photo is added.',
				},
				full_picture: {
					type: 'string',
					description:
						'URL of the full-size picture of the post. Resized to 720 px on the largest side when bigger.',
				},
				icon: {
					type: 'string',
					description: 'URL of an icon representing the type of the post.',
				},
				permalink_url: {
					type: 'string',
					description: 'The permanent URL of the post on facebook.com.',
				},
				status_type: {
					type: 'string',
					description:
						'Type of the post, for example `added_photos`, `added_video`, `mobile_status_update`, `shared_story`, or `wall_post`.',
				},
				from: {
					type: 'object',
					description: 'The page, person, or group that created the post.',
					properties: {
						id: { type: 'string', description: 'ID of the page or person.' },
						name: { type: 'string', description: 'Name of the page or person.' },
					},
					required: [],
				},
				attachments: {
					type: 'object',
					description: 'Attachments of the post.',
					properties: {
						data: {
							type: 'array',
							description: 'List of attachments.',
							items: {
								type: 'object',
								description: 'An attachment.',
								properties: {
									description: {
										type: 'string',
										description: 'Description of the attachment.',
									},
									media: {
										type: 'object',
										description: 'Media of the attachment.',
										properties: {
											image: {
												type: 'object',
												description: 'Image of the attachment.',
												properties: {
													height: {
														type: 'number',
														description: 'Image height in pixels.',
													},
													src: {
														type: 'string',
														description: 'URL of the image.',
													},
													width: {
														type: 'number',
														description: 'Image width in pixels.',
													},
												},
												required: [],
											},
											source: {
												type: 'string',
												description:
													'URL of the video, for video attachments.',
											},
										},
										required: [],
									},
									target: {
										type: 'object',
										description: 'The object the attachment links to.',
										properties: {
											id: {
												type: 'string',
												description: 'ID of the target object.',
											},
											url: {
												type: 'string',
												description: 'URL of the target object.',
											},
										},
										required: [],
									},
									type: {
										type: 'string',
										description:
											'Type of the attachment, for example `photo`, `video_inline`, `share`, or `album`.',
									},
									url: { type: 'string', description: 'URL of the attachment.' },
									unshimmed_url: {
										type: 'string',
										description:
											'The original URL of the attachment, without the Facebook redirect.',
									},
									subattachments: {
										type: 'object',
										description:
											'Nested attachments, for example photos of an album post.',
										properties: {
											data: {
												type: 'array',
												description: 'List of nested attachments.',
												items: {
													type: 'object',
													description: 'A nested attachment.',
													properties: {
														description: {
															type: 'string',
															description:
																'Description of the attachment.',
														},
														media: {
															type: 'object',
															description: 'Media of the attachment.',
															properties: {
																image: {
																	type: 'object',
																	description:
																		'Image of the attachment.',
																	properties: {
																		height: {
																			type: 'number',
																			description:
																				'Image height in pixels.',
																		},
																		src: {
																			type: 'string',
																			description:
																				'URL of the image.',
																		},
																		width: {
																			type: 'number',
																			description:
																				'Image width in pixels.',
																		},
																	},
																	required: [],
																},
																source: {
																	type: 'string',
																	description:
																		'URL of the video, for video attachments.',
																},
															},
															required: [],
														},
														target: {
															type: 'object',
															description:
																'The object the attachment links to.',
															properties: {
																id: {
																	type: 'string',
																	description:
																		'ID of the target object.',
																},
																url: {
																	type: 'string',
																	description:
																		'URL of the target object.',
																},
															},
															required: [],
														},
														type: {
															type: 'string',
															description:
																'Type of the attachment, for example `photo`, `video_inline`, `share`, or `album`.',
														},
														url: {
															type: 'string',
															description: 'URL of the attachment.',
														},
														unshimmed_url: {
															type: 'string',
															description:
																'The original URL of the attachment, without the Facebook redirect.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
								},
								required: [],
							},
						},
					},
					required: [],
				},
				is_hidden: {
					type: 'boolean',
					description: 'Whether the post is hidden from the page timeline.',
				},
				is_published: {
					type: 'boolean',
					description: 'Whether a scheduled post was published.',
				},
				is_expired: {
					type: 'boolean',
					description: 'Whether the post has an expiration time that has passed.',
				},
				is_popular: { type: 'boolean', description: 'Whether the post is popular.' },
				is_eligible_for_promotion: {
					type: 'boolean',
					description: 'Whether the post can be promoted.',
				},
				is_spherical: {
					type: 'boolean',
					description: 'Whether the post is a spherical (360°) video post.',
				},
				parent_id: {
					type: 'string',
					description:
						'ID of the parent post, for example the original post where the page was mentioned.',
				},
				privacy: {
					type: 'object',
					description: 'Privacy settings of the post.',
					properties: {
						value: {
							type: 'string',
							description:
								'The privacy setting: `EVERYONE`, `ALL_FRIENDS`, `FRIENDS_OF_FRIENDS`, `CUSTOM`, or `SELF`.',
						},
						description: {
							type: 'string',
							description:
								'Description of the privacy setting, as shown on Facebook.',
						},
						friends: {
							type: 'string',
							description:
								'Which friends can see the post, when `value` is `CUSTOM`.',
						},
						allow: {
							type: 'string',
							description:
								'Comma-separated IDs that can see the post, when `value` is `CUSTOM`.',
						},
						deny: {
							type: 'string',
							description:
								"Comma-separated IDs that can't see the post, when `value` is `CUSTOM`.",
						},
					},
					required: [],
				},
				promotable_id: {
					type: 'string',
					description: 'ID of the post to use when promoting it.',
				},
				shares: {
					type: 'object',
					description: 'Share count of the post.',
					properties: { count: { type: 'number', description: 'Number of shares.' } },
					required: [],
				},
				backdated_time: {
					type: 'string',
					description: 'The backdated time of the post. Empty for regular posts.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'GetPostReactions',
		label: 'Get post reactions',
		description: 'Gets the reactions on a Facebook page post or comment, with the total count.',
		context:
			"---\nname: GetPostReactions\ndescription: Gets the reactions on a Facebook page post or comment, with the total count.\n---\n\nGets the reactions on a page post or comment, with the total count.\n\nThis endpoint gets the access token of the page `page_id` internally and acts as the page when the connected user has a role on it (other than Live Contributor). Otherwise, the connection's user token is used, which works only for content the app can read publicly. Use `ListPages` to find the page ID.\n\n## Notes\n\n- Use `summary.total_count` for the number of reactions. Set `type` to count one reaction type.\n- `data` contains only the caller's own reaction. Facebook doesn't return other people's reactions.\n- The `LIKE` count includes `CARE` reactions.\n\nAPI reference: [Object Reactions](https://developers.facebook.com/docs/graph-api/reference/object/reactions/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						"The ID of the page that owns the object. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.",
				},
				object_id: {
					type: 'string',
					description: 'The ID of a page post (`{page_id}_{post_id}`) or of a comment.',
				},
				type: {
					type: 'string',
					description:
						'Return only reactions of this type. The total count then counts only this type.',
					default: '',
					enum: [
						'',
						'LIKE',
						'LOVE',
						'CARE',
						'WOW',
						'HAHA',
						'SAD',
						'ANGRY',
						'THANKFUL',
						'PRIDE',
						'FIRE',
						'HUNDRED',
						'NONE',
					],
				},
				limit: {
					type: 'number',
					description: 'Maximum number of items to return.',
					minimum: 1,
				},
				after: {
					type: 'string',
					description:
						'Cursor of the next page, from `paging.cursors.after` of the previous response.',
				},
				before: {
					type: 'string',
					description:
						'Cursor of the previous page, from `paging.cursors.before` of the previous response.',
				},
			},
			required: ['page_id', 'object_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'array',
					description:
						"Reactions visible to the caller. Facebook returns only the caller's own reaction; other people's reactions are not returned for privacy reasons.",
					items: {
						type: 'object',
						description: 'A reaction.',
						properties: {
							id: {
								type: 'string',
								description: 'ID of the page or person that reacted.',
							},
							name: {
								type: 'string',
								description: 'Name of the page or person that reacted.',
							},
							type: {
								type: 'string',
								description: 'Type of the reaction, for example `LIKE` or `LOVE`.',
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursors for paging through results.',
					properties: {
						cursors: {
							type: 'object',
							description: 'Paging cursors.',
							properties: {
								before: {
									type: 'string',
									description:
										'Cursor of the start of the page. Pass it as `before` to get the previous page.',
								},
								after: {
									type: 'string',
									description:
										'Cursor of the end of the page. Pass it as `after` to get the next page.',
								},
							},
							required: [],
						},
						next: {
							type: 'string',
							description: 'URL of the next page. Missing on the last page.',
						},
						previous: {
							type: 'string',
							description: 'URL of the previous page. Missing on the first page.',
						},
					},
					required: [],
				},
				summary: {
					type: 'object',
					description: 'Reaction counts.',
					properties: {
						total_count: {
							type: 'number',
							description:
								'Total number of reactions (of the selected `type`, if set).',
						},
						viewer_reaction: {
							type: 'string',
							description: 'The reaction of the caller, or `NONE`.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'GetVideo',
		label: 'Get a video',
		description: 'Gets a Facebook video by its ID.',
		context:
			"---\nname: GetVideo\ndescription: Gets a Facebook video by its ID.\n---\n\nGets a video by its ID, with all its main fields by default.\n\nThis endpoint gets the access token of the page `page_id` internally and acts as the page when the connected user has a role on it (other than Live Contributor). Otherwise, the connection's user token is used, which works only for content the app can read publicly. Use `ListPages` to find the page ID.\n\n## Notes\n\n- If `fields` is empty, all fields except `is_reference_only`, `live_status`, `post_views`, `views`, and `ad_breaks` are requested. Select those explicitly if you need them.\n- `source` is a temporary URL of the video file.\n- Reels are videos too and can be read with this endpoint.\n\nAPI reference: [Get videos](https://developers.facebook.com/docs/video-api/guides/get-videos/), [Video](https://developers.facebook.com/docs/graph-api/reference/video/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						"The ID of the page that owns the video. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.",
				},
				video_id: { type: 'string', description: 'The ID of the video.' },
				fields: {
					type: 'string',
					description:
						'Fields to return for each video. If empty, these fields are returned: `id,title,description,created_time,updated_time,published,permalink_url,picture,source,length,embed_html,embeddable,content_category,content_tags,custom_labels,backdated_time,backdated_time_granularity,scheduled_publish_time,format,from,icon,is_crosspost_video,is_crossposting_eligible,is_episode,is_instagram_eligible,place,post_id,privacy,spherical,status,universal_video_id`.',
					default: '',
					enum: [
						'',
						'id',
						'title',
						'description',
						'created_time',
						'updated_time',
						'published',
						'permalink_url',
						'picture',
						'source',
						'length',
						'embed_html',
						'embeddable',
						'content_category',
						'content_tags',
						'custom_labels',
						'backdated_time',
						'backdated_time_granularity',
						'scheduled_publish_time',
						'format',
						'from',
						'icon',
						'is_crosspost_video',
						'is_crossposting_eligible',
						'is_episode',
						'is_instagram_eligible',
						'place',
						'post_id',
						'privacy',
						'spherical',
						'status',
						'universal_video_id',
						'is_reference_only',
						'live_status',
						'post_views',
						'views',
						'ad_breaks',
					],
				},
			},
			required: ['page_id', 'video_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the video.' },
				description: { type: 'string', description: 'Description of the video.' },
				created_time: { type: 'string', description: 'The time the video was published.' },
				updated_time: {
					type: 'string',
					description: 'The last time the video or its caption was updated.',
				},
				published: { type: 'boolean', description: 'Whether the video is published.' },
				permalink_url: {
					type: 'string',
					description:
						'The permanent path of the video on facebook.com, for example `/{page}/videos/{video_id}/`.',
				},
				picture: { type: 'string', description: 'URL of the thumbnail of the video.' },
				source: {
					type: 'string',
					description: 'URL of the playable video file. Expires after some time.',
				},
				length: { type: 'number', description: 'Duration of the video in seconds.' },
				embed_html: {
					type: 'string',
					description: 'HTML for embedding the video on a website.',
				},
				embeddable: { type: 'boolean', description: 'Whether the video can be embedded.' },
				content_category: {
					type: 'string',
					description:
						'Content category of the video, for example `BUSINESS` or `MUSIC`.',
				},
				content_tags: {
					type: 'array',
					description: 'IDs of tags describing the video content.',
					items: { type: 'string', description: 'A content tag ID.' },
				},
				custom_labels: {
					type: 'array',
					description: 'Labels of the video, shown only in insights.',
					items: { type: 'string', description: 'A custom label.' },
				},
				backdated_time: {
					type: 'string',
					description: 'The backdated time of the video post.',
				},
				backdated_time_granularity: {
					type: 'string',
					description: 'Which part of `backdated_time` is displayed.',
				},
				scheduled_publish_time: {
					type: 'string',
					description: 'When a scheduled video goes live.',
				},
				format: {
					type: 'array',
					description: 'Available formats of the video.',
					items: {
						type: 'object',
						description: 'A format of the video.',
						properties: {
							filter: {
								type: 'string',
								description:
									'Name of the format, for example `130x130` or `native`.',
							},
							embed_html: {
								type: 'string',
								description: 'HTML for embedding the video in this format.',
							},
							height: { type: 'number', description: 'Height in pixels.' },
							width: { type: 'number', description: 'Width in pixels.' },
							picture: {
								type: 'string',
								description: 'URL of the thumbnail in this format.',
							},
						},
						required: [],
					},
				},
				from: {
					type: 'object',
					description: 'The page or person that created the video.',
					properties: {
						id: { type: 'string', description: 'ID.' },
						name: { type: 'string', description: 'Name.' },
					},
					required: [],
				},
				icon: {
					type: 'string',
					description:
						'URL of the icon Facebook shows when the video is published to the feed.',
				},
				is_crosspost_video: {
					type: 'boolean',
					description: 'Whether the video is crossposted from another page.',
				},
				is_crossposting_eligible: {
					type: 'boolean',
					description: 'Whether the video can be crossposted.',
				},
				is_episode: {
					type: 'boolean',
					description: 'Whether the video is an episode of a show.',
				},
				is_instagram_eligible: {
					type: 'boolean',
					description: 'Whether the video can be shared to Instagram.',
				},
				is_reference_only: {
					type: 'boolean',
					description: 'Whether the video is used only as a copyright reference.',
				},
				live_status: {
					type: 'string',
					description: 'Status of a live video, for example `LIVE` or `VOD`.',
				},
				place: {
					type: 'object',
					description: 'The place (location page) associated with the object.',
					properties: {
						id: { type: 'string', description: 'ID of the place page.' },
						name: { type: 'string', description: 'Name of the place.' },
						location: {
							type: 'object',
							description: 'Location of the place.',
							properties: {
								city: { type: 'string', description: 'City.' },
								country: { type: 'string', description: 'Country.' },
								latitude: { type: 'number', description: 'Latitude.' },
								longitude: { type: 'number', description: 'Longitude.' },
								street: { type: 'string', description: 'Street address.' },
								zip: { type: 'string', description: 'Postal code.' },
							},
							required: [],
						},
					},
					required: [],
				},
				post_id: { type: 'string', description: 'ID of the post created for the video.' },
				post_views: { type: 'number', description: 'Number of views of the video post.' },
				views: { type: 'number', description: 'Number of views of the video.' },
				privacy: {
					type: 'object',
					description: 'Privacy settings.',
					properties: {
						value: {
							type: 'string',
							description:
								'The privacy setting: `EVERYONE`, `ALL_FRIENDS`, `FRIENDS_OF_FRIENDS`, `CUSTOM`, or `SELF`.',
						},
						description: {
							type: 'string',
							description:
								'Description of the privacy setting, as shown on Facebook.',
						},
						friends: {
							type: 'string',
							description:
								'Which friends can see the object, when `value` is `CUSTOM`.',
						},
						allow: {
							type: 'string',
							description:
								'Comma-separated IDs that can see the object, when `value` is `CUSTOM`.',
						},
						deny: {
							type: 'string',
							description:
								"Comma-separated IDs that can't see the object, when `value` is `CUSTOM`.",
						},
					},
					required: [],
				},
				spherical: { type: 'boolean', description: 'Whether the video is a 360° video.' },
				status: {
					type: 'object',
					description: 'Upload, processing, and publishing status of the video.',
					properties: {
						video_status: {
							type: 'string',
							description:
								'Overall status: `uploading`, `upload_complete`, `upload_failed`, `processing`, `ready`, `expired`, or `error`.',
						},
						uploading_phase: {
							type: 'object',
							description: 'Progress of the upload.',
							properties: {
								status: {
									type: 'string',
									description:
										'Status of the uploading phase: `not_started`, `in_progress`, `complete`, or `error`.',
								},
								bytes_transfered: {
									type: 'number',
									description:
										'Number of bytes of the video file uploaded so far.',
								},
								source_file_size: {
									type: 'number',
									description: 'Size of the video file in bytes.',
								},
								errors: {
									type: 'array',
									description: 'Errors of the upload.',
									items: {
										type: 'object',
										description: 'An upload error.',
										properties: {
											message: {
												type: 'string',
												description: 'Error message.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						processing_phase: {
							type: 'object',
							description:
								'Progress of processing, such as encoding and thumbnail generation.',
							properties: {
								status: {
									type: 'string',
									description:
										'Status of the processing phase: `not_started`, `in_progress`, `complete`, or `error`.',
								},
								error: {
									type: 'object',
									description: 'Details of a processing error.',
									properties: {
										message: { type: 'string', description: 'Error message.' },
									},
									required: [],
								},
							},
							required: [],
						},
						publishing_phase: {
							type: 'object',
							description: 'Progress of publishing to the page.',
							properties: {
								status: {
									type: 'string',
									description:
										'Status of the publishing phase: `not_started`, `in_progress`, `complete`, or `error`.',
								},
								publish_status: {
									type: 'string',
									description:
										'Publish state: `published`, `scheduled`, `draft`, or `error`.',
								},
								publish_time: {
									type: 'string',
									description: 'Actual or scheduled publish time.',
								},
								error: {
									type: 'object',
									description: 'Details of a publishing error.',
									properties: {
										message: { type: 'string', description: 'Error message.' },
									},
									required: [],
								},
							},
							required: [],
						},
					},
					required: [],
				},
				universal_video_id: {
					type: 'string',
					description: "The publisher's asset management code of the video.",
				},
				ad_breaks: {
					type: 'array',
					description: 'Time offsets of ad breaks, in milliseconds.',
					items: { type: 'number', description: 'An ad break offset in milliseconds.' },
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'GetVideoStatus',
		label: 'Get a video status',
		description:
			'Gets the upload, processing, and publishing status of a Facebook video or reel.',
		context:
			"---\nname: GetVideoStatus\ndescription: Gets the upload, processing, and publishing status of a Facebook video or reel.\n---\n\nGets the upload, processing, and publishing status of a video or reel.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- Use it after `UploadReelFromUrl` or `UploadVideo` to check whether Facebook finished processing the video.\n- `video_status` = `expired` means the upload session expired. Start again with `StartReelUpload`.\n- `video_status` = `upload_failed` means the upload failed. Retry the upload.\n\nAPI reference: [Reels Publishing API](https://developers.facebook.com/docs/video-api/guides/reels-publishing/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page that owns the video. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				video_id: { type: 'string', description: 'The ID of the video or reel.' },
			},
			required: ['page_id', 'video_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the video.' },
				status: {
					type: 'object',
					description: 'Upload, processing, and publishing status of the video.',
					properties: {
						video_status: {
							type: 'string',
							description:
								'Overall status: `uploading`, `upload_complete`, `upload_failed`, `processing`, `ready`, `expired`, or `error`.',
						},
						uploading_phase: {
							type: 'object',
							description: 'Progress of the upload.',
							properties: {
								status: {
									type: 'string',
									description:
										'Status of the uploading phase: `not_started`, `in_progress`, `complete`, or `error`.',
								},
								bytes_transfered: {
									type: 'number',
									description:
										'Number of bytes of the video file uploaded so far.',
								},
								source_file_size: {
									type: 'number',
									description: 'Size of the video file in bytes.',
								},
								errors: {
									type: 'array',
									description: 'Errors of the upload.',
									items: {
										type: 'object',
										description: 'An upload error.',
										properties: {
											message: {
												type: 'string',
												description: 'Error message.',
											},
										},
										required: [],
									},
								},
							},
							required: [],
						},
						processing_phase: {
							type: 'object',
							description:
								'Progress of processing, such as encoding and thumbnail generation.',
							properties: {
								status: {
									type: 'string',
									description:
										'Status of the processing phase: `not_started`, `in_progress`, `complete`, or `error`.',
								},
								error: {
									type: 'object',
									description: 'Details of a processing error.',
									properties: {
										message: { type: 'string', description: 'Error message.' },
									},
									required: [],
								},
							},
							required: [],
						},
						publishing_phase: {
							type: 'object',
							description: 'Progress of publishing to the page.',
							properties: {
								status: {
									type: 'string',
									description:
										'Status of the publishing phase: `not_started`, `in_progress`, `complete`, or `error`.',
								},
								publish_status: {
									type: 'string',
									description:
										'Publish state: `published`, `scheduled`, `draft`, or `error`.',
								},
								publish_time: {
									type: 'string',
									description: 'Actual or scheduled publish time.',
								},
								error: {
									type: 'object',
									description: 'Details of a publishing error.',
									properties: {
										message: { type: 'string', description: 'Error message.' },
									},
									required: [],
								},
							},
							required: [],
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'LikeObject',
		label: 'Like an object',
		description: 'Likes a page post, comment, photo, or album as the page.',
		context:
			"---\nname: LikeObject\ndescription: Likes a Page post, comment, photo, or album as the Page.\n---\n\nLikes an object as the Page.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- The object must not already be liked by the Page. If the Page has already reacted (for example, wow or sad), the like succeeds but the reaction does not change.\n- Liking a Page review is not supported.\n\nAPI reference: [Object likes](https://developers.facebook.com/docs/graph-api/reference/object/likes/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page to like the object as. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				object_id: {
					type: 'string',
					description:
						'The ID of the object: a page post (`{page_id}_{post_id}`), a comment, a photo, or an album.',
				},
			},
			required: ['page_id', 'object_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'ListComments',
		label: 'List comments',
		description:
			'Lists the comments on a Facebook page post, photo, video, album, or the replies to a comment.',
		context:
			"---\nname: ListComments\ndescription: Lists the comments on a Facebook page post, photo, video, album, or the replies to a comment.\n---\n\nLists the comments on a page post, photo, video, album, or the replies to a comment. Returns one page of results; use the `paging` cursors to get more.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- With a user access token, Facebook returns empty `data` for posts, photos, videos, and albums, so a Page access token is required.\n- Comment IDs are returned only if the person who granted the token can perform the MODERATE task on the page.\n- `filter` = `toplevel` (default) returns top-level comments; `stream` returns all comments including replies.\n\nAPI reference: [Object Comments](https://developers.facebook.com/docs/graph-api/reference/object/comments/)\n",
		accounts: {
			facebook: {
				scope: ['pages_manage_engagement', 'pages_read_engagement', 'business_management'],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page that owns the object. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				object_id: {
					type: 'string',
					description:
						'The ID of the object: a page post (`{page_id}_{post_id}`), a photo, a video, an album, or a comment (to list replies).',
				},
				filter: {
					type: 'string',
					description:
						'Which comments to return. `toplevel` (default) returns top-level comments; `stream` returns all comments including replies, in chronological order.',
					default: '',
					enum: ['', 'toplevel', 'stream'],
				},
				order: {
					type: 'string',
					description: 'Order of the comments.',
					default: '',
					enum: ['', 'chronological', 'reverse_chronological'],
				},
				since: { type: 'string', description: 'Return comments created after this time.' },
				summary: {
					type: 'boolean',
					description:
						'Whether to return the `summary` with the total comment count and order.',
				},
				fields: {
					type: 'string',
					description:
						'Fields to return for each comment. If empty, these fields are returned: `id,message,attachment,comment_count,created_time,object,parent,like_count,can_comment,can_remove,can_hide,can_like,from,user_likes`.',
					default: '',
					enum: [
						'',
						'id',
						'message',
						'created_time',
						'from',
						'attachment',
						'object',
						'parent',
						'can_comment',
						'can_hide',
						'can_like',
						'can_remove',
						'can_reply_privately',
						'comment_count',
						'like_count',
						'is_hidden',
						'is_private',
						'live_broadcast_timestamp',
						'private_reply_conversation',
						'user_likes',
					],
				},
				limit: {
					type: 'number',
					description: 'Maximum number of items to return.',
					minimum: 1,
				},
				after: {
					type: 'string',
					description:
						'Cursor of the next page, from `paging.cursors.after` of the previous response.',
				},
				before: {
					type: 'string',
					description:
						'Cursor of the previous page, from `paging.cursors.before` of the previous response.',
				},
			},
			required: ['page_id', 'object_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'array',
					description: 'List of comments.',
					items: {
						type: 'object',
						description: 'A comment.',
						properties: {
							id: { type: 'string', description: 'The comment ID.' },
							message: { type: 'string', description: 'The comment text.' },
							created_time: {
								type: 'string',
								description: 'The time the comment was created.',
							},
							from: {
								type: 'object',
								description: 'The person or Page that made the comment.',
								properties: {
									id: {
										type: 'string',
										description:
											'The Page-scoped ID of the person, or the ID of the Page.',
									},
									name: {
										type: 'string',
										description: 'The name of the person or Page.',
									},
								},
								required: [],
							},
							attachment: {
								type: 'object',
								description:
									'Link, photo, sticker, or animated GIF attached to the comment.',
								properties: {
									description: {
										type: 'string',
										description: 'Description of the attachment.',
									},
									media: {
										type: 'object',
										description: 'Media of the attachment.',
										properties: {
											image: {
												type: 'object',
												description: 'Image of the attachment.',
												properties: {
													height: {
														type: 'number',
														description: 'Image height in pixels.',
													},
													src: {
														type: 'string',
														description: 'URL of the image.',
													},
													width: {
														type: 'number',
														description: 'Image width in pixels.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									target: {
										type: 'object',
										description: 'The object the attachment links to.',
										properties: {
											id: {
												type: 'string',
												description: 'ID of the target object.',
											},
											url: {
												type: 'string',
												description: 'URL of the target object.',
											},
										},
										required: [],
									},
									type: {
										type: 'string',
										description:
											'Type of the attachment, for example `photo`, `animated_image_share`, or `sticker`.',
									},
									url: { type: 'string', description: 'URL of the attachment.' },
									subattachments: {
										type: 'object',
										description: 'Nested attachments.',
										properties: {
											data: {
												type: 'array',
												description: 'List of nested attachments.',
												items: {
													type: 'object',
													description: 'A nested attachment.',
													properties: {
														description: {
															type: 'string',
															description:
																'Description of the attachment.',
														},
														media: {
															type: 'object',
															description: 'Media of the attachment.',
															properties: {
																image: {
																	type: 'object',
																	description:
																		'Image of the attachment.',
																	properties: {
																		height: {
																			type: 'number',
																			description:
																				'Image height in pixels.',
																		},
																		src: {
																			type: 'string',
																			description:
																				'URL of the image.',
																		},
																		width: {
																			type: 'number',
																			description:
																				'Image width in pixels.',
																		},
																	},
																	required: [],
																},
															},
															required: [],
														},
														target: {
															type: 'object',
															description:
																'The object the attachment links to.',
															properties: {
																id: {
																	type: 'string',
																	description:
																		'ID of the target object.',
																},
																url: {
																	type: 'string',
																	description:
																		'URL of the target object.',
																},
															},
															required: [],
														},
														type: {
															type: 'string',
															description:
																'Type of the attachment, for example `photo`, `animated_image_share`, or `sticker`.',
														},
														url: {
															type: 'string',
															description: 'URL of the attachment.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
								},
								required: [],
							},
							object: {
								type: 'object',
								description:
									'The object (post, photo, or video) the comment was made on.',
								properties: {
									id: { type: 'string', description: 'ID of the object.' },
									message: {
										type: 'string',
										description: 'Text of the object, when it has one.',
									},
									created_time: {
										type: 'string',
										description: 'The time the object was created.',
									},
								},
								required: [],
							},
							parent: {
								type: 'object',
								description: 'For comment replies, the comment this is a reply to.',
								properties: {
									id: {
										type: 'string',
										description: 'ID of the parent comment.',
									},
									message: {
										type: 'string',
										description: 'Text of the parent comment.',
									},
									created_time: {
										type: 'string',
										description: 'The time the parent comment was created.',
									},
									from: {
										type: 'object',
										description:
											'The person or Page that made the parent comment.',
										properties: {
											id: {
												type: 'string',
												description:
													'The Page-scoped ID of the person, or the ID of the Page.',
											},
											name: {
												type: 'string',
												description: 'The name of the person or Page.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							can_comment: {
								type: 'boolean',
								description: 'Whether the viewer can reply to this comment.',
							},
							can_hide: {
								type: 'boolean',
								description: 'Whether the viewer can hide this comment.',
							},
							can_like: {
								type: 'boolean',
								description: 'Whether the viewer can like this comment.',
							},
							can_remove: {
								type: 'boolean',
								description: 'Whether the viewer can remove this comment.',
							},
							can_reply_privately: {
								type: 'boolean',
								description:
									'Whether the Page can send a private reply to this comment.',
							},
							comment_count: {
								type: 'number',
								description: 'Number of replies to this comment.',
							},
							like_count: {
								type: 'number',
								description: 'Number of times this comment was liked.',
							},
							is_hidden: {
								type: 'boolean',
								description: 'Whether the comment is hidden.',
							},
							is_private: {
								type: 'boolean',
								description: 'Whether the comment is a private comment.',
							},
							live_broadcast_timestamp: {
								type: 'number',
								description:
									'Time the comment was made on a live video, in seconds from the start of the broadcast.',
							},
							private_reply_conversation: {
								type: 'object',
								description:
									'If a private reply was sent to this comment, the conversation between the Page and the comment author.',
								properties: {
									id: { type: 'string', description: 'ID of the conversation.' },
								},
								required: [],
							},
							user_likes: {
								type: 'boolean',
								description: 'Whether the viewer has liked this comment.',
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursors for paging through results.',
					properties: {
						cursors: {
							type: 'object',
							description: 'Paging cursors.',
							properties: {
								before: {
									type: 'string',
									description:
										'Cursor of the start of the page. Pass it as `before` to get the previous page.',
								},
								after: {
									type: 'string',
									description:
										'Cursor of the end of the page. Pass it as `after` to get the next page.',
								},
							},
							required: [],
						},
						next: {
							type: 'string',
							description: 'URL of the next page. Missing on the last page.',
						},
						previous: {
							type: 'string',
							description: 'URL of the previous page. Missing on the first page.',
						},
					},
					required: [],
				},
				summary: {
					type: 'object',
					description: 'Comment metadata. Returned when `summary` is `true`.',
					properties: {
						order: {
							type: 'string',
							description:
								'Order of the comments: `chronological` or `reverse_chronological`.',
						},
						total_count: {
							type: 'number',
							description:
								'Number of comments. With `filter` = `stream` it includes replies. Can be higher than the number of returned comments because of privacy or deletion.',
						},
						can_comment: {
							type: 'boolean',
							description: 'Whether the caller can comment on the object.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'ListPagePosts',
		label: 'List page posts',
		description: 'Lists posts published by a Facebook page.',
		context:
			"---\nname: ListPagePosts\ndescription: Lists posts published by a Facebook page, with cursor-based paging.\n---\n\nLists the posts published by a Facebook page, newest first. Returns one page of results; use the `paging` cursors to get more.\n\n## Token\n\nThe endpoint gets the access token of the page `page_id` internally.\n\n- Pages the connected user has a role on (other than Live Contributor): the page's access token is used. User information in the posts is returned only with it.\n- Other public pages: the connection's user token is used. This needs the Page Public Content Access feature for the app.\n\n## Notes\n\n- Only posts published by the page itself are returned. Posts by visitors and posts where the page is tagged are not.\n- `limit` can be at most 100. Facebook returns about 600 ranked published posts per year.\n- Expired posts can't be read.\n- Reels are not listed here.\n\nAPI reference: [Page Feed – Reading](https://developers.facebook.com/docs/graph-api/reference/page/feed/)\n",
		accounts: {
			facebook: {
				scope: ['pages_read_engagement', 'pages_read_user_content', 'pages_show_list'],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						"The ID of the page whose posts to list. For a page the connected user has a role on (other than Live Contributor), the page's access token is used, which also returns user information in the posts. For other public pages, the connection's user token is used. Get the ID of your pages with `ListPages`.",
				},
				fields: {
					type: 'string',
					description:
						'Fields to return for each post. If empty, Facebook returns its default fields.',
					default: '',
					enum: [
						'',
						'id',
						'created_time',
						'updated_time',
						'message',
						'message_tags',
						'story',
						'full_picture',
						'icon',
						'permalink_url',
						'status_type',
						'from',
						'attachments',
						'is_hidden',
						'is_published',
						'is_expired',
						'is_popular',
						'is_eligible_for_promotion',
						'is_spherical',
						'parent_id',
						'privacy',
						'promotable_id',
						'shares',
						'backdated_time',
					],
				},
				since: { type: 'string', description: 'Return posts created after this time.' },
				until: { type: 'string', description: 'Return posts created before this time.' },
				limit: {
					type: 'number',
					description: 'Maximum number of posts to return. Maximum is 100.',
					minimum: 1,
					maximum: 100,
				},
				after: {
					type: 'string',
					description:
						'Cursor of the next page, from `paging.cursors.after` of the previous response.',
				},
				before: {
					type: 'string',
					description:
						'Cursor of the previous page, from `paging.cursors.before` of the previous response.',
				},
			},
			required: ['page_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'array',
					description: 'List of posts.',
					items: {
						type: 'object',
						description: 'A page post.',
						properties: {
							id: {
								type: 'string',
								description:
									'The ID of the post, in the `{page_id}_{post_id}` format.',
							},
							created_time: {
								type: 'string',
								description: 'The time the post was published.',
							},
							updated_time: {
								type: 'string',
								description:
									'The time the post was last updated, including new comments.',
							},
							message: { type: 'string', description: 'The text of the post.' },
							message_tags: {
								type: 'array',
								description: 'Profiles tagged in the message.',
								items: {
									type: 'object',
									description: 'A profile tagged in the message.',
									properties: {
										id: {
											type: 'string',
											description: 'ID of the tagged profile.',
										},
										name: {
											type: 'string',
											description: 'Text used to tag the profile.',
										},
										type: {
											type: 'string',
											description:
												'Type of the tagged profile: `user`, `page`, or `group`.',
										},
										offset: {
											type: 'number',
											description:
												'Position of the first character of the tag in the message, in Unicode code points.',
										},
										length: {
											type: 'number',
											description:
												'Length of the tag text, in Unicode code points.',
										},
									},
									required: [],
								},
							},
							story: {
								type: 'string',
								description:
									'Text of an automatically generated story, for example when a photo is added.',
							},
							full_picture: {
								type: 'string',
								description:
									'URL of the full-size picture of the post. Resized to 720 px on the largest side when bigger.',
							},
							icon: {
								type: 'string',
								description: 'URL of an icon representing the type of the post.',
							},
							permalink_url: {
								type: 'string',
								description: 'The permanent URL of the post on facebook.com.',
							},
							status_type: {
								type: 'string',
								description:
									'Type of the post, for example `added_photos`, `added_video`, `mobile_status_update`, `shared_story`, or `wall_post`.',
							},
							from: {
								type: 'object',
								description: 'The page, person, or group that created the post.',
								properties: {
									id: {
										type: 'string',
										description: 'ID of the page or person.',
									},
									name: {
										type: 'string',
										description: 'Name of the page or person.',
									},
								},
								required: [],
							},
							attachments: {
								type: 'object',
								description: 'Attachments of the post.',
								properties: {
									data: {
										type: 'array',
										description: 'List of attachments.',
										items: {
											type: 'object',
											description: 'An attachment.',
											properties: {
												description: {
													type: 'string',
													description: 'Description of the attachment.',
												},
												media: {
													type: 'object',
													description: 'Media of the attachment.',
													properties: {
														image: {
															type: 'object',
															description: 'Image of the attachment.',
															properties: {
																height: {
																	type: 'number',
																	description:
																		'Image height in pixels.',
																},
																src: {
																	type: 'string',
																	description:
																		'URL of the image.',
																},
																width: {
																	type: 'number',
																	description:
																		'Image width in pixels.',
																},
															},
															required: [],
														},
														source: {
															type: 'string',
															description:
																'URL of the video, for video attachments.',
														},
													},
													required: [],
												},
												target: {
													type: 'object',
													description:
														'The object the attachment links to.',
													properties: {
														id: {
															type: 'string',
															description: 'ID of the target object.',
														},
														url: {
															type: 'string',
															description:
																'URL of the target object.',
														},
													},
													required: [],
												},
												type: {
													type: 'string',
													description:
														'Type of the attachment, for example `photo`, `video_inline`, `share`, or `album`.',
												},
												url: {
													type: 'string',
													description: 'URL of the attachment.',
												},
												unshimmed_url: {
													type: 'string',
													description:
														'The original URL of the attachment, without the Facebook redirect.',
												},
												subattachments: {
													type: 'object',
													description:
														'Nested attachments, for example photos of an album post.',
													properties: {
														data: {
															type: 'array',
															description:
																'List of nested attachments.',
															items: {
																type: 'object',
																description: 'A nested attachment.',
																properties: {
																	description: {
																		type: 'string',
																		description:
																			'Description of the attachment.',
																	},
																	media: {
																		type: 'object',
																		description:
																			'Media of the attachment.',
																		properties: {
																			image: {
																				type: 'object',
																				description:
																					'Image of the attachment.',
																				properties: {
																					height: {
																						type: 'number',
																						description:
																							'Image height in pixels.',
																					},
																					src: {
																						type: 'string',
																						description:
																							'URL of the image.',
																					},
																					width: {
																						type: 'number',
																						description:
																							'Image width in pixels.',
																					},
																				},
																				required: [],
																			},
																			source: {
																				type: 'string',
																				description:
																					'URL of the video, for video attachments.',
																			},
																		},
																		required: [],
																	},
																	target: {
																		type: 'object',
																		description:
																			'The object the attachment links to.',
																		properties: {
																			id: {
																				type: 'string',
																				description:
																					'ID of the target object.',
																			},
																			url: {
																				type: 'string',
																				description:
																					'URL of the target object.',
																			},
																		},
																		required: [],
																	},
																	type: {
																		type: 'string',
																		description:
																			'Type of the attachment, for example `photo`, `video_inline`, `share`, or `album`.',
																	},
																	url: {
																		type: 'string',
																		description:
																			'URL of the attachment.',
																	},
																	unshimmed_url: {
																		type: 'string',
																		description:
																			'The original URL of the attachment, without the Facebook redirect.',
																	},
																},
																required: [],
															},
														},
													},
													required: [],
												},
											},
											required: [],
										},
									},
								},
								required: [],
							},
							is_hidden: {
								type: 'boolean',
								description: 'Whether the post is hidden from the page timeline.',
							},
							is_published: {
								type: 'boolean',
								description: 'Whether a scheduled post was published.',
							},
							is_expired: {
								type: 'boolean',
								description:
									'Whether the post has an expiration time that has passed.',
							},
							is_popular: {
								type: 'boolean',
								description: 'Whether the post is popular.',
							},
							is_eligible_for_promotion: {
								type: 'boolean',
								description: 'Whether the post can be promoted.',
							},
							is_spherical: {
								type: 'boolean',
								description: 'Whether the post is a spherical (360°) video post.',
							},
							parent_id: {
								type: 'string',
								description:
									'ID of the parent post, for example the original post where the page was mentioned.',
							},
							privacy: {
								type: 'object',
								description: 'Privacy settings of the post.',
								properties: {
									value: {
										type: 'string',
										description:
											'The privacy setting: `EVERYONE`, `ALL_FRIENDS`, `FRIENDS_OF_FRIENDS`, `CUSTOM`, or `SELF`.',
									},
									description: {
										type: 'string',
										description:
											'Description of the privacy setting, as shown on Facebook.',
									},
									friends: {
										type: 'string',
										description:
											'Which friends can see the post, when `value` is `CUSTOM`.',
									},
									allow: {
										type: 'string',
										description:
											'Comma-separated IDs that can see the post, when `value` is `CUSTOM`.',
									},
									deny: {
										type: 'string',
										description:
											"Comma-separated IDs that can't see the post, when `value` is `CUSTOM`.",
									},
								},
								required: [],
							},
							promotable_id: {
								type: 'string',
								description: 'ID of the post to use when promoting it.',
							},
							shares: {
								type: 'object',
								description: 'Share count of the post.',
								properties: {
									count: { type: 'number', description: 'Number of shares.' },
								},
								required: [],
							},
							backdated_time: {
								type: 'string',
								description:
									'The backdated time of the post. Empty for regular posts.',
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursors for paging through results.',
					properties: {
						cursors: {
							type: 'object',
							description: 'Paging cursors.',
							properties: {
								before: {
									type: 'string',
									description:
										'Cursor of the start of the page. Pass it as `before` to get the previous page.',
								},
								after: {
									type: 'string',
									description:
										'Cursor of the end of the page. Pass it as `after` to get the next page.',
								},
							},
							required: [],
						},
						next: {
							type: 'string',
							description: 'URL of the next page. Missing on the last page.',
						},
						previous: {
							type: 'string',
							description: 'URL of the previous page. Missing on the first page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'ListPages',
		label: 'List pages',
		description: 'Returns the Facebook pages the connected user has a role on.',
		context:
			"---\nname: ListPages\ndescription: Returns the Facebook Pages the connected user has a role on.\n---\n\nReturns the Facebook Pages that the connected user owns or can perform tasks on. Uses the connection's user token; no Page access token is needed.\n\nUse this endpoint to find the `id` of a Page, then pass it as `page_id` to the comment, like, post, photo, and video endpoints. They get the Page access token internally.\n\n## Notes\n\n- Select the fields to return with `fields`. `tasks` shows what the user can do on each Page (for example `MODERATE` or `CREATE_CONTENT`), which decides whether the Page-level endpoints will succeed.\n- Results are paginated. To get the next page, call again with `after` set to `paging.cursors.after` from the previous response. When `paging.next` is missing, there are no more Pages.\n- Page access tokens are never returned. A response that contains an access token is rejected with an error.\n\nAPI reference: [User Accounts](https://developers.facebook.com/docs/graph-api/reference/user/accounts/)\n",
		accounts: { facebook: { scope: ['pages_show_list', 'business_management'] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				fields: {
					type: 'string',
					description:
						'Page fields to return for each page. If left empty, only the page ID and name are returned.',
					default: '',
					enum: [
						'',
						'id',
						'name',
						'category',
						'category_list',
						'tasks',
						'location',
						'username',
						'link',
						'about',
						'fan_count',
						'followers_count',
						'picture',
						'website',
						'is_published',
						'verification_status',
					],
				},
				is_place: {
					type: 'boolean',
					description:
						'If set, returns only pages that are places (`true`) or only pages that are not places (`false`).',
				},
				is_promotable: {
					type: 'boolean',
					description:
						'If set, returns only pages that can be promoted (`true`) or only pages that cannot be promoted (`false`).',
				},
				ad_id: {
					type: 'string',
					description: 'Returns only pages associated with this ad ID.',
				},
				summary: {
					type: 'string',
					description:
						'Set to `total_count` to include the total number of pages in the `summary` output.',
					default: '',
					enum: ['', 'total_count'],
				},
				limit: {
					type: 'number',
					description: 'Maximum number of pages to return in one response.',
				},
				after: {
					type: 'string',
					description:
						'Cursor that points to the end of the page of data that has been returned. Use `paging.cursors.after` from the previous response to get the next page.',
				},
				before: {
					type: 'string',
					description:
						'Cursor that points to the start of the page of data that has been returned. Use `paging.cursors.before` from the previous response to get the previous page.',
				},
			},
			required: [],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'array',
					description: 'Pages the connected user has a role on.',
					items: {
						type: 'object',
						description: 'A Facebook Page.',
						properties: {
							id: {
								type: 'string',
								description:
									'The ID of the Page. Use it as `page_id` in the other Facebook Pages endpoints.',
							},
							name: { type: 'string', description: 'The name of the Page.' },
							category: {
								type: 'string',
								description: 'The main category of the Page.',
							},
							category_list: {
								type: 'array',
								description: 'All categories of the Page.',
								items: {
									type: 'object',
									description: 'A Page category.',
									properties: {
										id: {
											type: 'string',
											description: 'The ID of the category.',
										},
										name: {
											type: 'string',
											description: 'The name of the category.',
										},
									},
									required: [],
								},
							},
							tasks: {
								type: 'array',
								description:
									'The tasks the connected user can perform on the Page, for example `MODERATE`, `CREATE_CONTENT`, `MANAGE`.',
								items: {
									type: 'string',
									description: 'A task the user can perform on the Page.',
								},
							},
							location: {
								type: 'object',
								description: 'The location of the Page.',
								properties: {
									street: { type: 'string', description: 'Street address.' },
									city: { type: 'string', description: 'City.' },
									state: { type: 'string', description: 'State or region.' },
									country: { type: 'string', description: 'Country.' },
									zip: { type: 'string', description: 'Postal code.' },
									latitude: {
										type: 'number',
										description: 'Latitude of the location.',
									},
									longitude: {
										type: 'number',
										description: 'Longitude of the location.',
									},
								},
								required: [],
							},
							username: { type: 'string', description: 'The username of the Page.' },
							link: {
								type: 'string',
								description: 'The URL of the Page on Facebook.',
							},
							about: {
								type: 'string',
								description: 'Short description of the Page.',
							},
							fan_count: {
								type: 'number',
								description: 'The number of users who like the Page.',
							},
							followers_count: {
								type: 'number',
								description: 'The number of users who follow the Page.',
							},
							picture: {
								type: 'object',
								description: 'The profile picture of the Page.',
								properties: {
									data: {
										type: 'object',
										description: 'Profile picture details.',
										properties: {
											url: {
												type: 'string',
												description: 'URL of the picture.',
											},
											height: {
												type: 'number',
												description: 'Picture height in pixels.',
											},
											width: {
												type: 'number',
												description: 'Picture width in pixels.',
											},
											is_silhouette: {
												type: 'boolean',
												description:
													'Whether the picture is the default silhouette.',
											},
										},
										required: [],
									},
								},
								required: [],
							},
							website: {
								type: 'string',
								description: 'The website of the Page, as entered by the Page.',
							},
							is_published: {
								type: 'boolean',
								description: 'Whether the Page is published.',
							},
							verification_status: {
								type: 'string',
								description: 'The verification status of the Page.',
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Pagination information.',
					properties: {
						cursors: {
							type: 'object',
							description: 'Pagination cursors.',
							properties: {
								before: {
									type: 'string',
									description:
										'Cursor for the previous page. Pass it as `before`.',
								},
								after: {
									type: 'string',
									description: 'Cursor for the next page. Pass it as `after`.',
								},
							},
							required: [],
						},
						next: {
							type: 'string',
							description: 'URL of the next page. Missing on the last page.',
						},
						previous: {
							type: 'string',
							description: 'URL of the previous page. Missing on the first page.',
						},
					},
					required: [],
				},
				summary: {
					type: 'object',
					description: 'Aggregated information. Returned only when `summary` is set.',
					properties: {
						total_count: {
							type: 'number',
							description: 'Total number of Pages the user has a role on.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'ListPhotos',
		label: 'List photos',
		description: 'Lists the photos of a Facebook page or album.',
		context:
			"---\nname: ListPhotos\ndescription: Lists the photos of a Facebook page or album.\n---\n\nLists the photos of a Facebook page or album. Returns one page of results; use the `paging` cursors to get more.\n\nThis endpoint gets the access token of the page `page_id` internally and acts as the page when the connected user has a role on it (other than Live Contributor). Otherwise, the connection's user token is used, which works only for content the app can read publicly. Use `ListPages` to find the page ID.\n\n## Notes\n\n- For a page, `type` defaults to `profile` (profile pictures). Use `uploaded` for all photos uploaded by the page, or `tagged` for photos the page is tagged in.\n- For an album, `type` is ignored and all photos of the album are returned.\n- Reading the photos of a page you manage needs a Page access token from a person who can perform the MODERATE task.\n\nAPI reference: [Page Photos](https://developers.facebook.com/docs/graph-api/reference/page/photos/), [Album Photos](https://developers.facebook.com/docs/graph-api/reference/album/photos/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						"The ID of the page that owns the photos or the album. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.",
				},
				page_or_album_id: {
					type: 'string',
					description:
						'The ID of a page or of an album. Use an album ID to list the photos of one album.',
				},
				type: {
					type: 'string',
					description:
						'Which photos of a page to return. Default is `profile`. Ignored for albums.',
					default: '',
					enum: ['', 'uploaded', 'profile'],
				},
				biz_tag_id: {
					type: 'number',
					description: 'The business tag ID to filter photos.',
				},
				business_id: {
					type: 'string',
					description:
						'The ID of a business. Facebook uses it to support filters such as recently used photos.',
				},
				fields: {
					type: 'string',
					description:
						'Fields to return for each photo. If empty, these fields are returned: `id,name,alt_text,alt_text_custom,album,created_time,updated_time,backdated_time,can_backdate,can_delete,can_tag,from,height,width,icon,images,webp_images,link,picture,place,page_story_id,name_tags`.',
					default: '',
					enum: [
						'',
						'id',
						'name',
						'alt_text',
						'alt_text_custom',
						'album',
						'created_time',
						'updated_time',
						'backdated_time',
						'can_backdate',
						'can_delete',
						'can_tag',
						'from',
						'height',
						'width',
						'icon',
						'images',
						'webp_images',
						'link',
						'picture',
						'place',
						'page_story_id',
						'name_tags',
						'backdated_time_granularity',
						'target',
					],
				},
				limit: {
					type: 'number',
					description: 'Maximum number of items to return.',
					minimum: 1,
				},
				after: {
					type: 'string',
					description:
						'Cursor of the next page, from `paging.cursors.after` of the previous response.',
				},
				before: {
					type: 'string',
					description:
						'Cursor of the previous page, from `paging.cursors.before` of the previous response.',
				},
			},
			required: ['page_id', 'page_or_album_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'array',
					description: 'List of photos.',
					items: {
						type: 'object',
						description: 'A photo.',
						properties: {
							id: { type: 'string', description: 'The ID of the photo.' },
							name: { type: 'string', description: 'The caption of the photo.' },
							alt_text: {
								type: 'string',
								description:
									'Automatically generated alternative text of the photo.',
							},
							alt_text_custom: {
								type: 'string',
								description: 'Alternative text of the photo provided by the user.',
							},
							album: {
								type: 'object',
								description: 'The album the photo is in.',
								properties: {
									id: { type: 'string', description: 'ID.' },
									name: { type: 'string', description: 'Name.' },
								},
								required: [],
							},
							created_time: {
								type: 'string',
								description: 'The time the photo was published.',
							},
							updated_time: {
								type: 'string',
								description: 'The last time the photo was updated.',
							},
							backdated_time: {
								type: 'string',
								description: 'The backdated creation time of the photo.',
							},
							backdated_time_granularity: {
								type: 'string',
								description: 'Which part of `backdated_time` is displayed.',
							},
							can_backdate: {
								type: 'boolean',
								description: 'Whether the viewer can backdate the photo.',
							},
							can_delete: {
								type: 'boolean',
								description: 'Whether the viewer can delete the photo.',
							},
							can_tag: {
								type: 'boolean',
								description: 'Whether the viewer can tag the photo.',
							},
							from: {
								type: 'object',
								description: 'The page or person that uploaded the photo.',
								properties: {
									id: { type: 'string', description: 'ID.' },
									name: { type: 'string', description: 'Name.' },
								},
								required: [],
							},
							height: {
								type: 'number',
								description: 'Height of the photo in pixels.',
							},
							width: { type: 'number', description: 'Width of the photo in pixels.' },
							icon: {
								type: 'string',
								description:
									'URL of the icon Facebook shows when the photo is published to the feed.',
							},
							images: {
								type: 'array',
								description: 'Stored versions of the photo in different sizes.',
								items: {
									type: 'object',
									description: 'A stored version of the photo.',
									properties: {
										height: {
											type: 'number',
											description: 'Height in pixels.',
										},
										width: { type: 'number', description: 'Width in pixels.' },
										source: {
											type: 'string',
											description: 'URL of the image.',
										},
									},
									required: [],
								},
							},
							webp_images: {
								type: 'array',
								description: 'Stored versions of the photo in WebP format.',
								items: {
									type: 'object',
									description: 'A stored version of the photo.',
									properties: {
										height: {
											type: 'number',
											description: 'Height in pixels.',
										},
										width: { type: 'number', description: 'Width in pixels.' },
										source: {
											type: 'string',
											description: 'URL of the image.',
										},
									},
									required: [],
								},
							},
							link: { type: 'string', description: 'URL of the photo on Facebook.' },
							picture: {
								type: 'string',
								description: 'URL of a thumbnail of the photo.',
							},
							place: {
								type: 'object',
								description:
									'The place (location page) associated with the object.',
								properties: {
									id: { type: 'string', description: 'ID of the place page.' },
									name: { type: 'string', description: 'Name of the place.' },
									location: {
										type: 'object',
										description: 'Location of the place.',
										properties: {
											city: { type: 'string', description: 'City.' },
											country: { type: 'string', description: 'Country.' },
											latitude: { type: 'number', description: 'Latitude.' },
											longitude: {
												type: 'number',
												description: 'Longitude.',
											},
											street: {
												type: 'string',
												description: 'Street address.',
											},
											zip: { type: 'string', description: 'Postal code.' },
										},
										required: [],
									},
								},
								required: [],
							},
							page_story_id: {
								type: 'string',
								description:
									'ID of the page story of the photo. Only for published photos.',
							},
							name_tags: {
								type: 'array',
								description: 'Profiles mentioned in the caption.',
								items: {
									type: 'object',
									description: 'A profile mentioned in the caption.',
									properties: {
										id: { type: 'string', description: 'ID of the profile.' },
										name: {
											type: 'string',
											description: 'Name of the profile.',
										},
										type: {
											type: 'string',
											description:
												'Type of the profile, for example `user` or `page`.',
										},
										offset: {
											type: 'number',
											description: 'Position of the mention in the caption.',
										},
										length: {
											type: 'number',
											description: 'Length of the mention.',
										},
									},
									required: [],
								},
							},
							target: {
								type: 'object',
								description: 'The profile the photo is published to.',
								properties: {
									id: { type: 'string', description: 'ID of the profile.' },
								},
								required: [],
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursors for paging through results.',
					properties: {
						cursors: {
							type: 'object',
							description: 'Paging cursors.',
							properties: {
								before: {
									type: 'string',
									description:
										'Cursor of the start of the page. Pass it as `before` to get the previous page.',
								},
								after: {
									type: 'string',
									description:
										'Cursor of the end of the page. Pass it as `after` to get the next page.',
								},
							},
							required: [],
						},
						next: {
							type: 'string',
							description: 'URL of the next page. Missing on the last page.',
						},
						previous: {
							type: 'string',
							description: 'URL of the previous page. Missing on the first page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'ListVideos',
		label: 'List videos',
		description: 'Lists the videos of a Facebook page.',
		context:
			"---\nname: ListVideos\ndescription: Lists the videos of a Facebook page.\n---\n\nLists the videos of a Facebook page. Returns one page of results; use the `paging` cursors to get more.\n\nThis endpoint gets the access token of the page `page_id` internally and acts as the page when the connected user has a role on it (other than Live Contributor). Otherwise, the connection's user token is used, which works only for content the app can read publicly. Use `ListPages` to find the page ID.\n\n## Notes\n\n- Reading the videos of a page you manage needs a Page access token from a person who can perform the MANAGE task.\n- If `fields` is empty, the same fields as in `GetVideo` are requested.\n\nAPI reference: [Get videos](https://developers.facebook.com/docs/video-api/guides/get-videos/), [Video](https://developers.facebook.com/docs/graph-api/reference/video/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						"The ID of the page. If the connected user has a role on the page (other than Live Contributor), the page's access token is used; otherwise, the connection's user token. Get the ID with `ListPages`.",
				},
				type: {
					type: 'string',
					description:
						'Which videos to return: videos uploaded by the page or videos the page is tagged in.',
					default: '',
					enum: ['', 'uploaded', 'tagged'],
				},
				fields: {
					type: 'string',
					description:
						'Fields to return for each video. If empty, these fields are returned: `id,title,description,created_time,updated_time,published,permalink_url,picture,source,length,embed_html,embeddable,content_category,content_tags,custom_labels,backdated_time,backdated_time_granularity,scheduled_publish_time,format,from,icon,is_crosspost_video,is_crossposting_eligible,is_episode,is_instagram_eligible,place,post_id,privacy,spherical,status,universal_video_id`.',
					default: '',
					enum: [
						'',
						'id',
						'title',
						'description',
						'created_time',
						'updated_time',
						'published',
						'permalink_url',
						'picture',
						'source',
						'length',
						'embed_html',
						'embeddable',
						'content_category',
						'content_tags',
						'custom_labels',
						'backdated_time',
						'backdated_time_granularity',
						'scheduled_publish_time',
						'format',
						'from',
						'icon',
						'is_crosspost_video',
						'is_crossposting_eligible',
						'is_episode',
						'is_instagram_eligible',
						'place',
						'post_id',
						'privacy',
						'spherical',
						'status',
						'universal_video_id',
						'is_reference_only',
						'live_status',
						'post_views',
						'views',
						'ad_breaks',
					],
				},
				limit: {
					type: 'number',
					description: 'Maximum number of items to return.',
					minimum: 1,
				},
				after: {
					type: 'string',
					description:
						'Cursor of the next page, from `paging.cursors.after` of the previous response.',
				},
				before: {
					type: 'string',
					description:
						'Cursor of the previous page, from `paging.cursors.before` of the previous response.',
				},
			},
			required: ['page_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				data: {
					type: 'array',
					description: 'List of videos.',
					items: {
						type: 'object',
						description: 'A video.',
						properties: {
							id: { type: 'string', description: 'The ID of the video.' },
							description: {
								type: 'string',
								description: 'Description of the video.',
							},
							created_time: {
								type: 'string',
								description: 'The time the video was published.',
							},
							updated_time: {
								type: 'string',
								description: 'The last time the video or its caption was updated.',
							},
							published: {
								type: 'boolean',
								description: 'Whether the video is published.',
							},
							permalink_url: {
								type: 'string',
								description:
									'The permanent path of the video on facebook.com, for example `/{page}/videos/{video_id}/`.',
							},
							picture: {
								type: 'string',
								description: 'URL of the thumbnail of the video.',
							},
							source: {
								type: 'string',
								description:
									'URL of the playable video file. Expires after some time.',
							},
							length: {
								type: 'number',
								description: 'Duration of the video in seconds.',
							},
							embed_html: {
								type: 'string',
								description: 'HTML for embedding the video on a website.',
							},
							embeddable: {
								type: 'boolean',
								description: 'Whether the video can be embedded.',
							},
							content_category: {
								type: 'string',
								description:
									'Content category of the video, for example `BUSINESS` or `MUSIC`.',
							},
							content_tags: {
								type: 'array',
								description: 'IDs of tags describing the video content.',
								items: { type: 'string', description: 'A content tag ID.' },
							},
							custom_labels: {
								type: 'array',
								description: 'Labels of the video, shown only in insights.',
								items: { type: 'string', description: 'A custom label.' },
							},
							backdated_time: {
								type: 'string',
								description: 'The backdated time of the video post.',
							},
							backdated_time_granularity: {
								type: 'string',
								description: 'Which part of `backdated_time` is displayed.',
							},
							scheduled_publish_time: {
								type: 'string',
								description: 'When a scheduled video goes live.',
							},
							format: {
								type: 'array',
								description: 'Available formats of the video.',
								items: {
									type: 'object',
									description: 'A format of the video.',
									properties: {
										filter: {
											type: 'string',
											description:
												'Name of the format, for example `130x130` or `native`.',
										},
										embed_html: {
											type: 'string',
											description:
												'HTML for embedding the video in this format.',
										},
										height: {
											type: 'number',
											description: 'Height in pixels.',
										},
										width: { type: 'number', description: 'Width in pixels.' },
										picture: {
											type: 'string',
											description: 'URL of the thumbnail in this format.',
										},
									},
									required: [],
								},
							},
							from: {
								type: 'object',
								description: 'The page or person that created the video.',
								properties: {
									id: { type: 'string', description: 'ID.' },
									name: { type: 'string', description: 'Name.' },
								},
								required: [],
							},
							icon: {
								type: 'string',
								description:
									'URL of the icon Facebook shows when the video is published to the feed.',
							},
							is_crosspost_video: {
								type: 'boolean',
								description: 'Whether the video is crossposted from another page.',
							},
							is_crossposting_eligible: {
								type: 'boolean',
								description: 'Whether the video can be crossposted.',
							},
							is_episode: {
								type: 'boolean',
								description: 'Whether the video is an episode of a show.',
							},
							is_instagram_eligible: {
								type: 'boolean',
								description: 'Whether the video can be shared to Instagram.',
							},
							is_reference_only: {
								type: 'boolean',
								description:
									'Whether the video is used only as a copyright reference.',
							},
							live_status: {
								type: 'string',
								description: 'Status of a live video, for example `LIVE` or `VOD`.',
							},
							place: {
								type: 'object',
								description:
									'The place (location page) associated with the object.',
								properties: {
									id: { type: 'string', description: 'ID of the place page.' },
									name: { type: 'string', description: 'Name of the place.' },
									location: {
										type: 'object',
										description: 'Location of the place.',
										properties: {
											city: { type: 'string', description: 'City.' },
											country: { type: 'string', description: 'Country.' },
											latitude: { type: 'number', description: 'Latitude.' },
											longitude: {
												type: 'number',
												description: 'Longitude.',
											},
											street: {
												type: 'string',
												description: 'Street address.',
											},
											zip: { type: 'string', description: 'Postal code.' },
										},
										required: [],
									},
								},
								required: [],
							},
							post_id: {
								type: 'string',
								description: 'ID of the post created for the video.',
							},
							post_views: {
								type: 'number',
								description: 'Number of views of the video post.',
							},
							views: { type: 'number', description: 'Number of views of the video.' },
							privacy: {
								type: 'object',
								description: 'Privacy settings.',
								properties: {
									value: {
										type: 'string',
										description:
											'The privacy setting: `EVERYONE`, `ALL_FRIENDS`, `FRIENDS_OF_FRIENDS`, `CUSTOM`, or `SELF`.',
									},
									description: {
										type: 'string',
										description:
											'Description of the privacy setting, as shown on Facebook.',
									},
									friends: {
										type: 'string',
										description:
											'Which friends can see the object, when `value` is `CUSTOM`.',
									},
									allow: {
										type: 'string',
										description:
											'Comma-separated IDs that can see the object, when `value` is `CUSTOM`.',
									},
									deny: {
										type: 'string',
										description:
											"Comma-separated IDs that can't see the object, when `value` is `CUSTOM`.",
									},
								},
								required: [],
							},
							spherical: {
								type: 'boolean',
								description: 'Whether the video is a 360° video.',
							},
							status: {
								type: 'object',
								description:
									'Upload, processing, and publishing status of the video.',
								properties: {
									video_status: {
										type: 'string',
										description:
											'Overall status: `uploading`, `upload_complete`, `upload_failed`, `processing`, `ready`, `expired`, or `error`.',
									},
									uploading_phase: {
										type: 'object',
										description: 'Progress of the upload.',
										properties: {
											status: {
												type: 'string',
												description:
													'Status of the uploading phase: `not_started`, `in_progress`, `complete`, or `error`.',
											},
											bytes_transfered: {
												type: 'number',
												description:
													'Number of bytes of the video file uploaded so far.',
											},
											source_file_size: {
												type: 'number',
												description: 'Size of the video file in bytes.',
											},
											errors: {
												type: 'array',
												description: 'Errors of the upload.',
												items: {
													type: 'object',
													description: 'An upload error.',
													properties: {
														message: {
															type: 'string',
															description: 'Error message.',
														},
													},
													required: [],
												},
											},
										},
										required: [],
									},
									processing_phase: {
										type: 'object',
										description:
											'Progress of processing, such as encoding and thumbnail generation.',
										properties: {
											status: {
												type: 'string',
												description:
													'Status of the processing phase: `not_started`, `in_progress`, `complete`, or `error`.',
											},
											error: {
												type: 'object',
												description: 'Details of a processing error.',
												properties: {
													message: {
														type: 'string',
														description: 'Error message.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
									publishing_phase: {
										type: 'object',
										description: 'Progress of publishing to the page.',
										properties: {
											status: {
												type: 'string',
												description:
													'Status of the publishing phase: `not_started`, `in_progress`, `complete`, or `error`.',
											},
											publish_status: {
												type: 'string',
												description:
													'Publish state: `published`, `scheduled`, `draft`, or `error`.',
											},
											publish_time: {
												type: 'string',
												description: 'Actual or scheduled publish time.',
											},
											error: {
												type: 'object',
												description: 'Details of a publishing error.',
												properties: {
													message: {
														type: 'string',
														description: 'Error message.',
													},
												},
												required: [],
											},
										},
										required: [],
									},
								},
								required: [],
							},
							universal_video_id: {
								type: 'string',
								description: "The publisher's asset management code of the video.",
							},
							ad_breaks: {
								type: 'array',
								description: 'Time offsets of ad breaks, in milliseconds.',
								items: {
									type: 'number',
									description: 'An ad break offset in milliseconds.',
								},
							},
						},
						required: [],
					},
				},
				paging: {
					type: 'object',
					description: 'Cursors for paging through results.',
					properties: {
						cursors: {
							type: 'object',
							description: 'Paging cursors.',
							properties: {
								before: {
									type: 'string',
									description:
										'Cursor of the start of the page. Pass it as `before` to get the previous page.',
								},
								after: {
									type: 'string',
									description:
										'Cursor of the end of the page. Pass it as `after` to get the next page.',
								},
							},
							required: [],
						},
						next: {
							type: 'string',
							description: 'URL of the next page. Missing on the last page.',
						},
						previous: {
							type: 'string',
							description: 'URL of the previous page. Missing on the first page.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'PublishReel',
		label: 'Publish a reel',
		description:
			'Finishes a reel upload and publishes, schedules, or saves the reel as a draft on a Facebook page.',
		context:
			"---\nname: PublishReel\ndescription: Finishes a reel upload and publishes, schedules, or saves the reel as a draft on a Facebook page.\n---\n\nFinishes a reel upload session and publishes, schedules, or saves the reel as a draft. This is step 4 of publishing a reel.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Reel publishing flow\n\n1. `StartReelUpload` — start an upload session and get a `video_id`.\n2. `UploadReelFromUrl` — upload the video file from a public URL.\n3. `GetVideoStatus` (optional) — check that the upload is complete.\n4. `PublishReel` — publish, schedule, or save the reel as a draft.\n\n## Notes\n\n- Upload the file with `UploadReelFromUrl` first.\n- A page can publish at most 30 reels through the API in 24 hours.\n\nAPI reference: [Reels Publishing API](https://developers.facebook.com/docs/video-api/guides/reels-publishing/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page to publish the reel to. Must be the page used in `StartReelUpload`. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				video_id: {
					type: 'string',
					description: 'The `video_id` returned by `StartReelUpload`.',
				},
				video_state: {
					type: 'string',
					description: 'Publish state of the reel.',
					enum: ['PUBLISHED', 'SCHEDULED', 'DRAFT'],
				},
				description: {
					type: 'string',
					description: 'Description of the reel. Supports hashtags.',
				},
				scheduled_publish_time: {
					type: 'number',
					description:
						'UNIX timestamp (in seconds) when the reel goes live. Must be more than 10 minutes and less than 29 days from now. Requires `video_state` set to `SCHEDULED`.',
				},
				place: {
					type: 'string',
					description:
						'ID of a page with a valid location to tag as the location of the reel.',
				},
				is_ai_generated: {
					type: 'boolean',
					description:
						'Set to `true` to disclose that the reel was created or edited using AI. Defaults to `false`.',
				},
			},
			required: ['page_id', 'video_id', 'video_state'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'StartReelUpload',
		label: 'Start a reel upload',
		description:
			'Starts a reel upload session for a Facebook page and returns the video ID for the upload.',
		context:
			"---\nname: StartReelUpload\ndescription: Starts a reel upload session for a Facebook page and returns the video ID for the upload.\n---\n\nStarts a reel upload session for a Facebook page. This is step 1 of publishing a reel.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Reel publishing flow\n\n1. `StartReelUpload` — start an upload session and get a `video_id`.\n2. `UploadReelFromUrl` — upload the video file from a public URL.\n3. `GetVideoStatus` (optional) — check that the upload is complete.\n4. `PublishReel` — publish, schedule, or save the reel as a draft.\n\n## Notes\n\n- The person who granted the token must be able to perform the CREATE_CONTENT task on the page.\n- A page can publish at most 30 reels through the API in 24 hours.\n\nAPI reference: [Reels Publishing API](https://developers.facebook.com/docs/video-api/guides/reels-publishing/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page to publish the reel to. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
			},
			required: ['page_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				video_id: {
					type: 'string',
					description:
						'ID of the new video. Pass it to `UploadReelFromUrl` and `PublishReel`.',
				},
				upload_url: { type: 'string', description: 'URL for uploading the video file.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'UnlikePost',
		label: 'Unlike an object',
		description: "Removes the page's like from a post, comment, photo, or album.",
		context:
			"---\nname: UnlikePost\ndescription: Removes the Page's like from a post, comment, photo, or album.\n---\n\nRemoves the Page's like from an object.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- A Page can delete only its own likes, and the object must already be liked.\n- Removing a like from a Page review is not supported.\n\nAPI reference: [Object likes](https://developers.facebook.com/docs/graph-api/reference/object/likes/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page to remove the like as. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				object_id: {
					type: 'string',
					description:
						'The ID of the object: a page post (`{page_id}_{post_id}`), a comment, a photo, or an album.',
				},
			},
			required: ['page_id', 'object_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'UpdateComment',
		label: 'Edit a comment',
		description: 'Updates the text, attachment, or visibility of a comment.',
		context:
			"---\nname: UpdateComment\ndescription: Updates the text, attachment, or visibility of a comment.\n---\n\nUpdates a comment. Only the fields you send are changed.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- Use `is_hidden` to hide or unhide a comment on Page content (moderation) without changing its text.\n- Use only one of `attachment_id`, `attachment_url`, or `attachment_share_url`.\n\nAPI reference: [Comment](https://developers.facebook.com/docs/graph-api/reference/comment/)\n",
		accounts: {
			facebook: {
				scope: ['pages_manage_engagement', 'pages_read_engagement', 'business_management'],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page where the comment was posted. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				comment_id: { type: 'string', description: 'The ID of the comment to update.' },
				message: {
					type: 'string',
					description: 'The new text of the comment. Supports emoji.',
				},
				attachment_id: {
					type: 'string',
					description: 'ID of an unpublished photo to attach to the comment.',
				},
				attachment_url: {
					type: 'string',
					description: 'URL of an image to attach to the comment.',
				},
				attachment_share_url: {
					type: 'string',
					description:
						'URL of an animated GIF to attach to the comment. The URL is not included in the message.',
				},
				is_hidden: {
					type: 'boolean',
					description:
						'Whether the comment is hidden. Only applicable to comments on page content.',
				},
			},
			required: ['page_id', 'comment_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'UpdatePageDetails',
		label: 'Update page details',
		description:
			'Updates the details of a Facebook page, such as about, contact info, location, and opening hours.',
		context:
			"---\nname: UpdatePageDetails\ndescription: Updates the details of a Facebook page, such as about, contact info, location, and opening hours.\n---\n\nUpdates the details of a Facebook page. Only the fields you send are changed.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- The person who granted the token must be able to perform the MANAGE task on the page.\n- `location`, `payment_options`, `restaurant_services`, `restaurant_specialties`, and `differently_open_offerings` replace the whole object on the page. Send every sub-field you want to keep.\n- `hours` replaces all opening hours. Keys use the `{day}_{number}_{status}` format, for example `mon_1_open` = `09:00` and `mon_1_close` = `17:00`.\n- Empty values are not sent, so this endpoint cannot clear a field by sending an empty value.\n- `cover` takes the ID of a photo already on the page. Upload the photo first with `UploadPhoto`.\n- Crossposting handshakes, spherical photo metadata, and webhook subscription settings of the vendor operation are not exposed.\n\nAPI reference: [Page – Updating](https://developers.facebook.com/docs/graph-api/reference/page/#Updating)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_read_engagement',
					'pages_show_list',
					'pages_manage_metadata',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page to update. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				about: {
					type: 'string',
					description:
						"Short description of the page. Shown as the description setting in the page's edit page info section.",
				},
				description: {
					type: 'string',
					description:
						"Long description of the page. Shown as the additional information setting in the page's edit page info section.",
				},
				company_overview: { type: 'string', description: 'Overview of the company.' },
				mission: { type: 'string', description: "The company's mission." },
				general_info: {
					type: 'string',
					description: 'General information about the page.',
				},
				impressum: {
					type: 'string',
					description:
						'Legal notice (impressum) of the page. Required by law for businesses in some countries.',
				},
				phone: { type: 'string', description: 'Phone number of the page.' },
				emails: {
					type: 'array',
					description: 'Email addresses of the page.',
					items: { type: 'string', description: 'An email address.' },
				},
				website: { type: 'string', description: "URL of the page's website." },
				category_list: {
					type: 'array',
					description: 'IDs of the page categories.',
					items: { type: 'string', description: 'The ID of a page category.' },
				},
				location: {
					type: 'object',
					description: 'Location of the business.',
					properties: {
						street: { type: 'string', description: 'Street address.' },
						city: { type: 'string', description: 'City name.' },
						city_id: { type: 'string', description: 'Facebook ID of the city.' },
						state: { type: 'string', description: 'State or region.' },
						country: { type: 'string', description: 'Country name.' },
						zip: { type: 'string', description: 'Postal code.' },
						latitude: { type: 'number', description: 'Latitude of the location.' },
						longitude: { type: 'number', description: 'Longitude of the location.' },
					},
					required: [],
				},
				ignore_coordinate_warnings: {
					type: 'boolean',
					description:
						'Whether to ignore coordinate warnings when updating the page location.',
				},
				store_location_descriptor: {
					type: 'string',
					description:
						'Description of the store location, for example a mall or neighborhood name.',
				},
				contact_address: {
					type: 'object',
					description: 'Contact (mailing) address of the page.',
					properties: {
						street1: {
							type: 'string',
							description: 'First line of the street address.',
						},
						street2: {
							type: 'string',
							description: 'Second line of the street address.',
						},
						city_id: { type: 'string', description: 'Facebook ID of the city.' },
						zip: { type: 'string', description: 'Postal code.' },
					},
					required: [],
				},
				hours: {
					type: 'array',
					description:
						'Opening hours. Each item is one opening or closing time. Each day can have up to 2 time ranges. If the business is open 24/7, use `is_always_open` instead.',
					items: {
						type: 'object',
						description: 'An opening or closing time.',
						properties: {
							key: {
								type: 'string',
								description:
									'Key in the `{day}_{number}_{status}` format: `{day}` is the first 3 letters of the weekday (`mon`–`sun`), `{number}` is `1` or `2`, `{status}` is `open` or `close`. For example `mon_1_open`.',
							},
							value: {
								type: 'string',
								description:
									'Time in the 24-hour `HH:MM` format, for example `09:00`. A day open 24 hours uses `00:00` to `24:00`.',
							},
						},
						required: ['key', 'value'],
					},
				},
				is_always_open: {
					type: 'boolean',
					description: 'Whether the business is always open.',
				},
				is_permanently_closed: {
					type: 'boolean',
					description: 'Whether the business is permanently closed.',
				},
				temporary_status: {
					type: 'string',
					description: 'Temporary operating status of the business.',
					default: '',
					enum: [
						'',
						'DIFFERENTLY_OPEN',
						'TEMPORARILY_CLOSED',
						'OPERATING_AS_USUAL',
						'NO_DATA',
					],
				},
				differently_open_offerings: {
					type: 'object',
					description:
						'Services currently offered by the business. Intended for use with `temporary_status` set to `DIFFERENTLY_OPEN`.',
					properties: {
						ONLINE_SERVICES: {
							type: 'boolean',
							description: 'Whether online services are offered.',
						},
						DELIVERY: { type: 'boolean', description: 'Whether delivery is offered.' },
						PICKUP: { type: 'boolean', description: 'Whether pickup is offered.' },
						OTHER: {
							type: 'boolean',
							description: 'Whether other services are offered.',
						},
					},
					required: [],
				},
				pickup_options: {
					type: 'string',
					description: 'Pickup option types available at the business location.',
					default: '',
					enum: ['', 'CURBSIDE', 'IN_STORE', 'OTHER'],
				},
				delivery_and_pickup_option_info: {
					type: 'array',
					description:
						'URLs of web pages with delivery and pickup options. Facebook removes duplicate and invalid URLs. An empty list is not sent, so this endpoint cannot clear the field.',
					items: {
						type: 'string',
						description: 'URL of a delivery or pickup option page.',
					},
				},
				public_transit: {
					type: 'string',
					description: 'Public transit information for the business location.',
				},
				payment_options: {
					type: 'object',
					description: 'Payment options accepted by the business.',
					properties: {
						cash_only: {
							type: 'boolean',
							description: 'Whether only cash is accepted.',
						},
						visa: { type: 'boolean', description: 'Whether Visa is accepted.' },
						amex: {
							type: 'boolean',
							description: 'Whether American Express is accepted.',
						},
						mastercard: {
							type: 'boolean',
							description: 'Whether Mastercard is accepted.',
						},
						discover: { type: 'boolean', description: 'Whether Discover is accepted.' },
						credit_cards: {
							type: 'boolean',
							description: 'Whether credit cards are accepted.',
						},
					},
					required: [],
				},
				price_range: {
					type: 'string',
					description:
						'Price range of the business, for example `$`, `$$`, `$$$`, `$$$$`, or `Unspecified`.',
				},
				attire: {
					type: 'string',
					description: 'Dress code of the business.',
					default: '',
					enum: ['', 'Unspecified', 'Casual', 'Dressy'],
				},
				food_styles: {
					type: 'string',
					description: 'Food styles served by the restaurant.',
					default: '',
					enum: [
						'',
						'Afghani',
						'American (New)',
						'American (Traditional)',
						'Asian fusion',
						'Barbeque',
						'Brazilian',
						'Breakfast',
						'British',
						'Brunch',
						'Buffets',
						'Burgers',
						'Burmese',
						'Cajun/Creole',
						'Caribbean',
						'Chinese',
						'Creperies',
						'Cuban',
						'Delis',
						'Diners',
						'Ethiopian',
						'Fast food',
						'Filipino',
						'Fondue',
						'Food stands',
						'French',
						'German',
						'Greek and Mediterranean',
						'Hawaiian',
						'Himalayan/Nepalese',
						'Hot dogs',
						'Indian/Pakistani',
						'Irish',
						'Italian',
						'Japanese',
						'Korean',
						'Latin American',
						'Mexican',
						'Middle Eastern',
						'Moroccan',
						'Pizza',
						'Russian',
						'Sandwiches',
						'Seafood',
						'Singaporean',
						'Soul food',
						'Southern',
						'Spanish/Basque',
						'Steakhouses',
						'Sushi bars',
						'Taiwanese',
						'Tapas bars',
						'Tex-Mex',
						'Thai',
						'Turkish',
						'Vegan',
						'Vegetarian',
						'Vietnamese',
					],
				},
				restaurant_services: {
					type: 'object',
					description: 'Services offered by the restaurant.',
					properties: {
						reserve: {
							type: 'boolean',
							description: 'Whether reservations are accepted.',
						},
						walkins: { type: 'boolean', description: 'Whether walk-ins are welcome.' },
						groups: {
							type: 'boolean',
							description: 'Whether the restaurant is good for groups.',
						},
						kids: {
							type: 'boolean',
							description: 'Whether the restaurant is good for kids.',
						},
						takeout: { type: 'boolean', description: 'Whether takeout is offered.' },
						delivery: { type: 'boolean', description: 'Whether delivery is offered.' },
						catering: { type: 'boolean', description: 'Whether catering is offered.' },
						waiter: {
							type: 'boolean',
							description: 'Whether there is waiter service.',
						},
						outdoor: {
							type: 'boolean',
							description: 'Whether there is outdoor seating.',
						},
					},
					required: [],
				},
				restaurant_specialties: {
					type: 'object',
					description: 'Meals the restaurant specializes in.',
					properties: {
						breakfast: { type: 'boolean', description: 'Whether breakfast is served.' },
						lunch: { type: 'boolean', description: 'Whether lunch is served.' },
						dinner: { type: 'boolean', description: 'Whether dinner is served.' },
						coffee: { type: 'boolean', description: 'Whether coffee is served.' },
						drinks: { type: 'boolean', description: 'Whether drinks are served.' },
					},
					required: [],
				},
				culinary_team: { type: 'string', description: 'Culinary team of the restaurant.' },
				general_manager: {
					type: 'string',
					description: 'General manager of the business.',
				},
				directed_by: { type: 'string', description: 'Director, for film pages.' },
				plot_outline: {
					type: 'string',
					description: 'Plot outline, for film or TV show pages.',
				},
				displayed_message_response_time: {
					type: 'string',
					description: 'Estimated message response time shown to people on the page.',
				},
				is_published: {
					type: 'boolean',
					description: 'Whether the page is published (visible to the public).',
				},
				cover: {
					type: 'string',
					description:
						'ID of a photo already uploaded to the page to use as the cover photo. Requires the EDIT_PROFILE task on the page.',
				},
				offset_x: {
					type: 'number',
					description:
						'Horizontal offset of the cover photo, in percent. Default is `50`.',
					minimum: 0,
					maximum: 100,
				},
				offset_y: {
					type: 'number',
					description: 'Vertical offset of the cover photo, in percent. Default is `50`.',
					minimum: 0,
					maximum: 100,
				},
				focus_x: {
					type: 'number',
					description: 'Horizontal focus point of the cover photo.',
				},
				focus_y: {
					type: 'number',
					description: 'Vertical focus point of the cover photo.',
				},
				zoom_scale_x: {
					type: 'number',
					description: 'Horizontal zoom scale of the cover photo.',
				},
				zoom_scale_y: {
					type: 'number',
					description: 'Vertical zoom scale of the cover photo.',
				},
				no_feed_story: {
					type: 'boolean',
					description:
						'Whether to skip creating a feed story for the new cover photo. Default is `false`.',
				},
				no_notification: {
					type: 'boolean',
					description:
						'Whether to skip sending a notification for the new cover photo. Default is `false`.',
				},
				scrape: {
					type: 'boolean',
					description: 'Whether to re-scrape the website associated with the page.',
				},
			},
			required: ['page_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'UpdatePost',
		label: 'Edit a post',
		description: 'Updates a page post.',
		context:
			"---\nname: UpdatePost\ndescription: Updates a Page post.\n---\n\nUpdates a Page post. Only the fields you send are changed.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- The post ID must be in the `{page_id}_{post_id}` format, as returned by the Page feed and post endpoints.\n- `message` replaces the whole text of the post. Get the post first if you need to keep parts of the current text.\n- `tags` can only be used together with `place`.\n- This endpoint updates Page posts only. Videos are updated on the video node, not here.\n- Marketplace (`product_item`), Open Graph (`og_*`), and other internal parameters of the vendor operation are not exposed.\n\nAPI reference: [Page Post](https://developers.facebook.com/docs/graph-api/reference/page-post/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page that owns the post. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				page_post_id: {
					type: 'string',
					description: 'The ID of the page post in the `{page_id}_{post_id}` format.',
				},
				message: {
					type: 'string',
					description:
						'The new text of the post. Supports emoji and page mentions in the `@[page-id]` format.',
				},
				is_hidden: {
					type: 'boolean',
					description: 'Whether the post is hidden from the page timeline.',
				},
				is_published: {
					type: 'boolean',
					description:
						'Whether the post is published. Set to `true` to publish an unpublished post.',
				},
				is_pinned: {
					type: 'boolean',
					description: 'Whether the post is pinned to the top of the page.',
				},
				scheduled_publish_time: {
					type: 'number',
					description:
						'UNIX timestamp (in seconds) when an unpublished post goes live. Must be between 10 minutes and 75 days from the time of the request.',
				},
				backdated_time: {
					type: 'number',
					description: 'UNIX timestamp (in seconds) in the past to backdate the post to.',
				},
				backdated_time_granularity: {
					type: 'string',
					description:
						'Controls how the time of a backdated post is displayed. For example, `month` displays the post as "2 months ago" instead of an exact date.',
					default: '',
					enum: ['', 'year', 'month', 'day', 'hour', 'min', 'none'],
				},
				timeline_visibility: {
					type: 'string',
					description: 'Visibility of the post on the page timeline.',
					default: '',
					enum: ['', 'hidden', 'normal', 'forced_allow'],
				},
				feed_story_visibility: {
					type: 'string',
					description: "Visibility of the post's story in news feed.",
					default: '',
					enum: ['', 'hidden', 'visible'],
				},
				place: {
					type: 'string',
					description: 'The page ID of a location associated with the post.',
				},
				tags: {
					type: 'array',
					description:
						'IDs of people tagged in the post. Can only be used together with `place`.',
					items: { type: 'string', description: 'The ID of a tagged person.' },
				},
				attached_media: {
					type: 'array',
					description: 'Photos to attach to the post.',
					items: {
						type: 'object',
						description: 'An attached photo.',
						properties: {
							media_fbid: {
								type: 'string',
								description: 'The ID of an unpublished photo uploaded to the page.',
							},
						},
						required: [],
					},
				},
			},
			required: ['page_id', 'page_post_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'UpdateVideo',
		label: 'Update a video',
		description: 'Updates the title, description, and settings of a video on a Facebook page.',
		context:
			"---\nname: UpdateVideo\ndescription: Updates the title, description, and settings of a video on a Facebook page.\n---\n\nUpdates a video on a Facebook page, such as its title, description, and visibility settings. Only the fields you send are changed.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- Use the video ID, as returned by `UploadVideo` or `StartReelUpload`, not the ID of the video post. To change the text of the video post, use `UpdatePost`.\n- `name` is the title of the video.\n- Empty values are not sent, so this endpoint cannot clear a field by sending an empty value.\n- Ad-related parameters of the vendor operation (ad breaks, call to action, sponsor, crossposting) are not exposed.\n\nAPI reference: [Video](https://developers.facebook.com/docs/graph-api/reference/video/). Update parameters follow the Meta Business SDK `AdVideo` update operation.\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page that owns the video. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				video_id: { type: 'string', description: 'The ID of the video to update.' },
				name: { type: 'string', description: 'The new title of the video.' },
				description: {
					type: 'string',
					description: 'The new description of the video. Supports emoji.',
				},
				published: {
					type: 'boolean',
					description:
						'Whether the video post is published. Set to `true` to publish an unpublished video.',
				},
				scheduled_publish_time: {
					type: 'number',
					description:
						'UNIX timestamp (in seconds) when an unpublished video post goes live.',
				},
				backdated_time: {
					type: 'number',
					description:
						'UNIX timestamp (in seconds) in the past to backdate the video post to.',
				},
				backdated_time_granularity: {
					type: 'string',
					description: 'Which part of `backdated_time` is displayed.',
					default: '',
					enum: ['', 'year', 'month', 'day', 'hour', 'min', 'none'],
				},
				content_category: {
					type: 'string',
					description: 'Content category of the video.',
					default: '',
					enum: [
						'',
						'BEAUTY_FASHION',
						'BUSINESS',
						'CARS_TRUCKS',
						'COMEDY',
						'CUTE_ANIMALS',
						'ENTERTAINMENT',
						'FAMILY',
						'FOOD_HEALTH',
						'HOME',
						'LIFESTYLE',
						'MUSIC',
						'NEWS',
						'POLITICS',
						'SCIENCE',
						'SPORTS',
						'TECHNOLOGY',
						'VIDEO_GAMING',
						'OTHER',
					],
				},
				content_tags: {
					type: 'array',
					description:
						'IDs of tags that describe the video content. Replaces the current tags.',
					items: { type: 'string', description: 'A content tag ID.' },
				},
				custom_labels: {
					type: 'array',
					description:
						'Labels of the video. Not published; shown only in insights. Replaces the current labels.',
					items: { type: 'string', description: 'A custom label.' },
				},
				embeddable: {
					type: 'boolean',
					description: 'Whether the video can be embedded on other websites.',
				},
				social_actions: {
					type: 'boolean',
					description:
						'Whether likes, comments, and sharing are allowed on an unlisted video.',
				},
				preferred_thumbnail_id: {
					type: 'string',
					description:
						'ID of a thumbnail of the video to use as its preferred thumbnail.',
				},
				publish_to_news_feed: {
					type: 'boolean',
					description: 'Whether the video is shown in news feed.',
				},
				publish_to_videos_tab: {
					type: 'boolean',
					description: "Whether the video is shown on the page's videos tab.",
				},
				expiration: {
					type: 'object',
					description: 'When the video expires and what happens then.',
					properties: {
						time: { type: 'string', description: 'Expiration time of the video.' },
						type: {
							type: 'string',
							description: 'What happens when the video expires.',
							default: '',
							enum: ['', 'expire_and_delete', 'expire_only'],
						},
					},
					required: [],
				},
				expire_now: {
					type: 'boolean',
					description: 'Whether the video expires immediately.',
				},
			},
			required: ['page_id', 'video_id'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'UploadPhoto',
		label: 'Upload a photo',
		description:
			'Uploads a photo from a URL to a Facebook page, either as a published photo post or as an unpublished photo to attach to a post.',
		context:
			"---\nname: UploadPhoto\ndescription: Uploads a photo from a URL to a Facebook page or album, either as a published photo post or as an unpublished photo to attach to a post.\n---\n\nUploads a photo from a public URL to a Facebook page or album. By default, this publishes a photo post.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Post with several photos\n\nUpload each photo with `published` set to `false` and pass the returned `id` values to `CreatePost` in `attached_media`. For a scheduled post, also set `temporary` to `true` here. See `CreatePost` for the full flow.\n\n## Notes\n\n- The person who granted the token must be able to perform the CREATE_CONTENT task on the page.\n- Unpublished photos that are not attached to a post are deleted after about 24 hours.\n- Uploading a file directly is not supported, because endpoints can't upload files. Use a public URL.\n- `post_id` is returned only when a post is created for the photo.\n\nAPI reference: [Page Photos](https://developers.facebook.com/docs/graph-api/reference/page/photos/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page to upload the photo to, or the page that owns the album. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				page_or_album_id: {
					type: 'string',
					description: 'The ID of a page or of an album to upload the photo to.',
				},
				url: {
					type: 'string',
					description:
						'Public URL of the photo. Supported formats: JPEG, BMP, PNG, GIF, TIFF. Maximum size is 10 MB.',
				},
				caption: {
					type: 'string',
					description: 'Description of the photo. Supports emoji.',
				},
				alt_text_custom: {
					type: 'string',
					description: 'Alternative text of the image, for accessibility.',
				},
				published: {
					type: 'boolean',
					description:
						'Whether the photo is published right away. Default is `true`. Set to `false` to attach the photo to a post with `CreatePost`.',
				},
				temporary: {
					type: 'boolean',
					description:
						"Whether the photo is temporary. Use it for photos attached to a scheduled post. Requires `published` set to `false` and can't be used with `scheduled_publish_time`.",
				},
				no_story: {
					type: 'boolean',
					description: 'Whether to skip creating a feed story for the photo.',
				},
				scheduled_publish_time: {
					type: 'number',
					description:
						'UNIX timestamp (in seconds) when an unpublished photo goes live. Requires `published` set to `false`.',
				},
				unpublished_content_type: {
					type: 'string',
					description:
						'Type of the unpublished photo, for example `SCHEDULED` or `DRAFT`.',
					default: '',
					enum: [
						'',
						'SCHEDULED',
						'SCHEDULED_RECURRING',
						'DRAFT',
						'PUBLISH_PENDING',
						'ADS_POST',
						'INLINE_CREATED',
						'PUBLISHED',
						'REVIEWABLE_BRANDED_CONTENT',
					],
				},
				backdated_time: {
					type: 'number',
					description:
						'UNIX timestamp (in seconds) in the past to backdate the photo to.',
				},
				backdated_time_granularity: {
					type: 'string',
					description: 'Which part of `backdated_time` is displayed. Default is `none`.',
					default: '',
					enum: ['', 'year', 'month', 'day', 'hour', 'min', 'none'],
				},
				place: {
					type: 'string',
					description: 'The page ID of a place associated with the photo.',
				},
				tags: {
					type: 'array',
					description: 'People tagged in the photo.',
					items: {
						type: 'object',
						description: 'A tag on the photo.',
						properties: {
							tag_uid: {
								type: 'string',
								description: 'The ID of the tagged person.',
							},
							tag_text: {
								type: 'string',
								description:
									"Text of the tag, used when the tag doesn't point to a person.",
							},
							x: {
								type: 'number',
								description:
									'Horizontal position of the tag, in percent from the left edge.',
							},
							y: {
								type: 'number',
								description:
									'Vertical position of the tag, in percent from the top edge.',
							},
						},
						required: [],
					},
				},
			},
			required: ['page_id', 'page_or_album_id', 'url'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				id: { type: 'string', description: 'The ID of the uploaded photo.' },
				post_id: {
					type: 'string',
					description:
						'The ID of the post created for the photo, in the `{page_id}_{post_id}` format. Returned only when a post is created.',
				},
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'UploadReelFromUrl',
		label: 'Upload a reel from a URL',
		description:
			'Uploads the video file of a reel from a public URL to an open reel upload session.',
		context:
			"---\nname: UploadReelFromUrl\ndescription: Uploads the video file of a reel from a public URL to an open reel upload session.\n---\n\nUploads the video file of a reel from a public URL. This is step 2 of publishing a reel.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Reel publishing flow\n\n1. `StartReelUpload` — start an upload session and get a `video_id`.\n2. `UploadReelFromUrl` — upload the video file from a public URL.\n3. `GetVideoStatus` (optional) — check that the upload is complete.\n4. `PublishReel` — publish, schedule, or save the reel as a draft.\n\n## Notes\n\n- The request goes to `rupload.facebook.com`, built from `video_id`.\n- The server hosting the file must allow the `facebookexternalhit` user agent. Facebook CDN (`fbcdn`) URLs are rejected.\n- Uploading a file directly is not supported, because endpoints can't upload files.\n- Facebook processes the video after the upload. Check the progress with `GetVideoStatus`.\n\nAPI reference: [Reels Publishing API](https://developers.facebook.com/docs/video-api/guides/reels-publishing/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page used in `StartReelUpload`. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				video_id: {
					type: 'string',
					description: 'The `video_id` returned by `StartReelUpload`.',
				},
				file_url: {
					type: 'string',
					description:
						'Public HTTP or HTTPS URL of the video file. URLs that require authentication are not supported.',
				},
			},
			required: ['page_id', 'video_id', 'file_url'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				success: { type: 'boolean', description: 'Whether the operation succeeded.' },
			},
			required: [],
		},
	},
	{
		appName: 'facebook-pages',
		appVersion: 6,
		endpointName: 'UploadVideo',
		label: 'Upload a video',
		description: 'Uploads a video from a URL to a Facebook page and creates a video post.',
		context:
			"---\nname: UploadVideo\ndescription: Uploads a video from a URL to a Facebook page and creates a video post.\n---\n\nUploads a video from a public URL to a Facebook page and creates a video post.\n\nThis endpoint acts as the page `page_id`. It gets the page's access token internally, so the connected user must have a role on the page (other than Live Contributor). Use `ListPages` to find the page ID.\n\n## Notes\n\n- The request goes to `graph-video.facebook.com`, the Facebook host for video uploads.\n- The person who granted the token must be able to perform the CREATE_CONTENT task on the page.\n- Facebook processes the video after the upload. Check the progress with `GetVideoStatus`.\n- Uploading a file directly, chunked uploads, and 360° video settings are not supported, because endpoints can't upload files.\n- To publish a reel, use `StartReelUpload`, `UploadReelFromUrl`, and `PublishReel` instead.\n\nAPI reference: [Page Videos](https://developers.facebook.com/docs/graph-api/reference/page/videos/)\n",
		accounts: {
			facebook: {
				scope: [
					'pages_manage_engagement',
					'pages_manage_posts',
					'pages_read_engagement',
					'pages_read_user_content',
					'pages_show_list',
					'business_management',
				],
			},
		},
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				page_id: {
					type: 'string',
					description:
						'The ID of the page to upload the video to. The connected user must have a role on the page (other than Live Contributor). Get the ID with `ListPages`.',
				},
				file_url: { type: 'string', description: 'Public URL of the video file.' },
				description: {
					type: 'string',
					description:
						'Description of the video, used as the text of the video post. Supports emoji.',
				},
				published: {
					type: 'boolean',
					description:
						"Whether a post about the video is published. Default is `true`. Unpublished videos can't be backdated.",
				},
				scheduled_publish_time: {
					type: 'number',
					description:
						'UNIX timestamp (in seconds) when the video post goes live. Must be between 10 minutes and 6 months from now. Requires `published` set to `false`.',
				},
				unpublished_content_type: {
					type: 'string',
					description:
						'Type of the unpublished video, for example `SCHEDULED` or `DRAFT`.',
					default: '',
					enum: [
						'',
						'SCHEDULED',
						'SCHEDULED_RECURRING',
						'DRAFT',
						'PUBLISH_PENDING',
						'ADS_POST',
						'INLINE_CREATED',
						'PUBLISHED',
						'REVIEWABLE_BRANDED_CONTENT',
					],
				},
				no_story: {
					type: 'boolean',
					description:
						'Whether to skip creating feed and timeline stories for the video.',
				},
				content_category: {
					type: 'string',
					description: 'Content category of the video.',
					default: '',
					enum: [
						'',
						'BEAUTY_FASHION',
						'BUSINESS',
						'CARS_TRUCKS',
						'COMEDY',
						'CUTE_ANIMALS',
						'ENTERTAINMENT',
						'FAMILY',
						'FOOD_HEALTH',
						'HOME',
						'LIFESTYLE',
						'MUSIC',
						'NEWS',
						'POLITICS',
						'SCIENCE',
						'SPORTS',
						'TECHNOLOGY',
						'VIDEO_GAMING',
						'OTHER',
					],
				},
				content_tags: {
					type: 'array',
					description:
						'IDs of tags that describe the video content. Search with `type=adinterest` to get the IDs.',
					items: { type: 'string', description: 'A content tag ID.' },
				},
				custom_labels: {
					type: 'array',
					description: 'Labels of the video. Not published; shown only in insights.',
					items: { type: 'string', description: 'A custom label.' },
				},
				embeddable: {
					type: 'boolean',
					description: 'Whether the video can be embedded on other websites.',
				},
				secret: {
					type: 'boolean',
					description:
						'Whether the video is hidden everywhere on Facebook and not searchable. It can still be viewed via its permalink and embeds. Default is `false`.',
				},
				social_actions: {
					type: 'boolean',
					description:
						'Whether likes, comments, and sharing are allowed on an unlisted video. Default is `false`.',
				},
				backdated_post: {
					type: 'object',
					description:
						'Settings of a backdated video post. A backdated post must be published.',
					properties: {
						backdated_time: {
							type: 'number',
							description:
								'UNIX timestamp (in seconds) in the past to backdate the video post to.',
						},
						backdated_time_granularity: {
							type: 'string',
							description:
								'Which part of `backdated_time` is displayed. Default is `none`.',
							default: '',
							enum: ['', 'year', 'month', 'day', 'hour', 'min', 'none'],
						},
						hide_from_newsfeed: {
							type: 'boolean',
							description:
								'Whether to hide the backdated post from news feed. Default is `false`.',
						},
					},
					required: [],
				},
				expiration: {
					type: 'object',
					description: 'When the video expires and what happens then.',
					properties: {
						time: { type: 'string', description: 'Expiration time of the video.' },
						type: {
							type: 'string',
							description: 'What happens when the video expires.',
							default: '',
							enum: ['', 'expire_and_delete', 'expire_only'],
						},
					},
					required: [],
				},
			},
			required: ['page_id', 'file_url'],
		},
		outputSchema: {
			type: 'object',
			properties: { id: { type: 'string', description: 'The ID of the uploaded video.' } },
			required: [],
		},
	},
];
