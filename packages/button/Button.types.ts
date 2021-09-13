import type { SMUIComponent } from '@smui/common';
import type Component from './Button.svelte';
import type { ButtonComponentDev as ButtonElementComponentDev } from '@smui/common/elements';

export declare class ButtonComponentDev<
  C extends SMUIComponent = ButtonElementComponentDev
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
