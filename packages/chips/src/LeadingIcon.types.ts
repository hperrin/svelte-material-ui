import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './LeadingIcon.svelte';

export declare class LeadingIconComponentDev
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
    'use' | 'class'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
