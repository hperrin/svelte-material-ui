import type { SMUIComponent } from './smui.d';
import type Component from './A.svelte';

export declare class AComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLAnchorElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
