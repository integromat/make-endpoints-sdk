// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createForm } from './create-form.ts';
import { createFormSubmission } from './create-form-submission.ts';
import { getUserUsage } from './get-user-usage.ts';
import { listFormQuestions } from './list-form-questions.ts';
import { listFormSubmissions } from './list-form-submissions.ts';
import { listSubUsers } from './list-sub-users.ts';
import { listUserSubmissions } from './list-user-submissions.ts';
import { updateFormQuestions } from './update-form-questions.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateFormInput, CreateFormOutput } from './create-form.ts';
export type {
	CreateFormSubmissionInput,
	CreateFormSubmissionOutput,
} from './create-form-submission.ts';
export type { GetUserUsageInput, GetUserUsageOutput } from './get-user-usage.ts';
export type { ListFormQuestionsInput, ListFormQuestionsOutput } from './list-form-questions.ts';
export type {
	ListFormSubmissionsInput,
	ListFormSubmissionsOutput,
} from './list-form-submissions.ts';
export type { ListSubUsersInput, ListSubUsersOutput } from './list-sub-users.ts';
export type {
	ListUserSubmissionsInput,
	ListUserSubmissionsOutput,
} from './list-user-submissions.ts';
export type {
	UpdateFormQuestionsInput,
	UpdateFormQuestionsOutput,
} from './update-form-questions.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createForm: createForm.bind({ endpointCaller }),
		createFormSubmission: createFormSubmission.bind({ endpointCaller }),
		getUserUsage: getUserUsage.bind({ endpointCaller }),
		listFormQuestions: listFormQuestions.bind({ endpointCaller }),
		listFormSubmissions: listFormSubmissions.bind({ endpointCaller }),
		listSubUsers: listSubUsers.bind({ endpointCaller }),
		listUserSubmissions: listUserSubmissions.bind({ endpointCaller }),
		updateFormQuestions: updateFormQuestions.bind({ endpointCaller }),
	};
};

export class JotformV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
