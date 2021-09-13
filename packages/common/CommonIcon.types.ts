import type { SMUIComponent } from './SMUIComponent';
import type Component from './CommonIcon.svelte';
import type { IComponentDev } from './I.types';

export declare class CommonIconComponentDev<
  C extends SMUIComponent = IComponentDev
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
