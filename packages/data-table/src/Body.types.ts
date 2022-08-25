import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './Body.svelte';

export declare class BodyComponentDev
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
    'use' | 'class'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}

import type { SMUIDataTableRowAccessor } from './Row.types.js';

export interface SMUIDataTableBodyAccessor {
  readonly rows: SMUIDataTableRowAccessor[];
  readonly orderedRows: SMUIDataTableRowAccessor[];
}
