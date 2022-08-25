export { DefaultFocusState } from '@material/menu';
import type { ComponentProps } from 'svelte';
import type { SmuiComponent } from '@smui/common';
import type { ItemComponentDev } from '@smui/list';
import type Component from './Option.svelte';

export declare class OptionComponentDev
  extends Component
  implements SmuiComponent
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<ItemComponentDev['$$prop_def'], 'value'> &
    ComponentProps<Component>;

  getElement(): ReturnType<Component['getElement']>;
}
