import { readFile } from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';

/** Credentials saved by `make-cli login`, which this CLI reads but never writes. */
export type Config = {
	apiKey: string;
	zone: string;
};

/** Path of `make-cli`'s config file, so both CLIs share one login. */
export const getConfigPath = (): string => {
	if (process.platform === 'win32') {
		const appData = process.env.APPDATA ?? os.homedir();
		return path.join(appData, 'make-cli', 'config.json');
	}
	const xdgConfigHome = process.env.XDG_CONFIG_HOME ?? path.join(os.homedir(), '.config');
	return path.join(xdgConfigHome, 'make-cli', 'config.json');
};

/** Reads the saved credentials, or `null` when there are none or the file is invalid. */
export const readConfig = async (): Promise<Config | null> => {
	try {
		const raw = await readFile(getConfigPath(), 'utf8');
		const parsed: unknown = JSON.parse(raw);
		if (
			parsed !== null &&
			typeof parsed === 'object' &&
			'apiKey' in parsed &&
			'zone' in parsed &&
			typeof parsed.apiKey === 'string' &&
			typeof parsed.zone === 'string'
		) {
			return { apiKey: parsed.apiKey, zone: parsed.zone };
		}
		return null;
	} catch {
		return null;
	}
};
