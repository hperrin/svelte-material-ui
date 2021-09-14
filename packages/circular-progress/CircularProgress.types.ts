import type Component from './CircularProgress.svelte';

export declare class CircularProgressComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'indeterminate' | 'closed' | 'progress' | 'fourColor'
  > &
    Component['$$prop_def'];
}
