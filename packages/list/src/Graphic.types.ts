import type { SmuiComponentDev } from '@smui/common';
import type Component from './Graphic.svelte';

export declare class GraphicComponentDev
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
    Partial<svelte.JSX.HTMLAttributes<HTMLSpanElement>>,
    'use' | 'class'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
