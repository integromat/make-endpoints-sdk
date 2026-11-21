// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { createArow } from './create-arow.ts';
import { createDoc } from './create-doc.ts';
import { deleteRow } from './delete-row.ts';
import { getColumn } from './get-column.ts';
import { getControl } from './get-control.ts';
import { getDoc } from './get-doc.ts';
import { getFolder } from './get-folder.ts';
import { getFormula } from './get-formula.ts';
import { getRow } from './get-row.ts';
import { getSection } from './get-section.ts';
import { getTable } from './get-table.ts';
import { listColumns } from './list-columns.ts';
import { listControls } from './list-controls.ts';
import { listDocs } from './list-docs.ts';
import { listFormulas } from './list-formulas.ts';
import { listRows } from './list-rows.ts';
import { listSections } from './list-sections.ts';
import { listTables } from './list-tables.ts';
import { pushButton } from './push-button.ts';
import { updatePage } from './update-page.ts';
import { updateRow } from './update-row.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { CreateARowInput, CreateARowOutput } from './create-arow.ts';
export type { CreateDocInput, CreateDocOutput } from './create-doc.ts';
export type { DeleteRowInput, DeleteRowOutput } from './delete-row.ts';
export type { GetColumnInput, GetColumnOutput } from './get-column.ts';
export type { GetControlInput, GetControlOutput } from './get-control.ts';
export type { GetDocInput, GetDocOutput } from './get-doc.ts';
export type { GetFolderInput, GetFolderOutput } from './get-folder.ts';
export type { GetFormulaInput, GetFormulaOutput } from './get-formula.ts';
export type { GetRowInput, GetRowOutput } from './get-row.ts';
export type { GetSectionInput, GetSectionOutput } from './get-section.ts';
export type { GetTableInput, GetTableOutput } from './get-table.ts';
export type { ListColumnsInput, ListColumnsOutput } from './list-columns.ts';
export type { ListControlsInput, ListControlsOutput } from './list-controls.ts';
export type { ListDocsInput, ListDocsOutput } from './list-docs.ts';
export type { ListFormulasInput, ListFormulasOutput } from './list-formulas.ts';
export type { ListRowsInput, ListRowsOutput } from './list-rows.ts';
export type { ListSectionsInput, ListSectionsOutput } from './list-sections.ts';
export type { ListTablesInput, ListTablesOutput } from './list-tables.ts';
export type { PushButtonInput, PushButtonOutput } from './push-button.ts';
export type { UpdatePageInput, UpdatePageOutput } from './update-page.ts';
export type { UpdateRowInput, UpdateRowOutput } from './update-row.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		createArow: createArow.bind({ endpointCaller }),
		createDoc: createDoc.bind({ endpointCaller }),
		deleteRow: deleteRow.bind({ endpointCaller }),
		getColumn: getColumn.bind({ endpointCaller }),
		getControl: getControl.bind({ endpointCaller }),
		getDoc: getDoc.bind({ endpointCaller }),
		getFolder: getFolder.bind({ endpointCaller }),
		getFormula: getFormula.bind({ endpointCaller }),
		getRow: getRow.bind({ endpointCaller }),
		getSection: getSection.bind({ endpointCaller }),
		getTable: getTable.bind({ endpointCaller }),
		listColumns: listColumns.bind({ endpointCaller }),
		listControls: listControls.bind({ endpointCaller }),
		listDocs: listDocs.bind({ endpointCaller }),
		listFormulas: listFormulas.bind({ endpointCaller }),
		listRows: listRows.bind({ endpointCaller }),
		listSections: listSections.bind({ endpointCaller }),
		listTables: listTables.bind({ endpointCaller }),
		pushButton: pushButton.bind({ endpointCaller }),
		updatePage: updatePage.bind({ endpointCaller }),
		updateRow: updateRow.bind({ endpointCaller }),
	};
};

export class CodaV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}
