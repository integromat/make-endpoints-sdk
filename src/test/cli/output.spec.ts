import { stripVTControlCharacters } from 'node:util';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { formatOutput } from '../../cli/output.ts';

const ROWS = [{ id: 1, name: 'alpha' }];
const ESCAPE = '\u001b[';

const originalIsTTY = Object.getOwnPropertyDescriptor(process.stdout, 'isTTY');

const setTTY = (isTTY: boolean): void => {
	Object.defineProperty(process.stdout, 'isTTY', { value: isTTY, configurable: true });
};

afterEach(() => {
	if (originalIsTTY) Object.defineProperty(process.stdout, 'isTTY', originalIsTTY);
	vi.unstubAllEnvs();
});

describe('table output', () => {
	it('colours the header and separator on a terminal', () => {
		setTTY(true);
		vi.stubEnv('NO_COLOR', '');

		const table = formatOutput(ROWS, 'table');

		expect(table).toContain(ESCAPE);
		expect(stripVTControlCharacters(table).split('\n')).toEqual([
			'id | name ',
			'---+------',
			'1  | alpha',
		]);
	});

	it('stays plain when stdout is not a terminal', () => {
		setTTY(false);
		vi.stubEnv('NO_COLOR', '');

		expect(formatOutput(ROWS, 'table')).not.toContain(ESCAPE);
	});

	it('stays plain on a terminal when NO_COLOR is set', () => {
		setTTY(true);
		vi.stubEnv('NO_COLOR', '1');

		expect(formatOutput(ROWS, 'table')).not.toContain(ESCAPE);
	});
});
