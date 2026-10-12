import { MakeTools } from '@makehq/sdk/tools';

import type { EndpointTool } from '../lib/tools.ts';

/** In the order an agent uses them to find a team: user, then organizations, then their teams. */
const DISCOVERY_TOOL_NAMES = ['users_me', 'organizations_list', 'teams_list'] as const;

/**
 * Tools from `@makehq/sdk/tools` for finding the team to pass as `--team-id`. This module is the
 * CLI's only runtime import of `@makehq/sdk/tools`, which `src/lib/**` can't use under `node10`.
 */
export const sdkDiscoveryTools = (): EndpointTool[] => {
	return DISCOVERY_TOOL_NAMES.map((name) => {
		const makeTool = MakeTools.find((candidate) => candidate.name === name);
		if (!makeTool) {
			throw new Error(`@makehq/sdk/tools has no "${name}" tool.`);
		}
		// No cast: type-check fails when `MakeTool` drifts from `EndpointTool`.
		const tool: EndpointTool = makeTool;
		return tool;
	});
};
