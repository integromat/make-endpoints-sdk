// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createApermission } from './create-apermission.ts';
import { createNote } from './create-note.ts';
import { deleteAnote } from './delete-anote.ts';
import { deleteApermission } from './delete-apermission.ts';
import { getAnote } from './get-anote.ts';
import { listNotes } from './list-notes.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateAPermissionInput, CreateAPermissionOutput } from './create-apermission.ts';
export type { CreateNoteInput, CreateNoteOutput } from './create-note.ts';
export type { DeleteANoteInput, DeleteANoteOutput } from './delete-anote.ts';
export type { DeleteAPermissionInput, DeleteAPermissionOutput } from './delete-apermission.ts';
export type { GetANoteInput, GetANoteOutput } from './get-anote.ts';
export type { ListNotesInput, ListNotesOutput } from './list-notes.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createApermission: createApermission.bind({ endpointCaller }),
		createNote: createNote.bind({ endpointCaller }),
		deleteAnote: deleteAnote.bind({ endpointCaller }),
		deleteApermission: deleteApermission.bind({ endpointCaller }),
		getAnote: getAnote.bind({ endpointCaller }),
		listNotes: listNotes.bind({ endpointCaller }),
	};
};

export class GoogleKeepV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
