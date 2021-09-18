import type Component from './P.svelte';

export declare class PComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLParagraphElement>>,
    'use'
  > &
    Component['$$prop_def'];
}
