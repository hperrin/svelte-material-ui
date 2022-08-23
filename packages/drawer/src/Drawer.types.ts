import type { SmuiComponentDev } from '@smui/common';
import type Component from './Drawer.svelte';

export declare class DrawerComponentDev
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
    Partial<svelte.JSX.HTMLAttributes<HTMLElement>>,
    'use' | 'class' | 'variant' | 'open' | 'fixed'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
