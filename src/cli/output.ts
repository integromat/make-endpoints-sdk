export type OutputFormat = 'json' | 'compact' | 'table';

const MAX_COL_WIDTH = 60;

/** SGR open and close codes, the pairs `util.inspect.colors` uses. */
const STYLES = {
	bold: ['\u001b[1m', '\u001b[22m'],
	dim: ['\u001b[2m', '\u001b[22m'],
} as const;

/**
 * Styles `text` only when stdout is a terminal and `NO_COLOR` is unset, so piped and agent output
 * stays plain. Done here rather than with `util.styleText`, which Node.js 20 gained in 20.12 and
 * which checks the stream only from 20.18 and 22.8; `engines` allows every 20.x.
 */
const _style = (style: keyof typeof STYLES, text: string): string => {
	if (!process.stdout.isTTY || process.env.NO_COLOR) return text;
	const [open, close] = STYLES[style];
	return `${open}${text}${close}`;
};

const _formatTable = (data: unknown): string => {
	const rows: unknown[] = Array.isArray(data) ? data : [data];
	if (rows.length === 0) return _style('dim', '(empty)');
	const keys = [
		...new Set(rows.flatMap((row) => (row && typeof row === 'object' ? Object.keys(row) : []))),
	];
	if (keys.length === 0) return JSON.stringify(data, null, 2);

	const serialize = (value: unknown): string => {
		const text =
			value === null || value === undefined
				? ''
				: typeof value === 'object'
					? JSON.stringify(value)
					: String(value);
		return text.length > MAX_COL_WIDTH ? `${text.slice(0, MAX_COL_WIDTH - 1)}…` : text;
	};
	const getCell = (row: unknown, key: string): unknown =>
		row && typeof row === 'object' ? (row as Record<string, unknown>)[key] : undefined;
	const widths = new Map(
		keys.map((key) => [
			key,
			Math.max(key.length, ...rows.map((row) => serialize(getCell(row, key)).length)),
		]),
	);
	const width = (key: string): number => widths.get(key) ?? key.length;

	const header = _style('bold', keys.map((key) => key.padEnd(width(key))).join(' | '));
	const separator = _style('dim', keys.map((key) => '-'.repeat(width(key))).join('-+-'));
	const body = rows.map((row) =>
		keys.map((key) => serialize(getCell(row, key)).padEnd(width(key))).join(' | '),
	);
	return [header, separator, ...body].join('\n');
};

/** Renders a command result the way `make-cli` does. Strings are printed as they are. */
export const formatOutput = (data: unknown, format: OutputFormat): string => {
	if (typeof data === 'string') return data;
	if (format === 'compact') return JSON.stringify(data);
	if (format === 'json') return JSON.stringify(data, null, 2);
	return _formatTable(data);
};
