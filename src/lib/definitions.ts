import * as catalog from './generated/catalog.ts';
import type { EndpointDefinition } from './shared.ts';

/**
 * Definitions of every generated endpoint, or `[]` when the generated catalog doesn't export
 * `definitions` yet. Reading through the namespace keeps this file compiling on both sides of the
 * sync that starts emitting them, so the runtime and the generator can land in either order.
 */
export const definitions: EndpointDefinition[] =
	(catalog as { definitions?: EndpointDefinition[] }).definitions ?? [];
