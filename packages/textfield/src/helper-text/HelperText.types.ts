import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './HelperText.svelte';

export declare class HelperTextComponentDev
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
    'use' | 'class' | 'id' | 'persistent' | 'validationMsg'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
