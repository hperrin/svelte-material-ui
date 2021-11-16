import type Component from './Row.svelte';

export declare class RowComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLTableRowElement>>,
    'use' | 'class' | 'rowId'
  > &
    Component['$$prop_def'];
}

import type { SMUICheckboxInputAccessor } from '@smui/common';

interface SMUIDataTableHeaderRowAccessor {
  _smui_data_table_row_accessor: false;
  readonly rowId: undefined;
}

interface SMUIDataTableBodyRowAccessor {
  _smui_data_table_row_accessor: true;
  readonly rowId: string;
}

export type SMUIDataTableRowAccessor = (
  | SMUIDataTableHeaderRowAccessor
  | SMUIDataTableBodyRowAccessor
) & {
  readonly element: HTMLTableRowElement;
  readonly checkbox: SMUICheckboxInputAccessor | undefined;
  readonly selected: boolean;
  addClass(className: string): void;
  removeClass(className: string): void;
  getAttr(name: string): string | null;
  addAttr(name: string, value: string): void;
};
