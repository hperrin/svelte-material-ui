import type Component from './A.svelte';

export declare class AComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLAnchorElement>>,
    'use' | 'href'
  > &
    Component['$$prop_def'];
}
