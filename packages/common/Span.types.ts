import type { SMUIComponent } from './SMUIComponent.d';
import type Component from './Span.svelte';

export declare class SpanComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLSpanElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
