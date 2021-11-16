import type Component from './ImageList.svelte';

export declare class ImageListComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLUListElement>>,
    'use' | 'class' | 'masonry' | 'withTextProtection'
  > &
    Component['$$prop_def'];
}
