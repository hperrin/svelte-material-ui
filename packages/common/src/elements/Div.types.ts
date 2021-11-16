import type Component from './Div.svelte';

export declare class DivComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>, 'use'> &
    Component['$$prop_def'];
}
