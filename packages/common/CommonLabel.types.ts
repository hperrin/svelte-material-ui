import type { SvelteComponentDev } from 'svelte/internal';
import type Component from './CommonLabel.svelte';
import type { SpanComponentDev } from './elements/Span.types.js';

export declare class CommonLabelComponentDev<
  C extends SvelteComponentDev = SpanComponentDev
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    'use' | 'class' | 'component'
  > &
    Component['$$prop_def'];
}
