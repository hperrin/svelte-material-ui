import type { SMUIComponent } from '@smui/common';
import type Component from './Separator.svelte';
import type { LiComponentDev as LiElementComponentDev } from '@smui/common/elements';

export declare class SeparatorComponentDev<
  C extends SMUIComponent = LiElementComponentDev
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}
