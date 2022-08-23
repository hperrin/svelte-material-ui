import type { SmuiComponentDev, ElementComponentDev } from '@smui/common';
import type Component from './Fab.svelte';

export declare class FabComponentDev<
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
    | 'mini'
    | 'exited'
    | 'extended'
    | 'touch'
    | 'href'
    | 'component'
    | 'tag'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<C['getElement']>;
}
