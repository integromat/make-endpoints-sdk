// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { adjustInventoryLevel } from './adjust-inventory-level.ts';
import { arbitraryCall } from './arbitrary-call.ts';
import { createAcustomer } from './create-acustomer.ts';
import { createAfulfillment } from './create-afulfillment.ts';
import { createAnOrder } from './create-an-order.ts';
import { createArticle } from './create-article.ts';
import { createProduct } from './create-product.ts';
import { createProductVariants } from './create-product-variants.ts';
import { getAcustomer } from './get-acustomer.ts';
import { getAnOrder } from './get-an-order.ts';
import { getFulfillments } from './get-fulfillments.ts';
import { getProduct } from './get-product.ts';
import { getProductVariant } from './get-product-variant.ts';
import { listBlogs } from './list-blogs.ts';
import { listLocations } from './list-locations.ts';
import { searchArticles } from './search-articles.ts';
import { searchCustomers } from './search-customers.ts';
import { searchFulfillmentOrders } from './search-fulfillment-orders.ts';
import { searchMetafields } from './search-metafields.ts';
import { searchOrders } from './search-orders.ts';
import { searchProducts } from './search-products.ts';
import { setMetafields } from './set-metafields.ts';
import { updateAcustomer } from './update-acustomer.ts';
import { updateAnOrder } from './update-an-order.ts';
import { updateInventoryLevel } from './update-inventory-level.ts';
import { updateProduct } from './update-product.ts';
import { updateProductVariants } from './update-product-variants.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type {
	AdjustInventoryLevelInput,
	AdjustInventoryLevelOutput,
} from './adjust-inventory-level.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateACustomerInput, CreateACustomerOutput } from './create-acustomer.ts';
export type { CreateAFulfillmentInput, CreateAFulfillmentOutput } from './create-afulfillment.ts';
export type { CreateAnOrderInput, CreateAnOrderOutput } from './create-an-order.ts';
export type { CreateArticleInput, CreateArticleOutput } from './create-article.ts';
export type { CreateProductInput, CreateProductOutput } from './create-product.ts';
export type {
	CreateProductVariantsInput,
	CreateProductVariantsOutput,
} from './create-product-variants.ts';
export type { GetACustomerInput, GetACustomerOutput } from './get-acustomer.ts';
export type { GetAnOrderInput, GetAnOrderOutput } from './get-an-order.ts';
export type { GetFulfillmentsInput, GetFulfillmentsOutput } from './get-fulfillments.ts';
export type { GetProductInput, GetProductOutput } from './get-product.ts';
export type { GetProductVariantInput, GetProductVariantOutput } from './get-product-variant.ts';
export type { ListBlogsInput, ListBlogsOutput } from './list-blogs.ts';
export type { ListLocationsInput, ListLocationsOutput } from './list-locations.ts';
export type { SearchArticlesInput, SearchArticlesOutput } from './search-articles.ts';
export type { SearchCustomersInput, SearchCustomersOutput } from './search-customers.ts';
export type {
	SearchFulfillmentOrdersInput,
	SearchFulfillmentOrdersOutput,
} from './search-fulfillment-orders.ts';
export type { SearchMetafieldsInput, SearchMetafieldsOutput } from './search-metafields.ts';
export type { SearchOrdersInput, SearchOrdersOutput } from './search-orders.ts';
export type { SearchProductsInput, SearchProductsOutput } from './search-products.ts';
export type { SetMetafieldsInput, SetMetafieldsOutput } from './set-metafields.ts';
export type { UpdateACustomerInput, UpdateACustomerOutput } from './update-acustomer.ts';
export type { UpdateAnOrderInput, UpdateAnOrderOutput } from './update-an-order.ts';
export type {
	UpdateInventoryLevelInput,
	UpdateInventoryLevelOutput,
} from './update-inventory-level.ts';
export type { UpdateProductInput, UpdateProductOutput } from './update-product.ts';
export type {
	UpdateProductVariantsInput,
	UpdateProductVariantsOutput,
} from './update-product-variants.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		adjustInventoryLevel: adjustInventoryLevel.bind({ endpointCaller }),
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createAcustomer: createAcustomer.bind({ endpointCaller }),
		createAfulfillment: createAfulfillment.bind({ endpointCaller }),
		createAnOrder: createAnOrder.bind({ endpointCaller }),
		createArticle: createArticle.bind({ endpointCaller }),
		createProduct: createProduct.bind({ endpointCaller }),
		createProductVariants: createProductVariants.bind({ endpointCaller }),
		getAcustomer: getAcustomer.bind({ endpointCaller }),
		getAnOrder: getAnOrder.bind({ endpointCaller }),
		getFulfillments: getFulfillments.bind({ endpointCaller }),
		getProduct: getProduct.bind({ endpointCaller }),
		getProductVariant: getProductVariant.bind({ endpointCaller }),
		listBlogs: listBlogs.bind({ endpointCaller }),
		listLocations: listLocations.bind({ endpointCaller }),
		searchArticles: searchArticles.bind({ endpointCaller }),
		searchCustomers: searchCustomers.bind({ endpointCaller }),
		searchFulfillmentOrders: searchFulfillmentOrders.bind({ endpointCaller }),
		searchMetafields: searchMetafields.bind({ endpointCaller }),
		searchOrders: searchOrders.bind({ endpointCaller }),
		searchProducts: searchProducts.bind({ endpointCaller }),
		setMetafields: setMetafields.bind({ endpointCaller }),
		updateAcustomer: updateAcustomer.bind({ endpointCaller }),
		updateAnOrder: updateAnOrder.bind({ endpointCaller }),
		updateInventoryLevel: updateInventoryLevel.bind({ endpointCaller }),
		updateProduct: updateProduct.bind({ endpointCaller }),
		updateProductVariants: updateProductVariants.bind({ endpointCaller }),
	};
};

export class ShopifyV3Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
