import type { ComponentProps, ComponentType } from 'svelte';
import type { SmuiComponent, SmuiElementComponentDev } from '@smui/common';
import type Component from './Separator.svelte';

export declare class SeparatorComponentDev<
  T extends string = 'li',
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
    | 'padded'
    | 'inset'
    | 'insetLeading'
    | 'insetTrailing'
    | 'insetPadding'
    | 'component'
    | 'tag'
  > &
    ComponentProps<Component>;
}
