import type { ComponentProps, ComponentType } from 'svelte';
import type { SmuiComponent, ElementComponentDev } from '@smui/common';
import type Component from './Button.svelte';

export declare class ButtonComponentDev<
    T extends string = 'button',
    C extends ComponentType<SmuiComponent> = ComponentType<
      ElementComponentDev<T>
    >
  >
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
    Partial<
      svelte.JSX.HTMLAttributes<ReturnType<InstanceType<C>['getElement']>>
    >,
    | 'use'
    | 'class'
    | 'style'
    | 'ripple'
    | 'color'
    | 'variant'
    | 'touch'
    | 'href'
    | 'action'
    | 'defaultAction'
    | 'secondary'
    | 'component'
    | 'tag'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<InstanceType<C>['getElement']>;
}
