import * as catalog from './generated/catalog.ts';
import type { EndpointDefinition } from './shared.ts';

/**
 * Generated endpoint definitions, or `[]` while the generated code predates them. The namespace
 * read compiles either way, so the runtime and the generator can land in any order.
 */
export const definitions: EndpointDefinition[] =
	(catalog as { definitions?: EndpointDefinition[] }).definitions ?? [];
