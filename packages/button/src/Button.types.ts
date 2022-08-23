import type { SmuiComponentDev, ElementComponentDev } from '@smui/common';
import type Component from './Button.svelte';

export declare class ButtonComponentDev<
    T extends string = 'button',
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
    | 'use'
    | 'class'
    | 'style'
    | 'ripple'
    | 'color'
    | 'variant'
    | 'touch'
    | 'href'
    | 'action'
    | 'defaultAction'
    | 'secondary'
    | 'component'
    | 'tag'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<C['getElement']>;
}
