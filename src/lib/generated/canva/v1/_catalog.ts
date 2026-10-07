// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { autofillDesign } from './autofill-design.ts';
import { createComment } from './create-comment.ts';
import { createCommentReply } from './create-comment-reply.ts';
import { createDesign } from './create-design.ts';
import { createFolder } from './create-folder.ts';
import { createUrlAssetUploadJob } from './create-url-asset-upload-job.ts';
import { createUrlImportJob } from './create-url-import-job.ts';
import { deleteAsset } from './delete-asset.ts';
import { deleteFolder } from './delete-folder.ts';
import { exportDesign } from './export-design.ts';
import { getAsset } from './get-asset.ts';
import { getBrandTemplateDataset } from './get-brand-template-dataset.ts';
import { getFolder } from './get-folder.ts';
import { getUserCapabilities } from './get-user-capabilities.ts';
import { listBrandTemplates } from './list-brand-templates.ts';
import { listFolderItems } from './list-folder-items.ts';
import { moveFolderItem } from './move-folder-item.ts';
import { updateAsset } from './update-asset.ts';
import { updateFolder } from './update-folder.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { AutofillDesignInput, AutofillDesignOutput } from './autofill-design.ts';
export type { CreateCommentInput, CreateCommentOutput } from './create-comment.ts';
export type { CreateCommentReplyInput, CreateCommentReplyOutput } from './create-comment-reply.ts';
export type { CreateDesignInput, CreateDesignOutput } from './create-design.ts';
export type { CreateFolderInput, CreateFolderOutput } from './create-folder.ts';
export type {
	CreateUrlAssetUploadJobInput,
	CreateUrlAssetUploadJobOutput,
} from './create-url-asset-upload-job.ts';
export type { CreateUrlImportJobInput, CreateUrlImportJobOutput } from './create-url-import-job.ts';
export type { DeleteAssetInput, DeleteAssetOutput } from './delete-asset.ts';
export type { DeleteFolderInput, DeleteFolderOutput } from './delete-folder.ts';
export type { ExportDesignInput, ExportDesignOutput } from './export-design.ts';
export type { GetAssetInput, GetAssetOutput } from './get-asset.ts';
export type {
	GetBrandTemplateDatasetInput,
	GetBrandTemplateDatasetOutput,
} from './get-brand-template-dataset.ts';
export type { GetFolderInput, GetFolderOutput } from './get-folder.ts';
export type {
	GetUserCapabilitiesInput,
	GetUserCapabilitiesOutput,
} from './get-user-capabilities.ts';
export type { ListBrandTemplatesInput, ListBrandTemplatesOutput } from './list-brand-templates.ts';
export type { ListFolderItemsInput, ListFolderItemsOutput } from './list-folder-items.ts';
export type { MoveFolderItemInput, MoveFolderItemOutput } from './move-folder-item.ts';
export type { UpdateAssetInput, UpdateAssetOutput } from './update-asset.ts';
export type { UpdateFolderInput, UpdateFolderOutput } from './update-folder.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		autofillDesign: autofillDesign.bind({ endpointCaller }),
		createComment: createComment.bind({ endpointCaller }),
		createCommentReply: createCommentReply.bind({ endpointCaller }),
		createDesign: createDesign.bind({ endpointCaller }),
		createFolder: createFolder.bind({ endpointCaller }),
		createUrlAssetUploadJob: createUrlAssetUploadJob.bind({ endpointCaller }),
		createUrlImportJob: createUrlImportJob.bind({ endpointCaller }),
		deleteAsset: deleteAsset.bind({ endpointCaller }),
		deleteFolder: deleteFolder.bind({ endpointCaller }),
		exportDesign: exportDesign.bind({ endpointCaller }),
		getAsset: getAsset.bind({ endpointCaller }),
		getBrandTemplateDataset: getBrandTemplateDataset.bind({ endpointCaller }),
		getFolder: getFolder.bind({ endpointCaller }),
		getUserCapabilities: getUserCapabilities.bind({ endpointCaller }),
		listBrandTemplates: listBrandTemplates.bind({ endpointCaller }),
		listFolderItems: listFolderItems.bind({ endpointCaller }),
		moveFolderItem: moveFolderItem.bind({ endpointCaller }),
		updateAsset: updateAsset.bind({ endpointCaller }),
		updateFolder: updateFolder.bind({ endpointCaller }),
	};
};

export class CanvaV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
