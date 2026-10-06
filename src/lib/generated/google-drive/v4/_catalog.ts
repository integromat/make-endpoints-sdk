// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { copyFile } from './copy-file.ts';
import { createDrive } from './create-drive.ts';
import { createFile } from './create-file.ts';
import { createPermission } from './create-permission.ts';
import { deleteDrive } from './delete-drive.ts';
import { deleteFile } from './delete-file.ts';
import { deletePermission } from './delete-permission.ts';
import { deleteRevision } from './delete-revision.ts';
import { getAbout } from './get-about.ts';
import { getDrive } from './get-drive.ts';
import { getFile } from './get-file.ts';
import { getRevision } from './get-revision.ts';
import { listComments } from './list-comments.ts';
import { listDrives } from './list-drives.ts';
import { listFiles } from './list-files.ts';
import { listRevisions } from './list-revisions.ts';
import { updateDrive } from './update-drive.ts';
import { updateFile } from './update-file.ts';
import { updatePermission } from './update-permission.ts';
import { updateRevision } from './update-revision.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CopyFileInput, CopyFileOutput } from './copy-file.ts';
export type { CreateDriveInput, CreateDriveOutput } from './create-drive.ts';
export type { CreateFileInput, CreateFileOutput } from './create-file.ts';
export type { CreatePermissionInput, CreatePermissionOutput } from './create-permission.ts';
export type { DeleteDriveInput, DeleteDriveOutput } from './delete-drive.ts';
export type { DeleteFileInput, DeleteFileOutput } from './delete-file.ts';
export type { DeletePermissionInput, DeletePermissionOutput } from './delete-permission.ts';
export type { DeleteRevisionInput, DeleteRevisionOutput } from './delete-revision.ts';
export type { GetAboutInput, GetAboutOutput } from './get-about.ts';
export type { GetDriveInput, GetDriveOutput } from './get-drive.ts';
export type { GetFileInput, GetFileOutput } from './get-file.ts';
export type { GetRevisionInput, GetRevisionOutput } from './get-revision.ts';
export type { ListCommentsInput, ListCommentsOutput } from './list-comments.ts';
export type { ListDrivesInput, ListDrivesOutput } from './list-drives.ts';
export type { ListFilesInput, ListFilesOutput } from './list-files.ts';
export type { ListRevisionsInput, ListRevisionsOutput } from './list-revisions.ts';
export type { UpdateDriveInput, UpdateDriveOutput } from './update-drive.ts';
export type { UpdateFileInput, UpdateFileOutput } from './update-file.ts';
export type { UpdatePermissionInput, UpdatePermissionOutput } from './update-permission.ts';
export type { UpdateRevisionInput, UpdateRevisionOutput } from './update-revision.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		copyFile: copyFile.bind({ endpointCaller }),
		createDrive: createDrive.bind({ endpointCaller }),
		createFile: createFile.bind({ endpointCaller }),
		createPermission: createPermission.bind({ endpointCaller }),
		deleteDrive: deleteDrive.bind({ endpointCaller }),
		deleteFile: deleteFile.bind({ endpointCaller }),
		deletePermission: deletePermission.bind({ endpointCaller }),
		deleteRevision: deleteRevision.bind({ endpointCaller }),
		getAbout: getAbout.bind({ endpointCaller }),
		getDrive: getDrive.bind({ endpointCaller }),
		getFile: getFile.bind({ endpointCaller }),
		getRevision: getRevision.bind({ endpointCaller }),
		listComments: listComments.bind({ endpointCaller }),
		listDrives: listDrives.bind({ endpointCaller }),
		listFiles: listFiles.bind({ endpointCaller }),
		listRevisions: listRevisions.bind({ endpointCaller }),
		updateDrive: updateDrive.bind({ endpointCaller }),
		updateFile: updateFile.bind({ endpointCaller }),
		updatePermission: updatePermission.bind({ endpointCaller }),
		updateRevision: updateRevision.bind({ endpointCaller }),
	};
};

export class GoogleDriveV4Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
