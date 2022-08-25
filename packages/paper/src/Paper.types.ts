import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './Paper.svelte';

export declare class PaperComponentDev
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
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    | 'use'
    | 'class'
    | 'variant'
    | 'square'
    | 'color'
    | 'elevation'
    | 'transition'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
