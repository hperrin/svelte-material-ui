import type Component from './TopAppBar.svelte';

export declare class TopAppBarComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLElement>>,
    | 'use'
    | 'class'
    | 'style'
    | 'variant'
    | 'color'
    | 'collapsed'
    | 'prominent'
    | 'dense'
    | 'scrollTarget'
  > &
    Component['$$prop_def'];
}
