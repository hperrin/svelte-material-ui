import type { ComponentType } from 'svelte';

import type { SmuiComponent } from '../smui.types.js';
import type { ElementComponentDev } from '../Element.types.js';

export type ClassAdderInternals<
  T extends string = 'div',
  C extends ComponentType<SmuiComponent> = ComponentType<ElementComponentDev<T>>
> = {
  component: C;
  tag: T;
  class: string;
  /**
   * Map of name to context name. The context should resolve to a Svelte store,
   * and the class will be added if the Svelte store's value is true.
   */
  classMap: { [k: string]: string };
  contexts: { [k: string]: any };
  props: { [k: string]: any };
};
