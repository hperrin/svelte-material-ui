import type Component from './Paper.svelte';

export declare class PaperComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'square' | 'color' | 'elevation' | 'transition'
  > &
    Component['$$prop_def'];
}
