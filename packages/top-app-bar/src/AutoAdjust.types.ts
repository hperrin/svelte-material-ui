import type { SmuiComponentDev, ElementComponentDev } from '@smui/common';
import type Component from './AutoAdjust.svelte';

export declare class AutoAdjustComponentDev<
    T extends string = 'main',
    C extends SmuiComponentDev = ElementComponentDev<T>
  >
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
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    'use' | 'class' | 'topAppBar' | 'component' | 'tag'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<C['getElement']>;
}
