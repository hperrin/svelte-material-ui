import type { SMUIComponent } from './SMUIComponent.d';
import type Component from './Section.svelte';

export declare class SectionComponentDev extends SMUIComponent {
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
