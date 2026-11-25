import type { EndpointCaller, EndpointOptions, EndpointPointer } from './shared.ts';
import type { Transport, TransportContext } from './transport/transport.ts';

export type EndpointsSdkOptions = {
	transport: Transport;
	teamId: number;
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
		this.#teamId = options.teamId;
		this.#endpointCaller = this.#callEndpoint.bind(this);
		this.endpoints = catalog(this.#endpointCaller);
	}

	get #transportContext(): TransportContext {
		return {
			teamId: this.#teamId,
		};
	}

	async #callEndpoint<OUTPUT>(pointer: EndpointPointer, options: EndpointOptions) {
		const { output, execution } = await this.#transport.callEndpoint<OUTPUT>(
			this.#transportContext,
			pointer,
			options,
		);
		if (execution === undefined) {
			throw new Error(
				`Make ran ${pointer.appName} v${pointer.appVersion} ${pointer.endpointName} but returned no execution, which every successful Endpoint call reports. The output is lost; check the server version before retrying, as the Endpoint has already run.`,
			);
		}
		return { output, execution };
	}

	public execute<OUTPUT>(pointer: EndpointPointer, options: EndpointOptions) {
		return this.#endpointCaller<OUTPUT>(pointer, options);
	}
}
