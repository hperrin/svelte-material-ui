import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './Head.svelte';

export declare class HeadComponentDev
  extends Component
  implements SmuiComponent
{
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

  getElement(): ReturnType<Component['getElement']>;
}

import type { SMUICheckboxInputAccessor } from '@smui/common';
import type { SMUIDataTableCellAccessor } from './Cell.types.js';

export interface SMUIDataTableHeadAccessor {
  readonly cells: SMUIDataTableCellAccessor[];
  readonly orderedCells: SMUIDataTableCellAccessor[];
  readonly checkbox: SMUICheckboxInputAccessor | undefined;
}
