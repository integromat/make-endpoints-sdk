export type JSONValue =
	| Partial<{
			[key: string]: JSONValue;
	  }>
	| JSONValue[]
	| string
	| number
	| boolean
	| null
	| undefined;

export type EndpointPointer = {
	appName: string;
	appVersion: number;
	endpointName: string;
};

export type EndpointOptions = {
	input?: JSONValue;
	connectionId?: number;
};

export type EndpointCaller = <OUTPUT>(
	pointer: EndpointPointer,
	options: EndpointOptions,
) => Promise<{ output: OUTPUT }>;

export type EndpointFunctionThis = {
	endpointCaller: EndpointCaller;
};
