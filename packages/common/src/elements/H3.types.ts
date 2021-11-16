import type Component from './H3.svelte';

export declare class H3ComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLHeadingElement>>,
    'use'
  > &
    Component['$$prop_def'];
}
