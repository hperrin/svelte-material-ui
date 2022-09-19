import type { ComponentProps } from 'svelte';
import type Component from './LeadingIcon.svelte';

export declare class LeadingIconComponentDev extends Component {
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
}
