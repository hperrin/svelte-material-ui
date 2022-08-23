import type { SmuiComponentDev } from '@smui/common';
import type Component from './Paper.svelte';

export declare class PaperComponentDev
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
    | 'use'
    | 'class'
    | 'variant'
    | 'square'
    | 'color'
    | 'elevation'
    | 'transition'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
