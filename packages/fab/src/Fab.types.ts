import type { ComponentProps, ComponentType } from 'svelte';
import type { SmuiComponent, SmuiElementComponentDev } from '@smui/common';
import type Component from './Fab.svelte';

export declare class FabComponentDev<
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
    | 'mini'
    | 'exited'
    | 'extended'
    | 'touch'
    | 'href'
    | 'component'
    | 'tag'
  > &
    ComponentProps<Component>;
}
