import type { SMUIComponent } from './smui.d';
import type Component from './H2.svelte';

export declare class H2ComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLHeadingElement>>,
    'use'
  > &
    Component['$$prop_def'];
}
