import type { ComponentType } from 'svelte';

import type { SmuiComponent, SmuiElementTagNameMap } from '../smui.types.js';
import type SmuiElement from '../SmuiElement.svelte';

export type ClassAdderInternals<
  T extends keyof SmuiElementTagNameMap = 'div',
  C extends SmuiComponent<T> = SmuiElement<T>
> = {
  component: ComponentType<C>;
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
