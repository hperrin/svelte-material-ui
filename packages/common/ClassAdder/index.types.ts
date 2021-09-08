import type { SvelteComponent } from 'svelte';

export type ClassAdderInternals = {
  component: SvelteComponent;
  class: string;
  /** Map of name to context name that resolves to a Svelte Store. */
  classMap?: { [k: string]: string };
  contexts?: { [k: string]: any };
  props?: { [k: string]: any };
};
