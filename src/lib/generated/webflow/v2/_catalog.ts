// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createAssetFolder } from './create-asset-folder.ts';
import { createItem } from './create-item.ts';
import { createProduct } from './create-product.ts';
import { createProductSkus } from './create-product-skus.ts';
import { deleteAsset } from './delete-asset.ts';
import { deleteItem } from './delete-item.ts';
import { fulfillOrder } from './fulfill-order.ts';
import { getAssetFolder } from './get-asset-folder.ts';
import { getCollection } from './get-collection.ts';
import { getCommentThread } from './get-comment-thread.ts';
import { getForm } from './get-form.ts';
import { getFormSubmission } from './get-form-submission.ts';
import { getItem } from './get-item.ts';
import { getItemInventory } from './get-item-inventory.ts';
import { getOrder } from './get-order.ts';
import { getPageMetadata } from './get-page-metadata.ts';
import { getProduct } from './get-product.ts';
import { getSite } from './get-site.ts';
import { listAssetFolders } from './list-asset-folders.ts';
import { listAssets } from './list-assets.ts';
import { listCollections } from './list-collections.ts';
import { listCommentReplies } from './list-comment-replies.ts';
import { listCommentThreads } from './list-comment-threads.ts';
import { listFormSubmissions } from './list-form-submissions.ts';
import { listForms } from './list-forms.ts';
import { listItems } from './list-items.ts';
import { listOrders } from './list-orders.ts';
import { listPages } from './list-pages.ts';
import { listProducts } from './list-products.ts';
import { listSites } from './list-sites.ts';
import { publishItems } from './publish-items.ts';
import { publishSite } from './publish-site.ts';
import { refundOrder } from './refund-order.ts';
import { unfulfillOrder } from './unfulfill-order.ts';
import { updateFormSubmission } from './update-form-submission.ts';
import { updateItem } from './update-item.ts';
import { updateItemInventory } from './update-item-inventory.ts';
import { updateOrder } from './update-order.ts';
import { updateProduct } from './update-product.ts';
import { updateProductSku } from './update-product-sku.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateAssetFolderInput, CreateAssetFolderOutput } from './create-asset-folder.ts';
export type { CreateItemInput, CreateItemOutput } from './create-item.ts';
export type { CreateProductInput, CreateProductOutput } from './create-product.ts';
export type { CreateProductSkusInput, CreateProductSkusOutput } from './create-product-skus.ts';
export type { DeleteAssetInput, DeleteAssetOutput } from './delete-asset.ts';
export type { DeleteItemInput, DeleteItemOutput } from './delete-item.ts';
export type { FulfillOrderInput, FulfillOrderOutput } from './fulfill-order.ts';
export type { GetAssetFolderInput, GetAssetFolderOutput } from './get-asset-folder.ts';
export type { GetCollectionInput, GetCollectionOutput } from './get-collection.ts';
export type { GetCommentThreadInput, GetCommentThreadOutput } from './get-comment-thread.ts';
export type { GetFormInput, GetFormOutput } from './get-form.ts';
export type { GetFormSubmissionInput, GetFormSubmissionOutput } from './get-form-submission.ts';
export type { GetItemInput, GetItemOutput } from './get-item.ts';
export type { GetItemInventoryInput, GetItemInventoryOutput } from './get-item-inventory.ts';
export type { GetOrderInput, GetOrderOutput } from './get-order.ts';
export type { GetPageMetadataInput, GetPageMetadataOutput } from './get-page-metadata.ts';
export type { GetProductInput, GetProductOutput } from './get-product.ts';
export type { GetSiteInput, GetSiteOutput } from './get-site.ts';
export type { ListAssetFoldersInput, ListAssetFoldersOutput } from './list-asset-folders.ts';
export type { ListAssetsInput, ListAssetsOutput } from './list-assets.ts';
export type { ListCollectionsInput, ListCollectionsOutput } from './list-collections.ts';
export type { ListCommentRepliesInput, ListCommentRepliesOutput } from './list-comment-replies.ts';
export type { ListCommentThreadsInput, ListCommentThreadsOutput } from './list-comment-threads.ts';
export type {
	ListFormSubmissionsInput,
	ListFormSubmissionsOutput,
} from './list-form-submissions.ts';
export type { ListFormsInput, ListFormsOutput } from './list-forms.ts';
export type { ListItemsInput, ListItemsOutput } from './list-items.ts';
export type { ListOrdersInput, ListOrdersOutput } from './list-orders.ts';
export type { ListPagesInput, ListPagesOutput } from './list-pages.ts';
export type { ListProductsInput, ListProductsOutput } from './list-products.ts';
export type { ListSitesInput, ListSitesOutput } from './list-sites.ts';
export type { PublishItemsInput, PublishItemsOutput } from './publish-items.ts';
export type { PublishSiteInput, PublishSiteOutput } from './publish-site.ts';
export type { RefundOrderInput, RefundOrderOutput } from './refund-order.ts';
export type { UnfulfillOrderInput, UnfulfillOrderOutput } from './unfulfill-order.ts';
export type {
	UpdateFormSubmissionInput,
	UpdateFormSubmissionOutput,
} from './update-form-submission.ts';
export type { UpdateItemInput, UpdateItemOutput } from './update-item.ts';
export type {
	UpdateItemInventoryInput,
	UpdateItemInventoryOutput,
} from './update-item-inventory.ts';
export type { UpdateOrderInput, UpdateOrderOutput } from './update-order.ts';
export type { UpdateProductInput, UpdateProductOutput } from './update-product.ts';
export type { UpdateProductSkuInput, UpdateProductSkuOutput } from './update-product-sku.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createAssetFolder: createAssetFolder.bind({ endpointCaller }),
		createItem: createItem.bind({ endpointCaller }),
		createProduct: createProduct.bind({ endpointCaller }),
		createProductSkus: createProductSkus.bind({ endpointCaller }),
		deleteAsset: deleteAsset.bind({ endpointCaller }),
		deleteItem: deleteItem.bind({ endpointCaller }),
		fulfillOrder: fulfillOrder.bind({ endpointCaller }),
		getAssetFolder: getAssetFolder.bind({ endpointCaller }),
		getCollection: getCollection.bind({ endpointCaller }),
		getCommentThread: getCommentThread.bind({ endpointCaller }),
		getForm: getForm.bind({ endpointCaller }),
		getFormSubmission: getFormSubmission.bind({ endpointCaller }),
		getItem: getItem.bind({ endpointCaller }),
		getItemInventory: getItemInventory.bind({ endpointCaller }),
		getOrder: getOrder.bind({ endpointCaller }),
		getPageMetadata: getPageMetadata.bind({ endpointCaller }),
		getProduct: getProduct.bind({ endpointCaller }),
		getSite: getSite.bind({ endpointCaller }),
		listAssetFolders: listAssetFolders.bind({ endpointCaller }),
		listAssets: listAssets.bind({ endpointCaller }),
		listCollections: listCollections.bind({ endpointCaller }),
		listCommentReplies: listCommentReplies.bind({ endpointCaller }),
		listCommentThreads: listCommentThreads.bind({ endpointCaller }),
		listForms: listForms.bind({ endpointCaller }),
		listFormSubmissions: listFormSubmissions.bind({ endpointCaller }),
		listItems: listItems.bind({ endpointCaller }),
		listOrders: listOrders.bind({ endpointCaller }),
		listPages: listPages.bind({ endpointCaller }),
		listProducts: listProducts.bind({ endpointCaller }),
		listSites: listSites.bind({ endpointCaller }),
		publishItems: publishItems.bind({ endpointCaller }),
		publishSite: publishSite.bind({ endpointCaller }),
		refundOrder: refundOrder.bind({ endpointCaller }),
		unfulfillOrder: unfulfillOrder.bind({ endpointCaller }),
		updateFormSubmission: updateFormSubmission.bind({ endpointCaller }),
		updateItem: updateItem.bind({ endpointCaller }),
		updateItemInventory: updateItemInventory.bind({ endpointCaller }),
		updateOrder: updateOrder.bind({ endpointCaller }),
		updateProduct: updateProduct.bind({ endpointCaller }),
		updateProductSku: updateProductSku.bind({ endpointCaller }),
	};
};

export class WebflowV2Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
