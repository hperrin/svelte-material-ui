import type { SMUIComponent } from './SMUIComponent.d';
import type Component from './Aside.svelte';

export declare class AsideComponentDev extends SMUIComponent {
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
