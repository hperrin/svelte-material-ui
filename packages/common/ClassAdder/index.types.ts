import type { SMUIComponent } from '../SMUIComponent.d';

export type ClassAdderInternals = {
  component: typeof SMUIComponent;
  class: string;
  /**
   * Map of name to context name. The context should resolve to a Svelte store,
   * and the class will be added if the Svelte store's value is true.
   */
  classMap: { [k: string]: string };
  contexts: { [k: string]: any };
  props: { [k: string]: any };
};
