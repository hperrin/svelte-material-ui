import type { SMUIDataTableRowAccessor } from './Row.types';

export interface SMUIDataTableBodyAccessor {
  readonly rows: SMUIDataTableRowAccessor[];
  readonly orderedRows: SMUIDataTableRowAccessor[];
}
