import type { SMUIComponent } from '@smui/common';
import type Component from './IconButton.svelte';
import type { ButtonComponentDev as ButtonElementComponentDev } from '@smui/common/elements';

export declare class IconButtonComponentDev<
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
    | 'use'
    | 'class'
    | 'style'
    | 'ripple'
    | 'color'
    | 'toggle'
    | 'pressed'
    | 'ariaLabelOn'
    | 'ariaLabelOff'
    | 'href'
    | 'action'
    | 'component'
  > &
    Component['$$prop_def'];
}
