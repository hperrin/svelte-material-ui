import type Component from './Input.svelte';

export declare class InputComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLInputElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
