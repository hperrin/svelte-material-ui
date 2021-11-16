import type Component from './Cell.svelte';

export declare class CellComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLTableCellElement>>,
    'use' | 'class' | 'numeric' | 'checkbox' | 'columnId' | 'sortable'
  > &
    Component['$$prop_def'];
}

interface SMUIDataTableHeaderCellAccessor {
  _smui_data_table_header_cell_accessor: true;
  readonly columnId: string;
}

interface SMUIDataTableBodyCellAccessor {
  _smui_data_table_header_cell_accessor: false;
  readonly columnId: undefined;
}

export type SMUIDataTableCellAccessor = (
  | SMUIDataTableHeaderCellAccessor
  | SMUIDataTableBodyCellAccessor
) & {
  readonly element: HTMLTableCellElement;
  addClass(className: string): void;
  removeClass(className: string): void;
  getAttr(name: string): string | null;
  addAttr(name: string, value: string): void;
};
