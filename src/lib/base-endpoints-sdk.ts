import type { EndpointCaller, EndpointOptions, EndpointPointer } from './shared.ts';
import { resolveProjectId } from './teams-to-projects.ts';
import type { Transport, TransportContext } from './transport/transport.ts';

/**
 * `teamId` stays required in the type, as before. `projectId` is its alias: JavaScript callers can
 * pass either (both only when equal); TypeScript callers pass `projectId` next to `teamId` for now.
 */
export type EndpointsSdkOptions = {
	transport: Transport;
	teamId: number;
	projectId?: number;
};

export type EndpointsCatalog<ENDPOINTS> = (endpointCaller: EndpointCaller) => ENDPOINTS;

/**
 * Shared runtime behind every generated client: the full `EndpointsSdk`, the per-app clients
 * (`@makehq/endpoints-sdk/apps/<app>`) and the per-version clients
 * (`@makehq/endpoints-sdk/apps/<app>/v<N>`). Only the catalog differs, so only the catalog is
 * injected.
 */
export class BaseEndpointsSdk<ENDPOINTS> {
	readonly #transport: Transport;
	readonly #teamId: number;
	readonly #endpointCaller: EndpointCaller;
	readonly endpoints: ENDPOINTS;

	constructor(options: EndpointsSdkOptions, catalog: EndpointsCatalog<ENDPOINTS>) {
		this.#transport = options.transport;
		// Not validated: a missing or non-number ID is sent as before. Only conflicting aliases throw.
		this.#teamId = resolveProjectId(options.projectId, options.teamId) as number;
		this.#endpointCaller = this.#callEndpoint.bind(this);
		this.endpoints = catalog(this.#endpointCaller);
	}

	get #transportContext(): TransportContext {
		return {
			teamId: this.#teamId,
		};
	}

	async #callEndpoint<OUTPUT>(pointer: EndpointPointer, options: EndpointOptions) {
		const { output } = await this.#transport.callEndpoint<OUTPUT>(
			this.#transportContext,
			pointer,
			options,
		);
		return { output };
	}

	public execute<OUTPUT>(pointer: EndpointPointer, options: EndpointOptions) {
		return this.#endpointCaller<OUTPUT>(pointer, options);
	}
}
