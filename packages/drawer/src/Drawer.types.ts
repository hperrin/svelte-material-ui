import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './Drawer.svelte';

export declare class DrawerComponentDev
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
    Partial<svelte.JSX.HTMLAttributes<HTMLElement>>,
    'use' | 'class' | 'variant' | 'open' | 'fixed'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
