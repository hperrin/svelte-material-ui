import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './PrimaryAction.svelte';

export declare class PrimaryActionComponentDev
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
    'use' | 'class' | 'style' | 'ripple' | 'color' | 'padded' | 'tabindex'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
