import type { SMUIComponent } from './smui.d';
import type Component from './Ul.svelte';

export declare class UlComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLUListElement>>,
    'use'
  > &
    Component['$$prop_def'];
}
