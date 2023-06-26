/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:MDCSnackbar:closed']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUISnackbar:closed']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}
