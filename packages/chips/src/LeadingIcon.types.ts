import type { SmuiComponentDev } from '@smui/common';
import type Component from './LeadingIcon.svelte';

export declare class LeadingIconComponentDev
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
    'use' | 'class'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
