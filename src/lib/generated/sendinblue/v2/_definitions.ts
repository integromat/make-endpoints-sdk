// Generated file. Do not edit by hand.
import type { EndpointDefinition } from '../../../shared.ts';

export const definitions: EndpointDefinition[] = [
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'addContactsToList',
		label: 'Add contacts to a list',
		description: 'Adds existing contacts to a list by email addresses, IDs or external IDs.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'arbitraryCall',
		label: 'Arbitrary call',
		description: 'Performs an arbitrary authorized API call.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'createContact',
		label: 'Create a contact',
		description: 'Creates a contact, or updates the existing one when update is enabled.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'createEmailCampaign',
		label: 'Create an email campaign',
		description: 'Creates an email campaign as a draft or schedules it for sending.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'createFolder',
		label: 'Create a folder',
		description: 'Creates a contact folder.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'createList',
		label: 'Create a list',
		description: 'Creates a contact list in a folder.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'deleteContact',
		label: 'Delete a contact',
		description: 'Permanently deletes a contact by email, ID, phone or external ID.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'deleteEmailCampaign',
		label: 'Delete an email campaign',
		description: 'Deletes an email campaign that is not scheduled.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'deleteFolder',
		label: 'Delete a folder',
		description: 'Deletes a contact folder together with all lists inside it.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'deleteList',
		label: 'Delete a list',
		description: 'Deletes a contact list. The contacts in the list are not deleted.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'getAccount',
		label: 'Get account details',
		description:
			'Retrieves the details of the connected Brevo account, including plan and credits.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'getContact',
		label: 'Get a contact',
		description:
			'Retrieves a contact with its campaign statistics by email, ID, phone or external ID.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'getEmailCampaign',
		label: 'Get an email campaign',
		description:
			'Retrieves an email campaign with its content, recipients and optional statistics.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'getFolder',
		label: 'Get a folder',
		description: 'Retrieves a contact folder with its subscriber counts.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'getList',
		label: 'Get a list',
		description: 'Retrieves a contact list with its subscriber counts and campaign statistics.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'listContacts',
		label: 'List contacts',
		description:
			'Retrieves one page of contacts, optionally filtered by lists, segment, attributes or dates.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'listContactsInList',
		label: 'List contacts in a list',
		description: 'Retrieves one page of contacts that belong to a list.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'listEmailCampaigns',
		label: 'List email campaigns',
		description:
			'Retrieves one page of email campaigns, optionally filtered by type, status and sent date.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'listFolders',
		label: 'List folders',
		description: 'Retrieves one page of contact folders.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'listLists',
		label: 'List lists',
		description: 'Retrieves one page of contact lists across all folders.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'listListsInFolder',
		label: 'List lists in a folder',
		description: 'Retrieves one page of contact lists in a folder.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'sendCampaignReport',
		label: 'Send an email campaign report',
		description: 'Emails the PDF report of a sent email campaign to the given recipients.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'sendEmail',
		label: 'Send a transactional email',
		description: 'Sends or schedules a transactional email with inline content or a template.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'sendSms',
		label: 'Send a transactional SMS',
		description: 'Sends a transactional or marketing SMS to one mobile number.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'updateContact',
		label: 'Update a contact',
		description: 'Updates the attributes, lists and blacklist status of an existing contact.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'updateEmailCampaign',
		label: 'Update an email campaign',
		description:
			'Updates the content, recipients or schedule of an email campaign that is not sent yet.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'updateFolder',
		label: 'Update a folder',
		description: 'Renames a contact folder.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
	{
		appName: 'sendinblue',
		appVersion: 2,
		endpointName: 'updateList',
		label: 'Update a list',
		description: 'Renames a contact list or moves it to another folder.',
		context:
			'# Context for the Endpoint\n\nHere you can provide additional context for the Endpoint, which can be useful for humans and agents using it.\n\n> This field supports **Markdown**\n',
		accounts: { sendinblue2: { scope: [] } },
		inputSchema: {
			type: 'object',
			properties: {
				id: { type: 'number' },
				email: { type: 'string' },
				name: { type: 'string' },
			},
			required: ['id'],
		},
		outputSchema: { type: 'object', properties: { id: { type: 'number' } }, required: [] },
	},
];
