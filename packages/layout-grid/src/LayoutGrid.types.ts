import type { SmuiComponentDev } from '@smui/common';
import type { InnerGridComponentDev } from './InnerGrid.types.js';
import type Component from './LayoutGrid.svelte';

export declare class LayoutGridComponentDev
  extends Component
  implements SmuiComponentDev
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'fixedColumnWidth' | 'align'
  > & {
    [k in keyof InnerGridComponentDev['$$prop_def'] as `innerGrid\$${k}`]?: InnerGridComponentDev['$$prop_def'][k];
  } & Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
