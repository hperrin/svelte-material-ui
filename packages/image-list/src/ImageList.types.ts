import type { SmuiComponentDev } from '@smui/common';
import type Component from './ImageList.svelte';

export declare class ImageListComponentDev
  extends Component
  implements SmuiComponentDev
{
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

  getElement(): ReturnType<Component['getElement']>;
}
