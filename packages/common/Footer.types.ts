import type { SMUIComponent } from './smui.d';
import type Component from './Footer.svelte';

export declare class FooterComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
