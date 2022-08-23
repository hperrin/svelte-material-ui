import type { SmuiComponentDev } from '@smui/common';
import type Component from './Wrapper.svelte';

export declare class WrapperComponentDev
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
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'rich'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
