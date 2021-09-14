import type { SMUIComponent } from './smui.d';
import type Component from './Li.svelte';

export declare class LiComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLLIElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
