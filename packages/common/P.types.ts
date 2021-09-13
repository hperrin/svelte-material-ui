import type { SMUIComponent } from './SMUIComponent.d';
import type Component from './P.svelte';

export declare class PComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLParagraphElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
