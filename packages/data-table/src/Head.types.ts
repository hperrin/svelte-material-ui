import type { ComponentProps } from 'svelte';
import type Component from './Head.svelte';

export declare class HeadComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLTableSectionElement>>,
    'use'
  > &
    ComponentProps<Component>;
}

import type { SMUICheckboxInputAccessor } from '@smui/common';
import type { SMUIDataTableCellAccessor } from './Cell.types.js';

export interface SMUIDataTableHeadAccessor {
  readonly cells: SMUIDataTableCellAccessor[];
  readonly orderedCells: SMUIDataTableCellAccessor[];
  readonly checkbox: SMUICheckboxInputAccessor | undefined;
}
