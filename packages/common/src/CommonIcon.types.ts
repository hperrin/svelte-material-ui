import type { SmuiComponentDev } from './smui.types.js';
import type { ElementComponentDev } from './Element.types.js';
import type Component from './CommonIcon.svelte';

export declare class CommonIconComponentDev<
    T extends string = 'i',
    C extends SmuiComponentDev = ElementComponentDev<T>
  >
  extends Component
  implements SmuiComponentDev
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    'use' | 'class' | 'on' | 'component' | 'tag'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<C['getElement']>;
}
