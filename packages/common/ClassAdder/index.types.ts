import type { SvelteComponentDev } from 'svelte/internal';

export type ClassAdderInternals<T extends typeof SvelteComponentDev> = {
  component: T;
  class: string;
  /**
   * Map of name to context name. The context should resolve to a Svelte store,
   * and the class will be added if the Svelte store's value is true.
   */
  classMap: { [k: string]: string };
  contexts: { [k: string]: any };
  props: { [k: string]: any };
};
