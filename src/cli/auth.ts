import { readConfig } from './config.ts';

export type AuthOptions = {
	apiKey?: string | undefined;
	zone?: string | undefined;
};

export type Auth = {
	token: string;
	zone: string;
};

/**
 * Resolves credentials like `make-cli`: flags, then `MAKE_API_KEY`/`MAKE_ZONE`, then the
 * `make-cli login` config file when neither is set.
 */
export const resolveAuth = async (options: AuthOptions): Promise<Auth> => {
	let token = options.apiKey ?? process.env.MAKE_API_KEY;
	let zone = options.zone ?? process.env.MAKE_ZONE;
	if (!token && !zone) {
		const config = await readConfig();
		if (config) {
			token = config.apiKey;
			zone = config.zone;
		}
	}
	if (!token) {
		throw new Error(
			'API key is required. Use --api-key, set MAKE_API_KEY, or run "make-cli login".',
		);
	}
	if (!zone) {
		throw new Error('Zone is required. Use --zone, set MAKE_ZONE, or run "make-cli login".');
	}
	return { token, zone };
};
