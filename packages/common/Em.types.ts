import type { SMUIComponent } from './smui.d';
import type Component from './Em.svelte';

export declare class EmComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<Partial<svelte.JSX.HTMLAttributes<HTMLElement>>, 'use'> &
    Component['$$prop_def'];
}
