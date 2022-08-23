import type { SmuiComponentDev } from '@smui/common';
import type Component from './NotchedOutline.svelte';

export declare class NotchedOutlineComponentDev
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
    'use' | 'class' | 'notched' | 'noLabel'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
