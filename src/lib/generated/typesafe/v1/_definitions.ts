// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'typesafe',
		appVersion: 1,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'# Context for the Universal Endpoint\n\nThis Endpoint is not scoped to a single route — it forwards an arbitrary call (method, path, query string, headers and body) to the App\'s API, mirroring the "Make an API Call" module.\n\nBase URL: `https://api.typesafe.ai`. Path is relative to that host. Authorization is already set; do not add an Authorization header.\n\nCheap GET example: `GET /v1/models` (lists model aliases `jev-latest` and `jev-preview`).\n\nAPI docs: https://docs.typesafe.ai/api\n',
		accounts: { typesafe: { scope: [] } },
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: true,
		},
		inputSchema: {
			type: 'object',
			properties: {
				url: {
					type: 'string',
					description:
						'Enter a path relative to `https://api.typesafe.ai`. For example: `/v1/systemone`.',
				},
				method: {
					type: 'string',
					description: 'The HTTP request method.',
					enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
				},
				headers: {
					type: 'array',
					description:
						"You don't have to add authorization headers; we already did that for you.",
					items: {
						type: 'object',
						properties: {
							key: { type: 'string', description: 'Header name.' },
							value: { type: 'string', description: 'Header value.' },
						},
						required: [],
					},
				},
				qs: {
					type: 'array',
					description: 'The HTTP request query parameters.',
					items: {
						type: 'object',
						properties: {
							key: { type: 'string', description: 'Query parameter name.' },
							value: { type: 'string', description: 'Query parameter value.' },
						},
						required: [],
					},
				},
				body: {
					type: 'string',
					description: 'The HTTP request body. Ignored if the method is GET.',
				},
			},
			required: ['url', 'method'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				body: { description: 'The HTTP response body.' },
				headers: {
					type: 'object',
					description: 'The HTTP response headers.',
					properties: {},
					required: [],
					additionalProperties: true,
				},
				statusCode: { type: 'number', description: 'The HTTP response status code.' },
			},
			required: [],
		},
	},
	{
		appName: 'typesafe',
		appVersion: 1,
		endpointName: 'evaluate',
		label: 'Evaluate a state',
		description: 'Evaluates state against typed questions and gets back structured answers.',
		context:
			'---\nname: evaluate\ndescription: Evaluate state against typed TypeSafe questions (noul, choice, score) in one POST /v1/systemone call\n---\n\nSends `state` plus a questions **array**. Each row is one question: `id`, `type`, `instructions`, and the fields for that type. The app turns rows into the TypeSafe questions map. Do not send an object keyed by id. Questions run in parallel and independently. A repeated `id` throws `Duplicate question id: <id>.`\n\n## Required inputs\n\n- `state` — string, object, or array. Facts only. Point at fields with backtick paths such as `ticket.text`.\n- `questions` — array of rows. Ids are not sent to the model. Write the full question in `instructions`.\n\n`model` defaults to `jev-latest`. Use listModels for aliases. Pin `jev-1.13.0` if you have tuned confidence thresholds. The response `model` is the resolved versioned ID.\n\n## Question types\n\n- **noul** — yes/no. Answer `noul` is P(yes) from 0 to 1. Optional `criteriaTrue` / `criteriaFalse`.\n- **choice** — pick one option. `options` is an array of `{ option, description }`. Description may be omitted. Max 255 options. Add `other` when the set may not cover the input. Answer: `choice`, `probabilities`, `confidence`.\n- **score** — ordered levels. `levels` is an array of 2 to 10 situational label strings (not mild/moderate/severe). Answer: `score` (can be fractional), `legend`, `probabilities`, `confidence`.\n\n## Example\n\n```json\n{\n  "state": {\n    "ticket": "Help! My payouts have been failing for 3 days."\n  },\n  "questions": [\n    {\n      "id": "department",\n      "type": "choice",\n      "instructions": "Which team should handle this",\n      "options": [\n        { "option": "billing", "description": "Payment or subscription issues" },\n        { "option": "technical", "description": "Bugs or integration problems" },\n        { "option": "sales", "description": "Pricing or account questions" }\n      ]\n    },\n    {\n      "id": "is_urgent",\n      "type": "noul",\n      "instructions": "The message conveys urgency or time-sensitivity",\n      "criteriaTrue": "Explicitly time-sensitive",\n      "criteriaFalse": "No urgency expressed"\n    },\n    {\n      "id": "frustration",\n      "type": "score",\n      "instructions": "How frustrated is the customer",\n      "levels": ["Calm", "Frustrated", "Very angry"]\n    }\n  ]\n}\n```\n\n## If you get "Endpoint input validation failed"\n\nThe message does not name the field. Match the fields above.\n\n- `questions` is an array of rows, not an object keyed by id.\n- A noul row has `criteriaTrue` / `criteriaFalse`. A choice row has `options`. A score row has `levels`. Do not send a `criteria` object.\n- `type` is `noul`, `choice`, or `score`.\n- `state` may be a string, object, or array.\n\n64k tokens for state plus all questions. 32k tokens for state plus the single longest question. English works best. No files or images. Dependent follow-ups need a second call.\n',
		accounts: { typesafe: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: {
			type: 'object',
			properties: {
				state: {
					description:
						'The content to evaluate: a string, object, or array. Put facts here; put judgments in questions.',
				},
				questions: {
					type: 'array',
					description:
						'Yes/no, choice, and score questions in one call. Each `id` must be unique. Send an array of rows, not an object keyed by id.',
					items: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
								description:
									'Key for this question in the answers map. For example `is_urgent`. Must be unique.',
							},
							type: {
								type: 'string',
								description: 'Question type.',
								enum: ['noul', 'choice', 'score'],
							},
						},
						required: ['id', 'type'],
						allOf: [
							{
								if: { properties: { type: { const: 'noul' } } },
								then: {
									type: 'object',
									properties: {
										instructions: {
											description:
												'A yes/no question. String, object, or array.',
										},
										criteriaTrue: {
											type: 'string',
											description: 'What a yes (value near 1) means.',
										},
										criteriaFalse: {
											type: 'string',
											description: 'What a no (value near 0) means.',
										},
									},
									required: ['instructions'],
								},
							},
							{
								if: { properties: { type: { const: 'choice' } } },
								then: {
									type: 'object',
									properties: {
										instructions: {
											description:
												'What the model should decide. String, object, or array.',
										},
										options: {
											type: 'array',
											description:
												'Add an `other` option when the set may not cover the input.',
											items: {
												type: 'object',
												properties: {
													option: {
														type: 'string',
														description:
															'Option key returned in `choice`.',
													},
													description: {
														type: 'string',
														description: 'Rubric for this option.',
													},
												},
												required: ['option'],
											},
											maxItems: 255,
										},
									},
									required: ['instructions', 'options'],
								},
							},
							{
								if: { properties: { type: { const: 'score' } } },
								then: {
									type: 'object',
									properties: {
										instructions: {
											description:
												'What the model should rate. One dimension per score. String, object, or array.',
										},
										levels: {
											type: 'array',
											description:
												'Ordered situational labels. For example: `Calm`, `Frustrated`, `Very angry`.',
											items: {
												type: 'string',
												description: 'One situational label.',
											},
											minItems: 2,
											maxItems: 10,
										},
									},
									required: ['instructions', 'levels'],
								},
							},
						],
					},
				},
				model: {
					type: 'string',
					description:
						'Model name or alias, for example `jev-latest`. Use listModels to see aliases.',
					default: 'jev-latest',
				},
			},
			required: ['state', 'questions'],
		},
		outputSchema: {
			type: 'object',
			properties: {
				model: {
					type: 'string',
					description:
						'Resolved versioned model ID that answered, for example `jev-1.13.0`.',
				},
				answers: {
					description:
						'Map keyed by your question ids. Noul: `noul` 0-1. Choice: `choice`, `probabilities`, `confidence`. Score: `score`, `legend`, `probabilities`, `confidence`.',
				},
				usage: {
					type: 'object',
					description: 'Token usage for this call.',
					properties: {
						input_tokens: {
							type: 'number',
							description: 'Tokens in the request (state plus questions).',
						},
						output_tokens: {
							type: 'number',
							description: 'Tokens in the model response.',
						},
					},
					required: [],
				},
			},
			required: [],
		},
	},
	{
		appName: 'typesafe',
		appVersion: 1,
		endpointName: 'listModels',
		label: 'List models',
		description: 'List models and aliases available to the account.',
		context:
			'---\nname: listModels\ndescription: List TypeSafe model aliases the connected account can send in evaluate.model\n---\n\nGET `/v1/models`. Currently returns aliases (`jev-latest`, `jev-preview`), each with `name`, `description`, and `release_date`.\n\nUse a returned `name` as `evaluate.model`. `jev-latest` is the usual default. Versioned IDs such as `jev-1.13.0` work in `evaluate.model` even if they are not in this list. Pin a versioned ID when you have tuned confidence thresholds; aliases move when a new release ships.\n\nThe evaluate response `model` field is the resolved versioned ID that actually answered.\n',
		accounts: { typesafe: { scope: [] } },
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false,
			arbitraryCallHint: false,
		},
		inputSchema: { type: 'object', properties: {}, required: [] },
		outputSchema: {
			type: 'object',
			properties: {
				models: {
					type: 'array',
					description: 'Aliases and models the account can send in evaluate.model.',
					items: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
								description:
									'Alias or ID for evaluate.model, for example `jev-latest`.',
							},
							description: {
								type: 'string',
								description: 'What this alias or model is for.',
							},
							release_date: {
								type: 'string',
								description: 'When this model was released.',
							},
						},
						required: [],
					},
				},
			},
			required: [],
		},
	},
];
