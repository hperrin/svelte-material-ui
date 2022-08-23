import type { SmuiComponentDev } from '@smui/common';
import type Component from './Set.svelte';

export declare class SetComponentDev
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
    | 'use'
    | 'class'
    | 'chips'
    | 'key'
    | 'selected'
    | 'nonInteractive'
    | 'choice'
    | 'filter'
    | 'input'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
