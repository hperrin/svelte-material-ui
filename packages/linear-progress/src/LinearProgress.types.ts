import type Component from './LinearProgress.svelte';

export declare class LinearProgressComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    | 'use'
    | 'class'
    | 'style'
    | 'indeterminate'
    | 'closed'
    | 'progress'
    | 'buffer'
  > &
    Component['$$prop_def'];
}
