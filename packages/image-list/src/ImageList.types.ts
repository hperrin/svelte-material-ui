import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type Component from './ImageList.svelte';

export declare class ImageListComponentDev
  extends Component
  implements SmuiComponent
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
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
