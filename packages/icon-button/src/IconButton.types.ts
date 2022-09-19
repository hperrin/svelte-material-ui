import type { ComponentProps, ComponentType } from 'svelte';
import type { SmuiComponent, SmuiElementComponentDev } from '@smui/common';
import type Component from './IconButton.svelte';

export declare class IconButtonComponentDev<
  T extends string = 'button',
  C extends ComponentType<SmuiComponent> = ComponentType<
    SmuiElementComponentDev<T>
  >
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<
      svelte.JSX.HTMLAttributes<ReturnType<InstanceType<C>['getElement']>>
    >,
    | 'use'
    | 'class'
    | 'style'
    | 'ripple'
    | 'color'
    | 'toggle'
    | 'pressed'
    | 'ariaLabelOn'
    | 'ariaLabelOff'
    | 'touch'
    | 'displayFlex'
    | 'size'
    | 'href'
    | 'action'
    | 'component'
    | 'tag'
  > &
    ComponentProps<Component>;
}
