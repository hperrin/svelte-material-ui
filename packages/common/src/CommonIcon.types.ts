import type { ComponentProps, ComponentType } from 'svelte';
import type { SmuiComponent } from './smui.types.js';
import type { ElementComponentDev } from './Element.types.js';
import type Component from './CommonIcon.svelte';

export declare class CommonIconComponentDev<
    T extends string = 'i',
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
    'use' | 'class' | 'on' | 'component' | 'tag'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<InstanceType<C>['getElement']>;
}
