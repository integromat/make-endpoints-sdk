export type OutputFormat = 'json' | 'compact' | 'table';

const MAX_COL_WIDTH = 60;

const _formatTable = (data: unknown): string => {
	const rows: unknown[] = Array.isArray(data) ? data : [data];
	if (rows.length === 0) return '(empty)';
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

	const header = keys.map((key) => key.padEnd(width(key))).join(' | ');
	const separator = keys.map((key) => '-'.repeat(width(key))).join('-+-');
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
