/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

// Needed until https://github.com/sveltejs/language-tools/issues/431 is solved.

declare namespace svelteHTML {
  type EventHandler<E, T> = import('svelte/elements').EventHandler<E, T>;

  interface HTMLAttributes<T extends EventTarget = any> {
    onMyEvent?: EventHandler<CustomEvent, T> | null;
  }
}
