import type { ComponentType, SvelteComponent } from 'svelte';

import type { SmuiEveryElement } from '../smui.types.js';

export type ClassAdderInternals<
  T extends SmuiEveryElement = 'div',
  C extends typeof SvelteComponent = ComponentType<SvelteComponent>
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
