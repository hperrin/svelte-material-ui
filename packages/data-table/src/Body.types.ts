import type { SMUIDataTableRowAccessor } from './Row.types.js';

export interface SMUIDataTableBodyAccessor {
  readonly rows: SMUIDataTableRowAccessor[];
  readonly orderedRows: SMUIDataTableRowAccessor[];
}
