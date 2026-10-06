// Generated file. Do not edit by hand.
import type { EndpointCaller } from '../shared.ts';

import { endpoints as asanaEndpoints } from './asana/_catalog.ts';
import { endpoints as calendlyEndpoints } from './calendly/_catalog.ts';
import { endpoints as canvaEndpoints } from './canva/_catalog.ts';
import { endpoints as clickupEndpoints } from './clickup/_catalog.ts';
import { endpoints as cloudinaryEndpoints } from './cloudinary/_catalog.ts';
import { endpoints as confluenceEndpoints } from './confluence/_catalog.ts';
import { endpoints as discordEndpoints } from './discord/_catalog.ts';
import { endpoints as githubEndpoints } from './github/_catalog.ts';
import { endpoints as googleCalendarEndpoints } from './google-calendar/_catalog.ts';
import { endpoints as googleContactsEndpoints } from './google-contacts/_catalog.ts';
import { endpoints as googleDocsEndpoints } from './google-docs/_catalog.ts';
import { endpoints as googleDriveEndpoints } from './google-drive/_catalog.ts';
import { endpoints as googleEmailEndpoints } from './google-email/_catalog.ts';
import { endpoints as googleFormsEndpoints } from './google-forms/_catalog.ts';
import { endpoints as googleSheetsEndpoints } from './google-sheets/_catalog.ts';
import { endpoints as googleSlidesEndpoints } from './google-slides/_catalog.ts';
import { endpoints as highlevelEndpoints } from './highlevel/_catalog.ts';
import { endpoints as jiraEndpoints } from './jira/_catalog.ts';
import { endpoints as linkedinEndpoints } from './linkedin/_catalog.ts';
import { endpoints as mailchimpEndpoints } from './mailchimp/_catalog.ts';
import { endpoints as mcpClientEndpoints } from './mcp-client/_catalog.ts';
import { endpoints as microsoftCalendarEndpoints } from './microsoft-calendar/_catalog.ts';
import { endpoints as microsoftEmailEndpoints } from './microsoft-email/_catalog.ts';
import { endpoints as microsoftExcelEndpoints } from './microsoft-excel/_catalog.ts';
import { endpoints as notionEndpoints } from './notion/_catalog.ts';
import { endpoints as pipedriveEndpoints } from './pipedrive/_catalog.ts';
import { endpoints as shopifyEndpoints } from './shopify/_catalog.ts';
import { endpoints as slackEndpoints } from './slack/_catalog.ts';
import { endpoints as stripeEndpoints } from './stripe/_catalog.ts';
import { endpoints as tallyEndpoints } from './tally/_catalog.ts';
import { endpoints as telegramEndpoints } from './telegram/_catalog.ts';
import { endpoints as typeformEndpoints } from './typeform/_catalog.ts';
import { endpoints as typesafeEndpoints } from './typesafe/_catalog.ts';
import { endpoints as youtubeEndpoints } from './youtube/_catalog.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		asana: asanaEndpoints(endpointCaller),
		calendly: calendlyEndpoints(endpointCaller),
		canva: canvaEndpoints(endpointCaller),
		clickup: clickupEndpoints(endpointCaller),
		cloudinary: cloudinaryEndpoints(endpointCaller),
		confluence: confluenceEndpoints(endpointCaller),
		discord: discordEndpoints(endpointCaller),
		github: githubEndpoints(endpointCaller),
		googleCalendar: googleCalendarEndpoints(endpointCaller),
		googleContacts: googleContactsEndpoints(endpointCaller),
		googleDocs: googleDocsEndpoints(endpointCaller),
		googleDrive: googleDriveEndpoints(endpointCaller),
		googleEmail: googleEmailEndpoints(endpointCaller),
		googleForms: googleFormsEndpoints(endpointCaller),
		googleSheets: googleSheetsEndpoints(endpointCaller),
		googleSlides: googleSlidesEndpoints(endpointCaller),
		highlevel: highlevelEndpoints(endpointCaller),
		jira: jiraEndpoints(endpointCaller),
		linkedin: linkedinEndpoints(endpointCaller),
		mailchimp: mailchimpEndpoints(endpointCaller),
		mcpClient: mcpClientEndpoints(endpointCaller),
		microsoftCalendar: microsoftCalendarEndpoints(endpointCaller),
		microsoftEmail: microsoftEmailEndpoints(endpointCaller),
		microsoftExcel: microsoftExcelEndpoints(endpointCaller),
		notion: notionEndpoints(endpointCaller),
		pipedrive: pipedriveEndpoints(endpointCaller),
		shopify: shopifyEndpoints(endpointCaller),
		slack: slackEndpoints(endpointCaller),
		stripe: stripeEndpoints(endpointCaller),
		tally: tallyEndpoints(endpointCaller),
		telegram: telegramEndpoints(endpointCaller),
		typeform: typeformEndpoints(endpointCaller),
		typesafe: typesafeEndpoints(endpointCaller),
		youtube: youtubeEndpoints(endpointCaller),
	};
};
