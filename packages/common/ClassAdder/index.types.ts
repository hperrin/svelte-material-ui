import type { SMUIComponent } from '../SMUIComponent.d';

export type ClassAdderInternals = {
  component: typeof SMUIComponent;
  class: string;
  /** Map of name to context name that resolves to a Svelte Store. */
  classMap?: { [k: string]: string };
  contexts?: { [k: string]: any };
  props?: { [k: string]: any };
};
