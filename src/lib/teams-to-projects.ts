import type { JSONValue } from './shared.ts';

let enabled: boolean | undefined;

/** Whether `TEAMS_TO_PROJECTS` (`1` or `true`) is set. Read once per process. */
export const isTeamsToProjectsEnabled = (): boolean => {
	if (enabled === undefined) {
		const value = globalThis.process?.env?.TEAMS_TO_PROJECTS?.toLowerCase();
		enabled = value === '1' || value === 'true';
	}
	return enabled;
};

/** `team` wording with the flag off, `project` wording with it on. */
export const teamOrProject = (team: string, project: string): string => {
	return isTeamsToProjectsEnabled() ? project : team;
};

/** `projectId`, falling back to its deprecated alias `teamId`. Rejects both when they differ. */
export const resolveProjectId = (projectId: JSONValue, teamId: JSONValue): JSONValue => {
	if (projectId !== undefined && teamId !== undefined && projectId !== teamId) {
		throw new Error(
			'projectId and teamId differ. Pass only projectId; teamId is its deprecated alias.',
		);
	}
	return projectId ?? teamId;
};
