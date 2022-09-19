import type { ComponentProps, ComponentType } from 'svelte';
import type { SmuiComponent } from './smui.types.js';
import type { SmuiElementComponentDev } from './SmuiElement.types.js';
import type Component from './CommonLabel.svelte';

export declare class CommonLabelComponentDev<
  T extends string = 'span',
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
    'use' | 'class' | 'component' | 'tag'
  > &
    ComponentProps<Component>;
}
