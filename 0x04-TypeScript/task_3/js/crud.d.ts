import { RowId, RowElement } from './interfaces';

export function insertRow(row: RowElement): RowId;
export function updateRow(rowId: RowId, row: RowElement): RowId;
export function deleteRow(rowId: RowId): void;