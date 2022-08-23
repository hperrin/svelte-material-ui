import type { SmuiComponentDev } from '@smui/common';
import type Component from './Icon.svelte';

export declare class IconComponentDev
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
    'use' | 'class' | 'role' | 'tabindex' | 'disabled'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
