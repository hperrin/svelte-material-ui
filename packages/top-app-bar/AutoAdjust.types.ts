import type { SMUIComponent } from '@smui/common';
import type Component from './AutoAdjust.svelte';
import type { MainComponentDev as MainElementComponentDev } from '@smui/common/elements';

export declare class AutoAdjustComponentDev<
  C extends SMUIComponent = MainElementComponentDev
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
