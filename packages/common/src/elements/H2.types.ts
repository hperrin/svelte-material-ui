import type Component from './H2.svelte';

export declare class H2ComponentDev extends Component {
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
