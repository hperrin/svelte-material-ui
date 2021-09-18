import type Component from './Li.svelte';

export declare class LiComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<Partial<svelte.JSX.HTMLAttributes<HTMLLIElement>>, 'use'> &
    Component['$$prop_def'];
}
