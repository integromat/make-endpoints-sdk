// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { cancelSignRequest } from './cancel-sign-request.ts';
import { copyFolder } from './copy-folder.ts';
import { createComment } from './create-comment.ts';
import { createFileMetadataInstance } from './create-file-metadata-instance.ts';
import { createFolder } from './create-folder.ts';
import { createFolderMetadataInstance } from './create-folder-metadata-instance.ts';
import { createSignRequest } from './create-sign-request.ts';
import { deleteFile } from './delete-file.ts';
import { deleteFolder } from './delete-folder.ts';
import { getBySharedLink } from './get-by-shared-link.ts';
import { getEnterpriseMetadataTemplates } from './get-enterprise-metadata-templates.ts';
import { getFile } from './get-file.ts';
import { getFolder } from './get-folder.ts';
import { getFolderItems } from './get-folder-items.ts';
import { getGlobalMetadataTemplates } from './get-global-metadata-templates.ts';
import { getMetadataTemplateSchema } from './get-metadata-template-schema.ts';
import { getSignRequest } from './get-sign-request.ts';
import { getSignRequests } from './get-sign-requests.ts';
import { getSignTemplates } from './get-sign-templates.ts';
import { searchForContent } from './search-for-content.ts';
import { updateFile } from './update-file.ts';
import { updateFileMetadata } from './update-file-metadata.ts';
import { updateFolder } from './update-folder.ts';
import { updateFolderMetadata } from './update-folder-metadata.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CancelSignRequestInput, CancelSignRequestOutput } from './cancel-sign-request.ts';
export type { CopyFolderInput, CopyFolderOutput } from './copy-folder.ts';
export type { CreateCommentInput, CreateCommentOutput } from './create-comment.ts';
export type {
	CreateFileMetadataInstanceInput,
	CreateFileMetadataInstanceOutput,
} from './create-file-metadata-instance.ts';
export type { CreateFolderInput, CreateFolderOutput } from './create-folder.ts';
export type {
	CreateFolderMetadataInstanceInput,
	CreateFolderMetadataInstanceOutput,
} from './create-folder-metadata-instance.ts';
export type { CreateSignRequestInput, CreateSignRequestOutput } from './create-sign-request.ts';
export type { DeleteFileInput, DeleteFileOutput } from './delete-file.ts';
export type { DeleteFolderInput, DeleteFolderOutput } from './delete-folder.ts';
export type { GetBySharedLinkInput, GetBySharedLinkOutput } from './get-by-shared-link.ts';
export type {
	GetEnterpriseMetadataTemplatesInput,
	GetEnterpriseMetadataTemplatesOutput,
} from './get-enterprise-metadata-templates.ts';
export type { GetFileInput, GetFileOutput } from './get-file.ts';
export type { GetFolderInput, GetFolderOutput } from './get-folder.ts';
export type { GetFolderItemsInput, GetFolderItemsOutput } from './get-folder-items.ts';
export type {
	GetGlobalMetadataTemplatesInput,
	GetGlobalMetadataTemplatesOutput,
} from './get-global-metadata-templates.ts';
export type {
	GetMetadataTemplateSchemaInput,
	GetMetadataTemplateSchemaOutput,
} from './get-metadata-template-schema.ts';
export type { GetSignRequestInput, GetSignRequestOutput } from './get-sign-request.ts';
export type { GetSignRequestsInput, GetSignRequestsOutput } from './get-sign-requests.ts';
export type { GetSignTemplatesInput, GetSignTemplatesOutput } from './get-sign-templates.ts';
export type { SearchForContentInput, SearchForContentOutput } from './search-for-content.ts';
export type { UpdateFileInput, UpdateFileOutput } from './update-file.ts';
export type { UpdateFileMetadataInput, UpdateFileMetadataOutput } from './update-file-metadata.ts';
export type { UpdateFolderInput, UpdateFolderOutput } from './update-folder.ts';
export type {
	UpdateFolderMetadataInput,
	UpdateFolderMetadataOutput,
} from './update-folder-metadata.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		cancelSignRequest: cancelSignRequest.bind({ endpointCaller }),
		copyFolder: copyFolder.bind({ endpointCaller }),
		createComment: createComment.bind({ endpointCaller }),
		createFileMetadataInstance: createFileMetadataInstance.bind({ endpointCaller }),
		createFolder: createFolder.bind({ endpointCaller }),
		createFolderMetadataInstance: createFolderMetadataInstance.bind({ endpointCaller }),
		createSignRequest: createSignRequest.bind({ endpointCaller }),
		deleteFile: deleteFile.bind({ endpointCaller }),
		deleteFolder: deleteFolder.bind({ endpointCaller }),
		getBySharedLink: getBySharedLink.bind({ endpointCaller }),
		getEnterpriseMetadataTemplates: getEnterpriseMetadataTemplates.bind({ endpointCaller }),
		getFile: getFile.bind({ endpointCaller }),
		getFolder: getFolder.bind({ endpointCaller }),
		getFolderItems: getFolderItems.bind({ endpointCaller }),
		getGlobalMetadataTemplates: getGlobalMetadataTemplates.bind({ endpointCaller }),
		getMetadataTemplateSchema: getMetadataTemplateSchema.bind({ endpointCaller }),
		getSignRequest: getSignRequest.bind({ endpointCaller }),
		getSignRequests: getSignRequests.bind({ endpointCaller }),
		getSignTemplates: getSignTemplates.bind({ endpointCaller }),
		searchForContent: searchForContent.bind({ endpointCaller }),
		updateFile: updateFile.bind({ endpointCaller }),
		updateFileMetadata: updateFileMetadata.bind({ endpointCaller }),
		updateFolder: updateFolder.bind({ endpointCaller }),
		updateFolderMetadata: updateFolderMetadata.bind({ endpointCaller }),
	};
};

export class BoxV3Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
