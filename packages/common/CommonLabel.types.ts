import type { SMUIComponent } from './smui.d';
import type Component from './CommonLabel.svelte';
import type { SpanComponentDev } from './Span.types';

export declare class CommonLabelComponentDev<
  C extends SMUIComponent = SpanComponentDev
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
