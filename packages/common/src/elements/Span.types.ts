import type Component from './Span.svelte';

export declare class SpanComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<Partial<svelte.JSX.HTMLAttributes<HTMLSpanElement>>, 'use'> &
    Component['$$prop_def'];
}
