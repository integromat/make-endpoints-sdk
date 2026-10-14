import type { EndpointCaller, EndpointOptions, EndpointPointer } from './shared.ts';
import { resolveProjectId } from './teams-to-projects.ts';
import type { Transport, TransportContext } from './transport/transport.ts';

/** `projectId` is the new name of `teamId`; pass either. Both is fine only when they are equal. */
export type EndpointsSdkOptions = { transport: Transport } & (
	| { projectId: number; teamId?: number }
	| { teamId: number; projectId?: number }
);

const _resolveOptionsProjectId = ({ projectId, teamId }: EndpointsSdkOptions): number => {
	const id = resolveProjectId(projectId, teamId);
	if (typeof id !== 'number') {
		throw new Error('projectId must be a number.');
	}
	return id;
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
		this.#teamId = _resolveOptionsProjectId(options);
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
